import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Bumped after wallet balance changes so pushed game routes repaint instantly.
final ValueNotifier<int> ngmyBalanceTick = ValueNotifier<int>(0);

void ngmyNotifyBalanceChanged() {
  ngmyBalanceTick.value++;
}

/// Reads [balanceOf] on every balance tick — fixes in-place UserData mutation not triggering rebuilds.
class NgmyLiveBalance extends StatelessWidget {
  final double Function() balanceOf;
  final TextStyle? style;
  final TextAlign? textAlign;
  final bool showDollarSign;

  const NgmyLiveBalance({
    super.key,
    required this.balanceOf,
    this.style,
    this.textAlign,
    this.showDollarSign = true,
  });

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder<int>(
      valueListenable: ngmyBalanceTick,
      builder: (context, _, __) {
        final formatted = _formatBalance(balanceOf());
        return Text(
          showDollarSign ? '\$$formatted' : formatted,
          style: style,
          textAlign: textAlign,
        );
      },
    );
  }

  static String _formatBalance(double amount) {
    String str = amount.toStringAsFixed(2);
    final parts = str.split('.');
    final reg = RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))');
    parts[0] = parts[0].replaceAllMapped(reg, (m) => '${m[1]},');
    return parts.join('.');
  }
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
