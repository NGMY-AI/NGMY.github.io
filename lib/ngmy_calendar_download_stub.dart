import 'dart:typed_data';

/// Mobile/desktop: calendar events use native APIs instead of file download.
Future<String> ngmyDownloadIcsFile(Uint8List bytes, String filename) async {
  throw UnsupportedError('ICS download is only used on web');
}
