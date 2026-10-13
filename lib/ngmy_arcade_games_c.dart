import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';

/// Arcade games 21–30: action and reflex.
Widget? ngmyBuildArcadeGameC(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'color_gate':
      return ColorGateGame(args: a);
    case 'paddle_duel':
      return PaddleDuelGame(args: a);
    case 'beat_tiles':
      return BeatTilesGame(args: a);
    case 'target_range':
      return TargetRangeGame(args: a);
    case 'perfect_stop':
      return PerfectStopGame(args: a);
    case 'hoop_shot':
      return HoopShotGame(args: a);
    case 'penalty_kick':
      return PenaltyKickGame(args: a);
    case 'dino_dash':
      return DinoDashGame(args: a);
    case 'lane_racer':
      return LaneRacerGame(args: a);
    case 'planet_shield':
      return PlanetShieldGame(args: a);
  }
  return null;
}

Widget _glowDot(double size, Color color) => Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: color,
        border: Border.all(color: Colors.white, width: 3),
        boxShadow: [BoxShadow(color: color.withValues(alpha: 0.7), blurRadius: 18, spreadRadius: 2)],
      ),
    );

// 21 ── Color Gate ───────────────────────────────────────────────────────────
class ColorGateGame extends StatefulWidget {
  const ColorGateGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ColorGateGame> createState() => _ColorGateState();
}

class _Gate {
  _Gate(this.y, this.c);
  double y;
  final int c;
  bool done = false;
}

class _ColorGateState extends State<ColorGateGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  static const cols = [Color(0xFFEF4444), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFFFACC15)];
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 20;
  final _gates = <_Gate>[];
  int _ball = 0;
  double _spawn = 0.3;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.85, 1.7 - score * 0.04);
        _gates.add(_Gate(-0.06, args.rng.nextInt(cols.length)));
      }
      final speed = 0.2 + score * 0.008;
      for (final g in _gates) {
        g.y += speed * dt;
        if (!g.done && g.y >= 0.74) {
          g.done = true;
          if (g.c == _ball) {
            if (addPoint()) return;
          } else if (loseHeart('Wrong colour at the gate')) {
            return;
          }
        }
      }
      _gates.removeWhere((g) => g.y > 1.1);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: () => setState(() => _ball = (_ball + 1) % cols.length),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF0F172A), Color(0xFF1E1B4B)]),
            for (final g in _gates)
              Positioned(
                left: 14,
                right: 14,
                top: g.y * h - 10,
                child: Container(
                  height: 20,
                  decoration: BoxDecoration(
                    color: cols[g.c].withValues(alpha: g.done ? 0.3 : 1),
                    borderRadius: BorderRadius.circular(10),
                    boxShadow: [BoxShadow(color: cols[g.c].withValues(alpha: 0.6), blurRadius: 16)],
                  ),
                ),
              ),
            Positioned(left: w / 2 - 24, top: 0.74 * h - 24, child: _glowDot(48, cols[_ball])),
            Positioned(
              left: 0,
              right: 0,
              bottom: 12,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  for (var i = 0; i < cols.length; i++)
                    GestureDetector(
                      onTap: () => setState(() => _ball = i),
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 150),
                        margin: const EdgeInsets.symmetric(horizontal: 7),
                        width: _ball == i ? 58 : 48,
                        height: _ball == i ? 58 : 48,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: cols[i],
                          border: Border.all(color: Colors.white.withValues(alpha: _ball == i ? 1 : 0.3), width: 3),
                        ),
                      ),
                    ),
                ],
              ),
            ),
            arcadeTopBar('Match each gate · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 22 ── Paddle Duel ──────────────────────────────────────────────────────────
class PaddleDuelGame extends StatefulWidget {
  const PaddleDuelGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PaddleDuelGame> createState() => _PaddleDuelState();
}

class _PaddleDuelState extends State<PaddleDuelGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 5;
  static const r = 11.0, pw = 92.0;
  Size _size = Size.zero;
  double bx = 0, by = 0, vx = 0, vy = 0, px = 0, cx = 0;
  bool _served = false;

  void _serve() {
    bx = _size.width / 2;
    by = _size.height / 2;
    vy = 270.0 + score * 25;
    vx = (args.rng.nextDouble() * 2 - 1) * 160;
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final w = _size.width, h = _size.height;
      if (!_served) {
        _served = true;
        px = cx = w / 2;
        _serve();
      }
      bx += vx * dt;
      by += vy * dt;
      if (bx < r) {
        bx = r;
        vx = vx.abs();
      }
      if (bx > w - r) {
        bx = w - r;
        vx = -vx.abs();
      }
      final py = h - 46, cy = 34.0;
      if (vy > 0 && by + r >= py && by + r <= py + 24 && (bx - px).abs() <= pw / 2 + r) {
        vy = -vy.abs() * 1.05;
        vx += (bx - px) * 5;
        HapticFeedback.selectionClick();
      }
      if (vy < 0 && by - r <= cy + 14 && by - r >= cy - 12 && (bx - cx).abs() <= pw / 2 + r) {
        vy = vy.abs() * 1.03;
        vx += (bx - cx) * 4;
      }
      vx = vx.clamp(-520.0, 520.0);
      final cpu = 185.0 + score * 22;
      final target = vy < 0 ? bx : w / 2;
      cx = (cx + (target - cx).clamp(-cpu * dt, cpu * dt)).clamp(pw / 2, w - pw / 2);
      if (by < -20) {
        if (addPoint()) return;
        _serve();
      } else if (by > h + 20) {
        if (loseHeart('The computer scored')) return;
        _serve();
      }
      setState(() {});
    });
  }

  Widget _paddle(Color c) => Container(
        width: pw,
        height: 14,
        decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(7), boxShadow: [BoxShadow(color: c.withValues(alpha: 0.8), blurRadius: 14)]),
      );

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final h = c.maxHeight;
        void move(Offset p) => px = p.dx.clamp(pw / 2, c.maxWidth - pw / 2);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => move(d.localPosition),
          onPanUpdate: (d) => move(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
            Positioned(left: 20, right: 20, top: h / 2 - 1, child: Container(height: 2, color: Colors.white24)),
            Center(child: Container(width: 90, height: 90, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white24, width: 2)))),
            Positioned(left: cx - pw / 2, top: 34, child: _paddle(const Color(0xFFF43F5E))),
            Positioned(left: px - pw / 2, top: h - 46, child: _paddle(const Color(0xFF22D3EE))),
            Positioned(left: bx - r, top: by - r, child: _glowDot(r * 2, Colors.white)),
            arcadeTopBar('You $score · beat the CPU to $goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

// 23 ── Beat Tiles ───────────────────────────────────────────────────────────
class BeatTilesGame extends StatefulWidget {
  const BeatTilesGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<BeatTilesGame> createState() => _BeatTilesState();
}

class _BeatTile {
  _BeatTile(this.lane, this.y);
  final int lane;
  double y;
  bool hit = false;
  double fade = 0;
}

class _BeatTilesState extends State<BeatTilesGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 30;
  static const laneColors = [Color(0xFFE879F9), Color(0xFF22D3EE), Color(0xFFFACC15), Color(0xFF4ADE80)];
  final _tiles = <_BeatTile>[];
  Size _size = Size.zero;
  double _spawn = 0;
  int _lastLane = -1;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final h = _size.height, th = h / 4.6;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.34, 0.66 - score * 0.01);
        var lane = args.rng.nextInt(4);
        if (lane == _lastLane) lane = (lane + 1 + args.rng.nextInt(3)) % 4;
        _lastLane = lane;
        _tiles.add(_BeatTile(lane, -th));
      }
      final speed = h * (0.4 + score * 0.011);
      for (final t in _tiles) {
        t.y += speed * dt;
        if (t.hit) t.fade += dt * 4;
      }
      var missed = 0;
      _tiles.removeWhere((t) {
        if (!t.hit && t.y > h) {
          missed++;
          return true;
        }
        return t.hit && t.fade >= 1;
      });
      for (var i = 0; i < missed; i++) {
        if (loseHeart('Missed a tile')) return;
      }
      setState(() {});
    });
  }

  void _tap(Offset p) {
    if (_size.isEmpty || ended) return;
    final lw = _size.width / 4, th = _size.height / 4.6;
    final lane = (p.dx / lw).floor().clamp(0, 3);
    _BeatTile? best;
    for (final t in _tiles) {
      if (t.hit || t.lane != lane) continue;
      if (p.dy >= t.y - 24 && p.dy <= t.y + th + 24 && (best == null || t.y > best.y)) best = t;
    }
    if (best != null) {
      best.hit = true;
      addPoint();
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final lw = c.maxWidth / 4, th = c.maxHeight / 4.6;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => _tap(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF1E1B4B), Color(0xFF0F0A1F)]),
            for (var i = 1; i < 4; i++) Positioned(left: lw * i, top: 0, bottom: 0, child: Container(width: 1, color: Colors.white12)),
            Positioned(left: 0, right: 0, bottom: 0, height: 70, child: Container(color: Colors.white.withValues(alpha: 0.04))),
            for (final t in _tiles)
              Positioned(
                left: t.lane * lw + 4,
                top: t.y,
                child: Opacity(
                  opacity: t.hit ? (1 - t.fade).clamp(0.0, 1.0) : 1,
                  child: Container(
                    width: lw - 8,
                    height: th,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: t.hit ? [Colors.white, laneColors[t.lane]] : [const Color(0xFF111827), laneColors[t.lane].withValues(alpha: 0.7)],
                      ),
                      border: Border.all(color: laneColors[t.lane], width: 2),
                      boxShadow: [BoxShadow(color: laneColors[t.lane].withValues(alpha: 0.4), blurRadius: 12)],
                    ),
                    child: Center(child: Icon(Icons.music_note_rounded, color: Colors.white.withValues(alpha: 0.8))),
                  ),
                ),
              ),
            arcadeTopBar('Tap every tile · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 24 ── Target Range ─────────────────────────────────────────────────────────
class TargetRangeGame extends StatefulWidget {
  const TargetRangeGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<TargetRangeGame> createState() => _TargetRangeState();
}

class _Target {
  _Target(this.x, this.y);
  final double x, y;
  double age = 0;
  bool gone = false;
}

class _TargetRangeState extends State<TargetRangeGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 20;
  final _targets = <_Target>[];
  final _pops = <({double x, double y, double t})>[];
  double _spawn = 0.2;

  double get _life => math.max(0.95, 1.9 - score * 0.04);

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0 && _targets.length < 3) {
        _spawn = math.max(0.45, 0.8 - score * 0.015);
        _targets.add(_Target(0.12 + args.rng.nextDouble() * 0.76, 0.2 + args.rng.nextDouble() * 0.65));
      }
      for (final t in _targets) {
        t.age += dt;
        if (!t.gone && t.age > _life) {
          t.gone = true;
          if (loseHeart('A target got away')) return;
        }
      }
      _targets.removeWhere((t) => t.gone);
      for (var i = 0; i < _pops.length; i++) {
        final p = _pops[i];
        _pops[i] = (x: p.x, y: p.y, t: p.t + dt);
      }
      _pops.removeWhere((p) => p.t > 0.5);
      setState(() {});
    });
  }

  void _hit(_Target t) {
    if (t.gone || ended) return;
    t.gone = true;
    _pops.add((x: t.x, y: t.y, t: 0));
    addPoint();
  }

  Widget _bullseye(double s) => Container(
        width: s,
        height: s,
        decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFDC2626), boxShadow: [BoxShadow(color: Colors.black45, blurRadius: 10, offset: Offset(0, 4))]),
        alignment: Alignment.center,
        child: Container(
          width: s * 0.7,
          height: s * 0.7,
          decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white),
          alignment: Alignment.center,
          child: Container(
            width: s * 0.42,
            height: s * 0.42,
            decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFDC2626)),
            alignment: Alignment.center,
            child: Container(width: s * 0.16, height: s * 0.16, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFFACC15))),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF365314), Color(0xFF1A2E05)]),
          for (final t in _targets)
            Builder(builder: (_) {
              final s = 80 * (1 - (t.age / _life) * 0.5);
              return Positioned(
                left: t.x * w - s / 2,
                top: t.y * h - s / 2,
                child: GestureDetector(onTapDown: (_) => _hit(t), child: _bullseye(s)),
              );
            }),
          for (final p in _pops)
            Positioned(
              left: p.x * w - 30,
              top: p.y * h - 30 - p.t * 60,
              child: Opacity(opacity: (1 - p.t * 2).clamp(0.0, 1.0), child: const SizedBox(width: 60, child: Text('+1', textAlign: TextAlign.center, style: TextStyle(color: Color(0xFFFDE68A), fontSize: 26, fontWeight: FontWeight.w900)))),
            ),
          arcadeTopBar('Hit the targets · $score/$goal', hearts: hearts),
        ]);
      });
}

// 25 ── Perfect Stop ─────────────────────────────────────────────────────────
class PerfectStopGame extends StatefulWidget {
  const PerfectStopGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PerfectStopGame> createState() => _PerfectStopState();
}

class _PerfectStopState extends State<PerfectStopGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 10;
  double _pos = 0, _dir = 1, _zone = 0.4, _zw = 0.22, _pause = 0;
  bool? _last;

  void _newZone() {
    _zw = math.max(0.08, 0.22 - score * 0.014);
    _zone = args.rng.nextDouble() * (1 - _zw);
  }

  @override
  void initState() {
    super.initState();
    startScore();
    _newZone();
    startLoop((dt) {
      if (_pause > 0) {
        _pause -= dt;
        if (_pause <= 0) _newZone();
      } else {
        _pos += _dir * (0.55 + score * 0.07) * dt;
        if (_pos > 1) {
          _pos = 1;
          _dir = -1;
        } else if (_pos < 0) {
          _pos = 0;
          _dir = 1;
        }
      }
      setState(() {});
    });
  }

  void _tap() {
    if (_pause > 0 || ended) return;
    final hit = _pos >= _zone && _pos <= _zone + _zw;
    _last = hit;
    _pause = 0.5;
    if (hit) {
      addPoint();
    } else {
      loseHeart('Stopped outside the zone');
    }
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => _tap(),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFF312E81), Color(0xFF0F0A1F)]),
          Center(
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                AnimatedOpacity(
                  duration: const Duration(milliseconds: 150),
                  opacity: _pause > 0 ? 1 : 0,
                  child: Text(_last == true ? 'PERFECT!' : 'MISS', style: TextStyle(color: _last == true ? const Color(0xFF4ADE80) : const Color(0xFFF87171), fontSize: 34, fontWeight: FontWeight.w900)),
                ),
                const SizedBox(height: 18),
                LayoutBuilder(builder: (context, c) {
                  final w = c.maxWidth * 0.86;
                  return SizedBox(
                    width: w,
                    height: 54,
                    child: Stack(children: [
                      Container(decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.45), borderRadius: BorderRadius.circular(27), border: Border.all(color: Colors.white24, width: 2))),
                      Positioned(
                        left: _zone * w,
                        width: _zw * w,
                        top: 4,
                        bottom: 4,
                        child: Container(decoration: BoxDecoration(borderRadius: BorderRadius.circular(20), color: const Color(0xFF22C55E), boxShadow: const [BoxShadow(color: Color(0xAA22C55E), blurRadius: 16)])),
                      ),
                      Positioned(left: (_pos * w - 4).clamp(0.0, w - 8), top: -6, bottom: -6, child: Container(width: 8, decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(4), boxShadow: const [BoxShadow(color: Colors.white70, blurRadius: 10)]))),
                    ]),
                  );
                }),
                const SizedBox(height: 22),
                Wrap(spacing: 4, children: [for (var i = 0; i < goal; i++) Icon(Icons.star_rounded, size: 26, color: i < score ? const Color(0xFFFACC15) : Colors.white24)]),
              ],
            ),
          ),
          arcadeTopBar('Tap to stop in the green', hearts: hearts),
        ]),
      );
}

// 26 ── Hoop Shot ────────────────────────────────────────────────────────────
class HoopShotGame extends StatefulWidget {
  const HoopShotGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<HoopShotGame> createState() => _HoopShotState();
}

class _HoopShotState extends State<HoopShotGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 10;
  double _hoop = 0.5, _hdir = 1, _ballT = -1, _flash = 0;
  bool? _last;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _hoop += _hdir * (0.28 + score * 0.04) * dt;
      if (_hoop > 0.82) _hdir = -1;
      if (_hoop < 0.18) _hdir = 1;
      if (_flash > 0) _flash -= dt;
      if (_ballT >= 0) {
        _ballT += dt / 0.55;
        if (_ballT >= 1) {
          _ballT = -1;
          final made = (_hoop - 0.5).abs() < 0.075;
          _last = made;
          _flash = 0.7;
          if (made) {
            if (addPoint()) return;
          } else if (loseHeart('Missed the hoop')) {
            return;
          }
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final t = _ballT < 0 ? 0.0 : _ballT;
        final ballY = 0.84 - 0.62 * t - math.sin(t * math.pi) * 0.08;
        final ballSize = 64 - 26 * t;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) {
            if (_ballT < 0 && !ended) _ballT = 0;
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7C2D12), Color(0xFF1C1917)]),
            Positioned(left: 0, right: 0, bottom: 0, height: h * 0.25, child: Container(color: const Color(0xFFB45309).withValues(alpha: 0.5))),
            Positioned(left: _hoop * w - 60, top: h * 0.08, child: Container(width: 120, height: 78, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.9), borderRadius: BorderRadius.circular(6), border: Border.all(color: const Color(0xFFDC2626), width: 4)))),
            Positioned(left: _hoop * w - 38, top: h * 0.2, child: Container(width: 76, height: 12, decoration: BoxDecoration(color: const Color(0xFFF97316), borderRadius: BorderRadius.circular(6), boxShadow: const [BoxShadow(color: Color(0x88F97316), blurRadius: 10)]))),
            Positioned(left: _hoop * w - 30, top: h * 0.2 + 12, child: CustomPaint(size: const Size(60, 34), painter: _NetPainter(Colors.white70, cols: 5, rows: 3))),
            Positioned(left: w / 2 - ballSize / 2, top: ballY * h - ballSize / 2, child: Transform.rotate(angle: t * 6, child: emojiText('🏀', ballSize))),
            if (_flash > 0) Center(child: Text(_last == true ? 'SWISH!' : 'MISS', style: TextStyle(color: _last == true ? const Color(0xFF4ADE80) : const Color(0xFFF87171), fontSize: 38, fontWeight: FontWeight.w900))),
            arcadeTopBar('Tap when the hoop is above the ball · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

class _NetPainter extends CustomPainter {
  _NetPainter(this.color, {this.cols = 6, this.rows = 4});
  final Color color;
  final int cols, rows;
  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 1.2;
    for (var i = 0; i <= cols; i++) {
      final x = size.width * i / cols;
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), p);
    }
    for (var j = 0; j <= rows; j++) {
      final y = size.height * j / rows;
      canvas.drawLine(Offset(0, y), Offset(size.width, y), p);
    }
  }

  @override
  bool shouldRepaint(covariant _NetPainter old) => false;
}

// 27 ── Penalty Kick ─────────────────────────────────────────────────────────
class PenaltyKickGame extends StatefulWidget {
  const PenaltyKickGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PenaltyKickGame> createState() => _PenaltyKickState();
}

class _PenaltyKickState extends State<PenaltyKickGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 8;
  int? _shot, _keeper;
  double _t = 0, _show = 0, _idle = 0;
  bool? _last;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _idle += dt;
      if (_shot != null && _t < 1) {
        _t = math.min(1, _t + dt / 0.6);
        if (_t >= 1) {
          final scored = _shot != _keeper;
          _last = scored;
          _show = 1.1;
          if (scored) {
            if (addPoint()) return;
          } else if (loseHeart('Saved by the keeper')) {
            return;
          }
        }
      } else if (_show > 0) {
        _show -= dt;
        if (_show <= 0) {
          _shot = null;
          _keeper = null;
          _t = 0;
        }
      }
      setState(() {});
    });
  }

  void _kick(int zone) {
    if (_shot != null || ended) return;
    _shot = zone;
    _keeper = args.rng.nextDouble() < 0.3 ? zone : (zone + 1 + args.rng.nextInt(5)) % 6;
    _t = 0;
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final gl = w * 0.08, gr = w * 0.92, gt = h * 0.16, gb = h * 0.46;
        Offset zoneCenter(int z) => Offset(gl + (gr - gl) * ((z % 3) + 0.5) / 3, gt + (gb - gt) * ((z ~/ 3) + 0.5) / 2);
        final home = Offset(w / 2, gb - 40);
        final keeperAt = _keeper == null
            ? Offset(w / 2 + math.sin(_idle * 2.4) * (gr - gl) * 0.22, gb - 40)
            : Offset.lerp(home, zoneCenter(_keeper!), Curves.easeOut.transform(_t))!;
        final ballFrom = Offset(w / 2, h * 0.84);
        final ballAt = _shot == null ? ballFrom : Offset.lerp(ballFrom, zoneCenter(_shot!), Curves.easeOut.transform(_t))!;
        final ballSize = 54 - 22 * (_shot == null ? 0.0 : _t);
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF0EA5E9), Color(0xFF15803D), Color(0xFF14532D)]),
          Positioned(left: gl, top: gt, width: gr - gl, height: gb - gt, child: CustomPaint(painter: _NetPainter(Colors.white30, cols: 12, rows: 6))),
          Positioned(left: gl - 6, top: gt - 6, width: gr - gl + 12, height: gb - gt + 6, child: Container(decoration: const BoxDecoration(border: Border(left: BorderSide(color: Colors.white, width: 6), right: BorderSide(color: Colors.white, width: 6), top: BorderSide(color: Colors.white, width: 6))))),
          for (var z = 0; z < 6; z++)
            Positioned(
              left: zoneCenter(z).dx - (gr - gl) / 6,
              top: zoneCenter(z).dy - (gb - gt) / 4,
              width: (gr - gl) / 3,
              height: (gb - gt) / 2,
              child: GestureDetector(
                onTapDown: (_) => _kick(z),
                child: Container(
                  margin: const EdgeInsets.all(4),
                  decoration: BoxDecoration(borderRadius: BorderRadius.circular(10), color: _shot == z ? Colors.yellow.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.06), border: Border.all(color: Colors.white24)),
                ),
              ),
            ),
          Positioned(left: keeperAt.dx - 32, top: keeperAt.dy - 36, child: IgnorePointer(child: emojiText('🧤', 64))),
          Positioned(left: ballAt.dx - ballSize / 2, top: ballAt.dy - ballSize / 2, child: IgnorePointer(child: emojiText('⚽', ballSize))),
          if (_show > 0) Positioned(left: 0, right: 0, top: h * 0.55, child: Text(_last == true ? 'GOOOAL!' : 'SAVED!', textAlign: TextAlign.center, style: TextStyle(color: _last == true ? const Color(0xFFFDE68A) : const Color(0xFFFCA5A5), fontSize: 40, fontWeight: FontWeight.w900, shadows: const [Shadow(blurRadius: 12)]))),
          arcadeTopBar('Tap a corner to shoot · $score/$goal', hearts: hearts, bottom: true),
        ]);
      });
}

// 28 ── Dino Dash ────────────────────────────────────────────────────────────
class DinoDashGame extends StatefulWidget {
  const DinoDashGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<DinoDashGame> createState() => _DinoDashState();
}

class _Ob {
  _Ob(this.x, this.e);
  double x;
  final String e;
  bool passed = false;
}

class _DinoDashState extends State<DinoDashGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 25;
  final _obs = <_Ob>[];
  Size _size = Size.zero;
  double _y = 0, _vy = 0, _spawn = 1, _inv = 0, _clouds = 0;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final w = _size.width, rx = w * 0.2;
      if (_y > 0 || _vy > 0) {
        _vy -= 2300 * dt;
        _y += _vy * dt;
        if (_y <= 0) {
          _y = 0;
          _vy = 0;
        }
      }
      if (_inv > 0) _inv -= dt;
      _clouds += dt;
      final speed = 250.0 + score * 9;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.65, 0.95 + args.rng.nextDouble() * 0.9 - score * 0.02);
        _obs.add(_Ob(w + 40, args.rng.nextDouble() < 0.75 ? '🌵' : '🪨'));
      }
      for (final o in _obs) {
        o.x -= speed * dt;
        if (!o.passed && (o.x - rx).abs() < 30 && _y < 42 && _inv <= 0) {
          o.passed = true;
          _inv = 1.0;
          if (loseHeart('Tripped over a cactus')) return;
        } else if (!o.passed && o.x < rx - 34) {
          o.passed = true;
          if (addPoint()) return;
        }
      }
      _obs.removeWhere((o) => o.x < -60);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final w = c.maxWidth, h = c.maxHeight, ground = h * 0.74;
        final blink = _inv > 0 && (_inv * 10).floor().isEven;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) {
            if (_y == 0 && !ended) _vy = 830;
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFFFDBA74), Color(0xFFFDE68A)]),
            Positioned(right: 30, top: h * 0.12, child: Container(width: 70, height: 70, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFFFF7ED), boxShadow: [BoxShadow(color: Color(0xAAFFFFFF), blurRadius: 30)]))),
            for (var i = 0; i < 3; i++) Positioned(left: (w + 120) - ((_clouds * 30 + i * (w + 120) / 3) % (w + 120)) - 60, top: h * (0.18 + i * 0.09), child: emojiText('☁️', 46)),
            Positioned(left: 0, right: 0, top: ground, bottom: 0, child: Container(decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFD97706), Color(0xFF78350F)])))),
            for (final o in _obs) Positioned(left: o.x - 24, top: ground - 50, child: emojiText(o.e, 48)),
            Positioned(
              left: w * 0.2 - 28,
              top: ground - 56 - _y,
              child: Opacity(opacity: blink ? 0.3 : 1, child: Transform(alignment: Alignment.center, transform: Matrix4.diagonal3Values(-1, 1, 1), child: emojiText('🏃', 56))),
            ),
            arcadeTopBar('Tap to jump · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 29 ── Lane Racer ───────────────────────────────────────────────────────────
class LaneRacerGame extends StatefulWidget {
  const LaneRacerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<LaneRacerGame> createState() => _LaneRacerState();
}

class _Car {
  _Car(this.lane, this.y, this.e);
  final int lane;
  double y;
  final String e;
  bool passed = false, hit = false;
}

class _LaneRacerState extends State<LaneRacerGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 30;
  static const traffic = ['🚗', '🚙', '🚕', '🚓', '🚐'];
  final _cars = <_Car>[];
  int _lane = 1, _lastLane = 1;
  double _laneX = 1, _road = 0, _spawn = 0.6;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      final speed = 0.45 + score * 0.012;
      _laneX += (_lane - _laneX) * math.min(1, dt * 14);
      _road = (_road + speed * dt) % 0.2;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.5, 0.95 - score * 0.012);
        var lane = args.rng.nextInt(3);
        if (lane == _lastLane && args.rng.nextBool()) lane = (lane + 1) % 3;
        _lastLane = lane;
        _cars.add(_Car(lane, -0.12, traffic[args.rng.nextInt(traffic.length)]));
      }
      for (final car in _cars) {
        car.y += speed * dt;
        if (!car.hit && (car.lane - _laneX).abs() < 0.5 && (car.y - 0.8).abs() < 0.09) {
          car.hit = true;
          if (loseHeart('Crashed into traffic')) return;
        }
        if (!car.passed && car.y > 0.92) {
          car.passed = true;
          if (!car.hit && addPoint()) return;
        }
      }
      _cars.removeWhere((c) => c.y > 1.15);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight, lw = w / 3;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => setState(() => _lane = (d.localPosition.dx < w / 2 ? _lane - 1 : _lane + 1).clamp(0, 2)),
          onHorizontalDragEnd: (d) => setState(() => _lane = ((d.primaryVelocity ?? 0) < 0 ? _lane - 1 : _lane + 1).clamp(0, 2)),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF374151), Color(0xFF1F2937)]),
            Positioned(left: 0, top: 0, bottom: 0, width: 6, child: Container(color: const Color(0xFFFACC15))),
            Positioned(right: 0, top: 0, bottom: 0, width: 6, child: Container(color: const Color(0xFFFACC15))),
            for (var lane = 1; lane < 3; lane++)
              for (var i = 0; i < 7; i++) Positioned(left: lane * lw - 3, top: ((i * 0.2 + _road) - 0.1) * h, child: Container(width: 6, height: h * 0.09, color: Colors.white70)),
            for (final car in _cars) Positioned(left: (car.lane + 0.5) * lw - 26, top: car.y * h - 26, child: Opacity(opacity: car.hit ? 0.4 : 1, child: Transform.rotate(angle: math.pi / 2, child: emojiText(car.e, 52)))),
            Positioned(left: (_laneX + 0.5) * lw - 30, top: 0.8 * h - 30, child: Transform.rotate(angle: math.pi / 2, child: emojiText('🏎️', 60))),
            arcadeTopBar('Tap left / right · passed $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 30 ── Planet Shield ────────────────────────────────────────────────────────
class PlanetShieldGame extends StatefulWidget {
  const PlanetShieldGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PlanetShieldGame> createState() => _PlanetShieldState();
}

class _Met {
  _Met(this.a, this.v);
  final double a, v;
  double d = 1;
  bool done = false;
}

class _PlanetShieldState extends State<PlanetShieldGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 20;
  static const shieldR = 0.42, half = 0.62;
  final _mets = <_Met>[];
  final _stars = <Offset>[];
  double _angle = -math.pi / 2, _spawn = 0.4, _flash = 0;

  @override
  void initState() {
    super.initState();
    for (var i = 0; i < 50; i++) {
      _stars.add(Offset(args.rng.nextDouble(), args.rng.nextDouble()));
    }
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.6, 1.4 - score * 0.035);
        _mets.add(_Met(args.rng.nextDouble() * math.pi * 2, 0.26 + score * 0.01));
      }
      if (_flash > 0) _flash -= dt;
      for (final m in _mets) {
        m.d -= m.v * dt;
        if (!m.done && m.d <= shieldR) {
          m.done = true;
          var diff = (m.a - _angle) % (math.pi * 2);
          if (diff > math.pi) diff -= math.pi * 2;
          if (diff.abs() < half) {
            if (addPoint()) return;
          } else {
            _flash = 0.4;
            if (loseHeart('A meteor hit the planet')) return;
          }
        }
      }
      _mets.removeWhere((m) => m.done);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final center = Offset(w / 2, h * 0.55);
        final R = math.min(w, h) / 2 * 0.95;
        void aim(Offset p) {
          final v = p - center;
          _angle = math.atan2(v.dy, v.dx);
        }

        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => aim(d.localPosition),
          onPanUpdate: (d) => aim(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF020617), Color(0xFF1E1B4B)]),
            for (final s in _stars) Positioned(left: s.dx * w, top: s.dy * h, child: Container(width: 2, height: 2, color: Colors.white54)),
            if (_flash > 0) Positioned.fill(child: Container(color: Colors.red.withValues(alpha: _flash))),
            Positioned(left: center.dx - R * 0.3, top: center.dy - R * 0.3, child: emojiText('🌍', R * 0.6)),
            Positioned.fill(child: CustomPaint(painter: _ShieldPainter(center, R * shieldR, _angle, half))),
            for (final m in _mets)
              Positioned(
                left: center.dx + math.cos(m.a) * m.d * R - 18,
                top: center.dy + math.sin(m.a) * m.d * R - 18,
                child: emojiText('☄️', 36),
              ),
            arcadeTopBar('Drag to aim the shield · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

class _ShieldPainter extends CustomPainter {
  _ShieldPainter(this.c, this.r, this.angle, this.half);
  final Offset c;
  final double r, angle, half;
  @override
  void paint(Canvas canvas, Size size) {
    final rect = Rect.fromCircle(center: c, radius: r);
    canvas.drawArc(
      rect,
      angle - half,
      half * 2,
      false,
      Paint()
        ..color = const Color(0xFF22D3EE).withValues(alpha: 0.35)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 22
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 8),
    );
    canvas.drawArc(
      rect,
      angle - half,
      half * 2,
      false,
      Paint()
        ..color = const Color(0xFF67E8F9)
        ..style = PaintingStyle.stroke
        ..strokeCap = StrokeCap.round
        ..strokeWidth = 9,
    );
  }

  @override
  bool shouldRepaint(covariant _ShieldPainter old) => old.angle != angle || old.r != r || old.c != c;
}
