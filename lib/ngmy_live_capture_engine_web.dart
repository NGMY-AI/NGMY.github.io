import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/foundation.dart';

import 'ngmy_live_capture_media.dart';

class NgmyLiveCaptureResult {
  const NgmyLiveCaptureResult({required this.dataUrl, required this.mimeType});
  final String dataUrl;
  final String mimeType;
}

/// Web MediaRecorder engine — reliable capture on Chrome, Firefox, Safari, iOS.
class NgmyLiveCaptureEngine {
  String? lastError;
  html.MediaStream? _stream;
  html.MediaRecorder? _recorder;
  final List<html.Blob> _chunks = [];
  String _mime = 'audio/webm';
  StreamSubscription<html.Event>? _dataSub;
  StreamSubscription<html.Event>? _errorSub;
  NgmyLiveCaptureResult? _last;
  bool _video = false;

  Object? get previewStream => _stream;

  static bool get _isAppleWebKit {
    final ua = html.window.navigator.userAgent.toLowerCase();
    return ua.contains('iphone') ||
        ua.contains('ipad') ||
        ua.contains('ipod') ||
        (ua.contains('safari') && !ua.contains('chrome') && !ua.contains('chromium') && !ua.contains('android'));
  }

  Future<bool> start({
    required bool video,
    String facingMode = 'user',
    String aspect = 'youtube',
  }) async {
    lastError = null;
    await dispose();
    _video = video;
    try {
      _stream = await _openStream(video: video, facingMode: facingMode, aspect: aspect);
      _ensureTracksLive(_stream!);
      _mime = _pickMime(video: video);
      _chunks.clear();

      final recorder = _createRecorder(_stream!, _mime);
      if (recorder == null) {
        lastError = 'This browser cannot record ${_video ? 'video' : 'audio'}. Try Chrome or Safari 14.5+.';
        await dispose();
        return false;
      }
      _recorder = recorder;
      try {
        final mt = recorder.mimeType;
        if (mt != null && mt.trim().isNotEmpty) {
          _mime = ngmyCleanMediaMime(mt);
        }
      } catch (_) {
        _mime = ngmyCleanMediaMime(_mime);
      }

      // Prefer EventTarget listeners — dart:html MediaRecorder stream getters
      // are not available on every Flutter/Dart web SDK version.
      _dataSub = html.EventStreamProvider<html.Event>('dataavailable').forTarget(recorder).listen((html.Event e) {
        try {
          final data = (e as html.BlobEvent).data;
          if (data != null && data.size > 0) {
            _chunks.add(data);
            debugPrint('[live_capture] chunk +${data.size}b (total ${_chunks.length})');
          }
        } catch (err) {
          try {
            final dynamic raw = e;
            final dynamic data = raw.data;
            if (data != null && data.size > 0) {
              _chunks.add(data as html.Blob);
            }
          } catch (err2) {
            debugPrint('[live_capture] dataavailable parse: $err / $err2');
          }
        }
      });
      _errorSub = html.EventStreamProvider<html.Event>('error').forTarget(recorder).listen((html.Event e) {
        lastError = 'Recorder error while capturing.';
        debugPrint('[live_capture] recorder error: $e');
      });

      // No timeslice — one final blob on stop is most reliable on Safari/iOS.
      recorder.start();
      await Future<void>.delayed(const Duration(milliseconds: 50));
      if (recorder.state != 'recording') {
        lastError = 'Recorder did not enter recording state (state=${recorder.state}).';
        await dispose();
        return false;
      }
      debugPrint('[live_capture] recording started mime=$_mime video=$_video');
      return true;
    } catch (e) {
      lastError = _describeStartError(e);
      debugPrint('[live_capture] start: $e');
      await dispose();
      return false;
    }
  }

  Future<html.MediaStream> _openStream({
    required bool video,
    required String facingMode,
    required String aspect,
  }) async {
    final devices = html.window.navigator.mediaDevices;
    if (devices == null) {
      throw StateError('Secure media devices API unavailable');
    }

    if (!video) {
      try {
        return await devices.getUserMedia({'audio': true, 'video': false});
      } catch (_) {
        return await devices.getUserMedia({
          'audio': {
            'echoCancellation': true,
            'noiseSuppression': true,
          },
          'video': false,
        });
      }
    }

    final facing = facingMode == 'environment' ? 'environment' : 'user';
    final sizes = _sizesForAspect(aspect);
    final attempts = <Map<String, dynamic>>[
      {
        'audio': true,
        'video': {
          'facingMode': {'ideal': facing},
          'width': {'ideal': sizes.$1},
          'height': {'ideal': sizes.$2},
        },
      },
      {
        'audio': true,
        'video': {
          'facingMode': facing,
          'width': {'ideal': sizes.$1},
          'height': {'ideal': sizes.$2},
        },
      },
      {
        'audio': true,
        'video': {'facingMode': facing},
      },
      {
        'audio': true,
        'video': true,
      },
    ];

    Object? lastErr;
    for (final c in attempts) {
      try {
        return await devices.getUserMedia(c);
      } catch (e) {
        lastErr = e;
        debugPrint('[live_capture] getUserMedia attempt failed: $e');
      }
    }
    throw lastErr ?? StateError('Could not open camera');
  }

  (int, int) _sizesForAspect(String aspect) {
    switch (aspect) {
      case 'tiktok':
        return (720, 1280);
      case 'square':
        return (1080, 1080);
      case 'youtube':
      default:
        return (1280, 720);
    }
  }

  void _ensureTracksLive(html.MediaStream stream) {
    for (final t in stream.getTracks()) {
      try {
        t.enabled = true;
      } catch (_) {}
    }
  }

  html.MediaRecorder? _createRecorder(html.MediaStream stream, String mime) {
    if (mime.isNotEmpty) {
      try {
        if (html.MediaRecorder.isTypeSupported(mime)) {
          return html.MediaRecorder(stream, {'mimeType': mime});
        }
      } catch (e) {
        debugPrint('[live_capture] MediaRecorder mime $mime failed: $e');
      }
    }
    try {
      return html.MediaRecorder(stream);
    } catch (e) {
      debugPrint('[live_capture] MediaRecorder default failed: $e');
      return null;
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
        return 'This device could not meet the recording settings. Try another size (YouTube/TikTok) or switch cameras.';
      case 'SecurityError':
        return 'Recording is blocked on this connection. Make sure you are on https://ngmy.org.';
      case 'NotSupportedError':
        return 'Recording is not supported in this browser. Try Chrome or Safari.';
      default:
        return 'Could not start recording: $e';
    }
  }

  String _pickMime({required bool video}) {
    final candidates = _isAppleWebKit
        ? (video
            ? <String>['video/mp4', 'video/mp4;codecs=avc1.42E01E,mp4a.40.2', 'video/webm', 'video/webm;codecs=vp8,opus']
            : <String>['audio/mp4', 'audio/aac', 'audio/mpeg', 'audio/webm', 'audio/ogg', 'audio/webm;codecs=opus'])
        : (video
            ? <String>['video/webm;codecs=vp8,opus', 'video/webm;codecs=vp9,opus', 'video/webm', 'video/mp4']
            : <String>['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg', 'audio/mp4']);
    for (final m in candidates) {
      try {
        if (html.MediaRecorder.isTypeSupported(m)) return m;
      } catch (_) {}
    }
    return '';
  }

  Future<NgmyLiveCaptureResult?> stop() async {
    final recorder = _recorder;
    if (recorder == null) {
      lastError = 'Recording was not started.';
      return null;
    }

    final stopDone = Completer<void>();
    late final StreamSubscription<html.Event> stopSub;
    stopSub = html.EventStreamProvider<html.Event>('stop').forTarget(recorder).listen((_) {
      if (!stopDone.isCompleted) stopDone.complete();
    });

    try {
      final state = recorder.state;
      if (state == 'recording' || state == 'paused') {
        try {
          recorder.requestData();
        } catch (_) {}
        await Future<void>.delayed(const Duration(milliseconds: 60));
        recorder.stop();
      } else if (!stopDone.isCompleted) {
        stopDone.complete();
      }
    } catch (e) {
      lastError = 'Stop failed: $e';
      debugPrint('[live_capture] stop call: $e');
      if (!stopDone.isCompleted) stopDone.complete();
    }

    try {
      await stopDone.future.timeout(const Duration(seconds: 10));
    } catch (_) {
      debugPrint('[live_capture] stop event timeout — using buffered chunks');
    }
    await Future<void>.delayed(const Duration(milliseconds: 200));
    try {
      await stopSub.cancel();
    } catch (_) {}

    final cleanMime = ngmyCleanMediaMime(
      _mime.isEmpty ? (recorder.mimeType ?? (_video ? 'video/webm' : 'audio/webm')) : _mime,
    );

    await _cancelSubs();
    await _releaseStream();
    _recorder = null;

    if (_chunks.isEmpty) {
      lastError =
          'No audio/video data was captured. Make sure the mic/camera permission is allowed, keep this tab open while recording, and try again.';
      debugPrint('[live_capture] empty chunks after stop');
      return null;
    }

    final blob = html.Blob(List<html.Blob>.from(_chunks), cleanMime);
    if (blob.size <= 0) {
      lastError = 'No audio/video data was captured.';
      return null;
    }
    debugPrint('[live_capture] blob ready size=${blob.size} mime=$cleanMime chunks=${_chunks.length}');

    String dataUrl;
    try {
      dataUrl = await _blobToDataUrl(blob).timeout(const Duration(seconds: 60));
    } catch (e) {
      debugPrint('[live_capture] dataUrl convert failed, using object URL: $e');
      dataUrl = html.Url.createObjectUrlFromBlob(blob);
    }
    if (dataUrl.isEmpty) {
      lastError = 'Captured, but could not read the recording data.';
      return null;
    }

    _mime = cleanMime;
    _last = NgmyLiveCaptureResult(dataUrl: dataUrl, mimeType: cleanMime);
    _chunks.clear();
    return _last;
  }

  Future<String> _blobToDataUrl(html.Blob blob) async {
    final reader = html.FileReader();
    final done = Completer<String>();
    late StreamSubscription loadSub;
    late StreamSubscription errSub;
    loadSub = reader.onLoadEnd.listen((_) {
      loadSub.cancel();
      errSub.cancel();
      done.complete(reader.result?.toString() ?? '');
    });
    errSub = reader.onError.listen((e) {
      loadSub.cancel();
      errSub.cancel();
      done.completeError(e);
    });
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

  Future<void> _cancelSubs() async {
    try {
      await _dataSub?.cancel();
    } catch (_) {}
    try {
      await _errorSub?.cancel();
    } catch (_) {}
    _dataSub = null;
    _errorSub = null;
  }

  Future<void> _releaseStream() async {
    try {
      _stream?.getTracks().forEach((t) {
        try {
          t.stop();
        } catch (_) {}
      });
    } catch (_) {}
    _stream = null;
  }

  Future<void> dispose() async {
    try {
      if (_recorder != null && _recorder!.state != 'inactive') {
        _recorder!.stop();
      }
    } catch (_) {}
    await _cancelSubs();
    _recorder = null;
    _chunks.clear();
    await _releaseStream();
  }
}
