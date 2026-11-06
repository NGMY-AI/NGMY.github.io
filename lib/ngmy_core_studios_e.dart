import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

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
