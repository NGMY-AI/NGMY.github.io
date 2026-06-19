import 'package:flutter/services.dart';

Future<void> ngmyPrintCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  await Clipboard.setData(ClipboardData(text: plainText));
}

Future<void> ngmyDownloadCivicMemberReport({
  required String htmlContent,
  required String plainText,
  required String fileName,
}) async {
  await Clipboard.setData(ClipboardData(text: plainText));
}
