import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_bio_models.dart';

String _localBioDraftKey(String userEmail) => 'ngmy_local_bios_v1_${userEmail.trim().toLowerCase()}';

Future<List<NgmyBioDocument>> loadNgmyLocalBios({required String userEmail}) async {
  final prefs = await SharedPreferences.getInstance();
  return NgmyBioDocument.decodeList(prefs.getString(_localBioDraftKey(userEmail)) ?? '');
}

Future<void> saveNgmyLocalBio({required String userEmail, required NgmyBioDocument doc}) async {
  final list = await loadNgmyLocalBios(userEmail: userEmail);
  doc.updatedAt = DateTime.now();
  final i = list.indexWhere((d) => d.id == doc.id);
  if (i >= 0) {
    list[i] = doc;
  } else {
    list.insert(0, doc);
  }
  final prefs = await SharedPreferences.getInstance();
  await prefs.setString(_localBioDraftKey(userEmail), NgmyBioDocument.encodeList(list));
}

Future<int> ngmyLocalBioCount({required String userEmail}) async {
  return (await loadNgmyLocalBios(userEmail: userEmail)).length;
}
