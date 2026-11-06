import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// 5. GRAVITY TOY: drop balls, draw walls, tilt gravity, push things around.
// ═════════════════════════════════════════════════════════════════════════════

class _GBall {
  _GBall(this.p, this.v, this.r, this.color);
  Offset p;
  Offset v;
  final double r;
  final Color color;
}

class NgmyGravityStudio extends StatefulWidget {
  const NgmyGravityStudio({super.key});

  @override
  State<NgmyGravityStudio> createState() => _NgmyGravityStudioState();
}

class _NgmyGravityStudioState extends State<NgmyGravityStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final List<_GBall> _balls = [];
  final List<(Offset, Offset)> _walls = [];
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  String _mode = 'drop';
  String _dir = 'down';
  double _gravity = 900;
  double _bounce = 0.7;
  double _ballSize = 14;
  Offset? _wallStart;
  Offset? _wallEnd;
  Offset? _finger;
  int _lastDrop = 0;
  bool _sound = true;
  int _lastPlink = 0;

  /// A soft note, higher to the right, louder for a harder hit.
  void _plink(Offset at, double speed) {
    if (!_sound || speed < 120 || nowMs - _lastPlink < 55) return;
    _lastPlink = nowMs;
    const pent = [0, 2, 4, 7, 9];
    final i = ((at.dx / (_size.width <= 0 ? 1 : _size.width)) * 10).floor().clamp(0, 9);
    NgmyTone.playNote('bell', pent[i % 5] + 12 * (i ~/ 5) + 12, ms: 500, volume: (0.15 + speed / 1400).clamp(0.15, 0.6));
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  Offset get _g {
    switch (_dir) {
      case 'up':
        return Offset(0, -_gravity);
      case 'left':
        return Offset(-_gravity, 0);
      case 'right':
        return Offset(_gravity, 0);
      case 'zero':
        return Offset.zero;
      default:
        return Offset(0, _gravity);
    }
  }

  void _spawn(Offset p, {double? r}) {
    final size = r ?? _ballSize * (0.8 + _rnd.nextDouble() * 0.5);
    final color = HSVColor.fromAHSV(1, _rnd.nextDouble() * 360, 0.65, 1).toColor();
    _balls.add(_GBall(p, Offset((_rnd.nextDouble() - 0.5) * 120, 0), size, color));
    if (_balls.length > 140) _balls.removeAt(0);
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    final g = _g;
    const steps = 3;
    final h = dt / steps;
    for (var s = 0; s < steps; s++) {
      for (final b in _balls) {
        b.v += g * h;
        b.v = b.v * (1 - 0.02 * h * 60 * 0.1);
        b.p += b.v * h;
        // The four sides of the box.
        if (b.p.dx < b.r) {
          b.p = Offset(b.r, b.p.dy);
          b.v = Offset(-b.v.dx * _bounce, b.v.dy * 0.98);
        }
        if (b.p.dx > _size.width - b.r) {
          b.p = Offset(_size.width - b.r, b.p.dy);
          b.v = Offset(-b.v.dx * _bounce, b.v.dy * 0.98);
        }
        if (b.p.dy > _size.height - b.r) {
          b.p = Offset(b.p.dx, _size.height - b.r);
          _plink(b.p, b.v.dy.abs());
          b.v = Offset(b.v.dx * 0.98, -b.v.dy * _bounce);
        }
        if (b.p.dy < b.r) {
          b.p = Offset(b.p.dx, b.r);
          b.v = Offset(b.v.dx * 0.98, -b.v.dy * _bounce);
        }
        // The walls you drew.
        for (final w in _walls) {
          final ab = w.$2 - w.$1;
          final len2 = ab.dx * ab.dx + ab.dy * ab.dy;
          if (len2 < 1) continue;
          final t = (((b.p - w.$1).dx * ab.dx + (b.p - w.$1).dy * ab.dy) / len2).clamp(0.0, 1.0);
          final q = w.$1 + ab * t;
          final d = b.p - q;
          final dist = d.distance;
          if (dist < b.r + 3 && dist > 0.001) {
            final n = d / dist;
            b.p = q + n * (b.r + 3);
            final vn = b.v.dx * n.dx + b.v.dy * n.dy;
            if (vn < 0) {
              _plink(b.p, -vn);
              b.v = b.v - n * (vn * (1 + _bounce));
            }
          }
        }
      }
      // Balls bump into each other.
      for (var i = 0; i < _balls.length; i++) {
        for (var j = i + 1; j < _balls.length; j++) {
          final a = _balls[i], b = _balls[j];
          final d = b.p - a.p;
          final dist = d.distance;
          final min = a.r + b.r;
          if (dist < min && dist > 0.001) {
            final n = d / dist;
            final push = (min - dist) / 2;
            a.p -= n * push;
            b.p += n * push;
            final rel = b.v - a.v;
            final vn = rel.dx * n.dx + rel.dy * n.dy;
            if (vn < 0) {
              _plink((a.p + b.p) / 2, -vn * 1.2);
              final imp = n * (vn * (1 + _bounce) / 2);
              a.v += imp;
              b.v -= imp;
            }
          }
        }
      }
    }
    // Pushing with a finger.
    if (_mode == 'push' && _finger != null) {
      for (final b in _balls) {
        final d = b.p - _finger!;
        final dist = d.distance;
        if (dist < 110 && dist > 0.5) b.v += d / dist * ((110 - dist) * 22) * dt;
      }
    }
    if (_mode == 'drop' && _finger != null && nowMs - _lastDrop > 70) {
      _lastDrop = nowMs;
      _spawn(_finger!);
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'GRAVITY TOY',
      accent: const Color(0xFF38BDF8),
      help: 'A box of balls you control.\n\nDrop: touch and hold to pour balls out.\nWall: drag a line to build a ramp or a cup for the balls.\nPush: drag your finger through the balls to blow them around.\n\nChange the gravity direction (even turn it off), make the balls bouncier, or press Rain for a shower. Share saves a picture.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'gravity-toy'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) {
              _finger = d.localPosition;
              if (_mode == 'wall') {
                _wallStart = d.localPosition;
                _wallEnd = d.localPosition;
              }
            },
            onPanUpdate: (d) {
              _finger = d.localPosition;
              if (_mode == 'wall') _wallEnd = d.localPosition;
            },
            onPanEnd: (_) {
              if (_mode == 'wall' && _wallStart != null && _wallEnd != null && (_wallEnd! - _wallStart!).distance > 12) _walls.add((_wallStart!, _wallEnd!));
              _finger = null;
              _wallStart = null;
              _wallEnd = null;
            },
            onTapDown: (d) {
              _finger = d.localPosition;
              if (_mode == 'drop') _spawn(d.localPosition);
            },
            onTapUp: (_) => _finger = null,
            onTapCancel: () => _finger = null,
            child: CustomPaint(size: _size, painter: _GravityPainter(_balls, _walls, _wallStart, _wallEnd, _mode == 'push' ? _finger : null)),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'TOUCH', children: [
          for (final m in const [('drop', 'Drop', Icons.water_drop_rounded), ('wall', 'Wall', Icons.show_chart_rounded), ('push', 'Push', Icons.air_rounded)])
            StudioChip(label: m.$2, icon: m.$3, selected: _mode == m.$1, color: const Color(0xFF38BDF8), onTap: () => setState(() => _mode = m.$1)),
        ]),
        StudioRow(label: 'GRAVITY', children: [
          for (final d in const [('down', 'Down', Icons.arrow_downward_rounded), ('up', 'Up', Icons.arrow_upward_rounded), ('left', 'Left', Icons.arrow_back_rounded), ('right', 'Right', Icons.arrow_forward_rounded), ('zero', 'Off', Icons.blur_on_rounded)])
            StudioChip(label: d.$2, icon: d.$3, selected: _dir == d.$1, color: const Color(0xFF38BDF8), onTap: () => setState(() => _dir = d.$1)),
        ]),
        StudioSlider(label: 'Strength', value: _gravity, min: 100, max: 2200, display: '${(_gravity / 90).round()}', onChanged: (v) => setState(() => _gravity = v), color: const Color(0xFF38BDF8)),
        StudioSlider(label: 'Bounce', value: _bounce, min: 0.1, max: 0.98, display: '${(_bounce * 100).round()}%', onChanged: (v) => setState(() => _bounce = v), color: const Color(0xFF38BDF8)),
        StudioSlider(label: 'Ball size', value: _ballSize, min: 6, max: 30, display: _ballSize.round().toString(), onChanged: (v) => setState(() => _ballSize = v), color: const Color(0xFF38BDF8)),
        StudioRow(children: [
          StudioChip(label: 'Sound', icon: _sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, selected: _sound, color: const Color(0xFF38BDF8), onTap: () => setState(() => _sound = !_sound)),
          StudioButton(icon: Icons.grain_rounded, label: 'Rain', color: const Color(0xFF38BDF8), onTap: () {
            for (var i = 0; i < 28; i++) {
              _spawn(Offset(20 + _rnd.nextDouble() * (_size.width - 40), 10 + _rnd.nextDouble() * 60));
            }
          }),
          StudioButton(icon: Icons.layers_clear_rounded, label: 'Clear balls', onTap: () => setState(_balls.clear)),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear walls', color: const Color(0xFFF87171), onTap: () => setState(_walls.clear)),
        ]),
      ]),
    );
  }
}

class _GravityPainter extends CustomPainter {
  _GravityPainter(this.balls, this.walls, this.ws, this.we, this.pushAt);
  final List<_GBall> balls;
  final List<(Offset, Offset)> walls;
  final Offset? ws;
  final Offset? we;
  final Offset? pushAt;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF0B0B10), Color(0xFF10131A)]).createShader(Offset.zero & size));
    final wall = Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeWidth = 6..color = const Color(0xFF38BDF8);
    for (final w in walls) {
      canvas.drawLine(w.$1, w.$2, Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeWidth = 12..color = const Color(0xFF38BDF8).withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawLine(w.$1, w.$2, wall);
    }
    if (ws != null && we != null) canvas.drawLine(ws!, we!, Paint()..strokeWidth = 4..strokeCap = StrokeCap.round..color = Colors.white54);
    for (final b in balls) {
      canvas.drawCircle(b.p, b.r + 4, Paint()..color = b.color.withValues(alpha: 0.28)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawCircle(b.p, b.r, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.45), colors: [Colors.white, b.color, Color.lerp(b.color, Colors.black, 0.4)!], stops: const [0, 0.45, 1]).createShader(Rect.fromCircle(center: b.p, radius: b.r)));
    }
    if (pushAt != null) canvas.drawCircle(pushAt!, 110, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white24);
  }

  @override
  bool shouldRepaint(covariant _GravityPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 8. FIREWORK DESIGNER: choose a shape and colours, then light the sky.
// ═════════════════════════════════════════════════════════════════════════════

class _Rocket {
  _Rocket(this.p, this.target, this.shape, this.palette, this.power);
  Offset p;
  final Offset target;
  final String shape;
  final int palette;
  final double power;
  final List<Offset> trail = [];
}

class _FP {
  _FP(this.p, this.v, this.c, this.born, this.life, this.size, this.fall);
  Offset p;
  Offset v;
  final Color c;
  final int born;
  final int life;
  final double size;
  final double fall;
  Offset prev = Offset.zero;
}

class NgmyFireworkStudio extends StatefulWidget {
  const NgmyFireworkStudio({super.key});

  @override
  State<NgmyFireworkStudio> createState() => _NgmyFireworkStudioState();
}

class _NgmyFireworkStudioState extends State<NgmyFireworkStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final List<_Rocket> _rockets = [];
  final List<_FP> _parts = [];
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  String _shape = 'peony';
  int _palette = 0;
  double _power = 1.0;
  bool _auto = false;
  bool _sound = true;
  int _lastAuto = 0;
  final List<int> _queue = [];

  static const _palettes = <List<Color>>[
    [Color(0xFFF87171), Color(0xFFFACC15), Color(0xFFFFFFFF)],
    [Color(0xFF22D3EE), Color(0xFFA78BFA), Color(0xFFF472B6)],
    [Color(0xFFFDE047), Color(0xFFF59E0B), Color(0xFFFFF7ED)],
    [Color(0xFF4ADE80), Color(0xFF38BDF8), Color(0xFFFACC15)],
  ];

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  void _launch(Offset target, {String? shape, int? palette}) {
    if (_size == Size.zero) return;
    _rockets.add(_Rocket(Offset(_size.width * (0.3 + _rnd.nextDouble() * 0.4), _size.height), target, shape ?? _shape, palette ?? _palette, _power));
    if (_sound) NgmyTone.play(260, ms: 380, wave: 'tri', sweep: 2.2, volume: 0.25);
  }

  void _explode(_Rocket r) {
    final pal = _palettes[r.palette % _palettes.length];
    final c = r.target;
    final scale = 120 + 160 * r.power;
    void add(Offset v, Color col, {int life = 1300, double size = 3, double fall = 90}) {
      _parts.add(_FP(c, v, col, nowMs, life + _rnd.nextInt(300), size, fall)..prev = c);
    }

    switch (r.shape) {
      case 'ring':
        for (var i = 0; i < 56; i++) {
          final a = i / 56 * math.pi * 2;
          add(Offset(math.cos(a), math.sin(a)) * scale, pal[i % pal.length]);
        }
      case 'heart':
        for (var i = 0; i < 70; i++) {
          final t = i / 70 * math.pi * 2;
          final x = 16 * math.pow(math.sin(t), 3).toDouble();
          final y = -(13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t));
          add(Offset(x, y) * (scale / 17), const Color(0xFFF472B6), size: 3.4);
        }
      case 'spiral':
        for (var i = 0; i < 90; i++) {
          final a = i * 0.45;
          add(Offset(math.cos(a), math.sin(a)) * (scale * (0.2 + i / 90 * 0.9)), pal[i % pal.length], life: 1500);
        }
      case 'willow':
        for (var i = 0; i < 80; i++) {
          final a = _rnd.nextDouble() * math.pi * 2;
          add(Offset(math.cos(a), math.sin(a)) * (scale * (0.3 + _rnd.nextDouble() * 0.6)), const Color(0xFFFDE047), life: 2600, size: 2.4, fall: 160);
        }
      case 'star':
        for (var i = 0; i < 70; i++) {
          final a = i / 70 * math.pi * 2;
          final k = 0.55 + 0.45 * (math.cos(a * 5) * 0.5 + 0.5);
          add(Offset(math.cos(a), math.sin(a)) * scale * k, pal[i % pal.length], size: 3.2);
        }
      default:
        for (var i = 0; i < 90; i++) {
          final a = _rnd.nextDouble() * math.pi * 2;
          add(Offset(math.cos(a), math.sin(a)) * (scale * (0.2 + _rnd.nextDouble() * 0.85)), pal[_rnd.nextInt(pal.length)]);
        }
    }
    if (_sound) {
      NgmyTone.play(110, ms: 220, wave: 'noise', volume: 0.45);
      HapticFeedback.lightImpact();
    }
    if (_parts.length > 1800) _parts.removeRange(0, _parts.length - 1800);
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    for (final r in _rockets.toList()) {
      final d = r.target - r.p;
      final dist = d.distance;
      if (dist < 14) {
        _explode(r);
        _rockets.remove(r);
      } else {
        r.p += d / dist * math.min(dist, 620 * dt);
        r.trail.add(r.p);
        if (r.trail.length > 14) r.trail.removeAt(0);
      }
    }
    for (final p in _parts) {
      p.prev = p.p;
      p.v = Offset(p.v.dx * (1 - 1.7 * dt), p.v.dy * (1 - 1.7 * dt) + p.fall * dt);
      p.p += p.v * dt;
    }
    _parts.removeWhere((p) => nowMs - p.born > p.life);
    if (_auto && nowMs - _lastAuto > 650) {
      _lastAuto = nowMs;
      _launch(Offset(_size.width * (0.15 + _rnd.nextDouble() * 0.7), _size.height * (0.12 + _rnd.nextDouble() * 0.4)), shape: const ['peony', 'ring', 'heart', 'spiral', 'willow', 'star'][_rnd.nextInt(6)], palette: _rnd.nextInt(_palettes.length));
    }
    if (_queue.isNotEmpty && nowMs - _lastAuto > 160) {
      _lastAuto = nowMs;
      _queue.removeLast();
      _launch(Offset(_size.width * (0.1 + _rnd.nextDouble() * 0.8), _size.height * (0.1 + _rnd.nextDouble() * 0.45)), shape: const ['peony', 'ring', 'heart', 'spiral', 'willow', 'star'][_rnd.nextInt(6)], palette: _rnd.nextInt(_palettes.length));
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'FIREWORK DESIGNER',
      accent: const Color(0xFFFACC15),
      help: 'Tap anywhere in the sky and a rocket flies there and bursts.\n\nPick the shape (ball, ring, heart, spiral, weeping willow or star), the colours and how big it is. Auto show launches by itself, and Finale lights a whole volley.\n\nTurn the sound on for the whoosh and the bang.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'fireworks'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapDown: (d) => _launch(d.localPosition),
            onPanUpdate: (d) {
              if (nowMs - _lastAuto > 220) {
                _lastAuto = nowMs;
                _launch(d.localPosition);
              }
            },
            child: CustomPaint(size: _size, painter: _FireworkPainter(_rockets, _parts, nowMs)),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'SHAPE', children: [
          for (final s in const [('peony', 'Ball', Icons.brightness_7_rounded), ('ring', 'Ring', Icons.circle_outlined), ('heart', 'Heart', Icons.favorite_rounded), ('spiral', 'Spiral', Icons.cyclone_rounded), ('willow', 'Willow', Icons.grass_rounded), ('star', 'Star', Icons.star_rounded)])
            StudioChip(label: s.$2, icon: s.$3, selected: _shape == s.$1, color: const Color(0xFFFACC15), onTap: () => setState(() => _shape = s.$1)),
        ]),
        StudioRow(label: 'COLOUR', children: [
          for (var i = 0; i < _palettes.length; i++)
            GestureDetector(
              onTap: () => setState(() => _palette = i),
              child: Container(
                margin: const EdgeInsets.only(right: 10),
                padding: const EdgeInsets.all(3),
                decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), border: Border.all(color: _palette == i ? Colors.white : Colors.white24, width: _palette == i ? 2 : 1)),
                child: Row(children: [for (final c in _palettes[i]) Container(width: 14, height: 22, color: c)]),
              ),
            ),
        ]),
        StudioSlider(label: 'Size', value: _power, min: 0.4, max: 1.8, display: '${_power.toStringAsFixed(1)}x', onChanged: (v) => setState(() => _power = v), color: const Color(0xFFFACC15)),
        StudioRow(children: [
          StudioChip(label: 'Auto show', icon: Icons.play_circle_rounded, selected: _auto, color: const Color(0xFFFACC15), onTap: () => setState(() => _auto = !_auto)),
          StudioChip(label: 'Sound', icon: _sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, selected: _sound, color: const Color(0xFFFACC15), onTap: () => setState(() => _sound = !_sound)),
          StudioButton(icon: Icons.celebration_rounded, label: 'Finale', color: const Color(0xFFFACC15), onTap: () => setState(() => _queue.addAll(List.filled(18, 1)))),
        ]),
      ]),
    );
  }
}

class _FireworkPainter extends CustomPainter {
  _FireworkPainter(this.rockets, this.parts, this.now);
  final List<_Rocket> rockets;
  final List<_FP> parts;
  final int now;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF05050A), Color(0xFF0E1020)]).createShader(Offset.zero & size));
    final rnd = math.Random(9);
    for (var i = 0; i < 50; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height * 0.7), rnd.nextDouble() * 1.1 + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.2 + rnd.nextDouble() * 0.4));
    }
    // A skyline at the bottom so the sky has a place.
    final sky = Path()..moveTo(0, size.height);
    var x = 0.0;
    final sr = math.Random(2);
    while (x < size.width) {
      final w = 14 + sr.nextDouble() * 30;
      final h = 16 + sr.nextDouble() * 38;
      sky.lineTo(x, size.height - h);
      sky.lineTo(x + w, size.height - h);
      x += w;
    }
    sky.lineTo(size.width, size.height);
    sky.close();
    canvas.drawPath(sky, Paint()..color = const Color(0xFF05050A));
    for (final r in rockets) {
      for (var i = 1; i < r.trail.length; i++) {
        canvas.drawLine(r.trail[i - 1], r.trail[i], Paint()..strokeWidth = 2.5 * i / r.trail.length..color = Colors.white.withValues(alpha: i / r.trail.length));
      }
      canvas.drawCircle(r.p, 3, Paint()..color = Colors.white);
    }
    for (final p in parts) {
      final k = ((now - p.born) / p.life).clamp(0.0, 1.0);
      final a = (1 - k * k).clamp(0.0, 1.0);
      canvas.drawLine(p.prev, p.p, Paint()..strokeWidth = p.size * (1 - 0.5 * k)..strokeCap = StrokeCap.round..color = p.c.withValues(alpha: a * 0.6));
      canvas.drawCircle(p.p, p.size * (1 - 0.4 * k), Paint()..color = Color.lerp(Colors.white, p.c, k)!.withValues(alpha: a));
    }
  }

  @override
  bool shouldRepaint(covariant _FireworkPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 10. BEAT MAKER: tap squares to build a loop and hear it play.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyBeatStudio extends StatefulWidget {
  const NgmyBeatStudio({super.key});

  @override
  State<NgmyBeatStudio> createState() => _NgmyBeatStudioState();
}

class _NgmyBeatStudioState extends State<NgmyBeatStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const _rows = ['Kick', 'Snare', 'Hat', 'Clap', 'Bell'];
  static const _colors = [Color(0xFFF87171), Color(0xFFFACC15), Color(0xFF38BDF8), Color(0xFFA78BFA), Color(0xFF4ADE80)];
  static const _pent = [0, 2, 4, 7, 9, 12, 9, 7];
  final List<List<bool>> _grid = [for (var r = 0; r < 5; r++) List.filled(16, false)];
  final List<int> _flash = List.filled(5, -1000);
  bool _playing = true;
  bool _sound = true;
  double _bpm = 110;
  int _step = -1;
  double _acc = 0;
  int _kickFlash = -1000;

  @override
  void initState() {
    super.initState();
    _preset('house');
    startFrames();
  }

  void _preset(String name) {
    for (final r in _grid) {
      r.fillRange(0, 16, false);
    }
    switch (name) {
      case 'house':
        for (var i = 0; i < 16; i += 4) {
          _grid[0][i] = true;
        }
        for (var i = 2; i < 16; i += 4) {
          _grid[2][i] = true;
        }
        _grid[1][4] = true;
        _grid[1][12] = true;
        _grid[4][3] = true;
        _grid[4][7] = true;
        _grid[4][10] = true;
      case 'hiphop':
        for (final i in [0, 7, 10]) {
          _grid[0][i] = true;
        }
        for (final i in [4, 12]) {
          _grid[1][i] = true;
        }
        for (var i = 0; i < 16; i += 2) {
          _grid[2][i] = true;
        }
        _grid[3][12] = true;
        _grid[4][14] = true;
      case 'random':
        final r = math.Random();
        for (var y = 0; y < 5; y++) {
          for (var x = 0; x < 16; x++) {
            _grid[y][x] = r.nextDouble() < (y == 0 ? 0.25 : y == 2 ? 0.4 : 0.18);
          }
        }
      default:
        break;
    }
  }

  void _hit(int row, int step) {
    _flash[row] = nowMs;
    if (row == 0) {
      _kickFlash = nowMs;
      HapticFeedback.lightImpact();
    }
    if (!_sound) return;
    switch (row) {
      case 0:
        NgmyTone.play(95, ms: 190, sweep: 1.8, volume: 0.9);
      case 1:
        NgmyTone.play(220, ms: 130, wave: 'noise', volume: 0.55);
      case 2:
        NgmyTone.play(5000, ms: 45, wave: 'noise', volume: 0.3);
      case 3:
        NgmyTone.play(1100, ms: 90, wave: 'noise', volume: 0.4);
      default:
        NgmyTone.play(NgmyTone.note(_pent[step % _pent.length] + 12), ms: 260, wave: 'tri', volume: 0.45);
    }
  }

  @override
  void onFrame(double dt) {
    if (!_playing) return;
    _acc += dt;
    final stepLen = 60 / _bpm / 4;
    while (_acc >= stepLen) {
      _acc -= stepLen;
      _step = (_step + 1) % 16;
      for (var r = 0; r < 5; r++) {
        if (_grid[r][_step]) _hit(r, _step);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final kick = (1 - ((nowMs - _kickFlash) / 260)).clamp(0.0, 1.0);
    return StudioPage(
      title: 'BEAT MAKER',
      accent: const Color(0xFF4ADE80),
      help: 'Each row is an instrument and each square is a beat in a loop of 16. Tap squares to turn them on. The glowing line moves along and plays everything it touches.\n\nKick is the deep thump, Snare and Clap are the crack, Hat is the tick, and Bell plays a tune. Start from House or Hip-hop, or press Random. Change the speed with Tempo.\n\nIf you hear nothing, check your phone is not on silent and that Sound is on.',
      stage: Column(children: [
        Container(
          height: 90,
          alignment: Alignment.center,
          child: Container(
            width: 56 + 26 * kick,
            height: 56 + 26 * kick,
            decoration: BoxDecoration(shape: BoxShape.circle, gradient: const RadialGradient(colors: [Color(0xFFBBF7D0), Color(0xFF16A34A)]), boxShadow: [BoxShadow(color: const Color(0xFF4ADE80).withValues(alpha: 0.35 + 0.5 * kick), blurRadius: 24 + 30 * kick)]),
            child: const Icon(Icons.music_note_rounded, color: Colors.white),
          ),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
            child: Column(children: [
              for (var r = 0; r < 5; r++)
                Expanded(
                  child: Row(children: [
                    SizedBox(width: 44, child: Text(_rows[r], style: TextStyle(color: _colors[r], fontWeight: FontWeight.w900, fontSize: 10.5))),
                    for (var s = 0; s < 16; s++)
                      Expanded(
                        child: GestureDetector(
                          onTap: () {
                            setState(() => _grid[r][s] = !_grid[r][s]);
                            if (_grid[r][s]) _hit(r, s);
                          },
                          child: Builder(builder: (_) {
                            final on = _grid[r][s];
                            final playhead = s == _step && _playing;
                            final pulse = on && (nowMs - _flash[r] < 200 && s == _step) ? 1.0 : 0.0;
                            return Container(
                              margin: EdgeInsets.fromLTRB(s % 4 == 0 && s > 0 ? 4 : 1.5, 2, 1.5, 2),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(6),
                                color: on ? Color.lerp(_colors[r], Colors.white, pulse * 0.5) : (s % 4 == 0 ? Colors.white.withValues(alpha: 0.1) : Colors.white.withValues(alpha: 0.06)),
                                border: Border.all(color: playhead ? Colors.white : Colors.transparent, width: 1.6),
                                boxShadow: on ? [BoxShadow(color: _colors[r].withValues(alpha: 0.4 + 0.4 * pulse), blurRadius: 8 + 8 * pulse)] : null,
                              ),
                            );
                          }),
                        ),
                      ),
                  ]),
                ),
            ]),
          ),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Tempo', value: _bpm, min: 70, max: 180, display: '${_bpm.round()}', onChanged: (v) => setState(() => _bpm = v), color: const Color(0xFF4ADE80)),
        StudioRow(children: [
          StudioButton(icon: _playing ? Icons.pause_rounded : Icons.play_arrow_rounded, label: _playing ? 'Pause' : 'Play', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _playing = !_playing;
                if (!_playing) _step = -1;
              })),
          StudioChip(label: 'Sound', icon: _sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, selected: _sound, color: const Color(0xFF4ADE80), onTap: () => setState(() => _sound = !_sound)),
          StudioButton(icon: Icons.home_rounded, label: 'House', onTap: () => setState(() => _preset('house'))),
          StudioButton(icon: Icons.mic_rounded, label: 'Hip-hop', onTap: () => setState(() => _preset('hiphop'))),
          StudioButton(icon: Icons.casino_rounded, label: 'Random', onTap: () => setState(() => _preset('random'))),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(() => _preset('empty'))),
        ]),
      ]),
    );
  }
}
