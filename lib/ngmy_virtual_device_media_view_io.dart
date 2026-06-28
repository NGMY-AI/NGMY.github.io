import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

/// Embedded video player for virtual devices (native WebView).
class NgmyVirtualDeviceMediaView extends StatefulWidget {
  const NgmyVirtualDeviceMediaView({
    super.key,
    required this.viewKey,
    required this.embedUrl,
    this.compact = false,
  });

  final String viewKey;
  final String embedUrl;
  final bool compact;

  @override
  State<NgmyVirtualDeviceMediaView> createState() => _NgmyVirtualDeviceMediaViewState();
}

class _NgmyVirtualDeviceMediaViewState extends State<NgmyVirtualDeviceMediaView> {
  late final WebViewController _controller;
  var _loading = true;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
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
        ),
      )
      ..loadRequest(Uri.parse(widget.embedUrl));
  }

  @override
  void didUpdateWidget(covariant NgmyVirtualDeviceMediaView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.embedUrl != widget.embedUrl) {
      setState(() => _loading = true);
      _controller.loadRequest(Uri.parse(widget.embedUrl));
    }
  }

  @override
  Widget build(BuildContext context) {
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
