// ignore: avoid_web_libraries_in_flutter
import 'dart:convert';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
// ignore: avoid_web_libraries_in_flutter
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_app_builder_webapp_doc.dart';

int _frameCounter = 0;

/// Runs an AI-written web app inside a locked-down frame (it can run its own code, but cannot reach NGMY).
Widget ngmyWebAppView({required String html, required String storageKey}) => _NgmyWebAppFrame(html: html, storageKey: storageKey);

class _NgmyWebAppFrame extends StatefulWidget {
  const _NgmyWebAppFrame({required this.html, required this.storageKey});
  final String html;
  final String storageKey;

  @override
  State<_NgmyWebAppFrame> createState() => _NgmyWebAppFrameState();
}

class _NgmyWebAppFrameState extends State<_NgmyWebAppFrame> {
  String? _viewType;
  dynamic _sub;

  String get _prefsKey => 'ngmy_webapp_store_${widget.storageKey}';

  @override
  void initState() {
    super.initState();
    _start();
  }

  Future<void> _start() async {
    var store = <String, String>{};
    try {
      final prefs = await SharedPreferences.getInstance();
      final raw = prefs.getString(_prefsKey);
      if (raw != null && raw.isNotEmpty) {
        final d = jsonDecode(raw);
        if (d is Map) store = {for (final e in d.entries) '${e.key}': '${e.value}'};
      }
    } catch (_) {}
    final doc = ngmyWebAppDocument(widget.html, key: widget.storageKey, store: store);
    final type = 'ngmy-webapp-${_frameCounter++}';
    ui_web.platformViewRegistry.registerViewFactory(type, (int viewId) {
      final frame = html.IFrameElement()
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.background = '#111827'
        // Scripts, forms and pop-ups may run; same-origin is NOT allowed, so the app cannot reach NGMY's storage or cookies.
        ..setAttribute('sandbox', 'allow-scripts allow-forms allow-modals allow-popups allow-pointer-lock allow-downloads')
        ..setAttribute('allow', 'autoplay; fullscreen')
        ..srcdoc = doc;
      return frame;
    });
    _sub = html.window.onMessage.listen((event) async {
      final data = event.data;
      if (data is Map && data['ngmyWebApp'] == widget.storageKey && data['store'] is Map) {
        try {
          final prefs = await SharedPreferences.getInstance();
          await prefs.setString(_prefsKey, jsonEncode(data['store']));
        } catch (_) {}
      }
    });
    if (mounted) setState(() => _viewType = type);
  }

  @override
  void dispose() {
    try {
      _sub?.cancel();
    } catch (_) {}
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final t = _viewType;
    if (t == null) return const ColoredBox(color: Color(0xFF111827), child: Center(child: CircularProgressIndicator()));
    return HtmlElementView(viewType: t);
  }
}
