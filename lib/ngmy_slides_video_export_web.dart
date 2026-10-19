// ignore: avoid_web_libraries_in_flutter
import 'dart:async';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'ngmy_slides_models.dart';
import 'ngmy_slides_render.dart';

/// Video size: the long edge of the slide, in pixels.
const double _kVideoLongEdge = 1280;

/// Recorded in real time, so a slide shown for 5 seconds is 5 seconds of video.
const int _kVideoFps = 30;

/// How long to let a slide's pictures and fonts settle before it is captured.
const Duration _kSlideSettle = Duration(milliseconds: 450);

String? _pickVideoType() {
  const candidates = [
    'video/webm;codecs=vp9',
    'video/webm;codecs=vp8',
    'video/webm',
    'video/mp4',
  ];
  for (final c in candidates) {
    try {
      if (html.MediaRecorder.isTypeSupported(c)) return c;
    } catch (_) {}
  }
  return null;
}

/// Records every slide, each for its own number of seconds, into one video and saves it.
/// Returns a message to show when something went wrong, or null when the video was saved.
Future<String?> ngmyExportSlidesVideo(BuildContext context, NgmySlideDeck deck) async {
  if (deck.slides.isEmpty) return 'This presentation has no slides.';
  final mime = _pickVideoType();
  if (mime == null) return 'This browser cannot record video. Try Chrome, Edge, or a recent Safari.';

  final aspect = deck.aspectValue;
  var w = (aspect >= 1 ? _kVideoLongEdge : _kVideoLongEdge * aspect).round();
  var h = (aspect >= 1 ? _kVideoLongEdge / aspect : _kVideoLongEdge).round();
  w -= w % 2;
  h -= h % 2;

  final overlay = Overlay.of(context, rootOverlay: true);
  final navigator = Navigator.of(context, rootNavigator: true);
  final boundaryKey = GlobalKey();
  final current = ValueNotifier<NgmySlide>(deck.slides.first);
  final status = ValueNotifier<String>('Getting ready…');
  final progress = ValueNotifier<double>(0);

  // The slide is drawn under the progress screen, where it is not seen, and captured from there.
  final entry = OverlayEntry(
    builder: (_) => Positioned(
      left: 0,
      top: 0,
      width: w.toDouble(),
      height: h.toDouble(),
      child: RepaintBoundary(
        key: boundaryKey,
        child: ValueListenableBuilder<NgmySlide>(
          valueListenable: current,
          builder: (_, slide, __) => NgmySlideAnimatedRender(key: ValueKey(slide.id), slide: slide, animate: false),
        ),
      ),
    ),
  );
  overlay.insert(entry);
  unawaited(showDialog<void>(
    context: context,
    barrierDismissible: false,
    barrierColor: const Color(0xFF0B1220),
    useRootNavigator: true,
    builder: (_) => PopScope(
      canPop: false,
      child: Center(child: _VideoProgress(status: status, progress: progress)),
    ),
  ));

  Future<ui.Image> grab() async {
    await WidgetsBinding.instance.endOfFrame;
    await Future<void>.delayed(_kSlideSettle);
    await WidgetsBinding.instance.endOfFrame;
    final ro = boundaryKey.currentContext?.findRenderObject();
    if (ro is! RenderRepaintBoundary) throw 'Could not draw the slide.';
    return ro.toImage(pixelRatio: 1.0);
  }

  Future<html.ImageElement> toElement(ui.Image image) async {
    final data = await image.toByteData(format: ui.ImageByteFormat.png);
    if (data == null) throw 'Could not read the slide picture.';
    final blob = html.Blob([data.buffer.asUint8List()], 'image/png');
    final url = html.Url.createObjectUrlFromBlob(blob);
    final el = html.ImageElement(src: url);
    await el.onLoad.first.timeout(const Duration(seconds: 10));
    html.Url.revokeObjectUrl(url);
    return el;
  }

  html.MediaRecorder? recorder;
  try {
    final canvas = html.CanvasElement(width: w, height: h);
    final ctx = canvas.context2D;
    final stream = canvas.captureStream(_kVideoFps);
    final chunks = <html.Blob>[];
    recorder = html.MediaRecorder(stream, {'mimeType': mime, 'videoBitsPerSecond': 8000000});
    recorder.addEventListener('dataavailable', (event) {
      final data = (event as html.BlobEvent).data;
      if (data != null && data.size > 0) chunks.add(data);
    });
    final stopped = Completer<void>();
    recorder.addEventListener('stop', (_) {
      if (!stopped.isCompleted) stopped.complete();
    });

    // The first slide is on the canvas before recording starts, so the video has no blank start.
    status.value = 'Drawing slide 1 of ${deck.slides.length}…';
    var frame = await toElement(await grab());
    ctx.drawImageScaled(frame, 0, 0, w, h);
    recorder.start(200);

    for (var i = 0; i < deck.slides.length; i++) {
      final slide = deck.slides[i];
      if (i > 0) {
        status.value = 'Drawing slide ${i + 1} of ${deck.slides.length}…';
        current.value = slide;
        frame = await toElement(await grab());
      }
      ctx.drawImageScaled(frame, 0, 0, w, h);
      // Each slide stays for the seconds set on it (or the presentation's timer).
      final seconds = (slide.durationSeconds > 0 ? slide.durationSeconds : deck.autoAdvanceSeconds).clamp(1, 120);
      status.value = 'Recording slide ${i + 1} of ${deck.slides.length} · $seconds s';
      final end = DateTime.now().add(Duration(seconds: seconds));
      while (DateTime.now().isBefore(end)) {
        // Redrawing keeps the recorder receiving frames while the slide holds still.
        ctx.drawImageScaled(frame, 0, 0, w, h);
        await Future<void>.delayed(const Duration(milliseconds: 100));
      }
      progress.value = (i + 1) / deck.slides.length;
    }

    status.value = 'Saving your video…';
    recorder.stop();
    await stopped.future.timeout(const Duration(seconds: 15));

    final type = mime.split(';').first;
    final blob = html.Blob(chunks, type);
    final url = html.Url.createObjectUrlFromBlob(blob);
    final ext = type == 'video/mp4' ? 'mp4' : 'webm';
    final safe = deck.name.trim().replaceAll(RegExp(r'[^\w\-. ]+'), '_').trim();
    final anchor = html.AnchorElement(href: url)
      ..download = '${safe.isEmpty ? 'presentation' : safe}.$ext'
      ..style.display = 'none';
    html.document.body?.append(anchor);
    anchor.click();
    anchor.remove();
    Future<void>.delayed(const Duration(minutes: 2), () => html.Url.revokeObjectUrl(url));
    return null;
  } catch (e) {
    try {
      if (recorder != null && recorder.state != 'inactive') recorder.stop();
    } catch (_) {}
    return 'Could not make the video: $e';
  } finally {
    entry.remove();
    if (navigator.canPop()) navigator.pop();
    current.dispose();
    status.dispose();
    progress.dispose();
  }
}

/// The screen shown while the video is being recorded.
class _VideoProgress extends StatelessWidget {
  const _VideoProgress({required this.status, required this.progress});
  final ValueNotifier<String> status;
  final ValueNotifier<double> progress;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: Container(
        margin: const EdgeInsets.symmetric(horizontal: 32),
        constraints: const BoxConstraints(maxWidth: 360),
        padding: const EdgeInsets.fromLTRB(24, 24, 24, 22),
        decoration: BoxDecoration(
          color: const Color(0xFF111827),
          borderRadius: BorderRadius.circular(24),
          border: Border.all(color: const Color(0xFF334155)),
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 56,
              height: 56,
              decoration: const BoxDecoration(
                shape: BoxShape.circle,
                gradient: LinearGradient(colors: [Color(0xFF8B5CF6), Color(0xFFDB2777)]),
              ),
              child: const Icon(Icons.movie_creation_rounded, color: Colors.white, size: 28),
            ),
            const SizedBox(height: 16),
            const Text('Making your video',
                style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
            const SizedBox(height: 6),
            ValueListenableBuilder<String>(
              valueListenable: status,
              builder: (_, s, __) =>
                  Text(s, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF94A3B8), fontSize: 13.5)),
            ),
            const SizedBox(height: 16),
            ValueListenableBuilder<double>(
              valueListenable: progress,
              builder: (_, p, __) => ClipRRect(
                borderRadius: BorderRadius.circular(99),
                child: LinearProgressIndicator(
                  value: p == 0 ? null : p,
                  minHeight: 8,
                  backgroundColor: const Color(0xFF1E293B),
                  color: const Color(0xFFDB2777),
                ),
              ),
            ),
            const SizedBox(height: 12),
            const Text('Keep this page open until it finishes.',
                style: TextStyle(color: Color(0xFF64748B), fontSize: 12)),
          ],
        ),
      ),
    );
  }
}
