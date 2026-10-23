import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';
import 'ngmy_universe_data.dart';

// ═════════════════════════════════════════════════════════════════════════════
// SOLAR SYSTEM: the Sun and its worlds, moving. Tap one to learn about it.
// ═════════════════════════════════════════════════════════════════════════════

class NgmySolarStudio extends StatefulWidget {
  const NgmySolarStudio({super.key});

  @override
  State<NgmySolarStudio> createState() => _NgmySolarStudioState();
}

class _NgmySolarStudioState extends State<NgmySolarStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final UAmbient _amb = UAmbient();
  double _days = 0;
  double _speed = 30; // days per second
  double _zoom = 1.0;
  Offset _pan = Offset.zero;
  double _baseZoom = 1;
  UBody? _sel;
  UBody? _follow;
  bool _orbits = true;
  bool _labels = true;
  bool _belt = true;
  bool _music = true;
  Size _size = Size.zero;
  final List<double> _beltAngles = [for (var i = 0; i < 260; i++) math.Random(i).nextDouble() * math.pi * 2];
  final List<double> _beltR = [for (var i = 0; i < 260; i++) 2.2 + math.Random(i + 900).nextDouble() * 1.0];

  static double orbitR(double au) => au == 0 ? 0 : 30 + 150 * math.sqrt(au / 30.1);
  static double bodySize(UBody b) => 1.5 + 1.6 * math.log(b.radiusKm / 1000 + 1);

  double _angleOf(UBody b) => b.periodDays <= 0 ? 0 : 2 * math.pi * (_days / b.periodDays) + b.au * 1.7;

  Offset _posOf(UBody b) {
    final r = orbitR(b.au);
    final a = _angleOf(b);
    return Offset(math.cos(a) * r, math.sin(a) * r);
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _amb.update(dt, _music);
    _days += dt * _speed;
    final f = _follow;
    if (f != null) {
      final target = -_posOf(f) * _zoom;
      _pan = Offset.lerp(_pan, target, 1 - math.exp(-dt * 5))!;
    }
  }

  Offset get _c => Offset(_size.width / 2, _size.height / 2) + _pan;

  UBody? _hit(Offset p) {
    UBody? best;
    var bd = 30.0;
    for (final b in kBodies) {
      final o = _c + _posOf(b) * _zoom;
      final d = (o - p).distance;
      if (d < bd) {
        bd = d;
        best = b;
      }
    }
    return best;
  }

  void _pick(UBody b) {
    setState(() {
      _sel = b;
      _follow = b;
      if (_zoom < 2.2) _zoom = 2.6;
    });
    HapticFeedback.selectionClick();
    final i = kBodies.indexOf(b);
    NgmyTone.playNote('bell', const [0, 2, 4, 7, 9, 12, 14, 16, 19, 21][i % 10] + 12, ms: 1000, volume: 0.5);
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    return StudioPage(
      title: 'SOLAR SYSTEM',
      accent: const Color(0xFFFBBF24),
      help: 'The Sun and its worlds, each going round at its own real speed. The distances are squeezed so everything fits.\n\nTap a planet, or use the buttons, to fly to it and read about it: how big it is, how long its day and year are, how strong its gravity is, how hot it is, and what you would weigh there.\n\nThe Time slider makes the planets move faster: at high speed you can watch a whole year of Earth go by in seconds, and see how much slower Neptune is. Pinch to zoom and drag to look around.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'solar-system'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: Stack(fit: StackFit.expand, children: [
            GestureDetector(
              behavior: HitTestBehavior.opaque,
              onScaleStart: (d) {
                _baseZoom = _zoom;
                _follow = null;
              },
              onScaleUpdate: (d) {
                if (d.pointerCount >= 2) {
                  _zoom = (_baseZoom * d.scale).clamp(0.5, 9.0);
                } else {
                  _pan += d.focalPointDelta;
                }
              },
              onTapUp: (d) {
                final b = _hit(d.localPosition);
                if (b != null) _pick(b);
              },
              child: CustomPaint(size: _size, painter: _SolarPainter(this)),
            ),
            if (sel != null) Positioned(left: 10, right: 10, bottom: 8, child: _card(sel)),
          ]),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'GO TO', children: [
          StudioChip(label: 'All', icon: Icons.zoom_out_map_rounded, selected: false, color: const Color(0xFFFBBF24), onTap: () => setState(() {
                _follow = null;
                _sel = null;
                _pan = Offset.zero;
                _zoom = 1;
              })),
          for (final b in kBodies) StudioChip(label: b.name, selected: _sel == b, color: Color(b.colorValue), onTap: () => _pick(b)),
        ]),
        StudioSlider(label: 'Time', value: math.log(_speed + 1) / math.log(3651), display: _speed < 10 ? '${_speed.toStringAsFixed(0)} d/s' : '${_speed.round()} d/s', color: const Color(0xFFFBBF24), onChanged: (v) => setState(() => _speed = math.exp(v * math.log(3651)) - 1)),
        StudioSlider(label: 'Zoom', value: _zoom, min: 0.5, max: 9, display: '${_zoom.toStringAsFixed(1)}x', color: const Color(0xFFFBBF24), onChanged: (v) => setState(() => _zoom = v)),
        StudioRow(children: [
          StudioChip(label: 'Orbits', selected: _orbits, color: const Color(0xFFFBBF24), onTap: () => setState(() => _orbits = !_orbits)),
          StudioChip(label: 'Names', selected: _labels, color: const Color(0xFFFBBF24), onTap: () => setState(() => _labels = !_labels)),
          StudioChip(label: 'Asteroids', selected: _belt, color: const Color(0xFFFBBF24), onTap: () => setState(() => _belt = !_belt)),
          StudioChip(label: 'Music', icon: _music ? Icons.music_note_rounded : Icons.music_off_rounded, selected: _music, color: const Color(0xFFFBBF24), onTap: () => setState(() => _music = !_music)),
        ]),
      ]),
    );
  }

  Widget _card(UBody b) {
    final c = Color(b.colorValue);
    String years(double days) => days >= 730 ? '${(days / 365.25).toStringAsFixed(days > 8000 ? 0 : 1)} Earth years' : '${days.toStringAsFixed(0)} Earth days';
    final km = b.au * 149.6;
    final minutes = b.au * 8.317;
    Widget stat(String k, String v) => Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(k, style: const TextStyle(color: Colors.white38, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
            const SizedBox(height: 1),
            Text(v, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 12.5, fontWeight: FontWeight.w800, height: 1.2)),
          ]),
        );
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 10, 8, 12),
      decoration: BoxDecoration(color: const Color(0xEE111318), borderRadius: BorderRadius.circular(20), border: Border.all(color: c.withValues(alpha: 0.6))),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Container(width: 12, height: 12, decoration: BoxDecoration(color: c, shape: BoxShape.circle)),
          const SizedBox(width: 8),
          Expanded(child: Text('${b.name}  ·  ${b.kind == 'star' ? 'Star' : (b.kind == 'dwarf' ? 'Dwarf planet' : 'Planet')}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17))),
          IconButton(visualDensity: VisualDensity.compact, onPressed: () => setState(() {
                _sel = null;
                _follow = null;
              }), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
        ]),
        const SizedBox(height: 4),
        Text(b.fact, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
        const SizedBox(height: 8),
        Row(children: [
          stat('WIDTH', '${withCommas(b.diameterKm)} km'),
          const SizedBox(width: 8),
          stat('FROM THE SUN', b.au == 0 ? '—' : '${b.au} AU (${withCommas(km)} million km)'),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          stat('ONE YEAR', b.periodDays == 0 ? '—' : years(b.periodDays)),
          const SizedBox(width: 8),
          stat('ONE DAY', b.dayHours >= 48 ? '${(b.dayHours / 24).toStringAsFixed(0)} Earth days' : '${b.dayHours.toStringAsFixed(1)} hours'),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          stat('GRAVITY', '${b.gravity} m/s² · a 50 kg person weighs ${(50 * b.gravity / 9.81).toStringAsFixed(b.gravity > 50 ? 0 : 1)} kg'),
          const SizedBox(width: 8),
          stat('TEMPERATURE', '${b.tempC.round()}°C'),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          stat('MOONS', b.kind == 'star' ? '—' : '${b.moons}'),
          const SizedBox(width: 8),
          stat('SUNLIGHT TAKES', b.au == 0 ? '—' : (minutes < 90 ? '${minutes.toStringAsFixed(1)} minutes' : '${(minutes / 60).toStringAsFixed(1)} hours')),
        ]),
      ]),
    );
  }
}

class _SolarPainter extends CustomPainter {
  _SolarPainter(this.s);
  final _NgmySolarStudioState s;

  static final Map<String, TextPainter> _tp = {};
  static TextPainter _text(String t, double size, Color c) => _tp.putIfAbsent('$t|$size|${c.toARGB32()}', () => TextPainter(text: TextSpan(text: t, style: TextStyle(fontSize: size, color: c, fontWeight: FontWeight.w800, shadows: const [Shadow(color: Colors.black, blurRadius: 4)])), textDirection: TextDirection.ltr)..layout());

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF05060B));
    final rnd = math.Random(8);
    for (var i = 0; i < 110; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 1.2 + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.2 + rnd.nextDouble() * 0.5));
    }
    final c = s._c;
    final z = s._zoom;
    if (s._orbits) {
      for (final b in kBodies.where((b) => b.au > 0)) {
        canvas.drawCircle(c, _NgmySolarStudioState.orbitR(b.au) * z, Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white.withValues(alpha: 0.12));
      }
    }
    if (s._belt) {
      for (var i = 0; i < s._beltAngles.length; i++) {
        final a = s._beltAngles[i] + s._days * 0.0016 / s._beltR[i];
        final r = _NgmySolarStudioState.orbitR(s._beltR[i]) * z;
        canvas.drawCircle(c + Offset(math.cos(a) * r, math.sin(a) * r), 0.9, Paint()..color = Colors.white.withValues(alpha: 0.5));
      }
    }
    final sunSize = _NgmySolarStudioState.bodySize(kBodies.first) * math.sqrt(z) * 1.4;
    canvas.drawCircle(c, sunSize * 3.2, Paint()..shader = RadialGradient(colors: [const Color(0xFFFBBF24).withValues(alpha: 0.5), Colors.transparent]).createShader(Rect.fromCircle(center: c, radius: sunSize * 3.2)));
    canvas.drawCircle(c, sunSize, Paint()..shader = const RadialGradient(colors: [Color(0xFFFEF9C3), Color(0xFFF59E0B), Color(0xFFEA580C)]).createShader(Rect.fromCircle(center: c, radius: sunSize)));
    if (s._labels) {
      final t = _text('Sun', 10.5, Colors.white70);
      t.paint(canvas, c + Offset(-t.width / 2, sunSize + 4));
    }
    for (final b in kBodies.where((b) => b.au > 0)) {
      final p = c + s._posOf(b) * z;
      final r = _NgmySolarStudioState.bodySize(b) * math.sqrt(z);
      final col = Color(b.colorValue);
      if (b.name == 'Saturn') {
        canvas.save();
        canvas.translate(p.dx, p.dy);
        canvas.rotate(-0.4);
        canvas.drawOval(Rect.fromCenter(center: Offset.zero, width: r * 4.2, height: r * 1.3), Paint()..style = PaintingStyle.stroke..strokeWidth = r * 0.45..color = const Color(0xFFFDE68A).withValues(alpha: 0.55));
        canvas.restore();
      }
      canvas.drawCircle(p, r + 3, Paint()..color = col.withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
      canvas.drawCircle(p, r, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, col, Color.lerp(col, Colors.black, 0.55)!], stops: const [0, 0.4, 1]).createShader(Rect.fromCircle(center: p, radius: r)));
      if (identical(b, s._sel)) canvas.drawCircle(p, r + 7, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white);
      // Earth's Moon and Jupiter's four big moons, when zoomed in.
      if (z > 1.6 && b.name == 'Earth') {
        final a = s._days / 27.3 * 2 * math.pi;
        final mr = r + 11 * math.sqrt(z);
        canvas.drawCircle(p + Offset(math.cos(a) * mr, math.sin(a) * mr), 1.8 * math.sqrt(z), Paint()..color = Colors.white);
      }
      if (z > 1.6 && b.name == 'Jupiter') {
        const periods = [1.77, 3.55, 7.15, 16.7];
        for (var i = 0; i < 4; i++) {
          final a = s._days / periods[i] * 2 * math.pi;
          final mr = r + (6 + i * 4) * math.sqrt(z);
          canvas.drawCircle(p + Offset(math.cos(a) * mr, math.sin(a) * mr), 1.4 * math.sqrt(z), Paint()..color = Colors.white70);
        }
      }
      if (s._labels) {
        final t = _text(b.name, 10.5, Colors.white70);
        t.paint(canvas, p + Offset(-t.width / 2, r + 4));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _SolarPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// GRAVITY LAB: drop things on other worlds, weigh yourself, and fire Newton's cannon.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyGravityLabStudio extends StatefulWidget {
  const NgmyGravityLabStudio({super.key});

  @override
  State<NgmyGravityLabStudio> createState() => _NgmyGravityLabStudioState();
}

class _NgmyGravityLabStudioState extends State<NgmyGravityLabStudio> with SingleTickerProviderStateMixin, StudioFrames {
  String _tab = 'drop';
  final UAmbient _amb = UAmbient();

  // Drop.
  bool _feather = false;
  bool _air = false;
  double _slow = 0.4;
  bool _dropping = false;
  double _t = 0;
  final List<double> _y = List.filled(5, 0); // metres fallen
  final List<double> _v = List.filled(5, 0);
  final List<double?> _landed = List.filled(5, null);
  static const double _height = 20; // metres

  // Weight.
  double _mass = 50;
  double _jump = 0.5;

  // Cannon.
  double _speed = 7.0; // km/s
  double _view = 2.0;
  bool _flying = false;
  Offset _cp = Offset.zero; // km, with Earth at the origin
  Offset _cv = Offset.zero; // km/s
  final List<Offset> _trail = [];
  String _outcome = '';
  static const double _gm = 398600; // km³/s²
  static const double _earthR = 6371;
  static const double _launchR = _earthR + 400;
  double _simTime = 0;

  void _startDrop() {
    _dropping = true;
    _t = 0;
    for (var i = 0; i < 5; i++) {
      _y[i] = 0;
      _v[i] = 0;
      _landed[i] = null;
    }
  }

  void _fire() {
    _cp = const Offset(0, -_launchR);
    _cv = Offset(_speed, 0);
    _trail
      ..clear()
      ..add(_cp);
    _flying = true;
    _simTime = 0;
    final vc = math.sqrt(_gm / _launchR), ve = math.sqrt(2 * _gm / _launchR);
    final e = (_launchR * _speed * _speed / _gm - 1).abs();
    if (_speed >= ve) {
      _outcome = 'It escapes Earth and never comes back.';
    } else if (_speed >= vc) {
      final peri = _launchR;
      _outcome = e < 0.03 ? 'A perfect circle: it orbits Earth forever.' : (peri > _earthR ? 'An oval orbit: it goes round Earth again and again.' : 'It falls back.');
    } else {
      final peri = _launchR * (1 - e) / (1 + e);
      _outcome = peri > _earthR ? 'An oval orbit: it goes round Earth again and again.' : 'It is too slow, so it falls back to the ground.';
    }
    NgmyTone.play(150, ms: 400, wave: 'noise', volume: 0.5);
    NgmyTone.play(90, ms: 300, sweep: 1.5, volume: 0.6);
    setState(() {});
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _amb.update(dt, _tab != 'drop');
    if (_tab == 'drop' && _dropping) {
      final h = dt * _slow;
      _t += h;
      for (var i = 0; i < 5; i++) {
        if (_landed[i] != null) continue;
        final w = kGravityWorlds[i];
        final k = _feather ? 1.6 * w.air * (_air ? 1 : 0) : 0.002 * w.air * (_air ? 1 : 0);
        // Many small steps, because the Sun's gravity makes things move fast.
        const steps = 12;
        for (var s = 0; s < steps; s++) {
          final d = h / steps;
          _v[i] += (w.g - k * _v[i] * _v[i].abs()) * d;
          _y[i] += _v[i] * d;
          if (_y[i] >= _height) {
            _y[i] = _height;
            _landed[i] = _t;
            if (w.name != 'Sun') NgmyTone.play(60 + w.g * 5, ms: 220, sweep: 0.6, volume: 0.55);
            break;
          }
        }
      }
      if (_landed.every((e) => e != null)) _dropping = false;
    }
    if (_tab == 'cannon' && _flying) {
      const scale = 900.0; // one real second is 900 seconds up there
      const sub = 30;
      final h = dt * scale / sub;
      for (var i = 0; i < sub; i++) {
        final r = _cp.distance;
        final a = _cp * (-_gm / (r * r * r));
        _cv += a * (h / 2);
        _cp += _cv * h;
        final r2 = _cp.distance;
        _cv += _cp * (-_gm / (r2 * r2 * r2)) * (h / 2);
        _simTime += h;
        if (_cp.distance < _earthR) {
          _flying = false;
          NgmyTone.play(70, ms: 350, wave: 'noise', volume: 0.7);
          break;
        }
      }
      if (_trail.isEmpty || (_trail.last - _cp).distance > 120) _trail.add(_cp);
      if (_trail.length > 700) _trail.removeAt(0);
      if (_cp.distance > 600000) _flying = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'GRAVITY LAB',
      accent: const Color(0xFFFB923C),
      help: 'Gravity is the pull that every thing with mass has on every other thing. The more mass, the stronger the pull.\n\nDROP: let a hammer or a feather fall on the Moon, Mars, Earth, Jupiter and the Sun at the same time. With air switched off they land together on every world (as the Apollo astronauts showed), but a world with stronger gravity makes them land sooner. Switch air on and the feather floats.\n\nWEIGHT: see what you would weigh on each world, and how high you could jump.\n\nNEWTON\'S CANNON: fire a ball sideways from a very tall mountain. Too slow and it falls back. At about 7.9 km/s it keeps missing the ground and goes into orbit. At 11.2 km/s it escapes Earth completely. This is how satellites and the Moon stay up.',
      stage: _tab == 'drop' ? _dropStage() : (_tab == 'weight' ? _weightStage() : _cannonStage()),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final t in const [('drop', 'Drop', Icons.south_rounded), ('weight', 'Weight', Icons.scale_rounded), ('cannon', 'Newton\'s cannon', Icons.gps_fixed_rounded)])
            StudioChip(label: t.$2, icon: t.$3, selected: _tab == t.$1, color: const Color(0xFFFB923C), onTap: () => setState(() => _tab = t.$1)),
        ]),
        if (_tab == 'drop') ...[
          StudioRow(children: [
            StudioChip(label: 'Hammer', icon: Icons.hardware_rounded, selected: !_feather, color: const Color(0xFFFB923C), onTap: () => setState(() => _feather = false)),
            StudioChip(label: 'Feather', icon: Icons.air_rounded, selected: _feather, color: const Color(0xFFFB923C), onTap: () => setState(() => _feather = true)),
            StudioChip(label: _air ? 'Air on' : 'Air off', icon: Icons.cloud_rounded, selected: _air, color: const Color(0xFF38BDF8), onTap: () => setState(() => _air = !_air)),
          ]),
          StudioSlider(label: 'Slow motion', value: _slow, min: 0.05, max: 1, display: '${(_slow * 100).round()}%', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _slow = v)),
          StudioRow(children: [StudioButton(icon: Icons.arrow_downward_rounded, label: 'Drop!', color: const Color(0xFF4ADE80), onTap: () => setState(_startDrop))]),
        ],
        if (_tab == 'weight') ...[
          StudioSlider(label: 'Your weight', value: _mass, min: 20, max: 120, display: '${_mass.round()} kg', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _mass = v)),
          StudioSlider(label: 'Your jump', value: _jump, min: 0.1, max: 1.2, display: '${(_jump * 100).round()} cm', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _jump = v)),
        ],
        if (_tab == 'cannon') ...[
          StudioSlider(label: 'Speed', value: _speed, min: 0, max: 13, display: '${_speed.toStringAsFixed(1)} km/s', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _speed = v)),
          StudioSlider(label: 'View', value: _view, min: 0.5, max: 8, display: '${_view.toStringAsFixed(1)}x out', color: const Color(0xFFFB923C), onChanged: (v) => setState(() => _view = v)),
          StudioRow(children: [
            StudioButton(icon: Icons.rocket_launch_rounded, label: 'Fire!', color: const Color(0xFF4ADE80), onTap: _fire),
            StudioButton(icon: Icons.arrow_downward_rounded, label: 'Falls', onTap: () => setState(() => _speed = 4.0)),
            StudioButton(icon: Icons.circle_outlined, label: 'Orbit 7.7', onTap: () => setState(() => _speed = 7.67)),
            StudioButton(icon: Icons.egg_alt_outlined, label: 'Oval 9', onTap: () => setState(() => _speed = 9.0)),
            StudioButton(icon: Icons.open_in_full_rounded, label: 'Escape', onTap: () => setState(() => _speed = 11.3)),
          ]),
        ],
      ]),
    );
  }

  // ── Drop ────────────────────────────────────────────────────────────────────

  Widget _dropStage() {
    return Padding(
      padding: const EdgeInsets.fromLTRB(10, 10, 10, 6),
      child: LayoutBuilder(builder: (context, box) {
        final colW = box.maxWidth / 5;
        const top = 54.0;
        final bottom = box.maxHeight - 60;
        return Stack(children: [
          Positioned.fill(child: DecoratedBox(decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), color: const Color(0xFF0B0D12)))),
          for (var i = 0; i < 5; i++) ...[
            Positioned(
              left: i * colW,
              width: colW,
              top: 8,
              child: Column(children: [
                Text(kGravityWorlds[i].name, style: TextStyle(color: Color(kGravityWorlds[i].colorValue), fontWeight: FontWeight.w900, fontSize: 12.5)),
                Text('${kGravityWorlds[i].g} m/s²', style: const TextStyle(color: Colors.white38, fontSize: 9.5)),
              ]),
            ),
            Positioned(left: i * colW + colW / 2 - 0.5, top: top, bottom: box.maxHeight - bottom, child: Container(width: 1, color: Colors.white10)),
            Positioned(
              left: i * colW + colW / 2 - 11,
              top: top + (bottom - top - 22) * (_y[i] / _height),
              child: _feather
                  ? Icon(Icons.air_rounded, color: Color(kGravityWorlds[i].colorValue), size: 22)
                  : Container(width: 22, height: 22, decoration: BoxDecoration(shape: BoxShape.circle, color: Color(kGravityWorlds[i].colorValue), boxShadow: [BoxShadow(color: Color(kGravityWorlds[i].colorValue).withValues(alpha: 0.6), blurRadius: 10)])),
            ),
            Positioned(
              left: i * colW,
              width: colW,
              bottom: 8,
              child: Column(children: [
                Container(height: 3, margin: const EdgeInsets.symmetric(horizontal: 8), color: Color(kGravityWorlds[i].colorValue).withValues(alpha: 0.6)),
                const SizedBox(height: 4),
                Text(_landed[i] == null ? (_dropping ? '…' : '—') : '${_landed[i]!.toStringAsFixed(2)} s', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13)),
                Text(_landed[i] == null ? '' : 'to land', style: const TextStyle(color: Colors.white38, fontSize: 9)),
              ]),
            ),
          ],
          if (!_dropping && _landed.every((e) => e == null))
            const Center(child: Padding(padding: EdgeInsets.all(30), child: Text('Press Drop! and watch them fall from 20 metres.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38)))),
        ]);
      }),
    );
  }

  // ── Weight ──────────────────────────────────────────────────────────────────

  Widget _weightStage() {
    final worlds = [
      ('Moon', 1.62, 0xFFD1D5DB),
      ('Mercury', 3.70, 0xFF9CA3AF),
      ('Mars', 3.71, 0xFFF87171),
      ('Venus', 8.87, 0xFFFCD34D),
      ('Earth', 9.81, 0xFF38BDF8),
      ('Saturn', 10.44, 0xFFFDE68A),
      ('Neptune', 11.15, 0xFF60A5FA),
      ('Jupiter', 24.79, 0xFFFB923C),
      ('Sun', 274.0, 0xFFFBBF24),
    ];
    return ListView(padding: const EdgeInsets.fromLTRB(14, 10, 14, 10), children: [
      const Text('Your mass never changes. What changes is how hard each world pulls on it.', style: TextStyle(color: Colors.white54, fontSize: 12.5, height: 1.4)),
      const SizedBox(height: 10),
      for (final w in worlds)
        Padding(
          padding: const EdgeInsets.only(bottom: 8),
          child: Row(children: [
            SizedBox(width: 62, child: Text(w.$1, style: TextStyle(color: Color(w.$3), fontWeight: FontWeight.w900, fontSize: 12.5))),
            Expanded(
              child: LayoutBuilder(builder: (context, box) {
                final weight = _mass * w.$2 / 9.81;
                final f = (math.log(weight + 1) / math.log(_mass * 274 / 9.81 + 1)).clamp(0.02, 1.0);
                return Stack(children: [
                  Container(height: 26, decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: Colors.white.withValues(alpha: 0.05))),
                  AnimatedContainer(duration: const Duration(milliseconds: 250), height: 26, width: box.maxWidth * f, decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), gradient: LinearGradient(colors: [Color(w.$3).withValues(alpha: 0.9), Color(w.$3).withValues(alpha: 0.4)]))),
                  Positioned(left: 8, top: 4, child: Text('${weight < 100 ? weight.toStringAsFixed(1) : withCommas(weight)} kg  ·  jump ${(_jump * 9.81 / w.$2) < 10 ? (_jump * 9.81 / w.$2).toStringAsFixed(2) : (_jump * 9.81 / w.$2).toStringAsFixed(0)} m', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12, shadows: [Shadow(color: Colors.black54, blurRadius: 3)]))),
                ]);
              }),
            ),
          ]),
        ),
      const SizedBox(height: 4),
      const Text('Bars use a squeezed scale so the Sun fits. The numbers are the true values: what a scale would read, and how high you could jump.', style: TextStyle(color: Colors.white30, fontSize: 11, height: 1.4)),
    ]);
  }

  // ── Newton's cannon ─────────────────────────────────────────────────────────

  Widget _cannonStage() {
    return LayoutBuilder(builder: (context, box) {
      final c = Offset(box.maxWidth / 2, box.maxHeight / 2 + box.maxHeight * 0.05);
      final px = math.min(box.maxWidth, box.maxHeight) * 0.18 / _earthR * (2 / _view);
      return Stack(fit: StackFit.expand, children: [
        CustomPaint(painter: _CannonPainter(c, px, _cp, _trail, _flying || _trail.isNotEmpty)),
        Positioned(
          left: 12,
          right: 12,
          top: 8,
          child: Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(_outcome.isEmpty ? 'Set a speed and press Fire!' : _outcome, style: TextStyle(color: _outcome.contains('forever') || _outcome.contains('again') ? const Color(0xFF4ADE80) : (_outcome.contains('escapes') ? const Color(0xFF38BDF8) : Colors.white), fontWeight: FontWeight.w900, fontSize: 13.5)),
              const SizedBox(height: 2),
              Text('Circular orbit here: ${math.sqrt(_gm / _launchR).toStringAsFixed(1)} km/s.  Escape speed: ${math.sqrt(2 * _gm / _launchR).toStringAsFixed(1)} km/s.${_flying ? '  Height now: ${withCommas((_cp.distance - _earthR).clamp(0, 9e9))} km' : ''}', style: const TextStyle(color: Colors.white60, fontSize: 11.5, height: 1.35)),
            ]),
          ),
        ),
      ]);
    });
  }
}

class _CannonPainter extends CustomPainter {
  _CannonPainter(this.c, this.px, this.p, this.trail, this.show);
  final Offset c;
  final double px;
  final Offset p;
  final List<Offset> trail;
  final bool show;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF05060B));
    final rnd = math.Random(2);
    for (var i = 0; i < 80; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() * 1.1 + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.2 + rnd.nextDouble() * 0.5));
    }
    const earthR = 6371.0;
    final R = earthR * px;
    canvas.drawCircle(c, R * 1.06, Paint()..shader = RadialGradient(colors: [Colors.transparent, const Color(0xFF38BDF8).withValues(alpha: 0.35), Colors.transparent], stops: const [0.9, 0.97, 1]).createShader(Rect.fromCircle(center: c, radius: R * 1.1)));
    canvas.drawCircle(c, R, Paint()..shader = const RadialGradient(center: Alignment(-0.3, -0.4), colors: [Color(0xFF2E7DC4), Color(0xFF0E3A6B), Color(0xFF071A33)], stops: [0, 0.7, 1]).createShader(Rect.fromCircle(center: c, radius: R)));
    // The mountain and the cannon at the top.
    final top = c + Offset(0, -R);
    final mt = Path()
      ..moveTo(top.dx - 16, top.dy + 3)
      ..lineTo(top.dx, top.dy - 400 * px - 4)
      ..lineTo(top.dx + 16, top.dy + 3)
      ..close();
    canvas.drawPath(mt, Paint()..color = const Color(0xFF64748B));
    canvas.drawCircle(top + Offset(0, -400 * px - 6), 4, Paint()..color = Colors.white);
    if (trail.length > 1) {
      final path = Path()..moveTo(c.dx + trail.first.dx * px, c.dy + trail.first.dy * px);
      for (final t in trail.skip(1)) {
        path.lineTo(c.dx + t.dx * px, c.dy + t.dy * px);
      }
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..strokeCap = StrokeCap.round..color = const Color(0xFFFB923C).withValues(alpha: 0.9));
    }
    if (show) {
      final b = c + Offset(p.dx * px, p.dy * px);
      canvas.drawCircle(b, 7, Paint()..color = const Color(0xFFFB923C).withValues(alpha: 0.4)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
      canvas.drawCircle(b, 4, Paint()..color = Colors.white);
    }
  }

  @override
  bool shouldRepaint(covariant _CannonPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// SIZE COMPARE: put two worlds or stars side by side at true scale.
// ═════════════════════════════════════════════════════════════════════════════

class NgmySizeStudio extends StatefulWidget {
  const NgmySizeStudio({super.key});

  @override
  State<NgmySizeStudio> createState() => _NgmySizeStudioState();
}

class _NgmySizeStudioState extends State<NgmySizeStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  int _a = 1; // Earth
  int _b = 5; // Sun
  double _shown = 0; // animated zoom (log scale)

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {}

  @override
  Widget build(BuildContext context) {
    final a = kSizes[_a], b = kSizes[_b];
    final big = a.radiusKm >= b.radiusKm ? a : b;
    final small = a.radiusKm >= b.radiusKm ? b : a;
    final ratio = big.radiusKm / small.radiusKm;
    return StudioPage(
      title: 'SIZE COMPARE',
      accent: const Color(0xFFF472B6),
      help: 'Pick two things in space and see them side by side at their true relative size. The text tells you how many times wider one is, and how many of the smaller one would fit inside the bigger.\n\nTry Earth and the Sun, then the Sun and Betelgeuse, to feel how big space really is.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'size-compare'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: RepaintBoundary(
        key: _shot,
        child: Column(children: [
          Expanded(
            child: CustomPaint(size: Size.infinite, painter: _SizePainter(small, big, ratio)),
          ),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.fromLTRB(16, 8, 16, 12),
            child: Column(children: [
              Text('${big.name} is ${ratio < 10 ? ratio.toStringAsFixed(1) : withCommas(ratio)} times wider than ${small.name}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
              const SizedBox(height: 4),
              Text('About ${withCommas(ratio * ratio * ratio)} ${small.name}${small.name.endsWith('s') ? '' : 's'} would fit inside ${big.name}.', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white60, fontSize: 12.5)),
              const SizedBox(height: 2),
              Text('${small.name}: ${withCommas(small.radiusKm * 2)} km wide. ${big.name}: ${withCommas(big.radiusKm * 2)} km wide.', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white38, fontSize: 11.5)),
            ]),
          ),
        ]),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'FIRST', children: [
          for (var i = 0; i < kSizes.length; i++) StudioChip(label: kSizes[i].name, selected: _a == i, color: Color(kSizes[i].colorValue), onTap: () => setState(() => _a = i)),
        ]),
        StudioRow(label: 'SECOND', children: [
          for (var i = 0; i < kSizes.length; i++) StudioChip(label: kSizes[i].name, selected: _b == i, color: Color(kSizes[i].colorValue), onTap: () => setState(() => _b = i)),
        ]),
      ]),
    );
  }
}

class _SizePainter extends CustomPainter {
  _SizePainter(this.small, this.big, this.ratio);
  final USize small;
  final USize big;
  final double ratio;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF07070B));
    final rnd = math.Random(6);
    for (var i = 0; i < 70; i++) {
      canvas.drawCircle(Offset(rnd.nextDouble() * size.width, rnd.nextDouble() * size.height), rnd.nextDouble() + 0.3, Paint()..color = Colors.white.withValues(alpha: 0.2 + rnd.nextDouble() * 0.4));
    }
    // The big one fills most of the space; the small one is drawn at its true relative size.
    final bigR = math.min(size.width / 2 - 16, size.height / 2 - 10) * 0.98;
    final smallR = math.max(bigR / ratio, 0.8);
    final bigC = Offset(size.width * 0.5, size.height * 0.5);
    void ball(Offset c, double r, Color col) {
      canvas.drawCircle(c, r * 1.12, Paint()..color = col.withValues(alpha: 0.2)..maskFilter = MaskFilter.blur(BlurStyle.normal, math.max(2, r * 0.18)));
      canvas.drawCircle(c, r, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, col, Color.lerp(col, Colors.black, 0.6)!], stops: const [0, 0.4, 1]).createShader(Rect.fromCircle(center: c, radius: r)));
    }

    ball(bigC, bigR, Color(big.colorValue));
    final smallC = Offset(bigC.dx - bigR + smallR + 6 + (bigR - smallR) * 0.1, bigC.dy + bigR - smallR - 6 - (bigR - smallR) * 0.05);
    ball(smallC, smallR, Color(small.colorValue));
    canvas.drawCircle(smallC, smallR + 3, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = Colors.white70);
    final tp = TextPainter(text: TextSpan(text: small.name, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900, shadows: [Shadow(color: Colors.black, blurRadius: 4)])), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, smallC + Offset(-tp.width / 2, -smallR - tp.height - 6 < 4 ? smallR + 6 : -smallR - tp.height - 6));
    final tb = TextPainter(text: TextSpan(text: big.name, style: const TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w900, shadows: [Shadow(color: Colors.black, blurRadius: 5)])), textDirection: TextDirection.ltr)..layout();
    tb.paint(canvas, bigC + Offset(-tb.width / 2, -tb.height / 2));
  }

  @override
  bool shouldRepaint(covariant _SizePainter old) => true;
}
