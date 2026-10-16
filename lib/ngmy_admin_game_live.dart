import 'dart:async';

import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_dice_config.dart';
import 'ngmy_game_notifications.dart';

/// One player's live numbers, as the admin sees them.
class NgmyLivePlayerStats {
  const NgmyLivePlayerStats({
    required this.email,
    required this.games,
    required this.won,
    required this.plus3Wins,
    required this.lastPlay,
    required this.winsLeft,
    required this.winStreak,
    required this.loseStreak,
  });

  final String email;
  final int games;
  final int won;
  final int plus3Wins;
  final DateTime? lastPlay;
  final int winsLeft;
  final int winStreak;
  final int loseStreak;

  int get lost => games - won;

  /// Builds the numbers for one account from its receipts and the shared dice rules.
  static NgmyLivePlayerStats from(String email, List<NgmyGameNotification> receipts, NgmyDiceSettings? dice) {
    final key = ngmyNormalizeEmailForNotifications(email);
    DateTime? last;
    var won = 0;
    var plus3 = 0;
    for (final r in receipts) {
      if (r.won) won++;
      // A +3 win's receipt carries the bonus line.
      if (r.won && r.detail.toLowerCase().contains('bonus')) plus3++;
      if (last == null || r.timestamp.isAfter(last)) last = r.timestamp;
    }
    var winsLeft = 0;
    var ws = 0;
    var ls = 0;
    if (dice != null) {
      for (final g in dice.userGrants) {
        if (ngmyNormalizeEmailForNotifications((g['email'] ?? '').toString()) == key) {
          winsLeft = (g['winsLeft'] as num?)?.toInt() ?? 0;
          break;
        }
      }
      for (final p in dice.playerState) {
        if (ngmyNormalizeEmailForNotifications((p['email'] ?? '').toString()) == key) {
          ws = (p['winStreak'] as num?)?.toInt() ?? 0;
          ls = (p['loseStreak'] as num?)?.toInt() ?? 0;
          break;
        }
      }
    }
    return NgmyLivePlayerStats(
      email: key,
      games: receipts.length,
      won: won,
      plus3Wins: plus3,
      lastPlay: last,
      winsLeft: winsLeft,
      winStreak: ws,
      loseStreak: ls,
    );
  }
}

/// Admin → Game Center → Live. Shows each player's plays, wins, losses and +3 wins as
/// they happen. Updates from the database's realtime feed when it is on, and polls
/// every [_kPoll] as a guarantee.
class NgmyAdminGameLiveBoard extends StatefulWidget {
  const NgmyAdminGameLiveBoard({super.key, required this.emails, this.nameOf, this.isDark = true});

  final List<String> emails;
  final String Function(String email)? nameOf;
  final bool isDark;

  @override
  State<NgmyAdminGameLiveBoard> createState() => _NgmyAdminGameLiveBoardState();
}

class _NgmyAdminGameLiveBoardState extends State<NgmyAdminGameLiveBoard> {
  static const Duration _kPoll = Duration(seconds: 8);
  static const String _kReceiptPrefix = 'ngmy_game_receipts_';

  final Map<String, List<NgmyGameNotification>> _receipts = {};
  NgmyDiceSettings? _dice;
  RealtimeChannel? _channel;
  Timer? _timer;
  bool _loading = true;
  bool _polling = false;

  @override
  void initState() {
    super.initState();
    unawaited(_refreshAll());
    _subscribe();
    _timer = Timer.periodic(_kPoll, (_) => unawaited(_refreshAll()));
  }

  @override
  void didUpdateWidget(covariant NgmyAdminGameLiveBoard oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.emails.length != widget.emails.length) unawaited(_refreshAll());
  }

  @override
  void dispose() {
    _timer?.cancel();
    final ch = _channel;
    _channel = null;
    if (ch != null) unawaited(Supabase.instance.client.removeChannel(ch));
    super.dispose();
  }

  void _subscribe() {
    try {
      _channel = Supabase.instance.client
          .channel('ngmy-admin-game-live')
          .onPostgresChanges(
            event: PostgresChangeEvent.all,
            schema: 'public',
            table: 'ngmy_settings',
            callback: _onSettingsChange,
          )
          .subscribe();
    } catch (e) {
      debugPrint('[admin live] realtime: $e');
    }
  }

  /// A saved receipt list or the dice row changed: apply it right away, no waiting.
  void _onSettingsChange(PostgresChangePayload payload) {
    if (!mounted) return;
    final rec = payload.newRecord;
    final key = (rec['key'] ?? '').toString();
    final value = rec['value'];
    if (key == kNgmyDiceLiveSettingsKey) {
      if (value is Map) {
        setState(() => _dice = NgmyDiceSettings.fromJson(Map<String, dynamic>.from(value)));
      }
      return;
    }
    if (key.startsWith(_kReceiptPrefix) && value is List) {
      final email = key.substring(_kReceiptPrefix.length);
      final items = value
          .whereType<Map>()
          .map((e) => NgmyGameNotification.fromJson(Map<String, dynamic>.from(e)))
          .toList();
      setState(() => _receipts[email] = items);
    }
  }

  Future<void> _refreshAll() async {
    if (_polling || !mounted) return;
    _polling = true;
    try {
      final diceRaw = await ngmyDbRelaySettingsFetch(kNgmyDiceLiveSettingsKey, timeout: const Duration(seconds: 6), fresh: true);
      final dice = (diceRaw == null || diceRaw.isEmpty) ? null : NgmyDiceSettings.fromJson(diceRaw);
      // Fetch receipts in small batches so a long player list does not flood the connection.
      final keys = widget.emails.map(ngmyNormalizeEmailForNotifications).where((e) => e.isNotEmpty).toSet().toList();
      for (var i = 0; i < keys.length; i += 8) {
        final batch = keys.skip(i).take(8);
        await Future.wait(batch.map((k) async {
          try {
            final raw = await ngmyDbRelaySettingsFetchRaw('$_kReceiptPrefix$k', timeout: const Duration(seconds: 8));
            if (raw is List) {
              _receipts[k] = raw
                  .whereType<Map>()
                  .map((e) => NgmyGameNotification.fromJson(Map<String, dynamic>.from(e)))
                  .toList();
            }
          } catch (_) {}
        }));
      }
      if (!mounted) return;
      setState(() {
        _dice = dice ?? _dice;
        _loading = false;
      });
    } catch (e) {
      debugPrint('[admin live] refresh: $e');
      if (mounted) setState(() => _loading = false);
    } finally {
      _polling = false;
    }
  }

  @override
  Widget build(BuildContext context) {
    final dark = widget.isDark;
    final ink = dark ? Colors.white : Colors.black87;
    final muted = dark ? Colors.white60 : Colors.black54;
    final dice = _dice;

    final players = <NgmyLivePlayerStats>[];
    for (final e in _receipts.entries) {
      final stats = NgmyLivePlayerStats.from(e.key, e.value, dice);
      if (stats.games > 0) players.add(stats);
    }
    players.sort((a, b) {
      final ta = a.lastPlay?.millisecondsSinceEpoch ?? 0;
      final tb = b.lastPlay?.millisecondsSinceEpoch ?? 0;
      return tb.compareTo(ta);
    });

    final totalGames = players.fold<int>(0, (s, p) => s + p.games);
    final totalWon = players.fold<int>(0, (s, p) => s + p.won);
    final plus3Used = dice?.plus3UsedToday ?? 0;
    final plus3Limit = dice?.plus3DailyLimit ?? 0;
    final plus3Full = plus3Limit > 0 && plus3Used >= plus3Limit;

    return ListView(
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 24),
      children: [
        Row(children: [
          _stat('PLAYS', '$totalGames', const Color(0xFFC4B5FD), dark),
          const SizedBox(width: 8),
          _stat('WINS', '$totalWon', const Color(0xFF6EE7B7), dark),
          const SizedBox(width: 8),
          _stat('LOSSES', '${totalGames - totalWon}', const Color(0xFFFCA5A5), dark),
        ]),
        const SizedBox(height: 8),
        Container(
          padding: const EdgeInsets.all(12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: plus3Full ? const Color(0x33F59E0B) : (dark ? Colors.white10 : Colors.black12),
          ),
          child: Row(children: [
            Icon(Icons.bolt_rounded, color: plus3Full ? Colors.orange : muted, size: 20),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                plus3Limit == 0
                    ? '+3 today: not set'
                    : '+3 used today: $plus3Used of $plus3Limit${plus3Full ? ' — all used' : ''}',
                style: TextStyle(color: ink, fontWeight: FontWeight.w800),
              ),
            ),
          ]),
        ),
        const SizedBox(height: 12),
        if (_loading)
          Padding(
            padding: const EdgeInsets.all(24),
            child: Center(child: CircularProgressIndicator(color: muted)),
          )
        else if (players.isEmpty)
          Padding(
            padding: const EdgeInsets.all(24),
            child: Text('No plays yet. Plays show up here as they happen.',
                textAlign: TextAlign.center, style: TextStyle(color: muted)),
          )
        else
          for (final p in players) _playerCard(p, ink, muted, dark),
      ],
    );
  }

  Widget _playerCard(NgmyLivePlayerStats p, Color ink, Color muted, bool dark) {
    final name = widget.nameOf?.call(p.email) ?? p.email;
    final streak = p.winStreak > 0
        ? 'Win streak ${p.winStreak}'
        : (p.loseStreak > 0 ? 'Lose streak ${p.loseStreak}' : 'No streak');
    final last = p.lastPlay == null ? '—' : ngmyFormatGameNotificationWhen(p.lastPlay!);
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(14),
        color: dark ? Colors.white.withValues(alpha: 0.05) : Colors.white,
        border: Border.all(color: dark ? Colors.white12 : Colors.black12),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(name, maxLines: 1, overflow: TextOverflow.ellipsis,
              style: TextStyle(color: ink, fontWeight: FontWeight.w900)),
          Text(p.email, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: muted, fontSize: 11)),
          const SizedBox(height: 8),
          Row(children: [
            _mini('PLAYS', '${p.games}', ink, muted),
            _mini('WON', '${p.won}', const Color(0xFF6EE7B7), muted),
            _mini('LOST', '${p.lost}', const Color(0xFFFCA5A5), muted),
            _mini('+3 WINS', '${p.plus3Wins}', const Color(0xFFFBBF24), muted),
            _mini('WINS LEFT', '${p.winsLeft}', ink, muted),
          ]),
          const SizedBox(height: 6),
          Text('$streak · last play $last', style: TextStyle(color: muted, fontSize: 11)),
        ],
      ),
    );
  }

  static Widget _stat(String label, String value, Color color, bool dark) => Expanded(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(
            color: color.withValues(alpha: 0.1),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: color.withValues(alpha: 0.4)),
          ),
          child: Column(children: [
            Text(label, style: TextStyle(color: dark ? Colors.white60 : Colors.black54, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 1)),
            const SizedBox(height: 2),
            FittedBox(child: Text(value, style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 18))),
          ]),
        ),
      );

  static Widget _mini(String label, String value, Color valueColor, Color muted) => Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: TextStyle(color: muted, fontSize: 8.5, fontWeight: FontWeight.w900, letterSpacing: 0.6)),
            FittedBox(
              fit: BoxFit.scaleDown,
              alignment: Alignment.centerLeft,
              child: Text(value, style: TextStyle(color: valueColor, fontWeight: FontWeight.w900, fontSize: 13)),
            ),
          ],
        ),
      );
}
