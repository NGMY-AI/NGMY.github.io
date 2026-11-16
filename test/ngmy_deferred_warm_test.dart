import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_deferred.dart';

// Menus that are their own download are loaded in the background after the home screen opens, so they open at once
// instead of showing a loading circle the first time after every start of the app.

void main() {
  test('every part is loaded in order, and one that fails does not stop the rest', () async {
    final done = <String>[];
    Future<void> a() async => done.add('a');
    Future<void> bad() async => throw Exception('offline');
    Future<void> c() async => done.add('c');
    await ngmyWarmDeferred([a, bad, c], gap: Duration.zero);
    expect(done, ['a', 'c']);
  });

  testWidgets('a menu loaded in the background opens with no loading circle', (tester) async {
    Future<void> load() async {}
    await tester.runAsync(() => ngmyWarmDeferred([load], gap: Duration.zero));
    await tester.pumpWidget(MaterialApp(home: NgmyDeferred(load: load, build: () => const Text('menu'))));
    expect(find.text('menu'), findsOneWidget);
    expect(find.byType(CircularProgressIndicator), findsNothing);
  });
}
