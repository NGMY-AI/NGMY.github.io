import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

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

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-studio-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _video = html.VideoElement()
        ..src = widget.source
        ..controls = false
        ..preload = 'metadata'
        ..loop = true
        ..muted = true
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..setAttribute('x-webkit-airplay', 'deny')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.backgroundColor = '#000'
        ..style.pointerEvents = 'none';
      _video!.onPlay.listen((_) {
        if (mounted) setState(() => _playing = true);
      });
      _video!.onPause.listen((_) {
        if (mounted) setState(() => _playing = false);
      });
      return _video!;
    });
  }

  void _togglePlay() {
    final v = _video;
    if (v == null) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  }

  void _replay() {
    final v = _video;
    if (v == null) return;
    v.currentTime = 0;
    v.play();
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      clipBehavior: Clip.hardEdge,
      children: [
        const ColoredBox(color: Colors.black, child: SizedBox.expand()),
        HtmlElementView(viewType: _viewType),
        Positioned(
          left: 8,
          right: 8,
          bottom: 8,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              _ctrl(Icons.play_arrow_rounded, 'Play', _togglePlay),
              const SizedBox(width: 8),
              _ctrl(Icons.replay_rounded, 'Replay', _replay),
            ],
          ),
        ),
        if (!_playing)
          Center(
            child: Material(
              color: Colors.black45,
              shape: const CircleBorder(),
              child: IconButton(
                iconSize: 36,
                color: Colors.white,
                icon: const Icon(Icons.play_circle_fill_rounded),
                onPressed: _togglePlay,
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
