import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_db_relay.dart';
import 'ngmy_doc_share_payments.dart';
import 'ngmy_network_resilience.dart';

const String _kSchoolAccountsKey = 'ngmy_doc_share_school_accounts_v1';
const String _kStudentSessionPrefix = 'ngmy_doc_share_school_session_';
const String _kOwnerPortalPrefix = 'ngmy_doc_share_org_owner_portal_';

/// Organizations (schools, companies, teams) — access codes and member sessions.
class NgmyDocShareSchool {
  static String _norm(String s) => s.toLowerCase().trim();

  static Future<Map<String, dynamic>> _loadSchools() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final value = await ngmyDbRelaySettingsFetch(_kSchoolAccountsKey, timeout: kNgmyCloudLoadTimeout);
      if (value == null) return {};
      final schools = value['schools'];
      if (schools is Map) return Map<String, dynamic>.from(schools);
    } catch (e) {
      debugPrint('[doc share org] load: $e');
    }
    return {};
  }

  static Future<void> _saveSchools(Map<String, dynamic> schools) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await ngmyDbRelaySettingsUpsert(
        _kSchoolAccountsKey,
        {'schools': schools, 'savedAt': DateTime.now().toUtc().toIso8601String()},
        timeout: kNgmyCloudWriteTimeout,
      );
    } catch (e) {
      debugPrint('[doc share org] save: $e');
    }
  }

  static Future<List<Map<String, dynamic>>> listOrganizations() async {
    final schools = await _loadSchools();
    final out = <Map<String, dynamic>>[];
    for (final entry in schools.entries) {
      final row = entry.value;
      if (row is! Map) continue;
      out.add({
        'id': entry.key,
        'organizationName': (row['schoolName'] ?? row['organizationName'] ?? 'Organization').toString(),
        'loginCode': (row['loginCode'] ?? entry.key).toString(),
        'ownerEmail': (row['ownerEmail'] ?? '').toString(),
        'active': row['active'] == true,
        'createdAt': (row['createdAt'] ?? '').toString(),
      });
    }
    out.sort((a, b) => (b['createdAt'] ?? '').toString().compareTo((a['createdAt'] ?? '').toString()));
    return out;
  }

  static Future<Map<String, dynamic>?> organizationByCode(String loginCode) async {
    final schools = await _loadSchools();
    final row = schools[_norm(loginCode)];
    if (row is! Map) return null;
    return Map<String, dynamic>.from(row);
  }

  static Future<Map<String, dynamic>?> ownerPortal(String ownerEmail) async {
    final prefs = await SharedPreferences.getInstance();
    final code = prefs.getString('$_kOwnerPortalPrefix${_norm(ownerEmail)}');
    if (code == null || code.isEmpty) return null;
    return organizationByCode(code);
  }

  static Future<void> _saveOwnerPortalCode(String ownerEmail, String loginCode) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_kOwnerPortalPrefix${_norm(ownerEmail)}', loginCode.trim());
  }

  static Future<bool> createOrganizationPortal({
    required String ownerEmail,
    required String organizationName,
    required String loginCode,
    required String password,
  }) async {
    if (!await ngmyCanReachCloud()) return false;
    final code = loginCode.trim();
    final pass = password.trim();
    if (code.length < 3 || pass.length < 4) return false;

    final schools = await _loadSchools();
    final id = _norm(code);
    if (schools.containsKey(id)) return false;

    schools[id] = {
      'schoolName': organizationName.trim(),
      'organizationName': organizationName.trim(),
      'loginCode': code,
      'password': pass,
      'ownerEmail': _norm(ownerEmail),
      'active': true,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveSchools(schools);
    await _saveOwnerPortalCode(ownerEmail, code);
    return true;
  }

  static Future<bool> updateOrganizationPortal({
    required String ownerEmail,
    required String loginCode,
    String? organizationName,
    String? newLoginCode,
    String? password,
  }) async {
    if (!await ngmyCanReachCloud()) return false;
    final schools = await _loadSchools();
    final id = _norm(loginCode);
    final row = schools[id];
    if (row is! Map) return false;
    if (_norm((row['ownerEmail'] ?? '').toString()) != _norm(ownerEmail)) return false;

    final updated = Map<String, dynamic>.from(row);
    if (organizationName != null && organizationName.trim().isNotEmpty) {
      updated['schoolName'] = organizationName.trim();
      updated['organizationName'] = organizationName.trim();
    }
    if (password != null && password.trim().length >= 4) {
      updated['password'] = password.trim();
    }
    if (newLoginCode != null && newLoginCode.trim().isNotEmpty) {
      final newId = _norm(newLoginCode);
      if (newId != id && schools.containsKey(newId)) return false;
      updated['loginCode'] = newLoginCode.trim();
      schools.remove(id);
      schools[newId] = updated;
      await _saveOwnerPortalCode(ownerEmail, newLoginCode.trim());
    } else {
      schools[id] = updated;
    }
    await _saveSchools(schools);
    return true;
  }

  static Future<bool> revokeOrganization(String loginCode) async {
    if (!await ngmyCanReachCloud()) return false;
    final schools = await _loadSchools();
    final id = _norm(loginCode);
    final row = schools[id];
    if (row is! Map) return false;
    final updated = Map<String, dynamic>.from(row);
    updated['active'] = false;
    updated['revokedAt'] = DateTime.now().toUtc().toIso8601String();
    schools[id] = updated;
    await _saveSchools(schools);
    return true;
  }

  static Future<bool> validateMemberLogin({
    required String memberEmail,
    required String loginCode,
    required String password,
    dynamic config,
  }) async {
    if (!await ngmyCanReachCloud()) return false;
    final schools = await _loadSchools();
    final row = schools[_norm(loginCode)];
    if (row is! Map) return false;
    if (row['active'] != true) return false;
    final expected = (row['password'] ?? '').toString();
    if (expected != password.trim()) return false;

    final ownerEmail = (row['ownerEmail'] ?? '').toString();
    if (config != null && !NgmyDocSharePayments.hasSchoolLicense(config, ownerEmail)) return false;

    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      '$_kStudentSessionPrefix${_norm(memberEmail)}',
      jsonEncode({
        'loginCode': loginCode.trim(),
        'schoolName': (row['schoolName'] ?? row['organizationName'] ?? 'Organization').toString(),
        'loginAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
    return true;
  }

  static Future<Map<String, dynamic>?> _sessionForEmail(String email) async {
    final key = _norm(email);
    if (key.isEmpty) return null;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString('$_kStudentSessionPrefix$key');
      if (raw == null || raw.isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      return Map<String, dynamic>.from(decoded);
    } catch (_) {
      return null;
    }
  }

  static Future<bool> hasActiveMemberSession(String email, {dynamic config}) async {
    final session = await _sessionForEmail(email);
    if (session == null) return false;
    final loginCode = (session['loginCode'] ?? '').toString();
    if (loginCode.isEmpty) return false;

    final org = await organizationByCode(loginCode);
    if (org == null || org['active'] != true) {
      await clearMemberSession(email);
      return false;
    }
    final ownerEmail = (org['ownerEmail'] ?? '').toString();
    if (config != null && !NgmyDocSharePayments.hasSchoolLicense(config, ownerEmail)) {
      await clearMemberSession(email);
      return false;
    }
    return true;
  }

  static Future<String?> activeOrganizationName(String email) async {
    final session = await _sessionForEmail(email);
    if (session == null) return null;
    return (session['schoolName'] ?? '').toString();
  }

  static Future<void> clearMemberSession(String email) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('$_kStudentSessionPrefix${_norm(email)}');
  }

  // Backward-compatible aliases
  static Future<bool> createSchoolPortal({
    required String ownerEmail,
    required String schoolName,
    required String loginCode,
    required String password,
  }) =>
      createOrganizationPortal(
        ownerEmail: ownerEmail,
        organizationName: schoolName,
        loginCode: loginCode,
        password: password,
      );

  static Future<bool> validateStudentLogin({
    required String studentEmail,
    required String loginCode,
    required String password,
  }) =>
      validateMemberLogin(
        memberEmail: studentEmail,
        loginCode: loginCode,
        password: password,
      );

  static Future<bool> hasActiveStudentSession(String email) => hasActiveMemberSession(email);

  static Future<String?> activeSchoolName(String email) => activeOrganizationName(email);

  static Future<void> clearStudentSession(String email) => clearMemberSession(email);
}
