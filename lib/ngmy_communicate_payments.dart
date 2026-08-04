import 'package:flutter/material.dart';

import 'ngmy_communicate_storage.dart';
import 'ngmy_communicate_sync.dart';
import 'ngmy_local_growth_income.dart';
import 'ngmy_stripe_payments.dart';
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
  static const int defaultMinutesPerPayment = 30;

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

  static Future<bool> hasStripeOrLegacyPass(String email, dynamic config) async {
    if (await NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.advisors)) return true;
    return hasActivePass(config, email);
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

  static Future<bool> needsPayment(String email, dynamic config, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    if (await NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.advisors)) return false;
    if (hasActivePass(config, email)) return false;
    final used = await NgmyCommunicateTimeTracker.getUsedSeconds(email);
    return used >= thresholdSeconds(config);
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
    if ((user as dynamic).isAdmin == true) return true;
    if (await NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.advisors)) return true;
    if (hasActivePass(config, email)) return true;

    final label = productName.trim().isEmpty ? 'NGMY Advisors' : productName.trim();
    final paid = await NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.advisors,
      email: email,
      title: label,
      message:
          'You used your ${minutesPerPaymentFromConfig(config)} free minutes. '
          'Subscribe for unlimited advisor chat (30 days).',
    );
    if (!paid || email.isEmpty) return paid;

    await NgmyCommunicateTimeTracker.resetAfterPayment(email);
    if (!((user as dynamic).isAdmin == true)) {
      final until = await NgmyStripePayments.accessUntil(email, NgmyStripeProduct.advisors);
      await NgmyCommunicateBackupCodes.ensureActiveCode(
        email,
        passUntil: until,
      );
    }
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

class _NgmyAdvisorPassSwipeDialog extends StatefulWidget {
  const _NgmyAdvisorPassSwipeDialog({required this.options, required this.balance});

  final List<NgmyCommunicatePassOption> options;
  final double balance;

  @override
  State<_NgmyAdvisorPassSwipeDialog> createState() => _NgmyAdvisorPassSwipeDialogState();
}

class _NgmyAdvisorPassSwipeDialogState extends State<_NgmyAdvisorPassSwipeDialog> {
  late final PageController _pageCtrl;
  int _index = 0;

  static const _accent = Color(0xFFF472B6);
  static const _header = [Color(0xFF831843), Color(0xFFBE185D), Color(0xFFEC4899)];
  static const _amountShader = [Color(0xFFFBCFE8), Color(0xFFF472B6), Color(0xFFDB2777)];

  @override
  void initState() {
    super.initState();
    _pageCtrl = PageController();
  }

  @override
  void dispose() {
    _pageCtrl.dispose();
    super.dispose();
  }

  String _planSubtitle(NgmyCommunicatePassOption o) {
    switch (o.tier) {
      case NgmyCommunicatePassTier.twoWeek:
        return 'Unlimited advisor chat for 14 days';
      case NgmyCommunicatePassTier.monthly:
        return 'Unlimited advisor chat for 30 days';
      case NgmyCommunicatePassTier.yearly:
        return 'Unlimited advisor chat for 1 year';
    }
  }

  IconData _planIcon(NgmyCommunicatePassOption o) {
    switch (o.tier) {
      case NgmyCommunicatePassTier.twoWeek:
        return Icons.calendar_view_week_rounded;
      case NgmyCommunicatePassTier.monthly:
        return Icons.calendar_month_rounded;
      case NgmyCommunicatePassTier.yearly:
        return Icons.event_available_rounded;
    }
  }

  @override
  Widget build(BuildContext context) {
    final picked = widget.options[_index.clamp(0, widget.options.length - 1)];
    final canPay = widget.balance + 0.001 >= picked.fee;

    return Dialog(
      backgroundColor: Colors.transparent,
      insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 24),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(28),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: _accent.withValues(alpha: 0.35), width: 1.2),
            boxShadow: [BoxShadow(color: _accent.withValues(alpha: 0.28), blurRadius: 28, spreadRadius: 2)],
          ),
          child: Material(
            color: const Color(0xFF0B0F18),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.fromLTRB(22, 20, 22, 16),
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: _header),
                  ),
                  child: Column(
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.12),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.2)),
                        ),
                        child: const Text('NGMY ADVISORS', style: TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 2)),
                      ),
                      const SizedBox(height: 12),
                      const Text(
                        'Choose your access plan',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19, height: 1.2),
                      ),
                      const SizedBox(height: 6),
                      Text(
                        'Swipe the plan cards — 2 weeks, 1 month, or 1 year',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 12.5, height: 1.4),
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  height: 248,
                  child: PageView.builder(
                    controller: _pageCtrl,
                    itemCount: widget.options.length,
                    onPageChanged: (i) => setState(() => _index = i),
                    itemBuilder: (ctx, i) {
                      final o = widget.options[i];
                      return Padding(
                        padding: const EdgeInsets.fromLTRB(18, 14, 18, 6),
                        child: Column(
                          children: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(_planIcon(o), color: _accent, size: 18),
                                const SizedBox(width: 8),
                                Text(
                                  o.label.toUpperCase(),
                                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 0.6),
                                ),
                              ],
                            ),
                            const SizedBox(height: 6),
                            Text(
                              _planSubtitle(o),
                              textAlign: TextAlign.center,
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 11.5),
                            ),
                            const SizedBox(height: 12),
                            Expanded(
                              child: Container(
                                width: double.infinity,
                                padding: const EdgeInsets.symmetric(vertical: 18, horizontal: 16),
                                decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(20),
                                  gradient: LinearGradient(
                                    begin: Alignment.topLeft,
                                    end: Alignment.bottomRight,
                                    colors: [Colors.black.withValues(alpha: 0.45), _accent.withValues(alpha: 0.12)],
                                  ),
                                  border: Border.all(color: _accent.withValues(alpha: 0.45)),
                                  boxShadow: [BoxShadow(color: _accent.withValues(alpha: 0.22), blurRadius: 18, spreadRadius: 1)],
                                ),
                                child: Column(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text('AMOUNT DUE', style: TextStyle(color: _accent.withValues(alpha: 0.85), fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 2.2)),
                                    const SizedBox(height: 8),
                                    ShaderMask(
                                      shaderCallback: (b) => const LinearGradient(colors: _amountShader).createShader(b),
                                      child: Text(
                                        '\$${o.fee.toStringAsFixed(2)}',
                                        style: const TextStyle(fontSize: 44, fontWeight: FontWeight.w900, color: Colors.white, height: 1),
                                      ),
                                    ),
                                    const SizedBox(height: 12),
                                    Container(
                                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                                      decoration: BoxDecoration(
                                        color: Colors.white.withValues(alpha: 0.06),
                                        borderRadius: BorderRadius.circular(20),
                                        border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
                                      ),
                                      child: Text(
                                        'Balance: \$${widget.balance.toStringAsFixed(2)}',
                                        style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, fontWeight: FontWeight.w600),
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                          ],
                        ),
                      );
                    },
                  ),
                ),
                if (widget.options.length > 1)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: List.generate(widget.options.length, (i) {
                        final active = i == _index;
                        return AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          margin: const EdgeInsets.symmetric(horizontal: 4),
                          width: active ? 18 : 7,
                          height: 7,
                          decoration: BoxDecoration(
                            color: active ? _accent : Colors.white.withValues(alpha: 0.25),
                            borderRadius: BorderRadius.circular(99),
                          ),
                        );
                      }),
                    ),
                  ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 0, 18, 20),
                  child: Column(
                    children: [
                      if (!canPay)
                        Padding(
                          padding: const EdgeInsets.only(bottom: 10),
                          child: Text(
                            'Add funds to your NGMY wallet to pay for this plan.',
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.orange.shade300, fontSize: 11, fontWeight: FontWeight.w700),
                          ),
                        ),
                      Row(
                        children: [
                          Expanded(
                            child: OutlinedButton(
                              onPressed: () => Navigator.pop(context),
                              style: OutlinedButton.styleFrom(
                                foregroundColor: Colors.white70,
                                side: BorderSide(color: Colors.white.withValues(alpha: 0.22)),
                                padding: const EdgeInsets.symmetric(vertical: 14),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                              ),
                              child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w700)),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            flex: 2,
                            child: DecoratedBox(
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(14),
                                gradient: LinearGradient(
                                  colors: canPay ? const [Color(0xFFEC4899), Color(0xFFF472B6)] : [Colors.grey.shade700, Colors.grey.shade800],
                                ),
                                boxShadow: canPay ? [BoxShadow(color: _accent.withValues(alpha: 0.45), blurRadius: 14, offset: const Offset(0, 4))] : null,
                              ),
                              child: Material(
                                color: Colors.transparent,
                                child: InkWell(
                                  onTap: canPay ? () => Navigator.pop(context, picked) : null,
                                  borderRadius: BorderRadius.circular(14),
                                  child: Padding(
                                    padding: const EdgeInsets.symmetric(vertical: 14),
                                    child: Row(
                                      mainAxisAlignment: MainAxisAlignment.center,
                                      children: [
                                        const Icon(Icons.lock_open_rounded, color: Colors.white, size: 18),
                                        const SizedBox(width: 8),
                                        Text(
                                          'Pay \$${picked.fee.toStringAsFixed(2)}',
                                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900),
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
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
    await NgmyLocalGrowthIncomeStore.reconcileIntoLiveUser(user);
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
