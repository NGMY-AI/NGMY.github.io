import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_stripe_payments.dart';

/// QR Code Generator — 2 free saves, then create/edit lock; download / templates need Stripe.
class NgmyQrGeneratorPayments {
  /// Unpaid template previews encode this site instead of the user's payload.
  static const String unpaidTemplatePayload = 'https://ngmy.org';

  /// How many QR codes an unpaid user may save before the generator locks.
  static const int freeSaveLimit = 2;

  static const _freeSavesPrefix = 'ngmy_qr_free_saves_used_';

  static String _key(String email) {
    final clean = email.toLowerCase().trim();
    return clean.isEmpty ? 'device' : clean;
  }

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

  static Future<int> freeSavesUsed(String email) async {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getInt('$_freeSavesPrefix${_key(email)}') ?? 0;
  }

  static Future<void> recordFreeSave(String email) async {
    final prefs = await SharedPreferences.getInstance();
    final key = '$_freeSavesPrefix${_key(email)}';
    final used = prefs.getInt(key) ?? 0;
    await prefs.setInt(key, used + 1);
  }

  static Future<bool> canSaveWithoutPaying({
    required String email,
    bool isAdmin = false,
  }) async {
    if (await hasAccess(email: email, isAdmin: isAdmin)) return true;
    return (await freeSavesUsed(email)) < freeSaveLimit;
  }

  /// True when unpaid free saves are used up — create/edit stays locked.
  static Future<bool> isCreateLocked({
    required String email,
    bool isAdmin = false,
  }) async {
    if (await hasAccess(email: email, isAdmin: isAdmin)) return false;
    return (await freeSavesUsed(email)) >= freeSaveLimit;
  }

  /// Template QR data: real payload when paid, otherwise ngmy.org.
  static String templatePayload(String realPayload, {required bool paid}) {
    if (paid) return realPayload;
    return unpaidTemplatePayload;
  }
}
