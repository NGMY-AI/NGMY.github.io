import 'package:flutter/material.dart';

import 'ngmy_civic_voting.dart';
import 'ngmy_state_picker.dart';

Future<void> showNgmyCivicVotingAdminSheet(BuildContext context) async {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  var voting = (await NgmyCivicVotingStore.load(forceCloud: true)).copy();

  if (!context.mounted) return;
  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (sheetCtx) {
      return StatefulBuilder(
        builder: (sheetCtx, setSheet) {
          final bg = isDark ? const Color(0xFF121212) : Colors.white;
          final ink = isDark ? Colors.white : const Color(0xFF0F172A);
          final muted = isDark ? Colors.white60 : Colors.black54;

          Future<void> persist() async {
            await NgmyCivicVotingStore.save(voting);
            if (sheetCtx.mounted) setSheet(() {});
          }

          return SafeArea(
            child: Align(
              alignment: Alignment.bottomCenter,
              child: Container(
                constraints: BoxConstraints(
                  maxWidth: 560,
                  maxHeight: MediaQuery.sizeOf(sheetCtx).height * 0.92,
                ),
                margin: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: bg,
                  borderRadius: BorderRadius.circular(26),
                  border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                ),
                child: Column(
                  children: [
                    const SizedBox(height: 10),
                    Container(width: 40, height: 4, decoration: BoxDecoration(color: muted.withValues(alpha: 0.35), borderRadius: BorderRadius.circular(99))),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 12, 8, 8),
                      child: Row(
                        children: [
                          Expanded(child: Text('Civic Voting', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 20))),
                          IconButton(onPressed: () => Navigator.pop(sheetCtx), icon: Icon(Icons.close_rounded, color: muted)),
                        ],
                      ),
                    ),
                    Expanded(
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(16, 0, 16, 20),
                        children: [
                          SwitchListTile(
                            contentPadding: EdgeInsets.zero,
                            activeThumbColor: const Color(0xFF34D399),
                            title: Text('Voting open', style: TextStyle(color: ink, fontWeight: FontWeight.w800)),
                            subtitle: Text(
                              voting.open ? 'Users can vote now' : 'Users see Coming soon',
                              style: TextStyle(color: muted, fontSize: 12),
                            ),
                            value: voting.open,
                            onChanged: (v) async {
                              voting.open = v;
                              await persist();
                            },
                          ),
                          const SizedBox(height: 8),
                          _field(
                            label: 'Title',
                            value: voting.title,
                            ink: ink,
                            onChanged: (v) => voting.title = v,
                            onSubmit: persist,
                          ),
                          const SizedBox(height: 10),
                          Row(
                            children: [
                              Expanded(
                                child: _field(
                                  label: 'Year',
                                  value: voting.yearLabel,
                                  ink: ink,
                                  onChanged: (v) => voting.yearLabel = v,
                                  onSubmit: persist,
                                ),
                              ),
                              const SizedBox(width: 10),
                              Expanded(
                                child: _field(
                                  label: 'Date line',
                                  value: voting.dateLabel,
                                  ink: ink,
                                  onChanged: (v) => voting.dateLabel = v,
                                  onSubmit: persist,
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 14),
                          Text('Allowed states', style: TextStyle(color: ink, fontWeight: FontWeight.w800)),
                          Text('Leave empty for every state', style: TextStyle(color: muted, fontSize: 11)),
                          const SizedBox(height: 8),
                          Wrap(
                            spacing: 6,
                            runSpacing: 6,
                            children: [
                              FilterChip(
                                label: const Text('All states'),
                                selected: voting.allowedStates.isEmpty,
                                onSelected: (_) async {
                                  voting.allowedStates = [];
                                  await persist();
                                },
                              ),
                              ...kNgmyUsStates.map((st) {
                                final selected = voting.allowedStates.any((s) => s.toLowerCase() == st.toLowerCase());
                                return FilterChip(
                                  label: Text(st, style: const TextStyle(fontSize: 11)),
                                  selected: selected,
                                  onSelected: (on) async {
                                    if (on) {
                                      voting.allowedStates = [...voting.allowedStates, st];
                                    } else {
                                      voting.allowedStates = voting.allowedStates
                                          .where((s) => s.toLowerCase() != st.toLowerCase())
                                          .toList();
                                    }
                                    await persist();
                                  },
                                );
                              }),
                            ],
                          ),
                          const SizedBox(height: 18),
                          Row(
                            children: [
                              Expanded(child: Text('Candidates', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 16))),
                              TextButton.icon(
                                onPressed: () async {
                                  final id = 'cand_${DateTime.now().microsecondsSinceEpoch}';
                                  voting.candidates.add(NgmyCivicVotingCandidate(id: id, name: 'New candidate'));
                                  await persist();
                                },
                                icon: const Icon(Icons.person_add_alt_1_rounded),
                                label: const Text('Add'),
                              ),
                            ],
                          ),
                          const SizedBox(height: 8),
                          ...voting.candidates.map((c) {
                            final votes = voting.votesFor(c.id);
                            return Container(
                              margin: const EdgeInsets.only(bottom: 10),
                              padding: const EdgeInsets.all(12),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(16),
                                border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
                                color: isDark ? const Color(0xFF1A1A1A) : const Color(0xFFF8FAFC),
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
                                          radius: 26,
                                          backgroundColor: const Color(0xFF334155),
                                          backgroundImage: ngmyCivicVotingPhotoProvider(c.photoUrl),
                                          child: ngmyCivicVotingPhotoProvider(c.photoUrl) == null
                                              ? const Icon(Icons.add_a_photo_rounded, color: Colors.white70, size: 18)
                                              : null,
                                        ),
                                      ),
                                      const SizedBox(width: 10),
                                      Expanded(
                                        child: TextFormField(
                                          initialValue: c.name,
                                          style: TextStyle(color: ink, fontWeight: FontWeight.w700),
                                          decoration: const InputDecoration(
                                            isDense: true,
                                            border: OutlineInputBorder(),
                                            labelText: 'Name',
                                          ),
                                          onChanged: (v) => c.name = v,
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
                                  const SizedBox(height: 8),
                                  Text('$votes live votes', style: TextStyle(color: const Color(0xFF34D399), fontWeight: FontWeight.w800)),
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
                              backgroundColor: const Color(0xFF059669),
                              padding: const EdgeInsets.symmetric(vertical: 14),
                            ),
                            child: const Text('Save voting', style: TextStyle(fontWeight: FontWeight.w800)),
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

Widget _field({
  required String label,
  required String value,
  required Color ink,
  required ValueChanged<String> onChanged,
  required Future<void> Function() onSubmit,
}) {
  return TextFormField(
    initialValue: value,
    style: TextStyle(color: ink, fontWeight: FontWeight.w600),
    decoration: InputDecoration(
      labelText: label,
      border: const OutlineInputBorder(),
      isDense: true,
    ),
    onChanged: onChanged,
    onFieldSubmitted: (_) => onSubmit(),
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
            backgroundColor: isDark ? const Color(0xFF171717) : Colors.white,
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
