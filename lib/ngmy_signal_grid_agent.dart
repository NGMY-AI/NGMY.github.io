// Signal Grid — Alpaca PAPER trading agent, Version 1 (read-only).
//
// This screen is only the control panel. The agent itself runs on the server (bright-handler, called every
// 15 minutes by Supabase pg_cron), so it keeps going when the phone is off. The Alpaca keys live only in
// Supabase secrets and never reach this app. Version 1 places no orders: it logs what it WOULD do with a
// pretend $50 trade.

import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_edge_invoke.dart';

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
  int _range = 48; // candles shown: 12 = 1 h, 24 = 2 h, 48 = 4 h
  String? _selected; // market tapped in the strip
  bool _lines = true;
  String? _error;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    if (widget.previewStatus != null) {
      _status = widget.previewStatus;
      _log = widget.previewLog ?? [];
      _loading = false;
      return;
    }
    unawaited(_reload(live: true));
    _timer = Timer.periodic(const Duration(seconds: 60), (_) => unawaited(_reload(live: true)));
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  Future<void> _reload({bool live = false}) async {
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
    if (_status != null) await _loadLog();
  }

  Future<void> _loadLog({bool more = false}) async {
    final before = more && _log.isNotEmpty ? _log.last['id'] : 0;
    final res = await ngmyEdgeInvoke({'action': 'paLog', 'limit': 100, 'beforeId': before});
    if (!mounted || res == null || res['ok'] != true) return;
    final rows = ((res['rows'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    setState(() {
      _log = more ? [..._log, ...rows] : rows;
      _moreLog = rows.length >= 100;
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
              'The \$25 brake paused the agent. Turning it back on means you have reviewed it. The running demo profit and loss starts again from \$0.'),
          actions: [
            TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
            FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Turn back on')),
          ],
        ),
      );
      if (ok != true) return;
    }
    setState(() => _busy = true);
    final res = await ngmyEdgeInvoke({'action': 'paSet', 'enabled': on});
    if (!mounted) return;
    setState(() => _busy = false);
    _snack(res?['ok'] == true ? (on ? 'Agent started.' : 'Agent stopped.') : (res?['error'] ?? 'Could not change it.').toString(),
        res?['ok'] == true ? _up : _loss);
    await _reload();
  }

  Future<void> _checkNow() async {
    setState(() => _busy = true);
    final res = await ngmyEdgeInvoke({'action': 'paCheck'}, timeout: const Duration(seconds: 60));
    if (!mounted) return;
    setState(() => _busy = false);
    if (res?['ok'] != true) _snack((res?['error'] ?? 'The check did not finish.').toString(), _loss);
    await _reload();
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
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('Signal Grid', style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
            Text('Paper trading agent · pretend money', style: TextStyle(color: p.muted, fontSize: 11.5)),
          ]),
        ),
        if (_status != null)
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
            decoration: BoxDecoration(
              color: (brake ? _loss : on ? _up : p.muted).withValues(alpha: 0.14),
              borderRadius: BorderRadius.circular(999),
            ),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Icon(Icons.circle, size: 8, color: brake ? _loss : on ? _up : p.muted),
              const SizedBox(width: 6),
              Text(brake ? 'Paused' : on ? 'Running' : 'Stopped',
                  style: TextStyle(color: brake ? _loss : on ? _up : p.muted, fontSize: 12, fontWeight: FontWeight.w800)),
            ]),
          ),
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
    // The market on show: the one tapped, else the one held, else the one the agent last looked at.
    final sel = _selected ?? (shadow?['symbol'] ?? snap['asset'])?.toString();
    final focus = markets.firstWhere((m) => m['asset'] == sel, orElse: () => markets.isEmpty ? snap : markets.first);
    final held = shadow == null ? null : markets.firstWhere((m) => m['asset'] == shadow['symbol'], orElse: () => focus);
    final heldShadow = shadow != null && shadow['symbol'] == focus['asset'] ? shadow : null;
    return [
      _marketStrip(p, s, markets, focus, shadow),
      _hero(p, s, focus),
      if ((cfg['problem'] ?? '').toString().isNotEmpty) _banner(p, cfg['problem'].toString(), _down),
      if ((s['liveError'] ?? '').toString().isNotEmpty) _banner(p, s['liveError'].toString(), _loss),
      if (st['brakePaused'] == true)
        _banner(p, 'Paused by the \$25 brake. ${st['brakeReason'] ?? ''}. Look over the trades, then press Start to turn it back on.', _loss),
      _chartCard(p, focus, heldShadow),
      _trendPill(p, focus, shadow, s),
      _balanceCard(p, s, st, snap),
      shadow != null ? _positionCard(p, shadow, held!) : _ticketCard(p, s, focus),
      _controls(p, st),
      _tradesCard(p, s),
      _activityCard(p),
      _rulesCard(p, s),
      Padding(
        padding: const EdgeInsets.only(top: 6),
        child: Text(
          'Version 1 is read-only: no order is ever sent to Alpaca. Order switch (ALPACA_ORDERS_ENABLED): ${cfg['ordersSwitchOn'] == true ? 'on' : 'off'}.',
          textAlign: TextAlign.center,
          style: TextStyle(color: p.muted, fontSize: 11),
        ),
      ),
    ];
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
            Text('Watching ${markets.length} markets', style: TextStyle(color: p.ink, fontSize: 14, fontWeight: FontWeight.w800)),
            const SizedBox(width: 8),
            _pill('$openCount OPEN NOW', _up),
            const Spacer(),
            Text('tap one', style: TextStyle(color: p.muted, fontSize: 11)),
          ]),
        ),
        SizedBox(
          height: 128,
          child: ListView.separated(
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
              final pts = _points(m);
              final holding = shadow?['symbol'] == sym;
              final signal = _map(m['chart'])['signal'] == 'buy';
              return GestureDetector(
                onTap: () => setState(() => _selected = sym),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  width: 150,
                  padding: const EdgeInsets.fromLTRB(12, 10, 12, 8),
                  decoration: BoxDecoration(
                    color: p.card,
                    borderRadius: BorderRadius.circular(20),
                    border: Border.all(color: on ? _look(sym).color : p.cardEdge, width: on ? 2 : 1),
                    boxShadow: [BoxShadow(color: on ? _look(sym).color.withValues(alpha: 0.25) : p.shadow, blurRadius: on ? 18 : 12, offset: const Offset(0, 6))],
                  ),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Row(children: [
                      _coin(sym, 20),
                      const SizedBox(width: 6),
                      Expanded(
                        child: Text(sym, maxLines: 1, overflow: TextOverflow.ellipsis,
                            style: TextStyle(color: p.ink, fontSize: 12, fontWeight: FontWeight.w800)),
                      ),
                      if (m['open'] != true)
                        Text('closed', style: TextStyle(color: p.muted, fontSize: 9.5, fontWeight: FontWeight.w700)),
                    ]),
                    const SizedBox(height: 6),
                    FittedBox(
                      fit: BoxFit.scaleDown,
                      alignment: Alignment.centerLeft,
                      child: Text(_money(_d(m['price']), sign: false),
                          style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w700)),
                    ),
                    Row(children: [
                      Text('${up ? '+' : ''}${chg.toStringAsFixed(2)}%',
                          style: TextStyle(color: up ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w800)),
                      const Spacer(),
                      if (holding) _pill('HOLDING', _btc) else if (signal) _pill('BUY SIGNAL', _up),
                    ]),
                    const SizedBox(height: 4),
                    Expanded(child: CustomPaint(size: Size.infinite, painter: _SparkPainter(pts, up ? _up : _loss))),
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
        ? 'Crypto · trades all day, every day'
        : open == true
            ? 'Stock market open · closes 4:00 PM ET'
            : open == false
                ? 'Stock market closed${_whenOpens(market['nextOpen'])}'
                : '';
    final look = _look(asset);
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 6, 4, 14),
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
                  style: TextStyle(color: p.ink, fontSize: 42, fontWeight: FontWeight.w600, letterSpacing: -1,
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
    final entry = shadow == null ? null : _d(shadow['entryPrice']);
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
          _segChip(p, 'Trend lines', _lines, () => setState(() => _lines = !_lines), icon: Icons.show_chart_rounded),
        ]),
        const SizedBox(height: 10),
        _CandleChart(points: pts, pal: p, entry: entry, lines: _lines, price: _d(snap['price'])),
        if (_lines) ...[
          const SizedBox(height: 8),
          Wrap(spacing: 14, runSpacing: 4, alignment: WrapAlignment.center, children: [
            _legend(p, _fastC, 'Fast line (45 min)'),
            _legend(p, _slowC, 'Slow line (1 h 45 min)'),
            if (entry != null) _legend(p, _btc, 'Your pretend buy'),
          ]),
        ],
      ]),
    );
  }

  // ── What the agent thinks, in one line

  Widget _trendPill(_Pal p, Map<String, dynamic> snap, Map<String, dynamic>? shadow, Map<String, dynamic> s) {
    final trend = (_map(snap['chart'])['trend'] ?? 'unknown').toString();
    final st = _map(s['state']);
    final running = st['enabled'] == true && st['brakePaused'] != true;
    final (Color c, IconData icon, String title) = switch (trend) {
      'up' => (_up, Icons.trending_up_rounded, 'Trend is UP'),
      'down' => (_loss, Icons.trending_down_rounded, 'Trend is DOWN'),
      'flat' => (_down, Icons.trending_flat_rounded, 'Moving sideways'),
      _ => (_slowC, Icons.hourglass_top_rounded, 'Waiting for data'),
    };
    final asset = (snap['asset'] ?? '').toString();
    final closedStock = !asset.contains('/') && snap['open'] == false;
    final sub = !running
        ? 'Agent is stopped. Press Start to let it watch all markets.'
        : shadow != null && shadow['symbol'] == asset
            ? 'Holding a pretend trade here. It sells at the target, the stop, or when the trend turns down.'
            : shadow != null
            ? 'Holding ${shadow['symbol']} right now. One trade at a time, so no buy here until that one is sold.'
            : closedStock
            ? 'The stock market is closed, so $asset waits. The agent keeps watching the crypto markets.'
            : trend == 'up'
                ? 'The turn up already happened. It waits for the next fresh turn up so it never buys late.'
                : trend == 'down'
                    ? 'Prices are falling, so it waits. It buys only when the fast line crosses above the slow line.'
                    : 'It buys only when the fast line crosses above the slow line.';
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(22),
        gradient: LinearGradient(colors: [c.withValues(alpha: p.light ? 0.16 : 0.22), c.withValues(alpha: 0.04)]),
        border: Border.all(color: c.withValues(alpha: 0.35)),
      ),
      child: Row(children: [
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(14)),
          child: Icon(icon, color: Colors.white),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w900)),
            const SizedBox(height: 2),
            Text(sub, style: TextStyle(color: p.muted, fontSize: 12.5, height: 1.3)),
          ]),
        ),
      ]),
    );
  }

  // ── Balance and score

  Widget _balanceCard(_Pal p, Map<String, dynamic> s, Map<String, dynamic> st, Map<String, dynamic> snap) {
    final today = _map(s['today']);
    final rec = _map(s['record']);
    final ticket = _map(s['ticket']);
    final total = _d(st['totalPnl']);
    final day = _d(today['day_pnl']);
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
          const Text('Paper balance', style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w600)),
          const Spacer(),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
            child: const Text('PRETEND MONEY', style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
          ),
        ]),
        const SizedBox(height: 4),
        FittedBox(
          fit: BoxFit.scaleDown,
          alignment: Alignment.centerLeft,
          child: Text(snap['equity'] == null ? '—' : _money(_d(snap['equity']), sign: false),
              style: const TextStyle(color: Colors.white, fontSize: 36, fontWeight: FontWeight.w800, letterSpacing: -0.5)),
        ),
        const SizedBox(height: 2),
        Text('Buying power ${_money(_d(snap['buyingPower']), sign: false)} · the agent uses only \$${_d(ticket['amount']).toStringAsFixed(0)} a trade',
            style: const TextStyle(color: Colors.white60, fontSize: 11.5)),
        const SizedBox(height: 14),
        Row(children: [
          Expanded(child: _darkStat('Today', _money(day), day > 0 ? _up : day < 0 ? _loss : Colors.white)),
          const SizedBox(width: 8),
          Expanded(child: _darkStat('All time', _money(total), total > 0 ? _up : total < 0 ? _loss : Colors.white)),
          const SizedBox(width: 8),
          Expanded(child: _darkStat('Wins / losses', '${rec['wins'] ?? 0} / ${rec['losses'] ?? 0}', Colors.white)),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(child: _darkStat('Trades today', '${today['trades'] ?? 0} of ${ticket['maxTradesToday'] ?? 4}', Colors.white)),
          const SizedBox(width: 8),
          Expanded(child: _darkStat('Daily stop', '-\$10', Colors.white)),
          const SizedBox(width: 8),
          Expanded(child: _darkStat('Total brake', '-\$25', Colors.white)),
        ]),
      ]),
    );
  }

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

  // ── Open pretend position

  Widget _positionCard(_Pal p, Map<String, dynamic> sh, Map<String, dynamic> snap) {
    final entry = _d(sh['entryPrice']);
    final qty = _d(sh['qty']);
    final sameAsset = sh['symbol'] == snap['asset'];
    final now = sameAsset ? _d(snap['price']) : entry;
    final worth = qty * now;
    final pl = worth - 50;
    final pct = entry == 0 ? 0.0 : (now - entry) / entry * 100;
    final win = pl >= 0;
    final stop = entry * 0.985;
    final target = entry * 1.03;
    // Where the price sits between the stop (0) and the target (1); the buy price is at 1/3.
    final pos = ((now - stop) / (target - stop)).clamp(0.0, 1.0);
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          _sectionTitle(p, 'Your pretend position'),
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
        Row(children: [
          Expanded(child: _tile(p, 'You put in', _money(50, sign: false))),
          const SizedBox(width: 8),
          Expanded(child: _tile(p, 'Worth now', _money(worth, sign: false), color: win ? _up : _loss)),
        ]),
        const SizedBox(height: 8),
        Row(children: [
          Expanded(child: _tile(p, 'Bought at', _money(entry, sign: false))),
          const SizedBox(width: 8),
          Expanded(child: _tile(p, 'Shares', '${qty.toStringAsFixed(qty < 0.01 ? 6 : 4)} ${sh['symbol']}')),
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
                    gradient: const LinearGradient(colors: [_loss, Color(0xFFF59E0B), _up], stops: [0, 0.33, 1]),
                  ),
                ),
              ),
              Positioned(left: w / 3 - 1, top: 4, child: Container(width: 2, height: 18, color: p.ink.withValues(alpha: 0.5))),
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
            child: Text('Stop loss\n${_money(stop, sign: false)} · -\$0.75',
                style: const TextStyle(color: _loss, fontSize: 11.5, fontWeight: FontWeight.w700, height: 1.3)),
          ),
          Expanded(
            child: Text('Take profit\n${_money(target, sign: false)} · +\$1.50',
                textAlign: TextAlign.right, style: const TextStyle(color: _up, fontSize: 11.5, fontWeight: FontWeight.w700, height: 1.3)),
          ),
        ]),
        const SizedBox(height: 6),
        Text('Bought ${_etLabel(sh['entryAt'])}', style: TextStyle(color: p.muted, fontSize: 11.5)),
      ]),
    );
  }

  // ── No position: the next trade, as a ticket

  Widget _ticketCard(_Pal p, Map<String, dynamic> s, Map<String, dynamic> snap) {
    final t = _map(s['ticket']);
    final price = _d(snap['price']);
    final amount = _d(t['amount']) == 0 ? 50.0 : _d(t['amount']);
    final shares = price == 0 ? 0 : amount / price;
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          _sectionTitle(p, 'Next trade'),
          const Spacer(),
          _pill('AUTOMATIC', _slowC),
        ]),
        const SizedBox(height: 12),
        Container(
          padding: const EdgeInsets.all(4),
          decoration: BoxDecoration(color: p.chip, borderRadius: BorderRadius.circular(999)),
          child: Row(children: [
            Expanded(
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 9),
                decoration: BoxDecoration(color: p.dark, borderRadius: BorderRadius.circular(999)),
                alignment: Alignment.center,
                child: Text('BUY', style: TextStyle(color: p.onDark, fontWeight: FontWeight.w800, fontSize: 12.5)),
              ),
            ),
            Expanded(
              child: Center(child: Text('SELL', style: TextStyle(color: p.muted, fontWeight: FontWeight.w800, fontSize: 12.5))),
            ),
          ]),
        ),
        const SizedBox(height: 10),
        _ticketRow(p, 'Amount it puts in', _money(amount, sign: false), big: true,
            trailing: price == 0 ? null : '≈ ${shares.toStringAsFixed(shares < 0.01 ? 6 : 4)} ${snap['asset'] ?? ''}'),
        _ticketRow(p, 'Take profit  +${_d(t['takeProfitPct']).toStringAsFixed(0)}%', '+${_money(_d(t['takeProfitUsd']), sign: false)}',
            color: _up, trailing: price == 0 ? null : 'sells at ${_money(price * 1.03, sign: false)}'),
        _ticketRow(p, 'Stop loss  -${_d(t['stopLossPct']).toStringAsFixed(1)}%', '-${_money(_d(t['stopLossUsd']), sign: false)}',
            color: _loss, trailing: price == 0 ? null : 'sells at ${_money(price * 0.985, sign: false)}'),
        _ticketRow(p, 'Leverage', 'None (1x)', trailing: 'no borrowing, no shorting'),
        const SizedBox(height: 10),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 14),
          decoration: BoxDecoration(color: p.dark, borderRadius: BorderRadius.circular(999)),
          alignment: Alignment.center,
          child: Text('Buys by itself when the trend turns up',
              style: TextStyle(color: p.onDark, fontWeight: FontWeight.w800, fontSize: 13.5)),
        ),
        const SizedBox(height: 6),
        Center(
          child: Text('Shown for ${snap['asset'] ?? ''} at its price right now. The agent buys whichever market signals first.',
              textAlign: TextAlign.center, style: TextStyle(color: p.muted, fontSize: 11)),
        ),
      ]),
    );
  }

  Widget _ticketRow(_Pal p, String k, String v, {bool big = false, Color? color, String? trailing}) => Container(
        margin: const EdgeInsets.only(top: 8),
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
        decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(16)),
        child: Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(k, style: TextStyle(color: p.muted, fontSize: 11.5)),
              const SizedBox(height: 2),
              Text(v, style: TextStyle(color: color ?? p.ink, fontSize: big ? 24 : 17, fontWeight: FontWeight.w800)),
            ]),
          ),
          if (trailing != null) Text(trailing, style: TextStyle(color: p.muted, fontSize: 11.5)),
        ]),
      );

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
              onPressed: _busy ? null : _checkNow,
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

  // ── Pretend trade history

  Widget _tradesCard(_Pal p, Map<String, dynamic> s) {
    final trades = ((s['trades'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    return _card(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _sectionTitle(p, 'Pretend trades'),
        const SizedBox(height: 8),
        if (trades.isEmpty)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 14),
            child: Row(children: [
              Icon(Icons.receipt_long_rounded, color: p.muted),
              const SizedBox(width: 10),
              Expanded(
                child: Text('No trades yet. Each buy shows the \$50 put in, and each sell shows what came back and the win or loss.',
                    style: TextStyle(color: p.muted, fontSize: 12.5, height: 1.3)),
              ),
            ]),
          ),
        for (final t in trades) _tradeRow(p, t),
      ]),
    );
  }

  Widget _tradeRow(_Pal p, Map<String, dynamic> t) {
    final buy = t['decision'] == 'would buy';
    final det = _map(t['details']);
    final asset = (t['asset'] ?? '').toString();
    final amount = det['amount'] == null ? 50.0 : _d(det['amount']);
    final qty = _d(det['qty']);
    final pnl = _d(det['pnl']);
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
              buy
                  ? '${qty == 0 ? '' : '${qty.toStringAsFixed(qty < 0.01 ? 6 : 4)} at '}${_money(_d(t['price']), sign: false)}'
                  : 'at ${_money(_d(t['price']), sign: false)} · ${_short((t['reason'] ?? '').toString())}',
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: p.muted, fontSize: 11.5),
            ),
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
    final rows = _showAllLog ? _log : _log.take(8).toList();
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
            child: Text('Nothing yet. A new line appears with every 15-minute check.', style: TextStyle(color: p.muted, fontSize: 12.5)),
          ),
        for (final r in rows) _logRow(p, r),
        if (_log.length > 8)
          Center(
            child: TextButton(
              onPressed: () async {
                if (_showAllLog && _moreLog) {
                  await _loadLog(more: true);
                } else {
                  setState(() => _showAllLog = true);
                }
              },
              child: Text(_showAllLog ? (_moreLog ? 'Show older' : 'That is everything') : 'Show all'),
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
              Text(_cap(decision), style: TextStyle(color: c, fontWeight: FontWeight.w800, fontSize: 12.5)),
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
            title: Text('The rules it follows', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14.5)),
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

class _CandleChart extends StatefulWidget {
  const _CandleChart({required this.points, required this.pal, required this.entry, required this.lines, required this.price});
  final List<Map<String, dynamic>> points;
  final _Pal pal;
  final double? entry;
  final bool lines;
  final double price;

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
                DefaultTextStyle.of(context).style.fontFamily),
          ),
        ),
      );
    });
  }
}

class _CandlePainter extends CustomPainter {
  _CandlePainter(this.pts, this.p, this.entry, this.lines, this.price, this.touch, this.font);
  final String? font;
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
    final step = size.width / n;
    double cx(int i) => step * i + step / 2;
    double y(double v) => h - (v - lo) / (hi - lo) * h;

    // soft grid
    final grid = Paint()
      ..color = p.line.withValues(alpha: 0.7)
      ..strokeWidth = 1;
    for (var i = 1; i <= 3; i++) {
      final gy = h * i / 4;
      for (var x = 0.0; x < size.width; x += 6) {
        canvas.drawLine(Offset(x, gy), Offset(x + 2, gy), grid);
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

    // pretend buy price
    if (entry != null) _dashed(canvas, y(entry!), size.width, _btc, 'Buy ${_money(entry!, sign: false)}', left: true);

    // last price line with a tag
    if (price > 0) _dashed(canvas, y(price), size.width, p.ink.withValues(alpha: 0.55), _money(price, sign: false));

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
      old.pts != pts || old.touch != touch || old.lines != lines || old.entry != entry || old.price != price || old.p.light != p.light;
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
      'BTC/USD' => const _Look('Bitcoin', '₿', _btc),
      'ETH/USD' => const _Look('Ethereum', 'Ξ', Color(0xFF627EEA)),
      'SOL/USD' => const _Look('Solana', 'S', Color(0xFF9945FF)),
      _ => _Look(symbol, symbol.isEmpty ? '?' : symbol[0], _slowC),
    };

Widget _coin(String symbol, double size) {
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
