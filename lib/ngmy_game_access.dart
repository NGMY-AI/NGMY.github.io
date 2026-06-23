import 'package:shared_preferences/shared_preferences.dart';



/// Games require an active investment — users without a plan get one free play total.

class NgmyGameAccess {

  static final Set<String> _sessionFreePlayConsumed = <String>{};



  static String _emailKey(String email) => email.toLowerCase().trim();



  static String _freePlayKey(String email) => 'ngmy_game_free_play_used_${_emailKey(email)}';



  /// Active paid investment plan (free trial does not unlock games).

  static bool hasActiveInvestment(dynamic user) {

    if (user.isAdmin == true) return true;

    final inv = user.activeInvestment;

    if (inv == null) return false;

    return (inv.daysLeft as int) > 0;

  }



  static bool sessionFreePlayConsumed(String email) =>

      _sessionFreePlayConsumed.contains(_emailKey(email));



  static Future<bool> freePlayUsed(String email) async {

    final key = _emailKey(email);

    if (key.isEmpty) return false;

    if (_sessionFreePlayConsumed.contains(key)) return true;

    final prefs = await SharedPreferences.getInstance();

    return prefs.getBool(_freePlayKey(key)) ?? false;

  }



  /// Marks the one free game as used — updates session immediately, persists async.

  static Future<void> markFreePlayUsed(String email) async {

    final key = _emailKey(email);

    if (key.isEmpty) return;

    _sessionFreePlayConsumed.add(key);

    final prefs = await SharedPreferences.getInstance();

    await prefs.setBool(_freePlayKey(key), true);

  }



  static Future<bool> canStartGame(dynamic user) async {

    if (hasActiveInvestment(user)) return true;

    final key = _emailKey(user.email as String);

    if (key.isEmpty) return false;

    if (_sessionFreePlayConsumed.contains(key)) return false;

    final prefs = await SharedPreferences.getInstance();

    return !(prefs.getBool(_freePlayKey(key)) ?? false);

  }

}


