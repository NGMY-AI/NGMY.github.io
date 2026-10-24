import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import 'ngmy_studio_kit.dart';

Widget _note(String text, Color c, {Widget? action}) => Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
      decoration: BoxDecoration(color: c.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.withValues(alpha: 0.4))),
      child: Row(children: [
        Expanded(child: Text(text, style: const TextStyle(color: Colors.white, fontSize: 13, height: 1.4, fontWeight: FontWeight.w600))),
        if (action != null) ...[const SizedBox(width: 8), action],
      ]),
    );

void _text(Canvas canvas, String s, Offset at, {Color color = Colors.white, double size = 13, bool center = true, FontWeight weight = FontWeight.w800}) {
  final tp = TextPainter(text: TextSpan(text: s, style: TextStyle(color: color, fontSize: size, fontWeight: weight)), textDirection: TextDirection.ltr)..layout();
  tp.paint(canvas, center ? at - Offset(tp.width / 2, tp.height / 2) : at);
}

// ═════════════════════════════════════════════════════════════════════════════
// BALANCE LAB: levers and torque. Weight times distance decides which side falls.
// ═════════════════════════════════════════════════════════════════════════════

class BalanceLevel {
  const BalanceLevel(this.left);

  /// (distance 1..5 from the middle, kilograms) on the left arm.
  final List<(int, int)> left;
  int get torque => left.fold(0, (s, w) => s + w.$1 * w.$2);
}

/// Twelve puzzles, each one solvable with the right arm's five slots holding 0 to 5 kg each.
List<BalanceLevel> balanceLevels() {
  final r = math.Random(42);
  final out = <BalanceLevel>[];
  for (var i = 0; i < 12; i++) {
    final n = 1 + i ~/ 4;
    final used = <int>{};
    final list = <(int, int)>[];
    while (list.length < n) {
      final d = 1 + r.nextInt(5);
      if (used.add(d)) list.add((d, 1 + r.nextInt(2 + i ~/ 3)));
    }
    list.sort((a, b) => b.$1 - a.$1);
    out.add(BalanceLevel(list));
  }
  return out;
}

class NgmyBalanceStudio extends StatefulWidget {
  const NgmyBalanceStudio({super.key});

  @override
  State<NgmyBalanceStudio> createState() => _NgmyBalanceStudioState();
}

class _NgmyBalanceStudioState extends State<NgmyBalanceStudio> with SingleTickerProviderStateMixin {
  final List<BalanceLevel> _levels = balanceLevels();
  int _level = 0;
  final List<int> _right = List.filled(5, 0);
  final Set<int> _done = {};
  double _angle = 0;
  late final Ticker _tick;
  Duration _last = Duration.zero;

  int get _rt => [for (var i = 0; i < 5; i++) _right[i] * (i + 1)].fold(0, (a, b) => a + b);
  int get _lt => _levels[_level].torque;
  bool get _balanced => _rt == _lt;

  @override
  void initState() {
    super.initState();
    _tick = createTicker((d) {
      final dt = math.min((d - _last).inMicroseconds / 1e6, 0.05);
      _last = d;
      final target = ((_rt - _lt) / math.max(_lt, 8)).clamp(-1.0, 1.0) * 0.32;
      setState(() => _angle += (target - _angle) * math.min(1, dt * 4));
    })..start();
    NgmyProgress.load('balance_lab').then((m) {
      if (mounted) setState(() => _done.addAll([for (final v in (m['done'] as List? ?? const [])) (v as num).toInt()]));
    });
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  void _tapSlot(int i) {
    setState(() => _right[i] = (_right[i] + 1) % 6);
    NgmyTone.sfx('click', _right[i], ms: 60, volume: 0.4);
    if (_balanced && _done.add(_level)) {
      NgmyTone.sfx('zap', 10, ms: 260, volume: 0.5);
      NgmyProgress.save('balance_lab', {'done': _done.toList()});
    }
  }

  @override
  Widget build(BuildContext context) {
    final lv = _levels[_level];
    final leftSum = lv.left.map((w) => '${w.$2} kg × ${w.$1}').join(' + ');
    final rightSum = [for (var i = 0; i < 5; i++) if (_right[i] > 0) '${_right[i]} kg × ${i + 1}'].join(' + ');
    final msg = _balanced
        ? '⚖️ Balanced! $_lt = $_rt. The torques are equal, so the seesaw stays level.'
        : (_rt > _lt ? 'The right side is too strong ($_rt vs $_lt). Remove some weight or slide it nearer the middle.' : 'The left side wins ($_lt vs $_rt). Add weight to the right, or place it further from the middle.');
    return StudioPage(
      title: 'BALANCE LAB',
      accent: const Color(0xFFFBBF24),
      help: 'A lever turns when one side has more TORQUE than the other. Torque = weight × distance from the middle (the pivot). That is why a small child far out can balance a heavy adult sitting close in.\n\nThe left arm already has weights on it. Tap a spot on the right arm to add weight there (each tap adds 1 kg, up to 5 kg, then it clears). Make the right torque equal the left torque to balance the seesaw.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(10, 6, 10, 4), child: _note(msg, _balanced ? const Color(0xFF4ADE80) : const Color(0xFFFBBF24), action: _balanced && _level < _levels.length - 1 ? StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _level++;
                _right.fillRange(0, 5, 0);
              })) : null)),
        Expanded(
          child: LayoutBuilder(builder: (context, c) => GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTapUp: (d) {
                  final w = c.maxWidth, cx = w / 2, unit = (w - 40) / 12;
                  final slot = ((d.localPosition.dx - cx) / unit).round();
                  if (slot >= 1 && slot <= 5) _tapSlot(slot - 1);
                },
                child: CustomPaint(size: Size.infinite, painter: _BalancePainter(_angle, lv.left, _right, _balanced)),
              )),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 0, 14, 6),
          child: Row(children: [
            Expanded(child: Text('Left torque\n${leftSum.isEmpty ? '0' : leftSum} = $_lt', style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.4, fontWeight: FontWeight.w700))),
            Expanded(child: Text('Right torque\n${rightSum.isEmpty ? '0' : rightSum} = $_rt', textAlign: TextAlign.right, style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.4, fontWeight: FontWeight.w700))),
          ]),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'LEVEL', children: [for (var i = 0; i < _levels.length; i++) StudioChip(label: '${_done.contains(i) ? '✓ ' : ''}${i + 1}', selected: _level == i, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                  _level = i;
                  _right.fillRange(0, 5, 0);
                }))]),
        StudioRow(children: [StudioChip(label: 'Clear right side', icon: Icons.refresh_rounded, selected: false, color: const Color(0xFFF87171), onTap: () => setState(() => _right.fillRange(0, 5, 0)))]),
      ]),
    );
  }
}

class _BalancePainter extends CustomPainter {
  _BalancePainter(this.angle, this.left, this.right, this.ok);
  final double angle;
  final List<(int, int)> left;
  final List<int> right;
  final bool ok;

  @override
  void paint(Canvas canvas, Size size) {
    final cx = size.width / 2, unit = (size.width - 40) / 12;
    final py = size.height * 0.62;
    // Pivot.
    canvas.drawPath(Path()..moveTo(cx, py)..lineTo(cx - 30, py + 70)..lineTo(cx + 30, py + 70)..close(), Paint()..color = const Color(0xFF64748B));
    canvas.drawRect(Rect.fromLTWH(cx - 120, py + 70, 240, 8), Paint()..color = const Color(0xFF334155));
    canvas.save();
    canvas.translate(cx, py);
    canvas.rotate(angle);
    final half = unit * 5.8;
    final plank = RRect.fromRectAndRadius(Rect.fromLTRB(-half, -9, half, 9), const Radius.circular(6));
    canvas.drawRRect(plank, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFD6A25E), Color(0xFF8B5A2B)]).createShader(plank.outerRect));
    for (var i = -5; i <= 5; i++) {
      if (i == 0) continue;
      canvas.drawLine(Offset(i * unit, -9), Offset(i * unit, 9), Paint()..color = Colors.black38..strokeWidth = 1.5);
      _text(canvas, '${i.abs()}', Offset(i * unit, 22), color: Colors.white38, size: 10);
    }
    void stack(double x, int kg, Color c) {
      for (var k = 0; k < kg; k++) {
        final r = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(x, -9 - 12 - k * 22.0), width: unit * 0.78, height: 20), const Radius.circular(5));
        canvas.drawRRect(r, Paint()..color = c);
        canvas.drawRRect(r, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.2..color = Colors.black45);
        _text(canvas, '1', Offset(x, -9 - 12 - k * 22.0), color: Colors.black87, size: 11);
      }
    }

    for (final w in left) {
      stack(-w.$1 * unit, w.$2, const Color(0xFF38BDF8));
    }
    for (var i = 0; i < 5; i++) {
      stack((i + 1) * unit, right[i], const Color(0xFFF472B6));
      if (right[i] == 0) {
        final r = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset((i + 1) * unit, -22), width: unit * 0.7, height: 22), const Radius.circular(6));
        canvas.drawRRect(r, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white24);
        _text(canvas, '+', Offset((i + 1) * unit, -22), color: Colors.white38, size: 14);
      }
    }
    canvas.restore();
    canvas.drawCircle(Offset(cx, py), 7, Paint()..color = ok ? const Color(0xFF4ADE80) : const Color(0xFFE2E8F0));
  }

  @override
  bool shouldRepaint(covariant _BalancePainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// GEAR LAB: change the teeth and see speed and turning force change.
// ═════════════════════════════════════════════════════════════════════════════

/// How many times faster the last gear turns than the first. A positive number.
double gearRatio(int t1, int t2, int t3, int t4) => (t1 / t2) * (t3 / t4);

const List<(String, double)> kGearChallenges = [
  ('Make the output turn HALF as fast as the input.', 0.5),
  ('Make the output turn TWICE as fast.', 2),
  ('Make the output turn 5 times SLOWER (like a clock reduction).', 0.2),
  ('Make the output turn 4 times faster.', 4),
  ('Make the output turn at exactly 1/3 of the speed.', 1 / 3),
  ('Make the output 10 times slower: a tiny speed, huge force!', 0.1),
  ('Make the output turn 3 times faster.', 3),
  ('Make the output spin at the same speed as the input, using four different gears.', 1),
];

class NgmyGearStudio extends StatefulWidget {
  const NgmyGearStudio({super.key});

  @override
  State<NgmyGearStudio> createState() => _NgmyGearStudioState();
}

class _NgmyGearStudioState extends State<NgmyGearStudio> with SingleTickerProviderStateMixin {
  final List<int> _t = [16, 32, 12, 24];
  double _rpm = 40;
  double _angle = 0;
  int _challenge = 0;
  final Set<int> _done = {};
  late final Ticker _tick;
  Duration _last = Duration.zero;

  double get _ratio => gearRatio(_t[0], _t[1], _t[2], _t[3]);
  bool get _solved => (_ratio - kGearChallenges[_challenge].$2).abs() / kGearChallenges[_challenge].$2 < 0.02 && !(_challenge == 7 && Set.of(_t).length < 4);

  @override
  void initState() {
    super.initState();
    _tick = createTicker((d) {
      final dt = math.min((d - _last).inMicroseconds / 1e6, 0.05);
      _last = d;
      setState(() => _angle += _rpm / 60 * 2 * math.pi * dt * 0.5);
    })..start();
    NgmyProgress.load('gear_lab').then((m) {
      if (mounted) setState(() => _done.addAll([for (final v in (m['done'] as List? ?? const [])) (v as num).toInt()]));
    });
  }

  @override
  void dispose() {
    _tick.dispose();
    super.dispose();
  }

  void _set(int i, double v) {
    setState(() => _t[i] = v.round());
    if (_solved && _done.add(_challenge)) {
      NgmyTone.sfx('zap', 8, ms: 240, volume: 0.45);
      NgmyProgress.save('gear_lab', {'done': _done.toList()});
    }
  }

  @override
  Widget build(BuildContext context) {
    final out = _rpm * _ratio;
    final force = 1 / _ratio;
    final ch = kGearChallenges[_challenge];
    return StudioPage(
      title: 'GEAR LAB',
      accent: const Color(0xFFFB923C),
      help: 'Gears pass turning from one wheel to the next. When a small gear drives a big gear, the big one turns slower but with MORE turning force. When a big gear drives a small one, it spins faster with less force. Bikes, clocks, drills and cars all use this.\n\nThe ratio is teeth of the driver ÷ teeth of the follower. Here two pairs are linked: gear 1 turns gear 2, gear 2 shares an axle with gear 3, and gear 3 turns gear 4. Change the number of teeth and watch the output speed. Then try the challenges.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(10, 6, 10, 4), child: _note(_solved ? '✅ Done! Ratio ${_ratio.toStringAsFixed(2)}. ${ch.$1}' : 'Challenge ${_challenge + 1}: ${ch.$1}', _solved ? const Color(0xFF4ADE80) : const Color(0xFFFB923C), action: _solved && _challenge < kGearChallenges.length - 1 ? StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next', color: const Color(0xFF4ADE80), onTap: () => setState(() => _challenge++)) : null)),
        Expanded(child: CustomPaint(size: Size.infinite, painter: _GearPainter(_t, _angle))),
        Padding(
          padding: const EdgeInsets.fromLTRB(14, 0, 14, 6),
          child: Text('Ratio ${_t[0]}/${_t[1]} × ${_t[2]}/${_t[3]} = ${_ratio.toStringAsFixed(2)}   ·   Output ${out.toStringAsFixed(1)} rpm   ·   Force ×${force.toStringAsFixed(2)}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12.5)),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'GOAL', children: [for (var i = 0; i < kGearChallenges.length; i++) StudioChip(label: '${_done.contains(i) ? '✓ ' : ''}${i + 1}', selected: _challenge == i, color: const Color(0xFFFB923C), onTap: () => setState(() => _challenge = i))]),
        StudioSlider(label: 'Input speed', value: _rpm, min: 10, max: 120, display: '${_rpm.round()} rpm', color: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _rpm = v)),
        for (var i = 0; i < 4; i++) StudioSlider(label: 'Gear ${i + 1} teeth', value: _t[i].toDouble(), min: 8, max: 40, display: '${_t[i]}', color: const [Color(0xFF38BDF8), Color(0xFFFB923C), Color(0xFFFB923C), Color(0xFF4ADE80)][i], onChanged: (v) => _set(i, v)),
      ]),
    );
  }
}

class _GearPainter extends CustomPainter {
  _GearPainter(this.teeth, this.angle);
  final List<int> teeth;
  final double angle;

  Path _gear(Offset c, double r, int n, double rot) {
    final p = Path();
    final step = 2 * math.pi / n;
    for (var i = 0; i < n; i++) {
      final a = rot + i * step;
      for (final q in [(0.0, -4.0), (0.22, 4.0), (0.58, 4.0), (0.8, -4.0)]) {
        final ang = a + q.$1 * step;
        final rr = r + q.$2;
        final pt = c + Offset(math.cos(ang) * rr, math.sin(ang) * rr);
        i == 0 && q.$1 == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
      }
    }
    return p..close();
  }

  @override
  void paint(Canvas canvas, Size size) {
    const mod = 2.2;
    final r = [for (final t in teeth) t * mod];
    // Layout in gear units: gear 1, then gear 2 to its right, gear 3 on gear 2's axle, gear 4 to the right of gear 3.
    final x1 = 0.0, x2 = r[0] + r[1] + 6, x4 = x2 + r[2] + r[3] + 6;
    final left = -r[0] - 6, right = x4 + r[3] + 6;
    final maxR = r.reduce(math.max);
    final top = -maxR - 6, bottom = maxR + 6;
    final s = math.min(size.width / (right - left), size.height / (bottom - top)) * 0.96;
    canvas.save();
    canvas.translate(size.width / 2 - (left + right) / 2 * s, size.height / 2 - (top + bottom) / 2 * s);
    canvas.scale(s);
    final a1 = angle;
    final a2 = -a1 * teeth[0] / teeth[1] + math.pi / teeth[1];
    final a3 = a2;
    final a4 = -a3 * teeth[2] / teeth[3] + math.pi / teeth[3];
    void draw(Offset c, double rad, int n, double rot, Color col, {bool back = false}) {
      final path = _gear(c, rad, n, rot);
      canvas.drawPath(path, Paint()..shader = RadialGradient(colors: [Color.lerp(col, Colors.white, back ? 0.1 : 0.35)!, col, Color.lerp(col, Colors.black, 0.5)!]).createShader(Rect.fromCircle(center: c, radius: rad + 6)));
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.5..color = Colors.black54);
      canvas.drawCircle(c, rad * 0.55, Paint()..color = Colors.black.withValues(alpha: 0.28));
      for (var i = 0; i < 4; i++) {
        final a = rot + i * math.pi / 2;
        canvas.drawLine(c, c + Offset(math.cos(a), math.sin(a)) * rad * 0.55, Paint()..color = Colors.black38..strokeWidth = 3);
      }
      canvas.drawCircle(c, 6, Paint()..color = const Color(0xFFE2E8F0));
    }

    // Back layer: gears 3 and 4.
    draw(Offset(x2, 0), r[2], teeth[2], a3, const Color(0xFFB45309), back: true);
    draw(Offset(x4, 0), r[3], teeth[3], a4, const Color(0xFF16A34A));
    draw(Offset(x1, 0), r[0], teeth[0], a1, const Color(0xFF0284C7));
    draw(Offset(x2, 0), r[1], teeth[1], a2, const Color(0xFFEA580C));
    canvas.restore();
    // Labels.
    void label(String t, double x, Color c) => _text(canvas, t, Offset(size.width / 2 + (x - (left + right) / 2) * s, size.height - 10), color: c, size: 11);
    label('1 · input', x1, const Color(0xFF38BDF8));
    label('2+3 · shared axle', x2, const Color(0xFFFB923C));
    label('4 · output', x4, const Color(0xFF4ADE80));
  }

  @override
  bool shouldRepaint(covariant _GearPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// CIPHER LAB: secret writing. Make a secret message, then crack one.
// ═════════════════════════════════════════════════════════════════════════════

String caesar(String s, int shift) {
  final b = StringBuffer();
  for (final u in s.runes) {
    final ch = String.fromCharCode(u);
    final up = ch.toUpperCase();
    final c = up.codeUnitAt(0);
    if (c >= 65 && c <= 90) {
      b.write(String.fromCharCode(65 + ((c - 65 + shift) % 26 + 26) % 26));
    } else {
      b.write(ch);
    }
  }
  return b.toString();
}

String vigenere(String s, String key, {bool decode = false}) {
  final k = key.toUpperCase().replaceAll(RegExp('[^A-Z]'), '');
  if (k.isEmpty) return s.toUpperCase();
  var j = 0;
  final b = StringBuffer();
  for (final u in s.runes) {
    final ch = String.fromCharCode(u);
    final c = ch.toUpperCase().codeUnitAt(0);
    if (c >= 65 && c <= 90) {
      final sh = k.codeUnitAt(j++ % k.length) - 65;
      b.write(String.fromCharCode(65 + ((c - 65 + (decode ? -sh : sh)) % 26 + 26) % 26));
    } else {
      b.write(ch);
    }
  }
  return b.toString();
}

const List<String> kSecrets = [
  'THE SUN IS A STAR',
  'WATER BOILS AT ONE HUNDRED DEGREES',
  'LIGHT TRAVELS FASTER THAN SOUND',
  'DNA IS THE CODE OF LIFE',
  'THE MOON CAUSES THE TIDES',
  'A PASSWORD SHOULD BE LONG AND UNIQUE',
];

class NgmyCipherStudio extends StatefulWidget {
  const NgmyCipherStudio({super.key});

  @override
  State<NgmyCipherStudio> createState() => _NgmyCipherStudioState();
}

class _NgmyCipherStudioState extends State<NgmyCipherStudio> {
  final TextEditingController _msg = TextEditingController(text: 'Meet me at noon');
  final TextEditingController _key = TextEditingController(text: 'LEMON');
  int _mode = 0; // 0 make, 1 crack
  int _kind = 0; // 0 caesar, 1 atbash, 2 vigenere
  int _shift = 3;
  int _secret = 0;
  int _crackShift = 0;
  int _guess = 0;
  final Set<int> _done = {};

  @override
  void initState() {
    super.initState();
    _newSecret();
    NgmyProgress.load('cipher_lab').then((m) {
      if (mounted) setState(() => _done.addAll([for (final v in (m['done'] as List? ?? const [])) (v as num).toInt()]));
    });
  }

  @override
  void dispose() {
    _msg.dispose();
    _key.dispose();
    super.dispose();
  }

  void _newSecret() {
    _crackShift = 1 + math.Random().nextInt(25);
    _guess = 0;
  }

  String get _cipher => caesar(kSecrets[_secret], _crackShift);
  bool get _cracked => caesar(_cipher, -_guess) == kSecrets[_secret];

  String get _out {
    final m = _msg.text;
    return switch (_kind) {
      0 => caesar(m, _shift),
      1 => caesar(m, 0).split('').map((ch) {
          final c = ch.codeUnitAt(0);
          return c >= 65 && c <= 90 ? String.fromCharCode(90 - (c - 65)) : ch;
        }).join(),
      _ => vigenere(m, _key.text),
    };
  }

  Widget _freq(String text) {
    final counts = List<int>.filled(26, 0);
    for (final c in text.toUpperCase().codeUnits) {
      if (c >= 65 && c <= 90) counts[c - 65]++;
    }
    final mx = math.max(1, counts.reduce(math.max));
    return SizedBox(
      height: 70,
      child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
        for (var i = 0; i < 26; i++)
          Expanded(child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
            Container(height: 46.0 * counts[i] / mx, margin: const EdgeInsets.symmetric(horizontal: 1), decoration: BoxDecoration(color: const Color(0xFF38BDF8), borderRadius: BorderRadius.circular(2))),
            Text(String.fromCharCode(65 + i), style: const TextStyle(color: Colors.white38, fontSize: 8.5, fontWeight: FontWeight.w800)),
          ])),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) {
    final kinds = ['Caesar shift', 'Atbash (mirror)', 'Vigenère (keyword)'];
    final blurb = [
      'Caesar shift: every letter moves along the alphabet by the same amount. Julius Caesar used a shift of 3 for his army’s messages.',
      'Atbash: the alphabet is flipped, so A becomes Z, B becomes Y and so on. It is one of the oldest ciphers.',
      'Vigenère: a keyword picks a different shift for each letter, so the same letter is written in different ways. It stayed unbroken for about 300 years.',
    ];
    final Widget body;
    if (_mode == 0) {
      body = ListView(padding: const EdgeInsets.all(14), children: [
        TextField(controller: _msg, onChanged: (_) => setState(() {}), style: const TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w700), decoration: InputDecoration(labelText: 'Your message', labelStyle: const TextStyle(color: Colors.white54), filled: true, fillColor: Colors.white.withValues(alpha: 0.07), border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none))),
        if (_kind == 2) ...[const SizedBox(height: 10), TextField(controller: _key, onChanged: (_) => setState(() {}), style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700), decoration: InputDecoration(labelText: 'Secret keyword', labelStyle: const TextStyle(color: Colors.white54), filled: true, fillColor: Colors.white.withValues(alpha: 0.07), border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none)))],
        const SizedBox(height: 14),
        const Text('SECRET VERSION', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
        const SizedBox(height: 4),
        Container(padding: const EdgeInsets.all(14), decoration: BoxDecoration(color: const Color(0xFF38BDF8).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFF38BDF8).withValues(alpha: 0.4))), child: SelectableText(_out.isEmpty ? '…' : _out, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 1.5))),
        const SizedBox(height: 12),
        _note(blurb[_kind], const Color(0xFF38BDF8)),
        const SizedBox(height: 12),
        const Text('LETTER COUNT OF THE SECRET VERSION', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
        const SizedBox(height: 4),
        _freq(_out),
        const SizedBox(height: 4),
        const Text('Codebreakers count letters. In English, E is the most common letter, so in a Caesar message the tallest bar is probably E. That is how simple ciphers get cracked, and why a keyword cipher is stronger.', style: TextStyle(color: Colors.white54, fontSize: 12, height: 1.4)),
      ]);
    } else {
      body = ListView(padding: const EdgeInsets.all(14), children: [
        _note('A spy sent you a Caesar-shifted message. Slide the shift until it turns into real English. Hint: look at the tallest bar. It is probably E.', const Color(0xFFFBBF24)),
        const SizedBox(height: 12),
        const Text('INTERCEPTED', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
        Text(_cipher, style: const TextStyle(color: Colors.white54, fontSize: 18, fontWeight: FontWeight.w800, letterSpacing: 1.4)),
        const SizedBox(height: 10),
        const Text('YOUR DECODING', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 1)),
        Container(padding: const EdgeInsets.all(14), decoration: BoxDecoration(color: (_cracked ? const Color(0xFF4ADE80) : const Color(0xFF38BDF8)).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(14), border: Border.all(color: (_cracked ? const Color(0xFF4ADE80) : const Color(0xFF38BDF8)).withValues(alpha: 0.5))), child: Text(caesar(_cipher, -_guess), style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, letterSpacing: 1.4))),
        const SizedBox(height: 12),
        _freq(_cipher),
        const SizedBox(height: 8),
        if (_cracked) _note('🔓 Cracked! The shift was $_crackShift. Now you know why a short secret with a simple shift is not safe.', const Color(0xFF4ADE80), action: StudioButton(icon: Icons.refresh_rounded, label: 'Next', color: const Color(0xFF4ADE80), onTap: () => setState(() {
              _secret = (_secret + 1) % kSecrets.length;
              _newSecret();
            }))),
      ]);
    }
    return StudioPage(
      title: 'CIPHER LAB',
      accent: const Color(0xFF38BDF8),
      help: 'A cipher hides a message by swapping its letters by a secret rule. Cryptography is the science of secret codes, and it protects your passwords, messages and bank every day.\n\nMake a secret: type a message and choose a cipher. Crack a code: decode a hidden message by finding the shift. Use the letter-count chart: codebreakers have used it for a thousand years.',
      stage: body,
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Make a secret', icon: Icons.lock_rounded, selected: _mode == 0, color: const Color(0xFF38BDF8), onTap: () => setState(() => _mode = 0)),
          StudioChip(label: 'Crack a code', icon: Icons.lock_open_rounded, selected: _mode == 1, color: const Color(0xFFFBBF24), onTap: () => setState(() => _mode = 1)),
        ]),
        if (_mode == 0) ...[
          StudioRow(children: [for (var i = 0; i < 3; i++) StudioChip(label: kinds[i], selected: _kind == i, color: const Color(0xFF38BDF8), onTap: () => setState(() => _kind = i))]),
          if (_kind == 0) StudioSlider(label: 'Shift', value: _shift.toDouble(), min: 1, max: 25, display: '$_shift', color: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _shift = v.round())),
        ] else
          StudioSlider(label: 'Shift back', value: _guess.toDouble(), min: 0, max: 25, display: '$_guess', color: const Color(0xFFFBBF24), onChanged: (v) {
            setState(() => _guess = v.round());
            if (_cracked && _done.add(_secret)) {
              NgmyTone.sfx('zap', 9, ms: 220, volume: 0.45);
              NgmyProgress.save('cipher_lab', {'done': _done.toList()});
            }
          }),
      ]),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// OPTICS LAB: how a lens makes an image. The same maths is in cameras and your eye.
// ═════════════════════════════════════════════════════════════════════════════

/// Image distance for a thin lens (positive: real image on the far side). Null if the image is at infinity.
double? lensImageDistance(double u, double f) {
  final inv = 1 / f - 1 / u;
  if (inv.abs() < 1e-9) return null;
  return 1 / inv;
}

class NgmyOpticsStudio extends StatefulWidget {
  const NgmyOpticsStudio({super.key});

  @override
  State<NgmyOpticsStudio> createState() => _NgmyOpticsStudioState();
}

class _NgmyOpticsStudioState extends State<NgmyOpticsStudio> {
  double _u = 160;
  double _f = 60;
  bool _convex = true;

  @override
  Widget build(BuildContext context) {
    final f = _convex ? _f : -_f;
    final v = lensImageDistance(_u, f);
    final m = v == null ? double.infinity : -v / _u;
    String what;
    String use;
    if (!_convex) {
      what = 'A smaller, upright, virtual image on the same side as the object';
      use = 'A diverging lens always spreads light out. It is used in glasses for short-sightedness and in door peepholes.';
    } else if (v == null) {
      what = 'No image: the rays come out parallel';
      use = 'The object is exactly at the focal point. This is how a torch or a lighthouse makes a straight beam.';
    } else if (_u < _f) {
      what = 'A bigger, upright, virtual image (you look through the lens)';
      use = 'The object is closer than the focal length: this is a magnifying glass.';
    } else if (_u < 2 * _f) {
      what = 'A bigger, upside-down, real image';
      use = 'The object is between f and 2f: this is a projector. A small slide becomes a big picture on the screen.';
    } else if ((_u - 2 * _f).abs() < 3) {
      what = 'The same size, upside-down, real image';
      use = 'At exactly 2f the image is the same size as the object, and 2f behind the lens.';
    } else {
      what = 'A smaller, upside-down, real image';
      use = 'The object is beyond 2f: this is a camera, or your eye. The image on the back of your eye is really upside-down, and your brain flips it.';
    }
    return StudioPage(
      title: 'OPTICS LAB',
      accent: const Color(0xFFFACC15),
      help: 'A lens bends light. A convex (fat in the middle) lens brings rays together at a focus. Where the image forms depends on how far the object is from the lens (u) and the lens strength, its focal length (f):\n\n1/f = 1/u + 1/v\n\nThe three coloured rays are the ones you can always draw: one through the centre, one parallel to the axis that bends through the focus, and one through the near focus that comes out parallel. Where they meet is the image. Drag the object (or use the sliders) and swap lenses.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(10, 6, 10, 4), child: _note('$what. ${v == null ? '' : 'Image distance ${v.abs().round()}, size ×${m.abs().toStringAsFixed(2)}. '}$use', const Color(0xFFFACC15))),
        Expanded(
          child: LayoutBuilder(builder: (context, c) => GestureDetector(
                onPanUpdate: (d) {
                  final unit = c.maxWidth / 760;
                  setState(() => _u = (_u - d.delta.dx / unit).clamp(20, 340));
                },
                child: CustomPaint(size: Size.infinite, painter: _OpticsPainter(_u, f, v)),
              )),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Convex lens', selected: _convex, color: const Color(0xFFFACC15), onTap: () => setState(() => _convex = true)),
          StudioChip(label: 'Concave lens', selected: !_convex, color: const Color(0xFFA78BFA), onTap: () => setState(() => _convex = false)),
        ]),
        StudioSlider(label: 'Object distance (u)', value: _u, min: 20, max: 340, display: '${_u.round()}', color: const Color(0xFFF472B6), onChanged: (x) => setState(() => _u = x)),
        StudioSlider(label: 'Focal length (f)', value: _f, min: 25, max: 140, display: '${_f.round()}', color: const Color(0xFFFACC15), onChanged: (x) => setState(() => _f = x)),
      ]),
    );
  }
}

class _OpticsPainter extends CustomPainter {
  _OpticsPainter(this.u, this.f, this.v);
  final double u;
  final double f;
  final double? v;

  @override
  void paint(Canvas canvas, Size size) {
    final unit = size.width / 760;
    final cx = size.width / 2, cy = size.height / 2;
    Offset p(double x, double y) => Offset(cx + x * unit, cy - y * unit);
    canvas.drawLine(Offset(0, cy), Offset(size.width, cy), Paint()..color = Colors.white24..strokeWidth = 1.4);
    // Lens.
    final lens = Path();
    final h = size.height * 0.42;
    if (f > 0) {
      lens.moveTo(cx, cy - h);
      lens.quadraticBezierTo(cx + 22, cy, cx, cy + h);
      lens.quadraticBezierTo(cx - 22, cy, cx, cy - h);
    } else {
      lens.moveTo(cx - 12, cy - h);
      lens.quadraticBezierTo(cx + 2, cy, cx - 12, cy + h);
      lens.lineTo(cx + 12, cy + h);
      lens.quadraticBezierTo(cx - 2, cy, cx + 12, cy - h);
      lens.close();
    }
    canvas.drawPath(lens, Paint()..color = const Color(0xFF7DD3FC).withValues(alpha: 0.35));
    canvas.drawPath(lens, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFFBAE6FD));
    // Focal points.
    for (final s in [-1.0, 1.0]) {
      canvas.drawCircle(p(s * f.abs(), 0), 4, Paint()..color = const Color(0xFFFACC15));
      _text(canvas, 'F', p(s * f.abs(), 0) + const Offset(0, 14), color: const Color(0xFFFACC15), size: 11);
      canvas.drawCircle(p(s * 2 * f.abs(), 0), 3, Paint()..color = Colors.white38);
      _text(canvas, '2F', p(s * 2 * f.abs(), 0) + const Offset(0, 14), color: Colors.white38, size: 10);
    }
    // Object.
    const oh = 46.0;
    final top = p(-u, oh);
    void arrow(Offset base, Offset tip, Color c, {bool dashed = false}) {
      final paint = Paint()..color = c..strokeWidth = 4..strokeCap = StrokeCap.round;
      if (dashed) {
        final d = tip - base;
        for (var i = 0; i < 8; i++) {
          canvas.drawLine(base + d * (i / 8), base + d * ((i + 0.55) / 8), paint);
        }
      } else {
        canvas.drawLine(base, tip, paint);
      }
      final dir = (tip - base) / math.max((tip - base).distance, 0.01);
      final n = Offset(-dir.dy, dir.dx);
      canvas.drawPath(Path()..moveTo(tip.dx, tip.dy)..lineTo((tip - dir * 10 + n * 6).dx, (tip - dir * 10 + n * 6).dy)..lineTo((tip - dir * 10 - n * 6).dx, (tip - dir * 10 - n * 6).dy)..close(), Paint()..color = c);
    }

    arrow(p(-u, 0), top, const Color(0xFFF472B6));
    _text(canvas, 'object', p(-u, 0) + const Offset(0, 28), color: const Color(0xFFF472B6), size: 11);
    // Rays from the object tip.
    final lensTop = p(0, oh);
    final rays = <Color>[const Color(0xFFFB923C), const Color(0xFF4ADE80), const Color(0xFF38BDF8)];
    // 1: parallel to the axis, then through (or away from) the focus.
    // 2: through the centre of the lens, straight on.
    // 3: aimed at the near focus, leaves parallel.
    final far = size.width;
    Offset ext(Offset a, Offset b, double len) {
      final d = b - a;
      return a + d / math.max(d.distance, 0.01) * len;
    }

    // Ray 1.
    final focusRight = p(f.abs() * (f > 0 ? 1 : -1), 0);
    canvas.drawLine(top, lensTop, Paint()..color = rays[0]..strokeWidth = 2);
    final out1 = f > 0 ? ext(lensTop, focusRight, far) : lensTop + (lensTop - focusRight) / math.max((lensTop - focusRight).distance, 0.01) * far;
    canvas.drawLine(lensTop, out1, Paint()..color = rays[0]..strokeWidth = 2);
    if (f < 0) {
      canvas.drawLine(lensTop, focusRight, Paint()..color = rays[0].withValues(alpha: 0.4)..strokeWidth = 1.4);
    } else if (v != null && v! < 0) {
      canvas.drawLine(lensTop, ext(lensTop, focusRight, -far), Paint()..color = rays[0].withValues(alpha: 0.4)..strokeWidth = 1.4);
    }
    // Ray 2.
    canvas.drawLine(top, ext(top, p(0, 0), far * 2), Paint()..color = rays[1]..strokeWidth = 2);
    // Ray 3.
    final nearFocus = p(-f.abs() * (f > 0 ? 1 : -1), 0);
    if (f > 0 && u > f && (nearFocus - top).dx.abs() > 0.5) {
      final d = nearFocus - top;
      final t = (cx - top.dx) / d.dx;
      final hit = top + d * t;
      canvas.drawLine(top, hit, Paint()..color = rays[2]..strokeWidth = 2);
      canvas.drawLine(hit, Offset(size.width, hit.dy), Paint()..color = rays[2]..strokeWidth = 2);
    } else if ((nearFocus - top).dx.abs() > 0.5) {
      final aim = nearFocus;
      final d = aim - top;
      final t = (cx - top.dx) / d.dx;
      final hit = top + d * t;
      canvas.drawLine(top, hit, Paint()..color = rays[2].withValues(alpha: 0.9)..strokeWidth = 2);
      canvas.drawLine(hit, Offset(size.width, hit.dy), Paint()..color = rays[2]..strokeWidth = 2);
    }
    // Image.
    final vv = v;
    if (vv != null) {
      final m = -vv / u;
      final ih = oh * m;
      final base = p(vv, 0);
      final tip = p(vv, ih);
      arrow(base, tip, const Color(0xFF4ADE80), dashed: vv < 0 || f < 0);
      _text(canvas, vv < 0 || f < 0 ? 'virtual image' : 'real image', base + Offset(0, ih > 0 ? 24 : -24), color: const Color(0xFF4ADE80), size: 11);
    }
  }

  @override
  bool shouldRepaint(covariant _OpticsPainter old) => true;
}
