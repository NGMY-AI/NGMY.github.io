import 'package:flutter/material.dart';

import 'ngmy_news_banner_painter.dart';
import 'ngmy_video_studio_models.dart';

const _videoSlot = NgmyVideoSlotDef(
  id: 'main',
  label: 'Your video (background)',
  youtubeRect: Rect.fromLTWH(0, 0, 1, 1),
  tiktokRect: Rect.fromLTWH(0, 0, 1, 1),
);

const _logoSlotYoutube = NgmyVideoSlotDef(
  id: 'logo',
  label: 'Brand logo (top-right)',
  youtubeRect: Rect.fromLTWH(0.78, 0.03, 0.18, 0.14),
  tiktokRect: Rect.fromLTWH(0.68, 0.03, 0.28, 0.10),
  kind: NgmySlotKind.logoAnim,
);

const List<NgmyVideoSlotDef> _broadcastSlots = [_videoSlot, _logoSlotYoutube];

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
    category: 'Broadcast Overlay',
    icon: _iconFor(style),
    forFormat: format,
    slots: _broadcastSlots,
    defaultHeadline: defaults.$1,
    defaultTitle: defaults.$2,
    defaultSubtitle: defaults.$3,
    defaultLive: defaults.$4,
    newsBannerStyle: style,
    newsTopAccent: defaults.$5,
  );
}

IconData _iconFor(NgmyNewsBannerStyle s) => switch (s) {
      NgmyNewsBannerStyle.broadcastGradient => Icons.gradient_rounded,
      NgmyNewsBannerStyle.ngmyPrime => Icons.eco_rounded,
      NgmyNewsBannerStyle.sunsetPulse => Icons.wb_twilight_rounded,
      NgmyNewsBannerStyle.cyberNeon => Icons.bolt_rounded,
      NgmyNewsBannerStyle.royalBlue => Icons.live_tv_rounded,
      NgmyNewsBannerStyle.fireAlert => Icons.local_fire_department_rounded,
      NgmyNewsBannerStyle.emeraldWave => Icons.waves_rounded,
      NgmyNewsBannerStyle.purpleHype => Icons.auto_awesome_rounded,
      NgmyNewsBannerStyle.midnightGold => Icons.diamond_rounded,
      NgmyNewsBannerStyle.tropicalVibe => Icons.beach_access_rounded,
      NgmyNewsBannerStyle.sportDynamic => Icons.sports_soccer_rounded,
      NgmyNewsBannerStyle.podcastPro => Icons.mic_rounded,
      NgmyNewsBannerStyle.newsFlash => Icons.flash_on_rounded,
      NgmyNewsBannerStyle.cleanMinimal => Icons.horizontal_rule_rounded,
      NgmyNewsBannerStyle.luxuryDark => Icons.nightlife_rounded,
    };

(String headline, String title, String subtitle, String live, bool topAccent) _defaultsFor(NgmyNewsBannerStyle s) {
  return switch (s) {
    NgmyNewsBannerStyle.broadcastGradient => (
        'MAKING MONEY FOR A BETTER WORLD',
        'NGMY',
        'NGMY Tv',
        'NGMYOfficial',
        false,
      ),
    NgmyNewsBannerStyle.ngmyPrime => (
        'NEXT GENERATION — MAKE YOURS',
        'NGMY',
        '@NGMY',
        '@NGMYGlobal',
        false,
      ),
    NgmyNewsBannerStyle.sunsetPulse => (
        'TOP STORY TONIGHT',
        'NGMY LIVE',
        'NGMY News',
        'NGMYUpdates',
        true,
      ),
    NgmyNewsBannerStyle.cyberNeon => (
        'THE FUTURE IS NOW',
        'NGMY DIGITAL',
        'NGMY Tech',
        'NGMYAI',
        false,
      ),
    NgmyNewsBannerStyle.royalBlue => (
        'BREAKING DEVELOPMENT',
        'NGMY NEWS',
        'NGMY Tv',
        'NGMYLive',
        false,
      ),
    NgmyNewsBannerStyle.fireAlert => (
        'URGENT UPDATE',
        'NGMY ALERT',
        'NGMY Alert',
        'NGMYNow',
        true,
      ),
    NgmyNewsBannerStyle.emeraldWave => (
        'GROW · EARN · BUILD',
        'NGMY',
        'NGMY Grow',
        'NGMYEarn',
        false,
      ),
    NgmyNewsBannerStyle.purpleHype => (
        'TRENDING NOW',
        'NGMY HYPE',
        'NGMY Viral',
        'NGMYTrends',
        false,
      ),
    NgmyNewsBannerStyle.midnightGold => (
        'EXCLUSIVE COVERAGE',
        'NGMY PRIME',
        'NGMY Gold',
        'NGMYVIP',
        false,
      ),
    NgmyNewsBannerStyle.tropicalVibe => (
        'FRESH FROM THE STUDIO',
        'NGMY FM',
        'NGMY Radio',
        'NGMYBeats',
        false,
      ),
    NgmyNewsBannerStyle.sportDynamic => (
        'GAME DAY HIGHLIGHTS',
        'NGMY SPORT',
        'NGMY Sport',
        'NGMYSports',
        false,
      ),
    NgmyNewsBannerStyle.podcastPro => (
        'Episode drops now — tap in',
        'NGMY PODCAST',
        'NGMY Pods',
        'NGMYListen',
        false,
      ),
    NgmyNewsBannerStyle.newsFlash => (
        'DEVELOPING STORY',
        'NGMY',
        'NGMY News',
        'NGMYFlash',
        false,
      ),
    NgmyNewsBannerStyle.cleanMinimal => (
        'Your headline goes here',
        'NGMY',
        '@NGMY',
        '@NGMYApp',
        false,
      ),
    NgmyNewsBannerStyle.luxuryDark => (
        'PREMIUM BROADCAST',
        'NGMY LUXE',
        'NGMY Luxe',
        'NGMYElite',
        false,
      ),
  };
}
