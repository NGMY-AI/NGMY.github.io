class NgmyLiveCaptureBlobStore {
  static Future<bool> putDataUrl(String id, String dataUrl) async => false;
  static Future<String?> getDataUrl(String id) async => null;
  static Future<void> delete(String id) async {}
  static Future<void> deleteMany(Iterable<String> ids) async {}
}
