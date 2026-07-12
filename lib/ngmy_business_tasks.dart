import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_hub_form_ui.dart';

const _kStorageKey = 'ngmy_business_tasks_v1';

String _tasksKey(String userEmail) {
  final e = userEmail.toLowerCase().trim();
  return '${_kStorageKey}_${e.isEmpty ? 'guest' : e.hashCode.abs()}';
}

class NgmyBusinessTask {
  NgmyBusinessTask({
    String? id,
    required this.title,
    this.notes = '',
    this.category = 'Work',
    this.priority = 'Normal',
    this.done = false,
    DateTime? createdAt,
  })  : id = id ?? DateTime.now().microsecondsSinceEpoch.toString(),
        createdAt = createdAt ?? DateTime.now();

  final String id;
  String title;
  String notes;
  String category;
  String priority;
  bool done;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'notes': notes,
        'category': category,
        'priority': priority,
        'done': done,
        'createdAt': createdAt.toUtc().toIso8601String(),
      };

  factory NgmyBusinessTask.fromJson(Map<String, dynamic> json) => NgmyBusinessTask(
        id: (json['id'] ?? '').toString(),
        title: (json['title'] ?? '').toString(),
        notes: (json['notes'] ?? '').toString(),
        category: (json['category'] ?? 'Work').toString(),
        priority: (json['priority'] ?? 'Normal').toString(),
        done: json['done'] == true,
        createdAt: DateTime.tryParse((json['createdAt'] ?? '').toString()) ?? DateTime.now(),
      );
}

Future<List<NgmyBusinessTask>> _loadTasks(String userEmail) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_tasksKey(userEmail));
    if (raw == null) return [];
    final list = jsonDecode(raw);
    if (list is! List) return [];
    return list.whereType<Map>().map((e) => NgmyBusinessTask.fromJson(Map<String, dynamic>.from(e))).toList();
  } catch (_) {
    return [];
  }
}

Future<void> _saveTasks(String userEmail, List<NgmyBusinessTask> items) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_tasksKey(userEmail), jsonEncode(items.map((e) => e.toJson()).toList()));
}

Future<int> ngmyBusinessTasksCount({required String userEmail}) async => (await _loadTasks(userEmail)).where((t) => !t.done).length;

Future<List<NgmyBusinessTask>> ngmyExportBusinessTasks({required String userEmail}) => _loadTasks(userEmail);

Future<void> ngmyImportBusinessTasks({required String userEmail, required List<NgmyBusinessTask> items}) async {
  final existing = await _loadTasks(userEmail);
  final byId = {for (final e in existing) e.id: e};
  for (final item in items) {
    byId[item.id] = item;
  }
  await _saveTasks(userEmail, byId.values.toList());
}

Future<void> showNgmyBusinessTasksDialog(BuildContext context, {required String userEmail}) {
  final t = NgmyHubTheme.of(context);
  return showGeneralDialog<void>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Tasks',
    barrierColor: t.barrier,
    transitionDuration: const Duration(milliseconds: 320),
    pageBuilder: (_, __, ___) => _BusinessTasksScreen(userEmail: userEmail),
    transitionBuilder: (_, anim, __, child) => FadeTransition(opacity: anim, child: child),
  );
}

class _BusinessTasksScreen extends StatefulWidget {
  const _BusinessTasksScreen({required this.userEmail});
  final String userEmail;

  @override
  State<_BusinessTasksScreen> createState() => _BusinessTasksScreenState();
}

class _BusinessTasksScreenState extends State<_BusinessTasksScreen> {
  static const _accent = Color(0xFF34D399);
  List<NgmyBusinessTask> _tasks = [];
  bool _loading = true;
  String _filter = 'Active';

  @override
  void initState() {
    super.initState();
    _reload();
  }

  Future<void> _reload() async {
    final list = await _loadTasks(widget.userEmail);
    if (!mounted) return;
    setState(() {
      _tasks = list;
      _loading = false;
    });
  }

  List<NgmyBusinessTask> get _visible {
    var list = _tasks.toList();
    if (_filter == 'Active') list = list.where((t) => !t.done).toList();
    if (_filter == 'Done') list = list.where((t) => t.done).toList();
    list.sort((a, b) {
      if (a.done != b.done) return a.done ? 1 : -1;
      final p = {'High': 0, 'Normal': 1, 'Low': 2};
      return (p[a.priority] ?? 1).compareTo(p[b.priority] ?? 1);
    });
    return list;
  }

  Future<void> _save(List<NgmyBusinessTask> items) async {
    await _saveTasks(widget.userEmail, items);
    await _reload();
  }

  Future<void> _addTask() async {
    final result = await showNgmyModernEditorPage<NgmyBusinessTask>(
      context,
      _TaskEditorPage(task: null),
    );
    if (result == null) return;
    final items = await _loadTasks(widget.userEmail);
    items.insert(0, result);
    await _save(items);
  }

  Future<void> _editTask(NgmyBusinessTask task) async {
    final result = await showNgmyModernEditorPage<NgmyBusinessTask>(
      context,
      _TaskEditorPage(task: task),
    );
    if (result == null) return;
    final items = await _loadTasks(widget.userEmail);
    final i = items.indexWhere((e) => e.id == result.id);
    if (i >= 0) items[i] = result;
    await _save(items);
  }

  Future<void> _toggleDone(NgmyBusinessTask task) async {
    task.done = !task.done;
    final items = await _loadTasks(widget.userEmail);
    final j = items.indexWhere((e) => e.id == task.id);
    if (j >= 0) items[j] = task;
    await _save(items);
  }

  Future<void> _deleteTask(NgmyBusinessTask task) async {
    if (!task.done) return;
    final t = NgmyHubTheme.of(context);
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: t.dialogBg,
        title: Text('Delete completed task?', style: TextStyle(color: t.title)),
        content: Text(task.title, style: TextStyle(color: t.subtitle)),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    final items = await _loadTasks(widget.userEmail);
    items.removeWhere((e) => e.id == task.id);
    await _save(items);
  }

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final visible = _visible;
    return Material(
      color: t.scaffold,
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
                      decoration: BoxDecoration(color: t.iconButtonBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: t.border)),
                      child: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 18),
                    ),
                  ),
                  Expanded(child: Text('Quick Tasks', style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 20))),
                  IconButton(
                    onPressed: _addTask,
                    icon: Container(
                      padding: const EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        gradient: LinearGradient(colors: [_accent, _accent.withValues(alpha: 0.75)]),
                        borderRadius: BorderRadius.circular(14),
                      ),
                      child: const Icon(Icons.add_task_rounded, color: Colors.white, size: 22),
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(
              height: 40,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: ['Active', 'All', 'Done'].map((f) {
                  final sel = _filter == f;
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4),
                    child: FilterChip(
                      label: Text(f, style: TextStyle(fontWeight: FontWeight.w700, fontSize: 11, color: sel ? _accent : t.chipOffLabel)),
                      selected: sel,
                      onSelected: (_) => setState(() => _filter = f),
                      selectedColor: _accent.withValues(alpha: t.isDark ? 0.3 : 0.18),
                      backgroundColor: t.chipOffBg,
                      showCheckmark: false,
                    ),
                  );
                }).toList(),
              ),
            ),
            Expanded(
              child: _loading
                  ? Center(child: CircularProgressIndicator(color: _accent))
                  : visible.isEmpty
                      ? Center(child: Text('No tasks', style: TextStyle(color: t.subtitle)))
                      : ListView.builder(
                          padding: const EdgeInsets.fromLTRB(16, 8, 16, 24),
                          itemCount: visible.length,
                          itemBuilder: (_, i) {
                            final task = visible[i];
                            final priColor = task.priority == 'High'
                                ? const Color(0xFFEF4444)
                                : task.priority == 'Low'
                                    ? const Color(0xFF94A3B8)
                                    : _accent;
                            return _TaskMiniCard(
                              task: task,
                              accent: _accent,
                              priorityColor: priColor,
                              onToggle: () => _toggleDone(task),
                              onEdit: () => _editTask(task),
                              onDelete: task.done ? () => _deleteTask(task) : null,
                            );
                          },
                        ),
            ),
          ],
        ),
      ),
    );
  }
}

class _TaskMiniCard extends StatelessWidget {
  const _TaskMiniCard({
    required this.task,
    required this.accent,
    required this.priorityColor,
    required this.onToggle,
    required this.onEdit,
    this.onDelete,
  });

  final NgmyBusinessTask task;
  final Color accent;
  final Color priorityColor;
  final VoidCallback onToggle;
  final VoidCallback onEdit;
  final VoidCallback? onDelete;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      height: 78,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            priorityColor.withValues(alpha: t.isDark ? 0.20 : 0.12),
            t.listItemBg,
            accent.withValues(alpha: t.isDark ? 0.08 : 0.05),
          ],
        ),
        border: Border.all(color: priorityColor.withValues(alpha: task.done ? 0.22 : 0.42)),
        boxShadow: [BoxShadow(color: priorityColor.withValues(alpha: 0.14), blurRadius: 10, offset: const Offset(0, 3))],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: Row(
          children: [
            Container(
              width: 5,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [priorityColor, priorityColor.withValues(alpha: 0.4)],
                ),
              ),
            ),
            InkWell(
              onTap: onToggle,
              borderRadius: BorderRadius.circular(20),
              child: Padding(
                padding: const EdgeInsets.fromLTRB(10, 0, 4, 0),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  width: 28,
                  height: 28,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: task.done ? LinearGradient(colors: [accent, accent.withValues(alpha: 0.7)]) : null,
                    color: task.done ? null : Colors.transparent,
                    border: Border.all(color: task.done ? accent : priorityColor.withValues(alpha: 0.7), width: 2),
                  ),
                  child: task.done ? const Icon(Icons.check_rounded, color: Colors.white, size: 16) : null,
                ),
              ),
            ),
            Expanded(
              child: InkWell(
                onTap: onEdit,
                child: Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 6),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        task.title,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(
                          color: t.title,
                          fontWeight: FontWeight.w800,
                          fontSize: 14,
                          decoration: task.done ? TextDecoration.lineThrough : null,
                          decorationColor: t.muted,
                        ),
                      ),
                      const SizedBox(height: 3),
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(999),
                              color: priorityColor.withValues(alpha: 0.16),
                              border: Border.all(color: priorityColor.withValues(alpha: 0.35)),
                            ),
                            child: Text(task.priority, style: TextStyle(color: priorityColor, fontSize: 10, fontWeight: FontWeight.w800)),
                          ),
                          const SizedBox(width: 6),
                          Expanded(
                            child: Text(
                              task.category,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(color: t.subtitle, fontSize: 11, fontWeight: FontWeight.w600),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
            if (onDelete != null)
              IconButton(
                tooltip: 'Delete completed task',
                onPressed: onDelete,
                icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFEF4444), size: 20),
              )
            else
              IconButton(
                tooltip: 'Edit',
                onPressed: onEdit,
                icon: Icon(Icons.edit_outlined, color: t.muted, size: 18),
              ),
          ],
        ),
      ),
    );
  }
}

class _TaskEditorPage extends StatefulWidget {
  const _TaskEditorPage({this.task});
  final NgmyBusinessTask? task;

  @override
  State<_TaskEditorPage> createState() => _TaskEditorPageState();
}

class _TaskEditorPageState extends State<_TaskEditorPage> {
  static const _accent = Color(0xFF34D399);
  late final TextEditingController _title;
  late final TextEditingController _notes;
  String _category = 'Work';
  String _priority = 'Normal';

  @override
  void initState() {
    super.initState();
    final t = widget.task;
    _title = TextEditingController(text: t?.title ?? '');
    _notes = TextEditingController(text: t?.notes ?? '');
    _category = t?.category ?? 'Work';
    _priority = t?.priority ?? 'Normal';
  }

  @override
  void dispose() {
    _title.dispose();
    _notes.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return NgmyModernEditorPage(
      title: widget.task == null ? 'New Task' : 'Edit Task',
      subtitle: 'Quick to-do for business essentials',
      accent: _accent,
      icon: Icons.task_alt_rounded,
      saveLabel: 'Save task',
      onClose: () => Navigator.pop(context),
      onSave: () {
        if (_title.text.trim().isEmpty) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Enter a task title')));
          return;
        }
        Navigator.pop(
          context,
          widget.task == null
              ? NgmyBusinessTask(title: _title.text.trim(), notes: _notes.text.trim(), category: _category, priority: _priority)
              : (widget.task!
                ..title = _title.text.trim()
                ..notes = _notes.text.trim()
                ..category = _category
                ..priority = _priority),
        );
      },
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          NgmyModernField(controller: _title, label: 'Task *', hint: 'What needs to be done?', icon: Icons.check_circle_outline_rounded, accent: _accent),
          const SizedBox(height: 12),
          NgmyModernField(controller: _notes, label: 'Notes', hint: 'Optional details', icon: Icons.notes_rounded, accent: _accent, maxLines: 3),
          const SizedBox(height: 12),
          Text('CATEGORY', style: NgmyHubTheme.of(context).sectionLabel),
          const SizedBox(height: 6),
          NgmyModernChipRow(
            options: const ['Work', 'Personal', 'Urgent', 'Follow-up'],
            selected: _category,
            accent: _accent,
            onSelected: (v) => setState(() => _category = v),
          ),
          Text('PRIORITY', style: NgmyHubTheme.of(context).sectionLabel),
          const SizedBox(height: 6),
          NgmyModernChipRow(
            options: const ['High', 'Normal', 'Low'],
            selected: _priority,
            accent: _accent,
            onSelected: (v) => setState(() => _priority = v),
          ),
        ],
      ),
    );
  }
}
