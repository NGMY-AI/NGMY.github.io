import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// 15. MARBLE MUSIC: build a run of pegs and bars; marbles roll down and ring them like a xylophone.
// ═════════════════════════════════════════════════════════════════════════════

class _MPeg {
  _MPeg(this.a, this.b, this.semis, this.color);
  final Offset a;
  final Offset b; // equal to [a] for a round peg
  final int semis;
  final Color color;
  int flash = -1000;
  int lastHit = -1000;
  bool get isBar => (a - b).distance > 4;
}

class _Marble {
  _Marble(this.p, this.v, this.color);
  Offset p;
  Offset v;
  final Color color;
}

class NgmyMarbleStudio extends StatefulWidget {
  const NgmyMarbleStudio({super.key});

  @override
  State<NgmyMarbleStudio> createState() => _NgmyMarbleStudioState();
}

class _NgmyMarbleStudioState extends State<NgmyMarbleStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final List<_MPeg> _pegs = [];
  final List<_Marble> _marbles = [];
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  String _tool = 'peg';
  String _scale = 'Pentatonic';
  String _inst = 'bell';
  double _rate = 1.4; // marbles per second
  double _spawn = 0;
  Offset? _barStart;
  Offset? _barEnd;
  bool _sound = true;

  Color _colorFor(int semis) => HSVColor.fromAHSV(1, (semis * 29.0) % 360, 0.6, 1).toColor();

  int _noteAt(Offset p) {
    final scale = kStudioScales[_scale]!;
    final slots = scale.length * 2;
    final i = ((p.dx / (_size.width <= 0 ? 1 : _size.width)) * slots).floor().clamp(0, slots - 1);
    return scale[i % scale.length] + 12 * (i ~/ scale.length) + 0;
  }

  void _addPeg(Offset p) {
    final semis = _noteAt(p);
    _pegs.add(_MPeg(p, p, semis, _colorFor(semis)));
    if (_sound) NgmyTone.playNote(_inst, semis + 12, ms: 700, volume: 0.5);
  }

  void _erase(Offset p) {
    _pegs.removeWhere((g) {
      final d = g.isBar ? _segDist(p, g.a, g.b) : (p - g.a).distance;
      return d < 24;
    });
  }

  double _segDist(Offset p, Offset a, Offset b) {
    final ab = b - a;
    final l2 = ab.dx * ab.dx + ab.dy * ab.dy;
    if (l2 < 1) return (p - a).distance;
    final t = (((p - a).dx * ab.dx + (p - a).dy * ab.dy) / l2).clamp(0.0, 1.0);
    return (p - (a + ab * t)).distance;
  }

  void _preset(String name) {
    _pegs.clear();
    final w = _size.width, h = _size.height;
    switch (name) {
      case 'stairs':
        for (var i = 0; i < 7; i++) {
          final a = Offset(w * (i.isEven ? 0.08 : 0.42), h * (0.2 + i * 0.1));
          final b = Offset(a.dx + w * 0.5, a.dy + h * 0.045 * (i.isEven ? 1 : 1));
          final semis = _noteAt((a + b) / 2);
          _pegs.add(_MPeg(i.isEven ? a : Offset(a.dx + w * 0.5, a.dy), i.isEven ? b : Offset(a.dx, a.dy + h * 0.045), semis, _colorFor(semis)));
        }
      case 'pinball':
        for (var r = 0; r < 7; r++) {
          for (var c = 0; c < 6; c++) {
            final p = Offset(w * (0.1 + c * 0.16 + (r.isOdd ? 0.08 : 0)), h * (0.22 + r * 0.095));
            final semis = _noteAt(p);
            _pegs.add(_MPeg(p, p, semis, _colorFor(semis)));
          }
        }
      default:
        for (var i = 0; i < 28; i++) {
          final p = Offset(w * (0.08 + _rnd.nextDouble() * 0.84), h * (0.2 + _rnd.nextDouble() * 0.65));
          final semis = _noteAt(p);
          _pegs.add(_MPeg(p, p, semis, _colorFor(semis)));
        }
    }
  }

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  void _hit(_MPeg g, double speed) {
    if (nowMs - g.lastHit < 90 || speed < 40) return;
    g.lastHit = nowMs;
    g.flash = nowMs;
    if (_sound) NgmyTone.playNote(_inst, g.semis + 12, ms: _inst == 'bell' || _inst == 'piano' ? 1000 : 500, volume: (0.25 + speed / 900).clamp(0.25, 0.8));
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    _spawn += dt * _rate;
    while (_spawn >= 1 && _marbles.length < 70) {
      _spawn -= 1;
      _marbles.add(_Marble(Offset(_size.width * (0.2 + _rnd.nextDouble() * 0.6), 6), Offset((_rnd.nextDouble() - 0.5) * 40, 0), HSVColor.fromAHSV(1, _rnd.nextDouble() * 360, 0.5, 1).toColor()));
    }
    if (_spawn > 3) _spawn = 0;
    const r = 7.0;
    for (final m in _marbles) {
      for (var s = 0; s < 2; s++) {
        final h = dt / 2;
        m.v += Offset(0, 900 * h);
        m.p += m.v * h;
        if (m.p.dx < r) {
          m.p = Offset(r, m.p.dy);
          m.v = Offset(-m.v.dx * 0.6, m.v.dy);
        }
        if (m.p.dx > _size.width - r) {
          m.p = Offset(_size.width - r, m.p.dy);
          m.v = Offset(-m.v.dx * 0.6, m.v.dy);
        }
        for (final g in _pegs) {
          Offset q;
          double rad;
          if (g.isBar) {
            final ab = g.b - g.a;
            final l2 = ab.dx * ab.dx + ab.dy * ab.dy;
            final t = (((m.p - g.a).dx * ab.dx + (m.p - g.a).dy * ab.dy) / l2).clamp(0.0, 1.0);
            q = g.a + ab * t;
            rad = 4;
          } else {
            q = g.a;
            rad = 10;
          }
          final d = m.p - q;
          final dist = d.distance;
          if (dist < r + rad && dist > 0.001) {
            final n = d / dist;
            m.p = q + n * (r + rad);
            final vn = m.v.dx * n.dx + m.v.dy * n.dy;
            if (vn < 0) {
              _hit(g, -vn);
              m.v = m.v - n * (vn * 1.55);
            }
          }
        }
      }
    }
    _marbles.removeWhere((m) => m.p.dy > _size.height + 30);
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'MARBLE MUSIC',
      accent: const Color(0xFF22D3EE),
      help: 'Marbles drop from the top and roll down through whatever you build. Every peg and bar they touch rings a note, like a xylophone.\n\nPEG: tap to place a round peg. BAR: drag a line to make a ramp that also rings. ERASE: tap to take one away. The note of a peg depends on where it is: left is low, right is high.\n\nTry the ready-made Stairs, Pinball and Random, or build your own song. Change the scale, the instrument and how fast marbles drop.',
      actions: [
        IconButton(onPressed: () => setState(() => _sound = !_sound), icon: Icon(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, color: Colors.white70, size: 21), tooltip: 'Sound'),
        IconButton(onPressed: () => studioShare(context, _shot, name: 'marble-music'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: (d) {
              if (_tool == 'peg') _addPeg(d.localPosition);
              if (_tool == 'erase') _erase(d.localPosition);
            },
            onPanStart: (d) {
              if (_tool == 'bar') {
                _barStart = d.localPosition;
                _barEnd = d.localPosition;
              }
            },
            onPanUpdate: (d) {
              if (_tool == 'bar') _barEnd = d.localPosition;
              if (_tool == 'erase') _erase(d.localPosition);
            },
            onPanEnd: (_) {
              if (_tool == 'bar' && _barStart != null && _barEnd != null && (_barEnd! - _barStart!).distance > 30) {
                final semis = _noteAt((_barStart! + _barEnd!) / 2);
                _pegs.add(_MPeg(_barStart!, _barEnd!, semis, _colorFor(semis)));
                if (_sound) NgmyTone.playNote(_inst, semis + 12, ms: 700, volume: 0.5);
              }
              _barStart = null;
              _barEnd = null;
            },
            child: CustomPaint(size: _size, painter: _MarblePainter(_pegs, _marbles, _barStart, _barEnd, nowMs)),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'TOOL', children: [
          for (final t in const [('peg', 'Peg', Icons.circle_rounded), ('bar', 'Bar', Icons.show_chart_rounded), ('erase', 'Erase', Icons.backspace_rounded)])
            StudioChip(label: t.$2, icon: t.$3, selected: _tool == t.$1, color: const Color(0xFF22D3EE), onTap: () => setState(() => _tool = t.$1)),
        ]),
        StudioRow(label: 'SCALE', children: [
          for (final s in kStudioScales.keys) StudioChip(label: s, selected: _scale == s, color: const Color(0xFF22D3EE), onTap: () => setState(() => _scale = s)),
        ]),
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFF22D3EE), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioSlider(label: 'Marbles', value: _rate, min: 0.3, max: 4, display: '${_rate.toStringAsFixed(1)}/s', onChanged: (v) => setState(() => _rate = v), color: const Color(0xFF22D3EE)),
        StudioRow(children: [
          StudioButton(icon: Icons.stairs_rounded, label: 'Stairs', color: const Color(0xFF22D3EE), onTap: () => setState(() => _preset('stairs'))),
          StudioButton(icon: Icons.grain_rounded, label: 'Pinball', onTap: () => setState(() => _preset('pinball'))),
          StudioButton(icon: Icons.casino_rounded, label: 'Random', onTap: () => setState(() => _preset('random'))),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(() {
                _pegs.clear();
                _marbles.clear();
              })),
        ]),
      ]),
    );
  }
}

class _MarblePainter extends CustomPainter {
  _MarblePainter(this.pegs, this.marbles, this.bs, this.be, this.now);
  final List<_MPeg> pegs;
  final List<_Marble> marbles;
  final Offset? bs;
  final Offset? be;
  final int now;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF080A12), Color(0xFF0E1420)]).createShader(Offset.zero & size));
    for (final g in pegs) {
      final k = (1 - (now - g.flash) / 280).clamp(0.0, 1.0);
      if (g.isBar) {
        canvas.drawLine(g.a, g.b, Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeWidth = 12 + 8 * k..color = g.color.withValues(alpha: 0.2 + 0.5 * k)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
        canvas.drawLine(g.a, g.b, Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeWidth = 6..color = Color.lerp(g.color, Colors.white, k * 0.7)!);
      } else {
        canvas.drawCircle(g.a, 10 + 8 * k, Paint()..color = g.color.withValues(alpha: 0.25 + 0.5 * k)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
        canvas.drawCircle(g.a, 9, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, g.color, Color.lerp(g.color, Colors.black, 0.4)!]).createShader(Rect.fromCircle(center: g.a, radius: 9)));
      }
    }
    if (bs != null && be != null) canvas.drawLine(bs!, be!, Paint()..strokeWidth = 5..strokeCap = StrokeCap.round..color = Colors.white54);
    for (final m in marbles) {
      canvas.drawCircle(m.p, 10, Paint()..color = m.color.withValues(alpha: 0.3)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 4));
      canvas.drawCircle(m.p, 7, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, m.color]).createShader(Rect.fromCircle(center: m.p, radius: 7)));
    }
  }

  @override
  bool shouldRepaint(covariant _MarblePainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 16. ORBIT SEQUENCER: planets circle on rings. Every time one passes the top, its note plays.
// ═════════════════════════════════════════════════════════════════════════════

class _OPlanet {
  _OPlanet(this.ring, this.phase);
  final int ring;
  double phase; // 0..1 around the ring, 0 is the top
  int flash = -1000;
}

class NgmyOrbitSequencerStudio extends StatefulWidget {
  const NgmyOrbitSequencerStudio({super.key});

  @override
  State<NgmyOrbitSequencerStudio> createState() => _NgmyOrbitSequencerStudioState();
}

class _NgmyOrbitSequencerStudioState extends State<NgmyOrbitSequencerStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  final List<_OPlanet> _planets = [];
  bool _demoMade = false;
  final math.Random _rnd = math.Random();
  Size _size = Size.zero;
  static const int _rings = 6;
  double _bpm = 80;
  String _scale = 'Pentatonic';
  String _inst = 'bell';
  bool _sound = true;

  Offset get _c => Offset(_size.width / 2, _size.height / 2);
  double _radius(int ring) {
    final r = math.min(_size.width, _size.height) / 2 - 18;
    return 36 + (r - 36) * ring / (_rings - 1);
  }

  /// The outer rings are low notes and turn slowly; the inner rings are high and quick.
  int _semis(int ring) {
    final scale = kStudioScales[_scale]!;
    final i = _rings - 1 - ring;
    return scale[i % scale.length] + 12 * (i ~/ scale.length);
  }

  double _period(int ring) => (60 / _bpm) * (2 + ring * 1.0) * 2; // seconds for one lap

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  void _demo() {
    _planets.clear();
    for (var r = 0; r < _rings; r++) {
      final n = r.isEven ? 2 : 1;
      for (var k = 0; k < n; k++) {
        _planets.add(_OPlanet(r, (k / n + r * 0.13) % 1));
      }
    }
  }

  @override
  void onFrame(double dt) {
    if (_size == Size.zero) return;
    for (final p in _planets) {
      p.phase += dt / _period(p.ring);
      if (p.phase >= 1) {
        p.phase -= 1;
        p.flash = nowMs;
        if (_sound) NgmyTone.playNote(_inst, _semis(p.ring) + 12, ms: _inst == 'bell' || _inst == 'piano' ? 1100 : 600, volume: 0.55);
      }
    }
  }

  void _tap(Offset pos) {
    final d = pos - _c;
    final dist = d.distance;
    // Nearest ring.
    var best = 0;
    var bd = 1e9;
    for (var r = 0; r < _rings; r++) {
      final dd = (_radius(r) - dist).abs();
      if (dd < bd) {
        bd = dd;
        best = r;
      }
    }
    if (bd > 28) return;
    final phase = ((math.atan2(d.dy, d.dx) + math.pi / 2) / (2 * math.pi) + 1) % 1;
    // Tapping a planet removes it.
    for (final p in _planets.toList()) {
      if (p.ring != best) continue;
      final a = p.phase * 2 * math.pi - math.pi / 2;
      final pp = _c + Offset(math.cos(a), math.sin(a)) * _radius(p.ring);
      if ((pp - pos).distance < 24) {
        setState(() => _planets.remove(p));
        return;
      }
    }
    setState(() => _planets.add(_OPlanet(best, phase)..flash = nowMs));
    if (_sound) NgmyTone.playNote(_inst, _semis(best) + 12, ms: 700, volume: 0.5);
    HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'ORBIT SEQUENCER',
      accent: const Color(0xFFA78BFA),
      help: 'Planets travel round rings. Each time a planet passes the top, it rings its note.\n\nTap a ring to put a planet on it. Tap a planet to take it away. The outer rings are low notes and turn slowly, the inner rings are high and quick. Because every ring has a different speed, the pattern changes and then comes back around, just like real music loops.\n\nPick a scale and an instrument, and change the tempo.',
      actions: [
        IconButton(onPressed: () => setState(() => _sound = !_sound), icon: Icon(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, color: Colors.white70, size: 21), tooltip: 'Sound'),
        IconButton(onPressed: () => studioShare(context, _shot, name: 'orbit-sequencer'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        if (!_demoMade) {
          _demoMade = true;
          _demo();
        }
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: (d) => _tap(d.localPosition),
            child: CustomPaint(size: _size, painter: _OrbitSeqPainter(_planets, _c, _rings, _radius, _semis, nowMs)),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Tempo', value: _bpm, min: 40, max: 180, display: '${_bpm.round()}', onChanged: (v) => setState(() => _bpm = v), color: const Color(0xFFA78BFA)),
        StudioRow(label: 'SCALE', children: [
          for (final s in kStudioScales.keys) StudioChip(label: s, selected: _scale == s, color: const Color(0xFFA78BFA), onTap: () => setState(() => _scale = s)),
        ]),
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFFA78BFA), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioRow(children: [
          StudioButton(icon: Icons.auto_awesome_rounded, label: 'Demo', color: const Color(0xFFA78BFA), onTap: () => setState(_demo)),
          StudioButton(icon: Icons.casino_rounded, label: 'Random', onTap: () => setState(() {
                _planets.clear();
                for (var i = 0; i < 9; i++) {
                  _planets.add(_OPlanet(_rnd.nextInt(_rings), _rnd.nextDouble()));
                }
              })),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(_planets.clear)),
        ]),
      ]),
    );
  }
}

class _OrbitSeqPainter extends CustomPainter {
  _OrbitSeqPainter(this.planets, this.c, this.rings, this.radius, this.semis, this.now);
  final List<_OPlanet> planets;
  final Offset c;
  final int rings;
  final double Function(int) radius;
  final int Function(int) semis;
  final int now;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF07070B));
    // The trigger line at the top.
    final top = radius(rings - 1) + 14;
    canvas.drawLine(c, c - Offset(0, top), Paint()..strokeWidth = 2..shader = LinearGradient(begin: Alignment.bottomCenter, end: Alignment.topCenter, colors: [Colors.white.withValues(alpha: 0.05), Colors.white.withValues(alpha: 0.5)]).createShader(Rect.fromLTWH(c.dx - 1, c.dy - top, 2, top)));
    for (var r = 0; r < rings; r++) {
      final col = HSVColor.fromAHSV(1, (semis(r) * 23.0) % 360, 0.55, 1).toColor();
      canvas.drawCircle(c, radius(r), Paint()..style = PaintingStyle.stroke..strokeWidth = 1.6..color = col.withValues(alpha: 0.35));
      final tp = TextPainter(text: TextSpan(text: NgmyTone.nameOf(semis(r)), style: TextStyle(color: col.withValues(alpha: 0.8), fontSize: 9.5, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, c + Offset(-tp.width / 2, -radius(r) - tp.height - 2));
    }
    canvas.drawCircle(c, 16, Paint()..shader = const RadialGradient(colors: [Color(0xFFFEF08A), Color(0xFFF59E0B)]).createShader(Rect.fromCircle(center: c, radius: 16)));
    for (final p in planets) {
      final a = p.phase * 2 * math.pi - math.pi / 2;
      final pos = c + Offset(math.cos(a), math.sin(a)) * radius(p.ring);
      final col = HSVColor.fromAHSV(1, (semis(p.ring) * 23.0) % 360, 0.55, 1).toColor();
      final k = (1 - (now - p.flash) / 450).clamp(0.0, 1.0);
      if (k > 0) canvas.drawCircle(c + Offset(0, -radius(p.ring)), 10 + 26 * (1 - k), Paint()..style = PaintingStyle.stroke..strokeWidth = 3 * k..color = col.withValues(alpha: k));
      canvas.drawCircle(pos, 12, Paint()..color = col.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawCircle(pos, 8.5, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, col]).createShader(Rect.fromCircle(center: pos, radius: 8.5)));
    }
  }

  @override
  bool shouldRepaint(covariant _OrbitSeqPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 17. LIFE MELODY: a living grid. Cells are born and die, and the pattern they make is the music.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyLifeMelodyStudio extends StatefulWidget {
  const NgmyLifeMelodyStudio({super.key});

  @override
  State<NgmyLifeMelodyStudio> createState() => _NgmyLifeMelodyStudioState();
}

class _NgmyLifeMelodyStudioState extends State<NgmyLifeMelodyStudio> with SingleTickerProviderStateMixin, StudioFrames {
  static const int _cols = 16, _rows = 10;
  final GlobalKey _shot = GlobalKey();
  List<List<bool>> _cells = [for (var r = 0; r < _rows; r++) List.filled(_cols, false)];
  final List<List<int>> _flash = [for (var r = 0; r < _rows; r++) List.filled(_cols, -1000)];
  final math.Random _rnd = math.Random();
  int _step = -1;
  double _acc = 0;
  double _bpm = 120;
  bool _evolve = true;
  bool _playing = true;
  String _scale = 'Pentatonic';
  String _inst = 'pluck';
  bool? _paint;
  Size _size = Size.zero;

  int _semis(int row) {
    final scale = kStudioScales[_scale]!;
    final i = _rows - 1 - row; // the top row is the highest note
    return scale[i % scale.length] + 12 * (i ~/ scale.length);
  }

  @override
  void initState() {
    super.initState();
    _random();
    startFrames();
  }

  void _random() {
    _cells = [for (var r = 0; r < _rows; r++) [for (var c = 0; c < _cols; c++) _rnd.nextDouble() < 0.22]];
  }

  void _glider() {
    _cells = [for (var r = 0; r < _rows; r++) List.filled(_cols, false)];
    for (final p in const [(1, 2), (2, 3), (3, 1), (3, 2), (3, 3)]) {
      _cells[p.$1][p.$2] = true;
    }
    for (final p in const [(6, 9), (7, 10), (8, 8), (8, 9), (8, 10)]) {
      _cells[p.$1][p.$2] = true;
    }
  }

  void _lifeStep() {
    final next = [for (var r = 0; r < _rows; r++) List.filled(_cols, false)];
    for (var r = 0; r < _rows; r++) {
      for (var c = 0; c < _cols; c++) {
        var n = 0;
        for (var dr = -1; dr <= 1; dr++) {
          for (var dc = -1; dc <= 1; dc++) {
            if (dr == 0 && dc == 0) continue;
            if (_cells[(r + dr + _rows) % _rows][(c + dc + _cols) % _cols]) n++;
          }
        }
        next[r][c] = _cells[r][c] ? (n == 2 || n == 3) : n == 3;
      }
    }
    // If everything has died out, plant a few new seeds so the music never stops.
    if (!next.any((row) => row.any((v) => v))) {
      for (var i = 0; i < 18; i++) {
        next[_rnd.nextInt(_rows)][_rnd.nextInt(_cols)] = true;
      }
    }
    _cells = next;
  }

  @override
  void onFrame(double dt) {
    if (!_playing) return;
    _acc += dt;
    final len = 60 / _bpm / 2;
    while (_acc >= len) {
      _acc -= len;
      _step = (_step + 1) % _cols;
      var played = 0;
      for (var r = 0; r < _rows; r++) {
        if (_cells[r][_step]) {
          _flash[r][_step] = nowMs;
          if (played < 4) {
            NgmyTone.playNote(_inst, _semis(r) + 12, ms: _inst == 'bell' || _inst == 'piano' ? 800 : 450, volume: 0.45);
            played++;
          }
        }
      }
      if (_evolve && _step == _cols - 1) _lifeStep();
    }
  }

  void _touch(Offset p, {bool start = false}) {
    if (_size == Size.zero) return;
    final c = (p.dx / (_size.width / _cols)).floor();
    final r = (p.dy / (_size.height / _rows)).floor();
    if (c < 0 || c >= _cols || r < 0 || r >= _rows) return;
    if (start) _paint = !_cells[r][c];
    _cells[r][c] = _paint ?? true;
    if (start) NgmyTone.playNote(_inst, _semis(r) + 12, ms: 500, volume: 0.45);
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'LIFE MELODY',
      accent: const Color(0xFF4ADE80),
      help: 'Each square is a note. The white line moves along and plays every lit square in its column. Rows near the top are high notes, rows near the bottom are low.\n\nTap or drag to light squares. Turn on Evolve and the squares follow the rules of the Game of Life: a lit square with too few or too many neighbours goes out, and an empty square with exactly three neighbours lights up. The tune keeps changing by itself and never plays exactly the same way twice.\n\nPress Glider to see a shape that travels across the grid.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'life-melody'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: Padding(
        padding: const EdgeInsets.all(10),
        child: LayoutBuilder(builder: (context, box) {
          _size = Size(box.maxWidth, box.maxHeight);
          return RepaintBoundary(
            key: _shot,
            child: GestureDetector(
              behavior: HitTestBehavior.opaque,
              onPanStart: (d) => _touch(d.localPosition, start: true),
              onPanUpdate: (d) => _touch(d.localPosition),
              onPanEnd: (_) => _paint = null,
              onTapDown: (d) => _touch(d.localPosition, start: true),
              onTapUp: (_) => _paint = null,
              child: CustomPaint(size: _size, painter: _LifePainter(_cells, _flash, _step, _playing, nowMs, _rows, _cols, _semis)),
            ),
          );
        }),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Tempo', value: _bpm, min: 60, max: 220, display: '${_bpm.round()}', onChanged: (v) => setState(() => _bpm = v), color: const Color(0xFF4ADE80)),
        StudioRow(label: 'SCALE', children: [
          for (final s in kStudioScales.keys) StudioChip(label: s, selected: _scale == s, color: const Color(0xFF4ADE80), onTap: () => setState(() => _scale = s)),
        ]),
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFF4ADE80), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioRow(children: [
          StudioButton(icon: _playing ? Icons.pause_rounded : Icons.play_arrow_rounded, label: _playing ? 'Pause' : 'Play', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _playing = !_playing;
                if (!_playing) _step = -1;
              })),
          StudioChip(label: 'Evolve', icon: Icons.bubble_chart_rounded, selected: _evolve, color: const Color(0xFF4ADE80), onTap: () => setState(() => _evolve = !_evolve)),
          StudioButton(icon: Icons.casino_rounded, label: 'Random', onTap: () => setState(_random)),
          StudioButton(icon: Icons.near_me_rounded, label: 'Glider', onTap: () => setState(_glider)),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(() {
                _cells = [for (var r = 0; r < _rows; r++) List.filled(_cols, false)];
              })),
        ]),
      ]),
    );
  }
}

class _LifePainter extends CustomPainter {
  _LifePainter(this.cells, this.flash, this.step, this.playing, this.now, this.rows, this.cols, this.semis);
  final List<List<bool>> cells;
  final List<List<int>> flash;
  final int step;
  final bool playing;
  final int now;
  final int rows;
  final int cols;
  final int Function(int) semis;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(18)), Paint()..color = const Color(0xFF0B0D12));
    final cw = size.width / cols, ch = size.height / rows;
    for (var r = 0; r < rows; r++) {
      final hue = (semis(r) * 25.0) % 360;
      for (var c = 0; c < cols; c++) {
        final rect = Rect.fromLTWH(c * cw + 1.5, r * ch + 1.5, cw - 3, ch - 3);
        final rr = RRect.fromRectAndRadius(rect, const Radius.circular(6));
        final k = (1 - (now - flash[r][c]) / 240).clamp(0.0, 1.0);
        if (cells[r][c]) {
          final col = HSVColor.fromAHSV(1, hue, 0.6, 1).toColor();
          if (k > 0) canvas.drawRRect(rr.inflate(3), Paint()..color = col.withValues(alpha: 0.6 * k)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
          canvas.drawRRect(rr, Paint()..color = Color.lerp(col, Colors.white, k * 0.55)!);
        } else {
          canvas.drawRRect(rr, Paint()..color = Colors.white.withValues(alpha: c % 4 == 0 ? 0.07 : 0.045));
        }
      }
    }
    if (playing && step >= 0) {
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(step * cw, 0, cw, size.height), const Radius.circular(6)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2.4..color = Colors.white);
    }
  }

  @override
  bool shouldRepaint(covariant _LifePainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 18. PENDULUM WAVES: pendulums of different speeds drift apart and back, ringing as they swing.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyPendulumStudio extends StatefulWidget {
  const NgmyPendulumStudio({super.key});

  @override
  State<NgmyPendulumStudio> createState() => _NgmyPendulumStudioState();
}

class _NgmyPendulumStudioState extends State<NgmyPendulumStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final GlobalKey _shot = GlobalKey();
  double _t = 0; // seconds of pendulum time
  double _count = 12;
  double _speed = 1.0;
  double _amp = 0.55; // radians
  bool _sound = true;
  String _scale = 'Pentatonic';
  String _inst = 'bell';
  final List<int> _prevSign = List.filled(24, 0);
  final List<int> _flash = List.filled(24, -1000);

  static const double _loopSeconds = 40; // after this long they all line up again

  int _semis(int i) {
    final scale = kStudioScales[_scale]!;
    return scale[i % scale.length] + 12 * (i ~/ scale.length);
  }

  /// Swings in the full cycle: the first does 20, the next 21, and so on.
  double _swings(int i) => 20.0 + i;

  double _angle(int i) => _amp * math.cos(2 * math.pi * _swings(i) * _t / _loopSeconds);

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    _t += dt * _speed;
    final n = _count.round();
    for (var i = 0; i < n; i++) {
      final s = _angle(i) >= 0 ? 1 : -1;
      if (_prevSign[i] != 0 && s != _prevSign[i]) {
        _flash[i] = nowMs;
        if (_sound) NgmyTone.playNote(_inst, _semis(n - 1 - i) + 12, ms: _inst == 'bell' || _inst == 'piano' ? 900 : 450, volume: 0.35);
      }
      _prevSign[i] = s;
    }
  }

  @override
  Widget build(BuildContext context) {
    final n = _count.round();
    return StudioPage(
      title: 'PENDULUM WAVES',
      accent: const Color(0xFFFB923C),
      help: 'A row of pendulums, each one a little faster than the one before it. They start together, then drift apart into waves and spirals, and finally line up again. That takes 40 seconds.\n\nEvery time a pendulum swings through the middle it rings a note, so you can hear the pattern as well as see it. Watch the notes: they play together, then roll like a wave, then come together again.\n\nRestart lines them all up. Change how many there are, how fast time goes and how wide they swing.',
      actions: [
        IconButton(onPressed: () => setState(() => _sound = !_sound), icon: Icon(_sound ? Icons.volume_up_rounded : Icons.volume_off_rounded, color: Colors.white70, size: 21), tooltip: 'Sound'),
        IconButton(onPressed: () => studioShare(context, _shot, name: 'pendulums'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: RepaintBoundary(
        key: _shot,
        child: CustomPaint(
          size: Size.infinite,
          painter: _PendulumPainter(n, _angle, _flash, nowMs, _t, _loopSeconds, _semis),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'How many', value: _count, min: 6, max: 20, display: '$n', onChanged: (v) => setState(() => _count = v), color: const Color(0xFFFB923C)),
        StudioSlider(label: 'Speed', value: _speed, min: 0.3, max: 4, display: '${_speed.toStringAsFixed(1)}x', onChanged: (v) => setState(() => _speed = v), color: const Color(0xFFFB923C)),
        StudioSlider(label: 'Swing', value: _amp, min: 0.15, max: 0.9, display: '${(_amp * 57.3).round()}°', onChanged: (v) => setState(() => _amp = v), color: const Color(0xFFFB923C)),
        StudioRow(label: 'SCALE', children: [
          for (final s in kStudioScales.keys) StudioChip(label: s, selected: _scale == s, color: const Color(0xFFFB923C), onTap: () => setState(() => _scale = s)),
        ]),
        StudioRow(label: 'SOUND', children: [
          for (final i in kStudioInstruments) StudioChip(label: i.$2, selected: _inst == i.$1, color: const Color(0xFFFB923C), onTap: () => setState(() => _inst = i.$1)),
        ]),
        StudioRow(children: [
          StudioButton(icon: Icons.restart_alt_rounded, label: 'Restart', color: const Color(0xFFFB923C), onTap: () => setState(() => _t = 0)),
        ]),
      ]),
    );
  }
}

class _PendulumPainter extends CustomPainter {
  _PendulumPainter(this.n, this.angle, this.flash, this.now, this.t, this.loop, this.semis);
  final int n;
  final double Function(int) angle;
  final List<int> flash;
  final int now;
  final double t;
  final double loop;
  final int Function(int) semis;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0A0A0F));
    final bar = Rect.fromLTWH(14, 26, size.width - 28, 8);
    canvas.drawRRect(RRect.fromRectAndRadius(bar, const Radius.circular(4)), Paint()..color = const Color(0xFF334155));
    final gap = (size.width - 28) / n;
    final maxLen = size.height - 120;
    for (var i = 0; i < n; i++) {
      final x = 14 + gap * (i + 0.5);
      // Slower pendulums hang lower, as real ones would.
      final len = maxLen * (0.55 + 0.45 * (1 - i / math.max(1, n - 1)));
      final a = angle(i);
      final bob = Offset(x + math.sin(a) * len * 0.5, 34 + math.cos(a) * len);
      final col = HSVColor.fromAHSV(1, (i / n) * 300, 0.65, 1).toColor();
      final k = (1 - (now - flash[i]) / 350).clamp(0.0, 1.0);
      canvas.drawLine(Offset(x, 34), bob, Paint()..strokeWidth = 1.6..color = Colors.white.withValues(alpha: 0.35));
      if (k > 0) canvas.drawCircle(Offset(x, 34 + len), 10 + 22 * (1 - k), Paint()..style = PaintingStyle.stroke..strokeWidth = 2.5 * k..color = col.withValues(alpha: k));
      canvas.drawCircle(bob, min(gap * 0.4, 14) + 3, Paint()..color = col.withValues(alpha: 0.3 + 0.4 * k)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 7));
      final r = min(gap * 0.4, 14);
      canvas.drawCircle(bob, r, Paint()..shader = RadialGradient(center: const Alignment(-0.4, -0.4), colors: [Colors.white, col, Color.lerp(col, Colors.black, 0.4)!]).createShader(Rect.fromCircle(center: bob, radius: r)));
    }
    // How far through the cycle we are.
    final prog = (t % loop) / loop;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(14, size.height - 14, size.width - 28, 4), const Radius.circular(2)), Paint()..color = Colors.white12);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(14, size.height - 14, (size.width - 28) * prog, 4), const Radius.circular(2)), Paint()..color = const Color(0xFFFB923C));
  }

  double min(double a, double b) => a < b ? a : b;

  @override
  bool shouldRepaint(covariant _PendulumPainter old) => true;
}
