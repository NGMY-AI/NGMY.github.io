import 'package:flutter/material.dart';

import 'ngmy_communicate_storage.dart';
import 'ngmy_wallet_payment_ui.dart';

enum NgmyCommunicatePassTier { twoWeek, monthly, yearly }

class NgmyCommunicatePassOption {
  final NgmyCommunicatePassTier tier;
  final String label;
  final double fee;
  final int days;

  const NgmyCommunicatePassOption({
    required this.tier,
    required this.label,
    required this.fee,
    required this.days,
  });
}

class NgmyCommunicatePayments {
  static const double defaultFeeAmount = 1.0;
  static const int defaultMinutesPerPayment = 20;

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

  static Map<String, String> _accessMap(dynamic config) {
    final raw = (config as dynamic).communicateAccessUntilByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).communicateAccessUntilByEmail = map;
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static bool _tierEnabled(dynamic config, String enabledField, {bool defaultOn = false}) {
    final v = (config as dynamic);
    try {
      final raw = v[enabledField];
      if (raw is bool) return raw;
    } catch (_) {}
    return defaultOn;
  }

  static double _tierFee(dynamic config, String feeField, double fallback) {
    final v = (config as dynamic);
    try {
      final raw = v[feeField];
      if (raw is num && raw >= 0) return raw.toDouble();
    } catch (_) {}
    return fallback;
  }

  static List<NgmyCommunicatePassOption> enabledPassOptions(dynamic config) {
    final options = <NgmyCommunicatePassOption>[];
    final legacyFee = feeAmountFromConfig(config);

    if (_tierEnabled(config, 'communicatePassTwoWeekEnabled', defaultOn: true)) {
      final fee = _tierFee(config, 'communicatePassTwoWeekFee', legacyFee);
      if (fee > 0) {
        options.add(NgmyCommunicatePassOption(tier: NgmyCommunicatePassTier.twoWeek, label: '2 weeks', fee: fee, days: 14));
      }
    }
    if (_tierEnabled(config, 'communicatePassMonthlyEnabled')) {
      final fee = _tierFee(config, 'communicatePassMonthlyFee', legacyFee * 3);
      if (fee > 0) {
        options.add(NgmyCommunicatePassOption(tier: NgmyCommunicatePassTier.monthly, label: '1 month', fee: fee, days: 30));
      }
    }
    if (_tierEnabled(config, 'communicatePassYearlyEnabled')) {
      final fee = _tierFee(config, 'communicatePassYearlyFee', legacyFee * 24);
      if (fee > 0) {
        options.add(NgmyCommunicatePassOption(tier: NgmyCommunicatePassTier.yearly, label: '1 year', fee: fee, days: 365));
      }
    }
    return options;
  }

  static bool hasActivePass(dynamic config, String email) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    final untilRaw = _accessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return false;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static DateTime? passExpiresAt(dynamic config, String email) {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    final untilRaw = _accessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return null;
    return DateTime.tryParse(untilRaw);
  }

  static void grantPass(dynamic config, String email, {required int days}) {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_accessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAccessMap(config, map);
  }

  static Future<bool> needsPayment(String email, dynamic config) async {
    if (hasActivePass(config, email)) return false;
    final options = enabledPassOptions(config);
    if (options.isEmpty) return false;
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(email);
    return used >= thresholdSeconds(config);
  }

  static Future<NgmyCommunicatePassOption?> _pickPassOption(
    BuildContext context,
    List<NgmyCommunicatePassOption> options,
  ) async {
    if (options.length == 1) return options.first;
    return showModalBottomSheet<NgmyCommunicatePassOption>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (ctx) {
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        return Container(
          margin: const EdgeInsets.fromLTRB(12, 0, 12, 16),
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
          decoration: BoxDecoration(
            color: isDark ? const Color(0xFF121726) : Colors.white,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text(
                'Choose advisor access',
                style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: isDark ? Colors.white : Colors.black87),
              ),
              const SizedBox(height: 6),
              Text(
                'Your free chat time is used up. Pick a plan to keep texting advisors.',
                style: TextStyle(fontSize: 13, color: isDark ? Colors.white54 : Colors.black54, height: 1.35),
              ),
              const SizedBox(height: 14),
              ...options.map(
                (o) => Padding(
                  padding: const EdgeInsets.only(bottom: 8),
                  child: FilledButton(
                    onPressed: () => Navigator.pop(ctx, o),
                    style: FilledButton.styleFrom(
                      backgroundColor: const Color(0xFFF472B6),
                      minimumSize: const Size(double.infinity, 48),
                    ),
                    child: Text(
                      '${o.label} — \$${o.fee.toStringAsFixed(2)}',
                      style: const TextStyle(fontWeight: FontWeight.w800),
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }

  static Future<bool> confirmPassPayment({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    VoidCallback? onDataChanged,
    Future<bool> Function()? onPersistConfig,
    String productName = 'NGMY Advisors',
  }) async {
    final email = ((user as dynamic).email as String?) ?? '';
    final options = enabledPassOptions(config);
    if (options.isEmpty) return true;

    final picked = await _pickPassOption(context, options);
    if (picked == null) return false;

    final label = productName.trim().isEmpty ? 'NGMY Advisors' : productName.trim();
    final ok = await NgmyFamilyTreeStyleCharge.confirmAndCharge(
      context: context,
      user: user,
      amount: picked.fee,
      title: '$label — ${picked.label}',
      message:
          'Unlock unlimited advisor chat for ${picked.label} (\$${picked.fee.toStringAsFixed(2)}). '
          'Your access syncs when you sign in on another device.',
      onCharge: onCharge,
    );
    if (!ok || email.isEmpty) return ok;

    grantPass(config, email, days: picked.days);
    await NgmyCommunicateTimeTracker.resetAfterPayment(email);
    onDataChanged?.call();
    if (onPersistConfig != null) await onPersistConfig();
    return true;
  }

  @Deprecated('Use confirmPassPayment')
  static Future<bool> confirmTimeBlockPayment({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    String productName = 'Chat',
    VoidCallback? onDataChanged,
    Future<bool> Function()? onPersistConfig,
  }) =>
      confirmPassPayment(
        context: context,
        user: user,
        config: config,
        onCharge: onCharge,
        onDataChanged: onDataChanged,
        onPersistConfig: onPersistConfig,
        productName: productName,
      );
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
