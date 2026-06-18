import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import 'ngmy_network_resilience.dart';

const String _kSchoolAccountsKey = 'ngmy_doc_share_school_accounts_v1';
const String _kStudentSessionPrefix = 'ngmy_doc_share_school_session_';

class NgmyDocShareSchool {
  static String _norm(String s) => s.toLowerCase().trim();

  static Future<Map<String, dynamic>> _loadSchools() async {
    if (!await ngmyCanReachCloud()) return {};
    try {
      final row = await Supabase.instance.client
          .from('ngmy_settings')
          .select()
          .eq('key', _kSchoolAccountsKey)
          .maybeSingle()
          .timeout(kNgmyCloudLoadTimeout);
      if (row == null) return {};
      final value = row['value'];
      if (value is! Map) return {};
      final schools = value['schools'];
      if (schools is Map) return Map<String, dynamic>.from(schools);
    } catch (e) {
      debugPrint('[doc share school] load: $e');
    }
    return {};
  }

  static Future<void> _saveSchools(Map<String, dynamic> schools) async {
    if (!await ngmyCanReachCloud()) return;
    try {
      await Supabase.instance.client.from('ngmy_settings').upsert([
        {
          'key': _kSchoolAccountsKey,
          'value': {
            'schools': schools,
            'savedAt': DateTime.now().toUtc().toIso8601String(),
          },
          'updated_at': DateTime.now().toUtc().toIso8601String(),
        },
      ], onConflict: 'key').timeout(kNgmyCloudWriteTimeout);
    } catch (e) {
      debugPrint('[doc share school] save: $e');
    }
  }

  static Future<bool> createSchoolPortal({
    required String ownerEmail,
    required String schoolName,
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
      'schoolName': schoolName.trim(),
      'loginCode': code,
      'password': pass,
      'ownerEmail': _norm(ownerEmail),
      'active': true,
      'createdAt': DateTime.now().toUtc().toIso8601String(),
    };
    await _saveSchools(schools);
    return true;
  }

  static Future<bool> validateStudentLogin({
    required String studentEmail,
    required String loginCode,
    required String password,
  }) async {
    if (!await ngmyCanReachCloud()) return false;
    final schools = await _loadSchools();
    final row = schools[_norm(loginCode)];
    if (row is! Map) return false;
    if (row['active'] != true) return false;
    final expected = (row['password'] ?? '').toString();
    if (expected != password.trim()) return false;

    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(
      '$_kStudentSessionPrefix${_norm(studentEmail)}',
      jsonEncode({
        'loginCode': loginCode.trim(),
        'schoolName': (row['schoolName'] ?? 'School').toString(),
        'loginAt': DateTime.now().toUtc().toIso8601String(),
      }),
    );
    return true;
  }

  static Future<bool> hasActiveStudentSession(String email) async {
    final key = _norm(email);
    if (key.isEmpty) return false;
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString('$_kStudentSessionPrefix$key');
      if (raw == null || raw.isEmpty) return false;
      final decoded = jsonDecode(raw);
      return decoded is Map && (decoded['loginCode'] ?? '').toString().isNotEmpty;
    } catch (_) {
      return false;
    }
  }

  static Future<String?> activeSchoolName(String email) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString('$_kStudentSessionPrefix${_norm(email)}');
      if (raw == null) return null;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      return (decoded['schoolName'] ?? '').toString();
    } catch (_) {
      return null;
    }
  }

  static Future<void> clearStudentSession(String email) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove('$_kStudentSessionPrefix${_norm(email)}');
  }
}
