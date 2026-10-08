import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_stripe_payments.dart';

/// Free House Insurance — \$50/month subscription for covered small home fixes.
/// Categories can be expanded later; this ships a starter covered-fix list.
class NgmyHouseInsurance {
  static const double defaultMonthlyFee = 50.0;

  /// Starter covered-fix categories (admin/user-facing). Expand when you send the full list.
  static const List<({String id, String title, String detail, IconData icon})> coveredCategories = [
    (id: 'faucet', title: 'Faucet & sink leaks', detail: 'Drips, loose handles, small seal fixes', icon: Icons.water_drop_rounded),
    (id: 'toilet', title: 'Toilet basics', detail: 'Running toilet, flapper, seat, minor clogs', icon: Icons.wc_rounded),
    (id: 'outlet', title: 'Outlet & switch', detail: 'Replace dead outlet/switch (no panel work)', icon: Icons.electrical_services_rounded),
    (id: 'door', title: 'Door & lock', detail: 'Sticky doors, latch alignment, lockset swap', icon: Icons.door_front_door_rounded),
    (id: 'cabinet', title: 'Cabinet & hinge', detail: 'Sagging doors, loose hinges, soft-close fixes', icon: Icons.kitchen_rounded),
    (id: 'drywall', title: 'Small drywall patch', detail: 'Nail pops and fist-sized holes', icon: Icons.wallpaper_rounded),
    (id: 'caulk', title: 'Caulk & seal', detail: 'Tub, sink, and window weatherseal touch-ups', icon: Icons.handyman_rounded),
    (id: 'shelf', title: 'Shelf & mount', detail: 'Hang shelves, TV mounts under 55\", mirrors', icon: Icons.view_agenda_rounded),
  ];

  static double monthlyFeeFromConfig(dynamic config) {
    final v = (config as dynamic).houseInsuranceMonthlyFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultMonthlyFee;
  }

  static Map<String, String> _accessMap(dynamic config) {
    final raw = (config as dynamic).houseInsuranceAccessUntilByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).houseInsuranceAccessUntilByEmail = map;
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

  static DateTime? accessUntil(dynamic config, String email) {
    final untilRaw = _accessMap(config)[_key(email)];
    if (untilRaw == null || untilRaw.isEmpty) return null;
    return DateTime.tryParse(untilRaw);
  }

  static Map<String, String> _coverageMap(dynamic config) {
    try {
      final raw = (config as dynamic).houseInsuranceCoverageByEmail;
      if (raw is Map) {
        return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
      }
    } catch (_) {}
    return {};
  }

  static void _setCoverageMap(dynamic config, Map<String, String> map) {
    try {
      (config as dynamic).houseInsuranceCoverageByEmail = map;
    } catch (_) {}
  }

  static List<String> coverageFor(dynamic config, String email) {
    final raw = _coverageMap(config)[_key(email)] ?? '';
    return raw.split(',').map((e) => e.trim()).where((e) => e.isNotEmpty).toList();
  }

  static void setCoverage(dynamic config, String email, Iterable<String> ids) {
    final key = _key(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_coverageMap(config));
    final clean = ids.map((e) => e.trim()).where((e) => e.isNotEmpty).toSet().toList();
    if (clean.isEmpty) {
      map.remove(key);
    } else {
      map[key] = clean.join(',');
    }
    _setCoverageMap(config, map);
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

  static Future<bool> activateAfterPayment({
    required dynamic config,
    required String email,
    required Iterable<String> coverageIds,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    grantMonthly(config, email);
    setCoverage(config, email, coverageIds);
    onDataChanged();
    return onPersistConfig();
  }

  /// Opens Stripe checkout for the \$50 plan. Returns false when the Payment
  /// Link is not in the app yet, or the buyer closes checkout.
  static Future<bool> payWithStripe({
    required BuildContext context,
    required String email,
    required Iterable<String> coverageIds,
    required dynamic config,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    if (!NgmyStripePayments.hasCheckoutLink(NgmyStripeProduct.houseInsurance)) {
      return false;
    }
    final paid = await NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.houseInsurance,
      email: email,
      isAdmin: false,
      title: 'House Insurance',
      message: '\$50 for 30 days of the coverages you selected.',
    );
    if (!paid) return false;
    await activateAfterPayment(
      config: config,
      email: email,
      coverageIds: coverageIds,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
    );
    return true;
  }

  /// Opens Cash App with the monthly amount filled in, then records the plan
  /// after the buyer confirms they sent it.
  static Future<bool> payWithCashApp({
    required BuildContext context,
    required String cashAppUrl,
    required String cashAppTag,
    required double amount,
    required String email,
    required Iterable<String> coverageIds,
    required dynamic config,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    final base = cashAppUrl.trim();
    if (base.isEmpty) return false;
    final amountText = amount == amount.roundToDouble()
        ? amount.toStringAsFixed(0)
        : amount.toStringAsFixed(2);
    final payUrl = base.endsWith('/') ? '$base$amountText' : '$base/$amountText';
    final opened = await launchUrl(Uri.parse(payUrl), mode: LaunchMode.externalApplication);
    if (!opened || !context.mounted) return false;
    final sent = await showNgmyCashAppPaymentConfirm(
      context,
      amountText: amountText,
      cashAppTag: cashAppTag,
    );
    if (sent != true) return false;
    await activateAfterPayment(
      config: config,
      email: email,
      coverageIds: coverageIds,
      onDataChanged: onDataChanged,
      onPersistConfig: onPersistConfig,
    );
    return true;
  }
}

/// Confirms a Cash App payment after the app opens. Styled like the rest of
/// Help Center instead of a plain system alert.
Future<bool?> showNgmyCashAppPaymentConfirm(
  BuildContext context, {
  required String amountText,
  required String cashAppTag,
}) {
  return showGeneralDialog<bool>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Close',
    barrierColor: Colors.black.withValues(alpha: 0.55),
    transitionDuration: const Duration(milliseconds: 220),
    pageBuilder: (ctx, _, __) {
      return _NgmyCashAppConfirmCard(amountText: amountText, cashAppTag: cashAppTag);
    },
    transitionBuilder: (ctx, animation, _, child) {
      final curved = CurvedAnimation(parent: animation, curve: Curves.easeOutCubic);
      return FadeTransition(
        opacity: curved,
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.94, end: 1).animate(curved),
          child: child,
        ),
      );
    },
  );
}

class _NgmyCashAppConfirmCard extends StatelessWidget {
  const _NgmyCashAppConfirmCard({
    required this.amountText,
    required this.cashAppTag,
  });

  final String amountText;
  final String cashAppTag;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final panel = isDark ? const Color(0xFF0C1220) : Colors.white;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white70 : const Color(0xFF475569);
    final tag = cashAppTag.trim().isEmpty ? r'$NGMYpay' : cashAppTag.trim();
    return SafeArea(
      child: Center(
        child: SingleChildScrollView(
          padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 20),
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 400),
            child: Material(
              color: panel,
              elevation: 18,
              shadowColor: const Color(0xFF00D632).withValues(alpha: 0.25),
              borderRadius: BorderRadius.circular(28),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(20, 18, 20, 12),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Container(
                      width: 56,
                      height: 56,
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [Color(0xFF00E676), Color(0xFF00C853)],
                        ),
                      ),
                      child: const Icon(Icons.attach_money_rounded, color: Colors.white, size: 32),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      'CASH APP',
                      style: TextStyle(
                        fontSize: 11,
                        letterSpacing: 2.2,
                        fontWeight: FontWeight.w900,
                        color: isDark ? const Color(0xFF86EFAC) : const Color(0xFF15803D),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      'Did you send it on Cash App?',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 20, height: 1.15, fontWeight: FontWeight.w900, color: ink),
                    ),
                    const SizedBox(height: 12),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                      decoration: BoxDecoration(
                        color: const Color(0xFF00D632).withValues(alpha: isDark ? 0.12 : 0.08),
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(color: const Color(0xFF00D632).withValues(alpha: 0.35)),
                      ),
                      child: Column(
                        children: [
                          Text(
                            '\$$amountText',
                            style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900, color: ink, height: 1),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            'to $tag',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 14, fontWeight: FontWeight.w800, color: muted),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      'Cash App should be open. Come back here and confirm after the payment goes through.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, height: 1.3, fontWeight: FontWeight.w600, color: muted),
                    ),
                    const SizedBox(height: 14),
                    SizedBox(
                      width: double.infinity,
                      height: 46,
                      child: FilledButton(
                        onPressed: () => Navigator.pop(context, true),
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFF00D632),
                          foregroundColor: const Color(0xFF052E16),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        ),
                        child: Text('I sent \$$amountText', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                      ),
                    ),
                    SizedBox(
                      width: double.infinity,
                      height: 40,
                      child: TextButton(
                        onPressed: () => Navigator.pop(context, false),
                        style: TextButton.styleFrom(
                          foregroundColor: muted,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        ),
                        child: const Text('Not yet', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Coverage choices plus Stripe and Cash App pay buttons. Every coverage box
/// is the same height so the row stays aligned.
class NgmyHouseInsuranceCard extends StatelessWidget {
  const NgmyHouseInsuranceCard({
    super.key,
    required this.isDark,
    required this.active,
    required this.monthlyFee,
    this.accessUntil,
    required this.selectedIds,
    required this.onToggleCoverage,
    required this.onPayStripe,
    required this.onPayCashApp,
    this.cashAppTag = '',
  });

  final bool isDark;
  final bool active;
  final double monthlyFee;
  final DateTime? accessUntil;
  final Set<String> selectedIds;
  final ValueChanged<String> onToggleCoverage;
  final VoidCallback onPayStripe;
  final VoidCallback onPayCashApp;
  final String cashAppTag;

  @override
  Widget build(BuildContext context) {
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : Colors.black54;
    final feeLabel = '\$${monthlyFee.toStringAsFixed(0)}';
    final untilLabel = accessUntil == null
        ? ''
        : 'Covered until ${accessUntil!.month}/${accessUntil!.day}/${accessUntil!.year}';
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(
          active ? 'CHOOSE A SERVICE' : 'SUBSCRIBE FIRST',
          style: TextStyle(fontSize: 10, letterSpacing: 1.6, fontWeight: FontWeight.w900, color: muted),
        ),
        const SizedBox(height: 4),
        Text(
          active
              ? 'Pick the service you need. Then tap Send on WhatsApp.'
              : 'Pay $feeLabel with Stripe or Cash App. Services and Send on WhatsApp stay off until you pay.',
          style: TextStyle(fontSize: 12, height: 1.35, fontWeight: FontWeight.w600, color: titleColor),
        ),
        if (untilLabel.isNotEmpty) ...[
          const SizedBox(height: 4),
          Text(untilLabel, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: const Color(0xFF0F766E))),
        ],
        const SizedBox(height: 10),
        if (active)
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: NgmyHouseInsurance.coveredCategories.length,
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 8,
            crossAxisSpacing: 8,
            mainAxisExtent: 78,
          ),
          itemBuilder: (_, i) {
            final c = NgmyHouseInsurance.coveredCategories[i];
            final on = selectedIds.contains(c.id);
            return Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () => onToggleCoverage(c.id),
                borderRadius: BorderRadius.circular(14),
                child: Ink(
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(14),
                    color: isDark ? Colors.white.withValues(alpha: 0.05) : Colors.white,
                    border: Border.all(
                      color: on ? const Color(0xFF0EA5E9) : (isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                      width: 1,
                    ),
                  ),
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(8, 8, 8, 8),
                    child: Row(
                      children: [
                        Icon(
                          on ? Icons.check_box_rounded : Icons.check_box_outline_blank_rounded,
                          size: 20,
                          color: on ? const Color(0xFF0EA5E9) : muted,
                        ),
                        const SizedBox(width: 6),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              Text(
                                c.title,
                                maxLines: 2,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(fontSize: 12, height: 1.15, fontWeight: FontWeight.w800, color: titleColor),
                              ),
                              const SizedBox(height: 2),
                              Text(
                                c.detail,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(fontSize: 10, color: muted),
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
          },
        ),
        if (!active) ...[
          const SizedBox(height: 10),
          SizedBox(
            height: 46,
            child: Row(
              children: [
                Expanded(
                  child: FilledButton(
                    onPressed: onPayStripe,
                    style: FilledButton.styleFrom(
                      backgroundColor: const Color(0xFF635BFF),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    child: Text('Stripe $feeLabel', style: const TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ),
                const SizedBox(width: 8),
                Expanded(
                  child: FilledButton(
                    onPressed: onPayCashApp,
                    style: FilledButton.styleFrom(
                      backgroundColor: const Color(0xFF00D632),
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    ),
                    child: Text('Cash App $feeLabel', style: const TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ),
              ],
            ),
          ),
        ],
        if (cashAppTag.isNotEmpty && !active)
          Padding(
            padding: const EdgeInsets.only(top: 4),
            child: Text(
              'Cash App sends to $cashAppTag',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 10, color: muted),
            ),
          ),
      ],
    );
  }
}
