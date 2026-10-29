import 'dart:convert';
import 'dart:typed_data';

import 'ngmy_ai_client.dart';
import 'ngmy_ai_language.dart';
import 'ngmy_book_studio.dart' show ngmyBookLanguageRule, ngmyEscapeJsonStrings;
import 'ngmy_master_knowledge.dart';
import 'ngmy_news_paper.dart';

/// What the newspaper is called by default in each design.
String ngmyNewsPaperNameFor(NgmyNewsTemplate t) => switch (t.id) {
      'gazette' => 'The NGMY Gazette',
      'chronicle' => 'The NGMY Chronicle',
      'times' => 'The NGMY Times',
      'daily' => 'The NGMY Daily',
      'tabloid' => 'The Big NGMY',
      'modern' => 'NGMY Digest',
      'midnight' => 'The Midnight NGMY',
      _ => 'The NGMY Herald',
    };

/// The ideas shown as quick choices under "What should it be about?".
const List<(String, String)> kNgmyNewsIdeas = [
  ('The NGMY app', 'Write the front-page story about the NGMY app and everything it offers.'),
  ('KB PABLO QR, our CEO', 'Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.'),
  ('Civic Registry', 'Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.'),
  ('NGMY Advisors', 'Write about the NGMY Advisors, the AI advisors who help members.'),
  ('Growth Income', 'Write about Growth Income, the wallet and how members earn on work days.'),
  ('Core Protocol studios', 'Write about the Core Protocol studios, the Body Explorer and the learning labs.'),
  ('Surprise me', ''),
];

class NgmyNewsEdit {
  const NgmyNewsEdit({required this.message, required this.doc, required this.changed});
  final String message;
  final NgmyNewsDoc doc;
  final bool changed;
}

String _mime(Uint8List b) {
  if (b.length > 3 && b[0] == 0x89 && b[1] == 0x50) return 'image/png';
  if (b.length > 11 && b[8] == 0x57 && b[9] == 0x45) return 'image/webp';
  return 'image/jpeg';
}

Map<String, dynamic>? _json(String text) {
  final a = text.indexOf('{'), z = text.lastIndexOf('}');
  if (a < 0 || z <= a) return null;
  try {
    final j = jsonDecode(ngmyEscapeJsonStrings(text.substring(a, z + 1)));
    return j is Map ? Map<String, dynamic>.from(j) : null;
  } catch (_) {
    return null;
  }
}

Future<String> _ask(String prompt, Uint8List? photo) async {
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not available right now. Please try again later.';
  final creds = ngmyParseAiCredentials(key);
  final images = photo == null ? const <NgmyAiImagePart>[] : [(mimeType: _mime(photo), data: base64Encode(photo))];
  String? error;
  for (var attempt = 0; attempt < 2; attempt++) {
    final r = await ngmyAiGenerateWithCredentials(creds, prompt, images: images, kind: 'news', timeout: const Duration(seconds: 150));
    if (r.text != null && r.text!.trim().isNotEmpty) return r.text!;
    error = r.error;
  }
  throw error != null && ngmyIsOfflineOrNetworkError(error) ? 'No internet connection. Try again when you are online.' : 'The AI could not do that just now. Try again.';
}

/// What a professional human journalist does and does not do. Keeps the English clean and natural.
const String _styleRules = '''
- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.
- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.
- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.''';

bool _isSwahili(String text) => ngmyDetectTextLanguage(text) == 'sw' || RegExp(r'swahili|kiswahili', caseSensitive: false).hasMatch(text);

/// A second look by a native Swahili editor, like the one used for the family books, so the Swahili reads as if a good
/// Swahili journalist wrote it. If the AI fails, the page is kept exactly as it was.
Future<NgmyNewsDoc> ngmyPolishSwahiliNews(NgmyNewsDoc doc) async {
  try {
    final prompt = '''
You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.
The newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people's names with normal capitals, except KB PABLO QR.
$kNgmySwahiliStyleGuide
Page: ${jsonEncode(doc.toJson())}
Reply with JSON only, with exactly the same fields: $_jsonShape
''';
    final text = await _ask(prompt, null);
    final obj = _json(text);
    if (obj == null) return doc;
    final next = doc.applyJson(obj);
    if (next.body.isEmpty || next.body.join(' ').length < doc.body.join(' ').length * 0.5) return doc;
    return next;
  } catch (_) {
    return doc;
  }
}

const String _jsonShape = '{"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}';

String _rules(String typed) => '''
- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.
- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.
- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.
- Never mention secret or admin details, passwords or the price list.
$_styleRules
${ngmyBookLanguageRule(typed).replaceAll('book', 'newspaper')}${_isSwahili(typed) ? kNgmySwahiliStyleGuide : ''}''';

/// Writes a whole newspaper page. The picture (if any) is shown to the AI so the caption and story fit it.
Future<NgmyNewsDoc> ngmyWriteNews({required NgmyNewsTemplate template, Uint8List? photo, String request = '', String? paper}) async {
  final name = paper ?? ngmyNewsPaperNameFor(template);
  final ask = request.trim().isEmpty
      ? 'Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO.'
      : request.trim();
  final prompt = '''
You are the editor-in-chief of a newspaper called "$name". Write its front-page story in the voice of ${template.voice}.
${ngmyMasterKnowledge()}

WHAT THE OWNER ASKED FOR: """$ask"""
${photo == null ? 'There is no picture yet: write the caption as a short line about the story.' : 'A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you.'}
Rules:
${_rules(ask)}
Reply with JSON only, in exactly this shape: $_jsonShape
''';
  final text = await _ask(prompt, photo);
  final obj = _json(text);
  if (obj == null) throw 'The AI sent something I could not read. Try again.';
  final doc = NgmyNewsDoc(paper: name).applyJson(obj);
  if (doc.body.isEmpty) throw 'The AI did not write a story. Try again.';
  return _isSwahili('$ask ${doc.body.join(' ')}') && ngmyDetectTextLanguage(doc.body.join(' ')) == 'sw' ? ngmyPolishSwahiliNews(doc) : doc;
}

/// The owner talks to the AI about the page: a question gets an answer, a change request edits only what was asked.
Future<NgmyNewsEdit> ngmyEditNews({
  required NgmyNewsDoc doc,
  required NgmyNewsTemplate template,
  required String instruction,
  Uint8List? photo,
  List<(String, String)> history = const [],
}) async {
  final talk = [for (final h in history.length > 6 ? history.sublist(history.length - 6) : history) '${h.$1}: ${h.$2}'].join('\n');
  final prompt = '''
You are the editor-in-chief of the newspaper "${doc.paper}", written in the voice of ${template.voice}. The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).
${ngmyMasterKnowledge()}

THE PAGE NOW: ${jsonEncode(doc.toJson())}
${talk.isEmpty ? '' : 'EARLIER IN THIS CONVERSATION:\n$talk\n'}
THE OWNER SAYS: """$instruction"""
Rules:
${_rules(instruction)}
- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.
Reply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.
''';
  final text = await _ask(prompt, photo);
  final obj = _json(text);
  if (obj == null) throw 'The AI sent something I could not read. Try again.';
  final changes = obj['changes'];
  var next = doc;
  var changed = false;
  if (changes is Map && changes.isNotEmpty) {
    next = doc.applyJson(Map<String, dynamic>.from(changes));
    changed = jsonEncode(next.toJson()) != jsonEncode(doc.toJson());
  }
  if (changed && ngmyDetectTextLanguage(next.body.join(' ')) == 'sw') next = await ngmyPolishSwahiliNews(next);
  return NgmyNewsEdit(message: '${obj['message'] ?? (changed ? 'Done.' : 'Okay.')}'.trim(), doc: next, changed: changed);
}
