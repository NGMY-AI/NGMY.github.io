// NGMY Trading Lab — Stage 1 dashboard.
// Real market data + a model that is trained and tested on unseen data each time,
// an independent risk engine, and PAPER trading (simulated money, server-side ledger).
// Live trading is OFF and not connected to any broker.

import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_edge_invoke.dart';

const _kSymbols = ['BTC-USD', 'ETH-USD', 'SOL-USD', 'XRP-USD', 'DOGE-USD', 'LTC-USD', 'ADA-USD'];
const _kTimeframes = {60: '1m', 300: '5m', 900: '15m', 3600: '1h'};

const _bg = Color(0xFF0B0F17);
const _card = Color(0xFF131A26);
const _line = Color(0xFF1F2A3A);
const _muted = Color(0xFF8B98AD);
const _green = Color(0xFF22C55E);
const _red = Color(0xFFEF4444);
const _amber = Color(0xFFF59E0B);
const _blue = Color(0xFF60A5FA);

Future<void> showNgmyTradingLab(BuildContext context) => Navigator.of(context).push(
      MaterialPageRoute<void>(builder: (_) => const NgmyTradingLabScreen()),
    );

class NgmyTradingLabScreen extends StatefulWidget {
  const NgmyTradingLabScreen({super.key});

  @override
  State<NgmyTradingLabScreen> createState() => _NgmyTradingLabScreenState();
}

class _NgmyTradingLabScreenState extends State<NgmyTradingLabScreen> {
  String _symbol = 'BTC-USD';
  int _tf = 300;
  int _horizon = 6;
  Map<String, dynamic>? _analysis;
  Map<String, dynamic>? _summary;
  bool _analyzing = false;
  bool _placing = false;
  String? _error;
  Timer? _refresh;

  @override
  void initState() {
    super.initState();
    unawaited(_loadSummary());
    unawaited(_analyze());
    _refresh = Timer.periodic(const Duration(seconds: 30), (_) => unawaited(_loadSummary()));
  }

  @override
  void dispose() {
    _refresh?.cancel();
    super.dispose();
  }

  Future<void> _loadSummary() async {
    final res = await ngmyEdgeInvoke({'action': 'tradeSummary'}, timeout: const Duration(seconds: 45));
    if (!mounted) return;
    if (res != null && res['ok'] == true) setState(() => _summary = res);
  }

  Future<void> _analyze() async {
    setState(() {
      _analyzing = true;
      _error = null;
    });
    final res = await ngmyEdgeInvoke(
      {'action': 'tradeAnalyze', 'symbol': _symbol, 'timeframeSec': _tf, 'horizonBars': _horizon},
      timeout: const Duration(seconds: 75),
    );
    if (!mounted) return;
    setState(() {
      _analyzing = false;
      if (res != null && res['ok'] == true) {
        _analysis = res;
      } else {
        _error = (res?['error'] ?? 'Analysis failed — try again.').toString();
      }
    });
  }

  Future<void> _paperTrade() async {
    setState(() => _placing = true);
    final key = 'pt-${DateTime.now().microsecondsSinceEpoch}-${math.Random().nextInt(1 << 30)}';
    final res = await ngmyEdgeInvoke(
      {
        'action': 'tradePaperOpen',
        'symbol': _symbol,
        'timeframeSec': _tf,
        'horizonBars': _horizon,
        'idempotencyKey': key,
      },
      timeout: const Duration(seconds: 90),
    );
    if (!mounted) return;
    setState(() => _placing = false);
    if (res != null && res['ok'] == true) {
      _snack('Paper trade opened (simulated).', _green);
    } else if (res?['rejected'] == true) {
      final reasons = (res?['reasons'] as List?)?.join('\n• ') ?? '';
      _snack('Risk engine rejected the trade:\n• $reasons', _amber, long: true);
    } else {
      _snack((res?['error'] ?? 'Could not place the paper trade.').toString(), _red);
    }
    await _loadSummary();
  }

  Future<void> _closeTrade(String id) async {
    final res = await ngmyEdgeInvoke({'action': 'tradePaperClose', 'tradeId': id});
    if (!mounted) return;
    _snack(res?['ok'] == true ? 'Paper trade closed.' : (res?['error'] ?? 'Could not close.').toString(),
        res?['ok'] == true ? _green : _red);
    await _loadSummary();
  }

  Future<void> _setHalt(bool halted) async {
    await ngmyEdgeInvoke({'action': 'tradeHalt', 'halted': halted});
    await _loadSummary();
  }

  Future<void> _resetAccount() async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Reset paper account?'),
        content: const Text('This clears your simulated trade history and resets the paper balance to \$10,000.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Reset')),
        ],
      ),
    );
    if (ok != true) return;
    await ngmyEdgeInvoke({'action': 'tradeReset', 'confirm': true});
    await _loadSummary();
  }

  Future<void> _editRisk() async {
    final risk = Map<String, dynamic>.from((_summary?['risk'] as Map?) ?? {});
    final fields = <String, String>{
      'riskPerTradePct': 'Risk per trade (% of equity)',
      'maxPositionPct': 'Max position size (% of equity)',
      'maxDailyLossPct': 'Max daily loss (%)',
      'maxDrawdownPct': 'Max drawdown (%)',
      'maxOpenPositions': 'Max open positions',
      'maxConsecutiveLosses': 'Stop after N losses in a row',
      'minSecondsBetweenOrders': 'Min seconds between orders',
      'minExpectedReturnPct': 'Min expected return after costs (%)',
      'minEdgeBrierImprovementPct': 'Model must beat base rate by (%)',
    };
    final ctrls = {for (final k in fields.keys) k: TextEditingController(text: '${risk[k] ?? ''}')};
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Risk limits'),
        content: SingleChildScrollView(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Text(
                'Conservative defaults are set. The server clamps every value to a safe range. '
                'Risk controls reduce but cannot remove risk (gaps, outages, bad fills).',
                style: TextStyle(fontSize: 12),
              ),
              for (final e in fields.entries)
                TextField(
                  controller: ctrls[e.key],
                  keyboardType: const TextInputType.numberWithOptions(decimal: true),
                  decoration: InputDecoration(labelText: e.value),
                ),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('I confirm — save')),
        ],
      ),
    );
    if (ok != true) return;
    await ngmyEdgeInvoke({
      'action': 'tradeRiskSet',
      'confirm': true,
      'settings': {for (final e in ctrls.entries) e.key: double.tryParse(e.value.text.trim())},
    });
    await _loadSummary();
  }

  void _snack(String msg, Color color, {bool long = false}) {
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(
      content: Text(msg),
      backgroundColor: color.withValues(alpha: 0.95),
      duration: Duration(seconds: long ? 7 : 3),
    ));
  }

  // ── UI ──

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(
        backgroundColor: _bg,
        foregroundColor: Colors.white,
        title: const Text('Trading Lab', style: TextStyle(fontWeight: FontWeight.w800)),
        actions: [
          IconButton(
            tooltip: 'Refresh',
            onPressed: () {
              unawaited(_loadSummary());
              unawaited(_analyze());
            },
            icon: const Icon(Icons.refresh_rounded),
          ),
        ],
      ),
      body: RefreshIndicator(
        onRefresh: () async {
          await Future.wait([_loadSummary(), _analyze()]);
        },
        child: ListView(
          padding: const EdgeInsets.fromLTRB(14, 4, 14, 40),
          children: [
            _modeBanner(),
            const SizedBox(height: 12),
            _accountCard(),
            const SizedBox(height: 12),
            _controls(),
            const SizedBox(height: 12),
            if (_error != null) _errorCard(_error!),
            if (_analyzing && _analysis == null) _loadingCard(),
            if (_analysis != null) ...[
              _marketCard(_analysis!),
              const SizedBox(height: 12),
              _decisionCard(_analysis!),
              const SizedBox(height: 12),
              _modelCard(_analysis!),
              const SizedBox(height: 12),
            ],
            _tradesCard(),
            const SizedBox(height: 12),
            _performanceCard(),
            const SizedBox(height: 12),
            _riskCard(),
          ],
        ),
      ),
    );
  }

  Widget _modeBanner() => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: _amber.withValues(alpha: 0.12),
          border: Border.all(color: _amber.withValues(alpha: 0.5)),
          borderRadius: BorderRadius.circular(14),
        ),
        child: const Row(
          children: [
            Icon(Icons.science_rounded, color: _amber),
            SizedBox(width: 10),
            Expanded(
              child: Text(
                'PAPER TRADING — simulated money on real market prices. Live trading is OFF and no broker is '
                'connected. Forecasts are estimates, never guarantees.',
                style: TextStyle(color: Colors.white, fontSize: 12.5, height: 1.35),
              ),
            ),
          ],
        ),
      );

  Widget _box({required String title, required Widget child, Widget? trailing}) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: _card,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: _line),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Expanded(
                  child: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 15)),
                ),
                if (trailing != null) trailing,
              ],
            ),
            const SizedBox(height: 10),
            child,
          ],
        ),
      );

  Widget _kv(String k, String v, {Color? color}) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 3),
        child: Row(
          children: [
            Expanded(child: Text(k, style: const TextStyle(color: _muted, fontSize: 12.5))),
            Text(v, style: TextStyle(color: color ?? Colors.white, fontSize: 13, fontWeight: FontWeight.w600)),
          ],
        ),
      );

  String _money(dynamic v) {
    final n = (v is num) ? v.toDouble() : double.tryParse('$v');
    if (n == null) return '—';
    final s = n.abs().toStringAsFixed(2).replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (_) => ',');
    return '${n < 0 ? '-' : ''}\$$s';
  }

  String _pct(dynamic v, {int digits = 1}) {
    final n = (v is num) ? v.toDouble() : null;
    return n == null ? '—' : '${n.toStringAsFixed(digits)}%';
  }

  String _price(dynamic v) {
    final n = (v is num) ? v.toDouble() : null;
    if (n == null) return '—';
    return n >= 100 ? n.toStringAsFixed(2) : n >= 1 ? n.toStringAsFixed(4) : n.toStringAsFixed(6);
  }

  Color _pnlColor(dynamic v) => (v is num && v < 0) ? _red : (v is num && v > 0) ? _green : Colors.white;

  Widget _accountCard() {
    final a = (_summary?['account'] as Map?) ?? {};
    final halted = a['halted'] == true;
    return _box(
      title: 'Paper account',
      trailing: Text(_summary == null ? 'loading…' : 'SIMULATED', style: const TextStyle(color: _amber, fontSize: 11, fontWeight: FontWeight.w800)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(_money(a['equity']), style: const TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.w900)),
          const Text('Equity (balance + open positions)', style: TextStyle(color: _muted, fontSize: 11.5)),
          const SizedBox(height: 10),
          _kv('Starting balance', _money(a['startingBalance'])),
          _kv('Cash balance', _money(a['balance'])),
          _kv('Realized P&L', _money(a['realizedPnl']), color: _pnlColor(a['realizedPnl'])),
          _kv('Unrealized P&L', _money(a['unrealizedPnl']), color: _pnlColor(a['unrealizedPnl'])),
          _kv('Fees (simulated)', _money(a['feesPaid'])),
          _kv('Net change', _money(a['netChange']), color: _pnlColor(a['netChange'])),
          _kv('Today P&L', _money(a['todayPnl']), color: _pnlColor(a['todayPnl'])),
          _kv('Drawdown from peak', _pct(a['drawdownPct'])),
          _kv('Deposits / withdrawals', 'none (paper)'),
          const SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: FilledButton.icon(
                  style: FilledButton.styleFrom(backgroundColor: halted ? _green : _red),
                  onPressed: _summary == null ? null : () => _setHalt(!halted),
                  icon: Icon(halted ? Icons.play_arrow_rounded : Icons.stop_circle_rounded),
                  label: Text(halted ? 'Resume trading' : 'Emergency stop'),
                ),
              ),
              const SizedBox(width: 8),
              OutlinedButton(onPressed: _resetAccount, child: const Text('Reset')),
            ],
          ),
          if (halted)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Text('New trades are blocked: ${a['haltedReason'] ?? 'stopped'}', style: const TextStyle(color: _red, fontSize: 12)),
            ),
        ],
      ),
    );
  }

  Widget _controls() => _box(
        title: 'Market',
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Wrap(
              spacing: 6,
              runSpacing: 6,
              children: [
                for (final s in _kSymbols)
                  ChoiceChip(
                    label: Text(s.replaceAll('-USD', '')),
                    selected: _symbol == s,
                    onSelected: (_) {
                      setState(() => _symbol = s);
                      unawaited(_analyze());
                    },
                  ),
              ],
            ),
            const SizedBox(height: 8),
            Row(
              children: [
                const Text('Timeframe', style: TextStyle(color: _muted, fontSize: 12)),
                const SizedBox(width: 8),
                for (final e in _kTimeframes.entries)
                  Padding(
                    padding: const EdgeInsets.only(right: 6),
                    child: ChoiceChip(
                      label: Text(e.value),
                      selected: _tf == e.key,
                      onSelected: (_) {
                        setState(() => _tf = e.key);
                        unawaited(_analyze());
                      },
                    ),
                  ),
              ],
            ),
            const SizedBox(height: 4),
            Row(
              children: [
                Text('Forecast horizon: $_horizon bars (${_horizon * _tf ~/ 60} min)', style: const TextStyle(color: _muted, fontSize: 12)),
                Expanded(
                  child: Slider(
                    value: _horizon.toDouble(),
                    min: 2,
                    max: 24,
                    divisions: 22,
                    onChanged: (v) => setState(() => _horizon = v.round()),
                    onChangeEnd: (_) => unawaited(_analyze()),
                  ),
                ),
              ],
            ),
            FilledButton.icon(
              onPressed: _analyzing ? null : _analyze,
              icon: _analyzing
                  ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Icon(Icons.analytics_rounded),
              label: Text(_analyzing ? 'Analyzing real data…' : 'Analyze now'),
            ),
          ],
        ),
      );

  Widget _loadingCard() => _box(
        title: 'Analyzing…',
        child: const Text(
          'Downloading real candles, checking data quality, training the model on the past and testing it on unseen data.',
          style: TextStyle(color: _muted, fontSize: 12.5),
        ),
      );

  Widget _errorCard(String e) => Padding(
        padding: const EdgeInsets.only(bottom: 12),
        child: _box(title: 'Something went wrong', child: Text(e, style: const TextStyle(color: _red))),
      );

  Widget _marketCard(Map<String, dynamic> a) {
    final ind = (a['indicators'] as Map?) ?? {};
    final q = (a['quality'] as Map?) ?? {};
    final issues = (q['issues'] as List?)?.cast<dynamic>() ?? const [];
    final candles = ((a['candles'] as List?) ?? const []).cast<List>();
    return _box(
      title: '${a['symbol']} · ${_kTimeframes[a['timeframeSec']] ?? ''}',
      trailing: Text(_price(a['price']), style: const TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.w900)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Last candle ${_ago(a['priceAt'])} · ${a['dataSource']}',
            style: const TextStyle(color: _muted, fontSize: 11.5),
          ),
          if (issues.isNotEmpty)
            Padding(
              padding: const EdgeInsets.only(top: 4),
              child: Text('Data notes: ${issues.join('; ')}', style: const TextStyle(color: _amber, fontSize: 11.5)),
            ),
          const SizedBox(height: 10),
          SizedBox(
            height: 190,
            child: CustomPaint(
              painter: _CandlePainter(
                candles: candles,
                support: (ind['support'] as num?)?.toDouble(),
                resistance: (ind['resistance'] as num?)?.toDouble(),
              ),
            ),
          ),
          const SizedBox(height: 10),
          _kv('Market regime', '${ind['regime'] ?? '—'}'),
          _kv('RSI (14)', (ind['rsi14'] as num?)?.toStringAsFixed(1) ?? '—'),
          _kv('MACD histogram', (ind['macdHist'] as num?)?.toStringAsFixed(4) ?? '—'),
          _kv('EMA 20 / EMA 50', '${_price(ind['ema20'])} / ${_price(ind['ema50'])}'),
          _kv('ATR (14)', _price(ind['atr14'])),
          _kv('Bollinger band', '${_price(ind['bollingerLower'])} – ${_price(ind['bollingerUpper'])}'),
          _kv('Support / resistance (50 bars)', '${_price(ind['support'])} / ${_price(ind['resistance'])}'),
          _kv('News & economic calendar', 'not connected yet'),
        ],
      ),
    );
  }

  String _ago(dynamic iso) {
    final t = DateTime.tryParse('$iso');
    if (t == null) return '—';
    final s = DateTime.now().toUtc().difference(t.toUtc()).inSeconds;
    if (s < 90) return '${s}s ago';
    if (s < 5400) return '${s ~/ 60}m ago';
    return '${s ~/ 3600}h ago';
  }

  Widget _probBar(String label, double p, Color c) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 3),
        child: Row(
          children: [
            SizedBox(width: 62, child: Text(label, style: const TextStyle(color: _muted, fontSize: 12))),
            Expanded(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(6),
                child: LinearProgressIndicator(value: p.clamp(0, 1), minHeight: 10, backgroundColor: _line, color: c),
              ),
            ),
            const SizedBox(width: 8),
            SizedBox(width: 46, child: Text('${(p * 100).toStringAsFixed(0)}%', textAlign: TextAlign.right, style: const TextStyle(color: Colors.white, fontSize: 12.5))),
          ],
        ),
      );

  Widget _decisionCard(Map<String, dynamic> a) {
    final f = (a['forecast'] as Map?) ?? {};
    final decision = '${a['decision']}';
    final color = decision == 'LONG' ? _green : decision == 'SHORT' ? _red : _muted;
    final plan = a['plan'] as Map?;
    List<String> list(String k) => ((a[k] as List?) ?? const []).map((e) => '$e').toList();
    final halted = ((_summary?['account'] as Map?)?['halted']) == true;
    return _box(
      title: 'AI decision',
      trailing: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
        decoration: BoxDecoration(color: color.withValues(alpha: 0.18), borderRadius: BorderRadius.circular(8)),
        child: Text(decision.replaceAll('_', ' '), style: TextStyle(color: color, fontWeight: FontWeight.w900)),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Forecast for the next ${f['horizonMinutes']} min · ${f['label']}',
            style: const TextStyle(color: _muted, fontSize: 11.5),
          ),
          const SizedBox(height: 6),
          _probBar('Up', (f['pUp'] as num?)?.toDouble() ?? 0, _green),
          _probBar('Down', (f['pDown'] as num?)?.toDouble() ?? 0, _red),
          _probBar('Range', (f['pRange'] as num?)?.toDouble() ?? 0, _blue),
          const SizedBox(height: 6),
          _kv('Expected move', _pct(f['expectedReturnPct'], digits: 3)),
          _kv('Round-trip costs (fees + slippage)', _pct(f['costRoundTripPct'], digits: 2)),
          _kv('Expected value after costs (long / short)', '${_pct(f['longEvPct'], digits: 2)} / ${_pct(f['shortEvPct'], digits: 2)}'),
          if (list('noTradeReasons').isNotEmpty) ...[
            const SizedBox(height: 8),
            const Text('Why no trade', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12.5)),
            for (final r in list('noTradeReasons')) Text('• $r', style: const TextStyle(color: _muted, fontSize: 12.5)),
          ],
          const SizedBox(height: 8),
          const Text('Evidence', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12.5)),
          for (final r in list('reasons')) Text('• $r', style: const TextStyle(color: _muted, fontSize: 12.5)),
          if (list('against').isNotEmpty) ...[
            const SizedBox(height: 4),
            const Text('Contradicting evidence', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 12.5)),
            for (final r in list('against')) Text('• $r', style: const TextStyle(color: _amber, fontSize: 12.5)),
          ],
          if (plan != null) ...[
            const SizedBox(height: 8),
            _kv('Stop loss', _price(plan['stopLoss']), color: _red),
            _kv('Take profit', _price(plan['takeProfit']), color: _green),
            _kv('Invalidated if', '${plan['invalidation']}'),
            _kv('Position size', '1% equity at risk (risk engine sets it)'),
          ],
          const SizedBox(height: 10),
          FilledButton.icon(
            style: FilledButton.styleFrom(backgroundColor: color == _muted ? null : color),
            onPressed: decision == 'NO_TRADE' || _placing || halted ? null : _paperTrade,
            icon: _placing
                ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Icon(Icons.science_rounded),
            label: Text(decision == 'NO_TRADE'
                ? 'No trade — nothing to place'
                : halted
                    ? 'Trading stopped'
                    : 'Paper trade this (simulated)'),
          ),
          const SizedBox(height: 4),
          const Text(
            'The server re-runs the analysis and the risk engine before any paper trade — it can still say no.',
            style: TextStyle(color: _muted, fontSize: 11),
          ),
        ],
      ),
    );
  }

  Widget _modelCard(Map<String, dynamic> a) {
    final m = (a['model'] as Map?) ?? {};
    final up = (m['up'] as Map?) ?? {};
    final down = (m['down'] as Map?) ?? {};
    final bt = (a['backtest'] as Map?) ?? {};
    final tested = (m['testedOn'] as Map?) ?? {};
    final trained = (m['trainedOn'] as Map?) ?? {};
    String edge(Map x) {
      final imp = (x['improvementPct'] as num?)?.toDouble();
      if (imp == null) return '—';
      return '${imp >= 0 ? '+' : ''}${imp.toStringAsFixed(1)}% vs base rate';
    }

    return _box(
      title: 'Model & backtest (unseen data)',
      trailing: Text('${m['version'] ?? ''}', style: const TextStyle(color: _muted, fontSize: 11)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Trained on ${trained['bars']} earlier bars, then tested on the next ${tested['bars']} bars it had never seen '
            '(${_shortDate(tested['from'])} → ${_shortDate(tested['to'])}). Positive = better than guessing.',
            style: const TextStyle(color: _muted, fontSize: 11.5, height: 1.35),
          ),
          const SizedBox(height: 8),
          _kv('"Up" model skill', edge(up), color: ((up['improvementPct'] as num?) ?? 0) > 0 ? _green : _red),
          _kv('"Down" model skill', edge(down), color: ((down['improvementPct'] as num?) ?? 0) > 0 ? _green : _red),
          const Divider(color: _line),
          _kv('Backtest trades', '${bt['trades'] ?? 0} (${bt['wins'] ?? 0} won / ${bt['losses'] ?? 0} lost)'),
          _kv('Win rate', bt['winRate'] == null ? '—' : _pct((bt['winRate'] as num) * 100)),
          _kv('Avg win / avg loss', '${_pct(bt['avgWinPct'], digits: 2)} / ${_pct(bt['avgLossPct'], digits: 2)}'),
          _kv('Profit factor', (bt['profitFactor'] as num?)?.toStringAsFixed(2) ?? '—'),
          _kv('Net return', _pct(bt['netReturnPct'], digits: 2), color: _pnlColor(bt['netReturnPct'])),
          _kv('Max drawdown', _pct(bt['maxDrawdownPct'], digits: 2)),
          _kv('Expected value / trade', _pct(bt['expectedValuePct'], digits: 3), color: _pnlColor(bt['expectedValuePct'])),
          if (bt['note'] != null)
            Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Text('${bt['note']}', style: const TextStyle(color: _amber, fontSize: 11.5)),
            ),
        ],
      ),
    );
  }

  String _shortDate(dynamic iso) {
    final t = DateTime.tryParse('$iso')?.toLocal();
    if (t == null) return '—';
    return '${t.month}/${t.day} ${t.hour.toString().padLeft(2, '0')}:${t.minute.toString().padLeft(2, '0')}';
  }

  Widget _tradesCard() {
    final open = ((_summary?['openTrades'] as List?) ?? const []).cast<Map>();
    final closed = ((_summary?['closedTrades'] as List?) ?? const []).cast<Map>();
    Widget row(Map t, {required bool isOpen}) {
      final pnl = isOpen
          ? (() {
              final mark = (t['markPrice'] as num?)?.toDouble();
              if (mark == null) return null;
              final e = (t['entry_price'] as num).toDouble();
              final q = (t['qty'] as num).toDouble();
              return (t['side'] == 'long' ? mark - e : e - mark) * q;
            })()
          : (t['pnl'] as num?)?.toDouble();
      return Container(
        margin: const EdgeInsets.only(bottom: 8),
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(color: _bg, borderRadius: BorderRadius.circular(12), border: Border.all(color: _line)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Text('${t['side']}'.toUpperCase(), style: TextStyle(color: t['side'] == 'long' ? _green : _red, fontWeight: FontWeight.w900, fontSize: 12)),
                const SizedBox(width: 6),
                Text('${t['symbol']}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
                const SizedBox(width: 6),
                const Text('SIMULATED', style: TextStyle(color: _amber, fontSize: 9.5, fontWeight: FontWeight.w800)),
                const Spacer(),
                Text(pnl == null ? '—' : _money(pnl), style: TextStyle(color: _pnlColor(pnl), fontWeight: FontWeight.w800)),
              ],
            ),
            const SizedBox(height: 4),
            Text(
              'Entry ${_price(t['entry_price'])} · ${_shortDate(t['entry_at'])} · qty ${(t['qty'] as num).toStringAsFixed(6)}'
              '${isOpen ? ' · SL ${_price(t['stop_loss'])} · TP ${_price(t['take_profit'])}' : ' · Exit ${_price(t['exit_price'])} (${t['exit_reason']}) · fees ${_money(t['fees'])}'}',
              style: const TextStyle(color: _muted, fontSize: 11.5),
            ),
            if ((t['reason'] ?? '').toString().isNotEmpty)
              Text('Why: ${t['reason']} · model ${t['model_version']}', style: const TextStyle(color: _muted, fontSize: 11)),
            if (isOpen)
              Align(
                alignment: Alignment.centerRight,
                child: TextButton(onPressed: () => _closeTrade('${t['id']}'), child: const Text('Close now')),
              ),
          ],
        ),
      );
    }

    return _box(
      title: 'Trades',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Open (${open.length})', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
          const SizedBox(height: 6),
          if (open.isEmpty) const Text('No open paper trades.', style: TextStyle(color: _muted, fontSize: 12.5)),
          for (final t in open) row(t, isOpen: true),
          const SizedBox(height: 8),
          Text('Closed (${closed.length})', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
          const SizedBox(height: 6),
          if (closed.isEmpty) const Text('No closed paper trades yet.', style: TextStyle(color: _muted, fontSize: 12.5)),
          for (final t in closed.take(20)) row(t, isOpen: false),
        ],
      ),
    );
  }

  Widget _performanceCard() {
    final p = (_summary?['performance'] as Map?) ?? {};
    final pr = (_summary?['predictions'] as Map?) ?? {};
    return _box(
      title: 'Performance (paper)',
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          _kv('Closed trades', '${p['trades'] ?? 0}'),
          _kv('Win rate', p['winRate'] == null ? '—' : _pct((p['winRate'] as num) * 100)),
          _kv('Average win / loss', '${_money(p['avgWin'])} / ${_money(p['avgLoss'])}'),
          _kv('Profit factor', (p['profitFactor'] as num?)?.toStringAsFixed(2) ?? '—'),
          _kv('Expected value / trade', _money(p['expectedValue']), color: _pnlColor(p['expectedValue'])),
          _kv('Net P&L', _money(p['netPnl']), color: _pnlColor(p['netPnl'])),
          _kv('Predictions checked against reality', '${pr['resolved'] ?? 0}'),
          _kv('Forecast accuracy (Brier, lower is better)', (pr['brierUp'] as num?)?.toStringAsFixed(3) ?? '—'),
          if (p['sampleNote'] != null)
            Padding(
              padding: const EdgeInsets.only(top: 6),
              child: Text('${p['sampleNote']}', style: const TextStyle(color: _amber, fontSize: 11.5)),
            ),
        ],
      ),
    );
  }

  Widget _riskCard() {
    final r = (_summary?['risk'] as Map?) ?? {};
    return _box(
      title: 'Risk engine',
      trailing: TextButton(onPressed: _summary == null ? null : _editRisk, child: const Text('Edit')),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          _kv('Risk per trade', _pct(r['riskPerTradePct'])),
          _kv('Max position size', _pct(r['maxPositionPct'])),
          _kv('Max daily loss', _pct(r['maxDailyLossPct'])),
          _kv('Max drawdown', _pct(r['maxDrawdownPct'])),
          _kv('Max open positions', '${r['maxOpenPositions'] ?? '—'}'),
          _kv('Stop after losses in a row', '${r['maxConsecutiveLosses'] ?? '—'}'),
          _kv('Min time between orders', '${r['minSecondsBetweenOrders'] ?? '—'}s'),
          _kv('Min expected return after costs', _pct(r['minExpectedReturnPct'], digits: 2)),
          _kv('Model must beat base rate by', _pct(r['minEdgeBrierImprovementPct'])),
          const SizedBox(height: 6),
          const Text(
            'No martingale or loss-chasing — position size never increases after a loss. '
            'Risk limits reduce risk but cannot remove it.',
            style: TextStyle(color: _muted, fontSize: 11.5),
          ),
        ],
      ),
    );
  }
}

class _CandlePainter extends CustomPainter {
  _CandlePainter({required this.candles, this.support, this.resistance});

  final List<List> candles; // [t, o, h, l, c]
  final double? support;
  final double? resistance;

  @override
  void paint(Canvas canvas, Size size) {
    if (candles.isEmpty) return;
    double hi = -double.infinity, lo = double.infinity;
    for (final k in candles) {
      hi = math.max(hi, (k[2] as num).toDouble());
      lo = math.min(lo, (k[3] as num).toDouble());
    }
    if (hi <= lo) return;
    final pad = (hi - lo) * 0.06;
    hi += pad;
    lo -= pad;
    double y(double v) => size.height - (v - lo) / (hi - lo) * size.height;
    final w = size.width / candles.length;
    final grid = Paint()..color = const Color(0xFF1F2A3A)..strokeWidth = 1;
    for (var i = 1; i < 4; i++) {
      canvas.drawLine(Offset(0, size.height * i / 4), Offset(size.width, size.height * i / 4), grid);
    }
    void level(double? v, Color c) {
      if (v == null || v < lo || v > hi) return;
      final p = Paint()..color = c.withValues(alpha: 0.6)..strokeWidth = 1;
      for (var x = 0.0; x < size.width; x += 8) {
        canvas.drawLine(Offset(x, y(v)), Offset(x + 4, y(v)), p);
      }
    }

    level(support, _green);
    level(resistance, _red);
    for (var i = 0; i < candles.length; i++) {
      final k = candles[i];
      final o = (k[1] as num).toDouble(), h = (k[2] as num).toDouble(), l = (k[3] as num).toDouble(), c = (k[4] as num).toDouble();
      final up = c >= o;
      final paint = Paint()..color = up ? _green : _red;
      final cx = i * w + w / 2;
      canvas.drawLine(Offset(cx, y(h)), Offset(cx, y(l)), paint..strokeWidth = 1);
      final top = y(math.max(o, c)), bot = y(math.min(o, c));
      canvas.drawRect(Rect.fromLTRB(cx - w * 0.35, top, cx + w * 0.35, math.max(bot, top + 1)), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _CandlePainter old) => old.candles != candles;
}
