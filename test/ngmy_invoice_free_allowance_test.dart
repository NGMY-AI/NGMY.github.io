import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_invoice_payments.dart';
import 'package:ngmy/ngmy_stripe_payments.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  const email = 'creator@example.com';

  String refFor(String client) => NgmyInvoicePayments.invoiceRef(
        templateId: 'luxury_gold',
        invoiceNo: '1',
        business: 'NGMY Studio',
        clientName: client,
        item: 'Design work',
        itemPrice: '250',
      );

  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('the first three invoices are free and the fourth is not', () async {
    expect(await NgmyStripePayments.invoiceFreeLeft(email), 3);

    expect(await NgmyStripePayments.claimInvoiceFree(email, refFor('Ana')), isTrue);
    expect(await NgmyStripePayments.claimInvoiceFree(email, refFor('Ben')), isTrue);
    expect(await NgmyStripePayments.claimInvoiceFree(email, refFor('Cara')), isTrue);
    expect(await NgmyStripePayments.invoiceFreeLeft(email), 0);

    expect(await NgmyStripePayments.claimInvoiceFree(email, refFor('Dane')), isFalse);
  });

  test('saving then downloading the same invoice spends only one', () async {
    final ref = refFor('Ana');
    expect(await NgmyStripePayments.claimInvoiceFree(email, ref), isTrue);
    expect(await NgmyStripePayments.claimInvoiceFree(email, ref), isTrue);
    expect(await NgmyStripePayments.invoiceFreeUsed(email), 1);
  });

  test('an invoice already paid for stays free once the allowance runs out', () async {
    final reopened = refFor('Ana');
    await NgmyStripePayments.claimInvoiceFree(email, reopened);
    await NgmyStripePayments.claimInvoiceFree(email, refFor('Ben'));
    await NgmyStripePayments.claimInvoiceFree(email, refFor('Cara'));

    expect(await NgmyStripePayments.claimInvoiceFree(email, refFor('Dane')), isFalse);
    expect(await NgmyStripePayments.claimInvoiceFree(email, reopened), isTrue);
  });

  test('the allowance is per account', () async {
    await NgmyStripePayments.claimInvoiceFree(email, refFor('Ana'));
    await NgmyStripePayments.claimInvoiceFree(email, refFor('Ben'));
    await NgmyStripePayments.claimInvoiceFree(email, refFor('Cara'));

    expect(await NgmyStripePayments.invoiceFreeLeft('someone.else@example.com'), 3);
  });

  test('checking the lock never spends part of the allowance', () async {
    for (var i = 0; i < 5; i++) {
      expect(await NgmyStripePayments.hasInvoiceFreeLeft(email, refFor('Ana')), isTrue);
    }
    expect(await NgmyStripePayments.invoiceFreeUsed(email), 0);
  });

  test('an invoice is identified by its content, not by when it was opened', () {
    expect(refFor('Ana'), refFor('Ana'));
    expect(refFor('Ana'), isNot(refFor('Ben')));
  });

  test('a saved invoice resolves to the same reference as the form it came from', () {
    final fromEntry = NgmyInvoicePayments.invoiceRefFromEntry({
      'template': 'luxury_gold',
      'invoiceNo': '1',
      'business': 'NGMY Studio',
      'clientName': 'Ana',
      'item': 'Design work',
      'itemPrice': '250',
    });
    expect(fromEntry, refFor('Ana'));
  });
}
