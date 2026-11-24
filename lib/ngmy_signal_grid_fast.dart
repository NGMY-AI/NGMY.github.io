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
  bool _allTrades = false;
  bool _allLog = false;
  String? _market; // the market tapped in the Agent markets panel

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
    // Fast open: the last screen saved on this phone shows at once, the fresh one replaces it when it arrives.
    unawaited(_loadCached());
    unawaited(_reload());
    _timer = Timer.periodic(const Duration(seconds: 30), (_) => unawaited(_reload()));
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  String get _cacheKey => 'ngmy_signal_grid_fast_${widget.system}';

  Future<void> _loadCached() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_cacheKey);
      if (raw == null || !mounted || _s != null) return;
      final cached = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      setState(() {
        _s = Map<String, dynamic>.from(_map(cached['s']));
        _log = ((cached['log'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
        _loading = false;
      });
    } catch (_) {}
  }

  Future<void> _reload() async {
    // Status and activity are asked for at the same time (they used to wait for each other).
    final results = await Future.wait([
      ngmyEdgeInvoke({'action': 'fsStatus', 'system': widget.system}, timeout: const Duration(seconds: 40)),
      ngmyEdgeInvoke({'action': 'fsLog', 'system': widget.system, 'limit': 30}, timeout: const Duration(seconds: 30)),
    ]);
    final res = results[0];
    final log = results[1];
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
    if (res != null && res['ok'] == true) {
      try {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString(_cacheKey, jsonEncode({'s': res, 'log': _log}));
      } catch (_) {}
    }
  }

  Future<void> _setEnabled(bool on) async {
    // The button changes at once; the server's answer then confirms it.
    final before = _s;
    setState(() {
      _busy = true;
      if (_s != null) {
        _s = {
          ..._s!,
          'state': {..._map(_s!['state']), 'enabled': on, if (on) 'brakePaused': false},
        };
      }
    });
    final res = await ngmyEdgeInvoke({'action': 'fsSet', 'system': widget.system, 'enabled': on}, timeout: const Duration(seconds: 40));
    if (!mounted) return;
    setState(() {
      _busy = false;
      if (res != null && res['ok'] == true) {
        _s = Map<String, dynamic>.from(res);
      } else {
        _s = before; // undo
        _error = (res?['error'] ?? 'Could not change it right now.').toString();
      }
    });
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
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.bgTop, p.bgBottom]),
        ),
        child: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(12, 8, 12, 8),
                child: Row(
                  children: [
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
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            name,
                            style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800),
                          ),
                          Text('Fast system · paper money only', style: TextStyle(color: p.muted, fontSize: 11.5)),
                        ],
                      ),
                    ),
                    if (_s != null)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                        decoration: BoxDecoration(
                          color:
                              (brake
                                      ? _loss
                                      : on
                                      ? _up
                                      : p.muted)
                                  .withValues(alpha: 0.14),
                          borderRadius: BorderRadius.circular(999),
                        ),
                        child: Text(
                          brake
                              ? 'Paused'
                              : on
                              ? 'Running'
                              : 'Stopped',
                          style: TextStyle(
                            color: brake
                                ? _loss
                                : on
                                ? _up
                                : p.muted,
                            fontSize: 12,
                            fontWeight: FontWeight.w800,
                          ),
                        ),
                      ),
                    const SizedBox(width: 8),
                    _round(p, Icons.refresh_rounded, _busy ? null : () => unawaited(_reload())),
                  ],
                ),
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
            ],
          ),
        ),
      ),
    );
  }

  List<Widget> _body(_Pal p) {
    final s = _s!;
    final st = _map(s['state']);
    final sh = st['shadow'] is Map ? _map(st['shadow']) : null;
    // The most important first: the open trade, then the markets and the candle chart, then the balance.
    return [
      if (sh != null) _openTrade(p, sh, _map(st['mark'])),
      _marketStrip(p, s),
      _chartCard(p, s),
      _sharedBalance(p, s),
      if (_error != null) _note(p, _error!, _loss),
      if (st['brakePaused'] == true)
        _note(p, 'Paused by this system\'s brake. ${st['brakeReason'] ?? ''}. Look over the trades, then press Start to turn it back on.', _loss),
      _controls(p, st),
      _paceCard(p, s),
      _winRate(p, s),
      if (_options) _optionsCard(p, s),
      _settings(p, s),
      _lastCheck(p, st),
      _trades(p, s),
      _activity(p),
      _rules(p, s),
      _frame(
        p,
        child: Row(
          children: [
            const Icon(Icons.verified_user_rounded, size: 18, color: _up),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                'Paper money only: no order is ever sent to Alpaca. Orders are disabled.',
                style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3),
              ),
            ),
          ],
        ),
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
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Text(
                'Shared paper balance',
                style: TextStyle(color: Colors.white70, fontSize: 13, fontWeight: FontWeight.w600),
              ),
              const Spacer(),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
                child: const Text(
                  'ALL SYSTEMS',
                  style: TextStyle(color: Colors.white, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 0.8),
                ),
              ),
            ],
          ),
          const SizedBox(height: 4),
          FittedBox(
            fit: BoxFit.scaleDown,
            alignment: Alignment.centerLeft,
            child: Text(
              bal == null ? '—' : _money(_d(bal), sign: false),
              style: const TextStyle(color: Colors.white, fontSize: 34, fontWeight: FontWeight.w800, letterSpacing: -0.5),
            ),
          ),
          Text(
            '${_money(move)} from pretend trades of every system',
            style: TextStyle(
              color: move > 0
                  ? _up
                  : move < 0
                  ? _loss
                  : Colors.white70,
              fontSize: 12.5,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            'Alpaca paper account ${sh['equity'] == null ? '—' : _money(_d(sh['equity']), sign: false)} (unchanged, no orders are sent)',
            style: const TextStyle(color: Colors.white60, fontSize: 11),
          ),
        ],
      ),
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
          style: FilledButton.styleFrom(
            backgroundColor: on ? _loss : _up,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
          ),
          onPressed: _busy || widget.previewStatus != null ? null : () => _setEnabled(!on),
          icon: _busy
              ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
              : Icon(on ? Icons.stop_rounded : Icons.play_arrow_rounded),
          label: Text(
            on ? 'Stop ${_options ? 'Options' : 'Scalper'}' : 'Start ${_options ? 'Options' : 'Scalper'}',
            style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15),
          ),
        ),
      ),
    );
  }

  // ── the daily target: 20 real trades, the pace ladder, what it learned this morning

  Widget _paceCard(_Pal p, Map<String, dynamic> s) {
    final pc = _map(s['pace']);
    final target = _d(pc['target'] ?? 20).toInt();
    final trades = _d(pc['trades']).toInt();
    final expected = _d(pc['expected']).toInt();
    final behind = _d(pc['deficit']) > 0;
    final thr = _d(pc['thresholdPct']);
    final start = _d(pc['startPct']);
    final steps = _d(pc['steps']).toInt();
    final finalHour = pc['finalHour'] == true;
    final minsLeft = _d(pc['minutesLeft']).toInt();
    final c = trades >= target
        ? _up
        : behind
        ? _down
        : _up;
    final status = trades >= target
        ? 'target reached'
        : behind
        ? 'behind pace by ${_d(pc['deficit']).toInt()}'
        : 'on pace';
    final ladderText = trades >= target
        ? 'Target reached: back to the day\'s start, +${start.toStringAsFixed(2)}%.'
        : finalHour
        ? 'Last hour of the window: at the floor, +${thr.toStringAsFixed(2)}% (still never a falling market).'
        : steps > 0
        ? 'Behind by ${_d(pc['hoursBehind']).toStringAsFixed(1)} h, so $steps step(s) down from +${start.toStringAsFixed(2)}%.'
        : 'On pace: the day\'s start, +${start.toStringAsFixed(2)}%.';
    final note = (_map(s['state'])['lastNote'] ?? '').toString();
    final learned = (pc['learned'] ?? '').toString();
    final dayNote = (pc['dayNote'] ?? '').toString();
    return _frame(
      p,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                'TRADES TODAY',
                style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.9),
              ),
              const Spacer(),
              _tag(pc['inWindow'] == true ? '${minsLeft ~/ 60}h ${minsLeft % 60}m left' : 'window closed', p.muted),
            ],
          ),
          const SizedBox(height: 6),
          Row(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(
                'Trades today: $trades of $target',
                style: TextStyle(color: p.ink, fontSize: 22, fontWeight: FontWeight.w900),
              ),
            ],
          ),
          const SizedBox(height: 2),
          Text(
            '$status · ${_d(pc['remaining']).toInt()} to go · expected by now: $expected',
            style: TextStyle(color: c, fontSize: 12.5, fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 8),
          LayoutBuilder(
            builder: (context, box) {
              final w = box.maxWidth;
              return SizedBox(
                height: 14,
                child: Stack(
                  children: [
                    Positioned.fill(
                      top: 3,
                      bottom: 3,
                      child: Container(
                        decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(99)),
                      ),
                    ),
                    Positioned(
                      left: 0,
                      top: 3,
                      bottom: 3,
                      width: w * (trades / target).clamp(0.0, 1.0),
                      child: Container(
                        decoration: BoxDecoration(color: c, borderRadius: BorderRadius.circular(99)),
                      ),
                    ),
                    // Where the pace says it should be by now.
                    Positioned(
                      left: (w * (expected / target).clamp(0.0, 1.0) - 1).clamp(0.0, w - 2),
                      top: 0,
                      bottom: 0,
                      child: Container(width: 2, color: p.ink),
                    ),
                  ],
                ),
              );
            },
          ),
          const SizedBox(height: 10),
          // The pace ladder, live.
          Container(
            width: double.infinity,
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(12)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'Entry strength needed now: +${thr.toStringAsFixed(2)}% in 15 min',
                  style: TextStyle(color: p.ink, fontSize: 13, fontWeight: FontWeight.w800),
                ),
                const SizedBox(height: 2),
                Text(ladderText, style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3)),
                Text(
                  'It steps down 0.05% per hour behind the pace to 20, never below +0.05%, and never buys a falling market.',
                  style: TextStyle(color: p.muted, fontSize: 11, height: 1.3),
                ),
              ],
            ),
          ),
          if (learned.isNotEmpty) ...[
            const SizedBox(height: 8),
            Text.rich(
              TextSpan(
                children: [
                  TextSpan(
                    text: 'What it learned: ',
                    style: TextStyle(color: _accent, fontWeight: FontWeight.w900),
                  ),
                  TextSpan(text: learned),
                ],
              ),
              style: TextStyle(color: p.ink, fontSize: 12, height: 1.35),
            ),
          ],
          if (dayNote.isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(
              dayNote,
              style: TextStyle(color: _down, fontSize: 12, height: 1.3, fontWeight: FontWeight.w700),
            ),
          ],
          if (note.isNotEmpty && _map(s['state'])['shadow'] == null) ...[
            const SizedBox(height: 6),
            Text('Now: $note', style: TextStyle(color: p.ink, fontSize: 12, height: 1.3)),
          ],
        ],
      ),
    );
  }

  // ── Its markets: side by side like the main Signal Grid screen (best-ranked first); tap one for its chart

  List<Map<String, dynamic>> _marketsOf(Map<String, dynamic> s) =>
      ((s['markets'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();

  Map<String, dynamic>? _selectedMarket(List<Map<String, dynamic>> markets) {
    if (markets.isEmpty) return null;
    return markets.firstWhere((m) => m['symbol'] == _market,
        orElse: () => markets.firstWhere((m) => m['tag'] == 'TRADED NOW', orElse: () => markets.first));
  }

  Widget _marketStrip(_Pal p, Map<String, dynamic> s) {
    final markets = _marketsOf(s);
    if (markets.isEmpty) return const SizedBox.shrink();
    final sel = _selectedMarket(markets)!;
    final passing = markets.where((m) => _map(m['analysis'])['passes'] == true).length;
    return Padding(
      padding: const EdgeInsets.only(bottom: 10),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(4, 0, 4, 8),
          child: Row(children: [
            Text('Its markets (${markets.length})', style: TextStyle(color: p.ink, fontSize: 14, fontWeight: FontWeight.w800)),
            const SizedBox(width: 8),
            _tag(passing == 0 ? 'NONE PASSING NOW' : '$passing PASSING NOW', passing == 0 ? p.muted : _up),
            const Spacer(),
            Text('tap one', style: TextStyle(color: p.muted, fontSize: 11)),
          ]),
        ),
        SizedBox(
          height: 82,
          child: ListView.separated(
            scrollDirection: Axis.horizontal,
            clipBehavior: Clip.none,
            itemCount: markets.length,
            separatorBuilder: (_, _) => const SizedBox(width: 10),
            itemBuilder: (_, i) {
              final m = markets[i];
              final sym = '${m['symbol']}';
              final on = sym == sel['symbol'];
              final chg = _d(m['changePct']);
              final rec = _map(m['record']);
              final a = _map(m['analysis']);
              final tag = '${m['tag'] ?? ''}';
              final (Color tc, String tl) = tag == 'TRADED NOW'
                  ? (_btc, 'HOLDING')
                  : a['passes'] == true
                      ? (_up, 'PASSES')
                      : a['falling'] == true
                          ? (_loss, 'FALLING')
                          : (p.muted, tag == 'closed' ? 'CLOSED' : 'WATCHING');
              return GestureDetector(
                onTap: () => setState(() => _market = sym),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  width: 152,
                  padding: const EdgeInsets.fromLTRB(10, 8, 10, 8),
                  decoration: BoxDecoration(
                    color: p.card,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: on ? _accent : p.cardEdge, width: on ? 2 : 1),
                    boxShadow: [BoxShadow(color: on ? _accent.withValues(alpha: 0.18) : p.shadow, blurRadius: on ? 12 : 8, offset: const Offset(0, 4))],
                  ),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                    Row(children: [
                      _coin(sym, 16),
                      const SizedBox(width: 5),
                      Expanded(
                        child: Text(sym, maxLines: 1, overflow: TextOverflow.ellipsis,
                            style: TextStyle(color: p.ink, fontSize: 11.5, fontWeight: FontWeight.w800)),
                      ),
                      Text(tl, style: TextStyle(color: tc, fontSize: 8.5, fontWeight: FontWeight.w900)),
                    ]),
                    Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
                      Expanded(
                        child: FittedBox(
                          fit: BoxFit.scaleDown,
                          alignment: Alignment.centerLeft,
                          child: Text(_money(_d(m['price']), sign: false), style: TextStyle(color: p.ink, fontSize: 14.5, fontWeight: FontWeight.w800)),
                        ),
                      ),
                      const SizedBox(width: 4),
                      Text('${chg >= 0 ? '+' : ''}${chg.toStringAsFixed(2)}%',
                          style: TextStyle(color: chg >= 0 ? _up : _loss, fontSize: 10.5, fontWeight: FontWeight.w800)),
                    ]),
                    Text(
                      _d(rec['n']) == 0 ? 'no trades here yet' : 'last ${_d(rec['n']).toInt()}: ${_d(rec['wins']).toInt()}W/${_d(rec['losses']).toInt()}L ${_money(_d(rec['pnl']))}',
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: p.muted, fontSize: 9.5, fontWeight: FontWeight.w700),
                    ),
                  ]),
                ),
              );
            },
          ),
        ),
      ]),
    );
  }

  /// The candlestick chart of the market picked in the strip (the held one first), with the trend lines.
  Widget _chartCard(_Pal p, Map<String, dynamic> s) {
    final sel = _selectedMarket(_marketsOf(s));
    if (sel == null) return const SizedBox.shrink();
    final pts = ((_map(sel['chart'])['points'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    final a = _map(sel['analysis']);
    final chg = _d(sel['changePct']);
    return _frame(
      p,
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Row(children: [
          _coin('${sel['symbol']}', 24),
          const SizedBox(width: 8),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('${sel['symbol']}', style: TextStyle(color: p.ink, fontSize: 15, fontWeight: FontWeight.w800)),
              Text('${sel['name'] ?? ''}', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 11.5)),
            ]),
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text(_money(_d(sel['price']), sign: false), style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
            Text('${chg >= 0 ? '+' : ''}${chg.toStringAsFixed(2)}% today', style: TextStyle(color: chg >= 0 ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w800)),
          ]),
        ]),
        const SizedBox(height: 10),
        if (pts.length > 1)
          _CandleChart(points: pts.sublist(math.max(0, pts.length - 36)), pal: p, entry: null, lines: true, price: _d(sel['price']))
        else
          Text('The chart appears after the first reading.', style: TextStyle(color: p.muted, fontSize: 12)),
        if (a['why'] != null) ...[
          const SizedBox(height: 6),
          Text('Analysis: ${a['why']}', style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3)),
        ],
      ]),
    );
  }

  // ── live win rate (wins out of closed trades)

  Widget _winRate(_Pal p, Map<String, dynamic> s) {
    final r = _map(s['record']);
    final rate = r['winRatePct'];
    final c = rate == null
        ? p.ink
        : _d(rate) >= 50
        ? _up
        : _loss;
    return _frame(
      p,
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  'LIVE WIN RATE',
                  style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.9),
                ),
                const SizedBox(height: 4),
                Text(
                  rate == null ? 'No closed trades yet' : '${_d(rate).toStringAsFixed(0)}%',
                  style: TextStyle(color: c, fontSize: rate == null ? 16 : 30, fontWeight: FontWeight.w900),
                ),
                Text('${r['wins'] ?? 0} won out of ${r['trades'] ?? 0} closed trades', style: TextStyle(color: p.muted, fontSize: 12)),
              ],
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text('All time', style: TextStyle(color: p.muted, fontSize: 11)),
              Text(
                _money(_d(r['pnlSum'])),
                style: TextStyle(
                  color: _d(r['pnlSum']) > 0
                      ? _up
                      : _d(r['pnlSum']) < 0
                      ? _loss
                      : p.ink,
                  fontSize: 18,
                  fontWeight: FontWeight.w800,
                ),
              ),
              Text('${r['wins'] ?? 0} W / ${r['losses'] ?? 0} L', style: TextStyle(color: p.muted, fontSize: 11)),
            ],
          ),
        ],
      ),
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
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              k,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: p.muted, fontSize: 10.5),
            ),
            const SizedBox(height: 2),
            FittedBox(
              fit: BoxFit.scaleDown,
              alignment: Alignment.centerLeft,
              child: Text(
                v,
                style: TextStyle(color: c ?? p.ink, fontSize: 13.5, fontWeight: FontWeight.w800),
              ),
            ),
          ],
        ),
      ),
    );
    final tp = _options
        ? '+${_money(_d(g['takeProfitUsd']), sign: false)}'
        : '+${_d(g['takeProfitPct']).toStringAsFixed(0)}% (+\$${_d(g['takeProfitUsd']).toStringAsFixed(0)})';
    final sl = _options
        ? '-${_money(_d(g['stopLossUsd']), sign: false)}'
        : '-${_d(g['stopLossPct']).toStringAsFixed(0)}% (-\$${_d(g['stopLossUsd']).toStringAsFixed(0)})';
    return _frame(
      p,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Icon(Icons.timer_rounded, size: 18, color: _accent),
              const SizedBox(width: 6),
              Text(
                'THE 30-MINUTE LAW',
                style: TextStyle(color: p.ink, fontSize: 12, fontWeight: FontWeight.w900, letterSpacing: 0.8),
              ),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            'Every trade closes within ${_d(g['maxHoldMin']).toStringAsFixed(0)} minutes, win, lose or flat. Exits are checked every '
            '${_d(g['exitCheckEveryMin']).toStringAsFixed(0)} minute, and the hard close sells at the last check before 30 minutes '
            '(${_d(g['hardCloseAtMin']).toStringAsFixed(0)} minutes held).',
            style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.35),
          ),
          const SizedBox(height: 10),
          Row(
            children: [
              chip('Hard close', '${_d(g['maxHoldMin']).toStringAsFixed(0)} min max'),
              const SizedBox(width: 6),
              chip('Exit checks', 'every ${_d(g['exitCheckEveryMin']).toStringAsFixed(0)} min'),
              const SizedBox(width: 6),
              chip('Each trade', _options ? '1 call ≤\$${_d(g['maxPremiumUsd']).toStringAsFixed(0)}' : '\$${_d(g['tradeUsd']).toStringAsFixed(0)}'),
            ],
          ),
          const SizedBox(height: 6),
          Row(
            children: [
              chip('Take profit', tp, c: _up),
              const SizedBox(width: 6),
              chip('Stop loss', sl, c: _loss),
              const SizedBox(width: 6),
              chip('Trades today', '${today['trades'] ?? 0} of ${g['maxTrades'] ?? '-'}'),
            ],
          ),
          const SizedBox(height: 6),
          Row(
            children: [
              chip('Daily stop', '-\$${_d(g['dailyStopUsd']).toStringAsFixed(0)}'),
              const SizedBox(width: 6),
              chip('Total brake', '-\$${_d(g['totalBrakeUsd']).toStringAsFixed(0)}'),
              const SizedBox(width: 6),
              chip('Strength', '+${_d(g['strengthPct']).toStringAsFixed(1)}% in 15 min'),
            ],
          ),
        ],
      ),
    );
  }

  // ── Options: the contract it would choose now, or a clear "not enabled" message

  Widget _optionsCard(_Pal p, Map<String, dynamic> s) {
    final o = _map(s['options']);
    if (o.isEmpty) return const SizedBox.shrink();
    if (o['weekend'] == true) return _note(p, (o['message'] ?? '').toString(), _slowC);
    if (o['enabled'] != true) {
      return _note(p, (o['message'] ?? 'Options are not enabled on the paper account yet').toString(), o['enabled'] == false ? _down : _slowC);
    }
    final c = _map(o['preview']);
    final fits = o['fits'] == true;
    final right = '${o['right'] ?? 'call'}';
    final und = '${o['underlying'] ?? 'SPY'}';
    final tried = ((o['tried'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    return _frame(
      p,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Expanded(
                child: Text(
                  '$und CALL IT WOULD CHOOSE NOW',
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.8),
                ),
              ),
              _tag(fits ? 'UNDER \$150' : 'NONE UNDER \$150', fits ? _up : _loss),
            ],
          ),
          const SizedBox(height: 4),
          Text(
            'For the best-ranked market right now. Calls only (trend up), slightly out of the money, expiring this week.',
            style: TextStyle(color: p.muted, fontSize: 11.5),
          ),
          const SizedBox(height: 8),
          if (fits && c.isNotEmpty) ...[
            Text(
              '$und ${_money(_d(c['strike']), sign: false)} $right · expires ${_dateLabel(c['expiry'])}',
              style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800),
            ),
            const SizedBox(height: 2),
            Text(
              'Premium ${_money(_d(c['premium']), sign: false)} a share x 100 = ${_money(_d(c['cost']), sign: false)}  ·  $und ${_money(_d(o['spot']), sign: false)}',
              style: TextStyle(color: p.muted, fontSize: 12),
            ),
            const SizedBox(height: 4),
            Text('It fits: ${o['why'] ?? ''}. On a passing setup it would buy this one.', style: const TextStyle(color: _up, fontSize: 12, height: 1.3)),
          ] else
            Text(
              '${'${o['why'] ?? ''}'.startsWith('no contract') ? '' : 'No contract under \$150 right now. '}${o['why'] ?? ''}. It keeps checking every minute; the budget is never raised.',
              style: const TextStyle(color: _loss, fontSize: 12, height: 1.3),
            ),
          if (tried.isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(
              'The \$150 stepping, in order:',
              style: TextStyle(color: p.ink, fontSize: 12, fontWeight: FontWeight.w800),
            ),
            const SizedBox(height: 4),
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                for (final t in tried.take(18))
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(
                      color: (t['cost'] != null && _d(t['cost']) <= 150 ? _up : p.muted).withValues(alpha: 0.12),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Text(
                      '\$${_d(t['strike']).toStringAsFixed(0)} · ${_dateLabel(t['expiry']).replaceAll(RegExp(r', \d{4}$'), '')} · ${t['cost'] == null ? 'no price' : _money(_d(t['cost']), sign: false)}',
                      style: TextStyle(color: p.ink, fontSize: 10.5, fontWeight: FontWeight.w700),
                    ),
                  ),
              ],
            ),
          ],
        ],
      ),
    );
  }

  // ── the open trade, with its 30-minute countdown

  Widget _openTrade(_Pal p, Map<String, dynamic> sh, Map<String, dynamic> mark) {
    final opt = sh['option'] is Map ? _map(sh['option']) : null;
    final opened = DateTime.tryParse('${sh['entryAt'] ?? ''}');
    final closeBy = opened?.add(const Duration(minutes: 30));
    final pnl = _d(mark['pnl']);
    return _frame(
      p,
      border: _accent,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                'OPEN TRADE',
                style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.8),
              ),
              const Spacer(),
              _CloseCountdown(closeBy: closeBy, color: _accent),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            opt != null ? '${sh['symbol']} ${_money(_d(opt['strike']), sign: false)} ${opt['right'] ?? 'call'} · expires ${_dateLabel(opt['expiry'])}' : '${sh['symbol']}',
            style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 2),
          Text(
            opt != null
                ? 'Premium paid ${_money(_d(sh['entryPrice']), sign: false)} x 100 = ${_money(_d(mark['cost']), sign: false)} · now ${mark['priced'] == false ? 'no price yet' : _money(_d(mark['price']), sign: false)}'
                : '\$${_d(mark['cost']).toStringAsFixed(0)} bought at ${_money(_d(sh['entryPrice']), sign: false)} · now ${_money(_d(mark['price']), sign: false)}',
            style: TextStyle(color: p.muted, fontSize: 12),
          ),
          const SizedBox(height: 6),
          Row(
            children: [
              Text(
                _money(pnl),
                style: TextStyle(color: pnl >= 0 ? _up : _loss, fontSize: 26, fontWeight: FontWeight.w900),
              ),
              const SizedBox(width: 8),
              Text(pnl >= 0 ? 'winning right now' : 'losing right now', style: TextStyle(color: p.muted, fontSize: 12)),
            ],
          ),
          Text(
            'Bought ${_etLabel(sh['entryAt'])}${closeBy == null ? '' : ' · hard close by ${_clock(_toEt(closeBy.toUtc()))} ET'}',
            style: TextStyle(color: p.muted, fontSize: 11.5),
          ),
        ],
      ),
    );
  }

  Widget _lastCheck(_Pal p, Map<String, dynamic> st) {
    final note = (st['lastNote'] ?? '').toString();
    final at = DateTime.tryParse('${st['lastNoteAt'] ?? st['lastTickAt'] ?? ''}');
    return _frame(
      p,
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(Icons.autorenew_rounded, size: 18, color: st['enabled'] == true ? _up : p.muted),
          const SizedBox(width: 8),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  st['enabled'] == true ? 'Checks every minute by itself' : 'Stopped: press Start to let it check every minute',
                  style: TextStyle(color: p.ink, fontSize: 13, fontWeight: FontWeight.w800),
                ),
                if (note.isNotEmpty) ...[
                  const SizedBox(height: 3),
                  Text('${at == null ? '' : '${_clock(_toEt(at.toUtc()))} ET · '}$note', style: TextStyle(color: p.muted, fontSize: 12, height: 1.3)),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }

  // ── trades and activity: 4, then Show all

  Widget _trades(_Pal p, Map<String, dynamic> s) {
    final list = ((s['trades'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    return _frame(
      p,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Pretend trades',
            style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 6),
          if (list.isEmpty) Text('No trades yet. This system is picky: it only takes strong setups.', style: TextStyle(color: p.muted, fontSize: 12.5)),
          for (final t in _allTrades ? list : list.take(4)) _tradeRow(p, t),
          if (list.length > 4)
            Center(
              child: TextButton(onPressed: () => setState(() => _allTrades = !_allTrades), child: Text(_allTrades ? 'Show less' : 'Show all (${list.length})')),
            ),
        ],
      ),
    );
  }

  Widget _tradeRow(_Pal p, Map<String, dynamic> t) {
    final buy = t['decision'] == 'would buy';
    final det = _map(t['details']);
    final opt = det['option'] is Map ? _map(det['option']) : null;
    final pnl = _d(det['pnl']);
    final c = buy ? _spy : (pnl >= 0 ? _up : _loss);
    final what = opt != null ? '${t['asset']} ${_money(_d(opt['strike']), sign: false)} ${opt['right'] ?? 'call'}' : '${t['asset']}';
    final line = buy
        ? (opt != null
              ? 'expires ${_dateLabel(opt['expiry'])} · premium ${_money(_d(det['entryPrice']), sign: false)} x 100'
              : 'at ${_money(_d(det['entryPrice']), sign: false)}')
        : '${_money(_d(det['entryPrice']), sign: false)} to ${_money(_d(det['exitPrice']), sign: false)} · ${det['heldMin'] == null ? '' : '${_d(det['heldMin']).toStringAsFixed(0)} min · '}${_short((t['reason'] ?? '').toString())}';
    // "Why this trade": the analysis logged with every buy (market, price, trend, strength, why it was chosen).
    final an = _map(det['analysis']);
    // A sold trade shows WIN or LOSS next to the reason it was bought.
    final why = buy ? (an['why'] ?? '').toString() : (det['entryWhy'] ?? '').toString();
    final result = buy ? '' : (det['result'] ?? (pnl > 0 ? 'WIN' : 'LOSS')).toString();
    return InkWell(
      onTap: why.isEmpty ? null : () => _showWhy(p, what, buy ? an : {'why': '$result. Bought because: $why'}),
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 9),
        decoration: BoxDecoration(
          border: Border(bottom: BorderSide(color: p.line)),
        ),
        child: Row(
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(12)),
              child: Icon(buy ? Icons.south_west_rounded : Icons.north_east_rounded, color: c, size: 18),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '${buy ? 'Bought' : 'Sold'} $what',
                    style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 13.5),
                  ),
                  Text(
                    line,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: p.muted, fontSize: 11.5),
                  ),
                  if (why.isNotEmpty)
                    Text(
                      buy ? 'Why this trade: $why' : '$result · it was bought because: $why',
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: buy ? _accent : result == 'WIN' ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w700, height: 1.3),
                    ),
                  Text((t['et_time'] ?? '').toString(), style: TextStyle(color: p.muted, fontSize: 10.5)),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(
                  buy ? '-${_money(_d(det['amount']), sign: false)}' : '+${_money(_d(det['outValue']), sign: false)}',
                  style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 13.5),
                ),
                if (!buy)
                  Text(
                    _money(pnl),
                    style: TextStyle(color: pnl >= 0 ? _up : _loss, fontWeight: FontWeight.w800, fontSize: 12),
                  ),
                if (buy) Text('put in', style: TextStyle(color: p.muted, fontSize: 11)),
              ],
            ),
          ],
        ),
      ),
    );
  }

  /// The full analysis behind one trade, in a popup.
  void _showWhy(_Pal p, String what, Map<String, dynamic> an) {
    final ranked = ((an['ranked'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    final rec = _map(an['record']);
    String pct(dynamic v) => v == null ? '?' : '${_d(v) >= 0 ? '+' : ''}${_d(v).toStringAsFixed(2)}%';
    showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        backgroundColor: p.card,
        title: Text(
          'Why this trade: $what',
          style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800),
        ),
        content: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisSize: MainAxisSize.min,
            children: [
              Text('${an['why'] ?? ''}', style: TextStyle(color: p.ink, fontSize: 13, height: 1.35)),
              const SizedBox(height: 10),
              Text(
                'Market ${an['market'] ?? '?'} at ${_money(_d(an['price']), sign: false)} · trend ${an['trend'] ?? '?'} · 15 min ${pct(an['strength'])} · score ${an['score'] ?? '?'}'
                '${an['direction'] != null ? ' · ${an['direction']}' : ''} · Phase ${an['phase'] ?? '?'}${an['mode'] == 'pace' ? ' (behind pace)' : ''}',
                style: TextStyle(color: p.muted, fontSize: 12, height: 1.35),
              ),
              if (rec.isNotEmpty && _d(rec['n']) > 0)
                Text(
                  'Its record here before: last ${_d(rec['n']).toInt()}: ${_d(rec['wins']).toInt()}W / ${_d(rec['losses']).toInt()}L · ${_money(_d(rec['pnl']))}',
                  style: TextStyle(color: p.muted, fontSize: 12, height: 1.35),
                ),
              if (ranked.isNotEmpty) ...[
                const SizedBox(height: 10),
                Text(
                  'How the markets ranked:',
                  style: TextStyle(color: p.ink, fontSize: 12.5, fontWeight: FontWeight.w800),
                ),
                for (final (i, r) in ranked.indexed)
                  Text(
                    '${i + 1}. ${r['s']} · score ${r['score']} · ${pct(r['strength'])} · trend ${r['trend']}',
                    style: TextStyle(color: p.muted, fontSize: 12, height: 1.4),
                  ),
              ],
            ],
          ),
        ),
        actions: [TextButton(onPressed: () => Navigator.of(ctx).pop(), child: const Text('Close'))],
      ),
    );
  }

  Widget _activity(_Pal p) {
    final rows = _allLog ? _log : _log.take(4).toList();
    return _frame(
      p,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Text(
                'Activity',
                style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800),
              ),
              const Spacer(),
              Text('newest first', style: TextStyle(color: p.muted, fontSize: 11)),
            ],
          ),
          const SizedBox(height: 6),
          if (_log.isEmpty)
            Text('Nothing yet. Buys, sells and passing setups that were skipped show up here.', style: TextStyle(color: p.muted, fontSize: 12.5)),
          for (final r in rows)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 6),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.only(top: 5),
                    child: Icon(Icons.circle, size: 7, color: p.muted),
                  ),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          '${r['decision'] ?? ''}${r['asset'] == null ? '' : ' · ${r['asset']}'}',
                          style: TextStyle(color: p.ink, fontSize: 12.5, fontWeight: FontWeight.w800),
                        ),
                        Text((r['reason'] ?? '').toString(), style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3)),
                      ],
                    ),
                  ),
                  const SizedBox(width: 6),
                  Text(_shortTime((r['et_time'] ?? '').toString()), style: TextStyle(color: p.muted, fontSize: 10.5)),
                ],
              ),
            ),
          if (_log.length > 4)
            Center(
              child: TextButton(onPressed: () => setState(() => _allLog = !_allLog), child: Text(_allLog ? 'Show less' : 'Show all')),
            ),
        ],
      ),
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
          title: Text(
            'The rules it follows',
            style: TextStyle(color: p.ink, fontSize: 15, fontWeight: FontWeight.w800),
          ),
          children: [
            for (final r in rules)
              Padding(
                padding: const EdgeInsets.only(bottom: 6),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      '•  ',
                      style: TextStyle(color: _accent, fontWeight: FontWeight.w900),
                    ),
                    Expanded(
                      child: Text(r, style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.35)),
                    ),
                  ],
                ),
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
    decoration: BoxDecoration(
      color: c.withValues(alpha: 0.12),
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: c.withValues(alpha: 0.45)),
    ),
    child: Row(
      children: [
        Icon(Icons.info_rounded, color: c, size: 20),
        const SizedBox(width: 10),
        Expanded(
          child: Text(msg, style: TextStyle(color: p.ink, fontSize: 12.5, height: 1.35)),
        ),
      ],
    ),
  );

  Widget _tag(String t, Color c) => Container(
    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
    decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
    child: Text(
      t,
      style: TextStyle(color: c, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 0.5),
    ),
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
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          border: Border.all(color: p.cardEdge),
        ),
        child: Icon(icon, size: 18, color: p.ink),
      ),
    ),
  );
}

/// The "closes in 12:34 at most" tag on an open trade. Only this small tag redraws every second, not the screen.
class _CloseCountdown extends StatefulWidget {
  const _CloseCountdown({required this.closeBy, required this.color});
  final DateTime? closeBy;
  final Color color;

  @override
  State<_CloseCountdown> createState() => _CloseCountdownState();
}

class _CloseCountdownState extends State<_CloseCountdown> {
  Timer? _t;

  @override
  void initState() {
    super.initState();
    _t = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _t?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final left = widget.closeBy?.difference(DateTime.now());
    final mm = left == null || left.isNegative ? '0:00' : '${left.inMinutes}:${(left.inSeconds % 60).toString().padLeft(2, '0')}';
    final c = widget.color;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
      decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
      child: Text(
        'closes in $mm at most',
        style: TextStyle(color: c, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 0.5),
      ),
    );
  }
}
