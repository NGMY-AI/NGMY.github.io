part of 'ngmy_slides_ai_maker.dart';

/// One Luxury FX deck's look: a royal theme plus its own frame, gems, emblem and mix of
/// moving light. Picked fresh for every new presentation.
class _NgmyLuxeRecipe {
  _NgmyLuxeRecipe._(this.theme, this.frame, this.gem, this.emblem, this.backFx, this.frontFx, this.transitions, this.seed);

  final NgmyLuxeTheme theme;
  /// 0 single frame with a racing light · 1 double frame · 2 corner scrollwork · 3 crown bar.
  final int frame;
  final NgmySlideShapeKind gem;
  final String emblem;
  /// Light behind the content (rays, bokeh, aurora, spotlight), rotating slide by slide.
  final List<String> backFx;
  /// Light in front (gold dust, sparkles, sheen, velvet edges).
  final List<String> frontFx;
  final List<NgmySlideTransition> transitions;
  final int seed;

  factory _NgmyLuxeRecipe.random() {
    final seed = DateTime.now().microsecondsSinceEpoch & 0x7fffffff;
    final r = math.Random(seed);
    final theme = kNgmyLuxeThemes[r.nextInt(kNgmyLuxeThemes.length)];
    List<T> pick<T>(List<T> from, int n) => (List<T>.from(from)..shuffle(r)).take(n).toList();
    return _NgmyLuxeRecipe._(
      theme,
      r.nextInt(4),
      pick(const [NgmySlideShapeKind.rectangle, NgmySlideShapeKind.circle, NgmySlideShapeKind.hexagon], 1).first,
      theme.ornaments[r.nextInt(theme.ornaments.length)],
      pick(const ['rays', 'bokeh', 'aurora', 'spotlight'], 2 + r.nextInt(2)),
      pick(const ['golddust', 'sparkle', 'sheen'], 2),
      pick(const [
        NgmySlideTransition.cube,
        NgmySlideTransition.zoom,
        NgmySlideTransition.flip,
        NgmySlideTransition.push,
        NgmySlideTransition.fade,
        NgmySlideTransition.rotate3d,
      ], 4),
      seed,
    );
  }

  /// The theme as a slide style (backgrounds in a fresh order, metal accents).
  NgmySlidesAiStyle get style {
    final r = math.Random(seed + 1);
    final bgs = List<(int, int)>.from(theme.backgrounds)..shuffle(r);
    return NgmySlidesAiStyle(
      id: 'luxe',
      label: theme.name,
      icon: Icons.diamond_rounded,
      backgrounds: bgs,
      text: theme.text,
      muted: theme.muted,
      accents: [theme.metal, theme.metalLight, theme.metal],
      transition: NgmySlideTransition.fade,
    );
  }

  String fx(String name, [int? color]) => ngmyLuxeFxWith(name, color ?? theme.metal);
}

/// Dresses one slide in the deck's luxury: moving light behind, the deck's frame and gems,
/// its royal emblem, metallic titles with a light sweep, and sparkle in front.
/// The same keys on every slide, so with video motion they glide between slides.
void _addLuxe(List<NgmySlideElement> els, int i, String Function() id, _NgmyLuxeRecipe lx) {
  final t = lx.theme;
  final metal = t.metal;
  final r = math.Random(lx.seed + i * 13);

  NgmySlideElement deco(NgmySlideShapeKind kind, double x, double y, double w, double h, int fill, String key, String fx,
          {int stroke = 0, double strokeWidth = 0, double rotation = 0, NgmySlideTransition anim = NgmySlideTransition.none, int delay = 0}) =>
      NgmySlideElement(
        id: id(),
        type: NgmySlideElementType.shape,
        x: x,
        y: y,
        w: w,
        h: h,
        shape: kind,
        fillColor: fill,
        strokeColor: stroke,
        strokeWidth: strokeWidth,
        rotation: rotation,
        textTransition: anim,
        textAnimDelayMs: delay,
        morphKey: key,
        loopFx: fx,
      );

  NgmySlideElement glyph(String g, double x, double y, double w, double h, double size, String key, String fx, int delay) => NgmySlideElement(
        id: id(),
        type: NgmySlideElementType.text,
        x: x,
        y: y,
        w: w,
        h: h,
        text: g,
        fontSize: size,
        fontWeight: FontWeight.w400,
        color: t.metalLight,
        align: TextAlign.center,
        textTransition: NgmySlideTransition.zoom,
        textAnimDelayMs: delay,
        morphKey: key,
        loopFx: fx,
      );

  NgmySlideElement gem(double cx, double cy, String key, int delay, {double size = 0.022}) => deco(
        lx.gem,
        cx - size / 2,
        cy - size * 0.89,
        size,
        size * 1.78,
        metal,
        key,
        lx.fx('twinkle'),
        stroke: t.metalLight,
        strokeWidth: 1.2,
        rotation: lx.gem == NgmySlideShapeKind.rectangle ? 0.785 : 0,
        anim: NgmySlideTransition.zoom,
        delay: delay,
      );

  // Metallic titles that catch the light; body text in the theme's ivory/pearl.
  for (final e in els) {
    if (e.type == NgmySlideElementType.text) {
      if (e.morphKey == 'title') {
        e.color = t.metalLight;
        e.loopFx = lx.fx('shimmer', t.metalLight);
      } else if (e.morphKey == 'sub' || e.morphKey == 'body') {
        e.color = t.muted;
      }
    }
    if (e.morphKey == 'bar') e.loopFx = lx.fx('shimmer', t.metalLight);
  }

  // Behind everything: this slide's light (the deck's moving lights take turns).
  final back = lx.backFx[i % lx.backFx.length];
  if (back == 'spotlight') {
    els.insert(0, deco(NgmySlideShapeKind.circle, 0.1 + r.nextDouble() * 0.45, 0.05 + r.nextDouble() * 0.3, 0.45, 0.75,
        _withAlpha(metal, 0x34), 'lux_spot', lx.fx('spotlight')));
  } else {
    els.insert(0, deco(NgmySlideShapeKind.rectangle, 0, 0, 1, 1, 0x00000000, 'lux_back', lx.fx(back)));
  }
  // A second, gentler layer of light on every other slide.
  final back2 = lx.backFx[(i + 1) % lx.backFx.length];
  if (i.isOdd && back2 != back && back2 != 'spotlight') {
    els.insert(1, deco(NgmySlideShapeKind.rectangle, 0, 0, 1, 1, 0x00000000, 'lux_back2', lx.fx(back2, t.metalLight)));
  }

  // The deck's frame.
  switch (lx.frame) {
    case 0:
      els.add(deco(NgmySlideShapeKind.rectangle, 0.022, 0.038, 0.956, 0.924, 0x00000000, 'lux_frame', lx.fx('goldframe'),
          stroke: _withAlpha(metal, 0xB0), strokeWidth: 1.6, anim: NgmySlideTransition.fade, delay: 150));
      els
        ..add(gem(0.022, 0.038, 'lux_c1', 300))
        ..add(gem(0.978, 0.038, 'lux_c2', 380))
        ..add(gem(0.022, 0.962, 'lux_c3', 460))
        ..add(gem(0.978, 0.962, 'lux_c4', 540));
    case 1:
      els
        ..add(deco(NgmySlideShapeKind.rectangle, 0.018, 0.032, 0.964, 0.936, 0x00000000, 'lux_frame', lx.fx('goldframe'),
            stroke: _withAlpha(metal, 0xC8), strokeWidth: 2, anim: NgmySlideTransition.fade, delay: 120))
        ..add(deco(NgmySlideShapeKind.rectangle, 0.034, 0.06, 0.932, 0.88, 0x00000000, 'lux_frame2', '',
            stroke: _withAlpha(metal, 0x70), strokeWidth: 0.8, anim: NgmySlideTransition.fade, delay: 260))
        ..add(gem(0.5, 0.032, 'lux_c1', 420, size: 0.026))
        ..add(gem(0.5, 0.968, 'lux_c2', 480, size: 0.026));
    case 2:
      els.add(deco(NgmySlideShapeKind.rectangle, 0, 0, 1, 1, 0x00000000, 'lux_filigree', lx.fx('filigree'), anim: NgmySlideTransition.fade, delay: 200));
    default:
      // A crown bar: a thin metal rule across the top with the emblem sitting on it.
      els
        ..add(deco(NgmySlideShapeKind.rectangle, 0.08, 0.06, 0.84, 0.004, _withAlpha(metal, 0xD0), 'lux_rule', lx.fx('shimmer', t.metalLight),
            anim: NgmySlideTransition.slideLeft, delay: 150))
        ..add(deco(NgmySlideShapeKind.rectangle, 0.08, 0.936, 0.84, 0.004, _withAlpha(metal, 0x90), 'lux_rule2', '',
            anim: NgmySlideTransition.slideRight, delay: 220));
  }

  // The royal emblem: centred above the title on title/closing slides, small in a corner elsewhere.
  final isTitleish = !els.any((e) => e.morphKey == 'sub' || e.morphKey == 'body') || i == 0;
  if (isTitleish) {
    els.add(glyph(lx.emblem, 0.44, 0.06, 0.12, 0.14, 40, 'lux_emblem', lx.fx('crest'), 350));
  } else {
    els.add(glyph(lx.emblem, r.nextBool() ? 0.035 : 0.905, 0.055, 0.06, 0.09, 22, 'lux_emblem', lx.fx('crest'), 350));
  }

  // Gliding gems on the edges.
  els
    ..add(deco(lx.gem, (i.isEven ? 0.30 : 0.62) - 0.008, 0.038 - 0.014, 0.016, 0.028, _withAlpha(t.metalLight, 0xF2), 'lux_g1', lx.fx('orbit'),
        stroke: 0xFFFFFFFF, strokeWidth: 1, rotation: lx.gem == NgmySlideShapeKind.rectangle ? 0.785 : 0, anim: NgmySlideTransition.bounce, delay: 600))
    ..add(deco(NgmySlideShapeKind.circle, (i.isEven ? 0.66 : 0.34) - 0.007, 0.962 - 0.0125, 0.014, 0.025, _withAlpha(t.metalLight, 0xF2), 'lux_g2',
        lx.fx('orbit'), anim: NgmySlideTransition.bounce, delay: 700));

  // In front: the deck's sparkle (gold dust / diamond flashes / a sheen), plus velvet edges on dark themes.
  for (final f in lx.frontFx) {
    els.add(deco(NgmySlideShapeKind.rectangle, 0, 0, 1, 1, 0x00000000, 'lux_$f', lx.fx(f)));
  }
  if ((t.backgrounds.first.$1 & 0xFFFFFF) < 0x808080) {
    els.add(deco(NgmySlideShapeKind.rectangle, 0, 0, 1, 1, 0x00000000, 'lux_velvet', lx.fx('velvet')));
  }
}
