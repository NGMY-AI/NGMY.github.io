import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_browser_time.dart';
import 'package:ngmy/ngmy_stripe_payments.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  const mail = 'a@b.com';
  var now = DateTime(2026, 11, 2, 9);

  setUp(() {
    SharedPreferences.setMockInitialValues({});
    now = DateTime(2026, 11, 2, 9);
    NgmyBrowserTime.clock = () => now;
    NgmyBrowserTime.paywallTest = false;
  });
  tearDown(() {
    NgmyBrowserTime.clock = DateTime.now;
    NgmyBrowserTime.paywallTest = true;
  });

  test('10 free minutes of browser time, counted quietly, and then the payment is needed', () async {
    expect(await NgmyBrowserTime.secondsLeft(mail), 600);
    await NgmyBrowserTime.use(mail, 240);
    expect(await NgmyBrowserTime.secondsLeft(mail), 360);
    expect(await NgmyBrowserTime.hasTime(mail), isTrue);
    await NgmyBrowserTime.use(mail, 400);
    expect(await NgmyBrowserTime.hasTime(mail), isFalse, reason: 'the 10 minutes are over');
    expect(await NgmyBrowserTime.hasTime(''), isFalse);
  });

  test('a payment gives 2 hours: they are used before anything else, and what is left is still there when the person comes back', () async {
    await NgmyBrowserTime.use(mail, 600);
    expect(await NgmyBrowserTime.hasTime(mail), isFalse);
    await NgmyBrowserTime.creditPack(mail);
    expect(await NgmyBrowserTime.secondsLeft(mail), 7200);
    await NgmyBrowserTime.use(mail, 3000);
    // The browser is closed for a few days: nothing counts meanwhile.
    now = now.add(const Duration(days: 3));
    expect(await NgmyBrowserTime.secondsLeft(mail), 4200, reason: 'still there, nothing was counted while the browser was closed');
    await NgmyBrowserTime.use(mail, 4200);
    expect(await NgmyBrowserTime.hasTime(mail), isFalse, reason: 'all 2 hours used: pay again');
  });

  test('hours not used within a week are gone: the next time the person gets only 5 minutes, then the payment is asked again', () async {
    await NgmyBrowserTime.use(mail, 600);
    await NgmyBrowserTime.creditPack(mail);
    await NgmyBrowserTime.use(mail, 1000);
    now = now.add(const Duration(days: 8));
    expect(await NgmyBrowserTime.secondsLeft(mail), 300, reason: 'only 5 minutes after the week');
    await NgmyBrowserTime.use(mail, 300);
    expect(await NgmyBrowserTime.hasTime(mail), isFalse);
    // Paying again starts a new week of 2 hours.
    await NgmyBrowserTime.creditPack(mail);
    expect(await NgmyBrowserTime.secondsLeft(mail), 7200);
  });

  test('the browser pass is a card and Cash App payment of 5.99', () {
    expect(NgmyBrowserTime.price, 5.99);
    expect(NgmyStripePayments.priceCents(NgmyStripeProduct.advisorBrowser), 599);
    expect(NgmyStripePayments.productSlug(NgmyStripeProduct.advisorBrowser), NgmyBrowserTime.stripeSlug);
    expect(NgmyStripePayments.productFromSlug('advisor_browser'), NgmyStripeProduct.advisorBrowser);
    expect(NgmyStripePayments.isOneTimePayProduct(NgmyStripeProduct.advisorBrowser), isTrue);
  });
  test('test switch: no free time and admins are asked too, until the switch is turned off', () async {
    NgmyBrowserTime.paywallTest = true;
    expect(await NgmyBrowserTime.secondsLeft(mail), 0);
    expect(NgmyBrowserTime.adminExempt(true), isFalse);
    await NgmyBrowserTime.creditPack(mail);
    expect(await NgmyBrowserTime.secondsLeft(mail), 7200, reason: 'a payment still gives its 2 hours');
    NgmyBrowserTime.paywallTest = false;
    expect(NgmyBrowserTime.adminExempt(true), isTrue);
    expect(NgmyBrowserTime.adminExempt(false), isFalse);
  });
}
