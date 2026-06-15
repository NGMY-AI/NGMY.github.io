import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_communicate_payments.dart';

/// Document Scanner — free scans then wallet unlock for unlimited scans.
class NgmyDocumentScanPayments {
  static const int defaultFreeScanLimit = 5;
  static const double defaultUnlockFee = 2.99;
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

  static Future<int> remainingFree(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return 999999;
    final limit = freeScanLimitFromConfig(config);
    if (limit <= 0) return 999999;
    if (hasActiveAccess(config, email)) return 999999;
    final used = await lifetimeScanCount(email);
    return (limit - used).clamp(0, limit);
  }

  static Future<bool> needsPayment(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    final limit = freeScanLimitFromConfig(config);
    if (limit <= 0) return false;
    if (hasActiveAccess(config, email)) return false;
    if (unlockFeeFromConfig(config) <= 0) return false;
    final used = await lifetimeScanCount(email);
    return used >= limit;
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
    if (!await needsPayment(config, email, isAdmin: isAdmin)) return true;

    final fee = unlockFeeFromConfig(config);
    final limit = freeScanLimitFromConfig(config);
    final ok = await NgmyFamilyTreeStyleCharge.confirmAndCharge(
      context: context,
      user: user,
      amount: fee,
      title: 'Document Scanner',
      message:
          'You used your $limit free document scans. '
          'Pay \$${fee.toStringAsFixed(2)} for unlimited scans for 30 days.',
      onCharge: onCharge,
    );
    if (!ok) return false;
    grantAccess(config, email);
    onDataChanged();
    await onPersistConfig();
    return true;
  }
}
