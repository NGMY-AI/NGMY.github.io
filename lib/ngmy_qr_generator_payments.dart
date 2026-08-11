import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_music_payments.dart';

/// QR Code Generator — \$2 / week wallet access.
class NgmyQrGeneratorPayments {
  static const double defaultWeeklyFee = 2.0;
  static const int accessDays = 7;
  static const _prefsPrefix = 'ngmy_qr_generator_access_until_';

  static double weeklyFeeFromConfig(dynamic config) {
    try {
      final v = (config as dynamic).qrGeneratorWeeklyFee;
      if (v is num && v >= 0) return v.toDouble();
    } catch (_) {}
    return defaultWeeklyFee;
  }

  static String _key(String email) => email.toLowerCase().trim();

  static Future<DateTime?> accessUntil(String email) async {
    final key = _key(email);
    if (key.isEmpty) return null;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString('$_prefsPrefix$key');
      if (raw == null || raw.isEmpty) return null;
      return DateTime.tryParse(raw);
    } catch (_) {
      return null;
    }
  }

  static Future<bool> hasActiveAccess(String email) async {
    final until = await accessUntil(email);
    return until != null && until.isAfter(DateTime.now());
  }

  static Future<void> grantWeek(String email, {int days = accessDays}) async {
    final key = _key(email);
    if (key.isEmpty) return;
    final existing = await accessUntil(email);
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    final until = base.add(Duration(days: days)).toUtc().toIso8601String();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_prefsPrefix$key', until);
  }

  /// Paywall before opening / using the QR generator.
  static Future<bool> ensureAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    VoidCallback? onDataChanged,
  }) async {
    if ((user as dynamic).isAdmin == true) return true;
    final email = ((user as dynamic).email as String?) ?? '';
    if (email.trim().isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign in to use QR Generator.')),
        );
      }
      return false;
    }
    if (await hasActiveAccess(email)) return true;

    final fee = weeklyFeeFromConfig(config);
    if (fee <= 0) {
      await grantWeek(email);
      return true;
    }

    final charged = await NgmyMusicPayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: fee,
      title: 'QR Generator — weekly',
      message:
          'Pay \$${fee.toStringAsFixed(2)} for 7 days of QR code generation. '
          'Create, template, save, and download QR codes for the week.',
      onCharge: onCharge,
    );
    if (!charged) return false;
    await grantWeek(email);
    onDataChanged?.call();
    return true;
  }
}
