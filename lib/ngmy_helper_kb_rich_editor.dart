import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import 'ngmy_helper_kb.dart';
import 'ngmy_worksheet_helpers.dart';

class _DocPalette {
  final bool isDark;
  const _DocPalette(this.isDark);
  factory _DocPalette.of(BuildContext context) => _DocPalette(Theme.of(context).brightness == Brightness.dark);
  Color get canvas => isDark ? const Color(0xFF111827) : const Color(0xFFFAFAFA);
  Color get ribbon => isDark ? const Color(0xFF1F2937) : const Color(0xFFF3F4F6);
  Color get border => isDark ? const Color(0xFF374151) : const Color(0xFFD1D5DB);
  Color get text => isDark ? const Color(0xFFF9FAFB) : const Color(0xFF111827);
  Color get muted => isDark ? const Color(0xFF9CA3AF) : const Color(0xFF6B7280);
  Color get paper => isDark ? const Color(0xFF0B1220) : Colors.white;
}

/// Word-style full-page document editor for stored Help Topic answers.
class NgmyHelperKbRichEditorPage extends StatefulWidget {
  final List<NgmyHelperKbBlock> initialBlocks;
  final String title;

  const NgmyHelperKbRichEditorPage({super.key, required this.initialBlocks, this.title = 'Document Editor'});

  @override
  State<NgmyHelperKbRichEditorPage> createState() => _NgmyHelperKbRichEditorPageState();
}

class _NgmyHelperKbRichEditorPageState extends State<NgmyHelperKbRichEditorPage> {
  late TextEditingController _bodyC;
  late List<NgmyHelperKbBlock> _extraBlocks;
  final _bodyFocus = FocusNode();

  @override
  void initState() {
    super.initState();
    _extraBlocks = widget.initialBlocks.where((b) => b.type == 'image' || b.type == 'video' || b.type == 'link' || b.type == 'signature' || b.type == 'divider').toList();
    final textParts = <String>[];
    for (final b in widget.initialBlocks) {
      switch (b.type) {
        case 'heading':
          textParts.add('## ${b.content}');
        case 'text':
          if (b.content.trim().isNotEmpty) textParts.add(b.content);
        case 'bullets':
          for (final line in b.content.split('\n')) {
            if (line.trim().isNotEmpty) textParts.add('• ${line.trim()}');
          }
        default:
          break;
      }
    }
    _bodyC = TextEditingController(text: textParts.join('\n\n'));
  }

  @override
  void dispose() {
    _bodyC.dispose();
    _bodyFocus.dispose();
    super.dispose();
  }

  void _wrapSelection(String left, String right) {
    final sel = _bodyC.selection;
    if (!sel.isValid) return;
    final text = _bodyC.text;
    final selected = sel.textInside(text);
    final replaced = '$left$selected$right';
    final next = text.replaceRange(sel.start, sel.end, replaced);
    _bodyC.value = TextEditingValue(
      text: next,
      selection: TextSelection.collapsed(offset: sel.start + replaced.length),
    );
  }

  void _insertLine(String line) {
    final text = _bodyC.text;
    final pos = _bodyC.selection.baseOffset.clamp(0, text.length);
    final prefix = pos > 0 && text[pos - 1] != '\n' ? '\n' : '';
    final insert = '$prefix$line\n';
    final next = text.replaceRange(pos, pos, insert);
    _bodyC.value = TextEditingValue(text: next, selection: TextSelection.collapsed(offset: pos + insert.length));
  }

  Future<void> _insertImage() async {
    final ref = await ngmyPickImageBase64();
    if (ref == null) return;
    setState(() => _extraBlocks.add(NgmyHelperKbBlock(type: 'image', url: ref)));
  }

  Future<void> _insertVideo() async {
    final v = await ImagePicker().pickVideo(source: ImageSource.gallery);
    if (v == null) return;
    final bytes = await v.readAsBytes();
    setState(() => _extraBlocks.add(NgmyHelperKbBlock(type: 'video', url: 'data:video/mp4;base64,${base64Encode(bytes)}')));
  }

  Future<void> _insertLink() async {
    final labelC = TextEditingController();
    final urlC = TextEditingController(text: 'https://');
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Insert link'),
        content: Column(mainAxisSize: MainAxisSize.min, children: [
          TextField(controller: labelC, decoration: const InputDecoration(labelText: 'Label')),
          TextField(controller: urlC, decoration: const InputDecoration(labelText: 'URL')),
        ]),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Insert')),
        ],
      ),
    );
    if (ok == true) {
      setState(() => _extraBlocks.add(NgmyHelperKbBlock(type: 'link', label: labelC.text.trim(), url: urlC.text.trim())));
    }
    labelC.dispose();
    urlC.dispose();
  }

  List<NgmyHelperKbBlock> _buildResultBlocks() {
    final blocks = <NgmyHelperKbBlock>[];
    final paragraphs = _bodyC.text.split(RegExp(r'\n\s*\n')).map((e) => e.trim()).where((e) => e.isNotEmpty);
    for (final p in paragraphs) {
      if (p.startsWith('## ')) {
        blocks.add(NgmyHelperKbBlock(type: 'heading', content: p.substring(3).trim()));
      } else if (p.startsWith('• ') || p.startsWith('- ')) {
        final lines = p.split('\n').map((l) => l.replaceFirst(RegExp(r'^[•\-]\s*'), '').trim()).where((l) => l.isNotEmpty).join('\n');
        blocks.add(NgmyHelperKbBlock(type: 'bullets', content: lines));
      } else {
        blocks.add(NgmyHelperKbBlock(type: 'text', content: p));
      }
    }
    blocks.addAll(_extraBlocks);
    if (blocks.isEmpty) blocks.add(const NgmyHelperKbBlock(type: 'text', content: ''));
    return blocks;
  }

  @override
  Widget build(BuildContext context) {
    final p = _DocPalette.of(context);
    return Scaffold(
      backgroundColor: p.canvas,
      appBar: AppBar(
        title: Text(widget.title, style: const TextStyle(fontWeight: FontWeight.w900)),
        actions: [
          FilledButton.icon(
            onPressed: () => Navigator.pop(context, _buildResultBlocks()),
            icon: const Icon(Icons.check_rounded, size: 18),
            label: const Text('Apply'),
            style: FilledButton.styleFrom(backgroundColor: const Color(0xFF00B25A), foregroundColor: Colors.white),
          ),
          const SizedBox(width: 8),
        ],
      ),
      body: Column(
        children: [
          Container(
            color: p.ribbon,
            padding: const EdgeInsets.fromLTRB(8, 8, 8, 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Wrap(
                  spacing: 4,
                  runSpacing: 4,
                  children: [
                    _ribbonBtn(Icons.format_bold, 'Bold', () => _wrapSelection('**', '**'), p),
                    _ribbonBtn(Icons.format_italic, 'Italic', () => _wrapSelection('*', '*'), p),
                    _ribbonBtn(Icons.format_underlined, 'Underline', () => _wrapSelection('__', '__'), p),
                    _ribbonBtn(Icons.title, 'Heading', () => _insertLine('## Section title'), p),
                    _ribbonBtn(Icons.format_list_bulleted, 'Bullets', () => _insertLine('• First point\n• Second point'), p),
                    _ribbonBtn(Icons.format_align_left, 'Align', () {}, p),
                    _ribbonBtn(Icons.link, 'Link', _insertLink, p),
                    _ribbonBtn(Icons.image_outlined, 'Image', _insertImage, p),
                    _ribbonBtn(Icons.videocam_outlined, 'Video', _insertVideo, p),
                    _ribbonBtn(Icons.draw_outlined, 'Signature', () {
                      setState(() => _extraBlocks.add(const NgmyHelperKbBlock(type: 'signature', content: 'NGMY Support Team')));
                    }, p),
                    _ribbonBtn(Icons.horizontal_rule, 'Divider', () {
                      setState(() => _extraBlocks.add(const NgmyHelperKbBlock(type: 'divider')));
                    }, p),
                  ],
                ),
                const SizedBox(height: 6),
                Text('Write like Word — use toolbar or type freely. Stored answers only (not AI chat).',
                    style: TextStyle(fontSize: 11, color: p.muted)),
              ],
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(16),
              child: Container(
                decoration: BoxDecoration(
                  color: p.paper,
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: p.border),
                  boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: p.isDark ? 0.35 : 0.08), blurRadius: 16, offset: const Offset(0, 4))],
                ),
                padding: const EdgeInsets.fromLTRB(20, 24, 20, 24),
                child: TextField(
                  controller: _bodyC,
                  focusNode: _bodyFocus,
                  maxLines: null,
                  expands: true,
                  style: TextStyle(fontSize: 15, height: 1.55, color: p.text),
                  decoration: InputDecoration(
                    border: InputBorder.none,
                    hintText: 'Start writing your stored answer…',
                    hintStyle: TextStyle(color: p.muted),
                  ),
                ),
              ),
            ),
          ),
          if (_extraBlocks.isNotEmpty)
            Container(
              padding: const EdgeInsets.fromLTRB(16, 0, 16, 12),
              child: Wrap(
                spacing: 8,
                children: _extraBlocks.asMap().entries.map((e) {
                  final b = e.value;
                  final label = switch (b.type) {
                    'image' => 'Image',
                    'video' => 'Video',
                    'link' => b.label ?? 'Link',
                    'signature' => 'Signature',
                    _ => b.type,
                  };
                  return Chip(
                    label: Text(label, style: TextStyle(fontSize: 11, color: p.text)),
                    deleteIcon: const Icon(Icons.close, size: 16),
                    onDeleted: () => setState(() => _extraBlocks.removeAt(e.key)),
                    backgroundColor: p.ribbon,
                  );
                }).toList(),
              ),
            ),
        ],
      ),
    );
  }

  Widget _ribbonBtn(IconData icon, String tip, VoidCallback onTap, _DocPalette p) {
    return Tooltip(
      message: tip,
      child: Material(
        color: p.paper,
        borderRadius: BorderRadius.circular(8),
        child: InkWell(
          borderRadius: BorderRadius.circular(8),
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Icon(icon, size: 20, color: p.text),
          ),
        ),
      ),
    );
  }
}
