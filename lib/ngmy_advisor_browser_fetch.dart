import 'package:flutter/foundation.dart';

import 'ngmy_edge_invoke.dart';

/// Relay page + whether it is a JS app shell that can't run re-hosted (needs a picture instead).
Future<({String? html, bool appShell})> ngmyFetchAdvisorBrowserPage(String url) async {
  final u = url.trim();
  if (u.isEmpty) return (html: null, appShell: false);
  try {
    final res = await ngmyEdgeInvoke({'action': 'advisorBrowserFrame', 'url': u}, timeout: const Duration(seconds: 25));
    if (res == null || res['ok'] != true) return (html: null, appShell: false);
    final html = (res['html'] ?? '').toString();
    return (html: html.trim().length < 32 ? null : html, appShell: res['appShell'] == true);
  } catch (e) {
    debugPrint('[advisor-browser] relay error: $e');
    return (html: null, appShell: false);
  }
}

/// Real rendered picture of the page (from a cloud browser), base64 PNG.
Future<String?> ngmyFetchAdvisorBrowserShot(String url) async {
  try {
    final res = await ngmyEdgeInvoke({'action': 'advisorBrowserShot', 'url': url.trim()}, timeout: const Duration(seconds: 30));
    final b64 = (res?['screenshotBase64'] ?? '').toString().trim();
    return b64.isEmpty ? null : b64;
  } catch (e) {
    debugPrint('[advisor-browser] shot error: $e');
    return null;
  }
}

/// Loads page HTML through NGMY Edge so the mini browser can show sites that block iframes.
Future<String?> ngmyFetchAdvisorBrowserHtml(String url, {Duration timeout = const Duration(seconds: 25)}) async {
  final u = url.trim();
  if (u.isEmpty) return null;
  try {
    final res = await ngmyEdgeInvoke(
      {'action': 'advisorBrowserFrame', 'url': u},
      timeout: timeout,
    );
    if (res == null || res['ok'] != true) {
      debugPrint('[advisor-browser] relay: ${res?['error']}');
      return null;
    }
    final html = (res['html'] ?? '').toString();
    if (html.trim().length < 32) return null;
    return html;
  } catch (e) {
    debugPrint('[advisor-browser] relay error: $e');
    return null;
  }
}
