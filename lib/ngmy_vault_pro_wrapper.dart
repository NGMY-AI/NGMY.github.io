import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_premium_game_ui.dart';
import 'ngmy_pro_games.dart';
import 'ngmy_vault_games.dart';

/// Wraps Game Center pro tables (blackjack, roulette, etc.) for Vault Channel
/// with wallet coin payouts on wins.
class NgmyVaultProGameScreen extends StatefulWidget {
  const NgmyVaultProGameScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultProGameScreen> createState() => _NgmyVaultProGameScreenState();
}

class _NgmyVaultProGameScreenState extends State<NgmyVaultProGameScreen> {
  final _rng = math.Random();
  late NgmyProState _state;
  bool _ended = false;
  int _coins = 0;
  int _score = 0;
  String _result = '';

  @override
  void initState() {
    super.initState();
    _state = NgmyProState()..setup(widget.game.id, _rng);
  }

  @override
  void dispose() {
    _state.profitInput.dispose();
    super.dispose();
  }

  Future<void> _finish({required bool win, required int score}) async {
    if (_ended) return;
    HapticFeedback.mediumImpact();
    final coins = win ? (18 + score * 6 + _rng.nextInt(12)) : math.max(0, score ~/ 4);
    _coins = coins;
    _score = score;
    _result = win ? 'YOU WIN' : (_state.lastDraw ? 'DRAW' : 'ROUND OVER');
    _ended = true;
    if (coins > 0) {
      await VaultProgressStore.saveRun(
        gameId: widget.game.id,
        level: 1,
        score: score,
        coinsEarned: coins,
      );
    }
    if (mounted) setState(() {});
  }

  void _onGameEnd(NgmyProMoveResult result, NgmyProState state) {
    final win = result == NgmyProMoveResult.youWin;
    final draw = result == NgmyProMoveResult.draw;
    unawaited(_finish(win: win || draw, score: state.score.clamp(0, 999)));
  }

  void _restart() {
    setState(() {
      _ended = false;
      _coins = 0;
      _score = 0;
      _result = '';
      _state = NgmyProState()..setup(widget.game.id, _rng);
    });
  }

  Future<void> _exit() async {
    if (!_ended && _coins > 0) {
      await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: 0);
    }
    if (!mounted) return;
    Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score));
  }

  @override
  Widget build(BuildContext context) {
    final style = ngmyPremiumStyleFor(widget.game.id);
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) unawaited(_exit());
      },
      child: Scaffold(
        backgroundColor: const Color(0xFF030712),
        body: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [style.gradient.first.withValues(alpha: 0.35), const Color(0xFF030712)],
            ),
          ),
          child: SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(4, 4, 12, 0),
                  child: Row(
                    children: [
                      IconButton(onPressed: _exit, icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                      Expanded(
                        child: Column(
                          children: [
                            Text(
                              widget.game.title.toUpperCase(),
                              style: TextStyle(color: style.accent, fontWeight: FontWeight.w900, letterSpacing: 1.1, fontSize: 13),
                            ),
                            Text(
                              style.badge,
                              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontWeight: FontWeight.w700, fontSize: 10),
                            ),
                          ],
                        ),
                      ),
                      if (_coins > 0)
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                          decoration: BoxDecoration(
                            color: const Color(0xFFFBBF24).withValues(alpha: 0.15),
                            borderRadius: BorderRadius.circular(999),
                          ),
                          child: Text('+$_coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 12)),
                        ),
                    ],
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.fromLTRB(14, 8, 14, 12),
                    child: Stack(
                      fit: StackFit.expand,
                      children: [
                        buildNgmyProGameBoard(
                          gameId: widget.game.id,
                          state: _state,
                          rng: _rng,
                          onChanged: () => setState(() {}),
                          onGameEnd: _onGameEnd,
                        ),
                        if (_ended) _endOverlay(style),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _endOverlay(NgmyPremiumGameStyle style) {
    return Container(
      color: Colors.black.withValues(alpha: 0.72),
      alignment: Alignment.center,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 32),
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          gradient: LinearGradient(colors: [style.gradient[1], const Color(0xFF0B0A16)]),
          border: Border.all(color: style.accent.withValues(alpha: 0.55)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(style.heroEmoji, style: const TextStyle(fontSize: 42)),
            const SizedBox(height: 8),
            Text(_result, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 1.2)),
            if (_coins > 0) ...[
              const SizedBox(height: 10),
              Text('+$_coins coins', style: TextStyle(color: style.accent, fontWeight: FontWeight.w900, fontSize: 22)),
            ],
            const SizedBox(height: 18),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton(
                    onPressed: _exit,
                    style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                    child: const Text('Exit'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: FilledButton(
                    onPressed: _restart,
                    style: FilledButton.styleFrom(backgroundColor: style.accent, foregroundColor: Colors.black),
                    child: const Text('Play Again', style: TextStyle(fontWeight: FontWeight.w900)),
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}
