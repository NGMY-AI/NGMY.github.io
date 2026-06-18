import 'package:url_launcher/url_launcher.dart';

Future<bool> ngmyLaunchPublishedAppUrl(String url, {bool newTab = false}) async {
  final uri = Uri.tryParse(url.trim());
  if (uri == null) return false;
  return launchUrl(uri, mode: LaunchMode.externalApplication);
}

void ngmySetGuestAppDocumentTitle(String title) {}
