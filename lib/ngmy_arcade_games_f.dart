import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';

/// Arcade games 51–60: money and treasure.
Widget? ngmyBuildArcadeGameF(String id, NgmyArcadeArgs a) {
  switch (id) {
    case 'treasure_hunt':
      return TreasureHuntGame(args: a);
    case 'safe_cracker':
      return SafeCrackerGame(args: a);
    case 'gold_miner':
      return GoldMinerGame(args: a);
    case 'cash_counter':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFF22C55E), Color(0xFF14532D)], hint: 'Count the cash', make: _cashCount);
    case 'plinko_drop':
      return PlinkoDropGame(args: a);
    case 'slot_stopper':
      return SlotStopperGame(args: a);
    case 'change_maker':
      return ChangeMakerGame(args: a);
    case 'price_guess':
      return ArcadeQuiz(args: a, goal: 10, colors: const [Color(0xFFF97316), Color(0xFF7C2D12)], hint: 'Which costs more?', optionFontSize: 15, make: _priceGuess);
    case 'make_13':
      return Make13Game(args: a);
    case 'find_it':
      return FindItGame(args: a);
  }
  return null;
}

String _money(int cents) => cents % 100 == 0 ? '\$${cents ~/ 100}' : '\$${(cents / 100).toStringAsFixed(2)}';

// 51 ── Treasure Hunt ────────────────────────────────────────────────────────
class TreasureHuntGame extends StatefulWidget {
  const TreasureHuntGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<TreasureHuntGame> createState() => _TreasureHuntState();
}

class _TreasureHuntState extends State<TreasureHuntGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 5;
  static const n = 7, digs = 26;
  late final Set<int> _gold;
  final _dug = <int, int>{}; // cell → distance (0 = treasure)
  int _left = digs;

  @override
  void initState() {
    super.initState();
    final cells = List.generate(n * n, (i) => i)..shuffle(args.rng);
    _gold = cells.take(goal).toSet();
    startScore();
  }

  int _dist(int i) {
    var best = 99;
    for (final g in _gold) {
      if (_dug[g] == 0) continue;
      final d = (g ~/ n - i ~/ n).abs() + (g % n - i % n).abs();
      if (d < best) best = d;
    }
    return best;
  }

  void _dig(int i) {
    if (ended || _dug.containsKey(i)) return;
    setState(() {
      _left--;
      if (_gold.contains(i)) {
        _dug[i] = 0;
      } else {
        _dug[i] = _dist(i);
      }
    });
    if (_dug[i] == 0) {
      if (addPoint()) return;
    } else {
      HapticFeedback.selectionClick();
    }
    if (_left <= 0) knockout('Out of digs');
  }

  Color _heat(int d) => switch (d) {
        1 => const Color(0xFFDC2626),
        2 => const Color(0xFFF97316),
        3 => const Color(0xFFFACC15),
        _ => const Color(0xFF38BDF8),
      };

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFFFDE68A), Color(0xFFB45309)]),
        Column(children: [
          ArcadeBanner(child: Text('Find $goal treasures · found $score · digs $_left')),
          const Text('Red = very close · orange = close · yellow = near · blue = far', style: TextStyle(color: Colors.black87, fontWeight: FontWeight.w700, fontSize: 11.5)),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(12),
                  child: GridView.count(
                    crossAxisCount: n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < n * n; i++)
                        GestureDetector(
                          onTap: () => _dig(i),
                          child: AnimatedContainer(
                            duration: const Duration(milliseconds: 200),
                            margin: const EdgeInsets.all(2),
                            decoration: BoxDecoration(
                              borderRadius: BorderRadius.circular(8),
                              color: !_dug.containsKey(i) ? const Color(0xFFD6A35C) : (_dug[i] == 0 ? const Color(0xFF854D0E) : _heat(_dug[i]!).withValues(alpha: 0.85)),
                              border: Border.all(color: const Color(0xFF92400E).withValues(alpha: 0.5)),
                            ),
                            alignment: Alignment.center,
                            child: FittedBox(
                              child: Padding(
                                padding: const EdgeInsets.all(4),
                                child: !_dug.containsKey(i)
                                    ? const Text('⛏️', style: TextStyle(fontSize: 18, color: Colors.black26))
                                    : _dug[i] == 0
                                        ? const Text('💰', style: TextStyle(fontSize: 26))
                                        : Text(_dug[i]! >= 99 ? '·' : '${_dug[i]}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                              ),
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

// 52 ── Safe Cracker ─────────────────────────────────────────────────────────
class SafeCrackerGame extends StatefulWidget {
  const SafeCrackerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SafeCrackerGame> createState() => _SafeCrackerState();
}

class _SafeCrackerState extends State<SafeCrackerGame> {
  static const safes = 2, len = 4, tries = 9;
  late List<int> _code;
  final _rows = <(List<int>, int, int)>[];
  final _input = <int>[];
  int _cracked = 0, _best = 0;
  bool _over = false;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    _newCode();
    widget.args.onProgress(0, safes * len);
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _newCode() {
    final d = [1, 2, 3, 4, 5, 6]..shuffle(widget.args.rng);
    _code = d.take(len).toList();
    _rows.clear();
    _best = 0;
  }

  void _key(int d) {
    if (_over || _t != null) return;
    if (d == -1) {
      if (_input.isNotEmpty) setState(_input.removeLast);
      return;
    }
    if (_input.length >= len || _input.contains(d)) return;
    HapticFeedback.selectionClick();
    setState(() => _input.add(d));
    if (_input.length == len) _submit();
  }

  void _submit() {
    var green = 0, yellow = 0;
    for (var i = 0; i < len; i++) {
      if (_input[i] == _code[i]) {
        green++;
      } else if (_code.contains(_input[i])) {
        yellow++;
      }
    }
    setState(() {
      _rows.add(([..._input], green, yellow));
      _input.clear();
    });
    _best = math.max(_best, green);
    widget.args.onProgress(math.min(_cracked * len + _best, safes * len - (green == len ? 0 : 1)), safes * len);
    if (green == len) {
      HapticFeedback.heavyImpact();
      _cracked++;
      if (_cracked >= safes) {
        _over = true;
        widget.args.onComplete();
        return;
      }
      _t = Timer(const Duration(milliseconds: 900), () {
        _t = null;
        if (mounted) setState(_newCode);
      });
    } else if (_rows.length >= tries) {
      _over = true;
      widget.args.onKnockout('The alarm went off');
    }
  }

  Widget _digit(int? d, {Color? color}) => Container(
        width: 38,
        height: 42,
        margin: const EdgeInsets.all(3),
        alignment: Alignment.center,
        decoration: BoxDecoration(color: color ?? Colors.black.withValues(alpha: 0.4), borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.white24)),
        child: Text(d == null ? '' : '$d', style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF334155), Color(0xFF0F172A)]),
        Column(children: [
          ArcadeBanner(child: Text('Crack the 4-digit code (1–6, no repeats) · safe ${math.min(_cracked + 1, safes)}/$safes · tries ${tries - _rows.length}')),
          const Text('🟢 right digit, right spot   🟡 right digit, wrong spot', style: TextStyle(color: Colors.white70, fontSize: 12, fontWeight: FontWeight.w700)),
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
              children: [
                for (final r in _rows)
                  Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                    for (final d in r.$1) _digit(d),
                    const SizedBox(width: 10),
                    Text('🟢' * r.$2 + '🟡' * r.$3, style: const TextStyle(fontSize: 16)),
                  ]),
                Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                  for (var i = 0; i < len; i++) _digit(i < _input.length ? _input[i] : null, color: const Color(0xFF1E40AF).withValues(alpha: 0.6)),
                  const SizedBox(width: 10),
                  const Text('🔒', style: TextStyle(fontSize: 26)),
                ]),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 0, 12, 14),
            child: Wrap(
              alignment: WrapAlignment.center,
              spacing: 8,
              runSpacing: 8,
              children: [
                for (final d in [1, 2, 3, 4, 5, 6, -1])
                  GestureDetector(
                    onTap: () => _key(d),
                    child: Container(
                      width: 64,
                      height: 52,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        gradient: const LinearGradient(colors: [Color(0xFF64748B), Color(0xFF334155)]),
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: _input.contains(d) ? Colors.white24 : Colors.white54),
                      ),
                      child: d == -1 ? const Icon(Icons.backspace_rounded, color: Colors.white) : Text('$d', style: TextStyle(color: _input.contains(d) ? Colors.white30 : Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
                    ),
                  ),
              ],
            ),
          ),
        ]),
      ]);
}

// 53 ── Gold Miner ───────────────────────────────────────────────────────────
class GoldMinerGame extends StatefulWidget {
  const GoldMinerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<GoldMinerGame> createState() => _GoldMinerState();
}

class _Loot {
  _Loot(this.p, this.e, this.size, this.value, this.weight);
  Offset p;
  final String e;
  final double size, weight;
  final int value;
}

class _GoldMinerState extends State<GoldMinerGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 900;
  final _loot = <_Loot>[];
  Size _size = Size.zero;
  double _t = 0, _angle = 0, _len = 40, _dir = 0; // dir: 0 swing, 1 out, -1 back
  _Loot? _grab;
  String _pop = '';
  double _popT = 0;

  Offset get _origin => Offset(_size.width / 2, 74);
  Offset get _tip => _origin + Offset(math.sin(_angle), math.cos(_angle)) * _len;

  void _fill() {
    final r = args.rng;
    final w = _size.width, h = _size.height;
    while (_loot.length < 8) {
      final roll = r.nextDouble();
      final kind = roll < 0.28
          ? ('🪙', 30.0, 50, 0.5)
          : roll < 0.48
              ? ('🟨', 54.0, 150, 2.0)
              : roll < 0.56
                  ? ('💎', 28.0, 200, 0.3)
                  : ('🪨', 56.0, 10, 2.8);
      final p = Offset(30 + r.nextDouble() * (w - 60), h * 0.35 + r.nextDouble() * (h * 0.58));
      if (_loot.any((l) => (l.p - p).distance < 56)) continue;
      _loot.add(_Loot(p, kind.$1, kind.$2, kind.$3, kind.$4));
    }
  }

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_size.isEmpty) return;
      if (_loot.isEmpty) _fill();
      if (_popT > 0) _popT -= dt;
      if (_dir == 0) {
        _t += dt;
        _angle = math.sin(_t * (2.1 + score / 450)) * 1.25;
      } else if (_dir == 1) {
        _len += 460 * dt;
        final tip = _tip;
        for (final l in _loot) {
          if ((l.p - tip).distance < l.size / 2 + 6) {
            _grab = l;
            _dir = -1;
            break;
          }
        }
        if (tip.dx < 0 || tip.dx > _size.width || tip.dy > _size.height) _dir = -1;
      } else {
        _len -= 460 / (1 + (_grab?.weight ?? 0)) * dt;
        if (_grab != null) _grab!.p = _tip;
        if (_len <= 40) {
          _len = 40;
          _dir = 0;
          final g = _grab;
          _grab = null;
          if (g != null) {
            _loot.remove(g);
            _pop = '+\$${g.value}';
            _popT = 0.8;
            if (_loot.length < 4) _fill();
            if (addPoint(g.value)) return;
          }
        }
      }
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        _size = Size(c.maxWidth, c.maxHeight);
        final tip = _tip;
        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (_) {
            if (_dir == 0 && !ended) _dir = 1;
          },
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF7DD3FC), Color(0xFF7DD3FC)]),
            Positioned(left: 0, right: 0, top: 90, bottom: 0, child: Container(decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFA16207), Color(0xFF451A03)])))),
            for (final l in _loot) Positioned(left: l.p.dx - l.size / 2, top: l.p.dy - l.size / 2, child: emojiText(l.e, l.size)),
            Positioned.fill(child: CustomPaint(painter: _RopePainter(_origin, tip))),
            Positioned(left: tip.dx - 14, top: tip.dy - 6, child: Transform.rotate(angle: -_angle, child: const Icon(Icons.anchor_rounded, color: Color(0xFF374151), size: 28))),
            Positioned(left: _origin.dx - 26, top: 30, child: emojiText('🤠', 46)),
            if (_popT > 0) Positioned(left: 0, right: 0, top: 110, child: Text(_pop, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFDE68A), fontSize: 30, fontWeight: FontWeight.w900, shadows: [Shadow(blurRadius: 8)]))),
            arcadeTopBar('Tap to drop the claw · \$$score of \$$goal', bottom: true),
          ]),
        );
      });
}

class _RopePainter extends CustomPainter {
  _RopePainter(this.a, this.b);
  final Offset a, b;
  @override
  void paint(Canvas canvas, Size size) => canvas.drawLine(a, b, Paint()
    ..color = const Color(0xFF1F2937)
    ..strokeWidth = 2.5);
  @override
  bool shouldRepaint(covariant _RopePainter old) => old.b != b || old.a != a;
}

// 54 ── Cash Counter ─────────────────────────────────────────────────────────
const _cash = <(String, int)>[('\$20', 2000), ('\$10', 1000), ('\$5', 500), ('\$1', 100), ('25¢', 25), ('10¢', 10), ('5¢', 5)];

ArcadeQ _cashCount(int round, math.Random r) {
  final kinds = (List.of(_cash)..shuffle(r)).take(3 + math.min(round ~/ 2, 3)).toList();
  var total = 0;
  final chips = <Widget>[];
  for (final k in kinds) {
    final count = 1 + r.nextInt(5);
    total += k.$2 * count;
    final bill = k.$2 >= 100;
    for (var i = 0; i < count; i++) {
      chips.add(Container(
        width: bill ? 62 : 38,
        height: bill ? 34 : 38,
        margin: const EdgeInsets.all(3),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: bill ? const Color(0xFF15803D) : const Color(0xFFCBD5E1),
          borderRadius: BorderRadius.circular(bill ? 6 : 19),
          border: Border.all(color: bill ? const Color(0xFF86EFAC) : const Color(0xFF64748B), width: 2),
        ),
        child: Text(k.$1, style: TextStyle(fontSize: 12, color: bill ? Colors.white : Colors.black87, fontWeight: FontWeight.w900)),
      ));
    }
  }
  final wrong = <String>{for (final d in [-25, -15, -10, -5, 5, 10, 15, 25]) if (total + d > 0) _money(total + d)};
  final (opts, ans) = arcadeOptions(_money(total), wrong, r);
  return ArcadeQ(SizedBox(width: 260, child: Wrap(alignment: WrapAlignment.center, children: chips)), opts, ans);
}

// 55 ── Plinko Drop ──────────────────────────────────────────────────────────
class PlinkoDropGame extends StatefulWidget {
  const PlinkoDropGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<PlinkoDropGame> createState() => _PlinkoDropState();
}

class _PlinkoDropState extends State<PlinkoDropGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 22;
  static const slots = [4, 1, 0, 1, 3, 1, 0, 1, 4];
  static const rows = 8, balls = 12;
  int _used = 0;
  List<double>? _path; // column (0..8) at each row
  double _t = 0;
  int? _landed;
  double _flash = 0;

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_flash > 0) _flash -= dt;
      if (_path != null) {
        _t += dt / 0.14;
        if (_t >= rows) {
          final slot = _path!.last.round().clamp(0, slots.length - 1);
          _landed = slot;
          _flash = 0.8;
          _path = null;
          final pts = slots[slot];
          if (pts > 0 && addPoint(pts)) return;
          if (_used >= balls) {
            knockout('Out of balls');
            return;
          }
        }
      }
      setState(() {});
    });
  }

  void _drop(double col) {
    if (_path != null || ended || _used >= balls) return;
    _used++;
    var x = col.clamp(0.0, slots.length - 1.0);
    final p = <double>[x];
    for (var i = 0; i < rows; i++) {
      x = (x + (args.rng.nextBool() ? 0.5 : -0.5)).clamp(0.0, slots.length - 1.0);
      p.add(x);
    }
    _path = p;
    _t = 0;
  }

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, c) {
        final w = c.maxWidth, h = c.maxHeight;
        final cw = w / slots.length;
        final top = 80.0, rowH = (h - top - 90) / rows;
        Offset ballPos() {
          final p = _path!;
          final i = _t.floor().clamp(0, rows - 1);
          final f = Curves.easeIn.transform((_t - i).clamp(0.0, 1.0));
          final x = p[i] + (p[i + 1] - p[i]) * f;
          final y = i + f;
          return Offset((x + 0.5) * cw, top + y * rowH - math.sin(f * math.pi) * 8);
        }

        return GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTapDown: (d) => _drop(d.localPosition.dx / cw - 0.5),
          child: Stack(children: [
            arcadeBackdrop(const [Color(0xFF4C1D95), Color(0xFF1E1B4B)]),
            for (var r = 1; r <= rows; r++)
              for (var k = 0; k < slots.length; k++)
                Positioned(
                  left: (k + (r.isOdd ? 0.0 : 0.5)) * cw + cw / 2 - 4,
                  top: top + (r - 0.5) * rowH - 4,
                  child: Container(width: 8, height: 8, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFE9D5FF), boxShadow: [BoxShadow(color: Color(0x88C084FC), blurRadius: 6)])),
                ),
            for (var k = 0; k < slots.length; k++)
              Positioned(
                left: k * cw + 2,
                width: cw - 4,
                bottom: 30,
                height: 54,
                child: Container(
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: _landed == k && _flash > 0 ? Colors.white : (slots[k] >= 5 ? const Color(0xFFF59E0B) : slots[k] == 0 ? const Color(0xFF374151) : const Color(0xFF7C3AED)),
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Text('${slots[k]}', style: TextStyle(color: _landed == k && _flash > 0 ? Colors.black : Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                ),
              ),
            if (_path != null)
              Builder(builder: (_) {
                final p = ballPos();
                return Positioned(left: p.dx - 12, top: p.dy - 12, child: Container(width: 24, height: 24, decoration: const BoxDecoration(shape: BoxShape.circle, gradient: RadialGradient(colors: [Color(0xFFFEF3C7), Color(0xFFF59E0B)]), boxShadow: [BoxShadow(color: Color(0xAAF59E0B), blurRadius: 10)])));
              }),
            arcadeTopBar('Tap the top to drop · $score/$goal pts · balls ${balls - _used}'),
          ]),
        );
      });
}

// 56 ── Slot Stopper ─────────────────────────────────────────────────────────
class SlotStopperGame extends StatefulWidget {
  const SlotStopperGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<SlotStopperGame> createState() => _SlotStopperState();
}

class _SlotStopperState extends State<SlotStopperGame> with SingleTickerProviderStateMixin, ArcadeLoop, ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 4;
  static const symbols = ['🍒', '🍋', '🔔', '⭐', '7️⃣', '💎'];
  static const spins = 10;
  final _pos = [0.0, 2.0, 4.0];
  final _stopped = [false, false, false];
  int _spinsLeft = spins;
  double _result = 0;
  bool? _win;

  double get _speed => 4.8 + score * 0.9; // symbols per second

  @override
  void initState() {
    super.initState();
    startScore();
    startLoop((dt) {
      if (_result > 0) {
        _result -= dt;
        if (_result <= 0) {
          _win = null;
          for (var i = 0; i < 3; i++) {
            _stopped[i] = false;
          }
        }
      } else {
        for (var i = 0; i < 3; i++) {
          if (!_stopped[i]) _pos[i] = (_pos[i] + _speed * (1 + i * 0.28) * dt) % symbols.length;
        }
      }
      setState(() {});
    });
  }

  void _tap() {
    if (ended || _result > 0) return;
    final i = _stopped.indexOf(false);
    if (i < 0) return;
    _stopped[i] = true;
    _pos[i] = (_pos[i].round() % symbols.length).toDouble();
    HapticFeedback.mediumImpact();
    if (i == 2) {
      _spinsLeft--;
      final s = _pos.map((p) => p.round() % symbols.length).toList();
      _win = s[0] == s[1] && s[1] == s[2];
      _result = 1.2;
      if (_win!) {
        if (addPoint()) return;
      }
      if (_spinsLeft <= 0) knockout('Out of spins');
    }
  }

  Widget _reel(int i) {
    final p = _pos[i];
    final base = p.floor();
    final frac = p - base;
    return Container(
      width: 84,
      height: 120,
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: _stopped[i] ? const Color(0xFFFACC15) : const Color(0xFF94A3B8), width: 3),
      ),
      clipBehavior: Clip.antiAlias,
      child: Stack(children: [
        for (var k = -1; k <= 2; k++)
          Positioned(
            left: 0,
            right: 0,
            top: 30 + (k - frac) * 60,
            child: Center(child: emojiText(symbols[(base + k) % symbols.length], 46)),
          ),
      ]),
    );
  }

  @override
  Widget build(BuildContext context) => GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTapDown: (_) => _tap(),
        child: Stack(children: [
          arcadeBackdrop(const [Color(0xFFB91C1C), Color(0xFF450A0A)]),
          Center(
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Text('JACKPOT', style: TextStyle(color: Color(0xFFFDE68A), fontSize: 34, fontWeight: FontWeight.w900, letterSpacing: 4, shadows: [Shadow(color: Color(0xFFF59E0B), blurRadius: 16)])),
              const SizedBox(height: 14),
              Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [Color(0xFFF59E0B), Color(0xFFB45309)]),
                  borderRadius: BorderRadius.circular(22),
                  boxShadow: const [BoxShadow(color: Color(0x88F59E0B), blurRadius: 24)],
                ),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  for (var i = 0; i < 3; i++) Padding(padding: const EdgeInsets.symmetric(horizontal: 4), child: _reel(i)),
                ]),
              ),
              const SizedBox(height: 16),
              Text(
                _win == null ? 'Tap to stop reel ${(_stopped.indexOf(false) + 1).clamp(1, 3)}' : (_win! ? '3 IN A ROW!' : 'No match'),
                style: TextStyle(color: _win == true ? const Color(0xFF4ADE80) : Colors.white, fontSize: 22, fontWeight: FontWeight.w900),
              ),
            ]),
          ),
          arcadeTopBar('Line up 3 of a kind · $score/$goal · spins $_spinsLeft'),
        ]),
      );
}

// 57 ── Change Maker ─────────────────────────────────────────────────────────
class ChangeMakerGame extends StatefulWidget {
  const ChangeMakerGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<ChangeMakerGame> createState() => _ChangeMakerState();
}

class _ChangeMakerState extends State<ChangeMakerGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 6;
  static const items = ['🍔', '🍕', '🧃', '🍦', '📚', '🧸', '🎧', '🌮', '☕', '🍩'];
  static const money = [1000, 500, 100, 25, 10, 5, 1];
  String _item = '🍔';
  int _price = 0, _paid = 0, _given = 0;
  bool? _last;
  Timer? _t;

  @override
  void initState() {
    super.initState();
    startScore();
    _next();
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  void _next() {
    final r = args.rng;
    _item = items[r.nextInt(items.length)];
    _price = 100 + r.nextInt(score < 3 ? 900 : 1800);
    if (score < 2) _price = (_price ~/ 25) * 25;
    _paid = _price <= 1000 ? 1000 : 2000;
    if (_paid == _price) _paid += 500;
    _given = 0;
  }

  void _give() {
    if (ended || _t != null) return;
    final ok = _given == _paid - _price;
    setState(() => _last = ok);
    if (ok) {
      if (addPoint()) return;
    } else if (loseHeart('Wrong change')) {
      return;
    }
    _t = Timer(const Duration(milliseconds: 700), () {
      _t = null;
      if (!mounted) return;
      setState(() {
        _last = null;
        _next();
      });
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF065F46), Color(0xFF022C22)]),
        Column(children: [
          arcadeTopBar('Give exact change · $score/$goal', hearts: hearts),
          Expanded(
            child: Center(
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                Text(_item, style: const TextStyle(fontSize: 64)),
                Text('Costs ${_money(_price)}', style: const TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.w900)),
                Text('Customer pays ${_money(_paid)}', style: const TextStyle(color: Color(0xFFA7F3D0), fontSize: 18, fontWeight: FontWeight.w800)),
                const SizedBox(height: 14),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 10),
                  decoration: BoxDecoration(
                    color: _last == null ? Colors.black38 : (_last! ? const Color(0xFF16A34A) : const Color(0xFFDC2626)),
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: Colors.white38),
                  ),
                  child: Text('Your change: ${_money(_given)}', style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
                ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 8),
            child: Wrap(
              alignment: WrapAlignment.center,
              spacing: 6,
              runSpacing: 6,
              children: [
                for (final m in money)
                  GestureDetector(
                    onTap: () {
                      if (_t == null) setState(() => _given += m);
                    },
                    child: Container(
                      width: m >= 100 ? 76 : 52,
                      height: m >= 100 ? 40 : 52,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: m >= 100 ? const Color(0xFF15803D) : const Color(0xFFCBD5E1),
                        borderRadius: BorderRadius.circular(m >= 100 ? 6 : 26),
                        border: Border.all(color: m >= 100 ? const Color(0xFF86EFAC) : const Color(0xFF64748B), width: 2),
                      ),
                      child: Text(m >= 100 ? '\$${m ~/ 100}' : '$m¢', style: TextStyle(color: m >= 100 ? Colors.white : Colors.black87, fontWeight: FontWeight.w900)),
                    ),
                  ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
            child: Row(children: [
              Expanded(child: OutlinedButton(onPressed: () => setState(() => _given = 0), style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white54)), child: const Text('Clear'))),
              const SizedBox(width: 10),
              Expanded(flex: 2, child: FilledButton(onPressed: _give, style: FilledButton.styleFrom(backgroundColor: const Color(0xFFF59E0B)), child: const Text('Give change', style: TextStyle(fontWeight: FontWeight.w900)))),
            ]),
          ),
        ]),
      ]);
}

// 58 ── Price Guess ──────────────────────────────────────────────────────────
const _prices = <(String, String, int)>[
  ('🍬', 'A pack of gum', 1),
  ('🥛', 'A gallon of milk', 4),
  ('☕', 'A cup of coffee', 5),
  ('🎟️', 'A movie ticket', 15),
  ('💇', 'A haircut', 30),
  ('👖', 'A pair of jeans', 60),
  ('👟', 'Running shoes', 120),
  ('🎧', 'Good headphones', 250),
  ('✈️', 'A plane ticket', 450),
  ('🚲', 'A bicycle', 600),
  ('📱', 'A new smartphone', 1000),
  ('💻', 'A laptop', 1300),
  ('🛋️', 'A sofa', 1500),
  ('💍', 'A diamond ring', 6000),
  ('🚗', 'A new car', 35000),
  ('🪙', 'A 1 kg gold bar', 90000),
  ('🏠', 'A house', 400000),
  ('🛥️', 'A yacht', 5000000),
  ('🛩️', 'A private jet', 25000000),
];

ArcadeQ _priceGuess(int round, math.Random r) {
  late (String, String, int) a, b;
  do {
    a = _prices[r.nextInt(_prices.length)];
    b = _prices[r.nextInt(_prices.length)];
  } while (a == b || math.max(a.$3, b.$3) / math.min(a.$3, b.$3) < 2.5);
  return ArcadeQ(
    Row(mainAxisSize: MainAxisSize.min, children: [
      Text(a.$1, style: const TextStyle(fontSize: 54)),
      const Padding(padding: EdgeInsets.symmetric(horizontal: 14), child: Text('or', style: TextStyle(fontSize: 20, color: Colors.white70))),
      Text(b.$1, style: const TextStyle(fontSize: 54)),
    ]),
    [a.$2, b.$2],
    a.$3 > b.$3 ? 0 : 1,
  );
}

// 59 ── Make 13 ──────────────────────────────────────────────────────────────
class Make13Game extends StatefulWidget {
  const Make13Game({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<Make13Game> createState() => _Make13State();
}

class _Make13State extends State<Make13Game> {
  static const goal = 26;
  static const suits = ['♠', '♥', '♦', '♣'];
  late List<(int, int)> _cards; // (rank 1..13, suit)
  int? _sel;
  int _cleared = 0;
  bool _over = false;

  (int, int) _draw() => (1 + widget.args.rng.nextInt(13), widget.args.rng.nextInt(4));

  @override
  void initState() {
    super.initState();
    _cards = List.generate(12, (_) => _draw());
    _ensureMove();
    widget.args.onProgress(0, goal);
  }

  bool get _hasMove {
    for (var i = 0; i < _cards.length; i++) {
      if (_cards[i].$1 == 13) return true;
      for (var j = i + 1; j < _cards.length; j++) {
        if (_cards[i].$1 + _cards[j].$1 == 13) return true;
      }
    }
    return false;
  }

  void _ensureMove() {
    while (!_hasMove) {
      _cards[widget.args.rng.nextInt(_cards.length)] = _draw();
    }
  }

  void _clear(List<int> idx) {
    HapticFeedback.mediumImpact();
    setState(() {
      for (final i in idx) {
        _cards[i] = _draw();
      }
      _cleared += idx.length;
      _sel = null;
      _ensureMove();
    });
    widget.args.onProgress(math.min(_cleared, goal), goal);
    if (_cleared >= goal) {
      _over = true;
      widget.args.onComplete();
    }
  }

  void _tap(int i) {
    if (_over) return;
    if (_cards[i].$1 == 13) {
      _clear([i]);
      return;
    }
    if (_sel == null || _sel == i) {
      setState(() => _sel = _sel == i ? null : i);
      return;
    }
    if (_cards[_sel!].$1 + _cards[i].$1 == 13) {
      _clear([_sel!, i]);
    } else {
      HapticFeedback.heavyImpact();
      setState(() => _sel = i);
    }
  }

  String _rank(int r) => switch (r) {
        1 => 'A',
        11 => 'J',
        12 => 'Q',
        13 => 'K',
        _ => '$r',
      };

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF166534), Color(0xFF052E16)]),
        Column(children: [
          ArcadeBanner(child: Text('Pick two cards that add to 13 (K alone) · $_cleared/$goal')),
          const Text('A = 1 · J = 11 · Q = 12 · K = 13', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 12)),
          Expanded(
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(12),
                child: Wrap(
                  alignment: WrapAlignment.center,
                  spacing: 10,
                  runSpacing: 10,
                  children: [
                    for (var i = 0; i < _cards.length; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 150),
                          transform: Matrix4.translationValues(0, _sel == i ? -8 : 0, 0),
                          width: 70,
                          height: 98,
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(10),
                            border: Border.all(color: _sel == i ? const Color(0xFFFACC15) : Colors.black12, width: _sel == i ? 4 : 1),
                            boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 6, offset: Offset(0, 3))],
                          ),
                          alignment: Alignment.center,
                          child: Text(
                            '${_rank(_cards[i].$1)}\n${suits[_cards[i].$2]}',
                            textAlign: TextAlign.center,
                            style: TextStyle(fontSize: 24, height: 1.1, fontWeight: FontWeight.w900, color: _cards[i].$2 == 1 || _cards[i].$2 == 2 ? const Color(0xFFDC2626) : Colors.black),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// 60 ── Find It ──────────────────────────────────────────────────────────────
class FindItGame extends StatefulWidget {
  const FindItGame({super.key, required this.args});
  final NgmyArcadeArgs args;
  @override
  State<FindItGame> createState() => _FindItState();
}

class _FindItState extends State<FindItGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => 15;
  static const pool = [
    '🍎', '🍌', '🍇', '🍓', '🥕', '🌽', '🍄', '🌵', '🌲', '🌻', '🐶', '🐱', '🐭', '🐰', '🦊', '🐻', '🐼', '🐸', '🐵', '🐔',
    '🐧', '🦉', '🐢', '🐍', '🐙', '🦀', '🐳', '🦋', '🐞', '⚽', '🏀', '🎸', '🎺', '🎲', '🧩', '🎁', '🎈', '🔑', '🔔', '💡',
    '📷', '⏰', '✂️', '📌', '🧲', '🪁', '🚗', '🚲', '🚀', '⛵', '🏠', '⭐', '🌙', '☂️', '👑', '👓', '🧢', '👟', '🧦', '🍩',
  ];
  static const cols = 7, rows = 8;
  late List<String> _scene;
  late List<Offset> _jitter;
  late List<String> _want;
  final _found = <String>{};
  int? _wrong;

  void _newScene() {
    final p = List.of(pool)..shuffle(args.rng);
    _scene = p.take(cols * rows).toList();
    _jitter = List.generate(_scene.length, (_) => Offset(args.rng.nextDouble() * 0.4 - 0.2, args.rng.nextDouble() * 0.4 - 0.2));
    _want = (List.of(_scene)..shuffle(args.rng)).take(6).toList();
    _found.clear();
  }

  @override
  void initState() {
    super.initState();
    startScore();
    hearts = 2;
    _newScene();
  }

  void _tap(int i) {
    if (ended) return;
    final e = _scene[i];
    if (_want.contains(e) && !_found.contains(e)) {
      setState(() => _found.add(e));
      if (addPoint()) return;
      if (_found.length == _want.length) setState(_newScene);
    } else if (!_found.contains(e)) {
      setState(() => _wrong = i);
      loseHeart('Tapped the wrong thing');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFFFFEDD5), Color(0xFFFED7AA)]),
        Column(children: [
          arcadeTopBar('Find these · $score/$goal', hearts: hearts),
          Wrap(spacing: 8, children: [
            for (final e in _want)
              Container(
                padding: const EdgeInsets.all(6),
                decoration: BoxDecoration(color: _found.contains(e) ? const Color(0xFF16A34A) : Colors.white, borderRadius: BorderRadius.circular(12), border: Border.all(color: const Color(0xFFEA580C), width: 2)),
                child: Text(e, style: const TextStyle(fontSize: 26)),
              ),
          ]),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final cw = c.maxWidth / cols, ch = c.maxHeight / rows;
              final s = math.min(cw, ch) * 0.6;
              return Stack(children: [
                for (var i = 0; i < _scene.length; i++)
                  Positioned(
                    left: (i % cols + 0.5 + _jitter[i].dx) * cw - s / 2,
                    top: (i ~/ cols + 0.5 + _jitter[i].dy) * ch - s / 2,
                    child: GestureDetector(
                      onTap: () => _tap(i),
                      child: AnimatedOpacity(
                        duration: const Duration(milliseconds: 250),
                        opacity: _found.contains(_scene[i]) ? 0.2 : 1,
                        child: Container(
                          decoration: _wrong == i ? BoxDecoration(shape: BoxShape.circle, color: Colors.red.withValues(alpha: 0.3)) : null,
                          child: Transform.rotate(angle: _jitter[i].dx * 2, child: emojiText(_scene[i], s)),
                        ),
                      ),
                    ),
                  ),
              ]);
            }),
          ),
        ]),
      ]);
}
