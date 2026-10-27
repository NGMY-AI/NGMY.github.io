import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_ai_inventor.dart';
import 'ngmy_construction_lab.dart';
import 'ngmy_electronics_board.dart';
import 'ngmy_electronics_save.dart';
import 'ngmy_electronics_screens.dart';
import 'ngmy_electronics_tv.dart';
import 'ngmy_studio_kit.dart';

// ═════════════════════════════════════════════════════════════════════════════
// ELECTRONICS LAB: drag parts out, join them with wires, and watch what happens.
// ═════════════════════════════════════════════════════════════════════════════

/// The board itself: parts you can move, wires you can draw, and a card that explains
/// the part you tap. Used by the Electronics Lab and by the AI Inventor.
class BoardEditor extends StatefulWidget {
  const BoardEditor({super.key, required this.board, this.popIn, this.paletteKinds, this.header, this.onChanged, this.onTick, this.readOnlyPalette = false, this.tvPopUp = true});

  final ElectronicsBoard board;
  final Map<String, double>? popIn;
  final List<String>? paletteKinds;
  final Widget? header;
  final VoidCallback? onChanged;
  final VoidCallback? onTick;
  final bool readOnlyPalette;

  /// A TV that has just switched on opens on the big screen for a minute by itself.
  final bool tvPopUp;

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
  String? _notice;
  Timer? _noticeTimer;
  final Map<String, List<DateTime>> _taps = {};
  final Set<String> _tvAuto = {};
  bool _tvOpen = false;

  void _say(String text) {
    _noticeTimer?.cancel();
    setState(() => _notice = text);
    _noticeTimer = Timer(const Duration(seconds: 9), () {
      if (mounted) setState(() => _notice = null);
    });
  }

  
  @override
  void dispose() {
    _noticeTimer?.cancel();
    _tapTimer?.cancel();
    super.dispose();
  }

  Future<void> _openTv(Part p, {bool auto = false}) async {
    if (_tvOpen || !mounted) return;
    _tvOpen = true;
    final ch = await showNgmyTvScreen(context, channel: p.channel, stayFor: auto ? const Duration(seconds: 60) : const Duration(hours: 1), showBoot: p.onAge < 3.2, title: p.info.name);
    _tvOpen = false;
    if (ch != null) p.channel = ch;
  }

  Timer? _tapTimer;

  /// Three quick taps on a screen that is on open its big screen (a moment later, in case a fourth tap follows).
  /// Four quick taps open the size sheet so the screen can be made bigger.
  void _screenTap(Part p) {
    final now = DateTime.now();
    final l = _taps.putIfAbsent(p.id, () => []);
    l.add(now);
    l.removeWhere((t) => now.difference(t) > const Duration(milliseconds: 1500));
    if (l.length >= 4) {
      l.clear();
      _tapTimer?.cancel();
      _resizeSheet(p);
      return;
    }
    if (l.length == 3) {
      _tapTimer?.cancel();
      _tapTimer = Timer(const Duration(milliseconds: 500), () {
        l.clear();
        if (!mounted) return;
        if (b.works(p)) {
          isTvKind(p.kind) ? _openTv(p) : _openDevice(p);
        } else {
          _say(b.diagnose(p) ?? 'The ${p.info.name} is off. Give it power first.');
        }
      });
    }
  }

  Future<void> _openDevice(Part p) async {
    if (_tvOpen || !mounted) return;
    _tvOpen = true;
    await showNgmyDeviceScreen(context, p.kind, charge: ((b.time * 0.12) % 1.0 * 100).round());
    _tvOpen = false;
  }

  /// A screen starts at its normal size and can only be made bigger.
  Future<void> _resizeSheet(Part p) async {
    await showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        void change(double v) {
          setState(() => p.scale = v.clamp(1.0, 2.6));
          set(() {});
          widget.onChanged?.call();
        }
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(18, 16, 18, 18),
            child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Resize the ${p.info.name}', style: const TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900)),
              const SizedBox(height: 4),
              const Text('Make it bigger to see it better. It can never be smaller than its normal size.', style: TextStyle(color: Colors.white54, fontSize: 12.5)),
              const SizedBox(height: 10),
              Row(children: [
                IconButton(onPressed: () => change(p.scale - 0.2), icon: const Icon(Icons.remove_circle_outline_rounded, color: Colors.white70)),
                Expanded(child: Slider(value: p.scale.clamp(1.0, 2.6), min: 1.0, max: 2.6, activeColor: p.info.color, onChanged: change)),
                IconButton(onPressed: () => change(p.scale + 0.2), icon: const Icon(Icons.add_circle_outline_rounded, color: Colors.white70)),
              ]),
              Row(children: [
                Text('${(p.scale * 100).round()}%', style: TextStyle(color: p.info.color, fontWeight: FontWeight.w900)),
                const Spacer(),
                TextButton(onPressed: () => change(1.0), child: const Text('Normal size')),
                TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Done')),
              ]),
            ]),
          ),
        );
      }),
    );
  }

  ElectronicsBoard get b => widget.board;

  @override
  void initState() {
    super.initState();
    hook();
    startFrames();
  }

  /// Listens for short circuits and burn-outs on the board (called again when we come back from another page).
  void hook() {
    b.onEvent = (kind, p) {
      if (kind == 'short') {
        NgmyTone.play(1800, ms: 120, wave: 'noise', volume: 0.55);
        NgmyTone.play(200, ms: 160, wave: 'saw', sweep: 2.2, volume: 0.4);
        HapticFeedback.heavyImpact();
        if (mounted) _say('Short circuit! The power source was joined straight back to itself with nothing to use the power, so it is getting very hot. Put a bulb or another part between the + and the −, or add a fuse.');
      }
      if (kind == 'overload') {
        NgmyTone.play(260, ms: 220, wave: 'saw', sweep: -0.6, volume: 0.35);
        if (mounted) _say('⚠ Overloaded! The ${p.info.name} can only give about ${b.sourceMaxAmps(p).toStringAsFixed(2)} amps but your gadgets are asking for ${p.demand.toStringAsFixed(2)} amps. Its volts sag, so gadgets may switch off. Take some gadgets off, or use a bigger battery.');
      }
      if (kind == 'burn') {
        if (mounted) _say('Burnt out! ${p.burnWhy}');
        NgmyTone.play(140, ms: 320, wave: 'noise', volume: 0.6);
        NgmyTone.play(900, ms: 160, wave: 'square', sweep: 1.5, volume: 0.35);
      }
    };
  }

  @override
  void onFrame(double dt) {
    b.step(dt);
    for (final p in b.parts) {
      if (!isTvKind(p.kind)) continue;
      if (p.glow > 0 && !p.burnt) {
        if (widget.tvPopUp && !_tvAuto.contains(p.id) && !_tvOpen) {
          _tvAuto.add(p.id);
          _openTv(p, auto: true);
        }
      } else {
        _tvAuto.remove(p.id);
      }
    }
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
          case 'speaker':
            if (p.glow > 0) NgmyTone.play(330.0 + 110 * (b.time * 3).floor() % 4 * 1.0, ms: 140, wave: 'tri', volume: 0.14);
          case 'siren':
            if (p.glow > 0) NgmyTone.play((b.time * 2).floor().isEven ? 700 : 950, ms: 150, wave: 'square', volume: 0.12);
          case 'fan':
            if (p.glow > 0.1) NgmyTone.play(90 + p.glow * 40, ms: 140, wave: 'noise', volume: 0.04);
          case 'toycar':
            if (p.glow > 0.1) NgmyTone.play(70 + p.glow * 60, ms: 130, wave: 'tri', volume: 0.1);
          case 'kettle':
            if (p.glow > 0 && math.Random().nextDouble() < 0.5) NgmyTone.play(1200, ms: 30, wave: 'noise', volume: 0.07);
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
      final grow = isScreenKind(p.kind) ? p.scale : 1.0;
      if ((pos.dx - c.dx).abs() < 36 * grow && (pos.dy - c.dy).abs() < 26 * grow) return p;
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
    // Plenty of tools: all of them sit above the board, in two rows.
    final two = kinds.length > 8;
    final topKinds = two ? kinds.sublist(0, (kinds.length + 1) ~/ 2) : kinds;
    final bottomKinds = two ? kinds.sublist((kinds.length + 1) ~/ 2) : const <String>[];
    // Pop-in animation progress.
    final pop = widget.popIn;
    if (pop != null) {
      for (final k in pop.keys.toList()) {
        pop[k] = math.min(1.0, (pop[k] ?? 1) + 0.03);
      }
    }
    return Column(children: [
      if (widget.header != null) widget.header!,
      if (!widget.readOnlyPalette) _paletteRow(topKinds, top: true),
      if (!widget.readOnlyPalette && two) _paletteRow(bottomKinds, top: true),
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
                    if (isScreenKind(p.kind)) _screenTap(p);
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
              if (_notice != null)
                Positioned(
                  top: 8,
                  left: 10,
                  right: 10,
                  child: GestureDetector(
                    onTap: () => setState(() => _notice = null),
                    child: Container(
                      padding: const EdgeInsets.fromLTRB(12, 9, 12, 9),
                      decoration: BoxDecoration(color: const Color(0xF2431407), borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFFB923C))),
                      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Text('⚠️ ', style: TextStyle(fontSize: 15)),
                        Expanded(child: Text(_notice!, style: const TextStyle(color: Color(0xFFFFEDD5), fontSize: 12.5, height: 1.35, fontWeight: FontWeight.w700))),
                      ]),
                    ),
                  ),
                ),
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
    ]);
  }

  Widget _paletteRow(List<String> ks, {bool top = false}) => Container(
        height: 58,
        decoration: BoxDecoration(color: kStudioPanel, border: Border(top: top ? BorderSide.none : BorderSide(color: Colors.white.withValues(alpha: 0.08)), bottom: top ? BorderSide(color: Colors.white.withValues(alpha: 0.08)) : BorderSide.none)),
        child: ListView(scrollDirection: Axis.horizontal, padding: const EdgeInsets.fromLTRB(10, 5, 10, 5), children: [
          for (final k in ks)
            GestureDetector(
              onTap: () => spawn(k),
              child: Container(
                width: 62,
                margin: const EdgeInsets.only(right: 7),
                decoration: BoxDecoration(color: kPartByKind[k]!.color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(14), border: Border.all(color: kPartByKind[k]!.color.withValues(alpha: 0.5))),
                child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                  Text(kPartByKind[k]!.emoji, style: const TextStyle(fontSize: 18)),
                  Text(kPartByKind[k]!.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w800)),
                ]),
              ),
            ),
        ]),
      );

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
        constraints: const BoxConstraints(maxHeight: 290),
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
            if (b.diagnose(p) case final why?) Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(color: (p.burnt ? const Color(0xFFEF4444) : const Color(0xFFF59E0B)).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(10), border: Border.all(color: (p.burnt ? const Color(0xFFEF4444) : const Color(0xFFF59E0B)).withValues(alpha: 0.5))),
                child: Text('${p.burnt ? 'Why it burnt out' : 'Why it is not working'}: $why', style: const TextStyle(color: Color(0xFFFFEDD5), fontSize: 12, height: 1.35)),
              ),
            ),
            if (isTvKind(p.kind)) ...[
              const SizedBox(height: 6),
              Wrap(spacing: 6, runSpacing: 4, children: [
                for (var c = 0; c < kNgmyTvChannels.length; c++) StudioChip(label: 'CH ${c + 1}', selected: p.channel == c, color: info.color, onTap: () {
                  setState(() => p.channel = c);
                  NgmyTone.play(900, ms: 40, wave: 'noise', volume: 0.3);
                }),
              ]),
              const SizedBox(height: 4),
              Text(b.works(p) ? 'Showing: ${kNgmyTvChannels[p.channel % kNgmyTvChannels.length].title}. Tap the TV 3 times quickly to open the big screen.' : 'The TV is off. Give it power with the + dot towards the battery +.', style: const TextStyle(color: Colors.white54, fontSize: 12)),
              if (b.works(p)) StudioButton(icon: Icons.fullscreen_rounded, label: 'Open big screen', color: info.color, onTap: () => _openTv(p)),
            ],
            if (isScreenKind(p.kind) && !isTvKind(p.kind)) ...[
              const SizedBox(height: 6),
              Text(b.works(p) ? 'Playing NGMY ads. Tap it 3 times quickly, or press the button, to open it and use its apps. Tap it 4 times to make it bigger.' : 'It is off. Too few volts and it stays dark, too many and it burns out. Bring big battery volts down with a step-down converter.', style: const TextStyle(color: Colors.white54, fontSize: 12)),
              if (b.works(p)) StudioButton(icon: Icons.phone_android_rounded, label: 'Open the ${p.info.name}', color: info.color, onTap: () => _openDevice(p)),
            ],
            if (isScreenKind(p.kind)) ...[
              const SizedBox(height: 6),
              StudioButton(icon: Icons.open_in_full_rounded, label: 'Make it bigger (or tap it 4 times)', color: info.color, onTap: () => _resizeSheet(p)),
            ],
            if (b.isReducer(p)) ...[
              const SizedBox(height: 6),
              Text('Volts in: ${p.vin.toStringAsFixed(1)} V   →   Volts out: ${(b.works(p) ? p.vout : b.reducerTarget(p)).toStringAsFixed(1)} V', style: const TextStyle(color: Color(0xFF5EEAD4), fontWeight: FontWeight.w900, fontSize: 12.5)),
              if (p.kind == 'buck') Padding(
                padding: const EdgeInsets.only(top: 4),
                child: Wrap(spacing: 6, children: [for (final v in const [3.0, 4.5, 5.0, 6.0, 9.0]) StudioChip(label: '${v == v.roundToDouble() ? v.round() : v} V out', selected: p.volts == v, color: info.color, onTap: () {
                  setState(() => p.volts = v);
                  widget.onChanged?.call();
                })]),
              ),
              if (p.kind == 'regulator') const Text('Always 5 V out. The extra volts turn into heat, so a hungry gadget will make it too hot.', style: TextStyle(color: Colors.white54, fontSize: 12)),
            ],
            if (b.isSource(p) && !p.burnt) Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Supplying ${p.demand.toStringAsFixed(2)} A of the ${b.sourceMaxAmps(p).toStringAsFixed(2)} A it can give${b.overloaded(p) ? '   ⚠ OVERLOADED' : ''}', style: TextStyle(color: b.overloaded(p) ? const Color(0xFFF87171) : const Color(0xFF86EFAC), fontWeight: FontWeight.w800, fontSize: 12.5)),
                const SizedBox(height: 3),
                ClipRRect(borderRadius: BorderRadius.circular(4), child: LinearProgressIndicator(value: (p.demand / b.sourceMaxAmps(p)).clamp(0.0, 1.0), minHeight: 5, backgroundColor: Colors.white12, valueColor: AlwaysStoppedAnimation(b.overloaded(p) ? const Color(0xFFEF4444) : const Color(0xFF4ADE80)))),
              ]),
            ),
            if (p.kind == 'battery' && p.volts == 1.5) Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Text('Charge: ${(p.charge * 100).round()}%${p.charge <= 0.02 ? '  (flat: charge it first with a solar panel, + to +, − to −)' : (p.charge >= 0.99 ? '  (full)' : '  (charging fills it up)')}', style: const TextStyle(color: Color(0xFF86EFAC), fontWeight: FontWeight.w800, fontSize: 12.5)),
            ),
            if (p.kind == 'battery')
              Wrap(spacing: 6, children: [for (final v in const [1.5, 3.0, 4.5, 9.0, 12.0]) StudioChip(label: v == 1.5 ? '1.5 V (rechargeable)' : '$v V', selected: p.volts == v, color: info.color, onTap: () {
                setState(() {
                  p.volts = v;
                  p.charge = v == 1.5 ? 0 : 1;
                });
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
            if (p.kind == 'ldr') slider('Light', p.level, (x) => p.level = x),
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
  _Challenge('Watch TV', 'A TV needs 6 volts or more. Set a battery to 12 volts, and wire the TV\'s + (left) dot towards the battery +.', (b) => b.parts.any((p) => p.kind == 'tv' && p.glow > 0)),
  _Challenge('Charge a battery', 'A 1.5 V battery starts flat. Join it to a solar panel (+ to +, − to −) until its charge bar is full.', (b) => b.parts.any((p) => p.kind == 'battery' && p.volts == 1.5 && p.charge > 0.95)),
  _Challenge('One battery, two gadgets', 'A TV needs 9 volts but a phone burns out. Use a step-down converter to give the phone 5 V from the same battery.', (b) => b.parts.any((p) => p.kind == 'tv' && p.glow > 0) && b.parts.any((p) => p.kind == 'phone' && p.glow > 0) && b.has('buck')),
  _Challenge('Protect a radio', 'Put a diode in the loop with a radio. It only lets electricity go one way.', (b) => b.parts.any((p) => p.kind == 'diode' && p.glow > 0) && b.parts.any((p) => p.kind == 'radio' && p.glow > 0)),
  _Challenge('Make toast', 'A heater turns electricity into heat. Make it glow bright orange.', (b) => b.parts.any((p) => p.kind == 'heater' && p.glow > 0.5)),
];

const Color _amberHat = Color(0xFFFB923C);

class NgmyElectronicsLab extends StatefulWidget {
  const NgmyElectronicsLab({super.key});

  @override
  State<NgmyElectronicsLab> createState() => _NgmyElectronicsLabState();
}

class _NgmyElectronicsLabState extends State<NgmyElectronicsLab> with WidgetsBindingObserver {
  final ElectronicsBoard _board = ElectronicsBoard();
  final GlobalKey<BoardEditorState> _editor = GlobalKey();
  int _ch = 0;
  final Set<int> _done = {};
  int _frame = 0;
  int _working = 0;
  int _broken = 0;
  int _overloaded = 0;
  String _saved = '';
  bool _loaded = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _restore();
  }

  /// Puts back the board and the challenges from the last visit.
  Future<void> _restore() async {
    final raw = await loadLabSave();
    if (!mounted) return;
    if (raw != null && _board.parts.isEmpty) {
      final p = restoreLab(_board, raw);
      if (p != null) {
        setState(() {
          _ch = p.challenge;
          _done
            ..clear()
            ..addAll(p.done);
        });
        _saved = raw;
      }
    }
    _loaded = true;
  }

  /// Saves the board and the challenges when anything has changed.
  void _saveNow() {
    if (!_loaded) return;
    final raw = encodeLab(_board, _ch, _done);
    if (raw == _saved) return;
    _saved = raw;
    storeLabSave(raw);
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state != AppLifecycleState.resumed) _saveNow();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _saveNow();
    super.dispose();
  }

  void _tick() {
    _frame++;
    if (_frame % 15 == 0) {
      final w = _board.parts.where((p) => _board.needsPower(p) && _board.works(p)).length;
      final x = _board.parts.where((p) => p.burnt).length;
      final o = _board.parts.where(_board.overloaded).length;
      if (w != _working || x != _broken || o != _overloaded) {
        setState(() {
          _working = w;
          _broken = x;
          _overloaded = o;
        });
      }
    }
    if (_frame % 45 == 0) _saveNow();
    if (_frame % 10 != 0 || _ch >= _kChallenges.length) return;
    if (!_done.contains(_ch) && _kChallenges[_ch].check(_board)) {
      _done.add(_ch);
      NgmyTone.chord('bell', [0, 4, 7, 12], ms: 700, volume: 0.45);
      setState(() {});
      _saveNow();
      ScaffoldMessenger.maybeOf(context)?.showSnackBar(SnackBar(content: Text('✅ Challenge done: ${_kChallenges[_ch].title}. Tap the flag for the next one.'), duration: const Duration(seconds: 3)));
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

  Widget _barButton(IconData icon, String label, Color col, VoidCallback onTap, {Widget? badge}) => GestureDetector(
        onTap: onTap,
        child: Tooltip(
          message: label,
          child: SizedBox(
            width: 40,
            height: 38,
            child: Stack(clipBehavior: Clip.none, children: [
              Positioned(
                left: 4,
                top: 2,
                child: Container(
                  width: 34,
                  height: 34,
                  decoration: BoxDecoration(color: col.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12), border: Border.all(color: col.withValues(alpha: 0.45))),
                  child: Icon(icon, color: col, size: 18),
                ),
              ),
              if (badge != null) Positioned(right: -1, top: -3, child: badge),
            ]),
          ),
        ),
      );

  Widget _barChip(IconData icon, String label, Color col, VoidCallback onTap) => Expanded(
        child: GestureDetector(
          onTap: onTap,
          child: Container(
            height: 28,
            decoration: BoxDecoration(color: col.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(10), border: Border.all(color: col.withValues(alpha: 0.4))),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              Icon(icon, color: col, size: 15),
              const SizedBox(width: 5),
              Flexible(child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: col, fontWeight: FontWeight.w800, fontSize: 12))),
            ]),
          ),
        ),
      );

  /// The AI Inventor builds what you ask for on this same board.
  Future<void> _openAi() async {
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyInventorStudio(board: _board)));
    _editor.currentState?.hook();
    if (mounted) setState(() {});
    _saveNow();
  }

  /// A small round notification on the challenges button: how many are left, or a tick when one has just been done.
  Widget? _challengeBadge() {
    if (_ch >= _kChallenges.length) return null;
    final done = _done.contains(_ch);
    return Container(
      constraints: const BoxConstraints(minWidth: 16, minHeight: 16),
      padding: const EdgeInsets.symmetric(horizontal: 4),
      decoration: BoxDecoration(color: done ? const Color(0xFF22C55E) : const Color(0xFFEF4444), borderRadius: BorderRadius.circular(9), border: Border.all(color: kStudioPanel, width: 1.5)),
      child: Center(child: Text(done ? '✓' : '${_kChallenges.length - _done.length}', style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900))),
    );
  }

  Future<void> _showChallenges() async {
    await showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF17171C),
      isScrollControlled: true,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(22))),
      builder: (ctx) => StatefulBuilder(builder: (ctx, set) {
        final c = _ch < _kChallenges.length ? _kChallenges[_ch] : null;
        final done = c != null && _done.contains(_ch);
        final tone = done ? const Color(0xFF4ADE80) : const Color(0xFF38BDF8);
        return SafeArea(
          child: ConstrainedBox(
            constraints: BoxConstraints(maxHeight: MediaQuery.of(ctx).size.height * 0.75),
            child: ListView(shrinkWrap: true, padding: const EdgeInsets.fromLTRB(16, 14, 16, 16), children: [
              Row(children: [
                const Text('🎯 Challenges', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
                const Spacer(),
                Text('${_done.length} of ${_kChallenges.length} done', style: TextStyle(color: tone, fontWeight: FontWeight.w800, fontSize: 12.5)),
              ]),
              const SizedBox(height: 8),
              ClipRRect(borderRadius: BorderRadius.circular(4), child: LinearProgressIndicator(value: _done.length / _kChallenges.length, minHeight: 5, backgroundColor: Colors.white12, valueColor: AlwaysStoppedAnimation(tone))),
              const SizedBox(height: 12),
              if (c == null)
                const Text('🏆 All challenges done! Keep inventing.', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800))
              else
                Container(
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(color: tone.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(14), border: Border.all(color: tone.withValues(alpha: 0.5))),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('${done ? '✅' : '🎯'} Now: ${c.title}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14.5)),
                    const SizedBox(height: 4),
                    Text(done ? 'Well done! You did it.' : c.hint, style: const TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
                    Align(
                      alignment: Alignment.centerRight,
                      child: TextButton(
                        onPressed: () {
                          setState(() => _ch = math.min(_kChallenges.length, _ch + 1));
                          set(() {});
                          _saveNow();
                        },
                        child: Text(done ? 'Next challenge ▶' : 'Skip this one', style: TextStyle(color: tone, fontWeight: FontWeight.w800)),
                      ),
                    ),
                  ]),
                ),
              const SizedBox(height: 10),
              for (var i = 0; i < _kChallenges.length; i++)
                GestureDetector(
                  onTap: () {
                    setState(() => _ch = i);
                    set(() {});
                    _saveNow();
                  },
                  child: Container(
                    margin: const EdgeInsets.only(bottom: 6),
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 9),
                    decoration: BoxDecoration(color: i == _ch ? Colors.white.withValues(alpha: 0.09) : Colors.white.withValues(alpha: 0.04), borderRadius: BorderRadius.circular(12), border: Border.all(color: i == _ch ? tone.withValues(alpha: 0.6) : Colors.white10)),
                    child: Row(children: [
                      Text(_done.contains(i) ? '✅' : (i == _ch ? '🎯' : '⬜'), style: const TextStyle(fontSize: 14)),
                      const SizedBox(width: 10),
                      Expanded(child: Text(_kChallenges[i].title, style: TextStyle(color: _done.contains(i) ? Colors.white54 : Colors.white, fontWeight: FontWeight.w800, fontSize: 13))),
                    ]),
                  ),
                ),
            ]),
          ),
        );
      }),
    );
  }

  Widget _topBar(BuildContext context, String help) {
    const accent = Color(0xFF38BDF8);
    return Container(
      padding: const EdgeInsets.fromLTRB(8, 6, 8, 8),
      decoration: BoxDecoration(color: kStudioPanel, border: Border(bottom: BorderSide(color: Colors.white.withValues(alpha: 0.08)))),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(children: [
          GestureDetector(
            onTap: () => Navigator.of(context).maybePop(),
            child: Container(
              width: 34,
              height: 34,
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), shape: BoxShape.circle),
              child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white70, size: 17),
            ),
          ),
          const SizedBox(width: 8),
          Container(
            width: 34,
            height: 34,
            decoration: BoxDecoration(color: const Color(0xFF1E293B), borderRadius: BorderRadius.circular(11), border: Border.all(color: accent.withValues(alpha: 0.45))),
            child: const Center(child: Text('⚡', style: TextStyle(fontSize: 19))),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Electronics Lab', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16, letterSpacing: 0.2)),
              Text(
                _board.parts.isEmpty ? 'Pick a part to start' : '${_board.parts.length} parts · $_working working${_broken > 0 ? ' · $_broken burnt' : ''}${_overloaded > 0 ? ' · ⚠ overloaded' : ''}',
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: (_broken > 0 || _overloaded > 0) ? const Color(0xFFFCA5A5) : const Color(0xFF7DD3FC), fontSize: 11.5, fontWeight: FontWeight.w700),
              ),
            ]),
          ),
          _AiOrb(onTap: _openAi),
          const SizedBox(width: 2),
          _barButton(Icons.construction_rounded, 'Construction Lab: real 3D wiring, plumbing and a house', _amberHat, () => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => const NgmyConstructionLab()))),
          _barButton(Icons.flag_rounded, 'Challenges', const Color(0xFFFBBF24), _showChallenges, badge: _challengeBadge()),
          _barButton(Icons.help_outline_rounded, 'How to play', accent, () => showStudioHelp(context, 'ELECTRONICS LAB', help, accent)),
        ]),
        const SizedBox(height: 6),
        Row(children: [
          _barChip(Icons.menu_book_rounded, 'Circuits', const Color(0xFFA78BFA), _recipes),
          const SizedBox(width: 6),
          _barChip(Icons.build_rounded, 'Repair', const Color(0xFFFBBF24), () => setState(_board.repairAll)),
          const SizedBox(width: 6),
          _barChip(Icons.delete_sweep_rounded, 'Clear', const Color(0xFFF87171), () {
            setState(_board.clear);
            _saveNow();
          }),
        ]),
      ]),
    );
  }

  static const String _help = 'Build real circuits.\n\n1. Tap a part in the tool rows at the top to put it on the board. Drag it around.\n2. Drag from a round dot on one part to a round dot on another to join them with a wire. A circuit only works when it makes a complete loop from the battery, through the parts, and back.\n3. Tap a part to read what it does and how it is made, and to change it (battery volts, sunlight, resistor size). Tap a switch to flip it, and a crank to spin it.\n\nThe maths is real: bulbs get brighter with more volts and burn out with too many, LEDs need a resistor, and moving dots on the wires show current flowing.\n\nEvery battery and solar panel can only give so many amps. Connect too many gadgets and a warning sign appears on it: the volts sag and gadgets switch off. Take some gadgets off, or use a bigger battery.\n\nYour board is saved by itself, so it is still there when you come back.\n\nThe AI button at the top is the AI Inventor: say what you want to make and watch it being built on your board. The flag button shows your challenges, with a number on it for how many are left.\n\nLots of tools: two rows above the board (swipe sideways to see them all). A phone burns out above 7 volts, so use a step-down converter (it brings big battery volts down) to run a phone and a TV from one battery. A diode lets electricity go one way only. Appliances, toys and machines each need the right volts. A TV needs 6+ volts and shows 10 NGMY channels, a remote and apps: tap it 3 times quickly for the big screen. A phone plays NGMY ads and has apps too. A 1.5 V battery starts flat and must be charged with a solar panel first. If something does not work, tap it: it tells you why (backwards, burnt, flat battery, overloaded, loop not finished...).\n\nOpen Ready-made circuits to see how a flashlight, radio, TV or solar lamp is wired.';

  @override
  Widget build(BuildContext context) {
    NgmyTone.theme = kStudioSoundThemes['ELECTRONICS LAB'] ?? 'music';
    return Scaffold(
      backgroundColor: kStudioBg,
      body: SafeArea(
        child: Column(children: [
          _topBar(context, _help),
          Expanded(child: BoardEditor(key: _editor, board: _board, onTick: _tick)),
        ]),
      ),
    );
  }
}

/// The AI button: a dark glowing orb with a slowly turning ring and a twinkling spark.
class _AiOrb extends StatefulWidget {
  const _AiOrb({required this.onTap});
  final VoidCallback onTap;

  @override
  State<_AiOrb> createState() => _AiOrbState();
}

class _AiOrbState extends State<_AiOrb> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(seconds: 4))..repeat();

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: widget.onTap,
      child: Tooltip(
        message: 'AI Inventor: say what you want to make',
        child: SizedBox(
          width: 42,
          height: 42,
          child: AnimatedBuilder(animation: _c, builder: (_, __) => CustomPaint(painter: _AiOrbPainter(_c.value))),
        ),
      ),
    );
  }
}

class _AiOrbPainter extends CustomPainter {
  _AiOrbPainter(this.t);
  final double t;

  @override
  void paint(Canvas c, Size s) {
    final ctr = s.center(Offset.zero);
    final r = s.width * 0.41;
    final pulse = (math.sin(t * math.pi * 2) + 1) / 2;
    c.drawCircle(ctr, r + 2 + pulse * 2, Paint()..color = const Color(0xFF8B5CF6).withValues(alpha: 0.25 + 0.15 * pulse)..maskFilter = const MaskFilter.blur(BlurStyle.normal, 5));
    c.drawCircle(ctr, r, Paint()..shader = const RadialGradient(center: Alignment(-0.3, -0.4), colors: [Color(0xFF312E81), Color(0xFF0F0B1F)]).createShader(Rect.fromCircle(center: ctr, radius: r)));
    final ring = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.2
      ..shader = SweepGradient(transform: GradientRotation(t * math.pi * 2), colors: const [Color(0xFFA78BFA), Color(0xFFEC4899), Color(0xFF22D3EE), Color(0xFFA78BFA)]).createShader(Rect.fromCircle(center: ctr, radius: r));
    c.drawCircle(ctr, r, ring);
    void star(Offset o, double sz, double alpha) {
      final p = Path()
        ..moveTo(o.dx, o.dy - sz)
        ..quadraticBezierTo(o.dx, o.dy, o.dx + sz, o.dy)
        ..quadraticBezierTo(o.dx, o.dy, o.dx, o.dy + sz)
        ..quadraticBezierTo(o.dx, o.dy, o.dx - sz, o.dy)
        ..quadraticBezierTo(o.dx, o.dy, o.dx, o.dy - sz)
        ..close();
      c.drawPath(p, Paint()..color = Colors.white.withValues(alpha: alpha));
    }
    star(ctr + const Offset(0, -4), 8 + pulse * 1.5, 1);
    star(ctr + const Offset(8, -10), 3.2, 0.5 + 0.5 * math.sin(t * math.pi * 4));
    star(ctr + const Offset(-9, 1), 2.6, 0.5 + 0.5 * math.cos(t * math.pi * 4));
    final tp = TextPainter(text: const TextSpan(text: 'AI', style: TextStyle(color: Color(0xFFE9D5FF), fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.5)), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, ctr + Offset(-tp.width / 2, 5));
  }

  @override
  bool shouldRepaint(covariant _AiOrbPainter old) => old.t != t;
}
