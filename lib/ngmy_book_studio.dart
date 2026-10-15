import 'dart:async';
import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_ai_client.dart';
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

String ngmyBookAiPrompt({required String description, required int pages}) {
  final templates = kNgmyCoverTemplates.map((t) => t.id).join(', ');
  return '''
You write printable books that are folded and stapled. Write a book from this request:
"""$description"""

Rules:
- Exactly $pages pages ("chapters"). Each page has a short title and 230-300 words of body text, so the printed page is full.
- Split the body into 3-5 paragraphs separated by a blank line. Plain words, no markdown, no emojis, no lists.
- LANGUAGE: if the request names a language (e.g. "in Swahili", "kwa Kiswahili", "in English"), write the WHOLE book in it. Otherwise write in the language the request is written in.
${ngmyLanguageDirective(description)}
- Give every page an "image_query": 2-3 simple ENGLISH words for a real photo that fits it (e.g. "family dinner", "african village").
- Design the cover: "cover_template" is the best fit from: $templates (story = children's books, starry = bedtime/faith, vintage = history/family memories, royal = formal/gifts, photo/portrait/split = people and places, sunset/band/geo = modern and bold). "cover_query": 2-3 English words for a cover photo, or "" for none.
Reply with JSON only:
{"title":"...","subtitle":"...","cover_template":"...","cover_query":"...","chapters":[{"title":"...","body":"...","image_query":"..."}]}
''';
}

/// Reads the AI's JSON (tolerates code fences and text around it).
NgmyBookDoc? ngmyParseBookAi(String text, {String author = ''}) {
  final start = text.indexOf('{');
  final end = text.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  try {
    final j = jsonDecode(text.substring(start, end + 1));
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

Future<NgmyBookDoc> ngmyWriteBookWithAi({
  required String description,
  required int pages,
  String author = '',
  void Function(String status)? onStatus,
}) async {
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not set up yet. Ask the admin to turn on AI.';
  final creds = ngmyParseAiCredentials(key);
  String? lastError;
  for (var attempt = 0; attempt < 2; attempt++) {
    onStatus?.call('Writing your $pages pages…');
    final r = await ngmyAiGenerateWithCredentials(creds, ngmyBookAiPrompt(description: description, pages: pages));
    if (r.text != null) {
      final doc = ngmyParseBookAi(r.text!, author: author);
      if (doc != null) {
        onStatus?.call('Adding pictures…');
        return _withPictures(doc, _coverQueryOf(r.text!));
      }
    } else {
      lastError = r.error;
    }
  }
  throw lastError != null && ngmyIsOfflineOrNetworkError(lastError)
      ? 'No internet connection — try again when you are online.'
      : 'The AI could not write the book. Try describing it again.';
}

/// Fetches a picture for each page (and the cover) in parallel; pages whose picture can't be
/// found simply print without one.
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

  final results = await Future.wait([
    for (final c in doc.chapters) pic(c.imageQuery),
    pic(coverQuery),
  ]);
  final chapters = [for (var i = 0; i < doc.chapters.length; i++) doc.chapters[i].copyWith(picture: results[i])];
  final coverPhoto = results.last;
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
      final c = await ngmyBookletCount(_doc, _paper);
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
    if (isNew) await _store(book);
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
    final doc = await showDialog<NgmyBookDoc>(context: context, builder: (_) => const _BookAiDialog());
    if (doc == null || !mounted) return;
    _newBook(doc: doc);
  }

  Future<void> _delete(NgmySavedBook b) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Delete this book?'),
        content: Text('“${b.doc.title}” will be removed from this device.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: Colors.red.shade700),
            onPressed: () => Navigator.pop(ctx, true),
            child: const Text('Delete'),
          ),
        ],
      ),
    );
    if (ok != true) return;
    setState(() => _books.removeWhere((x) => x.id == b.id));
    await _saveChain;
    await deleteNgmyBook(widget.userEmail, b.id);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF2B1D14),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        foregroundColor: const Color(0xFFFAF3E8),
        elevation: 0,
        title: const Text('Books', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator(color: Color(0xFFFAF3E8)))
          : ListView(
              padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
              children: [
                const Text(
                  'Write a book with as many pages as you like, then print it to fold and staple — '
                  'two pages on each side of the paper, a line down the middle.',
                  style: TextStyle(color: Color(0xCCFAF3E8), height: 1.4),
                ),
                const SizedBox(height: 14),
                Row(children: [
                  Expanded(
                    child: _BigButton(
                      icon: Icons.edit_note_rounded,
                      label: 'Write it myself',
                      colors: const [Color(0xFF8B4513), Color(0xFFB45309)],
                      onTap: () => _newBook(),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: _BigButton(
                      icon: Icons.auto_awesome_rounded,
                      label: 'Write with AI',
                      colors: const [Color(0xFF8B5CF6), Color(0xFFDB2777)],
                      onTap: _writeWithAi,
                    ),
                  ),
                ]),
                const SizedBox(height: 18),
                if (_books.isEmpty)
                  const Padding(
                    padding: EdgeInsets.only(top: 30),
                    child: Center(child: Text('No books yet.', style: TextStyle(color: Color(0x99FAF3E8)))),
                  ),
                for (final b in _books)
                  Card(
                    color: const Color(0xFFFAF3E8),
                    margin: const EdgeInsets.only(bottom: 10),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    child: ListTile(
                      onTap: () => _open(b),
                      leading: ClipRRect(
                        borderRadius: BorderRadius.circular(3),
                        child: SizedBox(width: 34, height: 34 * 612 / 396, child: FittedBox(child: NgmyBookCoverView(doc: b.doc))),
                      ),
                      title: Text(b.doc.title.trim().isEmpty ? 'Untitled Book' : b.doc.title,
                          style: const TextStyle(fontWeight: FontWeight.w900, color: _kInk)),
                      subtitle: Text('${b.doc.chapters.length} page${b.doc.chapters.length == 1 ? '' : 's'} written',
                          style: TextStyle(color: _kInk.withValues(alpha: 0.6))),
                      trailing: Row(mainAxisSize: MainAxisSize.min, children: [
                        IconButton(
                          tooltip: 'Print',
                          icon: const Icon(Icons.print_rounded, color: _kAccent),
                          onPressed: () => showNgmyBookPrintSheet(context, b.doc),
                        ),
                        IconButton(
                          tooltip: 'Delete',
                          icon: Icon(Icons.delete_outline_rounded, color: Colors.red.shade400),
                          onPressed: () => _delete(b),
                        ),
                      ]),
                    ),
                  ),
              ],
            ),
    );
  }
}

class _BigButton extends StatelessWidget {
  const _BigButton({required this.icon, required this.label, required this.colors, required this.onTap});
  final IconData icon;
  final String label;
  final List<Color> colors;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(16)),
        child: Column(children: [
          Icon(icon, color: Colors.white, size: 26),
          const SizedBox(height: 6),
          Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        ]),
      ),
    );
  }
}

class _BookAiDialog extends StatefulWidget {
  const _BookAiDialog();
  @override
  State<_BookAiDialog> createState() => _BookAiDialogState();
}

class _BookAiDialogState extends State<_BookAiDialog> {
  final _desc = TextEditingController();
  final _author = TextEditingController();
  int _pages = 8;
  bool _busy = false;
  String? _error;
  String _status = 'Writing…';

  @override
  void dispose() {
    _desc.dispose();
    _author.dispose();
    super.dispose();
  }

  Future<void> _go() async {
    final d = _desc.text.trim();
    if (d.isEmpty) {
      setState(() => _error = 'Say what the book is about.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      final doc = await ngmyWriteBookWithAi(
        description: d,
        pages: _pages,
        author: _author.text.trim(),
        onStatus: (s) {
          if (mounted) setState(() => _status = s);
        },
      );
      if (mounted) Navigator.pop(context, doc);
    } catch (e) {
      if (mounted) setState(() => _error = e.toString());
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Row(children: [
        Icon(Icons.auto_awesome_rounded, color: Color(0xFF8B5CF6)),
        SizedBox(width: 8),
        Text('Write a book with AI'),
      ]),
      content: SingleChildScrollView(
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          TextField(
            controller: _desc,
            minLines: 3,
            maxLines: 6,
            decoration: const InputDecoration(
              labelText: 'What is the book about?',
              hintText: 'e.g. A children\'s story about our grandmother in Kigoma — or in Kiswahili: Hadithi ya familia yetu',
              border: OutlineInputBorder(),
            ),
          ),
          const SizedBox(height: 10),
          TextField(
            controller: _author,
            decoration: const InputDecoration(labelText: 'Author (optional)', border: OutlineInputBorder()),
          ),
          const SizedBox(height: 10),
          Row(children: [
            const Text('Pages', style: TextStyle(fontWeight: FontWeight.w700)),
            Expanded(
              child: Slider(
                value: _pages.toDouble(),
                min: 2,
                max: 40,
                divisions: 38,
                label: '$_pages',
                onChanged: _busy ? null : (v) => setState(() => _pages = v.round()),
              ),
            ),
            Text('$_pages'),
          ]),
          if (_error != null) Text(_error!, style: TextStyle(color: Colors.red.shade700)),
        ]),
      ),
      actions: [
        TextButton(onPressed: _busy ? null : () => Navigator.pop(context), child: const Text('Cancel')),
        FilledButton.icon(
          onPressed: _busy ? null : _go,
          icon: _busy
              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
              : const Icon(Icons.auto_awesome_rounded, size: 18),
          label: Text(_busy ? _status : 'Write it'),
        ),
      ],
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
