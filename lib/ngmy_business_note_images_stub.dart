import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

String _imgKey(String userEmail, String noteId, String imageId) {
  final u = userEmail.toLowerCase().trim().hashCode.abs();
  return 'ngmy_bnote_img_${u}_${noteId.trim()}_$imageId';
}

Future<bool> ngmyBusinessNoteImagePut({
  required String userEmail,
  required String noteId,
  required String imageId,
  required String dataUrl,
}) async {
  final url = dataUrl.trim();
  if (url.isEmpty || noteId.trim().isEmpty || imageId.trim().isEmpty) return false;
  try {
    final prefs = await SharedPreferences.getInstance();
    return prefs.setString(_imgKey(userEmail, noteId, imageId), url);
  } catch (e) {
    debugPrint('[note images] put: $e');
    return false;
  }
}

Future<String?> ngmyBusinessNoteImageGet({
  required String userEmail,
  required String noteId,
  required String imageId,
}) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final v = prefs.getString(_imgKey(userEmail, noteId, imageId));
    return (v != null && v.trim().isNotEmpty) ? v : null;
  } catch (_) {
    return null;
  }
}

Future<void> ngmyBusinessNoteImageDelete({
  required String userEmail,
  required String noteId,
  required String imageId,
}) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_imgKey(userEmail, noteId, imageId));
  } catch (_) {}
}

Future<void> ngmyBusinessNoteImagesDeleteAll({
  required String userEmail,
  required String noteId,
  required Iterable<String> imageIds,
}) async {
  for (final id in imageIds) {
    await ngmyBusinessNoteImageDelete(userEmail: userEmail, noteId: noteId, imageId: id);
  }
}
