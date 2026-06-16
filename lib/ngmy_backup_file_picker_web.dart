import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/scheduler.dart';

import 'ngmy_communicate_sync_download_web.dart' show ngmyWebCleanupHiddenFileInputs;

/// Web / PWA fallback when file_picker throws LateInitializationError on phone browsers.
Future<String?> ngmyPickBackupJsonViaBrowser() async {
  final input = html.FileUploadInputElement()
    ..accept = '.json,application/json,text/json,.ngmy'
    ..style.display = 'none';
  html.document.body?.append(input);

  final completer = Completer<String?>();
  var settled = false;

  void finish(String? value) {
    if (settled) return;
    settled = true;
    input.remove();
    ngmyWebCleanupHiddenFileInputs();
    SchedulerBinding.instance.scheduleFrame();
    if (!completer.isCompleted) completer.complete(value);
  }

  void onChange(html.Event _) {
    final files = input.files;
    if (files == null || files.isEmpty) {
      finish(null);
      return;
    }
    final file = files.first;
    final reader = html.FileReader();
    reader.onError.listen((_) => finish(null));
    reader.onLoadEnd.listen((_) {
      finish(reader.result?.toString());
    });
    reader.readAsText(file);
  }

  void onCancel(html.Event _) => finish(null);

  input.addEventListener('change', onChange);
  input.addEventListener('cancel', onCancel);
  input.click();

  unawaited(Future<void>.delayed(const Duration(seconds: 90), () => finish(null)));

  return completer.future;
}
