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

class _CategoryArt {
  const _CategoryArt({required this.emoji, required this.accent, required this.gradient});
  final String emoji;
  final Color accent;
  final List<Color> gradient;
}

const _categoryArt = <String, _CategoryArt>{
  'Contacts': _CategoryArt(emoji: '👥', accent: Color(0xFF38BDF8), gradient: [Color(0xFF0EA5E9), Color(0xFF38BDF8)]),
  'Site Map': _CategoryArt(emoji: '🗺️', accent: Color(0xFF34D399), gradient: [Color(0xFF10B981), Color(0xFF34D399)]),
  'Hotlines': _CategoryArt(emoji: '📞', accent: Color(0xFFFBBF24), gradient: [Color(0xFFF59E0B), Color(0xFFFBBF24)]),
  'Medicines': _CategoryArt(emoji: '💊', accent: Color(0xFFEC4899), gradient: [Color(0xFFDB2777), Color(0xFFEC4899)]),
  'Notes': _CategoryArt(emoji: '📝', accent: Color(0xFFA78BFA), gradient: [Color(0xFF8B5CF6), Color(0xFFA78BFA)]),
  'Quick Tasks': _CategoryArt(emoji: '✅', accent: Color(0xFF34D399), gradient: [Color(0xFF059669), Color(0xFF34D399)]),
  'Where I Put It': _CategoryArt(emoji: '📍', accent: Color(0xFFA78BFA), gradient: [Color(0xFF7C3AED), Color(0xFFA78BFA)]),
  'Paper Trace': _CategoryArt(emoji: '✍️', accent: Color(0xFFF97316), gradient: [Color(0xFFEA580C), Color(0xFFF97316)]),
  'Local Menu (Test)': _CategoryArt(emoji: '🍽️', accent: Color(0xFF0EA5E9), gradient: [Color(0xFF0284C7), Color(0xFF0EA5E9)]),
  'Local Bio (Test)': _CategoryArt(emoji: '🔗', accent: Color(0xFF6366F1), gradient: [Color(0xFF4F46E5), Color(0xFF6366F1)]),
};

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
                      count: _contacts,
                      onTap: () => _openCategory((ctx) => showNgmyBusinessContactsDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Site Map',
                      count: _locations,
                      onTap: () => _openCategory((ctx) => showNgmySavedLocationsDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Hotlines',
                      count: _support,
                      onTap: () => _openCategory((ctx) => showNgmyQuickSupportDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Medicines',
                      count: _medicines,
                      onTap: () => _openCategory((ctx) => showNgmyMedicineOrganizerDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Notes',
                      count: _notes,
                      onTap: () => _openCategory((ctx) => showNgmyBusinessNotesDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Quick Tasks',
                      count: _tasks,
                      onTap: () => _openCategory((ctx) => showNgmyBusinessTasksDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Where I Put It',
                      count: _reminders,
                      onTap: () => _openCategory((ctx) => showNgmyItemReminderDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Paper Trace',
                      count: _traces,
                      onTap: () => _openCategory((ctx) => showNgmyPaperTraceDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Local Menu (Test)',
                      count: _localMenus,
                      onTap: () => _openCategory((ctx) => showNgmyLocalMenuStudioDialog(ctx, userEmail: widget.userEmail)),
                    ),
                    _CompactCategoryCard(
                      title: 'Local Bio (Test)',
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
    required this.count,
    required this.onTap,
  });

  final String title;
  final int count;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final art = _categoryArt[title]!;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                art.gradient.first.withValues(alpha: t.isDark ? 0.22 : 0.14),
                art.gradient.last.withValues(alpha: t.isDark ? 0.1 : 0.06),
              ],
            ),
            border: Border.all(color: art.accent.withValues(alpha: t.isDark ? 0.45 : 0.35)),
            boxShadow: [
              BoxShadow(
                color: art.accent.withValues(alpha: t.isDark ? 0.18 : 0.12),
                blurRadius: 16,
                offset: const Offset(0, 6),
              ),
            ],
          ),
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: art.gradient,
                    ),
                    boxShadow: [
                      BoxShadow(
                        color: art.accent.withValues(alpha: 0.45),
                        blurRadius: 14,
                        offset: const Offset(0, 5),
                      ),
                      BoxShadow(
                        color: Colors.white.withValues(alpha: t.isDark ? 0.08 : 0.55),
                        blurRadius: 0,
                        spreadRadius: -2,
                        offset: const Offset(-2, -2),
                      ),
                    ],
                  ),
                  child: Center(
                    child: Text(art.emoji, style: const TextStyle(fontSize: 26, height: 1)),
                  ),
                ),
                const SizedBox(height: 10),
                Text(
                  title,
                  textAlign: TextAlign.center,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 12.5, height: 1.15),
                ),
                if (count > 0)
                  Padding(
                    padding: const EdgeInsets.only(top: 5),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                      decoration: BoxDecoration(
                        color: art.accent.withValues(alpha: 0.18),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Text('$count', style: TextStyle(color: art.accent, fontWeight: FontWeight.w800, fontSize: 10)),
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
