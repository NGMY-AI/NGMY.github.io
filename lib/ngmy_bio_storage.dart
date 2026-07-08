import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_publish_registry.dart';

String _bioStorageKey(String userEmail) => 'ngmy_bios_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyBioDocument>> loadNgmyBios({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  return NgmyBioDocument.decodeList(prefs.getString(_bioStorageKey(userEmail)) ?? '');
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
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_bioStorageKey(userEmail), NgmyBioDocument.encodeList(list));
}

Future<void> deleteNgmyBio({required String userEmail, required String id}) async {
  final list = await loadNgmyBios(userEmail: userEmail);
  final removed = list.where((d) => d.id == id).toList();
  list.removeWhere((d) => d.id == id);
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_bioStorageKey(userEmail), NgmyBioDocument.encodeList(list));
  for (final doc in removed) {
    final slug = doc.slug.trim();
    if (slug.isEmpty) continue;
    await NgmyBioPublishRegistry.unpublishSlug(slug, ownerEmail: userEmail);
  }
}

Future<int> ngmyBioCount({required String userEmail}) async {
  return (await loadNgmyBios(userEmail: userEmail)).length;
}
