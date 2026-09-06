import 'dart:convert';
import 'dart:html' as html;
import 'dart:js' as js;
import 'dart:js_util' as js_util;

import 'ngmy_bio_urls.dart';

String? _slugFromPath(String path) {
  final match = RegExp(r'/bio/([^/?#]+)', caseSensitive: false).firstMatch(path);
  if (match != null) {
    final slug = match.group(1)?.trim().toLowerCase();
    if (slug != null && slug.isNotEmpty && slug != 'index.html') return slug;
  }
  final segments = path.split('/').where((s) => s.isNotEmpty).toList();
  for (var i = 0; i < segments.length - 1; i++) {
    if (segments[i].toLowerCase() == 'bio') {
      final slug = segments[i + 1].trim().toLowerCase();
      if (slug.isNotEmpty && slug != 'index.html') return slug;
    }
  }
  return null;
}

String? ngmyReadBioSlugFromLaunchUrl() {
  final uri = Uri.parse(html.window.location.href);
  final fromPath = _slugFromPath(uri.path);
  if (fromPath != null && fromPath.isNotEmpty) {
    final slug = ngmySanitizeBioSlug(Uri.decodeComponent(fromPath));
    if (slug.isNotEmpty) {
      try {
        html.window.sessionStorage['ngmy_guest_bio_slug'] = slug;
      } catch (_) {}
      return slug;
    }
  }

  final q = (uri.queryParameters['b'] ?? uri.queryParameters['ngmy_bio'] ?? '').trim();
  if (q.isNotEmpty) {
    final slug = ngmySanitizeBioSlug(q);
    if (slug.isNotEmpty) {
      try {
        html.window.sessionStorage['ngmy_guest_bio_slug'] = slug;
      } catch (_) {}
      return slug;
    }
  }

  try {
    final stored = html.window.sessionStorage['ngmy_guest_bio_slug'];
    if (stored != null && stored.trim().isNotEmpty) {
      final slug = ngmySanitizeBioSlug(stored);
      if (slug.isNotEmpty) return slug;
    }
  } catch (_) {}

  final hash = uri.fragment.trim().replaceFirst(RegExp(r'^/?'), '');
  if (hash.startsWith('bio/')) {
    final fromHash = hash.substring(4).split('/').first.trim();
    final slug = ngmySanitizeBioSlug(fromHash);
    if (slug.isNotEmpty) return slug;
  }

  return null;
}

Map<String, dynamic>? ngmyReadPrefetchedGuestBio() {
  try {
    final raw = js.context['__NGMY_GUEST_BIO_ENTRY'];
    if (raw == null) return null;
    final encoded = js.context.callMethod('JSON.stringify', [raw]);
    if (encoded is! String || encoded.isEmpty || encoded == 'null') return null;
    final decoded = jsonDecode(encoded);
    if (decoded is Map && decoded['data'] is Map) {
      return Map<String, dynamic>.from(decoded);
    }
  } catch (_) {}
  return null;
}

Future<Map<String, dynamic>?> ngmyWaitPrefetchedGuestBio() async {
  final ready = ngmyReadPrefetchedGuestBio();
  if (ready != null) return ready;
  try {
    final pending = js.context['__NGMY_GUEST_BIO_PREFETCH'];
    if (pending != null) {
      await js_util.promiseToFuture<dynamic>(pending).timeout(const Duration(seconds: 4));
    }
  } catch (_) {}
  return ngmyReadPrefetchedGuestBio();
}
