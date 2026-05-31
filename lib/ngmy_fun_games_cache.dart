import 'package:shared_preferences/shared_preferences.dart';

/// Persists Fun & Games UI choices locally so tabs/icons feel instant on reopen.
class NgmyFunGamesCache {
  static const _catKey = 'ngmy_fun_games_category';
  static const _loveTabKey = 'ngmy_fun_games_love_tab';
  static const _seenKey = 'ngmy_fun_games_seen_v1';

  static Future<({int category, int loveTab})> load() async {
    final prefs = await SharedPreferences.getInstance();
    return (
      category: (prefs.getInt(_catKey) ?? 0).clamp(0, 3),
      loveTab: (prefs.getInt(_loveTabKey) ?? 0).clamp(0, 3),
    );
  }

  static Future<void> saveCategory(int index) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_catKey, index.clamp(0, 3));
    await prefs.setBool(_seenKey, true);
  }

  static Future<void> saveLoveTab(int index) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt(_loveTabKey, index.clamp(0, 3));
  }

  static Future<bool> hasOpenedBefore() async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(_seenKey) ?? false;
  }
}
