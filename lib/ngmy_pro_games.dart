import 'dart:math' as math;
import 'package:flutter/material.dart';

import 'ngmy_multiplayer.dart';
import 'ngmy_games.dart' show kNgmyQuestionsPerGame;

/// Professional casino / board game implementations.
class NgmyProState {
  int score = 0;
  int goal = 1;
  String prompt = '';

  // checkers 8x8: 0 empty, 1 white, 2 black
  List<List<int>> checkers = List.generate(8, (_) => List.filled(8, 0));
  int checkersTurn = 1;
  int? checkersSelR;
  int? checkersSelC;

  // tic tac toe
  List<String> ttt = List.filled(9, '');
  bool tttX = true;

  // blackjack
  List<int> bjPlayer = [];
  List<int> bjDealer = [];
  bool bjStand = false;

  // roulette
  int? rouletteResult;
  int rouletteBet = 0;

  // slots
  List<int> slotsReels = [0, 0, 0];

  // pool
  double poolAngle = 0;
  double poolPower = 0.5;

  // connect 4
  List<List<int>> c4 = List.generate(6, (_) => List.filled(7, 0));
  int c4Turn = 1;

  // profit
  String profitQ = '';
  String profitA = '';
  final TextEditingController profitInput = TextEditingController();

  void setup(String gameId, math.Random rng) {
    score = 0;
    switch (gameId) {
      case 'checkers_deluxe':
        goal = 1;
        _initCheckers();
        prompt = 'Capture all opponent pieces — wood board deluxe';
        break;
      case 'tic_tac_go':
        goal = 1;
        ttt = List.filled(9, '');
        tttX = true;
        prompt = 'Get 3 in a row — multiplayer ready';
        break;
      case 'blackjack_vegas':
        goal = 1;
        bjPlayer = [_drawCard(rng), _drawCard(rng)];
        bjDealer = [_drawCard(rng), _drawCard(rng)];
        bjStand = false;
        prompt = 'Beat the dealer — don\'t bust over 21';
        break;
      case 'roulette_euro':
        goal = 1;
        rouletteResult = null;
        prompt = 'Pick a number — spin the wheel';
        break;
      case 'slots_jackpot':
        goal = 1;
        slotsReels = [rng.nextInt(6), rng.nextInt(6), rng.nextInt(6)];
        prompt = 'Match 3 symbols for jackpot';
        break;
      case 'pool_8ball':
      case 'billiards_snooker':
        goal = 1;
        poolAngle = rng.nextDouble() * math.pi * 2;
        prompt = 'Aim and shoot — pocket the 8-ball';
        break;
      case 'connect_four_pro':
        goal = 1;
        c4 = List.generate(6, (_) => List.filled(7, 0));
        c4Turn = 1;
        prompt = 'Connect 4 discs to win';
        break;
      case 'profit_solve':
        goal = kNgmyQuestionsPerGame;
        score = 0;
        _nextProfit(rng);
        prompt = 'Solve profit scenarios — $goal correct';
        break;
      default:
        goal = 1;
        prompt = kNgmyProGameTitles[gameId] ?? 'Play to earn';
    }
  }

  void _initCheckers() {
    checkers = List.generate(8, (r) => List.generate(8, (c) {
      if ((r + c) % 2 == 1) {
        if (r < 3) return 2;
        if (r > 4) return 1;
      }
      return 0;
    }));
    checkersTurn = 1;
    checkersSelR = null;
    checkersSelC = null;
  }

  int _drawCard(math.Random rng) => 1 + rng.nextInt(10);

  void _nextProfit(math.Random rng) {
    final cost = 20 + rng.nextInt(80);
    final sell = cost + 10 + rng.nextInt(50);
    final qty = 4 + rng.nextInt(20);
    profitQ = 'Unit cost \$$cost, sell \$$sell, $qty units. Total profit?';
    profitA = '${(sell - cost) * qty}';
    profitInput.clear();
  }

  int progressDone(String gameId) => score >= goal ? goal : score;

  int progressTotal(String gameId) => goal;

  bool tick(String gameId, math.Random rng) => score >= goal;

  bool tapCheckers(int r, int c) {
    final p = checkers[r][c];
    if (checkersSelR == null) {
      if (p == checkersTurn) {
        checkersSelR = r;
        checkersSelC = c;
      }
      return false;
    }
    final sr = checkersSelR!;
    final sc = checkersSelC!;
    if (r == sr && c == sc) {
      checkersSelR = null;
      checkersSelC = null;
      return false;
    }
    if ((r - sr).abs() == 1 && (c - sc).abs() == 1 && p == 0 && (r + c) % 2 == 1) {
      checkers[r][c] = checkersTurn;
      checkers[sr][sc] = 0;
      checkersSelR = null;
      checkersSelC = null;
      checkersTurn = checkersTurn == 1 ? 2 : 1;
      if (_checkersWin(checkersTurn == 1 ? 2 : 1)) {
        score = 1;
        return true;
      }
    }
    return false;
  }

  bool _checkersWin(int side) {
    for (final row in checkers) {
      for (final cell in row) {
        if (cell == side) return false;
      }
    }
    return true;
  }

  bool tapTtt(int i) {
    if (ttt[i].isNotEmpty) return false;
    ttt[i] = tttX ? 'X' : 'O';
    if (_tttWin(tttX ? 'X' : 'O')) {
      score = 1;
      return true;
    }
    if (!ttt.contains('')) return true;
    tttX = !tttX;
    return false;
  }

  bool _tttWin(String s) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (final l in lines) {
      if (ttt[l[0]] == s && ttt[l[1]] == s && ttt[l[2]] == s) return true;
    }
    return false;
  }

  int bjTotal(List<int> hand) => hand.fold(0, (a, b) => a + b);

  bool bjHit(math.Random rng) {
    bjPlayer.add(_drawCard(rng));
    if (bjTotal(bjPlayer) > 21) return true;
    return false;
  }

  bool bjStandPlay(math.Random rng) {
    while (bjTotal(bjDealer) < 17) bjDealer.add(_drawCard(rng));
    bjStand = true;
    final p = bjTotal(bjPlayer);
    final d = bjTotal(bjDealer);
    if (p <= 21 && (d > 21 || p > d)) score = 1;
    return true;
  }

  bool spinRoulette(math.Random rng, int bet) {
    rouletteBet = bet;
    rouletteResult = rng.nextInt(37);
    if (rouletteResult == bet) score = 1;
    return true;
  }

  bool spinSlots(math.Random rng) {
    slotsReels = [rng.nextInt(6), rng.nextInt(6), rng.nextInt(6)];
    if (slotsReels[0] == slotsReels[1] && slotsReels[1] == slotsReels[2]) score = 1;
    return true;
  }

  bool shootPool(math.Random rng) {
    if (rng.nextDouble() > 0.35 + poolPower * 0.4) score = 1;
    return true;
  }

  bool dropC4(int col) {
    for (var r = 5; r >= 0; r--) {
      if (c4[r][col] == 0) {
        c4[r][col] = c4Turn;
        if (_c4Win(r, col, c4Turn)) {
          score = 1;
          return true;
        }
        c4Turn = c4Turn == 1 ? 2 : 1;
        return false;
      }
    }
    return false;
  }

  bool _c4Win(int r, int c, int v) {
    int count(int dr, int dc) {
      var n = 0;
      var rr = r;
      var cc = c;
      while (rr >= 0 && rr < 6 && cc >= 0 && cc < 7 && c4[rr][cc] == v) {
        n++;
        rr += dr;
        cc += dc;
      }
      return n;
    }
    for (final d in [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ]) {
      if (count(d[0], d[1]) + count(-d[0], -d[1]) - 1 >= 4) return true;
    }
    return false;
  }

  bool checkProfit(math.Random rng) {
    if (profitInput.text.trim() == profitA) {
      score++;
      if (score >= goal) return true;
      _nextProfit(rng);
    }
    return score >= goal;
  }
}

Widget buildNgmyProGameBoard({
  required String gameId,
  required NgmyProState state,
  required math.Random rng,
  required VoidCallback onChanged,
  required VoidCallback onFullWin,
}) {
  switch (gameId) {
    case 'checkers_deluxe':
      return _checkersBoard(state, onChanged, onFullWin);
    case 'tic_tac_go':
      return _tttBoard(state, onChanged, onFullWin);
    case 'blackjack_vegas':
      return _blackjack(state, rng, onChanged, onFullWin);
    case 'roulette_euro':
      return _roulette(state, rng, onChanged, onFullWin);
    case 'slots_jackpot':
      return _slots(state, rng, onChanged, onFullWin);
    case 'pool_8ball':
    case 'billiards_snooker':
      return _poolTable(state, rng, onChanged, onFullWin);
    case 'connect_four_pro':
      return _connect4(state, onChanged, onFullWin);
    case 'profit_solve':
      return _profit(state, rng, onChanged, onFullWin);
    default:
      return _casinoPlaceholder(gameId, state, rng, onChanged, onFullWin);
  }
}

Widget _hud(NgmyProState s) => Padding(
      padding: const EdgeInsets.only(bottom: 8),
      child: Text(s.prompt, style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.3)),
    );

Widget _checkersBoard(NgmyProState state, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      Expanded(
        child: AspectRatio(
          aspectRatio: 1,
          child: Container(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: const Color(0xFF5D4037), width: 8),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 16)],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: GridView.builder(
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 8),
                itemCount: 64,
                itemBuilder: (_, i) {
                  final r = i ~/ 8;
                  final c = i % 8;
                  final dark = (r + c) % 2 == 1;
                  final piece = state.checkers[r][c];
                  final sel = state.checkersSelR == r && state.checkersSelC == c;
                  return GestureDetector(
                    onTap: () {
                      if (state.tapCheckers(r, c)) onFullWin();
                      onChanged();
                    },
                    child: Container(
                      color: dark ? const Color(0xFF5D4037) : const Color(0xFFD7CCC8),
                      child: Center(
                        child: piece == 0
                            ? null
                            : Container(
                                width: 28,
                                height: 28,
                                decoration: BoxDecoration(
                                  shape: BoxShape.circle,
                                  gradient: RadialGradient(
                                    colors: piece == 1
                                        ? [Colors.white, const Color(0xFFE2E8F0)]
                                        : [const Color(0xFF1E293B), Colors.black],
                                  ),
                                  border: Border.all(color: sel ? const Color(0xFFFBBF24) : Colors.black26, width: sel ? 3 : 1),
                                  boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 4, offset: const Offset(0, 2))],
                                ),
                              ),
                      ),
                    ),
                  );
                },
              ),
            ),
          ),
        ),
      ),
    ],
  );
}

Widget _tttBoard(NgmyProState state, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      Expanded(
        child: GridView.builder(
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, crossAxisSpacing: 8, mainAxisSpacing: 8),
          itemCount: 9,
          itemBuilder: (_, i) {
            return Material(
              color: const Color(0xFF1E3A5F),
              borderRadius: BorderRadius.circular(12),
              child: InkWell(
                onTap: () {
                  if (state.tapTtt(i)) onFullWin();
                  onChanged();
                },
                child: Center(
                  child: Text(
                    state.ttt[i],
                    style: TextStyle(
                      fontSize: 42,
                      fontWeight: FontWeight.w900,
                      color: state.ttt[i] == 'X' ? const Color(0xFF38BDF8) : const Color(0xFFEF4444),
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    ],
  );
}

Widget _blackjack(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  String fmt(List<int> h) => h.map((c) => '$c').join(', ');
  return Column(
    children: [
      _hud(state),
      Text('Dealer: ${state.bjStand ? fmt(state.bjDealer) : "${state.bjDealer[0]}, ?"}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
      Text('You: ${fmt(state.bjPlayer)} = ${state.bjTotal(state.bjPlayer)}', style: const TextStyle(color: Color(0xFF4ADE80), fontSize: 18, fontWeight: FontWeight.w900)),
      const Spacer(),
      Row(
        children: [
          Expanded(child: FilledButton(onPressed: state.bjStand ? null : () { state.bjHit(rng); onChanged(); if (state.score >= 1) onFullWin(); }, child: const Text('Hit'))),
          const SizedBox(width: 8),
          Expanded(child: FilledButton(onPressed: () { state.bjStandPlay(rng); onChanged(); if (state.score >= 1) onFullWin(); else onFullWin(); }, child: const Text('Stand'))),
        ],
      ),
    ],
  );
}

Widget _roulette(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      if (state.rouletteResult != null)
        Text('Result: ${state.rouletteResult}', style: const TextStyle(color: Color(0xFFFBBF24), fontSize: 32, fontWeight: FontWeight.w900)),
      Expanded(child: Center(child: Icon(Icons.circle, size: 120, color: Colors.red.shade700))),
      Wrap(
        spacing: 6,
        children: List.generate(6, (i) {
          final n = i * 6;
          return ActionChip(
            label: Text('$n'),
            onPressed: () {
              state.spinRoulette(rng, n);
              onChanged();
              if (state.score >= 1) onFullWin();
            },
          );
        }),
      ),
    ],
  );
}

Widget _slots(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  const symbols = ['7', 'BAR', 'CHERRY', 'BELL', 'GEM', 'STAR'];
  return Column(
    children: [
      _hud(state),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: state.slotsReels.map((r) => Container(
              margin: const EdgeInsets.all(8),
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [Color(0xFF7C3AED), Color(0xFF4C1D95)]),
                borderRadius: BorderRadius.circular(12),
                border: Border.all(color: const Color(0xFFFBBF24), width: 2),
              ),
              child: Text(symbols[r], style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
            )).toList(),
      ),
      FilledButton(
        onPressed: () {
          state.spinSlots(rng);
          onChanged();
          if (state.score >= 1) onFullWin();
        },
        child: const Text('SPIN'),
      ),
    ],
  );
}

Widget _poolTable(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      Expanded(
        child: Container(
          decoration: BoxDecoration(
            color: const Color(0xFF166534),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: const Color(0xFF5D4037), width: 10),
          ),
          child: const Center(child: Icon(Icons.sports_baseball_rounded, color: Colors.white, size: 40)),
        ),
      ),
      Slider(value: state.poolPower, onChanged: (v) { state.poolPower = v; onChanged(); }),
      FilledButton(
        onPressed: () {
          if (state.shootPool(rng)) onFullWin();
          onChanged();
        },
        child: const Text('Shoot'),
      ),
    ],
  );
}

Widget _connect4(NgmyProState state, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      Expanded(
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: List.generate(7, (col) {
            return Expanded(
              child: GestureDetector(
                onTap: () {
                  if (state.dropC4(col)) onFullWin();
                  onChanged();
                },
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.end,
                  children: List.generate(6, (row) {
                    final v = state.c4[5 - row][col];
                    return AspectRatio(
                      aspectRatio: 1,
                      child: Container(
                        margin: const EdgeInsets.all(2),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: v == 0 ? const Color(0xFF1E40AF) : (v == 1 ? Colors.red : Colors.amber),
                        ),
                      ),
                    );
                  }),
                ),
              ),
            );
          }),
        ),
      ),
    ],
  );
}

Widget _profit(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      Text('${state.score}/${state.goal}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
      Text(state.profitQ, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 16)),
      TextField(
        controller: state.profitInput,
        keyboardType: TextInputType.number,
        style: const TextStyle(color: Colors.white),
        decoration: const InputDecoration(prefixText: '\$ '),
        onSubmitted: (_) {
          if (state.checkProfit(rng)) onFullWin();
          onChanged();
        },
      ),
      FilledButton(
        onPressed: () {
          if (state.checkProfit(rng)) onFullWin();
          onChanged();
        },
        child: const Text('Submit'),
      ),
    ],
  );
}

Widget _casinoPlaceholder(String gameId, NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _hud(state),
      const Spacer(),
      Icon(Icons.casino_rounded, size: 72, color: Colors.amber.shade300),
      const SizedBox(height: 12),
      Text(kNgmyProGameTitles[gameId] ?? gameId, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
      const SizedBox(height: 8),
      const Text('Tap Play Round — skill & luck combined', style: TextStyle(color: Colors.white54)),
      const Spacer(),
      FilledButton(
        onPressed: () {
          if (rng.nextDouble() > 0.45) state.score = 1;
          onChanged();
          if (state.score >= 1) onFullWin();
        },
        child: const Text('Play Round'),
      ),
    ],
  );
}
