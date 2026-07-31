import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

/// Paused HTML video frame for Quick Dial grid tiles — shows the real clip,
/// not a generic purple placeholder.
class NgmyVaultVideoPreview extends StatefulWidget {
  const NgmyVaultVideoPreview({super.key, required this.source, this.mimeType = 'video/mp4'});

  final String source;
  final String mimeType;

  @override
  State<NgmyVaultVideoPreview> createState() => _NgmyVaultVideoPreviewState();
}

class _NgmyVaultVideoPreviewState extends State<NgmyVaultVideoPreview> {
  late final String _viewType;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vault-prev-${widget.source.hashCode}-${DateTime.now().microsecondsSinceEpoch}';
    final mime = widget.mimeType.trim().isEmpty ? 'video/mp4' : widget.mimeType.trim();
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      final v = html.VideoElement()
        ..muted = true
        ..autoplay = false
        ..controls = false
        ..preload = 'auto'
        ..setAttribute('playsinline', 'true')
        ..setAttribute('webkit-playsinline', 'true')
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.objectFit = 'cover'
        ..style.display = 'block'
        ..style.pointerEvents = 'none'
        ..style.backgroundColor = '#151024';

      v.append(html.SourceElement()
        ..src = widget.source
        ..type = mime);
      v.src = widget.source;

      void showFrame() {
        try {
          final dur = v.duration;
          final t = dur.isFinite && dur > 0 ? (dur * 0.05).clamp(0.05, 1.0) : 0.05;
          v.currentTime = t;
        } catch (_) {
          try {
            v.currentTime = 0.05;
          } catch (_) {}
        }
      }

      v.onLoadedData.listen((_) {
        showFrame();
        try {
          v.pause();
        } catch (_) {}
      });
      v.onSeeked.listen((_) {
        try {
          v.pause();
        } catch (_) {}
      });
      v.onCanPlay.listen((_) {
        if (v.paused) showFrame();
      });

      // iOS often needs a muted play/pause before the first frame renders.
      v.onLoadedMetadata.listen((_) async {
        try {
          await v.play();
          await Future<void>.delayed(const Duration(milliseconds: 80));
          v.pause();
          showFrame();
        } catch (_) {
          showFrame();
        }
      });

      v.load();
      return v;
    });
  }

  @override
  Widget build(BuildContext context) {
    return HtmlElementView(viewType: _viewType);
  }
}
