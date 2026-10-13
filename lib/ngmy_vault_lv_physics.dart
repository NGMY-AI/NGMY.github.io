import 'dart:async';
import 'dart:collection';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 71–80: physics.
final kVaultPhysicsGames = <VaultLvDef>[
  VaultLvDef(id: 'v_seesaw', title: 'Balance Beam', tagline: 'Place each load so the beam doesn’t tip.', emoji: '⚖️', icon: Icons.align_horizontal_center_rounded, colors: const [Color(0xFFFBBF24), Color(0xFF422006)], tag: 'PHYSICS', build: (a, l) => BalanceBeamGame(args: a, level: l)),
  VaultLvDef(id: 'v_block_pull', title: 'Block Tower', tagline: 'Pull blocks out without toppling the tower.', emoji: '🧱', icon: Icons.view_agenda_rounded, colors: const [Color(0xFFD97706), Color(0xFF292524)], tag: 'PHYSICS', build: (a, l) => BlockTowerGame(args: a, level: l)),
  VaultLvDef(id: 'v_domino', title: 'Domino Chain', tagline: 'Place dominoes so the chain reaches the bell.', emoji: '🁢', icon: Icons.view_week_rounded, colors: const [Color(0xFFF8FAFC), Color(0xFF334155)], tag: 'PHYSICS', build: (a, l) => DominoChainGame(args: a, level: l)),
  VaultLvDef(id: 'v_wrecking', title: 'Wrecking Ball', tagline: 'Let go at the right moment to smash the target.', emoji: '🏗️', icon: Icons.construction_rounded, colors: const [Color(0xFFF59E0B), Color(0xFF1F2937)], tag: 'PHYSICS', build: (a, l) => WreckingBallGame(args: a, level: l)),
  VaultLvDef(id: 'v_orbit_sling', title: 'Gravity Sling', tagline: 'Slingshot the probe around planets to the ring.', emoji: '🪐', icon: Icons.public_rounded, colors: const [Color(0xFF818CF8), Color(0xFF020617)], tag: 'PHYSICS', build: (a, l) => GravitySlingGame(args: a, level: l)),
  VaultLvDef(id: 'v_ice_slide', title: 'Ice Slide', tagline: 'You slide until you hit something — reach the flag.', emoji: '🧊', icon: Icons.ac_unit_rounded, colors: const [Color(0xFF7DD3FC), Color(0xFF0C4A6E)], tag: 'PHYSICS', build: (a, l) => IceSlideGame(args: a, level: l)),
  VaultLvDef(id: 'v_pendulum', title: 'Pendulum Drop', tagline: 'Cut the swing to drop the gift in the cart.', emoji: '🎁', icon: Icons.change_history_rounded, colors: const [Color(0xFFEC4899), Color(0xFF3B0764)], tag: 'PHYSICS', build: (a, l) => PendulumDropGame(args: a, level: l)),
  VaultLvDef(id: 'v_rope_cut', title: 'Rope Cutter', tagline: 'Swipe the ropes so the candy lands in the mouth.', emoji: '🍬', icon: Icons.cut_rounded, colors: const [Color(0xFF22C55E), Color(0xFF14532D)], tag: 'PHYSICS', build: (a, l) => RopeCutterGame(args: a, level: l)),
  VaultLvDef(id: 'v_trampoline', title: 'Trampoline Rescue', tagline: 'Bounce everyone safely to the ambulance.', emoji: '🚑', icon: Icons.health_and_safety_rounded, colors: const [Color(0xFFEF4444), Color(0xFF7DD3FC)], tag: 'PHYSICS', build: (a, l) => TrampolineGame(args: a, level: l)),
  VaultLvDef(id: 'v_seesaw_launch', title: 'Seesaw Launch', tagline: 'Drop the weight from the right height to land the jump.', emoji: '🤸', icon: Icons.sports_gymnastics_rounded, colors: const [Color(0xFF14B8A6), Color(0xFF134E4A)], tag: 'PHYSICS', build: (a, l) => SeesawLaunchGame(args: a, level: l)),
];

// ── 71 Balance Beam ────────────────────────────────────────────────────────
class BalanceBeamGame extends StatefulWidget {
  const BalanceBeamGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BalanceBeamGame> createState() => _BalanceBeamState();
}

class _BalanceBeamState extends State<BalanceBeamGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 5, 16);
  final _loads = <(double, int)>[]; // (x -1..1, weight)
  late int _next;
  double _aim = 0, _tilt = 0;
  late final double _limit = lvD(widget.level, 0.9, 0.45);

  double get _torque => _loads.fold(0.0, (s, l) => s + l.$1 * l.$2);
  int get _mass => _loads.fold(0, (s, l) => s + l.$2);

  @override
  void initState() {
    super.initState();
    _next = 1 + args.rng.nextInt(lvI(widget.level, 3, 8));
    hearts = 3;
    startScore();
    startLoop((dt) {
      final want = (_torque / math.max(4, _mass + 2)).clamp(-1.2, 1.2);
      _tilt += (want - _tilt) * math.min(1, dt * 4);
      setState(() {});
    });
  }

  void _drop() {
    if (ended) return;
    _loads.add((_aim, _next));
    HapticFeedback.mediumImpact();
    if ((_torque / math.max(4, _mass + 2)).abs() > _limit) {
      _loads.clear();
      if (loseHeart('The beam tipped over')) return;
    } else if (addPoint()) {
      return;
    }
    _next = 1 + args.rng.nextInt(lvI(widget.level, 3, 8));
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final half = w * 0.42;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => _aim = ((d.localPosition.dx - w / 2) / half).clamp(-1.0, 1.0),
          onPanUpdate: (d) => _aim = ((d.localPosition.dx - w / 2) / half).clamp(-1.0, 1.0),
          onPanEnd: (_) => _drop(),
          onTapUp: (d) {
            _aim = ((d.localPosition.dx - w / 2) / half).clamp(-1.0, 1.0);
            _drop();
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF78350F), Color(0xFF1C1917)]),
            Positioned(left: w / 2 + _aim * half - 22, top: h * 0.22, child: Column(children: [
              Container(
                width: 44,
                height: 44,
                alignment: Alignment.center,
                decoration: BoxDecoration(color: const Color(0xFF64748B), borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.white54)),
                child: Text('$_next', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
              ),
              const Icon(Icons.arrow_downward_rounded, color: Colors.white54),
            ])),
            Positioned(
              left: w / 2 - half,
              top: h * 0.52,
              child: Transform.rotate(
                angle: _tilt * 0.35,
                child: SizedBox(
                  width: half * 2,
                  height: 60,
                  child: Stack(clipBehavior: Clip.none, children: [
                    Positioned(left: 0, right: 0, bottom: 0, child: Container(height: 12, decoration: BoxDecoration(color: const Color(0xFFD6A35C), borderRadius: BorderRadius.circular(6)))),
                    for (final l in _loads)
                      Positioned(
                        left: half + l.$1 * half - 14,
                        bottom: 12,
                        child: Container(
                          width: 28,
                          height: 18.0 + l.$2 * 4,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(color: const Color(0xFF475569), borderRadius: BorderRadius.circular(4)),
                          child: Text('${l.$2}', style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900)),
                        ),
                      ),
                  ]),
                ),
              ),
            ),
            Positioned(left: w / 2 - 20, top: h * 0.52 + 58, child: CustomPaint(size: const Size(40, 40), painter: _PivotPainter())),
            Positioned(
              left: w * 0.2,
              right: w * 0.2,
              bottom: 30,
              child: Column(children: [
                const Text('tilt', style: TextStyle(color: Colors.white54)),
                LinearProgressIndicator(value: (_tilt.abs() / _limit).clamp(0.0, 1.0), color: _tilt.abs() > _limit * 0.75 ? Colors.red : const Color(0xFFFBBF24), backgroundColor: Colors.white12, minHeight: 8),
              ]),
            ),
            arcadeTopBar('Drag to aim, let go to drop · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

class _PivotPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final p = Path()
      ..moveTo(s.width / 2, 0)
      ..lineTo(s.width, s.height)
      ..lineTo(0, s.height)
      ..close();
    canvas.drawPath(p, Paint()..color = const Color(0xFF94A3B8));
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

// ── 72 Block Tower ─────────────────────────────────────────────────────────
class BlockTowerGame extends StatefulWidget {
  const BlockTowerGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BlockTowerGame> createState() => _BlockTowerState();
}

class _BlockTowerState extends State<BlockTowerGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 5, 18);
  late final List<List<bool>> _rows = List.generate(lvI(widget.level, 8, 14), (_) => [true, true, true]);
  int _wobble = 0;

  // A row stands if it keeps its middle block, or both side blocks.
  bool _stable(List<bool> r) => r[1] || (r[0] && r[2]);

  @override
  void initState() {
    super.initState();
    // Harder levels start with some blocks already missing.
    for (var i = 0; i < lvI(widget.level, 0, 6); i++) {
      final row = args.rng.nextInt(_rows.length - 1);
      final k = args.rng.nextInt(3);
      _rows[row][k] = false;
      if (!_stable(_rows[row])) _rows[row][k] = true;
    }
    startScore();
  }

  void _pull(int row, int k) {
    if (ended || !_rows[row][k] || row == _rows.length - 1) return;
    setState(() {
      _rows[row][k] = false;
      _wobble = 6;
      // The pulled block goes on top.
      final top = _rows.last;
      final slot = top.indexOf(false);
      if (top.every((b) => b)) {
        _rows.add([false, true, false]);
      } else if (slot >= 0) {
        top[slot] = true;
      }
    });
    HapticFeedback.mediumImpact();
    if (!_stable(_rows[row])) {
      knockout('The tower toppled');
      return;
    }
    addPoint();
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF57534E), Color(0xFF1C1917)]),
        Column(children: [
          ArcadeBanner(child: Text('Each layer needs its middle block or both sides · $score/$goal')),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final bh = math.min(30.0, (c.maxHeight - 20) / _rows.length);
              return TweenAnimationBuilder<double>(
                key: ValueKey(score),
                tween: Tween(begin: _wobble.toDouble(), end: 0),
                duration: const Duration(milliseconds: 500),
                builder: (_, v, child) => Transform.rotate(angle: math.sin(v * 3) * 0.01 * v, child: child),
                child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                  for (var row = _rows.length - 1; row >= 0; row--)
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      for (var k = 0; k < 3; k++)
                        GestureDetector(
                          onTap: () => _pull(row, k),
                          child: Container(
                            width: 70,
                            height: bh - 2,
                            margin: const EdgeInsets.all(1),
                            decoration: BoxDecoration(
                              color: _rows[row][k] ? (row == _rows.length - 1 ? const Color(0xFFFBBF24) : const Color(0xFFD97706)) : Colors.transparent,
                              borderRadius: BorderRadius.circular(4),
                              border: _rows[row][k] ? Border.all(color: const Color(0xFF78350F)) : null,
                            ),
                          ),
                        ),
                    ]),
                  Container(width: 260, height: 14, color: const Color(0xFF292524)),
                ]),
              );
            }),
          ),
        ]),
      ]);
}

// ── 73 Domino Chain ────────────────────────────────────────────────────────
class DominoChainGame extends StatefulWidget {
  const DominoChainGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DominoChainGame> createState() => _DominoChainState();
}

class _DominoChainState extends State<DominoChainGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 1;
  late final int _len = lvI(widget.level, 8, 24);
  late final Set<int> _rocks;
  final _placed = <int>{0};
  late final int _budget;
  int _fallen = -1;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    final rocks = <int>{};
    for (var i = 2; i < _len - 1; i++) {
      if (!rocks.contains(i - 1) && r.nextDouble() < lvD(widget.level, 0.15, 0.4)) rocks.add(i);
    }
    _rocks = rocks;
    // Fewest dominoes needed: each falls onto one at most 2 slots ahead.
    final best = List.filled(_len, 999);
    best[0] = 1;
    for (var i = 0; i < _len; i++) {
      if (best[i] == 999 || _rocks.contains(i)) continue;
      for (final j in [i + 1, i + 2]) {
        if (j < _len && !_rocks.contains(j)) best[j] = math.min(best[j], best[i] + 1);
      }
    }
    _budget = best[_len - 1] + lvI(widget.level, 3, 0);
    hearts = 3;
    startScore();
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _toggle(int i) {
    if (ended || _fallen >= 0 || i == 0 || _rocks.contains(i)) return;
    setState(() {
      if (_placed.contains(i)) {
        _placed.remove(i);
      } else if (_placed.length < _budget) {
        _placed.add(i);
      }
    });
  }

  void _push() {
    if (ended || _fallen >= 0) return;
    _fallen = 0;
    _t = Timer.periodic(const Duration(milliseconds: 180), (tm) {
      if (!mounted) return tm.cancel();
      final next = [_fallen + 1, _fallen + 2].where(_placed.contains).toList();
      if (next.isEmpty) {
        tm.cancel();
        if (_fallen == _len - 1) {
          addPoint();
        } else {
          setState(() => _fallen = -1);
          loseHeart('The chain stopped');
        }
        return;
      }
      HapticFeedback.selectionClick();
      setState(() => _fallen = next.first);
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF334155), Color(0xFF0F172A)]),
        Column(children: [
          arcadeTopBar('Tap spots to place dominoes (max 1 gap) · ${_placed.length}/$_budget', hearts: hearts),
          Expanded(
            child: Center(
              child: Wrap(alignment: WrapAlignment.center, runSpacing: 18, children: [
                for (var i = 0; i < _len; i++)
                  GestureDetector(
                    onTap: () => _toggle(i),
                    child: Container(
                      width: 36,
                      height: 60,
                      alignment: Alignment.bottomCenter,
                      child: _rocks.contains(i)
                          ? const Text('🪨', style: TextStyle(fontSize: 24))
                          : i == _len - 1 && !_placed.contains(i)
                              ? const Text('🔔', style: TextStyle(fontSize: 24))
                              : _placed.contains(i)
                                  ? Transform.rotate(
                                      angle: _fallen >= i ? 1.2 : 0,
                                      alignment: Alignment.bottomRight,
                                      child: Container(width: 14, height: 46, decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(3), border: Border.all(color: Colors.black54))),
                                    )
                                  : Container(width: 14, height: 4, color: Colors.white24),
                    ),
                  ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 0, 18, 16),
            child: SizedBox(width: double.infinity, height: 52, child: FilledButton(onPressed: _push, child: const Text('PUSH 👉', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18)))),
          ),
        ]),
      ]);
}

// ── 74 Wrecking Ball ───────────────────────────────────────────────────────
class WreckingBallGame extends StatefulWidget {
  const WreckingBallGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<WreckingBallGame> createState() => _WreckingBallState();
}

class _WreckingBallState extends State<WreckingBallGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 4, 14);
  double _t = 0;
  Offset? _ball, _vel;
  late Offset _target;
  String _msg = '';
  static const _pivot = Offset(0.3, 0.08);
  late final double _len = 0.32;

  @override
  void initState() {
    super.initState();
    _newTarget();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _t += dt * lvD(widget.level, 1.6, 2.6);
      if (_ball != null) {
        _vel = _vel! + const Offset(0, 1.6) * dt;
        _ball = _ball! + _vel! * dt;
        if ((_ball! - _target).distance < 0.07) {
          _ball = null;
          _msg = 'SMASH!';
          if (addPoint()) return;
          _newTarget();
        } else if (_ball!.dy > 1.05 || _ball!.dx > 1.1) {
          _ball = null;
          _msg = 'Missed';
          if (loseHeart('The ball missed')) return;
        }
      }
      setState(() {});
    });
  }

  void _newTarget() => _target = Offset(0.55 + args.rng.nextDouble() * 0.38, 0.5 + args.rng.nextDouble() * lvD(widget.level, 0.15, 0.4));

  double get _angle => math.sin(_t) * 1.1;

  void _release() {
    if (ended || _ball != null) return;
    final a = _angle;
    _ball = _pivot + Offset(math.sin(a), math.cos(a)) * _len;
    final angVel = math.cos(_t) * 1.1 * lvD(widget.level, 1.6, 2.6);
    _vel = Offset(math.cos(a), -math.sin(a)) * _len * angVel * 1.6;
    _msg = '';
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final bob = _ball ?? _pivot + Offset(math.sin(_angle), math.cos(_angle)) * _len;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => _release(),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFFE0F2FE)]),
            Positioned(left: 0, right: 0, bottom: 0, height: h * 0.08, child: Container(color: const Color(0xFF65A30D))),
            Positioned.fill(child: CustomPaint(painter: _CablePainter(Offset(_pivot.dx * w, _pivot.dy * h), _ball == null ? Offset(bob.dx * w, bob.dy * h) : null))),
            Positioned(left: _target.dx * w - 26, top: _target.dy * h - 26, child: emojiText('🏚️', 52)),
            Positioned(left: bob.dx * w - 20, top: bob.dy * h - 20, child: Container(width: 40, height: 40, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Color(0xFF9CA3AF), Color(0xFF111827)])))),
            if (_msg.isNotEmpty) Positioned(left: 0, right: 0, top: h * 0.3, child: Text(_msg, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF1E3A8A), fontSize: 30, fontWeight: FontWeight.w900))),
            arcadeTopBar('Tap to let go · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

class _CablePainter extends CustomPainter {
  _CablePainter(this.a, this.b);
  final Offset a;
  final Offset? b;
  @override
  void paint(Canvas canvas, Size s) {
    canvas.drawRect(Rect.fromLTWH(0, a.dy - 6, a.dx + 30, 12), Paint()..color = const Color(0xFFF59E0B));
    if (b != null) {
      canvas.drawLine(a, b!, Paint()
        ..color = const Color(0xFF111827)
        ..strokeWidth = 3);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 75 Gravity Sling ───────────────────────────────────────────────────────
class GravitySlingGame extends StatefulWidget {
  const GravitySlingGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<GravitySlingGame> createState() => _GravitySlingState();
}

class _GravitySlingState extends State<GravitySlingGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 8);
  late List<(Offset, double)> _planets; // pos, mass
  late Offset _ring;
  Offset? _probe, _v, _dragFrom, _dragTo;
  final _trail = <Offset>[];
  static const _launch = Offset(0.12, 0.85);

  @override
  void initState() {
    super.initState();
    _setup();
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_probe != null) {
        for (var k = 0; k < 4; k++) {
          var acc = Offset.zero;
          for (final (p, m) in _planets) {
            final d = p - _probe!;
            final dist = math.max(0.04, d.distance);
            acc += d / dist * (m / (dist * dist));
          }
          _v = _v! + acc * (dt / 4);
          _probe = _probe! + _v! * (dt / 4);
          if (_planets.any((pl) => (pl.$1 - _probe!).distance < 0.045)) {
            _miss('Crashed into a planet');
            return;
          }
        }
        _trail.add(_probe!);
        if (_trail.length > 80) _trail.removeAt(0);
        if ((_probe! - _ring).distance < lvD(widget.level, 0.07, 0.045)) {
          _probe = null;
          if (addPoint()) return;
          _setup();
        } else if (_probe!.dx < -0.1 || _probe!.dx > 1.1 || _probe!.dy < -0.1 || _probe!.dy > 1.1) {
          _miss('Lost in space');
          return;
        }
      }
      setState(() {});
    });
  }

  void _miss(String why) {
    _probe = null;
    if (loseHeart(why)) return;
    setState(() {});
  }

  void _setup() {
    final r = args.rng;
    final n = lvI(widget.level, 1, 3);
    _planets = [for (var i = 0; i < n; i++) (Offset(0.3 + r.nextDouble() * 0.45, 0.3 + r.nextDouble() * 0.4), 0.004 + r.nextDouble() * lvD(widget.level, 0.004, 0.012))];
    _ring = Offset(0.65 + r.nextDouble() * 0.25, 0.1 + r.nextDouble() * 0.25);
    _trail.clear();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanStart: (d) => _dragFrom = d.localPosition,
          onPanUpdate: (d) => setState(() => _dragTo = d.localPosition),
          onPanEnd: (_) {
            if (_probe == null && !ended && _dragFrom != null && _dragTo != null) {
              final pull = (_dragFrom! - _dragTo!);
              _probe = _launch;
              _v = Offset(pull.dx / w, pull.dy / h) * 2.2;
              _trail.clear();
            }
            setState(() => _dragFrom = _dragTo = null);
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF020617), Color(0xFF1E1B4B)]),
            Positioned.fill(child: CustomPaint(painter: _TrailPainter([for (final t in _trail) Offset(t.dx * w, t.dy * h)]))),
            for (final (p, m) in _planets) Positioned(left: p.dx * w - 24, top: p.dy * h - 24, child: emojiText(m > 0.01 ? '🪐' : '🌑', 48)),
            Positioned(left: _ring.dx * w - 24, top: _ring.dy * h - 24, child: Container(width: 48, height: 48, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: const Color(0xFF4ADE80), width: 4)))),
            Positioned(left: _launch.dx * w - 18, top: _launch.dy * h - 18, child: emojiText('🌍', 36)),
            if (_probe != null) Positioned(left: _probe!.dx * w - 10, top: _probe!.dy * h - 10, child: emojiText('🛰️', 20)),
            if (_dragFrom != null && _dragTo != null) Positioned.fill(child: CustomPaint(painter: _TrailPainter([Offset(_launch.dx * w, _launch.dy * h), Offset(_launch.dx * w, _launch.dy * h) + (_dragFrom! - _dragTo!)]))),
            arcadeTopBar('Pull back and let go · reach the green ring · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

class _TrailPainter extends CustomPainter {
  _TrailPainter(this.pts);
  final List<Offset> pts;
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 1; i < pts.length; i++) {
      canvas.drawLine(pts[i - 1], pts[i], Paint()
        ..color = Colors.white.withValues(alpha: 0.2 + 0.6 * i / pts.length)
        ..strokeWidth = 2);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 76 Ice Slide ───────────────────────────────────────────────────────────
class IceSlideGame extends StatefulWidget {
  const IceSlideGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<IceSlideGame> createState() => _IceSlideState();
}

class _IceSlideState extends State<IceSlideGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 1, 3);
  late final int _n = lvI(widget.level, 6, 10);
  late Set<int> _rocks;
  late int _me, _flag, _min, _moves;

  @override
  void initState() {
    super.initState();
    startScore();
    _newPuzzle();
  }

  int _slide(int from, int dx, int dy) {
    var x = from % _n, y = from ~/ _n;
    while (true) {
      final nx = x + dx, ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= _n || ny >= _n || _rocks.contains(ny * _n + nx)) break;
      x = nx;
      y = ny;
      if (y * _n + x == _flag) break;
    }
    return y * _n + x;
  }

  int _solve(int start) {
    final d = {start: 0};
    final q = Queue<int>()..add(start);
    while (q.isNotEmpty) {
      final c = q.removeFirst();
      if (c == _flag) return d[c]!;
      for (final (dx, dy) in const [(1, 0), (-1, 0), (0, 1), (0, -1)]) {
        final n = _slide(c, dx, dy);
        if (!d.containsKey(n)) {
          d[n] = d[c]! + 1;
          q.add(n);
        }
      }
    }
    return -1;
  }

  void _newPuzzle() {
    final r = args.rng;
    final want = lvI(widget.level, 3, 9);
    var bestMin = -1;
    (Set<int>, int, int)? best;
    for (var attempt = 0; attempt < 80; attempt++) {
      _rocks = {for (var i = 0; i < _n * _n; i++) if (r.nextDouble() < 0.16) i};
      final free = [for (var i = 0; i < _n * _n; i++) if (!_rocks.contains(i)) i]..shuffle(r);
      _me = free[0];
      _flag = free[1];
      final m = _solve(_me);
      if (m > bestMin) {
        bestMin = m;
        best = ({..._rocks}, _me, _flag);
      }
      if (m >= want) break;
    }
    _rocks = best!.$1;
    _me = best.$2;
    _flag = best.$3;
    _min = math.max(1, bestMin);
    _moves = _min + lvI(widget.level, 5, 1);
  }

  void _go(int dx, int dy) {
    if (ended) return;
    setState(() {
      _me = _slide(_me, dx, dy);
      _moves--;
    });
    HapticFeedback.selectionClick();
    if (_me == _flag) {
      if (addPoint()) return;
      setState(_newPuzzle);
    } else if (_moves <= 0) {
      knockout('Out of moves');
    }
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onHorizontalDragEnd: (d) => _go((d.primaryVelocity ?? 0) > 0 ? 1 : -1, 0),
        onVerticalDragEnd: (d) => _go(0, (d.primaryVelocity ?? 0) > 0 ? 1 : -1),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
          Column(children: [
            ArcadeBanner(child: Text('Swipe — you slide till you hit a rock · moves $_moves (best $_min) · ${score + 1}/$goal')),
            Expanded(
              child: Center(
                child: AspectRatio(
                  aspectRatio: 1,
                  child: Padding(
                    padding: const EdgeInsets.all(12),
                    child: GridView.count(
                      crossAxisCount: _n,
                      physics: const NeverScrollableScrollPhysics(),
                      children: [
                        for (var i = 0; i < _n * _n; i++)
                          Container(
                            margin: const EdgeInsets.all(1),
                            decoration: BoxDecoration(color: _rocks.contains(i) ? const Color(0xFF475569) : const Color(0xFFBAE6FD), borderRadius: BorderRadius.circular(4)),
                            alignment: Alignment.center,
                            child: FittedBox(child: Padding(padding: const EdgeInsets.all(2), child: Text(i == _me ? '🐧' : (i == _flag ? '🚩' : (_rocks.contains(i) ? '🪨' : '')), style: const TextStyle(fontSize: 24)))),
                          ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                for (final (icon, dx, dy) in [(Icons.arrow_back_rounded, -1, 0), (Icons.arrow_upward_rounded, 0, -1), (Icons.arrow_downward_rounded, 0, 1), (Icons.arrow_forward_rounded, 1, 0)])
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 5),
                    child: IconButton.filled(
                      onPressed: () => _go(dx, dy),
                      icon: Icon(icon),
                      style: IconButton.styleFrom(backgroundColor: Colors.white.withValues(alpha: 0.15), foregroundColor: Colors.white, minimumSize: const Size(54, 54)),
                    ),
                  ),
              ]),
            ),
          ]),
        ]),
      );
}

// ── 77 Pendulum Drop ───────────────────────────────────────────────────────
class PendulumDropGame extends StatefulWidget {
  const PendulumDropGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<PendulumDropGame> createState() => _PendulumDropState();
}

class _PendulumDropState extends State<PendulumDropGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 5, 15);
  double _t = 0, _cart = 0.5, _cartDir = 1;
  Offset? _gift, _gv;
  static const _pivot = Offset(0.5, 0.06);
  static const _len = 0.28;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _t += dt * lvD(widget.level, 1.8, 2.8);
      _cart += _cartDir * lvD(widget.level, 0.0, 0.35) * dt;
      if (_cart > 0.85) _cartDir = -1;
      if (_cart < 0.15) _cartDir = 1;
      if (_gift != null) {
        _gv = _gv! + const Offset(0, 1.8) * dt;
        _gift = _gift! + _gv! * dt;
        if (_gift!.dy > 0.86) {
          final caught = (_gift!.dx - _cart).abs() < lvD(widget.level, 0.13, 0.07);
          _gift = null;
          if (caught) {
            if (addPoint()) return;
          } else if (loseHeart('Missed the cart')) {
            return;
          }
        }
      }
      setState(() {});
    });
  }

  double get _angle => math.sin(_t) * 1.0;

  void _cut() {
    if (ended || _gift != null) return;
    final a = _angle;
    _gift = _pivot + Offset(math.sin(a), math.cos(a)) * _len;
    final angVel = math.cos(_t) * lvD(widget.level, 1.8, 2.8);
    _gv = Offset(math.cos(a), -math.sin(a)) * _len * angVel;
    HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final hang = _pivot + Offset(math.sin(_angle), math.cos(_angle)) * _len;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => _cut(),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF581C87), Color(0xFF1E1B4B)]),
            Positioned.fill(child: CustomPaint(painter: _CablePainter(Offset(_pivot.dx * w, _pivot.dy * h), _gift == null ? Offset(hang.dx * w, hang.dy * h) : null))),
            if (_gift == null) Positioned(left: hang.dx * w - 20, top: hang.dy * h - 20, child: emojiText('🎁', 40)),
            if (_gift != null) Positioned(left: _gift!.dx * w - 20, top: _gift!.dy * h - 20, child: emojiText('🎁', 40)),
            Positioned(left: _cart * w - 36, top: 0.86 * h, child: emojiText('🛒', 72)),
            arcadeTopBar('Tap to cut the rope · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

// ── 78 Rope Cutter ─────────────────────────────────────────────────────────
class RopeCutterGame extends StatefulWidget {
  const RopeCutterGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<RopeCutterGame> createState() => _RopeCutterState();
}

class _RopeCutterState extends State<RopeCutterGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 10);
  late List<(Offset, double)> _ropes; // anchor, length
  late Offset _candy, _prev;
  late double _mouth;
  double _mouthDir = 1;
  Offset? _swipe;

  @override
  void initState() {
    super.initState();
    _setup();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _mouth += _mouthDir * lvD(widget.level, 0.0, 0.25) * dt;
      if (_mouth > 0.85) _mouthDir = -1;
      if (_mouth < 0.15) _mouthDir = 1;
      // Verlet step with rope constraints.
      final vel = (_candy - _prev) * 0.995;
      _prev = _candy;
      _candy = _candy + vel + const Offset(0, 1.4) * dt * dt;
      for (var k = 0; k < 4; k++) {
        for (final (a, len) in _ropes) {
          final d = _candy - a;
          if (d.distance > len) _candy = a + d / d.distance * len;
        }
      }
      if (_ropes.isEmpty && _candy.dy > 0.86) {
        final ok = (_candy.dx - _mouth).abs() < lvD(widget.level, 0.12, 0.07);
        if (ok) {
          if (addPoint()) return;
        } else if (loseHeart('The candy missed')) {
          return;
        }
        _setup();
      }
      setState(() {});
    });
  }

  void _setup() {
    final r = args.rng;
    final n = lvI(widget.level, 1, 3);
    final start = Offset(0.3 + r.nextDouble() * 0.4, 0.35);
    _ropes = [for (var i = 0; i < n; i++) (Offset(0.1 + r.nextDouble() * 0.8, 0.05), 0)];
    _ropes = [for (final (a, _) in _ropes) (a, (start - a).distance + 0.02 + r.nextDouble() * 0.08)];
    _candy = start + Offset((r.nextDouble() - 0.5) * 0.05, 0);
    _prev = _candy - Offset((r.nextDouble() - 0.5) * 0.02, 0);
    _mouth = 0.2 + r.nextDouble() * 0.6;
  }

  bool _segCross(Offset a, Offset b, Offset c, Offset d) {
    double cross(Offset o, Offset p, Offset q) => (p.dx - o.dx) * (q.dy - o.dy) - (p.dy - o.dy) * (q.dx - o.dx);
    return (cross(a, b, c) * cross(a, b, d) < 0) && (cross(c, d, a) * cross(c, d, b) < 0);
  }

  void _cutAlong(Offset from, Offset to) {
    final before = _ropes.length;
    _ropes = _ropes.where((r) => !_segCross(from, to, r.$1, _candy)).toList();
    if (_ropes.length < before) HapticFeedback.selectionClick();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        Offset n(Offset p) => Offset(p.dx / w, p.dy / h);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanStart: (d) => _swipe = n(d.localPosition),
          onPanUpdate: (d) {
            final p = n(d.localPosition);
            if (_swipe != null) _cutAlong(_swipe!, p);
            _swipe = p;
          },
          onPanEnd: (_) => _swipe = null,
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFFBBF7D0), Color(0xFF22C55E)]),
            Positioned.fill(child: CustomPaint(painter: _RopePainter([for (final (a, _) in _ropes) Offset(a.dx * w, a.dy * h)], Offset(_candy.dx * w, _candy.dy * h)))),
            Positioned(left: _candy.dx * w - 18, top: _candy.dy * h - 18, child: emojiText('🍬', 36)),
            Positioned(left: _mouth * w - 30, top: 0.86 * h - 10, child: emojiText('🐸', 60)),
            arcadeTopBar('Swipe across ropes to cut · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

class _RopePainter extends CustomPainter {
  _RopePainter(this.anchors, this.candy);
  final List<Offset> anchors;
  final Offset candy;
  @override
  void paint(Canvas canvas, Size s) {
    for (final a in anchors) {
      canvas.drawLine(a, candy, Paint()
        ..color = const Color(0xFF78350F)
        ..strokeWidth = 3);
      canvas.drawCircle(a, 7, Paint()..color = const Color(0xFF374151));
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 79 Trampoline Rescue ───────────────────────────────────────────────────
class _Jumper {
  _Jumper(this.vx);
  double x = 0.12, y = 0.25, vy = 0;
  final double vx;
  int bounces = 0;
}

class TrampolineGame extends StatefulWidget {
  const TrampolineGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<TrampolineGame> createState() => _TrampolineState();
}

class _TrampolineState extends State<TrampolineGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 6, 25);
  final _jumpers = <_Jumper>[];
  double _tramp = 0.3, _spawn = 0.5;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 3.2, 1.3);
        _jumpers.add(_Jumper(lvD(widget.level, 0.1, 0.15) * (0.85 + args.rng.nextDouble() * 0.3)));
      }
      for (final j in List.of(_jumpers)) {
        j.vy += 1.3 * dt;
        j.x += j.vx * dt;
        j.y += j.vy * dt;
        if (j.y > 0.8 && j.vy > 0) {
          if ((j.x - _tramp).abs() < 0.11) {
            j.vy = -1.05;
            j.y = 0.8;
            j.bounces++;
            HapticFeedback.selectionClick();
          } else {
            _jumpers.remove(j);
            if (loseHeart('Someone hit the ground')) return;
            continue;
          }
        }
        if (j.x > 0.9) {
          _jumpers.remove(j);
          if (addPoint()) return;
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        void move(Offset p) => _tramp = (p.dx / w).clamp(0.15, 0.85);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => move(d.localPosition),
          onPanUpdate: (d) => move(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFFE0F2FE)]),
            Positioned(left: 0, top: h * 0.15, child: Column(children: [emojiText('🔥', 30), emojiText('🏢', 80)])),
            Positioned(right: 4, top: h * 0.72, child: emojiText('🚑', 56)),
            Positioned(left: 0, right: 0, bottom: 0, height: h * 0.1, child: Container(color: const Color(0xFF9CA3AF))),
            for (final j in _jumpers) Positioned(left: j.x * w - 18, top: j.y * h - 36, child: Transform.rotate(angle: j.y * 6, child: emojiText('🧍', 36))),
            Positioned(left: _tramp * w - 50, top: 0.8 * h, child: Container(width: 100, height: 14, decoration: BoxDecoration(color: const Color(0xFF2563EB), borderRadius: BorderRadius.circular(7), border: Border.all(color: Colors.white, width: 2)))),
            arcadeTopBar('Drag the trampoline · saved $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// ── 80 Seesaw Launch ───────────────────────────────────────────────────────
class SeesawLaunchGame extends StatefulWidget {
  const SeesawLaunchGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<SeesawLaunchGame> createState() => _SeesawLaunchState();
}

class _SeesawLaunchState extends State<SeesawLaunchGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 10);
  double _height = 0; // weight drop height 0..1
  bool _holding = false;
  Offset? _flyer, _fv;
  late double _platX, _platY;
  late final double _platW = lvD(widget.level, 0.2, 0.09);
  String _msg = '';

  @override
  void initState() {
    super.initState();
    _newPlatform();
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_holding) _height = math.min(1, _height + dt * lvD(widget.level, 0.5, 0.9));
      if (_flyer != null) {
        _fv = _fv! + const Offset(0, 1.5) * dt;
        _flyer = _flyer! + _fv! * dt;
        if (_fv!.dy > 0 && _flyer!.dy >= _platY && _flyer!.dy < _platY + 0.05 && (_flyer!.dx - _platX).abs() < _platW / 2) {
          _flyer = null;
          _msg = 'STUCK THE LANDING!';
          if (addPoint()) return;
          _newPlatform();
        } else if (_flyer!.dy > 1.05 || _flyer!.dx > 1.1) {
          _flyer = null;
          _msg = 'Missed';
          if (loseHeart('Missed the platform')) return;
        }
      }
      setState(() {});
    });
  }

  void _newPlatform() {
    _platX = 0.45 + args.rng.nextDouble() * 0.45;
    _platY = 0.35 + args.rng.nextDouble() * 0.35;
  }

  void _release() {
    if (!_holding) return;
    _holding = false;
    final v = 0.6 + _height * 1.6;
    _flyer = const Offset(0.12, 0.8);
    _fv = Offset(math.cos(-1.1), math.sin(-1.1)) * v;
    _height = 0;
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (_) {
            if (_flyer == null && !ended) {
              _holding = true;
              _msg = '';
            }
          },
          onPointerUp: (_) => _release(),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF99F6E4), Color(0xFF134E4A)]),
            Positioned(left: (_platX - _platW / 2) * w, top: _platY * h, child: Container(width: _platW * w, height: 14, decoration: BoxDecoration(color: const Color(0xFFFBBF24), borderRadius: BorderRadius.circular(7)))),
            Positioned(left: w * 0.05, top: h * 0.82, child: Transform.rotate(angle: _holding ? 0 : -0.2, child: Container(width: w * 0.3, height: 10, color: const Color(0xFF78350F)))),
            Positioned(left: w * 0.27, top: h * (0.78 - _height * 0.5), child: emojiText('🏋️', 32)),
            if (_flyer == null) Positioned(left: w * 0.08, top: h * 0.74, child: emojiText('🤸', 32)),
            if (_flyer != null) Positioned(left: _flyer!.dx * w - 16, top: _flyer!.dy * h - 16, child: emojiText('🤸', 32)),
            if (_msg.isNotEmpty) Positioned(left: 0, right: 0, top: h * 0.2, child: Text(_msg, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900))),
            arcadeTopBar('Hold to lift the weight, let go to launch · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}
