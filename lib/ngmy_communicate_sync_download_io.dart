import 'dart:convert';
import 'dart:io';

import 'package:flutter/foundation.dart';

Future<String> downloadNgmyAdvisorSyncJson(
  String jsonText,
  String filename, {
  bool allowReplace = false,
}) async {
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
  // Same stable filename always overwrites the previous download in Downloads.
  await file.writeAsString(jsonText, flush: true);
  return allowReplace
      ? 'Replaced previous backup at ${file.path}'
      : 'Saved to ${file.path}';
}

Future<String> downloadNgmyAdvisorSyncBytes(
  List<int> bytes,
  String filename, {
  bool allowReplace = false,
}) async {
  return downloadNgmyAdvisorSyncJson(
    utf8.decode(bytes),
    filename,
    allowReplace: allowReplace,
  );
}
