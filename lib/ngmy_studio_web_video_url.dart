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
      // Chrome rejects the video/quicktime label even for an H.264 clip it can
      // decode. Retagging matches Quick Dial's proven playback path without
      // changing the bytes; genuinely unsupported codecs still report an error.
      final type = file.type.toLowerCase().split(';').first.trim();
      final playable = type == 'video/quicktime'
          ? html.Blob([file], 'video/mp4')
          : file;
      completer.complete(html.Url.createObjectUrl(playable));
    }
  });

  input.click();
  return completer.future.timeout(
    const Duration(hours: 24),
    onTimeout: () {
      cleanup();
      return null;
    },
  );
}
