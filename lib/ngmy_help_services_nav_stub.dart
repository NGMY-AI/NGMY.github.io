import 'package:url_launcher/url_launcher.dart';

void ngmyHelpServicesGoTo(String url) {
  launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
}

void ngmyHelpServicesOpenFromBio() {
  launchUrl(Uri.parse('https://ngmy.org/?svc_open=1'), mode: LaunchMode.externalApplication);
}

String? ngmyHelpServicesReadReturnParam() => null;
