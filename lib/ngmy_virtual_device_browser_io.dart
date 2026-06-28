import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

const String kNgmyVirtualDeviceYouTubeHome = 'https://m.youtube.com/';

/// In-app mobile browser for the virtual device (native / desktop).
class NgmyVirtualDeviceBrowserControls {
  NgmyVirtualDeviceBrowserControls({
    required this.goHome,
    required this.goBack,
    required this.goForward,
    required this.reload,
  });

  final Future<void> Function() goHome;
  final Future<void> Function() goBack;
  final Future<void> Function() goForward;
  final Future<void> Function() reload;
}

class NgmyVirtualDeviceBrowser extends StatefulWidget {
  const NgmyVirtualDeviceBrowser({super.key, this.onReady});

  final void Function(NgmyVirtualDeviceBrowserControls controls)? onReady;

  @override
  State<NgmyVirtualDeviceBrowser> createState() => _NgmyVirtualDeviceBrowserState();
}

class _NgmyVirtualDeviceBrowserState extends State<NgmyVirtualDeviceBrowser> {
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
      ..loadRequest(Uri.parse(kNgmyVirtualDeviceYouTubeHome));

    widget.onReady?.call(
      NgmyVirtualDeviceBrowserControls(
        goHome: () => _controller.loadRequest(Uri.parse(kNgmyVirtualDeviceYouTubeHome)),
        goBack: () async {
          if (await _controller.canGoBack()) await _controller.goBack();
        },
        goForward: () async {
          if (await _controller.canGoForward()) await _controller.goForward();
        },
        reload: () => _controller.reload(),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        WebViewWidget(controller: _controller),
        if (_loading)
          const ColoredBox(
            color: Colors.black26,
            child: Center(
              child: SizedBox(
                width: 28,
                height: 28,
                child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
              ),
            ),
          ),
      ],
    );
  }
}
