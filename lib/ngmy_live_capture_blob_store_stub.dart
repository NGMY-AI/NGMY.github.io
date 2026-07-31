class NgmyLiveCaptureBlobStore {
  static Future<bool> putDataUrl(String id, String dataUrl) async => false;
  static Future<bool> putBytes(String id, List<int> bytes, {String mimeType = 'image/jpeg'}) async => false;
  static Future<bool> putBlob(String id, Object blob) async => false;
  static Future<bool> putMedia(String id, String src, {String mimeType = 'application/octet-stream'}) async => false;
  static Future<String?> getDataUrl(String id) async => null;
  static Future<String?> getPlayableUrl(String id) async => null;
  static Future<void> delete(String id) async {}
  static Future<void> deleteMany(Iterable<String> ids) async {}
}
