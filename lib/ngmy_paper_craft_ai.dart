import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_ai_language.dart';
import 'ngmy_paper_crafts.dart';
import 'ngmy_slides_models.dart';

/// Fold & Cut with AI: "make number 5 for my tomato seeds", "window envelope letter to my landlord",
/// "kadi ya kuzaliwa kwa mama Asha". The AI picks the design (by its number, its name or what is described) and a
/// colour set, then writes into that design's own text boxes only. The paper, folds and cuts never change.

// ---------------------------------------------------------------------------------------------------------------
// Finding a design by number or name.
// ---------------------------------------------------------------------------------------------------------------

NgmyPaperCraft? ngmyPaperCraftByNumber(int number) {
  for (final c in kNgmyPaperCrafts) {
    if (c.number == number) return c;
  }
  return null;
}

/// Other ways people name a design (English and Swahili). The design name and id always count too.
const Map<String, List<String>> _kCraftAliases = {
  'window_letter': ['window letter', 'window envelope letter', 'letter for window envelope', 'barua ya dirisha', 'barua ya bahasha ya dirisha'],
  'card_envelope': ['a2 envelope', 'card envelope', 'greeting card envelope', 'bahasha ya kadi'],
  'square_envelope': ['square envelope', 'bahasha ya mraba'],
  'diamond_envelope': ['diamond envelope', 'bahasha ya almasi'],
  'seed_envelopes': ['seed envelope', 'seed packet', 'coin envelope', 'bahasha ya mbegu', 'pakiti ya mbegu'],
  'gift_card_envelopes': ['gift card envelope', 'bahasha ya kadi ya zawadi'],
  'gift_box': ['gift box', 'box with lid', 'sanduku la zawadi', 'boksi la zawadi'],
  'pillow_box': ['pillow box', 'sanduku la mto'],
  'pyramid_box': ['pyramid box', 'pyramid', 'piramidi'],
  'prism_box': ['prism box', 'triangle box', 'triangle prism', 'sanduku la pembetatu'],
  'favor_box': ['favor box', 'favour box', 'cube box', 'sanduku dogo'],
  'paper_bag': ['paper bag', 'gift bag', 'mfuko wa karatasi', 'mfuko wa zawadi'],
  'half_fold_card': ['half fold card', 'half fold', 'kadi ya kukunja nusu'],
  'quarter_fold_card': ['quarter fold card', 'quarter fold', 'kadi ya kukunja mara mbili'],
  'tri_fold_card': ['tri fold card', 'trifold card', 'tri fold', 'trifold', 'kadi ya kukunja mara tatu'],
  'pop_up_card': ['pop up card', 'popup card', 'pop up', 'kadi ya kuibuka'],
  'postcards': ['postcard', 'post card', 'postikadi', 'kadi ya posta'],
  'gift_tags': ['gift tag', 'tags', 'vibandiko vya zawadi', 'lebo za zawadi'],
  'folded_tags': ['folded gift tag', 'folded tag', 'lebo za kukunja'],
  'bookmarks': ['bookmark', 'alama ya kitabu', 'alama za kitabu'],
  'mini_zine': ['mini zine', 'zine', 'little book', 'kitabu kidogo'],
  'place_cards': ['place card', 'name card', 'table card', 'kadi za majina', 'kadi ya jina'],
  'pocket_folder': ['pocket folder', 'folder', 'faili la karatasi'],
  'cd_sleeve': ['cd sleeve', 'cd cover', 'dvd sleeve', 'mfuko wa cd'],
  'photo_sleeve': ['photo sleeve', 'picture sleeve', 'mfuko wa picha'],
  'door_hangers': ['door hanger', 'do not disturb', 'kibao cha mlango'],
};

String _norm(String s) => ' ${s.toLowerCase().replaceAll(RegExp(r'[^a-z0-9]+'), ' ').trim()} ';

/// The design a request names by its number ("number 5", "#5", "namba 5", just "5") or its name. Null when the
/// request only describes something (the AI then chooses).
NgmyPaperCraft? ngmyFindPaperCraft(String request) {
  final t = request.toLowerCase();
  final byNumber = RegExp(r'(?:\bnumber|\bnum|\bno\.?|#|\bnamba|\bnambari|\bdesign|\bframe|\bmuundo)\s*#?\s*(\d{1,3})\b').firstMatch(t) ??
      RegExp(r'^\s*(\d{1,3})\s*[.:)\-]?\s*($|\s)').firstMatch(t);
  if (byNumber != null) {
    final c = ngmyPaperCraftByNumber(int.parse(byNumber.group(1)!));
    if (c != null) return c;
  }
  final n = _norm(request);
  NgmyPaperCraft? best;
  var bestLen = 0;
  for (final c in kNgmyPaperCrafts) {
    final names = {c.name, c.id.replaceAll('_', ' '), ...?_kCraftAliases[c.id]};
    for (final name in names) {
      final a = _norm(name);
      // Also match the plural / singular ("gift tag" in "gift tags").
      final hit = n.contains(a) || n.contains('${a.trimRight()}s ') || (a.trimRight().endsWith('s') && n.contains('${a.trimRight().substring(0, a.trimRight().length - 1)} '));
      if (hit && a.length > bestLen) {
        best = c;
        bestLen = a.length;
      }
    }
  }
  return best;
}

// ---------------------------------------------------------------------------------------------------------------
// The text boxes of every design, read from the designs themselves (so new designs are picked up on their own).
// ---------------------------------------------------------------------------------------------------------------

class NgmyCraftField {
  const NgmyCraftField({required this.key, required this.page, required this.sample, required this.maxChars, required this.upsideDown});

  /// "page.box", both counted from 1 (for example "1.3").
  final String key;
  final String page;
  final String sample;
  final int maxChars;
  final bool upsideDown;
}

const double _unitPt = 612 / 960;

/// Roughly how many letters fit in a text box at [sizePt].
int _capacity(NgmySlideElement e, double sizePt) {
  final w = e.w * 612 - 12 * _unitPt;
  final h = e.h * 792 - 22 * _unitPt;
  final perLine = math.max(1, (w / (sizePt * 0.52)).floor());
  final lines = math.max(1, (h / (sizePt * 1.35)).floor());
  return perLine * lines;
}

bool _upsideDown(NgmySlideElement e) => (e.rotation.abs() - math.pi).abs() < 0.01;

List<NgmyCraftField> ngmyPaperCraftFields(NgmyPaperCraft craft) {
  final out = <NgmyCraftField>[];
  final slides = craft.build(kNgmyCraftPalettes.first);
  for (var s = 0; s < slides.length; s++) {
    final texts = slides[s].elements.where((e) => e.type == NgmySlideElementType.text).toList();
    for (var i = 0; i < texts.length; i++) {
      final e = texts[i];
      out.add(NgmyCraftField(
        key: '${s + 1}.${i + 1}',
        page: slides[s].title,
        sample: e.text,
        maxChars: math.max(e.text.length, _capacity(e, e.fontSize * _unitPt)),
        upsideDown: _upsideDown(e),
      ));
    }
  }
  return out;
}

/// Every design with its number, name and boxes, for the AI.
String ngmyPaperCraftCatalog({NgmyPaperCraft? only}) {
  final b = StringBuffer();
  for (final c in kNgmyPaperCrafts) {
    if (only != null && c.id != only.id) continue;
    b.writeln('#${c.number} ${c.name} (${c.group}): ${c.blurb}');
    for (final f in ngmyPaperCraftFields(c)) {
      final sample = f.sample.replaceAll('\n', ' / ');
      b.writeln('   ${f.key} [${f.page}${f.upsideDown ? ', upside down' : ''}] max ${f.maxChars} chars, sample: "$sample"');
    }
  }
  return b.toString();
}

// ---------------------------------------------------------------------------------------------------------------
// The prompt and the answer.
// ---------------------------------------------------------------------------------------------------------------

String _languageRule(String request, String language) {
  switch (language) {
    case 'en':
      return '- LANGUAGE: write every field in clear, correct English.';
    case 'sw':
      return '- LANGUAGE: write every field in natural, everyday Swahili (Kiswahili), as people in Tanzania and Kenya really write it. Keep names, addresses and numbers as given.\n$kNgmySwahiliStyleGuide';
    default:
      final named = ngmyLanguageDirective(request);
      return '- LANGUAGE: write in the language the request names; if it names none, write in the language the request is written in (English or Swahili).${named.isEmpty ? '' : '\n$named'}';
  }
}

String ngmyPaperCraftAiPrompt({required String request, String language = 'auto', NgmyPaperCraft? picked, NgmyCraftPalette? palette}) {
  final palettes = kNgmyCraftPalettes.map((p) => p.name).join(', ');
  return '''
You write the words on a printable paper design from NGMY Slides "Fold & Cut" (envelopes, letters, boxes, cards, tags and more). The paper, its folds and cuts are already made; you only fill its text boxes.

USER REQUEST (typed or spoken, may be informal):
"""$request"""

${picked != null ? 'The user chose design #${picked.number} ${picked.name}. Use it.' : 'Choose the ONE design that fits best: by its number ("number 5", "namba 5"), by its name, or by what they describe (a letter for a window envelope, a birthday card, seed packets, gift tags...).'}

DESIGNS (number, name, then each text box: key [page] max length, sample):
${ngmyPaperCraftCatalog(only: picked)}
COLOUR SETS: $palettes. Use ${palette?.name ?? 'Blush'} unless the request asks for other colours or a mood that clearly fits another set.

Rules:
- Fill the text boxes of the chosen design only, using their keys. Every box keeps its role (look at its sample): a title stays a title, an address stays an address with its lines (name / street / city, state ZIP), "To:" and "From:" stay.
- Write professionally: warm, clear, correct spelling and grammar, the right tone for the occasion (formal for business letters, warm for cards). Short and sweet on small items.
- Keep each text within its max length. Short words in small boxes. Never pad.
- Use the names, places, dates and messages the user gave. If something needed is missing (an address, a phone number, a date), keep a clear placeholder in the same language (for example "Recipient Name", "Street Address", "City, State ZIP", or in Swahili "Jina la Mpokeaji", "Anwani ya Mtaa", "Mji, Mkoa, Sanduku la Posta"). Never invent addresses, phone numbers, emails or prices.
- Boxes marked "upside down" are turned by the app so they read the right way after folding: just write their text normally.
- Designs with several copies (gift tags, place cards, seed envelopes, postcards): fill every copy; use different names or titles when the user gives several, otherwise vary them nicely.
- A box you have nothing better for keeps its sample text (translated if the language is not English).
${_languageRule(request, language)}
- Reply with JSON only, no markdown, in this shape:
{"design": 1, "palette": "Blush", "language": "English", "fields": {"1.1": "...", "1.2": "..."}}
''';
}

typedef NgmyPaperCraftAiAnswer = ({int design, String? palette, Map<String, String> fields});

NgmyPaperCraftAiAnswer? ngmyParsePaperCraftAi(String raw) {
  final start = raw.indexOf('{');
  final end = raw.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    final m = jsonDecode(raw.substring(start, end + 1));
    if (m is! Map) return null;
    final d = m['design'];
    final design = d is num ? d.toInt() : int.tryParse('$d'.replaceAll(RegExp(r'[^0-9]'), '')) ?? 0;
    final f = m['fields'];
    final fields = <String, String>{};
    if (f is Map) {
      f.forEach((k, v) {
        if (v == null) return;
        final s = '$v'.trim();
        if (s.isNotEmpty) fields['$k'.trim()] = s;
      });
    }
    return (design: design, palette: m['palette']?.toString(), fields: fields);
  } catch (_) {
    return null;
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Putting the words in, so nothing spills out of its box.
// ---------------------------------------------------------------------------------------------------------------

bool _fits(NgmySlideElement e, String text, double sizePt) {
  final w = e.w * 612 - 12 * _unitPt;
  final h = e.h * 792 - 22 * _unitPt;
  final charW = sizePt * (e.fontWeight.value >= 700 ? 0.56 : 0.52);
  final perLine = math.max(1, (w / charW).floor());
  var lines = 0;
  for (final para in text.split('\n')) {
    // Whole words wrap, so a line holds a little less than its full width.
    lines += math.max(1, (para.length / math.max(1, perLine * 0.92)).ceil());
  }
  return lines * sizePt * 1.35 <= h + 0.5;
}

/// Shrinks the letters (down to about half, never below 5 pt) and, if that is not enough, trims the end, so the
/// text stays inside its box.
void ngmyFitCraftText(NgmySlideElement e) {
  final original = e.fontSize * _unitPt;
  final floor = math.max(5.0, original * 0.55);
  var size = original;
  while (!_fits(e, e.text, size) && size > floor) {
    size = math.max(floor, size * 0.93);
  }
  if (!_fits(e, e.text, size)) {
    var t = e.text;
    while (t.length > 3 && !_fits(e, '$t...', size)) {
      final cut = t.lastIndexOf(RegExp(r'\s'), t.length - 2);
      t = (cut > 0 ? t.substring(0, cut) : t.substring(0, t.length - 1)).trimRight();
    }
    e.text = '$t...';
  }
  e.fontSize = (size / _unitPt * 10).roundToDouble() / 10;
}

/// The design in [palette] with the AI's words put into its boxes ("page.box" keys).
NgmySlideDeck ngmyBuildFilledPaperCraft(NgmyPaperCraft craft, NgmyCraftPalette palette, Map<String, String> fields) {
  final deck = ngmyBuildPaperCraftDeck(craft, palette);
  for (var s = 0; s < deck.slides.length; s++) {
    final texts = deck.slides[s].elements.where((e) => e.type == NgmySlideElementType.text).toList();
    for (var i = 0; i < texts.length; i++) {
      final v = fields['${s + 1}.${i + 1}'];
      if (v == null || v.trim().isEmpty) continue;
      texts[i].text = v.replaceAll('\r', '').trim();
      ngmyFitCraftText(texts[i]);
    }
  }
  return deck;
}

NgmyCraftPalette _paletteNamed(String? name, NgmyCraftPalette fallback) {
  final n = (name ?? '').trim().toLowerCase();
  for (final p in kNgmyCraftPalettes) {
    if (p.name.toLowerCase() == n) return p;
  }
  return fallback;
}

/// Asks the AI to fill a Fold & Cut design from [request]. [language] is 'auto', 'en' or 'sw'.
Future<NgmySlideDeck> ngmyFillPaperCraftWithAi({
  required String request,
  String language = 'auto',
  NgmyCraftPalette? palette,
  void Function(String status)? onStatus,
}) async {
  final picked = ngmyFindPaperCraft(request);
  final fallbackPalette = palette ?? kNgmyCraftPalettes.first;
  final prompt = ngmyPaperCraftAiPrompt(request: request, language: language, picked: picked, palette: fallbackPalette);
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not available right now. Please try again later.';
  final creds = ngmyParseAiCredentials(key);
  onStatus?.call(picked != null ? 'Writing #${picked.number} ${picked.name}...' : 'Choosing the design and writing it...');
  String? lastError;
  for (var attempt = 0; attempt < 2; attempt++) {
    final r = await ngmyAiGenerateWithCredentials(creds, prompt, kind: 'slides');
    if (r.text == null) {
      lastError = r.error;
      continue;
    }
    final answer = ngmyParsePaperCraftAi(r.text!);
    if (answer == null) continue;
    final craft = picked ?? ngmyPaperCraftByNumber(answer.design);
    if (craft == null) continue;
    onStatus?.call('Putting the words on #${craft.number} ${craft.name}...');
    return ngmyBuildFilledPaperCraft(craft, _paletteNamed(answer.palette, fallbackPalette), answer.fields);
  }
  throw lastError != null && ngmyIsOfflineOrNetworkError(lastError)
      ? 'No internet connection. Try again when you are online.'
      : 'The AI could not write that. Try saying it another way, or name the design number.';
}

// ---------------------------------------------------------------------------------------------------------------
// The sheet (same look as Slides "Create with AI").
// ---------------------------------------------------------------------------------------------------------------

Future<NgmySlideDeck?> showNgmyPaperCraftAiSheet(BuildContext context, {NgmyCraftPalette? palette}) {
  return showModalBottomSheet<NgmySlideDeck>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _CraftAiSheet(palette: palette),
  );
}

class _CraftAiSheet extends StatefulWidget {
  const _CraftAiSheet({this.palette});
  final NgmyCraftPalette? palette;
  @override
  State<_CraftAiSheet> createState() => _CraftAiSheetState();
}

class _CraftAiSheetState extends State<_CraftAiSheet> {
  final _desc = TextEditingController();
  final _focus = FocusNode();
  String _language = 'auto';
  bool _busy = false;
  String _status = '';
  String? _error;

  static const _examples = [
    'Number 1: a letter to my landlord about the repairs',
    'Birthday card for my mum Asha, she turns 60',
    'Namba 18: vibandiko vya zawadi za harusi',
    'Seed envelopes for tomato and basil',
  ];

  @override
  void dispose() {
    _desc.dispose();
    _focus.dispose();
    super.dispose();
  }

  Future<void> _create() async {
    final d = _desc.text.trim();
    if (d.isEmpty) {
      setState(() => _error = 'Type a number, a design name or what you need first.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
      _status = 'Writing...';
    });
    try {
      final deck = await ngmyFillPaperCraftWithAi(
        request: d,
        language: _language,
        palette: widget.palette,
        onStatus: (s) {
          if (mounted) setState(() => _status = s);
        },
      );
      if (mounted) Navigator.of(context).pop(deck);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = '$e';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    const panel = Color(0xFF111827);
    final picked = ngmyFindPaperCraft(_desc.text);
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92, maxWidth: 680),
        decoration: const BoxDecoration(color: panel, borderRadius: BorderRadius.vertical(top: Radius.circular(26))),
        child: SafeArea(
          top: false,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)))),
                const SizedBox(height: 14),
                const Text(
                  'Create with AI',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, letterSpacing: 0.3),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Say a design number, its name or what you need. The AI writes it for you in English or Swahili.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white60, fontSize: 13, height: 1.35),
                ),
                const SizedBox(height: 18),
                Center(
                  child: GestureDetector(
                    onTap: () => _focus.requestFocus(),
                    child: Container(
                      width: 84,
                      height: 84,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [Color(0xFF4ADE80), Color(0xFF16A34A), Color(0xFF15803D)],
                        ),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.35), width: 2),
                        boxShadow: [BoxShadow(color: const Color(0xFF22C55E).withValues(alpha: 0.5), blurRadius: 24, spreadRadius: 2)],
                      ),
                      child: const Icon(Icons.mic_rounded, color: Colors.white, size: 40),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Type what to write below',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w800, fontSize: 12),
                ),
                const SizedBox(height: 14),
                TextField(
                  key: const ValueKey('craft_ai_text'),
                  controller: _desc,
                  focusNode: _focus,
                  minLines: 3,
                  maxLines: 6,
                  enabled: !_busy,
                  onChanged: (_) => setState(() {}),
                  style: const TextStyle(color: Colors.white, height: 1.35),
                  decoration: InputDecoration(
                    hintText: 'Example: number 1, a letter to Mr Juma at 12 Uhuru Street, Dar es Salaam...',
                    hintStyle: const TextStyle(color: Colors.white38),
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.06),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
                  ),
                ),
                if (picked != null) ...[
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.check_circle_rounded, color: Color(0xFF4ADE80), size: 16),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text('Design #${picked.number} ${picked.name}',
                            style: const TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w700, fontSize: 12.5)),
                      ),
                    ],
                  ),
                ],
                const SizedBox(height: 12),
                Wrap(
                  spacing: 6,
                  runSpacing: 6,
                  children: [
                    for (final ex in _examples)
                      ActionChip(
                        label: Text(ex, style: const TextStyle(fontSize: 11, color: Colors.white70)),
                        backgroundColor: Colors.white.withValues(alpha: 0.06),
                        side: BorderSide(color: Colors.white.withValues(alpha: 0.1)),
                        onPressed: _busy
                            ? null
                            : () => setState(() {
                                  _desc.text = ex;
                                  _error = null;
                                }),
                      ),
                  ],
                ),
                const SizedBox(height: 14),
                const Text('LANGUAGE', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1)),
                const SizedBox(height: 6),
                Wrap(
                  spacing: 8,
                  children: [
                    for (final (id, label) in const [('auto', 'Same as I typed'), ('en', 'English'), ('sw', 'Kiswahili')])
                      ChoiceChip(
                        label: Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700)),
                        selected: _language == id,
                        onSelected: _busy ? null : (_) => setState(() => _language = id),
                      ),
                  ],
                ),
                if (_error != null) ...[
                  const SizedBox(height: 12),
                  Text(_error!, style: const TextStyle(color: Color(0xFFFCA5A5), fontSize: 12.5, height: 1.35)),
                ],
                const SizedBox(height: 18),
                SizedBox(
                  height: 54,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(18),
                      gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]),
                      boxShadow: [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.4), blurRadius: 16)],
                    ),
                    child: TextButton(
                      key: const ValueKey('craft_ai_create'),
                      onPressed: _busy ? null : _create,
                      child: _busy
                          ? Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white)),
                                const SizedBox(width: 10),
                                Flexible(child: Text(_status, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
                              ],
                            )
                          : const Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                Icon(Icons.auto_awesome_rounded, color: Colors.white),
                                SizedBox(width: 8),
                                Text('Create', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                              ],
                            ),
                    ),
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
