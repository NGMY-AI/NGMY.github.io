import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Inline blob preview on web — no native controls (iOS Safari fullscreen safe).
class NgmyStudioHtmlVideo extends StatefulWidget {
  final String source;

  const NgmyStudioHtmlVideo({super.key, required this.source});

  @override
  State<NgmyStudioHtmlVideo> createState() => _NgmyStudioHtmlVideoState();
}

class _NgmyStudioHtmlVideoState extends State<NgmyStudioHtmlVideo> {
  late final String _viewType;
  html.VideoElement? _video;
  bool _playing = false;
  bool _ready = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-studio-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _video = html.VideoElement()
        ..src = widget.source
        ..controls = false
        ..preload = 'auto'
        ..loop = true
        ..muted = false
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..setAttribute('x-webkit-airplay', 'deny')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.backgroundColor = '#000'
        ..style.pointerEvents = 'none';
      _video!.onLoadedData.listen((_) {
        if (mounted) setState(() => _ready = true);
      });
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

  Future<void> _togglePlay() async {
    final v = _video;
    if (v == null) return;
    try {
      if (v.paused) {
        await v.play();
        if (mounted) setState(() => _playing = true);
      } else {
        v.pause();
        if (mounted) setState(() => _playing = false);
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
      if (mounted) setState(() => _playing = true);
    } catch (e) {
      debugPrint('[studio html video] replay: $e');
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_error != null) {
      return ColoredBox(
        color: Colors.black87,
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(8),
            child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 10)),
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
