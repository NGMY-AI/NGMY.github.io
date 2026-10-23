import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BODY EXPLORER: a human body you can peel back, layer by layer.
// ═════════════════════════════════════════════════════════════════════════════

class BodyPart {
  const BodyPart(this.name, this.system, this.x, this.y, this.fact, {this.note = 12});
  final String name;
  final String system;
  final double x; // across, centre = 0
  final double y; // down, head top = 0, feet = 1
  final String fact;
  final int note;
}

const List<(String, String, IconData)> kBodyLayers = [
  ('skin', 'Skin', Icons.face_retouching_natural_rounded),
  ('muscle', 'Muscles', Icons.fitness_center_rounded),
  ('organ', 'Organs', Icons.favorite_rounded),
  ('bone', 'Skeleton', Icons.accessibility_new_rounded),
];

const Map<String, List<BodyPart>> kBodyParts = {
  'skin': [
    BodyPart('Skin', 'Cover', 0.115, 0.52, 'Your biggest organ. It keeps water in and germs out, and sheds about 30,000 dead cells every minute.', note: 0),
    BodyPart('Eyes', 'Senses', 0.0, 0.058, 'Your eyes turn light into signals for the brain. Each sends the picture upside down and the brain flips it.', note: 4),
    BodyPart('Ears', 'Senses', 0.045, 0.062, 'Ears hear and also keep your balance. The three tiny bones inside are the smallest in your body.', note: 7),
    BodyPart('Hair', 'Cover', 0.0, 0.012, 'You have about 100,000 hairs on your head. Each grows about a centimetre a month.', note: 9),
    BodyPart('Hands', 'Touch', 0.175, 0.51, 'Each hand has 27 bones and thousands of touch sensors. Your fingertips are among the most sensitive spots.', note: 12),
    BodyPart('Feet', 'Balance', 0.055, 0.975, 'Each foot has 26 bones and about 250,000 sweat glands. Together they carry your whole weight.', note: 14),
  ],
  'muscle': [
    BodyPart('Chest muscles', 'Movement', 0.05, 0.2, 'The pectoral muscles push your arms forward, like when you push a door.', note: 0),
    BodyPart('Biceps', 'Movement', 0.14, 0.27, 'The biceps bends your elbow. When a muscle works it gets shorter and fatter.', note: 4),
    BodyPart('Abs', 'Movement', 0.0, 0.33, 'Your tummy muscles hold your body upright and help you twist and bend.', note: 7),
    BodyPart('Quadriceps', 'Movement', 0.065, 0.58, 'The four big muscles at the front of your thigh. They are the strongest in your body for lifting weight.', note: 9),
    BodyPart('Calf', 'Movement', 0.07, 0.8, 'The calf pushes you up on your toes when you walk, run and jump.', note: 12),
    BodyPart('Shoulders', 'Movement', 0.125, 0.185, 'The deltoids lift your arms in every direction. Your shoulder is the most flexible joint you have.', note: 14),
  ],
  'organ': [
    BodyPart('Brain', 'Nerves', 0.0, 0.05, 'Weighs about 1.4 kg and uses a fifth of your energy. It has around 86 billion nerve cells.', note: 0),
    BodyPart('Lungs', 'Breathing', -0.05, 0.215, 'You breathe about 20,000 times a day. Spread flat, your lungs would cover a tennis court.', note: 4),
    BodyPart('Heart', 'Blood', 0.014, 0.238, 'About the size of your fist. It beats around 100,000 times a day and pumps blood round a track 100,000 km long.', note: 7),
    BodyPart('Liver', 'Digestion', -0.04, 0.3, 'Cleans your blood and stores energy. It is the only organ that can grow back after damage.', note: 9),
    BodyPart('Stomach', 'Digestion', 0.045, 0.3, 'Acid in your stomach could dissolve metal, but a thick layer of mucus protects it.', note: 12),
    BodyPart('Kidneys', 'Cleaning', 0.045, 0.335, 'Clean about 180 litres of blood every day and turn the waste into urine.', note: 14),
    BodyPart('Intestines', 'Digestion', 0.0, 0.395, 'Your small intestine is about 6 metres long, folded up in your tummy. Food stays for hours.', note: 16),
  ],
  'bone': [
    BodyPart('Skull', 'Frame', 0.0, 0.05, 'Your skull is made of 22 bones that protect your brain. Only the jaw can move.', note: 0),
    BodyPart('Spine', 'Frame', 0.0, 0.3, 'The spine has 33 bones called vertebrae, stacked like beads, with soft discs between them.', note: 4),
    BodyPart('Ribs', 'Frame', -0.062, 0.22, 'You have 12 pairs of ribs. They make a cage that protects your heart and lungs and moves when you breathe.', note: 7),
    BodyPart('Collarbone', 'Frame', 0.07, 0.16, 'The most often broken bone, and the only long bone that lies sideways.', note: 9),
    BodyPart('Arm bones', 'Frame', 0.148, 0.28, 'The humerus is the upper arm bone. Below the elbow you have two bones, the radius and the ulna.', note: 12),
    BodyPart('Pelvis', 'Frame', 0.0, 0.475, 'The pelvis holds up your body and protects organs in your tummy.', note: 14),
    BodyPart('Thigh bone', 'Frame', 0.072, 0.6, 'The femur is the longest and strongest bone in your body, about a quarter of your height.', note: 16),
    BodyPart('Shin bone', 'Frame', 0.065, 0.82, 'The tibia carries most of your weight below the knee.', note: 19),
  ],
};

class NgmyBodyExplorer extends StatefulWidget {
  const NgmyBodyExplorer({super.key});

  @override
  State<NgmyBodyExplorer> createState() => _NgmyBodyExplorerState();
}

class _NgmyBodyExplorerState extends State<NgmyBodyExplorer> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  String _layer = 'organ';
  BodyPart? _sel;
  int _skin = 1;
  double _bpm = 72;
  bool _beatSound = false;
  bool _quiz = false;
  BodyPart? _target;
  int _score = 0;
  String _fb = '';
  double _t = 0;
  double _lastBeat = 0;
  Size _size = Size.zero;
  final math.Random _rnd = math.Random();

  static const List<Color> _tones = [Color(0xFFF6D3B8), Color(0xFFE2AE86), Color(0xFFBE8A66), Color(0xFF8D5B3E), Color(0xFF5E3C28)];

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    final beat = _t * _bpm / 60;
    if (_beatSound && _layer == 'organ' && beat.floor() != _lastBeat.floor()) {
      NgmyTone.drum('kick', volume: 0.45);
      later(170, () => NgmyTone.drum('kick', volume: 0.3));
    }
    _lastBeat = beat;
  }

  double get _fig => math.min(_size.height - 96, _size.width * 2.2);
  Offset _pt(double x, double y) => Offset(_size.width / 2 + x * _fig, _size.height * 0.01 + y * _fig);

  List<BodyPart> get _parts => kBodyParts[_layer]!;

  void _next() {
    final p = _parts;
    _target = p[_rnd.nextInt(p.length)];
    _fb = '';
  }

  void _tap(Offset pos) {
    BodyPart? best;
    var bd = 38.0;
    for (final p in _parts) {
      for (final sx in (p.x == 0 ? const [1.0] : const [1.0, -1.0])) {
        final d = (_pt(p.x * sx, p.y) - pos).distance;
        if (d < bd) {
          bd = d;
          best = p;
        }
      }
    }
    final b = best;
    if (b == null) return;
    if (_quiz && _target != null) {
      final ok = identical(b, _target);
      setState(() {
        if (ok) _score++;
        _fb = ok ? 'Yes! That is the ${b.name.toLowerCase()}.' : 'That is the ${b.name.toLowerCase()}. Look for the ${_target!.name.toLowerCase()}.';
      });
      NgmyTone.chord('bell', ok ? [0, 4, 7, 12] : [0, 1], ms: 700, volume: 0.5);
      if (ok) later(1100, () => setState(_next));
      return;
    }
    setState(() => _sel = b);
    NgmyTone.playNote('bell', 12 + b.note, ms: 900, volume: 0.5);
    if (b.name == 'Heart') {
      NgmyTone.drum('kick');
      later(260, () => NgmyTone.drum('kick', volume: 0.5));
    }
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    return StudioPage(
      title: 'BODY EXPLORER',
      accent: const Color(0xFFF472B6),
      help: 'Peel the body back layer by layer: skin, muscles, organs and skeleton.\n\nTap a glowing dot to hear that part and read a surprising fact. In the Organs view you can see the lungs breathe and the heart beat, and change the heart rate with the slider.\n\nTurn on Quiz and tap where you think each part is. You can also change the skin colour.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'body'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: Stack(fit: StackFit.expand, children: [
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTapUp: (d) => _tap(d.localPosition),
              child: CustomPaint(size: _size, painter: _HumanPainter(this)),
            ),
            Positioned(
              left: 10,
              right: 10,
              bottom: 8,
              child: Container(
                padding: const EdgeInsets.all(11),
                decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFF472B6).withValues(alpha: 0.5))),
                child: _quiz
                    ? Text(_target == null ? 'Press the quiz button again to start' : 'Find the ${_target!.name.toLowerCase()}   ·   score $_score\n$_fb', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5, height: 1.4))
                    : (sel == null
                        ? Text('Tap a glowing dot on the ${kBodyLayers.firstWhere((l) => l.$1 == _layer).$2.toLowerCase()} layer', style: const TextStyle(color: Colors.white54))
                        : Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                            Text('${sel.name}  ·  ${sel.system}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                            const SizedBox(height: 3),
                            Text(sel.fact, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
                          ])),
              ),
            ),
          ]),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final l in kBodyLayers)
            StudioChip(label: l.$2, icon: l.$3, selected: _layer == l.$1, color: const Color(0xFFF472B6), onTap: () => setState(() {
                  _layer = l.$1;
                  _sel = null;
                  if (_quiz) _next();
                })),
        ]),
        if (_layer == 'organ')
          StudioSlider(label: 'Heart rate', value: _bpm, min: 40, max: 180, display: '${_bpm.round()} beats/min', color: const Color(0xFFF87171), onChanged: (v) => setState(() => _bpm = v))
        else if (_layer == 'skin')
          StudioRow(label: 'SKIN', children: [for (var i = 0; i < _tones.length; i++) StudioSwatch(color: _tones[i], selected: _skin == i, onTap: () => setState(() => _skin = i))]),
        StudioRow(children: [
          StudioChip(label: _quiz ? 'Quiz on' : 'Quiz', icon: Icons.quiz_rounded, selected: _quiz, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                _quiz = !_quiz;
                _score = 0;
                if (_quiz) {
                  _next();
                } else {
                  _target = null;
                }
              })),
          if (_layer == 'organ') StudioChip(label: 'Heartbeat sound', icon: Icons.volume_up_rounded, selected: _beatSound, color: const Color(0xFFF87171), onTap: () => setState(() => _beatSound = !_beatSound)),
        ]),
      ]),
    );
  }
}

class _HumanPainter extends CustomPainter {
  _HumanPainter(this.s);
  final _NgmyBodyExplorerState s;

  // The right half of the outline, from the neck down the arm, round the body and down the leg to the crotch.
  static const List<Offset> _right = [
    Offset(0.016, 0.108), Offset(0.020, 0.138), Offset(0.058, 0.152), Offset(0.108, 0.164), Offset(0.136, 0.182), Offset(0.147, 0.214),
    Offset(0.150, 0.262), Offset(0.157, 0.332), Offset(0.167, 0.402), Offset(0.174, 0.464), Offset(0.184, 0.498), Offset(0.183, 0.532),
    Offset(0.168, 0.542), Offset(0.154, 0.518), Offset(0.146, 0.476), Offset(0.137, 0.402), Offset(0.128, 0.334), Offset(0.121, 0.272),
    Offset(0.110, 0.230), Offset(0.099, 0.254), Offset(0.094, 0.304), Offset(0.083, 0.360), Offset(0.091, 0.418), Offset(0.106, 0.466),
    Offset(0.111, 0.530), Offset(0.104, 0.620), Offset(0.092, 0.700), Offset(0.094, 0.760), Offset(0.082, 0.850), Offset(0.066, 0.930),
    Offset(0.078, 0.968), Offset(0.082, 0.990), Offset(0.030, 0.992), Offset(0.028, 0.965), Offset(0.032, 0.930), Offset(0.040, 0.850),
    Offset(0.036, 0.770), Offset(0.032, 0.700), Offset(0.026, 0.620), Offset(0.018, 0.545), Offset(0.0, 0.495),
  ];

  late final List<Offset> _outlinePts = [
    ..._right,
    for (var i = _right.length - 2; i >= 0; i--) Offset(-_right[i].dx, _right[i].dy),
  ];

  Path _spline(List<Offset> p, double scale, Offset origin) {
    Offset m(Offset o) => origin + o * scale;
    final path = Path()..moveTo(m(p.first).dx, m(p.first).dy);
    for (var i = 0; i < p.length - 1; i++) {
      final p0 = m(p[math.max(0, i - 1)]), p1 = m(p[i]), p2 = m(p[i + 1]), p3 = m(p[math.min(p.length - 1, i + 2)]);
      final c1 = p1 + (p2 - p0) / 6;
      final c2 = p2 - (p3 - p1) / 6;
      path.cubicTo(c1.dx, c1.dy, c2.dx, c2.dy, p2.dx, p2.dy);
    }
    path.close();
    return path;
  }

  Offset P(double x, double y) => s._pt(x, y);
  double get F => s._fig;

  Path _oval(double cx, double cy, double rx, double ry, {double rot = 0}) {
    final c = P(cx, cy);
    final r = Rect.fromCenter(center: Offset.zero, width: rx * 2 * F, height: ry * 2 * F);
    final m = Matrix4.identity()
      ..translateByDouble(c.dx, c.dy, 0, 1)
      ..rotateZ(rot);
    final p = Path()..addOval(r);
    return p.transform(m.storage);
  }

  Path _capsule(Offset a, Offset b, double w) {
    final d = b - a;
    final len = d.distance;
    final ang = math.atan2(d.dy, d.dx);
    final m = Matrix4.identity()
      ..translateByDouble(a.dx, a.dy, 0, 1)
      ..rotateZ(ang);
    final p = Path()..addRRect(RRect.fromRectAndRadius(Rect.fromLTWH(-w / 2, -w / 2, len + w, w), Radius.circular(w / 2)));
    return p.transform(m.storage);
  }

  @override
  void paint(Canvas canvas, Size size) {
    final dark = s._layer != 'skin';
    canvas.drawRect(Offset.zero & size, Paint()..shader = RadialGradient(center: const Alignment(0, -0.2), radius: 1.1, colors: dark ? const [Color(0xFF14182A), Color(0xFF07080F)] : const [Color(0xFF1B2030), Color(0xFF0A0C13)]).createShader(Offset.zero & size));
    final origin = P(0, 0);
    final body = _spline(_outlinePts, F, origin);
    final headC = P(0, 0.062);
    final headRx = 0.043 * F, headRy = 0.057 * F;
    final head = Path()..addOval(Rect.fromCenter(center: headC, width: headRx * 2, height: headRy * 2));
    final whole = Path.combine(PathOperation.union, body, head);
    final bounds = whole.getBounds();

    // Ground shadow.
    canvas.drawOval(Rect.fromCenter(center: P(0, 0.995), width: F * 0.3, height: F * 0.02), Paint()..color = Colors.black.withValues(alpha: 0.5)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));

    if (s._layer == 'skin') {
      _skin(canvas, whole, bounds, head);
    } else {
      // X-ray style glass body.
      canvas.drawPath(whole, Paint()..shader = const LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Color(0x33F472B6), Color(0x14F472B6), Color(0x33F472B6)]).createShader(bounds));
      canvas.save();
      canvas.clipPath(whole);
      switch (s._layer) {
        case 'muscle':
          _muscles(canvas);
        case 'organ':
          _organs(canvas);
        default:
          _bones(canvas);
      }
      canvas.restore();
      canvas.drawPath(whole, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFF472B6).withValues(alpha: 0.7));
      canvas.drawPath(whole, Paint()..style = PaintingStyle.stroke..strokeWidth = 7..color = const Color(0xFFF472B6).withValues(alpha: 0.12)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    }
    _dots(canvas);
  }

  void _skin(Canvas canvas, Path whole, Rect bounds, Path head) {
    final base = _NgmyBodyExplorerState._tones[s._skin];
    final shade = Color.lerp(base, Colors.black, 0.35)!;
    final light = Color.lerp(base, Colors.white, 0.28)!;
    canvas.drawPath(whole, Paint()..shader = LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [shade, base, light, base, shade], stops: const [0, 0.22, 0.45, 0.75, 1]).createShader(bounds));
    canvas.save();
    canvas.clipPath(whole);
    // Soft shadows under the chin, between the arms and body, and between the legs.
    final soft = Paint()..color = Colors.black.withValues(alpha: 0.22)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5);
    canvas.drawOval(Rect.fromCenter(center: P(0, 0.126), width: F * 0.07, height: F * 0.014), soft);
    for (final sx in const [1.0, -1.0]) {
      canvas.drawLine(P(0.111 * sx, 0.24), P(0.135 * sx, 0.5), Paint()..color = Colors.black.withValues(alpha: 0.25)..strokeWidth = 5..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
    }
    canvas.drawLine(P(0, 0.5), P(0, 0.9), Paint()..color = Colors.black.withValues(alpha: 0.25)..strokeWidth = 4..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
    // Collarbone and belly button hints, knees.
    final hint = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = shade.withValues(alpha: 0.5)..strokeCap = StrokeCap.round;
    for (final sx in const [1.0, -1.0]) {
      final c = Path()..moveTo(P(0.01 * sx, 0.152).dx, P(0.01 * sx, 0.152).dy)..quadraticBezierTo(P(0.05 * sx, 0.150).dx, P(0.05 * sx, 0.150).dy, P(0.1 * sx, 0.166).dx, P(0.1 * sx, 0.166).dy);
      canvas.drawPath(c, hint);
      canvas.drawOval(Rect.fromCenter(center: P(0.05 * sx, 0.215), width: F * 0.06, height: F * 0.03), Paint()..color = Colors.black.withValues(alpha: 0.07));
      canvas.drawCircle(P(0.055 * sx, 0.22), 2.2, Paint()..color = shade.withValues(alpha: 0.7));
      canvas.drawArc(Rect.fromCenter(center: P(0.065 * sx, 0.705), width: F * 0.04, height: F * 0.02), 0, math.pi, false, hint);
    }
    canvas.drawCircle(P(0, 0.37), 2.4, Paint()..color = shade.withValues(alpha: 0.8));
    // Underwear shorts to keep it friendly.
    final shorts = Path()
      ..moveTo(P(-0.092, 0.42).dx, P(-0.092, 0.42).dy)
      ..quadraticBezierTo(P(0, 0.45).dx, P(0, 0.45).dy, P(0.092, 0.42).dx, P(0.092, 0.42).dy)
      ..lineTo(P(0.108, 0.56).dx, P(0.108, 0.56).dy)
      ..lineTo(P(0.0, 0.52).dx, P(0.0, 0.52).dy)
      ..lineTo(P(-0.108, 0.56).dx, P(-0.108, 0.56).dy)
      ..close();
    canvas.drawPath(shorts, Paint()..shader = const LinearGradient(colors: [Color(0xFF334155), Color(0xFF1E293B)]).createShader(Rect.fromPoints(P(-0.11, 0.42), P(0.11, 0.56))));
    canvas.restore();
    canvas.drawPath(whole, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = shade.withValues(alpha: 0.8));
    // Face: hair, eyes, brows, nose, mouth, ears.
    final hc = P(0, 0.062);
    final hair = Path()
      ..moveTo(hc.dx - 0.044 * F, hc.dy - 0.004 * F)
      ..quadraticBezierTo(hc.dx - 0.05 * F, hc.dy - 0.075 * F, hc.dx, hc.dy - 0.062 * F)
      ..quadraticBezierTo(hc.dx + 0.05 * F, hc.dy - 0.075 * F, hc.dx + 0.044 * F, hc.dy - 0.004 * F)
      ..quadraticBezierTo(hc.dx + 0.03 * F, hc.dy - 0.03 * F, hc.dx, hc.dy - 0.034 * F)
      ..quadraticBezierTo(hc.dx - 0.03 * F, hc.dy - 0.03 * F, hc.dx - 0.044 * F, hc.dy - 0.004 * F)
      ..close();
    canvas.drawPath(hair, Paint()..color = s._skin >= 3 ? const Color(0xFF14110F) : const Color(0xFF4A2E1B));
    for (final sx in const [1.0, -1.0]) {
      canvas.drawOval(Rect.fromCenter(center: Offset(hc.dx + sx * 0.044 * F, hc.dy + 0.004 * F), width: 0.014 * F, height: 0.026 * F), Paint()..color = base);
      final eye = Offset(hc.dx + sx * 0.0175 * F, hc.dy - 0.001 * F);
      canvas.drawOval(Rect.fromCenter(center: eye, width: 0.02 * F, height: 0.011 * F), Paint()..color = Colors.white);
      canvas.drawCircle(eye, 0.0042 * F, Paint()..color = const Color(0xFF3B2A1E));
      canvas.drawCircle(eye, 0.0018 * F, Paint()..color = Colors.black);
      canvas.drawLine(Offset(eye.dx - 0.011 * F, eye.dy - 0.011 * F), Offset(eye.dx + 0.011 * F, eye.dy - 0.013 * F), Paint()..color = const Color(0xFF2B1B10)..strokeWidth = 1.6..strokeCap = StrokeCap.round);
    }
    final nose = Path()..moveTo(hc.dx, hc.dy + 0.004 * F)..quadraticBezierTo(hc.dx + 0.007 * F, hc.dy + 0.02 * F, hc.dx + 0.003 * F, hc.dy + 0.024 * F)..quadraticBezierTo(hc.dx, hc.dy + 0.027 * F, hc.dx - 0.006 * F, hc.dy + 0.023 * F);
    canvas.drawPath(nose, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.3..color = shade.withValues(alpha: 0.8)..strokeCap = StrokeCap.round);
    final mouth = Path()..moveTo(hc.dx - 0.014 * F, hc.dy + 0.04 * F)..quadraticBezierTo(hc.dx, hc.dy + 0.05 * F, hc.dx + 0.014 * F, hc.dy + 0.04 * F);
    canvas.drawPath(mouth, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.8..color = const Color(0xFF9B4A4A)..strokeCap = StrokeCap.round);
    // Fingers and toes hints.
    for (final sx in const [1.0, -1.0]) {
      for (var i = 0; i < 4; i++) {
        canvas.drawLine(P(sx * (0.172 + i * 0.004), 0.525), P(sx * (0.172 + i * 0.004), 0.538), Paint()..color = shade.withValues(alpha: 0.6)..strokeWidth = 1);
      }
      for (var i = 0; i < 4; i++) {
        canvas.drawCircle(P(sx * (0.045 + i * 0.011), 0.985), 1.4, Paint()..color = shade.withValues(alpha: 0.6));
      }
    }
  }

  void _muscles(Canvas canvas) {
    final fill = Paint()..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFE5645E), Color(0xFF9B2C2C)]).createShader(Rect.fromLTWH(0, 0, s._size.width, s._size.height));
    final fiber = Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = const Color(0xFF5A1414).withValues(alpha: 0.6);
    void spindle(double x1, double y1, double x2, double y2, double w) {
      final a = P(x1, y1), b = P(x2, y2);
      final d = b - a;
      final len = d.distance;
      final nrm = Offset(-d.dy, d.dx) / len;
      final path = Path()
        ..moveTo(a.dx, a.dy)
        ..quadraticBezierTo(a.dx + d.dx / 2 + nrm.dx * w * F, a.dy + d.dy / 2 + nrm.dy * w * F, b.dx, b.dy)
        ..quadraticBezierTo(a.dx + d.dx / 2 - nrm.dx * w * F, a.dy + d.dy / 2 - nrm.dy * w * F, a.dx, a.dy);
      canvas.drawPath(path, fill);
      canvas.drawPath(path, fiber);
      for (var i = -2; i <= 2; i++) {
        final off = nrm * (i * w * F * 0.25);
        canvas.drawLine(a + off * 0.4 + d * 0.12, b + off * 0.4 - d * 0.12, fiber);
      }
    }

    for (final sx in const [1.0, -1.0]) {
      canvas.drawPath(_oval(sx * 0.125, 0.19, 0.026, 0.026), fill);
      canvas.drawPath(_oval(sx * 0.125, 0.19, 0.026, 0.026), fiber);
      canvas.drawPath(_oval(sx * 0.05, 0.2, 0.05, 0.03, rot: sx * 0.15), fill);
      canvas.drawPath(_oval(sx * 0.05, 0.2, 0.05, 0.03, rot: sx * 0.15), fiber);
      spindle(sx * 0.14, 0.215, sx * 0.152, 0.325, 0.016);
      spindle(sx * 0.155, 0.345, sx * 0.172, 0.46, 0.017);
      spindle(sx * 0.075, 0.5, sx * 0.082, 0.69, 0.034);
      spindle(sx * 0.04, 0.52, sx * 0.045, 0.68, 0.022);
      spindle(sx * 0.082, 0.715, sx * 0.07, 0.9, 0.022);
      // Obliques.
      spindle(sx * 0.07, 0.27, sx * 0.075, 0.42, 0.016);
    }
    // Abs: 3 rows x 2.
    for (var r = 0; r < 3; r++) {
      for (final dx in const [0.0125, -0.0125]) {
        final rc = Rect.fromCenter(center: P(dx, 0.29 + r * 0.04), width: F * 0.021, height: F * 0.032);
        canvas.drawRRect(RRect.fromRectAndRadius(rc, Radius.circular(F * 0.006)), fill);
        canvas.drawRRect(RRect.fromRectAndRadius(rc, Radius.circular(F * 0.006)), fiber);
      }
    }
    // Neck.
    canvas.drawPath(_capsule(P(-0.012, 0.118), P(-0.018, 0.15), F * 0.014), fill);
    canvas.drawPath(_capsule(P(0.012, 0.118), P(0.018, 0.15), F * 0.014), fill);
    // Head: face muscles as a pale shape.
    canvas.drawOval(Rect.fromCenter(center: P(0, 0.062), width: F * 0.07, height: F * 0.09), Paint()..color = const Color(0xFFD7A18A));
  }

  void _organs(Canvas canvas) {
    final beat = (s._t * s._bpm / 60) % 1.0;
    final pulse = 1 + 0.16 * math.exp(-beat * 7) + 0.09 * math.exp(-math.pow((beat - 0.28) * 9, 2).toDouble());
    final breath = 1 + 0.045 * math.sin(s._t * 1.3);
    Paint grad(Color a, Color b, Rect r) => Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.4), colors: [a, b]).createShader(r);
    // Brain with folds.
    final bc = P(0, 0.052);
    final br = Rect.fromCenter(center: bc, width: F * 0.066, height: F * 0.07);
    canvas.drawOval(br, grad(const Color(0xFFF5B7C0), const Color(0xFFC77A8A), br));
    final fold = Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = const Color(0xFF9B4E60);
    for (var i = -3; i <= 3; i++) {
      final yy = bc.dy + i * F * 0.009;
      final half = math.sqrt(math.max(0, 1 - math.pow(i / 4.0, 2).toDouble())) * F * 0.03;
      final p = Path()..moveTo(bc.dx - half, yy);
      for (var k = 0; k < 6; k++) {
        p.quadraticBezierTo(bc.dx - half + (k + 0.5) * half / 3, yy + (k.isEven ? -3 : 3), bc.dx - half + (k + 1) * half / 3, yy);
      }
      canvas.drawPath(p, fold);
    }
    canvas.drawLine(Offset(bc.dx, bc.dy - F * 0.034), Offset(bc.dx, bc.dy + F * 0.034), fold);
    // Eyes in the head and spinal cord.
    for (final sx in const [1.0, -1.0]) {
      canvas.drawCircle(P(sx * 0.016, 0.068), F * 0.007, Paint()..color = Colors.white);
      canvas.drawCircle(P(sx * 0.016, 0.068), F * 0.003, Paint()..color = const Color(0xFF2B6CB0));
    }
    canvas.drawLine(P(0, 0.095), P(0, 0.46), Paint()..color = const Color(0xFFFDE68A).withValues(alpha: 0.7)..strokeWidth = 2.5);
    // Trachea and bronchi.
    final tr = Paint()..style = PaintingStyle.stroke..strokeWidth = 5..strokeCap = StrokeCap.round..color = const Color(0xFFBAE6FD);
    canvas.drawLine(P(0, 0.12), P(0, 0.18), tr);
    canvas.drawLine(P(0, 0.18), P(-0.028, 0.215), tr..strokeWidth = 3.5);
    canvas.drawLine(P(0, 0.18), P(0.028, 0.215), tr);
    // Kidneys (behind).
    for (final sx in const [1.0, -1.0]) {
      canvas.drawPath(_oval(sx * 0.044, 0.335, 0.012, 0.022, rot: sx * -0.3), Paint()..color = const Color(0xFF8B2D3B));
    }
    // Lungs, breathing in and out.
    for (final sx in const [-1.0, 1.0]) {
      final c = P(sx * 0.05, 0.218);
      canvas.save();
      canvas.translate(c.dx, c.dy);
      canvas.scale(breath, breath * 1.02);
      final w = F * (sx < 0 ? 0.052 : 0.046);
      final lung = Path()
        ..moveTo(-sx * w * 0.35, -F * 0.05)
        ..cubicTo(sx * w * 0.7, -F * 0.06, sx * w * 1.0, -F * 0.01, sx * w * 0.9, F * 0.045)
        ..cubicTo(sx * w * 0.6, F * 0.058, -sx * w * 0.2, F * 0.05, -sx * w * 0.38, F * 0.02)
        ..cubicTo(-sx * w * 0.5, -F * 0.01, -sx * w * 0.5, -F * 0.035, -sx * w * 0.35, -F * 0.05)
        ..close();
      final rect = Rect.fromCenter(center: Offset.zero, width: w * 2, height: F * 0.11);
      canvas.drawPath(lung, grad(const Color(0xFFFBCFE8), const Color(0xFFE08AA6), rect));
      canvas.drawPath(lung, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = const Color(0xFFB4536F));
      for (var i = 0; i < 4; i++) {
        canvas.drawLine(Offset(-sx * w * 0.25, -F * 0.03 + i * F * 0.02), Offset(sx * w * 0.7, -F * 0.035 + i * F * 0.024), Paint()..color = const Color(0xFFB4536F).withValues(alpha: 0.5)..strokeWidth = 1);
      }
      canvas.restore();
    }
    // Liver and stomach.
    final liver = Path()
      ..moveTo(P(-0.07, 0.285).dx, P(-0.07, 0.285).dy)
      ..cubicTo(P(-0.04, 0.27).dx, P(-0.04, 0.27).dy, P(0.0, 0.275).dx, P(0.0, 0.275).dy, P(0.012, 0.29).dx, P(0.012, 0.29).dy)
      ..cubicTo(P(0.005, 0.32).dx, P(0.005, 0.32).dy, P(-0.04, 0.335).dx, P(-0.04, 0.335).dy, P(-0.07, 0.31).dx, P(-0.07, 0.31).dy)
      ..close();
    canvas.drawPath(liver, grad(const Color(0xFFB45353), const Color(0xFF7F2F2F), liver.getBounds()));
    final stomach = Path()
      ..moveTo(P(0.02, 0.272).dx, P(0.02, 0.272).dy)
      ..cubicTo(P(0.06, 0.265).dx, P(0.06, 0.265).dy, P(0.08, 0.3).dx, P(0.08, 0.3).dy, P(0.055, 0.325).dx, P(0.055, 0.325).dy)
      ..cubicTo(P(0.035, 0.335).dx, P(0.035, 0.335).dy, P(0.02, 0.315).dx, P(0.02, 0.315).dy, P(0.03, 0.3).dx, P(0.03, 0.3).dy)
      ..cubicTo(P(0.022, 0.29).dx, P(0.022, 0.29).dy, P(0.014, 0.28).dx, P(0.014, 0.28).dy, P(0.02, 0.272).dx, P(0.02, 0.272).dy)
      ..close();
    canvas.drawPath(stomach, grad(const Color(0xFFFFB38A), const Color(0xFFD9774D), stomach.getBounds()));
    canvas.drawPath(stomach, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = const Color(0xFFA84E2A));
    // Intestines: a coiled tube.
    final gut = Path()..moveTo(P(-0.055, 0.36).dx, P(-0.055, 0.36).dy);
    for (var row = 0; row < 5; row++) {
      final y = 0.362 + row * 0.0135;
      final left = row.isEven;
      gut.cubicTo(P(left ? 0.06 : -0.06, y).dx, P(left ? 0.06 : -0.06, y).dy, P(left ? 0.075 : -0.075, y + 0.007).dx, P(left ? 0.075 : -0.075, y + 0.007).dy, P(left ? 0.055 : -0.055, y + 0.0135).dx, P(left ? 0.055 : -0.055, y + 0.0135).dy);
    }
    canvas.drawPath(gut, Paint()..style = PaintingStyle.stroke..strokeWidth = F * 0.014..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..color = const Color(0xFFF2A9A0));
    canvas.drawPath(gut, Paint()..style = PaintingStyle.stroke..strokeWidth = F * 0.005..strokeCap = StrokeCap.round..color = const Color(0xFFFFD2CB));
    // Heart, beating.
    final hc = P(0.016, 0.238);
    canvas.save();
    canvas.translate(hc.dx, hc.dy);
    canvas.scale(pulse, pulse);
    final u = F * 0.03;
    final heart = Path()
      ..moveTo(0, u * 1.0)
      ..cubicTo(-u * 1.5, u * 0.1, -u * 1.0, -u * 1.0, 0, -u * 0.4)
      ..cubicTo(u * 1.0, -u * 1.0, u * 1.5, u * 0.1, 0, u * 1.0)
      ..close();
    canvas.drawPath(heart.shift(Offset.zero), Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
    canvas.drawPath(heart, grad(const Color(0xFFFF6B6B), const Color(0xFFB91C1C), Rect.fromCenter(center: Offset.zero, width: u * 3, height: u * 2.5)));
    canvas.drawPath(heart, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = const Color(0xFF7F1D1D));
    canvas.drawPath(Path()..moveTo(-u * 0.2, -u * 0.5)..cubicTo(-u * 0.3, -u * 0.9, u * 0.3, -u * 1.0, u * 0.2, -u * 0.5), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFFB91C1C));
    canvas.restore();
  }

  void _bones(Canvas canvas) {
    final bone = Paint()..shader = const LinearGradient(begin: Alignment.centerLeft, end: Alignment.centerRight, colors: [Color(0xFFD6CDB8), Color(0xFFFFFBEA), Color(0xFFD6CDB8)]).createShader(Rect.fromLTWH(0, 0, s._size.width, s._size.height));
    final edge = Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = const Color(0xFF8B8269);
    void draw(Path p) {
      canvas.drawPath(p, bone);
      canvas.drawPath(p, edge);
    }

    // Skull and jaw.
    draw(_oval(0, 0.054, 0.037, 0.045));
    draw(Path()..addRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: P(0, 0.1), width: F * 0.044, height: F * 0.02), Radius.circular(F * 0.008))));
    for (final sx in const [1.0, -1.0]) {
      canvas.drawCircle(P(sx * 0.0155, 0.058), F * 0.0085, Paint()..color = const Color(0xFF2B2B33));
    }
    canvas.drawPath(Path()..moveTo(P(0, 0.07).dx, P(0, 0.07).dy)..lineTo(P(-0.004, 0.081).dx, P(-0.004, 0.081).dy)..lineTo(P(0.004, 0.081).dx, P(0.004, 0.081).dy)..close(), Paint()..color = const Color(0xFF2B2B33));
    for (var i = -3; i <= 3; i++) {
      canvas.drawLine(P(i * 0.0055, 0.096), P(i * 0.0055, 0.104), Paint()..color = const Color(0xFF8B8269)..strokeWidth = 1);
    }
    // Spine.
    for (var i = 0; i < 24; i++) {
      final y = 0.122 + i * 0.0145;
      final w = 0.014 + (i / 24) * 0.012;
      final curve = 0.004 * math.sin(i / 24 * math.pi * 2);
      draw(Path()..addRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: P(curve, y), width: F * w, height: F * 0.011), Radius.circular(F * 0.004))));
    }
    // Collarbones and shoulder blades.
    for (final sx in const [1.0, -1.0]) {
      draw(_capsule(P(sx * 0.008, 0.152), P(sx * 0.108, 0.165), F * 0.008));
      // Ribs.
      for (var i = 0; i < 10; i++) {
        final y = 0.172 + i * 0.0165;
        final reach = i < 7 ? 0.07 - i * 0.0015 : 0.06 - (i - 6) * 0.012;
        final rib = Path()
          ..moveTo(P(sx * 0.007, y).dx, P(sx * 0.007, y).dy)
          ..cubicTo(P(sx * (reach * 0.5), y - 0.012).dx, P(sx * (reach * 0.5), y - 0.012).dy, P(sx * reach, y - 0.003).dx, P(sx * reach, y - 0.003).dy, P(sx * (reach * 0.9), y + 0.03).dx, P(sx * (reach * 0.9), y + 0.03).dy);
        canvas.drawPath(rib, Paint()..style = PaintingStyle.stroke..strokeWidth = F * 0.007..strokeCap = StrokeCap.round..color = const Color(0xFFE9E1CA));
        canvas.drawPath(rib, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = const Color(0xFF8B8269));
      }
      // Arm bones.
      draw(_capsule(P(sx * 0.126, 0.188), P(sx * 0.152, 0.334), F * 0.013));
      draw(_capsule(P(sx * 0.152, 0.34), P(sx * 0.172, 0.465), F * 0.008));
      draw(_capsule(P(sx * 0.158, 0.34), P(sx * 0.178, 0.465), F * 0.007));
      for (var f = 0; f < 4; f++) {
        draw(_capsule(P(sx * (0.172 + f * 0.003), 0.478), P(sx * (0.176 + f * 0.0045), 0.528), F * 0.004));
      }
      // Pelvis wings, leg bones and feet.
      draw(_oval(sx * 0.052, 0.468, 0.05, 0.028, rot: sx * 0.35));
      draw(_capsule(P(sx * 0.058, 0.5), P(sx * 0.076, 0.7), F * 0.016));
      canvas.drawCircle(P(sx * 0.062, 0.495), F * 0.014, bone);
      draw(_oval(sx * 0.076, 0.708, 0.011, 0.009));
      draw(_capsule(P(sx * 0.074, 0.72), P(sx * 0.062, 0.93), F * 0.013));
      draw(_capsule(P(sx * 0.082, 0.72), P(sx * 0.072, 0.92), F * 0.006));
      draw(_oval(sx * 0.058, 0.975, 0.03, 0.011));
    }
    draw(Path()..addRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: P(0, 0.265), width: F * 0.012, height: F * 0.1), Radius.circular(F * 0.005))));
    draw(_oval(0, 0.495, 0.02, 0.018));
  }

  void _dots(Canvas canvas) {
    final pulse = 0.5 + 0.5 * math.sin(s._t * 3);
    for (final p in s._parts) {
      for (final sx in (p.x == 0 ? const [1.0] : const [1.0, -1.0])) {
        if (p.x != 0 && sx < 0 && (p.name == 'Heart' || p.name == 'Stomach' || p.name == 'Liver' || p.name == 'Kidneys')) continue;
        final o = P(p.x * sx, p.y);
        final isTarget = s._quiz && identical(p, s._target);
        final picked = identical(p, s._sel);
        canvas.drawCircle(o, 11 + pulse * 3, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.16 + pulse * 0.1));
        canvas.drawCircle(o, 5.5, Paint()..color = picked || isTarget ? Colors.white : const Color(0xFFFBBF24));
        canvas.drawCircle(o, 5.5, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.black.withValues(alpha: 0.5));
        if (!s._quiz && sx == 1.0) {
          final t = TextPainter(text: TextSpan(text: p.name, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800, shadows: [Shadow(color: Colors.black, blurRadius: 4), Shadow(color: Colors.black, blurRadius: 2)])), textDirection: TextDirection.ltr)..layout();
          final right = o.dx >= s._size.width / 2 + 2;
          final x = right ? o.dx + 11 : o.dx - 11 - t.width;
          t.paint(canvas, Offset(x.clamp(2.0, s._size.width - t.width - 2), o.dy - 6));
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant _HumanPainter old) => true;
}
