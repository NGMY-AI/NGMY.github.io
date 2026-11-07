import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import 'ngmy_electronics_cartoons.dart';
import 'ngmy_family_fireside_art.dart';
import 'ngmy_family_games_engine.dart';
import 'ngmy_worksheets_storage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// FIRESIDE STORIES: an African village at night, painted. The oldest person of the family tree sits by the fire and teaches the children,
// who answer. The people talk (their mouths move while the words come out), listen, react and cheer, and the village round them is alive.
// A right answer makes the fire grow. The questions are about the people in the tree.
// ═════════════════════════════════════════════════════════════════════════════

const Color _earth = Color(0xFF2A150A);
const Color _gold = Color(0xFFF2B01E);
const Color _cream = Color(0xFFFFF3DC);
const Color _clay = Color(0xFFB4532A);

/// How many lessons the elder gives in one evening.
const int kFiresideLessons = 6;

class FamilyFiresidePage extends StatefulWidget {
  const FamilyFiresidePage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<FamilyFiresidePage> createState() => FamilyFiresidePageState();
}

enum _Step { greet, teach, ask, feedback, end }

class FamilyFiresidePageState extends State<FamilyFiresidePage> with SingleTickerProviderStateMixin {
  late final List<FamilyQuestion> lessons = generateFamilyQuestions(widget.tree, count: kFiresideLessons, seed: widget.seed);
  late final FamilyGameData data = FamilyGameData(widget.tree);
  final ValueNotifier<double> _clock = ValueNotifier(0);
  final FiresideState look = FiresideState();
  final FiresideBackdrop _backdrop = FiresideBackdrop();
  late final Ticker _ticker;
  Timer? _typer;
  Timer? _chat;
  _Step step = _Step.greet;
  int index = 0, right = 0, streak = 0, bestStreak = 0, picked = -1, wonStars = 0, totalStars = 0;
  double fire = 0.35;
  String elderSays = '';
  int shown = 0;
  bool record = false, correct = false;

  FamilyQuestion get q => lessons[index];
  FamilyMember? get elder => data.elder;
  String get elderName => elder == null ? 'Babu' : data.nameOf(elder!);

  static const _praise = ['Vizuri sana! That is very good.', 'Hongera! Congratulations, my child.', 'Safi! You listened well.', 'Asante, child. The fire is proud of you.'];
  static const _gentle = ['Pole, child. Listen again:', 'Do not worry. Even elders learn twice:', 'Eh, so close! Remember:'];
  static const _wonder = ['Really, Babu?', 'Eh! I did not know that.', 'Tell us more!', 'Wow...', 'Mmm, I see.', 'Ooh, that is a good one.'];
  static const _cheers = ['Yes! 🎉', 'Hongera!', 'We did it!', 'Eeh, well done!'];
  static const _oops = ['Oooh!', 'Pole!', 'Eh, so close!'];

  @override
  void initState() {
    super.initState();
    look.elderIsWoman = elder?.gender == FamilyGender.female;
    _ticker = createTicker((d) {
      _clock.value = d.inMicroseconds / 1e6;
    })..start();
    _say('Come closer, my children. I am $elderName, elder of the ${widget.tree.name} family. Tonight, by this fire, we remember who we are.');
  }

  @override
  void dispose() {
    _ticker.dispose();
    _typer?.cancel();
    _chat?.cancel();
    _backdrop.dispose();
    _clock.dispose();
    super.dispose();
  }

  double get now => _clock.value;

  /// The elder says something: the words come out a few at a time, and the mouth moves while they do.
  void _say(String text) {
    _typer?.cancel();
    elderSays = text;
    shown = 0;
    look.elderTalking = true;
    _typer = Timer.periodic(const Duration(milliseconds: 30), (t) {
      if (!mounted) return;
      setState(() {
        shown = math.min(elderSays.length, shown + 2);
        if (shown >= elderSays.length) {
          look.elderTalking = false;
          t.cancel();
        }
      });
    });
  }

  /// A tap on the speech: all the words at once.
  void skipTyping() {
    if (shown >= elderSays.length) return;
    _typer?.cancel();
    setState(() {
      shown = elderSays.length;
      look.elderTalking = false;
    });
  }

  void _mark(int s) {
    look.step = s;
    look.stepSince = now;
    look.fire = fire;
  }

  /// Sit down: the first lesson starts.
  void sitDown() => _teach();

  void _teach() {
    final said = q.lesson.isNotEmpty ? q.lesson : q.explain;
    setState(() {
      step = _Step.teach;
      picked = -1;
      _mark(1);
      look.answerText = null;
    });
    _say(said);
    // One of the children reacts to what the elder said.
    _chat?.cancel();
    _chat = Timer(const Duration(milliseconds: 2200), () {
      if (!mounted || step != _Step.teach) return;
      final r = math.Random(index * 13 + widget.seed);
      look.reactionBy = 3 + r.nextInt(3);
      look.reaction = _wonder[r.nextInt(_wonder.length)];
      look.reactionUntil = now + 2.6;
    });
  }

  /// "Ask me, Elder": the question is put to the children.
  void askMe() {
    setState(() {
      step = _Step.ask;
      _mark(2);
      look.reaction = null;
    });
    _say(q.text);
  }

  /// A tap on one of the answers.
  void answer(int i) {
    if (step != _Step.ask) return;
    final ok = i == q.correct;
    if (ok) {
      right++;
      streak++;
      bestStreak = math.max(bestStreak, streak);
      fire = math.min(1.0, fire + 0.13);
      look.cheerUntil = now + 2.6;
    } else {
      streak = 0;
      fire = math.max(0.18, fire - 0.08);
      look.gaspUntil = now + 1.5;
    }
    final r = math.Random(index * 7 + i);
    setState(() {
      picked = i;
      correct = ok;
      step = _Step.feedback;
      _mark(3);
      look.correct = ok;
      // The child who answers says the answer out loud, and another child reacts.
      look.answerText = 'I say: ${q.options[i]}';
      look.answerUntil = now + 2.2;
      look.reactionBy = 3 + r.nextInt(3);
      look.reaction = ok ? _cheers[r.nextInt(_cheers.length)] : _oops[r.nextInt(_oops.length)];
      look.reactionUntil = now + 2.8;
    });
    _say(ok ? '${_praise[r.nextInt(_praise.length)]} ${q.explain}' : '${_gentle[r.nextInt(_gentle.length)]} ${q.explain}');
  }

  Future<void> next() async {
    if (index + 1 >= lessons.length) {
      final stars = starsForResult(right: right, total: lessons.length, streakBest: bestStreak);
      setState(() {
        step = _Step.end;
        wonStars = stars;
        fire = 1;
        _mark(4);
        look.cheerUntil = now + 5;
      });
      _say(right >= lessons.length - 1 ? 'You carry the family now. Never let the fire go out.' : 'You listened well tonight. Come again, and the fire will burn higher.');
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'fire', right * 10);
      if (mounted) setState(() {});
      return;
    }
    index++;
    _teach();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF14142B),
      body: Stack(children: [
        Positioned.fill(child: RepaintBoundary(child: CustomPaint(painter: FiresideArt(clock: _clock, state: look, backdrop: _backdrop)))),
        SafeArea(
          child: Column(children: [
            _top(),
            const Spacer(),
            _elderPanel(),
          ]),
        ),
      ]),
    );
  }

  Widget _top() => Padding(
        padding: const EdgeInsets.fromLTRB(6, 4, 12, 0),
        child: Row(children: [
          IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white)),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Fireside Stories', style: TextStyle(color: _gold, fontWeight: FontWeight.w900, fontSize: 17, shadows: [Shadow(blurRadius: 6)])),
              Row(children: [
                for (var i = 0; i < lessons.length; i++)
                  Container(
                    margin: const EdgeInsets.only(right: 5, top: 4),
                    width: 22,
                    height: 7,
                    decoration: BoxDecoration(color: i < index || step == _Step.end ? _gold : (i == index ? Colors.white : Colors.white24), borderRadius: BorderRadius.circular(4)),
                  ),
              ]),
            ]),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: Colors.black54, borderRadius: BorderRadius.circular(14), border: Border.all(color: const Color(0xFFEA580C))),
            child: Text('🔥 ${(fire * 100).round()}%', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
          ),
        ]),
      );

  Widget _elderPanel() {
    final e = elder;
    final kind = e == null ? 1 : (e.gender == FamilyGender.female ? 0 : 1);
    final typing = shown < elderSays.length;
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: _cream.withValues(alpha: 0.96), borderRadius: BorderRadius.circular(22), border: Border.all(color: _gold, width: 3), boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 14)]),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: skipTyping,
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            SizedBox(width: 62, height: 62, child: CustomPaint(painter: _PortraitPainter(kind))),
            const SizedBox(width: 10),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(step == _Step.ask ? '$elderName asks' : 'Elder $elderName', style: const TextStyle(color: _clay, fontWeight: FontWeight.w900, fontSize: 12.5)),
                const SizedBox(height: 2),
                Text(elderSays.substring(0, math.min(shown, elderSays.length)) + (typing ? '▍' : ''), style: const TextStyle(color: _earth, fontWeight: FontWeight.w700, fontSize: 14.5, height: 1.3)),
              ]),
            ),
          ]),
        ),
        const SizedBox(height: 10),
        switch (step) {
          _Step.greet => Center(child: _btn('Sit down by the fire', sitDown)),
          _Step.teach => Center(child: _btn('Ask me, Elder', askMe)),
          _Step.ask => Wrap(spacing: 8, runSpacing: 8, children: [
              for (var i = 0; i < q.options.length; i++)
                GestureDetector(
                  onTap: () => answer(i),
                  child: Container(
                    constraints: const BoxConstraints(minWidth: 130),
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
                    decoration: BoxDecoration(color: const Color(0xFFFFE8B0), borderRadius: BorderRadius.circular(14), border: Border.all(color: _clay, width: 2.5)),
                    child: Text(q.options[i], textAlign: TextAlign.center, style: const TextStyle(color: _earth, fontWeight: FontWeight.w900, fontSize: 14.5)),
                  ),
                ),
            ]),
          _Step.feedback => Row(children: [
              Icon(correct ? Icons.celebration_rounded : Icons.hearing_rounded, color: correct ? const Color(0xFF15803D) : _clay),
              const SizedBox(width: 8),
              Expanded(child: Text(correct ? 'The fire grows!' : 'Listen and learn.', style: TextStyle(color: correct ? const Color(0xFF15803D) : _clay, fontWeight: FontWeight.w900))),
              _btn(index + 1 >= lessons.length ? 'Finish' : 'Next story', next),
            ]),
          _Step.end => Column(children: [
              Text('$right of ${lessons.length} right  ·  +$wonStars ⭐', style: const TextStyle(color: _earth, fontWeight: FontWeight.w900, fontSize: 17)),
              if (totalStars > 0) Text('${badgeFor(totalStars).emoji} ${badgeFor(totalStars).name} · $totalStars stars${record ? ' · 🏆 new record!' : ''}', style: const TextStyle(color: _clay, fontWeight: FontWeight.w800)),
              const SizedBox(height: 8),
              _btn('Back to the games', () => Navigator.of(context).maybePop()),
            ]),
        },
      ]),
    );
  }

  Widget _btn(String label, VoidCallback onTap) => GestureDetector(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 11),
          decoration: BoxDecoration(color: _clay, borderRadius: BorderRadius.circular(16), border: Border.all(color: _gold, width: 2)),
          child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 14.5)),
        ),
      );
}

class _PortraitPainter extends CustomPainter {
  _PortraitPainter(this.kind);
  final int kind;

  @override
  void paint(Canvas c, Size s) {
    paintFamilyPortrait(c, s.center(Offset.zero), s.shortestSide * 0.45, kind, 0, glow: 0.4);
  }

  @override
  bool shouldRepaint(covariant _PortraitPainter old) => old.kind != kind;
}
