import 'package:url_launcher/url_launcher.dart';

void ngmyHelpServicesGoTo(String url) {
  launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
}

String? ngmyHelpServicesReadReturnParam() => null;
