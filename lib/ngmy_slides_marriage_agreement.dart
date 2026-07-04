import 'package:flutter/material.dart';

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

const _ink = 0xFF1A1A1A;
const _gold = 0xFF9A7B4F;
const _paper = 0xFFFFFBF5;

String ngmyMarriageWatermarkForState(String state) => "EMO YA M'BONDO ${state.toUpperCase()}";

String _formatMarriageDate(DateTime d) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return '${months[d.month - 1]} ${d.day}, ${d.year}';
}

NgmySlideElement _lockedText(
  String text, {
  required double x,
  required double y,
  required double w,
  required double h,
  double fontSize = 14,
  FontWeight fontWeight = FontWeight.w600,
  TextAlign align = TextAlign.left,
  TextDecoration decoration = TextDecoration.none,
  String tag = '',
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.text,
    x: x,
    y: y,
    w: w,
    h: h,
    text: text,
    fontSize: fontSize,
    fontWeight: fontWeight,
    decoration: decoration,
    color: _ink,
    align: align,
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
  );
}

NgmySlideElement _lockedShape({
  required NgmySlideShapeKind shape,
  required double x,
  required double y,
  required double w,
  required double h,
  int fillColor = 0x00000000,
  int strokeColor = _gold,
  double strokeWidth = 1.5,
  String tag = '',
}) {
  return NgmySlideElement(
    id: NgmySlidesTemplates.newId(),
    type: NgmySlideElementType.shape,
    shape: shape,
    x: x,
    y: y,
    w: w,
    h: h,
    fillColor: fillColor,
    strokeColor: strokeColor,
    strokeWidth: strokeWidth,
    fileName: tag.isEmpty ? kMarriageLocked : '${kMarriageLocked}_$tag',
  );
}

/// Box outline (locked) + editable name field inside.
List<NgmySlideElement> _nameBox(String fieldKey, double x, double y, double w, {double h = 0.052}) {
  return [
    _lockedShape(
      shape: NgmySlideShapeKind.rectangle,
      x: x,
      y: y,
      w: w,
      h: h,
      strokeColor: 0xFF94A3B8,
      strokeWidth: 1,
      tag: 'box_$fieldKey',
    ),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: x + 0.004,
      y: y + 0.006,
      w: w - 0.008,
      h: h - 0.012,
      text: '',
      fontSize: 14,
      fontWeight: FontWeight.w700,
      color: _ink,
      align: TextAlign.center,
      fileName: '$kMarriageFieldPrefix$fieldKey:${w.toStringAsFixed(3)}',
    ),
  ];
}

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

/// Builds a compact landscape marriage certificate matching the traditional form layout.
NgmySlideDeck ngmyBuildMarriageAgreementDeck({required String state}) {
  final today = _formatMarriageDate(DateTime.now());
  final watermark = ngmyMarriageWatermarkForState(state);
  const paperTop = 0.1;
  const paperH = 0.68;

  final elements = <NgmySlideElement>[
    // Paper frame (locked) — shorter certificate, centered
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.06, y: paperTop, w: 0.88, h: paperH, strokeColor: _gold, strokeWidth: 2.5),
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: 0.068, y: paperTop + 0.008, w: 0.864, h: paperH - 0.016, strokeColor: 0xFFD4C4A8, strokeWidth: 0.8),

    // Watermark — subtle gold at bottom of paper
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: 0.08,
      y: paperTop + paperH - 0.1,
      w: 0.84,
      h: 0.08,
      text: watermark,
      fontSize: 17,
      fontWeight: FontWeight.w800,
      color: 0xFFBCAAA0,
      align: TextAlign.center,
      fileName: '${kMarriageLocked}_watermark',
    ),

    // Date
    _lockedText('DATE: $today', x: 0.58, y: paperTop + 0.02, w: 0.34, h: 0.038, fontSize: 13, fontWeight: FontWeight.w700, align: TextAlign.right, tag: 'date'),

    // Title — large, underlined
    _lockedText(
      'HATI YA KUHOWESHA',
      x: 0.1,
      y: paperTop + 0.055,
      w: 0.8,
      h: 0.06,
      fontSize: 30,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      decoration: TextDecoration.underline,
    ),

    // Body line 1
    _lockedText('Mimi', x: 0.08, y: paperTop + 0.13, w: 0.055, h: 0.038, fontSize: 15),
    ..._nameBox('father_name', 0.135, paperTop + 0.125, 0.16, h: 0.044),
    _lockedText('jina la', x: 0.30, y: paperTop + 0.13, w: 0.075, h: 0.038, fontSize: 15),
    ..._nameBox('father_clan', 0.378, paperTop + 0.125, 0.12, h: 0.044),
    _lockedText(', ya', x: 0.505, y: paperTop + 0.13, w: 0.045, h: 0.038, fontSize: 15),
    ..._nameBox('father_place', 0.552, paperTop + 0.125, 0.14, h: 0.044),
    _lockedText('.', x: 0.698, y: paperTop + 0.13, w: 0.02, h: 0.038, fontSize: 15),

    // Body line 2
    _lockedText('Nimehowesha binti wangu aitwaye,', x: 0.08, y: paperTop + 0.185, w: 0.38, h: 0.038, fontSize: 15),
    ..._nameBox('daughter_name', 0.46, paperTop + 0.18, 0.42, h: 0.044),

    // Body line 3
    _lockedText('na ndugu', x: 0.08, y: paperTop + 0.24, w: 0.095, h: 0.038, fontSize: 15),
    ..._nameBox('groom_name', 0.175, paperTop + 0.235, 0.17, h: 0.044),
    _lockedText('wa jina la', x: 0.352, y: paperTop + 0.24, w: 0.095, h: 0.038, fontSize: 15),
    ..._nameBox('groom_clan', 0.45, paperTop + 0.235, 0.13, h: 0.044),
    _lockedText(', Nyumba ya', x: 0.588, y: paperTop + 0.24, w: 0.115, h: 0.038, fontSize: 15),
    ..._nameBox('house_name', 0.705, paperTop + 0.235, 0.15, h: 0.044),

    // Body line 4
    _lockedText('Kijana wa', x: 0.08, y: paperTop + 0.295, w: 0.1, h: 0.038, fontSize: 15),
    ..._nameBox('groom_origin', 0.182, paperTop + 0.29, 0.26, h: 0.044),

    // Dowry
    _lockedText(
      'Nimepoyacash',
      x: 0.08,
      y: paperTop + 0.35,
      w: 0.84,
      h: 0.042,
      fontSize: 17,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      decoration: TextDecoration.underline,
    ),
    _lockedText('KICHWA CHA MTU: Dollar', x: 0.08, y: paperTop + 0.395, w: 0.24, h: 0.036, fontSize: 14, fontWeight: FontWeight.w800),
    ..._nameBox('dowry_amount', 0.32, paperTop + 0.39, 0.2, h: 0.042),
    _lockedText('•', x: 0.1, y: paperTop + 0.44, w: 0.02, h: 0.032, fontSize: 15),
    ..._nameBox('dowry_item_1', 0.125, paperTop + 0.435, 0.32, h: 0.04),
    _lockedText('•', x: 0.1, y: paperTop + 0.475, w: 0.02, h: 0.032, fontSize: 15),
    ..._nameBox('dowry_item_2', 0.125, paperTop + 0.47, 0.32, h: 0.04),
    _lockedText('•', x: 0.1, y: paperTop + 0.51, w: 0.02, h: 0.032, fontSize: 15),
    ..._nameBox('dowry_item_3', 0.125, paperTop + 0.505, 0.32, h: 0.04),

    // Witnesses header
    _lockedText('MASHAIDI', x: 0.42, y: paperTop + 0.545, w: 0.16, h: 0.032, fontSize: 14, fontWeight: FontWeight.w900, align: TextAlign.center),
    _lockedText('UPANDE WA MKE', x: 0.08, y: paperTop + 0.545, w: 0.28, h: 0.032, fontSize: 13, fontWeight: FontWeight.w800, align: TextAlign.center, decoration: TextDecoration.underline),
    _lockedText('UPANDE WA MME', x: 0.64, y: paperTop + 0.545, w: 0.28, h: 0.032, fontSize: 13, fontWeight: FontWeight.w800, align: TextAlign.center, decoration: TextDecoration.underline),

    // Witness rows — name box + signature line only
    for (var i = 0; i < 3; i++) ...[
      _lockedText('${i + 1}.', x: 0.08, y: paperTop + 0.58 + i * 0.048, w: 0.028, h: 0.032, fontSize: 12, fontWeight: FontWeight.w700),
      ..._nameBox('wife_witness_${i + 1}', 0.11, paperTop + 0.576 + i * 0.048, 0.2, h: 0.038),
      _lockedShape(shape: NgmySlideShapeKind.line, x: 0.11, y: paperTop + 0.612 + i * 0.048, w: 0.2, h: 0.002, strokeColor: _ink, strokeWidth: 1, tag: 'wife_line_$i'),
      NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        shape: NgmySlideShapeKind.rectangle,
        x: 0.11,
        y: paperTop + 0.598 + i * 0.048,
        w: 0.2,
        h: 0.024,
        fillColor: 0x00000000,
        strokeColor: 0x00000000,
        fileName: '${kMarriageSignPrefix}wife_${i + 1}',
      ),
      _lockedText('${i + 1}.', x: 0.64, y: paperTop + 0.58 + i * 0.048, w: 0.028, h: 0.032, fontSize: 12, fontWeight: FontWeight.w700),
      ..._nameBox('husband_witness_${i + 1}', 0.67, paperTop + 0.576 + i * 0.048, 0.2, h: 0.038),
      _lockedShape(shape: NgmySlideShapeKind.line, x: 0.67, y: paperTop + 0.612 + i * 0.048, w: 0.2, h: 0.002, strokeColor: _ink, strokeWidth: 1, tag: 'husband_line_$i'),
      NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        shape: NgmySlideShapeKind.rectangle,
        x: 0.67,
        y: paperTop + 0.598 + i * 0.048,
        w: 0.2,
        h: 0.024,
        fillColor: 0x00000000,
        strokeColor: 0x00000000,
        fileName: '${kMarriageSignPrefix}husband_${i + 1}',
      ),
    ],
  ];

  final slide = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Marriage Certificate',
    layout: NgmySlideLayout.blank,
    background: _paper,
    elements: elements,
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Kuhowesha — $state',
    themeId: 'marriage_certificate',
    aspectRatio: NgmySlideAspectRatio.landscape169,
    deckKind: kNgmyMarriageDeckKind,
    marriageState: state,
    slides: [slide],
  );
}

void ngmyUpdateMarriageWatermark(NgmySlideDeck deck, String state) {
  deck.marriageState = state;
  for (final slide in deck.slides) {
    for (final el in slide.elements) {
      if (el.fileName == '${kMarriageLocked}_watermark') {
        el.text = ngmyMarriageWatermarkForState(state);
      }
    }
  }
  deck.name = 'Hati ya Kuhowesha — $state';
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
                label: const Text('New certificate (pick state)'),
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
  final state = await showNgmyMarriageStatePicker(context);
  if (state == null || !context.mounted) return;
  openDraftEditor(ngmyBuildMarriageAgreementDeck(state: state));
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
