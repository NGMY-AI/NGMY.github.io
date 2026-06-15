import 'package:flutter/material.dart';

import 'ngmy_family_book_storage.dart';
import 'ngmy_worksheet_helpers.dart';

Future<void> showFamilyBookSheet(
  BuildContext context, {
  required String userEmail,
  required String treeId,
  required bool canEdit,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: WorksheetPalette.of(context).cardBg,
    shape: const RoundedRectangleBorder(
      borderRadius: BorderRadius.vertical(top: Radius.circular(20)),
    ),
    builder: (ctx) => _FamilyBookSheet(
      userEmail: userEmail,
      treeId: treeId,
      canEdit: canEdit,
    ),
  );
}

class _FamilyBookSheet extends StatefulWidget {
  const _FamilyBookSheet({
    required this.userEmail,
    required this.treeId,
    required this.canEdit,
  });

  final String userEmail;
  final String treeId;
  final bool canEdit;

  @override
  State<_FamilyBookSheet> createState() => _FamilyBookSheetState();
}

class _FamilyBookSheetState extends State<_FamilyBookSheet> {
  List<FamilyBookEntry> _entries = [];
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await loadFamilyBookEntries(widget.userEmail, widget.treeId);
    if (!mounted) return;
    setState(() {
      _entries = list;
      _loading = false;
    });
  }

  Future<void> _openEditor({FamilyBookEntry? existing}) async {
    if (!widget.canEdit) return;
    final saved = await showDialog<FamilyBookEntry>(
      context: context,
      builder: (ctx) => _FamilyBookEntryDialog(existing: existing),
    );
    if (saved == null || !mounted) return;
    await upsertFamilyBookEntry(widget.userEmail, widget.treeId, saved);
    await _reload();
  }

  Future<void> _deleteEntry(FamilyBookEntry entry) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) {
        final p = WorksheetPalette.of(ctx);
        return AlertDialog(
          backgroundColor: p.cardBg,
          title: Text('Delete story?', style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w800)),
          content: Text(
            '“${entry.title}” will be removed from this device.',
            style: TextStyle(color: p.secondaryText),
          ),
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
    await _reload();
  }

  void _openReader(FamilyBookEntry entry) {
    final p = WorksheetPalette.of(context);
    showDialog<void>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: p.cardBg,
        insetPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 24),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 520, maxHeight: 560),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(20, 20, 12, 8),
                child: Row(
                  children: [
                    Icon(Icons.auto_stories_rounded, color: Colors.orange.shade700),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        entry.title,
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText),
                      ),
                    ),
                    if (widget.canEdit)
                      IconButton(
                        tooltip: 'Edit',
                        onPressed: () {
                          Navigator.pop(ctx);
                          _openEditor(existing: entry);
                        },
                        icon: Icon(Icons.edit_outlined, color: p.secondaryText),
                      ),
                    IconButton(
                      onPressed: () => Navigator.pop(ctx),
                      icon: Icon(Icons.close, color: p.secondaryText),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 20),
                child: Text(
                  _formatDate(entry.updatedAt),
                  style: TextStyle(fontSize: 12, color: p.secondaryText),
                ),
              ),
              const SizedBox(height: 12),
              Expanded(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 20),
                  child: Text(
                    entry.body,
                    style: TextStyle(fontSize: 15, height: 1.55, color: p.primaryText),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  String _formatDate(DateTime dt) {
    final local = dt.toLocal();
    final m = local.month.toString().padLeft(2, '0');
    final d = local.day.toString().padLeft(2, '0');
    return '${local.year}-$m-$d';
  }

  String _preview(String body) {
    final trimmed = body.trim();
    if (trimmed.isEmpty) return 'No text yet';
    if (trimmed.length <= 120) return trimmed;
    return '${trimmed.substring(0, 120)}…';
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return DraggableScrollableSheet(
      expand: false,
      initialChildSize: 0.82,
      minChildSize: 0.45,
      maxChildSize: 0.95,
      builder: (_, controller) => Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SizedBox(height: 10),
          Center(
            child: Container(
              width: 42,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.grey.withValues(alpha: 0.35),
                borderRadius: BorderRadius.circular(8),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: Colors.orange.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(Icons.menu_book_rounded, color: Colors.orange.shade800, size: 26),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Family Book',
                        style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText),
                      ),
                      Text(
                        widget.canEdit
                            ? 'Write stories and notes about your family. Saved on this device only.'
                            : 'Stories and notes from the tree owner (this device).',
                        style: TextStyle(fontSize: 12, color: p.secondaryText, height: 1.3),
                      ),
                    ],
                  ),
                ),
                if (widget.canEdit)
                  FilledButton.icon(
                    onPressed: () => _openEditor(),
                    style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.teal),
                    icon: const Icon(Icons.add, size: 18),
                    label: const Text('New'),
                  ),
              ],
            ),
          ),
          Expanded(
            child: _loading
                ? Center(child: CircularProgressIndicator(color: p.secondaryText))
                : _entries.isEmpty
                    ? Center(
                        child: Padding(
                          padding: const EdgeInsets.all(24),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(Icons.auto_stories_outlined, size: 48, color: p.secondaryText.withValues(alpha: 0.5)),
                              const SizedBox(height: 12),
                              Text(
                                widget.canEdit ? 'Start your family book' : 'No stories yet',
                                style: TextStyle(fontWeight: FontWeight.w800, color: p.primaryText),
                              ),
                              const SizedBox(height: 6),
                              Text(
                                widget.canEdit
                                    ? 'Add chapters about your ancestors, traditions, or memories.'
                                    : 'The owner has not written any stories on this device.',
                                textAlign: TextAlign.center,
                                style: TextStyle(color: p.secondaryText, height: 1.35),
                              ),
                            ],
                          ),
                        ),
                      )
                    : ListView.separated(
                        controller: controller,
                        padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                        itemCount: _entries.length,
                        separatorBuilder: (_, _) => const SizedBox(height: 10),
                        itemBuilder: (_, i) {
                          final entry = _entries[i];
                          return Material(
                            color: p.pageBg,
                            borderRadius: BorderRadius.circular(14),
                            child: InkWell(
                              borderRadius: BorderRadius.circular(14),
                              onTap: () => _openReader(entry),
                              child: Padding(
                                padding: const EdgeInsets.all(14),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text(
                                            entry.title,
                                            style: TextStyle(
                                              fontWeight: FontWeight.w800,
                                              fontSize: 15,
                                              color: p.primaryText,
                                            ),
                                          ),
                                          const SizedBox(height: 4),
                                          Text(
                                            _preview(entry.body),
                                            maxLines: 2,
                                            overflow: TextOverflow.ellipsis,
                                            style: TextStyle(fontSize: 13, color: p.secondaryText, height: 1.35),
                                          ),
                                          const SizedBox(height: 6),
                                          Text(
                                            _formatDate(entry.updatedAt),
                                            style: TextStyle(fontSize: 11, color: p.secondaryText.withValues(alpha: 0.8)),
                                          ),
                                        ],
                                      ),
                                    ),
                                    if (widget.canEdit) ...[
                                      IconButton(
                                        tooltip: 'Edit',
                                        onPressed: () => _openEditor(existing: entry),
                                        icon: Icon(Icons.edit_outlined, size: 20, color: p.secondaryText),
                                      ),
                                      IconButton(
                                        tooltip: 'Delete',
                                        onPressed: () => _deleteEntry(entry),
                                        icon: Icon(Icons.delete_outline, size: 20, color: Colors.red.shade400),
                                      ),
                                    ] else
                                      Icon(Icons.chevron_right, color: p.secondaryText),
                                  ],
                                ),
                              ),
                            ),
                          );
                        },
                      ),
          ),
        ],
      ),
    );
  }
}

class _FamilyBookEntryDialog extends StatefulWidget {
  const _FamilyBookEntryDialog({this.existing});

  final FamilyBookEntry? existing;

  @override
  State<_FamilyBookEntryDialog> createState() => _FamilyBookEntryDialogState();
}

class _FamilyBookEntryDialogState extends State<_FamilyBookEntryDialog> {
  late final TextEditingController _titleCtrl;
  late final TextEditingController _bodyCtrl;

  @override
  void initState() {
    super.initState();
    _titleCtrl = TextEditingController(text: widget.existing?.title ?? '');
    _bodyCtrl = TextEditingController(text: widget.existing?.body ?? '');
  }

  @override
  void dispose() {
    _titleCtrl.dispose();
    _bodyCtrl.dispose();
    super.dispose();
  }

  void _save() {
    final title = _titleCtrl.text.trim();
    final body = _bodyCtrl.text.trim();
    if (title.isEmpty || body.isEmpty) return;
    Navigator.pop(
      context,
      FamilyBookEntry(
        id: widget.existing?.id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        title: title,
        body: body,
        updatedAt: DateTime.now(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    final isEdit = widget.existing != null;
    return AlertDialog(
      backgroundColor: p.cardBg,
      insetPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
      title: Text(
        isEdit ? 'Edit story' : 'New story',
        style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w900),
      ),
      content: SizedBox(
        width: 420,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: _titleCtrl,
              autofocus: true,
              style: TextStyle(color: p.primaryText, fontWeight: FontWeight.w700),
              decoration: InputDecoration(
                labelText: 'Title',
                labelStyle: TextStyle(color: p.secondaryText),
                border: const OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: _bodyCtrl,
              minLines: 6,
              maxLines: 14,
              style: TextStyle(color: p.primaryText, height: 1.45),
              decoration: InputDecoration(
                labelText: 'Story or note',
                alignLabelWithHint: true,
                labelStyle: TextStyle(color: p.secondaryText),
                border: const OutlineInputBorder(),
              ),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
        FilledButton(
          onPressed: _save,
          style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
          child: Text(isEdit ? 'Save' : 'Add'),
        ),
      ],
    );
  }
}
