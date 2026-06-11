import 'package:flutter/material.dart';

import 'ngmy_communicate_storage.dart';
import 'ngmy_wallet_payment_ui.dart';

class NgmyCommunicatePayments {
  static const double defaultFeeAmount = 1.0;
  static const int defaultMinutesPerPayment = 10;

  static double feeAmountFromConfig(dynamic config) {
    final v = (config as dynamic).communicateFeeAmount;
    if (v is num && v >= 0) return v.toDouble();
    return defaultFeeAmount;
  }

  static int minutesPerPaymentFromConfig(dynamic config) {
    final v = (config as dynamic).communicateMinutesPerPayment;
    if (v is num && v > 0) return v.toInt();
    return defaultMinutesPerPayment;
  }

  static int thresholdSeconds(dynamic config) => minutesPerPaymentFromConfig(config) * 60;

  static Future<bool> needsPayment(String email, dynamic config) async {
    if (feeAmountFromConfig(config) <= 0) return false;
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(email);
    return used >= thresholdSeconds(config);
  }

  static Future<bool> confirmTimeBlockPayment({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
  }) async {
    final amount = feeAmountFromConfig(config);
    final mins = minutesPerPaymentFromConfig(config);
    if (amount <= 0) return true;
    final email = ((user as dynamic).email as String?) ?? '';
    final ok = await NgmyFamilyTreeStyleCharge.confirmAndCharge(
      context: context,
      user: user,
      amount: amount,
      title: 'AI chat — $mins min block',
      message: 'Pay for another $mins minutes of AI chat. Time is shared across NGMY Helper, World of Love, and all assistants on your account (synced on every device).',
      onCharge: onCharge,
    );
    if (ok && email.isNotEmpty) {
      await NgmyCommunicateTimeTracker.resetAfterPayment(email);
    }
    return ok;
  }
}

/// Thin wrapper so we don't import family_tree from here.
class NgmyFamilyTreeStyleCharge {
  static Future<bool> confirmAndCharge({
    required BuildContext context,
    required dynamic user,
    required double amount,
    required String title,
    required String message,
    required Future<bool> Function(double amount, String description) onCharge,
  }) async {
    if (amount <= 0) return true;
    final balance = ((user as dynamic).accountBalance as num).toDouble();
    if (balance + 0.001 < amount) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Insufficient balance (\$${balance.toStringAsFixed(2)}). Need \$${amount.toStringAsFixed(2)}.')),
        );
      }
      return false;
    }
    final ok = await showNgmyWalletPaymentConfirm(
      context: context,
      title: title,
      message: message,
      amount: amount,
      balance: balance,
    );
    if (!ok) return false;
    return onCharge(amount, title);
  }
}
