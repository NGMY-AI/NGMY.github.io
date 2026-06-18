import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_communicate_payments.dart';
import 'ngmy_doc_share_school.dart';

/// Doc Share — free creations for individuals; wallet unlock; organizations use org license.
class NgmyDocSharePayments {
  static const int defaultIndividualFreeLimit = 10;
  static const double defaultIndividualUnlockFee = 4.99;
  static const double defaultSchoolLicenseFee = 49.99;
  static const _usagePrefsPrefix = 'ngmy_doc_share_usage_';
  static const _pathPrefsPrefix = 'ngmy_doc_share_path_';
  static const int unlimitedRemaining = -1;

  /// Saved user path: individual | member | org_owner
  static const String pathIndividual = 'individual';
  static const String pathMember = 'member';
  static const String pathOrgOwner = 'org_owner';

  static int individualFreeLimitFromConfig(dynamic config) {
    final v = (config as dynamic).docShareIndividualFreeLimit;
    if (v is num && v >= 0) return v.toInt();
    return defaultIndividualFreeLimit;
  }

  static double individualUnlockFeeFromConfig(dynamic config) {
    final v = (config as dynamic).docShareIndividualUnlockFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultIndividualUnlockFee;
  }

  static double schoolLicenseFeeFromConfig(dynamic config) {
    final v = (config as dynamic).docShareSchoolLicenseFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultSchoolLicenseFee;
  }

  static Map<String, String> _individualAccessMap(dynamic config) {
    final raw = (config as dynamic).docShareAccessUntilByEmail;
    if (raw is Map) return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    return {};
  }

  static Map<String, String> _schoolLicenseMap(dynamic config) {
    final raw = (config as dynamic).docShareSchoolLicenseUntilByEmail;
    if (raw is Map) return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    return {};
  }

  static void _setIndividualAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).docShareAccessUntilByEmail = map;
  }

  static void _setSchoolLicenseMap(dynamic config, Map<String, String> map) {
    (config as dynamic).docShareSchoolLicenseUntilByEmail = map;
  }

  static String _emailKey(String email) => email.toLowerCase().trim();

  static Future<String?> savedPath(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return null;
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getString('$_pathPrefsPrefix$key');
    } catch (_) {}
    return null;
  }

  static Future<void> setSavedPath(String email, String path) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_pathPrefsPrefix$key', path);
  }

  static Future<void> clearSavedPath(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('$_pathPrefsPrefix$key');
  }

  static bool hasIndividualAccess(dynamic config, String email) {
    if (individualUnlockFeeFromConfig(config) <= 0) return true;
    final key = _emailKey(email);
    if (key.isEmpty) return false;
    final untilRaw = _individualAccessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return false;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static bool hasSchoolLicense(dynamic config, String ownerEmail) {
    final key = _emailKey(ownerEmail);
    if (key.isEmpty) return false;
    final untilRaw = _schoolLicenseMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return false;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static void grantIndividualAccess(dynamic config, String email, {int days = 30}) {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_individualAccessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setIndividualAccessMap(config, map);
  }

  static void grantSchoolLicense(dynamic config, String ownerEmail, {int days = 365}) {
    final key = _emailKey(ownerEmail);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_schoolLicenseMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setSchoolLicenseMap(config, map);
  }

  static Future<int> lifetimeCreationCount(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return 0;
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getInt('$_usagePrefsPrefix$key') ?? 0;
    } catch (_) {}
    return 0;
  }

  static Future<void> recordCreation(String email) async {
    final key = _emailKey(email);
    if (key.isEmpty) return;
    final count = await lifetimeCreationCount(email);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setInt('$_usagePrefsPrefix$key', count + 1);
  }

  static bool isUnlimitedRemaining(int remaining) =>
      remaining == unlimitedRemaining || remaining >= 999999;

  static Future<bool> hasSchoolStudentAccess(String email, {dynamic config}) =>
      NgmyDocShareSchool.hasActiveMemberSession(email, config: config);

  static Future<bool> individualFreeExhausted(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    final limit = individualFreeLimitFromConfig(config);
    if (limit <= 0) return false;
    if (hasIndividualAccess(config, email)) return false;
    final used = await lifetimeCreationCount(email);
    return used >= limit;
  }

  static Future<int> remainingFree(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return unlimitedRemaining;
    if (await hasSchoolStudentAccess(email, config: config)) return unlimitedRemaining;
    final limit = individualFreeLimitFromConfig(config);
    if (limit <= 0) return unlimitedRemaining;
    if (hasIndividualAccess(config, email)) return unlimitedRemaining;
    final used = await lifetimeCreationCount(email);
    return (limit - used).clamp(0, limit);
  }

  static Future<bool> needsIndividualPayment(dynamic config, String email, {bool isAdmin = false}) async {
    if (isAdmin) return false;
    if (await hasSchoolStudentAccess(email, config: config)) return false;
    return individualFreeExhausted(config, email, isAdmin: isAdmin);
  }

  /// Individual users who exhausted free tier are sent back to role selection — no wallet popup.
  static Future<bool> ensureIndividualAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    final email = ((user as dynamic).email as String?) ?? '';
    final isAdmin = (user as dynamic).isAdmin == true;
    if (!await needsIndividualPayment(config, email, isAdmin: isAdmin)) return true;
    return false;
  }

  static Future<bool> ensureSchoolLicense({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    final email = ((user as dynamic).email as String?) ?? '';
    final isAdmin = (user as dynamic).isAdmin == true;
    if (isAdmin) return true;
    if (hasSchoolLicense(config, email)) return true;

    final fee = schoolLicenseFeeFromConfig(config);
    if (fee <= 0) {
      grantSchoolLicense(config, email);
      onDataChanged();
      await onPersistConfig();
      return true;
    }

    final ok = await NgmyFamilyTreeStyleCharge.confirmAndCharge(
      context: context,
      user: user,
      amount: fee,
      title: 'Doc Share for Organizations',
      message:
          'Pay \$${fee.toStringAsFixed(2)} for a 1-year organization license. '
          'Create an access code and password for your team members.',
      onCharge: onCharge,
    );
    if (!ok) return false;
    grantSchoolLicense(config, email);
    onDataChanged();
    await onPersistConfig();
    return true;
  }
}
