import 'package:flutter/material.dart';

/// Family tree wallet pricing and photo subscription (stored on [AppConfig] in main.dart).
class NgmyFamilyTreePayments {
  static const double defaultCreateFee = 5.0;
  static const double defaultPhotoMonthlyFee = 15.0;

  static Map<String, String> accessMapFromConfig(dynamic config) {
    final raw = (config as dynamic).familyTreePhotoAccessUntilByEmail;
    if (raw is! Map) return {};
    return raw.map((k, v) => MapEntry(k.toString().toLowerCase().trim(), v.toString()));
  }

  static double createFeeFromConfig(dynamic config) {
    final v = (config as dynamic).familyTreeCreateFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultCreateFee;
  }

  static double photoMonthlyFeeFromConfig(dynamic config) {
    final v = (config as dynamic).familyTreePhotoMonthlyFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultPhotoMonthlyFee;
  }

  static DateTime? photoAccessUntil(dynamic config, String email) {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return null;
    final raw = accessMapFromConfig(config)[key];
    if (raw == null || raw.isEmpty) return null;
    return DateTime.tryParse(raw);
  }

  static bool hasActivePhotoAccess(dynamic config, String email) {
    final until = photoAccessUntil(config, email);
    if (until == null) return false;
    return until.isAfter(DateTime.now());
  }

  static void grantPhotoAccess(dynamic config, String email, {int days = 30}) {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return;
    final map = Map<String, String>.from(accessMapFromConfig(config));
    final existing = photoAccessUntil(config, email);
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    (config as dynamic).familyTreePhotoAccessUntilByEmail = map;
  }

  static Future<bool> confirmAndCharge({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
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
          SnackBar(
            content: Text(
              'Insufficient NGMY balance (\$${balance.toStringAsFixed(2)}). Need \$${amount.toStringAsFixed(2)}.',
            ),
          ),
        );
      }
      return false;
    }
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text(title),
        content: Text('$message\n\nCharge \$${amount.toStringAsFixed(2)} from your NGMY account?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Pay')),
        ],
      ),
    );
    if (ok != true) return false;
    return onCharge(amount, title);
  }
}
