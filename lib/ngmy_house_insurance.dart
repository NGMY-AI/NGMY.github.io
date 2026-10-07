import 'package:flutter/material.dart';

import 'ngmy_music_payments.dart';

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

  static void grantMonthly(dynamic config, String email, {int days = 30}) {
    final key = _key(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_accessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAccessMap(config, map);
  }

  static Future<bool> confirmAndChargeMonthly({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    if ((user as dynamic).isAdmin == true) {
      grantMonthly(config, ((user as dynamic).email as String?) ?? '');
      onDataChanged();
      await onPersistConfig();
      return true;
    }
    final fee = monthlyFeeFromConfig(config);
    final email = ((user as dynamic).email as String?) ?? '';
    if (fee <= 0 || hasActiveSubscription(config, email)) return true;

    final charged = await NgmyMusicPayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: fee,
      title: 'Free House Insurance — monthly',
      message:
          'Subscribe for \$${fee.toStringAsFixed(2)}/month. '
          'NGMY helps cover small home fixes from the covered list — '
          'faucets, outlets, doors, caulk, shelves, and more. '
          'File a House Fixture claim anytime while active.',
      onCharge: onCharge,
    );
    if (!charged) return false;
    grantMonthly(config, email);
    onDataChanged();
    await onPersistConfig();
    return true;
  }
}

/// Beautiful subscribe card shown inside Help Center → House Fixture.
class NgmyHouseInsuranceCard extends StatelessWidget {
  const NgmyHouseInsuranceCard({
    super.key,
    required this.isDark,
    required this.active,
    required this.monthlyFee,
    this.accessUntil,
    required this.onSubscribe,
    this.onViewCoverage,
  });

  final bool isDark;
  final bool active;
  final double monthlyFee;
  final DateTime? accessUntil;
  final VoidCallback onSubscribe;
  final VoidCallback? onViewCoverage;

  @override
  Widget build(BuildContext context) {
    final untilLabel = accessUntil == null
        ? ''
        : 'Active until ${accessUntil!.month}/${accessUntil!.day}/${accessUntil!.year}';
    return Container(
      margin: const EdgeInsets.only(bottom: 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: active
              ? [const Color(0xFF059669), const Color(0xFF0EA5E9)]
              : [const Color(0xFF0F766E), const Color(0xFF1D4ED8), const Color(0xFF7C3AED)],
        ),
        boxShadow: [
          BoxShadow(
            color: const Color(0xFF0EA5E9).withValues(alpha: 0.35),
            blurRadius: 18,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Stack(
        children: [
          Positioned(
            right: -20,
            top: -20,
            child: Icon(Icons.home_work_rounded, size: 120, color: Colors.white.withValues(alpha: 0.08)),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.18),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: const Icon(Icons.shield_moon_rounded, color: Colors.white, size: 26),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            active ? 'HOUSE INSURANCE ACTIVE' : 'FREE HOUSE INSURANCE',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.85),
                              fontSize: 10,
                              fontWeight: FontWeight.w900,
                              letterSpacing: 1.4,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            active ? 'You\'re covered' : '\$${monthlyFee.toStringAsFixed(0)} / month',
                            style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900, height: 1.1),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 10),
                Text(
                  active
                      ? 'File a House Fixture request below — small covered repairs are on us while your plan is active.'
                      : 'Subscribe and we help fix small household issues from our covered list. Cancel anytime by letting the month expire.',
                  style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 12.5, height: 1.35, fontWeight: FontWeight.w600),
                ),
                if (untilLabel.isNotEmpty) ...[
                  const SizedBox(height: 6),
                  Text(untilLabel, style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 11, fontWeight: FontWeight.w700)),
                ],
                const SizedBox(height: 12),
                Row(
                  children: [
                    if (!active)
                      Expanded(
                        child: FilledButton(
                          onPressed: onSubscribe,
                          style: FilledButton.styleFrom(
                            backgroundColor: Colors.white,
                            foregroundColor: const Color(0xFF0F766E),
                            padding: const EdgeInsets.symmetric(vertical: 12),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                          ),
                          child: const Text('Subscribe \$50/mo', style: TextStyle(fontWeight: FontWeight.w900)),
                        ),
                      )
                    else
                      Expanded(
                        child: Container(
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.16),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
                          ),
                          child: const Text('Covered this month', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                        ),
                      ),
                    const SizedBox(width: 8),
                    TextButton(
                      onPressed: onViewCoverage,
                      style: TextButton.styleFrom(foregroundColor: Colors.white),
                      child: const Text('Coverage', style: TextStyle(fontWeight: FontWeight.w800)),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

Future<void> showNgmyHouseInsuranceCoverageSheet(BuildContext context, {required bool isDark}) async {
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      final bg = isDark ? const Color(0xFF0B1220) : Colors.white;
      return Container(
        margin: const EdgeInsets.fromLTRB(12, 48, 12, 12),
        padding: const EdgeInsets.fromLTRB(18, 16, 18, 24),
        decoration: BoxDecoration(
          color: bg,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                const Icon(Icons.verified_user_rounded, color: Color(0xFF0EA5E9)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    'What Free House Insurance covers',
                    style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                  ),
                ),
                IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close)),
              ],
            ),
            Text(
              'Small household fixes — not major remodel or appliance replacement. Full category list can be expanded anytime.',
              style: TextStyle(fontSize: 12, height: 1.35, color: isDark ? Colors.white60 : Colors.black54),
            ),
            const SizedBox(height: 12),
            Flexible(
              child: ListView.separated(
                shrinkWrap: true,
                itemCount: NgmyHouseInsurance.coveredCategories.length,
                separatorBuilder: (_, __) => const SizedBox(height: 8),
                itemBuilder: (_, i) {
                  final c = NgmyHouseInsurance.coveredCategories[i];
                  return Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      color: isDark ? Colors.white.withValues(alpha: 0.04) : const Color(0xFFF8FAFC),
                      border: Border.all(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
                    ),
                    child: Row(
                      children: [
                        Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: const Color(0xFF0EA5E9).withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(10),
                          ),
                          child: Icon(c.icon, color: const Color(0xFF0EA5E9), size: 22),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(c.title, style: TextStyle(fontWeight: FontWeight.w800, color: isDark ? Colors.white : const Color(0xFF0F172A))),
                              Text(c.detail, style: TextStyle(fontSize: 11, color: isDark ? Colors.white60 : Colors.black54)),
                            ],
                          ),
                        ),
                      ],
                    ),
                  );
                },
              ),
            ),
          ],
        ),
      );
    },
  );
}
