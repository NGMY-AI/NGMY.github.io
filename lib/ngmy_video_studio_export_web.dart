import 'dart:async';
import 'dart:html' as html;
import 'dart:js_util' as js_util;
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_studio_download.dart';
import 'ngmy_news_banner_painter.dart';
import 'ngmy_video_studio_models.dart';

const _metaTimeout = Duration(seconds: 18);
const _maxRecordSeconds = 180.0;
const _exportCanvasFps = 24;
const _exportVideoBitsPerSecond = 4500000;
const _exportAudioBitsPerSecond = 128000;
const _recorderTimesliceMs = 500;
const _exportWallCapSec = 150.0;
const _exportPlaybackRate = 3.0;

String _ngmyExportStatusLabel(double progress, double durationSec, int recordMs) {
  if (progress < 0.04) return 'Starting export…';
  if (progress >= 0.98) return 'Saving your file…';
  final totalSec = math.max(3, (durationSec / _exportPlaybackRate).ceil());
  final elapsedSec = (recordMs / 1000).ceil();
  final remain = math.max(0, totalSec - elapsedSec);
  return remain > 0 ? 'Exporting… about ${remain}s left' : 'Exporting… almost done';
}
const _minRecordMs = 400;

void _ngmyClipLogoShape(html.CanvasRenderingContext2D ctx, double dx, double dy, double dw, double dh, NgmyVideoSlotShape shape) {
  ctx.beginPath();
  if (shape == NgmyVideoSlotShape.circle) {
    ctx.arc(dx + dw / 2, dy + dh / 2, math.min(dw, dh) / 2, 0, math.pi * 2);
  } else {
    final rad = 10.0;
    ctx.moveTo(dx + rad, dy);
    ctx.lineTo(dx + dw - rad, dy);
    ctx.quadraticCurveTo(dx + dw, dy, dx + dw, dy + rad);
    ctx.lineTo(dx + dw, dy + dh - rad);
    ctx.quadraticCurveTo(dx + dw, dy + dh, dx + dw - rad, dy + dh);
    ctx.lineTo(dx + rad, dy + dh);
    ctx.quadraticCurveTo(dx, dy + dh, dx, dy + dh - rad);
    ctx.lineTo(dx, dy + rad);
    ctx.quadraticCurveTo(dx, dy, dx + rad, dy);
    ctx.closePath();
  }
  ctx.clip();
}

void _ngmyDrawLogoFrame(html.CanvasRenderingContext2D ctx, double dx, double dy, double dw, double dh, NgmyVideoSlotShape shape, NgmyLogoFrameStyle frame, double t) {
  if (frame == NgmyLogoFrameStyle.none) return;
  ctx.save();
  ctx.lineWidth = 2.4;
  if (frame == NgmyLogoFrameStyle.neonHalo || frame == NgmyLogoFrameStyle.crownJewel) {
    final glow = 0.45 + math.sin(t * math.pi * 2) * 0.25;
    ctx.strokeStyle = 'rgba(34, 211, 238, ${glow.toStringAsFixed(2)})';
  } else if (frame == NgmyLogoFrameStyle.presidentialSeal || frame == NgmyLogoFrameStyle.velvetBadge) {
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.95)';
    ctx.fillStyle = frame == NgmyLogoFrameStyle.velvetBadge ? 'rgba(127, 29, 29, 0.9)' : 'rgba(30, 58, 138, 0.88)';
    _ngmyClipLogoShape(ctx, dx - 2, dy - 2, dw + 4, dh + 4, shape);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.95)';
  } else if (frame == NgmyLogoFrameStyle.marbleInset) {
    ctx.fillStyle = 'rgba(231, 229, 228, 0.92)';
    _ngmyClipLogoShape(ctx, dx - 3, dy - 3, dw + 6, dh + 6, shape);
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = 'rgba(168, 162, 158, 0.95)';
  } else {
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.92)';
  }
  _ngmyClipLogoShape(ctx, dx, dy, dw, dh, shape);
  ctx.stroke();
  ctx.restore();
}

void _ngmyPaintLogoSlot(
  html.CanvasRenderingContext2D ctx,
  html.ImageElement logo,
  double dx,
  double dy,
  double dw,
  double dh,
  NgmyVideoSlotShape shape,
  NgmyLogoFrameStyle frame,
  double t,
) {
  _ngmyDrawLogoFrame(ctx, dx, dy, dw, dh, shape, frame, t);
  final inset = frame == NgmyLogoFrameStyle.none ? 0.0 : math.min(dw, dh) * 0.1;
  final ix = dx + inset;
  final iy = dy + inset;
  final iw = dw - inset * 2;
  final ih = dh - inset * 2;
  ctx.save();
  _ngmyClipLogoShape(ctx, ix, iy, iw, ih, shape);
  _ngmyDrawImageContained(ctx, logo, ix, iy, iw, ih, circle: shape == NgmyVideoSlotShape.circle);
  ctx.restore();
}

void _ngmyDrawImageContained(
  html.CanvasRenderingContext2D ctx,
  html.ImageElement img,
  double x,
  double y,
  double w,
  double h, {
  bool circle = false,
}) {
  final nw = img.naturalWidth;
  final nh = img.naturalHeight;
  if (circle) {
    ctx.fillStyle = 'rgba(15, 20, 35, 0.92)';
    ctx.fillRect(x, y, w, h);
  }
  if (nw <= 0 || nh <= 0) {
    ctx.drawImageScaled(img, x, y, w, h);
    return;
  }
  final imgAspect = nw / nh;
  final boxAspect = w / h;
  late final double lw;
  late final double lh;
  late final double lx;
  late final double ly;
  if (imgAspect > boxAspect) {
    lw = w;
    lh = (w / imgAspect).toDouble();
    lx = x;
    ly = y + (h - lh) / 2;
  } else {
    lh = h;
    lw = (h * imgAspect).toDouble();
    lx = x + (w - lw) / 2;
    ly = y;
  }
  ctx.drawImageScaled(img, lx, ly, lw, lh);
}

double _resolveRecordingDuration(Iterable<html.VideoElement> videos) {
  var best = 3.0;
  for (final v in videos) {
    final d = v.duration;
    if (!d.isFinite || d <= 0) continue;
    // Some uploads report inflated duration — cap trust for timeout math.
    final trusted = (d > 240 ? math.min(d, 90.0) : d).toDouble();
    if (trusted > best) best = trusted;
  }
  return best.clamp(1.0, _maxRecordSeconds).toDouble();
}

bool _ngmyIsAppleMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      (ua.contains('macintosh') && ua.contains('mobile'));
}

Future<html.Blob?> _ngmyBlobFromHref(String href) async {
  final src = href.trim();
  if (src.isEmpty) return null;
  if (src.startsWith('data:')) {
    try {
      final resp = await html.HttpRequest.request(src, responseType: 'blob');
      final blob = resp.response as html.Blob?;
      if (blob != null && blob.size > 0) return blob;
    } catch (e) {
      debugPrint('[studio download] data url fetch failed: $e');
    }
    return null;
  }
  if (src.startsWith('blob:')) {
    try {
      final resp = await html.window.fetch(src);
      return await resp.blob();
    } catch (e) {
      debugPrint('[studio download] blob url fetch failed: $e');
    }
    return null;
  }
  if (src.startsWith('http')) {
    try {
      final resp = await html.window.fetch(src, {'mode': 'cors', 'credentials': 'omit'});
      if (resp.ok) return await resp.blob();
    } catch (e) {
      debugPrint('[studio download] http fetch failed: $e');
    }
    try {
      final resp = await html.HttpRequest.request(src, responseType: 'blob');
      final blob = resp.response as html.Blob?;
      if (blob != null && blob.size > 0) return blob;
    } catch (e) {
      debugPrint('[studio download] xhr fetch failed: $e');
    }
  }
  return null;
}

/// Triggers a file save in the browser. On iPhone opens the video so user can Share → Save Video.
Future<String> ngmyTriggerBrowserDownload(String href, String filename) async {
  var safeName = filename.trim().isEmpty ? 'ngmy_video.mp4' : filename.trim();
  String? tempObjectUrl;

  try {
    if (href.startsWith('blob:') || href.startsWith('http') || href.startsWith('data:')) {
      if (_ngmyIsAppleMobileBrowser()) {
        final shared = await ngmyTryShareStudioVideoUrl(href, safeName);
        if (shared) return 'shared';
      }
    }

    if (href.startsWith('blob:')) {
      if (_ngmyIsAppleMobileBrowser()) {
        ngmyStageIosStudioVideo(href, safeName);
        return 'ios_pending';
      }
      final anchor = html.AnchorElement()
        ..href = href
        ..download = safeName
        ..style.display = 'none';
      html.document.body?.append(anchor);
      anchor.click();
      await Future<void>.delayed(const Duration(milliseconds: 900));
      anchor.remove();
      return 'saved';
    }

    final blob = await _ngmyBlobFromHref(href);
    if (blob != null) {
      if (!safeName.contains('.') && blob.type.isNotEmpty) {
        final sub = blob.type.split('/').last;
        if (sub.isNotEmpty && sub != '*') safeName = '$safeName.$sub';
      }

      tempObjectUrl = html.Url.createObjectUrlFromBlob(blob);

      if (_ngmyIsAppleMobileBrowser()) {
        final shared = await ngmyTryShareStudioVideoUrl(tempObjectUrl, safeName);
        if (shared) return 'shared';
        ngmyStageIosStudioVideo(tempObjectUrl, safeName);
        return 'ios_pending';
      }

      final anchor = html.AnchorElement()
        ..href = tempObjectUrl
        ..download = safeName
        ..style.display = 'none';
      html.document.body?.append(anchor);
      anchor.click();
      await Future<void>.delayed(const Duration(milliseconds: 900));
      anchor.remove();
      return 'saved';
    }

    if (_ngmyIsAppleMobileBrowser()) {
      html.window.open(href, '_blank');
      return 'ios_open';
    }

    final anchor = html.AnchorElement()
      ..href = href
      ..download = safeName
      ..target = '_blank'
      ..rel = 'noopener'
      ..style.display = 'none';
    html.document.body?.append(anchor);
    anchor.click();
    await Future<void>.delayed(const Duration(milliseconds: 600));
    anchor.remove();
    return 'saved';
  } catch (e) {
    debugPrint('[studio download] failed: $e');
    return 'failed';
  } finally {
    if (tempObjectUrl != null && ngmyStagedIosStudioVideoUrl != tempObjectUrl) {
      await Future<void>.delayed(const Duration(seconds: 45));
      try {
        html.Url.revokeObjectUrl(tempObjectUrl);
      } catch (_) {}
    }
  }
}

String _ngmyDownloadResultMessage(String mode, {int clipCount = 1}) {
  switch (mode) {
    case 'shared':
      return 'Video shared — choose Save Video or Save to Files.';
    case 'ios_pending':
      return 'Tap Open & Save Video below, then Share ↗ → Save Video (or Add to Photos).';
    case 'ios_open':
      return clipCount > 1
          ? 'Each clip opened in a new tab — tap Share ↗ then Save Video for each one.'
          : 'Video opened — tap Share ↗ at the bottom, then Save Video (or Add to Photos).';
    case 'saved':
      return clipCount > 1
          ? 'Download started — saving $clipCount clip(s) to your device.'
          : 'Download started — your video is saving now.';
    case 'failed':
      return 'Download failed. Try again or use Chrome on a computer.';
    default:
      return 'Download finished.';
  }
}

Future<String> exportNgmyVideoStudioDirect({
  required String videoSourceUrl,
}) async {
  final src = videoSourceUrl.trim();
  if (src.isEmpty) {
    return 'No video to download.';
  }

  var ext = 'mp4';
  final lower = src.toLowerCase();
  if (lower.contains('.webm')) ext = 'webm';
  else if (lower.contains('.mov')) ext = 'mov';

  final filename = 'ngmy_studio_${DateTime.now().millisecondsSinceEpoch}.$ext';

  try {
    if (src.startsWith('blob:') || src.startsWith('http') || src.startsWith('https') || src.startsWith('data:')) {
      final mode = await ngmyTriggerBrowserDownload(src, filename);
      return _ngmyDownloadResultMessage(mode);
    }
    return 'Unsupported video source for download.';
  } catch (e) {
    return 'Download failed: $e';
  }
}

Future<bool> _waitVideoMeta(html.VideoElement v) async {
  if (v.readyState >= html.MediaElement.HAVE_METADATA) return true;
  try {
    await v.onLoadedMetadata.first.timeout(_metaTimeout);
    return v.readyState >= html.MediaElement.HAVE_METADATA;
  } catch (_) {
    return false;
  }
}

Future<bool> _waitVideoCanPlay(html.VideoElement v) async {
  if (v.readyState >= html.MediaElement.HAVE_CURRENT_DATA) return true;
  try {
    await v.onCanPlay.first.timeout(_metaTimeout);
    return v.readyState >= html.MediaElement.HAVE_CURRENT_DATA;
  } catch (_) {
    return _waitVideoMeta(v);
  }
}

/// Chrome often reports video/mp4 as supported but records zero bytes — prefer WebM.
String? _pickRecorderMimeType() {
  for (final m in [
    'video/webm;codecs=vp8,opus',
    'video/webm;codecs=vp9,opus',
    'video/webm',
    'video/mp4',
  ]) {
    if (html.MediaRecorder.isTypeSupported(m)) return m;
  }
  return null;
}

Future<void> _stopRecorderDrain(html.MediaRecorder recorder, Completer<void> done) async {
  if (recorder.state == 'recording') {
    try {
      js_util.callMethod(recorder, 'requestData', const []);
    } catch (_) {}
    try {
      recorder.stop();
    } catch (_) {}
  }
  try {
    await done.future.timeout(const Duration(seconds: 10));
  } catch (_) {}
  await Future<void>.delayed(const Duration(milliseconds: 150));
}

bool _webSupportsComposedCapture() {
  final probe = html.CanvasElement(width: 4, height: 4);
  try {
    final stream = probe.captureStream(1);
    return stream.getVideoTracks().isNotEmpty;
  } catch (_) {
    return false;
  }
}

void _appendVideoAudioTracks(html.MediaStream composed, html.VideoElement video) {
  if (composed.getAudioTracks().isNotEmpty) return;
  video.muted = false;
  video.volume = 1.0;
  try {
    final cap = video.captureStream();
    for (final t in cap.getAudioTracks()) {
      composed.addTrack(t);
      return;
    }
  } catch (e) {
    debugPrint('[studio export] captureStream audio failed: $e');
  }
  try {
    final ctor = js_util.getProperty(html.window, 'AudioContext') ??
        js_util.getProperty(html.window, 'webkitAudioContext');
    if (ctor == null) return;
    final ctx = js_util.callConstructor(ctor, []);
    final src = js_util.callMethod(ctx, 'createMediaElementSource', [video]);
    final dest = js_util.callMethod(ctx, 'createMediaStreamDestination', []);
    js_util.callMethod(src, 'connect', [dest]);
    final stream = js_util.getProperty(dest, 'stream');
    if (stream is html.MediaStream) {
      for (final t in stream.getAudioTracks()) {
        composed.addTrack(t);
      }
    }
    js_util.callMethod(ctx, 'resume', []);
  } catch (e) {
    debugPrint('[studio export] WebAudio audio attach failed: $e');
  }
}

html.MediaStream? _safeCaptureStream(dynamic element, {int fps = _exportCanvasFps}) {
  try {
    if (element is html.CanvasElement) {
      return element.captureStream(fps);
    }
    if (element is html.VideoElement) {
      return element.captureStream();
    }
  } catch (e) {
    debugPrint('[studio export] captureStream failed: $e');
  }
  return null;
}

Future<String> _downloadAllVideoClips(Map<String, String> sources) async {
  var n = 0;
  var lastMode = 'saved';
  for (final src in sources.values) {
    if (src.trim().isEmpty) continue;
    var ext = 'mp4';
    final lower = src.toLowerCase();
    if (lower.contains('.webm')) ext = 'webm';
    else if (lower.contains('.mov')) ext = 'mov';
    final filename = 'ngmy_studio_${DateTime.now().millisecondsSinceEpoch}_$n.$ext';
    lastMode = await ngmyTriggerBrowserDownload(src, filename);
    n++;
    if (n < sources.length) {
      await Future<void>.delayed(const Duration(milliseconds: 600));
    }
  }
  if (n == 0) return 'No video to download.';
  return _ngmyDownloadResultMessage(lastMode, clipCount: n);
}

void _configureVideoElement(html.VideoElement v, String src, {required bool forExport}) {
  v.src = src;
  v.preload = 'auto';
  v.muted = forExport;
  v.defaultMuted = forExport;
  v.autoplay = false;
  v.setAttribute('playsinline', 'true');
  v.setAttribute('webkit-playsinline', 'true');
  if (src.startsWith('http') && !src.startsWith('blob:')) {
    v.crossOrigin = 'anonymous';
  }
  v.style.display = 'none';
}

Future<String> exportNgmyVideoStudioComposed({
  required NgmyVideoStudioExportConfig config,
  void Function(double progress, String status)? onProgress,
}) async {
  final sources = config.videoSourcesBySlot;
  if (sources.isEmpty || sources.values.every((s) => s.trim().isEmpty)) {
    return 'Upload at least one video into a screen frame before downloading.';
  }

  if (config.canDirectDownload) {
    return exportNgmyVideoStudioDirect(videoSourceUrl: sources.values.first);
  }

  if (!_webSupportsComposedCapture()) {
    onProgress?.call(0.5, 'Saving your video…');
    return _downloadAllVideoClips(sources);
  }

  onProgress?.call(0.02, 'Loading your video…');

  final videos = <String, html.VideoElement>{};
  for (final e in sources.entries) {
    if (e.value.trim().isEmpty) continue;
    final v = html.VideoElement();
    _configureVideoElement(v, e.value, forExport: true);
    html.document.body?.append(v);
    videos[e.key] = v;
  }

  final logos = <String, html.ImageElement>{};
  for (final e in config.logoDataUrlBySlot.entries) {
    if (e.value.trim().isEmpty) continue;
    final img = html.ImageElement()..src = e.value;
    img.style.display = 'none';
    html.document.body?.append(img);
    logos[e.key] = img;
    try {
      await img.onLoad.first.timeout(const Duration(seconds: 12));
    } catch (_) {}
  }

  html.ImageElement? backdrop;
  if (config.backgroundAsset != null && config.backgroundAsset!.isNotEmpty) {
    final paths = [
      ngmyStudioAssetWebUrl(config.backgroundAsset!),
      'assets/${config.backgroundAsset!}',
      config.backgroundAsset!,
    ];
    for (final p in paths) {
      try {
        final img = html.ImageElement()..src = p;
        await img.onLoad.first.timeout(const Duration(seconds: 12));
        backdrop = img;
        break;
      } catch (_) {}
    }
  }

  html.CanvasElement? exportCanvas;
  var usedCanvasStream = false;

  try {
    onProgress?.call(0.06, 'Preparing studio export…');

    final metaOk = await Future.wait(videos.values.map(_waitVideoMeta));
    if (metaOk.contains(false)) {
      return 'Video could not load for export. Re-upload the clip and try Download again.';
    }
    final playOk = await Future.wait(videos.values.map(_waitVideoCanPlay));
    if (playOk.contains(false)) {
      return 'Video is still loading. Wait a moment and tap Download again.';
    }

    var durationSec = _resolveRecordingDuration(videos.values);

    onProgress?.call(0.08, 'Building your video…');

    final w = config.outputWidth;
    final h = config.outputHeight;
    html.ImageElement? bannerOverlay;
    if (config.newsBannerStyle != null) {
      bannerOverlay = await _renderNewsBannerOverlay(config, w, h);
    }
    exportCanvas = html.CanvasElement(width: w, height: h);
    final canvas = exportCanvas!;
    final ctx = canvas.context2D;

    final composed = html.MediaStream();
    canvas
      ..style.position = 'fixed'
      ..style.left = '-10000px'
      ..style.top = '0'
      ..style.width = '${w}px'
      ..style.height = '${h}px'
      ..style.pointerEvents = 'none'
      ..style.zIndex = '0';
    html.document.body?.append(canvas);

    final canvasStream = _safeCaptureStream(canvas, fps: _exportCanvasFps);
    if (canvasStream != null) {
      for (final t in canvasStream.getVideoTracks()) {
        composed.addTrack(t);
      }
      usedCanvasStream = composed.getVideoTracks().isNotEmpty;
    }

    if (!usedCanvasStream) {
      final vStream = _safeCaptureStream(videos.values.first);
      if (vStream != null) {
        for (final t in vStream.getVideoTracks()) {
          composed.addTrack(t);
        }
      } else {
        exportCanvas?.remove();
        for (final v in videos.values) {
          v.remove();
        }
        for (final i in logos.values) {
          i.remove();
        }
        return _downloadAllVideoClips(sources);
      }
    }

    for (final v in videos.values) {
      _appendVideoAudioTracks(composed, v);
      if (composed.getAudioTracks().isNotEmpty) break;
    }

    if (composed.getTracks().isEmpty) {
      exportCanvas?.remove();
      for (final v in videos.values) {
        v.remove();
      }
      for (final i in logos.values) {
        i.remove();
      }
      return _downloadAllVideoClips(sources);
    }

    final mimeType = _pickRecorderMimeType();
    if (mimeType == null) {
      return _downloadAllVideoClips(sources);
    }

    final recorderOptions = <String, dynamic>{
      'mimeType': mimeType,
      'videoBitsPerSecond': _exportVideoBitsPerSecond,
    };
    if (composed.getAudioTracks().isNotEmpty) {
      recorderOptions['audioBitsPerSecond'] = _exportAudioBitsPerSecond;
    }

    html.MediaRecorder recorder;
    try {
      recorder = html.MediaRecorder(composed, recorderOptions);
    } catch (e) {
      debugPrint('[studio export] MediaRecorder ctor failed: $e');
      return _downloadAllVideoClips(sources);
    }

    final chunks = <html.Blob>[];
    recorder.addEventListener('dataavailable', (event) {
      final b = (event as html.BlobEvent).data;
      if (b != null && b.size > 0) chunks.add(b);
    });
    recorder.addEventListener('error', (event) {
      debugPrint('[studio export] MediaRecorder error: $event');
    });
    final done = Completer<void>();
    recorder.addEventListener('stop', (_) {
      if (!done.isCompleted) done.complete();
    });

    for (final v in videos.values) {
      v.playbackRate = _exportPlaybackRate;
      v.currentTime = 0;
    }

    var stopped = false;
    var forceEnd = false;
    var playbackStuck = false;
    var lastCurrentTime = -1.0;
    var stallFrames = 0;
    final startMs = DateTime.now().millisecondsSinceEpoch;
    final recordStartedMs = startMs;

    for (final v in videos.values) {
      v.onEnded.listen((_) {
        if (videos.values.every((vv) => vv.ended)) forceEnd = true;
      });
    }

    try {
      ctx.imageSmoothingEnabled = true;
      js_util.setProperty(ctx, 'imageSmoothingQuality', 'medium');
    } catch (_) {}

    void paintFrame() {
      if (backdrop != null) {
        ctx.drawImageScaled(backdrop!, 0, 0, w, h);
      } else {
        _drawProgramBg(ctx, w.toDouble(), h.toDouble(), config);
      }

      for (final e in config.slotRects.entries) {
        final kind = config.slotKinds[e.key] ?? NgmySlotKind.video;
        final r = e.value;
        final dx = r.left * w;
        final dy = r.top * h;
        final dw = r.width * w;
        final dh = r.height * h;

        if (kind == NgmySlotKind.logoAnim) {
          if (bannerOverlay == null && config.logoVisibleBySlot[e.key] != false) {
            final logo = logos[e.key];
            if (logo != null) {
              final t = ((DateTime.now().millisecondsSinceEpoch - startMs) % 2200) / 2200;
              _ngmyPaintLogoSlot(
                ctx,
                logo,
                dx,
                dy,
                dw,
                dh,
                config.slotShapes[e.key] ?? NgmyVideoSlotShape.rect,
                config.logoFrameStyleBySlot[e.key] ?? NgmyLogoFrameStyle.goldRing,
                t,
              );
            }
          }
          continue;
        }

        final video = videos[e.key];
        if (video == null) continue;
        final shape = config.slotShapes[e.key] ?? NgmyVideoSlotShape.rect;
        ctx.save();
        if (shape == NgmyVideoSlotShape.circle) {
          ctx.beginPath();
          ctx.arc(dx + dw / 2, dy + dh / 2, math.min(dw, dh) / 2, 0, math.pi * 2);
          ctx.clip();
        } else {
          ctx.beginPath();
          ctx.rect(dx, dy, dw, dh);
          ctx.clip();
        }
        try {
          ctx.drawImageScaled(video, dx, dy, dw, dh);
        } catch (e) {
          debugPrint('[studio export] drawImage failed (CORS?): $e');
        }
        ctx.restore();
      }

      if (bannerOverlay != null) {
        ctx.drawImageScaled(bannerOverlay, 0, 0, w, h);
      } else if (config.showTextOverlay) {
        _drawTextOverlay(ctx, w.toDouble(), h.toDouble(), config);
      }

      if (bannerOverlay != null) {
        for (final e in config.slotRects.entries) {
          if ((config.slotKinds[e.key] ?? NgmySlotKind.video) != NgmySlotKind.logoAnim) continue;
          if (config.logoVisibleBySlot[e.key] == false) continue;
          final logo = logos[e.key];
          if (logo == null) continue;
          final r = e.value;
          final dx = r.left * w;
          final dy = r.top * h;
          final dw = r.width * w;
          final dh = r.height * h;
          final t = ((DateTime.now().millisecondsSinceEpoch - startMs) % 2200) / 2200;
          _ngmyPaintLogoSlot(
            ctx,
            logo,
            dx,
            dy,
            dw,
            dh,
            config.slotShapes[e.key] ?? NgmyVideoSlotShape.rect,
            config.logoFrameStyleBySlot[e.key] ?? NgmyLogoFrameStyle.goldRing,
            t,
          );
        }
      }
    }

    // Prime canvas so captureStream has frames before MediaRecorder starts.
    paintFrame();
    await Future<void>.delayed(const Duration(milliseconds: 32));
    paintFrame();

    for (final v in videos.values) {
      try {
        await v.play();
      } catch (e) {
        debugPrint('[studio export] video play failed, retry muted: $e');
        v.muted = true;
        try {
          await v.play();
        } catch (e2) {
          debugPrint('[studio export] muted play failed: $e2');
        }
      }
    }
    await Future<void>.delayed(const Duration(milliseconds: 80));
    paintFrame();

    try {
      recorder.start(_recorderTimesliceMs);
    } catch (e) {
      debugPrint('[studio export] recorder.start failed: $e');
      return _downloadAllVideoClips(sources);
    }

    void drawFrame(num _) {
      if (stopped) return;
      paintFrame();

      final primary = videos.values.first;
      final t = primary.currentTime;
      final recordMs = DateTime.now().millisecondsSinceEpoch - recordStartedMs;
      if (t <= lastCurrentTime + 0.001) {
        stallFrames++;
      } else {
        stallFrames = 0;
        lastCurrentTime = t.toDouble();
      }

      final timeProgress = durationSec > 0 ? (t / durationSec) : 0.0;
      final wallProgress = recordMs / math.max(800, (durationSec * 1000) / _exportPlaybackRate);
      final progress = math.max(timeProgress, wallProgress).clamp(0.0, 0.99);
      onProgress?.call(progress, _ngmyExportStatusLabel(progress, durationSec, recordMs));

      final allEnded = videos.values.every((v) => v.ended);
      final reachedMetaEnd = t >= durationSec - 0.08;
      final stallAbort = recordMs > 4000 && t < 0.25 && stallFrames > 30;
      if (stallAbort) playbackStuck = true;
      final wallCapMs = ((math.min(durationSec, _exportWallCapSec) + 3) * 1000).round();
      final wallCapHit = recordMs >= wallCapMs;
      if (((forceEnd || allEnded || primary.ended || reachedMetaEnd || stallAbort || wallCapHit) && recordMs >= _minRecordMs)) {
        stopped = true;
        for (final v in videos.values) {
          v.pause();
          v.playbackRate = 1.0;
        }
        unawaited(_stopRecorderDrain(recorder, done));
        return;
      }
      html.window.requestAnimationFrame(drawFrame);
    }

    html.window.requestAnimationFrame(drawFrame);

    await Future.any([
      done.future,
      Future.delayed(Duration(milliseconds: ((math.min(durationSec, _exportWallCapSec) + 5) * 1000).round())),
    ]);

    if (!done.isCompleted) {
      await _stopRecorderDrain(recorder, done);
    }

    onProgress?.call(1.0, 'Saving your file…');

    if (playbackStuck && chunks.isEmpty) {
      debugPrint('[studio export] playback stuck — saving original clip');
      return _downloadAllVideoClips(sources);
    }

    if (chunks.isEmpty) {
      debugPrint('[studio export] empty chunks (mime=$mimeType), falling back to raw clips');
      final raw = await _downloadAllVideoClips(sources);
      if (raw.contains('failed') || raw.contains('No video')) return raw;
      return 'Could not build the merged studio file in this browser — saved your original clip instead. '
          'For full templates use Chrome or Edge on a computer. ($raw)';
    }

    final blobType = mimeType.contains('webm') ? 'video/webm' : 'video/mp4';
    final blob = html.Blob(chunks, blobType);
    final ext = blobType.contains('webm') ? 'webm' : 'mp4';
    final filename = 'ngmy_${config.format.name}_${config.outputWidth}x${config.outputHeight}_$startMs.$ext';
    final url = html.Url.createObjectUrlFromBlob(blob);
    if (_ngmyIsAppleMobileBrowser()) {
      ngmyStageIosStudioVideo(url, filename);
      if (!usedCanvasStream) {
        return '${_ngmyDownloadResultMessage('ios_pending')} (Full studio merge works best in Chrome on desktop.)';
      }
      return _ngmyDownloadResultMessage('ios_pending');
    }
    final mode = await ngmyTriggerBrowserDownload(url, filename);
    if (!usedCanvasStream) {
      return '${_ngmyDownloadResultMessage(mode)} (video track — full studio merge needs Chrome/Edge on desktop.)';
    }
    return _ngmyDownloadResultMessage(mode);
  } catch (e, st) {
    debugPrint('[studio export] composed failed: $e\n$st');
    try {
      exportCanvas?.remove();
    } catch (_) {}
    for (final v in videos.values) {
      try {
        v.remove();
      } catch (_) {}
    }
    for (final i in logos.values) {
      try {
        i.remove();
      } catch (_) {}
    }
    return _downloadAllVideoClips(sources);
  } finally {
    try {
      exportCanvas?.remove();
    } catch (_) {}
    for (final v in videos.values) {
      v.remove();
    }
    for (final i in logos.values) {
      i.remove();
    }
  }
}

Future<html.ImageElement> _renderNewsBannerOverlay(NgmyVideoStudioExportConfig config, int w, int h) async {
  final recorder = ui.PictureRecorder();
  final canvas = Canvas(recorder);
  NgmyNewsBannerPainter(
    style: config.newsBannerStyle!,
    headline: config.headline,
    title: config.title,
    subtitle: config.subtitle,
    liveLabel: config.liveLabel,
    topAccent: config.newsTopAccent,
    scale: config.headlineFontScale.clamp(0.6, 1.8),
  ).paint(canvas, Size(w.toDouble(), h.toDouble()));
  final picture = recorder.endRecording();
  final image = await picture.toImage(w, h);
  final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
  final blob = html.Blob([bytes!.buffer.asUint8List()], 'image/png');
  final url = html.Url.createObjectUrlFromBlob(blob);
  final img = html.ImageElement()..src = url;
  await img.onLoad.first;
  return img;
}

void _drawProgramBg(html.CanvasRenderingContext2D ctx, double w, double h, NgmyVideoStudioExportConfig c) {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, w, h);
}

void _drawTextOverlay(html.CanvasRenderingContext2D ctx, double w, double h, NgmyVideoStudioExportConfig c) {
  void txt(String t, double x, double y, String size, String color, {String align = 'left'}) {
    if (t.trim().isEmpty) return;
    ctx.font = 'bold $size Arial,sans-serif';
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(t, x, y);
  }

  switch (c.templateId) {
    case NgmyVideoTemplateId.ytThanksTriple:
    case NgmyVideoTemplateId.ttThanksTriple:
      txt(c.title.toUpperCase(), w * 0.5, h * 0.08, '20px', '#FFFFFF', align: 'center');
      final barH = h * 0.09;
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, h - barH, w, barH);
      txt(c.headline, w * 0.06, h - barH * 0.35, '${barH * 0.4}px', '#111827');
      break;
    case NgmyVideoTemplateId.ttNewsTag:
      final barH = h * 0.08;
      ctx.fillStyle = 'rgba(0,0,0,0.78)';
      ctx.fillRect(0, h - barH - 8, w, barH);
      txt(c.title.toUpperCase(), w * 0.05, h - barH, '${barH * 0.42}px', '#EF4444');
      txt(c.headline, w * 0.05, h - barH * 0.48, '${barH * 0.35}px', '#FFFFFF');
      break;
    default:
      break;
  }
}
