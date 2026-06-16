import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Bumped after wallet balance changes so all screens repaint instantly.
final ValueNotifier<int> ngmyBalanceTick = ValueNotifier<int>(0);

/// Authoritative live balance per user email (lowercase). Updated on every ledger change.
final ValueNotifier<Map<String, double>> ngmyLiveBalanceCache = ValueNotifier<Map<String, double>>({});

String _ngmyEmailKey(String email) => email.toLowerCase().trim();

void ngmySeedLiveBalance(String email, double balance) {
  final key = _ngmyEmailKey(email);
  if (key.isEmpty) return;
  final next = Map<String, double>.from(ngmyLiveBalanceCache.value);
  next[key] = balance;
  ngmyLiveBalanceCache.value = next;
}

void ngmyNotifyBalanceChanged({String? email, double? balance}) {
  if (email != null && balance != null) {
    ngmySeedLiveBalance(email, balance);
  }
  ngmyBalanceTick.value++;
}

/// Keep live balance cache aligned with a ledger balance value.
void ngmySyncLiveBalanceFor(String email, double balance) {
  ngmyNotifyBalanceChanged(email: email, balance: balance);
}

double ngmyLiveBalanceFor(String email, {double Function()? fallback}) {
  final key = _ngmyEmailKey(email);
  if (key.isNotEmpty) {
    final cached = ngmyLiveBalanceCache.value[key];
    if (cached != null) return cached;
  }
  return fallback?.call() ?? 0.0;
}

Listenable get ngmyLiveBalanceListenable =>
    Listenable.merge([ngmyBalanceTick, ngmyLiveBalanceCache]);

/// Balance text that updates instantly on every wallet change (home, Game Center, games).
class NgmyLiveBalance extends StatelessWidget {
  final String userEmail;
  final double Function()? fallback;
  final TextStyle? style;
  final TextAlign? textAlign;
  final bool showDollarSign;

  const NgmyLiveBalance({
    super.key,
    required this.userEmail,
    this.fallback,
    this.style,
    this.textAlign,
    this.showDollarSign = true,
  });

  @override
  Widget build(BuildContext context) {
    return ListenableBuilder(
      listenable: ngmyLiveBalanceListenable,
      builder: (context, _) {
        final amount = ngmyLiveBalanceFor(userEmail, fallback: fallback);
        final formatted = _formatBalance(amount);
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
