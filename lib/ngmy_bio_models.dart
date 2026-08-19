import 'dart:convert';

import 'ngmy_bio_link_icons.dart';
import 'ngmy_menu_models.dart';

String ngmyBioNewId() => 'bio_${DateTime.now().microsecondsSinceEpoch}';

/// Bio ids embed the moment they were made (`bio_<microseconds>`), so documents
/// written before [NgmyBioDocument.createdAt] existed can still be put in age
/// order. Null when the id carries no timestamp to read.
DateTime? ngmyBioCreatedAtFromId(String id) {
  final digits = RegExp(r'(\d{10,})$').firstMatch(id.trim())?.group(1);
  final micros = int.tryParse(digits ?? '');
  if (micros == null) return null;
  return DateTime.fromMicrosecondsSinceEpoch(micros);
}

/// One tappable link card on a Bio page.
class NgmyBioLink {
  NgmyBioLink({
    required this.id,
    this.title = '',
    this.url = '',
    this.imageBase64 = '',
    this.iconCodePoint = 0,
    this.iconAsset = '',
    this.ringStyleId = 'none',
    this.enabled = true,
  });

  String id;
  String title;
  String url;
  String imageBase64;

  /// Material Icons code point. `0` means no icon. Gallery photo wins over icon.
  int iconCodePoint;

  /// Built-in circular brand picture (`instagram`, `youtube`, `tiktok`, `facebook`).
  String iconAsset;

  /// Same ring ids as the profile photo (`none`, `glow_blue`, `gold`, …).
  String ringStyleId;
  bool enabled;

  bool get hasGalleryImage => imageBase64.trim().isNotEmpty;
  bool get hasBrandIcon => iconAsset.trim().isNotEmpty;
  bool get hasIcon => iconCodePoint != 0 || hasBrandIcon;

  Map<String, dynamic> toJson() => {
    'id': id,
    'title': title,
    'url': url,
    'imageBase64': imageBase64,
    'iconCodePoint': iconCodePoint,
    'iconAsset': iconAsset,
    'ringStyleId': ringStyleId,
    'enabled': enabled,
  };

  factory NgmyBioLink.fromJson(Map<String, dynamic> json) {
    final rawCode = json['iconCodePoint'];
    var code = rawCode is int ? rawCode : int.tryParse(rawCode?.toString() ?? '') ?? 0;
    var asset = (json['iconAsset'] ?? '').toString().trim();
    if (asset.isEmpty) {
      asset = ngmyBioBrandIdFromLegacyCodePoint(code);
      if (asset.isNotEmpty) code = 0;
    } else if (ngmyBioBrandLinkAsset(asset) == null) {
      asset = '';
    }
    final ringRaw = (json['ringStyleId'] ?? 'none').toString().trim();
    return NgmyBioLink(
      id: (json['id'] ?? ngmyBioNewId()).toString(),
      title: (json['title'] ?? '').toString(),
      url: (json['url'] ?? '').toString(),
      imageBase64: (json['imageBase64'] ?? '').toString(),
      iconCodePoint: code,
      iconAsset: asset,
      ringStyleId: ringRaw.isEmpty ? 'none' : ringRaw,
      enabled: json['enabled'] != false,
    );
  }

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
    DateTime? createdAt,
    DateTime? updatedAt,
  }) : createdAt = createdAt ?? ngmyBioCreatedAtFromId(id) ?? DateTime.now(),
       updatedAt = updatedAt ?? DateTime.now();

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

  /// Fixed at creation. Ordering by this is what decides which Bio is the one
  /// backed up to the account, so editing must never move it.
  final DateTime createdAt;
  DateTime updatedAt;

  bool get isPublished => status == 'published' && slug.isNotEmpty;

  List<NgmyBioLink> get activeLinks => links
      .where(
        (l) =>
            l.enabled && (l.title.trim().isNotEmpty || l.url.trim().isNotEmpty),
      )
      .toList();

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
    'createdAt': createdAt.toIso8601String(),
    'updatedAt': updatedAt.toIso8601String(),
  };

  factory NgmyBioDocument.fromJson(Map<String, dynamic> json) {
    final id = (json['id'] ?? ngmyBioNewId()).toString();
    final updatedAt =
        DateTime.tryParse((json['updatedAt'] ?? '').toString()) ??
        DateTime.now();
    return NgmyBioDocument(
      id: id,
      displayName: (json['displayName'] ?? '').toString(),
      tagline: (json['tagline'] ?? '').toString(),
      templateId: (json['templateId'] ?? 'gold_curved').toString(),
      ringStyleId: (json['ringStyleId'] ?? 'gold').toString(),
      profileScale: ((json['profileScale'] as num?)?.toDouble() ?? 1.0).clamp(
        0.65,
        1.6,
      ),
      headerImageBase64: (json['headerImageBase64'] ?? '').toString(),
      avatarImageBase64: (json['avatarImageBase64'] ?? '').toString(),
      backgroundImageBase64: (json['backgroundImageBase64'] ?? '').toString(),
      links:
          (json['links'] as List?)
              ?.whereType<Map>()
              .map((e) => NgmyBioLink.fromJson(Map<String, dynamic>.from(e)))
              .toList() ??
          [],
      socialLinks: NgmyMenuSocialLinks.fromJson(
        json['socialLinks'] is Map
            ? Map<String, dynamic>.from(json['socialLinks'] as Map)
            : null,
      ),
      slug: (json['slug'] ?? '').toString(),
      publicUrl: (json['publicUrl'] ?? '').toString(),
      status: (json['status'] ?? 'draft').toString(),
      qrStyle: NgmyMenuQrStyle.fromJson(
        json['qrStyle'] is Map
            ? Map<String, dynamic>.from(json['qrStyle'] as Map)
            : null,
      ),
      // Bios written before this field existed fall back to the timestamp in
      // their id, so their age order is preserved rather than reset to now.
      createdAt:
          DateTime.tryParse((json['createdAt'] ?? '').toString()) ??
          ngmyBioCreatedAtFromId(id) ??
          updatedAt,
      updatedAt: updatedAt,
    );
  }

  NgmyBioDocument copy() => NgmyBioDocument.fromJson(toJson());

  static String encodeList(List<NgmyBioDocument> list) =>
      jsonEncode(list.map((d) => d.toJson()).toList());

  static List<NgmyBioDocument> decodeList(String raw) {
    if (raw.trim().isEmpty) return [];
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! List) return [];
      return decoded
          .whereType<Map>()
          .map((e) => NgmyBioDocument.fromJson(Map<String, dynamic>.from(e)))
          .toList();
    } catch (_) {
      return [];
    }
  }
}

const kNgmyBioDefaultDisplayName = 'Your name';

NgmyBioDocument ngmyBioBlankDocument() => NgmyBioDocument(
  id: ngmyBioNewId(),
  // The sample belongs in the field hint, not in the editable value. This
  // lets a user tap and type immediately like Bio line / custom slug.
  displayName: '',
  tagline: '',
  links: [NgmyBioLink(id: ngmyBioNewId(), title: 'My Link', url: '')],
);
