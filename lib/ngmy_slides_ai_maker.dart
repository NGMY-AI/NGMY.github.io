import 'dart:math' as math;
import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';

import 'ngmy_ai_client.dart';
import 'ngmy_ai_community_knowledge.dart';
import 'ngmy_ai_language.dart';
import 'ngmy_slides_luxe_fx.dart';
import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_slides_bio_phone.dart';
import 'ngmy_slides_finale.dart';

part 'ngmy_slides_luxe_recipe.dart';

/// Set by Slides: your Bio link page (published one first) for "bio" slides.
Future<NgmyBioDocument?> Function()? ngmySlidesLoadBio;

/// "Describe it and the AI makes it": speak (or type) what the presentation is
/// about, pick how many slides and a look, and get a finished, colourful deck.

/// A look the presentation can have — colours, decorations and motion.
class NgmySlidesAiStyle {
  const NgmySlidesAiStyle({
    required this.id,
    required this.label,
    required this.icon,
    required this.backgrounds,
    required this.text,
    required this.muted,
    required this.accents,
    this.transition = NgmySlideTransition.fade,
  });

  final String id;
  final String label;
  final IconData icon;

  /// Gradient pairs, used in turn slide by slide.
  final List<(int, int)> backgrounds;
  final int text;
  final int muted;
  final List<int> accents;
  final NgmySlideTransition transition;
}

const kNgmySlidesAiStyles = <NgmySlidesAiStyle>[
  NgmySlidesAiStyle(
    id: 'colorful',
    label: 'Colorful',
    icon: Icons.palette_rounded,
    backgrounds: [(0xFF7C3AED, 0xFFDB2777), (0xFF2563EB, 0xFF06B6D4), (0xFFF97316, 0xFFE11D48), (0xFF059669, 0xFF2563EB)],
    text: 0xFFFFFFFF,
    muted: 0xE6FFFFFF,
    accents: [0xFFFACC15, 0xFF22D3EE, 0xFFF472B6],
    transition: NgmySlideTransition.zoom,
  ),
  NgmySlidesAiStyle(
    id: 'nature',
    label: 'Nature',
    icon: Icons.forest_rounded,
    backgrounds: [(0xFF14532D, 0xFF166534), (0xFF365314, 0xFF4D7C0F), (0xFF064E3B, 0xFF0F766E), (0xFF3F6212, 0xFF15803D)],
    text: 0xFFF7FEE7,
    muted: 0xE6ECFCCB,
    accents: [0xFFA3E635, 0xFFFDE68A, 0xFF86EFAC],
    transition: NgmySlideTransition.fade,
  ),
  NgmySlidesAiStyle(
    id: 'vibe',
    label: 'Vibe',
    icon: Icons.graphic_eq_rounded,
    backgrounds: [(0xFF12002B, 0xFF4C1D95), (0xFF0F172A, 0xFF7E22CE), (0xFF1E1B4B, 0xFFBE185D), (0xFF020617, 0xFF6D28D9)],
    text: 0xFFFFFFFF,
    muted: 0xE6F5D0FE,
    accents: [0xFFF472B6, 0xFF22D3EE, 0xFFA78BFA],
    transition: NgmySlideTransition.slideLeft,
  ),
  NgmySlidesAiStyle(
    id: 'celebration',
    label: 'Celebration',
    icon: Icons.celebration_rounded,
    backgrounds: [(0xFFB45309, 0xFFDB2777), (0xFF7C2D12, 0xFFF59E0B), (0xFF9D174D, 0xFFF97316), (0xFF6D28D9, 0xFFEC4899)],
    text: 0xFFFFFFFF,
    muted: 0xEEFFF7ED,
    accents: [0xFFFDE68A, 0xFFFFFFFF, 0xFF67E8F9],
    transition: NgmySlideTransition.bounce,
  ),
  NgmySlidesAiStyle(
    id: 'professional',
    label: 'Professional',
    icon: Icons.business_center_rounded,
    backgrounds: [(0xFF0F172A, 0xFF1E3A8A), (0xFF111827, 0xFF1F2937), (0xFF0B1437, 0xFF1E40AF), (0xFF0F172A, 0xFF334155)],
    text: 0xFFFFFFFF,
    muted: 0xE6CBD5E1,
    accents: [0xFF38BDF8, 0xFFFACC15, 0xFF94A3B8],
    transition: NgmySlideTransition.push,
  ),
  NgmySlidesAiStyle(
    id: 'ocean',
    label: 'Ocean',
    icon: Icons.water_rounded,
    backgrounds: [(0xFF0C4A6E, 0xFF0369A1), (0xFF083344, 0xFF0E7490), (0xFF1E3A8A, 0xFF0891B2), (0xFF0C4A6E, 0xFF155E75)],
    text: 0xFFFFFFFF,
    muted: 0xE6E0F2FE,
    accents: [0xFF7DD3FC, 0xFF5EEAD4, 0xFFFDE68A],
    transition: NgmySlideTransition.slideUp,
  ),
  NgmySlidesAiStyle(
    id: 'sunset',
    label: 'Sunset',
    icon: Icons.wb_twilight_rounded,
    backgrounds: [(0xFF7C2D12, 0xFFF97316), (0xFF831843, 0xFFFB923C), (0xFF4C1D95, 0xFFF43F5E), (0xFF9A3412, 0xFFFBBF24)],
    text: 0xFFFFFFFF,
    muted: 0xEEFFEDD5,
    accents: [0xFFFDE68A, 0xFFFFFFFF, 0xFFFCA5A5],
    transition: NgmySlideTransition.fade,
  ),
  NgmySlidesAiStyle(
    id: 'minimal',
    label: 'Minimal',
    icon: Icons.crop_square_rounded,
    backgrounds: [(0xFFFFFFFF, 0xFFF1F5F9), (0xFFF8FAFC, 0xFFFFFFFF), (0xFFFFFFFF, 0xFFE2E8F0), (0xFFF8FAFC, 0xFFF1F5F9)],
    text: 0xFF0F172A,
    muted: 0xFF475569,
    accents: [0xFF2563EB, 0xFF0F172A, 0xFF94A3B8],
    transition: NgmySlideTransition.fade,
  ),
  NgmySlidesAiStyle(
    id: 'elegant',
    label: 'Elegant',
    icon: Icons.diamond_rounded,
    backgrounds: [(0xFF0C0A09, 0xFF292524), (0xFF1C1917, 0xFF0C0A09), (0xFF111111, 0xFF2D2416), (0xFF0C0A09, 0xFF1C1917)],
    text: 0xFFFEF3C7,
    muted: 0xE6E7E5E4,
    accents: [0xFFD4AF37, 0xFFFDE68A, 0xFFA8A29E],
    transition: NgmySlideTransition.dissolve,
  ),
  // Luxury: deep royal purple and navy with rich gold.
  NgmySlidesAiStyle(
    id: 'royal',
    label: 'Royal Gold',
    icon: Icons.workspace_premium_rounded,
    backgrounds: [(0xFF1E0B3A, 0xFF3B0764), (0xFF0B1437, 0xFF1E1B4B), (0xFF2E1065, 0xFF0B1437), (0xFF14082B, 0xFF4C1D95)],
    text: 0xFFFFF7E6,
    muted: 0xE6E9D5FF,
    accents: [0xFFF5C451, 0xFFD4AF37, 0xFFC4B5FD],
    transition: NgmySlideTransition.zoom,
  ),
  // Neon night: teal-to-violet aurora glow.
  NgmySlidesAiStyle(
    id: 'aurora',
    label: 'Aurora Glow',
    icon: Icons.auto_awesome_rounded,
    backgrounds: [(0xFF042F2E, 0xFF1E1B4B), (0xFF0B1437, 0xFF134E4A), (0xFF1E1B4B, 0xFF4A044E), (0xFF022C22, 0xFF312E81)],
    text: 0xFFF0FDFA,
    muted: 0xE6A7F3D0,
    accents: [0xFF2DD4BF, 0xFFA78BFA, 0xFFF472B6],
    transition: NgmySlideTransition.fade,
  ),
];

NgmySlidesAiStyle ngmySlidesAiStyleById(String id) =>
    kNgmySlidesAiStyles.firstWhere((s) => s.id == id.trim().toLowerCase(), orElse: () => kNgmySlidesAiStyles.first);

/// Extras the AI can add on top of the words.
enum NgmySlidesAiExtra { emojis, pictures, icons3d, animations, videoMotion, luxe }

extension NgmySlidesAiExtraLabel on NgmySlidesAiExtra {
  String get label => switch (this) {
        NgmySlidesAiExtra.emojis => 'Emojis',
        NgmySlidesAiExtra.pictures => 'Pictures',
        NgmySlidesAiExtra.icons3d => '3D icons & animals',
        NgmySlidesAiExtra.animations => 'Animations',
        NgmySlidesAiExtra.videoMotion => 'Video motion',
        NgmySlidesAiExtra.luxe => 'Luxury FX',
      };
  IconData get icon => switch (this) {
        NgmySlidesAiExtra.emojis => Icons.emoji_emotions_rounded,
        NgmySlidesAiExtra.pictures => Icons.photo_library_rounded,
        NgmySlidesAiExtra.icons3d => Icons.view_in_ar_rounded,
        NgmySlidesAiExtra.animations => Icons.animation_rounded,
        NgmySlidesAiExtra.videoMotion => Icons.movie_filter_rounded,
        NgmySlidesAiExtra.luxe => Icons.diamond_rounded,
      };
}

/// 3D icons (Microsoft Fluent Emoji 3D, MIT licence) the AI may pick from.
/// Every name here was checked to exist.
const kNgmySlides3dIcons = <String>[
  'Rocket', 'Trophy', 'Party popper', 'Confetti ball', 'Balloon', 'Wrapped gift', 'Birthday cake', 'Sparkles', 'Star',
  'Glowing star', 'Fire', 'Light bulb', 'Gem stone', 'Crown', 'Money bag', 'Dollar banknote', 'Chart increasing',
  'Bar chart', 'Bullseye', 'Globe showing americas', 'Globe showing europe-africa', 'Sun', 'Rainbow', 'Cloud',
  'High voltage', 'Red heart', 'Handshake', 'Graduation cap', 'Books', 'Open book', 'Pencil', 'Laptop', 'Mobile phone',
  'Microphone', 'Musical notes', 'Camera', 'Video camera', 'Megaphone', 'Bell', 'Calendar', 'Alarm clock',
  'Hourglass done', 'Key', 'Locked', 'Shield', 'Gear', 'Hammer and wrench', 'Magnifying glass tilted left', 'Package',
  'Shopping cart', 'House', 'Office building', 'Hospital', 'Ballot box with ballot', 'Automobile', 'Airplane', 'Seedling',
  'Deciduous tree', 'Evergreen tree', 'Palm tree', 'Sunflower', 'Cherry blossom', 'Herb', 'Four leaf clover', 'Water wave',
  'Mountain', 'Lion', 'Tiger face', 'Dog face', 'Cat face', 'Elephant', 'Unicorn', 'Butterfly', 'Honeybee', 'Owl', 'Eagle',
  'Dolphin', 'Turtle', 'Panda', 'Fox', 'Rabbit face', 'Monkey face', 'Penguin', 'Horse', 'Bird', 'Peacock', 'Parrot',
  'Red apple', 'Pizza', 'Hot beverage', 'Soccer ball', 'Basketball', 'Artist palette', 'Clapper board', 'Robot', 'Brain',
  'Check mark button', 'Red question mark', 'Speech balloon', 'Compass', 'Crystal ball', 'Puzzle piece', '1st place medal',
  'Smiling face with sunglasses', 'Grinning face with big eyes', 'Star-struck', 'Partying face', 'Thinking face',
  'Hundred points',
];

String? _match3dIcon(String raw) {
  final r = raw.trim().toLowerCase();
  if (r.isEmpty) return null;
  for (final n in kNgmySlides3dIcons) {
    if (n.toLowerCase() == r) return n;
  }
  for (final n in kNgmySlides3dIcons) {
    if (n.toLowerCase().contains(r) || r.contains(n.toLowerCase())) return n;
  }
  return null;
}

String ngmySlides3dIconUrl(String name) {
  final file = name.toLowerCase().replaceAll(' ', '_');
  return 'https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/${Uri.encodeComponent(name)}/3D/${file}_3d.png';
}

/// One slide as the AI outlines it.
class NgmySlidesAiOutlineSlide {
  NgmySlidesAiOutlineSlide({
    required this.kind,
    required this.title,
    this.subtitle = '',
    this.bullets = const [],
    this.notes = '',
    this.emoji = '',
    this.icon3d = '',
    this.imageQuery = '',
    this.picture = 0,
  });
  final String kind; // title, bullets, section, quote, closing
  final String title;
  final String subtitle;
  final List<String> bullets;
  final String notes;
  final String emoji;
  final String icon3d;
  final String imageQuery;
  /// Which of your own pictures goes on this slide (1-based; 0 = AI picks).
  final int picture;
}

class NgmySlidesAiOutline {
  NgmySlidesAiOutline({
    required this.title,
    required this.style,
    required this.slides,
    this.logoFrame = '',
    this.logoRing = '',
    this.photoFrame = '',
    this.photoRing = '',
  });
  final String title;
  final String style;
  final List<NgmySlidesAiOutlineSlide> slides;
  /// Picture shape / ring the AI chose from the description (or "" = plain).
  final String logoFrame;
  final String logoRing;
  final String photoFrame;
  final String photoRing;
}

const _kFrameRule = '- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury → gold, neon/night → neon, clean → rounded with no ring).';

const _kBioRule = '- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) — usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.';

const _kLanguageRule = '- LANGUAGE: if the request names a language (e.g. "in Swahili", "en français", "en español", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.';

extension NgmySlidesAiOutlineJson on NgmySlidesAiOutline {
  String toJsonString() => jsonEncode({
        'title': title,
        'style': style,
        'logo_frame': logoFrame,
        'logo_ring': logoRing,
        'photo_frame': photoFrame,
        'photo_ring': photoRing,
        'slides': [
          for (final s in slides)
            {
              'kind': s.kind,
              'title': s.title,
              'subtitle': s.subtitle,
              'bullets': s.bullets,
              'notes': s.notes,
              'emoji': s.emoji,
              'icon3d': s.icon3d,
              'image_query': s.imageQuery,
              if (s.picture > 0) 'picture': s.picture,
            },
        ],
      });
}

/// Prompt for changing a presentation the AI already wrote.
String ngmySlidesAiEditPrompt({
  required String outlineJson,
  required String request,
  required int currentSlide,
  Set<NgmySlidesAiExtra> extras = const {},
  int pictureCount = 0,
}) {
  final styles = kNgmySlidesAiStyles.map((s) => s.id).join(', ');
  return '''
You edit an existing presentation. Here it is as JSON:
$outlineJson

The presenter is looking at slide $currentSlide.

WHAT THEY WANT CHANGED (may be informal):
"""$request"""

Rules:
- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ($styles). "This slide" / "here" means slide $currentSlide. New slides go where they say (or right after slide $currentSlide).
- Keep every slide they did not ask about exactly as it is.
- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.
- LANGUAGE: keep the presentation's current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.
${ngmyLanguageDirective(request)}
${ngmyCommunityKnowledgeFor(request)}
- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.
$_kFrameRule
$_kBioRule
${_pictureRule(pictureCount)}
${extras.contains(NgmySlidesAiExtra.emojis) ? '- New slides get an "emoji".\n' : ''}${extras.contains(NgmySlidesAiExtra.icons3d) ? '- New slides get an "icon3d" from: ${kNgmySlides3dIcons.join(', ')}.\n' : ''}${extras.contains(NgmySlidesAiExtra.pictures) ? '- New content slides get an "image_query" (2-3 English words).\n' : ''}- Reply with the WHOLE presentation as JSON only, no markdown, same shape:
{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}
''';
}

String ngmySlidesAiPrompt({
  required String description,
  required int slideCount,
  required String styleId,
  Set<NgmySlidesAiExtra> extras = const {},
  int pictureCount = 0,
}) {
  final styles = kNgmySlidesAiStyles.map((s) => s.id).join(', ');
  final extraRules = StringBuffer();
  if (extras.contains(NgmySlidesAiExtra.emojis)) {
    extraRules.writeln('- "emoji": ONE emoji that fits the slide (e.g. 🎉 🚀 🌿 💡).');
  }
  if (extras.contains(NgmySlidesAiExtra.icons3d)) {
    extraRules.writeln('- "icon3d": ONE name copied exactly from this list that fits the slide: ${kNgmySlides3dIcons.join(', ')}.');
  }
  if (extras.contains(NgmySlidesAiExtra.pictures)) {
    extraRules.writeln('- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").');
  }
  return '''
You design presentation slides. Write a presentation from the user's request.

USER REQUEST (spoken, may be informal):
"""$description"""

Rules:
- Exactly $slideCount slides.
- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).
- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.
- Titles are short and punchy (max 7 words). Use the user's own names, facts and details; never invent prices, dates or statistics they did not give.
- "notes": 1-2 sentences the presenter can say.
$_kLanguageRule
${ngmyLanguageDirective(description)}
${ngmyCommunityKnowledgeFor(description)}
$_kFrameRule
$_kBioRule
${_pictureRule(pictureCount)}
- "style": ${styleId == 'auto' ? 'pick the best of: $styles (match the mood they describe: nature, vibe, celebration, colorful, professional...)' : 'use "$styleId"'}.
$extraRules- Reply with JSON only, no markdown, in this shape:
{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}
''';
}

/// Reads the AI's JSON (tolerates code fences and stray text around it).
NgmySlidesAiOutline? ngmyParseSlidesAiOutline(String raw, {required String fallbackStyle}) {
  var s = raw.trim();
  final start = s.indexOf('{');
  final end = s.lastIndexOf('}');
  if (start < 0 || end <= start) return null;
  s = s.substring(start, end + 1);
  try {
    final m = jsonDecode(s);
    if (m is! Map) return null;
    final slidesRaw = m['slides'];
    if (slidesRaw is! List || slidesRaw.isEmpty) return null;
    final slides = <NgmySlidesAiOutlineSlide>[];
    for (final e in slidesRaw) {
      if (e is! Map) continue;
      final bullets = (e['bullets'] is List) ? (e['bullets'] as List).map((b) => '$b'.trim()).where((b) => b.isNotEmpty).toList() : <String>[];
      slides.add(NgmySlidesAiOutlineSlide(
        kind: '${e['kind'] ?? 'bullets'}'.trim().toLowerCase(),
        title: '${e['title'] ?? ''}'.trim(),
        subtitle: '${e['subtitle'] ?? ''}'.trim(),
        bullets: bullets,
        notes: '${e['notes'] ?? ''}'.trim(),
        emoji: '${e['emoji'] ?? ''}'.trim(),
        icon3d: _match3dIcon('${e['icon3d'] ?? ''}') ?? '',
        imageQuery: '${e['image_query'] ?? e['imageQuery'] ?? ''}'.trim(),
        picture: int.tryParse('${e['picture'] ?? 0}') ?? 0,
      ));
    }
    if (slides.isEmpty) return null;
    final style = '${m['style'] ?? fallbackStyle}'.trim().toLowerCase();
    return NgmySlidesAiOutline(
      title: '${m['title'] ?? slides.first.title}'.trim(),
      style: kNgmySlidesAiStyles.any((x) => x.id == style) ? style : fallbackStyle,
      slides: slides,
      logoFrame: _pickOne(m['logo_frame'], kNgmySlideFrames),
      logoRing: _pickOne(m['logo_ring'], kNgmySlideRings),
      photoFrame: _pickOne(m['photo_frame'], kNgmySlideFrames),
      photoRing: _pickOne(m['photo_ring'], kNgmySlideRings),
    );
  } catch (_) {
    return null;
  }
}

int _withAlpha(int argb, int alpha) => (alpha.clamp(0, 255) << 24) | (argb & 0x00FFFFFF);

/// Pictures / 3D icons downloaded for a slide (data URIs, so they work offline and in PDFs).
typedef NgmySlidesAiAssets = ({String? picture, String? icon3d});

/// Turns an outline into real slides with the style's colours, decorations and extras.
NgmySlideDeck ngmyBuildSlidesAiDeck(
  NgmySlidesAiOutline outline, {
  Set<NgmySlidesAiExtra> extras = const {NgmySlidesAiExtra.animations},
  Map<int, NgmySlidesAiAssets> assets = const {},
  String? logo,
  List<String> userPictures = const [],
  /// Your choices from the dropdowns; null = let the AI decide.
  String? logoFrame,
  String? logoRing,
  String? photoFrame,
  String? photoRing,
  /// Your Bio page (as JSON) for a "bio" slide.
  String? bioJson,
}) {
  final luxe = extras.contains(NgmySlidesAiExtra.luxe);
  // Luxury FX: every deck gets its own royal theme and its own ornaments and moving light,
  // so no two Luxury FX presentations look the same.
  final luxeRecipe = luxe ? _NgmyLuxeRecipe.random() : null;
  final st = luxeRecipe?.style ?? ngmySlidesAiStyleById(outline.style);
  final animate = extras.contains(NgmySlidesAiExtra.animations) || luxe;
  final useEmoji = extras.contains(NgmySlidesAiExtra.emojis);
  final video = extras.contains(NgmySlidesAiExtra.videoMotion);
  String id() => NgmySlidesTemplates.newId();
  final slides = <NgmySlide>[];

  // 3D-feeling entrances, a different one each slide.
  const titleIns = [NgmySlideTransition.zoom, NgmySlideTransition.flip, NgmySlideTransition.slideUp, NgmySlideTransition.rotate3d, NgmySlideTransition.slideLeft];
  const artIns = [NgmySlideTransition.rotate3d, NgmySlideTransition.flip, NgmySlideTransition.spiral, NgmySlideTransition.bounce, NgmySlideTransition.flipVertical];
  const slideTrans = [NgmySlideTransition.fade, NgmySlideTransition.zoom, NgmySlideTransition.slideLeft, NgmySlideTransition.cube, NgmySlideTransition.flip, NgmySlideTransition.push];

  // Every element gets a "key" (the same actor on every slide), so in video
  // motion it travels from where it was to where it goes next.
  NgmySlideElement text(String t, double x, double y, double w, double h, double size,
      {FontWeight weight = FontWeight.w600, int? color, TextAlign align = TextAlign.left, bool bullets = false, FontStyle style = FontStyle.normal, NgmySlideTransition anim = NgmySlideTransition.fade, int delay = 0, String key = '', String fx = ''}) {
    return NgmySlideElement(
      id: id(),
      type: NgmySlideElementType.text,
      x: x,
      y: y,
      w: w,
      h: h,
      text: t,
      fontSize: size,
      fontWeight: weight,
      fontStyle: style,
      color: color ?? st.text,
      align: align,
      bulletList: bullets,
      textTransition: animate ? anim : NgmySlideTransition.none,
      textAnimDelayMs: animate ? delay : 0,
      morphKey: key,
      loopFx: animate ? fx : '',
    );
  }

  NgmySlideElement shape(NgmySlideShapeKind kind, double x, double y, double w, double h, int fill, {double rotation = 0, String key = '', String fx = ''}) {
    return NgmySlideElement(
      id: id(),
      type: NgmySlideElementType.shape,
      x: x,
      y: y,
      w: w,
      h: h,
      shape: kind,
      fillColor: fill,
      strokeColor: fill,
      strokeWidth: 0,
      rotation: rotation,
      morphKey: key,
      loopFx: animate ? fx : '',
    );
  }

  NgmySlideElement image(String dataUri, double x, double y, double w, double h,
      {NgmySlideTransition anim = NgmySlideTransition.bounce, int delay = 350, String key = '', String fx = ''}) {
    return NgmySlideElement(
      id: id(),
      type: NgmySlideElementType.image,
      x: x,
      y: y,
      w: w,
      h: h,
      imageRef: dataUri,
      textTransition: animate ? anim : NgmySlideTransition.none,
      textAnimDelayMs: animate ? delay : 0,
      morphKey: key,
      loopFx: animate ? fx : '',
    );
  }

  final hasLogo = (logo ?? '').isNotEmpty;
  var picIndex = 0;
  // When the AI placed your pictures slide by slide, follow that exactly.
  final placedByAi = outline.slides.any((s) => s.picture > 0 && s.picture <= userPictures.length);

  for (var i = 0; i < outline.slides.length; i++) {
    final o = outline.slides[i];
    final (bg, bgEnd) = st.backgrounds[i % st.backgrounds.length];
    final a1 = st.accents[i % st.accents.length];
    final a2 = st.accents[(i + 1) % st.accents.length];
    final tIn = titleIns[i % titleIns.length];
    final artIn = artIns[i % artIns.length];
    final els = <NgmySlideElement>[];
    var layout = NgmySlideLayout.titleContent;
    final asset = assets[i];
    final icon = asset?.icon3d;
    var picture = asset?.picture;
    // Your own pictures: where you said (picture N), otherwise in order on
    // the content slides.
    final chosen = o.picture > 0 && o.picture <= userPictures.length;
    if (chosen) {
      picture = userPictures[o.picture - 1];
    } else if (userPictures.isNotEmpty && !placedByAi && !const {'title', 'quote', 'closing', 'bio'}.contains(o.kind)) {
      picture = userPictures[picIndex++ % userPictures.length];
    }
    final emoji = useEmoji ? o.emoji : '';
    final sideArt = picture ?? icon;
    // A picture you placed on this slide takes the spotlight over a 3D icon.
    final heroArt = chosen ? picture : (icon ?? picture);
    final heroIsIcon = !chosen && icon != null;

    // A giant soft shape that sweeps across the show — on each slide you see
    // a different part of it, so moving between slides feels like one scene.
    if (video) {
      els.add(shape(NgmySlideShapeKind.circle, 0.62 - (i % 5) * 0.36, -0.55 + (i % 3) * 0.18, 1.15, 2.0, _withAlpha(a1, 0x1F), key: 'pano'));
    }

    switch (o.kind) {
      case 'title':
        layout = NgmySlideLayout.title;
        els
          ..add(shape(NgmySlideShapeKind.circle, 0.70, -0.25, 0.46, 0.82, _withAlpha(a1, 0x33), key: 'orb1', fx: 'drift'))
          ..add(shape(NgmySlideShapeKind.circle, -0.08, 0.68, 0.24, 0.43, _withAlpha(a2, 0x2E), key: 'orb2', fx: 'drift'));
        if (hasLogo) {
          els.add(image(logo!, 0.41, 0.04, 0.18, 0.27, anim: NgmySlideTransition.zoom, delay: 450, key: 'logo'));
        } else if (heroArt != null) {
          els.add(image(heroArt, 0.42, 0.04, 0.16, 0.28, anim: artIn, delay: 500, key: heroIsIcon ? 'hero' : 'photo', fx: heroIsIcon ? 'float3d' : ''));
        } else if (emoji.isNotEmpty) {
          els.add(text(emoji, 0.40, 0.04, 0.20, 0.24, 64, align: TextAlign.center, anim: NgmySlideTransition.bounce, delay: 500, key: 'hero', fx: 'float3d'));
        }
        els
          ..add(shape(NgmySlideShapeKind.rectangle, 0.40, 0.66, 0.20, 0.012, a1, key: 'bar', fx: 'pulse'))
          ..add(text(o.title, 0.08, 0.33, 0.84, 0.30, 54, weight: FontWeight.w900, align: TextAlign.center, anim: tIn, key: 'title'))
          ..add(text(o.subtitle, 0.12, 0.70, 0.76, 0.14, 24, color: st.muted, align: TextAlign.center, delay: 300, key: 'sub'));
      case 'section':
        layout = NgmySlideLayout.section;
        els.add(shape(NgmySlideShapeKind.circle, 0.64, 0.46, 0.42, 0.75, _withAlpha(a1, 0x2A), key: 'orb1', fx: 'drift'));
        if (heroArt != null) {
          els.add(image(heroArt, 0.70, 0.20, 0.24, 0.44, anim: artIn, key: picture != null && !heroIsIcon ? 'photo' : 'hero', fx: heroIsIcon ? 'float3d' : ''));
        } else {
          els.add(shape(NgmySlideShapeKind.hexagon, 0.78, 0.10, 0.18, 0.32, _withAlpha(a2, 0x40), rotation: 0.3, key: 'orb2', fx: 'drift'));
        }
        els
          ..add(shape(NgmySlideShapeKind.rectangle, 0.08, 0.60, 0.14, 0.014, a1, key: 'bar', fx: 'pulse'))
          ..add(text(emoji.isEmpty ? o.title : '$emoji  ${o.title}', 0.08, 0.34, 0.62, 0.24, 46, weight: FontWeight.w900, anim: tIn, key: 'title'))
          ..add(text(o.subtitle, 0.08, 0.64, 0.60, 0.14, 22, color: st.muted, delay: 250, key: 'sub'));
      case 'quote':
        els
          ..add(shape(NgmySlideShapeKind.circle, -0.12, -0.2, 0.36, 0.64, _withAlpha(a1, 0x24), key: 'orb1', fx: 'drift'))
          ..add(shape(NgmySlideShapeKind.circle, 0.82, 0.66, 0.26, 0.46, _withAlpha(a2, 0x26), key: 'orb2', fx: 'drift'))
          ..add(text('“', 0.06, 0.02, 0.2, 0.36, 140, weight: FontWeight.w900, color: _withAlpha(a1, 0xCC), anim: NgmySlideTransition.zoom, key: 'quote', fx: 'pulse'))
          ..add(text(o.title, 0.12, 0.30, 0.76, 0.34, 36, weight: FontWeight.w700, style: FontStyle.italic, align: TextAlign.center, anim: tIn, key: 'title'))
          ..add(text(o.subtitle.isEmpty ? '' : '— ${o.subtitle}', 0.12, 0.68, 0.76, 0.12, 22, color: st.muted, align: TextAlign.center, delay: 300, key: 'sub'));
        if (emoji.isNotEmpty) els.add(text(emoji, 0.82, 0.06, 0.12, 0.2, 52, align: TextAlign.center, anim: NgmySlideTransition.bounce, delay: 500, key: 'hero', fx: 'float3d'));
      case 'bio' when (bioJson ?? '').isNotEmpty:
        // Your Bio page on a phone (links tappable), with the invite beside it.
        els
          ..add(shape(NgmySlideShapeKind.circle, 0.58, 0.04, 0.44, 0.80, _withAlpha(a1, 0x2A), key: 'orb1', fx: 'drift'))
          ..add(shape(NgmySlideShapeKind.rectangle, 0.08, 0.62, 0.14, 0.014, a1, key: 'bar', fx: 'pulse'))
          ..add(text(emoji.isEmpty ? o.title : '$emoji  ${o.title}', 0.07, 0.30, 0.52, 0.28, 46, weight: FontWeight.w900, anim: tIn, key: 'title'))
          ..add(text(o.subtitle, 0.07, 0.66, 0.50, 0.16, 22, color: st.muted, delay: 250, key: 'sub'))
          ..add(NgmySlideElement(
            id: id(),
            type: NgmySlideElementType.bio,
            x: 0.64,
            y: 0.05,
            w: 0.27,
            h: 0.90,
            text: bioJson!,
            textTransition: animate ? NgmySlideTransition.slideUp : NgmySlideTransition.none,
            textAnimDelayMs: animate ? 350 : 0,
            morphKey: 'bio',
          ));
      case 'closing':
        layout = NgmySlideLayout.title;
        els
          ..add(shape(NgmySlideShapeKind.circle, -0.15, -0.30, 0.50, 0.90, _withAlpha(a1, 0x2E), key: 'orb1', fx: 'drift'))
          ..add(shape(NgmySlideShapeKind.circle, 0.78, 0.62, 0.30, 0.54, _withAlpha(a2, 0x33), key: 'orb2', fx: 'drift'));
        if (hasLogo) {
          els.add(image(logo!, 0.41, 0.05, 0.18, 0.27, anim: NgmySlideTransition.zoom, delay: 400, key: 'logo'));
        } else if (heroArt != null) {
          els.add(image(heroArt, 0.42, 0.05, 0.16, 0.28, anim: artIn, delay: 450, key: heroIsIcon ? 'hero' : 'photo', fx: heroIsIcon ? 'float3d' : ''));
        } else if (emoji.isNotEmpty) {
          els.add(text(emoji, 0.40, 0.05, 0.20, 0.24, 64, align: TextAlign.center, anim: NgmySlideTransition.bounce, delay: 450, key: 'hero', fx: 'float3d'));
        }
        els
          ..add(shape(NgmySlideShapeKind.rectangle, 0.42, 0.61, 0.16, 0.012, a1, key: 'bar', fx: 'pulse'))
          ..add(text(o.title, 0.10, 0.34, 0.80, 0.26, 52, weight: FontWeight.w900, align: TextAlign.center, anim: tIn, key: 'title'))
          ..add(text(o.subtitle, 0.14, 0.65, 0.72, 0.16, 24, color: st.muted, align: TextAlign.center, delay: 300, key: 'sub'));
      default:
        final points = o.bullets.isEmpty && o.subtitle.isNotEmpty ? [o.subtitle] : o.bullets;
        final hasArt = sideArt != null;
        // Alternate the art side so the show keeps moving left and right.
        final artLeft = i.isOdd && hasArt;
        final textX = artLeft ? 0.40 : 0.07;
        els
          ..add(shape(NgmySlideShapeKind.circle, artLeft ? -0.10 : 0.80, 0.52, 0.30, 0.54, _withAlpha(a2, 0x24), key: 'orb2', fx: 'drift'))
          ..add(shape(NgmySlideShapeKind.circle, artLeft ? 0.86 : -0.12, -0.18, 0.26, 0.46, _withAlpha(a1, 0x1E), key: 'orb1', fx: 'drift'))
          ..add(shape(NgmySlideShapeKind.rectangle, artLeft ? 0.988 : 0.0, 0.0, 0.012, 1.0, a1, key: 'rail'))
          ..add(text(emoji.isEmpty ? o.title : '$emoji  ${o.title}', textX, 0.08, hasArt ? 0.53 : 0.86, 0.16, 38, weight: FontWeight.w900, anim: tIn, key: 'title'))
          ..add(shape(NgmySlideShapeKind.rectangle, textX, 0.25, 0.12, 0.012, a1, key: 'bar', fx: 'pulse'))
          ..add(text(points.join('\n'), textX, 0.31, hasArt ? 0.53 : 0.70, 0.60, points.length > 4 ? 21 : 24, color: st.muted, bullets: true, anim: NgmySlideTransition.slideRight, delay: 250, key: 'sub'));
        if (hasArt) {
          final isPhoto = picture != null;
          final w = isPhoto ? 0.29 : 0.24;
          final x = artLeft ? 0.06 : (isPhoto ? 0.67 : 0.70);
          els.add(image(sideArt, x, isPhoto ? 0.22 : 0.26, w, isPhoto ? 0.56 : 0.44,
              anim: artIn, delay: 400, key: isPhoto ? 'photo' : 'hero', fx: isPhoto ? '' : 'float3d'));
        }
    }

    // Your logo stays in the corner of every other slide (and grows into the
    // centre on the first and last slides).
    if (hasLogo && o.kind != 'title' && o.kind != 'closing') {
      els.add(image(logo!, 0.885, 0.035, 0.085, 0.13, anim: NgmySlideTransition.fade, delay: 200, key: 'logo'));
    }

    // Logo and photos in their chosen shape and ring.
    for (final e in els) {
      if (e.morphKey == 'logo') {
        e.frame = logoFrame ?? outline.logoFrame;
        e.ring = logoRing ?? outline.logoRing;
      } else if (e.morphKey == 'photo') {
        e.frame = photoFrame ?? outline.photoFrame;
        e.ring = photoRing ?? outline.photoRing;
      }
    }

    if (luxeRecipe != null) _addLuxe(els, i, id, luxeRecipe);

    slides.add(NgmySlide(
      id: id(),
      title: o.title,
      notes: o.notes,
      layout: layout,
      background: bg,
      backgroundEnd: bgEnd,
      transition: luxeRecipe != null ? luxeRecipe.transitions[i % luxeRecipe.transitions.length] : (animate ? slideTrans[i % slideTrans.length] : st.transition),
      elements: els,
    ));
  }

  final name = outline.title.trim().isEmpty ? 'AI Presentation' : outline.title.trim();
  return NgmySlideDeck(id: id(), name: name.length > 60 ? name.substring(0, 60) : name, slides: slides);
}

Future<String?> _fetchAsDataUri(String url, {String fallbackMime = 'image/png'}) async {
  try {
    final r = await http.get(Uri.parse(url)).timeout(const Duration(seconds: 12));
    if (r.statusCode != 200 || r.bodyBytes.isEmpty || r.bodyBytes.length > 900000) return null;
    final type = (r.headers['content-type'] ?? fallbackMime).split(';').first.trim();
    if (!type.startsWith('image/')) return null;
    return 'data:$type;base64,${base64Encode(r.bodyBytes)}';
  } catch (_) {
    return null;
  }
}

/// A free, openly licensed photo for [query] (Openverse), as a data URI.
Future<String?> _fetchPicture(String query) async {
  final q = query.trim();
  if (q.isEmpty) return null;
  try {
    final r = await http
        .get(Uri.parse('https://api.openverse.org/v1/images/?q=${Uri.encodeQueryComponent(q)}&page_size=6&license_type=commercial&mature=false'))
        .timeout(const Duration(seconds: 10));
    if (r.statusCode != 200) return null;
    final results = (jsonDecode(r.body) as Map)['results'];
    if (results is! List) return null;
    for (final item in results.take(4)) {
      if (item is! Map) continue;
      final thumb = '${item['thumbnail'] ?? ''}';
      if (thumb.isEmpty) continue;
      final data = await _fetchAsDataUri(thumb, fallbackMime: 'image/jpeg');
      if (data != null) return data;
    }
  } catch (_) {}
  return null;
}

// Kept for the session so changing a presentation reuses its pictures.
final _iconCache = <String, Future<String?>>{};
final _pictureCache = <String, Future<String?>>{};

/// Downloads the pictures / 3D icons the outline asks for (in parallel).
Future<Map<int, NgmySlidesAiAssets>> ngmyFetchSlidesAiAssets(NgmySlidesAiOutline outline, Set<NgmySlidesAiExtra> extras) async {
  final wantPics = extras.contains(NgmySlidesAiExtra.pictures);
  final want3d = extras.contains(NgmySlidesAiExtra.icons3d);
  if (!wantPics && !want3d) return const {};
  final iconCache = _iconCache;
  final jobs = <Future<MapEntry<int, NgmySlidesAiAssets>>>[];
  for (var i = 0; i < outline.slides.length; i++) {
    final o = outline.slides[i];
    jobs.add(() async {
      // Photos on content slides; 3D icons everywhere they were asked for.
      final pic = wantPics && (o.kind == 'bullets' || o.kind == 'section') && o.imageQuery.isNotEmpty ? await _pictureCache.putIfAbsent(o.imageQuery.trim().toLowerCase(), () => _fetchPicture(o.imageQuery)) : null;
      String? icon;
      if (want3d && o.icon3d.isNotEmpty) {
        icon = await iconCache.putIfAbsent(o.icon3d, () => _fetchAsDataUri(ngmySlides3dIconUrl(o.icon3d)));
      }
      return MapEntry(i, (picture: pic, icon3d: icon));
    }());
  }
  final done = await Future.wait(jobs);
  return {for (final e in done) e.key: e.value};
}

/// Asks the AI for the outline, fetches extras and builds the deck. Throws a readable message on failure.
Future<NgmySlideDeck> ngmyCreateSlidesWithAi({
  required String description,
  required int slideCount,
  required String styleId,
  Set<NgmySlidesAiExtra> extras = const {NgmySlidesAiExtra.animations},
  void Function(String status)? onStatus,
  String? logo,
  List<String> pictures = const [],
  NgmySlidesAiLook look = const NgmySlidesAiLook(),
}) async {
  onStatus?.call('Writing your $slideCount slides…');
  final outline = await _askForOutline(
    ngmySlidesAiPrompt(description: description, slideCount: slideCount, styleId: styleId, extras: extras, pictureCount: pictures.length),
    fallbackStyle: styleId == 'auto' ? 'colorful' : styleId,
    failMessage: 'The AI could not write the slides. Try describing it again.',
  );
  return _finishAiDeck(outline, extras, onStatus, logo: logo, pictures: pictures, look: look);
}

/// Changes a presentation the AI wrote: [request] is what the user typed.
/// Returns the whole new set of AI slides (the caller swaps them in).
Future<NgmySlideDeck> ngmyEditSlidesWithAi({
  required String outlineJson,
  required String request,
  required int currentSlide,
  Set<NgmySlidesAiExtra> extras = const {NgmySlidesAiExtra.animations},
  void Function(String status)? onStatus,
  String? logo,
  List<String> pictures = const [],
  NgmySlidesAiLook look = const NgmySlidesAiLook(),
}) async {
  onStatus?.call('Making your changes…');
  final current = ngmyParseSlidesAiOutline(outlineJson, fallbackStyle: 'colorful');
  final outline = await _askForOutline(
    ngmySlidesAiEditPrompt(outlineJson: outlineJson, request: request, currentSlide: currentSlide, extras: extras, pictureCount: pictures.length),
    fallbackStyle: current?.style ?? 'colorful',
    failMessage: 'The AI could not make that change. Try saying it another way.',
  );
  return _finishAiDeck(outline, extras, onStatus, logo: logo, pictures: pictures, look: look);
}

Future<NgmySlidesAiOutline> _askForOutline(String prompt, {required String fallbackStyle, required String failMessage}) async {
  final key = await ngmyResolveGeminiApiKey();
  if (key.trim().isEmpty) throw 'AI is not set up yet. Ask the admin to turn on AI.';
  final creds = ngmyParseAiCredentials(key);
  String? lastError;
  for (var attempt = 0; attempt < 2; attempt++) {
    final r = await ngmyAiGenerateWithCredentials(creds, prompt);
    if (r.text != null) {
      final outline = ngmyParseSlidesAiOutline(r.text!, fallbackStyle: fallbackStyle);
      if (outline != null) return outline;
    } else {
      lastError = r.error;
    }
  }
  throw lastError != null && ngmyIsOfflineOrNetworkError(lastError) ? 'No internet connection — try again when you are online.' : failMessage;
}

/// Downloads extras, builds the slides and remembers the outline for later changes.
Future<NgmySlideDeck> _finishAiDeck(NgmySlidesAiOutline outline, Set<NgmySlidesAiExtra> extras, void Function(String status)? onStatus,
    {String? logo, List<String> pictures = const [], NgmySlidesAiLook look = const NgmySlidesAiLook()}) async {
  var assets = const <int, NgmySlidesAiAssets>{};
  if (extras.contains(NgmySlidesAiExtra.pictures) || extras.contains(NgmySlidesAiExtra.icons3d)) {
    onStatus?.call('Adding pictures and 3D art…');
    // Your own pictures replace stock photos; 3D icons are still fetched.
    assets = await ngmyFetchSlidesAiAssets(outline, pictures.isEmpty ? extras : ({...extras}..remove(NgmySlidesAiExtra.pictures)));
  }
  // A "bio" slide shows your own Bio page on a phone.
  String? bioJson;
  if (outline.slides.any((s) => s.kind == 'bio')) {
    final bio = await ngmySlidesLoadBio?.call();
    if (bio != null) bioJson = ngmyBioToSlideText(bio);
  }
  final deck = ngmyBuildSlidesAiDeck(outline, extras: extras, assets: assets, logo: logo, userPictures: pictures,
      logoFrame: look.logoFrame, logoRing: look.logoRing, photoFrame: look.photoFrame, photoRing: look.photoRing, bioJson: bioJson);
  deck
    ..aiOutlineJson = NgmySlidesAiOutline(
      title: outline.title,
      style: outline.style,
      slides: outline.slides,
      logoFrame: look.logoFrame ?? outline.logoFrame,
      logoRing: look.logoRing ?? outline.logoRing,
      photoFrame: look.photoFrame ?? outline.photoFrame,
      photoRing: look.photoRing ?? outline.photoRing,
    ).toJsonString()
    ..aiSlideIds = deck.slides.map((s) => s.id).toList()
    ..aiExtras = extras.map((e) => e.name).toList()
    ..cinematic = extras.contains(NgmySlidesAiExtra.videoMotion);
  return deck;
}

/// The extras a deck's AI slides were made with.
Set<NgmySlidesAiExtra> ngmySlidesAiExtrasOf(NgmySlideDeck deck) {
  final names = deck.aiExtras ?? const [];
  return {for (final e in NgmySlidesAiExtra.values) if (names.contains(e.name)) e};
}

/// The "describe it" sheet. Returns the finished deck, or null if closed.
Future<NgmySlideDeck?> showNgmySlidesAiMaker(BuildContext context) {
  return showModalBottomSheet<NgmySlideDeck>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => const _SlidesAiMakerSheet(),
  );
}

class _SlidesAiMakerSheet extends StatefulWidget {
  const _SlidesAiMakerSheet();
  @override
  State<_SlidesAiMakerSheet> createState() => _SlidesAiMakerSheetState();
}

class _SlidesAiMakerSheetState extends State<_SlidesAiMakerSheet> {
  final _desc = TextEditingController();
  final _descFocus = FocusNode();
  /// Non-stop: the show starts over after the last slide.
  bool _loop = false;
  /// Ending celebration after the last slide (style "" = none).
  NgmyFinaleChoice _finale = const NgmyFinaleChoice(style: '');
  /// Your own logo and pictures (data URIs), used instead of made-up art.
  String? _logo;
  List<String> _pictures = [];
  /// Picture shape / ring for the logo and your pictures (null = Auto: the AI picks).
  String? _logoFrame;
  String? _logoRing;
  String? _photoFrame;
  String? _photoRing;
  bool _busy = false;
  String _status = '';
  int _count = 7;
  String _style = 'auto';
  // Only Emojis is on when the maker opens; they switch on what else they want.
  final Set<NgmySlidesAiExtra> _extras = {NgmySlidesAiExtra.emojis};
  String? _error;

  static const _counts = [3, 5, 7, 10, 12, 15];

  @override
  void dispose() {
    _desc.dispose();
    _descFocus.dispose();
    super.dispose();
  }

  static String _dataUri(List<int> bytes, String name) {
    final lower = name.toLowerCase();
    final mime = lower.endsWith('.png') ? 'image/png' : (lower.endsWith('.webp') ? 'image/webp' : 'image/jpeg');
    return 'data:$mime;base64,${base64Encode(bytes)}';
  }

  Future<void> _pickLogo() async {
    try {
      final img = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 700, maxHeight: 700, imageQuality: 90);
      if (img == null) return;
      final bytes = await img.readAsBytes();
      if (mounted) setState(() => _logo = _dataUri(bytes, img.name));
    } catch (_) {}
  }

  static const _maxPictures = 20;

  /// Pick one or many; each pick adds to the pictures already chosen (max 20).
  Future<void> _pickPictures() async {
    final room = _maxPictures - _pictures.length;
    if (room <= 0) return;
    try {
      final imgs = await ImagePicker().pickMultiImage(maxWidth: 1100, maxHeight: 1100, imageQuality: 78, limit: room > 1 ? room : null);
      if (imgs.isEmpty) return;
      final out = List<String>.from(_pictures);
      for (final img in imgs) {
        if (out.length >= _maxPictures) break;
        out.add(_dataUri(await img.readAsBytes(), img.name));
      }
      if (mounted) setState(() => _pictures = out);
    } catch (_) {}
  }

  /// Small dropdown: picture shape or ring. "Auto" lets the AI follow your description.

  /// The picture to preview looks on: your logo / first picture, or a sample.
  Widget _sampleImage(String? thumb) {
    if (thumb != null && thumb.contains(',')) {
      try {
        return Image.memory(base64Decode(thumb.split(',').last), fit: BoxFit.cover, gaplessPlayback: true);
      } catch (_) {}
    }
    return const DecoratedBox(
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFF97316), Color(0xFFDB2777), Color(0xFF7C3AED)]),
      ),
      child: Center(child: Icon(Icons.person_rounded, color: Colors.white70)),
    );
  }

  /// One look drawn for real: [frame] shape with [ring] on the sample picture.
  Widget _lookPreview(String? thumb, String frame, String ring, double size) {
    final shown = frame.isEmpty && ring.isEmpty ? 'rounded' : frame;
    return SizedBox.square(
      dimension: size,
      child: ngmyFramedPicture(image: _sampleImage(thumb), frame: shown, ring: ring),
    );
  }

  /// Small button showing the chosen shape (or ring) itself — tap to see them all.
  Widget _lookPicker({required bool rings, required String? value, required String? otherValue, required String? thumb, required ValueChanged<String?> onChanged}) {
    // Shapes are previewed with the chosen ring and rings on the chosen shape.
    String frameFor(String? v) => rings ? (otherValue ?? 'circle') : (v ?? '');
    String ringFor(String? v) => rings ? (v ?? '') : (otherValue ?? '');
    return Material(
      color: Colors.white.withValues(alpha: 0.05),
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        borderRadius: BorderRadius.circular(12),
        onTap: () async {
          final picked = await showModalBottomSheet<String>(
            isScrollControlled: rings,
            context: context,
            backgroundColor: const Color(0xFF111827),
            shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
            builder: (ctx) {
              Widget tile(String id, Widget child) {
                final on = (id == '__auto' && value == null) || id == value;
                return GestureDetector(
                  onTap: () => Navigator.pop(ctx, id),
                  child: Container(
                    padding: const EdgeInsets.all(6),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(16),
                      color: on ? const Color(0xFF8B5CF6).withValues(alpha: 0.22) : Colors.white.withValues(alpha: 0.04),
                      border: Border.all(color: on ? const Color(0xFFA78BFA) : Colors.white10, width: on ? 2 : 1),
                    ),
                    child: child,
                  ),
                );
              }

              final grid = GridView.count(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                crossAxisCount: 4,
                mainAxisSpacing: 10,
                crossAxisSpacing: 10,
                children: [
                  // Auto: let the AI choose from what you describe.
                  tile(
                    '__auto',
                    Container(
                      decoration: const BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFF22D3EE)]),
                      ),
                      child: const Center(child: Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 28)),
                    ),
                  ),
                  for (final (id, _) in rings ? kNgmySlideRings : kNgmySlideFrames)
                    tile(id, _lookPreview(thumb, frameFor(id), ringFor(id), 64)),
                ],
              );
              if (!rings) {
                return SafeArea(child: Padding(padding: const EdgeInsets.fromLTRB(16, 14, 16, 16), child: grid));
              }
              // Rings sheet: the rings, then the ending celebrations under them.
              Widget finaleTile(String id, String label) {
                final on = _finale.style == id;
                return GestureDetector(
                  onTap: () => Navigator.pop(ctx, 'finale:$id'),
                  child: Column(children: [
                    Expanded(
                      child: Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(12),
                          border: Border.all(color: on ? const Color(0xFFFDE68A) : Colors.white12, width: on ? 2.5 : 1),
                        ),
                        child: ClipRRect(
                          borderRadius: BorderRadius.circular(10),
                          child: id.isEmpty
                              ? Container(color: Colors.white.withValues(alpha: 0.05), child: const Icon(Icons.block_rounded, color: Colors.white38))
                              : IgnorePointer(child: NgmyFinaleView(choice: _finale.copyWith(style: id), preview: true, animate: false)),
                        ),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(label,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(color: on ? const Color(0xFFFDE68A) : Colors.white70, fontSize: 10.5, fontWeight: FontWeight.w700)),
                  ]),
                );
              }

              return SafeArea(
                child: ConstrainedBox(
                  constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(ctx).height * 0.85),
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      const Text('Rings', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                      const SizedBox(height: 10),
                      grid,
                      const SizedBox(height: 22),
                      const Row(children: [
                        Icon(Icons.celebration_rounded, color: Color(0xFFFDE68A), size: 18),
                        SizedBox(width: 6),
                        Text('Ending celebration', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                      ]),
                      const SizedBox(height: 4),
                      const Text('Plays big after your last slide. Tap one to watch it, change the words or add your logo.',
                          style: TextStyle(color: Colors.white54, fontSize: 12)),
                      const SizedBox(height: 10),
                      GridView.count(
                        shrinkWrap: true,
                        physics: const NeverScrollableScrollPhysics(),
                        crossAxisCount: 3,
                        mainAxisSpacing: 10,
                        crossAxisSpacing: 10,
                        childAspectRatio: 1.15,
                        children: [
                          finaleTile('', 'None'),
                          for (final st in kNgmyFinales) finaleTile(st.id, st.name),
                        ],
                      ),
                    ]),
                  ),
                ),
              );
            },
          );
          if (picked == null) return;
          if (picked.startsWith('finale:')) {
            final id = picked.substring(7);
            if (id.isEmpty) {
              setState(() => _finale = _finale.copyWith(style: ''));
              return;
            }
            if (!mounted) return;
            final chosen = await showNgmyFinalePreview(context, _finale.copyWith(style: id, logo: _finale.logo.isEmpty ? (_logo ?? '') : _finale.logo));
            if (chosen != null && mounted) setState(() => _finale = chosen);
            return;
          }
          onChanged(picked == '__auto' ? null : picked);
        },
        child: Container(
          height: 44,
          padding: const EdgeInsets.symmetric(horizontal: 6),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: value == null ? Colors.white12 : const Color(0xFF8B5CF6).withValues(alpha: 0.6)),
          ),
          child: Row(
            children: [
              Expanded(
                child: Center(
                  child: value == null
                      // Auto: a hint of what this button changes (shapes / ring) + AI sparkle.
                      ? SizedBox(
                          width: 34,
                          height: 30,
                          child: Stack(
                            clipBehavior: Clip.none,
                            children: [
                              Center(
                                child: Icon(
                                  rings ? Icons.radio_button_unchecked_rounded : Icons.category_rounded,
                                  color: Colors.white38,
                                  size: 26,
                                ),
                              ),
                              const Positioned(right: -2, top: -2, child: Icon(Icons.auto_awesome_rounded, color: Color(0xFFC4B5FD), size: 14)),
                            ],
                          ),
                        )
                      : _lookPreview(thumb, frameFor(value), ringFor(value), 34),
                ),
              ),
              const Icon(Icons.expand_more_rounded, color: Colors.white54, size: 18),
            ],
          ),
        ),
      ),
    );
  }

  Widget _mediaButton({required IconData icon, required String label, String? thumb, required VoidCallback onTap, VoidCallback? onClear}) {
    Widget? preview;
    if (thumb != null && thumb.contains(',')) {
      try {
        preview = ClipRRect(
          borderRadius: BorderRadius.circular(8),
          child: Image.memory(base64Decode(thumb.split(',').last), width: 30, height: 30, fit: BoxFit.cover),
        );
      } catch (_) {}
    }
    return Material(
      color: Colors.white.withValues(alpha: 0.05),
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Container(
          height: 50,
          padding: const EdgeInsets.symmetric(horizontal: 10),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: thumb == null ? Colors.white12 : const Color(0xFF22C55E).withValues(alpha: 0.6)),
          ),
          child: Row(
            children: [
              preview ?? Icon(icon, color: const Color(0xFF86EFAC), size: 20),
              const SizedBox(width: 8),
              Expanded(child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12.5))),
              if (onClear != null)
                GestureDetector(onTap: onClear, child: const Icon(Icons.close_rounded, color: Colors.white54, size: 18)),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _create() async {
    final d = _desc.text.trim();
    if (d.length < 6) {
      setState(() => _error = 'Type a little about the presentation first.');
      return;
    }
    // They asked for their logo but have not given it yet: ask for it.
    if (_logo == null && RegExp(r'\blogo\b', caseSensitive: false).hasMatch(d)) {
      setState(() => _error = 'You mentioned your logo — tap "Add your logo" below to upload it, so the AI puts the real one in.');
      return;
    }
    setState(() {
      _busy = true;
      _error = null;
      _status = 'Writing your $_count slides…';
    });
    try {
      final deck = await ngmyCreateSlidesWithAi(
        description: d,
        slideCount: _count,
        styleId: _style,
        extras: _extras,
        logo: _logo,
        pictures: _pictures,
        look: NgmySlidesAiLook(logoFrame: _logoFrame, logoRing: _logoRing, photoFrame: _photoFrame, photoRing: _photoRing),
        onStatus: (s) {
          if (mounted) setState(() => _status = s);
        },
      );
      deck.loop = _loop;
      if (!_finale.none) {
        deck
          ..finaleStyle = _finale.style
          ..finaleTitle = _finale.title
          ..finaleSubtitle = _finale.subtitle
          ..finaleLogo = _finale.logo.isNotEmpty ? _finale.logo : _logo;
      }
      if (mounted) Navigator.of(context).pop(deck);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = '$e';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    const panel = Color(0xFF111827);
    const accent = Color(0xFF8B5CF6);
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.92, maxWidth: 680),
        decoration: const BoxDecoration(
          color: panel,
          borderRadius: BorderRadius.vertical(top: Radius.circular(26)),
        ),
        child: SafeArea(
          top: false,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)))),
                const SizedBox(height: 14),
                // Centered header: title and one short line.
                const Text(
                  'Create with AI',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24, letterSpacing: 0.3),
                ),
                const SizedBox(height: 4),
                const Text(
                  'Write your idea in any language — the AI makes the slides.',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white60, fontSize: 13, height: 1.35),
                ),
                const SizedBox(height: 18),
                // Green mic (no recording — the AI works from typing). Tapping it
                // just puts the cursor in the box below.
                Center(
                  child: GestureDetector(
                    onTap: () => _descFocus.requestFocus(),
                    child: Container(
                      width: 84,
                      height: 84,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        gradient: const LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: [Color(0xFF4ADE80), Color(0xFF16A34A), Color(0xFF15803D)],
                        ),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.35), width: 2),
                        boxShadow: [
                          BoxShadow(color: const Color(0xFF22C55E).withValues(alpha: 0.5), blurRadius: 24, spreadRadius: 2),
                        ],
                      ),
                      child: const Icon(Icons.mic_rounded, color: Colors.white, size: 40),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                const Text(
                  'Type your presentation below',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w800, fontSize: 12),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: _desc,
                  focusNode: _descFocus,
                  minLines: 3,
                  maxLines: 6,
                  style: const TextStyle(color: Colors.white, height: 1.35),
                  decoration: InputDecoration(
                    hintText: 'Type your idea here…',
                    hintStyle: const TextStyle(color: Colors.white38, fontSize: 13),
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.05),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1))),
                    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: accent)),
                  ),
                ),
                const SizedBox(height: 18),
                // Your logo and your own pictures (optional).
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Column(
                        children: [
                          _mediaButton(
                            icon: Icons.verified_rounded,
                            label: _logo == null ? 'Add your logo' : 'Logo added',
                            thumb: _logo,
                            onTap: _pickLogo,
                            onClear: _logo == null ? null : () => setState(() => _logo = null),
                          ),
                          const SizedBox(height: 6),
                          Row(
                            children: [
                              Expanded(child: _lookPicker(rings: false, value: _logoFrame, otherValue: _logoRing, thumb: _logo, onChanged: (v) => setState(() => _logoFrame = v))),
                              const SizedBox(width: 6),
                              Expanded(child: _lookPicker(rings: true, value: _logoRing, otherValue: _logoFrame, thumb: _logo, onChanged: (v) => setState(() => _logoRing = v))),
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        children: [
                          _mediaButton(
                            icon: Icons.add_photo_alternate_rounded,
                            label: _pictures.isEmpty ? 'Add your pictures' : '${_pictures.length} picture${_pictures.length == 1 ? '' : 's'}',
                            thumb: _pictures.isEmpty ? null : _pictures.first,
                            onTap: _pickPictures,
                            onClear: _pictures.isEmpty ? null : () => setState(() => _pictures = []),
                          ),
                          const SizedBox(height: 6),
                          Row(
                            children: [
                              Expanded(child: _lookPicker(rings: false, value: _photoFrame, otherValue: _photoRing, thumb: _pictures.isEmpty ? null : _pictures.first, onChanged: (v) => setState(() => _photoFrame = v))),
                              const SizedBox(width: 6),
                              Expanded(child: _lookPicker(rings: true, value: _photoRing, otherValue: _photoFrame, thumb: _pictures.isEmpty ? null : _pictures.first, onChanged: (v) => setState(() => _photoRing = v))),
                            ],
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                const Text(
                  'Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.',
                  style: TextStyle(color: Colors.white38, fontSize: 11.5),
                ),
                if (!_finale.none) ...[
                  const SizedBox(height: 10),
                  // The ending chosen in the ring button.
                  Align(
                    alignment: Alignment.centerLeft,
                    child: Container(
                      padding: const EdgeInsets.fromLTRB(10, 6, 4, 6),
                      decoration: BoxDecoration(
                        color: const Color(0x22F5C451),
                        borderRadius: BorderRadius.circular(999),
                        border: Border.all(color: const Color(0x66F5C451)),
                      ),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        const Icon(Icons.celebration_rounded, color: Color(0xFFFDE68A), size: 16),
                        const SizedBox(width: 6),
                        Text('Ending: ${ngmyFinaleStyle(_finale.style)?.name ?? ''}',
                            style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w800, fontSize: 12)),
                        InkWell(
                          onTap: () => setState(() => _finale = _finale.copyWith(style: '')),
                          child: const Padding(padding: EdgeInsets.all(4), child: Icon(Icons.close_rounded, color: Colors.white54, size: 16)),
                        ),
                      ]),
                    ),
                  ),
                ],
                const SizedBox(height: 18),
                const Text('How many slides?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                const SizedBox(height: 8),
                Row(
                  children: [
                    for (final c in _counts)
                      Expanded(
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 3),
                          child: GestureDetector(
                            onTap: () => setState(() => _count = c),
                            child: AnimatedContainer(
                              duration: const Duration(milliseconds: 180),
                              height: 42,
                              alignment: Alignment.center,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                color: _count == c ? accent : Colors.white.withValues(alpha: 0.06),
                                border: Border.all(color: _count == c ? Colors.white54 : Colors.white12),
                              ),
                              child: Text('$c', style: TextStyle(color: Colors.white, fontWeight: _count == c ? FontWeight.w900 : FontWeight.w700)),
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
                const SizedBox(height: 18),
                const Text('Add to the slides', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                const SizedBox(height: 8),
                // Three in a row.
                LayoutBuilder(builder: (context, c) {
                  final w = (c.maxWidth - 16) / 3;
                  return Wrap(
                    spacing: 8,
                    runSpacing: 8,
                    children: [for (final x in NgmySlidesAiExtra.values) SizedBox(width: w, child: _extraChip(x))],
                  );
                }),
                const SizedBox(height: 18),
                const Text('Look & feel', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    _styleChip('auto', 'Let AI choose', Icons.auto_awesome_rounded, const [Color(0xFF8B5CF6), Color(0xFF22D3EE)]),
                    for (final s in kNgmySlidesAiStyles)
                      _styleChip(s.id, s.label, s.icon, [Color(s.backgrounds.first.$1), Color(s.backgrounds.first.$2)]),
                  ],
                ),
                const SizedBox(height: 16),
                Container(
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.04),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: _loop ? const Color(0xFF22C55E).withValues(alpha: 0.5) : Colors.white12),
                  ),
                  child: SwitchListTile(
                    value: _loop,
                    onChanged: (v) => setState(() => _loop = v),
                    activeThumbColor: const Color(0xFF22C55E),
                    secondary: const Icon(Icons.all_inclusive_rounded, color: Color(0xFF86EFAC)),
                    title: const Text('Non-stop (loop)', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                    subtitle: const Text('After the last slide it starts again from the first', style: TextStyle(color: Colors.white54, fontSize: 12)),
                  ),
                ),
                if (_error != null) ...[
                  const SizedBox(height: 14),
                  Text(_error!, style: const TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w700, fontSize: 12.5, height: 1.35)),
                ],
                const SizedBox(height: 18),
                SizedBox(
                  height: 54,
                  child: ElevatedButton.icon(
                    onPressed: _busy ? null : _create,
                    style: ElevatedButton.styleFrom(
                      backgroundColor: accent,
                      foregroundColor: Colors.white,
                      disabledBackgroundColor: accent.withValues(alpha: 0.5),
                      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                    ),
                    icon: _busy
                        ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.4, color: Colors.white))
                        : const Icon(Icons.auto_awesome_rounded),
                    label: Text(
                      _busy ? _status : 'Create my presentation',
                      style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _extraChip(NgmySlidesAiExtra x) {
    final on = _extras.contains(x);
    void toggle() => setState(() => on ? _extras.remove(x) : _extras.add(x));
    if (x == NgmySlidesAiExtra.luxe) return _NgmyLuxeTile(on: on, onTap: toggle);
    return GestureDetector(
      onTap: toggle,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        height: 64,
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 6),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(16),
          gradient: on ? const LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]) : null,
          color: on ? null : Colors.white.withValues(alpha: 0.05),
          border: Border.all(color: on ? Colors.white54 : Colors.white12),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(on ? Icons.check_circle_rounded : x.icon, size: 20, color: Colors.white),
            const SizedBox(height: 4),
            FittedBox(
              fit: BoxFit.scaleDown,
              child: Text(x.label, style: TextStyle(color: Colors.white, fontWeight: on ? FontWeight.w900 : FontWeight.w600, fontSize: 12)),
            ),
          ],
        ),
      ),
    );
  }

  Widget _styleChip(String id, String label, IconData icon, List<Color> colors) {
    final selected = _style == id;
    return GestureDetector(
      onTap: () => setState(() => _style = id),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        padding: const EdgeInsets.fromLTRB(6, 6, 12, 6),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(99),
          color: selected ? Colors.white.withValues(alpha: 0.12) : Colors.white.withValues(alpha: 0.04),
          border: Border.all(color: selected ? Colors.white70 : Colors.white12, width: selected ? 1.6 : 1),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 26,
              height: 26,
              decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: colors)),
              child: Icon(icon, size: 14, color: Colors.white),
            ),
            const SizedBox(width: 7),
            Text(label, style: TextStyle(color: Colors.white, fontWeight: selected ? FontWeight.w900 : FontWeight.w600, fontSize: 12.5)),
          ],
        ),
      ),
    );
  }
}

/// The green mic after the AI made a presentation: type what to change
/// ("add a slide about prices", "make it in French"…). Returns the new AI
/// slides, or null if closed.
Future<NgmySlideDeck?> showNgmySlidesAiEditor(BuildContext context, {required NgmySlideDeck deck, required int currentSlide}) {
  return showModalBottomSheet<NgmySlideDeck>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _SlidesAiEditSheet(deck: deck, currentSlide: currentSlide),
  );
}

class _SlidesAiEditSheet extends StatefulWidget {
  const _SlidesAiEditSheet({required this.deck, required this.currentSlide});
  final NgmySlideDeck deck;
  final int currentSlide;
  @override
  State<_SlidesAiEditSheet> createState() => _SlidesAiEditSheetState();
}

class _SlidesAiEditSheetState extends State<_SlidesAiEditSheet> {
  final _ask = TextEditingController();
  bool _busy = false;
  String _status = '';
  String? _error;

  static const _ideas = [
    'Add a slide about…',
    'Make this slide shorter',
    'Translate everything to Swahili',
    'Add a slide with our contact details',
    'Change the style to luxury',
    'Remove the last slide',
  ];

  @override
  void dispose() {
    _ask.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final request = _ask.text.trim();
    if (request.length < 3) {
      setState(() => _error = 'Type what you want changed or added.');
      return;
    }
    HapticFeedback.selectionClick();
    setState(() {
      _busy = true;
      _error = null;
      _status = 'Making your changes…';
    });
    try {
      final made = await ngmyEditSlidesWithAi(
        outlineJson: widget.deck.aiOutlineJson ?? '',
        request: request,
        currentSlide: widget.currentSlide,
        extras: ngmySlidesAiExtrasOf(widget.deck),
        logo: ngmySlidesAiLogoOf(widget.deck),
        pictures: ngmySlidesAiPhotosOf(widget.deck),
        onStatus: (s) {
          if (mounted) setState(() => _status = s);
        },
      );
      if (mounted) Navigator.of(context).pop(made);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = '$e';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    const green = Color(0xFF22C55E);
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Padding(
      padding: EdgeInsets.only(bottom: bottom),
      child: Container(
        constraints: BoxConstraints(maxHeight: MediaQuery.sizeOf(context).height * 0.85, maxWidth: 680),
        decoration: const BoxDecoration(color: Color(0xFF111827), borderRadius: BorderRadius.vertical(top: Radius.circular(26))),
        child: SafeArea(
          top: false,
          child: SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(20, 12, 20, 20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)))),
                const SizedBox(height: 14),
                Row(
                  children: [
                    Container(
                      width: 34,
                      height: 34,
                      decoration: const BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [Color(0xFF22C55E), Color(0xFF15803D)])),
                      child: const Icon(Icons.mic_rounded, color: Colors.white, size: 18),
                    ),
                    const SizedBox(width: 10),
                    const Expanded(child: Text('Tell the AI what to change', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 19))),
                  ],
                ),
                const SizedBox(height: 6),
                Text(
                  'You\'re on slide ${widget.currentSlide}. Ask for new slides, changes to any slide, a different style or another language.',
                  style: const TextStyle(color: Colors.white60, fontSize: 12.5, height: 1.35),
                ),
                const SizedBox(height: 14),
                TextField(
                  controller: _ask,
                  autofocus: true,
                  minLines: 2,
                  maxLines: 5,
                  style: const TextStyle(color: Colors.white, height: 1.35),
                  decoration: InputDecoration(
                    hintText: 'e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.',
                    hintStyle: const TextStyle(color: Colors.white38, fontSize: 13),
                    filled: true,
                    fillColor: Colors.white.withValues(alpha: 0.05),
                    enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.1))),
                    focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: green)),
                  ),
                ),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    for (final idea in _ideas)
                      ActionChip(
                        label: Text(idea, style: const TextStyle(color: Colors.white, fontSize: 12)),
                        backgroundColor: Colors.white.withValues(alpha: 0.06),
                        side: const BorderSide(color: Colors.white12),
                        onPressed: _busy
                            ? null
                            : () {
                                final t = idea.endsWith('…') ? idea.substring(0, idea.length - 1) : idea;
                                _ask.value = TextEditingValue(text: t, selection: TextSelection.collapsed(offset: t.length));
                              },
                      ),
                  ],
                ),
                if (_error != null) ...[
                  const SizedBox(height: 12),
                  Text(_error!, style: const TextStyle(color: Color(0xFFFCA5A5), fontWeight: FontWeight.w700, fontSize: 12.5, height: 1.35)),
                ],
                const SizedBox(height: 16),
                // Glossy green pill with a sparkle badge — no paper-plane icon.
                Material(
                  color: Colors.transparent,
                  child: InkWell(
                    onTap: _busy ? null : _send,
                    borderRadius: BorderRadius.circular(18),
                    child: Ink(
                      height: 54,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(18),
                        gradient: LinearGradient(
                          colors: _busy
                              ? [green.withValues(alpha: 0.5), const Color(0xFF15803D).withValues(alpha: 0.5)]
                              : const [Color(0xFF4ADE80), Color(0xFF22C55E), Color(0xFF15803D)],
                        ),
                        boxShadow: [BoxShadow(color: green.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6))],
                      ),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            width: 30,
                            height: 30,
                            decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white.withValues(alpha: 0.22)),
                            child: _busy
                                ? const Padding(padding: EdgeInsets.all(7), child: CircularProgressIndicator(strokeWidth: 2.2, color: Colors.white))
                                : const Icon(Icons.auto_awesome_rounded, color: Colors.white, size: 17),
                          ),
                          const SizedBox(width: 10),
                          Text(_busy ? _status : 'Make the change', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

/// The logo used on an AI deck (so changes keep it).
String? ngmySlidesAiLogoOf(NgmySlideDeck deck) {
  for (final s in deck.slides) {
    for (final e in s.elements) {
      if (e.morphKey == 'logo' && (e.imageRef ?? '').isNotEmpty) return e.imageRef;
    }
  }
  return null;
}

/// The photos already in an AI deck, in order (so changes keep them).
List<String> ngmySlidesAiPhotosOf(NgmySlideDeck deck) {
  final out = <String>[];
  for (final s in deck.slides) {
    for (final e in s.elements) {
      final ref = e.imageRef ?? '';
      if (e.morphKey == 'photo' && ref.isNotEmpty && !out.contains(ref)) out.add(ref);
    }
  }
  return out;
}

/// A frame / ring value the AI wrote, only if it is one we can draw.
String _pickOne(dynamic raw, List<(String, String)> options) {
  final v = '${raw ?? ''}'.trim().toLowerCase();
  return options.any((o) => o.$1 == v) ? v : '';
}

/// Picture shapes / rings picked in the sheet (null = Auto, the AI decides).
class NgmySlidesAiLook {
  const NgmySlidesAiLook({this.logoFrame, this.logoRing, this.photoFrame, this.photoRing});
  final String? logoFrame;
  final String? logoRing;
  final String? photoFrame;
  final String? photoRing;
}

/// Tells the AI about the person's own pictures, numbered in the order picked.
String _pictureRule(int count) {
  if (count <= 0) return '';
  return '- THEIR PICTURES: they uploaded $count picture${count == 1 ? '' : 's'} of their own, numbered 1 to $count in the order they picked them. '
      'Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). '
      'If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.';
}

/// The "Luxury FX" choice: black and gold, with a light sweeping across it and
/// gold sparkles — it previews the effect it adds to the slides.
class _NgmyLuxeTile extends StatefulWidget {
  const _NgmyLuxeTile({required this.on, required this.onTap});
  final bool on;
  final VoidCallback onTap;
  @override
  State<_NgmyLuxeTile> createState() => _NgmyLuxeTileState();
}

class _NgmyLuxeTileState extends State<_NgmyLuxeTile> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 2600))..repeat();

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const gold = Color(0xFFE9C46A);
    return GestureDetector(
      onTap: widget.onTap,
      child: AnimatedBuilder(
        animation: _c,
        builder: (context, _) {
          final a = _c.value * 6.283;
          return Container(
            height: 64,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: widget.on ? const [Color(0xFF3B2A06), Color(0xFF0B0A08), Color(0xFF3B2A06)] : const [Color(0xFF1C1710), Color(0xFF0B0A08)],
              ),
              border: Border.all(color: gold.withValues(alpha: widget.on ? 1 : 0.55), width: widget.on ? 1.8 : 1.2),
              boxShadow: [BoxShadow(color: gold.withValues(alpha: widget.on ? 0.35 + 0.15 * _c.value : 0.12), blurRadius: widget.on ? 16 : 8)],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(15),
              child: Stack(children: [
                // Gold dust preview.
                Positioned.fill(child: CustomPaint(painter: _LuxeTileSparkles(a))),
                // Light sweep.
                Positioned.fill(
                  child: FractionalTranslation(
                    translation: Offset(_c.value * 2.4 - 1.2, 0),
                    child: Transform.rotate(
                      angle: 0.5,
                      child: Container(
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: [Colors.transparent, const Color(0xFFFFF4D6).withValues(alpha: 0.28), Colors.transparent]),
                        ),
                      ),
                    ),
                  ),
                ),
                Center(
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Icon(widget.on ? Icons.check_circle_rounded : Icons.diamond_rounded, size: 20, color: gold),
                    const SizedBox(height: 4),
                    FittedBox(
                      fit: BoxFit.scaleDown,
                      child: ShaderMask(
                        shaderCallback: (r) => const LinearGradient(colors: [Color(0xFFF7E3A1), gold, Color(0xFFB8860B)]).createShader(r),
                        child: const Text('Luxury FX', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12, letterSpacing: 0.4)),
                      ),
                    ),
                  ]),
                ),
                Positioned(
                  top: 4,
                  right: 4,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 5, vertical: 1),
                    decoration: BoxDecoration(color: gold, borderRadius: BorderRadius.circular(6)),
                    child: const Text('NEW', style: TextStyle(color: Colors.black, fontSize: 8, fontWeight: FontWeight.w900)),
                  ),
                ),
              ]),
            ),
          );
        },
      ),
    );
  }
}

class _LuxeTileSparkles extends CustomPainter {
  _LuxeTileSparkles(this.a);
  final double a;
  @override
  void paint(Canvas canvas, Size size) {
    const pts = [(0.12, 0.3), (0.26, 0.75), (0.8, 0.22), (0.9, 0.7), (0.5, 0.15), (0.65, 0.85), (0.08, 0.85)];
    for (var i = 0; i < pts.length; i++) {
      final tw = (0.5 + 0.5 * math.sin(a * 2 + i * 1.7));
      final p = Offset(pts[i].$1 * size.width, pts[i].$2 * size.height);
      final paint = Paint()..color = const Color(0xFFE9C46A).withValues(alpha: 0.25 + tw * 0.6);
      canvas.drawCircle(p, 1 + tw * 1.4, paint);
      if (tw > 0.85) {
        final s = 4 * (tw - 0.85) / 0.15;
        canvas.drawLine(p - Offset(s, 0), p + Offset(s, 0), paint..strokeWidth = 1);
        canvas.drawLine(p - Offset(0, s), p + Offset(0, s), paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _LuxeTileSparkles old) => old.a != a;
}

/// A free, openly licensed photo for [query] as a data URI (used by printable books too).
Future<String?> ngmySlidesFetchPicture(String query) =>
    _pictureCache.putIfAbsent(query.trim().toLowerCase(), () => _fetchPicture(query));
