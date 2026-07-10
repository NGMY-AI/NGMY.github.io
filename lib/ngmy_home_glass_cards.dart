import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_business_card_models.dart';
import 'ngmy_business_card_renderer.dart';
import 'ngmy_business_card_storage.dart';
import 'ngmy_business_notes.dart';
import 'ngmy_helper_alarm_memory.dart';
import 'ngmy_home_card_image_crop.dart';

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
    this.imageBase64 = '',
    this.passwordEmail = '',
    this.passwordSecret = '',
    this.pinnedNoteText = '',
    this.pinnedAlarmText = '',
    this.businessCardJson = '',
  });

  final String id;
  final double amount;
  final String description;
  final String category;
  final DateTime date;
  /// Per-card note (each spending card keeps its own).
  final String note;
  /// Cropped photo for the card (base64, no data: prefix). When set, card shows photo only.
  final String imageBase64;
  final String passwordEmail;
  final String passwordSecret;
  /// Snapshot text pinned from Business Essentials notes.
  final String pinnedNoteText;
  /// Snapshot text pinned from alarms / medicine reminders.
  final String pinnedAlarmText;
  /// JSON of a pinned NgmyBusinessCardDocument.
  final String businessCardJson;

  bool get hasImage => imageBase64.trim().isNotEmpty;
  bool get isPassword => category == 'Password';
  bool get hasPinnedEssentials => pinnedNoteText.trim().isNotEmpty || pinnedAlarmText.trim().isNotEmpty;
  bool get hasBusinessCard => businessCardJson.trim().isNotEmpty;
  bool get hideModePill => hasImage || isPassword || hasBusinessCard;
  /// Money / category face that should fill the whole frosted card like a photo.
  bool get showsCreditFace => !hasImage && !isPassword && !hasBusinessCard && !(hasPinnedEssentials && amount <= 0);

  NgmySpendingEntry copyWith({
    String? id,
    double? amount,
    String? description,
    String? category,
    DateTime? date,
    String? note,
    String? imageBase64,
    String? passwordEmail,
    String? passwordSecret,
    String? pinnedNoteText,
    String? pinnedAlarmText,
    String? businessCardJson,
  }) =>
      NgmySpendingEntry(
        id: id ?? this.id,
        amount: amount ?? this.amount,
        description: description ?? this.description,
        category: category ?? this.category,
        date: date ?? this.date,
        note: note ?? this.note,
        imageBase64: imageBase64 ?? this.imageBase64,
        passwordEmail: passwordEmail ?? this.passwordEmail,
        passwordSecret: passwordSecret ?? this.passwordSecret,
        pinnedNoteText: pinnedNoteText ?? this.pinnedNoteText,
        pinnedAlarmText: pinnedAlarmText ?? this.pinnedAlarmText,
        businessCardJson: businessCardJson ?? this.businessCardJson,
      );

  Map<String, dynamic> toJson() => {
        'id': id,
        'amount': amount,
        'description': description,
        'category': category,
        'date': date.toIso8601String(),
        'note': note,
        'imageBase64': imageBase64,
        'passwordEmail': passwordEmail,
        'passwordSecret': passwordSecret,
        'pinnedNoteText': pinnedNoteText,
        'pinnedAlarmText': pinnedAlarmText,
        'businessCardJson': businessCardJson,
      };

  factory NgmySpendingEntry.fromJson(Map<String, dynamic> j) => NgmySpendingEntry(
        id: j['id']?.toString() ?? '',
        amount: (j['amount'] as num?)?.toDouble() ?? 0,
        description: j['description']?.toString() ?? '',
        category: j['category']?.toString() ?? 'Other',
        date: DateTime.tryParse(j['date']?.toString() ?? '') ?? DateTime.now(),
        note: j['note']?.toString() ?? '',
        imageBase64: j['imageBase64']?.toString() ?? '',
        passwordEmail: j['passwordEmail']?.toString() ?? '',
        passwordSecret: j['passwordSecret']?.toString() ?? '',
        pinnedNoteText: j['pinnedNoteText']?.toString() ?? '',
        pinnedAlarmText: j['pinnedAlarmText']?.toString() ?? '',
        businessCardJson: j['businessCardJson']?.toString() ?? '',
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

  static String _deckKey(String email) => 'ngmy_home_deck_prefs_v1_${email.toLowerCase().trim()}';

  static Future<({bool autoPlay, NgmyHomeCardSlideStyle style})> loadDeckPrefs(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_deckKey(email));
    if (raw == null || raw.isEmpty) {
      return (autoPlay: false, style: NgmyHomeCardSlideStyle.dropDown);
    }
    try {
      final map = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      final styleName = map['style'] as String? ?? 'dropDown';
      final style = NgmyHomeCardSlideStyle.values.firstWhere(
        (e) => e.name == styleName,
        orElse: () => NgmyHomeCardSlideStyle.dropDown,
      );
      return (autoPlay: map['autoPlay'] == true, style: style);
    } catch (_) {
      return (autoPlay: false, style: NgmyHomeCardSlideStyle.dropDown);
    }
  }

  static Future<void> saveDeckPrefs(String email, {required bool autoPlay, required NgmyHomeCardSlideStyle style}) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_deckKey(email), jsonEncode({'autoPlay': autoPlay, 'style': style.name}));
  }
}

/// How auto-play advances the home card deck.
enum NgmyHomeCardSlideStyle {
  dropDown,
  slideLeft,
  slideRight,
  fade,
  flipScale,
}

extension NgmyHomeCardSlideStyleX on NgmyHomeCardSlideStyle {
  String get label => switch (this) {
        NgmyHomeCardSlideStyle.dropDown => 'Drop',
        NgmyHomeCardSlideStyle.slideLeft => 'Sweep ←',
        NgmyHomeCardSlideStyle.slideRight => 'Sweep →',
        NgmyHomeCardSlideStyle.fade => 'Fade',
        NgmyHomeCardSlideStyle.flipScale => 'Flip',
      };

  IconData get icon => switch (this) {
        NgmyHomeCardSlideStyle.dropDown => Icons.arrow_downward_rounded,
        NgmyHomeCardSlideStyle.slideLeft => Icons.west_rounded,
        NgmyHomeCardSlideStyle.slideRight => Icons.east_rounded,
        NgmyHomeCardSlideStyle.fade => Icons.blur_on_rounded,
        NgmyHomeCardSlideStyle.flipScale => Icons.flip_rounded,
      };
}

List<Color> ngmyCreditThemeColors(String category) {
  switch (category) {
    case 'Food':
      return const [Color(0xFF1F2937), Color(0xFFEA580C)];
    case 'Transport':
      return const [Color(0xFF0F172A), Color(0xFF2563EB)];
    case 'Bills':
      return const [Color(0xFF14532D), Color(0xFF16A34A)];
    case 'Shopping':
      return const [Color(0xFF4C0519), Color(0xFFDB2777)];
    case 'Fun':
      return const [Color(0xFF422006), Color(0xFFF59E0B)];
    case 'Health':
      return const [Color(0xFF4C0519), Color(0xFFE11D48)];
    case 'Work':
      return const [Color(0xFF111827), Color(0xFF64748B)];
    case 'Travel':
      return const [Color(0xFF083344), Color(0xFF0891B2)];
    case 'Gift':
      return const [Color(0xFF2E1065), Color(0xFF7C3AED)];
    case 'Savings':
      return const [Color(0xFF064E3B), Color(0xFF059669)];
    default:
      return const [Color(0xFF1E1B4B), Color(0xFF4F46E5)];
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
    this.itemId,
    this.autoPlay = false,
    this.slideStyle = NgmyHomeCardSlideStyle.dropDown,
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
  /// Stable id so front-card order survives list rebuilds / mode switches.
  final Object Function(T item)? itemId;
  final bool autoPlay;
  final NgmyHomeCardSlideStyle slideStyle;

  @override
  State<NgmyGlassCardStack<T>> createState() => _NgmyGlassCardStackState<T>();
}

class _NgmyGlassCardStackState<T> extends State<NgmyGlassCardStack<T>> with SingleTickerProviderStateMixin {
  late List<T> _order;
  /// How far the front card has been pulled down (only the front moves).
  double _frontDrag = 0;
  double _frontDx = 0;
  double _frontOpacity = 1;
  double _frontScale = 1;
  double _frontAngle = 0;
  late final AnimationController _animCtrl;
  Animation<double>? _dragAnim;
  Timer? _autoTimer;
  bool _autoBusy = false;
  bool _exitAnimating = false;

  double _fromDx = 0, _toDx = 0;
  double _fromDy = 0, _toDy = 0;
  double _fromOpacity = 1, _toOpacity = 1;
  double _fromScale = 1, _toScale = 1;
  double _fromAngle = 0, _toAngle = 0;

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
      ..addListener(_onAnimTick);
    _scheduleAuto();
  }

  void _onAnimTick() {
    if (!mounted) return;
    if (_exitAnimating) {
      final t = Curves.easeInCubic.transform(_animCtrl.value);
      setState(() {
        _frontDx = _fromDx + (_toDx - _fromDx) * t;
        _frontDrag = _fromDy + (_toDy - _fromDy) * t;
        _frontOpacity = _fromOpacity + (_toOpacity - _fromOpacity) * t;
        _frontScale = _fromScale + (_toScale - _fromScale) * t;
        _frontAngle = _fromAngle + (_toAngle - _fromAngle) * t;
      });
      return;
    }
    if (_dragAnim != null) setState(() => _frontDrag = _dragAnim!.value);
  }

  @override
  void didUpdateWidget(covariant NgmyGlassCardStack<T> oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.autoPlay != widget.autoPlay || oldWidget.slideStyle != widget.slideStyle) {
      _scheduleAuto();
    }
    if (oldWidget.items.length == widget.items.length && identical(oldWidget.items, widget.items)) return;
    final idOf = widget.itemId;
    Object? frontId;
    if (_order.isNotEmpty && idOf != null) frontId = idOf(_order.first);
    final next = List<T>.of(widget.items);
    if (frontId != null && idOf != null) {
      final idx = next.indexWhere((e) => idOf(e) == frontId);
      if (idx > 0) {
        final kept = next.removeAt(idx);
        next.insert(0, kept);
      }
    }
    setState(() {
      _order = next;
      _resetFrontProps();
      _animCtrl.stop();
    });
    _scheduleAuto();
  }

  @override
  void dispose() {
    _autoTimer?.cancel();
    _animCtrl.dispose();
    super.dispose();
  }

  void _resetFrontProps() {
    _frontDrag = 0;
    _frontDx = 0;
    _frontOpacity = 1;
    _frontScale = 1;
    _frontAngle = 0;
  }

  void _scheduleAuto() {
    _autoTimer?.cancel();
    if (!widget.autoPlay || _order.length < 2) return;
    _autoTimer = Timer.periodic(const Duration(milliseconds: 3400), (_) {
      if (mounted && !_autoBusy) _runAutoAdvance();
    });
  }

  Future<void> _runAutoAdvance() async {
    if (_order.length < 2 || _autoBusy) return;
    _autoBusy = true;
    switch (widget.slideStyle) {
      case NgmyHomeCardSlideStyle.dropDown:
        await _animateExit(dy: 280, opacity: 0.2);
        break;
      case NgmyHomeCardSlideStyle.slideLeft:
        await _animateExit(dx: -340, opacity: 0.15);
        break;
      case NgmyHomeCardSlideStyle.slideRight:
        await _animateExit(dx: 340, opacity: 0.15);
        break;
      case NgmyHomeCardSlideStyle.fade:
        await _animateExit(opacity: 0, scale: 0.9);
        break;
      case NgmyHomeCardSlideStyle.flipScale:
        await _animateExit(angle: 1.15, scale: 0.62, opacity: 0.1);
        break;
    }
    if (!mounted) return;
    _cycleFrontToBack();
    _autoBusy = false;
  }

  Future<void> _animateExit({
    double dx = 0,
    double dy = 0,
    double opacity = 1,
    double scale = 1,
    double angle = 0,
  }) {
    final completer = Completer<void>();
    _fromDx = _frontDx;
    _toDx = dx;
    _fromDy = _frontDrag;
    _toDy = dy;
    _fromOpacity = _frontOpacity;
    _toOpacity = opacity;
    _fromScale = _frontScale;
    _toScale = scale;
    _fromAngle = _frontAngle;
    _toAngle = angle;
    _exitAnimating = true;
    _animCtrl.duration = const Duration(milliseconds: 420);
    _animCtrl.forward(from: 0).whenComplete(() {
      _exitAnimating = false;
      _animCtrl.duration = const Duration(milliseconds: 280);
      if (!completer.isCompleted) completer.complete();
    });
    return completer.future;
  }

  void _animateFrontTo(double target, {VoidCallback? onDone}) {
    _exitAnimating = false;
    _dragAnim = Tween<double>(begin: _frontDrag, end: target).animate(
      CurvedAnimation(parent: _animCtrl, curve: Curves.easeOutCubic),
    );
    _animCtrl.forward(from: 0).whenComplete(() {
      if (mounted && onDone != null) onDone();
    });
  }

  void _cycleFrontToBack() {
    if (_order.length < 2) {
      setState(_resetFrontProps);
      return;
    }
    setState(() {
      final front = _order.removeAt(0);
      _order.add(front);
      _resetFrontProps();
    });
  }

  void _bringIndexToFront(int index) {
    if (index <= 0 || index >= _order.length) return;
    setState(() {
      final picked = _order.removeAt(index);
      _order.insert(0, picked);
      _resetFrontProps();
    });
  }

  void _onVerticalDragUpdate(DragUpdateDetails d) {
    if (_autoBusy) return;
    _animCtrl.stop();
    _exitAnimating = false;
    setState(() {
      // Only the front card moves — drag down to send it away / reveal the next card.
      _frontDrag = (_frontDrag + d.delta.dy).clamp(0.0, 200.0);
    });
  }

  void _onVerticalDragEnd(DragEndDetails d) {
    if (_autoBusy) return;
    final vy = d.velocity.pixelsPerSecond.dy;
    if (_frontDrag > _cycleThreshold || vy > 700) {
      _animateFrontTo(260, onDone: _cycleFrontToBack);
    } else {
      _animateFrontTo(0);
    }
  }

  void _onHorizontalDragEnd(DragEndDetails d) {
    if (_autoBusy) return;
    final vx = d.velocity.pixelsPerSecond.dx;
    if (vx.abs() < 500) return;
    if (_order.length < 2) return;
    setState(() {
      final front = _order.removeAt(0);
      _order.add(front);
      _resetFrontProps();
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
    final exitReveal = (1 - _frontOpacity).clamp(0.0, 1.0);
    final combinedReveal = math.max(revealT, exitReveal * 0.85);

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
                    ? -_peek + combinedReveal * _peek
                    : -i * _peek + combinedReveal * _peek * 0.35,
                left: 0,
                right: 0,
                height: widget.height,
                child: Transform.scale(
                  scale: i == 1
                      ? (1 - 0.03) + combinedReveal * 0.03
                      : 1 - i * 0.03,
                  alignment: Alignment.topCenter,
                  child: Opacity(
                    opacity: i == 1
                        ? (0.55 + combinedReveal * 0.45).clamp(0.55, 1.0)
                        : (1 - i * 0.12).clamp(0.45, 0.85),
                    child: GestureDetector(
                      behavior: HitTestBehavior.translucent,
                      onTap: () => _bringIndexToFront(i),
                      child: widget.cardBuilder(
                        context,
                        _order[i],
                        isFront: false,
                        // Second card's date/content lights up as soon as the drag starts.
                        revealDates: i == 1 ? combinedReveal > 0.08 : combinedReveal > 0.55,
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
              child: Transform.translate(
                offset: Offset(_frontDx, 0),
                child: Transform.rotate(
                  angle: _frontAngle,
                  child: Transform.scale(
                    scale: _frontScale,
                    child: Opacity(
                      opacity: (_frontOpacity * (1 - _frontDrag / 260)).clamp(0.05, 1.0),
                      child: widget.cardBuilder(
                        context,
                        _order[0],
                        isFront: true,
                        revealDates: true,
                      ),
                    ),
                  ),
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
    this.fillBleed = false,
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
  /// When true, [child] fills the whole card face (for photos).
  final bool fillBleed;

  @override
  Widget build(BuildContext context) {
    final glassAlpha = isFront ? 0.22 : 0.10;
    final borderAlpha = isFront ? 0.42 : 0.18;
    final rawName = welcomeName?.trim() ?? '';
    final showWelcome = isFront && rawName.isNotEmpty;
    final todayLabel = ngmyHomeDateTabLabel(DateTime.now());
    final handle = rawName.startsWith('@') ? rawName : '@$rawName';
    final face = Stack(
      children: [
        if (fillBleed)
          Positioned.fill(child: child)
        else ...[
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
            padding: EdgeInsets.fromLTRB(showWelcome ? 12 : 20, showWelcome ? 48 : 28, 48, footer != null ? 44 : 16),
            child: child,
          ),
        ],
        // Soft top shade so welcome / date stay readable on full-bleed faces.
        if (fillBleed)
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 64,
            child: IgnorePointer(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [
                      Colors.black.withValues(alpha: 0.38),
                      Colors.black.withValues(alpha: 0.0),
                    ],
                  ),
                ),
              ),
            ),
          ),
        if (showWelcome)
          Positioned(
            left: 8,
            top: 6,
            child: _WelcomeGlassFrame(greeting: 'Welcome back', handle: handle),
          ),
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
    );

    return Stack(
      clipBehavior: Clip.none,
      alignment: Alignment.topCenter,
      children: [
        Padding(
          padding: const EdgeInsets.only(top: 16),
          child: DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(28),
              boxShadow: isFront
                  ? [
                      BoxShadow(color: Colors.black.withValues(alpha: 0.32), blurRadius: 28, offset: const Offset(0, 14)),
                      BoxShadow(color: accent[0].withValues(alpha: 0.18), blurRadius: 18, offset: const Offset(0, 6)),
                    ]
                  : [
                      BoxShadow(color: Colors.black.withValues(alpha: 0.18), blurRadius: 14, offset: const Offset(0, 8)),
                    ],
            ),
            // Full-bleed money/photo faces: solid underlay + no white glass ring (kills edge hairlines).
            child: fillBleed
                ? ClipRRect(
                    borderRadius: BorderRadius.circular(28),
                    clipBehavior: Clip.antiAliasWithSaveLayer,
                    child: ColoredBox(color: accent[0], child: face),
                  )
                : ClipRRect(
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
                        ),
                        child: face,
                      ),
                    ),
                  ),
          ),
        ),
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
  bool _autoPlay = false;
  NgmyHomeCardSlideStyle _slideStyle = NgmyHomeCardSlideStyle.dropDown;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final s = await NgmyHomeLocalStore.loadSpending(widget.userEmail);
    final n = await NgmyHomeLocalStore.loadNotes(widget.userEmail);
    final deck = await NgmyHomeLocalStore.loadDeckPrefs(widget.userEmail);
    if (!mounted) return;
    s.sort((a, b) => b.date.compareTo(a.date));
    n.sort((a, b) => b.createdAt.compareTo(a.createdAt));
    setState(() {
      _spending = s;
      _notes = n;
      _autoPlay = deck.autoPlay;
      _slideStyle = deck.style;
      _loaded = true;
    });
  }

  Future<void> _setDeckPrefs({bool? autoPlay, NgmyHomeCardSlideStyle? style}) async {
    final nextAuto = autoPlay ?? _autoPlay;
    final nextStyle = style ?? _slideStyle;
    setState(() {
      _autoPlay = nextAuto;
      _slideStyle = nextStyle;
    });
    await NgmyHomeLocalStore.saveDeckPrefs(widget.userEmail, autoPlay: nextAuto, style: nextStyle);
  }

  double get _totalSpent => _spending.where((e) => !e.hasImage && !e.isPassword).fold(0.0, (sum, e) => sum + e.amount);

  Future<void> _addSpendingEntry(NgmySpendingEntry entry) async {
    setState(() => _spending = [entry, ..._spending]);
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
  }

  Future<void> _deleteSpending(String id) async {
    final ok = await showNgmyRoboticDeleteConfirm(context, title: 'Remove this card?');
    if (!ok || !mounted) return;
    setState(() => _spending = _spending.where((e) => e.id != id).toList());
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
  }

  Future<void> _addNote(String text) async {
    final note = NgmyHomeNote(id: DateTime.now().microsecondsSinceEpoch.toString(), text: text, createdAt: DateTime.now());
    setState(() => _notes = [note, ..._notes]);
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
  }

  Future<void> _deleteNote(String id) async {
    final ok = await showNgmyRoboticDeleteConfirm(context, title: 'Remove this note?');
    if (!ok || !mounted) return;
    setState(() => _notes = _notes.where((n) => n.id != id).toList());
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
  }

  Future<void> _openAddSheet() async {
    if (_kind == _NgmyHomeCardKind.spending) {
      final result = await showGeneralDialog<Map<String, String>>(
        context: context,
        barrierDismissible: true,
        barrierLabel: 'Dismiss',
        barrierColor: Colors.black.withValues(alpha: 0.62),
        transitionDuration: const Duration(milliseconds: 420),
        pageBuilder: (ctx, anim, secondary) => const SizedBox.shrink(),
        transitionBuilder: (ctx, anim, secondary, child) {
          final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
          return FadeTransition(
            opacity: anim,
            child: ScaleTransition(
              scale: Tween<double>(begin: 0.86, end: 1).animate(curved),
              child: _NgmyAddSpendingSheet(
                userEmail: widget.userEmail,
                autoPlay: _autoPlay,
                slideStyle: _slideStyle,
                onDeckSettingsChanged: (auto, style) => _setDeckPrefs(autoPlay: auto, style: style),
              ),
            ),
          );
        },
      );
      if (result == null) return;
      final kind = result['kind'] ?? 'spending';
      if (kind == 'photo') {
        final b64 = result['imageBase64'] ?? '';
        if (b64.isEmpty) return;
        await _addSpendingEntry(
          NgmySpendingEntry(
            id: DateTime.now().microsecondsSinceEpoch.toString(),
            amount: 0,
            description: 'Photo',
            category: 'Photo',
            date: DateTime.now(),
            imageBase64: b64,
          ),
        );
        return;
      }
      if (kind == 'business_card') {
        final json = result['businessCardJson'] ?? '';
        if (json.isEmpty) return;
        await _addSpendingEntry(
          NgmySpendingEntry(
            id: DateTime.now().microsecondsSinceEpoch.toString(),
            amount: 0,
            description: result['description'] ?? 'Business card',
            category: 'Business Card',
            date: DateTime.now(),
            businessCardJson: json,
          ),
        );
        return;
      }
      if (kind == 'password') {
        final email = (result['passwordEmail'] ?? '').trim();
        final secret = (result['passwordSecret'] ?? '').trim();
        if (email.isEmpty && secret.isEmpty) return;
        await _addSpendingEntry(
          NgmySpendingEntry(
            id: DateTime.now().microsecondsSinceEpoch.toString(),
            amount: 0,
            description: (result['description'] ?? '').trim().isEmpty ? 'Login' : result['description']!.trim(),
            category: 'Password',
            date: DateTime.now(),
            passwordEmail: email,
            passwordSecret: secret,
          ),
        );
        return;
      }
      if (kind == 'pin') {
        await _addSpendingEntry(
          NgmySpendingEntry(
            id: DateTime.now().microsecondsSinceEpoch.toString(),
            amount: 0,
            description: (result['description'] ?? 'Pinned').trim(),
            category: result['category'] ?? 'Other',
            date: DateTime.now(),
            pinnedNoteText: result['pinnedNoteText'] ?? '',
            pinnedAlarmText: result['pinnedAlarmText'] ?? '',
            note: result['note'] ?? '',
          ),
        );
        return;
      }
      final amount = double.tryParse(result['amount'] ?? '') ?? 0;
      if (amount <= 0) return;
      await _addSpendingEntry(
        NgmySpendingEntry(
          id: DateTime.now().microsecondsSinceEpoch.toString(),
          amount: amount,
          description: result['description']?.trim().isEmpty == true ? 'Expense' : result['description']!.trim(),
          category: result['category'] ?? 'Other',
          date: DateTime.now(),
          note: result['note'] ?? '',
          pinnedNoteText: result['pinnedNoteText'] ?? '',
          pinnedAlarmText: result['pinnedAlarmText'] ?? '',
        ),
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
        // Keep both stacks mounted so the front card stays put when toggling SPENDING/NOTES.
        IndexedStack(
          index: _kind == _NgmyHomeCardKind.spending ? 0 : 1,
          sizing: StackFit.loose,
          children: [
            NgmyGlassCardStack<NgmySpendingEntry>(
              key: const ValueKey('home-spending-stack'),
              height: 252,
              items: _spending,
              itemId: (e) => e.id,
              autoPlay: _autoPlay,
              slideStyle: _slideStyle,
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
                accent: entry.hasImage
                    ? const [Color(0xFF111827), Color(0xFF1F2937)]
                    : entry.isPassword
                        ? const [Color(0xFFFBBF24), Color(0xFFEA580C)]
                        : entry.showsCreditFace
                            ? ngmyCreditThemeColors(entry.category)
                            : const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
                isFront: isFront,
                showDateTab: revealDates,
                welcomeName: isFront ? name : null,
                onDelete: isFront ? () => _deleteSpending(entry.id) : null,
                onAdd: isFront ? _openAddSheet : null,
                footer: isFront && !entry.hideModePill ? _modePill() : null,
                fillBleed: entry.hasImage || entry.showsCreditFace,
                child: _SpendingCardContent(entry: entry, totalSpent: _totalSpent),
              ),
            ),
            NgmyGlassCardStack<NgmyHomeNote>(
              key: const ValueKey('home-notes-stack'),
              height: 252,
              items: _notes,
              itemId: (n) => n.id,
              autoPlay: _autoPlay,
              slideStyle: _slideStyle,
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
    if (entry.hasImage) {
      return _ImageCardBody(imageBase64: entry.imageBase64);
    }
    if (entry.hasBusinessCard) {
      return _BusinessCardBody(json: entry.businessCardJson);
    }
    if (entry.isPassword) {
      return _PasswordCardBody(entry: entry);
    }
    if (entry.hasPinnedEssentials && entry.amount <= 0) {
      return _PinnedEssentialsCardBody(entry: entry);
    }
    return _CreditCardSpendBody(entry: entry, totalSpent: totalSpent);
  }
}

class _ImageCardBody extends StatefulWidget {
  const _ImageCardBody({required this.imageBase64});

  final String imageBase64;

  @override
  State<_ImageCardBody> createState() => _ImageCardBodyState();
}

class _ImageCardBodyState extends State<_ImageCardBody> {
  Uint8List? _bytes;
  String _src = '';

  @override
  void initState() {
    super.initState();
    _decode(widget.imageBase64);
  }

  @override
  void didUpdateWidget(covariant _ImageCardBody oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.imageBase64 != widget.imageBase64) _decode(widget.imageBase64);
  }

  void _decode(String raw) {
    if (raw == _src && _bytes != null) return;
    _src = raw;
    try {
      _bytes = base64Decode(raw);
    } catch (_) {
      _bytes = null;
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_bytes == null) {
      return const ColoredBox(color: Colors.black26, child: Center(child: Icon(Icons.broken_image_rounded, color: Colors.white54)));
    }
    return Image.memory(
      _bytes!,
      key: ValueKey(_src.hashCode),
      fit: BoxFit.cover,
      width: double.infinity,
      height: double.infinity,
      gaplessPlayback: true,
      filterQuality: FilterQuality.medium,
    );
  }
}

class _BusinessCardBody extends StatelessWidget {
  const _BusinessCardBody({required this.json});

  final String json;

  @override
  Widget build(BuildContext context) {
    NgmyBusinessCardDocument? doc;
    try {
      final map = jsonDecode(json);
      if (map is Map) doc = NgmyBusinessCardDocument.fromJson(Map<String, dynamic>.from(map));
    } catch (_) {}
    return Padding(
      padding: const EdgeInsets.fromLTRB(10, 44, 10, 12),
      child: Center(
        child: doc == null
            ? const Text('Business card unavailable', style: TextStyle(color: Colors.white70))
            : LayoutBuilder(
                builder: (context, c) {
                  final w = math.min(c.maxWidth, 320.0);
                  return NgmyBusinessCardPreview(document: doc!, width: w, interactive: false);
                },
              ),
      ),
    );
  }
}

class _PasswordCardBody extends StatefulWidget {
  const _PasswordCardBody({required this.entry});

  final NgmySpendingEntry entry;

  @override
  State<_PasswordCardBody> createState() => _PasswordCardBodyState();
}

class _PasswordCardBodyState extends State<_PasswordCardBody> {
  bool _show = false;

  @override
  Widget build(BuildContext context) {
    final entry = widget.entry;
    final secret = entry.passwordSecret;
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 8, 4, 8),
      child: Column(
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(999),
              color: Colors.black.withValues(alpha: 0.28),
              border: Border.all(color: const Color(0xFFFBBF24).withValues(alpha: 0.55)),
            ),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.lock_rounded, size: 12, color: Color(0xFFFBBF24)),
                SizedBox(width: 5),
                Text('PASSWORD', style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.0, color: Color(0xFFFBBF24))),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    Colors.black.withValues(alpha: 0.40),
                    const Color(0xFF7C2D12).withValues(alpha: 0.32),
                  ],
                ),
                border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    entry.description.isEmpty ? 'Login' : entry.description,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14),
                  ),
                  const SizedBox(height: 8),
                  Text('EMAIL', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, letterSpacing: 1.0, color: Colors.white.withValues(alpha: 0.55))),
                  const SizedBox(height: 2),
                  Text(
                    entry.passwordEmail.isEmpty ? '—' : entry.passwordEmail,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12.5),
                  ),
                  const SizedBox(height: 8),
                  Text('PASSWORD', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w800, letterSpacing: 1.0, color: Colors.white.withValues(alpha: 0.55))),
                  const SizedBox(height: 2),
                  Row(
                    children: [
                      Expanded(
                        child: Text(
                          secret.isEmpty
                              ? '—'
                              : (_show ? secret : '•' * math.min(secret.length.clamp(6, 14), 14)),
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: _show ? 13 : 16,
                            letterSpacing: _show ? 0.2 : 1.2,
                          ),
                        ),
                      ),
                      IconButton(
                        visualDensity: VisualDensity.compact,
                        padding: EdgeInsets.zero,
                        constraints: const BoxConstraints(minWidth: 32, minHeight: 32),
                        onPressed: () => setState(() => _show = !_show),
                        icon: Icon(_show ? Icons.visibility_off_rounded : Icons.visibility_rounded, color: const Color(0xFFFBBF24), size: 20),
                        tooltip: _show ? 'Hide password' : 'Show password',
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _PinnedEssentialsCardBody extends StatelessWidget {
  const _PinnedEssentialsCardBody({required this.entry});

  final NgmySpendingEntry entry;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 36),
      child: Column(
        children: [
          const SizedBox(height: 8),
          Text(
            'FROM BUSINESS ESSENTIALS',
            style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.2, color: Colors.white.withValues(alpha: 0.65)),
          ),
          const Spacer(),
          if (entry.pinnedAlarmText.trim().isNotEmpty)
            _essentialsBlock(icon: Icons.alarm_rounded, label: 'ALARM', text: entry.pinnedAlarmText, color: const Color(0xFFF97316)),
          if (entry.pinnedAlarmText.trim().isNotEmpty && entry.pinnedNoteText.trim().isNotEmpty) const SizedBox(height: 10),
          if (entry.pinnedNoteText.trim().isNotEmpty)
            _essentialsBlock(icon: Icons.sticky_note_2_rounded, label: 'NOTE', text: entry.pinnedNoteText, color: const Color(0xFF60A5FA)),
          if (entry.note.trim().isNotEmpty) ...[
            const SizedBox(height: 10),
            Text(entry.note, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w600)),
          ],
          const Spacer(),
        ],
      ),
    );
  }

  Widget _essentialsBlock({required IconData icon, required String label, required String text, required Color color}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        color: Colors.white.withValues(alpha: 0.12),
        border: Border.all(color: color.withValues(alpha: 0.45)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(icon, size: 16, color: color),
              const SizedBox(width: 6),
              Text(label, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: color)),
            ],
          ),
          const SizedBox(height: 8),
          Text(text, maxLines: 4, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, height: 1.3, fontSize: 14)),
        ],
      ),
    );
  }
}

class _CreditCardSpendBody extends StatelessWidget {
  const _CreditCardSpendBody({required this.entry, required this.totalSpent});

  final NgmySpendingEntry entry;
  final double totalSpent;

  List<Color> get _themeColors => ngmyCreditThemeColors(entry.category);

  @override
  Widget build(BuildContext context) {
    final colors = _themeColors;
    final cardNote = entry.note.trim();
    // Full-bleed money face — fills the frosted card like a photo.
    return DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [colors.first, colors.last.withValues(alpha: 0.92)],
        ),
      ),
      child: Stack(
        children: [
          Positioned(
            right: -20,
            bottom: -30,
            child: Icon(Icons.credit_card_rounded, size: 140, color: Colors.white.withValues(alpha: 0.07)),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 54, 16, 18),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Icon(_kSpendingCategories[entry.category] ?? Icons.credit_card_rounded, size: 16, color: Colors.white.withValues(alpha: 0.92)),
                    const SizedBox(width: 6),
                    Expanded(
                      child: Text(
                        entry.category.toUpperCase(),
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.2, color: Colors.white.withValues(alpha: 0.88)),
                      ),
                    ),
                    Text('NGMY', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: Colors.white.withValues(alpha: 0.5))),
                  ],
                ),
                const Spacer(),
                Text(
                  entry.description.isEmpty ? 'Expense' : entry.description,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
                ),
                const SizedBox(height: 6),
                Text(
                  '-\$${entry.amount.toStringAsFixed(2)}',
                  style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, height: 1.05, letterSpacing: 0.4),
                ),
                const SizedBox(height: 10),
                Row(
                  children: [
                    Expanded(
                      child: Text(
                        'TOTAL  -\$${totalSpent.toStringAsFixed(2)}',
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.72)),
                      ),
                    ),
                    Text(
                      ngmyHomeDateTabLabel(entry.date).split(',').first,
                      style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: Colors.white.withValues(alpha: 0.65)),
                    ),
                  ],
                ),
                if (cardNote.isNotEmpty) ...[
                  const SizedBox(height: 6),
                  Text(
                    cardNote,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: Colors.white.withValues(alpha: 0.78)),
                  ),
                ],
              ],
            ),
          ),
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
  const _NgmyAddSpendingSheet({
    required this.userEmail,
    required this.autoPlay,
    required this.slideStyle,
    required this.onDeckSettingsChanged,
  });

  final String userEmail;
  final bool autoPlay;
  final NgmyHomeCardSlideStyle slideStyle;
  final Future<void> Function(bool autoPlay, NgmyHomeCardSlideStyle style) onDeckSettingsChanged;

  @override
  State<_NgmyAddSpendingSheet> createState() => _NgmyAddSpendingSheetState();
}

class _NgmyAddSpendingSheetState extends State<_NgmyAddSpendingSheet> with SingleTickerProviderStateMixin {
  final _amountC = TextEditingController();
  final _descC = TextEditingController();
  final _emailC = TextEditingController();
  final _passC = TextEditingController();
  final _amountFocus = FocusNode();
  String _category = 'Food';
  String? _pinnedNote;
  String? _pinnedAlarm;
  late bool _autoPlay;
  late NgmyHomeCardSlideStyle _slideStyle;
  late final AnimationController _pulse;

  bool get _isPassword => _category == 'Password';

  @override
  void initState() {
    super.initState();
    _autoPlay = widget.autoPlay;
    _slideStyle = widget.slideStyle;
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1800))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    _amountC.dispose();
    _descC.dispose();
    _emailC.dispose();
    _passC.dispose();
    _amountFocus.dispose();
    super.dispose();
  }

  Future<void> _uploadPhoto() async {
    final b64 = await ngmyPickAndCropHomeCardImage(context);
    if (b64 == null || b64.isEmpty || !mounted) return;
    Navigator.pop(context, {'kind': 'photo', 'imageBase64': b64});
  }

  Future<void> _pickEssentialsPin() async {
    final notes = await ngmyExportBusinessNotes(userEmail: widget.userEmail);
    final alarms = await NgmyHelperAlarmMemoryStore.load(widget.userEmail);
    if (!mounted) return;
    final picked = await showModalBottomSheet<Map<String, String>>(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) => _NgmyPinEssentialsSheet(notes: notes, alarms: alarms),
    );
    if (picked == null || !mounted) return;
    setState(() {
      _pinnedNote = picked['note'];
      _pinnedAlarm = picked['alarm'];
    });
  }

  Future<void> _pickBusinessCard() async {
    final cards = await loadNgmyBusinessCards(userEmail: widget.userEmail);
    if (!mounted) return;
    if (cards.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('No business cards yet — create one in Business Card Studio first.')),
      );
      return;
    }
    final picked = await showModalBottomSheet<Map<String, dynamic>>(
      context: context,
      backgroundColor: Colors.transparent,
      isScrollControlled: true,
      builder: (ctx) => _NgmyPickBusinessCardSheet(cards: cards),
    );
    if (picked == null || !mounted) return;
    final doc = NgmyBusinessCardDocument.fromJson(picked);
    Navigator.pop(context, {
      'kind': 'business_card',
      'businessCardJson': jsonEncode(doc.toJson()),
      'description': doc.fullName.trim().isEmpty ? 'Business card' : doc.fullName.trim(),
    });
  }

  void _save() {
    if (_isPassword) {
      Navigator.pop(context, {
        'kind': 'password',
        'passwordEmail': _emailC.text.trim(),
        'passwordSecret': _passC.text.trim(),
        'description': _descC.text.trim(),
      });
      return;
    }
    final hasPin = (_pinnedNote ?? '').isNotEmpty || (_pinnedAlarm ?? '').isNotEmpty;
    final amount = _amountC.text.trim();
    if (hasPin && (amount.isEmpty || (double.tryParse(amount) ?? 0) <= 0)) {
      Navigator.pop(context, {
        'kind': 'pin',
        'description': _descC.text.trim().isEmpty ? 'Pinned item' : _descC.text.trim(),
        'category': _category,
        'pinnedNoteText': _pinnedNote ?? '',
        'pinnedAlarmText': _pinnedAlarm ?? '',
      });
      return;
    }
    Navigator.pop(context, {
      'kind': 'spending',
      'amount': amount,
      'description': _descC.text.trim(),
      'category': _category,
      'pinnedNoteText': _pinnedNote ?? '',
      'pinnedAlarmText': _pinnedAlarm ?? '',
    });
  }

  Future<void> _toggleAutoPlay() async {
    final next = !_autoPlay;
    setState(() => _autoPlay = next);
    await widget.onDeckSettingsChanged(next, _slideStyle);
  }

  Future<void> _pickStyle(NgmyHomeCardSlideStyle style) async {
    setState(() => _slideStyle = style);
    await widget.onDeckSettingsChanged(_autoPlay, style);
  }

  InputDecoration _fieldDeco({required String hint, required Color muted, required Color fieldBg}) {
    return InputDecoration(
      hintText: hint,
      hintStyle: TextStyle(color: muted),
      filled: true,
      fillColor: fieldBg,
      contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: muted.withValues(alpha: 0.25))),
      enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: muted.withValues(alpha: 0.25))),
      focusedBorder: const OutlineInputBorder(borderRadius: BorderRadius.all(Radius.circular(14)), borderSide: BorderSide(color: Color(0xFF67E8F9), width: 1.4)),
    );
  }

  Widget _hudAction({required IconData icon, required String label, required VoidCallback onTap}) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: Colors.white.withValues(alpha: 0.05),
            border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
          ),
          child: Row(
            children: [
              Icon(icon, size: 18, color: const Color(0xFF67E8F9)),
              const SizedBox(width: 10),
              Expanded(
                child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
              ),
              Icon(Icons.chevron_right_rounded, size: 18, color: Colors.white.withValues(alpha: 0.35)),
            ],
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bottomInset = MediaQuery.viewInsetsOf(context).bottom;
    final size = MediaQuery.sizeOf(context);
    const ink = Colors.white;
    final muted = Colors.white.withValues(alpha: 0.58);
    final fieldBg = Colors.white.withValues(alpha: 0.06);

    return Center(
      child: Padding(
        padding: EdgeInsets.fromLTRB(18, 24, 18, 24 + bottomInset),
        child: Material(
          color: Colors.transparent,
          child: AnimatedBuilder(
            animation: _pulse,
            builder: (context, _) {
              final t = Curves.easeInOut.transform(_pulse.value);
              return Container(
                width: math.min(size.width - 36, 420),
                constraints: BoxConstraints(maxHeight: size.height * 0.82),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(26),
                  gradient: const LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [Color(0xFF0B1220), Color(0xFF111827), Color(0xFF1E1B4B)],
                  ),
                  border: Border.all(
                    color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFF8B5CF6), t)!,
                    width: 1.5,
                  ),
                  boxShadow: [
                    BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.18 + t * 0.14), blurRadius: 28, spreadRadius: 1),
                    BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 32, offset: const Offset(0, 16)),
                  ],
                ),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Padding(
                      padding: const EdgeInsets.fromLTRB(18, 16, 10, 8),
                      child: Row(
                        children: [
                          Container(
                            width: 44,
                            height: 44,
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(14),
                              gradient: SweepGradient(
                                colors: [
                                  Color.lerp(const Color(0xFF22D3EE), const Color(0xFF8B5CF6), t)!,
                                  const Color(0xFF60A5FA),
                                  Color.lerp(const Color(0xFF8B5CF6), const Color(0xFF22D3EE), t)!,
                                ],
                              ),
                            ),
                            child: Container(
                              margin: const EdgeInsets.all(2.5),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(12),
                                color: const Color(0xFF0B1220),
                              ),
                              child: const Icon(Icons.smart_toy_rounded, color: Color(0xFF67E8F9), size: 22),
                            ),
                          ),
                          const SizedBox(width: 12),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'LOG SPENDING',
                                  style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 2.0, color: Color(0xFF67E8F9)),
                                ),
                                SizedBox(height: 2),
                                Text('Device vault · stays local', style: TextStyle(fontSize: 12, color: Color(0x99FFFFFF), fontWeight: FontWeight.w600)),
                              ],
                            ),
                          ),
                          IconButton(
                            onPressed: () => Navigator.pop(context),
                            icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.7)),
                          ),
                        ],
                      ),
                    ),
                    Flexible(
                      child: SingleChildScrollView(
                        keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
                        padding: const EdgeInsets.fromLTRB(18, 4, 18, 18),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Container(
                              padding: const EdgeInsets.all(12),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(16),
                                color: Colors.white.withValues(alpha: 0.04),
                                border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Row(
                                    children: [
                                      const Icon(Icons.auto_awesome_motion_rounded, size: 18, color: Color(0xFF67E8F9)),
                                      const SizedBox(width: 8),
                                      const Expanded(
                                        child: Text('AUTO SLIDE', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: Color(0xFF67E8F9))),
                                      ),
                                      GestureDetector(
                                        onTap: _toggleAutoPlay,
                                        child: AnimatedContainer(
                                          duration: const Duration(milliseconds: 180),
                                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                                          decoration: BoxDecoration(
                                            borderRadius: BorderRadius.circular(999),
                                            gradient: _autoPlay
                                                ? const LinearGradient(colors: [Color(0xFF22D3EE), Color(0xFF8B5CF6)])
                                                : null,
                                            color: _autoPlay ? null : Colors.white.withValues(alpha: 0.08),
                                            border: Border.all(color: Colors.white.withValues(alpha: _autoPlay ? 0 : 0.2)),
                                          ),
                                          child: Text(
                                            _autoPlay ? 'ON' : 'OFF',
                                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 1.1),
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(height: 10),
                                  Text('Pick a slide animation', style: TextStyle(fontSize: 12, color: muted, fontWeight: FontWeight.w600)),
                                  const SizedBox(height: 8),
                                  Wrap(
                                    spacing: 8,
                                    runSpacing: 8,
                                    children: [
                                      for (final style in NgmyHomeCardSlideStyle.values)
                                        GestureDetector(
                                          onTap: () => _pickStyle(style),
                                          child: AnimatedContainer(
                                            duration: const Duration(milliseconds: 160),
                                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                                            decoration: BoxDecoration(
                                              borderRadius: BorderRadius.circular(12),
                                              gradient: _slideStyle == style
                                                  ? const LinearGradient(colors: [Color(0xFF60A5FA), Color(0xFF8B5CF6)])
                                                  : null,
                                              color: _slideStyle == style ? null : Colors.white.withValues(alpha: 0.05),
                                              border: Border.all(
                                                color: _slideStyle == style ? Colors.transparent : Colors.white.withValues(alpha: 0.14),
                                              ),
                                            ),
                                            child: Row(
                                              mainAxisSize: MainAxisSize.min,
                                              children: [
                                                Icon(style.icon, size: 14, color: ink),
                                                const SizedBox(width: 6),
                                                Text(style.label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 11)),
                                              ],
                                            ),
                                          ),
                                        ),
                                    ],
                                  ),
                                ],
                              ),
                            ),
                            const SizedBox(height: 14),
                            _hudAction(icon: Icons.photo_camera_back_rounded, label: 'Upload & crop photo', onTap: _uploadPhoto),
                            const SizedBox(height: 8),
                            _hudAction(
                              icon: Icons.business_center_rounded,
                              label: (_pinnedNote != null || _pinnedAlarm != null) ? 'Essentials pinned ✓' : 'Pin note / alarm from Essentials',
                              onTap: _pickEssentialsPin,
                            ),
                            const SizedBox(height: 8),
                            _hudAction(icon: Icons.badge_rounded, label: 'Add business card to home', onTap: _pickBusinessCard),
                            const SizedBox(height: 16),
                            Text('CATEGORY', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                            const SizedBox(height: 8),
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
                                                        border: Border.all(color: selected ? Colors.transparent : muted.withValues(alpha: 0.22)),
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
                                                            style: TextStyle(fontSize: 10.5, fontWeight: FontWeight.w800, color: selected ? Colors.white : muted),
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
                            const SizedBox(height: 14),
                            if (_isPassword) ...[
                              Text('LABEL', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                              const SizedBox(height: 8),
                              TextField(controller: _descC, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: ink), decoration: _fieldDeco(hint: 'e.g. Gmail, Bank login', muted: muted, fieldBg: fieldBg)),
                              const SizedBox(height: 14),
                              Text('EMAIL', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                              const SizedBox(height: 8),
                              TextField(controller: _emailC, keyboardType: TextInputType.emailAddress, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: ink), decoration: _fieldDeco(hint: 'email@example.com', muted: muted, fieldBg: fieldBg)),
                              const SizedBox(height: 14),
                              Text('PASSWORD', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                              const SizedBox(height: 8),
                              TextField(controller: _passC, obscureText: true, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: ink), decoration: _fieldDeco(hint: 'Password', muted: muted, fieldBg: fieldBg)),
                            ] else ...[
                              Text('AMOUNT', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                              const SizedBox(height: 8),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                                decoration: BoxDecoration(
                                  color: fieldBg,
                                  borderRadius: BorderRadius.circular(18),
                                  border: Border.all(color: const Color(0xFF67E8F9).withValues(alpha: 0.35)),
                                ),
                                child: Row(
                                  children: [
                                    Text('\$', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w900, color: ink.withValues(alpha: 0.55))),
                                    const SizedBox(width: 8),
                                    Expanded(
                                      child: TextField(
                                        controller: _amountC,
                                        focusNode: _amountFocus,
                                        keyboardType: const TextInputType.numberWithOptions(decimal: true),
                                        style: const TextStyle(fontSize: 32, fontWeight: FontWeight.w900, color: ink, height: 1.2),
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
                              TextField(controller: _descC, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: ink), decoration: _fieldDeco(hint: 'What was it for?', muted: muted, fieldBg: fieldBg)),
                            ],
                            const SizedBox(height: 20),
                            FilledButton(
                              onPressed: _save,
                              style: FilledButton.styleFrom(
                                backgroundColor: const Color(0xFF8B5CF6),
                                foregroundColor: Colors.white,
                                minimumSize: const Size(double.infinity, 52),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                elevation: 0,
                              ),
                              child: Text(_isPassword ? 'Save password' : 'Save to card', style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              );
            },
          ),
        ),
      ),
    );
  }
}

class _NgmyPickBusinessCardSheet extends StatelessWidget {
  const _NgmyPickBusinessCardSheet({required this.cards});

  final List<Map<String, dynamic>> cards;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final surface = isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC);
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    return Align(
      alignment: Alignment.bottomCenter,
      child: Material(
        color: Colors.transparent,
        child: Container(
          width: double.infinity,
          constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.72),
          decoration: BoxDecoration(
            color: surface,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
          ),
          child: SafeArea(
            top: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
              children: [
                Text('Add business card', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: ink)),
                const SizedBox(height: 6),
                Text('Pick a card from Business Card Studio', style: TextStyle(fontSize: 12, color: muted)),
                const SizedBox(height: 16),
                ...cards.map((raw) {
                  final doc = NgmyBusinessCardDocument.fromJson(raw);
                  return Padding(
                    padding: const EdgeInsets.only(bottom: 12),
                    child: InkWell(
                      borderRadius: BorderRadius.circular(16),
                      onTap: () => Navigator.pop(context, raw),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            doc.fullName.trim().isEmpty ? 'Untitled card' : doc.fullName.trim(),
                            style: TextStyle(fontWeight: FontWeight.w800, color: ink),
                          ),
                          const SizedBox(height: 8),
                          NgmyBusinessCardPreview(document: doc, width: math.min(MediaQuery.sizeOf(context).width - 48, 320), interactive: false),
                        ],
                      ),
                    ),
                  );
                }),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _NgmyPinEssentialsSheet extends StatelessWidget {
  const _NgmyPinEssentialsSheet({required this.notes, required this.alarms});

  final List<NgmyBusinessNote> notes;
  final List<NgmyHelperAlarmEntry> alarms;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final surface = isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC);
    final ink = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    return Align(
      alignment: Alignment.bottomCenter,
      child: Material(
        color: Colors.transparent,
        child: Container(
          width: double.infinity,
          constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.7),
          decoration: BoxDecoration(
            color: surface,
            borderRadius: const BorderRadius.vertical(top: Radius.circular(28)),
          ),
          child: SafeArea(
            top: false,
            child: ListView(
              padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
              children: [
                Text('Pin to home card', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: ink)),
                const SizedBox(height: 6),
                Text('Pick a Business Essentials note or alarm', style: TextStyle(fontSize: 12, color: muted)),
                const SizedBox(height: 16),
                Text('ALARMS', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                const SizedBox(height: 8),
                if (alarms.isEmpty)
                  Text('No alarms yet', style: TextStyle(color: muted))
                else
                  ...alarms.take(12).map(
                    (a) => ListTile(
                      contentPadding: EdgeInsets.zero,
                      leading: const Icon(Icons.alarm_rounded, color: Color(0xFFF97316)),
                      title: Text(a.summaryLine, style: TextStyle(fontWeight: FontWeight.w700, color: ink)),
                      onTap: () => Navigator.pop(context, {'alarm': a.summaryLine, 'note': ''}),
                    ),
                  ),
                const SizedBox(height: 14),
                Text('NOTES', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                const SizedBox(height: 8),
                if (notes.isEmpty)
                  Text('No essentials notes yet', style: TextStyle(color: muted))
                else
                  ...notes.take(16).map(
                    (n) => ListTile(
                      contentPadding: EdgeInsets.zero,
                      leading: const Icon(Icons.sticky_note_2_rounded, color: Color(0xFF60A5FA)),
                      title: Text(n.preview, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontWeight: FontWeight.w700, color: ink)),
                      subtitle: n.displayBody.trim().isEmpty
                          ? null
                          : Text(n.displayBody, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: muted, fontSize: 12)),
                      onTap: () => Navigator.pop(context, {
                        'note': n.displayBody.trim().isEmpty ? n.preview : '${n.preview}\n${n.displayBody}'.trim(),
                        'alarm': '',
                      }),
                    ),
                  ),
              ],
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

/// Animated robotic confirm dialog for deleting a home card.
Future<bool> showNgmyRoboticDeleteConfirm(BuildContext context, {required String title}) async {
  final result = await showGeneralDialog<bool>(
    context: context,
    barrierDismissible: true,
    barrierLabel: 'Dismiss',
    barrierColor: Colors.black.withValues(alpha: 0.62),
    transitionDuration: const Duration(milliseconds: 420),
    pageBuilder: (ctx, anim, secondary) => const SizedBox.shrink(),
    transitionBuilder: (ctx, anim, secondary, child) {
      final curved = CurvedAnimation(parent: anim, curve: Curves.easeOutBack);
      return FadeTransition(
        opacity: anim,
        child: ScaleTransition(
          scale: Tween<double>(begin: 0.82, end: 1).animate(curved),
          child: _NgmyRoboticDeleteDialog(title: title),
        ),
      );
    },
  );
  return result == true;
}

class _NgmyRoboticDeleteDialog extends StatefulWidget {
  const _NgmyRoboticDeleteDialog({required this.title});

  final String title;

  @override
  State<_NgmyRoboticDeleteDialog> createState() => _NgmyRoboticDeleteDialogState();
}

class _NgmyRoboticDeleteDialogState extends State<_NgmyRoboticDeleteDialog> with SingleTickerProviderStateMixin {
  late final AnimationController _pulse;

  @override
  void initState() {
    super.initState();
    _pulse = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _pulse.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Material(
        color: Colors.transparent,
        child: AnimatedBuilder(
          animation: _pulse,
          builder: (context, _) {
            final t = Curves.easeInOut.transform(_pulse.value);
            return Container(
              width: math.min(MediaQuery.sizeOf(context).width - 40, 360),
              margin: const EdgeInsets.symmetric(horizontal: 20),
              padding: const EdgeInsets.fromLTRB(20, 22, 20, 18),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                gradient: const LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [Color(0xFF0B1220), Color(0xFF111827), Color(0xFF1E1B4B)],
                ),
                border: Border.all(color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFEF4444), t)!, width: 1.6),
                boxShadow: [
                  BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.22 + t * 0.18), blurRadius: 28, spreadRadius: 1),
                  BoxShadow(color: const Color(0xFFEF4444).withValues(alpha: 0.18), blurRadius: 24, offset: const Offset(0, 10)),
                ],
              ),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Transform.rotate(
                    angle: (t - 0.5) * 0.12,
                    child: Container(
                      width: 64,
                      height: 64,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: SweepGradient(
                          colors: [
                            Color.lerp(const Color(0xFF22D3EE), const Color(0xFFEF4444), t)!,
                            const Color(0xFF8B5CF6),
                            Color.lerp(const Color(0xFFEF4444), const Color(0xFF22D3EE), t)!,
                          ],
                        ),
                        boxShadow: [
                          BoxShadow(color: const Color(0xFF22D3EE).withValues(alpha: 0.35), blurRadius: 18 + t * 10),
                        ],
                      ),
                      child: Container(
                        margin: const EdgeInsets.all(3),
                        decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF0B1220)),
                        child: const Icon(Icons.smart_toy_rounded, color: Color(0xFF67E8F9), size: 30),
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'SYSTEM CHECK',
                    style: TextStyle(
                      fontSize: 11,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 2.2,
                      color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFF87171), t),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    widget.title,
                    textAlign: TextAlign.center,
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, height: 1.2),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'This card will be removed from your home deck. Confirm to proceed.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.68), fontWeight: FontWeight.w600, fontSize: 13, height: 1.35),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => Navigator.pop(context, false),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: Colors.white,
                            side: BorderSide(color: Colors.white.withValues(alpha: 0.28)),
                            minimumSize: const Size(0, 48),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w800)),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton(
                          onPressed: () => Navigator.pop(context, true),
                          style: FilledButton.styleFrom(
                            backgroundColor: const Color(0xFFEF4444),
                            foregroundColor: Colors.white,
                            minimumSize: const Size(0, 48),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                          ),
                          child: const Text('Remove', style: TextStyle(fontWeight: FontWeight.w900)),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}
