import 'package:flutter/material.dart';

import 'ngmy_music_payments.dart';

/// NGMY App Studio cloud-save pricing (stored on [AppConfig] in main.dart).
class NgmyAppStudioPayments {
  static const double defaultCloudSaveFee = 2.0;

  static double cloudSaveFeeFromConfig(dynamic config) {
    final v = (config as dynamic).appStudioCloudSaveFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultCloudSaveFee;
  }

  static Future<bool> confirmAndChargeCloudSave({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required String appName,
    required Future<bool> Function(double amount, String description) onCharge,
  }) {
    return NgmyMusicPayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: cloudSaveFeeFromConfig(config),
      title: 'Save app to cloud',
      message: 'Save "$appName" to your NGMY cloud slot? One app per account — view on every device.',
      onCharge: onCharge,
    );
  }
}
