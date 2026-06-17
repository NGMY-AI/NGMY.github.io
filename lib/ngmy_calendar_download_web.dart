import 'dart:html' as html;
import 'dart:typed_data';

bool _ngmyIsAppleMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      (ua.contains('macintosh') && ua.contains('mobile'));
}

/// iOS Share sheet → user picks Calendar (leaves the PWA webview).
Future<bool> _shareIcsFile(Uint8List bytes, String filename, String title) async {
  final nav = html.window.navigator;
  try {
    final name = filename.endsWith('.ics') ? filename : '$filename.ics';
    final blob = html.Blob([bytes], 'text/calendar');
    final file = html.File([blob], name, {'type': 'text/calendar'});
    final shareData = <Object, Object?>{
      'title': title,
      'text': 'Add this event to your Calendar',
      'files': [file],
    };
    await nav.share(shareData);
    return true;
  } catch (e) {
    return false;
  }
}

/// Same-tab anchor click — avoids the in-PWA white browser tab from window.open.
Future<bool> _anchorOpenIcs(Uint8List bytes, String filename, {required bool appleMobile}) async {
  try {
    final name = filename.endsWith('.ics') ? filename : '$filename.ics';
    final blob = html.Blob([bytes], 'text/calendar');
    final url = html.Url.createObjectUrlFromBlob(blob);
    final anchor = html.AnchorElement()
      ..href = url
      ..type = 'text/calendar';
    if (!appleMobile) {
      anchor.download = name;
    }
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

/// Opens the user's real phone Calendar app (Apple Calendar on iPhone).
/// Must be called directly from a user tap.
Future<String> ngmyDownloadIcsFile(
  Uint8List bytes,
  String filename, {
  String? eventTitle,
}) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.ics') ? safeName : '$safeName.ics';
  final title = (eventTitle ?? 'NGMY Event').trim();
  final appleMobile = _ngmyIsAppleMobileBrowser();

  if (appleMobile) {
    final shared = await _shareIcsFile(bytes, name, title);
    if (shared) {
      return 'On the share screen, scroll and tap Calendar, then tap Add.';
    }
    final anchored = await _anchorOpenIcs(bytes, name, appleMobile: true);
    if (anchored) {
      return 'If Calendar opens, tap Add to save the event.';
    }
    return 'Could not open Calendar. Update iOS and try again, or add from Safari (not Home Screen icon).';
  }

  final anchored = await _anchorOpenIcs(bytes, name, appleMobile: false);
  if (anchored) {
    return 'Calendar file ready — open it to add the event.';
  }

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

/// Fallback: open Google Calendar add-event page in the same tab (external https, not blob).
Future<String> ngmyOpenGoogleCalendarUrl(String url) async {
  try {
    html.window.location.assign(url);
    return 'Opening Google Calendar to save the event.';
  } catch (_) {
    return 'Could not open Calendar.';
  }
}
