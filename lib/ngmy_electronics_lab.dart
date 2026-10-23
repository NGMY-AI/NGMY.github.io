import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_electronics_board.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// ELECTRONICS LAB: drag parts out, join them with wires, and watch what happens.
// ═════════════════════════════════════════════════════════════════════════════

/// The board itself: parts you can move, wires you can draw, and a card that explains
/// the part you tap. Used by the Electronics Lab and by the AI Inventor.
class BoardEditor extends StatefulWidget {
  const BoardEditor({super.key, required this.board, this.popIn, this.paletteKinds, this.header, this.onChanged, this.onTick, this.readOnlyPalette = false});

  final ElectronicsBoard board;
  final Map<String, double>? popIn;
  final List<String>? paletteKinds;
  final Widget? header;
  final VoidCallback? onChanged;
  final VoidCallback? onTick;
  final bool readOnlyPalette;

  @override
  State<BoardEditor> createState() => BoardEditorState();
}

class BoardEditorState extends State<BoardEditor> with SingleTickerProviderStateMixin, StudioFrames {
  Part? _sel;
  Wire? _selWire;
  (Part, int)? _dragFrom;
  Offset? _dragTo;
  Part? _dragPart;
  Offset _grab = Offset.zero;
  Size _size = Size.zero;
  double _hum = 0;

  ElectronicsBoard get b => widget.board;

  @override
  void initState() {
    super.initState();
    b.onEvent = (kind, p) {
      if (kind == 'burn') {
        NgmyTone.play(140, ms: 320, wave: 'noise', volume: 0.6);
        NgmyTone.play(900, ms: 160, wave: 'square', sweep: 1.5, volume: 0.35);
      }
    };
    startFrames();
  }

  @override
  void onFrame(double dt) {
    b.step(dt);
    _hum += dt;
    if (_hum > 0.16) {
      _hum = 0;
      for (final p in b.parts) {
        if (p.burnt) continue;
        switch (p.kind) {
          case 'buzzer':
            if (p.glow > 0.2) NgmyTone.play(520, ms: 110, wave: 'square', volume: 0.16 * p.glow);
          case 'motor':
            if (p.glow > 0.08) NgmyTone.play(60 + p.glow * 55, ms: 130, wave: 'tri', volume: 0.12);
          case 'heater':
            if (p.glow > 0.2 && math.Random().nextDouble() < 0.5) NgmyTone.play(2400, ms: 25, wave: 'noise', volume: 0.12 * p.glow);
          case 'radio':
            if (p.glow > 0) {
              NgmyTone.play(900.0 + math.Random().nextInt(800), ms: 90, wave: 'noise', volume: 0.1);
              if (math.Random().nextDouble() < 0.35) NgmyTone.play(300.0 + math.Random().nextInt(6) * 70, ms: 150, wave: 'tri', volume: 0.12);
            }
          case 'tv':
            if (p.glow > 0 && math.Random().nextDouble() < 0.4) NgmyTone.play(3000, ms: 40, wave: 'noise', volume: 0.07);
          case 'turbine':
            if (p.level > 0.1) NgmyTone.play(80, ms: 150, wave: 'noise', volume: 0.05 * p.level);
          case 'crank':
            if (p.level > 0.15) NgmyTone.play(110 + p.level * 140, ms: 70, wave: 'saw', volume: 0.08);
        }
      }
    }
    widget.onTick?.call();
    setState(() {});
  }

  // ── Touch handling ─────────────────────────────────────────────────────────

  (Part, int)? _termAt(Offset pos) {
    (Part, int)? best;
    var bd = 24.0;
    for (final p in b.parts) {
      for (var t = 0; t < 2; t++) {
        final d = (ElectronicsBoard.terminal(p, t, _size) - pos).distance;
        if (d < bd) {
          bd = d;
          best = (p, t);
        }
      }
    }
    return best;
  }

  Part? _partAt(Offset pos) {
    for (final p in b.parts.reversed) {
      final c = Offset(p.x * _size.width, p.y * _size.height);
      if ((pos.dx - c.dx).abs() < 36 && (pos.dy - c.dy).abs() < 26) return p;
    }
    return null;
  }

  Wire? _wireAt(Offset pos) {
    Wire? best;
    var bd = 16.0;
    for (final w in b.wires) {
      final a = ElectronicsBoard.terminal(w.a, w.ta, _size), c = ElectronicsBoard.terminal(w.b, w.tb, _size);
      final mid = wireMid(a, c, w);
      for (var k = 1; k < 20; k++) {
        final t = k / 20;
        final pt = a * ((1 - t) * (1 - t)) + mid * (2 * t * (1 - t)) + c * (t * t);
        final d = (pt - pos).distance;
        if (d < bd) {
          bd = d;
          best = w;
        }
      }
    }
    return best;
  }

  void _changed() {
    widget.onChanged?.call();
    setState(() {});
  }

  void spawn(String kind) {
    // First free spot on a loose grid.
    const xs = [0.2, 0.5, 0.8];
    Offset? at;
    for (var r = 0; r < 6 && at == null; r++) {
      for (final x in xs) {
        final y = 0.13 + r * 0.15;
        if (!b.parts.any((p) => (p.x - x).abs() < 0.16 && (p.y - y).abs() < 0.1)) {
          at = Offset(x, y);
          break;
        }
      }
    }
    final p = b.add(kind, (at ?? const Offset(0.5, 0.5)).dx, (at ?? const Offset(0.5, 0.5)).dy);
    widget.popIn?[p.id] = 0;
    _sel = p;
    _selWire = null;
    NgmyTone.play(1200, ms: 50, wave: 'tri', volume: 0.3);
    _changed();
  }

  @override
  Widget build(BuildContext context) {
    final sel = _sel;
    final kinds = widget.paletteKinds ?? [for (final p in kPartInfos) p.kind];
    // Pop-in animation progress.
    final pop = widget.popIn;
    if (pop != null) {
      for (final k in pop.keys.toList()) {
        pop[k] = math.min(1.0, (pop[k] ?? 1) + 0.03);
      }
    }
    return Column(children: [
      if (widget.header != null) widget.header!,
      Expanded(
        child: LayoutBuilder(builder: (context, box) {
          _size = Size(box.maxWidth, box.maxHeight);
          return ClipRect(
            child: Stack(fit: StackFit.expand, children: [
              GestureDetector(
                behavior: HitTestBehavior.opaque,
                onPanStart: (d) {
                  final t = _termAt(d.localPosition);
                  if (t != null) {
                    setState(() {
                      _dragFrom = t;
                      _dragTo = d.localPosition;
                    });
                    return;
                  }
                  final p = _partAt(d.localPosition);
                  if (p != null) {
                    _dragPart = p;
                    _grab = Offset(p.x * _size.width, p.y * _size.height) - d.localPosition;
                    setState(() => _sel = p);
                  }
                },
                onPanUpdate: (d) {
                  if (_dragFrom != null) {
                    setState(() => _dragTo = d.localPosition);
                  } else if (_dragPart != null) {
                    final c = d.localPosition + _grab;
                    setState(() {
                      _dragPart!.x = (c.dx / _size.width).clamp(0.14, 0.86);
                      _dragPart!.y = (c.dy / _size.height).clamp(0.08, 0.92);
                    });
                  }
                },
                onPanEnd: (d) {
                  if (_dragFrom != null && _dragTo != null) {
                    final t = _termAt(_dragTo!);
                    if (t != null && t.$1 != _dragFrom!.$1) {
                      if (b.connect(_dragFrom!.$1, _dragFrom!.$2, t.$1, t.$2) != null) {
                        NgmyTone.play(1500, ms: 40, wave: 'square', volume: 0.22);
                      }
                    }
                  }
                  _dragFrom = null;
                  _dragTo = null;
                  _dragPart = null;
                  _changed();
                },
                onTapUp: (d) {
                  final p = _partAt(d.localPosition);
                  if (p != null) {
                    setState(() {
                      _sel = p;
                      _selWire = null;
                      if (p.kind == 'switch') {
                        p.on = !p.on;
                        NgmyTone.play(p.on ? 1700 : 1100, ms: 30, wave: 'noise', volume: 0.45);
                      }
                      if (p.kind == 'crank') {
                        p.level = math.min(1, p.level + 0.35);
                        NgmyTone.play(200, ms: 70, wave: 'saw', volume: 0.2);
                      }
                    });
                    widget.onChanged?.call();
                    return;
                  }
                  final w = _wireAt(d.localPosition);
                  setState(() {
                    _selWire = w;
                    _sel = null;
                  });
                },
                child: CustomPaint(size: _size, painter: BoardPainter(b, selected: _sel, dragFrom: _dragFrom, dragTo: _dragTo, selWire: _selWire, popIn: pop ?? const {})),
              ),
              if (b.parts.isEmpty)
                const Center(child: Padding(padding: EdgeInsets.all(30), child: Text('Tap a part below to put it on the board.\nThen drag from a round dot on one part to a dot on another to join them with a wire.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white38, height: 1.5)))),
              if (_selWire != null)
                Positioned(
                  left: 12,
                  right: 12,
                  bottom: 8,
                  child: _card(child: Row(children: [
                    const Expanded(child: Text('Wire selected', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
                    StudioButton(icon: Icons.content_cut_rounded, label: 'Cut wire', color: const Color(0xFFF87171), onTap: () {
                      b.wires.remove(_selWire);
                      _selWire = null;
                      NgmyTone.play(300, ms: 50, wave: 'noise', volume: 0.35);
                      _changed();
                    }),
                  ])),
                )
              else if (sel != null)
                Positioned(left: 10, right: 10, bottom: 8, child: _partCard(sel)),
            ]),
          );
        }),
      ),
      if (!widget.readOnlyPalette)
        Container(
          height: 78,
          decoration: BoxDecoration(color: kStudioPanel, border: Border(top: BorderSide(color: Colors.white.withValues(alpha: 0.08)))),
          child: ListView(scrollDirection: Axis.horizontal, padding: const EdgeInsets.fromLTRB(10, 8, 10, 8), children: [
            for (final k in kinds)
              GestureDetector(
                onTap: () => spawn(k),
                child: Container(
                  width: 68,
                  margin: const EdgeInsets.only(right: 8),
                  decoration: BoxDecoration(color: kPartByKind[k]!.color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(14), border: Border.all(color: kPartByKind[k]!.color.withValues(alpha: 0.5))),
                  child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                    Text(kPartByKind[k]!.emoji, style: const TextStyle(fontSize: 22)),
                    const SizedBox(height: 2),
                    Text(kPartByKind[k]!.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w800)),
                  ]),
                ),
              ),
          ]),
        ),
    ]);
  }

  Widget _card({required Widget child}) => Container(
        padding: const EdgeInsets.fromLTRB(14, 10, 10, 10),
        decoration: BoxDecoration(color: const Color(0xF2111318), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white12)),
        child: child,
      );

  Widget _partCard(Part p) {
    final info = p.info;
    final w = (p.v * p.i).abs();
    Widget slider(String label, double v, ValueChanged<double> on, {double min = 0, double max = 1}) => Row(children: [
          Text(label, style: const TextStyle(color: Colors.white60, fontSize: 12, fontWeight: FontWeight.w700)),
          Expanded(child: Slider(value: v.clamp(min, max), min: min, max: max, activeColor: info.color, onChanged: (x) {
            setState(() => on(x));
            widget.onChanged?.call();
          })),
        ]);
    return _card(
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxHeight: 250),
        child: SingleChildScrollView(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            Row(children: [
              Text(info.emoji, style: const TextStyle(fontSize: 24)),
              const SizedBox(width: 8),
              Expanded(child: Text(info.name, style: TextStyle(color: info.color, fontWeight: FontWeight.w900, fontSize: 16))),
              IconButton(visualDensity: VisualDensity.compact, tooltip: 'Remove part', onPressed: () {
                b.remove(p);
                _sel = null;
                NgmyTone.play(260, ms: 70, wave: 'noise', volume: 0.35);
                _changed();
              }, icon: const Icon(Icons.delete_outline_rounded, color: Color(0xFFF87171), size: 21)),
              IconButton(visualDensity: VisualDensity.compact, onPressed: () => setState(() => _sel = null), icon: const Icon(Icons.close_rounded, color: Colors.white54, size: 20)),
            ]),
            Text(info.about, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
            const SizedBox(height: 4),
            Text('How it is made: ${info.made}', style: const TextStyle(color: Colors.white38, fontSize: 11.5, height: 1.35)),
            const SizedBox(height: 6),
            Text(p.burnt ? 'Burnt out! Press Repair.' : 'Now: ${p.v.abs().toStringAsFixed(2)} volts  ·  ${(p.i.abs() * 1000).toStringAsFixed(0)} milliamps  ·  ${w.toStringAsFixed(2)} watts', style: TextStyle(color: p.burnt ? const Color(0xFFF87171) : const Color(0xFFFBBF24), fontWeight: FontWeight.w800, fontSize: 12.5)),
            if (p.kind == 'battery')
              Wrap(spacing: 6, children: [for (final v in const [1.5, 3.0, 4.5, 9.0, 12.0]) StudioChip(label: '$v V', selected: p.volts == v, color: info.color, onTap: () {
                setState(() => p.volts = v);
                widget.onChanged?.call();
              })]),
            if (p.kind == 'resistor')
              Wrap(spacing: 6, children: [for (final v in const [47.0, 100.0, 220.0, 470.0, 1000.0]) StudioChip(label: v >= 1000 ? '1 kΩ' : '${v.round()} Ω', selected: p.ohms == v, color: info.color, onTap: () {
                setState(() => p.ohms = v);
                widget.onChanged?.call();
              })]),
            if (p.kind == 'solar') slider('Sunlight', p.level, (x) => p.level = x),
            if (p.kind == 'turbine') slider('Wind', p.level, (x) => p.level = x),
            if (p.kind == 'pot') slider('Knob', p.level, (x) => p.level = x),
            if (p.kind == 'crank') const Text('Tap the crank on the board again and again to spin it faster.', style: TextStyle(color: Colors.white54, fontSize: 12)),
            if (p.kind == 'switch') Text(p.on ? 'Closed: the loop is joined up.' : 'Open: the loop is broken.', style: const TextStyle(color: Colors.white54, fontSize: 12)),
          ]),
        ),
      ),
    );
  }
}

// ── The studio ───────────────────────────────────────────────────────────────

class _Challenge {
  const _Challenge(this.title, this.hint, this.check);
  final String title;
  final String hint;
  final bool Function(ElectronicsBoard b) check;
}

final List<_Challenge> _kChallenges = [
  _Challenge('Light the bulb', 'You need a battery and a bulb joined in a loop. Wire the + of the battery to the bulb, and the bulb back to the battery.', (b) => b.lit('bulb')),
  _Challenge('Make a flashlight', 'Add a switch into the loop, so you can turn the bulb on and off.', (b) => b.has('switch') && b.lit('bulb')),
  _Challenge('Spin the motor', 'A battery and a motor in a loop will make it spin.', (b) => b.parts.any((p) => p.kind == 'motor' && p.glow > 0.3)),
  _Challenge('Light an LED safely', 'An LED burns out on its own. Put a resistor in the loop with it. Mind the + side of the LED!', (b) => b.has('resistor') && b.parts.any((p) => p.kind == 'led' && p.glow > 0.3 && !p.burnt)),
  _Challenge('Light a bulb with no battery', 'Use a solar panel, a hand crank or a wind turbine instead of a battery.', (b) => !b.has('battery') && b.lit('bulb')),
  _Challenge('Play the radio', 'A radio needs about 3 volts or more. Try a 9 volt battery.', (b) => b.parts.any((p) => p.kind == 'radio' && p.glow > 0)),
  _Challenge('Watch TV', 'A TV needs more power. Set a battery to 12 volts.', (b) => b.parts.any((p) => p.kind == 'tv' && p.glow > 0)),
  _Challenge('Make toast', 'A heater turns electricity into heat. Make it glow bright orange.', (b) => b.parts.any((p) => p.kind == 'heater' && p.glow > 0.5)),
];

class NgmyElectronicsLab extends StatefulWidget {
  const NgmyElectronicsLab({super.key});

  @override
  State<NgmyElectronicsLab> createState() => _NgmyElectronicsLabState();
}

class _NgmyElectronicsLabState extends State<NgmyElectronicsLab> {
  final ElectronicsBoard _board = ElectronicsBoard();
  final GlobalKey<BoardEditorState> _editor = GlobalKey();
  int _ch = 0;
  final Set<int> _done = {};
  int _frame = 0;

  void _tick() {
    _frame++;
    if (_frame % 10 != 0 || _ch >= _kChallenges.length) return;
    if (!_done.contains(_ch) && _kChallenges[_ch].check(_board)) {
      _done.add(_ch);
      NgmyTone.chord('bell', [0, 4, 7, 12], ms: 700, volume: 0.45);
      setState(() {});
    }
  }

  Future<void> _recipes() async {
    await showDialog<void>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: const Color(0xFF17171C),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: SizedBox(
            width: 340,
            child: ListView(shrinkWrap: true, children: [
              const Text('Ready-made circuits', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
              const SizedBox(height: 4),
              const Text('Pick one, then change it and see what happens.', style: TextStyle(color: Colors.white54, fontSize: 12.5)),
              const SizedBox(height: 10),
              for (final r in kRecipes)
                GestureDetector(
                  onTap: () {
                    Navigator.pop(ctx);
                    setState(() {
                      r.build(_board);
                      _board.repairAll();
                    });
                    NgmyTone.play(800, ms: 120, wave: 'square', sweep: -0.5, volume: 0.3);
                  },
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 8),
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(r.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                      const SizedBox(height: 2),
                      Text(r.explain, maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white54, fontSize: 12, height: 1.3)),
                    ]),
                  ),
                ),
            ]),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final c = _ch < _kChallenges.length ? _kChallenges[_ch] : null;
    final done = c != null && _done.contains(_ch);
    return StudioPage(
      title: 'ELECTRONICS LAB',
      accent: const Color(0xFF38BDF8),
      help: 'Build real circuits.\n\n1. Tap a part at the bottom to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nTry the challenges at the top, or open Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired.',
      stage: BoardEditor(
        key: _editor,
        board: _board,
        onTick: _tick,
        header: Container(
          margin: const EdgeInsets.fromLTRB(10, 6, 10, 2),
          padding: const EdgeInsets.fromLTRB(12, 8, 6, 8),
          decoration: BoxDecoration(color: (done ? const Color(0xFF4ADE80) : const Color(0xFF38BDF8)).withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: (done ? const Color(0xFF4ADE80) : const Color(0xFF38BDF8)).withValues(alpha: 0.4))),
          child: Row(children: [
            Expanded(
              child: c == null
                  ? const Text('All challenges done! Keep inventing.', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800))
                  : Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('${done ? '✅' : '🎯'} Challenge ${_ch + 1}: ${c.title}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13.5)),
                      Text(done ? 'Well done!' : c.hint, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white60, fontSize: 11.5, height: 1.25)),
                    ]),
            ),
            if (c != null) TextButton(onPressed: () => setState(() => _ch = done ? _ch + 1 : math.min(_kChallenges.length, _ch + 1)), child: Text(done ? 'Next' : 'Skip')),
          ]),
        ),
      ),
      actions: [
        IconButton(onPressed: _recipes, icon: const Icon(Icons.menu_book_rounded, color: Colors.white70, size: 22), tooltip: 'Ready-made circuits'),
        IconButton(onPressed: () => setState(_board.repairAll), icon: const Icon(Icons.build_rounded, color: Colors.white70, size: 21), tooltip: 'Repair burnt parts'),
        IconButton(onPressed: () => setState(_board.clear), icon: const Icon(Icons.delete_sweep_rounded, color: Colors.white70, size: 23), tooltip: 'Clear the board'),
      ],
    );
  }
}
