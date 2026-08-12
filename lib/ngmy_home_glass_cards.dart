import 'ngmy_home_install_guide_card.dart';
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
import 'ngmy_civic_id_photo.dart';
import 'ngmy_civic_registry_id_card.dart';
import 'ngmy_civic_registry_members.dart';
import 'ngmy_delete_confirm_dialog.dart';
import 'ngmy_helper_alarm_memory.dart';
import 'ngmy_home_card_image_crop.dart';
import 'ngmy_home_essentials_hub.dart';
import 'ngmy_home_vote_ads.dart';
import 'ngmy_item_reminder_storage.dart';
import 'ngmy_medicine_organizer.dart';
import 'ngmy_offline_icons.dart';
import 'ngmy_platform_graphics.dart';

/// Local-only (device storage, no database) spending + notes cards for Home.
/// Everything here lives in SharedPreferences, keyed per user email.

// ?? Data models ????????????????????????????????????????????????????????????

class NgmyReceiptItem {
  const NgmyReceiptItem({required this.name, required this.price, this.qty = 1});

  final String name;
  final double price;
  final int qty;

  double get lineTotal => price * qty;

  NgmyReceiptItem copyWith({String? name, double? price, int? qty}) => NgmyReceiptItem(
        name: name ?? this.name,
        price: price ?? this.price,
        qty: qty ?? this.qty,
      );

  Map<String, dynamic> toJson() => {'name': name, 'price': price, 'qty': qty};

  factory NgmyReceiptItem.fromJson(Map<String, dynamic> j) => NgmyReceiptItem(
        name: j['name']?.toString() ?? '',
        price: (j['price'] as num?)?.toDouble() ?? 0,
        qty: ((j['qty'] as num?)?.toInt() ?? 1).clamp(1, 999),
      );
}

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
    this.receiptItems = const [],
    this.receiptMerchant = '',
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
  /// Essentials category label (Contacts, Notes, Hotlines, ?).
  final String pinnedEssentialsKind;
  /// JSON of a pinned NgmyBusinessCardDocument.
  final String businessCardJson;
  /// JSON of a pinned Civic Registry ID record.
  final String civicIdJson;
  /// Money-card face template id (see [kNgmyMoneyCardTemplates]).
  final String cardTemplateId;
  /// Line items on a real receipt (item + qty + price).
  final List<NgmyReceiptItem> receiptItems;
  /// Store / merchant name printed on the receipt.
  final String receiptMerchant;

  bool get hasImage => imageBase64.trim().isNotEmpty;
  bool get isPassword => category == 'Password';
  bool get hasPinnedEssentials =>
      pinnedEssentialsKind.trim().isNotEmpty || pinnedNoteText.trim().isNotEmpty || pinnedAlarmText.trim().isNotEmpty;
  bool get hasBusinessCard => businessCardJson.trim().isNotEmpty;
  bool get hasCivicId => civicIdJson.trim().isNotEmpty;
  bool get hasReceipt => receiptItems.isNotEmpty;
  bool get hideModePill =>
      hasImage || isPassword || hasBusinessCard || hasCivicId || (hasPinnedEssentials && amount <= 0);
  /// Money / category face that should fill the whole frosted card like a photo.
  bool get showsCreditFace =>
      !hasImage && !isPassword && !hasBusinessCard && !hasCivicId && !(hasPinnedEssentials && amount <= 0);

  double get receiptTotal => receiptItems.fold(0.0, (a, b) => a + b.lineTotal);

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
    List<NgmyReceiptItem>? receiptItems,
    String? receiptMerchant,
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
        receiptItems: receiptItems ?? this.receiptItems,
        receiptMerchant: receiptMerchant ?? this.receiptMerchant,
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
        'receiptItems': receiptItems.map((e) => e.toJson()).toList(),
        'receiptMerchant': receiptMerchant,
      };

  factory NgmySpendingEntry.fromJson(Map<String, dynamic> j) {
    final rawItems = j['receiptItems'];
    final items = <NgmyReceiptItem>[];
    if (rawItems is List) {
      for (final e in rawItems) {
        if (e is Map) items.add(NgmyReceiptItem.fromJson(Map<String, dynamic>.from(e)));
      }
    }
    return NgmySpendingEntry(
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
      receiptItems: items,
      receiptMerchant: j['receiptMerchant']?.toString() ?? '',
    );
  }
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

// ?? Local storage (SharedPreferences only ? nothing leaves the device) ?????

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
    // Civic photos live in a dedicated local prefs key (`local:civic` token on the card).
    // Strip only giant inline data-URLs so the spending list itself stays small.
    final lean = items.map((e) {
      if (!e.hasCivicId) return e;
      try {
        final map = jsonDecode(e.civicIdJson);
        if (map is! Map) return e;
        final next = Map<String, dynamic>.from(map);
        final photo = (next['idPhotoPath'] ?? '').toString();
        if (ngmyIsCivicIdPhotoLocalToken(photo)) {
          next['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
          return e.copyWith(civicIdJson: jsonEncode(next));
        }
        if (photo.startsWith('data:') || photo.length > 800) {
          next['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
          return e.copyWith(civicIdJson: jsonEncode(next));
        }
      } catch (_) {}
      return e;
    }).toList();
    final payload = jsonEncode(lean.map((e) => e.toJson()).toList());
    try {
      await prefs.setString(_spendingKey(email), payload);
    } catch (err) {
      // Last-resort: drop photo/image payloads and retry so cards still persist.
      final stripped = lean
          .map((e) => e.copyWith(imageBase64: e.imageBase64.length > 200000 ? '' : e.imageBase64))
          .toList();
      await prefs.setString(_spendingKey(email), jsonEncode(stripped.map((e) => e.toJson()).toList()));
    }
    try {
      await prefs.reload();
    } catch (_) {}
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
        NgmyHomeCardSlideStyle.slideLeft => 'Sweep ?',
        NgmyHomeCardSlideStyle.slideRight => 'Sweep ?',
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

/// Luxurious payment-card face templates (Log spending ? money categories).
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

/// Where amount / copy sit on the card face ? keeps each luxe design distinct.
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
  // Row 1 ? redesigned with unique luxe structure
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
  // Row 2 ? Carbon + Emerald kept; more crystal / rose / diamond
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
  // Row 3 ? Atelier Luxe
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

/// Three rows ? four categories for the Log spending sheet.
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

NgmyMedicineEntry? _medicineMatchingEntry(List<NgmyMedicineEntry> list, NgmySpendingEntry entry) {
  final title = entry.description.trim().toLowerCase();
  if (title.isEmpty) return null;
  for (final m in list) {
    if (m.name.trim().toLowerCase() == title) return m;
  }
  for (final m in list) {
    final n = m.name.trim().toLowerCase();
    if (n.contains(title) || title.contains(n)) return m;
  }
  return null;
}

// ?? Generic swipeable glass card stack ??????????????????????????????????????

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

  /// Peek strip for each card behind the front ? peeks sit ABOVE the front card.
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
    // Newly added cards are prepended by the panel ? keep that order so the new card is front.
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
      // Only the front card moves ? drag down to send it away / reveal the next card.
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
        // Only the cards themselves ? opaque empty space was blocking Core/Vault below.
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
                child: Padding(
                  // Create depth by relayout, not by raster-scaling a finished
                  // card. Text on idle cards therefore stays at native scale.
                  padding: EdgeInsets.symmetric(
                    horizontal: i == 1
                        ? 6 * (1 - combinedReveal)
                        : i * 6,
                  ),
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
            // Front card ? always starts at the top of this stack.
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

// ?? Date tab (sports-card style) ????????????????????????????????????????????

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

// ?? Frosted glass card shell ????????????????????????????????????????????????

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
    this.expandFace = false,
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
  /// When true, stretch the glass face to the full deck card height (252px slot).
  final bool expandFace;

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
            child: expandFace ? SizedBox(width: double.infinity, height: double.infinity, child: child) : child,
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
          child: SizedBox(
            height: expandFace ? 236 : null,
            width: double.infinity,
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
                    // No group opacity is applied here, so a saveLayer only
                    // adds an unnecessary raster pass over text and photos.
                    clipBehavior: Clip.antiAlias,
                    child: ColoredBox(color: accent[0], child: face),
                  )
                : ClipRRect(
                    borderRadius: BorderRadius.circular(28),
                    child: ngmyClipBackdrop(
                      borderRadius: BorderRadius.circular(28),
                      sigma: blurSigma,
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
      child: ngmyClipBackdrop(
        borderRadius: BorderRadius.circular(10),
        sigma: isLight ? 2 : 8,
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
                      Colors.white,
                      const Color(0xFFE2E8F0),
                    ]
                  : [
                      const Color(0xFF334155),
                      const Color(0xFF1E293B),
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
      child: ngmyClipBackdrop(
        borderRadius: BorderRadius.circular(10),
        sigma: isLight ? 2 : 8,
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
                      Colors.white,
                      const Color(0xFFE2E8F0),
                    ]
                  : [
                      const Color(0xFF334155),
                      const Color(0xFF1E293B),
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

/// Animated capital NGMY glass badge ? sits between Loan Service and Local Growth.
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
        // Keep the badge's letters at their native raster size. The glow and
        // shimmer still animate; continuously scaling the whole subtree made
        // its text alternate between sharp and soft frames on web.
        const scale = 1.0;
        return Transform.scale(
          scale: scale,
          child: Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: widget.onTap,
              borderRadius: BorderRadius.circular(16),
              child: ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: ngmyClipBackdrop(
              borderRadius: BorderRadius.circular(16),
              sigma: 14,
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
                            Colors.white,
                            const Color(0xFF8B5CF6).withValues(alpha: 0.18 + pulse * 0.10),
                          ]
                        : [
                            const Color(0xFF1E3A5F),
                            const Color(0xFF1E293B),
                            const Color(0xFF312E81),
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

// ?? Home panel ??????????????????????????????????????????????????????????????

class NgmyHomeGlassCardsPanel extends StatefulWidget {
  const NgmyHomeGlassCardsPanel({
    super.key,
    required this.userEmail,
    this.displayName,
    this.profilePicturePath,
    this.civicIdRecord,
    this.config,
    this.onCivicIdPhotoSaved,
  });

  final String userEmail;
  final String? displayName;
  /// App profile photo ? reused for Civic ID home card when registry photo is empty.
  final String? profilePicturePath;
  /// Current user's Civic Registry ID record (if enrolled) for pinning to home.
  final Map<String, dynamic>? civicIdRecord;
  /// App config used to save Civic Registry ID photo before pinning to home.
  final dynamic config;
  final Future<void> Function()? onCivicIdPhotoSaved;

  @override
  State<NgmyHomeGlassCardsPanel> createState() => _NgmyHomeGlassCardsPanelState();
}

class _NgmyHomeGlassCardsPanelState extends State<NgmyHomeGlassCardsPanel> with WidgetsBindingObserver {
  List<NgmySpendingEntry> _spending = [];
  /// Spending card ids currently showing their personal note on the card face.
  final Set<String> _noteFaceIds = {};
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

  Future<List<NgmySpendingEntry>> _hydrateCivicIdCards(List<NgmySpendingEntry> spending) async {
    final live = widget.civicIdRecord;
    await ngmyLoadCivicIdPhotoLocal(widget.userEmail);
    var changed = false;
    final next = <NgmySpendingEntry>[];
    for (final e in spending) {
      if (!e.hasCivicId) {
        next.add(e);
        continue;
      }
      try {
        final map = jsonDecode(e.civicIdJson);
        if (map is! Map) {
          next.add(e);
          continue;
        }
        var record = Map<String, dynamic>.from(map);
        final rid = (record['registryId'] ?? '').toString().trim();
        final liveRid = (live?['registryId'] ?? '').toString().trim();
        if (live != null &&
            (rid.isEmpty ||
                rid == liveRid ||
                NgmyCivicRegistryMembers.emailKey((record['email'] ?? '').toString()) ==
                    NgmyCivicRegistryMembers.emailKey(widget.userEmail))) {
          record = {
            ...record,
            ...live,
            'registryId': (live['registryId'] ?? record['registryId'] ?? '').toString(),
          };
        }
        final rawPhoto = (record['idPhotoPath'] ?? '').toString().trim();
        if (rawPhoto.startsWith('data:image')) {
          await ngmyEnsureCivicIdPhotoLocal(widget.userEmail, rawPhoto);
          record['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
          changed = true;
        } else if (ngmyIsCivicIdPhotoLocalToken(rawPhoto)) {
          record['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
        } else if (rawPhoto.isEmpty) {
          final local = ngmyCachedCivicIdPhoto(widget.userEmail);
          if (local != null) {
            record['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
            changed = true;
          }
        }
        final resolved = (ngmyCivicIdPhotoForRecord(
              record,
              profilePicturePath: widget.profilePicturePath,
              emailHint: widget.userEmail,
            ) ??
            '')
            .trim();
        final display = Map<String, dynamic>.from(record);
        if (resolved.isNotEmpty) display['idPhotoPath'] = resolved;
        next.add(e.copyWith(civicIdJson: jsonEncode(display)));
      } catch (_) {
        next.add(e);
      }
    }
    if (changed) {
      final leanForSave = next.map((e) {
        if (!e.hasCivicId) return e;
        try {
          final map = jsonDecode(e.civicIdJson);
          if (map is! Map) return e;
          final m = Map<String, dynamic>.from(map);
          final p = (m['idPhotoPath'] ?? '').toString();
          if (p.startsWith('data:') || p.length > 800 || ngmyIsCivicIdPhotoLocalToken(p)) {
            m['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
          }
          return e.copyWith(civicIdJson: jsonEncode(m));
        } catch (_) {
          return e;
        }
      }).toList();
      await NgmyHomeLocalStore.saveSpending(widget.userEmail, leanForSave);
    }
    return next;
  }

  Future<void> _load() async {
    final s0 = await NgmyHomeLocalStore.loadSpending(widget.userEmail);
    final s1 = await _syncBusinessCardSnapshots(s0);
    final s2 = await _hydrateCivicIdCards(s1);
    final s = await _injectHomeVoteAd(s2);
    final deck = await NgmyHomeLocalStore.loadDeckPrefs(widget.userEmail);
    final acks = await NgmyHomeLocalStore.loadAlarmAcks(widget.userEmail);
    if (!mounted) return;
    s.sort((a, b) {
      if (a.id == kNgmyHomeVoteAdCardId && b.id != kNgmyHomeVoteAdCardId) return -1;
      if (b.id == kNgmyHomeVoteAdCardId && a.id != kNgmyHomeVoteAdCardId) return 1;
      return b.date.compareTo(a.date);
    });
    final preferFront = s.any((e) => e.id == kNgmyHomeVoteAdCardId)
        ? kNgmyHomeVoteAdCardId
        : deck.frontSpendingId;
    _moveIdToFront(s, (e) => e.id, preferFront);
    setState(() {
      _spending = s;
      _autoPlay = deck.autoPlay;
      _slideStyle = deck.style;
      _frontSpendingId = preferFront ?? (s.isNotEmpty ? s.first.id : null);
      _frontNoteId = deck.frontNoteId;
      _alarmAcks = acks;
      _loaded = true;
    });
    _checkDueAlarms();
  }

  Future<List<NgmySpendingEntry>> _injectHomeVoteAd(List<NgmySpendingEntry> spending) async {
    final withoutAd = spending.where((e) => e.id != kNgmyHomeVoteAdCardId).toList();
    final campaign = await NgmyHomeVoteAdStore.load(forceCloud: true);
    if (!campaign.isLive) return withoutAd;
    final json = campaign.businessCardJson.trim();
    if (json.isEmpty) return withoutAd;
    final name = campaign.candidateName.trim().isEmpty ? 'Voting advertisement' : campaign.candidateName.trim();
    final adEntry = NgmySpendingEntry(
      id: kNgmyHomeVoteAdCardId,
      amount: 0,
      description: name,
      category: 'Business Card',
      date: DateTime.now(),
      businessCardJson: json,
    );
    return [adEntry, ...withoutAd];
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
    setState(() {
      _spending = _spending.where((e) => e.id != id).toList();
      _noteFaceIds.remove(id);
    });
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
    if (_frontSpendingId == id) {
      await _setDeckPrefs(frontSpendingId: _spending.isNotEmpty ? _spending.first.id : '');
    }
  }

  bool _registerTripleTapFast(String id) {
    final now = DateTime.now();
    // Each successive tap must land within half a second of the previous one.
    if (_lastTapId != id || _lastTapAt == null || now.difference(_lastTapAt!) > const Duration(milliseconds: 500)) {
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

  bool _registerDoubleTap(String id) {
    final now = DateTime.now();
    if (_lastTapId != id || _lastTapAt == null || now.difference(_lastTapAt!) > const Duration(milliseconds: 450)) {
      _tapCount = 1;
    } else {
      _tapCount += 1;
    }
    _lastTapAt = now;
    _lastTapId = id;
    if (_tapCount >= 2) {
      _tapCount = 0;
      _lastTapAt = null;
      _lastTapId = null;
      return true;
    }
    return false;
  }

  Future<void> _editSpendingAmount(NgmySpendingEntry entry) async {
    if (!entry.showsCreditFace) return;
    final result = await showGeneralDialog<_SpendEditResult>(
      context: context,
      barrierDismissible: true,
      barrierLabel: 'Receipt',
      barrierColor: Colors.black.withValues(alpha: 0.55),
      transitionDuration: const Duration(milliseconds: 220),
      pageBuilder: (ctx, a1, a2) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 28, vertical: 48),
        child: _SpendReceiptPopup(entry: entry),
      ),
      transitionBuilder: (ctx, anim, a2, child) => FadeTransition(opacity: anim, child: child),
    );
    if (result == null || !mounted) return;
    final next = entry.copyWith(
      amount: result.amount,
      description: result.description,
      receiptMerchant: result.merchant,
      receiptItems: List<NgmyReceiptItem>.from(result.items),
      date: DateTime.now(),
      note: '', // keep card face clean ? receipt holds the detail
    );
    final updated = _spending.map((e) => e.id == entry.id ? next : e).toList()
      ..sort((a, b) => b.date.compareTo(a.date));
    setState(() => _spending = updated);
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, updated);
    // Reload from disk so a failed/partial write can?t leave stale UI.
    final verified = await NgmyHomeLocalStore.loadSpending(widget.userEmail);
    if (!mounted) return;
    if (verified.isEmpty) return;
    verified.sort((a, b) => b.date.compareTo(a.date));
    final front = _frontSpendingId;
    _moveIdToFront(verified, (e) => e.id, front);
    setState(() => _spending = verified);
  }

  Future<void> _saveSpendingNote(NgmySpendingEntry entry, String text) async {
    final trimmed = text.trim();
    final next = entry.copyWith(note: trimmed);
    final updated = _spending.map((e) => e.id == entry.id ? next : e).toList();
    setState(() {
      _spending = updated;
      if (trimmed.isEmpty) _noteFaceIds.remove(entry.id);
    });
    await NgmyHomeLocalStore.saveSpending(widget.userEmail, updated);
  }

  Future<void> _editSpendingNote(NgmySpendingEntry entry) async {
    final text = await showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      useSafeArea: false,
      backgroundColor: Colors.transparent,
      builder: (ctx) => _NgmyEditNoteSheet(
        initialText: entry.note,
        title: 'Card note',
        subtitle: entry.description.trim().isEmpty ? 'Private note for this card' : entry.description.trim(),
      ),
    );
    if (!mounted || text == null) return;
    await _saveSpendingNote(entry, text);
  }

  bool _medicineDueNow(NgmyMedicineEntry m, DateTime now) {
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
        body: ngmyMedicinePinBody(m),
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
        _noteFaceIds.remove(cardId);
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
        _noteFaceIds.remove(cardId);
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
    final frontId = _frontSpendingId;
    if (frontId != null && _noteFaceIds.contains(frontId)) {
      NgmySpendingEntry? entry;
      for (final e in _spending) {
        if (e.id == frontId) {
          entry = e;
          break;
        }
      }
      if (entry != null) {
        await _editSpendingNote(entry);
        return;
      }
    }
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
                hasCivicIdOnHome: _spending.any((e) => e.hasCivicId),
                profilePicturePath: widget.profilePicturePath,
                config: widget.config,
                onCivicIdPhotoSaved: widget.onCivicIdPhotoSaved,
                onDeckSettingsChanged: (auto, style) => _setDeckPrefs(autoPlay: auto, style: style),
              ),
            ),
          );
        },
      );
      if (result == null) return;
      final kind = result['kind'] ?? 'spending';
      if (kind == 'remove_civic_id') {
        final civicIds = _spending.where((e) => e.hasCivicId).map((e) => e.id).toList();
        if (civicIds.isEmpty) return;
        final ok = await showNgmyRoboticDeleteConfirm(context, title: 'Remove Civic Registry ID from home?');
        if (!ok || !mounted) return;
        setState(() => _spending = _spending.where((e) => !e.hasCivicId).toList());
        await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
        if (civicIds.contains(_frontSpendingId)) {
          await _setDeckPrefs(frontSpendingId: _spending.isNotEmpty ? _spending.first.id : '');
        }
        return;
      }
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
        // Keep at most one Civic Registry ID card on home.
        if (_spending.any((e) => e.hasCivicId)) {
          setState(() => _spending = _spending.where((e) => !e.hasCivicId).toList());
          await NgmyHomeLocalStore.saveSpending(widget.userEmail, _spending);
        }
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
  }

  Widget _modePillFor(NgmySpendingEntry entry) {
    final noteFace = _noteFaceIds.contains(entry.id);
    return GestureDetector(
      onTap: () => setState(() {
        if (noteFace) {
          _noteFaceIds.remove(entry.id);
        } else {
          _noteFaceIds.add(entry.id);
        }
      }),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 7),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(999),
          gradient: LinearGradient(
            colors: noteFace
                ? const [Color(0xFFF59E0B), Color(0xFFEC4899)]
                : const [Color(0xFFEF4444), Color(0xFFDC2626)],
          ),
          boxShadow: [
            BoxShadow(
              color: (noteFace ? const Color(0xFFEC4899) : const Color(0xFFEF4444)).withValues(alpha: 0.4),
              blurRadius: 12,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Icon(
          noteFace ? Icons.sticky_note_2_rounded : Icons.credit_card_rounded,
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

  /// Default home card — visible whenever the user has not added any spending cards.
  bool get _showInstallGuide => _spending.isEmpty;

  Widget _installGuideEmptyCard({required bool isDark, required String name}) {
    return SizedBox(
      height: 252,
      width: double.infinity,
      child: NgmyFrostedCard(
        dateLabel: ngmyHomeDateTabLabel(DateTime.now()),
        isFront: true,
        showDateTab: true,
        welcomeName: name,
        expandFace: true,
        accent: const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
        onAdd: _openAddSheet,
        child: NgmyHomeInstallGuideCard(isDark: isDark),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    if (!_loaded) return const SizedBox(height: 300);
    final name = _welcomeName;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        // Spending card stack — each card can flip to its own note via the bottom pill.
        Stack(
          clipBehavior: Clip.none,
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
              emptyBuilder: (ctx) => _installGuideEmptyCard(isDark: isDark, name: name),
              cardBuilder: (ctx, entry, {required isFront, required revealDates}) {
                final isCivic = entry.hasCivicId;
                final showNoteFace = isFront && _noteFaceIds.contains(entry.id);
                final card = NgmyFrostedCard(
                  dateLabel: ngmyHomeDateTabLabel(entry.date),
                  accent: showNoteFace
                      ? const [Color(0xFFF59E0B), Color(0xFFEC4899)]
                      : entry.hasImage
                          ? const [Color(0xFF111827), Color(0xFF1F2937)]
                          : isCivic
                              ? const [Color(0xFF0B1220), Color(0xFF1E3A5F)]
                              : entry.hasBusinessCard
                                  ? const [Color(0xFF0B1220), Color(0xFF1E1B4B)]
                                  : entry.isPassword
                                      ? const [Color(0xFFFBBF24), Color(0xFFEA580C)]
                                      : entry.hasPinnedEssentials && entry.amount <= 0
                                          ? entry.pinnedEssentialsKind.trim() == 'Medicines'
                                              ? const [Color(0xFF831843), Color(0xFFDB2777)]
                                              : const [Color(0xFF0B1220), Color(0xFF1E1B4B)]
                                          : entry.showsCreditFace
                                              ? ngmyMoneyCardAccent(entry)
                                              : const [Color(0xFF60A5FA), Color(0xFF8B5CF6)],
                  isFront: isFront,
                  showDateTab: revealDates,
                  welcomeName: isFront && !isCivic ? name : null,
                  onDelete: isFront && !isCivic ? () => _deleteSpending(entry.id) : null,
                  onAdd: isFront && !isCivic ? _openAddSheet : null,
                  footer: isFront && !entry.hideModePill ? _modePillFor(entry) : null,
                  fillBleed: showNoteFace ||
                      entry.hasImage ||
                      entry.showsCreditFace ||
                      entry.hasBusinessCard ||
                      isCivic ||
                      (entry.hasPinnedEssentials && entry.amount <= 0),
                  child: showNoteFace
                      ? _SpendingNoteCardBody(entry: entry, isFront: isFront)
                      : _SpendingCardContent(
                          entry: entry,
                          totalSpent: _totalSpent,
                          userEmail: widget.userEmail,
                          liveCivicRecord: widget.civicIdRecord,
                          profilePicturePath: widget.profilePicturePath,
                        ),
                );
                if (!isFront) return card;
                if (showNoteFace) {
                  return GestureDetector(
                    behavior: HitTestBehavior.translucent,
                    onTap: () {
                      if (_registerDoubleTap('sp_note_${entry.id}')) _editSpendingNote(entry);
                    },
                    child: card,
                  );
                }
                if (!entry.showsCreditFace) return card;
                return GestureDetector(
                  behavior: HitTestBehavior.translucent,
                  onTap: () {
                    if (_registerTripleTapFast(entry.id)) _editSpendingAmount(entry);
                  },
                  child: card,
                );
              },
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
                            _alarmHoldTitle.isEmpty ? 'Alarm due ? confirm to resume slides' : '$_alarmHoldTitle ? confirm seen',
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
  const _SpendingCardContent({
    required this.entry,
    required this.totalSpent,
    required this.userEmail,
    this.liveCivicRecord,
    this.profilePicturePath,
  });

  final NgmySpendingEntry entry;
  final double totalSpent;
  final String userEmail;
  final Map<String, dynamic>? liveCivicRecord;
  final String? profilePicturePath;

  @override
  Widget build(BuildContext context) {
    if (entry.hasImage) {
      return _ImageCardBody(imageBase64: entry.imageBase64);
    }
    if (entry.hasBusinessCard) {
      return _BusinessCardBody(json: entry.businessCardJson);
    }
    if (entry.hasCivicId) {
      return _CivicIdCardBody(
        json: entry.civicIdJson,
        liveRecord: liveCivicRecord,
        profilePicturePath: profilePicturePath,
      );
    }
    if (entry.isPassword) {
      return _PasswordCardBody(entry: entry);
    }
    if (entry.hasPinnedEssentials && entry.amount <= 0) {
      if (entry.pinnedEssentialsKind.trim() == 'Medicines') {
        return _PinnedMedicineCardBody(entry: entry, userEmail: userEmail);
      }
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
      filterQuality: FilterQuality.high,
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
        final renderedWidth = w * scale;
        return ColoredBox(
          color: const Color(0xFF0B1220),
          child: ClipRect(
            child: OverflowBox(
              maxWidth: renderedWidth,
              maxHeight: cardH * scale,
              alignment: Alignment.center,
              child: NgmyBusinessCardPreview(
                document: doc!,
                width: renderedWidth,
                interactive: false,
              ),
            ),
          ),
        );
      },
    );
  }
}

class _CivicIdCardBody extends StatelessWidget {
  const _CivicIdCardBody({
    required this.json,
    this.liveRecord,
    this.profilePicturePath,
  });

  final String json;
  final Map<String, dynamic>? liveRecord;
  final String? profilePicturePath;

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
    final live = liveRecord;
    if (live != null) {
      final rid = (record['registryId'] ?? '').toString().trim();
      final liveRid = (live['registryId'] ?? '').toString().trim();
      if (rid.isEmpty || rid == liveRid) {
        record = {...record, ...live, 'registryId': liveRid.isNotEmpty ? liveRid : rid};
      }
    }
    final photo = (ngmyCivicIdPhotoForRecord(
          record!,
          profilePicturePath: profilePicturePath,
          emailHint: (record['email'] ?? '').toString(),
        ) ??
        '')
        .trim();
    return LayoutBuilder(
      builder: (context, c) {
        const designW = 360.0;
        final designH = designW / 1.586;
        final renderScale = math.max(
          c.maxWidth / designW,
          c.maxHeight / designH,
        );
        // Cover the whole card face so left/right (and top/bottom) gutters disappear.
        return ColoredBox(
          color: const Color(0xFF0B1220),
          child: ClipRect(
            child: OverflowBox(
              maxWidth: designW * renderScale,
              maxHeight: designH * renderScale,
              alignment: Alignment.center,
              child: NgmyCivicRegistryIdCard(
                record: record!,
                photoPath: photo.isEmpty ? null : photo,
                scale: renderScale,
                onQrTap: () => showNgmyEnlargedCivicQrDialog(
                  context,
                  (record!['registryId'] ?? '').toString().trim(),
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
                    entry.passwordEmail.isEmpty ? '?' : entry.passwordEmail,
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
                              ? '?'
                              : (_show ? secret : '?' * math.min(secret.length.clamp(6, 14), 14)),
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

class _PinnedMedicineCardBody extends StatefulWidget {
  const _PinnedMedicineCardBody({required this.entry, required this.userEmail});

  final NgmySpendingEntry entry;
  final String userEmail;

  @override
  State<_PinnedMedicineCardBody> createState() => _PinnedMedicineCardBodyState();
}

class _PinnedMedicineCardBodyState extends State<_PinnedMedicineCardBody> {
  NgmyMedicineEntry? _medicine;
  bool _loading = true;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  Future<void> _load() async {
    final list = await ngmyExportMedicines(userEmail: widget.userEmail);
    if (!mounted) return;
    setState(() {
      _medicine = _medicineMatchingEntry(list, widget.entry);
      _loading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    const accent = Color(0xFFDB2777);
    const ink = Color(0xFF831843);
    const inkSoft = Color(0xFF9D174D);
    final m = _medicine;
    final title = widget.entry.description.trim().isEmpty ? 'Medicine' : widget.entry.description.trim();
    final bodyLines = widget.entry.pinnedNoteText.trim().split('\n').where((l) => l.trim().isNotEmpty).toList();
    final times = m == null
        ? _timesFromBody(bodyLines)
        : (m.reminderTimes.isNotEmpty ? m.reminderTimes : ngmyDefaultMedicineReminderTimes(m.timesPerDay));
    final dosage = m?.dosage.trim().isNotEmpty == true
        ? m!.dosage.trim()
        : _lineAfter(bodyLines, 'Dosage:').trim();
    final schedule = m?.schedule.trim().isNotEmpty == true
        ? m!.schedule.trim()
        : _lineAfter(bodyLines, 'Schedule:').trim();
    final category = m?.category.trim().isNotEmpty == true ? m!.category.trim() : _lineAfter(bodyLines, 'Category:').trim();
    final notes = m?.notes.trim().isNotEmpty == true ? m!.notes.trim() : _lineAfter(bodyLines, 'Notes:').trim();
    final timesPerDay = m?.timesPerDay ?? _timesPerDayFromBody(bodyLines);
    final remindersOn = m?.remindersEnabled ?? bodyLines.any((l) => l.toLowerCase().contains('reminders: on'));

    const topReserve = 68.0;
    const bottomBar = 30.0;
    const bottomClear = 14.0;

    return Stack(
      fit: StackFit.expand,
      children: [
        const DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: [Color(0xFFFFF1F7), Color(0xFFFCE7F3), Color(0xFFFBCFE8)],
            ),
          ),
        ),
        // Solid top band — nothing from the card shows behind Welcome back / date chips.
        const Positioned(
          top: 0,
          left: 0,
          right: 0,
          height: topReserve,
          child: DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [Color(0xFFFFF1F7), Color(0xFFFCE7F3)],
              ),
            ),
          ),
        ),
        Positioned(
          right: -8,
          bottom: bottomBar + 6,
          child: Icon(Icons.medication_liquid_rounded, size: 88, color: accent.withValues(alpha: 0.10)),
        ),
        Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          height: bottomBar,
          child: DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [accent.withValues(alpha: 0.75), accent]),
            ),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 14),
              child: Row(
                children: [
                  const Icon(Icons.local_pharmacy_rounded, color: Colors.white, size: 14),
                  const SizedBox(width: 6),
                  const Text('MEDICATION CARD', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1.2)),
                  const Spacer(),
                  if (category.isNotEmpty)
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.22),
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: Text(category.toUpperCase(), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 8, letterSpacing: 0.5)),
                    ),
                ],
              ),
            ),
          ),
        ),
        Padding(
          padding: EdgeInsets.fromLTRB(14, topReserve + 2, 14, bottomBar + bottomClear),
          child: _loading
              ? const Center(child: SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2, color: accent)))
              : Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Container(
                          width: 42,
                          height: 42,
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(12),
                            gradient: LinearGradient(colors: [accent, accent.withValues(alpha: 0.72)]),
                            boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 4))],
                          ),
                          child: const Icon(Icons.medication_rounded, color: Colors.white, size: 22),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(title, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 17, height: 1.15)),
                              const SizedBox(height: 3),
                              Text(
                                dosage.isEmpty ? 'Dosage not set' : dosage,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: TextStyle(color: inkSoft.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 12),
                              ),
                            ],
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),
                    Wrap(
                      spacing: 6,
                      runSpacing: 6,
                      children: [
                        _HomeMedChip(icon: Icons.repeat_rounded, label: '${timesPerDay}x / day'),
                        if (schedule.isNotEmpty) _HomeMedChip(icon: Icons.schedule_rounded, label: schedule),
                        _HomeMedChip(
                          icon: remindersOn ? Icons.notifications_active_rounded : Icons.notifications_off_rounded,
                          label: remindersOn ? 'Reminders on' : 'Reminders off',
                        ),
                      ],
                    ),
                    if (times.isNotEmpty) ...[
                      const SizedBox(height: 10),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.55),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: accent.withValues(alpha: 0.25)),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(Icons.access_time_filled_rounded, size: 16, color: accent.withValues(alpha: 0.85)),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(
                                times.map(ngmyFormatMedicineClock).join('  ·  '),
                                style: TextStyle(color: ink.withValues(alpha: 0.92), fontWeight: FontWeight.w800, fontSize: 12, height: 1.35),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                    if (notes.isNotEmpty) ...[
                      const SizedBox(height: 6),
                      Container(
                        width: double.infinity,
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                        decoration: BoxDecoration(
                          color: const Color(0xFFEC4899).withValues(alpha: 0.1),
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: const Color(0xFFEC4899).withValues(alpha: 0.28)),
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Icon(Icons.sticky_note_2_outlined, size: 15, color: inkSoft.withValues(alpha: 0.85)),
                            const SizedBox(width: 8),
                            Expanded(
                              child: Text(notes, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: inkSoft.withValues(alpha: 0.95), fontWeight: FontWeight.w600, fontSize: 11.5, height: 1.35)),
                            ),
                          ],
                        ),
                      ),
                    ],
                    const Spacer(flex: 1),
                    Padding(
                      padding: const EdgeInsets.only(bottom: 2),
                      child: Row(
                        children: [
                          Icon(Icons.push_pin_rounded, size: 13, color: accent.withValues(alpha: 0.85)),
                          const SizedBox(width: 5),
                          Expanded(
                            child: Text(
                              bodyLines.any((l) => l.toLowerCase().contains('time for your medicine')) ? 'Due now — take your dose' : 'Pinned from Medicines',
                              style: TextStyle(color: ink.withValues(alpha: 0.92), fontWeight: FontWeight.w800, fontSize: 11.5),
                            ),
                          ),
                          Text(
                            ngmyHomeDateTabLabel(widget.entry.date),
                            style: TextStyle(color: ink.withValues(alpha: 0.78), fontWeight: FontWeight.w800, fontSize: 10.5),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
        ),
      ],
    );
  }

  static String _lineAfter(List<String> lines, String prefix) {
    for (final l in lines) {
      if (l.startsWith(prefix)) return l.substring(prefix.length).trim();
    }
    return '';
  }

  static List<String> _timesFromBody(List<String> lines) {
    for (final l in lines) {
      if (l.startsWith('Times:')) {
        return l.substring(6).split('·').map((s) => s.trim()).where((s) => s.isNotEmpty).toList();
      }
    }
    return const [];
  }

  static int _timesPerDayFromBody(List<String> lines) {
    for (final l in lines) {
      final m = RegExp(r'(\d+)x per day', caseSensitive: false).firstMatch(l);
      if (m != null) return int.tryParse(m.group(1) ?? '') ?? 1;
    }
    return 1;
  }
}

class _HomeMedChip extends StatelessWidget {
  const _HomeMedChip({required this.icon, required this.label});

  final IconData icon;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      decoration: BoxDecoration(
        color: const Color(0xFFEC4899).withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: const Color(0xFFEC4899).withValues(alpha: 0.35)),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: 12, color: const Color(0xFFBE185D)),
          const SizedBox(width: 4),
          Text(label, style: const TextStyle(color: Color(0xFFBE185D), fontWeight: FontWeight.w800, fontSize: 10)),
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
    final amount = '-\$${entry.amount.toStringAsFixed(2)}';
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
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              const Spacer(),
              Text(
                amount,
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: ink,
                  fontWeight: FontWeight.w900,
                  fontSize: 34,
                  letterSpacing: 0.4,
                  height: 1.05,
                  shadows: [Shadow(color: Colors.black.withValues(alpha: 0.18), blurRadius: 8, offset: const Offset(0, 2))],
                ),
              ),
              const Spacer(),
            ],
          ),
        ),
        // TOTAL sits in the bottom corner (Welcome back stays top-left on the frost shell).
        Positioned(
          left: 14,
          bottom: 16,
          child: Text(
            'TOTAL  -\$${totalSpent.toStringAsFixed(2)}',
            style: TextStyle(
              color: ink.withValues(alpha: 0.78),
              fontWeight: FontWeight.w800,
              fontSize: 12,
              letterSpacing: 0.5,
              shadows: [Shadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 6, offset: const Offset(0, 1))],
            ),
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

      // Vertical monolith ? huge amount left, meta right
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

      // Script stack ? desc top, hairline, amount bottom-left
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

      // Facet frame ? amount inside bottom-right bordered panel
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

      // Tide bar ? amount sits on a frosted horizontal band
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

      // Tech ledger ? amount top-left, monospace feel, double rules
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

      // Emerald pill ? amount in a glowing pill mid-card
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

      // Frost center ? huge centered amount between thin rules
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

      // Aurora fan ? amount on right rail
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

      // Seal stamp ? circular amount badge top-right
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

      // Imperial banner ? amount inside top gold ribbon
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

      // Mirror split ? left copy, right amount column with rail
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

      // Prism panel ? amount in frosted bottom-right plate
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

      // Rose rail ? amount mid-left, dark rail right with meta
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

      // Noir ledger ? amount under double rule at top
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
        // Unique facet geometry per crystal card ? not the same cut twice.
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

class _SpendingNoteCardBody extends StatelessWidget {
  const _SpendingNoteCardBody({required this.entry, this.isFront = true});

  final NgmySpendingEntry entry;
  final bool isFront;

  @override
  Widget build(BuildContext context) {
    final text = entry.note.trim();
    return DecoratedBox(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFFDB2777)],
        ),
      ),
      child: Padding(
        padding: EdgeInsets.fromLTRB(16, isFront ? 54 : 20, isFront ? 52 : 16, isFront ? 52 : 20),
        child: text.isEmpty
            ? Center(
                child: Text(
                  'No note yet — tap + to write one',
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.82),
                    fontWeight: FontWeight.w700,
                    fontSize: 14,
                    height: 1.35,
                  ),
                ),
              )
            : Align(
                alignment: Alignment.topLeft,
                child: Text(
                  text,
                  maxLines: 14,
                  overflow: TextOverflow.ellipsis,
                  textAlign: TextAlign.left,
                  style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, height: 1.4, color: Colors.white),
                ),
              ),
      ),
    );
  }
}

// ?? Add sheets ???????????????????????????????????????????????????????????

class _NgmyAddSpendingSheet extends StatefulWidget {
  const _NgmyAddSpendingSheet({
    required this.userEmail,
    required this.autoPlay,
    required this.slideStyle,
    required this.onDeckSettingsChanged,
    this.civicIdRecord,
    this.hasCivicIdOnHome = false,
    this.profilePicturePath,
    this.config,
    this.onCivicIdPhotoSaved,
  });

  final String userEmail;
  final bool autoPlay;
  final NgmyHomeCardSlideStyle slideStyle;
  final Future<void> Function(bool autoPlay, NgmyHomeCardSlideStyle style) onDeckSettingsChanged;
  final Map<String, dynamic>? civicIdRecord;
  final bool hasCivicIdOnHome;
  final String? profilePicturePath;
  final dynamic config;
  final Future<void> Function()? onCivicIdPhotoSaved;

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
        const SnackBar(content: Text('No business cards yet ? create one in Business Card Studio first.')),
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

  Future<void> _pickCivicId() async {
    if (widget.hasCivicIdOnHome) {
      if (!mounted) return;
      Navigator.pop(context, {'kind': 'remove_civic_id'});
      return;
    }
    var record = widget.civicIdRecord == null ? null : Map<String, dynamic>.from(widget.civicIdRecord!);
    if (record == null || record.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('No Civic Registry ID on this account yet. Enroll in Civic Registry first.')),
      );
      return;
    }
    // Reuse Civic Registry ID photo or the account profile picture ? no second upload needed.
    var photo = (ngmyCivicIdPhotoForRecord(record, profilePicturePath: widget.profilePicturePath, emailHint: widget.userEmail) ?? '').trim();
    if (photo.isEmpty) {
      if (widget.config == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Add your Civic Registry ID photo first, then try again.')),
        );
        return;
      }
      await showNgmyCivicIdPhotoSheet(
        context,
        config: widget.config,
        email: widget.userEmail,
        skippable: false,
        onSaved: () async {
          await widget.onCivicIdPhotoSaved?.call();
        },
      );
      if (!mounted) return;
      final refreshed = NgmyCivicRegistryMembers.findByEmail(widget.config, widget.userEmail) ??
          NgmyCivicRegistryMembers.findByRegistryId(
            widget.config,
            (record['registryId'] ?? '').toString(),
          );
      if (refreshed == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Could not find your Civic Registry ID after saving the photo.')),
        );
        return;
      }
      record = Map<String, dynamic>.from(refreshed);
      await ngmyLoadCivicIdPhotoLocal(widget.userEmail);
      photo = (ngmyCivicIdPhotoForRecord(record, profilePicturePath: widget.profilePicturePath, emailHint: widget.userEmail) ?? '').trim();
      if (photo.isEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Add an ID photo first, then you can pin your Civic Registry ID.')),
        );
        return;
      }
    }
    // Persist a lean Civic ID snapshot. ngmyEnsureCivicIdPhotoLocal now
    // returns a durable cloud URL when one exists (uploaded when the ID
    // photo was first added) — use that directly instead of always
    // forcing the device-local token, which made the pinned home card
    // depend on this exact device's cache even when a real URL was
    // already available and would have worked on any device.
    final lean = Map<String, dynamic>.from(record);
    if (photo.isNotEmpty) {
      lean['idPhotoPath'] = await ngmyEnsureCivicIdPhotoLocal(widget.userEmail, photo);
    } else {
      lean['idPhotoPath'] = kNgmyCivicIdPhotoLocalToken;
    }
    final name = (lean['fullName'] ?? lean['registryId'] ?? 'Civic Registry ID').toString().trim();
    if (!mounted) return;
    Navigator.pop(context, {
      'kind': 'civic_id',
      'civicIdJson': jsonEncode(lean),
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
                      padding: const EdgeInsets.fromLTRB(18, 16, 10, 12),
                      child: Row(
                        children: [
                          Icon(Icons.credit_card_rounded, size: 22, color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFA78BFA), t)),
                          const SizedBox(width: 10),
                          Expanded(
                            child: Text(
                              'LOG SPENDING',
                              style: TextStyle(
                                fontSize: 13,
                                fontWeight: FontWeight.w900,
                                letterSpacing: 2.0,
                                color: Color.lerp(const Color(0xFF67E8F9), const Color(0xFFA78BFA), t),
                              ),
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
                                  ? 'Essentials vault ? pinned ?'
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
                              icon: widget.hasCivicIdOnHome ? Icons.remove_circle_outline_rounded : Icons.badge_outlined,
                              label: widget.hasCivicIdOnHome
                                  ? 'Remove Civic Registry ID from home'
                                  : 'Add Civic Registry ID to home',
                              onTap: _pickCivicId,
                              t: t,
                              phase: 3,
                              accent: widget.hasCivicIdOnHome
                                  ? const [Color(0xFFF87171), Color(0xFFDC2626)]
                                  : const [Color(0xFF0EA5E9), Color(0xFF1D4ED8)],
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
                                  Text('Gold ? Crystal ? Rose ? Diamond', style: TextStyle(fontSize: 11, color: muted.withValues(alpha: 0.85), fontWeight: FontWeight.w600)),
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

class _NgmyEditNoteSheet extends StatefulWidget {
  const _NgmyEditNoteSheet({
    this.initialText = '',
    this.title = 'New note',
    this.subtitle = 'Stays on this card only',
  });

  final String initialText;
  final String title;
  final String subtitle;

  @override
  State<_NgmyEditNoteSheet> createState() => _NgmyEditNoteSheetState();
}

class _NgmyEditNoteSheetState extends State<_NgmyEditNoteSheet> {
  late final TextEditingController _textC;

  @override
  void initState() {
    super.initState();
    _textC = TextEditingController(text: widget.initialText);
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
    final surface = isDark ? const Color(0xFF0F172A) : Colors.white;
    final fieldBg = isDark ? const Color(0xFF1E293B) : const Color(0xFFF1F5F9);
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
            constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.78),
            decoration: BoxDecoration(
              color: surface,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
              border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
              boxShadow: [
                BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.45 : 0.12), blurRadius: 32, offset: const Offset(0, -10)),
              ],
            ),
            clipBehavior: Clip.antiAlias,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Container(
                  height: 4,
                  decoration: const BoxDecoration(
                    gradient: LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEC4899), Color(0xFFDB2777)]),
                  ),
                ),
                Flexible(
                  child: SingleChildScrollView(
                    keyboardDismissBehavior: ScrollViewKeyboardDismissBehavior.onDrag,
                    padding: const EdgeInsets.fromLTRB(20, 16, 20, 20),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        Center(
                          child: Container(
                            width: 36,
                            height: 4,
                            decoration: BoxDecoration(
                              color: muted.withValues(alpha: 0.28),
                              borderRadius: BorderRadius.circular(99),
                            ),
                          ),
                        ),
                        const SizedBox(height: 18),
                        Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Container(
                              width: 44,
                              height: 44,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(14),
                                gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFEC4899)]),
                                boxShadow: [
                                  BoxShadow(color: const Color(0xFFEC4899).withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4)),
                                ],
                              ),
                              child: const Icon(Icons.sticky_note_2_rounded, color: Colors.white, size: 22),
                            ),
                            const SizedBox(width: 14),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(widget.title, style: TextStyle(fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: -0.3, color: ink)),
                                  const SizedBox(height: 3),
                                  Text(
                                    widget.subtitle,
                                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: muted),
                                    maxLines: 2,
                                    overflow: TextOverflow.ellipsis,
                                  ),
                                ],
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 20),
                        TextField(
                          controller: _textC,
                          autofocus: true,
                          maxLines: 8,
                          minLines: 6,
                          scrollPadding: const EdgeInsets.only(bottom: 120),
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w600, height: 1.45, color: ink),
                          decoration: InputDecoration(
                            hintText: 'Write a private note for this card…',
                            hintStyle: TextStyle(color: muted.withValues(alpha: 0.85), fontWeight: FontWeight.w500),
                            filled: true,
                            fillColor: fieldBg,
                            contentPadding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(18),
                              borderSide: BorderSide.none,
                            ),
                            enabledBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(18),
                              borderSide: BorderSide(color: muted.withValues(alpha: 0.12)),
                            ),
                            focusedBorder: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(18),
                              borderSide: const BorderSide(color: Color(0xFFEC4899), width: 1.6),
                            ),
                          ),
                        ),
                        const SizedBox(height: 18),
                        Row(
                          children: [
                            Expanded(
                              child: OutlinedButton(
                                onPressed: () => Navigator.pop(context),
                                style: OutlinedButton.styleFrom(
                                  foregroundColor: muted,
                                  side: BorderSide(color: muted.withValues(alpha: 0.25)),
                                  minimumSize: const Size(0, 50),
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                ),
                                child: const Text('Cancel', style: TextStyle(fontWeight: FontWeight.w800)),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              flex: 2,
                              child: FilledButton(
                                onPressed: () => Navigator.pop(context, _textC.text),
                                style: FilledButton.styleFrom(
                                  backgroundColor: const Color(0xFFEC4899),
                                  foregroundColor: Colors.white,
                                  minimumSize: const Size(0, 50),
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),
                                  elevation: 0,
                                ),
                                child: const Text('Save note', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15)),
                              ),
                            ),
                          ],
                        ),
                      ],
                    ),
                  ),
                ),
                SafeArea(top: false, child: const SizedBox(height: 0)),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// Shared NGMY mark used in Log spending + remove-card confirm.
class _SpendEditResult {
  const _SpendEditResult({
    required this.amount,
    required this.description,
    required this.merchant,
    required this.items,
  });
  final double amount;
  final String description;
  final String merchant;
  final List<NgmyReceiptItem> items;
}

class _SpendReceiptPopup extends StatefulWidget {
  const _SpendReceiptPopup({required this.entry});
  final NgmySpendingEntry entry;

  @override
  State<_SpendReceiptPopup> createState() => _SpendReceiptPopupState();
}

class _SpendReceiptPopupState extends State<_SpendReceiptPopup> with SingleTickerProviderStateMixin {
  late final TextEditingController _merchant;
  late final TextEditingController _itemName;
  late final TextEditingController _itemPrice;
  late final TextEditingController _itemQty;
  late List<NgmyReceiptItem> _items;
  late final AnimationController _reveal;

  @override
  void initState() {
    super.initState();
    final e = widget.entry;
    _merchant = TextEditingController(
      text: e.receiptMerchant.trim().isNotEmpty
          ? e.receiptMerchant.trim()
          : (e.description.trim().isNotEmpty ? e.description.trim() : ''),
    );
    _itemName = TextEditingController();
    _itemPrice = TextEditingController();
    _itemQty = TextEditingController(text: '1');
    _items = List<NgmyReceiptItem>.from(e.receiptItems);
    if (_items.isEmpty && e.amount > 0) {
      _items = [
        NgmyReceiptItem(
          name: e.description.trim().isEmpty ? 'Item' : e.description.trim(),
          price: e.amount,
          qty: 1,
        ),
      ];
    }
    // The receipt visually "prints out" from underneath the green tab —
    // the tab pops in first, then the card unrolls downward from it.
    _reveal = AnimationController(vsync: this, duration: const Duration(milliseconds: 640))..forward();
  }

  @override
  void dispose() {
    _merchant.dispose();
    _itemName.dispose();
    _itemPrice.dispose();
    _itemQty.dispose();
    _reveal.dispose();
    super.dispose();
  }

  static double _seg(double t, double a, double b) => ((t - a) / (b - a)).clamp(0.0, 1.0);

  double get _total => _items.fold(0.0, (a, b) => a + b.lineTotal);

  void _addItem() {
    final name = _itemName.text.trim();
    final price = double.tryParse(_itemPrice.text.trim().replaceAll('\$', '')) ?? 0;
    final qty = int.tryParse(_itemQty.text.trim()) ?? 1;
    if (name.isEmpty || price <= 0) return;
    setState(() {
      _items = [..._items, NgmyReceiptItem(name: name, price: price, qty: qty.clamp(1, 999))];
      _itemName.clear();
      _itemPrice.clear();
      _itemQty.text = '1';
    });
  }

  void _save() {
    if (_items.isEmpty || _total <= 0) return;
    final merchant = _merchant.text.trim().isEmpty ? 'Store' : _merchant.text.trim();
    Navigator.pop(
      context,
      _SpendEditResult(
        amount: _total,
        description: merchant,
        merchant: merchant,
        items: List<NgmyReceiptItem>.from(_items),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final bottomInset = MediaQuery.viewInsetsOf(context).bottom;
    const ink = Color(0xFF15181D);
    const muted = Color(0xFF8B93A1);
    const green1 = Color(0xFF16A34A);
    const green2 = Color(0xFF22C55E);
    final when = DateTime.now();
    final stamp =
        '${when.year}-${when.month.toString().padLeft(2, '0')}-${when.day.toString().padLeft(2, '0')}  ${when.hour.toString().padLeft(2, '0')}:${when.minute.toString().padLeft(2, '0')}';

    return AnimatedPadding(
      duration: const Duration(milliseconds: 180),
      padding: EdgeInsets.only(bottom: bottomInset > 0 ? bottomInset * 0.35 : 0),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 340, maxHeight: 600),
          child: Material(
            color: Colors.transparent,
            child: AnimatedBuilder(
              animation: _reveal,
              builder: (context, _) {
                final t = _reveal.value;
                final tabIn = Curves.easeOutBack.transform(_seg(t, 0.0, 0.4));
                final cardReveal = Curves.easeOutCubic.transform(_seg(t, 0.16, 1.0));
                final cardFade = Curves.easeOut.transform(_seg(t, 0.2, 0.6));
                return Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    // The green tab the receipt "prints out of".
                    Transform.scale(
                      alignment: Alignment.topCenter,
                      scale: 0.72 + tabIn.clamp(0.0, 1.0) * 0.28,
                      child: Opacity(
                        opacity: tabIn.clamp(0.0, 1.0),
                        child: Container(
                          height: 28,
                          margin: const EdgeInsets.symmetric(horizontal: 20),
                          decoration: const BoxDecoration(
                            gradient: LinearGradient(colors: [green1, green2]),
                            borderRadius: BorderRadius.vertical(top: Radius.circular(14)),
                          ),
                        ),
                      ),
                    ),
                    ClipRect(
                      child: Align(
                        alignment: Alignment.topCenter,
                        heightFactor: cardReveal.clamp(0.03, 1.0),
                        child: Opacity(
                          opacity: cardFade.clamp(0.0, 1.0),
                          child: Container(
                            width: double.infinity,
                            decoration: BoxDecoration(
                              color: const Color(0xFFFFFEFB),
                              borderRadius: BorderRadius.circular(20),
                              boxShadow: [
                                BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 30, offset: const Offset(0, 16)),
                              ],
                            ),
                            clipBehavior: Clip.antiAlias,
                            child: Stack(
                              children: [
                                SingleChildScrollView(
                                  padding: const EdgeInsets.fromLTRB(20, 22, 20, 16),
                                  child: Column(
                                    crossAxisAlignment: CrossAxisAlignment.stretch,
                                    children: [
                                      TextField(
                                        controller: _merchant,
                                        style: const TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 25, letterSpacing: -0.3, height: 1.15),
                                        decoration: const InputDecoration(
                                          isDense: true,
                                          border: InputBorder.none,
                                          contentPadding: EdgeInsets.only(right: 26),
                                          hintText: 'Store name',
                                          hintStyle: TextStyle(color: muted, fontWeight: FontWeight.w800),
                                        ),
                                      ),
                                      const SizedBox(height: 3),
                                      Text(stamp, style: const TextStyle(color: muted, fontSize: 11, fontWeight: FontWeight.w600)),
                                      const SizedBox(height: 16),
                                      Container(
                                        padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
                                        decoration: BoxDecoration(
                                          color: const Color(0xFFF5F4EF),
                                          borderRadius: BorderRadius.circular(16),
                                        ),
                                        child: DefaultTextStyle(
                                          style: const TextStyle(color: ink, fontFamily: 'Courier', fontFamilyFallback: ['Courier New', 'monospace'], decoration: TextDecoration.none),
                                          child: Column(
                                            crossAxisAlignment: CrossAxisAlignment.stretch,
                                            children: [
                                              const Row(
                                                children: [
                                                  Expanded(child: Text('ITEM', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.6))),
                                                  SizedBox(width: 34, child: Text('QTY', textAlign: TextAlign.center, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.6))),
                                                  SizedBox(width: 62, child: Text('AMT', textAlign: TextAlign.right, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 0.6))),
                                                  SizedBox(width: 20),
                                                ],
                                              ),
                                              const Padding(padding: EdgeInsets.symmetric(vertical: 6), child: _DottedRule()),
                                              if (_items.isEmpty)
                                                const Padding(
                                                  padding: EdgeInsets.symmetric(vertical: 14),
                                                  child: Text('No items yet', textAlign: TextAlign.center, style: TextStyle(color: muted, fontSize: 12)),
                                                )
                                              else
                                                ..._items.asMap().entries.map((e) {
                                                  final i = e.key;
                                                  final item = e.value;
                                                  return Padding(
                                                    padding: const EdgeInsets.only(bottom: 6),
                                                    child: Row(
                                                      crossAxisAlignment: CrossAxisAlignment.start,
                                                      children: [
                                                        Expanded(
                                                          child: Text(
                                                            item.name.toUpperCase(),
                                                            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12, height: 1.2),
                                                          ),
                                                        ),
                                                        SizedBox(
                                                          width: 34,
                                                          child: Text('${item.qty}', textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
                                                        ),
                                                        SizedBox(
                                                          width: 62,
                                                          child: Text(
                                                            item.lineTotal.toStringAsFixed(2),
                                                            textAlign: TextAlign.right,
                                                            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12),
                                                          ),
                                                        ),
                                                        SizedBox(
                                                          width: 20,
                                                          child: InkWell(
                                                            onTap: () => setState(() => _items = [..._items]..removeAt(i)),
                                                            child: const Icon(Icons.close, size: 14, color: muted),
                                                          ),
                                                        ),
                                                      ],
                                                    ),
                                                  );
                                                }),
                                              const Padding(padding: EdgeInsets.symmetric(vertical: 6), child: _DottedRule()),
                                              const SizedBox(height: 2),
                                              Text('Add item', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 11, color: muted.withValues(alpha: 0.9))),
                                              const SizedBox(height: 4),
                                              Row(
                                                children: [
                                                  Expanded(
                                                    flex: 4,
                                                    child: TextField(
                                                      controller: _itemName,
                                                      style: const TextStyle(color: ink, fontWeight: FontWeight.w700, fontSize: 12, fontFamily: 'Courier'),
                                                      decoration: InputDecoration(
                                                        isDense: true,
                                                        hintText: 'What did you buy?',
                                                        hintStyle: const TextStyle(color: muted, fontSize: 11),
                                                        contentPadding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
                                                        filled: true,
                                                        fillColor: Colors.white,
                                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
                                                      ),
                                                    ),
                                                  ),
                                                  const SizedBox(width: 6),
                                                  SizedBox(
                                                    width: 42,
                                                    child: TextField(
                                                      controller: _itemQty,
                                                      keyboardType: TextInputType.number,
                                                      textAlign: TextAlign.center,
                                                      style: const TextStyle(color: ink, fontWeight: FontWeight.w700, fontSize: 12, fontFamily: 'Courier'),
                                                      decoration: InputDecoration(
                                                        isDense: true,
                                                        hintText: '#',
                                                        contentPadding: const EdgeInsets.symmetric(horizontal: 4, vertical: 8),
                                                        filled: true,
                                                        fillColor: Colors.white,
                                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
                                                      ),
                                                    ),
                                                  ),
                                                  const SizedBox(width: 6),
                                                  SizedBox(
                                                    width: 70,
                                                    child: TextField(
                                                      controller: _itemPrice,
                                                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                                                      style: const TextStyle(color: ink, fontWeight: FontWeight.w700, fontSize: 12, fontFamily: 'Courier'),
                                                      decoration: InputDecoration(
                                                        isDense: true,
                                                        hintText: '0.00',
                                                        contentPadding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
                                                        filled: true,
                                                        fillColor: Colors.white,
                                                        border: OutlineInputBorder(borderRadius: BorderRadius.circular(10), borderSide: BorderSide.none),
                                                      ),
                                                    ),
                                                  ),
                                                ],
                                              ),
                                              const SizedBox(height: 8),
                                              OutlinedButton(
                                                onPressed: _addItem,
                                                style: OutlinedButton.styleFrom(
                                                  foregroundColor: ink,
                                                  side: const BorderSide(color: Color(0xFFD8D5CC)),
                                                  minimumSize: const Size(0, 34),
                                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10)),
                                                ),
                                                child: const Text('+ ADD LINE', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 0.8)),
                                              ),
                                            ],
                                          ),
                                        ),
                                      ),
                                      const SizedBox(height: 16),
                                      Row(
                                        crossAxisAlignment: CrossAxisAlignment.center,
                                        children: [
                                          const Text('TOTAL', style: TextStyle(color: ink, fontWeight: FontWeight.w900, fontSize: 14, letterSpacing: 0.4)),
                                          const Spacer(),
                                          GestureDetector(
                                            onTap: _items.isEmpty ? null : _save,
                                            child: AnimatedOpacity(
                                              opacity: _items.isEmpty ? 0.45 : 1,
                                              duration: const Duration(milliseconds: 150),
                                              child: Container(
                                                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                                                decoration: BoxDecoration(
                                                  gradient: const LinearGradient(colors: [green1, green2]),
                                                  borderRadius: BorderRadius.circular(22),
                                                  boxShadow: [BoxShadow(color: green2.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 6))],
                                                ),
                                                child: Row(
                                                  mainAxisSize: MainAxisSize.min,
                                                  children: [
                                                    Text('SAVE \$${_total.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
                                                    const SizedBox(width: 4),
                                                    const Icon(Icons.arrow_upward_rounded, color: Colors.white, size: 15),
                                                  ],
                                                ),
                                              ),
                                            ),
                                          ),
                                        ],
                                      ),
                                      const SizedBox(height: 8),
                                      const Text('Every purchase, tracked automatically.', style: TextStyle(color: muted, fontSize: 11.5, fontWeight: FontWeight.w600)),
                                    ],
                                  ),
                                ),
                                Positioned(
                                  top: 8,
                                  right: 8,
                                  child: Material(
                                    color: Colors.transparent,
                                    child: InkWell(
                                      customBorder: const CircleBorder(),
                                      onTap: () => Navigator.pop(context),
                                      child: Container(
                                        padding: const EdgeInsets.all(6),
                                        decoration: BoxDecoration(color: const Color(0xFFF0EFE9), shape: BoxShape.circle),
                                        child: const Icon(Icons.close_rounded, size: 16, color: muted),
                                      ),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
      ),
    );
  }
}

/// A row of small dots — the "torn ticket" separator look between receipt
/// sections, instead of a plain solid divider line.
class _DottedRule extends StatelessWidget {
  const _DottedRule();

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        const dotSize = 3.0;
        const gap = 4.0;
        final count = (constraints.maxWidth / (dotSize + gap)).floor().clamp(1, 999);
        return SizedBox(
          height: dotSize,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: List.generate(
              count,
              (_) => Container(width: dotSize, height: dotSize, decoration: const BoxDecoration(color: Color(0xFFD8D5CC), shape: BoxShape.circle)),
            ),
          ),
        );
      },
    );
  }
}
