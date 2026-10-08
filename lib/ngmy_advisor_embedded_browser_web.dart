import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_advisor_browser_session.dart';

class NgmyAdvisorEmbeddedBrowser extends StatefulWidget {
  const NgmyAdvisorEmbeddedBrowser({
    super.key,
    required this.session,
    required this.height,
    this.interactive = true,
  });

  final NgmyAdvisorBrowserSession session;
  final double height;
  final bool interactive;

  @override
  State<NgmyAdvisorEmbeddedBrowser> createState() => _NgmyAdvisorEmbeddedBrowserState();
}

class _NgmyAdvisorEmbeddedBrowserState extends State<NgmyAdvisorEmbeddedBrowser> implements NgmyAdvisorBrowserController {
  late final String _viewType;
  html.IFrameElement? _frame;
  var _loading = true;

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-advisor-browser-${identityHashCode(this)}';
    _registerFrame();
    widget.session.attachController(this);
  }

  @override
  void dispose() {
    widget.session.detachController(this);
    super.dispose();
  }

  void _registerFrame() {
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      _frame = html.IFrameElement()
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..setAttribute(
          'sandbox',
          'allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-popups-to-escape-sandbox',
        )
        ..allowFullscreen = false;
      _frame!.onLoad.listen((_) {
        if (mounted) setState(() => _loading = false);
      });
      if (widget.session.url.isNotEmpty) {
        _frame!.src = widget.session.url;
      }
      return _frame!;
    });
  }

  @override
  Future<void> loadUrl(String url) async {
    if (_frame == null) return;
    if (mounted) setState(() => _loading = true);
    _frame!.src = url;
  }

  @override
  Future<void> goBack() async {
    try {
      _frame?.contentWindow?.history.back();
    } catch (_) {}
  }

  @override
  Future<void> goForward() async {
    try {
      _frame?.contentWindow?.history.forward();
    } catch (_) {}
  }

  @override
  Future<void> reload() async {
    final frame = _frame;
    if (frame == null) return;
    final current = frame.src ?? '';
    if (current.isNotEmpty) frame.src = current;
  }

  @override
  Future<void> clickByVisibleText(String text) async {}

  @override
  Future<void> clickSelector(String selector) async {}

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: widget.height,
      width: double.infinity,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(12),
        child: Stack(
          fit: StackFit.expand,
          children: [
            HtmlElementView(viewType: _viewType),
            if (!widget.interactive) const AbsorbPointer(child: SizedBox.expand()),
            if (_loading)
              const ColoredBox(
                color: Color(0x66000000),
                child: Center(
                  child: SizedBox(
                    width: 22,
                    height: 22,
                    child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
                  ),
                ),
              ),
          ],
        ),
      ),
    );
  }
}
