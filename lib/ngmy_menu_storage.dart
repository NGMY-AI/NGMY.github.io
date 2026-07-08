import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_publish_registry.dart';

String _menuStorageKey(String userEmail) => 'ngmy_menus_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyMenuDocument>> loadNgmyMenus({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_menuStorageKey(userEmail)) ?? '';
  return NgmyMenuDocument.decodeList(raw);
}

Future<void> saveNgmyMenu({required String userEmail, required NgmyMenuDocument doc}) async {
  final list = await loadNgmyMenus(userEmail: userEmail);
  final i = list.indexWhere((d) => d.id == doc.id);
  doc.updatedAt = DateTime.now();
  if (i >= 0) {
    list[i] = doc;
  } else {
    list.insert(0, doc);
  }
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_menuStorageKey(userEmail), NgmyMenuDocument.encodeList(list));
}

Future<void> deleteNgmyMenu({required String userEmail, required String id}) async {
  final list = await loadNgmyMenus(userEmail: userEmail);
  final removed = list.where((d) => d.id == id).toList();
  list.removeWhere((d) => d.id == id);
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_menuStorageKey(userEmail), NgmyMenuDocument.encodeList(list));
  for (final doc in removed) {
    final slug = doc.slug.trim();
    if (slug.isEmpty) continue;
    await NgmyMenuPublishRegistry.unpublishSlug(slug, ownerEmail: userEmail);
  }
}

Future<int> ngmyMenuCount({required String userEmail}) async {
  final list = await loadNgmyMenus(userEmail: userEmail);
  return list.length;
}
