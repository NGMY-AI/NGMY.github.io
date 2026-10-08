import 'dart:async';

import 'package:flutter/foundation.dart';

enum NgmyAdvisorBrowserLoadState { idle, loading, ready, failed }

/// One live browser port per advisor chat — never replaces the whole app UI.
class NgmyAdvisorBrowserSession extends ChangeNotifier {
  String _url = '';
  String _label = '';
  bool _visible = false;
  int _sizeIndex = 0;
  static const _heights = [148.0, 260.0, 380.0];

  NgmyAdvisorBrowserLoadState _loadState = NgmyAdvisorBrowserLoadState.idle;
  String _errorMessage = '';
  String _lastLoadAttemptUrl = '';
  DateTime? _lastLoadAttemptAt;
  Timer? _loadDebounce;

  NgmyAdvisorBrowserController? _controller;

  String get url => _url;
  String get label => _label;
  bool get visible => _visible;
  double get previewHeight => _heights[_sizeIndex.clamp(0, _heights.length - 1)];
  NgmyAdvisorBrowserLoadState get loadState => _loadState;
  String get errorMessage => _errorMessage;

  void attachController(NgmyAdvisorBrowserController controller) {
    _controller = controller;
    if (_url.isNotEmpty && _loadState != NgmyAdvisorBrowserLoadState.ready) {
      _scheduleLoad(force: false);
    }
  }

  void detachController(NgmyAdvisorBrowserController controller) {
    if (identical(_controller, controller)) _controller = null;
  }

  /// Show the port with a URL but do not load yet (safe restore from chat history).
  void stage(String url, {String? label}) {
    final u = _normalizeUrl(url);
    if (u.isEmpty) return;
    _url = u;
    if ((label ?? '').trim().isNotEmpty) _label = label!.trim();
    _visible = true;
    _loadState = NgmyAdvisorBrowserLoadState.idle;
    _errorMessage = '';
    notifyListeners();
  }

  Future<void> open(String url, {String? label, bool force = false}) async {
    final u = _normalizeUrl(url);
    if (u.isEmpty) return;

    final sameUrl = u == _url;
    if (!force &&
        sameUrl &&
        _visible &&
        (_loadState == NgmyAdvisorBrowserLoadState.ready ||
            _loadState == NgmyAdvisorBrowserLoadState.loading)) {
      if ((label ?? '').trim().isNotEmpty) _label = label!.trim();
      notifyListeners();
      return;
    }

    _url = u;
    if ((label ?? '').trim().isNotEmpty) _label = label!.trim();
    _visible = true;
    _errorMessage = '';
    notifyListeners();
    _scheduleLoad(force: force || !sameUrl);
  }

  void _scheduleLoad({required bool force}) {
    _loadDebounce?.cancel();
    _loadDebounce = Timer(const Duration(milliseconds: 350), () {
      unawaited(_loadNow(force: force));
    });
  }

  Future<void> _loadNow({required bool force}) async {
    if (_url.isEmpty || _controller == null) return;

    final now = DateTime.now();
    if (!force &&
        _lastLoadAttemptUrl == _url &&
        _lastLoadAttemptAt != null &&
        now.difference(_lastLoadAttemptAt!) < const Duration(seconds: 8)) {
      return;
    }

    _lastLoadAttemptUrl = _url;
    _lastLoadAttemptAt = now;
    _loadState = NgmyAdvisorBrowserLoadState.loading;
    _errorMessage = '';
    notifyListeners();
    await _controller!.loadUrl(_url);
  }

  Future<void> retryLoad() async => _loadNow(force: true);

  void markReady() {
    _loadState = NgmyAdvisorBrowserLoadState.ready;
    _errorMessage = '';
    notifyListeners();
  }

  void markFailed(String message) {
    final msg = message.trim();
    if (msg.isEmpty) return;
    _loadState = NgmyAdvisorBrowserLoadState.failed;
    _errorMessage = msg;
    notifyListeners();
  }

  Future<void> startLoad() async => _loadNow(force: true);

  Future<void> hide() async {
    _loadDebounce?.cancel();
    _visible = false;
    _sizeIndex = 0;
    _loadState = NgmyAdvisorBrowserLoadState.idle;
    _errorMessage = '';
    await _controller?.resetToBlank();
    notifyListeners();
  }

  void cycleSize() {
    _sizeIndex = (_sizeIndex + 1) % _heights.length;
    notifyListeners();
  }

  Future<void> applyCommands(List<NgmyAdvisorBrowserCommand> commands) async {
    for (final cmd in commands) {
      switch (cmd.op) {
        case 'navigate':
        case 'open':
          final u = _normalizeUrl(cmd.url ?? '');
          if (u.isNotEmpty) await open(u, label: cmd.label);
          break;
        case 'back':
          await _controller?.goBack();
          break;
        case 'forward':
          await _controller?.goForward();
          break;
        case 'reload':
          if (_loadState != NgmyAdvisorBrowserLoadState.loading) {
            await _loadNow(force: true);
          }
          break;
        case 'click_text':
          final t = (cmd.text ?? '').trim();
          if (t.isNotEmpty) await _controller?.clickByVisibleText(t);
          break;
        case 'click_selector':
          final s = (cmd.selector ?? '').trim();
          if (s.isNotEmpty) await _controller?.clickSelector(s);
          break;
      }
    }
  }

  String _normalizeUrl(String raw) {
    var u = raw.trim();
    if (u.isEmpty) return '';
    if (!u.startsWith('http://') && !u.startsWith('https://')) u = 'https://$u';
    return u;
  }

  @override
  void dispose() {
    _loadDebounce?.cancel();
    super.dispose();
  }
}

class NgmyAdvisorBrowserCommand {
  final String op;
  final String? url;
  final String? label;
  final String? text;
  final String? selector;

  const NgmyAdvisorBrowserCommand({
    required this.op,
    this.url,
    this.label,
    this.text,
    this.selector,
  });

  static NgmyAdvisorBrowserCommand? fromJson(Map<String, dynamic> json) {
    final op = (json['op'] ?? json['type'] ?? '').toString().trim().toLowerCase();
    if (op.isEmpty) return null;
    return NgmyAdvisorBrowserCommand(
      op: op,
      url: json['url']?.toString(),
      label: json['label']?.toString(),
      text: json['text']?.toString(),
      selector: json['selector']?.toString(),
    );
  }
}

abstract class NgmyAdvisorBrowserController {
  Future<void> loadUrl(String url);
  Future<void> goBack();
  Future<void> goForward();
  Future<void> resetToBlank();
  Future<void> clickByVisibleText(String text);
  Future<void> clickSelector(String selector);
}

bool ngmyAdvisorBrowserBlocksHost(String host) {
  final h = host.toLowerCase();
  return h == 'ngmy.org' || h.endsWith('.ngmy.org');
}
