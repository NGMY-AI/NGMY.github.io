import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_stripe_payments.dart';

/// Document Scanner — 1-day free trial, then Stripe for monthly access.
class NgmyDocumentScanPayments {
  static const int defaultFreeScanLimit = 0;
  static const double defaultUnlockFee = 0;
  /// Every this many follow-up questions counts as one document scan.
  static const int questionsPerScan = 2;
  static const _usagePrefsPrefix = 'ngmy_document_scan_usage_';

  static int freeScanLimitFromConfig(dynamic config) {
    final v = (config as dynamic).documentScanFreeLimit;
    if (v is num && v >= 0) return v.toInt();
    return defaultFreeScanLimit;
  }

  static double unlockFeeFromConfig(dynamic config) {
    final v = (config as dynamic).documentScanUnlockFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultUnlockFee;
  }

  static Map<String, String> _accessMap(dynamic config) {
    final raw = (config as dynamic).documentScanAccessUntilByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).documentScanAccessUntilByEmail = map;
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static bool hasActiveAccess(dynamic config, String email) {
    if (unlockFeeFromConfig(config) <= 0) return true;
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    final untilRaw = _accessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return false;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static void grantAccess(dynamic config, String email, {int days = 30}) {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_accessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAccessMap(config, map);
  }

  static Future<int> lifetimeScanCount(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return 0;
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getInt('$_usagePrefsPrefix$key') ?? 0;
    } catch (_) {}
    return 0;
  }

  static Future<void> recordScan(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final count = await lifetimeScanCount(email);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('$_usagePrefsPrefix$key', count + 1);
  }

  /// `-1` means unlimited (admin, paid pass, or admin set limit to 0).
  static const int unlimitedRemaining = -1;

  static bool isUnlimitedRemaining(int remaining) =>
      remaining == unlimitedRemaining || remaining >= 999999;

  static Future<int> remainingFree(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return unlimitedRemaining;
    if (await NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.documentScanner)) {
      return unlimitedRemaining;
    }
    if (await NgmyStripePayments.hasDayTrialAccess(email, NgmyStripeProduct.documentScanner)) {
      return unlimitedRemaining;
    }
    return 0;
  }

  static Future<bool> needsPayment(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    await NgmyStripePayments.ensureDayTrialStarted(email, NgmyStripeProduct.documentScanner);
    return NgmyStripePayments.needsPayment(
      email: email,
      product: NgmyStripeProduct.documentScanner,
      isAdmin: isAdmin,
      checkDayTrial: true,
    );
  }

  static Future<bool> ensureAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    final email = ((user as dynamic).email as String?) ?? '';
    final isAdmin = (user as dynamic).isAdmin == true;
    await NgmyStripePayments.ensureDayTrialStarted(email, NgmyStripeProduct.documentScanner);
    if (!await needsPayment(config, email, isAdmin: isAdmin)) return true;

    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.documentScanner,
      email: email,
      isAdmin: isAdmin,
      checkDayTrial: true,
      message:
          'Your 1-day free trial has ended. Subscribe for unlimited document scans (30 days).',
    );
  }
}
