import 'package:flutter/material.dart';

import 'ngmy_stripe_payments.dart';

/// QR Code Generator — create & save free; download / templates need Stripe.
class NgmyQrGeneratorPayments {
  /// Unpaid template previews encode this site instead of the user's payload.
  static const String unpaidTemplatePayload = 'https://ngmy.org';

  static Future<bool> hasAccess({
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final clean = email.trim();
    if (clean.isEmpty) return false;
    return NgmyStripePayments.hasActiveAccess(
      clean,
      NgmyStripeProduct.qrGenerator,
    );
  }

  static Future<bool> ensureAccess({
    required BuildContext context,
    required String email,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    final clean = email.trim();
    if (clean.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign in to continue.')),
        );
      }
      return false;
    }
    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.qrGenerator,
      email: clean,
      isAdmin: isAdmin,
    );
  }

  /// Template QR data: real payload when paid, otherwise ngmy.org.
  static String templatePayload(String realPayload, {required bool paid}) {
    if (paid) return realPayload;
    return unpaidTemplatePayload;
  }
}
