// ignore: avoid_web_libraries_in_flutter
import 'dart:async';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
// ignore: avoid_web_libraries_in_flutter
import 'dart:ui_web' as ui_web;

import 'package:flutter/widgets.dart';

import 'ngmy_body_viewer_doc.dart';

const bool kNgmyBodyViewerSupported = true;

int _viewerCounter = 0;

/// The Body Explorer's 3D page, shown in a locked frame (scripts only, no access to the app).
class NgmyBodyViewerLink {
  NgmyBodyViewerLink({required this.onEvent});
  final void Function(Map<dynamic, dynamic> event) onEvent;

  String? _viewType;
  html.IFrameElement? _frame;
  StreamSubscription<html.MessageEvent>? _sub;

  bool get started => _viewType != null;

  void start(String threeJs) {
    if (_viewType != null) return;
    final doc = ngmyBodyViewerDocument(threeJs);
    final type = 'ngmy-body-viewer-${_viewerCounter++}';
    ui_web.platformViewRegistry.registerViewFactory(type, (int viewId) {
      final frame = html.IFrameElement()
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.background = '#07080f'
        ..setAttribute('sandbox', 'allow-scripts')
        ..srcdoc = doc;
      _frame = frame;
      return frame;
    });
    _sub = html.window.onMessage.listen((event) {
      final data = event.data;
      if (data is Map && data['ngmyBody'] != null) onEvent(data);
    });
    _viewType = type;
  }

  void send(Map<String, dynamic> message) {
    try {
      _frame?.contentWindow?.postMessage(message, '*');
    } catch (_) {}
  }

  Widget build() => _viewType == null ? const SizedBox.shrink() : HtmlElementView(viewType: _viewType!);

  void dispose() {
    _sub?.cancel();
    _sub = null;
  }
}
