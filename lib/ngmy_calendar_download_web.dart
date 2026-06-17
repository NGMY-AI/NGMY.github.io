import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';

/// Opens the user's real phone calendar app (Apple Calendar on iPhone) via an .ics event.
/// Must be called from a user tap (button) — iOS blocks programmatic opens after async delays.
Future<String> ngmyDownloadIcsFile(Uint8List bytes, String filename) async {
  final icsText = utf8.decode(bytes);
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.ics') ? safeName : '$safeName.ics';

  // 1) data: URI — best on iPhone Safari / PWA (opens Add to Calendar sheet).
  final dataUri = 'data:text/calendar;charset=utf-8,${Uri.encodeComponent(icsText)}';
  if (dataUri.length < 1_500_000) {
    try {
      html.window.open(dataUri, '_blank');
      return 'Opening your iPhone Calendar — tap Add to save this event.';
    } catch (_) {}
  }

  // 2) Blob URL in a new tab.
  try {
    final blob = html.Blob([bytes], 'text/calendar;charset=utf-8');
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.window.open(url, '_blank');
    Future<void>.delayed(const Duration(seconds: 30), () => html.Url.revokeObjectUrl(url));
    return 'Opening your Calendar app — tap Add to save this event.';
  } catch (_) {}

  // 3) Download fallback (desktop Android).
  try {
    final blob = html.Blob([bytes], 'text/calendar;charset=utf-8');
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.AnchorElement(href: url)
      ..download = name
      ..click();
    html.Url.revokeObjectUrl(url);
    return 'Calendar file ready — open it to add the event.';
  } catch (_) {}

  return 'Could not open Calendar. Tap the green Add to Calendar button again.';
}
