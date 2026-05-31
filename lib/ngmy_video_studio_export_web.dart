import 'dart:async';
import 'dart:html' as html;
import 'dart:math' as math;

import 'ngmy_video_studio_models.dart';

Future<String> exportNgmyVideoStudioComposed({
  required NgmyVideoStudioExportConfig config,
  void Function(double progress)? onProgress,
}) async {
  final sources = config.videoSourcesBySlot;
  if (sources.isEmpty || sources.values.every((s) => s.trim().isEmpty)) {
    return 'Upload at least one video into a screen frame before downloading.';
  }

  final videos = <String, html.VideoElement>{};
  for (final e in sources.entries) {
    if (e.value.trim().isEmpty) continue;
    final v = html.VideoElement()
      ..src = e.value
      ..crossOrigin = 'anonymous'
      ..preload = 'auto'
      ..muted = false;
    v.style.display = 'none';
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
    await img.onLoad.first;
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
        await img.onLoad.first;
        backdrop = img;
        break;
      } catch (_) {}
    }
  }

  try {
    await Future.wait(videos.values.map((v) => v.onLoadedMetadata.first));

    var durationSec = 3.0;
    for (final v in videos.values) {
      if (v.duration.isFinite && v.duration > durationSec) durationSec = v.duration.toDouble();
    }

    final w = config.outputWidth;
    final h = config.outputHeight;
    final canvas = html.CanvasElement(width: w, height: h);
    final ctx = canvas.context2D;

    final composed = html.MediaStream();
    for (final t in canvas.captureStream(30).getVideoTracks()) {
      composed.addTrack(t);
    }
    for (final t in videos.values.first.captureStream().getAudioTracks()) {
      composed.addTrack(t);
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
      v.currentTime = 0;
    }
    await Future.wait(videos.values.map((v) => v.play()));

    recorder.start(250);
    var stopped = false;
    final startMs = DateTime.now().millisecondsSinceEpoch;

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

      if (config.showTextOverlay) {
        _drawTextOverlay(ctx, w.toDouble(), h.toDouble(), config);
      }

      final t = videos.values.first.currentTime;
      onProgress?.call((t / durationSec).clamp(0.0, 1.0));

      if (t >= durationSec - 0.04 || videos.values.first.ended) {
        stopped = true;
        for (final v in videos.values) {
          v.pause();
        }
        if (recorder.state != 'inactive') recorder.stop();
        return;
      }
      html.window.requestAnimationFrame(drawFrame);
    }

    html.window.requestAnimationFrame(drawFrame);

    await Future.any([
      done.future,
      Future.delayed(Duration(milliseconds: ((durationSec + 12) * 1000).round())),
    ]);

    if (!done.isCompleted) {
      try {
        recorder.stop();
      } catch (_) {}
      await done.future.timeout(const Duration(seconds: 3), onTimeout: () {});
    }

    final blob = html.Blob(chunks, mimeType);
    final ext = mimeType!.contains('mp4') ? 'mp4' : 'webm';
    final filename = 'ngmy_${config.format.name}_${config.outputWidth}x${config.outputHeight}_$startMs.$ext';
    final url = html.Url.createObjectUrlFromBlob(blob);
    html.AnchorElement(href: url)
      ..download = filename
      ..click();
    html.Url.revokeObjectUrl(url);
    return 'Downloaded $filename';
  } finally {
    for (final v in videos.values) {
      v.remove();
    }
    for (final i in logos.values) {
      i.remove();
    }
  }
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
