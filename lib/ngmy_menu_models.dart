import 'dart:convert';

import 'package:flutter/material.dart';

/// Background behind the menu when guests open the public link.
class NgmyMenuPageBackgroundOption {
  const NgmyMenuPageBackgroundOption({required this.id, required this.label, required this.color});

  final String id;
  final String label;
  final Color color;
}

const List<NgmyMenuPageBackgroundOption> kNgmyMenuPageBackgrounds = [
  NgmyMenuPageBackgroundOption(id: 'white', label: 'White', color: Color(0xFFFFFFFF)),
  NgmyMenuPageBackgroundOption(id: 'cream', label: 'Cream', color: Color(0xFFFAF7F2)),
  NgmyMenuPageBackgroundOption(id: 'mist', label: 'Soft gray', color: Color(0xFFF1F5F9)),
];

Color ngmyMenuPageBackgroundColor(String id) {
  return kNgmyMenuPageBackgrounds
      .firstWhere((o) => o.id == id, orElse: () => kNgmyMenuPageBackgrounds.first)
      .color;
}

const int kNgmyMenuMaxPages = 10;

/// One swipeable menu inside a published link (e.g. Lunch, Drinks).
class NgmyMenuPage {
  NgmyMenuPage({
    required this.id,
    this.title = 'Menu',
    this.tagline = '',
    this.templateId = '',
    this.sections = const [],
  });

  String id;
  String title;
  String tagline;
  /// Empty uses the document's [NgmyMenuDocument.templateId].
  String templateId;
  List<NgmyMenuSection> sections;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'tagline': tagline,
        'templateId': templateId,
        'sections': sections.map((s) => s.toJson()).toList(),
      };

  factory NgmyMenuPage.fromJson(Map<String, dynamic> json) => NgmyMenuPage(
        id: (json['id'] ?? ngmyMenuNewId()).toString(),
        title: (json['title'] ?? 'Menu').toString(),
        tagline: (json['tagline'] ?? '').toString(),
        templateId: (json['templateId'] ?? '').toString(),
        sections: (json['sections'] as List?)
                ?.map((e) => NgmyMenuSection.fromJson(Map<String, dynamic>.from(e as Map)))
                .toList() ??
            [],
      );

  NgmyMenuPage copy() => NgmyMenuPage.fromJson(toJson());
}

/// Optional social + website links shown at the bottom of guest menus.
class NgmyMenuSocialLinks {
  const NgmyMenuSocialLinks({
    this.instagram = '',
    this.facebook = '',
    this.youtube = '',
    this.website = '',
  });

  final String instagram;
  final String facebook;
  final String youtube;
  final String website;

  bool get hasSocial => instagram.trim().isNotEmpty || facebook.trim().isNotEmpty || youtube.trim().isNotEmpty;

  bool get hasWebsite => website.trim().isNotEmpty;

  bool get hasAny => hasSocial || hasWebsite;

  Map<String, dynamic> toJson() => {
        'instagram': instagram,
        'facebook': facebook,
        'youtube': youtube,
        'website': website,
      };

  factory NgmyMenuSocialLinks.fromJson(Map<String, dynamic>? json) {
    if (json == null) return const NgmyMenuSocialLinks();
    return NgmyMenuSocialLinks(
      instagram: (json['instagram'] ?? '').toString(),
      facebook: (json['facebook'] ?? '').toString(),
      youtube: (json['youtube'] ?? '').toString(),
      website: (json['website'] ?? '').toString(),
    );
  }

  NgmyMenuSocialLinks copyWith({String? instagram, String? facebook, String? youtube, String? website}) =>
      NgmyMenuSocialLinks(
        instagram: instagram ?? this.instagram,
        facebook: facebook ?? this.facebook,
        youtube: youtube ?? this.youtube,
        website: website ?? this.website,
      );
}

/// Restaurant / business menu document for NGMY Menu Studio.
class NgmyMenuDocument {
  NgmyMenuDocument({
    required this.id,
    this.restaurantName = 'My Restaurant',
    this.tagline = '',
    this.templateId = 'gold_luxe',
    this.pageBackground = 'white',
    this.sections = const [],
    this.menuPages = const [],
    this.socialLinks = const NgmyMenuSocialLinks(),
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
  String pageBackground;
  List<NgmyMenuSection> sections;
  List<NgmyMenuPage> menuPages;
  NgmyMenuSocialLinks socialLinks;
  String slug;
  String publicUrl;
  String status;
  NgmyMenuQrStyle qrStyle;
  DateTime updatedAt;

  bool get isPublished => status == 'published' && slug.isNotEmpty;

  /// Pages guests swipe through — at least one menu.
  List<NgmyMenuPage> get effectivePages {
    if (menuPages.isNotEmpty) return menuPages;
    return [
      NgmyMenuPage(
        id: 'main',
        title: 'Menu',
        tagline: tagline,
        templateId: templateId,
        sections: sections,
      ),
    ];
  }

  void ensureMenuPages() {
    if (menuPages.isNotEmpty) return;
    menuPages = [
      NgmyMenuPage(
        id: ngmyMenuNewId(),
        title: 'Menu',
        tagline: tagline,
        templateId: templateId,
        sections: sections.isNotEmpty
            ? sections.map((s) => NgmyMenuSection(
                  title: s.title,
                  items: s.items.map((i) => NgmyMenuItem(name: i.name, description: i.description, ingredients: i.ingredients, price: i.price)).toList(),
                )).toList()
            : [NgmyMenuSection(title: 'Main', items: [NgmyMenuItem(name: '', description: '', ingredients: '', price: '')])],
      ),
    ];
    sections = menuPages.first.sections;
  }

  void syncLegacySectionsFromPages() {
    if (menuPages.isNotEmpty) sections = menuPages.first.sections;
  }

  Map<String, dynamic> toJson() {
    syncLegacySectionsFromPages();
    return {
        'id': id,
        'restaurantName': restaurantName,
        'tagline': tagline,
        'templateId': templateId,
        'pageBackground': pageBackground,
        'sections': sections.map((s) => s.toJson()).toList(),
        'menuPages': menuPages.map((p) => p.toJson()).toList(),
        'socialLinks': socialLinks.toJson(),
        'slug': slug,
        'publicUrl': publicUrl,
        'status': status,
        'qrStyle': qrStyle.toJson(),
        'updatedAt': updatedAt.toUtc().toIso8601String(),
      };
  }

  factory NgmyMenuDocument.fromJson(Map<String, dynamic> json) {
    final legacySections = (json['sections'] as List?)
            ?.map((e) => NgmyMenuSection.fromJson(Map<String, dynamic>.from(e as Map)))
            .toList() ??
        [];
    final pagesRaw = json['menuPages'];
    List<NgmyMenuPage> pages = [];
    if (pagesRaw is List && pagesRaw.isNotEmpty) {
      pages = pagesRaw.map((e) => NgmyMenuPage.fromJson(Map<String, dynamic>.from(e as Map))).toList();
    } else if (legacySections.isNotEmpty) {
      pages = [
        NgmyMenuPage(
          id: 'main',
          title: 'Menu',
          tagline: (json['tagline'] ?? '').toString(),
          templateId: (json['templateId'] ?? 'gold_luxe').toString(),
          sections: legacySections,
        ),
      ];
    }
    return NgmyMenuDocument(
        id: (json['id'] ?? '').toString(),
        restaurantName: (json['restaurantName'] ?? 'My Restaurant').toString(),
        tagline: (json['tagline'] ?? '').toString(),
        templateId: (json['templateId'] ?? 'gold_luxe').toString(),
        pageBackground: (json['pageBackground'] ?? 'white').toString(),
        sections: pages.isNotEmpty ? pages.first.sections : legacySections,
        menuPages: pages,
        socialLinks: NgmyMenuSocialLinks.fromJson(json['socialLinks'] is Map ? Map<String, dynamic>.from(json['socialLinks'] as Map) : null),
        slug: (json['slug'] ?? '').toString(),
        publicUrl: (json['publicUrl'] ?? '').toString(),
        status: (json['status'] ?? 'draft').toString(),
        qrStyle: NgmyMenuQrStyle.fromJson(json['qrStyle'] is Map ? Map<String, dynamic>.from(json['qrStyle'] as Map) : null),
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      );
  }

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
  NgmyMenuItem({
    required this.name,
    this.description = '',
    this.ingredients = '',
    this.price = '',
  });

  String name;
  String description;
  String ingredients;
  String price;

  Map<String, dynamic> toJson() => {
        'name': name,
        'description': description,
        'ingredients': ingredients,
        'price': price,
      };

  factory NgmyMenuItem.fromJson(Map<String, dynamic> json) => NgmyMenuItem(
        name: (json['name'] ?? '').toString(),
        description: (json['description'] ?? '').toString(),
        ingredients: (json['ingredients'] ?? '').toString(),
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
    this.displayMode = 'plain',
    this.cardTemplate = 'luxury_gold',
    this.logoBase64 = '',
    this.cardPhone = '',
    this.cardAddress = '',
    this.cardHours = '',
    this.cardWebsite = '',
    this.showCardLogo = true,
  });

  final int foreground;
  final int background;
  final int accent;
  final String eyeShape;
  final String moduleShape;
  final String cornerStyle;
  final String centerLabel;
  final bool showCenterLogo;
  /// `plain` = QR only · `card` = invoice-style card with info + QR
  final String displayMode;
  /// Card layout when [displayMode] is `card`.
  final String cardTemplate;
  final String logoBase64;
  final String cardPhone;
  final String cardAddress;
  final String cardHours;
  final String cardWebsite;
  final bool showCardLogo;

  Map<String, dynamic> toJson() => {
        'foreground': foreground,
        'background': background,
        'accent': accent,
        'eyeShape': eyeShape,
        'moduleShape': moduleShape,
        'cornerStyle': cornerStyle,
        'centerLabel': centerLabel,
        'showCenterLogo': showCenterLogo,
        'displayMode': displayMode,
        'cardTemplate': cardTemplate,
        'logoBase64': logoBase64,
        'cardPhone': cardPhone,
        'cardAddress': cardAddress,
        'cardHours': cardHours,
        'cardWebsite': cardWebsite,
        'showCardLogo': showCardLogo,
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
      displayMode: (json['displayMode'] ?? 'plain').toString(),
      cardTemplate: (json['cardTemplate'] ?? 'luxury_gold').toString(),
      logoBase64: (json['logoBase64'] ?? '').toString(),
      cardPhone: (json['cardPhone'] ?? '').toString(),
      cardAddress: (json['cardAddress'] ?? '').toString(),
      cardHours: (json['cardHours'] ?? '').toString(),
      cardWebsite: (json['cardWebsite'] ?? '').toString(),
      showCardLogo: json['showCardLogo'] != false,
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
    String? displayMode,
    String? cardTemplate,
    String? logoBase64,
    String? cardPhone,
    String? cardAddress,
    String? cardHours,
    String? cardWebsite,
    bool? showCardLogo,
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
        displayMode: displayMode ?? this.displayMode,
        cardTemplate: cardTemplate ?? this.cardTemplate,
        logoBase64: logoBase64 ?? this.logoBase64,
        cardPhone: cardPhone ?? this.cardPhone,
        cardAddress: cardAddress ?? this.cardAddress,
        cardHours: cardHours ?? this.cardHours,
        cardWebsite: cardWebsite ?? this.cardWebsite,
        showCardLogo: showCardLogo ?? this.showCardLogo,
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

NgmyMenuDocument ngmyMenuBlankDocument() {
  final page = NgmyMenuPage(
    id: ngmyMenuNewId(),
    title: 'Menu',
    sections: [
      NgmyMenuSection(
        title: 'Main',
        items: [NgmyMenuItem(name: '', description: '', ingredients: '', price: '')],
      ),
    ],
  );
  return NgmyMenuDocument(
    id: ngmyMenuNewId(),
    restaurantName: '',
    tagline: '',
    templateId: 'midnight_gold',
    menuPages: [page],
    sections: page.sections,
  );
}

/// Strip leading $ and keep digits/decimals for storage/display helpers.
String ngmyMenuPriceDigits(String raw) {
  var s = raw.trim().replaceAll(RegExp(r'[^\d.]'), '');
  if (s.contains('.')) {
    final parts = s.split('.');
    s = '${parts.first}.${parts.skip(1).join()}';
  }
  return s;
}

String ngmyMenuFormatPrice(String raw) {
  final digits = ngmyMenuPriceDigits(raw);
  if (digits.isEmpty) return '';
  return '\$$digits';
}
