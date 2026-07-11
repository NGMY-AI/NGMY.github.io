import 'package:flutter/material.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_business_notes.dart';
import 'ngmy_business_tasks.dart';
import 'ngmy_essentials_transfer.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_hud_tech_shell.dart';
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

const _kEssentialsHudColors = [Color(0xFF38BDF8), Color(0xFF0EA5E9)];

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
    barrierDismissible: false,
    barrierLabel: 'Business Essentials',
    barrierColor: t.barrier,
    transitionDuration: const Duration(milliseconds: 340),
    pageBuilder: (ctx, a1, a2) => PopScope(
      canPop: false,
      child: _BusinessEssentialsHub(userEmail: userEmail),
    ),
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
  const _CategoryArt({required this.icon, required this.accent, required this.gradient});
  final IconData icon;
  final Color accent;
  final List<Color> gradient;
}

const _categoryArt = <String, _CategoryArt>{
  'Contacts': _CategoryArt(icon: Icons.groups_rounded, accent: Color(0xFF38BDF8), gradient: [Color(0xFF0EA5E9), Color(0xFF38BDF8)]),
  'Site Map': _CategoryArt(icon: Icons.map_rounded, accent: Color(0xFF34D399), gradient: [Color(0xFF10B981), Color(0xFF34D399)]),
  'Hotlines': _CategoryArt(icon: Icons.phone_in_talk_rounded, accent: Color(0xFFFBBF24), gradient: [Color(0xFFF59E0B), Color(0xFFFBBF24)]),
  'Medicines': _CategoryArt(icon: Icons.medication_liquid_rounded, accent: Color(0xFFEC4899), gradient: [Color(0xFFDB2777), Color(0xFFEC4899)]),
  'Notes': _CategoryArt(icon: Icons.note_alt_rounded, accent: Color(0xFFA78BFA), gradient: [Color(0xFF8B5CF6), Color(0xFFA78BFA)]),
  'Quick Tasks': _CategoryArt(icon: Icons.task_alt_rounded, accent: Color(0xFF34D399), gradient: [Color(0xFF059669), Color(0xFF34D399)]),
  'Where I Put It': _CategoryArt(icon: Icons.place_rounded, accent: Color(0xFFA78BFA), gradient: [Color(0xFF7C3AED), Color(0xFFA78BFA)]),
  'Paper Trace': _CategoryArt(icon: Icons.draw_rounded, accent: Color(0xFFF97316), gradient: [Color(0xFFEA580C), Color(0xFFF97316)]),
  'Local Menu (Test)': _CategoryArt(icon: Icons.restaurant_menu_rounded, accent: Color(0xFF0EA5E9), gradient: [Color(0xFF0284C7), Color(0xFF0EA5E9)]),
  'Local Bio (Test)': _CategoryArt(icon: Icons.link_rounded, accent: Color(0xFF6366F1), gradient: [Color(0xFF4F46E5), Color(0xFF6366F1)]),
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
    return NgmyHudMotion(
      builder: (context, pulse, scan, orbit) {
        return Material(
          color: Colors.transparent,
          child: NgmyToolkitAlivePageChrome(
            colors: _kEssentialsHudColors,
            pulse: pulse,
            scan: scan,
            orbit: orbit,
            header: NgmyToolkitAliveHeader(
              title: 'Business Essentials',
              subtitle: 'Contacts · reminders · notes · tasks · local tools',
              colors: _kEssentialsHudColors,
              pulse: pulse,
              orbit: orbit,
              icon: Icons.business_center_rounded,
              onClose: () => Navigator.pop(context),
              trailing: IconButton(
                tooltip: 'Transfer / backup',
                onPressed: () async {
                  final imported = await Navigator.of(context).push<bool>(
                    MaterialPageRoute(builder: (_) => NgmyEssentialsTransferPage(userEmail: widget.userEmail)),
                  );
                  if (imported == true) await _reload();
                },
                icon: Icon(Icons.sync_alt_rounded, color: NgmyHudInk.icon(context), size: 20),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 10, 20, 0),
                  child: Text(
                    'Organize contacts, reminders, notes, tasks & more — all saved locally',
                    style: TextStyle(color: NgmyHudInk.subtitle(context), fontSize: 13, height: 1.35),
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
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.05,
                          onTap: () => _openCategory((ctx) => showNgmyBusinessContactsDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Site Map',
                          count: _locations,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.12,
                          onTap: () => _openCategory((ctx) => showNgmySavedLocationsDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Hotlines',
                          count: _support,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.18,
                          onTap: () => _openCategory((ctx) => showNgmyQuickSupportDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Medicines',
                          count: _medicines,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.24,
                          onTap: () => _openCategory((ctx) => showNgmyMedicineOrganizerDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Notes',
                          count: _notes,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.3,
                          onTap: () => _openCategory((ctx) => showNgmyBusinessNotesDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Quick Tasks',
                          count: _tasks,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.36,
                          onTap: () => _openCategory((ctx) => showNgmyBusinessTasksDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Where I Put It',
                          count: _reminders,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.42,
                          onTap: () => _openCategory((ctx) => showNgmyItemReminderDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Paper Trace',
                          count: _traces,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.48,
                          onTap: () => _openCategory((ctx) => showNgmyPaperTraceDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Local Menu (Test)',
                          count: _localMenus,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.54,
                          onTap: () => _openCategory((ctx) => showNgmyLocalMenuStudioDialog(ctx, userEmail: widget.userEmail)),
                        ),
                        _CompactCategoryCard(
                          title: 'Local Bio (Test)',
                          count: _localBios,
                          pulse: pulse,
                          scan: scan,
                          orbit: orbit,
                          phase: 0.6,
                          onTap: () => _openCategory((ctx) => showNgmyLocalBioStudioDialog(ctx, userEmail: widget.userEmail)),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}

class _CompactCategoryCard extends StatelessWidget {
  const _CompactCategoryCard({
    required this.title,
    required this.count,
    required this.onTap,
    required this.pulse,
    required this.scan,
    required this.orbit,
    this.phase = 0,
  });

  final String title;
  final int count;
  final VoidCallback onTap;
  final double pulse;
  final double scan;
  final double orbit;
  final double phase;

  @override
  Widget build(BuildContext context) {
    final art = _categoryArt[title]!;
    return NgmyToolkitAliveSection(
      colors: art.gradient,
      pulse: pulse,
      scan: scan,
      orbit: orbit,
      phase: phase,
      padding: const EdgeInsets.all(10),
      onTap: onTap,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          NgmyHudMiniOrb(
            colors: art.gradient,
            pulse: pulse,
            orbit: orbit + phase,
            size: 48,
            icon: art.icon,
          ),
          const SizedBox(height: 8),
          Text(
            title,
            textAlign: TextAlign.center,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(color: NgmyHudInk.title(context), fontWeight: FontWeight.w900, fontSize: 12.5, height: 1.15),
          ),
          if (count > 0)
            Padding(
              padding: const EdgeInsets.only(top: 5),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                decoration: BoxDecoration(
                  color: art.accent.withValues(alpha: 0.22),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Text('$count', style: TextStyle(color: art.accent, fontWeight: FontWeight.w800, fontSize: 10)),
              ),
            ),
        ],
      ),
    );
  }
}
