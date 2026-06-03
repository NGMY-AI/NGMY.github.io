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
      barrierColor: Colors.black.withValues(alpha: 0.55),
      builder: (ctx) => _FamilyTreePaymentDialog(
        title: title,
        message: message,
        amount: amount,
        balance: balance,
      ),
    );
    if (ok != true) return false;
    return onCharge(amount, title);
  }
}

class _FamilyTreePaymentDialog extends StatelessWidget {
  const _FamilyTreePaymentDialog({
    required this.title,
    required this.message,
    required this.amount,
    required this.balance,
  });

  final String title;
  final String message;
  final double amount;
  final double balance;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final cardBg = isDark ? const Color(0xFF151D2B) : Colors.white;
    final muted = isDark ? const Color(0xFF1E293B) : const Color(0xFFF8FAFC);
    final text = isDark ? const Color(0xFFF8FAFC) : const Color(0xFF111827);
    final sub = isDark ? const Color(0xFF94A3B8) : const Color(0xFF6B7280);
    const teal = Color(0xFF14B8A6);
    const green = Color(0xFF10B981);

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 22, vertical: 28),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(26),
        child: Material(
          color: cardBg,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Container(
                width: double.infinity,
                padding: const EdgeInsets.fromLTRB(22, 22, 22, 20),
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF0D9488), Color(0xFF14B8A6), Color(0xFF10B981)],
                  ),
                ),
                child: Column(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.18),
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.account_balance_wallet_rounded, color: Colors.white, size: 30),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      title,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w900,
                        fontSize: 18,
                        letterSpacing: 0.2,
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 8),
                child: Column(
                  children: [
                    Text(
                      message,
                      textAlign: TextAlign.center,
                      style: TextStyle(color: sub, fontSize: 13, height: 1.45),
                    ),
                    const SizedBox(height: 18),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 18),
                      decoration: BoxDecoration(
                        color: muted,
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(color: teal.withValues(alpha: 0.35)),
                      ),
                      child: Column(
                        children: [
                          Text('Amount due', style: TextStyle(color: sub, fontSize: 11, fontWeight: FontWeight.w700)),
                          const SizedBox(height: 6),
                          Text(
                            '\$${amount.toStringAsFixed(2)}',
                            style: const TextStyle(
                              fontSize: 32,
                              fontWeight: FontWeight.w900,
                              color: teal,
                              height: 1,
                            ),
                          ),
                          const SizedBox(height: 10),
                          Text(
                            'NGMY balance: \$${balance.toStringAsFixed(2)}',
                            style: TextStyle(color: sub, fontSize: 12),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        Icon(Icons.info_outline_rounded, size: 16, color: sub),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            'Paid from your NGMY wallet. This cannot be undone.',
                            style: TextStyle(color: sub, fontSize: 11, height: 1.35),
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 18),
                child: Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(context, false),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: text,
                          side: BorderSide(color: sub.withValues(alpha: 0.45)),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      flex: 2,
                      child: FilledButton(
                        onPressed: () => Navigator.pop(context, true),
                        style: FilledButton.styleFrom(
                          backgroundColor: green,
                          foregroundColor: Colors.white,
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          elevation: 0,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            const Icon(Icons.lock_rounded, size: 18),
                            const SizedBox(width: 8),
                            Text('Pay \$${amount.toStringAsFixed(2)}', style: const TextStyle(fontWeight: FontWeight.w800)),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
