/// Writing a card onto an NFC tag only works in a web browser that has Web NFC (Chrome on Android).
bool ngmyNfcAvailable() => false;

/// Returns null when the card was written, or a sentence saying why not.
Future<String?> ngmyNfcWrite(String vcard, String name) async => 'NFC is not available on this phone.';
