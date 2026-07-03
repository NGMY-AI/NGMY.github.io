import 'package:share_plus/share_plus.dart';

Future<void> ngmySlidesOpenPrintHtml(String htmlContent, {required String title}) async {
  await Share.share(htmlContent, subject: '$title — print export');
}
