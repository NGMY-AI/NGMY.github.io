// Signal Grid · Learn — a trading course, live signals and a tutor, built on the agent's own live readings.
//
// Lessons: short plain-language lessons, each with a LIVE example from the 10 watched markets and a quick quiz.
// Live signals: every market read with the same rules the agent trades by (trend, strength, RSI, last hour).
// Ask: the app's AI (through bright-handler, with its normal limits) answers questions, given the live readings
// and the agent's state, so answers talk about what the market is doing right now.
// Educational practice with pretend money. Signals can fail; nothing here is a promise of profit.

part of 'ngmy_signal_grid_agent.dart';

// ───────────────────────────────────────────────────────────── shared helpers used by both screens

String _nextAuto() {
  final now = _toEt(DateTime.now().toUtc());
  final mins = 15 - now.minute % 15;
  final next = DateTime(now.year, now.month, now.day, now.hour, now.minute).add(Duration(minutes: mins));
  return 'at ${_clock(next)} ET';
}

Color _actionColor(String a) {
  if (a.startsWith('BUY')) return _up;
  if (a.startsWith('SELL')) return _loss;
  if (a.startsWith('UP')) return const Color(0xFF10B981);
  if (a.startsWith('DOWN')) return _loss;
  if (a.startsWith('MARKET CLOSED')) return const Color(0xFF94A3B8);
  return _down;
}

/// One market's live reading: coin, price, action, strength bar, RSI and the plain explanation.
Widget _readingTile(_Pal p, Map<String, dynamic> m, {bool compact = false, VoidCallback? onAsk}) {
  final r = _map(m['reading']);
  final sym = (m['asset'] ?? m['symbol'] ?? '').toString();
  final action = (r['action'] ?? 'WAITING FOR DATA').toString();
  final c = _actionColor(action);
  final score = _d(r['score']).clamp(0, 100).toDouble();
  final notes = ((r['notes'] as List?) ?? const []).map((e) => e.toString()).toList();
  final chg = _d(m['changePct']);
  return Container(
    margin: const EdgeInsets.only(bottom: 10),
    padding: const EdgeInsets.all(14),
    decoration: BoxDecoration(
      color: p.card,
      borderRadius: BorderRadius.circular(20),
      border: Border.all(color: action.startsWith('BUY') || action.startsWith('SELL') ? c.withValues(alpha: 0.6) : p.cardEdge,
          width: action.startsWith('BUY') || action.startsWith('SELL') ? 1.6 : 1),
      boxShadow: [BoxShadow(color: p.shadow, blurRadius: 14, offset: const Offset(0, 5))],
    ),
    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        _coin(sym, 28),
        const SizedBox(width: 10),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(sym, style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
            Text((m['name'] ?? '').toString(), style: TextStyle(color: p.muted, fontSize: 11)),
          ]),
        ),
        Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text(_money(_d(m['price']), sign: false), style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
          Text('${chg >= 0 ? '+' : ''}${chg.toStringAsFixed(2)}% · 4h',
              style: TextStyle(color: chg >= 0 ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w700)),
        ]),
      ]),
      const SizedBox(height: 10),
      Row(children: [
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
          decoration: BoxDecoration(color: c.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(999)),
          child: Text(action, style: TextStyle(color: c, fontSize: 10.5, fontWeight: FontWeight.w900, letterSpacing: 0.4)),
        ),
        const Spacer(),
        if (r['rsi'] != null) Text('RSI ${_d(r['rsi']).toStringAsFixed(0)}', style: TextStyle(color: p.muted, fontSize: 11, fontWeight: FontWeight.w700)),
        if (r['mom1h'] != null) ...[
          const SizedBox(width: 10),
          Text('1h ${_d(r['mom1h']) >= 0 ? '+' : ''}${_d(r['mom1h']).toStringAsFixed(2)}%',
              style: TextStyle(color: _d(r['mom1h']) >= 0 ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w700)),
        ],
      ]),
      const SizedBox(height: 10),
      // Strength: 0 = sellers fully in control, 100 = buyers fully in control.
      LayoutBuilder(builder: (context, cons) {
        final w = cons.maxWidth;
        return SizedBox(
          height: 14,
          child: Stack(clipBehavior: Clip.none, children: [
            Positioned(
              left: 0,
              right: 0,
              top: 4,
              child: Container(
                height: 6,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(9),
                  gradient: const LinearGradient(colors: [_loss, Color(0xFFF59E0B), _up]),
                ),
              ),
            ),
            Positioned(
              left: (score / 100 * w - 7).clamp(0.0, w - 14),
              top: 0,
              child: Container(
                width: 14,
                height: 14,
                decoration: BoxDecoration(color: Colors.white, shape: BoxShape.circle, border: Border.all(color: p.ink, width: 2.5)),
              ),
            ),
          ]),
        );
      }),
      const SizedBox(height: 4),
      Row(children: [
        Text('Sellers', style: TextStyle(color: p.muted, fontSize: 10)),
        const Spacer(),
        Text('Strength ${score.toStringAsFixed(0)}/100', style: TextStyle(color: p.ink, fontSize: 10.5, fontWeight: FontWeight.w800)),
        const Spacer(),
        Text('Buyers', style: TextStyle(color: p.muted, fontSize: 10)),
      ]),
      const SizedBox(height: 8),
      for (final n in compact ? notes.take(2) : notes)
        Padding(
          padding: const EdgeInsets.only(bottom: 4),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Padding(padding: const EdgeInsets.only(top: 6), child: Icon(Icons.circle, size: 4.5, color: c)),
            const SizedBox(width: 7),
            Expanded(child: Text(n, style: TextStyle(color: p.ink, fontSize: 12.3, height: 1.35))),
          ]),
        ),
      if (onAsk != null)
        Align(
          alignment: Alignment.centerRight,
          child: TextButton.icon(
            onPressed: onAsk,
            icon: const Icon(Icons.forum_rounded, size: 16),
            label: Text('Ask the tutor about $sym'),
          ),
        ),
    ]),
  );
}

// ───────────────────────────────────────────────────────────── the course

class _Quiz {
  const _Quiz(this.q, this.options, this.answer, this.why);
  final String q;
  final List<String> options;
  final int answer;
  final String why;
}

class _Lesson {
  const _Lesson(this.id, this.title, this.summary, this.minutes, this.icon, this.color, this.live, this.sections, this.quiz);
  final String id;
  final String title;
  final String summary;
  final int minutes;
  final IconData icon;
  final Color color;
  final String live; // which live example to show
  final List<(String, String)> sections; // (heading, text)
  final List<_Quiz> quiz;
}

const _lessons = <_Lesson>[
  _Lesson('basics', 'What trading really is', 'Buyers, sellers and why prices move', 4, Icons.lightbulb_rounded, Color(0xFFF59E0B), 'basics', [
    ('The idea', "Trading means buying something and selling it later. You make money when you sell for more than you paid, and you lose money when you sell for less. That is all a trade is."),
    ('Why prices move', "Every price is set by buyers and sellers. When more people want to buy than sell, the price goes up. When more want to sell, it goes down. A chart is simply a picture of that tug of war over time."),
    ('Nobody knows the future', "No person, app or AI can know for sure where a price goes next. Good traders do not guess. They follow clear rules, keep losses small, and let the winners pay for the losers."),
    ('Why pretend money first', "This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too."),
  ], [
    _Quiz('When do you make money on a trade?', ['When you buy', 'When you sell for more than you paid', 'When the market opens'], 1, 'Profit only exists after you sell higher than you bought.'),
    _Quiz('What makes a price go up?', ['More buyers than sellers', 'The app', 'The time of day'], 0, 'More people wanting to buy pushes the price up.'),
  ]),
  _Lesson('candles', 'Reading candles', 'Open, close, high and low in one shape', 5, Icons.candlestick_chart_rounded, Color(0xFF1FBF97), 'candles', [
    ('One candle = one time slice', "On this chart every candle is 5 minutes. It shows four prices: where it started (open), where it ended (close), the highest point (high) and the lowest point (low)."),
    ('The colours', "Green candle: the price closed HIGHER than it opened, buyers won those 5 minutes. Yellow candle: it closed LOWER, sellers won. Many apps use red instead of yellow, it means the same thing."),
    ('Body and wicks', "The thick part (the body) runs from open to close. The thin lines (the wicks) show how far the price went up or down before coming back. A long wick on top means buyers pushed up but sellers pushed it back down."),
    ('Reading a row of candles', "Several green candles in a row, each closing higher, show buyers in control. Many yellow ones closing lower show sellers in control. Candles that go up and down with no direction mean the market is undecided."),
  ], [
    _Quiz('A green candle means...', ['It closed higher than it opened', 'It is a good time to buy', 'The market is closed'], 0, 'Colour only tells you if it closed above or below where it opened.'),
    _Quiz('On this chart one candle covers...', ['1 day', '5 minutes', '1 hour'], 1, 'The agent works with 5-minute candles.'),
  ]),
  _Lesson('trend', 'Trends: up, down, sideways', 'Bullish, bearish and how to tell', 5, Icons.trending_up_rounded, Color(0xFF6366F1), 'trend', [
    ('Bullish', "An uptrend. The price makes higher highs and higher lows, like climbing stairs. Buyers are in control. Traders call this bullish (a bull attacks upward with its horns)."),
    ('Bearish', "A downtrend. Lower highs and lower lows, like walking down stairs. Sellers are in control. This is bearish (a bear swipes downward)."),
    ('Sideways', "The price bounces between a ceiling and a floor with no clear direction. Most trading signals fail here, so the best move is often to wait."),
    ('The golden rule', "Trade WITH the trend, not against it. Buying in a downtrend because it looks cheap is how most beginners lose. The agent only buys when the trend turns up."),
  ], [
    _Quiz('Higher highs and higher lows means...', ['Bearish', 'Bullish', 'Sideways'], 1, 'Climbing stairs = uptrend = bullish.'),
    _Quiz('In a sideways market, signals...', ['Work best', 'Often fail', 'Are always right'], 1, 'With no direction, signals flip back and forth.'),
  ]),
  _Lesson('ma', 'Moving averages', 'The pink fast line and the purple slow line', 6, Icons.show_chart_rounded, Color(0xFFEC4899), 'ma', [
    ('What an average line is', "A moving average is the average closing price of the last few candles, drawn as a smooth line. It hides the small wiggles so you can see the real direction."),
    ('Fast line (pink)', "The average of the last 9 candles, about 45 minutes. It reacts quickly to new moves."),
    ('Slow line (purple)', "The average of the last 21 candles, about 1 hour 45 minutes. It moves slowly and shows the bigger direction."),
    ('How to read them', "Fast line ABOVE slow line: recent prices are higher than older ones, the trend is up. Fast line BELOW: the trend is down. When the price itself is above both lines, buyers are strong."),
  ], [
    _Quiz('The pink fast line averages about...', ['45 minutes', '1 day', '1 week'], 0, '9 candles x 5 minutes = 45 minutes.'),
    _Quiz('Fast line above slow line means...', ['Trend is up', 'Trend is down', 'Market closed'], 0, 'Recent prices are higher than older prices.'),
  ]),
  _Lesson('cross', 'The crossover signal', 'Exactly when the agent buys and sells', 6, Icons.call_split_rounded, Color(0xFF8B5CF6), 'cross', [
    ('Buy signal', "When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys \$50 at that point."),
    ('Sell signal', "When the fast line crosses back DOWN through the slow line, the up move is over. That is the sell signal, and the agent closes the trade."),
    ('Why it must be fresh', "If the cross happened an hour ago, the easy part of the move may be gone. Buying late means buying high. So the agent only acts on a cross that happened since its last check, never on an old one."),
    ('The weakness', "In sideways markets the lines cross back and forth and give false signals. That is why every trade also has a stop loss: when a signal is wrong, the loss stays small."),
  ], [
    _Quiz('The buy signal is when the fast line...', ['Crosses above the slow line', 'Crosses below the slow line', 'Is flat'], 0, 'Crossing up = trend turning up.'),
    _Quiz('Why does the agent skip old crosses?', ['To avoid buying late', 'The app is slow', 'Old crosses are illegal'], 0, 'A late entry means buying after most of the move.'),
  ]),
  _Lesson('rsi', 'RSI: momentum', 'Is the move strong, stretched or tired?', 5, Icons.speed_rounded, Color(0xFF0EA5E9), 'rsi', [
    ('What RSI measures', "RSI (Relative Strength Index) compares the size of recent rises with recent falls and gives a number from 0 to 100. Above 50, rises have been bigger. Below 50, falls have been bigger."),
    ('Above 70: stretched', "The price rose very fast. It is called overbought. It often pauses or pulls back, so buying right then is risky. It can still keep rising in a strong trend."),
    ('Below 30: oversold', "The price fell very fast. It often bounces, but in a strong downtrend it can stay low. Oversold is not a reason to buy on its own."),
    ('How to use it', "Use RSI as a second opinion. A buy signal with RSI between 50 and 70 is healthy. A buy signal with RSI above 75 means the move may already be tired."),
  ], [
    _Quiz('RSI above 70 is called...', ['Oversold', 'Overbought', 'Neutral'], 1, 'It rose fast and is stretched.'),
    _Quiz('RSI below 30 always means buy.', ['True', 'False'], 1, 'Falling markets can stay oversold. It is a hint, not a signal.'),
  ]),
  _Lesson('risk', 'Risk: stop loss and take profit', 'Why small losses beat big wins', 7, Icons.shield_rounded, Color(0xFFF0566A), 'risk', [
    ('Decide the exit before you enter', "Every agent trade has two exits set before it starts. Take profit at +3% (about +\$1.50 on \$50) and stop loss at -1.5% (about -\$0.75)."),
    ('Win twice what you risk', "The win (+\$1.50) is twice the loss (-\$0.75). Because of that, you only need to be right about 1 trade in 3 to break even. Being right half the time would be clearly profitable."),
    ('Size matters most', "The agent uses \$50 per trade even though the paper account has \$100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade."),
    ('Never move the stop', "The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts."),
  ], [
    _Quiz('With +\$1.50 wins and -\$0.75 losses, to break even you must win about...', ['1 in 3 trades', '9 in 10 trades', 'Every trade'], 0, 'One win (+1.50) pays for two losses (-1.50).'),
    _Quiz('A trade is losing. The best move is...', ['Move the stop lower', 'Let the stop loss work', 'Buy more'], 1, 'The stop exists to keep losses small.'),
  ]),
  _Lesson('brakes', 'Daily stop and total brake', 'Protecting your account from bad days', 4, Icons.front_hand_rounded, Color(0xFFF2C14E), 'brakes', [
    ('Bad days happen', "Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones."),
    ('Daily stop: \$10', "If the day loses \$10, the agent makes no more buys until tomorrow. It walks away and lets the market calm down."),
    ('Total brake: \$25', "If total losses reach \$25, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning."),
    ('Your own rules', "When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts."),
  ], [
    _Quiz('After losing \$10 in a day, the agent...', ['Doubles the next trade', 'Stops buying for the day', 'Sells everything forever'], 1, 'The daily stop prevents revenge trading.'),
  ]),
  _Lesson('hours', 'Stocks vs crypto', 'Market hours, weekends and jumpiness', 5, Icons.schedule_rounded, Color(0xFF627EEA), 'hours', [
    ('Stocks and funds', "SPY, QQQ, Apple, Microsoft, Nvidia, Tesla and Amazon trade on US market days from 9:30 AM to 4:00 PM Eastern Time. Closed at night, on weekends and on holidays."),
    ('Overnight gaps', "News can come out while the stock market is closed, so the next morning it can open far higher or lower. That is why the agent sells stocks by 3:55 PM and never holds them overnight."),
    ('Crypto', "Bitcoin, Ethereum and Solana trade all day, every day, including weekends. More hours means more chances, but crypto also moves faster and harder, so stops get hit more often."),
    ('Funds vs single companies', "SPY holds the 500 biggest US companies and QQQ holds 100 big tech companies, so they move more calmly. One company like Tesla can jump a lot on its own news."),
  ], [
    _Quiz('When can Bitcoin be traded?', ['Only weekdays', 'All day, every day', 'Only at night'], 1, 'Crypto never closes.'),
    _Quiz('Why sell stocks before the close?', ['To avoid overnight gaps', 'Stocks expire', 'It is the law'], 0, 'Overnight news can make the price jump at the open.'),
  ]),
  _Lesson('practice', 'Practising like a pro', 'Journals, patience and judging results', 5, Icons.emoji_events_rounded, Color(0xFF22C55E), 'practice', [
    ('Judge many trades, not one', "One trade tells you nothing. Luck decides single trades. After 20 to 50 trades you start to see if a method really works. That is why the plan is 2 to 4 weeks of paper trading."),
    ('Keep a journal', "For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Pretend trades list on the main screen is the agent's journal."),
    ('Follow the rules exactly', "The point of the agent is to follow rules perfectly, with no fear and no greed. Check that it did. If it ever breaks a rule, that is a bug to fix before real money."),
    ('Before real money', "Real money comes only after a long paper test with a positive result, a full review, and money you can truly afford to lose. Never borrow to trade."),
  ], [
    _Quiz('How many trades before judging a method?', ['1', '3', '20 or more'], 2, 'Small samples are mostly luck.'),
    _Quiz('Money for trading should be...', ['Borrowed', 'Money you can afford to lose', 'Rent money'], 1, 'Never trade money you need.'),
  ]),
];

// ───────────────────────────────────────────────────────────── Learn screen

class NgmySignalGridLearnScreen extends StatefulWidget {
  const NgmySignalGridLearnScreen({super.key, this.initialStatus, this.preview = false, this.startTab = 0});
  final Map<String, dynamic>? initialStatus;
  final bool preview; // design preview: no network
  final int startTab;

  @override
  State<NgmySignalGridLearnScreen> createState() => _NgmySignalGridLearnScreenState();
}

class _ChatMsg {
  _ChatMsg(this.fromMe, this.text);
  final bool fromMe;
  final String text;
}

class _NgmySignalGridLearnScreenState extends State<NgmySignalGridLearnScreen> with SingleTickerProviderStateMixin {
  late final TabController _tabs = TabController(length: 3, vsync: this, initialIndex: widget.startTab);
  Map<String, dynamic>? _status;
  DateTime? _fetchedAt;
  Timer? _timer;
  Set<String> _done = {};
  final _chat = <_ChatMsg>[];
  final _input = TextEditingController();
  final _chatScroll = ScrollController();
  bool _thinking = false;

  static const _prefsKey = 'ngmy_signal_grid_lessons_done';

  @override
  void initState() {
    super.initState();
    _status = widget.initialStatus;
    _fetchedAt = DateTime.now();
    _tabs.addListener(() => setState(() {}));
    if (!widget.preview) {
      unawaited(_loadDone());
      unawaited(_refresh());
      _timer = Timer.periodic(const Duration(seconds: 60), (_) => unawaited(_refresh()));
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    _tabs.dispose();
    _input.dispose();
    _chatScroll.dispose();
    super.dispose();
  }

  Future<void> _loadDone() async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final list = prefs.getStringList(_prefsKey) ?? const [];
      if (mounted) setState(() => _done = list.toSet());
    } catch (_) {}
  }

  Future<void> _markDone(String id) async {
    setState(() => _done = {..._done, id});
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setStringList(_prefsKey, _done.toList());
    } catch (_) {}
  }

  Future<void> _refresh() async {
    final res = await ngmyEdgeInvoke({'action': 'paStatus', 'live': true}, timeout: const Duration(seconds: 40));
    if (!mounted || res == null || res['ok'] != true) return;
    setState(() {
      _status = res;
      _fetchedAt = DateTime.now();
    });
  }

  Map<String, dynamic> get _snap => _map(_map(_status?['state'])['snapshot']);
  List<Map<String, dynamic>> get _mkts => _markets(_snap);

  /// The market to use in live examples: a fresh signal first, then the strongest open market.
  Map<String, dynamic>? get _star {
    final open = _mkts.where((m) => m['open'] == true && _points(m).length > 5).toList();
    if (open.isEmpty) return _mkts.isEmpty ? null : _mkts.first;
    open.sort((a, b) => _NgmySignalGridAgentScreenState._signalRank(a).compareTo(_NgmySignalGridAgentScreenState._signalRank(b)));
    return open.first;
  }

  // ── Ask the tutor

  String _liveBrief() {
    final st = _map(_status?['state']);
    final sh = st['shadow'] is Map ? _map(st['shadow']) : null;
    final today = _map(_status?['today']);
    final rec = _map(_status?['record']);
    final b = StringBuffer();
    b.writeln('LIVE DATA from the NGMY paper trading agent (Eastern Time now: ${_status?['nowEt'] ?? 'unknown'}):');
    b.writeln('Agent: ${st['enabled'] == true ? 'running' : 'stopped'}${st['brakePaused'] == true ? ', paused by the 25 dollar brake' : ''}. '
        'Pretend P/L all time ${_money(_d(st['totalPnl']))}, today ${_money(_d(today['day_pnl']))}, wins ${rec['wins'] ?? 0}, losses ${rec['losses'] ?? 0}.');
    if (sh != null) {
      final held = _mkts.firstWhere((m) => m['asset'] == sh['symbol'], orElse: () => <String, dynamic>{});
      final now = _d(held['price']);
      final entry = _d(sh['entryPrice']);
      b.writeln('Open pretend trade: ${sh['symbol']}, \$50 bought at ${entry.toStringAsFixed(2)}, now ${now.toStringAsFixed(2)} '
          '(${entry == 0 ? 0 : ((now - entry) / entry * 100).toStringAsFixed(2)}%). Take profit at ${(entry * 1.03).toStringAsFixed(2)}, stop loss at ${(entry * 0.985).toStringAsFixed(2)}.');
    } else {
      b.writeln('No open pretend trade.');
    }
    b.writeln('Markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):');
    for (final m in _mkts) {
      final r = _map(m['reading']);
      b.writeln('- ${m['asset']} (${m['name']}): price ${_d(m['price']).toStringAsFixed(2)}, 4h change ${_d(m['changePct']).toStringAsFixed(2)}%, '
          '${m['open'] == true ? 'open' : 'closed'}, ${r['bias'] ?? 'unknown'}, strength ${_d(r['score']).toStringAsFixed(0)}, '
          'RSI ${r['rsi'] == null ? 'n/a' : _d(r['rsi']).toStringAsFixed(0)}, last hour ${r['mom1h'] == null ? 'n/a' : '${_d(r['mom1h']).toStringAsFixed(2)}%'}, '
          'agent reading: ${r['action'] ?? 'n/a'}.');
    }
    return b.toString();
  }

  Future<void> _ask(String q) async {
    final question = q.trim();
    if (question.isEmpty || _thinking) return;
    _input.clear();
    setState(() {
      _chat.add(_ChatMsg(true, question));
      _thinking = true;
    });
    _scrollChat();
    final history = _chat.length > 1
        ? _chat.sublist(math.max(0, _chat.length - 9), _chat.length - 1).map((m) => '${m.fromMe ? 'Student' : 'Tutor'}: ${m.text}').join('\n')
        : '';
    final rules = ((_status?['rules'] as List?) ?? const []).map((e) => '- $e').join('\n');
    final prompt = '''
You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.
How to answer:
- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.
- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent's rules say.
- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent's rules.
- This is practice with pretend (paper) money. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.
- No markdown headings or tables. You may use short lines starting with "- ".

AGENT RULES:
$rules

${_liveBrief()}
${history.isEmpty ? '' : '\nCONVERSATION SO FAR:\n$history\n'}
Student: $question
Tutor:''';
    String answer;
    if (widget.preview) {
      answer = 'Preview mode: the tutor answers here using the live readings.';
    } else {
      final res = await ngmyEdgeInvoke({'action': 'chat', 'prompt': prompt}, timeout: const Duration(seconds: 60));
      final text = res?['text']?.toString().trim() ?? '';
      answer = text.isNotEmpty ? text.replaceAll('**', '').replaceAll(RegExp(r'^#+\s*', multiLine: true), '') : (res?['error'] ?? 'The tutor could not answer just now. Please try again.').toString();
    }
    if (!mounted) return;
    setState(() {
      _chat.add(_ChatMsg(false, answer));
      _thinking = false;
    });
    _scrollChat();
  }

  void _scrollChat() {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_chatScroll.hasClients) {
        _chatScroll.animateTo(_chatScroll.position.maxScrollExtent + 200, duration: const Duration(milliseconds: 300), curve: Curves.easeOut);
      }
    });
  }

  void _askAbout(String q) {
    _tabs.animateTo(2);
    unawaited(_ask(q));
  }

  // ── layout

  @override
  Widget build(BuildContext context) {
    final p = _Pal(Theme.of(context).brightness == Brightness.light);
    return Scaffold(
      backgroundColor: p.bgTop,
      body: Container(
        decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.bgTop, p.bgBottom])),
        child: SafeArea(
          child: Column(children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 8, 12, 6),
              child: Row(children: [
                _round(p, Icons.arrow_back_ios_new_rounded, () => Navigator.maybePop(context)),
                const SizedBox(width: 10),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text('Trading Academy', style: TextStyle(color: p.ink, fontSize: 17, fontWeight: FontWeight.w800)),
                    Text('Lessons, live signals and a tutor', style: TextStyle(color: p.muted, fontSize: 11.5)),
                  ]),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  decoration: BoxDecoration(color: _up.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
                  child: const Row(mainAxisSize: MainAxisSize.min, children: [
                    Icon(Icons.circle, size: 8, color: _up),
                    SizedBox(width: 6),
                    Text('LIVE', style: TextStyle(color: _up, fontSize: 11.5, fontWeight: FontWeight.w900)),
                  ]),
                ),
              ]),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 4, 16, 8),
              child: Container(
                padding: const EdgeInsets.all(4),
                decoration: BoxDecoration(color: p.chip, borderRadius: BorderRadius.circular(999)),
                child: Row(children: [
                  for (final (i, t, ic) in [(0, 'Lessons', Icons.menu_book_rounded), (1, 'Live signals', Icons.sensors_rounded), (2, 'Ask tutor', Icons.forum_rounded)])
                    Expanded(
                      child: GestureDetector(
                        onTap: () => _tabs.animateTo(i),
                        child: AnimatedContainer(
                          duration: const Duration(milliseconds: 200),
                          padding: const EdgeInsets.symmetric(vertical: 9),
                          decoration: BoxDecoration(color: _tabs.index == i ? p.dark : Colors.transparent, borderRadius: BorderRadius.circular(999)),
                          child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                            Icon(ic, size: 15, color: _tabs.index == i ? p.onDark : p.muted),
                            const SizedBox(width: 5),
                            Flexible(
                              child: Text(t, overflow: TextOverflow.ellipsis,
                                  style: TextStyle(color: _tabs.index == i ? p.onDark : p.muted, fontWeight: FontWeight.w800, fontSize: 12.5)),
                            ),
                          ]),
                        ),
                      ),
                    ),
                ]),
              ),
            ),
            Expanded(
              child: TabBarView(controller: _tabs, children: [_lessonsTab(p), _signalsTab(p), _askTab(p)]),
            ),
          ]),
        ),
      ),
    );
  }

  Widget _round(_Pal p, IconData icon, VoidCallback onTap) => Material(
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

  // ── Lessons tab

  Widget _lessonsTab(_Pal p) {
    final done = _lessons.where((l) => _done.contains(l.id)).length;
    return ListView(padding: const EdgeInsets.fromLTRB(16, 6, 16, 40), children: [
      Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(24),
          gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF1E1B4B), Color(0xFF6D28D9), Color(0xFFEC4899)]),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('Learn to trade', style: TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900)),
          const SizedBox(height: 4),
          const Text('10 short lessons. Each one shows you the idea live on the real markets the agent is watching.',
              style: TextStyle(color: Colors.white70, fontSize: 12.5, height: 1.35)),
          const SizedBox(height: 14),
          ClipRRect(
            borderRadius: BorderRadius.circular(9),
            child: LinearProgressIndicator(
              value: done / _lessons.length,
              minHeight: 8,
              backgroundColor: Colors.white.withValues(alpha: 0.18),
              valueColor: const AlwaysStoppedAnimation(Colors.white),
            ),
          ),
          const SizedBox(height: 6),
          Text('$done of ${_lessons.length} lessons done', style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700)),
        ]),
      ),
      const SizedBox(height: 14),
      for (var i = 0; i < _lessons.length; i++) _lessonRow(p, i),
      const SizedBox(height: 6),
      Text('Practice with pretend money. Signals and lessons are for learning; markets can always surprise.',
          textAlign: TextAlign.center, style: TextStyle(color: p.muted, fontSize: 11)),
    ]);
  }

  Widget _lessonRow(_Pal p, int i) {
    final l = _lessons[i];
    final done = _done.contains(l.id);
    return GestureDetector(
      onTap: () => _openLesson(l),
      child: Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: p.card,
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: p.cardEdge),
          boxShadow: [BoxShadow(color: p.shadow, blurRadius: 14, offset: const Offset(0, 5))],
        ),
        child: Row(children: [
          Container(
            width: 46,
            height: 46,
            decoration: BoxDecoration(color: l.color, borderRadius: BorderRadius.circular(15)),
            child: Icon(l.icon, color: Colors.white),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Lesson ${i + 1} · ${l.minutes} min', style: TextStyle(color: p.muted, fontSize: 11)),
              Text(l.title, style: TextStyle(color: p.ink, fontSize: 15, fontWeight: FontWeight.w800)),
              Text(l.summary, style: TextStyle(color: p.muted, fontSize: 12)),
            ]),
          ),
          Icon(done ? Icons.check_circle_rounded : Icons.chevron_right_rounded, color: done ? _up : p.muted),
        ]),
      ),
    );
  }

  void _openLesson(_Lesson l) {
    Navigator.of(context).push(MaterialPageRoute<void>(
      builder: (_) => _LessonPage(
        lesson: l,
        number: _lessons.indexOf(l) + 1,
        live: () => _liveExample(_Pal(Theme.of(context).brightness == Brightness.light), l.live),
        onDone: () => _markDone(l.id),
        onAsk: (q) {
          Navigator.of(context).pop();
          _askAbout(q);
        },
      ),
    ));
  }

  /// A live example for a lesson, built from the markets right now.
  Widget _liveExample(_Pal p, String kind) {
    final m = _star;
    if (m == null) return Text('Live example appears once the markets have loaded.', style: TextStyle(color: p.muted));
    final sym = m['asset'].toString();
    final pts = _points(m);
    final r = _map(m['reading']);
    final price = _d(m['price']);
    Widget chart({bool lines = true, int last = 36}) => _CandleChart(
          points: pts.sublist(math.max(0, pts.length - last)),
          pal: p,
          entry: null,
          lines: lines,
          price: price,
        );
    Text say(String t) => Text(t, style: TextStyle(color: p.ink, fontSize: 13, height: 1.4));
    switch (kind) {
      case 'basics':
        final first = pts.isNotEmpty ? _d(pts.first['c']) : price;
        final worth = first == 0 ? 50 : 50 * price / first;
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          say('Right now $sym is ${_money(price, sign: false)}. About 4 hours ago it was ${_money(first, sign: false)}.'),
          const SizedBox(height: 8),
          say('If you had put \$50 into $sym then, it would be worth ${_money(worth.toDouble(), sign: false)} now: '
              '${worth >= 50 ? 'a win of' : 'a loss of'} ${_money((worth - 50).abs().toDouble(), sign: false)}. That difference is your profit or loss.'),
        ]);
      case 'candles':
        final q = pts.isNotEmpty ? pts.last : <String, dynamic>{};
        final rising = _d(q['c']) >= _d(q['o']);
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          chart(lines: false, last: 24),
          const SizedBox(height: 8),
          say('The last finished $sym candle opened at ${_money(_d(q['o']), sign: false)} and closed at ${_money(_d(q['c']), sign: false)}, '
              'so it is ${rising ? 'GREEN: buyers won those 5 minutes' : 'YELLOW: sellers won those 5 minutes'}. '
              'Its high was ${_money(_d(q['h']), sign: false)} and its low ${_money(_d(q['l']), sign: false)}.'),
        ]);
      case 'trend':
        final counts = <String, int>{};
        for (final x in _mkts) {
          final b = (_map(x['reading'])['bias'] ?? 'unknown').toString();
          counts[b] = (counts[b] ?? 0) + 1;
        }
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          chart(),
          const SizedBox(height: 8),
          say('$sym is ${(r['bias'] ?? 'unknown').toString().toUpperCase()} right now. '
              'Across all 10 markets: ${counts['bullish'] ?? 0} bullish, ${counts['bearish'] ?? 0} bearish, ${counts['sideways'] ?? 0} sideways.'),
        ]);
      case 'ma':
        final f = _d(m['fast']), s = _d(m['slow']);
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          chart(),
          const SizedBox(height: 8),
          say('On $sym the pink fast line is at ${_money(f, sign: false)} and the purple slow line at ${_money(s, sign: false)}. '
              'The fast line is ${f >= s ? 'ABOVE' : 'BELOW'} the slow line, so the short-term trend is ${f >= s ? 'UP' : 'DOWN'}.'),
        ]);
      case 'cross':
        final buys = _mkts.where((x) => _map(x['reading'])['action'] == 'BUY SIGNAL').map((x) => x['asset']).toList();
        final sells = _mkts.where((x) => _map(x['reading'])['action'] == 'SELL SIGNAL').map((x) => x['asset']).toList();
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          chart(),
          const SizedBox(height: 8),
          say(buys.isNotEmpty
              ? 'Fresh BUY crosses right now: ${buys.join(', ')}. On its next automatic check the agent would buy the strongest of these if it holds nothing.'
              : 'No fresh buy cross in any open market right now. ${sells.isNotEmpty ? 'Fresh sell crosses: ${sells.join(', ')}. ' : ''}The agent simply waits; no signal means no trade.'),
        ]);
      case 'rsi':
        final open = _mkts.where((x) => x['open'] == true && _map(x['reading'])['rsi'] != null).toList();
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          for (final x in open)
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: Row(children: [
                SizedBox(width: 70, child: Text(x['asset'].toString(), style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 12))),
                Expanded(
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(9),
                    child: LinearProgressIndicator(
                      value: _d(_map(x['reading'])['rsi']) / 100,
                      minHeight: 8,
                      backgroundColor: p.chip,
                      valueColor: AlwaysStoppedAnimation(_d(_map(x['reading'])['rsi']) >= 70
                          ? _loss
                          : _d(_map(x['reading'])['rsi']) <= 30
                              ? const Color(0xFF0EA5E9)
                              : _up),
                    ),
                  ),
                ),
                const SizedBox(width: 8),
                SizedBox(width: 26, child: Text(_d(_map(x['reading'])['rsi']).toStringAsFixed(0), style: TextStyle(color: p.ink, fontSize: 12, fontWeight: FontWeight.w800))),
              ]),
            ),
          say('Red bars are above 70 (stretched), blue below 30 (oversold), green in between (healthy).'),
        ]);
      case 'risk':
        final shares = price == 0 ? 0 : 50 / price;
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          say('If the agent bought $sym right now at ${_money(price, sign: false)}:'),
          const SizedBox(height: 6),
          say('- \$50 buys ${shares.toStringAsFixed(shares < 0.01 ? 6 : 4)} $sym'),
          say('- Take profit at ${_money(price * 1.03, sign: false)}: you get back about \$51.50 (+\$1.50)'),
          say('- Stop loss at ${_money(price * 0.985, sign: false)}: you get back about \$49.25 (-\$0.75)'),
          const SizedBox(height: 6),
          say('Win 1 and lose 2 of 3 trades: +1.50 - 0.75 - 0.75 = \$0.00. That is break even.'),
        ]);
      case 'brakes':
        final st = _map(_status?['state']);
        final today = _map(_status?['today']);
        return say('Today the agent is at ${_money(_d(today['day_pnl']))} (the daily stop is -\$10) and ${_money(_d(st['totalPnl']))} all time (the brake is -\$25). '
            '${st['brakePaused'] == true ? 'The brake is ON right now.' : 'Both brakes are off, it can keep trading.'}');
      case 'hours':
        final stockOpen = _map(_status?['market'])['stockOpen'];
        return say('Right now the US stock market is ${stockOpen == true ? 'OPEN, so all 10 markets can be traded' : 'CLOSED, so only Bitcoin, Ethereum and Solana can be traded'}. '
            'Crypto is open now and always.');
      case 'practice':
        final rec = _map(_status?['record']);
        return say('The agent journal so far: ${rec['trades'] ?? 0} finished pretend trades, ${rec['wins'] ?? 0} wins and ${rec['losses'] ?? 0} losses. '
            'Keep watching until there are at least 20 before judging it.');
    }
    return const SizedBox.shrink();
  }

  // ── Live signals tab

  Widget _signalsTab(_Pal p) {
    final ms = [..._mkts]..sort((a, b) => _NgmySignalGridAgentScreenState._signalRank(a).compareTo(_NgmySignalGridAgentScreenState._signalRank(b)));
    final bull = ms.where((m) => _map(m['reading'])['bias'] == 'bullish').length;
    final bear = ms.where((m) => _map(m['reading'])['bias'] == 'bearish').length;
    final side = ms.length - bull - bear;
    final ago = _fetchedAt == null ? '' : DateTime.now().difference(_fetchedAt!).inSeconds < 60 ? 'just now' : '${DateTime.now().difference(_fetchedAt!).inMinutes} min ago';
    return RefreshIndicator(
      onRefresh: _refresh,
      child: ListView(padding: const EdgeInsets.fromLTRB(16, 6, 16, 40), children: [
        Row(children: [
          Expanded(child: _countBox(p, 'Bullish', bull, _up, Icons.trending_up_rounded)),
          const SizedBox(width: 8),
          Expanded(child: _countBox(p, 'Bearish', bear, _loss, Icons.trending_down_rounded)),
          const SizedBox(width: 8),
          Expanded(child: _countBox(p, 'Sideways', side, _down, Icons.trending_flat_rounded)),
        ]),
        const SizedBox(height: 8),
        Text('Updated $ago · refreshes every minute · same rules the agent trades by',
            textAlign: TextAlign.center, style: TextStyle(color: p.muted, fontSize: 11)),
        const SizedBox(height: 12),
        if (ms.isEmpty) Text('Loading the markets...', style: TextStyle(color: p.muted)),
        for (final m in ms) _readingTile(p, m, onAsk: () => _askAbout('What is happening with ${m['asset']} right now, and what would make the agent buy or sell it?')),
        Text('Signals show what the agent rules see. They can fail; the stop loss keeps each loss small.',
            textAlign: TextAlign.center, style: TextStyle(color: p.muted, fontSize: 11)),
      ]),
    );
  }

  Widget _countBox(_Pal p, String label, int n, Color c, IconData icon) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(18),
          gradient: LinearGradient(colors: [c.withValues(alpha: 0.20), c.withValues(alpha: 0.05)]),
          border: Border.all(color: c.withValues(alpha: 0.35)),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Icon(icon, color: c, size: 20),
          const SizedBox(height: 4),
          Text('$n', style: TextStyle(color: p.ink, fontSize: 22, fontWeight: FontWeight.w900)),
          Text(label, style: TextStyle(color: p.muted, fontSize: 11.5, fontWeight: FontWeight.w700)),
        ]),
      );

  // ── Ask tab

  Widget _askTab(_Pal p) {
    const chips = [
      'Which market looks strongest right now?',
      'Is Bitcoin going up or down right now?',
      'Why has the agent not bought yet?',
      'Explain RSI like I am new',
      'How do I know when to sell?',
      'What does bullish and bearish mean?',
    ];
    return Column(children: [
      Expanded(
        child: ListView(controller: _chatScroll, padding: const EdgeInsets.fromLTRB(16, 6, 16, 16), children: [
          if (_chat.isEmpty) ...[
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: p.card,
                borderRadius: BorderRadius.circular(22),
                border: Border.all(color: p.cardEdge),
              ),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  Container(
                    width: 40,
                    height: 40,
                    decoration: const BoxDecoration(gradient: LinearGradient(colors: [_slowC, _fastC]), shape: BoxShape.circle),
                    child: const Icon(Icons.school_rounded, color: Colors.white, size: 20),
                  ),
                  const SizedBox(width: 10),
                  Expanded(child: Text('Your trading tutor', style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800))),
                ]),
                const SizedBox(height: 8),
                Text('Ask anything about trading. The tutor sees the same live prices and readings as the agent, '
                    'so it can explain what each market is doing right now.',
                    style: TextStyle(color: p.muted, fontSize: 12.5, height: 1.35)),
              ]),
            ),
            const SizedBox(height: 12),
            Wrap(spacing: 8, runSpacing: 8, children: [
              for (final c in chips)
                ActionChip(
                  label: Text(c, style: TextStyle(color: p.ink, fontSize: 12)),
                  backgroundColor: p.card,
                  side: BorderSide(color: p.line),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
                  onPressed: () => _ask(c),
                ),
            ]),
          ],
          for (final m in _chat) _bubble(p, m),
          if (_thinking)
            Align(
              alignment: Alignment.centerLeft,
              child: Container(
                margin: const EdgeInsets.only(top: 6),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                decoration: BoxDecoration(color: p.card, borderRadius: BorderRadius.circular(18)),
                child: Row(mainAxisSize: MainAxisSize.min, children: [
                  const SizedBox(width: 14, height: 14, child: CircularProgressIndicator(strokeWidth: 2)),
                  const SizedBox(width: 8),
                  Text('Reading the markets...', style: TextStyle(color: p.muted, fontSize: 12.5)),
                ]),
              ),
            ),
        ]),
      ),
      Container(
        padding: const EdgeInsets.fromLTRB(12, 8, 12, 12),
        child: Row(children: [
          Expanded(
            child: TextField(
              controller: _input,
              minLines: 1,
              maxLines: 4,
              textInputAction: TextInputAction.send,
              onSubmitted: _ask,
              style: TextStyle(color: p.ink),
              decoration: InputDecoration(
                hintText: 'Ask about trading or a market...',
                hintStyle: TextStyle(color: p.muted),
                filled: true,
                fillColor: p.card,
                contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                border: OutlineInputBorder(borderRadius: BorderRadius.circular(999), borderSide: BorderSide(color: p.line)),
                enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(999), borderSide: BorderSide(color: p.line)),
              ),
            ),
          ),
          const SizedBox(width: 8),
          Material(
            color: p.dark,
            shape: const CircleBorder(),
            child: InkWell(
              customBorder: const CircleBorder(),
              onTap: _thinking ? null : () => _ask(_input.text),
              child: SizedBox(width: 48, height: 48, child: Icon(Icons.arrow_upward_rounded, color: p.onDark)),
            ),
          ),
        ]),
      ),
    ]);
  }

  Widget _bubble(_Pal p, _ChatMsg m) => Align(
        alignment: m.fromMe ? Alignment.centerRight : Alignment.centerLeft,
        child: Container(
          margin: const EdgeInsets.only(top: 8),
          constraints: const BoxConstraints(maxWidth: 330),
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
          decoration: BoxDecoration(
            color: m.fromMe ? p.dark : p.card,
            gradient: m.fromMe ? null : null,
            borderRadius: BorderRadius.only(
              topLeft: const Radius.circular(18),
              topRight: const Radius.circular(18),
              bottomLeft: Radius.circular(m.fromMe ? 18 : 4),
              bottomRight: Radius.circular(m.fromMe ? 4 : 18),
            ),
            border: m.fromMe ? null : Border.all(color: p.cardEdge),
          ),
          child: SelectableText(m.text, style: TextStyle(color: m.fromMe ? p.onDark : p.ink, fontSize: 13.5, height: 1.4)),
        ),
      );
}

// ───────────────────────────────────────────────────────────── one lesson

class _LessonPage extends StatefulWidget {
  const _LessonPage({required this.lesson, required this.number, required this.live, required this.onDone, required this.onAsk});
  final _Lesson lesson;
  final int number;
  final Widget Function() live;
  final VoidCallback onDone;
  final void Function(String question) onAsk;

  @override
  State<_LessonPage> createState() => _LessonPageState();
}

class _LessonPageState extends State<_LessonPage> {
  final _picked = <int, int>{};

  @override
  Widget build(BuildContext context) {
    final p = _Pal(Theme.of(context).brightness == Brightness.light);
    final l = widget.lesson;
    final allRight = l.quiz.asMap().entries.every((e) => _picked[e.key] == e.value.answer);
    return Scaffold(
      backgroundColor: p.bgTop,
      body: Container(
        decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [p.bgTop, p.bgBottom])),
        child: SafeArea(
          child: ListView(padding: const EdgeInsets.fromLTRB(16, 8, 16, 40), children: [
            Row(children: [
              IconButton(onPressed: () => Navigator.maybePop(context), icon: Icon(Icons.arrow_back_ios_new_rounded, color: p.ink, size: 18)),
              const Spacer(),
              Text('Lesson ${widget.number} of ${_lessons.length}', style: TextStyle(color: p.muted, fontSize: 12, fontWeight: FontWeight.w700)),
            ]),
            Container(
              padding: const EdgeInsets.all(18),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                gradient: LinearGradient(colors: [l.color, Color.lerp(l.color, Colors.black, 0.35)!]),
              ),
              child: Row(children: [
                Container(
                  width: 52,
                  height: 52,
                  decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.2), borderRadius: BorderRadius.circular(16)),
                  child: Icon(l.icon, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(l.title, style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900)),
                    Text('${l.summary} · ${l.minutes} min', style: const TextStyle(color: Colors.white70, fontSize: 12)),
                  ]),
                ),
              ]),
            ),
            const SizedBox(height: 14),
            for (final (h, t) in l.sections) ...[
              Text(h, style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
              const SizedBox(height: 4),
              Text(t, style: TextStyle(color: p.ink, fontSize: 14, height: 1.5)),
              const SizedBox(height: 14),
            ],
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: p.card,
                borderRadius: BorderRadius.circular(22),
                border: Border.all(color: _up.withValues(alpha: 0.45), width: 1.5),
              ),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  const Icon(Icons.sensors_rounded, color: _up, size: 18),
                  const SizedBox(width: 6),
                  Text('See it live right now', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
                ]),
                const SizedBox(height: 10),
                widget.live(),
              ]),
            ),
            const SizedBox(height: 18),
            Text('Quick check', style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
            const SizedBox(height: 8),
            for (var qi = 0; qi < l.quiz.length; qi++) _quiz(p, qi, l.quiz[qi]),
            const SizedBox(height: 8),
            Row(children: [
              Expanded(
                child: OutlinedButton.icon(
                  style: OutlinedButton.styleFrom(
                    foregroundColor: p.ink,
                    side: BorderSide(color: p.line, width: 1.5),
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
                  ),
                  onPressed: () => widget.onAsk('I just read the lesson "${l.title}". Can you explain it again with a live example from the markets right now?'),
                  icon: const Icon(Icons.forum_rounded, size: 18),
                  label: const Text('Ask the tutor', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton.icon(
                  style: FilledButton.styleFrom(
                    backgroundColor: allRight ? _up : p.muted,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
                  ),
                  onPressed: allRight
                      ? () {
                          widget.onDone();
                          Navigator.maybePop(context);
                        }
                      : null,
                  icon: const Icon(Icons.check_rounded, size: 18),
                  label: Text(allRight ? 'Finish lesson' : 'Answer the quiz', style: const TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
            ]),
          ]),
        ),
      ),
    );
  }

  Widget _quiz(_Pal p, int qi, _Quiz q) {
    final picked = _picked[qi];
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: p.card, borderRadius: BorderRadius.circular(20), border: Border.all(color: p.cardEdge)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(q.q, style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
        const SizedBox(height: 8),
        for (var oi = 0; oi < q.options.length; oi++)
          GestureDetector(
            onTap: () => setState(() => _picked[qi] = oi),
            child: Container(
              margin: const EdgeInsets.only(bottom: 6),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                color: picked == oi ? (oi == q.answer ? _up : _loss).withValues(alpha: 0.14) : p.inner,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: picked == oi ? (oi == q.answer ? _up : _loss) : Colors.transparent),
              ),
              child: Row(children: [
                Expanded(child: Text(q.options[oi], style: TextStyle(color: p.ink, fontSize: 13.5))),
                if (picked == oi) Icon(oi == q.answer ? Icons.check_circle_rounded : Icons.cancel_rounded, color: oi == q.answer ? _up : _loss, size: 18),
              ]),
            ),
          ),
        if (picked != null)
          Text(picked == q.answer ? 'Right! ${q.why}' : 'Not quite. Try again.',
              style: TextStyle(color: picked == q.answer ? _up : _loss, fontSize: 12.5, fontWeight: FontWeight.w700)),
      ]),
    );
  }
}
