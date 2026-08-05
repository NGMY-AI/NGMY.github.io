import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';
import 'ngmy_studio_library_cloud.dart';

String _bioStorageKey(String userEmail) => 'ngmy_bios_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyBioDocument>> loadNgmyBios({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  return NgmyBioDocument.decodeList(prefs.getString(_bioStorageKey(userEmail)) ?? '');
}

Future<void> _writeNgmyBiosLocal(String userEmail, List<NgmyBioDocument> list) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_bioStorageKey(userEmail), NgmyBioDocument.encodeList(list));
}

/// Reconciles this device's Bios with the account's cloud copy. Only the oldest
/// Bio is kept in the cloud, so that is the one a new phone gets back; anything
/// made after it stays on the device that made it.
Future<List<NgmyBioDocument>> syncNgmyBiosWithCloud({required String userEmail}) async {
  final local = await loadNgmyBios(userEmail: userEmail);
  final merged = await NgmyStudioLibraryCloud.reconcileBios(email: userEmail, local: local);
  if (merged == null) return local;
  await _writeNgmyBiosLocal(userEmail, merged);
  return merged;
}

Future<void> saveNgmyBio({required String userEmail, required NgmyBioDocument doc}) async {
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
  if (merged != null) await _writeNgmyBiosLocal(userEmail, merged);
}

Future<void> deleteNgmyBio({required String userEmail, required String id}) async {
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
}

Future<int> ngmyBioCount({required String userEmail}) async {
  return (await loadNgmyBios(userEmail: userEmail)).length;
}
