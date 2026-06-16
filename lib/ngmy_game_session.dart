import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

/// Bumped after wallet balance changes so pushed game routes repaint instantly.
final ValueNotifier<int> ngmyBalanceTick = ValueNotifier<int>(0);

void ngmyNotifyBalanceChanged() {
  ngmyBalanceTick.value++;
}

/// Listen for [ngmyBalanceTick] and rebuild — use on game/home screens that show balance.
mixin NgmyBalanceListener<T extends StatefulWidget> on State<T> {
  @override
  void initState() {
    super.initState();
    ngmyBalanceTick.addListener(_onNgmyBalanceTick);
  }

  void _onNgmyBalanceTick() {
    if (mounted) setState(() {});
  }

  @override
  void dispose() {
    ngmyBalanceTick.removeListener(_onNgmyBalanceTick);
    super.dispose();
  }
}

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

/// Fires when the player wins (after the in-game popup). Wired from the app shell for push/in-app alerts.
Future<void> ngmyNotifyGameWin(String gameTitle, String body) async {
  final notify = ngmyOnGameWinNotify;
  if (notify != null) {
    await notify(gameTitle, body);
  }
}
