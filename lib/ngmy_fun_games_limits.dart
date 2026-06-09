import 'package:shared_preferences/shared_preferences.dart';

/// Daily limits and cycle indices for Fun & Games (Confidence, Brain, Fortune).
class NgmyFunGamesLimits {
  static const _confDayKey = 'ngmy_fg_conf_day';
  static const _confIndexKey = 'ngmy_fg_conf_index';
  static const _confTodayQuoteKey = 'ngmy_fg_conf_today_quote';
  static const _confTodayIndexKey = 'ngmy_fg_conf_today_index';
  static const _confEverKey = 'ngmy_fg_conf_ever';

  static const _riddleDayKey = 'ngmy_fg_riddle_day';
  static const _riddleCountKey = 'ngmy_fg_riddle_count';
  static const _riddleIndexKey = 'ngmy_fg_riddle_index';

  static const _fortuneDayKey = 'ngmy_fg_fortune_day';
  static const _fortuneCountKey = 'ngmy_fg_fortune_count';
  static const _fortuneIndexKey = 'ngmy_fg_fortune_index';

  static const confidenceDailyLimit = 1;
  static const riddlesDailyLimit = 15;
  static const fortuneDailyLimit = 1;

  static String _dayKey(DateTime d) => '${d.year}-${d.month}-${d.day}';

  static Future<void> _resetIfNewDay(String dayKey, String countKey) async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    if (prefs.getString(dayKey) != today) {
      await prefs.setString(dayKey, today);
      await prefs.setInt(countKey, 0);
    }
  }

  // ── Confidence ──

  static Future<({int cycleIndex, bool canViewToday, String? todayQuote, int todayIndex})> confidenceState() async {
    final prefs = await SharedPreferences.getInstance();
    final today = _dayKey(DateTime.now());
    if (prefs.getString(_confDayKey) != today) {
      await prefs.setString(_confDayKey, today);
      await prefs.setInt(_confDayKey + '_used', 0);
    }
    final used = prefs.getInt(_confDayKey + '_used') ?? 0;
    return (
      cycleIndex: prefs.getInt(_confIndexKey) ?? 0,
      canViewToday: used < confidenceDailyLimit,
      todayQuote: prefs.getString(_confTodayQuoteKey),
      todayIndex: prefs.getInt(_confTodayIndexKey) ?? -1,
    );
  }

  static Future<({String quote, int index})?> consumeConfidenceQuote(String quote, int index) async {
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
    await prefs.setInt(_confTodayIndexKey, index);
    await prefs.setInt(_confIndexKey, (index + 1));
    await prefs.setBool(_confEverKey, true);
    return (quote: quote, index: index);
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

  static Future<({int index, int remaining, int viewedToday})> riddleState() async {
    await _resetIfNewDay(_riddleDayKey, _riddleCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_riddleCountKey) ?? 0;
    return (
      index: prefs.getInt(_riddleIndexKey) ?? 0,
      remaining: (riddlesDailyLimit - viewed).clamp(0, riddlesDailyLimit),
      viewedToday: viewed,
    );
  }

  static Future<bool> canViewMoreRiddles() async {
    final s = await riddleState();
    return s.remaining > 0;
  }

  static Future<int?> advanceRiddle(int currentIndex) async {
    await _resetIfNewDay(_riddleDayKey, _riddleCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_riddleCountKey) ?? 0;
    if (viewed >= riddlesDailyLimit) return null;
    await prefs.setInt(_riddleCountKey, viewed + 1);
    final next = currentIndex + 1;
    await prefs.setInt(_riddleIndexKey, next);
    return next;
  }

  // ── Fortune ──

  static Future<({int index, int remaining})> fortuneState() async {
    await _resetIfNewDay(_fortuneDayKey, _fortuneCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_fortuneCountKey) ?? 0;
    return (
      index: prefs.getInt(_fortuneIndexKey) ?? 0,
      remaining: (fortuneDailyLimit - viewed).clamp(0, fortuneDailyLimit),
    );
  }

  static Future<({int index})?> consumeFortune() async {
    await _resetIfNewDay(_fortuneDayKey, _fortuneCountKey);
    final prefs = await SharedPreferences.getInstance();
    final viewed = prefs.getInt(_fortuneCountKey) ?? 0;
    if (viewed >= fortuneDailyLimit) return null;
    await prefs.setInt(_fortuneCountKey, viewed + 1);
    final idx = prefs.getInt(_fortuneIndexKey) ?? 0;
    await prefs.setInt(_fortuneIndexKey, idx + 1);
    return (index: idx);
  }
}
