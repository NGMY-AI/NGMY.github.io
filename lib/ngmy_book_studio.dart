import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_ai_community_knowledge.dart';
import 'ngmy_ai_language.dart';
import 'ngmy_book_cover.dart';
import 'ngmy_invoice_print.dart';
import 'ngmy_print_booklet.dart';
import 'ngmy_slides_ai_maker.dart' show ngmySlidesFetchPicture;
import 'ngmy_slides_storage_idb_stub.dart' if (dart.library.html) 'ngmy_slides_storage_idb_web.dart';

// ─── Storage (this device) ────────────────────────────────────────────────

class NgmySavedBook {
  NgmySavedBook({required this.id, required this.doc, required this.updatedAt});
  final String id;
  NgmyBookDoc doc;
  DateTime updatedAt;

  Map<String, dynamic> toJson() => {'id': id, 'doc': doc.toJson(), 'updatedAt': updatedAt.toUtc().toIso8601String()};
  factory NgmySavedBook.fromJson(Map<String, dynamic> j) => NgmySavedBook(
        id: (j['id'] ?? '').toString(),
        doc: NgmyBookDoc.fromJson(j['doc'] is Map ? Map<String, dynamic>.from(j['doc'] as Map) : const {}),
        updatedAt: DateTime.tryParse((j['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

String _booksKey(String email) => 'ngmy_books_v1_${email.toLowerCase().trim()}';

List<NgmySavedBook> _decodeBooks(String? raw) {
  if (raw == null || raw.isEmpty) return [];
  try {
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((e) => NgmySavedBook.fromJson(Map<String, dynamic>.from(e))).where((b) => b.id.isNotEmpty).toList();
  } catch (_) {
    return [];
  }
}

/// Books live in the phone's IndexedDB (big room) with a copy in local storage. Local
/// storage alone is small and was already full from other app data on the web, so saves
/// failed quietly and books vanished. Both copies are merged; the newest edit of a book wins.
Future<List<NgmySavedBook>> loadNgmyBooks(String email) async {
  final byId = <String, NgmySavedBook>{};
  void take(List<NgmySavedBook> list) {
    for (final b in list) {
      final have = byId[b.id];
      if (have == null || b.updatedAt.isAfter(have.updatedAt)) byId[b.id] = b;
    }
  }

  try {
    take(_decodeBooks(await ngmySlidesIdbGet(_booksKey(email))));
  } catch (_) {}
  try {
    final prefs = await SharedPreferences.getInstance();
    take(_decodeBooks(prefs.getString(_booksKey(email))));
  } catch (_) {}
  final deleted = await _deletedBookIds(email);
  return byId.values.where((b) => !deleted.contains(b.id)).toList()..sort((a, b) => b.updatedAt.compareTo(a.updatedAt));
}

Future<bool> saveNgmyBooks(String email, List<NgmySavedBook> books) async {
  final json = jsonEncode(books.map((b) => b.toJson()).toList());
  var ok = false;
  try {
    ok = await ngmySlidesIdbPut(_booksKey(email), json);
  } catch (_) {}
  try {
    final prefs = await SharedPreferences.getInstance();
    ok = await prefs.setString(_booksKey(email), json) || ok;
  } catch (_) {
    // Local storage full — IndexedDB still has it.
  }
  return ok;
}

String _deletedKey(String email) => 'ngmy_books_deleted_v1_${email.toLowerCase().trim()}';

Future<Set<String>> _deletedBookIds(String email) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    return (prefs.getStringList(_deletedKey(email)) ?? const <String>[]).toSet();
  } catch (_) {
    return {};
  }
}

Future<void> deleteNgmyBook(String email, String id) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final ids = {...?prefs.getStringList(_deletedKey(email)), id};
    await prefs.setStringList(_deletedKey(email), ids.toList());
  } catch (_) {}
  final list = await loadNgmyBooks(email)
    ..removeWhere((b) => b.id == id);
  await saveNgmyBooks(email, list);
}

// ─── AI writer ────────────────────────────────────────────────────────────

/// The language rule for the AI. It follows what the USER typed (not the facts the app adds):
/// English in, English book; Swahili in, Swahili book; a named language wins.
String ngmyBookLanguageRule(String typed) {
  final t = typed.trim();
  final named = ngmyRequestedLanguage(t);
  if (named != null) {
    return '- LANGUAGE: write the WHOLE book, every title and sentence, in $named, with natural correct grammar. Do not mix in other languages (JSON keys stay as given).';
  }
  if (t.isEmpty) {
    return '- LANGUAGE: write the whole book in English.';
  }
  return '- LANGUAGE: write the WHOLE book in the same language as this text the user typed: """$t""". If it is English, the whole book is English; if it is Swahili, the whole book is Swahili; for any other language, use that language. The facts and notes given in the request are only information, not the language to write in. Do not mix languages (JSON keys stay as given).';
}

String ngmyBookAiPrompt({required String description, required int pages, String? languageHint}) {
  final templates = kNgmyCoverTemplates.map((t) => t.id).join(', ');
  return '''
You write printable books that are folded and stapled. Write a book from this request:
"""$description"""

Rules:
- Exactly $pages pages ("chapters"). Each page has a short title and 230-300 words of body text, so the printed page is full.
- Split the body into 3-5 paragraphs separated by a blank line. Plain words, no markdown, no emojis, no lists.
${ngmyBookLanguageRule(languageHint ?? description)}
${ngmyCommunityKnowledgeFor(languageHint ?? description)}
- Give every page an "image_query": 2-3 simple ENGLISH words for a real photo that fits it (e.g. "family dinner", "african village").
- Design the cover: "cover_template" is the best fit from: $templates (story = children's books, starry = bedtime/faith, vintage = history/family memories, royal = formal/gifts, photo/portrait/split = people and places, sunset/band/geo = modern and bold). "cover_query": 2-3 English words for a cover photo, or "" for none.
Reply with JSON only:
{"title":"...","subtitle":"...","cover_template":"...","cover_query":"...","chapters":[{"title":"...","body":"...","image_query":"..."}]}
''';
}

/// The AI often puts real line breaks inside a JSON string (the blank line between paragraphs),
/// which strict JSON refuses. This turns them into \n so the book still reads.
String ngmyEscapeJsonStrings(String s) {
  final b = StringBuffer();
  var inStr = false, esc = false;
  for (final u in s.runes) {
    final c = String.fromCharCode(u);
    if (inStr) {
      if (esc) {
        esc = false;
        b.write(c);
      } else if (c == r'\') {
        esc = true;
        b.write(c);
      } else if (c == '"') {
        inStr = false;
        b.write(c);
      } else if (c == '\n') {
        b.write(r'\n');
      } else if (c == '\r') {
        // dropped
      } else if (c == '\t') {
        b.write(r'\t');
      } else {
        b.write(c);
      }
    } else {
      if (c == '"') inStr = true;
      b.write(c);
    }
  }
  return b.toString();
}

/// Reads the AI's JSON (tolerates code fences and text around it).
NgmyBookDoc? ngmyParseBookAi(String text, {String author = ''}) {
  final start = text.indexOf('{');
  final end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    final j = jsonDecode(ngmyEscapeJsonStrings(text.substring(start, end + 1)));
    if (j is! Map) return null;
    final doc = NgmyBookDoc.fromJson(Map<String, dynamic>.from(j));
    final chapters = doc.chapters.where((c) => c.title.trim().isNotEmpty || c.body.trim().isNotEmpty).toList();
    if (chapters.isEmpty) return null;
    final template = '${j['cover_template'] ?? ''}'.trim();
    return NgmyBookDoc(
      title: doc.title,
      subtitle: doc.subtitle,
      author: author,
      chapters: chapters,
      cover: NgmyBookCover(template: kNgmyCoverTemplates.any((t) => t.id == template) ? template : 'royal'),
    );
  } catch (_) {
    return null;
  }
}

String _coverQueryOf(String text) {
  final m = RegExp(r'"cover_query"\s*:\s*"([^"]*)"').firstMatch(text);
  return m?.group(1)?.trim() ?? '';
}

/// Most pages the AI can write in one book.
const int kNgmyBookAiMaxPages = 100;

/// Writes the book. Up to 12 pages is one AI request; longer books (up to
/// [kNgmyBookAiMaxPages]) are planned first, outlined in parts and then written a few pages
/// at a time in parallel, so even a 500-page book comes out whole and in order.
/// [onStatus] gets a message and how far along it is (0-1).
Future<NgmyBookDoc> ngmyWriteBookWithAi({
  required String description,
  required int pages,
  String author = '',
  String? languageHint,
  void Function(String status, double progress)? onStatus,
}) async {
  pages = pages.clamp(1, kNgmyBookAiMaxPages);
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not set up yet. AI is not available right now. Please try again later.';
  final creds = ngmyParseAiCredentials(key);
  String? lastError;

  Future<String?> ask(String prompt) async {
    for (var attempt = 0; attempt < 2; attempt++) {
      // A page of writing takes a while: give the AI up to two and a half minutes, not the usual 18 seconds.
      final r = await ngmyAiGenerateWithCredentials(creds, prompt, timeout: const Duration(seconds: 150));
      if (r.text != null && r.text!.trim().isNotEmpty) return r.text;
      lastError = r.error;
    }
    return null;
  }

  Never fail() => throw lastError != null && ngmyIsOfflineOrNetworkError(lastError!)
      ? 'No internet connection — try again when you are online.'
      : (lastError != null && lastError!.toLowerCase().contains('timeout')
          ? 'The AI took too long. Try fewer pages, or try again in a moment.'
          : 'The AI could not write the book. Try describing it again.${lastError == null || lastError!.trim().isEmpty ? '' : '\n(${lastError!.trim()})'}');

  if (pages <= 12) {
    for (var attempt = 0; attempt < 2; attempt++) {
      onStatus?.call('Writing your $pages pages…', 0.15);
      final text = await ask(ngmyBookAiPrompt(description: description, pages: pages, languageHint: languageHint));
      if (text == null) continue;
      final doc = ngmyParseBookAi(text, author: author);
      if (doc != null) {
        onStatus?.call('Adding pictures…', 0.85);
        return _withPictures(doc, _coverQueryOf(text));
      }
    }
    fail();
  }

  final lang = '${ngmyBookLanguageRule(languageHint ?? description)}\n${ngmyCommunityKnowledgeFor(languageHint ?? description)}';
  final templates = kNgmyCoverTemplates.map((t) => t.id).join(', ');

  // 1. Plan: title, cover and the parts (about 50 pages each).
  final partCount = (pages / 50).ceil();
  onStatus?.call('Planning your $pages-page book…', 0.02);
  final planText = await ask('''
You plan a long printable book of $pages pages from this request:
"""$description"""
$lang
Split it into exactly $partCount parts that tell the whole book in order.
"cover_template": best fit from $templates. "cover_query": 2-3 English words for a cover photo.
Reply with JSON only:
{"title":"...","subtitle":"...","cover_template":"...","cover_query":"...","parts":[{"title":"...","summary":"2-3 sentences"}]}
''');
  final plan = planText == null ? null : _jsonObject(planText);
  if (plan == null) fail();
  final title = '${plan['title'] ?? ''}'.trim();
  final subtitle = '${plan['subtitle'] ?? ''}'.trim();
  final template = '${plan['cover_template'] ?? ''}'.trim();
  final parts = (plan['parts'] is List ? plan['parts'] as List : const []).whereType<Map>().toList();
  while (parts.length < partCount) {
    parts.add({'title': 'Part ${parts.length + 1}', 'summary': description});
  }

  // 2. Outline every page of every part.
  final outline = List<Map<String, String>?>.filled(pages, null);
  var outlined = 0;
  final outlineJobs = <Future<void> Function()>[];
  for (var p = 0; p < partCount; p++) {
    final from = p * 50;
    final count = math.min(50, pages - from);
    final part = parts[p];
    outlineJobs.add(() async {
      final text = await ask('''
Book: "$title" — $subtitle. Request: """$description"""
$lang
Outline part ${p + 1} of $partCount: "${part['title']}" — ${part['summary']}
This part is pages ${from + 1} to ${from + count} of $pages. Give exactly $count pages, in order, each with a short title, a one-sentence summary of what happens or is explained, and "image_query" (2-3 English words for a photo).
Reply with JSON only: {"pages":[{"title":"...","summary":"...","image_query":"..."}]}
''');
      final list = text == null ? const [] : (_jsonObject(text)?['pages'] is List ? _jsonObject(text)!['pages'] as List : const []);
      for (var i = 0; i < count; i++) {
        final m = i < list.length && list[i] is Map ? Map<String, dynamic>.from(list[i] as Map) : const <String, dynamic>{};
        outline[from + i] = {
          'title': '${m['title'] ?? ''}'.trim().isEmpty ? '${part['title']} ${i + 1}' : '${m['title']}'.trim(),
          'summary': '${m['summary'] ?? part['summary'] ?? ''}'.trim(),
          'image_query': '${m['image_query'] ?? ''}'.trim(),
        };
      }
      outlined++;
      onStatus?.call('Outlining part $outlined of $partCount…', 0.02 + 0.08 * outlined / partCount);
    });
  }
  await _pool(outlineJobs, 3);

  // 3. Write the pages, 6 at a time, 3 requests at once.
  final bodies = List<String>.filled(pages, '');
  var written = 0;
  final writeJobs = <Future<void> Function()>[];
  for (var from = 0; from < pages; from += 6) {
    final count = math.min(6, pages - from);
    writeJobs.add(() async {
      final before = from > 0 ? 'The page before was "${outline[from - 1]!['title']}": ${outline[from - 1]!['summary']}' : 'This is the start of the book.';
      final list = [
        for (var i = 0; i < count; i++) '${from + i + 1}. "${outline[from + i]!['title']}" — ${outline[from + i]!['summary']}',
      ].join('\n');
      final text = await ask('''
You are writing the printable book "$title" ($subtitle). Request: """$description"""
$lang
$before
Write these $count pages now, in order. Each body is 230-300 words in 3-5 paragraphs separated by a blank line, plain words, no markdown, no emojis. Continue the book naturally; do not repeat earlier pages.
$list
Reply with JSON only: {"pages":[{"title":"...","body":"..."}]}
''');
      final got = text == null ? const [] : (_jsonObject(text)?['pages'] is List ? _jsonObject(text)!['pages'] as List : const []);
      for (var i = 0; i < count; i++) {
        final m = i < got.length && got[i] is Map ? Map<String, dynamic>.from(got[i] as Map) : const <String, dynamic>{};
        final body = '${m['body'] ?? ''}'.trim();
        bodies[from + i] = body.isNotEmpty ? body : outline[from + i]!['summary'] ?? '';
      }
      written += count;
      onStatus?.call('Writing pages… $written of $pages', 0.1 + 0.8 * written / pages);
    });
  }
  await _pool(writeJobs, 3);
  if (bodies.every((b) => b.isEmpty)) fail();

  // Pictures: every page in short books, about 40 spread through long ones.
  final every = pages <= 40 ? 1 : (pages / 40).ceil();
  final chapters = [
    for (var i = 0; i < pages; i++)
      NgmyBookChapter(
        title: outline[i]!['title']!,
        body: bodies[i],
        imageQuery: i % every == 0 ? outline[i]!['image_query']! : '',
      ),
  ];
  onStatus?.call('Adding pictures…', 0.92);
  final doc = NgmyBookDoc(
    title: title.isEmpty ? 'My Book' : title,
    subtitle: subtitle,
    author: author,
    chapters: chapters,
    cover: NgmyBookCover(template: kNgmyCoverTemplates.any((t) => t.id == template) ? template : 'royal'),
  );
  return _withPictures(doc, '${plan['cover_query'] ?? ''}');
}

Map<String, dynamic>? _jsonObject(String text) {
  final start = text.indexOf('{');
  final end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    final j = jsonDecode(ngmyEscapeJsonStrings(text.substring(start, end + 1)));
    return j is Map ? Map<String, dynamic>.from(j) : null;
  } catch (_) {
    return null;
  }
}

/// Runs [jobs] with at most [workers] at the same time.
Future<void> _pool(List<Future<void> Function()> jobs, int workers) async {
  var next = 0;
  Future<void> worker() async {
    while (next < jobs.length) {
      final job = jobs[next++];
      try {
        await job();
      } catch (_) {}
    }
  }

  await Future.wait(List.generate(math.min(workers, jobs.length), (_) => worker()));
}

/// Fetches pictures for the pages that asked for one (and the cover), a few at a time;
/// pages whose picture can't be found simply print without one.
Future<NgmyBookDoc> _withPictures(NgmyBookDoc doc, String coverQuery) async {
  Future<String> pic(String q) async {
    if (q.trim().isEmpty) return '';
    try {
      final uri = await ngmySlidesFetchPicture(q).timeout(const Duration(seconds: 15));
      // The PDF can print JPEG and PNG only.
      if (uri == null || !(uri.startsWith('data:image/jpeg') || uri.startsWith('data:image/png') || uri.startsWith('data:image/jpg'))) return '';
      return uri;
    } catch (_) {
      return '';
    }
  }

  final results = List<String>.filled(doc.chapters.length, '');
  var coverPhoto = '';
  await _pool([
    for (var i = 0; i < doc.chapters.length; i++)
      if (doc.chapters[i].imageQuery.isNotEmpty) () async => results[i] = await pic(doc.chapters[i].imageQuery),
    () async => coverPhoto = await pic(coverQuery),
  ], 6);
  final chapters = [for (var i = 0; i < doc.chapters.length; i++) doc.chapters[i].copyWith(picture: results[i])];
  return doc.copyWith(chapters: chapters, cover: doc.cover.copyWith(photo: coverPhoto));
}

// ─── Print sheet (shared by Family Book and NGMY Slides) ──────────────────

const _kInk = Color(0xFF3D2E1F);
const _kAccent = Color(0xFF8B4513);

/// [onCoverChanged] is told when the cover is redesigned from the print screen.
Future<void> showNgmyBookPrintSheet(BuildContext context, NgmyBookDoc doc, {ValueChanged<NgmyBookCover>? onCoverChanged}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _BookPrintSheet(doc: doc, onCoverChanged: onCoverChanged),
  );
}

class _BookPrintSheet extends StatefulWidget {
  const _BookPrintSheet({required this.doc, this.onCoverChanged});
  final NgmyBookDoc doc;
  final ValueChanged<NgmyBookCover>? onCoverChanged;
  @override
  State<_BookPrintSheet> createState() => _BookPrintSheetState();
}

class _BookPrintSheetState extends State<_BookPrintSheet> {
  NgmyBookPaper _paper = NgmyBookPaper.letter;
  bool _booklet = true;
  bool _notes = false;
  ({int pages, int sheets, int filled})? _count;
  Uint8List? _bytes;
  int _job = 0;
  late NgmyBookDoc _doc = widget.doc;
  final _coverKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _prepare());
  }

  /// Draws the designed cover (as shown on screen) into a sharp picture for the PDF.
  Future<Uint8List?> _captureCover() async {
    try {
      final photo = ngmyDataUriBytes(_doc.cover.photo);
      if (photo != null && mounted) await precacheImage(MemoryImage(photo), context);
      await WidgetsBinding.instance.endOfFrame;
      final boundary = _coverKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) return null;
      final image = await boundary.toImage(pixelRatio: 3);
      final data = await image.toByteData(format: ui.ImageByteFormat.png);
      image.dispose();
      return data?.buffer.asUint8List();
    } catch (_) {
      return null;
    }
  }

  /// The PDF is made as soon as the sheet opens (and again when an option changes), so the
  /// Print tap opens it straight away — phones only allow that right inside a tap.
  Future<void> _prepare() async {
    final job = ++_job;
    setState(() {
      _bytes = null;
      _count = null;
    });
    try {
      final c = await ngmyBookletCount(_doc, _paper, notes: _notes);
      final coverPng = await _captureCover();
      final colors = ngmyCoverColors(_doc.cover);
      // Page titles use the cover's accent unless it is too light to read on white paper.
      final accent = colors.accent.computeLuminance() < 0.45
          ? colors.accent
          : (colors.bg1.computeLuminance() < 0.45 ? colors.bg1 : _kAccent);
      final bytes = await ngmyBuildBookletPdf(
        _doc,
        paper: _paper,
        booklet: _booklet,
        coverPng: coverPng,
        backColor: colors.bg1.toARGB32(),
        accentColor: accent.toARGB32(),
        notes: _notes,
      );
      if (!mounted || job != _job) return;
      setState(() {
        _count = c;
        _bytes = bytes;
      });
    } catch (e) {
      if (mounted && job == _job) {
        ScaffoldMessenger.maybeOf(context)?.showSnackBar(SnackBar(content: Text('Could not make the book: $e')));
      }
    }
  }

  Future<void> _designCover() async {
    final cover = await showNgmyBookCoverDesigner(context, _doc);
    if (cover == null || !mounted) return;
    setState(() => _doc = _doc.copyWith(cover: cover));
    widget.onCoverChanged?.call(cover);
    await WidgetsBinding.instance.endOfFrame;
    if (mounted) _prepare();
  }

  String get _fileName {
    final t = _doc.title.trim().isEmpty ? 'book' : _doc.title.trim();
    return '${t.replaceAll(RegExp(r'[^\w\- ]+'), '').replaceAll(' ', '_')}${_booklet ? '_booklet' : ''}.pdf';
  }

  bool get _isIPhone => kIsWeb && (defaultTargetPlatform == TargetPlatform.iOS);

  void _print() {
    final bytes = _bytes;
    if (bytes == null) return;
    final messenger = ScaffoldMessenger.maybeOf(context);
    if (_isIPhone) {
      // iPhone can't print a PDF from inside the app page: open it in the PDF viewer
      // (right inside the tap so it isn't blocked), where Share → Print prints it.
      downloadNgmyPdfBytes(bytes, _fileName).then((_) {
        messenger?.showSnackBar(const SnackBar(
          duration: Duration(seconds: 8),
          content: Text('Your book is open — tap the Share button (square with the arrow), then Print. Choose both sides.'),
        ));
      });
      return;
    }
    ngmyInvoicePrintPdfDirect(bytes, _fileName, preferPrintDialog: true).then((ok) async {
      if (ok) return;
      if (await ngmyInvoiceOpenPdfInBrowser(bytes)) return;
      await downloadNgmyPdfBytes(bytes, _fileName);
      messenger?.showSnackBar(const SnackBar(content: Text('Printing could not open here — the PDF was saved. Open it and print.')));
    });
  }

  void _save() {
    final bytes = _bytes;
    if (bytes == null) return;
    final messenger = ScaffoldMessenger.maybeOf(context);
    downloadNgmyPdfBytes(bytes, _fileName).then((msg) => messenger?.showSnackBar(SnackBar(content: Text(msg))));
  }

  Widget _choice(String label, bool selected, VoidCallback onTap, IconData icon) {
    return Expanded(
      child: GestureDetector(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 8),
          decoration: BoxDecoration(
            color: selected ? _kAccent : const Color(0xFFF3E9DA),
            borderRadius: BorderRadius.circular(12),
          ),
          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            Icon(icon, size: 16, color: selected ? Colors.white : _kInk),
            const SizedBox(width: 6),
            Flexible(
              child: Text(label,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.w800, color: selected ? Colors.white : _kInk)),
            ),
          ]),
        ),
      ),
    );
  }

  void _setOption(VoidCallback change) {
    setState(change);
    _prepare();
  }

  String _pageName(int i, int filled) {
    if (i == 0) return 'Cover';
    if (i >= filled) return 'blank';
    return 'p.$i';
  }

  /// Which pages land on each sheet — the folding math, shown so you can check your stack.
  Widget _sheetMap(({int pages, int sheets, int filled}) c) {
    final sides = ngmyBookletSides(c.pages);
    Widget side(String face, (int, int) s) => Expanded(
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 3),
            padding: const EdgeInsets.symmetric(vertical: 6),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8)),
            child: Column(children: [
              Text(face, style: TextStyle(fontSize: 10, color: _kInk.withValues(alpha: 0.55), fontWeight: FontWeight.w700)),
              const SizedBox(height: 2),
              Row(children: [
                Expanded(
                  child: Text(_pageName(s.$1, c.filled),
                      textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, color: _kInk, fontSize: 12)),
                ),
                Container(width: 1, height: 16, color: const Color(0xFF9CA3AF)),
                Expanded(
                  child: Text(_pageName(s.$2, c.filled),
                      textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, color: _kInk, fontSize: 12)),
                ),
              ]),
            ]),
          ),
        );
    return Column(children: [
      for (var i = 0; i < c.sheets; i++)
        Padding(
          padding: const EdgeInsets.only(bottom: 6),
          child: Row(children: [
            SizedBox(
              width: 66,
              child: Text(
                'Sheet ${i + 1}${i == 0 ? '\noutside' : i == c.sheets - 1 ? '\nmiddle' : ''}',
                style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w800, color: _kAccent, height: 1.2),
              ),
            ),
            side('front', sides[i * 2]),
            side('back', sides[i * 2 + 1]),
          ]),
        ),
    ]);
  }

  @override
  Widget build(BuildContext context) {
    final c = _count;
    final ready = _bytes != null;
    return SafeArea(
      top: false,
      child: Container(
        margin: const EdgeInsets.all(10),
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.88),
        decoration: BoxDecoration(color: const Color(0xFFFAF3E8), borderRadius: BorderRadius.circular(22)),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Flexible(
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(18, 14, 18, 8),
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Center(
                  child: Container(
                      width: 40, height: 4, decoration: BoxDecoration(color: Colors.black12, borderRadius: BorderRadius.circular(9))),
                ),
                const SizedBox(height: 12),
                const Row(children: [
                  Icon(Icons.menu_book_rounded, color: _kAccent),
                  SizedBox(width: 8),
                  Expanded(child: Text('Print as a book', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: _kInk))),
                ]),
                const SizedBox(height: 12),
                Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
                  // The real cover, captured into the PDF exactly as shown.
                  Container(
                    decoration: BoxDecoration(boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.2), blurRadius: 10, offset: const Offset(0, 4))]),
                    child: SizedBox(
                      width: 96,
                      height: 96 * 612 / 396,
                      child: FittedBox(
                        child: RepaintBoundary(
                          key: _coverKey,
                          child: NgmyBookCoverView(doc: _doc),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(width: 14),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      const _SheetDiagram(),
                      const SizedBox(height: 10),
                      OutlinedButton.icon(
                        onPressed: _designCover,
                        style: OutlinedButton.styleFrom(
                          foregroundColor: _kAccent,
                          side: const BorderSide(color: _kAccent),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                        ),
                        icon: const Icon(Icons.palette_rounded, size: 18),
                        label: const Text('Design cover', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ]),
                  ),
                ]),
                const SizedBox(height: 12),
                Row(children: [
                  _choice('Fold & staple', _booklet, () => _setOption(() => _booklet = true), Icons.auto_stories_rounded),
                  const SizedBox(width: 8),
                  _choice('Single pages', !_booklet, () => _setOption(() => _booklet = false), Icons.description_outlined),
                ]),
                const SizedBox(height: 8),
                Row(children: [
                  for (final p in NgmyBookPaper.values) ...[
                    _choice(ngmyBookPaperLabel(p), _paper == p, () => _setOption(() => _paper = p), Icons.crop_portrait_rounded),
                    if (p != NgmyBookPaper.values.last) const SizedBox(width: 8),
                  ],
                ]),
                SwitchListTile(
                  contentPadding: EdgeInsets.zero,
                  dense: true,
                  activeThumbColor: _kAccent,
                  value: _notes,
                  onChanged: (v) => _setOption(() => _notes = v),
                  title: const Text('Add Notes pages', style: TextStyle(fontWeight: FontWeight.w800, color: _kInk)),
                  subtitle: Text('Lined pages to write on at the end. Off: no Notes pages.',
                      style: TextStyle(color: _kInk.withValues(alpha: 0.65), fontSize: 12)),
                ),
                const SizedBox(height: 12),
                Text(
                  c == null
                      ? 'Getting your book ready…'
                      : _booklet
                          ? '${c.filled} book pages → ${c.sheets} sheet${c.sheets == 1 ? '' : 's'} of paper (4 pages per sheet).'
                          : '${c.filled} pages.',
                  style: const TextStyle(fontWeight: FontWeight.w800, color: _kInk),
                ),
                if (_booklet) ...[
                  const SizedBox(height: 6),
                  Text(
                    '1. Print on both sides — choose "flip on short edge" and "actual size" (100%).\n'
                    '2. Every sheet has a tiny label in the corner: Sheet 1, Sheet 2…\n'
                    '3. Put them inside each other: Sheet 1 on the outside, Sheet 2 inside it, and so on — the last sheet is the middle.\n'
                    '4. Fold on the dashed middle line and staple right on the line.',
                    style: TextStyle(color: _kInk.withValues(alpha: 0.8), height: 1.45, fontSize: 13),
                  ),
                  if (c != null) ...[
                    const SizedBox(height: 10),
                    _sheetMap(c),
                  ],
                ],
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 6, 18, 16),
            child: Row(children: [
              Expanded(
                child: OutlinedButton.icon(
                  onPressed: ready ? _save : null,
                  style: OutlinedButton.styleFrom(
                    foregroundColor: _kAccent,
                    side: const BorderSide(color: _kAccent),
                    padding: const EdgeInsets.symmetric(vertical: 13),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  icon: const Icon(Icons.download_rounded, size: 18),
                  label: const Text('Save PDF', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton.icon(
                  onPressed: ready ? _print : null,
                  style: FilledButton.styleFrom(
                    backgroundColor: _kAccent,
                    padding: const EdgeInsets.symmetric(vertical: 13),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  ),
                  icon: ready
                      ? const Icon(Icons.print_rounded, size: 18)
                      : const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white)),
                  label: const Text('Print', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
            ]),
          ),
        ]),
      ),
    );
  }
}

/// A sheet turned sideways with a page on each half and the dashed fold line.
class _SheetDiagram extends StatelessWidget {
  const _SheetDiagram();

  @override
  Widget build(BuildContext context) {
    Widget page(String n) => Expanded(
          child: Container(
            margin: const EdgeInsets.all(8),
            decoration: BoxDecoration(
              border: Border.all(color: _kInk.withValues(alpha: 0.15)),
              borderRadius: BorderRadius.circular(4),
            ),
            child: Center(
              child: Text(n, style: TextStyle(fontWeight: FontWeight.w900, color: _kInk.withValues(alpha: 0.55), fontSize: 13)),
            ),
          ),
        );
    return Center(
      child: Container(
        width: 170,
        height: 86,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(6),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 10, offset: const Offset(0, 4))],
        ),
        child: Stack(children: [
          Row(children: [page('Page'), page('Page')]),
          Center(child: CustomPaint(size: const Size(1, 86), painter: _DashPainter())),
        ]),
      ),
    );
  }
}

class _DashPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = const Color(0xFF9CA3AF)
      ..strokeWidth = 1;
    for (var y = 0.0; y < size.height; y += 8) {
      canvas.drawLine(Offset(0, y), Offset(0, (y + 4).clamp(0, size.height)), p);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ─── Book Studio (NGMY Slides → Book) ─────────────────────────────────────

Future<void> showNgmyBookStudio(BuildContext context, {required String userEmail}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(fullscreenDialog: true, builder: (_) => _BookStudioScreen(userEmail: userEmail)),
  );
}

class _BookStudioScreen extends StatefulWidget {
  const _BookStudioScreen({required this.userEmail});
  final String userEmail;
  @override
  State<_BookStudioScreen> createState() => _BookStudioScreenState();
}

class _BookStudioScreenState extends State<_BookStudioScreen> {
  static bool _isBlankBook(NgmySavedBook b) =>
      b.doc.title.trim() == 'My Book' && b.doc.chapters.every((c) => c.body.trim().isEmpty);

  List<NgmySavedBook> _books = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await loadNgmyBooks(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _books = list;
      _loading = false;
    });
  }

  Future<void> _saveChain = Future<void>.value();

  /// Saves one book: updates the list on screen at once, then writes it (writes run one
  /// after another, so a slow save can never overwrite a newer one).
  Future<void> _store(NgmySavedBook b) {
    b.updatedAt = DateTime.now();
    final i = _books.indexWhere((x) => x.id == b.id);
    // A new book that has nothing typed in yet is not created.
    if (i < 0 && _isBlankBook(b)) return _saveChain;
    if (i < 0) {
      _books.insert(0, b);
    } else {
      _books[i] = b;
    }
    // May be called while the editor is closing, so redraw on the next turn.
    Future.microtask(() {
      if (mounted) setState(() {});
    });
    _saveChain = _saveChain.then((_) async {
      final list = await loadNgmyBooks(widget.userEmail);
      final j = list.indexWhere((x) => x.id == b.id);
      if (j < 0) {
        list.insert(0, b);
      } else {
        list[j] = b;
      }
      await saveNgmyBooks(widget.userEmail, list);
    }).catchError((_) {});
    return _saveChain;
  }

  Future<void> _open(NgmySavedBook book, {bool isNew = false}) async {
    if (!mounted) return;
    await Navigator.of(context).push<void>(MaterialPageRoute(
      builder: (_) => _BookEditorScreen(book: book, onSave: _store),
    ));
    await _saveChain;
    await _reload();
  }

  void _newBook({NgmyBookDoc? doc}) {
    _open(
      NgmySavedBook(
        id: DateTime.now().microsecondsSinceEpoch.toString(),
        doc: doc ?? const NgmyBookDoc(title: 'My Book', chapters: [NgmyBookChapter(title: 'Chapter 1', body: '')]),
        updatedAt: DateTime.now(),
      ),
      isNew: true,
    );
  }

  Future<void> _writeWithAi() async {
    final doc = await showModalBottomSheet<NgmyBookDoc>(
      context: context,
      isScrollControlled: true,
      isDismissible: false,
      enableDrag: false,
      backgroundColor: Colors.transparent,
      builder: (_) => const _BookAiSheet(),
    );
    if (doc == null || !mounted) return;
    _newBook(doc: doc);
  }

  Future<void> _delete(NgmySavedBook b) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => Center(
        child: Material(
          color: Colors.transparent,
          child: Container(
            margin: const EdgeInsets.symmetric(horizontal: 32),
            constraints: const BoxConstraints(maxWidth: 340),
            decoration: BoxDecoration(
              color: const Color(0xFF241812),
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: const Color(0xFF4A2C1B)),
              boxShadow: const [BoxShadow(color: Color(0x99000000), blurRadius: 30, offset: Offset(0, 16))],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(22, 24, 22, 4),
                  child: Column(children: [
                    Container(
                      width: 56,
                      height: 56,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: const Color(0xFFEF4444).withValues(alpha: 0.14),
                      ),
                      child: const Icon(Icons.delete_outline_rounded, color: Color(0xFFF87171), size: 28),
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Delete this book?',
                      textAlign: TextAlign.center,
                      style: TextStyle(color: Color(0xFFFAF3E8), fontWeight: FontWeight.w900, fontSize: 19),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      '“${b.doc.title}” is removed from this device. This cannot be undone.',
                      textAlign: TextAlign.center,
                      style: const TextStyle(color: Color(0xFFD6B99A), fontSize: 14, height: 1.45),
                    ),
                  ]),
                ),
                const SizedBox(height: 22),
                Padding(
                  padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                  child: Row(children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: () => Navigator.pop(ctx, false),
                        style: OutlinedButton.styleFrom(
                          foregroundColor: const Color(0xFFFAF3E8),
                          side: const BorderSide(color: Color(0xFF6B4A33)),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Keep it', style: TextStyle(fontWeight: FontWeight.w800)),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        onPressed: () => Navigator.pop(ctx, true),
                        style: FilledButton.styleFrom(
                          backgroundColor: const Color(0xFFDC2626),
                          padding: const EdgeInsets.symmetric(vertical: 14),
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                        child: const Text('Delete', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                  ]),
                ),
              ],
            ),
          ),
        ),
      ),
    );
    if (ok != true) return;
    setState(() => _books.removeWhere((x) => x.id == b.id));
    await _saveChain;
    await deleteNgmyBook(widget.userEmail, b.id);
    await _reload();
  }

  Future<void> _bookMenu(NgmySavedBook b) async {
    final choice = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: Colors.transparent,
      builder: (ctx) => SafeArea(
        child: Container(
          margin: const EdgeInsets.fromLTRB(10, 10, 10, 12),
          padding: const EdgeInsets.fromLTRB(16, 16, 16, 14),
          decoration: BoxDecoration(
            color: const Color(0xFF241812),
            borderRadius: BorderRadius.circular(28),
            border: Border.all(color: const Color(0xFF4A2C1B)),
          ),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Container(
                width: 44,
                height: 44,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFF8B4513), Color(0xFFB45309)]),
                  borderRadius: BorderRadius.circular(14),
                ),
                child: const Icon(Icons.menu_book_rounded, color: Color(0xFFFAF3E8), size: 22),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(b.doc.title, maxLines: 1, overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: Color(0xFFFAF3E8), fontWeight: FontWeight.w900, fontSize: 16)),
                  const SizedBox(height: 2),
                  const Text('What would you like to do?', style: TextStyle(color: Color(0xFFD6B99A), fontSize: 12)),
                ]),
              ),
            ]),
            const SizedBox(height: 14),
            for (final (id, icon, label, sub) in const [
              ('open', Icons.edit_rounded, 'Open & write', 'Keep writing this book'),
              ('print', Icons.print_rounded, 'Print as a book', 'Fold and staple it'),
            ])
              _BookMenuRow(
                icon: icon,
                label: label,
                sub: sub,
                onTap: () => Navigator.pop(ctx, id),
              ),
            const SizedBox(height: 6),
            const Divider(color: Color(0xFF4A2C1B), height: 1),
            const SizedBox(height: 6),
            _BookMenuRow(
              icon: Icons.delete_outline_rounded,
              label: 'Delete book',
              sub: 'Remove it from this device',
              danger: true,
              onTap: () => Navigator.pop(ctx, 'delete'),
            ),
          ]),
        ),
      ),
    );
    if (!mounted) return;
    switch (choice) {
      case 'open':
        await _open(b);
      case 'print':
        await showNgmyBookPrintSheet(context, b.doc);
      case 'delete':
        await _delete(b);
    }
  }

  Widget _hero() {
    final samples = [
      const NgmyBookDoc(title: 'Our Story', cover: NgmyBookCover(template: 'vintage')),
      const NgmyBookDoc(title: 'Dream Big', cover: NgmyBookCover(template: 'starry')),
      const NgmyBookDoc(title: 'Little Lion', cover: NgmyBookCover(template: 'story')),
    ];
    Widget mini(NgmyBookDoc d, double angle, double dx) => Transform.translate(
          offset: Offset(dx, 0),
          child: Transform.rotate(
            angle: angle,
            child: Container(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(4),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 12, offset: const Offset(2, 6))],
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(4),
                child: SizedBox(width: 62, height: 62 * 612 / 396, child: FittedBox(child: NgmyBookCoverView(doc: d))),
              ),
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.fromLTRB(20, 20, 12, 20),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF7C2D12), Color(0xFFB45309), Color(0xFFF59E0B)]),
        boxShadow: [BoxShadow(color: const Color(0xFFB45309).withValues(alpha: 0.4), blurRadius: 24, offset: const Offset(0, 10))],
      ),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Make a book', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, height: 1.1)),
            const SizedBox(height: 8),
            Wrap(spacing: 6, runSpacing: 6, children: [
              for (final t in const ['Write', 'Design', 'Print & fold'])
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(999)),
                  child: Text(t, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
                ),
            ]),
            const SizedBox(height: 16),
            GestureDetector(
              onTap: () => _newBook(),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(999),
                  boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.2), blurRadius: 10, offset: const Offset(0, 4))],
                ),
                child: const Row(mainAxisSize: MainAxisSize.min, children: [
                  Icon(Icons.edit_rounded, color: Color(0xFF9A3412), size: 18),
                  SizedBox(width: 8),
                  Text('Write', style: TextStyle(color: Color(0xFF9A3412), fontWeight: FontWeight.w900, fontSize: 15)),
                ]),
              ),
            ),
          ]),
        ),
        SizedBox(
          width: 130,
          height: 110,
          child: Stack(alignment: Alignment.center, children: [
            mini(samples[0], -0.22, -30),
            mini(samples[2], 0.22, 30),
            mini(samples[1], 0, 0),
          ]),
        ),
      ]),
    );
  }

  Widget _bookCard(NgmySavedBook b) {
    final pages = b.doc.chapters.length;
    return GestureDetector(
      onTap: () => _open(b),
      onLongPress: () => _bookMenu(b),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        AspectRatio(
          aspectRatio: 396 / 612,
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(6),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 14, offset: const Offset(0, 6))],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: Stack(fit: StackFit.expand, children: [
                FittedBox(fit: BoxFit.cover, child: NgmyBookCoverView(doc: b.doc)),
                // Book spine shading.
                const Positioned(
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: 8,
                  child: DecoratedBox(
                    decoration: BoxDecoration(gradient: LinearGradient(colors: [Color(0x55000000), Color(0x00000000)])),
                  ),
                ),
                Positioned(
                  right: 4,
                  top: 4,
                  child: GestureDetector(
                    onTap: () => _bookMenu(b),
                    child: Container(
                      width: 26,
                      height: 26,
                      decoration: const BoxDecoration(color: Color(0x88000000), shape: BoxShape.circle),
                      child: const Icon(Icons.more_horiz_rounded, color: Colors.white, size: 18),
                    ),
                  ),
                ),
              ]),
            ),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          b.doc.title.trim().isEmpty ? 'Untitled Book' : b.doc.title.trim(),
          maxLines: 1,
          overflow: TextOverflow.ellipsis,
          style: const TextStyle(color: Color(0xFFFAF3E8), fontWeight: FontWeight.w800, fontSize: 13),
        ),
        Text('$pages page${pages == 1 ? '' : 's'}', style: const TextStyle(color: Color(0x99FAF3E8), fontSize: 11.5)),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1C130E),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: const Color(0xFFFAF3E8),
        elevation: 0,
        title: const Text('Books', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
        actions: [
          // Small AI icon in the corner: describe the book, the AI writes it.
          Padding(
            padding: const EdgeInsets.only(right: 12),
            child: Tooltip(
              message: 'Write with AI',
              child: GestureDetector(
                onTap: _writeWithAi,
                child: Container(
                  width: 36,
                  height: 36,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]),
                    boxShadow: [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.5), blurRadius: 12)],
                  ),
                  child: const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 18),
                ),
              ),
            ),
          ),
        ],
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator(color: Color(0xFFFAF3E8)))
          : CustomScrollView(slivers: [
              SliverPadding(
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 0),
                sliver: SliverToBoxAdapter(child: _hero()),
              ),
              SliverPadding(
                padding: const EdgeInsets.fromLTRB(18, 26, 18, 12),
                sliver: SliverToBoxAdapter(
                  child: Row(children: [
                    const Text('Your library', style: TextStyle(color: Color(0xFFFAF3E8), fontWeight: FontWeight.w900, fontSize: 18)),
                    const SizedBox(width: 8),
                    if (_books.isNotEmpty)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                        decoration: BoxDecoration(color: const Color(0x33F59E0B), borderRadius: BorderRadius.circular(999)),
                        child: Text('${_books.length}', style: const TextStyle(color: Color(0xFFFCD34D), fontWeight: FontWeight.w800, fontSize: 12)),
                      ),
                  ]),
                ),
              ),
              if (_books.isEmpty)
                const SliverToBoxAdapter(
                  child: Padding(
                    padding: EdgeInsets.fromLTRB(32, 30, 32, 40),
                    child: Column(children: [
                      Icon(Icons.auto_stories_rounded, color: Color(0x55FAF3E8), size: 56),
                      SizedBox(height: 10),
                      Text('Your books will live here.', textAlign: TextAlign.center, style: TextStyle(color: Color(0x99FAF3E8))),
                    ]),
                  ),
                )
              else
                SliverPadding(
                  padding: const EdgeInsets.fromLTRB(18, 0, 18, 30),
                  sliver: SliverGrid(
                    gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                      maxCrossAxisExtent: 170,
                      mainAxisSpacing: 20,
                      crossAxisSpacing: 16,
                      childAspectRatio: 0.52,
                    ),
                    delegate: SliverChildBuilderDelegate((_, i) => _bookCard(_books[i]), childCount: _books.length),
                  ),
                ),
            ]),
    );
  }
}

/// Opens "Write a book with AI". With [familyFacts] (everyone in a family tree), the AI uses
/// those people — names, dates, places, notes, who is married to and child of whom.
Future<NgmyBookDoc?> showNgmyBookAiSheet(BuildContext context, {String familyFacts = '', String familyName = ''}) {
  return showModalBottomSheet<NgmyBookDoc>(
    context: context,
    isScrollControlled: true,
    isDismissible: false,
    enableDrag: false,
    backgroundColor: Colors.transparent,
    builder: (_) => _BookAiSheet(familyFacts: familyFacts, familyName: familyName),
  );
}

class _BookAiSheet extends StatefulWidget {
  const _BookAiSheet({this.familyFacts = '', this.familyName = ''});
  final String familyFacts;
  final String familyName;
  @override
  State<_BookAiSheet> createState() => _BookAiSheetState();
}

class _BookAiSheetState extends State<_BookAiSheet> {
  final _desc = TextEditingController();
  final _author = TextEditingController();
  final _pagesCtl = TextEditingController(text: '10');
  bool _busy = false;
  String? _error;
  String _status = '';
  double _progress = 0;

  static const _quick = [3, 5, 8, 10, 25, 50, 100];
  bool get _family => widget.familyFacts.trim().isNotEmpty;
  List<String> get _ideas => _family
      ? const [
          'The story of our family, from the oldest to the youngest',
          'A tribute to our grandparents',
          'Hadithi ya familia yetu',
          'A children\'s book about our family',
        ]
      : const [
          'A children\'s story about a brave little lion',
          'Hadithi ya familia yetu kutoka Kigoma',
          'Our family history for the grandchildren',
          'A devotional: 30 days of hope',
        ];

  int get _pages => (int.tryParse(_pagesCtl.text.trim()) ?? 10).clamp(1, kNgmyBookAiMaxPages);

  @override
  void dispose() {
    _desc.dispose();
    _author.dispose();
    _pagesCtl.dispose();
    super.dispose();
  }

  String get _estimate {
    final p = _pages;
    if (p <= 12) return 'About a minute.';
    final minutes = (p / 18 * 0.4).ceil() + 1;
    return 'Long book — about $minutes minute${minutes == 1 ? '' : 's'}. Keep this open while it writes.';
  }

  Future<void> _go() async {
    final typed = _desc.text.trim();
    final d = _family
        ? '${typed.isEmpty ? 'A warm book about our family.' : typed}\n\n'
            'This book is about the ${widget.familyName.isEmpty ? 'family' : '${widget.familyName} family'} in my family tree. '
            'Use these real people and facts; mention ages and dates only as given here, never invent birth dates, deaths or names:\n'
            '${widget.familyFacts}'
        : typed;
    if (typed.isEmpty && !_family) {
      setState(() => _error = 'Say what the book is about.');
      return;
    }
    FocusScope.of(context).unfocus();
    setState(() {
      _busy = true;
      _error = null;
      _status = 'Starting…';
      _progress = 0.01;
    });
    try {
      final doc = await ngmyWriteBookWithAi(
        description: d,
        pages: _pages,
        languageHint: typed,
        author: _author.text.trim(),
        onStatus: (s, p) {
          if (mounted) {
            setState(() {
              _status = s;
              _progress = p;
            });
          }
        },
      );
      if (mounted) Navigator.pop(context, doc);
    } catch (e) {
      if (mounted) setState(() => _error = e.toString());
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  InputDecoration _deco(String hint, {IconData? icon}) => InputDecoration(
        hintText: hint,
        hintStyle: const TextStyle(color: Color(0x80FFFFFF)),
        prefixIcon: icon == null ? null : Icon(icon, color: const Color(0xB3FFFFFF), size: 20),
        filled: true,
        fillColor: Colors.white.withValues(alpha: 0.07),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
        focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Color(0xFFA78BFA), width: 1.5)),
        contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
      );

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.of(context).viewInsets.bottom;
    return PopScope(
      canPop: !_busy,
      child: Padding(
        padding: EdgeInsets.only(bottom: bottom),
        child: Container(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.92),
          decoration: const BoxDecoration(
            gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1E1036), Color(0xFF120A22)]),
            borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
          ),
          child: SafeArea(
            top: false,
            child: SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(9)))),
                const SizedBox(height: 18),
                Row(children: [
                  Container(
                    width: 46,
                    height: 46,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(14),
                      gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]),
                      boxShadow: [BoxShadow(color: const Color(0xFFDB2777).withValues(alpha: 0.45), blurRadius: 16)],
                    ),
                    child: const Icon(Icons.auto_awesome_rounded, color: Colors.white),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(_family ? 'Write your family book' : 'Write a book with AI',
                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                      const SizedBox(height: 2),
                      Text(
                          _family
                              ? 'The AI already knows everyone in your tree — names, dates, places and notes.'
                              : 'Any language — just write in it or ask for it.',
                          style: const TextStyle(color: Color(0xB3FFFFFF), fontSize: 12.5)),
                    ]),
                  ),
                  if (!_busy)
                    IconButton(
                      onPressed: () => Navigator.pop(context),
                      icon: const Icon(Icons.close_rounded, color: Colors.white70),
                    ),
                ]),
                const SizedBox(height: 18),
                if (_busy) ...[
                  const SizedBox(height: 10),
                  Center(
                    child: SizedBox(
                      width: 92,
                      height: 92,
                      child: Stack(alignment: Alignment.center, children: [
                        SizedBox.expand(
                          child: CircularProgressIndicator(
                            value: _progress.clamp(0.02, 1.0),
                            strokeWidth: 6,
                            backgroundColor: Colors.white12,
                            color: const Color(0xFFA78BFA),
                          ),
                        ),
                        Text('${(_progress * 100).clamp(1, 100).round()}%',
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                      ]),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(_status, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                  const SizedBox(height: 6),
                  Text(_estimate, textAlign: TextAlign.center, style: const TextStyle(color: Color(0x99FFFFFF), fontSize: 12)),
                  const SizedBox(height: 20),
                ] else ...[
                  TextField(
                    controller: _desc,
                    minLines: 3,
                    maxLines: 6,
                    style: const TextStyle(color: Colors.white, height: 1.4),
                    decoration: _deco(_family
                        ? 'Anything to add? (optional) — e.g. focus on grandma, make it for the kids, write it in Swahili…'
                        : 'What is the book about? Who is it for? Any names, places or style…'),
                  ),
                  const SizedBox(height: 10),
                  Wrap(spacing: 8, runSpacing: 8, children: [
                    for (final idea in _ideas)
                      GestureDetector(
                        onTap: () => setState(() => _desc.text = idea),
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                          decoration: BoxDecoration(
                            color: Colors.white.withValues(alpha: 0.06),
                            borderRadius: BorderRadius.circular(999),
                            border: Border.all(color: Colors.white12),
                          ),
                          child: Text(idea, style: const TextStyle(color: Color(0xD9FFFFFF), fontSize: 12)),
                        ),
                      ),
                  ]),
                  const SizedBox(height: 14),
                  TextField(controller: _author, style: const TextStyle(color: Colors.white), decoration: _deco('Author (optional)', icon: Icons.person_outline_rounded)),
                  const SizedBox(height: 18),
                  Row(children: [
                    const Text('Pages', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                    const Spacer(),
                    SizedBox(
                      width: 96,
                      child: TextField(
                        controller: _pagesCtl,
                        keyboardType: TextInputType.number,
                        textAlign: TextAlign.center,
                        onChanged: (_) => setState(() {}),
                        style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17),
                        decoration: _deco('10').copyWith(contentPadding: const EdgeInsets.symmetric(vertical: 9)),
                      ),
                    ),
                  ]),
                  const SizedBox(height: 10),
                  // Quick picks, all on one straight line.
                  Container(
                    padding: const EdgeInsets.all(4),
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(14)),
                    child: Row(children: [
                      for (final n in _quick)
                        Expanded(
                          child: GestureDetector(
                            onTap: () => setState(() => _pagesCtl.text = '$n'),
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 150),
                              height: 34,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                color: _pages == n ? const Color(0xFF8B5CF6) : Colors.transparent,
                                borderRadius: BorderRadius.circular(10),
                              ),
                              child: Text('$n',
                                  style: TextStyle(
                                      color: _pages == n ? Colors.white : const Color(0xB3FFFFFF), fontWeight: FontWeight.w800, fontSize: 12.5)),
                            ),
                          ),
                        ),
                    ]),
                  ),
                  const SizedBox(height: 8),
                  Text('Up to $kNgmyBookAiMaxPages pages. $_estimate', style: const TextStyle(color: Color(0x99FFFFFF), fontSize: 12)),
                  if (_error != null) ...[
                    const SizedBox(height: 12),
                    Text(_error!, style: const TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w600)),
                  ],
                  const SizedBox(height: 18),
                  GestureDetector(
                    onTap: _go,
                    child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 16),
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]),
                        borderRadius: BorderRadius.circular(18),
                        boxShadow: [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 6))],
                      ),
                      child: const Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                        Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 20),
                        SizedBox(width: 8),
                        Text('Write my book', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
                      ]),
                    ),
                  ),
                ],
              ]),
            ),
          ),
        ),
      ),
    );
  }
}

class _BookEditorScreen extends StatefulWidget {
  const _BookEditorScreen({required this.book, required this.onSave});
  final NgmySavedBook book;
  final Future<void> Function(NgmySavedBook) onSave;
  @override
  State<_BookEditorScreen> createState() => _BookEditorScreenState();
}

class _PageCtl {
  _PageCtl(this.title, this.body, this.picture);
  final TextEditingController title;
  final TextEditingController body;
  String picture;
  void dispose() {
    title.dispose();
    body.dispose();
  }
}

class _BookEditorScreenState extends State<_BookEditorScreen> {
  late final TextEditingController _title;
  late final TextEditingController _subtitle;
  late final TextEditingController _author;
  late NgmyBookCover _cover;
  final List<_PageCtl> _pages = [];
  Timer? _autosave;
  bool _dirty = false;

  TextEditingController _watch(TextEditingController c) => c..addListener(_changed);

  _PageCtl _page(String title, String body, String picture) =>
      _PageCtl(_watch(TextEditingController(text: title)), _watch(TextEditingController(text: body)), picture);

  /// Every change is saved on the phone a moment after you stop typing.
  void _changed() {
    _dirty = true;
    _autosave?.cancel();
    _autosave = Timer(const Duration(milliseconds: 700), () {
      if (mounted) _save();
    });
  }

  @override
  void initState() {
    super.initState();
    final d = widget.book.doc;
    _title = _watch(TextEditingController(text: d.title));
    _subtitle = _watch(TextEditingController(text: d.subtitle));
    _author = _watch(TextEditingController(text: d.author));
    _cover = d.cover;
    for (final c in d.chapters) {
      _pages.add(_page(c.title, c.body, c.picture));
    }
    if (_pages.isEmpty) _pages.add(_page('Page 1', '', ''));
  }

  @override
  void dispose() {
    _autosave?.cancel();
    if (_dirty) {
      widget.book.doc = _doc;
      widget.onSave(widget.book);
    }
    _title.dispose();
    _subtitle.dispose();
    _author.dispose();
    for (final p in _pages) {
      p.dispose();
    }
    super.dispose();
  }

  NgmyBookDoc get _doc => NgmyBookDoc(
        title: _title.text.trim(),
        subtitle: _subtitle.text.trim(),
        author: _author.text.trim(),
        cover: _cover,
        chapters: [for (final p in _pages) NgmyBookChapter(title: p.title.text.trim(), body: p.body.text, picture: p.picture)],
      );

  Future<void> _save() async {
    _autosave?.cancel();
    _dirty = false;
    widget.book.doc = _doc;
    await widget.onSave(widget.book);
  }

  void _addPage() {
    setState(() => _pages.add(_page('Page ${_pages.length + 1}', '', '')));
    _changed();
  }

  void _move(int i, int dir) {
    final j = i + dir;
    if (j < 0 || j >= _pages.length) return;
    setState(() {
      final t = _pages[i];
      _pages[i] = _pages[j];
      _pages[j] = t;
    });
    _changed();
  }

  void _remove(int i) {
    final p = _pages.removeAt(i);
    setState(() {});
    _changed();
    WidgetsBinding.instance.addPostFrameCallback((_) => p.dispose());
  }

  Future<void> _pickPicture(_PageCtl p) async {
    try {
      final x = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1400, imageQuality: 80);
      if (x == null) return;
      final bytes = await x.readAsBytes();
      final name = x.name.toLowerCase();
      // The PDF prints JPEG and PNG.
      final mime = name.endsWith('.png') ? 'image/png' : 'image/jpeg';
      setState(() => p.picture = 'data:$mime;base64,${base64Encode(bytes)}');
      _changed();
    } catch (_) {}
  }

  Future<void> _designCover() async {
    final cover = await showNgmyBookCoverDesigner(context, _doc);
    if (cover == null || !mounted) return;
    setState(() => _cover = cover);
    _changed();
  }

  InputDecoration _deco(String label) => InputDecoration(
        labelText: label,
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
      );

  Widget _coverCard() {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: const Color(0xFF2B1D14), borderRadius: BorderRadius.circular(18)),
      child: Row(children: [
        GestureDetector(
          onTap: _designCover,
          child: Container(
            decoration: BoxDecoration(boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 12, offset: const Offset(0, 5))]),
            child: SizedBox(width: 92, height: 92 * 612 / 396, child: FittedBox(child: NgmyBookCoverView(doc: _doc))),
          ),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Cover', style: TextStyle(color: Color(0xFFFAF3E8), fontWeight: FontWeight.w900, fontSize: 16)),
            const SizedBox(height: 4),
            Text('${ngmyCoverTemplate(_cover.template).name} template · pick from 10, change colours, add your picture.',
                style: const TextStyle(color: Color(0xB3FAF3E8), fontSize: 12, height: 1.35)),
            const SizedBox(height: 10),
            FilledButton.icon(
              style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB45309)),
              onPressed: _designCover,
              icon: const Icon(Icons.palette_rounded, size: 18),
              label: const Text('Design cover', style: TextStyle(fontWeight: FontWeight.w800)),
            ),
          ]),
        ),
      ]),
    );
  }

  Widget _pictureRow(_PageCtl p) {
    final bytes = ngmyDataUriBytes(p.picture);
    if (bytes == null) {
      return Align(
        alignment: Alignment.centerLeft,
        child: TextButton.icon(
          onPressed: () => _pickPicture(p),
          icon: const Icon(Icons.add_photo_alternate_outlined, size: 18, color: _kAccent),
          label: const Text('Add a picture', style: TextStyle(color: _kAccent, fontWeight: FontWeight.w700)),
        ),
      );
    }
    return Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Stack(children: [
        ClipRRect(
          borderRadius: BorderRadius.circular(12),
          child: Image.memory(bytes, height: 140, width: double.infinity, fit: BoxFit.cover, gaplessPlayback: true),
        ),
        Positioned(
          right: 6,
          top: 6,
          child: Row(children: [
            _roundBtn(Icons.swap_horiz_rounded, () => _pickPicture(p)),
            const SizedBox(width: 6),
            _roundBtn(Icons.close_rounded, () {
              setState(() => p.picture = '');
              _changed();
            }),
          ]),
        ),
      ]),
    );
  }

  Widget _roundBtn(IconData icon, VoidCallback onTap) => Material(
        color: Colors.black54,
        shape: const CircleBorder(),
        child: InkWell(
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: Padding(padding: const EdgeInsets.all(6), child: Icon(icon, color: Colors.white, size: 18)),
        ),
      );

  Future<void> _print() async {
    await _save();
    if (!mounted) return;
    await showNgmyBookPrintSheet(context, _doc, onCoverChanged: (c) {
      if (!mounted) return;
      setState(() => _cover = c);
      _changed();
    });
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      onPopInvokedWithResult: (didPop, _) {
        if (didPop) _save();
      },
      child: Scaffold(
        backgroundColor: const Color(0xFFF3E9DA),
        appBar: AppBar(
          backgroundColor: const Color(0xFF2B1D14),
          foregroundColor: const Color(0xFFFAF3E8),
          title: const Text('Write your book', style: TextStyle(fontWeight: FontWeight.w900)),
          actions: [
            Padding(
              padding: const EdgeInsets.only(right: 4),
              child: TextButton.icon(
                onPressed: _print,
                style: TextButton.styleFrom(foregroundColor: const Color(0xFFFDE68A)),
                icon: const Icon(Icons.print_rounded, size: 20),
                label: const Text('Print', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
            IconButton(
              tooltip: 'Save',
              icon: const Icon(Icons.check_rounded),
              onPressed: () async {
                await _save();
                if (context.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Book saved on this device.')));
                }
              },
            ),
          ],
        ),
        floatingActionButton: FloatingActionButton.extended(
          backgroundColor: _kAccent,
          foregroundColor: Colors.white,
          onPressed: _addPage,
          icon: const Icon(Icons.add_rounded),
          label: const Text('Add page', style: TextStyle(fontWeight: FontWeight.w800)),
        ),
        body: ListView(
          padding: const EdgeInsets.fromLTRB(14, 14, 14, 90),
          children: [
            _coverCard(),
            const SizedBox(height: 14),
            TextField(controller: _title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 18), decoration: _deco('Book title')),
            const SizedBox(height: 8),
            TextField(controller: _subtitle, decoration: _deco('Subtitle (optional)')),
            const SizedBox(height: 8),
            TextField(controller: _author, decoration: _deco('Author (optional)')),
            const SizedBox(height: 16),
            for (var i = 0; i < _pages.length; i++)
              Container(
                key: ObjectKey(_pages[i]),
                margin: const EdgeInsets.only(bottom: 12),
                padding: const EdgeInsets.fromLTRB(12, 8, 8, 12),
                decoration: BoxDecoration(
                  color: const Color(0xFFFAF3E8),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: _kAccent.withValues(alpha: 0.18)),
                ),
                child: Column(children: [
                  Row(children: [
                    Text('Page ${i + 1}', style: const TextStyle(fontWeight: FontWeight.w900, color: _kAccent)),
                    const Spacer(),
                    IconButton(visualDensity: VisualDensity.compact, tooltip: 'Move up', onPressed: i == 0 ? null : () => _move(i, -1), icon: const Icon(Icons.arrow_upward_rounded, size: 18)),
                    IconButton(visualDensity: VisualDensity.compact, tooltip: 'Move down', onPressed: i == _pages.length - 1 ? null : () => _move(i, 1), icon: const Icon(Icons.arrow_downward_rounded, size: 18)),
                    IconButton(visualDensity: VisualDensity.compact, tooltip: 'Remove page', onPressed: _pages.length == 1 ? null : () => _remove(i), icon: Icon(Icons.delete_outline_rounded, size: 18, color: Colors.red.shade400)),
                  ]),
                  TextField(controller: _pages[i].title, style: const TextStyle(fontWeight: FontWeight.w800), decoration: _deco('Title')),
                  const SizedBox(height: 6),
                  _pictureRow(_pages[i]),
                  TextField(
                    controller: _pages[i].body,
                    minLines: 5,
                    maxLines: null,
                    decoration: _deco('Write here… long pages flow onto the next paper page'),
                  ),
                ]),
              ),
          ],
        ),
      ),
    );
  }
}

/// One row in the book menu: an icon in a warm square, a title and a short line under it.
class _BookMenuRow extends StatelessWidget {
  const _BookMenuRow({required this.icon, required this.label, required this.sub, required this.onTap, this.danger = false});
  final IconData icon;
  final String label;
  final String sub;
  final VoidCallback onTap;
  final bool danger;

  @override
  Widget build(BuildContext context) {
    final accent = danger ? const Color(0xFFF87171) : const Color(0xFFFAF3E8);
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              color: danger ? const Color(0xFFEF4444).withValues(alpha: 0.08) : Colors.white.withValues(alpha: 0.04),
            ),
            child: Row(children: [
              Container(
                width: 40,
                height: 40,
                decoration: BoxDecoration(
                  color: danger ? const Color(0xFFEF4444).withValues(alpha: 0.16) : const Color(0xFFB45309).withValues(alpha: 0.22),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: accent, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(label, style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 15)),
                  const SizedBox(height: 2),
                  Text(sub, style: const TextStyle(color: Color(0xFFD6B99A), fontSize: 12)),
                ]),
              ),
              Icon(Icons.chevron_right_rounded, color: accent.withValues(alpha: 0.6)),
            ]),
          ),
        ),
      ),
    );
  }
}
