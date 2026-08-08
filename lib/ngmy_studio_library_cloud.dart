import 'dart:convert';

import 'package:flutter/foundation.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_menu_models.dart';
import 'ngmy_settings_cloud.dart';

/// Cloud mirror of a Menu Studio library, so the work survives changing phones.
///
/// Menus mirror in full: the account gets every menu back on a new device.
/// Bios mirror one document only, the oldest one the account still owns. A Bio
/// carries its avatar, header and background inline as base64, so a whole
/// library of them will not fit in one settings row — and the first Bio is the
/// one whose link is already printed, shared and out in the world, so it is the
/// one worth protecting. Delete it and the next-oldest takes its place.
class NgmyStudioLibraryCloud {
  NgmyStudioLibraryCloud._();

  static const _menuPrefix = 'ngmy_menu_lib_v1_';
  static const _bioPrefix = 'ngmy_bio_lib_v1_';

  /// A deletion has to outlive the device that made it. Without a record of it,
  /// another phone that still holds the old copy would push it straight back up
  /// and the thing the user deleted would reappear.
  static const _tombstoneRetention = Duration(days: 180);

  static const _netTimeout = Duration(seconds: 12);

  static String _accountKey(String email) {
    final normalized = email.trim().toLowerCase();
    if (normalized.isEmpty) return '';
    // Keeps raw addresses out of a key column that anyone can read.
    return base64Url.encode(utf8.encode(normalized)).replaceAll('=', '');
  }

  static String menuRowKey(String email) {
    final account = _accountKey(email);
    return account.isEmpty ? '' : '$_menuPrefix$account';
  }

  static String bioRowKey(String email) {
    final account = _accountKey(email);
    return account.isEmpty ? '' : '$_bioPrefix$account';
  }

  static List<Map<String, dynamic>> _docsFrom(Map<String, dynamic>? payload) {
    final raw = payload?['docs'];
    if (raw is! List) return const [];
    return raw.whereType<Map>().map((e) => Map<String, dynamic>.from(e)).toList();
  }

  static Map<String, DateTime> _tombstonesFrom(Map<String, dynamic>? payload) {
    final out = <String, DateTime>{};
    final raw = payload?['deleted'];
    if (raw is! Map) return out;
    raw.forEach((k, v) {
      final at = DateTime.tryParse(v.toString());
      if (at != null) out[k.toString()] = at.toUtc();
    });
    return out;
  }

  static Map<String, String> _encodeTombstones(Map<String, DateTime> tombstones) {
    final cutoff = DateTime.now().toUtc().subtract(_tombstoneRetention);
    final out = <String, String>{};
    tombstones.forEach((id, at) {
      if (at.toUtc().isAfter(cutoff)) out[id] = at.toUtc().toIso8601String();
    });
    return out;
  }

  /// The reconciliation rule: newest edit of each document wins, and a deleted
  /// document stays gone unless it was edited after the deletion.
  static List<T> mergeById<T>({
    required List<T> local,
    required List<T> remote,
    required String Function(T) idOf,
    required DateTime Function(T) updatedOf,
    required Map<String, DateTime> tombstones,
  }) {
    final byId = <String, T>{};
    for (final doc in remote) {
      byId[idOf(doc)] = doc;
    }
    for (final doc in local) {
      final id = idOf(doc);
      final rival = byId[id];
      if (rival == null || !updatedOf(doc).isBefore(updatedOf(rival))) byId[id] = doc;
    }
    // A deletion only sticks while nobody has edited the document since. That
    // way an edit made on another phone after the delete is not thrown away.
    byId.removeWhere((id, doc) {
      final deletedAt = tombstones[id];
      return deletedAt != null && !updatedOf(doc).toUtc().isAfter(deletedAt);
    });
    return byId.values.toList()..sort((a, b) => updatedOf(b).compareTo(updatedOf(a)));
  }

  static Future<void> _write(
    String key,
    List<Map<String, dynamic>> docs,
    Map<String, DateTime> tombstones,
    Map<String, dynamic>? previous,
  ) async {
    final deleted = _encodeTombstones(tombstones);
    // Opening the studio reconciles too, so skip the write when the row already
    // says exactly this and only the timestamp would change.
    final sameDocs = jsonEncode(docs) == jsonEncode(_docsFrom(previous));
    final sameDeleted = jsonEncode(deleted) == jsonEncode(_encodeTombstones(_tombstonesFrom(previous)));
    if (previous != null && sameDocs && sameDeleted) return;

    try {
      await ngmyUpsertSettingsRowReliable(key, {
        'docs': docs,
        'deleted': deleted,
        'savedAt': DateTime.now().toUtc().toIso8601String(),
      }).timeout(_netTimeout);
    } catch (e) {
      debugPrint('[studio library] write $key: $e');
    }
  }

  /// Folds this device's menus together with the account's cloud copy and
  /// writes the result back up. Pass [deletedId] when the user just deleted one,
  /// so the deletion travels to their other devices instead of being undone by
  /// them. Returns null when the cloud is unreachable, which means the caller
  /// should keep showing the device's own list and change nothing.
  static Future<List<NgmyMenuDocument>?> reconcileMenus({
    required String email,
    required List<NgmyMenuDocument> local,
    String? deletedId,
  }) async {
    final key = menuRowKey(email);
    if (key.isEmpty) return null;

    final row = await ngmyFetchSettingsRowStatus(key, timeout: _netTimeout);
    if (!row.reachable) return null;

    final tombstones = _tombstonesFrom(row.value);
    final gone = deletedId?.trim() ?? '';
    if (gone.isNotEmpty) tombstones[gone] = DateTime.now().toUtc();

    final remote = _docsFrom(row.value).map(NgmyMenuDocument.fromJson).toList();
    final merged = mergeById<NgmyMenuDocument>(
      local: local,
      remote: remote,
      idOf: (d) => d.id,
      updatedOf: (d) => d.updatedAt,
      tombstones: tombstones,
    );

    await _write(key, merged.map((d) => d.toJson()).toList(), tombstones, row.value);
    return merged;
  }

  /// Same contract as [reconcileMenus], except only the account's oldest
  /// surviving Bio is kept in the cloud — see the note on this class.
  static Future<List<NgmyBioDocument>?> reconcileBios({
    required String email,
    required List<NgmyBioDocument> local,
    String? deletedId,
  }) async {
    final key = bioRowKey(email);
    if (key.isEmpty) return null;

    final row = await ngmyFetchSettingsRowStatus(key, timeout: _netTimeout);
    if (!row.reachable) return null;

    final tombstones = _tombstonesFrom(row.value);
    final gone = deletedId?.trim() ?? '';
    if (gone.isNotEmpty) tombstones[gone] = DateTime.now().toUtc();

    final remote = _docsFrom(row.value).map(NgmyBioDocument.fromJson).toList();
    final merged = mergeById<NgmyBioDocument>(
      local: local,
      remote: remote,
      idOf: (d) => d.id,
      updatedOf: (d) => d.updatedAt,
      tombstones: tombstones,
    );

    final keep = oldestBio(merged);
    await _write(key, keep == null ? const [] : [keep.toJson()], tombstones, row.value);
    return merged;
  }

  /// The Bio that gets cloud-backed: the first one the account created and has
  /// not deleted.
  static NgmyBioDocument? oldestBio(List<NgmyBioDocument> list) {
    if (list.isEmpty) return null;
    final sorted = [...list]..sort((a, b) => a.createdAt.compareTo(b.createdAt));
    return sorted.first;
  }
}
