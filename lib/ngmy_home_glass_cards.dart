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
    this.note = '',
  });

  final String id;
  final double amount;
  final String description;
  final String category;
  final DateTime date;
  /// Per-card note (each spending card keeps its own).
  final String note;

  NgmySpendingEntry copyWith({
    String? id,
    double? amount,
    String? description,
    String? category,
    DateTime? date,
    String? note,
  }) =>
      NgmySpendingEntry(
        id: id ?? this.id,
        amount: amount ?? this.amount,
        description: description ?? this.description,
        category: category ?? this.category,
        date: date ?? this.date,
        note: note ?? this.note,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'amount': amount,
        'description': description,
        'category': category,
        'date': date.toIso8601String(),
        'note': note,
      };

  factory NgmySpendingEntry.fromJson(Map<String, dynamic> j) => NgmySpendingEntry(
        id: j['id']?.toString() ?? '',
        amount: (j['amount'] as num?)?.toDouble() ?? 0,
        description: j['description']?.toString() ?? '',
        category: j['category']?.toString() ?? 'Other',
        date: DateTime.tryParse(j['date']?.toString() ?? '') ?? DateTime.now(),
        note: j['note']?.toString() ?? '',
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

/// Three rows × four categories for the Log spending sheet.
const _kSpendingCategories = <String, IconData>{
  // Row 1
  'Food': Icons.restaurant_rounded,
  'Transport': Icons.directions_car_rounded,
  'Bills': Icons.receipt_long_rounded,
  'Shopping': Icons.shopping_bag_rounded,
  // Row 2
  'Fun': Icons.celebration_rounded,
  'Password': Icons.lock_rounded,
  'Health': Icons.favorite_rounded,
  'Work': Icons.work_rounded,
  // Row 3
  'Travel': Icons.flight_rounded,
  'Gift': Icons.card_giftcard_rounded,
  'Savings': Icons.savings_rounded,
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
  final Widget Function(
    BuildContext context,
    T item, {
    required bool isFront,
    required bool revealDates,
  }) cardBuilder;
  final WidgetBuilder emptyBuilder;
  final double height;

  @override
  State<NgmyGlassCardStack<T>> createState() => _NgmyGlassCardStackState<T>();
}

class _NgmyGlassCardStackState<T> extends State<NgmyGlassCardStack<T>> with SingleTickerProviderStateMixin {
  late List<T> _order;
  /// How far the front card has been pulled down (only the front moves).
  double _frontDrag = 0;
  late final AnimationController _animCtrl;
  Animation<double>? _dragAnim;

  /// Peek strip for each card behind the front — peeks sit ABOVE the front card.
  static const _peek = 14.0;
  /// Front + up to 4 cards behind it.
  static const _maxBehind = 4;
  static const _cycleThreshold = 90.0;

  @override
  void initState() {
    super.initState();
    _order = List.of(widget.items);
    _animCtrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 280))
      ..addListener(() {
        if (_dragAnim != null) setState(() => _frontDrag = _dragAnim!.value);
      });
  }

  @override
  void didUpdateWidget(covariant NgmyGlassCardStack<T> oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.items.length != widget.items.length || !identical(oldWidget.items, widget.items)) {
      _order = List.of(widget.items);
      _frontDrag = 0;
      _animCtrl.stop();
    }
  }

  @override
  void dispose() {
    _animCtrl.dispose();
    super.dispose();
  }

  void _animateFrontTo(double target, {VoidCallback? onDone}) {
    _dragAnim = Tween<double>(begin: _frontDrag, end: target).animate(
      CurvedAnimation(parent: _animCtrl, curve: Curves.easeOutCubic),
    );
    _animCtrl.forward(from: 0).whenComplete(() {
      if (mounted && onDone != null) onDone();
    });
  }

  void _cycleFrontToBack() {
    if (_order.length < 2) {
      setState(() => _frontDrag = 0);
      return;
    }
    setState(() {
      final front = _order.removeAt(0);
      _order.add(front);
      _frontDrag = 0;
    });
  }

  void _bringIndexToFront(int index) {
    if (index <= 0 || index >= _order.length) return;
    setState(() {
      final picked = _order.removeAt(index);
      _order.insert(0, picked);
      _frontDrag = 0;
    });
  }

  void _onVerticalDragUpdate(DragUpdateDetails d) {
    _animCtrl.stop();
    setState(() {
      // Only the front card moves — drag down to send it away / reveal the next card.
      _frontDrag = (_frontDrag + d.delta.dy).clamp(0.0, 200.0);
    });
  }

  void _onVerticalDragEnd(DragEndDetails d) {
    final vy = d.velocity.pixelsPerSecond.dy;
    if (_frontDrag > _cycleThreshold || vy > 700) {
      _animateFrontTo(260, onDone: _cycleFrontToBack);
    } else {
      _animateFrontTo(0);
    }
  }

  void _onHorizontalDragEnd(DragEndDetails d) {
    final vx = d.velocity.pixelsPerSecond.dx;
    if (vx.abs() < 500) return;
    if (_order.length < 2) return;
    setState(() {
      final front = _order.removeAt(0);
      _order.add(front);
      _frontDrag = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    // Front card stays pinned high. Extra cards peek UPWARD (overflow above),
    // so more cards never push the deck or the tech frames down.
    final stackHeight = widget.height + 12;

    if (_order.isEmpty) {
      return SizedBox(height: stackHeight, child: widget.emptyBuilder(context));
    }

    final visibleCount = math.min(_maxBehind + 1, _order.length);
    // As the front card drops, the 2nd card rises into place and becomes fully visible.
    final revealT = (_frontDrag / _cycleThreshold).clamp(0.0, 1.0);

    return SizedBox(
      height: stackHeight,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onVerticalDragUpdate: _onVerticalDragUpdate,
        onVerticalDragEnd: _onVerticalDragEnd,
        onHorizontalDragEnd: _onHorizontalDragEnd,
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            // Back cards peek above the front (negative top). Deepest first.
            for (var i = visibleCount - 1; i >= 1; i--)
              Positioned(
                // Card #2 slides into the front slot as the front is dragged down.
                top: i == 1
                    ? -_peek + revealT * _peek
                    : -i * _peek + revealT * _peek * 0.35,
                left: 0,
                right: 0,
                height: widget.height,
                child: Transform.scale(
                  scale: i == 1
                      ? (1 - 0.03) + revealT * 0.03
                      : 1 - i * 0.03,
                  alignment: Alignment.topCenter,
                  child: Opacity(
                    opacity: i == 1
                        ? (0.55 + revealT * 0.45).clamp(0.55, 1.0)
                        : (1 - i * 0.12).clamp(0.45, 0.85),
                    child: GestureDetector(
                      behavior: HitTestBehavior.translucent,
                      onTap: () => _bringIndexToFront(i),
                      child: widget.cardBuilder(
                        context,
                        _order[i],
                        isFront: false,
                        // Second card's date/content lights up as soon as the drag starts.
                        revealDates: i == 1 ? revealT > 0.08 : revealT > 0.55,
                      ),
                    ),
                  ),
                ),
              ),
            // Front card — always starts at the top of this stack.
            Positioned(
              top: _frontDrag,
              left: 0,
              right: 0,
              height: widget.height,
              child: Opacity(
                opacity: (1 - _frontDrag / 260).clamp(0.25, 1.0),
                child: widget.cardBuilder(
                  context,
                  _order[0],
                  isFront: true,
                  revealDates: true,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ── Date tab (sports-card style) ────────────────────────────────────────────

class _NgmyDateTab extends StatelessWidget {
  const _NgmyDateTab({required this.label, this.emphasized = true});

  final String label;
  final bool emphasized;

  @override
  Widget build(BuildContext context) {
    return CustomPaint(
      painter: _DateTabPainter(emphasized: emphasized),
      child: Container(
        constraints: BoxConstraints(minWidth: emphasized ? 168 : 132),
        padding: EdgeInsets.fromLTRB(emphasized ? 20 : 14, emphasized ? 9 : 5, emphasized ? 20 : 14, emphasized ? 10 : 6),
        child: Text(
          label,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: emphasized ? 13.5 : 10.5,
            fontWeight: FontWeight.w900,
            letterSpacing: emphasized ? 0.35 : 0.15,
            color: Colors.white.withValues(alpha: emphasized ? 1.0 : 0.55),
            shadows: emphasized
                ? const [
                    Shadow(color: Color(0x66000000), blurRadius: 8, offset: Offset(0, 2)),
                  ]
                : null,
          ),
        ),
      ),
    );
  }
}

class _DateTabPainter extends CustomPainter {
  _DateTabPainter({required this.emphasized});

  final bool emphasized;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(14, 0)
      ..lineTo(size.width - 14, 0)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    final topA = emphasized ? 0.55 : 0.16;
    final botA = emphasized ? 0.32 : 0.08;
    final fill = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: [
          Colors.white.withValues(alpha: topA),
          Colors.white.withValues(alpha: botA),
        ],
      ).createShader(Offset.zero & size);
    if (emphasized) {
      canvas.drawShadow(path, Colors.black.withValues(alpha: 0.45), 10, true);
    }
    canvas.drawPath(path, fill);
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = emphasized ? 1.4 : 0.8
        ..color = Colors.white.withValues(alpha: emphasized ? 0.7 : 0.22),
    );
  }

  @override
  bool shouldRepaint(covariant _DateTabPainter oldDelegate) => oldDelegate.emphasized != emphasized;
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
    this.isFront = true,
    this.showDateTab = true,
    this.welcomeName,
  });

  final Widget child;
  final String dateLabel;
  final List<Color> accent;
  final VoidCallback? onDelete;
  final VoidCallback? onAdd;
  final Widget? footer;
  final bool isFront;
  final bool showDateTab;
  /// Front card: left glass chip = welcome + @name; right = date chip above X/+.
  final String? welcomeName;

  @override
  Widget build(BuildContext context) {
    final glassAlpha = isFront ? 0.22 : 0.10;
    final borderAlpha = isFront ? 0.42 : 0.18;
    final rawName = welcomeName?.trim() ?? '';
    final showWelcome = isFront && rawName.isNotEmpty;
    final todayLabel = ngmyHomeDateTabLabel(DateTime.now());
    final handle = rawName.startsWith('@') ? rawName : '@$rawName';
    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.topCenter,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 16),
          child: ClipRRect(
            borderRadius: BorderRadius.circular(28),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: isFront ? 28 : 16, sigmaY: isFront ? 28 : 16),
              child: Container(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(28),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      Colors.white.withValues(alpha: glassAlpha),
                      accent[0].withValues(alpha: isFront ? 0.20 : 0.10),
                      accent[1].withValues(alpha: isFront ? 0.16 : 0.08),
                      Colors.white.withValues(alpha: isFront ? 0.08 : 0.04),
                    ],
                    stops: const [0.0, 0.35, 0.7, 1.0],
                  ),
                  border: Border.all(color: Colors.white.withValues(alpha: borderAlpha), width: isFront ? 1.5 : 1.0),
                  boxShadow: isFront
                      ? [
                          BoxShadow(color: Colors.black.withValues(alpha: 0.32), blurRadius: 28, offset: const Offset(0, 14)),
                          BoxShadow(color: accent[0].withValues(alpha: 0.18), blurRadius: 18, offset: const Offset(0, 6)),
                        ]
                      : [
                          BoxShadow(color: Colors.black.withValues(alpha: 0.18), blurRadius: 14, offset: const Offset(0, 8)),
                        ],
                ),
                child: Stack(
                  children: [
                    if (isFront)
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
                                Colors.white.withValues(alpha: 0.24),
                                Colors.white.withValues(alpha: 0.0),
                              ],
                            ),
                          ),
                        ),
                      ),
                    Padding(
                      padding: EdgeInsets.fromLTRB(showWelcome ? 12 : 20, showWelcome ? 48 : 28, 48, 16),
                      child: child,
                    ),
                    // LEFT corner (opposite date/X): welcome + @name in a compact glass frame.
                    if (showWelcome)
                      Positioned(
                        left: 8,
                        top: 6,
                        child: _WelcomeGlassFrame(greeting: 'Welcome back', handle: handle),
                      ),
                    // RIGHT corner: date chip on top, then X / + below it.
                    if (isFront && (showWelcome || onDelete != null || onAdd != null))
                      Positioned(
                        right: 8,
                        top: 6,
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.end,
                          children: [
                            if (showWelcome) ...[
                              _GlassChip(label: todayLabel),
                              const SizedBox(height: 6),
                            ],
                            if (onDelete != null) _GlassIconButton(icon: Icons.close_rounded, onTap: onDelete!),
                            if (onDelete != null && onAdd != null) const SizedBox(height: 6),
                            if (onAdd != null) _GlassIconButton(icon: Icons.add_rounded, onTap: onAdd!, filled: true),
                          ],
                        ),
                      ),
                    if (isFront && footer != null)
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
        // Center top tab stays the card's own date (not welcome).
        if (showDateTab)
          Positioned(
            top: 0,
            child: _NgmyDateTab(label: dateLabel, emphasized: isFront),
          ),
      ],
    );
  }
}

class _GlassChip extends StatelessWidget {
  const _GlassChip({required this.label});

  final String label;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 8, sigmaY: 8),
        child: Container(
          constraints: const BoxConstraints(maxWidth: 108),
          padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 4),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Colors.white.withValues(alpha: 0.28),
                Colors.white.withValues(alpha: 0.10),
              ],
            ),
            border: Border.all(color: Colors.white.withValues(alpha: 0.45)),
          ),
          child: Text(
            label,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 8.5,
              fontWeight: FontWeight.w800,
              color: Colors.white.withValues(alpha: 0.95),
            ),
          ),
        ),
      ),
    );
  }
}

class _WelcomeGlassFrame extends StatelessWidget {
  const _WelcomeGlassFrame({required this.greeting, required this.handle});

  final String greeting;
  final String handle;

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: 8, sigmaY: 8),
        child: Container(
          constraints: const BoxConstraints(maxWidth: 112),
          padding: const EdgeInsets.fromLTRB(8, 5, 8, 5),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [
                Colors.white.withValues(alpha: 0.30),
                Colors.white.withValues(alpha: 0.10),
              ],
            ),
            border: Border.all(color: Colors.white.withValues(alpha: 0.48)),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                greeting,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 8.5,
                  fontWeight: FontWeight.w800,
                  color: Colors.white.withValues(alpha: 0.95),
                ),
              ),
              const SizedBox(height: 1),
              Text(
                handle,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w900,
                  color: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Animated capital NGMY glass badge — sits between Loan Service and Local Growth.
class NgmyHomeBrandBadge extends StatefulWidget {
  const NgmyHomeBrandBadge({super.key});

  @override
  State<NgmyHomeBrandBadge> createState() => _NgmyHomeBrandBadgeState();
}

class _NgmyHomeBrandBadgeState extends State<NgmyHomeBrandBadge> with TickerProviderStateMixin {
  late final AnimationController _pulse;
  late final AnimationController _shimmer;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 2400))..repeat(reverse: true);
    _shimmer = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
  }

  @override
  void dispose() {
    _pulse.dispose();
    _shimmer.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isLight = Theme.of(context).brightness == Brightness.light;
    return AnimatedBuilder(
      animation: Listenable.merge([_pulse, _shimmer]),
      builder: (context, _) {
        final pulse = Curves.easeInOut.transform(_pulse.value);
        final shimmer = _shimmer.value;
        final glow = 0.18 + pulse * 0.22;
        final scale = 1.0 + pulse * 0.035;
        return Transform.scale(
          scale: scale,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: BackdropFilter(
              filter: ImageFilter.blur(sigmaX: 14, sigmaY: 14),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 9),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(16),
                  gradient: LinearGradient(
                    begin: Alignment(-1.2 + shimmer * 2.4, -0.4),
                    end: Alignment(1.2 - shimmer * 2.4, 0.6),
                    colors: isLight
                        ? [
                            const Color(0xFF60A5FA).withValues(alpha: 0.22 + pulse * 0.12),
                            Colors.white.withValues(alpha: 0.55),
                            const Color(0xFF8B5CF6).withValues(alpha: 0.18 + pulse * 0.10),
                          ]
                        : [
                            const Color(0xFF60A5FA).withValues(alpha: 0.28 + pulse * 0.14),
                            Colors.white.withValues(alpha: 0.12),
                            const Color(0xFFA78BFA).withValues(alpha: 0.26 + pulse * 0.12),
                          ],
                  ),
                  border: Border.all(
                    color: (isLight ? const Color(0xFF4A55D9) : Colors.white).withValues(alpha: 0.35 + pulse * 0.25),
                    width: 1.4,
                  ),
                  boxShadow: [
                    BoxShadow(
                      color: const Color(0xFF60A5FA).withValues(alpha: glow),
                      blurRadius: 14 + pulse * 10,
                      spreadRadius: 0.5,
                    ),
                    BoxShadow(
                      color: const Color(0xFF8B5CF6).withValues(alpha: glow * 0.7),
                      blurRadius: 18 + pulse * 8,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Text(
                  'NGMY',
                  style: TextStyle(
                    fontSize: 15,
                    fontWeight: FontWeight.w900,
                    letterSpacing: 2.8 + pulse * 0.6,
                    color: isLight ? const Color(0xFF171633) : Colors.white,
                    shadows: [
                      Shadow(
                        color: const Color(0xFF38BDF8).withValues(alpha: 0.35 + pulse * 0.25),
                        blurRadius: 8 + pulse * 6,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        );
      },
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
  const NgmyHomeGlassCardsPanel({
    super.key,
    required this.userEmail,
    this.displayName,
  });

  final String userEmail;
  final String? displayName;

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
        useSafeArea: false,
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
        useSafeArea: false,
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

  String get _welcomeName {
    final n = (widget.displayName ?? '').trim();
    if (n.isNotEmpty) return n;
    final email = widget.userEmail.trim();
    if (email.contains('@')) return email.split('@').first;
    return email.isEmpty ? 'friend' : email;
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (!_loaded) return const SizedBox(height: 300);
    final name = _welcomeName;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (_kind == _NgmyHomeCardKind.spending)
          NgmyGlassCardStack<NgmySpendingEntry>(
            height: 200,
            items: _spending,
            emptyBuilder: (ctx) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(DateTime.now()),
              isFront: true,
              showDateTab: true,
              welcomeName: name,
              accent: [
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.12),
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.06),
              ],
              onAdd: _openAddSheet,
              footer: _modePill(),
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 28, top: 36),
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
            cardBuilder: (ctx, entry, {required isFront, required revealDates}) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(entry.date),
              accent: const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
              isFront: isFront,
              showDateTab: revealDates,
              welcomeName: isFront ? name : null,
              onDelete: isFront ? () => _deleteSpending(entry.id) : null,
              onAdd: isFront ? _openAddSheet : null,
              footer: isFront ? _modePill() : null,
              child: _SpendingCardContent(entry: entry, totalSpent: _totalSpent),
            ),
          )
        else
          NgmyGlassCardStack<NgmyHomeNote>(
            height: 200,
            items: _notes,
            emptyBuilder: (ctx) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(DateTime.now()),
              isFront: true,
              showDateTab: true,
              welcomeName: name,
              accent: [
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.12),
                (isDark ? Colors.white : Colors.black).withValues(alpha: 0.06),
              ],
              onAdd: _openAddSheet,
              footer: _modePill(),
              child: Center(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 28, top: 36),
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
            cardBuilder: (ctx, note, {required isFront, required revealDates}) => NgmyFrostedCard(
              dateLabel: ngmyHomeDateTabLabel(note.createdAt),
              accent: const [Color(0xFFF59E0B), Color(0xFFEC4899)],
              isFront: isFront,
              showDateTab: revealDates,
              welcomeName: isFront ? name : null,
              onDelete: isFront ? () => _deleteNote(note.id) : null,
              onAdd: isFront ? _openAddSheet : null,
              footer: isFront ? _modePill() : null,
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
    final cardNote = entry.note.trim();
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
          if (cardNote.isNotEmpty) ...[
            const SizedBox(height: 10),
            Text(
              cardNote,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 12.5,
                fontWeight: FontWeight.w600,
                height: 1.3,
                color: Colors.white.withValues(alpha: 0.82),
              ),
            ),
          ],
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
    // Same full-card layout language as spending (not a tiny inset note).
    return Padding(
      padding: const EdgeInsets.only(bottom: 36),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          const SizedBox(height: 6),
          Text(
            'NOTE',
            style: TextStyle(
              fontSize: 10,
              fontWeight: FontWeight.w800,
              letterSpacing: 1.4,
              color: Colors.white.withValues(alpha: 0.65),
            ),
          ),
          const Spacer(),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              color: Colors.white.withValues(alpha: 0.12),
              border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
            ),
            child: Text(
              note.text,
              maxLines: 5,
              overflow: TextOverflow.ellipsis,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, height: 1.35, color: Colors.white),
            ),
          ),
          const Spacer(),
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
  final _amountFocus = FocusNode();
  String _category = 'Food';

  @override
  void dispose() {
    _amountC.dispose();
    _descC.dispose();
    _amountFocus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bottomInset = MediaQuery.viewInsetsOf(context).bottom;
    final surface = isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC);
    final fieldBg = isDark ? const Color(0xFF1F2937) : Colors.white;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Padding(
      // Keep the sheet seated above the keyboard without jumping the field to the top of the screen.
      padding: EdgeInsets.only(bottom: bottomInset),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Material(
          color: Colors.transparent,
          child: Container(
            width: double.infinity,
            constraints: BoxConstraints(
              maxHeight: MediaQuery.sizeOf(context).height * 0.72,
            ),
            decoration: BoxDecoration(
              color: surface,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.28), blurRadius: 28, offset: const Offset(0, -8)),
              ],
            ),
            child: SafeArea(
              top: false,
              child: SingleChildScrollView(
                // Don't auto-scroll the focused field to the top of the viewport.
                keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Center(
                      child: Container(
                        width: 40,
                        height: 4,
                        decoration: BoxDecoration(
                          color: muted.withValues(alpha: 0.35),
                          borderRadius: BorderRadius.circular(99),
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        Container(
                          width: 42,
                          height: 42,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(14),
                            gradient: const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)]),
                          ),
                          child: const Icon(Icons.add_rounded, color: Colors.white),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('Log spending', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: ink)),
                              Text('Stays on this device only', style: TextStyle(fontSize: 12, color: muted)),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 20),
                    Text('AMOUNT', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                      decoration: BoxDecoration(
                        color: fieldBg,
                        borderRadius: BorderRadius.circular(18),
                        border: Border.all(color: const Color(0xFF8B5CF6).withValues(alpha: 0.35)),
                        boxShadow: [
                          BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.12), blurRadius: 16, offset: const Offset(0, 6)),
                        ],
                      ),
                      child: Row(
                        children: [
                          Text('\$', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: ink.withValues(alpha: 0.55))),
                          const SizedBox(width: 8),
                          Expanded(
                            child: TextField(
                              controller: _amountC,
                              focusNode: _amountFocus,
                              autofocus: true,
                              keyboardType: const TextInputType.numberWithOptions(decimal: true),
                              scrollPadding: const EdgeInsets.only(bottom: 120),
                              style: TextStyle(fontSize: 32, fontWeight: FontWeight.w900, color: ink, height: 1.2),
                              decoration: InputDecoration(
                                hintText: '0.00',
                                hintStyle: TextStyle(color: muted.withValues(alpha: 0.45), fontWeight: FontWeight.w800),
                                border: InputBorder.none,
                                isDense: true,
                                contentPadding: const EdgeInsets.symmetric(vertical: 14),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text('FOR', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                    const SizedBox(height: 8),
                    TextField(
                      controller: _descC,
                      scrollPadding: const EdgeInsets.only(bottom: 120),
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: ink),
                      decoration: InputDecoration(
                        hintText: 'What was it for?',
                        hintStyle: TextStyle(color: muted),
                        filled: true,
                        fillColor: fieldBg,
                        contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: BorderSide(color: muted.withValues(alpha: 0.2)),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: BorderSide(color: muted.withValues(alpha: 0.2)),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: const BorderSide(color: Color(0xFF8B5CF6), width: 1.4),
                        ),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text('CATEGORY', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                    const SizedBox(height: 8),
                    // Fixed 3 rows × 4 categories (Password, Savings, etc.).
                    Builder(
                      builder: (context) {
                        final entries = _kSpendingCategories.entries.toList();
                        return Column(
                          children: [
                            for (var row = 0; row < 3; row++) ...[
                              if (row > 0) const SizedBox(height: 8),
                              Row(
                                children: [
                                  for (var col = 0; col < 4; col++) ...[
                                    if (col > 0) const SizedBox(width: 8),
                                    Expanded(
                                      child: Builder(
                                        builder: (context) {
                                          final e = entries[row * 4 + col];
                                          final selected = _category == e.key;
                                          return InkWell(
                                            borderRadius: BorderRadius.circular(14),
                                            onTap: () => setState(() => _category = e.key),
                                            child: AnimatedContainer(
                                              duration: const Duration(milliseconds: 160),
                                              padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 4),
                                              decoration: BoxDecoration(
                                                gradient: selected
                                                    ? const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)])
                                                    : null,
                                                color: selected ? null : fieldBg,
                                                borderRadius: BorderRadius.circular(14),
                                                border: Border.all(
                                                  color: selected ? Colors.transparent : muted.withValues(alpha: 0.22),
                                                ),
                                              ),
                                              child: Column(
                                                mainAxisSize: MainAxisSize.min,
                                                children: [
                                                  Icon(e.value, size: 16, color: selected ? Colors.white : muted),
                                                  const SizedBox(height: 4),
                                                  Text(
                                                    e.key,
                                                    maxLines: 1,
                                                    overflow: TextOverflow.ellipsis,
                                                    textAlign: TextAlign.center,
                                                    style: TextStyle(
                                                      fontSize: 10.5,
                                                      fontWeight: FontWeight.w800,
                                                      color: selected ? Colors.white : muted,
                                                    ),
                                                  ),
                                                ],
                                              ),
                                            ),
                                          );
                                        },
                                      ),
                                    ),
                                  ],
                                ],
                              ),
                            ],
                          ],
                        );
                      },
                    ),
                    const SizedBox(height: 22),
                    FilledButton(
                      onPressed: () => Navigator.pop(context, {
                        'amount': _amountC.text.trim(),
                        'description': _descC.text.trim(),
                        'category': _category,
                      }),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF8B5CF6),
                        foregroundColor: Colors.white,
                        minimumSize: const Size(double.infinity, 52),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        elevation: 0,
                      ),
                      child: const Text('Save spending', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                    ),
                  ],
                ),
              ),
            ),
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
  late final TextEditingController _textC;

  @override
  void initState() {
    super.initState();
    _textC = TextEditingController();
  }

  @override
  void dispose() {
    _textC.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bottomInset = MediaQuery.viewInsetsOf(context).bottom;
    final surface = isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC);
    final fieldBg = isDark ? const Color(0xFF1F2937) : Colors.white;
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Padding(
      padding: EdgeInsets.only(bottom: bottomInset),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Material(
          color: Colors.transparent,
          child: Container(
            width: double.infinity,
            constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.68),
            decoration: BoxDecoration(
              color: surface,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: 0.28), blurRadius: 28, offset: const Offset(0, -8)),
              ],
            ),
            child: SafeArea(
              top: false,
              child: SingleChildScrollView(
                keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
                padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Center(
                      child: Container(
                        width: 40,
                        height: 4,
                        decoration: BoxDecoration(
                          color: muted.withValues(alpha: 0.35),
                          borderRadius: BorderRadius.circular(99),
                        ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        Container(
                          width: 42,
                          height: 42,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(14),
                            gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEC4899)]),
                          ),
                          child: const Icon(Icons.edit_note_rounded, color: Colors.white),
                        ),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text('New note', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: ink)),
                              Text('Stays on this device only', style: TextStyle(fontSize: 12, color: muted)),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 18),
                    TextField(
                      controller: _textC,
                      autofocus: true,
                      maxLines: 7,
                      minLines: 5,
                      scrollPadding: const EdgeInsets.only(bottom: 120),
                      style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600, height: 1.4, color: ink),
                      decoration: InputDecoration(
                        hintText: 'Write anything…',
                        hintStyle: TextStyle(color: muted),
                        filled: true,
                        fillColor: fieldBg,
                        contentPadding: const EdgeInsets.all(16),
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: BorderSide(color: muted.withValues(alpha: 0.2)),
                        ),
                        enabledBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: BorderSide(color: muted.withValues(alpha: 0.2)),
                        ),
                        focusedBorder: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(16),
                          borderSide: const BorderSide(color: Color(0xFFEC4899), width: 1.4),
                        ),
                      ),
                    ),
                    const SizedBox(height: 20),
                    FilledButton(
                      onPressed: () => Navigator.pop(context, _textC.text),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFFEC4899),
                        foregroundColor: Colors.white,
                        minimumSize: const Size(double.infinity, 52),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        elevation: 0,
                      ),
                      child: const Text('Save note', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
