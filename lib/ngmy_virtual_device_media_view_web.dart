import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_virtual_device_embed.dart';

/// Single shared player (web iframe). Only mount one at a time.
class NgmyVirtualDeviceMediaView extends StatefulWidget {
  const NgmyVirtualDeviceMediaView({
    super.key,
    required this.viewKey,
    required this.playUrl,
    this.compact = false,
    this.useEmbedHtml = true,
  });

  final String viewKey;
  final String playUrl;
  final bool compact;
  final bool useEmbedHtml;

  @override
  State<NgmyVirtualDeviceMediaView> createState() => _NgmyVirtualDeviceMediaViewState();
}

class _NgmyVirtualDeviceMediaViewState extends State<NgmyVirtualDeviceMediaView> {
  late final String _viewType;
  html.IFrameElement? _frame;
  var _loading = true;
  var _failed = false;

  bool _shouldUseEmbedHtml(String url) {
    if (!widget.useEmbedHtml) return false;
    final lower = url.toLowerCase();
    return lower.contains('youtube') ||
        lower.contains('youtu.be') ||
        lower.contains('tiktok.com/player') ||
        lower.contains('instagram.com') ||
        lower.contains('facebook.com/plugins');
  }

  void _applySrc(html.IFrameElement frame, String url) {
    if (_shouldUseEmbedHtml(url)) {
      frame
        ..removeAttribute('src')
        ..srcdoc = NgmyVirtualDeviceEmbed.iframeHtml(url);
    } else {
      frame
        ..removeAttribute('srcdoc')
        ..src = url;
    }
  }

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vmedia-${widget.viewKey}-${DateTime.now().microsecondsSinceEpoch}';
    try {
      ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
        _frame = html.IFrameElement()
          ..style.border = 'none'
          ..style.width = '100%'
          ..style.height = '100%'
          ..allowFullscreen = true
          ..setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
          ..setAttribute(
            'allow',
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen',
          );
        _applySrc(_frame!, widget.playUrl);
        _frame!.onLoad.listen((_) {
          if (mounted) setState(() => _loading = false);
        });
        _frame!.onError.listen((_) {
          if (mounted) {
            setState(() {
              _loading = false;
              _failed = true;
            });
          }
        });
        return _frame!;
      });
    } catch (_) {
      _failed = true;
      _loading = false;
    }
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceMediaView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.playUrl != widget.playUrl && _frame != null) {
      setState(() {
        _loading = true;
        _failed = false;
      });
      _applySrc(_frame!, widget.playUrl);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_failed) {
      return ColoredBox(
        color: Colors.black,
        child: Center(
          child: Icon(
            Icons.videocam_off_rounded,
            color: Colors.white.withValues(alpha: 0.5),
            size: widget.compact ? 22 : 36,
          ),
        ),
      );
    }
    final spinner = widget.compact ? 14.0 : 28.0;
    return Stack(
      fit: StackFit.expand,
      children: [
        HtmlElementView(viewType: _viewType),
        if (_loading)
          ColoredBox(
            color: Colors.black45,
            child: Center(
              child: SizedBox(
                width: spinner,
                height: spinner,
                child: const CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
              ),
            ),
          ),
      ],
    );
  }
}
