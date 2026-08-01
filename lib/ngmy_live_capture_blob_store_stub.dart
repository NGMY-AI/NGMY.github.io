import 'dart:typed_data';

class NgmyLiveCaptureBlobStore {
  static Future<bool> putDataUrl(String id, String dataUrl) async => false;
  static Future<bool> putBytes(String id, List<int> bytes, {String mimeType = 'image/jpeg'}) async => false;
  static Future<bool> putBlob(String id, Object blob, {String mimeType = ''}) async => false;
  static Future<bool> putMedia(String id, String src, {String mimeType = 'application/octet-stream'}) async => false;
  static Future<String?> getDataUrl(String id) async => null;
  static Future<String?> getPlayableUrl(String id, {String? mimeType}) async => null;
  static Future<Uint8List?> getBytes(String id) async => null;
  static Future<Uint8List?> fetchBlobUrlBytes(String blobUrl) async => null;
  static Future<void> delete(String id) async {}
  static Future<void> deleteMany(Iterable<String> ids) async {}
}
