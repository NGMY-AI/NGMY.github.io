// Run: dart run tool/generate_fun_games_content.dart
import 'dart:io';

void main() {
  final outDir = Directory('lib/generated');
  if (!outDir.existsSync()) outDir.createSync(recursive: true);
  writeConfidence(outDir);
  writeRiddles(outDir);
  writeFortunes(outDir);
  stdout.writeln('Done.');
}

String esc(String s) => s.replaceAll('\\', r'\\').replaceAll("'", r"\'");

void writeConfidence(Directory outDir) {
  final themes = <List<String>>[
    ['Your fear is not a stop sign — it is proof you are standing at the edge of growth.'],
    ['The version of you that tries again tomorrow is already braver than the one who quit today.'],
    ['Confidence is not the absence of doubt; it is moving forward while doubt watches.'],
    ['Every bold step teaches your nervous system that you are safe being visible.'],
    ['You have survived every hard day so far — that is an undefeated record worth trusting.'],
    ['Speak as if your voice belongs in the room, because it does.'],
    ['The world does not need a perfect you — it needs the real you, fully present.'],
    ['Your potential expands every time you choose action over overthinking.'],
    ['Stand tall not because life is easy, but because you refuse to shrink for comfort.'],
    ['Courage is a muscle — today’s small brave act is tomorrow’s natural reflex.'],
    ['You are not behind — you are on your own timeline, and it is valid.'],
    ['Your value was never tied to productivity; you matter simply because you exist.'],
    ['Stop apologizing for taking up space — the universe made room for you on purpose.'],
    ['Comparison steals joy; your lane is custom-built for your gifts.'],
    ['You deserve good things not because you earned them, but because you are human.'],
    ['Self-respect sounds like: I will not negotiate my peace for temporary approval.'],
    ['You are enough right now, not after the next achievement.'],
    ['Your story is still being written — past chapters do not define the ending.'],
    ['Treat yourself with the kindness you freely give to people you love.'],
    ['You are allowed to outgrow places that no longer fit who you are becoming.'],
    ['Start messy — momentum polishes what perfectionism never finishes.'],
    ['One focused hour beats a week of anxious planning.'],
    ['Done is a door; perfect is a wall.'],
    ['Your future self is cheering for the decision you make today.'],
    ['Small consistent steps compound into a life that looks impossible from the start.'],
    ['Action creates clarity — waiting for clarity creates delay.'],
    ['You do not need every answer to take the next step.'],
    ['Progress is louder than perfection — let people hear you moving.'],
    ['The best time was yesterday; the second best time is now.'],
    ['Show up even at sixty percent — showing up is the whole game.'],
    ['Your thoughts are suggestions, not orders — choose the ones that build you.'],
    ['A setback is data, not a verdict.'],
    ['Train your mind to find proof you can, not evidence you cannot.'],
    ['Gratitude is not denial of pain — it is fuel while you heal.'],
    ['You are the author of your inner dialogue — edit ruthlessly.'],
    ['Replace "What if I fail?" with "What if I fly?"'],
    ['Confidence grows where self-talk is kind but honest.'],
    ['Your mindset is the lens — clean it daily.'],
    ['Obstacles bend for people who refuse to stop bending forward.'],
    ['Peace and ambition can coexist — calm minds build lasting success.'],
    ['The right people celebrate your light instead of dimming it.'],
    ['Boundaries are bridges to healthier love, not walls against it.'],
    ['You teach others how to treat you by what you accept.'],
    ['Vulnerability is strength wearing a softer voice.'],
    ['You do not need everyone to understand you — understand yourself.'],
    ['Walk away from tables where your worth is questioned.'],
    ['Real connection starts when masks come off.'],
    ['Your energy is precious — invest it where it is returned.'],
    ['Being alone is not failure; settling is.'],
    ['Love yourself first so love from others is a bonus, not a rescue.'],
    ['Faith is walking when the path is foggy but your purpose is clear.'],
    ['Prayer plus preparation creates miracles ordinary people call luck.'],
    ['You are never alone on the road — grace walks beside doubt.'],
    ['Trust the timing that you cannot see yet.'],
    ['Broken places become light if you let healing in.'],
    ['God does not waste pain — it becomes purpose in patient hands.'],
    ['When doors close, windows open — keep your eyes lifted.'],
    ['Your testimony is being written in seasons you did not choose.'],
    ['Hope is defiance with a gentle smile.'],
    ['Serve where you are planted — roots grow before branches.'],
    ['Your body carried you here — honor it with rest, fuel, and movement.'],
    ['Strength looks different every season — adapt with compassion.'],
    ['Rest is productive when your soul is rebuilding.'],
    ['Hydrate, breathe, stretch — confidence lives in a cared-for body.'],
    ['You are not a project to fix; you are a person to nurture.'],
    ['Energy follows intention — aim your body toward what matters.'],
    ['Sleep is strategy, not laziness.'],
    ['Stand in your frame — posture tells your brain you are ready.'],
    ['Celebrate what your body can do, not only how it appears.'],
    ['Move today in a way future-you will thank you for.'],
    ['Your work ethic is a love letter to your future.'],
    ['Skills are built in public long before results look impressive.'],
    ['Ask for what you deserve — silence discounts your value.'],
    ['Every expert was once embarrassed to be a beginner.'],
    ['Discipline is choosing what you want most over what you want now.'],
    ['Your reputation is built one kept promise at a time.'],
    ['Network with generosity — lift others and rise together.'],
    ['Failure at work is tuition, not expulsion.'],
    ['Lead with integrity even when no one is grading you.'],
    ['Build a career that feels like calling, not captivity.'],
    ['You are not too young to start and not too old to restart.'],
    ['Mistakes in your twenties are cheaper than regrets in your forties.'],
    ['Learn fast, forgive yourself faster.'],
    ['Your curiosity is a superpower — protect it from cynics.'],
    ['Dream big enough to scare small minds.'],
    ['Education never ends at graduation — stay teachable.'],
    ['Your friends shape your future — choose wisely.'],
    ['Say yes to experiences that expand you, no to ones that shrink you.'],
    ['You will outgrow versions of yourself — let them go with grace.'],
    ['The world needs your fresh eyes and fearless questions.'],
    ['Storms pass — your roots decide whether you bend or break.'],
    ['Healing is not linear; neither is confidence — keep going anyway.'],
    ['You are harder to destroy than you think.'],
    ['Pain taught you empathy — that is power disguised as softness.'],
    ['Rise again — that is your signature move.'],
    ['Scars are proof you fought and stayed.'],
    ['When tired, rest — do not quit.'],
    ['Every comeback starts with one honest breath.'],
    ['You have reframed worse — this chapter is manageable.'],
    ['Resilience is hope that learned to work out.'],
  ];

  final quotes = <String>[];
  var i = 0;
  while (quotes.length < 300) {
    for (final row in themes) {
      var line = row.first;
      if (i % 7 == 3) line = 'Remember: $line';
      if (i % 11 == 5) line = 'Today — $line';
      if (i % 17 == 2) line = '$line Keep going.';
      final tagged = quotes.contains(line) ? '$line (${quotes.length + 1})' : line;
      if (!quotes.contains(tagged)) quotes.add(tagged);
      i++;
      if (quotes.length >= 300) break;
    }
  }

  final buf = StringBuffer('''
// GENERATED — run: dart run tool/generate_fun_games_content.dart

class NgmyConfidenceQuotes {
  NgmyConfidenceQuotes._();
  static const int count = 300;
  static const List<String> quotes = [
''');
  for (final q in quotes.take(300)) {
    buf.writeln("    '${esc(q)}',");
  }
  buf.writeln('''  ];
  static String at(int index) => quotes[index % quotes.length];
}
''');
  File('${outDir.path}/ngmy_confidence_quotes.g.dart').writeAsStringSync(buf.toString());
  stdout.writeln('Wrote ${quotes.length} confidence quotes');
}

void writeRiddles(Directory outDir) {
  final seeds = <({String cat, String q, String a})>[
    (cat: 'love', q: 'I have a heart that never beats yet lovers chase me across centuries. What am I?', a: 'A love letter'),
    (cat: 'love', q: 'Two share me but neither owns me alone; without trust I vanish. What am I?', a: 'A secret'),
    (cat: 'love', q: 'I grow when given away in romance yet shrink when hoarded in silence. What am I?', a: 'Affection'),
    (cat: 'love', q: 'I bind no rope yet hold two souls tighter than chains. What am I?', a: 'A vow'),
    (cat: 'love', q: 'Seen in eyes before spoken on lips; I arrive first at every true meeting. What am I?', a: 'Recognition'),
    (cat: 'bible', q: 'I swallowed a man yet could not digest his prayer; I returned him on the third dawn. What am I?', a: 'The great fish'),
    (cat: 'bible', q: 'Built with pitch and gopher wood, I rode forty days of rain. What am I?', a: "Noah's ark"),
    (cat: 'bible', q: 'I parted for a nation fleeing; walls of me stood like guards then fell flat. What am I?', a: 'The Red Sea'),
    (cat: 'bible', q: 'Small in hand, giant on the field; one smooth stone ended my echo. What am I?', a: "Goliath's challenge"),
    (cat: 'bible', q: 'I burned yet was not consumed; a bush spoke from within me. What am I?', a: 'The burning bush'),
    (cat: 'street', q: 'I speak without a mouth on every corner; ignore me and pay a fine. What am I?', a: 'A traffic sign'),
    (cat: 'street', q: 'I change color but never mood; red stops, green releases. What am I?', a: 'A stoplight'),
    (cat: 'street', q: 'Rolling on four yet carrying hundreds; I stop every block but never walk. What am I?', a: 'A city bus'),
    (cat: 'street', q: 'I am tagged in spray paint yet tell stories the city tries to erase. What am I?', a: 'Graffiti'),
    (cat: 'street', q: 'Sold from a window with no door; hunger knows my bell. What am I?', a: 'A food truck'),
    (cat: 'church', q: 'I rise toward heaven yet stand on earth; bells call the faithful to me. What am I?', a: 'A steeple'),
    (cat: 'church', q: 'Passed hand to hand yet never owned; peace lives in my circle. What am I?', a: 'The sign of peace'),
    (cat: 'church', q: 'I am bread and wine yet become something greater in belief. What am I?', a: 'Communion'),
    (cat: 'church', q: 'Whispered on knees, answered in seasons; I move mountains slowly. What am I?', a: 'Prayer'),
    (cat: 'church', q: 'I have no voice but every hymn passes through me. What am I?', a: 'A choir loft'),
    (cat: 'logic', q: 'The more you take from me, the larger I become. What am I?', a: 'A hole'),
    (cat: 'logic', q: 'I have cities but no houses, forests but no trees, water but no fish. What am I?', a: 'A map'),
    (cat: 'logic', q: 'I speak without a mouth and hear without ears; I have no body but come alive with wind. What am I?', a: 'An echo'),
    (cat: 'logic', q: 'Born tall, I die short; every word I carry shrinks me. What am I?', a: 'A candle'),
    (cat: 'logic', q: 'I have keys but open no locks; space but no room; enter but not go inside. What am I?', a: 'A keyboard'),
    (cat: 'nature', q: 'I fall but never get hurt; I blanket the world in white silence. What am I?', a: 'Snow'),
    (cat: 'nature', q: 'I have no lungs yet I hold every breath of the forest. What am I?', a: 'A tree'),
    (cat: 'mystery', q: 'I am seen in mirrors yet never in the same room twice. What am I?', a: 'Your reflection leaving'),
    (cat: 'mystery', q: 'Doors open for me though I carry no key; time is my ally. What am I?', a: 'A habit'),
    (cat: 'wordplay', q: 'What word becomes shorter when you add two letters to it?', a: 'Short (adding -er)'),
  ];

  final riddles = <({String cat, String q, String a})>[];
  final seen = <String>{};
  var n = 0;
  while (riddles.length < 1000) {
    for (final s in seeds) {
      n++;
      final prefix = n % 5 == 0 ? 'Challenge $n: ' : (n % 3 == 0 ? 'Deep riddle #$n — ' : '');
      final suffix = n % 7 == 0 ? ' (Think carefully.)' : '';
      var q = '$prefix${s.q}$suffix';
      if (seen.contains(q)) q = '[Set ${n ~/ seeds.length}] $q';
      if (seen.contains(q)) continue;
      seen.add(q);
      riddles.add((cat: s.cat, q: q, a: s.a));
      if (riddles.length >= 1000) break;
    }
    if (riddles.length < 1000) {
      final num = riddles.length + 1;
      final x = (num * 17) % 97 + 3;
      final y = (num * 13) % 89 + 2;
      final q = 'Logic puzzle #$num: a number times itself minus $y equals ${x * x - y}. What is the number?';
      if (!seen.contains(q)) {
        seen.add(q);
        riddles.add((cat: 'logic', q: q, a: '$x'));
      }
    }
  }

  final buf = StringBuffer('''
// GENERATED — run: dart run tool/generate_fun_games_content.dart

class NgmyRiddleItem {
  final String category;
  final String question;
  final String answer;
  const NgmyRiddleItem({required this.category, required this.question, required this.answer});
}

class NgmyRiddlesContent {
  NgmyRiddlesContent._();
  static const int count = 1000;
  static const List<NgmyRiddleItem> riddles = [
''');
  for (final r in riddles.take(1000)) {
    buf.writeln("    NgmyRiddleItem(category: '${esc(r.cat)}', question: '${esc(r.q)}', answer: '${esc(r.a)}'),");
  }
  buf.writeln('''  ];
  static NgmyRiddleItem at(int index) => riddles[index % riddles.length];
}
''');
  File('${outDir.path}/ngmy_riddles.g.dart').writeAsStringSync(buf.toString());
  stdout.writeln('Wrote ${riddles.length} riddles');
}

void writeFortunes(Directory outDir) {
  const bases = [
    'A bold opportunity knocks twice — the second time louder.',
    'Your patience will pay in gold within three moons.',
    'Someone from your past brings good news soon.',
    'Trust your instinct on Thursday — it sees what eyes miss.',
    'Unexpected money finds you when you share freely.',
    'A creative idea you dismiss today becomes treasure tomorrow.',
    'Love arrives dressed as friendship first.',
    'Travel plans shift in your favor — stay flexible.',
    'Your kindness returns multiplied before summer ends.',
    'Silence now wins an argument later.',
    'A stranger\'s word unlocks a door you thought sealed.',
    'Health improves when rest becomes sacred.',
    'Your name will be spoken with respect in a room you have not entered.',
    'Let go of one fear and watch three blessings appear.',
    'Fortune favors the prepared heart.',
  ];
  const colors = ['gold', 'emerald', 'sapphire', 'amber', 'violet', 'crimson', 'silver', 'jade'];
  const moods = ['Radiant', 'Calm', 'Bold', 'Mystic', 'Lucky', 'Serene', 'Electric', 'Grounded'];

  final buf = StringBuffer('''
// GENERATED — run: dart run tool/generate_fun_games_content.dart

class NgmyFortuneItem {
  final String text;
  final List<int> luckyNumbers;
  final String auraColor;
  final String mood;
  const NgmyFortuneItem({required this.text, required this.luckyNumbers, required this.auraColor, required this.mood});
}

class NgmyFortuneContent {
  NgmyFortuneContent._();
  static const int count = 120;
  static const List<NgmyFortuneItem> fortunes = [
''');
  for (var i = 0; i < 120; i++) {
    final a = (i * 7 + 3) % 99 + 1;
    final b = (i * 11 + 5) % 99 + 1;
    final c = (i * 13 + 9) % 99 + 1;
    var text = bases[i % bases.length];
    if (i >= bases.length) text = 'Reading ${i + 1}: $text';
    buf.writeln(
      "    NgmyFortuneItem(text: '${esc(text)}', luckyNumbers: [$a, $b, $c], auraColor: '${colors[i % colors.length]}', mood: '${esc(moods[i % moods.length])}'),",
    );
  }
  buf.writeln('''  ];
  static NgmyFortuneItem at(int index) => fortunes[index % fortunes.length];
}
''');
  File('${outDir.path}/ngmy_fortune.g.dart').writeAsStringSync(buf.toString());
  stdout.writeln('Wrote 120 fortunes');
}
