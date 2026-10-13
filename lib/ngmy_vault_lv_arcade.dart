import 'dart:collection';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 41–50: arcade action.
final kVaultArcadeGames = <VaultLvDef>[
  VaultLvDef(id: 'v_tower_defense', title: 'Tower Defense', tagline: 'Build towers to stop every wave.', emoji: '🏰', icon: Icons.fort_rounded, colors: const [Color(0xFF84CC16), Color(0xFF1A2E05)], tag: 'ARCADE', build: (a, l) => TowerDefenseGame(args: a, level: l)),
  VaultLvDef(id: 'v_juggler', title: 'Juggler', tagline: 'Tap the balls to keep them all in the air.', emoji: '🤹', icon: Icons.sports_handball_rounded, colors: const [Color(0xFFF472B6), Color(0xFF4C0519)], tag: 'ARCADE', build: (a, l) => JugglerGame(args: a, level: l)),
  VaultLvDef(id: 'v_rhythm', title: 'Rhythm Arrows', tagline: 'Hit each arrow as it reaches the line.', emoji: '🎵', icon: Icons.music_note_rounded, colors: const [Color(0xFF22D3EE), Color(0xFF312E81)], tag: 'ARCADE', build: (a, l) => RhythmArrowsGame(args: a, level: l)),
  VaultLvDef(id: 'v_wall_jump', title: 'Ninja Climb', tagline: 'Jump wall to wall — dodge the spikes.', emoji: '🥷', icon: Icons.swap_horiz_rounded, colors: const [Color(0xFF475569), Color(0xFF0F172A)], tag: 'ARCADE', build: (a, l) => WallJumpGame(args: a, level: l)),
  VaultLvDef(id: 'v_cave_copter', title: 'Cave Copter', tagline: 'Hold to rise, let go to fall — don’t touch the cave.', emoji: '🚁', icon: Icons.airplanemode_active_rounded, colors: const [Color(0xFFF59E0B), Color(0xFF292524)], tag: 'ARCADE', build: (a, l) => CaveCopterGame(args: a, level: l)),
  VaultLvDef(id: 'v_ski', title: 'Ski Slalom', tagline: 'Steer through every gate down the mountain.', emoji: '⛷️', icon: Icons.downhill_skiing_rounded, colors: const [Color(0xFF38BDF8), Color(0xFFE0F2FE)], tag: 'ARCADE', build: (a, l) => SkiSlalomGame(args: a, level: l)),
  VaultLvDef(id: 'v_clay', title: 'Clay Shooter', tagline: 'Shoot the flying clay discs.', emoji: '🥏', icon: Icons.gps_fixed_rounded, colors: const [Color(0xFFF97316), Color(0xFF7DD3FC)], tag: 'ARCADE', build: (a, l) => ClayShooterGame(args: a, level: l)),
  VaultLvDef(id: 'v_invaders', title: 'Star Invaders', tagline: 'Blast the invading fleet before it lands.', emoji: '👾', icon: Icons.rocket_rounded, colors: const [Color(0xFFA855F7), Color(0xFF020617)], tag: 'ARCADE', build: (a, l) => InvadersGame(args: a, level: l)),
  VaultLvDef(id: 'v_road_cross', title: 'Road Hopper', tagline: 'Hop across the busy road safely.', emoji: '🐸', icon: Icons.add_road_rounded, colors: const [Color(0xFF22C55E), Color(0xFF374151)], tag: 'ARCADE', build: (a, l) => RoadHopperGame(args: a, level: l)),
  VaultLvDef(id: 'v_muncher', title: 'Maze Muncher', tagline: 'Eat every dot — don’t get caught.', emoji: '🟡', icon: Icons.blur_circular_rounded, colors: const [Color(0xFFFACC15), Color(0xFF1E3A8A)], tag: 'ARCADE', build: (a, l) => MazeMuncherGame(args: a, level: l)),
];

// ── 41 Tower Defense ───────────────────────────────────────────────────────
const _tdPath = [Offset(-0.05, 0.18), Offset(0.78, 0.18), Offset(0.78, 0.42), Offset(0.2, 0.42), Offset(0.2, 0.68), Offset(0.85, 0.68), Offset(0.85, 1.05)];
const _tdSpots = [Offset(0.5, 0.3), Offset(0.9, 0.3), Offset(0.08, 0.3), Offset(0.5, 0.55), Offset(0.08, 0.55), Offset(0.9, 0.55), Offset(0.5, 0.8), Offset(0.2, 0.84)];

class _Creep {
  _Creep(this.hp, this.speed);
  double d = 0; // distance along the path (0..1)
  int hp;
  final double speed;
}

class TowerDefenseGame extends StatefulWidget {
  const TowerDefenseGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<TowerDefenseGame> createState() => _TowerDefenseState();
}

class _TowerDefenseState extends State<TowerDefenseGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _total;
  late final int _total = lvI(widget.level, 8, 34);
  late final int _hp = lvI(widget.level, 2, 6);
  late int _gold = lvI(widget.level, 110, 70);
  final _creeps = <_Creep>[];
  final _towers = <int, double>{}; // spot → cooldown
  final _shots = <(Offset, Offset, double)>[];
  int _spawned = 0, _resolved = 0;
  double _spawn = 1.5;
  late final double _len;

  @override
  void initState() {
    super.initState();
    var l = 0.0;
    for (var i = 1; i < _tdPath.length; i++) {
      l += (_tdPath[i] - _tdPath[i - 1]).distance;
    }
    _len = l;
    hearts = 3;
    startScore();
    startLoop(_frame);
  }

  Offset _at(double d) {
    var left = d * _len;
    for (var i = 1; i < _tdPath.length; i++) {
      final seg = (_tdPath[i] - _tdPath[i - 1]).distance;
      if (left <= seg) return Offset.lerp(_tdPath[i - 1], _tdPath[i], left / seg)!;
      left -= seg;
    }
    return _tdPath.last;
  }

  void _resolveOne() {
    _resolved++;
    args.onProgress(_resolved, _total);
    if (_resolved >= _total && !ended) {
      ended = true;
      onEnd();
      args.onComplete();
    }
  }

  void _frame(double dt) {
    _spawn -= dt;
    if (_spawn <= 0 && _spawned < _total) {
      _spawn = lvD(widget.level, 1.7, 1.0);
      _creeps.add(_Creep(_hp, lvD(widget.level, 0.055, 0.09) * (0.9 + args.rng.nextDouble() * 0.2)));
      _spawned++;
    }
    for (final c in _creeps) {
      c.d += c.speed * dt;
    }
    final leaked = _creeps.where((c) => c.d >= 1).toList();
    for (final c in leaked) {
      _creeps.remove(c);
      if (loseHeart('Enemies broke through')) return;
      _resolveOne();
      if (ended) return;
    }
    for (final e in _towers.entries.toList()) {
      final cd = e.value - dt;
      if (cd > 0) {
        _towers[e.key] = cd;
        continue;
      }
      final pos = _tdSpots[e.key];
      _Creep? target;
      for (final c in _creeps) {
        if ((_at(c.d) - pos).distance < 0.3 && (target == null || c.d > target.d)) target = c;
      }
      if (target != null) {
        target.hp--;
        _shots.add((pos, _at(target.d), 0.15));
        _towers[e.key] = 0.45;
        if (target.hp <= 0) {
          _creeps.remove(target);
          _gold += 15;
          score++;
          HapticFeedback.selectionClick();
          _resolveOne();
          if (ended) return;
        }
      } else {
        _towers[e.key] = 0;
      }
    }
    for (var i = 0; i < _shots.length; i++) {
      final s = _shots[i];
      _shots[i] = (s.$1, s.$2, s.$3 - dt);
    }
    _shots.removeWhere((s) => s.$3 <= 0);
    setState(() {});
  }

  void _build(int spot) {
    if (ended || _towers.containsKey(spot) || _gold < 50) return;
    setState(() {
      _gold -= 50;
      _towers[spot] = 0;
    });
    HapticFeedback.mediumImpact();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        Offset px(Offset o) => Offset(o.dx * w, o.dy * h);
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF3F6212), Color(0xFF1A2E05)]),
          Positioned.fill(child: CustomPaint(painter: _TdPainter(w, h, _shots))),
          for (var i = 0; i < _tdSpots.length; i++)
            Positioned(
              left: px(_tdSpots[i]).dx - 22,
              top: px(_tdSpots[i]).dy - 22,
              child: GestureDetector(
                onTap: () => _build(i),
                child: Container(
                  width: 44,
                  height: 44,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: _towers.containsKey(i) ? const Color(0xFF78350F) : Colors.white.withValues(alpha: 0.15),
                    border: Border.all(color: _gold >= 50 || _towers.containsKey(i) ? const Color(0xFFFDE68A) : Colors.white24, width: 2),
                  ),
                  child: _towers.containsKey(i) ? emojiText('🏹', 24) : const Text('+50', style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900)),
                ),
              ),
            ),
          for (final cr in _creeps)
            Positioned(
              left: px(_at(cr.d)).dx - 15,
              top: px(_at(cr.d)).dy - 18,
              child: Column(children: [
                Container(width: 26, height: 3, color: Colors.black45, alignment: Alignment.centerLeft, child: FractionallySizedBox(widthFactor: cr.hp / _hp, child: Container(color: const Color(0xFFEF4444)))),
                emojiText('👾', 26),
              ]),
            ),
          arcadeTopBar('🪙 $_gold · tap + to build · ${_resolved}/$_total', hearts: hearts),
        ]);
      });
}

class _TdPainter extends CustomPainter {
  _TdPainter(this.w, this.h, this.shots);
  final double w, h;
  final List<(Offset, Offset, double)> shots;
  @override
  void paint(Canvas canvas, Size s) {
    final path = Path()..moveTo(_tdPath.first.dx * w, _tdPath.first.dy * h);
    for (final p in _tdPath.skip(1)) {
      path.lineTo(p.dx * w, p.dy * h);
    }
    canvas.drawPath(path, Paint()
      ..color = const Color(0xFFA16207)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 34
      ..strokeJoin = StrokeJoin.round);
    canvas.drawPath(path, Paint()
      ..color = const Color(0xFFD6A35C)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 26
      ..strokeJoin = StrokeJoin.round);
    for (final sh in shots) {
      canvas.drawLine(Offset(sh.$1.dx * w, sh.$1.dy * h), Offset(sh.$2.dx * w, sh.$2.dy * h), Paint()
        ..color = const Color(0xFFFDE68A)
        ..strokeWidth = 2);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 42 Juggler ─────────────────────────────────────────────────────────────
class _Ball {
  _Ball(this.x, this.y, this.vx, this.vy, this.e);
  double x, y, vx, vy;
  final String e;
}

class JugglerGame extends StatefulWidget {
  const JugglerGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<JugglerGame> createState() => _JugglerState();
}

class _JugglerState extends State<JugglerGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 20, 45);
  final _balls = <_Ball>[];
  Size _size = Size.zero;
  double _t = 0;
  late final double _g = lvD(widget.level, 900, 1500);
  static const _faces = ['⚽', '🏀', '🎾', '🏐', '⚾', '🎱'];

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      _t += dt;
      final want = math.min(lvI(widget.level, 1, 5), 1 + (_t / 6).floor());
      while (_balls.length < want) {
        _balls.add(_Ball(_size.width * (0.2 + args.rng.nextDouble() * 0.6), -30, 0, 100, _faces[_balls.length % _faces.length]));
      }
      for (final b in _balls) {
        b.vy += _g * dt;
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.x < 24 || b.x > _size.width - 24) b.vx = -b.vx;
        b.x = b.x.clamp(24.0, _size.width - 24);
      }
      final dropped = _balls.where((b) => b.y > _size.height + 30).toList();
      for (final b in dropped) {
        _balls.remove(b);
        if (loseHeart('Dropped a ball')) return;
      }
      if (_t.floor() > score) {
        if (addPoint()) return;
      }
      setState(() {});
    });
  }

  void _tap(Offset p) {
    if (ended) return;
    for (final b in _balls) {
      if ((Offset(b.x, b.y) - p).distance < 60 && b.vy > -200) {
        b.vy = -lvD(widget.level, 720, 900);
        b.vx = (b.x - p.dx) * 6 + (args.rng.nextDouble() - 0.5) * lvD(widget.level, 80, 260);
        HapticFeedback.selectionClick();
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => _tap(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF831843), Color(0xFF1F0612)]),
            for (final b in _balls) Positioned(left: b.x - 26, top: b.y - 26, child: emojiText(b.e, 52)),
            arcadeTopBar('Keep them up · ${score}s / ${goal}s', hearts: hearts),
          ]),
        );
      });
}

// ── 43 Rhythm Arrows ───────────────────────────────────────────────────────
class _Note {
  _Note(this.dir, this.y);
  final int dir; // 0 left 1 up 2 down 3 right
  double y;
  bool done = false;
}

class RhythmArrowsGame extends StatefulWidget {
  const RhythmArrowsGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<RhythmArrowsGame> createState() => _RhythmArrowsState();
}

class _RhythmArrowsState extends State<RhythmArrowsGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 15, 50);
  static const _icons = [Icons.arrow_back_rounded, Icons.arrow_upward_rounded, Icons.arrow_downward_rounded, Icons.arrow_forward_rounded];
  static const _cols = [Color(0xFFF472B6), Color(0xFF22D3EE), Color(0xFF4ADE80), Color(0xFFFACC15)];
  final _notes = <_Note>[];
  double _spawn = 0.5;
  String _flash = '';
  double _flashT = 0;
  static const _line = 0.16;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 0.95, 0.38) * (0.7 + args.rng.nextDouble() * 0.6);
        _notes.add(_Note(args.rng.nextInt(4), 1.05));
      }
      if (_flashT > 0) _flashT -= dt;
      final speed = lvD(widget.level, 0.32, 0.7);
      for (final n in _notes) {
        n.y -= speed * dt;
      }
      final missed = _notes.where((n) => !n.done && n.y < _line - 0.08).toList();
      for (final n in missed) {
        n.done = true;
        _flash = 'MISS';
        _flashT = 0.4;
        if (loseHeart('Missed the beat')) return;
      }
      _notes.removeWhere((n) => n.done || n.y < -0.1);
      setState(() {});
    });
  }

  void _hit(int dir) {
    if (ended) return;
    _Note? best;
    for (final n in _notes) {
      if (!n.done && n.dir == dir && (n.y - _line).abs() < 0.07 && (best == null || n.y < best.y)) best = n;
    }
    if (best == null) {
      _flash = 'OOPS';
      _flashT = 0.3;
      return;
    }
    best.done = true;
    _flash = (best.y - _line).abs() < 0.025 ? 'PERFECT' : 'GOOD';
    _flashT = 0.4;
    addPoint();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final lane = w / 4;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onHorizontalDragEnd: (d) => _hit((d.primaryVelocity ?? 0) < 0 ? 0 : 3),
          onVerticalDragEnd: (d) => _hit((d.primaryVelocity ?? 0) < 0 ? 1 : 2),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF312E81), Color(0xFF0F0A2E)]),
            Positioned(left: 0, right: 0, top: _line * h - 30, height: 60, child: Container(color: Colors.white.withValues(alpha: 0.08))),
            for (var i = 0; i < 4; i++)
              Positioned(left: i * lane + lane / 2 - 24, top: _line * h - 24, child: Icon(_icons[i], size: 48, color: _cols[i].withValues(alpha: 0.35))),
            for (final n in _notes)
              Positioned(
                left: n.dir * lane + lane / 2 - 26,
                top: n.y * h - 26,
                child: Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(shape: BoxShape.circle, color: _cols[n.dir], boxShadow: [BoxShadow(color: _cols[n.dir], blurRadius: 14)]),
                  child: Icon(_icons[n.dir], color: Colors.black87, size: 32),
                ),
              ),
            if (_flashT > 0) Positioned(left: 0, right: 0, top: h * 0.32, child: Text(_flash, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 30, fontWeight: FontWeight.w900))),
            Positioned(
              left: 0,
              right: 0,
              bottom: 10,
              child: Row(children: [
                for (var i = 0; i < 4; i++)
                  Expanded(
                    child: GestureDetector(
                      onTapDown: (_) => _hit(i),
                      child: Container(
                        height: 62,
                        margin: const EdgeInsets.symmetric(horizontal: 4),
                        decoration: BoxDecoration(color: _cols[i].withValues(alpha: 0.25), borderRadius: BorderRadius.circular(14), border: Border.all(color: _cols[i])),
                        child: Icon(_icons[i], color: Colors.white, size: 30),
                      ),
                    ),
                  ),
              ]),
            ),
            arcadeTopBar('Hit the arrows on the line · $score/$goal', hearts: hearts, bottom: false),
          ]),
        );
      });
}

// ── 44 Ninja Climb ─────────────────────────────────────────────────────────
class WallJumpGame extends StatefulWidget {
  const WallJumpGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<WallJumpGame> createState() => _WallJumpState();
}

class _WallJumpState extends State<WallJumpGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 25, 80);
  final _spikes = <(bool, double)>[]; // (right wall?, y 0..1 from top)
  bool _right = false;
  double _jump = 1; // 0..1 jump animation progress
  double _spawn = 0.8, _inv = 0, _climbed = 0;
  static const _ninjaY = 0.72;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      final speed = lvD(widget.level, 0.28, 0.55);
      _climbed += speed * dt * 10;
      if (_climbed.floor() > score) {
        if (addPoint()) return;
      }
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 1.0, 0.45) * (0.7 + args.rng.nextDouble() * 0.6);
        _spikes.add((args.rng.nextBool(), -0.08));
      }
      for (var i = 0; i < _spikes.length; i++) {
        _spikes[i] = (_spikes[i].$1, _spikes[i].$2 + speed * dt);
      }
      _spikes.removeWhere((s) => s.$2 > 1.1);
      if (_jump < 1) _jump = math.min(1, _jump + dt * 6);
      if (_inv > 0) _inv -= dt;
      if (_jump >= 1 && _inv <= 0) {
        for (final s in _spikes) {
          if (s.$1 == _right && (s.$2 - _ninjaY).abs() < 0.06) {
            _inv = 1.0;
            if (loseHeart('Hit the spikes')) return;
            break;
          }
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final wallW = 34.0;
        final x = _right ? w - wallW - 40 : wallW;
        final from = _right ? wallW : w - wallW - 40;
        final nx = from + (x - from) * Curves.easeOut.transform(_jump);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) {
            if (ended || _jump < 1) return;
            setState(() {
              _right = !_right;
              _jump = 0;
            });
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF1E293B), Color(0xFF020617)]),
            Positioned(left: 0, top: 0, bottom: 0, width: wallW, child: Container(color: const Color(0xFF334155))),
            Positioned(right: 0, top: 0, bottom: 0, width: wallW, child: Container(color: const Color(0xFF334155))),
            for (final s in _spikes)
              Positioned(
                left: s.$1 ? null : wallW,
                right: s.$1 ? wallW : null,
                top: s.$2 * h - 18,
                child: Transform.flip(flipX: s.$1, child: emojiText('🔺', 34)),
              ),
            Positioned(left: nx, top: _ninjaY * h - 22 - math.sin(_jump * math.pi) * 30, child: Opacity(opacity: _inv > 0 && (_inv * 10).floor().isEven ? 0.3 : 1, child: emojiText('🥷', 40))),
            arcadeTopBar('Tap to jump · ${score}m / ${goal}m', hearts: hearts),
          ]),
        );
      });
}

// ── 45 Cave Copter ─────────────────────────────────────────────────────────
class CaveCopterGame extends StatefulWidget {
  const CaveCopterGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<CaveCopterGame> createState() => _CaveCopterState();
}

class _CaveCopterState extends State<CaveCopterGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 30, 90);
  final _cols = <(double, double)>[]; // (top, bottom) as 0..1 of height, one per column
  double _y = 0.5, _vy = 0, _scroll = 0, _center = 0.5, _inv = 0;
  bool _hold = false;
  static const _colW = 0.04; // fraction of width per column

  double get _gap => lvD(widget.level, 0.62, 0.36);

  @override
  void initState() {
    super.initState();
    for (var i = 0; i < 30; i++) {
      _cols.add((0.5 - _gap / 2, 0.5 + _gap / 2));
    }
    hearts = 3;
    startScore();
    startLoop((dt) {
      _vy += (_hold ? -1.6 : 1.4) * dt;
      _vy = _vy.clamp(-0.9, 0.9);
      _y += _vy * dt;
      if (_inv > 0) _inv -= dt;
      final speed = lvD(widget.level, 0.32, 0.55);
      _scroll += speed * dt;
      while (_scroll > _colW) {
        _scroll -= _colW;
        _cols.removeAt(0);
        _center = (_center + (args.rng.nextDouble() - 0.5) * lvD(widget.level, 0.06, 0.12)).clamp(_gap / 2 + 0.05, 0.95 - _gap / 2);
        _cols.add((_center - _gap / 2, _center + _gap / 2));
        if (addPoint()) return;
      }
      // Copter at column ~6.
      final col = _cols[6];
      if (_inv <= 0 && (_y < col.$1 + 0.02 || _y > col.$2 - 0.02)) {
        _inv = 1.2;
        _vy = 0;
        _y = (col.$1 + col.$2) / 2;
        if (loseHeart('Crashed into the cave')) return;
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final cw = _colW * w;
        return Listener(
          behavior: HitTestBehavior.opaque,
          onPointerDown: (_) => _hold = true,
          onPointerUp: (_) => _hold = false,
          onPointerCancel: (_) => _hold = false,
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF451A03), Color(0xFF1C1917)]),
            for (var i = 0; i < _cols.length; i++) ...[
              Positioned(left: i * cw - _scroll * w, top: 0, width: cw + 1, height: _cols[i].$1 * h, child: Container(color: const Color(0xFF92400E))),
              Positioned(left: i * cw - _scroll * w, top: _cols[i].$2 * h, width: cw + 1, bottom: 0, child: Container(color: const Color(0xFF92400E))),
            ],
            Positioned(left: 6 * cw - 22, top: _y * h - 18, child: Opacity(opacity: _inv > 0 && (_inv * 10).floor().isEven ? 0.3 : 1, child: Transform.flip(flipX: true, child: emojiText('🚁', 38)))),
            arcadeTopBar('Hold to rise · ${score * 10}m / ${goal * 10}m', hearts: hearts),
          ]),
        );
      });
}

// ── 46 Ski Slalom ──────────────────────────────────────────────────────────
class _Gate {
  _Gate(this.x, this.y, this.tree);
  final double x;
  double y;
  final bool tree;
  bool done = false;
}

class SkiSlalomGame extends StatefulWidget {
  const SkiSlalomGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<SkiSlalomGame> createState() => _SkiSlalomState();
}

class _SkiSlalomState extends State<SkiSlalomGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 10, 32);
  final _things = <_Gate>[];
  double _x = 0.5, _target = 0.5, _spawn = 0.4, _lastGateX = 0.5;
  static const _skierY = 0.25;
  double get _gw => lvD(widget.level, 0.3, 0.16);

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      final speed = lvD(widget.level, 0.28, 0.55);
      _x += (_target - _x) * math.min(1, dt * 6);
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 1.4, 0.8);
        _lastGateX = (_lastGateX + (args.rng.nextDouble() - 0.5) * lvD(widget.level, 0.5, 0.8)).clamp(0.2, 0.8);
        _things.add(_Gate(_lastGateX, 1.1, false));
        if (args.rng.nextDouble() < lvD(widget.level, 0.2, 0.7)) {
          final tx = (_lastGateX + (args.rng.nextBool() ? 1 : -1) * (_gw / 2 + 0.1 + args.rng.nextDouble() * 0.2)).clamp(0.05, 0.95);
          _things.add(_Gate(tx, 1.1 + 0.3, true));
        }
      }
      for (final t in _things) {
        t.y -= speed * dt;
        if (!t.done && t.y <= _skierY) {
          t.done = true;
          final inside = (_x - t.x).abs() < _gw / 2;
          if (t.tree) {
            if ((_x - t.x).abs() < 0.06 && loseHeart('Hit a tree')) return;
          } else if (inside) {
            if (addPoint()) return;
          } else if (loseHeart('Missed a gate')) {
            return;
          }
        }
      }
      _things.removeWhere((t) => t.y < -0.1);
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        void steer(Offset p) => _target = (p.dx / w).clamp(0.05, 0.95);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => steer(d.localPosition),
          onPanUpdate: (d) => steer(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFFF8FAFC), Color(0xFFDBEAFE)]),
            for (final t in _things)
              if (t.tree)
                Positioned(left: t.x * w - 18, top: t.y * h - 20, child: emojiText('🌲', 40))
              else ...[
                Positioned(left: (t.x - _gw / 2) * w - 10, top: t.y * h - 24, child: emojiText('🚩', 26)),
                Positioned(left: (t.x + _gw / 2) * w - 10, top: t.y * h - 24, child: emojiText('🚩', 26)),
              ],
            Positioned(left: _x * w - 20, top: _skierY * h - 20, child: Transform.rotate(angle: (_target - _x) * 2, child: emojiText('⛷️', 40))),
            arcadeTopBar('Drag to steer between the flags · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

// ── 47 Clay Shooter ────────────────────────────────────────────────────────
class _Disc {
  _Disc(this.x, this.y, this.vx, this.vy);
  double x, y, vx, vy;
  bool hit = false;
  double fade = 0;
}

class ClayShooterGame extends StatefulWidget {
  const ClayShooterGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<ClayShooterGame> createState() => _ClayShooterState();
}

class _ClayShooterState extends State<ClayShooterGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 10, 30);
  final _discs = <_Disc>[];
  Size _size = Size.zero;
  double _spawn = 0.6;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 1.4, 0.6);
        final left = args.rng.nextBool();
        final sp = lvD(widget.level, 330, 560);
        _discs.add(_Disc(left ? -20 : _size.width + 20, _size.height * 0.85, (left ? 1 : -1) * sp * (0.6 + args.rng.nextDouble() * 0.4), -sp * (1.1 + args.rng.nextDouble() * 0.4)));
      }
      for (final d in _discs) {
        if (d.hit) {
          d.fade += dt * 3;
          continue;
        }
        d.vy += 520 * dt;
        d.x += d.vx * dt;
        d.y += d.vy * dt;
      }
      final escaped = _discs.where((d) => !d.hit && (d.y > _size.height + 30 || d.x < -40 || d.x > _size.width + 40)).toList();
      for (final d in escaped) {
        _discs.remove(d);
        if (loseHeart('A disc got away')) return;
      }
      _discs.removeWhere((d) => d.hit && d.fade >= 1);
      setState(() {});
    });
  }

  void _shoot(Offset p) {
    if (ended) return;
    for (final d in _discs) {
      if (!d.hit && (Offset(d.x, d.y) - p).distance < lvD(widget.level, 46, 30)) {
        d.hit = true;
        HapticFeedback.mediumImpact();
        addPoint();
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => _shoot(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFFBAE6FD)]),
            Positioned(left: 0, right: 0, bottom: 0, height: c.maxHeight * 0.14, child: Container(color: const Color(0xFF65A30D))),
            for (final d in _discs)
              Positioned(
                left: d.x - 18,
                top: d.y - 8,
                child: Opacity(
                  opacity: (1 - d.fade).clamp(0.0, 1.0),
                  child: d.hit ? emojiText('💥', 36) : Container(width: 36, height: 14, decoration: BoxDecoration(color: const Color(0xFFF97316), borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFF7C2D12), width: 2))),
                ),
              ),
            arcadeTopBar('Tap the discs · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// ── 48 Star Invaders ───────────────────────────────────────────────────────
class InvadersGame extends StatefulWidget {
  const InvadersGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<InvadersGame> createState() => _InvadersState();
}

class _InvadersState extends State<InvadersGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _rows * _colsN;
  late final int _rows = lvI(widget.level, 2, 5);
  static const _colsN = 6;
  late final List<bool> _alive = List.filled(_rows * _colsN, true);
  double _ox = 0.1, _oy = 0.12, _dir = 1, _fire = 0, _enemyFire = 1.5, _ship = 0.5, _inv = 0;
  final _shots = <Offset>[];
  final _bombs = <Offset>[];

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      final speed = lvD(widget.level, 0.08, 0.2) * (1 + score / goal);
      _ox += _dir * speed * dt;
      final aliveCols = [for (var i = 0; i < _alive.length; i++) if (_alive[i]) i % _colsN];
      if (aliveCols.isEmpty) return;
      final minC = aliveCols.reduce(math.min), maxC = aliveCols.reduce(math.max);
      if (_ox + minC * 0.12 < 0.02 || _ox + maxC * 0.12 + 0.1 > 0.98) {
        _dir = -_dir;
        _ox = _ox.clamp(0.02 - minC * 0.12, 0.88 - maxC * 0.12);
        _oy += lvD(widget.level, 0.03, 0.05);
      }
      _fire -= dt;
      if (_fire <= 0) {
        _fire = 0.32;
        _shots.add(Offset(_ship, 0.85));
      }
      for (var i = 0; i < _shots.length; i++) {
        _shots[i] = _shots[i].translate(0, -1.1 * dt);
      }
      _enemyFire -= dt;
      if (widget.level > 6 && _enemyFire <= 0) {
        _enemyFire = lvD(widget.level, 2.2, 0.8);
        final shooters = [for (var i = 0; i < _alive.length; i++) if (_alive[i]) i];
        final s = shooters[args.rng.nextInt(shooters.length)];
        _bombs.add(Offset(_ox + (s % _colsN) * 0.12 + 0.05, _oy + (s ~/ _colsN) * 0.07 + 0.04));
      }
      for (var i = 0; i < _bombs.length; i++) {
        _bombs[i] = _bombs[i].translate(0, lvD(widget.level, 0.35, 0.6) * dt);
      }
      if (_inv > 0) _inv -= dt;
      // Hits on aliens.
      for (final s in List.of(_shots)) {
        for (var i = 0; i < _alive.length; i++) {
          if (!_alive[i]) continue;
          final ax = _ox + (i % _colsN) * 0.12 + 0.05, ay = _oy + (i ~/ _colsN) * 0.07 + 0.03;
          if ((s.dx - ax).abs() < 0.05 && (s.dy - ay).abs() < 0.035) {
            _alive[i] = false;
            _shots.remove(s);
            if (addPoint()) return;
            break;
          }
        }
      }
      for (final b in List.of(_bombs)) {
        if (_inv <= 0 && (b.dx - _ship).abs() < 0.06 && (b.dy - 0.88).abs() < 0.04) {
          _bombs.remove(b);
          _inv = 1;
          if (loseHeart('Your ship was hit')) return;
        }
      }
      _shots.removeWhere((s) => s.dy < 0);
      _bombs.removeWhere((b) => b.dy > 1);
      final lowest = [for (var i = 0; i < _alive.length; i++) if (_alive[i]) i ~/ _colsN].reduce(math.max);
      if (_oy + lowest * 0.07 > 0.8) {
        knockout('The invaders landed');
        return;
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        void steer(Offset p) => _ship = (p.dx / w).clamp(0.05, 0.95);
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onPanDown: (d) => steer(d.localPosition),
          onPanUpdate: (d) => steer(d.localPosition),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF1E1B4B), Color(0xFF020617)]),
            for (var i = 0; i < _alive.length; i++)
              if (_alive[i]) Positioned(left: (_ox + (i % _colsN) * 0.12) * w, top: (_oy + (i ~/ _colsN) * 0.07) * h, child: emojiText(['👾', '👽', '🛸'][(i ~/ _colsN) % 3], 30)),
            for (final s in _shots) Positioned(left: s.dx * w - 2, top: s.dy * h, child: Container(width: 4, height: 12, color: const Color(0xFF67E8F9))),
            for (final b in _bombs) Positioned(left: b.dx * w - 4, top: b.dy * h, child: Container(width: 8, height: 8, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFF87171)))),
            Positioned(left: _ship * w - 22, top: 0.86 * h, child: Opacity(opacity: _inv > 0 ? 0.5 : 1, child: emojiText('🚀', 40))),
            arcadeTopBar('Drag to move · auto-fire · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });
}

// ── 49 Road Hopper ─────────────────────────────────────────────────────────
class RoadHopperGame extends StatefulWidget {
  const RoadHopperGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<RoadHopperGame> createState() => _RoadHopperState();
}

class _RoadHopperState extends State<RoadHopperGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 8);
  late final int _lanes = lvI(widget.level, 3, 8);
  late final List<double> _speed; // + right, - left (fraction of width / s)
  late final List<List<double>> _cars; // x positions per lane
  int _row = 0; // 0 = start curb, _lanes + 1 = far side
  double _x = 0.5, _inv = 0;
  static const _carEmojis = ['🚗', '🚕', '🚙', '🚌', '🚚', '🏎️'];

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _speed = List.generate(_lanes, (i) => (i.isEven ? 1 : -1) * lvD(widget.level, 0.18, 0.42) * (0.7 + r.nextDouble() * 0.6));
    _cars = List.generate(_lanes, (_) {
      final n = lvI(widget.level, 2, 4);
      return List.generate(n, (k) => k / n + r.nextDouble() * 0.1);
    });
    hearts = 3;
    startScore();
    startLoop((dt) {
      for (var l = 0; l < _lanes; l++) {
        for (var k = 0; k < _cars[l].length; k++) {
          _cars[l][k] = (_cars[l][k] + _speed[l] * dt) % 1.2;
        }
      }
      if (_inv > 0) _inv -= dt;
      if (_row >= 1 && _row <= _lanes && _inv <= 0) {
        for (final cx in _cars[_row - 1]) {
          if (((cx - 0.1) - _x).abs() < 0.08) {
            _inv = 1;
            _row = 0;
            if (loseHeart('Hit by a car')) return;
            break;
          }
        }
      }
      setState(() {});
    });
  }

  void _hop(int dr, double dx) {
    if (ended) return;
    setState(() {
      _row = (_row + dr).clamp(0, _lanes + 1);
      _x = (_x + dx).clamp(0.05, 0.95);
    });
    HapticFeedback.selectionClick();
    if (_row == _lanes + 1) {
      if (addPoint()) return;
      setState(() => _row = 0);
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight - 90;
        final rowH = h / (_lanes + 2);
        double rowTop(int row) => h - (row + 1) * rowH;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onVerticalDragEnd: (d) => (d.primaryVelocity ?? 0) < 0 ? _hop(1, 0) : _hop(-1, 0),
          onHorizontalDragEnd: (d) => _hop(0, (d.primaryVelocity ?? 0) > 0 ? 0.12 : -0.12),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF374151), Color(0xFF1F2937)]),
            Positioned(left: 0, right: 0, top: rowTop(_lanes + 1), height: rowH, child: Container(color: const Color(0xFF16A34A))),
            Positioned(left: 0, right: 0, top: rowTop(0), height: rowH, child: Container(color: const Color(0xFF16A34A))),
            for (var l = 0; l < _lanes; l++) ...[
              Positioned(left: 0, right: 0, top: rowTop(l + 1) + rowH - 1, height: 2, child: Container(color: Colors.white24)),
              for (final cx in _cars[l])
                Positioned(
                  left: (cx - 0.1) * w - 22,
                  top: rowTop(l + 1) + rowH / 2 - 20,
                  child: Transform.flip(flipX: _speed[l] > 0, child: emojiText(_carEmojis[l % _carEmojis.length], 40)),
                ),
            ],
            Positioned(left: _x * w - 18, top: rowTop(_row) + rowH / 2 - 18, child: Opacity(opacity: _inv > 0 ? 0.4 : 1, child: emojiText('🐸', 36))),
            Positioned(
              left: 0,
              right: 0,
              bottom: 8,
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                for (final (icon, dr, dx) in [(Icons.arrow_back_rounded, 0, -0.12), (Icons.arrow_upward_rounded, 1, 0.0), (Icons.arrow_downward_rounded, -1, 0.0), (Icons.arrow_forward_rounded, 0, 0.12)])
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 6),
                    child: IconButton.filled(
                      onPressed: () => _hop(dr, dx),
                      icon: Icon(icon),
                      style: IconButton.styleFrom(backgroundColor: Colors.white.withValues(alpha: 0.15), foregroundColor: Colors.white, minimumSize: const Size(58, 58)),
                    ),
                  ),
              ]),
            ),
            arcadeTopBar('Cross the road · $score/$goal', hearts: hearts),
          ]),
        );
      });
}

// ── 50 Maze Muncher ────────────────────────────────────────────────────────
class MazeMuncherGame extends StatefulWidget {
  const MazeMuncherGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<MazeMuncherGame> createState() => _MazeMuncherState();
}

class _MazeMuncherState extends State<MazeMuncherGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _dotsStart;
  late final int _w = lvI(widget.level, 7, 9), _h = lvI(widget.level, 8, 11);
  late final List<int> _walls; // bits 1 up 2 right 4 down 8 left
  late final Set<int> _dots;
  late final int _dotsStart;
  int _me = 0;
  int _dir = 2; // bit we want to move through
  final _ghosts = <int>[];
  double _meT = 0, _ghostT = 0, _inv = 0;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _walls = List.filled(_w * _h, 15);
    final seen = <int>{0};
    final stack = [0];
    while (stack.isNotEmpty) {
      final c = stack.last;
      final opts = [
        if (c ~/ _w > 0) (c - _w, 1, 4),
        if (c % _w < _w - 1) (c + 1, 2, 8),
        if (c ~/ _w < _h - 1) (c + _w, 4, 1),
        if (c % _w > 0) (c - 1, 8, 2),
      ].where((o) => !seen.contains(o.$1)).toList();
      if (opts.isEmpty) {
        stack.removeLast();
        continue;
      }
      final (n, a, b) = opts[r.nextInt(opts.length)];
      _walls[c] &= ~a;
      _walls[n] &= ~b;
      seen.add(n);
      stack.add(n);
    }
    // Knock out extra walls so there are loops to escape through.
    for (var k = 0; k < _w * _h ~/ 3; k++) {
      final c = r.nextInt(_w * _h);
      if (c % _w < _w - 1) {
        _walls[c] &= ~2;
        _walls[c + 1] &= ~8;
      }
    }
    _dots = {for (var i = 1; i < _w * _h; i++) i};
    _dotsStart = _dots.length;
    for (var g = 0; g < lvI(widget.level, 1, 3); g++) {
      _ghosts.add(_w * _h - 1 - g * (_w - 1));
    }
    hearts = 3;
    startScore();
    startLoop(_frame);
  }

  int? _step(int c, int bit) {
    if (_walls[c] & bit != 0) return null;
    return switch (bit) { 1 => c - _w, 2 => c + 1, 4 => c + _w, _ => c - 1 };
  }

  int _chase(int from) {
    final prev = {_me: -1};
    final q = Queue<int>()..add(_me);
    while (q.isNotEmpty) {
      final c = q.removeFirst();
      for (final bit in const [1, 2, 4, 8]) {
        final n = _step(c, bit);
        if (n != null && !prev.containsKey(n)) {
          prev[n] = c;
          q.add(n);
        }
      }
    }
    return prev[from] ?? from;
  }

  void _frame(double dt) {
    _meT += dt;
    _ghostT += dt;
    if (_inv > 0) _inv -= dt;
    if (_meT > 0.2) {
      _meT = 0;
      final n = _step(_me, _dir);
      if (n != null) _me = n;
      if (_dots.remove(_me)) {
        if (addPoint()) return;
      }
    }
    if (_ghostT > lvD(widget.level, 0.55, 0.26)) {
      _ghostT = 0;
      for (var g = 0; g < _ghosts.length; g++) {
        // Sometimes wander instead of chasing (easier on early levels).
        if (args.rng.nextDouble() < lvD(widget.level, 0.45, 0.1)) {
          final opts = [for (final b in const [1, 2, 4, 8]) if (_step(_ghosts[g], b) != null) _step(_ghosts[g], b)!];
          if (opts.isNotEmpty) _ghosts[g] = opts[args.rng.nextInt(opts.length)];
        } else {
          _ghosts[g] = _chase(_ghosts[g]);
        }
      }
    }
    if (_inv <= 0 && _ghosts.contains(_me)) {
      _inv = 1.5;
      _me = 0;
      if (loseHeart('Caught by a ghost')) return;
    }
    setState(() {});
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onHorizontalDragEnd: (d) => _dir = (d.primaryVelocity ?? 0) > 0 ? 2 : 8,
        onVerticalDragEnd: (d) => _dir = (d.primaryVelocity ?? 0) > 0 ? 4 : 1,
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFF0B1437), Color(0xFF020617)]),
          Column(children: [
            arcadeTopBar('Swipe to steer · dots ${_dotsStart - _dots.length}/$_dotsStart', hearts: hearts),
            Expanded(
              child: Center(
                child: AspectRatio(
                  aspectRatio: _w / _h,
                  child: Padding(
                    padding: const EdgeInsets.all(8),
                    child: LayoutBuilder(builder: (context, c) {
                      final cw = c.maxWidth / _w, ch = c.maxHeight / _h;
                      return Stack(children: [
                        CustomPaint(size: Size(c.maxWidth, c.maxHeight), painter: _MunchPainter(_w, _h, _walls, _dots)),
                        Positioned(left: (_me % _w) * cw, top: (_me ~/ _w) * ch, width: cw, height: ch, child: Opacity(opacity: _inv > 0 ? 0.5 : 1, child: Center(child: emojiText('🟡', math.min(cw, ch) * 0.75)))),
                        for (final g in _ghosts)
                          Positioned(left: (g % _w) * cw, top: (g ~/ _w) * ch, width: cw, height: ch, child: Center(child: emojiText('👻', math.min(cw, ch) * 0.75))),
                      ]);
                    }),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                for (final (icon, bit) in [(Icons.arrow_back_rounded, 8), (Icons.arrow_upward_rounded, 1), (Icons.arrow_downward_rounded, 4), (Icons.arrow_forward_rounded, 2)])
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 5),
                    child: IconButton.filled(
                      onPressed: () => _dir = bit,
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

class _MunchPainter extends CustomPainter {
  _MunchPainter(this.w, this.h, this.walls, this.dots);
  final int w, h;
  final List<int> walls;
  final Set<int> dots;
  @override
  void paint(Canvas canvas, Size s) {
    final cw = s.width / w, ch = s.height / h;
    final p = Paint()
      ..color = const Color(0xFF3B82F6)
      ..strokeWidth = 3
      ..strokeCap = StrokeCap.round;
    for (var c = 0; c < w * h; c++) {
      final l = (c % w) * cw, t = (c ~/ w) * ch;
      if (walls[c] & 1 != 0) canvas.drawLine(Offset(l, t), Offset(l + cw, t), p);
      if (walls[c] & 2 != 0) canvas.drawLine(Offset(l + cw, t), Offset(l + cw, t + ch), p);
      if (walls[c] & 4 != 0) canvas.drawLine(Offset(l, t + ch), Offset(l + cw, t + ch), p);
      if (walls[c] & 8 != 0) canvas.drawLine(Offset(l, t), Offset(l, t + ch), p);
      if (dots.contains(c)) canvas.drawCircle(Offset(l + cw / 2, t + ch / 2), math.min(cw, ch) * 0.09, Paint()..color = const Color(0xFFFDE68A));
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}
