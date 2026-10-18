import 'package:flutter/foundation.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

/// Outcome of settling one game bet or payout on the server.
class NgmyServerWalletResult {
  const NgmyServerWalletResult({required this.applied, this.balance, this.reason});

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
void ngmyBeginGameSettle() => _gameSettlesInFlight++;
void ngmyEndGameSettle() {
  if (_gameSettlesInFlight > 0) _gameSettlesInFlight--;
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
  } catch (e) {
    debugPrint('[wallet server] game txn: $e');
    return null;
  }
}

/// The balance the server last confirmed for each account (lowercase email). A phone saves its
/// balance on its own only when it has gone DOWN from this figure, so a stale phone cannot push
/// an old, higher number back up.
final Map<String, double> ngmyLastServerBalance = {};

/// The balance to save for an account, given this phone's figure ([local]), the last figure the
/// server confirmed to this phone ([known]) and the server's balance right now ([cloud]).
/// Only the change this phone made since it last looked is applied on top of the server's number,
/// so an old, higher figure on a phone can never bring money back after another phone spent it.
double ngmyBalanceToSave({required double local, required double? known, required double? cloud}) {
  if (cloud == null) return local < 0 ? 0 : local;
  double target;
  if (known != null) {
    final change = local - known;
    target = change.abs() < 0.005 ? cloud : cloud + change;
  } else {
    target = local > cloud + 0.01 ? cloud : local;
  }
  return target < 0 ? 0 : target;
}
