import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 91–100: craft and creative skill.
final kVaultCraftGames = <VaultLvDef>[
  VaultLvDef(id: 'v_paint_mix', title: 'Paint Mixer', tagline: 'Mix drops of paint to match the colour.', emoji: '🎨', icon: Icons.palette_rounded, colors: const [Color(0xFFEC4899), Color(0xFF4C1D95)], tag: 'CRAFT', build: (a, l) => PaintMixerGame(args: a, level: l)),
  VaultLvDef(id: 'v_pizza_cut', title: 'Fair Pizza', tagline: 'Cut the pizza into equal slices.', emoji: '🍕', icon: Icons.local_pizza_rounded, colors: const [Color(0xFFF59E0B), Color(0xFF7C2D12)], tag: 'CRAFT', build: (a, l) => PizzaCutGame(args: a, level: l)),
  VaultLvDef(id: 'v_lock_pick', title: 'Lock Picker', tagline: 'Set every pin at the right moment.', emoji: '🔓', icon: Icons.lock_open_rounded, colors: const [Color(0xFFD4AF37), Color(0xFF1C1917)], tag: 'CRAFT', build: (a, l) => LockPickGame(args: a, level: l)),
  VaultLvDef(id: 'v_engine_tune', title: 'Engine Tuner', tagline: 'Set the dials so every gauge is in the green.', emoji: '🔧', icon: Icons.tune_rounded, colors: const [Color(0xFF22D3EE), Color(0xFF0F172A)], tag: 'CRAFT', build: (a, l) => EngineTuneGame(args: a, level: l), seconds: (l) => lvI(l, 2, 5) * lvI(l, 40, 30) + 10),
  VaultLvDef(id: 'v_frosting', title: 'Frosting Artist', tagline: 'Trace the pattern neatly with your finger.', emoji: '🧁', icon: Icons.gesture_rounded, colors: const [Color(0xFFF9A8D4), Color(0xFF831843)], tag: 'CRAFT', build: (a, l) => FrostingGame(args: a, level: l)),
  VaultLvDef(id: 'v_constellation', title: 'Star Maps', tagline: 'Watch the constellation, then join the stars.', emoji: '✨', icon: Icons.auto_awesome_rounded, colors: const [Color(0xFF818CF8), Color(0xFF020617)], tag: 'CRAFT', build: (a, l) => ConstellationGame(args: a, level: l)),
  VaultLvDef(id: 'v_morse', title: 'Morse Code', tagline: 'Read the dots and dashes.', emoji: '📡', icon: Icons.settings_input_antenna_rounded, colors: const [Color(0xFF34D399), Color(0xFF022C22)], tag: 'CRAFT', build: (a, l) => ArcadeQuiz(args: a, goal: lvI(l, 5, 10), strikes: l > 20 ? 2 : 3, colors: const [Color(0xFF34D399), Color(0xFF022C22)], hint: 'Decode', optionFontSize: 20, make: _morseQ(l))),
  VaultLvDef(id: 'v_recipe_pour', title: 'Recipe Pour', tagline: 'Pour each ingredient to the exact amount.', emoji: '⚖️', icon: Icons.scale_rounded, colors: const [Color(0xFFFBBF24), Color(0xFF78350F)], tag: 'CRAFT', build: (a, l) => RecipePourGame(args: a, level: l)),
  VaultLvDef(id: 'v_shelf_sort', title: 'Shelf Sort', tagline: 'Swap items to line them up smallest to biggest.', emoji: '🛒', icon: Icons.shelves, colors: const [Color(0xFF60A5FA), Color(0xFF1E3A8A)], tag: 'CRAFT', build: (a, l) => ShelfSortGame(args: a, level: l)),
  VaultLvDef(id: 'v_kaleido', title: 'Kaleidoscope', tagline: 'Turn the rings until every gem points up.', emoji: '🔯', icon: Icons.blur_circular_rounded, colors: const [Color(0xFFE879F9), Color(0xFF3B0764)], tag: 'CRAFT', build: (a, l) => KaleidoscopeGame(args: a, level: l)),
];

// ── 91 Paint Mixer ─────────────────────────────────────────────────────────
const _paints = <(String, Color)>[
  ('Red', Color(0xFFE53935)),
  ('Yellow', Color(0xFFFDD835)),
  ('Blue', Color(0xFF1E88E5)),
  ('White', Color(0xFFFFFFFF)),
  ('Black', Color(0xFF212121)),
];

Color _mix(List<int> drops) {
  final total = drops.fold(0, (a, b) => a + b);
  if (total == 0) return const Color(0xFFE5E7EB);
  double ch(double Function(Color) f) {
    var logSum = 0.0;
    for (var i = 0; i < drops.length; i++) {
      if (drops[i] > 0) logSum += drops[i] * math.log(math.max(8, f(_paints[i].$2) * 255));
    }
    return math.exp(logSum / total) / 255;
  }

  return Color.from(alpha: 1, red: ch((c) => c.r), green: ch((c) => c.g), blue: ch((c) => c.b));
}

double _colorDist(Color a, Color b) => math.sqrt(math.pow((a.r - b.r) * 255, 2) + math.pow((a.g - b.g) * 255, 2) + math.pow((a.b - b.b) * 255, 2));

class PaintMixerGame extends StatefulWidget {
  const PaintMixerGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<PaintMixerGame> createState() => _PaintMixerState();
}

class _PaintMixerState extends State<PaintMixerGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 5);
  late Color _target;
  final _drops = List.filled(5, 0);
  late final double _tol = lvD(widget.level, 42, 16);

  @override
  void initState() {
    super.initState();
    startScore();
    _newTarget();
  }

  void _newTarget() {
    final r = args.rng;
    final recipe = List.filled(5, 0);
    final n = lvI(widget.level, 2, 7);
    final kinds = widget.level < 8 ? 3 : 5;
    for (var i = 0; i < n; i++) {
      recipe[r.nextInt(kinds)]++;
    }
    _target = _mix(recipe);
    for (var i = 0; i < 5; i++) {
      _drops[i] = 0;
    }
  }

  void _add(int i) {
    if (ended) return;
    setState(() => _drops[i]++);
    HapticFeedback.selectionClick();
    if (_colorDist(_mix(_drops), _target) <= _tol) {
      if (addPoint()) return;
      setState(_newTarget);
    }
  }

  @override
  Widget build(BuildContext context) {
    final now = _mix(_drops);
    final match = (100 - _colorDist(now, _target) / 4.4).clamp(0, 100).round();
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF4C1D95), Color(0xFF1E1B4B)]),
      Column(children: [
        ArcadeBanner(child: Text('Match the colour · ${math.min(score + 1, goal)}/$goal')),
        Expanded(
          child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, children: [
            for (final (label, color) in [('TARGET', _target), ('YOUR MIX', now)])
              Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                Text(label, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w900, fontSize: 12)),
                const SizedBox(height: 8),
                Container(width: 120, height: 120, decoration: BoxDecoration(color: color, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 4), boxShadow: [BoxShadow(color: color.withValues(alpha: 0.6), blurRadius: 18)])),
              ]),
          ]),
        ),
        Text('Match $match%', style: TextStyle(color: match > 85 ? const Color(0xFF4ADE80) : Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
        const SizedBox(height: 10),
        Wrap(spacing: 10, children: [
          for (var i = 0; i < 5; i++)
            GestureDetector(
              onTap: () => _add(i),
              child: Column(children: [
                Container(width: 54, height: 54, decoration: BoxDecoration(color: _paints[i].$2, shape: BoxShape.circle, border: Border.all(color: Colors.white54, width: 2))),
                Text('${_paints[i].$1} ${_drops[i]}', style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
              ]),
            ),
        ]),
        TextButton(
          onPressed: () => setState(() {
            for (var i = 0; i < 5; i++) {
              _drops[i] = 0;
            }
          }),
          child: const Text('Start over', style: TextStyle(color: Colors.white70)),
        ),
        const SizedBox(height: 6),
      ]),
    ]);
  }
}

// ── 92 Fair Pizza ──────────────────────────────────────────────────────────
class PizzaCutGame extends StatefulWidget {
  const PizzaCutGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<PizzaCutGame> createState() => _PizzaCutState();
}

class _PizzaCutState extends State<PizzaCutGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 5);
  final _cuts = <double>[]; // angles 0..pi
  Offset? _a, _b;
  int _slices = 4;
  String _msg = '';
  late final double _tol = lvD(widget.level, 0.28, 0.08); // allowed share error

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    _newPizza();
  }

  void _newPizza() {
    final opts = widget.level < 6 ? [2, 4] : (widget.level < 16 ? [4, 6] : [6, 8]);
    _slices = opts[args.rng.nextInt(opts.length)];
    _cuts.clear();
  }

  void _cut(Size s) {
    final a = _a, b = _b;
    _a = _b = null;
    if (a == null || b == null || ended || (a - b).distance < 60) return;
    final c = Offset(s.width / 2, s.height / 2);
    // The cut must pass close to the centre.
    final d = b - a;
    final dist = ((c - a).dx * d.dy - (c - a).dy * d.dx).abs() / d.distance;
    if (dist > math.min(s.width, s.height) * 0.12) {
      setState(() => _msg = 'Cut through the middle');
      return;
    }
    setState(() => _cuts.add(math.atan2(d.dy, d.dx) % math.pi));
    HapticFeedback.mediumImpact();
    if (_cuts.length == _slices ~/ 2) {
      final angs = [..._cuts, ..._cuts.map((x) => x + math.pi)]..sort();
      var worst = 0.0;
      for (var i = 0; i < angs.length; i++) {
        final gap = (i + 1 < angs.length ? angs[i + 1] : angs[0] + math.pi * 2) - angs[i];
        worst = math.max(worst, (gap / (math.pi * 2 / angs.length) - 1).abs());
      }
      if (worst <= _tol) {
        _msg = 'Perfectly fair! 🍕';
        if (addPoint()) return;
        Future<void>.delayed(const Duration(milliseconds: 600), () {
          if (mounted && !ended) setState(_newPizza);
        });
      } else {
        _msg = 'Slices weren’t equal (${(worst * 100).round()}% off)';
        if (loseHeart('Unfair slices')) return;
        Future<void>.delayed(const Duration(milliseconds: 700), () {
          if (mounted && !ended) setState(() => _cuts.clear());
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF7C2D12), Color(0xFF1C0A04)]),
        Column(children: [
          arcadeTopBar('Swipe through the middle: $_slices equal slices · $score/$goal', hearts: hearts),
          if (_msg.isNotEmpty) Text(_msg, style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w900, fontSize: 16)),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final s = Size(c.maxWidth, c.maxHeight);
              return GestureDetector(
                behavior: HitTestBehavior.opaque,
                onPanStart: (d) => _a = _b = d.localPosition,
                onPanUpdate: (d) => setState(() => _b = d.localPosition),
                onPanEnd: (_) => _cut(s),
                child: CustomPaint(size: s, painter: _PizzaPainter(_cuts, _a, _b)),
              );
            }),
          ),
        ]),
      ]);
}

class _PizzaPainter extends CustomPainter {
  _PizzaPainter(this.cuts, this.a, this.b);
  final List<double> cuts;
  final Offset? a, b;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width / 2, s.height / 2);
    final r = math.min(s.width, s.height) * 0.4;
    canvas.drawCircle(c, r + 10, Paint()..color = const Color(0xFFD97706));
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFFFDE68A));
    final rnd = math.Random(4);
    for (var i = 0; i < 14; i++) {
      final ang = rnd.nextDouble() * math.pi * 2, rr = rnd.nextDouble() * r * 0.8;
      canvas.drawCircle(c + Offset(math.cos(ang), math.sin(ang)) * rr, r * 0.08, Paint()..color = const Color(0xFFB91C1C));
    }
    for (final ang in cuts) {
      final d = Offset(math.cos(ang), math.sin(ang)) * (r + 12);
      canvas.drawLine(c - d, c + d, Paint()
        ..color = const Color(0xFF451A03)
        ..strokeWidth = 4);
    }
    if (a != null && b != null) {
      canvas.drawLine(a!, b!, Paint()
        ..color = Colors.white70
        ..strokeWidth = 2);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 93 Lock Picker ─────────────────────────────────────────────────────────
class LockPickGame extends StatefulWidget {
  const LockPickGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<LockPickGame> createState() => _LockPickState();
}

class _LockPickState extends State<LockPickGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 8);
  double _pos = 0, _dir = 1, _flash = 0;
  late double _zone;

  @override
  void initState() {
    super.initState();
    _zone = 0.3 + args.rng.nextDouble() * 0.4;
    hearts = 3;
    startScore();
    startLoop((dt) {
      _pos += _dir * lvD(widget.level, 0.8, 2.0) * (1 + score * 0.08) * dt;
      if (_pos > 1) _dir = -1;
      if (_pos < 0) _dir = 1;
      if (_flash > 0) _flash -= dt;
      setState(() {});
    });
  }

  double get _w => lvD(widget.level, 0.2, 0.08);

  void _tap() {
    if (ended) return;
    if ((_pos - _zone).abs() < _w / 2) {
      _zone = 0.2 + args.rng.nextDouble() * 0.6;
      if (addPoint()) return;
    } else {
      _flash = 0.3;
      if (loseHeart('The pick slipped')) return;
    }
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => _tap(),
        child: Stack(children: [
          arcadeBackdrop(_flash > 0 ? const [Color(0xFF7F1D1D), Color(0xFF1C1917)] : const [Color(0xFF292524), Color(0xFF0C0A09)]),
          arcadeTopBar('Tap when the pin is in the gold band · pins $score/$goal', hearts: hearts),
          Center(
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              for (var i = 0; i < goal; i++)
                Container(
                  width: 34,
                  height: 220,
                  margin: const EdgeInsets.symmetric(horizontal: 4),
                  decoration: BoxDecoration(color: const Color(0xFF44403C), borderRadius: BorderRadius.circular(8), border: Border.all(color: const Color(0xFFD4AF37))),
                  child: Stack(children: [
                    if (i == score) Positioned(left: 0, right: 0, top: (1 - _zone - _w / 2) * 220, height: _w * 220, child: Container(color: const Color(0xFFD4AF37).withValues(alpha: 0.5))),
                    Positioned(
                      left: 5,
                      right: 5,
                      top: i < score ? 10 : (i == score ? (1 - _pos) * 200 : 180),
                      height: 30,
                      child: Container(decoration: BoxDecoration(color: i < score ? const Color(0xFF4ADE80) : const Color(0xFFE7E5E4), borderRadius: BorderRadius.circular(6))),
                    ),
                  ]),
                ),
            ]),
          ),
        ]),
      );
}

// ── 94 Engine Tuner ────────────────────────────────────────────────────────
class EngineTuneGame extends StatefulWidget {
  const EngineTuneGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<EngineTuneGame> createState() => _EngineTuneState();
}

class _EngineTuneState extends State<EngineTuneGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 5);
  late final int _n = lvI(widget.level, 3, 5);
  late List<double> _dial, _target;
  late final double _tol = lvD(widget.level, 0.09, 0.035);
  late final bool _linked = widget.level > 10;
  double _hold = 0, _t = 0;

  @override
  void initState() {
    super.initState();
    _newRound();
    startScore();
    startLoop((dt) {
      _t += dt;
      if (widget.level > 20) {
        for (var i = 0; i < _n; i++) {
          _target[i] = (_target[i] + math.sin(_t + i) * 0.01 * dt).clamp(0.1, 0.9);
        }
      }
      if (_allGood) {
        _hold += dt;
        if (_hold > 0.8) {
          _hold = 0;
          if (addPoint()) return;
          _newRound();
        }
      } else {
        _hold = 0;
      }
      setState(() {});
    });
  }

  void _newRound() {
    final r = args.rng;
    _dial = List.generate(_n, (_) => r.nextDouble());
    _target = List.generate(_n, (_) => 0.15 + r.nextDouble() * 0.7);
  }

  /// Gauge reading: on harder levels each dial also nudges the next gauge.
  double _gauge(int i) => (_dial[i] + (_linked && i > 0 ? (_dial[i - 1] - 0.5) * 0.4 : 0)).clamp(0.0, 1.0);
  bool get _allGood => [for (var i = 0; i < _n; i++) (_gauge(i) - _target[i]).abs() < _tol].every((e) => e);

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0F172A), Color(0xFF020617)]),
        Column(children: [
          ArcadeBanner(child: Text('${_linked ? 'Dials affect the next gauge too! ' : ''}Get all needles in the green · ${math.min(score + 1, goal)}/$goal')),
          Expanded(
            child: ListView(padding: const EdgeInsets.all(16), children: [
              for (var i = 0; i < _n; i++)
                Padding(
                  padding: const EdgeInsets.only(bottom: 14),
                  child: Column(children: [
                    LayoutBuilder(builder: (context, c) {
                      final w = c.maxWidth;
                      final good = (_gauge(i) - _target[i]).abs() < _tol;
                      return SizedBox(
                        height: 26,
                        child: Stack(children: [
                          Container(decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(13))),
                          Positioned(left: (_target[i] - _tol) * w, width: _tol * 2 * w, top: 3, bottom: 3, child: Container(decoration: BoxDecoration(color: const Color(0xFF22C55E), borderRadius: BorderRadius.circular(10)))),
                          Positioned(left: (_gauge(i) * w - 3).clamp(0.0, w - 6), top: -2, bottom: -2, child: Container(width: 6, color: good ? Colors.white : const Color(0xFFF87171))),
                        ]),
                      );
                    }),
                    Slider(value: _dial[i], onChanged: ended ? null : (v) => setState(() => _dial[i] = v), activeColor: const Color(0xFF22D3EE)),
                  ]),
                ),
            ]),
          ),
          if (_hold > 0) const Padding(padding: EdgeInsets.only(bottom: 14), child: Text('Holding… 🔧', style: TextStyle(color: Color(0xFF4ADE80), fontWeight: FontWeight.w900))),
        ]),
      ]);
}

// ── 95 Frosting Artist ─────────────────────────────────────────────────────
class FrostingGame extends StatefulWidget {
  const FrostingGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<FrostingGame> createState() => _FrostingState();
}

class _FrostingState extends State<FrostingGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 5);
  late List<Offset> _shape; // normalised points
  final _drawn = <Offset>[];
  late final double _tol = lvD(widget.level, 0.07, 0.035);
  String _msg = '';

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    _newShape();
  }

  void _newShape() {
    final kind = args.rng.nextInt(widget.level < 10 ? 2 : 4);
    _shape = switch (kind) {
      0 => [for (var i = 0; i <= 40; i++) Offset(0.5 + math.cos(i / 40 * math.pi * 2) * 0.3, 0.5 + math.sin(i / 40 * math.pi * 2) * 0.3)],
      1 => [for (var i = 0; i <= 8; i++) Offset(0.15 + i * 0.0875, i.isEven ? 0.35 : 0.65)],
      2 => [for (var i = 0; i <= 10; i++) Offset(0.5 + math.cos(-math.pi / 2 + i * math.pi * 2 / 10) * (i.isEven ? 0.33 : 0.14), 0.5 + math.sin(-math.pi / 2 + i * math.pi * 2 / 10) * (i.isEven ? 0.33 : 0.14))],
      _ => [for (var i = 0; i <= 60; i++) Offset(0.5 + math.sin(i / 60 * math.pi * 2) * 0.32, 0.5 + math.sin(i / 60 * math.pi * 4) * 0.2)],
    };
    _drawn.clear();
  }

  double _distToShape(Offset p) {
    var best = double.infinity;
    for (var i = 1; i < _shape.length; i++) {
      final a = _shape[i - 1], b = _shape[i];
      final ab = b - a;
      final t = (((p - a).dx * ab.dx + (p - a).dy * ab.dy) / (ab.distanceSquared)).clamp(0.0, 1.0);
      best = math.min(best, (p - (a + ab * t)).distance);
    }
    return best;
  }

  void _finish() {
    if (_drawn.length < 10 || ended) {
      _drawn.clear();
      return;
    }
    final onLine = _drawn.where((p) => _distToShape(p) < _tol).length / _drawn.length;
    final covered = _shape.where((s) => _drawn.any((p) => (p - s).distance < _tol * 1.6)).length / _shape.length;
    final score10 = (onLine * covered * 100).round();
    if (onLine > 0.8 && covered > 0.85) {
      _msg = 'Beautiful! $score10%';
      if (addPoint()) return;
      setState(_newShape);
    } else {
      _msg = 'Try again — $score10% neat';
      setState(() => _drawn.clear());
      loseHeart('The frosting was messy');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFFFCE7F3), Color(0xFFF9A8D4)]),
        Column(children: [
          arcadeTopBar('Trace the dotted line in one go · $score/$goal', hearts: hearts),
          if (_msg.isNotEmpty) Text(_msg, style: const TextStyle(color: Color(0xFF831843), fontWeight: FontWeight.w900)),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: LayoutBuilder(builder: (context, c) {
                    final s = c.maxWidth;
                    return GestureDetector(
                      onPanStart: (d) => setState(() => _drawn
                        ..clear()
                        ..add(d.localPosition / s)),
                      onPanUpdate: (d) => setState(() => _drawn.add(d.localPosition / s)),
                      onPanEnd: (_) => _finish(),
                      child: Container(
                        decoration: BoxDecoration(color: const Color(0xFF92400E), shape: BoxShape.circle, border: Border.all(color: const Color(0xFFFDE68A), width: 6)),
                        child: CustomPaint(size: Size(s, s), painter: _FrostPainter(_shape, _drawn, s)),
                      ),
                    );
                  }),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

class _FrostPainter extends CustomPainter {
  _FrostPainter(this.shape, this.drawn, this.s);
  final List<Offset> shape, drawn;
  final double s;
  @override
  void paint(Canvas canvas, Size size) {
    for (var i = 1; i < shape.length; i++) {
      final a = shape[i - 1] * s, b = shape[i] * s;
      final n = ((b - a).distance / 8).ceil();
      for (var k = 0; k < n; k += 2) {
        canvas.drawLine(Offset.lerp(a, b, k / n)!, Offset.lerp(a, b, (k + 1) / n)!, Paint()
          ..color = Colors.white54
          ..strokeWidth = 3);
      }
    }
    if (drawn.length > 1) {
      final p = Path()..moveTo(drawn.first.dx * s, drawn.first.dy * s);
      for (final d in drawn.skip(1)) {
        p.lineTo(d.dx * s, d.dy * s);
      }
      canvas.drawPath(p, Paint()
        ..color = const Color(0xFFF9A8D4)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 10
        ..strokeCap = StrokeCap.round
        ..strokeJoin = StrokeJoin.round);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 96 Star Maps ───────────────────────────────────────────────────────────
class ConstellationGame extends StatefulWidget {
  const ConstellationGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<ConstellationGame> createState() => _ConstellationState();
}

class _ConstellationState extends State<ConstellationGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _order.length;
  late final List<Offset> _stars;
  late final List<int> _order;
  int _shown = 0;
  bool _showing = true;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    final r = args.rng;
    final n = lvI(widget.level, 7, 16);
    _stars = [];
    while (_stars.length < n) {
      final p = Offset(0.08 + r.nextDouble() * 0.84, 0.08 + r.nextDouble() * 0.84);
      if (_stars.every((q) => (q - p).distance > 0.12)) _stars.add(p);
    }
    _order = (List.generate(n, (i) => i)..shuffle(r)).take(lvI(widget.level, 4, 11)).toList();
    hearts = 3;
    startScore();
    _show();
  }

  void _show() {
    _t?.cancel();
    _showing = true;
    _shown = 0;
    _t = Timer.periodic(Duration(milliseconds: lvI(widget.level, 700, 330)), (tm) {
      if (!mounted) return tm.cancel();
      setState(() => _shown++);
      if (_shown > _order.length + 1) {
        tm.cancel();
        setState(() => _showing = false);
      }
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _tap(int i) {
    if (ended || _showing) return;
    if (i == _order[score]) {
      setState(() {});
      addPoint();
    } else {
      setState(() => score = 0);
      args.onProgress(0, goal);
      if (!loseHeart('Wrong star')) _show();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF020617), Color(0xFF1E1B4B)]),
        Column(children: [
          arcadeTopBar(_showing ? 'Watch the constellation…' : 'Join the stars in order · $score/${_order.length}', hearts: hearts),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final w = c.maxWidth, h = c.maxHeight;
              final linked = _showing ? _order.take(math.min(_shown, _order.length)).toList() : _order.take(score).toList();
              return Stack(children: [
                Positioned.fill(child: CustomPaint(painter: _ConstPainter([for (final i in linked) Offset(_stars[i].dx * w, _stars[i].dy * h)]))),
                for (var i = 0; i < _stars.length; i++)
                  Positioned(
                    left: _stars[i].dx * w - 22,
                    top: _stars[i].dy * h - 22,
                    child: GestureDetector(
                      onTap: () => _tap(i),
                      child: SizedBox(width: 44, height: 44, child: Center(child: Text(linked.contains(i) ? '🌟' : '⭐', style: TextStyle(fontSize: linked.contains(i) ? 28 : 20)))),
                    ),
                  ),
              ]);
            }),
          ),
        ]),
      ]);
}

class _ConstPainter extends CustomPainter {
  _ConstPainter(this.pts);
  final List<Offset> pts;
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 1; i < pts.length; i++) {
      canvas.drawLine(pts[i - 1], pts[i], Paint()
        ..color = const Color(0xFFA5B4FC)
        ..strokeWidth = 2.5);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 97 Morse Code ──────────────────────────────────────────────────────────
const _morse = {
  'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--',
  'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
};
const _morseWords = ['SOS', 'HI', 'CAT', 'DOG', 'SUN', 'MAP', 'KEY', 'BOX', 'CODE', 'STAR', 'SHIP', 'GOLD', 'WAVE', 'RADIO', 'LIGHT', 'NORTH', 'SIGNAL', 'ROCKET'];

ArcadeQ Function(int, math.Random) _morseQ(int level) => (round, r) {
      final word = level <= 6
          ? String.fromCharCode(65 + r.nextInt(26))
          : _morseWords.where((w) => w.length <= lvI(level, 2, 6)).elementAt(r.nextInt(_morseWords.where((w) => w.length <= lvI(level, 2, 6)).length));
      String enc(String w) => w.split('').map((ch) => _morse[ch]!.replaceAll('.', '•').replaceAll('-', '—')).join('   ');
      final pool = word.length == 1 ? [for (final k in _morse.keys) k] : _morseWords.where((w) => w.length == word.length || (w.length - word.length).abs() == 1);
      final (opts, ans) = arcadeOptions(word, pool, r);
      return ArcadeQ(
        Column(mainAxisSize: MainAxisSize.min, children: [
          Text(enc(word), style: const TextStyle(fontSize: 26, letterSpacing: 2)),
          if (level <= 12) ...[
            const SizedBox(height: 10),
            const Text('• = short   — = long   gap = next letter', style: TextStyle(fontSize: 12, color: Colors.white60, fontWeight: FontWeight.w600)),
            if (level <= 6) Text(_morse.entries.take(13).map((e) => '${e.key} ${e.value}').join('  '), style: const TextStyle(fontSize: 10, color: Colors.white38, fontWeight: FontWeight.w500)),
          ],
        ]),
        opts,
        ans,
      );
    };

// ── 98 Recipe Pour ─────────────────────────────────────────────────────────
class RecipePourGame extends StatefulWidget {
  const RecipePourGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<RecipePourGame> createState() => _RecipePourState();
}

class _RecipePourState extends State<RecipePourGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 2, 6);
  static const _ingredients = ['🌾 Flour', '🍚 Sugar', '🥛 Milk', '🧈 Butter', '🍫 Cocoa', '🍯 Honey', '🧂 Salt', '🥚 Eggs'];
  late String _item;
  late int _target;
  double _grams = 0, _hold = 0;
  bool _pouring = false;
  late final int _tol = lvI(widget.level, 12, 3);
  String _msg = '';

  @override
  void initState() {
    super.initState();
    hearts = 3;
    startScore();
    _next();
    startLoop((dt) {
      if (_pouring) {
        _hold += dt;
        // Pours faster the longer you hold.
        _grams += (lvD(widget.level, 60, 110) + _hold * lvD(widget.level, 40, 160)) * dt;
      }
      setState(() {});
    });
  }

  void _next() {
    _item = _ingredients[args.rng.nextInt(_ingredients.length)];
    _target = (5 + args.rng.nextInt(lvI(widget.level, 30, 90))) * 5;
    _grams = 0;
  }

  void _stop() {
    if (!_pouring) return;
    _pouring = false;
    _hold = 0;
    final off = (_grams - _target).abs();
    if (off <= _tol) {
      _msg = 'Perfect — ${_grams.round()} g';
      if (addPoint()) return;
      _next();
    } else if (_grams > _target) {
      _msg = 'Too much! ${_grams.round()} g';
      if (loseHeart('Poured too much')) return;
      _grams = 0;
    } else {
      _msg = 'Keep going — ${_grams.round()} g';
    }
  }

  @override
  Widget build(BuildContext context) => Listener(
        behavior: HitTestBehavior.opaque,
        onPointerDown: (_) {
          if (!ended) _pouring = true;
        },
        onPointerUp: (_) => _stop(),
        onPointerCancel: (_) => _stop(),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFFFEF3C7), Color(0xFFF59E0B)]),
          Column(children: [
            arcadeTopBar('Hold to pour, let go on the target · $score/$goal', hearts: hearts),
            const SizedBox(height: 12),
            Text(_item, style: const TextStyle(color: Color(0xFF78350F), fontSize: 30, fontWeight: FontWeight.w900)),
            Text('Target: $_target g  (±$_tol)', style: const TextStyle(color: Color(0xFF78350F), fontSize: 18, fontWeight: FontWeight.w800)),
            Expanded(
              child: Center(
                child: Column(mainAxisSize: MainAxisSize.min, children: [
                  Text(_pouring ? '⬇️' : '', style: const TextStyle(fontSize: 30)),
                  Text('${_grams.round()} g', style: TextStyle(color: _grams > _target + _tol ? Colors.red : const Color(0xFF111827), fontSize: 58, fontWeight: FontWeight.w900)),
                  const Text('⚖️', style: TextStyle(fontSize: 80)),
                ]),
              ),
            ),
            if (_msg.isNotEmpty) Padding(padding: const EdgeInsets.only(bottom: 20), child: Text(_msg, style: const TextStyle(color: Color(0xFF7C2D12), fontWeight: FontWeight.w900, fontSize: 18))),
          ]),
        ]),
      );
}

// ── 99 Shelf Sort ──────────────────────────────────────────────────────────
class ShelfSortGame extends StatefulWidget {
  const ShelfSortGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<ShelfSortGame> createState() => _ShelfSortState();
}

class _ShelfSortState extends State<ShelfSortGame> {
  late List<int> _items; // sizes
  late int _movesLeft;
  int? _sel;
  bool _over = false;
  static const _goods = ['🥫', '🧃', '🍾', '🧴', '🥤', '🍶', '🫙', '🧂', '🍼', '🕯️'];

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    final n = lvI(widget.level, 5, 10);
    _items = List.generate(n, (i) => i + 1);
    do {
      _items.shuffle(r);
    } while (_sortedCount == n);
    // Fewest swaps = n − (number of cycles).
    final seen = <int>{};
    var cycles = 0;
    for (var i = 0; i < n; i++) {
      if (seen.contains(i)) continue;
      cycles++;
      var j = i;
      while (seen.add(j)) {
        j = _items[j] - 1;
      }
    }
    _movesLeft = (n - cycles) + lvI(widget.level, 6, 0);
    widget.args.onProgress(_sortedCount, n);
  }

  int get _sortedCount => [for (var i = 0; i < _items.length; i++) if (_items[i] == i + 1) 1].length;

  void _tap(int i) {
    if (_over) return;
    if (_sel == null) {
      setState(() => _sel = i);
      return;
    }
    final j = _sel!;
    if (j == i) {
      setState(() => _sel = null);
      return;
    }
    setState(() {
      final t = _items[i];
      _items[i] = _items[j];
      _items[j] = t;
      _sel = null;
      _movesLeft--;
    });
    HapticFeedback.selectionClick();
    widget.args.onProgress(_sortedCount, _items.length);
    if (_sortedCount == _items.length) {
      _over = true;
      widget.args.onComplete();
    } else if (_movesLeft <= 0) {
      _over = true;
      widget.args.onKnockout('Out of swaps');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF1E3A8A), Color(0xFF0B1437)]),
        Column(children: [
          ArcadeBanner(child: Text('Smallest → biggest · swaps left $_movesLeft')),
          Expanded(
            child: Center(
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Wrap(crossAxisAlignment: WrapCrossAlignment.end, alignment: WrapAlignment.center, spacing: 6, runSpacing: 14, children: [
                  for (var i = 0; i < _items.length; i++)
                    GestureDetector(
                      onTap: () => _tap(i),
                      child: Column(mainAxisSize: MainAxisSize.min, children: [
                        AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          padding: const EdgeInsets.all(2),
                          decoration: BoxDecoration(border: Border.all(color: _sel == i ? const Color(0xFFFDE68A) : Colors.transparent, width: 3), borderRadius: BorderRadius.circular(8)),
                          child: Text(_goods[(_items[i] - 1) % _goods.length], style: TextStyle(fontSize: 16.0 + _items[i] * 4.5)),
                        ),
                        Text('${_items[i]}', style: TextStyle(color: _items[i] == i + 1 ? const Color(0xFF4ADE80) : Colors.white70, fontWeight: FontWeight.w900)),
                      ]),
                    ),
                ]),
                Container(height: 10, margin: const EdgeInsets.symmetric(horizontal: 20, vertical: 4), color: const Color(0xFF92400E)),
              ]),
            ),
          ),
        ]),
      ]);
}

// ── 100 Kaleidoscope ───────────────────────────────────────────────────────
class KaleidoscopeGame extends StatefulWidget {
  const KaleidoscopeGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<KaleidoscopeGame> createState() => _KaleidoscopeState();
}

class _KaleidoscopeState extends State<KaleidoscopeGame> {
  late final int _rings = lvI(widget.level, 3, 5);
  late final int _steps = lvI(widget.level, 6, 10);
  late final bool _linked = widget.level > 8;
  late final List<int> _rot;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    _rot = List.filled(_rings, 0);
    // Scramble with the same moves the player has, so it can always be undone.
    final r = widget.args.rng;
    for (var k = 0; k < lvI(widget.level, 4, 16); k++) {
      _turn(r.nextInt(_rings));
    }
    if (_aligned == _rings) _turn(0);
    widget.args.onProgress(_aligned, _rings);
  }

  int get _aligned => _rot.where((x) => x % _steps == 0).length;

  void _turn(int ring) {
    _rot[ring] = (_rot[ring] + 1) % _steps;
    if (_linked && ring + 1 < _rings) _rot[ring + 1] = (_rot[ring + 1] + _steps - 1) % _steps;
  }

  void _tap(int ring) {
    if (_over) return;
    setState(() => _turn(ring));
    HapticFeedback.selectionClick();
    widget.args.onProgress(_aligned, _rings);
    if (_aligned == _rings) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF3B0764), Color(0xFF0F0524)]),
        Column(children: [
          ArcadeBanner(child: Text(_linked ? 'Tap a ring to turn it (the next ring turns back!)' : 'Tap a ring to turn it · point every gem up')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: LayoutBuilder(builder: (context, c) {
                    final size = c.maxWidth;
                    return GestureDetector(
                      behavior: HitTestBehavior.opaque,
                      // Which ring = how far from the centre you tapped.
                      onTapDown: (d) {
                        final dist = (d.localPosition - Offset(size / 2, size / 2)).distance / (size / 2);
                        if (dist <= 1) _tap((dist * _rings).floor().clamp(0, _rings - 1));
                      },
                      child: Stack(alignment: Alignment.center, children: [
                      for (var ring = _rings - 1; ring >= 0; ring--)
                        AnimatedRotation(
                          turns: _rot[ring] / _steps,
                          duration: const Duration(milliseconds: 220),
                          child: CustomPaint(size: Size.square(size * (ring + 1) / _rings), painter: _RingPainter(ring, _rings, _steps)),
                        ),
                      Positioned(top: 0, child: const Icon(Icons.arrow_drop_down_rounded, color: Colors.white, size: 40)),
                    ]),
                    );
                  }),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

class _RingPainter extends CustomPainter {
  _RingPainter(this.ring, this.rings, this.steps);
  final int ring, rings, steps;
  static const _cols = [Color(0xFFE879F9), Color(0xFF22D3EE), Color(0xFFFACC15), Color(0xFF4ADE80), Color(0xFFF87171)];
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    final inner = ring == 0 ? 0.0 : r * ring / (ring + 1);
    final seg = math.pi * 2 / steps;
    for (var k = 0; k < steps; k++) {
      final p = Path()
        ..arcTo(Rect.fromCircle(center: c, radius: r), -math.pi / 2 - seg / 2 + k * seg, seg, true)
        ..arcTo(Rect.fromCircle(center: c, radius: math.max(1, inner)), -math.pi / 2 + seg / 2 + k * seg, -seg, false)
        ..close();
      canvas.drawPath(p, Paint()..color = (k.isEven ? _cols[ring % _cols.length] : _cols[(ring + 2) % _cols.length]).withValues(alpha: 0.35));
      canvas.drawPath(p, Paint()
        ..style = PaintingStyle.stroke
        ..color = Colors.black26);
    }
    // The gem that has to point up.
    final gemR = (r + inner) / 2;
    canvas.drawCircle(c + Offset(0, -gemR), (r - inner) * 0.28 + 3, Paint()..color = Colors.white);
    canvas.drawCircle(c + Offset(0, -gemR), (r - inner) * 0.2 + 2, Paint()..color = _cols[ring % _cols.length]);
  }

  @override
  bool shouldRepaint(covariant _RingPainter old) => false;
}
