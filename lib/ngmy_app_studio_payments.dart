import 'package:flutter/material.dart';

import 'ngmy_app_builder_ai_usage.dart';
import 'ngmy_music_payments.dart';

/// NGMY App Studio cloud + Bolt AI pricing.
class NgmyAppStudioPayments {
  static const int maxCloudApps = 5;
  static const double defaultCloudSaveMonthlyFee = 2.0;
  static const double defaultAiMonthlyFee = 3.0;
  static const int defaultAiPromptLimit = 10;
  static const int defaultAiFreeAppLimit = 1;

  static double monthlyFeeFromConfig(dynamic config) {
    final v = (config as dynamic).appStudioCloudSaveFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultCloudSaveMonthlyFee;
  }

  static Map<String, String> _accessMap(dynamic config) {
    final raw = (config as dynamic).appStudioCloudAccessUntilByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).appStudioCloudAccessUntilByEmail = map;
  }

  static String _key(String email) => email.toLowerCase().trim();

  static bool hasActiveSubscription(dynamic config, String email) {
    final key = _key(email);
    if (key.isEmpty) return monthlyFeeFromConfig(config) <= 0;
    final untilRaw = _accessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return monthlyFeeFromConfig(config) <= 0;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static void grantMonthly(dynamic config, String email, {int days = 30}) {
    final key = _key(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_accessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAccessMap(config, map);
  }

  static double aiMonthlyFeeFromConfig(dynamic config) {
    final v = (config as dynamic).appStudioAiMonthlyFee;
    if (v is num && v >= 0) return v.toDouble();
    return defaultAiMonthlyFee;
  }

  static int aiPromptLimitFromConfig(dynamic config) {
    final v = (config as dynamic).appStudioAiPromptLimit;
    if (v is num && v >= 0) return v.toInt();
    return defaultAiPromptLimit;
  }

  static int aiFreeAppLimitFromConfig(dynamic config) {
    final v = (config as dynamic).appStudioAiFreeAppLimit;
    if (v is num && v >= 0) return v.toInt();
    return defaultAiFreeAppLimit;
  }

  static Map<String, String> _aiAccessMap(dynamic config) {
    final raw = (config as dynamic).appStudioAiAccessUntilByEmail;
    if (raw is Map) {
      return raw.map((k, v) => MapEntry(k.toString(), v.toString()));
    }
    return {};
  }

  static void _setAiAccessMap(dynamic config, Map<String, String> map) {
    (config as dynamic).appStudioAiAccessUntilByEmail = map;
  }

  static bool hasActiveAiSubscription(dynamic config, String email) {
    final key = _key(email);
    if (key.isEmpty) return aiMonthlyFeeFromConfig(config) <= 0;
    final untilRaw = _aiAccessMap(config)[key];
    if (untilRaw == null || untilRaw.isEmpty) return aiMonthlyFeeFromConfig(config) <= 0;
    final until = DateTime.tryParse(untilRaw);
    return until != null && until.isAfter(DateTime.now());
  }

  static void grantAiMonthly(dynamic config, String email, {int days = 30}) {
    final key = _key(email);
    if (key.isEmpty) return;
    final map = Map<String, String>.from(_aiAccessMap(config));
    final existing = DateTime.tryParse(map[key] ?? '');
    final base = (existing != null && existing.isAfter(DateTime.now())) ? existing : DateTime.now();
    map[key] = base.add(Duration(days: days)).toUtc().toIso8601String();
    _setAiAccessMap(config, map);
  }

  /// Paywall for Bolt AI — unlimited prompts + more AI apps for 30 days.
  static Future<bool> confirmAndChargeAiAccess({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required Future<bool> Function(double amount, String description) onCharge,
    required VoidCallback onDataChanged,
    required Future<bool> Function() onPersistConfig,
  }) async {
    final fee = aiMonthlyFeeFromConfig(config);
    if (fee <= 0 || hasActiveAiSubscription(config, ((user as dynamic).email as String?) ?? '')) {
      return true;
    }
    final email = ((user as dynamic).email as String?) ?? '';
    final prompts = aiPromptLimitFromConfig(config);
    final apps = aiFreeAppLimitFromConfig(config);

    final charged = await NgmyMusicPayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: fee,
      title: 'Bolt AI — monthly',
      message:
          'Unlock unlimited Bolt AI for 30 days (\$${fee.toStringAsFixed(2)}/month). '
          'Build any app with AI — no prompt cap, create more than $apps AI app${apps == 1 ? '' : 's'}. '
          'Free tier: $prompts prompts and $apps AI-built app${apps == 1 ? '' : 's'}.',
      onCharge: onCharge,
    );
    if (!charged) return false;
    grantAiMonthly(config, email);
    await NgmyAppBuilderAiUsage.resetPromptsAfterPayment(email);
    onDataChanged();
    await onPersistConfig();
    return true;
  }

  /// Charges monthly fee when subscription expired; returns false if user declines or lacks balance.
  static Future<bool> confirmAndChargeCloudSave({
    required BuildContext context,
    required dynamic user,
    required dynamic config,
    required String email,
    required String appName,
    required Future<bool> Function(double amount, String description) onCharge,
  }) async {
    final fee = monthlyFeeFromConfig(config);
    if (fee <= 0 || hasActiveSubscription(config, email)) return true;

    final charged = await NgmyMusicPayments.confirmAndCharge(
      context: context,
      user: user,
      config: config,
      amount: fee,
      title: 'App Studio Cloud — monthly',
      message:
          'Unlock cloud sync for 30 days (\$${fee.toStringAsFixed(2)}/month). '
          'Save up to ${maxCloudApps} apps — they open on every device. '
          'Saving "$appName" now.',
      onCharge: onCharge,
    );
    if (!charged) return false;
    grantMonthly(config, email);
    return true;
  }
}
