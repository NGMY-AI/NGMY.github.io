import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_family_fireside.dart';
import 'ngmy_family_games_engine.dart';
import 'ngmy_worksheets_storage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// FAMILY GAMES: the games hub and the games themselves (a Kahoot-style quiz, a family test, memory drums, elder order,
// and a builder for the two games the tree owner can write). The fireside village game lives in ngmy_family_fireside.dart.
// ═════════════════════════════════════════════════════════════════════════════

const Color kEarth = Color(0xFF2A150A);
const Color kClay = Color(0xFFB4532A);
const Color kGold = Color(0xFFF2B01E);
const Color kLeaf = Color(0xFF2E9B4F);
const Color kNight = Color(0xFF14142B);
const Color kCream = Color(0xFFFFF3DC);
const Color kKenteRed = Color(0xFFD62828);

/// A band of woven cloth colours, to frame the pages.
class KenteBand extends StatelessWidget {
  const KenteBand({super.key, this.height = 14});
  final double height;

  @override
  Widget build(BuildContext context) => SizedBox(height: height, width: double.infinity, child: CustomPaint(painter: _KentePainter()));
}

class _KentePainter extends CustomPainter {
  @override
  void paint(Canvas c, Size s) {
    const cols = [kGold, kKenteRed, Color(0xFF111111), kLeaf, kGold, Color(0xFF111111)];
    final w = s.height * 1.1;
    var i = 0;
    for (var x = 0.0; x < s.width; x += w) {
      final col = cols[i % cols.length];
      c.drawRect(Rect.fromLTWH(x, 0, w + 0.5, s.height), Paint()..color = col);
      if (i % 3 == 0) {
        final p = Path()
          ..moveTo(x + w / 2, s.height * 0.2)
          ..lineTo(x + w * 0.85, s.height / 2)
          ..lineTo(x + w / 2, s.height * 0.8)
          ..lineTo(x + w * 0.15, s.height / 2)
          ..close();
        c.drawPath(p, Paint()..color = Colors.white.withValues(alpha: 0.85));
      }
      i++;
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

/// The page every game sits on: night blue, a kente band, a title and a back button.
class _GameShell extends StatelessWidget {
  const _GameShell({required this.title, required this.child, this.actions = const []});
  final String title;
  final Widget child;
  final List<Widget> actions;

  @override
  Widget build(BuildContext context) => Scaffold(
        backgroundColor: kNight,
        body: Container(
          decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1E1B4B), kNight, Color(0xFF2A150A)])),
          child: SafeArea(
            child: Column(children: [
              const KenteBand(),
              Padding(
                padding: const EdgeInsets.fromLTRB(6, 6, 10, 2),
                child: Row(children: [
                  IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white)),
                  Expanded(child: Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, fontSize: 17, letterSpacing: 0.4))),
                  ...actions,
                ]),
              ),
              Expanded(child: child),
            ]),
          ),
        ),
      );
}

Widget _bigButton(String label, VoidCallback? onTap, {Color color = kGold, Color ink = kEarth, IconData? icon}) => GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 14),
        decoration: BoxDecoration(color: onTap == null ? Colors.white12 : color, borderRadius: BorderRadius.circular(18), boxShadow: [if (onTap != null) BoxShadow(color: color.withValues(alpha: 0.4), blurRadius: 14, offset: const Offset(0, 5))]),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          if (icon != null) ...[Icon(icon, color: onTap == null ? Colors.white38 : ink, size: 20), const SizedBox(width: 8)],
          Text(label, style: TextStyle(color: onTap == null ? Colors.white38 : ink, fontWeight: FontWeight.w900, fontSize: 15)),
        ]),
      ),
    );

/// What the player won, shown at the end of every game: stars, the badge, and a new record.
class _Winnings extends StatelessWidget {
  const _Winnings({required this.stars, required this.total, required this.record});
  final int stars, total;
  final bool record;

  @override
  Widget build(BuildContext context) {
    final badge = badgeFor(total);
    final next = nextBadge(total);
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(18), border: Border.all(color: kGold.withValues(alpha: 0.6), width: 1.5)),
      child: Column(children: [
        Text('+$stars ⭐ Family Stars', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, fontSize: 20)),
        if (record) const Padding(padding: EdgeInsets.only(top: 4), child: Text('🏆 A new record!', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800))),
        const SizedBox(height: 6),
        Text('${badge.emoji} ${badge.name}  ·  $total stars', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800)),
        if (next != null) Padding(padding: const EdgeInsets.only(top: 3), child: Text('${next.from - total} more stars for ${next.emoji} ${next.name}', style: const TextStyle(color: Colors.white60, fontSize: 12))),
      ]),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// THE HUB
// ═════════════════════════════════════════════════════════════════════════════

class NgmyFamilyGamesPage extends StatefulWidget {
  const NgmyFamilyGamesPage({super.key, required this.tree, required this.userEmail, required this.isOwner, required this.onSaveGames});
  final FamilyTree tree;
  final String userEmail;

  /// Is this person the one who made the tree? Only they can write games.
  final bool isOwner;

  /// Saves the hand-made games into the tree.
  final Future<void> Function(List<Map<String, dynamic>> games) onSaveGames;

  @override
  State<NgmyFamilyGamesPage> createState() => _NgmyFamilyGamesPageState();
}

class _NgmyFamilyGamesPageState extends State<NgmyFamilyGamesPage> {
  late FamilyTree _tree = widget.tree;
  int _stars = 0;
  final Map<String, int> _best = {};
  int _seed = DateTime.now().millisecondsSinceEpoch % 100000;

  static const _ids = ['kahoot', 'fire', 'memory', 'order', 'test'];

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    final s = await FamilyStars.total(widget.userEmail);
    for (final id in _ids) {
      _best[id] = await FamilyStars.best(widget.userEmail, _tree.id, id);
    }
    if (mounted) setState(() => _stars = s);
  }

  Future<void> _play(Widget page) async {
    await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => page));
    _seed = DateTime.now().millisecondsSinceEpoch % 100000;
    if (mounted) _load();
  }

  List<String> get _rivals {
    final d = FamilyGameData(_tree);
    return [for (final m in d.members) d.nameOf(m)];
  }

  Future<void> _saveGames(List<CreatorGame> games) async {
    final raw = [for (final g in games) g.toJson()];
    await widget.onSaveGames(raw);
    if (mounted) setState(() => _tree = _tree.copyWith(games: raw));
  }

  Future<void> _edit(CreatorGame? game) async {
    final games = creatorGamesOf(_tree);
    final mine = game ?? CreatorGame(id: 'g${DateTime.now().millisecondsSinceEpoch}');
    final saved = await Navigator.of(context).push<CreatorGame>(MaterialPageRoute(builder: (_) => FamilyGameBuilderPage(game: mine)));
    if (saved == null) return;
    final next = [for (final g in games) if (g.id != saved.id) g];
    final at = games.indexWhere((g) => g.id == saved.id);
    next.insert(at < 0 ? next.length : math.min(at, next.length), saved);
    await _saveGames(next.take(kMaxCreatorGames).toList());
  }

  Future<void> _delete(CreatorGame g) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: kEarth,
        title: const Text('Delete this game?', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
        content: Text('"${g.title.isEmpty ? 'Untitled' : g.title}" will be removed for everyone in the family.', style: const TextStyle(color: Colors.white70)),
        actions: [TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Keep it')), TextButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete', style: TextStyle(color: Colors.redAccent)))],
      ),
    );
    if (ok == true) await _saveGames([for (final x in creatorGamesOf(_tree)) if (x.id != g.id) x]);
  }

  Widget _card(String emoji, String title, String blurb, Color color, VoidCallback? onTap, {String? tag, String? why}) => GestureDetector(
        onTap: onTap ?? () => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(why ?? 'Not ready yet.'))),
        child: Opacity(
          opacity: onTap == null ? 0.55 : 1,
          child: Container(
            padding: const EdgeInsets.fromLTRB(12, 12, 12, 10),
            decoration: BoxDecoration(
              gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [color, Color.lerp(color, Colors.black, 0.45)!]),
              borderRadius: BorderRadius.circular(20),
              border: Border.all(color: Colors.white24),
              boxShadow: [BoxShadow(color: color.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 6))],
            ),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Row(children: [
                Text(emoji, style: const TextStyle(fontSize: 34)),
                const Spacer(),
                if (tag != null) Container(padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 3), decoration: BoxDecoration(color: Colors.black38, borderRadius: BorderRadius.circular(10)), child: Text(tag, style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, fontSize: 10.5))),
              ]),
              const Spacer(),
              Text(title, maxLines: 2, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5, height: 1.1)),
              const SizedBox(height: 3),
              Text(blurb, maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white70, fontSize: 11.5, height: 1.25)),
            ]),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final d = FamilyGameData(_tree);
    final tree = _tree;
    final badge = badgeFor(_stars);
    final mine = creatorGamesOf(tree);
    final canMake = canMakeCreatorGame(tree, isOwner: widget.isOwner);
    String best(String id) => (_best[id] ?? 0) > 0 ? 'Best ${_best[id]}' : 'NEW';
    final orderOk = orderRounds(tree).isNotEmpty;
    final memoryOk = memoryPairs(tree).length >= 3;
    return _GameShell(
      title: 'Family Games · ${tree.name}',
      child: ListView(padding: const EdgeInsets.fromLTRB(14, 8, 14, 30), children: [
        Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(20), border: Border.all(color: kGold.withValues(alpha: 0.5))),
          child: Row(children: [
            Text(badge.emoji, style: const TextStyle(fontSize: 38)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(badge.name, style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, fontSize: 17)),
                Text(d.playable ? 'The games are made from the ${d.members.length} people in this tree.' : 'Add at least 3 people to the tree for games about your own family. Until then the elders teach culture.', style: const TextStyle(color: Colors.white70, fontSize: 12, height: 1.3)),
              ]),
            ),
            Column(children: [
              Text('$_stars', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
              const Text('⭐ stars', style: TextStyle(color: Colors.white60, fontSize: 11)),
            ]),
          ]),
        ),
        const SizedBox(height: 16),
        const Text('MADE BY THE SYSTEM, FROM YOUR TREE', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 1.2)),
        const SizedBox(height: 8),
        GridView.count(
          crossAxisCount: 2,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 12,
          crossAxisSpacing: 12,
          childAspectRatio: 0.98,
          children: [
            _card('🎯', 'Family Kahoot', 'Race the clock. Answer fast, keep a streak, climb the podium against your family.', const Color(0xFF7C3AED), () => _play(FamilyKahootPage(title: 'Family Kahoot', subtitle: tree.name, questions: generateFamilyQuestions(tree, count: 10, seed: _seed), email: widget.userEmail, treeId: tree.id, gameId: 'kahoot', rivals: _rivals)), tag: best('kahoot')),
            _card('🔥', 'Fireside Stories', 'Sit by the fire in the village. The elder teaches, the children answer.', const Color(0xFFB4532A), () => _play(FamilyFiresidePage(tree: tree, email: widget.userEmail, seed: _seed)), tag: best('fire')),
            _card('🪘', 'Memory Drums', 'Flip the drums and match every person with the clue about them.', const Color(0xFF0F766E), memoryOk ? () => _play(MemoryDrumsPage(tree: tree, email: widget.userEmail, seed: _seed)) : null, tag: best('memory'), why: 'Add at least 3 people with parents, children, spouses, jobs or birthplaces.'),
            _card('🌳', 'Elder Order', 'Who is older? Put the children and the generations in the right order.', const Color(0xFF15803D), orderOk ? () => _play(ElderOrderPage(tree: tree, email: widget.userEmail, seed: _seed)) : null, tag: best('order'), why: 'Add a parent with two children, or a family with more than one generation.'),
            _card('📜', 'Family Test', 'A real test of 10 questions with a grade and a certificate at the end.', const Color(0xFFB45309), () => _play(FamilyTestPage(tree: tree, email: widget.userEmail, seed: _seed)), tag: best('test')),
          ],
        ),
        const SizedBox(height: 20),
        Row(children: [
          const Expanded(child: Text('MADE BY THE ONE WHO PLANTED THE TREE', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 1.2))),
          Text('${mine.length} of $kMaxCreatorGames', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900, fontSize: 12)),
        ]),
        const SizedBox(height: 8),
        for (final g in mine)
          Container(
            margin: const EdgeInsets.only(bottom: 10),
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.07), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white24)),
            child: Row(children: [
              const Text('🎲', style: TextStyle(fontSize: 30)),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(g.title.trim().isEmpty ? 'Untitled game' : g.title.trim(), maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15)),
                  Text('${g.ready.length} questions · Kahoot style', style: const TextStyle(color: Colors.white60, fontSize: 12)),
                ]),
              ),
              if (g.ready.length >= 2) _miniButton(Icons.play_arrow_rounded, kLeaf, () => _play(FamilyKahootPage(title: g.title.trim().isEmpty ? 'Family game' : g.title.trim(), subtitle: 'A game by the family', questions: g.toQuestions(), email: widget.userEmail, treeId: tree.id, gameId: 'creator_${g.id}', rivals: _rivals))),
              if (widget.isOwner) ...[
                const SizedBox(width: 6),
                _miniButton(Icons.edit_rounded, kGold, () => _edit(g)),
                const SizedBox(width: 6),
                _miniButton(Icons.delete_outline_rounded, Colors.redAccent, () => _delete(g)),
              ],
            ]),
          ),
        if (widget.isOwner)
          GestureDetector(
            onTap: canMake ? () => _edit(null) : () => ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('You can make two games at most. Delete one to make another.'))),
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 18),
              decoration: BoxDecoration(borderRadius: BorderRadius.circular(18), border: Border.all(color: canMake ? kGold : Colors.white24, width: 2), color: canMake ? kGold.withValues(alpha: 0.12) : Colors.white10),
              child: Center(child: Text(canMake ? '＋ Make your own game  (${kMaxCreatorGames - mine.length} left)' : 'Both games are made', style: TextStyle(color: canMake ? kGold : Colors.white54, fontWeight: FontWeight.w900, fontSize: 15))),
            ),
          )
        else if (mine.isEmpty)
          const Text('The person who planted this tree has not made a game yet.', style: TextStyle(color: Colors.white54, fontSize: 12.5)),
        const SizedBox(height: 14),
        const KenteBand(height: 10),
      ]),
    );
  }

  Widget _miniButton(IconData icon, Color color, VoidCallback onTap) => GestureDetector(
        onTap: onTap,
        child: Container(width: 38, height: 38, decoration: BoxDecoration(color: color.withValues(alpha: 0.2), shape: BoxShape.circle, border: Border.all(color: color)), child: Icon(icon, color: color, size: 20)),
      );
}

// ═════════════════════════════════════════════════════════════════════════════
// FAMILY KAHOOT
// ═════════════════════════════════════════════════════════════════════════════

enum _KPhase { intro, countdown, ask, reveal, end }

class FamilyKahootPage extends StatefulWidget {
  const FamilyKahootPage({super.key, required this.title, required this.questions, required this.email, required this.treeId, required this.gameId, this.subtitle = '', this.rivals = const []});
  final String title, subtitle, email, treeId, gameId;
  final List<FamilyQuestion> questions;

  /// The names of family members, who play against you as bots on the podium.
  final List<String> rivals;

  @override
  State<FamilyKahootPage> createState() => FamilyKahootPageState();
}

class FamilyKahootPageState extends State<FamilyKahootPage> {
  _KPhase phase = _KPhase.intro;
  int index = 0, score = 0, streak = 0, bestStreak = 0, right = 0, picked = -1, countdown = 3, lastPoints = 0;
  double left = 20;
  Timer? _tick;
  Timer? _next;
  int wonStars = 0, totalStars = 0;
  bool record = false;

  static const _colors = [Color(0xFFE21B3C), Color(0xFF1368CE), Color(0xFFD89E00), Color(0xFF26890C)];
  static const _shapes = ['▲', '◆', '●', '■'];

  FamilyQuestion get q => widget.questions[index];

  @override
  void dispose() {
    _tick?.cancel();
    _next?.cancel();
    super.dispose();
  }

  void start() {
    setState(() {
      phase = _KPhase.countdown;
      countdown = 3;
    });
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(seconds: 1), (t) {
      if (countdown <= 1) {
        t.cancel();
        _ask();
      } else {
        setState(() => countdown--);
      }
    });
  }

  void _ask() {
    _next?.cancel();
    setState(() {
      phase = _KPhase.ask;
      picked = -1;
      left = q.secs.toDouble();
    });
    _tick?.cancel();
    _tick = Timer.periodic(const Duration(milliseconds: 100), (t) {
      if (!mounted) return;
      setState(() => left = math.max(0, left - 0.1));
      if (left <= 0) {
        t.cancel();
        _reveal(-1);
      }
    });
  }

  /// A tap on one of the answers.
  void answer(int i) {
    if (phase != _KPhase.ask) return;
    _tick?.cancel();
    _reveal(i);
  }

  void _reveal(int i) {
    final ok = i == q.correct;
    var pts = 0;
    if (ok) {
      streak++;
      bestStreak = math.max(bestStreak, streak);
      right++;
      pts = kahootPoints(secsLeft: left, secs: q.secs, streak: streak - 1);
      score += pts;
    } else {
      streak = 0;
    }
    setState(() {
      picked = i;
      lastPoints = pts;
      phase = _KPhase.reveal;
    });
    _next?.cancel();
    _next = Timer(const Duration(milliseconds: 3200), advance);
  }

  void advance() {
    if (phase != _KPhase.reveal) return;
    if (index + 1 >= widget.questions.length) {
      _finish();
    } else {
      setState(() => index++);
      _ask();
    }
  }

  Future<void> _finish() async {
    _next?.cancel();
    final stars = starsForResult(right: right, total: widget.questions.length, streakBest: bestStreak);
    setState(() {
      phase = _KPhase.end;
      wonStars = stars;
    });
    final total = await FamilyStars.add(widget.email, stars);
    final rec = await FamilyStars.saveBest(widget.email, widget.treeId, widget.gameId, score);
    if (mounted) {
      setState(() {
        totalStars = total;
        record = rec;
      });
    }
  }

  /// The family on the podium: the player and the relatives who play against them.
  List<(String, int, bool)> board() {
    final r = math.Random(widget.questions.length * 31 + widget.treeId.hashCode);
    final top = widget.questions.length * 900;
    final rows = <(String, int, bool)>[('You', score, true)];
    final names = [...widget.rivals]..shuffle(r);
    for (final n in names.take(4)) {
      rows.add((n, (top * (0.35 + r.nextDouble() * 0.5)).round(), false));
    }
    rows.sort((a, b) => b.$2.compareTo(a.$2));
    return rows;
  }

  @override
  Widget build(BuildContext context) {
    return _GameShell(title: widget.title, child: switch (phase) {
      _KPhase.intro => _intro(),
      _KPhase.countdown => Center(child: Text('$countdown', style: const TextStyle(color: kGold, fontSize: 130, fontWeight: FontWeight.w900))),
      _KPhase.ask || _KPhase.reveal => _question(),
      _KPhase.end => _end(),
    });
  }

  Widget _intro() => Center(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            const Text('🎯', style: TextStyle(fontSize: 70)),
            const SizedBox(height: 10),
            Text(widget.title, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.w900)),
            if (widget.subtitle.isNotEmpty) Text(widget.subtitle, style: const TextStyle(color: kGold, fontWeight: FontWeight.w800, fontSize: 15)),
            const SizedBox(height: 14),
            Text('${widget.questions.length} questions. The faster you answer, the more points you win. Keep a streak for a bonus.', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, height: 1.4)),
            const SizedBox(height: 22),
            _bigButton('Play', start, icon: Icons.play_arrow_rounded),
          ]),
        ),
      );

  Widget _question() {
    final reveal = phase == _KPhase.reveal;
    final ok = picked == q.correct;
    return Padding(
      padding: const EdgeInsets.fromLTRB(14, 4, 14, 14),
      child: Column(children: [
        Row(children: [
          Text('${index + 1}/${widget.questions.length}', style: const TextStyle(color: Colors.white60, fontWeight: FontWeight.w800)),
          const Spacer(),
          if (streak >= 2) Text('🔥 $streak in a row', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900)),
          const SizedBox(width: 10),
          Container(padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 5), decoration: BoxDecoration(color: Colors.white12, borderRadius: BorderRadius.circular(14)), child: Text('$score', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900))),
        ]),
        const SizedBox(height: 6),
        ClipRRect(borderRadius: BorderRadius.circular(6), child: LinearProgressIndicator(value: reveal ? 0 : (left / q.secs).clamp(0.0, 1.0), minHeight: 9, backgroundColor: Colors.white12, color: left < 5 ? Colors.redAccent : kGold)),
        const SizedBox(height: 12),
        Expanded(
          flex: 3,
          child: Container(
            width: double.infinity,
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(color: kCream, borderRadius: BorderRadius.circular(22), border: Border.all(color: kGold, width: 3)),
            child: Center(
              child: reveal
                  ? Column(mainAxisSize: MainAxisSize.min, children: [
                      Text(picked < 0 ? "Time's up!" : (ok ? 'Correct! +$lastPoints' : 'Not this time'), style: TextStyle(color: ok ? kLeaf : kKenteRed, fontWeight: FontWeight.w900, fontSize: 24)),
                      const SizedBox(height: 8),
                      Text(q.explain, textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w700, fontSize: 15, height: 1.3)),
                    ])
                  : Text(q.text, textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 22, height: 1.25)),
            ),
          ),
        ),
        const SizedBox(height: 12),
        Expanded(
          flex: 4,
          child: GridView.count(
            crossAxisCount: 2,
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 1.45,
            physics: const NeverScrollableScrollPhysics(),
            children: [
              for (var i = 0; i < q.options.length; i++)
                GestureDetector(
                  onTap: reveal ? advance : () => answer(i),
                  child: AnimatedOpacity(
                    duration: const Duration(milliseconds: 200),
                    opacity: reveal && i != q.correct && i != picked ? 0.3 : 1,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12),
                      decoration: BoxDecoration(color: _colors[i % 4], borderRadius: BorderRadius.circular(16), border: Border.all(color: reveal && i == q.correct ? Colors.white : Colors.transparent, width: 4), boxShadow: const [BoxShadow(color: Colors.black38, blurRadius: 6, offset: Offset(0, 4))]),
                      child: Row(children: [
                        Text(_shapes[i % 4], style: const TextStyle(color: Colors.white, fontSize: 24)),
                        const SizedBox(width: 10),
                        Expanded(child: Text(q.options[i], maxLines: 3, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 15.5, height: 1.15))),
                        if (reveal && i == q.correct) const Icon(Icons.check_circle_rounded, color: Colors.white),
                        if (reveal && i == picked && i != q.correct) const Icon(Icons.cancel_rounded, color: Colors.white),
                      ]),
                    ),
                  ),
                ),
            ],
          ),
        ),
        if (reveal) const Padding(padding: EdgeInsets.only(top: 4), child: Text('Tap to go on', style: TextStyle(color: Colors.white38, fontSize: 12))),
      ]),
    );
  }

  Widget _end() {
    final rows = board();
    const medals = ['🥇', '🥈', '🥉'];
    return ListView(padding: const EdgeInsets.all(18), children: [
      const Center(child: Text('🏆', style: TextStyle(fontSize: 64))),
      Center(child: Text('$right of ${widget.questions.length} right', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
      Center(child: Text('$score points · best streak $bestStreak', style: const TextStyle(color: kGold, fontWeight: FontWeight.w800))),
      const SizedBox(height: 16),
      for (var i = 0; i < rows.length; i++)
        Container(
          margin: const EdgeInsets.only(bottom: 8),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(color: rows[i].$3 ? kGold.withValues(alpha: 0.25) : Colors.white10, borderRadius: BorderRadius.circular(14), border: Border.all(color: rows[i].$3 ? kGold : Colors.white12)),
          child: Row(children: [
            SizedBox(width: 34, child: Text(i < 3 ? medals[i] : '${i + 1}', style: const TextStyle(fontSize: 22, color: Colors.white, fontWeight: FontWeight.w900))),
            Expanded(child: Text(rows[i].$1, style: TextStyle(color: Colors.white, fontWeight: rows[i].$3 ? FontWeight.w900 : FontWeight.w700, fontSize: 16))),
            Text('${rows[i].$2}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
          ]),
        ),
      const SizedBox(height: 10),
      _Winnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
      const SizedBox(height: 16),
      Center(child: _bigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
    ]);
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// FAMILY TEST
// ═════════════════════════════════════════════════════════════════════════════

class FamilyTestPage extends StatefulWidget {
  const FamilyTestPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<FamilyTestPage> createState() => FamilyTestPageState();
}

class FamilyTestPageState extends State<FamilyTestPage> {
  late final List<FamilyQuestion> qs = generateFamilyQuestions(widget.tree, count: 10, seed: widget.seed, test: true);
  final List<int> answers = [];
  int index = 0, selected = -1, wonStars = 0, totalStars = 0;
  bool done = false, record = false;

  int get right => [for (var i = 0; i < answers.length; i++) if (answers[i] == qs[i].correct) 1].length;

  void choose(int i) => setState(() => selected = i);

  Future<void> next() async {
    if (selected < 0) return;
    answers.add(selected);
    if (index + 1 >= qs.length) {
      final stars = starsForResult(right: right, total: qs.length);
      setState(() {
        done = true;
        wonStars = stars;
      });
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'test', right * 10);
      if (mounted) setState(() {});
    } else {
      setState(() {
        index++;
        selected = -1;
      });
    }
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
  Widget build(BuildContext context) => _GameShell(title: 'Family Test · ${widget.tree.name}', child: done ? _result() : _paper());

  Widget _paper() {
    final q = qs[index];
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 6, 16, 16),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Question ${index + 1} of ${qs.length}', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900)),
        const SizedBox(height: 6),
        ClipRRect(borderRadius: BorderRadius.circular(6), child: LinearProgressIndicator(value: index / qs.length, minHeight: 8, backgroundColor: Colors.white12, color: kLeaf)),
        const SizedBox(height: 16),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(color: kCream, borderRadius: BorderRadius.circular(18), border: Border.all(color: kGold, width: 2)),
          child: Text(q.text, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 19, height: 1.3)),
        ),
        const SizedBox(height: 14),
        for (var i = 0; i < q.options.length; i++)
          GestureDetector(
            onTap: () => choose(i),
            child: Container(
              margin: const EdgeInsets.only(bottom: 10),
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
              decoration: BoxDecoration(color: selected == i ? kGold.withValues(alpha: 0.25) : Colors.white10, borderRadius: BorderRadius.circular(14), border: Border.all(color: selected == i ? kGold : Colors.white24, width: selected == i ? 2.5 : 1)),
              child: Row(children: [
                CircleAvatar(radius: 14, backgroundColor: selected == i ? kGold : Colors.white24, child: Text(String.fromCharCode(65 + i), style: TextStyle(color: selected == i ? kEarth : Colors.white, fontWeight: FontWeight.w900))),
                const SizedBox(width: 12),
                Expanded(child: Text(q.options[i], style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15.5))),
              ]),
            ),
          ),
        const Spacer(),
        Center(child: _bigButton(index + 1 >= qs.length ? 'Hand in the test' : 'Next question', selected < 0 ? null : next, icon: Icons.arrow_forward_rounded)),
      ]),
    );
  }

  Widget _result() {
    final g = grade();
    final wrong = [for (var i = 0; i < answers.length; i++) if (answers[i] != qs[i].correct) i];
    return ListView(padding: const EdgeInsets.all(16), children: [
      Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: kCream, borderRadius: BorderRadius.circular(22), border: Border.all(color: kGold, width: 4)),
        child: Column(children: [
          const Text('CERTIFICATE', style: TextStyle(color: kClay, fontWeight: FontWeight.w900, letterSpacing: 4, fontSize: 13)),
          const SizedBox(height: 4),
          Text(widget.tree.name, textAlign: TextAlign.center, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 22)),
          const Text('Family Knowledge Test', style: TextStyle(color: kEarth, fontWeight: FontWeight.w700)),
          const SizedBox(height: 10),
          Text(g.$1, style: const TextStyle(color: kKenteRed, fontWeight: FontWeight.w900, fontSize: 76, height: 1)),
          Text(g.$2, style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900, fontSize: 18)),
          const SizedBox(height: 6),
          Text('$right of ${qs.length} right', style: const TextStyle(color: kClay, fontWeight: FontWeight.w800)),
          const SizedBox(height: 8),
          const KenteBand(height: 10),
        ]),
      ),
      const SizedBox(height: 14),
      _Winnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
      if (wrong.isNotEmpty) ...[
        const SizedBox(height: 16),
        const Text('LET US LEARN FROM THESE', style: TextStyle(color: Colors.white54, fontWeight: FontWeight.w900, fontSize: 11.5, letterSpacing: 1.2)),
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
      Center(child: _bigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
    ]);
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// MEMORY DRUMS
// ═════════════════════════════════════════════════════════════════════════════

class _DrumCard {
  _DrumCard(this.pairId, this.text, this.isName);
  final String pairId, text;
  final bool isName;
  bool up = false, matched = false;
}

class MemoryDrumsPage extends StatefulWidget {
  const MemoryDrumsPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<MemoryDrumsPage> createState() => MemoryDrumsPageState();
}

class MemoryDrumsPageState extends State<MemoryDrumsPage> {
  late final List<MemoryPair> pairs = memoryPairs(widget.tree, seed: widget.seed);
  late final List<_DrumCard> cards = _deal();
  int moves = 0, matches = 0, wonStars = 0, totalStars = 0;
  bool locked = false, done = false, record = false;
  final List<int> _open = [];

  List<_DrumCard> _deal() {
    final list = <_DrumCard>[for (final p in pairs) ...[_DrumCard(p.id, p.name, true), _DrumCard(p.id, p.clue, false)]];
    list.shuffle(math.Random(widget.seed));
    return list;
  }

  /// A tap on drum [i].
  void flip(int i) {
    if (locked || cards[i].up || cards[i].matched) return;
    setState(() {
      cards[i].up = true;
      _open.add(i);
    });
    if (_open.length == 2) {
      moves++;
      final a = cards[_open[0]], b = cards[_open[1]];
      if (a.pairId == b.pairId && a.isName != b.isName) {
        setState(() {
          a.matched = b.matched = true;
          matches++;
          _open.clear();
        });
        if (matches == pairs.length) _win();
      } else {
        locked = true;
        Timer(const Duration(milliseconds: 950), () {
          if (!mounted) return;
          setState(() {
            for (final k in _open) {
              cards[k].up = false;
            }
            _open.clear();
            locked = false;
          });
        });
      }
    }
  }

  Future<void> _win() async {
    final neat = moves <= pairs.length * 2 + 2;
    final stars = matches * 5 + (neat ? 15 : 0);
    setState(() {
      done = true;
      wonStars = stars;
    });
    totalStars = await FamilyStars.add(widget.email, stars);
    record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'memory', math.max(1, 200 - moves * 5));
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) => _GameShell(
        title: 'Memory Drums',
        child: done
            ? ListView(padding: const EdgeInsets.all(20), children: [
                const Center(child: Text('🪘', style: TextStyle(fontSize: 70))),
                const Center(child: Text('Every drum is matched!', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
                Center(child: Text('$moves moves', style: const TextStyle(color: kGold, fontWeight: FontWeight.w800))),
                const SizedBox(height: 16),
                _Winnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
                const SizedBox(height: 16),
                Center(child: _bigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
              ])
            : Padding(
                padding: const EdgeInsets.fromLTRB(14, 4, 14, 14),
                child: Column(children: [
                  Text('Match each person with the clue about them · $moves moves', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 13)),
                  const SizedBox(height: 10),
                  Expanded(
                    child: GridView.count(
                      crossAxisCount: 3,
                      mainAxisSpacing: 10,
                      crossAxisSpacing: 10,
                      childAspectRatio: 0.8,
                      children: [for (var i = 0; i < cards.length; i++) _drum(i)],
                    ),
                  ),
                ]),
              ),
      );

  Widget _drum(int i) {
    final c = cards[i];
    return GestureDetector(
      onTap: () => flip(i),
      child: TweenAnimationBuilder<double>(
        tween: Tween(end: c.up || c.matched ? 1 : 0),
        duration: const Duration(milliseconds: 320),
        builder: (context, v, _) {
          final front = v > 0.5;
          return Transform(
            alignment: Alignment.center,
            transform: Matrix4.identity()
              ..setEntry(3, 2, 0.001)
              ..rotateY(math.pi * v),
            child: front
                ? Transform(
                    alignment: Alignment.center,
                    transform: Matrix4.rotationY(math.pi),
                    child: Container(
                      padding: const EdgeInsets.all(8),
                      decoration: BoxDecoration(color: c.matched ? kLeaf.withValues(alpha: 0.9) : (c.isName ? kGold : kCream), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.matched ? Colors.white : kClay, width: 3)),
                      child: Center(child: Text(c.text, textAlign: TextAlign.center, maxLines: 4, overflow: TextOverflow.ellipsis, style: TextStyle(color: c.matched ? Colors.white : kEarth, fontWeight: FontWeight.w900, fontSize: c.isName ? 17 : 13.5, height: 1.15))),
                    ),
                  )
                : Container(
                    decoration: BoxDecoration(borderRadius: BorderRadius.circular(16), border: Border.all(color: kGold, width: 3), gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [kClay, kEarth])),
                    child: ClipRRect(borderRadius: BorderRadius.circular(13), child: CustomPaint(painter: _DrumSkinPainter(), child: const Center(child: Text('🪘', style: TextStyle(fontSize: 30))))),
                  ),
          );
        },
      ),
    );
  }
}

class _DrumSkinPainter extends CustomPainter {
  @override
  void paint(Canvas c, Size s) {
    final p = Paint()
      ..color = kGold.withValues(alpha: 0.5)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2;
    for (var y = 10.0; y < s.height; y += 18) {
      final path = Path()..moveTo(0, y);
      for (var x = 0.0; x < s.width; x += 12) {
        path.lineTo(x + 6, y + ((x ~/ 12).isEven ? -5 : 5));
      }
      c.drawPath(path, p);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter old) => false;
}

// ═════════════════════════════════════════════════════════════════════════════
// ELDER ORDER
// ═════════════════════════════════════════════════════════════════════════════

class ElderOrderPage extends StatefulWidget {
  const ElderOrderPage({super.key, required this.tree, required this.email, this.seed = 1});
  final FamilyTree tree;
  final String email;
  final int seed;

  @override
  State<ElderOrderPage> createState() => ElderOrderPageState();
}

class ElderOrderPageState extends State<ElderOrderPage> {
  late final List<OrderRound> rounds = orderRounds(widget.tree, seed: widget.seed);
  int round = 0, rightRounds = 0, wonStars = 0, totalStars = 0;
  List<int> tapped = [];
  late List<int> shuffle = _shuffleFor(0);
  bool checked = false, correct = false, done = false, record = false;

  List<int> _shuffleFor(int r) {
    if (r >= rounds.length) return [];
    final idx = List.generate(rounds[r].names.length, (i) => i)..shuffle(math.Random(widget.seed + r));
    if (idx.length > 1 && [for (var i = 0; i < idx.length; i++) idx[i] == i ? 1 : 0].reduce((a, b) => a + b) == idx.length) {
      final t = idx[0];
      idx[0] = idx[1];
      idx[1] = t;
    }
    return idx;
  }

  /// A tap on the person at [i] in the round.
  void tap(int i) {
    if (checked || tapped.contains(i)) return;
    setState(() => tapped.add(i));
    if (tapped.length == rounds[round].names.length) {
      final ranks = [for (final t in tapped) rounds[round].ranks[t]];
      var ok = true;
      for (var k = 1; k < ranks.length; k++) {
        if (ranks[k] < ranks[k - 1]) ok = false;
      }
      setState(() {
        checked = true;
        correct = ok;
        if (ok) rightRounds++;
      });
    }
  }

  void reset() => setState(() {
        tapped = [];
        checked = false;
      });

  Future<void> next() async {
    if (round + 1 >= rounds.length) {
      final stars = rightRounds * 10 + (rightRounds == rounds.length ? 15 : 0);
      setState(() {
        done = true;
        wonStars = stars;
      });
      totalStars = await FamilyStars.add(widget.email, stars);
      record = await FamilyStars.saveBest(widget.email, widget.tree.id, 'order', rightRounds * 10);
      if (mounted) setState(() {});
      return;
    }
    setState(() {
      round++;
      tapped = [];
      checked = false;
      shuffle = _shuffleFor(round);
    });
  }

  @override
  Widget build(BuildContext context) {
    if (done) {
      return _GameShell(
        title: 'Elder Order',
        child: ListView(padding: const EdgeInsets.all(20), children: [
          const Center(child: Text('🌳', style: TextStyle(fontSize: 70))),
          Center(child: Text('$rightRounds of ${rounds.length} rounds right', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24))),
          const SizedBox(height: 16),
          _Winnings(stars: wonStars, total: totalStars == 0 ? wonStars : totalStars, record: record),
          const SizedBox(height: 16),
          Center(child: _bigButton('Back to the games', () => Navigator.of(context).maybePop(), icon: Icons.arrow_back_rounded)),
        ]),
      );
    }
    final r = rounds[round];
    final order = [for (var k = 0; k < r.names.length; k++) k]..sort((a, b) => r.ranks[a].compareTo(r.ranks[b]));
    return _GameShell(
      title: 'Elder Order',
      child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text('Round ${round + 1} of ${rounds.length}', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900)),
          const SizedBox(height: 6),
          Text(r.title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
          Text(r.hint, style: const TextStyle(color: Colors.white70)),
          const SizedBox(height: 18),
          Wrap(spacing: 12, runSpacing: 12, children: [
            for (final i in shuffle)
              GestureDetector(
                onTap: () => tap(i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                  decoration: BoxDecoration(color: tapped.contains(i) ? (checked ? (correct ? kLeaf : kKenteRed) : kGold) : Colors.white12, borderRadius: BorderRadius.circular(18), border: Border.all(color: tapped.contains(i) ? Colors.white : kGold.withValues(alpha: 0.6), width: 2)),
                  child: Row(mainAxisSize: MainAxisSize.min, children: [
                    if (tapped.contains(i)) CircleAvatar(radius: 12, backgroundColor: Colors.white, child: Text('${tapped.indexOf(i) + 1}', style: const TextStyle(color: kEarth, fontWeight: FontWeight.w900))),
                    if (tapped.contains(i)) const SizedBox(width: 8),
                    Text(r.names[i], style: TextStyle(color: tapped.contains(i) ? kEarth : Colors.white, fontWeight: FontWeight.w900, fontSize: 17)),
                  ]),
                ),
              ),
          ]),
          const Spacer(),
          if (checked)
            Container(
              width: double.infinity,
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(color: (correct ? kLeaf : kKenteRed).withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16), border: Border.all(color: correct ? kLeaf : kKenteRed)),
              child: Text(correct ? 'Yes! That is the right order. The elders smile.' : 'Not quite. The right order is: ${order.map((k) => r.names[k]).join(', then ')}.', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, height: 1.35)),
            ),
          const SizedBox(height: 12),
          Center(
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              if (!checked && tapped.isNotEmpty) ...[_bigButton('Start again', reset, color: Colors.white24, ink: Colors.white), const SizedBox(width: 10)],
              if (checked) _bigButton(round + 1 >= rounds.length ? 'See my result' : 'Next round', next, icon: Icons.arrow_forward_rounded),
            ]),
          ),
        ]),
      ),
    );
  }
}

// ═════════════════════════════════════════════════════════════════════════════
// THE GAME BUILDER: the person who planted the tree writes a Kahoot-style game
// ═════════════════════════════════════════════════════════════════════════════

class FamilyGameBuilderPage extends StatefulWidget {
  const FamilyGameBuilderPage({super.key, required this.game});
  final CreatorGame game;

  @override
  State<FamilyGameBuilderPage> createState() => FamilyGameBuilderPageState();
}

class FamilyGameBuilderPageState extends State<FamilyGameBuilderPage> {
  late final CreatorGame game = CreatorGame.fromJson(widget.game.toJson());
  late final TextEditingController title = TextEditingController(text: game.title);
  final Map<CreatorQuestion, List<TextEditingController>> _fields = {};

  List<TextEditingController> _of(CreatorQuestion q) => _fields.putIfAbsent(q, () => [TextEditingController(text: q.text), for (final a in q.answers) TextEditingController(text: a)]);

  @override
  void initState() {
    super.initState();
    if (game.questions.isEmpty) game.questions.add(CreatorQuestion());
  }

  @override
  void dispose() {
    title.dispose();
    for (final l in _fields.values) {
      for (final c in l) {
        c.dispose();
      }
    }
    super.dispose();
  }

  void addQuestion() {
    if (game.questions.length >= kMaxCreatorQuestions) return;
    setState(() => game.questions.add(CreatorQuestion()));
  }

  void save() {
    game.title = title.text.trim();
    final ok = game.ready;
    if (game.title.isEmpty || ok.length < 2) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Give the game a name and write at least 2 complete questions (a question, two or more answers, and the right one chosen).')));
      return;
    }
    game.questions
      ..clear()
      ..addAll(ok);
    Navigator.of(context).pop(game);
  }

  @override
  Widget build(BuildContext context) {
    InputDecoration deco(String label) => InputDecoration(labelText: label, labelStyle: const TextStyle(color: Colors.white60), filled: true, fillColor: Colors.white10, border: OutlineInputBorder(borderRadius: BorderRadius.circular(12), borderSide: BorderSide.none), isDense: true);
    const shapes = ['▲', '◆', '●', '■'];
    const colors = [Color(0xFFE21B3C), Color(0xFF1368CE), Color(0xFFD89E00), Color(0xFF26890C)];
    return _GameShell(
      title: 'Make your game',
      actions: [TextButton(onPressed: save, child: const Text('SAVE', style: TextStyle(color: kGold, fontWeight: FontWeight.w900)))],
      child: ListView(padding: const EdgeInsets.fromLTRB(14, 6, 14, 40), children: [
        const Text('Write a Kahoot-style game for your family. Everyone who opens this tree can play it. You can make 2 games at most.', style: TextStyle(color: Colors.white70, height: 1.35)),
        const SizedBox(height: 12),
        TextField(controller: title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800), decoration: deco('Name of the game')),
        const SizedBox(height: 14),
        for (var n = 0; n < game.questions.length; n++) ...[
          Builder(builder: (context) {
            final q = game.questions[n];
            final f = _of(q);
            return Container(
              margin: const EdgeInsets.only(bottom: 14),
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(18), border: Border.all(color: Colors.white24)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  Text('Question ${n + 1}', style: const TextStyle(color: kGold, fontWeight: FontWeight.w900)),
                  const Spacer(),
                  if (game.questions.length > 1) IconButton(onPressed: () => setState(() => game.questions.removeAt(n)), icon: const Icon(Icons.delete_outline_rounded, color: Colors.redAccent)),
                ]),
                TextField(controller: f[0], onChanged: (v) => q.text = v, style: const TextStyle(color: Colors.white), decoration: deco('The question')),
                const SizedBox(height: 8),
                for (var i = 0; i < 4; i++)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 6),
                    child: Row(children: [
                      Text(shapes[i], style: TextStyle(color: colors[i], fontSize: 22)),
                      const SizedBox(width: 8),
                      Expanded(child: TextField(controller: f[i + 1], onChanged: (v) => q.answers[i] = v, style: const TextStyle(color: Colors.white), decoration: deco('Answer ${i + 1}'))),
                      Radio<int>(value: i, groupValue: q.correct, activeColor: kLeaf, onChanged: (v) => setState(() => q.correct = v ?? 0)),
                    ]),
                  ),
                const Text('The round button is the right answer.', style: TextStyle(color: Colors.white38, fontSize: 11.5)),
                const SizedBox(height: 6),
                Row(children: [
                  const Text('Time:', style: TextStyle(color: Colors.white70)),
                  const SizedBox(width: 8),
                  for (final s in const [10, 20, 30])
                    Padding(
                      padding: const EdgeInsets.only(right: 6),
                      child: ChoiceChip(label: Text('${s}s'), selected: q.secs == s, onSelected: (_) => setState(() => q.secs = s)),
                    ),
                ]),
              ]),
            );
          }),
        ],
        if (game.questions.length < kMaxCreatorQuestions) Center(child: _bigButton('＋ Add a question', addQuestion, color: Colors.white24, ink: Colors.white)),
      ]),
    );
  }
}
