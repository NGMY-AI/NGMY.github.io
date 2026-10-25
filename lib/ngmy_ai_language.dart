/// Works out which language a request wants, without a language picker: a named language
/// ("in Swahili", "kwa Kiingereza") wins, otherwise the language the request is written in.
/// Returns null when it is plain English / unknown (the AI then follows the request).
String? ngmyRequestedLanguage(String request) {
  final t = ' ${request.toLowerCase()} ';
  bool has(String pattern) => RegExp(pattern).hasMatch(t);

  // Named outright.
  if (has(r'\b(in|into|to|kwa|kwa lugha ya)\s+(kiingereza|english)\b')) return 'English';
  if (has(r'\b(in|into|to)\s+(ki)?swahili\b') || has(r'\bkwa\s+(lugha\s+ya\s+)?kiswahili\b')) return 'Swahili (Kiswahili)';
  if (has(r'\b(in|into|to)\s+french\b') || has(r'\ben fran[cç]ais\b')) return 'French';
  if (has(r'\b(in|into|to)\s+spanish\b') || has(r'\ben espa[nñ]ol\b')) return 'Spanish';
  if (has(r'\b(in|into|to)\s+arabic\b')) return 'Arabic';
  if (has(r'\b(in|into|to)\s+kinyarwanda\b')) return 'Kinyarwanda';
  if (has(r'\b(in|into|to)\s+lingala\b')) return 'Lingala';

  // Written in Swahili.
  const swahili = [
    'na', 'ya', 'wa', 'kwa', 'ni', 'za', 'la', 'katika', 'kuhusu', 'tengeneza', 'nitengenezee', 'naomba', 'tafadhali',
    'habari', 'watoto', 'mtoto', 'familia', 'kitabu', 'hadithi', 'shule', 'kanisa', 'mungu', 'jamii', 'biashara',
    'somo', 'masomo', 'yetu', 'wetu', 'zetu', 'yangu', 'wangu', 'kuhusiana', 'pamoja', 'sana', 'hii', 'hiyo', 'kila',
    'andika', 'unda', 'kuwa', 'ambayo', 'ambao', 'lakini', 'pia', 'au', 'kama', 'baba', 'mama', 'bibi', 'babu', 'upendo',
  ];
  final words = t.split(RegExp(r'[^a-z]+')).where((w) => w.isNotEmpty).toList();
  if (words.isEmpty) return null;
  final hits = words.where(swahili.contains).length;
  if (hits >= 2 && hits * 5 >= words.length) return 'Swahili (Kiswahili)';
  return null;
}

/// A hard rule line for prompts when the language is known.
String ngmyLanguageDirective(String request) {
  final lang = ngmyRequestedLanguage(request);
  if (lang == null) return '';
  return '- WRITE EVERYTHING THE READER SEES IN $lang — every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given).';
}

/// Common Swahili words that are not also everyday English. One of these in a message means the
/// person speaks Swahili, so a reply in Swahili is the polite one.
final Set<String> kNgmySwahiliWords = {
  'habari', 'mambo', 'poa', 'asante', 'karibu', 'pole', 'sawa', 'rafiki', 'mama', 'baba', 'kwa', 'nini', 'sana', 'tafadhali',
  'nataka', 'naomba', 'ninaomba', 'nipe', 'nifanye', 'mimi', 'wewe', 'yako', 'yangu', 'yetu', 'wetu', 'zetu', 'hapana', 'ndiyo',
  'ndio', 'pia', 'lakini', 'kwamba', 'hii', 'hiyo', 'huyu', 'mtoto', 'watoto', 'familia', 'nyumba', 'kazi', 'pesa', 'leo',
  'kesho', 'jana', 'sasa', 'bado', 'tena', 'vizuri', 'nzuri', 'mzuri', 'siku', 'usiku', 'asubuhi', 'jioni', 'mungu', 'upendo',
  'mpenzi', 'nakupenda', 'kiswahili', 'kitabu', 'hadithi', 'shule', 'kanisa', 'jamii', 'biashara', 'ndugu', 'dada',
  'kaka', 'bibi', 'babu', 'mjomba', 'shangazi', 'sema', 'sikia', 'angalia', 'nisaidie', 'nisaidieni', 'tusaidie', 'saidia',
  'andika', 'tengeneza', 'eleza', 'nieleze', 'unaweza', 'naweza', 'tunaweza', 'nina', 'una', 'ana', 'tuna', 'hakuna', 'kuna',
  'vipi', 'namna', 'gani', 'wapi', 'lini', 'nani', 'kwanini', 'mbona', 'basi', 'kidogo', 'kubwa', 'ndogo', 'mpya', 'zamani',
  'mwanangu', 'mwanamke', 'mwanaume', 'mume', 'mke', 'harusi', 'salamu', 'shikamoo', 'marahaba', 'hongera', 'pongezi',
  'safari', 'chakula', 'maji', 'jina', 'kwaheri', 'tutaonana', 'samahani', 'ahsante', 'wiki', 'mwezi', 'mwaka', 'saa',
};

/// True when the text has at least one Swahili word from [kNgmySwahiliWords].
bool ngmyHasSwahiliWord(String text) {
  for (final w in text.toLowerCase().split(RegExp(r"[^a-z']+"))) {
    if (w.isNotEmpty && kNgmySwahiliWords.contains(w)) return true;
  }
  return false;
}

/// The instruction added to an advisor's reply request when the person wrote any Swahili.
const String kNgmySwahiliReplyRule =
    'LANGUAGE (mandatory): the person used Swahili, which means they speak Swahili. Reply fully in natural, everyday '
    'Swahili (Kiswahili), even if part of their message was in English. Only use English if they clearly ask for English. Write Swahili the way people really say it, never a word-for-word copy of English phrases. ';

const Set<String> _kSwahiliGlue = {'na', 'ya', 'wa', 'za', 'ni', 'la', 'katika', 'ambao', 'ambayo', 'hawa', 'yake', 'wake', 'zao', 'yao', 'kuwa', 'alikuwa', 'walikuwa', 'mtu', 'watu', 'wakati', 'baada', 'kila'};
const Set<String> _kEnglishGlue = {'the', 'and', 'of', 'to', 'was', 'is', 'in', 'that', 'he', 'she', 'his', 'her', 'with', 'for', 'as', 'they', 'their', 'from', 'by', 'were', 'are', 'it', 'this', 'be', 'on', 'at', 'who', 'had', 'have', 'our', 'we'};

/// 'sw' when the text is written in Swahili, 'en' when it is English, null when there is too little to tell.
String? ngmyDetectTextLanguage(String text) {
  final words = text.toLowerCase().split(RegExp(r"[^a-z']+")).where((w) => w.isNotEmpty).take(2000);
  var sw = 0, en = 0;
  for (final w in words) {
    if (kNgmySwahiliWords.contains(w) || _kSwahiliGlue.contains(w)) sw++;
    if (_kEnglishGlue.contains(w)) en++;
  }
  if (sw + en < 4) return null;
  return sw > en ? 'sw' : 'en';
}

/// How to write Swahili that Swahili speakers really understand: the meaning, never a word-for-word copy of English.
const String kNgmySwahiliStyleGuide = r'''
SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:
- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".
- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".
- relatives: cousin -> "binamu"; father's brother -> "baba mdogo" / "baba mkubwa"; mother's brother -> "mjomba"; father's sister -> "shangazi"; mother's sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".
- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".
- Use everyday words, short clear sentences and natural word order. Keep people's names and place names exactly as they are. If an idea has no good Swahili word, explain it simply instead of inventing a word.
''';
