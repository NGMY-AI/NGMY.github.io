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
/// Up to 10 minutes — full-length template export.
const _maxRecordSeconds = 600.0;
const _exportCanvasFps = 30;
const _exportVideoBitsPerSecond = 8000000;
const _exportAudioBitsPerSecond = 192000;
const _recorderTimesliceMs = 250;
/// Max wall time for one export attempt (mobile seek loops used to exceed this).
const _exportWallCapSec = 90.0;
/// Mobile composed export — enough for typical clips without multi-hour hangs.
const _mobileMaxRecordSeconds = 180.0;

bool _ngmyExportCancelled = false;

void cancelNgmyVideoStudioExport() {
  _ngmyExportCancelled = true;
}

void _resetExportCancel() {
  _ngmyExportCancelled = false;
}

bool get _exportWasCancelled => _ngmyExportCancelled;

String _ngmyRecordingStatus(double progress) {
  final pct = (progress.clamp(0.0, 1.0) * 100).round();
  if (pct >= 98) return 'Saving your video…';
  if (pct <= 2) return 'Recording template 0%…';
  return 'Recording template $pct%…';
}

String _formatDurationLabel(double seconds) {
  final total = seconds.round();
  if (total < 60) return '${total}s clip';
  final m = total ~/ 60;
  final s = total % 60;
  if (s == 0) return '$m min clip';
  return '$m min ${s}s clip';
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

Future<void> _seekVideoTo(html.VideoElement v, double seconds, {bool fast = false}) async {
  final maxT = v.duration.isFinite && v.duration > 0 ? math.max(0.0, v.duration - 0.05) : seconds;
  final target = seconds.clamp(0.0, maxT);
  if ((v.currentTime - target).abs() < 0.02) {
    if (!fast) await _waitVideoFrameReady(v);
    return;
  }
  if (fast) {
    v.currentTime = target;
    await Future<void>.delayed(const Duration(milliseconds: 8));
    return;
  }
  final done = Completer<void>();
  void onSeeked(html.Event _) {
    v.removeEventListener('seeked', onSeeked);
    if (!done.isCompleted) done.complete();
  }
  v.addEventListener('seeked', onSeeked);
  v.currentTime = target;
  try {
    await done.future.timeout(const Duration(milliseconds: 400));
  } catch (_) {
    v.removeEventListener('seeked', onSeeked);
  }
  await _waitVideoFrameReady(v);
}

Future<void> _waitVideoFrameReady(html.VideoElement v) async {
  if (js_util.hasProperty(v, 'requestVideoFrameCallback')) {
    final done = Completer<void>();
    js_util.callMethod(v, 'requestVideoFrameCallback', [
      js_util.allowInterop((_, __) {
        if (!done.isCompleted) done.complete();
      }),
    ]);
    try {
      await done.future.timeout(const Duration(milliseconds: 500));
      return;
    } catch (_) {}
  }
  await Future<void>.delayed(const Duration(milliseconds: 24));
}

Future<void> _awaitVideoFramePulse(List<html.VideoElement> videos) async {
  for (final v in videos) {
    if (v.readyState >= html.MediaElement.HAVE_CURRENT_DATA && !v.paused) {
      await _waitVideoFrameReady(v);
      return;
    }
  }
  await Future<void>.delayed(const Duration(milliseconds: 16));
}

int? _sampleCanvasPixel(html.CanvasRenderingContext2D ctx, int x, int y) {
  try {
    final d = ctx.getImageData(x, y, 1, 1).data;
    return d[0] + (d[1] << 8) + (d[2] << 16) + (d[3] << 24);
  } catch (_) {
    return null;
  }
}

html.VideoElement? _exportAudioElement;
html.VideoElement? _ngmyWebAudioSourceVideo;
Object? _ngmyExportAudioContext;

Future<void> _resumeExportAudioContext() async {
  try {
    final ctor = js_util.getProperty(html.window, 'AudioContext') ??
        js_util.getProperty(html.window, 'webkitAudioContext');
    if (ctor == null) return;
    final ctxObj = (_ngmyExportAudioContext ?? js_util.callConstructor(ctor, const [])) as Object;
    _ngmyExportAudioContext = ctxObj;
    final state = js_util.getProperty(ctxObj, 'state');
    if (state == 'suspended') {
      await js_util.promiseToFuture(js_util.callMethod(ctxObj, 'resume', const []));
    }
  } catch (e) {
    debugPrint('[studio export] AudioContext resume: $e');
  }
}

Future<void> _waitNextVideoFrame(html.VideoElement? video) async {
  if (video == null) {
    await Future<void>.delayed(const Duration(milliseconds: 33));
    return;
  }
  if (js_util.hasProperty(video, 'requestVideoFrameCallback')) {
    final done = Completer<void>();
    js_util.callMethod(video, 'requestVideoFrameCallback', [
      js_util.allowInterop((_, __) {
        if (!done.isCompleted) done.complete();
      }),
    ]);
    try {
      await done.future.timeout(const Duration(milliseconds: 120));
      return;
    } catch (_) {}
  }
  await _waitVideoFrameReady(video);
}

void _stageHiddenVideoElement(html.VideoElement v, {int? preferW, int? preferH}) {
  // iOS Safari freezes off-screen videos — keep in viewport at near-zero opacity.
  final w = preferW ?? (v.videoWidth > 0 ? v.videoWidth : 720);
  final h = preferH ?? (v.videoHeight > 0 ? v.videoHeight : 1280);
  v
    ..style.position = 'fixed'
    ..style.left = '0'
    ..style.top = '0'
    ..style.width = '${w}px'
    ..style.height = '${h}px'
    ..style.objectFit = 'contain'
    ..style.opacity = '0.02'
    ..style.pointerEvents = 'none'
    ..style.zIndex = '2147483640'
    ..style.transform = 'translateZ(0)';
  v.style.setProperty('will-change', 'transform');
}

void _applyExportVideoStaging(html.VideoElement v) {
  _stageHiddenVideoElement(v);
}

void _cleanupExportElements() {
  try {
    _exportAudioElement?.pause();
    _exportAudioElement?.remove();
  } catch (_) {}
  _exportAudioElement = null;
  _ngmyWebAudioSourceVideo = null;
  _ngmyExportAudioContext = null;
}

Future<html.VideoElement?> _ensureExportAudioElement(html.VideoElement source) async {
  if (_exportAudioElement != null) return _exportAudioElement;
  final src = source.currentSrc.isNotEmpty ? source.currentSrc : source.src;
  if (src.trim().isEmpty) return null;
  final el = html.VideoElement();
  el.src = src;
  el.preload = 'auto';
  el.muted = false;
  el.defaultMuted = false;
  el.volume = 1.0;
  el.autoplay = false;
  el.setAttribute('playsinline', 'true');
  el.setAttribute('webkit-playsinline', 'true');
  el.removeAttribute('muted');
  if (src.startsWith('http') && !src.startsWith('blob:')) {
    el.crossOrigin = 'anonymous';
  }
  html.document.body?.append(el);
  _stageHiddenVideoElement(el);
  for (var i = 0; i < 120; i++) {
    if (el.readyState >= html.MediaElement.HAVE_METADATA) break;
    await Future<void>.delayed(const Duration(milliseconds: 100));
  }
  try {
    await el.play().timeout(const Duration(seconds: 1));
    el.pause();
    el.currentTime = 0;
  } catch (_) {}
  _exportAudioElement = el;
  return el;
}

Future<void> _syncExportAudioPlayback(html.VideoElement? primary, {required bool playing}) async {
  final audio = _exportAudioElement;
  if (audio == null || primary == null) return;
  try {
    final t = primary.currentTime;
    if ((audio.currentTime - t).abs() > 0.2) {
      audio.currentTime = t;
    }
    if (playing) {
      if (audio.paused) await _playVideoForRecord(audio);
    } else {
      audio.pause();
    }
  } catch (e) {
    debugPrint('[studio export] audio sync: $e');
  }
}

/// Export at the uploaded clip's native size — template overlays only, no crop.
(int, int) _resolveExportCanvasSize(NgmyVideoStudioExportConfig config, html.VideoElement? primary) {
  if (primary != null) {
    var vw = primary.videoWidth;
    var vh = primary.videoHeight;
    if (vw > 0 && vh > 0) {
      if (vw.isOdd) vw++;
      if (vh.isOdd) vh++;
      return (vw, vh);
    }
  }
  return _exportDimensions(config);
}

bool _isFullFrameSlot(Rect r) =>
    r.left <= 0.001 && r.top <= 0.001 && r.width >= 0.99 && r.height >= 0.99;

/// Fit entire frame inside slot — no cropping (letterbox only when slot ≠ video aspect).
void _drawVideoContainInRect(
  html.CanvasRenderingContext2D ctx,
  html.VideoElement video,
  double dx,
  double dy,
  double dw,
  double dh,
) {
  var vw = video.videoWidth;
  var vh = video.videoHeight;
  if (vw <= 0 || vh <= 0) {
    ctx.drawImageScaled(video, dx, dy, dw, dh);
    return;
  }
  final videoAspect = vw / vh;
  final slotAspect = dw / dh;
  double drawW;
  double drawH;
  if (videoAspect > slotAspect) {
    drawW = dw;
    drawH = dw / videoAspect;
  } else {
    drawH = dh;
    drawW = dh * videoAspect;
  }
  final drawX = dx + (dw - drawW) / 2;
  final drawY = dy + (dh - drawH) / 2;
  ctx.drawImageScaled(video, drawX, drawY, drawW, drawH);
}

void _drawVideoInSlot(
  html.CanvasRenderingContext2D ctx,
  html.VideoElement video,
  Rect slot,
  double dx,
  double dy,
  double dw,
  double dh,
  int canvasW,
  int canvasH,
) {
  if (_isFullFrameSlot(slot)) {
    ctx.drawImageScaled(video, 0, 0, canvasW.toDouble(), canvasH.toDouble());
    return;
  }
  _drawVideoContainInRect(ctx, video, dx, dy, dw, dh);
}

double _resolveRecordingDuration(Iterable<html.VideoElement> videos) {
  var best = 0.0;
  for (final v in videos) {
    final d = v.duration;
    if (!d.isFinite || d <= 0) continue;
    if (d > best) best = d.toDouble();
  }
  if (best <= 0) best = 3.0;
  final cap = _ngmyIsMobileBrowser() ? _mobileMaxRecordSeconds : _maxRecordSeconds;
  return best.clamp(1.0, cap).toDouble();
}

Future<double> _resolveRecordingDurationAsync(Iterable<html.VideoElement> videos) async {
  for (final v in videos) {
    for (var i = 0; i < 100; i++) {
      if (v.duration.isFinite && v.duration > 0) break;
      await Future<void>.delayed(const Duration(milliseconds: 100));
    }
  }
  return _resolveRecordingDuration(videos);
}

DateTime _exportDeadlineFor(double durationSec) {
  final budgetSec = (durationSec + 120).ceil().clamp(180, (_maxRecordSeconds + 120).round());
  return DateTime.now().add(Duration(seconds: budgetSec));
}

DateTime _exportAttemptDeadline(double durationSec) {
  final budget = (durationSec * 1.35 + 25).ceil();
  final cap = _ngmyIsMobileBrowser() ? math.min(_exportWallCapSec, durationSec + 35) : _exportWallCapSec;
  return DateTime.now().add(Duration(seconds: math.min(budget, cap.ceil())));
}

Future<void> _playVideoForRecord(html.VideoElement v) async {
  try {
    await v.play().timeout(const Duration(seconds: 8));
  } catch (e) {
    debugPrint('[studio export] play for record: $e');
  }
}

double _exportProgress(double durationSec, double videoTimeSec, int wallMs, int durationMs) {
  if (durationSec <= 0 || durationMs <= 0) return 0.99;
  final fromVideo = (videoTimeSec / durationSec).clamp(0.0, 1.0);
  final fromWall = (wallMs / durationMs).clamp(0.0, 1.0);
  return math.max(fromVideo, fromWall).clamp(0.0, 0.99);
}

int _exportFps({bool seekFallback = false}) {
  if (_ngmyIsMobileBrowser()) return seekFallback ? 20 : 24;
  return _exportCanvasFps;
}

bool _ngmyIsAppleMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      (ua.contains('macintosh') && ua.contains('mobile'));
}

bool _ngmyIsMobileBrowser() {
  final ua = html.window.navigator.userAgent.toLowerCase();
  return _ngmyIsAppleMobileBrowser() || ua.contains('android');
}

List<String> _recorderMimeCandidates() {
  final out = <String>[];
  final candidates = _ngmyIsAppleMobileBrowser()
      ? [
          'video/mp4;codecs=avc1,mp4a',
          'video/mp4;codecs="avc1.42E01E, mp4a.40.2"',
          'video/mp4;codecs=h264,aac',
          'video/mp4',
        ]
      : [
          'video/webm;codecs=vp9,opus',
          'video/webm;codecs=vp8,opus',
          'video/webm;codecs=vp9',
          'video/webm;codecs=vp8',
          'video/webm',
          'video/mp4',
        ];
  for (final m in candidates) {
    if (html.MediaRecorder.isTypeSupported(m)) out.add(m);
  }
  if (out.isEmpty && _ngmyIsAppleMobileBrowser()) out.add('video/mp4');
  return out;
}

void _styleExportCanvas(html.CanvasElement canvas, int w, int h) {
  canvas
    ..style.position = 'fixed'
    ..style.left = '0'
    ..style.top = '0'
    ..style.width = '${w}px'
    ..style.height = '${h}px'
    ..style.opacity = '0.05'
    ..style.pointerEvents = 'none'
    ..style.zIndex = '2'
    ..style.transform = 'translateZ(0)';
  canvas.style.setProperty('will-change', 'transform');
}

html.MediaStream _videoOnlyStream(html.MediaStream source) {
  final out = html.MediaStream();
  for (final t in source.getVideoTracks()) {
    out.addTrack(t);
  }
  return out;
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
        final blob = await _ngmyBlobFromHref(href);
        if (blob != null && blob.type.contains('webm')) {
          return 'iPhone Photos cannot save WebM. Tap Download again — your video will export as MP4.';
        }
        if (blob != null) {
          await ngmyStageIosStudioVideoFromBlob(blob, safeName);
        } else {
          ngmyStageIosStudioVideo(href, safeName);
        }
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
  if (lower.contains('.webm')) {
    ext = 'webm';
  } else if (lower.contains('.mov')) {
    ext = 'mov';
  } else if (lower.contains('.m4v')) {
    ext = 'm4v';
  }

  final filename = 'ngmy_studio_${DateTime.now().millisecondsSinceEpoch}.$ext';

  try {
    if (src.startsWith('blob:') || src.startsWith('http') || src.startsWith('https') || src.startsWith('data:')) {
      final blob = await _ngmyBlobFromHref(src);
      if (blob != null && blob.size > 0) {
        var safeName = filename;
        if (blob.type.isNotEmpty) {
          if (blob.type.contains('webm')) {
            safeName = safeName.replaceAll(RegExp(r'\.[^.]+$'), '.webm');
          } else if (blob.type.contains('quicktime')) {
            safeName = safeName.replaceAll(RegExp(r'\.[^.]+$'), '.mov');
          } else if (blob.type.contains('mp4')) {
            safeName = safeName.replaceAll(RegExp(r'\.[^.]+$'), '.mp4');
          }
        }
        if (_ngmyIsAppleMobileBrowser() && blob.type.contains('webm')) {
          return 'iPhone Photos cannot save WebM. Re-export from a template with overlays, or upload an MP4/MOV clip.';
        }
        final url = html.Url.createObjectUrlFromBlob(blob);
        final mode = await ngmyTriggerBrowserDownload(url, safeName);
        Future<void>.delayed(const Duration(seconds: 60), () {
          try {
            html.Url.revokeObjectUrl(url);
          } catch (_) {}
        });
        return _ngmyDownloadResultMessage(mode);
      }
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

/// iPhone Photos only accepts MP4/MOV — never record WebM on Apple mobile browsers.
String? _pickRecorderMimeType() {
  if (_ngmyIsAppleMobileBrowser()) {
    for (final m in [
      'video/mp4',
      'video/mp4;codecs=avc1,mp4a',
      'video/mp4;codecs="avc1.42E01E, mp4a.40.2"',
      'video/mp4;codecs=h264',
    ]) {
      if (html.MediaRecorder.isTypeSupported(m)) return m;
    }
    return 'video/mp4';
  }
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

html.MediaRecorder? _createMediaRecorder(html.MediaStream stream, Map<String, dynamic> options) {
  final mime = options['mimeType'] as String?;
  if (mime != null && mime.isNotEmpty) {
    try {
      return html.MediaRecorder(stream, options);
    } catch (e) {
      debugPrint('[studio export] MediaRecorder($mime) failed: $e');
    }
  }
  try {
    final fallback = Map<String, dynamic>.from(options)..remove('mimeType');
    return html.MediaRecorder(stream, fallback.isEmpty ? null : fallback);
  } catch (e) {
    debugPrint('[studio export] MediaRecorder default failed: $e');
    return null;
  }
}

Future<void> _stopRecorderDrain(html.MediaRecorder recorder, Completer<void> done) async {
  if (recorder.state == 'recording') {
    for (var i = 0; i < 3; i++) {
      try {
        js_util.callMethod(recorder, 'requestData', const []);
      } catch (_) {}
      await Future<void>.delayed(const Duration(milliseconds: 80));
    }
    try {
      recorder.stop();
    } catch (_) {}
  }
  try {
    await done.future.timeout(const Duration(seconds: 12));
  } catch (_) {}
  await Future<void>.delayed(const Duration(milliseconds: 250));
}

Future<List<html.Blob>> _recordCanvasExport({
  required html.MediaStream stream,
  required String mimeType,
  required void Function() paintFrame,
  required int? Function()? samplePaintFingerprint,
  required List<html.VideoElement> videoList,
  required html.VideoElement? primaryVideo,
  required double durationSec,
  required void Function(double progress, String status) onProgress,
  required bool realtimePlayback,
  required bool withAudio,
}) async {
  final appleMobile = _ngmyIsAppleMobileBrowser();
  final recorderOptions = <String, dynamic>{
    'mimeType': mimeType,
    'videoBitsPerSecond': appleMobile ? 5500000 : (_ngmyIsMobileBrowser() ? 6500000 : _exportVideoBitsPerSecond),
  };
  if (stream.getAudioTracks().isNotEmpty) {
    recorderOptions['audioBitsPerSecond'] = _exportAudioBitsPerSecond;
  }

  final recorder = _createMediaRecorder(stream, recorderOptions);
  if (recorder == null) return const [];

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

  try {
    recorder.start(_recorderTimesliceMs);
  } catch (e) {
    debugPrint('[studio export] recorder.start failed: $e');
    return const [];
  }

  await Future<void>.delayed(const Duration(milliseconds: 200));

  final primary = primaryVideo ?? _pickPrimaryVideo(videoList);
  final useDedicatedAudio = withAudio && _exportAudioElement != null;
  final audioVideo = withAudio && !useDedicatedAudio ? primary : null;

  for (final v in videoList) {
    v.pause();
    v.playbackRate = 1.0;
    await _seekVideoTo(v, 0);
    if (withAudio && v == audioVideo) {
      v
        ..muted = false
        ..volume = 1.0
        ..defaultMuted = false;
      v.removeAttribute('muted');
    } else {
      v.muted = true;
    }
  }
  if (useDedicatedAudio && _exportAudioElement != null) {
    _exportAudioElement!
      ..pause()
      ..currentTime = 0
      ..playbackRate = 1.0
      ..muted = false
      ..volume = 1.0;
  }
  paintFrame();

  final durationMs = (durationSec * 1000).ceil().clamp(_minRecordMs, (_maxRecordSeconds * 1000).round());
  final deadline = _exportDeadlineFor(durationSec);
  final attemptDeadline = _exportAttemptDeadline(durationSec);
  final wallStart = DateTime.now();
  final wallEnd = wallStart.add(Duration(milliseconds: durationMs + 2000));
  final stallLimit = math.max(480, (durationSec * 8).round());
  final frozenLimit = _ngmyIsMobileBrowser() ? 120 : 48;
  final startupGraceMs = _ngmyIsMobileBrowser() ? 8000 : 3500;

  if (realtimePlayback) {
    onProgress(0.06, 'Starting playback…');
    for (final v in videoList) {
      if (_exportWasCancelled) return const [];
      v.playbackRate = 1.0;
      if (withAudio && v == audioVideo) {
        v
          ..muted = false
          ..volume = 1.0;
      } else {
        v.muted = true;
      }
      v.currentTime = 0;
      await _playVideoForRecord(v);
    }
    if (useDedicatedAudio) {
      await _syncExportAudioPlayback(primary, playing: true);
    }
    await _awaitVideoFramePulse(videoList);
    paintFrame();

    var tick = 0;
    var lastT = -1.0;
    var stallTicks = 0;
    var frozenPaintTicks = 0;
    int? lastFingerprint;
    var lastFingerprintT = -1.0;

    while (DateTime.now().isBefore(wallEnd) &&
        DateTime.now().isBefore(deadline) &&
        DateTime.now().isBefore(attemptDeadline)) {
      if (_exportWasCancelled) break;
      await _waitNextVideoFrame(primary);
      paintFrame();
      tick++;
      if (tick % 3 == 0) {
        await Future<void>.delayed(Duration.zero);
      }
      if (tick % 6 == 0) {
        try {
          js_util.callMethod(recorder, 'requestData', const []);
        } catch (_) {}
      }
      if (useDedicatedAudio && tick % 12 == 0) {
        await _syncExportAudioPlayback(primary, playing: true);
      }

      final t = primary != null ? primary.currentTime.toDouble() : 0.0;
      final wallMs = DateTime.now().difference(wallStart).inMilliseconds;
      if (wallMs > (_ngmyIsMobileBrowser() ? 14000 : 6000) && t < 0.08) {
        debugPrint('[studio export] video frozen at t=$t — aborting attempt');
        break;
      }
      if (wallMs >= startupGraceMs) {
        if ((t - lastT).abs() < 0.006) {
          stallTicks++;
        } else {
          stallTicks = 0;
          lastT = t;
        }
      } else {
        stallTicks = 0;
        lastT = t;
      }

      final fp = samplePaintFingerprint?.call();
      if (fp != null && t > 0.12 && wallMs > startupGraceMs) {
        if (fp == lastFingerprint && (t - lastFingerprintT) > 0.25) {
          frozenPaintTicks++;
        } else if (fp != lastFingerprint) {
          frozenPaintTicks = 0;
          lastFingerprint = fp;
          lastFingerprintT = t;
        }
      }

      final p = _exportProgress(durationSec, t, wallMs, durationMs);
      onProgress(p, _ngmyRecordingStatus(p));

      final ended = primary != null &&
          (primary.ended || primary.currentTime >= durationSec - 0.05);
      if (frozenPaintTicks > frozenLimit && wallMs > startupGraceMs + 1500) {
        debugPrint('[studio export] frozen canvas — will retry with seek-sync capture');
        break;
      }
      if (ended || t >= durationSec - 0.04 || wallMs >= durationMs || stallTicks > stallLimit) {
        break;
      }
    }
  } else {
    if (_exportWasCancelled) return const [];
    await _recordWallClockFrames(
      videoList: videoList,
      paintFrame: paintFrame,
      durationSec: durationSec,
      wallStart: wallStart,
      durationMs: durationMs,
      onProgress: onProgress,
      deadline: deadline,
      withAudio: withAudio,
      audioVideo: audioVideo,
      totalDurationSec: durationSec,
      totalDurationMs: durationMs,
      wallOffsetMs: 0,
    );
  }

  for (final v in videoList) {
    v.pause();
    v.playbackRate = 1.0;
  }
  if (_exportAudioElement != null) {
    _exportAudioElement!.pause();
  }

  paintFrame();
  await Future<void>.delayed(Duration(milliseconds: appleMobile ? 500 : 280));
  try {
    js_util.callMethod(recorder, 'requestData', const []);
  } catch (_) {}
  await _stopRecorderDrain(recorder, done);
  if (_exportWasCancelled) return const [];
  return chunks;
}

Future<void> _recordWallClockFrames({
  required List<html.VideoElement> videoList,
  required void Function() paintFrame,
  required double durationSec,
  required DateTime wallStart,
  required int durationMs,
  required void Function(double progress, String status) onProgress,
  required DateTime deadline,
  required bool withAudio,
  required html.VideoElement? audioVideo,
  double? totalDurationSec,
  int? totalDurationMs,
  int wallOffsetMs = 0,
}) async {
  final fullSec = totalDurationSec ?? durationSec;
  final fullMs = totalDurationMs ?? durationMs;
  final startSec = (wallOffsetMs / 1000.0).clamp(0.0, fullSec);
  final primary = audioVideo ?? _pickPrimaryVideo(videoList);
  final useDedicatedAudio = withAudio && _exportAudioElement != null;
  final segmentEndSec = (startSec + durationSec).clamp(0.0, fullSec);
  final attemptEnd = _exportAttemptDeadline(fullSec);

  for (final v in videoList) {
    v.pause();
    v.playbackRate = 1.0;
    v.muted = true;
    await _seekVideoTo(v, startSec);
  }

  if (useDedicatedAudio && _exportAudioElement != null) {
    _exportAudioElement!
      ..pause()
      ..currentTime = startSec
      ..muted = false
      ..volume = 1.0
      ..defaultMuted = false;
    _exportAudioElement!.removeAttribute('muted');
    await _playVideoForRecord(_exportAudioElement!);
  } else if (withAudio && audioVideo != null) {
    audioVideo
      ..muted = false
      ..volume = 1.0
      ..defaultMuted = false;
    audioVideo.removeAttribute('muted');
    audioVideo.currentTime = startSec;
    await _playVideoForRecord(audioVideo);
  }

  for (final v in videoList) {
    if (withAudio && !useDedicatedAudio && v == audioVideo) continue;
    v.currentTime = startSec;
    await _playVideoForRecord(v);
  }

  paintFrame();
  var tick = 0;
  var lastProgressT = -1.0;
  var noProgressTicks = 0;

  while (DateTime.now().isBefore(deadline) && DateTime.now().isBefore(attemptEnd)) {
    if (_exportWasCancelled) break;

    await _waitNextVideoFrame(primary);
    paintFrame();
    tick++;
    if (tick % 4 == 0) {
      await Future<void>.delayed(Duration.zero);
    }

    final t = useDedicatedAudio && _exportAudioElement != null
        ? _exportAudioElement!.currentTime.toDouble()
        : (withAudio && audioVideo != null
            ? audioVideo.currentTime.toDouble()
            : (primary?.currentTime.toDouble() ?? startSec));
    final wallMs = DateTime.now().difference(wallStart).inMilliseconds;
    final globalMs = wallOffsetMs + wallMs;

    if (wallMs > 12000 && (t - lastProgressT).abs() < 0.01) {
      noProgressTicks++;
      if (noProgressTicks > 90) {
        debugPrint('[studio export] playback stalled at t=$t — ending attempt');
        break;
      }
    } else if ((t - lastProgressT).abs() >= 0.01) {
      noProgressTicks = 0;
      lastProgressT = t;
    }

    final p = _exportProgress(fullSec, t, globalMs, fullMs);
    onProgress(p, _ngmyRecordingStatus(p));

    final ended = primary != null && (primary.ended || t >= segmentEndSec - 0.05);
    if (ended || globalMs >= wallOffsetMs + durationMs - 40) break;
  }

  for (final v in videoList) {
    v.pause();
  }
  if (_exportAudioElement != null) {
    _exportAudioElement!.pause();
  }

  onProgress(0.99, _ngmyRecordingStatus(0.99));
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

(int, int) _exportDimensions(NgmyVideoStudioExportConfig config) => (config.outputWidth, config.outputHeight);

void _appendWebAudioFromVideo(html.MediaStream composed, html.VideoElement video) {
  if (composed.getAudioTracks().isNotEmpty) return;
  if (_ngmyWebAudioSourceVideo == video) return;
  try {
    final ctor = js_util.getProperty(html.window, 'AudioContext') ??
        js_util.getProperty(html.window, 'webkitAudioContext');
    if (ctor == null) return;
    final ctxObj = (_ngmyExportAudioContext ?? js_util.callConstructor(ctor, const [])) as Object;
    _ngmyExportAudioContext = ctxObj;
    final src = js_util.callMethod(ctxObj, 'createMediaElementSource', [video]);
    _ngmyWebAudioSourceVideo = video;
    final dest = js_util.callMethod(ctxObj, 'createMediaStreamDestination', const []);
    js_util.callMethod(src, 'connect', [dest]);
    final stream = js_util.getProperty(dest, 'stream');
    if (stream is html.MediaStream) {
      for (final t in stream.getAudioTracks()) {
        composed.addTrack(t);
      }
    }
    js_util.callMethod(ctxObj, 'resume', const []);
  } catch (e) {
    debugPrint('[studio export] WebAudio audio attach failed: $e');
  }
}

void _appendVideoAudioTracks(html.MediaStream composed, html.VideoElement video) {
  if (composed.getAudioTracks().isNotEmpty) return;
  video
    ..muted = false
    ..volume = 1.0
    ..defaultMuted = false;
  video.removeAttribute('muted');
  _appendWebAudioFromVideo(composed, video);
  if (composed.getAudioTracks().isNotEmpty) return;
  try {
    final cap = video.captureStream();
    for (final t in cap.getAudioTracks()) {
      composed.addTrack(t);
      return;
    }
  } catch (e) {
    debugPrint('[studio export] captureStream audio failed: $e');
  }
}

Future<void> _attachExportAudio(html.MediaStream recordStream, html.VideoElement primary) async {
  final audioEl = await _ensureExportAudioElement(primary);
  _appendVideoAudioTracks(recordStream, audioEl ?? primary);
}

html.VideoElement? _pickPrimaryVideo(List<html.VideoElement> videoList) {
  if (videoList.isEmpty) return null;
  return videoList.first;
}

html.MediaStream? _safeCaptureStream(dynamic element, {int fps = _exportCanvasFps}) {
  for (var attempt = 0; attempt < 4; attempt++) {
    try {
      if (element is html.CanvasElement) {
        final stream = element.captureStream(fps);
        if (stream.getVideoTracks().isNotEmpty) return stream;
      } else if (element is html.VideoElement) {
        final stream = element.captureStream();
        if (stream.getVideoTracks().isNotEmpty) return stream;
      }
    } catch (e) {
      debugPrint('[studio export] captureStream attempt ${attempt + 1}: $e');
    }
    if (attempt < 3) {
      // Safari sometimes needs a painted frame before captureStream works.
      try {
        if (element is html.CanvasElement) {
          element.context2D.fillRect(0, 0, 1, 1);
        }
      } catch (_) {}
    }
  }
  return null;
}

bool _studioAllowsRawFallback(NgmyVideoStudioExportConfig config) {
  return config.newsBannerStyle == null &&
      !config.showTextOverlay &&
      config.logoDataUrlBySlot.isEmpty &&
      (config.backgroundAsset == null || config.backgroundAsset!.trim().isEmpty);
}

Future<String> _fallbackComposedExport(
  NgmyVideoStudioExportConfig config,
  Map<String, String> sources, {
  String? reason,
  bool? allowRawFallback,
}) async {
  final allowRaw = allowRawFallback ?? _studioAllowsRawFallback(config);
  if (config.needsComposedExport) {
    if (!allowRaw) {
      final detail = reason?.trim();
      final suffix = detail != null && detail.isNotEmpty ? ' ($detail)' : '';
      return 'Export failed: templates could not be merged$suffix. Try Chrome on a computer, or wait until the preview loads fully and tap Download again.';
    }
    final raw = await _downloadAllVideoClips(sources);
    if (raw.toLowerCase().contains('failed') || raw.contains('No video')) return raw;
    return 'Video saved — templates/logo could not be embedded on this device. '
        'For full studio export with overlays, use Chrome on a computer. ($raw)';
  }
  return _downloadAllVideoClips(sources);
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
  v.muted = true;
  v.defaultMuted = true;
  v.autoplay = false;
  v.setAttribute('playsinline', 'true');
  v.setAttribute('webkit-playsinline', 'true');
  v.setAttribute('muted', 'true');
  if (src.startsWith('http') && !src.startsWith('blob:')) {
    v.crossOrigin = 'anonymous';
  }
}

Future<String> exportNgmyVideoStudioComposed({
  required NgmyVideoStudioExportConfig config,
  void Function(double progress, String status)? onProgress,
}) async {
  _resetExportCancel();
  _cleanupExportElements();
  await _resumeExportAudioContext();
  final sources = config.videoSourcesBySlot;
  if (sources.isEmpty || sources.values.every((s) => s.trim().isEmpty)) {
    return 'Upload at least one video into a screen frame before downloading.';
  }

  if (!_webSupportsComposedCapture()) {
    onProgress?.call(0.5, 'Saving your video…');
    return _fallbackComposedExport(config, sources, reason: 'browser cannot capture canvas');
  }

  onProgress?.call(0.02, 'Loading your video…');

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
    onProgress?.call(0.06, 'Preparing studio export…');

    final metaOk = await Future.wait(videos.values.map(_waitVideoMeta));
    if (metaOk.contains(false)) {
      return 'Video could not load for export. Re-upload the clip and try Download again.';
    }
    final playOk = await Future.wait(videos.values.map(_waitVideoCanPlay));
    if (playOk.contains(false)) {
      return 'Video is still loading. Wait a moment and tap Download again.';
    }

    var durationSec = await _resolveRecordingDurationAsync(videos.values);

    html.VideoElement? primaryVideo;
    for (final e in config.slotRects.entries) {
      if ((config.slotKinds[e.key] ?? NgmySlotKind.video) == NgmySlotKind.video) {
        primaryVideo = videos[e.key];
        if (primaryVideo != null) break;
      }
    }

    onProgress?.call(0.08, 'Preparing overlay (${_formatDurationLabel(durationSec)})…');
    if (_ngmyIsMobileBrowser() && durationSec > 45) {
      onProgress?.call(0.09, 'Recording ${_formatDurationLabel(durationSec)} — keep this screen open…');
    }

    final (w, h) = _resolveExportCanvasSize(config, primaryVideo);
    for (final v in videos.values) {
      _applyExportVideoStaging(v);
    }
    html.ImageElement? bannerOverlay;
    if (config.newsBannerStyle != null) {
      try {
        bannerOverlay = await _renderNewsBannerOverlay(config, w, h).timeout(const Duration(seconds: 25));
      } catch (e) {
        debugPrint('[studio export] banner overlay failed: $e');
      }
    }
    exportCanvas = html.CanvasElement(width: w, height: h);
    final canvas = exportCanvas!;
    final ctx = canvas.context2D;

    _styleExportCanvas(canvas, w, h);
    html.document.body?.append(canvas);

    final startMs = DateTime.now().millisecondsSinceEpoch;

    try {
      ctx.imageSmoothingEnabled = true;
      js_util.setProperty(ctx, 'imageSmoothingQuality', 'high');
    } catch (_) {}

    int? paintFingerprint;

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
          if (video.readyState >= html.MediaElement.HAVE_CURRENT_DATA) {
            _drawVideoInSlot(ctx, video, r, dx, dy, dw, dh, w, h);
            if (video == primaryVideo) {
              paintFingerprint = _sampleCanvasPixel(
                ctx,
                (dx + dw / 2).round().clamp(0, w - 1),
                (dy + dh / 2).round().clamp(0, h - 1),
              );
            }
          }
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

    for (final v in videos.values) {
      v.muted = true;
      v.pause();
      await _seekVideoTo(v, 0);
    }
    for (var i = 0; i < 6; i++) {
      paintFrame();
      await Future<void>.delayed(const Duration(milliseconds: 50));
    }

    final recordFps = _exportFps();
    final canvasStream = _safeCaptureStream(canvas, fps: recordFps);
    if (canvasStream == null || canvasStream.getVideoTracks().isEmpty) {
      exportCanvas?.remove();
      for (final v in videos.values) {
        v.remove();
      }
      for (final i in logos.values) {
        i.remove();
      }
      return _fallbackComposedExport(
        config,
        sources,
        reason: 'canvas capture unavailable',
        allowRawFallback: false,
      );
    }

    usedCanvasStream = true;
    final videoList = videos.values.toList();
    final mimeCandidates = _recorderMimeCandidates();
    if (mimeCandidates.isEmpty) {
      return _fallbackComposedExport(config, sources, reason: 'recording not supported');
    }

    onProgress?.call(0.05, _ngmyRecordingStatus(0.05));

    List<html.Blob> chunks = const [];
    String? mimeType;
    final primaryMime = mimeCandidates.first;
    final fallbackMime = mimeCandidates.length > 1 ? mimeCandidates[1] : primaryMime;

    Future<({List<html.Blob> chunks, bool hadAudio})> tryRecord(
      String mime, {
      required bool withAudio,
      required bool realtime,
    }) async {
      if (_exportWasCancelled) return (chunks: const <html.Blob>[], hadAudio: false);
      final recordStream = _videoOnlyStream(canvasStream);
      var hadAudio = false;
      if (withAudio) {
        final audioSrc = primaryVideo ?? _pickPrimaryVideo(videoList);
        if (audioSrc != null) {
          await _attachExportAudio(recordStream, audioSrc);
          hadAudio = recordStream.getAudioTracks().isNotEmpty;
        }
      }
      if (recordStream.getVideoTracks().isEmpty) return (chunks: const <html.Blob>[], hadAudio: false);
      final chunks = await _recordCanvasExport(
        stream: recordStream,
        mimeType: mime,
        paintFrame: paintFrame,
        samplePaintFingerprint: () => paintFingerprint,
        videoList: videoList,
        primaryVideo: primaryVideo,
        durationSec: durationSec,
        onProgress: (p, s) => onProgress?.call(p, s),
        realtimePlayback: realtime,
        withAudio: hadAudio,
      );
      return (chunks: chunks, hadAudio: hadAudio);
    }

    final appleMobile = _ngmyIsAppleMobileBrowser();
    // Realtime playback is fastest — one pass through the clip. Avoid slow per-frame seek on phones.
    final plans = appleMobile
        ? [
            (mime: primaryMime, audio: true, realtime: true),
            (mime: fallbackMime, audio: true, realtime: true),
          ]
        : [
            (mime: primaryMime, audio: true, realtime: true),
            (mime: primaryMime, audio: true, realtime: false),
            (mime: fallbackMime, audio: true, realtime: true),
            (mime: primaryMime, audio: false, realtime: true),
          ];

    List<html.Blob>? silentFallbackChunks;
    String? silentFallbackMime;

    for (var i = 0; i < plans.length; i++) {
      if (_exportWasCancelled) break;
      final plan = plans[i];
      onProgress?.call(
        0.05 + (i * 0.01),
        'Recording template… (attempt ${i + 1}/${plans.length})',
      );
      final result = await tryRecord(plan.mime, withAudio: plan.audio, realtime: plan.realtime);
      if (_exportWasCancelled) break;
      if (result.chunks.isEmpty) {
        debugPrint('[studio export] retry mime=${plan.mime} audio=${plan.audio} realtime=${plan.realtime}');
        continue;
      }
      if (result.hadAudio || appleMobile) {
        chunks = result.chunks;
        mimeType = plan.mime;
        break;
      }
      silentFallbackChunks ??= result.chunks;
      silentFallbackMime ??= plan.mime;
      debugPrint('[studio export] video ok, no audio yet — mime=${plan.mime}');
    }

    if (chunks.isEmpty && silentFallbackChunks != null) {
      chunks = silentFallbackChunks;
      mimeType = silentFallbackMime;
    }

    if (_exportWasCancelled) {
      return 'Export cancelled.';
    }

    onProgress?.call(1.0, 'Saving your file…');

    if (chunks.isEmpty || mimeType == null) {
      debugPrint('[studio export] all recording attempts failed');
      return _fallbackComposedExport(
        config,
        sources,
        reason: 'recording produced no data — try Chrome on desktop for smooth export with sound',
        allowRawFallback: false,
      );
    }

    if (chunks.isNotEmpty && mimeType != null && silentFallbackChunks != null && chunks == silentFallbackChunks) {
      debugPrint('[studio export] warning: exported without audio track');
    }

    final apple = _ngmyIsAppleMobileBrowser();
    var blobType = mimeType.contains('webm') ? 'video/webm' : 'video/mp4';
    var ext = blobType.contains('webm') ? 'webm' : 'mp4';
    if (apple) {
      if (blobType.contains('webm')) {
        debugPrint('[studio export] WebM on iOS — falling back to original MP4 clip(s)');
        return _fallbackComposedExport(
          config,
          sources,
          reason: 'iPhone needs MP4 export',
          allowRawFallback: _studioAllowsRawFallback(config),
        );
      }
      blobType = 'video/mp4';
      ext = 'mp4';
    }
    final blob = html.Blob(chunks, blobType);
    final filename = 'ngmy_${config.format.name}_${w}x${h}_$startMs.$ext';
    if (apple) {
      try {
        await ngmyStageIosStudioVideoFromBlob(blob, filename);
      } catch (e) {
        debugPrint('[studio export] iOS stage failed: $e');
        return _fallbackComposedExport(config, sources, reason: 'could not stage video on iPhone');
      }
      if (!usedCanvasStream) {
        return '${_ngmyDownloadResultMessage('ios_pending')} (Full studio merge works best in Chrome on desktop.)';
      }
      return _ngmyDownloadResultMessage('ios_pending');
    }
    final url = html.Url.createObjectUrlFromBlob(blob);
    final mode = await ngmyTriggerBrowserDownload(url, filename);
    if (!usedCanvasStream && config.needsComposedExport) {
      return 'Export failed: templates were not baked into the file. Use Chrome on a computer and try again.';
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
    return _fallbackComposedExport(config, sources, reason: 'export crashed');
  } finally {
    _cleanupExportElements();
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

Future<html.ImageElement?> _renderNewsBannerOverlay(NgmyVideoStudioExportConfig config, int w, int h) async {
  for (final scale in [1.0, 0.75, 0.5]) {
    final rw = math.max(320, (w * scale).round());
    final rh = math.max(320, (h * scale).round());
    try {
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
        textStyle: config.bannerTextStyle,
      ).paint(canvas, Size(rw.toDouble(), rh.toDouble()));
      final picture = recorder.endRecording();
      final image = await picture.toImage(rw, rh).timeout(const Duration(seconds: 25));
      final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
      if (bytes == null) continue;
      final blob = html.Blob([bytes.buffer.asUint8List()], 'image/png');
      final url = html.Url.createObjectUrlFromBlob(blob);
      final img = html.ImageElement()
        ..src = url
        ..width = w
        ..height = h;
      await img.onLoad.first.timeout(const Duration(seconds: 12));
      return img;
    } catch (e) {
      debugPrint('[studio export] banner overlay render scale=$scale failed: $e');
    }
  }
  return null;
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
