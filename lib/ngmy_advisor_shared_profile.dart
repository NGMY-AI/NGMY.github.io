import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// The few things about a person that rarely change — legal name, email, phone, home address,
/// city, age. Told to ANY advisor, every advisor on the same account knows them, so an
/// application never asks for them twice. Everything else they say stays with that advisor.
/// Kept on the device only (no database cost).
class NgmySharedProfile {
  static const fields = <String, String>{
    'first_name': 'First name',
    'last_name': 'Last name',
    'email': 'Email',
    'phone': 'Phone',
    'street': 'Street address',
    'city': 'City',
    'state': 'State',
    'zip': 'ZIP',
    'age': 'Age',
  };

  final Map<String, String> values;
  const NgmySharedProfile(this.values);

  String operator [](String k) => (values[k] ?? '').trim();
  bool get isEmpty => fields.keys.every((k) => this[k].isEmpty);

  String get fullName => [this['first_name'], this['last_name']].where((s) => s.isNotEmpty).join(' ');
  String get address {
    final cityLine = [this['city'], [this['state'], this['zip']].where((s) => s.isNotEmpty).join(' ')]
        .where((s) => s.isNotEmpty)
        .join(', ');
    return [this['street'], cityLine].where((s) => s.isNotEmpty).join(', ');
  }

  /// Age said earlier, moved forward by the years since it was saved.
  String get currentAge {
    final a = int.tryParse(this['age']);
    if (a == null) return this['age'];
    final at = DateTime.tryParse(this['age_saved_at']);
    if (at == null) return '$a';
    final years = DateTime.now().difference(at).inDays ~/ 365;
    return '${a + years}';
  }

  /// "First name: Kevin, Last name: Brown, Email: …" — only what is known.
  String detailsLine({String accountEmail = '', String accountPhone = ''}) {
    final parts = <String>[];
    for (final e in fields.entries) {
      final v = e.key == 'age' ? currentAge : this[e.key];
      if (v.isNotEmpty) parts.add('${e.value}: $v');
    }
    if (this['email'].isEmpty && accountEmail.trim().isNotEmpty) {
      parts.add('Email on their NGMY account (not confirmed yet): ${accountEmail.trim()}');
    }
    if (this['phone'].isEmpty && accountPhone.trim().isNotEmpty) {
      parts.add('Phone on their NGMY account (not confirmed yet): ${accountPhone.trim()}');
    }
    return parts.join(', ');
  }

  List<String> missing() => [
        if (this['first_name'].isEmpty || this['last_name'].isEmpty) 'legal first and last name',
        if (this['email'].isEmpty) 'email',
        if (this['phone'].isEmpty) 'phone number',
        if (this['street'].isEmpty || this['city'].isEmpty) 'home address (street, city, ZIP)',
        if (this['age'].isEmpty) 'age',
      ];
}

class NgmySharedProfileStore {
  static String _key(String email) => 'ngmy_shared_profile_v1_${email.toLowerCase().trim()}';
  static String _scannedKey(String email) => 'ngmy_shared_profile_scanned_v1_${email.toLowerCase().trim()}';

  static Future<NgmySharedProfile> load(String email) async {
    if (email.trim().isEmpty) return const NgmySharedProfile({});
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_key(email));
      if (raw == null || raw.isEmpty) return const NgmySharedProfile({});
      final m = jsonDecode(raw);
      if (m is! Map) return const NgmySharedProfile({});
      return NgmySharedProfile({for (final e in m.entries) '${e.key}': '${e.value ?? ''}'});
    } catch (_) {
      return const NgmySharedProfile({});
    }
  }

  /// Adds what was learned. Newer answers replace older ones (they moved, new number…).
  static Future<NgmySharedProfile> merge(String email, Map<String, dynamic> found) async {
    final cur = Map<String, String>.from((await load(email)).values);
    var changed = false;
    for (final k in NgmySharedProfile.fields.keys) {
      var v = '${found[k] ?? ''}'.trim();
      if (v.isEmpty || v.toLowerCase() == 'null' || v.toLowerCase() == 'unknown') continue;
      if (k == 'email') v = v.toLowerCase();
      if (k == 'age') {
        final n = int.tryParse(RegExp(r'\d+').firstMatch(v)?.group(0) ?? '');
        if (n == null || n < 10 || n > 110) continue;
        v = '$n';
        cur['age_saved_at'] = DateTime.now().toIso8601String();
      }
      if (cur[k] != v) {
        cur[k] = v;
        changed = true;
      }
    }
    if (changed && email.trim().isNotEmpty) {
      try {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString(_key(email), jsonEncode(cur));
      } catch (_) {}
    }
    return NgmySharedProfile(cur);
  }

  static Future<bool> scannedHistory(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getBool(_scannedKey(email)) ?? false;
    } catch (_) {
      return true;
    }
  }

  static Future<void> markScanned(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setBool(_scannedKey(email), true);
    } catch (_) {}
  }
}

/// Could this message (or this answer to the advisor's question) hold their name, email,
/// phone, address or age? Only then is it worth one small AI call to pick them out.
bool ngmyTextMayHoldPersonalDetails(String text, {String askedBefore = ''}) {
  final t = text.trim();
  if (t.isEmpty || t.length > 1500) return false;
  final l = t.toLowerCase();
  if (RegExp(r'[\w.+-]+@[\w-]+\.[\w.]+').hasMatch(t)) return true;
  if (RegExp(r'(\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}').hasMatch(t)) return true;
  if (RegExp(r'\b\d{1,6}\s+[a-z0-9 .]+\b(st|street|ave|avenue|rd|road|dr|drive|blvd|ln|lane|way|ct|court|hwy|cir|circle|pkwy|pl|place|trl|trail|ter)\b').hasMatch(l)) {
    return true;
  }
  if (RegExp(r"\b(my name|legal name|first name|last name|call me|years old|i'?m \d{2}\b|i am \d{2}\b|my age|i live (in|at|on)|my address|zip code|my (phone|number|cell|email))\b").hasMatch(l)) {
    return true;
  }
  final a = askedBefore.toLowerCase();
  return t.length <= 400 &&
      RegExp(r'\b(name|email|e-mail|phone|number|address|street|city|zip|age|how old|where do you live|details)\b').hasMatch(a);
}

/// Prompt that pulls their own lasting details out of what they wrote.
String ngmySharedProfileExtractPrompt(String conversation) =>
    'Below is what a person wrote in a chat (lines starting "Advisor asked" are the question they were answering).\n'
    'Pick out ONLY facts about THE PERSON THEMSELF (not friends, family, employers or businesses) for these fields:\n'
    'first_name, last_name (their legal name), email, phone, street (house number + street, apt), city, state (2 letters for US), zip, age (a number).\n'
    'Use the latest value when they changed it. Leave a field "" if they did not clearly say it. Never guess.\n'
    'Answer with JSON only, no markdown, e.g. {"first_name":"","last_name":"","email":"","phone":"","street":"","city":"","state":"","zip":"","age":""}\n\n'
    '$conversation';

Map<String, dynamic>? ngmyParseSharedProfileJson(String raw) {
  final s = raw.indexOf('{'), e = raw.lastIndexOf('}');
  if (s < 0 || e <= s) return null;
  try {
    final m = jsonDecode(raw.substring(s, e + 1));
    return m is Map ? Map<String, dynamic>.from(m) : null;
  } catch (_) {
    return null;
  }
}

/// Block for every advisor's prompt: what they already know, so they never ask again.
String ngmySharedProfilePromptBlock(NgmySharedProfile p, {String accountEmail = '', String accountPhone = ''}) {
  final line = p.detailsLine(accountEmail: accountEmail, accountPhone: accountPhone);
  if (line.isEmpty) return '';
  return 'WHAT YOU ALREADY KNOW ABOUT THEM (they told you or another NGMY advisor before — every advisor knows this): $line.\n'
      'Use these naturally (call them by first name). NEVER ask for any of them again. For an application or form, use them as they are. '
      'Only details marked "not confirmed yet" need a quick "is this still the best one?".\n';
}
