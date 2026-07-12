import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/foundation.dart';
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
    final viewType = 'ngmy-live-play-${src.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(viewType, (int _) {
      final v = html.VideoElement()
        ..src = src
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

  static Future<NgmyCapturePlayer?> createPlayer(String src, {required bool video}) async {
    try {
      if (video) {
        final el = html.VideoElement()
          ..src = src
          ..preload = 'auto'
          ..controls = false
          ..setAttribute('playsinline', 'true');
        el.style.display = 'none';
        html.document.body?.append(el);
        try {
          await el.onLoadedMetadata.first.timeout(const Duration(seconds: 6));
        } catch (_) {}
        return NgmyCapturePlayer._(el);
      }
      final el = html.AudioElement()
        ..src = src
        ..preload = 'auto';
      html.document.body?.append(el);
      try {
        await el.onLoadedMetadata.first.timeout(const Duration(seconds: 6));
      } catch (_) {}
      return NgmyCapturePlayer._(el);
    } catch (e) {
      debugPrint('[live_capture] player: $e');
      return null;
    }
  }

  /// Quiet download that avoids stealing focus / blurring the Flutter canvas.
  static Future<void> downloadQuiet(String dataUrl, String mimeType, String title) async {
    try {
      late final String objectUrl;
      late final bool revoke;
      if (dataUrl.startsWith('blob:')) {
        objectUrl = dataUrl;
        revoke = false;
      } else {
        final blob = _dataUrlToBlob(dataUrl, mimeType);
        objectUrl = html.Url.createObjectUrlFromBlob(blob);
        revoke = true;
      }
      final name = '${title.replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_')}.${_extFor(mimeType)}';
      final a = html.AnchorElement(href: objectUrl)
        ..download = name
        ..style.display = 'none'
        ..style.position = 'fixed'
        ..style.left = '-9999px';
      html.document.body?.append(a);
      await Future<void>.delayed(const Duration(milliseconds: 40));
      a.click();
      await Future<void>.delayed(const Duration(milliseconds: 280));
      a.remove();
      if (revoke) html.Url.revokeObjectUrl(objectUrl);
      try {
        html.document.activeElement?.blur();
      } catch (_) {}
      try {
        (html.document.querySelector('flt-glass-pane') as html.HtmlElement?)?.focus();
      } catch (_) {}
      try {
        (html.document.body as html.HtmlElement?)?.focus();
      } catch (_) {}
    } catch (e) {
      debugPrint('[live_capture] downloadQuiet: $e');
    }
  }

  static html.Blob _dataUrlToBlob(String dataUrl, String mimeType) {
    final comma = dataUrl.indexOf(',');
    final b64 = comma >= 0 ? dataUrl.substring(comma + 1) : dataUrl;
    final bytes = html.window.atob(b64);
    final buffer = List<int>.generate(bytes.length, (i) => bytes.codeUnitAt(i) & 0xff);
    return html.Blob([buffer], mimeType);
  }

  static String _extFor(String mime) {
    if (mime.contains('mp4')) return 'mp4';
    if (mime.contains('ogg')) return 'ogg';
    if (mime.contains('video')) return 'webm';
    return 'webm';
  }
}

class NgmyCapturePlayer {
  NgmyCapturePlayer._(this._media);

  final html.MediaElement _media;
  final _listeners = <VoidCallback>{};
  StreamSubscription<html.Event>? _timeSub;
  StreamSubscription<html.Event>? _endSub;

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
    try {
      await _media.play();
      _emit();
    } catch (e) {
      debugPrint('[live_capture] play: $e');
    }
  }

  Future<void> pause() async {
    _media.pause();
    _emit();
  }

  Future<void> seek(double seconds) async {
    try {
      _media.currentTime = seconds.clamp(0, duration > 0 ? duration : seconds);
      _emit();
    } catch (_) {}
  }

  Future<void> setRate(double rate) async {
    playbackRate = rate;
    try {
      _media.playbackRate = rate;
    } catch (_) {}
    _emit();
  }

  void dispose() {
    _timeSub?.cancel();
    _endSub?.cancel();
    _listeners.clear();
    try {
      _media.pause();
      _media.removeAttribute('src');
      _media.load();
      _media.remove();
    } catch (_) {}
  }
}
