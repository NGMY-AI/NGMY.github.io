import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';

Future<String> downloadNgmyAdvisorSyncJson(String jsonText, String filename) async {
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
  return 'Saved to ${file.path}';
}

Future<String> downloadNgmyAdvisorSyncBytes(List<int> bytes, String filename) async {
  return downloadNgmyAdvisorSyncJson(utf8.decode(bytes), filename);
}
