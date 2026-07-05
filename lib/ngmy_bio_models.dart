import 'dart:convert';

import 'ngmy_menu_models.dart';

String ngmyBioNewId() => 'bio_${DateTime.now().microsecondsSinceEpoch}';

/// One tappable link card on a Bio page.
class NgmyBioLink {
  NgmyBioLink({
    required this.id,
    this.title = '',
    this.url = '',
    this.imageBase64 = '',
    this.enabled = true,
  });

  String id;
  String title;
  String url;
  String imageBase64;
  bool enabled;

  Map<String, dynamic> toJson() => {
        'id': id,
        'title': title,
        'url': url,
        'imageBase64': imageBase64,
        'enabled': enabled,
      };

  factory NgmyBioLink.fromJson(Map<String, dynamic> json) => NgmyBioLink(
        id: (json['id'] ?? ngmyBioNewId()).toString(),
        title: (json['title'] ?? '').toString(),
        url: (json['url'] ?? '').toString(),
        imageBase64: (json['imageBase64'] ?? '').toString(),
        enabled: json['enabled'] != false,
      );

  NgmyBioLink copy() => NgmyBioLink.fromJson(toJson());
}

/// Link-in-bio page document for Menu Studio → Bio.
class NgmyBioDocument {
  NgmyBioDocument({
    required this.id,
    this.displayName = '',
    this.tagline = '',
    this.templateId = 'gold_curved',
    this.ringStyleId = 'gold',
    this.profileScale = 1.0,
    this.headerImageBase64 = '',
    this.avatarImageBase64 = '',
    this.backgroundImageBase64 = '',
    this.links = const [],
    this.socialLinks = const NgmyMenuSocialLinks(),
    this.slug = '',
    this.publicUrl = '',
    this.status = 'draft',
    this.qrStyle = const NgmyMenuQrStyle(),
    DateTime? updatedAt,
  }) : updatedAt = updatedAt ?? DateTime.now();

  final String id;
  String displayName;
  String tagline;
  String templateId;
  String ringStyleId;
  double profileScale;
  String headerImageBase64;
  String avatarImageBase64;
  String backgroundImageBase64;
  List<NgmyBioLink> links;
  NgmyMenuSocialLinks socialLinks;
  String slug;
  String publicUrl;
  String status;
  NgmyMenuQrStyle qrStyle;
  DateTime updatedAt;

  bool get isPublished => status == 'published' && slug.isNotEmpty;

  List<NgmyBioLink> get activeLinks => links.where((l) => l.enabled && (l.title.trim().isNotEmpty || l.url.trim().isNotEmpty)).toList();

  Map<String, dynamic> toJson() => {
        'id': id,
        'displayName': displayName,
        'tagline': tagline,
        'templateId': templateId,
        'ringStyleId': ringStyleId,
        'profileScale': profileScale,
        'headerImageBase64': headerImageBase64,
        'avatarImageBase64': avatarImageBase64,
        'backgroundImageBase64': backgroundImageBase64,
        'links': links.map((l) => l.toJson()).toList(),
        'socialLinks': socialLinks.toJson(),
        'slug': slug,
        'publicUrl': publicUrl,
        'status': status,
        'qrStyle': qrStyle.toJson(),
        'updatedAt': updatedAt.toIso8601String(),
      };

  factory NgmyBioDocument.fromJson(Map<String, dynamic> json) => NgmyBioDocument(
        id: (json['id'] ?? ngmyBioNewId()).toString(),
        displayName: (json['displayName'] ?? '').toString(),
        tagline: (json['tagline'] ?? '').toString(),
        templateId: (json['templateId'] ?? 'gold_curved').toString(),
        ringStyleId: (json['ringStyleId'] ?? 'gold').toString(),
        profileScale: ((json['profileScale'] as num?)?.toDouble() ?? 1.0).clamp(0.65, 1.6),
        headerImageBase64: (json['headerImageBase64'] ?? '').toString(),
        avatarImageBase64: (json['avatarImageBase64'] ?? '').toString(),
        backgroundImageBase64: (json['backgroundImageBase64'] ?? '').toString(),
        links: (json['links'] as List?)?.whereType<Map>().map((e) => NgmyBioLink.fromJson(Map<String, dynamic>.from(e))).toList() ?? [],
        socialLinks: NgmyMenuSocialLinks.fromJson(json['socialLinks'] is Map ? Map<String, dynamic>.from(json['socialLinks'] as Map) : null),
        slug: (json['slug'] ?? '').toString(),
        publicUrl: (json['publicUrl'] ?? '').toString(),
        status: (json['status'] ?? 'draft').toString(),
        qrStyle: NgmyMenuQrStyle.fromJson(json['qrStyle'] is Map ? Map<String, dynamic>.from(json['qrStyle'] as Map) : null),
        updatedAt: DateTime.tryParse((json['updatedAt'] ?? '').toString()) ?? DateTime.now(),
      );

  NgmyBioDocument copy() => NgmyBioDocument.fromJson(toJson());

  static String encodeList(List<NgmyBioDocument> list) => jsonEncode(list.map((d) => d.toJson()).toList());

  static List<NgmyBioDocument> decodeList(String raw) {
    if (raw.trim().isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded.whereType<Map>().map((e) => NgmyBioDocument.fromJson(Map<String, dynamic>.from(e))).toList();
    } catch (_) {
      return [];
    }
  }
}

NgmyBioDocument ngmyBioBlankDocument() => NgmyBioDocument(
      id: ngmyBioNewId(),
      displayName: '',
      tagline: '',
      links: [NgmyBioLink(id: ngmyBioNewId(), title: 'My Link', url: '')],
    );
