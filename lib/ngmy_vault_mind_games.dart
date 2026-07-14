import 'dart:async';
import 'dart:math' as math;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'ngmy_vault_games.dart';

/// Shared chrome for Vault Channel mind / strategy games.
Widget _mindChrome({
  required BuildContext context,
  required String title,
  required List<Color> colors,
  required String status,
  required Widget child,
}) {
  return Scaffold(
    backgroundColor: const Color(0xFF030712),
    body: SafeArea(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.fromLTRB(6, 6, 16, 6),
            child: Row(
              children: [
                IconButton(
                  onPressed: () => Navigator.pop(context),
                  icon: const Icon(Icons.close_rounded, color: Colors.white70),
                ),
                Expanded(
                  child: Text(
                    title,
                    textAlign: TextAlign.center,
                    style: TextStyle(
                      color: colors.first,
                      fontWeight: FontWeight.w900,
                      letterSpacing: 1.2,
                      fontSize: 14,
                    ),
                  ),
                ),
                const SizedBox(width: 40),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Align(
              alignment: Alignment.centerLeft,
              child: Text(
                status,
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 14),
              ),
            ),
          ),
          const SizedBox(height: 8),
          Expanded(child: child),
        ],
      ),
    ),
  );
}

class _MindEndCard extends StatelessWidget {
  const _MindEndCard({
    required this.score,
    required this.coins,
    required this.colors,
    required this.onAgain,
    required this.onExit,
  });

  final int score;
  final int coins;
  final List<Color> colors;
  final VoidCallback onAgain;
  final VoidCallback onExit;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.black.withValues(alpha: 0.74),
      alignment: Alignment.center,
      child: TweenAnimationBuilder<double>(
        tween: Tween(begin: 0, end: 1),
        duration: const Duration(milliseconds: 460),
        curve: Curves.elasticOut,
        builder: (context, t, child) => Transform.scale(scale: t.clamp(0, 1.2), child: Opacity(opacity: t.clamp(0, 1), child: child)),
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 36),
          padding: const EdgeInsets.all(24),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(colors: [colors.first.withValues(alpha: 0.28), const Color(0xFF0B0A16)]),
            border: Border.all(color: colors.first.withValues(alpha: 0.6)),
            boxShadow: [BoxShadow(color: colors.first.withValues(alpha: 0.35), blurRadius: 30)],
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.emoji_events_rounded, color: colors.first, size: 46),
              const SizedBox(height: 10),
              const Text('RUN COMPLETE', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.4)),
              const SizedBox(height: 14),
              Text('$score', style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, fontSize: 40)),
              const Text('SCORE', style: TextStyle(color: Colors.white38, fontWeight: FontWeight.w800, fontSize: 11, letterSpacing: 1.2)),
              const SizedBox(height: 10),
              Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  const Icon(Icons.monetization_on_rounded, color: Color(0xFFFBBF24), size: 18),
                  const SizedBox(width: 4),
                  Text('+$coins coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 15)),
                ],
              ),
              const SizedBox(height: 20),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton(
                      onPressed: onExit,
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                      child: const Text('Exit'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton(
                      onPressed: onAgain,
                      style: FilledButton.styleFrom(backgroundColor: colors.first),
                      child: const Text('Play Again', style: TextStyle(fontWeight: FontWeight.w900)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

Future<void> _persistMindRun({
  required String gameId,
  required int score,
  required int coins,
}) async {
  // saveRun records progress and banks wallet coins when coinsEarned > 0.
  await VaultProgressStore.saveRun(gameId: gameId, level: 1, score: score, coinsEarned: coins);
}

// ── 1. Merge 2048 ──────────────────────────────────────────────────────────

class NgmyVaultMerge2048Game extends StatefulWidget {
  const NgmyVaultMerge2048Game({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultMerge2048Game> createState() => _Merge2048State();
}

class _Merge2048State extends State<NgmyVaultMerge2048Game> {
  final _rnd = math.Random();
  late List<List<int>> _grid;
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  bool _won = false;

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _resetBoard();
  }

  void _resetBoard() {
    _grid = List.generate(4, (_) => List.filled(4, 0));
    _score = 0;
    _coins = 0;
    _over = false;
    _won = false;
    _spawn();
    _spawn();
  }

  void _spawn() {
    final empty = <(int, int)>[];
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if (_grid[r][c] == 0) empty.add((r, c));
      }
    }
    if (empty.isEmpty) return;
    final pick = empty[_rnd.nextInt(empty.length)];
    _grid[pick.$1][pick.$2] = _rnd.nextDouble() < 0.9 ? 2 : 4;
  }

  bool _canMove() {
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if (_grid[r][c] == 0) return true;
        if (c < 3 && _grid[r][c] == _grid[r][c + 1]) return true;
        if (r < 3 && _grid[r][c] == _grid[r + 1][c]) return true;
      }
    }
    return false;
  }

  List<int> _slideLine(List<int> line) {
    final filtered = line.where((v) => v != 0).toList();
    final out = <int>[];
    for (var i = 0; i < filtered.length; i++) {
      if (i + 1 < filtered.length && filtered[i] == filtered[i + 1]) {
        final merged = filtered[i] * 2;
        out.add(merged);
        _score += merged;
        i++;
      } else {
        out.add(filtered[i]);
      }
    }
    while (out.length < 4) {
      out.add(0);
    }
    return out;
  }

  bool _apply(List<List<int>> next) {
    var changed = false;
    for (var r = 0; r < 4; r++) {
      for (var c = 0; c < 4; c++) {
        if (next[r][c] != _grid[r][c]) changed = true;
      }
    }
    if (!changed) return false;
    _grid = next;
    _spawn();
    return true;
  }

  void _swipe(int dr, int dc) {
    if (_over) return;
    final next = List.generate(4, (r) => List<int>.from(_grid[r]));
    if (dr == 0) {
      for (var r = 0; r < 4; r++) {
        final line = List<int>.from(next[r]);
        final slid = dc < 0 ? _slideLine(line) : _slideLine(line.reversed.toList()).reversed.toList();
        next[r] = slid;
      }
    } else {
      for (var c = 0; c < 4; c++) {
        final line = [next[0][c], next[1][c], next[2][c], next[3][c]];
        final slid = dr < 0 ? _slideLine(line) : _slideLine(line.reversed.toList()).reversed.toList();
        for (var r = 0; r < 4; r++) {
          next[r][c] = slid[r];
        }
      }
    }
    if (!_apply(next)) return;
    HapticFeedback.selectionClick();
    var hit2048 = false;
    for (final row in _grid) {
      for (final v in row) {
        if (v >= 2048) hit2048 = true;
      }
    }
    if (hit2048 && !_won) {
      _won = true;
      _finish();
      return;
    }
    if (!_canMove()) {
      _finish();
      return;
    }
    setState(() {});
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = _score ~/ 24;
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(_resetBoard);
  }

  Color _tileColor(int v) {
    if (v == 0) return const Color(0xFF111827);
    final t = (math.log(v) / math.ln2).clamp(1, 11) / 11;
    return Color.lerp(_c.first.withValues(alpha: 0.35), _c.last, t)!;
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score${_won ? '  ·  2048+' : ''}',
          child: GestureDetector(
            onHorizontalDragEnd: (d) {
              final v = d.primaryVelocity ?? 0;
              if (v.abs() < 80) return;
              _swipe(0, v < 0 ? -1 : 1);
            },
            onVerticalDragEnd: (d) {
              final v = d.primaryVelocity ?? 0;
              if (v.abs() < 80) return;
              _swipe(v < 0 ? -1 : 1, 0);
            },
            child: Padding(
              padding: const EdgeInsets.all(20),
              child: AspectRatio(
                aspectRatio: 1,
                child: Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    color: const Color(0xFF0B1220),
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: _c.first.withValues(alpha: 0.35)),
                  ),
                  child: Column(
                    children: List.generate(4, (r) {
                      return Expanded(
                        child: Row(
                          children: List.generate(4, (c) {
                            final v = _grid[r][c];
                            return Expanded(
                              child: Container(
                                margin: const EdgeInsets.all(4),
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  color: _tileColor(v),
                                  borderRadius: BorderRadius.circular(12),
                                  border: Border.all(color: Colors.white.withValues(alpha: 0.06)),
                                ),
                                child: v == 0
                                    ? null
                                    : Text(
                                        '$v',
                                        style: TextStyle(
                                          color: Colors.white.withValues(alpha: v < 8 ? 0.85 : 1),
                                          fontWeight: FontWeight.w900,
                                          fontSize: v >= 1024 ? 20 : 26,
                                        ),
                                      ),
                              ),
                            );
                          }),
                        ),
                      );
                    }),
                  ),
                ),
              ),
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

// ── 2. Code Breaker (Mastermind) ───────────────────────────────────────────

class NgmyVaultCodeBreakerGame extends StatefulWidget {
  const NgmyVaultCodeBreakerGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultCodeBreakerGame> createState() => _CodeBreakerState();
}

class _CodeBreakerState extends State<NgmyVaultCodeBreakerGame> {
  final _rnd = math.Random();
  late List<int> _secret;
  final List<List<int>> _guesses = [];
  final List<(int, int)> _feedback = [];
  List<int> _current = [];
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  bool _won = false;

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _reset();
  }

  void _reset() {
    _secret = List.generate(4, (_) => 1 + _rnd.nextInt(6));
    _guesses.clear();
    _feedback.clear();
    _current = [];
    _score = 0;
    _coins = 0;
    _over = false;
    _won = false;
  }

  (int, int) _grade(List<int> guess) {
    var black = 0;
    final secretLeft = <int>[];
    final guessLeft = <int>[];
    for (var i = 0; i < 4; i++) {
      if (guess[i] == _secret[i]) {
        black++;
      } else {
        secretLeft.add(_secret[i]);
        guessLeft.add(guess[i]);
      }
    }
    var white = 0;
    for (final g in guessLeft) {
      final idx = secretLeft.indexOf(g);
      if (idx >= 0) {
        white++;
        secretLeft.removeAt(idx);
      }
    }
    return (black, white);
  }

  void _tapDigit(int d) {
    if (_over || _current.length >= 4) return;
    HapticFeedback.selectionClick();
    setState(() => _current.add(d));
  }

  void _backspace() {
    if (_over || _current.isEmpty) return;
    setState(() => _current.removeLast());
  }

  Future<void> _submit() async {
    if (_over || _current.length != 4) return;
    final guess = List<int>.from(_current);
    final grade = _grade(guess);
    HapticFeedback.mediumImpact();
    setState(() {
      _guesses.add(guess);
      _feedback.add(grade);
      _current = [];
      _score += grade.$1 * 10 + grade.$2 * 4;
    });
    if (grade.$1 == 4) {
      _won = true;
      _score += 80 + (8 - _guesses.length) * 12;
      await _finish();
      return;
    }
    if (_guesses.length >= 8) {
      await _finish();
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = _won ? 40 + math.max(0, 8 - _guesses.length) * 4 : math.max(5, _score ~/ 8);
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_reset);

  Widget _pegRow(List<int> digits, {(int, int)? fb, bool ghost = false}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(
        children: [
          ...List.generate(4, (i) {
            final v = i < digits.length ? digits[i] : 0;
            return Container(
              width: 40,
              height: 40,
              margin: const EdgeInsets.only(right: 8),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
                color: v == 0 ? const Color(0xFF111827) : Color.lerp(_c.first, _c.last, (v - 1) / 5)!.withValues(alpha: ghost ? 0.55 : 0.9),
                border: Border.all(color: Colors.white24),
              ),
              child: v == 0 ? null : Text('$v', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
            );
          }),
          const Spacer(),
          if (fb != null)
            Row(
              children: [
                ...List.generate(fb.$1, (_) => _dot(Colors.white)),
                ...List.generate(fb.$2, (_) => _dot(Colors.white38)),
              ],
            ),
        ],
      ),
    );
  }

  Widget _dot(Color color) => Container(
        width: 10,
        height: 10,
        margin: const EdgeInsets.only(left: 4),
        decoration: BoxDecoration(shape: BoxShape.circle, color: color),
      );

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  ${_guesses.length}/8',
          child: Padding(
            padding: const EdgeInsets.fromLTRB(20, 0, 20, 16),
            child: Column(
              children: [
                Expanded(
                  child: ListView(
                    children: [
                      for (var i = 0; i < _guesses.length; i++) _pegRow(_guesses[i], fb: _feedback[i]),
                      if (!_over) _pegRow(_current, ghost: true),
                    ],
                  ),
                ),
                const SizedBox(height: 8),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    for (var d = 1; d <= 6; d++)
                      ActionChip(
                        label: Text('$d', style: const TextStyle(fontWeight: FontWeight.w900)),
                        onPressed: () => _tapDigit(d),
                        backgroundColor: Color.lerp(_c.first, _c.last, (d - 1) / 5)!.withValues(alpha: 0.35),
                        side: BorderSide(color: _c.first.withValues(alpha: 0.5)),
                        labelStyle: const TextStyle(color: Colors.white),
                      ),
                  ],
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: _backspace,
                        style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                        child: const Text('Del'),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      flex: 2,
                      child: FilledButton(
                        onPressed: _current.length == 4 ? _submit : null,
                        style: FilledButton.styleFrom(backgroundColor: _c.first),
                        child: const Text('Submit', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

// ── 3. Connect Four ────────────────────────────────────────────────────────

class NgmyVaultConnectFourGame extends StatefulWidget {
  const NgmyVaultConnectFourGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultConnectFourGame> createState() => _ConnectFourState();
}

class _ConnectFourState extends State<NgmyVaultConnectFourGame> {
  static const cols = 7;
  static const rows = 6;
  late List<List<int>> _board; // 0 empty, 1 player (yellow), 2 AI (red)
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  bool _busy = false;
  String _msg = 'Your turn';

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _reset();
  }

  void _reset() {
    _board = List.generate(rows, (_) => List.filled(cols, 0));
    _score = 0;
    _coins = 0;
    _over = false;
    _busy = false;
    _msg = 'Your turn';
  }

  bool _drop(int col, int player) {
    for (var r = rows - 1; r >= 0; r--) {
      if (_board[r][col] == 0) {
        _board[r][col] = player;
        return true;
      }
    }
    return false;
  }

  bool _full() => _board.every((row) => row.every((c) => c != 0));

  bool _wins(int player) {
    const dirs = [(0, 1), (1, 0), (1, 1), (1, -1)];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        if (_board[r][c] != player) continue;
        for (final d in dirs) {
          var ok = true;
          for (var k = 1; k < 4; k++) {
            final nr = r + d.$1 * k;
            final nc = c + d.$2 * k;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || _board[nr][nc] != player) {
              ok = false;
              break;
            }
          }
          if (ok) return true;
        }
      }
    }
    return false;
  }

  List<int> _validCols(List<List<int>> b) {
    final out = <int>[];
    for (var c = 0; c < cols; c++) {
      if (b[0][c] == 0) out.add(c);
    }
    return out;
  }

  int _evalWindow(List<int> window, int player) {
    final opp = 3 - player;
    final count = window.where((v) => v == player).length;
    final empty = window.where((v) => v == 0).length;
    final bad = window.where((v) => v == opp).length;
    if (count == 4) return 10000;
    if (bad == 4) return -10000;
    if (count == 3 && empty == 1) return 120;
    if (count == 2 && empty == 2) return 20;
    if (bad == 3 && empty == 1) return -140;
    if (bad == 2 && empty == 2) return -18;
    return 0;
  }

  int _scoreBoard(List<List<int>> b, int player) {
    var score = 0;
    final center = cols ~/ 2;
    for (var r = 0; r < rows; r++) {
      if (b[r][center] == player) score += 6;
    }
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols - 3; c++) {
        score += _evalWindow([b[r][c], b[r][c + 1], b[r][c + 2], b[r][c + 3]], player);
      }
    }
    for (var c = 0; c < cols; c++) {
      for (var r = 0; r < rows - 3; r++) {
        score += _evalWindow([b[r][c], b[r + 1][c], b[r + 2][c], b[r + 3][c]], player);
      }
    }
    for (var r = 0; r < rows - 3; r++) {
      for (var c = 0; c < cols - 3; c++) {
        score += _evalWindow([b[r][c], b[r + 1][c + 1], b[r + 2][c + 2], b[r + 3][c + 3]], player);
      }
    }
    for (var r = 3; r < rows; r++) {
      for (var c = 0; c < cols - 3; c++) {
        score += _evalWindow([b[r][c], b[r - 1][c + 1], b[r - 2][c + 2], b[r - 3][c + 3]], player);
      }
    }
    return score;
  }

  bool _winsOn(List<List<int>> b, int player) {
    const dirs = [(0, 1), (1, 0), (1, 1), (1, -1)];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        if (b[r][c] != player) continue;
        for (final d in dirs) {
          var ok = true;
          for (var k = 1; k < 4; k++) {
            final nr = r + d.$1 * k;
            final nc = c + d.$2 * k;
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || b[nr][nc] != player) {
              ok = false;
              break;
            }
          }
          if (ok) return true;
        }
      }
    }
    return false;
  }

  bool _dropOn(List<List<int>> b, int col, int player) {
    for (var r = rows - 1; r >= 0; r--) {
      if (b[r][col] == 0) {
        b[r][col] = player;
        return true;
      }
    }
    return false;
  }

  (int, int) _minimax(List<List<int>> b, int depth, int alpha, int beta, bool maximizing) {
    final valid = _validCols(b);
    final termWin = _winsOn(b, 2);
    final termLose = _winsOn(b, 1);
    if (termWin) return (100000 + depth, -1);
    if (termLose) return (-100000 - depth, -1);
    if (valid.isEmpty) return (0, -1);
    if (depth == 0) return (_scoreBoard(b, 2), -1);

    if (maximizing) {
      var value = -0x3fffffff;
      var bestCol = valid[valid.length ~/ 2];
      final order = [...valid]..sort((a, b) => (a - 3).abs().compareTo((b - 3).abs()));
      for (final col in order) {
        final copy = List.generate(rows, (r) => List<int>.from(b[r]));
        _dropOn(copy, col, 2);
        final score = _minimax(copy, depth - 1, alpha, beta, false).$1;
        if (score > value) {
          value = score;
          bestCol = col;
        }
        alpha = math.max(alpha, value);
        if (alpha >= beta) break;
      }
      return (value, bestCol);
    } else {
      var value = 0x3fffffff;
      var bestCol = valid[valid.length ~/ 2];
      final order = [...valid]..sort((a, b) => (a - 3).abs().compareTo((b - 3).abs()));
      for (final col in order) {
        final copy = List.generate(rows, (r) => List<int>.from(b[r]));
        _dropOn(copy, col, 1);
        final score = _minimax(copy, depth - 1, alpha, beta, true).$1;
        if (score < value) {
          value = score;
          bestCol = col;
        }
        beta = math.min(beta, value);
        if (alpha >= beta) break;
      }
      return (value, bestCol);
    }
  }

  Future<void> _tapCol(int col) async {
    if (_over || _busy) return;
    if (!_drop(col, 1)) return;
    HapticFeedback.lightImpact();
    setState(() => _msg = 'AI thinking…');
    if (_wins(1)) {
      _score = 100;
      _msg = 'You win';
      await _finish();
      return;
    }
    if (_full()) {
      _score = 40;
      _msg = 'Draw';
      await _finish();
      return;
    }
    _busy = true;
    setState(() {});
    await Future<void>.delayed(const Duration(milliseconds: 280));
    if (!mounted) return;
    final move = _minimax(_board, 4, -0x3fffffff, 0x3fffffff, true).$2;
    if (move >= 0) _drop(move, 2);
    _busy = false;
    if (_wins(2)) {
      _score = 10;
      _msg = 'AI wins';
      await _finish();
      return;
    }
    if (_full()) {
      _score = 40;
      _msg = 'Draw';
      await _finish();
      return;
    }
    setState(() => _msg = 'Your turn');
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = math.max(2, _score ~/ 4);
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_reset);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  $_msg',
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: AspectRatio(
              aspectRatio: cols / rows,
              child: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: const Color(0xFF0B1220),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: _c.first.withValues(alpha: 0.4)),
                ),
                child: Column(
                  children: List.generate(rows, (r) {
                    return Expanded(
                      child: Row(
                        children: List.generate(cols, (c) {
                          final v = _board[r][c];
                          return Expanded(
                            child: GestureDetector(
                              onTap: () => _tapCol(c),
                              child: Container(
                                margin: const EdgeInsets.all(3),
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  color: v == 0
                                      ? const Color(0xFF111827)
                                      : v == 1
                                          ? const Color(0xFFFBBF24)
                                          : const Color(0xFFEF4444),
                                  border: Border.all(color: Colors.white12),
                                ),
                              ),
                            ),
                          );
                        }),
                      ),
                    );
                  }),
                ),
              ),
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

// ── 4. Slide Lock (15-puzzle) ──────────────────────────────────────────────

class NgmyVaultSlideLockGame extends StatefulWidget {
  const NgmyVaultSlideLockGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultSlideLockGame> createState() => _SlideLockState();
}

class _SlideLockState extends State<NgmyVaultSlideLockGame> {
  final _rnd = math.Random();
  late List<int> _tiles; // 0 = empty
  int _moves = 0;
  int _score = 0;
  int _coins = 0;
  bool _over = false;

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _shuffle();
  }

  int _inversions(List<int> t) {
    var inv = 0;
    final flat = t.where((v) => v != 0).toList();
    for (var i = 0; i < flat.length; i++) {
      for (var j = i + 1; j < flat.length; j++) {
        if (flat[i] > flat[j]) inv++;
      }
    }
    return inv;
  }

  /// 4×4 sliding puzzle: solvable iff inversions + blank-row-from-bottom is even.
  bool _isSolvable(List<int> t) {
    final blank = t.indexOf(0);
    final blankRowFromBottom = 4 - (blank ~/ 4); // 1..4
    return (_inversions(t) + blankRowFromBottom).isEven;
  }

  void _shuffle() {
    do {
      _tiles = List.generate(16, (i) => i);
      _tiles.shuffle(_rnd);
    } while (!_isSolvable(_tiles) || _isSolved());
    _moves = 0;
    _score = 200;
    _coins = 0;
    _over = false;
  }

  bool _isSolved() {
    for (var i = 0; i < 15; i++) {
      if (_tiles[i] != i + 1) return false;
    }
    return _tiles[15] == 0;
  }

  Future<void> _tap(int i) async {
    if (_over) return;
    final empty = _tiles.indexOf(0);
    final er = empty ~/ 4;
    final ec = empty % 4;
    final r = i ~/ 4;
    final c = i % 4;
    if ((er == r && (ec - c).abs() == 1) || (ec == c && (er - r).abs() == 1)) {
      HapticFeedback.selectionClick();
      setState(() {
        _tiles[empty] = _tiles[i];
        _tiles[i] = 0;
        _moves++;
        _score = math.max(10, 200 - _moves);
      });
      if (_isSolved()) await _finish();
    } else {
      HapticFeedback.heavyImpact();
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = math.max(10, _score ~/ 5);
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_shuffle);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  MOVES  $_moves',
          child: Padding(
            padding: const EdgeInsets.all(20),
            child: AspectRatio(
              aspectRatio: 1,
              child: Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: const Color(0xFF0B1220),
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: _c.first.withValues(alpha: 0.4)),
                ),
                child: GridView.builder(
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 4, mainAxisSpacing: 6, crossAxisSpacing: 6),
                  itemCount: 16,
                  itemBuilder: (_, i) {
                    final v = _tiles[i];
                    if (v == 0) {
                      return Container(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          color: const Color(0xFF111827),
                          border: Border.all(color: Colors.white10),
                        ),
                      );
                    }
                    return GestureDetector(
                      onTap: () => _tap(i),
                      child: Container(
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(10),
                          gradient: LinearGradient(colors: [_c.first.withValues(alpha: 0.85), _c.last.withValues(alpha: 0.7)]),
                          border: Border.all(color: Colors.white24),
                        ),
                        child: Text('$v', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
                      ),
                    );
                  },
                ),
              ),
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

// ── 5. Sudoku Six ──────────────────────────────────────────────────────────

class NgmyVaultSudokuSixGame extends StatefulWidget {
  const NgmyVaultSudokuSixGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultSudokuSixGame> createState() => _SudokuSixState();
}

class _SudokuSixState extends State<NgmyVaultSudokuSixGame> {
  final _rnd = math.Random();
  late List<List<int>> _solution;
  late List<List<int>> _grid;
  late List<List<bool>> _fixed;
  int _selected = 1;
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  String _hint = 'Pick a number, then a cell';

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _newPuzzle();
  }

  List<List<int>> _generateSolved() {
    final g = List.generate(6, (_) => List.filled(6, 0));
    bool ok(int r, int c, int n) {
      for (var i = 0; i < 6; i++) {
        if (g[r][i] == n || g[i][c] == n) return false;
      }
      final br = (r ~/ 2) * 2;
      final bc = (c ~/ 3) * 3;
      for (var i = br; i < br + 2; i++) {
        for (var j = bc; j < bc + 3; j++) {
          if (g[i][j] == n) return false;
        }
      }
      return true;
    }

    bool fill(int pos) {
      if (pos == 36) return true;
      final r = pos ~/ 6;
      final c = pos % 6;
      final nums = [1, 2, 3, 4, 5, 6]..shuffle(_rnd);
      for (final n in nums) {
        if (!ok(r, c, n)) continue;
        g[r][c] = n;
        if (fill(pos + 1)) return true;
        g[r][c] = 0;
      }
      return false;
    }

    fill(0);
    return g;
  }

  void _newPuzzle() {
    _solution = _generateSolved();
    _grid = List.generate(6, (r) => List<int>.from(_solution[r]));
    _fixed = List.generate(6, (_) => List.filled(6, false));
    final positions = List.generate(36, (i) => i)..shuffle(_rnd);
    // Clear most cells, keep ~12 fixed clues.
    for (var k = 0; k < 36 - 12; k++) {
      final p = positions[k];
      _grid[p ~/ 6][p % 6] = 0;
    }
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 6; c++) {
        _fixed[r][c] = _grid[r][c] != 0;
      }
    }
    _selected = 1;
    _score = 0;
    _coins = 0;
    _over = false;
    _hint = 'Pick a number, then a cell';
  }

  bool _validAt(int r, int c, int n) {
    for (var i = 0; i < 6; i++) {
      if (i != c && _grid[r][i] == n) return false;
      if (i != r && _grid[i][c] == n) return false;
    }
    final br = (r ~/ 2) * 2;
    final bc = (c ~/ 3) * 3;
    for (var i = br; i < br + 2; i++) {
      for (var j = bc; j < bc + 3; j++) {
        if ((i != r || j != c) && _grid[i][j] == n) return false;
      }
    }
    return true;
  }

  Future<void> _tapCell(int r, int c) async {
    if (_over || _fixed[r][c]) return;
    HapticFeedback.selectionClick();
    setState(() {
      if (_grid[r][c] == _selected) {
        _grid[r][c] = 0;
      } else {
        _grid[r][c] = _selected;
      }
    });
    if (_isComplete()) await _check(auto: true);
  }

  bool _isComplete() {
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 6; c++) {
        if (_grid[r][c] == 0) return false;
      }
    }
    return true;
  }

  Future<void> _check({bool auto = false}) async {
    if (_over) return;
    var mistakes = 0;
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 6; c++) {
        final v = _grid[r][c];
        if (v == 0) continue;
        if (!_validAt(r, c, v) || v != _solution[r][c]) mistakes++;
      }
    }
    if (!_isComplete()) {
      setState(() => _hint = mistakes == 0 ? 'Looking good — keep going' : '$mistakes conflict${mistakes == 1 ? '' : 's'}');
      if (!auto) HapticFeedback.mediumImpact();
      return;
    }
    if (mistakes == 0) {
      HapticFeedback.mediumImpact();
      _score = 120;
      await _finish();
    } else {
      setState(() => _hint = 'Not solved — $mistakes wrong');
      HapticFeedback.heavyImpact();
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = 50;
    setState(() {
      _over = true;
      _hint = 'Solved';
    });
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_newPuzzle);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  $_hint',
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
            child: Column(
              children: [
                Expanded(
                  child: AspectRatio(
                    aspectRatio: 1,
                    child: Container(
                      padding: const EdgeInsets.all(6),
                      decoration: BoxDecoration(
                        color: const Color(0xFF0B1220),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: _c.first.withValues(alpha: 0.45)),
                      ),
                      child: Column(
                        children: List.generate(6, (r) {
                          return Expanded(
                            child: Row(
                              children: List.generate(6, (c) {
                                final v = _grid[r][c];
                                final thickR = r % 2 == 0;
                                final thickC = c % 3 == 0;
                                return Expanded(
                                  child: GestureDetector(
                                    onTap: () => _tapCell(r, c),
                                    child: Container(
                                      margin: EdgeInsets.only(
                                        left: thickC ? 2 : 0.5,
                                        top: thickR ? 2 : 0.5,
                                        right: 0.5,
                                        bottom: 0.5,
                                      ),
                                      alignment: Alignment.center,
                                      decoration: BoxDecoration(
                                        color: _fixed[r][c] ? const Color(0xFF1E293B) : const Color(0xFF111827),
                                        border: Border.all(
                                          color: v != 0 && !_validAt(r, c, v) ? const Color(0xFFEF4444) : Colors.white12,
                                        ),
                                      ),
                                      child: Text(
                                        v == 0 ? '' : '$v',
                                        style: TextStyle(
                                          color: _fixed[r][c] ? Colors.white70 : _c.first,
                                          fontWeight: FontWeight.w900,
                                          fontSize: 20,
                                        ),
                                      ),
                                    ),
                                  ),
                                );
                              }),
                            ),
                          );
                        }),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: List.generate(6, (i) {
                    final n = i + 1;
                    final on = _selected == n;
                    return Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 4),
                      child: ChoiceChip(
                        label: Text('$n', style: TextStyle(fontWeight: FontWeight.w900, color: on ? Colors.black : Colors.white)),
                        selected: on,
                        onSelected: (_) => setState(() => _selected = n),
                        selectedColor: _c.first,
                        backgroundColor: const Color(0xFF1E293B),
                      ),
                    );
                  }),
                ),
                const SizedBox(height: 10),
                FilledButton(
                  onPressed: () => _check(),
                  style: FilledButton.styleFrom(backgroundColor: _c.first),
                  child: const Text('Check', style: TextStyle(fontWeight: FontWeight.w900)),
                ),
              ],
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

// ── 6. Cipher Five (Wordle-like) ───────────────────────────────────────────

class NgmyVaultCipherFiveGame extends StatefulWidget {
  const NgmyVaultCipherFiveGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultCipherFiveGame> createState() => _CipherFiveState();
}

class _CipherFiveState extends State<NgmyVaultCipherFiveGame> {
  static const _words = <String>[
    'APPLE', 'BRAIN', 'STONE', 'CLOUD', 'FLAME', 'GRAPE', 'HEART', 'IVORY', 'JUDGE', 'KNIFE',
    'LEMON', 'MANGO', 'NIGHT', 'OCEAN', 'PAPER', 'QUEEN', 'RIVER', 'STORM', 'TABLE', 'UNITY',
    'VOICE', 'WATER', 'YOUTH', 'ZEBRA', 'BREAD', 'CHAIR', 'DREAM', 'EARTH', 'FIELD', 'GLASS',
    'HOUSE', 'IMAGE', 'JEWEL', 'LIGHT', 'MUSIC', 'NORTH', 'PLANT', 'RADIO', 'SUGAR', 'TRAIN',
  ];

  final _rnd = math.Random();
  late String _secret;
  final List<String> _guesses = [];
  String _current = '';
  final Map<String, int> _keyState = {}; // 0 gray, 1 yellow, 2 green
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  bool _won = false;

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _reset();
  }

  void _reset() {
    _secret = _words[_rnd.nextInt(_words.length)];
    _guesses.clear();
    _current = '';
    _keyState.clear();
    _score = 0;
    _coins = 0;
    _over = false;
    _won = false;
  }

  List<int> _grade(String guess) {
    final result = List.filled(5, 0);
    final secretChars = _secret.split('');
    final used = List.filled(5, false);
    for (var i = 0; i < 5; i++) {
      if (guess[i] == _secret[i]) {
        result[i] = 2;
        used[i] = true;
      }
    }
    for (var i = 0; i < 5; i++) {
      if (result[i] == 2) continue;
      for (var j = 0; j < 5; j++) {
        if (!used[j] && guess[i] == secretChars[j]) {
          result[i] = 1;
          used[j] = true;
          break;
        }
      }
    }
    return result;
  }

  void _type(String ch) {
    if (_over || _current.length >= 5) return;
    HapticFeedback.selectionClick();
    setState(() => _current += ch);
  }

  void _back() {
    if (_over || _current.isEmpty) return;
    setState(() => _current = _current.substring(0, _current.length - 1));
  }

  Future<void> _enter() async {
    if (_over || _current.length != 5) return;
    final guess = _current.toUpperCase();
    final grade = _grade(guess);
    HapticFeedback.mediumImpact();
    setState(() {
      _guesses.add(guess);
      for (var i = 0; i < 5; i++) {
        final ch = guess[i];
        final prev = _keyState[ch] ?? -1;
        if (grade[i] > prev) _keyState[ch] = grade[i];
      }
      _current = '';
      _score += grade.where((g) => g == 2).length * 8 + grade.where((g) => g == 1).length * 3;
    });
    if (guess == _secret) {
      _won = true;
      _score += 60 + (6 - _guesses.length) * 10;
      await _finish();
      return;
    }
    if (_guesses.length >= 6) await _finish();
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = _won ? math.max(5, 35 - _guesses.length * 3) : 5;
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_reset);

  Color _tileBg(int state) {
    switch (state) {
      case 2:
        return const Color(0xFF16A34A);
      case 1:
        return const Color(0xFFCA8A04);
      case 0:
        return const Color(0xFF374151);
      default:
        return const Color(0xFF111827);
    }
  }

  Widget _row(String word, {List<int>? grade, bool active = false}) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(5, (i) {
        final ch = i < word.length ? word[i] : '';
        final st = grade != null && i < grade.length ? grade[i] : -1;
        return Container(
          width: 48,
          height: 52,
          margin: const EdgeInsets.all(3),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: _tileBg(st),
            borderRadius: BorderRadius.circular(8),
            border: Border.all(color: active && ch.isEmpty ? _c.first.withValues(alpha: 0.7) : Colors.white24),
          ),
          child: Text(ch, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
        );
      }),
    );
  }

  @override
  Widget build(BuildContext context) {
    const rows = [
      'QWERTYUIOP',
      'ASDFGHJKL',
      'ZXCVBNM',
    ];
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  ${_guesses.length}/6${_over && !_won ? '  ·  $_secret' : ''}',
          child: Padding(
            padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
            child: Column(
              children: [
                for (var i = 0; i < 6; i++)
                  i < _guesses.length
                      ? _row(_guesses[i], grade: _grade(_guesses[i]))
                      : _row(i == _guesses.length ? _current : '', active: i == _guesses.length),
                const Spacer(),
                for (final row in rows)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 6),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        if (row.startsWith('Z'))
                          _keyBtn('⌫', flex: 1.3, onTap: _back),
                        ...row.split('').map((ch) {
                          final st = _keyState[ch] ?? -1;
                          return _keyBtn(ch, bg: st >= 0 ? _tileBg(st) : const Color(0xFF1F2937), onTap: () => _type(ch));
                        }),
                        if (row.startsWith('Z'))
                          _keyBtn('GO', flex: 1.3, onTap: _enter, bg: _c.first.withValues(alpha: 0.85)),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }

  Widget _keyBtn(String label, {VoidCallback? onTap, Color? bg, double flex = 1}) {
    return Expanded(
      flex: (flex * 10).round(),
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 2),
        child: Material(
          color: bg ?? const Color(0xFF1F2937),
          borderRadius: BorderRadius.circular(8),
          child: InkWell(
            onTap: onTap,
            borderRadius: BorderRadius.circular(8),
            child: SizedBox(
              height: 44,
              child: Center(
                child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

// ── 7. Reversi Duel ────────────────────────────────────────────────────────

class NgmyVaultReversiDuelGame extends StatefulWidget {
  const NgmyVaultReversiDuelGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultReversiDuelGame> createState() => _ReversiState();
}

class _ReversiState extends State<NgmyVaultReversiDuelGame> {
  static const n = 8;
  late List<List<int>> _board; // 0 empty, 1 player (light), 2 AI (dark)
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  bool _busy = false;
  String _msg = 'Your move';

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _reset();
  }

  void _reset() {
    _board = List.generate(n, (_) => List.filled(n, 0));
    _board[3][3] = 1;
    _board[3][4] = 2;
    _board[4][3] = 2;
    _board[4][4] = 1;
    _score = 2;
    _coins = 0;
    _over = false;
    _busy = false;
    _msg = 'Your move';
  }

  static const _dirs = [
    (-1, -1), (-1, 0), (-1, 1),
    (0, -1), (0, 1),
    (1, -1), (1, 0), (1, 1),
  ];

  List<(int, int)> _flips(List<List<int>> b, int r, int c, int player) {
    if (b[r][c] != 0) return const [];
    final opp = 3 - player;
    final all = <(int, int)>[];
    for (final d in _dirs) {
      var nr = r + d.$1;
      var nc = c + d.$2;
      final line = <(int, int)>[];
      while (nr >= 0 && nr < n && nc >= 0 && nc < n && b[nr][nc] == opp) {
        line.add((nr, nc));
        nr += d.$1;
        nc += d.$2;
      }
      if (line.isNotEmpty && nr >= 0 && nr < n && nc >= 0 && nc < n && b[nr][nc] == player) {
        all.addAll(line);
      }
    }
    return all;
  }

  List<(int, int)> _moves(List<List<int>> b, int player) {
    final out = <(int, int)>[];
    for (var r = 0; r < n; r++) {
      for (var c = 0; c < n; c++) {
        if (_flips(b, r, c, player).isNotEmpty) out.add((r, c));
      }
    }
    return out;
  }

  void _apply(List<List<int>> b, int r, int c, int player) {
    final flips = _flips(b, r, c, player);
    b[r][c] = player;
    for (final f in flips) {
      b[f.$1][f.$2] = player;
    }
  }

  int _count(int player) {
    var t = 0;
    for (final row in _board) {
      for (final v in row) {
        if (v == player) t++;
      }
    }
    return t;
  }

  int _posWeight(int r, int c) {
    if ((r == 0 || r == 7) && (c == 0 || c == 7)) return 40;
    if (r == 0 || r == 7 || c == 0 || c == 7) return 10;
    return 1;
  }

  (int, int)? _aiPick() {
    final moves = _moves(_board, 2);
    if (moves.isEmpty) return null;
    (int, int)? best;
    var bestScore = -0x3fffffff;
    for (final m in moves) {
      final copy = List.generate(n, (r) => List<int>.from(_board[r]));
      _apply(copy, m.$1, m.$2, 2);
      var score = _flips(_board, m.$1, m.$2, 2).length * 3 + _posWeight(m.$1, m.$2);
      // 1-ply reply denial
      final replies = _moves(copy, 1);
      var replyThreat = 0;
      for (final r in replies) {
        replyThreat = math.max(replyThreat, _flips(copy, r.$1, r.$2, 1).length + _posWeight(r.$1, r.$2));
      }
      score -= replyThreat;
      if (score > bestScore) {
        bestScore = score;
        best = m;
      }
    }
    return best;
  }

  Future<void> _tap(int r, int c) async {
    if (_over || _busy) return;
    final flips = _flips(_board, r, c, 1);
    if (flips.isEmpty) {
      HapticFeedback.heavyImpact();
      return;
    }
    HapticFeedback.lightImpact();
    setState(() {
      _apply(_board, r, c, 1);
      _score = _count(1);
      _msg = 'AI thinking…';
    });
    _busy = true;
    await Future<void>.delayed(const Duration(milliseconds: 320));
    if (!mounted) return;

    Future<void> aiTurn() async {
      final pick = _aiPick();
      if (pick != null) {
        setState(() {
          _apply(_board, pick.$1, pick.$2, 2);
          _score = _count(1);
        });
      }
    }

    await aiTurn();
    // Pass handling
    while (!_over && mounted) {
      final pMoves = _moves(_board, 1);
      final aMoves = _moves(_board, 2);
      if (pMoves.isEmpty && aMoves.isEmpty) {
        await _finish();
        return;
      }
      if (pMoves.isEmpty && aMoves.isNotEmpty) {
        setState(() => _msg = 'You pass');
        await Future<void>.delayed(const Duration(milliseconds: 280));
        await aiTurn();
        continue;
      }
      break;
    }
    _busy = false;
    if (!mounted || _over) return;
    setState(() => _msg = 'Your move');
  }

  Future<void> _finish() async {
    if (_over) return;
    final p = _count(1);
    final a = _count(2);
    _score = p;
    _coins = math.max(5, p);
    _msg = p > a ? 'You win' : p < a ? 'AI wins' : 'Draw';
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_reset);

  @override
  Widget build(BuildContext context) {
    final highlights = _over || _busy ? const <(int, int)>{} : _moves(_board, 1).toSet();
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'YOU  ${_count(1)}  ·  AI  ${_count(2)}  ·  $_msg',
          child: Padding(
            padding: const EdgeInsets.all(12),
            child: AspectRatio(
              aspectRatio: 1,
              child: Container(
                padding: const EdgeInsets.all(6),
                decoration: BoxDecoration(
                  color: const Color(0xFF064E3B),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: _c.first.withValues(alpha: 0.5)),
                ),
                child: Column(
                  children: List.generate(n, (r) {
                    return Expanded(
                      child: Row(
                        children: List.generate(n, (c) {
                          final v = _board[r][c];
                          final hi = highlights.contains((r, c));
                          return Expanded(
                            child: GestureDetector(
                              onTap: () => _tap(r, c),
                              child: Container(
                                margin: const EdgeInsets.all(2),
                                decoration: BoxDecoration(
                                  color: const Color(0xFF047857),
                                  borderRadius: BorderRadius.circular(4),
                                  border: Border.all(color: hi ? Colors.white54 : Colors.black26),
                                ),
                                child: Center(
                                  child: v == 0
                                      ? (hi
                                          ? Container(
                                              width: 10,
                                              height: 10,
                                              decoration: BoxDecoration(
                                                shape: BoxShape.circle,
                                                color: Colors.white.withValues(alpha: 0.35),
                                              ),
                                            )
                                          : null)
                                      : Container(
                                          width: 28,
                                          height: 28,
                                          decoration: BoxDecoration(
                                            shape: BoxShape.circle,
                                            color: v == 1 ? const Color(0xFFF8FAFC) : const Color(0xFF0F172A),
                                            border: Border.all(color: Colors.black26),
                                          ),
                                        ),
                                ),
                              ),
                            ),
                          );
                        }),
                      ),
                    );
                  }),
                ),
              ),
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}

// ── 8. Hanoi Spire ─────────────────────────────────────────────────────────

class NgmyVaultHanoiSpireGame extends StatefulWidget {
  const NgmyVaultHanoiSpireGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultHanoiSpireGame> createState() => _HanoiState();
}

class _HanoiState extends State<NgmyVaultHanoiSpireGame> with SingleTickerProviderStateMixin {
  late List<List<int>> _pegs; // disk sizes, bottom to top (larger first)
  int? _selected;
  int _moves = 0;
  int _score = 100;
  int _coins = 0;
  bool _over = false;
  late AnimationController _shake;
  String _hint = 'Move 4 disks to the right peg';

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _shake = AnimationController(vsync: this, duration: const Duration(milliseconds: 280));
    _reset();
  }

  @override
  void dispose() {
    _shake.dispose();
    super.dispose();
  }

  void _reset() {
    _pegs = [
      [4, 3, 2, 1],
      <int>[],
      <int>[],
    ];
    _selected = null;
    _moves = 0;
    _score = 100;
    _coins = 0;
    _over = false;
    _hint = 'Move 4 disks to the right peg';
  }

  Future<void> _tapPeg(int peg) async {
    if (_over) return;
    if (_selected == null) {
      if (_pegs[peg].isEmpty) {
        await _illegal();
        return;
      }
      HapticFeedback.selectionClick();
      setState(() => _selected = peg);
      return;
    }
    final from = _selected!;
    if (from == peg) {
      setState(() => _selected = null);
      return;
    }
    final disk = _pegs[from].last;
    if (_pegs[peg].isNotEmpty && _pegs[peg].last < disk) {
      await _illegal();
      setState(() => _selected = null);
      return;
    }
    HapticFeedback.lightImpact();
    setState(() {
      _pegs[from].removeLast();
      _pegs[peg].add(disk);
      _selected = null;
      _moves++;
      _score = math.max(10, 100 - _moves * 2);
      _hint = 'Moves $_moves · optimal 15';
    });
    if (_pegs[2].length == 4) await _finish();
  }

  Future<void> _illegal() async {
    HapticFeedback.heavyImpact();
    setState(() => _hint = 'Illegal move');
    await _shake.forward(from: 0);
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = _score ~/ 4;
    setState(() {
      _over = true;
      _hint = 'Tower complete';
    });
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() => setState(_reset);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  $_hint',
          child: AnimatedBuilder(
            animation: _shake,
            builder: (context, child) {
              final dx = math.sin(_shake.value * math.pi * 6) * 6 * (1 - _shake.value);
              return Transform.translate(offset: Offset(dx, 0), child: child);
            },
            child: Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 20),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: List.generate(3, (i) => Expanded(child: _pegWidget(i))),
              ),
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }

  Widget _pegWidget(int i) {
    final sel = _selected == i;
    return GestureDetector(
      onTap: () => _tapPeg(i),
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 6),
        padding: const EdgeInsets.fromLTRB(8, 16, 8, 12),
        decoration: BoxDecoration(
          color: const Color(0xFF0B1220),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: sel ? _c.first : Colors.white12, width: sel ? 2 : 1),
        ),
        child: Column(
          children: [
            Expanded(
              child: Stack(
                alignment: Alignment.bottomCenter,
                children: [
                  Center(
                    child: Container(width: 6, height: double.infinity, color: Colors.white24),
                  ),
                  Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      for (final disk in _pegs[i].reversed)
                        Container(
                          height: 22,
                          width: 28.0 + disk * 18,
                          margin: const EdgeInsets.only(bottom: 4),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(6),
                            gradient: LinearGradient(
                              colors: [
                                Color.lerp(_c.first, _c.last, (disk - 1) / 3)!,
                                Color.lerp(_c.last, _c.first, (disk - 1) / 3)!,
                              ],
                            ),
                            border: Border.all(color: Colors.white24),
                          ),
                        ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 8),
            Container(height: 10, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(4))),
            const SizedBox(height: 6),
            Text('PEG ${i + 1}', style: const TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, fontSize: 11)),
          ],
        ),
      ),
    );
  }
}

// ── 9. Make Twenty-Four ────────────────────────────────────────────────────

class NgmyVaultMakeTwentyFourGame extends StatefulWidget {
  const NgmyVaultMakeTwentyFourGame({super.key, required this.game});
  final VaultGameDef game;
  @override
  State<NgmyVaultMakeTwentyFourGame> createState() => _Make24State();
}

class _Make24State extends State<NgmyVaultMakeTwentyFourGame> {
  final _rnd = math.Random();
  late List<double> _nums;
  late List<bool> _used;
  final List<double> _stack = [];
  final List<String> _expr = [];
  int _solves = 0;
  int _score = 0;
  int _coins = 0;
  bool _over = false;
  String _hint = 'Build 24 · RPN style';

  List<Color> get _c => widget.game.colors;

  @override
  void initState() {
    super.initState();
    _deal();
  }

  bool _canMake24(List<double> vals) {
    if (vals.length == 1) return (vals.first - 24).abs() < 1e-6;
    for (var i = 0; i < vals.length; i++) {
      for (var j = 0; j < vals.length; j++) {
        if (i == j) continue;
        final rest = <double>[];
        for (var k = 0; k < vals.length; k++) {
          if (k != i && k != j) rest.add(vals[k]);
        }
        final a = vals[i];
        final b = vals[j];
        final candidates = <double>[a + b, a - b, b - a, a * b];
        if (b.abs() > 1e-9) candidates.add(a / b);
        if (a.abs() > 1e-9) candidates.add(b / a);
        for (final c in candidates) {
          if (_canMake24([...rest, c])) return true;
        }
      }
    }
    return false;
  }

  void _deal() {
    List<double> nums;
    do {
      nums = List.generate(4, (_) => (1 + _rnd.nextInt(9)).toDouble());
    } while (!_canMake24(nums));
    _nums = nums;
    _used = List.filled(4, false);
    _stack.clear();
    _expr.clear();
    _hint = 'Build 24 · $_solves/3 solved';
  }

  void _pushNumber(int i) {
    if (_over || _used[i]) return;
    HapticFeedback.selectionClick();
    setState(() {
      _used[i] = true;
      _stack.add(_nums[i]);
      _expr.add('${_nums[i].toInt()}');
    });
  }

  void _op(String op) {
    if (_over || _stack.length < 2) {
      HapticFeedback.heavyImpact();
      return;
    }
    HapticFeedback.selectionClick();
    setState(() {
      final b = _stack.removeLast();
      final a = _stack.removeLast();
      double r;
      switch (op) {
        case '+':
          r = a + b;
          break;
        case '−':
          r = a - b;
          break;
        case '×':
          r = a * b;
          break;
        case '÷':
          if (b.abs() < 1e-9) {
            _stack.addAll([a, b]);
            _hint = 'Division by zero';
            return;
          }
          r = a / b;
          break;
        default:
          r = a;
      }
      _stack.add(r);
      _expr.add(op);
      _hint = _stack.length == 1 ? 'Result ${_fmt(_stack.last)}' : 'Stack ${_stack.map(_fmt).join(' · ')}';
    });
    if (_stack.length == 1 && _used.every((u) => u)) {
      final v = _stack.last;
      if ((v - 24).abs() < 1e-6) {
        unawaited(_solved());
      } else {
        setState(() => _hint = 'Got ${_fmt(v)} — need 24. Reset numbers.');
      }
    }
  }

  String _fmt(double v) {
    if ((v - v.roundToDouble()).abs() < 1e-6) return '${v.round()}';
    return v.toStringAsFixed(2);
  }

  void _resetRound() {
    setState(() {
      _used = List.filled(4, false);
      _stack.clear();
      _expr.clear();
      _hint = 'Build 24 · $_solves/3 solved';
    });
  }

  void _newDeal() {
    if (_over) return;
    HapticFeedback.selectionClick();
    setState(_deal);
  }

  Future<void> _solved() async {
    HapticFeedback.mediumImpact();
    setState(() {
      _solves++;
      _score += 25;
      _hint = 'Exactly 24!';
    });
    if (_solves >= 3) {
      await _finish();
    } else {
      await Future<void>.delayed(const Duration(milliseconds: 450));
      if (!mounted || _over) return;
      setState(_deal);
    }
  }

  Future<void> _finish() async {
    if (_over) return;
    _coins = math.max(5, _score ~/ 3);
    setState(() => _over = true);
    await _persistMindRun(gameId: widget.game.id, score: _score, coins: _coins);
    if (mounted) setState(() {});
  }

  void _restart() {
    setState(() {
      _solves = 0;
      _score = 0;
      _coins = 0;
      _over = false;
      _deal();
    });
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        _mindChrome(
          context: context,
          title: widget.game.title.toUpperCase(),
          colors: _c,
          status: 'SCORE  $_score  ·  $_hint',
          child: Padding(
            padding: const EdgeInsets.fromLTRB(20, 0, 20, 16),
            child: Column(
              children: [
                Container(
                  width: double.infinity,
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: const Color(0xFF0B1220),
                    borderRadius: BorderRadius.circular(14),
                    border: Border.all(color: _c.first.withValues(alpha: 0.4)),
                  ),
                  child: Column(
                    children: [
                      Text(
                        _expr.isEmpty ? '—' : _expr.join(' '),
                        style: TextStyle(color: _c.first, fontWeight: FontWeight.w800, fontSize: 18),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        _stack.isEmpty ? 'stack empty' : _stack.map(_fmt).join('  ·  '),
                        style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 20),
                Wrap(
                  spacing: 12,
                  runSpacing: 12,
                  alignment: WrapAlignment.center,
                  children: List.generate(4, (i) {
                    final used = _used[i];
                    return GestureDetector(
                      onTap: used ? null : () => _pushNumber(i),
                      child: Container(
                        width: 64,
                        height: 64,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(14),
                          color: used ? const Color(0xFF1F2937) : Color.lerp(_c.first, _c.last, i / 3)!.withValues(alpha: 0.85),
                          border: Border.all(color: Colors.white24),
                        ),
                        child: Text(
                          '${_nums[i].toInt()}',
                          style: TextStyle(
                            color: used ? Colors.white38 : Colors.white,
                            fontWeight: FontWeight.w900,
                            fontSize: 24,
                          ),
                        ),
                      ),
                    );
                  }),
                ),
                const SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: ['+', '−', '×', '÷'].map((op) {
                    return FilledButton(
                      onPressed: () => _op(op),
                      style: FilledButton.styleFrom(
                        backgroundColor: const Color(0xFF1E293B),
                        foregroundColor: _c.first,
                        minimumSize: const Size(64, 48),
                      ),
                      child: Text(op, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 22)),
                    );
                  }).toList(),
                ),
                const Spacer(),
                Row(
                  children: [
                    Expanded(
                      child: OutlinedButton(
                        onPressed: _resetRound,
                        style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                        child: const Text('Reset'),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: FilledButton(
                        onPressed: _newDeal,
                        style: FilledButton.styleFrom(backgroundColor: _c.first),
                        child: const Text('New Deal', style: TextStyle(fontWeight: FontWeight.w900)),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
        if (_over)
          _MindEndCard(
            score: _score,
            coins: _coins,
            colors: _c,
            onAgain: _restart,
            onExit: () => Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score)),
          ),
      ],
    );
  }
}
