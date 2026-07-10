import 'dart:convert';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Local-only (device storage, no database) spending + notes cards for Home.
/// Everything here lives in SharedPreferences, keyed per user email.

// ── Data models ────────────────────────────────────────────────────────────

class NgmySpendingEntry {
  const NgmySpendingEntry({
    required this.id,
    required this.amount,
    required this.description,
    required this.category,
    required this.date,
  });

  final String id;
  final double amount;
  final String description;
  final String category;
  final DateTime date;

  Map<String, dynamic> toJson() => {
        'id': id,
        'amount': amount,
        'description': description,
        'category': category,
        'date': date.toIso8601String(),
      };

  factory NgmySpendingEntry.fromJson(Map<String, dynamic> j) => NgmySpendingEntry(
        id: j['id']?.toString() ?? '',
        amount: (j['amount'] as num?)?.toDouble() ?? 0,
        description: j['description']?.toString() ?? '',
        category: j['category']?.toString() ?? 'Other',
        date: DateTime.tryParse(j['date']?.toString() ?? '') ?? DateTime.now(),
      );
}

class NgmyHomeNote {
  const NgmyHomeNote({required this.id, required this.text, required this.createdAt});

  final String id;
  final String text;
  final DateTime createdAt;

  Map<String, dynamic> toJson() => {
        'id': id,
        'text': text,
        'createdAt': createdAt.toIso8601String(),
      };

  factory NgmyHomeNote.fromJson(Map<String, dynamic> j) => NgmyHomeNote(
        id: j['id']?.toString() ?? '',
        text: j['text']?.toString() ?? '',
        createdAt: DateTime.tryParse(j['createdAt']?.toString() ?? '') ?? DateTime.now(),
      );
}

// ── Local storage (SharedPreferences only — nothing leaves the device) ─────

class NgmyHomeLocalStore {
  NgmyHomeLocalStore._();

  static String _spendingKey(String email) => 'ngmy_home_spending_v1_${email.toLowerCase().trim()}';
  static String _notesKey(String email) => 'ngmy_home_notes_v1_${email.toLowerCase().trim()}';

  static Future<List<NgmySpendingEntry>> loadSpending(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_spendingKey(email));
    if (raw == null || raw.isEmpty) return [];
    try {
      final list = jsonDecode(raw) as List<dynamic>;
      return list.whereType<Map>().map((e) => NgmySpendingEntry.fromJson(Map<String, dynamic>.from(e))).toList();
    } catch (_) {
      return [];
    }
  }

  static Future<void> saveSpending(String email, List<NgmySpendingEntry> items) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_spendingKey(email), jsonEncode(items.map((e) => e.toJson()).toList()));
  }

  static Future<List<NgmyHomeNote>> loadNotes(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_notesKey(email));
    if (raw == null || raw.isEmpty) return [];
    try {
      final list = jsonDecode(raw) as List<dynamic>;
      return list.whereType<Map>().map((e) => NgmyHomeNote.fromJson(Map<String, dynamic>.from(e))).toList();
    } catch (_) {
      return [];
    }
  }

  static Future<void> saveNotes(String email, List<NgmyHomeNote> items) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_notesKey(email), jsonEncode(items.map((e) => e.toJson()).toList()));
  }
}

const _kSpendingCategories = <String, IconData>{
  'Food': Icons.restaurant_rounded,
  'Transport': Icons.directions_car_rounded,
  'Bills': Icons.receipt_long_rounded,
  'Shopping': Icons.shopping_bag_rounded,
  'Fun': Icons.celebration_rounded,
  'Other': Icons.category_rounded,
};

// ── Generic swipeable glass card stack ──────────────────────────────────────

class NgmyGlassCardStack<T> extends StatefulWidget {
  const NgmyGlassCardStack({
    super.key,
    required this.items,
    required this.cardBuilder,
    required this.emptyBuilder,
    this.height = 176,
  });

  final List<T> items;
  final Widget Function(BuildContext context, T item) cardBuilder;
  final WidgetBuilder emptyBuilder;
  final double height;

  @override
  State<NgmyGlassCardStack<T>> createState() => _NgmyGlassCardStackState<T>();
}

class _NgmyGlassCardStackState<T> extends State<NgmyGlassCardStack<T>> with SingleTickerProviderStateMixin {
  late List<T> _order;
  Offset _drag = Offset.zero;
  late final AnimationController _snapCtrl;
  Animation<Offset>? _snapAnim;

  @override
  void initState() {
    super.initState();
    _order = List.of(widget.items);
    _snapCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 240))
      ..addListener(() {
        if (_snapAnim != null) setState(() => _drag = _snapAnim!.value);
      });
  }

  @override
  void didUpdateWidget(covariant NgmyGlassCardStack<T> oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.items.length != widget.items.length || !identical(oldWidget.items, widget.items)) {
      _order = List.of(widget.items);
      _drag = Offset.zero;
      _snapCtrl.stop();
    }
  }

  @override
  void dispose() {
    _snapCtrl.dispose();
    super.dispose();
  }

  void _animateTo(Offset target, {VoidCallback? onDone}) {
    _snapAnim = Tween<Offset>(begin: _drag, end: target).animate(
      CurvedAnimation(parent: _snapCtrl, curve: Curves.easeOutCubic),
    );
    _snapCtrl.forward(from: 0).whenComplete(() {
      if (mounted && onDone != null) onDone();
    });
  }

  void _cycleFrontToBack() {
    setState(() {
      final front = _order.removeAt(0);
      _order.add(front);
      _drag = Offset.zero;
    });
  }

  void _onPanUpdate(DragUpdateDetails d) {
    _snapCtrl.stop();
    setState(() => _drag += d.delta);
  }

  void _onPanEnd(DragEndDetails d) {
    final dx = _drag.dx;
    final vx = d.velocity.pixelsPerSecond.dx;
    final shouldCycle = dx.abs() > 90 || vx.abs() > 700;
    if (shouldCycle) {
      final dir = dx == 0 ? (vx.isNegative ? -1.0 : 1.0) : (dx.isNegative ? -1.0 : 1.0);
      _animateTo(Offset(dir * 520, 0), onDone: _cycleFrontToBack);
    } else {
      _animateTo(Offset.zero);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_order.isEmpty) {
      return SizedBox(height: widget.height, child: widget.emptyBuilder(context));
    }
    final visible = _order.take(3).toList();
    return SizedBox(
      height: widget.height + 20,
      child: Stack(
        alignment: Alignment.topCenter,
        children: [
          for (var i = visible.length - 1; i >= 0; i--) _buildLayer(context, i, visible[i]),
        ],
      ),
    );
  }

  Widget _buildLayer(BuildContext context, int depth, T item) {
    final isFront = depth == 0;
    final dy = depth * 9.0;
    final scale = 1 - (depth * 0.05);
    final dx = isFront ? _drag.dx : 0.0;
    final rotation = isFront ? (_drag.dx / 480).clamp(-0.28, 0.28) : 0.0;
    final opacity = isFront ? (1 - (_drag.dx.abs() / 480)).clamp(0.0, 1.0) : (1 - depth * 0.18);

    final card = Transform.translate(
      offset: Offset(dx, dy),
      child: Transform.rotate(
        angle: rotation,
        child: Opacity(
          opacity: opacity,
          child: Transform.scale(
            scale: scale,
            child: SizedBox(
              height: widget.height,
              width: double.infinity,
              child: widget.cardBuilder(context, item),
            ),
          ),
        ),
      ),
    );

    if (!isFront) return IgnorePointer(child: card);

    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onPanUpdate: _onPanUpdate,
      onPanEnd: _onPanEnd,
      child: card,
    );
  }
}

// ── Frosted glass card shell ────────────────────────────────────────────────

class NgmyFrostedCard extends StatelessWidget {
  const NgmyFrostedCard({
    super.key,
    required this.child,
    this.accent = const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
    this.onDelete,
  });

  final Widget child;
  final List<Color> accent;
  final VoidCallback? onDelete;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(24),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
        child: Container(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                accent[0].withValues(alpha: 0.28),
                accent[1].withValues(alpha: 0.20),
              ],
            ),
            border: Border.all(color: Colors.white.withValues(alpha: 0.28), width: 1.2),
            boxShadow: [
              BoxShadow(color: accent[0].withValues(alpha: 0.18), blurRadius: 22, offset: const Offset(0, 10)),
            ],
          ),
          padding: const EdgeInsets.fromLTRB(18, 16, 14, 14),
          child: Stack(
            children: [
              child,
              if (onDelete != null)
                Positioned(
                  right: 0,
                  top: 0,
                  child: InkWell(
                    borderRadius: BorderRadius.circular(20),
                    onTap: onDelete,
                    child: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: BoxDecoration(
                        color: Colors.black.withValues(alpha: 0.18),
                        shape: BoxShape.circle,
                      ),
                      child: const Icon(Icons.close_rounded, size: 16, color: Colors.white),
                    ),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}

// ── Section header with Spending/Notes toggle ───────────────────────────────

enum _NgmyHomeCardKind { spending, notes }

class NgmyHomeGlassCardsPanel extends StatefulWidget {
  const NgmyHomeGlassCardsPanel({super.key, required this.userEmail});

  final String userEmail;

  @override
  State<NgmyHomeGlassCardsPanel> createState() => _NgmyHomeGlassCardsPanelState();
}

class _NgmyHomeGlassCardsPanelState extends State<NgmyHomeGlassCardsPanel> {
  _NgmyHomeCardKind _kind = _NgmyHomeCardKind.spending;
  List<NgmySpendingEntry> _spending = [];
  List<NgmyHomeNote> _notes = [];
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final s = await NgmyHomeLocalStore.loadSpending(widget.userEmail);
    final n = await NgmyHomeLocalStore.loadNotes(widget.userEmail);
    if (!mounted) return;
    s.sort((a, b) => b.date.compareTo(a.date));
    n.sort((a, b) => b.createdAt.compareTo(a.createdAt));
    setState(() {
      _spending = s;
      _notes = n;
      _loaded = true;
    });
  }

  double get _totalSpent => _spending.fold(0.0, (sum, e) => sum + e.amount);

  Future<void> _addSpending({required double amount, required String description, required String category}) async {
    final entry = NgmySpendingEntry(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      amount: amount,
      description: description,
      category: category,
      date: DateTime.now(),
    );
    setState(() => _spending = [entry, ..._spending]);
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
  }

  Future<void> _deleteSpending(String id) async {
    setState(() => _spending = _spending.where((e) => e.id != id).toList());
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
  }

  Future<void> _addNote(String text) async {
    final note = NgmyHomeNote(id: DateTime.now().microsecondsSinceEpoch.toString(), text: text, createdAt: DateTime.now());
    setState(() => _notes = [note, ..._notes]);
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
  }

  Future<void> _deleteNote(String id) async {
    setState(() => _notes = _notes.where((n) => n.id != id).toList());
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
  }

  Future<void> _openAddSheet() async {
    if (_kind == _NgmyHomeCardKind.spending) {
      final result = await showModalBottomSheet<Map<String, String>>(
        context: context,
        isScrollControlled: true,
        backgroundColor: Colors.transparent,
        builder: (ctx) => const _NgmyAddSpendingSheet(),
      );
      if (result == null) return;
      final amount = double.tryParse(result['amount'] ?? '') ?? 0;
      if (amount <= 0) return;
      await _addSpending(
        amount: amount,
        description: result['description']?.trim().isEmpty == true ? 'Expense' : result['description']!.trim(),
        category: result['category'] ?? 'Other',
      );
    } else {
      final text = await showModalBottomSheet<String>(
        context: context,
        isScrollControlled: true,
        backgroundColor: Colors.transparent,
        builder: (ctx) => const _NgmyAddNoteSheet(),
      );
      if (text == null || text.trim().isEmpty) return;
      await _addNote(text.trim());
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (!_loaded) return const SizedBox(height: 236);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          children: [
            _NgmyKindChip(
              label: 'Spending',
              icon: Icons.savings_rounded,
              selected: _kind == _NgmyHomeCardKind.spending,
              isDark: isDark,
              onTap: () => setState(() => _kind = _NgmyHomeCardKind.spending),
            ),
            const SizedBox(width: 8),
            _NgmyKindChip(
              label: 'Notes',
              icon: Icons.sticky_note_2_rounded,
              selected: _kind == _NgmyHomeCardKind.notes,
              isDark: isDark,
              onTap: () => setState(() => _kind = _NgmyHomeCardKind.notes),
            ),
            const Spacer(),
            if (_kind == _NgmyHomeCardKind.spending && _spending.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(right: 4),
                child: Text(
                  '-\$${_totalSpent.toStringAsFixed(2)}',
                  style: TextStyle(
                    fontWeight: FontWeight.w900,
                    fontSize: 13,
                    color: isDark ? Colors.white70 : const Color(0xFF334155),
                  ),
                ),
              ),
            InkWell(
              borderRadius: BorderRadius.circular(20),
              onTap: _openAddSheet,
              child: Container(
                padding: const EdgeInsets.all(6),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]),
                  shape: BoxShape.circle,
                  boxShadow: [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.4), blurRadius: 10, offset: const Offset(0, 3))],
                ),
                child: const Icon(Icons.add_rounded, size: 18, color: Colors.white),
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        if (_kind == _NgmyHomeCardKind.spending)
          NgmyGlassCardStack<NgmySpendingEntry>(
            items: _spending,
            emptyBuilder: (ctx) => _NgmyEmptyCard(
              isDark: isDark,
              icon: Icons.savings_rounded,
              text: 'No spending logged yet — tap + to add one.',
            ),
            cardBuilder: (ctx, entry) => NgmyFrostedCard(
              accent: const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
              onDelete: () => _deleteSpending(entry.id),
              child: _SpendingCardContent(entry: entry),
            ),
          )
        else
          NgmyGlassCardStack<NgmyHomeNote>(
            items: _notes,
            emptyBuilder: (ctx) => _NgmyEmptyCard(
              isDark: isDark,
              icon: Icons.sticky_note_2_rounded,
              text: 'No notes yet — tap + to write one.',
            ),
            cardBuilder: (ctx, note) => NgmyFrostedCard(
              accent: const [Color(0xFFF59E0B), Color(0xFFEC4899)],
              onDelete: () => _deleteNote(note.id),
              child: _NoteCardContent(note: note),
            ),
          ),
      ],
    );
  }
}

class _NgmyKindChip extends StatelessWidget {
  const _NgmyKindChip({
    required this.label,
    required this.icon,
    required this.selected,
    required this.isDark,
    required this.onTap,
  });

  final String label;
  final IconData icon;
  final bool selected;
  final bool isDark;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(20),
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
        decoration: BoxDecoration(
          gradient: selected ? const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]) : null,
          color: selected ? null : (isDark ? Colors.white.withValues(alpha: 0.08) : Colors.black.withValues(alpha: 0.05)),
          borderRadius: BorderRadius.circular(20),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 14, color: selected ? Colors.white : (isDark ? Colors.white60 : const Color(0xFF64748B))),
            const SizedBox(width: 5),
            Text(
              label,
              style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w800,
                color: selected ? Colors.white : (isDark ? Colors.white60 : const Color(0xFF64748B)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _NgmyEmptyCard extends StatelessWidget {
  const _NgmyEmptyCard({required this.isDark, required this.icon, required this.text});

  final bool isDark;
  final IconData icon;
  final String text;

  @override
  Widget build(BuildContext context) {
    return NgmyFrostedCard(
      accent: [
        (isDark ? Colors.white : Colors.black).withValues(alpha: 0.12),
        (isDark ? Colors.white : Colors.black).withValues(alpha: 0.06),
      ],
      child: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(icon, size: 26, color: isDark ? Colors.white38 : Colors.black26),
            const SizedBox(height: 8),
            Text(
              text,
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : Colors.black45),
            ),
          ],
        ),
      ),
    );
  }
}

class _SpendingCardContent extends StatelessWidget {
  const _SpendingCardContent({required this.entry});

  final NgmySpendingEntry entry;

  @override
  Widget build(BuildContext context) {
    final date = entry.date;
    final dateStr = '${_weekday(date.weekday)}, ${date.day} ${_month(date.month)}';
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Text(
          dateStr,
          style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.75)),
        ),
        const SizedBox(height: 8),
        Text(
          '-\$${entry.amount.toStringAsFixed(2)}',
          style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: Colors.white),
        ),
        const SizedBox(height: 6),
        Row(
          children: [
            Icon(_kSpendingCategories[entry.category] ?? Icons.category_rounded, size: 14, color: Colors.white.withValues(alpha: 0.85)),
            const SizedBox(width: 6),
            Expanded(
              child: Text(
                '${entry.category} · ${entry.description}',
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Colors.white.withValues(alpha: 0.92)),
              ),
            ),
          ],
        ),
      ],
    );
  }

  static String _weekday(int w) => const ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][w - 1];
  static String _month(int m) => const [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ][m - 1];
}

class _NoteCardContent extends StatelessWidget {
  const _NoteCardContent({required this.note});

  final NgmyHomeNote note;

  @override
  Widget build(BuildContext context) {
    final date = note.createdAt;
    final dateStr = '${date.day}/${date.month}/${date.year}';
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          dateStr,
          style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.7)),
        ),
        const SizedBox(height: 8),
        Expanded(
          child: Text(
            note.text,
            maxLines: 5,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, height: 1.35, color: Colors.white),
          ),
        ),
      ],
    );
  }
}

// ── Add sheets ───────────────────────────────────────────────────────────

class _NgmyAddSpendingSheet extends StatefulWidget {
  const _NgmyAddSpendingSheet();

  @override
  State<_NgmyAddSpendingSheet> createState() => _NgmyAddSpendingSheetState();
}

class _NgmyAddSpendingSheetState extends State<_NgmyAddSpendingSheet> {
  final _amountC = TextEditingController();
  final _descC = TextEditingController();
  String _category = 'Food';

  @override
  void dispose() {
    _amountC.dispose();
    _descC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F172A) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
        ),
        padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
        child: SafeArea(
          top: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Log spending',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF0F172A)),
              ),
              const SizedBox(height: 4),
              Text(
                'Saved only on this device',
                style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
              ),
              const SizedBox(height: 16),
              TextField(
                controller: _amountC,
                autofocus: true,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                style: TextStyle(fontSize: 16, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                decoration: InputDecoration(
                  hintText: 'Amount',
                  prefixText: '\$ ',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                ),
              ),
              const SizedBox(height: 10),
              TextField(
                controller: _descC,
                style: TextStyle(fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                decoration: InputDecoration(
                  hintText: 'What was it for?',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                ),
              ),
              const SizedBox(height: 12),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: _kSpendingCategories.entries.map((e) {
                  final selected = _category == e.key;
                  return InkWell(
                    borderRadius: BorderRadius.circular(18),
                    onTap: () => setState(() => _category = e.key),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                      decoration: BoxDecoration(
                        gradient: selected ? const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]) : null,
                        color: selected ? null : (isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9)),
                        borderRadius: BorderRadius.circular(18),
                      ),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(e.value, size: 14, color: selected ? Colors.white : (isDark ? Colors.white60 : const Color(0xFF64748B))),
                          const SizedBox(width: 5),
                          Text(
                            e.key,
                            style: TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w700,
                              color: selected ? Colors.white : (isDark ? Colors.white60 : const Color(0xFF64748B)),
                            ),
                          ),
                        ],
                      ),
                    ),
                  );
                }).toList(),
              ),
              const SizedBox(height: 18),
              FilledButton(
                onPressed: () => Navigator.pop(context, {
                  'amount': _amountC.text.trim(),
                  'description': _descC.text.trim(),
                  'category': _category,
                }),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFF8B5CF6),
                  minimumSize: const Size(double.infinity, 48),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _NgmyAddNoteSheet extends StatefulWidget {
  const _NgmyAddNoteSheet();

  @override
  State<_NgmyAddNoteSheet> createState() => _NgmyAddNoteSheetState();
}

class _NgmyAddNoteSheetState extends State<_NgmyAddNoteSheet> {
  final _textC = TextEditingController();

  @override
  void dispose() {
    _textC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: Container(
        decoration: BoxDecoration(
          color: isDark ? const Color(0xFF0F172A) : Colors.white,
          borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
        ),
        padding: const EdgeInsets.fromLTRB(20, 18, 20, 20),
        child: SafeArea(
          top: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'New note',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: isDark ? Colors.white : const Color(0xFF0F172A)),
              ),
              const SizedBox(height: 4),
              Text(
                'Saved only on this device',
                style: TextStyle(fontSize: 12, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
              ),
              const SizedBox(height: 16),
              TextField(
                controller: _textC,
                autofocus: true,
                maxLines: 6,
                minLines: 4,
                style: TextStyle(fontSize: 14, color: isDark ? Colors.white : const Color(0xFF0F172A)),
                decoration: InputDecoration(
                  hintText: 'Write anything…',
                  filled: true,
                  fillColor: isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
                ),
              ),
              const SizedBox(height: 18),
              FilledButton(
                onPressed: () => Navigator.pop(context, _textC.text),
                style: FilledButton.styleFrom(
                  backgroundColor: const Color(0xFFEC4899),
                  minimumSize: const Size(double.infinity, 48),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                ),
                child: const Text('Save', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
