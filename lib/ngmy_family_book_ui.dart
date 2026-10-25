import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_ai_language.dart';
import 'ngmy_book_studio.dart';
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
      builder: (_) => _FamilyBookScreen(
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
    required this.canEdit,
    this.bookTitle = '',
    this.membersPage = '',
    this.familyFacts = '',
  });

  final String userEmail;
  final String treeId;
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

  /// The AI writes the family book from everyone in the tree (plus anything the user adds);
  /// each page it writes becomes a Family Book page, after the ones already here.
  Future<void> _writeWithAi() async {
    if (_editing) await _saveCurrentPage();
    if (!mounted) return;
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
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('The AI wrote ${doc.chapters.length} pages for your family book.')));
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
      if (_entries.isNotEmpty || widget.membersPage.trim().isNotEmpty) _HeaderTool(Icons.print_rounded, 'Print', _printBook),
      if (widget.canEdit && _entries.isNotEmpty && _pageIndex >= 0) _HeaderTool(_editing ? Icons.check_rounded : Icons.edit_rounded, _editing ? 'Save' : 'Edit', _editing ? _saveCurrentPage : () => setState(() => _editing = true)),
      if (widget.canEdit) _HeaderTool(Icons.add_rounded, 'Add page', _addPage),
    ];
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 6, 12, 2),
      padding: const EdgeInsets.fromLTRB(8, 6, 8, 6),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF4A2A15), Color(0xFF2A170C)]),
        border: Border.all(color: _gold.withValues(alpha: 0.85), width: 1.6),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 16, offset: const Offset(0, 6)), BoxShadow(color: _gold.withValues(alpha: 0.12), blurRadius: 18)],
      ),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          GestureDetector(
            onTap: () => Navigator.pop(context),
            child: Container(width: 30, height: 30, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.black.withValues(alpha: 0.3), border: Border.all(color: _gold.withValues(alpha: 0.6))), child: const Icon(Icons.close_rounded, color: _paper, size: 17)),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8),
              child: FittedBox(
                fit: BoxFit.scaleDown,
                child: Text(_title, maxLines: 1, softWrap: false, style: const TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 19, letterSpacing: 0.5, shadows: [Shadow(color: Colors.black54, blurRadius: 3, offset: Offset(1, 2))])),
              ),
            ),
          ),
          const SizedBox(width: 30),
        ]),
        Padding(padding: const EdgeInsets.symmetric(vertical: 5), child: Container(height: 1, decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.transparent, _gold.withValues(alpha: 0.7), Colors.transparent])))),
        Row(children: [for (final t in tools) Expanded(child: _headerButton(t))]),
      ]),
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

  /// What the AI can do for the book: write new pages (in English or Swahili), or translate it.
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
            if (widget.familyFacts.trim().isNotEmpty) _menuTile(ctx, Icons.auto_awesome_rounded, 'Write new pages', 'Choose English or Swahili, then describe the book', 'write'),
            if (_entries.isNotEmpty) ...[
              if (bookLang == 'en') Padding(padding: const EdgeInsets.only(bottom: 8), child: Text('Your book is in English.', style: TextStyle(color: _paper.withValues(alpha: 0.7), fontSize: 12))),
              if (bookLang == 'sw') Padding(padding: const EdgeInsets.only(bottom: 8), child: Text('Your book is in Swahili.', style: TextStyle(color: _paper.withValues(alpha: 0.7), fontSize: 12))),
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

  /// Turns every page into the other language. The old text is kept so it can be brought back.
  Future<void> _translateAll(String target) async {
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
      done = await ngmyTranslateBookPages(pages: [for (final e in before) (e.title, e.body)], target: target, onStatus: (s, _) => status.value = s);
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
      content: Text('Your book is now in ${target.startsWith('Swahili') ? 'Swahili' : 'English'}.'),
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
    final gold = design.silver ? const Color(0xFFE5E7EB) : _FamilyBookScreenState._gold;
    return Container(
      decoration: BoxDecoration(
        borderRadius: const BorderRadius.horizontal(left: Radius.circular(8), right: Radius.circular(18)),
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: st.colors),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.6), blurRadius: 28, offset: const Offset(8, 14))],
      ),
      child: Stack(children: [
        Positioned.fill(child: CustomPaint(painter: _LeatherPainter())),
        // The spine, with its stitches.
        Positioned(left: 0, top: 0, bottom: 0, width: 26, child: Container(decoration: BoxDecoration(borderRadius: const BorderRadius.horizontal(left: Radius.circular(8)), gradient: LinearGradient(colors: [Colors.black.withValues(alpha: 0.45), Colors.transparent])))),
        for (var i = 0; i < 6; i++) Positioned(left: 8, top: 40.0 + i * 46, child: Container(width: 6, height: 22, decoration: BoxDecoration(color: gold.withValues(alpha: 0.7), borderRadius: BorderRadius.circular(3)))),
        // Gold frame.
        Positioned.fill(child: Padding(padding: const EdgeInsets.fromLTRB(40, 24, 24, 24), child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), border: Border.all(color: gold.withValues(alpha: 0.85), width: 2.2))))),
        Positioned.fill(child: Padding(padding: const EdgeInsets.fromLTRB(46, 30, 30, 30), child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(5), border: Border.all(color: gold.withValues(alpha: 0.45), width: 1))))),
        Positioned.fill(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(56, 40, 40, 40),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(kFamilyCoverEmblems[design.emblem.clamp(0, kFamilyCoverEmblems.length - 1)], color: gold.withValues(alpha: 0.95), size: 44),
              const SizedBox(height: 14),
              Text(title, textAlign: TextAlign.center, maxLines: 4, overflow: TextOverflow.ellipsis, style: TextStyle(color: gold, fontWeight: FontWeight.w900, fontSize: 25, height: 1.2, letterSpacing: 0.5, shadows: [Shadow(color: Colors.black54, blurRadius: 3, offset: Offset(1, 2))])),
              const SizedBox(height: 12),
              Container(width: 90, height: 2, color: gold.withValues(alpha: 0.7)),
              const SizedBox(height: 12),
              Text(design.subtitle.trim().isNotEmpty ? design.subtitle.trim() : (pages == 0 ? 'A family story' : '$pages ${pages == 1 ? 'page' : 'pages'} of our story'), style: TextStyle(color: gold.withValues(alpha: 0.85), fontStyle: FontStyle.italic, fontSize: 14)),
            ]),
          ),
        ),
        // The ribbon bookmark.
        Positioned(right: 46, top: 0, child: CustomPaint(size: const Size(22, 64), painter: _RibbonPainter())),
      ]),
    );
  }
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

  @override
  void dispose() {
    _title.dispose();
    _sub.dispose();
    super.dispose();
  }

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
    final shown = _c.copyWith(title: _title.text, subtitle: _sub.text);
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
            Row(children: [
              const Text('LETTERING', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
              const Spacer(),
              ChoiceChip(label: const Text('Gold'), selected: !_c.silver, onSelected: (_) => setState(() => _c = _c.copyWith(silver: false))),
              const SizedBox(width: 8),
              ChoiceChip(label: const Text('Silver'), selected: _c.silver, onSelected: (_) => setState(() => _c = _c.copyWith(silver: true))),
            ]),
            const SizedBox(height: 18),
            FilledButton(
              onPressed: () => Navigator.pop(context, _c.copyWith(title: _title.text.trim(), subtitle: _sub.text.trim())),
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

class _LeatherPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final r = math.Random(11);
    final p = Paint()..color = Colors.black.withValues(alpha: 0.07);
    for (var i = 0; i < 260; i++) {
      canvas.drawCircle(Offset(r.nextDouble() * size.width, r.nextDouble() * size.height), 0.8 + r.nextDouble() * 1.8, p);
    }
    final hi = Paint()..color = Colors.white.withValues(alpha: 0.035);
    for (var i = 0; i < 120; i++) {
      canvas.drawCircle(Offset(r.nextDouble() * size.width, r.nextDouble() * size.height), 0.6 + r.nextDouble() * 1.2, hi);
    }
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
  });

  final FamilyBookEntry entry;
  final int number;
  final int total;
  final bool editing;
  final TextEditingController titleCtrl;
  final TextEditingController bodyCtrl;
  final String Function(DateTime) formatDate;

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
