import 'ngmy_ai_client.dart';
import 'ngmy_voice_capture_stub.dart' if (dart.library.html) 'ngmy_voice_capture_web.dart' as impl;

/// Records the microphone directly (web/ngmy_voice_capture.js) and lets the AI
/// write down what was said. Doesn't rely on the browser's speech service, so it
/// works in Chrome, Edge, Safari and on iPhone.
class NgmyVoiceCapture {
  NgmyVoiceCapture._();

  static bool get supported => impl.ngmyVoiceCaptureSupported();

  /// Starts recording. [onLevel] gets 0..1 loudness while recording.
  /// Throws a readable message when the microphone can't be used.
  static Future<void> start(void Function(double level) onLevel) async {
    final err = await impl.ngmyVoiceCaptureStart(onLevel);
    if (err == null) return;
    throw messageFor(err);
  }

  /// Stops and returns the recording (empty when nothing was recorded).
  static Future<({String b64, String mime, double seconds})> stop() => impl.ngmyVoiceCaptureStop();

  static void cancel() => impl.ngmyVoiceCaptureCancel();

  static String messageFor(String code) {
    final c = code.toLowerCase();
    if (c.contains('notallowed') || c.contains('not-allowed') || c.contains('permission') || c.contains('security')) {
      return 'The microphone is blocked for NGMY. Click the lock icon next to ngmy.org → Microphone → Allow, then tap the mic again. (On iPhone: Settings → Safari → Microphone → Allow.)';
    }
    if (c.contains('notfound') || c.contains('overconstrained')) {
      return 'No microphone was found. Plug one in (or turn on your headset) and try again.';
    }
    if (c.contains('notreadable') || c.contains('abort')) {
      return 'Another app is using the microphone. Close it and try again.';
    }
    if (c.contains('not-supported')) {
      return 'This browser can\'t record audio. Please type your idea instead.';
    }
    return 'The microphone could not start ($code). Please try again, or type your idea.';
  }

  /// Turns a recording into text with the AI.
  static Future<String> transcribe(({String b64, String mime, double seconds}) audio) async {
    if (audio.b64.isEmpty) throw 'I didn\'t catch anything — hold the mic a bit longer and speak clearly.';
    final key = await ngmyResolveGeminiApiKey();
    if (key.trim().isEmpty) throw 'AI is not set up yet. Ask the admin to turn on AI.';
    final creds = ngmyParseAiCredentials(key);
    final r = await ngmyAiGenerateWithCredentials(
      creds,
      'Transcribe this voice recording word for word in the language spoken. '
      'Reply with ONLY the transcript text — no quotes, no labels, no extra words. '
      'If there is no clear speech, reply with exactly: [no speech]',
      images: [(mimeType: audio.mime, data: audio.b64)],
    );
    final text = (r.text ?? '').trim();
    if (text.isEmpty) {
      throw r.error != null && ngmyIsOfflineOrNetworkError(r.error!)
          ? 'No internet connection — try again when you are online.'
          : 'I couldn\'t turn that into text. Please try again.';
    }
    if (text.toLowerCase().contains('[no speech]')) throw 'I couldn\'t hear any words. Speak a little louder and closer to the mic.';
    return text;
  }
}
