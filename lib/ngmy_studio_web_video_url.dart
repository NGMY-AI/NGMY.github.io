import 'dart:async';
import 'dart:html' as html;

/// Picks a video on web and returns an object URL without loading the file into Dart memory.
Future<String?> pickWebVideoObjectUrl() async {
  final input = html.FileUploadInputElement()
    ..accept = 'video/mp4,video/quicktime,video/webm,video/*'
    ..style.display = 'none';
  html.document.body?.append(input);

  final completer = Completer<String?>();
  void cleanup() => input.remove();

  input.onChange.listen((_) {
    final file = input.files?.first;
    cleanup();
    if (file == null) {
      if (!completer.isCompleted) completer.complete(null);
      return;
    }
    if (!completer.isCompleted) {
      completer.complete(html.Url.createObjectUrl(file));
    }
  });

  input.click();
  return completer.future.timeout(
    const Duration(minutes: 5),
    onTimeout: () {
      cleanup();
      return null;
    },
  );
}
