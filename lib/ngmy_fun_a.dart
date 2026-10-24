import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_studio_kit.dart';

void _label(Canvas canvas, String s, Offset at, {Color color = Colors.white, double size = 13, FontWeight weight = FontWeight.w900}) {
  final tp = TextPainter(text: TextSpan(text: s, style: TextStyle(color: color, fontSize: size, fontWeight: weight)), textDirection: TextDirection.ltr)..layout();
  tp.paint(canvas, at - Offset(tp.width / 2, tp.height / 2));
}

Widget _overlay(String title, String sub, Color c, List<Widget> actions) => Center(
      child: Container(
        margin: const EdgeInsets.all(24),
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
// LASER MAZE: place mirrors to bend the laser onto every target.
// ═════════════════════════════════════════════════════════════════════════════

const int kLaserN = 7;

class LaserLevel {
  LaserLevel(this.walls, this.targets, this.fixed, this.laser, this.laserDir, this.mirrors, [this.solution = const {}]);
  final Map<int, String> solution; // one way to win, kept for tests
  final Set<int> walls;
  final Set<int> targets;
  final Map<int, String> fixed; // cell -> '/' or '\'
  final int laser; // cell of the laser
  final (int, int) laserDir;
  final int mirrors; // how many you may place
}

int _cell(int x, int y) => y * kLaserN + x;

/// Level [n] (0 based) built by walking a laser path with turns, so it is always solvable.
LaserLevel makeLaserLevel(int n) {
  final r = math.Random(n * 977 + 13);
  final turns = (1 + n ~/ 5).clamp(1, 5);
  for (var attempt = 0; attempt < 200; attempt++) {
    var x = 0, y = 1 + r.nextInt(kLaserN - 2);
    final laser = _cell(x, y);
    var dir = (1, 0);
    final path = <int>[];
    final mirrorCells = <int>[];
    final sol = <int, String>{};
    var ok = true;
    var turnsLeft = turns;
    var segs = 0;
    while (ok && segs < 12) {
      segs++;
      final len = 2 + r.nextInt(4);
      var steps = 0;
      while (steps < len) {
        final nx = x + dir.$1, ny = y + dir.$2;
        if (nx < 0 || ny < 0 || nx >= kLaserN || ny >= kLaserN) {
          steps = 99;
          break;
        }
        if (path.contains(_cell(nx, ny)) || _cell(nx, ny) == laser) {
          ok = false;
          break;
        }
        x = nx;
        y = ny;
        path.add(_cell(x, y));
        steps++;
      }
      if (!ok || steps >= 99 || turnsLeft == 0) break;
      // Put a mirror here to turn the beam.
      final left = r.nextBool();
      final nd = left ? (dir.$2, -dir.$1) : (-dir.$2, dir.$1);
      // A '/' mirror maps (dx,dy) to (-dy,-dx), a '\' mirror maps it to (dy,dx).
      final slash = (-dir.$2, -dir.$1) == nd;
      final probeX = x + nd.$1, probeY = y + nd.$2;
      if (probeX < 0 || probeY < 0 || probeX >= kLaserN || probeY >= kLaserN) continue;
      mirrorCells.add(_cell(x, y));
      dir = nd;
      turnsLeft--;
      sol[mirrorCells.last] = slash ? '/' : r'\';
    }
    if (!ok || mirrorCells.length < turns || path.length < 5) continue;
    final free = [for (final c in path) if (!mirrorCells.contains(c)) c];
    if (free.length < 3) continue;
    final targetCount = (2 + n ~/ 8).clamp(2, 4);
    final targets = <int>{free.last};
    free.shuffle(r);
    for (final c in free) {
      if (targets.length >= targetCount) break;
      targets.add(c);
    }
    final walls = <int>{};
    final wallCount = 3 + n ~/ 3;
    var guard = 0;
    while (walls.length < wallCount && guard++ < 200) {
      final c = r.nextInt(kLaserN * kLaserN);
      if (path.contains(c) || c == laser || targets.contains(c) || mirrorCells.contains(c)) continue;
      // Never wall in the cell right in front of the laser.
      if (c == laser + 1) continue;
      walls.add(c);
    }
    return LaserLevel(walls, targets, {}, laser, (1, 0), turns + (n >= 10 ? 1 : 0), sol);
  }
  return LaserLevel({}, {_cell(4, 3)}, {}, _cell(0, 3), (1, 0), 1);
}

/// Follows the beam. Returns the cells it crosses (in order) and which targets it hits.
({List<int> cells, Set<int> hit}) traceLaser(LaserLevel lv, Map<int, String> placed) {
  final cells = <int>[];
  final hit = <int>{};
  var x = lv.laser % kLaserN, y = lv.laser ~/ kLaserN;
  var d = lv.laserDir;
  cells.add(lv.laser);
  for (var i = 0; i < 200; i++) {
    x += d.$1;
    y += d.$2;
    if (x < 0 || y < 0 || x >= kLaserN || y >= kLaserN) break;
    final c = _cell(x, y);
    if (lv.walls.contains(c)) break;
    cells.add(c);
    if (lv.targets.contains(c)) hit.add(c);
    final m = placed[c] ?? lv.fixed[c];
    if (m == '/') d = (-d.$2, -d.$1);
    if (m == r'\') d = (d.$2, d.$1);
  }
  return (cells: cells, hit: hit);
}

class NgmyLaserMazeStudio extends StatefulWidget {
  const NgmyLaserMazeStudio({super.key});

  @override
  State<NgmyLaserMazeStudio> createState() => _NgmyLaserMazeStudioState();
}

class _NgmyLaserMazeStudioState extends State<NgmyLaserMazeStudio> with SingleTickerProviderStateMixin, StudioFrames {
  int _level = 0;
  int _best = 0; // levels finished
  late LaserLevel _lv = makeLaserLevel(0);
  final Map<int, String> _placed = {};
  double _t = 0;
  bool _won = false;
  Size _size = Size.zero;
  final List<(Offset, double)> _pops = [];

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('laser_maze').then((m) {
      if (!mounted) return;
      setState(() {
        _best = (m['best'] as num?)?.toInt() ?? 0;
        _level = (m['level'] as num?)?.toInt() ?? 0;
        _lv = makeLaserLevel(_level);
      });
    });
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    for (var i = _pops.length - 1; i >= 0; i--) {
      _pops[i] = (_pops[i].$1, _pops[i].$2 + dt);
      if (_pops[i].$2 > 0.8) _pops.removeAt(i);
    }
    setState(() {});
  }

  void _go(int n) {
    setState(() {
      _level = n.clamp(0, 59);
      _lv = makeLaserLevel(_level);
      _placed.clear();
      _won = false;
    });
    NgmyProgress.save('laser_maze', {'best': _best, 'level': _level});
  }

  void _tap(Offset p) {
    if (_won) return;
    final cell = _size.shortestSide / kLaserN;
    final ox = (_size.width - cell * kLaserN) / 2, oy = ((_size.height - cell * kLaserN) / 2).clamp(8.0, 300.0);
    final cx = ((p.dx - ox) / cell).floor(), cy = ((p.dy - oy) / cell).floor();
    if (cx < 0 || cy < 0 || cx >= kLaserN || cy >= kLaserN) return;
    final c = _cell(cx, cy);
    if (_lv.walls.contains(c) || c == _lv.laser || _lv.fixed.containsKey(c)) return;
    setState(() {
      final cur = _placed[c];
      if (cur == null) {
        if (_placed.length >= _lv.mirrors) {
          HapticFeedback.lightImpact();
          return;
        }
        _placed[c] = '/';
      } else if (cur == '/') {
        _placed[c] = r'\';
      } else {
        _placed.remove(c);
      }
      NgmyTone.sfx('click', cx + cy, ms: 60, volume: 0.4);
      final res = traceLaser(_lv, _placed);
      if (res.hit.length == _lv.targets.length) {
        _won = true;
        if (_level + 1 > _best) _best = _level + 1;
        NgmyProgress.save('laser_maze', {'best': _best, 'level': math.min(_level + 1, 59)});
        NgmyTone.chord('bell', const [0, 4, 7, 12], ms: 700, volume: 0.45);
        for (final t in _lv.targets) {
          _pops.add((Offset(((t % kLaserN) + 0.5) * cell + ox, ((t ~/ kLaserN) + 0.5) * cell + oy), 0));
        }
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final res = traceLaser(_lv, _placed);
    return StudioPage(
      title: 'LASER MAZE',
      accent: const Color(0xFFEF4444),
      help: 'Light travels in straight lines, and a mirror bends it. Tap a square to place a mirror: tap again to turn it the other way, and once more to remove it. Bend the laser so it lights up every target (the stars).\n\nWalls block the beam. You only have a few mirrors each level, so think about where the beam needs to turn. A mirror sends the light out at the same angle it came in.\n\nThere are 60 levels, and your progress is saved.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: (d) => _tap(d.localPosition),
            child: CustomPaint(size: _size, painter: _LaserPainter(_lv, _placed, res.cells, res.hit, _t, _pops)),
          ),
          Positioned(left: 14, right: 14, top: 4, child: IgnorePointer(child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text('LEVEL ${_level + 1}', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, letterSpacing: 1.2)), Text('${res.hit.length}/${_lv.targets.length} ★   mirrors ${_placed.length}/${_lv.mirrors}', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900))]))),
          if (_won) _overlay('Beam delivered! ★', 'Level ${_level + 1} done.', const Color(0xFF4ADE80), [StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next level', color: const Color(0xFF4ADE80), onTap: () => _go(_level + 1))]),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioRow(children: [
          StudioChip(label: 'Clear mirrors', icon: Icons.refresh_rounded, selected: false, color: const Color(0xFFFBBF24), onTap: () => setState(_placed.clear)),
          StudioChip(label: 'Skip', icon: Icons.skip_next_rounded, selected: false, color: const Color(0xFF38BDF8), onTap: () => _go(_level + 1)),
          if (_level > 0) StudioChip(label: 'Back', icon: Icons.skip_previous_rounded, selected: false, color: const Color(0xFF38BDF8), onTap: () => _go(_level - 1)),
        ]),
        StudioRow(label: 'LEVEL', children: [for (var i = 0; i <= math.min(_best, 59); i++) StudioChip(label: '${i + 1}', selected: i == _level, color: const Color(0xFFEF4444), onTap: () => _go(i))]),
      ]),
    );
  }
}

class _LaserPainter extends CustomPainter {
  _LaserPainter(this.lv, this.placed, this.cells, this.hit, this.t, this.pops);
  final LaserLevel lv;
  final Map<int, String> placed;
  final List<int> cells;
  final Set<int> hit;
  final double t;
  final List<(Offset, double)> pops;

  @override
  void paint(Canvas canvas, Size size) {
    final cell = size.shortestSide / kLaserN;
    final ox = (size.width - cell * kLaserN) / 2, oy = ((size.height - cell * kLaserN) / 2).clamp(8.0, 300.0);
    Offset centre(int c) => Offset(ox + ((c % kLaserN) + 0.5) * cell, oy + ((c ~/ kLaserN) + 0.5) * cell);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(ox, oy, cell * kLaserN, cell * kLaserN), const Radius.circular(14)), Paint()..color = const Color(0xFF0B0F17));
    for (var i = 0; i <= kLaserN; i++) {
      canvas.drawLine(Offset(ox + i * cell, oy), Offset(ox + i * cell, oy + cell * kLaserN), Paint()..color = Colors.white10);
      canvas.drawLine(Offset(ox, oy + i * cell), Offset(ox + cell * kLaserN, oy + i * cell), Paint()..color = Colors.white10);
    }
    for (final w in lv.walls) {
      final c = centre(w);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: c, width: cell * 0.88, height: cell * 0.88), const Radius.circular(8)), Paint()..shader = const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF64748B), Color(0xFF334155)]).createShader(Rect.fromCenter(center: c, width: cell, height: cell)));
    }
    // The beam, with a glow.
    if (cells.length > 1) {
      final path = Path()..moveTo(centre(cells.first).dx, centre(cells.first).dy);
      for (final c in cells.skip(1)) {
        path.lineTo(centre(c).dx, centre(c).dy);
      }
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 14..strokeJoin = StrokeJoin.round..color = const Color(0xFFEF4444).withValues(alpha: 0.28 + 0.08 * math.sin(t * 12))..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8));
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 4..strokeJoin = StrokeJoin.round..color = const Color(0xFFFF8A8A));
      canvas.drawPath(path, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.6..strokeJoin = StrokeJoin.round..color = Colors.white);
    }
    for (final tg in lv.targets) {
      final c = centre(tg);
      final on = hit.contains(tg);
      if (on) canvas.drawCircle(c, cell * 0.5, Paint()..color = const Color(0xFFFBBF24).withValues(alpha: 0.5)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
      canvas.drawCircle(c, cell * 0.3, Paint()..color = on ? const Color(0xFFFBBF24) : const Color(0xFF475569));
      _label(canvas, '★', c, color: on ? Colors.white : Colors.white54, size: cell * 0.4);
    }
    // Mirrors.
    void mirror(int cellId, String kind, bool mine) {
      final c = centre(cellId);
      final r = cell * 0.4;
      final a = kind == '/' ? Offset(-r, r) : Offset(-r, -r);
      final b = -a;
      canvas.drawLine(c + a, c + b, Paint()..color = mine ? const Color(0xFF7DD3FC) : const Color(0xFFE2E8F0)..strokeWidth = 7..strokeCap = StrokeCap.round);
      canvas.drawLine(c + a, c + b, Paint()..color = Colors.white..strokeWidth = 2.4..strokeCap = StrokeCap.round);
    }

    placed.forEach((k, v) => mirror(k, v, true));
    lv.fixed.forEach((k, v) => mirror(k, v, false));
    // The laser.
    final lc = centre(lv.laser);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: lc, width: cell * 0.8, height: cell * 0.5), const Radius.circular(8)), Paint()..color = const Color(0xFFEF4444));
    canvas.drawCircle(lc + Offset(cell * 0.4, 0), 5, Paint()..color = Colors.white);
    for (final p in pops) {
      final e = p.$2 / 0.8;
      canvas.drawCircle(p.$1, cell * (0.3 + e), Paint()..style = PaintingStyle.stroke..strokeWidth = 4 * (1 - e)..color = const Color(0xFFFBBF24).withValues(alpha: 1 - e));
    }
  }

  @override
  bool shouldRepaint(covariant _LaserPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// LIGHT MIXER: mix red, green and blue light to match the colour, before time runs out.
// ═════════════════════════════════════════════════════════════════════════════

/// 0 (perfect) to 1 (opposite) distance between two colours given as 0..1 channels.
double colourGap(List<double> a, List<double> b) {
  final d = math.sqrt(math.pow(a[0] - b[0], 2) + math.pow(a[1] - b[1], 2) + math.pow(a[2] - b[2], 2));
  return d / math.sqrt(3);
}

class NgmyLightMixerStudio extends StatefulWidget {
  const NgmyLightMixerStudio({super.key});

  @override
  State<NgmyLightMixerStudio> createState() => _NgmyLightMixerStudioState();
}

class _NgmyLightMixerStudioState extends State<NgmyLightMixerStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final math.Random _rnd = math.Random();
  List<double> _target = [1, 0.5, 0];
  final List<double> _mix = [0, 0, 0];
  int _round = 0;
  int _score = 0;
  int _best = 0;
  double _time = 20;
  String _state = 'ready'; // ready, play, result, done
  String _msg = '';
  static const _names = ['Orange', 'Purple', 'Teal', 'Pink', 'Lime', 'Sky', 'Gold', 'Brown', 'Mint', 'Coral', 'Violet', 'Olive'];

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('light_mixer').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  @override
  void onFrame(double dt) {
    if (_state == 'play') {
      _time -= dt;
      if (_time <= 0) _submit();
    }
    setState(() {});
  }

  void _next() {
    _target = [for (var i = 0; i < 3; i++) (_rnd.nextInt(5) / 4.0)];
    if (_target.every((v) => v == 0)) _target[_rnd.nextInt(3)] = 1;
    for (var i = 0; i < 3; i++) {
      _mix[i] = 0;
    }
    _time = 20;
    _state = 'play';
  }

  void _submit() {
    if (_state != 'play') return;
    final gap = colourGap(_target, _mix);
    final pts = ((1 - gap * 2).clamp(0.0, 1.0) * 100).round();
    _score += pts;
    _msg = pts >= 90 ? 'Perfect match! +$pts' : (pts >= 60 ? 'Close! +$pts' : 'Not quite. +$pts');
    NgmyTone.sfx(pts >= 60 ? 'zap' : 'click', pts ~/ 10, ms: 200, volume: 0.45);
    _round++;
    if (_round >= 8) {
      _state = 'done';
      if (_score > _best) {
        _best = _score;
        NgmyProgress.save('light_mixer', {'best': _best});
      }
    } else {
      _state = 'result';
    }
  }

  String get _targetName {
    final r = _target[0], g = _target[1], b = _target[2];
    if (r == g && g == b) return r == 1 ? 'White' : (r == 0 ? 'Black' : 'Grey');
    final names = {'100': 'Red', '010': 'Green', '001': 'Blue', '110': 'Yellow', '011': 'Cyan', '101': 'Magenta'};
    final k = '${r > 0.5 ? 1 : 0}${g > 0.5 ? 1 : 0}${b > 0.5 ? 1 : 0}';
    return names[k] ?? _names[(r * 3 + g * 5 + b * 7).round() % _names.length];
  }

  @override
  Widget build(BuildContext context) {
    final gap = colourGap(_target, _mix);
    return StudioPage(
      title: 'LIGHT MIXER',
      accent: const Color(0xFF22D3EE),
      help: 'Every colour on your screen is made from just three lights: red, green and blue. Mix them and you get all the other colours: red + green = yellow, green + blue = cyan, red + blue = magenta, and all three = white.\n\nMatch the colour on the left by sliding the red, green and blue lights. You have 20 seconds, and 8 rounds. The closer your colour, the more points you get.',
      stage: LayoutBuilder(builder: (context, box) {
        final c = Color.from(alpha: 1, red: _mix[0], green: _mix[1], blue: _mix[2]);
        final tc = Color.from(alpha: 1, red: _target[0], green: _target[1], blue: _target[2]);
        return Stack(children: [
          Column(children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(14, 8, 14, 6),
              child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                Text('ROUND ${math.min(_round + 1, 8)}/8', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900)),
                Text('${_state == 'play' ? _time.ceil() : 20} s', style: TextStyle(color: _time < 6 ? const Color(0xFFF87171) : Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                Text('SCORE $_score', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
              ]),
            ),
            Expanded(
              child: Row(children: [
                Expanded(child: Padding(padding: const EdgeInsets.all(10), child: Column(children: [
                  Expanded(child: Container(decoration: BoxDecoration(color: _state == 'ready' ? Colors.white10 : tc, borderRadius: BorderRadius.circular(22), border: Border.all(color: Colors.white24, width: 2)))),
                  const SizedBox(height: 6),
                  Text(_state == 'ready' ? 'TARGET' : 'TARGET: $_targetName', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11)),
                ]))),
                Expanded(child: Padding(padding: const EdgeInsets.all(10), child: Column(children: [
                  Expanded(child: CustomPaint(size: Size.infinite, painter: _LightsPainter(_mix, c))),
                  const SizedBox(height: 6),
                  Text('YOURS · ${((1 - gap * 2).clamp(0.0, 1.0) * 100).round()}% match', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11)),
                ]))),
              ]),
            ),
          ]),
          if (_state == 'ready') _overlay('Light Mixer', 'Match each colour with red, green and blue light.${_best > 0 ? '\nBest score: $_best' : ''}', const Color(0xFF22D3EE), [StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _round = 0;
                _score = 0;
                _next();
              }))]),
          if (_state == 'result') _overlay(_msg, 'Score so far: $_score', const Color(0xFFFBBF24), [StudioButton(icon: Icons.arrow_forward_rounded, label: 'Next colour', color: const Color(0xFF4ADE80), onTap: () => setState(_next))]),
          if (_state == 'done') _overlay('Finished! $_score', _score >= _best ? 'New best score!' : 'Best: $_best', const Color(0xFF4ADE80), [StudioButton(icon: Icons.replay_rounded, label: 'Play again', color: const Color(0xFF4ADE80), onTap: () => setState(() {
                _round = 0;
                _score = 0;
                _next();
              }))]),
        ]);
      }),
      tools: Column(mainAxisSize: MainAxisSize.min, children: [
        StudioSlider(label: 'Red', value: _mix[0], color: const Color(0xFFEF4444), display: '${(_mix[0] * 100).round()}%', onChanged: (v) => setState(() => _mix[0] = (v * 4).round() / 4)),
        StudioSlider(label: 'Green', value: _mix[1], color: const Color(0xFF22C55E), display: '${(_mix[1] * 100).round()}%', onChanged: (v) => setState(() => _mix[1] = (v * 4).round() / 4)),
        StudioSlider(label: 'Blue', value: _mix[2], color: const Color(0xFF3B82F6), display: '${(_mix[2] * 100).round()}%', onChanged: (v) => setState(() => _mix[2] = (v * 4).round() / 4)),
        Align(alignment: Alignment.centerRight, child: StudioButton(icon: Icons.check_rounded, label: 'Lock it in', color: const Color(0xFF4ADE80), onTap: () => setState(_submit))),
      ]),
    );
  }
}

class _LightsPainter extends CustomPainter {
  _LightsPainter(this.mix, this.result);
  final List<double> mix;
  final Color result;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(22)), Paint()..color = Colors.black);
    canvas.save();
    canvas.clipRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(22)));
    final r = size.shortestSide * 0.3;
    final c = size.center(Offset.zero);
    final spots = [c + Offset(0, -r * 0.55), c + Offset(-r * 0.55, r * 0.45), c + Offset(r * 0.55, r * 0.45)];
    final cols = [const Color(0xFFFF0000), const Color(0xFF00FF00), const Color(0xFF0000FF)];
    canvas.saveLayer(Offset.zero & size, Paint());
    for (var i = 0; i < 3; i++) {
      canvas.drawCircle(spots[i], r, Paint()..blendMode = BlendMode.plus..color = cols[i].withValues(alpha: mix[i]));
    }
    canvas.restore();
    canvas.restore();
    canvas.drawRRect(RRect.fromRectAndRadius(Offset.zero & size, const Radius.circular(22)), Paint()..style = PaintingStyle.stroke..strokeWidth = 2..color = Colors.white24);
  }

  @override
  bool shouldRepaint(covariant _LightsPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// MAGNET CRANE: lift the iron off the conveyor. Plastic, wood and aluminium do not stick.
// ═════════════════════════════════════════════════════════════════════════════

class ScrapKind {
  const ScrapKind(this.name, this.emoji, this.magnetic);
  final String name;
  final String emoji;
  final bool magnetic;
}

const List<ScrapKind> kScrap = [
  ScrapKind('Iron nail', '🔩', true),
  ScrapKind('Steel can', '🥫', true),
  ScrapKind('Nickel coin', '🪙', true),
  ScrapKind('Iron key', '🗝️', true),
  ScrapKind('Plastic duck', '🦆', false),
  ScrapKind('Wooden log', '🪵', false),
  ScrapKind('Aluminium foil', '📎', false),
  ScrapKind('Glass bottle', '🍾', false),
  ScrapKind('Copper wire', '🧵', false),
];

class _Scrap {
  _Scrap(this.kind, this.x);
  final ScrapKind kind;
  double x;
  double y = 0;
  double vy = 0;
  bool held = false;
  bool onBelt = true;
  double flash = 0;
}

class NgmyMagnetCraneStudio extends StatefulWidget {
  const NgmyMagnetCraneStudio({super.key});

  @override
  State<NgmyMagnetCraneStudio> createState() => _NgmyMagnetCraneStudioState();
}

class _NgmyMagnetCraneStudioState extends State<NgmyMagnetCraneStudio> with SingleTickerProviderStateMixin, StudioFrames {
  final math.Random _rnd = math.Random();
  final List<_Scrap> _items = [];
  Size _size = const Size(300, 500);
  Offset _m = const Offset(150, 120);
  bool _on = false;
  double _time = 45;
  int _score = 0;
  int _missed = 0;
  int _best = 0;
  String _state = 'ready';
  double _spawn = 0;
  String _tip = '';
  double _tipLife = 0;
  double _t = 0;
  final List<(Offset, String, double)> _floaters = [];

  double get _beltY => _size.height * 0.82;
  Rect get _bin => Rect.fromLTWH(_size.width - 96, _size.height * 0.16, 84, 74);

  @override
  void initState() {
    super.initState();
    startFrames();
    NgmyProgress.load('magnet_crane').then((m) {
      if (mounted) setState(() => _best = (m['best'] as num?)?.toInt() ?? 0);
    });
  }

  void _start() {
    _items.clear();
    _score = 0;
    _missed = 0;
    _time = 45;
    _spawn = 0;
    _state = 'play';
    _m = Offset(_size.width * 0.4, _size.height * 0.3);
  }

  @override
  void onFrame(double dt) {
    _t += dt;
    _tipLife = math.max(0, _tipLife - dt);
    for (var i = _floaters.length - 1; i >= 0; i--) {
      _floaters[i] = (_floaters[i].$1 - Offset(0, 40 * dt), _floaters[i].$2, _floaters[i].$3 - dt);
      if (_floaters[i].$3 <= 0) _floaters.removeAt(i);
    }
    if (_state == 'play') {
      _time -= dt;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = 0.9 + _rnd.nextDouble() * 0.9;
        final it = _Scrap(kScrap[_rnd.nextInt(kScrap.length)], -20);
        it.y = _beltY;
        _items.add(it);
      }
      _stepItems(dt);
      if (_time <= 0) {
        _state = 'done';
        for (final it in _items.where((i) => i.held)) {
          it.held = false;
        }
        if (_score > _best) {
          _best = _score;
          NgmyProgress.save('magnet_crane', {'best': _best});
        }
      }
    }
    setState(() {});
  }

  void _stepItems(double dt) {
    final speed = 52.0 + (45 - _time) * 0.8;
    for (final it in List.of(_items)) {
      it.flash = math.max(0, it.flash - dt);
      if (it.held) {
        // Carried: swings along under the magnet.
        it.x += (_m.dx - it.x) * math.min(1, dt * 14);
        it.y += (_m.dy + 30 - it.y) * math.min(1, dt * 14);
        if (!_on) {
          it.held = false;
          it.onBelt = false;
          if (_bin.inflate(10).contains(Offset(it.x, it.y))) {
            // In the bin!
            _score += 1;
            _floaters.add((Offset(it.x, it.y), '+1 ${it.kind.name}', 1.0));
            NgmyTone.sfx('zap', 8, ms: 160, volume: 0.45);
            _items.remove(it);
            continue;
          }
        }
        continue;
      }
      if (it.onBelt) {
        it.x += speed * dt;
      } else {
        it.vy += 900 * dt;
        it.y += it.vy * dt;
        if (it.y >= _beltY) {
          it.y = _beltY;
          it.vy = 0;
          it.onBelt = true;
        }
      }
      // The magnet reaches for iron, and does nothing to the rest.
      if (_on) {
        final d = Offset(_m.dx - it.x, _m.dy + 28 - it.y);
        final dist = d.distance;
        if (dist < 110) {
          if (it.kind.magnetic) {
            final pull = 30000 / math.max(dist * dist, 400);
            it.onBelt = false;
            it.x += d.dx / math.max(dist, 1) * pull * dt * 14;
            it.y += d.dy / math.max(dist, 1) * pull * dt * 14;
            it.vy = 0;
            if (dist < 26) {
              final carrying = _items.where((o) => o.held).length;
              if (carrying < 3) {
                it.held = true;
                NgmyTone.sfx('click', 3, ms: 60, volume: 0.5);
                _tip = '${it.kind.name}: magnetic ✔';
                _tipLife = 1.4;
              }
            }
          } else if (dist < 60) {
            it.flash = 0.3;
            _tip = '${it.kind.name}: not magnetic ✖';
            _tipLife = 1.4;
          }
        }
      }
      if (it.x > _size.width + 30) {
        if (it.kind.magnetic) {
          _missed++;
          _floaters.add((Offset(_size.width - 60, _beltY - 30), 'missed!', 0.9));
        }
        _items.remove(it);
      }
    }
  }

  void _move(Offset p) {
    _m = Offset(p.dx.clamp(20, _size.width - 20), p.dy.clamp(40, _beltY - 20));
  }

  @override
  Widget build(BuildContext context) {
    return StudioPage(
      title: 'MAGNET LAB',
      accent: const Color(0xFFEF4444),
      help: 'A magnet pulls on iron, steel and nickel, but not on plastic, wood, glass, copper or aluminium.\n\nPress and hold on the screen to turn the electromagnet on, and drag to move it. Iron things jump up and stick to it. Carry them over the bin (top right) and let go. You score 1 for each magnetic thing in the bin, and the belt gets faster. Things that are not magnetic ignore the magnet, so do not waste time on them!\n\nYou have 45 seconds.',
      stage: LayoutBuilder(builder: (context, box) {
        _size = Size(box.maxWidth, box.maxHeight);
        return Stack(fit: StackFit.expand, children: [
          Listener(
            behavior: HitTestBehavior.opaque,
            onPointerDown: (e) {
              _move(e.localPosition);
              _on = _state == 'play';
              if (_on) HapticFeedback.selectionClick();
            },
            onPointerMove: (e) => _move(e.localPosition),
            onPointerUp: (_) => _on = false,
            onPointerCancel: (_) => _on = false,
            child: CustomPaint(size: _size, painter: _CranePainter(this)),
          ),
          Positioned(left: 14, right: 14, top: 4, child: IgnorePointer(child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [Text('${_time.ceil().clamp(0, 99)} s', style: TextStyle(color: _time < 10 ? const Color(0xFFF87171) : Colors.white, fontWeight: FontWeight.w900, fontSize: 20)), Text('SCORE $_score   MISSED $_missed', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900))]))),
          if (_state == 'ready') _overlay('Magnet Lab', 'Hold to switch on the magnet. Lift the iron, leave the rest.${_best > 0 ? '\nBest: $_best' : ''}', const Color(0xFFEF4444), [StudioButton(icon: Icons.play_arrow_rounded, label: 'Start', color: const Color(0xFF4ADE80), onTap: () => setState(_start))]),
          if (_state == 'done') _overlay('Time! Score $_score', _score >= _best ? 'New best!' : 'Best: $_best', const Color(0xFF4ADE80), [StudioButton(icon: Icons.replay_rounded, label: 'Again', color: const Color(0xFF4ADE80), onTap: () => setState(_start))]),
        ]);
      }),
    );
  }
}

class _CranePainter extends CustomPainter {
  _CranePainter(this.s);
  final _NgmyMagnetCraneStudioState s;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(Offset.zero & size, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF111827), Color(0xFF1F2937)]).createShader(Offset.zero & size));
    // The bin.
    final bin = s._bin;
    canvas.drawRRect(RRect.fromRectAndRadius(bin, const Radius.circular(10)), Paint()..color = const Color(0xFF166534).withValues(alpha: 0.6));
    canvas.drawRRect(RRect.fromRectAndRadius(bin, const Radius.circular(10)), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = const Color(0xFF4ADE80));
    _label(canvas, 'IRON BIN', bin.center, color: const Color(0xFF86EFAC), size: 12);
    // The belt.
    final by = s._beltY + 22;
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(0, by, size.width, 22), const Radius.circular(8)), Paint()..color = const Color(0xFF374151));
    for (var x = -(s._t * 52) % 30; x < size.width; x += 30) {
      canvas.drawLine(Offset(x, by + 3), Offset(x + 10, by + 19), Paint()..color = Colors.black26..strokeWidth = 3);
    }
    // Things on the belt.
    for (final it in s._items) {
      final tp = TextPainter(text: TextSpan(text: it.kind.emoji, style: TextStyle(fontSize: 34, shadows: it.flash > 0 ? const [Shadow(color: Colors.red, blurRadius: 12)] : null)), textDirection: TextDirection.ltr)..layout();
      canvas.save();
      canvas.translate(it.x, it.y);
      if (it.held) canvas.rotate(math.sin(s._t * 8) * 0.12);
      tp.paint(canvas, Offset(-tp.width / 2, -tp.height / 2));
      canvas.restore();
    }
    // The crane: a cable and the electromagnet.
    final m = s._m;
    canvas.drawLine(Offset(m.dx, 0), Offset(m.dx, m.dy - 14), Paint()..color = Colors.white54..strokeWidth = 3);
    if (s._on) {
      canvas.drawCircle(m + const Offset(0, 28), 90, Paint()..shader = RadialGradient(colors: [const Color(0xFF60A5FA).withValues(alpha: 0.4), Colors.transparent]).createShader(Rect.fromCircle(center: m + const Offset(0, 28), radius: 90)));
      for (var i = 0; i < 4; i++) {
        final r = 20 + ((s._t * 80 + i * 22) % 90);
        canvas.drawCircle(m + const Offset(0, 28), r, Paint()..style = PaintingStyle.stroke..strokeWidth = 1.4..color = const Color(0xFF93C5FD).withValues(alpha: (1 - r / 110).clamp(0.0, 0.5)));
      }
    }
    final body = RRect.fromRectAndRadius(Rect.fromCenter(center: m, width: 58, height: 28), const Radius.circular(10));
    canvas.drawRRect(body, Paint()..shader = LinearGradient(colors: s._on ? const [Color(0xFF60A5FA), Color(0xFF1D4ED8)] : const [Color(0xFF9CA3AF), Color(0xFF4B5563)]).createShader(body.outerRect));
    canvas.drawRect(Rect.fromLTWH(m.dx - 29, m.dy + 6, 20, 14), Paint()..color = const Color(0xFFEF4444));
    canvas.drawRect(Rect.fromLTWH(m.dx + 9, m.dy + 6, 20, 14), Paint()..color = const Color(0xFFE5E7EB));
    _label(canvas, 'N', Offset(m.dx - 19, m.dy + 13), size: 10);
    _label(canvas, 'S', Offset(m.dx + 19, m.dy + 13), color: Colors.black87, size: 10);
    if (s._tipLife > 0 && s._tip.isNotEmpty) {
      final good = s._tip.contains('✔');
      _label(canvas, s._tip, Offset(size.width / 2, size.height * 0.1), color: good ? const Color(0xFF4ADE80) : const Color(0xFFF87171), size: 15);
    }
    for (final f in s._floaters) {
      _label(canvas, f.$2, f.$1, color: const Color(0xFFFBBF24).withValues(alpha: f.$3.clamp(0.0, 1.0)), size: 14);
    }
  }

  @override
  bool shouldRepaint(covariant _CranePainter old) => true;
}
