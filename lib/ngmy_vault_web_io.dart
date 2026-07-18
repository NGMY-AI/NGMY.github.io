import 'dart:typed_data';

import 'ngmy_vault_web_io_stub.dart' if (dart.library.html) 'ngmy_vault_web_io_web.dart' as impl;

/// Saves bytes to the user's device (a real download on web; unsupported
/// elsewhere since this app only actually ships as a web build today).
Future<bool> ngmyVaultDownloadBytes(Uint8List bytes, String filename, String mime) => impl.downloadBytes(bytes, filename, mime);

/// A `blob:` URL for in-page video playback from local bytes. Caller must
/// revoke it with [ngmyVaultRevokeBlobUrl] once done.
String? ngmyVaultBytesToBlobUrl(Uint8List bytes, String mime) => impl.bytesToBlobUrl(bytes, mime);

void ngmyVaultRevokeBlobUrl(String url) => impl.revokeBlobUrl(url);
