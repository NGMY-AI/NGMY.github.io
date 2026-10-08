import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:webview_flutter_android/webview_flutter_android.dart';
import 'package:webview_flutter_wkwebview/webview_flutter_wkwebview.dart';

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
  var _loading = false;

  @override
  void initState() {
    super.initState();
    _controller = _buildController();
    widget.session.attachController(this);
  }

  @override
  void dispose() {
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
          onPageStarted: (_) {
            if (mounted) setState(() => _loading = true);
          },
          onPageFinished: (_) {
            if (mounted) setState(() => _loading = false);
          },
          onWebResourceError: (_) {
            if (mounted) setState(() => _loading = false);
          },
        ),
      );

    final platform = controller.platform;
    if (platform is AndroidWebViewController) {
      platform.setMediaPlaybackRequiresUserGesture(false);
    }
    return controller;
  }

  @override
  Future<void> loadUrl(String url) async {
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    if (mounted) setState(() => _loading = true);
    await _controller.loadRequest(uri);
  }

  @override
  Future<void> goBack() => _controller.goBack();

  @override
  Future<void> goForward() => _controller.goForward();

  @override
  Future<void> reload() => _controller.reload();

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
