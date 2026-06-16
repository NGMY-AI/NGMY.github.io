import 'dart:math' as math;
import 'package:flutter/material.dart';

import 'ngmy_multiplayer.dart';
import 'ngmy_games.dart' show kNgmyQuestionsPerGame;
import 'ngmy_premium_game_ui.dart';

/// Outcome of a board-game move.
enum NgmyProMoveResult { continueGame, youWin, youLose, draw }

/// Professional casino / board game implementations.
class NgmyProState {
  int score = 0;
  int goal = 1;
  String prompt = '';
  NgmyGamePlayContext? playCtx;
  bool gameOver = false;
  bool? lastYouWin;
  bool lastDraw = false;
  String lastWinnerLabel = '';

  Map<String, dynamic> mpSessionMeta = {};

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

  bool get vsComputer => playCtx?.vsComputer ?? true;

  int get humanSide => 1;

  void setup(String gameId, math.Random rng, {NgmyGamePlayContext? context}) {
    playCtx = context ?? NgmyGamePlayContext.solo(youLabel: 'You', yourEmail: '');
    score = 0;
    gameOver = false;
    lastYouWin = null;
    lastDraw = false;
    lastWinnerLabel = '';
    switch (gameId) {
      case 'checkers_deluxe':
        goal = 1;
        _initCheckers();
        prompt = vsComputer
            ? 'You (${playCtx!.youLabel}) vs NGMY — capture all opponent discs'
            : '${playCtx!.youLabel} vs ${playCtx!.opponentLabel} — capture all discs';
        break;
      case 'tic_tac_go':
        goal = 1;
        ttt = List.filled(9, '');
        tttX = true;
        prompt = vsComputer
            ? 'You are X vs NGMY (O) — get 3 in a row'
            : '${playCtx!.youLabel} (X) vs ${playCtx!.opponentLabel} (O)';
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
    case 'billiards_snooker':
        goal = 1;
        poolAngle = rng.nextDouble() * math.pi * 2;
        prompt = vsComputer ? 'Aim and shoot — beat NGMY on the snooker table' : 'Aim and shoot — pocket balls';
        break;
      case 'connect_four_pro':
        goal = 1;
        c4 = List.generate(6, (_) => List.filled(7, 0));
        c4Turn = 1;
        prompt = vsComputer
            ? 'You (red discs) vs NGMY (gold) — connect 4'
            : '${playCtx!.youLabel} (red) vs ${playCtx!.opponentLabel} (gold)';
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

  void applySessionState(String gameId, Map<String, dynamic>? session, String yourEmail) {
    if (session == null || vsComputer) return;
    mpSessionMeta = Map<String, dynamic>.from(session);
    switch (gameId) {
      case 'tic_tac_go':
        final board = session['ttt'];
        if (board is List) {
          ttt = board.map((e) => e.toString()).toList();
          if (ttt.length < 9) ttt = [...ttt, ...List.filled(9 - ttt.length, '')];
        }
        final turnEmail = (session['turnEmail'] ?? '').toString().toLowerCase().trim();
        tttX = turnEmail == (session['playerXEmail'] ?? '').toString().toLowerCase().trim();
        prompt = _tttTurnPrompt(session, yourEmail);
        gameOver = session['gameOver'] == true;
        if (gameOver) {
          _applySessionOutcome(session, yourEmail);
        }
        break;
      case 'connect_four_pro':
        final grid = session['c4'];
        if (grid is List) {
          c4 = grid.map((row) {
            if (row is List) return row.map((c) => (c is int) ? c : int.tryParse(c.toString()) ?? 0).toList();
            return List<int>.filled(7, 0);
          }).toList();
          while (c4.length < 6) {
            c4.add(List.filled(7, 0));
          }
        }
        c4Turn = (session['c4Turn'] is int) ? session['c4Turn'] as int : int.tryParse('${session['c4Turn']}') ?? 1;
        prompt = _c4TurnPrompt(session, yourEmail);
        gameOver = session['gameOver'] == true;
        if (gameOver) _applySessionOutcome(session, yourEmail);
        break;
      case 'checkers_deluxe':
        final grid = session['checkers'];
        if (grid is List) {
          checkers = grid.map((row) {
            if (row is List) return row.map((c) => (c is int) ? c : int.tryParse(c.toString()) ?? 0).toList();
            return List<int>.filled(8, 0);
          }).toList();
        }
        checkersTurn = (session['checkersTurn'] is int)
            ? session['checkersTurn'] as int
            : int.tryParse('${session['checkersTurn']}') ?? 1;
        prompt = _checkersTurnPrompt(session, yourEmail);
        gameOver = session['gameOver'] == true;
        if (gameOver) _applySessionOutcome(session, yourEmail);
        break;
    }
  }

  Map<String, dynamic> exportSessionState(String gameId) {
    final base = Map<String, dynamic>.from(mpSessionMeta);
    switch (gameId) {
      case 'tic_tac_go':
        base
          ..['ttt'] = List<String>.from(ttt)
          ..['turnEmail'] = _tttTurnEmailForExport()
          ..['gameOver'] = gameOver
          ..['winnerEmail'] = lastDraw
              ? ''
              : (lastYouWin == true
                  ? playCtx?.yourEmail ?? ''
                  : (lastYouWin == false ? playCtx?.opponentEmail ?? '' : ''))
          ..['winnerLabel'] = lastWinnerLabel
          ..['isDraw'] = lastDraw;
        return base;
      case 'connect_four_pro':
        base
          ..['c4'] = c4.map((row) => List<int>.from(row)).toList()
          ..['c4Turn'] = c4Turn
          ..['gameOver'] = gameOver
          ..['winnerEmail'] = lastDraw
              ? ''
              : (lastYouWin == true
                  ? playCtx?.yourEmail ?? ''
                  : (lastYouWin == false ? playCtx?.opponentEmail ?? '' : ''))
          ..['winnerLabel'] = lastWinnerLabel
          ..['isDraw'] = lastDraw;
        return base;
      case 'checkers_deluxe':
        base
          ..['checkers'] = checkers.map((row) => List<int>.from(row)).toList()
          ..['checkersTurn'] = checkersTurn
          ..['gameOver'] = gameOver
          ..['winnerEmail'] = lastDraw
              ? ''
              : (lastYouWin == true
                  ? playCtx?.yourEmail ?? ''
                  : (lastYouWin == false ? playCtx?.opponentEmail ?? '' : ''))
          ..['winnerLabel'] = lastWinnerLabel
          ..['isDraw'] = lastDraw;
        return base;
      default:
        return {
          ...base,
          'gameOver': gameOver,
          'winnerLabel': lastWinnerLabel,
        };
    }
  }

  String _tttTurnEmailForExport() {
    if (vsComputer) return tttX ? (playCtx?.yourEmail ?? '') : 'ngmy@system';
    final xEmail = (mpSessionMeta['playerXEmail'] ?? playCtx?.yourEmail ?? '').toString().toLowerCase().trim();
    final oEmail = (mpSessionMeta['playerOEmail'] ?? playCtx?.opponentEmail ?? '').toString().toLowerCase().trim();
    return tttX ? xEmail : oEmail;
  }

  void _applySessionOutcome(Map<String, dynamic> session, String yourEmail) {
    final key = yourEmail.toLowerCase().trim();
    final winnerEmail = (session['winnerEmail'] ?? '').toString().toLowerCase().trim();
    lastDraw = session['isDraw'] == true;
    lastWinnerLabel = (session['winnerLabel'] ?? '').toString();
    if (lastDraw) {
      lastYouWin = null;
    } else if (winnerEmail.isNotEmpty) {
      lastYouWin = winnerEmail == key;
      if (lastWinnerLabel.isEmpty) {
        lastWinnerLabel = lastYouWin == true ? '${playCtx?.youLabel ?? 'You'} wins!' : '${playCtx?.opponentLabel ?? 'Opponent'} wins!';
      }
    }
    score = lastYouWin == true ? 1 : 0;
  }

  String _tttTurnPrompt(Map<String, dynamic> session, String yourEmail) {
    if (gameOver) return lastWinnerLabel.isNotEmpty ? lastWinnerLabel : 'Game over';
    final key = yourEmail.toLowerCase().trim();
    final turnEmail = (session['turnEmail'] ?? '').toString().toLowerCase().trim();
    final xName = (session['playerXName'] ?? 'X').toString();
    final oName = (session['playerOName'] ?? 'O').toString();
    if (turnEmail == key) return 'Your turn (${turnEmail == (session['playerXEmail'] ?? '').toString().toLowerCase().trim() ? 'X' : 'O'})';
    final name = turnEmail == (session['playerXEmail'] ?? '').toString().toLowerCase().trim() ? xName : oName;
    return '$name\'s turn';
  }

  String _c4TurnPrompt(Map<String, dynamic> session, String yourEmail) {
    if (gameOver) return lastWinnerLabel.isNotEmpty ? lastWinnerLabel : 'Game over';
    final key = yourEmail.toLowerCase().trim();
    final p1 = (session['player1Email'] ?? '').toString().toLowerCase().trim();
    final p1Name = (session['player1Name'] ?? 'Player 1').toString();
    final p2Name = (session['player2Name'] ?? 'Player 2').toString();
    if (c4Turn == 1) {
      return key == p1 ? 'Your turn — drop a red disc' : '$p1Name\'s turn (red)';
    }
    return key == p1 ? '$p2Name\'s turn (gold)' : 'Your turn — drop a gold disc';
  }

  String _checkersTurnPrompt(Map<String, dynamic> session, String yourEmail) {
    if (gameOver) return lastWinnerLabel.isNotEmpty ? lastWinnerLabel : 'Game over';
    final key = yourEmail.toLowerCase().trim();
    final p1 = (session['player1Email'] ?? '').toString().toLowerCase().trim();
    final p1Name = (session['player1Name'] ?? 'Player 1').toString();
    final p2Name = (session['player2Name'] ?? 'Player 2').toString();
    final myTurn = (checkersTurn == 1 && key == p1) || (checkersTurn == 2 && key != p1);
    if (myTurn) return 'Your turn — move a disc';
    return checkersTurn == 1 ? '$p1Name\'s turn' : '$p2Name\'s turn';
  }

  bool isMyTurn(String gameId, String yourEmail) {
    if (gameOver || vsComputer) return !gameOver;
    final key = yourEmail.toLowerCase().trim();
    switch (gameId) {
      case 'tic_tac_go':
        final turnEmail = (mpSessionMeta['turnEmail'] ?? _tttTurnEmailForExport()).toString().toLowerCase().trim();
        return turnEmail == key;
      case 'connect_four_pro':
        final p1 = (mpSessionMeta['player1Email'] ?? '').toString().toLowerCase().trim();
        if (c4Turn == 1) return key == p1;
        return key != p1;
      case 'checkers_deluxe':
        final p1 = (mpSessionMeta['player1Email'] ?? '').toString().toLowerCase().trim();
        if (checkersTurn == 1) return key == p1;
        return key != p1;
    }
    return true;
  }

  void configureMultiplayerRolesFromSession(Map<String, dynamic> session, String yourEmail) {
    mpSessionMeta = Map<String, dynamic>.from(session);
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

  bool tapCheckers(int r, int c, math.Random rng) {
    if (gameOver) return false;
    final side = vsComputer ? humanSide : (isMyTurn('checkers_deluxe', playCtx?.yourEmail ?? '') ? checkersTurn : -1);
    if (!vsComputer && !isMyTurn('checkers_deluxe', playCtx?.yourEmail ?? '')) return false;
    final activeSide = vsComputer ? checkersTurn : side;
    if (!vsComputer && activeSide != checkersTurn) return false;

    final p = checkers[r][c];
    if (checkersSelR == null) {
      if (p == checkersTurn && (!vsComputer || p == humanSide)) {
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
      final opponent = checkersTurn == 1 ? 2 : 1;
      checkersTurn = opponent;
      if (_checkersWin(2)) return _finishCheckers(winnerSide: 1);
      if (_checkersWin(1)) return _finishCheckers(winnerSide: 2);
      if (vsComputer && checkersTurn == 2) {
        _aiCheckersMove(rng);
        if (_checkersWin(2)) return _finishCheckers(winnerSide: 1);
        if (_checkersWin(1)) return _finishCheckers(winnerSide: 2);
      }
    }
    return false;
  }

  bool _finishCheckers({required int winnerSide}) {
    gameOver = true;
    final youWin = winnerSide == humanSide;
    lastYouWin = youWin;
    if (vsComputer) {
      lastWinnerLabel = youWin ? '${playCtx?.youLabel ?? 'You'} wins — all discs captured!' : 'NGMY wins — your discs are gone';
    } else {
      final winnerName = youWin ? (playCtx?.youLabel ?? 'You') : (playCtx?.opponentLabel ?? 'Opponent');
      lastWinnerLabel = '$winnerName wins — all discs captured!';
    }
    score = youWin ? 1 : 0;
    prompt = lastWinnerLabel;
    return true;
  }

  void _aiCheckersMove(math.Random rng) {
    final moves = <List<int>>[];
    for (var r = 0; r < 8; r++) {
      for (var c = 0; c < 8; c++) {
        if (checkers[r][c] != 2) continue;
        for (final d in [
          [1, -1],
          [1, 1],
        ]) {
          final nr = r + d[0];
          final nc = c + d[1];
          if (nr >= 0 && nr < 8 && nc >= 0 && nc < 8 && checkers[nr][nc] == 0 && (nr + nc) % 2 == 1) {
            moves.add([r, c, nr, nc]);
          }
        }
      }
    }
    if (moves.isEmpty) return;
    final m = moves[rng.nextInt(moves.length)];
    checkers[m[2]][m[3]] = 2;
    checkers[m[0]][m[1]] = 0;
    checkersTurn = 1;
  }

  bool _checkersWin(int side) {
    for (final row in checkers) {
      for (final cell in row) {
        if (cell == side) return false;
      }
    }
    return true;
  }

  NgmyProMoveResult tapTtt(int i, math.Random rng) {
    if (gameOver || ttt[i].isNotEmpty) return NgmyProMoveResult.continueGame;
    if (!vsComputer && playCtx != null && !isMyTurn('tic_tac_go', playCtx!.yourEmail)) {
      return NgmyProMoveResult.continueGame;
    }

    final humanSymbol = vsComputer
        ? 'X'
        : (playCtx!.yourEmail.toLowerCase().trim() ==
                (mpSessionMeta['playerXEmail'] ?? '').toString().toLowerCase().trim()
            ? 'X'
            : 'O');

    ttt[i] = humanSymbol;
    if (_tttWin(humanSymbol)) {
      return _finishTtt(winnerSymbol: humanSymbol, youWin: true);
    }
    if (!ttt.contains('')) {
      return _finishTttDraw();
    }
    tttX = !tttX;
    if (!vsComputer) {
      mpSessionMeta['turnEmail'] = _tttTurnEmailForExport();
      prompt = _mpTttPrompt();
      return NgmyProMoveResult.continueGame;
    }

    if (vsComputer) {
      final aiMove = _pickTttAiMove(rng);
      if (aiMove >= 0) {
        ttt[aiMove] = 'O';
        if (_tttWin('O')) {
          return _finishTtt(winnerSymbol: 'O', youWin: false);
        }
        if (!ttt.contains('')) {
          return _finishTttDraw();
        }
        tttX = true;
      }
    }
    prompt = vsComputer ? 'Your turn — you are X' : _mpTttPrompt();
    return NgmyProMoveResult.continueGame;
  }

  String _mpTttPrompt() {
    if (playCtx == null) return 'Take your turn';
    return isMyTurn('tic_tac_go', playCtx!.yourEmail) ? 'Your turn' : '${playCtx!.opponentLabel}\'s turn';
  }

  NgmyProMoveResult _finishTtt({required String winnerSymbol, required bool youWin}) {
    gameOver = true;
    lastYouWin = youWin;
    lastDraw = false;
    if (vsComputer) {
      lastWinnerLabel = youWin ? '${playCtx?.youLabel ?? 'You'} wins with $winnerSymbol!' : 'NGMY wins with $winnerSymbol!';
    } else {
      final winnerName = youWin ? (playCtx?.youLabel ?? 'You') : (playCtx?.opponentLabel ?? 'Opponent');
      lastWinnerLabel = '$winnerName wins with $winnerSymbol!';
    }
    prompt = lastWinnerLabel;
    score = youWin ? 1 : 0;
    return youWin ? NgmyProMoveResult.youWin : NgmyProMoveResult.youLose;
  }

  NgmyProMoveResult _finishTttDraw() {
    gameOver = true;
    lastYouWin = null;
    lastDraw = true;
    lastWinnerLabel = 'Draw — no winner';
    prompt = lastWinnerLabel;
    score = 0;
    return NgmyProMoveResult.draw;
  }

  int _pickTttAiMove(math.Random rng) {
    for (var i = 0; i < 9; i++) {
      if (ttt[i].isNotEmpty) continue;
      ttt[i] = 'O';
      if (_tttWin('O')) {
        ttt[i] = '';
        return i;
      }
      ttt[i] = '';
    }
    for (var i = 0; i < 9; i++) {
      if (ttt[i].isNotEmpty) continue;
      ttt[i] = 'X';
      if (_tttWin('X')) {
        ttt[i] = '';
        return i;
      }
      ttt[i] = '';
    }
    const preferred = [4, 0, 2, 6, 8, 1, 3, 5, 7];
    for (final i in preferred) {
      if (ttt[i].isEmpty) return i;
    }
    return -1;
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

  NgmyProMoveResult dropC4(int col, math.Random rng) {
    if (gameOver) return NgmyProMoveResult.continueGame;
    if (!vsComputer && playCtx != null && !isMyTurn('connect_four_pro', playCtx!.yourEmail)) {
      return NgmyProMoveResult.continueGame;
    }
    final mySide = vsComputer ? humanSide : (playCtx!.youArePlayerOne ? 1 : 2);
    if (c4Turn != mySide) return NgmyProMoveResult.continueGame;

    final placed = _placeC4(col, c4Turn);
    if (!placed) return NgmyProMoveResult.continueGame;

    if (_c4WinAt(c4Turn)) {
      return _finishC4(winner: c4Turn, youWin: true);
    }
    if (_c4Full()) {
      return _finishC4Draw();
    }
    c4Turn = c4Turn == 1 ? 2 : 1;

    if (vsComputer && c4Turn == 2) {
      final aiCol = _pickC4AiMove(rng);
      if (aiCol >= 0) {
        _placeC4(aiCol, 2);
        if (_c4WinAt(2)) {
          return _finishC4(winner: 2, youWin: false);
        }
        if (_c4Full()) {
          return _finishC4Draw();
        }
        c4Turn = 1;
      }
    }
    prompt = vsComputer ? 'Your turn — drop a red disc' : _c4MpPrompt();
    return NgmyProMoveResult.continueGame;
  }

  String _c4MpPrompt() {
    if (playCtx == null) return 'Drop a disc';
    return isMyTurn('connect_four_pro', playCtx!.yourEmail) ? 'Your turn' : '${playCtx!.opponentLabel}\'s turn';
  }

  bool _placeC4(int col, int player) {
    for (var r = 5; r >= 0; r--) {
      if (c4[r][col] == 0) {
        c4[r][col] = player;
        return true;
      }
    }
    return false;
  }

  bool _c4Full() {
    for (var c = 0; c < 7; c++) {
      if (c4[0][c] == 0) return false;
    }
    return true;
  }

  NgmyProMoveResult _finishC4({required int winner, required bool youWin}) {
    gameOver = true;
    lastYouWin = youWin;
    lastDraw = false;
    final disc = winner == 1 ? 'red discs' : 'gold discs';
    if (vsComputer) {
      lastWinnerLabel = youWin ? '${playCtx?.youLabel ?? 'You'} wins with $disc!' : 'NGMY wins with $disc!';
    } else {
      final winnerName = youWin ? (playCtx?.youLabel ?? 'You') : (playCtx?.opponentLabel ?? 'Opponent');
      lastWinnerLabel = '$winnerName wins with $disc!';
    }
    prompt = lastWinnerLabel;
    score = youWin ? 1 : 0;
    return youWin ? NgmyProMoveResult.youWin : NgmyProMoveResult.youLose;
  }

  NgmyProMoveResult _finishC4Draw() {
    gameOver = true;
    lastYouWin = null;
    lastDraw = true;
    lastWinnerLabel = 'Draw — board full';
    prompt = lastWinnerLabel;
    score = 0;
    return NgmyProMoveResult.draw;
  }

  int _pickC4AiMove(math.Random rng) {
    for (var col = 0; col < 7; col++) {
      if (!_canDropC4(col)) continue;
      _placeC4(col, 2);
      final win = _c4WinAt(2);
      _undoLastC4(col);
      if (win) return col;
    }
    for (var col = 0; col < 7; col++) {
      if (!_canDropC4(col)) continue;
      _placeC4(col, 1);
      final block = _c4WinAt(1);
      _undoLastC4(col);
      if (block) return col;
    }
    final options = <int>[];
    for (var col = 0; col < 7; col++) {
      if (_canDropC4(col)) options.add(col);
    }
    if (options.isEmpty) return -1;
    return options[rng.nextInt(options.length)];
  }

  bool _canDropC4(int col) => c4[0][col] == 0;

  void _undoLastC4(int col) {
    for (var r = 0; r < 6; r++) {
      if (c4[r][col] != 0) {
        c4[r][col] = 0;
        return;
      }
    }
  }

  bool _c4WinAt(int v) {
    for (var r = 0; r < 6; r++) {
      for (var c = 0; c < 7; c++) {
        if (c4[r][c] != v) continue;
        if (_c4Win(r, c, v)) return true;
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

typedef NgmyProGameEndCallback = void Function(NgmyProMoveResult result, NgmyProState state);

Widget buildNgmyProGameBoard({
  required String gameId,
  required NgmyProState state,
  required math.Random rng,
  required VoidCallback onChanged,
  required NgmyProGameEndCallback onGameEnd,
}) {
  void finish(NgmyProMoveResult result) {
    onGameEnd(result, state);
  }

  switch (gameId) {
    case 'checkers_deluxe':
      return _checkersBoard(state, rng, onChanged, finish);
    case 'tic_tac_go':
      return _tttBoard(state, rng, onChanged, finish);
    case 'blackjack_vegas':
      return _blackjack(state, rng, onChanged, () => finish(NgmyProMoveResult.youWin));
    case 'roulette_euro':
      return _roulette(state, rng, onChanged, () => finish(NgmyProMoveResult.youWin));
    case 'slots_jackpot':
      return _slots(state, rng, onChanged, () => finish(NgmyProMoveResult.youWin));
    case 'billiards_snooker':
      return _poolTable(state, rng, onChanged, () => finish(NgmyProMoveResult.youWin));
    case 'connect_four_pro':
      return _connect4(state, rng, onChanged, finish);
    case 'profit_solve':
      return _profit(state, rng, onChanged, () => finish(NgmyProMoveResult.youWin));
    default:
      return _casinoPlaceholder(gameId, state, rng, onChanged, () => finish(NgmyProMoveResult.youWin));
  }
}

Widget _turnBanner(NgmyProState state) {
  return Padding(
    padding: const EdgeInsets.only(bottom: 6),
    child: Text(
      state.prompt,
      textAlign: TextAlign.center,
      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13, height: 1.3),
    ),
  );
}

Widget _checkersBoard(NgmyProState state, math.Random rng, VoidCallback onChanged, void Function(NgmyProMoveResult) finish) {
  return Column(
    children: [
      _turnBanner(state),
      Expanded(
        child: Center(
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
                        final ended = state.tapCheckers(r, c, rng);
                        onChanged();
                        if (ended) {
                          finish(state.lastYouWin == true ? NgmyProMoveResult.youWin : NgmyProMoveResult.youLose);
                        }
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
                                    boxShadow: [
                                      BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 4, offset: const Offset(0, 2)),
                                    ],
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
      ),
    ],
  );
}

Widget _tttBoard(NgmyProState state, math.Random rng, VoidCallback onChanged, void Function(NgmyProMoveResult) finish) {
  return Column(
    children: [
      _turnBanner(state),
      Expanded(
        child: Center(
          child: AspectRatio(
            aspectRatio: 1,
            child: LayoutBuilder(
              builder: (context, constraints) {
                final size = constraints.maxWidth;
                return SizedBox(
                  width: size,
                  height: size,
                  child: GridView.builder(
                    physics: const NeverScrollableScrollPhysics(),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      crossAxisSpacing: 8,
                      mainAxisSpacing: 8,
                    ),
                    itemCount: 9,
                    itemBuilder: (_, i) {
                      return Material(
                        color: const Color(0xFF1E3A5F),
                        borderRadius: BorderRadius.circular(12),
                        child: InkWell(
                          borderRadius: BorderRadius.circular(12),
                          onTap: () {
                            final result = state.tapTtt(i, rng);
                            onChanged();
                            finish(result);
                          },
                          child: Center(
                            child: Text(
                              state.ttt[i],
                              style: TextStyle(
                                fontSize: size * 0.22,
                                fontWeight: FontWeight.w900,
                                color: state.ttt[i] == 'X' ? const Color(0xFF38BDF8) : const Color(0xFFEF4444),
                              ),
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                );
              },
            ),
          ),
        ),
      ),
    ],
  );
}

Widget _blackjack(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  String fmt(List<int> h) => h.map((c) => '$c').join(', ');
  return Column(
    children: [
      _turnBanner(state),
      const Text('DEALER', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1)),
      const SizedBox(height: 6),
      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          if (state.bjStand)
            ...state.bjDealer.map((c) => Padding(padding: const EdgeInsets.symmetric(horizontal: 3), child: ngmyPlayingCard(c)))
          else ...[
            ngmyPlayingCard(state.bjDealer[0]),
            const SizedBox(width: 6),
            ngmyPlayingCard(0, hidden: true),
          ],
        ],
      ),
      const SizedBox(height: 14),
      const Text('YOUR HAND', style: TextStyle(color: Colors.white54, fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 1)),
      Text('Total: ${state.bjTotal(state.bjPlayer)}', style: const TextStyle(color: Color(0xFF4ADE80), fontSize: 14, fontWeight: FontWeight.w800)),
      const SizedBox(height: 6),
      Wrap(
        alignment: WrapAlignment.center,
        spacing: 6,
        runSpacing: 6,
        children: state.bjPlayer.map((c) => ngmyPlayingCard(c)).toList(),
      ),
      const Spacer(),
      Row(
        children: [
          Expanded(
              child: FilledButton(
                  onPressed: state.bjStand
                      ? null
                      : () {
                          state.bjHit(rng);
                          onChanged();
                          if (state.score >= 1) onFullWin();
                        },
                  child: const Text('Hit'))),
          const SizedBox(width: 8),
          Expanded(
              child: FilledButton(
                  onPressed: () {
                    state.bjStandPlay(rng);
                    onChanged();
                    onFullWin();
                  },
                  child: const Text('Stand'))),
        ],
      ),
    ],
  );
}

Widget _roulette(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _turnBanner(state),
      ngmyRouletteWheel(result: state.rouletteResult),
      if (state.rouletteResult != null)
        Padding(
          padding: const EdgeInsets.only(top: 8),
          child: Text('Result: ${state.rouletteResult}', style: const TextStyle(color: Color(0xFFFBBF24), fontSize: 28, fontWeight: FontWeight.w900)),
        ),
      const SizedBox(height: 12),
      Wrap(
        spacing: 6,
        runSpacing: 6,
        alignment: WrapAlignment.center,
        children: List.generate(6, (i) {
          final n = i * 6;
          return ActionChip(
            label: Text('$n', style: const TextStyle(fontWeight: FontWeight.w800)),
            backgroundColor: const Color(0xFF1E293B),
            labelStyle: const TextStyle(color: Colors.white),
            side: BorderSide(color: Colors.white.withValues(alpha: 0.2)),
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
      _turnBanner(state),
      ngmySlotMachineFrame(
        symbols: state.slotsReels.map((r) => symbols[r]).toList(),
        onSpin: () {
          state.spinSlots(rng);
          onChanged();
          if (state.score >= 1) onFullWin();
        },
      ),
    ],
  );
}

Widget _poolTable(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _turnBanner(state),
      Expanded(
        child: Container(
          margin: const EdgeInsets.symmetric(horizontal: 4),
          decoration: BoxDecoration(
            gradient: const RadialGradient(
              center: Alignment(0, -0.2),
              radius: 1.1,
              colors: [Color(0xFF166534), Color(0xFF14532D), Color(0xFF052E16)],
            ),
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: const Color(0xFF78350F), width: 12),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 18, offset: const Offset(0, 8))],
          ),
          child: Stack(
            children: [
              Positioned(
                left: 24,
                top: 24,
                child: Container(
                  width: 18,
                  height: 18,
                  decoration: const BoxDecoration(shape: BoxShape.circle, color: Colors.white, boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 4)]),
                ),
              ),
              Positioned(
                right: 32,
                bottom: 28,
                child: Container(
                  width: 14,
                  height: 14,
                  decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF0F172A)),
                ),
              ),
              Center(
                child: Transform.rotate(
                  angle: state.poolAngle,
                  child: Container(
                    width: 120,
                    height: 4,
                    decoration: BoxDecoration(
                      color: const Color(0xFFFBBF24),
                      borderRadius: BorderRadius.circular(2),
                      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 4)],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
      Slider(
        value: state.poolPower,
        activeColor: const Color(0xFF22C55E),
        onChanged: (v) {
          state.poolPower = v;
          onChanged();
        },
      ),
      FilledButton(
        onPressed: () {
          if (state.shootPool(rng)) onFullWin();
          onChanged();
        },
        child: const Text('Shoot cue ball'),
      ),
    ],
  );
}

Widget _connect4(NgmyProState state, math.Random rng, VoidCallback onChanged, void Function(NgmyProMoveResult) finish) {
  return Column(
    children: [
      _turnBanner(state),
      Expanded(
        child: Center(
          child: AspectRatio(
            aspectRatio: 7 / 6,
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: List.generate(7, (col) {
                return Expanded(
                  child: GestureDetector(
                    onTap: () {
                      final result = state.dropC4(col, rng);
                      onChanged();
                      finish(result);
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
                              border: Border.all(color: Colors.white12),
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
        ),
      ),
    ],
  );
}

Widget _profit(NgmyProState state, math.Random rng, VoidCallback onChanged, VoidCallback onFullWin) {
  return Column(
    children: [
      _turnBanner(state),
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
  return ngmyThemedCasinoTable(
    gameId: gameId,
    prompt: state.prompt,
    vsComputer: state.vsComputer,
    opponentLabel: state.playCtx?.opponentLabel,
    onPlay: () {
      if (rng.nextDouble() > 0.45) state.score = 1;
      onChanged();
      if (state.score >= 1) onFullWin();
    },
  );
}
