import 'ngmy_local_keep.dart';

import 'ngmy_menu_models.dart';

String _localMenuDraftKey(String userEmail) => 'ngmy_local_menus_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyMenuDocument>> loadNgmyLocalMenus({required String userEmail}) async {
  return NgmyMenuDocument.decodeList(await ngmyKeepRead(_localMenuDraftKey(userEmail)));
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
  await ngmyKeepWrite(_localMenuDraftKey(userEmail), NgmyMenuDocument.encodeList(list));
}

Future<void> deleteNgmyLocalMenu({required String userEmail, required String id}) async {
  final list = await loadNgmyLocalMenus(userEmail: userEmail);
  list.removeWhere((d) => d.id == id);
  await ngmyKeepWrite(_localMenuDraftKey(userEmail), NgmyMenuDocument.encodeList(list));
}

Future<int> ngmyLocalMenuCount({required String userEmail}) async {
  return (await loadNgmyLocalMenus(userEmail: userEmail)).length;
}
