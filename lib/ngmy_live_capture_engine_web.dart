import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/foundation.dart';

import 'ngmy_live_capture_media.dart';

class NgmyLiveCaptureResult {
  const NgmyLiveCaptureResult({required this.dataUrl, required this.mimeType});
  final String dataUrl;
  final String mimeType;
}

class NgmyLiveCaptureEngine {
  String? lastError;
  html.MediaStream? _stream;
  html.MediaRecorder? _recorder;
  final List<html.Blob> _chunks = [];
  String _mime = 'audio/webm';
  Completer<html.Blob?>? _stopCompleter;
  NgmyLiveCaptureResult? _last;

  /// Live camera/mic stream for in-app preview while recording.
  Object? get previewStream => _stream;

  Future<bool> start({required bool video}) async {
    lastError = null;
    await dispose();
    try {
      final constraints = video
          ? <String, dynamic>{
              'audio': true,
              'video': {
                'facingMode': 'user',
                'width': {'ideal': 1280},
                'height': {'ideal': 720},
              },
            }
          : <String, dynamic>{'audio': true, 'video': false};
      _stream = await html.window.navigator.mediaDevices!.getUserMedia(constraints);
      _mime = _pickMime(video: video);
      _chunks.clear();
      _recorder = html.MediaRecorder(_stream!, {'mimeType': _mime});
      _recorder!.addEventListener('dataavailable', (html.Event e) {
        final event = e as html.BlobEvent;
        final data = event.data;
        if (data != null && data.size > 0) _chunks.add(data);
      });
      _recorder!.addEventListener('error', (html.Event e) {
        lastError = 'Recorder error';
        debugPrint('[live_capture] recorder error: $e');
      });
      _recorder!.start(1000);
      return true;
    } catch (e) {
      lastError = 'Permission or device error: $e';
      debugPrint('[live_capture] start: $e');
      await dispose();
      return false;
    }
  }

  String _pickMime({required bool video}) {
    final candidates = video
        ? <String>['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm', 'video/mp4']
        : <String>['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg'];
    for (final m in candidates) {
      try {
        if (html.MediaRecorder.isTypeSupported(m)) return m;
      } catch (_) {}
    }
    return video ? 'video/webm' : 'audio/webm';
  }

  Future<NgmyLiveCaptureResult?> stop() async {
    final recorder = _recorder;
    if (recorder == null) return null;
    _stopCompleter = Completer<html.Blob?>();
    void onStop(html.Event _) {
      try {
        final blob = _chunks.isEmpty ? null : html.Blob(_chunks, _mime);
        if (!(_stopCompleter?.isCompleted ?? true)) _stopCompleter!.complete(blob);
      } catch (e) {
        if (!(_stopCompleter?.isCompleted ?? true)) _stopCompleter!.completeError(e);
      }
    }

    recorder.addEventListener('stop', onStop);
    try {
      if (recorder.state != 'inactive') recorder.stop();
    } catch (_) {}
    html.Blob? blob;
    try {
      blob = await _stopCompleter!.future.timeout(const Duration(seconds: 8));
    } catch (e) {
      lastError = 'Stop failed: $e';
      blob = _chunks.isEmpty ? null : html.Blob(_chunks, _mime);
    }
    recorder.removeEventListener('stop', onStop);
    await _releaseStream();
    _recorder = null;
    if (blob == null || blob.size <= 0) {
      lastError = 'No audio/video data was captured.';
      return null;
    }
    final dataUrl = await _blobToDataUrl(blob);
    _last = NgmyLiveCaptureResult(dataUrl: dataUrl, mimeType: _mime);
    return _last;
  }

  Future<String> _blobToDataUrl(html.Blob blob) async {
    final reader = html.FileReader();
    final done = Completer<String>();
    reader.onLoadEnd.listen((_) {
      done.complete(reader.result?.toString() ?? '');
    });
    reader.onError.listen((e) => done.completeError(e));
    reader.readAsDataUrl(blob);
    return done.future;
  }

  Future<void> downloadLast() async {
    final last = _last;
    if (last == null) return;
    await downloadDataUrl(last.dataUrl, last.mimeType, 'ngmy-capture');
  }

  static Future<void> downloadDataUrl(String dataUrl, String mimeType, String title) async {
    NgmyLiveCaptureMedia.downloadSync(dataUrl, mimeType, title);
  }

  Future<void> _releaseStream() async {
    try {
      _stream?.getTracks().forEach((t) => t.stop());
    } catch (_) {}
    _stream = null;
  }

  Future<void> dispose() async {
    try {
      if (_recorder != null && _recorder!.state != 'inactive') {
        _recorder!.stop();
      }
    } catch (_) {}
    _recorder = null;
    _chunks.clear();
    await _releaseStream();
  }
}
