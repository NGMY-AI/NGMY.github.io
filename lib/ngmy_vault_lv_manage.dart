import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 61–70: run the place — management and simulation.
final kVaultManageGames = <VaultLvDef>[
  VaultLvDef(id: 'v_train_switch', title: 'Train Switch', tagline: 'Flip the switches so each train reaches its station.', emoji: '🚂', icon: Icons.train_rounded, colors: const [Color(0xFFEF4444), Color(0xFF1F2937)], tag: 'MANAGE', build: (a, l) => TrainSwitchGame(args: a, level: l)),
  VaultLvDef(id: 'v_traffic', title: 'Traffic Lights', tagline: 'Switch the lights to keep the junction moving.', emoji: '🚦', icon: Icons.traffic_rounded, colors: const [Color(0xFF22C55E), Color(0xFF374151)], tag: 'MANAGE', build: (a, l) => TrafficLightsGame(args: a, level: l)),
  VaultLvDef(id: 'v_runway', title: 'Air Traffic', tagline: 'Land every plane before its fuel runs out.', emoji: '✈️', icon: Icons.flight_land_rounded, colors: const [Color(0xFF38BDF8), Color(0xFF0C4A6E)], tag: 'MANAGE', build: (a, l) => AirTrafficGame(args: a, level: l)),
  VaultLvDef(id: 'v_elevator', title: 'Elevator Boss', tagline: 'Carry everyone to their floor before they give up.', emoji: '🛗', icon: Icons.elevator_rounded, colors: const [Color(0xFFA78BFA), Color(0xFF1E1B4B)], tag: 'MANAGE', build: (a, l) => ElevatorGame(args: a, level: l)),
  VaultLvDef(id: 'v_harvest', title: 'Harvest Time', tagline: 'Pick each crop the moment it’s ripe.', emoji: '🌾', icon: Icons.agriculture_rounded, colors: const [Color(0xFFFACC15), Color(0xFF3F6212)], tag: 'MANAGE', build: (a, l) => HarvestGame(args: a, level: l)),
  VaultLvDef(id: 'v_garden', title: 'Thirsty Garden', tagline: 'Water every plant before it wilts.', emoji: '🪴', icon: Icons.local_florist_rounded, colors: const [Color(0xFF4ADE80), Color(0xFF14532D)], tag: 'MANAGE', build: (a, l) => GardenGame(args: a, level: l)),
  VaultLvDef(id: 'v_fire_crew', title: 'Fire Crew', tagline: 'Put out the fires before they spread.', emoji: '🚒', icon: Icons.local_fire_department_rounded, colors: const [Color(0xFFF97316), Color(0xFF450A0A)], tag: 'MANAGE', build: (a, l) => FireCrewGame(args: a, level: l)),
  VaultLvDef(id: 'v_dam', title: 'Dam Keeper', tagline: 'Plug the leaks before the water spills over.', emoji: '🌊', icon: Icons.water_rounded, colors: const [Color(0xFF0EA5E9), Color(0xFF57534E)], tag: 'MANAGE', build: (a, l) => DamKeeperGame(args: a, level: l)),
  VaultLvDef(id: 'v_mail', title: 'Mail Route', tagline: 'Drop each letter at the right house number.', emoji: '📬', icon: Icons.markunread_mailbox_rounded, colors: const [Color(0xFF3B82F6), Color(0xFF7DD3FC)], tag: 'MANAGE', build: (a, l) => MailRouteGame(args: a, level: l)),
  VaultLvDef(id: 'v_barista', title: 'Coffee Bar', tagline: 'Make every drink exactly as ordered.', emoji: '☕', icon: Icons.coffee_rounded, colors: const [Color(0xFF92400E), Color(0xFF1C1917)], tag: 'MANAGE', build: (a, l) => CoffeeBarGame(args: a, level: l)),
];

// ── 61 Train Switch ────────────────────────────────────────────────────────
const _stationColors = [Color(0xFFEF4444), Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFFACC15), Color(0xFFA855F7), Color(0xFFF97316), Color(0xFF14B8A6), Color(0xFFEC4899)];

class _Train {
  _Train(this.color);
  final int color;
  int r = -1, k = 0; // node we left (-1 = entry)
  int nr = 0, nk = 0; // node we head to
  double t = 0;
}

class TrainSwitchGame extends StatefulWidget {
  const TrainSwitchGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<TrainSwitchGame> createState() => _TrainSwitchState();
}

class _TrainSwitchState extends State<TrainSwitchGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 6, 22);
  late final int _depth = widget.level < 8 ? 1 : (widget.level < 20 ? 2 : 3);
  late final List<bool> _sw = List.filled((1 << _depth) - 1, false); // node index = (1<<r)-1+k
  final _trains = <_Train>[];
  double _spawn = 0.5;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 4.0, 2.2);
        _trains.add(_Train(args.rng.nextInt(1 << _depth)));
      }
      final speed = lvD(widget.level, 0.45, 0.85);
      for (final tr in List.of(_trains)) {
        tr.t += speed * dt;
        if (tr.t < 1) continue;
        tr.t = 0;
        if (tr.nr == _depth) {
          _trains.remove(tr);
          if (tr.nk == tr.color) {
            if (addPoint()) return;
          } else if (loseHeart('Train went to the wrong station')) {
            return;
          }
          continue;
        }
        final right = _sw[(1 << tr.nr) - 1 + tr.nk];
        tr.r = tr.nr;
        tr.k = tr.nk;
        tr.nr = tr.r + 1;
        tr.nk = tr.k * 2 + (right ? 1 : 0);
      }
      setState(() {});
    });
  }

  Offset _node(int r, int k) => r < 0 ? const Offset(0.5, 0.02) : Offset((k + 0.5) / (1 << r), 0.14 + r * 0.66 / _depth);

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        Offset px(Offset o) => Offset(o.dx * w, o.dy * h);
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF365314), Color(0xFF1A2E05)]),
          Positioned.fill(child: CustomPaint(painter: _TrackPainter(_depth, _node, w, h))),
          for (var r = 0; r < _depth; r++)
            for (var k = 0; k < (1 << r); k++)
              Positioned(
                left: px(_node(r, k)).dx - 26,
                top: px(_node(r, k)).dy - 22,
                child: GestureDetector(
                  onTap: () => setState(() => _sw[(1 << r) - 1 + k] = !_sw[(1 << r) - 1 + k]),
                  child: Container(
                    width: 52,
                    height: 44,
                    decoration: BoxDecoration(color: const Color(0xFF111827), borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFFFDE68A), width: 2)),
                    child: Icon(_sw[(1 << r) - 1 + k] ? Icons.south_east_rounded : Icons.south_west_rounded, color: const Color(0xFFFDE68A), size: 28),
                  ),
                ),
              ),
          for (var k = 0; k < (1 << _depth); k++)
            Positioned(
              left: px(_node(_depth, k)).dx - 22,
              top: px(_node(_depth, k)).dy - 4,
              child: Container(
                width: 44,
                height: 34,
                decoration: BoxDecoration(color: _stationColors[k], borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.white, width: 2)),
                child: const Center(child: Text('🏠', style: TextStyle(fontSize: 16))),
              ),
            ),
          for (final tr in _trains)
            Builder(builder: (_) {
              final p = px(Offset.lerp(_node(tr.r, tr.k), _node(tr.nr, tr.nk), tr.t)!);
              return Positioned(
                left: p.dx - 18,
                top: p.dy - 18,
                child: Container(
                  width: 36,
                  height: 36,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(shape: BoxShape.circle, color: _stationColors[tr.color], border: Border.all(color: Colors.white, width: 2)),
                  child: emojiText('🚂', 20),
                ),
              );
            }),
          arcadeTopBar('Send each train to its colour · $score/$goal', hearts: hearts, bottom: true),
        ]);
      });
}

class _TrackPainter extends CustomPainter {
  _TrackPainter(this.depth, this.node, this.w, this.h);
  final int depth;
  final Offset Function(int, int) node;
  final double w, h;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = const Color(0xFF78350F)
      ..strokeWidth = 8
      ..strokeCap = StrokeCap.round;
    Offset px(Offset o) => Offset(o.dx * w, o.dy * h);
    canvas.drawLine(px(node(-1, 0)), px(node(0, 0)), p);
    for (var r = 0; r < depth; r++) {
      for (var k = 0; k < (1 << r); k++) {
        canvas.drawLine(px(node(r, k)), px(node(r + 1, k * 2)), p);
        canvas.drawLine(px(node(r, k)), px(node(r + 1, k * 2 + 1)), p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

// ── 62 Traffic Lights ──────────────────────────────────────────────────────
class _TCar {
  _TCar(this.lane, this.e);
  final int lane; // 0 from top, 1 from bottom, 2 from left, 3 from right
  final String e;
  double d = 0; // 0..1 along the lane
}

class TrafficLightsGame extends StatefulWidget {
  const TrafficLightsGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<TrafficLightsGame> createState() => _TrafficLightsState();
}

class _TrafficLightsState extends State<TrafficLightsGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 12, 45);
  bool _nsGreen = true;
  final _cars = <_TCar>[];
  double _spawn = 0.4;
  late final int _maxQueue = lvI(widget.level, 6, 4);
  static const _stop = 0.36, _zoneA = 0.38, _zoneB = 0.62;
  static const _emojis = ['🚗', '🚕', '🚙', '🚓', '🚐'];

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 1.3, 0.55);
        _cars.add(_TCar(args.rng.nextInt(4), _emojis[args.rng.nextInt(_emojis.length)]));
      }
      final speed = lvD(widget.level, 0.28, 0.42);
      for (var lane = 0; lane < 4; lane++) {
        final green = lane < 2 ? _nsGreen : !_nsGreen;
        final mine = _cars.where((c) => c.lane == lane).toList()..sort((a, b) => b.d.compareTo(a.d));
        for (var i = 0; i < mine.length; i++) {
          final c = mine[i];
          var limit = 2.0;
          if (!green && c.d <= _stop) limit = _stop;
          if (i > 0) limit = math.min(limit, mine[i - 1].d - 0.09);
          c.d = math.min(limit, c.d + speed * dt);
        }
        // Too many cars stuck at a red light = a jam.
        final waiting = green ? 0 : mine.where((c) => c.d <= _stop + 0.001).length;
        if (waiting >= _maxQueue) {
          // Jammed all the way back: clear that lane with a penalty.
          _cars.removeWhere((c) => c.lane == lane);
          if (loseHeart('Traffic jam')) return;
        }
      }
      // Crashes inside the junction.
      final inZone = _cars.where((c) => c.d > _zoneA && c.d < _zoneB).toList();
      if (inZone.any((c) => c.lane < 2) && inZone.any((c) => c.lane >= 2)) {
        _cars.removeWhere(inZone.contains);
        if (loseHeart('Crash in the junction')) return;
      }
      final through = _cars.where((c) => c.d >= 1.05).toList();
      for (final c in through) {
        _cars.remove(c);
        if (addPoint()) return;
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        Offset pos(_TCar car) => switch (car.lane) {
              0 => Offset(w * 0.45, car.d * h),
              1 => Offset(w * 0.55, h - car.d * h),
              2 => Offset(car.d * w, h * 0.55),
              _ => Offset(w - car.d * w, h * 0.45),
            };
        double rot(int lane) => switch (lane) { 0 => -math.pi / 2, 1 => math.pi / 2, 2 => math.pi, _ => 0 };
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) => setState(() => _nsGreen = !_nsGreen),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF3F6212), Color(0xFF365314)]),
            Positioned(left: w * 0.38, width: w * 0.24, top: 0, bottom: 0, child: Container(color: const Color(0xFF374151))),
            Positioned(top: h * 0.38, height: h * 0.24, left: 0, right: 0, child: Container(color: const Color(0xFF374151))),
            for (final car in _cars) Positioned(left: pos(car).dx - 18, top: pos(car).dy - 18, child: Transform.rotate(angle: rot(car.lane), child: emojiText(car.e, 34))),
            Positioned(left: w * 0.62 + 6, top: h * 0.2, child: _light(_nsGreen)),
            Positioned(left: w * 0.2, top: h * 0.62 + 6, child: _light(!_nsGreen)),
            arcadeTopBar('Tap anywhere to switch the lights · $score/$goal', hearts: hearts, bottom: true),
          ]),
        );
      });

  Widget _light(bool green) => Container(
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(color: Colors.black, borderRadius: BorderRadius.circular(8)),
        child: Column(children: [
          Container(width: 18, height: 18, decoration: BoxDecoration(shape: BoxShape.circle, color: green ? Colors.white10 : const Color(0xFFEF4444))),
          const SizedBox(height: 3),
          Container(width: 18, height: 18, decoration: BoxDecoration(shape: BoxShape.circle, color: green ? const Color(0xFF22C55E) : Colors.white10)),
        ]),
      );
}

// ── 63 Air Traffic ─────────────────────────────────────────────────────────
class _Plane {
  _Plane(this.fuel, this.angle);
  double fuel;
  double angle;
}

class AirTrafficGame extends StatefulWidget {
  const AirTrafficGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<AirTrafficGame> createState() => _AirTrafficState();
}

class _AirTrafficState extends State<AirTrafficGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 6, 24);
  final _waiting = <_Plane>[];
  final _runways = <double>[0, 0]; // landing time left
  double _spawn = 0.5;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0 && _waiting.length < 7) {
        _spawn = lvD(widget.level, 3.2, 1.4);
        _waiting.add(_Plane(lvD(widget.level, 14, 7) * (0.6 + args.rng.nextDouble() * 0.6), args.rng.nextDouble() * math.pi * 2));
      }
      for (var i = 0; i < 2; i++) {
        if (_runways[i] > 0) _runways[i] = math.max(0, _runways[i] - dt);
      }
      for (final p in List.of(_waiting)) {
        p.fuel -= dt;
        p.angle += dt * 0.5;
        if (p.fuel <= 0) {
          _waiting.remove(p);
          if (loseHeart('A plane ran out of fuel')) return;
        }
      }
      setState(() {});
    });
  }

  void _land(_Plane p) {
    if (ended) return;
    final free = _runways.indexWhere((t) => t <= 0);
    if (free < 0) {
      HapticFeedback.heavyImpact();
      return;
    }
    setState(() {
      _waiting.remove(p);
      _runways[free] = lvD(widget.level, 2.2, 3.2);
    });
    HapticFeedback.selectionClick();
    addPoint();
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final ctr = Offset(w / 2, h * 0.42);
        final rad = math.min(w, h) * 0.32;
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
          Positioned(left: ctr.dx - rad, top: ctr.dy - rad, child: Container(width: rad * 2, height: rad * 2, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white12, width: 2)))),
          for (var i = 0; i < _waiting.length; i++)
            Builder(builder: (_) {
              final p = _waiting[i];
              final pos = ctr + Offset(math.cos(p.angle + i), math.sin(p.angle + i)) * rad;
              final low = p.fuel < 3;
              return Positioned(
                left: pos.dx - 30,
                top: pos.dy - 30,
                child: GestureDetector(
                  onTap: () => _land(p),
                  child: Column(children: [
                    Transform.rotate(angle: p.angle + i + math.pi / 2, child: emojiText('✈️', 34)),
                    Container(
                      width: 44,
                      height: 6,
                      decoration: BoxDecoration(color: Colors.black38, borderRadius: BorderRadius.circular(3)),
                      alignment: Alignment.centerLeft,
                      child: FractionallySizedBox(widthFactor: (p.fuel / 14).clamp(0.05, 1.0), child: Container(color: low ? const Color(0xFFEF4444) : const Color(0xFF4ADE80))),
                    ),
                  ]),
                ),
              );
            }),
          for (var i = 0; i < 2; i++)
            Positioned(
              left: w * 0.1,
              right: w * 0.1,
              top: h * (0.8 + i * 0.09),
              child: Container(
                height: 34,
                decoration: BoxDecoration(color: _runways[i] > 0 ? const Color(0xFF7F1D1D) : const Color(0xFF374151), borderRadius: BorderRadius.circular(6)),
                alignment: Alignment.center,
                child: Text(_runways[i] > 0 ? 'RUNWAY ${i + 1} · busy ${_runways[i].toStringAsFixed(1)}s' : 'RUNWAY ${i + 1} · free',
                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12)),
              ),
            ),
          arcadeTopBar('Tap a plane to land it · lowest fuel first! · $score/$goal', hearts: hearts),
        ]);
      });
}

// ── 64 Elevator Boss ───────────────────────────────────────────────────────
class _Rider {
  _Rider(this.from, this.to, this.patience);
  final int from, to;
  double patience;
  bool riding = false;
}

class ElevatorGame extends StatefulWidget {
  const ElevatorGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<ElevatorGame> createState() => _ElevatorState();
}

class _ElevatorState extends State<ElevatorGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 8, 30);
  late final int _floors = lvI(widget.level, 5, 10);
  late final int _cap = lvI(widget.level, 6, 4);
  double _pos = 0; // car position in floors
  int _target = 0;
  final _riders = <_Rider>[];
  double _spawn = 0.5, _doors = 0;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 3.0, 1.3);
        final from = args.rng.nextInt(_floors);
        var to = args.rng.nextInt(_floors - 1);
        if (to >= from) to++;
        _riders.add(_Rider(from, to, lvD(widget.level, 30, 16)));
      }
      final step = dt * 2.6;
      if ((_pos - _target).abs() <= step) {
        if (_pos != _target.toDouble()) _doors = 0.5;
        _pos = _target.toDouble();
      } else {
        _pos += _pos < _target ? step : -step;
      }
      if (_doors > 0) {
        _doors -= dt;
        if (_doors <= 0) _exchange();
      }
      for (final r in List.of(_riders)) {
        if (r.riding) continue;
        r.patience -= dt;
        if (r.patience <= 0) {
          _riders.remove(r);
          if (loseHeart('Someone gave up waiting')) return;
        }
      }
      setState(() {});
    });
  }

  void _exchange() {
    final here = _pos.round();
    for (final r in List.of(_riders)) {
      if (r.riding && r.to == here) {
        _riders.remove(r);
        if (addPoint()) return;
      }
    }
    var inside = _riders.where((r) => r.riding).length;
    for (final r in _riders) {
      if (!r.riding && r.from == here && inside < _cap) {
        r.riding = true;
        inside++;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final inside = _riders.where((r) => r.riding).toList();
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF1E1B4B), Color(0xFF0B0920)]),
      Column(children: [
        arcadeTopBar('Tap a floor to send the lift · delivered $score/$goal', hearts: hearts),
        Padding(
          padding: const EdgeInsets.symmetric(vertical: 4),
          child: Text('In the lift (${inside.length}/$_cap): ${inside.map((r) => '→${r.to + 1}').join('  ')}', style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w800)),
        ),
        Expanded(
          child: LayoutBuilder(builder: (context, c) {
            final fh = c.maxHeight / _floors;
            return Stack(children: [
              for (var f = 0; f < _floors; f++)
                Positioned(
                  left: 0,
                  right: 0,
                  top: c.maxHeight - (f + 1) * fh,
                  height: fh,
                  child: GestureDetector(
                    behavior: HitTestBehavior.opaque,
                    onTap: () => setState(() => _target = f),
                    child: Container(
                      decoration: BoxDecoration(border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.12)))),
                      child: Row(children: [
                        SizedBox(width: 40, child: Text('${f + 1}', textAlign: TextAlign.center, style: TextStyle(color: _target == f ? const Color(0xFFFDE68A) : Colors.white54, fontWeight: FontWeight.w900, fontSize: 18))),
                        const SizedBox(width: 80),
                        Expanded(
                          child: Wrap(spacing: 4, children: [
                            for (final r in _riders.where((r) => !r.riding && r.from == f))
                              Column(mainAxisSize: MainAxisSize.min, children: [
                                Text(r.patience < 5 ? '😠' : '🙂', style: TextStyle(fontSize: math.min(24, fh * 0.45))),
                                Text('→${r.to + 1}', style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                              ]),
                          ]),
                        ),
                      ]),
                    ),
                  ),
                ),
              Positioned(
                left: 44,
                top: c.maxHeight - (_pos + 1) * fh + 3,
                child: Container(
                  width: 70,
                  height: fh - 6,
                  decoration: BoxDecoration(color: const Color(0xFF6366F1), borderRadius: BorderRadius.circular(6), border: Border.all(color: Colors.white, width: 2)),
                  alignment: Alignment.center,
                  child: Text('🛗 ${inside.length}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                ),
              ),
            ]);
          }),
        ),
      ]),
    ]);
  }
}

// ── 65 Harvest Time ────────────────────────────────────────────────────────
class HarvestGame extends StatefulWidget {
  const HarvestGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<HarvestGame> createState() => _HarvestState();
}

class _HarvestState extends State<HarvestGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 10, 40);
  late final int _n = lvI(widget.level, 3, 4);
  late final List<double> _age; // seconds since planted
  late final List<double> _grow; // seconds to ripen
  late final double _window = lvD(widget.level, 2.8, 1.0);
  static const _crops = ['🥕', '🌽', '🍅', '🍆', '🥔', '🍓'];
  late final List<String> _crop;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _age = List.generate(_n * _n, (_) => -r.nextDouble() * 3);
    _grow = List.generate(_n * _n, (_) => 2.5 + r.nextDouble() * 3);
    _crop = List.generate(_n * _n, (_) => _crops[r.nextInt(_crops.length)]);
    hearts = 3;
    startScore();
    startLoop((dt) {
      for (var i = 0; i < _age.length; i++) {
        _age[i] += dt;
        if (_age[i] > _grow[i] + _window) {
          _age[i] = -1;
          if (loseHeart('A crop rotted')) return;
        }
      }
      setState(() {});
    });
  }

  void _tap(int i) {
    if (ended) return;
    if (_age[i] >= _grow[i]) {
      setState(() {
        _age[i] = 0;
        _grow[i] = 2 + args.rng.nextDouble() * 3;
      });
      addPoint();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF65A30D), Color(0xFF3F6212)]),
        Column(children: [
          arcadeTopBar('Tap crops when they glow · $score/$goal', hearts: hearts),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(14),
                  child: GridView.count(
                    crossAxisCount: _n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < _age.length; i++)
                        Builder(builder: (_) {
                          final ripe = _age[i] >= _grow[i];
                          final late = ripe && _age[i] > _grow[i] + _window * 0.6;
                          final growth = (_age[i] / _grow[i]).clamp(0.0, 1.0);
                          return GestureDetector(
                            onTap: () => _tap(i),
                            child: Container(
                              margin: const EdgeInsets.all(5),
                              decoration: BoxDecoration(
                                color: const Color(0xFF78350F),
                                borderRadius: BorderRadius.circular(14),
                                border: Border.all(color: ripe ? (late ? const Color(0xFFEF4444) : const Color(0xFFFDE047)) : Colors.black26, width: ripe ? 3 : 1),
                                boxShadow: ripe ? [BoxShadow(color: (late ? const Color(0xFFEF4444) : const Color(0xFFFDE047)).withValues(alpha: 0.6), blurRadius: 12)] : null,
                              ),
                              alignment: Alignment.center,
                              child: _age[i] < 0
                                  ? const SizedBox.shrink()
                                  : Text(ripe ? _crop[i] : (growth < 0.5 ? '🌱' : '🌿'), style: TextStyle(fontSize: 18 + growth * 22)),
                            ),
                          );
                        }),
                    ],
                  ),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// ── 66 Thirsty Garden ──────────────────────────────────────────────────────
class GardenGame extends StatefulWidget {
  const GardenGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<GardenGame> createState() => _GardenState();
}

class _GardenState extends State<GardenGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 25, 60);
  late final int _n = lvI(widget.level, 3, 9);
  late final List<double> _water = List.filled(_n, 1.0);
  late final List<double> _rate;
  double _t = 0;
  static const _plants = ['🌻', '🌷', '🌹', '🪴', '🌵', '🌺', '🌼', '🥀', '🌸'];

  @override
  void initState() {
    super.initState();
    _rate = List.generate(_n, (_) => lvD(widget.level, 0.08, 0.17) * (0.6 + args.rng.nextDouble() * 0.8));
    hearts = 3;
    startScore();
    startLoop((dt) {
      _t += dt;
      for (var i = 0; i < _n; i++) {
        _water[i] -= _rate[i] * dt;
        if (_water[i] <= 0) {
          _water[i] = 0.6;
          if (loseHeart('A plant wilted')) return;
        }
      }
      if (_t.floor() > score && addPoint()) return;
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF86EFAC), Color(0xFF14532D)]),
        Column(children: [
          arcadeTopBar('Tap plants to water them · ${score}s / ${goal}s', hearts: hearts),
          Expanded(
            child: Center(
              child: Wrap(spacing: 14, runSpacing: 14, alignment: WrapAlignment.center, children: [
                for (var i = 0; i < _n; i++)
                  GestureDetector(
                    onTap: () {
                      if (ended) return;
                      setState(() => _water[i] = 1);
                      HapticFeedback.selectionClick();
                    },
                    child: Column(children: [
                      Opacity(opacity: 0.4 + _water[i] * 0.6, child: Text(_plants[i % _plants.length], style: TextStyle(fontSize: 34 + _water[i] * 14))),
                      Container(
                        width: 70,
                        height: 10,
                        decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(5)),
                        alignment: Alignment.centerLeft,
                        child: FractionallySizedBox(
                          widthFactor: _water[i].clamp(0.02, 1.0),
                          child: Container(decoration: BoxDecoration(color: _water[i] < 0.25 ? const Color(0xFFEF4444) : const Color(0xFF38BDF8), borderRadius: BorderRadius.circular(5))),
                        ),
                      ),
                      Container(width: 60, height: 30, margin: const EdgeInsets.only(top: 2), decoration: BoxDecoration(color: const Color(0xFFB45309), borderRadius: const BorderRadius.vertical(bottom: Radius.circular(12)))),
                    ]),
                  ),
              ]),
            ),
          ),
        ]),
      ]);
}

// ── 67 Fire Crew ───────────────────────────────────────────────────────────
class FireCrewGame extends StatefulWidget {
  const FireCrewGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<FireCrewGame> createState() => _FireCrewState();
}

class _FireCrewState extends State<FireCrewGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 15, 50);
  static const _w = 5, _h = 6;
  final _fire = <int, double>{}; // cell → seconds burning
  final _ash = <int>{};
  double _spawn = 0.4, _spread = 0;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 1.4, 0.6);
        final c = args.rng.nextInt(_w * _h);
        if (!_ash.contains(c)) _fire[c] = 0;
      }
      _spread += dt;
      final spreadEvery = lvD(widget.level, 3.0, 1.4);
      for (final k in _fire.keys.toList()) {
        _fire[k] = _fire[k]! + dt;
        if (_fire[k]! > lvD(widget.level, 7.0, 4.0)) {
          _fire.remove(k);
          _ash.add(k);
          if (_ash.length > 6) _ash.remove(_ash.first);
          if (loseHeart('A house burned down')) return;
        }
      }
      if (_spread > spreadEvery) {
        _spread = 0;
        for (final k in _fire.keys.toList()) {
          final n = [k - 1, k + 1, k - _w, k + _w][args.rng.nextInt(4)];
          if (n >= 0 && n < _w * _h && !_ash.contains(n) && ((n % _w - k % _w).abs() <= 1)) _fire.putIfAbsent(n, () => 0);
        }
      }
      setState(() {});
    });
  }

  void _douse(int c) {
    if (ended || !_fire.containsKey(c)) return;
    setState(() => _fire.remove(c));
    HapticFeedback.lightImpact();
    addPoint();
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF7F1D1D), Color(0xFF1C0A0A)]),
        Column(children: [
          arcadeTopBar('Tap fires to put them out · $score/$goal', hearts: hearts),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: _w / _h,
                child: Padding(
                  padding: const EdgeInsets.all(12),
                  child: GridView.count(
                    crossAxisCount: _w,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < _w * _h; i++)
                        GestureDetector(
                          onTap: () => _douse(i),
                          child: Container(
                            margin: const EdgeInsets.all(4),
                            decoration: BoxDecoration(color: Colors.black26, borderRadius: BorderRadius.circular(10)),
                            alignment: Alignment.center,
                            child: Stack(alignment: Alignment.center, children: [
                              Text(_ash.contains(i) ? '🏚️' : '🏠', style: const TextStyle(fontSize: 30)),
                              if (_fire.containsKey(i)) Transform.scale(scale: 0.9 + (_fire[i]! * 0.12).clamp(0, 0.6), child: const Text('🔥', style: TextStyle(fontSize: 34))),
                            ]),
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

// ── 68 Dam Keeper ──────────────────────────────────────────────────────────
class DamKeeperGame extends StatefulWidget {
  const DamKeeperGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DamKeeperGame> createState() => _DamKeeperState();
}

class _DamKeeperState extends State<DamKeeperGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 25, 60);
  static const _w = 5, _h = 5;
  final _leaks = <int>{};
  double _water = 0.2, _spawn = 0.5, _t = 0;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      _t += dt;
      _spawn -= dt;
      if (_spawn <= 0) {
        _spawn = lvD(widget.level, 1.4, 0.55);
        _leaks.add(args.rng.nextInt(_w * _h));
      }
      _water += (_leaks.length * lvD(widget.level, 0.012, 0.02) - 0.006) * dt;
      _water = _water.clamp(0.0, 1.0);
      if (_water >= 1) {
        knockout('The dam overflowed');
        return;
      }
      if (_t.floor() > score && addPoint()) return;
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFF0369A1)]),
        Column(children: [
          arcadeTopBar('Plug the leaks · hold out ${score}s / ${goal}s'),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(children: [
              const Text('💧', style: TextStyle(fontSize: 20)),
              const SizedBox(width: 8),
              Expanded(
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: LinearProgressIndicator(value: _water, minHeight: 14, backgroundColor: Colors.white24, valueColor: AlwaysStoppedAnimation(_water > 0.75 ? const Color(0xFFEF4444) : const Color(0xFF1D4ED8))),
                ),
              ),
            ]),
          ),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(18),
                  child: GridView.count(
                    crossAxisCount: _w,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < _w * _h; i++)
                        GestureDetector(
                          onTap: () {
                            if (ended || !_leaks.contains(i)) return;
                            setState(() => _leaks.remove(i));
                            HapticFeedback.lightImpact();
                          },
                          child: Container(
                            margin: const EdgeInsets.all(2),
                            decoration: BoxDecoration(color: const Color(0xFF78716C), borderRadius: BorderRadius.circular(6), border: Border.all(color: const Color(0xFF57534E), width: 2)),
                            alignment: Alignment.center,
                            child: _leaks.contains(i) ? const Text('💦', style: TextStyle(fontSize: 28)) : null,
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

// ── 69 Mail Route ──────────────────────────────────────────────────────────
class _House {
  _House(this.num, this.x);
  final int num;
  double x;
  bool done = false;
}

class MailRouteGame extends StatefulWidget {
  const MailRouteGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<MailRouteGame> createState() => _MailRouteState();
}

class _MailRouteState extends State<MailRouteGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 8, 30);
  final _houses = <_House>[];
  int _nextNum = 100;
  late int _letter;

  @override
  void initState() {
    super.initState();
    for (var i = 0; i < 6; i++) {
      _addHouse(1.1 + i * 0.32);
    }
    _letter = _houses[1 + args.rng.nextInt(3)].num;
    hearts = 3;
    startScore();
    startLoop((dt) {
      final speed = lvD(widget.level, 0.12, 0.28);
      for (final h in _houses) {
        h.x -= speed * dt;
      }
      if (_houses.first.x < -0.2) {
        final gone = _houses.removeAt(0);
        _addHouse(_houses.last.x + 0.32);
        if (gone.num == _letter && loseHeart('Missed the house')) return;
        if (gone.num == _letter) _pickLetter();
      }
      setState(() {});
    });
  }

  void _addHouse(double x) {
    _nextNum += 1 + args.rng.nextInt(lvI(widget.level, 2, 6));
    _houses.add(_House(_nextNum, x));
  }

  void _pickLetter() {
    final ahead = _houses.where((h) => h.x > 0.6).toList();
    _letter = ahead.isEmpty ? _houses.last.num : ahead[args.rng.nextInt(math.min(3, ahead.length))].num;
  }

  void _deliver(_House h) {
    if (ended || h.done) return;
    if (h.num == _letter) {
      setState(() => h.done = true);
      if (addPoint()) return;
      _pickLetter();
    } else {
      setState(() {});
      loseHeart('Wrong house');
    }
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        return Stack(children: [
          arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFF86EFAC)]),
          Positioned(left: 0, right: 0, top: h * 0.62, height: h * 0.12, child: Container(color: const Color(0xFF6B7280))),
          for (final hs in _houses)
            Positioned(
              left: hs.x * w - 45,
              top: h * 0.3,
              child: GestureDetector(
                onTap: () => _deliver(hs),
                child: Column(children: [
                  Text(hs.done ? '📬' : '🏡', style: const TextStyle(fontSize: 64)),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(6)),
                    child: Text('${hs.num}', style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 16)),
                  ),
                ]),
              ),
            ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 20,
            child: Center(
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14), boxShadow: const [BoxShadow(color: Colors.black26, blurRadius: 8)]),
                child: Text('✉️  To No. $_letter', style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 22)),
              ),
            ),
          ),
          arcadeTopBar('Tap the right house · $score/$goal', hearts: hearts),
        ]);
      });
}

// ── 70 Coffee Bar ──────────────────────────────────────────────────────────
const _coffeeAttrs = <(String, List<String>)>[
  ('Drink', ['☕ Coffee', '🍵 Tea', '🧋 Boba', '🥤 Soda']),
  ('Size', ['S', 'M', 'L']),
  ('Milk', ['No milk', 'Oat', 'Whole']),
  ('Extra', ['Sugar', 'Ice', 'Cream', 'Nothing']),
];

class CoffeeBarGame extends StatefulWidget {
  const CoffeeBarGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<CoffeeBarGame> createState() => _CoffeeBarState();
}

class _CoffeeBarState extends State<CoffeeBarGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 5, 15);
  late final int _attrs = lvI(widget.level, 2, 4);
  late List<int> _order;
  final _made = <int, int>{};
  double _left = 0;

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    _newOrder();
    startLoop((dt) {
      _left -= dt;
      if (_left <= 0) {
        if (loseHeart('The customer walked out')) return;
        _newOrder();
      }
      setState(() {});
    });
  }

  void _newOrder() {
    _order = [for (var a = 0; a < _attrs; a++) args.rng.nextInt(_coffeeAttrs[a].$2.length)];
    _made.clear();
    _left = lvD(widget.level, 14, 6) + _attrs;
  }

  void _serve() {
    if (ended) return;
    final ok = [for (var a = 0; a < _attrs; a++) _made[a] == _order[a]].every((e) => e);
    if (ok) {
      if (addPoint()) return;
    } else if (loseHeart('Wrong drink')) {
      return;
    }
    setState(_newOrder);
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF78350F), Color(0xFF1C1917)]),
        Column(children: [
          arcadeTopBar('Make it as ordered · $score/$goal', hearts: hearts),
          Container(
            margin: const EdgeInsets.symmetric(horizontal: 18),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: const Color(0xFFFEF3C7), borderRadius: BorderRadius.circular(14)),
            child: Column(children: [
              Row(children: [
                const Text('🧑 ORDER', style: TextStyle(fontWeight: FontWeight.w900, color: Color(0xFF78350F))),
                const Spacer(),
                Text('⏱ ${_left.ceil()}s', style: TextStyle(fontWeight: FontWeight.w900, color: _left < 4 ? Colors.red : const Color(0xFF78350F))),
              ]),
              const SizedBox(height: 6),
              Text([for (var a = 0; a < _attrs; a++) _coffeeAttrs[a].$2[_order[a]]].join(' · '),
                  textAlign: TextAlign.center, style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 18)),
            ]),
          ),
          Expanded(
            child: ListView(padding: const EdgeInsets.all(14), children: [
              for (var a = 0; a < _attrs; a++) ...[
                Text(_coffeeAttrs[a].$1, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800)),
                const SizedBox(height: 6),
                Wrap(spacing: 8, runSpacing: 8, children: [
                  for (var o = 0; o < _coffeeAttrs[a].$2.length; o++)
                    ChoiceChip(
                      label: Text(_coffeeAttrs[a].$2[o], style: const TextStyle(fontWeight: FontWeight.w800)),
                      selected: _made[a] == o,
                      onSelected: (_) => setState(() => _made[a] = o),
                      selectedColor: const Color(0xFFF59E0B),
                    ),
                ]),
                const SizedBox(height: 12),
              ],
            ]),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 0, 18, 14),
            child: SizedBox(
              width: double.infinity,
              height: 54,
              child: FilledButton(onPressed: _serve, style: FilledButton.styleFrom(backgroundColor: const Color(0xFF16A34A)), child: const Text('SERVE ☕', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900))),
            ),
          ),
        ]),
      ]);
}
