import 'dart:async';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

Future<bool> ngmyWebFetchOk(String url, Duration timeout) async {
  try {
    final req = await html.HttpRequest.request(
      url,
      method: 'HEAD',
    ).timeout(timeout);
    return req.status != null && req.status! >= 200 && req.status! < 500;
  } catch (_) {
    try {
      final req = await html.HttpRequest.request(url, responseType: 'text').timeout(timeout);
      return req.status != null && req.status! >= 200 && req.status! < 500;
    } catch (_) {
      return false;
    }
  }
}
