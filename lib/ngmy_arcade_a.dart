import 'dart:math' as math;
import 'dart:math' show Point;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// Arcade games with a technology theme. Scores and levels are saved on the phone.
// ═════════════════════════════════════════════════════════════════════════════

Widget _hudBox(String label, String value, {Color color = Colors.white}) => Column(mainAxisSize: MainAxisSize.min, children: [
      Text(label, style: const TextStyle(color: Colors.white38, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
      Text(value, style: TextStyle(color: color, fontSize: 18, fontWeight: FontWeight.w900)),
    ]);

Widget _overlayCard(String title, String sub, Color c, List<Widget> actions) => Center(
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(color: const Color(0xEE17171A), borderRadius: BorderRadius.circular(24), border: Border.all(color: c.withValues(alpha: 0.6))),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Text(title, textAlign: TextAlign.center, style: TextStyle(color: c, fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 6),
          Text(sub, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, height: 1.4)),
          const SizedBox(height: 14),
          Wrap(spacing: 8, alignment: WrapAlignment.center, children: actions),
        ]),
      ),
    );

// ═════════════════════════════════════════════════════════════════════════════
// BUG SMASHER: squash the bugs crawling out of the chips. Never hit the batteries.
// ═════════════════════════════════════════════════════════════════════════════

class _Pop {
  _Pop(this.cell, this.born, this.life, this.good);
  final int cell;
  final double born;
  final double life;
  final bool good; // a battery: do not tap
  bool hit = false;
}

class NgmyBugSmasherStudio extends StatefulWidget {
  const NgmyBugSmasherStudio({super.key});

  @override
  State<NgmyBugSmasherStudio> createState() => _NgmyBugSmasherStudioState();
}

class _NgmyBugSmasherStudioState extends State<NgmyBugSmasherStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final List<_Pop> _pops = [];
  final math.Random _rnd = math.Random();
  double _t = 0;
  double _next = 0.5;
  int _score = 0;
  int _best = 0;
  int _lives = 3;
  bool _over = false;
  bool _started = false;
  Size _size = Size.zero;
  final List<(Offset, double)> _splats = [];

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('bug_smasher').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  void _start() {
    setState(() {
      _pops.clear();
      _splats.clear();
      _score = 0;
      _lives = 3;
      _over = false;
      _started = true;
      _t = 0;
      _next = 0.4;
    });
  }

  Rect _cellRect(int i) {
    const cols = 3, rows = 4;
    final w = _size.width / cols, h = (_size.height - 60) / rows;
    return Rect.fromLTWH((i % cols) * w, 52 + (i ~/ cols) * h, w, h).deflate(8);
  }

  @override
  void onFrame(double dt) {
    if (!_started || _over || _size == Size.zero) return;
    _t += dt;
    final speed = (1 - _score / 120).clamp(0.35, 1.0);
    if (_t >= _next) {
      final free = [for (var i = 0; i < 12; i++) if (!_pops.any((p) => p.cell == i && !p.hit)) i];
      if (free.isNotEmpty) {
        _pops.add(_Pop(free[_rnd.nextInt(free.length)], _t, (1.5 * speed + 0.35), _rnd.nextDouble() < 0.18));
      }
      _next = _t + (0.2 + 0.75 * speed) * (0.6 + _rnd.nextDouble() * 0.7);
    }
    for (final p in _pops) {
      if (!p.hit && _t - p.born > p.life) {
        p.hit = true;
        if (!p.good) {
          _lives--;
          NgmyTone.play(110, ms: 200, wave: 'saw', volume: 0.35);
          HapticFeedback.lightImpact();
        }
      }
    }
    _pops.removeWhere((p) => p.hit && _t - p.born > p.life + 0.5);
    _splats.removeWhere((s) => _t - s.$2 > 0.5);
    if (_lives <= 0) {
      _over = true;
      if (_score > _best) {
        _best = _score;
        NgmyProgress.save('bug_smasher', {'best': _best});
      }
    }
    setState(() {});
  }

  void _tap(Offset pos) {
    if (!_started || _over) return;
    for (final p in _pops) {
      if (p.hit) continue;
      final r = _cellRect(p.cell);
      if (r.contains(pos)) {
        p.hit = true;
        _splats.add((r.center, _t));
        if (p.good) {
          _lives--;
          NgmyTone.play(100, ms: 250, wave: 'saw', volume: 0.4);
          HapticFeedback.heavyImpact();
        } else {
          _score++;
          NgmyTone.play(900 + _score * 8.0, ms: 70, wave: 'square', sweep: 1.2, volume: 0.3);
        }
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'BUG SMASHER',
      accent: const Color(0xFF4ADE80),
      help: 'Bugs are crawling out of the computer chips! Tap each bug before it hides again. But be careful: the green batteries are good parts. If you smash a battery, or let a bug escape, you lose a life. You have 3 lives. The bugs get quicker the more you squash.\n\nTechnology people call a mistake in a program a "bug", and fixing them is called debugging.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => _tap(d.localPosition),
          child: Stack(fit: StackFit.expand, children: [
            CustomPaint(size: _size, painter: _BugPainter(this)),
            Positioned(left: 16, right: 16, top: 6, child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hudBox('SCORE', '$_score'), _hudBox('LIVES', '❤' * _lives + '🖤' * (3 - _lives)), _hudBox('BEST', '$_best')])),
            if (!_started) _overlayCard('Squash the bugs', 'Tap the bugs. Never tap the batteries.', const Color(0xFF4ADE80), [StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: _start)]),
            if (_over) _overlayCard('Game over', 'You squashed $_score bugs.${_score >= _best && _score > 0 ? '\nNew best!' : ''}', const Color(0xFFF87171), [StudioButton(icon: Icons.replay_rounded, label: 'Play again', color: const Color(0xFF4ADE80), onTap: _start)]),
          ]),
        );
      }),
    );
  }
}

class _BugPainter extends CustomPainter {
  _BugPainter(this.s);
  final _NgmyBugSmasherStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF07140D));
    // Circuit traces.
    final trace = Paint()..color = const Color(0xFF16A34A).withValues(alpha: 0.18)..strokeWidth = 3..style = PaintingStyle.stroke;
    for (var i = 0; i < 12; i++) {
      final c = s._cellRect(i).center;
      canvas.drawLine(c, Offset(c.dx + (i.isEven ? 60 : -60), c.dy + 40), trace);
    }
    for (var i = 0; i < 12; i++) {
      final r = s._cellRect(i);
      final chip = RRect.fromRectAndRadius(r, const Radius.circular(14));
      canvas.drawRRect(chip, Paint()..color = const Color(0xFF111A14));
      canvas.drawRRect(chip, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFF22C55E).withValues(alpha: 0.35));
      for (var k = 0; k < 5; k++) {
        final x = r.left + 14 + k * (r.width - 28) / 4;
        canvas.drawLine(Offset(x, r.top - 5), Offset(x, r.top), Paint()..color = const Color(0xFFCBD5E1)..strokeWidth = 3);
        canvas.drawLine(Offset(x, r.bottom), Offset(x, r.bottom + 5), Paint()..color = const Color(0xFFCBD5E1)..strokeWidth = 3);
      }
      canvas.drawCircle(Offset(r.left + 14, r.top + 14), 4, Paint()..color = Colors.white24);
    }
    for (final p in s._pops) {
      final r = s._cellRect(p.cell);
      final age = s._t - p.born;
      final up = p.hit ? 0.0 : Curves.easeOut.transform((age / 0.18).clamp(0.0, 1.0)) * (age > p.life - 0.2 ? ((p.life - age) / 0.2).clamp(0.0, 1.0) : 1.0);
      if (up <= 0.02) continue;
      final c = r.center;
      canvas.save();
      canvas.translate(c.dx, c.dy + (1 - up) * 24);
      canvas.scale(0.4 + 0.6 * up);
      final rad = math.min(r.width, r.height) * 0.32;
      if (p.good) {
        canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: rad * 1.4, height: rad * 1.9), const Radius.circular(8)), Paint()..color = const Color(0xFF22C55E));
        canvas.drawRect(Rect.fromCenter(center: Offset(0, -rad * 1.05), width: rad * 0.5, height: rad * 0.2), Paint()..color = Colors.white70);
        final tp = TextPainter(text: const TextSpan(text: '+', style: TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, Offset(-tp.width / 2, -tp.height / 2));
      } else {
        for (var k = 0; k < 3; k++) {
          for (final sx in const [-1.0, 1.0]) {
            canvas.drawLine(Offset(sx * rad * 0.6, (k - 1) * rad * 0.5), Offset(sx * rad * 1.25, (k - 1) * rad * 0.85 + math.sin(s._t * 18 + k) * 4), Paint()..color = const Color(0xFF111111)..strokeWidth = 3..strokeCap = StrokeCap.round);
          }
        }
        canvas.drawOval(Rect.fromCenter(center: Offset.zero, width: rad * 1.3, height: rad * 1.7), Paint()..color = const Color(0xFFDC2626));
        canvas.drawLine(Offset(0, -rad * 0.85), Offset(0, rad * 0.85), Paint()..color = Colors.black54..strokeWidth = 2);
        for (final p2 in [Offset(-rad * 0.28, -rad * 0.2), Offset(rad * 0.28, -rad * 0.2), Offset(-rad * 0.3, rad * 0.3), Offset(rad * 0.3, rad * 0.3)]) {
          canvas.drawCircle(p2, rad * 0.1, Paint()..color = Colors.black87);
        }
        canvas.drawCircle(Offset(0, -rad * 1.05), rad * 0.42, Paint()..color = const Color(0xFF7F1D1D));
        canvas.drawCircle(Offset(-rad * 0.15, -rad * 1.1), rad * 0.1, Paint()..color = Colors.white);
        canvas.drawCircle(Offset(rad * 0.15, -rad * 1.1), rad * 0.1, Paint()..color = Colors.white);
      }
      canvas.restore();
    }
    for (final sp in s._splats) {
      final a = ((s._t - sp.$2) / 0.5).clamp(0.0, 1.0);
      canvas.drawCircle(sp.$1, 20 + a * 36, Paint()..style = PaintingStyle.stroke..strokeWidth = 4 * (1 - a)..color = const Color(0xFFFACC15).withValues(alpha: 1 - a));
    }
  }

  @override
  bool shouldRepaint(covariant _BugPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// ROCKET LANDER: gravity is pulling you down. Land softly on the pad.
// ═════════════════════════════════════════════════════════════════════════════

class _World {
  const _World(this.name, this.g, this.color, this.fact);
  final String name;
  final double g; // m/s² (the real value)
  final Color color;
  final String fact;
}

const List<_World> _kLanderWorlds = [
  _World('Moon', 1.62, Color(0xFF9CA3AF), 'The Moon has only one sixth of Earth\'s gravity, so landing is gentle.'),
  _World('Mars', 3.71, Color(0xFFEF4444), 'Mars has about 38 percent of Earth\'s gravity.'),
  _World('Mercury', 3.70, Color(0xFFA8A29E), 'Mercury is small, so its gravity is like Mars.'),
  _World('Venus', 8.87, Color(0xFFFBBF24), 'Venus is almost as heavy as Earth, with strong gravity.'),
  _World('Earth', 9.81, Color(0xFF38BDF8), 'On Earth gravity is strong, and the air also slows you down.'),
  _World('Neptune', 11.15, Color(0xFF3B82F6), 'Neptune pulls a little harder than Earth.'),
  _World('Jupiter', 24.79, Color(0xFFFB923C), 'Jupiter is so heavy that you would weigh two and a half times as much!'),
];

class NgmyRocketLanderStudio extends StatefulWidget {
  const NgmyRocketLanderStudio({super.key});

  @override
  State<NgmyRocketLanderStudio> createState() => _NgmyRocketLanderStudioState();
}

class _NgmyRocketLanderStudioState extends State<NgmyRocketLanderStudio> with SingleTickerProviderStateMixin, StudioFrames {
  int _world = 0;
  int _unlocked = 0;
  Offset _p = Offset.zero; // 0..1 board
  Offset _v = Offset.zero;
  double _angle = 0;
  double _fuel = 1;
  bool _left = false, _right = false, _thrust = false;
  String _state = 'ready'; // ready, flying, landed, crashed
  String _why = '';
  double _padX = 0.5;
  double _padW = 0.3;
  Size _size = Size.zero;
  double _t = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('rocket_lander').then((m) {
      if (mounted) setState(() => _unlocked = (m['unlocked'] as num?)?.toInt() ?? 0);
    });
  }

  void _reset() {
    final r = math.Random();
    _padW = (0.36 - _world * 0.035).clamp(0.14, 0.4);
    _padX = 0.2 + r.nextDouble() * 0.6;
    _p = Offset(0.15 + r.nextDouble() * 0.7, 0.08);
    _v = Offset((r.nextDouble() - 0.5) * 0.08, 0);
    _angle = 0;
    _fuel = 1;
    _state = 'flying';
    _why = '';
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    if (_state != 'flying') {
      setState(() {});
      return;
    }
    final w = _kLanderWorlds[_world];
    final g = w.g / 9.81 * 0.28; // screen heights per second squared
    if (_left) _angle -= dt * 2.2;
    if (_right) _angle += dt * 2.2;
    _angle = _angle.clamp(-1.2, 1.2);
    var a = Offset(0, g);
    if (_thrust && _fuel > 0) {
      const power = 0.62;
      a += Offset(math.sin(_angle) * power, -math.cos(_angle) * power);
      _fuel = math.max(0, _fuel - dt * 0.16);
    }
    _v += a * dt;
    _p += _v * dt;
    if (_p.dx < 0.02 || _p.dx > 0.98) {
      _v = Offset(-_v.dx * 0.4, _v.dy);
      _p = Offset(_p.dx.clamp(0.02, 0.98), _p.dy);
    }
    if (_p.dy < 0.02) _p = Offset(_p.dx, 0.02);
    if (_p.dy >= 0.86) {
      final onPad = (_p.dx - _padX).abs() < _padW / 2;
      final soft = _v.dy < 0.2 && _v.dx.abs() < 0.08 && _angle.abs() < 0.3;
      if (onPad && soft) {
        _state = 'landed';
        if (_world + 1 > _unlocked && _world + 1 < _kLanderWorlds.length) {
          _unlocked = _world + 1;
        }
        NgmyProgress.save('rocket_lander', {'unlocked': _unlocked});
        NgmyTone.chord('bell', [0, 4, 7, 12], ms: 600, volume: 0.45);
      } else {
        _state = 'crashed';
        _why = !onPad ? 'You missed the landing pad.' : (_v.dy >= 0.2 ? 'Too fast! Use the thruster to slow down.' : (_angle.abs() >= 0.3 ? 'Not upright. Level out before you land.' : 'Sideways drift was too big.'));
        NgmyTone.play(80, ms: 500, wave: 'noise', volume: 0.6);
        HapticFeedback.heavyImpact();
      }
    }
    if (_thrust && _fuel > 0 && (_t * 20).floor() % 2 == 0) NgmyTone.play(90, ms: 70, wave: 'noise', volume: 0.12);
    setState(() {});
  }

  Widget _btn(IconData icon, void Function(bool) set, bool on, {double size = 74}) => Listener(
        onPointerDown: (_) => set(true),
        onPointerUp: (_) => set(false),
        onPointerCancel: (_) => set(false),
        child: Container(width: size, height: 62, decoration: BoxDecoration(color: on ? const Color(0xFFFB923C) : Colors.white.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white24)), child: Icon(icon, color: Colors.white, size: 30)),
      );

  @override
  Widget build(BuildContext context) {
    final w = _kLanderWorlds[_world];
    return StudioPage(
      title: 'ROCKET LANDER',
      accent: const Color(0xFFFB923C),
      help: 'Land your rocket softly on the green pad. Gravity pulls you down all the time. Press and hold THRUST to fire the engine and slow your fall (it uses fuel). Press the left and right buttons to tilt the rocket, then thrust to move sideways.\n\nTo land safely you must be on the pad, going slowly, and standing upright.\n\nEach world has different gravity: start on the Moon where it is gentle, and unlock harder worlds all the way to Jupiter, where gravity is 15 times stronger than on the Moon.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          CustomPaint(size: _size, painter: _LanderPainter(this)),
          Positioned(left: 14, right: 14, top: 6, child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hudBox('WORLD', w.name, color: w.color), _hudBox('GRAVITY', '${w.g} m/s²'), _hudBox('FUEL', '${(_fuel * 100).round()}%', color: _fuel < 0.25 ? const Color(0xFFF87171) : const Color(0xFF4ADE80)), _hudBox('SPEED', '${(_v.dy * 100).round()}', color: _v.dy > 0.2 ? const Color(0xFFF87171) : Colors.white)])),
          if (_state == 'ready') _overlayCard('Land on ${w.name}', '${w.fact}\nGravity here: ${w.g} m/s².', w.color, [StudioButton(icon: Icons.rocket_launch_rounded, label: 'Launch', color: const Color(0xFF4ADE80), onTap: () => setState(_reset))]),
          if (_state == 'landed') _overlayCard('Perfect landing!', _world + 1 < _kLanderWorlds.length ? 'Next world unlocked: ${_kLanderWorlds[_world + 1].name}.' : 'You landed on every world!', const Color(0xFF4ADE80), [StudioButton(icon: Icons.replay_rounded, label: 'Again', onTap: () => setState(_reset)), if (_world + 1 < _kLanderWorlds.length) StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next world', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                    _world++;
                    _state = 'ready';
                  }))]),
          if (_state == 'crashed') _overlayCard('Crash!', _why, const Color(0xFFF87171), [StudioButton(icon: Icons.replay_rounded, label: 'Try again', color: const Color(0xFF4ADE80), onTap: () => setState(_reset))]),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'WORLD', children: [for (var i = 0; i < _kLanderWorlds.length; i++) StudioChip(label: i <= _unlocked ? _kLanderWorlds[i].name : '🔒', selected: _world == i, color: _kLanderWorlds[i].color, onTap: () {
              if (i <= _unlocked) setState(() {
                    _world = i;
                    _state = 'ready';
                  });
            })]),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          _btn(Icons.rotate_left_rounded, (v) => _left = v, _left),
          const SizedBox(width: 12),
          _btn(Icons.local_fire_department_rounded, (v) => _thrust = v, _thrust, size: 130),
          const SizedBox(width: 12),
          _btn(Icons.rotate_right_rounded, (v) => _right = v, _right),
        ]),
      ]),
    );
  }
}

class _LanderPainter extends CustomPainter {
  _LanderPainter(this.s);
  final _NgmyRocketLanderStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    final w = _kLanderWorlds[s._world];
    canvas.drawRect(Offset.zero & size, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [const Color(0xFF02030A), Color.lerp(const Color(0xFF0B1030), w.color, 0.25)!]).createShader(Offset.zero & size));
    final rnd = math.Random(5);
    for (var i = 0; i < 70; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height * 0.8), rnd.nextDouble() * 1.2 + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.2 + rnd.nextDouble() * 0.5));
    }
    final gy = size.height * 0.88;
    final ground = Path()..moveTo(0, gy + 14);
    final gr = math.Random(2);
    for (var x = 0.0; x <= size.width; x += 18) {
      final px = x / size.width;
      final onPadZone = (px - s._padX).abs() < s._padW / 2 + 0.02;
      ground.lineTo(x, gy + (onPadZone ? 14 : 14 - gr.nextDouble() * 18));
    }
    ground..lineTo(size.width, size.height)..lineTo(0, size.height)..close();
    canvas.drawPath(ground, Paint()..color = Color.lerp(w.color, Colors.black, 0.6)!);
    final pad = Rect.fromCenter(center: Offset(s._padX * size.width, gy + 10), width: s._padW * size.width, height: 8);
    canvas.drawRRect(RRect.fromRectAndRadius(pad, const Radius.circular(4)), Paint()..color = const Color(0xFF22C55E));
    canvas.drawRRect(RRect.fromRectAndRadius(pad.inflate(2), const Radius.circular(5)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withValues(alpha: 0.5 + 0.3 * math.sin(s._t * 4)));
    if (s._state == 'ready') return;
    final c = Offset(s._p.dx * size.width, s._p.dy * size.height);
    canvas.save();
    canvas.translate(c.dx, c.dy);
    canvas.rotate(s._angle);
    if (s._state == 'crashed') {
      canvas.drawCircle(Offset.zero, 34, Paint()..color = const Color(0xFFFB923C).withValues(alpha: 0.6)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 12));
      canvas.restore();
      return;
    }
    if (s._thrust && s._fuel > 0 && s._state == 'flying') {
      final fl = Path()..moveTo(-8, 18)..lineTo(0, 44 + math.sin(s._t * 40) * 8)..lineTo(8, 18)..close();
      canvas.drawPath(fl, Paint()..color = const Color(0xFFFBBF24));
      canvas.drawPath(Path()..moveTo(-4, 18)..lineTo(0, 32)..lineTo(4, 18)..close(), Paint()..color = Colors.white);
    }
    final body = Path()..moveTo(0, -26)..quadraticBezierTo(14, -10, 11, 18)..lineTo(-11, 18)..quadraticBezierTo(-14, -10, 0, -26)..close();
    canvas.drawPath(body, Paint()..shader = const LinearGradient(colors: [Color(0xFFE5E7EB), Color(0xFF9CA3AF)]).createShader(const Rect.fromLTWH(-14, -26, 28, 44)));
    canvas.drawCircle(const Offset(0, -6), 5, Paint()..color = const Color(0xFF38BDF8));
    canvas.drawPath(Path()..moveTo(-11, 6)..lineTo(-20, 20)..lineTo(-11, 18)..close(), Paint()..color = const Color(0xFFEF4444));
    canvas.drawPath(Path()..moveTo(11, 6)..lineTo(20, 20)..lineTo(11, 18)..close(), Paint()..color = const Color(0xFFEF4444));
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant _LanderPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// DATA SNAKE: gobble the bits, grow longer, do not hit the wall or yourself.
// ═════════════════════════════════════════════════════════════════════════════

class NgmySnakeStudio extends StatefulWidget {
  const NgmySnakeStudio({super.key});

  @override
  State<NgmySnakeStudio> createState() => _NgmySnakeStudioState();
}

class _NgmySnakeStudioState extends State<NgmySnakeStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const cols = 16, rows = 22;
  final List<Point<int>> _snake = [];
  Point<int> _dir = const Point(1, 0);
  Point<int> _next = const Point(1, 0);
  Point<int> _food = const Point(8, 8);
  int _foodBit = 1;
  final StringBuffer _stream = StringBuffer();
  double _acc = 0;
  int _score = 0;
  int _best = 0;
  bool _over = false;
  bool _started = false;
  final math.Random _rnd = math.Random();

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('data_snake').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  void _start() {
    setState(() {
      _snake
        ..clear()
        ..addAll([const Point(5, 11), const Point(4, 11), const Point(3, 11)]);
      _dir = const Point(1, 0);
      _next = const Point(1, 0);
      _score = 0;
      _stream.clear();
      _over = false;
      _started = true;
      _placeFood();
    });
  }

  void _placeFood() {
    do {
      _food = Point(_rnd.nextInt(cols), _rnd.nextInt(rows));
    } while (_snake.contains(_food));
    _foodBit = _rnd.nextInt(2);
  }

  @override
  void onFrame(double dt) {
    if (!_started || _over) return;
    _acc += dt;
    final step = (0.2 - _score * 0.0035).clamp(0.07, 0.2);
    if (_acc < step) return;
    _acc = 0;
    _dir = _next;
    final head = Point(_snake.first.x + _dir.x, _snake.first.y + _dir.y);
    if (head.x < 0 || head.y < 0 || head.x >= cols || head.y >= rows || _snake.contains(head)) {
      _over = true;
      if (_score > _best) {
        _best = _score;
        NgmyProgress.save('data_snake', {'best': _best});
      }
      NgmyTone.play(100, ms: 400, wave: 'saw', volume: 0.4);
      setState(() {});
      return;
    }
    _snake.insert(0, head);
    if (head == _food) {
      _score++;
      _stream.write(_foodBit);
      NgmyTone.play(_foodBit == 1 ? 1100 : 800, ms: 60, wave: 'square', volume: 0.25);
      _placeFood();
    } else {
      _snake.removeLast();
    }
    setState(() {});
  }

  void _turn(Point<int> d) {
    if (d.x == -_dir.x && d.y == -_dir.y) return;
    _next = d;
  }

  @override
  Widget build(BuildContext context) {
    final bits = _stream.toString();
    return StudioPage(
      title: 'DATA SNAKE',
      accent: const Color(0xFF22D3EE),
      help: 'You are a stream of data moving through a computer. Swipe on the screen (or use the arrow buttons) to steer. Eat the glowing bits, the 0s and 1s, to grow longer. Computers store everything, even pictures and music, as long strings of 0s and 1s: the bits you eat are written along the bottom.\n\nDo not hit the wall or your own tail!',
      stage: LayoutBuilder(builder: (context, box) {
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanUpdate: (d) {
            if (d.delta.distance < 3) return;
            if (d.delta.dx.abs() > d.delta.dy.abs()) {
              _turn(Point(d.delta.dx > 0 ? 1 : -1, 0));
            } else {
              _turn(Point(0, d.delta.dy > 0 ? 1 : -1));
            }
          },
          child: Stack(fit: StackFit.expand, children: [
            CustomPaint(size: Size(box.maxWidth, box.maxHeight), painter: _SnakePainter(this)),
            Positioned(left: 16, right: 16, top: 6, child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [_hudBox('SCORE', '$_score'), _hudBox('BEST', '$_best')])),
            Positioned(left: 12, right: 12, bottom: 6, child: Text(bits.length > 36 ? bits.substring(bits.length - 36) : bits, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF22D3EE), fontFamily: 'monospace', fontSize: 14, letterSpacing: 2, fontWeight: FontWeight.w900))),
            if (!_started) _overlayCard('Data Snake', 'Swipe to steer. Eat the bits.', const Color(0xFF22D3EE), [StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: _start)]),
            if (_over) _overlayCard('Game over', 'You ate $_score bits.${_score >= _best && _score > 0 ? '\nNew best!' : ''}', const Color(0xFFF87171), [StudioButton(icon: Icons.replay_rounded, label: 'Play again', color: const Color(0xFF4ADE80), onTap: _start)]),
          ]),
        );
      }),
      tools: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
        for (final b in [(Icons.arrow_back_rounded, const Point(-1, 0)), (Icons.arrow_upward_rounded, const Point(0, -1)), (Icons.arrow_downward_rounded, const Point(0, 1)), (Icons.arrow_forward_rounded, const Point(1, 0))])
          Padding(padding: const EdgeInsets.symmetric(horizontal: 6), child: GestureDetector(onTap: () => _turn(b.$2), child: Container(width: 64, height: 50, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white24)), child: Icon(b.$1, color: Colors.white)))),
      ]),
    );
  }
}

class _SnakePainter extends CustomPainter {
  _SnakePainter(this.s);
  final _NgmySnakeStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF040B12));
    const cols = _NgmySnakeStudioState.cols, rows = _NgmySnakeStudioState.rows;
    final cell = math.min(size.width / cols, (size.height - 70) / rows);
    final ox = (size.width - cell * cols) / 2, oy = 36.0;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(ox, oy, cell * cols, cell * rows), const Radius.circular(8)), Paint()..color = const Color(0xFF07131C));
    final grid = Paint()..color = const Color(0xFF0E7490).withValues(alpha: 0.12);
    for (var x = 0; x <= cols; x++) {
      canvas.drawLine(Offset(ox + x * cell, oy), Offset(ox + x * cell, oy + rows * cell), grid);
    }
    for (var y = 0; y <= rows; y++) {
      canvas.drawLine(Offset(ox, oy + y * cell), Offset(ox + cols * cell, oy + y * cell), grid);
    }
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(ox, oy, cell * cols, cell * rows), const Radius.circular(8)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = const Color(0xFF22D3EE).withValues(alpha: 0.5));
    // Food bit.
    final fc = Offset(ox + (s._food.x + 0.5) * cell, oy + (s._food.y + 0.5) * cell);
    canvas.drawCircle(fc, cell * 0.6, Paint()..color = const Color(0xFF22D3EE).withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    final tp = TextPainter(text: TextSpan(text: '${s._foodBit}', style: TextStyle(color: const Color(0xFF67E8F9), fontSize: cell * 0.9, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, fc - Offset(tp.width / 2, tp.height / 2));
    for (var i = s._snake.length - 1; i >= 0; i--) {
      final p = s._snake[i];
      final r = Rect.fromLTWH(ox + p.x * cell + 1, oy + p.y * cell + 1, cell - 2, cell - 2);
      final t = 1 - i / math.max(1, s._snake.length);
      canvas.drawRRect(RRect.fromRectAndRadius(r, Radius.circular(cell * 0.3)), Paint()..color = Color.lerp(const Color(0xFF065F46), const Color(0xFF4ADE80), t)!);
      if (i == 0) {
        canvas.drawCircle(r.center + Offset(s._dir.x * cell * 0.15 - s._dir.y * cell * 0.2, s._dir.y * cell * 0.15 + s._dir.x * cell * 0.2), cell * 0.1, Paint()..color = Colors.black);
        canvas.drawCircle(r.center + Offset(s._dir.x * cell * 0.15 + s._dir.y * cell * 0.2, s._dir.y * cell * 0.15 - s._dir.x * cell * 0.2), cell * 0.1, Paint()..color = Colors.black);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _SnakePainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// BINARY 2048: slide and merge. Every number also shows in binary, like a computer.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyBinary2048Studio extends StatefulWidget {
  const NgmyBinary2048Studio({super.key});

  @override
  State<NgmyBinary2048Studio> createState() => _NgmyBinary2048StudioState();
}

class _NgmyBinary2048StudioState extends State<NgmyBinary2048Studio> {
  List<List<int>> _g = List.generate(4, (_) => List.filled(4, 0));
  int _score = 0;
  int _best = 0;
  bool _over = false;
  bool _won = false;
  final math.Random _rnd = math.Random();

  @override
  void initState() {
    super.initState();
    _reset();
    NgmyProgress.load('binary_2048').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  void _reset() {
    _g = List.generate(4, (_) => List.filled(4, 0));
    _score = 0;
    _over = false;
    _won = false;
    _spawn();
    _spawn();
  }

  void _spawn() {
    final free = [for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) if (_g[r][c] == 0) (r, c)];
    if (free.isEmpty) return;
    final f = free[_rnd.nextInt(free.length)];
    _g[f.$1][f.$2] = _rnd.nextDouble() < 0.9 ? 2 : 4;
  }

  List<int> _slide(List<int> line) {
    final v = line.where((x) => x != 0).toList();
    final out = <int>[];
    for (var i = 0; i < v.length; i++) {
      if (i + 1 < v.length && v[i] == v[i + 1]) {
        out.add(v[i] * 2);
        _score += v[i] * 2;
        i++;
      } else {
        out.add(v[i]);
      }
    }
    while (out.length < 4) {
      out.add(0);
    }
    return out;
  }

  void _move(int dx, int dy) {
    if (_over) return;
    final before = [for (final r in _g) List<int>.from(r)];
    final g = [for (final r in _g) List<int>.from(r)];
    if (dx != 0) {
      for (var r = 0; r < 4; r++) {
        final line = dx < 0 ? g[r] : g[r].reversed.toList();
        final s = _slide(line);
        g[r] = dx < 0 ? s : s.reversed.toList();
      }
    } else {
      for (var c = 0; c < 4; c++) {
        final col = [for (var r = 0; r < 4; r++) g[r][c]];
        final s = _slide(dy < 0 ? col : col.reversed.toList());
        final res = dy < 0 ? s : s.reversed.toList();
        for (var r = 0; r < 4; r++) {
          g[r][c] = res[r];
        }
      }
    }
    var changed = false;
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if (before[r][c] != g[r][c]) changed = true;
      }
    }
    if (!changed) return;
    setState(() {
      _g = g;
      _spawn();
      NgmyTone.play(500 + (_score % 8) * 60.0, ms: 50, wave: 'square', volume: 0.2);
      if (_score > _best) {
        _best = _score;
        NgmyProgress.save('binary_2048', {'best': _best});
      }
      if (_g.any((r) => r.contains(2048))) _won = true;
      final canMove = _g.any((r) => r.contains(0)) || [for (var r = 0; r < 4; r++) for (var c = 0; c < 4; c++) if ((c < 3 && _g[r][c] == _g[r][c + 1]) || (r < 3 && _g[r][c] == _g[r + 1][c])) 1].isNotEmpty;
      if (!canMove) _over = true;
    });
  }

  static const _tileColors = {2: Color(0xFF38BDF8), 4: Color(0xFF22D3EE), 8: Color(0xFF2DD4BF), 16: Color(0xFF4ADE80), 32: Color(0xFFA3E635), 64: Color(0xFFFACC15), 128: Color(0xFFFB923C), 256: Color(0xFFF87171), 512: Color(0xFFF472B6), 1024: Color(0xFFC084FC), 2048: Color(0xFFFDE047)};

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'BINARY 2048',
      accent: const Color(0xFF38BDF8),
      help: 'Swipe to slide all the tiles. When two tiles with the same number touch, they merge into one tile with double the number. Try to make 2048!\n\nUnder every number you also see it written in binary, the way a computer writes it using only 0s and 1s. Notice that every tile is a power of 2, so its binary is a single 1 followed by zeros.',
      stage: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onPanEnd: (d) {
          final v = d.velocity.pixelsPerSecond;
          if (v.distance < 200) return;
          if (v.dx.abs() > v.dy.abs()) {
            _move(v.dx > 0 ? 1 : -1, 0);
          } else {
            _move(0, v.dy > 0 ? 1 : -1);
          }
        },
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [_hudBox('SCORE', '$_score'), _hudBox('BEST', '$_best')]),
              const SizedBox(height: 14),
              AspectRatio(
                aspectRatio: 1,
                child: Stack(children: [
                  Container(decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(20))),
                  GridView.count(
                    crossAxisCount: 4,
                    padding: const EdgeInsets.all(8),
                    mainAxisSpacing: 8,
                    crossAxisSpacing: 8,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var r = 0; r < 4; r++)
                        for (var c = 0; c < 4; c++)
                          AnimatedContainer(
                            duration: const Duration(milliseconds: 120),
                            decoration: BoxDecoration(color: _g[r][c] == 0 ? Colors.white.withValues(alpha: 0.05) : (_tileColors[_g[r][c]] ?? const Color(0xFFFDE047)), borderRadius: BorderRadius.circular(14)),
                            child: _g[r][c] == 0
                                ? null
                                : Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                                    FittedBox(child: Padding(padding: const EdgeInsets.symmetric(horizontal: 6), child: Text('${_g[r][c]}', style: const TextStyle(color: Colors.black87, fontWeight: FontWeight.w900, fontSize: 26)))),
                                    FittedBox(child: Padding(padding: const EdgeInsets.symmetric(horizontal: 4), child: Text(_g[r][c].toRadixString(2), style: const TextStyle(color: Colors.black54, fontWeight: FontWeight.w800, fontSize: 10, fontFamily: 'monospace')))),
                                  ]),
                          ),
                    ],
                  ),
                  if (_over) Container(decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.7), borderRadius: BorderRadius.circular(20)), alignment: Alignment.center, child: const Text('No moves left', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
                ]),
              ),
              const SizedBox(height: 10),
              Text(_won ? 'You made 2048! Keep going.' : 'Swipe anywhere to move', style: const TextStyle(color: Colors.white54)),
            ]),
          ),
        ),
      ),
      tools: StudioRow(children: [
        StudioButton(icon: Icons.arrow_back_rounded, label: 'Left', onTap: () => _move(-1, 0)),
        StudioButton(icon: Icons.arrow_upward_rounded, label: 'Up', onTap: () => _move(0, -1)),
        StudioButton(icon: Icons.arrow_downward_rounded, label: 'Down', onTap: () => _move(0, 1)),
        StudioButton(icon: Icons.arrow_forward_rounded, label: 'Right', onTap: () => _move(1, 0)),
        StudioButton(icon: Icons.refresh_rounded, label: 'New game', color: const Color(0xFF4ADE80), onTap: () => setState(_reset)),
      ]),
    );
  }
}
