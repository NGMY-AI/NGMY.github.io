import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_publish_registry.dart';
import 'ngmy_studio_library_cloud.dart';

String _menuStorageKey(String userEmail) => 'ngmy_menus_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyMenuDocument>> loadNgmyMenus({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  final raw = prefs.getString(_menuStorageKey(userEmail)) ?? '';
  return NgmyMenuDocument.decodeList(raw);
}

Future<void> _writeNgmyMenusLocal(String userEmail, List<NgmyMenuDocument> list) async {
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_menuStorageKey(userEmail), NgmyMenuDocument.encodeList(list));
}

/// Reconciles this device's menus with the account's cloud copy, so a menu built
/// on one phone is waiting on the next one. Leaves the device list exactly as it
/// was when the cloud cannot be reached.
Future<List<NgmyMenuDocument>> syncNgmyMenusWithCloud({required String userEmail}) async {
  final local = await loadNgmyMenus(userEmail: userEmail);
  final merged = await NgmyStudioLibraryCloud.reconcileMenus(email: userEmail, local: local);
  if (merged == null) return local;
  await _writeNgmyMenusLocal(userEmail, merged);
  return merged;
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
  await _writeNgmyMenusLocal(userEmail, list);

  final merged = await NgmyStudioLibraryCloud.reconcileMenus(email: userEmail, local: list);
  if (merged != null) await _writeNgmyMenusLocal(userEmail, merged);
}

Future<void> deleteNgmyMenu({required String userEmail, required String id}) async {
  final list = await loadNgmyMenus(userEmail: userEmail);
  final removed = list.where((d) => d.id == id).toList();
  list.removeWhere((d) => d.id == id);
  await _writeNgmyMenusLocal(userEmail, list);
  for (final doc in removed) {
    final slug = doc.slug.trim();
    if (slug.isEmpty) continue;
    await NgmyMenuPublishRegistry.unpublishSlug(slug, ownerEmail: userEmail);
  }

  // Carries the deletion up so the user's other devices drop it too, instead of
  // pushing their stale copy back and resurrecting it.
  final merged = await NgmyStudioLibraryCloud.reconcileMenus(
    email: userEmail,
    local: list,
    deletedId: id,
  );
  if (merged != null) await _writeNgmyMenusLocal(userEmail, merged);
}

Future<int> ngmyMenuCount({required String userEmail}) async {
  final list = await loadNgmyMenus(userEmail: userEmail);
  return list.length;
}
