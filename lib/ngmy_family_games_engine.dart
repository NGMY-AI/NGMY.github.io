import 'dart:convert';
import 'dart:math' as math;

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_worksheets_storage.dart';

// ═════════════════════════════════════════════════════════════════════════════
// FAMILY GAMES: games and tests the system makes by itself out of the people in a family tree.
// This file is the thinking part (no drawing): the questions, the memory pairs, the ordering rounds, the stars the player earns,
// and the games a tree owner can write by hand (two at most).
// ═════════════════════════════════════════════════════════════════════════════

/// The most games the person who made a family tree can write by hand.
const int kMaxCreatorGames = 2;

/// The most questions in one hand-made game.
const int kMaxCreatorQuestions = 12;

/// One question: what is asked, the answers, which one is right, and what the elder says to teach it.
class FamilyQuestion {
  const FamilyQuestion({required this.text, required this.options, required this.correct, required this.explain, this.lesson = '', this.kind = 'tree', this.secs = 20});
  final String text;
  final List<String> options;
  final int correct;

  /// Said after the answer, for right and for wrong.
  final String explain;

  /// What the elder teaches before asking (a fact about the family or the culture).
  final String lesson;

  /// Where it came from: tree, culture, creator, tf.
  final String kind;

  /// How many seconds the player has.
  final int secs;
}

/// The people of a tree and how they are related, so a game can ask about them.
class FamilyGameData {
  FamilyGameData(FamilyTree tree)
      : treeName = tree.name,
        members = [for (final m in tree.members) if (!m.hidden && m.name.trim().isNotEmpty) m] {
    byId = {for (final m in members) m.id: m};
  }

  final String treeName;
  final List<FamilyMember> members;
  late final Map<String, FamilyMember> byId;

  String nameOf(FamilyMember m) => m.name.trim();

  FamilyMember? parentOf(FamilyMember m) => m.parentId == null ? null : byId[m.parentId];

  List<FamilyMember> childrenOf(FamilyMember m) => [for (final c in members) if (c.parentId == m.id) c]..sort((a, b) => a.birthOrder.compareTo(b.birthOrder));

  FamilyMember? spouseOf(FamilyMember m) {
    final s = m.spouseId == null ? null : byId[m.spouseId];
    if (s != null) return s;
    for (final o in members) {
      if (o.spouseId == m.id) return o;
    }
    return null;
  }

  List<FamilyMember> siblingsOf(FamilyMember m) => [for (final s in members) if (s.id != m.id && s.parentId != null && s.parentId == m.parentId) s];

  FamilyMember? grandparentOf(FamilyMember m) {
    final p = parentOf(m);
    return p == null ? null : parentOf(p);
  }

  /// How many generations below the top this person is.
  int depthOf(FamilyMember m) {
    var d = 0;
    var cur = m;
    final seen = <String>{};
    while (cur.parentId != null && byId[cur.parentId] != null && seen.add(cur.id)) {
      cur = byId[cur.parentId]!;
      d++;
    }
    return d;
  }

  /// The oldest person in the tree, who sits by the fire and tells the stories.
  FamilyMember? get elder {
    if (members.isEmpty) return null;
    final sorted = [...members]..sort((a, b) {
        final byDepth = depthOf(a).compareTo(depthOf(b));
        if (byDepth != 0) return byDepth;
        return a.birthOrder.compareTo(b.birthOrder);
      });
    return sorted.first;
  }

  String parentWord(FamilyMember p) => p.gender == FamilyGender.male ? 'father' : (p.gender == FamilyGender.female ? 'mother' : 'parent');
  String grandWord(FamilyMember p) => p.gender == FamilyGender.male ? 'grandfather' : (p.gender == FamilyGender.female ? 'grandmother' : 'grandparent');
  String childWord(FamilyMember c) => c.gender == FamilyGender.male ? 'son' : (c.gender == FamilyGender.female ? 'daughter' : 'child');

  /// How many people have enough relations to be asked about.
  bool get playable => members.length >= 3;
}

/// Questions about culture, for when a tree is small, and as a gentle lesson in between. Swahili family words, proverbs and values.
const List<FamilyQuestion> kCultureQuestions = [
  FamilyQuestion(text: 'What does "Ubuntu" mean?', options: ['I am because we are', 'Good morning', 'Big river', 'Come and eat'], correct: 0, kind: 'culture', explain: 'Ubuntu means a person is a person through other people.', lesson: 'Listen, children. Ubuntu is an old word: I am because we are. Nobody grows alone.'),
  FamilyQuestion(text: 'In Swahili, what do we call a grandmother?', options: ['Bibi', 'Babu', 'Dada', 'Kaka'], correct: 0, kind: 'culture', explain: 'Bibi is grandmother. Babu is grandfather.', lesson: 'Your grandmother is Bibi, and your grandfather is Babu. Say it with respect.'),
  FamilyQuestion(text: 'In Swahili, what do we call a grandfather?', options: ['Babu', 'Mama', 'Baba', 'Dada'], correct: 0, kind: 'culture', explain: 'Babu is grandfather.', lesson: 'Babu is the grandfather, the one who keeps the old stories.'),
  FamilyQuestion(text: 'What is a sister called in Swahili?', options: ['Dada', 'Kaka', 'Bibi', 'Mtoto'], correct: 0, kind: 'culture', explain: 'Dada is sister. Kaka is brother.', lesson: 'A sister is Dada and a brother is Kaka. Brothers and sisters carry each other.'),
  FamilyQuestion(text: 'What is a brother called in Swahili?', options: ['Kaka', 'Dada', 'Babu', 'Mzee'], correct: 0, kind: 'culture', explain: 'Kaka is brother.', lesson: 'A brother is Kaka. Look after your Kaka and your Dada.'),
  FamilyQuestion(text: 'Which word means father in Swahili?', options: ['Baba', 'Mama', 'Bibi', 'Kaka'], correct: 0, kind: 'culture', explain: 'Baba is father and Mama is mother.', lesson: 'Baba is father and Mama is mother. They are the roots of the home.'),
  FamilyQuestion(text: '"Umoja ni nguvu" means...', options: ['Unity is strength', 'Rain is coming', 'The market is open', 'The night is long'], correct: 0, kind: 'culture', explain: 'Together we are strong.', lesson: 'Umoja ni nguvu: unity is strength. One stick breaks, but a bundle of sticks does not.'),
  FamilyQuestion(text: '"Haba na haba hujaza kibaba" teaches us...', options: ['Little by little fills the measure', 'Big rivers need bridges', 'Cows love green grass', 'Fire needs wood'], correct: 0, kind: 'culture', explain: 'Small steps add up to great things.', lesson: 'Haba na haba hujaza kibaba: little by little fills the measure. Patience builds a family.'),
  FamilyQuestion(text: 'The African saying "It takes a village to raise a child" means...', options: ['Everyone helps to raise the children', 'Villages must be big', 'Children build houses', 'Only parents teach'], correct: 0, kind: 'culture', explain: 'Aunts, uncles, elders and neighbours all help.', lesson: 'It takes a whole village to raise a child. Aunties, uncles, elders and neighbours all teach.'),
  FamilyQuestion(text: 'Who is the traditional keeper of the family stories?', options: ['The elders', 'The market', 'The river', 'The drum'], correct: 0, kind: 'culture', explain: 'Elders hold the memory of the family.', lesson: 'The elders are a library that walks. When an elder is gone, a library burns, so we listen while we can.'),
  FamilyQuestion(text: 'Why do families sit round the fire at night?', options: ['To share stories and wisdom', 'To race each other', 'To hide from the sun', 'To count cows'], correct: 0, kind: 'culture', explain: 'The fire is where the old teach the young.', lesson: 'At night we sit round the fire. The flames are warm, and the stories are warmer.'),
  FamilyQuestion(text: 'What does "Harambee" mean?', options: ['Let us all pull together', 'A kind of fish', 'A long road', 'A rain dance'], correct: 0, kind: 'culture', explain: 'Harambee: everyone pulls together.', lesson: 'Harambee! It means let us all pull together, like many hands on one rope.'),
  FamilyQuestion(text: '"Mzee" is a respectful word for...', options: ['An elder', 'A baby', 'A market', 'A cow'], correct: 0, kind: 'culture', explain: 'We honour our Mzee.', lesson: 'Mzee is how we greet an elder with honour. We bow our heads and listen.'),
  FamilyQuestion(text: 'What does "Shikamoo" show?', options: ['Respect for an elder', 'Hunger', 'Sleepiness', 'A race'], correct: 0, kind: 'culture', explain: 'Children greet elders with Shikamoo, and the elder answers Marahaba.', lesson: 'Shikamoo is how a child greets an elder, and the elder says Marahaba. Respect travels both ways.'),
];

const List<String> _fallbackJobs = ['Farmer', 'Teacher', 'Nurse', 'Driver', 'Builder', 'Trader', 'Doctor', 'Tailor'];
const List<String> _fallbackPlaces = ['Nairobi', 'Lagos', 'Accra', 'Kampala', 'Dar es Salaam', 'Kigali', 'Addis Ababa', 'Dakar'];

FamilyQuestion? _mc(math.Random r, String text, String right, List<String> wrongPool, {required String explain, required String lesson, String kind = 'tree', int secs = 20}) {
  final wrong = wrongPool.where((w) => w != right && w.trim().isNotEmpty).toSet().toList()..shuffle(r);
  if (wrong.isEmpty) return null;
  final options = [right, ...wrong.take(3)]..shuffle(r);
  return FamilyQuestion(text: text, options: options, correct: options.indexOf(right), explain: explain, lesson: lesson, kind: kind, secs: secs);
}

String? _year(String date) => RegExp(r'(1[6-9]\d\d|20\d\d)').firstMatch(date)?.group(1);

/// Every question that can be made from the tree, grouped by kind. [withTf] adds true and false statements for tests.
Map<String, List<FamilyQuestion>> treeQuestionsByKind(FamilyGameData d, math.Random r, {bool withTf = false}) {
  final out = <String, List<FamilyQuestion>>{};
  void add(String kind, FamilyQuestion? q) {
    if (q != null) out.putIfAbsent(kind, () => []).add(q);
  }

  final names = [for (final m in d.members) d.nameOf(m)].toSet().toList();
  final places = [for (final m in d.members) if (m.birthPlace.trim().isNotEmpty) m.birthPlace.trim()].toSet().toList();
  final jobs = [for (final m in d.members) if (m.occupation.trim().isNotEmpty) m.occupation.trim()].toSet().toList();
  for (final m in d.members) {
    final name = d.nameOf(m);
    final p = d.parentOf(m);
    if (p != null) {
      final w = d.parentWord(p);
      add('parent', _mc(r, 'Who is the $w of $name?', d.nameOf(p), names.where((n) => n != name).toList(), explain: '${d.nameOf(p)} is the $w of $name.', lesson: '${d.nameOf(p)} is the $w of $name. A family is a chain, and each person is a link.'));
      if (withTf) {
        final other = d.members.where((o) => o.id != p.id && o.id != m.id && o.gender == p.gender).toList()..shuffle(r);
        add('tf', FamilyQuestion(text: 'True or false: ${d.nameOf(p)} is the $w of $name.', options: const ['True', 'False'], correct: 0, explain: 'Yes, ${d.nameOf(p)} is the $w of $name.', kind: 'tf', secs: 15));
        if (other.isNotEmpty) {
          add('tf', FamilyQuestion(text: 'True or false: ${d.nameOf(other.first)} is the $w of $name.', options: const ['True', 'False'], correct: 1, explain: 'No, the $w of $name is ${d.nameOf(p)}.', kind: 'tf', secs: 15));
        }
      }
    }
    final kids = d.childrenOf(m);
    if (kids.isNotEmpty) {
      final kid = kids[r.nextInt(kids.length)];
      add('child', _mc(r, 'Which of these people is a child of $name?', d.nameOf(kid), names.where((n) => n != name && !kids.any((k) => d.nameOf(k) == n)).toList(), explain: '${d.nameOf(kid)} is the ${d.childWord(kid)} of $name.', lesson: '$name has ${kids.length} ${kids.length == 1 ? 'child' : 'children'}, and ${d.nameOf(kid)} is one of them.'));
      final counts = {kids.length + 1, kids.length + 2, math.max(0, kids.length - 1)}..remove(kids.length);
      add('count', _mc(r, 'How many children does $name have?', '${kids.length}', [for (final c in counts) '$c'], explain: '$name has ${kids.length} ${kids.length == 1 ? 'child' : 'children'}.', lesson: 'Count them with me: $name has ${kids.length} ${kids.length == 1 ? 'child' : 'children'}.', secs: 15));
      if (kids.length >= 2 && kids[0].birthOrder != kids[1].birthOrder) {
        add('oldest', _mc(r, 'Who is the oldest child of $name?', d.nameOf(kids.first), [for (final k in kids.skip(1)) d.nameOf(k)], explain: '${d.nameOf(kids.first)} was born first.', lesson: 'The first born of $name is ${d.nameOf(kids.first)}. The eldest child often helps to guide the younger ones.'));
      }
    }
    final s = d.spouseOf(m);
    if (s != null) {
      add('spouse', _mc(r, 'Who is $name married to?', d.nameOf(s), names.where((n) => n != name).toList(), explain: '$name is married to ${d.nameOf(s)}.', lesson: '$name is married to ${d.nameOf(s)}. When two people marry, two families become one.'));
    }
    final g = d.grandparentOf(m);
    if (g != null) {
      add('grand', _mc(r, 'Who is the grandparent of $name?', d.nameOf(g), names.where((n) => n != name).toList(), explain: '${d.nameOf(g)} is the ${d.grandWord(g)} of $name.', lesson: '${d.nameOf(g)} is the ${d.grandWord(g)} of $name, two steps up the tree.'));
    }
    final sibs = d.siblingsOf(m);
    if (sibs.isNotEmpty) {
      final sib = sibs[r.nextInt(sibs.length)];
      add('sibling', _mc(r, 'Who is a brother or sister of $name?', d.nameOf(sib), names.where((n) => n != name && !sibs.any((x) => d.nameOf(x) == n)).toList(), explain: '${d.nameOf(sib)} and $name share the same parent.', lesson: '${d.nameOf(sib)} and $name are brother and sister: the same roots, two branches.'));
    }
    if (m.birthPlace.trim().isNotEmpty) {
      add('place', _mc(r, 'Where was $name born?', m.birthPlace.trim(), [...places, ..._fallbackPlaces], explain: '$name was born in ${m.birthPlace.trim()}.', lesson: '$name was born in ${m.birthPlace.trim()}. Every one of us comes from a place.'));
    }
    if (m.occupation.trim().isNotEmpty) {
      add('job', _mc(r, 'What work does $name do?', m.occupation.trim(), [...jobs, ..._fallbackJobs], explain: '$name works as ${m.occupation.trim()}.', lesson: '$name works as ${m.occupation.trim()}. Work is how we serve the family and the village.'));
      add('who', _mc(r, 'Who works as ${m.occupation.trim()}?', name, [for (final o in d.members) if (o.occupation.trim().toLowerCase() != m.occupation.trim().toLowerCase()) d.nameOf(o)], explain: '$name works as ${m.occupation.trim()}.', lesson: 'Remember: $name works as ${m.occupation.trim()}.'));
    }
    final year = _year(m.birthDate);
    if (year != null) {
      final y = int.parse(year);
      add('year', _mc(r, 'In which year was $name born?', year, ['${y + 2}', '${y - 3}', '${y + 5}', '${y - 1}'], explain: '$name was born in $year.', lesson: '$name was born in the year $year.', secs: 25));
    }
  }
  return out;
}

/// The questions of a game: a mix of every kind of question about the people in the tree, then culture questions if the tree is small.
/// The same [seed] always gives the same game.
List<FamilyQuestion> generateFamilyQuestions(FamilyTree tree, {int count = 10, int seed = 1, bool test = false}) {
  final d = FamilyGameData(tree);
  final r = math.Random(seed);
  final groups = treeQuestionsByKind(d, r, withTf: test);
  for (final g in groups.values) {
    g.shuffle(r);
  }
  final kinds = groups.keys.toList()..shuffle(r);
  final out = <FamilyQuestion>[];
  final seen = <String>{};
  var round = 0;
  while (out.length < count && kinds.any((k) => groups[k]!.length > round)) {
    for (final k in kinds) {
      if (out.length >= count) break;
      if (groups[k]!.length > round && seen.add(groups[k]![round].text)) out.add(groups[k]![round]);
    }
    round++;
  }
  if (out.length < count) {
    final culture = [...kCultureQuestions]..shuffle(r);
    for (final q in culture) {
      if (out.length >= count) break;
      out.add(_shuffled(q, r));
    }
  } else if (!test && out.length > 3) {
    // Even in a big tree, one question of culture keeps the elder teaching.
    final q = _shuffled(kCultureQuestions[r.nextInt(kCultureQuestions.length)], r);
    out[out.length - 1 - r.nextInt(3)] = q;
  }
  return out;
}

/// The same question with its answers in a different order (the right one is tracked).
FamilyQuestion _shuffled(FamilyQuestion q, math.Random r) {
  final right = q.options[q.correct];
  final o = [...q.options]..shuffle(r);
  return FamilyQuestion(text: q.text, options: o, correct: o.indexOf(right), explain: q.explain, lesson: q.lesson, kind: q.kind, secs: q.secs);
}

/// How many questions of a tree come from its own people (the rest are culture).
int treeQuestionCount(FamilyTree tree) => generateFamilyQuestions(tree, count: 10, seed: 7).where((q) => q.kind != 'culture').length;

// ─── Memory drums: a name and a clue belong together ──────────────────────────

class MemoryPair {
  const MemoryPair(this.id, this.name, this.clue);
  final String id, name, clue;
}

List<MemoryPair> memoryPairs(FamilyTree tree, {int pairs = 6, int seed = 1}) {
  final d = FamilyGameData(tree);
  final r = math.Random(seed);
  final out = <MemoryPair>[];
  final usedClues = <String>{};
  final members = [...d.members]..shuffle(r);
  for (final m in members) {
    final name = d.nameOf(m);
    final options = <String>[];
    final p = d.parentOf(m);
    if (p != null) options.add('${d.childWord(m)[0].toUpperCase()}${d.childWord(m).substring(1)} of ${d.nameOf(p)}');
    final kids = d.childrenOf(m);
    if (kids.isNotEmpty) options.add('${d.parentWord(m)[0].toUpperCase()}${d.parentWord(m).substring(1)} of ${d.nameOf(kids.first)}');
    final s = d.spouseOf(m);
    if (s != null) options.add('Married to ${d.nameOf(s)}');
    if (m.occupation.trim().isNotEmpty) options.add('Works as ${m.occupation.trim()}');
    if (m.birthPlace.trim().isNotEmpty) options.add('Born in ${m.birthPlace.trim()}');
    options.shuffle(r);
    final clue = options.where((c) => !usedClues.contains(c)).firstOrNull;
    if (clue == null) continue;
    usedClues.add(clue);
    out.add(MemoryPair(m.id, name, clue));
    if (out.length >= pairs) break;
  }
  return out;
}

// ─── Elder order: put people in the right order ──────────────────────────────

class OrderRound {
  const OrderRound(this.title, this.hint, this.names, this.ranks);
  final String title, hint;

  /// The people to put in order, and where each belongs (0 first).
  final List<String> names;
  final List<int> ranks;
}

List<OrderRound> orderRounds(FamilyTree tree, {int rounds = 4, int seed = 1}) {
  final d = FamilyGameData(tree);
  final r = math.Random(seed);
  final out = <OrderRound>[];
  final parents = [for (final m in d.members) if (d.childrenOf(m).length >= 2) m]..shuffle(r);
  for (final p in parents) {
    final kids = d.childrenOf(p).take(5).toList();
    if (kids.map((k) => k.birthOrder).toSet().length < kids.length) continue;
    out.add(OrderRound('The children of ${d.nameOf(p)}', 'Tap them from the oldest to the youngest.', [for (final k in kids) d.nameOf(k)], [for (var i = 0; i < kids.length; i++) i]));
    if (out.length >= rounds) return out;
  }
  // Generations: the elders first, the youngest last.
  final byDepth = <int, List<FamilyMember>>{};
  for (final m in d.members) {
    byDepth.putIfAbsent(d.depthOf(m), () => []).add(m);
  }
  if (byDepth.length >= 2 && out.length < rounds) {
    final depths = byDepth.keys.toList()..sort();
    final pick = [for (final dep in depths.take(5)) (byDepth[dep]!..shuffle(r)).first];
    out.add(OrderRound('Which generation comes first?', 'Tap them from the eldest generation to the youngest.', [for (final m in pick) d.nameOf(m)], [for (var i = 0; i < pick.length; i++) i]));
  }
  return out;
}

// ─── Stars, badges and best scores ───────────────────────────────────────────

/// A badge the player has earned from their Family Stars.
class FamilyBadge {
  const FamilyBadge(this.name, this.emoji, this.from);
  final String name, emoji;
  final int from;
}

const List<FamilyBadge> kFamilyBadges = [
  FamilyBadge('Little Seed', '🌱', 0),
  FamilyBadge('Young Listener', '👂', 40),
  FamilyBadge('Storyteller', '🪘', 120),
  FamilyBadge('Village Pride', '🏡', 300),
  FamilyBadge('Keeper of Roots', '🌳', 700),
  FamilyBadge('Elder of the Fire', '🔥', 1500),
];

FamilyBadge badgeFor(int stars) => kFamilyBadges.lastWhere((b) => stars >= b.from);

/// The next badge to win, or null when all are won.
FamilyBadge? nextBadge(int stars) => kFamilyBadges.where((b) => b.from > stars).firstOrNull;

/// Family Stars are kept on this phone for each person who plays.
class FamilyStars {
  static String _key(String email) => 'ngmy_family_stars_v1_${email.trim().toLowerCase()}';

  static Future<int> total(String email) async {
    try {
      final p = await SharedPreferences.getInstance();
      return p.getInt(_key(email)) ?? 0;
    } catch (_) {
      return 0;
    }
  }

  static Future<int> add(String email, int stars) async {
    try {
      final p = await SharedPreferences.getInstance();
      final now = (p.getInt(_key(email)) ?? 0) + (stars < 0 ? 0 : stars);
      await p.setInt(_key(email), now);
      return now;
    } catch (_) {
      return stars;
    }
  }

  static String _bestKey(String email, String tree, String game) => 'ngmy_family_best_v1_${email.trim().toLowerCase()}_${tree}_$game';

  static Future<int> best(String email, String tree, String game) async {
    try {
      final p = await SharedPreferences.getInstance();
      return p.getInt(_bestKey(email, tree, game)) ?? 0;
    } catch (_) {
      return 0;
    }
  }

  /// Keeps the score if it beats the old best. Returns true when it is a new record.
  static Future<bool> saveBest(String email, String tree, String game, int score) async {
    try {
      final p = await SharedPreferences.getInstance();
      final old = p.getInt(_bestKey(email, tree, game)) ?? 0;
      if (score > old) {
        await p.setInt(_bestKey(email, tree, game), score);
        return old > 0;
      }
    } catch (_) {}
    return false;
  }
}

/// Stars won for a game: a few for every right answer, and a bonus for a perfect game.
int starsForResult({required int right, required int total, int streakBest = 0}) {
  if (total <= 0) return 0;
  final base = right * 5;
  final perfect = right == total ? 20 : 0;
  return base + perfect + math.min(streakBest, 8);
}

/// Points of a Kahoot question: more for a quick right answer, and a bonus for every answer in a row.
int kahootPoints({required double secsLeft, required int secs, required int streak}) {
  final k = (secsLeft / secs).clamp(0.0, 1.0);
  return (500 + 500 * k).round() + 100 * math.min(streak, 5);
}

// ─── Games the tree owner writes by hand (two at most) ───────────────────────

class CreatorQuestion {
  CreatorQuestion({this.text = '', List<String>? answers, this.correct = 0, this.secs = 20}) : answers = answers ?? ['', '', '', ''];
  String text;
  List<String> answers;
  int correct;
  int secs;

  bool get complete => text.trim().isNotEmpty && answers.where((a) => a.trim().isNotEmpty).length >= 2 && answers[correct].trim().isNotEmpty;

  Map<String, dynamic> toJson() => {'q': text, 'a': answers, 'c': correct, 's': secs};

  factory CreatorQuestion.fromJson(Map<String, dynamic> j) => CreatorQuestion(
        text: (j['q'] ?? '').toString(),
        answers: [for (final a in (j['a'] is List ? j['a'] as List : const [])) a.toString()].take(4).toList()..addAll(List.filled(math.max(0, 4 - (j['a'] is List ? (j['a'] as List).length : 0)), '')),
        correct: ((j['c'] as num?)?.toInt() ?? 0).clamp(0, 3),
        secs: ((j['s'] as num?)?.toInt() ?? 20).clamp(5, 60),
      );
}

class CreatorGame {
  CreatorGame({required this.id, this.title = '', List<CreatorQuestion>? questions}) : questions = questions ?? [];
  final String id;
  String title;
  final List<CreatorQuestion> questions;

  List<CreatorQuestion> get ready => [for (final q in questions) if (q.complete) q];

  Map<String, dynamic> toJson() => {'id': id, 'title': title, 'qs': [for (final q in questions) q.toJson()]};

  factory CreatorGame.fromJson(Map<String, dynamic> j) => CreatorGame(
        id: (j['id'] ?? '').toString(),
        title: (j['title'] ?? '').toString(),
        questions: [for (final q in (j['qs'] is List ? j['qs'] as List : const [])) if (q is Map) CreatorQuestion.fromJson(Map<String, dynamic>.from(q))],
      );

  /// The questions of this game, ready to play (the empty answers are left out).
  List<FamilyQuestion> toQuestions() {
    final out = <FamilyQuestion>[];
    for (final q in ready) {
      final right = q.answers[q.correct].trim();
      final options = [for (final a in q.answers) if (a.trim().isNotEmpty) a.trim()];
      out.add(FamilyQuestion(text: q.text.trim(), options: options, correct: options.indexOf(right), explain: 'The right answer is $right.', kind: 'creator', secs: q.secs));
    }
    return out;
  }
}

List<CreatorGame> creatorGamesOf(FamilyTree tree) => [for (final g in tree.games) CreatorGame.fromJson(g)];

/// Can this person write another game? Only the person who made the tree, and only up to two.
bool canMakeCreatorGame(FamilyTree tree, {required bool isOwner}) => isOwner && tree.games.length < kMaxCreatorGames;

String encodeCreatorGames(List<CreatorGame> games) => jsonEncode([for (final g in games) g.toJson()]);
