import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

class NgmyLiveCaptureMedia {
  static Widget liveCameraPreview({required Object? stream, double height = 180}) {
    if (stream is! html.MediaStream) {
      return Container(
        height: height,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: Colors.black38, borderRadius: BorderRadius.circular(18)),
        child: const Text('Waiting for camera…', style: TextStyle(color: Colors.white54)),
      );
    }
    final viewType = 'ngmy-live-cam-${identityHashCode(stream)}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(viewType, (int _) {
      final v = html.VideoElement()
        ..autoplay = true
        ..muted = true
        ..controls = false
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.borderRadius = '18px'
        ..style.backgroundColor = '#000'
        ..style.transform = 'scaleX(-1)';
      v.srcObject = stream;
      unawaited(v.play().catchError((_) {}));
      return v;
    });
    return ClipRRect(
      borderRadius: BorderRadius.circular(18),
      child: SizedBox(height: height, width: double.infinity, child: HtmlElementView(viewType: viewType)),
    );
  }

  static Widget playbackVideo({required String src, double height = 200}) {
    final blobUrl = toPlayableUrl(src, 'video/webm');
    final viewType = 'ngmy-live-play-${blobUrl.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(viewType, (int _) {
      final v = html.VideoElement()
        ..src = blobUrl
        ..controls = true
        ..preload = 'auto'
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'contain'
        ..style.backgroundColor = '#000'
        ..style.borderRadius = '16px';
      return v;
    });
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: SizedBox(height: height, width: double.infinity, child: HtmlElementView(viewType: viewType)),
    );
  }

  /// Native audio element in a platform view — most reliable playback on web.
  static Widget playbackAudio({required String src, double height = 54}) {
    final blobUrl = toPlayableUrl(src, 'audio/webm');
    final viewType = 'ngmy-live-audio-${blobUrl.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(viewType, (int _) {
      final a = html.AudioElement()
        ..src = blobUrl
        ..controls = true
        ..preload = 'auto'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.outline = 'none';
      return a;
    });
    return ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: ColoredBox(
        color: const Color(0xFF0F172A),
        child: SizedBox(height: height, width: double.infinity, child: HtmlElementView(viewType: viewType)),
      ),
    );
  }

  static String toPlayableUrl(String src, String mimeType) {
    if (src.startsWith('blob:')) return src;
    if (src.startsWith('http://') || src.startsWith('https://')) return src;
    try {
      final blob = dataUrlToBlob(src, mimeType);
      return html.Url.createObjectUrlFromBlob(blob);
    } catch (e) {
      debugPrint('[live_capture] toPlayableUrl: $e');
      return src;
    }
  }

  static Future<NgmyCapturePlayer?> createPlayer(String src, {required bool video, String? mimeType}) async {
    try {
      final mime = mimeType ?? (video ? 'video/webm' : 'audio/webm');
      final playUrl = toPlayableUrl(src, mime);
      if (video) {
        final el = html.VideoElement()
          ..src = playUrl
          ..preload = 'auto'
          ..controls = false
          ..setAttribute('playsinline', 'true')
          ..setAttribute('webkit-playsinline', 'true');
        el.style
          ..position = 'fixed'
          ..left = '-10000px'
          ..width = '1px'
          ..height = '1px'
          ..opacity = '0'
          ..pointerEvents = 'none';
        html.document.body?.append(el);
        try {
          await el.onLoadedMetadata.first.timeout(const Duration(seconds: 8));
        } catch (_) {}
        return NgmyCapturePlayer._(el, objectUrl: playUrl.startsWith('blob:') ? playUrl : null);
      }

      final el = html.AudioElement()
        ..src = playUrl
        ..preload = 'auto'
        ..controls = false;
      // Hidden but not display:none — some browsers refuse to play display:none audio.
      el.style
        ..position = 'fixed'
        ..left = '-10000px'
        ..width = '1px'
        ..height = '1px'
        ..opacity = '0'
        ..pointerEvents = 'none';
      html.document.body?.append(el);
      try {
        await el.onCanPlay.first.timeout(const Duration(seconds: 8));
      } catch (_) {
        try {
          await el.onLoadedMetadata.first.timeout(const Duration(seconds: 4));
        } catch (_) {}
      }
      return NgmyCapturePlayer._(el, objectUrl: playUrl.startsWith('blob:') ? playUrl : null);
    } catch (e) {
      debugPrint('[live_capture] player: $e');
      return null;
    }
  }

  /// Sync blob + anchor click in one gesture. No awaits before click (avoids canvas blur).
  static void downloadSync(String dataUrl, String mimeType, String title) {
    try {
      final blob = dataUrl.startsWith('blob:')
          ? null
          : dataUrlToBlob(dataUrl, mimeType.isEmpty ? 'application/octet-stream' : mimeType);
      final objectUrl = dataUrl.startsWith('blob:')
          ? dataUrl
          : html.Url.createObjectUrlFromBlob(blob!);
      final name = '${title.replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_')}.${_extFor(mimeType)}';
      final a = html.AnchorElement(href: objectUrl)
        ..download = name
        ..style.display = 'none'
        ..setAttribute('target', '_self');
      html.document.body?.append(a);
      a.click();
      // Cleanup after the browser has started the download — never block the gesture.
      Timer(const Duration(seconds: 2), () {
        try {
          a.remove();
        } catch (_) {}
        if (!dataUrl.startsWith('blob:')) {
          try {
            html.Url.revokeObjectUrl(objectUrl);
          } catch (_) {}
        }
      });
    } catch (e) {
      debugPrint('[live_capture] downloadSync: $e');
    }
  }

  static Future<void> downloadQuiet(String dataUrl, String mimeType, String title) async {
    downloadSync(dataUrl, mimeType, title);
  }

  static html.Blob dataUrlToBlob(String dataUrl, String mimeType) {
    final comma = dataUrl.indexOf(',');
    final header = comma >= 0 ? dataUrl.substring(0, comma) : '';
    final b64 = comma >= 0 ? dataUrl.substring(comma + 1) : dataUrl;
    final mimeMatch = RegExp(r'data:([^;]+)').firstMatch(header);
    final mime = mimeMatch?.group(1) ?? mimeType;
    final bytes = html.window.atob(b64);
    final buffer = List<int>.generate(bytes.length, (i) => bytes.codeUnitAt(i) & 0xff);
    return html.Blob([buffer], mime);
  }

  static String _extFor(String mime) {
    if (mime.contains('mp4')) return 'mp4';
    if (mime.contains('ogg')) return 'ogg';
    if (mime.contains('wav')) return 'wav';
    if (mime.contains('video')) return 'webm';
    return 'webm';
  }
}

class NgmyCapturePlayer {
  NgmyCapturePlayer._(this._media, {this.objectUrl});

  final html.MediaElement _media;
  final String? objectUrl;
  final _listeners = <VoidCallback>{};
  StreamSubscription<html.Event>? _timeSub;
  StreamSubscription<html.Event>? _endSub;
  StreamSubscription<html.Event>? _playSub;
  StreamSubscription<html.Event>? _pauseSub;
  String? lastError;

  bool get playing => !_media.paused;
  double get position => (_media.currentTime).toDouble();
  double get duration {
    final d = _media.duration;
    if (d.isNaN || d.isInfinite) return 0;
    return d.toDouble();
  }

  double playbackRate = 1;

  void listen(VoidCallback onTick) {
    _listeners.add(onTick);
    _timeSub ??= _media.onTimeUpdate.listen((_) => _emit());
    _endSub ??= _media.onEnded.listen((_) => _emit());
    _playSub ??= _media.onPlay.listen((_) => _emit());
    _pauseSub ??= _media.onPause.listen((_) => _emit());
  }

  void unlisten(VoidCallback onTick) {
    _listeners.remove(onTick);
  }

  void _emit() {
    for (final l in List<VoidCallback>.from(_listeners)) {
      l();
    }
  }

  Future<void> play() async {
    lastError = null;
    try {
      _media.volume = 1;
      _media.muted = false;
      await _media.play();
      _emit();
    } catch (e) {
      lastError = 'Could not play: $e';
      debugPrint('[live_capture] play: $e');
      _emit();
      rethrow;
    }
  }

  Future<void> pause() async {
    _media.pause();
    _emit();
  }

  Future<void> seek(double seconds) async {
    try {
      final max = duration > 0 ? duration : mathMax(seconds, 0);
      _media.currentTime = seconds.clamp(0, max);
      _emit();
    } catch (e) {
      debugPrint('[live_capture] seek: $e');
    }
  }

  Future<void> setRate(double rate) async {
    playbackRate = rate;
    try {
      _media.playbackRate = rate;
    } catch (_) {}
    _emit();
  }

  double mathMax(double a, double b) => a > b ? a : b;

  void dispose() {
    _timeSub?.cancel();
    _endSub?.cancel();
    _playSub?.cancel();
    _pauseSub?.cancel();
    _listeners.clear();
    try {
      _media.pause();
      _media.removeAttribute('src');
      _media.load();
      _media.remove();
    } catch (_) {}
    final url = objectUrl;
    if (url != null) {
      try {
        html.Url.revokeObjectUrl(url);
      } catch (_) {}
    }
  }
}
