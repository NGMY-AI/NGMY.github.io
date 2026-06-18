import 'package:shared_preferences/shared_preferences.dart';

/// Games require an active investment — users without a plan get one free play total.
class NgmyGameAccess {
  static String _freePlayKey(String email) =>
      'ngmy_game_free_play_used_${email.toLowerCase().trim()}';

  static bool hasActiveInvestment(dynamic user) {
    if (user.isAdmin == true) return true;
    if (user.isOnFreeTrial == true) return true;
    final inv = user.activeInvestment;
    if (inv == null) return false;
    return (inv.daysLeft as int) > 0;
  }

  static Future<bool> freePlayUsed(String email) async {
    final key = email.trim().toLowerCase();
    if (key.isEmpty) return false;
    final prefs = await SharedPreferences.getInstance();
    return prefs.getBool(_freePlayKey(key)) ?? false;
  }

  static Future<void> markFreePlayUsed(String email) async {
    final key = email.trim().toLowerCase();
    if (key.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_freePlayKey(key), true);
  }

  static Future<bool> canStartGame(dynamic user) async {
    if (hasActiveInvestment(user)) return true;
    return !(await freePlayUsed(user.email as String));
  }
}
