import 'dart:async';
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';

import 'ngmy_electronics_cartoons.dart';
import 'ngmy_family_games_engine.dart';
import 'ngmy_family_games_ui.dart';
import 'ngmy_worksheets_storage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// THREE GAMES YOU PLAY WITH YOUR HANDS, NOT JUST BY CHOOSING AN ANSWER:
//  · Calabash Catch: gourds with the answers fall, and you slide the basket under the right one.
//  · Plant the Tree: you drag the children of a family onto the branches under their parent and watch the tree grow.
//  · Who Am I: a shadow turns into a face as the clues come; you pick the name as soon as you know.
// ═════════════════════════════════════════════════════════════════════════════

Widget _heart(bool on) => Icon(on ? Icons.favorite_rounded : Icons.favorite_border_rounded, color: on ? const Color(0xFFEF4444) : Colors.white38, size: 22);

// ═════════════════════════════════════════════════════════════════════════════
// CALABASH CATCH
// ═════════════════════════════════════════════════════════════════════════════

class _Gourd {
  _Gourd(this.option, this.x, this.text);
  final int option;
  final double x;
  final String text;

  /// How far down it has fallen, from 0 (the top) to 1 (the ground).
  double y = -0.05;
  bool caught = false, broken = false;
  double age = 0;
}

class _Spark {
  _Spark(this.x, this.y, this.vx, this.vy, this.color);
  double x, y;
  final double vx, vy;
  final Color color;
  double life = 1;
}

class CalabashCatchPage extends StatefulWidget {
  const CalabashCatchPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<CalabashCatchPage> createState() => CalabashCatchPageState();
}

class CalabashCatchPageState extends State<CalabashCatchPage> with SingleTickerProviderStateMixin {
  late final List<FamilyQuestion> questions = generateFamilyQuestions(widget.tree, count: 8, seed: widget.seed);
  late final Ticker _ticker = createTicker(_onTick);
  Duration _last = Duration.zero;
  final List<_Gourd> gourds = [];
  final List<_Spark> sparks = [];
  int index = 0, lives = 3, score = 0, right = 0, streak = 0, bestStreak = 0, wonStars = 0, totalStars = 0;
  bool started = false, over = false, record = false;

  /// Where the basket is (0 left, 1 right) and where it is going.
  double basketX = 0.5, targetX = 0.5;
  double clock = 0;
  String message = '';
  double messageUntil = 0, pause = 0;
  int popPoints = 0;
  double popAt = -9, popX = 0.5;

  FamilyQuestion get q => questions[index];

  @override
  void initState() {
    super.initState();
    _ticker.start();
  }

  @override
  void dispose() {
    _ticker.dispose();
    super.dispose();
  }

  void start() {
    setState(() {
      started = true;
      _spawn();
    });
  }

  void _onTick(Duration d) {
    final dt = math.min(0.05, (d - _last).inMicroseconds / 1e6);
    _last = d;
    update(dt);
    if (mounted) setState(() {});
  }

  void _spawn() {
    gourds.clear();
    final n = q.options.length;
    for (var i = 0; i < n; i++) {
      gourds.add(_Gourd(i, (i + 0.5) / n, q.options[i]));
    }
  }

  /// How long a gourd takes to fall: the game speeds up a little with every question.
  double get fallSeconds => 9.5 - math.min(index, 6) * 0.6;

  /// One step of the game: the basket glides, the gourds fall, and a gourd that reaches the basket is caught.
  void update(double dt) {
    clock += dt;
    if (!started || over) return;
    basketX += (targetX - basketX) * math.min(1.0, dt * 9);
    for (final s in sparks) {
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      s.life -= dt * 1.4;
    }
    sparks.removeWhere((s) => s.life <= 0);
    if (pause > 0) {
      pause -= dt;
      for (final g in gourds) {
        g.age += dt;
      }
      if (pause <= 0) _next();
      return;
    }
    for (final g in gourds) {
      if (g.caught || g.broken) continue;
      g.y += dt / fallSeconds * 1.0;
      g.age += dt;
      final x = g.x + math.sin(clock * 1.7 + g.option) * 0.012;
      if (g.y >= 0.74 && g.y <= 0.86 && (x - basketX).abs() < 0.12) {
        g.caught = true;
        _caught(g);
        return;
      }
      if (g.y > 0.9) {
        g.broken = true;
        _burst(x, 0.88, const Color(0xFFB4532A));
        if (g.option == q.correct) {
          _lose('The right gourd fell! It was ${q.options[q.correct]}.');
          return;
        }
      }
    }
  }

  void _burst(double x, double y, Color c) {
    final r = math.Random((clock * 1000).round());
    for (var i = 0; i < 14; i++) {
      final a = r.nextDouble() * math.pi * 2;
      sparks.add(_Spark(x, y, math.cos(a) * 0.25, -0.1 - math.sin(a).abs() * 0.35, c));
    }
  }

  void _caught(_Gourd g) {
    if (g.option == q.correct) {
      streak++;
      bestStreak = math.max(bestStreak, streak);
      right++;
      final pts = 100 + ((1 - g.y) * 100).round() + 20 * math.min<int>(streak - 1, 4);
      score += pts;
      popPoints = pts;
      popAt = clock;
      popX = basketX;
      _burst(basketX, 0.8, const Color(0xFFF2B01E));
      message = 'Yes! ${q.explain}';
      messageUntil = clock + 2;
      pause = 1.8;
    } else {
      _burst(basketX, 0.8, const Color(0xFFD62828));
      _lose('That was not it. ${q.explain}');
    }
  }

  void _lose(String text) {
    streak = 0;
    lives--;
    message = text;
    messageUntil = clock + 2.4;
    pause = 2.2;
    if (lives <= 0) {
      pause = 0;
      _finish();
    }
  }

  void _next() {
    if (index + 1 >= questions.length) {
      _finish();
      return;
    }
    index++;
    _spawn();
  }

  Future<void> _finish() async {
    over = true;
    final stars = starsForResult(right: right, total: questions.length, streakBest: bestStreak);
    wonStars = stars;
    if (mounted) setState(() {});
    totalStars = await FamilyStars.add(widget.email, stars);
    record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'catch', score);
    if (mounted) setState(() {});
  }

  void _move(double px, double width) => targetX = (px / width).clamp(0.08, 0.92);

  @override
  Widget build(BuildContext context) {
    return FamilyGameShell(
      title: 'Calabash Catch',
      child: over ? _end() : (started ? _play() : _intro()),
    );
  }

  Widget _intro() => Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            const Text('🧺', style: TextStyle(fontSize: 70)),
            const SizedBox(height: 8),
            const Text('Calabash Catch', style: TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.w900)),
            const SizedBox(height: 10),
            const Text('A question appears, and gourds with the answers fall from the baobab. Slide the basket and catch the RIGHT one. Three lives.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70, height: 1.4)),
            const SizedBox(height: 22),
            familyBigButton('Play', start, icon: Icons.play_arrow_rounded),
          ]),
        ),
      );

  Widget _play() {
    return Column(children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(14, 0, 14, 6),
        child: Row(children: [
          for (var i = 0; i < 3; i++) _heart(i < lives),
          const Spacer(),
          Text('${index + 1}/${questions.length}', style: const TextStyle(color: Colors.white60, fontWeight: FontWeight.w800)),
          const SizedBox(width: 12),
          Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5), decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(14)), child: Text('$score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
        ]),
      ),
      Container(
        margin: const EdgeInsets.symmetric(horizontal: 12),
        width: double.infinity,
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: kCream, borderRadius: BorderRadius.circular(18), border: Border.all(color: kGold, width: 3)),
        child: Text(q.text, textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 17, height: 1.25)),
      ),
      const SizedBox(height: 6),
      Expanded(
        child: LayoutBuilder(builder: (context, box) {
          return GestureDetector(
            behavior: HitTestBehavior.opaque,
            onHorizontalDragUpdate: (d) => _move(d.localPosition.dx, box.maxWidth),
            onTapDown: (d) => _move(d.localPosition.dx, box.maxWidth),
            onPanUpdate: (d) => _move(d.localPosition.dx, box.maxWidth),
            child: Stack(children: [
              Positioned.fill(child: CustomPaint(painter: _CatchPainter(this))),
              if (message.isNotEmpty && clock < messageUntil)
                Positioned(
                  left: 14,
                  right: 14,
                  top: 6,
                  child: Container(padding: const EdgeInsets.all(10), decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.7), borderRadius: BorderRadius.circular(14)), child: Text(message, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13.5, height: 1.3))),
                ),
            ]),
          );
        }),
      ),
    ]);
  }

  Widget _end() => ListView(padding: const EdgeInsets.all(20), children: [
        const Center(child: Text('🧺', style: TextStyle(fontSize: 70))),
        Center(child: Text(lives <= 0 ? 'The gourds are all gone' : 'The basket is full!', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
        Center(child: Text('$right of ${questions.length} caught · $score points', style: const TextStyle(color: kGold, fontWeight: FontWeight.w800))),
        const SizedBox(height: 16),
        FamilyWinnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
        const SizedBox(height: 16),
        Center(child: familyBigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
      ]);
}

class _CatchPainter extends CustomPainter {
  _CatchPainter(this.s);
  final CalabashCatchPageState s;

  @override
  void paint(Canvas c, Size size) {
    final w = size.width, h = size.height;
    // Dusk sky, hills and the baobab.
    c.drawRect(Offset.zero & size, Paint()..shader = ui.Gradient.linear(Offset.zero, Offset(0, h), const [Color(0xFF1E1B4B), Color(0xFF6B2E5F), Color(0xFFE08A45)], const [0, 0.65, 1]));
    c.drawCircle(Offset(w * 0.82, h * 0.16), 22, Paint()..color = const Color(0xFFFFF3D2));
    final hills = Path()..moveTo(0, h * 0.7);
    for (var x = 0.0; x <= w; x += 6) {
      hills.lineTo(x, h * 0.7 + math.sin(x / 55) * 10);
    }
    hills.lineTo(w, h);
    hills.lineTo(0, h);
    c.drawPath(hills, Paint()..color = const Color(0xFF241B3F));
    final tx = w * 0.12;
    c.drawPath(Path()..moveTo(tx - 26, h * 0.86)..quadraticBezierTo(tx - 14, h * 0.5, tx - 10, h * 0.34)..lineTo(tx + 10, h * 0.34)..quadraticBezierTo(tx + 14, h * 0.5, tx + 26, h * 0.86)..close(), Paint()..color = const Color(0xFF1A1432));
    for (final a in const [-1.0, -0.4, 0.3, 1.0]) {
      c.drawLine(Offset(tx, h * 0.36), Offset(tx + a * 46, h * 0.24), Paint()..color = const Color(0xFF1A1432)..strokeWidth = 7..strokeCap = StrokeCap.round);
      c.drawCircle(Offset(tx + a * 50, h * 0.22), 18, Paint()..color = const Color(0xFF16301F));
    }
    c.drawRect(Rect.fromLTWH(0, h * 0.88, w, h * 0.12), Paint()..color = const Color(0xFF2A1D1B));
    for (var i = 0; i < 18; i++) {
      c.drawLine(Offset(w * i / 17, h * 0.9), Offset(w * i / 17 + 3, h * 0.9 - 8), Paint()..color = const Color(0xFF3A5A34)..strokeWidth = 2);
    }
    // The gourds fall.
    for (final g in s.gourds) {
      if (g.caught) continue;
      final x = (g.x + math.sin(s.clock * 1.7 + g.option) * 0.012) * w;
      final y = g.y * h;
      if (g.broken) {
        c.drawOval(Rect.fromCenter(center: Offset(x, h * 0.89), width: 54, height: 12), Paint()..color = const Color(0xFFB4532A).withValues(alpha: 0.6));
        continue;
      }
      _gourd(c, Offset(x, y), g.text, g.option, s.clock);
    }
    // The girl and her basket.
    final bx = s.basketX * w;
    final gy = h * 0.93;
    cartoonKid(c, Offset(bx, gy), h * 0.3, s.clock, shirt: const Color(0xFFDB2777), armUp: true, wave: (math.sin(s.clock * 4) + 1) / 2, hairStyle: 2, bounce: (s.targetX - s.basketX).abs() * 40 * (math.sin(s.clock * 18).abs()));
    final basket = Rect.fromCenter(center: Offset(bx, h * 0.8), width: w * 0.24, height: h * 0.07);
    c.drawPath(Path()..moveTo(basket.left, basket.top)..lineTo(basket.right, basket.top)..lineTo(basket.right - 8, basket.bottom)..quadraticBezierTo(basket.center.dx, basket.bottom + 8, basket.left + 8, basket.bottom)..close(), Paint()..color = const Color(0xFFB4783A));
    for (var i = 1; i < 6; i++) {
      c.drawLine(Offset(basket.left + basket.width * i / 6, basket.top), Offset(basket.left + basket.width * i / 6 + (i - 3) * 2, basket.bottom), Paint()..color = const Color(0xFF7A4A24)..strokeWidth = 1.4);
    }
    c.drawRect(Rect.fromLTWH(basket.left, basket.top + basket.height * 0.35, basket.width, 5), Paint()..color = const Color(0xFFD62828));
    c.drawOval(Rect.fromLTWH(basket.left - 2, basket.top - 4, basket.width + 4, 8), Paint()..color = const Color(0xFF8A5A2A));
    // Sparks, and the points that float up.
    for (final p in s.sparks) {
      c.drawCircle(Offset(p.x * w, p.y * h), 3 * p.life + 1, Paint()..color = p.color.withValues(alpha: p.life.clamp(0.0, 1.0)));
    }
    final pa = s.clock - s.popAt;
    if (pa >= 0 && pa < 1.2) {
      final tp = TextPainter(text: TextSpan(text: '+${s.popPoints}', style: TextStyle(color: kGold.withValues(alpha: 1 - pa / 1.2), fontSize: 26, fontWeight: FontWeight.w900, shadows: const [Shadow(blurRadius: 6)])), textDirection: TextDirection.ltr)..layout();
      tp.paint(c, Offset(s.popX * w - tp.width / 2, h * 0.72 - pa * 60));
    }
  }

  void _gourd(Canvas c, Offset p, String text, int i, double t) {
    final tilt = math.sin(t * 2 + i) * 0.1;
    c.save();
    c.translate(p.dx, p.dy);
    c.rotate(tilt);
    const body = [Color(0xFFD9A441), Color(0xFFC9852B), Color(0xFF8A5A1E)];
    c.drawCircle(const Offset(0, -34), 14, Paint()..color = body[1]);
    c.drawLine(const Offset(0, -46), const Offset(2, -56), Paint()..color = const Color(0xFF4A3A1E)..strokeWidth = 4..strokeCap = StrokeCap.round);
    c.drawCircle(Offset.zero, 34, Paint()..shader = ui.Gradient.radial(const Offset(-10, -12), 46, body, const [0, 0.55, 1]));
    c.drawOval(Rect.fromCenter(center: const Offset(-12, -14), width: 12, height: 8), Paint()..color = Colors.white.withValues(alpha: 0.35));
    // A label with the answer.
    final tp = TextPainter(text: TextSpan(text: text, style: const TextStyle(color: kEarth, fontSize: 13, fontWeight: FontWeight.w900, height: 1.05)), textDirection: TextDirection.ltr, textAlign: TextAlign.center, maxLines: 3)..layout(maxWidth: 62);
    final r = RRect.fromRectAndRadius(Rect.fromCenter(center: const Offset(0, 4), width: math.max(40, tp.width + 10), height: tp.height + 8), const Radius.circular(8));
    c.drawRRect(r, Paint()..color = kCream);
    c.drawRRect(r, Paint()..color = kClay..style = PaintingStyle.stroke..strokeWidth = 1.5);
    tp.paint(c, Offset(-tp.width / 2, 4 - tp.height / 2));
    c.restore();
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// PLANT THE TREE
// ═════════════════════════════════════════════════════════════════════════════

class _Face extends StatelessWidget {
  const _Face({required this.kind, required this.name, this.size = 62, this.glow = false});
  final int kind;
  final String name;
  final double size;
  final bool glow;

  @override
  Widget build(BuildContext context) => SizedBox(
        width: size + 22,
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          SizedBox(width: size, height: size, child: CustomPaint(painter: _FacePainter(kind, glow))),
          const SizedBox(height: 3),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10), border: Border.all(color: const Color(0xFFEC4899), width: 1.4)),
            child: Text(name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF9D174D), fontWeight: FontWeight.w900, fontSize: 11.5)),
          ),
        ]),
      );
}

class _FacePainter extends CustomPainter {
  _FacePainter(this.kind, this.glow);
  final int kind;
  final bool glow;

  @override
  void paint(Canvas c, Size s) => paintFamilyPortrait(c, s.center(Offset.zero), s.shortestSide * 0.44, kind, 0, glow: glow ? 0.8 : 0);

  @override
  bool shouldRepaint(covariant _FacePainter old) => old.kind != kind || old.glow != glow;
}

class _Chip {
  const _Chip(this.name, this.kind, this.childIndex);
  final String name;
  final int kind;

  /// Which child of the parent this is, or -1 when this person is not a child of the parent.
  final int childIndex;
}

class PlantTreePage extends StatefulWidget {
  const PlantTreePage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<PlantTreePage> createState() => PlantTreePageState();
}

class PlantTreePageState extends State<PlantTreePage> with TickerProviderStateMixin {
  late final List<PlantRound> rounds = plantRounds(widget.tree, seed: widget.seed);
  int round = 0, mistakes = 0, planted = 0, wonStars = 0, totalStars = 0, roundMistakes = 0;
  late List<_Chip> chips = _chipsFor(0);

  /// For each branch, which chip is planted on it (or -1).
  late List<int> slots = List.filled(rounds.isEmpty ? 0 : rounds[0].children.length, -1);
  final Map<int, AnimationController> _grow = {};
  String message = '';
  int shake = -1;
  bool done = false, record = false;

  List<_Chip> _chipsFor(int r) {
    if (r >= rounds.length) return [];
    final p = rounds[r];
    final list = <_Chip>[
      for (var i = 0; i < p.children.length; i++) _Chip(p.children[i], p.childKinds[i], i),
      for (var i = 0; i < p.others.length; i++) _Chip(p.others[i], p.otherKinds[i], -1),
    ]..shuffle(math.Random(widget.seed * 31 + r));
    return list;
  }

  @override
  void dispose() {
    for (final c in _grow.values) {
      c.dispose();
    }
    super.dispose();
  }

  bool get roundDone => slots.isNotEmpty && !slots.contains(-1);

  /// A person dropped onto a branch: a real child is planted and the branch grows; anyone else bounces back.
  void drop(int slot, int chipIndex) {
    if (slot < 0 || slot >= slots.length || slots[slot] != -1 || slots.contains(chipIndex)) return;
    final chip = chips[chipIndex];
    final parent = rounds[round].parent;
    if (chip.childIndex < 0) {
      mistakes++;
      roundMistakes++;
      setState(() {
        shake = chipIndex;
        message = '${chip.name} is not a child of $parent. Try someone else.';
      });
      Timer(const Duration(milliseconds: 600), () {
        if (mounted) setState(() => shake = -1);
      });
      return;
    }
    planted++;
    final ctl = AnimationController(vsync: this, duration: const Duration(milliseconds: 900));
    _grow[slot]?.dispose();
    _grow[slot] = ctl;
    setState(() {
      slots[slot] = chipIndex;
      message = '${chip.name} is a child of $parent. The branch grows!';
    });
    ctl.forward();
  }

  Future<void> next() async {
    if (round + 1 >= rounds.length) {
      final total = rounds.fold<int>(0, (a, r) => a + r.children.length);
      final stars = math.max(0, planted * 4 - mistakes) + (mistakes == 0 ? 12 : 0);
      setState(() {
        done = true;
        wonStars = stars;
      });
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'plant', math.max(1, total * 10 - mistakes * 5));
      if (mounted) setState(() {});
      return;
    }
    for (final c in _grow.values) {
      c.dispose();
    }
    _grow.clear();
    setState(() {
      round++;
      chips = _chipsFor(round);
      slots = List.filled(rounds[round].children.length, -1);
      roundMistakes = 0;
      message = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    if (done) {
      return FamilyGameShell(
        title: 'Plant the Tree',
        child: ListView(padding: const EdgeInsets.all(20), children: [
          const Center(child: Text('🌳', style: TextStyle(fontSize: 70))),
          Center(child: Text('$planted branches grown', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
          Center(child: Text(mistakes == 0 ? 'Not one mistake!' : '$mistakes mistakes', style: const TextStyle(color: kGold, fontWeight: FontWeight.w800))),
          const SizedBox(height: 16),
          FamilyWinnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
          const SizedBox(height: 16),
          Center(child: familyBigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
        ]),
      );
    }
    final r = rounds[round];
    return FamilyGameShell(
      title: 'Plant the Tree',
      child: Padding(
        padding: const EdgeInsets.fromLTRB(12, 0, 12, 12),
        child: Column(children: [
          Text('Round ${round + 1} of ${rounds.length} · drag the children of ${r.parent} onto the branches', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 13)),
          Expanded(
            child: LayoutBuilder(builder: (context, box) {
              final w = box.maxWidth, h = box.maxHeight;
              final n = slots.length;
              final top = Offset(w / 2, 56);
              Offset slotAt(int i) => Offset(w * (i + 0.5) / n, h * 0.62);
              return Stack(children: [
                Positioned.fill(
                  child: AnimatedBuilder(
                    animation: Listenable.merge(_grow.values.toList()),
                    builder: (context, _) => CustomPaint(painter: _BranchPainter(top, [for (var i = 0; i < n; i++) slotAt(i)], [for (var i = 0; i < n; i++) _grow[i]?.value ?? 0.0], roundDone)),
                  ),
                ),
                Positioned(left: top.dx - 50, top: top.dy - 52, child: _Face(kind: r.parentKind, name: r.parent, size: 76, glow: roundDone)),
                for (var i = 0; i < n; i++)
                  Positioned(
                    left: slotAt(i).dx - 44,
                    top: slotAt(i).dy - 48,
                    child: DragTarget<int>(
                      key: ValueKey('slot-$i'),
                      onWillAcceptWithDetails: (d) => slots[i] == -1,
                      onAcceptWithDetails: (d) => drop(i, d.data),
                      builder: (context, cand, rej) {
                        final filled = slots[i] != -1;
                        return AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          width: 88,
                          height: 100,
                          decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), color: cand.isNotEmpty ? kGold.withValues(alpha: 0.3) : Colors.transparent, border: filled ? null : Border.all(color: cand.isNotEmpty ? kGold : Colors.white30, width: 2)),
                          child: filled
                              ? TweenAnimationBuilder<double>(
                                  tween: Tween(begin: 0.3, end: 1),
                                  duration: const Duration(milliseconds: 500),
                                  curve: Curves.elasticOut,
                                  builder: (context, v, child) => Transform.scale(scale: v, child: child),
                                  child: Center(child: _Face(kind: chips[slots[i]].kind, name: chips[slots[i]].name)),
                                )
                              : const Center(child: Text('?', style: TextStyle(color: Colors.white38, fontSize: 34, fontWeight: FontWeight.w900))),
                        );
                      },
                    ),
                  ),
                if (message.isNotEmpty)
                  Positioned(left: 0, right: 0, top: h * 0.76 - 6, child: Text(message, textAlign: TextAlign.center, style: TextStyle(color: message.contains('not a child') ? Colors.redAccent : const Color(0xFF4ADE80), fontWeight: FontWeight.w800, fontSize: 13))),
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: roundDone
                      ? Center(child: familyBigButton(round + 1 >= rounds.length ? 'See my result' : 'Next family', next, icon: Icons.arrow_forward_rounded))
                      : Wrap(alignment: WrapAlignment.center, spacing: 8, runSpacing: 6, children: [
                          for (var i = 0; i < chips.length; i++)
                            if (!slots.contains(i))
                              TweenAnimationBuilder<double>(
                                key: ValueKey('t$i-$round'),
                                tween: Tween(begin: 0, end: shake == i ? 1 : 0),
                                duration: const Duration(milliseconds: 500),
                                builder: (context, v, child) => Transform.translate(offset: Offset(math.sin(v * 24) * 8 * (1 - v), 0), child: child),
                                child: Draggable<int>(
                                  key: ValueKey('chip-$i'),
                                  data: i,
                                  feedback: Material(color: Colors.transparent, child: Transform.scale(scale: 1.15, child: _Face(kind: chips[i].kind, name: chips[i].name, glow: true))),
                                  childWhenDragging: Opacity(opacity: 0.25, child: _Face(kind: chips[i].kind, name: chips[i].name)),
                                  child: _Face(kind: chips[i].kind, name: chips[i].name),
                                ),
                              ),
                        ]),
                ),
              ]);
            }),
          ),
        ]),
      ),
    );
  }
}

class _BranchPainter extends CustomPainter {
  _BranchPainter(this.top, this.ends, this.grow, this.complete);
  final Offset top;
  final List<Offset> ends;
  final List<double> grow;
  final bool complete;

  @override
  void paint(Canvas c, Size s) {
    // A canopy behind the parent that fills with leaves as the family grows.
    final done = grow.where((g) => g >= 1).length;
    c.drawCircle(top + const Offset(0, 18), 70 + done * 10.0, Paint()..color = const Color(0xFF2E9B4F).withValues(alpha: 0.18 + 0.1 * done));
    final trunkBase = Offset(s.width / 2, s.height * 0.98);
    c.drawLine(trunkBase, top + const Offset(0, 40), Paint()..color = const Color(0xFF6B4423).withValues(alpha: 0.5)..strokeWidth = 10..strokeCap = StrokeCap.round);
    for (var i = 0; i < ends.length; i++) {
      final to = ends[i] + const Offset(0, -46);
      final p = Curves.easeOut.transform(grow[i].clamp(0.0, 1.0));
      final ctrl = Offset((top.dx + to.dx) / 2, top.dy + 90);
      // The dashed branch waits; the real branch grows from the parent to the child.
      final path = Path()..moveTo(top.dx, top.dy + 46)..quadraticBezierTo(ctrl.dx, ctrl.dy, to.dx, to.dy);
      if (p < 1) {
        for (final m in path.computeMetrics()) {
          for (var d = 0.0; d < m.length; d += 14) {
            c.drawPath(m.extractPath(d, math.min(m.length, d + 7)), Paint()..color = Colors.white24..style = PaintingStyle.stroke..strokeWidth = 3);
          }
        }
      }
      if (p > 0) {
        for (final m in path.computeMetrics()) {
          c.drawPath(m.extractPath(0, m.length * p), Paint()..color = const Color(0xFF8A5A33)..style = PaintingStyle.stroke..strokeWidth = 9 - 3 * p..strokeCap = StrokeCap.round);
          final tan = m.getTangentForOffset(m.length * p);
          if (tan != null && p > 0.4) {
            for (var k = 0; k < 4; k++) {
              final a = k * 1.6 + i;
              c.drawOval(Rect.fromCenter(center: tan.position + Offset(math.cos(a) * 14, math.sin(a) * 10), width: 11 * p, height: 6 * p), Paint()..color = const Color(0xFF4ADE80));
            }
          }
        }
      }
    }
    if (complete) {
      for (var i = 0; i < 6; i++) {
        final tp = TextPainter(text: const TextSpan(text: '♥', style: TextStyle(color: Color(0xFFEC4899), fontSize: 20)), textDirection: TextDirection.ltr)..layout();
        tp.paint(c, Offset(s.width * (0.15 + i * 0.14), s.height * 0.3 - (i % 3) * 14));
      }
    }
  }

  @override
  bool shouldRepaint(covariant _BranchPainter old) => true;
}

// ═════════════════════════════════════════════════════════════════════════════
// WHO AM I
// ═════════════════════════════════════════════════════════════════════════════

class WhoAmIPage extends StatefulWidget {
  const WhoAmIPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<WhoAmIPage> createState() => WhoAmIPageState();
}

class WhoAmIPageState extends State<WhoAmIPage> {
  late final List<WhoRound> rounds = whoAmIRounds(widget.tree, seed: widget.seed);
  int round = 0, shownClues = 1, score = 0, rightCount = 0, wonStars = 0, totalStars = 0;
  final Set<int> wrong = {};
  int shakeOption = -1;
  bool revealed = false, done = false, record = false;
  int earned = 0;
  Timer? _clues;

  WhoRound get r => rounds[round];

  @override
  void initState() {
    super.initState();
    _startClues();
  }

  @override
  void dispose() {
    _clues?.cancel();
    super.dispose();
  }

  void _startClues() {
    _clues?.cancel();
    _clues = Timer.periodic(const Duration(milliseconds: 3200), (t) {
      if (!mounted || revealed) return;
      if (shownClues < r.clues.length) setState(() => shownClues++);
    });
  }

  /// A tap on a name.
  void guess(int i) {
    if (revealed || wrong.contains(i)) return;
    if (r.options[i] == r.name) {
      final pts = math.max(10, 100 - 25 * (shownClues - 1) - 15 * wrong.length);
      setState(() {
        revealed = true;
        earned = pts;
        score += pts;
        rightCount++;
      });
    } else {
      setState(() {
        wrong.add(i);
        shakeOption = i;
      });
      Timer(const Duration(milliseconds: 500), () {
        if (mounted) setState(() => shakeOption = -1);
      });
    }
  }

  /// Show one more clue now.
  void moreClue() {
    if (!revealed && shownClues < r.clues.length) setState(() => shownClues++);
  }

  Future<void> next() async {
    if (round + 1 >= rounds.length) {
      _clues?.cancel();
      final stars = rightCount * 6 + (rightCount == rounds.length ? 15 : 0);
      setState(() {
        done = true;
        wonStars = stars;
      });
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'who', score);
      if (mounted) setState(() {});
      return;
    }
    setState(() {
      round++;
      shownClues = 1;
      wrong.clear();
      revealed = false;
      earned = 0;
    });
    _startClues();
  }

  @override
  Widget build(BuildContext context) {
    if (done) {
      return FamilyGameShell(
        title: 'Who Am I?',
        child: ListView(padding: const EdgeInsets.all(20), children: [
          const Center(child: Text('🎭', style: TextStyle(fontSize: 70))),
          Center(child: Text('$rightCount of ${rounds.length} guessed', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
          Center(child: Text('$score points', style: const TextStyle(color: kGold, fontWeight: FontWeight.w800))),
          const SizedBox(height: 16),
          FamilyWinnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
          const SizedBox(height: 16),
          Center(child: familyBigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
        ]),
      );
    }
    final blur = revealed ? 0.0 : math.max(1.0, 13.0 - 3.5 * (shownClues - 1));
    final dark = revealed ? 0.0 : math.max(0.1, 0.92 - 0.25 * (shownClues - 1));
    return FamilyGameShell(
      title: 'Who Am I?',
      child: ListView(padding: const EdgeInsets.fromLTRB(16, 0, 16, 20), children: [
        Text('Person ${round + 1} of ${rounds.length}', textAlign: TextAlign.center, style: const TextStyle(color: kGold, fontWeight: FontWeight.w900)),
        const SizedBox(height: 10),
        Center(
          child: TweenAnimationBuilder<double>(
            tween: Tween(end: blur),
            duration: const Duration(milliseconds: 900),
            builder: (context, b, _) => TweenAnimationBuilder<double>(
              tween: Tween(end: dark),
              duration: const Duration(milliseconds: 900),
              builder: (context, dk, __) => Container(
                width: 190,
                height: 190,
                decoration: BoxDecoration(shape: BoxShape.circle, boxShadow: [BoxShadow(color: kGold.withValues(alpha: revealed ? 0.6 : 0.15), blurRadius: revealed ? 40 : 18)]),
                child: ClipOval(
                  child: ColorFiltered(
                    colorFilter: ColorFilter.mode(Colors.black.withValues(alpha: dk), BlendMode.srcATop),
                    child: ImageFiltered(imageFilter: ui.ImageFilter.blur(sigmaX: b, sigmaY: b, tileMode: TileMode.decal), child: CustomPaint(painter: _FacePainter(r.kind, revealed))),
                  ),
                ),
              ),
            ),
          ),
        ),
        const SizedBox(height: 14),
        for (var i = 0; i < shownClues; i++)
          TweenAnimationBuilder<double>(
            key: ValueKey('clue-$round-$i'),
            tween: Tween(begin: 0, end: 1),
            duration: const Duration(milliseconds: 500),
            builder: (context, v, child) => Opacity(opacity: v, child: Transform.translate(offset: Offset(0, 14 * (1 - v)), child: child)),
            child: Container(
              margin: const EdgeInsets.only(bottom: 8),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: kCream, borderRadius: BorderRadius.circular(16), border: Border.all(color: kGold, width: 2)),
              child: Row(children: [
                CircleAvatar(radius: 12, backgroundColor: kClay, child: Text('${i + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 12))),
                const SizedBox(width: 10),
                Expanded(child: Text(r.clues[i], style: const TextStyle(color: kEarth, fontWeight: FontWeight.w800, fontSize: 15))),
              ]),
            ),
          ),
        if (!revealed && shownClues < r.clues.length) Center(child: TextButton(onPressed: moreClue, child: const Text('Give me another clue', style: TextStyle(color: kGold, fontWeight: FontWeight.w900)))),
        const SizedBox(height: 8),
        if (revealed)
          Container(
            padding: const EdgeInsets.all(14),
            decoration: BoxDecoration(color: kLeaf.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16), border: Border.all(color: kLeaf)),
            child: Column(children: [
              Text('It is ${r.name}!  +$earned', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 20)),
              const SizedBox(height: 10),
              familyBigButton(round + 1 >= rounds.length ? 'See my result' : 'Next person', next, icon: Icons.arrow_forward_rounded),
            ]),
          )
        else
          Wrap(spacing: 10, runSpacing: 10, alignment: WrapAlignment.center, children: [
            for (var i = 0; i < r.options.length; i++)
              TweenAnimationBuilder<double>(
                key: ValueKey('opt-$round-$i-${shakeOption == i}'),
                tween: Tween(begin: 0, end: shakeOption == i ? 1 : 0),
                duration: const Duration(milliseconds: 450),
                builder: (context, v, child) => Transform.translate(offset: Offset(math.sin(v * 22) * 8 * (1 - v), 0), child: child),
                child: GestureDetector(
                  onTap: () => guess(i),
                  child: Container(
                    constraints: const BoxConstraints(minWidth: 140),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                    decoration: BoxDecoration(color: wrong.contains(i) ? Colors.white10 : kGold.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16), border: Border.all(color: wrong.contains(i) ? Colors.redAccent : kGold, width: 2)),
                    child: Text(r.options[i], textAlign: TextAlign.center, style: TextStyle(color: wrong.contains(i) ? Colors.white38 : Colors.white, fontWeight: FontWeight.w900, fontSize: 16, decoration: wrong.contains(i) ? TextDecoration.lineThrough : null)),
                  ),
                ),
              ),
          ]),
      ]),
    );
  }
}
