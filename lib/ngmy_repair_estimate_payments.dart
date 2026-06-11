import 'package:flutter/material.dart';

import 'ngmy_music_payments.dart';

/// Monthly wallet subscription for G-Services AI repair estimates (photo → price).
class NgmyRepairEstimatePayments {
  static const double defaultMonthlyFee = 4.99;

  static double monthlyFeeFromConfig(dynamic config) {
    final v = (config as dynamic).repairEstimateMonthlyFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultMonthlyFee;
  }

  static Map<String, String> _accessMap(dynamic config) {
    final raw = (config as dynamic).repairEstimateAccessUntilByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).repairEstimateAccessUntilByEmail = map;
  }

  static String _key(String email) => email.toLowerCase().trim();

  static bool hasActiveSubscription(dynamic config, String email) {
    if (monthlyFeeFromConfig(config) <= 0) return true;
    final key = _key(email);
    if (key.isEmpty) return false;
    final untilRaw = _accessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return false;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static void grantMonthly(dynamic config, String email, {int days = 30}) {
    final key = _key(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_accessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAccessMap(config, map);
  }

  /// Paywall when opening AI estimate — unlimited photo estimates for 30 days.
  static Future<bool> confirmAndChargeMonthlyAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    final fee = monthlyFeeFromConfig(config);
    final email = ((user as dynamic).email as String?) ?? '';
    if (fee <= 0 || hasActiveSubscription(config, email)) return true;

    final charged = await NgmyMusicPayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: fee,
      title: 'AI Repair Estimates — monthly',
      message:
          'Unlock AI photo repair estimates for 30 days (\$${fee.toStringAsFixed(2)}/month). '
          'Snap a fixture photo — AI scans it and quotes labor + materials for your city. '
          'Notes are optional.',
      onCharge: onCharge,
    );
    if (!charged) return false;
    grantMonthly(config, email);
    onDataChanged();
    await onPersistConfig();
    return true;
  }
}
