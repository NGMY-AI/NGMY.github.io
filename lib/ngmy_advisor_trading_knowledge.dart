import 'dart:convert';
import 'dart:math' as math;

import 'package:shared_preferences/shared_preferences.dart';

// What an advisor knows about reading candlesticks: it is learned once from real (or practice) candles, kept on the device, and topped up each day.
// A candle is [time in ms, open, high, low, close].

typedef Candle = List<double>;

/// The shapes an advisor learns to recognise.
class PatternInfo {
  const PatternInfo(this.key, this.name, this.lesson, this.up);
  final String key, name, lesson;

  /// Whether the textbook says it points up (true), down (false) or is undecided (null).
  final bool? up;
}

const List<PatternInfo> kPatterns = [
  PatternInfo('doji', 'Doji', 'The open and the close are almost the same: buyers and sellers are equal. After a long run it can mean the move is tiring.', null),
  PatternInfo('hammer', 'Hammer', 'A small body on top and a long lower wick: sellers pushed the price down but buyers pushed it back. It often shows up near the bottom of a fall.', true),
  PatternInfo('star', 'Shooting star', 'A small body at the bottom and a long upper wick: buyers pushed the price up but sellers pushed it back. It often shows up near the top of a rise.', false),
  PatternInfo('bullEngulf', 'Bullish engulfing', 'A green candle that swallows the red candle before it: buyers took over from sellers.', true),
  PatternInfo('bearEngulf', 'Bearish engulfing', 'A red candle that swallows the green candle before it: sellers took over from buyers.', false),
  PatternInfo('threeUp', 'Three rising candles', 'Three green candles in a row, each closing higher: a steady push up.', true),
  PatternInfo('threeDown', 'Three falling candles', 'Three red candles in a row, each closing lower: a steady push down.', false),
  PatternInfo('breakUp', 'Breakout up', 'The price closes above the highest high of the last ten candles: it has pushed through a ceiling.', true),
  PatternInfo('breakDown', 'Breakdown', 'The price closes below the lowest low of the last ten candles: it has fallen through a floor.', false),
];

PatternInfo patternInfo(String key) => kPatterns.firstWhere((p) => p.key == key);

/// How many candles later the result is measured.
const int kLookAhead = 5;

/// The patterns that show on candle [i].
List<String> detectPatterns(List<Candle> c, int i) {
  final out = <String>[];
  if (i < 2 || i >= c.length) return out;
  double body(int k) => (c[k][4] - c[k][1]).abs();
  double range(int k) => math.max(1e-9, c[k][2] - c[k][3]);
  bool green(int k) => c[k][4] > c[k][1];
  bool red(int k) => c[k][4] < c[k][1];
  final b = body(i), r = range(i);
  final upper = c[i][2] - math.max(c[i][1], c[i][4]);
  final lower = math.min(c[i][1], c[i][4]) - c[i][3];
  if (b < r * 0.1) out.add('doji');
  if (b > r * 0.05 && lower >= 2 * b && upper <= b * 0.6) out.add('hammer');
  if (b > r * 0.05 && upper >= 2 * b && lower <= b * 0.6) out.add('star');
  if (red(i - 1) && green(i) && c[i][1] <= c[i - 1][4] && c[i][4] >= c[i - 1][1]) out.add('bullEngulf');
  if (green(i - 1) && red(i) && c[i][1] >= c[i - 1][4] && c[i][4] <= c[i - 1][1]) out.add('bearEngulf');
  if (green(i) && green(i - 1) && green(i - 2) && c[i][4] > c[i - 1][4] && c[i - 1][4] > c[i - 2][4]) out.add('threeUp');
  if (red(i) && red(i - 1) && red(i - 2) && c[i][4] < c[i - 1][4] && c[i - 1][4] < c[i - 2][4]) out.add('threeDown');
  if (i >= 10) {
    var hi = -1e18, lo = 1e18;
    for (var k = i - 10; k < i; k++) {
      hi = math.max(hi, c[k][2]);
      lo = math.min(lo, c[k][3]);
    }
    if (c[i][4] > hi) out.add('breakUp');
    if (c[i][4] < lo) out.add('breakDown');
  }
  return out;
}

/// The average size of a candle over the last [n]: how far the price usually moves.
double averageRange(List<Candle> c, {int n = 14}) {
  if (c.isEmpty) return 0;
  final from = math.max(0, c.length - n);
  var s = 0.0;
  for (var i = from; i < c.length; i++) {
    s += c[i][2] - c[i][3];
  }
  return s / (c.length - from);
}

class PatternStat {
  PatternStat({this.seen = 0, this.up = 0});
  int seen, up;
  double get rate => seen == 0 ? 0.5 : up / seen;
}

/// What the advisor decides about the market right now.
class TradeSignal {
  const TradeSignal(this.direction, this.confidence, this.reasons, {this.entry = 0, this.stop = 0, this.target = 0});

  /// 1 up (buy), -1 down (sell), 0 wait.
  final int direction;
  final double confidence;
  final List<String> reasons;
  final double entry, stop, target;

  String get word => direction > 0 ? 'BUY' : (direction < 0 ? 'SELL' : 'WAIT');
}

class AdvisorTradingKnowledge {
  AdvisorTradingKnowledge(this.advisor);
  final String advisor;

  /// True once the advisor has been through the learning (it never has to again).
  bool learned = false;
  int learnedAtMs = 0;
  String lastRefreshDay = '';
  int learnSeconds = 0;
  final Map<String, PatternStat> stats = {for (final p in kPatterns) p.key: PatternStat()};

  /// The last candle already counted for each market, so a day's top-up never counts a candle twice.
  final Map<String, double> lastSeen = {};
  final List<String> markets = [];
  int demoTrades = 0, demoWins = 0;
  final List<String> demoLog = [];

  int get samples => stats.values.fold(0, (a, s) => a + s.seen);

  static String _key(String advisor) => 'advisor_trade_knowledge_v1_${advisor.toLowerCase().replaceAll(RegExp(r'[^a-z0-9]+'), '_')}';

  Map<String, dynamic> toJson() => {
        'learned': learned,
        'at': learnedAtMs,
        'day': lastRefreshDay,
        'secs': learnSeconds,
        'stats': {for (final e in stats.entries) e.key: [e.value.seen, e.value.up]},
        'seen': lastSeen,
        'markets': markets,
        'dt': demoTrades,
        'dw': demoWins,
        'log': demoLog,
      };

  void loadJson(Map<String, dynamic> j) {
    learned = j['learned'] == true;
    learnedAtMs = (j['at'] as num?)?.toInt() ?? 0;
    lastRefreshDay = '${j['day'] ?? ''}';
    learnSeconds = (j['secs'] as num?)?.toInt() ?? 0;
    for (final e in ((j['stats'] as Map?) ?? const {}).entries) {
      final v = e.value as List;
      stats['${e.key}'] = PatternStat(seen: (v[0] as num).toInt(), up: (v[1] as num).toInt());
    }
    lastSeen
      ..clear()
      ..addAll({for (final e in ((j['seen'] as Map?) ?? const {}).entries) '${e.key}': (e.value as num).toDouble()});
    markets
      ..clear()
      ..addAll([for (final m in (j['markets'] as List? ?? const [])) '$m']);
    demoTrades = (j['dt'] as num?)?.toInt() ?? 0;
    demoWins = (j['dw'] as num?)?.toInt() ?? 0;
    demoLog
      ..clear()
      ..addAll([for (final m in (j['log'] as List? ?? const [])) '$m']);
  }

  static Future<AdvisorTradingKnowledge> load(String advisor) async {
    final k = AdvisorTradingKnowledge(advisor);
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString(_key(advisor));
      if (raw != null) k.loadJson(jsonDecode(raw) as Map<String, dynamic>);
    } catch (_) {}
    return k;
  }

  Future<void> save() async {
    try {
      final p = await SharedPreferences.getInstance();
      await p.setString(_key(advisor), jsonEncode(toJson()));
    } catch (_) {}
  }

  /// Studies [candles] of [market]: every pattern on a candle that has not been counted yet is checked against what the price did next.
  /// Returns how many new patterns were counted.
  int study(String market, List<Candle> candles) {
    final key = market;
    final from = lastSeen[key] ?? -1;
    var counted = 0;
    for (var i = 2; i + kLookAhead < candles.length; i++) {
      if (candles[i][0] <= from) continue;
      final up = candles[i + kLookAhead][4] > candles[i][4];
      for (final p in detectPatterns(candles, i)) {
        final s = stats[p]!;
        s.seen++;
        if (up) s.up++;
        counted++;
      }
    }
    if (candles.length > kLookAhead) lastSeen[key] = candles[candles.length - 1 - kLookAhead][0];
    if (!markets.contains(market)) markets.add(market);
    return counted;
  }

  /// What the advisor makes of the market at candle [at] (the last one by default).
  TradeSignal signalAt(List<Candle> candles, {int? at}) {
    final i = at ?? candles.length - 1;
    if (i < 12 || i >= candles.length) return const TradeSignal(0, 0.5, ['Not enough candles yet.']);
    var score = 0.0;
    final reasons = <String>[];
    for (final p in detectPatterns(candles, i)) {
      final s = stats[p]!;
      if (s.seen < 8) continue;
      final edge = s.rate - 0.5;
      score += edge;
      reasons.add('${patternInfo(p).name}: price went up ${(s.rate * 100).round()}% of ${s.seen} times afterwards.');
    }
    // The short trend: the last ten candles.
    final trend = candles[i][4] - candles[i - 10][4];
    if (trend.abs() > averageRange(candles.sublist(0, i + 1)) * 2) {
      score += trend > 0 ? 0.02 : -0.02;
      reasons.add(trend > 0 ? 'The last ten candles went up.' : 'The last ten candles went down.');
    }
    final atr = averageRange(candles.sublist(0, i + 1));
    final dir = score > 0.04 ? 1 : (score < -0.04 ? -1 : 0);
    final price = candles[i][4];
    if (dir == 0) return TradeSignal(0, 0.5, reasons.isEmpty ? ['No clear shape: waiting is a good trade too.'] : reasons, entry: price);
    return TradeSignal(dir, (0.5 + score.abs()).clamp(0.5, 0.9), reasons, entry: price, stop: price - dir * atr * 1.0, target: price + dir * atr * 1.5);
  }

  /// A demo trade on the past: the advisor looks at candle [at] only, decides, and the next [kLookAhead] candles show how it went.
  /// Returns null when it chose to wait, otherwise whether it won and the text for the log.
  ({bool win, String text})? demoOn(List<Candle> candles, int at, String market) {
    final s = signalAt(candles, at: at);
    if (s.direction == 0 || at + kLookAhead >= candles.length) return null;
    final end = candles[at + kLookAhead][4];
    final move = (end - candles[at][4]) * s.direction;
    final win = move > 0;
    demoTrades++;
    if (win) demoWins++;
    final text = '${s.word} $market at ${candles[at][4].toStringAsFixed(2)}: ${win ? 'won' : 'lost'} ${(move / candles[at][4] * 100).abs().toStringAsFixed(2)}% after $kLookAhead candles (practice money).';
    demoLog.insert(0, text);
    if (demoLog.length > 30) demoLog.removeLast();
    return (win: win, text: text);
  }

  String get today {
    final n = DateTime.now();
    return '${n.year}-${n.month}-${n.day}';
  }
}

/// Candles for practice when the real market cannot be reached (offline): a believable random walk that trends and turns, the same every time for the same [seed].
List<Candle> practiceCandles(int seed, {int n = 240, double start = 100, int stepMs = 300000}) {
  final r = math.Random(seed);
  final out = <Candle>[];
  var price = start;
  var drift = 0.0;
  final t0 = DateTime(2024, 1, 1).millisecondsSinceEpoch.toDouble();
  for (var i = 0; i < n; i++) {
    if (i % 25 == 0) drift = (r.nextDouble() - 0.5) * 0.9;
    final o = price;
    final move = drift * 0.35 + (r.nextDouble() - 0.5) * 1.6;
    final c = o + move;
    final h = math.max(o, c) + r.nextDouble() * 0.8;
    final l = math.min(o, c) - r.nextDouble() * 0.8;
    out.add([t0 + i * stepMs, o, h, l, c]);
    price = c;
  }
  return out;
}
