import 'dart:async';

import 'package:flutter/foundation.dart';

/// One live browser port per advisor chat — never replaces the whole app UI.
class NgmyAdvisorBrowserSession extends ChangeNotifier {
  String _url = '';
  String _label = '';
  bool _visible = false;
  int _sizeIndex = 0;
  static const _heights = [148.0, 260.0, 380.0];
  NgmyAdvisorBrowserController? _controller;

  String get url => _url;
  String get label => _label;
  bool get visible => _visible;
  double get previewHeight => _heights[_sizeIndex.clamp(0, _heights.length - 1)];

  void attachController(NgmyAdvisorBrowserController controller) {
    _controller = controller;
    if (_url.isNotEmpty) {
      unawaited(controller.loadUrl(_url));
    }
  }

  void detachController(NgmyAdvisorBrowserController controller) {
    if (identical(_controller, controller)) _controller = null;
  }

  Future<void> open(String url, {String? label}) async {
    final u = _normalizeUrl(url);
    if (u.isEmpty) return;
    _url = u;
    if ((label ?? '').trim().isNotEmpty) _label = label!.trim();
    _visible = true;
    notifyListeners();
    await _controller?.loadUrl(u);
  }

  Future<void> hide() async {
    _visible = false;
    _sizeIndex = 0;
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
          await _controller?.reload();
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
  Future<void> reload();
  Future<void> clickByVisibleText(String text);
  Future<void> clickSelector(String selector);
}
