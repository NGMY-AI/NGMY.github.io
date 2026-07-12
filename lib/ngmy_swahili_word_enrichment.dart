import 'ngmy_swahili_curriculum.dart';

const kSwahiliMinStudySeconds = 5;

/// Swahili tip with English meaning beside it.
class SwahiliBilingualTip {
  const SwahiliBilingualTip(this.swahili, this.english);

  final String swahili;
  final String english;
}

SwahiliBilingualTip _tip(String sw, String en) => SwahiliBilingualTip(sw, en);

/// Part note: Swahili word = English meaning.
String _part(String sw, String en) => '$sw = $en';

/// One example sentence with per-word bilingual notes.
class SwahiliExample {
  const SwahiliExample({
    required this.swahili,
    required this.english,
    this.partNotes = const [],
  });

  final String swahili;
  final String english;
  final List<String> partNotes;
}

SwahiliExample _ex(String sw, String en, [List<String> parts = const []]) =>
    SwahiliExample(swahili: sw, english: en, partNotes: parts);

class SwahiliRichWord {
  const SwahiliRichWord({
    required this.base,
    required this.explanationSw,
    required this.explanationEn,
    required this.grammarSw,
    required this.grammarEn,
    required this.tips,
    required this.examples,
  });

  final SwahiliWord base;
  final String explanationSw;
  final String explanationEn;
  final String grammarSw;
  final String grammarEn;
  final List<SwahiliBilingualTip> tips;
  final List<SwahiliExample> examples;
}

SwahiliRichWord enrichSwahiliWord(SwahiliWord w) {
  final key = w.swahili.trim();
  if (_richBySwahili.containsKey(key)) return _richBySwahili[key]!(w);
  return _autoEnrich(w);
}

List<String> _bilingualParts(SwahiliWord w) {
  if (w.breakdown.isNotEmpty) return w.breakdown;
  return w.swahili.split(' ').map((p) => _part(p, 'part of this phrase')).toList();
}

SwahiliRichWord _autoEnrich(SwahiliWord w) {
  final parts = _bilingualParts(w);

  final examples = <SwahiliExample>[
    if (w.example.isNotEmpty && !w.example.contains(' = '))
      _ex(w.example, w.english, parts),
    if (w.example.contains(' = '))
      _ex(
        w.example.split(' = ').first.trim(),
        w.example.split(' = ').last.trim(),
        parts,
      ),
    _ex('Kwa Kiingereza: "${w.english}" katika sentensi yako.', 'In English: use "${w.english}" in your own sentence.', parts),
    _ex('Sema kwa sauti kwa Kiingereza: "${w.english}".', 'Say it aloud in English: "${w.english}".', parts),
    _ex('Andika kwenye daftari: ${w.english} — ${w.swahili}.', 'Write in your notebook: ${w.english} — ${w.swahili}.', parts),
    _ex('Uliza rafiki: unasemaje "${w.swahili}" kwa Kiingereza?', 'Ask a friend: how do you say "${w.swahili}" in English?', parts),
  ];

  return SwahiliRichWord(
    base: w,
    explanationSw:
        'Neno la Kiingereza ni: "${w.english}". Kwa Kiswahili unalijua tayari: "${w.swahili}" (${w.pronunciation}). '
        'Zoezi: soma "${w.english}" kwa makini, rudia kwa sauti, kisha jaribu kuitumia katika sentensi yako ya Kiingereza.',
    explanationEn:
        'The English word is: "${w.english}". You already know it in Swahili: "${w.swahili}" (${w.pronunciation}). '
        'Practice: read "${w.english}" carefully, repeat it aloud, then try using it in your own English sentence.',
    grammarSw: w.grammar.isNotEmpty
        ? 'Sarufi ya Kiingereza: Muundo huu wa kimsingi unalingana na wa Kiswahili — ${w.grammar}. Kumbuka muundo huu ukijenga sentensi mpya za Kiingereza.'
        : 'Sarufi: Angalia kila sehemu ya "${w.english}" kwa Kiingereza. Jaribu kuitumia katika mazungumzo yako ya kila siku ya Kiingereza.',
    grammarEn: w.grammar.isNotEmpty
        ? 'English grammar: This basic pattern matches the Swahili one — ${w.grammar}. Remember this pattern when you build new English sentences.'
        : 'Grammar: Look at each part of "${w.english}" in English. Try using it in your everyday English conversations.',
    tips: [
      _tip('Sema kwa sauti mara tatu kwa Kiingereza: "${w.english}".', 'Say it aloud three times in English: "${w.english}".'),
      _tip('Funga macho, sema "${w.english}" kwa Kiingereza bila kuangalia.', 'Close your eyes and say "${w.english}" in English without looking.'),
      _tip('Andika neno la Kiingereza mara tano kwenye daftari lako.', 'Write the English word five times in your notebook.'),
      _tip('Tafuta mahali pa kutumia "${w.english}" kwa Kiingereza leo.', 'Find a place to use "${w.english}" in English today.'),
      _tip('Kumbuka: kwa Kiswahili ni "${w.swahili}".', 'Remember: in Swahili it is "${w.swahili}".'),
    ],
    examples: examples,
  );
}

SwahiliRichWord Function(SwahiliWord) _rich(
  String explanationSw,
  String explanationEn,
  String grammarSw,
  String grammarEn,
  List<SwahiliBilingualTip> tips,
  List<SwahiliExample> examples,
) =>
    (w) => SwahiliRichWord(
          base: w,
          explanationSw: explanationSw,
          explanationEn: explanationEn,
          grammarSw: grammarSw,
          grammarEn: grammarEn,
          tips: tips,
          examples: examples,
        );

final Map<String, SwahiliRichWord Function(SwahiliWord)> _richBySwahili = {
  'Mimi': _rich(
    'Kwa Kiingereza, "Mimi" ni "I" au "me" — mtu anayezungumza. Kiingereza hutumia "I" mwanzoni mwa sentensi ukizungumzia mambo yako: I am here, I am hungry, I am happy.',
    'In English, "Mimi" is "I" or "me" — the person speaking. Use "I" at the start of a sentence about yourself: I am here, I am hungry, I am happy.',
    'Sarufi ya Kiingereza: "I" huandikwa kwa herufi kubwa daima, popote ilipo kwenye sentensi. "Me" hutumika baada ya kitenzi: He loves me.',
    'English grammar: "I" is always capitalized, wherever it falls in the sentence. "Me" is used after a verb: He loves me.',
    [
      _tip('Sema kwa Kiingereza mara tatu: "I" na "me".', 'Say it in English three times: "I" and "me".'),
      _tip('Kumbuka: "I" ni herufi kubwa daima kwa Kiingereza — hata katikati ya sentensi.', 'Remember: "I" is always capital in English — even in the middle of a sentence.'),
      _tip('Linganisha: I (mimi) · You (wewe) · He/She (yeye).', 'Compare: I (mimi) · You (wewe) · He/She (yeye).'),
    ],
    [
      _ex('Mimi ni mwanafunzi.', 'I am a student.', [_part('Mimi', 'I / me'), _part('ni', 'am / is'), _part('mwanafunzi', 'student')]),
      _ex('Mimi nina rafiki mzuri.', 'I have a good friend.', [_part('Mimi', 'I'), _part('nina', 'I have'), _part('rafiki', 'friend'), _part('mzuri', 'good')]),
      _ex('Mimi niko nyumbani leo.', 'I am at home today.', [_part('Mimi', 'I'), _part('niko', 'I am (at a place)'), _part('nyumbani', 'at home'), _part('leo', 'today')]),
      _ex('Mimi ninakupenda.', 'I love you.', [_part('Mimi', 'I'), _part('ninakupenda', 'I love you')]),
    ],
  ),
  'Wewe / Ninyi': _rich(
    'Kwa Kiingereza, "Wewe" na "Ninyi" vyote ni "you" — neno moja tu, kwa mtu mmoja au wengi! Kiingereza hakina tofauti kama Kiswahili.',
    '"Wewe" and "Ninyi" are both just "you" in English — one word covers both singular and plural! English doesn\'t distinguish the way Swahili does.',
    'Sarufi ya Kiingereza: "You" haibadiliki kamwe — sawa kwa mtu mmoja au wengi, mwanaume au mwanamke.',
    'English grammar: "You" never changes — the same word whether one person or many, male or female.',
    [
      _tip('Sema kwa Kiingereza: "you" — mara tatu.', 'Say it in English: "you" — three times.'),
      _tip('Kumbuka: Kiingereza hakina "Nyinyi" ya heshima — "you" pekee kwa kila mtu.', 'Remember: English has no polite "Nyinyi" — just "you" for everyone.'),
      _tip('Swali: "Who are you?" = "Wewe ni nani?"', 'Question: "Who are you?" = "Wewe ni nani?"'),
    ],
    [
      _ex('Wewe ni rafiki yangu.', 'You are my friend.', [_part('Wewe', 'you'), _part('ni', 'are'), _part('rafiki yangu', 'my friend')]),
      _ex('Ninyi mnafanya kazi nzuri.', 'You all are doing good work.', [_part('Ninyi', 'you all'), _part('mnafanya', 'you all do'), _part('kazi nzuri', 'good work')]),
      _ex('Wewe unaweza kufanya hivi.', 'You can do this.', [_part('Wewe', 'you'), _part('unaweza', 'you can'), _part('kufanya', 'to do')]),
      _ex('Ninyi mko wapi?', 'Where are you all?', [_part('Ninyi', 'you all'), _part('mko', 'you all are'), _part('wapi', 'where')]),
    ],
  ),
  'Yeye': _rich(
    'Kwa Kiingereza, "Yeye" hugawanyika kuwa mbili: "he" (mwanaume) na "she" (mwanamke) — tofauti na Kiswahili ambacho hutumia neno moja.',
    'In English, "Yeye" splits into two words: "he" (for a man) and "she" (for a woman) — unlike Swahili, which uses one word for both.',
    'Sarufi ya Kiingereza: He + is/has/does (mwanaume). She + is/has/does (mwanamke).',
    'English grammar: He + is/has/does (for a man). She + is/has/does (for a woman).',
    [
      _tip('Muhimu: Kiingereza kinahitaji ujue jinsia — "he" au "she", si "yeye" tu.', 'Important: English requires you to know the gender — "he" or "she", not just "yeye".'),
      _tip('Kwa msichana: "She is beautiful." Kwa mvulana: "He is handsome."', 'For a girl: "She is beautiful." For a boy: "He is handsome."'),
      _tip('Wingi kwa Kiingereza: "they" (wao) — utajifunza baadaye.', 'Plural in English: "they" (wao) — you will learn that later.'),
    ],
    [
      _ex('Yeye anakuja sasa.', 'He/She is coming now.', [_part('Yeye', 'he/she'), _part('anakuja', 'is coming'), _part('sasa', 'now')]),
      _ex('Yeye ni mwalimu wangu.', 'He/She is my teacher.', [_part('Yeye', 'he/she'), _part('ni', 'is'), _part('mwalimu wangu', 'my teacher')]),
      _ex('Yeye ana gari jipya.', 'He/She has a new car.', [_part('Yeye', 'he/she'), _part('ana', 'has'), _part('gari jipya', 'new car')]),
      _ex('Ninamjua yeye vizuri.', 'I know him/her well.', [_part('Ninamjua', 'I know'), _part('yeye', 'him/her'), _part('vizuri', 'well')]),
    ],
  ),
  'Sisi': _rich(
    'Kwa Kiingereza, "Sisi" ni "we" (kama mhusika) au "us" (baada ya kitenzi) — wewe na mimi pamoja, au kikundi chako.',
    '"Sisi" is "we" (as the subject) or "us" (after a verb) in English — you and me together, or your group.',
    'Sarufi ya Kiingereza: We + do/are/have (mwanzoni mwa sentensi). "Us" hutumika baada ya kitenzi: He helped us.',
    'English grammar: We + do/are/have (at the start of a sentence). "Us" is used after a verb: He helped us.',
    [
      _tip('Sema kwa Kiingereza: "we" na "us".', 'Say it in English: "we" and "us".'),
      _tip('We vs Us: "We" ni mhusika (We tunakula). "Us" ni baada ya kitenzi (He saw us).', 'We vs Us: "We" is the subject ("We are eating"). "Us" comes after the verb ("He saw us").'),
      _tip('Rudia kwa Kiingereza: We are eating, We are going, We are here.', 'Repeat in English: We are eating, We are going, We are here.'),
    ],
    [
      _ex('Sisi tunakula chakula.', 'We are eating food.', [_part('Sisi', 'we'), _part('tunakula', 'we eat / are eating'), _part('chakula', 'food')]),
      _ex('Sisi ni familia moja.', 'We are one family.', [_part('Sisi', 'we'), _part('ni', 'are'), _part('familia moja', 'one family')]),
      _ex('Sisi tuna furaha leo.', 'We are happy today.', [_part('Sisi', 'we'), _part('tuna furaha', 'we have happiness'), _part('leo', 'today')]),
      _ex('Sisi tutaenda kesho.', 'We will go tomorrow.', [_part('Sisi', 'we'), _part('tutaenda', 'we will go'), _part('kesho', 'tomorrow')]),
    ],
  ),
  'Yeye ni mrefu': _rich(
    'Kwa Kiingereza: "He/She is tall." "Tall" ndilo neno la Kiingereza la "mrefu".',
    'In English: "He/She is tall." "Tall" is the English word for "mrefu".',
    'Sarufi ya Kiingereza: He/She + is + sifa (tall, short, nice…). Muundo huu ni msingi wa maelezo kwa Kiingereza.',
    'English grammar: He/She + is + adjective (tall, short, nice…). This pattern is basic for descriptions in English.',
    [
      _tip('Sema kwa Kiingereza: "He is tall" au "She is tall".', 'Say it in English: "He is tall" or "She is tall".'),
      _tip('Kinyume kwa Kiingereza: short.', 'Opposite in English: short.'),
      _tip('Kwa vitu: "The tree is tall."', 'For things: "The tree is tall."'),
    ],
    [
      _ex('Yeye ni mrefu kuliko mimi.', 'He/She is taller than me.', [_part('Yeye', 'he/she'), _part('ni mrefu', 'is tall'), _part('kuliko mimi', 'than me')]),
      _ex('Kijana yule ni mrefu sana.', 'That young man is very tall.', [_part('Kijana', 'young man'), _part('ni mrefu sana', 'is very tall')]),
      _ex('Mrefu — ni sifa nzuri.', 'Tall — is a fine trait.', [_part('Mrefu', 'tall'), _part('sifa nzuri', 'good trait')]),
      _ex('Je, yeye ni mrefu? — Ndiyo.', 'Is he tall? — Yes.', [_part('Je', 'question marker'), _part('Ndiyo', 'yes')]),
    ],
  ),
  'Yeye ni mfupi': _rich(
    'Kwa Kiingereza: "He/She is short." "Short" ndilo neno la Kiingereza la "mfupi".',
    'In English: "He/She is short." "Short" is the English word for "mfupi".',
    'Sarufi ya Kiingereza: He/She + is + short. "Short" pia inaweza kumaanisha muda mfupi kwa Kiingereza.',
    'English grammar: He/She + is + short. "Short" can also mean brief in time in English.',
    [
      _tip('Sema kwa Kiingereza: "He is short" au "She is short".', 'Say it in English: "He is short" or "She is short".'),
      _tip('Kwa vitu: "This sofa is short."', 'For things: "This sofa is short."'),
      _tip('Heshima muhimu — zungumzia sifa za mwili kwa upendo, hata kwa Kiingereza.', 'Respect matters — talk about body traits kindly, even in English.'),
    ],
    [
      _ex('Yeye ni mfupi lakini ana akili.', 'He/She is short but smart.', [_part('mfupi', 'short'), _part('ana akili', 'has intelligence')]),
      _ex('Mtoto yule ni mfupi bado.', 'That child is still short.', [_part('Mtoto', 'child'), _part('bado', 'still')]),
      _ex('Sofa hii ni mfupi.', 'This sofa is short.', [_part('Sofa', 'sofa'), _part('ni mfupi', 'is short')]),
      _ex('Mfupi si mbaya — ni umbo tu.', 'Short is not bad — just shape.', [_part('Mfupi', 'short'), _part('umbo', 'shape / form')]),
    ],
  ),
  'Yeye ni wangu': _rich(
    'Kwa Kiingereza: "He/She is mine." "Mine" ndilo neno la Kiingereza la "wangu".',
    'In English: "He/She is mine." "Mine" is the English word for "wangu".',
    'Sarufi ya Kiingereza: mine, yours, his/hers, ours, theirs — maneno haya hayabadiliki kulingana na kiumbi kama Kiswahili.',
    'English grammar: mine, yours, his/hers, ours, theirs — these words don\'t change with noun class the way Swahili does.',
    [
      _tip('Sema kwa Kiingereza: "mine".', 'Say it in English: "mine".'),
      _tip('Kwa vitu: "This is mine."', 'For things: "This is mine."'),
      _tip('Kumbuka: "my" (kabla ya nomino) ni tofauti na "mine" (peke yake): "my friend" dhidi ya "This is mine."', 'Remember: "my" (before a noun) is different from "mine" (alone): "my friend" vs "This is mine."'),
    ],
    [
      _ex('Rafiki yangu — yeye ni wangu wa dhati.', 'My friend — he is truly mine.', [_part('Rafiki', 'friend'), _part('wa dhati', 'truly / sincerely')]),
      _ex('Huyu mtoto ni wangu.', 'This child is mine.', [_part('mtoto', 'child'), _part('ni wangu', 'is mine')]),
      _ex('Si wako — ni wangu.', 'Not yours — mine.', [_part('Si wako', 'not yours'), _part('ni wangu', 'is mine')]),
      _ex('Ninampenda kwa sababu yeye ni wangu.', 'I love because he/she is mine.', [_part('Ninampenda', 'I love him/her')]),
    ],
  ),
  'Yeye ni daktari': _rich(
    'Kwa Kiingereza: "He/She is a doctor." "Doctor" ni karibu sawa na Kiswahili "daktari" — rahisi kukumbuka!',
    'In English: "He/She is a doctor." "Doctor" is almost the same as the Swahili "daktari" — easy to remember!',
    'Sarufi ya Kiingereza: He/She is a + kazi (a doctor, a teacher, a worker…). Kumbuka "a" kabla ya kazi kwa Kiingereza.',
    'English grammar: He/She is a + job (a doctor, a teacher, a worker…). Remember the "a" before the job in English.',
    [
      _tip('Sema kwa Kiingereza: "doctor".', 'Say it in English: "doctor".'),
      _tip('Swali: "Is he a doctor?" — "Yes."', 'Question: "Is he a doctor?" — "Yes."'),
      _tip('Mahali: "He is a doctor at the hospital."', 'Place: "He is a doctor at the hospital."'),
    ],
    [
      _ex('Yeye ni daktari mzuri sana.', 'He/She is a very good doctor.', [_part('daktari mzuri', 'good doctor'), _part('sana', 'very')]),
      _ex('Daktari wangu anaofisini hapa.', 'My doctor has an office here.', [_part('anaofisini', 'has an office')]),
      _ex('Nataka kuwa daktari siku moja.', 'I want to be a doctor someday.', [_part('kuwa', 'to become')]),
      _ex('Yeye ni daktari wa meno.', 'He/She is a dentist.', [_part('wa meno', 'of teeth / dental')]),
    ],
  ),
  'Yeye ni maarufu': _rich(
    'Kwa Kiingereza: "He/She is famous." "Famous" ndilo neno la Kiingereza la "maarufu".',
    'In English: "He/She is famous." "Famous" is the English word for "maarufu".',
    'Sarufi ya Kiingereza: "Famous" ni sifa (adjective). Unaweza: a famous person, a famous song.',
    'English grammar: "Famous" is an adjective. You can say: a famous person, a famous song.',
    [
      _tip('Sema kwa Kiingereza: "famous".', 'Say it in English: "famous".'),
      _tip('Ongeza "very": "He is very famous."', 'Add "very": "He is very famous."'),
      _tip('Tumia kumsifu mtu unayempenda, kwa Kiingereza.', 'Use it to praise someone you admire, in English.'),
    ],
    [
      _ex('Mwimbaji huyu ni maarufu duniani.', 'This singer is famous worldwide.', [_part('Mwimbaji', 'singer'), _part('duniani', 'in the world')]),
      _ex('Yeye ni maarufu mjini kwetu.', 'He/She is famous in our town.', [_part('mjini', 'in town'), _part('kwetu', 'at our place')]),
      _ex('Kwa nini ni maarufu? — Kwa kazi nzuri.', 'Why famous? — For good work.', [_part('Kwa nini', 'why')]),
      _ex('Nataka kuwa maarufu kwa mema.', 'I want to be famous for good things.', [_part('kwa mema', 'for good things')]),
    ],
  ),
  'Wana furaha': _rich(
    'Kwa Kiingereza: "They are happy." Kiingereza hutumia "happy" (sifa), si "furaha" (nomino) kama Kiswahili.',
    '"They are happy" in English. English uses "happy" (an adjective), not "furaha" (a noun) the way Swahili does.',
    'Sarufi ya Kiingereza: They/He/She/I + am/is/are + happy. Muundo huu ni tofauti na "wana furaha" wa Kiswahili.',
    'English grammar: They/He/She/I + am/is/are + happy. This differs from the Swahili "wana furaha" ("they have happiness") structure.',
    [
      _tip('Sema kwa Kiingereza: "happy".', 'Say it in English: "happy".'),
      _tip('Umoja kwa Kiingereza: "He is happy" / "She is happy".', 'Singular in English: "He is happy" / "She is happy".'),
      _tip('Wewe: "You are happy." Mimi: "I am happy."', 'You: "You are happy." Me: "I am happy."'),
    ],
    [
      _ex('Watoto wana furaha leo.', 'The children are happy today.', [_part('Watoto', 'children'), _part('wana furaha', 'are happy')]),
      _ex('Wana furaha kwa sababu ya likizo.', 'They are happy because of holiday.', [_part('likizo', 'holiday / vacation')]),
      _ex('Tunaona wana furaha.', 'We see they are happy.', [_part('Tunaona', 'we see')]),
      _ex('Furaha ni baraka.', 'Happiness is a blessing.', [_part('baraka', 'blessing')]),
    ],
  ),
  'Nina furaha': _rich(
    'Kwa Kiingereza: "I am happy." Ni jibu zuri kwa "How are you?"',
    '"I am happy" in English. A good answer to "How are you?"',
    'Sarufi ya Kiingereza: I + am + hisia (happy, sad, hungry, tired…).',
    'English grammar: I + am + feeling (happy, sad, hungry, tired…).',
    [
      _tip('Jibu kwa Kiingereza: "How are you?" — "I am happy!" (au "Fine!")', 'Answer in English: "How are you?" — "I am happy!" (or "Fine!")'),
      _tip('Ongeza "very": "I am very happy."', 'Add "very": "I am very happy."'),
      _tip('Kinyume kwa Kiingereza: "I am sad."', 'Opposite in English: "I am sad."'),
    ],
    [
      _ex('Nina furaha kukuona.', 'I am happy to see you.', [_part('kukuona', 'to see you')]),
      _ex('Leo nina furaha sana.', 'Today I am very happy.', [_part('sana', 'very')]),
      _ex('Nina furaha kwa familia yangu.', 'I am happy for my family.', [_part('familia', 'family')]),
      _ex('Furaha yangu ni kubwa.', 'My happiness is great.', [_part('kubwa', 'big / great')]),
    ],
  ),
  'Tuko hapa': _rich(
    'Kwa Kiingereza: "We are here." Hapa = here.',
    '"We are here" in English. "Hapa" = "here".',
    'Sarufi ya Kiingereza: We are here · You are here · He/She is here · You all are here — Kiingereza hakibadiliki kama "tuko/uko/yuko/wako" wa Kiswahili.',
    'English grammar: We are here · You are here · He/She is here · You all are here — English doesn\'t change the way Swahili\'s "tuko/uko/yuko/wako" does.',
    [
      _tip('Simu: "We are on the way."', 'On the phone: "We are on the way."'),
      _tip('Here vs there kwa Kiingereza: "here" (hapa) · "there" (huko/kule).', 'Here vs there in English: "here" (hapa) · "there" (huko/kule).'),
      _tip('Fupisha kwa Kiingereza: "We\'re here."', 'Shorten in English: "We\'re here."'),
    ],
    [
      _ex('Tuko hapa mlangoni.', 'We are here at the door.', [_part('mlangoni', 'at the door')]),
      _ex('Tuko hapa — usiondoke.', 'We are here — don\'t leave.', [_part('usiondoke', 'don\'t leave')]),
      _ex('Sasa tuko hapa shuleni.', 'Now we are here at school.', [_part('shuleni', 'at school')]),
      _ex('Tuko hapa kusubiri wewe.', 'We are here waiting for you.', [_part('kusubiri', 'to wait')]),
    ],
  ),
};
