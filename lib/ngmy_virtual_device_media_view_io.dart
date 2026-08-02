import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';
import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';

import 'ngmy_virtual_device_embed.dart';
import 'ngmy_virtual_device_fleet_playback.dart';

/// Single shared player (native WebView). Only mount one at a time.
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
  final bool startMuted;

  @override
  State<NgmyVirtualDeviceMediaView> createState() => _NgmyVirtualDeviceMediaViewState();
}

class _NgmyVirtualDeviceMediaViewState extends State<NgmyVirtualDeviceMediaView> {
  late final WebViewController _controller;
  var _loading = true;
  var _failed = false;
  var _userUnmuted = false;
  var _youtubeStarted = false;

  String? get _youtubeId => NgmyVirtualDeviceEmbed.extractYouTubeVideoId(widget.playUrl);

  bool get _needsYouTubeTap => _youtubeId != null && !_youtubeStarted;

  bool get _showUnmuteHint => widget.startMuted && _youtubeStarted && !_userUnmuted && !_loading && !_failed;

  void _startYouTubePlayback() {
    if (_youtubeStarted) return;
    setState(() {
      _youtubeStarted = true;
      _loading = true;
    });
    _load(widget.playUrl);
  }

  void _unmute() {
    if (_userUnmuted) return;
    setState(() => _userUnmuted = true);
    _load(widget.playUrl);
  }

  @override
  void initState() {
    super.initState();
    _controller = _createController();
    if (_youtubeId == null) {
      _load(widget.playUrl);
    } else {
      _loading = false;
    }
  }

  WebViewController _createController() {
    late final PlatformWebViewControllerCreationParams params;
    if (WebViewPlatform.instance is WebKitWebViewPlatform) {
      params = WebKitWebViewControllerCreationParams(
        allowsInlineMediaPlayback: true,
        mediaTypesRequiringUserAction: const <PlaybackMediaTypes>{},
      );
    } else {
      params = const PlatformWebViewControllerCreationParams();
    }

    final controller = WebViewController.fromPlatformCreationParams(params)
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(Colors.black)
      ..setNavigationDelegate(
        NavigationDelegate(
          onNavigationRequest: (request) {
            if (widget.lockNavigation && request.isMainFrame) {
              final initial = Uri.tryParse(widget.playUrl);
              final next = Uri.tryParse(request.url);
              if (initial != null && next != null && initial.host.isNotEmpty && next.host.isNotEmpty && initial.host != next.host) {
                debugPrint('[movie hub] blocked external player navigation: ${request.url}');
                return NavigationDecision.prevent;
              }
            }
            return NavigationDecision.navigate;
          },
          onPageStarted: (_) {
            if (mounted) setState(() => _loading = true);
          },
          onPageFinished: (_) {
            if (mounted) setState(() => _loading = false);
          },
          onWebResourceError: (error) {
            if (mounted && error.isForMainFrame == true) {
              setState(() {
                _loading = false;
                _failed = true;
              });
            }
          },
        ),
      );

    if (widget.notifyOnEnd) {
      controller.addJavaScriptChannel(
        'NgmyVideoEnded',
        onMessageReceived: (msg) {
          if (msg.message == NgmyVirtualDeviceEmbed.videoEndedMessage) {
            NgmyVirtualDeviceFleetPlayback.onVideoEnded();
          }
        },
      );
    }

    final platform = controller.platform;
    if (platform is AndroidWebViewController) {
      platform.setMediaPlaybackRequiresUserGesture(false);
    }

    return controller;
  }

  bool _isMutedUrl(String url) => url.contains('mute=1');

  void _load(String url) {
    setState(() {
      _loading = true;
      _failed = false;
    });
    // Fallback for pages whose onPageFinished never fires — stop showing the
    // spinner after a timeout instead of spinning forever over a video that
    // may already be usable.
    Future<void>.delayed(const Duration(seconds: 6), () {
      if (mounted && _loading) setState(() => _loading = false);
    });

    if (!widget.useEmbedHtml) {
      _controller.loadRequest(Uri.parse(url));
      return;
    }

    final ytId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(url);
    if (ytId != null) {
      final muted = (widget.startMuted && !_userUnmuted) || _isMutedUrl(url);
      _controller.loadHtmlString(
        NgmyVirtualDeviceEmbed.genericIframeHtml(
          NgmyVirtualDeviceEmbed.youtubeEmbedUrl(ytId, muted: muted),
        ),
        baseUrl: '${NgmyVirtualDeviceEmbed.htmlBaseUrl}/',
      );
      return;
    }

    if (_needsEmbedHtml(url)) {
      _controller.loadHtmlString(
        NgmyVirtualDeviceEmbed.iframeHtml(
          url,
          muted: _isMutedUrl(url),
        ),
        baseUrl: '${NgmyVirtualDeviceEmbed.htmlBaseUrl}/',
      );
    } else {
      _controller.loadRequest(Uri.parse(url));
    }
  }

  bool _needsEmbedHtml(String url) {
    final lower = url.toLowerCase();
    return lower.contains('tiktok.com/player') ||
        lower.contains('instagram.com') ||
        lower.contains('facebook.com/plugins');
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceMediaView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.playUrl != widget.playUrl ||
        oldWidget.useEmbedHtml != widget.useEmbedHtml ||
        oldWidget.notifyOnEnd != widget.notifyOnEnd ||
        oldWidget.startMuted != widget.startMuted) {
      _userUnmuted = false;
      _youtubeStarted = _youtubeId == null;
      if (_needsYouTubeTap) {
        setState(() {
          _loading = false;
          _failed = false;
        });
      } else {
        _load(widget.playUrl);
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
        WebViewWidget(controller: _controller),
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
      ],
    );
  }
}
