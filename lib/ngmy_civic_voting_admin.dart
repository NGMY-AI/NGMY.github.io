import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_civic_voting.dart';
import 'ngmy_state_picker.dart';
import 'ngmy_voice_input.dart';

class _UpperCaseTextFormatter extends TextInputFormatter {
  @override
  TextEditingValue formatEditUpdate(TextEditingValue oldValue, TextEditingValue newValue) {
    return TextEditingValue(
      text: newValue.text.toUpperCase(),
      selection: newValue.selection,
    );
  }
}

Future<void> showNgmyCivicVotingAdminSheet(BuildContext context) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  var bundle = (await NgmyCivicVotingStore.load(forceCloud: true)).copy();
  if (bundle.polls.isEmpty) {
    bundle.polls = [
      NgmyCivicVotingState(
        id: 'poll_main',
        category: NgmyVotingCategory.civic,
        membersOnly: true,
        title: 'Civic Voting',
        yearLabel: '2026',
      ),
    ];
  }
  var selectedId = bundle.polls.first.id;

  if (!context.mounted) return;
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (sheetCtx) {
      return StatefulBuilder(
        builder: (sheetCtx, setSheet) {
          final bg = isDark ? const Color(0xFF0B1220) : const Color(0xFFF8FAFC);
          final card = isDark ? const Color(0xFF151C2C) : Colors.white;
          final ink = isDark ? Colors.white : const Color(0xFF0F172A);
          final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
          final accent = const Color(0xFF059669);

          NgmyCivicVotingState voting = bundle.polls.firstWhere(
            (p) => p.id == selectedId,
            orElse: () => bundle.polls.first,
          );

          Future<void> persist() async {
            voting.syncMembersOnlyFromCategory();
            await NgmyCivicVotingStore.save(bundle);
            if (sheetCtx.mounted) setSheet(() {});
          }

          Future<void> addPoll(String category) async {
            final id = 'poll_${DateTime.now().microsecondsSinceEpoch}';
            final poll = NgmyCivicVotingState(
              id: id,
              category: category,
              membersOnly: NgmyVotingCategory.membersOnlyFor(category),
              title: NgmyVotingCategory.defaultTitle(category),
              yearLabel: '${DateTime.now().year}',
            );
            bundle.polls.add(poll);
            selectedId = id;
            await persist();
          }

          InputDecoration deco(String label, {Widget? suffix, String? hint}) => InputDecoration(
                labelText: label,
                hintText: hint,
                filled: true,
                fillColor: isDark ? const Color(0xFF0F172A) : const Color(0xFFF1F5F9),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                enabledBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(14),
                  borderSide: BorderSide(color: isDark ? Colors.white10 : const Color(0xFFE2E8F0)),
                ),
                focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(14),
                  borderSide: BorderSide(color: accent.withValues(alpha: 0.7), width: 1.4),
                ),
                suffixIcon: suffix,
                isDense: true,
              );

          return SafeArea(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                constraints: BoxConstraints(
                  maxWidth: 560,
                  maxHeight: MediaQuery.sizeOf(sheetCtx).height * 0.94,
                ),
                margin: const EdgeInsets.all(10),
                decoration: BoxDecoration(
                  color: bg,
                  borderRadius: BorderRadius.circular(28),
                  border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: isDark ? 0.45 : 0.12),
                      blurRadius: 28,
                      offset: const Offset(0, 12),
                    ),
                  ],
                ),
                child: Column(
                  children: [
                    const SizedBox(height: 10),
                    Container(
                      width: 40,
                      height: 4,
                      decoration: BoxDecoration(color: muted.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(99)),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(18, 14, 8, 6),
                      child: Row(
                        children: [
                          Container(
                            width: 42,
                            height: 42,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              gradient: const LinearGradient(colors: [Color(0xFF059669), Color(0xFF34D399)]),
                            ),
                            child: const Icon(Icons.how_to_vote_rounded, color: Colors.white, size: 22),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Voting', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 20)),
                                Text('Civic · music · movies · more', style: TextStyle(color: muted, fontSize: 12)),
                              ],
                            ),
                          ),
                          IconButton(onPressed: () => Navigator.pop(sheetCtx), icon: Icon(Icons.close_rounded, color: muted)),
                        ],
                      ),
                    ),
                    Expanded(
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                        children: [
                          _sectionCard(
                            card: card,
                            isDark: isDark,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Row(
                                  children: [
                                    Expanded(
                                      child: Text('Polls', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 15)),
                                    ),
                                    PopupMenuButton<String>(
                                      tooltip: 'Add poll',
                                      onSelected: (cat) => unawaited(addPoll(cat)),
                                      itemBuilder: (_) => [
                                        for (final c in NgmyVotingCategory.all)
                                          PopupMenuItem(value: c.$1, child: Text(c.$2)),
                                      ],
                                      child: Padding(
                                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 6),
                                        child: Row(
                                          mainAxisSize: MainAxisSize.min,
                                          children: [
                                            Icon(Icons.add_rounded, color: accent, size: 18),
                                            const SizedBox(width: 4),
                                            Text('Add', style: TextStyle(color: accent, fontWeight: FontWeight.w800)),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                Wrap(
                                  spacing: 8,
                                  runSpacing: 8,
                                  children: [
                                    for (final p in bundle.polls)
                                      InputChip(
                                        selected: p.id == voting.id,
                                        label: Text(
                                          p.title.trim().isEmpty ? NgmyVotingCategory.labelOf(p.category) : p.title,
                                          style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12),
                                        ),
                                        onSelected: (_) => setSheet(() => selectedId = p.id),
                                        onDeleted: bundle.polls.length <= 1
                                            ? null
                                            : () async {
                                                bundle.polls.removeWhere((x) => x.id == p.id);
                                                selectedId = bundle.polls.first.id;
                                                await persist();
                                              },
                                      ),
                                  ],
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 12),
                          _sectionCard(
                            card: card,
                            isDark: isDark,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Row(
                                  children: [
                                    Expanded(
                                      child: Text(
                                        voting.open ? 'Voting is live' : 'Voting is closed',
                                        style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15),
                                      ),
                                    ),
                                    Switch.adaptive(
                                      value: voting.open,
                                      activeThumbColor: accent,
                                      onChanged: (v) async {
                                        voting.open = v;
                                        if (!v) {
                                          final cycle = voting.currentOrPastCycleDate();
                                          if (cycle != null) {
                                            voting.manualClosedCycleKey = NgmyCivicVotingState.cycleKey(cycle);
                                          }
                                        } else {
                                          voting.manualClosedCycleKey = '';
                                        }
                                        await persist();
                                      },
                                    ),
                                  ],
                                ),
                                Text(
                                  voting.open
                                      ? (voting.membersOnly
                                          ? 'Civic members can vote now'
                                          : 'Anyone signed in can vote now')
                                      : 'Users see Coming soon',
                                  style: TextStyle(color: muted, fontSize: 12),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 12),
                          _sectionCard(
                            card: card,
                            isDark: isDark,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Text('Category', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 15)),
                                const SizedBox(height: 8),
                                Wrap(
                                  spacing: 8,
                                  runSpacing: 8,
                                  children: [
                                    for (final c in NgmyVotingCategory.all)
                                      ChoiceChip(
                                        label: Text(c.$2, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 11)),
                                        selected: voting.category == c.$1,
                                        selectedColor: accent.withValues(alpha: 0.22),
                                        onSelected: (_) async {
                                          voting.category = c.$1;
                                          voting.syncMembersOnlyFromCategory();
                                          if (voting.title.trim().isEmpty ||
                                              NgmyVotingCategory.all.any((x) => x.$2 == voting.title || NgmyVotingCategory.defaultTitle(x.$1) == voting.title)) {
                                            voting.title = NgmyVotingCategory.defaultTitle(c.$1);
                                          }
                                          await persist();
                                        },
                                      ),
                                  ],
                                ),
                                const SizedBox(height: 8),
                                Text(
                                  voting.membersOnly
                                      ? 'Only linked Civic Registry members can vote'
                                      : 'Anyone signed in on NGMY can vote',
                                  style: TextStyle(color: muted, fontSize: 12),
                                ),
                              ],
                            ),
                          ),
                          const SizedBox(height: 12),
                          _sectionCard(
                            card: card,
                            isDark: isDark,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Text('Ballot details', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 15)),
                                const SizedBox(height: 12),
                                TextFormField(
                                  key: ValueKey('title_${voting.id}'),
                                  initialValue: voting.title,
                                  style: TextStyle(color: ink, fontWeight: FontWeight.w600),
                                  decoration: deco('Title', hint: 'Community President'),
                                  onChanged: (v) => voting.title = v,
                                  onFieldSubmitted: (_) => persist(),
                                ),
                                const SizedBox(height: 10),
                                TextFormField(
                                  key: ValueKey('year_${voting.id}'),
                                  initialValue: voting.yearLabel,
                                  style: TextStyle(color: ink, fontWeight: FontWeight.w600),
                                  decoration: deco('Year label', hint: '2026'),
                                  onChanged: (v) => voting.yearLabel = v,
                                  onFieldSubmitted: (_) => persist(),
                                ),
                                const SizedBox(height: 10),
                                InkWell(
                                  borderRadius: BorderRadius.circular(14),
                                  onTap: () async {
                                    final now = DateTime.now();
                                    final initial = DateTime.tryParse(voting.scheduleOpenDate) ?? now;
                                    final picked = await showDatePicker(
                                      context: sheetCtx,
                                      initialDate: initial.isBefore(DateTime(now.year - 5)) ? now : initial,
                                      firstDate: DateTime(now.year - 1),
                                      lastDate: DateTime(now.year + 20),
                                      helpText: 'Voting open date',
                                    );
                                    if (picked == null) return;
                                    voting.scheduleOpenDate = NgmyCivicVotingState.cycleKey(picked);
                                    voting.dateLabel = NgmyCivicVotingState.formatDisplayDate(picked);
                                    voting.yearLabel = '${picked.year}';
                                    voting.applySchedule();
                                    await persist();
                                  },
                                  child: InputDecorator(
                                    decoration: deco(
                                      'Open date',
                                      suffix: const Icon(Icons.calendar_month_rounded),
                                    ),
                                    child: Text(
                                      voting.scheduleOpenDate.trim().isEmpty
                                          ? 'Tap to choose calendar date'
                                          : (voting.dateLabel.trim().isEmpty
                                              ? voting.scheduleOpenDate
                                              : voting.dateLabel),
                                      style: TextStyle(
                                        color: voting.scheduleOpenDate.trim().isEmpty ? muted : ink,
                                        fontWeight: FontWeight.w600,
                                      ),
                                    ),
                                  ),
                                ),
                                const SizedBox(height: 12),
                                Text('Repeat every', style: TextStyle(color: ink, fontWeight: FontWeight.w700, fontSize: 13)),
                                const SizedBox(height: 8),
                                Wrap(
                                  spacing: 8,
                                  runSpacing: 8,
                                  children: [
                                    for (final years in [0, 1, 2, 3, 4, 5])
                                      ChoiceChip(
                                        label: Text(years == 0 ? 'One time' : '$years yr'),
                                        selected: voting.recurrenceYears == years,
                                        selectedColor: accent.withValues(alpha: 0.22),
                                        labelStyle: TextStyle(
                                          fontWeight: FontWeight.w700,
                                          color: voting.recurrenceYears == years ? accent : ink,
                                        ),
                                        onSelected: (_) async {
                                          voting.recurrenceYears = years;
                                          await persist();
                                        },
                                      ),
                                  ],
                                ),
                                if (voting.recurrenceYears > 0) ...[
                                  const SizedBox(height: 8),
                                  Text(
                                    'Opens automatically every ${voting.recurrenceYears} year${voting.recurrenceYears == 1 ? '' : 's'} on this date. Update candidates before each cycle.',
                                    style: TextStyle(color: muted, fontSize: 11.5, height: 1.35),
                                  ),
                                ],
                              ],
                            ),
                          ),
                          const SizedBox(height: 12),
                          _sectionCard(
                            card: card,
                            isDark: isDark,
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Row(
                                  children: [
                                    Expanded(
                                      child: Text('Allowed states', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 15)),
                                    ),
                                    IconButton(
                                      tooltip: 'Search states',
                                      onPressed: () async {
                                        await _pickStatesDialog(
                                          sheetCtx,
                                          isDark: isDark,
                                          selected: voting.allowedStates,
                                          onChanged: (next) async {
                                            voting.allowedStates = next;
                                            await persist();
                                          },
                                        );
                                      },
                                      icon: Icon(Icons.search_rounded, color: accent),
                                    ),
                                  ],
                                ),
                                Text(
                                  voting.allowedStates.isEmpty
                                      ? 'All states can vote'
                                      : '${voting.allowedStates.length} state${voting.allowedStates.length == 1 ? '' : 's'} selected',
                                  style: TextStyle(color: muted, fontSize: 12),
                                ),
                                const SizedBox(height: 10),
                                OutlinedButton.icon(
                                  onPressed: () async {
                                    await _pickStatesDialog(
                                      sheetCtx,
                                      isDark: isDark,
                                      selected: voting.allowedStates,
                                      onChanged: (next) async {
                                        voting.allowedStates = next;
                                        await persist();
                                      },
                                    );
                                  },
                                  icon: const Icon(Icons.arrow_drop_down_rounded),
                                  label: Text(
                                    voting.allowedStates.isEmpty ? 'Choose states' : 'Edit states',
                                    style: const TextStyle(fontWeight: FontWeight.w700),
                                  ),
                                  style: OutlinedButton.styleFrom(
                                    foregroundColor: accent,
                                    side: BorderSide(color: accent.withValues(alpha: 0.45)),
                                    padding: const EdgeInsets.symmetric(vertical: 12),
                                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  ),
                                ),
                                if (voting.allowedStates.isNotEmpty) ...[
                                  const SizedBox(height: 10),
                                  Wrap(
                                    spacing: 6,
                                    runSpacing: 6,
                                    children: voting.allowedStates.take(8).map((s) {
                                      return Chip(
                                        label: Text(s, style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w600)),
                                        deleteIcon: const Icon(Icons.close_rounded, size: 14),
                                        onDeleted: () async {
                                          voting.allowedStates = voting.allowedStates.where((x) => x != s).toList();
                                          await persist();
                                        },
                                        visualDensity: VisualDensity.compact,
                                        backgroundColor: accent.withValues(alpha: 0.1),
                                      );
                                    }).toList(),
                                  ),
                                  if (voting.allowedStates.length > 8)
                                    Text('+${voting.allowedStates.length - 8} more', style: TextStyle(color: muted, fontSize: 11)),
                                ],
                              ],
                            ),
                          ),
                          const SizedBox(height: 16),
                          Row(
                            children: [
                              Expanded(child: Text('Candidates', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 17))),
                              FilledButton.tonalIcon(
                                onPressed: () async {
                                  final id = 'cand_${DateTime.now().microsecondsSinceEpoch}';
                                  voting.candidates.add(NgmyCivicVotingCandidate(id: id, name: 'NEW CANDIDATE'));
                                  await persist();
                                },
                                icon: const Icon(Icons.person_add_alt_1_rounded, size: 18),
                                label: const Text('Add'),
                                style: FilledButton.styleFrom(
                                  foregroundColor: accent,
                                  backgroundColor: accent.withValues(alpha: 0.14),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 10),
                          ...voting.candidates.map((c) {
                            final votes = voting.votesFor(c.id);
                            final photo = ngmyCivicVotingPhotoProvider(c.photoUrl);
                            return Container(
                              margin: const EdgeInsets.only(bottom: 12),
                              padding: const EdgeInsets.all(14),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(20),
                                color: card,
                                border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Row(
                                    children: [
                                      GestureDetector(
                                        onTap: () async {
                                          final url = await NgmyCivicVotingStore.pickCandidatePhoto(c.id);
                                          if (url == null) return;
                                          c.photoUrl = url;
                                          await persist();
                                        },
                                        child: CircleAvatar(
                                          radius: 28,
                                          backgroundColor: const Color(0xFF334155),
                                          backgroundImage: photo,
                                          child: photo == null
                                              ? const Icon(Icons.add_a_photo_rounded, color: Colors.white70, size: 18)
                                              : null,
                                        ),
                                      ),
                                      const SizedBox(width: 12),
                                      Expanded(
                                        child: TextFormField(
                                          initialValue: c.name.toUpperCase(),
                                          style: TextStyle(color: ink, fontWeight: FontWeight.w700),
                                          decoration: deco('Name'),
                                          textCapitalization: TextCapitalization.characters,
                                          inputFormatters: [_UpperCaseTextFormatter()],
                                          onChanged: (v) => c.name = v.toUpperCase(),
                                          onFieldSubmitted: (_) => persist(),
                                        ),
                                      ),
                                      IconButton(
                                        onPressed: () async {
                                          voting.candidates.removeWhere((x) => x.id == c.id);
                                          voting.ballots.removeWhere((b) => b.candidateId == c.id);
                                          await persist();
                                        },
                                        icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 10),
                                  TextFormField(
                                    key: ValueKey('bio_${c.id}_${c.bioNote.hashCode}'),
                                    initialValue: c.bioNote,
                                    minLines: 2,
                                    maxLines: 4,
                                    style: TextStyle(color: ink, fontWeight: FontWeight.w500, height: 1.35),
                                    decoration: deco(
                                      'Bio / notes',
                                      hint: 'Short profile voters can read',
                                      suffix: IconButton(
                                        tooltip: 'Dictate note',
                                        onPressed: () async {
                                          final started = await NgmyVoiceInput.listen(
                                            onText: (text, {bool isFinal = false}) {
                                              if (text.trim().isEmpty) return;
                                              setSheet(() => c.bioNote = text.trim());
                                              if (isFinal) persist();
                                            },
                                          );
                                          if (!started && sheetCtx.mounted) {
                                            ScaffoldMessenger.of(sheetCtx).showSnackBar(
                                              const SnackBar(content: Text('Voice input unavailable on this device.')),
                                            );
                                          }
                                        },
                                        icon: Icon(Icons.mic_rounded, color: accent),
                                      ),
                                    ),
                                    onChanged: (v) => c.bioNote = v,
                                    onFieldSubmitted: (_) => persist(),
                                  ),
                                  const SizedBox(height: 8),
                                  Row(
                                    children: [
                                      Expanded(
                                        child: OutlinedButton.icon(
                                          onPressed: () async {
                                            final url = await NgmyCivicVotingStore.pickCandidateVoiceNote(c.id);
                                            if (url == null) return;
                                            c.voiceNoteUrl = url;
                                            await persist();
                                          },
                                          icon: Icon(
                                            c.voiceNoteUrl.trim().isEmpty ? Icons.graphic_eq_rounded : Icons.check_circle_rounded,
                                            size: 18,
                                          ),
                                          label: Text(
                                            c.voiceNoteUrl.trim().isEmpty ? 'Add voice note' : 'Voice note added',
                                            style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12),
                                          ),
                                        ),
                                      ),
                                      if (c.voiceNoteUrl.trim().isNotEmpty)
                                        IconButton(
                                          tooltip: 'Remove voice note',
                                          onPressed: () async {
                                            c.voiceNoteUrl = '';
                                            await persist();
                                          },
                                          icon: Icon(Icons.close_rounded, color: muted),
                                        ),
                                    ],
                                  ),
                                  const SizedBox(height: 8),
                                  Text('$votes live votes', style: TextStyle(color: accent, fontWeight: FontWeight.w800)),
                                  const SizedBox(height: 8),
                                  OutlinedButton.icon(
                                    onPressed: () async {
                                      final ok = await _promptDripVotes(sheetCtx, isDark: isDark, candidate: c);
                                      if (ok == true) await persist();
                                    },
                                    icon: const Icon(Icons.timelapse_rounded),
                                    label: Text(
                                      c.dripTotal > 0
                                          ? 'Drip ${c.dripTotal} over ${c.dripDurationMinutes}m'
                                          : 'Add drip votes',
                                      style: const TextStyle(fontWeight: FontWeight.w700),
                                    ),
                                  ),
                                  Align(
                                    alignment: Alignment.centerRight,
                                    child: TextButton(
                                      onPressed: () => persist(),
                                      child: const Text('Save candidate'),
                                    ),
                                  ),
                                ],
                              ),
                            );
                          }),
                          const SizedBox(height: 8),
                          FilledButton(
                            onPressed: () async {
                              await persist();
                              if (sheetCtx.mounted) {
                                ScaffoldMessenger.of(sheetCtx).showSnackBar(
                                  const SnackBar(content: Text('Voting saved.')),
                                );
                              }
                            },
                            style: FilledButton.styleFrom(
                              backgroundColor: accent,
                              padding: const EdgeInsets.symmetric(vertical: 15),
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                            ),
                            child: const Text('Save voting', style: TextStyle(fontWeight: FontWeight.w900)),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          );
        },
      );
    },
  );
}

Widget _sectionCard({required Color card, required bool isDark, required Widget child}) {
  return Container(
    padding: const EdgeInsets.all(14),
    decoration: BoxDecoration(
      color: card,
      borderRadius: BorderRadius.circular(20),
      border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
    ),
    child: child,
  );
}

Future<void> _pickStatesDialog(
  BuildContext context, {
  required bool isDark,
  required List<String> selected,
  required Future<void> Function(List<String> next) onChanged,
}) async {
  var local = [...selected];
  var query = '';
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setLocal) {
          final ink = isDark ? Colors.white : const Color(0xFF0F172A);
          final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
          final filtered = kNgmyUsStates
              .where((s) => query.trim().isEmpty || s.toLowerCase().contains(query.trim().toLowerCase()))
              .toList();
          return SafeArea(
            child: Container(
              height: MediaQuery.sizeOf(ctx).height * 0.78,
              margin: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: isDark ? const Color(0xFF0B1220) : Colors.white,
                borderRadius: BorderRadius.circular(24),
              ),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 14, 8, 8),
                    child: Row(
                      children: [
                        Expanded(child: Text('Select states', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 18))),
                        TextButton(
                          onPressed: () async {
                            local = [];
                            await onChanged(local);
                            if (ctx.mounted) setLocal(() {});
                          },
                          child: const Text('All states'),
                        ),
                        IconButton(onPressed: () => Navigator.pop(ctx), icon: Icon(Icons.close_rounded, color: muted)),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: TextField(
                      autofocus: true,
                      onChanged: (v) => setLocal(() => query = v),
                      decoration: InputDecoration(
                        hintText: 'Search state…',
                        prefixIcon: const Icon(Icons.search_rounded),
                        filled: true,
                        fillColor: isDark ? const Color(0xFF151C2C) : const Color(0xFFF1F5F9),
                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Expanded(
                    child: ListView.builder(
                      itemCount: filtered.length,
                      itemBuilder: (_, i) {
                        final st = filtered[i];
                        final on = local.any((s) => s.toLowerCase() == st.toLowerCase());
                        return CheckboxListTile(
                          value: on,
                          activeColor: const Color(0xFF059669),
                          title: Text(st, style: TextStyle(color: ink, fontWeight: FontWeight.w600)),
                          onChanged: (v) async {
                            if (v == true) {
                              local = [...local, st];
                            } else {
                              local = local.where((s) => s.toLowerCase() != st.toLowerCase()).toList();
                            }
                            await onChanged(local);
                            setLocal(() {});
                          },
                        );
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
                    child: FilledButton(
                      onPressed: () => Navigator.pop(ctx),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF059669),
                        minimumSize: const Size(double.infinity, 48),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                      ),
                      child: Text(
                        local.isEmpty ? 'Use all states' : 'Done (${local.length})',
                        style: const TextStyle(fontWeight: FontWeight.w800),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          );
        },
      );
    },
  );
}

Future<bool?> _promptDripVotes(
  BuildContext context, {
  required bool isDark,
  required NgmyCivicVotingCandidate candidate,
}) async {
  final countC = TextEditingController(text: candidate.dripTotal > 0 ? '${candidate.dripTotal}' : '5');
  var minutes = candidate.dripDurationMinutes > 0 ? candidate.dripDurationMinutes : 60;
  final presets = <(String, int)>[
    ('5 min', 5),
    ('10 min', 10),
    ('2 hours', 120),
    ('5 hours', 300),
    ('10 hours', 600),
  ];

  final ok = await showDialog<bool>(
    context: context,
    barrierDismissible: false,
    builder: (ctx) {
      return StatefulBuilder(
        builder: (ctx, setLocal) {
          return AlertDialog(
            backgroundColor: isDark ? const Color(0xFF151C2C) : Colors.white,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
            title: Text('Drip votes · ${candidate.name}'),
            content: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                TextField(
                  controller: countC,
                  keyboardType: TextInputType.number,
                  decoration: const InputDecoration(labelText: 'Votes to add', border: OutlineInputBorder()),
                ),
                const SizedBox(height: 12),
                Wrap(
                  spacing: 6,
                  children: presets.map((p) {
                    final selected = minutes == p.$2;
                    return ChoiceChip(
                      label: Text(p.$1),
                      selected: selected,
                      onSelected: (_) => setLocal(() => minutes = p.$2),
                    );
                  }).toList(),
                ),
              ],
            ),
            actions: [
              TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
              FilledButton(
                onPressed: () => Navigator.pop(ctx, true),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFF059669)),
                child: const Text('Start drip'),
              ),
            ],
          );
        },
      );
    },
  );
  if (ok != true) {
    countC.dispose();
    return false;
  }
  final count = int.tryParse(countC.text.trim()) ?? 0;
  countC.dispose();
  if (count <= 0 || minutes <= 0) return false;
  candidate.dripTotal = count;
  candidate.dripDurationMinutes = minutes;
  candidate.dripStartedAt = DateTime.now().toUtc().toIso8601String();
  return true;
}
