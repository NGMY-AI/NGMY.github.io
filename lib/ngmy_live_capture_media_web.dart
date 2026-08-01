import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:typed_data';
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_vault_html_video.dart';

String ngmyCleanMediaMime(String mime) {
  final base = mime.split(';').first.trim().toLowerCase();
  if (base.startsWith('audio/') || base.startsWith('video/') || base.startsWith('application/')) {
    return base;
  }
  return 'application/octet-stream';
}

Uint8List? _decodeDataUrlBytes(String dataUrl) {
  try {
    final comma = dataUrl.indexOf(',');
    if (comma < 0) return base64Decode(dataUrl);
    final header = dataUrl.substring(0, comma).toLowerCase();
    final payload = dataUrl.substring(comma + 1);
    if (header.contains(';base64')) {
      var cleaned = payload.replaceAll(RegExp(r'\s'), '');
      cleaned = cleaned.replaceAll('-', '+').replaceAll('_', '/');
      final pad = cleaned.length % 4;
      if (pad > 0) cleaned = cleaned.padRight(cleaned.length + (4 - pad), '=');
      return base64Decode(cleaned);
    }
    return Uint8List.fromList(Uri.decodeComponent(payload).codeUnits);
  } catch (e) {
    debugPrint('[live_capture] decode dataUrl: $e');
    return null;
  }
}

class NgmyLiveCaptureMedia {
  static Uint8List? decodeDataUrlBytes(String dataUrl) => _decodeDataUrlBytes(dataUrl);

  static Widget liveCameraPreview({required Object? stream, double height = 200, bool mirror = true}) {
    return _StableCameraPreview(stream: stream, height: height, mirror: mirror);
  }

  static Widget playbackVideo({required String src, required String mimeType, double height = 220, Key? key}) {
    return _VaultStyleVideoPlayback(
      key: key,
      src: src,
      mimeType: mimeType,
      height: height < 180 ? 240 : height,
    );
  }

  static Widget playbackAudio({required String src, required String mimeType, double height = 52, Key? key}) {
    final mime = ngmyCleanMediaMime(mimeType);
    final asVideo = mime.startsWith('video/');
    return _StableMediaPlayback(key: key, src: src, mimeType: mimeType, video: asVideo, height: asVideo ? 160 : 140);
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
            ..controls = false
            ..preload = 'auto'
            ..setAttribute('playsinline', 'true')
            ..setAttribute('webkit-playsinline', 'true'))
          : (html.AudioElement()
            ..preload = 'auto'
            ..controls = false);
      try {
        el.children.clear();
        el.append(html.SourceElement()
          ..src = playUrl
          ..type = mime);
      } catch (_) {
        el.src = playUrl;
      }
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
        await el.onLoadedMetadata.first.timeout(const Duration(seconds: 12));
      } catch (_) {}
      try {
        el.muted = true;
        await el.play();
        el.pause();
        el.currentTime = 0;
        el.muted = false;
        el.volume = 1;
        el.playbackRate = 1.0;
        el.defaultPlaybackRate = 1.0;
      } catch (e) {
        debugPrint('[live_capture] probe play: $e');
      }
      return NgmyCapturePlayer._(el, objectUrl: playUrl.startsWith('blob:') ? playUrl : null);
    } catch (e) {
      debugPrint('[live_capture] player: $e');
      return null;
    }
  }

  static bool get _isIOSSafari {
    final ua = html.window.navigator.userAgent.toLowerCase();
    return ua.contains('iphone') || ua.contains('ipad') || ua.contains('ipod');
  }

  static void downloadSync(String dataUrl, String mimeType, String title) {
    unawaited(downloadAsync(dataUrl, mimeType, title));
  }

  static Future<void> downloadAsync(String src, String mimeType, String title) async {
    try {
      final clean = ngmyCleanMediaMime(mimeType);
      html.Blob blob;
      if (src.startsWith('blob:')) {
        final req = await html.HttpRequest.request(src, responseType: 'blob');
        final raw = req.response;
        if (raw is! html.Blob || raw.size <= 0) {
          debugPrint('[live_capture] download blob fetch failed');
          return;
        }
        blob = raw.type.isNotEmpty ? raw : html.Blob([raw], clean);
      } else {
        blob = dataUrlToBlob(src, clean);
      }
      final objectUrl = html.Url.createObjectUrlFromBlob(blob);
      if (_isIOSSafari) {
        html.window.open(objectUrl, '_blank');
        return;
      }
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
        try {
          html.Url.revokeObjectUrl(objectUrl);
        } catch (_) {}
      });
    } catch (e) {
      debugPrint('[live_capture] downloadAsync: $e');
    }
  }

  static Future<void> downloadQuiet(String dataUrl, String mimeType, String title) async {
    await downloadAsync(dataUrl, mimeType, title);
  }

  static html.Blob dataUrlToBlob(String dataUrl, String mimeType) {
    final comma = dataUrl.indexOf(',');
    final header = comma >= 0 ? dataUrl.substring(0, comma) : '';
    final mimeMatch = RegExp(r'data:([^;,]+)').firstMatch(header);
    final mime = ngmyCleanMediaMime(mimeMatch?.group(1) ?? mimeType);
    final bytes = _decodeDataUrlBytes(dataUrl);
    if (bytes == null || bytes.isEmpty) {
      throw StateError('Could not decode capture data URL');
    }
    return html.Blob([bytes], mime);
  }

  static String _extFor(String mime) {
    final m = ngmyCleanMediaMime(mime);
    if (m.contains('jpeg') || m.contains('jpg')) return 'jpg';
    if (m.contains('png')) return 'png';
    if (m.contains('audio/mp4') || m.contains('audio/aac') || m.contains('audio/m4a')) return 'm4a';
    if (m.contains('mp4')) return 'mp4';
    if (m.contains('ogg')) return 'ogg';
    if (m.contains('wav')) return 'wav';
    if (m.contains('mpeg') || m.contains('mp3')) return 'mp3';
    if (m.contains('video')) return 'webm';
    return 'webm';
  }
}

class _StableCameraPreview extends StatefulWidget {
  const _StableCameraPreview({required this.stream, required this.height, this.mirror = true});
  final Object? stream;
  final double height;
  final bool mirror;

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
        ..style.transform = widget.mirror ? 'scaleX(-1)' : 'none';
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
    if (oldWidget.mirror != widget.mirror && _video != null) {
      _video!.style.transform = widget.mirror ? 'scaleX(-1)' : 'none';
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

/// Recorder / live-capture video playback — same HTML controls as Quick Dial vault
/// (center play, scrubber, mute, replay) so taps work on Flutter web.
class _VaultStyleVideoPlayback extends StatelessWidget {
  const _VaultStyleVideoPlayback({
    super.key,
    required this.src,
    required this.mimeType,
    required this.height,
  });

  final String src;
  final String mimeType;
  final double height;

  @override
  Widget build(BuildContext context) {
    final mime = ngmyCleanMediaMime(mimeType);
    if (src.trim().isEmpty) {
      return Container(
        height: height,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: const Color(0xFF0F172A),
          borderRadius: BorderRadius.circular(16),
        ),
        child: const Text(
          'Loading video…',
          style: TextStyle(color: Colors.white54, fontSize: 12),
        ),
      );
    }
    final url = NgmyLiveCaptureMedia.toPlayableUrl(src, mime);
    if (url.isEmpty) {
      return Container(
        height: height,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: const Color(0xFF0F172A),
          borderRadius: BorderRadius.circular(16),
        ),
        child: const Text(
          'Could not load this video.',
          textAlign: TextAlign.center,
          style: TextStyle(color: Colors.white54, fontSize: 12),
        ),
      );
    }
    return ClipRRect(
      borderRadius: BorderRadius.circular(16),
      child: ColoredBox(
        color: Colors.black,
        child: SizedBox(
          height: height,
          width: double.infinity,
          child: NgmyVaultHtmlVideo(source: url, mimeType: mime),
        ),
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
  late String _viewType;
  late String _playUrl;
  late final String _mime;
  bool _registered = false;
  String? _loadError;

  bool get _isVideo => widget.video || _mime.startsWith('video/');

  @override
  void initState() {
    super.initState();
    _mime = ngmyCleanMediaMime(widget.mimeType);
    _playUrl = _resolveUrl(widget.src);
    _viewType = _newViewType();
    _register();
    if (_playUrl.isEmpty && widget.src.trim().isNotEmpty) {
      _loadError = 'Could not load this recording.';
    }
  }

  String _newViewType() => 'ngmy-play-${_isVideo ? 'v' : 'a'}-${widget.src.hashCode}-${DateTime.now().microsecondsSinceEpoch}';

  @override
  void didUpdateWidget(covariant _StableMediaPlayback oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.src != widget.src) {
      final next = _resolveUrl(widget.src);
      if (next.isNotEmpty && next != _playUrl) {
        setState(() {
          _playUrl = next;
          _loadError = null;
          _viewType = _newViewType();
          _registered = false;
        });
        _register();
      } else if (next.isEmpty && widget.src.trim().isEmpty) {
        setState(() {
          _playUrl = '';
          _loadError = null;
        });
      }
    }
  }

  String _resolveUrl(String src) {
    if (src.trim().isEmpty) return '';
    return NgmyLiveCaptureMedia.toPlayableUrl(src, _mime);
  }

  void _register() {
    if (_registered || _playUrl.isEmpty) return;
    _registered = true;
    final url = _playUrl;
    final mime = _mime;
    final isVideo = _isVideo;
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) => _buildDomPlayer(url: url, mime: mime, isVideo: isVideo));
  }

  html.Element _buildDomPlayer({required String url, required String mime, required bool isVideo}) {
    final root = html.DivElement()
      ..style.width = '100%'
      ..style.height = '100%'
      ..style.position = 'relative'
      ..style.backgroundColor = '#0F172A'
      ..style.overflow = 'hidden'
      ..style.borderRadius = '12px'
      ..style.touchAction = 'manipulation';

    final el = isVideo ? html.VideoElement() : html.AudioElement();
    el
      ..preload = 'auto'
      ..controls = false
      ..muted = false
      ..defaultMuted = false
      ..volume = 1.0
      ..setAttribute('playsinline', 'true')
      ..setAttribute('webkit-playsinline', 'true')
      ..style.pointerEvents = 'none';
    if (url.startsWith('blob:') || url.startsWith('http://') || url.startsWith('https://')) {
      el.src = url;
    } else {
      el.children.clear();
      el.append(html.SourceElement()
        ..src = url
        ..type = mime);
    }
    if (isVideo) {
      (el as html.VideoElement)
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'contain'
        ..style.display = 'block'
        ..style.backgroundColor = '#000';
    } else {
      el
        ..style.position = 'absolute'
        ..style.width = '1px'
        ..style.height = '1px'
        ..style.opacity = '0'
        ..style.left = '0'
        ..style.bottom = '0';
    }
    el.load();
    root.append(el);

    var userMuted = false;
    const playGlyph = '▶';
    const pauseGlyph = '❚❚';
    const muteGlyph = '🔇';
    const volGlyph = '🔊';

    html.SpanElement glyph(String char, {double size = 20}) {
      return html.SpanElement()
        ..text = char
        ..style.fontSize = '${size}px'
        ..style.color = '#FFFFFF'
        ..style.lineHeight = '1'
        ..style.userSelect = 'none';
    }

    void setBtnIcon(html.ButtonElement btn, String char, {double size = 20}) {
      btn.children.clear();
      btn.append(glyph(char, size: size));
    }

    void ensureAudible() {
      if (userMuted) return;
      el.muted = false;
      el.defaultMuted = false;
      el.removeAttribute('muted');
      el.volume = 1.0;
      el.playbackRate = 1.0;
      el.defaultPlaybackRate = 1.0;
    }

    final centerBtn = html.DivElement()
      ..style.position = 'absolute'
      ..style.left = '50%'
      ..style.top = isVideo ? '50%' : '42%'
      ..style.transform = 'translate(-50%, -50%)'
      ..style.display = 'flex'
      ..style.alignItems = 'center'
      ..style.justifyContent = 'center'
      ..style.pointerEvents = 'none'
      ..style.zIndex = '3'
      ..style.transition = 'opacity 0.2s'
      ..style.backgroundColor = 'transparent'
      ..style.border = 'none';
    final centerGlyph = glyph(playGlyph, size: 52);
    centerGlyph.style.marginLeft = '6px';
    centerGlyph.style.textShadow = '0 2px 14px rgba(0,0,0,0.9)';
    centerBtn.append(centerGlyph);

    if (!isVideo) {
      final label = html.DivElement()
        ..style.position = 'absolute'
        ..style.left = '0'
        ..style.right = '0'
        ..style.top = '58%'
        ..style.textAlign = 'center'
        ..style.color = 'rgba(255,255,255,0.65)'
        ..style.fontSize = '12px'
        ..style.fontWeight = '600'
        ..style.pointerEvents = 'none'
        ..text = 'Voice memo — tap to play';
      root.append(label);
    }

    final tapLayer = html.DivElement()
      ..style.position = 'absolute'
      ..style.left = '0'
      ..style.right = '0'
      ..style.top = '0'
      ..style.bottom = '88px'
      ..style.zIndex = '2'
      ..style.cursor = 'pointer';

    final bar = html.DivElement()
      ..style.position = 'absolute'
      ..style.left = '8px'
      ..style.right = '8px'
      ..style.bottom = '8px'
      ..style.padding = '6px 8px'
      ..style.borderRadius = '12px'
      ..style.backgroundColor = 'rgba(0,0,0,0.55)'
      ..style.zIndex = '10'
      ..style.pointerEvents = 'auto'
      ..style.touchAction = 'manipulation';

    final seek = html.InputElement(type: 'range')
      ..style.width = '100%'
      ..style.margin = '0 0 4px 0'
      ..min = '0'
      ..max = '1000'
      ..value = '0';
    seek.style.setProperty('accent-color', '#14B8A6');

    final row = html.DivElement()
      ..style.display = 'flex'
      ..style.alignItems = 'center'
      ..style.gap = '6px';

    late html.ButtonElement barPlayBtn;
    late html.ButtonElement muteBtn;
    late html.SpanElement timeLabel;

    void syncUi() {
      final dur = el.duration;
      final pos = el.currentTime;
      final playing = !el.paused && !el.ended;
      centerBtn.style.opacity = playing && isVideo ? '0' : '1';
      setBtnIcon(barPlayBtn, playing ? pauseGlyph : playGlyph);
      setBtnIcon(muteBtn, el.muted ? muteGlyph : volGlyph);
      if (dur.isFinite && dur > 0) {
        seek.value = ((pos / dur) * 1000).round().clamp(0, 1000).toString();
      }
      String fmt(num sec) {
        final s = sec.floor().clamp(0, 99999);
        final m = (s ~/ 60).toString().padLeft(2, '0');
        final r = (s % 60).toString().padLeft(2, '0');
        return '$m:$r';
      }
      final durSec = dur.isFinite && dur > 0 ? dur.toDouble() : 0.0;
      timeLabel.text = '${fmt(pos.toDouble())} / ${fmt(durSec)}';
    }

    void playWithSound() {
      el.playbackRate = 1.0;
      el.defaultPlaybackRate = 1.0;
      if (userMuted) {
        el.muted = true;
        el.play().catchError((e) => debugPrint('[live_capture] muted play failed: $e'));
        syncUi();
        return;
      }
      // iOS/Safari: play() must start in the tap handler; unmute in the same turn.
      el.volume = 1.0;
      el.muted = true;
      el.defaultMuted = true;
      try {
        final pending = el.play();
        el.muted = false;
        el.defaultMuted = false;
        el.removeAttribute('muted');
        el.volume = 1.0;
        pending.catchError((e) {
          debugPrint('[live_capture] play failed: $e');
        });
      } catch (e) {
        debugPrint('[live_capture] play threw: $e');
      }
      syncUi();
    }

    void togglePlay() {
      try {
        el.playbackRate = 1.0;
        el.defaultPlaybackRate = 1.0;
        if (el.readyState < 1) el.load();
        if (el.paused || el.ended) {
          if (el.ended) el.currentTime = 0;
          playWithSound();
        } else {
          el.pause();
        }
      } catch (_) {}
      syncUi();
    }

    tapLayer.onClick.listen((e) {
      e.preventDefault();
      e.stopPropagation();
      togglePlay();
    });

    barPlayBtn = html.ButtonElement()
      ..type = 'button'
      ..style.background = 'transparent'
      ..style.border = 'none'
      ..style.padding = '10px'
      ..style.minWidth = '44px'
      ..style.minHeight = '44px'
      ..style.cursor = 'pointer'
      ..style.opacity = '1'
      ..style.pointerEvents = 'auto'
      ..onClick.listen((e) {
        e.preventDefault();
        e.stopPropagation();
        togglePlay();
      });
    setBtnIcon(barPlayBtn, playGlyph);

    muteBtn = html.ButtonElement()
      ..type = 'button'
      ..style.background = 'transparent'
      ..style.border = 'none'
      ..style.padding = '10px'
      ..style.minWidth = '44px'
      ..style.minHeight = '44px'
      ..style.cursor = 'pointer'
      ..style.opacity = '1'
      ..style.pointerEvents = 'auto'
      ..onClick.listen((e) {
        e.preventDefault();
        e.stopPropagation();
        userMuted = !userMuted;
        el.muted = userMuted;
        if (!userMuted) {
          el.volume = 1.0;
          el.muted = false;
          el.defaultMuted = false;
          el.removeAttribute('muted');
        }
        syncUi();
      });
    setBtnIcon(muteBtn, volGlyph);

    timeLabel = html.SpanElement()
      ..style.color = 'rgba(255,255,255,0.75)'
      ..style.fontSize = '11px'
      ..style.fontWeight = '600'
      ..style.flex = '1'
      ..text = '00:00 / 00:00';

    seek.onInput.listen((e) {
      e.stopPropagation();
      final dur = el.duration;
      if (!dur.isFinite || dur <= 0) return;
      final val = int.tryParse(seek.value ?? '0') ?? 0;
      el.currentTime = dur * (val / 1000.0);
      syncUi();
    });

    row
      ..append(barPlayBtn)
      ..append(muteBtn)
      ..append(timeLabel);

    bar
      ..append(seek)
      ..append(row);

    root
      ..append(tapLayer)
      ..append(centerBtn)
      ..append(bar);

    el.onLoadedMetadata.listen((_) {
      el.playbackRate = 1.0;
      el.defaultPlaybackRate = 1.0;
      syncUi();
    });
    el.onPlay.listen((_) {
      if (!userMuted) {
        el.muted = false;
        el.volume = 1.0;
      }
      el.playbackRate = 1.0;
      syncUi();
    });
    el.onPause.listen((_) => syncUi());
    el.onTimeUpdate.listen((_) => syncUi());
    el.onEnded.listen((_) => syncUi());
    el.onError.listen((_) {
      debugPrint('[live_capture] playback error code=${el.error?.code} url=$url mime=$mime');
    });
    el.load();
    syncUi();
    return root;
  }

  @override
  Widget build(BuildContext context) {
    if (_loadError != null || _playUrl.isEmpty) {
      return Container(
        height: widget.height,
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: const Color(0xFF0F172A),
          borderRadius: BorderRadius.circular(widget.video ? 16 : 12),
        ),
        padding: const EdgeInsets.all(12),
        child: Text(
          _loadError ?? 'Loading recording…',
          textAlign: TextAlign.center,
          style: const TextStyle(color: Colors.white54, fontSize: 12),
        ),
      );
    }
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
      _media.playbackRate = 1.0;
      _media.defaultPlaybackRate = 1.0;
      _media.volume = 1;
      _media.muted = true;
      _media.defaultMuted = true;
      final pending = _media.play();
      _media.muted = false;
      _media.defaultMuted = false;
      _media.removeAttribute('muted');
      _media.volume = 1;
      await pending;
      _emit();
    } catch (e) {
      lastError = 'Tap Play again, or use the player bar above.';
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
