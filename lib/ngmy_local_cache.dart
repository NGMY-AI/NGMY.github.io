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
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString('all_users', jsonEncode(users));
      await prefs.setString('all_transactions', jsonEncode(transactions));
      await prefs.setString('all_media', jsonEncode(media));
      await prefs.setString('all_announcements', jsonEncode(announcements));
      await prefs.setString('app_config', jsonEncode(config));
      await prefs.setString('investment_plans', jsonEncode(investmentPlans));
      if (currentUser != null) {
        await prefs.setString('current_user', jsonEncode(currentUser));
      }
    } catch (e) {
      debugPrint('[NgmyLocalCache] persist error: $e');
    }
  }
}
