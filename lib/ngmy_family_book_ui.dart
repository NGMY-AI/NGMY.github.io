import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_ai_language.dart';
import 'ngmy_book_studio.dart';
import 'ngmy_family_book_header.dart';
import 'ngmy_family_book_storage.dart';
import 'ngmy_print_booklet.dart';
import 'ngmy_worksheet_helpers.dart';

Future<void> showFamilyBookSheet(
  BuildContext context, {
  required String userEmail,
  required String treeId,
  required bool canEdit,
  String bookTitle = '',
  String membersPage = '',
  String familyFacts = '',
}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(
      fullscreenDialog: true,
      builder: (_) => _FamilyLibraryScreen(
        userEmail: userEmail,
        treeId: treeId,
        canEdit: canEdit,
        bookTitle: bookTitle,
        membersPage: membersPage,
        familyFacts: familyFacts,
      ),
    ),
  );
}

class _FamilyBookScreen extends StatefulWidget {
  const _FamilyBookScreen({
    required this.userEmail,
    required this.treeId,
    required this.shelfTreeId,
    required this.canEdit,
    this.bookTitle = '',
    this.membersPage = '',
    this.familyFacts = '',
  });

  final String userEmail;
  final String treeId;

  /// The tree whose shelf this book is on (treeId is where this one book is kept).
  final String shelfTreeId;
  final bool canEdit;
  final String bookTitle;

  /// "Our family" page text (members by generation) printed after the cover.
  final String membersPage;

  /// Everyone in the tree, written out for the AI book writer.
  final String familyFacts;

  @override
  State<_FamilyBookScreen> createState() => _FamilyBookScreenState();
}

class _FamilyBookScreenState extends State<_FamilyBookScreen> {
  List<FamilyBookEntry> _entries = [];
  bool _loading = true;
  late PageController _pageCtrl;
  int _pageIndex = -1; // -1 is the cover; 0 and up are the pages
  bool _editing = false;
  bool _keepEditing = false;
  FamilyBookCover _coverDesign = const FamilyBookCover();
  late TextEditingController _titleCtrl;
  late TextEditingController _bodyCtrl;

  @override
  void initState() {
    super.initState();
    _pageCtrl = PageController();
    _titleCtrl = TextEditingController();
    _bodyCtrl = TextEditingController();
    _reload();
    loadFamilyBookCover(widget.userEmail, widget.treeId).then((c) {
      if (mounted) setState(() => _coverDesign = c);
    });
  }

  @override
  void dispose() {
    _pageCtrl.dispose();
    _titleCtrl.dispose();
    _bodyCtrl.dispose();
    super.dispose();
  }

  Future<void> _reload() async {
    final list = await loadFamilyBookEntries(widget.userEmail, widget.treeId);
    if (!mounted) return;
    setState(() {
      _entries = list;
      _loading = false;
      if (_entries.isNotEmpty && _pageIndex >= _entries.length) {
        _pageIndex = _entries.length - 1;
      }
    });
    _loadPageIntoEditors();
  }

  FamilyBookEntry? get _current =>
      _entries.isEmpty || _pageIndex < 0 || _pageIndex >= _entries.length ? null : _entries[_pageIndex];

  void _loadPageIntoEditors() {
    final entry = _current;
    _titleCtrl.text = entry?.title ?? '';
    _bodyCtrl.text = entry?.body ?? '';
  }

  void _onPageChanged(int index) {
    setState(() {
      _pageIndex = index - 1;
      _editing = _keepEditing;
      _keepEditing = false;
    });
    _loadPageIntoEditors();
  }

  Future<void> _addPage() async {
    if (!widget.canEdit) return;
    final entry = FamilyBookEntry(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      title: 'Untitled page',
      body: '',
      updatedAt: DateTime.now(),
    );
    await upsertFamilyBookEntry(widget.userEmail, widget.treeId, entry);
    await _reload();
    if (!mounted || _entries.isEmpty) return;
    final newIndex = _entries.indexWhere((e) => e.id == entry.id);
    final target = newIndex >= 0 ? newIndex : _entries.length - 1;
    setState(() {
      _pageIndex = target;
      _editing = true;
      _keepEditing = true;
    });
    _loadPageIntoEditors();
    if (_pageCtrl.hasClients) {
      await _pageCtrl.animateToPage(
        target + 1,
        duration: const Duration(milliseconds: 280),
        curve: Curves.easeOutCubic,
      );
    }
  }

  Future<void> _saveCurrentPage() async {
    if (!widget.canEdit) return;
    final title = _titleCtrl.text.trim();
    final body = _bodyCtrl.text.trim();
    if (title.isEmpty) return;
    final entry = FamilyBookEntry(
      id: _current?.id ?? DateTime.now().microsecondsSinceEpoch.toString(),
      title: title,
      body: body,
      updatedAt: DateTime.now(),
    );
    await upsertFamilyBookEntry(widget.userEmail, widget.treeId, entry);
    await _reload();
    if (!mounted) return;
    setState(() => _editing = false);
  }

  Future<void> _deleteCurrentPage() async {
    final entry = _current;
    if (!widget.canEdit || entry == null) return;
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        final p = WorksheetPalette.of(ctx);
        return AlertDialog(
          backgroundColor: p.cardBg,
          title: Text('Remove this page?', style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w800)),
          content: Text('“${entry.title}” will be deleted from this device.', style: TextStyle(color: p.secondaryText)),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(
              onPressed: () => Navigator.pop(ctx, true),
              style: FilledButton.styleFrom(backgroundColor: Colors.red.shade700),
              child: const Text('Delete'),
            ),
          ],
        );
      },
    );
    if (ok != true || !mounted) return;
    await deleteFamilyBookEntry(widget.userEmail, widget.treeId, entry.id);
    setState(() {
      _editing = false;
      _pageIndex = (_pageIndex - 1).clamp(-1, 999);
    });
    await _reload();
    if (mounted && _pageCtrl.hasClients) _pageCtrl.jumpToPage((_pageIndex + 1).clamp(0, _entries.length));
  }

  /// The AI writes a NEW book from everyone in the tree (plus anything the user adds) and puts it on the shelf.
  /// A book that is still empty is filled instead, so no empty book is left behind.
  Future<void> _writeWithAi() async {
    if (_editing) await _saveCurrentPage();
    if (!mounted) return;
    if (_entries.isNotEmpty) {
      final made = await _writeNewBookOnShelf(context, userEmail: widget.userEmail, treeId: widget.shelfTreeId, familyFacts: widget.familyFacts, bookTitle: widget.bookTitle);
      // The new book is on the shelf: go back to the library, where it now sits.
      if (made && mounted) Navigator.of(context).pop(true);
      return;
    }
    final doc = await showNgmyBookAiSheet(context, familyFacts: widget.familyFacts, familyName: widget.bookTitle);
    if (doc == null || !mounted) return;
    final base = DateTime.now().microsecondsSinceEpoch;
    final list = await loadFamilyBookEntries(widget.userEmail, widget.treeId);
    for (var i = 0; i < doc.chapters.length; i++) {
      final c = doc.chapters[i];
      list.add(FamilyBookEntry(id: '${base + i}', title: c.title.trim().isEmpty ? 'Page ${i + 1}' : c.title.trim(), body: c.body.trim(), updatedAt: DateTime.now()));
    }
    await saveFamilyBookEntries(widget.userEmail, widget.treeId, list);
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('The AI wrote your book: ${doc.chapters.length} pages.')));
  }

  /// Fold-and-staple book: cover with the family name, the family members page, then
  /// every Family Book page in order.
  Future<void> _printBook() async {
    if (_editing) await _saveCurrentPage();
    if (!mounted) return;
    final doc = NgmyBookDoc(
      title: _title,
      subtitle: _coverDesign.subtitle.trim().isEmpty ? 'Family Book' : _coverDesign.subtitle.trim(),
      cover: NgmyBookCover(template: kFamilyCoverStyles.firstWhere((x) => x.id == _coverDesign.style, orElse: () => kFamilyCoverStyles.first).printTemplate),
      chapters: [
        if (widget.membersPage.trim().isNotEmpty) NgmyBookChapter(title: 'Our Family', body: widget.membersPage),
        for (final e in _entries) NgmyBookChapter(title: e.title, body: e.body),
      ],
    );
    await showNgmyBookPrintSheet(context, doc);
  }

  Future<void> _chooseHeader() async {
    if (_editing) await _saveCurrentPage();
    if (!mounted) return;
    final id = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF1F130B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(26))),
      builder: (_) => FamilyBookHeaderPicker(start: _coverDesign.header, title: _title, kicker: 'Family Book · ${_entries.length} ${_entries.length == 1 ? 'page' : 'pages'}'),
    );
    if (id == null || !mounted) return;
    final next = _coverDesign.copyWith(header: id);
    setState(() => _coverDesign = next);
    await saveFamilyBookCover(widget.userEmail, widget.treeId, next);
  }

  Future<void> _designCover() async {
    final next = await showModalBottomSheet<FamilyBookCover>(
      context: context,
      isScrollControlled: true,
      backgroundColor: const Color(0xFF1F130B),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(26))),
      builder: (_) => _CoverDesigner(start: _coverDesign, fallbackTitle: widget.bookTitle.trim().isEmpty ? 'Our Family Book' : widget.bookTitle.trim(), pages: _entries.length),
    );
    if (next == null || !mounted) return;
    setState(() => _coverDesign = next);
    await saveFamilyBookCover(widget.userEmail, widget.treeId, next);
    if (_pageCtrl.hasClients) unawaited(_pageCtrl.animateToPage(0, duration: const Duration(milliseconds: 400), curve: Curves.easeOut));
  }

  String _formatDate(DateTime dt) {
    final local = dt.toLocal();
    final m = local.month.toString().padLeft(2, '0');
    final d = local.day.toString().padLeft(2, '0');
    return '${local.year}-$m-$d';
  }

  static const Color _paper = Color(0xFFFBF3E0);
  static const Color _ink = Color(0xFF3D2E1F);
  static const Color _leather = Color(0xFF7A3E1D);
  static const Color _gold = Color(0xFFE8C46A);

  String get _title => _coverDesign.title.trim().isNotEmpty ? _coverDesign.title.trim() : (widget.bookTitle.trim().isEmpty ? 'Our Family Book' : widget.bookTitle.trim());

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF1A0F08),
      body: Stack(fit: StackFit.expand, children: [
        const Positioned.fill(child: CustomPaint(painter: _LibraryPainter())),
        SafeArea(
          child: Column(children: [
            _header(),
            Expanded(
              child: _loading
              ? const Center(child: CircularProgressIndicator(color: _gold))
              : _entries.isEmpty
                  ? _emptyBook()
                  : Column(children: [
                      Padding(
                        padding: const EdgeInsets.fromLTRB(16, 6, 16, 8),
                        child: Text(_pageIndex < 0 ? 'Tap the cover to open the book' : 'Page ${_pageIndex + 1} of ${_entries.length}', style: TextStyle(color: _paper.withValues(alpha: 0.8), fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 0.4)),
                      ),
                      Expanded(
                        child: PageView.builder(
                          controller: _pageCtrl,
                          physics: _editing ? const NeverScrollableScrollPhysics() : const BouncingScrollPhysics(),
                          itemCount: _entries.length + 1,
                          onPageChanged: _onPageChanged,
                          itemBuilder: (_, vi) {
                            final isCover = vi == 0;
                            return AnimatedBuilder(
                              animation: _pageCtrl,
                              builder: (context, child) {
                                var delta = 0.0;
                                if (_pageCtrl.hasClients && _pageCtrl.position.haveDimensions) delta = vi - (_pageCtrl.page ?? vi.toDouble());
                                // The page that is leaving swings away on its spine like a real page turning.
                                final a = delta.clamp(-1.0, 0.0);
                                return Transform(
                                  alignment: Alignment.centerLeft,
                                  transform: Matrix4.identity()
                                    ..setEntry(3, 2, 0.0013)
                                    ..rotateY(a * math.pi * 0.5),
                                  child: Opacity(opacity: (1 + a * 0.5).clamp(0.0, 1.0), child: child),
                                );
                              },
                              child: Padding(
                                padding: const EdgeInsets.fromLTRB(16, 4, 16, 12),
                                child: isCover
                                    ? GestureDetector(onTap: () => _pageCtrl.nextPage(duration: const Duration(milliseconds: 420), curve: Curves.easeInOutCubic), child: _BookCover(design: _coverDesign, title: _title, pages: _entries.length))
                                    : _BookPageView(
                                        entry: _entries[vi - 1],
                                        number: vi,
                                        total: _entries.length,
                                        editing: (vi - 1) == _pageIndex && _editing && widget.canEdit,
                                        titleCtrl: _titleCtrl,
                                        bodyCtrl: _bodyCtrl,
                                        formatDate: _formatDate,
                                        headStyle: familyBookHeaderStyleOf(_coverDesign.header),
                                        bookTitle: _title,
                                      ),
                              ),
                            );
                          },
                        ),
                      ),
                      _bookFooter(),
                    ]),
            ),
          ]),
        ),
      ]),
    );
  }

  /// The top of the book in a gold-edged leather frame: the family name on one line (it shrinks if it is long),
  /// and the tools laid out under it with their names.
  Widget _header() {
    final canAi = widget.canEdit && (widget.familyFacts.trim().isNotEmpty || _entries.isNotEmpty);
    final tools = <_HeaderTool>[
      if (canAi) _HeaderTool(Icons.auto_awesome_rounded, 'AI', _aiMenu, hot: true),
      if (widget.canEdit) _HeaderTool(Icons.palette_rounded, 'Cover', _designCover),
      if (widget.canEdit) _HeaderTool(Icons.title_rounded, 'Header', _chooseHeader),
      if (_entries.isNotEmpty || widget.membersPage.trim().isNotEmpty) _HeaderTool(Icons.print_rounded, 'Print', _printBook),
      if (widget.canEdit && _entries.isNotEmpty && _pageIndex >= 0) _HeaderTool(_editing ? Icons.check_rounded : Icons.edit_rounded, _editing ? 'Save' : 'Edit', _editing ? _saveCurrentPage : () => setState(() => _editing = true)),
      if (widget.canEdit) _HeaderTool(Icons.add_rounded, 'Add page', _addPage),
    ];
    return FamilyBookHeaderBar(
      style: familyBookHeaderStyleOf(_coverDesign.header),
      title: _title,
      kicker: '${_coverDesign.subtitle.trim().isEmpty ? 'Family Book' : _coverDesign.subtitle.trim()} · ${_entries.length} ${_entries.length == 1 ? 'page' : 'pages'}',
      onClose: () => Navigator.pop(context),
      tools: Row(children: [for (final t in tools) Expanded(child: _headerButton(t))]),
    );
  }

  Widget _headerButton(_HeaderTool t) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: t.onTap,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          t.hot
              ? const NgmyAiBadge(size: 32)
              : Container(
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), gradient: LinearGradient(colors: [Colors.white.withValues(alpha: 0.14), Colors.white.withValues(alpha: 0.05)]), border: Border.all(color: _gold.withValues(alpha: 0.5))),
                  child: Icon(t.icon, color: _paper, size: 17),
                ),
          const SizedBox(height: 2),
          Text(t.label, maxLines: 1, style: TextStyle(color: _paper.withValues(alpha: 0.85), fontSize: 9.5, fontWeight: FontWeight.w800)),
        ]),
      );

  /// What the AI can do for the book: write a new book (in English or Swahili), or fix and translate this one.
  Future<void> _aiMenu() async {
    if (_editing) await _saveCurrentPage();
    if (!mounted) return;
    final bookLang = ngmyDetectTextLanguage([for (final e in _entries) '${e.title} ${e.body}'].join(' '));
    final choice = await showDialog<String>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: const Color(0xFF241409),
        insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 24),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(26), side: BorderSide(color: _gold.withValues(alpha: 0.5), width: 1.4)),
        child: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('What should the AI do?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 12),
            if (widget.familyFacts.trim().isNotEmpty) _menuTile(ctx, Icons.auto_awesome_rounded, _entries.isEmpty ? 'Write this book' : 'Write a new book', _entries.isEmpty ? 'Choose English or Swahili, then describe the book' : 'A brand new book for your shelf. Choose English or Swahili, then describe it', 'write'),
            if (widget.canEdit) _menuTile(ctx, Icons.build_circle_rounded, 'Fix or change something', 'Correct a word, rewrite a page, add to it, or redesign the cover', 'fix'),
            if (_entries.isNotEmpty) ...[
              if (bookLang == 'en') Padding(padding: const EdgeInsets.only(bottom: 8), child: Text('Your book is in English.', style: TextStyle(color: _paper.withValues(alpha: 0.7), fontSize: 12))),
              if (bookLang == 'sw') Padding(padding: const EdgeInsets.only(bottom: 8), child: Text('Your book is in Swahili.', style: TextStyle(color: _paper.withValues(alpha: 0.7), fontSize: 12))),
              if (bookLang == 'sw') _menuTile(ctx, Icons.spellcheck_rounded, 'Make my Swahili sound natural', 'A native-speaker editor rewrites every page so it reads like real Swahili', 'polish'),
              if (bookLang != 'sw') _menuTile(ctx, Icons.translate_rounded, 'Translate my book to Swahili', 'Every page, from English into Kiswahili', 'sw'),
              if (bookLang != 'en') _menuTile(ctx, Icons.translate_rounded, 'Translate my book to English', 'Every page, from Swahili into English', 'en'),
            ],
          ]),
        ),
        ),
      ),
    );
    if (choice == null || !mounted) return;
    if (choice == 'write') {
      await _writeWithAi();
    } else if (choice == 'fix') {
      await _fixWithAi();
    } else if (choice == 'polish') {
      await _translateAll('Swahili (Kiswahili)', polishOnly: true);
    } else {
      await _translateAll(choice == 'sw' ? 'Swahili (Kiswahili)' : 'English');
    }
  }

  Widget _menuTile(BuildContext ctx, IconData icon, String title, String sub, String value) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: () => Navigator.pop(ctx, value),
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(16), border: Border.all(color: _gold.withValues(alpha: 0.3))),
            child: Row(children: [
              Container(width: 42, height: 42, decoration: BoxDecoration(shape: BoxShape.circle, gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)])), child: Icon(icon, color: Colors.white, size: 21)),
              const SizedBox(width: 12),
              Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14.5)),
                Text(sub, style: const TextStyle(color: Colors.white60, fontSize: 12)),
              ])),
            ]),
          ),
        ),
      );

  /// The person says what they do not like; the AI changes that page, the whole book, or the cover. Undo brings it back.
  Future<void> _fixWithAi() async {
    final ask = await showDialog<({String text, String scope})>(
      context: context,
      builder: (ctx) => _FixDialog(canPage: _pageIndex >= 0 && _entries.isNotEmpty, hasPages: _entries.isNotEmpty, onPage: _pageIndex + 1),
    );
    if (ask == null || !mounted) return;
    final beforeEntries = List<FamilyBookEntry>.of(_entries);
    final beforeCover = _coverDesign;
    final status = ValueNotifier<String>('Working on it…');
    var showing = true;
    unawaited(showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => PopScope(
        canPop: false,
        child: AlertDialog(
          backgroundColor: const Color(0xFF241409),
          content: ValueListenableBuilder<String>(
            valueListenable: status,
            builder: (_, v, __) => Row(children: [
              const SizedBox(width: 26, height: 26, child: CircularProgressIndicator(strokeWidth: 3, color: _gold)),
              const SizedBox(width: 16),
              Expanded(child: Text(v, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700))),
            ]),
          ),
        ),
      ),
    ).whenComplete(() => showing = false));
    String? error;
    NgmyBookEditResult? result;
    try {
      result = await ngmyEditBookWithAi(
        instruction: ask.text,
        scope: ask.scope,
        pages: [for (final e in beforeEntries) (e.title, e.body)],
        pageIndex: _pageIndex,
        cover: _coverDesign.toJson(),
        styleIds: [for (final st in kFamilyCoverStyles) st.id],
        onStatus: (s, _) => status.value = s,
      );
    } catch (e) {
      error = '$e';
    }
    if (mounted && showing) Navigator.of(context, rootNavigator: true).pop();
    status.dispose();
    if (!mounted) return;
    if (result == null) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(error ?? 'The AI could not do that just now. Nothing was changed.')));
      return;
    }
    var touched = false;
    if (result.pages.isNotEmpty) {
      final next = [
        for (var i = 0; i < beforeEntries.length; i++)
          result.pages.containsKey(i) ? beforeEntries[i].copyWith(title: result.pages[i]!.$1, body: result.pages[i]!.$2, updatedAt: DateTime.now()) : beforeEntries[i],
      ];
      await saveFamilyBookEntries(widget.userEmail, widget.treeId, next);
      await _reload();
      touched = true;
    }
    if (result.cover != null && result.cover!.isNotEmpty) {
      final nc = _coverDesign.applyAi(result.cover!, styleIds: [for (final st in kFamilyCoverStyles) st.id], emblemCount: kFamilyCoverEmblems.length);
      await saveFamilyBookCover(widget.userEmail, widget.treeId, nc);
      if (mounted) setState(() => _coverDesign = nc);
      if (_pageCtrl.hasClients && ask.scope == 'cover') unawaited(_pageCtrl.animateToPage(0, duration: const Duration(milliseconds: 400), curve: Curves.easeOut));
      touched = true;
    }
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(result.message),
      duration: const Duration(seconds: 8),
      action: touched
          ? SnackBarAction(
              label: 'Undo',
              onPressed: () async {
                await saveFamilyBookEntries(widget.userEmail, widget.treeId, beforeEntries);
                await saveFamilyBookCover(widget.userEmail, widget.treeId, beforeCover);
                if (mounted) setState(() => _coverDesign = beforeCover);
                await _reload();
              },
            )
          : null,
    ));
  }

  /// Turns every page into the other language. The old text is kept so it can be brought back.
  Future<void> _translateAll(String target, {bool polishOnly = false}) async {
    final before = List<FamilyBookEntry>.of(_entries);
    final status = ValueNotifier<String>('Starting…');
    var showing = true;
    unawaited(showDialog<void>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) => PopScope(
        canPop: false,
        child: AlertDialog(
          backgroundColor: const Color(0xFF241409),
          content: ValueListenableBuilder<String>(
            valueListenable: status,
            builder: (_, v, __) => Row(children: [
              const SizedBox(width: 26, height: 26, child: CircularProgressIndicator(strokeWidth: 3, color: _gold)),
              const SizedBox(width: 16),
              Expanded(child: Text(v, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700))),
            ]),
          ),
        ),
      ),
    ).whenComplete(() => showing = false));
    String? error;
    List<(String, String)>? done;
    try {
      final src = [for (final e in before) (e.title, e.body)];
      done = polishOnly ? await ngmyPolishSwahili(src, onStatus: (s, _) => status.value = s) : await ngmyTranslateBookPages(pages: src, target: target, onStatus: (s, _) => status.value = s);
    } catch (e) {
      error = '$e';
    }
    if (mounted && showing) Navigator.of(context, rootNavigator: true).pop();
    status.dispose();
    if (!mounted) return;
    if (done == null) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(error ?? 'The AI could not translate the book. Nothing was changed.')));
      return;
    }
    final next = [for (var i = 0; i < before.length; i++) before[i].copyWith(title: done[i].$1, body: done[i].$2, updatedAt: DateTime.now())];
    await saveFamilyBookEntries(widget.userEmail, widget.treeId, next);
    await _reload();
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(polishOnly ? 'I rewrote your Swahili so it reads naturally.' : 'Your book is now in ${target.startsWith('Swahili') ? 'Swahili' : 'English'}.'),
      action: SnackBarAction(
        label: 'Undo',
        onPressed: () async {
          await saveFamilyBookEntries(widget.userEmail, widget.treeId, before);
          await _reload();
        },
      ),
    ));
  }

  Widget _emptyBook() {
    return Center(
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(24),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          SizedBox(height: 330, child: Padding(padding: const EdgeInsets.symmetric(horizontal: 36), child: _BookCover(design: _coverDesign, title: _title, pages: 0))),
          const SizedBox(height: 18),
          Text(widget.canEdit ? 'Your book is waiting for its first page' : 'No pages yet', style: const TextStyle(color: _paper, fontWeight: FontWeight.w800, fontSize: 18)),
          const SizedBox(height: 6),
          Text(
            widget.canEdit ? 'Add pages and turn them like a real book: stories, memories and notes about your family.' : 'The tree owner has not written any pages on this device.',
            textAlign: TextAlign.center,
            style: TextStyle(color: _paper.withValues(alpha: 0.8), height: 1.4),
          ),
          if (widget.canEdit) ...[
            const SizedBox(height: 18),
            if (widget.familyFacts.trim().isNotEmpty)
              GestureDetector(
                onTap: _writeWithAi,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 14),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), gradient: const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]), boxShadow: [BoxShadow(color: const Color(0xFFDB2777).withValues(alpha: 0.45), blurRadius: 18)]),
                  child: const Row(mainAxisSize: MainAxisSize.min, children: [
                    Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 20),
                    SizedBox(width: 8),
                    Flexible(child: Text('Let the AI write it from your tree', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
                  ]),
                ),
              ),
            const SizedBox(height: 10),
            TextButton.icon(onPressed: _addPage, icon: const Icon(Icons.edit_rounded, size: 18, color: _gold), label: const Text('Write the first page myself', style: TextStyle(color: _gold, fontWeight: FontWeight.w800))),
          ],
        ]),
      ),
    );
  }

  Widget _bookFooter() {
    final vi = _pageIndex + 1;
    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 2, 16, 10),
        child: Row(children: [
          IconButton(tooltip: 'Previous page', onPressed: vi > 0 ? () => _pageCtrl.previousPage(duration: const Duration(milliseconds: 360), curve: Curves.easeInOutCubic) : null, icon: Icon(Icons.chevron_left_rounded, color: vi > 0 ? _paper : Colors.white24, size: 30)),
          Expanded(
            child: Center(
              child: widget.canEdit && _entries.isNotEmpty && !_editing && _pageIndex >= 0
                  ? TextButton.icon(onPressed: _deleteCurrentPage, icon: Icon(Icons.delete_outline, size: 16, color: Colors.red.shade300), label: Text('Delete page', style: TextStyle(color: Colors.red.shade300, fontSize: 12)))
                  : Text(_editing ? 'Writing… swiping is off while you edit' : 'Swipe to turn the page', style: TextStyle(color: _paper.withValues(alpha: 0.65), fontSize: 11.5)),
            ),
          ),
          IconButton(tooltip: 'Next page', onPressed: vi < _entries.length ? () => _pageCtrl.nextPage(duration: const Duration(milliseconds: 360), curve: Curves.easeInOutCubic) : null, icon: Icon(Icons.chevron_right_rounded, color: vi < _entries.length ? _paper : Colors.white24, size: 30)),
        ]),
      ),
    );
  }
}

/// The leather front cover: gold edges, an embossed title and a ribbon.
/// Where the person types what they want changed, and chooses what the AI may change.
class _FixDialog extends StatefulWidget {
  const _FixDialog({required this.canPage, required this.hasPages, required this.onPage});
  final bool canPage;
  final bool hasPages;
  final int onPage;

  @override
  State<_FixDialog> createState() => _FixDialogState();
}

class _FixDialogState extends State<_FixDialog> {
  final TextEditingController _text = TextEditingController();
  late String _scope = widget.canPage ? 'page' : (widget.hasPages ? 'book' : 'cover');

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  List<String> get _examples => switch (_scope) {
        'cover' => const ['Make the cover dark blue with silver letters', 'Put the title at the top and make it bigger', 'Use a star sky and a heart picture', 'Add our family name under the title'],
        'book' => const ['Rewrite the whole book in natural, professional Swahili', 'Correct the spelling in the whole book', 'Change the word "tree" to the right Swahili word', 'Use simple words everyone understands', 'Make every page a little shorter'],
        _ => const ['Rewrite this page in natural, professional Swahili', 'Correct the spelling', 'Rewrite this page in simpler words', 'Add a paragraph about the family farm', 'Make this page shorter'],
      };

  @override
  Widget build(BuildContext context) {
    const gold = Color(0xFFE8C46A);
    return Dialog(
      backgroundColor: const Color(0xFF241409),
      insetPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 24),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(26), side: BorderSide(color: gold.withValues(alpha: 0.5), width: 1.4)),
      child: SingleChildScrollView(
        padding: const EdgeInsets.all(18),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            const NgmyAiBadge(size: 40),
            const SizedBox(width: 10),
            const Expanded(child: Text('Tell the AI what to fix', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18))),
            IconButton(onPressed: () => Navigator.pop(context), icon: const Icon(Icons.close_rounded, color: Colors.white70)),
          ]),
          const SizedBox(height: 10),
          const Text('WHAT SHOULD IT CHANGE?', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
          const SizedBox(height: 6),
          Wrap(spacing: 8, runSpacing: 6, children: [
            if (widget.canPage) ChoiceChip(label: Text('This page (${widget.onPage})'), selected: _scope == 'page', onSelected: (_) => setState(() => _scope = 'page')),
            if (widget.hasPages) ChoiceChip(label: const Text('The whole book'), selected: _scope == 'book', onSelected: (_) => setState(() => _scope = 'book')),
            ChoiceChip(label: const Text('The cover design'), selected: _scope == 'cover', onSelected: (_) => setState(() => _scope = 'cover')),
          ]),
          const SizedBox(height: 12),
          TextField(
            controller: _text,
            minLines: 3,
            maxLines: 6,
            style: const TextStyle(color: Colors.white),
            decoration: InputDecoration(
              hintText: 'Say it in your own words…',
              hintStyle: const TextStyle(color: Colors.white38),
              filled: true,
              fillColor: Colors.white.withValues(alpha: 0.07),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide.none),
            ),
          ),
          const SizedBox(height: 8),
          Wrap(spacing: 6, runSpacing: 6, children: [
            for (final e in _examples)
              ActionChip(
                label: Text(e, style: const TextStyle(fontSize: 11.5)),
                backgroundColor: Colors.white.withValues(alpha: 0.08),
                labelStyle: const TextStyle(color: Colors.white70),
                onPressed: () => setState(() => _text.text = e),
              ),
          ]),
          const SizedBox(height: 14),
          FilledButton.icon(
            onPressed: () {
              final t = _text.text.trim();
              if (t.isEmpty) return;
              Navigator.pop(context, (text: t, scope: _scope));
            },
            icon: const Icon(Icons.auto_fix_high_rounded),
            label: const Text('Do it', style: TextStyle(fontWeight: FontWeight.w900)),
            style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(50), backgroundColor: const Color(0xFF8B5CF6), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
          ),
          const SizedBox(height: 4),
          const Text('You can undo it right after.', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
        ]),
      ),
    );
  }
}

/// Writes a new book with the AI and puts it on the shelf. Returns true when a book was added.
Future<bool> _writeNewBookOnShelf(
  BuildContext context, {
  required String userEmail,
  required String treeId,
  required String familyFacts,
  required String bookTitle,
}) async {
  final slots = await loadFamilyBookSlots(userEmail, treeId);
  if (!context.mounted) return false;
  if (slots.length >= kFamilyBookMax) {
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Your shelf is full: six books is the most. Remove one to write another.')));
    return false;
  }
  final doc = await showNgmyBookAiSheet(context, familyFacts: familyFacts, familyName: bookTitle);
  if (doc == null || !context.mounted) return false;
  final slot = await addFamilyBookSlot(userEmail, treeId);
  if (slot == null) return false;
  final id = familyBookStorageId(treeId, slot);
  final base = DateTime.now().microsecondsSinceEpoch;
  await saveFamilyBookEntries(userEmail, id, [
    for (var i = 0; i < doc.chapters.length; i++)
      FamilyBookEntry(id: '${base + i}', title: doc.chapters[i].title.trim().isEmpty ? 'Page ${i + 1}' : doc.chapters[i].title.trim(), body: doc.chapters[i].body.trim(), updatedAt: DateTime.now()),
  ]);
  if (doc.title.trim().isNotEmpty) await saveFamilyBookCover(userEmail, id, FamilyBookCover(title: doc.title.trim()));
  return true;
}

/// The family library: the books on the shelf, two in a row, six at the most.
class _FamilyLibraryScreen extends StatefulWidget {
  const _FamilyLibraryScreen({
    required this.userEmail,
    required this.treeId,
    required this.canEdit,
    required this.bookTitle,
    required this.membersPage,
    required this.familyFacts,
  });

  final String userEmail;
  final String treeId;
  final bool canEdit;
  final String bookTitle;
  final String membersPage;
  final String familyFacts;

  @override
  State<_FamilyLibraryScreen> createState() => _FamilyLibraryScreenState();
}

class _ShelfBook {
  const _ShelfBook(this.slot, this.cover, this.pages);
  final String slot;
  final FamilyBookCover cover;
  final int pages;
}

class _FamilyLibraryScreenState extends State<_FamilyLibraryScreen> {
  static const Color _paper = Color(0xFFFBF3E0);
  static const Color _gold = Color(0xFFE8C46A);
  List<_ShelfBook> _books = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final slots = await loadFamilyBookSlots(widget.userEmail, widget.treeId);
    final books = <_ShelfBook>[];
    for (final s in slots) {
      final id = familyBookStorageId(widget.treeId, s);
      books.add(_ShelfBook(s, await loadFamilyBookCover(widget.userEmail, id), (await loadFamilyBookEntries(widget.userEmail, id)).length));
    }
    if (!mounted) return;
    setState(() {
      _books = books;
      _loading = false;
    });
  }

  String _titleOf(_ShelfBook b) => b.cover.title.trim().isNotEmpty ? b.cover.title.trim() : (widget.bookTitle.trim().isEmpty ? 'Our Family Book' : widget.bookTitle.trim());

  Future<void> _open(_ShelfBook b) async {
    final wrote = await Navigator.of(context).push<bool>(
      MaterialPageRoute(
        fullscreenDialog: true,
        builder: (_) => _FamilyBookScreen(
          userEmail: widget.userEmail,
          treeId: familyBookStorageId(widget.treeId, b.slot),
          shelfTreeId: widget.treeId,
          canEdit: widget.canEdit,
          bookTitle: widget.bookTitle,
          membersPage: widget.membersPage,
          familyFacts: widget.familyFacts,
        ),
      ),
    );
    await _reload();
    if (wrote == true && mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Your new book is on the shelf.')));
  }

  Future<void> _writeNew() async {
    if (_books.length >= kFamilyBookMax) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Your shelf is full: six books is the most. Remove one to write another.')));
      return;
    }
    if (widget.familyFacts.trim().isEmpty) {
      // Nothing for the AI to read yet: start a blank book to write by hand.
      final slot = await addFamilyBookSlot(widget.userEmail, widget.treeId);
      await _reload();
      if (slot != null && mounted) await _open(_books.firstWhere((b) => b.slot == slot));
      return;
    }
    final made = await _writeNewBookOnShelf(context, userEmail: widget.userEmail, treeId: widget.treeId, familyFacts: widget.familyFacts, bookTitle: widget.bookTitle);
    await _reload();
    if (made && mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Your new book is on the shelf.')));
  }

  Future<void> _remove(_ShelfBook b) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: const Color(0xFF241409),
        title: const Text('Remove this book?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
        content: Text('“${_titleOf(b)}” and its ${b.pages} ${b.pages == 1 ? 'page' : 'pages'} will be deleted from this device.', style: const TextStyle(color: Colors.white70)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), style: FilledButton.styleFrom(backgroundColor: Colors.red.shade700), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await removeFamilyBookSlot(widget.userEmail, widget.treeId, b.slot);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final canAdd = widget.canEdit && _books.length < kFamilyBookMax;
    final tiles = <Widget>[
      for (final b in _books) _bookTile(b),
      if (canAdd) _newTile(),
    ];
    return Scaffold(
      backgroundColor: const Color(0xFF1A0F08),
      body: Stack(fit: StackFit.expand, children: [
        const Positioned.fill(child: CustomPaint(painter: _LibraryPainter())),
        SafeArea(
          child: Column(children: [
            Container(
              margin: const EdgeInsets.fromLTRB(12, 6, 12, 8),
              padding: const EdgeInsets.fromLTRB(10, 10, 14, 10),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF4A2A15), Color(0xFF2A170C)]),
                border: Border.all(color: _gold.withValues(alpha: 0.85), width: 1.6),
              ),
              child: Row(children: [
                GestureDetector(
                  onTap: () => Navigator.pop(context),
                  child: Container(width: 32, height: 32, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.black.withValues(alpha: 0.3), border: Border.all(color: _gold.withValues(alpha: 0.6))), child: const Icon(Icons.close_rounded, color: _paper, size: 18)),
                ),
                const SizedBox(width: 12),
                const Expanded(child: Text('FAMILY LIBRARY', style: TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 1.2))),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), color: Colors.black.withValues(alpha: 0.3), border: Border.all(color: _gold.withValues(alpha: 0.5))),
                  child: Text('${_books.length} of $kFamilyBookMax', style: const TextStyle(color: _paper, fontWeight: FontWeight.w800, fontSize: 12)),
                ),
              ]),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator(color: _gold))
                  : tiles.isEmpty
                      ? const Center(child: Padding(padding: EdgeInsets.all(30), child: Text('No books on the shelf yet.', style: TextStyle(color: _paper, fontSize: 15))))
                      : LayoutBuilder(builder: (context, box) {
                          final w = (box.maxWidth - 16 * 2 - 14) / 2;
                          return SingleChildScrollView(
                            padding: const EdgeInsets.fromLTRB(16, 6, 16, 30),
                            child: Wrap(spacing: 14, runSpacing: 18, children: [for (final t in tiles) SizedBox(width: w, child: t)]),
                          );
                        }),
            ),
          ]),
        ),
      ]),
    );
  }

  Widget _bookTile(_ShelfBook b) {
    final title = _titleOf(b);
    return GestureDetector(
      onTap: () => _open(b),
      child: Column(children: [
        AspectRatio(
          aspectRatio: 300 / 420,
          child: Stack(children: [
            Positioned.fill(child: FittedBox(fit: BoxFit.contain, child: SizedBox(width: 300, height: 420, child: _BookCover(design: b.cover, title: title, pages: b.pages)))),
            if (widget.canEdit)
              Positioned(
                top: 6,
                right: 6,
                child: GestureDetector(
                  onTap: () => _remove(b),
                  child: Container(width: 28, height: 28, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.black.withValues(alpha: 0.55), border: Border.all(color: Colors.white24)), child: const Icon(Icons.delete_outline_rounded, color: Colors.white70, size: 16)),
                ),
              ),
          ]),
        ),
        const SizedBox(height: 8),
        Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: _paper, fontWeight: FontWeight.w800, fontSize: 13)),
        Text('${b.pages} ${b.pages == 1 ? 'page' : 'pages'}', style: TextStyle(color: _paper.withValues(alpha: 0.6), fontSize: 11)),
      ]),
    );
  }

  Widget _newTile() {
    final left = kFamilyBookMax - _books.length;
    return GestureDetector(
      onTap: _writeNew,
      child: AspectRatio(
        aspectRatio: 300 / 420,
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            color: Colors.white.withValues(alpha: 0.05),
            border: Border.all(color: _gold.withValues(alpha: 0.6), width: 1.6),
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            const NgmyAiBadge(size: 46),
            const SizedBox(height: 12),
            const Padding(padding: EdgeInsets.symmetric(horizontal: 10), child: Text('Write a new book', textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15))),
            const SizedBox(height: 4),
            Text('$left ${left == 1 ? 'space' : 'spaces'} left', style: TextStyle(color: _paper.withValues(alpha: 0.65), fontSize: 11.5)),
          ]),
        ),
      ),
    );
  }
}

class _HeaderTool {
  const _HeaderTool(this.icon, this.label, this.onTap, {this.hot = false});
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  final bool hot;
}

class _BookCover extends StatelessWidget {
  const _BookCover({required this.design, required this.title, required this.pages});
  final FamilyBookCover design;
  final String title;
  final int pages;

  @override
  Widget build(BuildContext context) {
    final st = kFamilyCoverStyles.firstWhere((x) => x.id == design.style, orElse: () => kFamilyCoverStyles.first);
    final gold = Color(kCoverFoils[design.foil] ?? 0xFFE8C46A);
    final align = design.position == 'top' ? MainAxisAlignment.start : (design.position == 'bottom' ? MainAxisAlignment.end : MainAxisAlignment.center);
    Widget frame(EdgeInsets pad, double radius, double alpha, double width) => Positioned.fill(child: Padding(padding: pad, child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(radius), border: Border.all(color: gold.withValues(alpha: alpha), width: width)))));
    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.horizontal(left: Radius.circular(8), right: Radius.circular(18)),
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: st.colors),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.6), blurRadius: 28, offset: const Offset(8, 14))],
      ),
      child: ClipRRect(
        borderRadius: const BorderRadius.horizontal(left: Radius.circular(8), right: Radius.circular(18)),
        child: Stack(children: [
          Positioned.fill(child: CustomPaint(painter: _CoverTexturePainter(design.texture, gold))),
          // The spine, with its stitches.
          Positioned(left: 0, top: 0, bottom: 0, width: 26, child: Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.black.withValues(alpha: 0.45), Colors.transparent])))),
          for (var i = 0; i < 6; i++) Positioned(left: 8, top: 40.0 + i * 46, child: Container(width: 6, height: 22, decoration: BoxDecoration(color: gold.withValues(alpha: 0.7), borderRadius: BorderRadius.circular(3)))),
          if (design.frame == 'double') ...[
            frame(const EdgeInsets.fromLTRB(40, 24, 24, 24), 8, 0.85, 2.2),
            frame(const EdgeInsets.fromLTRB(46, 30, 30, 30), 5, 0.45, 1),
          ] else if (design.frame == 'single')
            frame(const EdgeInsets.fromLTRB(40, 24, 24, 24), 8, 0.85, 2.4)
          else if (design.frame == 'corners')
            Positioned.fill(child: Padding(padding: const EdgeInsets.fromLTRB(38, 22, 22, 22), child: CustomPaint(painter: _CornerPainter(gold)))),
          Positioned.fill(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(56, 40, 40, 40),
              child: Column(mainAxisAlignment: align, children: [
                Icon(kFamilyCoverEmblems[design.emblem.clamp(0, kFamilyCoverEmblems.length - 1)], color: gold.withValues(alpha: 0.95), size: 44),
                const SizedBox(height: 14),
                Text(title, textAlign: TextAlign.center, maxLines: 4, overflow: TextOverflow.ellipsis, style: TextStyle(color: gold, fontWeight: FontWeight.w900, fontSize: design.titleSize, height: 1.2, letterSpacing: 0.5, shadows: const [Shadow(color: Colors.black54, blurRadius: 3, offset: Offset(1, 2))])),
                const SizedBox(height: 12),
                Container(width: 90, height: 2, color: gold.withValues(alpha: 0.7)),
                const SizedBox(height: 12),
                Text(design.subtitle.trim().isNotEmpty ? design.subtitle.trim() : (pages == 0 ? 'A family story' : '$pages ${pages == 1 ? 'page' : 'pages'} of our story'), textAlign: TextAlign.center, style: TextStyle(color: gold.withValues(alpha: 0.85), fontStyle: FontStyle.italic, fontSize: 14)),
                if (design.author.trim().isNotEmpty) ...[
                  const SizedBox(height: 16),
                  Text(design.author.trim(), textAlign: TextAlign.center, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: gold.withValues(alpha: 0.9), fontWeight: FontWeight.w800, fontSize: 13, letterSpacing: 1.2)),
                ],
              ]),
            ),
          ),
          // The ribbon bookmark.
          if (design.ribbon) Positioned(right: 46, top: 0, child: CustomPaint(size: const Size(22, 64), painter: _RibbonPainter())),
        ]),
      ),
    );
  }
}

/// The feel of the cover material: leather grain, linen weave, stars or soft rays of light.
class _CoverTexturePainter extends CustomPainter {
  _CoverTexturePainter(this.texture, this.foil);
  final String texture;
  final Color foil;

  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(11);
    switch (texture) {
      case 'plain':
        return;
      case 'linen':
        final p = Paint()..color = Colors.black.withValues(alpha: 0.07)..strokeWidth = 1;
        for (var y = 0.0; y < size.height; y += 4) {
          canvas.drawLine(Offset(0, y), Offset(size.width, y), p);
        }
        final q = Paint()..color = Colors.white.withValues(alpha: 0.05)..strokeWidth = 1;
        for (var x = 0.0; x < size.width; x += 4) {
          canvas.drawLine(Offset(x, 0), Offset(x, size.height), q);
        }
      case 'stars':
        for (var i = 0; i < 70; i++) {
          final c = Offset(r.nextDouble() * size.width, r.nextDouble() * size.height);
          canvas.drawCircle(c, 0.6 + r.nextDouble() * 1.6, Paint()..color = foil.withValues(alpha: 0.25 + r.nextDouble() * 0.5));
        }
      case 'rays':
        final c = Offset(size.width * 0.55, size.height * 0.1);
        for (var i = 0; i < 14; i++) {
          final a = math.pi * 0.15 + i * (math.pi * 0.7 / 13);
          final path = Path()..moveTo(c.dx, c.dy)..lineTo(c.dx + math.cos(a - 0.04) * size.height * 1.4, c.dy + math.sin(a - 0.04) * size.height * 1.4)..lineTo(c.dx + math.cos(a + 0.04) * size.height * 1.4, c.dy + math.sin(a + 0.04) * size.height * 1.4)..close();
          canvas.drawPath(path, Paint()..color = foil.withValues(alpha: i.isEven ? 0.09 : 0.03));
        }
      default:
        final p = Paint()..color = Colors.black.withValues(alpha: 0.07);
        for (var i = 0; i < 260; i++) {
          canvas.drawCircle(Offset(r.nextDouble() * size.width, r.nextDouble() * size.height), 0.8 + r.nextDouble() * 1.8, p);
        }
        final hi = Paint()..color = Colors.white.withValues(alpha: 0.035);
        for (var i = 0; i < 120; i++) {
          canvas.drawCircle(Offset(r.nextDouble() * size.width, r.nextDouble() * size.height), 0.6 + r.nextDouble() * 1.2, hi);
        }
    }
  }

  @override
  bool shouldRepaint(covariant _CoverTexturePainter old) => old.texture != texture || old.foil != foil;
}

/// Gold corner brackets instead of a full frame.
class _CornerPainter extends CustomPainter {
  _CornerPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()..color = color.withValues(alpha: 0.9)..style = PaintingStyle.stroke..strokeWidth = 2.4..strokeCap = StrokeCap.round;
    const l = 34.0;
    for (final corner in [(0.0, 0.0, 1.0, 1.0), (size.width, 0.0, -1.0, 1.0), (0.0, size.height, 1.0, -1.0), (size.width, size.height, -1.0, -1.0)]) {
      final x = corner.$1, y = corner.$2, dx = corner.$3, dy = corner.$4;
      canvas.drawPath(Path()..moveTo(x + dx * l, y)..lineTo(x, y)..lineTo(x, y + dy * l), p);
      canvas.drawCircle(Offset(x + dx * 9, y + dy * 9), 3, Paint()..color = color.withValues(alpha: 0.9));
    }
  }

  @override
  bool shouldRepaint(covariant _CornerPainter old) => old.color != color;
}

class FamilyCoverStyle {
  const FamilyCoverStyle(this.id, this.name, this.colors, this.printTemplate);
  final String id;
  final String name;
  final List<Color> colors;
  final String printTemplate;
}

const List<FamilyCoverStyle> kFamilyCoverStyles = [
  FamilyCoverStyle('leather', 'Leather', [Color(0xFF9A5128), Color(0xFF6B3216), Color(0xFF4A2210)], 'vintage'),
  FamilyCoverStyle('midnight', 'Midnight', [Color(0xFF1E3A8A), Color(0xFF172554), Color(0xFF0B1230)], 'starry'),
  FamilyCoverStyle('forest', 'Forest', [Color(0xFF15803D), Color(0xFF14532D), Color(0xFF052E16)], 'story'),
  FamilyCoverStyle('burgundy', 'Burgundy', [Color(0xFFB91C1C), Color(0xFF7F1D1D), Color(0xFF450A0A)], 'royal'),
  FamilyCoverStyle('royal', 'Royal', [Color(0xFF7C3AED), Color(0xFF5B21B6), Color(0xFF2E1065)], 'royal'),
  FamilyCoverStyle('charcoal', 'Charcoal', [Color(0xFF475569), Color(0xFF1F2937), Color(0xFF0B0F17)], 'geo'),
  FamilyCoverStyle('sunset', 'Sunset', [Color(0xFFF97316), Color(0xFFDB2777), Color(0xFF7E22CE)], 'sunset'),
  FamilyCoverStyle('ocean', 'Ocean', [Color(0xFF0891B2), Color(0xFF155E75), Color(0xFF083344)], 'band'),
];

const List<IconData> kFamilyCoverEmblems = [
  Icons.account_tree_rounded, Icons.favorite_rounded, Icons.home_rounded, Icons.star_rounded, Icons.diversity_3_rounded, Icons.local_florist_rounded,
  Icons.auto_stories_rounded, Icons.castle_rounded, Icons.church_rounded, Icons.pets_rounded, Icons.eco_rounded, Icons.emoji_events_rounded,
];

/// Lets the owner design the cover: colour, picture, words and foil.
class _CoverDesigner extends StatefulWidget {
  const _CoverDesigner({required this.start, required this.fallbackTitle, required this.pages});
  final FamilyBookCover start;
  final String fallbackTitle;
  final int pages;

  @override
  State<_CoverDesigner> createState() => _CoverDesignerState();
}

class _CoverDesignerState extends State<_CoverDesigner> {
  late FamilyBookCover _c = widget.start;
  late final TextEditingController _title = TextEditingController(text: widget.start.title);
  late final TextEditingController _sub = TextEditingController(text: widget.start.subtitle);
  late final TextEditingController _author = TextEditingController(text: widget.start.author);

  @override
  void dispose() {
    _title.dispose();
    _sub.dispose();
    _author.dispose();
    super.dispose();
  }

  Widget _label(String t) => Text(t, style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1));

  Widget _chips(List<String> ids, String current, void Function(String) pick, Map<String, String> names) => Wrap(spacing: 8, runSpacing: 6, children: [
        for (final id in ids) ChoiceChip(label: Text(names[id] ?? id), selected: current == id, onSelected: (_) => setState(() => pick(id))),
      ]);

  InputDecoration _deco(String label) => InputDecoration(
        labelText: label,
        labelStyle: const TextStyle(color: Colors.white54),
        filled: true,
        fillColor: Colors.white.withValues(alpha: 0.07),
        isDense: true,
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
      );

  @override
  Widget build(BuildContext context) {
    final shown = _c.copyWith(title: _title.text, subtitle: _sub.text, author: _author.text);
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SafeArea(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.92),
          child: ListView(padding: const EdgeInsets.fromLTRB(18, 14, 18, 16), shrinkWrap: true, children: [
            const Text('Design your cover', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19)),
            const SizedBox(height: 12),
            Center(child: SizedBox(width: 190, height: 260, child: FittedBox(fit: BoxFit.contain, child: SizedBox(width: 270, height: 370, child: _BookCover(design: shown, title: shown.title.trim().isEmpty ? widget.fallbackTitle : shown.title.trim(), pages: widget.pages))))),
            const SizedBox(height: 16),
            TextField(controller: _title, onChanged: (_) => setState(() {}), style: const TextStyle(color: Colors.white), decoration: _deco('Title on the cover')),
            const SizedBox(height: 10),
            TextField(controller: _sub, onChanged: (_) => setState(() {}), style: const TextStyle(color: Colors.white), decoration: _deco('Small line under it (optional)')),
            const SizedBox(height: 14),
            const Text('COLOUR', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 8),
            Wrap(spacing: 10, runSpacing: 10, children: [
              for (final st in kFamilyCoverStyles)
                GestureDetector(
                  onTap: () => setState(() => _c = _c.copyWith(style: st.id)),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Container(width: 46, height: 46, decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: st.colors), border: Border.all(color: _c.style == st.id ? Colors.white : Colors.white24, width: _c.style == st.id ? 3 : 1))),
                    const SizedBox(height: 3),
                    Text(st.name, style: TextStyle(color: _c.style == st.id ? Colors.white : Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w700)),
                  ]),
                ),
            ]),
            const SizedBox(height: 14),
            const Text('PICTURE', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 8),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (var i = 0; i < kFamilyCoverEmblems.length; i++)
                GestureDetector(
                  onTap: () => setState(() => _c = _c.copyWith(emblem: i)),
                  child: Container(width: 46, height: 46, decoration: BoxDecoration(color: _c.emblem == i ? const Color(0xFF8B5CF6).withValues(alpha: 0.35) : Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(14), border: Border.all(color: _c.emblem == i ? const Color(0xFFC4B5FD) : Colors.transparent, width: 2)), child: Icon(kFamilyCoverEmblems[i], color: Colors.white, size: 24)),
                ),
            ]),
            const SizedBox(height: 14),
            TextField(controller: _author, onChanged: (_) => setState(() {}), style: const TextStyle(color: Colors.white), decoration: _deco('Author or family name line (optional)')),
            const SizedBox(height: 14),
            _label('LETTERING COLOUR'),
            const SizedBox(height: 8),
            Wrap(spacing: 10, runSpacing: 8, children: [
              for (final f in kCoverFoils.entries)
                GestureDetector(
                  onTap: () => setState(() => _c = _c.copyWith(foil: f.key)),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Container(width: 34, height: 34, decoration: BoxDecoration(shape: BoxShape.circle, color: Color(f.value), border: Border.all(color: _c.foil == f.key ? const Color(0xFFC4B5FD) : Colors.white24, width: _c.foil == f.key ? 3 : 1))),
                    const SizedBox(height: 2),
                    Text(f.key, style: TextStyle(color: _c.foil == f.key ? Colors.white : Colors.white54, fontSize: 10, fontWeight: FontWeight.w700)),
                  ]),
                ),
            ]),
            const SizedBox(height: 14),
            _label('TITLE SIZE'),
            Slider(value: _c.titleSize, min: 18, max: 36, divisions: 9, label: '${_c.titleSize.round()}', onChanged: (v) => setState(() => _c = _c.copyWith(titleSize: v))),
            _label('WHERE THE WORDS SIT'),
            const SizedBox(height: 6),
            _chips(kCoverPositions, _c.position, (v) => _c = _c.copyWith(position: v), const {'top': 'Top', 'middle': 'Middle', 'bottom': 'Bottom'}),
            const SizedBox(height: 12),
            _label('BORDER'),
            const SizedBox(height: 6),
            _chips(kCoverFrames, _c.frame, (v) => _c = _c.copyWith(frame: v), const {'double': 'Double line', 'single': 'One line', 'corners': 'Corners', 'none': 'None'}),
            const SizedBox(height: 12),
            _label('COVER MATERIAL'),
            const SizedBox(height: 6),
            _chips(kCoverTextures, _c.texture, (v) => _c = _c.copyWith(texture: v), const {'leather': 'Leather', 'linen': 'Linen', 'plain': 'Smooth', 'stars': 'Stars', 'rays': 'Light rays'}),
            const SizedBox(height: 6),
            SwitchListTile(contentPadding: EdgeInsets.zero, activeThumbColor: const Color(0xFF8B5CF6), title: const Text('Ribbon bookmark', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)), value: _c.ribbon, onChanged: (v) => setState(() => _c = _c.copyWith(ribbon: v))),
            const SizedBox(height: 18),
            FilledButton(
              onPressed: () => Navigator.pop(context, _c.copyWith(title: _title.text.trim(), subtitle: _sub.text.trim(), author: _author.text.trim())),
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(50), backgroundColor: const Color(0xFF8B5CF6), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
              child: const Text('Save the cover', style: TextStyle(fontWeight: FontWeight.w900)),
            ),
          ]),
        ),
      ),
    );
  }
}

class _RibbonPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final p = Path()..moveTo(0, 0)..lineTo(size.width, 0)..lineTo(size.width, size.height)..lineTo(size.width / 2, size.height - 12)..lineTo(0, size.height)..close();
    canvas.drawPath(p, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFDC2626), Color(0xFF991B1B)]).createShader(Offset.zero & size));
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

/// A cosy library behind the book: dark wooden shelves full of books and a warm lamp glow.
class _LibraryPainter extends CustomPainter {
  const _LibraryPainter();

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF2A170C), Color(0xFF160B05)]).createShader(Offset.zero & size));
    final rowH = 112.0;
    final rows = (size.height / rowH).ceil();
    final spines = const [Color(0xFF7F1D1D), Color(0xFF14532D), Color(0xFF1E3A8A), Color(0xFF78350F), Color(0xFF581C87), Color(0xFF0F766E), Color(0xFF9A3412), Color(0xFF374151), Color(0xFFB45309)];
    final r = math.Random(4);
    for (var row = 0; row < rows; row++) {
      final base = (row + 1) * rowH;
      var x = 6.0;
      while (x < size.width) {
        final w = 14 + r.nextDouble() * 20;
        final h = 56 + r.nextDouble() * 40;
        final c = spines[r.nextInt(spines.length)];
        final lean = r.nextInt(14) == 0;
        canvas.save();
        if (lean) {
          canvas.translate(x + w, base);
          canvas.rotate(-0.18);
          canvas.translate(-(x + w), -base);
        }
        final rect = Rect.fromLTWH(x, base - h, w, h);
        canvas.drawRRect(RRect.fromRectAndRadius(rect, const Radius.circular(2)), Paint()..shader = LinearGradient(colors: [Color.lerp(c, Colors.white, 0.12)!, c, Color.lerp(c, Colors.black, 0.45)!]).createShader(rect));
        canvas.drawRect(Rect.fromLTWH(x + 2, base - h + 10, w - 4, 2), Paint()..color = const Color(0xFFE8C46A).withValues(alpha: 0.55));
        canvas.drawRect(Rect.fromLTWH(x + 2, base - 14, w - 4, 2), Paint()..color = const Color(0xFFE8C46A).withValues(alpha: 0.4));
        canvas.restore();
        x += w + 1 + (r.nextInt(9) == 0 ? 18 : 0);
      }
      // The shelf board.
      canvas.drawRect(Rect.fromLTWH(0, base, size.width, 10), Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF8A5A2B), Color(0xFF3B2312)]).createShader(Rect.fromLTWH(0, base, size.width, 10)));
      canvas.drawRect(Rect.fromLTWH(0, base + 10, size.width, 14), Paint()..color = Colors.black.withValues(alpha: 0.5)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    }
    // Keep the books in the background: a dark veil, then a warm lamp glow.
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF120804).withValues(alpha: 0.72));
    canvas.drawCircle(Offset(size.width * 0.5, size.height * 0.36), size.width * 0.95, Paint()..shader = RadialGradient(colors: [const Color(0xFFFFB454).withValues(alpha: 0.22), Colors.transparent]).createShader(Rect.fromCircle(center: Offset(size.width * 0.5, size.height * 0.36), radius: size.width * 0.95)));
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

class _BookPageView extends StatelessWidget {
  const _BookPageView({
    required this.entry,
    required this.number,
    required this.total,
    required this.editing,
    required this.titleCtrl,
    required this.bodyCtrl,
    required this.formatDate,
    this.headStyle,
    this.bookTitle = '',
  });

  final FamilyBookEntry entry;
  final int number;
  final int total;
  final bool editing;
  final TextEditingController titleCtrl;
  final TextEditingController bodyCtrl;
  final String Function(DateTime) formatDate;
  final FamilyBookHeaderStyle? headStyle;
  final String bookTitle;

  @override
  Widget build(BuildContext context) {
    const paper = _FamilyBookScreenState._paper;
    const ink = _FamilyBookScreenState._ink;
    const leather = _FamilyBookScreenState._leather;
    const gold = _FamilyBookScreenState._gold;
    final body = entry.body.trim().replaceAll(RegExp(r'[ 	]{2,}'), ' ');
    return Stack(children: [
      // The stack of pages showing on the right edge.
      for (var i = 3; i >= 1; i--)
        Positioned(
          left: 14,
          right: -i * 2.2,
          top: i * 2.0,
          bottom: -i * 2.0,
          child: DecoratedBox(decoration: BoxDecoration(color: Color.lerp(paper, const Color(0xFFD9C8A0), i / 4), borderRadius: const BorderRadius.horizontal(right: Radius.circular(12)), border: Border(right: BorderSide(color: Colors.black.withValues(alpha: 0.12))))),
        ),
      Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Container(
          width: 14,
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [Color(0xFF9A5128), Color(0xFF5A2A12)]),
            borderRadius: const BorderRadius.horizontal(left: Radius.circular(8)),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 8, offset: const Offset(2, 0))],
          ),
          child: Column(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [for (var i = 0; i < 5; i++) Container(width: 3, height: 14, decoration: BoxDecoration(color: gold.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(2)))]),
        ),
        Expanded(
          child: Container(
            decoration: BoxDecoration(
              gradient: const LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Color(0xFFE9D9B3), paper, paper, Color(0xFFF3E7C8)], stops: [0, 0.07, 0.9, 1]),
              borderRadius: const BorderRadius.horizontal(right: Radius.circular(12)),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 18, offset: const Offset(0, 8))],
            ),
            child: ClipRRect(
              borderRadius: const BorderRadius.horizontal(right: Radius.circular(12)),
              child: Stack(children: [
                // A ribbon marking the page.
                Positioned(right: 26, top: -2, child: CustomPaint(size: const Size(16, 40), painter: _RibbonPainter())),
                Padding(
                  padding: const EdgeInsets.fromLTRB(26, 26, 24, 14),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                    if (headStyle != null && bookTitle.trim().isNotEmpty) FamilyBookRunningHead(style: headStyle!, title: bookTitle, ink: ink),
                    Expanded(
                      child: editing
                          ? Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                              TextField(controller: titleCtrl, style: const TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 21), decoration: InputDecoration(hintText: 'Page title', hintStyle: TextStyle(color: ink.withValues(alpha: 0.35)), border: InputBorder.none)),
                              Text(formatDate(entry.updatedAt), style: TextStyle(fontSize: 11, color: ink.withValues(alpha: 0.45))),
                              const SizedBox(height: 10),
                              Expanded(
                                child: TextField(
                                  controller: bodyCtrl,
                                  maxLines: null,
                                  expands: true,
                                  textAlignVertical: TextAlignVertical.top,
                                  style: const TextStyle(color: ink, fontSize: 16.5, height: 1.65),
                                  decoration: InputDecoration(hintText: 'Write your family story here…', hintStyle: TextStyle(color: ink.withValues(alpha: 0.35)), border: InputBorder.none),
                                ),
                              ),
                            ])
                          : SingleChildScrollView(
                              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                Text(entry.title, style: const TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 23, height: 1.2)),
                                const SizedBox(height: 4),
                                Text(formatDate(entry.updatedAt), style: TextStyle(fontSize: 11, color: ink.withValues(alpha: 0.5), fontStyle: FontStyle.italic)),
                                const SizedBox(height: 8),
                                Row(children: [Expanded(child: Container(height: 1, color: leather.withValues(alpha: 0.35))), Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: Text('❦', style: TextStyle(color: leather.withValues(alpha: 0.7), fontSize: 16))), Expanded(child: Container(height: 1, color: leather.withValues(alpha: 0.35)))]),
                                const SizedBox(height: 14),
                                if (body.isEmpty)
                                  Text('This page is blank. Tap the pencil to write.', style: TextStyle(color: ink.withValues(alpha: 0.4), fontSize: 16, height: 1.7))
                                else
                                  Text.rich(
                                    TextSpan(children: [
                                      // A big first letter, like the start of a chapter in a storybook.
                                      TextSpan(text: body.substring(0, 1), style: const TextStyle(color: leather, fontSize: 40, fontWeight: FontWeight.w900, height: 1.0)),
                                      TextSpan(text: body.substring(1)),
                                    ]),
                                    style: TextStyle(color: ink.withValues(alpha: 0.93), fontSize: 16.5, height: 1.72),
                                  ),
                              ]),
                            ),
                    ),
                    Padding(padding: const EdgeInsets.only(top: 6), child: Text('— $number —', textAlign: TextAlign.center, style: TextStyle(color: ink.withValues(alpha: 0.5), fontSize: 12, letterSpacing: 1))),
                  ]),
                ),
                // The curl of the page near the spine.
                Positioned(left: 0, top: 0, bottom: 0, width: 22, child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.black.withValues(alpha: 0.16), Colors.transparent])))),
              ]),
            ),
          ),
        ),
      ]),
    ]);
  }
}
