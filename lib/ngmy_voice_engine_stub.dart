/// Non-web voice engine — uses speech_to_text via ngmy_voice_input.dart.
Future<bool> ngmyVoiceEngineSupported() async => true;

Future<bool> ngmyVoiceEngineListen({
  required void Function(String text, {bool isFinal}) onText,
}) async =>
    false;

Future<void> ngmyVoiceEngineStop() async {}

String? get ngmyVoiceEngineLastError => null;

void ngmyVoiceEngineClearError() {}
