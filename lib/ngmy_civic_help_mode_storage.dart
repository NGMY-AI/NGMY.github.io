import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Local draft for Civic Registry "Activate Help Mode" form (per registrar + state).
class NgmyHelpModeDraft {
  const NgmyHelpModeDraft({
    this.purpose = '',
    this.cashApp = '',
    this.zelle = '',
    this.phone = '',
    this.scopeType = 'all',
    this.scopeValue = '',
  });

  final String purpose;
  final String cashApp;
  final String zelle;
  final String phone;
  final String scopeType;
  final String scopeValue;

  Map<String, dynamic> toJson() => {
        'purpose': purpose,
        'cashApp': cashApp,
        'zelle': zelle,
        'phone': phone,
        'scopeType': scopeType,
        'scopeValue': scopeValue,
      };

  factory NgmyHelpModeDraft.fromJson(Map<String, dynamic> json) => NgmyHelpModeDraft(
        purpose: (json['purpose'] ?? '').toString().trim(),
        cashApp: (json['cashApp'] ?? '').toString().trim(),
        zelle: (json['zelle'] ?? '').toString().trim(),
        phone: (json['phone'] ?? '').toString().trim(),
        scopeType: (json['scopeType'] ?? 'all').toString().trim().isEmpty ? 'all' : (json['scopeType'] ?? 'all').toString(),
        scopeValue: (json['scopeValue'] ?? '').toString().trim(),
      );

  bool get hasContent =>
      purpose.isNotEmpty || cashApp.isNotEmpty || zelle.isNotEmpty || phone.isNotEmpty || scopeValue.isNotEmpty;
}

class NgmyCivicHelpModeStorage {
  NgmyCivicHelpModeStorage._();

  static String _draftKey(String email, String state) {
    final e = email.toLowerCase().trim();
    final s = state.trim();
    return 'ngmy_help_mode_draft_v1_${e}_$s';
  }

  static Future<NgmyHelpModeDraft?> loadDraft({required String email, required String state}) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_draftKey(email, state));
      if (raw == null || raw.trim().isEmpty) return null;
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      final draft = NgmyHelpModeDraft.fromJson(Map<String, dynamic>.from(decoded));
      return draft.hasContent ? draft : null;
    } catch (e) {
      debugPrint('[help mode draft] load: $e');
      return null;
    }
  }

  static Future<void> saveDraft({
    required String email,
    required String state,
    required NgmyHelpModeDraft draft,
  }) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_draftKey(email, state), jsonEncode(draft.toJson()));
    } catch (e) {
      debugPrint('[help mode draft] save: $e');
    }
  }
}
