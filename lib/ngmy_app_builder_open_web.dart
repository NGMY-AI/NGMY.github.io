import 'dart:html' as html;

Future<bool> ngmyLaunchPublishedAppUrl(String url, {bool newTab = false}) async {
  final clean = url.trim();
  if (clean.isEmpty) return false;
  if (newTab) {
    html.window.open(clean, '_blank');
  } else {
    html.window.location.assign(clean);
  }
  return true;
}

void ngmySetGuestAppDocumentTitle(String title) {
  final t = title.trim();
  if (t.isEmpty) return;
  try {
    html.document.title = t;
  } catch (_) {}
}
