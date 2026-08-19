import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_banner_text_style.dart';
import 'ngmy_news_banner_painter.dart';
import 'ngmy_news_banner_templates.dart';

enum NgmyVideoFormat { youtube, tiktok }

enum NgmyVideoSlotShape { rect, circle }

/// Decorative frame around the brand logo slot.
enum NgmyLogoFrameStyle {
  none,
  goldRing,
  presidentialSeal,
  glassPanel,
  diamondCrest,
  neonHalo,
  marbleInset,
  velvetBadge,
  silverLaurel,
  crownJewel,
}

extension NgmyLogoFrameStyleExt on NgmyLogoFrameStyle {
  String get label => switch (this) {
        NgmyLogoFrameStyle.none => 'No frame',
        NgmyLogoFrameStyle.goldRing => 'Gold ring',
        NgmyLogoFrameStyle.presidentialSeal => 'Presidential seal',
        NgmyLogoFrameStyle.glassPanel => 'Glass panel',
        NgmyLogoFrameStyle.diamondCrest => 'Diamond crest',
        NgmyLogoFrameStyle.neonHalo => 'Neon halo',
        NgmyLogoFrameStyle.marbleInset => 'Marble inset',
        NgmyLogoFrameStyle.velvetBadge => 'Velvet badge',
        NgmyLogoFrameStyle.silverLaurel => 'Silver laurel',
        NgmyLogoFrameStyle.crownJewel => 'Crown jewel',
      };
}

enum NgmySlotKind { video, logoAnim }

enum NgmyVideoTemplateId {
  ytStudioCurved,
  ytNewsDesk,
  ytBreakingNews,
  ytBreakingStudio,
  ytBreakingTitle,
  ytNewsLowerThird,
  ytStudio3Wall,
  ytStudio2Column,
  ytNewsDualSplit,
  ytSynthwaveEnd,
  ytThanksTriple,
  ytDualEnd,
  ttVerticalStudio,
  ttSynthwaveEnd,
  ttNewsLowerThird,
  ttThanksTriple,
  ttNewsTag,
  ytBanner0,
  ytBanner1,
  ytBanner2,
  ytBanner3,
  ytBanner4,
  ytBanner5,
  ytBanner6,
  ytBanner7,
  ytBanner8,
  ytBanner9,
  ytBanner10,
  ytBanner11,
  ytBanner12,
  ytBanner13,
  ytBanner14,
  ytBanner15,
  ytBanner16,
  ytBanner17,
  ytBanner18,
  ytBanner19,
  ytBanner20,
  ytBanner21,
  ytBanner22,
  ytBanner23,
  ytBanner24,
  ttBanner0,
  ttBanner1,
  ttBanner2,
  ttBanner3,
  ttBanner4,
  ttBanner5,
  ttBanner6,
  ttBanner7,
  ttBanner8,
  ttBanner9,
  ttBanner10,
  ttBanner11,
  ttBanner12,
  ttBanner13,
  ttBanner14,
  ttBanner15,
  ttBanner16,
  ttBanner17,
  ttBanner18,
  ttBanner19,
  ttBanner20,
  ttBanner21,
  ttBanner22,
  ttBanner23,
  ttBanner24,
}

/// TikTok first in the studio picker (user preference).
const List<NgmyVideoFormat> kNgmyStudioFormatOrder = [NgmyVideoFormat.tiktok, NgmyVideoFormat.youtube];

extension NgmyVideoFormatExt on NgmyVideoFormat {
  double get aspectRatio => this == NgmyVideoFormat.youtube ? 16 / 9 : 9 / 16;

  /// Full HD export — sharp playback in Photos and on social platforms.
  int get exportWidth => this == NgmyVideoFormat.youtube ? 1920 : 1080;

  int get exportHeight => this == NgmyVideoFormat.youtube ? 1080 : 1920;

  String get label => this == NgmyVideoFormat.youtube ? 'YouTube' : 'TikTok';

  String get sizeLabel => '${exportWidth}×$exportHeight';
}

class NgmyVideoSlotDef {
  final String id;
  final String label;
  final Rect youtubeRect;
  final Rect tiktokRect;
  final NgmyVideoSlotShape shape;
  final NgmySlotKind kind;

  const NgmyVideoSlotDef({
    required this.id,
    required this.label,
    required this.youtubeRect,
    required this.tiktokRect,
    this.shape = NgmyVideoSlotShape.rect,
    this.kind = NgmySlotKind.video,
  });

  Rect defaultRect(NgmyVideoFormat format) =>
      format == NgmyVideoFormat.youtube ? youtubeRect : tiktokRect;
}

class NgmyVideoTemplateDef {
  final NgmyVideoTemplateId id;
  final String name;
  final String category;
  final IconData icon;
  final NgmyVideoFormat forFormat;
  final String? assetPath;
  final List<NgmyVideoSlotDef> slots;
  final String defaultHeadline;
  final String defaultTitle;
  final String defaultSubtitle;
  final String defaultLive;
  final bool showTextOverlay;
  final NgmyNewsBannerStyle? newsBannerStyle;
  final bool newsTopAccent;

  const NgmyVideoTemplateDef({
    required this.id,
    required this.name,
    required this.category,
    required this.icon,
    required this.forFormat,
    this.assetPath,
    required this.slots,
    this.defaultHeadline = '',
    this.defaultTitle = 'NEWS',
    this.defaultSubtitle = 'BREAKING',
    this.defaultLive = 'LIVE',
    this.showTextOverlay = false,
    this.newsBannerStyle,
    this.newsTopAccent = false,
  });

  bool get usesPhotoBackdrop => assetPath != null && assetPath!.isNotEmpty;

  bool get isNewsBanner => newsBannerStyle != null;
}

/// Broadcast overlay templates only — video background + editable graphics.
final List<NgmyVideoTemplateDef> kNgmyVideoTemplates = [
  ...buildNgmyNewsBannerTemplates(),
];

List<NgmyVideoTemplateDef> ngmyTemplatesForFormat(NgmyVideoFormat format) =>
    kNgmyVideoTemplates.where((t) => t.forFormat == format).toList();

NgmyVideoTemplateDef ngmyTemplateDef(NgmyVideoTemplateId id) =>
    kNgmyVideoTemplates.firstWhere((t) => t.id == id);

NgmyVideoTemplateId ngmyDefaultTemplateFor(NgmyVideoFormat format) =>
    format == NgmyVideoFormat.youtube
        ? NgmyVideoTemplateId.ytBanner0
        : NgmyVideoTemplateId.ttBanner0;

/// Web export loads backdrop from deployed assets folder.
String ngmyStudioAssetWebUrl(String assetPath) {
  if (kIsWeb) {
    try {
      var p = Uri.base.path;
      if (!p.endsWith('/')) {
        final i = p.lastIndexOf('/');
        p = i >= 0 ? p.substring(0, i + 1) : '/';
      }
      return '$p$assetPath';
    } catch (_) {}
  }
  return '/$assetPath';
}

class NgmyVideoStudioExportConfig {
  final NgmyVideoTemplateId templateId;
  final NgmyVideoFormat format;
  final String? backgroundAsset;
  final Map<String, String> videoSourcesBySlot;
  final Map<String, String> logoDataUrlBySlot;
  final Map<String, Rect> slotRects;
  final Map<String, NgmyVideoSlotShape> slotShapes;
  final Map<String, NgmySlotKind> slotKinds;
  final Map<String, bool> logoVisibleBySlot;
  final Map<String, NgmyLogoFrameStyle> logoFrameStyleBySlot;
  final String headline;
  final String title;
  final String subtitle;
  final String liveLabel;
  final double headlineFontScale;
  final double titleFontScale;
  final bool showTextOverlay;
  final NgmyNewsBannerStyle? newsBannerStyle;
  final bool newsTopAccent;
  final NgmyBannerTextStyle bannerTextStyle;

  const NgmyVideoStudioExportConfig({
    required this.templateId,
    required this.format,
    this.backgroundAsset,
    required this.videoSourcesBySlot,
    this.logoDataUrlBySlot = const {},
    required this.slotRects,
    required this.slotShapes,
    required this.slotKinds,
    this.logoVisibleBySlot = const {},
    this.logoFrameStyleBySlot = const {},
    required this.headline,
    required this.title,
    required this.subtitle,
    required this.liveLabel,
    this.headlineFontScale = 1.0,
    this.titleFontScale = 1.0,
    this.showTextOverlay = false,
    this.newsBannerStyle,
    this.newsTopAccent = false,
    this.bannerTextStyle = NgmyBannerTextStyle.broadcastClassic,
  });

  int get outputWidth => format.exportWidth;
  int get outputHeight => format.exportHeight;

  /// Video Studio always records the template, logos, and overlay into the file.
  bool get needsComposedExport => true;

  /// Never skip composition — a raw clip download would drop the template.
  bool get canDirectDownload => false;
}
