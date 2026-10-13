import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';
import 'ngmy_arcade_kit.dart';
import 'ngmy_vault_lv_host.dart';

/// Vault level games 81–90: board and card games against the computer
/// (it gets smarter every level).
final kVaultBoardGames = <VaultLvDef>[
  VaultLvDef(id: 'v_battleship', title: 'Battleships', tagline: 'Sink the enemy fleet before they sink yours.', emoji: '🚢', icon: Icons.directions_boat_rounded, colors: const [Color(0xFF0EA5E9), Color(0xFF0C4A6E)], tag: 'VS CPU', build: (a, l) => BattleshipGame(args: a, level: l)),
  VaultLvDef(id: 'v_dots_boxes', title: 'Dots & Boxes', tagline: 'Close more boxes than the computer.', emoji: '🔲', icon: Icons.grid_4x4_rounded, colors: const [Color(0xFFF472B6), Color(0xFF831843)], tag: 'VS CPU', build: (a, l) => DotsBoxesGame(args: a, level: l)),
  VaultLvDef(id: 'v_reversi', title: 'Reversi', tagline: 'Flip discs to own the board.', emoji: '⚫', icon: Icons.circle_rounded, colors: const [Color(0xFF16A34A), Color(0xFF052E16)], tag: 'VS CPU', build: (a, l) => ReversiGame(args: a, level: l)),
  VaultLvDef(id: 'v_five_row', title: 'Five in a Row', tagline: 'Line up stones before the computer does.', emoji: '⭕', icon: Icons.blur_on_rounded, colors: const [Color(0xFFD97706), Color(0xFF451A03)], tag: 'VS CPU', build: (a, l) => FiveInRowGame(args: a, level: l)),
  VaultLvDef(id: 'v_nim', title: 'Matchstick Nim', tagline: 'Take sticks — whoever takes the last one wins.', emoji: '🪵', icon: Icons.drag_handle_rounded, colors: const [Color(0xFFFB923C), Color(0xFF431407)], tag: 'VS CPU', build: (a, l) => NimGame(args: a, level: l)),
  VaultLvDef(id: 'v_mancala', title: 'Mancala', tagline: 'Sow the seeds and fill your store.', emoji: '🫘', icon: Icons.scatter_plot_rounded, colors: const [Color(0xFFB45309), Color(0xFF292524)], tag: 'VS CPU', build: (a, l) => MancalaGame(args: a, level: l)),
  VaultLvDef(id: 'v_isolation', title: 'Isolation', tagline: 'Move, burn the square behind you, trap the CPU.', emoji: '🔥', icon: Icons.crop_square_rounded, colors: const [Color(0xFFEF4444), Color(0xFF1F2937)], tag: 'VS CPU', build: (a, l) => IsolationGame(args: a, level: l)),
  VaultLvDef(id: 'v_golf_cards', title: 'Golf Solitaire', tagline: 'Play cards one higher or lower to clear the table.', emoji: '🃏', icon: Icons.style_rounded, colors: const [Color(0xFF22C55E), Color(0xFF14532D)], tag: 'CARDS', build: (a, l) => GolfSolitaireGame(args: a, level: l)),
  VaultLvDef(id: 'v_dice_poker', title: 'Dice Poker', tagline: 'Roll, hold, roll again — beat the computer’s hand.', emoji: '🎲', icon: Icons.casino_rounded, colors: const [Color(0xFFDC2626), Color(0xFF14532D)], tag: 'VS CPU', build: (a, l) => DicePokerGame(args: a, level: l)),
  VaultLvDef(id: 'v_dominoes', title: 'Dominoes', tagline: 'Match the ends and play out all your tiles first.', emoji: '🁫', icon: Icons.view_agenda_rounded, colors: const [Color(0xFFF8FAFC), Color(0xFF1E293B)], tag: 'VS CPU', build: (a, l) => DominoesGame(args: a, level: l)),
];

/// "Smart move with this probability" — the CPU gets sharper every level.
bool _smart(int level, math.Random r) => r.nextDouble() < lvD(level, 0.35, 0.95);

Widget _cpuSays(String text) => Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Text(text, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w800)),
    );

// ── 81 Battleships ─────────────────────────────────────────────────────────
class BattleshipGame extends StatefulWidget {
  const BattleshipGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<BattleshipGame> createState() => _BattleshipState();
}

class _BattleshipState extends State<BattleshipGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => _enemy.length;
  late final int _n = lvI(widget.level, 6, 9);
  late final Set<int> _enemy, _mine;
  final _shotAt = <int>{}, _cpuShot = <int>{};
  final _cpuTargets = <int>[];
  bool _busy = false;
  String _msg = 'Fire at the enemy sea';

  Set<int> _place(math.Random r) {
    final lens = widget.level < 10 ? [3, 2, 2] : (widget.level < 20 ? [4, 3, 2, 2] : [5, 4, 3, 2, 2]);
    for (var attempt = 0; attempt < 200; attempt++) {
      final cells = <int>{};
      var ok = true;
      for (final len in lens) {
        var placed = false;
        for (var t = 0; t < 60 && !placed; t++) {
          final horiz = r.nextBool();
          final x = r.nextInt(horiz ? _n - len + 1 : _n), y = r.nextInt(horiz ? _n : _n - len + 1);
          final ship = [for (var k = 0; k < len; k++) horiz ? y * _n + x + k : (y + k) * _n + x];
          if (ship.any(cells.contains)) continue;
          cells.addAll(ship);
          placed = true;
        }
        if (!placed) ok = false;
      }
      if (ok) return cells;
    }
    return {0, 1, 2};
  }

  @override
  void initState() {
    super.initState();
    _enemy = _place(args.rng);
    _mine = _place(args.rng);
    startScore();
  }

  void _fire(int c) {
    if (ended || _busy || _shotAt.contains(c)) return;
    setState(() {
      _shotAt.add(c);
      _msg = _enemy.contains(c) ? 'HIT! 💥' : 'Splash';
    });
    HapticFeedback.mediumImpact();
    if (_enemy.contains(c)) {
      if (addPoint()) return;
    }
    _busy = true;
    Future<void>.delayed(const Duration(milliseconds: 500), () {
      if (!mounted || ended) return;
      _cpuTurn();
      setState(() => _busy = false);
    });
  }

  void _cpuTurn() {
    final r = args.rng;
    int pick;
    final queue = _cpuTargets.where((c) => !_cpuShot.contains(c)).toList();
    if (queue.isNotEmpty && _smart(widget.level, r)) {
      pick = queue.first;
    } else {
      final open = [for (var i = 0; i < _n * _n; i++) if (!_cpuShot.contains(i)) i];
      // Smart: checkerboard hunting.
      final parity = open.where((i) => (i ~/ _n + i % _n).isEven).toList();
      final pool = _smart(widget.level, r) && parity.isNotEmpty ? parity : open;
      pick = pool[r.nextInt(pool.length)];
    }
    _cpuShot.add(pick);
    if (_mine.contains(pick)) {
      _msg = 'They hit your ship!';
      _cpuTargets.addAll([
        if (pick % _n > 0) pick - 1,
        if (pick % _n < _n - 1) pick + 1,
        if (pick >= _n) pick - _n,
        if (pick < _n * (_n - 1)) pick + _n,
      ]);
      if (_mine.every(_cpuShot.contains)) knockout('Your fleet was sunk');
    }
  }

  Widget _sea(bool enemy) => AspectRatio(
        aspectRatio: 1,
        child: GridView.count(
          crossAxisCount: _n,
          physics: const NeverScrollableScrollPhysics(),
          children: [
            for (var i = 0; i < _n * _n; i++)
              GestureDetector(
                onTap: enemy ? () => _fire(i) : null,
                child: Container(
                  margin: const EdgeInsets.all(1),
                  decoration: BoxDecoration(
                    color: enemy
                        ? (_shotAt.contains(i) ? (_enemy.contains(i) ? const Color(0xFFDC2626) : const Color(0xFF075985)) : const Color(0xFF0EA5E9))
                        : (_mine.contains(i) ? (_cpuShot.contains(i) ? const Color(0xFFDC2626) : const Color(0xFF64748B)) : (_cpuShot.contains(i) ? const Color(0xFF075985) : const Color(0xFF38BDF8))),
                    borderRadius: BorderRadius.circular(2),
                  ),
                  alignment: Alignment.center,
                  child: (enemy ? _shotAt : _cpuShot).contains(i) ? Text((enemy ? _enemy : _mine).contains(i) ? '✕' : '•', style: const TextStyle(color: Colors.white, fontSize: 10)) : null,
                ),
              ),
          ],
        ),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF0C4A6E), Color(0xFF082F49)]),
        Column(children: [
          ArcadeBanner(child: Text('Enemy ships hit $score/$goal')),
          _cpuSays(_msg),
          Expanded(flex: 3, child: Padding(padding: const EdgeInsets.symmetric(horizontal: 30), child: Center(child: _sea(true)))),
          const Text('YOUR FLEET', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11)),
          Expanded(flex: 2, child: Padding(padding: const EdgeInsets.fromLTRB(90, 4, 90, 10), child: Center(child: _sea(false)))),
        ]),
      ]);
}

// ── 82 Dots & Boxes ────────────────────────────────────────────────────────
class DotsBoxesGame extends StatefulWidget {
  const DotsBoxesGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DotsBoxesGame> createState() => _DotsBoxesState();
}

class _DotsBoxesState extends State<DotsBoxesGame> {
  late final int _m = lvI(widget.level, 3, 5); // boxes per side
  // Lines: horizontal h[r][c] r in 0..m, c in 0..m-1; vertical v[r][c] r 0..m-1, c 0..m
  late final List<bool> _h = List.filled((_m + 1) * _m, false), _v = List.filled(_m * (_m + 1), false);
  late final List<int> _owner = List.filled(_m * _m, 0); // 1 you, 2 cpu
  bool _cpuTurn = false, _over = false;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, _m * _m ~/ 2 + 1);
  }

  int _sides(int b) {
    final r = b ~/ _m, c = b % _m;
    return [_h[r * _m + c], _h[(r + 1) * _m + c], _v[r * (_m + 1) + c], _v[r * (_m + 1) + c + 1]].where((x) => x).length;
  }

  List<int> _boxesOf(bool horiz, int i) {
    if (horiz) {
      final r = i ~/ _m, c = i % _m;
      return [if (r > 0) (r - 1) * _m + c, if (r < _m) r * _m + c];
    }
    final r = i ~/ (_m + 1), c = i % (_m + 1);
    return [if (c > 0) r * _m + c - 1, if (c < _m) r * _m + c];
  }

  /// Draws a line; returns true if it closed a box (same player goes again).
  bool _draw(bool horiz, int i, int who) {
    (horiz ? _h : _v)[i] = true;
    var closed = false;
    for (final b in _boxesOf(horiz, i)) {
      if (_owner[b] == 0 && _sides(b) == 4) {
        _owner[b] = who;
        closed = true;
      }
    }
    return closed;
  }

  void _tapLine(bool horiz, int i) {
    if (_over || _cpuTurn || (horiz ? _h : _v)[i]) return;
    HapticFeedback.selectionClick();
    final again = _draw(horiz, i, 1);
    setState(() {});
    _afterMove(again ? 1 : 2);
  }

  void _afterMove(int next) {
    final mine = _owner.where((o) => o == 1).length, theirs = _owner.where((o) => o == 2).length;
    widget.args.onProgress(math.min(mine, _m * _m ~/ 2 + 1), _m * _m ~/ 2 + 1);
    if (!_owner.contains(0)) {
      _over = true;
      if (mine > theirs) {
        widget.args.onComplete();
      } else {
        widget.args.onKnockout(mine == theirs ? 'It was a draw' : 'The computer closed more boxes');
      }
      return;
    }
    if (next == 2) {
      _cpuTurn = true;
      Future<void>.delayed(const Duration(milliseconds: 450), _cpuMove);
    }
  }

  void _cpuMove() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    final moves = [for (var i = 0; i < _h.length; i++) if (!_h[i]) (true, i), for (var i = 0; i < _v.length; i++) if (!_v[i]) (false, i)];
    (bool, int)? pick;
    // 1) Close a box if possible.
    for (final mv in moves) {
      if (_boxesOf(mv.$1, mv.$2).any((b) => _owner[b] == 0 && _sides(b) == 3)) {
        pick = mv;
        break;
      }
    }
    // 2) Smart: avoid giving away a third side.
    if (pick == null && _smart(widget.level, r)) {
      final safe = moves.where((mv) => _boxesOf(mv.$1, mv.$2).every((b) => _sides(b) < 2)).toList();
      if (safe.isNotEmpty) pick = safe[r.nextInt(safe.length)];
    }
    pick ??= moves[r.nextInt(moves.length)];
    final again = _draw(pick.$1, pick.$2, 2);
    setState(() => _cpuTurn = false);
    _afterMove(again ? 2 : 1);
  }

  @override
  Widget build(BuildContext context) {
    final mine = _owner.where((o) => o == 1).length, theirs = _owner.where((o) => o == 2).length;
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF831843), Color(0xFF1F0612)]),
      Column(children: [
        ArcadeBanner(child: Text('You $mine · CPU $theirs · close a box to go again')),
        _cpuSays(_cpuTurn ? 'Computer is thinking…' : 'Your move — tap between two dots'),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Padding(
                padding: const EdgeInsets.all(26),
                child: LayoutBuilder(builder: (context, c) {
                  final s = c.maxWidth / _m;
                  return Stack(clipBehavior: Clip.none, children: [
                    for (var b = 0; b < _m * _m; b++)
                      if (_owner[b] != 0)
                        Positioned(left: (b % _m) * s + 4, top: (b ~/ _m) * s + 4, width: s - 8, height: s - 8, child: Container(color: (_owner[b] == 1 ? const Color(0xFF22C55E) : const Color(0xFFEF4444)).withValues(alpha: 0.45), alignment: Alignment.center, child: Text(_owner[b] == 1 ? 'YOU' : 'CPU', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 11)))),
                    for (var i = 0; i < _h.length; i++)
                      Positioned(
                        left: (i % _m) * s + 6,
                        top: (i ~/ _m) * s - 12,
                        width: s - 12,
                        height: 24,
                        child: GestureDetector(onTap: () => _tapLine(true, i), child: Center(child: Container(height: 6, color: _h[i] ? Colors.white : Colors.white12))),
                      ),
                    for (var i = 0; i < _v.length; i++)
                      Positioned(
                        left: (i % (_m + 1)) * s - 12,
                        top: (i ~/ (_m + 1)) * s + 6,
                        width: 24,
                        height: s - 12,
                        child: GestureDetector(onTap: () => _tapLine(false, i), child: Center(child: Container(width: 6, color: _v[i] ? Colors.white : Colors.white12))),
                      ),
                    for (var r = 0; r <= _m; r++)
                      for (var cc = 0; cc <= _m; cc++)
                        Positioned(left: cc * s - 6, top: r * s - 6, child: Container(width: 12, height: 12, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFFDE68A)))),
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

// ── 83 Reversi ─────────────────────────────────────────────────────────────
class ReversiGame extends StatefulWidget {
  const ReversiGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<ReversiGame> createState() => _ReversiState();
}

class _ReversiState extends State<ReversiGame> {
  late final int _n = widget.level < 15 ? 6 : 8;
  late List<int> _b; // 0 empty, 1 you (black), 2 cpu (white)
  bool _over = false, _cpuTurn = false;

  @override
  void initState() {
    super.initState();
    _b = List.filled(_n * _n, 0);
    final m = _n ~/ 2;
    _b[(m - 1) * _n + m - 1] = 2;
    _b[m * _n + m] = 2;
    _b[(m - 1) * _n + m] = 1;
    _b[m * _n + m - 1] = 1;
    _report();
  }

  List<int> _flips(List<int> b, int cell, int who) {
    if (b[cell] != 0) return const [];
    final out = <int>[];
    final x0 = cell % _n, y0 = cell ~/ _n;
    for (final (dx, dy) in const [(1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1)]) {
      final line = <int>[];
      var x = x0 + dx, y = y0 + dy;
      while (x >= 0 && y >= 0 && x < _n && y < _n && b[y * _n + x] == 3 - who) {
        line.add(y * _n + x);
        x += dx;
        y += dy;
      }
      if (line.isNotEmpty && x >= 0 && y >= 0 && x < _n && y < _n && b[y * _n + x] == who) out.addAll(line);
    }
    return out;
  }

  List<int> _moves(List<int> b, int who) => [for (var i = 0; i < _n * _n; i++) if (_flips(b, i, who).isNotEmpty) i];

  void _report() {
    final mine = _b.where((x) => x == 1).length, theirs = _b.where((x) => x == 2).length;
    widget.args.onProgress(mine, math.max(1, mine + theirs));
  }

  void _play(int cell, int who) {
    final f = _flips(_b, cell, who);
    _b[cell] = who;
    for (final c in f) {
      _b[c] = who;
    }
  }

  void _tap(int cell) {
    if (_over || _cpuTurn || _flips(_b, cell, 1).isEmpty) return;
    HapticFeedback.selectionClick();
    setState(() => _play(cell, 1));
    _report();
    _next(2);
  }

  void _next(int who) {
    final mine = _moves(_b, 1), theirs = _moves(_b, 2);
    if (mine.isEmpty && theirs.isEmpty) {
      _over = true;
      final a = _b.where((x) => x == 1).length, c = _b.where((x) => x == 2).length;
      if (a > c) {
        widget.args.onComplete();
      } else {
        widget.args.onKnockout(a == c ? 'It was a draw' : 'The computer owns more of the board');
      }
      return;
    }
    if (who == 2 && theirs.isNotEmpty) {
      _cpuTurn = true;
      Future<void>.delayed(const Duration(milliseconds: 500), _cpu);
    } else if (who == 1 && mine.isEmpty) {
      _cpuTurn = true;
      Future<void>.delayed(const Duration(milliseconds: 500), _cpu);
    } else {
      setState(() => _cpuTurn = false);
    }
  }

  int _value(int cell) {
    final x = cell % _n, y = cell ~/ _n;
    final edgeX = x == 0 || x == _n - 1, edgeY = y == 0 || y == _n - 1;
    if (edgeX && edgeY) return 30;
    final nearCorner = (x <= 1 || x >= _n - 2) && (y <= 1 || y >= _n - 2);
    if (nearCorner) return -10;
    if (edgeX || edgeY) return 6;
    return 0;
  }

  void _cpu() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    final moves = _moves(_b, 2);
    if (moves.isEmpty) {
      _next(1);
      return;
    }
    int pick;
    if (_smart(widget.level, r)) {
      pick = moves.reduce((a, b) {
        double score(int m) {
          final after = List.of(_b);
          final f = _flips(after, m, 2);
          after[m] = 2;
          for (final c in f) {
            after[c] = 2;
          }
          // Look one step ahead at the player's best reply on hard levels.
          final reply = widget.level > 18 ? _moves(after, 1).fold<int>(0, (s, mm) => math.max(s, _flips(after, mm, 1).length + _value(mm))) : 0;
          return f.length + _value(m) * 1.0 - reply * 0.8;
        }

        return score(a) >= score(b) ? a : b;
      });
    } else {
      pick = moves[r.nextInt(moves.length)];
    }
    setState(() => _play(pick, 2));
    _report();
    _next(1);
  }

  @override
  Widget build(BuildContext context) {
    final mine = _b.where((x) => x == 1).length, theirs = _b.where((x) => x == 2).length;
    final legal = _cpuTurn ? <int>{} : _moves(_b, 1).toSet();
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF14532D), Color(0xFF052E16)]),
      Column(children: [
        ArcadeBanner(child: Text('You ⚫ $mine · CPU ⚪ $theirs')),
        _cpuSays(_cpuTurn ? 'Computer is thinking…' : 'Your move — dots show where you can play'),
        Expanded(
          child: Center(
            child: AspectRatio(
              aspectRatio: 1,
              child: Container(
                margin: const EdgeInsets.all(12),
                color: const Color(0xFF15803D),
                child: GridView.count(
                  crossAxisCount: _n,
                  physics: const NeverScrollableScrollPhysics(),
                  children: [
                    for (var i = 0; i < _n * _n; i++)
                      GestureDetector(
                        onTap: () => _tap(i),
                        child: Container(
                          decoration: BoxDecoration(border: Border.all(color: const Color(0xFF14532D))),
                          alignment: Alignment.center,
                          child: _b[i] != 0
                              ? AnimatedContainer(
                                  duration: const Duration(milliseconds: 250),
                                  margin: const EdgeInsets.all(4),
                                  decoration: BoxDecoration(shape: BoxShape.circle, color: _b[i] == 1 ? const Color(0xFF111827) : const Color(0xFFF8FAFC), boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 3, offset: Offset(0, 2))]),
                                )
                              : (legal.contains(i) ? Container(width: 8, height: 8, decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.black26)) : null),
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
}

// ── 84 Five in a Row ───────────────────────────────────────────────────────
class FiveInRowGame extends StatefulWidget {
  const FiveInRowGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<FiveInRowGame> createState() => _FiveInRowState();
}

class _FiveInRowState extends State<FiveInRowGame> {
  late final int _n = lvI(widget.level, 9, 13);
  late final int _need = widget.level < 6 ? 4 : 5;
  late final List<int> _b = List.filled(_n * _n, 0);
  bool _over = false, _cpuTurn = false;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, _need);
  }

  int _run(int cell, int who, int dx, int dy) {
    var count = 0;
    var x = cell % _n + dx, y = cell ~/ _n + dy;
    while (x >= 0 && y >= 0 && x < _n && y < _n && _b[y * _n + x] == who) {
      count++;
      x += dx;
      y += dy;
    }
    return count;
  }

  int _best(int cell, int who) {
    var best = 0;
    for (final (dx, dy) in const [(1, 0), (0, 1), (1, 1), (1, -1)]) {
      best = math.max(best, 1 + _run(cell, who, dx, dy) + _run(cell, who, -dx, -dy));
    }
    return best;
  }

  int get _longest {
    var m = 0;
    for (var i = 0; i < _b.length; i++) {
      if (_b[i] == 1) m = math.max(m, _best(i, 1));
    }
    return m;
  }

  void _tap(int cell) {
    if (_over || _cpuTurn || _b[cell] != 0) return;
    HapticFeedback.selectionClick();
    setState(() => _b[cell] = 1);
    widget.args.onProgress(math.min(_longest, _need - 1), _need);
    if (_best(cell, 1) >= _need) {
      _over = true;
      widget.args.onProgress(_need, _need);
      widget.args.onComplete();
      return;
    }
    if (!_b.contains(0)) {
      _over = true;
      widget.args.onKnockout('Board full — a draw');
      return;
    }
    _cpuTurn = true;
    Future<void>.delayed(const Duration(milliseconds: 400), _cpu);
  }

  void _cpu() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    var bestCell = -1;
    var bestScore = -1.0;
    final smart = _smart(widget.level, r);
    for (var i = 0; i < _b.length; i++) {
      if (_b[i] != 0) continue;
      // Only look near existing stones.
      final x = i % _n, y = i ~/ _n;
      var near = false;
      for (var dy = -2; dy <= 2 && !near; dy++) {
        for (var dx = -2; dx <= 2 && !near; dx++) {
          final nx = x + dx, ny = y + dy;
          if (nx >= 0 && ny >= 0 && nx < _n && ny < _n && _b[ny * _n + nx] != 0) near = true;
        }
      }
      if (!near) continue;
      final attack = _best(i, 2), defend = _best(i, 1);
      var s = (attack >= _need ? 1000 : 0) + (defend >= _need ? 500 : 0) + math.pow(attack, 3) * 1.0 + math.pow(defend, 3) * (smart ? 1.1 : 0.4) + r.nextDouble() * (smart ? 2 : 30);
      if (s > bestScore) {
        bestScore = s.toDouble();
        bestCell = i;
      }
    }
    if (bestCell < 0) bestCell = _n * _n ~/ 2;
    setState(() {
      _b[bestCell] = 2;
      _cpuTurn = false;
    });
    if (_best(bestCell, 2) >= _need) {
      _over = true;
      widget.args.onKnockout('The computer made $_need in a row');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF78350F), Color(0xFF292524)]),
        Column(children: [
          ArcadeBanner(child: Text('Get $_need in a row first (any direction)')),
          _cpuSays(_cpuTurn ? 'Computer is thinking…' : 'Your move'),
          Expanded(
            child: Center(
              child: AspectRatio(
                aspectRatio: 1,
                child: Container(
                  margin: const EdgeInsets.all(10),
                  color: const Color(0xFFD6A35C),
                  child: GridView.count(
                    crossAxisCount: _n,
                    physics: const NeverScrollableScrollPhysics(),
                    children: [
                      for (var i = 0; i < _b.length; i++)
                        GestureDetector(
                          onTap: () => _tap(i),
                          child: Container(
                            decoration: BoxDecoration(border: Border.all(color: const Color(0xFF92400E), width: 0.5)),
                            child: _b[i] == 0 ? null : Container(margin: const EdgeInsets.all(2), decoration: BoxDecoration(shape: BoxShape.circle, color: _b[i] == 1 ? const Color(0xFF111827) : Colors.white)),
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

// ── 85 Matchstick Nim ──────────────────────────────────────────────────────
class NimGame extends StatefulWidget {
  const NimGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<NimGame> createState() => _NimState();
}

class _NimState extends State<NimGame> {
  late List<int> _rows;
  int? _row;
  int _take = 0;
  bool _over = false, _cpuTurn = false;
  late final int _total;
  String _msg = 'Pick a row, choose how many, then TAKE';

  @override
  void initState() {
    super.initState();
    final r = widget.args.rng;
    do {
      _rows = List.generate(lvI(widget.level, 3, 5), (_) => 1 + r.nextInt(lvI(widget.level, 4, 8)));
    } while (_rows.reduce((a, b) => a ^ b) == 0); // you can always win with perfect play
    _total = _rows.reduce((a, b) => a + b);
    widget.args.onProgress(0, _total);
  }

  void _commit() {
    if (_over || _cpuTurn || _row == null || _take <= 0) return;
    setState(() {
      _rows[_row!] -= _take;
      _row = null;
      _take = 0;
    });
    HapticFeedback.selectionClick();
    final left = _rows.reduce((a, b) => a + b);
    widget.args.onProgress(_total - left, _total);
    if (left == 0) {
      _over = true;
      widget.args.onComplete();
      return;
    }
    _cpuTurn = true;
    Future<void>.delayed(const Duration(milliseconds: 600), _cpu);
  }

  void _cpu() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    var row = -1, take = 0;
    final x = _rows.reduce((a, b) => a ^ b);
    if (x != 0 && _smart(widget.level, r)) {
      for (var i = 0; i < _rows.length; i++) {
        final target = _rows[i] ^ x;
        if (target < _rows[i]) {
          row = i;
          take = _rows[i] - target;
          break;
        }
      }
    }
    if (row < 0) {
      final rowsLeft = [for (var i = 0; i < _rows.length; i++) if (_rows[i] > 0) i];
      row = rowsLeft[r.nextInt(rowsLeft.length)];
      take = 1 + r.nextInt(_rows[row]);
    }
    setState(() {
      _rows[row] -= take;
      _msg = 'Computer took $take from row ${row + 1}';
      _cpuTurn = false;
    });
    if (_rows.every((v) => v == 0)) {
      _over = true;
      widget.args.onKnockout('The computer took the last stick');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF431407), Color(0xFF1C0A04)]),
        Column(children: [
          const ArcadeBanner(child: Text('Take the LAST stick to win')),
          _cpuSays(_msg),
          Expanded(
            child: Center(
              child: Column(mainAxisSize: MainAxisSize.min, children: [
                for (var i = 0; i < _rows.length; i++)
                  GestureDetector(
                    onTap: _rows[i] == 0 || _cpuTurn
                        ? null
                        : () => setState(() {
                              if (_row == i) {
                                _take = _take % _rows[i] + 1;
                              } else {
                                _row = i;
                                _take = 1;
                              }
                            }),
                    child: Container(
                      margin: const EdgeInsets.symmetric(vertical: 6),
                      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                      decoration: BoxDecoration(color: _row == i ? Colors.white12 : Colors.transparent, borderRadius: BorderRadius.circular(12)),
                      child: Row(mainAxisSize: MainAxisSize.min, children: [
                        for (var k = 0; k < _rows[i]; k++)
                          Container(
                            width: 8,
                            height: 50,
                            margin: const EdgeInsets.symmetric(horizontal: 4),
                            decoration: BoxDecoration(
                              color: _row == i && k >= _rows[i] - _take ? const Color(0xFFF87171) : const Color(0xFFFDE68A),
                              borderRadius: BorderRadius.circular(3),
                            ),
                          ),
                        if (_rows[i] == 0) const Text('—', style: TextStyle(color: Colors.white24, fontSize: 24)),
                      ]),
                    ),
                  ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 0, 18, 14),
            child: SizedBox(
              width: double.infinity,
              height: 52,
              child: FilledButton(onPressed: _commit, style: FilledButton.styleFrom(backgroundColor: const Color(0xFFEA580C)), child: Text(_row == null ? 'Tap a row (tap again for more)' : 'TAKE $_take', style: const TextStyle(fontWeight: FontWeight.w900))),
            ),
          ),
        ]),
      ]);
}

// ── 86 Mancala ─────────────────────────────────────────────────────────────
class MancalaGame extends StatefulWidget {
  const MancalaGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<MancalaGame> createState() => _MancalaState();
}

class _MancalaState extends State<MancalaGame> {
  // 0..5 your pits, 6 your store, 7..12 cpu pits, 13 cpu store.
  late List<int> _b;
  bool _over = false, _cpuTurn = false;
  String _msg = 'Tap one of your pits (bottom row)';

  @override
  void initState() {
    super.initState();
    final s = lvI(widget.level, 3, 4);
    _b = [for (var i = 0; i < 14; i++) (i == 6 || i == 13) ? 0 : s];
    widget.args.onProgress(0, 1);
  }

  /// Plays a pit on [b]; returns true if the same player goes again.
  static bool _sow(List<int> b, int pit, bool you) {
    var seeds = b[pit];
    b[pit] = 0;
    var i = pit;
    while (seeds > 0) {
      i = (i + 1) % 14;
      if (i == (you ? 13 : 6)) continue;
      b[i]++;
      seeds--;
    }
    final store = you ? 6 : 13;
    if (i == store) return true;
    final mineSide = you ? (i >= 0 && i <= 5) : (i >= 7 && i <= 12);
    if (mineSide && b[i] == 1 && b[12 - i] > 0) {
      b[store] += b[12 - i] + 1;
      b[i] = 0;
      b[12 - i] = 0;
    }
    return false;
  }

  static bool _done(List<int> b) => b.sublist(0, 6).every((x) => x == 0) || b.sublist(7, 13).every((x) => x == 0);

  void _finish() {
    for (var i = 0; i < 6; i++) {
      _b[6] += _b[i];
      _b[i] = 0;
    }
    for (var i = 7; i < 13; i++) {
      _b[13] += _b[i];
      _b[i] = 0;
    }
    _over = true;
    setState(() {});
    widget.args.onProgress(_b[6], math.max(1, _b[6] + _b[13]));
    if (_b[6] > _b[13]) {
      widget.args.onComplete();
    } else {
      widget.args.onKnockout(_b[6] == _b[13] ? 'It was a draw' : 'The computer stored more seeds');
    }
  }

  void _tap(int pit) {
    if (_over || _cpuTurn || pit > 5 || _b[pit] == 0) return;
    HapticFeedback.selectionClick();
    final again = _sow(_b, pit, true);
    setState(() => _msg = again ? 'Landed in your store — go again!' : 'Computer’s turn');
    widget.args.onProgress(_b[6], math.max(1, _b[6] + _b[13]));
    if (_done(_b)) return _finish();
    if (!again) {
      _cpuTurn = true;
      Future<void>.delayed(const Duration(milliseconds: 600), _cpu);
    }
  }

  void _cpu() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    final options = [for (var i = 7; i < 13; i++) if (_b[i] > 0) i];
    var pick = options[r.nextInt(options.length)];
    if (_smart(widget.level, r)) {
      var best = -999;
      for (final o in options) {
        final copy = List.of(_b);
        final again = _sow(copy, o, false);
        final v = copy[13] - _b[13] + (again ? 3 : 0) - (widget.level > 15 ? _bestReply(copy) : 0);
        if (v > best) {
          best = v;
          pick = o;
        }
      }
    }
    final again = _sow(_b, pick, false);
    setState(() => _msg = again ? 'Computer goes again…' : 'Your turn');
    if (_done(_b)) return _finish();
    if (again) {
      Future<void>.delayed(const Duration(milliseconds: 600), _cpu);
    } else {
      _cpuTurn = false;
    }
  }

  int _bestReply(List<int> b) {
    var best = 0;
    for (var i = 0; i < 6; i++) {
      if (b[i] == 0) continue;
      final c = List.of(b);
      _sow(c, i, true);
      best = math.max(best, c[6] - b[6]);
    }
    return best;
  }

  Widget _pit(int i) => GestureDetector(
        onTap: () => _tap(i),
        child: Container(
          width: 44,
          height: 44,
          margin: const EdgeInsets.all(3),
          decoration: BoxDecoration(shape: BoxShape.circle, color: const Color(0xFF451A03), border: Border.all(color: i <= 5 && _b[i] > 0 && !_cpuTurn ? const Color(0xFFFDE68A) : Colors.black26, width: 2)),
          alignment: Alignment.center,
          child: Text('${_b[i]}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
        ),
      );

  Widget _store(int i, String who) => Container(
        width: 46,
        height: 110,
        decoration: BoxDecoration(color: const Color(0xFF451A03), borderRadius: BorderRadius.circular(22)),
        alignment: Alignment.center,
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Text('${_b[i]}', style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w900, fontSize: 20)),
          Text(who, style: const TextStyle(color: Colors.white54, fontSize: 9, fontWeight: FontWeight.w800)),
        ]),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF78350F), Color(0xFF1C1917)]),
        Column(children: [
          ArcadeBanner(child: Text('You ${_b[6]} · CPU ${_b[13]}')),
          _cpuSays(_msg),
          Expanded(
            child: Center(
              child: FittedBox(
                child: Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(color: const Color(0xFFB45309), borderRadius: BorderRadius.circular(40)),
                  child: Row(children: [
                    _store(13, 'CPU'),
                    Column(children: [
                      Row(children: [for (var i = 12; i >= 7; i--) _pit(i)]),
                      Row(children: [for (var i = 0; i <= 5; i++) _pit(i)]),
                    ]),
                    _store(6, 'YOU'),
                  ]),
                ),
              ),
            ),
          ),
        ]),
      ]);
}

// ── 87 Isolation ───────────────────────────────────────────────────────────
class IsolationGame extends StatefulWidget {
  const IsolationGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<IsolationGame> createState() => _IsolationState();
}

class _IsolationState extends State<IsolationGame> {
  static const _n = 7;
  final _burnt = <int>{};
  int _me = 0, _cpu = _n * _n - 1;
  bool _over = false, _cpuTurn = false;
  int _turns = 0;

  @override
  void initState() {
    super.initState();
    for (var i = 0; i < lvI(widget.level, 0, 6); i++) {
      final c = widget.args.rng.nextInt(_n * _n);
      if (c != _me && c != _cpu) _burnt.add(c);
    }
    widget.args.onProgress(0, 10);
  }

  List<int> _moves(int from, int other) {
    final x = from % _n, y = from ~/ _n;
    return [
      for (var dy = -1; dy <= 1; dy++)
        for (var dx = -1; dx <= 1; dx++)
          if ((dx != 0 || dy != 0) && x + dx >= 0 && y + dy >= 0 && x + dx < _n && y + dy < _n)
            if (!_burnt.contains((y + dy) * _n + x + dx) && (y + dy) * _n + x + dx != other) (y + dy) * _n + x + dx,
    ];
  }

  void _tap(int c) {
    if (_over || _cpuTurn || !_moves(_me, _cpu).contains(c)) return;
    HapticFeedback.selectionClick();
    setState(() {
      _burnt.add(_me);
      _me = c;
      _turns++;
    });
    widget.args.onProgress(math.min(9, _turns ~/ 2), 10);
    if (_moves(_cpu, _me).isEmpty) {
      _over = true;
      widget.args.onComplete();
      return;
    }
    _cpuTurn = true;
    Future<void>.delayed(const Duration(milliseconds: 450), _cpuMove);
  }

  void _cpuMove() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    final opts = _moves(_cpu, _me);
    var pick = opts[r.nextInt(opts.length)];
    if (_smart(widget.level, r)) {
      // Keep the most room for itself, leave the least for you.
      var best = -999;
      for (final o in opts) {
        _burnt.add(_cpu);
        final mine = _moves(o, _me).length;
        final yours = _moves(_me, o).length;
        _burnt.remove(_cpu);
        final v = mine * 2 - yours * 3;
        if (v > best) {
          best = v;
          pick = o;
        }
      }
    }
    setState(() {
      _burnt.add(_cpu);
      _cpu = pick;
      _cpuTurn = false;
    });
    if (_moves(_me, _cpu).isEmpty) {
      _over = true;
      widget.args.onKnockout('You are boxed in');
    }
  }

  @override
  Widget build(BuildContext context) {
    final legal = _cpuTurn ? <int>{} : _moves(_me, _cpu).toSet();
    return Stack(children: [
      arcadeBackdrop(const [Color(0xFF1F2937), Color(0xFF030712)]),
      Column(children: [
        const ArcadeBanner(child: Text('Move one step; the square you leave burns')),
        _cpuSays(_cpuTurn ? 'Computer is moving…' : 'Trap the computer so it can’t move'),
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
                          margin: const EdgeInsets.all(2),
                          decoration: BoxDecoration(
                            color: _burnt.contains(i) ? const Color(0xFF111111) : (legal.contains(i) ? const Color(0xFF22C55E).withValues(alpha: 0.4) : const Color(0xFF374151)),
                            borderRadius: BorderRadius.circular(6),
                          ),
                          alignment: Alignment.center,
                          child: FittedBox(child: Padding(padding: const EdgeInsets.all(4), child: Text(i == _me ? '🙂' : (i == _cpu ? '🤖' : (_burnt.contains(i) ? '🔥' : '')), style: const TextStyle(fontSize: 24)))),
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
}

// ── 88 Golf Solitaire ──────────────────────────────────────────────────────
class GolfSolitaireGame extends StatefulWidget {
  const GolfSolitaireGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<GolfSolitaireGame> createState() => _GolfSolitaireState();
}

class _GolfSolitaireState extends State<GolfSolitaireGame> with ArcadeScore {
  @override
  NgmyArcadeArgs get args => widget.args;
  @override
  int get goal => lvI(widget.level, 10, 30);
  late List<List<(int, int)>> _cols;
  late List<(int, int)> _stock;
  late (int, int) _waste;
  static const _suits = ['♠', '♥', '♦', '♣'];

  @override
  void initState() {
    super.initState();
    final deck = [for (var s = 0; s < 4; s++) for (var r = 1; r <= 13; r++) (r, s)]..shuffle(args.rng);
    final depth = lvI(widget.level, 4, 5);
    _cols = List.generate(7, (c) => deck.sublist(c * depth, c * depth + depth));
    _stock = deck.sublist(7 * depth);
    final stockSize = lvI(widget.level, 18, 10);
    if (_stock.length > stockSize + 1) _stock = _stock.sublist(0, stockSize + 1);
    _waste = _stock.removeLast();
    startScore();
  }

  bool get _anyMove => _cols.any((c) => c.isNotEmpty && (c.last.$1 - _waste.$1).abs() == 1);

  void _play(int col) {
    if (ended || _cols[col].isEmpty) return;
    final card = _cols[col].last;
    if ((card.$1 - _waste.$1).abs() != 1) {
      HapticFeedback.heavyImpact();
      return;
    }
    setState(() {
      _cols[col].removeLast();
      _waste = card;
    });
    if (addPoint()) return;
    if (_stock.isEmpty && !_anyMove) knockout('No moves left');
  }

  void _draw() {
    if (ended) return;
    if (_stock.isEmpty) {
      if (!_anyMove) knockout('No moves left');
      return;
    }
    setState(() => _waste = _stock.removeLast());
    if (_stock.isEmpty && !_anyMove) knockout('No moves left');
  }

  String _rank(int r) => switch (r) { 1 => 'A', 11 => 'J', 12 => 'Q', 13 => 'K', _ => '$r' };

  Widget _card((int, int) c, {double w = 46, bool top = true}) => Container(
        width: w,
        height: w * 1.4,
        margin: const EdgeInsets.only(bottom: 2),
        alignment: top ? Alignment.center : Alignment.topCenter,
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(6), border: Border.all(color: Colors.black26)),
        child: Text('${_rank(c.$1)}${_suits[c.$2]}', style: TextStyle(color: c.$2 == 1 || c.$2 == 2 ? const Color(0xFFDC2626) : Colors.black, fontWeight: FontWeight.w900, fontSize: 14)),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF166534), Color(0xFF052E16)]),
        Column(children: [
          ArcadeBanner(child: Text('Play a card 1 higher or lower than the pile · $score/$goal')),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 6),
              child: Row(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.center, children: [
                for (var c = 0; c < 7; c++)
                  GestureDetector(
                    onTap: () => _play(c),
                    child: SizedBox(
                      width: 50,
                      child: Stack(children: [
                        for (var k = 0; k < _cols[c].length; k++)
                          Positioned(top: k * 22.0, left: 2, child: _card(_cols[c][k], top: k == _cols[c].length - 1)),
                        SizedBox(height: 22.0 * 6 + 70),
                      ]),
                    ),
                  ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 18),
            child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
              GestureDetector(
                onTap: _draw,
                child: Container(
                  width: 64,
                  height: 90,
                  decoration: BoxDecoration(color: const Color(0xFF1D4ED8), borderRadius: BorderRadius.circular(8), border: Border.all(color: Colors.white, width: 2)),
                  alignment: Alignment.center,
                  child: Text(_stock.isEmpty ? 'empty' : 'DRAW\n${_stock.length}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                ),
              ),
              const SizedBox(width: 20),
              _card(_waste, w: 64),
            ]),
          ),
        ]),
      ]);
}

// ── 89 Dice Poker ──────────────────────────────────────────────────────────
class DicePokerGame extends StatefulWidget {
  const DicePokerGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DicePokerGame> createState() => _DicePokerState();
}

class _DicePokerState extends State<DicePokerGame> {
  late final int _rounds = lvI(widget.level, 3, 7);
  int _round = 0, _wins = 0, _losses = 0, _rolls = 0;
  List<int> _dice = [1, 2, 3, 4, 5];
  final _hold = <int>{};
  List<int>? _cpu;
  String _msg = 'Roll up to 3 times — tap dice to keep them';
  bool _over = false;
  static const _faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

  int get _need => _rounds ~/ 2 + 1;

  @override
  void initState() {
    super.initState();
    widget.args.onProgress(0, _need);
  }

  static (int, String) _rankHand(List<int> d) {
    final counts = <int, int>{};
    for (final v in d) {
      counts[v] = (counts[v] ?? 0) + 1;
    }
    final c = counts.values.toList()..sort((a, b) => b.compareTo(a));
    final sorted = List.of(d)..sort();
    final straight = counts.length == 5 && sorted.last - sorted.first == 4;
    final high = sorted.reduce((a, b) => a + b);
    if (c[0] == 5) return (700 + high, 'Five of a kind');
    if (c[0] == 4) return (600 + high, 'Four of a kind');
    if (c[0] == 3 && c[1] == 2) return (500 + high, 'Full house');
    if (straight) return (400 + high, 'Straight');
    if (c[0] == 3) return (300 + high, 'Three of a kind');
    if (c[0] == 2 && c[1] == 2) return (200 + high, 'Two pair');
    if (c[0] == 2) return (100 + high, 'One pair');
    return (high, 'Nothing');
  }

  void _roll() {
    if (_over || _rolls >= 3) return;
    final r = widget.args.rng;
    setState(() {
      _dice = [for (var i = 0; i < 5; i++) _hold.contains(i) ? _dice[i] : 1 + r.nextInt(6)];
      _rolls++;
      _cpu = null;
      _msg = _rolls < 3 ? 'Keep some dice and roll again, or STAND' : 'Standing…';
    });
    HapticFeedback.mediumImpact();
    if (_rolls >= 3) _stand();
  }

  List<int> _cpuHand() {
    final r = widget.args.rng;
    var d = List.generate(5, (_) => 1 + r.nextInt(6));
    final rerolls = _smartRolls(r);
    for (var k = 0; k < rerolls; k++) {
      final counts = <int, int>{};
      for (final v in d) {
        counts[v] = (counts[v] ?? 0) + 1;
      }
      final keep = counts.entries.reduce((a, b) => a.value > b.value || (a.value == b.value && a.key > b.key) ? a : b).key;
      d = [for (final v in d) v == keep && counts[keep]! > 1 ? v : 1 + r.nextInt(6)];
    }
    return d;
  }

  int _smartRolls(math.Random r) => _smart(widget.level, r) ? 2 : (r.nextBool() ? 1 : 0);

  void _stand() {
    if (_over || _rolls == 0) return;
    final cpu = _cpuHand();
    final me = _rankHand(_dice), them = _rankHand(cpu);
    setState(() {
      _cpu = cpu;
      if (me.$1 > them.$1) {
        _wins++;
        _msg = 'You win the round — ${me.$2} beats ${them.$2}';
      } else {
        _losses++;
        _msg = me.$1 == them.$1 ? 'Tie goes to the house — ${me.$2}' : 'Computer wins — ${them.$2} beats ${me.$2}';
      }
      _round++;
      _rolls = 0;
      _hold.clear();
    });
    widget.args.onProgress(_wins, _need);
    if (_wins >= _need) {
      _over = true;
      widget.args.onComplete();
    } else if (_losses > _rounds - _need) {
      _over = true;
      widget.args.onKnockout('The computer won the match');
    }
  }

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF14532D), Color(0xFF052E16)]),
        Column(children: [
          ArcadeBanner(child: Text('Round ${math.min(_round + 1, _rounds)}/$_rounds · You $_wins · CPU $_losses · first to $_need')),
          _cpuSays(_msg),
          if (_cpu != null) Text('CPU: ${_cpu!.map((v) => _faces[v - 1]).join(' ')}', style: const TextStyle(color: Colors.white, fontSize: 30)),
          Expanded(
            child: Center(
              child: Wrap(spacing: 8, children: [
                for (var i = 0; i < 5; i++)
                  GestureDetector(
                    onTap: _rolls == 0 ? null : () => setState(() => _hold.contains(i) ? _hold.remove(i) : _hold.add(i)),
                    child: Column(children: [
                      Container(
                        width: 58,
                        height: 58,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12), border: Border.all(color: _hold.contains(i) ? const Color(0xFFFACC15) : Colors.black26, width: _hold.contains(i) ? 4 : 1)),
                        child: Text(_faces[_dice[i] - 1], style: const TextStyle(fontSize: 44, color: Colors.black, height: 1)),
                      ),
                      Text(_hold.contains(i) ? 'KEEP' : '', style: const TextStyle(color: Color(0xFFFACC15), fontWeight: FontWeight.w900, fontSize: 10)),
                    ]),
                  ),
              ]),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
            child: Row(children: [
              Expanded(child: SizedBox(height: 52, child: FilledButton(onPressed: _roll, style: FilledButton.styleFrom(backgroundColor: const Color(0xFFDC2626)), child: Text('ROLL (${3 - _rolls} left)', style: const TextStyle(fontWeight: FontWeight.w900))))),
              const SizedBox(width: 10),
              Expanded(child: SizedBox(height: 52, child: OutlinedButton(onPressed: _stand, style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white54)), child: const Text('STAND', style: TextStyle(fontWeight: FontWeight.w900))))),
            ]),
          ),
        ]),
      ]);
}

// ── 90 Dominoes ────────────────────────────────────────────────────────────
class DominoesGame extends StatefulWidget {
  const DominoesGame({super.key, required this.args, required this.level});
  final NgmyArcadeArgs args;
  final int level;
  @override
  State<DominoesGame> createState() => _DominoesState();
}

class _DominoesState extends State<DominoesGame> {
  late List<(int, int)> _mine, _cpu, _yard;
  final _line = <(int, int)>[];
  bool _over = false, _cpuTurn = false;
  String _msg = 'Your turn — play a tile that matches an end';
  late final int _start;

  @override
  void initState() {
    super.initState();
    final set = [for (var a = 0; a <= 6; a++) for (var b = a; b <= 6; b++) (a, b)]..shuffle(widget.args.rng);
    _mine = set.sublist(0, 7);
    _cpu = set.sublist(7, 14);
    _yard = set.sublist(14);
    _start = _mine.length;
    widget.args.onProgress(0, _start);
  }

  int get _left => _line.isEmpty ? -1 : _line.first.$1;
  int get _right => _line.isEmpty ? -1 : _line.last.$2;

  /// Can tile t go at this end? Returns the oriented tile or null.
  (int, int)? _fit((int, int) t, bool atLeft) {
    if (_line.isEmpty) return t;
    final end = atLeft ? _left : _right;
    if (atLeft) {
      if (t.$2 == end) return t;
      if (t.$1 == end) return (t.$2, t.$1);
    } else {
      if (t.$1 == end) return t;
      if (t.$2 == end) return (t.$2, t.$1);
    }
    return null;
  }

  bool _canPlay(List<(int, int)> hand) => hand.any((t) => _fit(t, true) != null || _fit(t, false) != null);

  void _place((int, int) t, List<(int, int)> hand) {
    final r = _fit(t, false);
    final l = _fit(t, true);
    if (r != null) {
      _line.add(r);
    } else if (l != null) {
      _line.insert(0, l);
    }
    hand.remove(t);
  }

  void _tap((int, int) t) {
    if (_over || _cpuTurn || (_fit(t, true) == null && _fit(t, false) == null)) return;
    HapticFeedback.selectionClick();
    setState(() => _place(t, _mine));
    widget.args.onProgress(_start - _mine.length, _start);
    if (_mine.isEmpty) {
      _over = true;
      widget.args.onComplete();
      return;
    }
    _cpuTurn = true;
    Future<void>.delayed(const Duration(milliseconds: 600), _cpuPlay);
  }

  void _draw() {
    if (_over || _cpuTurn) return;
    if (_canPlay(_mine)) {
      setState(() => _msg = 'You have a tile you can play');
      return;
    }
    if (_yard.isEmpty) {
      _cpuTurn = true;
      setState(() => _msg = 'No tiles to draw — you pass');
      Future<void>.delayed(const Duration(milliseconds: 600), _cpuPlay);
      return;
    }
    setState(() => _mine.add(_yard.removeLast()));
  }

  void _cpuPlay() {
    if (!mounted || _over) return;
    final r = widget.args.rng;
    while (!_canPlay(_cpu) && _yard.isNotEmpty) {
      _cpu.add(_yard.removeLast());
    }
    final playable = _cpu.where((t) => _fit(t, true) != null || _fit(t, false) != null).toList();
    if (playable.isEmpty) {
      setState(() {
        _cpuTurn = false;
        _msg = 'Computer passes';
      });
      if (!_canPlay(_mine) && _yard.isEmpty) _blocked();
      return;
    }
    // Smart: dump the heaviest tile (fewer points stuck in hand).
    final t = _smart(widget.level, r) ? playable.reduce((a, b) => a.$1 + a.$2 >= b.$1 + b.$2 ? a : b) : playable[r.nextInt(playable.length)];
    setState(() {
      _place(t, _cpu);
      _cpuTurn = false;
      _msg = 'Computer played ${t.$1}|${t.$2} · it has ${_cpu.length} left';
    });
    if (_cpu.isEmpty) {
      _over = true;
      widget.args.onKnockout('The computer played out first');
    } else if (!_canPlay(_mine) && !_canPlay(_cpu) && _yard.isEmpty) {
      _blocked();
    }
  }

  void _blocked() {
    _over = true;
    final mine = _mine.fold(0, (s, t) => s + t.$1 + t.$2), theirs = _cpu.fold(0, (s, t) => s + t.$1 + t.$2);
    if (mine < theirs) {
      widget.args.onComplete();
    } else {
      widget.args.onKnockout('Blocked — the computer had fewer dots');
    }
  }

  Widget _tile((int, int) t, {bool vertical = false, VoidCallback? onTap, bool dim = false}) => GestureDetector(
        onTap: onTap,
        child: Opacity(
          opacity: dim ? 0.35 : 1,
          child: Container(
            margin: const EdgeInsets.all(2),
            padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(6), border: Border.all(color: Colors.black45)),
            child: Flex(
              direction: vertical ? Axis.vertical : Axis.horizontal,
              mainAxisSize: MainAxisSize.min,
              children: [
                Text('${t.$1}', style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 16)),
                Container(width: vertical ? 16 : 1.5, height: vertical ? 1.5 : 16, color: Colors.black54, margin: const EdgeInsets.all(3)),
                Text('${t.$2}', style: const TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 16)),
              ],
            ),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) => Stack(children: [
        arcadeBackdrop(const [Color(0xFF1E293B), Color(0xFF020617)]),
        Column(children: [
          ArcadeBanner(child: Text('You ${_mine.length} · CPU ${_cpu.length} · yard ${_yard.length}')),
          _cpuSays(_msg),
          Expanded(
            child: Center(
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                padding: const EdgeInsets.all(10),
                child: Row(children: [for (final t in _line) _tile(t)]),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 0, 8, 6),
            child: Wrap(alignment: WrapAlignment.center, children: [
              for (final t in _mine) _tile(t, vertical: true, onTap: () => _tap(t), dim: _line.isNotEmpty && _fit(t, true) == null && _fit(t, false) == null),
            ]),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(18, 0, 18, 14),
            child: SizedBox(width: double.infinity, height: 46, child: OutlinedButton(onPressed: _draw, style: OutlinedButton.styleFrom(foregroundColor: Colors.white, side: const BorderSide(color: Colors.white38)), child: const Text('Draw / pass'))),
          ),
        ]),
      ]);
}
