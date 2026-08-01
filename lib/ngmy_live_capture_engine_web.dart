import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/foundation.dart';

import 'ngmy_live_capture_media.dart';

class NgmyLiveCaptureResult {
  const NgmyLiveCaptureResult({
    required this.dataUrl,
    required this.mimeType,
    this.captureBlob,
  });
  final String dataUrl;
  final String mimeType;
  /// Raw [html.Blob] on web — avoids iOS Safari failing to re-fetch blob: URLs.
  final Object? captureBlob;
}

/// Web MediaRecorder engine — reliable capture on Chrome, Firefox, Safari, iOS.
class NgmyLiveCaptureEngine {
  String? lastError;
  html.MediaStream? _stream;
  html.MediaStream? _voiceAudioStream;
  html.MediaRecorder? _recorder;
  final List<html.Blob> _chunks = [];
  String _mime = 'audio/webm';
  StreamSubscription<html.Event>? _dataSub;
  StreamSubscription<html.Event>? _errorSub;
  NgmyLiveCaptureResult? _last;
  bool _video = false;
  bool _appleVoiceMux = false;
  Timer? _muxCanvasTimer;
  Timer? _flushTimer;
  bool _previewOnly = false;
  html.CanvasElement? _muxCanvas;

  Object? get previewStream => _stream;

  bool get previewActive => _previewOnly && _stream != null;

  /// Live camera preview before recording (video mode only).
  Future<bool> openPreview({
    required String facingMode,
    required String aspect,
  }) async {
    if (_recorder != null && _recorder!.state == 'recording') return false;
    lastError = null;
    await _teardownRecorderOnly();
    await _releaseStream();
    _previewOnly = true;
    _video = true;
    try {
      _stream = await _openStream(video: true, facingMode: facingMode, aspect: aspect);
      _ensureTracksLive(_stream!);
      final audioOk = await _waitForLiveTrack(_stream!, audio: true);
      if (!audioOk) {
        lastError = 'Allow microphone access so your videos record with sound.';
        await _releaseStream();
        _previewOnly = false;
        return false;
      }
      final videoOk = await _waitForLiveTrack(_stream!, audio: false);
      if (!videoOk) {
        lastError = 'Camera is not ready. Allow camera access for ngmy.org.';
        await _releaseStream();
        _previewOnly = false;
        return false;
      }
      return true;
    } catch (e) {
      lastError = _describeStartError(e);
      _previewOnly = false;
      await _releaseStream();
      return false;
    }
  }

  Future<void> closePreview() async {
    if (_recorder != null && _recorder!.state == 'recording') return;
    _previewOnly = false;
    await _releaseStream();
  }

  /// Mic opens only inside [start] / [openPreview] — not here (iOS requires a tap).
  Future<bool> warmVoiceMicrophone() async {
    return _voiceAudioStream != null && _audioTracksLive(_voiceAudioStream!);
  }

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
    _video = video;
    _appleVoiceMux = false;

    if (video) {
      final hasPreviewStream = _previewOnly &&
          _stream != null &&
          _hasLiveTrack(_stream!, audio: true) &&
          _hasLiveTrack(_stream!, audio: false);
      if (hasPreviewStream) {
        await _teardownRecorderOnly(keepStream: true);
        _previewOnly = false;
      } else {
        await dispose();
      }
    } else {
      await dispose();
    }

    try {
      if (!video) {
        _stream = await _openStream(video: false, facingMode: facingMode, aspect: aspect);
      } else if (_stream == null ||
          !_hasLiveTrack(_stream!, audio: true) ||
          !_hasLiveTrack(_stream!, audio: false)) {
        _stream = await _openStream(video: video, facingMode: facingMode, aspect: aspect);
      }

      _ensureTracksLive(_stream!);
      final audioOk = await _waitForLiveTrack(_stream!, audio: true);
      if (!audioOk && !video) {
        lastError = 'Microphone is not ready. Tap Start Voice and tap Allow when iPhone asks.';
        await dispose();
        return false;
      }
      if (video && !audioOk) {
        lastError = 'Allow microphone access so your video records with sound.';
        await dispose();
        return false;
      }
      if (video) {
        final videoOk = await _waitForLiveTrack(_stream!, audio: false);
        if (!videoOk) {
          lastError = 'Camera track is not active. Allow camera access for ngmy.org and try again.';
          await dispose();
          return false;
        }
      } else if (_appleVoiceMux) {
        final videoOk = await _waitForLiveTrack(_stream!, audio: false);
        if (!videoOk) {
          lastError = 'Recorder is not ready. Tap Start Voice again.';
          await dispose();
          return false;
        }
      }

      _mime = _pickMime(video: video || _appleVoiceMux);
      _chunks.clear();

      final recorder = _createRecorder(_stream!, _mime);
      if (recorder == null) {
        lastError = 'This browser cannot record ${_video ? 'video' : 'audio'}. Try Chrome or Safari 14.5+.';
        await _teardownRecorderOnly();
        return false;
      }
      _recorder = recorder;
      try {
        final mt = recorder.mimeType;
        if (mt != null && mt.trim().isNotEmpty) {
          _mime = mt.trim();
        }
      } catch (_) {}

      _dataSub = html.EventStreamProvider<html.Event>('dataavailable').forTarget(recorder).listen((html.Event e) {
        _ingestChunk(e);
      });
      _errorSub = html.EventStreamProvider<html.Event>('error').forTarget(recorder).listen((html.Event e) {
        lastError = 'Recorder error while capturing.';
        debugPrint('[live_capture] recorder error: $e');
      });

      try {
        if (_isAppleWebKit && _appleVoiceMux) {
          recorder.start();
        } else if (_isAppleWebKit && _video) {
          recorder.start(1000);
        } else if (_video) {
          recorder.start(500);
        } else {
          recorder.start(_isAppleWebKit ? 1000 : 500);
        }
      } catch (_) {
        try {
          recorder.start();
        } catch (e) {
          lastError = 'Could not start recorder: $e';
          await _teardownRecorderOnly();
          return false;
        }
      }

      _flushTimer?.cancel();
      _flushTimer = Timer.periodic(const Duration(seconds: 8), (_) {
        try {
          if (_recorder?.state == 'recording') {
            _recorder!.requestData();
          }
        } catch (_) {}
      });

      await Future<void>.delayed(const Duration(milliseconds: 150));
      if (recorder.state != 'recording') {
        lastError = 'Recorder did not enter recording state (state=${recorder.state}).';
        await _teardownRecorderOnly();
        return false;
      }
      final audioTracks = _stream!.getAudioTracks().length;
      final videoTracks = _stream!.getVideoTracks().length;
      debugPrint('[live_capture] recording started mime=$_mime video=$_video appleMux=$_appleVoiceMux audioTracks=$audioTracks videoTracks=$videoTracks');
      if ((_video || _appleVoiceMux) && audioTracks == 0) {
        lastError = 'Microphone is off — allow mic access for ngmy.org and record again.';
        await _teardownRecorderOnly();
        return false;
      }
      return true;
    } catch (e) {
      lastError = _describeStartError(e);
      debugPrint('[live_capture] start: $e');
      await _teardownRecorderOnly();
      return false;
    }
  }

  void _ingestChunk(html.Event e) {
    try {
      final data = (e as html.BlobEvent).data;
      if (data != null && data.size > 0) {
        _chunks.add(data);
        debugPrint('[live_capture] chunk +${data.size}b (total ${_chunks.length})');
        return;
      }
    } catch (_) {}
    try {
      final dynamic raw = e;
      final dynamic data = raw.data;
      if (data != null && data.size > 0) {
        _chunks.add(data as html.Blob);
        debugPrint('[live_capture] chunk(dyn) +${data.size}b (total ${_chunks.length})');
      }
    } catch (err) {
      debugPrint('[live_capture] dataavailable parse: $err');
    }
  }

  bool _audioTracksLive(html.MediaStream stream) {
    return stream.getAudioTracks().any((t) => _trackUsable(t));
  }

  bool _trackUsable(html.MediaStreamTrack t) {
    try {
      if (t.enabled != true) return false;
      final state = t.readyState;
      return state != 'ended';
    } catch (_) {
      return true;
    }
  }

  bool _hasLiveTrack(html.MediaStream stream, {required bool audio}) {
    final tracks = audio ? stream.getAudioTracks() : stream.getVideoTracks();
    return tracks.isNotEmpty && tracks.any(_trackUsable);
  }

  Future<bool> _waitForLiveTrack(html.MediaStream stream, {required bool audio}) async {
    final attempts = _isAppleWebKit ? 50 : 15;
    for (var i = 0; i < attempts; i++) {
      if (_hasLiveTrack(stream, audio: audio)) return true;
      await Future<void>.delayed(Duration(milliseconds: _isAppleWebKit ? 120 : 80));
    }
    return _hasLiveTrack(stream, audio: audio);
  }

  void _removeMuxCanvas() {
    _muxCanvasTimer?.cancel();
    _muxCanvasTimer = null;
    try {
      _muxCanvas?.remove();
    } catch (_) {}
    _muxCanvas = null;
  }

  html.MediaStream _muxAppleVoiceStream(html.MediaStream audioStream) {
    _appleVoiceMux = true;
    _removeMuxCanvas();
    final canvas = html.CanvasElement(width: 4, height: 4);
    _muxCanvas = canvas;
    canvas
      ..style.display = 'none'
      ..style.position = 'fixed'
      ..style.left = '-9999px'
      ..style.top = '0';
    html.document.body?.append(canvas);
    final ctx = canvas.context2D;
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 4, 4);
    _muxCanvasTimer = Timer.periodic(const Duration(milliseconds: 500), (_) {
      try {
        ctx.fillRect(0, 0, 4, 4);
      } catch (_) {}
    });

    html.MediaStream? canvasStream;
    try {
      canvasStream = canvas.captureStream(1);
    } catch (e) {
      debugPrint('[live_capture] canvas captureStream failed: $e');
      return audioStream;
    }

    final out = html.MediaStream();
    for (final t in audioStream.getAudioTracks()) {
      out.addTrack(t);
    }
    for (final t in canvasStream.getVideoTracks()) {
      out.addTrack(t);
    }
    return out;
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
      final audioAttempts = <Map<String, dynamic>>[
        {'audio': true, 'video': false},
        {
          'audio': {
            'echoCancellation': true,
            'noiseSuppression': true,
            'autoGainControl': true,
          },
          'video': false,
        },
        {
          'audio': {'ideal': true},
          'video': false,
        },
      ];
      Object? lastErr;
      html.MediaStream? audioStream;
      for (final c in audioAttempts) {
        try {
          audioStream = await devices.getUserMedia(c);
          break;
        } catch (e) {
          lastErr = e;
          debugPrint('[live_capture] getUserMedia audio failed: $e');
        }
      }
      if (audioStream == null) {
        throw lastErr ?? StateError('Could not open microphone');
      }
      _voiceAudioStream = audioStream;
      if (_isAppleWebKit) {
        return _muxAppleVoiceStream(audioStream);
      }
      return audioStream;
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
          'frameRate': {'ideal': 30, 'max': 30},
        },
      },
      {
        'audio': true,
        'video': {
          'facingMode': facing,
          'width': {'ideal': sizes.$1},
          'height': {'ideal': sizes.$2},
          'frameRate': {'ideal': 30, 'max': 30},
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
    final withVideo = _video || _appleVoiceMux;
    final options = <String, dynamic>{
      if (mime.isNotEmpty) 'mimeType': mime,
      'audioBitsPerSecond': 128000,
      if (withVideo) 'videoBitsPerSecond': 2500000,
    };
    if (mime.isNotEmpty) {
      try {
        if (html.MediaRecorder.isTypeSupported(mime)) {
          return html.MediaRecorder(stream, options);
        }
      } catch (e) {
        debugPrint('[live_capture] MediaRecorder mime $mime failed: $e');
      }
    }
    try {
      return html.MediaRecorder(
        stream,
        withVideo
            ? {'audioBitsPerSecond': 128000, 'videoBitsPerSecond': 2500000}
            : {'audioBitsPerSecond': 128000},
      );
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
            ? <String>[
                'video/mp4',
                'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
                'video/webm;codecs=vp8,opus',
                'video/webm',
              ]
            : <String>[
                'video/mp4',
                'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
                'audio/mp4',
                'audio/aac',
                'audio/webm;codecs=opus',
                'audio/webm',
              ])
        : (video
            ? <String>[
                'video/webm;codecs=vp9,opus',
                'video/webm;codecs=vp8,opus',
                'video/webm',
                'video/mp4;codecs=avc1.42E01E,mp4a.40.2',
                'video/mp4',
              ]
            : <String>['audio/webm;codecs=opus', 'audio/webm', 'audio/ogg;codecs=opus', 'audio/ogg', 'audio/mp4']);
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

    _flushTimer?.cancel();
    _flushTimer = null;
    _removeMuxCanvas();

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
        await Future<void>.delayed(Duration(milliseconds: _isAppleWebKit ? 250 : 120));
        try {
          recorder.requestData();
        } catch (_) {}
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
      await stopDone.future.timeout(const Duration(seconds: 20));
    } catch (_) {
      debugPrint('[live_capture] stop event timeout — using buffered chunks');
    }

    for (var i = 0; i < 20 && _chunks.isEmpty; i++) {
      try {
        recorder.requestData();
      } catch (_) {}
      await Future<void>.delayed(Duration(milliseconds: _isAppleWebKit ? 900 : 400));
    }
    await Future<void>.delayed(Duration(milliseconds: _isAppleWebKit ? 5000 : 900));

    try {
      await stopSub.cancel();
    } catch (_) {}

    final blobMime = (_mime.trim().isNotEmpty
            ? _mime
            : (recorder.mimeType ?? ((_video || _appleVoiceMux) ? 'video/mp4' : 'audio/webm')))
        .trim();
    final cleanMime = ngmyCleanMediaMime(blobMime);
    await _cancelSubs();
    _recorder = null;

    if (_video) {
      await _releaseStream();
      _voiceAudioStream = null;
    } else {
      _stopMuxVideoTracks();
      _stream = null;
    }

    if (_chunks.isEmpty) {
      lastError =
          'No audio was captured. Stay on ngmy.org while recording, then tap Stop & Save. If this keeps happening, refresh once and allow the mic again.';
      debugPrint('[live_capture] empty chunks after stop');
      return null;
    }

    final blob = html.Blob(List<html.Blob>.from(_chunks), cleanMime.isNotEmpty ? cleanMime : blobMime);
    if (blob.size <= 0) {
      lastError = 'No audio/video data was captured.';
      return null;
    }
    debugPrint('[live_capture] blob ready size=${blob.size} mime=$blobMime chunks=${_chunks.length}');

    final dataUrl = html.Url.createObjectUrlFromBlob(blob);
    if (dataUrl.isEmpty) {
      lastError = 'Captured, but could not read the recording data.';
      return null;
    }

    _mime = cleanMime;
    _last = NgmyLiveCaptureResult(dataUrl: dataUrl, mimeType: cleanMime, captureBlob: blob);
    _chunks.clear();
    return _last;
  }

  void _stopMuxVideoTracks() {
    try {
      _stream?.getVideoTracks().forEach((t) {
        try {
          t.stop();
        } catch (_) {}
      });
    } catch (_) {}
  }

  Future<void> downloadLast() async {
    final last = _last;
    if (last == null) return;
    await downloadDataUrl(last.dataUrl, last.mimeType, 'ngmy-capture');
  }

  static Future<void> downloadDataUrl(String dataUrl, String mimeType, String title) async {
    NgmyLiveCaptureMedia.downloadSync(dataUrl, mimeType, title);
  }

  Future<void> _teardownRecorderOnly({bool keepStream = false}) async {
    _flushTimer?.cancel();
    _flushTimer = null;
    if (!keepStream) {
      _removeMuxCanvas();
    }
    try {
      if (_recorder != null && _recorder!.state != 'inactive') {
        _recorder!.stop();
      }
    } catch (_) {}
    await _cancelSubs();
    _recorder = null;
    _chunks.clear();
    if (!keepStream) {
      _stopMuxVideoTracks();
      _stream = null;
    }
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
    _removeMuxCanvas();
    try {
      _stream?.getTracks().forEach((t) {
        try {
          t.stop();
        } catch (_) {}
      });
    } catch (_) {}
    _stream = null;
    try {
      _voiceAudioStream?.getTracks().forEach((t) {
        try {
          t.stop();
        } catch (_) {}
      });
    } catch (_) {}
    _voiceAudioStream = null;
  }

  Future<void> dispose() async {
    _previewOnly = false;
    await _teardownRecorderOnly();
    await _releaseStream();
  }
}
