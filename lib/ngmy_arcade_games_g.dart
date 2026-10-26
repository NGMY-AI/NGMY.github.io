import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';

/// Arcade games 61–70: classics and skill.
Widget? ngmyBuildArcadeGameG(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'knife_throw':
      return KnifeThrowGame(args: a);
    case 'fall_down':
      return FallDownGame(args: a);
    case 'stick_bridge':
      return StickBridgeGame(args: a);
    case 'zigzag_run':
      return ZigzagRunGame(args: a);
    case 'word_search':
      return WordSearchGame(args: a);
    case 'emoji_math':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFF06B6D4), Color(0xFF164E63)], hint: 'Solve the emoji maths', make: _emojiMath);
    case 'connect_four':
      return ConnectFourGame(args: a);
    case 'pop_lock':
      return PopLockGame(args: a);
    case 'asteroid_blaster':
      return AsteroidBlasterGame(args: a);
    case 'tetro_drop':
      return TetroDropGame(args: a);
  }
  return null;
}

double _wrapAngle(double a) {
  var d = a % (math.pi * 2);
  if (d > math.pi) d -= math.pi * 2;
  return d;
}

// 61 ── Knife Throw ──────────────────────────────────────────────────────────
class KnifeThrowGame extends StatefulWidget {
  const KnifeThrowGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<KnifeThrowGame> createState() => _KnifeThrowState();
}

class _KnifeThrowState extends State<KnifeThrowGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 21;
  static const perLog = 7;
  final _knives = <double>[]; // angles in the log's own frame
  double _rot = 0, _spin = 3.0, _t = 0, _fly = -1, _bounce = 0;
  int _thrown = 0;

  void _newLog() {
    _knives.clear();
    _thrown = 0;
    final pre = math.min(score ~/ perLog + 3, 6);
    for (var i = 0; i < pre; i++) {
      _knives.add(args.rng.nextDouble() * math.pi * 2);
    }
  }

  @override
  void initState() {
    super.initState();
    startScore();
    hearts = 2;
    _newLog();
    startLoop((dt) {
      _t += dt;
      final speed = _spin * (1 + score * 0.04) * (score >= perLog ? (0.6 + 0.6 * math.sin(_t * 1.3)).abs() + 0.4 : 1);
      _rot += speed * dt;
      if (_bounce > 0) _bounce -= dt;
      if (_fly >= 0) {
        _fly += dt / 0.16;
        if (_fly >= 1) {
          _fly = -1;
          final local = _wrapAngle(math.pi / 2 - _rot);
          final clash = _knives.any((k) => _wrapAngle(k - local).abs() < 0.3);
          if (clash) {
            _bounce = 0.5;
            if (loseHeart('Hit another knife')) return;
          } else {
            _knives.add(local);
            _thrown++;
            if (addPoint()) return;
            if (_thrown >= perLog) {
              _newLog();
              if (score >= perLog && args.rng.nextBool()) _spin = -_spin;
            }
          }
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final center = Offset(w / 2, h * 0.36);
        final R = math.min(w, h) * 0.2;
        final knifeY = _fly < 0 ? h * 0.8 : h * 0.8 - (h * 0.8 - (center.dy + R)) * _fly;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) {
            if (_fly < 0 && !ended && _bounce <= 0) _fly = 0;
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF1E293B), Color(0xFF0F172A)]),
            Positioned.fill(child: CustomPaint(painter: _LogPainter(center, R, _rot, _knives))),
            Positioned(
              left: w / 2 - 7,
              top: knifeY,
              child: Transform.rotate(angle: _bounce > 0 ? _bounce * 8 : 0, child: const _Knife()),
            ),
            Positioned(
              left: 16,
              bottom: 20,
              child: Column(children: [for (var i = 0; i < perLog - _thrown; i++) const Padding(padding: EdgeInsets.all(1.5), child: Icon(Icons.hardware_rounded, color: Colors.white54, size: 16))]),
            ),
            arcadeTopBar('Tap to throw · don\'t hit a knife · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

class _Knife extends StatelessWidget {
  const _Knife();
  @override
  Widget build(BuildContext context) => Column(children: [
        Container(width: 14, height: 46, decoration: const BoxDecoration(color: Color(0xFFE2E8F0), borderRadius: BorderRadius.vertical(top: Radius.circular(7)))),
        Container(width: 14, height: 34, decoration: BoxDecoration(color: const Color(0xFF7C2D12), borderRadius: BorderRadius.circular(4))),
      ]);
}

class _LogPainter extends CustomPainter {
  _LogPainter(this.c, this.r, this.rot, this.knives);
  final Offset c;
  final double r, rot;
  final List<double> knives;
  @override
  void paint(Canvas canvas, Size size) {
    for (final k in knives) {
      final a = k + rot;
      final dir = Offset(math.cos(a), math.sin(a));
      canvas.drawLine(c + dir * r * 0.9, c + dir * (r + 46), Paint()
        ..color = const Color(0xFFE2E8F0)
        ..strokeWidth = 10);
      canvas.drawLine(c + dir * (r + 46), c + dir * (r + 80), Paint()
        ..color = const Color(0xFF7C2D12)
        ..strokeWidth = 12);
    }
    canvas.drawCircle(c, r, Paint()..shader = const RadialGradient(colors: [Color(0xFFD97706), Color(0xFF92400E), Color(0xFF451A03)]).createShader(Rect.fromCircle(center: c, radius: r)));
    final ring = Paint()
      ..color = const Color(0x55451A03)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    for (var i = 1; i <= 3; i++) {
      canvas.drawCircle(c, r * i / 4, ring);
    }
    canvas.drawLine(c, c + Offset(math.cos(rot), math.sin(rot)) * r * 0.9, ring);
  }

  @override
  bool shouldRepaint(covariant _LogPainter old) => true;
}

// 62 ── Fall Down ────────────────────────────────────────────────────────────
class FallDownGame extends StatefulWidget {
  const FallDownGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<FallDownGame> createState() => _FallDownState();
}

class _Bar {
  _Bar(this.y, this.gap);
  double y;
  final double gap; // gap centre, 0..1
  bool passed = false;
}

class _FallDownState extends State<FallDownGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 25;
  static const gapW = 0.24, br = 13.0;
  final _bars = <_Bar>[];
  Size _size = Size.zero;
  double _x = 0.5, _y = 120, _vy = 0, _dir = 0, _spawn = 0;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final w = _size.width, h = _size.height;
      final rise = 70.0 + score * 4;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.9, 1.6 - score * 0.03);
        _bars.add(_Bar(h + 10, gapW / 2 + args.rng.nextDouble() * (1 - gapW)));
      }
      for (final b in _bars) {
        b.y -= rise * dt;
      }
      _x = (_x + _dir * 0.75 * dt).clamp(br / w, 1 - br / w);
      _vy += 900 * dt;
      var ny = _y + _vy * dt;
      for (final b in _bars) {
        final inGap = (_x - b.gap).abs() < gapW / 2 - br / w * 0.6;
        if (!inGap && _y + br <= b.y + 2 && ny + br >= b.y) {
          ny = b.y - br;
          _vy = 0;
        }
        if (!b.passed && _y - br > b.y + 8) {
          b.passed = true;
          if (addPoint()) return;
        }
      }
      _y = math.min(ny, h - br);
      if (_y < 40) {
        if (loseHeart('Pushed off the top')) return;
        _bars.removeWhere((b) => b.y < h * 0.5);
        _y = h * 0.6;
        _vy = 0;
      }
      _bars.removeWhere((b) => b.y < -20);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final w = c.maxWidth;
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (e) => _dir = e.localPosition.dx < w / 2 ? -1 : 1,
          onPointerMove: (e) => _dir = e.localPosition.dx < w / 2 ? -1 : 1,
          onPointerUp: (_) => _dir = 0,
          onPointerCancel: (_) => _dir = 0,
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF0E7490), Color(0xFF083344)]),
            Positioned(left: 0, right: 0, top: 30, child: Container(height: 6, color: const Color(0xFFF43F5E).withValues(alpha: 0.6))),
            for (final b in _bars) ...[
              Positioned(left: 0, width: (b.gap - gapW / 2) * w, top: b.y, child: Container(height: 12, decoration: BoxDecoration(color: const Color(0xFF67E8F9), borderRadius: BorderRadius.circular(6)))),
              Positioned(left: (b.gap + gapW / 2) * w, right: 0, top: b.y, child: Container(height: 12, decoration: BoxDecoration(color: const Color(0xFF67E8F9), borderRadius: BorderRadius.circular(6)))),
            ],
            Positioned(
              left: _x * w - br,
              top: _y - br,
              child: Container(width: br * 2, height: br * 2, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(center: Alignment(-0.3, -0.3), colors: [Color(0xFFFEF08A), Color(0xFFF59E0B)]))),
            ),
            arcadeTopBar('Hold left / right · drop through the gaps · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

// 63 ── Stick Bridge ─────────────────────────────────────────────────────────
class StickBridgeGame extends StatefulWidget {
  const StickBridgeGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<StickBridgeGame> createState() => _StickBridgeState();
}

enum _StickPhase { idle, grow, fall, walk, drop }

class _StickBridgeState extends State<StickBridgeGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 12;
  Size _size = Size.zero;
  var _phase = _StickPhase.idle;
  double _len = 0, _angle = 0, _walk = 0, _gap = 120, _nextW = 70, _t = 0;
  static const curW = 70.0, baseX = 30.0;

  void _newGap() {
    final w = _size.width;
    _nextW = math.max(16, 58 - score * 4.0) + args.rng.nextDouble() * 16;
    _gap = 50 + args.rng.nextDouble() * (w - baseX - curW - _nextW - 70);
  }

  bool get _reaches {
    final end = _len;
    return end >= _gap && end <= _gap + _nextW;
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      if (_t == 0) {
        _t = 1;
        _newGap();
      }
      switch (_phase) {
        case _StickPhase.idle:
          break;
        case _StickPhase.grow:
          _len += 340 * dt;
        case _StickPhase.fall:
          _angle = math.min(math.pi / 2, _angle + dt * 5);
          if (_angle >= math.pi / 2) {
            _phase = _StickPhase.walk;
            _walk = 0;
          }
        case _StickPhase.walk:
          final target = _reaches ? _gap + _nextW / 2 + 12 : _len + 12;
          _walk = math.min(target, _walk + 240 * dt);
          if (_walk >= target) {
            if (_reaches) {
              _len = 0;
              _angle = 0;
              _walk = 0;
              _phase = _StickPhase.idle;
              if (addPoint()) return;
              _newGap();
            } else {
              _phase = _StickPhase.drop;
              _t = 1;
            }
          }
        case _StickPhase.drop:
          _t += dt;
          if (_t > 1.8) {
            _t = 1;
            _len = 0;
            _angle = 0;
            _walk = 0;
            _phase = _StickPhase.idle;
            if (loseHeart('The stick was the wrong length')) return;
          }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final h = c.maxHeight, top = h * 0.62;
        final edge = baseX + curW;
        final heroX = edge - 20 + _walk;
        final heroDrop = _phase == _StickPhase.drop ? (_t - 1) * (_t - 1) * 900 : 0.0;
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (_) {
            if (_phase == _StickPhase.idle && !ended) _phase = _StickPhase.grow;
          },
          onPointerUp: (_) {
            if (_phase == _StickPhase.grow) _phase = _StickPhase.fall;
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFFFDA4AF), Color(0xFF7E22CE)]),
            Positioned(left: c.maxWidth * 0.6, top: h * 0.12, child: Container(width: 90, height: 90, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFFEF3C7)))),
            Positioned(left: baseX, width: curW, top: top, bottom: 0, child: Container(color: const Color(0xFF111827))),
            Positioned(left: edge + _gap, width: _nextW, top: top, bottom: 0, child: Container(color: const Color(0xFF111827), alignment: Alignment.topCenter, child: Container(width: 10, height: 5, color: const Color(0xFFEF4444)))),
            Positioned(
              left: edge - 2,
              top: top - _len,
              child: Transform.rotate(
                angle: _angle,
                alignment: Alignment.bottomCenter,
                child: Container(width: 4, height: math.max(0.0, _len), color: const Color(0xFF451A03)),
              ),
            ),
            Positioned(left: heroX - 20, top: top - 40 + heroDrop, child: emojiText('🥷', 40)),
            arcadeTopBar('Hold to grow the stick, let go to drop it · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 64 ── Zigzag Run ───────────────────────────────────────────────────────────
class ZigzagRunGame extends StatefulWidget {
  const ZigzagRunGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ZigzagRunGame> createState() => _ZigzagRunState();
}

class _ZigzagRunState extends State<ZigzagRunGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 30;
  static const pathW = 60.0;
  final _pts = <Offset>[]; // world: x pixels, y up
  Size _size = Size.zero;
  double _bx = 0, _by = 0, _dir = 1;
  int _seg = 0;

  void _extend() {
    while (_pts.last.dy < _by + _size.height * 1.5) {
      final last = _pts.last;
      final goingRight = _pts.length.isEven;
      var len = 60 + args.rng.nextDouble() * 120;
      final w = _size.width;
      final maxLen = goingRight ? w - 50 - last.dx : last.dx - 50;
      len = math.min(len, math.max(30, maxLen));
      _pts.add(Offset(last.dx + (goingRight ? len : -len), last.dy + len));
    }
  }

  /// Path centre x at height y, and which segment that is.
  (double, int) _pathAt(double y) {
    for (var i = 0; i < _pts.length - 1; i++) {
      final a = _pts[i], b = _pts[i + 1];
      if (y >= a.dy && y <= b.dy) return (a.dx + (b.dx - a.dx) * ((y - a.dy) / math.max(1, b.dy - a.dy)), i);
    }
    return (_pts.last.dx, _pts.length - 2);
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      if (_pts.isEmpty) {
        _pts.addAll([Offset(_size.width / 2, -200), Offset(_size.width / 2, 0)]);
        _bx = _size.width / 2;
        _by = 0;
        _extend();
        _dir = 1;
      }
      final speed = 120.0 + score * 4;
      _by += speed * dt;
      _bx += _dir * speed * dt;
      final (px, seg) = _pathAt(_by);
      if (seg > _seg) {
        final gain = seg - _seg;
        _seg = seg;
        if (seg > 1 && addPoint(gain)) return;
      }
      if ((px - _bx).abs() > pathW / 2) {
        if (loseHeart('Ran off the path')) return;
        _bx = px;
        final a = _pts[seg], b = _pts[seg + 1];
        _dir = b.dx >= a.dx ? 1 : -1;
      }
      _extend();
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final h = c.maxHeight;
        Offset sc(Offset p) => Offset(p.dx, h * 0.72 - (p.dy - _by));
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => _dir = -_dir,
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF14B8A6), Color(0xFF0F766E)]),
            Positioned.fill(child: CustomPaint(painter: _ZigPainter([for (final p in _pts) sc(p)]))),
            Positioned(left: _bx - 12, top: h * 0.72 - 12, child: Container(width: 24, height: 24, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFF43F5E), boxShadow: [BoxShadow(color: Colors.black38, blurRadius: 6, offset: Offset(0, 4))]))),
            arcadeTopBar('Tap to turn · stay on the path · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

class _ZigPainter extends CustomPainter {
  _ZigPainter(this.pts);
  final List<Offset> pts;
  @override
  void paint(Canvas canvas, Size size) {
    if (pts.length < 2) return;
    final path = Path()..moveTo(pts.first.dx, pts.first.dy);
    for (final p in pts.skip(1)) {
      path.lineTo(p.dx, p.dy);
    }
    canvas.drawPath(path.shift(const Offset(0, 10)), Paint()
      ..color = const Color(0xFF134E4A)
      ..style = PaintingStyle.stroke
      ..strokeWidth = _ZigzagRunState.pathW * 1.42
      ..strokeJoin = StrokeJoin.round);
    canvas.drawPath(path, Paint()
      ..color = const Color(0xFFF1F5F9)
      ..style = PaintingStyle.stroke
      ..strokeWidth = _ZigzagRunState.pathW * 1.42
      ..strokeJoin = StrokeJoin.round);
  }

  @override
  bool shouldRepaint(covariant _ZigPainter old) => true;
}

// 65 ── Word Search ──────────────────────────────────────────────────────────
class WordSearchGame extends StatefulWidget {
  const WordSearchGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<WordSearchGame> createState() => _WordSearchState();
}

class _WordSearchState extends State<WordSearchGame> {
  static const n = 8;
  static const pool = ['MONEY', 'CASH', 'GOLD', 'COIN', 'BANK', 'SAVE', 'PROFIT', 'PRIZE', 'LUCKY', 'BONUS', 'WALLET', 'RICH', 'STAKE', 'WIN', 'VAULT', 'JEWEL'];
  late List<String> _grid;
  final _words = <String, List<int>>{};
  final _found = <String>{};
  int? _start;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _grid = List.filled(n * n, '');
    final choices = List.of(pool)..shuffle(r);
    const dirs = [(0, 1), (1, 0), (1, 1)];
    for (final w in choices) {
      if (_words.length >= 6) break;
      for (var tries = 0; tries < 60; tries++) {
        final (dr, dc) = dirs[r.nextInt(dirs.length)];
        final r0 = r.nextInt(n - dr * (w.length - 1)), c0 = r.nextInt(n - dc * (w.length - 1));
        final cells = [for (var k = 0; k < w.length; k++) (r0 + dr * k) * n + c0 + dc * k];
        var ok = true;
        for (var k = 0; k < w.length; k++) {
          if (_grid[cells[k]] != '' && _grid[cells[k]] != w[k]) ok = false;
        }
        if (!ok) continue;
        for (var k = 0; k < w.length; k++) {
          _grid[cells[k]] = w[k];
        }
        _words[w] = cells;
        break;
      }
    }
    const abc = 'ABCDEFGHIJKLMNOPRSTUVWY';
    for (var i = 0; i < _grid.length; i++) {
      if (_grid[i] == '') _grid[i] = abc[r.nextInt(abc.length)];
    }
    widget.args.onProgress(0, _words.length);
  }

  void _tap(int i) {
    if (_found.length == _words.length) return;
    if (_start == null) {
      setState(() => _start = i);
      return;
    }
    final s = _start!;
    setState(() => _start = null);
    for (final e in _words.entries) {
      if (_found.contains(e.key)) continue;
      final c = e.value;
      if ((c.first == s && c.last == i) || (c.first == i && c.last == s)) {
        HapticFeedback.mediumImpact();
        setState(() => _found.add(e.key));
        widget.args.onProgress(_found.length, _words.length);
        if (_found.length == _words.length) widget.args.onComplete();
        return;
      }
    }
    setState(() => _start = i);
  }

  @override
  Widget build(BuildContext context) {
    final lit = <int>{for (final w in _found) ..._words[w]!};
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFFE0F2FE), Color(0xFFBAE6FD)]),
      Column(children: [
        ArcadeBanner(child: Text('Tap the first and last letter of each word · ${_found.length}/${_words.length}')),
        Wrap(spacing: 6, runSpacing: 4, alignment: WrapAlignment.center, children: [
          for (final w in _words.keys)
            Chip(
              label: Text(w, style: TextStyle(fontWeight: FontWeight.w900, decoration: _found.contains(w) ? TextDecoration.lineThrough : null)),
              backgroundColor: _found.contains(w) ? const Color(0xFF86EFAC) : Colors.white,
              visualDensity: VisualDensity.compact,
            ),
        ]),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Container(
                margin: const EdgeInsets.all(12),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 10)]),
                child: GridView.count(
                  crossAxisCount: n,
                  physics: const NeverScrollableScrollPhysics(),
                  padding: const EdgeInsets.all(6),
                  children: [
                    for (var i = 0; i < n * n; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: Container(
                          margin: const EdgeInsets.all(1.5),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: _start == i ? const Color(0xFFFACC15) : (lit.contains(i) ? const Color(0xFF4ADE80) : const Color(0xFFF1F5F9)),
                            borderRadius: BorderRadius.circular(8),
                          ),
                          child: FittedBox(child: Padding(padding: const EdgeInsets.all(4), child: Text(_grid[i], style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 20, color: Color(0xFF0F172A))))),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ]),
    ]);
  }
}

// 66 ── Emoji Math ───────────────────────────────────────────────────────────
ArcadeQ _emojiMath(int round, math.Random r) {
  final icons = (['🍎', '🍌', '🍇', '🍩', '⭐', '🐱', '🎈'].toList()..shuffle(r)).take(3).toList();
  final v = [2 + r.nextInt(9), 1 + r.nextInt(9), 1 + r.nextInt(6)];
  final lines = <String>[];
  late int answer;
  late String ask;
  if (round < 3) {
    final k = 2 + r.nextInt(2);
    lines.add('${List.filled(k, icons[0]).join(' + ')} = ${v[0] * k}');
    ask = '${icons[0]} = ?';
    answer = v[0];
  } else if (round < 6) {
    lines.add('${icons[0]} + ${icons[0]} = ${v[0] * 2}');
    lines.add('${icons[0]} + ${icons[1]} = ${v[0] + v[1]}');
    ask = '${icons[1]} + ${icons[1]} + ${icons[0]} = ?';
    answer = v[1] * 2 + v[0];
  } else {
    lines.add('${icons[0]} + ${icons[0]} + ${icons[0]} = ${v[0] * 3}');
    lines.add('${icons[0]} + ${icons[1]} + ${icons[1]} = ${v[0] + v[1] * 2}');
    lines.add('${icons[1]} + ${icons[2]} = ${v[1] + v[2]}');
    ask = '${icons[0]} + ${icons[1]} × ${icons[2]} = ?';
    answer = v[0] + v[1] * v[2];
  }
  final wrong = <String>{for (final d in [-3, -2, -1, 1, 2, 3, 5]) if (answer + d >= 0) '${answer + d}'};
  final (opts, ans) = arcadeOptions('$answer', wrong, r);
  return ArcadeQ(
    Column(mainAxisSize: MainAxisSize.min, children: [
      for (final l in lines) Padding(padding: const EdgeInsets.symmetric(vertical: 3), child: Text(l, style: const TextStyle(fontSize: 24))),
      const Divider(color: Colors.white38),
      Text(ask, style: const TextStyle(fontSize: 26, color: Color(0xFFFDE68A))),
    ]),
    opts,
    ans,
  );
}

// 67 ── Connect Four ─────────────────────────────────────────────────────────
class ConnectFourGame extends StatefulWidget {
  const ConnectFourGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ConnectFourGame> createState() => _ConnectFourState();
}

class _ConnectFourState extends State<ConnectFourGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 2;
  static const cols = 7, rows = 6;
  late List<int> _b; // 0 empty, 1 you, 2 cpu; index row*cols+col, row 0 = top
  bool _busy = false;
  String _msg = 'Your turn — drop a red disc';
  Set<int> _line = {};

  @override
  void initState() {
    super.initState();
    startScore();
    _b = List.filled(cols * rows, 0);
  }

  int _dropRow(List<int> b, int c) {
    for (var r = rows - 1; r >= 0; r--) {
      if (b[r * cols + c] == 0) return r;
    }
    return -1;
  }

  Set<int> _winLine(List<int> b, int who) {
    const dirs = [(0, 1), (1, 0), (1, 1), (1, -1)];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        for (final (dr, dc) in dirs) {
          final cells = <int>[];
          for (var k = 0; k < 4; k++) {
            final rr = r + dr * k, cc = c + dc * k;
            if (rr < 0 || rr >= rows || cc < 0 || cc >= cols || b[rr * cols + cc] != who) break;
            cells.add(rr * cols + cc);
          }
          if (cells.length == 4) return cells.toSet();
        }
      }
    }
    return {};
  }

  int _cpuMove() {
    final open = [for (var c = 0; c < cols; c++) if (_dropRow(_b, c) >= 0) c];
    for (final who in [2, 1]) {
      for (final c in open) {
        final t = [..._b];
        t[_dropRow(t, c) * cols + c] = who;
        if (_winLine(t, who).isNotEmpty) return c;
      }
    }
    final safe = open.where((c) {
      final t = [..._b];
      final r = _dropRow(t, c);
      t[r * cols + c] = 2;
      if (r == 0) return true;
      t[(r - 1) * cols + c] = 1;
      return _winLine(t, 1).isEmpty;
    }).toList();
    final pick = safe.isNotEmpty ? safe : open;
    pick.sort((a, b) => (a - 3).abs().compareTo((b - 3).abs()));
    // Mostly central, sometimes a random choice so the CPU is beatable.
    return args.rng.nextDouble() < 0.35 ? pick[args.rng.nextInt(pick.length)] : pick.first;
  }

  Future<void> _play(int c) async {
    if (_busy || ended || _dropRow(_b, c) < 0) return;
    _busy = true;
    setState(() => _b[_dropRow(_b, c) * cols + c] = 1);
    HapticFeedback.selectionClick();
    if (await _check(1)) return;
    await Future<void>.delayed(const Duration(milliseconds: 380));
    if (!mounted) return;
    final m = _cpuMove();
    setState(() => _b[_dropRow(_b, m) * cols + m] = 2);
    if (await _check(2)) return;
    _busy = false;
  }

  /// True when the game ended (and a new one started).
  Future<bool> _check(int who) async {
    final line = _winLine(_b, who);
    final full = !_b.contains(0);
    if (line.isEmpty && !full) return false;
    setState(() {
      _line = line;
      _msg = line.isEmpty ? 'Draw — new game' : (who == 1 ? 'You win this game!' : 'The CPU won this one');
    });
    if (line.isNotEmpty && who == 1) {
      if (addPoint()) return true;
    } else if (line.isNotEmpty && loseHeart('The CPU won')) {
      return true;
    }
    await Future<void>.delayed(const Duration(milliseconds: 1300));
    if (!mounted) return true;
    setState(() {
      _b = List.filled(cols * rows, 0);
      _line = {};
      _msg = 'Your turn — drop a red disc';
      _busy = false;
    });
    return true;
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF1D4ED8), Color(0xFF172554)]),
        Column(children: [
          arcadeTopBar('Win $goal games vs the CPU · won $score', hearts: hearts),
          Text(_msg, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: cols / rows,
                child: Container(
                  margin: const EdgeInsets.all(12),
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(color: const Color(0xFF2563EB), borderRadius: BorderRadius.circular(16), boxShadow: const [BoxShadow(color: Colors.black45, blurRadius: 12)]),
                  child: GridView.count(
                    crossAxisCount: cols,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < cols * rows; i++)
                        GestureDetector(
                          onTap: () => _play(i % cols),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            margin: const EdgeInsets.all(3),
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: switch (_b[i]) {
                                1 => const Color(0xFFEF4444),
                                2 => const Color(0xFFFACC15),
                                _ => const Color(0xFF0B1E4D),
                              },
                              border: Border.all(color: _line.contains(i) ? Colors.white : Colors.black26, width: _line.contains(i) ? 4 : 1),
                            ),
                          ),
                        ),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// 68 ── Pop the Lock ─────────────────────────────────────────────────────────
class PopLockGame extends StatefulWidget {
  const PopLockGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PopLockGame> createState() => _PopLockState();
}

class _PopLockState extends State<PopLockGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 20;
  static const hit = 0.22;
  double _needle = -math.pi / 2, _dot = 0, _dir = 1, _flash = 0;

  void _placeDot() {
    _dot = _needle + _dir * (0.9 + args.rng.nextDouble() * 2.6);
  }

  @override
  void initState() {
    super.initState();
    startScore();
    _placeDot();
    startLoop((dt) {
      if (_flash > 0) _flash -= dt;
      _needle += _dir * (1.8 + score * 0.12) * dt;
      // Passed the dot without tapping.
      if (_wrapAngle(_needle - _dot) * _dir > hit * 1.6) {
        _flash = 0.4;
        if (loseHeart('Missed the dot')) return;
        _placeDot();
      }
      setState(() {});
    });
  }

  void _tap() {
    if (ended) return;
    if (_wrapAngle(_needle - _dot).abs() < hit) {
      if (addPoint()) return;
      _dir = -_dir;
      _placeDot();
    } else {
      _flash = 0.4;
      if (loseHeart('Tapped too early')) return;
      _placeDot();
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final R = math.min(c.maxWidth, c.maxHeight) * 0.32;
        final center = Offset(c.maxWidth / 2, c.maxHeight * 0.55);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => _tap(),
          child: Stack(children: [
            arcadeBackdrop(_flash > 0 ? const [Color(0xFF991B1B), Color(0xFF450A0A)] : const [Color(0xFF4338CA), Color(0xFF1E1B4B)]),
            Positioned(
              left: center.dx - R * 0.55,
              top: center.dy - R * 1.6,
              child: Container(width: R * 1.1, height: R * 1.1, decoration: BoxDecoration(border: Border.all(color: const Color(0xFF94A3B8), width: 16), borderRadius: BorderRadius.vertical(top: Radius.circular(R)))),
            ),
            Positioned.fill(child: CustomPaint(painter: _LockPainter(center, R, _needle, _dot))),
            Positioned(left: center.dx - 60, top: center.dy - 30, child: SizedBox(width: 120, child: Text('${goal - score}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 50, fontWeight: FontWeight.w900)))),
            arcadeTopBar('Tap when the needle hits the dot', hearts: hearts),
          ]),
        );
      });
}

class _LockPainter extends CustomPainter {
  _LockPainter(this.c, this.r, this.needle, this.dot);
  final Offset c;
  final double r, needle, dot;
  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFF1E293B));
    canvas.drawCircle(c, r, Paint()
      ..color = const Color(0xFF64748B)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 26);
    final track = r;
    canvas.drawCircle(c + Offset(math.cos(dot), math.sin(dot)) * track, 11, Paint()..color = const Color(0xFFFACC15));
    final dir = Offset(math.cos(needle), math.sin(needle));
    canvas.drawLine(c + dir * (track - 16), c + dir * (track + 16), Paint()
      ..color = const Color(0xFFF43F5E)
      ..strokeWidth = 8
      ..strokeCap = StrokeCap.round);
  }

  @override
  bool shouldRepaint(covariant _LockPainter old) => true;
}

// 69 ── Asteroid Blaster ─────────────────────────────────────────────────────
class AsteroidBlasterGame extends StatefulWidget {
  const AsteroidBlasterGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<AsteroidBlasterGame> createState() => _AsteroidBlasterState();
}

class _Rock {
  _Rock(this.x, this.y, this.v, this.s);
  double x, y;
  final double v, s;
  bool dead = false;
}

class _AsteroidBlasterState extends State<AsteroidBlasterGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 36;
  final _rocks = <_Rock>[];
  final _shots = <Offset>[]; // fractions
  double _ship = 0.5, _fire = 0, _spawn = 0.5;
  Size _size = Size.zero;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final aspect = _size.height / _size.width;
      _fire -= dt;
      if (_fire <= 0) {
        _fire = 0.32;
        _shots.add(Offset(_ship, 0.84));
      }
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = math.max(0.2, 0.6 - score * 0.014);
        _rocks.add(_Rock(0.08 + args.rng.nextDouble() * 0.84, -0.06, 0.2 + args.rng.nextDouble() * 0.15 + score * 0.008, 34 + args.rng.nextDouble() * 22));
      }
      for (var i = 0; i < _shots.length; i++) {
        _shots[i] = _shots[i] - Offset(0, 1.2 * dt);
      }
      _shots.removeWhere((s) => s.dy < -0.05);
      for (final r in _rocks) {
        r.y += r.v * dt;
        for (var i = 0; i < _shots.length; i++) {
          final s = _shots[i];
          final dx = (s.dx - r.x) * _size.width, dy = (s.dy - r.y) * _size.height;
          if (!r.dead && math.sqrt(dx * dx + dy * dy) < r.s / 2 + 4) {
            r.dead = true;
            _shots.removeAt(i);
            if (addPoint()) return;
            break;
          }
        }
        if (!r.dead && r.y > 0.8 && r.y < 0.9 && (r.x - _ship).abs() * aspect < 0.06 * aspect + r.s / _size.height / 2) {
          r.dead = true;
          if (loseHeart('Your ship was hit')) return;
        } else if (!r.dead && r.y > 1.02) {
          r.dead = true;
          if (loseHeart('An asteroid got past')) return;
        }
      }
      _rocks.removeWhere((r) => r.dead);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final w = c.maxWidth, h = c.maxHeight;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => _ship = (d.localPosition.dx / w).clamp(0.05, 0.95),
          onPanUpdate: (d) => _ship = (d.localPosition.dx / w).clamp(0.05, 0.95),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF0B1026), Color(0xFF2E1065)]),
            for (final s in _shots) Positioned(left: s.dx * w - 2, top: s.dy * h, child: Container(width: 4, height: 14, decoration: BoxDecoration(color: const Color(0xFF67E8F9), borderRadius: BorderRadius.circular(2), boxShadow: const [BoxShadow(color: Color(0xFF22D3EE), blurRadius: 6)]))),
            for (final r in _rocks) Positioned(left: r.x * w - r.s / 2, top: r.y * h - r.s / 2, child: Transform.rotate(angle: r.y * 8, child: emojiText('🪨', r.s))),
            Positioned(left: _ship * w - 24, top: 0.84 * h, child: emojiText('🛸', 48)),
            arcadeTopBar('Drag to move · auto-fire · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// 70 ── Tetro Drop ───────────────────────────────────────────────────────────
class TetroDropGame extends StatefulWidget {
  const TetroDropGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<TetroDropGame> createState() => _TetroDropState();
}

class _TetroDropState extends State<TetroDropGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 6;
  static const cols = 10, rows = 16;
  static const shapes = [
    [(0, 0), (0, 1), (0, 2), (0, 3)], // I
    [(0, 0), (0, 1), (1, 0), (1, 1)], // O
    [(0, 1), (1, 0), (1, 1), (1, 2)], // T
    [(0, 0), (1, 0), (1, 1), (1, 2)], // J
    [(0, 2), (1, 0), (1, 1), (1, 2)], // L
    [(0, 1), (0, 2), (1, 0), (1, 1)], // S
    [(0, 0), (0, 1), (1, 1), (1, 2)], // Z
  ];
  static const colors = [Color(0xFF22D3EE), Color(0xFFFACC15), Color(0xFFA855F7), Color(0xFF3B82F6), Color(0xFFF97316), Color(0xFF22C55E), Color(0xFFEF4444)];
  final _board = List<int>.filled(cols * rows, -1);
  late List<(int, int)> _piece;
  int _kind = 0, _pr = 0, _pc = 3;
  double _tick = 0;

  void _spawn() {
    _kind = args.rng.nextInt(shapes.length);
    _piece = List.of(shapes[_kind]);
    _pr = 0;
    _pc = 3;
    if (!_fits(_piece, _pr, _pc)) knockout('The stack reached the top');
  }

  bool _fits(List<(int, int)> p, int r, int c) {
    for (final (dr, dc) in p) {
      final rr = r + dr, cc = c + dc;
      if (cc < 0 || cc >= cols || rr >= rows) return false;
      if (rr >= 0 && _board[rr * cols + cc] >= 0) return false;
    }
    return true;
  }

  void _lock() {
    for (final (dr, dc) in _piece) {
      final rr = _pr + dr, cc = _pc + dc;
      if (rr >= 0) _board[rr * cols + cc] = _kind;
    }
    var cleared = 0;
    for (var r = rows - 1; r >= 0; r--) {
      if (List.generate(cols, (c) => _board[r * cols + c]).every((v) => v >= 0)) {
        _board.removeRange(r * cols, r * cols + cols);
        _board.insertAll(0, List.filled(cols, -1));
        cleared++;
        r++;
      }
    }
    if (cleared > 0 && addPoint(cleared)) return;
    _spawn();
  }

  void _move(int dc) {
    if (ended) return;
    if (_fits(_piece, _pr, _pc + dc)) setState(() => _pc += dc);
  }

  void _rotate() {
    if (ended || _kind == 1) return;
    final rot = [for (final (r, c) in _piece) (c, 2 - r)];
    for (final kick in [0, -1, 1, -2, 2]) {
      if (_fits(rot, _pr, _pc + kick)) {
        setState(() {
          _piece = rot;
          _pc += kick;
        });
        return;
      }
    }
  }

  void _hardDrop() {
    if (ended) return;
    while (_fits(_piece, _pr + 1, _pc)) {
      _pr++;
    }
    HapticFeedback.mediumImpact();
    _lock();
    setState(() {});
  }

  @override
  void initState() {
    super.initState();
    startScore();
    _spawn();
    startLoop((dt) {
      _tick += dt;
      final every = math.max(0.25, 0.6 - score * 0.05);
      if (_tick >= every) {
        _tick = 0;
        if (_fits(_piece, _pr + 1, _pc)) {
          _pr++;
        } else {
          _lock();
          if (ended) return;
        }
        setState(() {});
      }
    });
  }

  Widget _btn(IconData i, VoidCallback f) => GestureDetector(
        onTap: f,
        child: Container(
          width: 64,
          height: 52,
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white30)),
          child: Icon(i, color: Colors.white, size: 30),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final live = <int>{for (final (dr, dc) in _piece) if (_pr + dr >= 0) (_pr + dr) * cols + _pc + dc};
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF111827), Color(0xFF030712)]),
      Column(children: [
        ArcadeBanner(child: Text('Clear $goal lines · cleared $score')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: cols / rows,
              child: GestureDetector(
                onTap: _rotate,
                child: Container(
                  margin: const EdgeInsets.symmetric(horizontal: 10),
                  decoration: BoxDecoration(border: Border.all(color: Colors.white30, width: 2), borderRadius: BorderRadius.circular(6)),
                  child: GridView.count(
                    crossAxisCount: cols,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < cols * rows; i++)
                        Builder(builder: (_) {
                          final k = live.contains(i) ? _kind : _board[i];
                          return Container(
                            margin: const EdgeInsets.all(0.8),
                            decoration: BoxDecoration(
                              color: k < 0 ? Colors.white.withValues(alpha: 0.03) : colors[k],
                              borderRadius: BorderRadius.circular(3),
                              border: k < 0 ? null : Border.all(color: Colors.white54, width: 1),
                            ),
                          );
                        }),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(10, 8, 10, 12),
          child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
            _btn(Icons.arrow_left_rounded, () => _move(-1)),
            _btn(Icons.rotate_right_rounded, _rotate),
            _btn(Icons.arrow_right_rounded, () => _move(1)),
            _btn(Icons.vertical_align_bottom_rounded, _hardDrop),
          ]),
        ),
      ]),
    ]);
  }
}
