import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

/// A ticker that gives the studios a steady time step.
mixin _Frames<T extends StatefulWidget> on State<T>, SingleTickerProviderStateMixin<T> {
  late final Ticker _frameTicker;
  Duration _lastFrame = Duration.zero;
  int nowMs = 0;

  void onFrame(double dt);

  void startFrames() {
    _frameTicker = createTicker((e) {
      final dt = ((e - _lastFrame).inMicroseconds / 1e6).clamp(0.0, 0.04);
      _lastFrame = e;
      nowMs = e.inMilliseconds;
      onFrame(dt);
      if (mounted) setState(() {});
    })..start();
  }

  @override
  void dispose() {
    _frameTicker.dispose();
    super.dispose();
  }
}

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

class _NgmyGravityStudioState extends State<NgmyGravityStudio> with SingleTickerProviderStateMixin, _Frames {
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
            if (vn < 0) b.v = b.v - n * (vn * (1 + _bounce));
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
// 6. ORBIT STUDIO: slingshot planets around a sun and watch gravity bend their paths.
// ═════════════════════════════════════════════════════════════════════════════

class _Planet {
  _Planet(this.p, this.v, this.r, this.color);
  Offset p;
  Offset v;
  final double r;
  final Color color;
  final List<Offset> trail = [];
}

class NgmyOrbitStudio extends StatefulWidget {
  const NgmyOrbitStudio({super.key});

  @override
  State<NgmyOrbitStudio> createState() => _NgmyOrbitStudioState();
}

class _NgmyOrbitStudioState extends State<NgmyOrbitStudio> with SingleTickerProviderStateMixin, _Frames {
  final GlobalKey _shot = GlobalKey();
  final List<_Planet> _planets = [];
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  double _sun = 1.0;
  double _speed = 1.0;
  bool _pull = false;
  bool _trails = true;
  double _planetSize = 7;
  Offset? _aimStart;
  Offset? _aimEnd;

  Offset get _center => Offset(_size.width / 2, _size.height / 2);
  double get _mu => 1000000.0 * _sun;

  Color _randomColor() => HSVColor.fromAHSV(1, _rnd.nextDouble() * 360, 0.6, 1).toColor();

  void _circular(double r, double angle, {double eccentric = 1.0, bool reverse = false}) {
    final c = _center;
    final p = c + Offset(math.cos(angle), math.sin(angle)) * r;
    final speed = math.sqrt(_mu / r) * eccentric;
    final dir = Offset(-math.sin(angle), math.cos(angle)) * (reverse ? -1 : 1);
    _planets.add(_Planet(p, dir * speed, _planetSize * (0.6 + _rnd.nextDouble() * 0.9), _randomColor()));
  }

  void _solar() {
    _planets.clear();
    final m = math.min(_size.width, _size.height) / 2 - 16;
    for (var i = 0; i < 6; i++) {
      _circular(40 + (m - 40) * i / 5, _rnd.nextDouble() * math.pi * 2);
    }
  }

  void _comet() {
    _circular(math.min(_size.width, _size.height) * 0.42, _rnd.nextDouble() * math.pi * 2, eccentric: 0.45);
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    if (_planets.isEmpty && nowMs < 300) return;
    final c = _center;
    final steps = 4;
    final h = dt * _speed / steps;
    for (var s = 0; s < steps; s++) {
      for (final p in _planets) {
        final d = c - p.p;
        final r2 = math.max(d.dx * d.dx + d.dy * d.dy, 400.0);
        final r = math.sqrt(r2);
        var a = d / r * (_mu / r2);
        if (_pull) {
          for (final o in _planets) {
            if (identical(o, p)) continue;
            final dd = o.p - p.p;
            final rr = math.max(dd.dx * dd.dx + dd.dy * dd.dy, 400.0);
            a += dd / math.sqrt(rr) * (_mu * 0.02 / rr) * (o.r / 7);
          }
        }
        p.v += a * h;
        p.p += p.v * h;
      }
    }
    for (final p in _planets) {
      if (_trails) {
        if (p.trail.isEmpty || (p.trail.last - p.p).distance > 3) p.trail.add(p.p);
        if (p.trail.length > 260) p.trail.removeAt(0);
      } else {
        p.trail.clear();
      }
    }
    // A planet that hits the sun is swallowed, and one that flies far away is lost.
    _planets.removeWhere((p) => (p.p - c).distance < 16 || (p.p - c).distance > _size.longestSide * 2.2);
  }

  /// Where a planet would go if you let go now: shown as a dotted line while you aim.
  List<Offset> _predict(Offset from, Offset v) {
    final out = <Offset>[];
    var p = from;
    var vel = v;
    final c = _center;
    for (var i = 0; i < 220; i++) {
      final d = c - p;
      final r2 = math.max(d.dx * d.dx + d.dy * d.dy, 400.0);
      final r = math.sqrt(r2);
      vel += d / r * (_mu / r2) * (1 / 60);
      p += vel * (1 / 60);
      if (i % 3 == 0) out.add(p);
      if (r < 16) break;
    }
    return out;
  }

  Offset get _launchVelocity => _aimStart == null || _aimEnd == null ? Offset.zero : (_aimStart! - _aimEnd!) * 2.2;

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'ORBIT STUDIO',
      accent: const Color(0xFFFB923C),
      help: 'A sun in the middle pulls everything toward it.\n\nPress anywhere, drag backwards like a slingshot and let go to launch a planet. A dotted line shows where it will fly before you let go. Aim sideways and it will circle the sun; aim straight in and it crashes.\n\nTry Solar system, Comet, or make the sun heavier. Turn on Planets pull each other for wild paths.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'orbits'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) {
              _aimStart = d.localPosition;
              _aimEnd = d.localPosition;
            },
            onPanUpdate: (d) => _aimEnd = d.localPosition,
            onPanEnd: (_) {
              if (_aimStart != null && (_aimStart! - _aimEnd!).distance > 8) {
                _planets.add(_Planet(_aimStart!, _launchVelocity, _planetSize, _randomColor()));
                HapticFeedback.lightImpact();
              }
              _aimStart = null;
              _aimEnd = null;
            },
            child: CustomPaint(
              size: _size,
              painter: _OrbitPainter(_planets, _center, _sun, _aimStart, _aimEnd, _aimStart == null ? const [] : _predict(_aimStart!, _launchVelocity), nowMs),
            ),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Sun mass', value: _sun, min: 0.3, max: 2.5, display: '${_sun.toStringAsFixed(1)}x', onChanged: (v) => setState(() => _sun = v), color: const Color(0xFFFB923C)),
        StudioSlider(label: 'Time', value: _speed, min: 0.2, max: 3, display: '${_speed.toStringAsFixed(1)}x', onChanged: (v) => setState(() => _speed = v), color: const Color(0xFFFB923C)),
        StudioSlider(label: 'Planet size', value: _planetSize, min: 3, max: 16, display: _planetSize.round().toString(), onChanged: (v) => setState(() => _planetSize = v), color: const Color(0xFFFB923C)),
        StudioRow(children: [
          StudioChip(label: 'Trails', icon: Icons.timeline_rounded, selected: _trails, color: const Color(0xFFFB923C), onTap: () => setState(() => _trails = !_trails)),
          StudioChip(label: 'Planets pull each other', icon: Icons.hub_rounded, selected: _pull, color: const Color(0xFFFB923C), onTap: () => setState(() => _pull = !_pull)),
        ]),
        StudioRow(children: [
          StudioButton(icon: Icons.public_rounded, label: 'Solar system', color: const Color(0xFFFB923C), onTap: () => setState(_solar)),
          StudioButton(icon: Icons.rocket_launch_rounded, label: 'Comet', onTap: () => setState(_comet)),
          StudioButton(icon: Icons.casino_rounded, label: 'Cluster', onTap: () => setState(() {
                for (var i = 0; i < 10; i++) {
                  _circular(50 + _rnd.nextDouble() * (math.min(_size.width, _size.height) / 2 - 70), _rnd.nextDouble() * math.pi * 2, eccentric: 0.7 + _rnd.nextDouble() * 0.5, reverse: _rnd.nextBool());
                }
              })),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(_planets.clear)),
        ]),
      ]),
    );
  }
}

class _OrbitPainter extends CustomPainter {
  _OrbitPainter(this.planets, this.center, this.sun, this.aimStart, this.aimEnd, this.predict, this.now);
  final List<_Planet> planets;
  final Offset center;
  final double sun;
  final Offset? aimStart;
  final Offset? aimEnd;
  final List<Offset> predict;
  final int now;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF07070B));
    final rnd = math.Random(5);
    for (var i = 0; i < 70; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 1.2 + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.25 + rnd.nextDouble() * 0.4));
    }
    final sr = 16 + sun * 6;
    canvas.drawCircle(center, sr * 3.2, Paint()..shader = RadialGradient(colors: [const Color(0xFFFB923C).withValues(alpha: 0.45), Colors.transparent]).createShader(Rect.fromCircle(center: center, radius: sr * 3.2)));
    canvas.drawCircle(center, sr, Paint()..shader = const RadialGradient(colors: [Color(0xFFFEF08A), Color(0xFFF59E0B), Color(0xFFEA580C)]).createShader(Rect.fromCircle(center: center, radius: sr)));
    for (final p in planets) {
      if (p.trail.length > 1) {
        for (var i = 1; i < p.trail.length; i++) {
          final k = i / p.trail.length;
          canvas.drawLine(p.trail[i - 1], p.trail[i], Paint()..strokeWidth = 2.2 * k + 0.4..strokeCap = StrokeCap.round..color = p.color.withValues(alpha: k * 0.8));
        }
      }
      canvas.drawCircle(p.p, p.r + 4, Paint()..color = p.color.withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      canvas.drawCircle(p.p, p.r, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, p.color, Color.lerp(p.color, Colors.black, 0.5)!]).createShader(Rect.fromCircle(center: p.p, radius: p.r)));
    }
    if (aimStart != null && aimEnd != null) {
      canvas.drawLine(aimStart!, aimEnd!, Paint()..strokeWidth = 2..color = Colors.white30);
      canvas.drawCircle(aimStart!, 6, Paint()..color = Colors.white);
      for (final p in predict) {
        canvas.drawCircle(p, 2.2, Paint()..color = Colors.white.withValues(alpha: 0.7));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _OrbitPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 7. SWARM STUDIO: a living crowd that follows simple rules. Attract, scare, feed or hunt it.
// ═════════════════════════════════════════════════════════════════════════════

class _Boid {
  _Boid(this.p, this.v, this.hue);
  Offset p;
  Offset v;
  final double hue;
}

class NgmySwarmStudio extends StatefulWidget {
  const NgmySwarmStudio({super.key});

  @override
  State<NgmySwarmStudio> createState() => _NgmySwarmStudioState();
}

class _NgmySwarmStudioState extends State<NgmySwarmStudio> with SingleTickerProviderStateMixin, _Frames {
  final GlobalKey _shot = GlobalKey();
  final List<_Boid> _boids = [];
  final List<(Offset, int)> _food = [];
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  double _count = 70;
  double _cohesion = 1.0;
  double _separation = 1.2;
  double _alignment = 1.0;
  double _speed = 120;
  String _mode = 'attract';
  String _skin = 'fish';
  Offset? _finger;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  void _fill() {
    while (_boids.length < _count.round()) {
      final a = _rnd.nextDouble() * math.pi * 2;
      _boids.add(_Boid(Offset(_size.width * (0.2 + _rnd.nextDouble() * 0.6), _size.height * (0.2 + _rnd.nextDouble() * 0.6)), Offset(math.cos(a), math.sin(a)) * _speed, (_rnd.nextDouble() * 60 + (_skin == 'fish' ? 170 : (_skin == 'fly' ? 50 : 300))) % 360));
    }
    while (_boids.length > _count.round()) {
      _boids.removeLast();
    }
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    _fill();
    _food.removeWhere((f) => nowMs - f.$2 > 6000);
    final n = _boids.length;
    for (var i = 0; i < n; i++) {
      final b = _boids[i];
      var coh = Offset.zero, ali = Offset.zero, sep = Offset.zero;
      var cnt = 0;
      for (var j = 0; j < n; j++) {
        if (i == j) continue;
        final o = _boids[j];
        final d = o.p - b.p;
        final dist2 = d.dx * d.dx + d.dy * d.dy;
        if (dist2 < 70 * 70) {
          cnt++;
          coh += o.p;
          ali += o.v;
          if (dist2 < 26 * 26 && dist2 > 0.01) sep -= d / math.sqrt(dist2) * (26 - math.sqrt(dist2));
        }
      }
      var steer = Offset.zero;
      if (cnt > 0) {
        steer += (coh / cnt.toDouble() - b.p) * (0.8 * _cohesion);
        steer += (ali / cnt.toDouble() - b.v) * (1.6 * _alignment);
        steer += sep * (7 * _separation);
      }
      // Keep inside the box.
      const m = 40.0;
      if (b.p.dx < m) steer += Offset((m - b.p.dx) * 6, 0);
      if (b.p.dx > _size.width - m) steer -= Offset((b.p.dx - (_size.width - m)) * 6, 0);
      if (b.p.dy < m) steer += Offset(0, (m - b.p.dy) * 6);
      if (b.p.dy > _size.height - m) steer -= Offset(0, (b.p.dy - (_size.height - m)) * 6);
      // What the finger does.
      if (_finger != null) {
        final d = _finger! - b.p;
        final dist = d.distance;
        if (_mode == 'attract' && dist < 260 && dist > 1) steer += d / dist * 420;
        if (_mode == 'scare' && dist < 170 && dist > 1) steer -= d / dist * (170 - dist) * 22;
        if (_mode == 'hunt' && dist < 220 && dist > 1) steer -= d / dist * (220 - dist) * 30;
      }
      // Food.
      for (final f in _food) {
        final d = f.$1 - b.p;
        final dist = d.distance;
        if (dist < 220 && dist > 1) steer += d / dist * 360;
      }
      b.v += steer * dt;
      final sp = b.v.distance;
      final target = _speed * (_mode == 'hunt' && _finger != null ? 1.5 : 1);
      if (sp > 0.01) b.v = b.v / sp * sp.clamp(_speed * 0.5, target);
      b.p += b.v * dt;
    }
    // Fish eat the food they reach.
    _food.removeWhere((f) => _boids.where((b) => (b.p - f.$1).distance < 14).length >= 3);
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'SWARM STUDIO',
      accent: const Color(0xFF4ADE80),
      help: 'A crowd where every one follows three simple rules: stay close, steer apart, and move the same way as the neighbours. That is all it takes to make a school of fish.\n\nTouch changes how they behave. Attract pulls them to your finger, Scare pushes them away, Food drops a snack they swim to, and Hunt turns your finger into a predator.\n\nMove the sliders to change their personality. Try low Together and high Apart.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'swarm'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) => _finger = d.localPosition,
            onPanUpdate: (d) => _finger = d.localPosition,
            onPanEnd: (_) => _finger = null,
            onTapDown: (d) {
              _finger = d.localPosition;
              if (_mode == 'food') _food.add((d.localPosition, nowMs));
            },
            onTapUp: (_) => _finger = null,
            onTapCancel: () => _finger = null,
            child: CustomPaint(size: _size, painter: _SwarmPainter(_boids, _food, _skin, _mode, _finger, nowMs)),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'TOUCH', children: [
          for (final m in const [('attract', 'Attract', Icons.touch_app_rounded), ('scare', 'Scare', Icons.flash_on_rounded), ('food', 'Food', Icons.restaurant_rounded), ('hunt', 'Hunt', Icons.pest_control_rounded)])
            StudioChip(label: m.$2, icon: m.$3, selected: _mode == m.$1, color: const Color(0xFF4ADE80), onTap: () => setState(() => _mode = m.$1)),
        ]),
        StudioRow(label: 'LOOK', children: [
          for (final s in const [('fish', 'Fish'), ('fly', 'Fireflies'), ('bird', 'Birds')])
            StudioChip(label: s.$2, selected: _skin == s.$1, color: const Color(0xFF4ADE80), onTap: () => setState(() {
                  _skin = s.$1;
                  _boids.clear();
                })),
        ]),
        StudioSlider(label: 'How many', value: _count, min: 15, max: 150, display: _count.round().toString(), onChanged: (v) => setState(() => _count = v), color: const Color(0xFF4ADE80)),
        StudioSlider(label: 'Together', value: _cohesion, max: 2.5, onChanged: (v) => setState(() => _cohesion = v), color: const Color(0xFF4ADE80)),
        StudioSlider(label: 'Apart', value: _separation, max: 2.5, onChanged: (v) => setState(() => _separation = v), color: const Color(0xFF4ADE80)),
        StudioSlider(label: 'Same way', value: _alignment, max: 2.5, onChanged: (v) => setState(() => _alignment = v), color: const Color(0xFF4ADE80)),
        StudioSlider(label: 'Speed', value: _speed, min: 50, max: 280, display: _speed.round().toString(), onChanged: (v) => setState(() => _speed = v), color: const Color(0xFF4ADE80)),
      ]),
    );
  }
}

class _SwarmPainter extends CustomPainter {
  _SwarmPainter(this.boids, this.food, this.skin, this.mode, this.finger, this.now);
  final List<_Boid> boids;
  final List<(Offset, int)> food;
  final String skin;
  final String mode;
  final Offset? finger;
  final int now;

  @override
  void paint(Canvas canvas, Size size) {
    final deep = skin == 'fish' ? [const Color(0xFF06222B), const Color(0xFF020A0F)] : (skin == 'fly' ? [const Color(0xFF0B1220), const Color(0xFF05070C)] : [const Color(0xFF1B2A44), const Color(0xFF0D1626)]);
    canvas.drawRect(Offset.zero & size, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: deep).createShader(Offset.zero & size));
    for (final f in food) {
      canvas.drawCircle(f.$1, 6, Paint()..color = const Color(0xFFFACC15));
      canvas.drawCircle(f.$1, 12, Paint()..color = const Color(0xFFFACC15).withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
    }
    for (final b in boids) {
      final ang = math.atan2(b.v.dy, b.v.dx);
      final c = HSVColor.fromAHSV(1, b.hue, 0.7, 1).toColor();
      switch (skin) {
        case 'fly':
          final blink = 0.4 + 0.6 * math.sin(now * 0.004 + b.hue).abs();
          canvas.drawCircle(b.p, 9, Paint()..color = c.withValues(alpha: 0.35 * blink)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
          canvas.drawCircle(b.p, 2.6, Paint()..color = Colors.white.withValues(alpha: blink));
        case 'bird':
          canvas.save();
          canvas.translate(b.p.dx, b.p.dy);
          canvas.rotate(ang);
          final flap = math.sin(now * 0.02 + b.hue) * 5;
          final path = Path()
            ..moveTo(8, 0)
            ..lineTo(-6, -7 - flap)
            ..lineTo(-2, 0)
            ..lineTo(-6, 7 + flap)
            ..close();
          canvas.drawPath(path, Paint()..color = c);
          canvas.restore();
        default:
          canvas.save();
          canvas.translate(b.p.dx, b.p.dy);
          canvas.rotate(ang);
          final tail = math.sin(now * 0.012 + b.hue) * 3;
          final path = Path()
            ..moveTo(9, 0)
            ..quadraticBezierTo(0, -6, -7, tail)
            ..lineTo(-12, -4 + tail)
            ..lineTo(-12, 4 + tail)
            ..lineTo(-7, tail)
            ..quadraticBezierTo(0, 6, 9, 0);
          canvas.drawPath(path, Paint()..shader = LinearGradient(colors: [c, Color.lerp(c, const Color(0xFF0EA5E9), 0.6)!]).createShader(const Rect.fromLTWH(-12, -6, 22, 12)));
          canvas.restore();
      }
    }
    if (finger != null) {
      final col = mode == 'hunt' ? const Color(0xFFF87171) : (mode == 'scare' ? const Color(0xFFFACC15) : const Color(0xFF4ADE80));
      canvas.drawCircle(finger!, mode == 'hunt' ? 12 : 22, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.5..color = col.withValues(alpha: 0.8));
    }
  }

  @override
  bool shouldRepaint(covariant _SwarmPainter old) => true;
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

class _NgmyFireworkStudioState extends State<NgmyFireworkStudio> with SingleTickerProviderStateMixin, _Frames {
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
// 9. CHAIN BURST: a game. One tap, one blast. Make it spread to the goal.
// ═════════════════════════════════════════════════════════════════════════════

class _Dot {
  _Dot(this.p, this.v, this.color);
  Offset p;
  Offset v;
  final Color color;
  int? blastAt; // when this dot became a blast
}

class NgmyChainBurstStudio extends StatefulWidget {
  const NgmyChainBurstStudio({super.key});

  @override
  State<NgmyChainBurstStudio> createState() => _NgmyChainBurstStudioState();
}

class _NgmyChainBurstStudioState extends State<NgmyChainBurstStudio> with SingleTickerProviderStateMixin, _Frames {
  final List<_Dot> _dots = [];
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  int _level = 1;
  bool _fired = false;
  bool _done = false;
  int _blasts = 0;
  int _best = 0;
  Offset? _firstBlast;
  int _firstAt = 0;

  int get _goal => math.min(_dots.length, 2 + _level * 2);
  static const double _maxR = 52;

  void _setup() {
    _dots.clear();
    _fired = false;
    _done = false;
    _blasts = 0;
    _firstBlast = null;
    final n = 14 + _level * 4;
    for (var i = 0; i < n; i++) {
      final a = _rnd.nextDouble() * math.pi * 2;
      _dots.add(_Dot(Offset(20 + _rnd.nextDouble() * (_size.width - 40), 20 + _rnd.nextDouble() * (_size.height - 40)), Offset(math.cos(a), math.sin(a)) * (30 + _rnd.nextDouble() * 50), HSVColor.fromAHSV(1, _rnd.nextDouble() * 360, 0.6, 1).toColor()));
    }
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  double _radius(int? at) {
    if (at == null) return 0;
    final t = (nowMs - at) / 1000.0;
    if (t < 0.4) return _maxR * Curves.easeOut.transform(t / 0.4);
    if (t < 1.1) return _maxR;
    if (t < 1.5) return _maxR * (1 - (t - 1.1) / 0.4);
    return 0;
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    if (_dots.isEmpty) _setup();
    for (final d in _dots) {
      if (d.blastAt != null) continue;
      d.p += d.v * dt;
      if (d.p.dx < 8 || d.p.dx > _size.width - 8) d.v = Offset(-d.v.dx, d.v.dy);
      if (d.p.dy < 8 || d.p.dy > _size.height - 8) d.v = Offset(d.v.dx, -d.v.dy);
    }
    if (_fired) {
      // Anything touching a blast becomes a blast.
      final live = <(Offset, double)>[];
      if (_firstBlast != null) live.add((_firstBlast!, _radius(_firstAt)));
      for (final b in _dots.where((d) => d.blastAt != null)) {
        live.add((b.p, _radius(b.blastAt)));
      }
      for (final d in _dots) {
        if (d.blastAt != null) continue;
        for (final b in live) {
          if (b.$2 > 0 && (d.p - b.$1).distance < b.$2 + 8) {
            d.blastAt = nowMs;
            _blasts++;
            NgmyTone.play(NgmyTone.note(2 * math.min(_blasts, 14)), ms: 140, wave: 'tri', volume: 0.35);
            HapticFeedback.selectionClick();
            break;
          }
        }
      }
      final active = (_firstBlast != null && _radius(_firstAt) > 0) || _dots.any((d) => d.blastAt != null && _radius(d.blastAt) > 0);
      if (!active && nowMs - _firstAt > 400) {
        _done = true;
        if (_blasts > _best) _best = _blasts;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final won = _done && _blasts >= _goal;
    return StudioPage(
      title: 'CHAIN BURST',
      accent: const Color(0xFFF472B6),
      help: 'You get one tap each round. Tap to set off a blast. Every dot it touches blows up too, and those blasts set off more.\n\nReach the goal number of dots to pass the level. Each level has more dots and a higher goal. Pick your spot carefully: tap where dots are close together.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) {
            if (_fired) return;
            _fired = true;
            _firstBlast = d.localPosition;
            _firstAt = nowMs;
            NgmyTone.play(180, ms: 200, wave: 'sine', sweep: 1, volume: 0.4);
            HapticFeedback.mediumImpact();
          },
          child: Stack(fit: StackFit.expand, children: [
            CustomPaint(size: _size, painter: _ChainPainter(_dots, _firstBlast, _firstAt, nowMs, _maxR, _radius)),
            Positioned(
              left: 16,
              right: 16,
              top: 8,
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                _hud('LEVEL', '$_level'),
                _hud('GOAL', '$_blasts / $_goal', color: _blasts >= _goal ? const Color(0xFF4ADE80) : Colors.white),
                _hud('BEST', '$_best'),
              ]),
            ),
            if (!_fired)
              const Align(alignment: Alignment(0, 0.85), child: Text('Tap once to start the chain', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w800))),
            if (_done)
              Center(
                child: Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(color: const Color(0xEE17171A), borderRadius: BorderRadius.circular(24), border: Border.all(color: (won ? const Color(0xFF4ADE80) : const Color(0xFFF87171)).withValues(alpha: 0.6))),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Text(won ? 'Level complete!' : 'So close', style: TextStyle(color: won ? const Color(0xFF4ADE80) : const Color(0xFFF87171), fontWeight: FontWeight.w900, fontSize: 22)),
                    const SizedBox(height: 6),
                    Text('You blasted $_blasts dots. The goal was $_goal.', style: const TextStyle(color: Colors.white70)),
                    const SizedBox(height: 14),
                    Row(mainAxisSize: MainAxisSize.min, children: [
                      StudioButton(icon: Icons.replay_rounded, label: 'Try again', onTap: () => setState(_setup)),
                      if (won)
                        StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next level', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                              _level++;
                              _setup();
                            })),
                    ]),
                  ]),
                ),
              ),
          ]),
        );
      }),
      tools: Row(children: [
        StudioButton(icon: Icons.refresh_rounded, label: 'New board', onTap: () => setState(_setup)),
        StudioButton(icon: Icons.restart_alt_rounded, label: 'Back to level 1', color: const Color(0xFFF87171), onTap: () => setState(() {
              _level = 1;
              _setup();
            })),
      ]),
    );
  }

  Widget _hud(String label, String value, {Color color = Colors.white}) => Column(children: [
        Text(label, style: const TextStyle(color: Colors.white38, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
        Text(value, style: TextStyle(color: color, fontSize: 18, fontWeight: FontWeight.w900)),
      ]);
}

class _ChainPainter extends CustomPainter {
  _ChainPainter(this.dots, this.first, this.firstAt, this.now, this.maxR, this.radius);
  final List<_Dot> dots;
  final Offset? first;
  final int firstAt;
  final int now;
  final double maxR;
  final double Function(int?) radius;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0B0B10));
    void blast(Offset c, double r, Color col) {
      if (r <= 0) return;
      canvas.drawCircle(c, r, Paint()..color = col.withValues(alpha: 0.18));
      canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = col.withValues(alpha: 0.9));
      canvas.drawCircle(c, r * 0.5, Paint()..color = col.withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
    }

    if (first != null) blast(first!, radius(firstAt), Colors.white);
    for (final d in dots) {
      if (d.blastAt != null) {
        blast(d.p, radius(d.blastAt), d.color);
      } else {
        canvas.drawCircle(d.p, 12, Paint()..color = d.color.withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
        canvas.drawCircle(d.p, 8, Paint()..color = d.color);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _ChainPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 10. BEAT MAKER: tap squares to build a loop and hear it play.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyBeatStudio extends StatefulWidget {
  const NgmyBeatStudio({super.key});

  @override
  State<NgmyBeatStudio> createState() => _NgmyBeatStudioState();
}

class _NgmyBeatStudioState extends State<NgmyBeatStudio> with SingleTickerProviderStateMixin, _Frames {
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
