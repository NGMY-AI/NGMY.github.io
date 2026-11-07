import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_3d.dart';
import 'ngmy_electronics_cartoons.dart';
import 'ngmy_family_games_engine.dart';
import 'ngmy_worksheets_storage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// FIRESIDE STORIES: an African village at night. The oldest person of the family tree sits by the fire and teaches the children,
// who answer. A right answer makes the fire grow and the children cheer. The questions are about the people in the tree.
// ═════════════════════════════════════════════════════════════════════════════

const Color _earth = Color(0xFF2A150A);
const Color _gold = Color(0xFFF2B01E);
const Color _cream = Color(0xFFFFF3DC);
const Color _clay = Color(0xFFB4532A);

/// How many lessons the elder gives in one evening.
const int kFiresideLessons = 6;

class _Folk {
  const _Folk(this.at, this.yaw, this.skin, this.cloth, this.accent, this.hair, {this.scale = 1, this.wrap, this.elder = false});
  final V3 at;
  final double yaw, scale;
  final Color skin, cloth, accent, hair;
  final Color? wrap;
  final bool elder;
}

const List<_Folk> _folk = [
  // The elder, at the back of the fire, facing the children.
  _Folk(V3(0, 0, -96), 0, Color(0xFF5C3A21), Color(0xFFB91C1C), Color(0xFFF2B01E), Color(0xFFE5E7EB), scale: 1.15, elder: true),
  // The children round the fire.
  _Folk(V3(-92, 0, 10), 1.35, Color(0xFF8D5524), Color(0xFF2E9B4F), Color(0xFFF2B01E), Color(0xFF1F1209), scale: 0.8),
  _Folk(V3(92, 0, 14), -1.35, Color(0xFF6B4423), Color(0xFFF59E0B), Color(0xFFB91C1C), Color(0xFF1F1209), scale: 0.78, wrap: Color(0xFF7C3AED)),
  _Folk(V3(-58, 0, 84), 0.62, Color(0xFFA9703A), Color(0xFF1368CE), Color(0xFFF2B01E), Color(0xFF1F1209), scale: 0.74),
  _Folk(V3(60, 0, 88), -0.6, Color(0xFF7A4A28), Color(0xFFDB2777), Color(0xFFFFF3DC), Color(0xFF1F1209), scale: 0.72, wrap: Color(0xFFF2B01E)),
];

/// One seated person, built from blocks. [lift] makes them hop (a cheer).
void _addFolk(MeshBuilder b, _Folk f, double lift, double t, {bool talking = false}) {
  final s = f.scale;
  V3 p(double x, double y, double z) => f.at + rotY(V3(x * s, y * s + lift, z * s), f.yaw);
  V3 sz(double x, double y, double z) => V3(x * s, y * s, z * s);
  // Crossed legs and the log seat.
  b.box(p(0, 6, 12), sz(26, 12, 32), Color.lerp(f.cloth, Colors.black, 0.25)!, yaw: f.yaw);
  // Body in the cloth, with the kente stripe across the chest.
  b.cyl(p(0, 14, 0), p(0, 46, 0), 13.5 * s, f.cloth, sides: 8);
  b.box(p(0, 36, 12.5), sz(27, 5, 3), f.accent, yaw: f.yaw);
  b.box(p(0, 28, 12.5), sz(27, 3, 3), Colors.black, yaw: f.yaw);
  // Arms, and the hands: the talking hand of the elder moves.
  final wave = f.elder && talking ? math.sin(t * 5) * 6 : 0.0;
  for (final x in const [-1.0, 1.0]) {
    b.box(p(x * 17, 32, 5), sz(6, 22, 8), f.cloth, yaw: f.yaw);
    b.ball(p(x * 17, 20 + (x > 0 ? wave : 0), 13), 4 * s, f.skin, lat: 3, lon: 5);
  }
  // Head, hair or head wrap, and a face.
  b.ball(p(0, 58, 0), 12 * s, f.skin, lat: 4, lon: 8);
  if (f.wrap != null) {
    b.ball(p(0, 63, -1), 12.8 * s, f.wrap!, lat: 3, lon: 7);
    b.box(p(0, 70, -1), sz(10, 7, 10), f.wrap!, yaw: f.yaw);
  } else {
    b.ball(p(0, 62, -3), 12.4 * s, f.hair, lat: 3, lon: 7);
  }
  for (final x in const [-1.0, 1.0]) {
    b.ball(p(x * 4.4, 59, 10.6), 1.7 * s, const Color(0xFF111111), lat: 2, lon: 4);
  }
  b.box(p(0, 53.5, 11), sz(5, 1.2, 1.2), const Color(0xFF3F1D0B), yaw: f.yaw);
  if (f.elder) {
    // The white beard, a gold cap, and the walking stick.
    b.ball(p(0, 50, 7), 8 * s, const Color(0xFFF3F4F6), lat: 3, lon: 6);
    b.cyl(p(0, 68, 0), p(0, 75, 0), 11 * s, _gold, sides: 8);
    b.cyl(p(26, 0, 16), p(26, 78, 16), 2 * s, const Color(0xFF6B4423), sides: 5);
    b.ball(p(26, 79, 16), 4 * s, _gold, lat: 3, lon: 5);
  }
}

/// The still part of the village: sandy ground, huts, a great baobab, drums, the ring of stones round the fire, and the stars.
Scene3D buildVillageScene() {
  final b = MeshBuilder();
  const up = V3(0, 1, 0);
  b.order = 0;
  b.quad(const V3(-2400, 0, -2400), const V3(2400, 0, -2400), const V3(2400, 0, 2400), const V3(-2400, 0, 2400), const Color(0xFFB98A52), normal: up);
  b.order = 1;
  // Grass and a worn circle of earth round the fire.
  for (final (x, z, r) in const [(-520.0, 260.0, 180.0), (460.0, 330.0, 150.0), (-300.0, -420.0, 200.0), (640.0, -260.0, 170.0), (80.0, 520.0, 160.0)]) {
    b.quad(V3(x - r, 0.3, z - r), V3(x + r, 0.3, z - r), V3(x + r, 0.3, z + r), V3(x - r, 0.3, z + r), const Color(0xFF7A8F3A), normal: up);
  }
  b.cyl(const V3(0, 0.6, 0), const V3(0, 1.4, 0), 150, const Color(0xFF8A5F33), sides: 24);
  b.order = 2;
  // The huts: round mud walls, a thatch roof like a cone, a dark door turned to the fire.
  for (final (x, z) in const [(-330.0, -190.0), (330.0, -230.0), (-60.0, -430.0), (560.0, 40.0), (-560.0, 120.0)]) {
    final face = math.atan2(-x, -z);
    b.cyl(V3(x, 0, z), V3(x, 56, z), 62, const Color(0xFFC2723A), sides: 14);
    b.cyl(V3(x, 54, z), V3(x, 138, z), 82, const Color(0xFFD4A24C), sides: 14, r1: 3);
    final door = V3(x, 0, z) + rotY(V3(0, 0, 61), face);
    b.box(door + const V3(0, 22, 0), const V3(22, 44, 4), const Color(0xFF2A150A), yaw: face);
  }
  // The baobab: a fat trunk, thick branches and a flat crown.
  const bx = 430.0, bz = 250.0;
  b.cyl(const V3(bx, 0, bz), const V3(bx, 150, bz), 46, const Color(0xFF8B6B4A), sides: 12, r1: 34);
  for (var i = 0; i < 6; i++) {
    final a = i * math.pi / 3;
    b.cyl(const V3(bx, 140, bz), V3(bx + math.cos(a) * 110, 205, bz + math.sin(a) * 110), 12, const Color(0xFF7A5C3E), sides: 6, r1: 7);
    b.ball(V3(bx + math.cos(a) * 118, 215, bz + math.sin(a) * 118), 48, const Color(0xFF3F7F3A), lat: 3, lon: 6);
  }
  b.ball(const V3(bx, 232, bz), 62, const Color(0xFF356F34), lat: 3, lon: 7);
  // Drums, a water pot, and the ring of stones and logs round the fire.
  for (final (x, z) in const [(-40.0, 150.0), (30.0, 160.0)]) {
    b.cyl(V3(x, 0, z), V3(x, 28, z), 13, const Color(0xFF8B4A24), sides: 10, r1: 10);
    b.cyl(V3(x, 28, z), V3(x, 30, z), 12, const Color(0xFFF5DEB3), sides: 10);
  }
  b.ball(const V3(-210, 20, 80), 20, const Color(0xFFB4532A), lat: 4, lon: 8);
  for (var i = 0; i < 10; i++) {
    final a = i * math.pi * 2 / 10;
    b.ball(V3(math.cos(a) * 34, 6, math.sin(a) * 34), 8, const Color(0xFF6B7280), lat: 3, lon: 5);
  }
  for (var i = 0; i < 3; i++) {
    final a = i * math.pi * 2 / 3 + 0.4;
    b.cyl(V3(math.cos(a) * 14, 7, math.sin(a) * 14), V3(math.cos(a + 3.14) * 14, 12, math.sin(a + 3.14) * 14), 5, const Color(0xFF4A2C14), sides: 6);
  }
  // Stars in the night sky.
  final r = math.Random(5);
  for (var i = 0; i < 110; i++) {
    final a = r.nextDouble() * math.pi * 2, e = 0.12 + r.nextDouble() * 1.1;
    final d = 1700.0;
    b.box(V3(math.cos(a) * math.cos(e) * d, math.sin(e) * d, math.sin(a) * math.cos(e) * d), V3.zero + const V3(7, 7, 7), Colors.white);
  }
  return Scene3D(b.polys, farMin: 4000);
}

class FamilyFiresidePage extends StatefulWidget {
  const FamilyFiresidePage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<FamilyFiresidePage> createState() => FamilyFiresidePageState();
}

enum _Step { greet, teach, ask, feedback, end }

class FamilyFiresidePageState extends State<FamilyFiresidePage> {
  late final Scene3D scene = buildVillageScene();
  late final List<FamilyQuestion> lessons = generateFamilyQuestions(widget.tree, count: kFiresideLessons, seed: widget.seed);
  late final FamilyGameData data = FamilyGameData(widget.tree);
  late final Cam3 cam = Cam3(yaw: 0.0, pitch: 0.3, dist: 340, target: const V3(0, 48, -10))
    ..minDist = 140
    ..maxDist = 700
    ..minPitch = 0.06
    ..maxPitch = 1.2
    ..setFree(true);
  Timer? _spin;
  _Step step = _Step.greet;
  int index = 0, right = 0, streak = 0, bestStreak = 0, picked = -1, wonStars = 0, totalStars = 0;
  double fire = 0.35;
  double _cheerUntil = -1, _clock = 0;
  String elderSays = '';
  bool record = false, correct = false;

  FamilyQuestion get q => lessons[index];
  FamilyMember? get elder => data.elder;
  String get elderName => elder == null ? 'Babu' : data.nameOf(elder!);

  static const _praise = ['Vizuri sana! That is very good.', 'Hongera! Congratulations, my child.', 'Safi! You listened well.', 'Asante, child. The fire is proud of you.'];
  static const _gentle = ['Pole, child. Listen again:', 'Do not worry. Even elders learn twice:', 'Eh, so close! Remember:'];

  @override
  void initState() {
    super.initState();
    elderSays = 'Come closer, my children. I am $elderName, elder of the ${widget.tree.name} family. Tonight, by this fire, we remember who we are.';
    _spin = Timer.periodic(const Duration(milliseconds: 40), (_) {
      if (mounted) cam.orbit(0.0011, 0);
    });
  }

  @override
  void dispose() {
    _spin?.cancel();
    cam.dispose();
    super.dispose();
  }

  /// Sit down: the first lesson starts.
  void sitDown() => _teach();

  void _teach() {
    final said = q.lesson.isNotEmpty ? q.lesson : q.explain;
    setState(() {
      step = _Step.teach;
      picked = -1;
      elderSays = said;
    });
  }

  /// "Ask me, Elder": the question is put to the children.
  void askMe() => setState(() {
        step = _Step.ask;
        elderSays = q.text;
      });

  /// A tap on one of the answers.
  void answer(int i) {
    if (step != _Step.ask) return;
    final ok = i == q.correct;
    if (ok) {
      right++;
      streak++;
      bestStreak = math.max(bestStreak, streak);
      fire = math.min(1.0, fire + 0.13);
      _cheerUntil = _clock + 2.2;
    } else {
      streak = 0;
      fire = math.max(0.18, fire - 0.08);
    }
    final r = math.Random(index * 7 + i);
    setState(() {
      picked = i;
      correct = ok;
      step = _Step.feedback;
      elderSays = ok ? '${_praise[r.nextInt(_praise.length)]} ${q.explain}' : '${_gentle[r.nextInt(_gentle.length)]} ${q.explain}';
    });
  }

  Future<void> next() async {
    if (index + 1 >= lessons.length) {
      final stars = starsForResult(right: right, total: lessons.length, streakBest: bestStreak);
      setState(() {
        step = _Step.end;
        wonStars = stars;
        fire = 1;
        _cheerUntil = _clock + 4;
        elderSays = right >= lessons.length - 1 ? 'You carry the family now. Never let the fire go out.' : 'You listened well tonight. Come again, and the fire will burn higher.';
      });
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'fire', right * 10);
      if (mounted) setState(() {});
      return;
    }
    index++;
    _teach();
  }

  List<Poly> _living(double t) {
    _clock = t;
    final b = MeshBuilder()..order = 2;
    final cheer = t < _cheerUntil;
    final talking = step == _Step.teach || step == _Step.ask || step == _Step.feedback || step == _Step.greet;
    for (var i = 0; i < _folk.length; i++) {
      final lift = cheer && i > 0 ? math.max(0.0, math.sin(t * 9 + i * 1.3)) * 9 : 0.0;
      _addFolk(b, _folk[i], lift, t, talking: talking);
    }
    // The fire: three flames of different colours that flicker, and sparks that rise. It grows with every right answer.
    final h = 34 + 56 * fire;
    final w = 17 + 13 * fire;
    final flick = math.sin(t * 11) * 4 + math.sin(t * 17) * 3;
    b.cyl(const V3(0, 6, 0), V3(math.sin(t * 3) * 4, 6 + h + flick, math.cos(t * 4) * 4), w, const Color(0xFFEA580C), sides: 8, r1: 1);
    b.cyl(const V3(0, 6, 0), V3(math.sin(t * 4 + 1) * 4, 6 + h * 0.8 + flick, math.cos(t * 3) * 4), w * 0.7, const Color(0xFFFBBF24), sides: 8, r1: 1);
    b.cyl(const V3(0, 6, 0), V3(0, 6 + h * 0.5 + flick * 0.5, 0), w * 0.4, const Color(0xFFFEF3C7), sides: 6, r1: 1);
    for (var i = 0; i < 12; i++) {
      final ph = (t * 0.7 + i / 12) % 1.0;
      final a = i * 2.4;
      b.box(V3(math.cos(a) * 14 * ph + math.sin(t * 2 + i) * 5, 10 + ph * (90 + 60 * fire), math.sin(a) * 14 * ph), const V3(2.5, 2.5, 2.5), const Color(0xFFFDE68A));
    }
    return b.polys;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF14142B),
      body: Stack(children: [
        Positioned.fill(child: Scene3DView(scene: scene, cam: cam, dynamicPolys: _living, background: const Color(0xFF0B0F2A))),
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
    return Container(
      margin: const EdgeInsets.fromLTRB(10, 0, 10, 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: _cream.withValues(alpha: 0.96), borderRadius: BorderRadius.circular(22), border: Border.all(color: _gold, width: 3), boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 14)]),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(width: 62, height: 62, child: CustomPaint(painter: _PortraitPainter(kind))),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(step == _Step.end ? 'Elder $elderName' : (step == _Step.ask ? '$elderName asks' : 'Elder $elderName'), style: const TextStyle(color: _clay, fontWeight: FontWeight.w900, fontSize: 12.5)),
              const SizedBox(height: 2),
              Text(elderSays, style: const TextStyle(color: _earth, fontWeight: FontWeight.w700, fontSize: 14.5, height: 1.3)),
            ]),
          ),
        ]),
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
