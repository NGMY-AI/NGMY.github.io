import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'ngmy_arcade_games.dart';
import 'ngmy_arcade_host.dart';

/// Shared parts for the newer arcade games: score + hearts bookkeeping and a
/// round-based "pick the right answer" engine.

/// Score, hearts and the end of the game in one place.
mixin ArcadeScore<T extends StatefulWidget> on State<T> {
  NgmyArcadeArgs get args;
  int get goal;
  int score = 0;
  int hearts = 3;
  bool ended = false;

  void startScore() => args.onProgress(0, goal);

  /// Adds points; true when the goal is reached (the game is over).
  bool addPoint([int n = 1]) {
    if (ended) return true;
    score = math.min(goal, score + n);
    args.onProgress(score, goal);
    HapticFeedback.lightImpact();
    if (score >= goal) {
      ended = true;
      onEnd();
      args.onComplete();
      return true;
    }
    return false;
  }

  /// Loses a heart; true when none are left (the game is over).
  bool loseHeart(String why) {
    if (ended) return true;
    hearts--;
    HapticFeedback.heavyImpact();
    if (hearts <= 0) {
      ended = true;
      onEnd();
      args.onKnockout(why);
      return true;
    }
    return false;
  }

  /// Ends the game now, paid for progress so far.
  void knockout(String why) {
    if (ended) return;
    ended = true;
    onEnd();
    args.onKnockout(why);
  }

  void onEnd() {
    final Object s = this;
    if (s is ArcadeLoop) s.stopLoop();
  }
}

/// Full-size gradient backdrop.
Widget arcadeBackdrop(List<Color> colors) => Positioned.fill(
      child: DecoratedBox(
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: colors),
        ),
      ),
    );

/// Banner text with hearts on the right.
Widget arcadeTopBar(String text, {int? hearts, int maxHearts = 3, bool bottom = false}) => Align(
      alignment: bottom ? Alignment.bottomCenter : Alignment.topCenter,
      child: ArcadeBanner(
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(text),
            if (hearts != null) ...[const SizedBox(width: 10), ArcadeHearts(left: hearts, max: maxHearts)],
          ],
        ),
      ),
    );

/// One question in an [ArcadeQuiz].
class ArcadeQ {
  const ArcadeQ(this.prompt, this.options, this.answer);
  final Widget prompt;
  final List<String> options;
  final int answer;
}

/// Pick-the-right-answer game: [goal] right answers wins, [strikes] wrong ones
/// ends it (paid for the right answers so far).
class ArcadeQuiz extends StatefulWidget {
  const ArcadeQuiz({
    super.key,
    required this.args,
    required this.goal,
    required this.make,
    required this.colors,
    this.strikes = 3,
    this.hint = '',
    this.optionFontSize = 18,
  });
  final NgmyArcadeArgs args;
  final int goal;
  final ArcadeQ Function(int round, math.Random r) make;
  final List<Color> colors;
  final int strikes;
  final String hint;
  final double optionFontSize;

  @override
  State<ArcadeQuiz> createState() => _ArcadeQuizState();
}

class _ArcadeQuizState extends State<ArcadeQuiz> {
  int _round = 0, _right = 0, _wrong = 0;
  late ArcadeQ _q;
  int? _picked;
  Timer? _next;

  @override
  void initState() {
    super.initState();
    _q = widget.make(0, widget.args.rng);
    widget.args.onProgress(0, widget.goal);
  }

  @override
  void dispose() {
    _next?.cancel();
    super.dispose();
  }

  void _pick(int i) {
    if (_picked != null) return;
    final ok = i == _q.answer;
    setState(() => _picked = i);
    if (ok) {
      _right++;
      HapticFeedback.lightImpact();
      widget.args.onProgress(_right, widget.goal);
    } else {
      _wrong++;
      HapticFeedback.heavyImpact();
    }
    _next = Timer(const Duration(milliseconds: 700), () {
      if (!mounted) return;
      if (_right >= widget.goal) {
        widget.args.onComplete();
        return;
      }
      if (_wrong >= widget.strikes) {
        widget.args.onKnockout('Too many wrong answers');
        return;
      }
      setState(() {
        _round++;
        _q = widget.make(_round, widget.args.rng);
        _picked = null;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    final accent = widget.colors.first;
    return Stack(
      children: [
        arcadeBackdrop([widget.colors.last.withValues(alpha: 0.55), const Color(0xFF0B0717)]),
        Column(
          children: [
            ArcadeBanner(
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text('${widget.hint.isEmpty ? '' : '${widget.hint} · '}$_right/${widget.goal}'),
                  const SizedBox(width: 10),
                  ArcadeHearts(left: widget.strikes - _wrong, max: widget.strikes),
                ],
              ),
            ),
            Expanded(
              child: Center(
                child: AnimatedSwitcher(
                  duration: const Duration(milliseconds: 300),
                  transitionBuilder: (c, a) => ScaleTransition(scale: a, child: FadeTransition(opacity: a, child: c)),
                  child: Container(
                    key: ValueKey(_round),
                    margin: const EdgeInsets.symmetric(horizontal: 18),
                    padding: const EdgeInsets.all(18),
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.07),
                      borderRadius: BorderRadius.circular(24),
                      border: Border.all(color: accent.withValues(alpha: 0.6), width: 1.5),
                      boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 24)],
                    ),
                    child: DefaultTextStyle(
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26),
                      textAlign: TextAlign.center,
                      child: _q.prompt,
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 0, 12, 14),
              child: Wrap(
                spacing: 10,
                runSpacing: 10,
                alignment: WrapAlignment.center,
                children: [
                  for (var i = 0; i < _q.options.length; i++)
                    Builder(builder: (context) {
                      final w = (MediaQuery.sizeOf(context).width - 54) / 2;
                      final picked = _picked == i;
                      final right = _picked != null && i == _q.answer;
                      final color = right
                          ? const Color(0xFF16A34A)
                          : picked
                              ? const Color(0xFFDC2626)
                              : Colors.white.withValues(alpha: 0.1);
                      return GestureDetector(
                        onTap: () => _pick(i),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          width: math.max(120, w),
                          height: 58,
                          alignment: Alignment.center,
                          padding: const EdgeInsets.symmetric(horizontal: 8),
                          decoration: BoxDecoration(
                            color: color,
                            borderRadius: BorderRadius.circular(16),
                            border: Border.all(color: right || picked ? Colors.white : accent.withValues(alpha: 0.5), width: 1.4),
                          ),
                          child: FittedBox(
                            fit: BoxFit.scaleDown,
                            child: Text(
                              _q.options[i],
                              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: widget.optionFontSize),
                            ),
                          ),
                        ),
                      );
                    }),
                ],
              ),
            ),
          ],
        ),
      ],
    );
  }
}

/// Shuffled options with the right one somewhere; returns (options, answerIndex).
(List<String>, int) arcadeOptions(String right, Iterable<String> wrongPool, math.Random r, {int count = 4}) {
  final wrong = wrongPool.where((w) => w != right).toSet().toList()..shuffle(r);
  final opts = [right, ...wrong.take(count - 1)]..shuffle(r);
  return (opts, opts.indexOf(right));
}
