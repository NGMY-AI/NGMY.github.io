// Builds the four picture papers for Hati ya Kuhowa from the owner's own designs (owner_designs.webp, four designs in
// a 2 x 2 grid). The real artwork (curtains, flag, drums, the couple, palm and hut, doves, the Congo map, roses, rings,
// kente borders) is cut out of that picture and laid around a tall 9:16 page; the middle is left plain so the app can
// lay its own fill-in page on top. Run from the project folder:
//   dart run --packages=.dart_tool/package_config.json tool/hati_photo/build.dart
// It writes assets/hati/photo_curtain.jpg, photo_village.jpg, photo_sunset.jpg and photo_roses.jpg.
import 'dart:io';
import 'dart:math' as math;

import 'package:image/image.dart' as img;

const pw = 720, ph = 1280;

late img.Image src;
late int qw, qh;

/// A piece of design [q] (0 top left, 1 top right, 2 bottom left, 3 bottom right). Numbers are measured on the design
/// drawn twice as big (so they are halved here).
img.Image cut(int q, num x0, num y0, num x1, num y1) {
  final ox = (q % 2) * qw, oy = (q ~/ 2) * qh;
  return img.copyCrop(src, x: ox + x0 ~/ 2, y: oy + y0 ~/ 2, width: (x1 - x0) ~/ 2, height: (y1 - y0) ~/ 2);
}

img.Image sized(img.Image p, int w, int h) => img.copyResize(p, width: math.max(1, w), height: math.max(1, h), interpolation: img.Interpolation.cubic);

img.Image scaled(img.Image p, double s) => sized(p, (p.width * s).round(), (p.height * s).round());

/// Lays [p] onto the page at (x, y), fading its edges in over [feather] pixels on the sides named in [fade] (l t r b).
void put(img.Image page, img.Image p, int x, int y, {int feather = 0, String fade = ''}) {
  for (var j = 0; j < p.height; j++) {
    final py = y + j;
    if (py < 0 || py >= ph) continue;
    for (var i = 0; i < p.width; i++) {
      final px = x + i;
      if (px < 0 || px >= pw) continue;
      var a = 1.0;
      if (feather > 0) {
        if (fade.contains('l')) a = math.min(a, i / feather);
        if (fade.contains('r')) a = math.min(a, (p.width - 1 - i) / feather);
        if (fade.contains('t')) a = math.min(a, j / feather);
        if (fade.contains('b')) a = math.min(a, (p.height - 1 - j) / feather);
      }
      a = a.clamp(0.0, 1.0);
      final s = p.getPixel(i, j);
      if (a >= 1) {
        page.setPixelRgb(px, py, s.r, s.g, s.b);
      } else if (a > 0) {
        final d = page.getPixel(px, py);
        page.setPixelRgb(px, py, (d.r * (1 - a) + s.r * a).round(), (d.g * (1 - a) + s.g * a).round(), (d.b * (1 - a) + s.b * a).round());
      }
    }
  }
}

/// A side strip: the top and bottom parts keep their shape, the middle is stretched to fill the page height.
img.Image strip(int q, num x0, num x1, {required num topEnd, required num bottomStart, required num bottomEnd, required double s, int height = ph}) {
  final top = scaled(cut(q, x0, 0, x1, topEnd), s);
  final bottom = scaled(cut(q, x0, bottomStart, x1, bottomEnd), s);
  final midH = height - top.height - bottom.height;
  final mid = sized(cut(q, x0, topEnd, x1, bottomStart), top.width, midH);
  final out = img.Image(width: top.width, height: height);
  put(out, top, 0, 0);
  put(out, mid, 0, top.height);
  put(out, bottom, 0, top.height + midH);
  return out;
}

/// Average colour of a patch of design [q].
(int, int, int) avg(int q, num x0, num y0, num x1, num y1) {
  final p = cut(q, x0, y0, x1, y1);
  var r = 0, g = 0, b = 0, n = 0;
  for (final px in p) {
    r += px.r.toInt();
    g += px.g.toInt();
    b += px.b.toInt();
    n++;
  }
  return (r ~/ n, g ~/ n, b ~/ n);
}

/// Fills the page top to bottom from [top] to [bottom], with a faint grain like paper.
void paper(img.Image page, (int, int, int) top, (int, int, int) bottom, {int seed = 1, int grain = 5}) {
  final rnd = math.Random(seed);
  for (var y = 0; y < ph; y++) {
    final t = y / (ph - 1);
    for (var x = 0; x < pw; x++) {
      final n = rnd.nextInt(grain * 2 + 1) - grain;
      page.setPixelRgb(x, y, (top.$1 * (1 - t) + bottom.$1 * t + n).round().clamp(0, 255), (top.$2 * (1 - t) + bottom.$2 * t + n).round().clamp(0, 255),
          (top.$3 * (1 - t) + bottom.$3 * t + n).round().clamp(0, 255));
    }
  }
}

/// Fills between the two side strips, row by row, blending the colour at the inside edge of the left strip into the
/// one at the inside edge of the right strip (each smoothed up and down so no streaks show), then darkens it a little.
void between(img.Image page, int left, int right, {double darken = 0.85}) {
  List<(double, double, double)> edge(int x) {
    final raw = [for (var y = 0; y < ph; y++) page.getPixel(x, y)];
    const k = 60;
    return [
      for (var y = 0; y < ph; y++)
        () {
          var r = 0.0, g = 0.0, b = 0.0, n = 0;
          for (var j = math.max(0, y - k); j < math.min(ph, y + k); j++) {
            r += raw[j].r;
            g += raw[j].g;
            b += raw[j].b;
            n++;
          }
          return (r / n, g / n, b / n);
        }()
    ];
  }

  final l = edge(left - 2), r = edge(right + 2);
  for (var y = 0; y < ph; y++) {
    for (var x = left; x <= right; x++) {
      final t = (x - left) / (right - left);
      final c = (l[y].$1 * (1 - t) + r[y].$1 * t, l[y].$2 * (1 - t) + r[y].$2 * t, l[y].$3 * (1 - t) + r[y].$3 * t);
      page.setPixelRgb(x, y, (c.$1 * darken).round(), (c.$2 * darken).round(), (c.$3 * darken).round());
    }
  }
}

/// Fills the page top to bottom through the colour [stops] (position 0..1, colour), with a faint grain.
void stops(img.Image page, List<(double, (int, int, int))> st, {int seed = 1, int grain = 3}) {
  final rnd = math.Random(seed);
  for (var y = 0; y < ph; y++) {
    final t = y / (ph - 1);
    var i = 1;
    while (i < st.length - 1 && t > st[i].$1) {
      i++;
    }
    final (t0, c0) = st[i - 1];
    final (t1, c1) = st[i];
    final u = ((t - t0) / (t1 - t0)).clamp(0.0, 1.0);
    for (var x = 0; x < pw; x++) {
      final n = rnd.nextInt(grain * 2 + 1) - grain;
      page.setPixelRgb(x, y, (c0.$1 * (1 - u) + c1.$1 * u + n).round().clamp(0, 255), (c0.$2 * (1 - u) + c1.$2 * u + n).round().clamp(0, 255),
          (c0.$3 * (1 - u) + c1.$3 * u + n).round().clamp(0, 255));
    }
  }
}

void save(img.Image page, String name) {
  File('assets/hati/$name.jpg').writeAsBytesSync(img.encodeJpg(page, quality: 80));
  stdout.writeln('assets/hati/$name.jpg ${File('assets/hati/$name.jpg').lengthSync() ~/ 1024} KB');
}

void main() {
  src = img.decodeWebP(File('tool/hati_photo/owner_designs.webp').readAsBytesSync())!;
  qw = src.width ~/ 2;
  qh = src.height ~/ 2;
  const s = pw / 599;

  // ── 1. Royal blue curtains: curtains down both sides, the flag at the top, drums and gold flowers at the bottom ──
  {
    final page = img.Image(width: pw, height: ph);
    stops(page, [(0.0, (24, 52, 134)), (0.5, (14, 36, 104)), (1.0, (9, 24, 74))], seed: 1);
    final l = strip(0, 0, 152, topEnd: 260, bottomStart: 820, bottomEnd: 1312, s: s);
    final r = strip(0, 1082, 1198, topEnd: 260, bottomStart: 820, bottomEnd: 1312, s: s);
    put(page, l, 0, 0, feather: 26, fade: 'r');
    put(page, r, pw - r.width, 0, feather: 26, fade: 'l');
    put(page, scaled(cut(0, 548, 12, 722, 118), s), (pw - (87 * s).round()) ~/ 2, (6 * s).round(), feather: 34, fade: 'lrtb');
    save(page, 'photo_curtain');
  }

  // ── 2. Village: kente borders, the flag, palm tree and hut on the left, the couple on the right, a drum ──
  {
    final page = img.Image(width: pw, height: ph);
    final p = avg(1, 650, 685, 800, 715);
    stops(page, [(0.0, (p.$1 + 4, p.$2 + 6, p.$3 + 8)), (1.0, (p.$1 - 6, p.$2 - 8, p.$3 - 10))], seed: 2, grain: 4);
    final left = sized(cut(1, 0, 0, 30, 1312), 18, ph);
    final right = sized(cut(1, 1168, 0, 1198, 1312), 18, ph);
    final topB = sized(cut(1, 0, 0, 1198, 28), pw, 17);
    put(page, scaled(cut(1, 35, 200, 240, 830), 0.82), 20, 18, feather: 24, fade: 'rb');
    put(page, scaled(cut(1, 75, 58, 262, 198), 0.5), pw ~/ 2 - 24, 20, feather: 6, fade: 'lrtb');
    put(page, scaled(cut(1, 840, 25, 1168, 290), 1.42), pw - 18 - 233, 18, feather: 34, fade: 'lb');
    put(page, scaled(cut(1, 30, 1000, 125, 1290), 1.3), 18, ph - 17 - 188, feather: 22, fade: 'rt');
    put(page, scaled(cut(1, 1000, 1150, 1168, 1312), 1.25), pw - 18 - 105, ph - 17 - 101, feather: 16, fade: 'lt');
    put(page, left, 0, 0);
    put(page, right, pw - 18, 0);
    put(page, topB, 0, 0);
    put(page, img.flipVertical(topB.clone()), 0, ph - 17);
    save(page, 'photo_village');
  }

  // ── 3. Sunset over the savanna: acacia trees, doves, the Congo map, drums, kente along the bottom ──
  {
    final page = img.Image(width: pw, height: ph);
    stops(page, [(0.0, (58, 30, 52)), (0.18, (120, 60, 44)), (0.42, (176, 84, 28)), (0.7, (120, 50, 20)), (1.0, (44, 20, 10))], seed: 3);
    final kenteH = (97 / 2 * s).round();
    final l = strip(2, 0, 138, topEnd: 420, bottomStart: 900, bottomEnd: 1215, s: s, height: ph - kenteH);
    final r = strip(2, 1076, 1198, topEnd: 420, bottomStart: 900, bottomEnd: 1215, s: s, height: ph - kenteH);
    put(page, l, 0, 0, feather: 30, fade: 'r');
    put(page, r, pw - r.width, 0, feather: 30, fade: 'l');
    put(page, scaled(cut(2, 520, 40, 720, 200), s), (pw - (100 * s).round()) ~/ 2, (40 / 2 * s).round(), feather: 22, fade: 'lrtb');
    put(page, scaled(cut(2, 215, 90, 360, 240), s), l.width + ((215 - 138) / 2 * s).round(), (90 / 2 * s).round(), feather: 14, fade: 'lrtb');
    put(page, scaled(cut(2, 865, 90, 1010, 240), s), l.width + ((865 - 138) / 2 * s).round(), (90 / 2 * s).round(), feather: 14, fade: 'lrtb');
    put(page, sized(cut(2, 0, 1215, 280, 1312), pw ~/ 2, kenteH), 0, ph - kenteH);
    put(page, img.flipHorizontal(sized(cut(2, 0, 1215, 280, 1312), pw - pw ~/ 2, kenteH)), pw ~/ 2, ph - kenteH);
    save(page, 'photo_sunset');
  }

  // ── 4. White roses and gold rings on cream, in a navy and gold frame, with a drum ──
  {
    final page = img.Image(width: pw, height: ph);
    final cream = avg(3, 440, 90, 500, 150);
    stops(page, [(0.0, cream), (1.0, (cream.$1 - 8, cream.$2 - 10, cream.$3 - 14))], seed: 4);
    final tl = scaled(cut(3, 0, 24, 250, 330), s), tr = scaled(cut(3, 950, 24, 1198, 330), s);
    final bl = scaled(cut(3, 0, 1100, 175, 1312), s), br = scaled(cut(3, 1045, 1010, 1198, 1312), s);
    final lm = sized(cut(3, 0, 330, 60, 880), (30 * s).round(), ph - tl.height - bl.height + 40);
    final rm = sized(cut(3, 1142, 330, 1198, 1000), (28 * s).round(), ph - tr.height - br.height + 40);
    // The navy border along the top and bottom is the side border turned on its side.
    final band = sized(img.copyRotate(cut(3, 0, 400, 60, 860), angle: -90), pw, lm.width);
    put(page, band, 0, 0);
    put(page, img.flipVertical(band.clone()), 0, ph - band.height);
    put(page, lm, 0, tl.height - 20, feather: 10, fade: 'r');
    put(page, rm, pw - rm.width, tr.height - 20, feather: 10, fade: 'l');
    put(page, tl, 0, 0, feather: 40, fade: 'rb');
    put(page, tr, pw - tr.width, 0, feather: 40, fade: 'lb');
    put(page, scaled(cut(3, 15, 890, 160, 1100), s), 4, ph - bl.height - 120, feather: 22, fade: 'rt');
    put(page, bl, 0, ph - bl.height, feather: 30, fade: 'rt');
    put(page, br, pw - br.width, ph - br.height, feather: 30, fade: 'lt');
    put(page, scaled(cut(3, 500, 60, 800, 185), s), (pw - (150 * s).round()) ~/ 2, 18, feather: 26, fade: 'lrtb');
    save(page, 'photo_roses');
  }
}
