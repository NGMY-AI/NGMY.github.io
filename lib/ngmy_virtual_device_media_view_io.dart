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
  late final WebViewController _controller;
  var _loading = true;
  var _failed = false;

  @override
  void initState() {
    super.initState();
    _controller = _createController();
    _load(widget.playUrl);
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

    if (!widget.useEmbedHtml) {
      _controller.loadRequest(Uri.parse(url));
      return;
    }

    final ytId = NgmyVirtualDeviceEmbed.extractYouTubeVideoId(url);
    if (ytId != null) {
      if (widget.notifyOnEnd) {
        _controller.loadHtmlString(
          NgmyVirtualDeviceEmbed.youtubePlayerHtml(
            ytId,
            muted: _isMutedUrl(url),
            notifyOnEnd: true,
          ),
          baseUrl: NgmyVirtualDeviceEmbed.htmlBaseUrl,
        );
      } else {
        _controller.loadHtmlString(
          NgmyVirtualDeviceEmbed.genericIframeHtml(
            NgmyVirtualDeviceEmbed.youtubeEmbedUrl(ytId, muted: _isMutedUrl(url)),
          ),
          baseUrl: NgmyVirtualDeviceEmbed.htmlBaseUrl,
        );
      }
      return;
    }

    if (_needsEmbedHtml(url)) {
      _controller.loadHtmlString(
        NgmyVirtualDeviceEmbed.iframeHtml(
          url,
          notifyOnEnd: widget.notifyOnEnd,
          muted: _isMutedUrl(url),
        ),
        baseUrl: NgmyVirtualDeviceEmbed.htmlBaseUrl,
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
        oldWidget.notifyOnEnd != widget.notifyOnEnd) {
      _load(widget.playUrl);
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
      ],
    );
  }
}
