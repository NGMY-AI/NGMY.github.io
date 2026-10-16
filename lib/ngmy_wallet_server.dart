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
    if (balance != null && email.isNotEmpty) ngmyServerBalances[email] = balance;
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
