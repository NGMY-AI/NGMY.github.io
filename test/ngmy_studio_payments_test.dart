import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bio_models.dart';
import 'package:ngmy/ngmy_bio_templates.dart';
import 'package:ngmy/ngmy_business_card_models.dart';
import 'package:ngmy/ngmy_business_card_payments.dart';
import 'package:ngmy/ngmy_stripe_payments.dart';
import 'package:ngmy/ngmy_studio_payments.dart';

void main() {
  test('Menu Studio is a \$15.99 monthly Stripe product', () {
    expect(
      NgmyStripePayments.productSlug(NgmyStripeProduct.menuStudio),
      'menu_studio',
    );
    expect(NgmyStripePayments.priceCents(NgmyStripeProduct.menuStudio), 1599);
    expect(
      NgmyStripePayments.durationLabel(NgmyStripeProduct.menuStudio),
      '30 days',
    );
    expect(
      NgmyStripePayments.isSubscribeProduct(NgmyStripeProduct.menuStudio),
      isTrue,
    );
    expect(
      NgmyStripePayments.checkoutUrl(NgmyStripeProduct.menuStudio),
      startsWith('https://buy.stripe.com/'),
    );
  });

  test('Bio Studio is a \$3.99 monthly Stripe product', () {
    expect(
      NgmyStripePayments.productSlug(NgmyStripeProduct.bioStudio),
      'bio_studio',
    );
    expect(NgmyStripePayments.priceCents(NgmyStripeProduct.bioStudio), 399);
    expect(
      NgmyStripePayments.durationLabel(NgmyStripeProduct.bioStudio),
      '30 days',
    );
    expect(
      NgmyStripePayments.isSubscribeProduct(NgmyStripeProduct.bioStudio),
      isTrue,
    );
    expect(
      NgmyStripePayments.checkoutUrl(NgmyStripeProduct.bioStudio),
      startsWith('https://buy.stripe.com/'),
    );
  });

  test('only the first Bio template is free', () {
    expect(NgmyStudioPayments.freeBioTemplateId, kNgmyBioTemplates.first.id);
    expect(
      NgmyStudioPayments.isFreeBioTemplate(kNgmyBioTemplates.first.id),
      isTrue,
    );
    expect(
      NgmyStudioPayments.isFreeBioTemplate(kNgmyBioTemplates[1].id),
      isFalse,
    );
  });

  test('initial Bio photo and two changes are free', () {
    expect(NgmyStudioPayments.freeBioAvatarSelections, 3);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(0), isTrue);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(1), isTrue);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(2), isTrue);
    expect(NgmyStudioPayments.freeBioAvatarSelectionAvailable(3), isFalse);
  });

  test(
    'new Bio display name starts as a placeholder, not editable sample text',
    () {
      expect(ngmyBioBlankDocument().displayName, isEmpty);
    },
  );

  test('Business Card is a scoped \$3.99 two-day one-time purchase', () {
    final doc = NgmyBusinessCardDocument(id: 'card_123');
    expect(
      NgmyStripePayments.productSlug(NgmyStripeProduct.businessCard),
      'business_card',
    );
    expect(NgmyStripePayments.priceCents(NgmyStripeProduct.businessCard), 399);
    expect(
      NgmyStripePayments.durationLabel(NgmyStripeProduct.businessCard),
      '2 days',
    );
    expect(
      NgmyStripePayments.isOneTimePayProduct(NgmyStripeProduct.businessCard),
      isTrue,
    );
    expect(NgmyBusinessCardPayments.scopeFor(doc), 'card_123');
    final now = DateTime.utc(2026, 8, 6);
    expect(
      NgmyBusinessCardPayments.accessFromUntil(null, now: now),
      NgmyBusinessCardAccess.neverPurchased,
    );
    expect(
      NgmyBusinessCardPayments.accessFromUntil(
        now.add(const Duration(days: 2)),
        now: now,
      ),
      NgmyBusinessCardAccess.active,
    );
    expect(
      NgmyBusinessCardPayments.accessFromUntil(
        now.subtract(const Duration(seconds: 1)),
        now: now,
      ),
      NgmyBusinessCardAccess.expired,
    );

    final reference = NgmyStripePayments.checkoutReference(
      'buyer@example.com',
      NgmyStripeProduct.businessCard,
      scope: NgmyBusinessCardPayments.scopeFor(doc),
    );
    final parts = reference.split('--');
    expect(parts, hasLength(3));
    expect(
      utf8.decode(base64Url.decode(base64Url.normalize(parts[2]))),
      'card_123',
    );
  });
}
