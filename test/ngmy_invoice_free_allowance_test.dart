import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_invoice_payments.dart';
import 'package:ngmy/ngmy_stripe_payments.dart';
import 'package:shared_preferences/shared_preferences.dart';

class _FakeInvoiceConfig {
  bool invoicePremiumAllowOneTime = true;
  bool invoicePremiumAllowMonthly = true;
  bool invoiceLuxuryAllowOneTime = true;
  bool invoiceLuxuryAllowMonthly = true;
  double invoicePremiumOneTimeFee = 9.99;
  double invoicePremiumMonthlyFee = 12.99;
  double invoiceLuxuryOneTimeFee = 19.99;
  double invoiceLuxuryMonthlyFee = 24.99;
  List<String> invoicePremiumLifetimeEmails = [];
  List<String> invoiceLuxuryLifetimeEmails = [];
  Map<String, String> invoicePremiumAccessUntilByEmail = {};
  Map<String, String> invoiceLuxuryAccessUntilByEmail = {};
}

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  const email = 'creator@example.com';
  late _FakeInvoiceConfig config;

  String standardRef(String client) => NgmyInvoicePayments.invoiceRef(
        templateId: 'modern',
        invoiceNo: '1',
        business: 'NGMY Studio',
        clientName: client,
        item: 'Design work',
        itemPrice: '250',
      );

  String luxuryRef(String client) => NgmyInvoicePayments.invoiceRef(
        templateId: 'champagne_noir',
        invoiceNo: '1',
        business: 'NGMY Studio',
        clientName: client,
        item: 'Design work',
        itemPrice: '250',
      );

  setUp(() {
    SharedPreferences.setMockInitialValues({});
    config = _FakeInvoiceConfig();
  });

  test('the first three Standard invoices are free and the fourth is not', () async {
    expect(await NgmyStripePayments.invoiceFreeLeft(email), 3);

    expect(await NgmyStripePayments.claimInvoiceFree(email, standardRef('Ana')), isTrue);
    expect(await NgmyStripePayments.claimInvoiceFree(email, standardRef('Ben')), isTrue);
    expect(await NgmyStripePayments.claimInvoiceFree(email, standardRef('Cara')), isTrue);
    expect(await NgmyStripePayments.invoiceFreeLeft(email), 0);

    expect(await NgmyStripePayments.claimInvoiceFree(email, standardRef('Dane')), isFalse);
  });

  test('saving then downloading the same Standard invoice spends only one', () async {
    final ref = standardRef('Ana');
    expect(await NgmyStripePayments.claimInvoiceFree(email, ref), isTrue);
    expect(await NgmyStripePayments.claimInvoiceFree(email, ref), isTrue);
    expect(await NgmyStripePayments.invoiceFreeUsed(email), 1);
  });

  test('Premium and Luxury stay locked even when free Standard invoices remain', () async {
    expect(await NgmyStripePayments.invoiceFreeLeft(email), 3);

    expect(
      await NgmyInvoicePayments.isContentLocked(
        config,
        email,
        'champagne_noir',
        invoiceRef: luxuryRef('Ana'),
      ),
      isTrue,
    );
    expect(
      await NgmyInvoicePayments.isContentLocked(
        config,
        email,
        'corporate',
        invoiceRef: NgmyInvoicePayments.invoiceRef(
          templateId: 'corporate',
          invoiceNo: '1',
          business: 'NGMY',
          clientName: 'Ana',
          item: 'Work',
          itemPrice: '10',
        ),
      ),
      isTrue,
    );
  });

  test('Standard templates are never content-locked by the free allowance', () async {
    expect(
      await NgmyInvoicePayments.isContentLocked(
        config,
        email,
        'modern',
        invoiceRef: standardRef('Ana'),
      ),
      isFalse,
    );
  });

  test('paid templates require payment regardless of free Standard exports left', () {
    expect(NgmyInvoicePayments.requiresPayment('champagne_noir', config), isTrue);
    expect(NgmyInvoicePayments.requiresPayment('corporate', config), isTrue);
    expect(NgmyInvoicePayments.requiresPayment('modern', config), isFalse);
    expect(NgmyInvoicePayments.hasAccess(config, email, 'champagne_noir'), isFalse);
  });

  test('the allowance is per account', () async {
    await NgmyStripePayments.claimInvoiceFree(email, standardRef('Ana'));
    await NgmyStripePayments.claimInvoiceFree(email, standardRef('Ben'));
    await NgmyStripePayments.claimInvoiceFree(email, standardRef('Cara'));

    expect(await NgmyStripePayments.invoiceFreeLeft('someone.else@example.com'), 3);
  });

  test('checking the lock never spends part of the allowance', () async {
    for (var i = 0; i < 5; i++) {
      expect(await NgmyStripePayments.hasInvoiceFreeLeft(email, standardRef('Ana')), isTrue);
    }
    expect(await NgmyStripePayments.invoiceFreeUsed(email), 0);
  });

  test('a saved invoice resolves to the same reference as the form it came from', () {
    final fromEntry = NgmyInvoicePayments.invoiceRefFromEntry({
      'template': 'modern',
      'invoiceNo': '1',
      'business': 'NGMY Studio',
      'clientName': 'Ana',
      'item': 'Design work',
      'itemPrice': '250',
    });
    expect(fromEntry, standardRef('Ana'));
  });
}
