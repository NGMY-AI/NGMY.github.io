import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

String ngmyCleanMediaMime(String mime) {
  final base = mime.split(';').first.trim().toLowerCase();
  if (base.startsWith('audio/') || base.startsWith('video/') || base.startsWith('application/')) {
    return base;
  }
  return 'application/octet-stream';
}

class NgmyLiveCaptureMedia {
  static Widget liveCameraPreview({required Object? stream, double height = 200}) {
    return _StableCameraPreview(stream: stream, height: height);
  }

  static Widget playbackVideo({required String src, required String mimeType, double height = 220, Key? key}) {
    return _StableMediaPlayback(key: key, src: src, mimeType: mimeType, video: true, height: height);
  }

  static Widget playbackAudio({required String src, required String mimeType, double height = 52, Key? key}) {
    return _StableMediaPlayback(key: key, src: src, mimeType: mimeType, video: false, height: height);
  }

  static String toPlayableUrl(String src, String mimeType) {
    if (src.startsWith('blob:') || src.startsWith('http://') || src.startsWith('https://')) return src;
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
      final mime = ngmyCleanMediaMime(mimeType ?? (video ? 'video/webm' : 'audio/webm'));
      final playUrl = toPlayableUrl(src, mime);
      final html.MediaElement el = video
          ? (html.VideoElement()
            ..src = playUrl
            ..preload = 'auto'
            ..controls = false
            ..setAttribute('playsinline', 'true')
            ..setAttribute('webkit-playsinline', 'true'))
          : (html.AudioElement()
            ..src = playUrl
            ..preload = 'auto'
            ..controls = false);
      el.style
        ..position = 'fixed'
        ..left = '-10000px'
        ..top = '0'
        ..width = '4px'
        ..height = '4px'
        ..opacity = '0.01'
        ..pointerEvents = 'none';
      html.document.body?.append(el);
      el.load();
      try {
        await el.onLoadedMetadata.first.timeout(const Duration(seconds: 10));
      } catch (_) {}
      // Probe whether the browser can actually decode this blob.
      try {
        el.muted = true;
        await el.play();
        el.pause();
        el.currentTime = 0;
        el.muted = false;
      } catch (e) {
        debugPrint('[live_capture] probe play: $e');
        // Still return player — UI may rely on native <audio>/<video> controls instead.
      }
      return NgmyCapturePlayer._(el, objectUrl: playUrl.startsWith('blob:') ? playUrl : null);
    } catch (e) {
      debugPrint('[live_capture] player: $e');
      return null;
    }
  }

  static void downloadSync(String dataUrl, String mimeType, String title) {
    try {
      final clean = ngmyCleanMediaMime(mimeType);
      final objectUrl = dataUrl.startsWith('blob:')
          ? dataUrl
          : html.Url.createObjectUrlFromBlob(dataUrlToBlob(dataUrl, clean));
      final name = '${title.replaceAll(RegExp(r'[^a-zA-Z0-9_-]+'), '_')}.${_extFor(clean)}';
      final a = html.AnchorElement(href: objectUrl)
        ..download = name
        ..style.display = 'none';
      html.document.body?.append(a);
      a.click();
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
    final mimeMatch = RegExp(r'data:([^;,]+)').firstMatch(header);
    final mime = ngmyCleanMediaMime(mimeMatch?.group(1) ?? mimeType);
    final bytes = html.window.atob(b64);
    final buffer = List<int>.generate(bytes.length, (i) => bytes.codeUnitAt(i) & 0xff);
    return html.Blob([buffer], mime);
  }

  static String _extFor(String mime) {
    final m = ngmyCleanMediaMime(mime);
    if (m.contains('mp4')) return 'mp4';
    if (m.contains('ogg')) return 'ogg';
    if (m.contains('wav')) return 'wav';
    if (m.contains('mpeg') || m.contains('mp3')) return 'mp3';
    if (m.contains('video')) return 'webm';
    return 'webm';
  }
}

/// Camera preview that does NOT recreate the platform view every Flutter rebuild.
class _StableCameraPreview extends StatefulWidget {
  const _StableCameraPreview({required this.stream, required this.height});
  final Object? stream;
  final double height;

  @override
  State<_StableCameraPreview> createState() => _StableCameraPreviewState();
}

class _StableCameraPreviewState extends State<_StableCameraPreview> {
  late final String _viewType;
  html.VideoElement? _video;
  bool _registered = false;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-live-cam-${identityHashCode(widget.stream)}-${DateTime.now().microsecondsSinceEpoch}';
    _register();
  }

  void _register() {
    if (_registered) return;
    _registered = true;
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      final v = html.VideoElement()
        ..autoplay = true
        ..muted = true
        ..defaultMuted = true
        ..controls = false
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..setAttribute('autoplay', 'true')
        ..setAttribute('muted', 'true')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.backgroundColor = '#000'
        ..style.transform = 'scaleX(-1)';
      if (widget.stream is html.MediaStream) {
        v.srcObject = widget.stream as html.MediaStream;
      }
      unawaited(v.play().catchError((e) {
        debugPrint('[live_capture] preview play: $e');
      }));
      _video = v;
      return v;
    });
  }

  @override
  void didUpdateWidget(covariant _StableCameraPreview oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.stream != widget.stream && _video != null && widget.stream is html.MediaStream) {
      _video!.srcObject = widget.stream as html.MediaStream;
      unawaited(_video!.play().catchError((_) {}));
    }
  }

  @override
  Widget build(BuildContext context) {
    if (widget.stream is! html.MediaStream) {
      return Container(
        height: widget.height,
        alignment: Alignment.center,
        decoration: BoxDecoration(color: Colors.black38, borderRadius: BorderRadius.circular(18)),
        child: const Text('Waiting for camera…', style: TextStyle(color: Colors.white54)),
      );
    }
    return ClipRRect(
      borderRadius: BorderRadius.circular(18),
      child: SizedBox(
        height: widget.height,
        width: double.infinity,
        child: HtmlElementView(viewType: _viewType),
      ),
    );
  }
}

class _StableMediaPlayback extends StatefulWidget {
  const _StableMediaPlayback({
    super.key,
    required this.src,
    required this.mimeType,
    required this.video,
    required this.height,
  });

  final String src;
  final String mimeType;
  final bool video;
  final double height;

  @override
  State<_StableMediaPlayback> createState() => _StableMediaPlaybackState();
}

class _StableMediaPlaybackState extends State<_StableMediaPlayback> {
  late final String _viewType;
  late final String _blobUrl;
  bool _registered = false;

  @override
  void initState() {
    super.initState();
    final mime = ngmyCleanMediaMime(widget.mimeType);
    _blobUrl = NgmyLiveCaptureMedia.toPlayableUrl(widget.src, mime);
    _viewType = 'ngmy-play-${widget.video ? 'v' : 'a'}-${_blobUrl.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    _register(mime);
  }

  void _register(String mime) {
    if (_registered) return;
    _registered = true;
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      if (widget.video) {
        final v = html.VideoElement()
          ..src = _blobUrl
          ..controls = true
          ..preload = 'auto'
          ..setAttribute('playsinline', 'true')
          ..setAttribute('webkit-playsinline', 'true')
          ..setAttribute('controls', 'true')
          ..style.width = '100%'
          ..style.height = '100%'
          ..style.objectFit = 'contain'
          ..style.backgroundColor = '#000'
          ..style.borderRadius = '16px';
        v.load();
        return v;
      }
      final a = html.AudioElement()
        ..src = _blobUrl
        ..controls = true
        ..preload = 'auto'
        ..style.width = '100%'
        ..style.height = '40px'
        ..style.outline = 'none';
      a.load();
      return a;
    });
  }

  @override
  void dispose() {
    // Keep blob URL alive while sheet is open; revoke after a delay so seeking still works.
    final url = _blobUrl;
    if (url.startsWith('blob:')) {
      Timer(const Duration(seconds: 30), () {
        try {
          html.Url.revokeObjectUrl(url);
        } catch (_) {}
      });
    }
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(widget.video ? 16 : 12),
      child: ColoredBox(
        color: const Color(0xFF0F172A),
        child: SizedBox(
          height: widget.height,
          width: double.infinity,
          child: HtmlElementView(viewType: _viewType),
        ),
      ),
    );
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

  void unlisten(VoidCallback onTick) => _listeners.remove(onTick);

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
      lastError = 'Use the player bar above to play this capture.';
      debugPrint('[live_capture] play: $e');
      _emit();
    }
  }

  Future<void> pause() async {
    _media.pause();
    _emit();
  }

  Future<void> seek(double seconds) async {
    try {
      final max = duration > 0 ? duration : (seconds < 0 ? 0 : seconds);
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
