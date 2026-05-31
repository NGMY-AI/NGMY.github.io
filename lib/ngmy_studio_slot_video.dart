import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_studio_html_video.dart' if (dart.library.io) 'ngmy_studio_html_video_stub.dart' as html_vid;
import 'ngmy_studio_slot_video_io.dart' if (dart.library.html) 'ngmy_studio_slot_video_stub.dart' as slot_io;

/// Local video preview for a studio frame — no network upload.
class NgmyStudioSlotVideo extends StatefulWidget {
  final String? source;

  const NgmyStudioSlotVideo({super.key, required this.source});

  @override
  State<NgmyStudioSlotVideo> createState() => _NgmyStudioSlotVideoState();
}

class _NgmyStudioSlotVideoState extends State<NgmyStudioSlotVideo> {
  VideoPlayerController? _controller;
  String? _error;
  int _generation = 0;

  bool get _useWebHtml {
    if (!kIsWeb) return false;
    final s = widget.source?.trim() ?? '';
    return s.startsWith('blob:') || s.startsWith('http://') || s.startsWith('https://') || s.startsWith('data:');
  }

  @override
  void initState() {
    super.initState();
    if (!_useWebHtml) {
      unawaited(_load());
    }
  }

  @override
  void didUpdateWidget(covariant NgmyStudioSlotVideo oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.source != widget.source && !_useWebHtml) {
      unawaited(_load());
    }
  }

  Future<void> _load() async {
    final src = widget.source?.trim() ?? '';
    final gen = ++_generation;
    final old = _controller;
    _controller = null;
    if (old != null) {
      try {
        await old.dispose();
      } catch (_) {}
    }
    if (!mounted) return;
    setState(() => _error = null);

    if (src.isEmpty) return;

    VideoPlayerController? c;
    try {
      c = slot_io.createStudioVideoController(src);
      if (c == null) {
        throw StateError('This device cannot preview that video format.');
      }

      await c.initialize().timeout(
        const Duration(seconds: 45),
        onTimeout: () => throw TimeoutException('Video preview timed out'),
      );
      if (gen != _generation || !mounted) {
        await c.dispose();
        return;
      }
      await c.setLooping(true);
      unawaited(c.play());
      _controller = c;
      if (mounted) setState(() {});
    } catch (e) {
      if (c != null) {
        try {
          await c.dispose();
        } catch (_) {}
      }
      if (gen != _generation || !mounted) return;
      setState(() => _error = e is TimeoutException ? e.message! : e.toString());
    }
  }

  @override
  void dispose() {
    _generation++;
    final c = _controller;
    _controller = null;
    if (c != null) {
      unawaited(c.dispose().catchError((_) {}));
    }
    super.dispose();
  }

  Widget _localAttachedPlaceholder() {
    return Container(
      color: Colors.black,
      alignment: Alignment.center,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(Icons.check_circle_rounded, color: Colors.greenAccent.shade400, size: 36),
          const SizedBox(height: 6),
          Text(
            'Video added',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.9), fontSize: 11, fontWeight: FontWeight.w800),
          ),
          const SizedBox(height: 2),
          Text(
            'On your device only',
            style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 9),
          ),
        ],
      ),
    );
  }

  Widget _errorBox() {
    return Container(
      color: Colors.black87,
      alignment: Alignment.center,
      padding: const EdgeInsets.all(8),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          const Icon(Icons.error_outline, color: Colors.redAccent, size: 28),
          const SizedBox(height: 6),
          Text(
            _error ?? 'Video failed',
            textAlign: TextAlign.center,
            style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 10),
          ),
          TextButton(
            onPressed: () => unawaited(_load()),
            child: const Text('Retry', style: TextStyle(fontSize: 11)),
          ),
        ],
      ),
    );
  }

  Widget _nativePlayer() {
    final c = _controller;
    if (_error != null) return _errorBox();

    final ready = c != null && c.value.isInitialized && !c.value.hasError;

    return Stack(
      fit: StackFit.expand,
      children: [
        if (!ready) _localAttachedPlaceholder(),
        if (c != null)
          ValueListenableBuilder<VideoPlayerValue>(
            valueListenable: c,
            builder: (context, value, _) {
              if (!value.isInitialized || value.hasError) {
                return const SizedBox.shrink();
              }
              final w = value.size.width > 0 ? value.size.width : 16.0;
              final h = value.size.height > 0 ? value.size.height : 9.0;
              return Opacity(
                opacity: ready ? 1 : 0,
                child: FittedBox(
                  fit: BoxFit.cover,
                  clipBehavior: Clip.hardEdge,
                  child: SizedBox(width: w, height: h, child: VideoPlayer(c)),
                ),
              );
            },
          ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final src = widget.source?.trim() ?? '';
    if (src.isEmpty) {
      return const SizedBox.shrink();
    }

    if (_useWebHtml) {
      return html_vid.NgmyStudioHtmlVideo(key: ValueKey(src), source: src);
    }

    return _nativePlayer();
  }
}
