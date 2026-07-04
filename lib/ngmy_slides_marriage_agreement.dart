import 'package:flutter/material.dart';

import 'ngmy_slides_models.dart';

const String kNgmyMarriageDeckKind = 'marriage_agreement';

const List<String> kNgmyMarriageUsStates = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland',
  'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  'District of Columbia',
];

const _ink = 0xFF1C1917;
const _gold = 0xFFB8860B;
const _goldDark = 0xFF8B6914;
const _parchment = 0xFFFDF6E8;
const _parchmentDeep = 0xFFF3E4C8;
const _congoBlue = 0xFF007FFF;
const _congoRed = 0xFFCE1126;
const _congoYellow = 0xFFF7D618;

String ngmyMarriageWatermarkForState(String state) => "EMO YA M'BONDO ${state.toUpperCase()}";

String _formatMarriageDate(DateTime d) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  return '${months[d.month - 1]} ${d.day}, ${d.year}';
}

NgmySlideElement _marriageText(
  String text, {
  required double x,
  required double y,
  required double w,
  required double h,
  double fontSize = 10.5,
  FontWeight fontWeight = FontWeight.w500,
  TextAlign align = TextAlign.left,
  String fileName = '',
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
    color: color,
    align: align,
    fileName: fileName,
  );
}

NgmySlideElement _marriageField(String placeholder, double x, double y, double w, {double h = 0.028, String fileName = ''}) {
  return _marriageText(
    placeholder,
    x: x,
    y: y,
    w: w,
    h: h,
    fontSize: 10,
    fontWeight: FontWeight.w600,
    fileName: fileName,
    color: 0xFF334155,
  );
}

/// Builds a portrait marriage certificate deck editable in NGMY Slides.
NgmySlideDeck ngmyBuildMarriageAgreementDeck({required String state}) {
  final today = _formatMarriageDate(DateTime.now());
  final watermark = ngmyMarriageWatermarkForState(state);

  final elements = <NgmySlideElement>[
    // Outer gold frame
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: 0.04,
      y: 0.02,
      w: 0.92,
      h: 0.96,
      fillColor: 0x00000000,
      strokeColor: _gold,
      strokeWidth: 3,
    ),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.rectangle,
      x: 0.055,
      y: 0.032,
      w: 0.89,
      h: 0.936,
      fillColor: 0x00000000,
      strokeColor: _goldDark,
      strokeWidth: 1.2,
    ),
    // Watermark
    _marriageText(
      watermark,
      x: 0.02,
      y: 0.88,
      w: 0.96,
      h: 0.1,
      fontSize: 22,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      fileName: 'marriage_watermark',
      color: 0x281C1917,
    ),
    // Date (auto)
    _marriageText('DATE: $today', x: 0.52, y: 0.045, w: 0.42, h: 0.03, fontSize: 9, fontWeight: FontWeight.w700, align: TextAlign.right, fileName: 'marriage_date'),
    // Title
    _marriageText('HATI YA NDOA', x: 0.08, y: 0.07, w: 0.84, h: 0.045, fontSize: 18, fontWeight: FontWeight.w900, align: TextAlign.center),
    _marriageText('(Marriage Agreement Certificate)', x: 0.08, y: 0.105, w: 0.84, h: 0.028, fontSize: 9, fontWeight: FontWeight.w600, align: TextAlign.center, color: 0xFF64748B),
    // Body — corrected Swahili
    _marriageText('Mimi', x: 0.07, y: 0.14, w: 0.08, h: 0.025, fontSize: 10),
    _marriageField('Jina la baba...', 0.15, 0.138, 0.28, fileName: 'father_name'),
    _marriageText('jina la', x: 0.44, y: 0.14, w: 0.12, h: 0.025, fontSize: 10),
    _marriageField('Ukoo...', 0.55, 0.138, 0.18, fileName: 'father_clan'),
    _marriageText(', ya', x: 0.74, y: 0.14, w: 0.06, h: 0.025, fontSize: 10),
    _marriageField('Mahali...', 0.8, 0.138, 0.13, fileName: 'father_place'),
    _marriageText('nimeoza binti wangu aitwaye', x: 0.07, y: 0.168, w: 0.86, h: 0.025, fontSize: 10),
    _marriageField('Jina la binti...', 0.07, 0.192, 0.86, fileName: 'daughter_name'),
    _marriageText('na ndugu', x: 0.07, y: 0.222, w: 0.14, h: 0.025, fontSize: 10),
    _marriageField('Jina la mume...', 0.2, 0.22, 0.32, fileName: 'groom_name'),
    _marriageText('wa jina la', x: 0.53, y: 0.222, w: 0.14, h: 0.025, fontSize: 10),
    _marriageField('Ukoo wa mume...', 0.66, 0.22, 0.27, fileName: 'groom_clan'),
    _marriageText('nyumba ya', x: 0.07, y: 0.252, w: 0.16, h: 0.025, fontSize: 10),
    _marriageField('Nyumba / familia...', 0.22, 0.25, 0.35, fileName: 'house_name'),
    _marriageText('kijana wa', x: 0.58, y: 0.252, w: 0.14, h: 0.025, fontSize: 10),
    _marriageField('Mahali...', 0.71, 0.25, 0.22, fileName: 'groom_origin'),
    // Dowry section
    _marriageText('NIMEPOKA (Mahari / Dowry)', x: 0.07, y: 0.29, w: 0.86, h: 0.03, fontSize: 11, fontWeight: FontWeight.w900, align: TextAlign.center),
    _marriageText('KICHWA CHA MTU:', x: 0.07, y: 0.322, w: 0.28, h: 0.025, fontSize: 10, fontWeight: FontWeight.w800),
    _marriageField(r'$', 0.35, 0.32, 0.58, fileName: 'dowry_amount'),
    _marriageField('• Mtu / bidhaa 1...', 0.1, 0.352, 0.8, fileName: 'dowry_item_1'),
    _marriageField('• Mtu / bidhaa 2...', 0.1, 0.378, 0.8, fileName: 'dowry_item_2'),
    _marriageField('• Mtu / bidhaa 3...', 0.1, 0.404, 0.8, fileName: 'dowry_item_3'),
    // Witnesses header
    _marriageText('MASHAIDI (Witnesses)', x: 0.07, y: 0.44, w: 0.86, h: 0.03, fontSize: 11, fontWeight: FontWeight.w900, align: TextAlign.center),
    _marriageText('UPANDE WA MKE', x: 0.07, y: 0.472, w: 0.4, h: 0.025, fontSize: 9.5, fontWeight: FontWeight.w800, align: TextAlign.center),
    _marriageText('UPANDE WA MME', x: 0.53, y: 0.472, w: 0.4, h: 0.025, fontSize: 9.5, fontWeight: FontWeight.w800, align: TextAlign.center),
    // Wife side witnesses
    for (var i = 0; i < 3; i++) ...[
      _marriageText('${i + 1}.', x: 0.08, y: 0.5 + i * 0.085, w: 0.05, h: 0.022, fontSize: 9, fontWeight: FontWeight.w700),
      _marriageField('Jina...', 0.13, 0.498 + i * 0.085, 0.34, fileName: 'wife_witness_${i + 1}'),
      _marriageText('Saini:', x: 0.13, y: 0.52 + i * 0.085, w: 0.1, h: 0.018, fontSize: 8, color: 0xFF64748B),
      NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        shape: NgmySlideShapeKind.rectangle,
        x: 0.2,
        y: 0.535 + i * 0.085,
        w: 0.27,
        h: 0.032,
        fillColor: 0x0A1C1917,
        strokeColor: 0xFFB8860B,
        strokeWidth: 1,
        fileName: 'wife_sign_${i + 1}',
      ),
    ],
    // Husband side witnesses
    for (var i = 0; i < 3; i++) ...[
      _marriageText('${i + 1}.', x: 0.54, y: 0.5 + i * 0.085, w: 0.05, h: 0.022, fontSize: 9, fontWeight: FontWeight.w700),
      _marriageField('Jina...', 0.59, 0.498 + i * 0.085, 0.34, fileName: 'husband_witness_${i + 1}'),
      _marriageText('Saini:', x: 0.59, y: 0.52 + i * 0.085, w: 0.1, h: 0.018, fontSize: 8, color: 0xFF64748B),
      NgmySlideElement(
        id: NgmySlidesTemplates.newId(),
        type: NgmySlideElementType.shape,
        shape: NgmySlideShapeKind.rectangle,
        x: 0.66,
        y: 0.535 + i * 0.085,
        w: 0.27,
        h: 0.032,
        fillColor: 0x0A1C1917,
        strokeColor: 0xFFB8860B,
        strokeWidth: 1,
        fileName: 'husband_sign_${i + 1}',
      ),
    ],
    // Official Congolese-style stamp
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.circle,
      x: 0.38,
      y: 0.74,
      w: 0.24,
      h: 0.11,
      fillColor: 0x18CE1126,
      strokeColor: _congoRed,
      strokeWidth: 2.5,
      fileName: 'marriage_stamp_ring',
    ),
    NgmySlideElement(
      id: NgmySlidesTemplates.newId(),
      type: NgmySlideElementType.shape,
      shape: NgmySlideShapeKind.circle,
      x: 0.41,
      y: 0.752,
      w: 0.18,
      h: 0.085,
      fillColor: 0x12F7D618,
      strokeColor: _congoBlue,
      strokeWidth: 1.5,
    ),
    _marriageText(
      'RÉPUBLIQUE\nDÉMOCRATIQUE\nDU CONGO',
      x: 0.39,
      y: 0.755,
      w: 0.22,
      h: 0.08,
      fontSize: 6.5,
      fontWeight: FontWeight.w900,
      align: TextAlign.center,
      color: _congoRed,
      fileName: 'marriage_stamp',
    ),
    _marriageText(
      'Tradition Congolaise · NGMY',
      x: 0.07,
      y: 0.82,
      w: 0.86,
      h: 0.022,
      fontSize: 7.5,
      fontWeight: FontWeight.w600,
      align: TextAlign.center,
      color: 0xFF64748B,
    ),
  ];

  final slide = NgmySlide(
    id: NgmySlidesTemplates.newId(),
    title: 'Marriage Certificate',
    layout: NgmySlideLayout.blank,
    background: _parchment,
    backgroundEnd: _parchmentDeep,
    elements: elements,
  );

  return NgmySlideDeck(
    id: NgmySlidesTemplates.newId(),
    name: 'Hati ya Ndoa — $state',
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
      if (el.fileName == 'marriage_watermark') {
        el.text = ngmyMarriageWatermarkForState(state);
      }
    }
  }
  deck.name = 'Hati ya Ndoa — $state';
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
                            Text('Watermark will show EMO YA M\'BONDO [STATE]', style: TextStyle(fontSize: 11, color: Color(0xFF64748B))),
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
