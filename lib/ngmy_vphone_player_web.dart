// ignore_for_file: avoid_web_libraries_in_flutter, deprecated_member_use
import 'dart:async';
import 'dart:convert';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_vphone_link.dart';

int _counter = 0;

/// The player of the virtual phone on the web: a real video element for video files, and a frame for YouTube, Vimeo and web pages.
/// [onEnded] is called when the video reaches its end. [muted] starts it without sound (a browser only starts several videos by themselves when they are muted).
class VPhonePlayer extends StatefulWidget {
  const VPhonePlayer({super.key, required this.link, this.onEnded, this.muted = false});
  final VPhoneLink link;
  final VoidCallback? onEnded;
  final bool muted;

  @override
  State<VPhonePlayer> createState() => _VPhonePlayerState();
}

class _VPhonePlayerState extends State<VPhonePlayer> {
  late final String _viewType;
  String? _error;
  StreamSubscription<html.MessageEvent>? _messages;
  html.IFrameElement? _frame;
  bool _ended = false;

  void _finish() {
    if (_ended) return;
    _ended = true;
    widget.onEnded?.call();
  }

  String _embedFor(VPhoneLink link) {
    var u = link.embed;
    if (link.kind == VPhoneLinkKind.youtube) {
      u += '&enablejsapi=1&origin=${Uri.encodeComponent(html.window.location.origin)}${widget.muted ? '&mute=1' : ''}';
    } else if (link.kind == VPhoneLinkKind.vimeo && widget.muted) {
      u += '&muted=1';
    }
    return u;
  }

  void _listen() {
    final link = widget.link;
    if (link.kind != VPhoneLinkKind.youtube && link.kind != VPhoneLinkKind.vimeo) return;
    _messages = html.window.onMessage.listen((e) {
      final f = _frame;
      if (f == null || e.source != f.contentWindow) return;
      Object? data = e.data;
      if (data is String) {
        try {
          data = jsonDecode(data);
        } catch (_) {
          return;
        }
      }
      if (data is! Map) return;
      if (link.kind == VPhoneLinkKind.youtube) {
        final ev = data['event'];
        final info = data['info'];
        if ((ev == 'onStateChange' && info == 0) || (ev == 'infoDelivery' && info is Map && info['playerState'] == 0)) _finish();
      } else if (data['event'] == 'finish' || data['event'] == 'ended') {
        _finish();
      }
    });
  }

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vphone-${_counter++}';
    final link = widget.link;
    _listen();
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      if (link.kind == VPhoneLinkKind.file) {
        final v = html.VideoElement()
          ..src = link.embed
          ..controls = true
          ..autoplay = true
          ..muted = widget.muted
          ..defaultMuted = widget.muted
          ..preload = 'auto'
          ..setAttribute('playsinline', 'true')
          ..setAttribute('webkit-playsinline', 'true')
          ..style.width = '100%'
          ..style.height = '100%'
          ..style.objectFit = 'contain'
          ..style.backgroundColor = '#000';
        if (widget.muted) v.setAttribute('muted', 'true');
        v.onError.listen((_) {
          if (mounted) setState(() => _error = 'This link could not be played. It may not be a video file, or the site does not allow it.');
        });
        v.onEnded.listen((_) => _finish());
        v.onCanPlay.listen((_) {
          // A phone refuses sound that starts by itself: begin muted if it did not start, the person can turn the sound on.
          v.play().catchError((_) {
            v.muted = true;
            return v.play();
          });
        });
        return v;
      }
      final f = html.IFrameElement()
        ..src = _embedFor(link)
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.backgroundColor = '#000'
        ..allowFullscreen = true
        ..setAttribute('allow', 'autoplay; fullscreen; picture-in-picture; encrypted-media; clipboard-write')
        ..setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      _frame = f;
      f.onLoad.listen((_) {
        // Ask the player to tell us when it finishes.
        try {
          if (link.kind == VPhoneLinkKind.youtube) {
            f.contentWindow?.postMessage(jsonEncode({'event': 'listening', 'id': 1, 'channel': 'widget'}), '*');
            f.contentWindow?.postMessage(jsonEncode({'event': 'command', 'func': 'addEventListener', 'args': ['onStateChange'], 'id': 1, 'channel': 'widget'}), '*');
          } else if (link.kind == VPhoneLinkKind.vimeo) {
            f.contentWindow?.postMessage(jsonEncode({'method': 'addEventListener', 'value': 'finish'}), '*');
          }
        } catch (_) {}
      });
      return f;
    });
  }

  @override
  void dispose() {
    _messages?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_error != null) {
      return Container(
        color: Colors.black,
        padding: const EdgeInsets.all(8),
        alignment: Alignment.center,
        child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 11, height: 1.3)),
      );
    }
    return ColoredBox(color: Colors.black, child: HtmlElementView(viewType: _viewType));
  }
}
