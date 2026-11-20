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
