import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// One thing that showed up on the admin dashboard (a new member, a deposit request…).
class NgmyAdminAlertItem {
  final String id;
  final String label;
  const NgmyAdminAlertItem(this.id, this.label);
}

/// A dashboard list the admin is told about when something new lands in it.
class NgmyAdminAlertCategory {
  final String key;
  /// "New deposit request" — pluralised as "3 new deposit requests".
  final String singular;
  final String plural;
  final List<NgmyAdminAlertItem> items;
  const NgmyAdminAlertCategory(this.key, this.singular, this.plural, this.items);
}

/// Compares every dashboard list with what the admin was already told about and sends ONE
/// top notification per list with anything new ("New civic registry member: Amina K." or
/// "3 new deposit requests"). The first time a list is seen on this phone it's only
/// remembered, so opening the app never floods the admin with old items.
/// Runs on data the app already has — no extra database reads.
class NgmyAdminAlerts {
  static const _prefsKey = 'ngmy_admin_alert_seen_v1';
  static Map<String, Set<String>>? _seen;
  static bool _running = false;

  static Future<Map<String, Set<String>>> _load() async {
    if (_seen != null) return _seen!;
    final out = <String, Set<String>>{};
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw != null && raw.isNotEmpty) {
        final m = jsonDecode(raw);
        if (m is Map) {
          m.forEach((k, v) {
            if (v is List) out['$k'] = v.map((e) => '$e').toSet();
          });
        }
      }
    } catch (_) {}
    return _seen = out;
  }

  static Future<void> _save(Map<String, Set<String>> seen) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      // Keep each list's memory bounded (newest ids are what matter).
      final trimmed = {
        for (final e in seen.entries) e.key: (e.value.length > 3000 ? e.value.toList().sublist(e.value.length - 3000) : e.value.toList()),
      };
      await prefs.setString(_prefsKey, jsonEncode(trimmed));
    } catch (_) {}
  }

  /// Returns the alerts to show (title, body, tag) and remembers everything as seen.
  static Future<List<({String title, String body, String tag})>> sweep(List<NgmyAdminAlertCategory> categories) async {
    if (_running) return const [];
    _running = true;
    try {
      final seen = await _load();
      final alerts = <({String title, String body, String tag})>[];
      var changed = false;
      for (final c in categories) {
        final ids = c.items.map((e) => e.id).where((id) => id.isNotEmpty).toSet();
        final known = seen[c.key];
        if (known == null) {
          // First look at this list on this phone: remember quietly.
          seen[c.key] = ids;
          changed = true;
          continue;
        }
        final fresh = c.items.where((e) => e.id.isNotEmpty && !known.contains(e.id)).toList();
        if (fresh.isEmpty) continue;
        known.addAll(fresh.map((e) => e.id));
        changed = true;
        final labels = fresh.map((e) => e.label.trim()).where((s) => s.isNotEmpty).toList();
        if (fresh.length == 1) {
          alerts.add((
            title: c.singular,
            body: labels.isEmpty ? 'Open the admin dashboard to review it.' : labels.first,
            tag: 'admin_${c.key}_${fresh.first.id}',
          ));
        } else {
          final shown = labels.take(3).join(', ');
          alerts.add((
            title: '${fresh.length} ${c.plural}',
            body: shown.isEmpty ? 'Open the admin dashboard to review them.' : '$shown${labels.length > 3 ? '…' : ''}',
            tag: 'admin_${c.key}_${fresh.length}_${fresh.first.id}',
          ));
        }
      }
      if (changed) await _save(seen);
      return alerts;
    } finally {
      _running = false;
    }
  }

  /// A stable id for a dashboard row (its id, or its contents when it has none).
  static String rowId(Map<String, dynamic> row, [List<String> keys = const ['id', 'registryId', 'orderId', 'applicationId', 'email']]) {
    for (final k in keys) {
      final v = '${row[k] ?? ''}'.trim();
      if (v.isNotEmpty) return '$k:$v';
    }
    return 'h:${jsonEncode(row).hashCode}';
  }

  /// A short name for a dashboard row ("Amina Kweka", "Toyota Camry — \$12,000"…).
  static String rowLabel(Map<String, dynamic> row) {
    String pick(List<String> keys) {
      for (final k in keys) {
        final v = '${row[k] ?? ''}'.trim();
        if (v.isNotEmpty && v.length <= 80) return v;
      }
      return '';
    }

    final name = pick(['fullName', 'fullLegalName', 'name', 'applicantName', 'businessName', 'username', 'title', 'itemTitle', 'listingTitle']);
    final who = pick(['buyerName', 'buyerEmail', 'applicantEmail', 'email', 'userEmail']);
    final where = pick(['state', 'city']);
    final amount = row['amount'] ?? row['total'] ?? row['price'];
    final money = amount is num && amount > 0 ? '\$${amount.toStringAsFixed(2)}' : '';
    return [
      if (name.isNotEmpty) name else if (who.isNotEmpty) who,
      if (money.isNotEmpty) money,
      if (where.isNotEmpty) where,
    ].join(' · ');
  }
}
