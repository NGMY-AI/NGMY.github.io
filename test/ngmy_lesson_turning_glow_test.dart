import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_construction_plumbing.dart';

Scene3DView _view(WidgetTester t) => t.widget<Scene3DView>(find.byType(Scene3DView).first);

Future<void> _settle(WidgetTester t) async {
  for (var i = 0; i < 8; i++) {
    await t.pump(const Duration(milliseconds: 300));
  }
}

void main() {
  testWidgets('picking a wire turns the device to its own screws: neutral to silver, hot to brass, ground to the front', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: ElectricalLessonPage(id: 'dryer4')));
    await _settle(t);
    final cam = _view(t).cam;
    await t.tap(find.textContaining('White · neutral'));
    await _settle(t);
    expect(cam.yaw, greaterThan(0.7), reason: 'the white wire shows the silver side');
    await t.tap(find.textContaining('Red · hot 2'));
    await _settle(t);
    expect(cam.yaw, lessThan(-0.7), reason: 'a hot wire shows the brass side');
    await t.tap(find.textContaining('Bare copper'));
    await _settle(t);
    expect(cam.yaw.abs(), lessThan(0.3), reason: 'the ground wire shows the green screw in front');
    await t.tap(find.textContaining('White · neutral'));
    await _settle(t);
    expect(cam.yaw, greaterThan(0.7), reason: 'and back to silver for the neutral, not gold');
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('tap the name of a part twice and the place it goes lights up', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: FaucetLessonPage()));
    await t.pump(const Duration(milliseconds: 500));
    final before = _view(t).dynamicPolys!(1.0).length;
    expect(before, 0);
    await t.tap(find.text('Hot hose (red)'));
    await t.pump(const Duration(milliseconds: 600));
    expect(_view(t).dynamicPolys!(1.0).length, 0, reason: 'one tap only picks the hose up');
    await t.tap(find.text('Hot hose (red)'));
    await t.pump(const Duration(milliseconds: 300));
    expect(_view(t).dynamicPolys!(1.0).length, greaterThan(0), reason: 'the second tap lights up where it goes');
    await t.pump(const Duration(seconds: 7));
    expect(_view(t).dynamicPolys!(1.0).length, 0, reason: 'the light goes out by itself');
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('the drain pieces light up on a double tap too', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: PtrapLessonPage()));
    await t.pump(const Duration(milliseconds: 500));
    await t.tap(find.text('P-trap'));
    await t.pump(const Duration(milliseconds: 200));
    await t.tap(find.text('P-trap'));
    await t.pump(const Duration(milliseconds: 300));
    expect(_view(t).dynamicPolys!(1.0).length, greaterThan(0));
    await t.pump(const Duration(seconds: 7));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('the shut-off valves are turned by tapping their handles, and the water looks like a stream', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    final s = PlumbState()..attached.addAll({idValveHot: 'hot', idInletHot: 'hot', idValveCold: 'cold', idInletCold: 'cold'});
    await t.pumpWidget(MaterialApp(home: FaucetLessonPage(state: s)));
    await t.pump(const Duration(milliseconds: 500));
    expect(s.hotOpen, isFalse);
    _view(t).onPick!(idValveHot);
    await t.pump(const Duration(milliseconds: 300));
    expect(s.hotOpen, isTrue);
    expect(s.coldOpen, isFalse);
    expect(find.textContaining('hot water is flowing'), findsOneWidget);
    final oneSide = _view(t).dynamicPolys!(1.0).length;
    expect(oneSide, greaterThan(40), reason: 'a stream out of the faucet, not a few dots');
    _view(t).onPick!(idValveCold);
    await t.pump(const Duration(milliseconds: 300));
    expect(s.valvesOpen, isTrue);
    expect(find.textContaining('lesson is complete'), findsOneWidget);
    _view(t).onPick!(idValveHot);
    await t.pump(const Duration(milliseconds: 300));
    expect(s.hotOpen, isFalse);
    await t.pump(const Duration(seconds: 10));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));
  });

  testWidgets('an open valve with no hose sprays, and the sink tap runs the drain water', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: FaucetLessonPage()));
    await t.pump(const Duration(milliseconds: 500));
    _view(t).onPick!(idValveCold);
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('spraying'), findsOneWidget);
    expect(_view(t).dynamicPolys!(1.0).length, greaterThan(10));
    await t.pump(const Duration(seconds: 10));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));

    final p = PlumbState()..placed.addAll({'tail', 'trap', 'arm'})..tight.updateAll((k, v) => true);
    await t.pumpWidget(MaterialApp(home: PtrapLessonPage(state: p)));
    await t.pump(const Duration(milliseconds: 500));
    expect(p.running, isFalse);
    _view(t).onPick!(idSink);
    await t.pump(const Duration(milliseconds: 300));
    expect(p.running, isTrue);
    expect(_view(t).dynamicPolys!(1.0).length, greaterThan(40));
    _view(t).onPick!(idSink);
    await t.pump(const Duration(milliseconds: 300));
    expect(p.running, isFalse);
    await t.pump(const Duration(seconds: 10));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 10));
  });
}
