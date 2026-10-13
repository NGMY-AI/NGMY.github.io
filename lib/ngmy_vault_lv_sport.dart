import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 51–60: sports and skill.
final kVaultSportGames = <VaultLvDef>[
  VaultLvDef(id: 'v_bubble_shooter', title: 'Bubble Shooter', tagline: 'Aim and fire — match 3 colours to pop them.', emoji: '🫧', icon: Icons.bubble_chart_rounded, colors: const [Color(0xFF60A5FA), Color(0xFF1E1B4B)], tag: 'SKILL', build: (a, l) => BubbleShooterGame(args: a, level: l)),
  VaultLvDef(id: 'v_bowling', title: 'Strike Bowling', tagline: 'Swipe to bowl — knock the pins down.', emoji: '🎳', icon: Icons.sports_rounded, colors: const [Color(0xFFD97706), Color(0xFF451A03)], tag: 'SPORT', build: (a, l) => BowlingGame(args: a, level: l)),
  VaultLvDef(id: 'v_darts', title: 'Pro Darts', tagline: 'Hit trebles and bulls to reach the score.', emoji: '🎯', icon: Icons.adjust_rounded, colors: const [Color(0xFFDC2626), Color(0xFF14532D)], tag: 'SPORT', build: (a, l) => DartsGame(args: a, level: l)),
  VaultLvDef(id: 'v_curling', title: 'Curling', tagline: 'Slide the stone to stop on the target.', emoji: '🥌', icon: Icons.circle_outlined, colors: const [Color(0xFF38BDF8), Color(0xFFF1F5F9)], tag: 'SPORT', build: (a, l) => CurlingGame(args: a, level: l)),
  VaultLvDef(id: 'v_keepy', title: 'Keepy Uppy', tagline: 'Tap the ball to keep it off the ground.', emoji: '⚽', icon: Icons.sports_soccer_rounded, colors: const [Color(0xFF22C55E), Color(0xFF0EA5E9)], tag: 'SPORT', build: (a, l) => KeepyUppyGame(args: a, level: l)),
  VaultLvDef(id: 'v_boxing', title: 'Boxing Dodge', tagline: 'Read the punch, dodge it, hit back.', emoji: '🥊', icon: Icons.sports_mma_rounded, colors: const [Color(0xFFEF4444), Color(0xFF1C1917)], tag: 'SPORT', build: (a, l) => BoxingDodgeGame(args: a, level: l)),
  VaultLvDef(id: 'v_tug', title: 'Tug of War', tagline: 'Pull on the beat to win the rope.', emoji: '🪢', icon: Icons.linear_scale_rounded, colors: const [Color(0xFFF59E0B), Color(0xFF365314)], tag: 'SPORT', build: (a, l) => TugOfWarGame(args: a, level: l)),
  VaultLvDef(id: 'v_drag_race', title: 'Drag Race', tagline: 'Shift gears in the green to win the race.', emoji: '🏁', icon: Icons.speed_rounded, colors: const [Color(0xFFF43F5E), Color(0xFF111827)], tag: 'SPORT', build: (a, l) => DragRaceGame(args: a, level: l)),
  VaultLvDef(id: 'v_parking', title: 'Parking Pro', tagline: 'Steer into the space without hitting anything.', emoji: '🅿️', icon: Icons.local_parking_rounded, colors: const [Color(0xFF3B82F6), Color(0xFF374151)], tag: 'SKILL', build: (a, l) => ParkingGame(args: a, level: l), seconds: (l) => lvI(l, 60, 45)),
  VaultLvDef(id: 'v_marble_run', title: 'Marble Run', tagline: 'Flip the gates so each marble lands in its cup.', emoji: '🔮', icon: Icons.alt_route_rounded, colors: const [Color(0xFF8B5CF6), Color(0xFF2E1065)], tag: 'SKILL', build: (a, l) => MarbleRunGame(args: a, level: l)),
];

// ── 51 Bubble Shooter ──────────────────────────────────────────────────────
const _bubbleColors = [Color(0xFFEF4444), Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFFACC15), Color(0xFFA855F7), Color(0xFFF97316)];

class BubbleShooterGame extends StatefulWidget {
  const BubbleShooterGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BubbleShooterGame> createState() => _BubbleShooterState();
}

class _BubbleShooterState extends State<BubbleShooterGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _startCount;
  static const _cols = 8;
  static const _rowsMax = 14;
  late final int _colorsN = lvI(widget.level, 3, 6);
  final _grid = <int, int>{}; // cell (row*cols+col) → colour
  late final int _startCount;
  Size _size = Size.zero;
  double _aim = -math.pi / 2;
  Offset? _ball, _vel;
  late int _next;
  int _shots = 0;

  @override
  void initState() {
    super.initState();
    final rows = lvI(widget.level, 3, 7);
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < _cols; c++) {
        _grid[r * _cols + c] = args.rng.nextInt(_colorsN);
      }
    }
    _startCount = _grid.length;
    _next = _pickColor();
    startScore();
    startLoop(_frame);
  }

  int _pickColor() {
    final present = _grid.values.toSet().toList();
    return present.isEmpty ? 0 : present[args.rng.nextInt(present.length)];
  }

  double get _d => _size.width / (_cols + 0.5);
  Offset _center(int cell) {
    final r = cell ~/ _cols, c = cell % _cols;
    return Offset((c + 0.5 + (r.isOdd ? 0.5 : 0)) * _d, (r + 0.5) * _d * 0.88 + 54);
  }

  List<int> _nbrs(int cell) {
    final r = cell ~/ _cols, c = cell % _cols;
    final odd = r.isOdd;
    final cand = [
      (r, c - 1), (r, c + 1),
      (r - 1, odd ? c : c - 1), (r - 1, odd ? c + 1 : c),
      (r + 1, odd ? c : c - 1), (r + 1, odd ? c + 1 : c),
    ];
    return [for (final (rr, cc) in cand) if (rr >= 0 && rr < _rowsMax && cc >= 0 && cc < _cols) rr * _cols + cc];
  }

  void _frame(double dt) {
    if (_size.isEmpty || _ball == null) {
      setState(() {});
      return;
    }
    var b = _ball!, v = _vel!;
    for (var k = 0; k < 6; k++) {
      b += v * (dt / 6);
      if (b.dx < _d / 2 || b.dx > _size.width - _d / 2) v = Offset(-v.dx, v.dy);
      final hit = b.dy < 54 + _d * 0.44 || _grid.keys.any((cell) => (_center(cell) - b).distance < _d * 0.88);
      if (hit) {
        _land(b);
        return;
      }
    }
    _ball = b;
    _vel = v;
    setState(() {});
  }

  void _land(Offset at) {
    _ball = null;
    int? best;
    var bestD = double.infinity;
    for (var cell = 0; cell < _rowsMax * _cols; cell++) {
      if (_grid.containsKey(cell)) continue;
      final attached = cell < _cols || _nbrs(cell).any(_grid.containsKey);
      if (!attached) continue;
      final d = (_center(cell) - at).distance;
      if (d < bestD) {
        bestD = d;
        best = cell;
      }
    }
    if (best == null) return;
    _grid[best] = _next;
    // Same-colour group.
    final group = <int>{best};
    final q = [best];
    while (q.isNotEmpty) {
      final c = q.removeLast();
      for (final n in _nbrs(c)) {
        if (_grid[n] == _grid[best] && group.add(n)) q.add(n);
      }
    }
    var popped = 0;
    if (group.length >= 3) {
      for (final c in group) {
        _grid.remove(c);
      }
      popped += group.length;
      // Drop bubbles no longer hanging from the top.
      final held = <int>{};
      final hq = [for (var c = 0; c < _cols; c++) if (_grid.containsKey(c)) c];
      held.addAll(hq);
      while (hq.isNotEmpty) {
        final c = hq.removeLast();
        for (final n in _nbrs(c)) {
          if (_grid.containsKey(n) && held.add(n)) hq.add(n);
        }
      }
      final loose = _grid.keys.where((c) => !held.contains(c)).toList();
      for (final c in loose) {
        _grid.remove(c);
      }
      popped += loose.length;
      HapticFeedback.mediumImpact();
    }
    _shots++;
    if (popped > 0 && addPoint(popped)) return;
    if (_grid.isEmpty) {
      addPoint(goal);
      return;
    }
    // Every few shots the ceiling drops a row.
    if (_shots % lvI(widget.level, 8, 4) == 0) {
      final moved = <int, int>{for (final e in _grid.entries) e.key + _cols * 2: e.value};
      _grid
        ..clear()
        ..addAll(moved);
      for (var c = 0; c < _cols * 2; c++) {
        _grid[c] = args.rng.nextInt(_colorsN);
      }
    }
    if (_grid.keys.any((c) => c ~/ _cols >= _rowsMax - 2)) {
      knockout('The bubbles reached the bottom');
      return;
    }
    _next = _pickColor();
    setState(() {});
  }

  void _fire() {
    if (_ball != null || ended || _size.isEmpty) return;
    _ball = Offset(_size.width / 2, _size.height - 60);
    final sp = lvD(widget.level, 900, 1200);
    _vel = Offset(math.cos(_aim), math.sin(_aim)) * sp;
  }

  void _aimAt(Offset p) {
    final from = Offset(_size.width / 2, _size.height - 60);
    final a = math.atan2(p.dy - from.dy, p.dx - from.dx);
    _aim = a.clamp(-math.pi + 0.15, -0.15);
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final d = _d;
        final from = Offset(c.maxWidth / 2, c.maxHeight - 60);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (e) => setState(() => _aimAt(e.localPosition)),
          onPanUpdate: (e) => setState(() => _aimAt(e.localPosition)),
          onPanEnd: (_) => _fire(),
          onTapUp: (e) {
            _aimAt(e.localPosition);
            _fire();
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF1E1B4B), Color(0xFF0B0920)]),
            Positioned(left: 0, right: 0, top: 54 + (_rowsMax - 2) * d * 0.88, child: Container(height: 2, color: Colors.redAccent.withValues(alpha: 0.5))),
            for (final e in _grid.entries)
              Positioned(left: _center(e.key).dx - d * 0.45, top: _center(e.key).dy - d * 0.45, child: _bubble(d * 0.9, _bubbleColors[e.value])),
            Positioned.fill(child: IgnorePointer(child: CustomPaint(painter: _AimPainter(from, _aim)))),
            if (_ball != null) Positioned(left: _ball!.dx - d * 0.45, top: _ball!.dy - d * 0.45, child: _bubble(d * 0.9, _bubbleColors[_next])),
            if (_ball == null) Positioned(left: from.dx - d * 0.45, top: from.dy - d * 0.45, child: _bubble(d * 0.9, _bubbleColors[_next])),
            arcadeTopBar('Drag to aim, let go to shoot · ${_grid.length} left'),
          ]),
        );
      });

  Widget _bubble(double s, Color c) => Container(
        width: s,
        height: s,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: RadialGradient(center: const Alignment(-0.35, -0.35), colors: [Color.lerp(c, Colors.white, 0.55)!, c, Color.lerp(c, Colors.black, 0.25)!]),
        ),
      );
}

class _AimPainter extends CustomPainter {
  _AimPainter(this.from, this.angle);
  final Offset from;
  final double angle;
  @override
  void paint(Canvas canvas, Size s) {
    final dir = Offset(math.cos(angle), math.sin(angle));
    for (var i = 1; i < 10; i++) {
      canvas.drawCircle(from + dir * (i * 26.0), 3, Paint()..color = Colors.white.withValues(alpha: 0.6 - i * 0.05));
    }
  }

  @override
  bool shouldRepaint(covariant _AimPainter old) => old.angle != angle;
}

// ── 52 Strike Bowling ──────────────────────────────────────────────────────
class _Pin {
  _Pin(this.p);
  Offset p;
  Offset v = Offset.zero;
  bool down = false;
}

class BowlingGame extends StatefulWidget {
  const BowlingGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BowlingGame> createState() => _BowlingState();
}

class _BowlingState extends State<BowlingGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 12, 42);
  late final int _frames = lvI(widget.level, 2, 5);
  int _frame = 0, _roll = 0;
  final _pins = <_Pin>[];
  Offset? _ball, _bv;
  Offset? _swipeStart;
  late double _drift;
  double _settle = 0;

  @override
  void initState() {
    super.initState();
    _rack();
    startScore();
    startLoop(_tick);
  }

  void _rack() {
    _pins.clear();
    for (var row = 0; row < 4; row++) {
      for (var k = 0; k <= row; k++) {
        _pins.add(_Pin(Offset(0.5 + (k - row / 2) * 0.1, 0.12 + (3 - row) * 0.065)));
      }
    }
    _drift = (args.rng.nextDouble() - 0.5) * lvD(widget.level, 0.0, 0.35);
  }

  void _tick(double dt) {
    if (_ball != null) {
      _bv = _bv! + Offset(_drift, 0) * dt;
      _ball = _ball! + _bv! * dt;
      for (final p in _pins) {
        if (!p.down && (p.p - _ball!).distance < 0.055) {
          p.down = true;
          p.v = (p.p - _ball!) * 12 + _bv! * 0.6;
        }
      }
      if (_ball!.dy < -0.05 || _ball!.dx < 0.08 || _ball!.dx > 0.92) {
        _ball = null;
        _settle = 0.7;
      }
    }
    for (final p in _pins.where((p) => p.down)) {
      p.p += p.v * dt;
      p.v *= math.pow(0.1, dt).toDouble();
      for (final o in _pins) {
        if (!o.down && (o.p - p.p).distance < 0.05 && p.v.distance > 0.15) {
          o.down = true;
          o.v = (o.p - p.p) * 10 + p.v * 0.5;
        }
      }
    }
    if (_settle > 0) {
      _settle -= dt;
      if (_settle <= 0) _endRoll();
    }
    setState(() {});
  }

  void _endRoll() {
    final downNow = _pins.where((p) => p.down).length;
    final before = _roll == 0 ? 0 : _pins.where((p) => p.down && p.p.dy < -1).length;
    final gained = downNow - before;
    if (gained > 0 && addPoint(gained)) return;
    if (_roll == 0 && downNow < 10) {
      _roll = 1;
      // Clear the knocked pins off the lane.
      for (final p in _pins.where((p) => p.down)) {
        p.p = const Offset(-5, -5);
        p.v = Offset.zero;
      }
    } else {
      _roll = 0;
      _frame++;
      if (_frame >= _frames) {
        knockout('Out of frames');
        return;
      }
      _rack();
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanStart: (d) => _swipeStart = d.localPosition,
          onPanEnd: (d) {
            if (_ball != null || _settle > 0 || ended || _swipeStart == null) return;
            final v = d.velocity.pixelsPerSecond;
            if (v.dy > -200) return;
            _ball = Offset((_swipeStart!.dx / w).clamp(0.2, 0.8), 0.9);
            _bv = Offset(v.dx / w * 0.35, (v.dy / h * 0.35).clamp(-1.6, -0.5));
          },
          child: Stack(children: [
            Positioned(left: w * 0.12, right: w * 0.12, top: 0, bottom: 0, child: Container(decoration: const BoxDecoration(gradient: LinearGradient(colors: [Color(0xFFD97706), Color(0xFFFBBF24), Color(0xFFD97706)])))),
            Positioned(left: 0, top: 0, bottom: 0, width: w * 0.12, child: Container(color: const Color(0xFF292524))),
            Positioned(right: 0, top: 0, bottom: 0, width: w * 0.12, child: Container(color: const Color(0xFF292524))),
            for (final p in _pins)
              if (p.p.dx > -1)
                Positioned(left: p.p.dx * w - 12, top: p.p.dy * h - 16, child: Transform.rotate(angle: p.down ? 1.3 : 0, child: Opacity(opacity: p.down ? 0.6 : 1, child: emojiText('🎳', 26)))),
            if (_ball != null) Positioned(left: _ball!.dx * w - 18, top: _ball!.dy * h - 18, child: Container(width: 36, height: 36, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Color(0xFF6366F1), Color(0xFF1E1B4B)])))),
            if (_ball == null && _settle <= 0) Positioned(left: w / 2 - 18, top: h * 0.88, child: Container(width: 36, height: 36, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Color(0xFF6366F1), Color(0xFF1E1B4B)])))),
            arcadeTopBar('Swipe up to bowl · pins $score/$goal · frame ${math.min(_frame + 1, _frames)}/$_frames roll ${_roll + 1}', bottom: true),
          ]),
        );
      });
}

// ── 53 Pro Darts ───────────────────────────────────────────────────────────
const _dartOrder = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

class DartsGame extends StatefulWidget {
  const DartsGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DartsGame> createState() => _DartsState();
}

class _DartsState extends State<DartsGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 90, 260);
  late final int _darts = lvI(widget.level, 9, 9);
  int _thrown = 0;
  double _t = 0;
  final _hits = <Offset>[];
  String _last = '';

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _t += dt;
      setState(() {});
    });
  }

  Offset get _aim {
    final amp = lvD(widget.level, 0.25, 0.55);
    final k = lvD(widget.level, 1.0, 1.9);
    return Offset(math.sin(_t * 1.9 * k) * amp, math.sin(_t * 2.7 * k + 0.7) * amp);
  }

  int _scoreAt(Offset p) {
    final r = p.distance;
    if (r < 0.05) {
      _last = 'BULL 50';
      return 50;
    }
    if (r < 0.1) {
      _last = '25';
      return 25;
    }
    if (r > 1) {
      _last = 'Miss';
      return 0;
    }
    final ang = (math.atan2(p.dx, -p.dy) + math.pi * 2 + math.pi / 20) % (math.pi * 2);
    final num = _dartOrder[(ang / (math.pi * 2) * 20).floor() % 20];
    final mult = (r > 0.55 && r < 0.62) ? 3 : ((r > 0.92) ? 2 : 1);
    _last = '${mult == 3 ? 'TRIPLE ' : (mult == 2 ? 'DOUBLE ' : '')}$num';
    return num * mult;
  }

  void _throw() {
    if (ended || _thrown >= _darts) return;
    final a = _aim;
    _hits.add(a);
    _thrown++;
    HapticFeedback.mediumImpact();
    final s = _scoreAt(a);
    if (s > 0 && addPoint(s)) return;
    if (_thrown >= _darts) knockout('Out of darts');
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final R = math.min(c.maxWidth, c.maxHeight) * 0.42;
        final ctr = Offset(c.maxWidth / 2, c.maxHeight * 0.5);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => _throw(),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF14532D), Color(0xFF052E16)]),
            Positioned.fill(child: CustomPaint(painter: _DartBoardPainter(ctr, R))),
            for (final hpos in _hits) Positioned(left: ctr.dx + hpos.dx * R - 5, top: ctr.dy + hpos.dy * R - 5, child: Container(width: 10, height: 10, decoration: BoxDecoration(shape: BoxShape.circle, color: Colors.white, border: Border.all(color: Colors.black)))),
            Positioned(left: ctr.dx + _aim.dx * R - 20, top: ctr.dy + _aim.dy * R - 20, child: const IgnorePointer(child: Icon(Icons.add_rounded, size: 40, color: Colors.white))),
            if (_last.isNotEmpty) Positioned(left: 0, right: 0, bottom: 70, child: Text(_last, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFDE68A), fontSize: 26, fontWeight: FontWeight.w900))),
            arcadeTopBar('Tap to throw · $score/$goal · darts ${_darts - _thrown}', bottom: true),
          ]),
        );
      });
}

class _DartBoardPainter extends CustomPainter {
  _DartBoardPainter(this.c, this.r);
  final Offset c;
  final double r;
  @override
  void paint(Canvas canvas, Size s) {
    canvas.drawCircle(c, r * 1.12, Paint()..color = const Color(0xFF0B0B0B));
    const seg = math.pi * 2 / 20;
    for (var i = 0; i < 20; i++) {
      final start = -math.pi / 2 - seg / 2 + i * seg;
      final dark = i.isEven;
      for (final (outer, inner, col) in [
        (1.0, 0.92, dark ? const Color(0xFFDC2626) : const Color(0xFF16A34A)),
        (0.92, 0.62, dark ? const Color(0xFF111827) : const Color(0xFFFEF3C7)),
        (0.62, 0.55, dark ? const Color(0xFFDC2626) : const Color(0xFF16A34A)),
        (0.55, 0.1, dark ? const Color(0xFF111827) : const Color(0xFFFEF3C7)),
      ]) {
        final path = Path()
          ..arcTo(Rect.fromCircle(center: c, radius: r * outer), start, seg, true)
          ..arcTo(Rect.fromCircle(center: c, radius: r * inner), start + seg, -seg, false)
          ..close();
        canvas.drawPath(path, Paint()..color = col);
      }
      final a = start + seg / 2;
      final tp = TextPainter(text: TextSpan(text: '${_dartOrder[i]}', style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
      tp.paint(canvas, c + Offset(math.cos(a), math.sin(a)) * r * 1.06 - Offset(tp.width / 2, tp.height / 2));
    }
    canvas.drawCircle(c, r * 0.1, Paint()..color = const Color(0xFF16A34A));
    canvas.drawCircle(c, r * 0.05, Paint()..color = const Color(0xFFDC2626));
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

// ── 54 Curling ─────────────────────────────────────────────────────────────
class CurlingGame extends StatefulWidget {
  const CurlingGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<CurlingGame> createState() => _CurlingState();
}

class _CurlingState extends State<CurlingGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 4, 12);
  late final int _stones = lvI(widget.level, 5, 6);
  int _thrown = 0;
  double _power = 0, _dir = 1, _aimX = 0.5;
  bool _charging = false;
  Offset? _stone;
  double _vy = 0;
  final _rest = <Offset>[];
  late final double _drift = (args.rng.nextDouble() - 0.5) * lvD(widget.level, 0, 0.06);
  static const _house = Offset(0.5, 0.2);
  String _msg = '';

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_charging) {
        _power += _dir * lvD(widget.level, 0.8, 1.6) * dt;
        if (_power > 1) _dir = -1;
        if (_power < 0) _dir = 1;
      }
      if (_stone != null) {
        _stone = _stone! + Offset(_drift * dt * 3, -_vy * dt);
        _vy = math.max(0, _vy - 0.42 * dt);
        if (_vy <= 0.001 || _stone!.dy < 0.02) _settle();
      }
      setState(() {});
    });
  }

  void _settle() {
    final s = _stone!;
    _stone = null;
    _rest.add(s);
    _thrown++;
    final d = (s - _house).distance;
    final pts = d < 0.04 ? 3 : (d < 0.08 ? 2 : (d < 0.13 ? 1 : 0));
    _msg = pts == 0 ? 'Outside the house' : '+$pts';
    if (pts > 0 && addPoint(pts)) return;
    if (_thrown >= _stones) knockout('Out of stones');
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (e) {
            if (_stone != null || ended) return;
            _aimX = (e.localPosition.dx / w).clamp(0.25, 0.75);
            _charging = true;
            _power = 0;
          },
          onPointerMove: (e) {
            if (_charging) _aimX = (e.localPosition.dx / w).clamp(0.25, 0.75);
          },
          onPointerUp: (_) {
            if (!_charging) return;
            _charging = false;
            _stone = Offset(_aimX, 0.88);
            // Stopping distance = v² / (2·friction): map power to just past the house.
            _vy = math.sqrt(2 * 0.42 * (0.4 + _power * 0.55));
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFFF8FAFC), Color(0xFFE2E8F0)]),
            for (final (rr, col) in [(0.13, const Color(0xFF2563EB)), (0.08, Colors.white), (0.04, const Color(0xFFDC2626))])
              Positioned(left: (_house.dx - rr) * w, top: _house.dy * h - rr * w, child: Container(width: rr * 2 * w, height: rr * 2 * w, decoration: BoxDecoration(shape: BoxShape.circle, color: col))),
            for (final s in _rest) Positioned(left: s.dx * w - 14, top: s.dy * h - 14, child: emojiText('🥌', 28)),
            if (_stone != null) Positioned(left: _stone!.dx * w - 14, top: _stone!.dy * h - 14, child: emojiText('🥌', 28)),
            if (_stone == null) Positioned(left: _aimX * w - 14, top: 0.88 * h - 14, child: emojiText('🥌', 28)),
            if (_charging)
              Positioned(
                left: w * 0.1,
                right: w * 0.1,
                bottom: 20,
                child: Container(
                  height: 18,
                  decoration: BoxDecoration(color: Colors.black12, borderRadius: BorderRadius.circular(9)),
                  alignment: Alignment.centerLeft,
                  child: FractionallySizedBox(widthFactor: _power.clamp(0.02, 1.0), child: Container(decoration: BoxDecoration(color: const Color(0xFF2563EB), borderRadius: BorderRadius.circular(9)))),
                ),
              ),
            if (_msg.isNotEmpty) Positioned(left: 0, right: 0, top: h * 0.45, child: Text(_msg, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF1E3A8A), fontSize: 26, fontWeight: FontWeight.w900))),
            Align(
              alignment: Alignment.topCenter,
              child: Padding(
                padding: const EdgeInsets.only(top: 8),
                child: Text('Hold for power, let go · $score/$goal pts · stones ${_stones - _thrown}', style: const TextStyle(color: Color(0xFF0F172A), fontWeight: FontWeight.w900)),
              ),
            ),
          ]),
        );
      });
}

// ── 55 Keepy Uppy ──────────────────────────────────────────────────────────
class KeepyUppyGame extends StatefulWidget {
  const KeepyUppyGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<KeepyUppyGame> createState() => _KeepyUppyState();
}

class _KeepyUppyState extends State<KeepyUppyGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 10, 45);
  Size _size = Size.zero;
  Offset _p = Offset.zero, _v = Offset.zero;
  bool _ready = false;
  double _wind = 0, _spin = 0;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      if (!_ready) {
        _ready = true;
        _p = Offset(_size.width / 2, _size.height * 0.3);
      }
      _wind = math.sin(DateTime.now().millisecondsSinceEpoch / 1500) * lvD(widget.level, 0, 160);
      _v += Offset(_wind, lvD(widget.level, 1100, 1700)) * dt;
      _p += _v * dt;
      _spin += _v.dx * dt * 0.02;
      if (_p.dx < 28 || _p.dx > _size.width - 28) {
        _v = Offset(-_v.dx * 0.8, _v.dy);
        _p = Offset(_p.dx.clamp(28, _size.width - 28), _p.dy);
      }
      if (_p.dy > _size.height - 40) {
        _p = Offset(_size.width / 2, _size.height * 0.3);
        _v = Offset.zero;
        if (loseHeart('The ball hit the ground')) return;
      }
      setState(() {});
    });
  }

  void _kick(Offset at) {
    if (ended) return;
    if ((at - _p).distance > lvD(widget.level, 80, 55)) return;
    _v = Offset((_p.dx - at.dx) * 9 + (args.rng.nextDouble() - 0.5) * 120, -lvD(widget.level, 800, 950));
    HapticFeedback.lightImpact();
    addPoint();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => _kick(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFF22C55E)]),
            Positioned(left: 0, right: 0, bottom: 0, height: 40, child: Container(color: const Color(0xFF15803D))),
            if (_wind.abs() > 20) Positioned(left: 0, right: 0, top: 70, child: Text('wind ${_wind > 0 ? '→' : '←'}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
            Positioned(left: _p.dx - 28, top: _p.dy - 28, child: Transform.rotate(angle: _spin, child: emojiText('⚽', 56))),
            arcadeTopBar('Tap the ball · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// ── 56 Boxing Dodge ────────────────────────────────────────────────────────
class BoxingDodgeGame extends StatefulWidget {
  const BoxingDodgeGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BoxingDodgeGame> createState() => _BoxingDodgeState();
}

class _BoxingDodgeState extends State<BoxingDodgeGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 5, 16);
  int _punch = -1; // 0 left, 1 right, 2 high (duck)
  double _wind = 0; // wind-up time left
  int _dodged = -1;
  double _counter = 0, _rest = 1.0;
  String _msg = '';
  static const _names = ['LEFT', 'RIGHT', 'HIGH'];

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_counter > 0) {
        _counter -= dt;
        if (_counter <= 0) {
          _msg = '';
          _rest = lvD(widget.level, 1.0, 0.4);
        }
      } else if (_punch >= 0) {
        _wind -= dt;
        if (_wind <= 0) {
          if (_dodged == _punch) {
            _counter = lvD(widget.level, 1.1, 0.6);
            _msg = 'Dodged! HIT BACK!';
          } else {
            _msg = 'Ouch!';
            _rest = 0.8;
            if (loseHeart('Got punched')) return;
          }
          _punch = -1;
          _dodged = -1;
        }
      } else {
        _rest -= dt;
        if (_rest <= 0) {
          _punch = args.rng.nextInt(3);
          _wind = lvD(widget.level, 1.2, 0.45);
          _msg = '';
        }
      }
      setState(() {});
    });
  }

  void _dodge(int d) {
    if (_punch < 0 || ended) return;
    _dodged = d;
    HapticFeedback.selectionClick();
  }

  void _hit() {
    if (_counter <= 0 || ended) return;
    _counter = 0;
    _msg = 'POW!';
    _rest = lvD(widget.level, 1.0, 0.4);
    addPoint();
  }

  @override
  Widget build(BuildContext context) {
    final dodgeOffset = switch (_dodged) { 0 => const Offset(70, 0), 1 => const Offset(-70, 0), 2 => const Offset(0, 50), _ => Offset.zero };
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF7F1D1D), Color(0xFF1C1917)]),
      Column(children: [
        arcadeTopBar('Dodge the way the punch comes from · $score/$goal hits', hearts: hearts),
        Expanded(
          child: Stack(alignment: Alignment.center, children: [
            Positioned(top: 30, child: emojiText('🧔', 120)),
            if (_punch >= 0)
              Positioned(
                top: 110,
                left: _punch == 0 ? 40 : null,
                right: _punch == 1 ? 40 : null,
                child: Transform.scale(scale: 1 + (1 - _wind.clamp(0, 1)) * 0.8, child: emojiText('🥊', 70)),
              ),
            if (_punch >= 0) Positioned(top: 10, child: Text('${_names[_punch]} PUNCH!', style: const TextStyle(color: Color(0xFFFDE68A), fontSize: 22, fontWeight: FontWeight.w900))),
            Positioned(bottom: 10, child: Transform.translate(offset: dodgeOffset, child: emojiText('🙂', 90))),
            if (_msg.isNotEmpty) Positioned(top: 200, child: Text(_msg, style: const TextStyle(color: Colors.white, fontSize: 30, fontWeight: FontWeight.w900))),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(10, 0, 10, 14),
          child: _counter > 0
              ? SizedBox(
                  width: double.infinity,
                  height: 70,
                  child: FilledButton(onPressed: _hit, style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)), child: const Text('👊 PUNCH!', style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900))),
                )
              : Row(children: [
                  for (final (label, d) in [('⬅️ Lean right', 0), ('⬇️ Duck', 2), ('Lean left ➡️', 1)])
                    Expanded(
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 4),
                        child: SizedBox(
                          height: 70,
                          child: FilledButton(
                            onPressed: () => _dodge(d),
                            style: FilledButton.styleFrom(backgroundColor: _dodged == d ? const Color(0xFF16A34A) : Colors.white.withValues(alpha: 0.15)),
                            child: Text(label, textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 12)),
                          ),
                        ),
                      ),
                    ),
                ]),
        ),
      ]),
    ]);
  }
}

// ── 57 Tug of War ──────────────────────────────────────────────────────────
class TugOfWarGame extends StatefulWidget {
  const TugOfWarGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<TugOfWarGame> createState() => _TugOfWarState();
}

class _TugOfWarState extends State<TugOfWarGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  double _rope = 0; // -1 they win, +1 you win
  double _marker = 0, _dir = 1;
  bool _over = false;
  String _msg = '';

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(5, 10);
    startLoop((dt) {
      _marker += _dir * lvD(widget.level, 0.9, 2.0) * dt;
      if (_marker > 1) _dir = -1;
      if (_marker < 0) _dir = 1;
      _rope -= lvD(widget.level, 0.05, 0.13) * dt;
      _report();
      setState(() {});
    });
  }

  double get _zone => lvD(widget.level, 0.3, 0.12);

  void _report() {
    if (_over) return;
    widget.args.onProgress(((_rope + 1) * 5).round().clamp(0, 10), 10);
    if (_rope >= 1) {
      _over = true;
      stopLoop();
      widget.args.onComplete();
    } else if (_rope <= -1) {
      _over = true;
      stopLoop();
      widget.args.onKnockout('They pulled you over the line');
    }
  }

  void _pull() {
    if (_over) return;
    if ((_marker - 0.5).abs() < _zone / 2) {
      _rope += 0.12;
      _msg = 'HEAVE!';
      HapticFeedback.mediumImpact();
    } else {
      _rope -= 0.05;
      _msg = 'slipped';
    }
    _report();
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => _pull(),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFF65A30D), Color(0xFF365314)]),
          const Align(alignment: Alignment.topCenter, child: ArcadeBanner(child: Text('Tap when the marker is in the green'))),
          LayoutBuilder(builder: (context, c) {
            final w = c.maxWidth;
            final cx = w / 2 + _rope * w * 0.3;
            return Stack(children: [
              Positioned(left: w / 2 - 2, top: c.maxHeight * 0.3, height: c.maxHeight * 0.3, child: Container(width: 4, color: Colors.white)),
              Positioned(left: 0, right: 0, top: c.maxHeight * 0.45, child: Container(height: 8, color: const Color(0xFFD6A35C))),
              Positioned(left: cx - 8, top: c.maxHeight * 0.42, child: Container(width: 16, height: 26, color: const Color(0xFFDC2626))),
              Positioned(left: cx - w * 0.45, top: c.maxHeight * 0.38, child: Transform.flip(flipX: true, child: emojiText('🏋️', 50))),
              Positioned(left: cx + w * 0.3, top: c.maxHeight * 0.38, child: emojiText('🏋️', 50)),
              Positioned(left: 20, top: c.maxHeight * 0.3, child: const Text('THEM', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w900))),
              Positioned(right: 20, top: c.maxHeight * 0.3, child: const Text('YOU', style: TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w900))),
              if (_msg.isNotEmpty) Positioned(left: 0, right: 0, top: c.maxHeight * 0.62, child: Text(_msg, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 26, fontWeight: FontWeight.w900))),
              Positioned(
                left: w * 0.1,
                right: w * 0.1,
                bottom: 30,
                child: SizedBox(
                  height: 44,
                  child: Stack(children: [
                    Container(decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(22))),
                    Positioned(left: (0.5 - _zone / 2) * w * 0.8, width: _zone * w * 0.8, top: 4, bottom: 4, child: Container(decoration: BoxDecoration(color: const Color(0xFF22C55E), borderRadius: BorderRadius.circular(16)))),
                    Positioned(left: (_marker * w * 0.8 - 4).clamp(0.0, w * 0.8 - 8), top: -4, bottom: -4, child: Container(width: 8, color: Colors.white)),
                  ]),
                ),
              ),
            ]);
          }),
        ]),
      );
}

// ── 58 Drag Race ───────────────────────────────────────────────────────────
class DragRaceGame extends StatefulWidget {
  const DragRaceGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DragRaceGame> createState() => _DragRaceState();
}

class _DragRaceState extends State<DragRaceGame> with SingleTickerProviderStateMixin, ArcadeLoop {
  late final int _gears = lvI(widget.level, 4, 6);
  int _gear = 1;
  double _rpm = 0, _speed = 0, _dist = 0, _them = 0, _t = 0;
  bool _over = false, _started = false;
  String _msg = 'Tap GO, then SHIFT in the green';
  static const _track = 400.0;

  late final double _theirTime = lvD(widget.level, 15, 9.6);

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, 10);
    startLoop((dt) {
      if (!_started || _over) return;
      _t += dt;
      _rpm = math.min(1.08, _rpm + dt * (1.1 - _gear * 0.12));
      final eff = _rpm > 1 ? 0.4 : 1.0; // over-revving loses power
      _speed += (_gear * 6.0 * _rpm * eff - _speed * 0.25) * dt;
      _dist += _speed * dt;
      _them = _track * (_t / _theirTime).clamp(0, 1);
      widget.args.onProgress(((_dist / _track) * 10).clamp(0, 10).floor(), 10);
      if (_dist >= _track || _them >= _track) {
        _over = true;
        stopLoop();
        if (_dist >= _track && _t <= _theirTime) {
          widget.args.onComplete();
        } else {
          widget.args.onKnockout('The other car won');
        }
      }
      setState(() {});
    });
  }

  double get _greenLo => lvD(widget.level, 0.72, 0.84);
  double get _greenHi => lvD(widget.level, 0.97, 0.94);

  void _shift() {
    if (_over) return;
    if (!_started) {
      setState(() {
        _started = true;
        _msg = '';
      });
      return;
    }
    if (_gear >= _gears) return;
    final good = _rpm >= _greenLo && _rpm <= _greenHi;
    setState(() {
      _msg = good ? 'PERFECT SHIFT' : (_rpm < _greenLo ? 'Too early' : 'Too late');
      if (good) _speed += 4;
      _gear++;
      _rpm = good ? 0.45 : 0.25;
    });
    HapticFeedback.mediumImpact();
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => _shift(),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFF111827), Color(0xFF030712)]),
          LayoutBuilder(builder: (context, c) {
            final w = c.maxWidth;
            return Stack(children: [
              for (final (y, d, e) in [(0.3, _them, '🚙'), (0.48, _dist, '🏎️')])
                Positioned(left: 20 + (d / _track).clamp(0, 1) * (w - 90), top: c.maxHeight * y, child: Transform.flip(flipX: true, child: emojiText(e, 48))),
              Positioned(right: 18, top: c.maxHeight * 0.26, bottom: c.maxHeight * 0.4, child: Container(width: 6, color: Colors.white)),
              Positioned(
                left: 0,
                right: 0,
                bottom: 30,
                child: Column(children: [
                  SizedBox(width: 220, height: 120, child: CustomPaint(painter: _TachPainter(_rpm, _greenLo, _greenHi))),
                  Text(_started ? 'GEAR $_gear / $_gears' : 'TAP TO GO', style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
                  Text(_msg, style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w800)),
                ]),
              ),
              Align(alignment: Alignment.topCenter, child: ArcadeBanner(child: Text('Beat ${_theirTime.toStringAsFixed(1)} s · ${_t.toStringAsFixed(1)} s'))),
            ]);
          }),
        ]),
      );
}

class _TachPainter extends CustomPainter {
  _TachPainter(this.rpm, this.lo, this.hi);
  final double rpm, lo, hi;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width / 2, s.height);
    final r = s.height - 6;
    final rect = Rect.fromCircle(center: c, radius: r);
    canvas.drawArc(rect, math.pi, math.pi, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 14
      ..color = Colors.white12);
    canvas.drawArc(rect, math.pi + lo * math.pi, (hi - lo) * math.pi, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 14
      ..color = const Color(0xFF22C55E));
    canvas.drawArc(rect, math.pi + 0.98 * math.pi, 0.02 * math.pi + 0.1, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 14
      ..color = const Color(0xFFDC2626));
    final a = math.pi + rpm.clamp(0, 1.05) * math.pi;
    canvas.drawLine(c, c + Offset(math.cos(a), math.sin(a)) * (r - 4), Paint()
      ..color = const Color(0xFFF97316)
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round);
  }

  @override
  bool shouldRepaint(covariant _TachPainter old) => old.rpm != rpm;
}

// ── 59 Parking Pro ─────────────────────────────────────────────────────────
class ParkingGame extends StatefulWidget {
  const ParkingGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<ParkingGame> createState() => _ParkingState();
}

class _ParkingState extends State<ParkingGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 1;
  Offset _p = const Offset(0.5, 0.85);
  double _heading = -math.pi / 2, _speed = 0, _inv = 0, _hold = 0;
  int _steer = 0, _gas = 0;
  late final Offset _spot;
  late final double _spotAngle;
  late final List<Offset> _cones;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _spot = Offset(0.2 + r.nextDouble() * 0.6, 0.18 + r.nextDouble() * 0.12);
    _spotAngle = widget.level > 12 && r.nextBool() ? 0 : -math.pi / 2;
    _cones = [];
    for (var i = 0; i < lvI(widget.level, 2, 10); i++) {
      final c = Offset(0.08 + r.nextDouble() * 0.84, 0.3 + r.nextDouble() * 0.45);
      if ((c - _spot).distance > 0.15 && (c - _p).distance > 0.15) _cones.add(c);
    }
    hearts = 3;
    startScore();
    startLoop((dt) {
      _speed += (_gas * 0.35 - _speed * 1.2) * dt;
      _heading += _steer * _speed * 5 * dt;
      _p += Offset(math.cos(_heading), math.sin(_heading)) * _speed * dt;
      _p = Offset(_p.dx.clamp(0.04, 0.96), _p.dy.clamp(0.06, 0.96));
      if (_inv > 0) _inv -= dt;
      for (final c in _cones) {
        if (_inv <= 0 && (c - _p).distance < 0.055) {
          _inv = 1;
          _speed = -_speed * 0.5;
          if (loseHeart('Hit a cone')) return;
        }
      }
      final tol = lvD(widget.level, 0.05, 0.025);
      var angDiff = ((_heading - _spotAngle) % math.pi).abs();
      angDiff = math.min(angDiff, math.pi - angDiff);
      if ((_p - _spot).distance < tol && angDiff < lvD(widget.level, 0.5, 0.2) && _speed.abs() < 0.05) {
        _hold += dt;
        if (_hold > 0.6) {
          addPoint();
          return;
        }
      } else {
        _hold = 0;
      }
      setState(() {});
    });
  }

  Widget _pedal(String label, VoidCallback down, VoidCallback up, Color color) => Expanded(
        child: Listener(
          onPointerDown: (_) => down(),
          onPointerUp: (_) => up(),
          onPointerCancel: (_) => up(),
          child: Container(
            height: 58,
            margin: const EdgeInsets.all(4),
            alignment: Alignment.center,
            decoration: BoxDecoration(color: color.withValues(alpha: 0.3), borderRadius: BorderRadius.circular(14), border: Border.all(color: color)),
            child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => Column(children: [
        Expanded(
          child: LayoutBuilder(builder: (context, c) {
            final w = c.maxWidth, h = c.maxHeight;
            return Stack(children: [
              arcadeBackdrop(const [Color(0xFF4B5563), Color(0xFF374151)]),
              Positioned(
                left: _spot.dx * w - (_spotAngle == 0 ? 40 : 26),
                top: _spot.dy * h - (_spotAngle == 0 ? 26 : 40),
                child: Container(
                  width: _spotAngle == 0 ? 80 : 52,
                  height: _spotAngle == 0 ? 52 : 80,
                  decoration: BoxDecoration(border: Border.all(color: _hold > 0 ? const Color(0xFF4ADE80) : Colors.white, width: 3)),
                  alignment: Alignment.center,
                  child: const Text('P', style: TextStyle(color: Colors.white54, fontSize: 26, fontWeight: FontWeight.w900)),
                ),
              ),
              for (final cn in _cones) Positioned(left: cn.dx * w - 12, top: cn.dy * h - 14, child: emojiText('🚧', 24)),
              Positioned(
                left: _p.dx * w - 24,
                top: _p.dy * h - 24,
                child: Transform.rotate(angle: _heading + math.pi, child: Opacity(opacity: _inv > 0 ? 0.5 : 1, child: emojiText('🚗', 48))),
              ),
              arcadeTopBar('Park in the P box and stop', hearts: hearts),
            ]);
          }),
        ),
        Row(children: [
          _pedal('⟲', () => _steer = -1, () => _steer = 0, const Color(0xFF60A5FA)),
          _pedal('⟳', () => _steer = 1, () => _steer = 0, const Color(0xFF60A5FA)),
          _pedal('R', () => _gas = -1, () => _gas = 0, const Color(0xFFF87171)),
          _pedal('GAS', () => _gas = 1, () => _gas = 0, const Color(0xFF4ADE80)),
        ]),
        const SizedBox(height: 8),
      ]);
}

// ── 60 Marble Run ──────────────────────────────────────────────────────────
class MarbleRunGame extends StatefulWidget {
  const MarbleRunGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<MarbleRunGame> createState() => _MarbleRunState();
}

class _MarbleRunState extends State<MarbleRunGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 6);
  late final int _rows = lvI(widget.level, 2, 5);
  late final int _cups = _rows + 1;
  late List<bool> _gates; // per gate: true = sends right
  late int _targetCup;
  List<Offset>? _path;
  double _t = 0;
  Timer? _anim;
  int _drops = 0;
  late final int _maxDrops = goal + lvI(widget.level, 4, 1);
  static const _cupColors = [Color(0xFFEF4444), Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFFACC15), Color(0xFFA855F7), Color(0xFFF97316)];

  @override
  void initState() {
    super.initState();
    _gates = List.generate(_rows * (_rows + 1) ~/ 2, (_) => args.rng.nextBool());
    _targetCup = args.rng.nextInt(_cups);
    startScore();
  }

  @override
  void dispose() {
    _anim?.cancel();
    super.dispose();
  }

  // Gate k in row r (0..r) sits at index r*(r+1)/2 + k.
  int _gate(int r, int k) => r * (r + 1) ~/ 2 + k;

  void _drop() {
    if (ended || _path != null) return;
    var k = 0;
    final pts = <Offset>[const Offset(0.5, 0.05)];
    for (var r = 0; r < _rows; r++) {
      pts.add(Offset(0.5 + (k - r / 2) / (_rows + 1), 0.15 + r * 0.6 / _rows));
      final right = _gates[_gate(r, k)];
      // The gate flips each time a marble passes (like a real marble machine).
      _gates[_gate(r, k)] = !right;
      if (right) k++;
    }
    pts.add(Offset(0.5 + (k - _rows / 2) / (_rows + 1), 0.85));
    _path = pts;
    _t = 0;
    _drops++;
    _anim = Timer.periodic(const Duration(milliseconds: 16), (tm) {
      if (!mounted) return tm.cancel();
      setState(() => _t += 0.04);
      if (_t >= pts.length - 1) {
        tm.cancel();
        _path = null;
        if (k == _targetCup) {
          if (addPoint()) return;
          _targetCup = args.rng.nextInt(_cups);
        } else if (_drops >= _maxDrops) {
          knockout('Out of marbles');
          return;
        }
        if (score + (_maxDrops - _drops) < goal) knockout('Not enough marbles left');
        setState(() {});
      }
    });
    setState(() {});
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        Offset marble() {
          final p = _path!;
          final i = _t.floor().clamp(0, p.length - 2);
          return Offset.lerp(p[i], p[i + 1], (_t - i).clamp(0, 1))!;
        }

        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF2E1065), Color(0xFF0F0524)]),
          for (var r = 0; r < _rows; r++)
            for (var k = 0; k <= r; k++)
              Positioned(
                left: (0.5 + (k - r / 2) / (_rows + 1)) * w - 26,
                top: (0.15 + r * 0.6 / _rows) * h - 18,
                child: GestureDetector(
                  onTap: () => setState(() => _gates[_gate(r, k)] = !_gates[_gate(r, k)]),
                  child: Container(
                    width: 52,
                    height: 36,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFFC4B5FD))),
                    child: Icon(_gates[_gate(r, k)] ? Icons.south_east_rounded : Icons.south_west_rounded, color: Colors.white, size: 26),
                  ),
                ),
              ),
          for (var cup = 0; cup < _cups; cup++)
            Positioned(
              left: (0.5 + (cup - _rows / 2) / (_rows + 1)) * w - 28,
              top: 0.85 * h - 10,
              child: Container(
                width: 56,
                height: 40,
                decoration: BoxDecoration(
                  color: cup == _targetCup ? _cupColors[cup % _cupColors.length] : Colors.white10,
                  borderRadius: const BorderRadius.vertical(bottom: Radius.circular(18)),
                  border: Border.all(color: cup == _targetCup ? Colors.white : Colors.white24, width: cup == _targetCup ? 3 : 1),
                ),
                alignment: Alignment.center,
                child: cup == _targetCup ? const Text('🎯', style: TextStyle(fontSize: 18)) : null,
              ),
            ),
          if (_path != null)
            Builder(builder: (_) {
              final m = marble();
              return Positioned(left: m.dx * w - 12, top: m.dy * h - 12, child: Container(width: 24, height: 24, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Colors.white, Color(0xFF8B5CF6)]))));
            }),
          Positioned(
            left: w / 2 - 70,
            top: 6,
            child: FilledButton(onPressed: _drop, style: FilledButton.styleFrom(backgroundColor: const Color(0xFF8B5CF6)), child: const Text('DROP MARBLE')),
          ),
          arcadeTopBar('Gates flip after each marble · into 🎯 $score/$goal · marbles ${_maxDrops - _drops}', bottom: true),
        ]);
      });
}
