import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_slides_storage_idb_stub.dart' if (dart.library.html) 'ngmy_slides_storage_idb_web.dart';

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

  static const _idbKey = 'ngmy_admin_alert_seen_v2';

  /// Short, stable fingerprint of a row id (FNV-1a) — keeps the memory small.
  static String fp(String id) {
    var h = 0x811c9dc5;
    for (final c in id.codeUnits) {
      h ^= c;
      h = (h * 0x01000193) & 0xFFFFFFFF;
    }
    return h.toRadixString(36);
  }

  static Map<String, Set<String>> _decode(String? raw, {bool hashIds = false}) {
    final out = <String, Set<String>>{};
    if (raw == null || raw.isEmpty) return out;
    try {
      final m = jsonDecode(raw);
      if (m is Map) {
        m.forEach((k, v) {
          if (v is List) out['$k'] = v.map((e) => hashIds ? fp('$e') : '$e').toSet();
        });
      }
    } catch (_) {}
    return out;
  }

  /// What the admin was already told about. Kept in IndexedDB: the old copy lived in local
  /// storage, which is full on the web app, so it never saved and the same "New member
  /// joined" came back every time the app opened.
  static Future<Map<String, Set<String>>> _load() async {
    if (_seen != null) return _seen!;
    var out = _decode(await ngmySlidesIdbGet(_idbKey));
    if (out.isEmpty) {
      try {
        final prefs = await SharedPreferences.getInstance();
        out = _decode(prefs.getString(_prefsKey), hashIds: true);
      } catch (_) {}
    }
    return _seen = out;
  }

  static Future<void> _save(Map<String, Set<String>> seen) async {
    final trimmed = {
      for (final e in seen.entries) e.key: (e.value.length > 4000 ? e.value.toList().sublist(e.value.length - 4000) : e.value.toList()),
    };
    final json = jsonEncode(trimmed);
    final ok = await ngmySlidesIdbPut(_idbKey, json);
    try {
      final prefs = await SharedPreferences.getInstance();
      if (ok) {
        // Free the full local storage; IndexedDB has it now.
        await prefs.remove(_prefsKey);
      } else {
        await prefs.setString(_prefsKey, jsonEncode({for (final e in trimmed.entries) e.key: e.value}));
      }
    } catch (_) {}
  }

  /// True the first time [id] in [category] is seen on this phone (remembered for good).
  static Future<bool> firstTime(String category, String id) async {
    final seen = await _load();
    final set = seen.putIfAbsent(category, () => <String>{});
    if (!set.add(fp(id))) return false;
    await _save(seen);
    return true;
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
        final ids = c.items.map((e) => e.id).where((id) => id.isNotEmpty).map(fp).toSet();
        final known = seen[c.key];
        if (known == null) {
          // First look at this list on this phone: remember quietly.
          seen[c.key] = ids;
          changed = true;
          continue;
        }
        final fresh = <NgmyAdminAlertItem>[];
        final freshIds = <String>{};
        for (final e in c.items) {
          if (e.id.isEmpty) continue;
          final h = fp(e.id);
          if (known.contains(h) || !freshIds.add(h)) continue;
          fresh.add(e);
        }
        if (fresh.isEmpty) continue;
        known.addAll(freshIds);
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
