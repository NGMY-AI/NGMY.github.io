import 'package:flutter/material.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

Future<int> ngmyBusinessEssentialsTotalCount({required String userEmail}) async {
  final results = await Future.wait([
    ngmyBusinessContactCount(userEmail: userEmail),
    ngmySavedLocationCount(userEmail: userEmail),
    ngmyQuickSupportCount(userEmail: userEmail),
    ngmyMedicineOrganizerCount(userEmail: userEmail),
  ]);
  return results[0] + results[1] + results[2] + results[3];
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
  int _medicines = 0;
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
      ngmyMedicineOrganizerCount(userEmail: widget.userEmail),
    ]);
    if (!mounted) return;
    setState(() {
      _contacts = results[0];
      _locations = results[1];
      _support = results[2];
      _medicines = results[3];
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
      child: SafeArea(
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
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(12)),
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
                'Organize contacts, sites, hotlines, medicines & more — all saved locally',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13, height: 1.35),
              ),
            ),
            if (_loading)
              const Expanded(child: Center(child: CircularProgressIndicator(color: Color(0xFF38BDF8))))
            else
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  padding: const EdgeInsets.fromLTRB(16, 16, 16, 24),
                  mainAxisSpacing: 10,
                  crossAxisSpacing: 10,
                  childAspectRatio: 1.35,
                  children: [
                    _CompactCategoryCard(
                      title: 'Contacts',
                      icon: Icons.contacts_rounded,
                      accent: const Color(0xFF38BDF8),
                      count: _contacts,
                      onTap: () => _openCategory((ctx) => showNgmyBusinessContactsDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Site Map',
                      icon: Icons.map_rounded,
                      accent: const Color(0xFF34D399),
                      count: _locations,
                      onTap: () => _openCategory((ctx) => showNgmySavedLocationsDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Hotlines',
                      icon: Icons.phone_in_talk_rounded,
                      accent: const Color(0xFFFBBF24),
                      count: _support,
                      onTap: () => _openCategory((ctx) => showNgmyQuickSupportDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Medicines',
                      icon: Icons.medication_liquid_rounded,
                      accent: const Color(0xFFEC4899),
                      count: _medicines,
                      onTap: () => _openCategory((ctx) => showNgmyMedicineOrganizerDialog(ctx, userEmail: widget.userEmail)),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _CompactCategoryCard extends StatelessWidget {
  const _CompactCategoryCard({
    required this.title,
    required this.icon,
    required this.accent,
    required this.count,
    required this.onTap,
  });

  final String title;
  final IconData icon;
  final Color accent;
  final int count;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          decoration: BoxDecoration(
            color: accent.withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: accent.withValues(alpha: 0.35)),
          ),
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(
                    color: accent.withValues(alpha: 0.18),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(icon, color: accent, size: 22),
                ),
                const SizedBox(height: 8),
                Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
                if (count > 0)
                  Padding(
                    padding: const EdgeInsets.only(top: 4),
                    child: Text('$count saved', style: TextStyle(color: accent, fontWeight: FontWeight.w700, fontSize: 9)),
                  ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
