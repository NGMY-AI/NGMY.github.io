import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_templates.dart';
import 'package:ngmy/ngmy_stripe_payments.dart';
import 'package:ngmy/ngmy_studio_payments.dart';

void main() {
  test('Menu Studio is a \$15.99 monthly Stripe product', () {
    expect(NgmyStripePayments.productSlug(NgmyStripeProduct.menuStudio), 'menu_studio');
    expect(NgmyStripePayments.priceCents(NgmyStripeProduct.menuStudio), 1599);
    expect(NgmyStripePayments.durationLabel(NgmyStripeProduct.menuStudio), '30 days');
    expect(NgmyStripePayments.isSubscribeProduct(NgmyStripeProduct.menuStudio), isTrue);
    expect(NgmyStripePayments.checkoutUrl(NgmyStripeProduct.menuStudio), startsWith('https://buy.stripe.com/'));
  });

  test('Bio Studio is a \$3.99 monthly Stripe product', () {
    expect(NgmyStripePayments.productSlug(NgmyStripeProduct.bioStudio), 'bio_studio');
    expect(NgmyStripePayments.priceCents(NgmyStripeProduct.bioStudio), 399);
    expect(NgmyStripePayments.durationLabel(NgmyStripeProduct.bioStudio), '30 days');
    expect(NgmyStripePayments.isSubscribeProduct(NgmyStripeProduct.bioStudio), isTrue);
    expect(NgmyStripePayments.checkoutUrl(NgmyStripeProduct.bioStudio), startsWith('https://buy.stripe.com/'));
  });

  test('only the first Bio template is free', () {
    expect(NgmyStudioPayments.freeBioTemplateId, kNgmyBioTemplates.first.id);
    expect(NgmyStudioPayments.isFreeBioTemplate(kNgmyBioTemplates.first.id), isTrue);
    expect(NgmyStudioPayments.isFreeBioTemplate(kNgmyBioTemplates[1].id), isFalse);
  });

  test('initial Bio photo and two changes are free', () {
    expect(NgmyStudioPayments.freeBioAvatarSelections, 3);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(0), isTrue);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(1), isTrue);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(2), isTrue);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(3), isFalse);
  });
}
