import 'dart:convert';

/// Restaurant / business menu document for NGMY Menu Studio.
class NgmyMenuDocument {
  NgmyMenuDocument({
    required this.id,
    this.restaurantName = 'My Restaurant',
    this.tagline = 'Fresh food · Great taste',
    this.templateId = 'gold_luxe',
    this.sections = const [],
    this.slug = '',
    this.publicUrl = '',
    this.status = 'draft',
    this.qrStyle = const NgmyMenuQrStyle(),
    DateTime? updatedAt,
  }) : updatedAt = updatedAt ?? DateTime.now();

  final String id;
  String restaurantName;
  String tagline;
  String templateId;
  List<NgmyMenuSection> sections;
  String slug;
  String publicUrl;
  String status;
  NgmyMenuQrStyle qrStyle;
  DateTime updatedAt;

  bool get isPublished => status == 'published' && slug.isNotEmpty;

  Map<String, dynamic> toJson() => {
        'id': id,
        'restaurantName': restaurantName,
        'tagline': tagline,
        'templateId': templateId,
        'sections': sections.map((s) => s.toJson()).toList(),
        'slug': slug,
        'publicUrl': publicUrl,
        'status': status,
        'qrStyle': qrStyle.toJson(),
        'updatedAt': updatedAt.toUtc().toIso8601String(),
      };

  factory NgmyMenuDocument.fromJson(Map<String, dynamic> json) => NgmyMenuDocument(
        id: (json['id'] ?? '').toString(),
        restaurantName: (json['restaurantName'] ?? 'My Restaurant').toString(),
        tagline: (json['tagline'] ?? '').toString(),
        templateId: (json['templateId'] ?? 'gold_luxe').toString(),
        sections: (json['sections'] as List?)
                ?.map((e) => NgmyMenuSection.fromJson(Map<String, dynamic>.from(e as Map)))
                .toList() ??
            [],
        slug: (json['slug'] ?? '').toString(),
        publicUrl: (json['publicUrl'] ?? '').toString(),
        status: (json['status'] ?? 'draft').toString(),
        qrStyle: NgmyMenuQrStyle.fromJson(json['qrStyle'] is Map ? Map<String, dynamic>.from(json['qrStyle'] as Map) : null),
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      );

  NgmyMenuDocument copy() => NgmyMenuDocument.fromJson(toJson());

  static String encodeList(List<NgmyMenuDocument> docs) => jsonEncode(docs.map((d) => d.toJson()).toList());

  static List<NgmyMenuDocument> decodeList(String raw) {
    if (raw.trim().isEmpty) return [];
    final decoded = jsonDecode(raw);
    if (decoded is! List) return [];
    return decoded.map((e) => NgmyMenuDocument.fromJson(Map<String, dynamic>.from(e as Map))).toList();
  }
}

class NgmyMenuSection {
  NgmyMenuSection({required this.title, this.items = const []});

  String title;
  List<NgmyMenuItem> items;

  Map<String, dynamic> toJson() => {
        'title': title,
        'items': items.map((i) => i.toJson()).toList(),
      };

  factory NgmyMenuSection.fromJson(Map<String, dynamic> json) => NgmyMenuSection(
        title: (json['title'] ?? 'Section').toString(),
        items: (json['items'] as List?)
                ?.map((e) => NgmyMenuItem.fromJson(Map<String, dynamic>.from(e as Map)))
                .toList() ??
            [],
      );
}

class NgmyMenuItem {
  NgmyMenuItem({required this.name, this.description = '', this.price = ''});

  String name;
  String description;
  String price;

  Map<String, dynamic> toJson() => {'name': name, 'description': description, 'price': price};

  factory NgmyMenuItem.fromJson(Map<String, dynamic> json) => NgmyMenuItem(
        name: (json['name'] ?? '').toString(),
        description: (json['description'] ?? '').toString(),
        price: (json['price'] ?? '').toString(),
      );
}

/// Customizable QR styling for published menus.
class NgmyMenuQrStyle {
  const NgmyMenuQrStyle({
    this.foreground = 0xFF0F172A,
    this.background = 0xFFFFFFFF,
    this.accent = 0xFFB8860B,
    this.eyeShape = 'circle',
    this.moduleShape = 'circle',
    this.cornerStyle = 'ring',
    this.centerLabel = '',
    this.showCenterLogo = true,
  });

  final int foreground;
  final int background;
  final int accent;
  final String eyeShape;
  final String moduleShape;
  final String cornerStyle;
  final String centerLabel;
  final bool showCenterLogo;

  Map<String, dynamic> toJson() => {
        'foreground': foreground,
        'background': background,
        'accent': accent,
        'eyeShape': eyeShape,
        'moduleShape': moduleShape,
        'cornerStyle': cornerStyle,
        'centerLabel': centerLabel,
        'showCenterLogo': showCenterLogo,
      };

  factory NgmyMenuQrStyle.fromJson(Map<String, dynamic>? json) {
    if (json == null) return const NgmyMenuQrStyle();
    return NgmyMenuQrStyle(
      foreground: _intColor(json['foreground'], 0xFF0F172A),
      background: _intColor(json['background'], 0xFFFFFFFF),
      accent: _intColor(json['accent'], 0xFFB8860B),
      eyeShape: (json['eyeShape'] ?? 'circle').toString(),
      moduleShape: (json['moduleShape'] ?? 'circle').toString(),
      cornerStyle: (json['cornerStyle'] ?? 'ring').toString(),
      centerLabel: (json['centerLabel'] ?? '').toString(),
      showCenterLogo: json['showCenterLogo'] != false,
    );
  }

  NgmyMenuQrStyle copyWith({
    int? foreground,
    int? background,
    int? accent,
    String? eyeShape,
    String? moduleShape,
    String? cornerStyle,
    String? centerLabel,
    bool? showCenterLogo,
  }) =>
      NgmyMenuQrStyle(
        foreground: foreground ?? this.foreground,
        background: background ?? this.background,
        accent: accent ?? this.accent,
        eyeShape: eyeShape ?? this.eyeShape,
        moduleShape: moduleShape ?? this.moduleShape,
        cornerStyle: cornerStyle ?? this.cornerStyle,
        centerLabel: centerLabel ?? this.centerLabel,
        showCenterLogo: showCenterLogo ?? this.showCenterLogo,
      );

  static int _intColor(dynamic v, int fallback) {
    if (v is int) return v;
    if (v is num) return v.toInt();
    return fallback;
  }
}

String ngmyMenuNewId() => DateTime.now().microsecondsSinceEpoch.toString();

String ngmyMenuSlugify(String name) {
  var s = name.trim().toLowerCase();
  s = s.replaceAll(RegExp(r'[^a-z0-9\s-]'), '');
  s = s.replaceAll(RegExp(r'\s+'), '-');
  s = s.replaceAll(RegExp(r'-+'), '-');
  return s.length > 48 ? s.substring(0, 48) : s;
}

NgmyMenuDocument ngmyMenuSampleDocument() => NgmyMenuDocument(
      id: ngmyMenuNewId(),
      restaurantName: 'McDonald\'s',
      tagline: 'I\'m lovin\' it',
      templateId: 'gold_luxe',
      sections: [
        NgmyMenuSection(
          title: 'Burgers',
          items: [
            NgmyMenuItem(name: 'Big Mac', description: 'Two all-beef patties, special sauce', price: '\$7.99'),
            NgmyMenuItem(name: 'Quarter Pounder', description: 'Fresh beef, melted cheese', price: '\$6.49'),
          ],
        ),
        NgmyMenuSection(
          title: 'Drinks',
          items: [
            NgmyMenuItem(name: 'Coca-Cola', description: 'Medium fountain drink', price: '\$2.19'),
            NgmyMenuItem(name: 'McFlurry', description: 'Oreo or M&M\'s', price: '\$4.29'),
          ],
        ),
      ],
    );
