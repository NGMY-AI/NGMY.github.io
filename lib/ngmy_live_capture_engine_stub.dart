class NgmyLiveCaptureResult {
  const NgmyLiveCaptureResult({required this.dataUrl, required this.mimeType});
  final String dataUrl;
  final String mimeType;
}

class NgmyLiveCaptureEngine {
  String? lastError;

  Object? get previewStream => null;

  Future<bool> start({required bool video}) async {
    lastError = 'Live Capture needs a web browser with microphone/camera access.';
    return false;
  }

  Future<NgmyLiveCaptureResult?> stop() async => null;

  Future<void> downloadLast() async {}

  Future<void> dispose() async {}

  static Future<void> downloadDataUrl(String dataUrl, String mimeType, String title) async {}
}
