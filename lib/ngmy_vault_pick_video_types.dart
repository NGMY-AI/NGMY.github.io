import 'dart:typed_data';

/// Gallery video picked for private vault storage (Quick Dial).
class NgmyVaultPickedVideo {
  const NgmyVaultPickedVideo({
    required this.mime,
    required this.name,
    required this.sizeBytes,
    this.bytes,
    this.webBlob,
  });

  final String mime;
  final String name;
  final int sizeBytes;
  final Uint8List? bytes;

  /// [dart:html] [Blob] on web — stored without loading into Dart memory.
  final Object? webBlob;
}
