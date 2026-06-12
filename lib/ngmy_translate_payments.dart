import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_communicate_payments.dart';

/// Weekly free message translations + wallet unlock for the rest of the week.
class NgmyTranslatePayments {
  static const int defaultWeeklyFreeLimit = 5;
  static const double defaultWeeklyUnlockFee = 1.99;
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

  static Future<int> remainingFree(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return 999999;
    final limit = weeklyFreeLimitFromConfig(config);
    if (limit <= 0) return 999999;
    if (hasWeekPass(config, email)) return 999999;
    final used = await weeklyUsageCount(email);
    return (limit - used).clamp(0, limit);
  }

  static Future<bool> needsPayment(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    final limit = weeklyFreeLimitFromConfig(config);
    if (limit <= 0) return false;
    if (hasWeekPass(config, email)) return false;
    if (weeklyUnlockFeeFromConfig(config) <= 0) return false;
    final used = await weeklyUsageCount(email);
    return used >= limit;
  }

  /// Returns true if user may translate (paid or within free limit).
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
    if (!await needsPayment(config, email, isAdmin: isAdmin)) return true;

    final fee = weeklyUnlockFeeFromConfig(config);
    final limit = weeklyFreeLimitFromConfig(config);
    final ok = await NgmyFamilyTreeStyleCharge.confirmAndCharge(
      context: context,
      user: user,
      amount: fee,
      title: 'Message translator — this week',
      message:
          'You used your $limit free translations this week. '
          'Pay \$${fee.toStringAsFixed(2)} for unlimited message translations until the week resets.',
      onCharge: onCharge,
    );
    if (!ok) return false;
    grantWeekPass(config, email);
    onDataChanged();
    await onPersistConfig();
    return true;
  }
}
