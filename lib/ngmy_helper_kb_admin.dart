import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_helper_kb.dart';
import 'ngmy_helper_kb_ai.dart';
import 'ngmy_helper_kb_rich_editor.dart';
import 'ngmy_voice_input.dart';
import 'ngmy_worksheet_helpers.dart';

class _AdminPalette {
  final bool isDark;
  const _AdminPalette(this.isDark);
  factory _AdminPalette.of(BuildContext context) => _AdminPalette(Theme.of(context).brightness == Brightness.dark);
  Color get pageBg => isDark ? const Color(0xFF0B1220) : const Color(0xFFF1F5F9);
  Color get card => isDark ? const Color(0xFF151C28) : Colors.white;
  Color get cardBorder => isDark ? const Color(0xFF334155) : const Color(0xFFE2E8F0);
  Color get title => isDark ? const Color(0xFFF8FAFC) : const Color(0xFF0F172A);
  Color get body => isDark ? const Color(0xFFCBD5E1) : const Color(0xFF334155);
  Color get muted => isDark ? const Color(0xFF94A3B8) : const Color(0xFF64748B);
  Color get fieldFill => isDark ? const Color(0xFF1E293B) : const Color(0xFFF8FAFC);
}

/// Admin-only editor for Help Topics categories, questions, and rich answers.
class NgmyHelperKbAdminScreen extends StatefulWidget {
  final List<NgmyHelperKbCategory> initialCategories;
  final Future<bool> Function(List<NgmyHelperKbCategory> categories) onSave;
  final String apiKey;

  const NgmyHelperKbAdminScreen({
    super.key,
    required this.initialCategories,
    required this.onSave,
    this.apiKey = '',
  });

  @override
  State<NgmyHelperKbAdminScreen> createState() => _NgmyHelperKbAdminScreenState();
}

class _NgmyHelperKbAdminScreenState extends State<NgmyHelperKbAdminScreen> {
  late List<NgmyHelperKbCategory> _categories;
  bool _saving = false;
  bool _aiBusy = false;
  bool _aiExpanded = true;
  final _aiCtrl = TextEditingController();
  final _aiScroll = ScrollController();
  final List<Map<String, String>> _aiLog = [];

  @override
  void initState() {
    super.initState();
    _categories = widget.initialCategories.map((c) => c.copyWith(questions: List.from(c.questions))).toList()
      ..sort((a, b) => a.sortOrder.compareTo(b.sortOrder));
    _normalizeSortOrders();
  }

  @override
  void dispose() {
    _aiCtrl.dispose();
    _aiScroll.dispose();
    super.dispose();
  }

  Future<void> _saveAll() async {
    _normalizeSortOrders();
    setState(() => _saving = true);
    final ok = await widget.onSave(_categories);
    if (mounted) {
      setState(() => _saving = false);
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(ok ? 'Help Topics saved to cloud.' : 'Saved locally — cloud sync failed.'),
          backgroundColor: ok ? const Color(0xFF16A34A) : const Color(0xFFEF4444),
        ),
      );
    }
  }

  Future<void> _addCategory() async {
    final id = 'cat_${DateTime.now().microsecondsSinceEpoch}';
    final cat = NgmyHelperKbCategory(
      id: id,
      title: 'New Category',
      icon: Icons.folder_rounded,
      colorValue: 0xFF64748B,
      sortOrder: _categories.length,
      questions: const [],
    );
    setState(() => _categories.add(cat));
    _normalizeSortOrders();
    if (!mounted) return;
    final edited = await showDialog<NgmyHelperKbCategory>(
      context: context,
      builder: (ctx) => _CategoryEditDialog(category: cat),
    );
    if (!mounted) return;
    setState(() {
      final idx = _categories.indexWhere((c) => c.id == id);
      if (edited != null && idx >= 0) {
        _categories[idx] = edited;
      } else if (edited == null && idx >= 0) {
        _categories.removeAt(idx);
        _normalizeSortOrders();
      }
    });
  }

  Future<void> _runAi() async {
    final instruction = _aiCtrl.text.trim();
    if (instruction.isEmpty || _aiBusy) return;
    setState(() {
      _aiBusy = true;
      _aiLog.add({'role': 'admin', 'text': instruction});
    });
    _aiCtrl.clear();
    final result = await NgmyHelperKbAi.generate(
      apiKeyRaw: widget.apiKey,
      adminInstruction: instruction,
      existing: _categories,
    );
    if (!mounted) return;
    setState(() {
      _aiBusy = false;
      if (result.error != null) {
        _aiLog.add({'role': 'ai', 'text': result.error!});
      } else {
        _categories = ngmyHelperKbMergeAiResult(
          current: _categories,
          generated: result.categories,
          replaceCategoryId: result.replaceId,
        );
        _normalizeSortOrders();
        _aiLog.add({'role': 'ai', 'text': result.message ?? 'Created ${result.categories.length} category(s) with stored Q&A. Tap Save to publish.'});
      }
    });
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_aiScroll.hasClients) {
        _aiScroll.jumpTo(_aiScroll.position.maxScrollExtent);
      }
    });
  }

  void _editCategory(int index) async {
    final cat = _categories[index];
    final result = await showDialog<NgmyHelperKbCategory>(
      context: context,
      builder: (ctx) => _CategoryEditDialog(category: cat),
    );
    if (result != null) setState(() => _categories[index] = result);
  }

  void _deleteCategory(int index) {
    setState(() => _categories.removeAt(index));
    _normalizeSortOrders();
  }

  void _normalizeSortOrders() {
    for (var i = 0; i < _categories.length; i++) {
      _categories[i] = _categories[i].copyWith(sortOrder: i);
    }
  }

  void _onReorderCategories(int oldIndex, int newIndex) {
    setState(() {
      if (newIndex > oldIndex) newIndex -= 1;
      final item = _categories.removeAt(oldIndex);
      _categories.insert(newIndex, item);
      _normalizeSortOrders();
    });
  }

  void _manageQuestions(int catIndex) async {
    await Navigator.push<void>(
      context,
      MaterialPageRoute(
        builder: (_) => _QuestionListAdminPage(
          category: _categories[catIndex],
          onChanged: (updated) => setState(() => _categories[catIndex] = updated),
        ),
      ),
    );
  }

  Widget _buildAiPanel(_AdminPalette p) {
    return AnimatedContainer(
      duration: const Duration(milliseconds: 220),
      margin: const EdgeInsets.fromLTRB(16, 12, 16, 0),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: p.isDark
              ? [const Color(0xFF1E3A5F), const Color(0xFF1E293B)]
              : [const Color(0xFFDBEAFE), const Color(0xFFE0F2FE)],
        ),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: p.isDark ? const Color(0xFF3B82F6).withValues(alpha: 0.35) : const Color(0xFF93C5FD)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          InkWell(
            onTap: () => setState(() => _aiExpanded = !_aiExpanded),
            child: Row(
              children: [
                Icon(Icons.auto_awesome_rounded, color: p.isDark ? const Color(0xFF93C5FD) : const Color(0xFF1D4ED8)),
                const SizedBox(width: 8),
                Expanded(
                  child: Text('AI Builder — tell it what to create', style: TextStyle(fontWeight: FontWeight.w900, color: p.title)),
                ),
                Icon(_aiExpanded ? Icons.expand_less : Icons.expand_more, color: p.muted),
              ],
            ),
          ),
          if (_aiExpanded) ...[
            const SizedBox(height: 10),
            if (_aiLog.isNotEmpty)
              Container(
                constraints: const BoxConstraints(maxHeight: 120),
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(color: p.card.withValues(alpha: 0.65), borderRadius: BorderRadius.circular(12)),
                child: ListView.builder(
                  controller: _aiScroll,
                  itemCount: _aiLog.length,
                  itemBuilder: (_, i) {
                    final m = _aiLog[i];
                    final isAdmin = m['role'] == 'admin';
                    return Padding(
                      padding: const EdgeInsets.only(bottom: 6),
                      child: Text(
                        '${isAdmin ? 'You' : 'AI'}: ${m['text']}',
                        style: TextStyle(fontSize: 12, color: p.body, fontWeight: isAdmin ? FontWeight.w600 : FontWeight.w500),
                      ),
                    );
                  },
                ),
              ),
            const SizedBox(height: 8),
            Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Expanded(
                  child: TextField(
                    controller: _aiCtrl,
                    minLines: 1,
                    maxLines: 3,
                    style: TextStyle(color: p.title),
                    decoration: InputDecoration(
                      hintText: 'e.g. Create a Crypto category with 4 questions about deposits and withdrawals…',
                      hintStyle: TextStyle(color: p.muted, fontSize: 13),
                      filled: true,
                      fillColor: p.fieldFill,
                      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                      contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                    ),
                    onSubmitted: (_) => _runAi(),
                  ),
                ),
                NgmyVoiceMicButton(controller: _aiCtrl, color: const Color(0xFF2563EB)),
                const SizedBox(width: 4),
                FilledButton(
                  onPressed: _aiBusy ? null : _runAi,
                  style: FilledButton.styleFrom(backgroundColor: const Color(0xFF2563EB), padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14)),
                  child: _aiBusy
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : const Icon(Icons.send_rounded, color: Colors.white),
                ),
              ],
            ),
          ],
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = _AdminPalette.of(context);
    return Scaffold(
      backgroundColor: p.pageBg,
      appBar: AppBar(
        backgroundColor: p.isDark ? const Color(0xFF0B1220) : null,
        foregroundColor: p.title,
        title: Text('Help Topics Admin', style: TextStyle(fontWeight: FontWeight.w900, color: p.title)),
        actions: [
          TextButton.icon(
            onPressed: _saving ? null : _saveAll,
            icon: _saving
                ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                : Icon(Icons.cloud_upload_rounded, color: p.title),
            label: Text('Save', style: TextStyle(color: p.title)),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _addCategory,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Category'),
        backgroundColor: const Color(0xFF00B25A),
      ),
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          _buildAiPanel(p),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
            child: Text('Drag categories to reorder. Tap a category to edit questions.', style: TextStyle(fontSize: 12, color: p.muted)),
          ),
          Expanded(
            child: ReorderableListView.builder(
              padding: const EdgeInsets.fromLTRB(16, 12, 16, 96),
              itemCount: _categories.length,
              onReorder: _onReorderCategories,
              buildDefaultDragHandles: false,
              itemBuilder: (_, i) {
                final c = _categories[i];
                return Padding(
                  key: ValueKey(c.id),
                  padding: const EdgeInsets.only(bottom: 10),
                  child: Material(
                    color: p.card,
                    borderRadius: BorderRadius.circular(16),
                    child: ListTile(
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(16),
                        side: BorderSide(color: p.cardBorder),
                      ),
                      leading: ReorderableDragStartListener(
                        index: i,
                        child: Container(
                          padding: const EdgeInsets.all(10),
                          decoration: BoxDecoration(
                            color: Color(c.colorValue).withValues(alpha: 0.15),
                            borderRadius: BorderRadius.circular(12),
                          ),
                          child: Icon(Icons.drag_handle_rounded, color: p.muted, size: 20),
                        ),
                      ),
                      title: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(6),
                            decoration: BoxDecoration(
                              color: Color(c.colorValue).withValues(alpha: 0.12),
                              borderRadius: BorderRadius.circular(8),
                            ),
                            child: Icon(c.icon, color: Color(c.colorValue), size: 18),
                          ),
                          const SizedBox(width: 10),
                          Expanded(child: Text(c.title, style: TextStyle(fontWeight: FontWeight.w800, color: p.title))),
                        ],
                      ),
                      subtitle: Text('#${i + 1} · ${c.questions.length} question(s)', style: TextStyle(color: p.muted, fontSize: 11)),
                      trailing: PopupMenuButton<String>(
                        onSelected: (v) {
                          if (v == 'edit') _editCategory(i);
                          if (v == 'questions') _manageQuestions(i);
                          if (v == 'delete') _deleteCategory(i);
                        },
                        itemBuilder: (_) => const [
                          PopupMenuItem(value: 'questions', child: Text('Manage questions')),
                          PopupMenuItem(value: 'edit', child: Text('Edit category')),
                          PopupMenuItem(value: 'delete', child: Text('Delete category')),
                        ],
                      ),
                      onTap: () => _manageQuestions(i),
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

class _CategoryEditDialog extends StatefulWidget {
  final NgmyHelperKbCategory category;
  const _CategoryEditDialog({required this.category});

  @override
  State<_CategoryEditDialog> createState() => _CategoryEditDialogState();
}

class _CategoryEditDialogState extends State<_CategoryEditDialog> {
  late TextEditingController _titleC;
  late IconData _icon;
  late int _color;

  static const _icons = [
    Icons.show_chart_rounded, Icons.sports_esports_rounded, Icons.account_balance_wallet_rounded,
    Icons.download_rounded, Icons.swap_horiz_rounded, Icons.verified_user_rounded, Icons.storefront_rounded,
    Icons.work_rounded, Icons.replay_rounded, Icons.person_rounded, Icons.music_note_rounded, Icons.help_rounded, Icons.folder_rounded,
  ];

  static const _colors = [
    0xFF22C55E, 0xFF8B5CF6, 0xFFF97316, 0xFF3B82F6, 0xFF14B8A6,
    0xFFA78BFA, 0xFFEC4899, 0xFFEA580C, 0xFFEF4444, 0xFF38BDF8, 0xFFC084FC, 0xFF0D9488,
  ];

  @override
  void initState() {
    super.initState();
    _titleC = TextEditingController(text: widget.category.title);
    _icon = widget.category.icon;
    _color = widget.category.colorValue;
  }

  @override
  void dispose() {
    _titleC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return AlertDialog(
      backgroundColor: isDark ? const Color(0xFF151C28) : Colors.white,
      title: Text('Edit category', style: TextStyle(color: isDark ? Colors.white : Colors.black87)),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(
              controller: _titleC,
              style: TextStyle(color: isDark ? Colors.white : Colors.black87),
              decoration: const InputDecoration(labelText: 'Title'),
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 8,
              runSpacing: 8,
              children: _icons.map((ic) {
                final sel = ic.codePoint == _icon.codePoint;
                return InkWell(
                  onTap: () => setState(() => _icon = ic),
                  child: Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: sel ? Color(_color).withValues(alpha: 0.2) : Colors.grey.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(10),
                      border: Border.all(color: sel ? Color(_color) : Colors.transparent),
                    ),
                    child: Icon(ic, color: Color(_color)),
                  ),
                );
              }).toList(),
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 8,
              children: _colors.map((c) {
                return GestureDetector(
                  onTap: () => setState(() => _color = c),
                  child: CircleAvatar(
                    radius: 14,
                    backgroundColor: Color(c),
                    child: _color == c ? const Icon(Icons.check, size: 14, color: Colors.white) : null,
                  ),
                );
              }).toList(),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel')),
        FilledButton(
          onPressed: () => Navigator.pop(
            context,
            widget.category.copyWith(
              title: _titleC.text.trim().isEmpty ? widget.category.title : _titleC.text.trim(),
              icon: _icon,
              colorValue: _color,
            ),
          ),
          child: const Text('Save'),
        ),
      ],
    );
  }
}

class _QuestionListAdminPage extends StatefulWidget {
  final NgmyHelperKbCategory category;
  final ValueChanged<NgmyHelperKbCategory> onChanged;

  const _QuestionListAdminPage({required this.category, required this.onChanged});

  @override
  State<_QuestionListAdminPage> createState() => _QuestionListAdminPageState();
}

class _QuestionListAdminPageState extends State<_QuestionListAdminPage> {
  late List<NgmyHelperKbQuestion> _questions;

  @override
  void initState() {
    super.initState();
    _questions = List.from(widget.category.questions);
  }

  void _sync() => widget.onChanged(widget.category.copyWith(questions: _questions));

  void _addQuestion() async {
    final q = NgmyHelperKbQuestion(
      id: 'q_${DateTime.now().microsecondsSinceEpoch}',
      question: '',
      answerBlocks: const [NgmyHelperKbBlock(type: 'text', content: '')],
      sortOrder: _questions.length,
    );
    final edited = await _openQuestionEditor(q);
    if (edited != null) {
      setState(() => _questions.add(edited));
      _sync();
    }
  }

  Future<NgmyHelperKbQuestion?> _openQuestionEditor(NgmyHelperKbQuestion q) {
    return Navigator.push<NgmyHelperKbQuestion>(
      context,
      MaterialPageRoute(builder: (_) => _QuestionEditorPage(initial: q)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = _AdminPalette.of(context);
    return Scaffold(
      backgroundColor: p.pageBg,
      appBar: AppBar(
        backgroundColor: p.isDark ? const Color(0xFF0B1220) : null,
        foregroundColor: p.title,
        title: Text('${widget.category.title} — Questions', style: TextStyle(color: p.title, fontWeight: FontWeight.w800)),
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _addQuestion,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Question'),
        backgroundColor: const Color(0xFF00B25A),
      ),
      body: _questions.isEmpty
          ? Center(child: Text('No questions yet. Tap + Question.', style: TextStyle(color: p.muted)))
          : ListView.separated(
              padding: const EdgeInsets.fromLTRB(16, 16, 16, 96),
              itemCount: _questions.length,
              separatorBuilder: (_, __) => const SizedBox(height: 8),
              itemBuilder: (_, i) {
                final q = _questions[i];
                return Material(
                  color: p.card,
                  borderRadius: BorderRadius.circular(14),
                  child: ListTile(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                      side: BorderSide(color: p.cardBorder),
                    ),
                    leading: q.thumbnailPath != null && q.thumbnailPath!.isNotEmpty
                        ? ClipRRect(
                            borderRadius: BorderRadius.circular(8),
                            child: ngmyImageOrPlaceholder(imageRef: q.thumbnailPath, width: 48, height: 36, iconColor: p.muted),
                          )
                        : Icon(Icons.quiz_outlined, color: Color(widget.category.colorValue)),
                    title: Text(
                      q.question.isEmpty ? '(Untitled question)' : q.question,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontWeight: FontWeight.w700, color: p.title),
                    ),
                    subtitle: Text(
                      '${q.answerBlocks.length} block(s)${q.printable ? ' · Printable' : ''}',
                      style: TextStyle(color: p.muted, fontSize: 11),
                    ),
                    trailing: IconButton(
                      icon: const Icon(Icons.delete_outline, color: Colors.red),
                      onPressed: () {
                        setState(() => _questions.removeAt(i));
                        _sync();
                      },
                    ),
                    onTap: () async {
                      final edited = await _openQuestionEditor(q);
                      if (edited != null) {
                        setState(() => _questions[i] = edited);
                        _sync();
                      }
                    },
                  ),
                );
              },
            ),
    );
  }
}

class _QuestionEditorPage extends StatefulWidget {
  final NgmyHelperKbQuestion initial;
  const _QuestionEditorPage({required this.initial});

  @override
  State<_QuestionEditorPage> createState() => _QuestionEditorPageState();
}

class _QuestionEditorPageState extends State<_QuestionEditorPage> {
  late TextEditingController _questionC;
  late List<NgmyHelperKbBlock> _blocks;
  String? _thumbnail;
  bool _printable = false;

  @override
  void initState() {
    super.initState();
    _questionC = TextEditingController(text: widget.initial.question);
    _blocks = List.from(widget.initial.answerBlocks);
    if (_blocks.isEmpty) _blocks.add(const NgmyHelperKbBlock(type: 'text', content: ''));
    _thumbnail = widget.initial.thumbnailPath;
    _printable = widget.initial.printable;
  }

  @override
  void dispose() {
    _questionC.dispose();
    super.dispose();
  }

  Future<void> _pickThumbnail() async {
    final ref = await ngmyPickImageBase64();
    if (ref != null) setState(() => _thumbnail = ref);
  }

  Future<void> _openDocumentEditor() async {
    final result = await Navigator.push<List<NgmyHelperKbBlock>>(
      context,
      MaterialPageRoute(
        builder: (_) => NgmyHelperKbRichEditorPage(initialBlocks: _blocks, title: 'Answer Document'),
      ),
    );
    if (result != null) setState(() => _blocks = result);
  }

  NgmyHelperKbQuestion _result() => widget.initial.copyWith(
        question: _questionC.text.trim(),
        answerBlocks: _blocks,
        thumbnailPath: _thumbnail,
        printable: _printable,
      );

  @override
  Widget build(BuildContext context) {
    final p = _AdminPalette.of(context);
    return Scaffold(
      backgroundColor: p.pageBg,
      appBar: AppBar(
        backgroundColor: p.isDark ? const Color(0xFF0B1220) : null,
        foregroundColor: p.title,
        title: Text('Edit Question', style: TextStyle(color: p.title, fontWeight: FontWeight.w900)),
        actions: [
          FilledButton.icon(
            onPressed: () => Navigator.pop(context, _result()),
            icon: const Icon(Icons.check_rounded, size: 18),
            label: const Text('Save'),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white),
          ),
          const SizedBox(width: 10),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          Text('Question thumbnail', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: p.title)),
          const SizedBox(height: 8),
          GestureDetector(
            onTap: _pickThumbnail,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(14),
              child: ngmyImageOrPlaceholder(
                imageRef: _thumbnail,
                width: double.infinity,
                height: 140,
                icon: Icons.add_photo_alternate_outlined,
                iconColor: p.muted,
                borderRadius: BorderRadius.circular(14),
              ),
            ),
          ),
          const SizedBox(height: 20),
          Text('Question users will tap', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: p.title)),
          const SizedBox(height: 8),
          Container(
            decoration: BoxDecoration(
              color: p.fieldFill,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: p.cardBorder),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 4),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: _questionC,
                    minLines: 2,
                    maxLines: 4,
                    style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: p.title),
                    decoration: InputDecoration(
                      hintText: 'What question should users see?',
                      hintStyle: TextStyle(color: p.muted, fontWeight: FontWeight.w500),
                      border: InputBorder.none,
                      contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 12),
                    ),
                  ),
                ),
                NgmyVoiceMicButton(controller: _questionC),
              ],
            ),
          ),
          const SizedBox(height: 16),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            title: Text('Printable document', style: TextStyle(color: p.title, fontWeight: FontWeight.w600)),
            subtitle: Text('Shows a printable badge on this answer', style: TextStyle(color: p.muted, fontSize: 12)),
            value: _printable,
            activeColor: const Color(0xFF00B25A),
            onChanged: (v) => setState(() => _printable = v),
          ),
          const SizedBox(height: 8),
          Text('Stored answer (not AI)', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: p.title)),
          const SizedBox(height: 4),
          Text('Open the document editor for Word-style formatting, images, links, and video.', style: TextStyle(fontSize: 12, color: p.muted)),
          const SizedBox(height: 12),
          Material(
            color: p.card,
            borderRadius: BorderRadius.circular(16),
            child: InkWell(
              borderRadius: BorderRadius.circular(16),
              onTap: _openDocumentEditor,
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFF2563EB).withValues(alpha: 0.45)),
                ),
                child: Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: const Color(0xFF2563EB).withValues(alpha: 0.12),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: const Icon(Icons.description_outlined, color: Color(0xFF2563EB), size: 28),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Open Document Editor', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: p.title)),
                          const SizedBox(height: 4),
                          Text('${_blocks.length} block(s) · Bold, headings, lists, media', style: TextStyle(fontSize: 12, color: p.muted)),
                        ],
                      ),
                    ),
                    Icon(Icons.arrow_forward_ios_rounded, size: 16, color: p.muted),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
