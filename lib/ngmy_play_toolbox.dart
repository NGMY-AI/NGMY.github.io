import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// TOOLBOX: eight things to do with a spare minute, for kids and grown-ups.
// ═════════════════════════════════════════════════════════════════════════════

// ── Spin the wheel ───────────────────────────────────────────────────────────

const List<Color> _kWheelColors = [Color(0xFFF87171), Color(0xFFFBBF24), Color(0xFF4ADE80), Color(0xFF38BDF8), Color(0xFFA78BFA), Color(0xFFF472B6), Color(0xFFFB923C), Color(0xFF2DD4BF)];

class NgmyWheelStudio extends StatefulWidget {
  const NgmyWheelStudio({super.key});

  @override
  State<NgmyWheelStudio> createState() => _NgmyWheelStudioState();
}

class _NgmyWheelStudioState extends State<NgmyWheelStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final List<String> _items = ['Pizza', 'Burgers', 'Tacos', 'Salad', 'Pasta', 'Sushi'];
  final TextEditingController _ctl = TextEditingController();
  double _angle = 0;
  double _vel = 0;
  String _result = '';
  int _lastSeg = -1;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  int _segAt(double a) {
    final n = _items.length;
    final seg = 2 * math.pi / n;
    // The pointer is at the top (-pi/2).
    final rel = ((-math.pi / 2 - a) % (2 * math.pi) + 2 * math.pi) % (2 * math.pi);
    return (rel / seg).floor() % n;
  }

  @override
  void onFrame(double dt) {
    if (_vel.abs() < 0.001) return;
    _angle += _vel * dt;
    _vel *= math.exp(-dt * 0.9);
    final seg = _segAt(_angle);
    if (seg != _lastSeg) {
      _lastSeg = seg;
      NgmyTone.playNote('bell', 24 + seg % 7, ms: 90, volume: 0.25);
    }
    if (_vel.abs() < 0.12) {
      _vel = 0;
      setState(() => _result = _items[_segAt(_angle)]);
      NgmyTone.chord('bell', [0, 4, 7, 12], ms: 1100, volume: 0.55);
    }
  }

  void _spin() {
    if (_items.length < 2) return;
    setState(() {
      _result = '';
      _vel = 9 + math.Random().nextDouble() * 7;
    });
  }

  void _add() {
    final t = _ctl.text.trim();
    if (t.isEmpty || _items.length >= 12) return;
    setState(() {
      _items.add(t);
      _ctl.clear();
      _result = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'SPIN THE WHEEL',
      accent: const Color(0xFFFBBF24),
      help: 'Cannot decide? Let the wheel choose! Type your own options (what to eat, who goes first, which game) and add them. Tap the wheel or the Spin button. Press and hold an option to remove it.',
      stage: Column(children: [
        Expanded(
          child: GestureDetector(
            onTap: _spin,
            child: CustomPaint(size: Size.infinite, painter: _WheelPainter(_items, _angle)),
          ),
        ),
        SizedBox(
          height: 40,
          child: Center(child: Text(_result.isEmpty ? (_vel == 0 ? 'Tap the wheel to spin' : '') : _result, style: const TextStyle(color: Color(0xFFFBBF24), fontSize: 26, fontWeight: FontWeight.w900))),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (var i = 0; i < _items.length; i++)
            GestureDetector(
              onLongPress: () => setState(() {
                if (_items.length > 2) _items.removeAt(i);
              }),
              child: Container(
                margin: const EdgeInsets.only(right: 6),
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                decoration: BoxDecoration(color: _kWheelColors[i % _kWheelColors.length].withValues(alpha: 0.9), borderRadius: BorderRadius.circular(20)),
                child: Text(_items[i], style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 12.5)),
              ),
            ),
        ]),
        Row(children: [
          Expanded(
            child: TextField(
              controller: _ctl,
              onSubmitted: (_) => _add(),
              style: const TextStyle(color: Colors.white),
              decoration: InputDecoration(hintText: 'Add an option', hintStyle: const TextStyle(color: Colors.white38), isDense: true, filled: true, fillColor: Colors.white.withValues(alpha: 0.07), border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none)),
            ),
          ),
          const SizedBox(width: 8),
          StudioButton(icon: Icons.add_rounded, label: 'Add', onTap: _add),
          const SizedBox(width: 6),
          StudioButton(icon: Icons.casino_rounded, label: 'Spin', color: const Color(0xFF4ADE80), onTap: _spin),
        ]),
      ]),
    );
  }
}

class _WheelPainter extends CustomPainter {
  _WheelPainter(this.items, this.angle);
  final List<String> items;
  final double angle;

  @override
  void paint(Canvas canvas, Size size) {
    final c = Offset(size.width / 2, size.height / 2 + 10);
    final r = math.min(size.width, size.height) / 2 - 24;
    canvas.drawCircle(c, r + 8, Paint()..color = const Color(0xFF2A2A33));
    canvas.drawCircle(c, r + 8, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFFFBBF24));
    final n = items.length;
    final seg = 2 * math.pi / n;
    for (var i = 0; i < n; i++) {
      final a0 = angle + i * seg;
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), a0, seg, true, Paint()..color = _kWheelColors[i % _kWheelColors.length]);
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), a0, seg, true, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white.withValues(alpha: 0.6));
      final mid = a0 + seg / 2;
      canvas.save();
      canvas.translate(c.dx, c.dy);
      canvas.rotate(mid);
      final tp = TextPainter(text: TextSpan(text: items[i].length > 12 ? '${items[i].substring(0, 11)}…' : items[i], style: const TextStyle(color: Colors.black87, fontWeight: FontWeight.w900, fontSize: 15)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, Offset(r - tp.width - 16, -tp.height / 2));
      canvas.restore();
    }
    canvas.drawCircle(c, 20, Paint()..color = const Color(0xFF111114));
    canvas.drawCircle(c, 20, Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFFFBBF24));
    final pointer = Path()
      ..moveTo(c.dx, c.dy - r + 26)
      ..lineTo(c.dx - 14, c.dy - r - 10)
      ..lineTo(c.dx + 14, c.dy - r - 10)
      ..close();
    canvas.drawPath(pointer, Paint()..color = Colors.white);
    canvas.drawPath(pointer, Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.black54);
  }

  @override
  bool shouldRepaint(covariant _WheelPainter old) => true;
}

// ── Focus timer ──────────────────────────────────────────────────────────────

class NgmyFocusTimerStudio extends StatefulWidget {
  const NgmyFocusTimerStudio({super.key});

  @override
  State<NgmyFocusTimerStudio> createState() => _NgmyFocusTimerStudioState();
}

class _NgmyFocusTimerStudioState extends State<NgmyFocusTimerStudio> with SingleTickerProviderStateMixin, StudioFrames {
  int _minutes = 25;
  double _left = 25 * 60;
  bool _running = false;
  int _done = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (!_running) return;
    _left -= dt;
    if (_left <= 0) {
      _left = 0;
      _running = false;
      _done++;
      NgmyTone.chord('bell', [0, 4, 7, 12], ms: 1500, volume: 0.6);
      later(900, () => NgmyTone.chord('bell', [0, 5, 9, 12], ms: 1500, volume: 0.6));
    }
    setState(() {});
  }

  void _set(int m) => setState(() {
        _minutes = m;
        _left = m * 60.0;
        _running = false;
      });

  @override
  Widget build(BuildContext context) {
    final frac = _minutes == 0 ? 0.0 : _left / (_minutes * 60);
    final mm = (_left ~/ 60).toString().padLeft(2, '0');
    final ss = (_left.ceil() % 60).toString().padLeft(2, '0');
    return StudioPage(
      title: 'FOCUS TIMER',
      accent: const Color(0xFFF87171),
      help: 'Work in short bursts, then rest. Pick a time, press Start, and put your phone down until it chimes. The classic is 25 minutes of work, then a 5 minute break. Great for homework, chores and studying.',
      stage: Center(
        child: SizedBox(
          width: 280,
          height: 280,
          child: Stack(alignment: Alignment.center, children: [
            CustomPaint(size: const Size(280, 280), painter: _RingPainter(frac, const Color(0xFFF87171))),
            Column(mainAxisSize: MainAxisSize.min, children: [
              Text('$mm:$ss', style: const TextStyle(color: Colors.white, fontSize: 60, fontWeight: FontWeight.w900, letterSpacing: -1)),
              Text(_running ? 'Stay focused' : (_left == 0 ? 'Time for a break!' : 'Ready'), style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w700)),
              const SizedBox(height: 4),
              Text('Sessions done: $_done', style: const TextStyle(color: Colors.white38, fontSize: 12)),
            ]),
          ]),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [for (final m in const [5, 10, 15, 25, 45, 60]) StudioChip(label: '$m min', selected: _minutes == m, color: const Color(0xFFF87171), onTap: () => _set(m))]),
        StudioRow(children: [
          StudioButton(icon: _running ? Icons.pause_rounded : Icons.play_arrow_rounded, label: _running ? 'Pause' : 'Start', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                if (_left <= 0) _left = _minutes * 60.0;
                _running = !_running;
              })),
          StudioButton(icon: Icons.refresh_rounded, label: 'Reset', onTap: () => _set(_minutes)),
        ]),
      ]),
    );
  }
}

class _RingPainter extends CustomPainter {
  _RingPainter(this.frac, this.color);
  final double frac;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final c = size.center(Offset.zero);
    final r = size.width / 2 - 14;
    canvas.drawCircle(c, r, Paint()..style = PaintingStyle.stroke..strokeWidth = 16..color = Colors.white.withValues(alpha: 0.08));
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), -math.pi / 2, 2 * math.pi * frac, false, Paint()..style = PaintingStyle.stroke..strokeWidth = 16..strokeCap = StrokeCap.round..shader = SweepGradient(startAngle: -math.pi / 2, endAngle: 3 * math.pi / 2, colors: [color, Color.lerp(color, Colors.white, 0.4)!, color]).createShader(Rect.fromCircle(center: c, radius: r)));
  }

  @override
  bool shouldRepaint(covariant _RingPainter old) => old.frac != frac;
}

// ── Breathe ──────────────────────────────────────────────────────────────────

class NgmyBreatheStudio extends StatefulWidget {
  const NgmyBreatheStudio({super.key});

  @override
  State<NgmyBreatheStudio> createState() => _NgmyBreatheStudioState();
}

class _NgmyBreatheStudioState extends State<NgmyBreatheStudio> with SingleTickerProviderStateMixin, StudioFrames {
  // in, hold, out, hold
  static const Map<String, List<double>> _patterns = {
    'Calm': [4, 2, 6, 0],
    'Box': [4, 4, 4, 4],
    'Sleep': [4, 7, 8, 0],
  };
  String _pattern = 'Calm';
  bool _running = false;
  double _t = 0;
  int _lastPhase = -1;
  int _cycles = 0;

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (!_running) return;
    _t += dt;
    final p = _patterns[_pattern]!;
    final total = p.reduce((a, b) => a + b);
    final cyc = _t % total;
    var acc = 0.0;
    var phase = 0;
    for (var i = 0; i < 4; i++) {
      if (cyc < acc + p[i]) {
        phase = i;
        break;
      }
      acc += p[i];
    }
    if (phase != _lastPhase) {
      if (_lastPhase == 3 || (_lastPhase == 2 && p[3] == 0)) _cycles++;
      _lastPhase = phase;
      NgmyTone.playNote('flute', const [0, 4, 7, 4][phase] + 5, ms: 1400, volume: 0.35);
    }
    setState(() {});
  }

  ({double scale, String label}) get _state {
    if (!_running) return (scale: 0.5, label: 'Press Start');
    final p = _patterns[_pattern]!;
    final total = p.reduce((a, b) => a + b);
    final cyc = _t % total;
    var acc = 0.0;
    for (var i = 0; i < 4; i++) {
      if (cyc < acc + p[i]) {
        final f = (cyc - acc) / p[i];
        switch (i) {
          case 0:
            return (scale: 0.5 + 0.5 * Curves.easeInOut.transform(f), label: 'Breathe in');
          case 1:
            return (scale: 1.0, label: 'Hold');
          case 2:
            return (scale: 1.0 - 0.5 * Curves.easeInOut.transform(f), label: 'Breathe out');
          default:
            return (scale: 0.5, label: 'Hold');
        }
      }
      acc += p[i];
    }
    return (scale: 0.5, label: '');
  }

  @override
  Widget build(BuildContext context) {
    final st = _state;
    return StudioPage(
      title: 'BREATHE',
      accent: const Color(0xFF2DD4BF),
      help: 'Slow breathing helps you feel calm. Follow the circle: breathe in as it grows, hold, and breathe out as it shrinks. Calm is a gentle rhythm, Box is used by athletes, and Sleep (4-7-8) helps you wind down at night.',
      stage: Center(
        child: SizedBox(
          width: 300,
          height: 340,
          child: Stack(alignment: Alignment.center, children: [
            for (var i = 3; i >= 0; i--)
              Container(
                width: 280 * st.scale * (1 - i * 0.12),
                height: 280 * st.scale * (1 - i * 0.12),
                decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF2DD4BF).withValues(alpha: 0.12 + (3 - i) * 0.05), boxShadow: i == 0 ? [BoxShadow(color: const Color(0xFF2DD4BF).withValues(alpha: 0.35), blurRadius: 40)] : null),
              ),
            Text(st.label, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900)),
            Positioned(bottom: 0, child: Text('Breaths: $_cycles', style: const TextStyle(color: Colors.white38))),
          ]),
        ),
      ),
      tools: StudioRow(children: [
        for (final p in _patterns.keys) StudioChip(label: p, selected: _pattern == p, color: const Color(0xFF2DD4BF), onTap: () => setState(() {
              _pattern = p;
              _t = 0;
              _lastPhase = -1;
            })),
        StudioButton(icon: _running ? Icons.stop_rounded : Icons.play_arrow_rounded, label: _running ? 'Stop' : 'Start', color: const Color(0xFF4ADE80), onTap: () => setState(() {
              _running = !_running;
              _t = 0;
              _lastPhase = -1;
              _cycles = 0;
            })),
      ]),
    );
  }
}

// ── Draw pad ─────────────────────────────────────────────────────────────────

class _Stroke {
  _Stroke(this.color, this.width);
  final Color color;
  final double width;
  final List<Offset> pts = [];
}

class NgmyDrawPadStudio extends StatefulWidget {
  const NgmyDrawPadStudio({super.key});

  @override
  State<NgmyDrawPadStudio> createState() => _NgmyDrawPadStudioState();
}

class _NgmyDrawPadStudioState extends State<NgmyDrawPadStudio> {
  final GlobalKey _shot = GlobalKey();
  final List<_Stroke> _strokes = [];
  Color _color = const Color(0xFF111827);
  double _width = 6;
  bool _eraser = false;
  Color _paper = Colors.white;

  static const _palette = [Color(0xFF111827), Color(0xFFEF4444), Color(0xFFFB923C), Color(0xFFFACC15), Color(0xFF22C55E), Color(0xFF0EA5E9), Color(0xFF6366F1), Color(0xFFEC4899), Color(0xFF8B5A2B)];

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'DRAW PAD',
      accent: const Color(0xFFEC4899),
      help: 'Draw with your finger. Pick a colour and a brush size, use the eraser to rub out, undo your last line, or clear the page. Press the share button to save or send your picture. Change the paper colour with the paper button.',
      actions: [IconButton(onPressed: () => studioShare(context, _shot, name: 'drawing'), icon: const Icon(Icons.ios_share_rounded, color: Colors.white70, size: 21), tooltip: 'Share')],
      stage: Padding(
        padding: const EdgeInsets.all(10),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(18),
          child: RepaintBoundary(
            key: _shot,
            child: GestureDetector(
              onPanStart: (d) => setState(() => _strokes.add(_Stroke(_eraser ? _paper : _color, _eraser ? _width * 3 : _width)..pts.add(d.localPosition))),
              onPanUpdate: (d) => setState(() => _strokes.last.pts.add(d.localPosition)),
              onTapDown: (d) => setState(() => _strokes.add(_Stroke(_eraser ? _paper : _color, _eraser ? _width * 3 : _width)..pts.add(d.localPosition))),
              child: CustomPaint(size: Size.infinite, painter: _PadPainter(_strokes, _paper)),
            ),
          ),
        ),
      ),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          for (final c in _palette) StudioSwatch(color: c, selected: !_eraser && _color == c, onTap: () => setState(() {
                _color = c;
                _eraser = false;
              })),
        ]),
        StudioSlider(label: 'Brush', value: _width, min: 2, max: 30, display: '${_width.round()}', color: const Color(0xFFEC4899), onChanged: (v) => setState(() => _width = v)),
        StudioRow(children: [
          StudioChip(label: 'Eraser', icon: Icons.cleaning_services_rounded, selected: _eraser, color: const Color(0xFFEC4899), onTap: () => setState(() => _eraser = !_eraser)),
          StudioButton(icon: Icons.undo_rounded, label: 'Undo', onTap: () => setState(() {
                if (_strokes.isNotEmpty) _strokes.removeLast();
              })),
          StudioButton(icon: Icons.delete_outline_rounded, label: 'Clear', onTap: () => setState(_strokes.clear)),
          StudioButton(icon: Icons.format_color_fill_rounded, label: 'Paper', onTap: () => setState(() {
                const papers = [Colors.white, Color(0xFFFEF3C7), Color(0xFFDBEAFE), Color(0xFF111827)];
                _paper = papers[(papers.indexOf(_paper) + 1) % papers.length];
              })),
        ]),
      ]),
    );
  }
}

class _PadPainter extends CustomPainter {
  _PadPainter(this.strokes, this.paper);
  final List<_Stroke> strokes;
  final Color paper;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..color = paper);
    for (final s in strokes) {
      final p = Paint()..color = s.color..strokeWidth = s.width..strokeCap = StrokeCap.round..strokeJoin = StrokeJoin.round..style = PaintingStyle.stroke;
      if (s.pts.length == 1) {
        canvas.drawCircle(s.pts.first, s.width / 2, Paint()..color = s.color);
      } else {
        final path = Path()..moveTo(s.pts.first.dx, s.pts.first.dy);
        for (var i = 1; i < s.pts.length - 1; i++) {
          final mid = Offset((s.pts[i].dx + s.pts[i + 1].dx) / 2, (s.pts[i].dy + s.pts[i + 1].dy) / 2);
          path.quadraticBezierTo(s.pts[i].dx, s.pts[i].dy, mid.dx, mid.dy);
        }
        path.lineTo(s.pts.last.dx, s.pts.last.dy);
        canvas.drawPath(path, p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _PadPainter old) => true;
}

// ── Memory match ─────────────────────────────────────────────────────────────

class NgmyMemoryStudio extends StatefulWidget {
  const NgmyMemoryStudio({super.key});

  @override
  State<NgmyMemoryStudio> createState() => _NgmyMemoryStudioState();
}

class _NgmyMemoryStudioState extends State<NgmyMemoryStudio> {
  static const _pool = ['🐶', '🐱', '🦁', '🐸', '🐼', '🦊', '🐵', '🐧', '🦄', '🐢', '🐙', '🦋', '🍎', '🍌', '🍉', '🚀', '⚽', '🎸'];
  int _pairs = 6;
  late List<String> _cards;
  final Set<int> _up = {};
  final Set<int> _matched = {};
  int _moves = 0;
  bool _lock = false;

  @override
  void initState() {
    super.initState();
    _deal();
  }

  void _deal() {
    final pick = List<String>.from(_pool)..shuffle();
    _cards = [...pick.take(_pairs), ...pick.take(_pairs)]..shuffle();
    _up.clear();
    _matched.clear();
    _moves = 0;
    _lock = false;
  }

  void _flip(int i) {
    if (_lock || _up.contains(i) || _matched.contains(i)) return;
    NgmyTone.playNote('bell', 12 + i % 9, ms: 150, volume: 0.35);
    setState(() => _up.add(i));
    if (_up.length == 2) {
      _moves++;
      final a = _up.first, b = _up.last;
      if (_cards[a] == _cards[b]) {
        Future<void>.delayed(const Duration(milliseconds: 350), () {
          if (!mounted) return;
          NgmyTone.chord('bell', [0, 4, 7], ms: 500, volume: 0.45);
          setState(() {
            _matched.addAll([a, b]);
            _up.clear();
          });
          if (_matched.length == _cards.length) NgmyTone.chord('bell', [0, 4, 7, 12, 16], ms: 1500, volume: 0.6);
        });
      } else {
        _lock = true;
        Future<void>.delayed(const Duration(milliseconds: 800), () {
          if (!mounted) return;
          setState(() {
            _up.clear();
            _lock = false;
          });
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final won = _matched.length == _cards.length;
    final cols = _pairs <= 6 ? 3 : 4;
    return StudioPage(
      title: 'MEMORY MATCH',
      accent: const Color(0xFF38BDF8),
      help: 'Turn over two cards at a time and find the pairs. If they match they stay up. Try to finish in as few moves as you can. Choose Easy, Medium or Hard for more cards.',
      stage: Column(children: [
        Padding(padding: const EdgeInsets.fromLTRB(16, 10, 16, 0), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text('Moves: $_moves', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)), Text(won ? 'You did it! 🎉' : 'Pairs: ${_matched.length ~/ 2} / $_pairs', style: TextStyle(color: won ? const Color(0xFFFBBF24) : Colors.white70, fontWeight: FontWeight.w800))])),
        Expanded(
          child: GridView.builder(
            padding: const EdgeInsets.all(12),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: cols, mainAxisSpacing: 8, crossAxisSpacing: 8),
            itemCount: _cards.length,
            itemBuilder: (context, i) {
              final show = _up.contains(i) || _matched.contains(i);
              return GestureDetector(
                onTap: () => _flip(i),
                child: TweenAnimationBuilder<double>(
                  tween: Tween(begin: 0, end: show ? 1 : 0),
                  duration: const Duration(milliseconds: 260),
                  builder: (context, v, _) {
                    final front = v > 0.5;
                    return Transform(
                      alignment: Alignment.center,
                      transform: Matrix4.identity()
                        ..setEntry(3, 2, 0.001)
                        ..rotateY(math.pi * v),
                      child: Container(
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(16),
                          gradient: front ? null : const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF38BDF8), Color(0xFF6366F1)]),
                          color: front ? (_matched.contains(i) ? const Color(0xFF4ADE80).withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.12)) : null,
                          border: Border.all(color: _matched.contains(i) ? const Color(0xFF4ADE80) : Colors.white24),
                        ),
                        child: front ? Transform(alignment: Alignment.center, transform: Matrix4.identity()..rotateY(math.pi), child: Text(_cards[i], style: const TextStyle(fontSize: 38))) : const Text('?', style: TextStyle(color: Colors.white, fontSize: 30, fontWeight: FontWeight.w900)),
                      ),
                    );
                  },
                ),
              );
            },
          ),
        ),
      ]),
      tools: StudioRow(children: [
        for (final l in const [(6, 'Easy'), (8, 'Medium'), (10, 'Hard')]) StudioChip(label: l.$2, selected: _pairs == l.$1, color: const Color(0xFF38BDF8), onTap: () => setState(() {
              _pairs = l.$1;
              _deal();
            })),
        StudioButton(icon: Icons.shuffle_rounded, label: 'New game', color: const Color(0xFF4ADE80), onTap: () => setState(_deal)),
      ]),
    );
  }
}

// ── Simon sounds ─────────────────────────────────────────────────────────────

class NgmySimonStudio extends StatefulWidget {
  const NgmySimonStudio({super.key});

  @override
  State<NgmySimonStudio> createState() => _NgmySimonStudioState();
}

class _NgmySimonStudioState extends State<NgmySimonStudio> {
  static const _colors = [Color(0xFF22C55E), Color(0xFFEF4444), Color(0xFFFACC15), Color(0xFF3B82F6)];
  static const _notes = [0, 4, 7, 12];
  final List<int> _seq = [];
  int _pos = 0;
  int _lit = -1;
  bool _showing = false;
  bool _playing = false;
  int _best = 0;
  String _msg = 'Press Start';

  void _start() {
    _seq.clear();
    _playing = true;
    _next();
  }

  void _next() {
    _seq.add(math.Random().nextInt(4));
    _pos = 0;
    _show();
  }

  Future<void> _show() async {
    setState(() {
      _showing = true;
      _msg = 'Watch…';
    });
    await Future<void>.delayed(const Duration(milliseconds: 600));
    for (final s in List<int>.from(_seq)) {
      if (!mounted) return;
      _flash(s);
      await Future<void>.delayed(Duration(milliseconds: math.max(280, 600 - _seq.length * 18)));
    }
    if (!mounted) return;
    setState(() {
      _showing = false;
      _msg = 'Your turn!';
    });
  }

  void _flash(int i) {
    setState(() => _lit = i);
    NgmyTone.playNote('marimba', _notes[i] + 5, ms: 450, volume: 0.55);
    Future<void>.delayed(const Duration(milliseconds: 240), () {
      if (mounted) setState(() => _lit = -1);
    });
  }

  void _tap(int i) {
    if (!_playing || _showing) return;
    _flash(i);
    if (_seq[_pos] != i) {
      NgmyTone.play(90, ms: 600, wave: 'saw', volume: 0.5);
      setState(() {
        _playing = false;
        _best = math.max(_best, _seq.length - 1);
        _msg = 'Oops! You got ${_seq.length - 1}. Press Start to try again.';
      });
      return;
    }
    _pos++;
    if (_pos == _seq.length) {
      setState(() => _msg = 'Great! ${_seq.length} in a row');
      Future<void>.delayed(const Duration(milliseconds: 900), () {
        if (mounted && _playing) _next();
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'SIMON SOUNDS',
      accent: const Color(0xFFFACC15),
      help: 'Watch the colours light up and listen to the notes. Then repeat the pattern by tapping the same colours in the same order. Each round adds one more. How long can you go?',
      stage: Center(
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Text('Best: $_best', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800)),
            const SizedBox(height: 6),
            Text(_msg, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 17)),
            const SizedBox(height: 20),
            AspectRatio(
              aspectRatio: 1,
              child: GridView.count(
                crossAxisCount: 2,
                mainAxisSpacing: 12,
                crossAxisSpacing: 12,
                physics: const NeverScrollableScrollPhysics(),
                children: [
                  for (var i = 0; i < 4; i++)
                    GestureDetector(
                      onTap: () => _tap(i),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 120),
                        decoration: BoxDecoration(
                          color: _colors[i].withValues(alpha: _lit == i ? 1 : 0.35),
                          borderRadius: BorderRadius.circular(28),
                          boxShadow: _lit == i ? [BoxShadow(color: _colors[i].withValues(alpha: 0.8), blurRadius: 30)] : null,
                          border: Border.all(color: Colors.white.withValues(alpha: _lit == i ? 0.9 : 0.15), width: 2),
                        ),
                      ),
                    ),
                ],
              ),
            ),
          ]),
        ),
      ),
      tools: StudioRow(children: [StudioButton(icon: Icons.play_arrow_rounded, label: _playing ? 'Restart' : 'Start', color: const Color(0xFF4ADE80), onTap: _start)]),
    );
  }
}

// ── Tip and split ────────────────────────────────────────────────────────────

class NgmyTipStudio extends StatefulWidget {
  const NgmyTipStudio({super.key});

  @override
  State<NgmyTipStudio> createState() => _NgmyTipStudioState();
}

class _NgmyTipStudioState extends State<NgmyTipStudio> {
  final TextEditingController _bill = TextEditingController();
  double _tip = 10;
  int _people = 2;
  bool _roundUp = false;

  String _m(double v) => v.toStringAsFixed(2).replaceAllMapped(RegExp(r'(\d)(?=(\d{3})+\.)'), (m) => '${m[1]},');

  @override
  Widget build(BuildContext context) {
    final bill = double.tryParse(_bill.text.replaceAll(',', '.')) ?? 0;
    final tip = bill * _tip / 100;
    var total = bill + tip;
    var per = total / _people;
    if (_roundUp) {
      per = per.ceilToDouble();
      total = per * _people;
    }
    Widget row(String k, String v, {bool big = false}) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 6),
          child: Row(children: [Expanded(child: Text(k, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white60, fontWeight: FontWeight.w700, fontSize: big ? 16 : 14))), const SizedBox(width: 8), Flexible(child: FittedBox(fit: BoxFit.scaleDown, child: Text(v, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: big ? 30 : 18))))]),
        );
    return StudioPage(
      title: 'TIP & SPLIT',
      accent: const Color(0xFF4ADE80),
      help: 'Type the bill, choose a tip and how many people are sharing. You see the tip, the total and what each person pays. Turn on Round up to make the share a whole number.',
      stage: ListView(padding: const EdgeInsets.all(18), children: [
        TextField(
          controller: _bill,
          onChanged: (_) => setState(() {}),
          keyboardType: const TextInputType.numberWithOptions(decimal: true),
          style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w900),
          decoration: InputDecoration(labelText: 'Bill amount', labelStyle: const TextStyle(color: Colors.white54), prefixText: '\$ ', prefixStyle: const TextStyle(color: Color(0xFF4ADE80), fontSize: 30, fontWeight: FontWeight.w900), enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Colors.white24)), focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(16), borderSide: const BorderSide(color: Color(0xFF4ADE80)))),
        ),
        const SizedBox(height: 18),
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: const Color(0xFF4ADE80).withValues(alpha: 0.1), borderRadius: BorderRadius.circular(20), border: Border.all(color: const Color(0xFF4ADE80).withValues(alpha: 0.35))),
          child: Column(children: [
            row('Tip (${_tip.round()}%)', '\$${_m(tip)}'),
            row('Total', '\$${_m(total)}'),
            const Divider(color: Colors.white12),
            row('Each of $_people pays', '\$${_m(per)}', big: true),
          ]),
        ),
      ]),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(label: 'TIP', children: [for (final t in const [0, 5, 10, 15, 18, 20, 25]) StudioChip(label: '$t%', selected: _tip.round() == t, color: const Color(0xFF4ADE80), onTap: () => setState(() => _tip = t.toDouble()))]),
        StudioSlider(label: 'People', value: _people.toDouble(), min: 1, max: 20, display: '$_people', color: const Color(0xFF38BDF8), onChanged: (v) => setState(() => _people = v.round())),
        StudioRow(children: [StudioChip(label: 'Round up', selected: _roundUp, color: const Color(0xFFFBBF24), onTap: () => setState(() => _roundUp = !_roundUp))]),
      ]),
    );
  }
}

// ── Lucky pocket: dice, coin, number ─────────────────────────────────────────

class NgmyLuckyStudio extends StatefulWidget {
  const NgmyLuckyStudio({super.key});

  @override
  State<NgmyLuckyStudio> createState() => _NgmyLuckyStudioState();
}

class _NgmyLuckyStudioState extends State<NgmyLuckyStudio> with SingleTickerProviderStateMixin, StudioFrames {
  String _mode = 'dice';
  int _dice = 2;
  List<int> _faces = [3, 5];
  double _roll = 0; // seconds left rolling
  bool _heads = true;
  double _flip = 0;
  double _flipLeft = 0;
  int _min = 1;
  int _max = 100;
  int _number = 0;
  final math.Random _rnd = math.Random();

  @override
  void initState() {
    super.initState();
    startFrames();
  }

  @override
  void onFrame(double dt) {
    if (_roll > 0) {
      _roll -= dt;
      if (((_roll * 14).floor() % 2) == 0) {
        _faces = [for (var i = 0; i < _dice; i++) _rnd.nextInt(6) + 1];
      }
      if (_roll <= 0) {
        _faces = [for (var i = 0; i < _dice; i++) _rnd.nextInt(6) + 1];
        NgmyTone.drum('snare', volume: 0.5);
      }
      setState(() {});
    }
    if (_flipLeft > 0) {
      _flipLeft -= dt;
      _flip += dt * 14;
      if (_flipLeft <= 0) {
        _heads = _rnd.nextBool();
        _flip = _heads ? 0 : math.pi;
        NgmyTone.playNote('bell', 24, ms: 400, volume: 0.5);
      }
      setState(() {});
    }
  }

  @override
  Widget build(BuildContext context) {
    Widget stage;
    if (_mode == 'dice') {
      stage = GestureDetector(
        onTap: () => setState(() {
          if (_faces.length != _dice) _faces = List.filled(_dice, 1);
          _roll = 0.9;
          NgmyTone.drum('hat', volume: 0.6);
        }),
        child: Center(child: Wrap(spacing: 18, runSpacing: 18, alignment: WrapAlignment.center, children: [for (var i = 0; i < _dice; i++) _Die(_faces.length > i ? _faces[i] : 1, shake: _roll > 0)])),
      );
    } else if (_mode == 'coin') {
      final scaleY = math.cos(_flip).abs().clamp(0.05, 1.0);
      final face = math.cos(_flip) >= 0;
      stage = GestureDetector(
        onTap: () => setState(() {
          _flipLeft = 1.1;
          NgmyTone.playNote('bell', 36, ms: 200, volume: 0.4);
        }),
        child: Center(
          child: Transform.scale(
            scaleY: scaleY,
            child: Container(
              width: 190,
              height: 190,
              alignment: Alignment.center,
              decoration: BoxDecoration(shape: BoxShape.circle, gradient: const RadialGradient(center: Alignment(-0.3, -0.4), colors: [Color(0xFFFEF3C7), Color(0xFFFBBF24), Color(0xFFB45309)]), border: Border.all(color: const Color(0xFFB45309), width: 6), boxShadow: [BoxShadow(color: const Color(0xFFFBBF24).withValues(alpha: 0.4), blurRadius: 30)]),
              child: Text(face ? 'HEADS' : 'TAILS', style: const TextStyle(color: Color(0xFF78350F), fontSize: 30, fontWeight: FontWeight.w900, letterSpacing: 1)),
            ),
          ),
        ),
      );
    } else {
      stage = GestureDetector(
        onTap: () => setState(() {
          final lo = math.min(_min, _max), hi = math.max(_min, _max);
          _number = lo + _rnd.nextInt(hi - lo + 1);
          NgmyTone.playNote('bell', 12 + _number % 12, ms: 500, volume: 0.5);
        }),
        child: Center(child: Column(mainAxisSize: MainAxisSize.min, children: [Text(_number == 0 ? '?' : '$_number', style: const TextStyle(color: Colors.white, fontSize: 110, fontWeight: FontWeight.w900)), Text('between $_min and $_max', style: const TextStyle(color: Colors.white38))])),
      );
    }
    return StudioPage(
      title: 'LUCKY POCKET',
      accent: const Color(0xFFA78BFA),
      help: 'Tap the screen to roll dice, flip a coin, or pick a random number. Perfect for board games, deciding who goes first, or settling an argument fairly.',
      stage: stage,
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [for (final m in const [('dice', 'Dice', Icons.casino_rounded), ('coin', 'Coin', Icons.monetization_on_rounded), ('num', 'Number', Icons.tag_rounded)]) StudioChip(label: m.$2, icon: m.$3, selected: _mode == m.$1, color: const Color(0xFFA78BFA), onTap: () => setState(() => _mode = m.$1))]),
        if (_mode == 'dice') StudioSlider(label: 'Dice', value: _dice.toDouble(), min: 1, max: 4, display: '$_dice', color: const Color(0xFFA78BFA), onChanged: (v) => setState(() {
              _dice = v.round();
              _faces = List.generate(_dice, (i) => _faces.length > i ? _faces[i] : 1);
            })),
        if (_mode == 'num') ...[
          StudioSlider(label: 'From', value: _min.toDouble(), min: 1, max: 100, display: '$_min', color: const Color(0xFFA78BFA), onChanged: (v) => setState(() => _min = v.round())),
          StudioSlider(label: 'To', value: _max.toDouble(), min: 2, max: 1000, display: '$_max', color: const Color(0xFFA78BFA), onChanged: (v) => setState(() => _max = v.round())),
        ],
      ]),
    );
  }
}

class _Die extends StatelessWidget {
  const _Die(this.n, {required this.shake});
  final int n;
  final bool shake;

  static const Map<int, List<Alignment>> _pips = {
    1: [Alignment.center],
    2: [Alignment.topLeft, Alignment.bottomRight],
    3: [Alignment.topLeft, Alignment.center, Alignment.bottomRight],
    4: [Alignment.topLeft, Alignment.topRight, Alignment.bottomLeft, Alignment.bottomRight],
    5: [Alignment.topLeft, Alignment.topRight, Alignment.center, Alignment.bottomLeft, Alignment.bottomRight],
    6: [Alignment.topLeft, Alignment.topRight, Alignment.centerLeft, Alignment.centerRight, Alignment.bottomLeft, Alignment.bottomRight],
  };

  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: shake ? (math.Random().nextDouble() - 0.5) * 0.6 : 0,
      child: Container(
        width: 100,
        height: 100,
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 6))]),
        child: Stack(children: [for (final a in _pips[n.clamp(1, 6)]!) Align(alignment: a, child: Container(width: 18, height: 18, decoration: const BoxDecoration(color: Color(0xFF111827), shape: BoxShape.circle)))]),
      ),
    );
  }
}
