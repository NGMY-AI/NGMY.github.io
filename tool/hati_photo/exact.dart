// The owner's two full-page Hati ya Kuhowa designs (owner_village_couple.webp and owner_royal_couple.webp), used exactly
// as drawn. Only the words that change from document to document are wiped off (the date, the opening paragraph, the
// NIMETOWA word, the list, AKUNA DENI, the state at the bottom, and for the other documents the title); the app writes
// its own fill-in words in their place. Everything else (the couple, the frames, the labels, the lines) stays.
// Run from the project folder:
//   dart run --packages=.dart_tool/package_config.json tool/hati_photo/exact.dart
// It writes assets/hati/exact_<name>.jpg (with the title), exact_<name>_notitle.jpg and exact_<name>_couple.jpg (the
// couple picture, which the AI redraws with the people's own faces).
import 'dart:io';
import 'dart:math' as math;

import 'package:image/image.dart' as img;

/// Wipes the words in the box x0..x1, y0..y1. Each pixel is first a blend of the colours just outside the box (left,
/// right, top and bottom; [sides] is how much left and right count), then, for [smooth] boxes, every pixel becomes the
/// average of its neighbours many times over, so the fill spreads in evenly from every edge with no streaks. Near the
/// edge the fill fades into the picture over [feather] pixels.
void wipe(img.Image im, int x0, int y0, int x1, int y1, {int seed = 1, double sides = 0.5, int feather = 0, bool smooth = false}) {
  final rnd = math.Random(seed);
  final orig = im.clone();
  (double, double, double) at(int x, int y) {
    var r = 0.0, g = 0.0, b = 0.0, n = 0;
    for (var j = y - 2; j <= y + 2; j++) {
      for (var i = x - 2; i <= x + 2; i++) {
        if (i < 0 || j < 0 || i >= im.width || j >= im.height) continue;
        final p = orig.getPixel(i, j);
        r += p.r;
        g += p.g;
        b += p.b;
        n++;
      }
    }
    return (r / n, g / n, b / n);
  }

  final w = x1 - x0 + 1, h = y1 - y0 + 1;
  // The grid holds the box plus a one-pixel ring outside it (the fixed edge).
  final gw = w + 2, gh = h + 2;
  final cr = List<double>.filled(gw * gh, 0), cg = List<double>.filled(gw * gh, 0), cb = List<double>.filled(gw * gh, 0);
  for (var j = 0; j < gh; j++) {
    for (var i = 0; i < gw; i++) {
      final x = x0 - 1 + i, y = y0 - 1 + j;
      final edge = i == 0 || j == 0 || i == gw - 1 || j == gh - 1;
      (double, double, double) c;
      if (edge) {
        c = at(x + (i == 0 ? -2 : (i == gw - 1 ? 2 : 0)), y + (j == 0 ? -2 : (j == gh - 1 ? 2 : 0)));
      } else {
        final t = (i - 1) / math.max(1, w - 1), v = (j - 1) / math.max(1, h - 1);
        final l = at(x0 - 3, y), r = at(x1 + 3, y), tp = at(x, y0 - 3), bt = at(x, y1 + 3);
        double mix(double a, double b, double c, double d) => (a * (1 - t) + b * t) * sides + (c * (1 - v) + d * v) * (1 - sides);
        c = (mix(l.$1, r.$1, tp.$1, bt.$1), mix(l.$2, r.$2, tp.$2, bt.$2), mix(l.$3, r.$3, tp.$3, bt.$3));
      }
      cr[j * gw + i] = c.$1;
      cg[j * gw + i] = c.$2;
      cb[j * gw + i] = c.$3;
    }
  }
  if (smooth) {
    for (var it = 0; it < 500; it++) {
      for (var j = 1; j < gh - 1; j++) {
        for (var i = 1; i < gw - 1; i++) {
          final k = j * gw + i;
          cr[k] = (cr[k - 1] + cr[k + 1] + cr[k - gw] + cr[k + gw]) / 4;
          cg[k] = (cg[k - 1] + cg[k + 1] + cg[k - gw] + cg[k + gw]) / 4;
          cb[k] = (cb[k - 1] + cb[k + 1] + cb[k - gw] + cb[k + gw]) / 4;
        }
      }
    }
  }
  for (var y = y0; y <= y1; y++) {
    for (var x = x0; x <= x1; x++) {
      final k = (y - y0 + 1) * gw + (x - x0 + 1);
      final n = rnd.nextInt(5) - 2;
      var r = cr[k] + n, g = cg[k] + n, b = cb[k] + n;
      final e = [x - x0, x1 - x, y - y0, y1 - y].reduce(math.min);
      if (feather > 0 && e < feather) {
        final a = e / feather, o = orig.getPixel(x, y);
        r = o.r * (1 - a) + r * a;
        g = o.g * (1 - a) + g * a;
        b = o.b * (1 - a) + b * a;
      }
      im.setPixelRgb(x, y, r.round().clamp(0, 255), g.round().clamp(0, 255), b.round().clamp(0, 255));
    }
  }
}

void save(img.Image im, String name, {int quality = 80}) {
  final f = File('assets/hati/$name.jpg')..writeAsBytesSync(img.encodeJpg(im, quality: quality));
  stdout.writeln('${f.path} ${f.lengthSync() ~/ 1024} KB');
}

void build(String src, String name, List<List<int>> words, List<int> title, List<int>? couple, {int quarter = -1, int topTrim = 0}) {
  var im = img.decodeWebP(File('tool/hati_photo/$src').readAsBytesSync())!;
  if (quarter >= 0) {
    // One design of the 2 x 2 picture, drawn twice as big so its words and fields stay sharp.
    final qw = im.width ~/ 2, qh = im.height ~/ 2;
    im = img.copyResize(img.copyCrop(im, x: (quarter % 2) * qw, y: (quarter ~/ 2) * qh, width: qw, height: qh),
        width: qw * 2, height: qh * 2, interpolation: img.Interpolation.cubic);
  }
  // A sliver of the neighbouring design along the top edge is covered with the design's own bottom border, turned over.
  for (var y = 0; y < topTrim; y++) {
    for (var x = 0; x < im.width; x++) {
      final p = im.getPixel(x, im.height - 1 - y);
      im.setPixelRgb(x, y, p.r, p.g, p.b);
    }
  }
  if (couple != null) {
    save(img.copyCrop(im, x: couple[0], y: couple[1], width: couple[2] - couple[0], height: couple[3] - couple[1]), '${name}_couple', quality: 90);
  }
  var seed = 1;
  for (final w in words) {
    // A fifth number is how much the sides count (out of 100); small plaques and labels blend from the sides only.
    wipe(im, w[0], w[1], w[2], w[3], seed: seed++, sides: w.length > 4 ? w[4] / 100 : 1.0, smooth: w.length > 4);
  }
  save(im, name);
  wipe(im, title[0], title[1], title[2], title[3], seed: 99, smooth: true);
  save(im, '${name}_notitle');
}

void main() {
  // Village couple: maroon and gold, the elders and the hut, spears and drums.
  build(
    'owner_village_couple.webp',
    'exact_kijiji',
    [
      [512, 347, 792, 383], // TAREHE and the date
      [128, 517, 918, 690, 50], // the opening paragraph
      [400, 702, 660, 741], // NIMETOWA
      [128, 748, 470, 783], // Vitu vifuatavyo vimetolewa
      [186, 789, 690, 816], // item 1
      [186, 826, 690, 853], // item 2
      [186, 864, 690, 892], // item 3
      [186, 902, 690, 929], // item 4
      [740, 838, 952, 878], // AKUNA DENI and its tick
      [366, 1393, 704, 1433], // the state (Congo) and its arrows
    ],
    [460, 102, 850, 268], // HATI YA KUHOWA
    [0, 0, 480, 560], // the couple
  );
  // Royal couple: navy and gold, the crown, the carved figures, the roses.
  build(
    'owner_royal_couple.webp',
    'exact_kifalme',
    [
      [563, 384, 855, 419], // TAREHE and the date
      [117, 522, 937, 694, 50], // the opening paragraph
      [425, 715, 640, 755], // NIMETOWA
      [125, 760, 440, 794], // Vitu vifuatavyo vimetolewa
      [180, 804, 745, 834], // item 1
      [180, 844, 740, 871], // item 2
      [180, 880, 740, 904], // item 3
      [180, 915, 740, 940], // item 4
      [800, 805, 920, 832], // AKUNA DENI (the gold tick box beside it stays)
      [336, 1394, 722, 1432], // the state (Congo) and its arrows
    ],
    [474, 301, 948, 385], // HATI YA KUHOWA (inside the navy plaque)
    [0, 0, 495, 440], // the couple
  );

  // The four designs of the 2 x 2 picture (owner_designs.webp), each drawn twice as big: 1198 x 1312.
  List<List<int>> rows(int x0, int x1, int x1first, List<List<int>> ys) =>
      [for (var i = 0; i < ys.length; i++) [x0, ys[i][0], i == 0 ? x1first : x1, ys[i][1]]];
  List<List<int>> witness(List<int> xs, List<int> xm, List<List<int>> ys) =>
      [for (final y in ys) ...[[xs[0], y[0], xs[1], y[1]], [xm[0], y[0], xm[1], y[1]]]];
  // Royal blue curtains.
  build('owner_designs.webp', 'exact_curtain', [
    [462, 204, 800, 247], // TAREHE
    [200, 276, 1032, 540, 50], // paragraph
    [490, 568, 755, 618], // NIMETOWA
    [160, 636, 565, 672], // Vitu vifuatavyo
    ...rows(236, 825, 830, [[690, 727], [743, 780], [796, 834], [848, 887]]),
    [848, 690, 1012, 727], // AKUNA DENI
    ...witness([220, 382], [703, 855], [[1017, 1052], [1065, 1100], [1112, 1147]]),
    [370, 1262, 892, 1302], // EMO 'YA M'MBONDO - Congo
  ], [285, 115, 955, 200], null, quarter: 0);
  // Village with the couple, the palm tree and the hut.
  build('owner_designs.webp', 'exact_village', [
    [380, 197, 765, 240],
    [240, 278, 968, 536, 50],
    [490, 620, 720, 662],
    [226, 676, 630, 714],
    ...rows(303, 805, 803, [[734, 770], [793, 830], [846, 882], [898, 935]]),
    [846, 736, 1016, 769],
    ...witness([178, 322], [668, 812], [[1040, 1070], [1080, 1110], [1120, 1150]]),
  ], [310, 108, 836, 200], [850, 25, 1168, 285], quarter: 1);
  // Sunset over the savanna.
  build('owner_designs.webp', 'exact_sunset', [
    [462, 268, 780, 308],
    [178, 326, 1036, 570, 50],
    [500, 598, 740, 645],
    [160, 651, 550, 686],
    ...rows(234, 822, 820, [[703, 742], [751, 787], [798, 834], [843, 880]]),
    [844, 705, 1000, 741],
    ...witness([215, 368], [678, 828], [[990, 1024], [1032, 1066], [1072, 1107]]),
  ], [350, 188, 892, 262], null, quarter: 2);
  // White roses and gold rings.
  build('owner_designs.webp', 'exact_roses', [
    [418, 275, 785, 315],
    [214, 341, 1000, 574, 50],
    [500, 584, 700, 623],
    [170, 634, 545, 670],
    ...rows(246, 792, 795, [[686, 720], [733, 764], [778, 810], [823, 855]]),
    [816, 687, 978, 719],
    ...witness([213, 362], [675, 824], [[965, 997], [1005, 1037], [1045, 1077]]),
  ], [262, 195, 932, 266], null, quarter: 3, topTrim: 22);
}
