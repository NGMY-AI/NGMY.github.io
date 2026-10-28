import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electrical_diagram_page.dart';
import 'package:ngmy/ngmy_electrical_safety.dart';

void main() {
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
    await t.tap(find.text('Submit the test'));
    await t.pump();
    expect(find.textContaining('not passed'), findsOneWidget);
  });
}
