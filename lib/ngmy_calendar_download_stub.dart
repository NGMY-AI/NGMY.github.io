import 'dart:typed_data';

/// Mobile/desktop: calendar events use native APIs instead of file download.
Future<String> ngmyDownloadIcsFile(
  Uint8List bytes,
  String filename, {
  String? eventTitle,
}) async {
  throw UnsupportedError('ICS download is only used on web');
}

Future<String> ngmyOpenGoogleCalendarUrl(String url) async {
  throw UnsupportedError('Google Calendar URL is only used on web');
}
