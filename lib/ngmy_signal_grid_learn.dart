// Signal Grid · Learn — a trading course, live signals and a tutor, built on the agent's own live readings.
//
// Lessons: short plain-language lessons, each with a LIVE example from the 10 watched markets and a quick quiz.
// Live signals: every market read with the same rules the agent trades by (trend, strength, RSI, last hour).
// Ask: the app's AI (through bright-handler, with its normal limits) answers questions, given the live readings
// and the agent's state, so answers talk about what the market is doing right now.
// Educational practice. Signals can fail; nothing here is a promise of profit.

part of 'ngmy_signal_grid_agent.dart';

// ───────────────────────────────────────────────────────────── shared helpers used by both screens

String _nextAuto() {
  final now = _toEt(DateTime.now().toUtc());
  final mins = 5 - now.minute % 5; // the automatic check runs every 5 minutes
  final next = DateTime(now.year, now.month, now.day, now.hour, now.minute).add(Duration(minutes: mins));
  return 'at ${_clock(next)} ET';
}

/// Colour of the ONE decision label: green to enter up, red to enter down, red for skip or too late,
/// amber for no clear direction, grey when closed.
Color _actionColor(String a) {
  if (a.startsWith('ENTER UP')) return _up;
  if (a.startsWith('ENTER DOWN')) return _loss;
  if (a.contains('SKIP') || a.contains('TOO LATE')) return _loss;
  if (a.startsWith('MARKET CLOSED')) return const Color(0xFF94A3B8);
  return _down;
}

/// One market's live reading: coin, price, action, strength bar, RSI and the plain explanation.
Widget _readingTile(_Pal p, Map<String, dynamic> m, {bool compact = false, VoidCallback? onAsk, String? changed}) {
  final r = _map(m['reading']);
  final t = _map(r['timing']);
  final pts = _points(m);
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
      border: Border.all(color: action.startsWith('ENTER') ? c.withValues(alpha: 0.6) : p.cardEdge,
          width: action.startsWith('ENTER') ? 1.6 : 1),
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
        if (pts.length > 2) ...[
          SizedBox(width: 58, height: 26, child: CustomPaint(painter: _SparkPainter(pts, chg >= 0 ? _up : _loss))),
          const SizedBox(width: 10),
        ],
        Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Text(_price(m), style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
          Text('${chg >= 0 ? '+' : ''}${chg.toStringAsFixed(2)}% · ${m['kind'] == 'forex' ? '30m' : '4h'}',
              style: TextStyle(color: chg >= 0 ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w700)),
        ]),
      ]),
      // ── Signals v2: one card, BUY / SELL only for a STRONG signal given at a 30-minute check, otherwise WAIT.
      if (m['v2'] is Map) ...[
        const SizedBox(height: 12),
        _v2Block(p, m),
      ] else ...[
      // ── (older readings) Enter RIGHT NOW: a big sign in the middle at the top, with the direction and the duration.
      if (r['entry'] is Map) ...[
        const SizedBox(height: 12),
        _enterNowSign(_map(r['entry'])),
      ],
      if (changed != null) ...[
        const SizedBox(height: 8),
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
          decoration: BoxDecoration(
            gradient: const LinearGradient(colors: [Color(0xFF6D28D9), _fastC]),
            borderRadius: BorderRadius.circular(10),
          ),
          child: Row(children: [
            const Icon(Icons.bolt_rounded, color: Colors.white, size: 16),
            const SizedBox(width: 4),
            Expanded(
              child: Text('$changed · check before you act',
                  style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w900, letterSpacing: 0.3)),
            ),
          ]),
        ),
      ],
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
      for (final n in (m['open'] == true ? notes.skip(1) : notes).take(compact ? 2 : 99))
        Padding(
          padding: const EdgeInsets.only(bottom: 4),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Padding(padding: const EdgeInsets.only(top: 6), child: Icon(Icons.circle, size: 4.5, color: c)),
            const SizedBox(width: 7),
            Expanded(child: Text(n, style: TextStyle(color: p.ink, fontSize: 12.3, height: 1.35))),
          ]),
        ),
      // ── Duration frame: how long the move has run, usually lasts and may have left, and what to do now.
      if (m['open'] == true) ...[
        const SizedBox(height: 10),
        _durationFrame(p, r, t),
      ],
      ],
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

/// Signals v2 card body: the answer (BUY / SELL only for a STRONG signal given at a 30-minute check and still
/// within its expiry, otherwise WAIT), the confidence, the time, the expiry warning and the 5 confirmations.
Widget _v2Block(_Pal p, Map<String, dynamic> m) {
  final v = _map(m['v2']);
  final sig = m['activeSignal'] is Map ? _map(m['activeSignal']) : null;
  final open = m['open'] == true;
  // STRONG BUY / SELL: a signal given at a 30-minute check (all 5 confirmations). WEAK BUY / SELL: both trends
  // point one way but not all 5 agree: shown so you know, never to be entered. WAIT: no direction.
  final lean = '${v['lean'] ?? 'none'}';
  final weak = sig == null && open && (lean == 'up' || lean == 'down');
  final side = sig != null ? '${sig['direction']}' : weak ? (lean == 'up' ? 'BUY' : 'SELL') : 'WAIT';
  final answer = sig != null ? 'STRONG $side' : weak ? 'WEAK $side' : 'WAIT';
  final c = side == 'BUY' ? _up : side == 'SELL' ? _loss : const Color(0xFF94A3B8);
  final checks = ((sig?['checks'] ?? v['checks']) as List? ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  final passed = sig != null ? 5 : _d(v['passed']).toInt();
  final gradeAt = DateTime.tryParse('${sig?['grade_at'] ?? ''}');
  final givenAt = DateTime.tryParse('${sig?['created_at'] ?? ''}');
  final explain = !open
      ? 'This market is closed right now, so the answer is WAIT. No signals while it is closed.'
      : sig != null
          ? '${sig['explain'] ?? ''}'
          : v['strong'] == true
              ? 'All 5 confirmations agree right now, but a signal is only given at the 30-minute checks (at most 5 a day). Until then it is not a signal: do not enter.'
              : weak
                  ? 'WEAK ${side == 'BUY' ? 'BUY: the trends point up' : 'SELL: the trends point down'}, but only $passed of the 5 confirmations agree. Do NOT enter a weak signal. ${v['explain'] ?? ''}'
                  : '${v['explain'] ?? 'WAIT.'}';
  return Container(
    width: double.infinity,
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(color: c.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(16), border: Border.all(color: c.withValues(alpha: 0.45))),
    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        Text(answer, style: TextStyle(color: c, fontSize: 22, fontWeight: FontWeight.w900, letterSpacing: 0.4)),
        const SizedBox(width: 8),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
          decoration: BoxDecoration(color: c.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(999)),
          child: Text(sig != null ? '5 of 5' : '$passed of 5', style: TextStyle(color: c, fontSize: 10.5, fontWeight: FontWeight.w900)),
        ),
        Expanded(
          child: Text(sig != null ? '${sig['et_time'] ?? ''}'.split(', ').last : '', textAlign: TextAlign.right, maxLines: 1, overflow: TextOverflow.ellipsis,
              style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w700)),
        ),
      ]),
      if (weak) ...[
        const SizedBox(height: 4),
        Text('WEAK SIGNAL · DO NOT ENTER', style: TextStyle(color: c, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 0.4)),
      ],
      // The live clock of a STRONG signal: when to enter (seconds), how long the entry window stays open, how
      // long to trade for, and when the signal closes.
      if (sig != null && givenAt != null && gradeAt != null) ...[
        const SizedBox(height: 10),
        _SignalClock(givenAt: givenAt, closesAt: gradeAt, buy: side == 'BUY'),
      ],
      const SizedBox(height: 4),
      const Text('Built for a 15–30 minute expiry. Do NOT use this for 1–5 minute trades.',
          style: TextStyle(color: _loss, fontSize: 11.5, fontWeight: FontWeight.w800, height: 1.3)),
      if (sig != null && gradeAt != null)
        Text('Graded at ${_clock(_toEt(gradeAt.toUtc()))} ET, 30 minutes after it was given: WIN if the price finished ${side == 'BUY' ? 'higher' : 'lower'}.',
            style: TextStyle(color: p.muted, fontSize: 11, height: 1.3)),
      const SizedBox(height: 8),
      Text(explain, style: TextStyle(color: p.ink, fontSize: 12.3, height: 1.35)),
      const SizedBox(height: 8),
      for (final ch in checks)
        Padding(
          padding: const EdgeInsets.only(bottom: 4),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Icon(ch['ok'] == true ? Icons.check_circle_rounded : Icons.cancel_rounded, size: 15, color: ch['ok'] == true ? _up : _loss),
            const SizedBox(width: 6),
            Expanded(
              child: Text('${ch['ok'] == true ? 'Yes' : 'No'} — ${ch['text'] ?? ''}', style: TextStyle(color: p.ink, fontSize: 11.8, height: 1.3)),
            ),
          ]),
        ),
    ]),
  );
}

/// The live clock on a STRONG signal, ticking every second:
/// - when to enter: the start of the next minute ("Enter in 0:36", then "ENTER NOW" for its first 15 seconds);
/// - the entry window: 5 minutes after the signal was given; after that "TOO LATE TO ENTER", so nobody jumps into
///   an old signal;
/// - how long to trade for: 30 minutes from the signal (the expiry it is graded at), and how long is left of it;
/// - when the signal closes (is graded).
class _SignalClock extends StatefulWidget {
  const _SignalClock({required this.givenAt, required this.closesAt, required this.buy});
  final DateTime givenAt;
  final DateTime closesAt;
  final bool buy;

  @override
  State<_SignalClock> createState() => _SignalClockState();
}

class _SignalClockState extends State<_SignalClock> {
  Timer? _t;
  static const _windowMin = 5;

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

  static String _mmss(Duration d) {
    final s = d.isNegative ? 0 : d.inSeconds;
    return '${s ~/ 60}:${(s % 60).toString().padLeft(2, '0')}';
  }

  @override
  Widget build(BuildContext context) {
    final now = DateTime.now().toUtc();
    final windowEnd = widget.givenAt.toUtc().add(const Duration(minutes: _windowMin));
    final closes = widget.closesAt.toUtc();
    final total = closes.difference(widget.givenAt.toUtc()).inMinutes;
    final c = widget.buy ? _up : _loss;
    final late = now.isAfter(windowEnd);
    final closed = now.isAfter(closes);
    // The next whole minute: the moment to enter (the start of the next 1-minute candle).
    final nextMin = DateTime.utc(now.year, now.month, now.day, now.hour, now.minute).add(const Duration(minutes: 1));
    final toEntry = nextMin.difference(now);
    final enterNow = toEntry.inSeconds >= 45; // the first 15 seconds of a minute
    final String big;
    final String small;
    if (closed) {
      big = 'SIGNAL CLOSED';
      small = 'Being graded now: WIN if the price finished ${widget.buy ? 'higher' : 'lower'}.';
    } else if (late) {
      big = 'TOO LATE TO ENTER';
      small = 'The 5-minute entry window has passed. Wait for the next signal: entering an old signal is how money is lost.';
    } else {
      big = enterNow ? '${widget.buy ? 'BUY' : 'SELL'} NOW' : 'Enter in ${_mmss(toEntry)}';
      small = 'Entry window closes in ${_mmss(windowEnd.difference(now))} · enter at the start of a minute.';
    }
    Widget box(String k, String v) => Expanded(
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 7),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.16), borderRadius: BorderRadius.circular(10)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(k, style: const TextStyle(color: Colors.white70, fontSize: 9.5, fontWeight: FontWeight.w700)),
              FittedBox(
                fit: BoxFit.scaleDown,
                alignment: Alignment.centerLeft,
                child: Text(v, style: const TextStyle(color: Colors.white, fontSize: 14, fontWeight: FontWeight.w900, fontFeatures: [FontFeature.tabularFigures()])),
              ),
            ]),
          ),
        );
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: late || closed ? const Color(0xFF64748B) : c,
        borderRadius: BorderRadius.circular(14),
        boxShadow: [BoxShadow(color: (late || closed ? Colors.black : c).withValues(alpha: 0.25), blurRadius: 12, offset: const Offset(0, 4))],
      ),
      child: Column(children: [
        Text(big, textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white, fontSize: enterNow && !late && !closed ? 26 : 22, fontWeight: FontWeight.w900, letterSpacing: 0.6,
                fontFeatures: const [FontFeature.tabularFigures()])),
        const SizedBox(height: 2),
        Text(small, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 11.5, height: 1.3)),
        const SizedBox(height: 8),
        Row(children: [
          box('Trade for', '$total min'),
          const SizedBox(width: 6),
          box('Entry window', late ? 'closed' : _mmss(windowEnd.difference(now))),
          const SizedBox(width: 6),
          box('Signal closes in', _mmss(closes.difference(now))),
        ]),
      ]),
    );
  }
}

/// The big "ENTER UP" / "ENTER DOWN" sign with a live countdown to the moment to enter (the start of the
/// next candle) and how long to stay in.
Widget _enterNowSign(Map<String, dynamic> e) {
  final up = e['dir'] == 'up';
  final c = up ? _up : _loss;
  final candleMin = math.max(1, _d(e['candleMin']).round());
  return Container(
    width: double.infinity,
    padding: const EdgeInsets.fromLTRB(14, 14, 14, 12),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(18),
      gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [c, Color.lerp(c, Colors.black, 0.25)!]),
      boxShadow: [BoxShadow(color: c.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 6))],
    ),
    child: Column(children: [
      Container(
        width: 52,
        height: 52,
        decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.22), shape: BoxShape.circle),
        child: Icon(up ? Icons.arrow_upward_rounded : Icons.arrow_downward_rounded, color: Colors.white, size: 34),
      ),
      const SizedBox(height: 6),
      Text(up ? 'ENTER UP' : 'ENTER DOWN', style: const TextStyle(color: Colors.white, fontSize: 22, fontWeight: FontWeight.w900, letterSpacing: 0.8)),
      Text(up ? 'BUY / CALL' : 'SELL / PUT', style: const TextStyle(color: Colors.white70, fontSize: 11.5, fontWeight: FontWeight.w800, letterSpacing: 1)),
      const SizedBox(height: 10),
      _EntryCountdown(candleMin: candleMin),
      const SizedBox(height: 10),
      Row(mainAxisAlignment: MainAxisAlignment.center, children: [
        _signStat('Trade for', '${_d(e['durationMin']).toStringAsFixed(0)} min'),
        Container(width: 1, height: 30, color: Colors.white30, margin: const EdgeInsets.symmetric(horizontal: 18)),
        _signStat('Worked lately', '${e['worked']} of ${e['of']}'),
      ]),
    ]),
  );
}

/// Counts down, second by second, to the start of the next candle: that is the moment to enter.
/// At zero it shows ENTER NOW for the first 15 seconds of the new candle, then counts to the next one
/// (the card refreshes every 20 seconds, so the sign disappears as soon as the signal is gone).
class _EntryCountdown extends StatefulWidget {
  const _EntryCountdown({required this.candleMin});
  final int candleMin;

  @override
  State<_EntryCountdown> createState() => _EntryCountdownState();
}

class _EntryCountdownState extends State<_EntryCountdown> {
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
    final period = widget.candleMin * 60;
    final sec = DateTime.now().toUtc().millisecondsSinceEpoch ~/ 1000;
    final into = sec % period; // seconds since this candle started
    final now = into < 15;
    final left = period - into;
    final text = now ? 'ENTER NOW' : 'Enter in ${left ~/ 60}:${(left % 60).toString().padLeft(2, '0')}';
    return AnimatedContainer(
      duration: const Duration(milliseconds: 250),
      padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
      decoration: BoxDecoration(
        color: now ? Colors.white : Colors.white.withValues(alpha: 0.18),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        Icon(now ? Icons.bolt_rounded : Icons.timer_rounded, size: 20, color: now ? Colors.black : Colors.white),
        const SizedBox(width: 6),
        Text(text,
            style: TextStyle(
              color: now ? Colors.black : Colors.white,
              fontSize: 22,
              fontWeight: FontWeight.w900,
              fontFeatures: const [FontFeature.tabularFigures()],
            )),
      ]),
    );
  }
}

Widget _signStat(String k, String v) => Column(children: [
      Text(v, style: const TextStyle(color: Colors.white, fontSize: 17, fontWeight: FontWeight.w900)),
      Text(k, style: const TextStyle(color: Colors.white70, fontSize: 10.5, fontWeight: FontWeight.w700)),
    ]);

/// The DURATION frame at the bottom of every open market's card: the SAME decision as the label above,
/// in one plain sentence, and the three facts it is based on.
Widget _durationFrame(_Pal p, Map<String, dynamic> r, Map<String, dynamic> t) {
  final decision = (r['decision'] ?? 'NO_DIRECTION').toString();
  final up = r['dir'] == 'up';
  final notes = ((r['notes'] as List?) ?? const []).map((e) => e.toString()).toList();
  final vc = switch (decision) {
    'ENTER' => up ? _up : _loss,
    'SKIP_WEAK' || 'WAIT_LATE' => _loss,
    _ => _down,
  };
  // The facts only make sense when there is a direction (otherwise they would talk about a move it just called unclear).
  final hasTiming = t['typicalMin'] != null && t['dir'] != null && t['dir'] != 'none' && decision != 'NO_DIRECTION' && decision != 'CLOSED';
  final of = _d(t['of']), worked = _d(t['worked']);
  final ratio = of > 0 ? worked / of : 0.0;
  final way = t['dir'] == 'up' ? 'up' : 'down';
  return Container(
    width: double.infinity,
    padding: const EdgeInsets.all(12),
    decoration: BoxDecoration(
      color: p.inner,
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: vc.withValues(alpha: 0.55), width: 1.5),
    ),
    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Row(children: [
        Icon(Icons.timer_rounded, size: 16, color: p.ink),
        const SizedBox(width: 6),
        Text('DECISION AND DURATION', style: TextStyle(color: p.ink, fontSize: 11.5, fontWeight: FontWeight.w900, letterSpacing: 1)),
      ]),
      const SizedBox(height: 8),
      Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
        decoration: BoxDecoration(color: vc.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(10)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text((r['action'] ?? '').toString(), style: TextStyle(color: vc, fontSize: 13, fontWeight: FontWeight.w900)),
          if (notes.isNotEmpty) ...[
            const SizedBox(height: 3),
            Text(notes.first, style: TextStyle(color: p.ink, fontSize: 12.3, height: 1.35)),
          ],
        ]),
      ),
      if (decision == 'ENTER' && r['entry'] is Map) ...[
        const SizedBox(height: 8),
        Row(children: [
          Expanded(child: _durStat(p, 'Trade for', '${_d(_map(r['entry'])['durationMin']).toStringAsFixed(0)} min', color: vc)),
          Expanded(child: _durStat(p, 'Enter at', 'next ${_d(_map(r['entry'])['candleMin']).toStringAsFixed(0)}-min candle')),
        ]),
      ],
      if (hasTiming) ...[
        const SizedBox(height: 10),
        Text('What this is based on', style: TextStyle(color: p.muted, fontSize: 10.5, fontWeight: FontWeight.w800)),
        const SizedBox(height: 4),
        _fact(p, Icons.play_arrow_rounded, 'This $way move started ${_d(t['ageMin']).toStringAsFixed(0)} min ago.'),
        _fact(p, Icons.timelapse_rounded, '${way == 'up' ? 'Up' : 'Down'} moves on this market usually end after about ${_d(t['typicalMin']).toStringAsFixed(0)} min.'),
        if (of > 0)
          _fact(
            p,
            Icons.fact_check_rounded,
            'Of the last ${of.toStringAsFixed(0)} $way moves here, ${worked.toStringAsFixed(0)} really went $way (${(ratio * 100).round()}%). '
            '${ratio >= 0.5 ? 'Reliable enough.' : 'Under half: unreliable.'}',
            color: ratio >= 0.5 ? _up : _loss,
          ),
      ],
      const SizedBox(height: 4),
      Text('Estimates from this market\'s recent moves, not promises.', style: TextStyle(color: p.muted, fontSize: 10.5)),
    ]),
  );
}

Widget _fact(_Pal p, IconData icon, String text, {Color? color}) => Padding(
      padding: const EdgeInsets.only(bottom: 3),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(icon, size: 14, color: color ?? p.muted),
        const SizedBox(width: 6),
        Expanded(child: Text(text, style: TextStyle(color: color ?? p.ink, fontSize: 12, height: 1.35))),
      ]),
    );

Widget _durStat(_Pal p, String k, String v, {Color? color}) => Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(k, style: TextStyle(color: p.muted, fontSize: 10.5)),
      Text(v, style: TextStyle(color: color ?? p.ink, fontSize: 13.5, fontWeight: FontWeight.w800)),
    ]);


/// Forex prices need more decimals than dollars (EUR/USD 1.09723, USD/JPY 158.792).
String _price(Map<String, dynamic> m) {
  final v = _d(m['price']);
  if (m['kind'] != 'forex') return _money(v, sign: false);
  return v.toStringAsFixed(v >= 100 ? 3 : 5);
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
    ('Why practise first', "This agent uses Alpaca paper money: real prices, fake dollars. You can learn every step, make mistakes and see real results without risking a cent. Professionals practise this way too."),
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
    ('Buy signal', "When the fast line crosses UP through the slow line, the short-term trend has just turned up. That moment is the buy signal. The agent buys at that point (\$100 of the stock or coin), but only if the big trend is rising too. It watches the 10 stocks on weekdays and the 15 liquid crypto majors around the clock, all at the same time, and buys whichever gives a valid entry first."),
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
    ('Decide the exit before you enter', "Every agent trade has two exits set before it starts, in dollars: take profit when the trade is up \$50, stop loss when it is down \$50."),
    ('Win the same as you risk', "The win (+\$50) is the same size as the loss (-\$50). So every win cancels one loss: winning 5 out of 10 trades breaks even. More than 5 out of 10 is profit, fewer is a loss. The win rate on the agent screen shows which side it is on."),
    ('Size matters most', "The agent uses \$100 per trade even though the paper account has \$100,000. Small trades mean no single mistake can hurt much. Pros rarely risk more than 1 to 2 percent of their money on one trade."),
    ('Never move the stop', "The biggest beginner mistake is hoping a losing trade comes back and moving the stop lower. Small losses are the cost of doing business. Big losses end accounts."),
  ], [
    _Quiz('With +\$50 wins and -\$50 losses, to break even you must win about...', ['5 in 10 trades', '9 in 10 trades', 'Every trade'], 0, 'Each win (+50) cancels one loss (-50).'),
    _Quiz('A trade is losing. The best move is...', ['Move the stop lower', 'Let the stop loss work', 'Buy more'], 1, 'The stop exists to keep losses small.'),
  ]),
  _Lesson('brakes', 'Daily stop and total brake', 'Protecting your account from bad days', 4, Icons.front_hand_rounded, Color(0xFFF2C14E), 'brakes', [
    ('Bad days happen', "Some days every signal fails. The danger is trying to win it back by trading more and bigger. That is called revenge trading and it is how small losses become big ones."),
    ('Daily stop: \$50', "If the day loses \$50, the agent makes no more buys until tomorrow. It walks away and lets the market calm down."),
    ('Total brake: \$100', "If total losses reach \$100, the agent pauses completely until you review what happened and turn it back on. Reviewing is the most important part of learning."),
    ('Your own rules', "When you trade yourself, set the same kind of limits before the day starts, and keep them even when it hurts."),
  ], [
    _Quiz('After losing \$50 in a day, the agent...', ['Doubles the next trade', 'Stops buying for the day', 'Sells everything forever'], 1, 'The daily stop prevents revenge trading.'),
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
    ('Keep a journal', "For each trade write: why you bought, where your stop and target were, what happened, and what you learned. The Trades list on the main screen is the agent's journal."),
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

/// The Ask tutor conversation. It lives as long as Signal Grid is open (the agent screen, the Trading
/// Academy and every tab in it), so switching to Lessons or Live signals and back never loses it.
/// It is cleared only when the person leaves Signal Grid completely.
class _TutorChat {
  static final msgs = <_ChatMsg>[];
  static bool thinking = false;
  static String draft = '';
  static int _open = 0; // Signal Grid screens open right now
  static int gen = 0; // changes on every clear, so a late answer for a closed conversation is dropped

  static void enter() => _open++;

  static void leave() {
    _open = math.max(0, _open - 1);
    if (_open == 0) {
      msgs.clear();
      thinking = false;
      draft = '';
      gen++;
    }
  }
}

class _NgmySignalGridLearnScreenState extends State<NgmySignalGridLearnScreen> with SingleTickerProviderStateMixin {
  late final TabController _tabs = TabController(length: 3, vsync: this, initialIndex: widget.startTab);
  Map<String, dynamic>? _status; // the agent's full status (admins only)
  List<Map<String, dynamic>>? _sigMarkets; // the agent's 10 markets from Live signals (everyone)
  DateTime? _fetchedAt;
  Timer? _timer;
  // Lesson progress, saved on the server (and on the phone as a backup):
  // {done: [lesson ids], lessons: {id: {slots, right, tries, locks, used}}}
  Map<String, dynamic> _progress = {'done': <String>[], 'lessons': <String, dynamic>{}};
  bool _isAdmin = false;
  bool _alertsAllowed = false;
  bool _pushOk = false;
  Timer? _saveTimer;
  Set<String> get _done => ((_progress['done'] as List?) ?? const []).map((e) => e.toString()).toSet();
  List<_ChatMsg> get _chat => _TutorChat.msgs;
  final _input = TextEditingController(text: _TutorChat.draft);
  final _chatScroll = ScrollController();
  bool get _thinking => _TutorChat.thinking;
  set _thinking(bool v) => _TutorChat.thinking = v;

  // Live signals: search, filter, and what changed since the last refresh.
  List<Map<String, dynamic>> _fx = [];
  String _query = '';
  bool _searching = false;
  String _filter = 'All';
  final _search = TextEditingController();

  static const _prefsKey = 'ngmy_signal_grid_academy_v2';
  static const _oldPrefsKey = 'ngmy_signal_grid_lessons_done';

  @override
  void initState() {
    super.initState();
    _status = widget.initialStatus;
    _isAdmin = widget.initialStatus != null;
    _fx = _withAsset(widget.initialStatus?['fx']);
    final pm = _withAsset(widget.initialStatus?['markets']);
    if (pm.isNotEmpty) _sigMarkets = pm;
    _fetchedAt = DateTime.now();
    _tabs.addListener(() => setState(() {}));
    _TutorChat.enter();
    _input.addListener(() => _TutorChat.draft = _input.text);
    if (_chat.isNotEmpty || _thinking) _scrollChat();
    if (!widget.preview) {
      unawaited(_loadProgress());
      unawaited(_refresh());
      unawaited(ngmyPushHasPermission().then((v) {
        if (mounted) setState(() => _pushOk = v);
      }));
      // Every 20 seconds, so a signal that flips is shown quickly.
      _timer = Timer.periodic(const Duration(seconds: 20), (_) => unawaited(_refresh()));
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    _saveTimer?.cancel();
    _tabs.dispose();
    _search.dispose();
    _input.dispose();
    _chatScroll.dispose();
    _TutorChat.leave();
    super.dispose();
  }

  static List<Map<String, dynamic>> _withAsset(dynamic list) =>
      ((list as List?) ?? const []).whereType<Map>().map((e) => {...Map<String, dynamic>.from(e), 'asset': e['symbol']}).toList();

  /// Lesson progress: the server copy wins (it unlocks the signal alerts); the phone copy is the backup.
  Future<void> _loadProgress() async {
    Map<String, dynamic>? local;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw != null) local = Map<String, dynamic>.from(jsonDecode(raw) as Map);
      final old = prefs.getStringList(_oldPrefsKey);
      if (local == null && old != null) local = {'done': old, 'lessons': <String, dynamic>{}};
    } catch (_) {}
    final res = await ngmyEdgeInvoke({'action': 'paLearnGet'});
    if (!mounted) return;
    final server = res?['progress'] is Map ? Map<String, dynamic>.from(res!['progress'] as Map) : null;
    setState(() {
      if (res?['isAdmin'] == true) _isAdmin = true;
      final chosen = server ?? local;
      if (chosen != null) {
        _progress = {'done': (chosen['done'] as List?) ?? <String>[], 'lessons': (chosen['lessons'] as Map?) ?? <String, dynamic>{}};
      }
    });
    // Only on the phone so far (for example from before the server copy existed): send it up.
    if (server == null && local != null) _saveProgress();
  }

  void _saveProgress() {
    _saveTimer?.cancel();
    _saveTimer = Timer(const Duration(milliseconds: 800), () async {
      try {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setString(_prefsKey, jsonEncode(_progress));
      } catch (_) {}
      if (widget.preview) return;
      final res = await ngmyEdgeInvoke({'action': 'paLearnSave', 'progress': _progress});
      if (res?['allDone'] == true) NgmySignalAlerts.recheck();
    });
  }

  Future<void> _lessonFinished(String id) async {
    final wasAll = _lessons.every((l) => _done.contains(l.id));
    setState(() {
      final done = {..._done, id}.toList();
      _progress = {..._progress, 'done': done};
    });
    _saveProgress();
    final nowAll = _lessons.every((l) => _done.contains(l.id));
    if (!wasAll && nowAll && mounted) {
      await showDialog<void>(
        context: context,
        builder: (ctx) => AlertDialog(
          title: const Text('All 10 lessons done!'),
          content: const Text('Signal alerts are now unlocked. When a market says ENTER UP or ENTER DOWN, '
              'the app will tell you the market, the direction and the duration. Allow notifications to receive them.'),
          actions: [
            FilledButton(
              onPressed: () async {
                Navigator.pop(ctx);
                final ok = await ngmyPushRequestPermission();
                if (mounted) setState(() => _pushOk = ok);
              },
              child: const Text('Allow notifications'),
            ),
          ],
        ),
      );
    }
  }

  Future<void> _refresh() async {
    final res = await ngmyEdgeInvoke({'action': 'paSignals'}, timeout: const Duration(seconds: 40));
    if (!mounted || res == null || res['ok'] != true) return;
    final fx = _withAsset(res['fx']);
    final ms = _withAsset(res['markets']);
    setState(() {
      if (fx.isNotEmpty) _fx = fx;
      if (ms.isNotEmpty) _sigMarkets = ms;
      _alertsAllowed = res['alertsAllowed'] == true;
      if (res['isAdmin'] == true) _isAdmin = true;
      _sigRules = ((res['rules'] as List?) ?? const []).map((e) => e.toString()).toList();
      _nowEt = (res['nowEt'] ?? '').toString();
      _stockOpen = res['stockOpen'] == true;
      _fetchedAt = DateTime.now();
      if (res['signals'] is Map) _board = _map(res['signals']);
    });
    // Signals v2: the old "just turned up / down" flags are gone; only STRONG signals (all five confirmations) count.
  }

  /// Signals v2: the active STRONG signals, the history with WIN or LOSS, the last-20 record and the self-brake.
  Map<String, dynamic> _board = const {};

  List<String> _sigRules = const [];
  String _nowEt = '';
  bool _stockOpen = false;

  /// Every market with a live reading: the agent's 10 plus the forex pairs.
  List<Map<String, dynamic>> get _allSignals => [..._mkts, ..._fx];

  Map<String, dynamic> get _snap => _map(_map(_status?['state'])['snapshot']);
  List<Map<String, dynamic>> get _mkts => _sigMarkets ?? _markets(_snap);

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
    b.writeln('LIVE DATA from the NGMY paper trading agent (Eastern Time now: ${_nowEt.isNotEmpty ? _nowEt : (_status?['nowEt'] ?? 'unknown')}):');
    // The agent's own account and trades are shared with the tutor only for admins.
    if (_status != null) {
      b.writeln('Agent: ${st['enabled'] == true ? 'running' : 'stopped'}${st['brakePaused'] == true ? ', paused by the 25 dollar brake' : ''}. '
          'P/L all time ${_money(_d(st['totalPnl']))}, today ${_money(_d(today['day_pnl']))}, wins ${rec['wins'] ?? 0}, losses ${rec['losses'] ?? 0}.');
    }
    if (_status == null) {
      // Members: market data only.
    } else if (sh != null) {
      final held = _mkts.firstWhere((m) => m['asset'] == sh['symbol'], orElse: () => <String, dynamic>{});
      final now = _d(held['price']);
      final entry = _d(sh['entryPrice']);
      final opt = sh['option'] is Map ? _map(sh['option']) : null;
      final mark = _map(_map(_map(_status?['state'])['snapshot'])['held']);
      final pnl = mark['pnl'] == null ? null : _d(mark['pnl']);
      final pnlText = pnl == null ? 'unknown' : pnl.toStringAsFixed(2);
      b.writeln(opt != null
          ? 'Open trade: 1 SPY call option, strike ${_d(opt['strike']).toStringAsFixed(0)}, expires ${opt['expiry']}, '
              'premium paid ${entry.toStringAsFixed(2)} a share (${_d(opt['cost']).toStringAsFixed(2)} dollars). '
              'Win or loss now: $pnlText dollars. It sells at +50 or -50 dollars.'
          : 'Open trade: ${sh['symbol']}, bought at ${entry.toStringAsFixed(2)}, now ${now.toStringAsFixed(2)}. '
              'Win or loss now: $pnlText dollars. It sells at +50 or -50 dollars.');
    } else {
      b.writeln('No open trade.');
    }
    String line(Map<String, dynamic> m) {
      final r = _map(m['reading']);
      final t = _map(r['timing']);
      final timing = t['typicalMin'] == null
          ? ''
          : ', current ${t['dir']} move ${t['ageMin']} min old, such moves usually last ${t['typicalMin']} min (about ${t['remainingMin']} min left), '
              'past ${t['dir']} moves really went that way ${t['worked']} of ${t['of']} times, '
              '${_d(t['enterWithinMin']) > 0 ? 'still early (enter within ${t['enterWithinMin']} min)' : 'too late to enter'}';
      return '- ${m['asset']} (${m['name']}): price ${_price(m)}, change ${_d(m['changePct']).toStringAsFixed(2)}%, '
          '${m['open'] == true ? 'open' : 'closed'}, ${r['bias'] ?? 'unknown'}, strength ${_d(r['score']).toStringAsFixed(0)}, '
          'RSI ${r['rsi'] == null ? 'n/a' : _d(r['rsi']).toStringAsFixed(0)}, last hour ${r['mom1h'] == null ? 'n/a' : '${_d(r['mom1h']).toStringAsFixed(2)}%'}, '
          'reading: ${r['action'] ?? 'n/a'}$timing.';
    }

    b.writeln('Agent markets (5-minute candles; fast line = 9-candle average, slow = 21-candle average; strength 0 bearish to 100 bullish):');
    for (final m in _mkts) {
      b.writeln(line(m));
    }
    if (_fx.isNotEmpty) {
      b.writeln('Forex pairs (real interbank prices, 1-minute candles, signals only; the agent does not trade them; OTC prices at brokers differ):');
      for (final m in _fx) {
        b.writeln(line(m));
      }
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
    final rules = (((_status?['rules'] as List?) ?? _sigRules)).map((e) => '- $e').join('\n');
    final prompt = '''
You are the NGMY Signal Grid trading tutor. You teach a complete beginner how trading works, using the live market data and the rules of the NGMY paper trading agent below.
How to answer:
- Plain, friendly, simple English. Short sentences. No jargon without explaining it. Usually under 170 words.
- When the question is about a market or "right now", use the LIVE DATA and quote the real numbers (price, trend, strength, RSI, last hour), then explain what they mean and what the agent's rules say.
- Say clearly whether a market looks bullish, bearish or sideways and why, and what would need to happen for a buy or sell signal under the agent's rules.
- This is practice. You may explain what the rules signal, but never promise profit, never say a price will surely go up or down, and never tell the student to trade real or borrowed money. Remind them briefly when it fits that signals can fail and the stop loss keeps losses small.
- No markdown headings or tables. You may use short lines starting with "- ".

AGENT RULES:
$rules

${_liveBrief()}
${history.isEmpty ? '' : '\nCONVERSATION SO FAR:\n$history\n'}
Student: $question
Tutor:''';
    final gen = _TutorChat.gen;
    String answer;
    if (widget.preview) {
      answer = 'Preview mode: the tutor answers here using the live readings.';
    } else {
      final res = await ngmyEdgeInvoke({'action': 'chat', 'prompt': prompt}, timeout: const Duration(seconds: 60));
      final text = res?['text']?.toString().trim() ?? '';
      answer = text.isNotEmpty ? text.replaceAll('**', '').replaceAll(RegExp(r'^#+\s*', multiLine: true), '') : (res?['error'] ?? 'The tutor could not answer just now. Please try again.').toString();
    }
    // Signal Grid was closed while the tutor was answering: that conversation is gone.
    if (gen != _TutorChat.gen) return;
    // Keep the answer even if this screen closed meanwhile (the agent screen is still open).
    _chat.add(_ChatMsg(false, answer));
    _thinking = false;
    if (!mounted) return;
    setState(() {});
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
      Text('Practice only, no real money. Signals and lessons are for learning; markets can always surprise.',
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
        isAdmin: _isAdmin,
        done: _done.contains(l.id),
        state: Map<String, dynamic>.from((_map(_progress['lessons'])[l.id] as Map?) ?? const {}),
        onState: (s) {
          setState(() {
            final lessons = Map<String, dynamic>.from(_map(_progress['lessons']));
            lessons[l.id] = s;
            _progress = {..._progress, 'lessons': lessons};
          });
          _saveProgress();
        },
        onDone: () => _lessonFinished(l.id),
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
        final worth = first == 0 ? 100 : 100 * price / first;
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          say('Right now $sym is ${_money(price, sign: false)}. About 4 hours ago it was ${_money(first, sign: false)}.'),
          const SizedBox(height: 8),
          say('If you had put \$100 into $sym then, it would be worth ${_money(worth.toDouble(), sign: false)} now: '
              '${worth >= 100 ? 'a win of' : 'a loss of'} ${_money((worth - 100).abs().toDouble(), sign: false)}. That difference is your profit or loss.'),
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
              'Across the markets:${counts['bullish'] ?? 0} bullish, ${counts['bearish'] ?? 0} bearish, ${counts['sideways'] ?? 0} sideways.'),
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
        final buys = _mkts.where((x) => _map(x['reading'])['decision'] == 'ENTER' && _map(x['reading'])['dir'] == 'up').map((x) => x['asset']).toList();
        final sells = _mkts.where((x) => _map(x['reading'])['decision'] == 'ENTER' && _map(x['reading'])['dir'] == 'down').map((x) => x['asset']).toList();
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          chart(),
          const SizedBox(height: 8),
          say(buys.isNotEmpty
              ? 'Fresh BUY crosses right now: ${buys.join(', ')}. On its next automatic check the agent would buy if it holds nothing and it is the market traded today.'
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
        return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          say('Every agent trade is about \$100 (of a stock on weekdays, of a coin on weekends). $sym is ${_money(price, sign: false)} right now.'),
          const SizedBox(height: 6),
          say('- Take profit: it sells when the trade is up \$50'),
          say('- Stop loss: it sells when the trade is down \$50'),
          const SizedBox(height: 6),
          say('Win 5 and lose 5 of 10 trades: 5 x 50 - 5 x 50 = \$0.00. That is break even. Win 6 of 10 and you are up \$100.'),
        ]);
      case 'brakes':
        if (_status == null) {
          return say('Try it yourself: before your next practice day, write down "I stop after losing \$50 today". '
              'If three trades in a row lose, close the app and come back tomorrow. That is exactly what the agent does.');
        }
        final st = _map(_status?['state']);
        final today = _map(_status?['today']);
        return say('Today the agent is at ${_money(_d(today['day_pnl']))} (the daily stop is -\$50) and ${_money(_d(st['totalPnl']))} all time (the brake is -\$100).'
            '${st['brakePaused'] == true ? 'The brake is ON right now.' : 'Both brakes are off, it can keep trading.'}');
      case 'hours':
        final stockOpen = _sigMarkets != null ? _stockOpen : _map(_status?['market'])['stockOpen'] == true;
        final fxOpen = _fx.any((m) => m['open'] == true);
        return say('Right now the US stock market is ${stockOpen ? 'OPEN' : 'CLOSED'}, '
            'the forex market is ${fxOpen ? 'OPEN' : 'CLOSED'}, and crypto is open, as always.');
      case 'practice':
        if (_status == null) {
          final good = _allSignals.where((m) {
            final t = _map(_map(m['reading'])['timing']);
            return _d(t['of']) >= 3 && _d(t['worked']) / _d(t['of']) >= 0.5;
          }).length;
          return say('Right now $good of ${_allSignals.length} markets have signals that worked at least half the time lately. '
              'That is why a journal and many trades matter: some markets suit a method, others do not.');
        }
        final rec = _map(_status?['record']);
        return say('The agent journal so far: ${rec['trades'] ?? 0} finished trades, ${rec['wins'] ?? 0} wins and ${rec['losses'] ?? 0} losses. '
            'Keep watching until there are at least 20 before judging it.');
    }
    return const SizedBox.shrink();
  }

  // ── Live signals tab

  static String _group(Map<String, dynamic> m) => switch ((m['kind'] ?? '').toString()) {
        'forex' => 'Forex',
        'crypto' => 'Crypto',
        _ => 'Stocks',
      };

  Widget _signalsTab(_Pal p) {
    final q = _query.trim().toLowerCase();
    final all = _allSignals;
    final ms = all.where((m) {
      if (_filter != 'All' && _group(m) != _filter) return false;
      if (q.isEmpty) return true;
      final hay = '${m['asset']} ${m['name']} ${(m['asset'] ?? '').toString().replaceAll('/', '')}'.toLowerCase();
      return hay.contains(q);
    }).toList()
      ..sort((a, b) {
        // Signals v2: a STRONG signal given now first, then the markets with the most confirmations.
        final sa = a['activeSignal'] is Map ? 0 : 1, sb = b['activeSignal'] is Map ? 0 : 1;
        if (sa != sb) return sa - sb;
        return _d(_map(b['v2'])['passed']).compareTo(_d(_map(a['v2'])['passed']));
      });
    final board = _board;
    final secs = _fetchedAt == null ? 0 : DateTime.now().difference(_fetchedAt!).inSeconds;
    final ago = secs < 20 ? 'just now' : secs < 60 ? '$secs s ago' : '${secs ~/ 60} min ago';
    return RefreshIndicator(
      onRefresh: _refresh,
      child: ListView(padding: const EdgeInsets.fromLTRB(16, 6, 16, 40), children: [
        // Filters, with the search icon at the top right.
        Row(children: [
          Expanded(
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(children: [
                for (final f in const ['All', 'Forex', 'Stocks', 'Crypto']) ...[
                  GestureDetector(
                    onTap: () => setState(() => _filter = f),
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 13, vertical: 7),
                      decoration: BoxDecoration(color: _filter == f ? p.dark : p.card, borderRadius: BorderRadius.circular(999), border: Border.all(color: p.line)),
                      child: Text(
                        f == 'All' ? 'All ${all.length}' : '$f ${all.where((m) => _group(m) == f).length}',
                        style: TextStyle(color: _filter == f ? p.onDark : p.ink, fontWeight: FontWeight.w800, fontSize: 12),
                      ),
                    ),
                  ),
                  const SizedBox(width: 6),
                ],
              ]),
            ),
          ),
          const SizedBox(width: 6),
          _round(p, _searching ? Icons.close_rounded : Icons.search_rounded, () {
            setState(() {
              _searching = !_searching;
              if (!_searching) {
                _query = '';
                _search.clear();
              }
            });
          }),
        ]),
        if (_searching) ...[
          const SizedBox(height: 10),
          TextField(
            controller: _search,
            autofocus: true,
            onChanged: (v) => setState(() => _query = v),
            style: TextStyle(color: p.ink),
            decoration: InputDecoration(
              hintText: 'Search a market, for example EUR/USD, GBP or Bitcoin',
              hintStyle: TextStyle(color: p.muted, fontSize: 13),
              prefixIcon: Icon(Icons.search_rounded, color: p.muted),
              filled: true,
              fillColor: p.card,
              contentPadding: const EdgeInsets.symmetric(vertical: 12),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(999), borderSide: BorderSide(color: p.line)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(999), borderSide: BorderSide(color: p.line)),
            ),
          ),
        ],
        const SizedBox(height: 12),
        _alertsBanner(p),
        // Only while signals are paused by the self-brake: one slim line (no frame otherwise).
        if (board['paused'] == true)
          Padding(
            padding: const EdgeInsets.only(bottom: 4),
            child: Text(
              '${board['pauseReason'] ?? 'Record too weak — signals paused until the pattern improves.'} '
              '(${_d(board['paperStreak']).toInt()} of ${_d(board['liftStreak'] ?? 10).toInt()} paper wins in a row to lift it)',
              textAlign: TextAlign.center,
              style: const TextStyle(color: _loss, fontSize: 12, fontWeight: FontWeight.w800, height: 1.35),
            ),
          ),
        const SizedBox(height: 8),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          const Icon(Icons.circle, size: 7, color: _up),
          const SizedBox(width: 5),
          Flexible(
            child: Text('Live confirmations · updated $ago · signals are only given at the 30-minute checks',
                textAlign: TextAlign.center, style: TextStyle(color: p.muted, fontSize: 11)),
          ),
        ]),
        const SizedBox(height: 12),
        if (all.isEmpty) Text('Loading the markets...', style: TextStyle(color: p.muted)),
        if (all.isNotEmpty && ms.isEmpty) Center(child: Text('No market matches "$_query".', style: TextStyle(color: p.muted))),
        for (final m in ms)
          _readingTile(
            p,
            m,
            onAsk: () => _askAbout('What is happening with ${m['asset']} right now? Which of the 5 confirmations are missing, and why is the answer BUY, SELL or WAIT?'),
          ),
        _signalHistory(p),
        Text('Signals are opinions from price patterns, not guarantees. Even strong signals lose. Signals only: nothing is ever traded here.',
            textAlign: TextAlign.center, style: TextStyle(color: p.muted, fontSize: 11)),
      ]),
    );
  }

  Widget _pill(String t, Color c) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
        decoration: BoxDecoration(color: c.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(999)),
        child: Text(t, style: TextStyle(color: c, fontSize: 10.5, fontWeight: FontWeight.w900)),
      );

  /// Signals v2: every STRONG signal given, with WIN or LOSS once graded. Never hidden, deleted or re-graded.
  Widget _signalHistory(_Pal p) {
    final hist = ((_board['history'] as List?) ?? const []).whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
    return Container(
      margin: const EdgeInsets.only(top: 4, bottom: 12),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(color: p.card, borderRadius: BorderRadius.circular(20), border: Border.all(color: p.cardEdge)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('Signal history', style: TextStyle(color: p.ink, fontSize: 15, fontWeight: FontWeight.w800)),
        const SizedBox(height: 4),
        Text('Every STRONG signal, graded at its 30-minute expiry: did the price finish its way? The record is the record.',
            style: TextStyle(color: p.muted, fontSize: 11.5, height: 1.3)),
        const SizedBox(height: 8),
        if (hist.isEmpty)
          Text('No STRONG signals yet. Zero signals is a correct outcome when the confirmations do not all agree.',
              style: TextStyle(color: p.muted, fontSize: 12.5)),
        for (final s in hist)
          Container(
            padding: const EdgeInsets.symmetric(vertical: 8),
            decoration: BoxDecoration(border: Border(bottom: BorderSide(color: p.line))),
            child: Row(children: [
              Container(
                width: 46,
                padding: const EdgeInsets.symmetric(vertical: 4),
                decoration: BoxDecoration(color: (s['direction'] == 'BUY' ? _up : _loss).withValues(alpha: 0.14), borderRadius: BorderRadius.circular(8)),
                alignment: Alignment.center,
                child: Text('${s['direction']}', style: TextStyle(color: s['direction'] == 'BUY' ? _up : _loss, fontSize: 11, fontWeight: FontWeight.w900)),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text('${s['market']} at ${_d(s['price']).toStringAsFixed(_d(s['price']) < 10 ? 4 : 2)}',
                      style: TextStyle(color: p.ink, fontSize: 13, fontWeight: FontWeight.w800)),
                  Text('${s['et_time'] ?? ''}${s['graded'] == true ? ' · then ${_d(s['exit_price']).toStringAsFixed(_d(s['exit_price']) < 10 ? 4 : 2)} (${_d(s['move_pct']) >= 0 ? '+' : ''}${_d(s['move_pct']).toStringAsFixed(2)}%)' : ''}',
                      style: TextStyle(color: p.muted, fontSize: 11)),
                ]),
              ),
              _pill(s['graded'] == true ? '${s['result']}' : 'PENDING', s['graded'] != true ? _slowC : s['result'] == 'WIN' ? _up : _loss),
            ]),
          ),
      ]),
    );
  }

  /// Signal alerts: on for admins and graduates (with notifications allowed); otherwise how to unlock them.
  Widget _alertsBanner(_Pal p) {
    final doneCount = _lessons.where((l) => _done.contains(l.id)).length;
    final unlocked = _alertsAllowed || _isAdmin;
    final (IconData icon, Color c, String text, String? button) = !unlocked
        ? (Icons.lock_rounded, _slowC, 'Signal alerts unlock when you finish all 10 lessons ($doneCount of 10 done). '
            'You will be told the market and STRONG BUY or SELL (only when all 5 confirmations agree), built for a 15–30 minute expiry.', 'Go to lessons')
        : !_pushOk
            ? (Icons.notifications_off_rounded, _down, 'Signal alerts are unlocked. Allow notifications so the app can tell you when a STRONG signal is given.', 'Allow')
            : (Icons.notifications_active_rounded, _up, 'Signal alerts are ON: only STRONG BUY or SELL signals (all 5 confirmations), built for a 15–30 minute expiry, '
                'while NGMY is open or in the background.', null);
    return Container(
      margin: const EdgeInsets.only(bottom: 12),
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: c.withValues(alpha: 0.12),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: c.withValues(alpha: 0.45)),
      ),
      child: Row(children: [
        Icon(icon, color: c),
        const SizedBox(width: 10),
        Expanded(child: Text(text, style: TextStyle(color: p.ink, fontSize: 12, height: 1.35))),
        if (button != null) ...[
          const SizedBox(width: 8),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: c, padding: const EdgeInsets.symmetric(horizontal: 12)),
            onPressed: () async {
              if (!unlocked) {
                _tabs.animateTo(0);
              } else {
                final ok = await ngmyPushRequestPermission();
                if (mounted) setState(() => _pushOk = ok);
                NgmySignalAlerts.recheck();
              }
            },
            child: Text(button, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
          ),
        ],
      ]),
    );
  }


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

/// A lesson with a 10-question quiz.
/// Members: a wrong answer gets ONE more try. Wrong twice and that question locks for 5 minutes, then a
/// different question (with different answers) takes its place. Admins can always try again.
/// The quiz state is saved with the lesson progress, so closing the app does not reset a lock.
class _LessonPage extends StatefulWidget {
  const _LessonPage({
    required this.lesson,
    required this.number,
    required this.live,
    required this.isAdmin,
    required this.done,
    required this.state,
    required this.onState,
    required this.onDone,
    required this.onAsk,
  });
  final _Lesson lesson;
  final int number;
  final Widget Function() live;
  final bool isAdmin;
  final bool done;
  final Map<String, dynamic> state; // {slots, right, tries, locks, used}
  final void Function(Map<String, dynamic> state) onState;
  final VoidCallback onDone;
  final void Function(String question) onAsk;

  @override
  State<_LessonPage> createState() => _LessonPageState();
}

class _LessonPageState extends State<_LessonPage> {
  static const _quizSize = 10;
  static const _lockFor = Duration(minutes: 5);

  late List<_Quiz> _qs;
  late List<int> _slots; // which bank question sits in each of the 10 places
  late Set<int> _right; // bank questions answered right
  late Map<int, int> _tries; // wrong answers per bank question
  late Map<int, int> _locks; // bank question -> locked until (ms since epoch)
  late List<int> _used; // every bank question shown so far
  final _lastWrong = <int, int>{}; // bank question -> the option index picked wrong (shown in red)
  Timer? _tick;

  @override
  void initState() {
    super.initState();
    _qs = _bank[widget.lesson.id] ?? widget.lesson.quiz;
    final s = widget.state;
    List<int> ints(dynamic v) => ((v as List?) ?? const []).map((e) => int.tryParse('$e') ?? 0).toList();
    Map<int, int> intMap(dynamic v) =>
        ((v as Map?) ?? const {}).map((k, val) => MapEntry(int.tryParse('$k') ?? 0, int.tryParse('$val') ?? 0));
    _slots = ints(s['slots']).where((i) => i >= 0 && i < _qs.length).toList();
    if (_slots.length != math.min(_quizSize, _qs.length)) {
      final order = List<int>.generate(_qs.length, (i) => i)..shuffle(math.Random());
      _slots = order.take(math.min(_quizSize, _qs.length)).toList();
    }
    _right = ints(s['right']).toSet();
    _tries = intMap(s['tries']);
    _locks = intMap(s['locks']);
    _used = ints(s['used']);
    for (final b in _slots) {
      if (!_used.contains(b)) _used.add(b);
    }
    _swapExpired(save: false);
    _tick = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!mounted) return;
      if (_locks.isNotEmpty) setState(() => _swapExpired());
    });
  }

  @override
  void dispose() {
    _tick?.cancel();
    super.dispose();
  }

  void _save() => widget.onState({
        'slots': _slots,
        'right': _right.toList(),
        'tries': _tries.map((k, v) => MapEntry('$k', v)),
        'locks': _locks.map((k, v) => MapEntry('$k', v)),
        'used': _used,
      });

  /// When a lock runs out, that place gets a question the member has not seen yet
  /// (or, once all were seen, one that is not on screen now).
  void _swapExpired({bool save = true}) {
    final now = DateTime.now().millisecondsSinceEpoch;
    var changed = false;
    for (var i = 0; i < _slots.length; i++) {
      final b = _slots[i];
      final until = _locks[b];
      if (until == null || until > now) continue;
      final fresh = List<int>.generate(_qs.length, (x) => x).where((x) => !_used.contains(x) && !_slots.contains(x)).toList();
      final pool = fresh.isNotEmpty
          ? fresh
          : List<int>.generate(_qs.length, (x) => x).where((x) => !_slots.contains(x) && !_right.contains(x)).toList();
      final next = pool.isEmpty ? b : pool[math.Random().nextInt(pool.length)];
      _locks.remove(b);
      _tries.remove(b);
      _lastWrong.remove(b);
      _slots[i] = next;
      if (!_used.contains(next)) _used.add(next);
      changed = true;
    }
    if (changed && save) _save();
  }

  /// Answer order changes per question, so the right answer is not always in the same place.
  List<int> _order(int b) => List<int>.generate(_qs[b].options.length, (i) => i)..shuffle(math.Random(b * 7919 + _used.length));

  void _answer(int b, int option) {
    if (_right.contains(b) || _locks.containsKey(b)) return;
    setState(() {
      if (option == _qs[b].answer) {
        _right.add(b);
        _lastWrong.remove(b);
      } else {
        _lastWrong[b] = option;
        final t = (_tries[b] ?? 0) + 1;
        _tries[b] = t;
        if (!widget.isAdmin && t >= 2) {
          _locks[b] = DateTime.now().add(_lockFor).millisecondsSinceEpoch;
        }
      }
    });
    _save();
  }

  @override
  Widget build(BuildContext context) {
    final p = _Pal(Theme.of(context).brightness == Brightness.light);
    final l = widget.lesson;
    final rightNow = _slots.where(_right.contains).length;
    final allRight = rightNow == _slots.length;
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
            Row(children: [
              Text('Quiz', style: TextStyle(color: p.ink, fontSize: 16, fontWeight: FontWeight.w800)),
              const Spacer(),
              Text('$rightNow of ${_slots.length} right', style: TextStyle(color: allRight ? _up : p.muted, fontWeight: FontWeight.w800, fontSize: 12.5)),
            ]),
            const SizedBox(height: 6),
            ClipRRect(
              borderRadius: BorderRadius.circular(9),
              child: LinearProgressIndicator(
                value: _slots.isEmpty ? 0 : rightNow / _slots.length,
                minHeight: 7,
                backgroundColor: p.chip,
                valueColor: const AlwaysStoppedAnimation(_up),
              ),
            ),
            const SizedBox(height: 8),
            Text(
              widget.isAdmin
                  ? 'Admin: you can retry any question.'
                  : 'Get all 10 right to finish. A wrong answer gets one more try; wrong twice and that question locks for 5 minutes, then a new question takes its place.',
              style: TextStyle(color: p.muted, fontSize: 11.8, height: 1.35),
            ),
            const SizedBox(height: 10),
            for (var i = 0; i < _slots.length; i++) _quiz(p, i, _slots[i]),
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
                    backgroundColor: allRight || widget.done ? _up : p.muted,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
                  ),
                  onPressed: allRight || widget.done
                      ? () {
                          widget.onDone();
                          Navigator.maybePop(context);
                        }
                      : null,
                  icon: const Icon(Icons.check_rounded, size: 18),
                  label: Text(allRight || widget.done ? 'Finish lesson' : '$rightNow of ${_slots.length} right',
                      style: const TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
            ]),
          ]),
        ),
      ),
    );
  }

  Widget _quiz(_Pal p, int place, int b) {
    final q = _qs[b];
    final right = _right.contains(b);
    final until = _locks[b];
    final locked = until != null;
    final tries = _tries[b] ?? 0;
    final wrongPick = _lastWrong[b];
    if (locked) {
      final left = Duration(milliseconds: math.max(0, until - DateTime.now().millisecondsSinceEpoch));
      final mm = left.inMinutes, ss = (left.inSeconds % 60).toString().padLeft(2, '0');
      return Container(
        margin: const EdgeInsets.only(bottom: 10),
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: p.inner, borderRadius: BorderRadius.circular(20), border: Border.all(color: _loss.withValues(alpha: 0.4))),
        child: Row(children: [
          const Icon(Icons.lock_clock_rounded, color: _loss),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Question ${place + 1} is locked', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
              Text('Wrong twice. Re-read the lesson; a new question appears in $mm:$ss.',
                  style: TextStyle(color: p.muted, fontSize: 12.5, height: 1.35)),
            ]),
          ),
        ]),
      );
    }
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: p.card,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: right ? _up.withValues(alpha: 0.6) : p.cardEdge, width: right ? 1.5 : 1),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text('${place + 1}. ${q.q}', style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 14)),
        const SizedBox(height: 8),
        for (final oi in _order(b))
          GestureDetector(
            onTap: right ? null : () => _answer(b, oi),
            child: Container(
              margin: const EdgeInsets.only(bottom: 6),
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(
                color: right && oi == q.answer
                    ? _up.withValues(alpha: 0.14)
                    : wrongPick == oi
                        ? _loss.withValues(alpha: 0.12)
                        : p.inner,
                borderRadius: BorderRadius.circular(14),
                border: Border.all(color: right && oi == q.answer ? _up : wrongPick == oi ? _loss : Colors.transparent),
              ),
              child: Row(children: [
                Expanded(child: Text(q.options[oi], style: TextStyle(color: p.ink, fontSize: 13.5))),
                if (right && oi == q.answer) const Icon(Icons.check_circle_rounded, color: _up, size: 18),
                if (!right && wrongPick == oi) const Icon(Icons.cancel_rounded, color: _loss, size: 18),
              ]),
            ),
          ),
        if (right)
          Text('Right! ${q.why}', style: const TextStyle(color: _up, fontSize: 12.5, fontWeight: FontWeight.w700))
        else if (tries == 1 && !widget.isAdmin)
          const Text('Wrong. You have one more try.', style: TextStyle(color: _loss, fontSize: 12.5, fontWeight: FontWeight.w700))
        else if (tries >= 1)
          const Text('Not quite. Try again.', style: TextStyle(color: _loss, fontSize: 12.5, fontWeight: FontWeight.w700)),
      ]),
    );
  }
}
