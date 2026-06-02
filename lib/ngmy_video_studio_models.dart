import 'package:flutter/material.dart';

import 'ngmy_news_banner_painter.dart';
import 'ngmy_news_banner_templates.dart';

enum NgmyVideoFormat { youtube, tiktok }

enum NgmyVideoSlotShape { rect, circle }

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
}

extension NgmyVideoFormatExt on NgmyVideoFormat {
  double get aspectRatio => this == NgmyVideoFormat.youtube ? 16 / 9 : 9 / 16;

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

final List<NgmyVideoTemplateDef> kNgmyVideoTemplates = [
  // —— YouTube (16:9) photo studios — keep screenshot colors; only screens are video/logo ——
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytStudioCurved,
    name: 'Blue Curved Studio',
    category: '3D News Studio',
    icon: Icons.tv_rounded,
    forFormat: NgmyVideoFormat.youtube,
    assetPath: 'assets/video_studio/yt_studio_curved.png',
    slots: [
      NgmyVideoSlotDef(
        id: 'main',
        label: 'Main TV screen',
        youtubeRect: Rect.fromLTWH(0.48, 0.14, 0.46, 0.52),
        tiktokRect: Rect.fromLTWH(0.08, 0.20, 0.84, 0.38),
      ),
      NgmyVideoSlotDef(
        id: 'logo',
        label: 'Side screen (logo animation)',
        youtubeRect: Rect.fromLTWH(0.06, 0.18, 0.36, 0.42),
        tiktokRect: Rect.fromLTWH(0.10, 0.62, 0.80, 0.22),
        kind: NgmySlotKind.logoAnim,
      ),
    ],
    showTextOverlay: false,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytNewsDesk,
    name: 'News Desk Studio',
    category: '3D News Studio',
    icon: Icons.desktop_windows_rounded,
    forFormat: NgmyVideoFormat.youtube,
    assetPath: 'assets/video_studio/yt_news_desk.png',
    slots: [
      NgmyVideoSlotDef(
        id: 'main',
        label: 'Big backdrop screen',
        youtubeRect: Rect.fromLTWH(0.30, 0.06, 0.40, 0.40),
        tiktokRect: Rect.fromLTWH(0.10, 0.12, 0.80, 0.32),
      ),
      NgmyVideoSlotDef(
        id: 'logo',
        label: 'Side monitor (logo pop-up)',
        youtubeRect: Rect.fromLTWH(0.70, 0.26, 0.24, 0.30),
        tiktokRect: Rect.fromLTWH(0.12, 0.48, 0.76, 0.20),
        kind: NgmySlotKind.logoAnim,
      ),
    ],
    showTextOverlay: false,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytThanksTriple,
    name: 'Thanks — 3 Frames',
    category: 'End Screen',
    icon: Icons.thumb_up_alt_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Left clip', youtubeRect: Rect.fromLTWH(0.04, 0.24, 0.27, 0.40), tiktokRect: Rect.fromLTWH(0.05, 0.18, 0.42, 0.22)),
      NgmyVideoSlotDef(id: 'center', label: 'Center circle', youtubeRect: Rect.fromLTWH(0.37, 0.28, 0.26, 0.46), tiktokRect: Rect.fromLTWH(0.28, 0.42, 0.44, 0.22), shape: NgmyVideoSlotShape.circle),
      NgmyVideoSlotDef(id: 'right', label: 'Right clip', youtubeRect: Rect.fromLTWH(0.69, 0.24, 0.27, 0.40), tiktokRect: Rect.fromLTWH(0.53, 0.18, 0.42, 0.22)),
    ],
    defaultHeadline: '@yourchannel',
    defaultTitle: 'THANKS FOR WATCHING',
    defaultSubtitle: 'ANOTHER ONE!',
    defaultLive: 'SUBSCRIBE',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytDualEnd,
    name: 'Dual End Boxes',
    category: 'End Screen',
    icon: Icons.view_column_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Left clip', youtubeRect: Rect.fromLTWH(0.05, 0.22, 0.40, 0.48), tiktokRect: Rect.fromLTWH(0.06, 0.16, 0.88, 0.36)),
      NgmyVideoSlotDef(id: 'right', label: 'Right clip', youtubeRect: Rect.fromLTWH(0.55, 0.22, 0.40, 0.48), tiktokRect: Rect.fromLTWH(0.06, 0.54, 0.88, 0.36)),
    ],
    defaultHeadline: 'Watch next',
    defaultTitle: 'THANKS FOR WATCHING',
    defaultSubtitle: 'ANOTHER ONE!',
    defaultLive: 'FOLLOW',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytBreakingNews,
    name: 'Breaking News Grid',
    category: 'Breaking News',
    icon: Icons.newspaper_rounded,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Main video', youtubeRect: Rect.fromLTWH(0.06, 0.10, 0.88, 0.52), tiktokRect: Rect.fromLTWH(0.06, 0.18, 0.88, 0.42)),
    ],
    defaultHeadline: 'Your headline goes here',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytBreakingStudio,
    name: 'Breaking 3D Studio',
    category: 'Breaking News',
    icon: Icons.live_tv_rounded,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Main screen', youtubeRect: Rect.fromLTWH(0.22, 0.18, 0.56, 0.52), tiktokRect: Rect.fromLTWH(0.08, 0.22, 0.84, 0.42)),
    ],
    defaultHeadline: 'Your headline runs here',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytBreakingTitle,
    name: 'Breaking Title Card',
    category: 'Breaking News',
    icon: Icons.campaign_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Main video', youtubeRect: Rect.fromLTWH(0.10, 0.28, 0.80, 0.48), tiktokRect: Rect.fromLTWH(0.06, 0.32, 0.88, 0.38)),
    ],
    defaultHeadline: 'Major story developing',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytNewsLowerThird,
    name: 'Live Lower Third',
    category: 'News Tag',
    icon: Icons.subtitles_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Full video', youtubeRect: Rect.fromLTWH(0, 0, 1, 1), tiktokRect: Rect.fromLTWH(0, 0, 1, 1)),
    ],
    defaultHeadline: 'THIS IS HAPPENING RIGHT NOW',
    defaultSubtitle: 'THIS IS A SUBTITLE',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytStudio3Wall,
    name: '3D Studio — 3 Screens',
    category: '3D Studio',
    icon: Icons.view_in_ar_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Left screen', youtubeRect: Rect.fromLTWH(0.04, 0.22, 0.28, 0.38), tiktokRect: Rect.fromLTWH(0.05, 0.16, 0.42, 0.24)),
      NgmyVideoSlotDef(id: 'center', label: 'Center screen', youtubeRect: Rect.fromLTWH(0.36, 0.20, 0.28, 0.42), tiktokRect: Rect.fromLTWH(0.28, 0.42, 0.44, 0.26)),
      NgmyVideoSlotDef(id: 'right', label: 'Right screen', youtubeRect: Rect.fromLTWH(0.68, 0.22, 0.28, 0.38), tiktokRect: Rect.fromLTWH(0.53, 0.16, 0.42, 0.24)),
    ],
    defaultHeadline: 'NEWS TODAY',
    defaultSubtitle: 'ANNE SMITH',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytStudio2Column,
    name: '3D Studio — 2 Stack',
    category: '3D Studio',
    icon: Icons.dashboard_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Main wall', youtubeRect: Rect.fromLTWH(0.06, 0.16, 0.58, 0.62), tiktokRect: Rect.fromLTWH(0.05, 0.14, 0.90, 0.48)),
      NgmyVideoSlotDef(id: 'side', label: 'Side panel', youtubeRect: Rect.fromLTWH(0.68, 0.20, 0.28, 0.28), tiktokRect: Rect.fromLTWH(0.10, 0.66, 0.80, 0.24)),
    ],
    defaultHeadline: 'Top story tonight',
    defaultSubtitle: 'WEATHER NOW',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytNewsDualSplit,
    name: 'Dual Split News',
    category: 'Breaking News',
    icon: Icons.splitscreen_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Left story', youtubeRect: Rect.fromLTWH(0.02, 0.14, 0.47, 0.58), tiktokRect: Rect.fromLTWH(0.04, 0.16, 0.92, 0.36)),
      NgmyVideoSlotDef(id: 'right', label: 'Right story', youtubeRect: Rect.fromLTWH(0.51, 0.14, 0.47, 0.58), tiktokRect: Rect.fromLTWH(0.04, 0.54, 0.92, 0.36)),
    ],
    defaultHeadline: 'Developing story',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ytSynthwaveEnd,
    name: 'Synthwave End',
    category: 'End Screen',
    icon: Icons.nightlife_outlined,
    forFormat: NgmyVideoFormat.youtube,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Left clip', youtubeRect: Rect.fromLTWH(0.06, 0.14, 0.42, 0.38), tiktokRect: Rect.fromLTWH(0.06, 0.16, 0.88, 0.36)),
      NgmyVideoSlotDef(id: 'right', label: 'Right clip', youtubeRect: Rect.fromLTWH(0.52, 0.18, 0.40, 0.22), tiktokRect: Rect.fromLTWH(0.06, 0.54, 0.88, 0.22)),
    ],
    defaultTitle: 'WATCHING!',
    defaultSubtitle: 'Thanks For',
    showTextOverlay: true,
  ),
  // —— TikTok (9:16) ——
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ttVerticalStudio,
    name: 'Vertical News Studio',
    category: 'News',
    icon: Icons.phone_android_outlined,
    forFormat: NgmyVideoFormat.tiktok,
    assetPath: 'assets/video_studio/yt_news_desk.png',
    slots: [
      NgmyVideoSlotDef(
        id: 'main',
        label: 'Main video',
        youtubeRect: Rect.fromLTWH(0, 0, 1, 1),
        tiktokRect: Rect.fromLTWH(0.06, 0.14, 0.88, 0.48),
      ),
      NgmyVideoSlotDef(
        id: 'logo',
        label: 'Logo pop-up',
        youtubeRect: Rect.fromLTWH(0.7, 0.3, 0.25, 0.25),
        tiktokRect: Rect.fromLTWH(0.10, 0.66, 0.80, 0.18),
        kind: NgmySlotKind.logoAnim,
      ),
    ],
    showTextOverlay: false,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ttSynthwaveEnd,
    name: 'Synthwave End',
    category: 'End Screen',
    icon: Icons.nightlife_outlined,
    forFormat: NgmyVideoFormat.tiktok,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Top clip', youtubeRect: Rect.fromLTWH(0.06, 0.14, 0.42, 0.38), tiktokRect: Rect.fromLTWH(0.06, 0.14, 0.88, 0.24)),
      NgmyVideoSlotDef(id: 'right', label: 'Bottom clip', youtubeRect: Rect.fromLTWH(0.52, 0.18, 0.40, 0.22), tiktokRect: Rect.fromLTWH(0.06, 0.42, 0.88, 0.24)),
    ],
    defaultTitle: 'WATCHING!',
    defaultSubtitle: 'Thanks For',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ttNewsLowerThird,
    name: 'Vertical Lower Third',
    category: 'News Tag',
    icon: Icons.subtitles_outlined,
    forFormat: NgmyVideoFormat.tiktok,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Full video', youtubeRect: Rect.fromLTWH(0, 0, 1, 1), tiktokRect: Rect.fromLTWH(0, 0, 1, 1)),
    ],
    defaultHeadline: 'Happening now',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ttThanksTriple,
    name: 'Thanks — 3 Frames',
    category: 'End Screen',
    icon: Icons.favorite_border,
    forFormat: NgmyVideoFormat.tiktok,
    slots: [
      NgmyVideoSlotDef(id: 'left', label: 'Top clip', youtubeRect: Rect.fromLTWH(0.04, 0.24, 0.27, 0.40), tiktokRect: Rect.fromLTWH(0.06, 0.14, 0.88, 0.24)),
      NgmyVideoSlotDef(id: 'center', label: 'Middle circle', youtubeRect: Rect.fromLTWH(0.37, 0.28, 0.26, 0.46), tiktokRect: Rect.fromLTWH(0.28, 0.40, 0.44, 0.20), shape: NgmyVideoSlotShape.circle),
      NgmyVideoSlotDef(id: 'right', label: 'Bottom clip', youtubeRect: Rect.fromLTWH(0.69, 0.24, 0.27, 0.40), tiktokRect: Rect.fromLTWH(0.06, 0.64, 0.88, 0.24)),
    ],
    defaultHeadline: '@you',
    defaultTitle: 'THANKS FOR WATCHING',
    defaultSubtitle: 'NEXT VIDEO',
    defaultLive: 'FOLLOW',
    showTextOverlay: true,
  ),
  NgmyVideoTemplateDef(
    id: NgmyVideoTemplateId.ttNewsTag,
    name: 'Vertical Live Tag',
    category: 'News Tag',
    icon: Icons.tag,
    forFormat: NgmyVideoFormat.tiktok,
    slots: [
      NgmyVideoSlotDef(id: 'main', label: 'Full video', youtubeRect: Rect.fromLTWH(0, 0, 1, 1), tiktokRect: Rect.fromLTWH(0, 0, 1, 1)),
    ],
    defaultHeadline: 'Happening now',
    defaultTitle: 'NEWS',
    defaultSubtitle: 'LIVE UPDATE',
    defaultLive: 'LIVE',
    showTextOverlay: true,
  ),
  ...buildNgmyNewsBannerTemplates(),
];

List<NgmyVideoTemplateDef> ngmyTemplatesForFormat(NgmyVideoFormat format) =>
    kNgmyVideoTemplates.where((t) => t.forFormat == format).toList();

NgmyVideoTemplateDef ngmyTemplateDef(NgmyVideoTemplateId id) =>
    kNgmyVideoTemplates.firstWhere((t) => t.id == id);

NgmyVideoTemplateId ngmyDefaultTemplateFor(NgmyVideoFormat format) =>
    format == NgmyVideoFormat.youtube
        ? NgmyVideoTemplateId.ytStudioCurved
        : NgmyVideoTemplateId.ttVerticalStudio;

/// Web export loads backdrop from deployed assets folder.
String ngmyStudioAssetWebUrl(String assetPath) {
  const base = '/NGMY.github.io/';
  return '$base$assetPath';
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
  final String headline;
  final String title;
  final String subtitle;
  final String liveLabel;
  final double headlineFontScale;
  final double titleFontScale;
  final bool showTextOverlay;
  final NgmyNewsBannerStyle? newsBannerStyle;
  final bool newsTopAccent;

  const NgmyVideoStudioExportConfig({
    required this.templateId,
    required this.format,
    this.backgroundAsset,
    required this.videoSourcesBySlot,
    this.logoDataUrlBySlot = const {},
    required this.slotRects,
    required this.slotShapes,
    required this.slotKinds,
    required this.headline,
    required this.title,
    required this.subtitle,
    required this.liveLabel,
    this.headlineFontScale = 1.0,
    this.titleFontScale = 1.0,
    this.showTextOverlay = false,
    this.newsBannerStyle,
    this.newsTopAccent = false,
  });

  int get outputWidth => format.exportWidth;
  int get outputHeight => format.exportHeight;

  /// One local video — download the raw clip directly (templates with text still use composed export).
  bool get canDirectDownload {
    final filled = videoSourcesBySlot.values.where((s) => s.trim().isNotEmpty).length;
    return filled == 1 &&
        logoDataUrlBySlot.isEmpty &&
        newsBannerStyle == null &&
        !showTextOverlay &&
        (backgroundAsset == null || backgroundAsset!.trim().isEmpty);
  }
}
