import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electrical_diagram_page.dart';
import 'package:ngmy/ngmy_electrical_safety.dart';

void main() {
  diagramTapTests();
  test('the diagram lessons are judged by the engine: the right map is CORRECT, a swapped one is not', () {
    for (final l in kDiagramLessons) {
      expect(evaluateDiagram(l.title, l.expected, l.expected).safe, isTrue, reason: l.id);
      final swapped = Map<String, String>.from(l.expected);
      final keys = swapped.keys.toList();
      final a = swapped[keys[0]]!;
      swapped[keys[0]] = swapped[keys[1]]!;
      swapped[keys[1]] = a;
      if (swapped[keys[0]] != l.expected[keys[0]]) expect(evaluateDiagram(l.title, l.expected, swapped).safe, isFalse, reason: l.id);
    }
  });

  testWidgets('practice explains at once; test says nothing until submit', (t) async {
    await t.pumpWidget(const MaterialApp(home: NgmyElectricalDiagramPage()));
    await t.tap(find.text('Test (marked on submit)'));
    await t.pump();
    expect(find.textContaining('Right:'), findsNothing);
    await t.scrollUntilVisible(find.text('Submit the test'), 300, scrollable: find.byType(Scrollable).first);
    await t.ensureVisible(find.text('Submit the test'));
    await t.pump();
    await t.tap(find.text('Submit the test'));
    await t.pump();
    expect(find.textContaining('not passed'), findsOneWidget);
  });
}

void diagramTapTests() {
  testWidgets('pick a wire, tap where it goes: the right place is praised, a wrong one explained, and it can be taken off', (t) async {
    t.view.physicalSize = const Size(900, 2200);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyElectricalDiagramPage()));
    await t.pump();
    expect(find.text('0 of ${kDiagramLessons[0].expected.length} wires connected'), findsOneWidget);
    // Tapping a place before choosing a wire only tells you what to do.
    await t.tap(find.text('Green ground screw'));
    await t.pump();
    expect(find.textContaining('Pick a wire'), findsOneWidget);
    await t.tap(find.text('Line (from the breaker)'));
    await t.pump();
    await t.tap(find.text('Switch 1 common'));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('Right:'), findsOneWidget);
    expect(find.text('1 of ${kDiagramLessons[0].expected.length} wires connected'), findsOneWidget);
    await t.tap(find.text('Load (to the light)'));
    await t.pump();
    await t.tap(find.text('Green ground screw'));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.textContaining('Right:'), findsNothing);
    expect(find.text('2 of ${kDiagramLessons[0].expected.length} wires connected'), findsOneWidget);
    await t.tap(find.byIcon(Icons.close_rounded).first);
    await t.pump();
    expect(find.text('1 of ${kDiagramLessons[0].expected.length} wires connected'), findsOneWidget);
    // The other lesson.
    await t.tap(find.text('Ceiling fan with a light kit'));
    await t.pump();
    expect(find.text('0 of ${kDiagramLessons[1].expected.length} wires connected'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
  });
}
