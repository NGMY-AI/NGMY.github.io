import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/foundation.dart';
import 'package:path_provider/path_provider.dart';
import 'package:share_plus/share_plus.dart';

Future<String> downloadNgmySlidesPdf(Uint8List bytes, String filename) async {
  final safe = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safe.endsWith('.pdf') ? safe : '$safe.pdf';

  if (!kIsWeb && (Platform.isAndroid || Platform.isIOS)) {
    final dir = await getTemporaryDirectory();
    final file = File('${dir.path}${Platform.pathSeparator}$name');
    await file.writeAsBytes(bytes, flush: true);
    await Share.shareXFiles([XFile(file.path, mimeType: 'application/pdf', name: name)], subject: name);
    return 'PDF ready — save or share from the sheet.';
  }

  Directory dir;
  if (!kIsWeb && Platform.isWindows) {
    final root = Platform.environment['USERPROFILE'];
    dir = Directory(root != null && root.isNotEmpty ? '$root\\Downloads' : '.');
  } else if (!kIsWeb) {
    final root = Platform.environment['HOME'] ?? Platform.environment['USERPROFILE'] ?? '.';
    dir = Directory('$root${Platform.pathSeparator}Downloads');
  } else {
    dir = Directory.current;
  }
  await dir.create(recursive: true);
  final file = File('${dir.path}${Platform.pathSeparator}$name');
  await file.writeAsBytes(bytes, flush: true);
  return 'Saved to ${file.path}';
}
