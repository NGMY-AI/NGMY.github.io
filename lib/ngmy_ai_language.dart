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
