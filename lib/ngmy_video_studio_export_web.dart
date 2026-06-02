import 'dart:async';
import 'dart:html' as html;
import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_studio_download.dart';
import 'ngmy_news_banner_painter.dart';
import 'ngmy_video_studio_models.dart';

const _metaTimeout = Duration(seconds: 18);
const _exportPlaybackRate = 2.0;
const _maxRecordSeconds = 90.0;

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
  if (src.startsWith('blob:') || src.startsWith('data:') || src.startsWith('http')) {
    try {
      final resp = await html.HttpRequest.request(src, responseType: 'blob');
      final blob = resp.response as html.Blob?;
      if (blob != null && blob.size > 0) return blob;
    } catch (e) {
      debugPrint('[studio download] blob fetch failed: $e');
    }
  }
  return null;
}

/// Triggers a file save in the browser. On iPhone opens the video so user can Share → Save Video.
Future<String> ngmyTriggerBrowserDownload(String href, String filename) async {
  var safeName = filename.trim().isEmpty ? 'ngmy_video.mp4' : filename.trim();
  String? tempObjectUrl;

  try {
    final blob = await _ngmyBlobFromHref(href);
    if (blob != null) {
      if (!safeName.contains('.') && blob.type.isNotEmpty) {
        final sub = blob.type.split('/').last;
        if (sub.isNotEmpty && sub != '*') safeName = '$safeName.$sub';
      }

      tempObjectUrl = html.Url.createObjectUrlFromBlob(blob);

      if (_ngmyIsAppleMobileBrowser()) {
        html.window.open(tempObjectUrl, '_blank');
        return 'ios_open';
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
    if (tempObjectUrl != null) {
      await Future<void>.delayed(const Duration(seconds: 45));
      html.Url.revokeObjectUrl(tempObjectUrl);
    }
  }
}

String _ngmyDownloadResultMessage(String mode, {int clipCount = 1}) {
  switch (mode) {
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

bool _webSupportsComposedCapture() {
  final probe = html.CanvasElement(width: 4, height: 4);
  try {
    final stream = probe.captureStream(1);
    return stream.getVideoTracks().isNotEmpty;
  } catch (_) {
    return false;
  }
}

html.MediaStream? _safeCaptureStream(dynamic element, {int fps = 30}) {
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

void _configureVideoElement(html.VideoElement v, String src) {
  v.src = src;
  v.preload = 'auto';
  v.muted = false;
  v.setAttribute('playsinline', 'true');
  if (src.startsWith('http') && !src.startsWith('blob:')) {
    v.crossOrigin = 'anonymous';
  }
  v.style.display = 'none';
}

Future<String> exportNgmyVideoStudioComposed({
  required NgmyVideoStudioExportConfig config,
  void Function(double progress)? onProgress,
}) async {
  final sources = config.videoSourcesBySlot;
  if (sources.isEmpty || sources.values.every((s) => s.trim().isEmpty)) {
    return 'Upload at least one video into a screen frame before downloading.';
  }

  if (config.canDirectDownload) {
    return exportNgmyVideoStudioDirect(videoSourceUrl: sources.values.first);
  }

  if (!_webSupportsComposedCapture()) {
    onProgress?.call(0.5);
    return _downloadAllVideoClips(sources);
  }

  onProgress?.call(0.03);

  final videos = <String, html.VideoElement>{};
  for (final e in sources.entries) {
    if (e.value.trim().isEmpty) continue;
    final v = html.VideoElement();
    _configureVideoElement(v, e.value);
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
    onProgress?.call(0.08);

    final metaOk = await Future.wait(videos.values.map(_waitVideoMeta));
    if (metaOk.contains(false)) {
      return 'Video could not load for export. Re-upload the clip and try Download again.';
    }

    var durationSec = 3.0;
    for (final v in videos.values) {
      if (v.duration.isFinite && v.duration > durationSec) durationSec = v.duration.toDouble();
    }
    durationSec = durationSec.clamp(1.0, _maxRecordSeconds);

    onProgress?.call(0.12);

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
      ..style.left = '0'
      ..style.top = '0'
      ..style.opacity = '0.01'
      ..style.pointerEvents = 'none'
      ..style.zIndex = '-1';
    html.document.body?.append(canvas);

    final canvasStream = _safeCaptureStream(canvas, fps: 30);
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

    final audioStream = _safeCaptureStream(videos.values.first);
    if (audioStream != null) {
      try {
        for (final t in audioStream.getAudioTracks()) {
          composed.addTrack(t);
        }
      } catch (_) {}
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

    String? mimeType;
    for (final m in ['video/webm;codecs=vp9,opus', 'video/webm;codecs=vp8,opus', 'video/webm']) {
      if (html.MediaRecorder.isTypeSupported(m)) {
        mimeType = m;
        break;
      }
    }
    mimeType ??= 'video/webm';

    final recorder = html.MediaRecorder(composed, {'mimeType': mimeType});
    final chunks = <html.Blob>[];
    recorder.addEventListener('dataavailable', (event) {
      final b = (event as html.BlobEvent).data;
      if (b != null && b.size > 0) chunks.add(b);
    });
    final done = Completer<void>();
    recorder.addEventListener('stop', (_) => done.complete());

    for (final v in videos.values) {
      v.playbackRate = _exportPlaybackRate;
      v.currentTime = 0;
    }
    await Future.wait(videos.values.map((v) => v.play()));

    recorder.start(250);
    var stopped = false;
    final startMs = DateTime.now().millisecondsSinceEpoch;
    final recordTargetSec = durationSec / _exportPlaybackRate;

    void drawFrame(num _) {
      if (stopped) return;

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
          final logo = logos[e.key];
          if (logo != null) {
            final t = ((DateTime.now().millisecondsSinceEpoch - startMs) % 2200) / 2200;
            final scale = 0.88 + math.sin(t * math.pi * 2) * 0.07 + 0.07;
            ctx.save();
            ctx.beginPath();
            ctx.rect(dx, dy, dw, dh);
            ctx.clip();
            final lw = dw * scale;
            final lh = dh * scale;
            ctx.drawImageScaled(logo, dx + (dw - lw) / 2, dy + (dh - lh) / 2, lw, lh);
            ctx.restore();
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
        ctx.drawImageScaled(video, dx, dy, dw, dh);
        ctx.restore();
      }

      if (bannerOverlay != null) {
        ctx.drawImageScaled(bannerOverlay, 0, 0, w, h);
      } else if (config.showTextOverlay) {
        _drawTextOverlay(ctx, w.toDouble(), h.toDouble(), config);
      }

      final t = videos.values.first.currentTime;
      onProgress?.call((t / durationSec).clamp(0.12, 0.98));

      if (t >= durationSec - 0.05 || videos.values.first.ended) {
        stopped = true;
        for (final v in videos.values) {
          v.pause();
          v.playbackRate = 1.0;
        }
        if (recorder.state != 'inactive') recorder.stop();
        return;
      }
      html.window.requestAnimationFrame(drawFrame);
    }

    html.window.requestAnimationFrame(drawFrame);

    await Future.any([
      done.future,
      Future.delayed(Duration(milliseconds: ((recordTargetSec + 8) * 1000).round())),
    ]);

    if (!done.isCompleted) {
      try {
        recorder.stop();
      } catch (_) {}
      await done.future.timeout(const Duration(seconds: 4), onTimeout: () {});
    }

    onProgress?.call(1.0);

    if (chunks.isEmpty) {
      return 'Export produced no video data. Try a shorter clip or a different browser (Chrome/Edge).';
    }

    final blob = html.Blob(chunks, mimeType);
    final ext = mimeType!.contains('mp4') ? 'mp4' : 'webm';
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
