import 'package:flutter/material.dart';

import 'ngmy_stripe_payments.dart';

/// QR Code Generator — Stripe weekly access (admins free).
class NgmyQrGeneratorPayments {
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
          const SnackBar(content: Text('Sign in to use QR Generator.')),
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
}
