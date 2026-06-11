import 'dart:async';
import 'dart:html' as html;

/// Web / PWA fallback when file_picker throws LateInitializationError on phone browsers.
Future<String?> ngmyPickBackupJsonViaBrowser() async {
  final input = html.FileUploadInputElement()
    ..accept = '.json,application/json,text/json'
    ..style.display = 'none';
  html.document.body?.append(input);

  final completer = Completer<String?>();
  late void Function(html.Event) onChange;
  onChange = (_) {
    input.removeEventListener('change', onChange);
    input.remove();
    final files = input.files;
    if (files == null || files.isEmpty) {
      if (!completer.isCompleted) completer.complete(null);
      return;
    }
    final file = files.first;
    final reader = html.FileReader();
    reader.onError.listen((_) {
      if (!completer.isCompleted) completer.complete(null);
    });
    reader.onLoadEnd.listen((_) {
      final text = reader.result?.toString();
      if (!completer.isCompleted) completer.complete(text);
    });
    reader.readAsText(file);
  };

  input.addEventListener('change', onChange);
  input.click();
  return completer.future;
}
