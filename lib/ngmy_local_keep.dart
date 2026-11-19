import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_slides_storage_idb_stub.dart' if (dart.library.html) 'ngmy_slides_storage_idb_web.dart';

// Things kept on the phone (bio pages, menus) are written twice: to the browser's quick storage, which is small (about
// 5 MB for the whole app) and can be full, and to the phone's database, which is large. A list is read from the quick
// storage and, when it is not there, from the database, so a full quick storage never makes a saved list disappear.

String _dbKey(String key) => 'keep|$key';

/// Saves [value] under [key] on this phone.
Future<void> ngmyKeepWrite(String key, String value) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final ok = await prefs.setString(key, value);
    if (!ok) throw StateError('not saved');
  } catch (_) {
    // The quick storage is full: an older copy left there would be read instead of the newer one in the database.
    try {
      final prefs = await SharedPreferences.getInstance();
      await prefs.remove(key);
    } catch (_) {}
  }
  try {
    await ngmySlidesIdbPut(_dbKey(key), value);
  } catch (_) {}
}

/// What was saved under [key] on this phone ('' when nothing).
Future<String> ngmyKeepRead(String key) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final v = prefs.getString(key);
    if (v != null && v.isNotEmpty) return v;
  } catch (_) {}
  try {
    return await ngmySlidesIdbGet(_dbKey(key)) ?? '';
  } catch (_) {
    return '';
  }
}
