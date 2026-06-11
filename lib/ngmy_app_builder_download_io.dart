import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';

Future<String> downloadNgmyAppBundleJson(String jsonText, String filename) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.json') ? safeName : '$safeName.json';

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
  await file.writeAsString(jsonText, flush: true);
  return 'Saved to ${file.path} — keep this file to restore your app anytime.';
}
