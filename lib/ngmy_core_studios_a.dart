import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// 1. SPARK PAINTER: paint with glowing light, rainbows, stars and fire.
// ═════════════════════════════════════════════════════════════════════════════

class _PStroke {
  _PStroke(this.brush, this.color, this.width, this.rainbow);
  final List<Offset> pts = [];
  final String brush;
  final Color color;
  final double width;
  final bool rainbow;
}

class _PPart {
  _PPart(this.p, this.v, this.c, this.size, this.born, this.life);
  Offset p;
  Offset v;
  final Color c;
  final double size;
  final int born;
  final int life;
}

class NgmySparkPainterStudio extends StatefulWidget {
  const NgmySparkPainterStudio({super.key});

  @override
  State<NgmySparkPainterStudio> createState() => _NgmySparkPainterStudioState();
}

class _NgmySparkPainterStudioState extends State<NgmySparkPainterStudio> with SingleTickerProviderStateMixin {
  final GlobalKey _shot = GlobalKey();
  final List<_PStroke> _strokes = [];
  final List<_PPart> _parts = [];
  final math.Random _rnd = math.Random();
  late final Ticker _ticker;
  Duration _last = Duration.zero;
  int _now = 0;
  String _brush = 'glow';
  int _color = 0; // index in kStudioColors, or -1 for rainbow
  double _size = 12;
  Color _bg = const Color(0xFF0B0B10);
  _PStroke? _cur;
  bool _touched = false;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((e) {
      final dt = ((e - _last).inMicroseconds / 1e6).clamp(0.0, 0.05);
      _last = e;
      _now = e.inMilliseconds;
      for (final p in _parts) {
        p.p += p.v * dt;
        p.v = Offset(p.v.dx * (1 - 1.2 * dt), p.v.dy * (1 - 1.2 * dt));
      }
      _parts.removeWhere((p) => _now - p.born > p.life);
      if (mounted && (_parts.isNotEmpty || _cur != null)) setState(() {});
    })..start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  Color get _pen => _color < 0 ? HSVColor.fromAHSV(1, (_now * 0.18) % 360, 0.85, 1).toColor() : kStudioColors[_color];

  void _emit(Offset p) {
    final c = _pen;
    final n = _brush == 'fire' ? 5 : (_brush == 'sparks' ? 4 : 1);
    for (var i = 0; i < n; i++) {
      final a = _rnd.nextDouble() * math.pi * 2;
      switch (_brush) {
        case 'fire':
          _parts.add(_PPart(p + Offset((_rnd.nextDouble() - 0.5) * _size, 0), Offset((_rnd.nextDouble() - 0.5) * 40, -60 - _rnd.nextDouble() * 120), Color.lerp(const Color(0xFFFACC15), const Color(0xFFEF4444), _rnd.nextDouble())!, _size * (0.3 + _rnd.nextDouble() * 0.4), _now, 700 + _rnd.nextInt(500)));
        case 'sparks':
          _parts.add(_PPart(p, Offset(math.cos(a), math.sin(a)) * (40 + _rnd.nextDouble() * 200), Color.lerp(c, Colors.white, _rnd.nextDouble() * 0.6)!, 1.5 + _rnd.nextDouble() * 3, _now, 600 + _rnd.nextInt(600)));
        default:
          _parts.add(_PPart(p, Offset(math.cos(a), math.sin(a)) * (10 + _rnd.nextDouble() * 40), c, 1.2 + _rnd.nextDouble() * 1.8, _now, 500));
      }
    }
  }

  void _start(Offset p) {
    _touched = true;
    if (_brush == 'glow' || _brush == 'rainbow' || _brush == 'stars') {
      _cur = _PStroke(_brush, _pen, _size, _color < 0 || _brush == 'rainbow');
      _cur!.pts.add(p);
      _strokes.add(_cur!);
    }
    _emit(p);
    setState(() {});
  }

  void _move(Offset p) {
    final c = _cur;
    if (c != null && (c.pts.isEmpty || (c.pts.last - p).distance > 2.5)) c.pts.add(p);
    _emit(p);
  }

  void _end() {
    _cur = null;
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'SPARK PAINTER',
      accent: const Color(0xFFF472B6),
      help: 'Draw with your finger. Pick a brush: Glow leaves a neon line, Rainbow changes colour as you draw, Stars stamps little stars, Sparks and Fire throw live light that fades away.\n\nUndo removes your last line, Clear starts again, and Share saves a picture of your art.',
      actions: [
        IconButton(onPressed: () => studioShare(context, _shot, name: 'spark-painter'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: RepaintBoundary(
        key: _shot,
        child: GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanStart: (d) => _start(d.localPosition),
          onPanUpdate: (d) => _move(d.localPosition),
          onPanEnd: (_) => _end(),
          onTapDown: (d) => _start(d.localPosition),
          onTapUp: (_) => _end(),
          child: Stack(fit: StackFit.expand, children: [
            CustomPaint(painter: _SparkPainter(_strokes, _parts, _now, _bg)),
            if (!_touched && _strokes.isEmpty)
              const Center(child: Text('Draw anywhere', style: TextStyle(color: Colors.white30, fontSize: 18, fontWeight: FontWeight.w800))),
          ]),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'BRUSH', children: [
          for (final b in const [('glow', 'Glow', Icons.brush_rounded), ('rainbow', 'Rainbow', Icons.palette_rounded), ('stars', 'Stars', Icons.star_rounded), ('sparks', 'Sparks', Icons.auto_awesome_rounded), ('fire', 'Fire', Icons.local_fire_department_rounded)])
            StudioChip(label: b.$2, icon: b.$3, selected: _brush == b.$1, color: const Color(0xFFF472B6), onTap: () => setState(() => _brush = b.$1)),
        ]),
        StudioRow(label: 'COLOUR', children: [
          StudioSwatch(color: const Color(0xFFFFFFFF), rainbow: true, selected: _color < 0, onTap: () => setState(() => _color = -1)),
          for (var i = 0; i < kStudioColors.length; i++) StudioSwatch(color: kStudioColors[i], selected: _color == i, onTap: () => setState(() => _color = i)),
        ]),
        StudioSlider(label: 'Size', value: _size, min: 4, max: 36, display: _size.round().toString(), onChanged: (v) => setState(() => _size = v), color: const Color(0xFFF472B6)),
        StudioRow(children: [
          StudioButton(icon: Icons.undo_rounded, label: 'Undo', onTap: () => setState(() {
                if (_strokes.isNotEmpty) _strokes.removeLast();
              })),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(() {
                _strokes.clear();
                _parts.clear();
              })),
          for (final c in const [Color(0xFF0B0B10), Color(0xFF1B0B2E), Color(0xFF06222B), Color(0xFF2A0A12)])
            StudioSwatch(color: c, selected: _bg == c, onTap: () => setState(() => _bg = c)),
        ]),
      ]),
    );
  }
}

class _SparkPainter extends CustomPainter {
  _SparkPainter(this.strokes, this.parts, this.now, this.bg);
  final List<_PStroke> strokes;
  final List<_PPart> parts;
  final int now;
  final Color bg;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = bg);
    for (final s in strokes) {
      if (s.pts.isEmpty) continue;
      switch (s.brush) {
        case 'glow':
          final path = Path()..moveTo(s.pts.first.dx, s.pts.first.dy);
          for (final p in s.pts.skip(1)) {
            path.lineTo(p.dx, p.dy);
          }
          if (s.pts.length == 1) canvas.drawCircle(s.pts.first, s.width / 2, Paint()..color = s.color);
          canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..strokeWidth = s.width * 2.2..color = s.color.withValues(alpha: 0.45)..maskFilter = MaskFilter.blur(BlurStyle.normal, s.width));
          canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..strokeWidth = s.width..color = s.color);
          canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..strokeWidth = s.width * 0.35..color = Colors.white.withValues(alpha: 0.85));
        case 'rainbow':
          for (var i = 1; i < s.pts.length; i++) {
            final c = HSVColor.fromAHSV(1, (i * 5.0) % 360, 0.85, 1).toColor();
            canvas.drawLine(s.pts[i - 1], s.pts[i], Paint()..strokeWidth = s.width..strokeCap = StrokeCap.round..color = c);
          }
        case 'stars':
          var acc = 0.0;
          Offset? prev;
          var k = 0;
          for (final p in s.pts) {
            if (prev != null) acc += (p - prev).distance;
            prev = p;
            if (prev == s.pts.first || acc > s.width * 2.1) {
              acc = 0;
              _star(canvas, p, s.width * 0.9, k++ * 0.5, s.rainbow ? HSVColor.fromAHSV(1, (k * 23.0) % 360, 0.7, 1).toColor() : s.color);
            }
          }
      }
    }
    for (final p in parts) {
      final k = ((now - p.born) / p.life).clamp(0.0, 1.0);
      canvas.drawCircle(p.p, p.size * (1 - 0.6 * k) + 1, Paint()..color = p.c.withValues(alpha: (1 - k) * 0.9)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 2));
    }
  }

  void _star(Canvas canvas, Offset c, double r, double rot, Color color) {
    final path = Path();
    for (var i = 0; i < 10; i++) {
      final rr = i.isEven ? r : r * 0.45;
      final a = rot + i * math.pi / 5 - math.pi / 2;
      final p = c + Offset(math.cos(a), math.sin(a)) * rr;
      i == 0 ? path.moveTo(p.dx, p.dy) : path.lineTo(p.dx, p.dy);
    }
    path.close();
    canvas.drawPath(path, Paint()..color = color.withValues(alpha: 0.4)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    canvas.drawPath(path, Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant _SparkPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 2. MANDALA MAKER: draw once, it repeats in a circle like a kaleidoscope.
// ═════════════════════════════════════════════════════════════════════════════

class _MStroke {
  _MStroke(this.hue, this.width);
  final List<Offset> pts = []; // relative to the centre
  final double hue;
  final double width;
}

class NgmyMandalaStudio extends StatefulWidget {
  const NgmyMandalaStudio({super.key});

  @override
  State<NgmyMandalaStudio> createState() => _NgmyMandalaStudioState();
}

class _NgmyMandalaStudioState extends State<NgmyMandalaStudio> with SingleTickerProviderStateMixin {
  final GlobalKey _shot = GlobalKey();
  final List<_MStroke> _strokes = [];
  late final Ticker _ticker;
  double _spin = 0;
  Duration _last = Duration.zero;
  double _segments = 8;
  double _width = 3;
  bool _mirror = true;
  bool _auto = false;
  bool _rainbow = true;
  int _color = 3;
  Size _size = Size.zero;
  _MStroke? _cur;

  @override
  void initState() {
    super.initState();
    _ticker = createTicker((e) {
      final dt = ((e - _last).inMicroseconds / 1e6).clamp(0.0, 0.05);
      _last = e;
      if (_auto) {
        _spin += dt * 0.35;
        if (mounted) setState(() {});
      }
    })..start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  Offset _rel(Offset p) {
    final c = Offset(_size.width / 2, _size.height / 2);
    final d = p - c;
    final a = -_spin;
    return Offset(d.dx * math.cos(a) - d.dy * math.sin(a), d.dx * math.sin(a) + d.dy * math.cos(a));
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'MANDALA MAKER',
      accent: const Color(0xFFA78BFA),
      help: 'Draw anywhere with one finger and your line is copied around the centre, like a kaleidoscope. More segments make a busier flower.\n\nTurn Mirror on for a symmetrical pattern, turn Spin on to watch it rotate, and use Rainbow for colours that shift as you draw. Share saves a picture.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'mandala'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return RepaintBoundary(
          key: _shot,
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onPanStart: (d) {
              _cur = _MStroke(_rainbow ? (_strokes.length * 37.0) % 360 : HSVColor.fromColor(kStudioColors[_color]).hue, _width);
              _cur!.pts.add(_rel(d.localPosition));
              _strokes.add(_cur!);
              setState(() {});
            },
            onPanUpdate: (d) {
              _cur?.pts.add(_rel(d.localPosition));
              setState(() {});
            },
            onPanEnd: (_) => _cur = null,
            child: CustomPaint(
              size: _size,
              painter: _MandalaPainter(_strokes, _segments.round(), _mirror, _spin, _rainbow, _color < 0 ? Colors.white : kStudioColors[_color]),
            ),
          ),
        );
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Segments', value: _segments, min: 2, max: 18, display: _segments.round().toString(), onChanged: (v) => setState(() => _segments = v), color: const Color(0xFFA78BFA)),
        StudioSlider(label: 'Thickness', value: _width, min: 1, max: 12, display: _width.round().toString(), onChanged: (v) => setState(() => _width = v), color: const Color(0xFFA78BFA)),
        StudioRow(children: [
          StudioChip(label: 'Mirror', icon: Icons.flip_rounded, selected: _mirror, color: const Color(0xFFA78BFA), onTap: () => setState(() => _mirror = !_mirror)),
          StudioChip(label: 'Spin', icon: Icons.autorenew_rounded, selected: _auto, color: const Color(0xFFA78BFA), onTap: () => setState(() => _auto = !_auto)),
          StudioChip(label: 'Rainbow', icon: Icons.palette_rounded, selected: _rainbow, color: const Color(0xFFA78BFA), onTap: () => setState(() => _rainbow = !_rainbow)),
        ]),
        StudioRow(children: [
          for (var i = 0; i < kStudioColors.length; i++) StudioSwatch(color: kStudioColors[i], selected: !_rainbow && _color == i, onTap: () => setState(() {
                _rainbow = false;
                _color = i;
              })),
        ]),
        StudioRow(children: [
          StudioButton(icon: Icons.undo_rounded, label: 'Undo', onTap: () => setState(() {
                if (_strokes.isNotEmpty) _strokes.removeLast();
              })),
          StudioButton(icon: Icons.delete_sweep_rounded, label: 'Clear', color: const Color(0xFFF87171), onTap: () => setState(_strokes.clear)),
        ]),
      ]),
    );
  }
}

class _MandalaPainter extends CustomPainter {
  _MandalaPainter(this.strokes, this.n, this.mirror, this.spin, this.rainbow, this.color);
  final List<_MStroke> strokes;
  final int n;
  final bool mirror;
  final double spin;
  final bool rainbow;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = const Color(0xFF0B0B10));
    final c = Offset(size.width / 2, size.height / 2);
    // Faint guide rings and spokes.
    final guide = Paint()..style = PaintingStyle.stroke..strokeWidth = 1..color = Colors.white.withValues(alpha: 0.05);
    for (var r = 40.0; r < size.longestSide; r += 60) {
      canvas.drawCircle(c, r, guide);
    }
    for (var i = 0; i < n; i++) {
      final a = spin + i * 2 * math.pi / n;
      canvas.drawLine(c, c + Offset(math.cos(a), math.sin(a)) * size.longestSide, guide);
    }
    canvas.save();
    canvas.translate(c.dx, c.dy);
    for (final s in strokes) {
      if (s.pts.length < 2) continue;
      final path = Path()..moveTo(s.pts.first.dx, s.pts.first.dy);
      for (final p in s.pts.skip(1)) {
        path.lineTo(p.dx, p.dy);
      }
      final col = rainbow ? HSVColor.fromAHSV(1, s.hue, 0.8, 1).toColor() : HSVColor.fromAHSV(1, s.hue, 0.7, 1).toColor();
      final glow = Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..strokeWidth = s.width * 2.4..color = col.withValues(alpha: 0.35)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5);
      final core = Paint()..style = PaintingStyle.stroke..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..strokeWidth = s.width..color = col;
      for (var i = 0; i < n; i++) {
        canvas.save();
        canvas.rotate(spin + i * 2 * math.pi / n);
        canvas.drawPath(path, glow);
        canvas.drawPath(path, core);
        if (mirror) {
          canvas.scale(1, -1);
          canvas.drawPath(path, glow);
          canvas.drawPath(path, core);
        }
        canvas.restore();
      }
    }
    canvas.restore();
    canvas.drawCircle(c, 4, Paint()..color = Colors.white.withValues(alpha: 0.25));
  }

  @override
  bool shouldRepaint(covariant _MandalaPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// 3. TITLE ANIMATOR: type a word and watch it move. Great for little title cards.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyTitleStudio extends StatefulWidget {
  const NgmyTitleStudio({super.key});

  @override
  State<NgmyTitleStudio> createState() => _NgmyTitleStudioState();
}

class _NgmyTitleStudioState extends State<NgmyTitleStudio> with SingleTickerProviderStateMixin {
  final GlobalKey _shot = GlobalKey();
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
  final TextEditingController _text = TextEditingController(text: 'NGMY');
  String _anim = 'bounce';
  int _color = 3;
  double _size = 56;
  int _bg = 0;

  static const _bgs = [
    [Color(0xFF0B0B10), Color(0xFF0B0B10)],
    [Color(0xFF3B0764), Color(0xFF0F172A)],
    [Color(0xFFEA580C), Color(0xFF7C2D12)],
    [Color(0xFF0E7490), Color(0xFF042F2E)],
    [Color(0xFFBE185D), Color(0xFF1E1B4B)],
  ];

  @override
  void dispose() {
    _c.dispose();
    _text.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final letters = _text.text.isEmpty ? ['…'] : _text.text.characters.toList();
    final base = _color < 0 ? Colors.white : kStudioColors[_color];
    return StudioPage(
      title: 'TITLE ANIMATOR',
      accent: const Color(0xFFFACC15),
      help: 'Type a word or a name, pick how it moves, a colour and a background. The title plays on a loop. Replay restarts it, and Share saves a picture of the card to post or send.',
      actions: [
        IconButton(onPressed: () => studioShare(context, _shot, name: 'title'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share'),
      ],
      stage: Padding(
        padding: const EdgeInsets.all(14),
        child: RepaintBoundary(
          key: _shot,
          child: ClipRRect(
            borderRadius: BorderRadius.circular(26),
            child: DecoratedBox(
              decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: _bgs[_bg])),
              child: Center(
                child: AnimatedBuilder(
                  animation: _c,
                  builder: (context, _) {
                    final t = _c.value;
                    return Padding(
                      padding: const EdgeInsets.all(18),
                      child: Wrap(
                        alignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        children: [for (var i = 0; i < letters.length; i++) _letter(letters[i], i, letters.length, t, base)],
                      ),
                    );
                  },
                ),
              ),
            ),
          ),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        TextField(
          controller: _text,
          maxLength: 24,
          onChanged: (_) => setState(() {}),
          style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800),
          decoration: InputDecoration(
            counterText: '',
            hintText: 'Type your title',
            hintStyle: const TextStyle(color: Colors.white30),
            filled: true,
            fillColor: Colors.white.withValues(alpha: 0.06),
            isDense: true,
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
          ),
        ),
        const SizedBox(height: 8),
        StudioRow(label: 'MOVE', children: [
          for (final a in const [('type', 'Typewriter'), ('bounce', 'Bounce'), ('wave', 'Wave'), ('neon', 'Neon'), ('glitch', 'Glitch'), ('zoom', 'Zoom'), ('rainbow', 'Rainbow')])
            StudioChip(label: a.$2, selected: _anim == a.$1, color: const Color(0xFFFACC15), onTap: () {
              setState(() => _anim = a.$1);
              _c.forward(from: 0);
              _c.repeat();
            }),
        ]),
        StudioRow(label: 'COLOUR', children: [
          for (var i = 0; i < kStudioColors.length; i++) StudioSwatch(color: kStudioColors[i], selected: _color == i, onTap: () => setState(() => _color = i)),
        ]),
        StudioRow(label: 'BACK', children: [
          for (var i = 0; i < _bgs.length; i++) StudioSwatch(color: _bgs[i][0], selected: _bg == i, onTap: () => setState(() => _bg = i)),
          const SizedBox(width: 6),
          StudioButton(icon: Icons.replay_rounded, label: 'Replay', onTap: () {
            _c.forward(from: 0);
            _c.repeat();
          }),
        ]),
        StudioSlider(label: 'Size', value: _size, min: 28, max: 96, display: _size.round().toString(), onChanged: (v) => setState(() => _size = v), color: const Color(0xFFFACC15)),
      ]),
    );
  }

  Widget _letter(String ch, int i, int n, double t, Color base) {
    final frac = n <= 1 ? 0.0 : i / (n - 1);
    var dy = 0.0, scale = 1.0, opacity = 1.0, dx = 0.0;
    var color = base;
    final glow = <Shadow>[Shadow(color: base.withValues(alpha: 0.7), blurRadius: 18)];
    switch (_anim) {
      case 'type':
        final shown = (t * 1.6 * n).floor();
        opacity = i < shown ? 1 : 0;
      case 'bounce':
        final p = (t * 2 - frac * 0.5) % 1.0;
        dy = -math.sin(p * math.pi).abs() * _size * 0.5;
      case 'wave':
        dy = math.sin(t * math.pi * 2 - frac * 3) * _size * 0.28;
      case 'neon':
        final f = math.sin(t * 40 + i * 7) > 0.92 ? 0.25 : 1.0;
        opacity = f;
        glow
          ..clear()
          ..add(Shadow(color: base, blurRadius: 30 * f))
          ..add(Shadow(color: base.withValues(alpha: 0.8), blurRadius: 60 * f));
      case 'glitch':
        final g = (t * 12).floor() % 6 == 0;
        dx = g ? (math.sin(i * 12.9898 + t * 100) * _size * 0.14) : 0;
        color = g && i.isEven ? const Color(0xFF22D3EE) : (g ? const Color(0xFFF472B6) : base);
      case 'zoom':
        final p = ((t * 1.4) - frac * 0.5).clamp(0.0, 1.0);
        scale = Curves.elasticOut.transform(p);
        opacity = p;
      case 'rainbow':
        color = HSVColor.fromAHSV(1, ((t * 360) + i * 40) % 360, 0.75, 1).toColor();
        glow
          ..clear()
          ..add(Shadow(color: color.withValues(alpha: 0.7), blurRadius: 18));
    }
    return Opacity(
      opacity: opacity,
      child: Transform.translate(
        offset: Offset(dx, dy),
        child: Transform.scale(
          scale: scale,
          child: Text(ch, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: _size, height: 1.15, shadows: glow)),
        ),
      ),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// 4. PALETTE LAB: make a set of colours that go together, preview them, copy the codes.
// ═════════════════════════════════════════════════════════════════════════════

class NgmyPaletteStudio extends StatefulWidget {
  const NgmyPaletteStudio({super.key});

  @override
  State<NgmyPaletteStudio> createState() => _NgmyPaletteStudioState();
}

class _NgmyPaletteStudioState extends State<NgmyPaletteStudio> {
  final math.Random _rnd = math.Random();
  double _hue = 255;
  double _sat = 0.7;
  double _val = 0.95;
  double _angle = 45;
  String _mode = 'analogous';
  final List<bool> _locked = List.filled(5, false);
  late List<Color> _colors = _make();

  List<Color> _make() {
    Color h(double hue, [double s = -1, double v = -1]) => HSVColor.fromAHSV(1, (hue % 360 + 360) % 360, (s < 0 ? _sat : s).clamp(0.0, 1.0), (v < 0 ? _val : v).clamp(0.0, 1.0)).toColor();
    switch (_mode) {
      case 'complementary':
        return [h(_hue), h(_hue, _sat * 0.6, _val), h(_hue + 180, _sat * 0.6, _val), h(_hue + 180), h(_hue + 180, _sat, _val * 0.6)];
      case 'triad':
        return [h(_hue), h(_hue + 120), h(_hue + 240), h(_hue + 120, _sat * 0.6), h(_hue + 240, _sat * 0.6)];
      case 'mono':
        return [for (var i = 0; i < 5; i++) h(_hue, _sat * (1.0 - i * 0.15), _val * (1.0 - i * 0.14))];
      case 'sunset':
        return [h(20, 0.9, 1), h(340, 0.8, 0.95), h(300, 0.7, 0.8), h(260, 0.7, 0.6), h(230, 0.8, 0.4)];
      default:
        return [for (var i = 0; i < 5; i++) h(_hue + (i - 2) * 22, _sat, _val - i * 0.03)];
    }
  }

  void _regen() {
    final fresh = _make();
    setState(() {
      for (var i = 0; i < 5; i++) {
        if (!_locked[i]) _colors[i] = fresh[i];
      }
    });
  }

  String _hex(Color c) => '#${c.toARGB32().toRadixString(16).substring(2).toUpperCase()}';

  Future<void> _copy(String text, String what) async {
    await Clipboard.setData(ClipboardData(text: text));
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('$what copied'), duration: const Duration(seconds: 1)));
  }

  @override
  Widget build(BuildContext context) {
    final a = _angle * math.pi / 180;
    final begin = Alignment(-math.cos(a), -math.sin(a));
    final end = Alignment(math.cos(a), math.sin(a));
    return StudioPage(
      title: 'PALETTE LAB',
      accent: const Color(0xFF2DD4BF),
      help: 'Pick a starting colour with the Hue slider and a harmony. You get five colours that look good together, and a gradient built from them.\n\nTap a colour to copy its code. Tap the lock to keep it while you Shuffle the rest. Copy CSS or Copy Flutter gives you the whole gradient to paste into your own work.',
      stage: ListView(padding: const EdgeInsets.all(14), children: [
        Container(
          height: 190,
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(24), gradient: LinearGradient(begin: begin, end: end, colors: _colors), boxShadow: [BoxShadow(color: _colors[2].withValues(alpha: 0.35), blurRadius: 30, offset: const Offset(0, 10))]),
          child: Align(
            alignment: Alignment.bottomLeft,
            child: Padding(
              padding: const EdgeInsets.all(18),
              child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Your gradient', style: TextStyle(color: Colors.white.withValues(alpha: 0.95), fontWeight: FontWeight.w900, fontSize: 22, shadows: const [Shadow(color: Colors.black38, blurRadius: 8)])),
                Text('${_colors.length} colours · ${_angle.round()}°', style: const TextStyle(color: Colors.white70, fontSize: 12, shadows: [Shadow(color: Colors.black38, blurRadius: 6)])),
              ]),
            ),
          ),
        ),
        const SizedBox(height: 14),
        Row(children: [
          for (var i = 0; i < 5; i++)
            Expanded(
              child: GestureDetector(
                onTap: () => _copy(_hex(_colors[i]), _hex(_colors[i])),
                child: Container(
                  height: 112,
                  margin: EdgeInsets.only(right: i == 4 ? 0 : 8),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), color: _colors[i], border: Border.all(color: Colors.white24)),
                  child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                    GestureDetector(
                      onTap: () => setState(() => _locked[i] = !_locked[i]),
                      child: Icon(_locked[i] ? Icons.lock_rounded : Icons.lock_open_rounded, size: 20, color: _colors[i].computeLuminance() > 0.5 ? Colors.black87 : Colors.white),
                    ),
                    const SizedBox(height: 6),
                    Text(_hex(_colors[i]).substring(1), style: TextStyle(fontSize: 9.5, fontWeight: FontWeight.w900, color: _colors[i].computeLuminance() > 0.5 ? Colors.black87 : Colors.white)),
                    const SizedBox(height: 8),
                  ]),
                ),
              ),
            ),
        ]),
        const SizedBox(height: 14),
        // The colours used on a small card, so you can see them at work.
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), color: _colors[4].withValues(alpha: 0.35), border: Border.all(color: _colors[0].withValues(alpha: 0.6))),
          child: Row(children: [
            Container(width: 46, height: 46, decoration: BoxDecoration(shape: BoxShape.circle, gradient: LinearGradient(colors: [_colors[0], _colors[2]])), child: const Icon(Icons.favorite_rounded, color: Colors.white)),
            const SizedBox(width: 12),
            Expanded(child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Preview card', style: TextStyle(color: _colors[0], fontWeight: FontWeight.w900, fontSize: 15)),
              Text('This is how the colours look together', style: TextStyle(color: _colors[1].withValues(alpha: 0.9), fontSize: 12)),
            ])),
            Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7), decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), color: _colors[3]), child: const Text('Go', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
          ]),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'STYLE', children: [
          for (final m in const [('analogous', 'Neighbours'), ('complementary', 'Opposites'), ('triad', 'Triad'), ('mono', 'One colour'), ('sunset', 'Sunset')])
            StudioChip(label: m.$2, selected: _mode == m.$1, color: const Color(0xFF2DD4BF), onTap: () {
              _mode = m.$1;
              _regen();
            }),
        ]),
        StudioSlider(label: 'Hue', value: _hue, min: 0, max: 360, display: _hue.round().toString(), color: HSVColor.fromAHSV(1, _hue, 0.8, 1).toColor(), onChanged: (v) {
          _hue = v;
          _regen();
        }),
        StudioSlider(label: 'Richness', value: _sat, display: '${(_sat * 100).round()}%', color: const Color(0xFF2DD4BF), onChanged: (v) {
          _sat = v;
          _regen();
        }),
        StudioSlider(label: 'Angle', value: _angle, min: 0, max: 360, display: '${_angle.round()}°', color: const Color(0xFF2DD4BF), onChanged: (v) => setState(() => _angle = v)),
        StudioRow(children: [
          StudioButton(icon: Icons.shuffle_rounded, label: 'Shuffle', color: const Color(0xFF2DD4BF), onTap: () {
            _hue = _rnd.nextDouble() * 360;
            _regen();
          }),
          StudioButton(icon: Icons.css_rounded, label: 'Copy CSS', onTap: () => _copy('linear-gradient(${_angle.round()}deg, ${_colors.map(_hex).join(', ')})', 'CSS')),
          StudioButton(icon: Icons.code_rounded, label: 'Copy Flutter', onTap: () => _copy('LinearGradient(colors: [${_colors.map((c) => 'Color(0xFF${_hex(c).substring(1)})').join(', ')}])', 'Flutter code')),
        ]),
      ]),
    );
  }
}
