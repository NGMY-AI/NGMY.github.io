import 'dart:convert';
import 'dart:html' as html;

import 'package:flutter/scheduler.dart';

void ngmyWebCleanupHiddenFileInputs() {
  try {
    final inputs = html.document.querySelectorAll('input[type=file]');
    for (final node in inputs) {
      if (node is html.InputElement && node.style.display == 'none') {
        node.remove();
      }
    }
  } catch (_) {}
}

Future<String> downloadNgmyAdvisorSyncJson(String jsonText, String filename) async {
  final safeName = filename.replaceAll(RegExp(r'[^\w\-.]+'), '_');
  final name = safeName.endsWith('.json') ? safeName : '$safeName.json';
  final blob = html.Blob([utf8.encode(jsonText)], 'application/json');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final anchor = html.AnchorElement(href: url)
    ..download = name
    ..style.display = 'none';
  html.document.body?.append(anchor);
  anchor.click();
  await Future<void>.delayed(const Duration(milliseconds: 120));
  anchor.remove();
  html.Url.revokeObjectUrl(url);
  ngmyWebCleanupHiddenFileInputs();
  SchedulerBinding.instance.scheduleFrame();
  return 'Downloaded $name';
}

Future<String> downloadNgmyAdvisorSyncBytes(List<int> bytes, String filename) async {
  return downloadNgmyAdvisorSyncJson(utf8.decode(bytes), filename);
}
