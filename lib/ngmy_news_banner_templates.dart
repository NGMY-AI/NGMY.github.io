import 'package:flutter/material.dart';

import 'ngmy_news_banner_painter.dart';
import 'ngmy_video_studio_models.dart';

const _fullVideoSlot = NgmyVideoSlotDef(
  id: 'main',
  label: 'Your video (full screen)',
  youtubeRect: Rect.fromLTWH(0, 0, 1, 1),
  tiktokRect: Rect.fromLTWH(0, 0, 1, 1),
);

const List<NgmyVideoTemplateId> kYtNewsBannerTemplateIds = [
  NgmyVideoTemplateId.ytBanner0,
  NgmyVideoTemplateId.ytBanner1,
  NgmyVideoTemplateId.ytBanner2,
  NgmyVideoTemplateId.ytBanner3,
  NgmyVideoTemplateId.ytBanner4,
  NgmyVideoTemplateId.ytBanner5,
  NgmyVideoTemplateId.ytBanner6,
  NgmyVideoTemplateId.ytBanner7,
  NgmyVideoTemplateId.ytBanner8,
  NgmyVideoTemplateId.ytBanner9,
  NgmyVideoTemplateId.ytBanner10,
  NgmyVideoTemplateId.ytBanner11,
  NgmyVideoTemplateId.ytBanner12,
  NgmyVideoTemplateId.ytBanner13,
  NgmyVideoTemplateId.ytBanner14,
];

const List<NgmyVideoTemplateId> kTtNewsBannerTemplateIds = [
  NgmyVideoTemplateId.ttBanner0,
  NgmyVideoTemplateId.ttBanner1,
  NgmyVideoTemplateId.ttBanner2,
  NgmyVideoTemplateId.ttBanner3,
  NgmyVideoTemplateId.ttBanner4,
  NgmyVideoTemplateId.ttBanner5,
  NgmyVideoTemplateId.ttBanner6,
  NgmyVideoTemplateId.ttBanner7,
  NgmyVideoTemplateId.ttBanner8,
  NgmyVideoTemplateId.ttBanner9,
  NgmyVideoTemplateId.ttBanner10,
  NgmyVideoTemplateId.ttBanner11,
  NgmyVideoTemplateId.ttBanner12,
  NgmyVideoTemplateId.ttBanner13,
  NgmyVideoTemplateId.ttBanner14,
];

NgmyNewsBannerStyle? ngmyNewsBannerStyleFor(NgmyVideoTemplateId id) {
  final yt = kYtNewsBannerTemplateIds.indexOf(id);
  if (yt >= 0) return NgmyNewsBannerStyle.values[yt];
  final tt = kTtNewsBannerTemplateIds.indexOf(id);
  if (tt >= 0) return NgmyNewsBannerStyle.values[tt];
  return null;
}

List<NgmyVideoTemplateDef> buildNgmyNewsBannerTemplates() {
  final out = <NgmyVideoTemplateDef>[];
  final styles = NgmyNewsBannerStyle.values;
  for (var i = 0; i < styles.length; i++) {
    final style = styles[i];
    out.add(_bannerDef(kYtNewsBannerTemplateIds[i], style, NgmyVideoFormat.youtube));
    out.add(_bannerDef(kTtNewsBannerTemplateIds[i], style, NgmyVideoFormat.tiktok));
  }
  return out;
}

NgmyVideoTemplateDef _bannerDef(NgmyVideoTemplateId id, NgmyNewsBannerStyle style, NgmyVideoFormat format) {
  final defaults = _defaultsFor(style);
  return NgmyVideoTemplateDef(
    id: id,
    name: style.label,
    category: 'News Banners',
    icon: Icons.view_agenda_outlined,
    forFormat: format,
    slots: const [_fullVideoSlot],
    defaultHeadline: defaults.$1,
    defaultTitle: defaults.$2,
    defaultSubtitle: defaults.$3,
    defaultLive: defaults.$4,
    newsBannerStyle: style,
    newsTopAccent: defaults.$5,
  );
}

(String headline, String title, String subtitle, String live, bool topAccent) _defaultsFor(NgmyNewsBannerStyle s) {
  return switch (s) {
    NgmyNewsBannerStyle.breakingCyan => ('Major story developing', 'BREAKING NEWS', 'LIVE TV', '7:25', false),
    NgmyNewsBannerStyle.hotOrange => ('Top headlines tonight', 'HOT NEWS', '', 'LIVE', false),
    NgmyNewsBannerStyle.fakeExclusive => ('Details inside', 'FAKE NEWS', 'EXCLUSIVE', 'LIVE', false),
    NgmyNewsBannerStyle.worldGlobe => ('Global update', 'WORLD NEWS', 'LIVE TV', '7:25', false),
    NgmyNewsBannerStyle.latestGlobe => ('Just in', 'LATEST NEWS', '', 'LIVE', false),
    NgmyNewsBannerStyle.fakeRounded => ('Watch now', 'FAKE NEWS', '', 'LIVE', false),
    NgmyNewsBannerStyle.news24Breaking => ('Developing now', 'BREAKING NEWS', 'EXCLUSIVE', '24 LIVE', false),
    NgmyNewsBannerStyle.news24Split => ('Full coverage', 'NEWS', 'BREAKING', 'LIVE TV', false),
    NgmyNewsBannerStyle.news24World => ('Around the globe', 'WORLD NEWS', '7:25', '24 LIVE', false),
    NgmyNewsBannerStyle.sportAngled => ('Game highlights', 'SPORT NEWS', '7:25', 'LIVE', false),
    NgmyNewsBannerStyle.livePointed => ('Happening now', 'LIVE NEWS', '', 'LIVE', true),
    NgmyNewsBannerStyle.morningAngled => ('Start your day', 'MORNING NEWS', '', '7:25', false),
    NgmyNewsBannerStyle.breakingOnline => ('Streaming now', 'BREAKING NEWS', 'ONLINE', 'LIVE', false),
    NgmyNewsBannerStyle.loremMessage => ('Your message', 'LOREM IPSUM', 'LAST MESSAGE', 'LIVE', false),
    NgmyNewsBannerStyle.weatherBox => ('Forecast update', 'WEATHER', 'ONLINE', 'LIVE', false),
  };
}
