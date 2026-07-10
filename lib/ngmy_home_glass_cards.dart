import 'dart:convert';
import 'dart:math' as math;
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

String _weekdayLong(int w) => const ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][w - 1];
String _monthLong(int m) => const [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][m - 1];

String ngmyHomeDateTabLabel(DateTime date) => '${_weekdayLong(date.weekday)}, ${date.day} ${_monthLong(date.month)}';

// ── Generic swipeable glass card stack ──────────────────────────────────────

class NgmyGlassCardStack<T> extends StatefulWidget {
  const NgmyGlassCardStack({
    super.key,
    required this.items,
    required this.cardBuilder,
    required this.emptyBuilder,
    this.height = 248,
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
    _snapCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 260))
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
    final dy = _drag.dy;
    final vx = d.velocity.pixelsPerSecond.dx;
    final vy = d.velocity.pixelsPerSecond.dy;
    final vertical = dy.abs() > dx.abs() * 0.85;
    final shouldCycle = vertical
        ? (dy.abs() > 70 || vy.abs() > 650)
        : (dx.abs() > 90 || vx.abs() > 700);

    if (shouldCycle) {
      if (vertical) {
        // Swipe down / up at the top — bring next card forward.
        final dir = dy == 0 ? (vy.isNegative ? -1.0 : 1.0) : (dy.isNegative ? -1.0 : 1.0);
        _animateTo(Offset(0, dir * 420), onDone: _cycleFrontToBack);
      } else {
        final dir = dx == 0 ? (vx.isNegative ? -1.0 : 1.0) : (dx.isNegative ? -1.0 : 1.0);
        _animateTo(Offset(dir * 520, 0), onDone: _cycleFrontToBack);
      }
    } else {
      _animateTo(Offset.zero);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_order.isEmpty) {
      return SizedBox(height: widget.height + 28, child: widget.emptyBuilder(context));
    }
    final visible = _order.take(3).toList();
    return SizedBox(
      height: widget.height + 36,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.topCenter,
        children: [
          for (var i = visible.length - 1; i >= 0; i--) _buildLayer(context, i, visible[i]),
        ],
      ),
    );
  }

  Widget _buildLayer(BuildContext context, int depth, T item) {
    final isFront = depth == 0;
    // Stack upward behind the front card (like the sports deck).
    final dy = isFront ? _drag.dy : -(depth * 14.0);
    final scale = 1 - (depth * 0.045);
    final dx = isFront ? _drag.dx : 0.0;
    final rotation = isFront ? (_drag.dx / 520).clamp(-0.22, 0.22) : 0.0;
    final opacity = isFront
        ? (1 - math.max(_drag.dx.abs(), _drag.dy.abs()) / 480).clamp(0.35, 1.0)
        : (1 - depth * 0.16);

    final card = Transform.translate(
      offset: Offset(dx, dy + (isFront ? 0 : 10.0)),
      child: Transform.rotate(
        angle: rotation,
        child: Opacity(
          opacity: opacity,
          child: Transform.scale(
            scale: scale,
            alignment: Alignment.topCenter,
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

// ── Date tab (sports-card style) ────────────────────────────────────────────

class _NgmyDateTab extends StatelessWidget {
  const _NgmyDateTab({required this.label});

  final String label;

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _DateTabPainter(),
      child: Container(
        constraints: const BoxConstraints(minWidth: 148),
        padding: const EdgeInsets.fromLTRB(18, 7, 18, 8),
        child: Text(
          label,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: 11.5,
            fontWeight: FontWeight.w800,
            letterSpacing: 0.2,
            color: Colors.white.withValues(alpha: 0.92),
          ),
        ),
      ),
    );
  }
}

class _DateTabPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(14, 0)
      ..lineTo(size.width - 14, 0)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    final fill = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          Colors.white.withValues(alpha: 0.28),
          Colors.white.withValues(alpha: 0.12),
        ],
      ).createShader(Offset.zero & size);
    canvas.drawPath(path, fill);
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1
        ..color = Colors.white.withValues(alpha: 0.35),
    );
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ── Frosted glass card shell ────────────────────────────────────────────────

class NgmyFrostedCard extends StatelessWidget {
  const NgmyFrostedCard({
    super.key,
    required this.child,
    required this.dateLabel,
    this.accent = const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
    this.onDelete,
    this.onAdd,
    this.footer,
  });

  final Widget child;
  final String dateLabel;
  final List<Color> accent;
  final VoidCallback? onDelete;
  final VoidCallback? onAdd;
  final Widget? footer;

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.topCenter,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 16),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(28),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 28, sigmaY: 28),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(28),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      Colors.white.withValues(alpha: 0.22),
                      accent[0].withValues(alpha: 0.18),
                      accent[1].withValues(alpha: 0.14),
                      Colors.white.withValues(alpha: 0.08),
                    ],
                    stops: const [0.0, 0.35, 0.7, 1.0],
                  ),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.38), width: 1.4),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withValues(alpha: 0.28), blurRadius: 28, offset: const Offset(0, 14)),
                    BoxShadow(color: accent[0].withValues(alpha: 0.16), blurRadius: 18, offset: const Offset(0, 6)),
                  ],
                ),
                child: Stack(
                  children: [
                    // Soft inner glass sheen
                    Positioned(
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 70,
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(
                            begin: Alignment.topCenter,
                            end: Alignment.bottomCenter,
                            colors: [
                              Colors.white.withValues(alpha: 0.22),
                              Colors.white.withValues(alpha: 0.0),
                            ],
                          ),
                        ),
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.fromLTRB(20, 28, 48, 16),
                      child: child,
                    ),
                    if (onDelete != null || onAdd != null)
                      Positioned(
                        right: 10,
                        top: 10,
                        child: Column(
                          children: [
                            if (onDelete != null) _GlassIconButton(icon: Icons.close_rounded, onTap: onDelete!),
                            if (onDelete != null && onAdd != null) const SizedBox(height: 8),
                            if (onAdd != null) _GlassIconButton(icon: Icons.add_rounded, onTap: onAdd!, filled: true),
                          ],
                        ),
                      ),
                    if (footer != null)
                      Positioned(
                        left: 0,
                        right: 0,
                        bottom: 12,
                        child: Center(child: footer!),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
        Positioned(
          top: 0,
          child: _NgmyDateTab(label: dateLabel),
        ),
      ],
    );
  }
}

class _GlassIconButton extends StatelessWidget {
  const _GlassIconButton({required this.icon, required this.onTap, this.filled = false});

  final IconData icon;
  final VoidCallback onTap;
  final bool filled;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(20),
        onTap: onTap,
        child: Container(
          width: 30,
          height: 30,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            gradient: filled
                ? const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)])
                : null,
            color: filled ? null : Colors.black.withValues(alpha: 0.28),
            border: Border.all(color: Colors.white.withValues(alpha: 0.28)),
            boxShadow: filled
                ? [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.45), blurRadius: 10, offset: const Offset(0, 3))]
                : null,
          ),
          child: Icon(icon, size: 16, color: Colors.white),
        ),
      ),
    );
  }
}

// ── Home panel ──────────────────────────────────────────────────────────────

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

  Widget _modePill() {
    final spending = _kind == _NgmyHomeCardKind.spending;
    return GestureDetector(
      onTap: () => setState(() => _kind = spending ? _NgmyHomeCardKind.notes : _NgmyHomeCardKind.spending),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 7),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          gradient: LinearGradient(
            colors: spending
                ? const [Color(0xFFEF4444), Color(0xFFDC2626)]
                : const [Color(0xFFF59E0B), Color(0xFFEC4899)],
          ),
          boxShadow: [
            BoxShadow(
              color: (spending ? const Color(0xFFEF4444) : const Color(0xFFEC4899)).withValues(alpha: 0.4),
              blurRadius: 12,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Text(
          spending ? 'SPENDING' : 'NOTES',
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.1),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (!_loaded) return const SizedBox(height: 300);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (_kind == _NgmyHomeCardKind.spending)
          NgmyGlassCardStack<NgmySpendingEntry>(
            height: 248,
            items: _spending,
            emptyBuilder: (ctx) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(DateTime.now()),
              accent: [
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.12),
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.06),
              ],
              onAdd: _openAddSheet,
              footer: _modePill(),
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 28),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.savings_rounded, size: 30, color: isDark ? Colors.white38 : Colors.black26),
                      const SizedBox(height: 10),
                      Text(
                        'No spending yet — tap + to add',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 13, color: isDark ? Colors.white54 : Colors.black45),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            cardBuilder: (ctx, entry) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(entry.date),
              accent: const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
              onDelete: () => _deleteSpending(entry.id),
              onAdd: _openAddSheet,
              footer: _modePill(),
              child: _SpendingCardContent(entry: entry, totalSpent: _totalSpent),
            ),
          )
        else
          NgmyGlassCardStack<NgmyHomeNote>(
            height: 248,
            items: _notes,
            emptyBuilder: (ctx) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(DateTime.now()),
              accent: [
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.12),
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.06),
              ],
              onAdd: _openAddSheet,
              footer: _modePill(),
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 28),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.sticky_note_2_rounded, size: 30, color: isDark ? Colors.white38 : Colors.black26),
                      const SizedBox(height: 10),
                      Text(
                        'No notes yet — tap + to write one',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 13, color: isDark ? Colors.white54 : Colors.black45),
                      ),
                    ],
                  ),
                ),
              ),
            ),
            cardBuilder: (ctx, note) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(note.createdAt),
              accent: const [Color(0xFFF59E0B), Color(0xFFEC4899)],
              onDelete: () => _deleteNote(note.id),
              onAdd: _openAddSheet,
              footer: _modePill(),
              child: _NoteCardContent(note: note),
            ),
          ),
      ],
    );
  }
}

class _SpendingCardContent extends StatelessWidget {
  const _SpendingCardContent({required this.entry, required this.totalSpent});

  final NgmySpendingEntry entry;
  final double totalSpent;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 36),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const SizedBox(height: 6),
          Text(
            'TOTAL SPENT',
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w800,
              letterSpacing: 1.4,
              color: Colors.white.withValues(alpha: 0.65),
            ),
          ),
          const SizedBox(height: 4),
          Text(
            '-\$${totalSpent.toStringAsFixed(2)}',
            style: TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w800,
              color: Colors.white.withValues(alpha: 0.88),
            ),
          ),
          const Spacer(),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 10),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              color: Colors.white.withValues(alpha: 0.12),
              border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
            ),
            child: Text(
              '-\$${entry.amount.toStringAsFixed(2)}',
              style: const TextStyle(fontSize: 34, fontWeight: FontWeight.w900, color: Colors.white, height: 1.05),
            ),
          ),
          const SizedBox(height: 12),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(_kSpendingCategories[entry.category] ?? Icons.category_rounded, size: 15, color: Colors.white.withValues(alpha: 0.9)),
              const SizedBox(width: 6),
              Flexible(
                child: Text(
                  '${entry.category} · ${entry.description}',
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 13.5, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.95)),
                ),
              ),
            ],
          ),
          const Spacer(),
        ],
      ),
    );
  }
}

class _NoteCardContent extends StatelessWidget {
  const _NoteCardContent({required this.note});

  final NgmyHomeNote note;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 36, top: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'NOTE',
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w800,
              letterSpacing: 1.4,
              color: Colors.white.withValues(alpha: 0.65),
            ),
          ),
          const SizedBox(height: 10),
          Expanded(
            child: Text(
              note.text,
              maxLines: 6,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w600, height: 1.4, color: Colors.white),
            ),
          ),
        ],
      ),
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
