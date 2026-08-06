import 'package:flutter/material.dart';

import 'ngmy_business_card_models.dart';
import 'ngmy_stripe_payments.dart';

enum NgmyBusinessCardAccess { neverPurchased, active, expired }

abstract final class NgmyBusinessCardPayments {
  static const int priceCents = 399;
  static const Duration editWindow = Duration(days: 2);

  /// Billing follows the saved card's stable ID. Its chosen template and edits
  /// remain part of that one card; opening/creating another card has another ID.
  static String scopeFor(NgmyBusinessCardDocument doc) => doc.id;

  static NgmyBusinessCardAccess accessFromUntil(
    DateTime? until, {
    DateTime? now,
  }) {
    if (until == null) return NgmyBusinessCardAccess.neverPurchased;
    return until.isAfter(now ?? DateTime.now())
        ? NgmyBusinessCardAccess.active
        : NgmyBusinessCardAccess.expired;
  }

  static Future<NgmyBusinessCardAccess> accessFor({
    required String email,
    required NgmyBusinessCardDocument document,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return NgmyBusinessCardAccess.active;
    final until = await NgmyStripePayments.scopedAccessUntil(
      email,
      NgmyStripeProduct.businessCard,
      scopeFor(document),
    );
    return accessFromUntil(until);
  }

  static Future<bool> ensureDownloadAccess({
    required BuildContext context,
    required String email,
    required NgmyBusinessCardDocument document,
    bool isAdmin = false,
  }) {
    return NgmyStripePayments.ensureScopedPaid(
      context: context,
      product: NgmyStripeProduct.businessCard,
      email: email,
      scope: scopeFor(document),
      isAdmin: isAdmin,
      title: document.template.name,
      message:
          'Pay once to edit and download this card for 2 days. '
          'Every other card requires its own purchase.',
    );
  }
}
