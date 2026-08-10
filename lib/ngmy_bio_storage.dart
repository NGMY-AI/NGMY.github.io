import 'dart:async';

import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_studio_library_cloud.dart';

String _bioStorageKey(String userEmail) => 'ngmy_bios_v1_${userEmail.trim().toLowerCase()}';

/// Serializes local bio library writes so an in-flight cloud sync cannot
/// overwrite a newer Save that landed while the network call was outstanding.
Future<void>? _bioIoChain;

Future<T> _withBioIoLock<T>(Future<T> Function() action) async {
  final previous = _bioIoChain;
  final gate = Completer<void>();
  _bioIoChain = gate.future;
  if (previous != null) {
    try {
      await previous;
    } catch (_) {}
  }
  try {
    return await action();
  } finally {
    if (!gate.isCompleted) gate.complete();
  }
}

Future<List<NgmyBioDocument>> loadNgmyBios({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  return NgmyBioDocument.decodeList(prefs.getString(_bioStorageKey(userEmail)) ?? '');
}

Future<void> _writeNgmyBiosLocal(String userEmail, List<NgmyBioDocument> list) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_bioStorageKey(userEmail), NgmyBioDocument.encodeList(list));
}

List<NgmyBioDocument> _mergePreferNewest(
  List<NgmyBioDocument> a,
  List<NgmyBioDocument> b,
) {
  final merged = NgmyStudioLibraryCloud.mergeById<NgmyBioDocument>(
    local: a,
    remote: b,
    idOf: (d) => d.id,
    updatedOf: (d) => d.updatedAt,
    tombstones: const {},
  );
  // Never let a stale/empty cloud copy erase a display name that still exists
  // on either side — that was wiping names after Save + reopen.
  return _protectBioDisplayNames(merged, [...a, ...b]);
}

/// If the winning doc has a blank name but another copy of the same id still
/// carries one, keep that name.
List<NgmyBioDocument> _protectBioDisplayNames(
  List<NgmyBioDocument> winners,
  List<NgmyBioDocument> sources,
) {
  final newestWithName = <String, NgmyBioDocument>{};
  for (final doc in sources) {
    if (doc.displayName.trim().isEmpty) continue;
    final prev = newestWithName[doc.id];
    if (prev == null || !doc.updatedAt.isBefore(prev.updatedAt)) {
      newestWithName[doc.id] = doc;
    }
  }
  for (final doc in winners) {
    if (doc.displayName.trim().isNotEmpty) continue;
    final named = newestWithName[doc.id];
    if (named != null) {
      doc.displayName = named.displayName;
    }
  }
  return winners;
}

/// Reconciles this device's Bios with the account's cloud copy. Only the oldest
/// Bio is kept in the cloud, so that is the one a new phone gets back; anything
/// made after it stays on the device that made it.
Future<List<NgmyBioDocument>> syncNgmyBiosWithCloud({required String userEmail}) {
  return _withBioIoLock(() async {
    final local = await loadNgmyBios(userEmail: userEmail);
    final merged = await NgmyStudioLibraryCloud.reconcileBios(email: userEmail, local: local);
    if (merged == null) return local;

    // A Save may have written a newer display name (etc.) while reconcile was
    // waiting on the network. Prefer the freshest local fields by updatedAt.
    final latestLocal = await loadNgmyBios(userEmail: userEmail);
    final remixed = _mergePreferNewest(latestLocal, merged);
    await _writeNgmyBiosLocal(userEmail, remixed);

    final newest = NgmyStudioLibraryCloud.oldestBio(remixed);
    final pushed = NgmyStudioLibraryCloud.oldestBio(merged);
    if (newest != null &&
        (pushed == null || newest.updatedAt.isAfter(pushed.updatedAt))) {
      await NgmyStudioLibraryCloud.reconcileBios(email: userEmail, local: remixed);
    }
    return remixed;
  });
}

Future<void> saveNgmyBio({required String userEmail, required NgmyBioDocument doc}) {
  return _withBioIoLock(() async {
    final list = await loadNgmyBios(userEmail: userEmail);
    doc.updatedAt = DateTime.now();
    final i = list.indexWhere((d) => d.id == doc.id);
    if (i >= 0) {
      list[i] = doc;
    } else {
      list.insert(0, doc);
    }
    await _writeNgmyBiosLocal(userEmail, list);

    final merged = await NgmyStudioLibraryCloud.reconcileBios(email: userEmail, local: list);
    if (merged == null) return;

    final latestLocal = await loadNgmyBios(userEmail: userEmail);
    final remixed = _mergePreferNewest(latestLocal, merged);
    await _writeNgmyBiosLocal(userEmail, remixed);

    final newest = NgmyStudioLibraryCloud.oldestBio(remixed);
    final pushed = NgmyStudioLibraryCloud.oldestBio(merged);
    if (newest != null &&
        (pushed == null || newest.updatedAt.isAfter(pushed.updatedAt) || newest.id != pushed.id)) {
      await NgmyStudioLibraryCloud.reconcileBios(email: userEmail, local: remixed);
    }
  });
}

Future<void> deleteNgmyBio({required String userEmail, required String id}) {
  return _withBioIoLock(() async {
    final list = await loadNgmyBios(userEmail: userEmail);
    final removed = list.where((d) => d.id == id).toList();
    list.removeWhere((d) => d.id == id);
    await _writeNgmyBiosLocal(userEmail, list);
    for (final doc in removed) {
      final slug = doc.slug.trim();
      if (slug.isEmpty) continue;
      await NgmyBioPublishRegistry.unpublishSlug(slug, ownerEmail: userEmail);
    }

    // Clears the deleted Bio out of the cloud and promotes the next-oldest one
    // into the backup slot it just vacated.
    final merged = await NgmyStudioLibraryCloud.reconcileBios(
      email: userEmail,
      local: list,
      deletedId: id,
    );
    if (merged != null) await _writeNgmyBiosLocal(userEmail, merged);
  });
}

Future<int> ngmyBioCount({required String userEmail}) async {
  return (await loadNgmyBios(userEmail: userEmail)).length;
}
