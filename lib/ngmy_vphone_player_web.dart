// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_vphone_link.dart';

int _counter = 0;

/// The player of the virtual phone on the web: a real video element for video files, and a frame for YouTube, Vimeo and web pages.
class VPhonePlayer extends StatefulWidget {
  const VPhonePlayer({super.key, required this.link});
  final VPhoneLink link;

  @override
  State<VPhonePlayer> createState() => _VPhonePlayerState();
}

class _VPhonePlayerState extends State<VPhonePlayer> {
  late final String _viewType;
  String? _error;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vphone-${_counter++}';
    final link = widget.link;
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      if (link.kind == VPhoneLinkKind.file) {
        final v = html.VideoElement()
          ..src = link.embed
          ..controls = true
          ..autoplay = true
          ..preload = 'auto'
          ..setAttribute('playsinline', 'true')
          ..setAttribute('webkit-playsinline', 'true')
          ..style.width = '100%'
          ..style.height = '100%'
          ..style.objectFit = 'contain'
          ..style.backgroundColor = '#000';
        v.onError.listen((_) {
          if (mounted) setState(() => _error = 'This link could not be played. It may not be a video file, or the site does not allow it.');
        });
        v.onCanPlay.listen((_) {
          // A phone refuses sound that starts by itself: begin muted if it did not start, the person can turn the sound on.
          v.play().catchError((_) {
            v.muted = true;
            return v.play();
          });
        });
        return v;
      }
      return html.IFrameElement()
        ..src = link.embed
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.backgroundColor = '#000'
        ..allowFullscreen = true
        ..setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write')
        ..setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_error != null) {
      return Container(
        color: Colors.black,
        padding: const EdgeInsets.all(18),
        alignment: Alignment.center,
        child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 13, height: 1.4)),
      );
    }
    return ColoredBox(color: Colors.black, child: HtmlElementView(viewType: _viewType));
  }
}
