import 'package:flutter/material.dart';

import 'ngmy_stripe_payments.dart';

/// Kiswahili School — Basics free; every other level is a one-time Stripe unlock.
class NgmySwahiliPayments {
  static const String freeLevelId = 'basics';

  static bool isFreeLevel(String levelId) =>
      levelId.trim().toLowerCase() == freeLevelId;

  static Future<bool> ensureLevelAccess({
    required BuildContext context,
    required String email,
    required String levelId,
    bool isAdmin = false,
  }) async {
    if (isAdmin || isFreeLevel(levelId)) return true;
    final cleanEmail = email.trim();
    final cleanLevel = levelId.trim();
    if (cleanEmail.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign in to open this level.')),
        );
      }
      return false;
    }
    if (cleanLevel.isEmpty) return false;
    return NgmyStripePayments.ensureScopedPaid(
      context: context,
      product: NgmyStripeProduct.swahiliLevel,
      email: cleanEmail,
      scope: cleanLevel,
      isAdmin: isAdmin,
    );
  }
}
