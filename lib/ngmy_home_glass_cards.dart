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
import 'ngmy_civic_registry_id_card.dart';
import 'ngmy_helper_alarm_memory.dart';
import 'ngmy_home_card_image_crop.dart';
import 'ngmy_home_essentials_hub.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_medicine_organizer.dart';

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
    this.pinnedEssentialsKind = '',
    this.businessCardJson = '',
    this.civicIdJson = '',
    this.cardTemplateId = '',
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
  /// Essentials category label (Contacts, Notes, Hotlines, …).
  final String pinnedEssentialsKind;
  /// JSON of a pinned NgmyBusinessCardDocument.
  final String businessCardJson;
  /// JSON of a pinned Civic Registry ID record.
  final String civicIdJson;
  /// Money-card face template id (see [kNgmyMoneyCardTemplates]).
  final String cardTemplateId;

  bool get hasImage => imageBase64.trim().isNotEmpty;
  bool get isPassword => category == 'Password';
  bool get hasPinnedEssentials =>
      pinnedEssentialsKind.trim().isNotEmpty || pinnedNoteText.trim().isNotEmpty || pinnedAlarmText.trim().isNotEmpty;
  bool get hasBusinessCard => businessCardJson.trim().isNotEmpty;
  bool get hasCivicId => civicIdJson.trim().isNotEmpty;
  bool get hideModePill =>
      hasImage || isPassword || hasBusinessCard || hasCivicId || (hasPinnedEssentials && amount <= 0);
  /// Money / category face that should fill the whole frosted card like a photo.
  bool get showsCreditFace =>
      !hasImage && !isPassword && !hasBusinessCard && !hasCivicId && !(hasPinnedEssentials && amount <= 0);

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
    String? pinnedEssentialsKind,
    String? businessCardJson,
    String? civicIdJson,
    String? cardTemplateId,
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
        pinnedEssentialsKind: pinnedEssentialsKind ?? this.pinnedEssentialsKind,
        businessCardJson: businessCardJson ?? this.businessCardJson,
        civicIdJson: civicIdJson ?? this.civicIdJson,
        cardTemplateId: cardTemplateId ?? this.cardTemplateId,
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
        'pinnedEssentialsKind': pinnedEssentialsKind,
        'businessCardJson': businessCardJson,
        'civicIdJson': civicIdJson,
        'cardTemplateId': cardTemplateId,
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
        pinnedEssentialsKind: j['pinnedEssentialsKind']?.toString() ?? '',
        businessCardJson: j['businessCardJson']?.toString() ?? '',
        civicIdJson: j['civicIdJson']?.toString() ?? '',
        cardTemplateId: j['cardTemplateId']?.toString() ?? '',
      );
}

class NgmyHomeNote {
  const NgmyHomeNote({required this.id, required this.text, required this.createdAt});

  final String id;
  final String text;
  final DateTime createdAt;

  NgmyHomeNote copyWith({String? id, String? text, DateTime? createdAt}) => NgmyHomeNote(
        id: id ?? this.id,
        text: text ?? this.text,
        createdAt: createdAt ?? this.createdAt,
      );

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

  static Future<({bool autoPlay, NgmyHomeCardSlideStyle style, String? frontSpendingId, String? frontNoteId})> loadDeckPrefs(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_deckKey(email));
    if (raw == null || raw.isEmpty) {
      return (autoPlay: false, style: NgmyHomeCardSlideStyle.dropDown, frontSpendingId: null, frontNoteId: null);
    }
    try {
      final map = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      final styleName = map['style'] as String? ?? 'dropDown';
      final style = NgmyHomeCardSlideStyle.values.firstWhere(
        (e) => e.name == styleName,
        orElse: () => NgmyHomeCardSlideStyle.dropDown,
      );
      return (
        autoPlay: map['autoPlay'] == true,
        style: style,
        frontSpendingId: map['frontSpendingId']?.toString(),
        frontNoteId: map['frontNoteId']?.toString(),
      );
    } catch (_) {
      return (autoPlay: false, style: NgmyHomeCardSlideStyle.dropDown, frontSpendingId: null, frontNoteId: null);
    }
  }

  static Future<void> saveDeckPrefs(
    String email, {
    required bool autoPlay,
    required NgmyHomeCardSlideStyle style,
    String? frontSpendingId,
    String? frontNoteId,
  }) async {
    final prefs = await SharedPreferences.getInstance();
    final existing = prefs.getString(_deckKey(email));
    String? keepSpend = frontSpendingId;
    String? keepNote = frontNoteId;
    if (existing != null && existing.isNotEmpty) {
      try {
        final map = Map<String, dynamic>.from(jsonDecode(existing) as Map);
        keepSpend ??= map['frontSpendingId']?.toString();
        keepNote ??= map['frontNoteId']?.toString();
      } catch (_) {}
    }
    await prefs.setString(
      _deckKey(email),
      jsonEncode({
        'autoPlay': autoPlay,
        'style': style.name,
        if (keepSpend != null && keepSpend.isNotEmpty) 'frontSpendingId': keepSpend,
        if (keepNote != null && keepNote.isNotEmpty) 'frontNoteId': keepNote,
      }),
    );
  }

  static String _ackKey(String email) => 'ngmy_home_alarm_ack_v1_${email.toLowerCase().trim()}';

  static Future<Set<String>> loadAlarmAcks(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_ackKey(email));
    if (raw == null || raw.isEmpty) return {};
    try {
      final list = jsonDecode(raw);
      if (list is! List) return {};
      return list.map((e) => e.toString()).toSet();
    } catch (_) {
      return {};
    }
  }

  static Future<void> saveAlarmAcks(String email, Set<String> ids) async {
    final prefs = await SharedPreferences.getInstance();
    final trimmed = ids.toList()..sort();
    await prefs.setString(_ackKey(email), jsonEncode(trimmed.take(200).toList()));
  }
}

/// How auto-play advances the home card deck.
enum NgmyHomeCardSlideStyle {
  dropDown,
  slideLeft,
  slideRight,
  fade,
  flipScale,
  slideUp,
  zoomBurst,
  spiral,
}

extension NgmyHomeCardSlideStyleX on NgmyHomeCardSlideStyle {
  String get label => switch (this) {
        NgmyHomeCardSlideStyle.dropDown => 'Drop',
        NgmyHomeCardSlideStyle.slideLeft => 'Sweep ←',
        NgmyHomeCardSlideStyle.slideRight => 'Sweep →',
        NgmyHomeCardSlideStyle.fade => 'Fade',
        NgmyHomeCardSlideStyle.flipScale => 'Flip',
        NgmyHomeCardSlideStyle.slideUp => 'Lift',
        NgmyHomeCardSlideStyle.zoomBurst => 'Zoom',
        NgmyHomeCardSlideStyle.spiral => 'Spiral',
      };

  IconData get icon => switch (this) {
        NgmyHomeCardSlideStyle.dropDown => Icons.arrow_downward_rounded,
        NgmyHomeCardSlideStyle.slideLeft => Icons.west_rounded,
        NgmyHomeCardSlideStyle.slideRight => Icons.east_rounded,
        NgmyHomeCardSlideStyle.fade => Icons.blur_on_rounded,
        NgmyHomeCardSlideStyle.flipScale => Icons.flip_rounded,
        NgmyHomeCardSlideStyle.slideUp => Icons.arrow_upward_rounded,
        NgmyHomeCardSlideStyle.zoomBurst => Icons.zoom_out_map_rounded,
        NgmyHomeCardSlideStyle.spiral => Icons.rotate_right_rounded,
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

/// Luxurious payment-card face templates (Log spending → money categories).
enum NgmyMoneyCardPattern {
  luxeGradient,
  diagonal,
  mesh,
  carbon,
  marbleVein,
  nightGold,
  oceanDepth,
  obsidian,
  champagne,
  aurora,
  goldLeaf,
  silverBrushed,
  crystalFacet,
  roseMetal,
  diamondNoir,
}

/// Where amount / copy sit on the card face — keeps each luxe design distinct.
enum NgmyMoneyCardLayout {
  classic,
  amountTopRight,
  amountCenter,
  amountBottomRight,
  amountMidLeft,
}

class NgmyMoneyCardTemplate {
  const NgmyMoneyCardTemplate({
    required this.id,
    required this.label,
    required this.colors,
    required this.pattern,
    this.layout = NgmyMoneyCardLayout.classic,
  });

  final String id;
  final String label;
  final List<Color> colors;
  final NgmyMoneyCardPattern pattern;
  final NgmyMoneyCardLayout layout;
}

const kNgmyMoneyCardTemplates = <NgmyMoneyCardTemplate>[
  // Row 1 — redesigned with unique luxe structure
  NgmyMoneyCardTemplate(
    id: 'midnight_gold',
    label: 'Midnight Gold',
    colors: [Color(0xFF1A1207), Color(0xFF8B6914), Color(0xFFF5D76E)],
    pattern: NgmyMoneyCardPattern.goldLeaf,
    layout: NgmyMoneyCardLayout.amountTopRight,
  ),
  NgmyMoneyCardTemplate(
    id: 'obsidian_steel',
    label: 'Obsidian',
    colors: [Color(0xFF050505), Color(0xFF1C1917), Color(0xFFA8A29E)],
    pattern: NgmyMoneyCardPattern.diamondNoir,
    layout: NgmyMoneyCardLayout.amountCenter,
  ),
  NgmyMoneyCardTemplate(
    id: 'champagne_noir',
    label: 'Rose Champagne',
    colors: [Color(0xFF3B0A1F), Color(0xFF9F1239), Color(0xFFFBCFE8)],
    pattern: NgmyMoneyCardPattern.roseMetal,
    layout: NgmyMoneyCardLayout.amountMidLeft,
  ),
  NgmyMoneyCardTemplate(
    id: 'royal_violet',
    label: 'Crystal Violet',
    colors: [Color(0xFF2E1065), Color(0xFFC4B5FD), Color(0xFFF5F3FF)],
    pattern: NgmyMoneyCardPattern.crystalFacet,
    layout: NgmyMoneyCardLayout.amountBottomRight,
  ),
  NgmyMoneyCardTemplate(
    id: 'ocean_platinum',
    label: 'Crystal Tide',
    colors: [Color(0xFF0C4A6E), Color(0xFF7DD3FC), Color(0xFFF0F9FF)],
    pattern: NgmyMoneyCardPattern.crystalFacet,
    layout: NgmyMoneyCardLayout.amountTopRight,
  ),
  // Row 2 — Carbon + Emerald kept; more crystal / rose / diamond
  NgmyMoneyCardTemplate(
    id: 'carbon_noir',
    label: 'Carbon Noir',
    colors: [Color(0xFF111827), Color(0xFF1F2937), Color(0xFF9CA3AF)],
    pattern: NgmyMoneyCardPattern.carbon,
    layout: NgmyMoneyCardLayout.amountCenter,
  ),
  NgmyMoneyCardTemplate(
    id: 'emerald_luxe',
    label: 'Emerald Luxe',
    colors: [Color(0xFF022C22), Color(0xFF065F46), Color(0xFF34D399)],
    pattern: NgmyMoneyCardPattern.diagonal,
    layout: NgmyMoneyCardLayout.amountMidLeft,
  ),
  NgmyMoneyCardTemplate(
    id: 'marble_ink',
    label: 'Crystal Frost',
    colors: [Color(0xFF164E63), Color(0xFFA5F3FC), Color(0xFFECFEFF)],
    pattern: NgmyMoneyCardPattern.crystalFacet,
    layout: NgmyMoneyCardLayout.amountCenter,
  ),
  NgmyMoneyCardTemplate(
    id: 'aurora_vault',
    label: 'Rose Aurora',
    colors: [Color(0xFF500724), Color(0xFFE11D48), Color(0xFFFDA4AF)],
    pattern: NgmyMoneyCardPattern.roseMetal,
    layout: NgmyMoneyCardLayout.amountBottomRight,
  ),
  NgmyMoneyCardTemplate(
    id: 'mesh_sapphire',
    label: 'Sapphire Diamond',
    colors: [Color(0xFF020617), Color(0xFF1E3A8A), Color(0xFFBFDBFE)],
    pattern: NgmyMoneyCardPattern.diamondNoir,
    layout: NgmyMoneyCardLayout.amountMidLeft,
  ),
  // Row 3 — Atelier Luxe
  NgmyMoneyCardTemplate(
    id: 'imperial_gold',
    label: 'Imperial Gold',
    colors: [Color(0xFF7A4E00), Color(0xFFD4AF37), Color(0xFFFFF1C1)],
    pattern: NgmyMoneyCardPattern.goldLeaf,
    layout: NgmyMoneyCardLayout.amountTopRight,
  ),
  NgmyMoneyCardTemplate(
    id: 'sterling_silver',
    label: 'Crystal Mirror',
    colors: [Color(0xFF334155), Color(0xFFE2E8F0), Color(0xFFF8FAFC)],
    pattern: NgmyMoneyCardPattern.crystalFacet,
    layout: NgmyMoneyCardLayout.amountCenter,
  ),
  NgmyMoneyCardTemplate(
    id: 'crystal_prism',
    label: 'Crystal Prism',
    colors: [Color(0xFF0EA5E9), Color(0xFFE0F2FE), Color(0xFFA78BFA)],
    pattern: NgmyMoneyCardPattern.crystalFacet,
    layout: NgmyMoneyCardLayout.amountBottomRight,
  ),
  NgmyMoneyCardTemplate(
    id: 'rose_sovereign',
    label: 'Rose Sovereign',
    colors: [Color(0xFF4C0519), Color(0xFFBE123C), Color(0xFFF9A8D4)],
    pattern: NgmyMoneyCardPattern.roseMetal,
    layout: NgmyMoneyCardLayout.amountMidLeft,
  ),
  NgmyMoneyCardTemplate(
    id: 'black_diamond',
    label: 'Black Diamond',
    colors: [Color(0xFF030712), Color(0xFF1F2937), Color(0xFFE5E7EB)],
    pattern: NgmyMoneyCardPattern.diamondNoir,
    layout: NgmyMoneyCardLayout.amountTopRight,
  ),
];
NgmyMoneyCardTemplate ngmyMoneyCardTemplateById(String? id) {
  final key = (id ?? '').trim();
  for (final t in kNgmyMoneyCardTemplates) {
    if (t.id == key) return t;
  }
  return kNgmyMoneyCardTemplates.first;
}

List<Color> ngmyMoneyCardAccent(NgmySpendingEntry entry) {
  if (entry.cardTemplateId.trim().isNotEmpty) {
    final t = ngmyMoneyCardTemplateById(entry.cardTemplateId);
    return [t.colors.first, t.colors.length > 1 ? t.colors[1] : t.colors.first];
  }
  return ngmyCreditThemeColors(entry.category);
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
    this.pauseAutoPlay = false,
    this.onFrontChanged,
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
  /// When true (e.g. alarm hold), auto-slide stays paused.
  final bool pauseAutoPlay;
  final ValueChanged<Object>? onFrontChanged;

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
    if (oldWidget.autoPlay != widget.autoPlay ||
        oldWidget.slideStyle != widget.slideStyle ||
        oldWidget.pauseAutoPlay != widget.pauseAutoPlay) {
      _scheduleAuto();
    }
    if (oldWidget.items.length == widget.items.length && identical(oldWidget.items, widget.items)) return;
    final next = List<T>.of(widget.items);
    // Newly added cards are prepended by the panel — keep that order so the new card is front.
    if (widget.items.length > oldWidget.items.length) {
      setState(() {
        _order = next;
        _resetFrontProps();
        _animCtrl.stop();
      });
      _emitFront();
      _scheduleAuto();
      return;
    }
    final idOf = widget.itemId;
    Object? frontId;
    if (_order.isNotEmpty && idOf != null) frontId = idOf(_order.first);
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

  void _emitFront() {
    final idOf = widget.itemId;
    if (idOf == null || _order.isEmpty) return;
    widget.onFrontChanged?.call(idOf(_order.first));
  }

  void _scheduleAuto() {
    _autoTimer?.cancel();
    if (!widget.autoPlay || widget.pauseAutoPlay || _order.length < 2) return;
    _autoTimer = Timer.periodic(const Duration(seconds: 10), (_) {
      if (mounted && !_autoBusy && !widget.pauseAutoPlay) _runAutoAdvance();
    });
  }

  Future<void> _runAutoAdvance() async {
    if (_order.length < 2 || _autoBusy || widget.pauseAutoPlay) return;
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
      case NgmyHomeCardSlideStyle.slideUp:
        await _animateExit(dy: -260, opacity: 0.12, scale: 0.94);
        break;
      case NgmyHomeCardSlideStyle.zoomBurst:
        await _animateExit(scale: 1.45, opacity: 0, angle: 0.08);
        break;
      case NgmyHomeCardSlideStyle.spiral:
        await _animateExit(dx: 120, dy: 180, angle: 2.4, scale: 0.45, opacity: 0.05);
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
    _emitFront();
  }

  void _bringIndexToFront(int index) {
    if (index <= 0 || index >= _order.length) return;
    setState(() {
      final picked = _order.removeAt(index);
      _order.insert(0, picked);
      _resetFrontProps();
    });
    _emitFront();
  }

  void _onVerticalDragUpdate(DragUpdateDetails d) {
    if (_autoBusy || widget.pauseAutoPlay) return;
    _animCtrl.stop();
    _exitAnimating = false;
    setState(() {
      // Only the front card moves — drag down to send it away / reveal the next card.
      _frontDrag = (_frontDrag + d.delta.dy).clamp(0.0, 200.0);
    });
  }

  void _onVerticalDragEnd(DragEndDetails d) {
    if (_autoBusy || widget.pauseAutoPlay) return;
    final vy = d.velocity.pixelsPerSecond.dy;
    if (_frontDrag > _cycleThreshold || vy > 700) {
      _animateFrontTo(260, onDone: _cycleFrontToBack);
    } else {
      _animateFrontTo(0);
    }
  }

  void _onHorizontalDragEnd(DragEndDetails d) {
    if (_autoBusy || widget.pauseAutoPlay) return;
    final vx = d.velocity.pixelsPerSecond.dx;
    if (vx.abs() < 500) return;
    if (_order.length < 2) return;
    setState(() {
      final front = _order.removeAt(0);
      _order.add(front);
      _resetFrontProps();
    });
    _emitFront();
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
        // Only the cards themselves — opaque empty space was blocking Core/Vault below.
        behavior: HitTestBehavior.deferToChild,
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
    final isLight = Theme.of(context).brightness == Brightness.light;
    return CustomPaint(
      painter: _DateTabPainter(emphasized: emphasized, lightMode: isLight),
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
            color: isLight
                ? (emphasized ? const Color(0xFF0F172A) : const Color(0xFF64748B))
                : Colors.white.withValues(alpha: emphasized ? 1.0 : 0.55),
            shadows: emphasized && !isLight
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
  _DateTabPainter({required this.emphasized, this.lightMode = false});

  final bool emphasized;
  final bool lightMode;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(14, 0)
      ..lineTo(size.width - 14, 0)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    final topA = emphasized ? (lightMode ? 0.95 : 0.55) : (lightMode ? 0.75 : 0.16);
    final botA = emphasized ? (lightMode ? 0.88 : 0.32) : (lightMode ? 0.65 : 0.08);
    final fill = Paint()
      ..shader = LinearGradient(
        begin: Alignment.topCenter,
        end: Alignment.bottomCenter,
        colors: lightMode
            ? [
                const Color(0xFFFFFFFF).withValues(alpha: topA),
                const Color(0xFFE2E8F0).withValues(alpha: botA),
              ]
            : [
                Colors.white.withValues(alpha: topA),
                Colors.white.withValues(alpha: botA),
              ],
      ).createShader(Offset.zero & size);
    if (emphasized) {
      canvas.drawShadow(path, Colors.black.withValues(alpha: lightMode ? 0.18 : 0.45), 10, true);
    }
    canvas.drawPath(path, fill);
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = emphasized ? 1.4 : 0.8
        ..color = lightMode
            ? const Color(0xFF94A3B8).withValues(alpha: emphasized ? 0.7 : 0.4)
            : Colors.white.withValues(alpha: emphasized ? 0.7 : 0.22),
    );
  }

  @override
  bool shouldRepaint(covariant _DateTabPainter oldDelegate) =>
      oldDelegate.emphasized != emphasized || oldDelegate.lightMode != lightMode;
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
    final isLight = Theme.of(context).brightness == Brightness.light;
    final glassAlpha = isLight ? (isFront ? 0.88 : 0.72) : (isFront ? 0.22 : 0.10);
    final borderAlpha = isLight ? (isFront ? 0.55 : 0.35) : (isFront ? 0.42 : 0.18);
    final blurSigma = isLight ? (isFront ? 8.0 : 4.0) : (isFront ? 28.0 : 16.0);
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
                      (isLight ? Colors.black : Colors.white).withValues(alpha: isLight ? 0.04 : 0.24),
                      (isLight ? Colors.black : Colors.white).withValues(alpha: 0.0),
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
                      BoxShadow(color: Colors.black.withValues(alpha: isLight ? 0.12 : 0.32), blurRadius: 28, offset: const Offset(0, 14)),
                      BoxShadow(color: accent[0].withValues(alpha: isLight ? 0.22 : 0.18), blurRadius: 18, offset: const Offset(0, 6)),
                    ]
                  : [
                      BoxShadow(color: Colors.black.withValues(alpha: isLight ? 0.08 : 0.18), blurRadius: 14, offset: const Offset(0, 8)),
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
                      filter: ImageFilter.blur(sigmaX: blurSigma, sigmaY: blurSigma),
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(28),
                          gradient: LinearGradient(
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                            colors: isLight
                                ? [
                                    Colors.white.withValues(alpha: glassAlpha),
                                    accent[0].withValues(alpha: isFront ? 0.14 : 0.08),
                                    accent[1].withValues(alpha: isFront ? 0.10 : 0.06),
                                    const Color(0xFFF8FAFC).withValues(alpha: 0.95),
                                  ]
                                : [
                                    Colors.white.withValues(alpha: glassAlpha),
                                    accent[0].withValues(alpha: isFront ? 0.20 : 0.10),
                                    accent[1].withValues(alpha: isFront ? 0.16 : 0.08),
                                    Colors.white.withValues(alpha: isFront ? 0.08 : 0.04),
                                  ],
                            stops: const [0.0, 0.35, 0.7, 1.0],
                          ),
                          border: Border.all(
                            color: isLight
                                ? accent[0].withValues(alpha: borderAlpha)
                                : Colors.white.withValues(alpha: borderAlpha),
                            width: isFront ? 1.5 : 1.0,
                          ),
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
    final isLight = Theme.of(context).brightness == Brightness.light;
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: isLight ? 2 : 8, sigmaY: isLight ? 2 : 8),
        child: Container(
          constraints: const BoxConstraints(maxWidth: 108),
          padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 4),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: isLight
                  ? [
                      Colors.white.withValues(alpha: 0.95),
                      const Color(0xFFE2E8F0).withValues(alpha: 0.92),
                    ]
                  : [
                      Colors.white.withValues(alpha: 0.28),
                      Colors.white.withValues(alpha: 0.10),
                    ],
            ),
            border: Border.all(color: isLight ? const Color(0xFF94A3B8) : Colors.white.withValues(alpha: 0.45)),
          ),
          child: Text(
            label,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontSize: 8.5,
              fontWeight: FontWeight.w800,
              color: isLight ? const Color(0xFF0F172A) : Colors.white.withValues(alpha: 0.95),
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
    final isLight = Theme.of(context).brightness == Brightness.light;
    return ClipRRect(
      borderRadius: BorderRadius.circular(10),
      child: BackdropFilter(
        filter: ImageFilter.blur(sigmaX: isLight ? 2 : 8, sigmaY: isLight ? 2 : 8),
        child: Container(
          constraints: const BoxConstraints(maxWidth: 112),
          padding: const EdgeInsets.fromLTRB(8, 5, 8, 5),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: isLight
                  ? [
                      Colors.white.withValues(alpha: 0.96),
                      const Color(0xFFE2E8F0).withValues(alpha: 0.94),
                    ]
                  : [
                      Colors.white.withValues(alpha: 0.30),
                      Colors.white.withValues(alpha: 0.10),
                    ],
            ),
            border: Border.all(color: isLight ? const Color(0xFF94A3B8) : Colors.white.withValues(alpha: 0.48)),
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
                  color: isLight ? const Color(0xFF64748B) : Colors.white.withValues(alpha: 0.95),
                ),
              ),
              const SizedBox(height: 1),
              Text(
                handle,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w900,
                  color: isLight ? const Color(0xFF0F172A) : Colors.white,
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
/// When [onTap] is set (admins only), tapping opens the admin dashboard.
class NgmyHomeBrandBadge extends StatefulWidget {
  const NgmyHomeBrandBadge({super.key, this.onTap});

  final VoidCallback? onTap;

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
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: widget.onTap,
              borderRadius: BorderRadius.circular(16),
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
    final isLight = Theme.of(context).brightness == Brightness.light;
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
            color: filled ? null : (isLight ? Colors.white.withValues(alpha: 0.92) : Colors.black.withValues(alpha: 0.28)),
            border: Border.all(color: isLight ? const Color(0xFF94A3B8) : Colors.white.withValues(alpha: 0.28)),
            boxShadow: filled
                ? [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.45), blurRadius: 10, offset: const Offset(0, 3))]
                : null,
          ),
          child: Icon(icon, size: 16, color: filled || !isLight ? Colors.white : const Color(0xFF0F172A)),
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
    this.civicIdRecord,
  });

  final String userEmail;
  final String? displayName;
  /// Current user's Civic Registry ID record (if enrolled) for pinning to home.
  final Map<String, dynamic>? civicIdRecord;

  @override
  State<NgmyHomeGlassCardsPanel> createState() => _NgmyHomeGlassCardsPanelState();
}

class _NgmyHomeGlassCardsPanelState extends State<NgmyHomeGlassCardsPanel> with WidgetsBindingObserver {
  _NgmyHomeCardKind _kind = _NgmyHomeCardKind.spending;
  List<NgmySpendingEntry> _spending = [];
  List<NgmyHomeNote> _notes = [];
  bool _loaded = false;
  bool _autoPlay = false;
  NgmyHomeCardSlideStyle _slideStyle = NgmyHomeCardSlideStyle.dropDown;
  String? _frontSpendingId;
  String? _frontNoteId;
  Timer? _alarmPoll;
  bool _alarmHold = false;
  String _alarmHoldTitle = '';
  String? _alarmHoldAckKey;
  Set<String> _alarmAcks = {};
  int _tapCount = 0;
  DateTime? _lastTapAt;
  String? _lastTapId;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    ngmyHomeCardsRevision.addListener(_onHomeRevision);
    _load();
    _alarmPoll = Timer.periodic(const Duration(seconds: 20), (_) => _checkDueAlarms());
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    ngmyHomeCardsRevision.removeListener(_onHomeRevision);
    _alarmPoll?.cancel();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _load();
  }

  void _onHomeRevision() {
    if (mounted) _load();
  }

  void _moveIdToFront<T>(List<T> list, Object Function(T) idOf, String? id) {
    if (id == null || id.isEmpty || list.isEmpty) return;
    final idx = list.indexWhere((e) => idOf(e) == id);
    if (idx > 0) {
      final item = list.removeAt(idx);
      list.insert(0, item);
    }
  }

  Future<List<NgmySpendingEntry>> _syncBusinessCardSnapshots(List<NgmySpendingEntry> spending) async {
    final cards = await loadNgmyBusinessCards(userEmail: widget.userEmail);
    if (cards.isEmpty) return spending;
    final byId = <String, Map<String, dynamic>>{
      for (final c in cards) (c['id'] ?? '').toString(): c,
    };
    var changed = false;
    final next = <NgmySpendingEntry>[];
    for (final e in spending) {
      if (!e.hasBusinessCard) {
        next.add(e);
        continue;
      }
      try {
        final map = jsonDecode(e.businessCardJson);
        if (map is! Map) {
          next.add(e);
          continue;
        }
        final id = (map['id'] ?? '').toString();
        final fresh = byId[id];
        if (fresh == null) {
          next.add(e);
          continue;
        }
        final encoded = jsonEncode(fresh);
        if (encoded != e.businessCardJson) {
          changed = true;
          final name = (fresh['fullName'] ?? '').toString().trim();
          next.add(e.copyWith(businessCardJson: encoded, description: name.isEmpty ? e.description : name));
        } else {
          next.add(e);
        }
      } catch (_) {
        next.add(e);
      }
    }
    if (changed) await NgmyHomeLocalStore.saveSpending(widget.userEmail, next);
    return next;
  }

  Future<void> _load() async {
    final s0 = await NgmyHomeLocalStore.loadSpending(widget.userEmail);
    final s = await _syncBusinessCardSnapshots(s0);
    final n = await NgmyHomeLocalStore.loadNotes(widget.userEmail);
    final deck = await NgmyHomeLocalStore.loadDeckPrefs(widget.userEmail);
    final acks = await NgmyHomeLocalStore.loadAlarmAcks(widget.userEmail);
    if (!mounted) return;
    s.sort((a, b) => b.date.compareTo(a.date));
    n.sort((a, b) => b.createdAt.compareTo(a.createdAt));
    _moveIdToFront(s, (e) => e.id, deck.frontSpendingId);
    _moveIdToFront(n, (e) => e.id, deck.frontNoteId);
    setState(() {
      _spending = s;
      _notes = n;
      _autoPlay = deck.autoPlay;
      _slideStyle = deck.style;
      _frontSpendingId = deck.frontSpendingId ?? (s.isNotEmpty ? s.first.id : null);
      _frontNoteId = deck.frontNoteId ?? (n.isNotEmpty ? n.first.id : null);
      _alarmAcks = acks;
      _loaded = true;
    });
    _checkDueAlarms();
  }

  Future<void> _setDeckPrefs({bool? autoPlay, NgmyHomeCardSlideStyle? style, String? frontSpendingId, String? frontNoteId}) async {
    final nextAuto = autoPlay ?? _autoPlay;
    final nextStyle = style ?? _slideStyle;
    final nextSpend = frontSpendingId ?? _frontSpendingId;
    final nextNote = frontNoteId ?? _frontNoteId;
    setState(() {
      _autoPlay = nextAuto;
      _slideStyle = nextStyle;
      _frontSpendingId = nextSpend;
      _frontNoteId = nextNote;
    });
    await NgmyHomeLocalStore.saveDeckPrefs(
      widget.userEmail,
      autoPlay: nextAuto,
      style: nextStyle,
      frontSpendingId: nextSpend,
      frontNoteId: nextNote,
    );
  }

  double get _totalSpent => _spending.where((e) => !e.hasImage && !e.isPassword).fold(0.0, (sum, e) => sum + e.amount);

  Future<void> _addSpendingEntry(NgmySpendingEntry entry) async {
    setState(() => _spending = [entry, ..._spending]);
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
    await _setDeckPrefs(frontSpendingId: entry.id);
  }

  Future<void> _deleteSpending(String id) async {
    final ok = await showNgmyRoboticDeleteConfirm(context, title: 'Remove this card?');
    if (!ok || !mounted) return;
    setState(() => _spending = _spending.where((e) => e.id != id).toList());
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
    if (_frontSpendingId == id) {
      await _setDeckPrefs(frontSpendingId: _spending.isNotEmpty ? _spending.first.id : '');
    }
  }

  Future<void> _addNote(String text) async {
    final note = NgmyHomeNote(id: DateTime.now().microsecondsSinceEpoch.toString(), text: text, createdAt: DateTime.now());
    setState(() => _notes = [note, ..._notes]);
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
    await _setDeckPrefs(frontNoteId: note.id);
  }

  Future<void> _deleteNote(String id) async {
    final ok = await showNgmyRoboticDeleteConfirm(context, title: 'Remove this note?');
    if (!ok || !mounted) return;
    setState(() => _notes = _notes.where((n) => n.id != id).toList());
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
    if (_frontNoteId == id) {
      await _setDeckPrefs(frontNoteId: _notes.isNotEmpty ? _notes.first.id : '');
    }
  }

  bool _registerTripleTap(String id) {
    final now = DateTime.now();
    if (_lastTapId != id || _lastTapAt == null || now.difference(_lastTapAt!) > const Duration(milliseconds: 450)) {
      _tapCount = 1;
    } else {
      _tapCount += 1;
    }
    _lastTapAt = now;
    _lastTapId = id;
    if (_tapCount >= 3) {
      _tapCount = 0;
      _lastTapAt = null;
      _lastTapId = null;
      return true;
    }
    return false;
  }

  Future<void> _editSpendingAmount(NgmySpendingEntry entry) async {
    if (!entry.showsCreditFace) return;
    final amountC = TextEditingController(text: entry.amount > 0 ? entry.amount.toStringAsFixed(entry.amount % 1 == 0 ? 0 : 2) : '');
    final descC = TextEditingController(text: entry.description);
    final saved = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        return AlertDialog(
          backgroundColor: isDark ? const Color(0xFF0B1220) : Colors.white,
          title: Text('Edit spending', style: TextStyle(color: isDark ? Colors.white : Colors.black87, fontWeight: FontWeight.w900)),
          content: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              TextField(
                controller: amountC,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                autofocus: true,
                style: TextStyle(color: isDark ? Colors.white : Colors.black87, fontWeight: FontWeight.w800, fontSize: 22),
                decoration: const InputDecoration(labelText: 'Amount', prefixText: '\$ '),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: descC,
                style: TextStyle(color: isDark ? Colors.white : Colors.black87),
                decoration: const InputDecoration(labelText: 'For'),
              ),
            ],
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Save')),
          ],
        );
      },
    );
    final amount = double.tryParse(amountC.text.trim()) ?? 0;
    amountC.dispose();
    final desc = descC.text.trim();
    descC.dispose();
    if (saved != true || !mounted || amount <= 0) return;
    final next = entry.copyWith(amount: amount, description: desc.isEmpty ? entry.description : desc, date: DateTime.now());
    setState(() {
      _spending = _spending.map((e) => e.id == entry.id ? next : e).toList();
    });
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
  }

  Future<void> _editNote(NgmyHomeNote note) async {
    final textC = TextEditingController(text: note.text);
    final saved = await showDialog<bool>(
      context: context,
      barrierDismissible: false,
      builder: (ctx) {
        final isDark = Theme.of(ctx).brightness == Brightness.dark;
        return AlertDialog(
          backgroundColor: isDark ? const Color(0xFF0B1220) : Colors.white,
          title: Text('Edit note', style: TextStyle(color: isDark ? Colors.white : Colors.black87, fontWeight: FontWeight.w900)),
          content: TextField(
            controller: textC,
            maxLines: 8,
            autofocus: true,
            style: TextStyle(color: isDark ? Colors.white : Colors.black87, fontWeight: FontWeight.w700, height: 1.35),
            decoration: const InputDecoration(hintText: 'Write your note…'),
          ),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Save')),
          ],
        );
      },
    );
    final text = textC.text.trim();
    textC.dispose();
    if (saved != true || !mounted || text.isEmpty) return;
    final next = note.copyWith(text: text);
    setState(() {
      _notes = _notes.map((n) => n.id == note.id ? next : n).toList();
    });
    await NgmyHomeLocalStore.saveNotes(widget.userEmail, _notes);
  }

  bool _medicineDueNow(NgmyMedicineEntry m, DateTime now) {
    if (!m.remindersEnabled) return false;
    final times = m.reminderTimes.isNotEmpty ? m.reminderTimes : ngmyDefaultMedicineReminderTimes(m.timesPerDay);
    final hm = '${now.hour.toString().padLeft(2, '0')}:${now.minute.toString().padLeft(2, '0')}';
    for (final t in times) {
      final parts = t.split(':');
      if (parts.length < 2) continue;
      final h = int.tryParse(parts[0]) ?? -1;
      final min = int.tryParse(parts[1]) ?? -1;
      if (h < 0 || min < 0) continue;
      final at = DateTime(now.year, now.month, now.day, h, min);
      final diff = now.difference(at).inMinutes.abs();
      if (diff <= 1) return true;
      if (t.trim() == hm) return true;
    }
    return false;
  }

  Future<void> _checkDueAlarms() async {
    if (!mounted || _alarmHold) return;
    final now = DateTime.now();
    final acks = _alarmAcks;

    final helperAlarms = await NgmyHelperAlarmMemoryStore.load(widget.userEmail);
    for (final a in helperAlarms) {
      final key = 'helper:${a.id}:${a.when.toIso8601String()}';
      if (acks.contains(key)) continue;
      if (a.when.isAfter(now)) continue;
      if (now.difference(a.when) > const Duration(hours: 12)) continue;
      await _triggerAlarmHold(
        ackKey: key,
        title: a.title.trim().isEmpty ? 'Alarm' : a.title.trim(),
        body: a.summaryLine,
        kind: 'Alarms',
      );
      return;
    }

    final dueItems = await ngmyDueItemReminders(userEmail: widget.userEmail);
    for (final r in dueItems) {
      final key = 'item:${r.id}';
      if (acks.contains(key)) continue;
      await _triggerAlarmHold(
        ackKey: key,
        title: r.itemName.trim().isEmpty ? 'Reminder' : r.itemName.trim(),
        body: [if (r.locationNote.trim().isNotEmpty) r.locationNote.trim(), 'Due now'].join('\n'),
        kind: 'Where I Put It',
      );
      return;
    }

    final meds = await ngmyExportMedicines(userEmail: widget.userEmail);
    for (final m in meds) {
      if (!_medicineDueNow(m, now)) continue;
      final slot = '${now.hour.toString().padLeft(2, '0')}:${now.minute.toString().padLeft(2, '0')}';
      final key = 'med:${m.id}:$slot';
      if (acks.contains(key)) continue;
      await _triggerAlarmHold(
        ackKey: key,
        title: m.name.trim().isEmpty ? 'Medicine' : m.name.trim(),
        body: [if (m.dosage.trim().isNotEmpty) m.dosage.trim(), 'Time for your medicine'].join('\n'),
        kind: 'Medicines',
      );
      return;
    }
  }

  Future<void> _triggerAlarmHold({
    required String ackKey,
    required String title,
    required String body,
    required String kind,
  }) async {
    if (!mounted) return;
    // Prefer an existing matching pin card; otherwise create one and put it first.
    var idx = _spending.indexWhere((e) {
      if (!e.hasPinnedEssentials) return false;
      final hay = '${e.description}\n${e.pinnedNoteText}\n${e.pinnedAlarmText}'.toLowerCase();
      return hay.contains(title.toLowerCase()) || (e.pinnedEssentialsKind == kind && e.pinnedNoteText.contains(body.split('\n').first));
    });
    String cardId;
    if (idx >= 0) {
      cardId = _spending[idx].id;
      final card = _spending.removeAt(idx);
      setState(() {
        _spending = [card, ..._spending];
        _kind = _NgmyHomeCardKind.spending;
        _alarmHold = true;
        _alarmHoldTitle = title;
        _alarmHoldAckKey = ackKey;
      });
    } else {
      final entry = NgmySpendingEntry(
        id: DateTime.now().microsecondsSinceEpoch.toString(),
        amount: 0,
        description: title,
        category: 'Other',
        date: DateTime.now(),
        pinnedNoteText: body,
        pinnedEssentialsKind: kind,
      );
      cardId = entry.id;
      setState(() {
        _spending = [entry, ..._spending];
        _kind = _NgmyHomeCardKind.spending;
        _alarmHold = true;
        _alarmHoldTitle = title;
        _alarmHoldAckKey = ackKey;
      });
      await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
    }
    await _setDeckPrefs(frontSpendingId: cardId);
  }

  Future<void> _confirmAlarmSeen() async {
    final key = _alarmHoldAckKey;
    if (key != null && key.isNotEmpty) {
      _alarmAcks = {..._alarmAcks, key};
      await NgmyHomeLocalStore.saveAlarmAcks(widget.userEmail, _alarmAcks);
    }
    if (!mounted) return;
    setState(() {
      _alarmHold = false;
      _alarmHoldTitle = '';
      _alarmHoldAckKey = null;
    });
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
                civicIdRecord: widget.civicIdRecord,
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
      if (kind == 'civic_id') {
        final json = result['civicIdJson'] ?? '';
        if (json.isEmpty) return;
        await _addSpendingEntry(
          NgmySpendingEntry(
            id: DateTime.now().microsecondsSinceEpoch.toString(),
            amount: 0,
            description: result['description'] ?? 'Civic Registry ID',
            category: 'Civic ID',
            date: DateTime.now(),
            civicIdJson: json,
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
            pinnedEssentialsKind: result['pinnedEssentialsKind'] ?? '',
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
          pinnedEssentialsKind: result['pinnedEssentialsKind'] ?? '',
          cardTemplateId: result['cardTemplateId'] ?? '',
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
        child: Icon(
          spending ? Icons.credit_card_rounded : Icons.sticky_note_2_rounded,
          color: Colors.white,
          size: 18,
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
        Stack(
          clipBehavior: Clip.none,
          children: [
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
              pauseAutoPlay: _alarmHold,
              onFrontChanged: (id) => _setDeckPrefs(frontSpendingId: id.toString()),
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
              cardBuilder: (ctx, entry, {required isFront, required revealDates}) {
                final card = NgmyFrostedCard(
                  dateLabel: ngmyHomeDateTabLabel(entry.date),
                  accent: entry.hasImage
                      ? const [Color(0xFF111827), Color(0xFF1F2937)]
                      : entry.hasCivicId
                          ? const [Color(0xFF0B1220), Color(0xFF1E3A5F)]
                          : entry.hasBusinessCard
                              ? const [Color(0xFF0B1220), Color(0xFF1E1B4B)]
                              : entry.isPassword
                                  ? const [Color(0xFFFBBF24), Color(0xFFEA580C)]
                                  : entry.hasPinnedEssentials && entry.amount <= 0
                                      ? const [Color(0xFF0B1220), Color(0xFF1E1B4B)]
                                      : entry.showsCreditFace
                                          ? ngmyMoneyCardAccent(entry)
                                          : const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
                  isFront: isFront,
                  showDateTab: revealDates,
                  welcomeName: isFront ? name : null,
                  onDelete: isFront ? () => _deleteSpending(entry.id) : null,
                  onAdd: isFront ? _openAddSheet : null,
                  footer: isFront && !entry.hideModePill ? _modePill() : null,
                  fillBleed: entry.hasImage ||
                      entry.showsCreditFace ||
                      entry.hasBusinessCard ||
                      entry.hasCivicId ||
                      (entry.hasPinnedEssentials && entry.amount <= 0),
                  child: _SpendingCardContent(entry: entry, totalSpent: _totalSpent),
                );
                if (!isFront || !entry.showsCreditFace) return card;
                return GestureDetector(
                  behavior: HitTestBehavior.translucent,
                  onTap: () {
                    if (_registerTripleTap(entry.id)) _editSpendingAmount(entry);
                  },
                  child: card,
                );
              },
            ),
            NgmyGlassCardStack<NgmyHomeNote>(
              key: const ValueKey('home-notes-stack'),
              height: 252,
              items: _notes,
              itemId: (n) => n.id,
              autoPlay: _autoPlay,
              slideStyle: _slideStyle,
              pauseAutoPlay: _alarmHold,
              onFrontChanged: (id) => _setDeckPrefs(frontNoteId: id.toString()),
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
              cardBuilder: (ctx, note, {required isFront, required revealDates}) {
                final card = NgmyFrostedCard(
                  dateLabel: ngmyHomeDateTabLabel(note.createdAt),
                  accent: const [Color(0xFFF59E0B), Color(0xFFEC4899)],
                  isFront: isFront,
                  showDateTab: revealDates,
                  welcomeName: isFront ? name : null,
                  onDelete: isFront ? () => _deleteNote(note.id) : null,
                  onAdd: isFront ? _openAddSheet : null,
                  footer: isFront ? _modePill() : null,
                  fillBleed: true,
                  child: _NoteCardContent(note: note, isFront: isFront),
                );
                if (!isFront) return card;
                return GestureDetector(
                  behavior: HitTestBehavior.translucent,
                  onTap: () {
                    if (_registerTripleTap('note_${note.id}')) _editNote(note);
                  },
                  child: card,
                );
              },
            ),
          ],
            ),
            if (_alarmHold)
              Positioned(
                left: 16,
                right: 16,
                bottom: 8,
                child: Material(
                  color: Colors.transparent,
                  child: Container(
                    padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      gradient: const LinearGradient(colors: [Color(0xFF0B1220), Color(0xFF1E1B4B)]),
                      border: Border.all(color: const Color(0xFF67E8F9), width: 1.4),
                      boxShadow: [BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.35), blurRadius: 18)],
                    ),
                    child: Row(
                      children: [
                        const Icon(Icons.alarm_on_rounded, color: Color(0xFF67E8F9), size: 22),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(
                            _alarmHoldTitle.isEmpty ? 'Alarm due — confirm to resume slides' : '$_alarmHoldTitle · confirm seen',
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5),
                          ),
                        ),
                        const SizedBox(width: 8),
                        FilledButton(
                          onPressed: _confirmAlarmSeen,
                          style: FilledButton.styleFrom(
                            backgroundColor: const Color(0xFF22D3EE),
                            foregroundColor: const Color(0xFF0B1220),
                            minimumSize: const Size(0, 40),
                            padding: const EdgeInsets.symmetric(horizontal: 14),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                          ),
                          child: const Text('Seen', style: TextStyle(fontWeight: FontWeight.w900)),
                        ),
                      ],
                    ),
                  ),
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
    if (entry.hasCivicId) {
      return _CivicIdCardBody(json: entry.civicIdJson);
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
    if (doc == null) {
      return const ColoredBox(
        color: Color(0xFF0B1220),
        child: Center(child: Text('Business card unavailable', style: TextStyle(color: Colors.white70))),
      );
    }
    return LayoutBuilder(
      builder: (context, c) {
        final w = c.maxWidth;
        final cardH = w / kNgmyBusinessCardAspect;
        final scale = math.max(1.0, c.maxHeight / cardH);
        return ColoredBox(
          color: const Color(0xFF0B1220),
          child: ClipRect(
            child: OverflowBox(
              maxWidth: w * scale,
              maxHeight: cardH * scale,
              alignment: Alignment.center,
              child: Transform.scale(
                scale: scale,
                child: NgmyBusinessCardPreview(document: doc!, width: w, interactive: false),
              ),
            ),
          ),
        );
      },
    );
  }
}

class _CivicIdCardBody extends StatelessWidget {
  const _CivicIdCardBody({required this.json});

  final String json;

  @override
  Widget build(BuildContext context) {
    Map<String, dynamic>? record;
    try {
      final map = jsonDecode(json);
      if (map is Map) record = Map<String, dynamic>.from(map);
    } catch (_) {}
    if (record == null) {
      return const ColoredBox(
        color: Color(0xFF0B1220),
        child: Center(child: Text('Civic ID unavailable', style: TextStyle(color: Colors.white70))),
      );
    }
    final photo = (record['idPhotoPath'] ?? '').toString();
    return LayoutBuilder(
      builder: (context, c) {
        const designW = 360.0;
        final scale = math.max(c.maxWidth / designW, c.maxHeight / 230);
        return ColoredBox(
          color: const Color(0xFF0B1220),
          child: ClipRect(
            child: OverflowBox(
              maxWidth: designW * scale,
              maxHeight: 260 * scale,
              alignment: Alignment.center,
              child: Transform.scale(
                scale: scale,
                child: SizedBox(
                  width: designW,
                  child: NgmyCivicRegistryIdCard(
                    record: record!,
                    photoPath: photo.isEmpty ? null : photo,
                    scale: 1,
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
    final kind = entry.pinnedEssentialsKind.trim().isEmpty
        ? (entry.pinnedAlarmText.trim().isNotEmpty ? 'Alarms' : 'Notes')
        : entry.pinnedEssentialsKind.trim();
    final title = entry.description.trim().isEmpty ? kind : entry.description.trim();
    final body = entry.pinnedNoteText.trim().isNotEmpty
        ? entry.pinnedNoteText.trim()
        : entry.pinnedAlarmText.trim();
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF0B1220), Color(0xFF1E1B4B), Color(0xFF0F172A)],
        ),
      ),
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 54, 16, 18),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(999),
                gradient: const LinearGradient(colors: [Color(0xFF22D3EE), Color(0xFF8B5CF6)]),
              ),
              child: Text(
                kind.toUpperCase(),
                style: const TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: Colors.white),
              ),
            ),
            const Spacer(),
            Text(
              title,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18, height: 1.2),
            ),
            if (body.isNotEmpty) ...[
              const SizedBox(height: 10),
              Text(
                body,
                maxLines: 5,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontWeight: FontWeight.w600, fontSize: 13, height: 1.35),
              ),
            ],
            if (entry.note.trim().isNotEmpty) ...[
              const SizedBox(height: 8),
              Text(
                entry.note,
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontWeight: FontWeight.w600, fontSize: 12),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _CreditCardSpendBody extends StatelessWidget {
  const _CreditCardSpendBody({required this.entry, required this.totalSpent});

  final NgmySpendingEntry entry;
  final double totalSpent;

  @override
  Widget build(BuildContext context) {
    final tpl = ngmyMoneyCardTemplateById(entry.cardTemplateId);
    final colors = tpl.colors;
    final cardNote = entry.note.trim();
    final desc = entry.description.isEmpty ? 'Expense' : entry.description;
    final amount = '-\$${entry.amount.toStringAsFixed(2)}';
    final total = 'TOTAL  -\$${totalSpent.toStringAsFixed(2)}';
    final day = ngmyHomeDateTabLabel(entry.date).split(',').first;
    final catIcon = _kSpendingCategories[entry.category] ?? Icons.credit_card_rounded;
    final ink = _luxeInkFor(tpl);

    return Stack(
      fit: StackFit.expand,
      children: [
        DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: colors.length >= 3
                  ? [colors[0], colors[1], colors[2].withValues(alpha: 0.95)]
                  : [colors.first, colors.last.withValues(alpha: 0.92)],
            ),
          ),
        ),
        Positioned.fill(child: CustomPaint(painter: _MoneyCardPatternPainter(template: tpl))),
        ..._luxeDecor(tpl, colors),
        Padding(
          padding: const EdgeInsets.fromLTRB(16, 54, 16, 18),
          child: _luxeLayout(
            tpl: tpl,
            ink: ink,
            catIcon: catIcon,
            category: entry.category.toUpperCase(),
            desc: desc,
            amount: amount,
            total: total,
            day: day,
            cardNote: cardNote,
          ),
        ),
      ],
    );
  }

  Color _luxeInkFor(NgmyMoneyCardTemplate tpl) {
    switch (tpl.id) {
      case 'midnight_gold':
      case 'imperial_gold':
        return const Color(0xFF1C1408);
      case 'royal_violet':
      case 'ocean_platinum':
      case 'marble_ink':
      case 'sterling_silver':
      case 'crystal_prism':
        return const Color(0xFF0F172A);
      case 'obsidian_steel':
      case 'carbon_noir':
      case 'emerald_luxe':
      case 'mesh_sapphire':
      case 'black_diamond':
      case 'champagne_noir':
      case 'aurora_vault':
      case 'rose_sovereign':
        return Colors.white;
      default:
        return Colors.white;
    }
  }

  List<Widget> _luxeDecor(NgmyMoneyCardTemplate tpl, List<Color> colors) {
    switch (tpl.id) {
      case 'midnight_gold':
        return [
          Positioned(left: 16, right: 16, top: 52, child: Container(height: 1.2, color: colors.last.withValues(alpha: 0.55))),
          Positioned(left: 16, right: 16, top: 56, child: Container(height: 0.6, color: colors.last.withValues(alpha: 0.28))),
          Positioned(right: 18, bottom: 22, child: Container(width: 40, height: 28, decoration: BoxDecoration(borderRadius: BorderRadius.circular(5), gradient: LinearGradient(colors: [Color(0xFFFFF1C1), colors[1], Color(0xFF7A4E00)]), border: Border.all(color: Colors.white.withValues(alpha: 0.5))))),
        ];
      case 'obsidian_steel':
        return [
          Positioned(left: 14, top: 54, bottom: 18, child: Container(width: 2, color: Colors.white.withValues(alpha: 0.22))),
          Positioned(right: 14, top: 54, bottom: 18, child: Container(width: 1, color: Colors.white.withValues(alpha: 0.12))),
          Positioned(right: 20, top: 58, child: Container(width: 28, height: 28, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white.withValues(alpha: 0.35), width: 1.2)))),
        ];
      case 'champagne_noir':
        return [
          Positioned(left: 18, top: 58, child: Container(width: 48, height: 1, color: Colors.white.withValues(alpha: 0.35))),
          Positioned(right: -20, bottom: -30, child: Icon(Icons.favorite_rounded, size: 120, color: Colors.white.withValues(alpha: 0.07))),
          Positioned(right: 16, top: 56, child: Container(width: 36, height: 24, decoration: BoxDecoration(borderRadius: BorderRadius.circular(4), gradient: LinearGradient(colors: [Color(0xFFFCE7F3), colors.last.withValues(alpha: 0.5)]), border: Border.all(color: Colors.white38)))),
        ];
      case 'royal_violet':
        return [
          Positioned(right: 14, top: 54, child: Transform.rotate(angle: 0.2, child: Container(width: 52, height: 52, decoration: BoxDecoration(border: Border.all(color: colors[1].withValues(alpha: 0.55), width: 1.4), borderRadius: BorderRadius.circular(8))))),
          Positioned(left: 16, bottom: 20, child: Container(width: 34, height: 24, decoration: BoxDecoration(borderRadius: BorderRadius.circular(4), color: Colors.white.withValues(alpha: 0.55), border: Border.all(color: colors[0].withValues(alpha: 0.25))))),
        ];
      case 'ocean_platinum':
        return [
          Positioned(left: 0, right: 0, bottom: 52, child: Container(height: 36, decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0.0), Colors.white.withValues(alpha: 0.22), Colors.white.withValues(alpha: 0.0)])))),
          Positioned(left: 16, top: 56, child: Container(width: 38, height: 26, decoration: BoxDecoration(borderRadius: BorderRadius.circular(6), gradient: LinearGradient(colors: [Colors.white, Color(0xFFBAE6FD)]), border: Border.all(color: Colors.white70)))),
        ];
      case 'carbon_noir':
        return [
          Positioned(left: 16, right: 16, top: 70, child: Container(height: 1, color: Colors.white.withValues(alpha: 0.14))),
          Positioned(left: 16, right: 16, bottom: 48, child: Container(height: 1, color: Colors.white.withValues(alpha: 0.14))),
          Positioned(right: 16, top: 56, child: Row(children: [Container(width: 8, height: 8, decoration: BoxDecoration(color: colors.last.withValues(alpha: 0.7), shape: BoxShape.circle)), SizedBox(width: 4), Container(width: 8, height: 8, decoration: BoxDecoration(border: Border.all(color: Colors.white38), shape: BoxShape.circle))])),
        ];
      case 'emerald_luxe':
        return [
          Positioned(left: 16, top: 54, child: Container(padding: EdgeInsets.symmetric(horizontal: 8, vertical: 3), decoration: BoxDecoration(borderRadius: BorderRadius.circular(999), border: Border.all(color: colors.last.withValues(alpha: 0.55)), color: Colors.black.withValues(alpha: 0.2)), child: Text('EMERALD', style: TextStyle(color: colors.last, fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 1.2)))),
          Positioned(right: -12, bottom: -18, child: Icon(Icons.eco_rounded, size: 110, color: Colors.white.withValues(alpha: 0.08))),
        ];
      case 'marble_ink':
        return [
          Positioned(left: 20, right: 20, top: 60, child: Container(height: 0.8, color: colors[0].withValues(alpha: 0.25))),
          Positioned(left: 20, right: 20, bottom: 56, child: Container(height: 0.8, color: colors[0].withValues(alpha: 0.2))),
          Positioned(right: 18, bottom: 20, child: Icon(Icons.ac_unit_rounded, size: 28, color: colors[0].withValues(alpha: 0.35))),
        ];
      case 'aurora_vault':
        return [
          Positioned(left: -30, top: 40, child: Container(width: 120, height: 120, decoration: BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [colors.last.withValues(alpha: 0.28), Colors.transparent])))),
          Positioned(right: 14, top: 56, bottom: 18, child: Container(width: 1.5, color: Colors.white.withValues(alpha: 0.28))),
        ];
      case 'mesh_sapphire':
        return [
          Positioned(right: 18, top: 58, child: Container(width: 44, height: 44, alignment: Alignment.center, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: colors.last.withValues(alpha: 0.45), width: 1.5), gradient: RadialGradient(colors: [colors.last.withValues(alpha: 0.2), Colors.transparent])), child: Text('N', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w900, fontSize: 16)))),
          Positioned(left: 16, bottom: 18, right: 70, child: Container(height: 1, color: Colors.white.withValues(alpha: 0.2))),
        ];
      case 'imperial_gold':
        return [
          Positioned(left: 12, right: 12, top: 50, child: Container(height: 28, decoration: BoxDecoration(borderRadius: BorderRadius.circular(6), gradient: LinearGradient(colors: [colors.last.withValues(alpha: 0.55), colors[1].withValues(alpha: 0.35), colors.last.withValues(alpha: 0.15)]), border: Border.all(color: colors.last.withValues(alpha: 0.45))))),
          Positioned(left: 18, bottom: 20, child: Container(width: 36, height: 26, decoration: BoxDecoration(borderRadius: BorderRadius.circular(4), gradient: LinearGradient(colors: [Color(0xFFFFF7D6), colors[1]]), border: Border.all(color: Color(0xFF7A4E00).withValues(alpha: 0.35))))),
        ];
      case 'sterling_silver':
        return [
          Positioned(left: 14, top: 54, bottom: 16, child: Container(width: 1.2, color: colors[0].withValues(alpha: 0.35))),
          Positioned(left: 18, top: 54, bottom: 16, child: Container(width: 0.6, color: colors[0].withValues(alpha: 0.18))),
          Positioned(right: 16, top: 56, child: Container(width: 32, height: 22, decoration: BoxDecoration(borderRadius: BorderRadius.circular(3), gradient: LinearGradient(colors: [Colors.white, Color(0xFFCBD5E1)]), border: Border.all(color: colors[0].withValues(alpha: 0.3))))),
        ];
      case 'crystal_prism':
        return [
          Positioned(right: 12, bottom: 14, child: Container(width: 110, height: 54, decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border: Border.all(color: colors[0].withValues(alpha: 0.35), width: 1.3), color: Colors.white.withValues(alpha: 0.28)))),
          Positioned(left: 16, top: 56, child: Transform.rotate(angle: -0.15, child: Container(width: 38, height: 26, decoration: BoxDecoration(borderRadius: BorderRadius.circular(5), gradient: LinearGradient(colors: [Colors.white, Color(0xFFBAE6FD), colors.last.withValues(alpha: 0.5)]), border: Border.all(color: Colors.white70))))),
        ];
      case 'rose_sovereign':
        return [
          Positioned(right: 0, top: 48, bottom: 0, width: 72, child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Colors.transparent, Colors.black.withValues(alpha: 0.18)])))),
          Positioned(right: 16, top: 58, child: Container(width: 34, height: 24, decoration: BoxDecoration(borderRadius: BorderRadius.circular(5), gradient: LinearGradient(colors: [Color(0xFFFCE7F3), colors.last]), border: Border.all(color: Colors.white38)))),
        ];
      case 'black_diamond':
        return [
          Positioned(left: 16, right: 16, top: 72, child: Column(children: [Container(height: 1, color: Colors.white.withValues(alpha: 0.35)), SizedBox(height: 3), Container(height: 0.7, color: Colors.white.withValues(alpha: 0.18))])),
          Positioned(right: 18, bottom: 20, child: Icon(Icons.diamond_rounded, size: 22, color: Colors.white.withValues(alpha: 0.45))),
        ];
      default:
        return [];
    }
  }

  Widget _luxeLayout({
    required NgmyMoneyCardTemplate tpl,
    required Color ink,
    required IconData catIcon,
    required String category,
    required String desc,
    required String amount,
    required String total,
    required String day,
    required String cardNote,
  }) {
    final soft = ink.withValues(alpha: 0.75);
    final muted = ink.withValues(alpha: 0.55);
    Widget note() => cardNote.isEmpty
        ? const SizedBox.shrink()
        : Padding(
            padding: const EdgeInsets.only(top: 5),
            child: Text(cardNote, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w600, color: soft)),
          );

    switch (tpl.id) {
      // Amount top-right under double gold rules
      case 'midnight_gold':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const SizedBox(height: 10),
          Row(children: [
            Expanded(child: Text('MIDNIGHT SERIES', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.6, color: muted))),
            Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 0.4)),
          ]),
          const SizedBox(height: 4),
          Align(alignment: Alignment.centerRight, child: Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted))),
          const Spacer(),
          Row(children: [Icon(catIcon, size: 14, color: soft), const SizedBox(width: 6), Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: soft))]),
          const SizedBox(height: 8),
          Text(desc, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15)),
          const SizedBox(height: 6),
          Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
          note(),
        ]);

      // Vertical monolith — huge amount left, meta right
      case 'obsidian_steel':
        return Row(children: [
          const SizedBox(width: 10),
          Expanded(flex: 6, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('OBSIDIAN', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 2.0, color: muted)),
            const Spacer(),
            Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 32, height: 0.95, letterSpacing: 0.6)),
            const SizedBox(height: 8),
            Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: soft, fontWeight: FontWeight.w700, fontSize: 13)),
            note(),
          ])),
          Expanded(flex: 4, child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Icon(catIcon, size: 18, color: soft),
            const SizedBox(height: 6),
            Text(category, textAlign: TextAlign.right, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft)),
            const Spacer(),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
            const SizedBox(height: 4),
            Text(total, textAlign: TextAlign.right, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: soft)),
          ])),
        ]);

      // Script stack — desc top, hairline, amount bottom-left
      case 'champagne_noir':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Icon(catIcon, size: 14, color: soft),
            const SizedBox(width: 6),
            Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.2, color: soft)),
            const Spacer(),
            Text('ROSE', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.8, color: muted)),
          ]),
          const SizedBox(height: 14),
          Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 17, height: 1.2, fontStyle: FontStyle.italic)),
          const SizedBox(height: 10),
          Container(width: 42, height: 1, color: Colors.white.withValues(alpha: 0.35)),
          const Spacer(),
          Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: 0.3)),
          const SizedBox(height: 6),
          Row(children: [
            Expanded(child: Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft))),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          note(),
        ]);

      // Facet frame — amount inside bottom-right bordered panel
      case 'royal_violet':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('CRYSTAL VIOLET', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.5, color: muted)),
          const SizedBox(height: 10),
          Row(children: [Icon(catIcon, size: 15, color: soft), const SizedBox(width: 6), Text(category, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: soft))]),
          const SizedBox(height: 10),
          Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15)),
          const Spacer(),
          Align(
            alignment: Alignment.bottomRight,
            child: Container(
              padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
              decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), border: Border.all(color: ink.withValues(alpha: 0.22)), color: Colors.white.withValues(alpha: 0.35)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
                Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 22)),
                Text(day, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, color: muted)),
              ]),
            ),
          ),
          const SizedBox(height: 6),
          Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
          note(),
        ]);

      // Tide bar — amount sits on a frosted horizontal band
      case 'ocean_platinum':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Text('CRYSTAL TIDE', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.5, color: muted)),
            const Spacer(),
            Icon(catIcon, size: 16, color: soft),
          ]),
          const SizedBox(height: 8),
          Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: soft)),
          const SizedBox(height: 8),
          Text(desc, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15)),
          const Spacer(),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), color: Colors.white.withValues(alpha: 0.42), border: Border.all(color: Colors.white.withValues(alpha: 0.55))),
            child: Row(children: [
              Expanded(child: Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 24))),
              Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
            ]),
          ),
          const SizedBox(height: 8),
          Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
          note(),
        ]);

      // Tech ledger — amount top-left, monospace feel, double rules
      case 'carbon_noir':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Text('CARBON // NGMY', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: muted)),
            const Spacer(),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          const SizedBox(height: 14),
          Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 28, letterSpacing: 1.2, fontFamily: 'monospace')),
          const SizedBox(height: 6),
          Text(desc.toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: soft, fontWeight: FontWeight.w800, fontSize: 12, letterSpacing: 1.0)),
          const Spacer(),
          Row(children: [
            Icon(catIcon, size: 14, color: soft),
            const SizedBox(width: 6),
            Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft)),
            const Spacer(),
            Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
          ]),
          note(),
        ]);

      // Emerald pill — amount in a glowing pill mid-card
      case 'emerald_luxe':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const SizedBox(height: 18),
          Row(children: [
            Icon(catIcon, size: 14, color: soft),
            const SizedBox(width: 6),
            Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: soft)),
            const Spacer(),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          const Spacer(),
          Center(
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(999),
                gradient: LinearGradient(colors: [const Color(0xFF34D399).withValues(alpha: 0.35), const Color(0xFF065F46).withValues(alpha: 0.55)]),
                border: Border.all(color: const Color(0xFF6EE7B7).withValues(alpha: 0.65)),
                boxShadow: [BoxShadow(color: const Color(0xFF34D399).withValues(alpha: 0.35), blurRadius: 16)],
              ),
              child: Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 24, letterSpacing: 0.5)),
            ),
          ),
          const Spacer(),
          Text(desc, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 14)),
          const SizedBox(height: 4),
          Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
          note(),
        ]);

      // Frost center — huge centered amount between thin rules
      case 'marble_ink':
        return Column(children: [
          Row(children: [
            Icon(catIcon, size: 14, color: soft),
            const SizedBox(width: 6),
            Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft)),
            const Spacer(),
            Text('FROST', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.8, color: muted)),
          ]),
          const Spacer(),
          Text(amount, textAlign: TextAlign.center, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 34, letterSpacing: 1.0, height: 1)),
          const SizedBox(height: 8),
          Text(desc, textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: soft, fontWeight: FontWeight.w700, fontSize: 13)),
          const Spacer(),
          Row(children: [
            Expanded(child: Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft))),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          note(),
        ]);

      // Aurora fan — amount on right rail
      case 'aurora_vault':
        return Row(children: [
          Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('ROSE AURORA', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.5, color: muted)),
            const SizedBox(height: 10),
            Row(children: [Icon(catIcon, size: 14, color: soft), const SizedBox(width: 6), Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft))]),
            const SizedBox(height: 12),
            Text(desc, maxLines: 3, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15, height: 1.25)),
            const Spacer(),
            Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
            note(),
          ])),
          const SizedBox(width: 12),
          SizedBox(
            width: 96,
            child: Column(crossAxisAlignment: CrossAxisAlignment.end, mainAxisAlignment: MainAxisAlignment.center, children: [
              Text(amount, textAlign: TextAlign.right, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 22, height: 1.05)),
              const SizedBox(height: 8),
              Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
            ]),
          ),
        ]);

      // Seal stamp — circular amount badge top-right
      case 'mesh_sapphire':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('SAPPHIRE SEAL', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: muted)),
              const SizedBox(height: 8),
              Row(children: [Icon(catIcon, size: 14, color: soft), const SizedBox(width: 6), Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft))]),
            ])),
            const SizedBox(width: 56),
          ]),
          const Spacer(),
          Text(desc, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15)),
          const SizedBox(height: 10),
          Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: 0.4)),
          const SizedBox(height: 6),
          Row(children: [
            Expanded(child: Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft))),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          note(),
        ]);

      // Imperial banner — amount inside top gold ribbon
      case 'imperial_gold':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const SizedBox(height: 4),
          SizedBox(
            height: 28,
            child: Align(
              alignment: Alignment.center,
              child: Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 0.8)),
            ),
          ),
          const SizedBox(height: 12),
          Row(children: [
            Icon(catIcon, size: 14, color: soft),
            const SizedBox(width: 6),
            Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: soft)),
            const Spacer(),
            Text('IMPERIAL', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.5, color: muted)),
          ]),
          const Spacer(),
          Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 16)),
          const SizedBox(height: 8),
          Row(children: [
            Expanded(child: Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft))),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          note(),
        ]);

      // Mirror split — left copy, right amount column with rail
      case 'sterling_silver':
        return Row(children: [
          const SizedBox(width: 8),
          Expanded(flex: 6, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('CRYSTAL MIRROR', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: muted)),
            const SizedBox(height: 10),
            Row(children: [Icon(catIcon, size: 14, color: soft), const SizedBox(width: 6), Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft))]),
            const Spacer(),
            Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 15)),
            const SizedBox(height: 8),
            Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
            note(),
          ])),
          Expanded(flex: 4, child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            const Spacer(),
            Text(amount, textAlign: TextAlign.right, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 22, height: 1.05)),
            const SizedBox(height: 8),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
            const Spacer(),
            Text('NGMY', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.8, color: muted)),
          ])),
        ]);

      // Prism panel — amount in frosted bottom-right plate
      case 'crystal_prism':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('PRISM ATELIER', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.5, color: muted)),
          const SizedBox(height: 10),
          Row(children: [Icon(catIcon, size: 15, color: soft), const SizedBox(width: 6), Text(category, style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, color: soft))]),
          const SizedBox(height: 10),
          Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 16, height: 1.2)),
          const Spacer(),
          Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
              Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
              note(),
            ])),
            Padding(
              padding: const EdgeInsets.only(right: 8, bottom: 4),
              child: Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 24)),
            ),
          ]),
        ]);

      // Rose rail — amount mid-left, dark rail right with meta
      case 'rose_sovereign':
        return Row(children: [
          Expanded(flex: 7, child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('ROSE SOVEREIGN', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.4, color: muted)),
            const Spacer(flex: 2),
            Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 30, height: 1, letterSpacing: 0.3)),
            const SizedBox(height: 10),
            Text(desc, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 14)),
            const Spacer(),
            Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
            note(),
          ])),
          const SizedBox(width: 8),
          SizedBox(width: 64, child: Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Icon(catIcon, size: 18, color: soft),
            const SizedBox(height: 6),
            Text(category, textAlign: TextAlign.right, style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, color: soft)),
            const Spacer(),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
            const SizedBox(height: 4),
            Text('NGMY', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1.5, color: muted)),
          ])),
        ]);

      // Noir ledger — amount under double rule at top
      case 'black_diamond':
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Text('BLACK DIAMOND', style: TextStyle(fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 1.6, color: muted)),
            const Spacer(),
            Icon(catIcon, size: 14, color: soft),
          ]),
          const SizedBox(height: 16),
          Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 28, letterSpacing: 0.8)),
          const SizedBox(height: 6),
          Text(desc.toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: soft, fontWeight: FontWeight.w800, fontSize: 12, letterSpacing: 1.1)),
          const Spacer(),
          Row(children: [
            Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.1, color: soft)),
            const Spacer(),
            Text(day, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: muted)),
          ]),
          const SizedBox(height: 4),
          Text(total, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, color: soft)),
          note(),
        ]);

      default:
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(category, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, color: soft)),
          const Spacer(),
          Text(desc, style: TextStyle(color: ink, fontWeight: FontWeight.w800, fontSize: 14)),
          Text(amount, style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 22)),
          Text(total, style: TextStyle(fontSize: 10, color: soft)),
        ]);
    }
  }
}
class _MoneyCardPatternPainter extends CustomPainter {
  _MoneyCardPatternPainter({required this.template});

  final NgmyMoneyCardTemplate template;

  @override
  void paint(Canvas canvas, Size size) {
    final c = template.colors;
    final accent = c.length > 2 ? c[2] : c.last;
    switch (template.pattern) {
      case NgmyMoneyCardPattern.diagonal:
        final p = Paint()..color = accent.withValues(alpha: 0.12);
        for (var i = -4; i < 14; i++) {
          final path = Path()
            ..moveTo(i * 36.0, 0)
            ..lineTo(i * 36.0 + 18, 0)
            ..lineTo(i * 36.0 - 40, size.height)
            ..lineTo(i * 36.0 - 58, size.height)
            ..close();
          canvas.drawPath(path, p);
        }
        break;
      case NgmyMoneyCardPattern.carbon:
        final p = Paint()..color = Colors.white.withValues(alpha: 0.04);
        for (var y = 0.0; y < size.height; y += 7) {
          for (var x = (y ~/ 7).isEven ? 0.0 : 3.5; x < size.width; x += 7) {
            canvas.drawCircle(Offset(x, y), 1.1, p);
          }
        }
        break;
      case NgmyMoneyCardPattern.marbleVein:
        final p = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.4
          ..color = accent.withValues(alpha: 0.22);
        for (var i = 0; i < 5; i++) {
          final path = Path()..moveTo(-10, size.height * (0.15 + i * 0.16));
          path.cubicTo(size.width * 0.25, size.height * (0.05 + i * 0.18), size.width * 0.55, size.height * (0.35 + i * 0.1), size.width + 10, size.height * (0.2 + i * 0.14));
          canvas.drawPath(path, p);
        }
        break;
      case NgmyMoneyCardPattern.nightGold:
      case NgmyMoneyCardPattern.champagne:
        final glow = Paint()
          ..shader = RadialGradient(
            center: const Alignment(0.75, -0.55),
            radius: 1.1,
            colors: [accent.withValues(alpha: 0.38), accent.withValues(alpha: 0.0)],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, glow);
        final line = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1
          ..color = accent.withValues(alpha: 0.28);
        canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(12, 12, size.width - 24, size.height - 24), const Radius.circular(18)), line);
        break;
      case NgmyMoneyCardPattern.oceanDepth:
        final wave = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.6
          ..color = accent.withValues(alpha: 0.2);
        for (var i = 0; i < 4; i++) {
          final path = Path()..moveTo(0, size.height * (0.45 + i * 0.12));
          for (var x = 0.0; x <= size.width; x += 18) {
            path.quadraticBezierTo(x + 9, size.height * (0.45 + i * 0.12) + (i.isEven ? -8 : 8), x + 18, size.height * (0.45 + i * 0.12));
          }
          canvas.drawPath(path, wave);
        }
        break;
      case NgmyMoneyCardPattern.obsidian:
        final edge = Paint()
          ..shader = LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [Colors.white.withValues(alpha: 0.14), Colors.transparent, accent.withValues(alpha: 0.18)],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, edge);
        break;
      case NgmyMoneyCardPattern.aurora:
        final a = Paint()
          ..shader = SweepGradient(
            center: Alignment.center,
            colors: [
              accent.withValues(alpha: 0.0),
              accent.withValues(alpha: 0.22),
              const Color(0xFFA78BFA).withValues(alpha: 0.18),
              accent.withValues(alpha: 0.0),
            ],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, a);
        break;
      case NgmyMoneyCardPattern.mesh:
        final p = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 0.8
          ..color = accent.withValues(alpha: 0.16);
        for (var x = 0.0; x < size.width; x += 16) {
          canvas.drawLine(Offset(x, 0), Offset(x, size.height), p);
        }
        for (var y = 0.0; y < size.height; y += 16) {
          canvas.drawLine(Offset(0, y), Offset(size.width, y), p);
        }
        break;
      case NgmyMoneyCardPattern.luxeGradient:
        final sheen = Paint()
          ..shader = LinearGradient(
            begin: Alignment.topRight,
            end: Alignment.bottomLeft,
            colors: [Colors.white.withValues(alpha: 0.16), Colors.transparent, accent.withValues(alpha: 0.12)],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, sheen);
        break;
      case NgmyMoneyCardPattern.goldLeaf:
        final imperial = template.id == 'imperial_gold';
        final foil = Paint()
          ..shader = LinearGradient(
            begin: imperial ? Alignment.topCenter : Alignment.topLeft,
            end: imperial ? Alignment.bottomCenter : Alignment.bottomRight,
            colors: imperial
                ? [
                    const Color(0xFFFFF1C1).withValues(alpha: 0.65),
                    accent.withValues(alpha: 0.15),
                    const Color(0xFF7A4E00).withValues(alpha: 0.35),
                  ]
                : [
                    const Color(0xFFFFF7D6).withValues(alpha: 0.55),
                    accent.withValues(alpha: 0.0),
                    const Color(0xFFB45309).withValues(alpha: 0.28),
                    const Color(0xFFFFF1C1).withValues(alpha: 0.35),
                  ],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, foil);
        final vein = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = imperial ? 1.6 : 1.2
          ..color = const Color(0xFF7A4E00).withValues(alpha: 0.28);
        if (imperial) {
          for (var i = 0; i < 5; i++) {
            canvas.drawLine(Offset(16, size.height * (0.35 + i * 0.1)), Offset(size.width - 16, size.height * (0.35 + i * 0.1)), vein);
          }
        } else {
          for (var i = 0; i < 6; i++) {
            final path = Path()..moveTo(size.width * (0.05 + i * 0.14), -4);
            path.cubicTo(
              size.width * (0.2 + i * 0.1),
              size.height * 0.35,
              size.width * (0.1 + i * 0.12),
              size.height * 0.7,
              size.width * (0.25 + i * 0.08),
              size.height + 4,
            );
            canvas.drawPath(path, vein);
          }
        }
        final rim = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.4
          ..color = const Color(0xFFFFF1C1).withValues(alpha: 0.45);
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(10, 10, size.width - 20, size.height - 20), const Radius.circular(16)),
          rim,
        );
        break;
      case NgmyMoneyCardPattern.silverBrushed:
        for (var y = 0.0; y < size.height; y += 3) {
          final p = Paint()
            ..strokeWidth = 1
            ..color = Colors.white.withValues(alpha: y % 6 == 0 ? 0.18 : 0.06);
          canvas.drawLine(Offset(0, y), Offset(size.width, y + 0.8), p);
        }
        final gloss = Paint()
          ..shader = LinearGradient(
            begin: Alignment.centerLeft,
            end: Alignment.centerRight,
            colors: [
              Colors.white.withValues(alpha: 0.0),
              Colors.white.withValues(alpha: 0.28),
              Colors.white.withValues(alpha: 0.0),
            ],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, gloss);
        final rim = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = Colors.white.withValues(alpha: 0.4);
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(12, 12, size.width - 24, size.height - 24), const Radius.circular(14)),
          rim,
        );
        break;
      case NgmyMoneyCardPattern.crystalFacet:
        // Unique facet geometry per crystal card — not the same cut twice.
        final id = template.id;
        late final List<List<Offset>> facets;
        if (id == 'royal_violet') {
          facets = [
            [Offset(size.width * 0.55, 0), Offset(size.width, size.height * 0.2), Offset(size.width * 0.75, size.height * 0.55)],
            [Offset(0, size.height * 0.15), Offset(size.width * 0.35, size.height * 0.4), Offset(0, size.height * 0.55)],
            [Offset(size.width * 0.1, size.height), Offset(size.width * 0.45, size.height * 0.6), Offset(size.width * 0.2, size.height * 0.35)],
          ];
        } else if (id == 'ocean_platinum') {
          facets = [
            [Offset(0, size.height * 0.55), Offset(size.width * 0.4, size.height * 0.4), Offset(size.width * 0.35, size.height)],
            [Offset(size.width * 0.5, size.height * 0.5), Offset(size.width, size.height * 0.35), Offset(size.width, size.height * 0.7)],
            [Offset(size.width * 0.2, 0), Offset(size.width * 0.55, size.height * 0.25), Offset(size.width * 0.05, size.height * 0.3)],
          ];
        } else if (id == 'marble_ink') {
          facets = [
            [Offset(size.width * 0.3, 0), Offset(size.width * 0.7, 0), Offset(size.width * 0.5, size.height * 0.45)],
            [Offset(0, size.height * 0.7), Offset(size.width * 0.35, size.height * 0.45), Offset(size.width * 0.15, size.height)],
            [Offset(size.width, size.height * 0.65), Offset(size.width * 0.65, size.height * 0.4), Offset(size.width * 0.85, size.height)],
          ];
        } else if (id == 'sterling_silver') {
          facets = [
            [Offset(0, 0), Offset(size.width * 0.4, 0), Offset(0, size.height * 0.5)],
            [Offset(size.width, 0), Offset(size.width * 0.6, 0), Offset(size.width, size.height * 0.5)],
            [Offset(size.width * 0.25, size.height), Offset(size.width * 0.75, size.height), Offset(size.width * 0.5, size.height * 0.45)],
          ];
        } else {
          facets = [
            [Offset(size.width * 0.15, 0), Offset(size.width * 0.45, size.height * 0.35), Offset(0, size.height * 0.4)],
            [Offset(size.width, size.height * 0.1), Offset(size.width * 0.7, size.height * 0.45), Offset(size.width * 0.95, size.height * 0.55)],
            [Offset(size.width * 0.2, size.height), Offset(size.width * 0.55, size.height * 0.55), Offset(size.width * 0.05, size.height * 0.65)],
            [Offset(size.width * 0.85, size.height), Offset(size.width * 0.6, size.height * 0.6), Offset(size.width, size.height * 0.7)],
          ];
        }
        for (var i = 0; i < facets.length; i++) {
          final path = Path()..addPolygon(facets[i], true);
          canvas.drawPath(path, Paint()..color = (i.isEven ? Colors.white : accent).withValues(alpha: 0.14 + i * 0.03));
          canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white.withValues(alpha: 0.28));
        }
        if (id == 'ocean_platinum') {
          final wave = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = accent.withValues(alpha: 0.28);
          for (var i = 0; i < 3; i++) {
            final path = Path()..moveTo(0, size.height * (0.62 + i * 0.08));
            for (var x = 0.0; x <= size.width; x += 20) {
              path.quadraticBezierTo(x + 10, size.height * (0.62 + i * 0.08) + (i.isEven ? -6 : 6), x + 20, size.height * (0.62 + i * 0.08));
            }
            canvas.drawPath(path, wave);
          }
        }
        break;
      case NgmyMoneyCardPattern.roseMetal:
        final bloom = Paint()
          ..shader = RadialGradient(
            center: const Alignment(0.85, 0.15),
            radius: 1.05,
            colors: [
              const Color(0xFFF9A8D4).withValues(alpha: 0.45),
              accent.withValues(alpha: 0.0),
            ],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, bloom);
        final arc = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.5
          ..color = const Color(0xFFFCE7F3).withValues(alpha: 0.28);
        for (var i = 0; i < 4; i++) {
          canvas.drawArc(
            Rect.fromCenter(center: Offset(size.width * 1.05, size.height * 0.2), width: 90 + i * 36.0, height: 90 + i * 36.0),
            math.pi * 0.6,
            math.pi * 0.9,
            false,
            arc,
          );
        }
        break;
      case NgmyMoneyCardPattern.diamondNoir:
        final edge = Paint()
          ..shader = LinearGradient(
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
            colors: [
              Colors.white.withValues(alpha: 0.18),
              Colors.transparent,
              accent.withValues(alpha: 0.12),
            ],
          ).createShader(Offset.zero & size);
        canvas.drawRect(Offset.zero & size, edge);
        final spark = Paint()..color = Colors.white.withValues(alpha: 0.35);
        final rng = [0.12, 0.33, 0.48, 0.61, 0.77, 0.88];
        for (var i = 0; i < rng.length; i++) {
          final o = Offset(size.width * rng[i], size.height * ((i * 0.17 + 0.15) % 0.85));
          canvas.drawCircle(o, i.isEven ? 1.6 : 1.1, spark);
          canvas.drawLine(o.translate(-4, 0), o.translate(4, 0), Paint()..color = Colors.white.withValues(alpha: 0.25)..strokeWidth = 0.8);
          canvas.drawLine(o.translate(0, -4), o.translate(0, 4), Paint()..color = Colors.white.withValues(alpha: 0.25)..strokeWidth = 0.8);
        }
        final rim = Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.1
          ..color = Colors.white.withValues(alpha: 0.22);
        canvas.drawRRect(
          RRect.fromRectAndRadius(Rect.fromLTWH(11, 11, size.width - 22, size.height - 22), const Radius.circular(15)),
          rim,
        );
        break;
    }
  }

  @override
  bool shouldRepaint(covariant _MoneyCardPatternPainter oldDelegate) => oldDelegate.template.id != template.id;
}

class _NoteCardContent extends StatelessWidget {
  const _NoteCardContent({required this.note, this.isFront = true});

  final NgmyHomeNote note;
  final bool isFront;

  @override
  Widget build(BuildContext context) {
    // Note body only — no "NOTE" / "Notes" title. Text fills the card face.
    return Padding(
      padding: EdgeInsets.fromLTRB(16, isFront ? 54 : 20, isFront ? 52 : 16, isFront ? 52 : 20),
      child: Align(
        alignment: Alignment.topLeft,
        child: Text(
          note.text,
          maxLines: 14,
          overflow: TextOverflow.ellipsis,
          textAlign: TextAlign.left,
          style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, height: 1.4, color: Colors.white),
        ),
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
    this.civicIdRecord,
  });

  final String userEmail;
  final bool autoPlay;
  final NgmyHomeCardSlideStyle slideStyle;
  final Future<void> Function(bool autoPlay, NgmyHomeCardSlideStyle style) onDeckSettingsChanged;
  final Map<String, dynamic>? civicIdRecord;

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
  String _cardTemplateId = kNgmyMoneyCardTemplates.first.id;
  String? _pinnedNote;
  String? _pinnedAlarm;
  String? _pinnedKind;
  String? _pinnedTitle;
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
    final picked = await showNgmyHomeRoboticEssentialsHub(context, userEmail: widget.userEmail);
    if (picked == null || !mounted) return;
    setState(() {
      _pinnedKind = picked.kind;
      _pinnedTitle = picked.title;
      _pinnedNote = picked.body.trim().isEmpty ? picked.title : picked.body;
      _pinnedAlarm = '';
      if (_descC.text.trim().isEmpty) _descC.text = picked.title;
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

  void _pickCivicId() {
    final record = widget.civicIdRecord;
    if (record == null || record.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('No Civic Registry ID on this account yet.')),
      );
      return;
    }
    final name = (record['fullName'] ?? record['registryId'] ?? 'Civic Registry ID').toString().trim();
    Navigator.pop(context, {
      'kind': 'civic_id',
      'civicIdJson': jsonEncode(record),
      'description': name.isEmpty ? 'Civic Registry ID' : name,
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
    final hasPin = (_pinnedNote ?? '').isNotEmpty || (_pinnedAlarm ?? '').isNotEmpty || (_pinnedKind ?? '').isNotEmpty;
    final amount = _amountC.text.trim();
    if (hasPin && (amount.isEmpty || (double.tryParse(amount) ?? 0) <= 0)) {
      Navigator.pop(context, {
        'kind': 'pin',
        'description': (_pinnedTitle ?? _descC.text).trim().isEmpty ? 'Pinned item' : (_pinnedTitle ?? _descC.text).trim(),
        'category': _category,
        'pinnedNoteText': _pinnedNote ?? '',
        'pinnedAlarmText': _pinnedAlarm ?? '',
        'pinnedEssentialsKind': _pinnedKind ?? '',
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
      'pinnedEssentialsKind': _pinnedKind ?? '',
      'cardTemplateId': _cardTemplateId,
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

  Widget _hudAction({
    required IconData icon,
    required String label,
    required VoidCallback onTap,
    required double t,
    required int phase,
    required List<Color> accent,
  }) {
    final wave = ((t + phase * 0.22) % 1.0);
    final glow = 0.12 + wave * 0.22;
    final border = Color.lerp(accent[0], accent[1], wave)!;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 120),
          width: double.infinity,
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 13),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            gradient: LinearGradient(
              begin: Alignment(-1.2 + wave * 2.4, -0.6),
              end: Alignment(1.2 - wave * 2.4, 0.8),
              colors: [
                accent[0].withValues(alpha: 0.18 + wave * 0.10),
                const Color(0xFF0B1220).withValues(alpha: 0.55),
                accent[1].withValues(alpha: 0.16 + (1 - wave) * 0.10),
              ],
            ),
            border: Border.all(color: border.withValues(alpha: 0.45 + wave * 0.25), width: 1.35),
            boxShadow: [
              BoxShadow(color: accent[0].withValues(alpha: glow), blurRadius: 14 + wave * 10, spreadRadius: 0.4),
              BoxShadow(color: accent[1].withValues(alpha: glow * 0.7), blurRadius: 18, offset: const Offset(0, 6)),
            ],
          ),
          child: Row(
            children: [
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  gradient: LinearGradient(colors: accent),
                  boxShadow: [BoxShadow(color: accent[0].withValues(alpha: 0.35), blurRadius: 10)],
                ),
                child: Icon(icon, size: 18, color: Colors.white),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
              ),
              Transform.translate(
                offset: Offset(math.sin(wave * math.pi * 2) * 2.5, 0),
                child: Icon(Icons.chevron_right_rounded, size: 20, color: border.withValues(alpha: 0.9)),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _logSpendingLogo(double t) => _NgmyRoboticNgmyMark(t: t);

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
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      const Color(0xFF0B1220),
                      Color.lerp(const Color(0xFF111827), const Color(0xFF1E1B4B), t * 0.35)!,
                      const Color(0xFF1E1B4B),
                    ],
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
                          _logSpendingLogo(t),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'LOG SPENDING',
                                  style: TextStyle(
                                    fontSize: 12,
                                    fontWeight: FontWeight.w900,
                                    letterSpacing: 2.2,
                                    color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFA78BFA), t),
                                  ),
                                ),
                                const SizedBox(height: 2),
                                Text(
                                  'Device vault · stays local',
                                  style: TextStyle(fontSize: 12, color: Colors.white.withValues(alpha: 0.58 + t * 0.08), fontWeight: FontWeight.w600),
                                ),
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
                                gradient: LinearGradient(
                                  begin: Alignment(-1 + t * 2, -0.4),
                                  end: Alignment(1 - t * 2, 0.6),
                                  colors: [
                                    const Color(0xFF22D3EE).withValues(alpha: 0.10 + t * 0.06),
                                    Colors.white.withValues(alpha: 0.04),
                                    const Color(0xFF8B5CF6).withValues(alpha: 0.12 + (1 - t) * 0.06),
                                  ],
                                ),
                                border: Border.all(
                                  color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFF8B5CF6), t)!.withValues(alpha: 0.45),
                                  width: 1.2,
                                ),
                                boxShadow: [
                                  BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.10 + t * 0.10), blurRadius: 16),
                                ],
                              ),
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.stretch,
                                children: [
                                  Row(
                                    children: [
                                      Icon(Icons.auto_awesome_motion_rounded, size: 18, color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFA78BFA), t)),
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
                                                ? LinearGradient(
                                                    colors: [
                                                      Color.lerp(const Color(0xFF22D3EE), const Color(0xFF60A5FA), t)!,
                                                      Color.lerp(const Color(0xFF8B5CF6), const Color(0xFF67E8F9), t)!,
                                                    ],
                                                  )
                                                : null,
                                            color: _autoPlay ? null : Colors.white.withValues(alpha: 0.08),
                                            border: Border.all(color: Colors.white.withValues(alpha: _autoPlay ? 0 : 0.2)),
                                            boxShadow: _autoPlay
                                                ? [BoxShadow(color: const Color(0xFF22D3EE).withValues(alpha: 0.28 + t * 0.15), blurRadius: 12)]
                                                : null,
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
                                  Text('8 slide animations', style: TextStyle(fontSize: 12, color: muted, fontWeight: FontWeight.w600)),
                                  const SizedBox(height: 8),
                                  for (var row = 0; row < 2; row++) ...[
                                    if (row > 0) const SizedBox(height: 8),
                                    Row(
                                      children: [
                                        for (var col = 0; col < 4; col++) ...[
                                          if (col > 0) const SizedBox(width: 8),
                                          Expanded(
                                            child: Builder(
                                              builder: (context) {
                                                final style = NgmyHomeCardSlideStyle.values[row * 4 + col];
                                                final selected = _slideStyle == style;
                                                return GestureDetector(
                                                  onTap: () => _pickStyle(style),
                                                  child: AnimatedContainer(
                                                    duration: const Duration(milliseconds: 180),
                                                    padding: const EdgeInsets.symmetric(vertical: 10, horizontal: 4),
                                                    decoration: BoxDecoration(
                                                      borderRadius: BorderRadius.circular(12),
                                                      gradient: selected
                                                          ? LinearGradient(
                                                              colors: [
                                                                Color.lerp(const Color(0xFF60A5FA), const Color(0xFF22D3EE), t)!,
                                                                Color.lerp(const Color(0xFF8B5CF6), const Color(0xFF67E8F9), 1 - t)!,
                                                              ],
                                                            )
                                                          : LinearGradient(
                                                              colors: [
                                                                Colors.white.withValues(alpha: 0.06),
                                                                Colors.white.withValues(alpha: 0.02),
                                                              ],
                                                            ),
                                                      border: Border.all(
                                                        color: selected
                                                            ? Colors.white.withValues(alpha: 0.35)
                                                            : Colors.white.withValues(alpha: 0.12),
                                                      ),
                                                      boxShadow: selected
                                                          ? [BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.28 + t * 0.12), blurRadius: 12)]
                                                          : null,
                                                    ),
                                                    child: Column(
                                                      mainAxisSize: MainAxisSize.min,
                                                      children: [
                                                        Icon(style.icon, size: 16, color: ink),
                                                        const SizedBox(height: 4),
                                                        Text(
                                                          style.label,
                                                          maxLines: 1,
                                                          overflow: TextOverflow.ellipsis,
                                                          textAlign: TextAlign.center,
                                                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 10),
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
                              ),
                            ),
                            const SizedBox(height: 14),
                            _hudAction(
                              icon: Icons.photo_camera_back_rounded,
                              label: 'Upload & crop photo',
                              onTap: _uploadPhoto,
                              t: t,
                              phase: 0,
                              accent: const [Color(0xFF22D3EE), Color(0xFF60A5FA)],
                            ),
                            const SizedBox(height: 10),
                            _hudAction(
                              icon: Icons.hub_rounded,
                              label: (_pinnedKind != null || _pinnedNote != null || _pinnedAlarm != null)
                                  ? 'Essentials vault · pinned ✓'
                                  : 'Open Essentials vault',
                              onTap: _pickEssentialsPin,
                              t: t,
                              phase: 1,
                              accent: const [Color(0xFF34D399), Color(0xFF059669)],
                            ),
                            const SizedBox(height: 10),
                            _hudAction(
                              icon: Icons.badge_rounded,
                              label: 'Add business card to home',
                              onTap: _pickBusinessCard,
                              t: t,
                              phase: 2,
                              accent: const [Color(0xFF38BDF8), Color(0xFF6366F1)],
                            ),
                            const SizedBox(height: 10),
                            _hudAction(
                              icon: Icons.badge_outlined,
                              label: 'Add Civic Registry ID to home',
                              onTap: _pickCivicId,
                              t: t,
                              phase: 3,
                              accent: const [Color(0xFF0EA5E9), Color(0xFF1D4ED8)],
                            ),
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
                                                            ? LinearGradient(
                                                                colors: [
                                                                  Color.lerp(const Color(0xFF60A5FA), const Color(0xFF22D3EE), t)!,
                                                                  Color.lerp(const Color(0xFF8B5CF6), const Color(0xFF67E8F9), 1 - t)!,
                                                                ],
                                                              )
                                                            : LinearGradient(
                                                                colors: [
                                                                  Colors.white.withValues(alpha: 0.07),
                                                                  Colors.white.withValues(alpha: 0.03),
                                                                ],
                                                              ),
                                                        borderRadius: BorderRadius.circular(14),
                                                        border: Border.all(
                                                          color: selected
                                                              ? Colors.white.withValues(alpha: 0.35)
                                                              : muted.withValues(alpha: 0.22),
                                                        ),
                                                        boxShadow: selected
                                                            ? [BoxShadow(color: const Color(0xFF60A5FA).withValues(alpha: 0.25 + t * 0.12), blurRadius: 10)]
                                                            : null,
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
                            if (!_isPassword) ...[
                              const SizedBox(height: 16),
                              Text('CARD TEMPLATE', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1.1, color: muted)),
                              const SizedBox(height: 4),
                              Text('Pick a luxurious payment-card look', style: TextStyle(fontSize: 12, color: muted, fontWeight: FontWeight.w600)),
                              const SizedBox(height: 10),
                              for (var row = 0; row < 3; row++) ...[
                                if (row > 0) const SizedBox(height: 8),
                                if (row == 2) ...[
                                  Text('ATELIER LUXE', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1.3, color: muted)),
                                  const SizedBox(height: 2),
                                  Text('Gold · Crystal · Rose · Diamond', style: TextStyle(fontSize: 11, color: muted.withValues(alpha: 0.85), fontWeight: FontWeight.w600)),
                                  const SizedBox(height: 8),
                                ],
                                Row(
                                  children: [
                                    for (var col = 0; col < 5; col++) ...[
                                      if (col > 0) const SizedBox(width: 6),
                                      Expanded(
                                        child: Builder(
                                          builder: (context) {
                                            final tpl = kNgmyMoneyCardTemplates[row * 5 + col];
                                            final selected = _cardTemplateId == tpl.id;
                                            return GestureDetector(
                                              onTap: () => setState(() => _cardTemplateId = tpl.id),
                                              child: AnimatedContainer(
                                                duration: const Duration(milliseconds: 160),
                                                height: row == 2 ? 66 : 58,
                                                decoration: BoxDecoration(
                                                  borderRadius: BorderRadius.circular(12),
                                                  gradient: LinearGradient(
                                                    begin: Alignment.topLeft,
                                                    end: Alignment.bottomRight,
                                                    colors: tpl.colors.length >= 3
                                                        ? [tpl.colors[0], tpl.colors[1], tpl.colors[2]]
                                                        : [tpl.colors.first, tpl.colors.last],
                                                  ),
                                                  border: Border.all(
                                                    color: selected ? Colors.white : Colors.white.withValues(alpha: 0.18),
                                                    width: selected ? 2 : 1,
                                                  ),
                                                  boxShadow: selected
                                                      ? [BoxShadow(color: tpl.colors.last.withValues(alpha: 0.45), blurRadius: 12)]
                                                      : row == 2
                                                          ? [BoxShadow(color: tpl.colors[1].withValues(alpha: 0.28), blurRadius: 8, offset: const Offset(0, 3))]
                                                          : null,
                                                ),
                                                child: Stack(
                                                  children: [
                                                    Positioned.fill(
                                                      child: ClipRRect(
                                                        borderRadius: BorderRadius.circular(11),
                                                        child: CustomPaint(painter: _MoneyCardPatternPainter(template: tpl)),
                                                      ),
                                                    ),
                                                    Align(
                                                      alignment: Alignment.bottomCenter,
                                                      child: Container(
                                                        width: double.infinity,
                                                        padding: const EdgeInsets.symmetric(vertical: 3, horizontal: 2),
                                                        decoration: BoxDecoration(
                                                          color: Colors.black.withValues(alpha: 0.45),
                                                          borderRadius: const BorderRadius.vertical(bottom: Radius.circular(11)),
                                                        ),
                                                        child: Text(
                                                          tpl.label,
                                                          maxLines: 1,
                                                          overflow: TextOverflow.ellipsis,
                                                          textAlign: TextAlign.center,
                                                          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 8),
                                                        ),
                                                      ),
                                                    ),
                                                    if (selected)
                                                      const Positioned(
                                                        top: 4,
                                                        right: 4,
                                                        child: Icon(Icons.check_circle_rounded, size: 14, color: Colors.white),
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
                                  border: Border.all(color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFF8B5CF6), t)!.withValues(alpha: 0.45)),
                                  boxShadow: [
                                    BoxShadow(color: const Color(0xFF67E8F9).withValues(alpha: 0.12 + t * 0.10), blurRadius: 14),
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
                                backgroundColor: Color.lerp(const Color(0xFF8B5CF6), const Color(0xFF6366F1), t),
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

/// Shared NGMY mark used in Log spending + remove-card confirm.
class _NgmyRoboticNgmyMark extends StatelessWidget {
  const _NgmyRoboticNgmyMark({required this.t, this.size = 54});

  final double t;
  final double size;

  @override
  Widget build(BuildContext context) {
    final spin = t * math.pi * 2;
    final inner = size * (42 / 54);
    final iconSize = size * (20 / 54);
    final labelSize = size * (6.5 / 54);
    final labelBottom = size * (7 / 54);
    return SizedBox(
      width: size,
      height: size,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Transform.rotate(
            angle: spin * 0.35,
            child: Container(
              width: size,
              height: size,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                gradient: SweepGradient(
                  colors: [
                    Color.lerp(const Color(0xFF22D3EE), const Color(0xFF8B5CF6), t)!,
                    const Color(0xFF60A5FA),
                    Color.lerp(const Color(0xFFA78BFA), const Color(0xFF22D3EE), t)!,
                    Color.lerp(const Color(0xFF22D3EE), const Color(0xFF8B5CF6), t)!,
                  ],
                ),
                boxShadow: [
                  BoxShadow(color: const Color(0xFF22D3EE).withValues(alpha: 0.35 + t * 0.25), blurRadius: 16 + t * 10),
                  BoxShadow(color: const Color(0xFF8B5CF6).withValues(alpha: 0.28), blurRadius: 18, offset: const Offset(0, 4)),
                ],
              ),
            ),
          ),
          Container(
            width: inner,
            height: inner,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [
                  Color.lerp(const Color(0xFF0B1220), const Color(0xFF1E1B4B), t)!,
                  const Color(0xFF0F172A),
                ],
              ),
              border: Border.all(color: Colors.white.withValues(alpha: 0.18), width: 1.2),
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                Transform.rotate(
                  angle: -spin * 0.2,
                  child: Icon(Icons.memory_rounded, size: iconSize, color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFA78BFA), t)),
                ),
                Positioned(
                  bottom: labelBottom,
                  child: Text(
                    'NGMY',
                    style: TextStyle(
                      fontSize: labelSize,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 0.6,
                      color: Colors.white.withValues(alpha: 0.85 + t * 0.1),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
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
                  _NgmyRoboticNgmyMark(t: t, size: 64),
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
