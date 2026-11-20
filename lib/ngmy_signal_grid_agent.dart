// Signal Grid — Alpaca PAPER trading agent, Version 1 (read-only).
//
// This screen is only the control panel. The agent itself runs on the server (bright-handler, called every
// 15 minutes by Supabase pg_cron), so it keeps going when the phone is off. The Alpaca keys live only in
// Supabase secrets and never reach this app. Version 1 places no orders: it logs what it WOULD do.

import 'dart:async';

import 'package:flutter/material.dart';

import 'ngmy_edge_invoke.dart';

const _green = Color(0xFF22C55E);
const _red = Color(0xFFEF4444);
const _amber = Color(0xFFF59E0B);
const _violet = Color(0xFFA78BFA);
const _pink = Color(0xFFEC4899);

Future<void> showNgmySignalGridAgent(BuildContext context) => Navigator.of(context).push(
      MaterialPageRoute<void>(builder: (_) => const NgmySignalGridAgentScreen()),
    );

class NgmySignalGridAgentScreen extends StatefulWidget {
  const NgmySignalGridAgentScreen({super.key});

  @override
  State<NgmySignalGridAgentScreen> createState() => _NgmySignalGridAgentScreenState();
}

class _NgmySignalGridAgentScreenState extends State<NgmySignalGridAgentScreen> {
  Map<String, dynamic>? _status;
  List<Map<String, dynamic>> _log = [];
  bool _loading = true;
  bool _busy = false;
  bool _moreLog = true;
  String? _error;
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    unawaited(_reload(live: true));
    _timer = Timer.periodic(const Duration(seconds: 60), (_) => unawaited(_reload()));
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
        res?['ok'] == true ? _green : _red);
    await _reload();
  }

  Future<void> _checkNow() async {
    setState(() => _busy = true);
    final res = await ngmyEdgeInvoke({'action': 'paCheck'}, timeout: const Duration(seconds: 60));
    if (!mounted) return;
    setState(() => _busy = false);
    if (res?['ok'] != true) _snack((res?['error'] ?? 'The check did not finish.').toString(), _red);
    await _reload();
  }

  void _snack(String msg, Color c) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg), backgroundColor: c));
  }

  @override
  Widget build(BuildContext context) {
    final light = Theme.of(context).brightness == Brightness.light;
    final pal = _Pal(light);
    return Scaffold(
      backgroundColor: pal.bg,
      appBar: AppBar(
        backgroundColor: pal.bg,
        foregroundColor: pal.ink,
        elevation: 0,
        title: const Text('Signal Grid · Paper Agent', style: TextStyle(fontWeight: FontWeight.w800)),
        actions: [
          IconButton(
            tooltip: 'Refresh from Alpaca',
            onPressed: _busy ? null : () => _reload(live: true),
            icon: const Icon(Icons.refresh_rounded),
          ),
        ],
      ),
      body: _loading
          ? const Center(child: CircularProgressIndicator())
          : RefreshIndicator(
              onRefresh: () => _reload(live: true),
              child: ListView(
                padding: const EdgeInsets.fromLTRB(16, 4, 16, 32),
                children: _status == null ? [_notice(pal, _error ?? 'Nothing to show yet.')] : _body(pal),
              ),
            ),
    );
  }

  List<Widget> _body(_Pal pal) {
    final s = _status!;
    final st = _map(s['state']);
    final cfg = _map(s['config']);
    final snap = _map(st['snapshot']);
    final today = _map(s['today']);
    final enabled = st['enabled'] == true;
    final brake = st['brakePaused'] == true;
    final positions = ((snap['positions'] as List?) ?? const []).whereType<Map>().toList();
    final shadow = st['shadow'] is Map ? _map(st['shadow']) : null;
    final asset = (snap['asset'] ?? '').toString();
    return [
      _chipRow(pal, [
        _chip('VERSION 1 · READ-ONLY', _violet),
        _chip('PAPER ONLY', _pink),
        _chip('NO ORDERS', _amber),
      ]),
      const SizedBox(height: 10),
      if ((cfg['problem'] ?? '').toString().isNotEmpty) _notice(pal, cfg['problem'].toString(), color: _amber),
      if ((s['liveError'] ?? '').toString().isNotEmpty) _notice(pal, s['liveError'].toString(), color: _red),
      if (brake) _notice(pal, 'Paused by the \$25 brake. ${st['brakeReason'] ?? ''}. Review the log, then press Start to turn it back on.', color: _red),
      _plainWords(pal, s, st, snap, today, shadow),
      _chartCard(pal, snap, shadow),
      _card(pal, title: 'Agent', children: [
        Row(children: [
          Icon(Icons.circle, size: 12, color: brake ? _red : (enabled ? _green : pal.muted)),
          const SizedBox(width: 8),
          Text(brake ? 'Paused (brake)' : (enabled ? 'Running' : 'Stopped'),
              style: TextStyle(color: pal.ink, fontWeight: FontWeight.w800, fontSize: 16)),
          const Spacer(),
          Text('Now: ${s['nowEt'] ?? ''}', style: TextStyle(color: pal.muted, fontSize: 11)),
        ]),
        const SizedBox(height: 6),
        Text('Last check: ${_ago(st['lastTickAt'])} · checks every 15 minutes on the server',
            style: TextStyle(color: pal.muted, fontSize: 12)),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(
            child: FilledButton.icon(
              style: FilledButton.styleFrom(backgroundColor: enabled && !brake ? _red : _green),
              onPressed: _busy ? null : () => _setEnabled(!(enabled && !brake)),
              icon: Icon(enabled && !brake ? Icons.stop_rounded : Icons.play_arrow_rounded),
              label: Text(enabled && !brake ? 'Stop' : 'Start'),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: OutlinedButton.icon(
              onPressed: _busy ? null : _checkNow,
              icon: const Icon(Icons.radar_rounded),
              label: const Text('Check now'),
            ),
          ),
        ]),
        const SizedBox(height: 8),
        Text(
          'Order switch (ALPACA_ORDERS_ENABLED): ${cfg['ordersSwitchOn'] == true ? 'on' : 'off'}. Version 1 has no order code, so no order can be placed either way.',
          style: TextStyle(color: pal.muted, fontSize: 11.5),
        ),
      ]),
      _card(pal, title: 'Paper account', children: [
        if (snap.isEmpty)
          Text('No reading yet. Press refresh once the keys are set.', style: TextStyle(color: pal.muted))
        else ...[
          _kv(pal, 'Paper balance', _usd(snap['equity']), big: true),
          _kv(pal, 'Buying power', _usd(snap['buyingPower'])),
          _kv(pal, 'Cash', _usd(snap['cash'])),
          _kv(pal, 'Read at', (snap['etTime'] ?? '').toString()),
          Text(
            'This is pretend money from Alpaca. Buying power shows double because Alpaca offers borrowing (margin); the agent never borrows and only uses \$50 per trade.',
            style: TextStyle(color: pal.muted, fontSize: 11.5, height: 1.3),
          ),
        ],
      ]),
      _card(pal, title: 'Market and position', children: [
        _kv(pal, asset.isEmpty ? 'Price' : '$asset price', snap['price'] == null ? '—' : _usd(snap['price']), big: true),
        _kv(pal, 'Open position at Alpaca',
            positions.isEmpty ? 'None' : positions.map((p) => '${p['symbol']} ${_num(p['qty'], 6)} @ ${_usd(p['avgEntry'])}').join(', ')),
        _kv(pal, 'Would-be position (log only)',
            shadow == null ? 'None' : '${shadow['symbol']} \$50 bought at ${_usd(shadow['entryPrice'])}'),
      ]),
      _card(pal, title: 'Demo profit and loss', children: [
        _kv(pal, 'Running total (for the \$25 brake)', _usd(st['totalPnl']), color: _pnlColor(st['totalPnl'], pal)),
        _kv(pal, 'Today (for the \$10 daily stop)', _usd(today['day_pnl'] ?? 0), color: _pnlColor(today['day_pnl'], pal)),
        _kv(pal, 'Would-be trades today', '${today['trades'] ?? 0}'),
        _kv(pal, 'Start-of-day balance', today['start_equity'] == null ? '—' : _usd(today['start_equity'])),
      ]),
      _card(pal, title: 'Trading rules (read-only)', children: [
        for (final line in ((s['rules'] as List?) ?? const []))
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('•  ', style: TextStyle(color: _violet, fontWeight: FontWeight.w900)),
              Expanded(child: Text(line.toString(), style: TextStyle(color: pal.ink, fontSize: 13, height: 1.3))),
            ]),
          ),
      ]),
      _card(pal, title: 'Decision log (newest first)', children: [
        if (_log.isEmpty) Text('No entries yet. The first one comes with the next 15-minute check.', style: TextStyle(color: pal.muted)),
        for (final r in _log) _logRow(pal, r),
        if (_log.isNotEmpty && _moreLog)
          Center(child: TextButton(onPressed: () => _loadLog(more: true), child: const Text('Show older'))),
      ]),
    ];
  }

  /// The whole picture in a few plain sentences: trend, market open or closed, the pretend trade, win or lose.
  Widget _plainWords(_Pal pal, Map<String, dynamic> s, Map<String, dynamic> st, Map<String, dynamic> snap,
      Map<String, dynamic> today, Map<String, dynamic>? shadow) {
    final chart = _map(snap['chart']);
    final trend = (chart['trend'] ?? 'unknown').toString();
    final market = _map(s['market']);
    final asset = (market['asset'] ?? snap['asset'] ?? 'SPY').toString();
    final name = asset == 'SPY' ? 'SPY (a fund that follows the 500 biggest US companies)' : 'Bitcoin (BTC/USD)';
    final price = _d(snap['price']);
    final enabled = st['enabled'] == true && st['brakePaused'] != true;

    final (IconData icon, Color tc, String headline) = switch (trend) {
      'up' => (Icons.trending_up_rounded, _green, '$asset is trending UP'),
      'down' => (Icons.trending_down_rounded, _red, '$asset is trending DOWN'),
      'flat' => (Icons.trending_flat_rounded, _amber, '$asset is moving sideways'),
      _ => (Icons.hourglass_empty_rounded, pal.muted, 'Waiting for the first reading'),
    };

    final lines = <String>[];
    // 1. Is anything happening right now?
    if (market['open'] == true && asset != 'SPY') {
      lines.add('It is the weekend, so the agent watches $name, which trades all day.');
    } else if (market['open'] == true) {
      lines.add('The stock market is open now. The agent looks at $name every 15 minutes.');
    } else if (market['open'] == false) {
      lines.add('The stock market is closed now, so nothing happens until it opens again${_whenOpens(market['nextOpen'])}.');
    }
    if (!enabled) lines.add('The agent is stopped. Press Start below to let it watch the market.');

    // 2. The pretend trade and win or lose.
    if (shadow != null) {
      final entry = _d(shadow['entryPrice']);
      final qty = _d(shadow['qty']);
      final now = shadow['symbol'] == asset ? price : entry;
      final pl = qty * (now - entry);
      final pct = entry == 0 ? 0 : (now - entry) / entry * 100;
      final up = pl >= 0;
      lines.add('The agent is holding a pretend \$50 of ${shadow['symbol']}, bought at ${_usd(entry)}. '
          'Right now that would be ${up ? 'UP' : 'DOWN'} ${_usd(pl.abs())} (${pct >= 0 ? '+' : ''}${pct.toStringAsFixed(2)}%).');
      lines.add('It sells to take the win at ${_usd(entry * 1.03)} (about +\$1.50), or to stop the loss at ${_usd(entry * 0.985)} '
          '(about -\$0.75), or when the trend turns down.');
    } else {
      lines.add('No pretend trade is open. The agent only buys \$50 at the moment the trend turns UP '
          '(the pink fast line crosses above the purple slow line).');
      if (trend == 'up') {
        lines.add('The trend is already up, but it turned up earlier, so the agent waits for the next fresh turn instead of buying late.');
      } else if (trend == 'down') {
        lines.add('The trend is down, so the agent waits. Buying now would likely lose.');
      }
    }

    // 3. Score so far.
    final total = _d(st['totalPnl']);
    final day = _d(today['day_pnl']);
    lines.add(total == 0 && day == 0
        ? 'Score so far: no pretend wins or losses yet.'
        : 'Score so far: ${total >= 0 ? 'won' : 'lost'} ${_usd(total.abs())} in total, ${day >= 0 ? 'won' : 'lost'} ${_usd(day.abs())} today (pretend money).');
    lines.add('How you win or lose: after a buy, if the price goes UP you win, if it goes DOWN you lose. Version 1 only pretends, no money moves.');

    return _card(pal, title: 'In plain words', children: [
      Row(children: [
        Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(color: tc.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(12)),
          child: Icon(icon, color: tc, size: 26),
        ),
        const SizedBox(width: 12),
        Expanded(child: Text(headline, style: TextStyle(color: pal.ink, fontSize: 18, fontWeight: FontWeight.w900))),
      ]),
      const SizedBox(height: 10),
      for (final l in lines)
        Padding(
          padding: const EdgeInsets.only(bottom: 7),
          child: Text(l, style: TextStyle(color: pal.ink, fontSize: 13.5, height: 1.35)),
        ),
    ]);
  }

  Widget _chartCard(_Pal pal, Map<String, dynamic> snap, Map<String, dynamic>? shadow) {
    final pts = ((_map(snap['chart'])['points'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    if (pts.length < 2) return const SizedBox.shrink();
    final entry = shadow == null ? null : _d(shadow['entryPrice']);
    return _card(pal, title: 'Last 4 hours of ${snap['asset'] ?? ''}', children: [
      SizedBox(
        height: 180,
        width: double.infinity,
        child: CustomPaint(painter: _ChartPainter(pts, pal, entry)),
      ),
      const SizedBox(height: 8),
      Wrap(spacing: 14, runSpacing: 4, children: [
        _legend(pal, pal.ink, 'Price'),
        _legend(pal, _pink, 'Fast line (last 45 min)'),
        _legend(pal, _violet, 'Slow line (last 1 h 45 min)'),
        if (entry != null) _legend(pal, _amber, 'Pretend buy price'),
      ]),
      const SizedBox(height: 6),
      Text('Pink above purple means prices are rising lately. The agent buys when pink crosses up through purple, and sells when it crosses back down.',
          style: TextStyle(color: pal.muted, fontSize: 11.5, height: 1.3)),
    ]);
  }

  Widget _legend(_Pal pal, Color c, String t) => Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 14, height: 3, color: c),
        const SizedBox(width: 5),
        Text(t, style: TextStyle(color: pal.muted, fontSize: 11)),
      ]);

  String _whenOpens(dynamic iso) {
    // Alpaca gives the time with the New York offset, e.g. 2026-11-23T09:30:00-05:00: read the clock part as ET.
    final s = '${iso ?? ''}';
    final d = DateTime.tryParse(s.length >= 19 ? s.substring(0, 19) : '');
    if (d == null) return '';
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    final h = d.hour % 12 == 0 ? 12 : d.hour % 12;
    return ' on ${days[d.weekday - 1]} at $h:${d.minute.toString().padLeft(2, '0')} ${d.hour < 12 ? 'AM' : 'PM'} ET';
  }

  Widget _logRow(_Pal pal, Map<String, dynamic> r) {
    final decision = (r['decision'] ?? '').toString();
    final c = switch (decision) {
      'would buy' => _green,
      'would sell' => _pink,
      'hold' => _violet,
      'day start' || 'day end' => const Color(0xFF60A5FA),
      'start' => _green,
      'stop' => _red,
      _ => r['kind'] == 'error' ? _red : pal.muted,
    };
    final hasMa = r['fast_ma'] != null && r['slow_ma'] != null;
    return Container(
      margin: const EdgeInsets.only(bottom: 8),
      padding: const EdgeInsets.all(10),
      decoration: BoxDecoration(
        color: pal.inner,
        borderRadius: BorderRadius.circular(12),
        border: Border(left: BorderSide(color: c, width: 3)),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Expanded(child: Text((r['et_time'] ?? '').toString(), style: TextStyle(color: pal.muted, fontSize: 11))),
          _chip(decision.toUpperCase(), c),
        ]),
        const SizedBox(height: 4),
        if (r['asset'] != null || r['price'] != null)
          Text(
            [
              if (r['asset'] != null) r['asset'].toString(),
              if (r['price'] != null) _usd(r['price']),
              if (hasMa) 'fast ${_num(r['fast_ma'], 2)} / slow ${_num(r['slow_ma'], 2)}',
              if (r['signal'] != null) 'signal: ${r['signal']}',
            ].join(' · '),
            style: TextStyle(color: pal.ink, fontSize: 12.5, fontWeight: FontWeight.w700),
          ),
        Text((r['reason'] ?? '').toString(), style: TextStyle(color: pal.ink, fontSize: 12.5, height: 1.3)),
        if (r['balance'] != null || r['total_pnl'] != null)
          Text(
            [
              if (r['balance'] != null) 'balance ${_usd(r['balance'])}',
              if (r['total_pnl'] != null) 'running P/L ${_usd(r['total_pnl'])}',
            ].join(' · '),
            style: TextStyle(color: pal.muted, fontSize: 11),
          ),
      ]),
    );
  }

  Widget _card(_Pal pal, {required String title, required List<Widget> children}) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: pal.card,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: pal.line),
          boxShadow: pal.light ? [BoxShadow(color: _violet.withValues(alpha: 0.12), blurRadius: 18, offset: const Offset(0, 6))] : null,
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title.toUpperCase(),
              style: TextStyle(color: pal.light ? const Color(0xFF7C3AED) : _violet, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
          const SizedBox(height: 10),
          ...children,
        ]),
      );

  Widget _kv(_Pal pal, String k, String v, {bool big = false, Color? color}) => Padding(
        padding: const EdgeInsets.only(bottom: 6),
        child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(child: Text(k, style: TextStyle(color: pal.muted, fontSize: 13))),
          const SizedBox(width: 8),
          Flexible(
            child: Text(v,
                textAlign: TextAlign.right,
                style: TextStyle(color: color ?? pal.ink, fontSize: big ? 20 : 13.5, fontWeight: big ? FontWeight.w900 : FontWeight.w700)),
          ),
        ]),
      );

  Widget _notice(_Pal pal, String msg, {Color color = _violet}) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: color.withValues(alpha: 0.12),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(color: color.withValues(alpha: 0.5)),
        ),
        child: Text(msg, style: TextStyle(color: pal.ink, fontSize: 13, height: 1.35)),
      );

  Widget _chipRow(_Pal pal, List<Widget> chips) => Wrap(spacing: 6, runSpacing: 6, children: chips);

  Widget _chip(String t, Color c) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
        decoration: BoxDecoration(color: c.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(999)),
        child: Text(t, style: TextStyle(color: c, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 0.6)),
      );

  Color _pnlColor(dynamic v, _Pal pal) {
    final n = _d(v);
    if (n > 0) return _green;
    if (n < 0) return _red;
    return pal.ink;
  }
}

class _ChartPainter extends CustomPainter {
  _ChartPainter(this.pts, this.pal, this.entry);
  final List<Map<String, dynamic>> pts;
  final _Pal pal;
  final double? entry;

  @override
  void paint(Canvas canvas, Size size) {
    final vals = <double>[
      for (final p in pts) ...[
        _d(p['c']),
        if (p['f'] != null) _d(p['f']),
        if (p['s'] != null) _d(p['s']),
      ],
      ?entry,
    ];
    var lo = vals.reduce((a, b) => a < b ? a : b);
    var hi = vals.reduce((a, b) => a > b ? a : b);
    if (hi - lo < 1e-9) {
      hi += 1;
      lo -= 1;
    }
    final pad = (hi - lo) * 0.08;
    lo -= pad;
    hi += pad;
    double x(int i) => i / (pts.length - 1) * size.width;
    double y(double v) => size.height - (v - lo) / (hi - lo) * size.height;

    final grid = Paint()
      ..color = pal.line
      ..strokeWidth = 1;
    for (var i = 0; i <= 3; i++) {
      final gy = size.height * i / 3;
      canvas.drawLine(Offset(0, gy), Offset(size.width, gy), grid);
    }

    void line(String key, Color c, double w) {
      final path = Path();
      var started = false;
      for (var i = 0; i < pts.length; i++) {
        final v = pts[i][key];
        if (v == null) continue;
        final o = Offset(x(i), y(_d(v)));
        started ? path.lineTo(o.dx, o.dy) : path.moveTo(o.dx, o.dy);
        started = true;
      }
      canvas.drawPath(
          path,
          Paint()
            ..color = c
            ..style = PaintingStyle.stroke
            ..strokeWidth = w
            ..strokeJoin = StrokeJoin.round);
    }

    if (entry != null) {
      final ey = y(entry!);
      final p = Paint()
        ..color = _amber
        ..strokeWidth = 1.5;
      for (var dx = 0.0; dx < size.width; dx += 8) {
        canvas.drawLine(Offset(dx, ey), Offset(dx + 4, ey), p);
      }
    }
    line('s', _violet, 2.2);
    line('f', _pink, 2.2);
    line('c', pal.ink.withValues(alpha: 0.85), 1.4);

    final tp = TextPainter(textDirection: TextDirection.ltr);
    for (final (v, dy) in [(hi - pad, 0.0), (lo + pad, size.height - 14)]) {
      tp.text = TextSpan(text: _usd(v), style: TextStyle(color: pal.muted, fontSize: 10));
      tp.layout();
      tp.paint(canvas, Offset(size.width - tp.width, dy));
    }
  }

  @override
  bool shouldRepaint(covariant _ChartPainter old) => old.pts != pts || old.entry != entry;
}

class _Pal {
  _Pal(this.light);
  final bool light;
  Color get bg => light ? Colors.white : const Color(0xFF0B0F17);
  Color get card => light ? Colors.white : const Color(0xFF131A26);
  Color get inner => light ? const Color(0xFFF8FAFC) : const Color(0xFF0F1520);
  Color get line => light ? const Color(0xFFE9E3FB) : const Color(0xFF1F2A3A);
  Color get ink => light ? const Color(0xFF0F172A) : Colors.white;
  Color get muted => light ? const Color(0xFF64748B) : const Color(0xFF8B98AD);
}

Map<String, dynamic> _map(dynamic v) => v is Map ? Map<String, dynamic>.from(v) : <String, dynamic>{};

double _d(dynamic v) => v is num ? v.toDouble() : double.tryParse('${v ?? ''}') ?? 0;

String _num(dynamic v, int digits) => _d(v).toStringAsFixed(digits);

String _usd(dynamic v) {
  final n = _d(v);
  final s = n.abs().toStringAsFixed(2).replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (m) => ',');
  return '${n < 0 ? '-' : ''}\$$s';
}

String _ago(dynamic iso) {
  final t = DateTime.tryParse('${iso ?? ''}');
  if (t == null) return 'not yet';
  final m = DateTime.now().difference(t).inMinutes;
  if (m < 1) return 'just now';
  if (m < 60) return '$m min ago';
  final h = m ~/ 60;
  return h < 48 ? '$h h ago' : '${h ~/ 24} days ago';
}
