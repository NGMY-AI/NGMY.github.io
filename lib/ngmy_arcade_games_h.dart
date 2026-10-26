import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';

/// Two head-to-head games against the computer, in the same spirit as Paddle Duel.
Widget? ngmyBuildArcadeGameH(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'air_hockey':
      return AirHockeyGame(args: a);
    case 'quick_draw':
      return QuickDrawGame(args: a);
  }
  return null;
}

// ── Air Hockey ────────────────────────────────────────────────────────────
class AirHockeyGame extends StatefulWidget {
  const AirHockeyGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<AirHockeyGame> createState() => _AirHockeyState();
}

class _AirHockeyState extends State<AirHockeyGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 5;
  static const pr = 14.0, mr = 27.0;
  Size _size = Size.zero;
  Offset _puck = Offset.zero, _vel = Offset.zero, _me = Offset.zero, _cpu = Offset.zero, _lastMe = Offset.zero;
  Offset _meV = Offset.zero, _cpuV = Offset.zero;
  bool _ready = false;
  double _clock = 0, _pause = 0, _still = 0;

  double get _goalHalf => _size.width * 0.2;

  void _serve(bool towardCpu) {
    _puck = Offset(_size.width / 2, _size.height / 2);
    _vel = Offset((args.rng.nextDouble() * 2 - 1) * 110, towardCpu ? -240 : 240);
    _still = 0;
  }

  void _hit(Offset m, Offset mv, double k) {
    final d = _puck - m;
    final dist = d.distance;
    if (dist >= pr + mr || dist == 0) return;
    final n = d / dist;
    _puck = m + n * (pr + mr);
    final vn = _vel.dx * n.dx + _vel.dy * n.dy;
    if (vn < 0) _vel = _vel - n * (vn * 1.9);
    _vel = _vel + n * (math.min(mv.distance, 700) * 0.55 + 90);
    final cap = 880 * k;
    if (_vel.distance > cap) _vel = _vel / _vel.distance * cap;
    HapticFeedback.selectionClick();
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      final w = _size.width, h = _size.height;
      if (!_ready) {
        _ready = true;
        _me = _lastMe = Offset(w / 2, h * 0.82);
        _cpu = Offset(w / 2, h * 0.14);
        _serve(args.rng.nextBool());
      }
      if (_pause > 0) {
        _pause -= dt;
        setState(() {});
        return;
      }
      _clock += dt;
      // Everything gets quicker the longer the match lasts.
      final double k = 1.0 + math.min(_clock * 0.012, 0.8);
      // The computer's mallet: goes for the puck when it is on its side, otherwise guards the goal.
      Offset target;
      if (_puck.dy < h * 0.56) {
        target = Offset(_puck.dx, math.min(_puck.dy - 12, h * 0.4));
      } else {
        target = Offset(w / 2 + math.sin(_clock * 1.7) * w * 0.12, h * 0.13);
      }
      final double cs = (200 + score * 30) * k;
      final delta = target - _cpu;
      final step = delta.distance <= cs * dt ? delta : delta / delta.distance * cs * dt;
      _cpuV = step / dt;
      _cpu = Offset((_cpu.dx + step.dx).clamp(mr, w - mr).toDouble(), (_cpu.dy + step.dy).clamp(mr + 6, h * 0.5 - mr).toDouble());
      _meV = (_me - _lastMe) / dt;
      _lastMe = _me;

      _puck += _vel * dt;
      _vel = _vel * (1 - 0.18 * dt);
      if (_puck.dx < pr) {
        _puck = Offset(pr, _puck.dy);
        _vel = Offset(_vel.dx.abs(), _vel.dy);
      } else if (_puck.dx > w - pr) {
        _puck = Offset(w - pr, _puck.dy);
        _vel = Offset(-_vel.dx.abs(), _vel.dy);
      }
      final inGoal = (_puck.dx - w / 2).abs() < _goalHalf;
      if (_puck.dy < pr && !inGoal) {
        _puck = Offset(_puck.dx, pr);
        _vel = Offset(_vel.dx, _vel.dy.abs());
      } else if (_puck.dy > h - pr && !inGoal) {
        _puck = Offset(_puck.dx, h - pr);
        _vel = Offset(_vel.dx, -_vel.dy.abs());
      }
      _hit(_me, _meV, k);
      _hit(_cpu, _cpuV, k);

      if (_vel.distance < 40) {
        _still += dt;
        if (_still > 1.2) {
          // A stuck puck gets a push towards the player.
          _vel = Offset((args.rng.nextDouble() * 2 - 1) * 120, 200);
          _still = 0;
        }
      } else {
        _still = 0;
      }

      if (_puck.dy < -pr * 2) {
        _pause = 0.8;
        if (addPoint()) return;
        _serve(false);
      } else if (_puck.dy > h + pr * 2) {
        _pause = 0.8;
        if (loseHeart('The computer scored')) return;
        _serve(true);
      }
      setState(() {});
    });
  }

  Widget _disc(Offset c, double r, Color color) => Positioned(
        left: c.dx - r,
        top: c.dy - r,
        child: Container(
          width: r * 2,
          height: r * 2,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            gradient: RadialGradient(colors: [Colors.white.withValues(alpha: 0.9), color], stops: const [0.0, 0.8]),
            boxShadow: [BoxShadow(color: color.withValues(alpha: 0.7), blurRadius: 14)],
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final w = c.maxWidth, h = c.maxHeight;
        void move(Offset p) => _me = Offset(p.dx.clamp(mr, w - mr).toDouble(), p.dy.clamp(h * 0.5 + mr, h - mr - 4).toDouble());
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => move(d.localPosition),
          onPanUpdate: (d) => move(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
            Positioned(left: 14, right: 14, top: h / 2 - 1, child: Container(height: 2, color: Colors.white24)),
            Center(child: Container(width: 110, height: 110, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white24, width: 2)))),
            Positioned(left: w / 2 - _goalHalf, top: 0, child: Container(width: _goalHalf * 2, height: 8, decoration: BoxDecoration(color: const Color(0xFFF43F5E), borderRadius: BorderRadius.circular(4)))),
            Positioned(left: w / 2 - _goalHalf, bottom: 0, child: Container(width: _goalHalf * 2, height: 8, decoration: BoxDecoration(color: const Color(0xFF22D3EE), borderRadius: BorderRadius.circular(4)))),
            if (_ready) ...[
              _disc(_cpu, mr, const Color(0xFFF43F5E)),
              _disc(_me, mr, const Color(0xFF22D3EE)),
              _disc(_puck, pr, const Color(0xFFFACC15)),
            ],
            arcadeTopBar('You $score · first to $goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

// ── Quick Draw ────────────────────────────────────────────────────────────
enum _DrawPhase { wait, signal, result }

class QuickDrawGame extends StatefulWidget {
  const QuickDrawGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<QuickDrawGame> createState() => _QuickDrawState();
}

class _QuickDrawState extends State<QuickDrawGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 5;
  var _phase = _DrawPhase.wait;
  double _t = 0, _delay = 1.5, _cpuTime = 0.4, _mine = 0;
  String _msg = 'Wait for it…';
  bool? _won;

  double _nextDelay() => 1.1 + args.rng.nextDouble() * 2.4;
  // The gunslinger gets quicker with every duel you win.
  double _nextCpuTime() => math.max(0.19, 0.52 - score * 0.07) + args.rng.nextDouble() * 0.1;

  @override
  void initState() {
    super.initState();
    startScore();
    _delay = _nextDelay();
    startLoop((dt) {
      _t += dt;
      switch (_phase) {
        case _DrawPhase.wait:
          if (_t >= _delay) {
            _phase = _DrawPhase.signal;
            _t = 0;
            _msg = 'DRAW!';
            _cpuTime = _nextCpuTime();
            HapticFeedback.heavyImpact();
          }
        case _DrawPhase.signal:
          // If you take too long, the gunslinger shoots first.
          if (_t >= _cpuTime) _finish(false, 'Too slow, he shot first');
        case _DrawPhase.result:
          if (_t >= 1.3) {
            _phase = _DrawPhase.wait;
            _t = 0;
            _delay = _nextDelay();
            _msg = 'Wait for it…';
            _won = null;
          }
      }
      setState(() {});
    });
  }

  void _finish(bool win, String why) {
    _phase = _DrawPhase.result;
    _t = 0;
    _won = win;
    _msg = win ? 'You were faster! (${(_mine * 1000).round()} ms)' : why;
    if (win) {
      addPoint();
    } else {
      loseHeart(why);
    }
  }

  void _tap() {
    if (ended) return;
    if (_phase == _DrawPhase.wait) {
      _finish(false, 'Too early, you drew before the signal');
    } else if (_phase == _DrawPhase.signal) {
      _mine = _t;
      _finish(true, '');
    }
  }

  @override
  Widget build(BuildContext context) {
    final signal = _phase == _DrawPhase.signal;
    return GestureDetector(
      behavior: HitTestBehavior.opaque,
      onTapDown: (_) => _tap(),
      child: Stack(children: [
        arcadeBackdrop(signal ? const [Color(0xFFDC2626), Color(0xFF7F1D1D)] : const [Color(0xFFFB923C), Color(0xFF7C2D12)]),
        Center(
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
              Transform(alignment: Alignment.center, transform: Matrix4.diagonal3Values(-1, 1, 1), child: const Text('🤠', style: TextStyle(fontSize: 76))),
              const Text('🤠', style: TextStyle(fontSize: 76)),
            ]),
            const SizedBox(height: 18),
            Text(
              _msg,
              textAlign: TextAlign.center,
              style: TextStyle(
                color: _won == null ? Colors.white : (_won! ? const Color(0xFF86EFAC) : const Color(0xFFFCA5A5)),
                fontSize: signal ? 56 : 24,
                fontWeight: FontWeight.w900,
              ),
            ),
            const SizedBox(height: 10),
            Text(signal ? 'TAP NOW' : 'Tap only after you see DRAW', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700)),
          ]),
        ),
        arcadeTopBar('You $score · first to $goal', hearts: hearts),
      ]),
    );
  }
}
