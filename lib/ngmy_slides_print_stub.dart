import 'dart:io';

import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

Future<void> ngmySlidesOpenPrintHtml(String htmlContent, {required String title}) async {
  final safe = title.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safe.isEmpty ? 'presentation' : safe;
  final dir = await getTemporaryDirectory();
  final file = File('${dir.path}${Platform.pathSeparator}$name.html');
  await file.writeAsString(htmlContent, flush: true);
  await Share.shareXFiles(
    [XFile(file.path, mimeType: 'text/html', name: '$name.html')],
    subject: title,
  );
}
