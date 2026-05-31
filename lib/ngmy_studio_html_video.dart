import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Instant local video preview on web (blob URL — no upload, no streaming).
class NgmyStudioHtmlVideo extends StatefulWidget {
  final String source;

  const NgmyStudioHtmlVideo({super.key, required this.source});

  @override
  State<NgmyStudioHtmlVideo> createState() => _NgmyStudioHtmlVideoState();
}

class _NgmyStudioHtmlVideoState extends State<NgmyStudioHtmlVideo> {
  late final String _viewType;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-studio-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      final v = html.VideoElement()
        ..src = widget.source
        ..autoplay = true
        ..loop = true
        ..muted = true
        ..setAttribute('playsinline', 'true')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.backgroundColor = '#000';
      return v;
    });
  }

  @override
  Widget build(BuildContext context) {
    return ColoredBox(
      color: Colors.black,
      child: HtmlElementView(viewType: _viewType),
    );
  }
}
