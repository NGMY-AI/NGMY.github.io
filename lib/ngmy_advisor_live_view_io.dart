import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

/// Live view of the advisor's cloud browser (interactive — the user can tap in to log in).
class NgmyAdvisorLiveView extends StatefulWidget {
  const NgmyAdvisorLiveView({super.key, required this.url});

  final String url;

  @override
  State<NgmyAdvisorLiveView> createState() => _NgmyAdvisorLiveViewState();
}

class _NgmyAdvisorLiveViewState extends State<NgmyAdvisorLiveView> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setBackgroundColor(const Color(0xFF0F172A))
      ..loadRequest(Uri.parse(widget.url));
  }

  @override
  void didUpdateWidget(covariant NgmyAdvisorLiveView oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.url != widget.url) _controller.loadRequest(Uri.parse(widget.url));
  }

  @override
  Widget build(BuildContext context) => WebViewWidget(controller: _controller);
}
