import 'dart:collection';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 11–20: logic puzzles (always solvable — generated from a solution).
const kVaultLogicGames = <VaultLvDef>[
  VaultLvDef(id: 'v_nonogram', title: 'Pixel Picross', tagline: 'Fill the grid so every row and column matches its numbers.', emoji: '🟩', icon: Icons.grid_on_rounded, colors: [Color(0xFF22C55E), Color(0xFF14532D)], tag: 'PUZZLE', build: _nono),
  VaultLvDef(id: 'v_unblock', title: 'Unblock Car', tagline: 'Slide the traffic to get the red car out.', emoji: '🚙', icon: Icons.directions_car_rounded, colors: [Color(0xFFF43F5E), Color(0xFF3F3F46)], tag: 'PUZZLE', build: _unblock),
  VaultLvDef(id: 'v_box_pusher', title: 'Warehouse Boxes', tagline: 'Push every box onto a target spot.', emoji: '📦', icon: Icons.inventory_2_rounded, colors: [Color(0xFFD97706), Color(0xFF292524)], tag: 'PUZZLE', build: _boxes),
  VaultLvDef(id: 'v_laser_mirror', title: 'Laser Mirrors', tagline: 'Turn the mirrors to guide the laser to the target.', emoji: '🔦', icon: Icons.flare_rounded, colors: [Color(0xFFF43F5E), Color(0xFF111827)], tag: 'PUZZLE', build: _laser),
  VaultLvDef(id: 'v_queens', title: 'Royal Queens', tagline: 'Place queens so none can attack another.', emoji: '👑', icon: Icons.workspace_premium_rounded, colors: [Color(0xFFFACC15), Color(0xFF422006)], tag: 'PUZZLE', build: _queens),
  VaultLvDef(id: 'v_pyramid', title: 'Number Pyramid', tagline: 'Each block is the sum of the two below it.', emoji: '🔺', icon: Icons.change_history_rounded, colors: [Color(0xFFFB923C), Color(0xFF7C2D12)], tag: 'PUZZLE', build: _pyramid),
  VaultLvDef(id: 'v_sum_grid', title: 'Sum Grid', tagline: 'Fill digits so every row and column adds up.', emoji: '➕', icon: Icons.calculate_rounded, colors: [Color(0xFF38BDF8), Color(0xFF0C4A6E)], tag: 'PUZZLE', build: _sumGrid),
  VaultLvDef(id: 'v_water_jugs', title: 'Water Jugs', tagline: 'Fill, pour and empty to measure exactly.', emoji: '🫗', icon: Icons.water_drop_rounded, colors: [Color(0xFF06B6D4), Color(0xFF164E63)], tag: 'PUZZLE', build: _jugs),
  VaultLvDef(id: 'v_balance', title: 'Balance Scale', tagline: 'Pick weights that balance the scale exactly.', emoji: '⚖️', icon: Icons.balance_rounded, colors: [Color(0xFFA3E635), Color(0xFF365314)], tag: 'PUZZLE', build: _balance, seconds: _balanceSecs),
  VaultLvDef(id: 'v_binary', title: 'Binary Lights', tagline: 'Switch bits on to make the number.', emoji: '💡', icon: Icons.lightbulb_rounded, colors: [Color(0xFF60A5FA), Color(0xFF1E3A8A)], tag: 'PUZZLE', build: _binary, seconds: _binarySecs),
];

Widget _nono(NgmyArcadeArgs a, int l) => NonogramGame(args: a, level: l);
Widget _unblock(NgmyArcadeArgs a, int l) => UnblockGame(args: a, level: l);
Widget _boxes(NgmyArcadeArgs a, int l) => BoxPusherGame(args: a, level: l);
Widget _laser(NgmyArcadeArgs a, int l) => LaserMirrorGame(args: a, level: l);
Widget _queens(NgmyArcadeArgs a, int l) => QueensGame(args: a, level: l);
Widget _pyramid(NgmyArcadeArgs a, int l) => PyramidGame(args: a, level: l);
Widget _sumGrid(NgmyArcadeArgs a, int l) => SumGridGame(args: a, level: l);
Widget _jugs(NgmyArcadeArgs a, int l) => WaterJugsGame(args: a, level: l);
Widget _balance(NgmyArcadeArgs a, int l) => BalanceScaleGame(args: a, level: l);
Widget _binary(NgmyArcadeArgs a, int l) => BinaryLightsGame(args: a, level: l);

int _balanceSecs(int l) => lvI(l, 1, 4) * lvI(l, 45, 30) + 10;
int _binarySecs(int l) => lvI(l, 3, 8) * lvI(l, 18, 9) + 8;

/// Digit keypad.
Widget _keypad(void Function(int d) onDigit, VoidCallback onDel, {int from = 0}) => Wrap(
      alignment: WrapAlignment.center,
      spacing: 6,
      runSpacing: 6,
      children: [
        for (var d = from; d <= 9; d++)
          GestureDetector(
            onTap: () => onDigit(d),
            child: Container(
              width: 44,
              height: 44,
              alignment: Alignment.center,
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12), border: Border.all(color: Colors.white24)),
              child: Text('$d', style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900)),
            ),
          ),
        GestureDetector(
          onTap: onDel,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(12)),
            child: const Icon(Icons.backspace_rounded, color: Colors.white70, size: 18),
          ),
        ),
      ],
    );

// ── 11 Pixel Picross (nonogram) ────────────────────────────────────────────
class NonogramGame extends StatefulWidget {
  const NonogramGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<NonogramGame> createState() => _NonogramState();
}

class _NonogramState extends State<NonogramGame> {
  late final int _n;
  late final List<List<int>> _rowClues, _colClues;
  late final List<int> _cells; // 0 empty, 1 filled, 2 crossed
  bool _cross = false;
  bool _over = false;

  static List<int> _runs(Iterable<bool> line) {
    final out = <int>[];
    var run = 0;
    for (final b in line) {
      if (b) {
        run++;
      } else if (run > 0) {
        out.add(run);
        run = 0;
      }
    }
    if (run > 0) out.add(run);
    return out;
  }

  @override
  void initState() {
    super.initState();
    final l = widget.level;
    _n = l <= 8 ? 5 : (l <= 16 ? 6 : (l <= 22 ? 7 : (l <= 27 ? 8 : 9)));
    final r = widget.args.rng;
    final img = List.generate(_n * _n, (_) => r.nextDouble() < lvD(l, 0.62, 0.52));
    _rowClues = [for (var y = 0; y < _n; y++) _runs([for (var x = 0; x < _n; x++) img[y * _n + x]])];
    _colClues = [for (var x = 0; x < _n; x++) _runs([for (var y = 0; y < _n; y++) img[y * _n + x]])];
    _cells = List.filled(_n * _n, 0);
    widget.args.onProgress(0, _n * 2);
  }

  bool _rowOk(int y) => _listEq(_runs([for (var x = 0; x < _n; x++) _cells[y * _n + x] == 1]), _rowClues[y]);
  bool _colOk(int x) => _listEq(_runs([for (var y = 0; y < _n; y++) _cells[y * _n + x] == 1]), _colClues[x]);
  static bool _listEq(List<int> a, List<int> b) => a.length == b.length && [for (var i = 0; i < a.length; i++) a[i] == b[i]].every((e) => e);

  void _tap(int i) {
    if (_over) return;
    setState(() {
      if (_cross) {
        _cells[i] = _cells[i] == 2 ? 0 : 2;
      } else {
        _cells[i] = _cells[i] == 1 ? 0 : 1;
      }
    });
    HapticFeedback.selectionClick();
    final ok = [for (var k = 0; k < _n; k++) if (_rowOk(k)) 1].length + [for (var k = 0; k < _n; k++) if (_colOk(k)) 1].length;
    widget.args.onProgress(ok, _n * 2);
    if (ok == _n * 2) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF14532D), Color(0xFF052E16)]),
        Column(children: [
          const ArcadeBanner(child: Text('Numbers = runs of filled squares in order')),
          Expanded(
            child: LayoutBuilder(builder: (context, c) {
              final clueW = 16.0 * (_n ~/ 2 + 1) + 6;
              final cs = math.min((c.maxWidth - clueW - 16) / _n, (c.maxHeight - clueW - 16) / _n);
              return Center(
                child: SizedBox(
                  width: clueW + cs * _n,
                  height: clueW + cs * _n,
                  child: Stack(children: [
                    for (var x = 0; x < _n; x++)
                      Positioned(
                        left: clueW + x * cs,
                        top: 0,
                        width: cs,
                        height: clueW,
                        child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                          for (final v in (_colClues[x].isEmpty ? [0] : _colClues[x]))
                            Text('$v', style: TextStyle(color: _colOk(x) ? const Color(0xFF4ADE80) : Colors.white, fontSize: 11, fontWeight: FontWeight.w800, height: 1.15)),
                        ]),
                      ),
                    for (var y = 0; y < _n; y++)
                      Positioned(
                        left: 0,
                        top: clueW + y * cs,
                        width: clueW - 4,
                        height: cs,
                        child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                          Text((_rowClues[y].isEmpty ? [0] : _rowClues[y]).join(' '),
                              style: TextStyle(color: _rowOk(y) ? const Color(0xFF4ADE80) : Colors.white, fontSize: 11, fontWeight: FontWeight.w800)),
                        ]),
                      ),
                    for (var i = 0; i < _n * _n; i++)
                      Positioned(
                        left: clueW + (i % _n) * cs,
                        top: clueW + (i ~/ _n) * cs,
                        width: cs,
                        height: cs,
                        child: GestureDetector(
                          onTap: () => _tap(i),
                          child: Container(
                            margin: const EdgeInsets.all(1),
                            decoration: BoxDecoration(
                              color: _cells[i] == 1 ? const Color(0xFF22C55E) : Colors.white.withValues(alpha: 0.08),
                              borderRadius: BorderRadius.circular(3),
                            ),
                            alignment: Alignment.center,
                            child: _cells[i] == 2 ? const Icon(Icons.close_rounded, color: Colors.white38, size: 14) : null,
                          ),
                        ),
                      ),
                  ]),
                ),
              );
            }),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 12),
            child: SegmentedButton<bool>(
              segments: const [
                ButtonSegment(value: false, label: Text('Fill'), icon: Icon(Icons.square_rounded)),
                ButtonSegment(value: true, label: Text('Mark ✕'), icon: Icon(Icons.close_rounded)),
              ],
              selected: {_cross},
              onSelectionChanged: (s) => setState(() => _cross = s.first),
              style: ButtonStyle(foregroundColor: WidgetStateProperty.all(Colors.white)),
            ),
          ),
        ]),
      ]);
}

// ── 12 Unblock Car (rush hour) ─────────────────────────────────────────────
class _Veh {
  _Veh(this.r, this.c, this.len, this.horiz, this.color);
  int r, c;
  final int len;
  final bool horiz;
  final Color color;
  Iterable<int> cells() sync* {
    for (var k = 0; k < len; k++) {
      yield horiz ? r * 6 + c + k : (r + k) * 6 + c;
    }
  }
}

class UnblockGame extends StatefulWidget {
  const UnblockGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<UnblockGame> createState() => _UnblockState();
}

class _UnblockState extends State<UnblockGame> {
  late List<_Veh> _vs;
  int _moves = 0;
  bool _over = false;
  double _drag = 0;
  int _min = 0;

  static const _palette = [Color(0xFF3B82F6), Color(0xFF22C55E), Color(0xFFFACC15), Color(0xFFA855F7), Color(0xFF14B8A6), Color(0xFFF97316), Color(0xFF64748B), Color(0xFFEC4899), Color(0xFF84CC16), Color(0xFF0EA5E9), Color(0xFFD946EF)];

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    final want = lvI(widget.level, 2, 12);
    List<_Veh>? best;
    var bestMin = -1;
    for (var attempt = 0; attempt < 30; attempt++) {
      final vs = <_Veh>[_Veh(2, r.nextInt(2), 2, true, const Color(0xFFEF4444))];
      final occ = <int>{...vs.first.cells()};
      final count = lvI(widget.level, 4, 11);
      var guard = 0;
      while (vs.length < count + 1 && guard++ < 200) {
        final len = r.nextDouble() < 0.3 ? 3 : 2;
        final horiz = r.nextBool();
        final row = r.nextInt(horiz ? 6 : 7 - len), col = r.nextInt(horiz ? 7 - len : 6);
        if (horiz && row == 2) continue; // keep the exit row free of other sideways cars
        final v = _Veh(row, col, len, horiz, _palette[vs.length % _palette.length]);
        final cells = v.cells().toSet();
        if (cells.any(occ.contains)) continue;
        occ.addAll(cells);
        vs.add(v);
      }
      final m = _solve(vs);
      if (m > bestMin) {
        bestMin = m;
        best = vs;
      }
      if (m >= want) break;
    }
    _vs = best!;
    _min = bestMin;
    widget.args.onProgress(0, 4);
  }

  /// Fewest single-step slides to free the red car (-1 = impossible).
  static int _solve(List<_Veh> vs) {
    String key(List<int> pos) => pos.join(',');
    final start = [for (final v in vs) v.horiz ? v.c : v.r];
    final seen = <String>{key(start)};
    final q = Queue<(List<int>, int)>()..add((start, 0));
    while (q.isNotEmpty && seen.length < 6000) {
      final (pos, d) = q.removeFirst();
      if (pos[0] >= 4) return d;
      final occ = List.filled(36, -1);
      for (var i = 0; i < vs.length; i++) {
        for (var k = 0; k < vs[i].len; k++) {
          final cell = vs[i].horiz ? vs[i].r * 6 + pos[i] + k : (pos[i] + k) * 6 + vs[i].c;
          occ[cell] = i;
        }
      }
      for (var i = 0; i < vs.length; i++) {
        for (final step in const [-1, 1]) {
          final np = pos[i] + step;
          if (np < 0 || np + vs[i].len > 6) continue;
          final newCell = vs[i].horiz ? vs[i].r * 6 + (step > 0 ? np + vs[i].len - 1 : np) : (step > 0 ? np + vs[i].len - 1 : np) * 6 + vs[i].c;
          if (occ[newCell] != -1) continue;
          final next = [...pos]..[i] = np;
          if (seen.add(key(next))) q.add((next, d + 1));
        }
      }
    }
    return -1;
  }

  bool _free(int cell, _Veh self) => !_vs.any((v) => v != self && v.cells().contains(cell));

  void _step(_Veh v, int dir) {
    if (_over) return;
    final lead = v.horiz ? (dir > 0 ? v.r * 6 + v.c + v.len : v.r * 6 + v.c - 1) : (dir > 0 ? (v.r + v.len) * 6 + v.c : (v.r - 1) * 6 + v.c);
    final inside = v.horiz ? (dir > 0 ? v.c + v.len < 6 : v.c > 0) : (dir > 0 ? v.r + v.len < 6 : v.r > 0);
    if (!inside || !_free(lead, v)) return;
    setState(() {
      if (v.horiz) {
        v.c += dir;
      } else {
        v.r += dir;
      }
      _moves++;
    });
    HapticFeedback.selectionClick();
    final red = _vs.first;
    widget.args.onProgress(red.c.clamp(0, 4), 4);
    if (red.c >= 4) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF3F3F46), Color(0xFF18181B)]),
        Column(children: [
          ArcadeBanner(child: Text('Drag cars to free the red one · moves $_moves${_min > 0 ? ' (best $_min)' : ''}')),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Padding(
                  padding: const EdgeInsets.all(16),
                  child: LayoutBuilder(builder: (context, c) {
                    final cs = c.maxWidth / 6;
                    return Stack(clipBehavior: Clip.none, children: [
                      Container(decoration: BoxDecoration(color: const Color(0xFF52525B), borderRadius: BorderRadius.circular(10))),
                      Positioned(left: c.maxWidth - 2, top: cs * 2, width: 10, height: cs, child: Container(color: const Color(0xFF4ADE80))),
                      for (final v in _vs)
                        Positioned(
                          left: v.c * cs,
                          top: v.r * cs,
                          width: v.horiz ? cs * v.len : cs,
                          height: v.horiz ? cs : cs * v.len,
                          child: GestureDetector(
                            onPanStart: (_) => _drag = 0,
                            onPanUpdate: (d) {
                              _drag += v.horiz ? d.delta.dx : d.delta.dy;
                              while (_drag > cs * 0.6) {
                                _drag -= cs;
                                _step(v, 1);
                              }
                              while (_drag < -cs * 0.6) {
                                _drag += cs;
                                _step(v, -1);
                              }
                            },
                            child: Container(
                              margin: const EdgeInsets.all(3),
                              decoration: BoxDecoration(
                                gradient: LinearGradient(colors: [v.color, Color.lerp(v.color, Colors.black, 0.3)!]),
                                borderRadius: BorderRadius.circular(10),
                                boxShadow: const [BoxShadow(color: Colors.black45, blurRadius: 4, offset: Offset(0, 2))],
                              ),
                              alignment: Alignment.center,
                              child: v == _vs.first ? const Text('🚗', style: TextStyle(fontSize: 24)) : null,
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

// ── 13 Warehouse Boxes (sokoban, generated by pulling boxes off the goals) ─
class BoxPusherGame extends StatefulWidget {
  const BoxPusherGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BoxPusherGame> createState() => _BoxPusherState();
}

class _BoxPusherState extends State<BoxPusherGame> {
  late final int _w, _h;
  late final Set<int> _walls, _goals;
  late Set<int> _boxes;
  late int _me;
  final _history = <(int, Set<int>)>[];
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _w = lvI(widget.level, 6, 9);
    _h = lvI(widget.level, 6, 9);
    final nBoxes = lvI(widget.level, 1, 4);
    for (var attempt = 0; attempt < 40; attempt++) {
      final walls = <int>{};
      for (var y = 0; y < _h; y++) {
        for (var x = 0; x < _w; x++) {
          if (x == 0 || y == 0 || x == _w - 1 || y == _h - 1 || r.nextDouble() < lvD(widget.level, 0.06, 0.16)) walls.add(y * _w + x);
        }
      }
      final free = [for (var i = 0; i < _w * _h; i++) if (!walls.contains(i)) i]..shuffle(r);
      if (free.length < nBoxes + 4) continue;
      final goals = free.take(nBoxes).toSet();
      var boxes = {...goals};
      var me = free[nBoxes];
      // Pull boxes away from their goals with random moves (always solvable backwards).
      final dirs = [-1, 1, -_w, _w];
      for (var s = 0; s < lvI(widget.level, 30, 160); s++) {
        final d = dirs[r.nextInt(4)];
        final to = me + d;
        if (walls.contains(to) || boxes.contains(to)) continue;
        final behind = me - d;
        if (boxes.contains(behind) && r.nextDouble() < 0.7) {
          boxes = {...boxes}
            ..remove(behind)
            ..add(me);
        }
        me = to;
      }
      if (boxes.difference(goals).isEmpty) continue;
      _walls = walls;
      _goals = goals;
      _boxes = boxes;
      _me = me;
      widget.args.onProgress(_onGoal, _goals.length);
      return;
    }
    // Fallback: one box one step from its goal.
    _walls = {for (var y = 0; y < _h; y++) for (var x = 0; x < _w; x++) if (x == 0 || y == 0 || x == _w - 1 || y == _h - 1) y * _w + x};
    _goals = {2 * _w + 4};
    _boxes = {2 * _w + 3};
    _me = 2 * _w + 2;
    widget.args.onProgress(0, 1);
  }

  int get _onGoal => _boxes.intersection(_goals).length;

  void _move(int d) {
    if (_over) return;
    final to = _me + d;
    if (_walls.contains(to)) return;
    if (_boxes.contains(to)) {
      final beyond = to + d;
      if (_walls.contains(beyond) || _boxes.contains(beyond)) return;
      _history.add((_me, {..._boxes}));
      setState(() {
        _boxes = {..._boxes}
          ..remove(to)
          ..add(beyond);
        _me = to;
      });
    } else {
      _history.add((_me, {..._boxes}));
      setState(() => _me = to);
    }
    HapticFeedback.selectionClick();
    widget.args.onProgress(_onGoal, _goals.length);
    if (_onGoal == _goals.length) {
      _over = true;
      widget.args.onComplete();
    }
  }

  void _undo() {
    if (_history.isEmpty || _over) return;
    final (me, boxes) = _history.removeLast();
    setState(() {
      _me = me;
      _boxes = boxes;
    });
    widget.args.onProgress(_onGoal, _goals.length);
  }

  Widget _btn(IconData i, VoidCallback f) => IconButton.filled(
        onPressed: f,
        icon: Icon(i),
        style: IconButton.styleFrom(backgroundColor: Colors.white.withValues(alpha: 0.14), foregroundColor: Colors.white, minimumSize: const Size(54, 54)),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF292524), Color(0xFF0C0A09)]),
        Column(children: [
          ArcadeBanner(child: Text('Push boxes onto the ✕ spots · $_onGoal/${_goals.length}')),
          Expanded(
            child: GestureDetector(
              onHorizontalDragEnd: (d) => _move((d.primaryVelocity ?? 0) > 0 ? 1 : -1),
              onVerticalDragEnd: (d) => _move((d.primaryVelocity ?? 0) > 0 ? _w : -_w),
              child: Center(
                child: AspectRatio(
                  aspectRatio: _w / _h,
                  child: Padding(
                    padding: const EdgeInsets.all(10),
                    child: GridView.count(
                      crossAxisCount: _w,
                      physics: const NeverScrollableScrollPhysics(),
                      children: [
                        for (var i = 0; i < _w * _h; i++)
                          Container(
                            margin: const EdgeInsets.all(0.6),
                            decoration: BoxDecoration(
                              color: _walls.contains(i) ? const Color(0xFF57534E) : const Color(0xFF1C1917),
                              borderRadius: BorderRadius.circular(3),
                            ),
                            alignment: Alignment.center,
                            child: FittedBox(
                              child: Text(
                                _me == i
                                    ? '🧑‍🔧'
                                    : _boxes.contains(i)
                                        ? (_goals.contains(i) ? '✅' : '📦')
                                        : (_goals.contains(i) ? '✖️' : ''),
                                style: const TextStyle(fontSize: 26),
                              ),
                            ),
                          ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Column(children: [
              _btn(Icons.keyboard_arrow_up_rounded, () => _move(-_w)),
              Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                _btn(Icons.keyboard_arrow_left_rounded, () => _move(-1)),
                const SizedBox(width: 8),
                _btn(Icons.undo_rounded, _undo),
                const SizedBox(width: 8),
                _btn(Icons.keyboard_arrow_right_rounded, () => _move(1)),
              ]),
              _btn(Icons.keyboard_arrow_down_rounded, () => _move(_w)),
            ]),
          ),
        ]),
      ]);
}

// ── 14 Laser Mirrors ───────────────────────────────────────────────────────
class LaserMirrorGame extends StatefulWidget {
  const LaserMirrorGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<LaserMirrorGame> createState() => _LaserMirrorState();
}

class _LaserMirrorState extends State<LaserMirrorGame> {
  late final int _n, _startRow;
  final _mirrors = <int, bool>{}; // cell → true = '/', false = '\'
  final _answer = <int, bool>{};
  late int _target;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _n = lvI(widget.level, 5, 8);
    final turns = lvI(widget.level, 2, 8);
    for (var attempt = 0; attempt < 200; attempt++) {
      _answer.clear();
      final startRow = r.nextInt(_n);
      var x = 0, y = startRow, dx = 1, dy = 0;
      final visited = <int>{y * _n + x};
      var made = 0;
      var steps = 0;
      while (steps++ < _n * _n) {
        if (made < turns && x > 0 && r.nextDouble() < 0.45) {
          // Turn here with a mirror.
          final (ndx, ndy) = dx != 0 ? (0, r.nextBool() ? 1 : -1) : (r.nextBool() ? 1 : -1, 0);
          final nx = x + ndx, ny = y + ndy;
          if (nx >= 0 && ny >= 0 && nx < _n && ny < _n && !visited.contains(ny * _n + nx)) {
            // '/' maps (dx,dy) → (-dy,-dx); '\' maps → (dy,dx).
            _answer[y * _n + x] = (-dy == ndx && -dx == ndy);
            dx = ndx;
            dy = ndy;
            made++;
          }
        }
        final nx = x + dx, ny = y + dy;
        if (nx < 0 || ny < 0 || nx >= _n || ny >= _n || visited.contains(ny * _n + nx)) break;
        x = nx;
        y = ny;
        visited.add(y * _n + x);
      }
      if (made < math.min(turns, 2) || _answer.containsKey(y * _n + x)) continue;
      _startRow = startRow;
      _target = y * _n + x;
      _mirrors.addAll(_answer);
      for (var d = 0; d < lvI(widget.level, 0, 6); d++) {
        final c = r.nextInt(_n * _n);
        if (!visited.contains(c) && !_mirrors.containsKey(c)) _mirrors[c] = r.nextBool();
      }
      for (final k in _mirrors.keys.toList()) {
        _mirrors[k] = r.nextBool();
      }
      if (_trace().$2) _mirrors[_answer.keys.first] = !_answer.values.first;
      widget.args.onProgress(_correct, _answer.length);
      return;
    }
    _startRow = 0;
    _target = _n - 1;
    widget.args.onProgress(0, 1);
  }

  int get _correct => _answer.entries.where((e) => _mirrors[e.key] == e.value).length;

  /// Beam cells and whether it reaches the target.
  (List<int>, bool) _trace() {
    final cells = <int>[];
    var x = 0, y = _startRow, dx = 1, dy = 0;
    for (var k = 0; k < _n * _n * 2; k++) {
      if (x < 0 || y < 0 || x >= _n || y >= _n) break;
      final c = y * _n + x;
      cells.add(c);
      if (c == _target) return (cells, true);
      final m = _mirrors[c];
      if (m != null) {
        final (a, b) = m ? (-dy, -dx) : (dy, dx);
        dx = a;
        dy = b;
      }
      x += dx;
      y += dy;
    }
    return (cells, false);
  }

  void _tap(int c) {
    if (_over || !_mirrors.containsKey(c)) return;
    setState(() => _mirrors[c] = !_mirrors[c]!);
    HapticFeedback.selectionClick();
    widget.args.onProgress(_correct, math.max(1, _answer.length));
    if (_trace().$2) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) {
    final (beam, hit) = _trace();
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF111827), Color(0xFF030712)]),
      Column(children: [
        const ArcadeBanner(child: Text('Tap mirrors to turn them — hit the 🎯')),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(14),
                child: LayoutBuilder(builder: (context, c) {
                  final cs = c.maxWidth / _n;
                  return Stack(children: [
                    CustomPaint(size: Size(c.maxWidth, c.maxWidth), painter: _BeamPainter(_n, beam, _startRow, hit)),
                    for (var i = 0; i < _n * _n; i++)
                      Positioned(
                        left: (i % _n) * cs,
                        top: (i ~/ _n) * cs,
                        width: cs,
                        height: cs,
                        child: GestureDetector(
                          onTap: () => _tap(i),
                          child: Container(
                            decoration: BoxDecoration(border: Border.all(color: Colors.white10)),
                            alignment: Alignment.center,
                            child: i == _target
                                ? Text('🎯', style: TextStyle(fontSize: cs * 0.55))
                                : _mirrors.containsKey(i)
                                    ? Transform.rotate(
                                        angle: _mirrors[i]! ? -math.pi / 4 : math.pi / 4,
                                        child: Container(width: cs * 0.8, height: 6, decoration: BoxDecoration(color: const Color(0xFFE0F2FE), borderRadius: BorderRadius.circular(3), boxShadow: const [BoxShadow(color: Color(0xFF38BDF8), blurRadius: 6)])),
                                      )
                                    : null,
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
}

class _BeamPainter extends CustomPainter {
  _BeamPainter(this.n, this.cells, this.startRow, this.hit);
  final int n, startRow;
  final List<int> cells;
  final bool hit;
  @override
  void paint(Canvas canvas, Size s) {
    final cs = s.width / n;
    Offset ctr(int c) => Offset((c % n + 0.5) * cs, (c ~/ n + 0.5) * cs);
    final path = Path()..moveTo(-cs * 0.3, (startRow + 0.5) * cs);
    for (final c in cells) {
      path.lineTo(ctr(c).dx, ctr(c).dy);
    }
    final color = hit ? const Color(0xFF4ADE80) : const Color(0xFFF43F5E);
    canvas.drawPath(path, Paint()
      ..color = color.withValues(alpha: 0.35)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
    canvas.drawPath(path, Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3);
    canvas.drawCircle(Offset(-cs * 0.1, (startRow + 0.5) * cs), 8, Paint()..color = const Color(0xFFF43F5E));
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ── 15 Royal Queens ────────────────────────────────────────────────────────
class QueensGame extends StatefulWidget {
  const QueensGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<QueensGame> createState() => _QueensState();
}

class _QueensState extends State<QueensGame> {
  late final int _n;
  final _q = <int>{};
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final l = widget.level;
    _n = l <= 2 ? 4 : (l <= 5 ? 5 : (l <= 9 ? 6 : (l <= 14 ? 7 : (l <= 22 ? 8 : 9))));
    widget.args.onProgress(0, _n);
  }

  bool _attacks(int a, int b) {
    final ar = a ~/ _n, ac = a % _n, br = b ~/ _n, bc = b % _n;
    return ar == br || ac == bc || (ar - br).abs() == (ac - bc).abs();
  }

  bool _bad(int i) => _q.any((o) => o != i && _attacks(o, i));

  void _tap(int i) {
    if (_over) return;
    setState(() => _q.contains(i) ? _q.remove(i) : _q.add(i));
    HapticFeedback.selectionClick();
    final good = _q.where((x) => !_bad(x)).length;
    widget.args.onProgress(good, _n);
    if (_q.length == _n && good == _n) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF422006), Color(0xFF1C1917)]),
        Column(children: [
          ArcadeBanner(child: Text('Place $_n queens · no two in a row, column or diagonal')),
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
                      for (var i = 0; i < _n * _n; i++)
                        GestureDetector(
                          onTap: () => _tap(i),
                          child: Container(
                            color: _q.contains(i) && _bad(i)
                                ? const Color(0xFFDC2626)
                                : ((i ~/ _n + i % _n).isEven ? const Color(0xFFFDE68A) : const Color(0xFFA16207)),
                            alignment: Alignment.center,
                            child: _q.contains(i) ? const FittedBox(child: Padding(padding: EdgeInsets.all(4), child: Text('👑', style: TextStyle(fontSize: 30)))) : null,
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

// ── 16 Number Pyramid ──────────────────────────────────────────────────────
class PyramidGame extends StatefulWidget {
  const PyramidGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<PyramidGame> createState() => _PyramidState();
}

class _PyramidState extends State<PyramidGame> {
  late final int _rows;
  late final List<List<int>> _sol; // row 0 = top
  late final Set<(int, int)> _hidden;
  final _entry = <(int, int), String>{};
  (int, int)? _sel;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _rows = lvI(widget.level, 3, 6);
    final bottom = List.generate(_rows, (_) => 1 + r.nextInt(lvI(widget.level, 6, 15)));
    final rows = <List<int>>[bottom];
    while (rows.first.length > 1) {
      final below = rows.first;
      rows.insert(0, [for (var i = 0; i < below.length - 1; i++) below[i] + below[i + 1]]);
    }
    _sol = rows;
    final all = [for (var y = 0; y < _rows; y++) for (var x = 0; x <= y; x++) (y, x)]..shuffle(r);
    // Start hiding many, then reveal until the puzzle can be worked out.
    final hidden = all.take((all.length * lvD(widget.level, 0.45, 0.75)).round()).toSet();
    while (!_solvable(hidden)) {
      hidden.remove(hidden.first);
    }
    _hidden = hidden;
    widget.args.onProgress(0, _hidden.length);
  }

  bool _solvable(Set<(int, int)> hidden) {
    final known = <(int, int)>{for (var y = 0; y < _rows; y++) for (var x = 0; x <= y; x++) if (!hidden.contains((y, x))) (y, x)};
    var changed = true;
    while (changed) {
      changed = false;
      for (var y = 0; y < _rows - 1; y++) {
        for (var x = 0; x <= y; x++) {
          final top = (y, x), a = (y + 1, x), b = (y + 1, x + 1);
          final k = [known.contains(top), known.contains(a), known.contains(b)];
          if (k.where((e) => e).length == 2) {
            known.addAll([top, a, b]);
            changed = true;
          }
        }
      }
    }
    return known.length == _rows * (_rows + 1) ~/ 2;
  }

  int get _right => _hidden.where((c) => _entry[c] == '${_sol[c.$1][c.$2]}').length;

  void _digit(int d) {
    final s = _sel;
    if (s == null || _over) return;
    setState(() => _entry[s] = ((_entry[s] ?? '') + '$d').replaceFirst(RegExp(r'^0+(?=\d)'), ''));
    if ((_entry[s] ?? '').length > 4) _entry[s] = _entry[s]!.substring(0, 4);
    _check();
  }

  void _del() {
    final s = _sel;
    if (s == null || _over) return;
    final v = _entry[s] ?? '';
    setState(() => _entry[s] = v.isEmpty ? '' : v.substring(0, v.length - 1));
    _check();
  }

  void _check() {
    widget.args.onProgress(_right, _hidden.length);
    if (_right == _hidden.length) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF7C2D12), Color(0xFF1C1917)]),
        Column(children: [
          const ArcadeBanner(child: Text('Each block = the two blocks under it added')),
          Expanded(
            child: Center(
              child: LayoutBuilder(builder: (context, c) {
                final bw = math.min(64.0, (c.maxWidth - 24) / _rows);
                return Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                  for (var y = 0; y < _rows; y++)
                    Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      for (var x = 0; x <= y; x++)
                        GestureDetector(
                          onTap: _hidden.contains((y, x)) ? () => setState(() => _sel = (y, x)) : null,
                          child: Container(
                            width: bw - 4,
                            height: 40,
                            margin: const EdgeInsets.all(2),
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: !_hidden.contains((y, x))
                                  ? const Color(0xFFFB923C)
                                  : (_entry[(y, x)] == '${_sol[y][x]}' ? const Color(0xFF16A34A) : Colors.white.withValues(alpha: 0.1)),
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(color: _sel == (y, x) ? Colors.white : Colors.white24, width: _sel == (y, x) ? 3 : 1),
                            ),
                            child: FittedBox(
                              child: Padding(
                                padding: const EdgeInsets.all(3),
                                child: Text(_hidden.contains((y, x)) ? (_entry[(y, x)] ?? '') : '${_sol[y][x]}',
                                    style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                              ),
                            ),
                          ),
                        ),
                    ]),
                ]);
              }),
            ),
          ),
          Padding(padding: const EdgeInsets.fromLTRB(10, 0, 10, 12), child: _keypad(_digit, _del)),
        ]),
      ]);
}

// ── 17 Sum Grid ────────────────────────────────────────────────────────────
class SumGridGame extends StatefulWidget {
  const SumGridGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<SumGridGame> createState() => _SumGridState();
}

class _SumGridState extends State<SumGridGame> {
  late final int _n;
  late final List<int> _sol, _rowSum, _colSum;
  late final Set<int> _open;
  late final List<int> _val;
  int? _sel;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    _n = lvI(widget.level, 3, 5);
    _sol = List.generate(_n * _n, (_) => 1 + r.nextInt(9));
    _rowSum = [for (var y = 0; y < _n; y++) [for (var x = 0; x < _n; x++) _sol[y * _n + x]].reduce((a, b) => a + b)];
    _colSum = [for (var x = 0; x < _n; x++) [for (var y = 0; y < _n; y++) _sol[y * _n + x]].reduce((a, b) => a + b)];
    final cells = List.generate(_n * _n, (i) => i)..shuffle(r);
    _open = cells.take(math.max(2, (cells.length * lvD(widget.level, 0.3, 0.6)).round())).toSet();
    _val = [for (var i = 0; i < _n * _n; i++) _open.contains(i) ? 0 : _sol[i]];
    widget.args.onProgress(0, _n * 2);
  }

  int _rs(int y) => [for (var x = 0; x < _n; x++) _val[y * _n + x]].reduce((a, b) => a + b);
  int _cs(int x) => [for (var y = 0; y < _n; y++) _val[y * _n + x]].reduce((a, b) => a + b);
  bool get _full => _open.every((i) => _val[i] > 0);

  void _digit(int d) {
    final s = _sel;
    if (s == null || _over || d == 0) return;
    setState(() => _val[s] = d);
    HapticFeedback.selectionClick();
    final ok = [for (var k = 0; k < _n; k++) if (_rs(k) == _rowSum[k]) 1].length + [for (var k = 0; k < _n; k++) if (_cs(k) == _colSum[k]) 1].length;
    widget.args.onProgress(_full ? ok : math.min(ok, _n * 2 - 1), _n * 2);
    if (_full && ok == _n * 2) {
      _over = true;
      widget.args.onComplete();
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
        Column(children: [
          const ArcadeBanner(child: Text('Digits 1–9 · rows and columns must add up')),
          Expanded(
            child: Center(
              child: LayoutBuilder(builder: (context, c) {
                final cs = math.min(58.0, (c.maxWidth - 40) / (_n + 1));
                Widget sumBox(int target, int now) => Container(
                      width: cs,
                      height: cs,
                      alignment: Alignment.center,
                      child: Text('$target', style: TextStyle(color: now == target ? const Color(0xFF4ADE80) : const Color(0xFFFDE68A), fontWeight: FontWeight.w900, fontSize: 17)),
                    );
                return Column(mainAxisSize: MainAxisSize.min, children: [
                  for (var y = 0; y < _n; y++)
                    Row(mainAxisSize: MainAxisSize.min, children: [
                      for (var x = 0; x < _n; x++)
                        GestureDetector(
                          onTap: _open.contains(y * _n + x) ? () => setState(() => _sel = y * _n + x) : null,
                          child: Container(
                            width: cs - 4,
                            height: cs - 4,
                            margin: const EdgeInsets.all(2),
                            alignment: Alignment.center,
                            decoration: BoxDecoration(
                              color: _open.contains(y * _n + x) ? Colors.white.withValues(alpha: 0.12) : const Color(0xFF0369A1),
                              borderRadius: BorderRadius.circular(8),
                              border: Border.all(color: _sel == y * _n + x ? Colors.white : Colors.white24, width: _sel == y * _n + x ? 3 : 1),
                            ),
                            child: Text(_val[y * _n + x] == 0 ? '' : '${_val[y * _n + x]}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
                          ),
                        ),
                      sumBox(_rowSum[y], _rs(y)),
                    ]),
                  Row(mainAxisSize: MainAxisSize.min, children: [for (var x = 0; x < _n; x++) sumBox(_colSum[x], _cs(x)), SizedBox(width: cs)]),
                ]);
              }),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(10, 0, 10, 12),
            child: _keypad(_digit, () {
              if (_sel != null && !_over) setState(() => _val[_sel!] = 0);
            }, from: 1),
          ),
        ]),
      ]);
}

// ── 18 Water Jugs ──────────────────────────────────────────────────────────
class WaterJugsGame extends StatefulWidget {
  const WaterJugsGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<WaterJugsGame> createState() => _WaterJugsState();
}

class _WaterJugsState extends State<WaterJugsGame> {
  late List<int> _cap, _w;
  late int _target, _best, _limit;
  int _moves = 0;
  int? _sel;
  bool _over = false;

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    final jugs = widget.level >= 14 ? 3 : 2;
    final want = lvI(widget.level, 2, 9);
    for (var attempt = 0; attempt < 300; attempt++) {
      final cap = [for (var j = 0; j < jugs; j++) 2 + r.nextInt(lvI(widget.level, 7, 13))];
      if (cap.toSet().length < jugs) continue;
      final dist = _bfs(cap);
      final options = dist.entries.where((e) => e.value >= math.max(2, want - 2) && e.value <= want + 2 && !cap.contains(e.key) && e.key > 0).toList();
      if (options.isEmpty) continue;
      final pick = options[r.nextInt(options.length)];
      _cap = cap;
      _target = pick.key;
      _best = pick.value;
      _limit = _best + lvI(widget.level, 8, 2);
      _w = List.filled(jugs, 0);
      widget.args.onProgress(0, 1);
      return;
    }
    _cap = [3, 5];
    _target = 4;
    _best = 6;
    _limit = 14;
    _w = [0, 0];
    widget.args.onProgress(0, 1);
  }

  /// Fewest moves to have each amount in some jug.
  static Map<int, int> _bfs(List<int> cap) {
    final start = List.filled(cap.length, 0);
    final seen = <String, int>{start.join(','): 0};
    final q = Queue<List<int>>()..add(start);
    final best = <int, int>{};
    while (q.isNotEmpty) {
      final s = q.removeFirst();
      final d = seen[s.join(',')]!;
      for (final v in s) {
        best[v] = math.min(best[v] ?? 999, d);
      }
      final nexts = <List<int>>[];
      for (var i = 0; i < cap.length; i++) {
        nexts.add([...s]..[i] = cap[i]);
        nexts.add([...s]..[i] = 0);
        for (var j = 0; j < cap.length; j++) {
          if (i == j) continue;
          final amt = math.min(s[i], cap[j] - s[j]);
          nexts.add([...s]
            ..[i] = s[i] - amt
            ..[j] = s[j] + amt);
        }
      }
      for (final n in nexts) {
        final k = n.join(',');
        if (!seen.containsKey(k)) {
          seen[k] = d + 1;
          q.add(n);
        }
      }
    }
    return best;
  }

  void _act(void Function() f) {
    if (_over) return;
    setState(() {
      f();
      _moves++;
      _sel = null;
    });
    HapticFeedback.selectionClick();
    if (_w.contains(_target)) {
      _over = true;
      widget.args.onProgress(1, 1);
      widget.args.onComplete();
    } else if (_moves >= _limit) {
      _over = true;
      widget.args.onKnockout('Out of moves');
    }
  }

  void _tapJug(int i) {
    if (_over) return;
    if (_sel == null || _sel == i) {
      setState(() => _sel = _sel == i ? null : i);
      return;
    }
    final from = _sel!;
    _act(() {
      final amt = math.min(_w[from], _cap[i] - _w[i]);
      _w[from] -= amt;
      _w[i] += amt;
    });
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF164E63), Color(0xFF083344)]),
        Column(children: [
          ArcadeBanner(child: Text('Get exactly $_target L in a jug · moves ${_limit - _moves} left')),
          const Text('Tap a jug, then another to pour into it', style: TextStyle(color: Colors.white60, fontSize: 12)),
          Expanded(
            child: Row(mainAxisAlignment: MainAxisAlignment.spaceEvenly, crossAxisAlignment: CrossAxisAlignment.end, children: [
              for (var i = 0; i < _cap.length; i++)
                Column(mainAxisAlignment: MainAxisAlignment.end, children: [
                  Text('${_w[i]} / ${_cap[i]} L', style: TextStyle(color: _w[i] == _target ? const Color(0xFF4ADE80) : Colors.white, fontWeight: FontWeight.w900)),
                  const SizedBox(height: 6),
                  GestureDetector(
                    onTap: () => _tapJug(i),
                    child: Container(
                      width: 70,
                      height: 30.0 + _cap[i] * 14,
                      decoration: BoxDecoration(
                        borderRadius: const BorderRadius.vertical(bottom: Radius.circular(14), top: Radius.circular(4)),
                        border: Border.all(color: _sel == i ? const Color(0xFFFDE68A) : Colors.white54, width: _sel == i ? 3 : 2),
                        color: Colors.white.withValues(alpha: 0.05),
                      ),
                      alignment: Alignment.bottomCenter,
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 300),
                        height: (30.0 + _cap[i] * 14 - 6) * _w[i] / _cap[i],
                        decoration: const BoxDecoration(
                          borderRadius: BorderRadius.vertical(bottom: Radius.circular(12)),
                          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF67E8F9), Color(0xFF0891B2)]),
                        ),
                      ),
                    ),
                  ),
                  const SizedBox(height: 8),
                  Row(children: [
                    IconButton(onPressed: () => _act(() => _w[i] = _cap[i]), icon: const Icon(Icons.water_drop_rounded, color: Color(0xFF67E8F9)), tooltip: 'Fill'),
                    IconButton(onPressed: () => _act(() => _w[i] = 0), icon: const Icon(Icons.delete_outline_rounded, color: Colors.white70), tooltip: 'Empty'),
                  ]),
                ]),
            ]),
          ),
          const SizedBox(height: 14),
        ]),
      ]);
}

// ── 19 Balance Scale ───────────────────────────────────────────────────────
class BalanceScaleGame extends StatefulWidget {
  const BalanceScaleGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BalanceScaleGame> createState() => _BalanceScaleState();
}

class _BalanceScaleState extends State<BalanceScaleGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 1, 4);
  late int _left;
  late List<int> _tray;
  final _right = <int>{};

  @override
  void initState() {
    super.initState();
    startScore();
    _newRound();
  }

  void _newRound() {
    final r = args.rng;
    final maxW = lvI(widget.level, 9, 40);
    final sol = List.generate(lvI(widget.level, 2, 5), (_) => 1 + r.nextInt(maxW));
    _left = sol.fold(0, (a, b) => a + b);
    _tray = [...sol, for (var d = 0; d < lvI(widget.level, 2, 6); d++) 1 + r.nextInt(maxW)]..shuffle(r);
    _right.clear();
  }

  int get _rightSum => _right.fold(0, (a, i) => a + _tray[i]);

  void _toggle(int i) {
    if (ended) return;
    setState(() => _right.contains(i) ? _right.remove(i) : _right.add(i));
    HapticFeedback.selectionClick();
    if (_rightSum == _left) {
      if (addPoint()) return;
      setState(_newRound);
    }
  }

  @override
  Widget build(BuildContext context) {
    final diff = (_rightSum - _left).clamp(-30, 30);
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF365314), Color(0xFF1A2E05)]),
      Column(children: [
        ArcadeBanner(child: Text('Balance it · round ${math.min(score + 1, goal)}/$goal')),
        Expanded(
          child: Center(
            child: SizedBox(
              width: 300,
              height: 200,
              child: Stack(alignment: Alignment.center, children: [
                Positioned(bottom: 0, child: Container(width: 14, height: 120, color: const Color(0xFF78350F))),
                Positioned(
                  top: 40,
                  child: Transform.rotate(
                    angle: -diff * 0.012,
                    child: SizedBox(
                      width: 280,
                      height: 90,
                      child: Stack(children: [
                        Positioned(left: 0, right: 0, top: 0, child: Container(height: 8, color: const Color(0xFFD6D3D1))),
                        Positioned(left: 0, top: 10, width: 110, child: _pan('$_left kg', const Color(0xFF94A3B8))),
                        Positioned(right: 0, top: 10, width: 110, child: _pan('$_rightSum kg', diff == 0 ? const Color(0xFF4ADE80) : const Color(0xFFFDE68A))),
                      ]),
                    ),
                  ),
                ),
              ]),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(10, 0, 10, 14),
          child: Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.center, children: [
            for (var i = 0; i < _tray.length; i++)
              GestureDetector(
                onTap: () => _toggle(i),
                child: Container(
                  width: 58,
                  height: 46,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: _right.contains(i) ? const Color(0xFFFDE68A) : Colors.white.withValues(alpha: 0.1),
                    borderRadius: BorderRadius.circular(10),
                    border: Border.all(color: Colors.white24),
                  ),
                  child: Text('${_tray[i]}', style: TextStyle(color: _right.contains(i) ? Colors.black : Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                ),
              ),
          ]),
        ),
      ]),
    ]);
  }

  Widget _pan(String label, Color color) => Column(children: [
        Container(width: 2, height: 20, color: Colors.white38),
        Container(
          height: 46,
          alignment: Alignment.center,
          decoration: BoxDecoration(color: color.withValues(alpha: 0.25), borderRadius: const BorderRadius.vertical(bottom: Radius.circular(40)), border: Border.all(color: color, width: 2)),
          child: Text(label, style: TextStyle(color: color, fontWeight: FontWeight.w900)),
        ),
      ]);
}

// ── 20 Binary Lights ───────────────────────────────────────────────────────
class BinaryLightsGame extends StatefulWidget {
  const BinaryLightsGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BinaryLightsGame> createState() => _BinaryLightsState();
}

class _BinaryLightsState extends State<BinaryLightsGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 3, 8);
  late final int _bits = lvI(widget.level, 4, 10);
  int _on = 0;
  late int _target;

  @override
  void initState() {
    super.initState();
    startScore();
    _target = 1 + args.rng.nextInt((1 << _bits) - 1);
  }

  void _flip(int b) {
    if (ended) return;
    setState(() => _on ^= 1 << b);
    HapticFeedback.selectionClick();
    if (_on == _target) {
      if (addPoint()) return;
      setState(() {
        _on = 0;
        _target = 1 + args.rng.nextInt((1 << _bits) - 1);
      });
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF1E3A8A), Color(0xFF0B1120)]),
        Column(children: [
          ArcadeBanner(child: Text('Make the number · $score/$goal')),
          Expanded(
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Text('$_target', style: const TextStyle(color: Colors.white, fontSize: 64, fontWeight: FontWeight.w900)),
              Text('now: $_on', style: TextStyle(color: _on > _target ? const Color(0xFFF87171) : Colors.white60, fontSize: 18, fontWeight: FontWeight.w800)),
              const SizedBox(height: 24),
              Wrap(alignment: WrapAlignment.center, spacing: 6, runSpacing: 10, children: [
                for (var b = _bits - 1; b >= 0; b--)
                  GestureDetector(
                    onTap: () => _flip(b),
                    child: Column(children: [
                      AnimatedContainer(
                        duration: const Duration(milliseconds: 150),
                        width: 40,
                        height: 40,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: _on & (1 << b) != 0 ? const Color(0xFFFDE047) : Colors.white10,
                          boxShadow: _on & (1 << b) != 0 ? const [BoxShadow(color: Color(0xFFFDE047), blurRadius: 16)] : null,
                          border: Border.all(color: Colors.white38),
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text('${1 << b}', style: const TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w700)),
                    ]),
                  ),
              ]),
            ]),
          ),
        ]),
      ]);
}
