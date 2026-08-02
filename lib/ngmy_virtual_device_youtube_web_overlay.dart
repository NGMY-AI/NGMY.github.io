import 'dart:async';
import 'dart:html' as html;

import 'package:flutter/material.dart';

import 'ngmy_virtual_device_embed.dart';

/// Mounts a YouTube iframe on [document.body] aligned to a Flutter slot.
///
/// HtmlElementView + nested iframes often show YouTube "Video unavailable" on
/// iOS Safari / PWAs. A body-level iframe keeps ngmy.org as the true embedder.
class NgmyVirtualDeviceYoutubeWebOverlay extends StatefulWidget {
  const NgmyVirtualDeviceYoutubeWebOverlay({
    super.key,
    required this.videoId,
    required this.muted,
    required this.compact,
    this.onStarted,
    this.onUnmute,
  });

  final String videoId;
  final bool muted;
  final bool compact;
  final VoidCallback? onStarted;
  final VoidCallback? onUnmute;

  @override
  State<NgmyVirtualDeviceYoutubeWebOverlay> createState() => _NgmyVirtualDeviceYoutubeWebOverlayState();
}

class _NgmyVirtualDeviceYoutubeWebOverlayState extends State<NgmyVirtualDeviceYoutubeWebOverlay> {
  final _slotKey = GlobalKey();
  html.DivElement? _host;
  html.IFrameElement? _iframe;
  html.ButtonElement? _soundBtn;
  StreamSubscription<html.Event>? _scrollSub;
  StreamSubscription<html.Event>? _resizeSub;
  var _started = false;
  var _muted = false;

  @override
  void dispose() {
    _scrollSub?.cancel();
    _resizeSub?.cancel();
    _tearDownHost();
    super.dispose();
  }

  void _tearDownHost() {
    _host?.remove();
    _host = null;
    _iframe = null;
    _soundBtn = null;
  }

  void _syncPosition() {
    final box = _slotKey.currentContext?.findRenderObject() as RenderBox?;
    final host = _host;
    if (box == null || !box.hasSize || host == null) return;
    final offset = box.localToGlobal(Offset.zero);
    final size = box.size;
    host.style
      ..left = '${offset.dx}px'
      ..top = '${offset.dy}px'
      ..width = '${size.width}px'
      ..height = '${size.height}px';
  }

  void _applyEmbedSrc({required bool muted}) {
    final iframe = _iframe;
    if (iframe == null) return;
    iframe.src = NgmyVirtualDeviceEmbed.youtubeEmbedUrl(widget.videoId, muted: muted);
    _muted = muted;
    final btn = _soundBtn;
    if (btn != null) {
      btn.text = muted ? '🔊 Sound' : '🔇 Mute';
      btn.style.display = 'block';
    }
  }

  void _startPlayback({required bool withSound}) {
    if (_started) {
      _applyEmbedSrc(muted: !withSound);
      if (withSound) widget.onUnmute?.call();
      return;
    }
    _started = true;
    _muted = !withSound;
    widget.onStarted?.call();

    final radius = widget.compact ? 8 : 12;
    _host = html.DivElement()
      ..style.cssText = '''
        position: fixed;
        z-index: 2147482000;
        overflow: hidden;
        background: #000;
        border-radius: ${radius}px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.45);
      ''';

    _iframe = html.IFrameElement()
      ..style.border = 'none'
      ..style.width = '100%'
      ..style.height = '100%'
      ..allowFullscreen = true
      ..setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen',
      );

    _soundBtn = html.ButtonElement()
      ..text = _muted ? '🔊 Sound' : '🔇 Mute'
      ..style.cssText = '''
        position: absolute;
        right: 8px;
        bottom: 8px;
        z-index: 2;
        border: none;
        border-radius: 8px;
        padding: 6px 10px;
        background: rgba(0,0,0,0.72);
        color: #fff;
        font-weight: 800;
        font-size: 11px;
        cursor: pointer;
        display: none;
      '''
      ..onClick.listen((event) {
        event.stopPropagation();
        if (_muted) {
          _applyEmbedSrc(muted: false);
          widget.onUnmute?.call();
        } else {
          _applyEmbedSrc(muted: true);
        }
      });

    _host!.children.addAll([_iframe!, _soundBtn!]);
    html.document.body?.append(_host!);
    _applyEmbedSrc(muted: _muted);
    _soundBtn!.style.display = 'block';

    _syncPosition();
    _scrollSub = html.window.onScroll.listen((_) => _syncPosition());
    _resizeSub = html.window.onResize.listen((_) => _syncPosition());
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceYoutubeWebOverlay oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.videoId != widget.videoId) {
      _started = false;
      _tearDownHost();
      setState(() {});
    } else if (_started) {
      _applyEmbedSrc(muted: _muted);
      WidgetsBinding.instance.addPostFrameCallback((_) => _syncPosition());
    }
  }

  Widget _buildPoster() {
    final thumb = NgmyVirtualDeviceEmbed.youtubeThumbnailUrl(widget.videoId);
    return Material(
      color: Colors.black,
      child: InkWell(
        onTap: () => _startPlayback(withSound: !widget.muted),
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
                padding: EdgeInsets.symmetric(
                  horizontal: widget.compact ? 14 : 20,
                  vertical: widget.compact ? 10 : 14,
                ),
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
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (_started) _syncPosition();
    });
    return Container(
      key: _slotKey,
      color: Colors.black,
      child: _started ? null : _buildPoster(),
    );
  }
}
