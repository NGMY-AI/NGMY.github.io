import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 1–10: building and assembling things.
const kVaultBuildGames = <VaultLvDef>[
  VaultLvDef(id: 'v_car_assembly', title: 'Car Assembly', tagline: 'Install every part on the car in the right order.', emoji: '🚗', icon: Icons.car_repair_rounded, colors: [Color(0xFFEF4444), Color(0xFF1F2937)], tag: 'BUILD', build: _car, seconds: _carSecs),
  VaultLvDef(id: 'v_robot_builder', title: 'Robot Builder', tagline: 'Memorise the blueprint, then build the robot.', emoji: '🤖', icon: Icons.precision_manufacturing_rounded, colors: [Color(0xFF22D3EE), Color(0xFF334155)], tag: 'BUILD', build: _robot),
  VaultLvDef(id: 'v_pc_builder', title: 'PC Builder', tagline: 'Fit each component into its matching slot.', emoji: '🖥️', icon: Icons.memory_rounded, colors: [Color(0xFF8B5CF6), Color(0xFF0F172A)], tag: 'BUILD', build: _pc, seconds: _pcSecs),
  VaultLvDef(id: 'v_house_builder', title: 'House Builder', tagline: 'Copy the blueprint brick by brick.', emoji: '🏠', icon: Icons.house_rounded, colors: [Color(0xFFF59E0B), Color(0xFF7C2D12)], tag: 'BUILD', build: _house, seconds: _houseSecs),
  VaultLvDef(id: 'v_rocket_stack', title: 'Rocket Stack', tagline: 'Stack the stages biggest first, then launch on time.', emoji: '🚀', icon: Icons.rocket_launch_rounded, colors: [Color(0xFF6366F1), Color(0xFF020617)], tag: 'BUILD', build: _rocket, seconds: _rocketSecs),
  VaultLvDef(id: 'v_bridge_planks', title: 'Bridge Planks', tagline: 'Fill every gap with planks that fit exactly.', emoji: '🌉', icon: Icons.architecture_rounded, colors: [Color(0xFF0EA5E9), Color(0xFF78350F)], tag: 'BUILD', build: _bridge, seconds: _bridgeSecs),
  VaultLvDef(id: 'v_circuit_wire', title: 'Circuit Wiring', tagline: 'Connect matching terminals — wires can’t cross.', emoji: '🔌', icon: Icons.cable_rounded, colors: [Color(0xFF10B981), Color(0xFF064E3B)], tag: 'BUILD', build: _circuit),
  VaultLvDef(id: 'v_jigsaw_swap', title: 'Picture Builder', tagline: 'Swap tiles to rebuild the picture.', emoji: '🧩', icon: Icons.extension_rounded, colors: [Color(0xFFEC4899), Color(0xFF4C1D95)], tag: 'BUILD', build: _jigsaw),
  VaultLvDef(id: 'v_gear_chain', title: 'Gear Chain', tagline: 'Pick gears that mesh perfectly to turn the machine.', emoji: '⚙️', icon: Icons.settings_rounded, colors: [Color(0xFF94A3B8), Color(0xFF1E293B)], tag: 'BUILD', build: _gear, seconds: _gearSecs),
  VaultLvDef(id: 'v_key_cutter', title: 'Key Cutter', tagline: 'Cut the key to match the lock.', emoji: '🔑', icon: Icons.vpn_key_rounded, colors: [Color(0xFFFBBF24), Color(0xFF713F12)], tag: 'BUILD', build: _key, seconds: _keySecs),
];

Widget _car(NgmyArcadeArgs a, int l) => CarAssemblyGame(args: a, level: l);
Widget _robot(NgmyArcadeArgs a, int l) => RobotBuilderGame(args: a, level: l);
Widget _pc(NgmyArcadeArgs a, int l) => PcBuilderGame(args: a, level: l);
Widget _house(NgmyArcadeArgs a, int l) => HouseBuilderGame(args: a, level: l);
Widget _rocket(NgmyArcadeArgs a, int l) => RocketStackGame(args: a, level: l);
Widget _bridge(NgmyArcadeArgs a, int l) => BridgePlanksGame(args: a, level: l);
Widget _circuit(NgmyArcadeArgs a, int l) => CircuitWireGame(args: a, level: l);
Widget _jigsaw(NgmyArcadeArgs a, int l) => JigsawSwapGame(args: a, level: l);
Widget _gear(NgmyArcadeArgs a, int l) => GearChainGame(args: a, level: l);
Widget _key(NgmyArcadeArgs a, int l) => KeyCutterGame(args: a, level: l);

int _carSecs(int l) => lvI(l, 4, 12) * lvI(l, 9, 4) + 12;
int _pcSecs(int l) => lvI(l, 3, 8) * lvI(l, 10, 5) + 10;
int _houseSecs(int l) => (math.pow(lvI(l, 3, 6), 2) * lvD(l, 4.0, 2.2)).round() + 15;
int _rocketSecs(int l) => lvI(l, 3, 8) * lvI(l, 8, 4) + 15;
int _bridgeSecs(int l) => lvI(l, 1, 4) * lvI(l, 30, 22) + 15;
int _gearSecs(int l) => lvI(l, 2, 7) * lvI(l, 14, 8) + 10;
int _keySecs(int l) => lvI(l, 4, 9) * lvI(l, 8, 4) + 10;

/// Big tappable tile with an emoji and a label.
Widget _partTile(String emoji, String label, {required VoidCallback onTap, bool dim = false, Color accent = Colors.white, double w = 82}) => GestureDetector(
      onTap: onTap,
      child: AnimatedOpacity(
        duration: const Duration(milliseconds: 200),
        opacity: dim ? 0.25 : 1,
        child: Container(
          width: w,
          padding: const EdgeInsets.symmetric(vertical: 8),
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.08),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: accent.withValues(alpha: 0.5)),
          ),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            Text(emoji, style: const TextStyle(fontSize: 28)),
            const SizedBox(height: 2),
            Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 10.5, fontWeight: FontWeight.w800)),
          ]),
        ),
      ),
    );

// ── 1 Car Assembly ─────────────────────────────────────────────────────────
const _carParts = <(String, String)>[
  ('🛞', 'Wheel'), ('🚪', 'Door'), ('⚙️', 'Engine'), ('💺', 'Seat'), ('💡', 'Headlight'), ('🔋', 'Battery'),
  ('🪞', 'Mirror'), ('📯', 'Horn'), ('🔑', 'Ignition'), ('🛢️', 'Oil tank'), ('📻', 'Radio'), ('🧯', 'Extinguisher'),
  ('🪟', 'Window'), ('🎛️', 'Dashboard'),
];

class CarAssemblyGame extends StatefulWidget {
  const CarAssemblyGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<CarAssemblyGame> createState() => _CarAssemblyState();
}

class _CarAssemblyState extends State<CarAssemblyGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _order.length;
  late final List<(String, String)> _order;
  late final List<(String, String)> _tray;
  int? _shake;

  @override
  void initState() {
    super.initState();
    final pool = List.of(_carParts)..shuffle(args.rng);
    final n = lvI(widget.level, 4, 12);
    _order = pool.take(n).toList();
    _tray = [..._order, ...pool.skip(n).take(lvI(widget.level, 0, 2))]..shuffle(args.rng);
    hearts = 3;
    startScore();
  }

  void _tap(int i) {
    if (ended) return;
    final part = _tray[i];
    if (part == _order[score]) {
      setState(() {});
      addPoint();
    } else {
      setState(() => _shake = i);
      loseHeart('Wrong part');
    }
  }

  @override
  Widget build(BuildContext context) {
    final l = widget.level;
    final need = ended || score >= _order.length ? null : _order[score];
    final hint = l <= 10 ? 'ghost' : (l <= 20 ? 'name' : 'name');
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF1F2937), Color(0xFF0B0F19)]),
      Column(children: [
        arcadeTopBar(need == null ? 'Car complete!' : 'Install: ${need.$2}', hearts: hearts),
        Expanded(
          child: LayoutBuilder(builder: (context, c) {
            final w = c.maxWidth;
            return Stack(children: [
              Positioned(left: w * 0.06, right: w * 0.06, top: c.maxHeight * 0.28, height: c.maxHeight * 0.42, child: CustomPaint(painter: _CarPainter(score / _order.length))),
              Positioned.fill(
                child: Center(
                  child: Wrap(
                    alignment: WrapAlignment.center,
                    spacing: 8,
                    runSpacing: 8,
                    children: [
                      for (var i = 0; i < _order.length; i++)
                        AnimatedContainer(
                          duration: const Duration(milliseconds: 250),
                          width: 46,
                          height: 46,
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: i < score ? const Color(0xFF16A34A).withValues(alpha: 0.85) : Colors.black.withValues(alpha: 0.45),
                            border: Border.all(color: i == score ? const Color(0xFFFDE68A) : Colors.white24, width: i == score ? 3 : 1),
                          ),
                          child: i < score
                              ? Text(_order[i].$1, style: const TextStyle(fontSize: 22))
                              : (i == score && hint == 'ghost' ? Opacity(opacity: 0.35, child: Text(_order[i].$1, style: const TextStyle(fontSize: 22))) : Text('${i + 1}', style: const TextStyle(color: Colors.white38, fontWeight: FontWeight.w900))),
                        ),
                    ],
                  ),
                ),
              ),
            ]);
          }),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(8, 0, 8, 12),
          child: Wrap(
            alignment: WrapAlignment.center,
            spacing: 6,
            runSpacing: 6,
            children: [
              for (var i = 0; i < _tray.length; i++)
                _partTile(_tray[i].$1, _tray[i].$2,
                    onTap: () => _tap(i),
                    dim: _order.take(score).contains(_tray[i]),
                    accent: _shake == i ? const Color(0xFFEF4444) : const Color(0xFF94A3B8),
                    w: 74),
            ],
          ),
        ),
      ]),
    ]);
  }
}

class _CarPainter extends CustomPainter {
  _CarPainter(this.done);
  final double done;
  @override
  void paint(Canvas canvas, Size s) {
    final body = Path()
      ..moveTo(s.width * 0.04, s.height * 0.62)
      ..lineTo(s.width * 0.12, s.height * 0.4)
      ..lineTo(s.width * 0.3, s.height * 0.36)
      ..lineTo(s.width * 0.42, s.height * 0.1)
      ..lineTo(s.width * 0.72, s.height * 0.1)
      ..lineTo(s.width * 0.86, s.height * 0.36)
      ..lineTo(s.width * 0.97, s.height * 0.42)
      ..lineTo(s.width * 0.98, s.height * 0.66)
      ..close();
    final paint = Paint()
      ..shader = LinearGradient(colors: [
        Color.lerp(const Color(0xFF475569), const Color(0xFFDC2626), done)!,
        Color.lerp(const Color(0xFF1E293B), const Color(0xFF7F1D1D), done)!,
      ]).createShader(Offset.zero & s);
    canvas.drawPath(body, paint);
    canvas.drawPath(body, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..color = Colors.white24);
    for (final x in [0.24, 0.78]) {
      canvas.drawCircle(Offset(s.width * x, s.height * 0.68), s.height * 0.16, Paint()..color = const Color(0xFF0B0F19));
      canvas.drawCircle(Offset(s.width * x, s.height * 0.68), s.height * 0.08, Paint()..color = Colors.white24);
    }
  }

  @override
  bool shouldRepaint(covariant _CarPainter old) => old.done != done;
}

// ── 2 Robot Builder (memory) ───────────────────────────────────────────────
const _robotParts = ['🧠', '👁️', '📡', '🦾', '🦿', '🔩', '⚙️', '🔋', '💡', '🧲', '🔧', '🛞', '🎛️', '📟'];

class RobotBuilderGame extends StatefulWidget {
  const RobotBuilderGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<RobotBuilderGame> createState() => _RobotBuilderState();
}

class _RobotBuilderState extends State<RobotBuilderGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _plan.length;
  late final List<String> _plan;
  late final List<String> _tray;
  bool _showing = true;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    final n = lvI(widget.level, 3, 10);
    final r = args.rng;
    _plan = List.generate(n, (_) => _robotParts[r.nextInt(lvI(widget.level, 6, _robotParts.length))]);
    _tray = {..._plan, ...(List.of(_robotParts)..shuffle(r)).take(lvI(widget.level, 2, 5))}.toList()..shuffle(r);
    hearts = widget.level > 20 ? 1 : 2;
    startScore();
    _t = Timer(Duration(milliseconds: 1400 + n * lvI(widget.level, 900, 450)), () {
      if (mounted) setState(() => _showing = false);
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _tap(String part) {
    if (ended || _showing) return;
    if (part == _plan[score]) {
      setState(() {});
      addPoint();
    } else {
      setState(() {});
      if (!loseHeart('Wrong part in the build')) {
        // Peek at the blueprint again for a moment.
        setState(() => _showing = true);
        _t = Timer(const Duration(milliseconds: 1500), () {
          if (mounted) setState(() => _showing = false);
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0E7490), Color(0xFF0B1220)]),
        Column(children: [
          arcadeTopBar(_showing ? 'Memorise the build — top to bottom' : 'Build it · ${score}/${_plan.length}', hearts: hearts, maxHearts: widget.level > 20 ? 1 : 2),
          Expanded(
            child: Center(
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: _showing ? const Color(0xFF1E3A8A).withValues(alpha: 0.6) : Colors.black.withValues(alpha: 0.35),
                  borderRadius: BorderRadius.circular(22),
                  border: Border.all(color: const Color(0xFF67E8F9).withValues(alpha: 0.6), width: 2),
                ),
                child: Wrap(
                  direction: Axis.vertical,
                  spacing: 4,
                  children: [
                    for (var i = 0; i < _plan.length; i++)
                      Container(
                        width: 56,
                        height: 36,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), color: Colors.white.withValues(alpha: i < score ? 0.18 : 0.05)),
                        child: Text(_showing || i < score ? _plan[i] : '?', style: TextStyle(fontSize: 22, color: Colors.white.withValues(alpha: 0.5))),
                      ),
                  ],
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 0, 8, 12),
            child: Wrap(alignment: WrapAlignment.center, spacing: 8, runSpacing: 8, children: [
              for (final p in _tray)
                GestureDetector(
                  onTap: () => _tap(p),
                  child: Container(
                    width: 58,
                    height: 58,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white24)),
                    child: Text(p, style: const TextStyle(fontSize: 30)),
                  ),
                ),
            ]),
          ),
        ]),
      ]);
}

// ── 3 PC Builder (shape slots) ─────────────────────────────────────────────
const _pcParts = ['CPU', 'RAM', 'GPU', 'SSD', 'Fan', 'PSU', 'WiFi', 'Sound'];
const _pcColors = [Color(0xFF22D3EE), Color(0xFFF472B6), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFFFB923C), Color(0xFFA78BFA), Color(0xFFF87171), Color(0xFF60A5FA)];

class PcBuilderGame extends StatefulWidget {
  const PcBuilderGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<PcBuilderGame> createState() => _PcBuilderState();
}

class _PcBuilderState extends State<PcBuilderGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _n;
  late final int _n;
  late final List<int> _shapeOf; // part → shape (0..5)
  late final List<int> _colorOf; // part → colour
  late final List<int> _slotOrder; // slot i holds part _slotOrder[i]
  final _placed = <int>{};
  int? _held;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    _n = lvI(widget.level, 3, 8);
    // Harder levels reuse shapes so colour matters too.
    final shapes = lvI(widget.level, 6, 3);
    _shapeOf = List.generate(_n, (i) => i % shapes);
    _colorOf = List.generate(_n, (i) => widget.level > 12 ? (i * 3) % lvI(widget.level, 8, 4) : i);
    _slotOrder = List.generate(_n, (i) => i)..shuffle(r);
    hearts = 3;
    startScore();
  }

  void _slotTap(int slot) {
    final part = _slotOrder[slot];
    if (ended || _held == null || _placed.contains(part)) return;
    final held = _held!;
    // A part fits a slot with the same shape and colour.
    if (_shapeOf[held] == _shapeOf[part] && _colorOf[held] == _colorOf[part]) {
      setState(() {
        // Either part of an identical pair can go in.
        _placed.add(_placed.contains(part) ? held : part);
        _held = null;
      });
      addPoint();
    } else {
      setState(() => _held = null);
      loseHeart("That part doesn't fit there");
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF312E81), Color(0xFF020617)]),
        Column(children: [
          arcadeTopBar(_held == null ? 'Pick a part, then its slot' : 'Now tap its slot', hearts: hearts),
          Expanded(
            child: Center(
              child: Container(
                margin: const EdgeInsets.all(14),
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: const Color(0xFF064E3B),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: const Color(0xFF34D399), width: 2),
                ),
                child: Wrap(spacing: 12, runSpacing: 12, alignment: WrapAlignment.center, children: [
                  for (var s = 0; s < _n; s++)
                    GestureDetector(
                      onTap: () => _slotTap(s),
                      child: SizedBox(
                        width: 64,
                        height: 64,
                        child: CustomPaint(
                          painter: _ShapePainter(_shapeOf[_slotOrder[s]], _pcColors[_colorOf[_slotOrder[s]]], filled: _placed.contains(_slotOrder[s])),
                          child: Center(
                            child: Text(_placed.contains(_slotOrder[s]) ? _pcParts[_slotOrder[s] % _pcParts.length] : '',
                                style: const TextStyle(color: Colors.black, fontSize: 11, fontWeight: FontWeight.w900)),
                          ),
                        ),
                      ),
                    ),
                ]),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 0, 8, 12),
            child: Wrap(alignment: WrapAlignment.center, spacing: 10, runSpacing: 10, children: [
              for (var p = 0; p < _n; p++)
                if (!_placed.contains(p))
                  GestureDetector(
                    onTap: () => setState(() => _held = p),
                    child: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        color: _held == p ? Colors.white.withValues(alpha: 0.25) : Colors.white.withValues(alpha: 0.06),
                        border: Border.all(color: _held == p ? Colors.white : Colors.white24),
                      ),
                      child: Column(children: [
                        SizedBox(width: 40, height: 40, child: CustomPaint(painter: _ShapePainter(_shapeOf[p], _pcColors[_colorOf[p]], filled: true))),
                        Text(_pcParts[p % _pcParts.length], style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800)),
                      ]),
                    ),
                  ),
            ]),
          ),
        ]),
      ]);
}

class _ShapePainter extends CustomPainter {
  _ShapePainter(this.shape, this.color, {this.filled = false});
  final int shape;
  final Color color;
  final bool filled;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.shortestSide / 2 - 4;
    Path p;
    switch (shape) {
      case 0:
        p = Path()..addOval(Rect.fromCircle(center: c, radius: r));
      case 1:
        p = Path()..addRect(Rect.fromCircle(center: c, radius: r * 0.85));
      case 2:
        p = Path()
          ..moveTo(c.dx, c.dy - r)
          ..lineTo(c.dx + r, c.dy + r * 0.8)
          ..lineTo(c.dx - r, c.dy + r * 0.8)
          ..close();
      case 3:
        p = Path();
        for (var i = 0; i < 6; i++) {
          final a = i * math.pi / 3;
          final pt = c + Offset(math.cos(a), math.sin(a)) * r;
          i == 0 ? p.moveTo(pt.dx, pt.dy) : p.lineTo(pt.dx, pt.dy);
        }
        p.close();
      case 4:
        p = Path()
          ..moveTo(c.dx, c.dy - r)
          ..lineTo(c.dx + r, c.dy)
          ..lineTo(c.dx, c.dy + r)
          ..lineTo(c.dx - r, c.dy)
          ..close();
      default:
        p = Path()..addRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: c, width: r * 2, height: r * 1.1), const Radius.circular(6)));
    }
    if (filled) {
      canvas.drawPath(p, Paint()..color = color);
    } else {
      canvas.drawPath(p, Paint()..color = color.withValues(alpha: 0.12));
      canvas.drawPath(p, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 3
        ..color = color);
    }
  }

  @override
  bool shouldRepaint(covariant _ShapePainter old) => old.shape != shape || old.color != color || old.filled != filled;
}

// ── 4 House Builder (copy the blueprint) ───────────────────────────────────
const _houseColors = [Color(0xFFB91C1C), Color(0xFF92400E), Color(0xFF38BDF8), Color(0xFF64748B), Color(0xFF16A34A), Color(0xFFFACC15)];

class HouseBuilderGame extends StatefulWidget {
  const HouseBuilderGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<HouseBuilderGame> createState() => _HouseBuilderState();
}

class _HouseBuilderState extends State<HouseBuilderGame> {
  late final int _s, _k;
  late final List<int> _target;
  late final List<int> _grid;
  int _brush = 0;
  bool _peek = true;
  Timer? _t;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _s = lvI(widget.level, 3, 6);
    _k = lvI(widget.level, 2, 6);
    _target = List.generate(_s * _s, (_) => r.nextInt(_k));
    _grid = List.filled(_s * _s, -1);
    widget.args.onProgress(0, _s * _s);
    // Later levels: the blueprint hides; peek costs a moment.
    if (widget.level > 15) _t = Timer(Duration(milliseconds: lvI(widget.level, 6000, 3000)), () => mounted ? setState(() => _peek = false) : null);
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  int get _correct => [for (var i = 0; i < _grid.length; i++) if (_grid[i] == _target[i]) 1].length;

  void _paint(int i) {
    if (_over) return;
    setState(() => _grid[i] = _brush);
    HapticFeedback.selectionClick();
    widget.args.onProgress(_correct, _grid.length);
    if (_correct == _grid.length) {
      _over = true;
      widget.args.onComplete();
    }
  }

  Widget _gridView(List<int> cells, {bool small = false}) => AspectRatio(
        aspectRatio: 1,
        child: GridView.count(
          crossAxisCount: _s,
          physics: const NeverScrollableScrollPhysics(),
          padding: EdgeInsets.zero,
          children: [
            for (var i = 0; i < cells.length; i++)
              GestureDetector(
                onTap: small ? null : () => _paint(i),
                child: Container(
                  margin: EdgeInsets.all(small ? 1 : 2),
                  decoration: BoxDecoration(
                    color: cells[i] < 0 ? Colors.white.withValues(alpha: 0.06) : _houseColors[cells[i]],
                    borderRadius: BorderRadius.circular(small ? 2 : 6),
                    border: small ? null : Border.all(color: Colors.white12),
                  ),
                ),
              ),
          ],
        ),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF78350F), Color(0xFF1C1917)]),
        Column(children: [
          ArcadeBanner(child: Text(widget.level > 15 ? 'Remember the blueprint, then build it' : 'Build what the blueprint shows')),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            SizedBox(
              width: 110,
              child: _peek
                  ? _gridView(_target, small: true)
                  : GestureDetector(
                      onTap: () {
                        setState(() => _peek = true);
                        _t = Timer(const Duration(milliseconds: 1200), () => mounted ? setState(() => _peek = false) : null);
                      },
                      child: Container(
                        height: 110,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(10)),
                        child: const Text('📐\nTap to peek', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, fontSize: 12)),
                      ),
                    ),
            ),
          ]),
          Expanded(child: Padding(padding: const EdgeInsets.all(14), child: Center(child: _gridView(_grid)))),
          Padding(
            padding: const EdgeInsets.only(bottom: 14),
            child: Wrap(spacing: 10, children: [
              for (var c = 0; c < _k; c++)
                GestureDetector(
                  onTap: () => setState(() => _brush = c),
                  child: Container(
                    width: 44,
                    height: 44,
                    decoration: BoxDecoration(
                      color: _houseColors[c],
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: _brush == c ? Colors.white : Colors.white24, width: _brush == c ? 3 : 1),
                    ),
                  ),
                ),
            ]),
          ),
        ]),
      ]);
}

// ── 5 Rocket Stack ─────────────────────────────────────────────────────────
class RocketStackGame extends StatefulWidget {
  const RocketStackGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<RocketStackGame> createState() => _RocketStackState();
}

class _RocketStackState extends State<RocketStackGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _n + 1;
  late final int _n;
  late final List<int> _widths; // shuffled stage widths
  final _stacked = <int>[];
  double _needle = 0, _dir = 1, _launch = 0;
  bool _fuelPhase = false;

  @override
  void initState() {
    super.initState();
    _n = lvI(widget.level, 3, 8);
    final r = args.rng;
    final ws = <int>{};
    while (ws.length < _n) {
      ws.add(30 + r.nextInt(lvI(widget.level, 60, 22)) * 3);
    }
    _widths = ws.toList()..shuffle(r);
    hearts = 3;
    startScore();
    startLoop((dt) {
      if (_fuelPhase) {
        _needle += _dir * lvD(widget.level, 0.7, 1.9) * dt;
        if (_needle > 1) _dir = -1;
        if (_needle < 0) _dir = 1;
      }
      if (_launch > 0) _launch += dt;
      setState(() {});
    });
  }

  double get _zone => lvD(widget.level, 0.24, 0.08);

  void _pick(int w) {
    if (ended || _fuelPhase) return;
    final remaining = _widths.where((x) => !_stacked.contains(x)).toList()..sort();
    if (w == remaining.last) {
      _stacked.add(w);
      addPoint();
      if (_stacked.length == _n) _fuelPhase = true;
    } else {
      loseHeart('Bigger stages go first');
    }
  }

  void _fuel() {
    if (!_fuelPhase || ended) return;
    if ((_needle - 0.5).abs() < _zone / 2) {
      _launch = 0.01;
      addPoint();
    } else {
      loseHeart('Fuel mix was off');
    }
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => _fuel(),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFF1E1B4B), Color(0xFF020617)]),
          arcadeTopBar(_fuelPhase ? 'Tap when the needle is in the green!' : 'Stack the biggest stage first', hearts: hearts),
          Positioned.fill(
            top: 60,
            bottom: 150,
            child: Transform.translate(
              offset: Offset(0, -_launch * _launch * 400),
              child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                if (_stacked.length == _n) const Text('🔺', style: TextStyle(fontSize: 34)),
                for (final w in _stacked.reversed)
                  Container(
                    width: w.toDouble(),
                    height: 28,
                    margin: const EdgeInsets.only(top: 2),
                    decoration: BoxDecoration(
                      gradient: const LinearGradient(colors: [Color(0xFFE2E8F0), Color(0xFF94A3B8)]),
                      borderRadius: BorderRadius.circular(6),
                      border: Border.all(color: const Color(0xFF6366F1), width: 2),
                    ),
                  ),
                if (_launch > 0) const Text('🔥', style: TextStyle(fontSize: 40)),
              ]),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 12,
            child: _fuelPhase
                ? LayoutBuilder(builder: (context, c) {
                    final w = c.maxWidth * 0.82;
                    return Center(
                      child: SizedBox(
                        width: w,
                        height: 40,
                        child: Stack(children: [
                          Container(decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(20))),
                          Positioned(left: (0.5 - _zone / 2) * w, width: _zone * w, top: 4, bottom: 4, child: Container(decoration: BoxDecoration(color: const Color(0xFF22C55E), borderRadius: BorderRadius.circular(14)))),
                          Positioned(left: (_needle * w - 3).clamp(0.0, w - 6), top: -4, bottom: -4, child: Container(width: 6, color: Colors.white)),
                        ]),
                      ),
                    );
                  })
                : Wrap(alignment: WrapAlignment.center, spacing: 8, runSpacing: 8, children: [
                    for (final w in _widths)
                      if (!_stacked.contains(w))
                        GestureDetector(
                          onTap: () => _pick(w),
                          child: Container(
                            width: w * 0.8,
                            height: 30,
                            decoration: BoxDecoration(
                              gradient: const LinearGradient(colors: [Color(0xFFCBD5E1), Color(0xFF64748B)]),
                              borderRadius: BorderRadius.circular(6),
                            ),
                          ),
                        ),
                  ]),
          ),
        ]),
      );
}

// ── 6 Bridge Planks ────────────────────────────────────────────────────────
class BridgePlanksGame extends StatefulWidget {
  const BridgePlanksGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BridgePlanksGame> createState() => _BridgePlanksState();
}

class _BridgePlanksState extends State<BridgePlanksGame> {
  late final List<int> _gaps;
  late final List<int> _planks;
  final _used = <int>{};
  final List<List<int>> _inGap = [];
  int _g = 0;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    final gaps = lvI(widget.level, 1, 4);
    final maxLen = lvI(widget.level, 6, 14);
    _gaps = [];
    _planks = [];
    for (var i = 0; i < gaps; i++) {
      final len = 3 + r.nextInt(maxLen - 2);
      _gaps.add(len);
      // Split into 1–3 planks.
      var left = len;
      final parts = lvI(widget.level, 2, 3);
      for (var p = 0; p < parts - 1 && left > 1; p++) {
        final piece = 1 + r.nextInt(left - 1);
        _planks.add(piece);
        left -= piece;
      }
      _planks.add(left);
      _inGap.add([]);
    }
    for (var d = 0; d < lvI(widget.level, 0, 5); d++) {
      _planks.add(1 + r.nextInt(maxLen ~/ 2 + 1));
    }
    _planks.shuffle(r);
    widget.args.onProgress(0, _gaps.length);
  }

  int _sum(int g) => _inGap[g].fold(0, (s, i) => s + _planks[i]);

  void _place(int i) {
    if (_over || _used.contains(i)) return;
    final cur = _sum(_g);
    if (cur + _planks[i] > _gaps[_g]) {
      HapticFeedback.heavyImpact();
      return;
    }
    setState(() {
      _used.add(i);
      _inGap[_g].add(i);
    });
    HapticFeedback.selectionClick();
    if (_sum(_g) == _gaps[_g]) {
      _g++;
      widget.args.onProgress(_g, _gaps.length);
      if (_g == _gaps.length) {
        _over = true;
        widget.args.onComplete();
      }
    }
  }

  void _undo() {
    if (_over) return;
    setState(() {
      if (_inGap[_g].isEmpty && _g > 0) {
        _g--;
        widget.args.onProgress(_g, _gaps.length);
      }
      if (_inGap[_g].isNotEmpty) _used.remove(_inGap[_g].removeLast());
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0EA5E9), Color(0xFF075985)]),
        Column(children: [
          ArcadeBanner(child: Text('Gap ${math.min(_g + 1, _gaps.length)}/${_gaps.length}: fill exactly ${_g < _gaps.length ? _gaps[_g] : 0} m')),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final unit = (c.maxWidth - 40) / (_gaps.isEmpty ? 1 : _gaps.reduce(math.max) + 2);
              return ListView(padding: const EdgeInsets.all(16), children: [
                for (var g = 0; g < _gaps.length; g++)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 18),
                    child: Row(children: [
                      Container(width: unit, height: 40, color: const Color(0xFF15803D)),
                      Container(
                        width: unit * _gaps[g],
                        height: 40,
                        decoration: BoxDecoration(
                          border: Border.all(color: g == _g ? const Color(0xFFFDE68A) : Colors.white24, width: g == _g ? 2 : 1),
                          color: const Color(0xFF0C4A6E).withValues(alpha: 0.5),
                        ),
                        child: Row(children: [
                          for (final i in _inGap[g])
                            Container(
                              width: unit * _planks[i],
                              decoration: BoxDecoration(color: const Color(0xFFB45309), border: Border.all(color: const Color(0xFF78350F))),
                              alignment: Alignment.center,
                              child: Text('${_planks[i]}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                            ),
                        ]),
                      ),
                      Container(width: unit, height: 40, color: const Color(0xFF15803D)),
                    ]),
                  ),
              ]);
            }),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
            child: Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
              for (var i = 0; i < _planks.length; i++)
                if (!_used.contains(i))
                  GestureDetector(
                    onTap: () => _place(i),
                    child: Container(
                      width: 22.0 + _planks[i] * 12,
                      height: 34,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(color: const Color(0xFFB45309), borderRadius: BorderRadius.circular(6), border: Border.all(color: const Color(0xFFFDE68A).withValues(alpha: 0.6))),
                      child: Text('${_planks[i]} m', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                    ),
                  ),
            ]),
          ),
          TextButton.icon(onPressed: _undo, icon: const Icon(Icons.undo_rounded, color: Colors.white70), label: const Text('Undo', style: TextStyle(color: Colors.white70))),
        ]),
      ]);
}

// ── 7 Circuit Wiring ───────────────────────────────────────────────────────
const _wireColors = [Color(0xFFEF4444), Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFFACC15), Color(0xFFA855F7), Color(0xFFF97316), Color(0xFF06B6D4), Color(0xFFEC4899)];

class CircuitWireGame extends StatefulWidget {
  const CircuitWireGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<CircuitWireGame> createState() => _CircuitWireState();
}

class _CircuitWireState extends State<CircuitWireGame> {
  late final int _s;
  final _ends = <int, int>{}; // cell → colour
  final _pairs = <(int, int)>[];
  final Map<int, List<int>> _paths = {};
  int? _drawing;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _s = lvI(widget.level, 5, 8);
    final want = lvI(widget.level, 2, 7);
    final r = widget.args.rng;
    final used = <int>{};
    var tries = 0;
    while (_pairs.length < want && tries < 400) {
      tries++;
      var cur = r.nextInt(_s * _s);
      if (used.contains(cur)) continue;
      final path = [cur];
      final len = 3 + r.nextInt(_s);
      for (var k = 0; k < len; k++) {
        final opts = _nbrs(cur).where((n) => !used.contains(n) && !path.contains(n)).toList();
        if (opts.isEmpty) break;
        cur = opts[r.nextInt(opts.length)];
        path.add(cur);
      }
      if (path.length < 3) continue;
      used.addAll(path);
      final color = _pairs.length;
      _pairs.add((path.first, path.last));
      _ends[path.first] = color;
      _ends[path.last] = color;
    }
    widget.args.onProgress(0, _pairs.length);
  }

  List<int> _nbrs(int i) => [
        if (i % _s > 0) i - 1,
        if (i % _s < _s - 1) i + 1,
        if (i >= _s) i - _s,
        if (i < _s * (_s - 1)) i + _s,
      ];

  int? _colorAt(int cell) {
    if (_ends.containsKey(cell)) return _ends[cell];
    for (final e in _paths.entries) {
      if (e.value.contains(cell)) return e.key;
    }
    return null;
  }

  bool _connected(int color) {
    final p = _paths[color];
    if (p == null || p.length < 2) return false;
    final (a, b) = _pairs[color];
    return (p.first == a && p.last == b) || (p.first == b && p.last == a);
  }

  int get _doneCount => [for (var c = 0; c < _pairs.length; c++) if (_connected(c)) 1].length;

  void _start(int cell) {
    if (_over) return;
    final c = _ends[cell];
    if (c == null) return;
    setState(() {
      _drawing = c;
      _paths[c] = [cell];
    });
  }

  void _move(int cell) {
    final c = _drawing;
    if (c == null || _over) return;
    final p = _paths[c]!;
    if (p.last == cell) return;
    if (!_nbrs(p.last).contains(cell)) return;
    if (p.length >= 2 && p[p.length - 2] == cell) {
      setState(() => p.removeLast());
      return;
    }
    if (_connected(c)) return;
    final owner = _colorAt(cell);
    if (owner != null && owner != c) return; // can't cross
    if (p.contains(cell)) return;
    if (_ends.containsKey(cell) && _ends[cell] != c) return;
    setState(() => p.add(cell));
    if (_connected(c)) {
      HapticFeedback.mediumImpact();
      widget.args.onProgress(_doneCount, _pairs.length);
      if (_doneCount == _pairs.length) {
        _over = true;
        widget.args.onComplete();
      }
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF064E3B), Color(0xFF022C22)]),
        Column(children: [
          ArcadeBanner(child: Text('Drag to wire matching dots · $_doneCount/${_pairs.length}')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(14),
                  child: LayoutBuilder(builder: (context, c) {
                    final cs = c.maxWidth / _s;
                    int cellAt(Offset o) => (o.dy ~/ cs).clamp(0, _s - 1) * _s + (o.dx ~/ cs).clamp(0, _s - 1);
                    return GestureDetector(
                      onPanStart: (d) => _start(cellAt(d.localPosition)),
                      onPanUpdate: (d) => _move(cellAt(d.localPosition)),
                      onPanEnd: (_) => _drawing = null,
                      onTapDown: (d) => _start(cellAt(d.localPosition)),
                      child: CustomPaint(size: Size(c.maxWidth, c.maxWidth), painter: _WirePainter(_s, _ends, _paths)),
                    );
                  }),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

class _WirePainter extends CustomPainter {
  _WirePainter(this.s, this.ends, this.paths);
  final int s;
  final Map<int, int> ends;
  final Map<int, List<int>> paths;
  @override
  void paint(Canvas canvas, Size size) {
    final cs = size.width / s;
    final grid = Paint()
      ..color = Colors.white12
      ..style = PaintingStyle.stroke;
    for (var i = 0; i <= s; i++) {
      canvas.drawLine(Offset(i * cs, 0), Offset(i * cs, size.height), grid);
      canvas.drawLine(Offset(0, i * cs), Offset(size.width, i * cs), grid);
    }
    Offset ctr(int cell) => Offset((cell % s + 0.5) * cs, (cell ~/ s + 0.5) * cs);
    for (final e in paths.entries) {
      if (e.value.length < 2) continue;
      final path = Path()..moveTo(ctr(e.value.first).dx, ctr(e.value.first).dy);
      for (final cell in e.value.skip(1)) {
        path.lineTo(ctr(cell).dx, ctr(cell).dy);
      }
      canvas.drawPath(path, Paint()
        ..color = _wireColors[e.key % _wireColors.length]
        ..style = PaintingStyle.stroke
        ..strokeWidth = cs * 0.32
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round);
    }
    for (final e in ends.entries) {
      canvas.drawCircle(ctr(e.key), cs * 0.36, Paint()..color = _wireColors[e.value % _wireColors.length]);
      canvas.drawCircle(ctr(e.key), cs * 0.36, Paint()
        ..color = Colors.white
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 8 Picture Builder (swap tiles) ─────────────────────────────────────────
class JigsawSwapGame extends StatefulWidget {
  const JigsawSwapGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<JigsawSwapGame> createState() => _JigsawSwapState();
}

class _JigsawSwapState extends State<JigsawSwapGame> {
  late final int _s;
  late final List<int> _tiles; // position → piece
  late final int _scene;
  int? _sel;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _s = lvI(widget.level, 3, 6);
    _scene = widget.args.rng.nextInt(3);
    _tiles = List.generate(_s * _s, (i) => i);
    do {
      _tiles.shuffle(widget.args.rng);
    } while (_correct == _tiles.length);
    widget.args.onProgress(_correct, _tiles.length);
  }

  int get _correct => [for (var i = 0; i < _tiles.length; i++) if (_tiles[i] == i) 1].length;

  void _tap(int i) {
    if (_over) return;
    if (_sel == null) {
      setState(() => _sel = i);
      return;
    }
    final j = _sel!;
    setState(() {
      final t = _tiles[i];
      _tiles[i] = _tiles[j];
      _tiles[j] = t;
      _sel = null;
    });
    HapticFeedback.selectionClick();
    widget.args.onProgress(_correct, _tiles.length);
    if (_correct == _tiles.length) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF4C1D95), Color(0xFF1E1B4B)]),
        Column(children: [
          const ArcadeBanner(child: Text('Tap two tiles to swap them')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(12),
                  child: LayoutBuilder(builder: (context, c) {
                    final size = c.maxWidth;
                    final ts = size / _s;
                    return Stack(children: [
                      for (var pos = 0; pos < _tiles.length; pos++)
                        Positioned(
                          left: (pos % _s) * ts,
                          top: (pos ~/ _s) * ts,
                          width: ts,
                          height: ts,
                          child: GestureDetector(
                            onTap: () => _tap(pos),
                            child: Container(
                              margin: const EdgeInsets.all(1),
                              decoration: BoxDecoration(border: Border.all(color: _sel == pos ? Colors.white : Colors.black26, width: _sel == pos ? 3 : 1)),
                              child: ClipRect(
                                child: OverflowBox(
                                  alignment: Alignment.topLeft,
                                  maxWidth: size,
                                  maxHeight: size,
                                  minWidth: size,
                                  minHeight: size,
                                  child: Transform.translate(
                                    offset: Offset(-(_tiles[pos] % _s) * ts, -(_tiles[pos] ~/ _s) * ts),
                                    child: CustomPaint(size: Size(size, size), painter: _ScenePainter(_scene)),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                    ]);
                  }),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

class _ScenePainter extends CustomPainter {
  _ScenePainter(this.scene);
  final int scene;
  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width, h = s.height;
    final skies = [
      [const Color(0xFF38BDF8), const Color(0xFFFDE68A)],
      [const Color(0xFF1E1B4B), const Color(0xFFDB2777)],
      [const Color(0xFF0EA5E9), const Color(0xFFBAE6FD)],
    ];
    canvas.drawRect(Offset.zero & s, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: skies[scene]).createShader(Offset.zero & s));
    canvas.drawCircle(Offset(w * 0.78, h * 0.2), w * 0.1, Paint()..color = scene == 1 ? const Color(0xFFFEF3C7) : const Color(0xFFFACC15));
    final hills = Path()
      ..moveTo(0, h * 0.62)
      ..quadraticBezierTo(w * 0.25, h * 0.45, w * 0.5, h * 0.6)
      ..quadraticBezierTo(w * 0.75, h * 0.75, w, h * 0.55)
      ..lineTo(w, h)
      ..lineTo(0, h)
      ..close();
    canvas.drawPath(hills, Paint()..color = scene == 2 ? const Color(0xFFF1F5F9) : const Color(0xFF16A34A));
    canvas.drawRect(Rect.fromLTWH(w * 0.2, h * 0.52, w * 0.24, h * 0.2), Paint()..color = const Color(0xFFDC2626));
    final roof = Path()
      ..moveTo(w * 0.17, h * 0.53)
      ..lineTo(w * 0.32, h * 0.38)
      ..lineTo(w * 0.47, h * 0.53)
      ..close();
    canvas.drawPath(roof, Paint()..color = const Color(0xFF7C2D12));
    canvas.drawRect(Rect.fromLTWH(w * 0.29, h * 0.6, w * 0.06, h * 0.12), Paint()..color = const Color(0xFF451A03));
    canvas.drawRect(Rect.fromLTWH(w * 0.7, h * 0.5, w * 0.04, h * 0.18), Paint()..color = const Color(0xFF78350F));
    canvas.drawCircle(Offset(w * 0.72, h * 0.46), w * 0.09, Paint()..color = const Color(0xFF15803D));
    for (var i = 0; i < 6; i++) {
      canvas.drawCircle(Offset(w * (0.08 + i * 0.16), h * 0.88), w * 0.025, Paint()..color = [Colors.pink, Colors.yellow, Colors.white][i % 3]);
    }
  }

  @override
  bool shouldRepaint(covariant _ScenePainter old) => old.scene != scene;
}

// ── 9 Gear Chain ───────────────────────────────────────────────────────────
class GearChainGame extends StatefulWidget {
  const GearChainGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<GearChainGame> createState() => _GearChainState();
}

class _GearChainState extends State<GearChainGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _radii.length - 1;
  late final List<int> _radii; // gear 0 is given
  late final List<int> _tray;
  double _spin = 0;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    final n = lvI(widget.level, 2, 7) + 1;
    final maxR = lvI(widget.level, 4, 7);
    _radii = List.generate(n, (_) => 2 + r.nextInt(maxR - 1));
    _tray = [..._radii.skip(1), for (var d = 0; d < lvI(widget.level, 1, 5); d++) 2 + r.nextInt(maxR - 1)]..shuffle(r);
    hearts = 3;
    startScore();
    startLoop((dt) {
      _spin += dt * (score + 1) * 0.8;
      setState(() {});
    });
  }

  void _pick(int idx) {
    if (ended) return;
    final want = _radii[score + 1];
    if (_tray[idx] == want) {
      setState(() => _tray.removeAt(idx));
      addPoint();
    } else {
      loseHeart("That gear doesn't mesh");
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF334155), Color(0xFF0F172A)]),
        Column(children: [
          arcadeTopBar('Gear ${math.min(score + 2, _radii.length)}: it must just touch its neighbour', hearts: hearts),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final total = _radii.fold<int>(0, (a, b) => a + b * 2);
              final unit = math.min((c.maxWidth - 30) / total, c.maxHeight / 14);
              return Center(
                child: CustomPaint(size: Size(c.maxWidth, c.maxHeight), painter: _GearPainter(_radii, score + 1, unit, _spin)),
              );
            }),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 0, 8, 12),
            child: Wrap(spacing: 10, runSpacing: 10, alignment: WrapAlignment.center, children: [
              for (var i = 0; i < _tray.length; i++)
                GestureDetector(
                  onTap: () => _pick(i),
                  child: Container(
                    width: 56,
                    height: 56,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white24)),
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      Icon(Icons.settings_rounded, color: const Color(0xFFCBD5E1), size: 14.0 + _tray[i] * 3),
                      Text('${_tray[i]}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11)),
                    ]),
                  ),
                ),
            ]),
          ),
        ]),
      ]);
}

class _GearPainter extends CustomPainter {
  _GearPainter(this.radii, this.placed, this.unit, this.spin);
  final List<int> radii;
  final int placed;
  final double unit, spin;
  @override
  void paint(Canvas canvas, Size s) {
    final total = radii.fold<int>(0, (a, b) => a + b * 2) * unit;
    var x = (s.width - total) / 2;
    final y = s.height / 2;
    for (var i = 0; i < radii.length; i++) {
      final r = radii[i] * unit;
      final c = Offset(x + r, y);
      x += r * 2;
      final shown = i < placed;
      final paint = Paint()..color = shown ? (i == 0 ? const Color(0xFFFBBF24) : const Color(0xFFCBD5E1)) : Colors.white10;
      final teeth = radii[i] * 4;
      final dir = i.isEven ? 1 : -1;
      final rot = spin * dir / radii[i];
      if (shown) {
        for (var t = 0; t < teeth; t++) {
          final a = rot + t * math.pi * 2 / teeth;
          canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * r, unit * 0.32, paint);
        }
      }
      canvas.drawCircle(c, r * 0.92, paint);
      canvas.drawCircle(c, r * 0.92, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = shown ? Colors.black26 : Colors.white24);
      canvas.drawCircle(c, r * 0.22, Paint()..color = const Color(0xFF0F172A));
      if (!shown) {
        final tp = TextPainter(text: TextSpan(text: '?', style: TextStyle(color: Colors.white54, fontSize: r * 0.8)), textDirection: TextDirection.ltr)..layout();
        tp.paint(canvas, c - Offset(tp.width / 2, tp.height / 2));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _GearPainter old) => true;
}

// ── 10 Key Cutter ──────────────────────────────────────────────────────────
class KeyCutterGame extends StatefulWidget {
  const KeyCutterGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<KeyCutterGame> createState() => _KeyCutterState();
}

class _KeyCutterState extends State<KeyCutterGame> {
  late final int _cols, _maxH;
  late final List<int> _target, _key;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _cols = lvI(widget.level, 4, 9);
    _maxH = lvI(widget.level, 4, 8);
    _target = List.generate(_cols, (_) => 1 + r.nextInt(_maxH));
    _key = List.generate(_cols, (_) => 1 + r.nextInt(_maxH));
    if (_matches == _cols) _key[0] = _key[0] % _maxH + 1;
    widget.args.onProgress(_matches, _cols);
  }

  int get _matches => [for (var i = 0; i < _cols; i++) if (_key[i] == _target[i]) 1].length;

  void _adj(int i, int d) {
    if (_over) return;
    setState(() => _key[i] = (_key[i] + d).clamp(1, _maxH));
    HapticFeedback.selectionClick();
    widget.args.onProgress(_matches, _cols);
    if (_matches == _cols) {
      _over = true;
      widget.args.onComplete();
    }
  }

  Widget _bars(List<int> h, Color color, {bool flip = false}) => Row(
        crossAxisAlignment: flip ? CrossAxisAlignment.start : CrossAxisAlignment.end,
        children: [
          for (var i = 0; i < _cols; i++)
            Expanded(
              child: Container(
                margin: const EdgeInsets.symmetric(horizontal: 2),
                height: 10.0 + h[i] * 12,
                decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(4)),
              ),
            ),
        ],
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF713F12), Color(0xFF1C1917)]),
        Column(children: [
          ArcadeBanner(child: Text('Match the lock pins · ${_matches}/$_cols')),
          // Hide the exact lock heights on hard levels: only show which columns match.
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: SizedBox(
              height: 10.0 + _maxH * 12,
              child: _bars(_target, widget.level > 18 ? Colors.white12 : const Color(0xFF94A3B8), flip: true),
            ),
          ),
          const SizedBox(height: 8),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(children: [
              for (var i = 0; i < _cols; i++)
                Expanded(child: Icon(_key[i] == _target[i] ? Icons.check_circle_rounded : (widget.level > 18 ? (_key[i] < _target[i] ? Icons.arrow_upward_rounded : Icons.arrow_downward_rounded) : Icons.circle_outlined), color: _key[i] == _target[i] ? const Color(0xFF4ADE80) : Colors.white38, size: 18)),
            ]),
          ),
          const SizedBox(height: 8),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 20),
              child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                SizedBox(height: 10.0 + _maxH * 12, child: _bars(_key, const Color(0xFFFBBF24))),
                Container(height: 26, decoration: BoxDecoration(color: const Color(0xFFFBBF24), borderRadius: BorderRadius.circular(6))),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 14),
            child: Row(children: [
              for (var i = 0; i < _cols; i++)
                Expanded(
                  child: Column(children: [
                    IconButton(onPressed: () => _adj(i, 1), icon: const Icon(Icons.keyboard_arrow_up_rounded, color: Colors.white), visualDensity: VisualDensity.compact),
                    IconButton(onPressed: () => _adj(i, -1), icon: const Icon(Icons.keyboard_arrow_down_rounded, color: Colors.white), visualDensity: VisualDensity.compact),
                  ]),
                ),
            ]),
          ),
        ]),
      ]);
}
