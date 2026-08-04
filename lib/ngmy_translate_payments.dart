import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_stripe_payments.dart';

/// Message translator — 1-day free trial, then Stripe for monthly access.
class NgmyTranslatePayments {
  static const int defaultWeeklyFreeLimit = 0;
  static const double defaultWeeklyUnlockFee = 0;
  static const _usagePrefsPrefix = 'ngmy_translate_week_usage_';

  static int weeklyFreeLimitFromConfig(dynamic config) {
    final v = (config as dynamic).translateWeeklyFreeLimit;
    if (v is num && v >= 0) return v.toInt();
    return defaultWeeklyFreeLimit;
  }

  static double weeklyUnlockFeeFromConfig(dynamic config) {
    final v = (config as dynamic).translateWeeklyUnlockFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultWeeklyUnlockFee;
  }

  static Map<String, String> _weekPassMap(dynamic config) {
    final raw = (config as dynamic).translateWeekPassByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setWeekPassMap(dynamic config, Map<String, String> map) {
    (config as dynamic).translateWeekPassByEmail = map;
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  /// Calendar week bucket (resets Monday 00:00 local).
  static String currentWeekId() {
    final now = DateTime.now();
    final monday = DateTime(now.year, now.month, now.day).subtract(Duration(days: now.weekday - 1));
    return '${monday.year}-${monday.month.toString().padLeft(2, '0')}-${monday.day.toString().padLeft(2, '0')}';
  }

  static bool hasWeekPass(dynamic config, String email) {
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    return _weekPassMap(config)[key] == currentWeekId();
  }

  static void grantWeekPass(dynamic config, String email) {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_weekPassMap(config));
    map[key] = currentWeekId();
    _setWeekPassMap(config, map);
  }

  static Future<int> weeklyUsageCount(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return 0;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString('$_usagePrefsPrefix$key');
      if (raw == null || raw.isEmpty) return 0;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return 0;
      if (decoded['week']?.toString() != currentWeekId()) return 0;
      final c = decoded['count'];
      if (c is num) return c.toInt();
    } catch (_) {}
    return 0;
  }

  static Future<void> recordTranslation(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final week = currentWeekId();
    final count = await weeklyUsageCount(email);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      '$_usagePrefsPrefix$key',
      jsonEncode({'week': week, 'count': count + 1}),
    );
  }

  static const int unlimitedRemaining = -1;

  static bool isUnlimitedRemaining(int remaining) =>
      remaining == unlimitedRemaining || remaining >= 999999;

  static Future<int> remainingFree(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return unlimitedRemaining;
    if (await NgmyStripePayments.hasActiveAccess(email, NgmyStripeProduct.messageTranslator)) {
      return unlimitedRemaining;
    }
    if (await NgmyStripePayments.hasDayTrialAccess(email, NgmyStripeProduct.messageTranslator)) {
      return unlimitedRemaining;
    }
    return 0;
  }

  static Future<bool> needsPayment(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    await NgmyStripePayments.ensureDayTrialStarted(email, NgmyStripeProduct.messageTranslator);
    return NgmyStripePayments.needsStripePayment(
      email: email,
      product: NgmyStripeProduct.messageTranslator,
      isAdmin: isAdmin,
      checkDayTrial: true,
    );
  }

  /// Returns true if user may translate (trial, paid, or admin).
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
    await NgmyStripePayments.ensureDayTrialStarted(email, NgmyStripeProduct.messageTranslator);
    if (!await needsPayment(config, email, isAdmin: isAdmin)) return true;

    return NgmyStripePayments.ensurePaid(
      context: context,
      product: NgmyStripeProduct.messageTranslator,
      email: email,
      isAdmin: isAdmin,
      checkDayTrial: true,
      message:
          'Your 1-day free trial has ended. Subscribe with Stripe for unlimited translations (30 days).',
    );
  }
}
