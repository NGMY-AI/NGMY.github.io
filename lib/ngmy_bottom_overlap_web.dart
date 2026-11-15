// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;

/// How much of the app sits under Safari's floating bottom bar, in a Safari tab on iPhone. index.html works it out each time the page is
/// measured and writes it on the page (data-ngmy-overlap). In the Home Screen app, on computers and on Android it is 0.
double ngmyBrowserBottomOverlap() {
  try {
    final v = double.tryParse(html.document.documentElement?.getAttribute('data-ngmy-overlap') ?? '') ?? 0;
    if (v > 0 && v < 280) return v;
  } catch (_) {}
  return 0;
}
