import 'dart:async';
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:shared_preferences/shared_preferences.dart';

const _kStorageKey = 'ngmy_business_notes_v1';

String _notesKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

const _noteColors = [
  Color(0xFFFFF9C4),
  Color(0xFFFFFFFF),
  Color(0xFFE2E8F0),
  Color(0xFFFBCFE8),
  Color(0xFFBFDBFE),
  Color(0xFFBBF7D0),
  Color(0xFF1E293B),
];

const _noteFolders = ['All', 'Personal', 'Work', 'Ideas', 'Meeting', 'Other'];

class NgmyBusinessNote {
  NgmyBusinessNote({
    String? id,
    this.title = '',
    this.body = '',
    this.folder = 'Personal',
    this.colorIndex = 0,
    this.pinned = false,
    DateTime? createdAt,
    DateTime? updatedAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        createdAt = createdAt ?? DateTime.now(),
        updatedAt = updatedAt ?? DateTime.now();

  final String id;
  String title;
  String body;
  String folder;
  int colorIndex;
  bool pinned;
  final DateTime createdAt;
  DateTime updatedAt;

  String get preview {
    if (title.trim().isNotEmpty) return title.trim();
    final line = body.split('\n').firstWhere((l) => l.trim().isNotEmpty, orElse: () => '');
    return line.trim().isEmpty ? 'New Note' : line.trim();
  }

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'body': body,
        'folder': folder,
        'colorIndex': colorIndex,
        'pinned': pinned,
        'createdAt': createdAt.toUtc().toIso8601String(),
        'updatedAt': updatedAt.toUtc().toIso8601String(),
      };

  factory NgmyBusinessNote.fromJson(Map<String, dynamic> json) => NgmyBusinessNote(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? '').toString(),
        body: (json['body'] ?? '').toString(),
        folder: (json['folder'] ?? 'Personal').toString(),
        colorIndex: (json['colorIndex'] as num?)?.toInt().clamp(0, _noteColors.length - 1) ?? 0,
        pinned: json['pinned'] == true,
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyBusinessNote>> _loadNotes(String userEmail) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_notesKey(userEmail));
    if (raw == null) return [];
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((e) => NgmyBusinessNote.fromJson(Map<String, dynamic>.from(e))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveNotes(String userEmail, List<NgmyBusinessNote> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_notesKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyBusinessNotesCount({required String userEmail}) async => (await _loadNotes(userEmail)).length;

Future<List<NgmyBusinessNote>> ngmyExportBusinessNotes({required String userEmail}) => _loadNotes(userEmail);

Future<void> ngmyImportBusinessNotes({required String userEmail, required List<NgmyBusinessNote> items}) async {
  final existing = await _loadNotes(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveNotes(userEmail, byId.values.toList());
}

Future<void> showNgmyBusinessNotesDialog(BuildContext context, {required String userEmail}) {
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Notes',
    barrierColor: Colors.black.withValues(alpha: 0.92),
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (_, __, ___) => _BusinessNotesScreen(userEmail: userEmail),
    transitionBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
  );
}

class _BusinessNotesScreen extends StatefulWidget {
  const _BusinessNotesScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_BusinessNotesScreen> createState() => _BusinessNotesScreenState();
}

class _BusinessNotesScreenState extends State<_BusinessNotesScreen> {
  static const _accent = Color(0xFFA78BFA);

  List<NgmyBusinessNote> _notes = [];
  bool _loading = true;
  String _query = '';
  String _folder = 'All';

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await _loadNotes(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _notes = list;
      _loading = false;
    });
  }

  List<NgmyBusinessNote> get _visible {
    var list = _notes.where((n) {
      if (_folder != 'All' && n.folder != _folder) return false;
      if (_query.trim().isEmpty) return true;
      final q = _query.toLowerCase();
      return n.title.toLowerCase().contains(q) || n.body.toLowerCase().contains(q);
    }).toList();
    list.sort((a, b) {
      if (a.pinned != b.pinned) return a.pinned ? -1 : 1;
      return b.updatedAt.compareTo(a.updatedAt);
    });
    return list;
  }

  Future<void> _openEditor({NgmyBusinessNote? note}) async {
    final result = await Navigator.of(context).push<NgmyBusinessNote>(
      PageRouteBuilder(
        pageBuilder: (_, anim, __) => _NoteEditorPage(userEmail: widget.userEmail, note: note),
        transitionsBuilder: (_, anim, __, child) => SlideTransition(
          position: Tween<Offset>(begin: const Offset(0, 0.06), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic)),
          child: FadeTransition(opacity: anim, child: child),
        ),
      ),
    );
    if (result == null) return;
    final items = await _loadNotes(widget.userEmail);
    final i = items.indexWhere((e) => e.id == result.id);
    if (i >= 0) {
      items[i] = result;
    } else {
      items.insert(0, result);
    }
    await _saveNotes(widget.userEmail, items);
    await _reload();
  }

  Future<void> _delete(NgmyBusinessNote note) async {
    final items = await _loadNotes(widget.userEmail);
    items.removeWhere((e) => e.id == note.id);
    await _saveNotes(widget.userEmail, items);
    await _reload();
  }

  Future<void> _togglePin(NgmyBusinessNote note) async {
    note.pinned = !note.pinned;
    note.updatedAt = DateTime.now();
    final items = await _loadNotes(widget.userEmail);
    final i = items.indexWhere((e) => e.id == note.id);
    if (i >= 0) items[i] = note;
    await _saveNotes(widget.userEmail, items);
    await _reload();
  }

  @override
  Widget build(BuildContext context) {
    final visible = _visible;
    return Material(
      color: const Color(0xFF030712),
      child: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(12)),
                      child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18),
                    ),
                  ),
                  const Expanded(child: Text('Notes', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20))),
                  IconButton(
                    onPressed: () => _openEditor(),
                    icon: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(colors: [_accent, _accent.withValues(alpha: 0.75)]),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: const Icon(Icons.edit_note_rounded, color: Colors.white, size: 22),
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: TextField(
                onChanged: (v) => setState(() => _query = v),
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  hintText: 'Search notes…',
                  hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.4)),
                  prefixIcon: Icon(Icons.search_rounded, color: Colors.white.withValues(alpha: 0.45)),
                  filled: true,
                  fillColor: Colors.white.withValues(alpha: 0.06),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                  isDense: true,
                ),
              ),
            ),
            SizedBox(
              height: 40,
              child: ListView.separated(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
                itemCount: _noteFolders.length,
                separatorBuilder: (_, __) => const SizedBox(width: 6),
                itemBuilder: (_, i) {
                  final f = _noteFolders[i];
                  final sel = _folder == f;
                  return FilterChip(
                    label: Text(f, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: sel ? Colors.white : Colors.white54)),
                    selected: sel,
                    onSelected: (_) => setState(() => _folder = f),
                    selectedColor: _accent.withValues(alpha: 0.35),
                    backgroundColor: Colors.white.withValues(alpha: 0.06),
                    side: BorderSide(color: sel ? _accent : Colors.white12),
                    showCheckmark: false,
                  );
                },
              ),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator(color: _accent))
                  : visible.isEmpty
                      ? Center(
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(Icons.note_alt_outlined, size: 56, color: Colors.white.withValues(alpha: 0.15)),
                              const SizedBox(height: 12),
                              Text('No notes yet', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700)),
                              const SizedBox(height: 8),
                              TextButton(onPressed: () => _openEditor(), child: const Text('Write your first note')),
                            ],
                          ),
                        )
                      : ListView.separated(
                          padding: const EdgeInsets.fromLTRB(16, 12, 16, 24),
                          itemCount: visible.length,
                          separatorBuilder: (_, __) => const SizedBox(height: 8),
                          itemBuilder: (_, i) {
                            final n = visible[i];
                            final bg = _noteColors[n.colorIndex.clamp(0, _noteColors.length - 1)];
                            final dark = n.colorIndex == 6;
                            return Dismissible(
                              key: ValueKey(n.id),
                              direction: DismissDirection.endToStart,
                              background: Container(
                                alignment: Alignment.centerRight,
                                padding: const EdgeInsets.only(right: 20),
                                decoration: BoxDecoration(color: const Color(0xFFEF4444).withValues(alpha: 0.25), borderRadius: BorderRadius.circular(14)),
                                child: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444)),
                              ),
                              onDismissed: (_) => _delete(n),
                              child: Material(
                                color: Colors.transparent,
                                child: InkWell(
                                  onTap: () => _openEditor(note: n),
                                  borderRadius: BorderRadius.circular(14),
                                  child: Container(
                                    padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                                    decoration: BoxDecoration(
                                      color: dark ? bg : bg.withValues(alpha: 0.92),
                                      borderRadius: BorderRadius.circular(14),
                                      border: Border.all(color: dark ? Colors.white12 : Colors.black.withValues(alpha: 0.06)),
                                    ),
                                    child: Row(
                                      children: [
                                        Expanded(
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.start,
                                            children: [
                                              Text(
                                                n.preview,
                                                maxLines: 1,
                                                overflow: TextOverflow.ellipsis,
                                                style: TextStyle(color: dark ? Colors.white : const Color(0xFF0F172A), fontWeight: FontWeight.w800, fontSize: 15),
                                              ),
                                              if (n.body.trim().isNotEmpty) ...[
                                                const SizedBox(height: 4),
                                                Text(
                                                  n.body,
                                                  maxLines: 2,
                                                  overflow: TextOverflow.ellipsis,
                                                  style: TextStyle(color: dark ? Colors.white70 : const Color(0xFF64748B), fontSize: 12, height: 1.35),
                                                ),
                                              ],
                                            ],
                                          ),
                                        ),
                                        Column(
                                          crossAxisAlignment: CrossAxisAlignment.end,
                                          children: [
                                            Text(
                                              _formatDate(n.updatedAt),
                                              style: TextStyle(color: dark ? Colors.white54 : const Color(0xFF94A3B8), fontSize: 10, fontWeight: FontWeight.w600),
                                            ),
                                            IconButton(
                                              visualDensity: VisualDensity.compact,
                                              icon: Icon(n.pinned ? Icons.push_pin_rounded : Icons.push_pin_outlined, size: 18, color: n.pinned ? _accent : (dark ? Colors.white38 : Colors.black26)),
                                              onPressed: () => _togglePin(n),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            );
                          },
                        ),
            ),
          ],
        ),
      ),
    );
  }

  String _formatDate(DateTime d) {
    final now = DateTime.now();
    if (d.year == now.year && d.month == now.month && d.day == now.day) {
      final h = d.hour > 12 ? d.hour - 12 : (d.hour == 0 ? 12 : d.hour);
      final am = d.hour >= 12 ? 'PM' : 'AM';
      return '$h:${d.minute.toString().padLeft(2, '0')} $am';
    }
    return '${d.month}/${d.day}/${d.year % 100}';
  }
}

class _NoteEditorPage extends StatefulWidget {
  const _NoteEditorPage({required this.userEmail, this.note});
  final String userEmail;
  final NgmyBusinessNote? note;

  @override
  State<_NoteEditorPage> createState() => _NoteEditorPageState();
}

class _NoteEditorPageState extends State<_NoteEditorPage> {
  late NgmyBusinessNote _note;
  late final TextEditingController _title;
  late final TextEditingController _body;
  Timer? _autosave;
  bool _dirty = false;

  @override
  void initState() {
    super.initState();
    _note = widget.note ??
        NgmyBusinessNote(
          folder: 'Personal',
        );
    _title = TextEditingController(text: _note.title);
    _body = TextEditingController(text: _note.body);
    _title.addListener(_markDirty);
    _body.addListener(_markDirty);
  }

  void _markDirty() {
    _dirty = true;
    _autosave?.cancel();
    _autosave = Timer(const Duration(milliseconds: 800), _persist);
  }

  Future<void> _persist() async {
    _note.title = _title.text;
    _note.body = _body.text;
    _note.updatedAt = DateTime.now();
    _dirty = false;
  }

  @override
  void dispose() {
    _autosave?.cancel();
    _title.dispose();
    _body.dispose();
    super.dispose();
  }

  Future<bool> _onWillPop() async {
    await _persist();
    if (mounted) Navigator.pop(context, _note);
    return false;
  }

  void _insertLine(String prefix) {
    final t = _body.text;
    final sel = _body.selection;
    final start = sel.start.clamp(0, t.length);
    final before = t.substring(0, start);
    final after = t.substring(start);
    final needsNl = before.isNotEmpty && !before.endsWith('\n');
    final insert = '${needsNl ? '\n' : ''}$prefix';
    _body.text = before + insert + after;
    _body.selection = TextSelection.collapsed(offset: (before + insert).length);
    _markDirty();
  }

  void _wrapSelection(String left, String right) {
    final t = _body.text;
    final sel = _body.selection;
    if (!sel.isValid) return;
    final s = sel.start.clamp(0, t.length);
    final e = sel.end.clamp(0, t.length);
    if (s == e) {
      _insertLine('$left$right');
      return;
    }
    final selected = t.substring(s, e);
    _body.text = t.substring(0, s) + left + selected + right + t.substring(e);
    _body.selection = TextSelection(baseOffset: s + left.length, extentOffset: e + left.length);
    _markDirty();
  }

  @override
  Widget build(BuildContext context) {
    final bg = _noteColors[_note.colorIndex.clamp(0, _noteColors.length - 1)];
    final dark = _note.colorIndex == 6;
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) _onWillPop();
      },
      child: Scaffold(
        backgroundColor: bg,
        appBar: AppBar(
          backgroundColor: bg,
          elevation: 0,
          foregroundColor: dark ? Colors.white : const Color(0xFF0F172A),
          leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded), onPressed: _onWillPop),
          title: Text(_note.folder, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: dark ? Colors.white70 : const Color(0xFF64748B))),
          actions: [
            IconButton(
              icon: Icon(_note.pinned ? Icons.push_pin_rounded : Icons.push_pin_outlined),
              onPressed: () => setState(() => _note.pinned = !_note.pinned),
            ),
            PopupMenuButton<String>(
              icon: Icon(Icons.more_horiz_rounded, color: dark ? Colors.white70 : const Color(0xFF64748B)),
              onSelected: (v) async {
                if (v == 'copy') {
                  await Clipboard.setData(ClipboardData(text: '${_title.text}\n\n${_body.text}'));
                  if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Copied')));
                } else if (v.startsWith('folder:')) {
                  setState(() => _note.folder = v.substring(7));
                }
              },
              itemBuilder: (_) => [
                const PopupMenuItem(value: 'copy', child: Text('Copy note')),
                const PopupMenuDivider(),
                ..._noteFolders.where((f) => f != 'All').map((f) => PopupMenuItem(value: 'folder:$f', child: Text('Move to $f'))),
              ],
            ),
          ],
        ),
        body: Column(
          children: [
            SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
              child: Row(
                children: [
                  _tool(Icons.format_bold, () => _wrapSelection('**', '**'), dark),
                  _tool(Icons.format_italic, () => _wrapSelection('_', '_'), dark),
                  _tool(Icons.format_list_bulleted, () => _insertLine('• '), dark),
                  _tool(Icons.check_box_outlined, () => _insertLine('- [ ] '), dark),
                  _tool(Icons.horizontal_rule_rounded, () => _insertLine('\n---\n'), dark),
                  _tool(Icons.title_rounded, () => _insertLine('# '), dark),
                  const SizedBox(width: 8),
                  ...List.generate(_noteColors.length, (i) {
                    final c = _noteColors[i];
                    final sel = _note.colorIndex == i;
                    return Padding(
                      padding: const EdgeInsets.only(right: 6),
                      child: GestureDetector(
                        onTap: () => setState(() => _note.colorIndex = i),
                        child: Container(
                          width: 24,
                          height: 24,
                          decoration: BoxDecoration(
                            color: c,
                            shape: BoxShape.circle,
                            border: Border.all(color: sel ? const Color(0xFFA78BFA) : Colors.black26, width: sel ? 2.5 : 1),
                          ),
                        ),
                      ),
                    );
                  }),
                ],
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
                child: Column(
                  children: [
                    TextField(
                      controller: _title,
                      style: TextStyle(fontSize: 26, fontWeight: FontWeight.w800, color: dark ? Colors.white : const Color(0xFF0F172A)),
                      decoration: InputDecoration(
                        hintText: 'Title',
                        hintStyle: TextStyle(color: dark ? Colors.white38 : const Color(0xFFCBD5E1)),
                        border: InputBorder.none,
                      ),
                      maxLines: 2,
                    ),
                    Expanded(
                      child: TextField(
                        controller: _body,
                        style: TextStyle(fontSize: 16, height: 1.5, color: dark ? Colors.white.withValues(alpha: 0.9) : const Color(0xFF334155)),
                        decoration: InputDecoration(
                          hintText: 'Start writing…',
                          hintStyle: TextStyle(color: dark ? Colors.white30 : const Color(0xFFCBD5E1)),
                          border: InputBorder.none,
                        ),
                        maxLines: null,
                        expands: true,
                        textAlignVertical: TextAlignVertical.top,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            if (_dirty)
              Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Text('Saving…', style: TextStyle(fontSize: 11, color: dark ? Colors.white38 : const Color(0xFF94A3B8))),
              ),
          ],
        ),
      ),
    );
  }

  Widget _tool(IconData icon, VoidCallback onTap, bool dark) {
    return IconButton(
      visualDensity: VisualDensity.compact,
      icon: Icon(icon, size: 20, color: dark ? Colors.white70 : const Color(0xFF475569)),
      onPressed: onTap,
    );
  }
}
