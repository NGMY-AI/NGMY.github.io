import 'dart:async';
import 'dart:html' as html;

Future<List<({String name, html.File file})>> _pickWebFiles({required bool directory}) async {
  final input = html.FileUploadInputElement()
    ..multiple = true
    ..accept = '*/*';
  if (directory) {
    input.setAttribute('webkitdirectory', '');
  }
  input.style.display = 'none';
  html.document.body?.append(input);

  final completer = Completer<List<({String name, html.File file})>>();
  input.onChange.listen((_) {
    final out = <({String name, html.File file})>[];
    final files = input.files;
    if (files != null) {
      for (var i = 0; i < files.length; i++) {
        final f = files[i];
        final rel = (f as dynamic).webkitRelativePath as String?;
        final name = (rel != null && rel.isNotEmpty) ? rel : f.name;
        out.add((name: name, file: f));
      }
    }
    input.remove();
    if (!completer.isCompleted) completer.complete(out);
  });

  input.click();
  return completer.future.timeout(
    const Duration(minutes: 30),
    onTimeout: () {
      input.remove();
      return <({String name, html.File file})>[];
    },
  );
}

/// Pick one or more files on web — keeps [html.File] refs (no full RAM load for big videos).
Future<List<({String name, html.File file})>> pickWebFiles() =>
    _pickWebFiles(directory: false);

/// Pick an entire folder on web (Chrome, Edge, Safari).
Future<List<({String name, html.File file})>> pickWebFolderFiles() =>
    _pickWebFiles(directory: true);
