import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_settings_cloud.dart';

/// The loan terms the admin chooses: the interest rate, the biggest loan and how long people have to repay.
/// Nothing about the terms is written into the loan screens: they all read it from here.
class NgmyLoanSettings {
  NgmyLoanSettings({this.interestPercent = 36, this.maxAmount = 5000, this.repaymentMonths = 2});

  /// Interest as a percentage of the amount borrowed (for example 10 means 10%).
  double interestPercent;

  /// The most a member can ask for.
  double maxAmount;

  /// How many months a member has to repay (payments are weekly).
  int repaymentMonths;

  static const String cloudKey = 'loan_settings';
  static const String _prefsKey = 'ngmy_loan_settings_v1';

  /// The settings every loan screen uses right now.
  static NgmyLoanSettings current = NgmyLoanSettings();

  Map<String, dynamic> toJson() => {'interestPercent': interestPercent, 'maxAmount': maxAmount, 'repaymentMonths': repaymentMonths};

  static NgmyLoanSettings fromJson(Map<String, dynamic> j) => NgmyLoanSettings(
        interestPercent: ((j['interestPercent'] as num?)?.toDouble() ?? 36).clamp(0, 200).toDouble(),
        maxAmount: ((j['maxAmount'] as num?)?.toDouble() ?? 5000).clamp(1, 1000000).toDouble(),
        repaymentMonths: ((j['repaymentMonths'] as num?)?.toInt() ?? 2).clamp(1, 24),
      );

  /// Reads the settings saved on this phone, then the ones in the cloud (the cloud wins when it can be reached).
  static Future<NgmyLoanSettings> load() async {
    try {
      final p = await SharedPreferences.getInstance();
      final raw = p.getString(_prefsKey);
      if (raw != null) current = fromJson(Map<String, dynamic>.from(jsonDecode(raw) as Map));
    } catch (_) {}
    try {
      final cloud = await ngmyFetchSettingsValueReliable(cloudKey, timeout: const Duration(seconds: 6));
      if (cloud != null && cloud.isNotEmpty) {
        current = fromJson(cloud);
        try {
          (await SharedPreferences.getInstance()).setString(_prefsKey, jsonEncode(current.toJson()));
        } catch (_) {}
      }
    } catch (e) {
      debugPrint('[loanSettings] load: $e');
    }
    return current;
  }

  /// Saves on this phone and in the cloud. Returns whether the cloud copy was saved too.
  static Future<bool> save(NgmyLoanSettings s) async {
    current = s;
    try {
      (await SharedPreferences.getInstance()).setString(_prefsKey, jsonEncode(s.toJson()));
    } catch (_) {}
    try {
      return await ngmyUpsertSettingsRowReliable(cloudKey, s.toJson());
    } catch (_) {
      return false;
    }
  }
}
