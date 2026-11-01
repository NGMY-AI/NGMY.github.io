import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_3d.dart';
import 'ngmy_city_ads.dart';
import 'ngmy_construction_homescene.dart';
import 'ngmy_frame_loop.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BILLBOARD STUDIO: one billboard on its own, a 30 second drone shot round it, and a way to put your own logo, picture and words on it.
// By default the billboard plays the NGMY logo, the NGMY words and the NGMY ads. Anything you change is kept on this device.
// ═════════════════════════════════════════════════════════════════════════════

/// How long the drone shot lasts, in seconds.
const double kBillboardShotSecs = 30;

/// A kind of billboard: how big the picture is, how high it stands and how it is built.
class BbTemplate {
  const BbTemplate(this.id, this.emoji, this.name, this.blurb, this.w, this.h, this.poleH);
  final String id, emoji, name, blurb;

  /// The size of the picture and how high its bottom edge is above the ground.
  final double w, h, poleH;
}

const List<BbTemplate> kBbTemplates = [
  BbTemplate('highway', '🛣️', 'Highway board', 'Wide, on two poles, with a walkway under it', 260, 110, 120),
  BbTemplate('tower', '🗼', 'Tall tower sign', 'Tall and thin on one thick pole', 120, 200, 130),
  BbTemplate('neon', '🌃', 'Neon board', 'A black board with a glowing neon edge', 230, 125, 100),
  BbTemplate('roof', '🏢', 'Rooftop board', 'On top of a building, held by braces', 250, 100, 110),
  BbTemplate('screen', '📺', 'Big screen', 'A thin screen on a low stand, like a giant TV', 210, 120, 30),
  BbTemplate('gate', '🚪', 'Town gate', 'An arch over the road with the board across it', 300, 80, 150),
];

/// The colours a custom board can have: the two background colours and the colour of the words.
class BbScheme {
  const BbScheme(this.name, this.a, this.b, this.text, this.accent);
  final String name;
  final Color a, b, text, accent;
}

const List<BbScheme> kBbSchemes = [
  BbScheme('NGMY navy', Color(0xFF0B1F4B), Color(0xFF1E4FA3), Colors.white, Color(0xFFF5C14B)),
  BbScheme('Purple', Color(0xFF5B21B6), Color(0xFFDB2777), Colors.white, Color(0xFFFDE68A)),
  BbScheme('Green', Color(0xFF065F46), Color(0xFF14B8A6), Colors.white, Color(0xFFFEF08A)),
  BbScheme('Sunset', Color(0xFFB91C1C), Color(0xFFF59E0B), Colors.white, Color(0xFFFFF7ED)),
  BbScheme('Night', Color(0xFF0F172A), Color(0xFF334155), Color(0xFF67E8F9), Color(0xFFF472B6)),
  BbScheme('Light', Color(0xFFFFFFFF), Color(0xFFDBEAFE), Color(0xFF0B1F4B), Color(0xFFD97706)),
];

/// What the board says. Until something is changed it is the NGMY default: the NGMY logo, words and ads.
class BbContent {
  BbContent();

  static const String defHeadline = 'NEW GLOBAL MOVEMENT FOR YOUTH';
  static const String defSubtitle = 'Videos, slides, blogs and books.';
  static const String defFooter = 'ngmy.org';

  /// True while the board plays the NGMY default (the logo, the words and the NGMY ads one after another).
  bool useDefault = true;
  String headline = defHeadline, subtitle = defSubtitle, footer = defFooter;
  int scheme = 0;
  String template = 'highway';
  Uint8List? logoBytes, picBytes;
  ui.Image? logo, pic;

  void resetToNgmy() {
    useDefault = true;
    headline = defHeadline;
    subtitle = defSubtitle;
    footer = defFooter;
    scheme = 0;
    logoBytes = null;
    picBytes = null;
    logo = null;
    pic = null;
  }

  Map<String, dynamic> toJson() => {
        'template': template,
        'custom': !useDefault,
        'headline': headline,
        'subtitle': subtitle,
        'footer': footer,
        'scheme': scheme,
        if (logoBytes != null) 'logo': base64Encode(logoBytes!),
        if (picBytes != null) 'pic': base64Encode(picBytes!),
      };

  void fromJson(Map<String, dynamic> j) {
    template = kBbTemplates.any((t) => t.id == j['template']) ? j['template'] as String : 'highway';
    useDefault = j['custom'] != true;
    headline = (j['headline'] as String?) ?? defHeadline;
    subtitle = (j['subtitle'] as String?) ?? defSubtitle;
    footer = (j['footer'] as String?) ?? defFooter;
    scheme = ((j['scheme'] as num?)?.toInt() ?? 0).clamp(0, kBbSchemes.length - 1);
    logoBytes = j['logo'] is String ? base64Decode(j['logo'] as String) : null;
    picBytes = j['pic'] is String ? base64Decode(j['pic'] as String) : null;
  }
}

Future<ui.Image?> _decode(Uint8List? bytes) async {
  if (bytes == null) return null;
  try {
    final codec = await ui.instantiateImageCodec(bytes);
    return (await codec.getNextFrame()).image;
  } catch (_) {
    return null;
  }
}

/// Paints what is on the board at moment [t]: the NGMY default ads, or the person's own logo, picture and words.
void paintBillboard(Canvas c, Size s, double t, BbContent b) {
  if (b.useDefault) {
    // The NGMY poster first (the logo and the words), then the NGMY ads, one after another.
    final k = (t / 8).floor();
    if (k % 2 == 0) {
      paintCityAd(c, s, t, 0);
    } else {
      paintCityAd(c, s, t, 1 + (k ~/ 2));
    }
    return;
  }
  final sc = kBbSchemes[b.scheme];
  final r = Offset.zero & s;
  c.drawRect(r, Paint()..shader = LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [sc.a, sc.b]).createShader(r));
  c.drawRect(r.deflate(s.height * 0.04), Paint()
    ..style = PaintingStyle.stroke
    ..strokeWidth = s.height * 0.025
    ..color = sc.accent);
  final pad = s.height * 0.1;
  var textLeft = pad;
  final pic = b.pic;
  if (pic != null) {
    // The picture fills the left part, cut to fit (like a photo on a poster).
    final box = Rect.fromLTWH(pad, pad, s.width * 0.4, s.height - pad * 2);
    final k = math.max(box.width / pic.width, box.height / pic.height);
    final src = Rect.fromCenter(center: Offset(pic.width / 2, pic.height / 2), width: box.width / k, height: box.height / k);
    c.save();
    c.clipRRect(RRect.fromRectAndRadius(box, Radius.circular(s.height * 0.05)));
    c.drawImageRect(pic, src, box, Paint()..filterQuality = FilterQuality.medium);
    c.restore();
    textLeft = box.right + pad * 0.8;
  }
  // The logo: the person's own, or the NGMY logo.
  final logo = b.logo ?? NgmyLogo.image;
  final logoBox = Rect.fromLTWH(textLeft, pad, s.height * 0.3, s.height * 0.3);
  c.drawCircle(logoBox.center, logoBox.width / 2, Paint()..color = const Color(0xFFFDFCF7));
  if (logo != null) {
    final k = math.min(logoBox.width * 0.8 / logo.width, logoBox.height * 0.8 / logo.height);
    c.drawImageRect(logo, Rect.fromLTWH(0, 0, logo.width.toDouble(), logo.height.toDouble()), Rect.fromCenter(center: logoBox.center, width: logo.width * k, height: logo.height * k), Paint()..filterQuality = FilterQuality.medium);
  }
  TextPainter tp(String text, double size, Color col, double maxW, {int lines = 2, FontWeight w = FontWeight.w900}) => TextPainter(
        text: TextSpan(text: text, style: TextStyle(color: col, fontSize: size, fontWeight: w, height: 1.1)),
        textDirection: TextDirection.ltr,
        maxLines: lines,
        ellipsis: '…',
      )..layout(maxWidth: maxW);
  final maxW = s.width - textLeft - pad;
  final head = tp(b.headline, s.height * 0.17, sc.text, maxW);
  head.paint(c, Offset(textLeft, logoBox.bottom + s.height * 0.04));
  final sub = tp(b.subtitle, s.height * 0.09, sc.accent, maxW, w: FontWeight.w700);
  sub.paint(c, Offset(textLeft, logoBox.bottom + s.height * 0.06 + head.height));
  final foot = tp(b.footer, s.height * 0.08, sc.text.withValues(alpha: 0.85), maxW, lines: 1, w: FontWeight.w800);
  foot.paint(c, Offset(s.width - pad - foot.width, s.height - pad - foot.height));
  // A shine that sweeps across.
  final x = ((t * 0.35) % 1.6 - 0.3) * s.width;
  c.save();
  c.clipRect(r);
  c.drawRect(Rect.fromLTWH(x, 0, s.width * 0.1, s.height), Paint()..color = Colors.white.withValues(alpha: 0.1));
  c.restore();
}

/// The scene: the ground, a road, trees and lamps, and the billboard of the chosen kind with the picture on both sides.
Scene3D buildBillboardScene(BbTemplate tp, BbContent content) {
  final b = MeshBuilder();
  const grass = Color(0xFF55A055), road = Color(0xFF3F4450), line = Color(0xFFF3C94A), steel = Color(0xFF4B5563), dark = Color(0xFF111827);
  const up = V3(0, 1, 0);
  b.order = 0;
  b.quad(const V3(-3000, 0, -3000), const V3(3000, 0, -3000), const V3(3000, 0, 3000), const V3(-3000, 0, 3000), grass, normal: up);
  // A road in front of the billboard, and a dashed line down it.
  b.order = 1;
  b.quad(const V3(-1400, 0.4, 330), const V3(1400, 0.4, 330), const V3(1400, 0.4, 470), const V3(-1400, 0.4, 470), road, normal: up);
  for (var x = -1300.0; x < 1300; x += 90) {
    b.quad(V3(x, 0.8, 397), V3(x + 45, 0.8, 397), V3(x + 45, 0.8, 403), V3(x, 0.8, 403), line, normal: up);
  }
  b.order = 2;
  final w = tp.w, h = tp.h, y0 = tp.poleH, yc = y0 + h / 2;
  // The board itself: a thick back, and a frame round the picture.
  Color frame = const Color(0xFFF5C14B);
  var thick = 10.0;
  switch (tp.id) {
    case 'tower':
      frame = const Color(0xFFF8FAFC);
    case 'neon':
      frame = const Color(0xFF22D3EE);
    case 'screen':
      frame = dark;
      thick = 5;
    case 'roof':
      frame = const Color(0xFFEF4444);
    case 'gate':
      frame = const Color(0xFF1E3A8A);
  }
  final body = MeshBuilder()..order = 2;
  body.box(V3(0, yc, -thick / 2 - 0.2), V3(w + 14, h + 14, thick), tp.id == 'neon' || tp.id == 'screen' ? dark : const Color(0xFF1F2937), shine: 0.2);
  b.polys.addAll(body.polys);
  final fb = MeshBuilder()..order = 2;
  const ft = 7.0;
  fb.box(V3(0, y0 + h + 3, 3), V3(w + 14, ft, 8), frame, shine: 0.4);
  fb.box(V3(0, y0 - 3, 3), V3(w + 14, ft, 8), frame, shine: 0.4);
  fb.box(V3(-w / 2 - 3, yc, 3), V3(ft, h + 14, 8), frame, shine: 0.4);
  fb.box(V3(w / 2 + 3, yc, 3), V3(ft, h + 14, 8), frame, shine: 0.4);
  b.polys.addAll(fb.polys);
  final sb = MeshBuilder()..order = 2;
  // The supports.
  switch (tp.id) {
    case 'tower':
      sb.cyl(const V3(0, 0, -5), V3(0, y0 + 20, -5), 9, steel, sides: 10);
    case 'screen':
      sb.box(V3(0, 12, -6), const V3(150, 24, 40), dark);
      sb.box(V3(0, y0 - 6, -6), const V3(40, 12, 14), steel);
    case 'roof':
      sb.box(const V3(0, 55, -60), const V3(300, 110, 140), const Color(0xFF9CA3AF), shine: 0.1);
      for (final x in const [-1.0, 1.0]) {
        sb.box(V3(x * w * 0.35, 120, -52), const V3(10, 30, 10), steel);
        sb.box(V3(x * w * 0.35, 136, -20), const V3(8, 8, 70), steel, yaw: 0);
      }
    case 'gate':
      for (final x in const [-1.0, 1.0]) {
        sb.cyl(V3(x * (w / 2 + 25), 0, -5), V3(x * (w / 2 + 25), y0 + h + 30, -5), 10, steel, sides: 10);
      }
      sb.box(V3(0, y0 + h + 34, -5), V3(w + 80, 16, 20), steel, shine: 0.2);
    default:
      for (final x in const [-1.0, 1.0]) {
        sb.cyl(V3(x * w * 0.3, 0, -6), V3(x * w * 0.3, y0 + 10, -6), 5, steel, sides: 10);
      }
      if (tp.id == 'highway') {
        sb.box(V3(0, y0 - 14, 14), V3(w + 14, 3, 22), steel);
        sb.box(V3(0, y0 - 6, 24), V3(w + 14, 2, 2), steel);
      }
  }
  b.polys.addAll(sb.polys);
  // A few trees and lamp posts, so there is something to fly past.
  const spots = [(-420.0, 200.0), (420.0, 230.0), (-300.0, -260.0), (350.0, -300.0), (-600.0, 60.0), (600.0, 20.0), (0.0, -500.0)];
  final tb = MeshBuilder()..order = 2;
  for (final (x, z) in spots) {
    tb.cyl(V3(x, 0, z), V3(x, 40, z), 5, const Color(0xFF6B4A32), sides: 6);
    tb.ball(V3(x, 70, z), 34, const Color(0xFF3F8F4D), lat: 3, lon: 6);
  }
  for (final x in const [-250.0, 250.0, -550.0, 550.0]) {
    tb.cyl(V3(x, 0, 345), V3(x, 70, 345), 2.5, steel, sides: 5);
    tb.ball(V3(x, 74, 345), 6, const Color(0xFFFFF1A8), lat: 3, lon: 6);
  }
  b.polys.addAll(tb.polys);
  // The picture on both sides.
  final pw = 900.0, ph = 900.0 * h / w;
  final screens = <ScreenQuad>[
    ScreenQuad([V3(-w / 2, y0 + h, 0.8), V3(w / 2, y0 + h, 0.8), V3(w / 2, y0, 0.8), V3(-w / 2, y0, 0.8)], 0, (c, size, t) => paintBillboard(c, size, t, content), width: pw, height: ph, bias: 30, order: 2),
    ScreenQuad([V3(w / 2, y0 + h, -thick - 0.8), V3(-w / 2, y0 + h, -thick - 0.8), V3(-w / 2, y0, -thick - 0.8), V3(w / 2, y0, -thick - 0.8)], 0, (c, size, t) => paintBillboard(c, size, t, content), width: pw, height: ph, bias: 30, order: 2),
  ];
  return Scene3D(b.polys, screens: screens, farMin: 4000);
}

/// A point of the drone shot: the angle round the board (0 is straight in front), how far away, and how high above the middle of the picture.
class _Key {
  const _Key(this.t, this.a, this.r, this.h);
  final double t, a, r, h;
}

/// The 30 second shot: wide, a close slide along the front, the left side, behind, the right side, then up and back for the last wide shot.
const List<_Key> _keys = [
  _Key(0, 0.9, 2.3, 0.9),
  _Key(4, 0.3, 1.35, 0.35),
  _Key(8, -0.25, 0.85, 0.0),
  _Key(12, -1.3, 1.25, 0.25),
  _Key(16, -2.5, 1.45, 0.5),
  _Key(20, -3.5, 1.2, 0.1),
  _Key(25, -4.9, 1.3, -0.1),
  _Key(30, -6.0, 2.4, 1.1),
];

V3 _cr(V3 p0, V3 p1, V3 p2, V3 p3, double u) {
  double f(double a, double b, double c, double d) => 0.5 * ((2 * b) + (-a + c) * u + (2 * a - 5 * b + 4 * c - d) * u * u + (-a + 3 * b - 3 * c + d) * u * u * u);
  return V3(f(p0.x, p1.x, p2.x, p3.x), f(p0.y, p1.y, p2.y, p3.y), f(p0.z, p1.z, p2.z, p3.z));
}

/// Where the drone is (the eye) and what it looks at, [secs] into the shot, round a board of [tp].
(V3 eye, V3 look) billboardShot(BbTemplate tp, double secs) {
  final centre = V3(0, tp.poleH + tp.h / 2, 0);
  V3 at(_Key k) => centre + V3(math.sin(k.a) * k.r * tp.w, k.h * tp.h, math.cos(k.a) * k.r * tp.w);
  final s = secs.clamp(0.0, kBillboardShotSecs);
  var i = 0;
  while (i + 2 < _keys.length && _keys[i + 1].t <= s) {
    i++;
  }
  final u = ((s - _keys[i].t) / (_keys[i + 1].t - _keys[i].t)).clamp(0.0, 1.0);
  V3 pt(int k) => at(_keys[k.clamp(0, _keys.length - 1)]);
  final eye = _cr(pt(i - 1), pt(i), pt(i + 1), pt(i + 2), u);
  // Never lower than a person's height off the ground.
  return (V3(eye.x, math.max(eye.y, 18), eye.z), centre);
}

String billboardShotName(double secs) {
  if (secs < 4) return 'Wide shot';
  if (secs < 8) return 'Coming in';
  if (secs < 12) return 'Close slide';
  if (secs < 16) return 'Left side';
  if (secs < 22) return 'Behind the board';
  if (secs < 27) return 'Right side';
  return 'Pull back and up';
}

const String _kPrefs = 'ngmy_billboard_studio_v1';

class NgmyBillboardStudioPage extends StatefulWidget {
  const NgmyBillboardStudioPage({super.key});

  @override
  State<NgmyBillboardStudioPage> createState() => NgmyBillboardStudioState();
}

class NgmyBillboardStudioState extends State<NgmyBillboardStudioPage> {
  final BbContent content = BbContent();
  late final Cam3 cam = Cam3(yaw: 0.5, pitch: 0.25, dist: 420, target: const V3(0, 120, 0))
    ..minDist = 30
    ..maxDist = 1400
    ..minPitch = 0.02
    ..maxPitch = 1.4
    ..setFree(true);
  late Scene3D scene;
  late final FrameLoop _loop = FrameLoop(_tick);
  final Stopwatch _clock = Stopwatch();

  /// How far into the drone shot we are, or -1 when it is not flying.
  double shotSecs = -1;
  bool get flying => shotSecs >= 0;
  String note = '';

  BbTemplate get tpl => kBbTemplates.firstWhere((t) => t.id == content.template);

  @override
  void initState() {
    super.initState();
    scene = buildBillboardScene(tpl, content);
    _frameBoard();
    NgmyLogo.load().then((_) {
      if (mounted) setState(() {});
    });
    _load();
  }

  @override
  void dispose() {
    _loop.stop();
    cam.dispose();
    super.dispose();
  }

  void _frameBoard() {
    final t = tpl;
    cam.setView(target: V3(0, t.poleH + t.h / 2, 0), dist: t.w * 1.9, yaw: 0.45, pitch: 0.22);
  }

  Future<void> _load() async {
    try {
      final p = await SharedPreferences.getInstance();
      final s = p.getString(_kPrefs);
      if (s == null) return;
      content.fromJson(jsonDecode(s) as Map<String, dynamic>);
      content.logo = await _decode(content.logoBytes);
      content.pic = await _decode(content.picBytes);
      if (!mounted) return;
      setState(() {
        scene = buildBillboardScene(tpl, content);
        _frameBoard();
      });
    } catch (_) {}
  }

  Future<void> _save() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(_kPrefs, jsonEncode(content.toJson()));
    } catch (_) {}
  }

  void _tick() {
    if (!flying || !mounted) return;
    final s = _clock.elapsedMilliseconds / 1000.0;
    if (s >= kBillboardShotSecs) {
      _stopShot(done: true);
      return;
    }
    final (eye, look) = billboardShot(tpl, s);
    final v = look - eye;
    final d = math.max(8.0, v.len);
    cam.setView(target: look, dist: d, yaw: math.atan2(v.x, -v.z), pitch: math.asin((-v.y / d).clamp(-1.0, 1.0)));
    setState(() => shotSecs = s);
  }

  void startShot() {
    cam.minPitch = -1.4;
    _clock
      ..reset()
      ..start();
    setState(() {
      shotSecs = 0;
      note = '';
    });
    _loop.start();
  }

  void _stopShot({bool done = false}) {
    _loop.stop();
    _clock.stop();
    cam.minPitch = 0.02;
    setState(() {
      shotSecs = -1;
      note = done ? 'That was the 30 second drone shot. Press it again any time, or change the board and film it again.' : '';
    });
    _frameBoard();
  }

  @visibleForTesting
  void setTemplateForTest(String id) => _setTemplate(id);

  void _setTemplate(String id) {
    content.template = id;
    setState(() => scene = buildBillboardScene(tpl, content));
    _frameBoard();
    _save();
  }

  void _changed() {
    content.useDefault = false;
    setState(() {});
    _save();
  }

  Future<void> _pickImage({required bool logo}) async {
    try {
      final f = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: logo ? 400 : 900, imageQuality: 85);
      if (f == null) return;
      final bytes = await f.readAsBytes();
      final img = await _decode(bytes);
      if (img == null) return;
      if (logo) {
        content.logoBytes = bytes;
        content.logo = img;
      } else {
        content.picBytes = bytes;
        content.pic = img;
      }
      _changed();
    } catch (_) {
      if (mounted) setState(() => note = 'That picture could not be opened.');
    }
  }

  void _templateSheet() {
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Choose a billboard', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            const SizedBox(height: 10),
            ConstrainedBox(
              constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.62),
              child: ListView(shrinkWrap: true, children: [
                for (final t in kBbTemplates)
                  GestureDetector(
                    onTap: () {
                      Navigator.pop(ctx);
                      _setTemplate(t.id);
                    },
                    child: Container(
                      margin: const EdgeInsets.only(bottom: 8),
                      padding: const EdgeInsets.all(12),
                      decoration: BoxDecoration(
                        color: content.template == t.id ? const Color(0xFF1E3A8A) : const Color(0xFF1F2937),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: content.template == t.id ? const Color(0xFFF5C14B) : Colors.white12),
                      ),
                      child: Row(children: [
                        Text(t.emoji, style: const TextStyle(fontSize: 28)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                            Text(t.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                            Text(t.blurb, style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
                          ]),
                        ),
                        if (content.template == t.id) const Icon(Icons.check_circle_rounded, color: Color(0xFFF5C14B)),
                      ]),
                    ),
                  ),
              ]),
            ),
          ]),
        ),
      ),
    );
  }

  void _editSheet() {
    final head = TextEditingController(text: content.headline);
    final sub = TextEditingController(text: content.subtitle);
    final foot = TextEditingController(text: content.footer);
    showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF111827),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setS) {
          Widget field(String label, TextEditingController c, void Function(String) on) => Padding(
                padding: const EdgeInsets.only(bottom: 10),
                child: TextField(
                  controller: c,
                  style: const TextStyle(color: Colors.white),
                  onChanged: (v) {
                    on(v);
                    _changed();
                  },
                  decoration: InputDecoration(
                    labelText: label,
                    labelStyle: const TextStyle(color: Colors.white60),
                    filled: true,
                    fillColor: const Color(0xFF1F2937),
                    border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none),
                  ),
                ),
              );
          Widget imgButton(String label, bool has, VoidCallback pick, VoidCallback clear) => Padding(
                padding: const EdgeInsets.only(bottom: 8),
                child: Row(children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () async {
                        pick();
                        await Future<void>.delayed(const Duration(milliseconds: 400));
                        setS(() {});
                      },
                      icon: Icon(has ? Icons.check_circle_rounded : Icons.add_photo_alternate_rounded, color: has ? const Color(0xFF4ADE80) : Colors.white70),
                      label: Text(label, style: const TextStyle(color: Colors.white)),
                    ),
                  ),
                  if (has) IconButton(onPressed: () { clear(); setS(() {}); }, icon: const Icon(Icons.close_rounded, color: Colors.white54)),
                ]),
              );
          return Padding(
            padding: EdgeInsets.only(left: 16, right: 16, top: 16, bottom: MediaQuery.of(ctx).viewInsets.bottom + 16),
            child: SingleChildScrollView(
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Edit your billboard', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
                const SizedBox(height: 4),
                Text(content.useDefault ? 'Now it shows the NGMY logo, words and ads. Change anything and it becomes yours.' : 'This is your own board.', style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
                const SizedBox(height: 12),
                field('Big words', head, (v) => content.headline = v),
                field('Smaller words', sub, (v) => content.subtitle = v),
                field('Bottom line (web address)', foot, (v) => content.footer = v),
                imgButton(content.logoBytes != null ? 'Your logo is on (change)' : 'Put your own logo (default: NGMY logo)', content.logoBytes != null, () => _pickImage(logo: true), () {
                  content.logoBytes = null;
                  content.logo = null;
                  _changed();
                }),
                imgButton(content.picBytes != null ? 'Your picture is on (change)' : 'Put your own picture', content.picBytes != null, () => _pickImage(logo: false), () {
                  content.picBytes = null;
                  content.pic = null;
                  _changed();
                }),
                const SizedBox(height: 4),
                const Text('Colours', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
                const SizedBox(height: 6),
                Wrap(spacing: 8, runSpacing: 8, children: [
                  for (var i = 0; i < kBbSchemes.length; i++)
                    GestureDetector(
                      onTap: () {
                        content.scheme = i;
                        _changed();
                        setS(() {});
                      },
                      child: Container(
                        width: 74,
                        padding: const EdgeInsets.symmetric(vertical: 8),
                        decoration: BoxDecoration(
                          gradient: LinearGradient(colors: [kBbSchemes[i].a, kBbSchemes[i].b]),
                          borderRadius: BorderRadius.circular(10),
                          border: Border.all(color: content.scheme == i && !content.useDefault ? const Color(0xFFF5C14B) : Colors.white24, width: 2),
                        ),
                        child: Center(child: Text(kBbSchemes[i].name, style: TextStyle(color: kBbSchemes[i].text, fontSize: 11, fontWeight: FontWeight.w800))),
                      ),
                    ),
                ]),
                const SizedBox(height: 14),
                Row(children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () {
                        content.resetToNgmy();
                        head.text = content.headline;
                        sub.text = content.subtitle;
                        foot.text = content.footer;
                        setState(() {});
                        _save();
                        setS(() {});
                      },
                      icon: const Icon(Icons.restart_alt_rounded, color: Color(0xFFF5C14B)),
                      label: const Text('Back to the NGMY default', style: TextStyle(color: Color(0xFFF5C14B))),
                    ),
                  ),
                  const SizedBox(width: 10),
                  FilledButton(onPressed: () => Navigator.pop(ctx), child: const Text('Done')),
                ]),
              ]),
            ),
          );
        },
      ),
    );
  }

  Widget _pill(String label, VoidCallback onTap, {Color color = const Color(0xFF38BDF8), bool on = false}) => GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
          decoration: BoxDecoration(color: on ? color.withValues(alpha: 0.3) : Colors.black.withValues(alpha: 0.6), borderRadius: BorderRadius.circular(20), border: Border.all(color: color)),
          child: Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 13)),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final pad = MediaQuery.of(context).padding;
    return Scaffold(
      backgroundColor: Colors.black,
      body: Stack(children: [
        Positioned.fill(child: Scene3DView(scene: scene, cam: cam, background: const Color(0xFF0E1218), sky: true)),
        if (!flying)
          Positioned(
            top: pad.top + 8,
            left: 8,
            right: 8,
            child: Row(children: [
              GestureDetector(
                onTap: () => Navigator.of(context).maybePop(),
                child: Container(width: 40, height: 40, decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), shape: BoxShape.circle, border: Border.all(color: Colors.white38)), child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18)),
              ),
              const SizedBox(width: 10),
              Expanded(child: Text('Billboard studio · ${tpl.name}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16, shadows: [Shadow(blurRadius: 6)]))),
            ]),
          ),
        if (flying)
          Positioned(
            top: pad.top + 10,
            left: 12,
            right: 12,
            child: Column(children: [
              Text(billboardShotName(shotSecs), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16, shadows: [Shadow(blurRadius: 8)])),
              const SizedBox(height: 6),
              ClipRRect(borderRadius: BorderRadius.circular(4), child: LinearProgressIndicator(value: (shotSecs / kBillboardShotSecs).clamp(0.0, 1.0), minHeight: 5, backgroundColor: Colors.white24, color: const Color(0xFFF5C14B))),
            ]),
          ),
        Positioned(
          left: 10,
          right: 10,
          bottom: pad.bottom + 12,
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            if (note.isNotEmpty && !flying)
              Container(
                margin: const EdgeInsets.only(bottom: 8),
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: const Color(0xFF14532D).withValues(alpha: 0.95), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFF4ADE80))),
                child: Text(note, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w700)),
              ),
            Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
              if (!flying) _pill('🪧 Choose billboard', _templateSheet, color: const Color(0xFFF5C14B)),
              if (!flying) _pill('✏️ Edit', _editSheet, color: const Color(0xFF4ADE80)),
              flying ? _pill('⏹ Stop the drone', _stopShot, color: const Color(0xFFF87171), on: true) : _pill('🎬 30 second drone shot', startShot, on: true),
            ]),
          ]),
        ),
      ]),
    );
  }
}
