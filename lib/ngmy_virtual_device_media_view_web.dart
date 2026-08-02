import 'dart:convert';
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
    this.notifyOnEnd = false,
    this.lockNavigation = false,
    this.startMuted = false,
  });

  final String viewKey;
  final String playUrl;
  final bool compact;
  final bool useEmbedHtml;
  final bool notifyOnEnd;
  final bool lockNavigation;
  /// Muted autoplay works on mobile browsers; user can tap to unmute.
  final bool startMuted;

  @override
  State<NgmyVirtualDeviceMediaView> createState() => _NgmyVirtualDeviceMediaViewState();
}

class _NgmyVirtualDeviceMediaViewState extends State<NgmyVirtualDeviceMediaView> {
  late final String _viewType;
  html.IFrameElement? _frame;
  var _loading = true;
  var _failed = false;
  var _userUnmuted = false;
  var _youtubeStarted = false;
  var _viewRegistered = false;

  String? get _youtubeId => NgmyVirtualDeviceEmbed.extractYouTubeVideoId(widget.playUrl);

  bool get _needsYouTubeTap => _youtubeId != null && !_youtubeStarted;

  bool get _showUnmuteHint => widget.startMuted && _youtubeStarted && !_userUnmuted && !_loading && !_failed;

  void _applySrc(html.IFrameElement frame, String url) {
    final ytId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(url);
    final muted = widget.startMuted && !_userUnmuted;

    if (ytId != null && widget.useEmbedHtml) {
      // Direct youtube.com iframe — srcdoc/IFrame API breaks inside HtmlElementView on mobile PWA.
      frame
        ..removeAttribute('srcdoc')
        ..src = NgmyVirtualDeviceEmbed.youtubeEmbedUrl(ytId, muted: muted);
      return;
    }

    if (widget.useEmbedHtml && _needsEmbedHtml(url)) {
      frame
        ..removeAttribute('src')
        ..srcdoc = NgmyVirtualDeviceEmbed.iframeHtml(
          url,
          notifyOnEnd: widget.notifyOnEnd,
          muted: muted,
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

  void _unmute() {
    if (_userUnmuted) return;
    setState(() => _userUnmuted = true);
    final frame = _frame;
    if (frame != null) {
      _applySrc(frame, widget.playUrl);
    }
  }

  void _startYouTubePlayback() {
    if (_youtubeStarted) return;
    setState(() {
      _youtubeStarted = true;
      _loading = true;
    });
    _ensureFrameRegistered();
    final frame = _frame;
    if (frame != null) {
      _applySrc(frame, widget.playUrl);
    }
  }

  void _ensureFrameRegistered() {
    if (_viewRegistered) return;
    _viewRegistered = true;
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
        if (!_needsYouTubeTap) {
          _applySrc(_frame!, widget.playUrl);
        }
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
        Future<void>.delayed(const Duration(seconds: 6), () {
          if (mounted && _loading) setState(() => _loading = false);
        });
        return _frame!;
      });
    } catch (_) {
      _failed = true;
      _loading = false;
    }
  }

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-vmedia-${widget.viewKey}-${DateTime.now().microsecondsSinceEpoch}';
    if (_youtubeId == null) {
      _ensureFrameRegistered();
    } else {
      _loading = false;
    }
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceMediaView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.playUrl != widget.playUrl) {
      _userUnmuted = false;
      _youtubeStarted = _youtubeId == null;
      if (_needsYouTubeTap) {
        setState(() {
          _loading = false;
          _failed = false;
        });
        return;
      }
      setState(() {
        _loading = true;
        _failed = false;
      });
      if (_frame != null) {
        _applySrc(_frame!, widget.playUrl);
      }
    }
  }

  Widget _buildYouTubeTapPoster() {
    final id = _youtubeId!;
    final thumb = NgmyVirtualDeviceEmbed.youtubeThumbnailUrl(id);
    return Material(
      color: Colors.black,
      child: InkWell(
        onTap: _startYouTubePlayback,
        child: Stack(
          fit: StackFit.expand,
          children: [
            Image.network(
              thumb,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) => const ColoredBox(color: Colors.black),
            ),
            ColoredBox(color: Colors.black.withValues(alpha: 0.35)),
            Center(
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: widget.compact ? 14 : 20, vertical: widget.compact ? 10 : 14),
                decoration: BoxDecoration(
                  color: const Color(0xFF7C3AED),
                  borderRadius: BorderRadius.circular(999),
                  boxShadow: const [BoxShadow(color: Colors.black54, blurRadius: 16, offset: Offset(0, 6))],
                ),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.play_arrow_rounded, color: Colors.white, size: widget.compact ? 22 : 28),
                    SizedBox(width: widget.compact ? 4 : 8),
                    Text(
                      'Tap to play',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w900,
                        fontSize: widget.compact ? 12 : 15,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    if (_needsYouTubeTap) {
      return _buildYouTubeTapPoster();
    }
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
        if (_showUnmuteHint)
          Positioned.fill(
            child: Material(
              color: Colors.black.withValues(alpha: 0.35),
              child: InkWell(
                onTap: _unmute,
                child: Center(
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 12),
                    decoration: BoxDecoration(
                      color: Colors.black.withValues(alpha: 0.72),
                      borderRadius: BorderRadius.circular(14),
                      border: Border.all(color: Colors.white24),
                    ),
                    child: Row(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Icon(Icons.volume_up_rounded, color: Colors.white.withValues(alpha: 0.9), size: 22),
                        const SizedBox(width: 8),
                        Text(
                          'Tap to play music',
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.92),
                            fontWeight: FontWeight.w700,
                            fontSize: widget.compact ? 11 : 14,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
        if (!widget.compact && NgmyVirtualDeviceEmbed.extractYouTubeVideoId(widget.playUrl) != null)
          Positioned(
            right: 8,
            bottom: 8,
            child: TextButton.icon(
              onPressed: () {
                final id = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(widget.playUrl);
                if (id == null) return;
                html.window.open(NgmyVirtualDeviceEmbed.youtubeWatchUrl(id), '_blank');
              },
              icon: const Icon(Icons.open_in_new_rounded, size: 16, color: Colors.white70),
              label: const Text('Open in YouTube', style: TextStyle(color: Colors.white70, fontSize: 11)),
              style: TextButton.styleFrom(
                backgroundColor: Colors.black.withValues(alpha: 0.55),
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
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
      return;
    }
    final origin = event.origin.toLowerCase();
    if (!origin.contains('youtube.com') && !origin.contains('youtube-nocookie.com')) {
      return;
    }
    try {
      final dynamic parsed = jsonDecode(data);
      if (parsed is Map) {
        final info = parsed['info'];
        if (parsed['event'] == 'onStateChange' && info == 0) {
          onEnded();
          return;
        }
        if (parsed['event'] == 'infoDelivery' && info is Map && info['playerState'] == 0) {
          onEnded();
        }
      }
    } catch (_) {}
  });
}
