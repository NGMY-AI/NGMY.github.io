// Signal Grid — Alpaca PAPER trading agent, Version 1 (read-only).
//
// This screen is only the control panel. The agent itself runs on the server (bright-handler, called every
// 5 minutes by Supabase pg_cron), so it keeps going when the phone is off. The Alpaca keys live only in
// Supabase secrets and never reach this app. Version 1 places no orders: it logs what it WOULD do with a
// $100 trade ($100 of a stock on weekdays, of a coin on weekends).

import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_edge_invoke.dart';
import 'ngmy_push_notifications.dart';
import 'ngmy_signal_alerts.dart';

part 'ngmy_signal_grid_learn.dart';
part 'ngmy_signal_grid_quiz.dart';
part 'ngmy_signal_grid_fast.dart';

const _up = Color(0xFF1FBF97); // rising candles, wins
const _down = Color(0xFFF2C14E); // falling candles
const _loss = Color(0xFFF0566A); // money lost
const _fastC = Color(0xFFEC4899);
const _slowC = Color(0xFF8B5CF6);
const _btc = Color(0xFFF7931A);
const _spy = Color(0xFF6366F1);

Future<void> showNgmySignalGridAgent(BuildContext context) => Navigator.of(context).push(
      MaterialPageRoute<void>(builder: (_) => const NgmySignalGridAgentScreen()),
    );

class NgmySignalGridAgentScreen extends StatefulWidget {
  const NgmySignalGridAgentScreen({super.key, this.previewStatus, this.previewLog});

  /// Sample data for a design preview test; the real screen always asks the server.
  @visibleForTesting
  final Map<String, dynamic>? previewStatus;
  @visibleForTesting
  final List<Map<String, dynamic>>? previewLog;

  @override
  State<NgmySignalGridAgentScreen> createState() => _NgmySignalGridAgentScreenState();
}

class _NgmySignalGridAgentScreenState extends State<NgmySignalGridAgentScreen> {
  Map<String, dynamic>? _status;
  List<Map<String, dynamic>> _log = [];
  bool _loading = true;
  bool _busy = false;
  bool _moreLog = true;
  bool _showAllLog = false;
  bool _showAllTrades = false;
  int _range = 48; // candles shown: 12 = 1 h, 24 = 2 h, 48 = 4 h
  String? _selected; // market tapped in the strip (remembered on the phone)
  final _stripScroll = ScrollController();
  bool _stripPlaced = false;
  bool _lines = true;
  String? _error;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _TutorChat.enter(); // the tutor conversation lasts until Signal Grid is closed
    if (widget.previewStatus != null) {
      _status = widget.previewStatus;
      _log = widget.previewLog ?? [];
      _loading = false;
      return;
    }
    unawaited(_loadPicked());
    // Fast open: the last screen saved on this phone shows at once, then the server's saved snapshot (quick),
    // then the live prices in the background.
    unawaited(_loadCached());
    unawaited(_reload(live: false).then((_) {
      if (mounted) unawaited(_reload(live: true));
    }));
    _timer = Timer.periodic(const Duration(seconds: 60), (_) => unawaited(_reload(live: true)));
  }

  static const _cacheKey = 'ngmy_signal_grid_status_cache';

  Future<void> _loadCached() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_cacheKey);
      if (raw == null || !mounted || _status != null) return;
      final cached = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      setState(() {
        _status = cached;
        _loading = false;
      });
    } catch (_) {}
  }

  Future<void> _saveCached(Map<String, dynamic> res) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_cacheKey, jsonEncode(res));
    } catch (_) {}
  }

  @override
  void dispose() {
    _timer?.cancel();
    _stripScroll.dispose();
    _TutorChat.leave();
    super.dispose();
  }

  static const _pickedKey = 'ngmy_signal_grid_market';

  /// Once, after opening: slide the market cards so the chosen market is in view.
  ScrollController _placeStrip(int index) {
    if (!_stripPlaced && index > 0) {
      _stripPlaced = true;
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (_stripScroll.hasClients) {
          _stripScroll.jumpTo(math.min(index * 160.0 - 16, _stripScroll.position.maxScrollExtent).clamp(0.0, double.infinity));
        }
      });
    }
    return _stripScroll;
  }

  /// The market chosen last time, so the screen opens where it was left (even after closing the app).
  Future<void> _loadPicked() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final v = prefs.getString(_pickedKey);
      if (v != null && v.isNotEmpty && mounted && _selected == null) setState(() => _selected = v);
    } catch (_) {}
  }

  Future<void> _pickMarket(String sym) async {
    setState(() => _selected = sym);
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_pickedKey, sym);
    } catch (_) {}
  }

  Future<void> _reload({bool live = false}) async {
    // The status and the activity log are asked for at the same time (they used to wait for each other).
    final logF = _showAllLog ? null : _fetchLog();
    final res = await ngmyEdgeInvoke({'action': 'paStatus', 'live': live}, timeout: const Duration(seconds: 40));
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res != null && res['ok'] == true) {
        _status = res;
        _error = null;
      } else {
        _error = (res?['error'] ?? 'Could not reach the server. Pull down to try again.').toString();
        if (res?['ownerOnly'] == true || res?['setupNeeded'] == true) _status = null;
      }
    });
    if (res != null && res['ok'] == true) unawaited(_saveCached(res));
    if (logF != null) {
      final rows = await logF;
      if (mounted && rows != null && _status != null) {
        setState(() {
          _log = rows;
          _moreLog = rows.length >= _logPage;
        });
      }
    }
  }

  /// Activity lines come in pages of 30 (the screen shows 4, Show all reveals the rest).
  static const _logPage = 30;

  Future<List<Map<String, dynamic>>?> _fetchLog({Object before = 0}) async {
    final res = await ngmyEdgeInvoke({'action': 'paLog', 'limit': _logPage, 'beforeId': before});
    if (res == null || res['ok'] != true) return null;
    return ((res['rows'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  }

  Future<void> _loadLog({bool more = false}) async {
    final before = more && _log.isNotEmpty ? _log.last['id'] : 0;
    final rows = await _fetchLog(before: before ?? 0);
    if (!mounted || rows == null) return;
    setState(() {
      _log = more ? [..._log, ...rows] : rows;
      _moreLog = rows.length >= _logPage;
    });
  }

  Future<void> _setEnabled(bool on) async {
    final st = _map(_status?['state']);
    if (on && st['brakePaused'] == true) {
      final ok = await showDialog<bool>(
        context: context,
        builder: (ctx) => AlertDialog(
          title: const Text('Turn the agent back on?'),
          content: const Text(
              'The \$100 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from \$0.'),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Turn back on')),
          ],
        ),
      );
      if (ok != true) return;
    }
    // The button changes at once; the server's answer (the full status) then confirms it.
    final before = _status;
    setState(() {
      _busy = true;
      if (_status != null) {
        _status = {
          ..._status!,
          'state': {..._map(_status!['state']), 'enabled': on, if (on) 'brakePaused': false},
        };
      }
    });
    final res = await ngmyEdgeInvoke({'action': 'paSet', 'enabled': on});
    if (!mounted) return;
    final ok = res?['ok'] == true;
    setState(() {
      _busy = false;
      if (ok && res!['state'] != null) {
        _status = res;
      } else if (!ok) {
        _status = before; // undo
      }
    });
    _snack(ok ? (on ? 'Agent started.' : 'Agent stopped.') : (res?['error'] ?? 'Could not change it.').toString(), ok ? _up : _loss);
    if (ok) unawaited(_loadLog());
  }

  void _openLearn() {
    Navigator.of(context).push(MaterialPageRoute<void>(
      builder: (_) => NgmySignalGridLearnScreen(initialStatus: _status, preview: widget.previewStatus != null),
    ));
  }

  /// "Check now" only LOOKS: a fresh read of every market. It never buys or sells; only the automatic
  /// 5-minute check on the server makes trades.
  Future<void> _scanNow() async {
    setState(() => _busy = true);
    final res = await ngmyEdgeInvoke({'action': 'paCheck'}, timeout: const Duration(seconds: 60));
    if (!mounted) return;
    setState(() {
      _busy = false;
      if (res != null && res['ok'] == true) _status = res;
    });
    if (res?['ok'] != true) {
      _snack((res?['error'] ?? 'The check did not finish.').toString(), _loss);
      return;
    }
    final p = _Pal(Theme.of(context).brightness == Brightness.light);
    final snap = _map(_map(res!['state'])['snapshot']);
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: p.bgTop,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
      builder: (ctx) => DraggableScrollableSheet(
        expand: false,
        initialChildSize: 0.8,
        maxChildSize: 0.95,
        builder: (ctx, scroll) => _scanSheet(p, snap, _map(res['state']), scroll),
      ),
    );
  }

  Widget _scanSheet(_Pal p, Map<String, dynamic> snap, Map<String, dynamic> st, ScrollController scroll) {
    final markets = _markets(snap)..sort((a, b) => _signalRank(a).compareTo(_signalRank(b)));
    return ListView(controller: scroll, padding: const EdgeInsets.fromLTRB(16, 10, 16, 30), children: [
      Center(child: Container(width: 40, height: 4, decoration: BoxDecoration(color: p.line, borderRadius: BorderRadius.circular(9)))),
      const SizedBox(height: 14),
      Text('What the agent sees right now', style: TextStyle(color: p.ink, fontSize: 19, fontWeight: FontWeight.w900)),
      const SizedBox(height: 4),
      Text('Check now only looks. It never buys or sells. Trades are made only by the automatic check every 5 minutes'
          '${st['enabled'] == true ? ' (next one ${_nextAuto()})' : ' (the agent is stopped, so none will be made)'}.',
          style: TextStyle(color: p.muted, fontSize: 12.5, height: 1.35)),
      const SizedBox(height: 12),
      for (final m in markets) _readingTile(p, m, compact: true),
    ]);
  }

  static double _signalRank(Map<String, dynamic> m) {
    final a = (_map(m['reading'])['action'] ?? '').toString();
    if (a.startsWith('ENTER UP')) return 0;
    if (a.startsWith('ENTER DOWN')) return 1;
    if (m['open'] != true) return 4;
    return 2 + (100 - _d(_map(m['reading'])['score'])) / 1000;
  }

  void _snack(String msg, Color c) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg), backgroundColor: c));
  }

  // ───────────────────────────────────────────────────────────── layout

  @override
  Widget build(BuildContext context) {
    final p = _Pal(Theme.of(context).brightness == Brightness.light);
    return Scaffold(
      backgroundColor: p.bgTop,
      body: Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.bgTop, p.bgBottom]),
        ),
        child: SafeArea(
          child: Column(children: [
            _topBar(p),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : RefreshIndicator(
                      onRefresh: () => _reload(live: true),
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(16, 4, 16, 40),
                        children: _status == null ? [_banner(p, _error ?? 'Nothing to show yet.', _slowC)] : _body(p),
                      ),
                    ),
            ),
          ]),
        ),
      ),
    );
  }

  Widget _topBar(_Pal p) {
    final st = _map(_status?['state']);
    final brake = st['brakePaused'] == true;
    final on = st['enabled'] == true && !brake;
    return Padding(
      padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
      child: Row(children: [
        _roundBtn(p, Icons.arrow_back_ios_new_rounded, () => Navigator.maybePop(context)),
        const SizedBox(width: 10),
        Expanded(
          child: Row(children: [
            Flexible(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Signal Grid', maxLines: 1, overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
                // Running, stopped or paused, on the small line under the title (saves room for the icons).
                if (_status == null)
                  Text('Trading agent', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 11.5))
                else
                  Row(mainAxisSize: MainAxisSize.min, children: [
                    Icon(Icons.circle, size: 7, color: brake ? _loss : on ? _up : p.muted),
                    const SizedBox(width: 4),
                    Flexible(
                      child: Text(brake ? 'Paused' : on ? 'Running' : 'Stopped', maxLines: 1, overflow: TextOverflow.ellipsis,
                          style: TextStyle(color: brake ? _loss : on ? _up : p.muted, fontSize: 11.5, fontWeight: FontWeight.w800)),
                    ),
                  ]),
              ]),
            ),
          ]),
        ),
        // The other systems, as two small icons on the right, next to the refresh button.
        if (_status != null) ...[
          const SizedBox(width: 8),
          _systemIcon(p, 'options', 'Options', Icons.bolt_rounded, const Color(0xFF7C3AED)),
          const SizedBox(width: 8),
          _systemIcon(p, 'scalper', 'Scalper', Icons.flash_on_rounded, const Color(0xFFF59E0B)),
        ],
        const SizedBox(width: 8),
        _roundBtn(p, Icons.refresh_rounded, _busy ? null : () => _reload(live: true)),
      ]),
    );
  }

  List<Widget> _body(_Pal p) {
    final s = _status!;
    final st = _map(s['state']);
    final cfg = _map(s['config']);
    final snap = _map(st['snapshot']);
    final shadow = st['shadow'] is Map ? _map(st['shadow']) : null;
    final markets = _markets(snap);
    // Today's watchlist (10 stocks on weekdays, all crypto every day), plus a market still held from before.
    final todays = markets.where((m) => m['today'] == true || m['asset'] == shadow?['symbol']).toList();
    final watch = todays.isEmpty ? markets : todays;
    // The market on show: the one tapped (if on today's list), else the one held, else the one the agent last looked at.
    final tapped = _selected != null && watch.any((m) => m['asset'] == _selected) ? _selected : null;
    final sel = tapped ?? (shadow?['symbol'] ?? snap['asset'])?.toString();
    final focus = watch.firstWhere((m) => m['asset'] == sel,
        orElse: () => markets.firstWhere((m) => m['asset'] == sel, orElse: () => watch.isEmpty ? snap : watch.first));
    final held = shadow == null ? null : markets.firstWhere((m) => m['asset'] == shadow['symbol'], orElse: () => focus);
    final heldShadow = shadow != null && shadow['symbol'] == focus['asset'] ? shadow : null;
    return [
      _marketStrip(p, s, watch, focus, shadow),
      _hero(p, s, focus),
      if ((cfg['problem'] ?? '').toString().isNotEmpty) _banner(p, cfg['problem'].toString(), _down),
      if ((s['liveError'] ?? '').toString().isNotEmpty) _banner(p, s['liveError'].toString(), _loss),
      if (st['brakePaused'] == true)
        _banner(p, 'Paused by the \$${_d(_map(s['ticket'])['totalBrakeUsd'] ?? 200).toStringAsFixed(0)} brake. ${st['brakeReason'] ?? ''}. Look over the trades, then press Start to turn it back on.', _loss),
      _chartCard(p, focus, heldShadow),
      _balanceCard(p, s, st, snap),
      if (s['pace'] is Map) _paceCard(p, s),
      if (shadow != null) _positionCard(p, shadow, held!, _map(s['ticket']), _map(snap['held'])),
      _controls(p, st),
      _autoLine(p, st, s),
      _tradesCard(p, s),
      _activityCard(p),
      _rulesCard(p, s),
      // Paper-only note, framed and compact.
      Container(
        margin: const EdgeInsets.only(top: 2, bottom: 6),
        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
        decoration: BoxDecoration(
          color: p.card,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: p.cardEdge),
        ),
        child: Row(children: [
          Icon(Icons.verified_user_rounded, size: 18, color: _up),
          const SizedBox(width: 8),
          Expanded(
            child: Text(
              'No order is ever sent to Alpaca. Order switch: ${cfg['ordersSwitchOn'] == true ? 'on' : 'off'}.',
              style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3),
            ),
          ),
        ]),
      ),
    ];
  }

  // ── Today's watchlist: 10 stocks on weekdays, all crypto every day, all watched at once

  Widget _todayMarket(_Pal p, Map<String, dynamic> s, Map<String, dynamic>? shadow) {
    final market = _map(s['market']);
    final activeList = ((market['activeMarkets'] as List?) ?? const []).map((e) => '$e').toList();
    final todayList = ((market['todaysList'] as List?) ?? const []).map((e) => '$e').toList();
    final weekend = market['weekend'] == true;
    final heldSym = shadow?['symbol']?.toString();
    final oldHeld = heldSym != null && todayList.isNotEmpty && !todayList.contains(heldSym);
    final String title;
    final String body;
    final coins = activeList.where((e) => e.contains('/')).length;
    final stocks = activeList.length - coins;
    if (activeList.isNotEmpty) {
      title = stocks > 0 ? 'TRADING NOW: 10 STOCKS + $coins CRYPTO' : 'TRADING NOW: ALL $coins CRYPTO';
      body = 'The 15 liquid crypto majors, around the clock${stocks > 0 ? ', plus the 10 stocks while the stock market is open' : weekend ? ' (stocks trade on weekdays)' : ' (the stocks trade 9:30 AM to 4:00 PM ET)'}. '
          'All of them are checked at the same time, every 5 minutes, and the agent buys the valid entry with the strongest 1-hour move. '
          'One trade at a time, at most 20 trades today (a maximum, never a target).';
    } else {
      title = 'NO MARKET TRADED RIGHT NOW';
      body = 'Crypto trades around the clock and the 10 stocks (${todayList.where((e) => !e.contains('/')).take(10).join(', ')}) while the stock market is open. The market list is loading.';
    }
    final active = activeList.isEmpty ? null : activeList.first;
    final c = active == null ? _down : _up;
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 16, 16, 16),
      decoration: BoxDecoration(
        color: p.card,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: c.withValues(alpha: 0.55)),
      ),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(active != null ? Icons.radar_rounded : Icons.nightlight_round, color: c, size: 26),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: TextStyle(color: c, fontSize: 13.5, fontWeight: FontWeight.w900, letterSpacing: 0.3)),
            const SizedBox(height: 3),
            Text(body, style: TextStyle(color: p.ink, fontSize: 12, height: 1.3)),
            const SizedBox(height: 3),
            Text('Buys only when the fast line crosses up AND the big trend is rising (slow line higher than 1 hour ago, price above it) AND the market moved +0.4% or more in the last hour.',
                style: TextStyle(color: p.muted, fontSize: 11, height: 1.3)),
            if (oldHeld) ...[
              const SizedBox(height: 4),
              Text('Still holding the $heldSym trade from before: the agent keeps checking its exits every 5 minutes.',
                  style: const TextStyle(color: _btc, fontSize: 11, fontWeight: FontWeight.w700, height: 1.3)),
            ],
          ]),
        ),
      ]),
    );
  }

  /// The "which market today" info as a popup in the middle of the screen (opened from the icon on the markets row).
  void _showTodayMarket(_Pal p, Map<String, dynamic> s, Map<String, dynamic>? shadow) {
    showDialog<void>(
      context: context,
      builder: (ctx) => Dialog(
        backgroundColor: Colors.transparent,
        insetPadding: const EdgeInsets.symmetric(horizontal: 24),
        child: Material(
          color: Colors.transparent,
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            _todayMarket(p, s, shadow),
            const SizedBox(height: 10),
            TextButton(
              onPressed: () => Navigator.of(ctx).pop(),
              style: TextButton.styleFrom(backgroundColor: p.card, shape: const StadiumBorder()),
              child: Text('Got it', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800)),
            ),
          ]),
        ),
      ),
    );
  }

  /// One of the other trading systems, as a small icon in the header next to "Signal Grid". This screen stays the
  /// landing page; a tap opens the system and back returns here. A dot shows running (green) or holding a trade (orange).
  Widget _systemIcon(_Pal p, String id, String name, IconData ic, Color c) {
    final systems = {for (final x in ((_map(_status?['fast'])['systems'] as List?) ?? const []).whereType<Map>()) '${x['id']}': _map(x)};
    final info = systems[id] ?? const <String, dynamic>{};
    final on = info['enabled'] == true;
    final holding = info['holding'] != null;
    return Tooltip(
      message: '$name${holding ? ' · holding ${info['holding']}' : on ? ' · running' : ' · stopped'}',
      child: Semantics(
        button: true,
        label: name,
        child: InkWell(
          borderRadius: BorderRadius.circular(11),
          onTap: () async {
            await Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyFastSystemScreen(system: id)));
            if (mounted) unawaited(_reload(live: false));
          },
          child: SizedBox(
            width: 34,
            height: 34,
            child: Stack(clipBehavior: Clip.none, children: [
              Container(
                width: 34,
                height: 34,
                decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(11)),
                child: Icon(ic, color: Colors.white, size: 20),
              ),
              if (on || holding)
                Positioned(
                  right: -2,
                  top: -2,
                  child: Container(
                    width: 11,
                    height: 11,
                    decoration: BoxDecoration(
                      color: holding ? _btc : _up,
                      shape: BoxShape.circle,
                      border: Border.all(color: p.bgTop, width: 2),
                    ),
                  ),
                ),
            ]),
          ),
        ),
      ),
    );
  }

  /// Each watchlist card's trend: green arrow up, red arrow down, grey hourglass while waiting
  /// (market closed, no data yet, or moving sideways).
  Widget _trendBadge(Map<String, dynamic> m) {
    final t = m['open'] == true ? (_map(m['chart'])['trend'] ?? m['trend'] ?? 'unknown').toString() : 'waiting';
    final (Color c, IconData icon, String label) = switch (t) {
      'up' => (_up, Icons.trending_up_rounded, 'up'),
      'down' => (_loss, Icons.trending_down_rounded, 'down'),
      _ => (const Color(0xFF94A3B8), Icons.hourglass_top_rounded, 'waiting'),
    };
    return Semantics(
      label: 'trend $label',
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
        decoration: BoxDecoration(color: c.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(6)),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(icon, size: 12, color: c),
          const SizedBox(width: 2),
          Text(label, style: TextStyle(color: c, fontSize: 9, fontWeight: FontWeight.w800)),
        ]),
      ),
    );
  }

  // ── Markets: all watched markets side by side, tap one to see it

  Widget _marketStrip(_Pal p, Map<String, dynamic> s, List<Map<String, dynamic>> markets, Map<String, dynamic> focus,
      Map<String, dynamic>? shadow) {
    if (markets.length < 2) return const SizedBox.shrink();
    final openCount = markets.where((m) => m['open'] == true).length;
    return Padding(
      padding: const EdgeInsets.only(bottom: 6),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 0, 4, 8),
          child: Row(children: [
            Text("Today's watchlist", style: TextStyle(color: p.ink, fontSize: 14, fontWeight: FontWeight.w800)),
            const SizedBox(width: 8),
            _pill(openCount == 0 ? 'NONE TRADED NOW' : '$openCount WATCHED NOW', openCount == 0 ? _down : _up),
            const SizedBox(width: 4),
            // Which market the agent trades today: tap for the popup.
            InkResponse(
              onTap: () => _showTodayMarket(p, s, shadow),
              radius: 20,
              child: Padding(
                padding: const EdgeInsets.all(4),
                child: Icon(Icons.info_outline_rounded, size: 19, color: openCount == 0 ? _down : _up),
              ),
            ),
            const Spacer(),
            Text('tap one', style: TextStyle(color: p.muted, fontSize: 11)),
          ]),
        ),
        SizedBox(
          height: 66,
          child: ListView.separated(
            controller: _placeStrip(markets.indexWhere((m) => m['asset'] == focus['asset'])),
            scrollDirection: Axis.horizontal,
            clipBehavior: Clip.none,
            itemCount: markets.length,
            separatorBuilder: (_, _) => const SizedBox(width: 10),
            itemBuilder: (_, i) {
              final m = markets[i];
              final sym = m['asset'].toString();
              final on = sym == focus['asset'];
              final chg = _d(m['changePct']);
              final up = chg >= 0;
              final holding = shadow?['symbol'] == sym;
              final signal = _map(m['reading'])['decision'] == 'ENTER' && _map(m['reading'])['dir'] == 'up';
              // Small card: name and tag on top, price and change below.
              return GestureDetector(
                onTap: () => _pickMarket(sym),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  width: 152,
                  padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
                  decoration: BoxDecoration(
                    color: p.card,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: on ? _look(sym).color : p.cardEdge, width: on ? 2 : 1),
                    boxShadow: [BoxShadow(color: on ? _look(sym).color.withValues(alpha: 0.20) : p.shadow, blurRadius: on ? 12 : 8, offset: const Offset(0, 4))],
                  ),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                    Row(children: [
                      _coin(sym, 16),
                      const SizedBox(width: 5),
                      Expanded(
                        child: Text(sym, maxLines: 1, overflow: TextOverflow.ellipsis,
                            style: TextStyle(color: p.ink, fontSize: 11.5, fontWeight: FontWeight.w800)),
                      ),
                      if (holding) ...[
                        Icon(Icons.work_rounded, size: 13, color: _btc),
                        const SizedBox(width: 3),
                      ] else if (signal) ...[
                        Icon(Icons.bolt_rounded, size: 14, color: _up),
                        const SizedBox(width: 3),
                      ],
                      _trendBadge(m),
                    ]),
                    Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
                      Expanded(
                        child: FittedBox(
                          fit: BoxFit.scaleDown,
                          alignment: Alignment.centerLeft,
                          child: Text(_money(_d(m['price']), sign: false),
                              style: TextStyle(color: p.ink, fontSize: 14.5, fontWeight: FontWeight.w800)),
                        ),
                      ),
                      const SizedBox(width: 4),
                      Text('${up ? '+' : ''}${chg.toStringAsFixed(2)}%',
                          style: TextStyle(color: up ? _up : _loss, fontSize: 10.5, fontWeight: FontWeight.w800)),
                    ]),
                  ]),
                ),
              );
            },
          ),
        ),
        const SizedBox(height: 4),
      ]),
    );
  }

  // ── Hero: asset, big price, change

  Widget _hero(_Pal p, Map<String, dynamic> s, Map<String, dynamic> snap) {
    final market = _map(s['market']);
    final asset = (snap['asset'] ?? 'SPY').toString();
    final isCrypto = asset.contains('/');
    final pts = _points(snap);
    final price = _d(snap['price']);
    final first = pts.isNotEmpty ? _d(pts.first['c']) : 0.0;
    final chg = first == 0 ? 0.0 : (price - first) / first * 100;
    final up = chg >= 0;
    final open = isCrypto ? true : (snap['open'] ?? market['stockOpen'] ?? market['open']);
    final marketText = isCrypto
        ? 'Crypto · the agent trades it on Saturday and Sunday only'
        : open == true
            ? 'Stock market open · the agent trades it on weekdays · closes 4:00 PM ET'
            : open == false
                ? 'Stock market closed${_whenOpens(market['nextOpen'])}'
                : '';
    final look = _look(asset);
    // The market on show (name, price, change, open or closed), in its own frame.
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.fromLTRB(14, 12, 14, 12),
      decoration: BoxDecoration(
        color: p.card,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: p.cardEdge),
        boxShadow: [BoxShadow(color: p.shadow, blurRadius: 12, offset: const Offset(0, 6))],
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          _coin(asset, 30),
          const SizedBox(width: 10),
          Text(isCrypto ? asset : '$asset/USD', style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
          const SizedBox(width: 6),
          Flexible(
            child: Text((snap['name'] ?? look.name).toString(),
                overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 13)),
          ),
        ]),
        const SizedBox(height: 8),
        Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
          Expanded(
            child: FittedBox(
              alignment: Alignment.centerLeft,
              fit: BoxFit.scaleDown,
              child: Text(price == 0 ? '—' : _money(price, sign: false, dollar: false),
                  style: TextStyle(color: p.ink, fontSize: 34, fontWeight: FontWeight.w700, letterSpacing: -1,
                      fontFeatures: const [FontFeature.tabularFigures()])),
            ),
          ),
          if (pts.length > 1)
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(color: (up ? _up : _loss).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(10)),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Icon(up ? Icons.arrow_drop_up_rounded : Icons.arrow_drop_down_rounded, color: up ? _up : _loss, size: 20),
                Text('${chg.abs().toStringAsFixed(2)}%', style: TextStyle(color: up ? _up : _loss, fontWeight: FontWeight.w800, fontSize: 13)),
              ]),
            ),
        ]),
        if (marketText.isNotEmpty) ...[
          const SizedBox(height: 4),
          Row(children: [
            Icon(Icons.circle, size: 7, color: open == true ? _up : p.muted),
            const SizedBox(width: 6),
            Flexible(
              child: Text(
                '$marketText${pts.length > 1 ? '  ·  change over 4H' : ''}',
                overflow: TextOverflow.ellipsis,
                style: TextStyle(color: p.muted, fontSize: 12),
              ),
            ),
          ]),
        ],
      ]),
    );
  }

  // ── Candle chart

  Widget _chartCard(_Pal p, Map<String, dynamic> snap, Map<String, dynamic>? shadow) {
    final all = _points(snap);
    if (all.length < 2) {
      return _card(p, child: SizedBox(height: 120, child: Center(child: Text('The chart appears after the first reading.', style: TextStyle(color: p.muted)))));
    }
    final pts = all.sublist(math.max(0, all.length - _range));
    return _card(
      p,
      padding: const EdgeInsets.fromLTRB(12, 12, 12, 10),
      child: Column(children: [
        Row(children: [
          for (final r in const [12, 24, 48]) ...[
            _segChip(p, _rangeLabel(r), _range == r, () => setState(() => _range = r)),
            const SizedBox(width: 6),
          ],
          const Spacer(),
          _trendIcon(snap),
          const SizedBox(width: 6),
          _segChip(p, 'Trend lines', _lines, () => setState(() => _lines = !_lines), icon: Icons.show_chart_rounded),
        ]),
        const SizedBox(height: 10),
        _CandleChart(
          points: pts, pal: p, entry: null, lines: _lines, price: _d(snap['price']),
          // Where trades went in and out on this market: thin dashed lines with small flags, never over the candles.
          marks: _tradeMarks(
            ((_status?['trades'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList(),
            '${snap['asset'] ?? snap['symbol']}', _btc, open: shadow),
        ),
        if (_lines) ...[
          const SizedBox(height: 8),
          Wrap(spacing: 14, runSpacing: 4, alignment: WrapAlignment.center, children: [
            _legend(p, _fastC, 'Fast line (45 min)'),
            _legend(p, _slowC, 'Slow line (1 h 45 min)'),
            _legend(p, _btc, 'Trade in'),
          ]),
        ],
      ]),
    );
  }

  // ── The trend, as one small icon next to Trend lines: green arrow up, red arrow down

  Widget _trendIcon(Map<String, dynamic> snap) {
    final trend = (_map(snap['chart'])['trend'] ?? 'unknown').toString();
    final (Color c, IconData icon, String title) = switch (trend) {
      'up' => (_up, Icons.trending_up_rounded, 'Trending up'),
      'down' => (_loss, Icons.trending_down_rounded, 'Trending down'),
      'flat' => (_down, Icons.trending_flat_rounded, 'Moving sideways'),
      _ => (_slowC, Icons.hourglass_top_rounded, 'Waiting for data'),
    };
    return Tooltip(
      message: title,
      triggerMode: TooltipTriggerMode.tap,
      child: Semantics(
        label: title,
        child: Container(
          width: 32,
          height: 32,
          decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(10)),
          child: Icon(icon, color: Colors.white, size: 20),
        ),
      ),
    );
  }

  // ── Balance and score

  Widget _balanceCard(_Pal p, Map<String, dynamic> s, Map<String, dynamic> st, Map<String, dynamic> snap) {
    final today = _map(s['today']);
    final rec = _map(s['record']);
    final ticket = _map(s['ticket']);
    // Version 1 sends no orders, so the Alpaca paper account itself never changes. The balance shown here is
    // that account PLUS every finished trade PLUS the open trade's gain or loss right now,
    // so it goes up when the agent wins and down when it loses.
    final total = rec['pnlSum'] != null ? _d(rec['pnlSum']) : _d(st['totalPnl']);
    final day = _d(today['day_pnl']);
    final sh = st['shadow'] is Map ? _map(st['shadow']) : null;
    var open = 0.0;
    if (sh != null) {
      final mark = _map(snap['held']);
      if (mark['pnl'] != null) {
        open = _d(mark['pnl']); // the server prices the open trade (for an option: the option itself)
      } else if (sh['option'] is! Map) {
        final held = _markets(snap).firstWhere((m) => m['asset'] == sh['symbol'], orElse: () => <String, dynamic>{});
        final now = _d(held['price']);
        if (now > 0) open = _d(sh['qty']) * (sh['mult'] == null ? 1 : _d(sh['mult'])) * (now - _d(sh['entryPrice']));
      }
    }
    final nr = _map(rec['newRules']);
    final rate = nr['winRatePct'];
    final base = _d(snap['equity']);
    // ONE shared paper balance: the Options and Scalper systems' closed and open trades count here too.
    final fast = _map(s['fast']);
    final others = _d(fast['closed']) + _d(fast['open']);
    final balance = base + total + open + others;
    final move = total + open + others;
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF1E1B4B), Color(0xFF312E81), Color(0xFF6D28D9)],
        ),
        boxShadow: [BoxShadow(color: const Color(0xFF6D28D9).withValues(alpha: 0.30), blurRadius: 24, offset: const Offset(0, 10))],
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          const Text('Balance', style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w600)),
        ]),
        const SizedBox(height: 4),
        FittedBox(
          fit: BoxFit.scaleDown,
          alignment: Alignment.centerLeft,
          child: Text(snap['equity'] == null ? '—' : _money(balance, sign: false),
              style: const TextStyle(color: Colors.white, fontSize: 36, fontWeight: FontWeight.w800, letterSpacing: -0.5)),
        ),
        if (snap['equity'] != null)
          Row(children: [
            Icon(move >= 0 ? Icons.arrow_drop_up_rounded : Icons.arrow_drop_down_rounded, color: move > 0 ? _up : move < 0 ? _loss : Colors.white70),
            Text('${_money(move)} from trades${others != 0 ? ' (all systems)' : sh != null ? ' (incl. the open one)' : ''}',
                style: TextStyle(color: move > 0 ? _up : move < 0 ? _loss : Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w800)),
          ]),
        const SizedBox(height: 2),
        Text('Alpaca account ${_money(base, sign: false)} (unchanged, no orders are sent) · \$${_d(ticket['amount']).toStringAsFixed(0)} a trade',
            style: const TextStyle(color: Colors.white60, fontSize: 11)),
        const SizedBox(height: 14),
        // Frame 1: results and limits (what was always on this card).
        _balanceGroup('RESULTS AND LIMITS', [
          Row(children: [
            Expanded(child: _darkStat('Today', _money(day), day > 0 ? _up : day < 0 ? _loss : Colors.white)),
            const SizedBox(width: 8),
            Expanded(child: _darkStat('All time', _money(total), total > 0 ? _up : total < 0 ? _loss : Colors.white)),
            const SizedBox(width: 8),
            Expanded(child: _darkStat('Wins / losses', '${rec['wins'] ?? 0} / ${rec['losses'] ?? 0}', Colors.white)),
          ]),
          const SizedBox(height: 8),
          Row(children: [
            Expanded(child: _darkStat('Trades today', '${today['trades'] ?? 0} of ${ticket['maxTradesToday'] ?? 20}', Colors.white)),
            const SizedBox(width: 8),
            Expanded(child: _darkStat('Daily stop', '-\$${_d(ticket['dailyStopUsd'] ?? 50).toStringAsFixed(0)}', Colors.white)),
            const SizedBox(width: 8),
            Expanded(child: _darkStat('Total brake', '-\$${_d(ticket['totalBrakeUsd'] ?? 100).toStringAsFixed(0)}', Colors.white)),
          ]),
        ]),
        const SizedBox(height: 10),
        // Frame 2: each $100 trade (what it buys, where it sells) and how often those trades win.
        _balanceGroup('EACH TRADE', [
          Row(children: [
            Expanded(
              child: _darkStat('Buys',
                  '\$${_d(ticket['amount'] ?? 100).toStringAsFixed(0)} of ${ticket['kind'] == 'crypto' ? 'a coin' : 'a stock'}',
                  Colors.white),
            ),
            const SizedBox(width: 8),
            Expanded(child: _darkStat('Take profit', '+\$${_d(ticket['takeProfitUsd'] ?? 50).toStringAsFixed(0)}', _up)),
            const SizedBox(width: 8),
            Expanded(child: _darkStat('Stop loss', '-\$${_d(ticket['stopLossUsd'] ?? 50).toStringAsFixed(0)}', _loss)),
          ]),
          const SizedBox(height: 8),
          // Win rate under the $100 rules: win and loss are both $50, so 50% (5 out of 10) breaks even.
          Container(
            width: double.infinity,
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.10), borderRadius: BorderRadius.circular(14)),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Win rate (\$100 trades)', style: TextStyle(color: Colors.white60, fontSize: 10.5)),
                  const SizedBox(height: 2),
                  Text(
                    rate == null ? 'No \$100 trades yet' : '${_d(rate).toStringAsFixed(0)}%  ·  ${nr['wins'] ?? 0} won of ${nr['trades'] ?? 0}',
                    style: TextStyle(
                        color: rate == null ? Colors.white : _d(rate) >= 50 ? _up : _loss, fontSize: 16, fontWeight: FontWeight.w800),
                  ),
                ]),
              ),
              const Text('5 of 10\n= break even', textAlign: TextAlign.right, style: TextStyle(color: Colors.white60, fontSize: 10.5, height: 1.25)),
            ]),
          ),
        ]),
      ]),
    );
  }

  /// 20 trades a day, every day: the counter, the pace checkpoints, the max hold now, any pace steps, today's
  /// record, the wider brakes and why, and the crypto list (with any pair Alpaca dropped today).
  Widget _paceCard(_Pal p, Map<String, dynamic> s) {
    final pc = _map(s['pace']);
    final t = _map(s['todayStats']);
    final market = _map(s['market']);
    final target = _d(pc['target'] ?? 20).toInt();
    final trades = _d(pc['trades']).toInt();
    final lines = ((pc['lines'] as List?) ?? const []).map((e) => '$e').toList();
    final dropped = ((market['cryptoDropped'] as List?) ?? const []).map((e) => '$e').toList();
    final tpnl = _d(t['pnl']);
    final dayNote = (pc['dayNote'] ?? '').toString();
    final cooldowns = ((s['cooldowns'] as List?) ?? const []).whereType<Map>().toList();
    final why = ((s['whyFix'] as List?) ?? const []).map((e) => '$e').toList();
    String clockOf(dynamic iso) {
      final d = DateTime.tryParse('${iso ?? ''}');
      if (d == null) return '?';
      final l = d.toLocal();
      final h = l.hour % 12 == 0 ? 12 : l.hour % 12;
      return '$h:${l.minute.toString().padLeft(2, '0')} ${l.hour < 12 ? 'AM' : 'PM'}';
    }
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Expanded(child: Text('Trades today: $trades of $target', style: TextStyle(color: p.ink, fontSize: 20, fontWeight: FontWeight.w900))),
          _pill(trades >= target ? 'MAX REACHED' : 'MAX $target', trades >= target ? _down : _up),
        ]),
        const SizedBox(height: 2),
        Text('Max hold ${_d(pc['maxHold'] ?? 120).toInt()} min · exits checked every 5 min',
            style: TextStyle(color: p.muted, fontSize: 12, fontWeight: FontWeight.w800, height: 1.3)),
        const SizedBox(height: 8),
        LayoutBuilder(builder: (context, box) {
          final w = box.maxWidth;
          return SizedBox(
            height: 14,
            child: Stack(children: [
              Positioned.fill(top: 3, bottom: 3, child: Container(decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(99)))),
              Positioned(
                left: 0, top: 3, bottom: 3, width: w * (trades / target).clamp(0.0, 1.0),
                child: Container(decoration: BoxDecoration(color: _up, borderRadius: BorderRadius.circular(99))),
              ),
            ]),
          );
        }),
        const SizedBox(height: 8),
        Text('${pc['checkpoints'] ?? ''}', style: TextStyle(color: p.ink, fontSize: 11, fontWeight: FontWeight.w700, height: 1.3)),
        for (final l in lines) Padding(
          padding: const EdgeInsets.only(top: 3),
          child: Text(l, style: const TextStyle(color: _down, fontSize: 11.5, fontWeight: FontWeight.w700, height: 1.3)),
        ),
        if (dayNote.isNotEmpty) Padding(
          padding: const EdgeInsets.only(top: 4),
          child: Text(dayNote, style: const TextStyle(color: _down, fontSize: 12, fontWeight: FontWeight.w700, height: 1.3)),
        ),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(child: Text(
            t['closed'] == null || _d(t['closed']) == 0
                ? 'No closed trades today yet'
                : 'Today: ${t['wins'] ?? 0} won, ${t['losses'] ?? 0} lost (${_d(t['winRatePct']).toStringAsFixed(0)}%)',
            style: TextStyle(color: p.ink, fontSize: 12.5, fontWeight: FontWeight.w800),
          )),
          Text(_money(tpnl), style: TextStyle(color: tpnl > 0 ? _up : tpnl < 0 ? _loss : p.ink, fontSize: 14, fontWeight: FontWeight.w900)),
        ]),
        const SizedBox(height: 6),
        Text(
          'Watching ${market['cryptoCount'] ?? '?'} crypto pairs around the clock${market['cryptoFromAlpaca'] == false ? ' (Alpaca\'s list could not be read, using the main ones for now)' : ' (the liquid majors only, thin coins are never traded)'}'
          '${market['weekend'] == true ? '' : ' plus the 10 stocks in market hours'}.',
          style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3),
        ),
        if (dropped.isNotEmpty)
          Text('Dropped today (no longer tradable on Alpaca): ${dropped.join(', ')}', style: const TextStyle(color: _loss, fontSize: 11.5, height: 1.3)),
        // Markets resting 2 hours after a flat trade.
        const SizedBox(height: 6),
        Text(
          cooldowns.isEmpty
              ? 'Cooldown: no market is resting right now.'
              : 'Cooldown (closed flat, not traded again for 2 hours): ${cooldowns.map((x) => '${'${x['symbol']}'.replaceAll('/USD', '')} until ${clockOf(x['until'])}').join(', ')}',
          style: TextStyle(color: cooldowns.isEmpty ? p.muted : _down, fontSize: 11.5, fontWeight: FontWeight.w700, height: 1.3),
        ),
        if (why.isNotEmpty) ...[
          const SizedBox(height: 8),
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(12)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              for (final (i, l) in why.indexed)
                Padding(
                  padding: EdgeInsets.only(top: i == 0 ? 0 : 3),
                  child: Text(l, style: TextStyle(color: i == 0 ? p.ink : p.muted, fontSize: 11.5, height: 1.3, fontWeight: i == 0 ? FontWeight.w800 : FontWeight.w500)),
                ),
            ]),
          ),
        ],
        if (s['brakeNote'] != null) ...[
          const SizedBox(height: 6),
          Text('${s['brakeNote']}', style: TextStyle(color: p.muted, fontSize: 11, height: 1.3)),
        ],
      ]),
    );
  }

  /// One framed group inside the purple balance card.
  Widget _balanceGroup(String title, List<Widget> children) => Container(
        width: double.infinity,
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: Colors.black.withValues(alpha: 0.14),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: Colors.white.withValues(alpha: 0.16)),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Padding(
            padding: const EdgeInsets.only(left: 2, bottom: 8),
            child: Text(title, style: const TextStyle(color: Colors.white70, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.9)),
          ),
          ...children,
        ]),
      );

  Widget _darkStat(String k, String v, Color c) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 9),
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.10), borderRadius: BorderRadius.circular(14)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(k, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white60, fontSize: 10.5)),
          const SizedBox(height: 2),
          FittedBox(
            fit: BoxFit.scaleDown,
            alignment: Alignment.centerLeft,
            child: Text(v, style: TextStyle(color: c, fontSize: 15, fontWeight: FontWeight.w800)),
          ),
        ]),
      );

  // ── Open position

  Widget _positionCard(_Pal p, Map<String, dynamic> sh, Map<String, dynamic> snap, Map<String, dynamic> ticket, Map<String, dynamic> mark) {
    final entry = _d(sh['entryPrice']);
    final qty = _d(sh['qty']);
    final mult = sh['mult'] == null ? 1.0 : _d(sh['mult']);
    final opt = sh['option'] is Map ? _map(sh['option']) : null;
    // mark: the server's price of the open trade right now (for an option: the option itself).
    final sameAsset = sh['symbol'] == snap['asset'];
    // The price of what is held right now (for an option: the option premium per share, priced by the server).
    final now = mark['price'] != null ? _d(mark['price']) : (opt == null && sameAsset ? _d(snap['price']) : entry);
    final cost = qty * mult * entry;
    final worth = qty * mult * now;
    final pl = worth - cost;
    final pct = entry == 0 ? 0.0 : (now - entry) / entry * 100;
    final win = pl >= 0;
    final tpUsd = _d(ticket['takeProfitUsd'] ?? 50);
    final slUsd = _d(ticket['stopLossUsd'] ?? 50);
    // Where the win or loss sits between the stop loss (0) and the take profit (1); the buy is in the middle.
    final pos = ((pl + slUsd) / (tpUsd + slUsd)).clamp(0.0, 1.0);
    final perUnit = qty * mult == 0 ? 0.0 : 1 / (qty * mult);
    final stopPrice = entry - slUsd * perUnit;
    final targetPrice = entry + tpUsd * perUnit;
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          _sectionTitle(p, 'Your position'),
          const Spacer(),
          _pill('OPEN', _up),
        ]),
        const SizedBox(height: 12),
        Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text(_money(pl), style: TextStyle(color: win ? _up : _loss, fontSize: 34, fontWeight: FontWeight.w800)),
          const SizedBox(width: 8),
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Text('${pct >= 0 ? '+' : ''}${pct.toStringAsFixed(2)}%', style: TextStyle(color: win ? _up : _loss, fontWeight: FontWeight.w800)),
          ),
        ]),
        Text(win ? 'You would be winning right now' : 'You would be losing right now', style: TextStyle(color: p.muted, fontSize: 12.5)),
        const SizedBox(height: 14),
        if (opt != null) ...[
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(16)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('1 SPY call option', style: TextStyle(color: p.muted, fontSize: 11.5)),
              const SizedBox(height: 2),
              Text('Strike ${_money(_d(opt['strike']), sign: false)} · expires ${_dateLabel(opt['expiry'])}',
                  style: TextStyle(color: p.ink, fontSize: 15, fontWeight: FontWeight.w800)),
              const SizedBox(height: 2),
              Text('Premium paid ${_money(entry, sign: false)} a share x 100 = ${_money(cost, sign: false)}',
                  style: TextStyle(color: p.muted, fontSize: 11.5)),
            ]),
          ),
          const SizedBox(height: 8),
        ],
        Row(children: [
          Expanded(child: _tile(p, 'You put in', _money(cost, sign: false))),
          const SizedBox(width: 8),
          Expanded(child: _tile(p, 'Worth now', _money(worth, sign: false), color: win ? _up : _loss)),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(child: _tile(p, opt != null ? 'Premium paid' : 'Bought at', _money(entry, sign: false))),
          const SizedBox(width: 8),
          Expanded(
            child: opt != null
                ? _tile(p, 'Premium now', mark['priced'] == false ? 'no price yet' : _money(now, sign: false), color: win ? _up : _loss)
                : _tile(p, 'Amount', '${qty.toStringAsFixed(qty < 0.01 ? 6 : 4)} ${sh['symbol']}'),
          ),
        ]),
        const SizedBox(height: 16),
        LayoutBuilder(builder: (context, c) {
          final w = c.maxWidth;
          return SizedBox(
            height: 26,
            child: Stack(clipBehavior: Clip.none, children: [
              Positioned(
                left: 0,
                right: 0,
                top: 9,
                child: Container(
                  height: 8,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(99),
                    gradient: const LinearGradient(colors: [_loss, Color(0xFFF59E0B), _up], stops: [0, 0.5, 1]),
                  ),
                ),
              ),
              Positioned(left: w / 2 - 1, top: 4, child: Container(width: 2, height: 18, color: p.ink.withValues(alpha: 0.5))),
              Positioned(
                left: (pos * w - 9).clamp(0.0, w - 18),
                top: 4,
                child: Container(
                  width: 18,
                  height: 18,
                  decoration: BoxDecoration(color: Colors.white, shape: BoxShape.circle, border: Border.all(color: p.ink, width: 3)),
                ),
              ),
            ]),
          );
        }),
        const SizedBox(height: 6),
        Row(children: [
          Expanded(
            child: Text('Stop loss\n-${_money(slUsd, sign: false)} · at ${_money(stopPrice < 0 ? 0 : stopPrice, sign: false)}',
                style: const TextStyle(color: _loss, fontSize: 11.5, fontWeight: FontWeight.w700, height: 1.3)),
          ),
          Expanded(
            child: Text('Take profit\n+${_money(tpUsd, sign: false)} · at ${_money(targetPrice, sign: false)}',
                textAlign: TextAlign.right, style: const TextStyle(color: _up, fontSize: 11.5, fontWeight: FontWeight.w700, height: 1.3)),
          ),
        ]),
        const SizedBox(height: 6),
        Text('Bought ${_etLabel(sh['entryAt'])}', style: TextStyle(color: p.muted, fontSize: 11.5)),
      ]),
    );
  }

  // ── Start / Stop / Check now

  Widget _controls(_Pal p, Map<String, dynamic> st) {
    final on = st['enabled'] == true && st['brakePaused'] != true;
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: Row(children: [
        Expanded(
          flex: 3,
          child: SizedBox(
            height: 52,
            child: FilledButton.icon(
              style: FilledButton.styleFrom(
                backgroundColor: on ? _loss : _up,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
              ),
              onPressed: _busy ? null : () => _setEnabled(!on),
              icon: Icon(on ? Icons.stop_rounded : Icons.play_arrow_rounded),
              label: Text(on ? 'Stop agent' : 'Start agent', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
            ),
          ),
        ),
        const SizedBox(width: 10),
        Expanded(
          flex: 2,
          child: SizedBox(
            height: 52,
            child: OutlinedButton.icon(
              style: OutlinedButton.styleFrom(
                foregroundColor: p.ink,
                side: BorderSide(color: p.line, width: 1.5),
                backgroundColor: p.card,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
              ),
              onPressed: _busy ? null : _scanNow,
              icon: _busy
                  ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2))
                  : const Icon(Icons.radar_rounded, size: 18),
              label: const Text('Check now', style: TextStyle(fontWeight: FontWeight.w800)),
            ),
          ),
        ),
      ]),
    );
  }

  /// When the agent last checked by itself, and when it checks next.
  Widget _autoLine(_Pal p, Map<String, dynamic> st, Map<String, dynamic> s) {
    final on = st['enabled'] == true && st['brakePaused'] != true;
    final last = DateTime.tryParse('${st['lastTickAt'] ?? ''}');
    final c = on ? _up : p.muted;
    // Which market the current (or the last) trade came from.
    final sh = st['shadow'] is Map ? _map(st['shadow']) : null;
    final trades = ((s['trades'] as List?) ?? const []).whereType<Map>().toList();
    final lastTrade = trades.isEmpty ? null : _map(trades.first);
    final tradeKey = sh != null ? 'Current trade from' : 'Last trade from';
    final tradeVal = sh != null
        ? '${sh['symbol']}'
        : lastTrade == null
            ? 'no trade yet'
            : '${lastTrade['asset']} (${lastTrade['decision'] == 'would buy' ? 'bought' : 'sold ${_money(_d(_map(lastTrade['details'])['pnl']))}'})';
    Widget chip(String k, String v) => Expanded(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(12)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(k, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 10.5)),
              const SizedBox(height: 2),
              FittedBox(
                fit: BoxFit.scaleDown,
                alignment: Alignment.centerLeft,
                child: Text(v, style: TextStyle(color: p.ink, fontSize: 13, fontWeight: FontWeight.w800)),
              ),
            ]),
          ),
        );
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: p.card,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: c.withValues(alpha: 0.35)),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Container(
            width: 28,
            height: 28,
            decoration: BoxDecoration(color: c.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(9)),
            child: Icon(Icons.autorenew_rounded, size: 17, color: c),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: Text(on ? 'Trades are automatic' : 'Agent is stopped',
                style: TextStyle(color: p.ink, fontSize: 13.5, fontWeight: FontWeight.w800)),
          ),
          Text('Check now only looks', style: TextStyle(color: p.muted, fontSize: 10.5)),
        ]),
        const SizedBox(height: 10),
        if (on) ...[
          Row(children: [
            chip('Last check', last == null ? 'not yet' : '${_clock(_toEt(last))} ET'),
            const SizedBox(width: 6),
            chip('Next buy check', _nextAuto()),
          ]),
          const SizedBox(height: 6),
          Row(children: [
            chip('Checks every market', 'every 5 min'),
            const SizedBox(width: 6),
            chip('Open trade exits', 'every 5 min'),
          ]),
          const SizedBox(height: 6),
        ] else ...[
          Text('It makes no trades. Press Start and it checks every market on the day\'s list every 5 minutes by itself.',
              style: TextStyle(color: p.muted, fontSize: 12, height: 1.35)),
          const SizedBox(height: 8),
        ],
        Row(children: [chip(tradeKey, tradeVal)]),
      ]),
    );
  }

  // ── Trade history

  Widget _tradesCard(_Pal p, Map<String, dynamic> s) {
    final trades = ((s['trades'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _sectionTitle(p, 'Trades'),
        const SizedBox(height: 8),
        if (trades.isEmpty)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 14),
            child: Row(children: [
              Icon(Icons.receipt_long_rounded, color: p.muted),
              const SizedBox(width: 10),
              Expanded(
                child: Text('No trades yet. Each buy shows what was bought (for a SPY option: strike, expiry and premium) and what was put in; each sell shows the entry and exit price and the win or loss in dollars.',
                    style: TextStyle(color: p.muted, fontSize: 12.5, height: 1.3)),
              ),
            ]),
          ),
        // The 4 newest; the rest behind Show all.
        for (final t in _showAllTrades ? trades : trades.take(4)) _tradeRow(p, t),
        if (trades.length > 4)
          Center(
            child: TextButton(
              onPressed: () => setState(() => _showAllTrades = !_showAllTrades),
              child: Text(_showAllTrades ? 'Show less' : 'Show all (${trades.length})'),
            ),
          ),
        // Learning line (display only): how many of today's closed trades went nowhere.
        if (s['todayStats'] is Map) ...[
          const SizedBox(height: 8),
          Text(
            'Flat trades today: ${_map(s['todayStats'])['flat'] ?? 0} of ${_map(s['todayStats'])['closed'] ?? 0} closed',
            style: TextStyle(color: p.ink, fontSize: 12.5, fontWeight: FontWeight.w800),
          ),
          Text('A flat trade closed between -\$1 and +\$1.', style: TextStyle(color: p.muted, fontSize: 11)),
        ],
      ]),
    );
  }

  Widget _tradeRow(_Pal p, Map<String, dynamic> t) {
    final buy = t['decision'] == 'would buy';
    final det = _map(t['details']);
    final opt = det['option'] is Map ? _map(det['option']) : null;
    final asset = opt != null ? 'SPY ${_money(_d(opt['strike']), sign: false)} call' : (t['asset'] ?? '').toString();
    final amount = det['amount'] == null ? 50.0 : _d(det['amount']);
    final qty = _d(det['qty']);
    final pnl = _d(det['pnl']);
    final hasEntry = det['entryPrice'] != null;
    final entryP = _d(det['entryPrice']);
    final exitP = det['exitPrice'] == null ? _d(t['price']) : _d(det['exitPrice']);
    final String line;
    if (opt != null) {
      line = buy
          ? 'expires ${_dateLabel(opt['expiry'])} · premium ${_money(entryP, sign: false)} x 100'
          : 'premium ${_money(entryP, sign: false)} to ${_money(exitP, sign: false)} · ${_short((t['reason'] ?? '').toString())}';
    } else {
      line = buy
          ? '${qty == 0 ? '' : '${qty.toStringAsFixed(qty < 0.01 ? 6 : 4)} at '}${_money(hasEntry ? entryP : _d(t['price']), sign: false)}'
          : '${hasEntry ? '${_money(entryP, sign: false)} to ' : 'at '}${_money(exitP, sign: false)} · ${_short((t['reason'] ?? '').toString())}';
    }
    final win = pnl >= 0;
    final c = buy ? _spy : (win ? _up : _loss);
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10),
      decoration: BoxDecoration(border: Border(bottom: BorderSide(color: p.line))),
      child: Row(children: [
        Container(
          width: 40,
          height: 40,
          decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(13)),
          child: Icon(buy ? Icons.south_west_rounded : Icons.north_east_rounded, color: c, size: 20),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('${buy ? 'Bought' : 'Sold'} $asset', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
            const SizedBox(height: 2),
            Text(
              line,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: p.muted, fontSize: 11.5),
            ),
            if (!buy && det['exitKind'] != null)
              Text('Exit: ${det['exitKind']}${det['flat'] == true ? ' · flat' : ''}',
                  style: TextStyle(color: win ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w800)),
            Text((t['et_time'] ?? '').toString(), style: TextStyle(color: p.muted, fontSize: 10.5)),
          ]),
        ),
        const SizedBox(width: 8),
        Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text(buy ? '-${_money(amount, sign: false)}' : '+${_money(det['outValue'] == null ? amount + pnl : _d(det['outValue']), sign: false)}',
              style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
          if (!buy)
            Text('${_money(pnl)}${det['pct'] == null ? '' : ' (${_d(det['pct']) >= 0 ? '+' : ''}${_d(det['pct']).toStringAsFixed(2)}%)'}',
                style: TextStyle(color: win ? _up : _loss, fontWeight: FontWeight.w800, fontSize: 12)),
          if (buy) Text('put in', style: TextStyle(color: p.muted, fontSize: 11)),
        ]),
      ]),
    );
  }

  // ── Every check the agent made

  Widget _activityCard(_Pal p) {
    final rows = _showAllLog ? _log : _log.take(4).toList();
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          _sectionTitle(p, 'Agent activity'),
          const Spacer(),
          Text('newest first', style: TextStyle(color: p.muted, fontSize: 11)),
        ]),
        const SizedBox(height: 6),
        if (_log.isEmpty)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 12),
            child: Text('Nothing yet. A new line appears with every automatic check (every 5 minutes).', style: TextStyle(color: p.muted, fontSize: 12.5)),
          ),
        for (final r in rows) _logRow(p, r),
        if (_log.length > 4)
          Center(
            child: TextButton(
              onPressed: () async {
                if (_showAllLog && _moreLog) {
                  await _loadLog(more: true);
                } else {
                  setState(() => _showAllLog = !_showAllLog);
                }
              },
              child: Text(_showAllLog ? (_moreLog ? 'Show older' : 'Show less') : 'Show all'),
            ),
          ),
      ]),
    );
  }

  Widget _logRow(_Pal p, Map<String, dynamic> r) {
    final decision = (r['decision'] ?? '').toString();
    final c = switch (decision) {
      'would buy' => _up,
      'would sell' => _fastC,
      'hold' => _slowC,
      'day start' || 'day end' => _spy,
      'start' => _up,
      'stop' => _loss,
      _ => r['kind'] == 'error' ? _loss : p.muted,
    };
    final hasMa = r['fast_ma'] != null && r['slow_ma'] != null;
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 7),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(margin: const EdgeInsets.only(top: 5), width: 8, height: 8, decoration: BoxDecoration(color: c, shape: BoxShape.circle)),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Text(decision == 'hold' ? 'Still holding' : _cap(decision),
                  style: TextStyle(color: c, fontWeight: FontWeight.w800, fontSize: 12.5)),
              if (_map(r['details'])['by'] == 'cron') ...[
                const SizedBox(width: 6),
                Text('automatic', style: TextStyle(color: p.muted, fontSize: 10, fontWeight: FontWeight.w700)),
              ],
              const Spacer(),
              Text(_shortTime((r['et_time'] ?? '').toString()), style: TextStyle(color: p.muted, fontSize: 10.5)),
            ]),
            Text(_cap((r['reason'] ?? '').toString()), style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.3)),
            if (r['price'] != null || hasMa)
              Text(
                [
                  if (r['asset'] != null && r['price'] != null) '${r['asset']} ${_money(_d(r['price']), sign: false)}',
                  if (hasMa) 'fast ${_d(r['fast_ma']).toStringAsFixed(2)} · slow ${_d(r['slow_ma']).toStringAsFixed(2)}',
                ].join('  ·  '),
                style: TextStyle(color: p.muted, fontSize: 10.5),
              ),
          ]),
        ),
      ]),
    );
  }

  Widget _rulesCard(_Pal p, Map<String, dynamic> s) => _card(
        p,
        padding: EdgeInsets.zero,
        child: Theme(
          data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
          child: Material(
            type: MaterialType.transparency,
            child: ExpansionTile(
            tilePadding: const EdgeInsets.symmetric(horizontal: 16),
            childrenPadding: const EdgeInsets.fromLTRB(16, 0, 16, 14),
            iconColor: p.ink,
            collapsedIconColor: p.muted,
            leading: Icon(Icons.rule_rounded, color: _slowC),
            title: Row(children: [
              Flexible(
                child: Text('The rules it follows', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14.5)),
              ),
              const SizedBox(width: 8),
              // Learn: lessons, live signals and a tutor to ask, using the agent's live readings.
              GestureDetector(
                onTap: _openLearn,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(colors: [_slowC, _fastC]),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: const Row(mainAxisSize: MainAxisSize.min, children: [
                    Icon(Icons.school_rounded, color: Colors.white, size: 14),
                    SizedBox(width: 4),
                    Text('Learn', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                  ]),
                ),
              ),
            ]),
            subtitle: Text('Read-only, set in the code', style: TextStyle(color: p.muted, fontSize: 11.5)),
            children: [
              for (final line in ((s['rules'] as List?) ?? const []))
                Padding(
                  padding: const EdgeInsets.only(bottom: 7),
                  child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    const Padding(padding: EdgeInsets.only(top: 6), child: Icon(Icons.circle, size: 5, color: _slowC)),
                    const SizedBox(width: 8),
                    Expanded(child: Text(line.toString(), style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.35))),
                  ]),
                ),
            ],
            ),
          ),
        ),
      );

  // ── small pieces

  Widget _card(_Pal p, {required Widget child, EdgeInsets padding = const EdgeInsets.all(16)}) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: padding,
        decoration: BoxDecoration(
          color: p.card,
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: p.cardEdge),
          boxShadow: [BoxShadow(color: p.shadow, blurRadius: 24, offset: const Offset(0, 8))],
        ),
        child: child,
      );

  Widget _banner(_Pal p, String msg, Color c) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: c.withValues(alpha: 0.12),
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: c.withValues(alpha: 0.45)),
        ),
        child: Row(children: [
          Icon(Icons.info_rounded, color: c, size: 20),
          const SizedBox(width: 10),
          Expanded(child: Text(msg, style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.35))),
        ]),
      );

  Widget _roundBtn(_Pal p, IconData icon, VoidCallback? onTap) => Material(
        color: p.card,
        shape: const CircleBorder(),
        elevation: 0,
        child: InkWell(
          customBorder: const CircleBorder(),
          onTap: onTap,
          child: Container(
            width: 40,
            height: 40,
            decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: p.cardEdge)),
            child: Icon(icon, size: 18, color: p.ink),
          ),
        ),
      );

  Widget _segChip(_Pal p, String t, bool on, VoidCallback onTap, {IconData? icon}) => GestureDetector(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 180),
          padding: const EdgeInsets.symmetric(horizontal: 11, vertical: 6),
          decoration: BoxDecoration(color: on ? p.dark : p.chip, borderRadius: BorderRadius.circular(999)),
          child: Row(mainAxisSize: MainAxisSize.min, children: [
            if (icon != null) ...[Icon(icon, size: 14, color: on ? p.onDark : p.muted), const SizedBox(width: 4)],
            Text(t, style: TextStyle(color: on ? p.onDark : p.muted, fontWeight: FontWeight.w700, fontSize: 11.5)),
          ]),
        ),
      );

  Widget _legend(_Pal p, Color c, String t) => Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 14, height: 3, decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(2))),
        const SizedBox(width: 5),
        Text(t, style: TextStyle(color: p.muted, fontSize: 11)),
      ]);

  Widget _pill(String t, Color c) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
        decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
        child: Text(t, style: TextStyle(color: c, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 0.6)),
      );

  Widget _sectionTitle(_Pal p, String t) => Text(t, style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800));

  Widget _tile(_Pal p, String k, String v, {Color? color}) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(16)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(k, style: TextStyle(color: p.muted, fontSize: 11.5)),
          const SizedBox(height: 3),
          FittedBox(
            fit: BoxFit.scaleDown,
            alignment: Alignment.centerLeft,
            child: Text(v, style: TextStyle(color: color ?? p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
          ),
        ]),
      );

  String _whenOpens(dynamic iso) {
    // Alpaca gives the time with the New York offset, e.g. 2026-11-23T09:30:00-05:00: read the clock part as ET.
    final s = '${iso ?? ''}';
    final d = DateTime.tryParse(s.length >= 19 ? s.substring(0, 19) : '');
    if (d == null) return '';
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return ' · opens ${days[d.weekday - 1]} ${_clock(d)} ET';
  }
}

// ───────────────────────────────────────────────────────────── candle chart with touch

/// Where a trade went in or out, drawn on the chart as a thin dashed line at that candle with a small flag on top.
class _ChartMark {
  const _ChartMark({required this.at, required this.price, required this.label, required this.color});
  final DateTime at;
  final double price;
  final String label;
  final Color color;
}

/// The entry and exit marks for one market from the trade list (and the open trade), for the chart.
List<_ChartMark> _tradeMarks(List<Map<String, dynamic>> trades, String symbol, Color entryColor, {Map<String, dynamic>? open}) {
  final out = <_ChartMark>[];
  for (final t in trades) {
    if ('${t['asset']}' != symbol) continue;
    final at = DateTime.tryParse('${t['created_at'] ?? ''}');
    final price = _d(t['price']);
    if (at == null || price <= 0) continue;
    final buy = t['decision'] == 'would buy';
    final pnl = _d(_map(t['details'])['pnl']);
    out.add(_ChartMark(
      at: at, price: price,
      label: buy ? 'In ${_money(price, sign: false)}' : 'Out ${_money(pnl)}',
      color: buy ? entryColor : (pnl > 0 ? _up : _loss),
    ));
  }
  if (open != null && '${open['symbol']}' == symbol) {
    final at = DateTime.tryParse('${open['entryAt'] ?? ''}');
    final price = open['spot'] != null ? _d(open['spot']) : open['option'] is Map ? 0.0 : _d(open['entryPrice']);
    if (at != null && price > 0 && !out.any((m) => m.at.difference(at).inSeconds.abs() < 90 && m.color == entryColor)) {
      out.add(_ChartMark(at: at, price: price, label: 'In ${_money(price, sign: false)}', color: entryColor));
    }
  }
  return out;
}

class _CandleChart extends StatefulWidget {
  const _CandleChart({required this.points, required this.pal, required this.entry, required this.lines, required this.price, this.marks = const []});
  final List<Map<String, dynamic>> points;
  final _Pal pal;
  final double? entry;
  final bool lines;
  final double price;
  final List<_ChartMark> marks;

  @override
  State<_CandleChart> createState() => _CandleChartState();
}

class _CandleChartState extends State<_CandleChart> {
  int? _touch;

  void _hit(Offset local, double width) {
    final n = widget.points.length;
    final i = (local.dx / width * n).floor().clamp(0, n - 1);
    if (i != _touch) setState(() => _touch = i);
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, c) {
      final w = c.maxWidth;
      return GestureDetector(
        onTapDown: (d) => _hit(d.localPosition, w),
        onHorizontalDragStart: (d) => _hit(d.localPosition, w),
        onHorizontalDragUpdate: (d) => _hit(d.localPosition, w),
        onHorizontalDragEnd: (_) => setState(() => _touch = null),
        onTapUp: (_) => Future.delayed(const Duration(seconds: 2), () {
          if (mounted) setState(() => _touch = null);
        }),
        child: SizedBox(
          height: 250,
          width: w,
          child: CustomPaint(
            painter: _CandlePainter(widget.points, widget.pal, widget.entry, widget.lines, widget.price, _touch,
                DefaultTextStyle.of(context).style.fontFamily, widget.marks),
          ),
        ),
      );
    });
  }
}

class _CandlePainter extends CustomPainter {
  _CandlePainter(this.pts, this.p, this.entry, this.lines, this.price, this.touch, this.font, [this.marks = const []]);
  final String? font;
  final List<_ChartMark> marks;
  final List<Map<String, dynamic>> pts;
  final _Pal p;
  final double? entry;
  final bool lines;
  final double price;
  final int? touch;

  static const _axisH = 18.0;

  @override
  void paint(Canvas canvas, Size size) {
    final h = size.height - _axisH;
    final vals = <double>[
      for (final q in pts) ...[_d(q['h']), _d(q['l'])],
      if (lines)
        for (final q in pts) ...[if (q['f'] != null) _d(q['f']), if (q['s'] != null) _d(q['s'])],
      ?entry,
      if (price > 0) price,
    ];
    var lo = vals.reduce(math.min);
    var hi = vals.reduce(math.max);
    if (hi - lo < 1e-9) {
      hi += 1;
      lo -= 1;
    }
    final pad = (hi - lo) * 0.10;
    lo -= pad;
    hi += pad;
    final n = pts.length;
    // The last price tag sits in its own small margin on the right, so it never covers a candle.
    final priceTp = TextPainter(
      text: TextSpan(text: price > 0 ? _money(price, sign: false) : '', style: TextStyle(color: p.card, fontSize: 9.5, fontWeight: FontWeight.w800, fontFamily: font)),
      textDirection: TextDirection.ltr,
    )..layout();
    final gutter = price > 0 ? priceTp.width + 12 : 0.0;
    final cw = size.width - gutter;
    final step = cw / n;
    double cx(int i) => step * i + step / 2;
    double y(double v) => h - (v - lo) / (hi - lo) * h;

    // soft grid
    final grid = Paint()
      ..color = p.line.withValues(alpha: 0.7)
      ..strokeWidth = 1;
    for (var i = 1; i <= 3; i++) {
      final gy = h * i / 4;
      for (var x = 0.0; x < cw; x += 6) {
        canvas.drawLine(Offset(x, gy), Offset(x + 2, gy), grid);
      }
    }

    // Trade marks: which candle each one belongs to (the candle whose 5 minutes hold that time).
    final times = [for (final q in pts) DateTime.tryParse('${q['t'] ?? ''}')];
    final placed = <(int, _ChartMark)>[];
    for (final m in marks) {
      if (times.isEmpty || times.first == null || m.at.isBefore(times.first!)) continue;
      var idx = -1;
      for (var i = 0; i < n; i++) {
        final t = times[i];
        if (t != null && !t.isAfter(m.at)) idx = i;
      }
      final last = times.last;
      if (idx < 0 || (idx == n - 1 && last != null && m.at.difference(last).inMinutes > 30)) continue;
      placed.add((idx, m));
    }
    // A thin dashed line (2 px) at each entry or exit candle, drawn BEHIND the candles so they stay visible.
    for (final (i, m) in placed) {
      final x = cx(i);
      final dash = Paint()
        ..color = m.color.withValues(alpha: 0.75)
        ..strokeWidth = math.min(2.0, math.max(1.0, step * 0.3));
      for (var yy = 12.0; yy < h; yy += 7) {
        canvas.drawLine(Offset(x, yy), Offset(x, math.min(h, yy + 3.5)), dash);
      }
    }

    // trend lines under the candles
    if (lines) {
      void line(String key, Color c) {
        final path = Path();
        var started = false;
        for (var i = 0; i < n; i++) {
          final v = pts[i][key];
          if (v == null) continue;
          final o = Offset(cx(i), y(_d(v)));
          started ? path.lineTo(o.dx, o.dy) : path.moveTo(o.dx, o.dy);
          started = true;
        }
        canvas.drawPath(
            path,
            Paint()
              ..color = c.withValues(alpha: 0.85)
              ..style = PaintingStyle.stroke
              ..strokeWidth = 2
              ..strokeCap = StrokeCap.round
              ..strokeJoin = StrokeJoin.round);
      }

      line('s', _slowC);
      line('f', _fastC);
    }

    // candles
    final bodyW = math.max(2.0, step * 0.62);
    for (var i = 0; i < n; i++) {
      final q = pts[i];
      final o = _d(q['o']), c = _d(q['c']), hh = _d(q['h']), ll = _d(q['l']);
      final rising = c >= o;
      final col = rising ? _up : _down;
      final dim = touch != null && touch != i;
      final paint = Paint()..color = dim ? col.withValues(alpha: 0.45) : col;
      canvas.drawLine(Offset(cx(i), y(hh)), Offset(cx(i), y(ll)), paint..strokeWidth = 1.4);
      final top = y(math.max(o, c));
      final bot = y(math.min(o, c));
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTRB(cx(i) - bodyW / 2, top, cx(i) + bodyW / 2, math.max(bot, top + 1.5)), const Radius.circular(2)),
        paint..style = PaintingStyle.fill,
      );
    }

    // buy price: a thin line only (no box over the candles)
    if (entry != null) _dashed(canvas, y(entry!), cw, _btc, '', left: true);

    // last price: a thin line across the candles and a small tag in the right margin
    if (price > 0) {
      _dashed(canvas, y(price), cw, p.ink.withValues(alpha: 0.45), '');
      final ty = y(price).clamp(priceTp.height / 2 + 2, h - priceTp.height / 2 - 2);
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(cw + 3, ty - priceTp.height / 2 - 2, priceTp.width + 8, priceTp.height + 4), const Radius.circular(5)),
        Paint()..color = p.ink.withValues(alpha: 0.85),
      );
      priceTp.paint(canvas, Offset(cw + 7, ty - priceTp.height / 2));
    }

    // The small flags on top of the trade lines: a 10 px triangle pointing at the candle and the price in 10 px text.
    var row = 0;
    for (final (i, m) in placed) {
      final x = cx(i);
      final top = 1.0 + (row % 2) * 12;
      row++;
      final tri = Path()
        ..moveTo(x - 5, top)
        ..lineTo(x + 5, top)
        ..lineTo(x, top + 9)
        ..close();
      canvas.drawPath(tri, Paint()..color = m.color);
      final tp = TextPainter(
        text: TextSpan(text: m.label, style: TextStyle(color: m.color, fontSize: 10, fontWeight: FontWeight.w800, fontFamily: font)),
        textDirection: TextDirection.ltr,
      )..layout();
      final right = x + 7 + tp.width <= cw;
      tp.paint(canvas, Offset(right ? x + 7 : x - 7 - tp.width, top - 1));
    }

    // time axis (Eastern Time)
    final tp = TextPainter(textDirection: TextDirection.ltr);
    for (final i in [0, n ~/ 3, 2 * n ~/ 3, n - 1]) {
      final t = DateTime.tryParse('${pts[i]['t'] ?? ''}');
      if (t == null) continue;
      tp.text = TextSpan(text: _clock(_toEt(t)), style: TextStyle(color: p.muted, fontSize: 10, fontFamily: font));
      tp.layout();
      final x = (cx(i) - tp.width / 2).clamp(0.0, size.width - tp.width);
      tp.paint(canvas, Offset(x, size.height - 13));
    }

    // touch: crosshair and a dark bubble with the time and price
    if (touch != null && touch! < n) {
      final q = pts[touch!];
      final x = cx(touch!);
      final cy = y(_d(q['c']));
      final cross = Paint()
        ..color = p.ink.withValues(alpha: 0.5)
        ..strokeWidth = 1;
      for (var yy = 0.0; yy < h; yy += 6) {
        canvas.drawLine(Offset(x, yy), Offset(x, yy + 3), cross);
      }
      canvas.drawCircle(Offset(x, cy), 6, Paint()..color = p.card);
      canvas.drawCircle(
          Offset(x, cy),
          6,
          Paint()
            ..color = p.ink
            ..style = PaintingStyle.stroke
            ..strokeWidth = 2.5);
      final t = DateTime.tryParse('${q['t'] ?? ''}');
      final label = '${t == null ? '' : '${_clock(_toEt(t))} ET\n'}${_money(_d(q['c']), sign: false)}';
      tp.text = TextSpan(
        text: label,
        style: TextStyle(color: p.onDark, fontSize: 11.5, fontWeight: FontWeight.w800, height: 1.3, fontFamily: font),
      );
      tp.textAlign = TextAlign.center;
      tp.layout();
      final bw = tp.width + 18, bh = tp.height + 10;
      final bx = (x - bw / 2).clamp(0.0, size.width - bw);
      final by = math.max(0.0, cy - bh - 14);
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(bx, by, bw, bh), const Radius.circular(10)), Paint()..color = p.dark);
      tp.paint(canvas, Offset(bx + 9, by + 5));
    }
  }

  void _dashed(Canvas canvas, double yy, double width, Color c, String label, {bool left = false}) {
    final paint = Paint()
      ..color = c
      ..strokeWidth = 1.2;
    for (var x = 0.0; x < width; x += 7) {
      canvas.drawLine(Offset(x, yy), Offset(x + 3.5, yy), paint);
    }
    if (label.isEmpty) return;
    final tp = TextPainter(
      text: TextSpan(text: label, style: TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800, fontFamily: font)),
      textDirection: TextDirection.ltr,
    )..layout();
    final bw = tp.width + 12, bh = tp.height + 6;
    final bx = left ? 0.0 : width - bw;
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(bx, yy - bh / 2, bw, bh), const Radius.circular(7)),
      Paint()..color = left ? _btc : p.dark,
    );
    tp.paint(canvas, Offset(bx + 6, yy - bh / 2 + 3));
  }

  @override
  bool shouldRepaint(covariant _CandlePainter old) =>
      old.pts != pts || old.touch != touch || old.lines != lines || old.entry != entry || old.price != price || old.p.light != p.light || old.marks != marks;
}

class _SparkPainter extends CustomPainter {
  _SparkPainter(this.pts, this.color);
  final List<Map<String, dynamic>> pts;
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    if (pts.length < 2) return;
    final vals = pts.map((q) => _d(q['c'])).toList();
    final lo = vals.reduce(math.min), hi = vals.reduce(math.max);
    final span = hi - lo < 1e-9 ? 1.0 : hi - lo;
    final path = Path();
    for (var i = 0; i < vals.length; i++) {
      final o = Offset(i / (vals.length - 1) * size.width, size.height - (vals[i] - lo) / span * size.height);
      i == 0 ? path.moveTo(o.dx, o.dy) : path.lineTo(o.dx, o.dy);
    }
    final fill = Path.from(path)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(
        fill,
        Paint()
          ..shader = LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [color.withValues(alpha: 0.25), color.withValues(alpha: 0)],
          ).createShader(Offset.zero & size));
    canvas.drawPath(
        path,
        Paint()
          ..color = color
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.8
          ..strokeJoin = StrokeJoin.round);
    final last = Offset(size.width, size.height - (vals.last - lo) / span * size.height);
    canvas.drawCircle(last, 3, Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant _SparkPainter old) => old.pts != pts || old.color != color;
}

// ───────────────────────────────────────────────────────────── palette and helpers

class _Look {
  const _Look(this.name, this.mark, this.color);
  final String name;
  final String mark;
  final Color color;
}

_Look _look(String symbol) => switch (symbol) {
      'SPY' => const _Look('S&P 500 fund', 'S&P', _spy),
      'QQQ' => const _Look('Nasdaq 100 fund', 'Q', Color(0xFF0EA5E9)),
      'AAPL' => const _Look('Apple', 'A', Color(0xFF374151)),
      'MSFT' => const _Look('Microsoft', 'M', Color(0xFF2563EB)),
      'NVDA' => const _Look('Nvidia', 'N', Color(0xFF65A30D)),
      'TSLA' => const _Look('Tesla', 'T', Color(0xFFDC2626)),
      'AMZN' => const _Look('Amazon', 'a', Color(0xFFF59E0B)),
      'BTC/USD' => const _Look('Bitcoin', 'B', _btc),
      'ETH/USD' => const _Look('Ethereum', 'Ξ', Color(0xFF627EEA)),
      'SOL/USD' => const _Look('Solana', 'S', Color(0xFF9945FF)),
      _ => _Look(symbol, symbol.isEmpty ? '?' : symbol[0], _slowC),
    };

/// Currency badge colours and short marks for forex pairs.
const _ccy = <String, (String, Color)>{
  'EUR': ('€', Color(0xFF1D4ED8)),
  'USD': ('\$', Color(0xFF15803D)),
  'GBP': ('£', Color(0xFF1E3A8A)),
  'JPY': ('¥', Color(0xFFDC2626)),
  'CAD': ('C\$', Color(0xFFE11D48)),
  'AUD': ('A\$', Color(0xFF0F766E)),
  'NZD': ('NZ', Color(0xFF111827)),
  'CHF': ('Fr', Color(0xFFB91C1C)),
  'TRY': ('TL', Color(0xFFEA580C)),
  'NOK': ('kr', Color(0xFF7C2D12)),
  'THB': ('TH', Color(0xFF7E22CE)),
};

bool _isFx(String symbol) {
  final parts = symbol.split('/');
  return parts.length == 2 && _ccy.containsKey(parts[0]) && _ccy.containsKey(parts[1]);
}

Widget _coin(String symbol, double size) {
  if (_isFx(symbol)) {
    // Two overlapping currency badges, like a pair of flags.
    final parts = symbol.split('/');
    Widget one(String code) {
      final (mark, color) = _ccy[code]!;
      return Container(
        width: size * 0.78,
        height: size * 0.78,
        alignment: Alignment.center,
        decoration: BoxDecoration(shape: BoxShape.circle, color: color, border: Border.all(color: Colors.white, width: 1.2)),
        child: Text(mark, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: size * (mark.length > 1 ? 0.26 : 0.36))),
      );
    }

    return SizedBox(
      width: size * 1.25,
      height: size,
      child: Stack(children: [
        Positioned(left: 0, top: 0, child: one(parts[0])),
        Positioned(right: 0, bottom: 0, child: one(parts[1])),
      ]),
    );
  }
  final l = _look(symbol);
  return Container(
    width: size,
    height: size,
    alignment: Alignment.center,
    decoration: BoxDecoration(shape: BoxShape.circle, color: l.color),
    child: Text(l.mark,
        style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: l.mark.length > 1 ? size * 0.32 : size * 0.52)),
  );
}

/// Every watched market as a small map with the same keys the big views use (asset, price, chart, name, open).
List<Map<String, dynamic>> _markets(Map<String, dynamic> snap) {
  final list = ((snap['markets'] as List?) ?? const []).whereType<Map>().map((e) {
    final m = Map<String, dynamic>.from(e);
    return {...m, 'asset': m['symbol']};
  }).toList();
  return list;
}

// ───────────────────────────────────────────────────────────── palette and helpers (shared)

class _Pal {
  _Pal(this.light);
  final bool light;
  Color get bgTop => light ? const Color(0xFFEDEFFA) : const Color(0xFF0A0D18);
  Color get bgBottom => light ? const Color(0xFFF8F1F2) : const Color(0xFF111529);
  Color get card => light ? Colors.white.withValues(alpha: 0.92) : const Color(0xFF161B2E);
  Color get cardEdge => light ? Colors.white : const Color(0xFF232A42);
  Color get inner => light ? const Color(0xFFF4F5FA) : const Color(0xFF1D2338);
  Color get chip => light ? const Color(0xFFEFF0F5) : const Color(0xFF20263B);
  Color get line => light ? const Color(0xFFE7E8F0) : const Color(0xFF262D45);
  Color get shadow => light ? const Color(0xFF6366F1).withValues(alpha: 0.08) : Colors.black.withValues(alpha: 0.35);
  Color get ink => light ? const Color(0xFF12141C) : Colors.white;
  Color get muted => light ? const Color(0xFF8A8FA3) : const Color(0xFF8D95AB);
  Color get dark => light ? const Color(0xFF16171D) : Colors.white;
  Color get onDark => light ? Colors.white : const Color(0xFF16171D);
}

Map<String, dynamic> _map(dynamic v) => v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{};

double _d(dynamic v) => v is num ? v.toDouble() : double.tryParse('${v ?? ''}') ?? 0;

List<Map<String, dynamic>> _points(Map<String, dynamic> snap) =>
    ((_map(snap['chart'])['points'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();

String _rangeLabel(int candles) => candles <= 12 ? '1H' : candles <= 24 ? '2H' : '4H';

/// $1,234.56 — with a + or - in front when [sign] is on.
String _money(double n, {bool sign = true, bool dollar = true}) {
  final s = n.abs().toStringAsFixed(2).replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (m) => ',');
  final pre = n < 0 ? '-' : (sign && n > 0 ? '+' : '');
  return '$pre${dollar ? '\$' : ''}$s';
}

String _clock(DateTime d) {
  final h = d.hour % 12 == 0 ? 12 : d.hour % 12;
  return '$h:${d.minute.toString().padLeft(2, '0')} ${d.hour < 12 ? 'AM' : 'PM'}';
}

/// UTC to New York time (US daylight saving: second Sunday of March to first Sunday of November).
DateTime _toEt(DateTime t) {
  final u = t.toUtc();
  DateTime nthSunday(int year, int month, int nth) {
    var d = DateTime.utc(year, month, 1);
    while (d.weekday != DateTime.sunday) {
      d = d.add(const Duration(days: 1));
    }
    return d.add(Duration(days: 7 * (nth - 1)));
  }

  final start = nthSunday(u.year, 3, 2).add(const Duration(hours: 7)); // 2 AM EST
  final end = nthSunday(u.year, 11, 1).add(const Duration(hours: 6)); // 2 AM EDT
  final dst = !u.isBefore(start) && u.isBefore(end);
  final et = u.subtract(Duration(hours: dst ? 4 : 5));
  return DateTime(et.year, et.month, et.day, et.hour, et.minute);
}

/// "2026-12-04" becomes "Dec 4, 2026".
String _dateLabel(dynamic ymd) {
  final p = '${ymd ?? ''}'.split('-');
  if (p.length != 3) return '${ymd ?? ''}';
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  final mi = int.tryParse(p[1]) ?? 1;
  return '${m[(mi - 1).clamp(0, 11)]} ${int.tryParse(p[2]) ?? p[2]}, ${p[0]}';
}

String _etLabel(dynamic iso) {
  final t = DateTime.tryParse('${iso ?? ''}');
  if (t == null) return '';
  final e = _toEt(t);
  const m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return '${m[e.month - 1]} ${e.day} at ${_clock(e)} ET';
}

/// "Fri, Nov 20, 2026, 12:10 PM ET" becomes "Nov 20, 12:10 PM".
String _shortTime(String s) {
  final parts = s.split(', ');
  if (parts.length >= 4) return '${parts[1]}, ${parts[3].replaceAll(' ET', '')}';
  return s;
}

String _cap(String s) => s.isEmpty ? s : s[0].toUpperCase() + s.substring(1);

String _short(String s) {
  final i = s.indexOf('(');
  return (i > 0 ? s.substring(0, i) : s).trim();
}
