import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Inline blob preview on web — no native controls (iOS Safari fullscreen safe).
class NgmyStudioHtmlVideo extends StatefulWidget {
  final String source;
  final bool trySoundOnLoad;
  final bool playbackEnabled;

  const NgmyStudioHtmlVideo({
    super.key,
    required this.source,
    this.trySoundOnLoad = false,
    this.playbackEnabled = true,
  });

  @override
  State<NgmyStudioHtmlVideo> createState() => _NgmyStudioHtmlVideoState();
}

class _NgmyStudioHtmlVideoState extends State<NgmyStudioHtmlVideo> {
  late final String _viewType;
  html.VideoElement? _video;
  bool _playing = false;
  bool _ready = false;
  bool _muted = true;
  bool _userPaused = false;
  String? _error;
  Timer? _playWatchdog;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-studio-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _video =
          html.VideoElement()
            ..src = widget.source
            ..controls = false
            ..preload = 'auto'
            ..loop = true
            ..muted = true
            ..defaultMuted = true
            ..autoplay = true
            ..setAttribute('playsinline', 'true')
            ..setAttribute('webkit-playsinline', 'true')
            ..setAttribute('muted', 'true')
            ..setAttribute('x-webkit-airplay', 'deny')
            ..style.width = '100%'
            ..style.height = '100%'
            ..style.objectFit = 'cover'
            ..style.backgroundColor = '#000'
            ..style.pointerEvents = 'none';
      _video!.onLoadedData.listen((_) async {
        if (!mounted) return;
        setState(() => _ready = true);
        _startPlayWatchdog();
        if (!widget.playbackEnabled) {
          _video!.pause();
          return;
        }
        try {
          if (widget.trySoundOnLoad) {
            _video!
              ..muted = false
              ..defaultMuted = false
              ..volume = 1.0;
            _video!.removeAttribute('muted');
            if (mounted) setState(() => _muted = false);
          }
          await _video!.play();
          if (mounted) setState(() => _playing = true);
        } catch (e) {
          debugPrint('[studio html video] autoplay: $e');
        }
      });
      _video!.onStalled.listen((_) => unawaited(_ensurePlaying()));
      _video!.onWaiting.listen((_) => unawaited(_ensurePlaying()));
      _video!.onPlay.listen((_) {
        if (mounted) setState(() => _playing = true);
      });
      _video!.onPause.listen((_) {
        if (mounted) setState(() => _playing = false);
      });
      _video!.onError.listen((_) {
        if (mounted) setState(() => _error = 'Could not load this video clip.');
      });
      _video!.load();
      return _video!;
    });
  }

  void _startPlayWatchdog() {
    _playWatchdog?.cancel();
    _playWatchdog = Timer.periodic(const Duration(milliseconds: 900), (_) {
      unawaited(_ensurePlaying());
    });
  }

  Future<void> _ensurePlaying() async {
    final v = _video;
    if (v == null || !mounted || !_ready || _userPaused || !widget.playbackEnabled) return;
    if (v.ended) {
      try {
        v.currentTime = 0;
        await v.play();
        if (mounted) setState(() => _playing = true);
      } catch (_) {}
      return;
    }
    if (v.paused) {
      try {
        await v.play();
        if (mounted) setState(() => _playing = true);
      } catch (_) {}
    }
  }

  @override
  void didUpdateWidget(covariant NgmyStudioHtmlVideo oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.playbackEnabled == widget.playbackEnabled) return;
    final v = _video;
    if (v == null) return;
    if (!widget.playbackEnabled) {
      v.pause();
    } else if (!_userPaused) {
      unawaited(_ensurePlaying());
    }
  }

  @override
  void dispose() {
    _playWatchdog?.cancel();
    final v = _video;
    _video = null;
    if (v != null) {
      try {
        v.pause();
        v.removeAttribute('src');
        v.load();
        v.remove();
      } catch (_) {}
    }
    super.dispose();
  }

  Future<void> _togglePlay() async {
    final v = _video;
    if (v == null) return;
    try {
      if (v.paused) {
        await v.play();
        if (mounted) setState(() => _playing = true);
        _userPaused = false;
      } else {
        v.pause();
        if (mounted) setState(() => _playing = false);
        _userPaused = true;
      }
    } catch (e) {
      debugPrint('[studio html video] play: $e');
      if (mounted) setState(() => _error = 'Tap Play again — browser blocked autoplay.');
    }
  }

  Future<void> _replay() async {
    final v = _video;
    if (v == null) return;
    try {
      v.currentTime = 0;
      await v.play();
      if (mounted) {
        setState(() => _playing = true);
        _userPaused = false;
      }
    } catch (e) {
      debugPrint('[studio html video] replay: $e');
    }
  }

  Future<void> _toggleMute() async {
    final v = _video;
    if (v == null) return;
    final nextMuted = !v.muted;
    v.muted = nextMuted;
    v.defaultMuted = nextMuted;
    if (nextMuted) {
      v.setAttribute('muted', 'true');
    } else {
      v.removeAttribute('muted');
      v.volume = 1.0;
      if (v.paused) {
        try {
          await v.play();
          if (mounted) setState(() => _playing = true);
        } catch (e) {
          debugPrint('[studio html video] unmute play: $e');
        }
      }
    }
    if (mounted) setState(() => _muted = nextMuted);
  }

  @override
  Widget build(BuildContext context) {
    if (_error != null) {
      return ColoredBox(
        color: Colors.black87,
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Text(
              _error!,
              textAlign: TextAlign.center,
              style: const TextStyle(color: Colors.white70, fontSize: 10),
            ),
          ),
        ),
      );
    }
    return Stack(
      fit: StackFit.expand,
      clipBehavior: Clip.hardEdge,
      children: [
        const ColoredBox(color: Colors.black, child: SizedBox.expand()),
        HtmlElementView(viewType: _viewType),
        if (!_ready)
          const Center(
            child: SizedBox(
              width: 24,
              height: 24,
              child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white54),
            ),
          ),
        Positioned(
          left: 8,
          right: 8,
          bottom: 8,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _ctrl(
                _playing ? Icons.pause_rounded : Icons.play_arrow_rounded,
                _playing ? 'Pause' : 'Play',
                () => unawaited(_togglePlay()),
              ),
              const SizedBox(width: 8),
              _ctrl(
                _muted ? Icons.volume_off_rounded : Icons.volume_up_rounded,
                _muted ? 'Sound off' : 'Sound on',
                () => unawaited(_toggleMute()),
              ),
              const SizedBox(width: 8),
              _ctrl(Icons.replay_rounded, 'Replay', () => unawaited(_replay())),
            ],
          ),
        ),
        if (!_playing && _ready)
          Center(
            child: Material(
              color: Colors.black45,
              shape: const CircleBorder(),
              child: IconButton(
                iconSize: 36,
                color: Colors.white,
                icon: const Icon(Icons.play_circle_fill_rounded),
                onPressed: () => unawaited(_togglePlay()),
              ),
            ),
          ),
      ],
    );
  }

  Widget _ctrl(IconData icon, String label, VoidCallback onTap) {
    return Material(
      color: Colors.black54,
      borderRadius: BorderRadius.circular(24),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(24),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, color: Colors.white, size: 20),
              const SizedBox(width: 6),
              Text(label, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
            ],
          ),
        ),
      ),
    );
  }
}
