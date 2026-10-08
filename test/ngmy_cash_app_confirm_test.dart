import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_house_insurance.dart';

void main() {
  testWidgets('cash app confirm dialog asks and records a sent payment', (tester) async {
    tester.view.physicalSize = const Size(320, 568);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);

    bool? result;
    await tester.pumpWidget(
      MaterialApp(
        theme: ThemeData(brightness: Brightness.dark),
        home: Builder(
          builder: (context) => TextButton(
            onPressed: () async {
              result = await showNgmyCashAppPaymentConfirm(
                context,
                amountText: '50',
                cashAppTag: r'$NGMYpay',
              );
            },
            child: const Text('open'),
          ),
        ),
      ),
    );

    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();

    expect(tester.takeException(), isNull);
    expect(find.text('Did you send it on Cash App?'), findsOneWidget);
    expect(find.text(r'$50'), findsOneWidget);
    expect(find.text(r'to $NGMYpay'), findsOneWidget);

    await tester.tap(find.text(r'I sent $50'));
    await tester.pumpAndSettle();
    expect(result, isTrue);
  });

  testWidgets('cash app confirm dialog stays off when they have not sent it', (tester) async {
    await tester.pumpWidget(
      MaterialApp(
        home: Builder(
          builder: (context) => TextButton(
            onPressed: () => showNgmyCashAppPaymentConfirm(
              context,
              amountText: '50',
              cashAppTag: r'$NGMYpay',
            ),
            child: const Text('open'),
          ),
        ),
      ),
    );

    await tester.tap(find.text('open'));
    await tester.pumpAndSettle();
    await tester.tap(find.text('Not yet'));
    await tester.pumpAndSettle();
    expect(find.text('Did you send it on Cash App?'), findsNothing);
  });
}
