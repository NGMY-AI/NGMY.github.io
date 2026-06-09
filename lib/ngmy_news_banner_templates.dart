import 'package:flutter/material.dart';



import 'ngmy_news_banner_painter.dart';

import 'ngmy_video_studio_models.dart';



const _videoSlot = NgmyVideoSlotDef(

  id: 'main',

  label: 'Your video (background)',

  youtubeRect: Rect.fromLTWH(0, 0, 1, 1),

  tiktokRect: Rect.fromLTWH(0, 0, 1, 1),

);



const _logoSlot1 = NgmyVideoSlotDef(
  id: 'logo1',
  label: 'Brand logo 1 (top-right)',
  youtubeRect: Rect.fromLTWH(0.72, 0.04, 0.20, 0.10),
  tiktokRect: Rect.fromLTWH(0.60, 0.055, 0.28, 0.058),
  kind: NgmySlotKind.logoAnim,
);

const _logoSlot2 = NgmyVideoSlotDef(
  id: 'logo2',
  label: 'Brand logo 2 (top-left)',
  youtubeRect: Rect.fromLTWH(0.04, 0.04, 0.14, 0.10),
  tiktokRect: Rect.fromLTWH(0.06, 0.055, 0.20, 0.055),
  kind: NgmySlotKind.logoAnim,
);

const _logoSlot3 = NgmyVideoSlotDef(
  id: 'logo3',
  label: 'Brand logo 3 (bottom-left)',
  youtubeRect: Rect.fromLTWH(0.04, 0.82, 0.14, 0.11),
  tiktokRect: Rect.fromLTWH(0.06, 0.78, 0.20, 0.058),
  kind: NgmySlotKind.logoAnim,
);

const _logoSlot4 = NgmyVideoSlotDef(
  id: 'logo4',
  label: 'Brand logo 4 (bottom-right)',
  youtubeRect: Rect.fromLTWH(0.72, 0.82, 0.20, 0.11),
  tiktokRect: Rect.fromLTWH(0.60, 0.78, 0.28, 0.058),
  kind: NgmySlotKind.logoAnim,
);

const List<NgmyVideoSlotDef> _broadcastSlots = [_videoSlot, _logoSlot1, _logoSlot2, _logoSlot3, _logoSlot4];



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
  NgmyVideoTemplateId.ytBanner15,
  NgmyVideoTemplateId.ytBanner16,
  NgmyVideoTemplateId.ytBanner17,
  NgmyVideoTemplateId.ytBanner18,
  NgmyVideoTemplateId.ytBanner19,
  NgmyVideoTemplateId.ytBanner20,
  NgmyVideoTemplateId.ytBanner21,
  NgmyVideoTemplateId.ytBanner22,
  NgmyVideoTemplateId.ytBanner23,
  NgmyVideoTemplateId.ytBanner24,

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
  NgmyVideoTemplateId.ttBanner15,
  NgmyVideoTemplateId.ttBanner16,
  NgmyVideoTemplateId.ttBanner17,
  NgmyVideoTemplateId.ttBanner18,
  NgmyVideoTemplateId.ttBanner19,
  NgmyVideoTemplateId.ttBanner20,
  NgmyVideoTemplateId.ttBanner21,
  NgmyVideoTemplateId.ttBanner22,
  NgmyVideoTemplateId.ttBanner23,
  NgmyVideoTemplateId.ttBanner24,

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

    category: style.index >= 15 ? 'Luxury Collection' : 'Broadcast Overlay',

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
      NgmyNewsBannerStyle.imperialGold => Icons.workspace_premium_rounded,
      NgmyNewsBannerStyle.presidentialBlue => Icons.account_balance_rounded,
      NgmyNewsBannerStyle.royalCrimson => Icons.military_tech_rounded,
      NgmyNewsBannerStyle.diamondElite => Icons.diamond_outlined,
      NgmyNewsBannerStyle.marblePalace => Icons.museum_rounded,
      NgmyNewsBannerStyle.velvetThrone => Icons.chair_rounded,
      NgmyNewsBannerStyle.sovereignSilver => Icons.shield_rounded,
      NgmyNewsBannerStyle.crownJewel => Icons.emoji_events_rounded,
      NgmyNewsBannerStyle.executiveBrief => Icons.business_center_rounded,
      NgmyNewsBannerStyle.gildedHerald => Icons.flag_rounded,

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
    NgmyNewsBannerStyle.imperialGold => ('IMPERIAL ADDRESS', 'NGMY ROYAL', 'NGMY Crown', 'NGMYKing', false),
    NgmyNewsBannerStyle.presidentialBlue => ('STATE OF THE NATION', 'NGMY PRESIDENT', 'NGMY Office', 'NGMYState', false),
    NgmyNewsBannerStyle.royalCrimson => ('ROYAL DECREE', 'NGMY REGAL', 'NGMY Royal', 'NGMYRegal', true),
    NgmyNewsBannerStyle.diamondElite => ('EXCLUSIVE DIAMOND COVERAGE', 'NGMY ELITE', 'NGMY VIP', 'NGMYDiamond', false),
    NgmyNewsBannerStyle.marblePalace => ('FROM THE PALACE DESK', 'NGMY PALACE', 'NGMY Hall', 'NGMYPalace', false),
    NgmyNewsBannerStyle.velvetThrone => ('THE SOVEREIGN REPORT', 'NGMY THRONE', 'NGMY Velvet', 'NGMYThrone', false),
    NgmyNewsBannerStyle.sovereignSilver => ('SILVER BULLETIN', 'NGMY SOVEREIGN', 'NGMY Silver', 'NGMYSilver', false),
    NgmyNewsBannerStyle.crownJewel => ('CROWN JEWEL BROADCAST', 'NGMY JEWEL', 'NGMY Crown', 'NGMYJewel', true),
    NgmyNewsBannerStyle.executiveBrief => ('EXECUTIVE BRIEFING', 'NGMY EXEC', 'NGMY Board', 'NGMYExec', false),
    NgmyNewsBannerStyle.gildedHerald => ('GILDED HERALD LIVE', 'NGMY HERALD', 'NGMY Herald', 'NGMYHerald', true),

  };

}


