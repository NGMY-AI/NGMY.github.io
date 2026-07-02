import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_virtual_device_embed.dart';
import 'ngmy_virtual_device_fleet_playback.dart';

/// Single shared player (web iframe). Only mount one at a time.
class NgmyVirtualDeviceMediaView extends StatefulWidget {
  const NgmyVirtualDeviceMediaView({
    super.key,
    required this.viewKey,
    required this.playUrl,
    this.compact = false,
    this.useEmbedHtml = true,
    this.notifyOnEnd = false,
    this.lockNavigation = false,
  });

  final String viewKey;
  final String playUrl;
  final bool compact;
  final bool useEmbedHtml;
  final bool notifyOnEnd;
  final bool lockNavigation;

  @override
  State<NgmyVirtualDeviceMediaView> createState() => _NgmyVirtualDeviceMediaViewState();
}

class _NgmyVirtualDeviceMediaViewState extends State<NgmyVirtualDeviceMediaView> {
  late final String _viewType;
  html.IFrameElement? _frame;
  var _loading = true;
  var _failed = false;

  bool _isMutedUrl(String url) => url.contains('mute=1');

  void _applySrc(html.IFrameElement frame, String url) {
    final ytId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(url);
    if (ytId != null && widget.useEmbedHtml) {
      if (widget.notifyOnEnd) {
        frame
          ..removeAttribute('src')
          ..srcdoc = NgmyVirtualDeviceEmbed.youtubePlayerHtml(
            ytId,
            muted: _isMutedUrl(url),
            notifyOnEnd: true,
          );
      } else {
        frame
          ..removeAttribute('srcdoc')
          ..src = NgmyVirtualDeviceEmbed.youtubeEmbedUrl(ytId, muted: _isMutedUrl(url));
      }
      return;
    }

    if (widget.useEmbedHtml && _needsEmbedHtml(url)) {
      frame
        ..removeAttribute('src')
        ..srcdoc = NgmyVirtualDeviceEmbed.iframeHtml(
          url,
          notifyOnEnd: widget.notifyOnEnd,
          muted: _isMutedUrl(url),
        );
    } else {
      frame
        ..removeAttribute('srcdoc')
        ..src = url;
    }
  }

  bool _needsEmbedHtml(String url) {
    final lower = url.toLowerCase();
    return lower.contains('tiktok.com/player') ||
        lower.contains('instagram.com') ||
        lower.contains('facebook.com/plugins');
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
          child: Padding(
            padding: EdgeInsets.all(widget.compact ? 6 : 12),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(
                  Icons.videocam_off_rounded,
                  color: Colors.white.withValues(alpha: 0.55),
                  size: widget.compact ? 22 : 36,
                ),
                if (!widget.compact) ...[
                  const SizedBox(height: 8),
                  Text(
                    'Could not play this link.\nUse a public YouTube watch URL.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 11, height: 1.35),
                  ),
                ],
              ],
            ),
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

/// Listens for YouTube ENDED postMessage from grid/master iframe embeds (web only).
void ngmyVirtualDeviceListenForVideoEnded(void Function() onEnded) {
  html.window.onMessage.listen((event) {
    final data = event.data?.toString() ?? '';
    if (data == NgmyVirtualDeviceEmbed.videoEndedMessage) {
      onEnded();
    }
  });
}
