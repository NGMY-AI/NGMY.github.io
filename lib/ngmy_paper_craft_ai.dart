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
/// In the editor, the round AI button beside the page changes the words and colours the same way.

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
      final stem = a.trimRight();
      // Also match the plural / singular ("gift tag" in "gift tags").
      final hit = n.contains(a) || n.contains('${stem}s ') || (stem.endsWith('s') && n.contains('${stem.substring(0, stem.length - 1)} '));
      if (hit && a.length > bestLen) {
        best = c;
        bestLen = a.length;
      }
    }
  }
  return best;
}

// ---------------------------------------------------------------------------------------------------------------
// The details each design carries (the small boxes the sheet shows). One list, here.
// ---------------------------------------------------------------------------------------------------------------

class NgmyCraftDetail {
  const NgmyCraftDetail(this.key, this.label, {this.needed = false, this.multiline = false});
  final String key;
  final String label;

  /// The AI asks for this when it is in neither the boxes nor the request.
  final bool needed;
  final bool multiline;
}

const _toName = NgmyCraftDetail('to_name', 'Recipient name', needed: true);
const _toAddress = NgmyCraftDetail('to_address', 'Recipient address', needed: true, multiline: true);
const _fromName = NgmyCraftDetail('from_name', 'Your name');
const _fromAddress = NgmyCraftDetail('from_address', 'Your address', multiline: true);
const _cardTo = NgmyCraftDetail('to_name', 'To (name)', needed: true);
const _cardFrom = NgmyCraftDetail('from_name', 'From (name)', needed: true);
const _occasion = NgmyCraftDetail('occasion', 'Occasion', needed: true);
const _message = NgmyCraftDetail('message', 'Message', multiline: true);
const _giftTo = NgmyCraftDetail('to_name', 'To (name)');
const _giftFrom = NgmyCraftDetail('from_name', 'From (name)');
const _boxWords = NgmyCraftDetail('words', 'Words on it');

const Map<String, List<NgmyCraftDetail>> _kCraftDetails = {
  'window_letter': [
    _toName,
    _toAddress,
    NgmyCraftDetail('from_name', 'Your name', needed: true),
    _fromAddress,
    NgmyCraftDetail('topic', 'What the letter is about', needed: true, multiline: true),
  ],
  'card_envelope': [_toName, _toAddress, _fromName, _fromAddress],
  'square_envelope': [_toName, _toAddress, _fromName, _fromAddress],
  'diamond_envelope': [_toName, _toAddress, _fromName, _fromAddress],
  'seed_envelopes': [NgmyCraftDetail('seeds', 'Seed names (one per envelope)', needed: true), NgmyCraftDetail('dates', 'Planted and harvest dates')],
  'gift_card_envelopes': [_giftTo, _giftFrom, _boxWords],
  'gift_box': [_giftTo, _giftFrom, _boxWords],
  'pillow_box': [_giftTo, _giftFrom, _boxWords],
  'pyramid_box': [_giftTo, _boxWords],
  'prism_box': [_boxWords],
  'favor_box': [_boxWords, NgmyCraftDetail('occasion', 'Occasion')],
  'paper_bag': [_boxWords, NgmyCraftDetail('shop', 'Shop or your name')],
  'half_fold_card': [_cardTo, _cardFrom, _occasion, _message],
  'quarter_fold_card': [_cardTo, _cardFrom, _occasion, _message],
  'tri_fold_card': [
    NgmyCraftDetail('occasion', 'Event', needed: true),
    NgmyCraftDetail('host', 'Who it is for or from', needed: true),
    NgmyCraftDetail('date_time', 'Date and time', needed: true),
    NgmyCraftDetail('place', 'Place', needed: true, multiline: true),
    NgmyCraftDetail('rsvp', 'Reply to (name and phone)'),
  ],
  'pop_up_card': [_cardTo, _cardFrom, _occasion, _message],
  'postcards': [NgmyCraftDetail('place', 'Town or place on the picture'), _toName, _toAddress, _message],
  'gift_tags': [NgmyCraftDetail('names', 'Names (one per tag)', needed: true, multiline: true), _giftFrom],
  'folded_tags': [NgmyCraftDetail('names', 'Names (one per tag)', needed: true, multiline: true), _giftFrom],
  'bookmarks': [_boxWords, NgmyCraftDetail('name', 'Your name')],
  'mini_zine': [NgmyCraftDetail('title', 'Title', needed: true), NgmyCraftDetail('author', 'By (name)'), NgmyCraftDetail('topic', 'What it is about', multiline: true)],
  'place_cards': [NgmyCraftDetail('names', 'Guest names', needed: true, multiline: true), NgmyCraftDetail('tables', 'Table numbers')],
  'pocket_folder': [NgmyCraftDetail('title', 'Title'), NgmyCraftDetail('name', 'Name and subject')],
  'cd_sleeve': [NgmyCraftDetail('title', 'Title', needed: true), NgmyCraftDetail('name', 'Artist or your name'), NgmyCraftDetail('tracks', 'Tracks', multiline: true)],
  'photo_sleeve': [NgmyCraftDetail('title', 'Title'), NgmyCraftDetail('date_place', 'Date and place'), _message],
  'door_hangers': [_boxWords, NgmyCraftDetail('name', 'Your name')],
};

List<NgmyCraftDetail> ngmyPaperCraftDetails(NgmyPaperCraft craft) => _kCraftDetails[craft.id] ?? const [_message];

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

List<NgmySlideElement> _textsOf(NgmySlide s) => s.elements.where((e) => e.type == NgmySlideElementType.text).toList();

List<NgmyCraftField> _fieldsOfSlides(List<NgmySlide> slides) {
  final out = <NgmyCraftField>[];
  for (var s = 0; s < slides.length; s++) {
    final texts = _textsOf(slides[s]);
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

List<NgmyCraftField> ngmyPaperCraftFields(NgmyPaperCraft craft) => _fieldsOfSlides(craft.build(kNgmyCraftPalettes.first));

/// Every design with its number, name, the details it needs and its boxes, for the AI.
String ngmyPaperCraftCatalog({NgmyPaperCraft? only}) {
  final b = StringBuffer();
  for (final c in kNgmyPaperCrafts) {
    if (only != null && c.id != only.id) continue;
    final needs = ngmyPaperCraftDetails(c).where((d) => d.needed).map((d) => d.label).join(', ');
    b.writeln('#${c.number} ${c.name} (${c.group}): ${c.blurb}${needs.isEmpty ? '' : '. NEEDS: $needs'}');
    for (final f in ngmyPaperCraftFields(c)) {
      final sample = f.sample.replaceAll('\n', ' / ');
      b.writeln('   ${f.key} [${f.page}${f.upsideDown ? ', upside down' : ''}] max ${f.maxChars} chars, sample: "$sample"');
    }
  }
  return b.toString();
}

// ---------------------------------------------------------------------------------------------------------------
// The prompts and the answer.
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

const String _kBoxRules = '''
- Every box keeps its role (look at its sample): a title stays a title, an address stays an address with its lines (name / street / city, state ZIP), "To:" and "From:" stay.
- Write professionally: warm, clear, correct spelling and grammar, the right tone for the occasion (formal for business letters, warm for cards). Short and sweet on small items.
- Keep each text within its max length. Short words in small boxes. Never pad.
- Boxes marked "upside down" are turned by the app so they read the right way after folding: just write their text normally.
- Never invent addresses, phone numbers, emails or prices.''';

String _detailsBlock(Map<String, String> details, NgmyPaperCraft? craft) {
  if (details.isEmpty) return '';
  final labels = {for (final c in kNgmyPaperCrafts) for (final d in ngmyPaperCraftDetails(c)) d.key: d.label};
  if (craft != null) {
    for (final d in ngmyPaperCraftDetails(craft)) {
      labels[d.key] = d.label;
    }
  }
  final b = StringBuffer('DETAILS THE USER TYPED IN THE BOXES (use them exactly):\n');
  details.forEach((k, v) => b.writeln('- ${labels[k] ?? k}: ${v.replaceAll('\n', ' / ')}'));
  return b.toString();
}

String ngmyPaperCraftAiPrompt({
  required String request,
  String language = 'auto',
  NgmyPaperCraft? picked,
  NgmyCraftPalette? palette,
  Map<String, String> details = const {},
  bool allowAsk = false,
}) {
  final palettes = kNgmyCraftPalettes.map((p) => p.name).join(', ');
  final askRule = allowAsk
      ? '- MISSING DETAILS: if something listed under NEEDS for the chosen design is in neither the request nor the typed details (and the user did not ask you to make it up), do not fill the design. Reply only {"design": N, "ask": "one short, friendly question that asks for exactly what is missing"} in the language of the request. Never ask about anything that is not listed under NEEDS.'
      : '- Do not ask questions. If something needed is missing, keep a clear placeholder in the same language (for example "Recipient Name", "Street Address", "City, State ZIP", or in Swahili "Jina la Mpokeaji", "Anwani ya Mtaa", "Mji, Mkoa, Sanduku la Posta").';
  return '''
You write the words on a printable paper design from NGMY Slides "Fold & Cut" (envelopes, letters, boxes, cards, tags and more). The paper, its folds and cuts are already made; you only fill its text boxes.

USER REQUEST (typed or spoken, may be informal):
"""$request"""

${_detailsBlock(details, picked)}
${picked != null ? 'The user chose design #${picked.number} ${picked.name}. Use it.' : 'Choose the ONE design that fits best: by its number ("number 5", "namba 5"), by its name, or by what they describe (a letter for a window envelope, a birthday card, seed packets, gift tags...).'}

DESIGNS (number, name, what it needs, then each text box: key [page] max length, sample):
${ngmyPaperCraftCatalog(only: picked)}
COLOUR SETS: $palettes. Use ${palette?.name ?? 'Blush'} unless the request asks for other colours or a mood that clearly fits another set.

Rules:
- Fill the text boxes of the chosen design only, using their keys.
$_kBoxRules
- Use the names, places, dates and messages the user gave, in the request or in the typed details.
$askRule
- Designs with several copies (gift tags, place cards, seed envelopes, postcards): fill every copy; use different names or titles when the user gives several, otherwise vary them nicely.
- A box you have nothing better for keeps its sample text (translated if the language is not English).
${_languageRule(request, language)}
- Reply with JSON only, no markdown, in this shape:
{"design": 1, "palette": "Blush", "language": "English", "fields": {"1.1": "...", "1.2": "..."}}
''';
}

typedef NgmyPaperCraftAiAnswer = ({int design, String? palette, Map<String, String> fields, String? ask, String? reply});

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
    String? text(String k) {
      final v = m[k];
      if (v == null) return null;
      final s = '$v'.trim();
      return s.isEmpty ? null : s;
    }

    return (design: design, palette: text('palette'), fields: fields, ask: text('ask'), reply: text('reply'));
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
    final texts = _textsOf(deck.slides[s]);
    for (var i = 0; i < texts.length; i++) {
      final v = fields['${s + 1}.${i + 1}'];
      if (v == null || v.trim().isEmpty) continue;
      texts[i].text = v.replaceAll('\r', '').trim();
      ngmyFitCraftText(texts[i]);
    }
  }
  return deck;
}

NgmyCraftPalette? _paletteNamed(String? name) {
  final n = (name ?? '').trim().toLowerCase();
  for (final p in kNgmyCraftPalettes) {
    if (p.name.toLowerCase() == n) return p;
  }
  return null;
}

/// What the AI made: a finished deck, or one short question when something it needs is missing.
typedef NgmyPaperCraftAiResult = ({NgmySlideDeck? deck, String? ask, NgmyPaperCraft? craft});

Future<String> _askAi(String prompt) async {
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not available right now. Please try again later.';
  final creds = ngmyParseAiCredentials(key);
  String? lastError;
  for (var attempt = 0; attempt < 2; attempt++) {
    final r = await ngmyAiGenerateWithCredentials(creds, prompt, kind: 'slides');
    if (r.text != null && ngmyParsePaperCraftAi(r.text!) != null) return r.text!;
    lastError = r.error ?? lastError;
  }
  throw lastError != null && ngmyIsOfflineOrNetworkError(lastError)
      ? 'No internet connection. Try again when you are online.'
      : 'The AI could not do that. Try saying it another way, or name the design number.';
}

/// Asks the AI to fill a Fold & Cut design from [request] and the typed [details]. [language] is 'auto', 'en' or
/// 'sw'. With [allowAsk] the AI may answer with one question instead, when a needed detail is missing.
Future<NgmyPaperCraftAiResult> ngmyFillPaperCraftWithAi({
  required String request,
  String language = 'auto',
  NgmyCraftPalette? palette,
  Map<String, String> details = const {},
  bool allowAsk = false,
  NgmyPaperCraft? design,
  void Function(String status)? onStatus,
}) async {
  final picked = design ?? ngmyFindPaperCraft(request);
  final fallbackPalette = palette ?? kNgmyCraftPalettes.first;
  final prompt = ngmyPaperCraftAiPrompt(request: request, language: language, picked: picked, palette: fallbackPalette, details: details, allowAsk: allowAsk);
  onStatus?.call(picked != null ? 'Writing #${picked.number} ${picked.name}...' : 'Choosing the design and writing it...');
  final answer = ngmyParsePaperCraftAi(await _askAi(prompt))!;
  final craft = picked ?? ngmyPaperCraftByNumber(answer.design);
  if (craft == null) throw 'The AI could not choose a design. Try naming the design number.';
  if (answer.ask != null && allowAsk) return (deck: null, ask: answer.ask, craft: craft);
  onStatus?.call('Putting the words on #${craft.number} ${craft.name}...');
  return (deck: ngmyBuildFilledPaperCraft(craft, _paletteNamed(answer.palette) ?? fallbackPalette, answer.fields), ask: null, craft: craft);
}

// ---------------------------------------------------------------------------------------------------------------
// Changing a design that is already open (the round AI button beside the page).
// ---------------------------------------------------------------------------------------------------------------

String ngmyPaperCraftEditPrompt({required NgmySlideDeck deck, required String request, List<(bool, String)> history = const []}) {
  final info = ngmyPaperCraftOfDeck(deck);
  final palettes = kNgmyCraftPalettes.map((p) => p.name).join(', ');
  final boxes = StringBuffer();
  final template = info == null ? null : info.craft.build(info.palette);
  for (var s = 0; s < deck.slides.length; s++) {
    final texts = _textsOf(deck.slides[s]);
    final tpl = template != null && s < template.length ? _textsOf(template[s]) : const <NgmySlideElement>[];
    for (var i = 0; i < texts.length; i++) {
      final e = texts[i];
      final base = i < tpl.length ? tpl[i] : e;
      boxes.writeln('   ${s + 1}.${i + 1} [${deck.slides[s].title}${_upsideDown(e) ? ', upside down' : ''}] max ${_capacity(base, base.fontSize * _unitPt)} chars, now: "${e.text.replaceAll('\n', ' / ')}"');
    }
  }
  final talk = history.isEmpty ? '' : 'EARLIER IN THIS CHAT:\n${history.map((h) => '${h.$1 ? 'User' : 'AI'}: ${h.$2}').join('\n')}\n';
  return '''
You change the words and colours of a printable paper design from NGMY Slides "Fold & Cut"${info == null ? '' : ' (#${info.craft.number} ${info.craft.name})'}. The paper, its folds and cuts never change; you only change the text in its boxes and, if asked, its colour set.

${talk}WHAT THEY WANT NOW (may be informal):
"""$request"""

TEXT BOXES (key [page] max length, what it says now):
$boxes
COLOUR SET NOW: ${info?.palette.name ?? 'unknown'}. Colour sets: $palettes.

Rules:
- Change only what they ask. Return only the boxes you change, using their keys. "The name" means every box that holds that name.
- If they ask for other colours, set "palette" to the best colour set from the list (Ocean for blue, Sage for green, Blush for pink, Kraft for brown, Midnight for dark, Sunny for orange or yellow); otherwise leave it "".
$_kBoxRules
- LANGUAGE: keep the language the boxes are in now, unless they ask for another one; then translate every box. Write Swahili the way people in Tanzania and Kenya really write it.
- If you truly cannot tell what they mean, reply only {"ask": "one short question"}.
- "reply": one short, friendly sentence telling them what you changed, in the language they wrote in.
- Reply with JSON only, no markdown, in this shape:
{"palette": "", "fields": {"1.1": "..."}, "reply": "..."}
''';
}

/// Asks the AI how to change [deck]. Nothing is changed yet: give the answer to [ngmyApplyPaperCraftEdit].
Future<NgmyPaperCraftAiAnswer> ngmyAskPaperCraftEdit({required NgmySlideDeck deck, required String request, List<(bool, String)> history = const []}) async {
  return ngmyParsePaperCraftAi(await _askAi(ngmyPaperCraftEditPrompt(deck: deck, request: request, history: history)))!;
}

/// Puts a new colour set on an open design: the panels and lines are redrawn, and words in the old colours take
/// the new ones. Returns false when the design is not known.
bool ngmyRecolorPaperCraft(NgmySlideDeck deck, NgmyCraftPalette to) {
  final info = ngmyPaperCraftOfDeck(deck);
  if (info == null) return false;
  final from = info.palette;
  final fresh = ngmyBuildPaperCraftDeck(info.craft, to);
  final map = {from.main: to.main, from.soft: to.soft, from.pale: to.pale, from.accent: to.accent, from.ink: to.ink};
  for (var s = 0; s < deck.slides.length && s < fresh.slides.length; s++) {
    final lines = fresh.slides[s].elements.firstWhere(ngmyIsCraftLines);
    for (final e in deck.slides[s].elements) {
      if (ngmyIsCraftLines(e)) {
        e.text = lines.text;
      } else if (e.type == NgmySlideElementType.text) {
        e.color = map[e.color] ?? e.color;
      }
    }
  }
  return true;
}

/// Applies the AI's change to [deck] in place: new words in the named boxes (sized to fit, starting from the
/// design's own letter size) and the new colour set. Returns true if anything changed.
bool ngmyApplyPaperCraftEdit(NgmySlideDeck deck, NgmyPaperCraftAiAnswer answer) {
  var changed = false;
  final info = ngmyPaperCraftOfDeck(deck);
  final template = info == null ? null : info.craft.build(info.palette);
  for (var s = 0; s < deck.slides.length; s++) {
    final texts = _textsOf(deck.slides[s]);
    final tpl = template != null && s < template.length ? _textsOf(template[s]) : const <NgmySlideElement>[];
    for (var i = 0; i < texts.length; i++) {
      final v = answer.fields['${s + 1}.${i + 1}'];
      if (v == null || v.trim().isEmpty) continue;
      final e = texts[i];
      e.text = v.replaceAll('\r', '').trim();
      if (i < tpl.length) e.fontSize = tpl[i].fontSize;
      ngmyFitCraftText(e);
      changed = true;
    }
  }
  final to = _paletteNamed(answer.palette);
  if (to != null && info != null && to.name != info.palette.name && ngmyRecolorPaperCraft(deck, to)) changed = true;
  return changed;
}

// ---------------------------------------------------------------------------------------------------------------
// The create sheet (same look as Slides "Create with AI").
// ---------------------------------------------------------------------------------------------------------------

/// The AI sheet. With [design] (a template the user just chose) it shows that template's detail boxes and a box to
/// describe the paper; closing it or tapping Skip returns null, and the blank template opens instead.
Future<NgmySlideDeck?> showNgmyPaperCraftAiSheet(BuildContext context, {NgmyCraftPalette? palette, NgmyPaperCraft? design}) {
  return showModalBottomSheet<NgmySlideDeck>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _CraftAiSheet(palette: palette, design: design),
  );
}

class _CraftAiSheet extends StatefulWidget {
  const _CraftAiSheet({this.palette, this.design});
  final NgmyCraftPalette? palette;
  final NgmyPaperCraft? design;
  @override
  State<_CraftAiSheet> createState() => _CraftAiSheetState();
}

class _CraftAiSheetState extends State<_CraftAiSheet> {
  final _desc = TextEditingController();
  final _focus = FocusNode();
  final Map<String, TextEditingController> _details = {};
  String _language = 'auto';
  bool _busy = false;
  String _status = '';
  String? _error;

  /// The AI question about a missing detail (it asks once; the next Create fills placeholders instead).
  String? _question;
  bool _asked = false;

  /// The design the AI chose from a description (when the request did not name one).
  NgmyPaperCraft? _aiPicked;

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
    for (final c in _details.values) {
      c.dispose();
    }
    super.dispose();
  }

  NgmyPaperCraft? get _design => widget.design ?? ngmyFindPaperCraft(_desc.text) ?? _aiPicked;

  /// Opened right after choosing a template: details first, then "describe the paper".
  bool get _template => widget.design != null;

  Widget _descField() => TextField(
        key: const ValueKey('craft_ai_text'),
        controller: _desc,
        focusNode: _focus,
        minLines: 3,
        maxLines: 6,
        enabled: !_busy,
        onChanged: (_) => setState(() {}),
        style: const TextStyle(color: Colors.white, height: 1.35),
        decoration: InputDecoration(
          hintText: _template
              ? 'Example: a warm thank-you letter to my landlord for fixing the roof, signed by the whole family'
              : 'Example: number 1, a letter to Mr Juma at 12 Uhuru Street, Dar es Salaam...',
          hintStyle: const TextStyle(color: Colors.white38),
          filled: true,
          fillColor: Colors.white.withValues(alpha: 0.06),
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
        ),
      );

  TextEditingController _detail(String key) => _details.putIfAbsent(key, () => TextEditingController());

  Map<String, String> _typedDetails(NgmyPaperCraft? craft) {
    if (craft == null) return const {};
    return {
      for (final d in ngmyPaperCraftDetails(craft))
        if ((_details[d.key]?.text.trim() ?? '').isNotEmpty) d.key: _details[d.key]!.text.trim(),
    };
  }

  Future<void> _create() async {
    final d = _desc.text.trim();
    final design = _design;
    final typed = _typedDetails(design);
    if (d.isEmpty && typed.isEmpty && !_template) {
      setState(() => _error = 'Type a number, a design name or what you need first.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
      _status = 'Writing...';
    });
    try {
      final r = await ngmyFillPaperCraftWithAi(
        request: d.isEmpty ? 'Write design #${design!.number} ${design.name} nicely and professionally.' : d,
        language: _language,
        palette: widget.palette,
        details: typed,
        allowAsk: !_asked,
        design: design,
        onStatus: (s) {
          if (mounted) setState(() => _status = s);
        },
      );
      if (!mounted) return;
      if (r.deck != null) {
        Navigator.of(context).pop(r.deck);
        return;
      }
      setState(() {
        _busy = false;
        _asked = true;
        _question = r.ask;
        _aiPicked = r.craft;
      });
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = '$e';
        });
      }
    }
  }

  Widget _detailFields(NgmyPaperCraft craft) {
    final details = ngmyPaperCraftDetails(craft);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text('DETAILS FOR #${craft.number} ${craft.name.toUpperCase()}  (optional)',
            style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 0.8)),
        const SizedBox(height: 4),
        const Text('Type them here, or just put them in the description.', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
        const SizedBox(height: 8),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final d in details)
              SizedBox(
                width: d.multiline ? 640 : 300,
                child: TextField(
                  key: ValueKey('craft_detail_${d.key}'),
                  controller: _detail(d.key),
                  enabled: !_busy,
                  minLines: 1,
                  maxLines: d.multiline ? 3 : 1,
                  style: const TextStyle(color: Colors.white, fontSize: 13.5),
                  decoration: InputDecoration(
                    isDense: true,
                    labelText: d.label,
                    labelStyle: const TextStyle(color: Colors.white54, fontSize: 12.5),
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.05),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                  ),
                ),
              ),
          ],
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    const panel = Color(0xFF111827);
    final design = _design;
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
                Text(
                  _template ? '#${widget.design!.number} ${widget.design!.name}' : 'Create with AI',
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 0.3),
                ),
                const SizedBox(height: 4),
                Text(
                  _template
                      ? 'Fill in what you know and describe the paper you want. The AI writes and designs it in English or Swahili. Everything is optional: skip to write it yourself.'
                      : 'Say a design number, its name or what you need. The AI writes it for you in English or Swahili.',
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white60, fontSize: 13, height: 1.35),
                ),
                if (_template && design != null) ...[
                  const SizedBox(height: 16),
                  _detailFields(design),
                  const SizedBox(height: 16),
                  const Text('DESCRIBE THE PAPER YOU WANT',
                      style: TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 0.8)),
                  const SizedBox(height: 6),
                  _descField(),
                ],
                if (!_template) ...[
                const SizedBox(height: 18),
                Center(
                  child: GestureDetector(
                    onTap: () => _focus.requestFocus(),
                    child: Container(
                      width: 72,
                      height: 72,
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
                      child: const Icon(Icons.mic_rounded, color: Colors.white, size: 34),
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
                _descField(),
                ],
                if (design != null && !_template) ...[
                  const SizedBox(height: 8),
                  Row(
                    children: [
                      const Icon(Icons.check_circle_rounded, color: Color(0xFF4ADE80), size: 16),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text('Design #${design.number} ${design.name}',
                            style: const TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w700, fontSize: 12.5)),
                      ),
                    ],
                  ),
                ],
                if (_question != null) ...[
                  const SizedBox(height: 12),
                  Container(
                    key: const ValueKey('craft_ai_question'),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: const Color(0xFF14B87A).withValues(alpha: 0.16),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: const Color(0xFF14B87A).withValues(alpha: 0.45)),
                    ),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Icon(Icons.auto_awesome_rounded, color: Color(0xFF86EFAC), size: 18),
                        const SizedBox(width: 8),
                        Expanded(
                          child: Text(
                            '$_question\nAnswer in the boxes below or above, then tap Create. Tap Create again to leave it blank.',
                            style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.4),
                          ),
                        ),
                      ],
                    ),
                  ),
                ],
                if (design != null && !_template) ...[
                  const SizedBox(height: 14),
                  _detailFields(design),
                ],
                const SizedBox(height: 12),
                if (design == null)
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
                  height: 50,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      gradient: const LinearGradient(colors: [Color(0xFF14B87A), Color(0xFF0E9F6A)]),
                      boxShadow: [BoxShadow(color: const Color(0xFF14B87A).withValues(alpha: 0.4), blurRadius: 16)],
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
                if (_template) ...[
                  const SizedBox(height: 6),
                  TextButton(
                    key: const ValueKey('craft_ai_skip'),
                    onPressed: _busy ? null : () => Navigator.of(context).pop(),
                    child: const Text('Skip  -  open it blank and write it myself', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                  ),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// ---------------------------------------------------------------------------------------------------------------
// The chat that opens from the round AI button beside the page.
// ---------------------------------------------------------------------------------------------------------------

/// The chat of each open design (kept while the app is open), as (from the user, text).
final Map<String, List<(bool, String)>> _chats = {};

/// Opens the small AI chat for an open Fold & Cut design. [deck] gives the design as it is now; [onApply] makes the
/// change (inside the editor, so Undo works) and returns true when something changed.
Future<void> showNgmyPaperCraftAiChat(
  BuildContext context, {
  required NgmySlideDeck Function() deck,
  required bool Function(NgmyPaperCraftAiAnswer answer) onApply,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    barrierColor: Colors.black26,
    builder: (_) => _CraftAiChat(deck: deck, onApply: onApply),
  );
}

class _CraftAiChat extends StatefulWidget {
  const _CraftAiChat({required this.deck, required this.onApply});
  final NgmySlideDeck Function() deck;
  final bool Function(NgmyPaperCraftAiAnswer answer) onApply;
  @override
  State<_CraftAiChat> createState() => _CraftAiChatState();
}

class _CraftAiChatState extends State<_CraftAiChat> {
  final _input = TextEditingController();
  final _scroll = ScrollController();
  bool _busy = false;

  List<(bool, String)> get _log => _chats.putIfAbsent(widget.deck().id, () => []);

  static const _ideas = ['Change the name to Neema', 'Make it Swahili', 'Shorter message', 'Use the Ocean colours'];

  @override
  void dispose() {
    _input.dispose();
    _scroll.dispose();
    super.dispose();
  }

  void _toBottom() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_scroll.hasClients) _scroll.animateTo(_scroll.position.maxScrollExtent, duration: const Duration(milliseconds: 220), curve: Curves.easeOut);
    });
  }

  Future<void> _send([String? text]) async {
    final t = (text ?? _input.text).trim();
    if (t.isEmpty || _busy) return;
    final history = List<(bool, String)>.of(_log);
    setState(() {
      _busy = true;
      _log.add((true, t));
      _input.clear();
    });
    _toBottom();
    try {
      final answer = await ngmyAskPaperCraftEdit(deck: widget.deck(), request: t, history: history.length > 8 ? history.sublist(history.length - 8) : history);
      String reply;
      if (answer.ask != null) {
        reply = answer.ask!;
      } else {
        final changed = widget.onApply(answer);
        reply = changed ? (answer.reply ?? 'Done.') : 'I could not find anything to change. Try saying it another way.';
      }
      if (mounted) setState(() => _log.add((false, reply)));
    } catch (e) {
      if (mounted) setState(() => _log.add((false, '$e')));
    } finally {
      if (mounted) setState(() => _busy = false);
      _toBottom();
    }
  }

  @override
  Widget build(BuildContext context) {
    const panel = Color(0xFF111827);
    final log = _log;
    final info = ngmyPaperCraftOfDeck(widget.deck());
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Container(
          constraints: BoxConstraints(maxHeight: math.min(460, MediaQuery.sizeOf(context).height * 0.6), maxWidth: 520),
          decoration: const BoxDecoration(color: panel, borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
          child: SafeArea(
            top: false,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 12, 8, 4),
                  child: Row(
                    children: [
                      Container(
                        width: 30,
                        height: 30,
                        decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFF14B87A), Color(0xFF0E9F6A)])),
                        child: const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 16),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          info == null ? 'AI helper' : 'AI helper  -  #${info.craft.number} ${info.craft.name}',
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                        ),
                      ),
                      IconButton(onPressed: () => Navigator.of(context).pop(), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
                    ],
                  ),
                ),
                Flexible(
                  child: ListView(
                    controller: _scroll,
                    shrinkWrap: true,
                    padding: const EdgeInsets.fromLTRB(14, 4, 14, 8),
                    children: [
                      if (log.isEmpty)
                        const Padding(
                          padding: EdgeInsets.only(bottom: 8),
                          child: Text(
                            'Tell me what to change: a name, the address, the message, the language or the colours. The folds and cuts stay as they are.',
                            style: TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.4),
                          ),
                        ),
                      for (final (mine, text) in log)
                        Align(
                          alignment: mine ? Alignment.centerRight : Alignment.centerLeft,
                          child: Container(
                            margin: const EdgeInsets.only(bottom: 6),
                            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                            constraints: const BoxConstraints(maxWidth: 380),
                            decoration: BoxDecoration(
                              color: mine ? const Color(0xFF0E9F6A) : Colors.white.withValues(alpha: 0.08),
                              borderRadius: BorderRadius.circular(14),
                            ),
                            child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.35)),
                          ),
                        ),
                      if (_busy)
                        const Padding(
                          padding: EdgeInsets.only(top: 2, bottom: 6),
                          child: Row(children: [
                            SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2, color: Color(0xFF86EFAC))),
                            SizedBox(width: 8),
                            Text('Changing it...', style: TextStyle(color: Colors.white60, fontSize: 12)),
                          ]),
                        ),
                    ],
                  ),
                ),
                if (log.isEmpty)
                  SizedBox(
                    height: 36,
                    child: ListView(
                      scrollDirection: Axis.horizontal,
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      children: [
                        for (final idea in _ideas)
                          Padding(
                            padding: const EdgeInsets.only(right: 6),
                            child: ActionChip(
                              label: Text(idea, style: const TextStyle(fontSize: 11, color: Colors.white70)),
                              backgroundColor: Colors.white.withValues(alpha: 0.06),
                              side: BorderSide(color: Colors.white.withValues(alpha: 0.1)),
                              onPressed: _busy ? null : () => _input.text = idea,
                            ),
                          ),
                      ],
                    ),
                  ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
                  child: Row(
                    children: [
                      Expanded(
                        child: TextField(
                          key: const ValueKey('craft_ai_chat_input'),
                          controller: _input,
                          autofocus: true,
                          enabled: !_busy,
                          minLines: 1,
                          maxLines: 3,
                          textInputAction: TextInputAction.send,
                          onSubmitted: (_) => _send(),
                          style: const TextStyle(color: Colors.white, fontSize: 14),
                          decoration: InputDecoration(
                            isDense: true,
                            hintText: 'Type a change...',
                            hintStyle: const TextStyle(color: Colors.white38),
                            filled: true,
                            fillColor: Colors.white.withValues(alpha: 0.07),
                            border: OutlineInputBorder(borderRadius: BorderRadius.circular(99), borderSide: BorderSide.none),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      InkWell(
                        key: const ValueKey('craft_ai_chat_send'),
                        customBorder: const CircleBorder(),
                        onTap: _busy ? null : _send,
                        child: Container(
                          width: 40,
                          height: 40,
                          decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFF14B87A), Color(0xFF0E9F6A)])),
                          child: const Icon(Icons.arrow_upward_rounded, color: Colors.white, size: 20),
                        ),
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

/// The round AI button that sits beside an open Fold & Cut page.
class NgmyPaperCraftAiBubble extends StatelessWidget {
  const NgmyPaperCraftAiBubble({super.key, required this.onTap});
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: 'Ask the AI to change this',
      child: Material(
        color: Colors.transparent,
        shape: const CircleBorder(),
        child: InkWell(
          key: const ValueKey('craft_ai_bubble'),
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF14B87A), Color(0xFF0E9F6A)]),
              border: Border.all(color: Colors.white.withValues(alpha: 0.5), width: 1.5),
              boxShadow: [BoxShadow(color: const Color(0xFF14B87A).withValues(alpha: 0.45), blurRadius: 12)],
            ),
            child: const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 20),
          ),
        ),
      ),
    );
  }
}
