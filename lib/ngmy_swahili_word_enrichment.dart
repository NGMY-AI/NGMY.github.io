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
    _ex('Tumia: "${w.swahili}" katika sentensi yako.', 'Use: "${w.swahili}" in your own sentence.', parts),
    _ex('Rudia kwa sauti: ${w.pronunciation}.', 'Repeat aloud: ${w.pronunciation}.', parts),
    _ex('Andika kwenye daftari: ${w.swahili} — ${w.english}.', 'Write in your notebook: ${w.swahili} — ${w.english}.', parts),
    _ex('Uliza rafiki: "${w.swahili}" inamaanisha nini?', 'Ask a friend: what does "${w.swahili}" mean in English?', parts),
  ];

  return SwahiliRichWord(
    base: w,
    explanationSw:
        'Hili ni neno au sentensi ya Kiswahili: "${w.swahili}". Kwa Kiingereza linamaanisha "${w.english}". '
        'Linatamkwa hivi: ${w.pronunciation}. '
        'Soma kwa makini, rudia kwa sauti, kisha jaribu kutumia katika sentensi yako mwenyewe.',
    explanationEn:
        'This is a Swahili word or phrase: "${w.swahili}". In English it means "${w.english}". '
        'Pronounce it: ${w.pronunciation}. '
        'Read carefully, repeat aloud, then try using it in your own sentence.',
    grammarSw: w.grammar.isNotEmpty
        ? 'Sarufi: Hii ni muundo wa kimsingi — ${w.grammar}. Kumbuka muundo huu ukiunda sentensi mpya.'
        : 'Sarufi: Angalia kila sehemu ya "${w.swahili}". Maneno mengi ya Kiswahili yana viambishi mwanzoni au mwishoni.',
    grammarEn: w.grammar.isNotEmpty
        ? 'Grammar: This is the basic pattern — ${w.grammar}. Remember this pattern when you build new sentences.'
        : 'Grammar: Look at each part of "${w.swahili}". Many Swahili words have prefixes or suffixes that change meaning.',
    tips: [
      _tip('Soma kwa sauti mara tatu: ${w.pronunciation}.', 'Read aloud three times: ${w.pronunciation}.'),
      _tip('Funga macho, sema "${w.swahili}" bila kuangalia.', 'Close your eyes and say "${w.swahili}" without looking.'),
      _tip('Andika neno hilo mara tano kwenye daftari lako.', 'Write the word five times in your notebook.'),
      _tip('Tafuta mahali pa kutumia neno hili leo.', 'Find a place to use this word today.'),
      _tip('Kumbuka maana ya Kiingereza: "${w.english}".', 'Remember the English meaning: "${w.english}".'),
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
    'Mimi ni neno linaloonyesha WEWE mwenyewe unayezungumza. Unalitumia mwanzo wa sentensi unaposema kuhusu mambo yako: mimi niko hapa, mimi nina njaa, mimi ninafurahi.',
    '"Mimi" means I or me — the person speaking. Use it at the start of a sentence about yourself: I am here, I am hungry, I am happy.',
    'Sarufi: "Mimi" ni kiambishi nomino — mtu anayezungumza (mtu wa kwanza umoja). Baada yake weka "ni" au kitenzi: Mimi ni…, Mimi nina…, Mimi niko…',
    'Grammar: "Mimi" is a subject pronoun — first person singular (I). After it use "ni" or a verb: I am…, I have…, I am at…',
    [
      _tip('Usiogope kurudia "Mimi" — Watanzania na Wakenya wanalisikia kila siku.', 'Do not be afraid to repeat "Mimi" — Tanzanians and Kenyans hear it every day.'),
      _tip('Unaweza kuacha "Mimi" na kusema tu "Niko hapa" — maana iko wazi.', 'You can drop "Mimi" and just say "Niko hapa" — the meaning is still clear.'),
      _tip('Linganisha: Mimi (mimi) · Wewe (wewe) · Yeye (yeye mwingine).', 'Compare: Mimi (I) · Wewe (you) · Yeye (he/she).'),
    ],
    [
      _ex('Mimi ni mwanafunzi.', 'I am a student.', [_part('Mimi', 'I / me'), _part('ni', 'am / is'), _part('mwanafunzi', 'student')]),
      _ex('Mimi nina rafiki mzuri.', 'I have a good friend.', [_part('Mimi', 'I'), _part('nina', 'I have'), _part('rafiki', 'friend'), _part('mzuri', 'good')]),
      _ex('Mimi niko nyumbani leo.', 'I am at home today.', [_part('Mimi', 'I'), _part('niko', 'I am (at a place)'), _part('nyumbani', 'at home'), _part('leo', 'today')]),
      _ex('Mimi ninakupenda.', 'I love you.', [_part('Mimi', 'I'), _part('ninakupenda', 'I love you')]),
    ],
  ),
  'Wewe / Ninyi': _rich(
    '"Wewe" unamwambia mtu mmoja. "Ninyi" unawaambia watu wengi pamoja. Hivi ni vya pili — unazungumzia mtu unayemzungumza.',
    '"Wewe" means you (one person). "Ninyi" means you all (many people). These are second person — you talk to the listener(s).',
    'Sarufi: Wewe (umoja) · Ninyi (wingi). Baada yake: Wewe ni…, Ninyi mn…, Ninyi mko…',
    'Grammar: Wewe (singular) · Ninyi (plural). After them: You are…, You all do…, You all are at…',
    [
      _tip('Heshima: kwa wazee unaweza kutumia "Nyinyi" badala ya "Ninyi".', 'Respect: with elders you can say "Nyinyi" instead of "Ninyi".'),
      _tip('Katika swali: "Wewe ni nani?" = Who are you?', 'In a question: "Wewe ni nani?" = Who are you?'),
      _tip('Usichanganye Wewe (mtu mmoja) na Sisi (sisi sote pamoja).', 'Do not mix up Wewe (one person) and Sisi (we / us together).'),
    ],
    [
      _ex('Wewe ni rafiki yangu.', 'You are my friend.', [_part('Wewe', 'you'), _part('ni', 'are'), _part('rafiki yangu', 'my friend')]),
      _ex('Ninyi mnafanya kazi nzuri.', 'You all are doing good work.', [_part('Ninyi', 'you all'), _part('mnafanya', 'you all do'), _part('kazi nzuri', 'good work')]),
      _ex('Wewe unaweza kufanya hivi.', 'You can do this.', [_part('Wewe', 'you'), _part('unaweza', 'you can'), _part('kufanya', 'to do')]),
      _ex('Ninyi mko wapi?', 'Where are you all?', [_part('Ninyi', 'you all'), _part('mko', 'you all are'), _part('wapi', 'where')]),
    ],
  ),
  'Yeye': _rich(
    '"Yeye" unazungumzia mtu mwingine — mwanaume AU mwanamke, Kiswahili hutumia neno moja!',
    '"Yeye" means he or she — one word for both in Swahili. You talk about another person.',
    'Sarufi: Yeye + ni / ana / yuko / ame… — mtu wa tatu umoja.',
    'Grammar: Yeye + is / has / is at / has done… — third person singular.',
    [
      _tip('Ukisikia "yeye" bila jina, angalia aliyekuwa anazungumziwa hapo awali.', 'If you hear "yeye" without a name, look at who was being discussed before.'),
      _tip('Kwa msichana: "Yeye ni mrembo." Kwa mvulana: "Yeye ni mtanashati."', 'For a girl: "She is beautiful." For a boy: "He is handsome."'),
      _tip('Wengi: wao (they) — utajifunza baadaye.', 'Plural: wao (they) — you will learn that later.'),
    ],
    [
      _ex('Yeye anakuja sasa.', 'He/She is coming now.', [_part('Yeye', 'he/she'), _part('anakuja', 'is coming'), _part('sasa', 'now')]),
      _ex('Yeye ni mwalimu wangu.', 'He/She is my teacher.', [_part('Yeye', 'he/she'), _part('ni', 'is'), _part('mwalimu wangu', 'my teacher')]),
      _ex('Yeye ana gari jipya.', 'He/She has a new car.', [_part('Yeye', 'he/she'), _part('ana', 'has'), _part('gari jipya', 'new car')]),
      _ex('Ninamjua yeye vizuri.', 'I know him/her well.', [_part('Ninamjua', 'I know'), _part('yeye', 'him/her'), _part('vizuri', 'well')]),
    ],
  ),
  'Sisi': _rich(
    '"Sisi" ni sisi sote — wewe na mimi pamoja, au kikundi unachokiwa nacho.',
    '"Sisi" means we or us — you and me together, or a group you belong to.',
    'Sarufi: Sisi + tun… / tuko… / tuna… — watu wa kwanza wingi.',
    'Grammar: Sisi + we do… / we are at… / we have… — first person plural.',
    [
      _tip('Sisi vs Mimi: Mimi = mimi peke yangu. Sisi = mimi na wengine.', 'Sisi vs Mimi: Mimi = me alone. Sisi = me and others.'),
      _tip('Kwa heshima: "Sisi" inaweza kujumuisha wasikilizaji.', 'For respect: "Sisi" can include the listeners — "We all should…"'),
      _tip('Rudia: Sisi tunakula, Sisi tunaenda, Sisi tuko hapa.', 'Repeat: We are eating, We are going, We are here.'),
    ],
    [
      _ex('Sisi tunakula chakula.', 'We are eating food.', [_part('Sisi', 'we'), _part('tunakula', 'we eat / are eating'), _part('chakula', 'food')]),
      _ex('Sisi ni familia moja.', 'We are one family.', [_part('Sisi', 'we'), _part('ni', 'are'), _part('familia moja', 'one family')]),
      _ex('Sisi tuna furaha leo.', 'We are happy today.', [_part('Sisi', 'we'), _part('tuna furaha', 'we have happiness'), _part('leo', 'today')]),
      _ex('Sisi tutaenda kesho.', 'We will go tomorrow.', [_part('Sisi', 'we'), _part('tutaenda', 'we will go'), _part('kesho', 'tomorrow')]),
    ],
  ),
  'Yeye ni mrefu': _rich(
    'Sentensi kamili: unasema mtu fulani ana urefu. "Mrefu" = tall. "Ni" inaunganisha mtu na sifa.',
    'Full sentence: you say someone is tall. "Mrefu" = tall. "Ni" links the person to the trait.',
    'Sarufi: Yeye + ni + sifa (mrefu, mfupi, mzuri…). Muundo huu ni msingi wa maelezo.',
    'Grammar: Yeye + is + adjective (tall, short, good…). This pattern is basic for descriptions.',
    [
      _tip('Unaweza pia kusema: "Mrefu" peke yake ukionyesha kwa kidole.', 'You can also say just "Mrefu" while pointing with your finger.'),
      _tip('Kinyume: Yeye ni mfupi. = He/She is short.', 'Opposite: Yeye ni mfupi. = He/She is short.'),
      _tip('Kwa vitu: Mti ni mrefu (The tree is tall).', 'For things: Mti ni mrefu (The tree is tall).'),
    ],
    [
      _ex('Yeye ni mrefu kuliko mimi.', 'He/She is taller than me.', [_part('Yeye', 'he/she'), _part('ni mrefu', 'is tall'), _part('kuliko mimi', 'than me')]),
      _ex('Kijana yule ni mrefu sana.', 'That young man is very tall.', [_part('Kijana', 'young man'), _part('ni mrefu sana', 'is very tall')]),
      _ex('Mrefu — ni sifa nzuri.', 'Tall — is a fine trait.', [_part('Mrefu', 'tall'), _part('sifa nzuri', 'good trait')]),
      _ex('Je, yeye ni mrefu? — Ndiyo.', 'Is he tall? — Yes.', [_part('Je', 'question marker'), _part('Ndiyo', 'yes')]),
    ],
  ),
  'Yeye ni mfupi': _rich(
    'Unasema mtu ana urefu mdogo — mfupi. Kinyume cha mrefu.',
    'You say someone has little height — short. Opposite of tall.',
    'Sarufi: Yeye ni + sifa. Mfupi inaweza pia maana "fupi" kwa muda.',
    'Grammar: Yeye is + trait. Mfupi can also mean short in time or length.',
    [
      _tip('Heshima muhimu — sifa za mwili zungumziwe kwa upendo.', 'Respect matters — talk about body traits kindly.'),
      _tip('Pia: Fupi = short in height or length.', 'Also: Fupi = short in height or length.'),
      _tip('Linganisha mrefu / mfupi kwa vitu: barabara fupi.', 'Compare tall/short for things: a short road.'),
    ],
    [
      _ex('Yeye ni mfupi lakini ana akili.', 'He/She is short but smart.', [_part('mfupi', 'short'), _part('ana akili', 'has intelligence')]),
      _ex('Mtoto yule ni mfupi bado.', 'That child is still short.', [_part('Mtoto', 'child'), _part('bado', 'still')]),
      _ex('Sofa hii ni mfupi.', 'This sofa is short.', [_part('Sofa', 'sofa'), _part('ni mfupi', 'is short')]),
      _ex('Mfupi si mbaya — ni umbo tu.', 'Short is not bad — just shape.', [_part('Mfupi', 'short'), _part('umbo', 'shape / form')]),
    ],
  ),
  'Yeye ni wangu': _rich(
    'Unasema mtu au kitu ni chako — ni mali yako au uhusiano wako. "Wangu" = mine.',
    'You say a person or thing is yours — your property or relationship. "Wangu" = mine (for people).',
    'Sarufi: Kiambishi -angu (wangu, yangu, langu) kinabadilika kulingana na kiumbi.',
    'Grammar: Possessive -angu (wangu, yangu, langu) changes with noun class.',
    [
      _tip('Kwa mapenzi: "Wewe ni wangu" — ya kimapenzi.', 'Romantic: "You are mine" — use carefully.'),
      _tip('Kwa vitu: Hii ni yangu (this is mine).', 'For things: Hii ni yangu (this is mine).'),
      _tip('Kumbuka: -angu, -ako, -ake, -etu, -enu, -ao.', 'Remember: my, yours, his/hers, ours, yours (plural), theirs.'),
    ],
    [
      _ex('Rafiki yangu — yeye ni wangu wa dhati.', 'My friend — he is truly mine.', [_part('Rafiki', 'friend'), _part('wa dhati', 'truly / sincerely')]),
      _ex('Huyu mtoto ni wangu.', 'This child is mine.', [_part('mtoto', 'child'), _part('ni wangu', 'is mine')]),
      _ex('Si wako — ni wangu.', 'Not yours — mine.', [_part('Si wako', 'not yours'), _part('ni wangu', 'is mine')]),
      _ex('Ninampenda kwa sababu yeye ni wangu.', 'I love because he/she is mine.', [_part('Ninampenda', 'I love him/her')]),
    ],
  ),
  'Yeye ni daktari': _rich(
    'Unasema mtu ana taaluma ya udaktari — anahudumia wagonjwa.',
    'You say someone has the profession of doctor — treats sick people.',
    'Sarufi: Yeye ni + kazi/taaluma (daktari, mwalimu, mfanyakazi…).',
    'Grammar: Yeye is + job/profession (doctor, teacher, worker…).',
    [
      _tip('Heshima: Daktari — tumia "Daktari" mwanzo wa jina.', 'Respect: use "Daktari" before the name.'),
      _tip('Swali: Yeye ni daktari? — Ndiyo.', 'Question: Is he/she a doctor? — Yes.'),
      _tip('Mahali: Yeye ni daktari hospitalini.', 'Place: He/She is a doctor at the hospital.'),
    ],
    [
      _ex('Yeye ni daktari mzuri sana.', 'He/She is a very good doctor.', [_part('daktari mzuri', 'good doctor'), _part('sana', 'very')]),
      _ex('Daktari wangu anaofisini hapa.', 'My doctor has an office here.', [_part('anaofisini', 'has an office')]),
      _ex('Nataka kuwa daktari siku moja.', 'I want to be a doctor someday.', [_part('kuwa', 'to become')]),
      _ex('Yeye ni daktari wa meno.', 'He/She is a dentist.', [_part('wa meno', 'of teeth / dental')]),
    ],
  ),
  'Yeye ni maarufu': _rich(
    'Maarufu = watu wengi wanamfahamu — famous.',
    'Maarufu = many people know him/her — famous.',
    'Sarufi: Maarufu ni sifa. Unaweza: mtu maarufu, nyimbo maarufu.',
    'Grammar: Maarufu is an adjective. Famous person, famous song.',
    [
      _tip('Sana = very — Yeye ni maarufu sana.', 'Sana = very — He/She is very famous.'),
      _tip('Kinyume: si maarufu = not well known.', 'Opposite: si maarufu = not well known.'),
      _tip('Tumia kwa kumtukuza mtu unayempenda.', 'Use it to praise someone you admire.'),
    ],
    [
      _ex('Mwimbaji huyu ni maarufu duniani.', 'This singer is famous worldwide.', [_part('Mwimbaji', 'singer'), _part('duniani', 'in the world')]),
      _ex('Yeye ni maarufu mjini kwetu.', 'He/She is famous in our town.', [_part('mjini', 'in town'), _part('kwetu', 'at our place')]),
      _ex('Kwa nini ni maarufu? — Kwa kazi nzuri.', 'Why famous? — For good work.', [_part('Kwa nini', 'why')]),
      _ex('Nataka kuwa maarufu kwa mema.', 'I want to be famous for good things.', [_part('kwa mema', 'for good things')]),
    ],
  ),
  'Wana furaha': _rich(
    'Wana = wao wana. Furaha = happiness. Kawaida Kiswahili kinasema "wana furaha" — wana hali ya furaha.',
    'Wana = they have. Furaha = happiness. Swahili often says "they have happiness" for they are happy.',
    'Sarufi: Wao/Wana + furaha/huzuni/njaa… — hisia kwa wingi.',
    'Grammar: They + happiness/sadness/hunger… — feelings in plural.',
    [
      _tip('Umoja: Ana furaha (yeye ana furaha).', 'Singular: Ana furaha (he/she is happy).'),
      _tip('Wewe: Una furaha. Mimi: Nina furaha.', 'You: Una furaha. I: Nina furaha.'),
      _tip('Furaha — tabasamu na usemi mzuri.', 'Happiness — smile and kind words.'),
    ],
    [
      _ex('Watoto wana furaha leo.', 'The children are happy today.', [_part('Watoto', 'children'), _part('wana furaha', 'are happy')]),
      _ex('Wana furaha kwa sababu ya likizo.', 'They are happy because of holiday.', [_part('likizo', 'holiday / vacation')]),
      _ex('Tunaona wana furaha.', 'We see they are happy.', [_part('Tunaona', 'we see')]),
      _ex('Furaha ni baraka.', 'Happiness is a blessing.', [_part('baraka', 'blessing')]),
    ],
  ),
  'Nina furaha': _rich(
    'Unasema una hali njema — moyo wako una furaha. Ni jibu zuri pia kwa "Habari yako?"',
    'You say you feel good — your heart has happiness. Good answer to "How are you?"',
    'Sarufi: Nina + hisia/hali (furaha, huzuni, njaa, usingizi…).',
    'Grammar: I have + feeling/state (happiness, sadness, hunger, sleepiness…).',
    [
      _tip('Jibu: Habari? — Nina furaha! (au Nzuri!)', 'Answer: How are you? — I am happy! (or Fine!)'),
      _tip('Ongeza "sana": Nina furaha sana = very happy.', 'Add "sana": Nina furaha sana = very happy.'),
      _tip('Kinyume: Nina huzuni (I am sad).', 'Opposite: Nina huzuni (I am sad).'),
    ],
    [
      _ex('Nina furaha kukuona.', 'I am happy to see you.', [_part('kukuona', 'to see you')]),
      _ex('Leo nina furaha sana.', 'Today I am very happy.', [_part('sana', 'very')]),
      _ex('Nina furaha kwa familia yangu.', 'I am happy for my family.', [_part('familia', 'family')]),
      _ex('Furaha yangu ni kubwa.', 'My happiness is great.', [_part('kubwa', 'big / great')]),
    ],
  ),
  'Tuko hapa': _rich(
    'Tuko = sisi tuko (mahali). Hapa = here — mahali unaposimama sasa.',
    'Tuko = we are (at a place). Hapa = here — where you are standing now.',
    'Sarufi: Tuko (sisi + mahali) · Uko (wewe) · Yuko (yeye) · Wako (nyinyi).',
    'Grammar: Tuko (we are at) · Uko (you are at) · Yuko (he/she is at) · Wako (you all are at).',
    [
      _tip('Simu: Tuko njiani = We are on the way.', 'On the phone: Tuko njiani = We are on the way.'),
      _tip('Hapa vs huko: hapa (here) · huko (there nearby) · kule (far).', 'Hapa vs huko: here · there nearby · far away.'),
      _tip('Sisi tuko — fupisha "Tuko hapa."', 'We are here — shorten to "Tuko hapa."'),
    ],
    [
      _ex('Tuko hapa mlangoni.', 'We are here at the door.', [_part('mlangoni', 'at the door')]),
      _ex('Tuko hapa — usiondoke.', 'We are here — don\'t leave.', [_part('usiondoke', 'don\'t leave')]),
      _ex('Sasa tuko hapa shuleni.', 'Now we are here at school.', [_part('shuleni', 'at school')]),
      _ex('Tuko hapa kusubiri wewe.', 'We are here waiting for you.', [_part('kusubiri', 'to wait')]),
    ],
  ),
};
