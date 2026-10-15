import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_invoice_print.dart';
import 'ngmy_print_booklet.dart';

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

Future<List<NgmySavedBook>> loadNgmyBooks(String email) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_booksKey(email));
    if (raw == null || raw.isEmpty) return [];
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((e) => NgmySavedBook.fromJson(Map<String, dynamic>.from(e))).where((b) => b.id.isNotEmpty).toList()
      ..sort((a, b) => b.updatedAt.compareTo(a.updatedAt));
  } catch (_) {
    return [];
  }
}

Future<void> saveNgmyBooks(String email, List<NgmySavedBook> books) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_booksKey(email), jsonEncode(books.map((b) => b.toJson()).toList()));
}

// ─── AI writer ────────────────────────────────────────────────────────────

String ngmyBookAiPrompt({required String description, required int pages}) => '''
You write short printable books. Write a book about: "$description".
Make $pages pages (chapters). Each page has a short title and 80-180 words of body text.
Use plain words, separate paragraphs with a blank line, no markdown, no emojis.
Reply with JSON only:
{"title":"...","subtitle":"...","chapters":[{"title":"...","body":"..."}]}
''';

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
    return NgmyBookDoc(title: doc.title, subtitle: doc.subtitle, author: author, chapters: chapters);
  } catch (_) {
    return null;
  }
}

Future<NgmyBookDoc> ngmyWriteBookWithAi({required String description, required int pages, String author = ''}) async {
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not set up yet. Ask the admin to turn on AI.';
  final creds = ngmyParseAiCredentials(key);
  String? lastError;
  for (var attempt = 0; attempt < 2; attempt++) {
    final r = await ngmyAiGenerateWithCredentials(creds, ngmyBookAiPrompt(description: description, pages: pages));
    if (r.text != null) {
      final doc = ngmyParseBookAi(r.text!, author: author);
      if (doc != null) return doc;
    } else {
      lastError = r.error;
    }
  }
  throw lastError != null && ngmyIsOfflineOrNetworkError(lastError)
      ? 'No internet connection — try again when you are online.'
      : 'The AI could not write the book. Try describing it again.';
}

// ─── Print sheet (shared by Family Book and NGMY Slides) ──────────────────

const _kInk = Color(0xFF3D2E1F);
const _kAccent = Color(0xFF8B4513);

Future<void> showNgmyBookPrintSheet(BuildContext context, NgmyBookDoc doc) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (_) => _BookPrintSheet(doc: doc),
  );
}

class _BookPrintSheet extends StatefulWidget {
  const _BookPrintSheet({required this.doc});
  final NgmyBookDoc doc;
  @override
  State<_BookPrintSheet> createState() => _BookPrintSheetState();
}

class _BookPrintSheetState extends State<_BookPrintSheet> {
  NgmyBookPaper _paper = NgmyBookPaper.letter;
  bool _booklet = true;
  bool _busy = false;
  ({int pages, int sheets})? _count;

  @override
  void initState() {
    super.initState();
    _recount();
  }

  Future<void> _recount() async {
    final c = await ngmyBookletCount(widget.doc, _paper);
    if (mounted) setState(() => _count = c);
  }

  String get _fileName {
    final t = widget.doc.title.trim().isEmpty ? 'book' : widget.doc.title.trim();
    return '${t.replaceAll(RegExp(r'[^\w\- ]+'), '').replaceAll(' ', '_')}${_booklet ? '_booklet' : ''}.pdf';
  }

  Future<void> _go({required bool download}) async {
    if (_busy) return;
    setState(() => _busy = true);
    final messenger = ScaffoldMessenger.maybeOf(context);
    try {
      final bytes = await ngmyBuildBookletPdf(widget.doc, paper: _paper, booklet: _booklet);
      if (download) {
        await downloadNgmyPdfBytes(bytes, _fileName);
        messenger?.showSnackBar(const SnackBar(content: Text('Book PDF saved.')));
      } else {
        final ok = await ngmyInvoicePrintPdfDirect(bytes, _fileName, preferPrintDialog: true);
        if (!ok) {
          await downloadNgmyPdfBytes(bytes, _fileName);
          messenger?.showSnackBar(const SnackBar(content: Text('Could not open printing here — the PDF was saved instead.')));
        }
      }
    } catch (e) {
      messenger?.showSnackBar(SnackBar(content: Text('Could not make the book: $e')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
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

  @override
  Widget build(BuildContext context) {
    final c = _count;
    return SafeArea(
      top: false,
      child: Container(
        margin: const EdgeInsets.all(10),
        padding: const EdgeInsets.fromLTRB(18, 14, 18, 16),
        decoration: BoxDecoration(color: const Color(0xFFFAF3E8), borderRadius: BorderRadius.circular(22)),
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
          const _SheetDiagram(),
          const SizedBox(height: 12),
          Row(children: [
            _choice('Fold & staple', _booklet, () => setState(() => _booklet = true), Icons.auto_stories_rounded),
            const SizedBox(width: 8),
            _choice('Single pages', !_booklet, () => setState(() => _booklet = false), Icons.description_outlined),
          ]),
          const SizedBox(height: 8),
          Row(children: [
            for (final p in NgmyBookPaper.values) ...[
              _choice(ngmyBookPaperLabel(p), _paper == p, () {
                setState(() {
                  _paper = p;
                  _count = null;
                });
                _recount();
              }, Icons.crop_portrait_rounded),
              if (p != NgmyBookPaper.values.last) const SizedBox(width: 8),
            ],
          ]),
          const SizedBox(height: 12),
          Text(
            c == null
                ? 'Counting pages…'
                : _booklet
                    ? '${c.pages} book pages → ${c.sheets} sheet${c.sheets == 1 ? '' : 's'} of paper.'
                    : '${c.pages} pages.',
            style: const TextStyle(fontWeight: FontWeight.w800, color: _kInk),
          ),
          if (_booklet) ...[
            const SizedBox(height: 6),
            Text(
              '1. Print on both sides — choose "flip on short edge".\n'
              '2. Keep the sheets in order and stack them.\n'
              '3. Fold along the dashed middle line and staple on it.',
              style: TextStyle(color: _kInk.withValues(alpha: 0.8), height: 1.45, fontSize: 13),
            ),
          ],
          const SizedBox(height: 14),
          Row(children: [
            Expanded(
              child: OutlinedButton.icon(
                onPressed: _busy ? null : () => _go(download: true),
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
                onPressed: _busy ? null : () => _go(download: false),
                style: FilledButton.styleFrom(
                  backgroundColor: _kAccent,
                  padding: const EdgeInsets.symmetric(vertical: 13),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                icon: _busy
                    ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Icon(Icons.print_rounded, size: 18),
                label: const Text('Print', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
          ]),
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
        width: 210,
        height: 110,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(6),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 10, offset: const Offset(0, 4))],
        ),
        child: Stack(children: [
          Row(children: [page('Page'), page('Page')]),
          Center(child: CustomPaint(size: const Size(1, 110), painter: _DashPainter())),
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

  Future<void> _open(NgmySavedBook book) async {
    await Navigator.of(context).push<void>(MaterialPageRoute(
      builder: (_) => _BookEditorScreen(
        book: book,
        onSave: (b) async {
          b.updatedAt = DateTime.now();
          final list = await loadNgmyBooks(widget.userEmail);
          final i = list.indexWhere((x) => x.id == b.id);
          if (i < 0) {
            list.insert(0, b);
          } else {
            list[i] = b;
          }
          await saveNgmyBooks(widget.userEmail, list);
        },
      ),
    ));
    await _reload();
  }

  void _newBook({NgmyBookDoc? doc}) {
    _open(NgmySavedBook(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      doc: doc ?? const NgmyBookDoc(title: 'My Book', chapters: [NgmyBookChapter(title: 'Chapter 1', body: '')]),
      updatedAt: DateTime.now(),
    ));
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
    final list = await loadNgmyBooks(widget.userEmail)
      ..removeWhere((x) => x.id == b.id);
    await saveNgmyBooks(widget.userEmail, list);
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
                      leading: const Icon(Icons.menu_book_rounded, color: _kAccent),
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
      final doc = await ngmyWriteBookWithAi(description: d, pages: _pages, author: _author.text.trim());
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
              hintText: 'e.g. A children\'s story about our grandmother growing up in Kigoma',
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
          label: Text(_busy ? 'Writing…' : 'Write it'),
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

class _BookEditorScreenState extends State<_BookEditorScreen> {
  late final TextEditingController _title;
  late final TextEditingController _subtitle;
  late final TextEditingController _author;
  final List<(TextEditingController, TextEditingController)> _pages = [];

  @override
  void initState() {
    super.initState();
    final d = widget.book.doc;
    _title = TextEditingController(text: d.title);
    _subtitle = TextEditingController(text: d.subtitle);
    _author = TextEditingController(text: d.author);
    for (final c in d.chapters) {
      _pages.add((TextEditingController(text: c.title), TextEditingController(text: c.body)));
    }
    if (_pages.isEmpty) _addPage();
  }

  @override
  void dispose() {
    _title.dispose();
    _subtitle.dispose();
    _author.dispose();
    for (final p in _pages) {
      p.$1.dispose();
      p.$2.dispose();
    }
    super.dispose();
  }

  NgmyBookDoc get _doc => NgmyBookDoc(
        title: _title.text.trim(),
        subtitle: _subtitle.text.trim(),
        author: _author.text.trim(),
        chapters: [for (final p in _pages) NgmyBookChapter(title: p.$1.text.trim(), body: p.$2.text)],
      );

  Future<void> _save() async {
    widget.book.doc = _doc;
    await widget.onSave(widget.book);
  }

  void _addPage() {
    setState(() => _pages.add((TextEditingController(text: 'Page ${_pages.length + 1}'), TextEditingController())));
  }

  void _move(int i, int dir) {
    final j = i + dir;
    if (j < 0 || j >= _pages.length) return;
    setState(() {
      final t = _pages[i];
      _pages[i] = _pages[j];
      _pages[j] = t;
    });
  }

  void _remove(int i) {
    final p = _pages.removeAt(i);
    setState(() {});
    WidgetsBinding.instance.addPostFrameCallback((_) {
      p.$1.dispose();
      p.$2.dispose();
    });
  }

  InputDecoration _deco(String label) => InputDecoration(
        labelText: label,
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(12)),
      );

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
            IconButton(
              tooltip: 'Print as a book',
              icon: const Icon(Icons.print_rounded),
              onPressed: () async {
                await _save();
                if (context.mounted) await showNgmyBookPrintSheet(context, _doc);
              },
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
                  TextField(controller: _pages[i].$1, style: const TextStyle(fontWeight: FontWeight.w800), decoration: _deco('Title')),
                  const SizedBox(height: 8),
                  TextField(
                    controller: _pages[i].$2,
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
