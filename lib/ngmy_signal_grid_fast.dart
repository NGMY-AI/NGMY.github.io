// Signal Grid — Fast Systems screen (Options, Scalper). Paper only, pretend money.
//
// Opened from the icons at the top of the Signal Grid agent screen; back returns there. Each system has its own
// Start/Stop, history, win rate and brakes, and shares ONE paper balance with the main agent. Every trade closes
// within 30 minutes: exit checks run every minute on the server, and the hard close sells at the last check before
// 30 minutes.

part of 'ngmy_signal_grid_agent.dart';

class NgmyFastSystemScreen extends StatefulWidget {
  const NgmyFastSystemScreen({super.key, required this.system, this.previewStatus, this.previewLog});
  final String system; // 'options' or 'scalper'
  @visibleForTesting
  final Map<String, dynamic>? previewStatus;
  @visibleForTesting
  final List<Map<String, dynamic>>? previewLog;

  @override
  State<NgmyFastSystemScreen> createState() => _NgmyFastSystemScreenState();
}

class _NgmyFastSystemScreenState extends State<NgmyFastSystemScreen> {
  Map<String, dynamic>? _s;
  List<Map<String, dynamic>> _log = [];
  bool _loading = true;
  bool _busy = false;
  String? _error;
  Timer? _timer;
  Timer? _clockTimer;
  bool _allTrades = false;
  bool _allLog = false;

  bool get _options => widget.system == 'options';
  Color get _accent => _options ? const Color(0xFF7C3AED) : const Color(0xFFF59E0B);
  IconData get _icon => _options ? Icons.bolt_rounded : Icons.flash_on_rounded;

  @override
  void initState() {
    super.initState();
    if (widget.previewStatus != null) {
      _s = widget.previewStatus;
      _log = widget.previewLog ?? [];
      _loading = false;
      return;
    }
    unawaited(_reload());
    _timer = Timer.periodic(const Duration(seconds: 30), (_) => unawaited(_reload()));
    // The 30-minute countdown on an open trade moves every second.
    _clockTimer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted && _map(_map(_s?['state'])['shadow']).isNotEmpty) setState(() {});
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    _clockTimer?.cancel();
    super.dispose();
  }

  Future<void> _reload() async {
    final res = await ngmyEdgeInvoke({'action': 'fsStatus', 'system': widget.system}, timeout: const Duration(seconds: 40));
    final log = await ngmyEdgeInvoke({'action': 'fsLog', 'system': widget.system, 'limit': 60}, timeout: const Duration(seconds: 30));
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (res != null && res['ok'] == true) {
        _s = Map<String, dynamic>.from(res);
        _error = null;
      } else {
        _error = (res?['error'] ?? 'Could not load this system right now.').toString();
      }
      if (log != null && log['ok'] == true) {
        _log = ((log['rows'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
      }
    });
  }

  Future<void> _setEnabled(bool on) async {
    setState(() => _busy = true);
    final res = await ngmyEdgeInvoke({'action': 'fsSet', 'system': widget.system, 'enabled': on}, timeout: const Duration(seconds: 40));
    if (!mounted) return;
    setState(() {
      _busy = false;
      if (res != null && res['ok'] == true) _s = Map<String, dynamic>.from(res);
    });
    unawaited(_reload());
  }

  @override
  Widget build(BuildContext context) {
    final p = _Pal(Theme.of(context).brightness == Brightness.light);
    final name = _options ? 'Options' : 'Scalper';
    final st = _map(_s?['state']);
    final brake = st['brakePaused'] == true;
    final on = st['enabled'] == true && !brake;
    return Scaffold(
      backgroundColor: p.bgTop,
      body: Container(
        decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.bgTop, p.bgBottom])),
        child: SafeArea(
          child: Column(children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
              child: Row(children: [
                _round(p, Icons.arrow_back_ios_new_rounded, () => Navigator.maybePop(context)),
                const SizedBox(width: 10),
                Container(
                  width: 34,
                  height: 34,
                  decoration: BoxDecoration(color: _accent, borderRadius: BorderRadius.circular(11)),
                  child: Icon(_icon, color: Colors.white, size: 20),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(name, style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
                    Text('Fast system · paper money only', style: TextStyle(color: p.muted, fontSize: 11.5)),
                  ]),
                ),
                if (_s != null)
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                    decoration: BoxDecoration(color: (brake ? _loss : on ? _up : p.muted).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
                    child: Text(brake ? 'Paused' : on ? 'Running' : 'Stopped',
                        style: TextStyle(color: brake ? _loss : on ? _up : p.muted, fontSize: 12, fontWeight: FontWeight.w800)),
                  ),
                const SizedBox(width: 8),
                _round(p, Icons.refresh_rounded, _busy ? null : () => unawaited(_reload())),
              ]),
            ),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : RefreshIndicator(
                      onRefresh: _reload,
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(16, 4, 16, 40),
                        children: _s == null ? [_note(p, _error ?? 'Nothing to show yet.', _slowC)] : _body(p),
                      ),
                    ),
            ),
          ]),
        ),
      ),
    );
  }

  List<Widget> _body(_Pal p) {
    final s = _s!;
    final st = _map(s['state']);
    final sh = st['shadow'] is Map ? _map(st['shadow']) : null;
    return [
      _sharedBalance(p, s),
      if (_error != null) _note(p, _error!, _loss),
      if (st['brakePaused'] == true)
        _note(p, 'Paused by this system\'s brake. ${st['brakeReason'] ?? ''}. Look over the trades, then press Start to turn it back on.', _loss),
      _controls(p, st),
      _winRate(p, s),
      _settings(p, s),
      if (_options) _optionsCard(p, s),
      if (sh != null) _openTrade(p, sh, _map(st['mark'])),
      _lastCheck(p, st),
      _trades(p, s),
      _activity(p),
      _rules(p, s),
      _frame(
        p,
        child: Row(children: [
          const Icon(Icons.verified_user_rounded, size: 18, color: _up),
          const SizedBox(width: 8),
          Expanded(
            child: Text('Paper money only: no order is ever sent to Alpaca. Orders are disabled.',
                style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3)),
          ),
        ]),
      ),
    ];
  }

  // ── the shared paper balance (the same on every system)

  Widget _sharedBalance(_Pal p, Map<String, dynamic> s) {
    final sh = _map(s['shared']);
    final bal = sh['balance'];
    final move = _d(sh['closed']) + _d(sh['open']);
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF1E1B4B), Color(0xFF312E81), Color(0xFF6D28D9)]),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          const Text('Shared paper balance', style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w600)),
          const Spacer(),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
            child: const Text('ALL SYSTEMS', style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
          ),
        ]),
        const SizedBox(height: 4),
        FittedBox(
          fit: BoxFit.scaleDown,
          alignment: Alignment.centerLeft,
          child: Text(bal == null ? '—' : _money(_d(bal), sign: false),
              style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w800, letterSpacing: -0.5)),
        ),
        Text('${_money(move)} from pretend trades of every system',
            style: TextStyle(color: move > 0 ? _up : move < 0 ? _loss : Colors.white70, fontSize: 12.5, fontWeight: FontWeight.w800)),
        const SizedBox(height: 2),
        Text('Alpaca paper account ${sh['equity'] == null ? '—' : _money(_d(sh['equity']), sign: false)} (unchanged, no orders are sent)',
            style: const TextStyle(color: Colors.white60, fontSize: 11)),
      ]),
    );
  }

  // ── Start / Stop

  Widget _controls(_Pal p, Map<String, dynamic> st) {
    final on = st['enabled'] == true && st['brakePaused'] != true;
    return Padding(
      padding: const EdgeInsets.only(bottom: 12),
      child: SizedBox(
        height: 52,
        width: double.infinity,
        child: FilledButton.icon(
          style: FilledButton.styleFrom(backgroundColor: on ? _loss : _up, shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999))),
          onPressed: _busy || widget.previewStatus != null ? null : () => _setEnabled(!on),
          icon: _busy
              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
              : Icon(on ? Icons.stop_rounded : Icons.play_arrow_rounded),
          label: Text(on ? 'Stop ${_options ? 'Options' : 'Scalper'}' : 'Start ${_options ? 'Options' : 'Scalper'}',
              style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
        ),
      ),
    );
  }

  // ── live win rate (wins out of closed trades)

  Widget _winRate(_Pal p, Map<String, dynamic> s) {
    final r = _map(s['record']);
    final rate = r['winRatePct'];
    final c = rate == null ? p.ink : _d(rate) >= 50 ? _up : _loss;
    return _frame(
      p,
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('LIVE WIN RATE', style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.9)),
            const SizedBox(height: 4),
            Text(rate == null ? 'No closed trades yet' : '${_d(rate).toStringAsFixed(0)}%',
                style: TextStyle(color: c, fontSize: rate == null ? 16 : 30, fontWeight: FontWeight.w900)),
            Text('${r['wins'] ?? 0} won out of ${r['trades'] ?? 0} closed trades',
                style: TextStyle(color: p.muted, fontSize: 12)),
          ]),
        ),
        Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text('All time', style: TextStyle(color: p.muted, fontSize: 11)),
          Text(_money(_d(r['pnlSum'])),
              style: TextStyle(color: _d(r['pnlSum']) > 0 ? _up : _d(r['pnlSum']) < 0 ? _loss : p.ink, fontSize: 18, fontWeight: FontWeight.w800)),
          Text('${r['wins'] ?? 0} W / ${r['losses'] ?? 0} L', style: TextStyle(color: p.muted, fontSize: 11)),
        ]),
      ]),
    );
  }

  // ── settings, with the 30-minute law

  Widget _settings(_Pal p, Map<String, dynamic> s) {
    final g = _map(s['settings']);
    final today = _map(s['today']);
    Widget chip(String k, String v, {Color? c}) => Expanded(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
            decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(12)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(k, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 10.5)),
              const SizedBox(height: 2),
              FittedBox(
                fit: BoxFit.scaleDown,
                alignment: Alignment.centerLeft,
                child: Text(v, style: TextStyle(color: c ?? p.ink, fontSize: 13.5, fontWeight: FontWeight.w800)),
              ),
            ]),
          ),
        );
    final tp = _options ? '+${_money(_d(g['takeProfitUsd']), sign: false)}' : '+${_d(g['takeProfitPct']).toStringAsFixed(0)}% (+\$${_d(g['takeProfitUsd']).toStringAsFixed(0)})';
    final sl = _options ? '-${_money(_d(g['stopLossUsd']), sign: false)}' : '-${_d(g['stopLossPct']).toStringAsFixed(0)}% (-\$${_d(g['stopLossUsd']).toStringAsFixed(0)})';
    return _frame(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Icon(Icons.timer_rounded, size: 18, color: _accent),
          const SizedBox(width: 6),
          Text('THE 30-MINUTE LAW', style: TextStyle(color: p.ink, fontSize: 12, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
        ]),
        const SizedBox(height: 4),
        Text('Every trade closes within ${_d(g['maxHoldMin']).toStringAsFixed(0)} minutes, win, lose or flat. Exits are checked every '
            '${_d(g['exitCheckEveryMin']).toStringAsFixed(0)} minute, and the hard close sells at the last check before 30 minutes '
            '(${_d(g['hardCloseAtMin']).toStringAsFixed(0)} minutes held).',
            style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.35)),
        const SizedBox(height: 10),
        Row(children: [
          chip('Hard close', '${_d(g['maxHoldMin']).toStringAsFixed(0)} min max'),
          const SizedBox(width: 6),
          chip('Exit checks', 'every ${_d(g['exitCheckEveryMin']).toStringAsFixed(0)} min'),
          const SizedBox(width: 6),
          chip('Each trade', _options ? '1 SPY call ≤\$${_d(g['maxPremiumUsd']).toStringAsFixed(0)}' : '\$${_d(g['tradeUsd']).toStringAsFixed(0)}'),
        ]),
        const SizedBox(height: 6),
        Row(children: [
          chip('Take profit', tp, c: _up),
          const SizedBox(width: 6),
          chip('Stop loss', sl, c: _loss),
          const SizedBox(width: 6),
          chip('Trades today', '${today['trades'] ?? 0} of ${g['maxTrades'] ?? '-'}'),
        ]),
        const SizedBox(height: 6),
        Row(children: [
          chip('Daily stop', '-\$${_d(g['dailyStopUsd']).toStringAsFixed(0)}'),
          const SizedBox(width: 6),
          chip('Total brake', '-\$${_d(g['totalBrakeUsd']).toStringAsFixed(0)}'),
          const SizedBox(width: 6),
          chip('Strength', '+${_d(g['strengthPct']).toStringAsFixed(1)}% in 15 min'),
        ]),
      ]),
    );
  }

  // ── Options: the contract it would choose now, or a clear "not enabled" message

  Widget _optionsCard(_Pal p, Map<String, dynamic> s) {
    final o = _map(s['options']);
    if (o.isEmpty) return const SizedBox.shrink();
    if (o['enabled'] != true) {
      return _note(p, (o['message'] ?? 'Options are not enabled on the paper account yet').toString(), o['enabled'] == false ? _down : _slowC);
    }
    final c = _map(o['preview']);
    final fits = o['fits'] == true;
    return _frame(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Text('SPY CALL IT WOULD CHOOSE NOW', style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
          const Spacer(),
          _tag(fits ? 'FITS' : 'TOO EXPENSIVE', fits ? _up : _loss),
        ]),
        const SizedBox(height: 8),
        if (c.isEmpty)
          Text(o['why']?.toString() ?? 'No contract found yet.', style: TextStyle(color: p.ink, fontSize: 13))
        else ...[
          Text('SPY ${_money(_d(c['strike']), sign: false)} call · expires ${_dateLabel(c['expiry'])}',
              style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
          const SizedBox(height: 2),
          Text('Premium ${_money(_d(c['premium']), sign: false)} a share x 100 = ${_money(_d(c['cost']), sign: false)}  ·  SPY ${_money(_d(o['spot']), sign: false)}',
              style: TextStyle(color: p.muted, fontSize: 12)),
          const SizedBox(height: 4),
          Text(fits ? 'It fits the limit: on a passing setup it would buy this one.' : (o['why'] ?? '').toString(),
              style: TextStyle(color: fits ? _up : _loss, fontSize: 12, height: 1.3)),
        ],
      ]),
    );
  }

  // ── the open trade, with its 30-minute countdown

  Widget _openTrade(_Pal p, Map<String, dynamic> sh, Map<String, dynamic> mark) {
    final opt = sh['option'] is Map ? _map(sh['option']) : null;
    final opened = DateTime.tryParse('${sh['entryAt'] ?? ''}');
    final closeBy = opened?.add(const Duration(minutes: 30));
    final left = closeBy?.difference(DateTime.now());
    final pnl = _d(mark['pnl']);
    final mm = left == null || left.isNegative ? '0:00' : '${left.inMinutes}:${(left.inSeconds % 60).toString().padLeft(2, '0')}';
    return _frame(
      p,
      border: _accent,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Text('OPEN TRADE', style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
          const Spacer(),
          _tag('closes in $mm at most', _accent),
        ]),
        const SizedBox(height: 8),
        Text(opt != null ? 'SPY ${_money(_d(opt['strike']), sign: false)} call · expires ${_dateLabel(opt['expiry'])}' : '${sh['symbol']}',
            style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
        const SizedBox(height: 2),
        Text(
          opt != null
              ? 'Premium paid ${_money(_d(sh['entryPrice']), sign: false)} x 100 = ${_money(_d(mark['cost']), sign: false)} · now ${mark['priced'] == false ? 'no price yet' : _money(_d(mark['price']), sign: false)}'
              : '\$${_d(mark['cost']).toStringAsFixed(0)} bought at ${_money(_d(sh['entryPrice']), sign: false)} · now ${_money(_d(mark['price']), sign: false)}',
          style: TextStyle(color: p.muted, fontSize: 12),
        ),
        const SizedBox(height: 6),
        Row(children: [
          Text(_money(pnl), style: TextStyle(color: pnl >= 0 ? _up : _loss, fontSize: 26, fontWeight: FontWeight.w900)),
          const SizedBox(width: 8),
          Text(pnl >= 0 ? 'winning right now' : 'losing right now', style: TextStyle(color: p.muted, fontSize: 12)),
        ]),
        Text('Bought ${_etLabel(sh['entryAt'])}${closeBy == null ? '' : ' · hard close by ${_clock(_toEt(closeBy.toUtc()))} ET'}',
            style: TextStyle(color: p.muted, fontSize: 11.5)),
      ]),
    );
  }

  Widget _lastCheck(_Pal p, Map<String, dynamic> st) {
    final note = (st['lastNote'] ?? '').toString();
    final at = DateTime.tryParse('${st['lastNoteAt'] ?? st['lastTickAt'] ?? ''}');
    return _frame(
      p,
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(Icons.autorenew_rounded, size: 18, color: st['enabled'] == true ? _up : p.muted),
        const SizedBox(width: 8),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(st['enabled'] == true ? 'Checks every minute by itself' : 'Stopped: press Start to let it check every minute',
                style: TextStyle(color: p.ink, fontSize: 13, fontWeight: FontWeight.w800)),
            if (note.isNotEmpty) ...[
              const SizedBox(height: 3),
              Text('${at == null ? '' : '${_clock(_toEt(at.toUtc()))} ET · '}$note', style: TextStyle(color: p.muted, fontSize: 12, height: 1.3)),
            ],
          ]),
        ),
      ]),
    );
  }

  // ── trades and activity: 4, then Show all

  Widget _trades(_Pal p, Map<String, dynamic> s) {
    final list = ((s['trades'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    return _frame(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Pretend trades', style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
        const SizedBox(height: 6),
        if (list.isEmpty) Text('No trades yet. This system is picky: it only takes strong setups.', style: TextStyle(color: p.muted, fontSize: 12.5)),
        for (final t in _allTrades ? list : list.take(4)) _tradeRow(p, t),
        if (list.length > 4)
          Center(child: TextButton(onPressed: () => setState(() => _allTrades = !_allTrades), child: Text(_allTrades ? 'Show less' : 'Show all (${list.length})'))),
      ]),
    );
  }

  Widget _tradeRow(_Pal p, Map<String, dynamic> t) {
    final buy = t['decision'] == 'would buy';
    final det = _map(t['details']);
    final opt = det['option'] is Map ? _map(det['option']) : null;
    final pnl = _d(det['pnl']);
    final c = buy ? _spy : (pnl >= 0 ? _up : _loss);
    final what = opt != null ? 'SPY ${_money(_d(opt['strike']), sign: false)} call' : '${t['asset']}';
    final line = buy
        ? (opt != null ? 'expires ${_dateLabel(opt['expiry'])} · premium ${_money(_d(det['entryPrice']), sign: false)} x 100' : 'at ${_money(_d(det['entryPrice']), sign: false)}')
        : '${_money(_d(det['entryPrice']), sign: false)} to ${_money(_d(det['exitPrice']), sign: false)} · ${det['heldMin'] == null ? '' : '${_d(det['heldMin']).toStringAsFixed(0)} min · '}${_short((t['reason'] ?? '').toString())}';
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 9),
      decoration: BoxDecoration(border: Border(bottom: BorderSide(color: p.line))),
      child: Row(children: [
        Container(
          width: 36,
          height: 36,
          decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(12)),
          child: Icon(buy ? Icons.south_west_rounded : Icons.north_east_rounded, color: c, size: 18),
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text('${buy ? 'Bought' : 'Sold'} $what', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 13.5)),
            Text(line, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 11.5)),
            Text((t['et_time'] ?? '').toString(), style: TextStyle(color: p.muted, fontSize: 10.5)),
          ]),
        ),
        const SizedBox(width: 8),
        Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text(buy ? '-${_money(_d(det['amount']), sign: false)}' : '+${_money(_d(det['outValue']), sign: false)}',
              style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 13.5)),
          if (!buy) Text(_money(pnl), style: TextStyle(color: pnl >= 0 ? _up : _loss, fontWeight: FontWeight.w800, fontSize: 12)),
          if (buy) Text('put in', style: TextStyle(color: p.muted, fontSize: 11)),
        ]),
      ]),
    );
  }

  Widget _activity(_Pal p) {
    final rows = _allLog ? _log : _log.take(4).toList();
    return _frame(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          Text('Activity', style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
          const Spacer(),
          Text('newest first', style: TextStyle(color: p.muted, fontSize: 11)),
        ]),
        const SizedBox(height: 6),
        if (_log.isEmpty) Text('Nothing yet. Buys, sells and passing setups that were skipped show up here.', style: TextStyle(color: p.muted, fontSize: 12.5)),
        for (final r in rows)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Padding(padding: const EdgeInsets.only(top: 5), child: Icon(Icons.circle, size: 7, color: p.muted)),
              const SizedBox(width: 8),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('${r['decision'] ?? ''}${r['asset'] == null ? '' : ' · ${r['asset']}'}',
                      style: TextStyle(color: p.ink, fontSize: 12.5, fontWeight: FontWeight.w800)),
                  Text((r['reason'] ?? '').toString(), style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3)),
                ]),
              ),
              const SizedBox(width: 6),
              Text(_shortTime((r['et_time'] ?? '').toString()), style: TextStyle(color: p.muted, fontSize: 10.5)),
            ]),
          ),
        if (_log.length > 4)
          Center(child: TextButton(onPressed: () => setState(() => _allLog = !_allLog), child: Text(_allLog ? 'Show less' : 'Show all'))),
      ]),
    );
  }

  Widget _rules(_Pal p, Map<String, dynamic> s) {
    final rules = ((s['rules'] as List?) ?? const []).map((e) => '$e').toList();
    return _frame(
      p,
      child: Theme(
        data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
        child: ExpansionTile(
          tilePadding: EdgeInsets.zero,
          childrenPadding: EdgeInsets.zero,
          title: Text('The rules it follows', style: TextStyle(color: p.ink, fontSize: 15, fontWeight: FontWeight.w800)),
          children: [
            for (final r in rules)
              Padding(
                padding: const EdgeInsets.only(bottom: 6),
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('•  ', style: TextStyle(color: _accent, fontWeight: FontWeight.w900)),
                  Expanded(child: Text(r, style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.35))),
                ]),
              ),
          ],
        ),
      ),
    );
  }

  // ── small pieces

  Widget _frame(_Pal p, {required Widget child, Color? border}) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: p.card,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: border?.withValues(alpha: 0.5) ?? p.cardEdge),
          boxShadow: [BoxShadow(color: p.shadow, blurRadius: 14, offset: const Offset(0, 6))],
        ),
        child: Material(type: MaterialType.transparency, child: child),
      );

  Widget _note(_Pal p, String msg, Color c) => Container(
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(color: c.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.withValues(alpha: 0.45))),
        child: Row(children: [
          Icon(Icons.info_rounded, color: c, size: 20),
          const SizedBox(width: 10),
          Expanded(child: Text(msg, style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.35))),
        ]),
      );

  Widget _tag(String t, Color c) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
        decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
        child: Text(t, style: TextStyle(color: c, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 0.5)),
      );

  Widget _round(_Pal p, IconData icon, VoidCallback? onTap) => Material(
        color: p.card,
        shape: const CircleBorder(),
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
}
