import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';
import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';

import 'ngmy_virtual_device_embed.dart';

/// Single shared player (native WebView). Only mount one at a time.
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
  /// When true, wraps the URL in an HTML iframe (required for YouTube on mobile).
  final bool useEmbedHtml;

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

    final platform = controller.platform;
    if (platform is AndroidWebViewController) {
      platform.setMediaPlaybackRequiresUserGesture(false);
    }

    return controller;
  }

  void _load(String url) {
    setState(() {
      _loading = true;
      _failed = false;
    });
    if (widget.useEmbedHtml && _shouldUseEmbedHtml(url)) {
      _controller.loadHtmlString(
        NgmyVirtualDeviceEmbed.iframeHtml(url),
        baseUrl: NgmyVirtualDeviceEmbed.htmlBaseUrl,
      );
    } else {
      _controller.loadRequest(Uri.parse(url));
    }
  }

  bool _shouldUseEmbedHtml(String url) {
    final lower = url.toLowerCase();
    return lower.contains('youtube') ||
        lower.contains('youtu.be') ||
        lower.contains('tiktok.com/player') ||
        lower.contains('instagram.com') ||
        lower.contains('facebook.com/plugins');
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceMediaView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.playUrl != widget.playUrl || oldWidget.useEmbedHtml != widget.useEmbedHtml) {
      _load(widget.playUrl);
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
