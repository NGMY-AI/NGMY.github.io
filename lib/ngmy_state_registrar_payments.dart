import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_settings_cloud.dart';
import 'ngmy_stripe_payments.dart';

/// Per-state Authorized Registrar sponsorship ($50/mo).
///
/// - Georgia is always free.
/// - Every other state gets [trialMonths] free, then the first Authorized
///   Registrar sponsors that state for $50/month starting month 3.
/// - Later applicants in a sponsored state join under the first payer
///   (no second charge).
abstract final class NgmyStateRegistrarPayments {
  static const trialMonths = 2;
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

  static DateTime addUtcMonths(DateTime start, int months) {
    final u = start.toUtc();
    final year = u.year + ((u.month - 1 + months) ~/ 12);
    final month = ((u.month - 1 + months) % 12) + 1;
    final lastDay = DateTime.utc(year, month + 1, 0).day;
    final day = u.day > lastDay ? lastDay : u.day;
    return DateTime.utc(
      year,
      month,
      day,
      u.hour,
      u.minute,
      u.second,
      u.millisecond,
      u.microsecond,
    );
  }

  static DateTime trialUntilFrom(DateTime startedAt) =>
      addUtcMonths(startedAt.toUtc(), trialMonths);

  static Map<String, dynamic> ensureGlobalOffer(
    Map<String, dynamic> root,
    DateTime now,
  ) {
    final next = Map<String, dynamic>.from(root);
    final existingStart = DateTime.tryParse((next['offerStartedAt'] ?? '').toString());
    if (existingStart != null) {
      if ((next['offerUntil'] ?? '').toString().trim().isEmpty) {
        next['offerUntil'] = trialUntilFrom(existingStart).toIso8601String();
      }
      next['offerMonths'] = trialMonths;
      return next;
    }
    final start = now.toUtc();
    next['offerStartedAt'] = start.toIso8601String();
    next['offerUntil'] = trialUntilFrom(start).toIso8601String();
    next['offerMonths'] = trialMonths;
    return next;
  }

  static DateTime? offerUntilOf(Map<String, dynamic> root) {
    final until = DateTime.tryParse((root['offerUntil'] ?? '').toString());
    if (until != null) return until.toUtc();
    final started = DateTime.tryParse((root['offerStartedAt'] ?? '').toString());
    if (started == null) return null;
    return trialUntilFrom(started);
  }

  static Map<String, dynamic>? stateEntryOf(Map<String, dynamic> root, String state) {
    final entry = _byState(root)[stateScope(state)];
    if (entry is Map) return Map<String, dynamic>.from(entry);
    return null;
  }

  static DateTime? paidUntilOf(Map<String, dynamic>? entry) {
    final until = DateTime.tryParse((entry?['accessUntil'] ?? '').toString());
    return until?.toUtc();
  }

  static DateTime? stateTrialUntilOf(Map<String, dynamic>? entry) {
    final until = DateTime.tryParse((entry?['trialUntil'] ?? '').toString());
    if (until != null) return until.toUtc();
    final started = DateTime.tryParse((entry?['trialStartedAt'] ?? '').toString());
    if (started == null) return null;
    return trialUntilFrom(started);
  }

  /// True when Civic Registry / AR apply is free or already sponsored.
  static bool civicAccessFromSnapshot({
    required String state,
    required Map<String, dynamic> root,
    DateTime? now,
  }) {
    if (isGeorgiaExempt(state)) return true;
    final n = (now ?? DateTime.now()).toUtc();
    final entry = stateEntryOf(root, state);
    final paidUntil = paidUntilOf(entry);
    if (paidUntil != null && paidUntil.isAfter(n)) return true;
    final stateTrialUntil = stateTrialUntilOf(entry);
    if (stateTrialUntil != null && stateTrialUntil.isAfter(n)) return true;
    final offerUntil = offerUntilOf(root);
    if (offerUntil != null && offerUntil.isAfter(n)) return true;
    return false;
  }

  static DateTime? freeUntilFromSnapshot({
    required String state,
    required Map<String, dynamic> root,
  }) {
    if (isGeorgiaExempt(state)) return null;
    DateTime? best;
    void consider(DateTime? value) {
      if (value == null) return;
      if (best == null || value.isAfter(best!)) best = value;
    }

    consider(stateTrialUntilOf(stateEntryOf(root, state)));
    consider(offerUntilOf(root));
    return best;
  }

  static String trialBanner({
    required String state,
    required Map<String, dynamic> root,
    DateTime? now,
  }) {
    if (isGeorgiaExempt(state)) return '';
    final n = (now ?? DateTime.now()).toUtc();
    if (paidUntilOf(stateEntryOf(root, state))?.isAfter(n) == true) return '';
    final until = freeUntilFromSnapshot(state: state, root: root);
    if (until == null || !until.isAfter(n)) return '';
    return '${state.trim()} Civic Registry is free until ${_shortDate(until.toLocal())}. '
        'Monthly billing starts after that.';
  }

  static String _shortDate(DateTime local) {
    final m = local.month.toString().padLeft(2, '0');
    final d = local.day.toString().padLeft(2, '0');
    return '$m/$d/${local.year}';
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
    final root = remote ?? local;
    final seeded = ensureGlobalOffer(root, DateTime.now());
    if (jsonEncode(seeded) != jsonEncode(root)) {
      await _save(seeded);
    } else {
      await prefs.setString(_localKey, jsonEncode(seeded));
    }
    return seeded;
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

  static Future<NgmyCivicStateAccess> inspectState(String state) async {
    final root = await _load();
    return NgmyCivicStateAccess(
      hasAccess: civicAccessFromSnapshot(state: state, root: root),
      banner: trialBanner(state: state, root: root),
    );
  }

  static Future<bool> stateHasActiveSponsorship(String state) async {
    if (isGeorgiaExempt(state)) return true;
    final root = await _load();
    return civicAccessFromSnapshot(state: state, root: root);
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
      if (existing is Map) ...Map<String, dynamic>.from(existing),
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

  static String _paywallTitle() => 'State Registrar — \$50/mo';

  static String _paywallMessage(String state, {required bool trialEnded}) {
    final name = state.trim();
    if (trialEnded) {
      return 'The 2-month free Civic Registry trial for $name has ended. '
          'The first Authorized Registrar sponsors $name for \$50/month starting now. '
          'After you subscribe, others in $name can apply under this same sponsorship.';
    }
    return 'The first Authorized Registrar in $name sponsors the state for \$50/month '
        'after the 2-month free trial. After you subscribe, others in $name can apply '
        'under this same sponsorship.';
  }

  static Future<bool> _collectSponsorship({
    required BuildContext context,
    required String email,
    required String state,
    required bool isAdmin,
    required bool trialEnded,
  }) async {
    if (!context.mounted) return false;
    final paid = await NgmyStripePayments.ensureScopedPaid(
      context: context,
      product: NgmyStripeProduct.stateRegistrar,
      email: email,
      scope: stateScope(state),
      isAdmin: isAdmin,
      title: _paywallTitle(),
      message: _paywallMessage(state, trialEnded: trialEnded),
    );
    if (!paid) return false;

    await markStateSponsored(
      state: state,
      payerEmail: email,
      accessUntil: DateTime.now().toUtc().add(
            const Duration(days: NgmyStripePayments.monthlyAccessDays),
          ),
    );
    return true;
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

    return _collectSponsorship(
      context: context,
      email: clean,
      state: state,
      isAdmin: isAdmin,
      trialEnded: true,
    );
  }

  /// After the 2-month trial, home-state ARs must sponsor the state to keep tools.
  static Future<bool> ensureRegistrarToolsAccess({
    required BuildContext context,
    required String email,
    required String state,
    bool isAdmin = false,
  }) async {
    if (isAdmin) return true;
    if (isGeorgiaExempt(state)) return true;
    if (await stateHasActiveSponsorship(state)) return true;

    final clean = email.trim();
    if (clean.isEmpty || !context.mounted) return false;
    return _collectSponsorship(
      context: context,
      email: clean,
      state: state,
      isAdmin: isAdmin,
      trialEnded: true,
    );
  }
}

class NgmyCivicStateAccess {
  const NgmyCivicStateAccess({
    required this.hasAccess,
    required this.banner,
  });

  final bool hasAccess;
  final String banner;
}
