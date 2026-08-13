import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_settings_cloud.dart';
import 'ngmy_stripe_payments.dart';

/// Per-state Authorized Registrar sponsorship ($50/mo).
///
/// - Georgia is always free.
/// - The first applicant in any other state pays $50/month.
/// - Later applicants in that same state join under the first payer's
///   active subscription (no second charge).
abstract final class NgmyStateRegistrarPayments {
  static const settingsKey = 'civic_state_registrar_subscriptions';
  static const _localKey = 'ngmy_civic_state_registrar_subs_v1';

  static bool isGeorgiaExempt(String state) {
    final s = state.trim().toLowerCase();
    return s == 'georgia' || s == 'ga';
  }

  /// Stripe / storage scope — letters, digits, underscores only.
  static String stateScope(String state) {
    final slug = state
        .trim()
        .toLowerCase()
        .replaceAll(RegExp(r'[^a-z0-9]+'), '_')
        .replaceAll(RegExp(r'^_+|_+$'), '');
    return slug.isEmpty ? 'unknown' : slug;
  }

  static Future<Map<String, dynamic>> _load() async {
    final prefs = await SharedPreferences.getInstance();
    Map<String, dynamic> local = {};
    final raw = prefs.getString(_localKey);
    if (raw != null && raw.isNotEmpty) {
      try {
        final decoded = jsonDecode(raw);
        if (decoded is Map) local = Map<String, dynamic>.from(decoded);
      } catch (_) {}
    }

    final remote = await ngmyFetchSettingsValueViaRest(settingsKey);
    if (remote != null) {
      await prefs.setString(_localKey, jsonEncode(remote));
      return remote;
    }
    return local;
  }

  static Future<void> _save(Map<String, dynamic> value) async {
    value['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_localKey, jsonEncode(value));
    await ngmyUpsertSettingsRowReliable(settingsKey, value);
  }

  static Map<String, dynamic> _byState(Map<String, dynamic> root) {
    final raw = root['byState'];
    if (raw is Map) return Map<String, dynamic>.from(raw);
    return {};
  }

  static Future<bool> stateHasActiveSponsorship(String state) async {
    if (isGeorgiaExempt(state)) return true;
    final scope = stateScope(state);
    final root = await _load();
    final entry = _byState(root)[scope];
    if (entry is! Map) return false;
    final until = DateTime.tryParse((entry['accessUntil'] ?? '').toString());
    if (until == null) return false;
    return until.toUtc().isAfter(DateTime.now().toUtc());
  }

  /// Record / extend sponsorship after the first registrar in [state] pays.
  static Future<void> markStateSponsored({
    required String state,
    required String payerEmail,
    DateTime? accessUntil,
  }) async {
    if (isGeorgiaExempt(state)) return;
    final scope = stateScope(state);
    final root = await _load();
    final byState = _byState(root);
    final until = accessUntil ??
        DateTime.now().toUtc().add(
              const Duration(days: NgmyStripePayments.monthlyAccessDays),
            );
    final existing = byState[scope];
    DateTime? existingUntil;
    if (existing is Map) {
      existingUntil = DateTime.tryParse((existing['accessUntil'] ?? '').toString());
    }
    final best = existingUntil != null && existingUntil.isAfter(until)
        ? existingUntil
        : until;
    final priorPayer = existing is Map
        ? (existing['payerEmail'] ?? '').toString().trim().toLowerCase()
        : '';
    byState[scope] = {
      'displayState': state.trim(),
      'payerEmail': priorPayer.isNotEmpty
          ? priorPayer
          : payerEmail.trim().toLowerCase(),
      'accessUntil': best.toUtc().toIso8601String(),
      'product': 'state_registrar',
      'updatedAt': DateTime.now().toUtc().toIso8601String(),
    };
    root['byState'] = byState;
    await _save(root);
  }

  /// True when this user may open / submit an Authorized Registrar application.
  static Future<bool> ensureCanApply({
    required BuildContext context,
    required String email,
    required String state,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    if (isGeorgiaExempt(state)) return true;
    if (await stateHasActiveSponsorship(state)) return true;

    final clean = email.trim();
    if (clean.isEmpty) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Sign in to apply as an Authorized Registrar.')),
        );
      }
      return false;
    }

    if (!context.mounted) return false;
    final paid = await NgmyStripePayments.ensureScopedPaid(
      context: context,
      product: NgmyStripeProduct.stateRegistrar,
      email: clean,
      scope: stateScope(state),
      isAdmin: isAdmin,
      title: 'State Registrar — \$50/mo',
      message:
          'The first Authorized Registrar in ${state.trim()} sponsors the state for \$50/month. '
          'After you subscribe, others in ${state.trim()} can apply under this same sponsorship.',
    );
    if (!paid) return false;

    await markStateSponsored(
      state: state,
      payerEmail: clean,
      accessUntil: DateTime.now().toUtc().add(
            const Duration(days: NgmyStripePayments.monthlyAccessDays),
          ),
    );
    return true;
  }
}
