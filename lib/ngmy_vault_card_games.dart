import 'dart:math' as math;

import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_premium_game_ui.dart';
import 'ngmy_vault_games.dart';

/// Premium card-table games for Vault Channel — real playing cards, table felt,
/// and wallet coin payouts.
class NgmyVaultCardGameScreen extends StatefulWidget {
  const NgmyVaultCardGameScreen({super.key, required this.game});

  final VaultGameDef game;

  @override
  State<NgmyVaultCardGameScreen> createState() => _NgmyVaultCardGameScreenState();
}

class _NgmyVaultCardGameScreenState extends State<NgmyVaultCardGameScreen> {
  final _rng = math.Random();
  int _score = 0;
  int _coins = 0;
  int _streak = 0;
  String _status = 'Place your bet with skill.';
  bool _ended = false;

  // casino war
  int? _warPlayer;
  int? _warDealer;

  // baccarat
  List<int> _bacPlayer = [];
  List<int> _bacBanker = [];

  // video poker
  List<int> _vpHand = [];
  final Set<int> _vpHeld = {};

  // hi-lo
  int? _hiCard;
  int? _hiNext;

  String get _mode => widget.game.id;

  @override
  void initState() {
    super.initState();
    _newRound();
  }

  int _drawCard() => 1 + _rng.nextInt(13);

  int _baccaratTotal(List<int> hand) {
    var t = hand.fold(0, (a, c) => a + c);
    while (t > 9) {
      t = t ~/ 10 + t % 10;
    }
    return t;
  }

  void _newRound() {
    setState(() {
      _ended = false;
      switch (_mode) {
        case 'casino_war':
          _warPlayer = null;
          _warDealer = null;
          _status = 'Deal — higher card wins the pot.';
        case 'baccarat_punto':
          _bacPlayer = [_drawCard(), _drawCard()];
          _bacBanker = [_drawCard(), _drawCard()];
          _status = 'Player ${_baccaratTotal(_bacPlayer)} · Banker ${_baccaratTotal(_bacBanker)} — tap side to bet.';
        case 'video_poker':
          _vpHand = List.generate(5, (_) => _drawCard());
          _vpHeld.clear();
          _status = 'Tap cards to hold, then draw.';
        case 'hi_lo_cards':
          _hiCard = _drawCard();
          _hiNext = null;
          _status = 'Higher or lower than ${_rankLabel(_hiCard!)}?';
      }
    });
  }

  String _rankLabel(int v) {
    if (v == 1) return 'Ace';
    if (v == 11) return 'Jack';
    if (v == 12) return 'Queen';
    if (v == 13) return 'King';
    return '$v';
  }

  Future<void> _award(int points) async {
    _score += points;
    _streak += 1;
    final gain = 8 + points + _streak * 2;
    _coins += gain;
    await VaultProgressStore.addWalletCoins(gain);
    HapticFeedback.lightImpact();
  }

  Future<void> _finishSession() async {
    if (_coins > 0) {
      await VaultProgressStore.saveRun(gameId: widget.game.id, level: 1, score: _score, coinsEarned: 0);
    }
    if (!mounted) return;
    Navigator.pop(context, VaultGameResult(coinsEarned: _coins, score: _score));
  }

  void _dealWar() {
    final p = _drawCard();
    final d = _drawCard();
    setState(() {
      _warPlayer = p;
      _warDealer = d;
      if (p > d) {
        _status = 'You win with ${_rankLabel(p)} over ${_rankLabel(d)}.';
        unawaited(_award(20));
      } else if (d > p) {
        _streak = 0;
        _status = 'Dealer wins with ${_rankLabel(d)} over ${_rankLabel(p)}.';
      } else {
        _status = 'War! Same rank — deal again.';
        unawaited(_award(8));
      }
    });
  }

  Future<void> _resolveBaccarat({required bool playerBet}) async {
    var p = _baccaratTotal(_bacPlayer);
    var b = _baccaratTotal(_bacBanker);
    while (p < 8 && b < 8 && (_bacPlayer.length < 3 || _bacBanker.length < 3)) {
      if (p <= 5) _bacPlayer.add(_drawCard());
      if (b <= 5) _bacBanker.add(_drawCard());
      p = _baccaratTotal(_bacPlayer);
      b = _baccaratTotal(_bacBanker);
    }
    final playerWin = p > b;
    final bankerWin = b > p;
    setState(() {
      if (playerBet && playerWin) {
        _status = 'Player $p beats Banker $b — punto wins.';
        unawaited(_award(24));
      } else if (!playerBet && bankerWin) {
        _status = 'Banker $b beats Player $p — banco wins.';
        unawaited(_award(22));
      } else if (p == b) {
        _status = 'Tie at $p — push.';
        unawaited(_award(6));
      } else {
        _streak = 0;
        _status = playerBet ? 'Banker $b wins.' : 'Player $p wins.';
      }
    });
  }

  String _vpRankName(int handValue) {
    switch (handValue) {
      case 7:
        return 'Royal flush draw';
      case 6:
        return 'Four of a kind';
      case 5:
        return 'Full house';
      case 4:
        return 'Flush';
      case 3:
        return 'Straight';
      case 2:
        return 'Three of a kind';
      case 1:
        return 'Two pair';
      default:
        return 'Jacks or better';
    }
  }

  int _evaluateVideoPoker(List<int> hand) {
    final counts = <int, int>{};
    for (final c in hand) {
      counts[c] = (counts[c] ?? 0) + 1;
    }
    final vals = counts.values.toList()..sort((a, b) => b.compareTo(a));
    if (vals.first >= 4) return 6;
    if (vals.length >= 2 && vals[0] >= 3 && vals[1] >= 2) return 5;
    if (vals.first >= 3) return 2;
    if (vals.where((v) => v >= 2).length >= 2) return 1;
    final sorted = hand.toList()..sort();
    if (sorted.last - sorted.first == 4) return 3;
    return 0;
  }

  void _drawVideoPoker() {
    final next = <int>[];
    for (var i = 0; i < 5; i++) {
      next.add(_vpHeld.contains(i) ? _vpHand[i] : _drawCard());
    }
    final rank = _evaluateVideoPoker(next);
    setState(() {
      _vpHand = next;
      if (rank > 0) {
        final pts = [0, 12, 18, 22, 28, 34, 50][rank.clamp(0, 6)];
        _status = '${_vpRankName(rank)} — paid $pts.';
        unawaited(_award(pts));
      } else {
        _streak = 0;
        _status = 'No paying hand — try again.';
      }
    });
  }

  void _guessHiLo({required bool higher}) {
    final next = _drawCard();
    final cur = _hiCard!;
    final correct = higher ? next >= cur : next <= cur;
    setState(() {
      _hiNext = next;
      if (correct && next != cur) {
        _status = 'Correct! ${_rankLabel(cur)} → ${_rankLabel(next)}.';
        unawaited(_award(10 + _streak * 3));
        _hiCard = next;
        _hiNext = null;
      } else if (next == cur) {
        _status = 'Same card — push.';
        unawaited(_award(4));
        _hiCard = next;
        _hiNext = null;
      } else {
        _streak = 0;
        _status = 'Wrong — ${_rankLabel(cur)} vs ${_rankLabel(next)}.';
      }
    });
  }

  Widget _feltTable({required Widget child}) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF14532D), Color(0xFF052E16), Color(0xFF064E3B)],
        ),
        border: Border.all(color: const Color(0xFF854D0E), width: 2),
        boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 18, offset: Offset(0, 8))],
      ),
      child: child,
    );
  }

  Widget _cardRow(List<int> cards, {double w = 56}) {
    return Wrap(
      alignment: WrapAlignment.center,
      spacing: 8,
      runSpacing: 8,
      children: cards.map((c) => ngmyPlayingCard(c, width: w, height: w * 1.42)).toList(),
    );
  }

  @override
  Widget build(BuildContext context) {
    final colors = widget.game.colors;
    return PopScope(
      canPop: false,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) unawaited(_finishSession());
      },
      child: Scaffold(
        backgroundColor: const Color(0xFF030712),
        body: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(4, 4, 12, 0),
                child: Row(
                  children: [
                    IconButton(onPressed: _finishSession, icon: const Icon(Icons.close_rounded, color: Colors.white70)),
                    Expanded(
                      child: Text(
                        widget.game.title.toUpperCase(),
                        textAlign: TextAlign.center,
                        style: TextStyle(color: colors.first, fontWeight: FontWeight.w900, letterSpacing: 1.1, fontSize: 13),
                      ),
                    ),
                    Text('$_coins', style: const TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900, fontSize: 13)),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 6),
                child: Text(_status, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 13)),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(14, 8, 14, 12),
                  child: _feltTable(child: Center(child: _body())),
                ),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
                child: _actions(),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _body() {
    switch (_mode) {
      case 'casino_war':
        return Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('DEALER', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, letterSpacing: 1)),
            const SizedBox(height: 8),
            _warDealer == null ? ngmyPlayingCard(0, hidden: true) : ngmyPlayingCard(_warDealer!),
            const SizedBox(height: 24),
            const Text('YOU', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w800, letterSpacing: 1)),
            const SizedBox(height: 8),
            _warPlayer == null ? ngmyPlayingCard(0, hidden: true) : ngmyPlayingCard(_warPlayer!),
          ],
        );
      case 'baccarat_punto':
        return Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Text('BANKER', style: TextStyle(color: Color(0xFFFBBF24), fontWeight: FontWeight.w900)),
            const SizedBox(height: 8),
            _cardRow(_bacBanker),
            const SizedBox(height: 22),
            const Text('PLAYER', style: TextStyle(color: Color(0xFF93C5FD), fontWeight: FontWeight.w900)),
            const SizedBox(height: 8),
            _cardRow(_bacPlayer),
          ],
        );
      case 'video_poker':
        return Wrap(
          alignment: WrapAlignment.center,
          spacing: 8,
          runSpacing: 8,
          children: List.generate(5, (i) {
            final held = _vpHeld.contains(i);
            return GestureDetector(
              onTap: () {
                setState(() {
                  if (_vpHeld.contains(i)) {
                    _vpHeld.remove(i);
                  } else {
                    _vpHeld.add(i);
                  }
                });
              },
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  ngmyPlayingCard(_vpHand[i], width: 62, height: 88),
                  if (held)
                    Positioned(
                      top: -6,
                      right: -6,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                        decoration: BoxDecoration(color: const Color(0xFFFBBF24), borderRadius: BorderRadius.circular(6)),
                        child: const Text('HOLD', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 9)),
                      ),
                    ),
                ],
              ),
            );
          }),
        );
      case 'hi_lo_cards':
        return Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (_hiCard != null) ngmyPlayingCard(_hiCard!, width: 72, height: 102),
            if (_hiNext != null) ...[
              const SizedBox(height: 14),
              ngmyPlayingCard(_hiNext!, width: 72, height: 102),
            ],
            const SizedBox(height: 10),
            Text('Streak $_streak', style: TextStyle(color: widget.game.colors.first, fontWeight: FontWeight.w900)),
          ],
        );
      default:
        return const SizedBox.shrink();
    }
  }

  Widget _actions() {
    switch (_mode) {
      case 'casino_war':
        return Row(
          children: [
            Expanded(
              child: FilledButton(
                onPressed: _dealWar,
                style: FilledButton.styleFrom(backgroundColor: widget.game.colors.first, padding: const EdgeInsets.symmetric(vertical: 14)),
                child: const Text('DEAL', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: OutlinedButton(
                onPressed: _newRound,
                style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24), padding: const EdgeInsets.symmetric(vertical: 14)),
                child: const Text('New round'),
              ),
            ),
          ],
        );
      case 'baccarat_punto':
        return Row(
          children: [
            Expanded(
              child: FilledButton(
                onPressed: () => unawaited(_resolveBaccarat(playerBet: true)),
                child: const Text('Bet Player', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: FilledButton(
                onPressed: () => unawaited(_resolveBaccarat(playerBet: false)),
                style: FilledButton.styleFrom(backgroundColor: const Color(0xFFFBBF24), foregroundColor: Colors.black),
                child: const Text('Bet Banker', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
          ],
        );
      case 'video_poker':
        return Row(
          children: [
            Expanded(
              child: FilledButton(
                onPressed: _drawVideoPoker,
                child: const Text('Draw', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: OutlinedButton(
                onPressed: _newRound,
                style: OutlinedButton.styleFrom(foregroundColor: Colors.white70, side: const BorderSide(color: Colors.white24)),
                child: const Text('New hand'),
              ),
            ),
          ],
        );
      case 'hi_lo_cards':
        return Row(
          children: [
            Expanded(
              child: FilledButton(
                onPressed: () => _guessHiLo(higher: false),
                child: const Text('Lower', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: FilledButton(
                onPressed: () => _guessHiLo(higher: true),
                style: FilledButton.styleFrom(backgroundColor: widget.game.colors.last),
                child: const Text('Higher', style: TextStyle(fontWeight: FontWeight.w900)),
              ),
            ),
          ],
        );
      default:
        return const SizedBox.shrink();
    }
  }
}
