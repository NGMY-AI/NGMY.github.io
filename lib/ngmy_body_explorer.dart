import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';

import 'ngmy_body_viewer.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BODY EXPLORER: a 3D human you can turn, zoom into, peel back and tap.
// The body is built from simple 3D shapes, drawn by a small 3D engine in this file.
// ═════════════════════════════════════════════════════════════════════════════

/// What we say about each part.
const Map<String, (String, String)> kBodyFacts = {
  'Adrenal glands': ('Hormones', 'Two small glands on top of the kidneys. They make adrenaline, the hormone that gets you ready to run or fight.'),
  'Pituitary gland': ('Hormones', 'A pea-sized gland under the brain. It is the "master gland" that tells your other glands what to do.'),
  'Thymus': ('Defence', 'A small gland behind the breastbone where young white blood cells learn to fight germs. It is biggest in children.'),
  'Tongue': ('Senses', 'A strong muscle covered in about 10,000 taste buds. It helps you taste, chew, swallow and talk.'),
  'Voice box': ('Breathing', 'The larynx holds your vocal cords. Air makes them buzz, and your mouth shapes the buzz into words. The epiglottis is a flap that stops food going down your windpipe.'),
  'Spinal discs': ('Frame', 'Soft, spongy cushions between your vertebrae. They absorb shocks when you walk and jump. You are slightly taller in the morning because the discs fill up with water at night.'),
  'Teeth': ('Digestion', 'Adults have 32 teeth. The outside, called enamel, is the hardest substance in your body.'),
  'Back muscles': ('Movement', 'Many layers of muscles along your spine keep you standing tall and let you bend and twist.'),
  'Chest wall muscles': ('Breathing', 'Muscles between your ribs lift the rib cage to help you breathe in and out.'),
  'Face muscles': ('Movement', 'You have over 40 muscles in your face. A smile uses about 12 of them. Others move your eyes and jaw.'),
  'Foot muscles': ('Movement', 'Small muscles in your feet curl your toes and hold up the arch of your foot.'),
  'Hip muscles': ('Movement', 'These lift your leg forward when you walk and keep your hips steady.'),
  'Inner thigh muscles': ('Movement', 'They pull your legs together and help you balance.'),
  'Pelvic floor': ('Movement', 'A sling of muscles at the bottom of your pelvis that holds up the organs above it.'),
  'Rotator cuff': ('Movement', 'Four small muscles that hold your arm bone in your shoulder socket and let you rotate your arm.'),
  'Arteries': ('Blood', 'Strong tubes carrying fresh, oxygen-rich blood away from the heart to every part of you.'),
  'Veins': ('Blood', 'Tubes that bring used blood back to the heart. Tiny valves inside stop the blood flowing backwards.'),
  'Heart vessels': ('Blood', 'The coronary arteries and veins feed the heart muscle itself. The heart needs its own supply of blood to keep beating.'),
  'Skin': ('Cover', 'Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.'),
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

/// The real human anatomy (BodyParts3D), read from the bundled file.
class _BodyModel {
  _BodyModel(this.pos, this.nrm, this.tris, this.vPart, this.parts);
  final Float32List pos;
  final Float32List nrm;
  final Int32List tris;
  final Int32List vPart;
  final List<BodyPart> parts;

  static Future<_BodyModel>? _loading;
  static Future<_BodyModel> load() => _loading ??= _read();

  /// The raw anatomy file, kept so the 3D page can be given it.
  static Uint8List? rawBytes;
  static Future<_BodyModel>? _lightLoading;

  /// The web build draws with a real 3D engine in its own page, so here only the list of parts is needed.
  static Future<_BodyModel> loadLight() => _lightLoading ??= _readLight();

  static Future<_BodyModel> _readLight() async {
    final raw = await rootBundle.load('assets/data/body3d.bin');
    rawBytes = raw.buffer.asUint8List(raw.offsetInBytes, raw.lengthInBytes);
    final d = ByteData.sublistView(raw);
    var o = 4;
    final n = d.getUint32(o, Endian.little);
    o += 4;
    final parts = <BodyPart>[];
    for (var i = 0; i < n; i++) {
      final len = d.getUint8(o++);
      final name = String.fromCharCodes([for (var k = 0; k < len; k++) d.getUint8(o + k)]);
      o += len;
      final layer = d.getUint8(o++);
      final rgb = (d.getUint8(o) << 16) | (d.getUint8(o + 1) << 8) | d.getUint8(o + 2);
      o += 3;
      final anim = d.getUint8(o++);
      o += 8;
      parts.add(BodyPart(name, _layers[layer], Color(0xFF000000 | rgb), anim: anim, fixed: name == 'Hair' || name == 'Lips' || name == 'Eyes'));
    }
    return _BodyModel(Float32List(0), Float32List(0), Int32List(0), Int32List(0), parts);
  }

  static const _layers = ['skin', 'muscle', 'organ', 'bone', 'vessel'];

  static Future<_BodyModel> _read() async {
    final raw = await rootBundle.load('assets/data/body3d_lite.bin');
    final d = ByteData.sublistView(raw);
    var o = 4; // 'BDY3'
    final n = d.getUint32(o, Endian.little);
    o += 4;
    final heads = <(String, int, int, int, int, int)>[];
    for (var i = 0; i < n; i++) {
      final len = d.getUint8(o++);
      final name = String.fromCharCodes([for (var k = 0; k < len; k++) d.getUint8(o + k)]);
      o += len;
      final layer = d.getUint8(o++);
      final rgb = (d.getUint8(o) << 16) | (d.getUint8(o + 1) << 8) | d.getUint8(o + 2);
      o += 3;
      final anim = d.getUint8(o++);
      final nv = d.getUint32(o, Endian.little);
      o += 4;
      final nt = d.getUint32(o, Endian.little);
      o += 4;
      heads.add((name, layer, 0xFF000000 | rgb, anim, nv, nt));
    }
    var totalV = 0, totalT = 0;
    for (final h in heads) {
      totalV += h.$5;
      totalT += h.$6;
    }
    final pos = Float32List(totalV * 3);
    final nrm = Float32List(totalV * 3);
    final tris = Int32List(totalT * 3);
    final vPart = Int32List(totalV);
    final parts = <BodyPart>[];
    var vi = 0, ti = 0;
    for (var gi = 0; gi < heads.length; gi++) {
      final h = heads[gi];
      final p = BodyPart(h.$1, _layers[h.$2], Color(h.$3), anim: h.$4, fixed: h.$1 == 'Hair' || h.$1 == 'Lips' || h.$1 == 'Eyes');
      p.vStart = vi;
      p.tStart = ti;
      for (var k = 0; k < h.$5 * 3; k++) {
        pos[vi * 3 + k] = d.getInt16(o, Endian.little) / 30000.0;
        o += 2;
      }
      for (var k = 0; k < h.$5; k++) {
        vPart[vi + k] = gi;
      }
      for (var k = 0; k < h.$6 * 3; k++) {
        tris[ti * 3 + k] = vi + d.getUint16(o, Endian.little);
        o += 2;
      }
      vi += h.$5;
      ti += h.$6;
      p.vEnd = vi;
      p.tEnd = ti;
      // Smooth shading: every point faces the average of the triangles around it. Inside parts use the main
      // direction of the surface around the point, which does not care which way a triangle was wound.
      final tensor = h.$2 == 0 ? null : Float64List(h.$5 * 6);
      for (var t = p.tStart; t < p.tEnd; t++) {
        final a = tris[t * 3] * 3, b = tris[t * 3 + 1] * 3, c = tris[t * 3 + 2] * 3;
        final ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
        final vx = pos[c] - pos[a], vy = pos[c + 1] - pos[a + 1], vz = pos[c + 2] - pos[a + 2];
        final nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
        if (tensor == null) {
          for (final q in [a, b, c]) {
            nrm[q] += nx;
            nrm[q + 1] += ny;
            nrm[q + 2] += nz;
          }
        } else {
          final area = math.sqrt(nx * nx + ny * ny + nz * nz);
          if (area > 1e-14) {
            final ux2 = nx / area, uy2 = ny / area, uz2 = nz / area;
            for (final q in [a, b, c]) {
              final k = (q ~/ 3 - p.vStart) * 6;
              tensor[k] += area * ux2 * ux2;
              tensor[k + 1] += area * ux2 * uy2;
              tensor[k + 2] += area * ux2 * uz2;
              tensor[k + 3] += area * uy2 * uy2;
              tensor[k + 4] += area * uy2 * uz2;
              tensor[k + 5] += area * uz2 * uz2;
            }
          }
        }
      }
      if (tensor != null) {
        for (var v = 0; v < h.$5; v++) {
          final k = v * 6;
          var x = 0.577, y = 0.577, z = 0.577;
          for (var it = 0; it < 12; it++) {
            final nx = tensor[k] * x + tensor[k + 1] * y + tensor[k + 2] * z;
            final ny = tensor[k + 1] * x + tensor[k + 3] * y + tensor[k + 4] * z;
            final nz = tensor[k + 2] * x + tensor[k + 4] * y + tensor[k + 5] * z;
            final l = math.sqrt(nx * nx + ny * ny + nz * nz);
            if (l < 1e-12) break;
            x = nx / l;
            y = ny / l;
            z = nz / l;
          }
          final q = (p.vStart + v) * 3;
          nrm[q] = x;
          nrm[q + 1] = y;
          nrm[q + 2] = z;
        }
      }
      var sx = 0.0, sy = 0.0, sz = 0.0;
      for (var k = p.vStart; k < p.vEnd; k++) {
        final l = math.sqrt(nrm[k * 3] * nrm[k * 3] + nrm[k * 3 + 1] * nrm[k * 3 + 1] + nrm[k * 3 + 2] * nrm[k * 3 + 2]);
        if (l > 1e-12) {
          nrm[k * 3] /= l;
          nrm[k * 3 + 1] /= l;
          nrm[k * 3 + 2] /= l;
        } else {
          nrm[k * 3 + 1] = 1;
        }
        sx += pos[k * 3];
        sy += pos[k * 3 + 1];
        sz += pos[k * 3 + 2];
      }
      final cnt = math.max(1, p.vEnd - p.vStart);
      p.center = BodyP3(sx / cnt, sy / cnt, sz / cnt);
      parts.add(p);
    }
    return _BodyModel(pos, nrm, tris, vPart, parts);
  }
}

class NgmyBodyExplorer extends StatefulWidget {
  const NgmyBodyExplorer({super.key});

  @override
  State<NgmyBodyExplorer> createState() => _NgmyBodyExplorerState();
}

class _NgmyBodyExplorerState extends State<NgmyBodyExplorer> with SingleTickerProviderStateMixin, StudioFrames {
  _BodyModel? _modelN;
  _BodyModel get _model => _modelN!;
  Float32List _zs = Float32List(0), _shade = Float32List(0), _facing = Float32List(0);
  Float32List _tz = Float32List(0), _pts = Float32List(0);
  Int32List _tid = Int32List(0), _cols = Int32List(0);
  final GlobalKey _shot = GlobalKey();

  // The web build: a real 3D engine in its own page, driven with messages.
  NgmyBodyViewerLink? _link;
  bool _viewerReady = false;
  String _lastSig = '';
  bool get _web => kIsWeb && kNgmyBodyViewerSupported;

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
    if (_web) {
      _link = NgmyBodyViewerLink(onEvent: _onViewer);
      () async {
        final got = await Future.wait<Object>([_BodyModel.loadLight(), rootBundle.loadString('assets/data/three.min.js')]);
        if (!mounted) return;
        _link!.start(got[1] as String);
        setState(() => _modelN = got[0] as _BodyModel);
      }();
      return;
    }
    _BodyModel.load().then((m) {
      if (mounted) setState(() => _modelN = m);
    });
  }

  @override
  void dispose() {
    _link?.dispose();
    super.dispose();
  }

  void _onViewer(Map<dynamic, dynamic> m) {
    if (!mounted) return;
    switch (m['ngmyBody']) {
      case 'ready':
        _link?.send({'t': 'init', 'data': _BodyModel.rawBytes});
        _viewerReady = true;
        _lastSig = '';
        _pushState();
      case 'pick':
        setState(() => _handlePick(m['group'] as String?));
      case 'shot':
        _shareShot('${m['data']}');
      case 'error':
        debugPrint('[body viewer] ${m['text']}');
    }
  }

  /// Tells the 3D page what is switched on (only when something changed).
  void _pushState() {
    if (!_viewerReady) return;
    final c = _tones[_tone];
    String h(double v) => (v * 255).round().clamp(0, 255).toRadixString(16).padLeft(2, '0');
    final msg = {
      'layers': _layers.toList()..sort(),
      'skinMode': _skinMode,
      'tone': '#${h(c.r)}${h(c.g)}${h(c.b)}',
      'sel': _sel,
      'bpm': _bpm.round(),
      'spin': _spin,
    };
    final sig = jsonEncode(msg);
    if (sig == _lastSig) return;
    _lastSig = sig;
    _link?.send({'t': 'state', ...msg});
  }

  Future<void> _shareShot(String dataUrl) async {
    try {
      final bytes = base64Decode(dataUrl.substring(dataUrl.indexOf(',') + 1));
      await Share.shareXFiles([XFile.fromData(bytes, mimeType: 'image/png', name: 'body.png')], text: 'Made in NGMY Core Protocol');
    } catch (_) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not share the picture here. Try a screenshot instead.')));
    }
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
    if (_modelN == null) return;
    _t += dt;
    if (_web) {
      // The 3D page draws and animates itself; only the heartbeat sound is timed here.
      final b = _t * _bpm / 60;
      if (_beatSound && _layers.contains('organ') && b.floor() != _lastBeat.floor()) {
        NgmyTone.drum('kick', volume: 0.4);
        later(170, () => NgmyTone.drum('kick', volume: 0.25));
      }
      _lastBeat = b;
      return;
    }
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
      _link?.send({'t': 'focus', 'group': null});
      return;
    }
    final ps = _model.parts.where((p) => p.group == group).toList();
    // Make sure the layer is showing.
    final layer = ps.first.layer;
    if (layer != 'skin' && !_layers.contains(layer)) {
      _layers.add(layer);
      if (_skinMode == 2) _skinMode = 1;
    }
    if (_web) {
      _pushState();
      if (focus) _link?.send({'t': 'focus', 'group': group});
      _idle = 0;
      _sound(layer, group);
      return;
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
    _handlePick(_pick(pos));
  }

  void _handlePick(String? g) {
    _idle = 0;
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
    if (_zs.length != nv) {
      _zs = Float32List(nv);
      _shade = Float32List(nv);
      _facing = Float32List(nv);
    }
    final zs = _zs, shade = _shade, facing = _facing;
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
      final twoSided = p.layer != 'skin';
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
        if (twoSided && nz < 0) {
          nx = -nx;
          ny = -ny;
          nz = -nz;
        }
        facing[i] = nz;
        shade[i] = 0.30 + 0.70 * math.max(0, nx * lx + ny * ly + nz * lz) + 0.22 * math.pow(1 - nz.abs(), 3);
      }
    }
    // Sort the triangles from far to near (a fast bucket sort).
    const buckets = 600;
    final counts = List<int>.filled(buckets + 1, 0);
    if (_tz.length < triTotal) {
      _tz = Float32List(triTotal);
      _tid = Int32List(triTotal);
    }
    final tz = _tz, tid = _tid;
    var n = 0;
    var zmin = 9.0, zmax = -9.0;
    for (final p in visible) {
      for (var t = p.tStart; t < p.tEnd; t++) {
        final a = m.tris[t * 3], b = m.tris[t * 3 + 1], c = m.tris[t * 3 + 2];
        // Skin faces that point away are skipped. Inside parts are drawn whole, so no holes can open up.
        if ((facing[a] + facing[b] + facing[c]) / 3 < -0.04 && m.parts[m.vPart[a]].layer == 'skin') continue;
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

    if (_pts.length < n * 6) {
      _pts = Float32List(n * 6);
      _cols = Int32List(n * 3);
    }
    final pts = _pts, cols = _cols;
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
      final ghost = part.layer == 'skin' && _skinMode == 1;
      for (var c = 0; c < 3; c++) {
        final s = shade[m.tris[t * 3 + c]];
        if (ghost) {
          final rim = math.pow(1 - facing[m.tris[t * 3 + c]].abs().clamp(0.0, 1.0), 1.6).toDouble();
          cols[k * 3 + c] = Color.fromARGB((255 * (0.035 + 0.3 * rim)).round(), 170, 210, 240).toARGB32();
          continue;
        }
        final col = Color.fromARGB((a * 255).round().clamp(0, 255), (base.r * 255 * s).round().clamp(0, 255), (base.g * 255 * s).round().clamp(0, 255), (base.b * 255 * s).round().clamp(0, 255));
        cols[k * 3 + c] = col.toARGB32();
      }
    }
    if (n > 0) {
      final v = ui.Vertices.raw(ui.VertexMode.triangles, Float32List.sublistView(pts, 0, n * 6), colors: Int32List.sublistView(cols, 0, n * 3));
      canvas.drawVertices(v, BlendMode.dst, Paint());
    }
    // A soft floor shadow.
    final fy = cy0 - (0 - _target.y) * scale;
    canvas.drawOval(Rect.fromCenter(center: Offset(cx0 - _target.x * scale, fy + 6), width: scale * 0.3, height: scale * 0.03), Paint()..color = Colors.black.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
  }

  Widget _infoBox(String? sel, (String, String)? info) {
    return Container(
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
              );
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    final info = sel == null ? null : kBodyFacts[sel];
    if (_web) _pushState();
    final names = <String>[];
    for (final p in (_modelN?.parts ?? const <BodyPart>[])) {
      if (!_partOn(p) || (p.layer == 'skin' && _layers.isNotEmpty)) continue;
      if (!names.contains(p.group)) names.add(p.group);
    }
    return StudioPage(
      title: 'BODY EXPLORER',
      accent: const Color(0xFFF472B6),
      help: 'A 3D human you can explore.\n\nDrag with one finger to turn the body all the way round. Pinch with two fingers to zoom in and out. Tap any part of the body to fly in close and read about it.\n\nUse the layer buttons to look inside: Skin, Muscles, Organs, Skeleton and Blood vessels. You can have several on at once. The skin turns see-through so you can see what is inside. Tap Skin again to make it solid or switch it off.\n\nReal 3D anatomy from BodyParts3D, (c) The Database Center for Life Science, licensed under CC Attribution 4.0 International. The model is an adult male reference.\n\nThe list under the buttons names every part: tap a name to find it. In Organs you can watch the lungs breathe and the heart beat, and change the heart rate.\n\nTurn on Quiz and tap the part you are asked to find.',
      actions: [IconButton(onPressed: _web ? () => _link?.send({'t': 'shot'}) : () => studioShare(context, _shot, name: 'body'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: _web
          ? Column(children: [
              Expanded(child: _link?.started == true ? _link!.build() : const SizedBox.expand()),
              Padding(padding: const EdgeInsets.fromLTRB(10, 6, 10, 8), child: _infoBox(sel, info)),
            ])
          : LayoutBuilder(builder: (context, box) {
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
            if (!_web) Positioned(left: 10, right: 10, bottom: 8, child: _infoBox(sel, info)),
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
                _link?.send({'t': 'reset'});
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
    if (s._modelN != null) s._render(canvas, size);
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _BodyPainter old) => true;
}
