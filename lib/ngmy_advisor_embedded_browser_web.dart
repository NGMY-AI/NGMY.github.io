import 'dart:async';
import 'dart:html' as html;
import 'dart:ui_web' as ui_web;

import 'package:flutter/material.dart';

import 'ngmy_advisor_browser_fetch.dart';
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
  Timer? _loadTimeout;
  String _lastLoaded = '';

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-advisor-browser-${identityHashCode(this)}';
    _registerFrame();
    widget.session.attachController(this);
  }

  @override
  void dispose() {
    _loadTimeout?.cancel();
    widget.session.detachController(this);
    super.dispose();
  }

  void _registerFrame() {
    ui_web.platformViewRegistry.registerViewFactory(_viewType, (int _) {
      final shell = html.DivElement()
        ..style.width = '100%'
        ..style.height = '100%'
        ..style.overflow = 'hidden'
        ..style.backgroundColor = '#0f172a'
        ..style.isolation = 'isolate'
        ..style.transform = 'translateZ(0)';

      _frame = html.IFrameElement()
        ..style.border = 'none'
        ..style.width = '100%'
        ..style.height = '100%'
        ..setAttribute(
          'sandbox',
          'allow-scripts allow-same-origin allow-forms allow-popups allow-modals',
        )
        ..allowFullscreen = false
        ..src = 'about:blank';

      _frame!.onLoad.listen((_) {
        _loadTimeout?.cancel();
        if (!mounted) return;
        if (widget.session.loadState == NgmyAdvisorBrowserLoadState.loading) {
          widget.session.markReady();
          setState(() {});
        }
      });

      shell.append(_frame!);
      return shell;
    });
  }

  void _armTimeout() {
    _loadTimeout?.cancel();
    _loadTimeout = Timer(const Duration(seconds: 28), () {
      if (!mounted) return;
      if (widget.session.loadState == NgmyAdvisorBrowserLoadState.loading) {
        unawaited(resetToBlank());
        widget.session.markFailed(
          'This page could not load in the mini browser. '
          'Ask your advisor to guide you step by step — chat still works.',
        );
        setState(() {});
      }
    });
  }

  @override
  Future<void> loadUrl(String url) async {
    final frame = _frame;
    if (frame == null) return;
    if (_lastLoaded == url && widget.session.loadState == NgmyAdvisorBrowserLoadState.ready) {
      return;
    }
    final uri = Uri.tryParse(url);
    if (uri == null || uri.host.isEmpty) {
      widget.session.markFailed('Invalid link.');
      return;
    }
    if (ngmyAdvisorBrowserBlocksHost(uri.host)) {
      widget.session.markFailed('NGMY stays open — only the requested site loads in this window.');
      return;
    }

    _lastLoaded = url;
    _armTimeout();
    if (mounted) setState(() {});

    final html = await ngmyFetchAdvisorBrowserHtml(url);
    if (!mounted) return;

    if (html != null && html.trim().isNotEmpty) {
      frame.src = 'about:blank';
      frame.srcdoc = html;
      _loadTimeout?.cancel();
      widget.session.markReady();
      if (mounted) setState(() {});
      return;
    }

    await resetToBlank();
    widget.session.markFailed(
      'Could not load this site in the mini browser yet. '
      'Pull down to refresh NGMY, then try again — your chat is still safe.',
    );
    if (mounted) setState(() {});
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
  Future<void> resetToBlank() async {
    _loadTimeout?.cancel();
    _lastLoaded = '';
    final frame = _frame;
    if (frame == null) return;
    frame.removeAttribute('srcdoc');
    frame.src = 'about:blank';
  }

  @override
  Future<void> clickByVisibleText(String text) async {}

  @override
  Future<void> clickSelector(String selector) async {}

  @override
  Widget build(BuildContext context) {
    final loading = widget.session.loadState == NgmyAdvisorBrowserLoadState.loading;
    final failed = widget.session.loadState == NgmyAdvisorBrowserLoadState.failed;

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
            if (loading)
              const ColoredBox(
                color: Color(0x88000000),
                child: Center(
                  child: SizedBox(
                    width: 22,
                    height: 22,
                    child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white70),
                  ),
                ),
              ),
            if (failed)
              ColoredBox(
                color: const Color(0xEE0F172A),
                child: Padding(
                  padding: const EdgeInsets.all(12),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const Icon(Icons.wifi_off_rounded, color: Colors.white54, size: 28),
                      const SizedBox(height: 8),
                      Text(
                        widget.session.errorMessage,
                        textAlign: TextAlign.center,
                        style: const TextStyle(color: Colors.white70, fontSize: 11, height: 1.35),
                      ),
                      const SizedBox(height: 10),
                      TextButton(
                        onPressed: () => widget.session.retryLoad(),
                        child: const Text('Try again'),
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
}
