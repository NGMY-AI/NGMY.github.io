import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Fast local-only snapshot (no Supabase) so the app shows cached data immediately.
class NgmyLocalCache {
  static Future<void> persistSnapshot({
    required List<Map<String, dynamic>> users,
    required List<Map<String, dynamic>> transactions,
    required List<Map<String, dynamic>> media,
    required List<Map<String, dynamic>> announcements,
    required Map<String, dynamic> config,
    required List<Map<String, dynamic>> investmentPlans,
    Map<String, dynamic>? currentUser,
  }) async {
    final SharedPreferences prefs;
    try {
      prefs = await SharedPreferences.getInstance();
    } catch (e) {
      debugPrint('[NgmyLocalCache] persist error: $e');
      return;
    }
    // Each key on its own: browser storage is small (~5 MB) and one failed
    // write must not stop the others from being saved.
    Future<void> put(String key, String Function() value) async {
      try {
        await prefs.setString(key, value());
      } catch (e) {
        debugPrint('[NgmyLocalCache] persist $key: $e');
      }
    }

    await put('all_users', () => jsonEncode(users));
    await put('all_transactions', () => jsonEncode(transactions.map(_slimTxn).toList()));
    await put('all_media', () => jsonEncode(media));
    await put('all_announcements', () => jsonEncode(announcements));
    await put('app_config', () => jsonEncode(config));
    await put('investment_plans', () => jsonEncode(investmentPlans));
    if (currentUser != null) {
      await put('current_user', () => jsonEncode(currentUser));
      final email = (currentUser['email'] ?? '').toString().toLowerCase().trim();
      if (email.isNotEmpty) await put('ngmy_last_session_email', () => email);
    }
  }

  /// Big embedded payment screenshots of decided rows stay in the cloud only.
  static Map<String, dynamic> _slimTxn(Map<String, dynamic> row) {
    final shot = (row['screenshotPath'] ?? '').toString();
    if (shot.startsWith('data:') && shot.length > 12000 && (row['status'] ?? 0) != 0) {
      return Map<String, dynamic>.from(row)..remove('screenshotPath');
    }
    return row;
  }
}
