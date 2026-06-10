import 'package:flutter/material.dart';

import 'ngmy_wallet_payment_ui.dart';

/// NGMY Music Studio wallet pricing (stored on [AppConfig] in main.dart).
class NgmyMusicPayments {
  static const double defaultPerSongFee = 1.0;

  static double perSongFeeFromConfig(dynamic config) {
    final v = (config as dynamic).musicStudioPerSongFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultPerSongFee;
  }

  static Future<bool> confirmAndCharge({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required double amount,
    required String title,
    required String message,
    required Future<bool> Function(double amount, String description) onCharge,
    NgmyWalletPaymentTheme theme = NgmyWalletPaymentTheme.standard,
  }) async {
    if (amount <= 0) return true;
    final balance = ((user as dynamic).accountBalance as num).toDouble();
    if (balance + 0.001 < amount) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              'Insufficient NGMY balance (\$${balance.toStringAsFixed(2)}). Need \$${amount.toStringAsFixed(2)}.',
            ),
          ),
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
      theme: theme,
    );
    if (!ok) return false;
    return onCharge(amount, title);
  }
}
