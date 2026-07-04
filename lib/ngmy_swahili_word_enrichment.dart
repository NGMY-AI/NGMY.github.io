import 'ngmy_swahili_curriculum.dart';

const kSwahiliMinStudySeconds = 20;

/// One example sentence with per-word notes (notes in Kiswahili).
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
    required this.grammarSw,
    required this.tipsSw,
    required this.examples,
  });

  final SwahiliWord base;
  final String explanationSw;
  final String grammarSw;
  final List<String> tipsSw;
  final List<SwahiliExample> examples;
}

SwahiliRichWord enrichSwahiliWord(SwahiliWord w) {
  final key = w.swahili.trim();
  if (_richBySwahili.containsKey(key)) return _richBySwahili[key]!(w);
  return _autoEnrich(w);
}

SwahiliRichWord _autoEnrich(SwahiliWord w) {
  final parts = w.breakdown.isNotEmpty
      ? w.breakdown
      : w.swahili.split(' ').map((p) => '$p — sehemu ya sentensi hii').toList();

  final examples = <SwahiliExample>[
    if (w.example.isNotEmpty && !w.example.contains(' = '))
      _ex(w.example, w.english, parts),
    if (w.example.contains(' = '))
      _ex(
        w.example.split(' = ').first.trim(),
        w.example.split(' = ').last.trim(),
        parts,
      ),
    _ex('Tumia: "${w.swahili}" katika sentensi yako.', w.english, parts),
    _ex('Rudia kwa sauti: ${w.pronunciation}.', 'Rudia kwa sauti.', parts),
    _ex('Andika kwenye daftari: ${w.swahili} — ${w.english}.', 'Andika kwenye daftari.', parts),
    _ex('Uliza rafiki: "${w.swahili}" inamaanisha nini?', 'Uliza rafiki.', parts),
  ];

  return SwahiliRichWord(
    base: w,
    explanationSw:
        'Hili ni neno au sentensi ya Kiswahili: "${w.swahili}". Kwa Kiingereza linamaanisha "${w.english}". '
        'Linatamkwa hivi: ${w.pronunciation}. '
        'Soma kwa makini, rudia kwa sauti, kisha jaribu kutumia katika sentensi yako mwenyewe. '
        'Hii ndiyo njia rahisi ya kukariri neno na kulikumbuka milele.',
    grammarSw: w.grammar.isNotEmpty
        ? 'Sarufi: Hii ni muundo wa kimsingi — ${w.grammar}. Kumbuka muundo huu ukiunda sentensi mpya.'
        : 'Sarufi: Angalia kila sehemu ya "${w.swahili}". Maneno mengi ya Kiswahili yana viambishi mwanzoni au mwishoni — '
            'soma "Vidokezo" na "Mifano" hapa chini ili uelewe kila sehemu.',
    tipsSw: [
      'Soma kwa sauti mara tatu: ${w.pronunciation}.',
      'Funga macho, sema "${w.swahili}" bila kuangalia — jaribu kukumbuka.',
      'Andika neno hilo mara tano kwenye daftari lako.',
      'Tafuta mahali pa kutumia neno hili leo — hata na familia au rafiki.',
      'Kumbuka maana ya Kiingereza "${w.english}" — lakini fikiria kwanza kwa Kiswahili.',
    ],
    examples: examples,
  );
}

SwahiliRichWord Function(SwahiliWord) _rich(
  String explanationSw,
  String grammarSw,
  List<String> tipsSw,
  List<SwahiliExample> examples,
) =>
    (w) => SwahiliRichWord(
          base: w,
          explanationSw: explanationSw,
          grammarSw: grammarSw,
          tipsSw: tipsSw,
          examples: examples,
        );

final Map<String, SwahiliRichWord Function(SwahiliWord)> _richBySwahili = {
  'Mimi': _rich(
    'Mimi ni neno linaloonyesha WEWE mwenyewe unayezungumza. Unalitumia mwanzo wa sentensi unaposema kuhusu mambo yako: mimi niko hapa, mimi nina njaa, mimi ninafurahi. Ni neno la kwanza unalohitaji kujifunza.',
    'Sarufi: "Mimi" ni kiambishi nomino — mtu anayezungumza (mtu wa kwanza umoja). Baada yake weka "ni" au kitenzi: Mimi ni…, Mimi nina…, Mimi niko…',
    [
      'Usiogope kurudia "Mimi" — Watanzania na Wakenya wanalisikia kila siku.',
      'Unaweza kuacha "Mimi" na kusema tu "Niko hapa" — maana iko wazi, lakini "Mimi" huangazia wewe.',
      'Linganisha: Mimi (mimi) · Wewe (wewe) · Yeye (yeye mwingine).',
    ],
    [
      _ex('Mimi ni mwanafunzi.', 'I am a student.', ['Mimi = mimi mwenyewe', 'ni = ni / huwa', 'mwanafunzi = mtu anayesoma']),
      _ex('Mimi nina rafiki mzuri.', 'I have a good friend.', ['Mimi = mimi', 'nina = nina / ninamiliki', 'rafiki = companion', 'mzuri = bora']),
      _ex('Mimi niko nyumbani leo.', 'I am at home today.', ['Mimi = mimi', 'niko = niko mahali', 'nyumbani = kwenye nyumba', 'leo = siku ya leo']),
      _ex('Mimi ninakupenda.', 'I love you.', ['Mimi = mimi', 'ninakupenda = nina upendo kwako']),
    ],
  ),
  'Wewe / Ninyi': _rich(
    '"Wewe" unamwambia mtu mmoja. "Ninyi" unawaambia watu wengi pamoja. Hivi ni vya pili — unazungumzia mtu unayemzungumza, si mimi wala yeye.',
    'Sarufi: Wewe (umoja) · Ninyi (wingi). Baada yake: Wewe ni…, Ninyi mn…, Ninyi mko…',
    [
      'Heshima: kwa wazee unaweza kutumia "Nyinyi" badala ya "Ninyi" — linaheshima zaidi.',
      'Katika swali: "Wewe ni nani?" = Who are you?',
      'Usichanganye Wewe (mtu mmoja) na Sisi (sisi sote pamoja).',
    ],
    [
      _ex('Wewe ni rafiki yangu.', 'You are my friend.', ['Wewe = wewe unayezungumza naye', 'ni = ni', 'rafiki yangu = rafiki wangu']),
      _ex('Ninyi mnafanya kazi nzuri.', 'You all are doing good work.', ['Ninyi = ninyi nyote', 'mnafanya = mnafanya (wingi)', 'kazi nzuri = kazi bora']),
      _ex('Wewe unaweza kufanya hivi.', 'You can do this.', ['Wewe = wewe', 'unaweza = una uwezo', 'kufanya = kutenda']),
      _ex('Ninyi mko wapi?', 'Where are you all?', ['Ninyi = nyinyi', 'mko = mko wapi', 'wapi = mahali gani']),
    ],
  ),
  'Yeye': _rich(
    '"Yeye" unazungumzia mtu mwingine — mwanaume AU mwanamke, Kiswahili hutumia neno moja! Usijali jinsia hadi muktadha au jina liwe wazi.',
    'Sarufi: Yeye + ni / ana / yuko / ame… — mtu wa tatu umoja. Linganisha: Mimi · Wewe · Yeye.',
    [
      'Ukisikia "yeye" bila jina, angalia aliyekuwa anazungumziwa hapo awali.',
      'Kwa msichana: bado unaweza kusema "Yeye ni mrembo." Kwa mvulana: "Yeye ni mtanashati."',
      'Wengi: wao (they) — utajifunza baadaye.',
    ],
    [
      _ex('Yeye anakuja sasa.', 'He/She is coming now.', ['Yeye = mtu yule', 'anakuja = anakuja', 'sasa = hivi sasa']),
      _ex('Yeye ni mwalimu wangu.', 'He/She is my teacher.', ['Yeye = yeye', 'ni = ni', 'mwalimu = mwalimu', 'wangu = wangu']),
      _ex('Yeye ana gari jipya.', 'He/She has a new car.', ['Yeye = yeye', 'ana = ana', 'gari jipya = gari jipya']),
      _ex('Ninamjua yeye vizuri.', 'I know him/her well.', ['Ninamjua = ninamfahamu', 'yeye = yule mtu', 'vizuri = kwa ukamilifu']),
    ],
  ),
  'Sisi': _rich(
    '"Sisi" ni sisi sote — wewe na mimi pamoja, au kikundi unachokiwa nacho. Unatumia unapozungumza kuhusu kikundi chako.',
    'Sarufi: Sisi + tun… / tuko… / tuna… — watu wa kwanza wingi.',
    [
      'Sisi vs Mimi: Mimi = mimi peke yangu. Sisi = mimi na wengine.',
      'Kwa heshima kubwa: "Sisi" inaweza kujumuisha wasikilizaji — "Sisi sote tunapaswa…"',
      'Rudia: Sisi tunakula, Sisi tunaenda, Sisi tuko hapa.',
    ],
    [
      _ex('Sisi tunakula chakula.', 'We are eating food.', ['Sisi = sisi sote', 'tunakula = tunakula', 'chakula = chakula']),
      _ex('Sisi ni familia moja.', 'We are one family.', ['Sisi = sisi', 'ni = ni', 'familia moja = familia moja']),
      _ex('Sisi tuna furaha leo.', 'We are happy today.', ['Sisi = sisi', 'tuna furaha = tuna furaha', 'leo = leo']),
      _ex('Sisi tutaenda kesho.', 'We will go tomorrow.', ['Sisi = sisi', 'tutaenda = tutaenda', 'kesho = kesho']),
    ],
  ),
  'Yeye ni mrefu': _rich(
    'Sentensi kamili: unasema mtu fulani ana urefu. "Mrefu" = tall/long. "Ni" inaunganisha mtu na sifa.',
    'Sarufi: Yeye + ni + sifa (mrefu, mfupi, mzuri…). Muundo huu ni msingi wa maelezo.',
    [
      'Unaweza pia kusema: "Mrefu" peke yake ukionyesha kwa kidole.',
      'Kinyume: Yeye ni mfupi.',
      'Kwa vitu: Mti ni mrefu (The tree is tall).',
    ],
    [
      _ex('Yeye ni mrefu kuliko mimi.', 'He/She is taller than me.', ['Yeye = yule', 'ni mrefu = ana urefu', 'kuliko mimi = zaidi ya mimi']),
      _ex('Kijana yule ni mrefu sana.', 'That young man is very tall.', ['Kijana = kijana', 'ni mrefu sana = mrefu mno']),
      _ex('Mrefu — ni sifa nzuri.', 'Tall — is a fine trait.', ['Mrefu = urefu', 'sifa = tabia/umbo']),
      _ex('Je, yeye ni mrefu? — Ndiyo.', 'Is he tall? — Yes.', ['Je = swali', 'Ndiyo = ndiyo']),
    ],
  ),
  'Yeye ni mfupi': _rich(
    'Unasema mtu ana urefu mdogo — mfupi. Kinyume cha mrefu. Tumia kwa heshima; usimtukane mtu.',
    'Sarufi: Yeye ni + sifa. Mfupi inaweza pia maana "fupi" kwa muda: mkutano mfupi.',
    [
      'Heshima muhimu — sifa za mwili zungumziwe kwa upendo.',
      'Pia: Fupi = short in height or length.',
      'Linganisha mrefu / mfupi kwa vitu: barabara fupi.',
    ],
    [
      _ex('Yeye ni mfupi lakini ana akili.', 'He/She is short but smart.', ['mfupi = fupi', 'ana akili = ana busara']),
      _ex('Mtoto yule ni mfupi bado.', 'That child is still short.', ['Mtoto = mtoto', 'bado = bado']),
      _ex('Sofa hii ni mfupi.', 'This sofa is short.', ['Sofa = sofa', 'ni mfupi = haijarefu']),
      _ex('Mfupi si mbaya — ni umbo tu.', 'Short is not bad — just shape.', ['Mfupi = urefu mdogo']),
    ],
  ),
  'Yeye ni wangu': _rich(
    'Unasema mtu au kitu ni chako — ni mali yako au uhusiano wako. "Wangu" = mine (yangu kwa vitu).',
    'Sarufi: Kiambishi -angu (wangu, yangu, langu) kinabadilika kulingana na kiumbi. Wangu kwa mtu.',
    [
      'Kwa mapenzi: "Wewe ni wangu" — ya kimapenzi, tumia kwa uangalifu.',
      'Kwa vitu: Hii ni yangu (this is mine).',
      'Kumbuka: -angu, -ako, -ake, -etu, -enu, -ao.',
    ],
    [
      _ex('Rafiki yangu — yeye ni wangu wa dhati.', 'My friend — he is truly mine.', ['Rafiki = rafiki', 'wa dhati = wa kweli']),
      _ex('Huyu mtoto ni wangu.', 'This child is mine.', ['mtoto = mtoto', 'ni wangu = ni mali yangu']),
      _ex('Si wako — ni wangu.', 'Not yours — mine.', ['Si wako = si yako', 'ni wangu = ni yangu']),
      _ex('Ninampenda kwa sababu yeye ni wangu.', 'I love because he/she is mine.', ['Ninampenda = nina upendo']),
    ],
  ),
  'Yeye ni daktari': _rich(
    'Unasema mtu ana taaluma ya udaktari — anahudumia wagonjwa. "Daktari" ni neno la kawaida Tanzania na Kenya.',
    'Sarufi: Yeye ni + kazi/taaluma (daktari, mwalimu, mfanyakazi…).',
    [
      'Heshima: Daktari — tumia "Daktari" mwanzo wa jina kwa heshima.',
      'Swali: Yeye ni daktari? — Ndiyo, yeye ni daktari.',
      'Mahali: Yeye ni daktari hospitalini.',
    ],
    [
      _ex('Yeye ni daktari mzuri sana.', 'He/She is a very good doctor.', ['daktari mzuri = daktari bora']),
      _ex('Daktari wangu anaofisini hapa.', 'My doctor has an office here.', ['anaofisini = ana ofisi']),
      _ex('Nataka kuwa daktari siku moja.', 'I want to be a doctor someday.', ['kuwa = kuwa']),
      _ex('Yeye ni daktari wa meno.', 'He/She is a dentist.', ['wa meno = wa meno']),
    ],
  ),
  'Yeye ni maarufu': _rich(
    'Maarufu = watu wengi wanamfahamu — famous. Kwa wasanii, wachezaji, viongozi.',
    'Sarufi: Maarufu ni sifa. Unaweza: mtu maarufu, nyimbo maarufu.',
    [
      'Sana = sana — Yeye ni maarufu sana.',
      'Kinyume: si maarufu = hajulikani sana.',
      'Tumia kwa kumtukuza mtu unayempenda.',
    ],
    [
      _ex('Mwimbaji huyu ni maarufu duniani.', 'This singer is famous worldwide.', ['Mwimbaji = mwimbaji', 'duniani = ulimwenguni']),
      _ex('Yeye ni maarufu mjini kwetu.', 'He/She is famous in our town.', ['mjini = mjini', 'kwetu = kwetu']),
      _ex('Kwa nini ni maarufu? — Kwa kazi nzuri.', 'Why famous? — For good work.', ['Kwa nini = why']),
      _ex('Nataka kuwa maarufu kwa mema.', 'I want to be famous for good.', ['kwa mema = kwa mambo mazuri']),
    ],
  ),
  'Wana furaha': _rich(
    'Wana = wao wana. Furaha = happiness. Kawaida Kiswahili kinasema "wana furaha" — wana hali ya furaha.',
    'Sarufi: Wao/Wana + furaha/huzuni/njaa… — hisia kwa wingi.',
    [
      'Umoja: Ana furaha (yeye ana furaha).',
      'Wewe: Una furaha. Mimi: Nina furaha.',
      'Furaha — tabasamu na usemi mzuri.',
    ],
    [
      _ex('Watoto wana furaha leo.', 'The children are happy today.', ['Watoto = watoto', 'wana furaha = wana furaha']),
      _ex('Wana furaha kwa sababu ya likizo.', 'They are happy because of holiday.', ['likizo = likizo']),
      _ex('Tunaona wana furaha.', 'We see they are happy.', ['Tunaona = tunaona']),
      _ex('Furaha ni baraka.', 'Happiness is a blessing.', ['baraka = baraka']),
    ],
  ),
  'Nina furaha': _rich(
    'Unasema una hali njema — moyo wako una furaha. Ni jibu zuri pia kwa "Habari yako?"',
    'Sarufi: Nina + hisia/hali (furaha, huzuni, njaa, usingizi…).',
    [
      'Jibu: Habari? — Nina furaha! (au Nzuri!)',
      'Ongeza "sana": Nina furaha sana = very happy.',
      'Kinyume: Nina huzuni (I am sad).',
    ],
    [
      _ex('Nina furaha kukuona.', 'I am happy to see you.', ['kukuona = kukuona']),
      _ex('Leo nina furaha sana.', 'Today I am very happy.', ['sana = mno']),
      _ex('Nina furaha kwa familia yangu.', 'I am happy for my family.', ['familia = familia']),
      _ex('Furaha yangu ni kubwa.', 'My happiness is great.', ['kubwa = kubwa']),
    ],
  ),
  'Tuko hapa': _rich(
    'Tuko = sisi tuko (mahali). Hapa = here — mahali unaposimama sasa. Muhimu kwa simu: "Tuko hapa, subiri!"',
    'Sarufi: Tuko (sisi + mahali) · Uko (wewe) · Yuko (yeye) · Wako (nyinyi).',
    [
      'Simu: Tuko njiani = We are on the way.',
      'Hapa vs huko: hapa (karibu) · huko (mbali kidogo) · kule (mbali).',
      'Sisi tuko — fupisha "Tuko hapa."',
    ],
    [
      _ex('Tuko hapa mlangoni.', 'We are here at the door.', ['mlangoni = mlangoni']),
      _ex('Tuko hapa — usiondoke.', 'We are here — don\'t leave.', ['usiondoke = usiondoke']),
      _ex('Sasa tuko hapa shuleni.', 'Now we are here at school.', ['shuleni = shuleni']),
      _ex('Tuko hapa kusubiri wewe.', 'We are here waiting for you.', ['kusubiri = kusubiri']),
    ],
  ),
};
