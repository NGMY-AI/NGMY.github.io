import 'package:url_launcher/url_launcher.dart';

Future<void> ngmyLaunchPaymentCheckout(String url) async {
  await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
}

void ngmyClearPaymentQueryFromUrl() {}
