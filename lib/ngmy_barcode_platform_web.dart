import 'dart:html' as html;

/// Phone browsers (PWA) can scan; desktop web uses manual entry.
bool get ngmyBarcodeUseCamera {
  final ua = html.window.navigator.userAgent.toLowerCase();
  final mobile = ua.contains('iphone') ||
      ua.contains('ipad') ||
      ua.contains('ipod') ||
      ua.contains('android') ||
      ua.contains('mobile');
  return mobile;
}
