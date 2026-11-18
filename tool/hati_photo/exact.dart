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

void build(String src, String name, List<List<int>> words, List<int> title, List<int> couple) {
  final im = img.decodeWebP(File('tool/hati_photo/$src').readAsBytesSync())!;
  save(img.copyCrop(im, x: couple[0], y: couple[1], width: couple[2] - couple[0], height: couple[3] - couple[1]), '${name}_couple', quality: 90);
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
}
