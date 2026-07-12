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

      html.MediaRecorder? recorder;
      // Prefer explicit mime, then fall back to browser default.
      if (_mime.isNotEmpty) {
        try {
          recorder = html.MediaRecorder(_stream!, {'mimeType': _mime});
        } catch (e) {
          debugPrint('[live_capture] MediaRecorder mime $_mime failed: $e');
        }
      }
      recorder ??= html.MediaRecorder(_stream!);
      try {
        final mt = recorder.mimeType;
        if (mt != null && mt.trim().isNotEmpty) {
          _mime = ngmyCleanMediaMime(mt);
        }
      } catch (_) {
        _mime = ngmyCleanMediaMime(_mime);
      }

      _recorder = recorder;
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
      lastError = _describeStartError(e);
      debugPrint('[live_capture] start: $e');
      await dispose();
      return false;
    }
  }

  String _describeStartError(Object e) {
    final name = e is html.DomException ? e.name : '';
    switch (name) {
      case 'NotAllowedError':
        return 'Microphone/camera access was blocked. Allow it for ngmy.org in your browser or phone Settings, then try again.';
      case 'NotFoundError':
        return 'No microphone or camera was found on this device.';
      case 'NotReadableError':
        return 'Your camera or microphone is already being used by another app. Close it and try again.';
      case 'OverconstrainedError':
        return 'This device could not meet the recording settings requested. Try Voice instead of Video.';
      case 'SecurityError':
        return 'Recording is blocked on this connection. Make sure you are on https://ngmy.org.';
      default:
        return 'Could not start recording: $e';
    }
  }

  String _pickMime({required bool video}) {
    // Prefer broadly playable container types first (no codec params).
    final candidates = video
        ? <String>['video/webm', 'video/mp4', 'video/webm;codecs=vp8,opus', 'video/webm;codecs=vp9,opus']
        : <String>['audio/webm', 'audio/mp4', 'audio/ogg', 'audio/webm;codecs=opus'];
    for (final m in candidates) {
      try {
        if (html.MediaRecorder.isTypeSupported(m)) return m;
      } catch (_) {}
    }
    return '';
  }

  Future<NgmyLiveCaptureResult?> stop() async {
    final recorder = _recorder;
    if (recorder == null) return null;
    _stopCompleter = Completer<html.Blob?>();
    final cleanMime = ngmyCleanMediaMime(_mime.isEmpty ? (recorder.mimeType ?? 'application/octet-stream') : _mime);

    void onStop(html.Event _) {
      try {
        final blob = _chunks.isEmpty ? null : html.Blob(_chunks, cleanMime);
        if (!(_stopCompleter?.isCompleted ?? true)) _stopCompleter!.complete(blob);
      } catch (e) {
        if (!(_stopCompleter?.isCompleted ?? true)) _stopCompleter!.completeError(e);
      }
    }

    recorder.addEventListener('stop', onStop);
    try {
      if (recorder.state != 'inactive') {
        try {
          recorder.requestData();
        } catch (_) {}
        recorder.stop();
      }
    } catch (_) {}
    html.Blob? blob;
    try {
      blob = await _stopCompleter!.future.timeout(const Duration(seconds: 8));
    } catch (e) {
      lastError = 'Stop failed: $e';
      blob = _chunks.isEmpty ? null : html.Blob(_chunks, cleanMime);
    }
    recorder.removeEventListener('stop', onStop);
    await _releaseStream();
    _recorder = null;
    if (blob == null || blob.size <= 0) {
      lastError = 'No audio/video data was captured.';
      return null;
    }
    final dataUrl = await _blobToDataUrl(blob);
    _mime = cleanMime;
    _last = NgmyLiveCaptureResult(dataUrl: dataUrl, mimeType: cleanMime);
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
