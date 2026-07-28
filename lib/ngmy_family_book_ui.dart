import 'package:flutter/material.dart';

import 'ngmy_family_book_storage.dart';
import 'ngmy_worksheet_helpers.dart';

Future<void> showFamilyBookSheet(
  BuildContext context, {
  required String userEmail,
  required String treeId,
  required bool canEdit,
}) {
  return Navigator.of(context).push<void>(
    MaterialPageRoute(
      fullscreenDialog: true,
      builder: (_) => _FamilyBookScreen(
        userEmail: userEmail,
        treeId: treeId,
        canEdit: canEdit,
      ),
    ),
  );
}

class _FamilyBookScreen extends StatefulWidget {
  const _FamilyBookScreen({
    required this.userEmail,
    required this.treeId,
    required this.canEdit,
  });

  final String userEmail;
  final String treeId;
  final bool canEdit;

  @override
  State<_FamilyBookScreen> createState() => _FamilyBookScreenState();
}

class _FamilyBookScreenState extends State<_FamilyBookScreen> {
  List<FamilyBookEntry> _entries = [];
  bool _loading = true;
  late PageController _pageCtrl;
  int _pageIndex = 0;
  bool _editing = false;
  late TextEditingController _titleCtrl;
  late TextEditingController _bodyCtrl;

  @override
  void initState() {
    super.initState();
    _pageCtrl = PageController();
    _titleCtrl = TextEditingController();
    _bodyCtrl = TextEditingController();
    _reload();
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
      _pageIndex = index;
      _editing = false;
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
    });
    _loadPageIntoEditors();
    if (_pageCtrl.hasClients) {
      await _pageCtrl.animateToPage(
        target,
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
      _pageIndex = (_pageIndex - 1).clamp(0, 999);
    });
    await _reload();
  }

  String _formatDate(DateTime dt) {
    final local = dt.toLocal();
    final m = local.month.toString().padLeft(2, '0');
    final d = local.day.toString().padLeft(2, '0');
    return '${local.year}-$m-$d';
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    final isDark = p.isDark;
    final paper = isDark ? const Color(0xFF2A241C) : const Color(0xFFFAF3E8);
    final ink = isDark ? const Color(0xFFF5EDE0) : const Color(0xFF3D2E1F);
    final cover = isDark ? const Color(0xFF5C3D2E) : const Color(0xFF8B4513);

    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF14110E) : const Color(0xFF3E2723),
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        leading: IconButton(
          icon: Icon(Icons.close_rounded, color: paper),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          'Family Book',
          style: TextStyle(color: paper, fontWeight: FontWeight.w800, fontSize: 16),
        ),
        centerTitle: true,
        actions: [
          if (widget.canEdit && _entries.isNotEmpty)
            IconButton(
              tooltip: _editing ? 'Save page' : 'Edit page',
              onPressed: _editing ? _saveCurrentPage : () => setState(() => _editing = true),
              icon: Icon(_editing ? Icons.check_rounded : Icons.edit_outlined, color: paper, size: 20),
            ),
          if (widget.canEdit)
            IconButton(
              tooltip: 'Add page',
              onPressed: _addPage,
              icon: Icon(Icons.add_circle_outline_rounded, color: paper, size: 20),
            ),
        ],
      ),
      body: _loading
          ? Center(child: CircularProgressIndicator(color: paper))
          : _entries.isEmpty
              ? _emptyBook(p, paper, cover)
              : Column(
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(16, 0, 16, 8),
                      child: Text(
                        _entries.isEmpty
                            ? ''
                            : 'Page ${_pageIndex + 1} of ${_entries.length}',
                        style: TextStyle(color: paper.withValues(alpha: 0.75), fontSize: 12, fontWeight: FontWeight.w600),
                      ),
                    ),
                    Expanded(
                      child: PageView.builder(
                        controller: _pageCtrl,
                        physics: _editing ? const NeverScrollableScrollPhysics() : const BouncingScrollPhysics(),
                        itemCount: _entries.length,
                        onPageChanged: _onPageChanged,
                        itemBuilder: (_, index) {
                          final entry = _entries[index];
                          final isActive = index == _pageIndex;
                          return Padding(
                            padding: const EdgeInsets.fromLTRB(14, 4, 14, 12),
                            child: _BookPageView(
                              paper: paper,
                              ink: ink,
                              cover: cover,
                              entry: entry,
                              editing: isActive && _editing && widget.canEdit,
                              titleCtrl: _titleCtrl,
                              bodyCtrl: _bodyCtrl,
                              formatDate: _formatDate,
                            ),
                          );
                        },
                      ),
                    ),
                    _bookFooter(p, paper, cover),
                  ],
                ),
    );
  }

  Widget _emptyBook(WorksheetPalette p, Color paper, Color cover) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.all(28),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 120,
              height: 150,
              decoration: BoxDecoration(
                color: cover,
                borderRadius: const BorderRadius.horizontal(left: Radius.circular(6), right: Radius.circular(14)),
                boxShadow: [
                  BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 18, offset: const Offset(4, 8)),
                ],
              ),
              child: Icon(Icons.menu_book_rounded, color: paper, size: 48),
            ),
            const SizedBox(height: 20),
            Text(
              widget.canEdit ? 'Start your family book' : 'No pages yet',
              style: TextStyle(color: paper, fontWeight: FontWeight.w800, fontSize: 18),
            ),
            const SizedBox(height: 8),
            Text(
              widget.canEdit
                  ? 'Add pages and swipe through them like a real book — stories, memories, and notes about your family.'
                  : 'The tree owner has not written any pages on this device.',
              textAlign: TextAlign.center,
              style: TextStyle(color: paper.withValues(alpha: 0.75), height: 1.4),
            ),
            if (widget.canEdit) ...[
              const SizedBox(height: 20),
              FilledButton.icon(
                onPressed: _addPage,
                style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
                icon: const Icon(Icons.add, size: 18),
                label: const Text('Add first page'),
              ),
            ],
          ],
        ),
      ),
    );
  }

  Widget _bookFooter(WorksheetPalette p, Color paper, Color cover) {
    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 4, 16, 12),
        child: Row(
          children: [
            IconButton(
              tooltip: 'Previous page',
              onPressed: _pageIndex > 0
                  ? () => _pageCtrl.previousPage(duration: const Duration(milliseconds: 260), curve: Curves.easeOut)
                  : null,
              icon: Icon(Icons.chevron_left_rounded, color: paper, size: 28),
            ),
            Expanded(
              child: Center(
                child: widget.canEdit && _entries.isNotEmpty && !_editing
                    ? TextButton.icon(
                        onPressed: _deleteCurrentPage,
                        icon: Icon(Icons.delete_outline, size: 16, color: Colors.red.shade300),
                        label: Text('Delete page', style: TextStyle(color: Colors.red.shade300, fontSize: 12)),
                      )
                    : _editing
                        ? Text('Writing… swipe disabled while editing', style: TextStyle(color: paper.withValues(alpha: 0.6), fontSize: 11))
                        : Text('Swipe left or right to turn pages', style: TextStyle(color: paper.withValues(alpha: 0.65), fontSize: 11)),
              ),
            ),
            IconButton(
              tooltip: 'Next page',
              onPressed: _pageIndex < _entries.length - 1
                  ? () => _pageCtrl.nextPage(duration: const Duration(milliseconds: 260), curve: Curves.easeOut)
                  : null,
              icon: Icon(Icons.chevron_right_rounded, color: paper, size: 28),
            ),
          ],
        ),
      ),
    );
  }
}

class _BookPageView extends StatelessWidget {
  const _BookPageView({
    required this.paper,
    required this.ink,
    required this.cover,
    required this.entry,
    required this.editing,
    required this.titleCtrl,
    required this.bodyCtrl,
    required this.formatDate,
  });

  final Color paper;
  final Color ink;
  final Color cover;
  final FamilyBookEntry entry;
  final bool editing;
  final TextEditingController titleCtrl;
  final TextEditingController bodyCtrl;
  final String Function(DateTime) formatDate;

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          width: 10,
          decoration: BoxDecoration(
            color: cover.withValues(alpha: 0.95),
            borderRadius: const BorderRadius.horizontal(left: Radius.circular(8)),
            boxShadow: [
              BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 6, offset: const Offset(2, 0)),
            ],
          ),
        ),
        Expanded(
          child: Container(
            decoration: BoxDecoration(
              color: paper,
              borderRadius: const BorderRadius.horizontal(right: Radius.circular(10)),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.18), blurRadius: 16, offset: const Offset(0, 6)),
              ],
            ),
            child: ClipRRect(
              borderRadius: const BorderRadius.horizontal(right: Radius.circular(10)),
              child: Stack(
                children: [
                  Positioned(
                    right: -30,
                    top: 0,
                    bottom: 0,
                    child: Container(
                      width: 60,
                      decoration: BoxDecoration(
                        gradient: LinearGradient(
                          colors: [Colors.transparent, Colors.black.withValues(alpha: 0.04)],
                        ),
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
                    child: editing
                        ? Column(
                            crossAxisAlignment: CrossAxisAlignment.stretch,
                            children: [
                              TextField(
                                controller: titleCtrl,
                                style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 20),
                                decoration: InputDecoration(
                                  hintText: 'Page title',
                                  hintStyle: TextStyle(color: ink.withValues(alpha: 0.35)),
                                  border: InputBorder.none,
                                ),
                              ),
                              Text(
                                formatDate(entry.updatedAt),
                                style: TextStyle(fontSize: 11, color: ink.withValues(alpha: 0.45)),
                              ),
                              const SizedBox(height: 12),
                              Expanded(
                                child: TextField(
                                  controller: bodyCtrl,
                                  maxLines: null,
                                  expands: true,
                                  textAlignVertical: TextAlignVertical.top,
                                  style: TextStyle(color: ink, fontSize: 16, height: 1.65),
                                  decoration: InputDecoration(
                                    hintText: 'Write your family story here…',
                                    hintStyle: TextStyle(color: ink.withValues(alpha: 0.35)),
                                    border: InputBorder.none,
                                  ),
                                ),
                              ),
                            ],
                          )
                        : SingleChildScrollView(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  entry.title,
                                  style: TextStyle(
                                    color: ink,
                                    fontWeight: FontWeight.w900,
                                    fontSize: 22,
                                    height: 1.2,
                                  ),
                                ),
                                const SizedBox(height: 6),
                                Text(
                                  formatDate(entry.updatedAt),
                                  style: TextStyle(fontSize: 11, color: ink.withValues(alpha: 0.45)),
                                ),
                                const SizedBox(height: 18),
                                Text(
                                  entry.body.trim().isEmpty ? 'This page is blank. Tap edit to write.' : entry.body,
                                  style: TextStyle(
                                    color: ink.withValues(alpha: entry.body.trim().isEmpty ? 0.4 : 0.92),
                                    fontSize: 16,
                                    height: 1.7,
                                  ),
                                ),
                              ],
                            ),
                          ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
    );
  }
}
