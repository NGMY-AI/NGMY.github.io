import 'dart:async';
import 'dart:html' as html;

/// Pick an entire folder on web (Chrome, Edge, Safari).
Future<List<({String name, html.File file})>> pickWebFolderFiles() async {
  final input = html.FileUploadInputElement()
    ..multiple = true
    ..accept = '*/*';
  input.setAttribute('webkitdirectory', '');
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
