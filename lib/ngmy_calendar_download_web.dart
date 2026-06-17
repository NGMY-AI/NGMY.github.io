import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';

bool _ngmyIsAppleMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      (ua.contains('macintosh') && ua.contains('mobile'));
}

/// Triggers iOS/WebKit "site wants to show a calendar invite" — NOT the share sheet.
bool _openCalendarInviteAnchor(String icsText) {
  try {
    final dataUri = 'data:text/calendar;charset=utf-8,${Uri.encodeComponent(icsText)}';
    if (dataUri.length < 1_500_000) {
      final anchor = html.AnchorElement()
        ..href = dataUri
        ..type = 'text/calendar';
      html.document.body?.append(anchor);
      anchor.click();
      anchor.remove();
      return true;
    }
  } catch (_) {}
  return false;
}

bool _openCalendarInviteBlob(Uint8List bytes) {
  try {
    final blob = html.Blob([bytes], 'text/calendar;charset=utf-8');
    final url = html.Url.createObjectUrlFromBlob(blob);
    final anchor = html.AnchorElement()
      ..href = url
      ..type = 'text/calendar';
    html.document.body?.append(anchor);
    anchor.click();
    anchor.remove();
    Future<void>.delayed(const Duration(seconds: 90), () {
      try {
        html.Url.revokeObjectUrl(url);
      } catch (_) {}
    });
    return true;
  } catch (_) {
    return false;
  }
}

/// Opens the native calendar-invite prompt (Allow / Ignore on iPhone). No share sheet.
Future<String> ngmyDownloadIcsFile(
  Uint8List bytes,
  String filename, {
  String? eventTitle,
}) async {
  final icsText = utf8.decode(bytes);
  final appleMobile = _ngmyIsAppleMobileBrowser();

  if (_openCalendarInviteAnchor(icsText)) {
    return appleMobile
        ? 'Allow the ngmy.org calendar invite on the next prompt.'
        : 'Open the calendar invite to add the event.';
  }

  if (_openCalendarInviteBlob(bytes)) {
    return appleMobile
        ? 'Allow the ngmy.org calendar invite on the next prompt.'
        : 'Calendar invite ready — confirm to add the event.';
  }

  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.ics') ? safeName : '$safeName.ics';
  try {
    final blob = html.Blob([bytes], 'text/calendar');
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.AnchorElement(href: url)
      ..download = name
      ..click();
    html.Url.revokeObjectUrl(url);
    return 'Calendar file downloaded — open it to add the event.';
  } catch (_) {}

  return 'Could not open Calendar. Tap Add to Calendar again.';
}

Future<String> ngmyOpenGoogleCalendarUrl(String url) async {
  try {
    html.window.location.assign(url);
    return 'Opening Google Calendar to save the event.';
  } catch (_) {
    return 'Could not open Calendar.';
  }
}
