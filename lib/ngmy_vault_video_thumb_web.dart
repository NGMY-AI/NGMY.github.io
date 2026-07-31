import 'dart:async';
import 'dart:html' as html;
import 'dart:typed_data';

import 'package:flutter/foundation.dart';

import 'ngmy_vault_pick_video_types.dart';

Future<Uint8List?> ngmyVaultCaptureVideoThumbnail({
  Object? webBlob,
  Uint8List? bytes,
  String? objectUrl,
  String mime = 'video/mp4',
}) async {
  final type = ngmyVaultPlaybackMime(mime);
  if (objectUrl != null && objectUrl.isNotEmpty) {
    return _captureFromUrl(objectUrl, type);
  }
  if (webBlob is html.Blob) {
    final url = html.Url.createObjectUrlFromBlob(webBlob);
    try {
      return await _captureFromUrl(url, type);
    } finally {
      html.Url.revokeObjectUrl(url);
    }
  }
  if (bytes != null && bytes.isNotEmpty) {
    final url = html.Url.createObjectUrlFromBlob(html.Blob([bytes], type));
    try {
      return await _captureFromUrl(url, type);
    } finally {
      html.Url.revokeObjectUrl(url);
    }
  }
  return null;
}

Future<Uint8List?> _captureFromUrl(String url, String mime) async {
  final v = html.VideoElement()
    ..muted = true
    ..preload = 'auto'
    ..setAttribute('playsinline', 'true')
    ..setAttribute('webkit-playsinline', 'true')
    ..style.display = 'none';

  html.document.body?.append(v);

  try {
    v.append(html.SourceElement()
      ..src = url
      ..type = mime);
    v.src = url;
    v.load();

    await v.onLoadedMetadata.first.timeout(const Duration(seconds: 20));

    final candidates = <double>[0.05, 0.25, 0.5, 1.0];
    final dur = v.duration;
    if (dur.isFinite && dur > 0) {
      candidates.insert(0, (dur * 0.08).clamp(0.05, 2.0));
    }

    for (final t in candidates) {
      try {
        v.currentTime = t;
        await v.onSeeked.first.timeout(const Duration(seconds: 6));
      } catch (_) {}

      try {
        await v.play();
        await Future<void>.delayed(const Duration(milliseconds: 150));
        v.pause();
      } catch (_) {}

      final frame = await _frameToJpeg(v);
      if (frame != null && frame.isNotEmpty) return frame;
    }

    return null;
  } catch (e) {
    debugPrint('[vault video thumb] capture failed: $e');
    return null;
  } finally {
    try {
      v.pause();
      v.removeAttribute('src');
      v.load();
      v.remove();
    } catch (_) {}
  }
}

Future<Uint8List?> _frameToJpeg(html.VideoElement v) async {
  final w = v.videoWidth;
  final h = v.videoHeight;
  if (w <= 0 || h <= 0) return null;

  const maxW = 480.0;
  final scale = w > maxW ? maxW / w : 1.0;
  final cw = (w * scale).round().clamp(1, 480);
  final ch = (h * scale).round().clamp(1, 480);

  final canvas = html.CanvasElement(width: cw, height: ch);
  canvas.context2D.drawImageScaled(v, 0, 0, cw, ch);

  final blob = await canvas.toBlob('image/jpeg', 0.84);

  final reader = html.FileReader();
  final done = Completer<Uint8List?>();
  reader.onLoad.listen((_) {
    final r = reader.result;
    if (r is ByteBuffer) {
      done.complete(Uint8List.view(r));
    } else if (r is Uint8List) {
      done.complete(Uint8List.fromList(r));
    } else {
      done.complete(null);
    }
  });
  reader.onError.listen((_) {
    if (!done.isCompleted) done.complete(null);
  });
  reader.readAsArrayBuffer(blob);
  return done.future.timeout(const Duration(seconds: 5), onTimeout: () => null);
}
