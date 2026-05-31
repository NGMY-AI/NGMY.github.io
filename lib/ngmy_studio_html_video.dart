import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Local blob preview on web with play / pause / replay controls.
class NgmyStudioHtmlVideo extends StatefulWidget {
  final String source;

  const NgmyStudioHtmlVideo({super.key, required this.source});

  @override
  State<NgmyStudioHtmlVideo> createState() => _NgmyStudioHtmlVideoState();
}

class _NgmyStudioHtmlVideoState extends State<NgmyStudioHtmlVideo> {
  late final String _viewType;
  html.VideoElement? _video;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-studio-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _video = html.VideoElement()
        ..src = widget.source
        ..controls = true
        ..preload = 'auto'
        ..loop = true
        ..muted = false
        ..setAttribute('playsinline', 'true')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.backgroundColor = '#000';
      return _video!;
    });
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
              Material(
                color: Colors.black54,
                borderRadius: BorderRadius.circular(24),
                child: InkWell(
                  onTap: _replay,
                  borderRadius: BorderRadius.circular(24),
                  child: const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.replay_rounded, color: Colors.white, size: 20),
                        SizedBox(width: 6),
                        Text('Replay', style: TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
