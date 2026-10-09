import 'dart:async';

import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';
import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';

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
  late final WebViewController _controller;
  Timer? _loadTimeout;
  String _loadedUrl = '';

  @override
  void initState() {
    super.initState();
    _controller = _buildController();
    widget.session.attachController(this);
  }

  @override
  void dispose() {
    _loadTimeout?.cancel();
    widget.session.detachController(this);
    super.dispose();
  }

  WebViewController _buildController() {
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
      ..setBackgroundColor(const Color(0xFF0F172A))
      ..setNavigationDelegate(
        NavigationDelegate(
          onNavigationRequest: (request) {
            if (!request.isMainFrame) return NavigationDecision.navigate;
            final next = Uri.tryParse(request.url);
            if (next != null && ngmyAdvisorBrowserBlocksHost(next.host)) {
              return NavigationDecision.prevent;
            }
            if (ngmyAdvisorNeedsRealBrowser(request.url)) {
              unawaited(ngmyOpenInRealBrowser(request.url));
              return NavigationDecision.prevent;
            }
            return NavigationDecision.navigate;
          },
          onPageStarted: (_) {
            _loadTimeout?.cancel();
            _armTimeout();
            if (mounted) setState(() {});
          },
          onPageFinished: (_) {
            _loadTimeout?.cancel();
            widget.session.markReady();
            if (mounted) setState(() {});
          },
          onWebResourceError: (error) {
            if (error.isForMainFrame != true) return;
            _loadTimeout?.cancel();
            widget.session.markFailed(error.description);
            if (mounted) setState(() {});
          },
        ),
      );

    final platform = controller.platform;
    if (platform is AndroidWebViewController) {
      platform.setMediaPlaybackRequiresUserGesture(false);
    }
    return controller;
  }

  void _armTimeout() {
    _loadTimeout?.cancel();
    _loadTimeout = Timer(const Duration(seconds: 18), () {
      if (!mounted) return;
      if (widget.session.loadState == NgmyAdvisorBrowserLoadState.loading) {
        widget.session.markFailed('Page timed out in the mini browser.');
        setState(() {});
      }
    });
  }

  @override
  Future<void> loadUrl(String url) async {
    final uri = Uri.tryParse(url);
    if (uri == null || uri.host.isEmpty) {
      widget.session.markFailed('Invalid link.');
      return;
    }
    if (ngmyAdvisorBrowserBlocksHost(uri.host)) {
      widget.session.markFailed('NGMY stays open — only the requested site loads here.');
      return;
    }
    if (_loadedUrl == url && widget.session.loadState == NgmyAdvisorBrowserLoadState.ready) {
      return;
    }
    _loadedUrl = url;
    _armTimeout();
    final html = await ngmyFetchAdvisorBrowserHtml(url);
    if (html != null && html.trim().isNotEmpty) {
      await _controller.loadHtmlString(html, baseUrl: '${uri.origin}/');
      _loadTimeout?.cancel();
      widget.session.markReady();
      if (mounted) setState(() {});
      return;
    }
    await _controller.loadRequest(uri);
  }

  @override
  Future<void> goBack() => _controller.goBack();

  @override
  Future<void> goForward() => _controller.goForward();

  @override
  Future<void> resetToBlank() async {
    _loadTimeout?.cancel();
    _loadedUrl = '';
    await _controller.loadRequest(Uri.parse('about:blank'));
  }

  @override
  Future<void> clickByVisibleText(String text) async {
    final escaped = text.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
    await _controller.runJavaScript('''
(function(){
  var t = '$escaped'.toLowerCase();
  var nodes = document.querySelectorAll('a,button,[role=button],input[type=submit]');
  for (var i=0;i<nodes.length;i++){
    var el = nodes[i];
    var label = (el.innerText || el.value || el.getAttribute('aria-label') || '').trim().toLowerCase();
    if (label.indexOf(t) >= 0) { el.click(); return 'ok'; }
  }
  return 'miss';
})()
''');
  }

  @override
  Future<void> clickSelector(String selector) async {
    final escaped = selector.replaceAll('\\', '\\\\').replaceAll("'", "\\'");
    await _controller.runJavaScript("document.querySelector('$escaped')?.click();");
  }

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
            AbsorbPointer(
              absorbing: !widget.interactive,
              child: WebViewWidget(controller: _controller),
            ),
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
