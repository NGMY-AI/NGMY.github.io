import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_helper_kb.dart';
import 'ngmy_worksheet_helpers.dart';

/// Admin-only editor for Help Topics categories, questions, and rich answers.
class NgmyHelperKbAdminScreen extends StatefulWidget {
  final List<NgmyHelperKbCategory> initialCategories;
  final Future<bool> Function(List<NgmyHelperKbCategory> categories) onSave;

  const NgmyHelperKbAdminScreen({
    super.key,
    required this.initialCategories,
    required this.onSave,
  });

  @override
  State<NgmyHelperKbAdminScreen> createState() => _NgmyHelperKbAdminScreenState();
}

class _NgmyHelperKbAdminScreenState extends State<NgmyHelperKbAdminScreen> {
  late List<NgmyHelperKbCategory> _categories;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    _categories = widget.initialCategories.map((c) => c.copyWith(questions: List.from(c.questions))).toList();
  }

  Future<void> _saveAll() async {
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

  void _addCategory() {
    final id = 'cat_${DateTime.now().microsecondsSinceEpoch}';
    setState(() {
      _categories.add(NgmyHelperKbCategory(
        id: id,
        title: 'New Category',
        icon: Icons.folder_rounded,
        colorValue: 0xFF64748B,
        sortOrder: _categories.length,
        questions: const [],
      ));
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

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Scaffold(
      backgroundColor: isDark ? const Color(0xFF0B1220) : const Color(0xFFF1F5F9),
      appBar: AppBar(
        title: const Text('Help Topics Admin', style: TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          TextButton.icon(
            onPressed: _saving ? null : _saveAll,
            icon: _saving
                ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                : const Icon(Icons.cloud_upload_rounded),
            label: const Text('Save'),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _addCategory,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Category'),
        backgroundColor: const Color(0xFF00B25A),
      ),
      body: ListView.separated(
        padding: const EdgeInsets.all(16),
        itemCount: _categories.length,
        separatorBuilder: (_, __) => const SizedBox(height: 10),
        itemBuilder: (_, i) {
          final c = _categories[i];
          return Material(
            color: isDark ? const Color(0xFF151C28) : Colors.white,
            borderRadius: BorderRadius.circular(16),
            child: ListTile(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
              leading: Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: Color(c.colorValue).withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
                child: Icon(c.icon, color: Color(c.colorValue)),
              ),
              title: Text(c.title, style: const TextStyle(fontWeight: FontWeight.w800)),
              subtitle: Text('${c.questions.length} question(s)'),
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
          );
        },
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
    Icons.show_chart_rounded,
    Icons.sports_esports_rounded,
    Icons.account_balance_wallet_rounded,
    Icons.download_rounded,
    Icons.swap_horiz_rounded,
    Icons.verified_user_rounded,
    Icons.storefront_rounded,
    Icons.work_rounded,
    Icons.replay_rounded,
    Icons.person_rounded,
    Icons.music_note_rounded,
    Icons.help_rounded,
    Icons.folder_rounded,
  ];

  static const _colors = [
    0xFF22C55E, 0xFF8B5CF6, 0xFFF97316, 0xFF3B82F6, 0xFF14B8A6,
    0xFFA78BFA, 0xFFEC4899, 0xFFEA580C, 0xFFEF4444, 0xFF38BDF8,
    0xFFC084FC, 0xFF0D9488,
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
    return AlertDialog(
      title: const Text('Edit category'),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            TextField(controller: _titleC, decoration: const InputDecoration(labelText: 'Title')),
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
                  child: CircleAvatar(radius: 14, backgroundColor: Color(c), child: _color == c ? const Icon(Icons.check, size: 14, color: Colors.white) : null),
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
            widget.category.copyWith(title: _titleC.text.trim().isEmpty ? widget.category.title : _titleC.text.trim(), icon: _icon, colorValue: _color),
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
    return Scaffold(
      appBar: AppBar(title: Text('${widget.category.title} — Questions')),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _addQuestion,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Question'),
      ),
      body: _questions.isEmpty
          ? const Center(child: Text('No questions yet. Tap + Question.'))
          : ListView.separated(
              padding: const EdgeInsets.all(16),
              itemCount: _questions.length,
              separatorBuilder: (_, __) => const SizedBox(height: 8),
              itemBuilder: (_, i) {
                final q = _questions[i];
                return ListTile(
                  tileColor: Colors.white,
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                  leading: q.thumbnailPath != null && q.thumbnailPath!.isNotEmpty
                      ? ClipRRect(
                          borderRadius: BorderRadius.circular(8),
                          child: ngmyImageOrPlaceholder(imageRef: q.thumbnailPath, width: 48, height: 36),
                        )
                      : const Icon(Icons.quiz_outlined),
                  title: Text(q.question.isEmpty ? '(Untitled question)' : q.question, maxLines: 2, overflow: TextOverflow.ellipsis),
                  subtitle: Text('${q.answerBlocks.length} block(s)${q.printable ? ' · Printable' : ''}'),
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

  void _addBlock(String type) {
    setState(() {
      switch (type) {
        case 'heading':
          _blocks.add(const NgmyHelperKbBlock(type: 'heading', content: 'Section title'));
          break;
        case 'image':
          _blocks.add(const NgmyHelperKbBlock(type: 'image', url: ''));
          break;
        case 'video':
          _blocks.add(const NgmyHelperKbBlock(type: 'video', url: ''));
          break;
        case 'link':
          _blocks.add(const NgmyHelperKbBlock(type: 'link', label: 'Learn more', url: 'https://'));
          break;
        case 'signature':
          _blocks.add(const NgmyHelperKbBlock(type: 'signature', content: 'NGMY Support Team'));
          break;
        case 'bullets':
          _blocks.add(const NgmyHelperKbBlock(type: 'bullets', content: 'Point one\nPoint two'));
          break;
        case 'divider':
          _blocks.add(const NgmyHelperKbBlock(type: 'divider'));
          break;
        default:
          _blocks.add(const NgmyHelperKbBlock(type: 'text', content: ''));
      }
    });
  }

  Future<void> _pickBlockMedia(int index, {required bool video}) async {
    final picker = ImagePicker();
    if (video) {
      final v = await picker.pickVideo(source: ImageSource.gallery);
      if (v == null) return;
      final bytes = await v.readAsBytes();
      final ref = 'data:video/mp4;base64,${base64Encode(bytes)}';
      setState(() => _blocks[index] = NgmyHelperKbBlock(type: 'video', url: ref));
    } else {
      final ref = await ngmyPickImageBase64();
      if (ref == null) return;
      setState(() => _blocks[index] = NgmyHelperKbBlock(type: 'image', url: ref));
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Edit question'),
        actions: [
          TextButton(
            onPressed: () {
              Navigator.pop(
                context,
                widget.initial.copyWith(
                  question: _questionC.text.trim(),
                  answerBlocks: _blocks,
                  thumbnailPath: _thumbnail,
                  printable: _printable,
                ),
              );
            },
            child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w900)),
          ),
        ],
      ),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: [
          const Text('Question thumbnail (optional)', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 12)),
          const SizedBox(height: 8),
          GestureDetector(
            onTap: _pickThumbnail,
            child: AspectRatio(
              aspectRatio: 16 / 9,
              child: ngmyImageOrPlaceholder(
                imageRef: _thumbnail,
                width: double.infinity,
                height: double.infinity,
                icon: Icons.add_photo_alternate_outlined,
              ),
            ),
          ),
          const SizedBox(height: 16),
          TextField(
            controller: _questionC,
            maxLines: 2,
            decoration: const InputDecoration(labelText: 'Question users will tap', border: OutlineInputBorder()),
          ),
          SwitchListTile(
            contentPadding: EdgeInsets.zero,
            title: const Text('Printable document'),
            subtitle: const Text('Shows a printable badge on this answer'),
            value: _printable,
            onChanged: (v) => setState(() => _printable = v),
          ),
          const SizedBox(height: 12),
          const Text('Answer blocks', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14)),
          const SizedBox(height: 8),
          Wrap(
            spacing: 6,
            runSpacing: 6,
            children: [
              _toolChip('Text', Icons.notes, () => _addBlock('text')),
              _toolChip('Heading', Icons.title, () => _addBlock('heading')),
              _toolChip('Image', Icons.image, () => _addBlock('image')),
              _toolChip('Video', Icons.videocam, () => _addBlock('video')),
              _toolChip('Link', Icons.link, () => _addBlock('link')),
              _toolChip('Bullets', Icons.format_list_bulleted, () => _addBlock('bullets')),
              _toolChip('Signature', Icons.draw, () => _addBlock('signature')),
              _toolChip('Divider', Icons.horizontal_rule, () => _addBlock('divider')),
            ],
          ),
          const SizedBox(height: 12),
          ...List.generate(_blocks.length, (i) => _blockEditor(i)),
        ],
      ),
    );
  }

  Widget _toolChip(String label, IconData icon, VoidCallback onTap) {
    return ActionChip(
      avatar: Icon(icon, size: 16),
      label: Text(label, style: const TextStyle(fontSize: 11)),
      onPressed: onTap,
    );
  }

  Widget _blockEditor(int i) {
    final b = _blocks[i];
    return Card(
      margin: const EdgeInsets.only(bottom: 10),
      child: Padding(
        padding: const EdgeInsets.all(12),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Text(b.type.toUpperCase(), style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 11)),
                const Spacer(),
                IconButton(
                  icon: const Icon(Icons.delete_outline, color: Colors.red, size: 20),
                  onPressed: () => setState(() => _blocks.removeAt(i)),
                ),
              ],
            ),
            if (b.type == 'text' || b.type == 'heading' || b.type == 'signature' || b.type == 'bullets')
              TextField(
                maxLines: b.type == 'bullets' ? 4 : 3,
                controller: TextEditingController(text: b.content)
                  ..selection = TextSelection.collapsed(offset: b.content.length),
                onChanged: (v) => _blocks[i] = NgmyHelperKbBlock(type: b.type, content: v, url: b.url, label: b.label),
                decoration: InputDecoration(hintText: b.type == 'bullets' ? 'One item per line' : 'Content'),
              ),
            if (b.type == 'link') ...[
              TextField(
                decoration: const InputDecoration(labelText: 'Link label'),
                controller: TextEditingController(text: b.label ?? '')
                  ..selection = TextSelection.collapsed(offset: (b.label ?? '').length),
                onChanged: (v) => _blocks[i] = NgmyHelperKbBlock(type: b.type, content: b.content, url: b.url, label: v),
              ),
              TextField(
                decoration: const InputDecoration(labelText: 'URL'),
                controller: TextEditingController(text: b.url ?? b.content)
                  ..selection = TextSelection.collapsed(offset: (b.url ?? b.content).length),
                onChanged: (v) => _blocks[i] = NgmyHelperKbBlock(type: b.type, content: b.content, url: v, label: b.label),
              ),
            ],
            if (b.type == 'image')
              OutlinedButton.icon(
                onPressed: () => _pickBlockMedia(i, video: false),
                icon: const Icon(Icons.photo),
                label: const Text('Choose image'),
              ),
            if (b.type == 'video')
              OutlinedButton.icon(
                onPressed: () => _pickBlockMedia(i, video: true),
                icon: const Icon(Icons.videocam),
                label: const Text('Choose video'),
              ),
            if ((b.type == 'image' || b.type == 'video') && (b.url ?? '').isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Text('Media attached', style: TextStyle(fontSize: 11, color: Colors.green.shade700)),
              ),
          ],
        ),
      ),
    );
  }
}
