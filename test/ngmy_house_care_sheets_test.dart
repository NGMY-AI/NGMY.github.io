import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_house_workers.dart';

Widget _host(Future<Object?> Function(BuildContext) open) => MaterialApp(
      home: Builder(builder: (context) => Scaffold(body: Center(child: ElevatedButton(onPressed: () => open(context), child: const Text('open'))))),
    );

Future<void> _open(WidgetTester tester) async {
  await tester.tap(find.text('open'));
  await tester.pump(const Duration(milliseconds: 400));
  await tester.pump(const Duration(milliseconds: 400));
}

/// The sheets call the server; wait out those calls (they fail fast with no connection here).
Future<void> _settle(WidgetTester tester) async {
  await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 600)));
  await tester.pump(const Duration(seconds: 1));
}

void main() {
  setUp(() {});

  testWidgets('House Care: pick the years, agree, sign; the button waits for the selfie', (tester) async {
    tester.view.physicalSize = const Size(430, 2600);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(_host((c) => showNgmyHouseCareSheet(
          c,
          care: const {},
          hasRegistryId: true,
          state: 'Georgia',
          clientName: 'Ayo Kim',
          clientEmail: 'ayo@example.com',
          cashAppUrl: '',
          cashAppTag: '',
        )));
    await _open(tester);
    expect(find.text('NGMY House Care'), findsOneWidget);
    for (final t in ['1 year', '2 years', '3 years', '4 years']) {
      expect(find.text(t), findsOneWidget);
    }
    expect(find.text('NGMY agreement'), findsOneWidget);
    await tester.tap(find.text('2 years'));
    await tester.pump();
    expect(find.textContaining('stay for 2 years'), findsOneWidget);
    await tester.tap(find.byType(CheckboxListTile));
    await tester.pump();
    final pad = find.byWidgetPredicate((w) => w.runtimeType.toString() == '_SignaturePad');
    await tester.drag(pad, const Offset(120, 30));
    await tester.pump();
    final button = tester.widget<ElevatedButton>(find.widgetWithText(ElevatedButton, 'Sign and continue'));
    expect(button.onPressed, isNull, reason: 'a selfie is still needed');
    expect(find.text('Take a selfie'), findsOneWidget);
    expect(tester.takeException(), isNull);
    await _settle(tester);
  });

  testWidgets('Post work: a member pays materials only, others labor and materials, and Civic Registry is required', (tester) async {
    tester.view.physicalSize = const Size(430, 2600);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await tester.pumpWidget(_host((c) => showNgmyPostWorkSheet(
          c,
          state: 'Georgia',
          clientName: 'Ayo',
          clientPhone: '7065550100',
          care: const {'active': true},
          hasRegistryId: true,
          onJoinCare: () async {},
        )));
    await _open(tester);
    expect(find.textContaining('materials only, no labor charge'), findsWidgets);
    expect(find.text('Join'), findsNothing);
    expect(tester.widget<ElevatedButton>(find.widgetWithText(ElevatedButton, 'Post work')).onPressed, isNotNull);
    Navigator.of(tester.element(find.text('Post work').first)).pop();
    await tester.pump(const Duration(milliseconds: 500));

    await tester.pumpWidget(_host((c) => showNgmyPostWorkSheet(
          c,
          state: 'Georgia',
          clientName: 'Ayo',
          clientPhone: '7065550100',
          care: const {},
          hasRegistryId: false,
          onJoinCare: () async {},
        )));
    await _open(tester);
    expect(find.textContaining('Standard work'), findsWidgets);
    expect(find.text('Join'), findsOneWidget);
    expect(find.textContaining('registered in Civic Registry'), findsWidgets);
    expect(tester.widget<ElevatedButton>(find.widgetWithText(ElevatedButton, 'Post work')).onPressed, isNull);
    expect(tester.takeException(), isNull);
  });
}
