import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BODY EXPLORER: a 3D human you can turn, zoom into, peel back and tap.
// The body is built from simple 3D shapes, drawn by a small 3D engine in this file.
// ═════════════════════════════════════════════════════════════════════════════

/// What we say about each part.
const Map<String, (String, String)> kBodyFacts = {
  // Skin
  'Head': ('Skin', 'Your head holds your brain, eyes, ears, nose and mouth. It weighs about 5 kg, as much as a bag of sugar.'),
  'Hair': ('Skin', 'You have about 100,000 hairs on your head. Each grows about a centimetre a month.'),
  'Eyes': ('Senses', 'Your eyes turn light into signals for the brain. Each one sends the picture upside down and the brain flips it.'),
  'Ears': ('Senses', 'Ears hear sounds and also keep you balanced. The three tiny bones inside are the smallest in your body.'),
  'Nose': ('Senses', 'You can smell about a trillion different smells. Your nose also warms and cleans the air you breathe.'),
  'Lips': ('Senses', 'Your lips have lots of touch nerves and thin skin, which is why they are red.'),
  'Neck': ('Frame', 'Your neck holds your head up and carries the windpipe, food pipe, blood vessels and nerves.'),
  'Chest and belly': ('Cover', 'Your trunk holds your heart, lungs and digestive system, protected by skin, muscle and bone.'),
  'Arms': ('Movement', 'Each arm has 30 bones. Your elbow bends one way and your shoulder moves in almost any direction.'),
  'Hands': ('Touch', 'Each hand has 27 bones and thousands of touch sensors. Fingertips are some of the most sensitive spots.'),
  'Legs': ('Movement', 'Your legs have the biggest muscles and the longest bones in your body.'),
  'Feet': ('Balance', 'Each foot has 26 bones and about 125,000 sweat glands. Together they carry your whole weight.'),
  // Muscles
  'Neck muscles': ('Movement', 'These muscles turn and tilt your head. Your head weighs as much as a bowling ball, so they work all day.'),
  'Trapezius': ('Movement', 'A big kite-shaped muscle across your upper back that lifts your shoulders and moves your head.'),
  'Deltoids': ('Movement', 'The round caps of your shoulders. They lift your arms in every direction.'),
  'Pectorals': ('Movement', 'The chest muscles push your arms forward, like when you push a door.'),
  'Biceps': ('Movement', 'The biceps bends your elbow. When a muscle works it gets shorter and fatter.'),
  'Triceps': ('Movement', 'The triceps straightens your elbow. It works opposite the biceps: muscles can only pull, so they come in pairs.'),
  'Forearm muscles': ('Movement', 'Long muscles in your forearm pull on tendons that work your fingers, like puppet strings.'),
  'Abs': ('Movement', 'Your tummy muscles hold your body upright and help you bend and twist.'),
  'Obliques': ('Movement', 'The muscles at the sides of your waist that help you twist and lean.'),
  'Latissimus': ('Movement', 'The widest muscle in your back. It pulls your arms down, like when you swim or climb.'),
  'Glutes': ('Movement', 'Your bottom muscles are the biggest in your body. They push you up stairs and keep you standing.'),
  'Quadriceps': ('Movement', 'Four muscles at the front of your thigh. Together they are the strongest in your body for lifting weight.'),
  'Hamstrings': ('Movement', 'The muscles at the back of your thigh that bend your knee when you run.'),
  'Calves': ('Movement', 'The calf muscle pushes you up on your toes when you walk, run and jump.'),
  'Shin muscles': ('Movement', 'These lift your foot up so your toes do not drag on the ground.'),
  // Organs
  'Brain': ('Nerves', 'Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells and runs everything you do.'),
  'Thyroid': ('Hormones', 'A butterfly-shaped gland in your neck. It makes hormones that control how fast your body uses energy.'),
  'Windpipe': ('Breathing', 'The trachea carries air down to your lungs. Rings of tough cartilage keep it open.'),
  'Food pipe': ('Digestion', 'The oesophagus squeezes food down to your stomach in waves, so you can swallow even upside down.'),
  'Lungs': ('Breathing', 'You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.'),
  'Heart': ('Blood', 'About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.'),
  'Diaphragm': ('Breathing', 'A dome-shaped muscle under your lungs. It pulls down to suck air in. A hiccup is it twitching.'),
  'Liver': ('Digestion', 'Cleans your blood and stores energy. It is the only organ that can grow back after damage.'),
  'Gallbladder': ('Digestion', 'A small green pouch that stores bile, a juice that helps you digest fatty food.'),
  'Stomach': ('Digestion', 'Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.'),
  'Spleen': ('Blood', 'Filters old blood cells and helps fight germs. You can live without it.'),
  'Pancreas': ('Digestion', 'Makes juices to digest food and insulin, a hormone that controls the sugar in your blood.'),
  'Kidneys': ('Cleaning', 'Clean about 180 litres of blood every day and turn the waste into urine.'),
  'Small intestine': ('Digestion', 'About 6 metres long, folded up in your tummy. This is where most food is turned into energy for your blood.'),
  'Large intestine': ('Digestion', 'Takes the water from what is left and makes the rest into waste. It is about 1.5 metres long.'),
  'Bladder': ('Cleaning', 'A stretchy bag that holds urine. It can hold about half a litre.'),
  'Spinal cord': ('Nerves', 'A thick rope of nerves inside your backbone. It carries messages between your brain and the rest of your body.'),
  // Bones
  'Skull': ('Frame', 'Your skull is made of 22 bones that protect your brain. Only the jaw can move.'),
  'Jaw': ('Frame', 'The only bone in your skull that moves. You use it to chew, talk and smile.'),
  'Neck bones': ('Frame', 'Seven small bones called cervical vertebrae. A giraffe has seven too, just much longer!'),
  'Chest spine': ('Frame', 'Twelve vertebrae that each hold a pair of ribs.'),
  'Lower spine': ('Frame', 'Five big, strong vertebrae that carry most of your upper body\'s weight.'),
  'Tailbone': ('Frame', 'The sacrum and coccyx. The tailbone is what is left of a tail from our far-off ancestors.'),
  'Ribs': ('Frame', 'You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.'),
  'Breastbone': ('Frame', 'The sternum is a flat bone in the middle of your chest that holds your ribs together at the front.'),
  'Collarbones': ('Frame', 'The most often broken bone, and the only long bone that lies sideways.'),
  'Shoulder blades': ('Frame', 'Two flat triangle bones on your back that let your arms swing in a big circle.'),
  'Upper arm bones': ('Frame', 'The humerus. The bump at its end is the "funny bone": really a nerve that gets squashed.'),
  'Forearm bones': ('Frame', 'Two bones, the radius and ulna, that twist round each other when you turn your hand over.'),
  'Hand bones': ('Frame', 'Eight small wrist bones plus the long bones of your palm and fingers: 27 in all.'),
  'Pelvis': ('Frame', 'The hip bones carry your body\'s weight and protect organs in your tummy.'),
  'Thigh bones': ('Frame', 'The femur is the longest and strongest bone in your body, about a quarter of your height.'),
  'Kneecaps': ('Frame', 'A small bone that shields your knee joint, like a built-in knee pad.'),
  'Shin bones': ('Frame', 'The tibia carries most of your weight below the knee. The thin fibula next to it helps hold the ankle steady.'),
  'Foot bones': ('Frame', 'Seven ankle bones and long toe bones. Your big toe is important for balance.'),
  // Vessels
  'Aorta': ('Blood', 'The biggest artery, about as wide as a garden hose. It carries fresh blood from the heart to the whole body.'),
  'Vena cava': ('Blood', 'The biggest vein. It brings used blood from the body back to the heart.'),
  'Neck arteries': ('Blood', 'The carotid arteries take blood to your brain. You can feel your pulse here.'),
  'Lung vessels': ('Blood', 'These carry blood to the lungs to pick up oxygen, and back to the heart.'),
  'Leg arteries': ('Blood', 'Blood vessels that feed your legs. If you laid all your blood vessels end to end they would go round the Earth twice.'),
};

const List<(String, String, IconData)> kBodyLayers = [
  ('skin', 'Skin', Icons.face_retouching_natural_rounded),
  ('muscle', 'Muscles', Icons.fitness_center_rounded),
  ('organ', 'Organs', Icons.favorite_rounded),
  ('bone', 'Skeleton', Icons.accessibility_new_rounded),
  ('vessel', 'Blood vessels', Icons.water_drop_rounded),
];

class BodyP3 {
  const BodyP3(this.x, this.y, this.z);
  final double x, y, z;
  BodyP3 operator +(BodyP3 o) => BodyP3(x + o.x, y + o.y, z + o.z);
  BodyP3 operator -(BodyP3 o) => BodyP3(x - o.x, y - o.y, z - o.z);
  BodyP3 operator *(double k) => BodyP3(x * k, y * k, z * k);
  double get len => math.sqrt(x * x + y * y + z * z);
  BodyP3 get unit {
    final l = len;
    return l < 1e-9 ? const BodyP3(0, 1, 0) : BodyP3(x / l, y / l, z / l);
  }

  BodyP3 cross(BodyP3 o) => BodyP3(y * o.z - z * o.y, z * o.x - x * o.z, x * o.y - y * o.x);
}

class BodyPart {
  BodyPart(this.group, this.layer, this.base, {this.anim = 0, this.fixed = false});
  final String group;
  final String layer;
  final Color base;
  final int anim; // 1 heart beat, 2 breathing
  final bool fixed; // not tinted by the skin tone
  int vStart = 0, vEnd = 0, tStart = 0, tEnd = 0;
  BodyP3 center = const BodyP3(0, 0, 0);
}

/// All the shapes of the body, built once.
class _BodyModel {
  final List<double> pos = [];
  final List<double> nrm = [];
  final List<int> tris = [];
  final List<int> vPart = [];
  final List<BodyPart> parts = [];
  late BodyPart _cur;

  void begin(BodyPart p) {
    _cur = p;
    p.vStart = pos.length ~/ 3;
    p.tStart = tris.length ~/ 3;
    parts.add(p);
  }

  void end() {
    _cur.vEnd = pos.length ~/ 3;
    _cur.tEnd = tris.length ~/ 3;
    var sx = 0.0, sy = 0.0, sz = 0.0;
    final n = _cur.vEnd - _cur.vStart;
    for (var i = _cur.vStart; i < _cur.vEnd; i++) {
      sx += pos[i * 3];
      sy += pos[i * 3 + 1];
      sz += pos[i * 3 + 2];
    }
    if (n > 0) _cur.center = BodyP3(sx / n, sy / n, sz / n);
  }

  int _v(BodyP3 p, BodyP3 n) {
    pos..add(p.x)..add(p.y)..add(p.z);
    nrm..add(n.x)..add(n.y)..add(n.z);
    vPart.add(parts.length - 1);
    return pos.length ~/ 3 - 1;
  }

  void _tri(int a, int b, int c) => tris..add(a)..add(b)..add(c);

  /// An egg-shaped blob. [rot] turns it around the z axis (tilt sideways), [tilt] around x (lean forward).
  void ellipsoid(double cx, double cy, double cz, double rx, double ry, double rz, {double rot = 0, double tilt = 0, double thMax = math.pi, double bump = 0, int lat = 8, int lon = 12}) {
    final base = pos.length ~/ 3;
    final cr = math.cos(rot), sr = math.sin(rot), ct = math.cos(tilt), st = math.sin(tilt);
    BodyP3 xf(BodyP3 v) {
      // tilt about x, then rotate about z
      final y1 = v.y * ct - v.z * st, z1 = v.y * st + v.z * ct;
      return BodyP3(v.x * cr - y1 * sr, v.x * sr + y1 * cr, z1);
    }

    for (var i = 0; i <= lat; i++) {
      final th = thMax * i / lat;
      for (var j = 0; j <= lon; j++) {
        final ph = 2 * math.pi * j / lon;
        final wob = bump == 0 ? 1.0 : 1 + bump * math.sin(th * 7) * math.sin(ph * 6 + th * 3);
        final ux = math.sin(th) * math.cos(ph), uy = math.cos(th), uz = math.sin(th) * math.sin(ph);
        final p = xf(BodyP3(ux * rx * wob, uy * ry * wob, uz * rz * wob));
        final n = xf(BodyP3(ux / rx, uy / ry, uz / rz)).unit;
        _v(BodyP3(cx + p.x, cy + p.y, cz + p.z), n);
      }
    }
    for (var i = 0; i < lat; i++) {
      for (var j = 0; j < lon; j++) {
        final a = base + i * (lon + 1) + j, b = a + 1, c = a + lon + 1, d = c + 1;
        _tri(a, c, b);
        _tri(b, c, d);
      }
    }
  }

  /// A tube along a path; radius may change along it.
  void tube(List<BodyP3> path, List<double> radii, {double flat = 1, int ring = 8, bool caps = true}) {
    final base = pos.length ~/ 3;
    final m = path.length;
    var prevN = const BodyP3(0, 0, 1);
    for (var k = 0; k < m; k++) {
      final a = path[math.max(0, k - 1)], b = path[math.min(m - 1, k + 1)];
      final t = (b - a).unit;
      var n = t.cross(prevN).cross(t);
      if (n.len < 1e-6) n = t.cross(const BodyP3(1, 0, 0)).len > 1e-6 ? t.cross(const BodyP3(1, 0, 0)) : t.cross(const BodyP3(0, 0, 1));
      n = n.unit;
      prevN = n;
      final bi = t.cross(n).unit;
      final r = radii[math.min(k, radii.length - 1)];
      for (var j = 0; j <= ring; j++) {
        final ph = 2 * math.pi * j / ring;
        final dir = n * math.cos(ph) + bi * (math.sin(ph) * flat);
        _v(path[k] + dir * r, (n * math.cos(ph) + bi * (math.sin(ph) / flat)).unit);
      }
    }
    for (var k = 0; k < m - 1; k++) {
      for (var j = 0; j < ring; j++) {
        final a = base + k * (ring + 1) + j, b = a + 1, c = a + ring + 1, d = c + 1;
        _tri(a, c, b);
        _tri(b, c, d);
      }
    }
    if (caps) {
      for (final end in [0, m - 1]) {
        final t = ((end == 0 ? path[0] - path[1] : path[m - 1] - path[m - 2])).unit;
        final cIdx = _v(path[end], t);
        final r0 = base + end * (ring + 1);
        for (var j = 0; j < ring; j++) {
          end == 0 ? _tri(cIdx, r0 + j + 1, r0 + j) : _tri(cIdx, r0 + j, r0 + j + 1);
        }
      }
    }
  }

  /// A smooth body shape made from stacked oval slices: (y, centre x, centre z, radius x, radius z).
  void loft(List<(double, double, double, double, double)> s, {int ring = 18}) {
    final base = pos.length ~/ 3;
    for (final e in s) {
      for (var j = 0; j <= ring; j++) {
        final ph = 2 * math.pi * j / ring;
        final c = math.cos(ph), sn = math.sin(ph);
        _v(BodyP3(e.$2 + c * e.$4, e.$1, e.$3 + sn * e.$5), BodyP3(c / e.$4, 0.15, sn / e.$5).unit);
      }
    }
    for (var k = 0; k < s.length - 1; k++) {
      for (var j = 0; j < ring; j++) {
        final a = base + k * (ring + 1) + j, b = a + 1, c = a + ring + 1, d = c + 1;
        _tri(a, b, c);
        _tri(b, d, c);
      }
    }
  }
}

_BodyModel _buildBody() {
  final m = _BodyModel();
  const skin = Color(0xFFE2AE86);
  void both(void Function(double s) f) {
    f(1);
    f(-1);
  }

  BodyPart bp(String g, String layer, int c, {int anim = 0, bool fixed = false}) => BodyPart(g, layer, Color(c), anim: anim, fixed: fixed);

  // ── Skin ─────────────────────────────────────────────────────────────────
  m.begin(bp('Head', 'skin', skin.toARGB32()));
  m.ellipsoid(0, 0.935, 0.003, 0.050, 0.063, 0.058, lat: 10, lon: 14);
  m.ellipsoid(0, 0.905, 0.018, 0.038, 0.030, 0.040, lat: 6, lon: 10);
  m.end();
  m.begin(bp('Hair', 'skin', 0xFF2B1B12, fixed: true));
  m.ellipsoid(0, 0.950, -0.016, 0.054, 0.062, 0.058, thMax: math.pi * 0.56, lat: 8, lon: 14);
  m.end();
  m.begin(bp('Eyes', 'skin', 0xFFF8FAFC, fixed: true));
  both((s) => m.ellipsoid(s * 0.020, 0.945, 0.051, 0.0085, 0.0085, 0.0075, lat: 5, lon: 8));
  m.end();
  m.begin(bp('Eyes', 'skin', 0xFF3B82F6, fixed: true));
  both((s) => m.ellipsoid(s * 0.020, 0.945, 0.0575, 0.0046, 0.0046, 0.003, lat: 4, lon: 7));
  m.end();
  m.begin(bp('Nose', 'skin', skin.toARGB32()));
  m.ellipsoid(0, 0.925, 0.060, 0.008, 0.015, 0.012, tilt: -0.3, lat: 5, lon: 8);
  m.end();
  m.begin(bp('Lips', 'skin', 0xFFC2575C, fixed: true));
  m.ellipsoid(0, 0.903, 0.054, 0.017, 0.005, 0.007, lat: 4, lon: 8);
  m.end();
  m.begin(bp('Ears', 'skin', skin.toARGB32()));
  both((s) => m.ellipsoid(s * 0.051, 0.935, 0.0, 0.006, 0.017, 0.012, lat: 5, lon: 8));
  m.end();
  m.begin(bp('Neck', 'skin', skin.toARGB32()));
  m.tube(const [BodyP3(0, 0.865, 0.002), BodyP3(0, 0.915, 0.006)], const [0.026, 0.024], ring: 10);
  m.end();
  m.begin(bp('Chest and belly', 'skin', skin.toARGB32()));
  m.loft(const [
    (0.462, 0, 0, 0.078, 0.052),
    (0.490, 0, 0, 0.090, 0.058),
    (0.500, 0, 0, 0.088, 0.058),
    (0.530, 0, 0, 0.098, 0.066),
    (0.570, 0, 0, 0.092, 0.064),
    (0.620, 0, 0, 0.082, 0.058),
    (0.670, 0, 0.002, 0.090, 0.062),
    (0.730, 0, 0.006, 0.104, 0.070),
    (0.790, 0, 0.004, 0.118, 0.066),
    (0.832, 0, 0, 0.122, 0.056),
    (0.862, 0, 0, 0.072, 0.042),
    (0.880, 0, 0, 0.030, 0.028),
  ]);
  both((s) => m.ellipsoid(s * 0.048, 0.512, -0.034, 0.052, 0.052, 0.052, lat: 7, lon: 10));
  m.end();
  m.begin(bp('Arms', 'skin', skin.toARGB32()));
  both((s) {
    m.ellipsoid(s * 0.130, 0.830, 0, 0.036, 0.036, 0.036, lat: 6, lon: 10);
    m.tube([BodyP3(s * 0.134, 0.826, 0), BodyP3(s * 0.146, 0.740, 0), BodyP3(s * 0.153, 0.655, 0)], const [0.031, 0.028, 0.024], ring: 10);
    m.ellipsoid(s * 0.153, 0.655, 0.002, 0.028, 0.028, 0.028, lat: 5, lon: 8);
    m.tube([BodyP3(s * 0.153, 0.653, 0.004), BodyP3(s * 0.161, 0.570, 0.008), BodyP3(s * 0.168, 0.492, 0.011)], const [0.023, 0.020, 0.015], ring: 10);
  });
  m.end();
  m.begin(bp('Hands', 'skin', skin.toARGB32()));
  both((s) {
    m.ellipsoid(s * 0.172, 0.462, 0.012, 0.014, 0.034, 0.020, lat: 6, lon: 8);
    for (var f = 0; f < 4; f++) {
      m.tube([BodyP3(s * (0.164 + f * 0.0085), 0.435, 0.012), BodyP3(s * (0.166 + f * 0.0085), 0.405 - (f == 1 || f == 2 ? 0.005 : 0), 0.012)], const [0.0048, 0.0042], ring: 5);
    }
    m.tube([BodyP3(s * 0.182, 0.45, 0.014), BodyP3(s * 0.19, 0.42, 0.02)], const [0.0055, 0.0048], ring: 5);
  });
  m.end();
  m.begin(bp('Legs', 'skin', skin.toARGB32()));
  both((s) {
    m.tube([BodyP3(s * 0.058, 0.52, 0), BodyP3(s * 0.062, 0.40, 0.003), BodyP3(s * 0.065, 0.285, 0.004)], const [0.056, 0.047, 0.036], ring: 12);
    m.ellipsoid(s * 0.065, 0.282, 0.008, 0.040, 0.040, 0.040, lat: 6, lon: 10);
    m.tube([BodyP3(s * 0.064, 0.280, 0), BodyP3(s * 0.062, 0.18, -0.006), BodyP3(s * 0.058, 0.060, 0)], const [0.034, 0.033, 0.021], ring: 12);
  });
  m.end();
  m.begin(bp('Feet', 'skin', skin.toARGB32()));
  both((s) {
    m.ellipsoid(s * 0.059, 0.026, 0.036, 0.026, 0.022, 0.07, lat: 6, lon: 10);
    m.ellipsoid(s * 0.058, 0.055, -0.004, 0.022, 0.03, 0.025, lat: 5, lon: 8);
  });
  m.end();

  // ── Muscles ──────────────────────────────────────────────────────────────
  const mus = 0xFFC2403A;
  m.begin(bp('Neck muscles', 'muscle', 0xFFB5352F));
  both((s) => m.tube([BodyP3(s * 0.016, 0.870, 0.016), BodyP3(s * 0.030, 0.915, 0.012)], const [0.012, 0.01], ring: 6));
  m.end();
  m.begin(bp('Trapezius', 'muscle', mus));
  m.ellipsoid(0, 0.790, -0.060, 0.075, 0.085, 0.012, lat: 7, lon: 12);
  both((s) => m.ellipsoid(s * 0.07, 0.848, -0.034, 0.05, 0.016, 0.026, rot: s * 0.2, lat: 5, lon: 8));
  m.end();
  m.begin(bp('Deltoids', 'muscle', 0xFFC84B3F));
  both((s) => m.ellipsoid(s * 0.138, 0.826, 0.0, 0.033, 0.040, 0.036, lat: 7, lon: 10));
  m.end();
  m.begin(bp('Pectorals', 'muscle', 0xFFD0524A));
  both((s) => m.ellipsoid(s * 0.050, 0.775, 0.058, 0.054, 0.036, 0.016, rot: s * -0.12, lat: 6, lon: 10));
  m.end();
  m.begin(bp('Biceps', 'muscle', 0xFFC84B3F));
  both((s) => m.tube([BodyP3(s * 0.140, 0.800, 0.020), BodyP3(s * 0.148, 0.735, 0.026), BodyP3(s * 0.153, 0.670, 0.016)], const [0.012, 0.021, 0.011], ring: 8));
  m.end();
  m.begin(bp('Triceps', 'muscle', 0xFFB5352F));
  both((s) => m.tube([BodyP3(s * 0.142, 0.800, -0.018), BodyP3(s * 0.150, 0.735, -0.026), BodyP3(s * 0.154, 0.670, -0.016)], const [0.012, 0.021, 0.011], ring: 8));
  m.end();
  m.begin(bp('Forearm muscles', 'muscle', 0xFFC2403A));
  both((s) {
    m.tube([BodyP3(s * 0.155, 0.640, 0.014), BodyP3(s * 0.160, 0.590, 0.022), BodyP3(s * 0.168, 0.505, 0.014)], const [0.01, 0.019, 0.009], ring: 8);
    m.tube([BodyP3(s * 0.155, 0.640, -0.014), BodyP3(s * 0.160, 0.590, -0.020), BodyP3(s * 0.168, 0.505, -0.012)], const [0.01, 0.017, 0.009], ring: 8);
  });
  m.end();
  m.begin(bp('Abs', 'muscle', 0xFFD25A4F));
  for (var r = 0; r < 4; r++) {
    both((s) => m.ellipsoid(s * 0.0125, 0.665 - r * 0.036, 0.057 - r * 0.001, 0.0125, 0.0155, 0.01, lat: 5, lon: 8));
  }
  m.end();
  m.begin(bp('Obliques', 'muscle', 0xFFB5352F));
  both((s) => m.ellipsoid(s * 0.072, 0.62, 0.030, 0.026, 0.07, 0.022, rot: s * 0.1, lat: 6, lon: 8));
  m.end();
  m.begin(bp('Latissimus', 'muscle', 0xFFB5352F));
  both((s) => m.ellipsoid(s * 0.062, 0.700, -0.052, 0.058, 0.082, 0.014, rot: s * -0.15, lat: 7, lon: 10));
  m.end();
  m.begin(bp('Glutes', 'muscle', 0xFFC84B3F));
  both((s) => m.ellipsoid(s * 0.050, 0.508, -0.036, 0.050, 0.048, 0.044, lat: 7, lon: 10));
  m.end();
  m.begin(bp('Quadriceps', 'muscle', 0xFFD0524A));
  both((s) {
    m.tube([BodyP3(s * 0.060, 0.50, 0.040), BodyP3(s * 0.064, 0.40, 0.050), BodyP3(s * 0.066, 0.31, 0.034)], const [0.024, 0.036, 0.016], ring: 8);
    m.tube([BodyP3(s * 0.082, 0.49, 0.020), BodyP3(s * 0.088, 0.40, 0.030), BodyP3(s * 0.078, 0.32, 0.022)], const [0.018, 0.028, 0.012], ring: 8);
  });
  m.end();
  m.begin(bp('Hamstrings', 'muscle', 0xFFB5352F));
  both((s) => m.tube([BodyP3(s * 0.058, 0.49, -0.040), BodyP3(s * 0.062, 0.40, -0.048), BodyP3(s * 0.064, 0.31, -0.030)], const [0.024, 0.036, 0.016], ring: 8));
  m.end();
  m.begin(bp('Calves', 'muscle', 0xFFC2403A));
  both((s) => m.tube([BodyP3(s * 0.064, 0.27, -0.030), BodyP3(s * 0.066, 0.21, -0.040), BodyP3(s * 0.058, 0.08, -0.016)], const [0.014, 0.030, 0.008], ring: 8));
  m.end();
  m.begin(bp('Shin muscles', 'muscle', 0xFFC84B3F));
  both((s) => m.tube([BodyP3(s * 0.068, 0.26, 0.030), BodyP3(s * 0.066, 0.17, 0.034), BodyP3(s * 0.058, 0.07, 0.020)], const [0.010, 0.014, 0.006], ring: 7));
  m.end();

  // ── Organs ───────────────────────────────────────────────────────────────
  m.begin(bp('Brain', 'organ', 0xFFF4B6C2));
  m.ellipsoid(0, 0.950, -0.004, 0.043, 0.046, 0.050, bump: 0.05, lat: 10, lon: 16);
  m.end();
  m.begin(bp('Thyroid', 'organ', 0xFFD6736B));
  both((s) => m.ellipsoid(s * 0.010, 0.872, 0.016, 0.009, 0.014, 0.007, lat: 5, lon: 8));
  m.end();
  m.begin(bp('Windpipe', 'organ', 0xFFBAE6FD));
  m.tube(const [BodyP3(0, 0.885, 0.006), BodyP3(0, 0.800, 0.006)], const [0.0075, 0.0075], ring: 8);
  both((s) => m.tube([BodyP3(0, 0.800, 0.006), BodyP3(s * 0.032, 0.755, 0.004)], const [0.0058, 0.0045], ring: 6));
  m.end();
  m.begin(bp('Food pipe', 'organ', 0xFFF29E8E));
  m.tube(const [BodyP3(0, 0.885, -0.008), BodyP3(0.004, 0.760, -0.020), BodyP3(0.020, 0.680, -0.014), BodyP3(0.034, 0.655, 0.002)], const [0.0055, 0.0065, 0.0065, 0.0065], ring: 7);
  m.end();
  m.begin(bp('Lungs', 'organ', 0xFFF6A9BB, anim: 2));
  m.ellipsoid(-0.050, 0.750, -0.002, 0.042, 0.078, 0.048, lat: 8, lon: 12);
  m.ellipsoid(0.048, 0.750, -0.002, 0.038, 0.076, 0.046, lat: 8, lon: 12);
  m.end();
  m.begin(bp('Heart', 'organ', 0xFFE23B3B, anim: 1));
  m.ellipsoid(0.018, 0.738, 0.022, 0.030, 0.036, 0.027, rot: -0.5, lat: 8, lon: 12);
  m.ellipsoid(0.006, 0.752, 0.020, 0.018, 0.020, 0.018, lat: 6, lon: 10);
  m.end();
  m.begin(bp('Diaphragm', 'organ', 0xFFCB6B5E));
  m.ellipsoid(0, 0.684, 0.0, 0.092, 0.012, 0.056, lat: 5, lon: 12);
  m.end();
  m.begin(bp('Liver', 'organ', 0xFF9C3B34));
  m.ellipsoid(-0.036, 0.652, 0.012, 0.062, 0.032, 0.042, rot: 0.12, lat: 7, lon: 12);
  m.end();
  m.begin(bp('Gallbladder', 'organ', 0xFF4FA36A));
  m.ellipsoid(-0.024, 0.626, 0.044, 0.008, 0.013, 0.008, lat: 5, lon: 8);
  m.end();
  m.begin(bp('Stomach', 'organ', 0xFFF29C6E));
  m.ellipsoid(0.044, 0.648, 0.018, 0.040, 0.029, 0.028, rot: 0.7, lat: 7, lon: 12);
  m.end();
  m.begin(bp('Spleen', 'organ', 0xFF7C4B8C));
  m.ellipsoid(0.076, 0.652, -0.028, 0.014, 0.030, 0.015, rot: 0.2, lat: 6, lon: 8);
  m.end();
  m.begin(bp('Pancreas', 'organ', 0xFFE8C26B));
  m.ellipsoid(0.012, 0.620, 0.004, 0.052, 0.011, 0.013, rot: 0.1, lat: 5, lon: 10);
  m.end();
  m.begin(bp('Kidneys', 'organ', 0xFF8B2D3B));
  both((s) => m.ellipsoid(s * 0.040, 0.614, -0.040, 0.014, 0.029, 0.014, rot: s * 0.2, lat: 6, lon: 8));
  m.end();
  m.begin(bp('Small intestine', 'organ', 0xFFF5A99F));
  {
    final path = <BodyP3>[];
    for (var row = 0; row < 6; row++) {
      final y = 0.600 - row * 0.0125;
      final dir = row.isEven ? 1.0 : -1.0;
      for (var k = 0; k <= 8; k++) {
        final t = k / 8;
        path.add(BodyP3(dir * (-0.048 + 0.096 * t), y + 0.004 * math.sin(t * math.pi * 2), 0.018 + 0.012 * math.sin(t * math.pi)));
      }
    }
    m.tube(path, const [0.0085], ring: 6, caps: true);
  }
  m.end();
  m.begin(bp('Large intestine', 'organ', 0xFFD9A58B));
  m.tube(const [BodyP3(-0.064, 0.548, 0.020), BodyP3(-0.070, 0.590, 0.020), BodyP3(-0.066, 0.628, 0.024), BodyP3(-0.030, 0.640, 0.036), BodyP3(0.030, 0.640, 0.036), BodyP3(0.066, 0.628, 0.024), BodyP3(0.070, 0.590, 0.020), BodyP3(0.064, 0.550, 0.018), BodyP3(0.030, 0.528, 0.012), BodyP3(0.004, 0.512, 0.004)], const [0.0125], ring: 7);
  m.end();
  m.begin(bp('Bladder', 'organ', 0xFFFFC857));
  m.ellipsoid(0, 0.525, 0.026, 0.024, 0.022, 0.022, lat: 6, lon: 10);
  m.end();
  m.begin(bp('Spinal cord', 'organ', 0xFFFDE68A));
  m.tube(const [BodyP3(0, 0.915, -0.030), BodyP3(0, 0.870, -0.044), BodyP3(0, 0.720, -0.050), BodyP3(0, 0.580, -0.052), BodyP3(0, 0.530, -0.050)], const [0.005], ring: 6);
  m.end();

  // ── Bones ────────────────────────────────────────────────────────────────
  const bone = 0xFFEFE6CF;
  m.begin(bp('Skull', 'bone', bone));
  m.ellipsoid(0, 0.945, 0, 0.047, 0.056, 0.055, lat: 10, lon: 14);
  both((s) => m.ellipsoid(s * 0.019, 0.941, 0.049, 0.0105, 0.0105, 0.008, lat: 5, lon: 8));
  m.ellipsoid(0, 0.918, 0.056, 0.007, 0.012, 0.006, lat: 4, lon: 7);
  m.end();
  m.begin(bp('Jaw', 'bone', 0xFFE7DCC2));
  m.tube(const [BodyP3(-0.038, 0.918, 0.0), BodyP3(-0.032, 0.896, 0.030), BodyP3(0, 0.890, 0.046), BodyP3(0.032, 0.896, 0.030), BodyP3(0.038, 0.918, 0.0)], const [0.0075], ring: 6);
  m.end();
  m.begin(bp('Neck bones', 'bone', bone));
  for (var i = 0; i < 7; i++) {
    m.ellipsoid(0, 0.912 - i * 0.0075, -0.026 - i * 0.002, 0.0125, 0.0042, 0.011, lat: 4, lon: 8);
  }
  m.end();
  m.begin(bp('Chest spine', 'bone', 0xFFE7DCC2));
  for (var i = 0; i < 12; i++) {
    m.ellipsoid(0, 0.855 - i * 0.0185, -0.043 - 0.006 * math.sin(i / 12 * math.pi), 0.0135, 0.0064, 0.0115, lat: 4, lon: 8);
  }
  m.end();
  m.begin(bp('Lower spine', 'bone', bone));
  for (var i = 0; i < 5; i++) {
    m.ellipsoid(0, 0.632 - i * 0.021, -0.050 + 0.004 * i, 0.0185, 0.0082, 0.0155, lat: 4, lon: 8);
  }
  m.end();
  m.begin(bp('Tailbone', 'bone', 0xFFE7DCC2));
  m.ellipsoid(0, 0.512, -0.048, 0.024, 0.030, 0.012, tilt: 0.25, lat: 6, lon: 8);
  m.ellipsoid(0, 0.480, -0.040, 0.007, 0.015, 0.006, tilt: 0.5, lat: 4, lon: 6);
  m.end();
  m.begin(bp('Ribs', 'bone', 0xFFF1E9D4));
  for (var i = 0; i < 12; i++) {
    final y0 = 0.846 - i * 0.0185;
    final a = i < 8 ? 0.062 + 0.0045 * math.min(i, 5) : 0.068 - (i - 7) * 0.0055;
    final end = i < 10 ? math.pi * 0.93 : math.pi * 0.52;
    both((s) {
      final path = <BodyP3>[];
      for (var k = 0; k <= 9; k++) {
        final ph = end * k / 9;
        path.add(BodyP3(s * (0.012 + (a - 0.006) * math.sin(ph)), y0 - 0.013 * math.sin(ph) - 0.020 * ph / math.pi, -0.046 + 0.100 * (1 - math.cos(ph)) / 2));
      }
      m.tube(path, const [0.0034], ring: 5, caps: false);
    });
  }
  m.end();
  m.begin(bp('Breastbone', 'bone', bone));
  m.ellipsoid(0, 0.772, 0.052, 0.012, 0.058, 0.007, lat: 5, lon: 8);
  m.end();
  m.begin(bp('Collarbones', 'bone', bone));
  both((s) => m.tube([BodyP3(s * 0.010, 0.846, 0.036), BodyP3(s * 0.065, 0.852, 0.030), BodyP3(s * 0.118, 0.842, -0.004)], const [0.0058], ring: 6));
  m.end();
  m.begin(bp('Shoulder blades', 'bone', 0xFFE7DCC2));
  both((s) => m.ellipsoid(s * 0.074, 0.780, -0.050, 0.034, 0.046, 0.0065, rot: s * 0.15, lat: 5, lon: 8));
  m.end();
  m.begin(bp('Upper arm bones', 'bone', bone));
  both((s) {
    m.ellipsoid(s * 0.128, 0.826, -0.002, 0.014, 0.014, 0.014, lat: 5, lon: 8);
    m.tube([BodyP3(s * 0.130, 0.820, -0.002), BodyP3(s * 0.153, 0.655, 0.002)], const [0.0095, 0.0095], ring: 7);
    m.ellipsoid(s * 0.153, 0.652, 0.002, 0.012, 0.012, 0.012, lat: 5, lon: 8);
  });
  m.end();
  m.begin(bp('Forearm bones', 'bone', 0xFFE7DCC2));
  both((s) {
    m.tube([BodyP3(s * 0.151, 0.648, 0.006), BodyP3(s * 0.165, 0.492, 0.012)], const [0.0058, 0.0048], ring: 6);
    m.tube([BodyP3(s * 0.156, 0.648, -0.004), BodyP3(s * 0.171, 0.492, 0.004)], const [0.0058, 0.0048], ring: 6);
  });
  m.end();
  m.begin(bp('Hand bones', 'bone', bone));
  both((s) {
    m.ellipsoid(s * 0.171, 0.475, 0.008, 0.012, 0.012, 0.008, lat: 4, lon: 7);
    for (var f = 0; f < 5; f++) {
      m.tube([BodyP3(s * (0.162 + f * 0.0085), 0.462, 0.008), BodyP3(s * (0.165 + f * 0.0085), 0.436, 0.010), BodyP3(s * (0.167 + f * 0.0085), 0.408, 0.011)], const [0.0028], ring: 5, caps: false);
    }
  });
  m.end();
  m.begin(bp('Pelvis', 'bone', 0xFFEFE6CF));
  both((s) {
    m.ellipsoid(s * 0.056, 0.538, -0.004, 0.036, 0.030, 0.016, rot: s * -0.35, tilt: 0.1, lat: 7, lon: 10);
    m.ellipsoid(s * 0.020, 0.486, 0.042, 0.016, 0.018, 0.008, lat: 4, lon: 7);
  });
  m.end();
  m.begin(bp('Thigh bones', 'bone', bone));
  both((s) {
    m.ellipsoid(s * 0.052, 0.512, 0.0, 0.016, 0.016, 0.016, lat: 5, lon: 8);
    m.tube([BodyP3(s * 0.054, 0.505, 0.0), BodyP3(s * 0.064, 0.290, 0.004)], const [0.0135, 0.0135], ring: 8);
    m.ellipsoid(s * 0.065, 0.286, 0.004, 0.019, 0.016, 0.018, lat: 5, lon: 8);
  });
  m.end();
  m.begin(bp('Kneecaps', 'bone', 0xFFE7DCC2));
  both((s) => m.ellipsoid(s * 0.065, 0.282, 0.030, 0.013, 0.016, 0.007, lat: 5, lon: 8));
  m.end();
  m.begin(bp('Shin bones', 'bone', bone));
  both((s) {
    m.tube([BodyP3(s * 0.064, 0.272, 0.004), BodyP3(s * 0.059, 0.070, 0.000)], const [0.0115, 0.009], ring: 7);
    m.tube([BodyP3(s * 0.076, 0.268, 0.0), BodyP3(s * 0.068, 0.068, -0.004)], const [0.0058, 0.006], ring: 6);
  });
  m.end();
  m.begin(bp('Foot bones', 'bone', 0xFFE7DCC2));
  both((s) {
    m.ellipsoid(s * 0.059, 0.034, -0.010, 0.018, 0.015, 0.026, lat: 5, lon: 8);
    for (var f = 0; f < 5; f++) {
      m.tube([BodyP3(s * (0.047 + f * 0.0082), 0.022, 0.012), BodyP3(s * (0.047 + f * 0.0082), 0.018, 0.060)], const [0.0036], ring: 5, caps: false);
    }
  });
  m.end();

  // ── Blood vessels ────────────────────────────────────────────────────────
  m.begin(bp('Aorta', 'vessel', 0xFFE11D48));
  m.tube(const [BodyP3(0.010, 0.752, 0.016), BodyP3(0.004, 0.790, 0.010), BodyP3(-0.010, 0.790, -0.010), BodyP3(-0.016, 0.760, -0.026), BodyP3(-0.012, 0.680, -0.032), BodyP3(-0.010, 0.580, -0.026), BodyP3(-0.006, 0.520, -0.018)], const [0.0095, 0.0085, 0.0085, 0.008, 0.0075, 0.0065, 0.005], ring: 7);
  both((s) => m.tube([BodyP3(-0.006, 0.520, -0.018), BodyP3(s * 0.034, 0.490, -0.006), BodyP3(s * 0.052, 0.440, 0.0), BodyP3(s * 0.060, 0.320, 0.0)], const [0.0045, 0.0042, 0.004, 0.0035], ring: 5));
  m.end();
  m.begin(bp('Vena cava', 'vessel', 0xFF2563EB));
  m.tube(const [BodyP3(0.022, 0.750, 0.012), BodyP3(0.030, 0.800, 0.002), BodyP3(0.020, 0.840, -0.006), BodyP3(0.014, 0.820, -0.012), BodyP3(0.016, 0.740, -0.020), BodyP3(0.014, 0.640, -0.028), BodyP3(0.010, 0.560, -0.022), BodyP3(0.004, 0.520, -0.014)], const [0.0095, 0.0085, 0.007, 0.0075, 0.0085, 0.008, 0.0075, 0.0055], ring: 7);
  m.end();
  m.begin(bp('Neck arteries', 'vessel', 0xFFF43F5E));
  both((s) => m.tube([BodyP3(s * 0.004, 0.800, 0.012), BodyP3(s * 0.020, 0.860, 0.014), BodyP3(s * 0.026, 0.910, 0.014)], const [0.0045, 0.004, 0.0035], ring: 6));
  m.end();
  m.begin(bp('Lung vessels', 'vessel', 0xFFFB7185));
  both((s) {
    m.tube([BodyP3(s * 0.010, 0.752, 0.022), BodyP3(s * 0.030, 0.752, 0.020), BodyP3(s * 0.052, 0.746, 0.016)], const [0.0055, 0.0048, 0.004], ring: 6);
    m.tube([BodyP3(s * 0.016, 0.760, 0.010), BodyP3(s * 0.034, 0.775, 0.006), BodyP3(s * 0.050, 0.790, 0.0)], const [0.0045, 0.004, 0.0035], ring: 6);
  });
  m.end();
  m.begin(bp('Leg arteries', 'vessel', 0xFFF43F5E));
  both((s) => m.tube([BodyP3(s * 0.060, 0.320, 0.0), BodyP3(s * 0.062, 0.200, 0.006), BodyP3(s * 0.058, 0.060, 0.012)], const [0.0035, 0.003, 0.0026], ring: 5));
  m.end();
  return m;
}

class NgmyBodyExplorer extends StatefulWidget {
  const NgmyBodyExplorer({super.key});

  @override
  State<NgmyBodyExplorer> createState() => _NgmyBodyExplorerState();
}

class _NgmyBodyExplorerState extends State<NgmyBodyExplorer> with SingleTickerProviderStateMixin, StudioFrames {
  static final _BodyModel _model = _buildBody();
  final GlobalKey _shot = GlobalKey();

  // Which layers are showing.
  final Set<String> _layers = {'skin'};
  int _skinMode = 2; // 0 off, 1 ghost, 2 solid
  int _tone = 1;
  String? _sel;

  // Camera.
  double _yaw = 0.5;
  double _pitch = 0.05;
  double _zoom = 1.0;
  double _zoomGoal = 1.0;
  BodyP3 _target = const BodyP3(0, 0.5, 0);
  BodyP3 _targetGoal = const BodyP3(0, 0.5, 0);
  bool _spin = true;
  double _idle = 0;
  double _baseZoom = 1;
  Size _size = Size.zero;

  double _t = 0;
  double _bpm = 72;
  bool _beatSound = false;
  double _lastBeat = 0;
  bool _quiz = false;
  String? _target3;
  int _score = 0;
  String _fb = '';
  final math.Random _rnd = math.Random();

  // The last picture, kept so taps can find what is under the finger.
  Float32List _screen = Float32List(0);
  Int32List _triOrder = Int32List(0);
  int _triCount = 0;

  static const List<Color> _tones = [Color(0xFFF6D3B8), Color(0xFFE2AE86), Color(0xFFBE8A66), Color(0xFF8D5B3E), Color(0xFF5E3C28)];

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  bool _partOn(BodyPart p) {
    if (p.layer == 'skin') return _skinMode > 0;
    return _layers.contains(p.layer);
  }

  double _alpha(BodyPart p) {
    var a = 1.0;
    if (p.layer == 'skin' && _skinMode == 1) a = 0.13;
    if (_sel != null && p.group != _sel) a *= p.layer == 'skin' ? 0.6 : 0.3;
    return a;
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    _idle += dt;
    if (_spin && _idle > 1.5 && _sel == null) _yaw += dt * 0.35;
    final k = 1 - math.exp(-dt * 5);
    _zoom += (_zoomGoal - _zoom) * k;
    _target = BodyP3(_target.x + (_targetGoal.x - _target.x) * k, _target.y + (_targetGoal.y - _target.y) * k, _target.z + (_targetGoal.z - _target.z) * k);
    final beat = _t * _bpm / 60;
    if (_beatSound && _layers.contains('organ') && beat.floor() != _lastBeat.floor()) {
      NgmyTone.drum('kick', volume: 0.4);
      later(170, () => NgmyTone.drum('kick', volume: 0.25));
    }
    _lastBeat = beat;
    setState(() {});
  }

  // ── Choosing and focusing ──────────────────────────────────────────────────

  void _select(String? group, {bool focus = true}) {
    setState(() => _sel = group);
    if (group == null) {
      _targetGoal = const BodyP3(0, 0.5, 0);
      _zoomGoal = 1;
      return;
    }
    final ps = _model.parts.where((p) => p.group == group).toList();
    // Make sure the layer is showing.
    final layer = ps.first.layer;
    if (layer != 'skin' && !_layers.contains(layer)) {
      _layers.add(layer);
      if (_skinMode == 2) _skinMode = 1;
    }
    var minX = 9.0, maxX = -9.0, minY = 9.0, maxY = -9.0, sz = 0.0, n = 0;
    var cz = 0.0;
    for (final p in ps) {
      for (var i = p.vStart; i < p.vEnd; i++) {
        final x = _model.pos[i * 3], y = _model.pos[i * 3 + 1];
        minX = math.min(minX, x);
        maxX = math.max(maxX, x);
        minY = math.min(minY, y);
        maxY = math.max(maxY, y);
        cz += _model.pos[i * 3 + 2];
        n++;
      }
    }
    sz = math.max(maxX - minX, maxY - minY);
    if (focus) {
      _targetGoal = BodyP3((minX + maxX) / 2, (minY + maxY) / 2, n == 0 ? 0 : cz / n);
      _zoomGoal = (0.62 / math.max(sz, 0.06)).clamp(1.0, 7.0);
    }
    _idle = 0;
    _sound(layer, group);
  }

  void _sound(String layer, String group) {
    switch (layer) {
      case 'organ':
        if (group == 'Heart') {
          NgmyTone.drum('kick');
          later(260, () => NgmyTone.drum('kick', volume: 0.5));
        } else if (group == 'Lungs' || group == 'Windpipe' || group == 'Diaphragm') {
          NgmyTone.play(420, ms: 420, wave: 'noise', sweep: -0.5, volume: 0.28);
        } else if (group == 'Brain' || group == 'Spinal cord') {
          for (var i = 0; i < 4; i++) {
            later(i * 70, () => NgmyTone.play(1300.0 + _rnd.nextInt(900), ms: 40, wave: 'square', volume: 0.2));
          }
        } else if (group.contains('intestine') || group == 'Stomach') {
          NgmyTone.play(110, ms: 360, wave: 'saw', sweep: 0.7, volume: 0.3);
        } else {
          NgmyTone.sfx('organic', 6 + group.length % 8);
        }
      case 'bone':
        NgmyTone.play(210 + group.length * 4.0, ms: 80, wave: 'tri', sweep: 0.6, volume: 0.55);
        NgmyTone.play(2400, ms: 20, wave: 'noise', volume: 0.3);
      case 'muscle':
        NgmyTone.play(70, ms: 150, sweep: 1.0, volume: 0.6);
      case 'vessel':
        NgmyTone.play(300, ms: 380, wave: 'noise', sweep: 0.4, volume: 0.22);
        NgmyTone.drum('kick', volume: 0.3);
      default:
        NgmyTone.sfx('organic', 2 + group.length % 6, volume: 0.4);
    }
  }

  void _toggleLayer(String l) {
    setState(() {
      if (l == 'skin') {
        _skinMode = _skinMode == 2 ? 1 : (_skinMode == 1 ? 0 : 2);
      } else {
        if (_layers.contains(l)) {
          _layers.remove(l);
        } else {
          _layers.add(l);
          if (_skinMode == 2) _skinMode = 1;
        }
        if (_layers.isEmpty && _skinMode == 0) _skinMode = 2;
      }
      if (_sel != null && !_model.parts.any((p) => p.group == _sel && _partOn(p))) _sel = null;
      _idle = 0;
    });
  }

  void _next() {
    final names = <String>{};
    for (final p in _model.parts) {
      if (_partOn(p) && !(p.layer == 'skin' && _layers.isNotEmpty)) names.add(p.group);
    }
    final l = names.toList();
    if (l.isEmpty) return;
    _target3 = l[_rnd.nextInt(l.length)];
    _fb = '';
  }

  // ── Picking ────────────────────────────────────────────────────────────────

  String? _pick(Offset pos) {
    final innerOn = _layers.isNotEmpty;
    for (var k = _triCount - 1; k >= 0; k--) {
      final t = _triOrder[k];
      final i0 = _model.tris[t * 3], i1 = _model.tris[t * 3 + 1], i2 = _model.tris[t * 3 + 2];
      final part = _model.parts[_model.vPart[i0]];
      if (part.layer == 'skin' && innerOn) continue;
      final ax = _screen[i0 * 2], ay = _screen[i0 * 2 + 1], bx = _screen[i1 * 2], by = _screen[i1 * 2 + 1], cx = _screen[i2 * 2], cy = _screen[i2 * 2 + 1];
      final d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
      if (d.abs() < 1e-9) continue;
      final u = ((by - cy) * (pos.dx - cx) + (cx - bx) * (pos.dy - cy)) / d;
      final v = ((cy - ay) * (pos.dx - cx) + (ax - cx) * (pos.dy - cy)) / d;
      if (u >= 0 && v >= 0 && u + v <= 1) return part.group;
    }
    return null;
  }

  void _tap(Offset pos) {
    _idle = 0;
    final g = _pick(pos);
    if (_quiz && _target3 != null) {
      if (g == null) return;
      final ok = g == _target3;
      setState(() {
        if (ok) _score++;
        _fb = ok ? 'Yes! That is the ${g.toLowerCase()}.' : 'That is the ${g.toLowerCase()}. Keep looking for the ${_target3!.toLowerCase()}.';
      });
      NgmyTone.chord('bell', ok ? [0, 4, 7, 12] : [0, 1], ms: 600, volume: 0.45);
      if (ok) later(1100, () => setState(_next));
      return;
    }
    if (g == null) {
      if (_sel != null) _select(null);
      return;
    }
    _select(g);
  }

  // ── Drawing ────────────────────────────────────────────────────────────────

  void _render(Canvas canvas, Size size) {
    final m = _model;
    final cy = math.cos(_yaw), sy = math.sin(_yaw), cp = math.cos(_pitch), sp = math.sin(_pitch);
    final scale = size.height * 0.92 * _zoom;
    final cx0 = size.width / 2, cy0 = size.height * 0.5;
    final nv = m.pos.length ~/ 3;
    if (_screen.length != nv * 2) {
      _screen = Float32List(nv * 2);
    }
    final zs = Float32List(nv);
    final shade = Float32List(nv);
    final facing = Float32List(nv);
    final beat = (_t * _bpm / 60) % 1.0;
    final heart = 1 + 0.16 * math.exp(-beat * 7) + 0.09 * math.exp(-math.pow((beat - 0.28) * 9, 2).toDouble());
    final breath = 1 + 0.05 * math.sin(_t * 1.3);
    const lx = -0.35, ly = 0.55, lz = 0.76;
    final visible = <BodyPart>[for (final p in m.parts) if (_partOn(p)) p];
    var triTotal = 0;
    for (final p in visible) {
      triTotal += p.tEnd - p.tStart;
      final a = p.anim == 1 ? heart : (p.anim == 2 ? breath : 1.0);
      final c = p.center;
      for (var i = p.vStart; i < p.vEnd; i++) {
        var x = m.pos[i * 3], y = m.pos[i * 3 + 1], z = m.pos[i * 3 + 2];
        if (a != 1.0) {
          x = c.x + (x - c.x) * a;
          y = c.y + (y - c.y) * a;
          z = c.z + (z - c.z) * a;
        }
        x -= _target.x;
        y -= _target.y;
        z -= _target.z;
        // Turn the body: around the up axis, then tip it forward or back.
        final x1 = x * cy + z * sy, z1 = -x * sy + z * cy;
        final y2 = y * cp - z1 * sp, z2 = y * sp + z1 * cp;
        final persp = 3.2 / (3.2 - z2);
        _screen[i * 2] = cx0 + x1 * scale * persp;
        _screen[i * 2 + 1] = cy0 - y2 * scale * persp;
        zs[i] = z2;
        var nx = m.nrm[i * 3], ny = m.nrm[i * 3 + 1], nz = m.nrm[i * 3 + 2];
        final nx1 = nx * cy + nz * sy, nz1 = -nx * sy + nz * cy;
        final ny2 = ny * cp - nz1 * sp, nz2 = ny * sp + nz1 * cp;
        nx = nx1;
        ny = ny2;
        nz = nz2;
        facing[i] = nz;
        shade[i] = 0.30 + 0.70 * math.max(0, nx * lx + ny * ly + nz * lz) + 0.22 * math.pow(1 - nz.abs(), 3);
      }
    }
    // Sort the triangles from far to near (a fast bucket sort).
    const buckets = 600;
    final counts = List<int>.filled(buckets + 1, 0);
    final tz = Float32List(triTotal);
    final tid = Int32List(triTotal);
    var n = 0;
    var zmin = 9.0, zmax = -9.0;
    for (final p in visible) {
      for (var t = p.tStart; t < p.tEnd; t++) {
        final a = m.tris[t * 3], b = m.tris[t * 3 + 1], c = m.tris[t * 3 + 2];
        // Do not draw faces that point away from us: it keeps the picture clean.
        if ((facing[a] + facing[b] + facing[c]) / 3 < -0.04) continue;
        tz[n] = (zs[a] + zs[b] + zs[c]) / 3;
        tid[n] = t;
        zmin = math.min(zmin, tz[n]);
        zmax = math.max(zmax, tz[n]);
        n++;
      }
    }
    final span = math.max(zmax - zmin, 1e-6);
    int bucket(int i) => ((tz[i] - zmin) / span * (buckets - 1)).floor().clamp(0, buckets - 1);
    for (var i = 0; i < n; i++) {
      counts[bucket(i) + 1]++;
    }
    for (var i = 1; i <= buckets; i++) {
      counts[i] += counts[i - 1];
    }
    final order = Int32List(n);
    for (var i = 0; i < n; i++) {
      order[counts[bucket(i)]++] = tid[i];
    }
    _triOrder = order;
    _triCount = n;

    final pts = Float32List(n * 6);
    final cols = Int32List(n * 3);
    final tone = _tones[_tone];
    final selPulse = 0.5 + 0.5 * math.sin(_t * 6);
    for (var k = 0; k < n; k++) {
      final t = order[k];
      for (var c = 0; c < 3; c++) {
        final vi = m.tris[t * 3 + c];
        pts[k * 6 + c * 2] = _screen[vi * 2];
        pts[k * 6 + c * 2 + 1] = _screen[vi * 2 + 1];
      }
      final part = m.parts[m.vPart[m.tris[t * 3]]];
      var base = part.layer == 'skin' && !part.fixed ? tone : part.base;
      final a = _alpha(part);
      final selected = part.group == _sel;
      if (selected) base = Color.lerp(base, Colors.white, 0.25 + 0.2 * selPulse)!;
      for (var c = 0; c < 3; c++) {
        final s = shade[m.tris[t * 3 + c]];
        final col = Color.fromARGB((a * 255).round().clamp(0, 255), (base.r * 255 * s).round().clamp(0, 255), (base.g * 255 * s).round().clamp(0, 255), (base.b * 255 * s).round().clamp(0, 255));
        cols[k * 3 + c] = col.toARGB32();
      }
    }
    if (n > 0) {
      final v = ui.Vertices.raw(ui.VertexMode.triangles, pts, colors: cols);
      canvas.drawVertices(v, BlendMode.dst, Paint());
    }
    // A soft floor shadow.
    final fy = cy0 - (0 - _target.y) * scale;
    canvas.drawOval(Rect.fromCenter(center: Offset(cx0 - _target.x * scale, fy + 6), width: scale * 0.3, height: scale * 0.03), Paint()..color = Colors.black.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    final info = sel == null ? null : kBodyFacts[sel];
    final names = <String>[];
    for (final p in _model.parts) {
      if (!_partOn(p) || (p.layer == 'skin' && _layers.isNotEmpty)) continue;
      if (!names.contains(p.group)) names.add(p.group);
    }
    return StudioPage(
      title: 'BODY EXPLORER',
      accent: const Color(0xFFF472B6),
      help: 'A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'body'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: Stack(fit: StackFit.expand, children: [
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onScaleStart: (d) {
                _baseZoom = _zoomGoal;
                _idle = 0;
              },
              onScaleUpdate: (d) {
                _idle = 0;
                if (d.pointerCount >= 2) {
                  _zoomGoal = (_baseZoom * d.scale).clamp(0.6, 8.0);
                } else {
                  _yaw -= d.focalPointDelta.dx * 0.011;
                  _pitch = (_pitch + d.focalPointDelta.dy * 0.008).clamp(-1.2, 1.2);
                }
              },
              onTapUp: (d) => _tap(d.localPosition),
              child: CustomPaint(size: _size, painter: _BodyPainter(this)),
            ),
            Positioned(
              left: 10,
              right: 10,
              bottom: 8,
              child: Container(
                padding: const EdgeInsets.fromLTRB(14, 10, 8, 10),
                decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(18), border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.5))),
                child: _quiz
                    ? Text(_target3 == null ? 'Turn the quiz off and on to start' : 'Find the ${_target3!.toLowerCase()}   ·   score $_score\n$_fb', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5, height: 1.4))
                    : (sel == null || info == null
                        ? const Text('Drag to turn · pinch to zoom · tap a part to learn about it', style: TextStyle(color: Colors.white54, fontSize: 12.5))
                        : Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Expanded(
                              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                                Text('$sel  ·  ${info.$1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                                const SizedBox(height: 3),
                                Text(info.$2, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
                              ]),
                            ),
                            IconButton(visualDensity: VisualDensity.compact, tooltip: 'Back to the whole body', onPressed: () => _select(null), icon: const Icon(Icons.zoom_out_map_rounded, color: Colors.white70, size: 21)),
                          ])),
              ),
            ),
          ]),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final l in kBodyLayers)
            StudioChip(
              label: l.$1 == 'skin' ? (_skinMode == 2 ? 'Skin' : (_skinMode == 1 ? 'Skin (see-through)' : 'Skin off')) : l.$2,
              icon: l.$3,
              selected: l.$1 == 'skin' ? _skinMode > 0 : _layers.contains(l.$1),
              color: const Color(0xFFF472B6),
              onTap: () => _toggleLayer(l.$1),
            ),
        ]),
        if (!_quiz && names.isNotEmpty) StudioRow(label: 'FIND', children: [for (final n in names) StudioChip(label: n, selected: n == _sel, color: const Color(0xFFFBBF24), onTap: () => _select(n))]),
        if (_layers.contains('organ')) StudioSlider(label: 'Heart rate', value: _bpm, min: 40, max: 180, display: '${_bpm.round()} beats/min', color: const Color(0xFFF87171), onChanged: (v) => setState(() => _bpm = v)),
        if (_skinMode > 0 && _layers.isEmpty) StudioRow(label: 'SKIN', children: [for (var i = 0; i < _tones.length; i++) StudioSwatch(color: _tones[i], selected: _tone == i, onTap: () => setState(() => _tone = i))]),
        StudioRow(children: [
          StudioChip(label: 'Spin', icon: Icons.threed_rotation_rounded, selected: _spin, color: const Color(0xFF38BDF8), onTap: () => setState(() => _spin = !_spin)),
          StudioButton(icon: Icons.refresh_rounded, label: 'Reset view', onTap: () => setState(() {
                _sel = null;
                _yaw = 0.5;
                _pitch = 0.05;
                _zoomGoal = 1;
                _targetGoal = const BodyP3(0, 0.5, 0);
              })),
          StudioChip(label: _quiz ? 'Quiz on' : 'Quiz', icon: Icons.quiz_rounded, selected: _quiz, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                _quiz = !_quiz;
                _score = 0;
                _sel = null;
                if (_quiz) {
                  _next();
                } else {
                  _target3 = null;
                }
              })),
          if (_layers.contains('organ')) StudioChip(label: 'Heartbeat sound', icon: Icons.volume_up_rounded, selected: _beatSound, color: const Color(0xFFF87171), onTap: () => setState(() => _beatSound = !_beatSound)),
        ]),
      ]),
    );
  }
}

class _BodyPainter extends CustomPainter {
  _BodyPainter(this.s);
  final _NgmyBodyExplorerState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = RadialGradient(center: const Alignment(0, -0.2), radius: 1.1, colors: const [Color(0xFF1B2030), Color(0xFF07080F)]).createShader(Offset.zero & size));
    canvas.save();
    canvas.clipRect(Offset.zero & size);
    s._render(canvas, size);
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _BodyPainter old) => true;
}
