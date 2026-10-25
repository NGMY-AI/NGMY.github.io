import 'dart:io' show Platform;

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';

import 'ngmy_app_builder_webapp_doc.dart';

/// Runs an AI-written web app (phone builds). Elsewhere it shows a short note.
Widget ngmyWebAppView({required String html, required String storageKey}) => _NgmyWebAppNative(html: html, storageKey: storageKey);

class _NgmyWebAppNative extends StatefulWidget {
  const _NgmyWebAppNative({required this.html, required this.storageKey});
  final String html;
  final String storageKey;

  @override
  State<_NgmyWebAppNative> createState() => _NgmyWebAppNativeState();
}

class _NgmyWebAppNativeState extends State<_NgmyWebAppNative> {
  WebViewController? _controller;

  bool get _supported {
    try {
      return Platform.isAndroid || Platform.isIOS;
    } catch (_) {
      return false;
    }
  }

  @override
  void initState() {
    super.initState();
    if (_supported) {
      _controller = WebViewController()
        ..setJavaScriptMode(JavaScriptMode.unrestricted)
        ..loadHtmlString(ngmyWebAppDocument(widget.html, key: widget.storageKey));
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _controller;
    if (c != null) return WebViewWidget(controller: c);
    return Container(
      color: const Color(0xFF111827),
      alignment: Alignment.center,
      padding: const EdgeInsets.all(20),
      child: const Text('This app runs in the browser version of NGMY.', textAlign: TextAlign.center, style: TextStyle(color: Colors.white70)),
    );
  }
}
