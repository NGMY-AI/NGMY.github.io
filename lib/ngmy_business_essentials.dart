import 'package:flutter/material.dart';

import 'ngmy_bible_dictionary.dart';
import 'ngmy_business_contacts.dart';
import 'ngmy_business_notes.dart';
import 'ngmy_business_tasks.dart';
import 'ngmy_essentials_transfer.dart';
import 'ngmy_hub_form_ui.dart';
import 'ngmy_hud_tech_shell.dart';
import 'ngmy_item_reminder.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_color_buckets.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_private_vault.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

const _kEssentialsHudColors = [Color(0xFF38BDF8), Color(0xFF0EA5E9)];

Future<int> ngmyBusinessEssentialsTotalCount({
  required String userEmail,
}) async {
  final results = await Future.wait([
    ngmyBusinessContactCount(userEmail: userEmail),
    ngmySavedLocationCount(userEmail: userEmail),
    ngmyQuickSupportCount(userEmail: userEmail),
    ngmyMedicineOrganizerCount(userEmail: userEmail),
    ngmyBusinessNotesCount(userEmail: userEmail),
    ngmyBusinessTasksCount(userEmail: userEmail),
    ngmyItemReminderCount(userEmail: userEmail),
    ngmyColorBucketsCount(userEmail: userEmail),
    ngmyBibleDictionaryCount(userEmail: userEmail),
    ngmyQuickDialCount(userEmail: userEmail),
  ]);
  return results.fold<int>(0, (a, b) => a + b);
}

Future<void> showNgmyBusinessEssentialsHub(
  BuildContext context, {
  required String userEmail,
}) {
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
      final scale = Tween<double>(
        begin: 0.96,
        end: 1,
      ).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
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
  const _CategoryArt({
    required this.icon,
    required this.accent,
    required this.gradient,
  });
  final IconData icon;
  final Color accent;
  final List<Color> gradient;
}

const _categoryArt = <String, _CategoryArt>{
  'Contacts': _CategoryArt(
    icon: Icons.groups_rounded,
    accent: Color(0xFF38BDF8),
    gradient: [Color(0xFF0EA5E9), Color(0xFF38BDF8)],
  ),
  'Site Map': _CategoryArt(
    icon: Icons.map_rounded,
    accent: Color(0xFF34D399),
    gradient: [Color(0xFF10B981), Color(0xFF34D399)],
  ),
  'Hotlines': _CategoryArt(
    icon: Icons.phone_in_talk_rounded,
    accent: Color(0xFFFBBF24),
    gradient: [Color(0xFFF59E0B), Color(0xFFFBBF24)],
  ),
  'Medicines': _CategoryArt(
    icon: Icons.medication_liquid_rounded,
    accent: Color(0xFFEC4899),
    gradient: [Color(0xFFDB2777), Color(0xFFEC4899)],
  ),
  'Notes': _CategoryArt(
    icon: Icons.note_alt_rounded,
    accent: Color(0xFFA78BFA),
    gradient: [Color(0xFF8B5CF6), Color(0xFFA78BFA)],
  ),
  'Quick Tasks': _CategoryArt(
    icon: Icons.task_alt_rounded,
    accent: Color(0xFF34D399),
    gradient: [Color(0xFF059669), Color(0xFF34D399)],
  ),
  'Where I Put It': _CategoryArt(
    icon: Icons.place_rounded,
    accent: Color(0xFF818CF8),
    gradient: [Color(0xFF4338CA), Color(0xFF6366F1)],
  ),
  'Paint Mix': _CategoryArt(
    icon: Icons.palette_outlined,
    accent: Color(0xFFD6A800),
    gradient: [Color(0xFF2A2A2A), Color(0xFFC59A1B)],
  ),
  'Bible Dictionary': _CategoryArt(
    icon: Icons.auto_stories_rounded,
    accent: Color(0xFF7C3AED),
    gradient: [Color(0xFF7C3AED), Color(0xFFD4AF37)],
  ),
  'Quick Dial': _CategoryArt(
    icon: Icons.dialpad_rounded,
    accent: Color(0xFF22C55E),
    gradient: [Color(0xFF16A34A), Color(0xFF22C55E)],
  ),
};

class _BusinessEssentialsHubState extends State<_BusinessEssentialsHub> {
  int _contacts = 0;
  int _locations = 0;
  int _support = 0;
  int _medicines = 0;
  int _notes = 0;
  int _tasks = 0;
  int _reminders = 0;
  int _colorBuckets = 0;
  int _bibleDictionary = 0;
  int _quickDial = 0;
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
      ngmyColorBucketsCount(userEmail: widget.userEmail),
      ngmyBibleDictionaryCount(userEmail: widget.userEmail),
      ngmyQuickDialCount(userEmail: widget.userEmail),
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
      _colorBuckets = results[7];
      _bibleDictionary = results[8];
      _quickDial = results[9];
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
            overlayHeader: true,
            headerBare: true,
            header: NgmyToolkitAliveHeader(
              title: 'Business Essentials',
              colors: _kEssentialsHudColors,
              pulse: pulse,
              orbit: orbit,
              emoji: '💼',
              onClose: () => Navigator.pop(context),
              trailing: Tooltip(
                message: 'Transfer / backup',
                child: Material(
                  color: Colors.transparent,
                  child: InkWell(
                    customBorder: const CircleBorder(),
                    onTap: () async {
                      final imported = await Navigator.of(context).push<bool>(
                        MaterialPageRoute(
                          builder: (_) => NgmyEssentialsTransferPage(
                            userEmail: widget.userEmail,
                          ),
                        ),
                      );
                      if (imported == true) await _reload();
                    },
                    child: Container(
                      width: 28,
                      height: 28,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(
                          colors: [
                            const Color(0xFF38BDF8).withValues(alpha: 0.35),
                            const Color(0xFF6366F1).withValues(alpha: 0.28),
                          ],
                        ),
                        border: Border.all(
                          color: NgmyHudInk.icon(
                            context,
                          ).withValues(alpha: 0.45),
                          width: 1.1,
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: const Color(
                              0xFF38BDF8,
                            ).withValues(alpha: 0.18),
                            blurRadius: 6,
                          ),
                        ],
                      ),
                      child: Icon(
                        Icons.sync_alt_rounded,
                        color: NgmyHudInk.icon(context),
                        size: 13,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                if (_loading)
                  const Expanded(
                    child: Center(
                      child: CircularProgressIndicator(
                        color: Color(0xFF38BDF8),
                      ),
                    ),
                  )
                else
                  Expanded(
                    child: Builder(
                      builder: (context) {
                        final topPad = MediaQuery.paddingOf(context).top + 92;
                        return GridView.count(
                          crossAxisCount: 2,
                          padding: EdgeInsets.fromLTRB(16, topPad, 16, 24),
                          mainAxisSpacing: 10,
                          crossAxisSpacing: 10,
                          childAspectRatio: 1.35,
                          children: [
                            _CompactCategoryCard(
                              title: 'Notes',
                              count: _notes,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.05,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyBusinessNotesDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Where I Put It',
                              count: _reminders,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.12,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyItemReminderDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Contacts',
                              count: _contacts,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.18,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyBusinessContactsDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Medicines',
                              count: _medicines,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.24,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyMedicineOrganizerDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Site Map',
                              count: _locations,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.3,
                              onTap: () => _openCategory(
                                (ctx) => showNgmySavedLocationsDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Quick Tasks',
                              count: _tasks,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.36,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyBusinessTasksDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Hotlines',
                              count: _support,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.42,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyQuickSupportDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Paint Mix',
                              count: _colorBuckets,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.48,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyColorBucketsDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Bible Dictionary',
                              count: _bibleDictionary,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.54,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyBibleDictionaryDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                            _CompactCategoryCard(
                              title: 'Quick Dial',
                              count: _quickDial,
                              pulse: pulse,
                              scan: scan,
                              orbit: orbit,
                              phase: 0.6,
                              onTap: () => _openCategory(
                                (ctx) => showNgmyQuickDialDialog(
                                  ctx,
                                  userEmail: widget.userEmail,
                                ),
                              ),
                            ),
                          ],
                        );
                      },
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

/// One line under each category name.
const _categoryBlurb = <String, String>{
  'Notes': 'Ideas, lists & plans',
  'Where I Put It': 'Never lose a thing',
  'Contacts': 'People you work with',
  'Medicines': 'Doses & reminders',
  'Site Map': 'Saved places',
  'Quick Tasks': 'Get things done',
  'Hotlines': 'Help numbers',
  'Paint Mix': 'Your color recipes',
  'Bible Dictionary': 'Words & meanings',
  'Quick Dial': 'Call in one tap',
};

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
    final c1 = art.gradient.first, c2 = art.gradient.last;
    final deep = Color.lerp(c1, Colors.black, 0.35)!;
    // A soft band of light drifts across each card, a little out of step with the others.
    final sweep = ((scan + phase) % 1.0) * 2.6 - 0.8;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(22),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [c2, c1, deep],
              stops: const [0, 0.55, 1],
            ),
            border: Border.all(color: Colors.white.withValues(alpha: 0.22), width: 1),
            boxShadow: [
              BoxShadow(color: c1.withValues(alpha: 0.28 + pulse * 0.08), blurRadius: 16, offset: const Offset(0, 8)),
            ],
          ),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(22),
            child: Stack(
              children: [
                // Big faint icon in the corner.
                Positioned(
                  right: -14,
                  bottom: -18,
                  child: Transform.rotate(
                    angle: -0.18,
                    child: Icon(art.icon, size: 92, color: Colors.white.withValues(alpha: 0.13)),
                  ),
                ),
                // Glossy top highlight.
                Positioned(
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 46,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [Colors.white.withValues(alpha: 0.18), Colors.white.withValues(alpha: 0)],
                      ),
                    ),
                  ),
                ),
                // Moving light sweep.
                Positioned.fill(
                  child: IgnorePointer(
                    child: FractionalTranslation(
                      translation: Offset(sweep, 0),
                      child: Transform.rotate(
                        angle: 0.45,
                        child: FractionallySizedBox(
                          widthFactor: 0.35,
                          child: DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(colors: [
                                Colors.white.withValues(alpha: 0),
                                Colors.white.withValues(alpha: 0.16),
                                Colors.white.withValues(alpha: 0),
                              ]),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 12, 12, 11),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Container(
                            width: 40,
                            height: 40,
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.22),
                              borderRadius: BorderRadius.circular(13),
                              border: Border.all(color: Colors.white.withValues(alpha: 0.35)),
                            ),
                            child: Icon(art.icon, color: Colors.white, size: 22),
                          ),
                          const Spacer(),
                          if (count > 0)
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                              decoration: BoxDecoration(
                                color: Colors.black.withValues(alpha: 0.22),
                                borderRadius: BorderRadius.circular(20),
                                border: Border.all(color: Colors.white.withValues(alpha: 0.3)),
                              ),
                              child: Text(
                                '$count',
                                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11),
                              ),
                            ),
                        ],
                      ),
                      const Spacer(),
                      Text(
                        title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 14.5,
                          height: 1.1,
                          shadows: [Shadow(color: Colors.black26, blurRadius: 4, offset: Offset(0, 1))],
                        ),
                      ),
                      const SizedBox(height: 2),
                      Row(
                        children: [
                          Expanded(
                            child: Text(
                              _categoryBlurb[title] ?? '',
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontWeight: FontWeight.w600, fontSize: 11),
                            ),
                          ),
                          Icon(Icons.arrow_forward_rounded, size: 14, color: Colors.white.withValues(alpha: 0.8)),
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
