import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';
import 'ngmy_universe_data.dart';

// ═════════════════════════════════════════════════════════════════════════════
// BLACK HOLE: bends light, swallows stars, slows time.
// ═════════════════════════════════════════════════════════════════════════════

class _Doomed {
  _Doomed(this.angle, this.radius, this.speed, this.color);
  double angle;
  double radius; // in units of the event horizon
  double speed;
  final Color color;
  double life = 1;
}

class NgmyBlackHoleStudio extends StatefulWidget {
  const NgmyBlackHoleStudio({super.key});

  @override
  State<NgmyBlackHoleStudio> createState() => _NgmyBlackHoleStudioState();
}

class _NgmyBlackHoleStudioState extends State<NgmyBlackHoleStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final UAmbient _amb = UAmbient();
  double _t = 0;
  double _mass = 10; // solar masses (log slider)
  bool _disk = true;
  bool _lens = true;
  bool _music = true;
  final List<_Doomed> _stars = [];
  Size _size = Size.zero;
  int _eaten = 0;
  final List<Offset> _bg = [for (var i = 0; i < 150; i++) Offset(math.Random(i).nextDouble(), math.Random(i + 500).nextDouble())];

  /// Schwarzschild radius in km: 2GM/c² ≈ 2.95 km per solar mass.
  double get _rs => 2.953 * _mass;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    _amb.update(dt, _music);
    for (final s in _stars) {
      // Closer means faster: the angle sweeps quicker and the star sinks.
      s.angle += dt * s.speed / math.pow(s.radius, 1.5);
      s.radius -= dt * (0.5 + 1.6 / s.radius) * 0.6;
      if (s.radius <= 1) {
        s.life = 0;
        _eaten++;
        NgmyTone.play(70, ms: 500, sweep: 0.3, volume: 0.5);
      }
    }
    _stars.removeWhere((s) => s.life <= 0);
  }

  void _drop(Offset p) {
    if (_size == Size.zero) return;
    final c = Offset(_size.width / 2, _size.height * 0.42);
    final unit = _unit;
    final d = p - c;
    final r = (d.distance / unit).clamp(1.5, 12.0);
    _stars.add(_Doomed(math.atan2(d.dy, d.dx), r, 1.2, HSLColor.fromAHSL(1, 30 + math.Random().nextDouble() * 40, 0.9, 0.7).toColor()));
    NgmyTone.playNote('bell', 60 + (12 - r).round() * 2, ms: 400, volume: 0.35);
  }

  double get _unit => math.min(_size.width, _size.height) * 0.07;

  @override
  Widget build(BuildContext context) {
    // Time on the surface slows near the hole. At 3 horizons out it runs at ~82% speed.
    final slow = (_stars.isEmpty ? 3.0 : _stars.map((s) => s.radius).reduce(math.min)).clamp(1.0001, 99.0);
    final timeRate = math.sqrt(1 - 1 / slow);
    return StudioPage(
      title: 'BLACK HOLE',
      accent: const Color(0xFFA78BFA),
      help: 'A black hole is so heavy, squeezed into so small a place, that nothing can get out of it once it crosses the edge, called the event horizon. Not even light.\n\nTap anywhere to throw in a star and watch it spiral inwards, faster and faster. The stars behind the hole look bent, because the hole bends light itself (that is called lensing).\n\nChange the mass to see how big its edge is: if the Sun were squeezed into a ball only 3 km wide it would be a black hole. The "Time" number shows how much slower a clock runs for the star that is closest to the edge, as seen by someone far away.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'black-hole'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: Stack(fit: StackFit.expand, children: [
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTapDown: (d) => _drop(d.localPosition),
              onPanUpdate: (d) {
                if (math.Random().nextDouble() < 0.12) _drop(d.localPosition);
              },
              child: CustomPaint(size: _size, painter: _BlackHolePainter(this)),
            ),
            Positioned(
              left: 10,
              right: 10,
              top: 8,
              child: Container(
                padding: const EdgeInsets.all(10),
                decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
                child: Row(children: [
                  _num('MASS', _mass < 1000 ? '${_mass.toStringAsFixed(_mass < 10 ? 1 : 0)} Suns' : '${formatBig(_mass)} Suns'),
                  _num('EDGE WIDTH', '${_rs < 100 ? _rs.toStringAsFixed(1) : withCommas(_rs)} km'),
                  _num('TIME', '${(timeRate * 100).toStringAsFixed(0)}%'),
                  _num('EATEN', '$_eaten'),
                ]),
              ),
            ),
            if (_stars.isEmpty && _eaten == 0) const Positioned(left: 0, right: 0, bottom: 14, child: Center(child: Text('Tap to throw in a star', style: TextStyle(color: Colors.white38)))),
          ]),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Mass', value: math.log(_mass) / math.log(1e10), display: _mass < 1000 ? '${_mass.toStringAsFixed(0)} Suns' : '${formatBig(_mass)} Suns', color: const Color(0xFFA78BFA), onChanged: (v) => setState(() => _mass = math.max(3, math.exp(v * math.log(1e10))))),
        StudioRow(label: 'LIKE', children: [
          StudioChip(label: 'Star (10)', selected: false, color: const Color(0xFFA78BFA), onTap: () => setState(() => _mass = 10)),
          StudioChip(label: 'Cygnus X-1 (21)', selected: false, color: const Color(0xFFA78BFA), onTap: () => setState(() => _mass = 21)),
          StudioChip(label: 'Milky Way core (4 million)', selected: false, color: const Color(0xFFA78BFA), onTap: () => setState(() => _mass = 4.3e6)),
          StudioChip(label: 'M87 (6.5 billion)', selected: false, color: const Color(0xFFA78BFA), onTap: () => setState(() => _mass = 6.5e9)),
        ]),
        StudioRow(children: [
          StudioChip(label: 'Glowing ring', selected: _disk, color: const Color(0xFFA78BFA), onTap: () => setState(() => _disk = !_disk)),
          StudioChip(label: 'Bent light', selected: _lens, color: const Color(0xFFA78BFA), onTap: () => setState(() => _lens = !_lens)),
          StudioChip(label: 'Music', icon: _music ? Icons.music_note_rounded : Icons.music_off_rounded, selected: _music, color: const Color(0xFFA78BFA), onTap: () => setState(() => _music = !_music)),
          StudioButton(icon: Icons.refresh_rounded, label: 'Clear', onTap: () => setState(() {
                _stars.clear();
                _eaten = 0;
              })),
        ]),
      ]),
    );
  }

  Widget _num(String k, String v) => Expanded(
        child: Column(children: [
          Text(k, style: const TextStyle(color: Colors.white38, fontSize: 9, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
          const SizedBox(height: 2),
          Text(v, textAlign: TextAlign.center, maxLines: 2, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12.5)),
        ]),
      );
}

class _BlackHolePainter extends CustomPainter {
  _BlackHolePainter(this.s);
  final _NgmyBlackHoleStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF020204));
    final c = Offset(size.width / 2, size.height * 0.42);
    final u = s._unit;
    // The edge grows slowly with mass so the picture stays readable.
    final eh = u * (0.9 + 0.35 * math.log(s._mass) / math.ln10);
    // Stars behind, pushed outwards near the hole to mimic bent light.
    for (final b in s._bg) {
      var p = Offset(b.dx * size.width, b.dy * size.height);
      if (s._lens) {
        final d = p - c;
        final dist = d.distance;
        if (dist > 1) {
          final push = (eh * eh * 5) / dist;
          p = c + d / dist * (dist + push.clamp(0, eh * 2.2));
        }
      }
      canvas.drawCircle(p, 0.9, Paint()..color = Colors.white.withValues(alpha: 0.6));
    }
    // Faint ring where light is trapped in orbit.
    if (s._lens) {
      canvas.drawCircle(c, eh * 1.5, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withValues(alpha: 0.25)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2));
    }
    if (s._disk) {
      // Glowing ring of gas, tilted. It also appears bent over and under the hole.
      for (var i = 0; i < 90; i++) {
        final k = i / 90;
        final r = eh * (1.6 + k * 2.6);
        final speed = 1.4 / math.pow(1.6 + k * 2.6, 1.5);
        final base = k * 40.0;
        for (var j = 0; j < 4; j++) {
          final a = base + j * math.pi / 2 + s._t * speed * 2.2;
          final front = math.sin(a) > 0;
          final x = math.cos(a) * r;
          final y = math.sin(a) * r * 0.28;
          final col = Color.lerp(const Color(0xFFFFF3C4), const Color(0xFFEA580C), k)!;
          final doppler = 0.5 + 0.5 * math.cos(a);
          canvas.drawCircle(c + Offset(x, y), 1.3, Paint()..color = col.withValues(alpha: (0.25 + 0.6 * (1 - k)) * (0.4 + doppler * 0.6) * (front ? 1 : 0.85)));
          if (!front && s._lens) {
            // Light from the far side of the ring bends up and over.
            final arc = c + Offset(x * 0.5, -(r * 0.55) * math.sin(-a).abs() * 0.6 - eh * 0.2);
            canvas.drawCircle(arc, 1.0, Paint()..color = col.withValues(alpha: 0.18 * (1 - k)));
          }
        }
      }
    }
    canvas.drawCircle(c, eh * 1.25, Paint()..shader = RadialGradient(colors: [Colors.black, Colors.black.withValues(alpha: 0)], stops: const [0.78, 1]).createShader(Rect.fromCircle(center: c, radius: eh * 1.25)));
    canvas.drawCircle(c, eh, Paint()..color = Colors.black);
    canvas.drawCircle(c, eh, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = const Color(0xFFA78BFA).withValues(alpha: 0.55));
    // Doomed stars: stretched into a streak along their path as they fall (spaghettification).
    for (final st in s._stars) {
      final r = eh * st.radius;
      final p = c + Offset(math.cos(st.angle) * r, math.sin(st.angle) * r * 0.9);
      final stretch = 1 + (3.5 / st.radius).clamp(0, 5);
      final tang = Offset(-math.sin(st.angle), math.cos(st.angle));
      final len = 3.0 * stretch;
      canvas.drawLine(p - tang * len, p + tang * len, Paint()..strokeWidth = 4.2 / math.sqrt(stretch)..strokeCap = StrokeCap.round..color = st.color.withValues(alpha: (st.radius / 2).clamp(0.2, 1)));
      canvas.drawCircle(p, 6, Paint()..color = st.color.withValues(alpha: 0.2)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
    }
  }

  @override
  bool shouldRepaint(covariant _BlackHolePainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// GALAXY: a spiral of stars, dark matter, and collisions.
// ═════════════════════════════════════════════════════════════════════════════

class _Star {
  _Star(this.r, this.a, this.z, this.hue);
  double r;
  double a;
  final double z;
  final double hue;
}

class NgmyGalaxyStudio extends StatefulWidget {
  const NgmyGalaxyStudio({super.key});

  @override
  State<NgmyGalaxyStudio> createState() => _NgmyGalaxyStudioState();
}

class _NgmyGalaxyStudioState extends State<NgmyGalaxyStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final UAmbient _amb = UAmbient();
  int _arms = 2;
  double _twist = 3.2;
  double _bar = 0;
  bool _dark = false;
  bool _music = true;
  bool _youAreHere = true;
  String _type = 'spiral';
  double _tilt = 0.75;
  double _spin = 0;
  double _speed = 1;
  List<_Star> _stars = [];
  // Collision: second galaxy as a simple cloud with its own centre.
  bool _collide = false;
  Offset _g2 = Offset.zero;
  Offset _v2 = Offset.zero;
  final List<_Star> _stars2 = [];

  @override
  void initState() {
    super.initState();
    _build();
    startFrames();
  }

  void _build() {
    final rnd = math.Random(5);
    final out = <_Star>[];
    final n = _type == 'elliptical' ? 1800 : 2300;
    for (var i = 0; i < n; i++) {
      if (_type == 'elliptical') {
        final r = math.pow(rnd.nextDouble(), 1.6).toDouble() * 1.0;
        out.add(_Star(r, rnd.nextDouble() * math.pi * 2, (rnd.nextDouble() - 0.5) * 0.5 * r, 25 + rnd.nextDouble() * 20));
      } else {
        final r = math.pow(rnd.nextDouble(), 0.8).toDouble() * 1.0;
        final arm = rnd.nextInt(_arms);
        final spread = (rnd.nextDouble() - 0.5) * (0.55 - r * 0.25);
        var a = arm * (math.pi * 2 / _arms) + r * _twist + spread;
        if (_bar > 0 && r < 0.3 * _bar + 0.05) a = (rnd.nextBool() ? 0 : math.pi) + (rnd.nextDouble() - 0.5) * 0.25;
        out.add(_Star(r, a, (rnd.nextDouble() - 0.5) * 0.05 * (1 - r), r < 0.25 ? 35 + rnd.nextDouble() * 15 : 205 + rnd.nextDouble() * 50));
      }
    }
    _stars = out;
  }

  void _startCollision() {
    _collide = true;
    _g2 = const Offset(1.9, -0.8);
    _v2 = const Offset(-0.22, 0.09);
    final rnd = math.Random(9);
    _stars2
      ..clear()
      ..addAll([for (var i = 0; i < 900; i++) _Star(math.pow(rnd.nextDouble(), 0.8) * 0.7, rnd.nextDouble() * math.pi * 2, 0, 320 + rnd.nextDouble() * 30)]);
    _gstars2 = [for (final s in _stars2) Offset(math.cos(s.a) * s.r, math.sin(s.a) * s.r)];
    _gv2 = [for (final s in _stars2) Offset(-math.sin(s.a) * 0.55 / math.sqrt(s.r + 0.2), math.cos(s.a) * 0.55 / math.sqrt(s.r + 0.2))];
    _gstars1 = [for (final s in _stars.take(900)) Offset(math.cos(s.a) * s.r, math.sin(s.a) * s.r)];
    _gv1 = [for (final s in _stars.take(900)) Offset(-math.sin(s.a) * 0.6 / math.sqrt(s.r + 0.2), math.cos(s.a) * 0.6 / math.sqrt(s.r + 0.2))];
    _c1 = Offset.zero;
    _cv1 = const Offset(0.0, 0.0);
    NgmyTone.play(110, ms: 900, sweep: 0.5, volume: 0.45);
  }

  List<Offset> _gstars1 = [], _gstars2 = [], _gv1 = [], _gv2 = [];
  Offset _c1 = Offset.zero, _cv1 = Offset.zero;

  @override
  void onFrame(double dt) {
    _amb.update(dt, _music);
    _spin += dt * 0.25 * _speed;
    if (_collide) {
      final h = dt * 0.9 * _speed;
      // Two heavy centres attract each other; the stars follow their own centre and feel the other's pull too.
      final d = _g2 - _c1;
      final dist = math.max(0.25, d.distance);
      final f = d / dist * (0.9 / (dist * dist));
      _cv1 += f * h;
      _v2 -= f * h;
      _c1 += _cv1 * h;
      _g2 += _v2 * h;
      void step(List<Offset> pos, List<Offset> vel, Offset own, Offset other, double ownM, double otherM) {
        for (var i = 0; i < pos.length; i++) {
          final a = own - pos[i];
          final b = other - pos[i];
          final da = math.max(0.12, a.distance), db = math.max(0.12, b.distance);
          vel[i] += (a / da * (ownM / (da * da)) + b / db * (otherM / (db * db))) * h;
          pos[i] += vel[i] * h;
        }
      }

      step(_gstars1, _gv1, _c1, _g2, 0.5, 0.35);
      step(_gstars2, _gv2, _g2, _c1, 0.35, 0.5);
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'GALAXY',
      accent: const Color(0xFF818CF8),
      help: 'A galaxy is a huge family of stars, gas and dust held together by gravity. Our galaxy, the Milky Way, has 100 to 400 billion stars. Our Sun is one of them, about two thirds of the way out, taking about 230 million years to go once round.\n\nBuild your own: change the number of arms, how tightly they wind, and add a bar through the middle. Try Elliptical for a galaxy shaped like a ball. "Dark matter" shows the invisible stuff that makes the outer stars move faster than the visible stars alone could explain.\n\nCollide: the Milky Way will meet the Andromeda galaxy in about 4.5 billion years. Press Collide to see what that might look like. The stars are so far apart that almost none will actually hit each other.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'galaxy'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: RepaintBoundary(
        key: _shot,
        child: Stack(fit: StackFit.expand, children: [
          CustomPaint(painter: _GalaxyPainter(this)),
          Positioned(
            left: 10,
            right: 10,
            bottom: 8,
            child: Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.5), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
              child: Text(_collide ? 'Two galaxies falling together. Gravity pulls long tails of stars out. In a few billion years they settle into one big, round galaxy.' : _dark ? 'Dark matter (purple haze) is about 5 times more than all the stars and gas together. We cannot see it, but its gravity holds the galaxy together.' : _type == 'elliptical' ? 'An elliptical galaxy: old red and yellow stars swarming in every direction, with little new star making.' : 'The bright blue arms are where new stars are born. The yellow middle is older stars.', style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.35)),
            ),
          ),
        ]),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'TYPE', children: [
          for (final t in const [('spiral', 'Spiral'), ('barred', 'Barred spiral'), ('elliptical', 'Elliptical')])
            StudioChip(label: t.$2, selected: _type == t.$1 && !_collide, color: const Color(0xFF818CF8), onTap: () => setState(() {
                  _collide = false;
                  _type = t.$1;
                  _bar = t.$1 == 'barred' ? 1 : 0;
                  _build();
                })),
          StudioChip(label: 'Collide', icon: Icons.blur_on_rounded, selected: _collide, color: const Color(0xFFF472B6), onTap: () => setState(() {
                if (_type == 'elliptical') {
                  _type = 'spiral';
                  _build();
                }
                _startCollision();
              })),
        ]),
        if (_type != 'elliptical' && !_collide) ...[
          StudioSlider(label: 'Arms', value: _arms.toDouble(), min: 2, max: 6, display: '$_arms', color: const Color(0xFF818CF8), onChanged: (v) => setState(() {
                _arms = v.round();
                _build();
              })),
          StudioSlider(label: 'Winding', value: _twist, min: 0.8, max: 6, display: _twist.toStringAsFixed(1), color: const Color(0xFF818CF8), onChanged: (v) => setState(() {
                _twist = v;
                _build();
              })),
        ],
        StudioSlider(label: 'Tilt', value: _tilt, min: 0.15, max: 1, display: '${(_tilt * 90).round()}°', color: const Color(0xFF818CF8), onChanged: (v) => setState(() => _tilt = v)),
        StudioSlider(label: 'Speed', value: _speed, min: 0, max: 4, display: '${_speed.toStringAsFixed(1)}x', color: const Color(0xFF818CF8), onChanged: (v) => setState(() => _speed = v)),
        StudioRow(children: [
          StudioChip(label: 'Dark matter', selected: _dark, color: const Color(0xFFA78BFA), onTap: () => setState(() => _dark = !_dark)),
          StudioChip(label: 'You are here', selected: _youAreHere, color: const Color(0xFFFBBF24), onTap: () => setState(() => _youAreHere = !_youAreHere)),
          StudioChip(label: 'Music', icon: _music ? Icons.music_note_rounded : Icons.music_off_rounded, selected: _music, color: const Color(0xFF818CF8), onTap: () => setState(() => _music = !_music)),
        ]),
      ]),
    );
  }
}

class _GalaxyPainter extends CustomPainter {
  _GalaxyPainter(this.s);
  final _NgmyGalaxyStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF04040A));
    final rnd = math.Random(3);
    for (var i = 0; i < 90; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 1.1 + 0.2, Paint()..color = Colors.white.withValues(alpha: 0.15 + rnd.nextDouble() * 0.4));
    }
    final c = Offset(size.width / 2, size.height * 0.42);
    final R = math.min(size.width * 0.46, size.height * 0.36);
    if (s._dark) {
      canvas.drawCircle(c, R * 1.3, Paint()..shader = RadialGradient(colors: [const Color(0xFF7C3AED).withValues(alpha: 0.32), const Color(0xFF7C3AED).withValues(alpha: 0.12), Colors.transparent], stops: const [0, 0.6, 1]).createShader(Rect.fromCircle(center: c, radius: R * 1.3)));
    }
    final tilt = s._tilt;
    Offset proj(double x, double y, double z, Offset cc, double rot, double scale) {
      final xr = x * math.cos(rot) - y * math.sin(rot);
      final yr = x * math.sin(rot) + y * math.cos(rot);
      return cc + Offset(xr * scale, yr * scale * tilt - z * scale * 0.9);
    }

    // Glowing core.
    canvas.drawCircle(c, R * 0.3, Paint()..shader = RadialGradient(colors: [const Color(0xFFFEF3C7).withValues(alpha: 0.85), const Color(0xFFF59E0B).withValues(alpha: 0.3), Colors.transparent]).createShader(Rect.fromCircle(center: c, radius: R * 0.3)));
    if (!s._collide) {
      final dp = Paint();
      for (final st in s._stars) {
        // Inner stars turn faster, outer ones more slowly; with dark matter the outer ones keep up.
        final omega = s._dark ? 1.0 / (0.25 + st.r * 0.9) : 1.0 / math.pow(st.r + 0.18, 1.5) * 0.35;
        final rot = s._spin * math.min(omega, 6) * 0.5;
        final p = proj(math.cos(st.a) * st.r, math.sin(st.a) * st.r, st.z, c, rot, R);
        final col = HSVColor.fromAHSV(1, st.hue % 360, st.hue > 200 ? 0.45 : 0.55, 1).toColor();
        dp.color = col.withValues(alpha: 0.35 + (1 - st.r) * 0.5);
        canvas.drawCircle(p, st.r < 0.3 ? 1.3 : 1.0, dp);
      }
      if (s._youAreHere && s._type != 'elliptical') {
        final omega = s._dark ? 1.0 / (0.25 + 0.65 * 0.9) : 1.0 / math.pow(0.65 + 0.18, 1.5) * 0.35;
        final rot = s._spin * math.min(omega, 6) * 0.5;
        final p = proj(math.cos(0.9) * 0.65, math.sin(0.9) * 0.65, 0, c, rot, R);
        canvas.drawCircle(p, 9, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.6..color = const Color(0xFFFBBF24));
        final tp = TextPainter(text: const TextSpan(text: 'You are here (Sun)', style: TextStyle(color: Color(0xFFFBBF24), fontSize: 10.5, fontWeight: FontWeight.w900, shadows: [Shadow(color: Colors.black, blurRadius: 4)])), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, p + Offset(-tp.width / 2, 12));
      }
    } else {
      final sc = R * 0.8;
      final dp = Paint();
      for (final o in s._gstars1) {
        dp.color = const Color(0xFFBFD7FF).withValues(alpha: 0.6);
        canvas.drawCircle(proj(o.dx, o.dy, 0, c, 0, sc), 1.0, dp);
      }
      for (final o in s._gstars2) {
        dp.color = const Color(0xFFFBA6D9).withValues(alpha: 0.6);
        canvas.drawCircle(proj(o.dx, o.dy, 0, c, 0, sc), 1.0, dp);
      }
      canvas.drawCircle(proj(s._c1.dx, s._c1.dy, 0, c, 0, sc), 5, Paint()..color = const Color(0xFFFEF3C7));
      canvas.drawCircle(proj(s._g2.dx, s._g2.dy, 0, c, 0, sc), 5, Paint()..color = const Color(0xFFFBCFE8));
    }
  }

  @override
  bool shouldRepaint(covariant _GalaxyPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// SEASONS & MOON: why we have summer and winter, phases and tides.
// ═════════════════════════════════════════════════════════════════════════════

class NgmySeasonsMoonStudio extends StatefulWidget {
  const NgmySeasonsMoonStudio({super.key});

  @override
  State<NgmySeasonsMoonStudio> createState() => _NgmySeasonsMoonStudioState();
}

class _NgmySeasonsMoonStudioState extends State<NgmySeasonsMoonStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final UAmbient _amb = UAmbient();
  String _tab = 'seasons';
  double _year = 0.0; // 0..1 through the year
  double _month = 0.0; // 0..1 through the lunar month
  bool _play = true;
  double _speed = 1;
  double _tiltDeg = 23.4;
  bool _music = true;
  double _lastPhase = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _amb.update(dt, _music);
    if (!_play) return;
    if (_tab == 'seasons') {
      _year = (_year + dt * 0.04 * _speed) % 1;
    } else {
      _month = (_month + dt * 0.05 * _speed) % 1;
      final ph = (_month * 4).floor();
      if (ph != _lastPhase.floor()) NgmyTone.playNote('bell', 60 + ph * 4, ms: 500, volume: 0.35);
      _lastPhase = ph.toDouble();
    }
  }

  String get _season {
    // Northern hemisphere. Year 0 = March equinox.
    final y = _year;
    if (y < 0.25) return 'Spring in the north, autumn in the south';
    if (y < 0.5) return 'Summer in the north, winter in the south';
    if (y < 0.75) return 'Autumn in the north, spring in the south';
    return 'Winter in the north, summer in the south';
  }

  String get _phaseName {
    final m = _month;
    if (m < 0.03 || m > 0.97) return 'New Moon';
    if (m < 0.22) return 'Waxing crescent';
    if (m < 0.28) return 'First quarter';
    if (m < 0.47) return 'Waxing gibbous';
    if (m < 0.53) return 'Full Moon';
    if (m < 0.72) return 'Waning gibbous';
    if (m < 0.78) return 'Last quarter';
    return 'Waning crescent';
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'SEASONS & MOON',
      accent: const Color(0xFF34D399),
      help: 'SEASONS: Earth is tipped over by 23.4°. When the north leans towards the Sun it is summer there (long days, high Sun), and winter in the south. Six months later it is the other way round. It is not because Earth gets closer to the Sun. Try setting the tilt to 0°: the seasons vanish!\n\nMOON: the Moon always has one half lit by the Sun. As it goes round Earth we see more or less of the lit half: that is the phase. The Moon also pulls the sea towards it, which makes the tides.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'seasons-moon'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: Column(children: [
        Expanded(child: RepaintBoundary(key: _shot, child: CustomPaint(size: Size.infinite, painter: _SeasonPainter(this)))),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(14, 6, 14, 10),
          child: Text(_tab == 'seasons' ? _season : '$_phaseName  ·  ${(0.5 - 0.5 * math.cos(_month * 2 * math.pi)).clamp(0, 1) * 100 ~/ 1}% lit${(_month > 0.45 && _month < 0.55) || _month < 0.05 || _month > 0.95 ? '  ·  Spring tides (the biggest)' : (_month > 0.2 && _month < 0.3) || (_month > 0.7 && _month < 0.8) ? '  ·  Neap tides (the smallest)' : ''}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.5)),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Seasons', icon: Icons.wb_sunny_rounded, selected: _tab == 'seasons', color: const Color(0xFF34D399), onTap: () => setState(() => _tab = 'seasons')),
          StudioChip(label: 'Moon phases', icon: Icons.nightlight_round, selected: _tab == 'moon', color: const Color(0xFF34D399), onTap: () => setState(() => _tab = 'moon')),
          StudioChip(label: _play ? 'Pause' : 'Play', icon: _play ? Icons.pause_rounded : Icons.play_arrow_rounded, selected: false, color: const Color(0xFF34D399), onTap: () => setState(() => _play = !_play)),
          StudioChip(label: 'Music', icon: _music ? Icons.music_note_rounded : Icons.music_off_rounded, selected: _music, color: const Color(0xFF34D399), onTap: () => setState(() => _music = !_music)),
        ]),
        if (_tab == 'seasons') ...[
          StudioSlider(label: 'Month', value: _year, display: const ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'][(_year * 12).floor() % 12], color: const Color(0xFF34D399), onChanged: (v) => setState(() => _year = v)),
          StudioSlider(label: 'Tilt', value: _tiltDeg, min: 0, max: 90, display: '${_tiltDeg.toStringAsFixed(1)}°', color: const Color(0xFF34D399), onChanged: (v) => setState(() => _tiltDeg = v)),
        ] else
          StudioSlider(label: 'Day of month', value: _month, display: '${(_month * 29.5).floor() + 1}', color: const Color(0xFF34D399), onChanged: (v) => setState(() => _month = v)),
        StudioSlider(label: 'Speed', value: _speed, min: 0.2, max: 4, display: '${_speed.toStringAsFixed(1)}x', color: const Color(0xFF34D399), onChanged: (v) => setState(() => _speed = v)),
      ]),
    );
  }
}

class _SeasonPainter extends CustomPainter {
  _SeasonPainter(this.s);
  final _NgmySeasonsMoonStudioState s;

  void _ball(Canvas canvas, Offset c, double r, Color light, Color dark, {Offset sunDir = const Offset(-1, 0)}) {
    canvas.drawCircle(c, r, Paint()..shader = RadialGradient(center: Alignment(sunDir.dx * 0.5, sunDir.dy * 0.5), radius: 1.1, colors: [light, dark], stops: const [0.2, 1]).createShader(Rect.fromCircle(center: c, radius: r)));
  }

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF05060B));
    final rnd = math.Random(4);
    for (var i = 0; i < 70; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.2 + rnd.nextDouble() * 0.4));
    }
    final c = Offset(size.width / 2, size.height / 2);
    if (s._tab == 'seasons') {
      final rx = size.width * 0.36, ry = size.height * 0.3;
      canvas.drawOval(Rect.fromCenter(center: c, width: rx * 2, height: ry * 2), Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white24);
      canvas.drawCircle(c, 22, Paint()..shader = const RadialGradient(colors: [Color(0xFFFEF9C3), Color(0xFFF59E0B), Colors.transparent], stops: [0.3, 0.7, 1]).createShader(Rect.fromCircle(center: c, radius: 34)));
      // Year 0 is the March equinox, with Earth on the right of the Sun.
      final a = s._year * 2 * math.pi;
      final e = c + Offset(math.cos(a) * rx, math.sin(a) * ry);
      final er = math.min(size.width, size.height) * 0.075;
      // Axis always tilts the same way in space (towards the left of the screen at the top).
      final tilt = s._tiltDeg * math.pi / 180;
      final sunDir = (c - e) / (c - e).distance;
      canvas.save();
      canvas.translate(e.dx, e.dy);
      // Day half faces the Sun.
      canvas.drawCircle(Offset.zero, er, Paint()..color = const Color(0xFF0B1B33));
      canvas.save();
      canvas.clipPath(Path()..addOval(Rect.fromCircle(center: Offset.zero, radius: er)));
      canvas.drawCircle(sunDir * er * 0.35, er * 1.1, Paint()..shader = const RadialGradient(colors: [Color(0xFF4FA3F0), Color(0xFF1D5FA8)]).createShader(Rect.fromCircle(center: Offset.zero, radius: er * 1.1)));
      canvas.restore();
      // Axis line.
      final ax = Offset(math.sin(-tilt), -math.cos(-tilt));
      canvas.drawLine(-ax * er * 1.7, ax * er * 1.7, Paint()..strokeWidth = 2..color = const Color(0xFFF87171));
      // North pole marker.
      canvas.drawCircle(ax * er * 1.7, 3.2, Paint()..color = const Color(0xFFF87171));
      // Which way the north is leaning to the Sun: sunlight hits above or below the equator.
      final lean = -(ax.dx * sunDir.dx + ax.dy * sunDir.dy);
      canvas.restore();
      final lbl = TextPainter(text: TextSpan(text: lean.abs() < 0.12 ? 'equinox: day and night equal' : (lean * math.sin(tilt) * 0 + (ax.dx * sunDir.dx + ax.dy * sunDir.dy) > 0 ? 'north leans to Sun' : 'south leans to Sun'), style: const TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
      lbl.paint(canvas, e + Offset(-lbl.width / 2, er + 12));
    } else {
      // Moon phases: Sun's light from the left, Earth at the centre, Moon going round.
      final rr = math.min(size.width * 0.34, size.height * 0.32);
      canvas.drawCircle(c, rr, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white24);
      for (var i = 0; i < 9; i++) {
        canvas.drawLine(Offset(10, size.height * 0.2 + i * size.height * 0.075), Offset(40, size.height * 0.2 + i * size.height * 0.075), Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.6)..strokeWidth = 2);
      }
      final er = rr * 0.25;
      _ball(canvas, c, er, const Color(0xFF5BB0F5), const Color(0xFF0E3A6B));
      // New Moon (0) is between Earth and Sun, on the left.
      final a = math.pi + s._month * 2 * math.pi;
      final m = c + Offset(math.cos(a) * rr, math.sin(a) * rr);
      final mr = rr * 0.12;
      canvas.drawCircle(m, mr, Paint()..color = const Color(0xFF1E1E26));
      canvas.save();
      canvas.clipPath(Path()..addOval(Rect.fromCircle(center: m, radius: mr)));
      canvas.drawRect(Rect.fromLTWH(m.dx - mr, m.dy - mr, mr, mr * 2), Paint()..color = const Color(0xFFE5E7EB));
      canvas.restore();
      // Tide bulges on Earth towards and away from the Moon.
      final dir = (m - c) / (m - c).distance;
      for (final sgn in const [1.0, -1.0]) {
        canvas.drawCircle(c + dir * sgn * er * 1.05, er * 0.28, Paint()..color = const Color(0xFF38BDF8).withValues(alpha: 0.45)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      }
      // The Moon as we see it from Earth.
      final vc = Offset(size.width - size.width * 0.17, size.height * 0.18);
      final vr = math.min(size.width, size.height) * 0.1;
      canvas.drawCircle(vc, vr, Paint()..color = const Color(0xFF16161D));
      final lit = 0.5 - 0.5 * math.cos(s._month * 2 * math.pi); // 0..1
      canvas.save();
      canvas.clipPath(Path()..addOval(Rect.fromCircle(center: vc, radius: vr)));
      final waxing = s._month < 0.5;
      final k = (1 - 2 * lit).abs();
      final path = Path();
      final dir2 = waxing ? 1.0 : -1.0;
      path.moveTo(vc.dx, vc.dy - vr);
      path.arcToPoint(Offset(vc.dx, vc.dy + vr), radius: Radius.circular(vr), clockwise: dir2 > 0);
      path.arcToPoint(Offset(vc.dx, vc.dy - vr), radius: Radius.elliptical(vr * k, vr), clockwise: (lit < 0.5) ? dir2 < 0 : dir2 > 0);
      canvas.drawPath(path, Paint()..color = const Color(0xFFE5E7EB));
      canvas.restore();
      canvas.drawCircle(vc, vr, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white24);
      final t = TextPainter(text: const TextSpan(text: 'What we see', style: TextStyle(color: Colors.white54, fontSize: 10.5, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
      t.paint(canvas, vc + Offset(-t.width / 2, vr + 6));
    }
  }

  @override
  bool shouldRepaint(covariant _SeasonPainter old) => true;
}
