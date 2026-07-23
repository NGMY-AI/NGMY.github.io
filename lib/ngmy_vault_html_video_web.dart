import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Full-screen vault video player with native browser controls.
/// Uses object-fit:contain so the whole clip is visible (unlike studio cover slots).
class NgmyVaultHtmlVideo extends StatefulWidget {
  const NgmyVaultHtmlVideo({super.key, required this.source});

  final String source;

  @override
  State<NgmyVaultHtmlVideo> createState() => _NgmyVaultHtmlVideoState();
}

class _NgmyVaultHtmlVideoState extends State<NgmyVaultHtmlVideo> {
  late final String _viewType;
  html.VideoElement? _video;
  bool _ready = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vault-vid-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      final v = html.VideoElement()
        ..src = widget.source
        ..controls = true
        ..preload = 'auto'
        ..autoplay = false
        ..muted = false
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..setAttribute('controlsList', 'nodownload')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'contain'
        ..style.backgroundColor = '#000'
        ..style.border = '0';
      _video = v;
      v.onLoadedData.listen((_) {
        if (mounted) setState(() => _ready = true);
      });
      v.onCanPlay.listen((_) {
        if (mounted) setState(() => _ready = true);
      });
      v.onError.listen((_) {
        if (mounted) {
          setState(() => _error = 'Could not play this video. Try downloading it, or re-add the clip.');
        }
      });
      v.load();
      return v;
    });
  }

  @override
  void dispose() {
    try {
      _video?.pause();
      _video?.removeAttribute('src');
      _video?.load();
    } catch (_) {}
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_error != null) {
      return ColoredBox(
        color: Colors.black,
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(24),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(Icons.error_outline_rounded, color: Colors.white54, size: 40),
                const SizedBox(height: 12),
                Text(
                  _error!,
                  textAlign: TextAlign.center,
                  style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.35),
                ),
              ],
            ),
          ),
        ),
      );
    }
    return Stack(
      fit: StackFit.expand,
      children: [
        const ColoredBox(color: Colors.black),
        HtmlElementView(viewType: _viewType),
        if (!_ready)
          const Center(
            child: SizedBox(
              width: 28,
              height: 28,
              child: CircularProgressIndicator(strokeWidth: 2.2, color: Colors.white54),
            ),
          ),
      ],
    );
  }
}
