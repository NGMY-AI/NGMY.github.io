// Signal Grid alerts: a notification when a market says ENTER UP or ENTER DOWN right now.
//
// Who gets them: NGMY admins always; members once they have finished every Trading Academy lesson
// (the server decides, from the saved lesson progress).
// How: like the app's other notifications, this watcher runs inside the app (open or in the background)
// and checks the live signals once a minute. Only "enter now" signals with a clear direction, still early,
// and that worked at least half the time lately on that market (see entryNow on the server).

import 'dart:async';

import 'ngmy_edge_invoke.dart';
import 'ngmy_push_notifications.dart';

class NgmySignalAlerts {
  NgmySignalAlerts._();

  static Timer? _timer;
  static DateTime _nextEligibilityCheck = DateTime.fromMillisecondsSinceEpoch(0);
  static bool _allowed = false;
  static bool _busy = false;
  static final Map<String, DateTime> _sent = {};

  /// Starts once per app run; calling it again does nothing.
  static void start() {
    if (_timer != null) return;
    _timer = Timer.periodic(const Duration(seconds: 60), (_) => unawaited(_tick()));
    Future<void>.delayed(const Duration(seconds: 20), () => unawaited(_tick()));
  }

  /// Ask again now (for example right after the last lesson is finished).
  static void recheck() {
    _nextEligibilityCheck = DateTime.fromMillisecondsSinceEpoch(0);
    unawaited(_tick());
  }

  static Future<void> _tick() async {
    if (_busy) return;
    // Not allowed yet: only ask the server every 10 minutes.
    if (!_allowed && DateTime.now().isBefore(_nextEligibilityCheck)) return;
    _busy = true;
    try {
      final res = await ngmyEdgeInvoke({'action': 'paSignals', 'light': true}, timeout: const Duration(seconds: 40));
      if (res == null || res['ok'] != true) {
        _nextEligibilityCheck = DateTime.now().add(const Duration(minutes: 10));
        return;
      }
      _allowed = res['alertsAllowed'] == true;
      if (!_allowed) {
        _nextEligibilityCheck = DateTime.now().add(const Duration(minutes: 10));
        return;
      }
      if (!await ngmyPushHasPermission()) return;
      // Only markets the agent may buy right now: the 10 stocks on weekdays while the stock market is open, the 4 coins on weekends.
      // The server marks every other market as not traded, so it can never say ENTER. Forex is not alerted.
      final all = ((res['markets'] as List?) ?? const []).whereType<Map>().where((m) => m['open'] == true);
      var shown = 0;
      for (final m in all) {
        final reading = m['reading'];
        final entry = reading is Map ? reading['entry'] : null;
        if (entry is! Map) continue;
        final sym = '${m['symbol'] ?? ''}';
        final up = entry['dir'] == 'up';
        final key = '$sym|${entry['dir']}';
        final last = _sent[key];
        // One alert per market and direction every 20 minutes.
        if (last != null && DateTime.now().difference(last) < const Duration(minutes: 20)) continue;
        _sent[key] = DateTime.now();
        await ngmyPushShow(
          title: '${up ? '▲ ENTER UP (BUY)' : '▼ ENTER DOWN (SELL)'} $sym',
          body: 'Enter at the start of the next ${entry['candleMin'] ?? 1}-minute candle · trade for ${entry['durationMin']} min · '
              'worked ${entry['worked']} of ${entry['of']} times lately. Signals can fail.',
          tag: 'signal_${sym.replaceAll('/', '')}',
        );
        if (++shown >= 3) break;
      }
      _sent.removeWhere((_, t) => DateTime.now().difference(t) > const Duration(hours: 2));
    } catch (_) {
      // Never break the app over an alert.
    } finally {
      _busy = false;
    }
  }
}
