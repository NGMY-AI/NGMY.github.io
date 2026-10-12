bool ngmyVoiceCaptureSupported() => false;

Future<String?> ngmyVoiceCaptureStart(void Function(double level) onLevel) async => 'not-supported';

Future<({String b64, String mime, double seconds})> ngmyVoiceCaptureStop() async => (b64: '', mime: 'audio/wav', seconds: 0.0);

void ngmyVoiceCaptureCancel() {}
