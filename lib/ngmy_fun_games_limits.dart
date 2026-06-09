import 'dart:math' as math;

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_fun_games_shuffle.dart';

/// Daily limits and per-user shuffled decks for Fun & Games.
class NgmyFunGamesLimits {
  static const _deviceIdKey = 'ngmy_fg_device_id';
  static const _userKeyKey = 'ngmy_fg_user_key';

  static const _confDayKey = 'ngmy_fg_conf_day';
  static const _confPosKey = 'ngmy_fg_conf_pos';
  static const _confGenKey = 'ngmy_fg_conf_gen';
  static const _confTodayQuoteKey = 'ngmy_fg_conf_today_quote';
  static const _confTodayContentKey = 'ngmy_fg_conf_today_content';
  static const _confEverKey = 'ngmy_fg_conf_ever';

  static const _riddleDayKey = 'ngmy_fg_riddle_day';
  static const _riddleCountKey = 'ngmy_fg_riddle_count';
  static const _riddlePosKey = 'ngmy_fg_riddle_pos';
  static const _riddleGenKey = 'ngmy_fg_riddle_gen';

  static const _fortuneDayKey = 'ngmy_fg_fortune_day';
  static const _fortuneCountKey = 'ngmy_fg_fortune_count';
  static const _fortunePosKey = 'ngmy_fg_fortune_pos';
  static const _fortuneGenKey = 'ngmy_fg_fortune_gen';

  static const confidenceDailyLimit = 1;
  static const riddlesDailyLimit = 15;
  static const fortuneDailyLimit = 1;

  static const _catConfidence = 'confidence';
  static const _catRiddle = 'riddle';
  static const _catFortune = 'fortune';

  static String _dayKey(DateTime d) => '${d.year}-${d.month}-${d.day}';

  static Future<void> configureUser(String? email) async {
    final prefs = await SharedPreferences.getInstance();
    final trimmed = email?.trim().toLowerCase() ?? '';
    if (trimmed.isNotEmpty) {
      await prefs.setString(_userKeyKey, trimmed);
      return;
    }
    var id = prefs.getString(_deviceIdKey);
    if (id == null || id.isEmpty) {
      id = 'dev_${DateTime.now().microsecondsSinceEpoch}_${math.Random().nextInt(999999)}';
      await prefs.setString(_deviceIdKey, id);
    }
    await prefs.setString(_userKeyKey, id);
  }

  static Future<String> _userKey() async {
    final prefs = await SharedPreferences.getInstance();
    final saved = prefs.getString(_userKeyKey);
    if (saved != null && saved.isNotEmpty) return saved;
    await configureUser(null);
    return prefs.getString(_userKeyKey) ?? 'guest';
  }

  static Future<void> _resetIfNewDay(String dayKey, String countKey) async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    if (prefs.getString(dayKey) != today) {
      await prefs.setString(dayKey, today);
      await prefs.setInt(countKey, 0);
    }
  }

  static Future<int> _contentAt(String category, int count, String posKey, String genKey) async {
    final prefs = await SharedPreferences.getInstance();
    final user = await _userKey();
    final pos = prefs.getInt(posKey) ?? 0;
    final gen = prefs.getInt(genKey) ?? 0;
    return NgmyFunGamesShuffle.contentIndex(
      userKey: user,
      category: category,
      count: count,
      generation: gen,
      position: pos,
    );
  }

  static Future<int> _advanceDeck(String category, int count, String posKey, String genKey) async {
    final prefs = await SharedPreferences.getInstance();
    var pos = (prefs.getInt(posKey) ?? 0) + 1;
    var gen = prefs.getInt(genKey) ?? 0;
    if (pos >= count) {
      pos = 0;
      gen++;
    }
    await prefs.setInt(posKey, pos);
    await prefs.setInt(genKey, gen);
    final user = await _userKey();
    return NgmyFunGamesShuffle.contentIndex(
      userKey: user,
      category: category,
      count: count,
      generation: gen,
      position: pos,
    );
  }

  // ── Confidence ──

  static Future<({int contentIndex, int cyclePosition, int cycleTotal, bool canViewToday, String? todayQuote, int todayContentIndex})> confidenceState(
    int totalCount,
  ) async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    if (prefs.getString(_confDayKey) != today) {
      await prefs.setString(_confDayKey, today);
      await prefs.setInt(_confDayKey + '_used', 0);
    }
    final used = prefs.getInt(_confDayKey + '_used') ?? 0;
    final pos = prefs.getInt(_confPosKey) ?? 0;
    final content = await _contentAt(_catConfidence, totalCount, _confPosKey, _confGenKey);
    return (
      contentIndex: content,
      cyclePosition: pos % totalCount,
      cycleTotal: totalCount,
      canViewToday: used < confidenceDailyLimit,
      todayQuote: prefs.getString(_confTodayQuoteKey),
      todayContentIndex: prefs.getInt(_confTodayContentKey) ?? -1,
    );
  }

  static Future<({String quote, int contentIndex, int cyclePosition})?> consumeConfidenceQuote(
    String quote,
    int contentIndex,
    int totalCount,
  ) async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    if (prefs.getString(_confDayKey) != today) {
      await prefs.setString(_confDayKey, today);
      await prefs.setInt(_confDayKey + '_used', 0);
    }
    final used = prefs.getInt(_confDayKey + '_used') ?? 0;
    if (used >= confidenceDailyLimit) return null;
    await prefs.setInt(_confDayKey + '_used', used + 1);
    await prefs.setString(_confTodayQuoteKey, quote);
    await prefs.setInt(_confTodayContentKey, contentIndex);
    await prefs.setBool(_confEverKey, true);
    final posBefore = prefs.getInt(_confPosKey) ?? 0;
    await _advanceDeck(_catConfidence, totalCount, _confPosKey, _confGenKey);
    return (quote: quote, contentIndex: contentIndex, cyclePosition: posBefore);
  }

  static Future<bool> hasConfidenceTodayQuote() async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    return prefs.getString(_confDayKey) == today && (prefs.getString(_confTodayQuoteKey)?.isNotEmpty ?? false);
  }

  static Future<String?> todayConfidenceQuote() async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    if (prefs.getString(_confDayKey) != today) return null;
    return prefs.getString(_confTodayQuoteKey);
  }

  static Future<bool> hasUsedConfidenceEver() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(_confEverKey) ?? false;
  }

  // ── Brain / Riddles ──

  static Future<({int contentIndex, int remaining, int viewedToday})> riddleState(int totalCount) async {
    await _resetIfNewDay(_riddleDayKey, _riddleCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_riddleCountKey) ?? 0;
    final content = await _contentAt(_catRiddle, totalCount, _riddlePosKey, _riddleGenKey);
    return (
      contentIndex: content,
      remaining: (riddlesDailyLimit - viewed).clamp(0, riddlesDailyLimit),
      viewedToday: viewed,
    );
  }

  static Future<bool> canViewMoreRiddles() async {
    final prefs = await SharedPreferences.getInstance();
    await _resetIfNewDay(_riddleDayKey, _riddleCountKey);
    final viewed = prefs.getInt(_riddleCountKey) ?? 0;
    return viewed < riddlesDailyLimit;
  }

  static Future<int?> advanceRiddle(int totalCount) async {
    await _resetIfNewDay(_riddleDayKey, _riddleCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_riddleCountKey) ?? 0;
    if (viewed >= riddlesDailyLimit) return null;
    await prefs.setInt(_riddleCountKey, viewed + 1);
    return _advanceDeck(_catRiddle, totalCount, _riddlePosKey, _riddleGenKey);
  }

  // ── Fortune ──

  static Future<({int contentIndex, int remaining})> fortuneState(int totalCount) async {
    await _resetIfNewDay(_fortuneDayKey, _fortuneCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_fortuneCountKey) ?? 0;
    final content = await _contentAt(_catFortune, totalCount, _fortunePosKey, _fortuneGenKey);
    return (
      contentIndex: content,
      remaining: (fortuneDailyLimit - viewed).clamp(0, fortuneDailyLimit),
    );
  }

  static Future<({int contentIndex})?> consumeFortune(int totalCount) async {
    await _resetIfNewDay(_fortuneDayKey, _fortuneCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_fortuneCountKey) ?? 0;
    if (viewed >= fortuneDailyLimit) return null;
    await prefs.setInt(_fortuneCountKey, viewed + 1);
    final current = await _contentAt(_catFortune, totalCount, _fortunePosKey, _fortuneGenKey);
    await _advanceDeck(_catFortune, totalCount, _fortunePosKey, _fortuneGenKey);
    return (contentIndex: current);
  }
}
