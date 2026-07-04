import 'package:flutter/material.dart';

/// One Swahili vocabulary or phrase entry with learner-friendly notes.
class SwahiliWord {
  const SwahiliWord({
    required this.swahili,
    required this.english,
    required this.pronunciation,
    required this.explanation,
    this.grammar = '',
    this.example = '',
    this.breakdown = const [],
  });

  final String swahili;
  final String english;
  final String pronunciation;
  final String explanation;
  final String grammar;
  final String example;
  final List<String> breakdown;
}

class SwahiliLessonDay {
  const SwahiliLessonDay({
    required this.title,
    required this.subtitle,
    required this.words,
  });

  final String title;
  final String subtitle;
  final List<SwahiliWord> words;
}

class SwahiliLevel {
  const SwahiliLevel({
    required this.id,
    required this.title,
    required this.subtitle,
    required this.icon,
    required this.color,
    required this.days,
  });

  final String id;
  final String title;
  final String subtitle;
  final IconData icon;
  final Color color;
  final List<SwahiliLessonDay> days;
}

class SwahiliTestQuestion {
  const SwahiliTestQuestion({
    required this.prompt,
    required this.options,
    required this.correctIndex,
  });

  final String prompt;
  final List<String> options;
  final int correctIndex;
}

SwahiliWord _w(
  String sw,
  String en,
  String pron,
  String explain, {
  String grammar = '',
  String example = '',
  List<String> breakdown = const [],
}) =>
    SwahiliWord(
      swahili: sw,
      english: en,
      pronunciation: pron,
      explanation: explain,
      grammar: grammar,
      example: example,
      breakdown: breakdown,
    );

/// Full Kiswahili school path — Basics uses your screenshot word lists.
const kSwahiliPassPercent = 70;
const kSwahiliTestQuestionCount = 10;

final List<SwahiliLevel> kSwahiliLevels = [
  SwahiliLevel(
    id: 'basics',
    title: 'Basics',
    subtitle: '5-day foundation — pronouns, having, feeling',
    icon: Icons.school_rounded,
    color: Color(0xFF059669),
    days: [
      SwahiliLessonDay(
        title: 'Day 1 — People words',
        subtitle: 'Pronouns & simple descriptions',
        words: [
          _w('Mimi', 'I / me', 'MEE-mee', 'Used when YOU are the subject. Put it at the start of a sentence about yourself.',
              grammar: 'Subject pronoun — first person singular.', example: 'Mimi ni mwanafunzi. = I am a student.',
              breakdown: ['Mimi = I']),
          _w('Wewe / Ninyi', 'You', 'WEH-weh / NIN-yee', 'Wewe = one person. Ninyi = more than one person (you all).',
              grammar: 'Second person pronoun.', example: 'Wewe ni rafiki yangu. = You are my friend.'),
          _w('Yeye', 'He / she', 'YEH-yeh', 'Swahili uses the SAME word for he and she. Context tells you which.',
              grammar: 'Third person singular.', example: 'Yeye anakuja. = He/She is coming.'),
          _w('Sisi', 'We / us', 'SEE-see', 'Talk about your group including yourself.',
              example: 'Sisi tunakula. = We are eating.'),
          _w('Yeye ni mrefu', 'She/He is tall', 'YEH-yeh nee MREH-foo', 'Mrefu = tall. Ni = is (connecting word).',
              breakdown: ['Yeye = he/she', 'ni = is', 'mrefu = tall']),
          _w('Yeye ni mfupi', 'She/He is short', 'YEH-yeh nee m-FOO-pee', 'Mfupi is the opposite of mrefu.',
              breakdown: ['mfupi = short']),
          _w('Yeye ni wangu', 'She/He is mine', 'YEH-yeh nee WAH-ngoo', 'Wangu = mine (my thing/person). Shows belonging.',
              grammar: 'Possessive — wangu = mine.'),
          _w('Yeye ni daktari', 'He/She is a doctor', 'YEH-yeh nee dahk-TAH-ree', 'Daktari = doctor (borrowed from English, easy to remember).',
              example: 'Yeye ni daktari mzuri. = He/She is a good doctor.'),
          _w('Yeye ni maarufu', 'He/She is famous', 'YEH-yeh nee mah-ah-ROO-foo', 'Maarufu = famous, well known.',
              example: 'Msanii huyu ni maarufu. = This artist is famous.'),
          _w('Wana furaha', 'They are happy', 'WAH-nah foo-RAH-hah', 'Wana = they have / they are (with feeling). Furaha = happiness/joy.',
              breakdown: ['Wana = they have', 'furaha = happiness']),
          _w('Nina furaha', 'I am happy', 'NEE-nah foo-RAH-hah', 'Literally "I have happiness." Swahili often says feelings this way.',
              breakdown: ['Nina = I have', 'furaha = happiness']),
          _w('Tuko hapa', 'We are here', 'TOO-koh HAH-pah', 'Tuko = we are (location). Hapa = here.',
              breakdown: ['Tuko = we are here', 'hapa = here']),
        ],
      ),
      SwahiliLessonDay(
        title: 'Day 2 — I have…',
        subtitle: 'Nina & Sina — owning and not having',
        words: [
          _w('Nina rafiki', 'I have a friend', 'NEE-nah rah-FEE-kee', 'Rafiki = friend. Nina + noun = I have…',
              breakdown: ['Nina = I have', 'rafiki = friend']),
          _w('Nina tatizo', 'I have a problem', 'NEE-nah tah-TEE-zoh', 'Tatizo = problem, trouble.',
              example: 'Nina tatizo dogo. = I have a small problem.'),
          _w('Nina simu', 'I have a phone', 'NEE-nah SEE-moo', 'Simu = phone / mobile.',
              example: 'Nina simu mpya. = I have a new phone.'),
          _w('Nina gari', 'I have a car', 'NEE-nah GAH-ree', 'Gari = car, vehicle.'),
          _w('Nina mtoto', 'I have a child', 'NEE-nah m-TOH-toh', 'Mtoto = child. Plural: watoto.',
              grammar: 'M- prefix often marks singular person words.'),
          _w('Nina yai', 'I have an egg', 'NEE-nah YAH-ee', 'Yai = egg. Simple food word.',
              example: 'Nina yai mbili. = I have two eggs.'),
          _w('Nina habari', 'I have news', 'NEE-nah hah-BAH-ree', 'Also used in greetings: Habari? = How are things?',
              example: 'Nina habari njema. = I have good news.'),
          _w('Nina nyumba', 'I have a house', 'NEE-nah NYOOM-bah', 'Nyumba = house, home.'),
          _w('Nina matunda', 'I have fruits', 'NEE-nah mah-TOON-dah', 'Matunda = fruits (plural). Tunda = one fruit.'),
          _w('Nina mpango', 'I have a plan', 'NEE-nah m-PAH-ngoh', 'Mpango = plan, idea for action.',
              example: 'Nina mpango mzuri. = I have a good plan.'),
          _w('Sina wazo', 'I have no idea', 'SEE-nah WAH-zoh', 'Sina = I do not have. Wazo = idea/thought.',
              breakdown: ['Sina = I don\'t have', 'wazo = idea']),
          _w('Nina swali', 'I have a question', 'NEE-nah SWAH-lee', 'Swali = question. Great classroom word!',
              example: 'Nina swali moja. = I have one question.'),
          _w('Nina kila kitu', 'I have everything', 'NEE-nah KEE-lah KEE-too', 'Kila kitu = everything (literally "every thing").',
              breakdown: ['kila = every', 'kitu = thing']),
        ],
      ),
      SwahiliLessonDay(
        title: 'Day 3 — I am…',
        subtitle: 'Feelings, place & who you are',
        words: [
          _w('Niko hapa', 'I am here', 'NEE-koh HAH-pah', 'Niko = I am (at a place). Different from Nina (I have).',
              breakdown: ['Niko = I am here', 'hapa = here']),
          _w('Niko nyumbani', 'I am at home', 'NEE-koh nyoo-BAH-nee', 'Nyumbani = at home (special form of nyumba).',
              example: 'Leo niko nyumbani. = Today I am at home.'),
          _w('Ninaumwa', 'I am sick', 'nee-nah-OOM-wah', 'One word — no space. Umwa = to be ill.',
              grammar: 'Ni- = I, -na- = present, -umwa = hurt/ill.'),
          _w('Nimechoka', 'I am tired', 'nee-meh-CHOH-kah', 'From kuchoka = to get tired. Nime- = I have become.',
              example: 'Nimechoka sana. = I am very tired.'),
          _w('Nina furaha', 'I am happy', 'NEE-nah foo-RAH-hah', 'Same as Day 1 — "I have happiness." Very common!',
              example: 'Nina furaha kuonana. = I am happy to meet you.'),
          _w('Ninapika', 'I am cooking', 'nee-nah-PEE-kah', 'Kupika = to cook. -na- shows action happening now.',
              example: 'Ninapika chakula. = I am cooking food.'),
          _w('Ninajaribu', 'I am trying', 'nee-nah-jah-REE-boo', 'Kujaribu = to try. Encouraging word for learners!',
              example: 'Ninajaribu kusema Kiswahili. = I am trying to speak Swahili.'),
          _w('Niko na wewe', 'I am with you', 'NEE-koh nah WEH-weh', 'Na = with. Beautiful phrase of support.',
              breakdown: ['Niko = I am', 'na = with', 'wewe = you']),
          _w('Nimeoa', 'I am married', 'nee-meh-OH-ah', 'Kuoa = to marry. Nimeoa = I have married / I am married.'),
          _w('Mimi ni mtoto', 'I am a child', 'MEE-mee nee m-TOH-toh', 'Emphasizes Mimi (I) — sometimes for clarity.',
              example: 'Mimi ni mtoto mdogo. = I am a young child.'),
          _w('Mimi ni mrembo', 'I am beautiful', 'MEE-mee nee m-REM-boh', 'Mrembo = beautiful (often for women).',
              grammar: 'M- prefix on adjective agrees with person.'),
          _w('Mimi ni mtanashati', 'I am handsome', 'MEE-mee nee m-tah-nah-SHAH-tee', 'Mtanashati = handsome (often for men).'),
          _w('Sijambo', 'I am fine', 'see-JAHM-boh', 'Classic reply to "Habari?" Means "nothing bad" = I\'m OK!',
              example: 'Habari? — Sijambo. = How are you? — I\'m fine.'),
        ],
      ),
      SwahiliLessonDay(
        title: 'Day 4 — Everyday phrases',
        subtitle: 'Help, please, coming & waiting',
        words: [
          _w('Naweza kusaidia', 'I can help', 'nah-WEH-zah koo-sah-EE-dee-ah', 'Naweza = I can. Kusaidia = to help.',
              breakdown: ['Naweza = I can', 'kusaidia = to help']),
          _w('Siwezi kwenda', 'I can\'t go', 'see-WEH-zee KWEHN-dah', 'Siwezi = I cannot. Kwenda = to go.',
              breakdown: ['Siwezi = I cannot', 'kwenda = to go']),
          _w('Kwasababu', 'Because', 'kwah-sah-BAH-boo', 'Connects reason to action.',
              example: 'Siri ni nyumbani kwasababu nimechoka. = I am home because I am tired.'),
          _w('Nimechoka', 'I am tired', 'nee-meh-CHOH-kah', 'Review from Day 3 — very useful daily word.'),
          _w('Nilikuwa kazini', 'I was at work', 'nee-lee-KOO-wah kah-ZEE-nee', 'Past tense: nilikuwa = I was. Kazi = work.',
              breakdown: ['Nilikuwa = I was', 'kazini = at work']),
          _w('Ni sawa', 'It\'s okay', 'nee SAH-wah', 'Super common! Means OK, alright, no problem.',
              example: 'Samahani! — Ni sawa. = Sorry! — It\'s okay.'),
          _w('Tafadhali', 'Please', 'tah-fah-DAH-lee', 'Always polite. Use when asking for something.',
              example: 'Tafadhali, nipe maji. = Please, give me water.'),
          _w('Nipe maji', 'Give me water', 'NEE-peh MAH-jee', 'Nipe = give me. Maji = water.',
              breakdown: ['Nipe = give me', 'maji = water']),
          _w('Sawa, ngoja', 'Okay, wait', 'SAH-wah n-GOH-jah', 'Ngoja = wait (friendly).',
              example: 'Sawa, ngoja kidogo. = OK, wait a little.'),
          _w('Ninakuja', 'I am coming', 'nee-nah-KOO-jah', 'Kuja = to come. Text this when you\'re on your way!',
              example: 'Ninakuja sasa. = I am coming now.'),
          _w('Harakisha', 'Hurry up', 'hah-rah-KEE-shah', 'Command form — use with friends, not elders.',
              grammar: 'Imperative — telling someone to hurry.'),
          _w('Dakika moja', 'One minute', 'dah-KEE-kah MOH-jah', 'Dakika = minute. Moja = one.',
              example: 'Ngoja dakika moja. = Wait one minute.'),
          _w('Asante kwa kujali', 'Thank you for caring', 'ah-SAHN-teh kwah koo-JAH-lee', 'Deep thank-you. Kujali = to care.',
              breakdown: ['Asante = thank you', 'kujali = to care']),
        ],
      ),
      SwahiliLessonDay(
        title: 'Day 5 — Review & connect',
        subtitle: 'Glue words to build real sentences',
        words: [
          _w('Habari?', 'How are you?', 'hah-BAH-ree', 'Literally "news?" Reply: Sijambo or Nzuri.',
              example: 'Habari yako? = How are you? (your news?)'),
          _w('Nzuri', 'Good / fine', 'N-ZOO-ree', 'Positive reply. Nzuri sana = very good.',
              example: 'Hali yako ni nzuri. = Your condition is good.'),
          _w('Asante', 'Thank you', 'ah-SAHN-teh', 'Essential! Asante sana = thank you very much.'),
          _w('Karibu', 'Welcome / you\'re welcome', 'kah-REE-boo', 'Also means "come close." Warm word in East Africa.'),
          _w('Ndiyo', 'Yes', 'N-DEE-yoh', 'Clear yes.'),
          _w('Hapana', 'No', 'hah-PAH-nah', 'Polite no.'),
          _w('Na', 'And / with', 'nah', 'Joins words: Mimi na wewe = me and you.'),
          _w('Leo', 'Today', 'LEH-oh', 'Time word. Leo niko hapa = Today I am here.'),
          _w('Kesho', 'Tomorrow', 'KEH-shoh', 'Nitakuja kesho = I will come tomorrow.'),
          _w('Sana', 'Very / a lot', 'SAH-nah', 'Put at end: Asante sana, nzuri sana.'),
          _w('Kidogo', 'A little', 'kee-DOH-goh', 'Ngoja kidogo = wait a little.'),
          _w('Sasa', 'Now', 'SAH-sah', 'Ninakuja sasa = I am coming now.'),
        ],
      ),
    ],
  ),
  SwahiliLevel(
    id: 'elementary',
    title: 'Elementary',
    subtitle: 'Greetings, family & numbers',
    icon: Icons.menu_book_rounded,
    color: Color(0xFF0D9488),
    days: _swahiliGeneratedDays('elementary', [
      ['Baba', 'Father', 'BAH-bah', 'Your father or any older man respectfully.'],
      ['Mama', 'Mother', 'MAH-mah', 'Your mother. Also used to address women politely.'],
      ['Kaka', 'Brother / older boy', 'KAH-kah', 'Older brother or young man.'],
      ['Dada', 'Sister / older girl', 'DAH-dah', 'Older sister or young woman.'],
      ['Bibi', 'Grandmother', 'BEE-bee', 'Grandma. Respect word for elderly women.'],
      ['Babu', 'Grandfather', 'BAH-boo', 'Grandpa.'],
      ['Moja', 'One', 'MOH-jah', 'Number 1. Also means "same" in some phrases.'],
      ['Mbili', 'Two', 'MBEE-lee', 'Number 2.'],
      ['Tatu', 'Three', 'TAH-too', 'Number 3.'],
      ['Nne', 'Four', 'N-neh', 'Number 4.'],
      ['Tano', 'Five', 'TAH-noh', 'Number 5.'],
      ['Jina langu ni…', 'My name is…', 'JEE-nah LAH-ngoo nee', 'Introduce yourself: Jina langu ni Amina.'],
      ['Unaitwa nani?', 'What is your name?', 'oo-nah-EE-twah NAH-nee', 'Ask someone\'s name politely.'],
      ['Ninakupenda', 'I love you', 'nee-nah-koo-PEHN-dah', 'Kupenda = to love. Romantic or deep care.'],
      ['Kwaheri', 'Goodbye', 'kwah-HEH-ree', 'Leaving. Safe travels!'],
      ['Lala salama', 'Sleep well', 'LAH-lah sah-LAH-mah', 'Good night wish.'],
      ['Chakula', 'Food', 'chah-KOO-lah', 'General word for food/meal.'],
      ['Maji', 'Water', 'MAH-jee', 'Always plural in Swahili.'],
      ['Ninahitaji', 'I need', 'nee-nah-hee-TAH-jee', 'Ninahitaji msaada = I need help.'],
      ['Msaada', 'Help', 'm-SAH-ah-dah', 'Nisaidie = help me (request).'],
      ['Wapi', 'Where?', 'WAH-pee', 'Wapi choo? = Where is the bathroom?'],
      ['Lini', 'When?', 'LEE-nee', 'Lini unakuja? = When are you coming?'],
      ['Nani', 'Who?', 'NAH-nee', 'Nani huyu? = Who is this?'],
      ['Nini', 'What?', 'NEE-nee', 'Nini hii? = What is this?'],
      ['Hivi', 'Like this / this way', 'HEE-vee', 'Fanya hivi = Do it like this.'],
    ], 'Elementary'),
  ),
  SwahiliLevel(
    id: 'intermediate',
    title: 'Intermediate',
    subtitle: 'Verbs, time & daily life',
    icon: Icons.trending_up_rounded,
    color: Color(0xFF2563EB),
    days: _swahiliGeneratedDays('intermediate', [
      ['Ninakula', 'I am eating', 'nee-nah-KOO-lah', 'Kula = eat. Present continuous.'],
      ['Ninakunywa', 'I am drinking', 'nee-nah-KOON-ywah', 'Kunywa = drink.'],
      ['Ninasoma', 'I am reading / studying', 'nee-nah-SOH-mah', 'Soma = read, study, learn.'],
      ['Ninaenda', 'I am going', 'nee-nah-EHN-dah', 'Kwenda = go. Naenda = I go.'],
      ['Ninarudi', 'I am returning', 'nee-nah-ROO-dee', 'Rudi = return, come back.'],
      ['Ninafanya kazi', 'I am working', 'nee-nah-FAHN-yah KAH-zee', 'Kazi = work/job.'],
      ['Ninacheza', 'I am playing', 'nee-nah-CHEH-zah', 'Cheza = play (games, sports).'],
      ['Ninaongea', 'I am speaking', 'nee-nah-ohn-GHEH-ah', 'Kuongea = to speak/talk.'],
      ['Ninasikiliza', 'I am listening', 'nee-nah-see-kee-LEE-zah', 'Sikiliza = listen carefully.'],
      ['Ninaelewa', 'I understand', 'nee-nah-eh-LEH-wah', 'Elewa = understand. Key learner phrase!'],
      ['Sielewi', 'I don\'t understand', 'see-eh-LEH-wee', 'Say this when you need help.'],
      ['Rafiki yangu', 'My friend', 'rah-FEE-kee YAH-ngoo', 'Yangu = my. Rafiki yako = your friend.'],
      ['Nyumba yako', 'Your house', 'NYOOM-bah YAH-koh', 'Yako = your.'],
      ['Asubuhi', 'Morning', 'ah-soo-BOO-hee', 'Habari za asubuhi = Good morning.'],
      ['Jioni', 'Evening', 'jee-OH-nee', 'Habari za jioni = Good evening.'],
      ['Usiku', 'Night', 'oo-SEE-koo', 'Usiku mwema = Good night.'],
      ['Saa', 'Hour / clock / time', 'SAH-ah', 'Saa ngapi? = What time?'],
      ['Dakika', 'Minute', 'dah-KEE-kah', 'Time unit.'],
      ['Wiki', 'Week', 'WEE-kee', 'Wiki moja = one week.'],
      ['Mwezi', 'Month', 'MWEH-zee', 'Mwezi mmoja = one month.'],
      ['Mwaka', 'Year', 'mwah-KAH', 'Mwaka mpya = new year.'],
      ['Hapa', 'Here', 'HAH-pah', 'Location word.'],
      ['Huko', 'There (far)', 'HOO-koh', 'Points away from speaker.'],
      ['Hivi karibuni', 'Soon', 'HEE-vee kah-ree-BOO-nee', 'Nitakuja hivi karibuni = I\'ll come soon.'],
    ], 'Intermediate'),
  ),
  SwahiliLevel(
    id: 'advanced',
    title: 'Advanced',
    subtitle: 'Past, future & complex sentences',
    icon: Icons.psychology_rounded,
    color: Color(0xFF7C3AED),
    days: _swahiliGeneratedDays('advanced', [
      ['Nilikula', 'I ate', 'nee-lee-KOO-lah', 'Past tense: I ate (completed).'],
      ['Nitakula', 'I will eat', 'nee-tah-KOO-lah', 'Future tense.'],
      ['Nimefika', 'I have arrived', 'nee-meh-FEE-kah', 'Perfect — action done, result matters.'],
      ['Nimepotea', 'I am lost', 'nee-meh-poh-TEH-ah', 'Kupotea = to get lost.'],
      ['Ninahisi', 'I feel', 'nee-nah-HEE-see', 'Hisia = feeling.'],
      ['Ninaogopa', 'I am afraid', 'nee-nah-oh-GOH-pah', 'Ogopa = fear.'],
      ['Ninafurahi', 'I am rejoicing', 'nee-nah-foo-RAH-hee', 'Stronger than furaha — active joy.'],
      ['Ninataka', 'I want', 'nee-nah-TAH-kah', 'Ninataka kwenda = I want to go.'],
      ['Ninahitaji', 'I need', 'nee-nah-hee-TAH-jee', 'Stronger need than "want."'],
      ['Lazima', 'Must / have to', 'lah-ZEE-mah', 'Lazima nende = I must go.'],
      ['Labda', 'Maybe', 'LAH-bah-dah', 'Softens statements.'],
      ['Bila', 'Without', 'BEE-lah', 'Bila shaka = without doubt.'],
      ['Kwa', 'For / by / with', 'kwah', 'Very common preposition.'],
      ['Kutoka', 'From', 'koo-TOH-kah', 'Kutoka Kenya = From Kenya.'],
      ['Hadi', 'Until', 'HAH-dee', 'Hadi kesho = until tomorrow.'],
      ['Wakati', 'When / time', 'wah-KAH-tee', 'Wakati gani? = At what time?'],
      ['Kwa nini', 'Why?', 'kwah NEE-nee', 'Ask for reason.'],
      ['Jinsi gani', 'How?', 'JEEN-see GAH-nee', 'Jinsi gani unafanya? = How do you do it?'],
      ['Ingawa', 'Although', 'in-GHAH-wah', 'Shows contrast.'],
      ['Lakini', 'But', 'lah-KEE-nee', 'Joins contrasting ideas.'],
      ['Kama', 'If / like', 'KAH-mah', 'Kama unataka = If you want.'],
      ['Bado', 'Still / not yet', 'BAH-doh', 'Bado sijui = I still don\'t know.'],
      ['Tayari', 'Already / ready', 'tah-YAH-ree', 'Niko tayari = I am ready.'],
      ['Mara moja', 'Once / immediately', 'MAH-rah MOH-jah', 'Do it at once.'],
      ['Mara nyingi', 'Often', 'MAH-rah NYIN-gee', 'Happens many times.'],
    ], 'Advanced'),
  ),
  SwahiliLevel(
    id: 'fluent',
    title: 'Fluent',
    subtitle: 'Idioms, culture & natural speech',
    icon: Icons.record_voice_over_rounded,
    color: Color(0xFFDB2777),
    days: _swahiliGeneratedDays('fluent', [
      ['Pole', 'Sorry / take it easy', 'POH-leh', 'Sympathy when something bad happened. Very cultural!'],
      ['Pole pole', 'Slowly / gently', 'POH-leh POH-leh', 'Hakuna matata spirit — no rush.'],
      ['Hakuna matata', 'No worries', 'hah-KOO-nah mah-TAH-tah', 'Famous phrase — no problem!'],
      ['Safari njema', 'Good journey', 'sah-FAH-ree JEH-mah', 'Safe travels!'],
      ['Hongera', 'Congratulations', 'hon-GEH-rah', 'Celebrate success.'],
      ['Heri', 'Blessings / happy', 'HEH-ree', 'Heri ya siku = happy day.'],
      ['Afya', 'Health', 'AH-fyah', 'Afya njema = good health.'],
      ['Amani', 'Peace', 'ah-MAH-nee', 'Deep word — peace, calm.'],
      ['Upendo', 'Love (noun)', 'oo-PEHN-doh', 'Upendo ni muhimu = Love is important.'],
      ['Uaminifu', 'Honesty / loyalty', 'oo-ah-mee-NEE-foo', 'Trustworthiness.'],
      ['Heshima', 'Respect', 'heh-SHEE-mah', 'Show heshima to elders.'],
      ['Jambo', 'Hello (casual)', 'JAHM-boh', 'Tourist-friendly greeting.'],
      ['Shikamoo', 'Greeting to elder', 'shee-kah-MOH', 'Shows respect. Reply: Marahaba.'],
      ['Marahaba', 'Reply to Shikamoo', 'mah-rah-HAH-bah', 'Elder\'s response.'],
      ['Vizuri sana', 'Very well done', 'vee-ZOO-ree SAH-nah', 'Praise someone.'],
      ['Si vizuri', 'Not good', 'see vee-ZOO-ree', 'Express disapproval gently.'],
      ['Nakubali', 'I agree', 'nah-koo-BAH-lee', 'Kubali = accept/agree.'],
      ['Sikubali', 'I disagree', 'see-koo-BAH-lee', 'Polite disagreement.'],
      ['Tunaendelea', 'We continue', 'too-nah-ehn-deh-LEH-ah', 'Moving forward together.'],
      ['Nimekosa', 'I missed / I was wrong', 'nee-meh-KOH-sah', 'Admit mistake — respected.'],
      ['Samahani', 'Excuse me / sorry', 'sah-mah-HAH-nee', 'Get attention or apologize.'],
      ['Tafadhali subiri', 'Please wait', 'tah-fah-DAH-lee soo-BEE-ree', 'Polite request.'],
      ['Naweza kuongea Kiswahili', 'I can speak Swahili', 'nah-WEH-zah koo-ohn-GHEH-ah kee-swah-HEE-lee', 'Milestone phrase!'],
      ['Ninajifunza Kiswahili', 'I am learning Swahili', 'nee-nah-jee-FOON-zah', 'You are doing it right now!'],
      ['Mazungumzo', 'Conversation', 'mah-zoon-GOOM-zoh', 'Goal of this whole course.'],
    ], 'Fluent'),
  ),
  SwahiliLevel(
    id: 'native',
    title: 'Near Native',
    subtitle: 'Proverbs, nuance & mastery',
    icon: Icons.workspace_premium_rounded,
    color: Color(0xFFD97706),
    days: _swahiliGeneratedDays('native', [
      ['Haraka haraka haina baraka', 'Hurry has no blessing', 'hah-RAH-kah', 'Proverb: patience brings good results.'],
      ['Mgeni ni kuku mleao', 'A guest is a chicken to feed', 'M-GHEH-nee', 'Honor guests with food.'],
      ['Umoja ni nguvu', 'Unity is strength', 'oo-MOH-jah', 'Together we are powerful.'],
      ['Elimu ni taa', 'Education is a lamp', 'eh-LEE-moo', 'Learning lights the path.'],
      ['Mchumwa huota mwenyewe', 'The sting comes back to the stinger', 'm-choom-WAH', 'Actions have consequences.'],
      ['Penye nia pana njia', 'Where there\'s will, there\'s a way', 'PEH-nyeh', 'Motivation finds a path.'],
      ['Mtegemea nundu haachi kunona', 'One who relies on a hump won\'t stop being fat', 'm-teh-geh-MEH-ah', 'Don\'t depend lazily on others.'],
      ['Asiyefunzwa na mamaye hufunzwa na ulimwengu', 'Unspoiled by mother, taught by world', 'ah-see-YEH', 'Life teaches hard lessons.'],
      ['Kidole kimoja hakivunji chawa', 'One finger doesn\'t crush a louse', 'kee-DOH-leh', 'Teamwork matters.'],
      ['Mwenye macho haambiwi tazama', 'One with eyes isn\'t told look', 'MWEH-nyeh', 'Obvious to those who see.'],
      ['La kuvunda halina ubani', 'What is rotten has no incense', 'lah', 'Bad things can\'t fake goodness.'],
      ['Mchagua jembe si mkulima', 'Picking a hoe doesn\'t make a farmer', 'm-chah-GOO-ah', 'Tools don\'t replace skill.'],
      ['Njia ya mwongo ni fupi', 'A liar\'s road is short', 'NJEE-ah', 'Lies catch up quickly.'],
      ['Usicheze na chui', 'Don\'t play with a leopard', 'oo-see-CHEH-zeh', 'Don\'t take foolish risks.'],
      ['Bahati nzuri', 'Good luck', 'bah-HAH-tee', 'Wish someone fortune.'],
      ['Kwa hakika', 'Certainly / indeed', 'kwah hah-KEE-kah', 'Emphasize truth.'],
      ['Kwa kweli', 'Truly / honestly', 'kwah KWEH-lee', 'Speak from the heart.'],
      ['Bila shaka', 'Without doubt', 'BEE-lah SHAH-kah', 'Definitely.'],
      ['Kwa upande mwingine', 'On the other hand', 'kwah oo-PAHN-deh', 'Balanced argument.'],
      ['Kwa mujibu wa', 'According to', 'kwah moo-JEE-boo', 'Formal reference.'],
      ['Ni muhimu', 'It is important', 'nee moo-HEE-moo', 'Stress significance.'],
      ['Si rahisi', 'It\'s not easy', 'see rah-HEE-see', 'Acknowledge difficulty.'],
      ['Ni rahisi', 'It\'s easy', 'nee rah-HEE-see', 'Encourage beginners.'],
      ['Nimefikia', 'I have reached / achieved', 'nee-meh-FEE-kee-ah', 'You reached Near Native level!'],
      ['Mimi ni mzungumzaji', 'I am a speaker', 'MEE-mee nee m-zoon-goom-ZAH-jee', 'You speak the language.'],
      ['Kiswahili ni lugha yangu', 'Swahili is my language', 'kee-swah-HEE-lee', 'Ultimate pride statement.'],
    ], 'Near Native'),
  ),
];

List<SwahiliLessonDay> _swahiliGeneratedDays(
  String levelId,
  List<List<String>> raw,
  String levelName,
) {
  const perDay = 5;
  final days = <SwahiliLessonDay>[];
  for (var d = 0; d < 5; d++) {
    final start = d * perDay;
    final end = (start + perDay).clamp(0, raw.length);
    if (start >= raw.length) break;
    final slice = raw.sublist(start, end);
    days.add(
      SwahiliLessonDay(
        title: 'Day ${d + 1} — $levelName',
        subtitle: 'Lesson ${d + 1} of 5',
        words: slice
            .map(
              (r) => _w(
                r[0],
                r[1],
                r[2],
                r[3],
                example: r.length > 4 ? r[4] : '',
              ),
            )
            .toList(),
      ),
    );
  }
  return days;
}

/// Build a level test from its vocabulary (mixed Swahili ↔ English).
List<SwahiliTestQuestion> buildSwahiliTestForLevel(SwahiliLevel level, {int count = kSwahiliTestQuestionCount}) {
  final allWords = <SwahiliWord>[];
  for (final day in level.days) {
    allWords.addAll(day.words);
  }
  if (allWords.isEmpty) return [];

  final questions = <SwahiliTestQuestion>[];
  final used = <int>{};
  final rng = List<int>.generate(allWords.length, (i) => i)..shuffle();

  for (var i = 0; i < count && i < rng.length; i++) {
    final idx = rng[i];
    if (used.contains(idx)) continue;
    used.add(idx);
    final word = allWords[idx];
    final reverse = i.isOdd;
    if (reverse) {
      final wrong = _pickWrong(allWords, word.english, (w) => w.english);
      final options = [word.english, ...wrong]..shuffle();
      questions.add(
        SwahiliTestQuestion(
          prompt: 'What does "${word.swahili}" mean?',
          options: options,
          correctIndex: options.indexOf(word.english),
        ),
      );
    } else {
      final wrong = _pickWrong(allWords, word.swahili, (w) => w.swahili);
      final options = [word.swahili, ...wrong]..shuffle();
      questions.add(
        SwahiliTestQuestion(
          prompt: 'How do you say "${word.english}" in Swahili?',
          options: options,
          correctIndex: options.indexOf(word.swahili),
        ),
      );
    }
  }
  return questions;
}

List<String> _pickWrong(List<SwahiliWord> pool, String correct, String Function(SwahiliWord) field) {
  final out = <String>[];
  final shuffled = List<SwahiliWord>.from(pool)..shuffle();
  for (final w in shuffled) {
    final v = field(w);
    if (v != correct && !out.contains(v)) {
      out.add(v);
      if (out.length >= 3) break;
    }
  }
  while (out.length < 3) {
    out.add('—');
  }
  return out.take(3).toList();
}
