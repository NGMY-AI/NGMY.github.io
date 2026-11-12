import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/foundation.dart' show visibleForTesting;
import 'package:flutter/material.dart';

import 'ngmy_advisor_trading_knowledge.dart';
import 'ngmy_edge_invoke.dart';

// The Trading Academy of an advisor. Opened from the live browser of the chat.
//  1. LEARN (once): the lessons on candlesticks, then the advisor studies several markets (it can zoom in and out and go back over the past),
//     for five minutes at most. What it learns is saved on the device, so it never starts over; each day it only tops up.
//  2. DEMO: the advisor takes practice trades (on the past, with practice money) so you can see how well it learned.
//  3. REAL: NGMY is not connected to a broker and never places real-money trades. The advisor shows the setup (direction, entry, stop and target)
//     for you to place yourself, if you choose to.

const _bg = Color(0xFF0B0F17);
const _card = Color(0xFF131A26);
const _green = Color(0xFF22C55E);
const _red = Color(0xFFEF4444);
const _blue = Color(0xFF38BDF8);
const _amber = Color(0xFFFACC15);

const List<String> kAcademyMarkets = ['BTC-USD', 'ETH-USD', 'SOL-USD', 'XRP-USD'];

/// The most the advisor spends learning.
const int kLearnCapSeconds = 300;

/// For the tests: gives the candles without the network.
@visibleForTesting
Future<({List<Candle> candles, bool real})> Function(String market, int timeframeSec)? academyCandlesHook;

/// The candles of [market] (real ones from the server; practice ones if they cannot be had).
Future<({List<Candle> candles, bool real})> academyCandles(String market, {int timeframeSec = 300}) async {
  final hook = academyCandlesHook;
  if (hook != null) return hook(market, timeframeSec);
  try {
    final res = await ngmyEdgeInvoke({'action': 'tradeAnalyze', 'symbol': market, 'timeframeSec': timeframeSec, 'horizonBars': 6}, timeout: const Duration(seconds: 40));
    if (res != null && res['ok'] == true) {
      final raw = ((res['candles'] as List?) ?? const []).cast<List>();
      final out = <Candle>[for (final k in raw) [for (var i = 0; i < 5; i++) (k[i] as num).toDouble()]];
      if (out.length >= 30) return (candles: out, real: true);
    }
  } catch (_) {}
  return (candles: practiceCandles(market.hashCode & 0xffff), real: false);
}

Future<void> showAdvisorTradingAcademy(BuildContext context, String advisorName) => Navigator.of(context).push(MaterialPageRoute<void>(builder: (_) => NgmyAdvisorTradingAcademy(advisorName: advisorName)));

class NgmyAdvisorTradingAcademy extends StatefulWidget {
  const NgmyAdvisorTradingAcademy({super.key, required this.advisorName});
  final String advisorName;

  @override
  State<NgmyAdvisorTradingAcademy> createState() => NgmyAdvisorTradingAcademyState();
}

class NgmyAdvisorTradingAcademyState extends State<NgmyAdvisorTradingAcademy> with SingleTickerProviderStateMixin {
  late final TabController _tabs = TabController(length: 3, vsync: this);
  AdvisorTradingKnowledge? k;
  int _lesson = 0;
  bool _lessonsDone = false;

  // The study session.
  bool studying = false;
  final Stopwatch _clock = Stopwatch();
  Timer? _tick;
  String _studyMarket = '';
  String _studyLine = '';
  List<Candle> _studyCandles = const [];
  int _scan = 0;
  bool _real = true;

  // The chart the advisor looks at (zoom and the place in the past).
  int _visible = 60;
  int _end = 0;

  // Demo.
  bool demoRunning = false;
  final List<String> _demoLines = [];
  String _market = kAcademyMarkets.first;
  TradeSignal? _signal;
  bool _signalReal = true;
  bool _loadingSignal = false;

  @override
  void initState() {
    super.initState();
    AdvisorTradingKnowledge.load(widget.advisorName).then((v) {
      if (!mounted) return;
      setState(() {
        k = v;
        _lessonsDone = v.learned;
      });
      // A day later it only tops up what it knows (a few seconds), it does not start over.
      if (v.learned && v.lastRefreshDay != v.today) _refresh();
    });
  }

  @override
  void dispose() {
    _tick?.cancel();
    _tabs.dispose();
    super.dispose();
  }

  int get remaining => math.max(0, kLearnCapSeconds - _clock.elapsed.inSeconds);

  // ── Learning ──

  Future<void> _learn() async {
    final kn = k;
    if (kn == null || studying) return;
    setState(() {
      studying = true;
      _clock
        ..reset()
        ..start();
    });
    _tick = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
    var total = 0;
    for (final m in kAcademyMarkets) {
      if (!mounted || remaining == 0) break;
      for (final tf in const [300, 900]) {
        if (!mounted || remaining == 0) break;
        await _studyOne(kn, m, tf);
        total += 1;
      }
    }
    _tick?.cancel();
    _clock.stop();
    kn
      ..learned = true
      ..learnedAtMs = DateTime.now().millisecondsSinceEpoch
      ..lastRefreshDay = kn.today
      ..learnSeconds = _clock.elapsed.inSeconds;
    await kn.save();
    if (!mounted) return;
    setState(() {
      studying = false;
      _studyLine = 'Done: studied $total views of ${kn.markets.length} markets in ${_clock.elapsed.inSeconds} seconds and saved it.';
    });
  }

  /// The advisor looks at one market at one timeframe: it goes back over the past, zooms, and counts what each shape was followed by.
  Future<void> _studyOne(AdvisorTradingKnowledge kn, String market, int tf) async {
    setState(() {
      _studyMarket = '$market · ${tf ~/ 60}m';
      _studyLine = 'Fetching the candles of $market...';
    });
    final got = await academyCandles(market, timeframeSec: tf);
    if (!mounted) return;
    final c = got.candles;
    setState(() {
      _studyCandles = c;
      _real = got.real;
      _visible = 80;
      _end = c.length;
      _scan = 0;
      _studyLine = got.real ? 'Going back over the past of $market...' : 'The live market could not be reached, so $market is a practice market.';
    });
    // Zoom out over everything, then walk back through the past in steps.
    final steps = 24;
    for (var s = 0; s < steps; s++) {
      if (!mounted || remaining == 0) return;
      await Future<void>.delayed(const Duration(milliseconds: 120));
      if (!mounted) return;
      setState(() {
        _scan = (c.length * (s + 1) / steps).round();
        _end = _scan;
        _visible = s < 8 ? 80 + s * 15 : (s < 16 ? 200 - (s - 8) * 12 : 80);
        _studyLine = 'Looking at ${detectPatterns(c, math.max(2, math.min(c.length - 1, _scan - 1))).map((p) => patternInfo(p).name).join(', ')}'.replaceFirst(RegExp(r'Looking at $'), 'Scanning the candles...');
      });
    }
    final n = kn.study('$market|$tf', c);
    kn.markets.remove('$market|$tf');
    if (!kn.markets.contains(market)) kn.markets.add(market);
    if (!mounted) return;
    setState(() => _studyLine = '$market ${tf ~/ 60}m: $n shapes counted so far, ${kn.samples} in all.');
  }

  /// The daily top-up: one look at the newest candles of one market.
  Future<void> _refresh() async {
    final kn = k;
    if (kn == null || studying) return;
    setState(() {
      studying = true;
      _studyLine = 'Keeping up with today\'s market...';
    });
    final m = kAcademyMarkets[DateTime.now().day % kAcademyMarkets.length];
    final got = await academyCandles(m);
    if (!mounted) return;
    final n = kn.study('$m|300', got.candles);
    kn.lastRefreshDay = kn.today;
    await kn.save();
    if (!mounted) return;
    setState(() {
      studying = false;
      _studyCandles = got.candles;
      _end = got.candles.length;
      _real = got.real;
      _studyLine = 'Topped up with $n new shapes from today in $m. Nothing was forgotten.';
    });
  }

  // ── Demo ──

  Future<void> _demo() async {
    final kn = k;
    if (kn == null || demoRunning) return;
    setState(() {
      demoRunning = true;
      _demoLines.clear();
    });
    var placed = 0;
    for (final m in kAcademyMarkets) {
      if (!mounted || placed >= 5) break;
      final got = await academyCandles(m);
      if (!mounted) return;
      final c = got.candles;
      // The advisor walks through the past candle by candle, as if it were live, and trades when it sees a setup.
      for (var i = math.max(14, c.length ~/ 2); i + kLookAhead < c.length && placed < 5; i++) {
        final r = kn.demoOn(c, i, m);
        if (r == null) continue;
        placed++;
        setState(() {
          _demoLines.add(r.text);
          _studyCandles = c;
          _end = i + kLookAhead + 1;
        });
        await Future<void>.delayed(const Duration(milliseconds: 500));
        if (!mounted) return;
        i += kLookAhead;
      }
    }
    await kn.save();
    if (!mounted) return;
    setState(() {
      demoRunning = false;
      if (placed == 0) _demoLines.add('The advisor found no clear setup to trade: waiting is a good decision too.');
    });
  }

  // ── The real market view ──

  Future<void> _showSignal() async {
    final kn = k;
    if (kn == null) return;
    setState(() => _loadingSignal = true);
    final got = await academyCandles(_market);
    if (!mounted) return;
    setState(() {
      _loadingSignal = false;
      _signal = kn.signalAt(got.candles);
      _signalReal = got.real;
      _studyCandles = got.candles;
      _end = got.candles.length;
    });
  }

  // ── The picture ──

  Widget _chart({double height = 190}) {
    final c = _studyCandles;
    if (c.isEmpty) {
      return Container(height: height, decoration: BoxDecoration(color: _card, borderRadius: BorderRadius.circular(16)), alignment: Alignment.center, child: const Text('The chart shows here', style: TextStyle(color: Colors.white38)));
    }
    final end = _end.clamp(5, c.length).toInt();
    final vis = _visible.clamp(10, math.min(240, c.length)).toInt();
    final start = math.max(0, end - vis);
    return Column(children: [
      Container(
        key: const Key('academy-chart'),
        height: height,
        width: double.infinity,
        decoration: BoxDecoration(color: _card, borderRadius: BorderRadius.circular(16), border: Border.all(color: Colors.white12)),
        clipBehavior: Clip.antiAlias,
        child: GestureDetector(
          onHorizontalDragUpdate: (d) => setState(() => _end = (_end - (d.delta.dx * vis / 300).round()).clamp(10, c.length)),
          child: CustomPaint(painter: _ChartPainter(c.sublist(start, end), _real)),
        ),
      ),
      Row(children: [
        IconButton(tooltip: 'Zoom in', onPressed: () => setState(() => _visible = math.max(10, (_visible * 0.7).round())), icon: const Icon(Icons.zoom_in_rounded, color: Colors.white70)),
        IconButton(tooltip: 'Zoom out', onPressed: () => setState(() => _visible = math.min(240, (_visible * 1.4).round())), icon: const Icon(Icons.zoom_out_rounded, color: Colors.white70)),
        IconButton(tooltip: 'Go back in time', onPressed: () => setState(() => _end = math.max(10, _end - vis ~/ 2)), icon: const Icon(Icons.fast_rewind_rounded, color: Colors.white70)),
        IconButton(tooltip: 'Go forward', onPressed: () => setState(() => _end = math.min(c.length, _end + vis ~/ 2)), icon: const Icon(Icons.fast_forward_rounded, color: Colors.white70)),
        const Spacer(),
        Text(_real ? 'Real market' : 'Practice market', style: TextStyle(color: _real ? _green : _amber, fontWeight: FontWeight.w800, fontSize: 12)),
      ]),
    ]);
  }

  Widget _frame(String title, IconData icon, Color col, Widget child) => Container(
        width: double.infinity,
        margin: const EdgeInsets.only(bottom: 12),
        padding: const EdgeInsets.fromLTRB(14, 10, 14, 12),
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [col.withValues(alpha: 0.16), col.withValues(alpha: 0.04)]),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: col.withValues(alpha: 0.6), width: 1.3),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Row(children: [
            Icon(icon, size: 17, color: col),
            const SizedBox(width: 7),
            Expanded(child: Text(title, style: TextStyle(color: col, fontWeight: FontWeight.w900, fontSize: 12.5, letterSpacing: 0.5))),
          ]),
          const SizedBox(height: 8),
          child,
        ]),
      );

  Widget _big(String label, VoidCallback? f, {Color col = _blue, IconData icon = Icons.play_arrow_rounded, Key? key}) => SizedBox(
        width: double.infinity,
        child: FilledButton.icon(
          key: key,
          onPressed: f,
          icon: Icon(icon),
          label: Text(label, style: const TextStyle(fontWeight: FontWeight.w900)),
          style: FilledButton.styleFrom(backgroundColor: col, foregroundColor: Colors.black, padding: const EdgeInsets.symmetric(vertical: 13), shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))),
        ),
      );

  // ── The lessons ──

  static const List<(String, String)> _lessons = [
    ('What a candle is', 'Each candle shows one slice of time (say five minutes). The thick body goes from where the price OPENED to where it CLOSED. The thin lines, the wicks, show the HIGHEST and the LOWEST price in that time. A green candle closed higher than it opened; a red one closed lower.'),
    ('Reading the wicks', 'A long wick means the price went there and was pushed back. A long lower wick says buyers stepped in; a long upper wick says sellers stepped in. The body says who won the slice of time.'),
    ('Shapes that repeat', 'Some shapes show up again and again: the doji, the hammer, the shooting star, the engulfing candles, three in a row, and breakouts. No shape is a promise. What the advisor does is count what the price did AFTER each shape, over thousands of candles.'),
    ('Zoom in, zoom out', 'Zoomed in you see each candle. Zoomed out you see the trend, the ceilings and the floors. The advisor goes back over the past at different zooms to see how markets rose and fell, and how often a shape was followed by a rise.'),
    ('Risk comes first', 'Every trade has a stop (where it gives up if it is wrong) and a target. A good setup can still lose. The advisor starts with demo trades so you can see how it does before anything else, and it never risks money you cannot lose.'),
  ];

  Widget _learnTab() {
    final kn = k;
    if (kn == null) return const Center(child: CircularProgressIndicator());
    return ListView(padding: const EdgeInsets.all(14), children: [
      _frame(
        kn.learned ? '${widget.advisorName} KNOWS THE CANDLES' : 'LEARNING TO READ CANDLES',
        kn.learned ? Icons.verified_rounded : Icons.school_rounded,
        kn.learned ? _green : _blue,
        Text(
          kn.learned
              ? 'Learned once and saved on this device: ${kn.samples} shapes studied across ${kn.markets.length} markets. It does not start over; each day it tops up with the newest candles.'
              : 'Five short lessons, then the advisor studies the markets for up to five minutes (it is quicker when the advisor is quick). It only has to do this once.',
          style: const TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.4),
        ),
      ),
      if (!kn.learned && !_lessonsDone)
        _frame(
          'LESSON ${_lesson + 1} OF ${_lessons.length}',
          Icons.menu_book_rounded,
          _amber,
          Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(_lessons[_lesson].$1, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16)),
            const SizedBox(height: 6),
            Text(_lessons[_lesson].$2, style: const TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.45)),
            const SizedBox(height: 10),
            SizedBox(height: 70, child: CustomPaint(painter: _LessonPainter(_lesson), size: Size.infinite)),
            const SizedBox(height: 10),
            _big(_lesson == _lessons.length - 1 ? 'Done with the lessons' : 'Next lesson', () => setState(() {
                  if (_lesson == _lessons.length - 1) {
                    _lessonsDone = true;
                  } else {
                    _lesson++;
                  }
                }), key: const Key('academy-next'), icon: Icons.arrow_forward_rounded),
          ]),
        ),
      if (!kn.learned && _lessonsDone) ...[
        _chart(),
        if (studying) ...[
          const SizedBox(height: 4),
          LinearProgressIndicator(value: (kLearnCapSeconds - remaining) / kLearnCapSeconds, minHeight: 6, color: _blue, backgroundColor: Colors.white12),
          const SizedBox(height: 6),
          Text('$_studyMarket · ${remaining ~/ 60}:${(remaining % 60).toString().padLeft(2, '0')} left at the most', style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w800, fontSize: 12.5)),
        ],
        if (_studyLine.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6, bottom: 8), child: Text(_studyLine, key: const Key('academy-line'), style: const TextStyle(color: Colors.white60, fontSize: 12.5))),
        _big(studying ? 'Studying the markets...' : 'Let ${widget.advisorName} study the markets', studying ? null : _learn, key: const Key('academy-learn'), icon: Icons.candlestick_chart_rounded),
      ],
      if (kn.learned) ...[
        _chart(),
        if (_studyLine.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6, bottom: 8), child: Text(_studyLine, style: const TextStyle(color: Colors.white60, fontSize: 12.5))),
        _frame('WHAT IT LEARNED', Icons.insights_rounded, _blue, Column(children: [
          for (final p in kPatterns)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 3),
              child: Row(children: [
                Expanded(child: Text(p.name, style: const TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w700))),
                Text(kn.stats[p.key]!.seen == 0 ? 'no samples' : 'up ${(kn.stats[p.key]!.rate * 100).round()}% of ${kn.stats[p.key]!.seen}', style: TextStyle(color: kn.stats[p.key]!.rate >= 0.5 ? _green : _red, fontSize: 12.5, fontWeight: FontWeight.w800)),
              ]),
            ),
        ])),
        _big(studying ? 'Topping up...' : 'Top up with today\'s market', studying ? null : _refresh, icon: Icons.refresh_rounded, col: Colors.white70),
      ],
    ]);
  }

  Widget _demoTab() {
    final kn = k;
    if (kn == null) return const Center(child: CircularProgressIndicator());
    if (!kn.learned) {
      return ListView(padding: const EdgeInsets.all(14), children: [_frame('LEARN FIRST', Icons.lock_rounded, _amber, const Text('The advisor takes demo trades after it has learned. Open the Learn tab first.', style: TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.4)))]);
    }
    return ListView(padding: const EdgeInsets.all(14), children: [
      _frame('DEMO TRADES', Icons.science_rounded, _green, const Text('Practice money only. The advisor walks through the past of the markets as if it were live, takes up to five trades when it sees a setup, and the next candles show how each one went. This is how you see how well it learned.', style: TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.4))),
      _chart(),
      const SizedBox(height: 8),
      _big(demoRunning ? 'Trading in the demo...' : 'Run demo trades', demoRunning ? null : _demo, key: const Key('academy-demo'), col: _green, icon: Icons.play_circle_fill_rounded),
      const SizedBox(height: 12),
      if (_demoLines.isNotEmpty)
        _frame('THIS RUN', Icons.receipt_long_rounded, _blue, Column(crossAxisAlignment: CrossAxisAlignment.start, children: [for (final l in _demoLines) Padding(padding: const EdgeInsets.symmetric(vertical: 3), child: Text(l, style: TextStyle(color: l.contains(' won ') ? _green : (l.contains(' lost ') ? _red : Colors.white70), fontSize: 12.5, height: 1.3)))])),
      _frame('ALL DEMO TRADES', Icons.emoji_events_rounded, _amber, Text(kn.demoTrades == 0 ? 'None yet.' : '${kn.demoWins} won of ${kn.demoTrades}: ${(kn.demoWins * 100 / kn.demoTrades).round()}%. Not a promise: markets change.', style: const TextStyle(color: Colors.white70, fontSize: 13.5))),
    ]);
  }

  Widget _realTab() {
    final kn = k;
    if (kn == null) return const Center(child: CircularProgressIndicator());
    final s = _signal;
    return ListView(padding: const EdgeInsets.all(14), children: [
      _frame('REAL MONEY', Icons.shield_rounded, _red, const Text('NGMY is not connected to a broker, and the advisor never places a real-money trade for you. It can show you its setup: the direction, where to get in, where to stop and where to take profit. If you choose to act on it, you place it yourself, with money you can afford to lose. Most people lose money trading. This is not financial advice.', key: Key('academy-real-note'), style: TextStyle(color: Colors.white70, fontSize: 13.5, height: 1.4))),
      if (!kn.learned) _frame('LEARN FIRST', Icons.lock_rounded, _amber, const Text('The advisor reads the market after it has learned. Open the Learn tab first.', style: TextStyle(color: Colors.white70, fontSize: 13.5))),
      if (kn.learned) ...[
        Wrap(spacing: 8, children: [
          for (final m in kAcademyMarkets) ChoiceChip(label: Text(m), selected: m == _market, onSelected: (_) => setState(() {
                _market = m;
                _signal = null;
              })),
        ]),
        const SizedBox(height: 8),
        _chart(),
        const SizedBox(height: 8),
        _big(_loadingSignal ? 'Looking at the market...' : 'Show the advisor\'s setup', _loadingSignal ? null : _showSignal, col: _amber, icon: Icons.visibility_rounded),
        const SizedBox(height: 12),
        if (s != null)
          _frame(
            '${s.word} ${_market}${_signalReal ? '' : ' (practice market)'}',
            s.direction > 0 ? Icons.trending_up_rounded : (s.direction < 0 ? Icons.trending_down_rounded : Icons.pause_circle_rounded),
            s.direction > 0 ? _green : (s.direction < 0 ? _red : _amber),
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              if (s.direction != 0) ...[
                Text('Confidence ${(s.confidence * 100).round()}%   ·   in ${s.entry.toStringAsFixed(2)}   ·   stop ${s.stop.toStringAsFixed(2)}   ·   target ${s.target.toStringAsFixed(2)}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 13)),
                const SizedBox(height: 6),
              ],
              for (final r in s.reasons) Padding(padding: const EdgeInsets.symmetric(vertical: 2), child: Text('• $r', style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.35))),
            ]),
          ),
      ],
    ]);
  }

  @override
  Widget build(BuildContext context) {
    final kn = k;
    return Scaffold(
      backgroundColor: _bg,
      appBar: AppBar(
        backgroundColor: _bg,
        foregroundColor: Colors.white,
        title: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('Trading Academy', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17)),
          Text(kn == null ? '...' : (kn.learned ? '${widget.advisorName} · ready' : '${widget.advisorName} · learning'), style: TextStyle(color: kn?.learned == true ? _green : _amber, fontSize: 11.5, fontWeight: FontWeight.w800)),
        ]),
        bottom: TabBar(controller: _tabs, indicatorColor: _blue, labelColor: Colors.white, unselectedLabelColor: Colors.white54, tabs: const [Tab(text: 'Learn'), Tab(text: 'Demo'), Tab(text: 'Real')]),
      ),
      body: TabBarView(controller: _tabs, children: [_learnTab(), _demoTab(), _realTab()]),
    );
  }
}

class _ChartPainter extends CustomPainter {
  _ChartPainter(this.c, this.real);
  final List<Candle> c;
  final bool real;

  @override
  void paint(Canvas canvas, Size s) {
    if (c.isEmpty) return;
    var hi = -1e18, lo = 1e18;
    for (final k in c) {
      hi = math.max(hi, k[2]);
      lo = math.min(lo, k[3]);
    }
    final span = math.max(1e-9, hi - lo);
    double y(double v) => s.height - 8 - (v - lo) / span * (s.height - 16);
    final w = s.width / c.length;
    final grid = Paint()..color = Colors.white10;
    for (var i = 1; i < 4; i++) {
      canvas.drawLine(Offset(0, s.height * i / 4), Offset(s.width, s.height * i / 4), grid);
    }
    for (var i = 0; i < c.length; i++) {
      final k = c[i];
      final up = k[4] >= k[1];
      final col = up ? _green : _red;
      final x = i * w + w / 2;
      canvas.drawLine(Offset(x, y(k[2])), Offset(x, y(k[3])), Paint()..color = col..strokeWidth = math.max(1, w * 0.12));
      final top = y(math.max(k[1], k[4])), bot = y(math.min(k[1], k[4]));
      canvas.drawRect(Rect.fromLTRB(x - w * 0.36, top, x + w * 0.36, math.max(bot, top + 1)), Paint()..color = col);
    }
  }

  @override
  bool shouldRepaint(covariant _ChartPainter old) => true;
}

/// A little drawing for each lesson.
class _LessonPainter extends CustomPainter {
  _LessonPainter(this.lesson);
  final int lesson;

  @override
  void paint(Canvas canvas, Size s) {
    void candle(double x, double o, double c, double h, double l) {
      final up = c >= o;
      final col = up ? _green : _red;
      double y(double v) => s.height * (1 - v);
      canvas.drawLine(Offset(x, y(h)), Offset(x, y(l)), Paint()..color = col..strokeWidth = 2);
      canvas.drawRect(Rect.fromLTRB(x - 9, y(math.max(o, c)), x + 9, y(math.min(o, c))), Paint()..color = col);
    }

    final cx = s.width / 2;
    switch (lesson) {
      case 0:
        candle(cx - 40, 0.3, 0.7, 0.85, 0.2);
        candle(cx + 40, 0.7, 0.35, 0.8, 0.25);
      case 1:
        candle(cx - 40, 0.62, 0.7, 0.75, 0.15);
        candle(cx + 40, 0.38, 0.3, 0.85, 0.25);
      case 2:
        candle(cx - 60, 0.6, 0.4, 0.65, 0.35);
        candle(cx, 0.35, 0.7, 0.75, 0.3);
        candle(cx + 60, 0.5, 0.52, 0.9, 0.1);
      case 3:
        for (var i = 0; i < 10; i++) {
          candle(20 + i * (s.width - 40) / 9, 0.2 + i * 0.05, 0.28 + i * 0.05 + (i.isEven ? 0.04 : -0.02), 0.35 + i * 0.05, 0.15 + i * 0.05);
        }
      default:
        candle(cx, 0.4, 0.6, 0.7, 0.3);
        canvas.drawLine(Offset(0, s.height * 0.75), Offset(s.width, s.height * 0.75), Paint()..color = _red.withValues(alpha: 0.8)..strokeWidth = 1.5);
        canvas.drawLine(Offset(0, s.height * 0.2), Offset(s.width, s.height * 0.2), Paint()..color = _green.withValues(alpha: 0.8)..strokeWidth = 1.5);
    }
  }

  @override
  bool shouldRepaint(covariant _LessonPainter old) => old.lesson != lesson;
}
