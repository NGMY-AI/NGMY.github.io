class NgmyLiveCaptureResult {
  const NgmyLiveCaptureResult({required this.dataUrl, required this.mimeType, this.captureBlob});
  final String dataUrl;
  final String mimeType;
  final Object? captureBlob;
}

class NgmyLiveCaptureEngine {
  String? lastError;

  Object? get previewStream => null;

  bool get previewActive => false;

  Object? get pipStream => null;

  bool get pipEnabled => false;

  Future<bool> openPreview({required String facingMode, required String aspect, bool pipEnabled = false}) async => false;

  Future<void> closePreview() async {}

  Future<bool> switchVideoFacing({required String facingMode, required String aspect}) async => false;

  Future<void> setPipEnabled(bool enabled, {required String mainFacing, required String aspect}) async {}

  Future<bool> warmVoiceMicrophone() async => false;

  Future<bool> start({
    required bool video,
    String facingMode = 'user',
    String aspect = 'youtube',
    bool pipEnabled = false,
  }) async {
    lastError = 'Live Capture needs a web browser with microphone/camera access.';
    return false;
  }

  Future<NgmyLiveCaptureResult?> stop() async => null;

  Future<void> downloadLast() async {}

  Future<void> dispose() async {}

  static Future<void> downloadDataUrl(String dataUrl, String mimeType, String title) async {}
}
