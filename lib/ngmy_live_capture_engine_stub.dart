class NgmyLiveCaptureResult {
  const NgmyLiveCaptureResult({required this.dataUrl, required this.mimeType, this.captureBlob});
  final String dataUrl;
  final String mimeType;
  final Object? captureBlob;
}

class NgmyLiveCaptureEngine {
  String? lastError;

  Object? get previewStream => null;

  Future<bool> start({
    required bool video,
    String facingMode = 'user',
    String aspect = 'youtube',
  }) async {
    lastError = 'Live Capture needs a web browser with microphone/camera access.';
    return false;
  }

  Future<NgmyLiveCaptureResult?> stop() async => null;

  Future<void> downloadLast() async {}

  Future<void> dispose() async {}

  static Future<void> downloadDataUrl(String dataUrl, String mimeType, String title) async {}
}
