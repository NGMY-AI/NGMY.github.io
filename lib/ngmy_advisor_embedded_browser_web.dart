import 'dart:async';
import 'dart:convert';
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
  StreamSubscription<html.MessageEvent>? _messages;
  // Own history — the sandboxed frame is cross-origin, so its history can't be driven.
  final List<String> _history = [];
  int _historyIndex = -1;
  bool _historyNav = false;
  /// Picture mode — modern app sites that can't run inside this window.
  String? _shotB64;
  bool _shotLoading = false;

  Future<void> _showPicture(String url) async {
    if (mounted) setState(() => _shotLoading = true);
    final shot = await ngmyFetchAdvisorBrowserShot(url);
    if (!mounted || _lastLoaded != url) return;
    setState(() {
      _shotLoading = false;
      if (shot != null) _shotB64 = shot;
    });
    if (shot != null) {
      widget.session.markReady();
    } else if (_shotB64 == null) {
      widget.session.markFailed('This site only works in a full browser. Tap Open to view it.');
    }
  }

  @override
  void initState() {
    super.initState();
    _viewType = 'ngmy-advisor-browser-${identityHashCode(this)}';
    _registerFrame();
    _messages = html.window.onMessage.listen(_onFrameMessage);
    widget.session.attachController(this);
  }

  @override
  void dispose() {
    _loadTimeout?.cancel();
    _messages?.cancel();
    widget.session.detachController(this);
    super.dispose();
  }

  /// Messages from the relay bridge inside the page (link taps, click results).
  void _onFrameMessage(html.MessageEvent e) {
    // Sandboxed srcdoc pages post with the opaque origin "null".
    if (_frame == null || e.origin != 'null') return;
    final data = e.data;
    if (data is! Map) return;
    if (data['ngmyBrowser'] == 'navigate') {
      final url = (data['url'] ?? '').toString();
      if (url.startsWith('http')) unawaited(widget.session.open(url, force: true));
    }
    if (data['ngmyBrowser'] == 'needsRealBrowser') {
      // Login form — only works on the real site, so open the page in the phone's browser.
      unawaited(ngmyOpenInRealBrowser(_lastLoaded.isNotEmpty ? _lastLoaded : widget.session.url));
    }
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
        // NO allow-same-origin: srcdoc pages would otherwise run AS ngmy.org and could read
        // the user's NGMY session. Sandboxed pages get an opaque origin instead.
        ..setAttribute(
          'sandbox',
          'allow-scripts allow-forms allow-popups allow-modals',
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
    if (!_historyNav) {
      if (_historyIndex < _history.length - 1) {
        _history.removeRange(_historyIndex + 1, _history.length);
      }
      if (_history.isEmpty || _history.last != url) _history.add(url);
      _historyIndex = _history.length - 1;
    }
    _historyNav = false;
    _armTimeout();
    if (mounted) setState(() {});

    _shotB64 = null;
    final page = await ngmyFetchAdvisorBrowserPage(url);
    if (!mounted || _lastLoaded != url) return;
    final html = page.html;

    if (page.appShell || html == null) {
      // Can't run here (blank otherwise) — show a real rendered picture of the page.
      _loadTimeout?.cancel();
      frame.removeAttribute('srcdoc');
      frame.src = 'about:blank';
      await _showPicture(url);
      return;
    }

    if (html.trim().isNotEmpty) {
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
    if (_historyIndex <= 0) return;
    _historyIndex--;
    _historyNav = true;
    await widget.session.open(_history[_historyIndex], force: true);
  }

  @override
  Future<void> goForward() async {
    if (_historyIndex >= _history.length - 1) return;
    _historyIndex++;
    _historyNav = true;
    await widget.session.open(_history[_historyIndex], force: true);
  }

  @override
  Future<void> resetToBlank() async {
    _loadTimeout?.cancel();
    _lastLoaded = '';
    _shotB64 = null;
    final frame = _frame;
    if (frame == null) return;
    frame.removeAttribute('srcdoc');
    frame.src = 'about:blank';
  }

  @override
  Future<void> clickByVisibleText(String text) async {
    _frame?.contentWindow?.postMessage({'ngmyBrowserCmd': 'click_text', 'text': text}, '*');
  }

  @override
  Future<void> clickSelector(String selector) async {
    _frame?.contentWindow?.postMessage({'ngmyBrowserCmd': 'click_selector', 'selector': selector}, '*');
  }

  Widget _pictureView() {
    Widget img;
    try {
      img = Image.memory(
        base64Decode(_shotB64!),
        fit: BoxFit.cover,
        alignment: Alignment.topCenter,
        gaplessPlayback: true,
        errorBuilder: (_, _, _) => const SizedBox.shrink(),
      );
    } catch (_) {
      img = const SizedBox.shrink();
    }
    final url = _lastLoaded;
    return ColoredBox(
      color: const Color(0xFF0F172A),
      child: Stack(
        fit: StackFit.expand,
        children: [
          img,
          Positioned(
            left: 8,
            right: 8,
            bottom: 8,
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                  decoration: BoxDecoration(color: const Color(0xCC0F172A), borderRadius: BorderRadius.circular(999)),
                  child: const Text('Snapshot', style: TextStyle(color: Colors.white70, fontSize: 10.5)),
                ),
                const Spacer(),
                _pill(_shotLoading ? 'Refreshing…' : 'Refresh', _shotLoading ? null : () => _showPicture(url)),
                const SizedBox(width: 6),
                _pill('Open', () => html.window.open(url, '_blank')),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _pill(String label, VoidCallback? onTap) => Material(
        color: const Color(0xE60EA5E9),
        borderRadius: BorderRadius.circular(999),
        child: InkWell(
          borderRadius: BorderRadius.circular(999),
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            child: Text(label, style: const TextStyle(color: Colors.white, fontSize: 11, fontWeight: FontWeight.w700)),
          ),
        ),
      );

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
            if (_shotB64 != null) _pictureView(),
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
