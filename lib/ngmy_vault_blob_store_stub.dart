import 'dart:typed_data';

class NgmyVaultBlobStore {
  static Future<bool> put(String id, Uint8List bytes, {String mime = 'application/octet-stream'}) async => false;
  static Future<bool> putBlob(String id, Object blob, {String mime = 'application/octet-stream'}) async => false;
  static Future<Uint8List?> getBytes(String id) async => null;
  static Future<String?> getObjectUrl(String id, String mime) async => null;
  static void revokeObjectUrl(String url) {}
  static Future<void> delete(String id) async {}
}
