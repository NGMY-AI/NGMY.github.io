import 'package:flutter/material.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

Future<int> ngmyBusinessEssentialsTotalCount({required String userEmail}) async {
  final results = await Future.wait([
    ngmyBusinessContactCount(userEmail: userEmail),
    ngmySavedLocationCount(userEmail: userEmail),
    ngmyQuickSupportCount(userEmail: userEmail),
  ]);
  return results[0] + results[1] + results[2];
}

Future<void> showNgmyBusinessEssentialsHub(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Business Essentials',
    barrierColor: Colors.black.withValues(alpha: 0.9),
    transitionDuration: const Duration(milliseconds: 340),
    pageBuilder: (ctx, a1, a2) => _BusinessEssentialsHub(userEmail: userEmail),
    transitionBuilder: (ctx, anim, _, child) {
      final scale = Tween<double>(begin: 0.96, end: 1).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(scale: scale, child: child),
      );
    },
  );
}

class _BusinessEssentialsHub extends StatefulWidget {
  const _BusinessEssentialsHub({required this.userEmail});

  final String userEmail;

  @override
  State<_BusinessEssentialsHub> createState() => _BusinessEssentialsHubState();
}

class _BusinessEssentialsHubState extends State<_BusinessEssentialsHub> {
  int _contacts = 0;
  int _locations = 0;
  int _support = 0;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final results = await Future.wait([
      ngmyBusinessContactCount(userEmail: widget.userEmail),
      ngmySavedLocationCount(userEmail: widget.userEmail),
      ngmyQuickSupportCount(userEmail: widget.userEmail),
    ]);
    if (!mounted) return;
    setState(() {
      _contacts = results[0];
      _locations = results[1];
      _support = results[2];
      _loading = false;
    });
  }

  Future<void> _openCategory(Future<void> Function(BuildContext) opener) async {
    await opener(context);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: const Color(0xFF030712),
      child: Stack(
        children: [
          Positioned(
            top: -80,
            right: -40,
            child: Container(
              width: 220,
              height: 220,
              decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF2563EB).withValues(alpha: 0.15)),
            ),
          ),
          Positioned(
            bottom: 120,
            left: -60,
            child: Container(
              width: 180,
              height: 180,
              decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF34D399).withValues(alpha: 0.1)),
            ),
          ),
          SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(8, 8, 12, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: () => Navigator.pop(context),
                        icon: Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.08),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: const Icon(Icons.close_rounded, color: Colors.white70),
                        ),
                      ),
                      const Expanded(
                        child: Text('Business Essentials', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 4, 20, 0),
                  child: Text(
                    'Pick a category — contacts, locations, or support lines',
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13, height: 1.35),
                  ),
                ),
                if (_loading)
                  const Expanded(child: Center(child: CircularProgressIndicator(color: Color(0xFF38BDF8))))
                else
                  Expanded(
                    child: ListView(
                      padding: const EdgeInsets.fromLTRB(16, 20, 16, 24),
                      children: [
                        _CategoryCard(
                          title: 'Business Contacts',
                          subtitle: 'Clients, vendors & partners — call, email, star favorites',
                          icon: Icons.contacts_rounded,
                          gradient: const [Color(0xFF0C4A6E), Color(0xFF0369A1), Color(0xFF0EA5E9)],
                          accent: const Color(0xFF38BDF8),
                          count: _contacts,
                          countLabel: 'contacts',
                          onTap: () => _openCategory((ctx) => showNgmyBusinessContactsDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        const SizedBox(height: 14),
                        _CategoryCard(
                          title: 'Saved Locations',
                          subtitle: 'Pin sites, offices & deliveries — navigate in one tap',
                          icon: Icons.place_rounded,
                          gradient: const [Color(0xFF064E3B), Color(0xFF047857), Color(0xFF10B981)],
                          accent: const Color(0xFF34D399),
                          count: _locations,
                          countLabel: 'locations',
                          onTap: () => _openCategory((ctx) => showNgmySavedLocationsDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        const SizedBox(height: 14),
                        _CategoryCard(
                          title: 'Quick Support',
                          subtitle: 'Insurance, IT, bank & emergency hotlines',
                          icon: Icons.support_agent_rounded,
                          gradient: const [Color(0xFF78350F), Color(0xFFB45309), Color(0xFFFBBF24)],
                          accent: const Color(0xFFFBBF24),
                          count: _support,
                          countLabel: 'lines',
                          onTap: () => _openCategory((ctx) => showNgmyQuickSupportDialog(ctx, userEmail: widget.userEmail)),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _CategoryCard extends StatelessWidget {
  const _CategoryCard({
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.gradient,
    required this.accent,
    required this.count,
    required this.countLabel,
    required this.onTap,
  });

  final String title;
  final String subtitle;
  final IconData icon;
  final List<Color> gradient;
  final Color accent;
  final int count;
  final String countLabel;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: gradient),
            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 20, offset: const Offset(0, 10))],
          ),
          child: Padding(
            padding: const EdgeInsets.all(18),
            child: Row(
              children: [
                Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    color: Colors.black.withValues(alpha: 0.25),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.2)),
                  ),
                  child: Icon(icon, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                      const SizedBox(height: 4),
                      Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 12, height: 1.3)),
                      if (count > 0) ...[
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.3), borderRadius: BorderRadius.circular(8)),
                          child: Text('$count $countLabel saved', style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 10)),
                        ),
                      ],
                    ],
                  ),
                ),
                Icon(Icons.arrow_forward_ios_rounded, color: Colors.white.withValues(alpha: 0.7), size: 18),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
