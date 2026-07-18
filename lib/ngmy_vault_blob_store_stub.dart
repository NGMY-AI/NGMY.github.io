import 'dart:typed_data';

class NgmyVaultBlobStore {
  static Future<bool> put(String id, Uint8List bytes) async => false;
  static Future<Uint8List?> getBytes(String id) async => null;
  static Future<void> delete(String id) async {}
}
