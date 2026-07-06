import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_menu_models.dart';

String _localMenuDraftKey(String userEmail) => 'ngmy_local_menus_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyMenuDocument>> loadNgmyLocalMenus({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  return NgmyMenuDocument.decodeList(prefs.getString(_localMenuDraftKey(userEmail)) ?? '');
}

Future<void> saveNgmyLocalMenu({required String userEmail, required NgmyMenuDocument doc}) async {
  final list = await loadNgmyLocalMenus(userEmail: userEmail);
  final i = list.indexWhere((d) => d.id == doc.id);
  doc.updatedAt = DateTime.now();
  if (i >= 0) {
    list[i] = doc;
  } else {
    list.insert(0, doc);
  }
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_localMenuDraftKey(userEmail), NgmyMenuDocument.encodeList(list));
}

Future<int> ngmyLocalMenuCount({required String userEmail}) async {
  return (await loadNgmyLocalMenus(userEmail: userEmail)).length;
}
