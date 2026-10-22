import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_game_session.dart';
import 'ngmy_network_resilience.dart';

/// Outcome of settling one game bet or payout on the server.
class NgmyServerWalletResult {
  const NgmyServerWalletResult({required this.applied, this.balance, this.reason, this.serverError = false});

  /// The server step itself failed (an error inside it, not a lost connection). Nothing was
  /// changed, so the caller can safely save the game another way.
  final bool serverError;

  /// True when this call changed the balance.
  final bool applied;

  /// The account balance as the server now holds it.
  final double? balance;

  /// Set when nothing changed: 'duplicate', 'insufficient', 'no_user', 'not_game_txn', 'bad_request'.
  final String? reason;
}

/// The balance the server last confirmed for each account (lowercase email). Once a game
/// has been settled on the server, the phone shows this number rather than recalculating
/// the balance from its own history, which is what made two phones disagree.
final Map<String, double> ngmyServerBalances = {};
final Map<String, DateTime> ngmyServerBalanceAt = {};

/// The balance the server confirmed for [key] a moment ago. Only that short window is trusted
/// over the database row: right after a game the row can still show the older number, but a
/// minute later another phone may have changed it, and the row is the truth.
double? ngmyFreshServerBalance(String key, {Duration within = const Duration(seconds: 4)}) {
  final at = ngmyServerBalanceAt[key];
  if (at == null || DateTime.now().difference(at) > within) return null;
  return ngmyServerBalances[key];
}

int _gameSettlesInFlight = 0;

/// Marks a game bet or payout as on its way to the server. Balance saves wait for it, so a save
/// made from this phone's figure can never land between the bet and the server's answer.
void ngmyBeginGameSettle() {
  _gameSettlesInFlight++;
  ngmyGameSettleStarted();
}

void ngmyEndGameSettle() {
  if (_gameSettlesInFlight > 0) _gameSettlesInFlight--;
  ngmyGameSettleFinished();
}

Future<void> ngmyWaitForGameSettles({Duration max = const Duration(seconds: 8)}) async {
  final until = DateTime.now().add(max);
  while (_gameSettlesInFlight > 0 && DateTime.now().isBefore(until)) {
    await Future<void>.delayed(const Duration(milliseconds: 150));
  }
}

/// Settles a game bet or payout through `ngmy_apply_game_txn` (see
/// supabase/ngmy_game_wallet_rpc.sql). Returns null only when the server could
/// not be reached, so the caller can keep the receipt in its outbox and retry.
Future<NgmyServerWalletResult?> ngmySettleGameTxnOnServer(Map<String, dynamic> txn) async {
  try {
    final raw = await Supabase.instance.client
        .rpc('ngmy_apply_game_txn', params: {'p_txn': txn})
        .timeout(kNgmyCloudWriteTimeout);
    final map = Map<String, dynamic>.from(raw as Map);
    final balance = (map['balance'] as num?)?.toDouble();
    final email = (txn['userEmail'] ?? '').toString().toLowerCase().trim();
    if (balance != null && email.isNotEmpty) {
      ngmyServerBalances[email] = balance;
      ngmyServerBalanceAt[email] = DateTime.now();
    }
    if (balance != null && email.isNotEmpty) ngmyLastServerBalance[email] = balance;
    return NgmyServerWalletResult(
      applied: map['applied'] == true,
      balance: balance,
      reason: map['reason']?.toString(),
    );
  } on PostgrestException catch (e) {
    debugPrint('[wallet server] game txn rejected: ${e.code} ${e.message}');
    return NgmyServerWalletResult(applied: false, reason: 'server_error:${e.code}', serverError: true);
  } catch (e) {
    debugPrint('[wallet server] game txn: $e');
    return null;
  }
}

/// The balance the server last confirmed for each account (lowercase email). A phone saves its
/// balance on its own only when it has gone DOWN from this figure, so a stale phone cannot push
/// an old, higher number back up.
final Map<String, double> ngmyLastServerBalance = {};

/// Net effect (bets negative, payouts positive) of this phone's game receipts that the server has
/// not confirmed yet. The phone's balance already shows them, but the server step will apply them,
/// so a balance save must not apply them a second time.
final Map<String, ({String key, double delta})> ngmyUnsettledGameTxns = {};

double ngmyUnsettledGameNetFor(String key) {
  var sum = 0.0;
  for (final e in ngmyUnsettledGameTxns.values) {
    if (e.key == key) sum += e.delta;
  }
  return sum;
}

/// When this phone last saved a spend (a lower balance) for an account. Debits older than this have
/// already been saved and cannot explain a new drop.
final Map<String, DateTime> ngmyDebitsSavedAt = {};

/// Spends made on this phone that have no ledger receipt in the app's list (Growth Income plan buys).
final List<({String key, double amount, DateTime at})> ngmyNotedDebits = [];

void ngmyNoteLocalDebit(String email, double amount) {
  if (amount < 0.005) return;
  final k = email.toLowerCase().trim();
  final key = k.endsWith('+local.ngmy') ? k.substring(0, k.length - '+local.ngmy'.length) : k;
  ngmyNotedDebits.add((key: key, amount: amount, at: DateTime.now()));
  if (ngmyNotedDebits.length > 200) ngmyNotedDebits.removeRange(0, ngmyNotedDebits.length - 200);
}

double ngmyNotedDebitsSince(String key, DateTime since) {
  var sum = 0.0;
  for (final d in ngmyNotedDebits) {
    if (d.key == key && d.at.isAfter(since)) sum += d.amount;
  }
  return sum;
}

/// The balance to save for an account, given this phone's figure ([local]), the last figure the
/// server confirmed to this phone ([known]) and the server's balance right now ([cloud]).
/// Only the change this phone made since it last looked is applied on top of the server's number,
/// so an old, higher figure on a phone can never bring money back after another phone spent it.
///
/// [explainedDebit] is the total of real spends (withdrawals, purchases, plan buys, admin removals)
/// this phone made since its last save. A drop larger than that has no reason behind it (a stale or
/// half-loaded balance on this phone), so the server's balance is kept instead. Money never leaves
/// an account without a spend that explains it. Null means "no check" (older callers).
double ngmyBalanceToSave({
  required double local,
  required double? known,
  required double? cloud,
  double? explainedDebit,
}) {
  if (cloud == null) return local < 0 ? 0 : local;
  double target;
  if (known != null) {
    final change = local - known;
    if (change.abs() < 0.005) {
      target = cloud;
    } else if (change < 0 && explainedDebit != null && -change > explainedDebit + 0.01) {
      target = cloud;
    } else {
      target = cloud + change;
    }
  } else {
    target = local > cloud + 0.01 ? cloud : local;
    if (explainedDebit != null && target < cloud - 0.005 && cloud - target > explainedDebit + 0.01) {
      target = cloud;
    }
  }
  return target < 0 ? 0 : target;
}
