import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_studio_slot_video_io.dart' if (dart.library.html) 'ngmy_studio_slot_video_stub.dart' as slot_io;

/// Local video preview for a studio frame — play, pause, replay before download.
class NgmyStudioSlotVideo extends StatefulWidget {
  final String? source;
  final bool trySoundOnLoad;
  final bool playbackEnabled;

  const NgmyStudioSlotVideo({
    super.key,
    required this.source,
    this.trySoundOnLoad = false,
    this.playbackEnabled = true,
  });

  @override
  State<NgmyStudioSlotVideo> createState() => _NgmyStudioSlotVideoState();
}

class _NgmyStudioSlotVideoState extends State<NgmyStudioSlotVideo> {
  VideoPlayerController? _controller;
  String? _error;
  int _generation = 0;
  bool _playing = false;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  @override
  void didUpdateWidget(covariant NgmyStudioSlotVideo oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.source != widget.source) {
      unawaited(_load());
    } else if (oldWidget.playbackEnabled != widget.playbackEnabled) {
      final c = _controller;
      if (c != null && c.value.isInitialized) {
        if (widget.playbackEnabled) {
          if (!_playing) unawaited(c.play());
        } else {
          unawaited(c.pause());
        }
      }
    }
  }

  Future<void> _load() async {
    final src = widget.source?.trim() ?? '';
    final gen = ++_generation;
    final old = _controller;
    _controller = null;
    old?.removeListener(_onTick);
    if (old != null) {
      try {
        await old.dispose();
      } catch (_) {}
    }
    if (!mounted) return;
    setState(() {
      _error = null;
      _playing = false;
    });

    if (src.isEmpty) return;

    VideoPlayerController? c;
    try {
      await Future<void>.delayed(Duration.zero);
      if (gen != _generation || !mounted) return;

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
      c.setVolume(1.0);
      c.addListener(_onTick);
      _controller = c;
      if (widget.trySoundOnLoad && widget.playbackEnabled) {
        try {
          await c.play();
          if (mounted) setState(() => _playing = true);
        } catch (e) {
          debugPrint('[studio slot video] autoplay with sound: $e');
        }
      }
      if (mounted) setState(() {});
    } catch (e) {
      if (c != null) {
        try {
          c.removeListener(_onTick);
          await c.dispose();
        } catch (_) {}
      }
      if (gen != _generation || !mounted) return;
      final msg =
          e is TimeoutException
              ? e.message!
              : e is StateError
              ? e.message
              : 'Could not load video preview';
      setState(() => _error = msg);
    }
  }

  void _onTick() {
    final c = _controller;
    if (c == null || !mounted) return;
    final playing = c.value.isPlaying;
    if (playing != _playing) setState(() => _playing = playing);
  }

  Future<void> _togglePlay() async {
    if (!widget.playbackEnabled) return;
    final c = _controller;
    if (c == null || !c.value.isInitialized) return;
    try {
      if (c.value.isPlaying) {
        await c.pause();
      } else {
        await c.play();
      }
      if (mounted) setState(() => _playing = c.value.isPlaying);
    } catch (e) {
      debugPrint('[studio slot video] play: $e');
    }
  }

  Future<void> _replay() async {
    final c = _controller;
    if (c == null || !c.value.isInitialized) return;
    try {
      await c.seekTo(Duration.zero);
      await c.play();
      if (mounted) setState(() => _playing = true);
    } catch (e) {
      debugPrint('[studio slot video] replay: $e');
    }
  }

  @override
  void dispose() {
    _generation++;
    final c = _controller;
    _controller = null;
    c?.removeListener(_onTick);
    if (c != null) {
      unawaited(c.dispose().catchError((_) {}));
    }
    super.dispose();
  }

  Widget _controlsOverlay() {
    return Positioned(
      left: 6,
      right: 6,
      bottom: 6,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          _ctrlBtn(
            icon: _playing ? Icons.pause_rounded : Icons.play_arrow_rounded,
            label: _playing ? 'Pause' : 'Play',
            onTap: () => unawaited(_togglePlay()),
          ),
          const SizedBox(width: 8),
          _ctrlBtn(icon: Icons.replay_rounded, label: 'Replay', onTap: () => unawaited(_replay())),
        ],
      ),
    );
  }

  Widget _ctrlBtn({required IconData icon, required String label, required VoidCallback onTap}) {
    return Material(
      color: Colors.black54,
      borderRadius: BorderRadius.circular(20),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(20),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, color: Colors.white, size: 20),
              const SizedBox(width: 4),
              Text(label, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w700)),
            ],
          ),
        ),
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
          TextButton(onPressed: () => unawaited(_load()), child: const Text('Retry', style: TextStyle(fontSize: 11))),
        ],
      ),
    );
  }

  Widget _nativePlayer() {
    if (_error != null) return _errorBox();

    final c = _controller;
    final ready = c != null && c.value.isInitialized && !c.value.hasError;

    return Stack(
      fit: StackFit.expand,
      children: [
        if (!ready)
          Container(
            color: Colors.black,
            alignment: Alignment.center,
            child: const SizedBox(
              width: 24,
              height: 24,
              child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white54),
            ),
          ),
        if (c != null)
          ValueListenableBuilder<VideoPlayerValue>(
            valueListenable: c,
            builder: (context, value, _) {
              if (value.hasError) {
                return _errorBox();
              }
              if (!value.isInitialized) return const SizedBox.shrink();
              final w = value.size.width > 0 ? value.size.width : 16.0;
              final h = value.size.height > 0 ? value.size.height : 9.0;
              return GestureDetector(
                onTap: () => unawaited(_togglePlay()),
                child: FittedBox(
                  fit: BoxFit.cover,
                  clipBehavior: Clip.hardEdge,
                  child: SizedBox(width: w, height: h, child: VideoPlayer(c)),
                ),
              );
            },
          ),
        if (ready) _controlsOverlay(),
        if (ready && !_playing)
          Center(
            child: Material(
              color: Colors.black45,
              shape: const CircleBorder(),
              child: IconButton(
                iconSize: 40,
                color: Colors.white,
                icon: const Icon(Icons.play_circle_fill_rounded),
                onPressed: () => unawaited(_togglePlay()),
              ),
            ),
          ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    final src = widget.source?.trim() ?? '';
    if (src.isEmpty) return const SizedBox.shrink();

    return LayoutBuilder(
      builder: (context, constraints) {
        final tooSmall = constraints.maxWidth < 8 || constraints.maxHeight < 8;
        if (tooSmall) {
          return Container(color: Colors.black87);
        }
        return ClipRect(child: _nativePlayer());
      },
    );
  }
}
