import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import 'ngmy_family_fireside_art.dart';
import 'ngmy_family_games_engine.dart';
import 'ngmy_family_games_ui.dart';
import 'ngmy_worksheets_storage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THREE PAINTED GAMES with real, talking and reacting people, in the same village as Fireside Stories:
//  · Village School: the elder writes the questions on a chalkboard under the baobab, and you sit with the children and answer. A real test.
//  · Line Up: the family stands in a row under the baobab, and you swap them into the right order, oldest to youngest.
//  · Safari Journey: a bus drives through the savanna to Grandma's village, and at every stop a villager asks a question.
// ═════════════════════════════════════════════════════════════════════════════

const Color _chalk = Color(0xFFF8FAFC);
const Color _wood = Color(0xFF7A4A24);

/// Where the 450 by 900 picture is drawn on a screen of [size]: the scale, and the left and top edges.
({double u, double dx, double dy}) _fit(Size size) {
  final u = math.min(size.width / 450, size.height / 900);
  return (u: u, dx: (size.width - 450 * u) / 2, dy: (size.height - 900 * u) / 2);
}

/// The clock every painted game runs on: it counts seconds, and the painter repaints on every tick.
mixin _SceneClock<T extends StatefulWidget> on State<T>, SingleTickerProviderStateMixin<T> {
  final ValueNotifier<double> clock = ValueNotifier(0);
  late final Ticker _sceneTicker;
  double _lastT = 0;

  /// Called with the seconds since the last frame.
  void sceneStep(double dt) {}

  void startClock() {
    _sceneTicker = createTicker((d) {
      final t = d.inMicroseconds / 1e6;
      final dt = math.min(0.05, t - _lastT);
      _lastT = t;
      clock.value = t;
      sceneStep(dt);
    })..start();
  }

  void stopClock() {
    _sceneTicker.dispose();
    clock.dispose();
  }
}

/// Words that come out a few letters at a time while a person talks.
class _Typer {
  _Typer(this.onTick);
  final VoidCallback onTick;
  Timer? _t;
  String text = '';
  int shown = 0;

  bool get talking => shown < text.length;
  String get visible => text.substring(0, math.min(shown, text.length));

  void say(String s) {
    _t?.cancel();
    text = s;
    shown = 0;
    _t = Timer.periodic(const Duration(milliseconds: 30), (t) {
      shown = math.min(text.length, shown + 2);
      if (shown >= text.length) t.cancel();
      onTick();
    });
  }

  void skip() {
    _t?.cancel();
    shown = text.length;
    onTick();
  }

  void dispose() => _t?.cancel();
}

// ═════════════════════════════════════════════════════════════════════════════
// VILLAGE SCHOOL
// ═════════════════════════════════════════════════════════════════════════════

class FamilySchoolPage extends StatefulWidget {
  const FamilySchoolPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<FamilySchoolPage> createState() => FamilySchoolPageState();
}

class FamilySchoolPageState extends State<FamilySchoolPage> with SingleTickerProviderStateMixin, _SceneClock {
  late final List<FamilyQuestion> qs = generateFamilyQuestions(widget.tree, count: 10, seed: widget.seed, test: true);
  late final FamilyGameData data = FamilyGameData(widget.tree);
  final FiresideBackdrop backdrop = FiresideBackdrop();
  late final _Typer typer = _Typer(() {
    if (mounted) setState(() {});
  });
  final List<int> answers = [];
  int index = 0, wonStars = 0, totalStars = 0;
  bool started = false, done = false, record = false;
  double wipeStart = -9, raisedUntil = -9;

  FamilyQuestion get q => qs[index];
  int get right => [for (var i = 0; i < answers.length; i++) if (answers[i] == qs[i].correct) 1].length;
  int get teacherLook => data.elder?.gender == FamilyGender.female ? 1 : 0;
  String get teacherName => data.elder == null ? 'Elder' : data.nameOf(data.elder!);

  /// True while the teacher is still writing the question on the board.
  bool get writing => started && typer.talking;

  @override
  void initState() {
    super.initState();
    startClock();
  }

  @override
  void dispose() {
    typer.dispose();
    backdrop.dispose();
    stopClock();
    super.dispose();
  }

  /// The test begins: the teacher writes the first question.
  void begin() {
    setState(() => started = true);
    typer.say(q.text);
  }

  /// The pupil picks an answer: the teacher nods, the board is wiped, and the next question is written.
  void answer(int i) {
    if (!started || done || writing || answers.length > index) return;
    answers.add(i);
    wipeStart = clock.value;
    raisedUntil = clock.value + 1.0;
    setState(() {});
    Timer(const Duration(milliseconds: 900), () async {
      if (!mounted) return;
      if (index + 1 >= qs.length) {
        final stars = starsForResult(right: right, total: qs.length);
        setState(() {
          done = true;
          wonStars = stars;
        });
        totalStars = await FamilyStars.add(widget.email, stars);
        record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'school', right * 10);
        if (mounted) setState(() {});
      } else {
        setState(() => index++);
        typer.say(q.text);
      }
    });
  }

  (String, String) grade() {
    final p = right / qs.length * 100;
    if (p >= 90) return ('A', 'Keeper of the Family');
    if (p >= 75) return ('B', 'Faithful Listener');
    if (p >= 60) return ('C', 'Good Learner');
    if (p >= 45) return ('D', 'Still Growing');
    return ('E', 'Sit by the fire again');
  }

  @override
  Widget build(BuildContext context) {
    if (done) return _report();
    return FamilyGameShell(
      title: 'Village School',
      child: Stack(children: [
        Positioned.fill(child: RepaintBoundary(child: CustomPaint(painter: _SchoolPainter(this)))),
        Positioned(
          left: 10,
          right: 10,
          bottom: 10,
          child: !started
              ? Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(color: kCream.withValues(alpha: 0.96), borderRadius: BorderRadius.circular(20), border: Border.all(color: kGold, width: 3)),
                  child: Column(mainAxisSize: MainAxisSize.min, children: [
                    Text('Elder $teacherName is your teacher. Ten questions about the family are written on the board. Answer each one; the marks come at the end.', textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w800, height: 1.35)),
                    const SizedBox(height: 10),
                    familyBigButton('Start the test', begin, icon: Icons.edit_rounded),
                  ]),
                )
              : Column(mainAxisSize: MainAxisSize.min, children: [
                  Text('Question ${index + 1} of ${qs.length}', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, shadows: [Shadow(blurRadius: 6)])),
                  const SizedBox(height: 6),
                  AnimatedSwitcher(
                    duration: const Duration(milliseconds: 350),
                    child: writing
                        ? const SizedBox(key: ValueKey('w'), height: 56, child: Center(child: Text('The teacher is writing…', style: TextStyle(color: Colors.white70, fontWeight: FontWeight.w700))))
                        : Wrap(key: ValueKey('o$index'), alignment: WrapAlignment.center, spacing: 8, runSpacing: 8, children: [
                            for (var i = 0; i < q.options.length; i++)
                              GestureDetector(
                                onTap: () => answer(i),
                                child: Container(
                                  constraints: const BoxConstraints(minWidth: 140),
                                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 13),
                                  decoration: BoxDecoration(color: const Color(0xFF1F3D2B), borderRadius: BorderRadius.circular(10), border: Border.all(color: _wood, width: 4)),
                                  child: Text(q.options[i], textAlign: TextAlign.center, style: const TextStyle(color: _chalk, fontWeight: FontWeight.w800, fontSize: 15.5)),
                                ),
                              ),
                          ]),
                  ),
                ]),
        ),
      ]),
    );
  }

  Widget _report() {
    final g = grade();
    final wrong = [for (var i = 0; i < answers.length; i++) if (answers[i] != qs[i].correct) i];
    return FamilyGameShell(
      title: 'Village School',
      child: ListView(padding: const EdgeInsets.all(16), children: [
        Container(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(color: kCream, borderRadius: BorderRadius.circular(22), border: Border.all(color: kGold, width: 4)),
          child: Column(children: [
            const Text('REPORT CARD', style: TextStyle(color: kClay, fontWeight: FontWeight.w900, letterSpacing: 4, fontSize: 13)),
            const SizedBox(height: 4),
            Text(widget.tree.name, textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 22)),
            Text('Signed by Elder $teacherName', style: const TextStyle(color: kEarth, fontWeight: FontWeight.w700)),
            const SizedBox(height: 10),
            Stack(alignment: Alignment.center, children: [
              Text(g.$1, style: const TextStyle(color: kKenteRed, fontWeight: FontWeight.w900, fontSize: 84, height: 1)),
              const Positioned(right: -34, top: 0, child: Text('🏅', style: TextStyle(fontSize: 44))),
            ]),
            Text(g.$2, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 6),
            Text('$right of ${qs.length} right', style: const TextStyle(color: kClay, fontWeight: FontWeight.w800)),
            const SizedBox(height: 8),
            const KenteBand(height: 10),
          ]),
        ),
        const SizedBox(height: 14),
        FamilyWinnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
        if (wrong.isNotEmpty) ...[
          const SizedBox(height: 16),
          const Text('THE TEACHER EXPLAINS THESE', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 1.2)),
          const SizedBox(height: 8),
          for (final i in wrong)
            Container(
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: Colors.white10, borderRadius: BorderRadius.circular(14), border: Border.all(color: Colors.white12)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(qs[i].text, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
                const SizedBox(height: 4),
                Text('You said: ${qs[i].options[answers[i]]}', style: const TextStyle(color: Colors.redAccent, fontSize: 13)),
                Text(qs[i].explain, style: const TextStyle(color: kLeaf, fontWeight: FontWeight.w700, fontSize: 13)),
              ]),
            ),
        ],
        const SizedBox(height: 14),
        Center(child: familyBigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
      ]),
    );
  }
}

class _SchoolPainter extends CustomPainter {
  _SchoolPainter(this.s) : super(repaint: s.clock);
  final FamilySchoolPageState s;

  @override
  void paint(Canvas c, Size size) {
    final t = s.clock.value;
    paintVillageBackdrop(c, size, s.backdrop);
    final f = _fit(size);
    c.save();
    c.translate(f.dx, f.dy);
    c.scale(f.u);
    final writing = s.writing;
    // The board stands on two poles, with a frame, a chalk tray and a duster.
    const board = Rect.fromLTWH(30, 96, 390, 250);
    for (final x in const [90.0, 360.0]) {
      c.drawRect(Rect.fromLTWH(x - 6, 340, 12, 110), Paint()..color = const Color(0xFF4A2C14));
    }
    c.drawRRect(RRect.fromRectAndRadius(board.inflate(10), const Radius.circular(12)), Paint()..color = _wood);
    c.drawRRect(RRect.fromRectAndRadius(board, const Radius.circular(6)), Paint()..shader = ui.Gradient.linear(board.topLeft, board.bottomRight, const [Color(0xFF244C36), Color(0xFF16301F)]));
    final rr = math.Random(2);
    for (var i = 0; i < 18; i++) {
      c.drawOval(Rect.fromCenter(center: Offset(board.left + rr.nextDouble() * board.width, board.top + rr.nextDouble() * board.height), width: 30 + rr.nextDouble() * 60, height: 8 + rr.nextDouble() * 14), Paint()..color = Colors.white.withValues(alpha: 0.025));
    }
    c.drawRect(Rect.fromLTWH(board.left, board.bottom + 8, board.width, 8), Paint()..color = const Color(0xFF5E3920));
    c.drawRect(const Rect.fromLTWH(60, 342, 28, 6), Paint()..color = _chalk);
    c.drawRect(const Rect.fromLTWH(95, 343, 20, 5), Paint()..color = const Color(0xFFFDE68A));
    c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(300, 336, 50, 12), const Radius.circular(3)), Paint()..color = const Color(0xFFB4783A));
    // What is written, and the sponge that wipes it.
    final wipe = ((t - s.wipeStart) / 0.7).clamp(0.0, 1.0);
    if (s.started) {
      final tp = TextPainter(text: TextSpan(text: s.typer.visible + (writing ? '|' : ''), style: const TextStyle(color: _chalk, fontSize: 27, fontWeight: FontWeight.w700, fontStyle: FontStyle.italic, height: 1.3)), textDirection: TextDirection.ltr, maxLines: 7)..layout(maxWidth: board.width - 44);
      c.save();
      c.clipRect(board);
      if (wipe < 1 && s.answers.length > s.index) {
        c.clipRect(Rect.fromLTRB(board.left + board.width * wipe, board.top, board.right, board.bottom));
      }
      tp.paint(c, Offset(board.left + 22, board.top + 22));
      c.restore();
      if (wipe > 0 && wipe < 1) {
        c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(board.left + board.width * wipe - 20, board.top + 30 + 40 * math.sin(wipe * 9), 40, 90), const Radius.circular(8)), Paint()..color = const Color(0xFFE5C07A));
      }
    } else {
      final tp = TextPainter(text: const TextSpan(text: 'Today: how well do you know the family?', style: TextStyle(color: _chalk, fontSize: 28, fontWeight: FontWeight.w700, fontStyle: FontStyle.italic, height: 1.3)), textDirection: TextDirection.ltr, textAlign: TextAlign.center)..layout(maxWidth: board.width - 50);
      tp.paint(c, Offset(board.left + 25, board.top + 80));
    }
    // Chalk dust drifts while the teacher writes.
    if (writing) {
      for (var i = 0; i < 8; i++) {
        final ph = (t * 1.2 + i / 8) % 1.0;
        c.drawCircle(Offset(board.left + 40 + (s.typer.shown * 9.0) % (board.width - 80) + math.sin(i + t * 3) * 6, board.top + 70 + ph * 70), 1.6, Paint()..color = Colors.white.withValues(alpha: 0.7 * (1 - ph)));
      }
    }
    // The teacher, with a pointer stick; and the children on their mats, all looking at the board.
    final board0 = const Offset(250, 210);
    final tLook = s.teacherLook;
    final raised = t < s.raisedUntil;
    final order = <(double, void Function())>[
      (470, () {
        final hand = Offset(46 + math.sin(t * 3.1) * 8, -90 + math.sin(t * 4.3) * 10);
        paintFolk(c, base: const Offset(372, 470), scale: 1.2, look: tLook, t: t, mouth: writing ? folkTalk(t, 1) : 0, smile: raised ? 0.9 : 0.3, brow: 0.2, gx: -0.6, gy: -0.2, turn: -0.3, nod: raised ? math.sin(t * 9) * 2 : (writing ? math.sin(t * 4) : 0), handR: writing ? hand : const Offset(36, -24), light: const Offset(100, 300));
        if (writing) {
          final from = Offset(372 + 1.2 * hand.dx, 470 + 1.2 * hand.dy);
          c.drawLine(from, board0 + Offset(math.sin(t * 3) * 14, math.sin(t * 2) * 6), Paint()..color = const Color(0xFF8A5A33)..strokeWidth = 3..strokeCap = StrokeCap.round);
        }
      }),
      (520, () => paintFolk(c, base: const Offset(150, 520), scale: 1.05, look: 5, t: t, smile: 0.3, brow: writing ? 0.3 : 0, gx: 0.7, gy: -0.5, turn: 0.3, nod: writing ? math.max(0.0, math.sin(t * 1.7)) * 2 : 0, light: const Offset(225, 300))),
      (575, () => paintFolk(c, base: const Offset(95, 575), scale: 1.2, look: 2, t: t, smile: 0.3, gx: 0.8, gy: -0.5, turn: 0.35, nod: writing ? math.max(0.0, math.sin(t * 1.9 + 1)) * 2.4 : 0, light: const Offset(225, 300))),
      (585, () => paintFolk(c, base: const Offset(335, 585), scale: 1.2, look: 4, t: t, smile: 0.25, brow: s.started && !writing ? 0.5 : 0.1, gx: -0.8, gy: -0.5, turn: -0.35, light: const Offset(225, 300))),
      (615, () {
        // You: your hand goes up to answer, and you nod when you have chosen.
        final waiting = s.started && !writing && s.answers.length <= s.index;
        paintFolk(c, base: const Offset(222, 615), scale: 1.3, look: 3, t: t, smile: raised ? 0.9 : 0.3, brow: waiting ? 0.5 : 0, gx: 0, gy: -0.6, nod: raised ? math.sin(t * 9) * 2.4 : 0, handR: waiting ? Offset(34, -122 + math.sin(t * 5) * 5) : (raised ? const Offset(34, -60) : const Offset(36, -24)), light: const Offset(225, 300));
        c.drawPath(_star(Offset(222, 615 - 160), 9), Paint()..color = kGold);
      }),
    ]..sort((a, b) => a.$1.compareTo(b.$1));
    for (final o in order) {
      o.$2();
    }
    c.restore();
  }

  Path _star(Offset p, double r) {
    final path = Path();
    for (var i = 0; i < 10; i++) {
      final a = -math.pi / 2 + i * math.pi / 5;
      final rad = i.isEven ? r : r * 0.45;
      final o = p + Offset(math.cos(a) * rad, math.sin(a) * rad);
      i == 0 ? path.moveTo(o.dx, o.dy) : path.lineTo(o.dx, o.dy);
    }
    return path..close();
  }

  @override
  bool shouldRepaint(covariant _SchoolPainter old) => false;
}

// ═════════════════════════════════════════════════════════════════════════════
// LINE UP
// ═════════════════════════════════════════════════════════════════════════════

/// A person of the portrait kinds [portraitKindOf] gives, as the villager to draw.
int _lookForKind(int kind) => const [1, 0, 7, 6, 3, 2][kind % 6];

class FamilyLineUpPage extends StatefulWidget {
  const FamilyLineUpPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<FamilyLineUpPage> createState() => FamilyLineUpPageState();
}

class FamilyLineUpPageState extends State<FamilyLineUpPage> with SingleTickerProviderStateMixin, _SceneClock {
  late final List<OrderRound> rounds = orderRounds(widget.tree, seed: widget.seed);
  final FiresideBackdrop backdrop = FiresideBackdrop();
  int round = 0, rightRounds = 0, wonStars = 0, totalStars = 0, selected = -1;
  late List<int> slots = _shuffle(0);

  /// Where each person stands now (it glides to its place).
  late List<double> xs = [for (var p = 0; p < slots.length; p++) _slotX(slots.indexOf(p), slots.length)];
  final Map<int, double> hop = {};
  bool checked = false, correct = false, done = false, record = false;
  double cheerUntil = -9, gaspUntil = -9;

  OrderRound get r => rounds[round];

  List<int> _shuffle(int rd) {
    if (rd >= rounds.length) return [];
    final n = rounds[rd].names.length;
    final idx = List.generate(n, (i) => i)..shuffle(math.Random(widget.seed + rd * 7));
    // Never start already in the right order.
    if (n > 1 && [for (var i = 0; i < n; i++) idx[i] == i ? 1 : 0].reduce((a, b) => a + b) == n) {
      final t = idx[0];
      idx[0] = idx[1];
      idx[1] = t;
    }
    return idx;
  }

  double _slotX(int pos, int n) => 450 * (pos + 0.5) / n;

  @override
  void initState() {
    super.initState();
    startClock();
  }

  @override
  void dispose() {
    backdrop.dispose();
    stopClock();
    super.dispose();
  }

  @override
  void sceneStep(double dt) {
    final n = slots.length;
    for (var p = 0; p < n; p++) {
      final target = _slotX(slots.indexOf(p), n);
      xs[p] += (target - xs[p]) * math.min(1.0, dt * 9);
    }
  }

  /// A tap on a person: the first tap picks them up, the second tap on someone else swaps the two.
  void tapPerson(int p) {
    if (checked || done || p < 0 || p >= slots.length) return;
    if (selected == -1) {
      setState(() => selected = p);
      return;
    }
    if (selected == p) {
      setState(() => selected = -1);
      return;
    }
    final a = slots.indexOf(selected), b = slots.indexOf(p);
    setState(() {
      slots[a] = p;
      slots[b] = selected;
      hop[p] = clock.value + 0.5;
      hop[selected] = clock.value + 0.5;
      selected = -1;
    });
  }

  /// Which person stands at screen position [x] (in the 450 wide picture).
  int personAt(double x) {
    final n = slots.length;
    final pos = (x / 450 * n).floor().clamp(0, n - 1);
    return slots[pos];
  }

  /// "That is my line": right means the oldest is first and the youngest last.
  void check() {
    if (checked || done) return;
    final ok = [for (var k = 0; k < slots.length; k++) r.ranks[slots[k]] == k].every((e) => e);
    setState(() {
      checked = true;
      correct = ok;
      selected = -1;
      if (ok) {
        rightRounds++;
        cheerUntil = clock.value + 3;
      } else {
        gaspUntil = clock.value + 1.6;
      }
    });
  }

  Future<void> next() async {
    if (round + 1 >= rounds.length) {
      final stars = rightRounds * 10 + (rightRounds == rounds.length ? 15 : 0);
      setState(() {
        done = true;
        wonStars = stars;
      });
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'lineup', rightRounds * 10);
      if (mounted) setState(() {});
      return;
    }
    setState(() {
      round++;
      slots = _shuffle(round);
      xs = [for (var p = 0; p < slots.length; p++) _slotX(slots.indexOf(p), slots.length)];
      selected = -1;
      checked = false;
      hop.clear();
    });
  }

  @override
  Widget build(BuildContext context) {
    if (done) {
      return FamilyGameShell(
        title: 'Line Up',
        child: ListView(padding: const EdgeInsets.all(20), children: [
          const Center(child: Text('🌳', style: TextStyle(fontSize: 70))),
          Center(child: Text('$rightRounds of ${rounds.length} lines right', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
          const SizedBox(height: 16),
          FamilyWinnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
          const SizedBox(height: 16),
          Center(child: familyBigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
        ]),
      );
    }
    final order = [for (var k = 0; k < r.names.length; k++) k]..sort((a, b) => r.ranks[a].compareTo(r.ranks[b]));
    return FamilyGameShell(
      title: 'Line Up',
      child: Stack(children: [
        Positioned.fill(
          child: LayoutBuilder(builder: (context, box) {
            final f = _fit(box.biggest);
            return GestureDetector(
              behavior: HitTestBehavior.opaque,
              onTapDown: (d) {
                final x = (d.localPosition.dx - f.dx) / f.u;
                final y = (d.localPosition.dy - f.dy) / f.u;
                if (y > 380 && y < 760) tapPerson(personAt(x));
              },
              child: RepaintBoundary(child: CustomPaint(painter: _LineUpPainter(this))),
            );
          }),
        ),
        Positioned(
          left: 12,
          right: 12,
          top: 4,
          child: Column(children: [
            Text('Round ${round + 1} of ${rounds.length}', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, shadows: [Shadow(blurRadius: 6)])),
            Text(r.title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20, shadows: [Shadow(blurRadius: 8)])),
            Text(r.hint, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 12.5, shadows: [Shadow(blurRadius: 6)])),
          ]),
        ),
        Positioned(
          left: 12,
          right: 12,
          bottom: 12,
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            if (checked)
              Container(
                width: double.infinity,
                margin: const EdgeInsets.only(bottom: 10),
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.7), borderRadius: BorderRadius.circular(16), border: Border.all(color: correct ? kLeaf : kKenteRed, width: 2)),
                child: Text(correct ? 'Yes! That is the right line. The whole village cheers.' : 'Not quite. The right line is: ${order.map((k) => r.names[k]).join(', then ')}.', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, height: 1.35)),
              ),
            if (!checked) familyBigButton('That is my line!', check, icon: Icons.check_rounded) else familyBigButton(round + 1 >= rounds.length ? 'See my result' : 'Next family', next, icon: Icons.arrow_forward_rounded),
          ]),
        ),
      ]),
    );
  }
}

class _LineUpPainter extends CustomPainter {
  _LineUpPainter(this.s) : super(repaint: s.clock);
  final FamilyLineUpPageState s;

  @override
  void paint(Canvas c, Size size) {
    final t = s.clock.value;
    paintVillageBackdrop(c, size, s.backdrop);
    final f = _fit(size);
    c.save();
    c.translate(f.dx, f.dy);
    c.scale(f.u);
    final n = s.slots.length;
    // A rope across the picture with flags, and the words at its two ends.
    final rope = Path()..moveTo(10, 470)..quadraticBezierTo(225, 500, 440, 470);
    c.drawPath(rope, Paint()..color = const Color(0xFFB4783A)..style = PaintingStyle.stroke..strokeWidth = 4);
    for (var i = 0; i < 12; i++) {
      final x = 30 + i * 36.0, y = 470 + 30 * math.sin(math.pi * (x - 10) / 430) * 0.95;
      final wave = math.sin(t * 3 + i) * 3;
      c.drawPath(Path()..moveTo(x, y)..lineTo(x + 16, y + 6 + wave)..lineTo(x, y + 20)..close(), Paint()..color = [kGold, kKenteRed, kLeaf, const Color(0xFF38BDF8)][i % 4]);
    }
    _label(c, 'OLDEST', const Offset(60, 455), kGold);
    _label(c, 'YOUNGEST', const Offset(390, 455), const Color(0xFF4ADE80));
    // A long bench of logs for everybody to sit on.
    c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(10, 612, 430, 16), const Radius.circular(8)), Paint()..color = const Color(0xFF4A2C14));
    c.drawRRect(RRect.fromRectAndRadius(const Rect.fromLTWH(10, 612, 430, 6), const Radius.circular(6)), Paint()..color = const Color(0xFF7A4A24));
    final cheer = t < s.cheerUntil, gasp = t < s.gaspUntil;
    final sc = n >= 5 ? 0.92 : 1.12;
    final order = [for (var p = 0; p < n; p++) p]..sort((a, b) => 0);
    for (final p in order) {
      final k = s.slots.indexOf(p);
      final x = s.xs[p];
      final isSel = s.selected == p;
      var bounce = isSel ? math.sin(t * 9).abs() * 10 : 0.0;
      final h = s.hop[p];
      if (h != null && t < h) bounce += math.sin((1 - (h - t) / 0.5) * math.pi) * 14;
      final good = s.checked && s.r.ranks[p] == k;
      final bad = s.checked && !s.correct && !good;
      final kind = s.r.kinds.length > p ? s.r.kinds[p] : p;
      final cheering = cheer || (s.checked && good);
      final cl = math.max(0.0, math.sin(t * 10 + p));
      if (isSel) c.drawCircle(Offset(x, 520), 54, Paint()..color = kGold.withValues(alpha: 0.22 + 0.1 * math.sin(t * 8)));
      paintFolk(
        c,
        base: Offset(x, 612),
        scale: sc,
        look: _lookForKind(kind),
        t: t,
        smile: cheering ? 1 : (bad ? -0.4 : 0.35),
        mouth: cheering ? 0.4 + 0.4 * cl : (gasp && bad ? 0.5 : 0),
        brow: gasp && bad ? 1 : (isSel ? 0.6 : 0),
        squint: cheering ? 0.5 : 0,
        gx: ((225 - x) / 225) * 0.5,
        gy: -0.3,
        turn: bad ? math.sin(t * 12) * 0.5 : 0,
        bounce: cheering ? bounce + cl * 8 : bounce,
        handL: cheering ? Offset(-3 - cl * 8, -56) : (isSel ? const Offset(-30, -100) : null),
        handR: cheering ? Offset(3 + cl * 8, -56) : (gasp && bad ? const Offset(9, -79) : (isSel ? Offset(30, -104 + math.sin(t * 8) * 5) : null)),
        light: const Offset(225, 300),
      );
      // The name on a small plaque, green when the person is in the right place and red when not.
      final tp = TextPainter(text: TextSpan(text: s.r.names[p], style: const TextStyle(color: kEarth, fontSize: 13, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr, maxLines: 1, ellipsis: '…')..layout(maxWidth: 440 / n - 8);
      final plaque = RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(x, 650), width: tp.width + 16, height: 24), const Radius.circular(8));
      c.drawRRect(plaque, Paint()..color = good ? const Color(0xFFBBF7D0) : (bad ? const Color(0xFFFECACA) : kCream));
      c.drawRRect(plaque, Paint()..color = good ? kLeaf : (bad ? kKenteRed : kClay)..style = PaintingStyle.stroke..strokeWidth = 2);
      tp.paint(c, Offset(x - tp.width / 2, 650 - tp.height / 2));
      // The place number under the plaque, so the line can be read.
      final no = TextPainter(text: TextSpan(text: '${k + 1}', style: const TextStyle(color: Colors.white70, fontSize: 12, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
      no.paint(c, Offset(x - no.width / 2, 668));
    }
    if (cheer) {
      for (var i = 0; i < 26; i++) {
        final x = (i * 53.0 + math.sin(t * 2 + i) * 20) % 450;
        final y = 140 + ((t * 120 + i * 37) % 420);
        c.save();
        c.translate(x, y);
        c.rotate(t * 4 + i);
        c.drawRect(Rect.fromCenter(center: Offset.zero, width: 8, height: 4), Paint()..color = [kGold, kKenteRed, kLeaf, const Color(0xFF38BDF8), Colors.white][i % 5]);
        c.restore();
      }
    }
    c.restore();
  }

  void _label(Canvas c, String text, Offset at, Color col) {
    final tp = TextPainter(text: TextSpan(text: text, style: TextStyle(color: col, fontSize: 13, fontWeight: FontWeight.w900, letterSpacing: 2, shadows: const [Shadow(blurRadius: 6)])), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, at - Offset(tp.width / 2, tp.height / 2));
  }

  @override
  bool shouldRepaint(covariant _LineUpPainter old) => false;
}

// ═════════════════════════════════════════════════════════════════════════════
// SAFARI JOURNEY
// ═════════════════════════════════════════════════════════════════════════════

enum _Trip { intro, asking, reacting, driving, arrived }

class FamilyJourneyPage extends StatefulWidget {
  const FamilyJourneyPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<FamilyJourneyPage> createState() => FamilyJourneyPageState();
}

class FamilyJourneyPageState extends State<FamilyJourneyPage> with SingleTickerProviderStateMixin, _SceneClock {
  late final List<FamilyQuestion> stops = generateFamilyQuestions(widget.tree, count: 8, seed: widget.seed);
  late final FamilyGameData data = FamilyGameData(widget.tree);
  late final _Typer typer = _Typer(() {
    if (mounted) setState(() {});
  });
  _Trip stage = _Trip.intro;
  /// The stop the bus is at (-1 before the first drive).
  int stop = -1, right = 0, streak = 0, bestStreak = 0, picked = -1, wonStars = 0, totalStars = 0;
  bool correct = false, flat = false, record = false;

  /// How far the bus has gone along the road, and the part of the road it is driving over now.
  double scroll = 0, _from = 0, _driveT = 0, _driveSecs = 2.6;
  static const double stopGap = 520;

  FamilyQuestion get q => stops[stop];
  String get elderName => data.elder == null ? 'Grandma' : data.nameOf(data.elder!);
  bool get elderIsWoman => data.elder?.gender == FamilyGender.female;

  @override
  void initState() {
    super.initState();
    startClock();
  }

  @override
  void dispose() {
    typer.dispose();
    stopClock();
    super.dispose();
  }

  @override
  void sceneStep(double dt) {
    if (stage != _Trip.driving) return;
    _driveT += dt;
    final p = Curves.easeInOut.transform((_driveT / _driveSecs).clamp(0.0, 1.0));
    scroll = _from + stopGap * p;
    if (_driveT >= _driveSecs) {
      scroll = _from + stopGap;
      if (stop + 1 >= stops.length) {
        stage = _Trip.arrived;
        _arrive();
      } else {
        stop++;
        flat = false;
        stage = _Trip.asking;
        typer.say(q.text);
      }
      if (mounted) setState(() {});
    }
  }

  Future<void> _arrive() async {
    typer.say('Karibu! Welcome home, my child. You answered every stop, and the whole family is proud of you. Come, sit, the food is ready.');
    final stars = starsForResult(right: right, total: stops.length, streakBest: bestStreak);
    wonStars = stars;
    totalStars = await FamilyStars.add(widget.email, stars);
    record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'journey', right * 10);
    if (mounted) setState(() {});
  }

  /// The bus sets off for the first stop.
  void setOff() {
    _drive();
  }

  void _drive() {
    _from = scroll;
    _driveT = 0;
    _driveSecs = flat ? 3.4 : 2.6;
    stage = _Trip.driving;
    if (mounted) setState(() {});
  }

  /// A tap on an answer: the villager answers back, and the bus honks or gets a flat tyre.
  void answer(int i) {
    if (stage != _Trip.asking) return;
    final ok = i == q.correct;
    if (ok) {
      right++;
      streak++;
      bestStreak = math.max(bestStreak, streak);
    } else {
      streak = 0;
      flat = true;
    }
    setState(() {
      picked = i;
      correct = ok;
      stage = _Trip.reacting;
    });
    typer.say(ok ? 'Hongera! ${q.explain} Beep beep, off you go!' : 'Pole, the tyre is flat! Listen: ${q.explain} We will limp on slowly.');
  }

  /// "Drive on": the bus goes to the next stop.
  void driveOn() {
    if (stage != _Trip.reacting) return;
    _drive();
  }

  @override
  Widget build(BuildContext context) {
    return FamilyGameShell(
      title: 'Safari Journey',
      child: Stack(children: [
        Positioned.fill(child: RepaintBoundary(child: CustomPaint(painter: _JourneyPainter(this)))),
        Positioned(
          left: 12,
          right: 12,
          top: 2,
          child: Row(children: [
            for (var i = 0; i <= stops.length; i++)
              Expanded(
                child: Container(
                  margin: const EdgeInsets.symmetric(horizontal: 2),
                  height: 7,
                  decoration: BoxDecoration(color: i < stop || stage == _Trip.arrived ? kGold : (i == stop ? Colors.white : Colors.white24), borderRadius: BorderRadius.circular(4)),
                ),
              ),
            const SizedBox(width: 6),
            const Text('🏡', style: TextStyle(fontSize: 16)),
          ]),
        ),
        Positioned(left: 10, right: 10, bottom: 10, child: _panel()),
      ]),
    );
  }

  Widget _panel() {
    Widget talk(String who) => GestureDetector(
          behavior: HitTestBehavior.opaque,
          onTap: typer.skip,
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(who, style: const TextStyle(color: kClay, fontWeight: FontWeight.w900, fontSize: 12.5)),
            const SizedBox(height: 2),
            Text(typer.visible + (typer.talking ? '▍' : ''), style: const TextStyle(color: kEarth, fontWeight: FontWeight.w700, fontSize: 14.5, height: 1.3)),
          ]),
        );
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: kCream.withValues(alpha: 0.96), borderRadius: BorderRadius.circular(22), border: Border.all(color: kGold, width: 3), boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 14)]),
      child: switch (stage) {
        _Trip.intro => Column(mainAxisSize: MainAxisSize.min, children: [
            Text('A long drive to the village of Elder $elderName. At every stop a villager asks you something about the family. Answer well and the bus flies. Get it wrong and a tyre goes flat!', textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w800, height: 1.35)),
            const SizedBox(height: 10),
            familyBigButton('Start the journey', setOff, icon: Icons.directions_bus_rounded),
          ]),
        _Trip.driving => const Center(child: Padding(padding: EdgeInsets.all(8), child: Text('🚌  On the road…', style: TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 16)))),
        _Trip.asking => Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            talk('Stop ${stop + 1} of ${stops.length} · a villager asks'),
            const SizedBox(height: 8),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (var i = 0; i < q.options.length; i++)
                GestureDetector(
                  onTap: () => answer(i),
                  child: Container(
                    constraints: const BoxConstraints(minWidth: 130),
                    padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 11),
                    decoration: BoxDecoration(color: const Color(0xFFFFE8B0), borderRadius: BorderRadius.circular(14), border: Border.all(color: kClay, width: 2.5)),
                    child: Text(q.options[i], textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 14.5)),
                  ),
                ),
            ]),
          ]),
        _Trip.reacting => Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            talk(correct ? 'The villager cheers' : 'A flat tyre!'),
            const SizedBox(height: 8),
            Align(alignment: Alignment.centerRight, child: familyBigButton(stop + 1 >= stops.length ? 'Drive home' : 'Drive on', driveOn, icon: Icons.arrow_forward_rounded)),
          ]),
        _Trip.arrived => Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            talk('Elder $elderName'),
            const SizedBox(height: 8),
            Text('$right of ${stops.length} right  ·  +$wonStars ⭐', style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 17)),
            if (totalStars > 0) Text('${badgeFor(totalStars).emoji} ${badgeFor(totalStars).name} · $totalStars stars${record ? ' · 🏆 new record!' : ''}', style: const TextStyle(color: kClay, fontWeight: FontWeight.w800)),
            const SizedBox(height: 8),
            Center(child: familyBigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
          ]),
      },
    );
  }
}

class _JourneyPainter extends CustomPainter {
  _JourneyPainter(this.s) : super(repaint: s.clock);
  final FamilyJourneyPageState s;

  @override
  void paint(Canvas c, Size size) {
    final t = s.clock.value;
    final w = size.width, h = size.height;
    final progress = (s.scroll / (FamilyJourneyPageState.stopGap * (s.stops.length + 1))).clamp(0.0, 1.0);
    final driving = s.stage == _Trip.driving;
    final groundY = h * 0.5;
    // The sky goes from morning blue to evening gold as the journey goes on.
    final top = Color.lerp(const Color(0xFF4FA3E3), const Color(0xFF3B2A6B), progress)!;
    final mid = Color.lerp(const Color(0xFFBFE6FF), const Color(0xFFF7797D), progress)!;
    final low = Color.lerp(const Color(0xFFFFF3C4), const Color(0xFFFFC46B), progress)!;
    c.drawRect(Offset.zero & size, Paint()..shader = ui.Gradient.linear(Offset.zero, Offset(0, groundY), [top, mid, low], const [0, 0.6, 1]));
    final sun = Offset(w * (0.15 + 0.7 * progress), groundY * (0.28 + 0.45 * progress * progress));
    c.drawCircle(sun, 60, Paint()..shader = ui.Gradient.radial(sun, 60, [const Color(0x66FFF1B8), Colors.transparent]));
    c.drawCircle(sun, 22, Paint()..color = const Color(0xFFFFF4C2));
    // Clouds drift slowly.
    for (var i = 0; i < 5; i++) {
      final x = ((i * 190.0 - s.scroll * 0.06 - t * 4) % (w + 240)) - 120;
      final y = h * 0.06 + (i % 3) * 22.0;
      for (final o in const [Offset(0, 0), Offset(24, -8), Offset(48, 0), Offset(24, 6)]) {
        c.drawCircle(Offset(x, y) + o, 18, Paint()..color = Colors.white.withValues(alpha: 0.75));
      }
    }
    // Far hills, then the trees, each moving by a different amount (so it looks deep).
    for (var l = 0; l < 2; l++) {
      final p = Path()..moveTo(0, groundY + 4);
      for (var x = 0.0; x <= w; x += 6) {
        p.lineTo(x, groundY - 16 - l * 12 + math.sin((x + s.scroll * (0.12 + l * 0.1)) / (70 + l * 30)) * (14 - l * 3));
      }
      p.lineTo(w, groundY + 4);
      c.drawPath(p, Paint()..color = Color.lerp(l == 0 ? const Color(0xFF5B7BA6) : const Color(0xFF4B6B7A), const Color(0xFF3A2B5C), progress * 0.7)!);
    }
    for (var i = 0; i < 8; i++) {
      final px = ((i * 300.0 - s.scroll * 0.5) % 2400 + 2400) % 2400 - 150;
      _tree(c, Offset(px, groundY + 2), i.isEven, progress);
    }
    // The ground and the road.
    c.drawRect(Rect.fromLTRB(0, groundY, w, h), Paint()..shader = ui.Gradient.linear(Offset(0, groundY), Offset(0, h), [Color.lerp(const Color(0xFFD9B26B), const Color(0xFF8A5A33), progress)!, const Color(0xFF6B4A2A)]));
    final roadTop = h * 0.56, roadBot = h * 0.66;
    c.drawRect(Rect.fromLTRB(0, roadTop, w, roadBot), Paint()..color = const Color(0xFF4A4350));
    c.drawRect(Rect.fromLTRB(0, roadTop - 3, w, roadTop), Paint()..color = const Color(0xFF8A7A66));
    for (var x = -((s.scroll) % 70); x < w; x += 70) {
      c.drawRect(Rect.fromLTWH(x, (roadTop + roadBot) / 2 - 2, 36, 4), Paint()..color = const Color(0xFFF3C94A));
    }
    // The stops: a village sign, a hut, and the villager who asks the question; the last place is the elder's village.
    for (var i = 0; i <= s.stops.length; i++) {
      // Stop number i is the (i + 1)th place along the road; the bus is at the stop when it is a little ahead of the bus.
      final x = w * 0.62 + (i + 1) * FamilyJourneyPageState.stopGap - s.scroll;
      if (x < -160 || x > w + 160) continue;
      _stopScene(c, Offset(x, roadTop - 6), i, t, size, last: i == s.stops.length);
    }
    // The bus.
    _bus(c, Offset(w * 0.28, roadBot - 6), t, driving, size);
    // Dust and steam.
    if (driving) {
      for (var i = 0; i < 7; i++) {
        final ph = (t * 1.6 + i / 7) % 1.0;
        c.drawCircle(Offset(w * 0.28 - 90 - ph * 70, roadBot - 10 - ph * 18), 6 + ph * 16, Paint()..color = const Color(0xFFD9C29C).withValues(alpha: 0.5 * (1 - ph)));
      }
    }
    if (s.flat && s.stage != _Trip.intro) {
      for (var i = 0; i < 5; i++) {
        final ph = (t * 1.2 + i / 5) % 1.0;
        c.drawCircle(Offset(w * 0.28 + 62 + math.sin(i + t * 4) * 5, roadBot - 40 - ph * 50), 4 + ph * 10, Paint()..color = Colors.white.withValues(alpha: 0.5 * (1 - ph)));
      }
    }
    if (s.stage == _Trip.reacting && s.correct) {
      final tp = TextPainter(text: TextSpan(text: 'BEEP BEEP!', style: TextStyle(color: kGold, fontSize: 24, fontWeight: FontWeight.w900, shadows: const [Shadow(blurRadius: 8)])), textDirection: TextDirection.ltr)..layout();
      tp.paint(c, Offset(w * 0.28 - tp.width / 2 + 40, roadTop - 96 - math.sin(t * 9).abs() * 6));
    }
  }

  void _tree(Canvas c, Offset base, bool baobab, double progress) {
    final dark = Color.lerp(const Color(0xFF2F5D3A), const Color(0xFF1A2A3A), progress)!;
    if (baobab) {
      c.drawPath(Path()..moveTo(base.dx - 16, base.dy)..quadraticBezierTo(base.dx - 9, base.dy - 36, base.dx - 7, base.dy - 56)..lineTo(base.dx + 7, base.dy - 56)..quadraticBezierTo(base.dx + 9, base.dy - 36, base.dx + 16, base.dy)..close(), Paint()..color = const Color(0xFF6B5A58));
      for (final a in const [-1.0, -0.3, 0.4, 1.0]) {
        c.drawLine(base + const Offset(0, -54), base + Offset(a * 24, -72), Paint()..color = const Color(0xFF6B5A58)..strokeWidth = 4..strokeCap = StrokeCap.round);
        c.drawCircle(base + Offset(a * 26, -76), 10, Paint()..color = dark);
      }
    } else {
      c.drawLine(base, base + const Offset(-2, -34), Paint()..color = const Color(0xFF4A3A2A)..strokeWidth = 4);
      c.drawOval(Rect.fromCenter(center: base + const Offset(-2, -38), width: 60, height: 16), Paint()..color = dark);
    }
  }

  void _stopScene(Canvas c, Offset base, int i, double t, Size size, {required bool last}) {
    // A hut behind, a sign by the road.
    final hx = base.dx + 40;
    c.drawRect(Rect.fromLTWH(hx - 26, base.dy - 36, 52, 36), Paint()..color = const Color(0xFFB5683A));
    c.drawPath(Path()..moveTo(hx - 36, base.dy - 34)..lineTo(hx, base.dy - 72)..lineTo(hx + 36, base.dy - 34)..close(), Paint()..color = const Color(0xFFC9A04F));
    c.drawRect(Rect.fromLTWH(hx - 6, base.dy - 20, 12, 20), Paint()..color = const Color(0xFF2A150A));
    // The sign.
    final sx = base.dx - 36;
    c.drawRect(Rect.fromLTWH(sx - 2, base.dy - 56, 4, 56), Paint()..color = const Color(0xFF4A2C14));
    final board = RRect.fromRectAndRadius(Rect.fromLTWH(sx - 30, base.dy - 66, 60, 20), const Radius.circular(4));
    c.drawRRect(board, Paint()..color = const Color(0xFFF5DEB3));
    c.drawRRect(board, Paint()..color = _wood..style = PaintingStyle.stroke..strokeWidth = 2);
    final label = last ? 'HOME' : 'STOP ${i + 1}';
    final tp = TextPainter(text: TextSpan(text: label, style: const TextStyle(color: kEarth, fontSize: 11, fontWeight: FontWeight.w900)), textDirection: TextDirection.ltr)..layout();
    tp.paint(c, Offset(sx - tp.width / 2, base.dy - 56 - tp.height / 2));
    // The villager: asks the question at the stop where the bus is; the elder waves at the end.
    final here = last ? s.stage == _Trip.arrived : (i == s.stop && (s.stage == _Trip.asking || s.stage == _Trip.reacting));
    final look = last ? (s.elderIsWoman ? 1 : 0) : [0, 3, 6, 7, 2, 1, 4, 5][i % 8];
    final talking = s.typer.talking && here;
    final reacting = here && s.stage == _Trip.reacting;
    paintFolk(
      c,
      base: Offset(base.dx + 4, base.dy + 40),
      scale: 0.85,
      look: look,
      t: t + i,
      mouth: talking ? folkTalk(t, i.toDouble()) : 0,
      smile: reacting ? (s.correct ? 1 : -0.3) : (last && here ? 1 : 0.4),
      brow: here && s.stage == _Trip.asking ? 0.4 : 0,
      squint: reacting && s.correct ? 0.5 : 0,
      gx: -0.8,
      gy: -0.2,
      turn: -0.3,
      handR: last && here ? Offset(40, -110 + math.sin(t * 6) * 10) : (talking ? Offset(44 + math.sin(t * 3) * 8, -66 + math.sin(t * 4) * 10) : null),
      light: Offset(base.dx - 200, base.dy),
    );
  }

  void _bus(Canvas c, Offset base, double t, bool driving, Size size) {
    final bob = driving ? math.sin(t * 22) * 1.6 : math.sin(t * 2) * 0.4;
    final tilt = s.flat && s.stage != _Trip.intro ? 0.045 : 0.0;
    c.save();
    c.translate(base.dx, base.dy + bob);
    c.rotate(tilt);
    // Wheels, turning with the road.
    for (final x in const [-70.0, 58.0]) {
      final flatTyre = s.flat && s.stage != _Trip.intro && x > 0;
      c.save();
      c.translate(x, -4 + (flatTyre ? 4 : 0));
      c.drawCircle(Offset.zero, flatTyre ? 15 : 18, Paint()..color = const Color(0xFF1A1A1F));
      c.rotate(s.scroll / 18);
      c.drawCircle(Offset.zero, 9, Paint()..color = const Color(0xFFB8BCC8));
      for (var k = 0; k < 4; k++) {
        c.drawLine(Offset.zero, Offset(math.cos(k * math.pi / 2) * 9, math.sin(k * math.pi / 2) * 9), Paint()..color = const Color(0xFF6B7280)..strokeWidth = 2);
      }
      c.restore();
    }
    // The body: a bright safari bus with a kente band, a roof rack and luggage.
    final body = RRect.fromRectAndCorners(const Rect.fromLTWH(-100, -74, 200, 62), topLeft: const Radius.circular(18), topRight: const Radius.circular(10), bottomLeft: const Radius.circular(8), bottomRight: const Radius.circular(8));
    c.drawRRect(body, Paint()..shader = ui.Gradient.linear(const Offset(0, -74), const Offset(0, -12), const [Color(0xFFFACC15), Color(0xFFEAB308), Color(0xFFB45309)], const [0, 0.6, 1]));
    const stripe = [Color(0xFFD62828), Color(0xFF111111), Color(0xFF1B7F3B), Color(0xFFF2B01E)];
    for (var i = 0; i < 20; i++) {
      c.drawRect(Rect.fromLTWH(-100 + i * 10.0, -26, 10, 7), Paint()..color = stripe[i % 4]);
    }
    // Windows with the passengers (the children of the family), who wave and cheer.
    final cheer = s.stage == _Trip.reacting && s.correct;
    final look = [2, 3, 4, 5];
    for (var i = 0; i < 4; i++) {
      final win = Rect.fromLTWH(-88 + i * 38.0, -66, 32, 30);
      c.save();
      c.clipRRect(RRect.fromRectAndRadius(win, const Radius.circular(5)));
      c.drawRect(win, Paint()..color = const Color(0xFFBFE6FF));
      paintFolk(c, base: Offset(win.center.dx, win.bottom + 26), scale: 0.4, look: look[i], t: t, smile: cheer ? 1 : 0.35, mouth: cheer ? 0.5 : 0, brow: s.flat && s.stage == _Trip.reacting ? 1 : 0, gx: 0.5, gy: -0.2, bounce: cheer ? math.max(0.0, math.sin(t * 10 + i)) * 6 : 0, light: const Offset(300, 0));
      c.restore();
      c.drawRRect(RRect.fromRectAndRadius(win, const Radius.circular(5)), Paint()..color = const Color(0xFF5B3A12)..style = PaintingStyle.stroke..strokeWidth = 2);
    }
    // The driver's window and the front.
    final dw = const Rect.fromLTWH(66, -66, 28, 30);
    c.drawRRect(RRect.fromRectAndRadius(dw, const Radius.circular(5)), Paint()..color = const Color(0xFFBFE6FF));
    c.save();
    c.clipRRect(RRect.fromRectAndRadius(dw, const Radius.circular(5)));
    paintFolk(c, base: Offset(dw.center.dx, dw.bottom + 26), scale: 0.4, look: 6, t: t, smile: 0.5, gx: 0.7, gy: -0.1, light: const Offset(300, 0));
    c.restore();
    c.drawRRect(RRect.fromRectAndRadius(dw, const Radius.circular(5)), Paint()..color = const Color(0xFF5B3A12)..style = PaintingStyle.stroke..strokeWidth = 2);
    c.drawCircle(const Offset(98, -24), 4, Paint()..color = const Color(0xFFFFF3B0));
    c.drawRect(const Rect.fromLTWH(-98, -80, 190, 5), Paint()..color = const Color(0xFF4A2C14));
    for (final x in const [-70.0, -30.0, 20.0]) {
      c.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(x, -96, 28, 17), const Radius.circular(4)), Paint()..color = const Color(0xFF8A5A33));
    }
    c.restore();
  }

  @override
  bool shouldRepaint(covariant _JourneyPainter old) => false;
}
