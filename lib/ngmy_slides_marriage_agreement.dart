import 'package:flutter/material.dart';

import 'ngmy_marriage_agreement_templates.dart';
import 'ngmy_slides_models.dart';

const String kNgmyMarriageDeckKind = 'marriage_agreement';
const String kMarriageLocked = 'marriage_locked';
const String kMarriageFieldPrefix = 'marriage_field_';
const String kMarriageSignPrefix = 'marriage_sign_';

bool ngmyMarriageElementIsLocked(NgmySlideElement e) =>
    e.fileName == kMarriageLocked || e.fileName.startsWith('${kMarriageLocked}_');

bool ngmyMarriageElementIsField(NgmySlideElement e) => e.fileName.startsWith(kMarriageFieldPrefix);

bool ngmyMarriageElementIsSignZone(NgmySlideElement e) => e.fileName.startsWith(kMarriageSignPrefix);

const List<String> kNgmyMarriageUsStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  'District of Columbia',
];

String ngmyMarriageWatermarkForState(String state) => "EMO YA M'BONDO ${state.toUpperCase()}";

/// Pack elements on the same row closer after a name field shrinks.
void ngmyMarriagePackRow(NgmySlide slide, double anchorY) {
  const yTol = 0.03;
  final items = <NgmySlideElement>[];
  for (final e in slide.elements) {
    if (e.fileName.startsWith('${kMarriageLocked}_box_')) continue;
    final cy = e.y + e.h * 0.5;
    if ((cy - anchorY).abs() < yTol) items.add(e);
  }
  if (items.length < 2) return;
  items.sort((a, b) => a.x.compareTo(b.x));
  var x = items.first.x;
  for (final e in items) {
    final dx = x - e.x;
    if (dx.abs() > 0.0001) {
      e.x = x;
      if (ngmyMarriageElementIsField(e)) {
        final key = e.fileName.replaceFirst(kMarriageFieldPrefix, '').split(':').first;
        for (final b in slide.elements) {
          if (b.fileName == '${kMarriageLocked}_box_$key') b.x += dx;
        }
      }
    }
    x += e.w + 0.006;
  }
}

/// Shrink editable field width when user types a short name.
void ngmyMarriageAutoFitField(NgmySlideElement e, String text) {
  if (!ngmyMarriageElementIsField(e)) return;
  final parts = e.fileName.split(':');
  final maxW = parts.length > 1 ? (double.tryParse(parts.last) ?? e.w) : e.w;
  final t = text.trim();
  if (t.isEmpty) {
    e.w = maxW;
    return;
  }
  e.w = (t.length * 0.0115 + 0.028).clamp(0.06, maxW);
}

void ngmyUpdateMarriageWatermark(NgmySlideDeck deck, String state) {
  ngmyUpdateMarriageDeckMeta(deck, state: state);
}

Future<String?> showNgmyMarriageStatePicker(BuildContext context) async {
  return showModalBottomSheet<String>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => const _NgmyMarriageStatePickerSheet(),
  );
}

Future<void> launchNgmyMarriageAgreement({
  required BuildContext context,
  required List<NgmySlideDeck> savedDecks,
  required void Function(NgmySlideDeck deck) openDraftEditor,
  required void Function(NgmySlideDeck deck) openSavedDeck,
}) async {
  final existing = savedDecks.where((d) => d.isMarriageAgreement).toList();

  if (existing.isNotEmpty) {
    final action = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF1C1917),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(24))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 24),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 44,
                  height: 4,
                  decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              const Text('Marriage Agreement', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 8),
              Text(
                'You have ${existing.length} saved certificate${existing.length == 1 ? '' : 's'}.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 13),
              ),
              const SizedBox(height: 16),
              FilledButton.icon(
                onPressed: () => Navigator.pop(ctx, 'continue'),
                icon: const Icon(Icons.edit_document),
                label: Text('Continue "${existing.first.name}"'),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFB8860B),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
              const SizedBox(height: 10),
              OutlinedButton.icon(
                onPressed: () => Navigator.pop(ctx, 'new'),
                icon: const Icon(Icons.add_rounded),
                label: const Text('New agreement (pick template)'),
                style: OutlinedButton.styleFrom(
                  foregroundColor: Colors.white70,
                  side: const BorderSide(color: Colors.white24),
                  padding: const EdgeInsets.symmetric(vertical: 14),
                ),
              ),
            ],
          ),
        ),
      ),
    );

    if (action == 'continue') {
      openSavedDeck(existing.first.copy());
      return;
    }
    if (action != 'new') return;
  }

  if (!context.mounted) return;
  final templateId = await showNgmyMarriageTemplatePicker(context);
  if (templateId == null || !context.mounted) return;
  final state = await showNgmyMarriageStatePicker(context);
  if (state == null || !context.mounted) return;
  openDraftEditor(ngmyBuildMarriageAgreementDeck(templateId: templateId, state: state));
}

class _NgmyMarriageStatePickerSheet extends StatefulWidget {
  const _NgmyMarriageStatePickerSheet();

  @override
  State<_NgmyMarriageStatePickerSheet> createState() => _NgmyMarriageStatePickerSheetState();
}

class _NgmyMarriageStatePickerSheetState extends State<_NgmyMarriageStatePickerSheet> {
  final _search = TextEditingController();
  List<String> _filtered = kNgmyMarriageUsStates;

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  void _onSearch(String q) {
    final s = q.trim().toLowerCase();
    setState(() {
      _filtered = s.isEmpty ? kNgmyMarriageUsStates : kNgmyMarriageUsStates.where((st) => st.toLowerCase().contains(s)).toList();
    });
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return DraggableScrollableSheet(
      initialChildSize: 0.88,
      minChildSize: 0.45,
      maxChildSize: 0.95,
      builder: (_, scrollCtrl) => Container(
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF111827) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
        ),
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(20, 14, 20, 10),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      decoration: BoxDecoration(color: Colors.grey.shade400, borderRadius: BorderRadius.circular(2)),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Container(
                        padding: const EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(colors: [Color(0xFFB8860B), Color(0xFF8B6914)]),
                          borderRadius: BorderRadius.circular(14),
                        ),
                        child: const Icon(Icons.favorite_rounded, color: Colors.white, size: 22),
                      ),
                      const SizedBox(width: 12),
                      const Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Choose your U.S. state', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
                            Text('Watermark: EMO YA M\'BONDO [STATE]', style: TextStyle(fontSize: 11, color: Color(0xFF64748B))),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 14),
                  TextField(
                    controller: _search,
                    onChanged: _onSearch,
                    decoration: InputDecoration(
                      hintText: 'Search states...',
                      prefixIcon: const Icon(Icons.search_rounded, size: 20),
                      filled: true,
                      fillColor: isDark ? const Color(0xFF1F2937) : const Color(0xFFF1F5F9),
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                    ),
                  ),
                ],
              ),
            ),
            Expanded(
              child: ListView.builder(
                controller: scrollCtrl,
                padding: const EdgeInsets.fromLTRB(12, 0, 12, 24),
                itemCount: _filtered.length,
                itemBuilder: (_, i) {
                  final st = _filtered[i];
                  return ListTile(
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                    leading: CircleAvatar(
                      backgroundColor: const Color(0xFFB8860B).withValues(alpha: 0.15),
                      child: Text(st.substring(0, 1), style: const TextStyle(fontWeight: FontWeight.w900, color: Color(0xFFB8860B), fontSize: 13)),
                    ),
                    title: Text(st, style: const TextStyle(fontWeight: FontWeight.w700)),
                    subtitle: Text(ngmyMarriageWatermarkForState(st), style: const TextStyle(fontSize: 10)),
                    onTap: () => Navigator.pop(context, st),
                  );
                },
              ),
            ),
          ],
        ),
      ),
    );
  }
}
