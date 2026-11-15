import 'package:shared_preferences/shared_preferences.dart';

/// Reads what was kept on this device under [key] (null when nothing was kept).
Future<String?> ngmyLocalRead(String key) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    return prefs.getString(key);
  } catch (_) {
    return null;
  }
}

/// Keeps [value] on this device under [key]. True when it was kept.
Future<bool> ngmyLocalWrite(String key, String value) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    return await prefs.setString(key, value);
  } catch (_) {
    return false;
  }
}
