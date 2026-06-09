import 'dart:html' as html;

/// Web: explicitly request microphone access before Web Speech API starts.
Future<bool> ngmyRequestMicPermission() async {
  try {
    final devices = html.window.navigator.mediaDevices;
    if (devices == null) return false;
    final stream = await devices.getUserMedia({'audio': true});
    for (final track in stream.getTracks()) {
      track.stop();
    }
    return true;
  } catch (_) {
    return false;
  }
}
