import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_business_contacts.dart';
import 'ngmy_business_notes.dart';
import 'ngmy_business_tasks.dart';
import 'ngmy_helper_alarm_memory.dart';
import 'ngmy_item_reminder.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_local_bio_storage.dart';
import 'ngmy_local_menu_storage.dart';
import 'ngmy_local_studio.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_quick_support.dart';
import 'ngmy_saved_locations.dart';

/// Result when the user pins an Essentials item onto a home card.
class NgmyHomeEssentialsPin {
  const NgmyHomeEssentialsPin({
    required this.kind,
    required this.title,
    required this.body,
  });

  final String kind;
  final String title;
  final String body;
}

class _HubCat {
  const _HubCat({
    required this.id,
    required this.title,
    required this.icon,
    required this.accent,
    required this.gradient,
  });

  final String id;
  final String title;
  final IconData icon;
  final Color accent;
  final List<Color> gradient;
}

const _kHomeEssentialsCats = <_HubCat>[
  _HubCat(id: 'contacts', title: 'Contacts', icon: Icons.groups_rounded, accent: Color(0xFF38BDF8), gradient: [Color(0xFF0EA5E9), Color(0xFF38BDF8)]),
  _HubCat(id: 'sitemap', title: 'Site Map', icon: Icons.map_rounded, accent: Color(0xFF34D399), gradient: [Color(0xFF10B981), Color(0xFF34D399)]),
  _HubCat(id: 'hotlines', title: 'Hotlines', icon: Icons.phone_in_talk_rounded, accent: Color(0xFFFBBF24), gradient: [Color(0xFFF59E0B), Color(0xFFFBBF24)]),
  _HubCat(id: 'medicines', title: 'Medicines', icon: Icons.medication_liquid_rounded, accent: Color(0xFFEC4899), gradient: [Color(0xFFDB2777), Color(0xFFEC4899)]),
  _HubCat(id: 'notes', title: 'Notes', icon: Icons.note_alt_rounded, accent: Color(0xFFA78BFA), gradient: [Color(0xFF8B5CF6), Color(0xFFA78BFA)]),
  _HubCat(id: 'tasks', title: 'Quick Tasks', icon: Icons.task_alt_rounded, accent: Color(0xFF34D399), gradient: [Color(0xFF059669), Color(0xFF34D399)]),
  _HubCat(id: 'where', title: 'Where I Put It', icon: Icons.place_rounded, accent: Color(0xFFA78BFA), gradient: [Color(0xFF7C3AED), Color(0xFFA78BFA)]),
  _HubCat(id: 'alarms', title: 'Alarms', icon: Icons.alarm_rounded, accent: Color(0xFFF97316), gradient: [Color(0xFFEA580C), Color(0xFFFBBF24)]),
  _HubCat(id: 'menu', title: 'Local Menu', icon: Icons.restaurant_menu_rounded, accent: Color(0xFF0EA5E9), gradient: [Color(0xFF0284C7), Color(0xFF0EA5E9)]),
  _HubCat(id: 'bio', title: 'Local Bio', icon: Icons.link_rounded, accent: Color(0xFF6366F1), gradient: [Color(0xFF4F46E5), Color(0xFF6366F1)]),
];

/// Robotic Essentials vault opened from Home → Log spending.
Future<NgmyHomeEssentialsPin?> showNgmyHomeRoboticEssentialsHub(
  BuildContext context, {
  required String userEmail,
}) {
  return showGeneralDialog<NgmyHomeEssentialsPin>(
    context: context,
    barrierDismissible: false,
    barrierLabel: 'Essentials vault',
    barrierColor: Colors.black.withValues(alpha: 0.68),
    transitionDuration: const Duration(milliseconds: 420),
    pageBuilder: (ctx, a1, a2) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, _, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.88, end: 1).animate(curved),
          child: _NgmyHomeRoboticEssentialsHub(userEmail: userEmail),
        ),
      );
    },
  );
}

class _PinRow {
  const _PinRow({required this.title, required this.body});
  final String title;
  final String body;
}

class _NgmyHomeRoboticEssentialsHub extends StatefulWidget {
  const _NgmyHomeRoboticEssentialsHub({required this.userEmail});

  final String userEmail;

  @override
  State<_NgmyHomeRoboticEssentialsHub> createState() => _NgmyHomeRoboticEssentialsHubState();
}

class _NgmyHomeRoboticEssentialsHubState extends State<_NgmyHomeRoboticEssentialsHub> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;
  final Map<String, int> _counts = {};
  bool _loading = true;
  String? _openId;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
    _reload();
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    setState(() => _loading = true);
    final results = await Future.wait([
      ngmyBusinessContactCount(userEmail: widget.userEmail),
      ngmySavedLocationCount(userEmail: widget.userEmail),
      ngmyQuickSupportCount(userEmail: widget.userEmail),
      ngmyMedicineOrganizerCount(userEmail: widget.userEmail),
      ngmyBusinessNotesCount(userEmail: widget.userEmail),
      ngmyBusinessTasksCount(userEmail: widget.userEmail),
      ngmyItemReminderCount(userEmail: widget.userEmail),
      NgmyHelperAlarmMemoryStore.load(widget.userEmail).then((e) => e.length),
      ngmyLocalMenuCount(userEmail: widget.userEmail),
      ngmyLocalBioCount(userEmail: widget.userEmail),
    ]);
    if (!mounted) return;
    setState(() {
      _counts
        ..['contacts'] = results[0]
        ..['sitemap'] = results[1]
        ..['hotlines'] = results[2]
        ..['medicines'] = results[3]
        ..['notes'] = results[4]
        ..['tasks'] = results[5]
        ..['where'] = results[6]
        ..['alarms'] = results[7]
        ..['menu'] = results[8]
        ..['bio'] = results[9];
      _loading = false;
    });
  }

  Future<void> _openEditor(_HubCat cat) async {
    switch (cat.id) {
      case 'contacts':
        await showNgmyBusinessContactsDialog(context, userEmail: widget.userEmail);
        break;
      case 'sitemap':
        await showNgmySavedLocationsDialog(context, userEmail: widget.userEmail);
        break;
      case 'hotlines':
        await showNgmyQuickSupportDialog(context, userEmail: widget.userEmail);
        break;
      case 'medicines':
        await showNgmyMedicineOrganizerDialog(context, userEmail: widget.userEmail);
        break;
      case 'notes':
        await showNgmyBusinessNotesDialog(context, userEmail: widget.userEmail);
        break;
      case 'tasks':
        await showNgmyBusinessTasksDialog(context, userEmail: widget.userEmail);
        break;
      case 'where':
        await showNgmyItemReminderDialog(context, userEmail: widget.userEmail);
        break;
      case 'menu':
        await showNgmyLocalMenuStudioDialog(context, userEmail: widget.userEmail);
        break;
      case 'bio':
        await showNgmyLocalBioStudioDialog(context, userEmail: widget.userEmail);
        break;
      default:
        break;
    }
    if (mounted) await _reload();
  }

  Future<List<_PinRow>> _loadRows(String id) async {
    switch (id) {
      case 'contacts':
        final list = await ngmyExportBusinessContacts(userEmail: widget.userEmail);
        return list
            .map((c) => _PinRow(
                  title: c.name.trim().isEmpty ? 'Contact' : c.name.trim(),
                  body: [
                    if (c.company.trim().isNotEmpty) c.company.trim(),
                    if (c.phone.trim().isNotEmpty) c.phone.trim(),
                    if (c.email.trim().isNotEmpty) c.email.trim(),
                    if (c.notes.trim().isNotEmpty) c.notes.trim(),
                  ].join('\n'),
                ))
            .toList();
      case 'sitemap':
        final list = await ngmyExportSavedLocations(userEmail: widget.userEmail);
        return list
            .map((l) => _PinRow(
                  title: l.name.trim().isEmpty ? 'Location' : l.name.trim(),
                  body: [if (l.address.trim().isNotEmpty) l.address.trim(), if (l.notes.trim().isNotEmpty) l.notes.trim()].join('\n'),
                ))
            .toList();
      case 'hotlines':
        final list = await ngmyExportQuickSupport(userEmail: widget.userEmail);
        return list
            .map((s) => _PinRow(
                  title: s.title.trim().isEmpty ? s.provider : s.title.trim(),
                  body: [
                    if (s.provider.trim().isNotEmpty) s.provider.trim(),
                    if (s.phone.trim().isNotEmpty) s.phone.trim(),
                    if (s.notes.trim().isNotEmpty) s.notes.trim(),
                  ].join('\n'),
                ))
            .toList();
      case 'medicines':
        final list = await ngmyExportMedicines(userEmail: widget.userEmail);
        return list
            .map((m) => _PinRow(
                  title: m.name.trim().isEmpty ? 'Medicine' : m.name.trim(),
                  body: ngmyMedicinePinBody(m),
                ))
            .toList();
      case 'notes':
        final list = await ngmyExportBusinessNotes(userEmail: widget.userEmail);
        return list
            .map((n) => _PinRow(
                  title: n.preview.trim().isEmpty ? 'Note' : n.preview.trim(),
                  body: n.displayBody.trim(),
                ))
            .toList();
      case 'tasks':
        final list = await ngmyExportBusinessTasks(userEmail: widget.userEmail);
        return list
            .map((t) => _PinRow(
                  title: t.title.trim().isEmpty ? 'Task' : t.title.trim(),
                  body: [
                    if (t.priority.trim().isNotEmpty) 'Priority: ${t.priority}',
                    if (t.notes.trim().isNotEmpty) t.notes.trim(),
                    if (t.done) 'Done',
                  ].join('\n'),
                ))
            .toList();
      case 'where':
        final list = await loadNgmyItemReminders(userEmail: widget.userEmail);
        return list
            .map((r) => _PinRow(
                  title: r.itemName.trim().isEmpty ? 'Item' : r.itemName.trim(),
                  body: [
                    if (r.locationNote.trim().isNotEmpty) r.locationNote.trim(),
                    'Remind: ${r.remindAt}',
                  ].join('\n'),
                ))
            .toList();
      case 'alarms':
        final list = await NgmyHelperAlarmMemoryStore.load(widget.userEmail);
        return list.map((a) => _PinRow(title: 'Alarm', body: a.summaryLine)).toList();
      case 'menu':
        final list = await loadNgmyLocalMenus(userEmail: widget.userEmail);
        return list
            .map((m) => _PinRow(
                  title: m.restaurantName.trim().isEmpty ? 'Menu' : m.restaurantName.trim(),
                  body: m.tagline.trim().isEmpty ? 'Local menu' : m.tagline.trim(),
                ))
            .toList();
      case 'bio':
        final list = await loadNgmyLocalBios(userEmail: widget.userEmail);
        return list
            .map((b) => _PinRow(
                  title: b.displayName.trim().isEmpty ? 'Bio' : b.displayName.trim(),
                  body: b.tagline.trim().isEmpty ? 'Local bio' : b.tagline.trim(),
                ))
            .toList();
      default:
        return const [];
    }
  }

  Future<void> _openCategory(_HubCat cat) async {
    setState(() => _openId = cat.id);
    final rows = await _loadRows(cat.id);
    if (!mounted) return;
    await showGeneralDialog<void>(
      context: context,
      barrierDismissible: true,
      barrierLabel: cat.title,
      barrierColor: Colors.black.withValues(alpha: 0.55),
      transitionDuration: const Duration(milliseconds: 280),
      pageBuilder: (ctx, a1, a2) => const SizedBox.shrink(),
      transitionBuilder: (ctx, anim, _, child) {
        return FadeTransition(
          opacity: anim,
          child: Center(
            child: Material(
              color: Colors.transparent,
              child: Container(
                width: math.min(MediaQuery.sizeOf(ctx).width - 32, 420),
                constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(ctx).height * 0.78),
                margin: const EdgeInsets.symmetric(horizontal: 16),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(22),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF0B1220), Color(0xFF111827), Color(0xFF1E1B4B)],
                  ),
                  border: Border.all(color: cat.accent.withValues(alpha: 0.55), width: 1.4),
                  boxShadow: [BoxShadow(color: cat.accent.withValues(alpha: 0.28), blurRadius: 24)],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
                      child: Row(
                        children: [
                          Container(
                            width: 38,
                            height: 38,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(12),
                              gradient: LinearGradient(colors: cat.gradient),
                            ),
                            child: Icon(cat.icon, color: Colors.white, size: 20),
                          ),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Text(cat.title.toUpperCase(), style: TextStyle(color: cat.accent, fontWeight: FontWeight.w900, letterSpacing: 1.4, fontSize: 12)),
                          ),
                          IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                        ],
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 0, 16, 10),
                      child: Row(
                        children: [
                          Expanded(
                            child: OutlinedButton.icon(
                              onPressed: () async {
                                Navigator.pop(ctx);
                                await _openEditor(cat);
                              },
                              icon: const Icon(Icons.edit_rounded, size: 16),
                              label: const Text('Open / add', style: TextStyle(fontWeight: FontWeight.w800)),
                              style: OutlinedButton.styleFrom(
                                foregroundColor: Colors.white,
                                side: BorderSide(color: Colors.white.withValues(alpha: 0.28)),
                                minimumSize: const Size(0, 42),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    Flexible(
                      child: rows.isEmpty
                          ? Padding(
                              padding: const EdgeInsets.all(24),
                              child: Text(
                                'Nothing saved yet — tap Open / add to create items in Essentials.',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w600),
                              ),
                            )
                          : ListView.separated(
                              padding: const EdgeInsets.fromLTRB(14, 0, 14, 16),
                              shrinkWrap: true,
                              itemCount: rows.length,
                              separatorBuilder: (context, index) => const SizedBox(height: 8),
                              itemBuilder: (context, i) {
                                final row = rows[i];
                                return Material(
                                  color: Colors.transparent,
                                  child: InkWell(
                                    borderRadius: BorderRadius.circular(14),
                                    onTap: () {
                                      Navigator.pop(ctx);
                                      Navigator.pop(
                                        this.context,
                                        NgmyHomeEssentialsPin(kind: cat.title, title: row.title, body: row.body),
                                      );
                                    },
                                    child: Container(
                                      padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
                                      decoration: BoxDecoration(
                                        borderRadius: BorderRadius.circular(14),
                                        gradient: LinearGradient(
                                          colors: [
                                            cat.accent.withValues(alpha: 0.16),
                                            Colors.white.withValues(alpha: 0.04),
                                          ],
                                        ),
                                        border: Border.all(color: cat.accent.withValues(alpha: 0.35)),
                                      ),
                                      child: Row(
                                        children: [
                                          Expanded(
                                            child: Column(
                                              crossAxisAlignment: CrossAxisAlignment.start,
                                              children: [
                                                Text(row.title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14)),
                                                if (row.body.trim().isNotEmpty) ...[
                                                  const SizedBox(height: 4),
                                                  Text(row.body, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12, height: 1.3)),
                                                ],
                                              ],
                                            ),
                                          ),
                                          Icon(Icons.push_pin_rounded, color: cat.accent, size: 18),
                                        ],
                                      ),
                                    ),
                                  ),
                                );
                              },
                            ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
    if (mounted) setState(() => _openId = null);
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 28),
        child: Material(
          color: Colors.transparent,
          child: AnimatedBuilder(
            animation: _pulse,
            builder: (context, _) {
              final t = Curves.easeInOut.transform(_pulse.value);
              return Container(
                width: math.min(size.width - 32, 440),
                constraints: BoxConstraints(maxHeight: size.height * 0.88),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(26),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      const Color(0xFF0B1220),
                      Color.lerp(const Color(0xFF111827), const Color(0xFF1E1B4B), t * 0.4)!,
                      const Color(0xFF1E1B4B),
                    ],
                  ),
                  border: Border.all(color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFF8B5CF6), t)!, width: 1.5),
                  boxShadow: [
                    BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.18 + t * 0.12), blurRadius: 28),
                    BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 30, offset: const Offset(0, 14)),
                  ],
                ),
                child: Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(18, 16, 8, 8),
                      child: Row(
                        children: [
                          Container(
                            width: 48,
                            height: 48,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              gradient: SweepGradient(
                                colors: [
                                  Color.lerp(const Color(0xFF22D3EE), const Color(0xFF8B5CF6), t)!,
                                  const Color(0xFF60A5FA),
                                  Color.lerp(const Color(0xFFA78BFA), const Color(0xFF22D3EE), t)!,
                                ],
                              ),
                            ),
                            child: Container(
                              margin: const EdgeInsets.all(2.5),
                              decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF0B1220)),
                              child: const Icon(Icons.hub_rounded, color: Color(0xFF67E8F9), size: 22),
                            ),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'ESSENTIALS VAULT',
                                  style: TextStyle(
                                    fontSize: 12,
                                    fontWeight: FontWeight.w900,
                                    letterSpacing: 2.0,
                                    color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFA78BFA), t),
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  'Browse · add · pin to home card',
                                  style: TextStyle(fontSize: 12, color: Colors.white.withValues(alpha: 0.6), fontWeight: FontWeight.w600),
                                ),
                              ],
                            ),
                          ),
                          IconButton(
                            onPressed: () => Navigator.pop(context),
                            icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7)),
                          ),
                        ],
                      ),
                    ),
                    if (_loading)
                      const Expanded(child: Center(child: CircularProgressIndicator(color: Color(0xFF67E8F9))))
                    else
                      Expanded(
                        child: GridView.builder(
                          padding: const EdgeInsets.fromLTRB(14, 6, 14, 18),
                          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                            crossAxisCount: 2,
                            mainAxisSpacing: 10,
                            crossAxisSpacing: 10,
                            childAspectRatio: 1.28,
                          ),
                          itemCount: _kHomeEssentialsCats.length,
                          itemBuilder: (context, i) {
                            final cat = _kHomeEssentialsCats[i];
                            final count = _counts[cat.id] ?? 0;
                            final active = _openId == cat.id;
                            final wave = ((t + i * 0.08) % 1.0);
                            return Material(
                              color: Colors.transparent,
                              child: InkWell(
                                borderRadius: BorderRadius.circular(18),
                                onTap: () => _openCategory(cat),
                                child: AnimatedContainer(
                                  duration: const Duration(milliseconds: 180),
                                  padding: const EdgeInsets.all(12),
                                  decoration: BoxDecoration(
                                    borderRadius: BorderRadius.circular(18),
                                    gradient: LinearGradient(
                                      begin: Alignment(-1 + wave * 2, -0.5),
                                      end: Alignment(1 - wave * 2, 0.7),
                                      colors: [
                                        cat.gradient.first.withValues(alpha: 0.22 + wave * 0.08),
                                        const Color(0xFF0B1220).withValues(alpha: 0.55),
                                        cat.gradient.last.withValues(alpha: 0.16),
                                      ],
                                    ),
                                    border: Border.all(
                                      color: cat.accent.withValues(alpha: active ? 0.85 : 0.40 + wave * 0.2),
                                      width: active ? 1.8 : 1.2,
                                    ),
                                    boxShadow: [
                                      BoxShadow(color: cat.accent.withValues(alpha: 0.16 + wave * 0.12), blurRadius: 14 + wave * 8),
                                    ],
                                  ),
                                  child: Column(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      Container(
                                        width: 44,
                                        height: 44,
                                        decoration: BoxDecoration(
                                          shape: BoxShape.circle,
                                          gradient: LinearGradient(colors: cat.gradient),
                                          boxShadow: [BoxShadow(color: cat.accent.withValues(alpha: 0.4), blurRadius: 12)],
                                        ),
                                        child: Icon(cat.icon, color: Colors.white, size: 22),
                                      ),
                                      const SizedBox(height: 8),
                                      Text(
                                        cat.title,
                                        textAlign: TextAlign.center,
                                        maxLines: 2,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12, height: 1.15),
                                      ),
                                      if (count > 0) ...[
                                        const SizedBox(height: 5),
                                        Container(
                                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                                          decoration: BoxDecoration(
                                            color: cat.accent.withValues(alpha: 0.2),
                                            borderRadius: BorderRadius.circular(99),
                                          ),
                                          child: Text('$count', style: TextStyle(color: cat.accent, fontWeight: FontWeight.w800, fontSize: 10)),
                                        ),
                                      ],
                                    ],
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
                      ),
                  ],
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}
