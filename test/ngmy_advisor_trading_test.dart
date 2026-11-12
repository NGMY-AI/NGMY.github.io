import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_trading_academy.dart';
import 'package:ngmy/ngmy_advisor_trading_knowledge.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('the shapes are found on the candles', () {
    // A red candle followed by a bigger green one that swallows it.
    final c = <Candle>[
      for (var i = 0; i < 12; i++) [i * 1.0, 10, 11, 9, 10],
      [12, 10, 10.2, 9, 9.2],
      [13, 9, 11.5, 8.8, 11],
    ];
    expect(detectPatterns(c, 13), contains('bullEngulf'));
    // A hammer: a small body on top and a long lower wick.
    final h = <Candle>[for (var i = 0; i < 12; i++) [i * 1.0, 10, 11, 9, 10], [12, 9.8, 10.15, 8, 10.1]];
    expect(detectPatterns(h, 12), contains('hammer'));
  });

  test('studying counts each candle once, so a top-up never counts the same candles twice', () {
    final k = AdvisorTradingKnowledge('Anna');
    final c = practiceCandles(1);
    final first = k.study('X|300', c);
    expect(first, greaterThan(20));
    final samples = k.samples;
    expect(k.study('X|300', c), 0, reason: 'the same candles again add nothing');
    expect(k.samples, samples);
    // New candles after the old ones: only those are counted.
    final more = practiceCandles(1, n: 300);
    expect(k.study('X|300', more), greaterThan(0));
    expect(k.samples, greaterThan(samples));
  });

  test('what an advisor learned is saved and comes back, and is kept per advisor', () async {
    final k = AdvisorTradingKnowledge('Mariam Dusabe');
    k.study('BTC|300', practiceCandles(5));
    k
      ..learned = true
      ..lastRefreshDay = k.today;
    await k.save();
    final again = await AdvisorTradingKnowledge.load('Mariam Dusabe');
    expect(again.learned, isTrue);
    expect(again.samples, k.samples);
    expect(again.lastSeen, isNotEmpty);
    final other = await AdvisorTradingKnowledge.load('Someone Else');
    expect(other.learned, isFalse, reason: 'each advisor learns for itself');
  });

  test('a demo trade on the past is judged by what the next candles did', () {
    final k = AdvisorTradingKnowledge('Anna');
    for (var s = 1; s <= 4; s++) {
      k.study('M$s|300', practiceCandles(s));
    }
    final c = practiceCandles(9);
    var trades = 0;
    for (var i = 14; i + kLookAhead < c.length; i++) {
      final r = k.demoOn(c, i, 'M');
      if (r != null) trades++;
    }
    expect(k.demoTrades, trades);
    expect(k.demoWins, lessThanOrEqualTo(trades));
  });

  testWidgets('the academy: lessons first, then the advisor studies and saves; the next time it does not learn again', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    academyCandlesHook = (m, tf) async => (candles: practiceCandles(m.hashCode & 255 + tf), real: false);
    addTearDown(() => academyCandlesHook = null);
    await t.pumpWidget(const MaterialApp(home: NgmyAdvisorTradingAcademy(advisorName: 'Anna Amuri')));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.text('LEARNING TO READ CANDLES'), findsOneWidget);
    for (var i = 0; i < 5; i++) {
      await t.tap(find.byKey(const Key('academy-next')));
      await t.pump(const Duration(milliseconds: 100));
    }
    expect(find.byKey(const Key('academy-learn')), findsOneWidget);
    await t.ensureVisible(find.byKey(const Key('academy-learn')));
    await t.tap(find.byKey(const Key('academy-learn')));
    for (var i = 0; i < 400; i++) {
      await t.pump(const Duration(milliseconds: 100));
      if (find.text('Topped up').evaluate().isNotEmpty) break;
    }
    await t.pump(const Duration(seconds: 1));
    final saved = await AdvisorTradingKnowledge.load('Anna Amuri');
    expect(saved.learned, isTrue, reason: 'what it learned is saved');
    expect(saved.samples, greaterThan(50));
    // Open again: it knows already and shows no lessons.
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(const MaterialApp(home: NgmyAdvisorTradingAcademy(advisorName: 'Anna Amuri')));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.text('LEARNING TO READ CANDLES'), findsNothing);
    expect(find.text('ANNA AMURI KNOWS THE CANDLES'), findsNothing);
    expect(find.textContaining('KNOWS THE CANDLES'), findsOneWidget);
    await t.pump(const Duration(seconds: 3));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });
}
