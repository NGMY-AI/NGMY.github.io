import 'dart:async';
import 'dart:convert';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_civic_registry_access.dart';
import 'ngmy_civic_registry_id_card.dart';
import 'ngmy_civic_registry_stats.dart';

/// Civic Registry members — isolated from general app user profiles.
class NgmyCivicRegistryMembers {
  static const _prefsKey = 'ngmy_civic_registry_members_v1';
  static const cloudSettingsKey = 'civic_registry_members';

  static String emailKey(String email) => email.toLowerCase().trim();

  /// Short, stable, deterministic token derived from an email — used to
  /// keep self-enrollment links short (no full email/percent-encoding in
  /// the URL) while still letting a registrar recognize their own
  /// attributed enrollments later: recompute the token from their own
  /// email and compare, rather than reversing the token back to an email.
  /// FNV-1a 32-bit, base36-encoded — never rely on Dart's built-in
  /// String.hashCode here, since it isn't guaranteed stable across
  /// platforms/releases and an already-shared link must keep working.
  static String registrarLinkToken(String email) {
    final bytes = utf8.encode(emailKey(email));
    var hash = 0x811c9dc5;
    for (final b in bytes) {
      hash ^= b;
      hash = (hash * 0x01000193) & 0xFFFFFFFF;
    }
    return hash.toRadixString(36);
  }

  static List<Map<String, dynamic>> listFrom(dynamic config) {
    final raw = (config as dynamic).civicRegistryMembers;
    if (raw is! List) return [];
    final list = raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    sortNewestEnrolledFirst(list);
    return list;
  }

  /// Newest enrollment first, oldest last. Null / missing `enrolledAt` go to the bottom.
  static int compareEnrolledAtDesc(Map<String, dynamic> a, Map<String, dynamic> b) {
    final da = DateTime.tryParse((a['enrolledAt'] ?? '').toString());
    final db = DateTime.tryParse((b['enrolledAt'] ?? '').toString());
    if (da == null && db == null) {
      final ua = DateTime.tryParse((a['updatedAt'] ?? '').toString());
      final ub = DateTime.tryParse((b['updatedAt'] ?? '').toString());
      if (ua != null && ub != null) return ub.compareTo(ua);
      return 0;
    }
    if (da == null) return 1;
    if (db == null) return -1;
    return db.compareTo(da);
  }

  static void sortNewestEnrolledFirst(List<Map<String, dynamic>> members) {
    members.sort(compareEnrolledAtDesc);
  }

  static void setList(dynamic config, List<Map<String, dynamic>> members) {
    sortNewestEnrolledFirst(members);
    (config as dynamic).civicRegistryMembers = members;
  }

  static List<Map<String, dynamic>> removedFrom(dynamic config) {
    try {
      final raw = (config as dynamic).civicRegistryRemoved;
      if (raw is! List) return [];
      return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    } catch (_) {
      return [];
    }
  }

  static void setRemoved(dynamic config, List<Map<String, dynamic>> removed) {
    try {
      (config as dynamic).civicRegistryRemoved = removed;
    } catch (_) {}
  }

  static List<Map<String, dynamic>> deceasedFrom(dynamic config) {
    try {
      final raw = (config as dynamic).civicRegistryDeceased;
      if (raw is! List) return [];
      return raw.map((e) => Map<String, dynamic>.from(e as Map)).toList();
    } catch (_) {
      return [];
    }
  }

  static void setDeceased(dynamic config, List<Map<String, dynamic>> deceased) {
    try {
      (config as dynamic).civicRegistryDeceased = deceased;
    } catch (_) {}
  }

  static int deceasedCount(dynamic config) => deceasedFrom(config).length;

  /// Sum of [familyMembers] across all active registry rows (household headcount totals).
  static int totalFamilyMembersFrom(dynamic config) => nationwideFamilyTotal(config);

  static int familySizeOf(Map<String, dynamic> member) {
    final raw = member['familyMembers'];
    final n = raw is num ? raw.toInt() : int.tryParse('${raw ?? ''}') ?? 1;
    return n < 1 ? 1 : n;
  }

  static String _nationwidePersonKey(Map<String, dynamic> m) {
    final rid = (m['registryId'] ?? '').toString().trim().toUpperCase();
    if (rid.isNotEmpty) return 'id:$rid';
    final email = emailKey((m['email'] ?? '').toString());
    if (email.isNotEmpty && !email.contains('***')) return 'em:$email';
    return '';
  }

  static bool _nationwideRowIsDeleted(dynamic config, Map<String, dynamic> m) {
    final email = emailKey((m['email'] ?? '').toString());
    final rid = (m['registryId'] ?? '').toString().trim().toUpperCase();
    Map<String, dynamic>? tomb;
    for (final r in removedFrom(config)) {
      final e = emailKey((r['email'] ?? '').toString());
      final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
      if (email.isNotEmpty && e == email) {
        tomb = r;
        break;
      }
      if (rid.isNotEmpty && id == rid) {
        tomb = r;
        break;
      }
    }
    if (tomb == null) return false;
    final removedAt = DateTime.tryParse((tomb['removedAt'] ?? '').toString());
    final restoredAt = DateTime.tryParse((m['restoredAt'] ?? '').toString());
    if (restoredAt != null && (removedAt == null || !restoredAt.isBefore(removedAt))) {
      return false;
    }
    return true;
  }

  /// Live Civic Registry members enrolled in a US state — same people the
  /// Members list is meant to show, nationwide across every registrar.
  static List<Map<String, dynamic>> nationwideRegisteredFrom(dynamic config) {
    final seen = <String>{};
    final out = <Map<String, dynamic>>[];
    for (final m in listFrom(config)) {
      final rid = (m['registryId'] ?? '').toString().trim();
      if (rid.isEmpty) continue;
      if (isPhantomMemberRow(m)) continue;
      if (!NgmyCivicRegistryStats.isKnownUsState((m['state'] ?? '').toString())) continue;
      if (isDeceased(config, email: (m['email'] ?? '').toString(), registryId: rid)) continue;
      if (_nationwideRowIsDeleted(config, m)) continue;
      final key = _nationwidePersonKey(m);
      if (key.isEmpty || !seen.add(key)) continue;
      out.add(m);
    }
    return out;
  }

  static int nationwideMemberCount(dynamic config) => nationwideRegisteredFrom(config).length;

  static int nationwideFamilyTotal(dynamic config) {
    var total = 0;
    for (final m in nationwideRegisteredFrom(config)) {
      total += familySizeOf(m);
    }
    return total;
  }

  static bool isRemoved(dynamic config, {String email = '', String registryId = ''}) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    if (key.isEmpty && rid.isEmpty) return false;
    for (final row in removedFrom(config)) {
      final e = emailKey((row['email'] ?? '').toString());
      final id = (row['registryId'] ?? '').toString().trim().toUpperCase();
      if (key.isNotEmpty && e == key) return true;
      if (rid.isNotEmpty && id == rid) return true;
    }
    return false;
  }

  static bool isDeceased(dynamic config, {String email = '', String registryId = ''}) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    for (final row in deceasedFrom(config)) {
      final e = emailKey((row['email'] ?? '').toString());
      final id = (row['registryId'] ?? '').toString().trim().toUpperCase();
      if (key.isNotEmpty && e == key) return true;
      if (rid.isNotEmpty && id == rid) return true;
    }
    return false;
  }

  static Map<String, dynamic>? findDeceasedByEmail(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return null;
    for (final row in deceasedFrom(config)) {
      if (emailKey((row['email'] ?? '').toString()) == key) {
        return Map<String, dynamic>.from(row);
      }
    }
    return null;
  }

  static Map<String, dynamic>? findDeceasedByRegistryId(dynamic config, String registryId) {
    final rid = registryId.trim().toUpperCase();
    if (rid.isEmpty) return null;
    for (final row in deceasedFrom(config)) {
      if ((row['registryId'] ?? '').toString().trim().toUpperCase() == rid) {
        return Map<String, dynamic>.from(row);
      }
    }
    return null;
  }

  /// Snapshot fields for search/display — prefers stored snapshot, falls back to row keys.
  static Map<String, dynamic>? deceasedMemberSnapshot(Map<String, dynamic> row) {
    final snapRaw = row['snapshot'];
    if (snapRaw is Map) return Map<String, dynamic>.from(snapRaw);
    final email = emailKey((row['email'] ?? '').toString());
    if (email.isEmpty && (row['registryId'] ?? '').toString().trim().isEmpty) return null;
    return Map<String, dynamic>.from(row);
  }

  static List<Map<String, dynamic>> deceasedSnapshotsForState(dynamic config, String state) {
    final st = state.trim().toLowerCase();
    if (st.isEmpty) return const [];
    return deceasedFrom(config).where((row) {
      final snap = deceasedMemberSnapshot(row);
      final rowState = (snap?['state'] ?? row['state'] ?? '').toString().trim().toLowerCase();
      return rowState == st;
    }).map((e) => Map<String, dynamic>.from(e)).toList();
  }

  /// Move a live member into the nationwide deceased roster (searchable, not active).
  static bool markDeceased(
    dynamic config, {
    required String email,
    String registryId = '',
    String markedByEmail = '',
    String markedByName = '',
  }) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    Map<String, dynamic>? existing = key.isNotEmpty ? findByEmail(config, email) : null;
    existing ??= rid.isNotEmpty ? findByRegistryId(config, rid) : null;
    if (existing == null) return false;

    final snapEmail = emailKey((existing['email'] ?? '').toString());
    final snapRid = (existing['registryId'] ?? '').toString().trim().toUpperCase();
    final state = (existing['state'] ?? '').toString();
    final now = DateTime.now().toUtc();

    final members = listFrom(config);
    members.removeWhere((m) {
      final e = emailKey((m['email'] ?? '').toString());
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (snapEmail.isNotEmpty && e == snapEmail) return true;
      if (snapRid.isNotEmpty && id == snapRid) return true;
      return false;
    });
    setList(config, members);

    final next = deceasedFrom(config);
    next.removeWhere((r) {
      final e = emailKey((r['email'] ?? '').toString());
      final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
      if (snapEmail.isNotEmpty && e == snapEmail) return true;
      if (snapRid.isNotEmpty && id == snapRid) return true;
      return false;
    });
    next.add({
      'email': snapEmail.isNotEmpty ? snapEmail : key,
      'registryId': snapRid.isNotEmpty ? snapRid : rid,
      'state': state.trim(),
      'deceasedAt': now.toIso8601String(),
      'markedByEmail': emailKey(markedByEmail),
      if (markedByName.trim().isNotEmpty) 'markedByName': markedByName.trim(),
      'snapshot': Map<String, dynamic>.from(existing),
    });
    setDeceased(config, next);
    _clearTombstone(config, snapEmail, registryId: snapRid);
    clearSoftDeletesForActiveMembers(config);
    return true;
  }

  /// Admin: move a deceased record back into the active civic registry (their prior state).
  static bool restoreFromDeceased(
    dynamic config, {
    required String email,
    String registryId = '',
  }) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    Map<String, dynamic>? row = key.isNotEmpty ? findDeceasedByEmail(config, email) : null;
    row ??= rid.isNotEmpty ? findDeceasedByRegistryId(config, rid) : null;
    if (row == null) return false;

    final snap = deceasedMemberSnapshot(row);
    if (snap == null) return false;

    final rowEmail = emailKey((row['email'] ?? '').toString());
    final rowRid = (row['registryId'] ?? '').toString().trim().toUpperCase();

    final nextDeceased = deceasedFrom(config)
      ..removeWhere((r) {
        final e = emailKey((r['email'] ?? '').toString());
        final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
        if (rowEmail.isNotEmpty && e == rowEmail) return true;
        if (rowRid.isNotEmpty && id == rowRid) return true;
        return false;
      });
    setDeceased(config, nextDeceased);

    final member = Map<String, dynamic>.from(snap);
    final now = DateTime.now().toUtc().toIso8601String();
    member['restoredAt'] = now;
    member['updatedAt'] = now;
    upsert(config, member);
    return true;
  }

  /// Admin: permanently remove a deceased record from the nationwide deceased roster.
  static bool deleteDeceasedRecord(
    dynamic config, {
    required String email,
    String registryId = '',
  }) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    Map<String, dynamic>? row = key.isNotEmpty ? findDeceasedByEmail(config, email) : null;
    row ??= rid.isNotEmpty ? findDeceasedByRegistryId(config, rid) : null;
    if (row == null) return false;

    final snap = deceasedMemberSnapshot(row);
    final rowEmail = emailKey((row['email'] ?? snap?['email'] ?? '').toString());
    final rowRid = (row['registryId'] ?? snap?['registryId'] ?? '').toString().trim().toUpperCase();
    final state = (snap?['state'] ?? row['state'] ?? '').toString();

    final nextDeceased = deceasedFrom(config)
      ..removeWhere((r) {
        final e = emailKey((r['email'] ?? '').toString());
        final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
        if (rowEmail.isNotEmpty && e == rowEmail) return true;
        if (rowRid.isNotEmpty && id == rowRid) return true;
        return false;
      });
    setDeceased(config, nextDeceased);

    if (rowEmail.isNotEmpty || rowRid.isNotEmpty) {
      _addTombstone(
        config,
        email: rowEmail,
        registryId: rowRid,
        state: state,
        permanent: true,
      );
    }
    return true;
  }

  /// True when a tombstone was actually dropped.
  static bool _clearTombstone(dynamic config, String email, {String registryId = ''}) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    if (key.isEmpty && rid.isEmpty) return false;
    final before = removedFrom(config);
    final next = before.where((r) {
      final e = emailKey((r['email'] ?? '').toString());
      final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
      if (key.isNotEmpty && e == key) return false;
      if (rid.isNotEmpty && id == rid) return false;
      return true;
    }).map((e) => Map<String, dynamic>.from(e)).toList();
    if (next.length == before.length) return false;
    setRemoved(config, next);
    return true;
  }

  /// Drop delete rows for anyone explicitly restored or re-enrolled.
  ///
  /// Only [restoredAt] counts as "this person is back". Clearing tombstones for
  /// every live row resurrected deleted members: a cloud merge re-added the row,
  /// that row then erased its own tombstone, and the delete could never stick.
  static int clearSoftDeletesForActiveMembers(dynamic config) {
    final restoredByEmail = <String, DateTime>{};
    final restoredByRid = <String, DateTime>{};
    for (final m in listFrom(config)) {
      final at = DateTime.tryParse((m['restoredAt'] ?? '').toString());
      if (at == null) continue;
      final e = emailKey((m['email'] ?? '').toString());
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (e.isNotEmpty) restoredByEmail[e] = at;
      if (id.isNotEmpty) restoredByRid[id] = at;
    }
    if (restoredByEmail.isEmpty && restoredByRid.isEmpty) return 0;

    final before = removedFrom(config);
    final next = before.where((r) {
      final e = emailKey((r['email'] ?? '').toString());
      final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
      final restored = (e.isNotEmpty ? restoredByEmail[e] : null) ??
          (id.isNotEmpty ? restoredByRid[id] : null);
      if (restored == null) return true;
      final removedAt = DateTime.tryParse((r['removedAt'] ?? '').toString());
      // Deleted again after the restore — that delete stands.
      if (removedAt != null && removedAt.isAfter(restored)) return true;
      return false;
    }).map((e) => Map<String, dynamic>.from(e)).toList();
    if (next.length == before.length) return 0;
    setRemoved(config, next);
    return before.length - next.length;
  }

  static const softDeleteDays = 7;

  static void _addTombstone(
    dynamic config, {
    required String email,
    String registryId = '',
    String state = '',
    Map<String, dynamic>? snapshot,
    bool permanent = false,
  }) {
    final key = emailKey(email);
    final rid = registryId.trim();
    if (key.isEmpty && rid.isEmpty) return;
    final now = DateTime.now().toUtc();
    final next = removedFrom(config);
    next.removeWhere((r) {
      final e = emailKey((r['email'] ?? '').toString());
      final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
      if (key.isNotEmpty && e == key) return true;
      if (rid.isNotEmpty && id == rid.toUpperCase()) return true;
      return false;
    });
    next.add({
      'email': key,
      'registryId': rid,
      'state': state.trim(),
      'removedAt': now.toIso8601String(),
      'permanent': permanent,
      'softDelete': !permanent,
      if (!permanent) 'purgeAt': now.add(const Duration(days: softDeleteDays)).toIso8601String(),
      if (snapshot != null) 'snapshot': Map<String, dynamic>.from(snapshot),
    });
    setRemoved(config, next);
  }

  /// Recoverable soft-deletes for [state] that are still inside the 7-day window.
  static List<Map<String, dynamic>> softDeletedForState(dynamic config, String state) {
    final st = state.trim().toLowerCase();
    final now = DateTime.now().toUtc();
    final activeEmails = <String>{};
    final activeRids = <String>{};
    for (final m in listFrom(config)) {
      final e = emailKey((m['email'] ?? '').toString());
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (e.isNotEmpty) activeEmails.add(e);
      if (id.isNotEmpty) activeRids.add(id);
    }
    return removedFrom(config).where((r) {
      if (r['permanent'] == true) return false;
      if (r['softDelete'] != true) return false;
      if (st.isNotEmpty && (r['state'] ?? '').toString().trim().toLowerCase() != st) {
        return false;
      }
      final email = emailKey((r['email'] ?? '').toString());
      final rid = (r['registryId'] ?? '').toString().trim().toUpperCase();
      // Already restored into the live roster — never show as pending delete.
      if (email.isNotEmpty && activeEmails.contains(email)) return false;
      if (rid.isNotEmpty && activeRids.contains(rid)) return false;
      final purge = DateTime.tryParse((r['purgeAt'] ?? '').toString())?.toUtc();
      if (purge != null && !purge.isAfter(now)) return false;
      return true;
    }).map((e) => Map<String, dynamic>.from(e)).toList();
  }

  static int softDeletedCountForState(dynamic config, String state) =>
      softDeletedForState(config, state).length;

  /// Drop expired soft-deletes (past purgeAt). Permanent tombstones stay.
  static int purgeExpiredSoftDeletes(dynamic config) {
    final now = DateTime.now().toUtc();
    final kept = <Map<String, dynamic>>[];
    var purged = 0;
    for (final r in removedFrom(config)) {
      final row = Map<String, dynamic>.from(r);
      if (row['permanent'] == true) {
        kept.add(row);
        continue;
      }
      final purge = DateTime.tryParse((row['purgeAt'] ?? '').toString())?.toUtc();
      final removedAt = DateTime.tryParse((row['removedAt'] ?? '').toString())?.toUtc();
      final deadline = purge ??
          (removedAt == null ? null : removedAt.add(const Duration(days: softDeleteDays)));
      if (deadline != null && !deadline.isAfter(now)) {
        // Keep a permanent tombstone so cloud merges cannot resurrect the row.
        kept.add({
          'email': emailKey((row['email'] ?? '').toString()),
          'registryId': (row['registryId'] ?? '').toString(),
          'state': (row['state'] ?? '').toString(),
          'removedAt': (row['removedAt'] ?? now.toIso8601String()).toString(),
          'permanent': true,
          'softDelete': false,
        });
        purged++;
        continue;
      }
      kept.add(row);
    }
    if (purged > 0) setRemoved(config, kept);
    return purged;
  }

  static bool restoreSoftDeleted(
    dynamic config, {
    String email = '',
    String registryId = '',
  }) {
    final key = emailKey(email);
    final rid = registryId.trim().toUpperCase();
    final removed = removedFrom(config);
    final matches = <int>[];
    for (var i = 0; i < removed.length; i++) {
      final r = removed[i];
      if (r['permanent'] == true) continue;
      final e = emailKey((r['email'] ?? '').toString());
      final id = (r['registryId'] ?? '').toString().trim().toUpperCase();
      if (key.isNotEmpty && e == key) {
        matches.add(i);
        continue;
      }
      if (rid.isNotEmpty && id == rid) matches.add(i);
    }
    if (matches.isEmpty) return false;

    Map<String, dynamic>? snap;
    for (final i in matches) {
      final snapRaw = removed[i]['snapshot'];
      if (snapRaw is Map) {
        snap = Map<String, dynamic>.from(snapRaw);
        break;
      }
    }
    if (snap == null) return false;

    // Remove every matching soft-delete row (email and/or registry id).
    final drop = matches.toSet();
    final nextRemoved = <Map<String, dynamic>>[];
    for (var i = 0; i < removed.length; i++) {
      if (drop.contains(i)) continue;
      nextRemoved.add(Map<String, dynamic>.from(removed[i]));
    }
    setRemoved(config, nextRemoved);

    // Newer stamp so cloud tombstone merges cannot resurrect this delete.
    final now = DateTime.now().toUtc().toIso8601String();
    snap['updatedAt'] = now;
    snap['restoredAt'] = now;
    final snapEmail = emailKey((snap['email'] ?? key).toString());
    final snapRid = (snap['registryId'] ?? rid).toString();
    if (snapEmail.isNotEmpty) snap['email'] = snapEmail;
    upsert(config, snap);
    _clearTombstone(config, snapEmail, registryId: snapRid);
    clearSoftDeletesForActiveMembers(config);
    return true;
  }

  /// AR soft-delete: hide for 7 days, recoverable, then permanent.
  static void softDeleteByEmail(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return;
    final existing = findByEmail(config, email);
    if (existing == null) {
      _addTombstone(config, email: key, permanent: false);
      return;
    }
    final registryId = (existing['registryId'] ?? '').toString();
    final state = (existing['state'] ?? '').toString();
    final members = listFrom(config);
    final idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == key);
    if (idx >= 0) members.removeAt(idx);
    setList(config, members);
    _addTombstone(
      config,
      email: key,
      registryId: registryId,
      state: state,
      snapshot: existing,
      permanent: false,
    );
  }

  static void softDeleteByRegistryId(dynamic config, String registryId) {
    final rid = registryId.trim().toUpperCase();
    if (rid.isEmpty) return;
    final existing = findByRegistryId(config, rid);
    if (existing == null) return;
    final email = emailKey((existing['email'] ?? '').toString());
    final state = (existing['state'] ?? '').toString();
    final members = listFrom(config);
    final idx = members.indexWhere(
      (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid,
    );
    if (idx >= 0) members.removeAt(idx);
    setList(config, members);
    _addTombstone(
      config,
      email: email,
      registryId: rid,
      state: state,
      snapshot: existing,
      permanent: false,
    );
  }

  /// Admin hard-delete: gone immediately, not recoverable.
  static void permanentDeleteByEmail(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return;
    final existing = findByEmail(config, email);
    final registryId = (existing?['registryId'] ?? '').toString();
    final state = (existing?['state'] ?? '').toString();
    final members = listFrom(config);
    final idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == key);
    if (idx >= 0) members.removeAt(idx);
    setList(config, members);
    _addTombstone(
      config,
      email: key,
      registryId: registryId,
      state: state,
      permanent: true,
    );
  }

  static void permanentDeleteByRegistryId(dynamic config, String registryId) {
    final rid = registryId.trim().toUpperCase();
    if (rid.isEmpty) return;
    final existing = findByRegistryId(config, rid);
    final email = emailKey((existing?['email'] ?? '').toString());
    final state = (existing?['state'] ?? '').toString();
    final members = listFrom(config);
    final idx = members.indexWhere(
      (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid,
    );
    if (idx >= 0) members.removeAt(idx);
    setList(config, members);
    _addTombstone(
      config,
      email: email,
      registryId: rid,
      state: state,
      permanent: true,
    );
  }

  static Map<String, dynamic> buildRecord({
    required String email,
    required String fullName,
    required String dob,
    required String idType,
    required String homeAddress,
    required String phone,
    required String city,
    required String room,
    required String state,
    required String registryId,
    int familyMembers = 1,
    int familyMales = 0,
    int familyFemales = 0,
    int helps = 0,
    int missed = 0,
    String? enrolledAt,
    String? enrollmentSource,
    String? registeredByToken,
  }) {
    final total = familyMembers < 1 ? 1 : familyMembers;
    final males = familyMales < 0 ? 0 : familyMales;
    final females = familyFemales < 0 ? 0 : familyFemales;
    final source = (enrollmentSource ?? '').trim();
    final registeredBy = (registeredByToken ?? '').trim();
    return {
      'email': emailKey(email),
      'fullName': fullName.trim(),
      'dob': dob.trim(),
      'idType': idType.trim(),
      'homeAddress': homeAddress.trim(),
      'phone': phone.trim(),
      'city': city.trim(),
      'room': room.trim(),
      'state': state.trim(),
      'registryId': registryId.trim(),
      'familyMembers': total,
      'familyMales': males,
      'familyFemales': females,
      'helps': helps,
      'missed': missed,
      'enrolledAt': enrolledAt ?? DateTime.now().toUtc().toIso8601String(),
      if (source.isNotEmpty) 'enrollmentSource': source,
      // Which Authorized Registrar's self-enrollment link the member used
      // (see registrarLinkToken — a short opaque token, not the raw
      // email) — lets a registrar's own self-enroll traffic be attributed
      // to them even when several registrars share the same state.
      if (registeredBy.isNotEmpty) 'registeredByToken': registeredBy,
    };
  }

  static void upsert(dynamic config, Map<String, dynamic> record, {bool forceNew = false}) {
    final members = listFrom(config);
    final next = Map<String, dynamic>.from(record);
    final email = emailKey((next['email'] ?? '').toString());
    next['email'] = email;
    final rid = (next['registryId'] ?? '').toString().trim();
    final now = DateTime.now().toUtc().toIso8601String();

    // Registrar can enroll without email; registryId is the unique row key.
    if (email.isEmpty && rid.isEmpty) return;
    // Re-adding someone who was deleted must survive the next cloud merge, and
    // restoredAt is the only stamp a delete tombstone yields to.
    if (_clearTombstone(config, email, registryId: rid)) {
      next['restoredAt'] = now;
    }

    if (forceNew) {
      if (rid.isEmpty) return;
      next['enrolledAt'] = next['enrolledAt'] ?? now;
      next['updatedAt'] = now;
      members.removeWhere(
        (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid.toUpperCase(),
      );
      members.insert(0, next);
      setList(config, members);
      return;
    }

    var idx = rid.isNotEmpty
        ? members.indexWhere(
            (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid.toUpperCase(),
          )
        : -1;
    if (idx < 0 && email.isNotEmpty) {
      idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == email);
    }
    if (idx >= 0) {
      final keep = members[idx];
      next['helps'] = next['helps'] ?? keep['helps'] ?? 0;
      next['missed'] = next['missed'] ?? keep['missed'] ?? 0;
      // Stamp deliberate help/missed changes so no later merge can undo them.
      // Removing a help used to be impossible: the counters merged by keeping
      // the larger number, so the pre-upload cloud read handed the old count
      // straight back and the member never left Top Helpers.
      final countersChanged = _intOf(next['helps']) != _intOf(keep['helps']) ||
          _intOf(next['missed']) != _intOf(keep['missed']);
      if (countersChanged) {
        next['activityAt'] = now;
      } else {
        final prevStamp = (next['activityAt'] ?? keep['activityAt'] ?? '').toString();
        if (prevStamp.isNotEmpty) next['activityAt'] = prevStamp;
      }
      next['familyMembers'] = next['familyMembers'] ?? keep['familyMembers'] ?? 1;
      next['familyMales'] = next['familyMales'] ?? keep['familyMales'] ?? 0;
      next['familyFemales'] = next['familyFemales'] ?? keep['familyFemales'] ?? 0;
      next['enrolledAt'] = keep['enrolledAt'] ?? next['enrolledAt'];
      next['passportGranted'] = next['passportGranted'] ?? keep['passportGranted'] ?? false;
      next['linkedAppEmail'] = (next['linkedAppEmail'] ?? keep['linkedAppEmail'] ?? '').toString();
      next['passportGrantedAt'] = keep['passportGrantedAt'] ?? next['passportGrantedAt'];
      next['idPhotoPath'] = (next['idPhotoPath'] ?? keep['idPhotoPath'] ?? '').toString();
      next['nicknames'] = next['nicknames'] ?? keep['nicknames'] ?? const <String>[];
      if (!next.containsKey('showNicknames')) next['showNicknames'] = keep['showNicknames'] == true;
      if ((next['registryId'] ?? '').toString().trim().isEmpty) {
        next['registryId'] = keep['registryId'] ?? rid;
      }
      if ((next['enrollmentSource'] ?? '').toString().trim().isEmpty) {
        next['enrollmentSource'] =
            (keep['enrollmentSource'] ?? keep['source'] ?? '').toString();
      }
      if ((next['registeredByToken'] ?? '').toString().trim().isEmpty) {
        next['registeredByToken'] = (keep['registeredByToken'] ?? '').toString();
      }
      if (!next.containsKey('profileFlags') || next['profileFlags'] == null) {
        next['profileFlags'] = keep['profileFlags'] ?? const <String, dynamic>{};
      }
      NgmyCivicRegistryAccess.mergeInto(next, keep);
      next['updatedAt'] = now;
      members[idx] = next;
    } else {
      next['enrolledAt'] = next['enrolledAt'] ?? now;
      next['updatedAt'] = now;
      members.insert(0, next);
    }
    setList(config, members);
  }

  static String _mergeKey(Map<String, dynamic> m) {
    final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
    if (id.isNotEmpty) return 'id:$id';
    final em = emailKey((m['email'] ?? '').toString());
    if (em.isNotEmpty) return 'em:$em';
    return '';
  }

  /// Update an existing member in place (by original email or registry ID). Never adds a new row.
  static Map<String, dynamic>? updateExisting(
    dynamic config, {
    required String originalEmail,
    String registryId = '',
    required Map<String, dynamic> fields,
  }) {
    final members = listFrom(config);
    final fromEmail = emailKey(originalEmail);
    final rid = registryId.trim().toUpperCase();
    var idx = fromEmail.isEmpty
        ? -1
        : members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == fromEmail);
    if (idx < 0 && rid.isNotEmpty) {
      idx = members.indexWhere(
        (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid,
      );
    }
    if (idx < 0) return null;

    final keep = Map<String, dynamic>.from(members[idx]);
    final next = Map<String, dynamic>.from(keep);
    for (final e in fields.entries) {
      next[e.key] = e.value;
    }

    final newEmail = emailKey((next['email'] ?? keep['email'] ?? '').toString());
    if (newEmail.isEmpty) return null;

    // If email changed, ensure no other member already owns it.
    if (newEmail != emailKey((keep['email'] ?? '').toString())) {
      final clash = members.indexWhere(
        (m) => emailKey((m['email'] ?? '').toString()) == newEmail,
      );
      if (clash >= 0 && clash != idx) return null;
    }

    next['email'] = newEmail;
    next['registryId'] = (keep['registryId'] ?? next['registryId'] ?? '').toString();
    next['helps'] = keep['helps'] ?? next['helps'] ?? 0;
    next['missed'] = keep['missed'] ?? next['missed'] ?? 0;
    next['enrolledAt'] = keep['enrolledAt'] ?? next['enrolledAt'];
    next['passportGranted'] = keep['passportGranted'] ?? next['passportGranted'] ?? false;
    next['linkedAppEmail'] = (next['linkedAppEmail'] ?? keep['linkedAppEmail'] ?? '').toString();
    next['passportGrantedAt'] = keep['passportGrantedAt'] ?? next['passportGrantedAt'];
    next['idPhotoPath'] = (next['idPhotoPath'] ?? keep['idPhotoPath'] ?? '').toString();
    next['nicknames'] = next['nicknames'] ?? keep['nicknames'] ?? const <String>[];
    if (!fields.containsKey('showNicknames')) {
      next['showNicknames'] = keep['showNicknames'] == true;
    }
    // Never blank out state on edit — empty state hides the member from the state list.
    final stateNext = (next['state'] ?? '').toString().trim();
    final stateKeep = (keep['state'] ?? '').toString().trim();
    next['state'] = stateNext.isNotEmpty ? stateNext : stateKeep;
    next['updatedAt'] = DateTime.now().toUtc().toIso8601String();
    members[idx] = next;
    setList(config, members);
    _clearTombstone(config, newEmail, registryId: (next['registryId'] ?? '').toString());
    return next;
  }

  /// Move an enrolled member to another state, keeping the same registry record,
  /// helps/missed, passport, nicknames, photo, and all other fields.
  /// City/room are cleared because they belong to the old state's map.
  static String mintRegistryId(dynamic config, String state, {Iterable<String> extraExisting = const []}) {
    final prefix = NgmyCivicRegistryIdCard.stateCode(state);
    final existing = <String>{
      ...listFrom(config).map((m) => (m['registryId'] ?? '').toString().trim()).where((id) => id.isNotEmpty),
      ...extraExisting.map((e) => e.trim()).where((id) => id.isNotEmpty),
    };
    for (var i = 0; i < 5000; i++) {
      final candidate = '$prefix${math.Random().nextInt(8999999) + 1000000}';
      if (!existing.contains(candidate)) return candidate;
    }
    return '$prefix${DateTime.now().microsecondsSinceEpoch}';
  }

  static String _digitsOfRegistryId(String registryId) =>
      registryId.replaceAll(RegExp(r'[^0-9]'), '');

  /// Prefer the row that already has the correct state postal prefix and richer civic data.
  static Map<String, dynamic> _preferCanonicalMember(Map<String, dynamic> a, Map<String, dynamic> b) {
    final stateA = (a['state'] ?? '').toString();
    final stateB = (b['state'] ?? '').toString();
    final prefixA = NgmyCivicRegistryIdCard.stateCode(stateA);
    final prefixB = NgmyCivicRegistryIdCard.stateCode(stateB);
    final idA = (a['registryId'] ?? '').toString().trim().toUpperCase();
    final idB = (b['registryId'] ?? '').toString().trim().toUpperCase();
    final aOk = idA.startsWith(prefixA);
    final bOk = idB.startsWith(prefixB);
    if (aOk != bOk) return aOk ? a : b;

    int score(Map<String, dynamic> m) {
      var s = 0;
      if ((m['idPhotoPath'] ?? '').toString().trim().isNotEmpty) s += 8;
      if (m['passportGranted'] == true) s += 6;
      s += ((m['helps'] as num?)?.toInt() ?? 0).clamp(0, 50);
      s += ((m['missed'] as num?)?.toInt() ?? 0).clamp(0, 20);
      if ((m['nicknames'] is List) && (m['nicknames'] as List).isNotEmpty) s += 3;
      if ((m['previousRegistryId'] ?? '').toString().trim().isNotEmpty) s += 1;
      return s;
    }

    final sa = score(a);
    final sb = score(b);
    if (sa != sb) return sa >= sb ? a : b;
    // Prefer the older original enrollment when scores tie (newer row is often the accidental clone).
    final ea = DateTime.tryParse((a['enrolledAt'] ?? '').toString());
    final eb = DateTime.tryParse((b['enrolledAt'] ?? '').toString());
    if (ea != null && eb != null && ea != eb) return ea.isBefore(eb) ? a : b;
    return _preferNewerMember(a, b);
  }

  static Map<String, dynamic> _mergeMemberFields(Map<String, dynamic> keep, Map<String, dynamic> other) {
    final next = Map<String, dynamic>.from(keep);
    void keepIfEmpty(String key) {
      if ((next[key] ?? '').toString().trim().isEmpty && (other[key] ?? '').toString().trim().isNotEmpty) {
        next[key] = other[key];
      }
    }

    for (final key in [
      'fullName',
      'dob',
      'idType',
      'homeAddress',
      'phone',
      'city',
      'room',
      'linkedAppEmail',
      'idPhotoPath',
      'passportGrantedAt',
      'enrolledAt',
      'previousState',
      'previousRegistryId',
    ]) {
      keepIfEmpty(key);
    }
    if (next['passportGranted'] != true && other['passportGranted'] == true) {
      next['passportGranted'] = true;
    }
    _mergeHelpCounters(next, keep, other);
    if ((next['nicknames'] is! List || (next['nicknames'] as List).isEmpty) && other['nicknames'] is List) {
      next['nicknames'] = other['nicknames'];
    }
    if (!next.containsKey('showNicknames') && other.containsKey('showNicknames')) {
      next['showNicknames'] = other['showNicknames'];
    }
    final oldId = (other['registryId'] ?? '').toString().trim();
    final keepId = (next['registryId'] ?? '').toString().trim();
    if (oldId.isNotEmpty && oldId.toUpperCase() != keepId.toUpperCase()) {
      final prev = (next['previousRegistryId'] ?? '').toString().trim();
      if (prev.isEmpty) next['previousRegistryId'] = oldId;
    }
    // Keep the newest restore stamp so collapsing twins cannot lose the one
    // marker that lets a member survive a stale delete tombstone.
    final restoreKeep = DateTime.tryParse((next['restoredAt'] ?? '').toString());
    final restoreOther = DateTime.tryParse((other['restoredAt'] ?? '').toString());
    if (restoreOther != null && (restoreKeep == null || restoreOther.isAfter(restoreKeep))) {
      next['restoredAt'] = other['restoredAt'];
    }
    NgmyCivicRegistryAccess.mergeInto(next, other);
    // Collapsing twins is cleanup, not an edit: re-stamping updatedAt here made
    // every row look newer than any delete and defeated tombstones.
    final stampKeep = _memberStamp(next);
    final stampOther = _memberStamp(other);
    if (stampOther != null && (stampKeep == null || stampOther.isAfter(stampKeep))) {
      next['updatedAt'] = other['updatedAt'] ?? next['updatedAt'];
    }
    return next;
  }

  /// Collapse duplicate rows created by rewriting GE→GA (etc.) via upsert/merge-by-id.
  /// Same email, or same numeric ID digits, count as one person — never mint a second profile.
  static int dedupeMembers(dynamic config) {
    final members = listFrom(config);
    if (members.length < 2) return 0;

    String groupKey(Map<String, dynamic> m) {
      final email = emailKey((m['email'] ?? '').toString());
      if (email.isNotEmpty) return 'em:$email';
      final digits = _digitsOfRegistryId((m['registryId'] ?? '').toString());
      final name = (m['fullName'] ?? '').toString().trim().toLowerCase();
      if (digits.isNotEmpty) return 'dig:$digits|${name.isNotEmpty ? name : 'x'}';
      final phone = _phoneKey((m['phone'] ?? '').toString());
      if (phone.length >= 7) return 'ph:$phone';
      if (name.isNotEmpty) return 'nm:$name|${(m['dob'] ?? '').toString()}';
      return '';
    }

    final groups = <String, List<Map<String, dynamic>>>{};
    final orphans = <Map<String, dynamic>>[];
    for (final m in members) {
      final key = groupKey(m);
      if (key.isEmpty) {
        orphans.add(Map<String, dynamic>.from(m));
        continue;
      }
      (groups[key] ??= []).add(Map<String, dynamic>.from(m));
    }

    final out = <Map<String, dynamic>>[];
    var removed = 0;
    for (final group in groups.values) {
      if (group.length == 1) {
        out.add(group.first);
        continue;
      }
      // Also collapse digit-equivalent twins even if keys differed somehow.
      Map<String, dynamic> winner = group.first;
      for (var i = 1; i < group.length; i++) {
        winner = _preferCanonicalMember(winner, group[i]);
      }
      for (final m in group) {
        if (!identical(m, winner) &&
            (m['registryId'] ?? '').toString().trim().toUpperCase() !=
                (winner['registryId'] ?? '').toString().trim().toUpperCase()) {
          winner = _mergeMemberFields(winner, m);
          removed++;
        } else if (!identical(m, winner)) {
          winner = _mergeMemberFields(winner, m);
          removed++;
        }
      }

      final state = (winner['state'] ?? '').toString();
      final prefix = NgmyCivicRegistryIdCard.stateCode(state);
      final id = (winner['registryId'] ?? '').toString().trim();
      final digits = _digitsOfRegistryId(id);
      if (digits.isNotEmpty && !id.toUpperCase().startsWith(prefix)) {
        winner['previousRegistryId'] = id;
        winner['registryId'] = '$prefix$digits';
      }
      out.add(winner);
    }
    out.addAll(orphans);

    // Second pass: same numeric ID with different letter prefixes (GE123 vs GA123).
    final byDigits = <String, List<int>>{};
    for (var i = 0; i < out.length; i++) {
      final digits = _digitsOfRegistryId((out[i]['registryId'] ?? '').toString());
      if (digits.length < 5) continue;
      (byDigits[digits] ??= []).add(i);
    }
    final drop = <int>{};
    for (final idxs in byDigits.values) {
      if (idxs.length < 2) continue;
      var winnerIdx = idxs.first;
      for (final i in idxs.skip(1)) {
        final pick = _preferCanonicalMember(out[winnerIdx], out[i]);
        final pickIsFirst = (pick['registryId'] ?? '').toString().trim().toUpperCase() ==
            (out[winnerIdx]['registryId'] ?? '').toString().trim().toUpperCase();
        final loser = pickIsFirst ? i : winnerIdx;
        winnerIdx = pickIsFirst ? winnerIdx : i;
        out[winnerIdx] = _mergeMemberFields(out[winnerIdx], out[loser]);
        drop.add(loser);
        removed++;
      }
    }
    final cleaned = <Map<String, dynamic>>[];
    for (var i = 0; i < out.length; i++) {
      if (drop.contains(i)) continue;
      cleaned.add(out[i]);
    }

    if (removed > 0 || cleaned.length != members.length) {
      setList(config, cleaned);
      return members.length - cleaned.length;
    }
    return 0;
  }

  /// Rewrite only the letter prefix of existing IDs (Georgia GE… → GA…). Never adds rows.
  static int rewriteWrongStatePrefixes(dynamic config) {
    final members = listFrom(config);
    var changed = 0;
    for (var i = 0; i < members.length; i++) {
      final m = Map<String, dynamic>.from(members[i]);
      final state = (m['state'] ?? '').toString();
      if (state.trim().isEmpty) continue;
      final prefix = NgmyCivicRegistryIdCard.stateCode(state);
      final id = (m['registryId'] ?? '').toString().trim();
      if (id.isEmpty) continue;
      if (id.toUpperCase().startsWith(prefix)) continue;
      final digits = _digitsOfRegistryId(id);
      if (digits.isEmpty) continue;
      m['previousRegistryId'] = id;
      m['registryId'] = '$prefix$digits';
      m['updatedAt'] = DateTime.now().toUtc().toIso8601String();
      members[i] = m;
      changed++;
    }
    if (changed > 0) setList(config, members);
    return changed;
  }

  /// Dedupe twins + fix postal prefixes in place. Returns how many rows were removed.
  static int normalizeRegistryIdsInPlace(dynamic config) {
    final removed = dedupeMembers(config);
    rewriteWrongStatePrefixes(config);
    // Prefix rewrite can create digit collisions — dedupe again.
    return removed + dedupeMembers(config);
  }

  /// Prefer [registryId] when both are provided (shared emails possible).
  static Map<String, dynamic>? transferToState(
    dynamic config, {
    required String toState,
    String email = '',
    String registryId = '',
    bool clearCityRoom = true,
    bool remintRegistryId = true,
  }) {
    final target = toState.trim();
    if (target.isEmpty) return null;
    final members = listFrom(config);
    final rid = registryId.trim().toUpperCase();
    final fromEmail = emailKey(email);
    var idx = -1;
    if (rid.isNotEmpty) {
      idx = members.indexWhere(
        (m) => (m['registryId'] ?? '').toString().trim().toUpperCase() == rid,
      );
    }
    if (idx < 0 && fromEmail.isNotEmpty) {
      idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == fromEmail);
    }
    if (idx < 0) return null;

    final keep = Map<String, dynamic>.from(members[idx]);
    final fromState = (keep['state'] ?? '').toString().trim();
    if (fromState.toLowerCase() == target.toLowerCase()) {
      return keep; // already there
    }

    final next = Map<String, dynamic>.from(keep);
    next['state'] = target;
    if (clearCityRoom) {
      next['city'] = '';
      next['room'] = '';
    }
    next['previousState'] = fromState;
    next['transferredAt'] = DateTime.now().toUtc().toIso8601String();
    next['updatedAt'] = next['transferredAt'];
    if (remintRegistryId) {
      final oldId = (next['registryId'] ?? '').toString().trim();
      final targetPrefix = NgmyCivicRegistryIdCard.stateCode(target);
      if (oldId.isEmpty || !oldId.toUpperCase().startsWith(targetPrefix)) {
        final digits = _digitsOfRegistryId(oldId);
        if (digits.isNotEmpty) {
          next['previousRegistryId'] = oldId;
          next['registryId'] = '$targetPrefix$digits';
        }
        // Never mint a brand-new random ID on transfer — that created duplicate people.
      }
    }
    members[idx] = next;
    setList(config, members);
    return next;
  }

  static List<String> nicknamesOf(Map<String, dynamic> member) {
    final raw = member['nicknames'];
    if (raw is! List) return const [];
    return raw
        .map((e) => e.toString().trim())
        .where((e) => e.isNotEmpty)
        .take(2)
        .toList();
  }

  static bool showNicknamesPublicly(Map<String, dynamic> member) => member['showNicknames'] == true;

  static String publicDisplayName(Map<String, dynamic>? member, {required String fullName, required String username}) {
    if (member != null && showNicknamesPublicly(member)) {
      final nicks = nicknamesOf(member);
      if (nicks.isNotEmpty) {
        // Show nickname(s) as the normal public name — no "nickname" label.
        return nicks.length == 1 ? nicks.first : nicks.join(' · ');
      }
    }
    final name = fullName.trim();
    return name.isNotEmpty ? name : username.trim();
  }

  static void setNicknames(
    dynamic config,
    String email, {
    required List<String> nicknames,
    required bool showNicknames,
  }) {
    final m = findByEmail(config, email);
    if (m == null) return;
    final cleaned = nicknames.map((e) => e.trim()).where((e) => e.isNotEmpty).take(2).toList();
    upsert(
      config,
      {
        ...m,
        'nicknames': cleaned,
        'showNicknames': showNicknames,
      },
    );
  }

  static bool passportGranted(Map<String, dynamic> member) => member['passportGranted'] == true;

  static String _phoneKey(String phone) {
    var digits = phone.replaceAll(RegExp(r'\D'), '');
    // US numbers often stored with leading country code 1.
    if (digits.length == 11 && digits.startsWith('1')) {
      digits = digits.substring(1);
    }
    return digits;
  }

  /// Last 10 digits when available — matches 10-digit US phones across formatting.
  static String _phoneMatchKey(String phone) {
    final digits = _phoneKey(phone);
    if (digits.length >= 10) return digits.substring(digits.length - 10);
    return digits;
  }

  /// Public phone fingerprint for uniqueness / linking checks.
  static String phoneMatchKey(String phone) => _phoneMatchKey(phone);

  static bool phonesMatch(String a, String b) {
    final ka = _phoneMatchKey(a);
    final kb = _phoneMatchKey(b);
    return ka.length >= 7 && kb.length >= 7 && ka == kb;
  }

  static bool isGuestSyntheticEmail(String email) => emailKey(email).endsWith('@guest.ngmy');

  /// Change a member's email key while keeping the same registry record.
  static bool rekeyEmail(dynamic config, {required String fromEmail, required String toEmail}) {
    final from = emailKey(fromEmail);
    final to = emailKey(toEmail);
    if (from.isEmpty || to.isEmpty || from == to) return from == to && from.isNotEmpty;
    if (findByEmail(config, to) != null) return false;
    final members = listFrom(config);
    final idx = members.indexWhere((m) => emailKey((m['email'] ?? '').toString()) == from);
    if (idx < 0) return false;
    members[idx] = Map<String, dynamic>.from(members[idx])..['email'] = to;
    setList(config, members);
    return true;
  }

  /// Email of an app account matching this civic record by email or phone.
  static String? findLinkableAppEmail(List<dynamic> allUsers, Map<String, dynamic> member) {
    final memberEmail = emailKey((member['email'] ?? '').toString());
    final memberPhone = _phoneMatchKey((member['phone'] ?? '').toString());
    String? byPhone;
    String? byPhoneLogin;
    for (final raw in allUsers) {
      final email = emailKey((raw.email ?? '').toString());
      final phone = _phoneMatchKey((raw.phone ?? '').toString());
      if (email.isEmpty || isGuestSyntheticEmail(email)) continue;
      final isLogin = (() {
        try {
          return (raw as dynamic).isAppLoginAccount == true;
        } catch (_) {
          return false;
        }
      })();
      if (memberEmail.isNotEmpty && email == memberEmail) return email;
      if (memberPhone.length >= 7 && phone == memberPhone) {
        byPhone ??= email;
        if (isLogin) byPhoneLogin ??= email;
      }
    }
    return byPhoneLogin ?? byPhone;
  }

  /// True when this app account already has a granted Civic Registry ID card.
  static bool appUserHasGrantedPassport(dynamic config, dynamic raw) {
    if (config == null || raw == null) return false;
    try {
      return passportForAppUser(
            config,
            email: (raw.email ?? '').toString(),
            phone: (raw.phone ?? '').toString(),
          ) !=
          null;
    } catch (_) {
      return false;
    }
  }

  /// App account shares this civic member's real email or phone.
  static bool appUserMatchesMember(dynamic raw, Map<String, dynamic> member) {
    return accountMatchesMember(
      member,
      email: (raw.email ?? '').toString(),
      phone: (raw.phone ?? '').toString(),
    );
  }

  static bool accountMatchesMember(
    Map<String, dynamic> member, {
    required String email,
    required String phone,
  }) {
    final userEmail = emailKey(email);
    final userPhone = _phoneMatchKey(phone);
    final memberEmail = emailKey((member['email'] ?? '').toString());
    final memberPhone = _phoneMatchKey((member['phone'] ?? '').toString());
    if (userEmail.isNotEmpty &&
        memberEmail.isNotEmpty &&
        !isGuestSyntheticEmail(memberEmail) &&
        userEmail == memberEmail) {
      return true;
    }
    if (userPhone.length >= 7 && memberPhone.length >= 7 && userPhone == memberPhone) {
      return true;
    }
    return false;
  }

  /// Search app login accounts by email, username, name, or phone (for registrar linking).
  /// Hides accounts that already have a granted Civic Registry ID. When [member]
  /// is set, only accounts that share that member's email or phone are returned.
  static List<dynamic> searchAppUsersForLink(
    List<dynamic> allUsers,
    String query, {
    dynamic config,
    Map<String, dynamic>? member,
  }) {
    final q = query.trim().toLowerCase();
    if (q.isEmpty) return const [];
    final qPhone = _phoneMatchKey(q);
    final out = <dynamic>[];
    for (final raw in allUsers) {
      final email = emailKey((raw.email ?? '').toString());
      if (email.isEmpty || isGuestSyntheticEmail(email)) continue;
      if (appUserHasGrantedPassport(config, raw)) continue;
      if (member != null && !appUserMatchesMember(raw, member)) continue;
      final username = (raw.username ?? '').toString().toLowerCase().trim();
      final fullName = (raw.fullName ?? '').toString().toLowerCase().trim();
      final phone = _phoneMatchKey((raw.phone ?? '').toString());
      final emailHit = email.contains(q);
      final userHit = username.contains(q) || fullName.contains(q);
      final phoneHit = qPhone.length >= 3 && phone.contains(qPhone);
      if (emailHit || userHit || phoneHit) out.add(raw);
    }
    out.sort((a, b) {
      final ae = emailKey((a.email ?? '').toString());
      final be = emailKey((b.email ?? '').toString());
      return ae.compareTo(be);
    });
    return out.take(40).toList();
  }

  /// True when another app account already owns this phone number.
  static bool isAppPhoneTaken(List<dynamic> allUsers, String phone, {String? excludeEmail}) {
    final key = _phoneMatchKey(phone);
    if (key.length < 7) return false;
    final exclude = emailKey(excludeEmail ?? '');
    for (final raw in allUsers) {
      final email = emailKey((raw.email ?? '').toString());
      if (email.isEmpty || (exclude.isNotEmpty && email == exclude)) continue;
      if (_phoneMatchKey((raw.phone ?? '').toString()) == key) return true;
    }
    return false;
  }

  /// Civic passport visible to a logged-in app user (granted + email or phone match).
  static Map<String, dynamic>? passportForAppUser(
    dynamic config, {
    required String email,
    required String phone,
  }) {
    final userEmail = emailKey(email);
    final userPhone = _phoneMatchKey(phone);
    for (final m in listFrom(config)) {
      if (!passportGranted(m)) continue;
      final linked = emailKey((m['linkedAppEmail'] ?? '').toString());
      if (linked.isNotEmpty && linked == userEmail) return m;
      final memberEmail = emailKey((m['email'] ?? '').toString());
      if (memberEmail.isNotEmpty && memberEmail == userEmail) return m;
      final memberPhone = _phoneMatchKey((m['phone'] ?? '').toString());
      if (userPhone.length >= 7 && memberPhone.isNotEmpty && memberPhone == userPhone) return m;
    }
    return null;
  }

  static void grantPassport(dynamic config, String memberEmail, String linkedAppEmail) {
    final m = findByEmail(config, memberEmail);
    if (m == null) return;
    upsert(
      config,
      {
        ...m,
        'passportGranted': true,
        'linkedAppEmail': emailKey(linkedAppEmail),
        'passportGrantedAt': DateTime.now().toUtc().toIso8601String(),
      },
    );
  }

  static void revokePassport(dynamic config, String memberEmail) {
    final m = findByEmail(config, memberEmail);
    if (m == null) return;
    upsert(
      config,
      {
        ...m,
        'passportGranted': false,
        'linkedAppEmail': '',
        'passportGrantedAt': null,
      },
    );
  }

  /// Legacy helper — soft-delete (7-day recover window).
  static void removeByEmail(dynamic config, String email) => softDeleteByEmail(config, email);

  /// Legacy helper — soft-delete (7-day recover window).
  static void removeByRegistryId(dynamic config, String registryId) =>
      softDeleteByRegistryId(config, registryId);

  static bool isEnrolled(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return false;
    return listFrom(config).any((m) => emailKey((m['email'] ?? '').toString()) == key);
  }

  static Map<String, dynamic>? findByEmail(dynamic config, String email) {
    final key = emailKey(email);
    if (key.isEmpty) return null;
    for (final m in listFrom(config)) {
      if (emailKey((m['email'] ?? '').toString()) == key) return m;
    }
    return null;
  }

  static Map<String, dynamic>? findByRegistryId(dynamic config, String registryId) {
    final key = registryId.trim().toUpperCase();
    if (key.isEmpty) return null;
    for (final m in listFrom(config)) {
      if ((m['registryId'] ?? '').toString().trim().toUpperCase() == key) return m;
    }
    return null;
  }

  static String _normName(String s) => s.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ');

  static String _normAddress(String s) =>
      s.trim().toLowerCase().replaceAll(RegExp(r'\s+'), ' ').replaceAll(RegExp(r'[^\w\s]'), '');

  static Map<String, dynamic>? findDuplicateRecord({
    required dynamic config,
    required String fullName,
    String dob = '',
    String city = '',
    String homeAddress = '',
    String phone = '',
    String? excludeEmail,
    String? excludeRegistryId,
  }) {
    return findDuplicateInRecords(
      records: listFrom(config),
      fullName: fullName,
      dob: dob,
      city: city,
      homeAddress: homeAddress,
      phone: phone,
      excludeEmail: excludeEmail,
      excludeRegistryId: excludeRegistryId,
    );
  }

  /// Blocks double enrollment when identity overlaps on:
  /// same phone, name+address, name+phone, address+phone, name+dob, or name+city.
  static Map<String, dynamic>? findDuplicateInRecords({
    required List<Map<String, dynamic>> records,
    required String fullName,
    String dob = '',
    String city = '',
    String homeAddress = '',
    String phone = '',
    String? excludeEmail,
    String? excludeRegistryId,
  }) {
    final nameKey = _normName(fullName);
    final addrKey = _normAddress(homeAddress);
    final phoneKey = _phoneMatchKey(phone);
    final dobKey = RegExp(r'^\d{2}/\d{2}/\d{4}$').hasMatch(dob.trim()) ? dob.trim() : '';
    final cityKey = city.trim().toLowerCase();
    final exclude = excludeEmail?.toLowerCase().trim() ?? '';
    final excludeId = (excludeRegistryId ?? '').trim().toUpperCase();

    for (final m in records) {
      final email = emailKey((m['email'] ?? '').toString());
      if (exclude.isNotEmpty && email == exclude) continue;
      final id = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (excludeId.isNotEmpty && id == excludeId) continue;

      final existingName = _normName((m['fullName'] ?? '').toString());
      final existingAddr = _normAddress((m['homeAddress'] ?? '').toString());
      final existingPhone = _phoneMatchKey((m['phone'] ?? '').toString());
      final existingDob = (m['dob'] ?? '').toString().trim();
      final existingCity = (m['city'] ?? '').toString().trim().toLowerCase();

      final nameMatch = nameKey.isNotEmpty && existingName == nameKey;
      final addrMatch = addrKey.isNotEmpty && existingAddr == addrKey;
      final phoneMatch = phoneKey.length >= 7 && existingPhone.length >= 7 && phoneKey == existingPhone;

      // Same phone number = same person (even under a different email / registry id).
      if (phoneMatch) return m;
      // Name + birthday
      if (nameMatch && dobKey.isNotEmpty && existingDob.isNotEmpty && dobKey == existingDob) return m;
      // Name + address (+ optional phone already covered)
      if (nameMatch && addrMatch) return m;
      if (nameMatch && phoneMatch) return m;
      if (addrMatch && phoneMatch) return m;
      // Name + address + phone (explicit triple — already covered by pairs above)
      if (nameMatch && addrMatch && phoneMatch) return m;

      if (nameMatch) {
        final nameAndCity = cityKey.isNotEmpty && existingCity.isNotEmpty && cityKey == existingCity;
        if (nameAndCity) return m;
      }
    }
    return null;
  }

  static String duplicateMessage(Map<String, dynamic> existing) {
    final name = (existing['fullName'] ?? '').toString().trim();
    final id = (existing['registryId'] ?? '').toString().trim();
    final phone = (existing['phone'] ?? '').toString().trim();
    final address = (existing['homeAddress'] ?? '').toString().trim();
    final dob = (existing['dob'] ?? '').toString().trim();
    final parts = <String>[if (name.isNotEmpty) name else 'Member'];
    if (id.isNotEmpty) parts.add('ID $id');
    if (phone.isNotEmpty) parts.add(phone);
    if (dob.isNotEmpty) parts.add('DOB $dob');
    if (address.isNotEmpty) parts.add(address);
    return 'Already enrolled — matching name, birthday, address, or phone was found (${parts.join(' · ')}). One person cannot be registered twice.';
  }

  /// Updates an *existing* Civic Registry member only.
  /// Never creates a new enrollment just because someone has an NGMY account /
  /// updated their phone or profile. New members must come from:
  /// - Authorized Registrar (state controller) enrollment, or
  /// - Self-enrollment link (`?civic=enroll`).
  static void syncFromFields(
    dynamic config, {
    required String email,
    required String fullName,
    required String dob,
    required String idType,
    required String homeAddress,
    required String phone,
    required String city,
    required String room,
    required String state,
    required String registryId,
    required int helps,
    required int missed,
    int? familyMembers,
  }) {
    final existing = findByEmail(config, email) ??
        (registryId.trim().isEmpty ? null : findByRegistryId(config, registryId));
    if (existing == null) return;

    final existingFamily = existing['familyMembers'];
    final family = familyMembers ??
        (existingFamily is num ? existingFamily.toInt() : int.tryParse('${existingFamily ?? ''}') ?? 1);
    final rid = registryId.trim().isNotEmpty
        ? registryId.trim()
        : (existing['registryId'] ?? '').toString().trim();
    if (emailKey(email).isEmpty && rid.isEmpty) return;
    upsert(
      config,
      buildRecord(
        email: email,
        fullName: fullName,
        dob: dob,
        idType: idType,
        homeAddress: homeAddress,
        phone: phone,
        city: city,
        room: room,
        state: state,
        registryId: rid,
        familyMembers: family,
        helps: helps,
        missed: missed,
        enrolledAt: existing['enrolledAt']?.toString(),
        enrollmentSource: (existing['enrollmentSource'] ?? existing['source'] ?? '').toString(),
      ),
    );
  }

  /// Drop rows that were never real enrollments (e.g. profile sync leftovers with no Registry ID).
  /// Registrar + self-enrollment always assign a [registryId].
  static int pruneIncompleteEnrollments(dynamic config) {
    final members = listFrom(config);
    final before = members.length;
    members.removeWhere((m) {
      final rid = (m['registryId'] ?? '').toString().trim();
      return rid.isEmpty;
    });
    if (members.length == before) return 0;
    setList(config, members);
    debugPrint('[civic] pruned ${before - members.length} incomplete registry row(s) without registryId');
    return before - members.length;
  }

  /// Auto-created roster ghosts (empty/masked name, no registrar or self-enroll trail).
  static bool isPhantomMemberRow(Map<String, dynamic> m) {
    final rid = (m['registryId'] ?? '').toString().trim();
    if (rid.isEmpty) return true;

    final source = (m['enrollmentSource'] ?? m['source'] ?? '').toString().trim();
    final display = resolvedDisplayName(m);
    final hasRealName = display != 'Member';

    if (source == 'guest_self_enrollment' || source == 'registrar') {
      return !hasRealName;
    }

    if (!hasRealName) return true;

    if (source.isEmpty) {
      final phone = _phoneKey((m['phone'] ?? '').toString());
      final addr = (m['homeAddress'] ?? '').toString().trim();
      final dob = (m['dob'] ?? '').toString().trim();
      if (phone.length < 7 && addr.isEmpty && dob.isEmpty) return true;
    }

    return false;
  }

  /// Remove phantom rows and optionally clear stale [isEnrolledInRegistry] flags.
  static int purgePhantomMembers(dynamic config, {List<dynamic>? allUsers}) {
    final members = listFrom(config);
    final before = members.length;
    final removedEmails = <String>{};
    members.removeWhere((m) {
      if (!isPhantomMemberRow(m)) return false;
      final email = emailKey((m['email'] ?? '').toString());
      if (email.isNotEmpty) removedEmails.add(email);
      return true;
    });
    if (members.length == before) return 0;
    setList(config, members);
    if (allUsers != null) {
      for (final u in allUsers) {
        final email = emailKey((u as dynamic).email.toString());
        if (removedEmails.contains(email)) {
          (u as dynamic).isEnrolledInRegistry = false;
          (u as dynamic).registryId = '';
        }
      }
    }
    debugPrint('[civic] purged ${before - members.length} phantom member row(s)');
    return before - members.length;
  }

  static void migrateFromLegacyUsers(dynamic config, List<dynamic> allUsers) {
    var changed = false;
    for (final u in allUsers) {
      if ((u as dynamic).isEnrolledInRegistry != true) continue;
      final email = emailKey((u as dynamic).email.toString());
      if (email.isEmpty || findByEmail(config, email) != null) continue;
      final rid = ((u as dynamic).registryId?.toString() ?? '').trim();
      if (rid.isEmpty) continue;
      final fullName = ((u as dynamic).fullName?.toString() ?? (u as dynamic).username.toString()).trim();
      if (fullName.isEmpty || _isPlaceholderValue(fullName)) continue;
      upsert(
        config,
        buildRecord(
          email: email,
          fullName: fullName,
          dob: (u as dynamic).dob?.toString() ?? '',
          idType: (u as dynamic).idType?.toString() ?? '',
          homeAddress: (u as dynamic).homeAddress?.toString() ?? '',
          phone: (u as dynamic).phone.toString(),
          city: (u as dynamic).city?.toString() ?? '',
          room: (u as dynamic).room?.toString() ?? '',
          state: (u as dynamic).state.toString(),
          registryId: rid,
          helps: (u as dynamic).helps as int? ?? 0,
          missed: (u as dynamic).missed as int? ?? 0,
        ),
      );
      changed = true;
    }
    if (changed) debugPrint('[civic] migrated legacy enrolled users into civicRegistryMembers');
  }

  static Map<String, dynamic> payload(dynamic config) {
    pruneIncompleteEnrollments(config);
    // Never upload nameless auto-created rows — that is how "Member" ghosts
    // spread from one device to every other one.
    purgePhantomMembers(config);
    return {
      'members': listFrom(config),
      'removed': removedFrom(config),
      'deceased': deceasedFrom(config),
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };
  }

  /// Cloud persist for a single state — never upload other states' rows by accident.
  static Map<String, dynamic> payloadForState(dynamic config, {required String state}) {
    pruneIncompleteEnrollments(config);
    purgePhantomMembers(config);
    final st = state.trim();
    if (st.isEmpty) return payload(config);
    bool inState(Map<String, dynamic> m) =>
        NgmyCivicRegistryStats.statesMatch((m['state'] ?? '').toString(), st);
    bool removedInState(Map<String, dynamic> r) {
      final snap = r['snapshot'];
      final s = (r['state'] ?? (snap is Map ? snap['state'] : '') ?? '').toString();
      // A delete with no state on record still has to reach the server,
      // otherwise the next merge hands the member back.
      if (s.trim().isEmpty) return true;
      return NgmyCivicRegistryStats.statesMatch(s, st);
    }
    bool deceasedInState(Map<String, dynamic> d) {
      final snap = d['snapshot'];
      final s = (d['state'] ?? (snap is Map ? snap['state'] : '') ?? '').toString();
      return NgmyCivicRegistryStats.statesMatch(s, st);
    }
    return {
      'members': listFrom(config).where(inState).toList(),
      'removed': removedFrom(config).where(removedInState).toList(),
      'deceased': deceasedFrom(config).where(deceasedInState).toList(),
      'savedAt': DateTime.now().toUtc().toIso8601String(),
    };
  }

  /// Replace local roster with a role-filtered server payload (no merge with prior PII).
  static void replacePayload(dynamic config, Map<String, dynamic> payload) {
    final members = <Map<String, dynamic>>[];
    final remote = payload['members'];
    if (remote is List) {
      for (final e in remote) {
        if (e is Map) members.add(Map<String, dynamic>.from(e));
      }
    }
    setList(config, members);

    final removed = <Map<String, dynamic>>[];
    final rem = payload['removed'] ?? payload['civicRegistryRemoved'];
    if (rem is List) {
      for (final e in rem) {
        if (e is Map) removed.add(Map<String, dynamic>.from(e));
      }
    }
    setRemoved(config, removed);

    final deceased = <Map<String, dynamic>>[];
    final dec = payload['deceased'];
    if (dec is List) {
      for (final e in dec) {
        if (e is Map) deceased.add(Map<String, dynamic>.from(e));
      }
    }
    setDeceased(config, deceased);
  }

  /// Replace one state's roster slice from cloud — keeps other states on device.
  static void replacePayloadScoped(dynamic config, Map<String, dynamic> payload, {required String scopeState}) {
    final st = scopeState.trim();
    if (st.isEmpty) {
      replacePayload(config, payload);
      return;
    }
    bool inScope(Map<String, dynamic> m) =>
        NgmyCivicRegistryStats.statesMatch((m['state'] ?? '').toString(), st);
    bool rowInScope(Map<String, dynamic> r) {
      final snap = r['snapshot'];
      final s = (r['state'] ?? (snap is Map ? snap['state'] : '') ?? '').toString();
      return NgmyCivicRegistryStats.statesMatch(s, st);
    }

    final remoteMembers = <Map<String, dynamic>>[];
    final remote = payload['members'];
    if (remote is List) {
      for (final e in remote) {
        if (e is Map) remoteMembers.add(Map<String, dynamic>.from(e));
      }
    }
    final keptMembers = listFrom(config).where((m) => !inScope(m)).toList();
    final incomingMembers = remoteMembers.where(inScope).toList();
    setList(config, [...keptMembers, ...incomingMembers]);

    final remoteRemoved = <Map<String, dynamic>>[];
    final rem = payload['removed'] ?? payload['civicRegistryRemoved'];
    if (rem is List) {
      for (final e in rem) {
        if (e is Map) remoteRemoved.add(Map<String, dynamic>.from(e));
      }
    }
    final keptRemoved = removedFrom(config).where((r) => !rowInScope(r)).toList();
    final incomingRemoved = remoteRemoved.where(rowInScope).toList();
    setRemoved(config, [...keptRemoved, ...incomingRemoved]);

    final remoteDeceased = <Map<String, dynamic>>[];
    final dec = payload['deceased'];
    if (dec is List) {
      for (final e in dec) {
        if (e is Map) remoteDeceased.add(Map<String, dynamic>.from(e));
      }
    }
    final keptDeceased = deceasedFrom(config).where((d) => !rowInScope(d)).toList();
    final incomingDeceased = remoteDeceased.where(rowInScope).toList();
    setDeceased(config, [...keptDeceased, ...incomingDeceased]);
  }

  /// Cloud rows this device may merge into its own roster.
  ///
  /// Two rules keep the roster from growing ghosts and twins:
  /// out-of-scope states are dropped (a registrar who unlocks another state
  /// receives that state's *masked* directory, which is not enrollable data),
  /// and privacy-redacted rows may only update someone already enrolled here —
  /// never create a member. Merging those rows created "Member" rows with no
  /// name and duplicate profiles keyed by masked emails.
  static Map<String, dynamic> _incomingForAdopt(
    dynamic config,
    Map<String, dynamic> payload, {
    String scopeState = '',
  }) {
    final st = scopeState.trim();
    bool inScope(String state) =>
        st.isEmpty || NgmyCivicRegistryStats.statesMatch(state, st);

    final knownKeys = <String>{};
    final knownDigits = <String>{};
    for (final m in listFrom(config)) {
      final k = _mergeKey(m);
      if (k.isNotEmpty) knownKeys.add(k);
      final digits = _digitsOfRegistryId((m['registryId'] ?? '').toString());
      if (digits.length >= 5) knownDigits.add(digits);
    }

    final members = <Map<String, dynamic>>[];
    final rawMembers = payload['members'];
    if (rawMembers is List) {
      for (final e in rawMembers) {
        if (e is! Map) continue;
        final m = Map<String, dynamic>.from(e);
        if (!inScope((m['state'] ?? '').toString())) continue;
        if (_isSanitizedMemberRow(m)) {
          final digits = _digitsOfRegistryId((m['registryId'] ?? '').toString());
          final known = knownKeys.contains(_mergeKey(m)) ||
              (digits.length >= 5 && knownDigits.contains(digits));
          if (!known) continue;
        }
        members.add(m);
      }
    }

    List<Map<String, dynamic>> rowsInScope(dynamic raw) {
      final out = <Map<String, dynamic>>[];
      if (raw is! List) return out;
      for (final e in raw) {
        if (e is! Map) continue;
        final row = Map<String, dynamic>.from(e);
        final snap = row['snapshot'];
        final state =
            (row['state'] ?? (snap is Map ? snap['state'] : '') ?? '').toString();
        // Keep deletes that carry no state — dropping them let the member
        // return on the next merge.
        if (state.trim().isNotEmpty && !inScope(state)) continue;
        out.add(row);
      }
      return out;
    }

    return {
      'members': members,
      'removed': rowsInScope(payload['removed'] ?? payload['civicRegistryRemoved']),
      'deceased': rowsInScope(payload['deceased']),
    };
  }

  /// Authoritative cloud hydrate — merge (never replace) so a truncated cloud
  /// roster cannot wipe members that still exist on this device, then clean up
  /// so the merge cannot leave twins or nameless rows behind.
  static void adoptCloudPayload(
    dynamic config,
    Map<String, dynamic> payload, {
    String scopeState = '',
  }) {
    final priorByKey = <String, Map<String, dynamic>>{};
    for (final m in listFrom(config)) {
      final k = _mergeKey(m);
      if (k.isNotEmpty) priorByKey[k] = m;
    }
    // Also index by numeric registry digits for masked-id twins.
    final priorByDigits = <String, Map<String, dynamic>>{};
    for (final m in listFrom(config)) {
      final digits = _digitsOfRegistryId((m['registryId'] ?? '').toString());
      if (digits.length >= 5) priorByDigits[digits] = m;
    }

    applyPayload(config, _incomingForAdopt(config, payload, scopeState: scopeState));

    final next = <Map<String, dynamic>>[];
    for (final raw in listFrom(config)) {
      final m = Map<String, dynamic>.from(raw);
      Map<String, dynamic>? prev = priorByKey[_mergeKey(m)];
      if (prev == null) {
        final digits = _digitsOfRegistryId((m['registryId'] ?? '').toString());
        if (digits.length >= 5) prev = priorByDigits[digits];
      }
      if (prev != null) {
        for (final field in const [
          'fullName',
          'username',
          'registryId',
          'phone',
          'city',
          'room',
          'homeAddress',
          'dob',
          'idType',
        ]) {
          if (_isPlaceholderValue(m[field]) && !_isPlaceholderValue(prev[field])) {
            m[field] = prev[field];
          }
        }
      }
      next.add(m);
    }
    setList(config, next);
    dedupeMembers(config);
    pruneIncompleteEnrollments(config);
    purgePhantomMembers(config);
    clearSoftDeletesForActiveMembers(config);
  }

  /// Full backup envelope for download (includes helps/missed/passport so rankings restore).
  /// Always scoped to one state — files must not be restorable in another state.
  static Map<String, dynamic> backupEnvelope(dynamic config, {required String state}) {
    final st = state.trim();
    if (st.isEmpty) {
      return {
        'type': 'ngmy_civic_registry_backup',
        'version': 1,
        'state': '',
        'savedAt': DateTime.now().toUtc().toIso8601String(),
        'memberCount': 0,
        'members': <Map<String, dynamic>>[],
      };
    }
    final members = listFrom(config)
        .where((m) => NgmyCivicRegistryStats.statesMatch((m['state'] ?? '').toString(), st))
        .map((m) => Map<String, dynamic>.from(m)..['state'] = st)
        .toList();
    sortNewestEnrolledFirst(members);
    return {
      'type': 'ngmy_civic_registry_backup',
      'version': 1,
      'state': st,
      'savedAt': DateTime.now().toUtc().toIso8601String(),
      'memberCount': members.length,
      'members': members,
    };
  }

  static String backupStateFromJson(String raw) {
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return '';
    return (Map<String, dynamic>.from(decoded)['state'] ?? '').toString().trim();
  }

  static bool backupStateMatches(String backupState, String currentState) {
    return NgmyCivicRegistryStats.statesMatch(backupState, currentState);
  }

  static List<Map<String, dynamic>> membersFromBackupJson(String raw, {String? requireState}) {
    final decoded = jsonDecode(raw);
    if (decoded is! Map) return const [];
    final map = Map<String, dynamic>.from(decoded);
    final fileState = (map['state'] ?? '').toString().trim();
    if (requireState != null && requireState.trim().isNotEmpty) {
      if (!backupStateMatches(fileState, requireState)) return const [];
    }
    final list = map['members'] ?? map['civicRegistryMembers'];
    if (list is! List) return const [];
    final want = (requireState ?? fileState).trim();
    final members = list
        .whereType<Map>()
        .map((e) => Map<String, dynamic>.from(e))
        .where((m) {
          if (want.isEmpty) return false;
          final ms = (m['state'] ?? fileState).toString().trim();
          // Accept empty member.state (treat as file state) or Georgia/GA-style aliases.
          if (ms.isEmpty) return true;
          return NgmyCivicRegistryStats.statesMatch(ms, want) ||
              NgmyCivicRegistryStats.statesMatch(ms, fileState);
        })
        .toList();
    sortNewestEnrolledFirst(members);
    return members;
  }

  /// Restore members from a state backup.
  /// Existing rows are updated/repaired (especially wrong/empty [state]) — not skipped —
  /// so a 57-member file can bring a 51-member Members screen back to 57.
  static ({int added, int updated, int skipped, List<Map<String, dynamic>> restored}) importMissingMembers(
    dynamic config,
    List<Map<String, dynamic>> incoming, {
    required String requireState,
  }) {
    final stateWanted = requireState.trim();
    final restored = <Map<String, dynamic>>[];
    var added = 0;
    var updated = 0;
    var skipped = 0;
    if (stateWanted.isEmpty) {
      return (added: 0, updated: 0, skipped: incoming.length, restored: restored);
    }

    final now = DateTime.now().toUtc().toIso8601String();

    for (final raw in incoming) {
      final memberState = (raw['state'] ?? requireState).toString().trim();
      if (memberState.isNotEmpty &&
          !NgmyCivicRegistryStats.statesMatch(memberState, stateWanted) &&
          !NgmyCivicRegistryStats.statesMatch(memberState, requireState)) {
        skipped++;
        continue;
      }

      final emailRaw = emailKey((raw['email'] ?? '').toString());
      final registryId = (raw['registryId'] ?? '').toString().trim();
      final fullName = (raw['fullName'] ?? '').toString();
      final phone = (raw['phone'] ?? '').toString();
      final address = (raw['homeAddress'] ?? '').toString();
      final dob = (raw['dob'] ?? '').toString();
      final city = (raw['city'] ?? '').toString();

      var key = emailRaw;
      if (key.isEmpty) {
        final digits = _phoneKey(phone);
        if (digits.length >= 7) {
          key = 'civic.$digits@guest.ngmy';
        } else if (registryId.isEmpty) {
          skipped++;
          continue;
        }
      }

      final record = Map<String, dynamic>.from(raw)
        ..['state'] = stateWanted
        ..['updatedAt'] = now
        ..['restoredAt'] = now;
      if (key.isNotEmpty) record['email'] = key;
      if ((record['registryId'] ?? '').toString().trim().isEmpty && registryId.isNotEmpty) {
        record['registryId'] = registryId;
      }

      // Soft-deleted / permanently tombstoned people in the backup must come back.
      if (key.isNotEmpty || registryId.isNotEmpty) {
        restoreSoftDeleted(config, email: key, registryId: registryId);
        _clearTombstone(config, key, registryId: registryId);
      }

      final existing = (key.isNotEmpty ? findByEmail(config, key) : null) ??
          (registryId.isNotEmpty ? findByRegistryId(config, registryId) : null) ??
          findDuplicateInRecords(
            records: listFrom(config),
            fullName: fullName,
            dob: dob,
            city: city,
            homeAddress: address,
            phone: phone,
            excludeEmail: key,
            excludeRegistryId: registryId,
          );

      if (existing != null) {
        final merged = Map<String, dynamic>.from(existing);
        for (final e in record.entries) {
          final v = e.value;
          if (v == null) continue;
          if (v is String && v.trim().isEmpty && e.key != 'city' && e.key != 'room') continue;
          merged[e.key] = v;
        }
        merged['state'] = stateWanted;
        if (key.isNotEmpty) merged['email'] = key;
        merged['updatedAt'] = now;
        merged['restoredAt'] = now;
        if ((merged['registryId'] ?? '').toString().trim().isEmpty && registryId.isNotEmpty) {
          merged['registryId'] = registryId;
        }
        // Mint an ID if a legacy row somehow lost it — otherwise Members prune drops them.
        if ((merged['registryId'] ?? '').toString().trim().isEmpty) {
          merged['registryId'] = mintRegistryId(config, stateWanted);
        }

        final origEmail = emailKey((existing['email'] ?? key).toString());
        final rid = (merged['registryId'] ?? '').toString();
        var saved = updateExisting(
          config,
          originalEmail: origEmail,
          registryId: (existing['registryId'] ?? rid).toString(),
          fields: merged,
        );
        if (saved == null) {
          upsert(config, merged);
          saved = findByRegistryId(config, rid) ?? findByEmail(config, origEmail) ?? merged;
        }
        _clearTombstone(config, emailKey((saved['email'] ?? '').toString()), registryId: rid);
        updated++;
        restored.add(Map<String, dynamic>.from(saved));
        continue;
      }

      if ((record['registryId'] ?? '').toString().trim().isEmpty) {
        record['registryId'] = mintRegistryId(config, stateWanted);
      }
      if ((record['email'] ?? '').toString().trim().isEmpty && key.isNotEmpty) {
        record['email'] = key;
      }
      upsert(config, record);
      _clearTombstone(
        config,
        emailKey((record['email'] ?? '').toString()),
        registryId: (record['registryId'] ?? '').toString(),
      );
      restored.add(Map<String, dynamic>.from(
        findByRegistryId(config, (record['registryId'] ?? '').toString()) ??
            (key.isNotEmpty ? findByEmail(config, key) : null) ??
            record,
      ));
      added++;
    }

    clearSoftDeletesForActiveMembers(config);
    return (added: added, updated: updated, skipped: skipped, restored: restored);
  }

  static DateTime? _memberStamp(Map<String, dynamic> m) {
    return DateTime.tryParse((m['updatedAt'] ?? m['enrolledAt'] ?? '').toString());
  }

  static int _intOf(dynamic v) => intOf(v);

  /// Helps/missed come back from JSON as int, double, or string. Rankings
  /// used to ignore anything that wasn't a `num`, so a removed help of `"0"`
  /// kept showing the previous count.
  static int intOf(dynamic v, {int fallback = 0}) {
    if (v is num) return v.toInt();
    return int.tryParse('${v ?? ''}') ?? fallback;
  }

  /// When helps/missed were last deliberately changed for this member.
  ///
  /// `updatedAt` cannot answer that question: dedupe, redaction repair and
  /// every roster merge refresh it without touching the counters. Without a
  /// stamp of its own, the only safe merge rule for helps was "keep the bigger
  /// number", which made removing a help impossible — the next cloud refresh
  /// always handed the old, larger count back.
  static DateTime? activityStampOf(Map<String, dynamic> m) =>
      DateTime.tryParse((m['activityAt'] ?? '').toString());

  /// Reconciles helps/missed between two rows for the same person. The side
  /// that changed them most recently wins, so a removal survives; with no
  /// stamps on either side we fall back to the old keep-the-larger rule so
  /// legacy rows still cannot lose a help to a stale partial payload.
  static void _mergeHelpCounters(
    Map<String, dynamic> out,
    Map<String, dynamic> a,
    Map<String, dynamic> b,
  ) {
    final sa = activityStampOf(a);
    final sb = activityStampOf(b);
    if (sa != null || sb != null) {
      final winner = sa == null
          ? b
          : sb == null
              ? a
              : (sb.isAfter(sa) ? b : a);
      out['helps'] = _intOf(winner['helps']);
      out['missed'] = _intOf(winner['missed']);
      final stamp = (winner['activityAt'] ?? '').toString();
      if (stamp.isNotEmpty) out['activityAt'] = stamp;
      return;
    }
    out['helps'] = math.max(_intOf(a['helps']), _intOf(b['helps']));
    out['missed'] = math.max(_intOf(a['missed']), _intOf(b['missed']));
  }

  static Map<String, dynamic> _preferNewerMember(Map<String, dynamic> a, Map<String, dynamic> b) {
    final ta = _memberStamp(a);
    final tb = _memberStamp(b);
    if (ta != null && tb != null && ta != tb) {
      return tb.isAfter(ta) ? b : a;
    }
    final sa = _memberDetailScore(a);
    final sb = _memberDetailScore(b);
    if (sa != sb) return sb > sa ? b : a;
    if (tb == null) return a;
    if (ta == null) return b;
    return tb.isAfter(ta) ? b : a;
  }

  static int _memberDetailScore(Map<String, dynamic> m) {
    var score = 0;
    if (!_isPlaceholderValue(m['phone'])) score += 2;
    if (!_isPlaceholderValue(m['homeAddress'])) score += 2;
    if (!_isPlaceholderValue(m['dob'])) score += 2;
    if (!_isPlaceholderValue(m['fullName'])) score += 1;
    if (!_isPlaceholderValue(m['state'])) score += 3;
    if (!_isPlaceholderValue(m['email'])) score += 2;
    if ((m['idPhoto'] ?? '').toString().trim().isNotEmpty) score += 1;
    return score;
  }

  static bool _isValidRegistryId(String s) {
    final t = s.trim().toUpperCase();
    return RegExp(r'^[A-Z]{2}\d{6,}$').hasMatch(t);
  }

  static bool _isPlaceholderValue(dynamic v) {
    final s = (v ?? '').toString().trim();
    if (s.isEmpty) return true;
    if (_isValidRegistryId(s)) return false;
    if (s == '***') return true;
    if (s.contains('***')) return true;
    // Partial masks like **1469040 or *3357039 (legacy network redaction).
    if (RegExp(r'^\*+\d').hasMatch(s)) return true;
    // Guest email local-part mistaken for a display name.
    if (RegExp(r'^civic\.\d', caseSensitive: false).hasMatch(s)) return true;
    return false;
  }

  /// Best label for UI — never show masked ids or guest email tokens as a person's name.
  static String resolvedDisplayName(Map<String, dynamic> m) {
    if (showNicknamesPublicly(m)) {
      final nicks = nicknamesOf(m);
      if (nicks.isNotEmpty) {
        return nicks.length == 1 ? nicks.first : nicks.join(' · ');
      }
    }
    final fullName = (m['fullName'] ?? '').toString().trim();
    if (!_isPlaceholderValue(fullName)) return fullName;
    final username = (m['username'] ?? '').toString().trim();
    if (!_isPlaceholderValue(username)) return username;
    return 'Member';
  }

  /// True only for privacy-redacted cloud rows (not merely incomplete local rows).
  static bool _isSanitizedMemberRow(Map<String, dynamic> m) {
    final email = (m['email'] ?? '').toString();
    final state = (m['state'] ?? '').toString().trim();
    final phone = (m['phone'] ?? '').toString().trim();
    final name = (m['fullName'] ?? '').toString().trim();
    final rid = (m['registryId'] ?? '').toString().trim();
    if (email.contains('***')) return true;
    if (state == '***') return true;
    if (phone == '***') return true;
    if (name == '***') return true;
    if (_isPlaceholderValue(name)) return true;
    if (_isPlaceholderValue(rid)) return true;
    return false;
  }

  static Map<String, dynamic> _mergeMemberRow(Map<String, dynamic> a, Map<String, dynamic> b) {
    // Guest self-enrollment rows from cloud must win over stale local placeholders.
    final aGuest = (a['enrollmentSource'] ?? '').toString() == 'guest_self_enrollment';
    final bGuest = (b['enrollmentSource'] ?? '').toString() == 'guest_self_enrollment';
    if (bGuest && !aGuest && _isPlaceholderValue(a['fullName']) && !_isPlaceholderValue(b['fullName'])) {
      return _keepCriticalMemberFields(Map<String, dynamic>.from(b), a, b);
    }
    if (aGuest && !bGuest && _isPlaceholderValue(b['fullName']) && !_isPlaceholderValue(a['fullName'])) {
      return _keepCriticalMemberFields(Map<String, dynamic>.from(a), a, b);
    }
    if (_isSanitizedMemberRow(b) && !_isSanitizedMemberRow(a)) {
      final merged = Map<String, dynamic>.from(a);
      for (final key in const [
        'fullName',
        'city',
        'room',
        'state',
        'registryId',
        'helps',
        'missed',
        'activityAt',
        'enrolledAt',
        'updatedAt',
        'enrollmentSource',
        'familyMembers',
        'familyMales',
        'familyFemales',
        'username',
        'nicknames',
        'showNicknames',
        'contributionCount',
      ]) {
        final v = b[key];
        if (v == null) continue;
        if (_isPlaceholderValue(v)) continue;
        if (v is String && v.trim().isEmpty) continue;
        merged[key] = v;
      }
      return _keepCriticalMemberFields(_preferNewerMember(a, merged), a, b);
    }
    if (_isSanitizedMemberRow(a) && !_isSanitizedMemberRow(b)) {
      return _keepCriticalMemberFields(Map<String, dynamic>.from(b), a, b);
    }
    return _keepCriticalMemberFields(_preferNewerMember(a, b), a, b);
  }

  /// Never let a cloud merge wipe registryId / state / contact — that made members
  /// vanish from Members after edit or after a partial roster hydrate.
  static Map<String, dynamic> _keepCriticalMemberFields(
    Map<String, dynamic> preferred,
    Map<String, dynamic> a,
    Map<String, dynamic> b,
  ) {
    final out = Map<String, dynamic>.from(preferred);
    for (final key in const [
      'registryId',
      'state',
      'email',
      'phone',
      'homeAddress',
      'fullName',
      'dob',
      'city',
      'room',
      'enrolledAt',
    ]) {
      if (!_isPlaceholderValue(out[key])) continue;
      if (!_isPlaceholderValue(a[key])) {
        out[key] = a[key];
      } else if (!_isPlaceholderValue(b[key])) {
        out[key] = b[key];
      }
    }
    // helps/missed follow their own stamp, not whichever row won overall — a
    // row can be newer for contact edits while holding a stale help count.
    _mergeHelpCounters(out, a, b);
    return out;
  }

  /// Repair rows corrupted by older admin hydrates that wrote state/name as "***".
  /// Returns how many rows were fixed. [fallbackState] is used when state is poisoned.
  static int repairRedactedFields(dynamic config, {String fallbackState = ''}) {
    final members = listFrom(config);
    var fixed = 0;
    final next = <Map<String, dynamic>>[];
    for (final raw in members) {
      final m = Map<String, dynamic>.from(raw);
      var changed = false;
      if (_isPlaceholderValue(m['state'])) {
        final fb = fallbackState.trim();
        if (fb.isNotEmpty) {
          m['state'] = fb;
          changed = true;
        }
      }
      for (final key in const ['fullName', 'city', 'room', 'phone', 'homeAddress', 'dob', 'username']) {
        if (_isPlaceholderValue(m[key])) {
          m[key] = '';
          changed = true;
        }
      }
      if (_isPlaceholderValue(m['email'])) {
        // Keep registryId-based identity; mint a stable guest email if needed.
        final rid = (m['registryId'] ?? '').toString().trim();
        final digits = _phoneKey((m['phone'] ?? '').toString());
        if (digits.length >= 7) {
          m['email'] = 'civic.$digits@guest.ngmy';
          changed = true;
        } else if (rid.isNotEmpty) {
          m['email'] = 'civic.${rid.toLowerCase()}@guest.ngmy';
          changed = true;
        }
      }
      if (changed) {
        m['updatedAt'] = DateTime.now().toUtc().toIso8601String();
        m['repairedRedactionAt'] = m['updatedAt'];
        fixed++;
      }
      next.add(m);
    }
    if (fixed > 0) setList(config, next);
    return fixed;
  }

  static void applyPayload(dynamic config, Map<String, dynamic> payload) {
    final remote = payload['members'];
    if (remote is! List) return;
    final remoteMembers = remote.map((e) => Map<String, dynamic>.from(e as Map)).toList();

    // Merge delete tombstones from every device so removals stay removed everywhere.
    final remoteRemovedRaw = payload['removed'] ?? payload['civicRegistryRemoved'];
    final remoteRemoved = <Map<String, dynamic>>[];
    if (remoteRemovedRaw is List) {
      for (final e in remoteRemovedRaw) {
        if (e is Map) remoteRemoved.add(Map<String, dynamic>.from(e));
      }
    }
    final liveByEmail = <String, Map<String, dynamic>>{};
    final liveByRid = <String, Map<String, dynamic>>{};
    for (final m in listFrom(config)) {
      final email = emailKey((m['email'] ?? '').toString());
      final rid = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (email.isNotEmpty) liveByEmail[email] = m;
      if (rid.isNotEmpty) liveByRid[rid] = m;
    }
    for (final m in remoteMembers) {
      final email = emailKey((m['email'] ?? '').toString());
      final rid = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (email.isNotEmpty) {
        final prev = liveByEmail[email];
        liveByEmail[email] = prev == null ? m : _mergeMemberRow(prev, m);
      }
      if (rid.isNotEmpty) {
        final prev = liveByRid[rid];
        liveByRid[rid] = prev == null ? m : _mergeMemberRow(prev, m);
      }
    }

    bool softDeleteSuperseded(Map<String, dynamic> tomb) {
      if (tomb['softDelete'] != true && tomb['permanent'] != true) return false;
      final email = emailKey((tomb['email'] ?? '').toString());
      final rid = (tomb['registryId'] ?? '').toString().trim().toUpperCase();
      final live = (email.isNotEmpty ? liveByEmail[email] : null) ??
          (rid.isNotEmpty ? liveByRid[rid] : null);
      if (live == null) return false;
      // Only an explicit restore / re-enroll drops a delete. Every merge and
      // dedupe pass refreshes updatedAt, so trusting it meant deleted members
      // came back on the very next cloud refresh.
      final restoredAt = DateTime.tryParse((live['restoredAt'] ?? '').toString());
      if (restoredAt == null) return false;
      final removedAt = DateTime.tryParse((tomb['removedAt'] ?? '').toString());
      return removedAt == null || !restoredAt.isBefore(removedAt);
    }

    final tombstones = <String, Map<String, dynamic>>{};
    for (final r in [...removedFrom(config), ...remoteRemoved]) {
      if (softDeleteSuperseded(r)) continue;
      final email = emailKey((r['email'] ?? '').toString());
      final rid = (r['registryId'] ?? '').toString().trim().toUpperCase();
      final key = email.isNotEmpty ? 'em:$email' : (rid.isNotEmpty ? 'id:$rid' : '');
      if (key.isEmpty) continue;
      final prev = tombstones[key];
      if (prev == null) {
        tombstones[key] = r;
        continue;
      }
      final a = DateTime.tryParse((prev['removedAt'] ?? '').toString());
      final b = DateTime.tryParse((r['removedAt'] ?? '').toString());
      if (b != null && (a == null || b.isAfter(a))) tombstones[key] = r;
    }
    setRemoved(config, tombstones.values.toList());

    // Merge deceased roster from every device — deceased members stay out of the live list.
    final remoteDeceasedRaw = payload['deceased'] ?? payload['civicRegistryDeceased'];
    final remoteDeceased = <Map<String, dynamic>>[];
    if (remoteDeceasedRaw is List) {
      for (final e in remoteDeceasedRaw) {
        if (e is Map) remoteDeceased.add(Map<String, dynamic>.from(e));
      }
    }
    final deceasedMerged = <String, Map<String, dynamic>>{};
    for (final row in [...deceasedFrom(config), ...remoteDeceased]) {
      final email = emailKey((row['email'] ?? '').toString());
      final rid = (row['registryId'] ?? '').toString().trim().toUpperCase();
      final key = email.isNotEmpty ? 'em:$email' : (rid.isNotEmpty ? 'id:$rid' : '');
      if (key.isEmpty) continue;
      final prev = deceasedMerged[key];
      if (prev == null) {
        deceasedMerged[key] = row;
        continue;
      }
      final a = DateTime.tryParse((prev['deceasedAt'] ?? '').toString());
      final b = DateTime.tryParse((row['deceasedAt'] ?? '').toString());
      if (b != null && (a == null || b.isAfter(a))) deceasedMerged[key] = row;
    }
    setDeceased(config, deceasedMerged.values.toList());

    bool isDeceasedRow(Map<String, dynamic> m) {
      final email = emailKey((m['email'] ?? '').toString());
      final rid = (m['registryId'] ?? '').toString().trim().toUpperCase();
      if (email.isNotEmpty && deceasedMerged.containsKey('em:$email')) return true;
      if (rid.isNotEmpty && deceasedMerged.containsKey('id:$rid')) return true;
      return false;
    }

    bool isTombstoned(Map<String, dynamic> m) {
      final email = emailKey((m['email'] ?? '').toString());
      final rid = (m['registryId'] ?? '').toString().trim().toUpperCase();
      Map<String, dynamic>? tomb;
      if (email.isNotEmpty) tomb = tombstones['em:$email'];
      tomb ??= rid.isNotEmpty ? tombstones['id:$rid'] : null;
      if (tomb == null) return false;
      final removedAt = DateTime.tryParse((tomb['removedAt'] ?? '').toString());
      final restoredAt = DateTime.tryParse((m['restoredAt'] ?? '').toString());
      // Restore / re-enroll is the only way back. updatedAt must never count
      // here: it is refreshed by every merge, which resurrected deleted
      // members (and duplicates) on each cloud refresh.
      if (restoredAt != null && (removedAt == null || !restoredAt.isBefore(removedAt))) {
        return false;
      }
      return true;
    }

    final local = listFrom(config);
    if (local.isEmpty) {
      final seed = remoteMembers.where((m) {
        if (_mergeKey(m).isEmpty || isTombstoned(m) || isDeceasedRow(m)) return false;
        // Never seed an empty local roster from privacy-redacted cloud rows.
        if (_isSanitizedMemberRow(m) && _isPlaceholderValue(m['fullName'])) return false;
        return true;
      }).toList();
      if (seed.isNotEmpty) {
        setList(config, seed);
      }
      clearSoftDeletesForActiveMembers(config);
      return;
    }

    // Key by registryId so duplicate/shared emails from registrar enroll stay as separate members.
    final merged = <String, Map<String, dynamic>>{};
    for (final m in [...local, ...remoteMembers]) {
      final key = _mergeKey(m);
      if (key.isEmpty) continue;
      if (isTombstoned(m)) continue;
      if (isDeceasedRow(m)) continue;
      final prev = merged[key];
      merged[key] = prev == null ? m : _mergeMemberRow(prev, m);
    }

    setList(config, merged.values.toList());
    clearSoftDeletesForActiveMembers(config);
  }

  static Future<void> saveLocalBackup(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.setString(_prefsKey, jsonEncode(payload(config)));
    } catch (_) {}
  }

  static Future<void> hydrateLocal(dynamic config) async {
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw == null || raw.isEmpty) return;
      final decoded = jsonDecode(raw);
      if (decoded is Map) {
        applyPayload(config, Map<String, dynamic>.from(decoded));
        dedupeMembers(config);
        pruneIncompleteEnrollments(config);
        purgePhantomMembers(config);
      }
    } catch (_) {}
  }
}
