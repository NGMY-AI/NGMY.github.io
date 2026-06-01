/// Tracks active Game Center play so unrelated app notifications stay quiet.
class NgmyGameSession {
  static int _depth = 0;
  static String? activeGameId;
  static String? activeGameTitle;

  static bool get suppressExternalNotifications => _depth > 0;

  static void _enter(String gameId, String gameTitle) {
    _depth++;
    activeGameId = gameId;
    activeGameTitle = gameTitle;
  }

  static void _leave() {
    if (_depth > 0) _depth--;
    if (_depth <= 0) {
      _depth = 0;
      activeGameId = null;
      activeGameTitle = null;
    }
  }

  static void enterBetScreen(String gameId, String gameTitle) => _enter(gameId, gameTitle);

  static void leaveBetScreen() => _leave();

  static void enterPlayScreen(String gameId, String gameTitle) => _enter(gameId, gameTitle);

  static void leavePlayScreen() => _leave();
}

typedef NgmyGameWinNotifier = Future<void> Function(String gameTitle, String body);

NgmyGameWinNotifier? ngmyOnGameWinNotify;

Future<void> ngmyNotifyGameWin(String gameTitle, String body) async {
  await ngmyOnGameWinNotify?.call(gameTitle, body);
}
