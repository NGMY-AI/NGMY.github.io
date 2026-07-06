import 'package:flutter/material.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_business_notes.dart';
import 'ngmy_business_tasks.dart';
import 'ngmy_essentials_transfer.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_paper_trace.dart';
import 'ngmy_paper_trace_storage.dart';
import 'ngmy_item_reminder.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_local_bio_storage.dart';
import 'ngmy_local_menu_storage.dart';
import 'ngmy_local_studio.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

Future<int> ngmyBusinessEssentialsTotalCount({required String userEmail}) async {
  final results = await Future.wait([
    ngmyBusinessContactCount(userEmail: userEmail),
    ngmySavedLocationCount(userEmail: userEmail),
    ngmyQuickSupportCount(userEmail: userEmail),
    ngmyMedicineOrganizerCount(userEmail: userEmail),
    ngmyBusinessNotesCount(userEmail: userEmail),
    ngmyBusinessTasksCount(userEmail: userEmail),
    ngmyItemReminderCount(userEmail: userEmail),
    ngmyPaperTraceCount(userEmail: userEmail),
    ngmyLocalMenuCount(userEmail: userEmail),
    ngmyLocalBioCount(userEmail: userEmail),
  ]);
  return results.fold<int>(0, (a, b) => a + b);
}

Future<void> showNgmyBusinessEssentialsHub(BuildContext context, {required String userEmail}) {
  final t = NgmyHubTheme.of(context);
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Business Essentials',
    barrierColor: t.barrier,
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
  int _notes = 0;
  int _tasks = 0;
  int _reminders = 0;
  int _traces = 0;
  int _localMenus = 0;
  int _localBios = 0;
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
      ngmyBusinessNotesCount(userEmail: widget.userEmail),
      ngmyBusinessTasksCount(userEmail: widget.userEmail),
      ngmyItemReminderCount(userEmail: widget.userEmail),
      ngmyPaperTraceCount(userEmail: widget.userEmail),
      ngmyLocalMenuCount(userEmail: widget.userEmail),
      ngmyLocalBioCount(userEmail: widget.userEmail),
    ]);
    if (!mounted) return;
    setState(() {
      _contacts = results[0];
      _locations = results[1];
      _support = results[2];
      _medicines = results[3];
      _notes = results[4];
      _tasks = results[5];
      _reminders = results[6];
      _traces = results[7];
      _localMenus = results[8];
      _localBios = results[9];
      _loading = false;
    });
  }

  Future<void> _openCategory(Future<void> Function(BuildContext) opener) async {
    await opener(context);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Material(
      color: t.scaffold,
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
                      decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12)),
                      child: Icon(Icons.close_rounded, color: t.iconButtonIcon),
                    ),
                  ),
                  Expanded(
                    child: Text('Business Essentials', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 20)),
                  ),
                  IconButton(
                    tooltip: 'Transfer / backup',
                    onPressed: () async {
                      final imported = await Navigator.of(context).push<bool>(
                        MaterialPageRoute(builder: (_) => NgmyEssentialsTransferPage(userEmail: widget.userEmail)),
                      );
                      if (imported == true) await _reload();
                    },
                    icon: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: BoxDecoration(
                        color: const Color(0xFF38BDF8).withValues(alpha: 0.15),
                        borderRadius: BorderRadius.circular(10),
                        border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.4)),
                      ),
                      child: const Icon(Icons.sync_alt_rounded, color: Color(0xFF38BDF8), size: 18),
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 4, 20, 0),
              child: Text(
                'Organize contacts, reminders, notes, tasks & more — all saved locally',
                style: TextStyle(color: t.subtitle, fontSize: 13, height: 1.35),
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
                    _CompactCategoryCard(
                      title: 'Notes',
                      icon: Icons.note_alt_rounded,
                      accent: const Color(0xFFA78BFA),
                      count: _notes,
                      onTap: () => _openCategory((ctx) => showNgmyBusinessNotesDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Quick Tasks',
                      icon: Icons.task_alt_rounded,
                      accent: const Color(0xFF34D399),
                      count: _tasks,
                      onTap: () => _openCategory((ctx) => showNgmyBusinessTasksDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Where I Put It',
                      icon: Icons.place_rounded,
                      accent: const Color(0xFFA78BFA),
                      count: _reminders,
                      onTap: () => _openCategory((ctx) => showNgmyItemReminderDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Paper Trace',
                      icon: Icons.draw_rounded,
                      accent: const Color(0xFFF97316),
                      count: _traces,
                      onTap: () => _openCategory((ctx) => showNgmyPaperTraceDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Local Menu (Test)',
                      icon: Icons.restaurant_menu_rounded,
                      accent: const Color(0xFF0EA5E9),
                      count: _localMenus,
                      onTap: () => _openCategory((ctx) => showNgmyLocalMenuStudioDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Local Bio (Test)',
                      icon: Icons.link_rounded,
                      accent: const Color(0xFF6366F1),
                      count: _localBios,
                      onTap: () => _openCategory((ctx) => showNgmyLocalBioStudioDialog(ctx, userEmail: widget.userEmail)),
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
    final t = NgmyHubTheme.of(context);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Ink(
          decoration: BoxDecoration(
            color: t.categoryCardBg(accent),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: t.categoryCardBorder(accent)),
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
                    color: t.categoryIconBg(accent),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(icon, color: accent, size: 22),
                ),
                const SizedBox(height: 8),
                Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 13)),
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
