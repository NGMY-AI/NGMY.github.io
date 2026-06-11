import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_app_studio_payments.dart';

/// Tracks free Bolt AI prompts and AI-created apps per user (device-local).
class NgmyAppBuilderAiUsage {
  static String _promptKey(String email) => 'ngmy_bolt_prompts_${email.toLowerCase().trim()}';
  static String _appsKey(String email) => 'ngmy_bolt_ai_apps_${email.toLowerCase().trim()}';

  static Future<int> getPromptCount(String email) async {
    if (email.trim().isEmpty) return 0;
    try {
      final prefs = await SharedPreferences.getInstance();
      return prefs.getInt(_promptKey(email)) ?? 0;
    } catch (e) {
      debugPrint('[bolt usage] prompts: $e');
      return 0;
    }
  }

  static Future<int> getAiCreatedAppCount(String email) async {
    final ids = await _aiAppIds(email);
    return ids.length;
  }

  static Future<Set<String>> _aiAppIds(String email) async {
    if (email.trim().isEmpty) return {};
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_appsKey(email));
      if (raw == null || raw.isEmpty) return {};
      final decoded = jsonDecode(raw);
      if (decoded is! List) return {};
      return decoded.map((e) => e.toString()).where((e) => e.isNotEmpty).toSet();
    } catch (e) {
      debugPrint('[bolt usage] apps: $e');
      return {};
    }
  }

  static Future<void> recordPrompt(String email) async {
    if (email.trim().isEmpty) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      final n = (prefs.getInt(_promptKey(email)) ?? 0) + 1;
      await prefs.setInt(_promptKey(email), n);
    } catch (e) {
      debugPrint('[bolt usage] record prompt: $e');
    }
  }

  static Future<void> markAiCreatedApp(String email, String projectId) async {
    if (email.trim().isEmpty || projectId.trim().isEmpty) return;
    try {
      final ids = await _aiAppIds(email);
      ids.add(projectId.trim());
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_appsKey(email), jsonEncode(ids.toList()));
    } catch (e) {
      debugPrint('[bolt usage] mark app: $e');
    }
  }

  static Future<void> resetPromptsAfterPayment(String email) async {
    if (email.trim().isEmpty) return;
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setInt(_promptKey(email), 0);
    } catch (e) {
      debugPrint('[bolt usage] reset prompts: $e');
    }
  }

  static bool hasUnlimitedAccess(dynamic config, String email, {bool isAdmin = false}) {
    if (isAdmin) return true;
    return NgmyAppStudioPayments.hasActiveAiSubscription(config, email);
  }

  static Future<String?> blockReason({
    required dynamic config,
    required String email,
    required bool isNewAppRequest,
    bool isAdmin = false,
  }) async {
    if (hasUnlimitedAccess(config, email, isAdmin: isAdmin)) return null;

    final promptLimit = NgmyAppStudioPayments.aiPromptLimitFromConfig(config);
    final appLimit = NgmyAppStudioPayments.aiFreeAppLimitFromConfig(config);
    final fee = NgmyAppStudioPayments.aiMonthlyFeeFromConfig(config);

    if (fee <= 0 && promptLimit <= 0 && appLimit <= 0) return null;

    if (isNewAppRequest && appLimit > 0) {
      final apps = await getAiCreatedAppCount(email);
      if (apps >= appLimit) {
        return 'Free tier includes $appLimit AI-built app${appLimit == 1 ? '' : 's'}. '
            'Subscribe to Bolt AI to create more apps with AI.';
      }
    }

    if (promptLimit > 0) {
      final used = await getPromptCount(email);
      if (used >= promptLimit) {
        return 'You used your $promptLimit free Bolt AI prompts. '
            'Subscribe to keep building with AI.';
      }
    }

    return null;
  }

  static Future<int> promptsRemaining(dynamic config, String email, {bool isAdmin = false}) async {
    if (hasUnlimitedAccess(config, email, isAdmin: isAdmin)) return -1;
    final limit = NgmyAppStudioPayments.aiPromptLimitFromConfig(config);
    if (limit <= 0) return -1;
    final used = await getPromptCount(email);
    return (limit - used).clamp(0, limit);
  }

  /// Returns true if the user may send a Bolt prompt (possibly after subscribing).
  static Future<bool> ensureAccess({
    required BuildContext context,
    required dynamic config,
    required String email,
    required bool isNewAppRequest,
    bool isAdmin = false,
    dynamic user,
    Future<bool> Function(double amount, String description)? onCharge,
    VoidCallback? onDataChanged,
    Future<bool> Function()? onPersistConfig,
  }) async {
    if (config == null) return true;
    final block = await blockReason(
      config: config,
      email: email,
      isNewAppRequest: isNewAppRequest,
      isAdmin: isAdmin,
    );
    if (block == null) return true;
    if (!context.mounted) return false;
    if (onCharge == null) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(block)));
      return false;
    }
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Bolt AI subscription'),
        content: Text('$block\n\nSubscribe to continue?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Subscribe')),
        ],
      ),
    );
    if (ok != true || !context.mounted) return false;
    return NgmyAppStudioPayments.confirmAndChargeAiAccess(
      context: context,
      user: user ?? {'email': email},
      config: config,
      onCharge: onCharge,
      onDataChanged: onDataChanged ?? () {},
      onPersistConfig: onPersistConfig ?? () async => true,
    );
  }
}
