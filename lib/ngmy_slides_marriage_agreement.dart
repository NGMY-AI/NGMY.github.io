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

const _ink = 0xFF1A1208;
const _congoBlue = 0xFF007FFF;
const _congoYellow = 0xFFF7D618;
const _congoRed = 0xFFCE1021;
const _congoGold = 0xFFC9A227;
const _paper = 0xFFFFF8E7;

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
  int color = _ink,
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
    color: color,
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
  int strokeColor = _congoGold,
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
      strokeColor: _congoBlue,
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

/// Builds a portrait 9:16 Congolese marriage certificate (Hati ya Kuhowesha).
NgmySlideDeck ngmyBuildMarriageAgreementDeck({required String state}) {
  final today = _formatMarriageDate(DateTime.now());
  final watermark = ngmyMarriageWatermarkForState(state);
  const px = 0.07;
  const pw = 0.86;
  const py = 0.02;
  const ph = 0.96;

  final elements = <NgmySlideElement>[
    // Congo tricolor accent bar
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py, w: pw / 3, h: 0.012, fillColor: _congoBlue, strokeColor: _congoBlue, strokeWidth: 0, tag: 'bar_blue'),
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: px + pw / 3, y: py, w: pw / 3, h: 0.012, fillColor: _congoYellow, strokeColor: _congoYellow, strokeWidth: 0, tag: 'bar_yellow'),
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 2 * pw / 3, y: py, w: pw / 3, h: 0.012, fillColor: _congoRed, strokeColor: _congoRed, strokeWidth: 0, tag: 'bar_red'),

    // Paper frame — Congolese blue & gold
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: px, y: py + 0.012, w: pw, h: ph - 0.012, strokeColor: _congoBlue, strokeWidth: 3),
    _lockedShape(shape: NgmySlideShapeKind.rectangle, x: px + 0.012, y: py + 0.024, w: pw - 0.024, h: ph - 0.036, strokeColor: _congoGold, strokeWidth: 1.5),

    // Date
    _lockedText('DATE: $today', x: px + 0.04, y: py + 0.04, w: pw - 0.08, h: 0.028, fontSize: 12, fontWeight: FontWeight.w700, align: TextAlign.right, tag: 'date'),

    // Title
    _lockedText(
      'HATI YA KUHOWESHA',
      x: px + 0.04,
      y: py + 0.07,
      w: pw - 0.08,
      h: 0.05,
      fontSize: 24,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      decoration: TextDecoration.underline,
    ),

    // Body — portrait flow, tight spacing
    _lockedText('Mimi', x: px + 0.05, y: py + 0.13, w: 0.08, h: 0.028, fontSize: 14),
    ..._nameBox('father_name', px + 0.13, py + 0.126, 0.34, h: 0.034),
    _lockedText('jina la', x: px + 0.05, y: py + 0.165, w: 0.14, h: 0.028, fontSize: 14),
    ..._nameBox('father_clan', px + 0.19, py + 0.161, 0.28, h: 0.034),
    _lockedText(', ya', x: px + 0.48, y: py + 0.165, w: 0.08, h: 0.028, fontSize: 14),
    ..._nameBox('father_place', px + 0.55, py + 0.161, 0.32, h: 0.034),

    _lockedText('Nimehowesha binti wangu aitwaye,', x: px + 0.05, y: py + 0.2, w: pw - 0.1, h: 0.028, fontSize: 14),
    ..._nameBox('daughter_name', px + 0.05, py + 0.228, pw - 0.1, h: 0.034),

    _lockedText('na ndugu', x: px + 0.05, y: py + 0.27, w: 0.16, h: 0.028, fontSize: 14),
    ..._nameBox('groom_name', px + 0.21, py + 0.266, 0.36, h: 0.034),
    _lockedText('wa jina la', x: px + 0.05, y: py + 0.305, w: 0.16, h: 0.028, fontSize: 14),
    ..._nameBox('groom_clan', px + 0.21, py + 0.301, 0.3, h: 0.034),
    _lockedText(', Nyumba ya', x: px + 0.05, y: py + 0.34, w: 0.22, h: 0.028, fontSize: 14),
    ..._nameBox('house_name', px + 0.27, py + 0.336, 0.6, h: 0.034),
    _lockedText('Kijana wa', x: px + 0.05, y: py + 0.375, w: 0.18, h: 0.028, fontSize: 14),
    ..._nameBox('groom_origin', px + 0.23, py + 0.371, 0.64, h: 0.034),

    // Dowry
    _lockedText(
      'Nimepoyacash',
      x: px + 0.05,
      y: py + 0.415,
      w: pw - 0.1,
      h: 0.032,
      fontSize: 16,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      decoration: TextDecoration.underline,
    ),
    _lockedText('KICHWA CHA MTU: Dollar', x: px + 0.05, y: py + 0.45, w: 0.5, h: 0.028, fontSize: 13, fontWeight: FontWeight.w800),
    ..._nameBox('dowry_amount', px + 0.52, py + 0.446, 0.38, h: 0.032),
    _lockedText('•', x: px + 0.06, y: py + 0.488, w: 0.03, h: 0.026, fontSize: 14),
    ..._nameBox('dowry_item_1', px + 0.1, py + 0.484, pw - 0.15, h: 0.03),
    _lockedText('•', x: px + 0.06, y: py + 0.518, w: 0.03, h: 0.026, fontSize: 14),
    ..._nameBox('dowry_item_2', px + 0.1, py + 0.514, pw - 0.15, h: 0.03),
    _lockedText('•', x: px + 0.06, y: py + 0.548, w: 0.03, h: 0.026, fontSize: 14),
    ..._nameBox('dowry_item_3', px + 0.1, py + 0.544, pw - 0.15, h: 0.03),

    // Witnesses
    _lockedText('MASHAIDI', x: px + 0.3, y: py + 0.585, w: 0.4, h: 0.028, fontSize: 13, fontWeight: FontWeight.w900, align: TextAlign.center),
    _lockedText('UPANDE WA MKE', x: px + 0.05, y: py + 0.615, w: 0.4, h: 0.026, fontSize: 12, fontWeight: FontWeight.w800, align: TextAlign.center, decoration: TextDecoration.underline),
    _lockedText('UPANDE WA MME', x: px + 0.5, y: py + 0.615, w: 0.4, h: 0.026, fontSize: 12, fontWeight: FontWeight.w800, align: TextAlign.center, decoration: TextDecoration.underline),

    for (var i = 0; i < 3; i++) ...[
      _lockedText('${i + 1}.', x: px + 0.05, y: py + 0.645 + i * 0.038, w: 0.04, h: 0.026, fontSize: 11, fontWeight: FontWeight.w700),
      ..._nameBox('wife_witness_${i + 1}', px + 0.09, py + 0.642 + i * 0.038, 0.34, h: 0.03),
      _lockedShape(shape: NgmySlideShapeKind.line, x: px + 0.09, y: py + 0.672 + i * 0.038, w: 0.34, h: 0.002, strokeColor: _ink, strokeWidth: 1, tag: 'wife_line_$i'),
      NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        shape: NgmySlideShapeKind.rectangle,
        x: px + 0.09,
        y: py + 0.66 + i * 0.038,
        w: 0.34,
        h: 0.02,
        fillColor: 0x00000000,
        strokeColor: 0x00000000,
        fileName: '${kMarriageSignPrefix}wife_${i + 1}',
      ),
      _lockedText('${i + 1}.', x: px + 0.5, y: py + 0.645 + i * 0.038, w: 0.04, h: 0.026, fontSize: 11, fontWeight: FontWeight.w700),
      ..._nameBox('husband_witness_${i + 1}', px + 0.54, py + 0.642 + i * 0.038, 0.34, h: 0.03),
      _lockedShape(shape: NgmySlideShapeKind.line, x: px + 0.54, y: py + 0.672 + i * 0.038, w: 0.34, h: 0.002, strokeColor: _ink, strokeWidth: 1, tag: 'husband_line_$i'),
      NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        shape: NgmySlideShapeKind.rectangle,
        x: px + 0.54,
        y: py + 0.66 + i * 0.038,
        w: 0.34,
        h: 0.02,
        fillColor: 0x00000000,
        strokeColor: 0x00000000,
        fileName: '${kMarriageSignPrefix}husband_${i + 1}',
      ),
    ],

    // Congo official stamp
    _lockedShape(shape: NgmySlideShapeKind.circle, x: 0.32, y: py + 0.76, w: 0.36, h: 0.065, strokeColor: _congoBlue, strokeWidth: 2.5, tag: 'stamp_outer'),
    _lockedShape(shape: NgmySlideShapeKind.circle, x: 0.34, y: py + 0.768, w: 0.32, h: 0.058, strokeColor: _congoGold, strokeWidth: 1.2, tag: 'stamp_inner'),
    _lockedText(
      'RÉPUBLIQUE DÉMOCRATIQUE',
      x: 0.28,
      y: py + 0.775,
      w: 0.44,
      h: 0.02,
      fontSize: 7,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      tag: 'stamp_line1',
    ),
    _lockedText(
      'DU CONGO',
      x: 0.32,
      y: py + 0.793,
      w: 0.36,
      h: 0.02,
      fontSize: 9,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      tag: 'stamp_line2',
    ),
    _lockedText('★', x: 0.46, y: py + 0.805, w: 0.08, h: 0.02, fontSize: 14, fontWeight: FontWeight.w900, color: _congoRed, align: TextAlign.center, tag: 'stamp_star'),

    // State watermark
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.text,
      x: px + 0.04,
      y: py + ph - 0.1,
      w: pw - 0.08,
      h: 0.06,
      text: watermark,
      fontSize: 15,
      fontWeight: FontWeight.w800,
      color: _congoBlue,
      align: TextAlign.center,
      fileName: '${kMarriageLocked}_watermark',
    ),
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
    aspectRatio: NgmySlideAspectRatio.portrait916,
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
