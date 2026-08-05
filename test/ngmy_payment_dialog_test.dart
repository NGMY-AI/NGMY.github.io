import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_stripe_payments.dart';

/// The payment dialog is shown on every paid feature, so a layout overflow on a
/// small phone would be visible to every buyer. Renders each product at the
/// narrowest sizes we support and fails on any overflow.
void main() {
  const sizes = <Size>[
    Size(320, 568), // smallest phone still in use
    Size(360, 640),
    Size(414, 896),
  ];

  for (final product in NgmyStripeProduct.values) {
    for (final size in sizes) {
      testWidgets(
        'payment dialog lays out for ${product.name} at ${size.width.toInt()}x${size.height.toInt()}',
        (tester) async {
          tester.view.physicalSize = size;
          tester.view.devicePixelRatio = 1.0;
          addTearDown(tester.view.reset);

          await tester.pumpWidget(
            MaterialApp(
              home: Builder(
                builder: (context) => ElevatedButton(
                  onPressed: () => NgmyStripePayments.showNgmyPaymentDialog(
                    context: context,
                    product: product,
                    email: 'someone.with.a.long.address@example.com',
                  ),
                  child: const Text('open'),
                ),
              ),
            ),
          );

          await tester.tap(find.text('open'));
          await tester.pumpAndSettle();

          expect(tester.takeException(), isNull);
          expect(find.text(NgmyStripePayments.priceLabel(product)), findsOneWidget);
          expect(find.text('Maybe later'), findsOneWidget);
        },
      );
    }
  }
}
