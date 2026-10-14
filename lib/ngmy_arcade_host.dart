import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'main.dart';
import 'ngmy_arcade_games.dart';
import 'ngmy_game_nav.dart';
import 'ngmy_game_notifications.dart';
import 'ngmy_game_session.dart';
import 'ngmy_games.dart';
import 'ngmy_nav.dart';
import 'ngmy_earned_frame.dart';

export 'ngmy_earned_frame.dart';

/// Arcade games in the Game Center: you stake money, play, and are paid like
/// the other skill games — finish = 1.46× the stake; time up or knocked out =
/// that prize times how far you got; no progress = you lose the stake.

/// What every arcade game gets from the host.
class NgmyArcadeArgs {
  const NgmyArcadeArgs({required this.onProgress, required this.onComplete, required this.onKnockout, required this.rng});

  /// Report progress (e.g. 7 of 15 bubbles).
  final void Function(int done, int total) onProgress;

  /// The goal is reached: full prize.
  final VoidCallback onComplete;

  /// Game over early (hit a bomb, crashed…): paid for the progress so far.
  final void Function(String why) onKnockout;
  final math.Random rng;
}

class NgmyArcadePlayScreen extends StatefulWidget {
  const NgmyArcadePlayScreen({
    super.key,
    required this.user,
    required this.config,
    required this.gameId,
    required this.gameTitle,
    required this.colors,
    required this.wager,
    required this.onAddTransaction,
    required this.onDataChanged,
  });

  final UserData user;
  final AppConfig config;
  final String gameId;
  final String gameTitle;
  final List<Color> colors;
  final double wager;
  final void Function(AppTransaction t) onAddTransaction;
  final VoidCallback onDataChanged;

  @override
  State<NgmyArcadePlayScreen> createState() => _NgmyArcadePlayScreenState();
}

class _NgmyArcadePlayScreenState extends State<NgmyArcadePlayScreen> {
  final _rng = math.Random();
  int _done = 0;
  int _total = 1;
  late int _secondsLeft;
  Timer? _timer;
  bool _over = false;

  double get _prize => widget.wager * 1.46;

  @override
  void initState() {
    super.initState();
    NgmyGameSession.enterPlayScreen(widget.gameId, widget.gameTitle);
    _secondsLeft = ngmyGameTimeLimitSeconds(widget.gameId, widget.config.gameTimeLimits)
        .clamp(ngmyMinGameSeconds, 600)
        .toInt();
    if (!widget.config.gameTimeLimits.containsKey(widget.gameId)) {
      _secondsLeft = ngmyArcadeDefaultSeconds(widget.gameId);
    }
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (_over || !mounted) return;
      setState(() => _secondsLeft--);
      if (_secondsLeft <= 0) unawaited(_settle(reason: "Time's up"));
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _payEarnedOnLeave();
    NgmyGameSession.leavePlayScreen();
    super.dispose();
  }

  /// Left mid-game: whatever was earned so far still goes to their balance (the stake is
  /// already spent). Nothing earned → nothing paid, the stake is lost.
  void _payEarnedOnLeave() {
    if (_over) return;
    _over = true;
    final ratio = _total <= 0 ? 0.0 : (_done / _total).clamp(0.0, 1.0);
    if (ratio <= 0) return;
    final payout = double.parse((_prize * ratio).toStringAsFixed(2));
    if (payout < 0.01) return;
    widget.user.totalProfit += payout - widget.wager * ratio;
    widget.onAddTransaction(AppTransaction(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      userEmail: widget.user.email,
      amount: payout,
      type: TransactionType.reimbursement,
      method: PaymentMethod.system,
      sourceDetails: 'Game partial: ${widget.gameTitle} ($_done/$_total, left early)',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    ));
    widget.onDataChanged();
  }

  Future<void> _settle({bool complete = false, String reason = ''}) async {
    if (_over) return;
    _over = true;
    _timer?.cancel();
    final ratio = complete ? 1.0 : (_total <= 0 ? 0.0 : (_done / _total).clamp(0.0, 1.0));
    if (ratio <= 0) {
      unawaited(NgmyGameNotifications.record(
        email: widget.user.email,
        gameTitle: widget.gameTitle,
        won: false,
        amount: widget.wager,
        detail: reason.isEmpty ? 'No progress' : reason,
      ));
      if (!mounted) return;
      await showNgmyGameResultPopup(
        context,
        win: false,
        title: 'YOU LOSE',
        subtitle: '${reason.isEmpty ? 'Try again' : reason} — no progress to pay.',
        onGoBack: ngmyGameGoBack,
        onPlayAgain: ngmyGamePlayAgain,
      );
      return;
    }
    final payout = double.parse((_prize * ratio).toStringAsFixed(2));
    final full = ratio >= 1.0;
    setState(() => widget.user.totalProfit += (payout - widget.wager * ratio));
    final txn = AppTransaction(
      id: DateTime.now().microsecondsSinceEpoch.toString(),
      userEmail: widget.user.email,
      amount: payout,
      type: TransactionType.reimbursement,
      method: PaymentMethod.system,
      sourceDetails: full ? 'Game payout: ${widget.gameTitle}' : 'Game partial: ${widget.gameTitle} ($_done/$_total)',
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
    );
    ngmyPlayIncomeSoundForTransaction(txn, force: true);
    widget.onAddTransaction(txn);
    widget.onDataChanged();
    final subtitle = full
        ? '+\$${payout.toStringAsFixed(2)} added to your balance!'
        : '${reason.isEmpty ? '' : '$reason · '}+\$${payout.toStringAsFixed(2)} (${(ratio * 100).round()}% of the prize)';
    unawaited(NgmyGameNotifications.record(
      email: widget.user.email,
      gameTitle: widget.gameTitle,
      won: true,
      amount: payout,
      detail: subtitle,
      txnId: txn.id,
    ));
    if (!mounted) return;
    await showNgmyGameResultPopup(
      context,
      win: true,
      title: full ? 'YOU WIN!' : 'PARTIAL WIN',
      subtitle: subtitle,
      outcomeLabel: '$_done/$_total',
      onGoBack: ngmyGameGoBack,
      onPlayAgain: ngmyGamePlayAgain,
    );
    await ngmyNotifyGameWin(widget.gameTitle, subtitle);
  }

  @override
  Widget build(BuildContext context) {
    final args = NgmyArcadeArgs(
      rng: _rng,
      onProgress: (done, total) {
        if (_over || !mounted) return;
        setState(() {
          _done = done.clamp(0, total);
          _total = math.max(1, total);
        });
      },
      onComplete: () {
        if (!mounted) return;
        setState(() => _done = _total);
        unawaited(_settle(complete: true));
      },
      onKnockout: (why) => unawaited(_settle(reason: why)),
    );
    final timer = '${_secondsLeft ~/ 60}:${(_secondsLeft % 60).toString().padLeft(2, '0')}';
    final low = _secondsLeft <= 10;
    return ngmyGameScreenShell(
      backgroundColor: const Color(0xFF120B24),
      child: SafeArea(
        child: Column(
          children: [
            // Header: back, title, prize, timer.
            Padding(
              padding: const EdgeInsets.fromLTRB(6, 6, 12, 4),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => NgmyNavigator.pop(context),
                    icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white),
                  ),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(widget.gameTitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                        Text('Win \$${_prize.toStringAsFixed(2)} · stake \$${widget.wager.toStringAsFixed(2)}',
                            style: const TextStyle(color: Color(0xFFFDE68A), fontWeight: FontWeight.w800, fontSize: 11.5)),
                      ],
                    ),
                  ),
                  NgmyGameBalanceChip(userEmail: widget.user.email, fallback: () => widget.user.accountBalance),
                  const SizedBox(width: 6),
                  AnimatedContainer(
                    duration: const Duration(milliseconds: 200),
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                    decoration: BoxDecoration(
                      color: low ? const Color(0xFFEF4444) : Colors.white.withValues(alpha: 0.1),
                      borderRadius: BorderRadius.circular(99),
                    ),
                    child: Row(
                      children: [
                        const Icon(Icons.timer_rounded, color: Colors.white, size: 16),
                        const SizedBox(width: 4),
                        Text(timer, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            // Money made so far, front and centre.
            NgmyEarnedSoFar(earned: _prize * (_done / _total), prize: _prize, stake: widget.wager),
            // Progress toward the full prize.
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 2, 16, 8),
              child: Row(
                children: [
                  Expanded(
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(99),
                      child: LinearProgressIndicator(
                        value: _done / _total,
                        minHeight: 9,
                        backgroundColor: Colors.white12,
                        valueColor: AlwaysStoppedAnimation(widget.colors.first),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Text('$_done/$_total', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w900)),
                ],
              ),
            ),
            Expanded(
              child: Padding(
                padding: const EdgeInsets.fromLTRB(10, 0, 10, 10),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(22),
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      gradient: LinearGradient(
                        begin: Alignment.topCenter,
                        end: Alignment.bottomCenter,
                        colors: [widget.colors.first.withValues(alpha: 0.35), const Color(0xFF0B0717)],
                      ),
                    ),
                    child: IgnorePointer(ignoring: _over, child: ngmyBuildArcadeGame(widget.gameId, args)),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
