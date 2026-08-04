import 'package:flutter/material.dart';

import 'ngmy_local_growth_income.dart';
import 'ngmy_stripe_payments.dart';
import 'ngmy_wallet_payment_ui.dart';
import 'ngmy_worksheets_storage.dart';

/// Family tree wallet pricing and photo subscription (stored on [AppConfig] in main.dart).
class NgmyFamilyTreePayments {
  static const double defaultCreateFee = 5.0;
  static const double defaultPhotoMonthlyFee = 15.0;

  static Map<String, String> accessMapFromConfig(dynamic config) {
    final raw = (config as dynamic).familyTreePhotoAccessUntilByEmail;
    if (raw is! Map) return {};
    return raw.map((k, v) => MapEntry(k.toString().toLowerCase().trim(), v.toString()));
  }

  static double createFeeFromConfig(dynamic config) {
    final v = (config as dynamic).familyTreeCreateFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultCreateFee;
  }

  static double photoMonthlyFeeFromConfig(dynamic config) {
    final v = (config as dynamic).familyTreePhotoMonthlyFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultPhotoMonthlyFee;
  }

  static DateTime? photoAccessUntil(dynamic config, String email) {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return null;
    final raw = accessMapFromConfig(config)[key];
    if (raw == null || raw.isEmpty) return null;
    return DateTime.tryParse(raw);
  }

  static bool hasActivePhotoAccess(dynamic config, String email) {
    final until = photoAccessUntil(config, email);
    if (until != null && until.isAfter(DateTime.now())) return true;
    return false;
  }

  static Future<bool> hasStripeFamilyTreeAccess(String email) =>
      NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.familyTree);

  static Future<bool> hasAnyFamilyTreeAccess(dynamic config, String email) async {
    if (hasActivePhotoAccess(config, email)) return true;
    return NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.familyTree);
  }

  static void grantPhotoAccess(dynamic config, String email, {int days = 30}) {
    final key = email.toLowerCase().trim();
    if (key.isEmpty) return;
    final map = Map<String, String>.from(accessMapFromConfig(config));
    final existing = photoAccessUntil(config, email);
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    (config as dynamic).familyTreePhotoAccessUntilByEmail = map;
  }

  static Future<bool> canRemoveSharedFamilyTrees(String userEmail, dynamic config) async {
    if (!await userHasOwnedFamilyTree(userEmail)) return false;
    return hasActivePhotoAccess(config, userEmail);
  }

  static Future<bool> confirmAndCharge({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required double amount,
    required String title,
    required String message,
    required Future<bool> Function(double amount, String description) onCharge,
    NgmyWalletPaymentTheme theme = NgmyWalletPaymentTheme.standard,
  }) async {
    if ((user as dynamic).isAdmin == true) return true;
    final email = ((user as dynamic).email as String?) ?? '';
    if (await NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.familyTree)) return true;

    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.familyTree,
      email: email,
      title: title,
      message: message.isNotEmpty
          ? message
          : 'Subscribe for Family Tree access — create trees and upload photos (30 days).',
    );
  }
}
