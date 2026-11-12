import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_lab.dart';

void main() {
  testWidgets('two quick taps on a screw with no wire open a pop-up that says which wire goes there and why it is empty', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    final ws = WiringState();
    await t.pumpWidget(MaterialApp(home: ElectricalLessonPage(id: 'outlet', state: ws)));
    await t.pump(const Duration(milliseconds: 600));
    final st = t.state(find.byType(ElectricalLessonPage)) as dynamic;
    // The black wire is on the top brass screw: the bottom brass screw is a spare.
    ws.attached[idBrassTop] = 'black';
    st.pickForTest(idBrassBottom);
    await t.pump(const Duration(milliseconds: 100));
    expect(find.byKey(const Key('screw-why')), findsNothing, reason: 'one tap only looks at it');
    st.pickForTest(idBrassBottom);
    await t.pump(const Duration(milliseconds: 400));
    expect(find.byKey(const Key('screw-why')), findsOneWidget);
    expect(find.textContaining('spare'), findsOneWidget);
    expect(find.text('THE WIRE THAT GOES HERE'), findsOneWidget);
    expect(find.text('WHY IT HAS NO WIRE'), findsOneWidget);
    await t.tap(find.text('Got it'));
    await t.pump(const Duration(milliseconds: 400));
    // The silver screw has nothing at all yet: the white wire goes there.
    st.pickForTest(idSilverTop);
    st.pickForTest(idSilverTop);
    await t.pump(const Duration(milliseconds: 400));
    expect(find.textContaining('No wire is on it yet'), findsOneWidget);
    await t.tap(find.text('Got it'));
    await t.pump(const Duration(seconds: 12));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 12));
  });
}
