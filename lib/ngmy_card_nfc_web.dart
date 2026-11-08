// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;
import 'dart:js_util' as js_util;

/// Writing a card onto an NFC tag uses Web NFC, which Chrome on Android has. Safari on iPhone does not have it.
bool ngmyNfcAvailable() {
  try {
    return js_util.hasProperty(html.window, 'NDEFReader');
  } catch (_) {
    return false;
  }
}

/// Returns null when the card was written, or a sentence saying why not.
Future<String?> ngmyNfcWrite(String vcard, String name) async {
  try {
    final ctor = js_util.getProperty<Object>(html.window, 'NDEFReader');
    final reader = js_util.callConstructor<Object>(ctor, const []);
    final record = js_util.jsify(<String, Object>{'recordType': 'mime', 'mediaType': 'text/vcard', 'data': vcard});
    final message = js_util.jsify(<String, Object>{
      'records': [record],
    });
    await js_util.promiseToFuture<void>(js_util.callMethod(reader, 'write', [message]));
    return null;
  } catch (e) {
    final s = e.toString();
    if (s.contains('NotAllowed')) return 'The phone did not allow NFC. Check that NFC is on and allow it for this site.';
    if (s.contains('NotSupported')) return 'This phone cannot write NFC tags.';
    return 'Could not write the tag. Hold the phone steady against the tag and try again.';
  }
}
