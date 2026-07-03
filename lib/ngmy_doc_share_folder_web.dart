import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/scheduler.dart';

typedef NgmyWebPickedFile = ({String name, html.File file});
typedef NgmyWebPickCallback = void Function(List<NgmyWebPickedFile> files);

List<NgmyWebPickedFile> _filesFromInput(html.FileUploadInputElement input, {required bool directory}) {
  final out = <NgmyWebPickedFile>[];
  final files = input.files;
  if (files == null) return out;
  for (var i = 0; i < files.length; i++) {
    final f = files[i];
    final rel = directory ? (f as dynamic).webkitRelativePath as String? : null;
    final name = (rel != null && rel.isNotEmpty) ? rel : f.name;
    if (name.trim().isEmpty) continue;
    out.add((name: name, file: f));
  }
  return out;
}

/// Opens the native file/folder chooser. Call synchronously from a user tap
/// handler so iOS Safari and mobile PWAs allow the picker to open.
void ngmyWebPickFilesFromUserGesture({
  required NgmyWebPickCallback onResult,
  bool directory = false,
}) {
  final input = html.FileUploadInputElement()
    ..multiple = true
    ..accept = '*/*';
  if (directory) {
    input.setAttribute('webkitdirectory', '');
    input.setAttribute('directory', '');
  }
  input.style.display = 'none';
  html.document.body?.append(input);

  var settled = false;
  void finish(List<NgmyWebPickedFile> files) {
    if (settled) return;
    settled = true;
    input.remove();
    SchedulerBinding.instance.scheduleFrame();
    onResult(files);
  }

  void onChange(html.Event _) => finish(_filesFromInput(input, directory: directory));
  void onCancel(html.Event _) => finish([]);

  input.addEventListener('change', onChange);
  input.addEventListener('cancel', onCancel);
  SchedulerBinding.instance.scheduleFrame();
  input.click();

  unawaited(Future<void>.delayed(const Duration(minutes: 30), () => finish([])));
}

/// Pick one or more files on web — keeps [html.File] refs (no full RAM load for big videos).
Future<List<NgmyWebPickedFile>> pickWebFiles() async {
  final completer = Completer<List<NgmyWebPickedFile>>();
  ngmyWebPickFilesFromUserGesture(
    directory: false,
    onResult: (files) {
      if (!completer.isCompleted) completer.complete(files);
    },
  );
  return completer.future;
}

/// Pick an entire folder on web (Chrome, Edge, Safari).
Future<List<NgmyWebPickedFile>> pickWebFolderFiles() async {
  final completer = Completer<List<NgmyWebPickedFile>>();
  ngmyWebPickFilesFromUserGesture(
    directory: true,
    onResult: (files) {
      if (!completer.isCompleted) completer.complete(files);
    },
  );
  return completer.future;
}
