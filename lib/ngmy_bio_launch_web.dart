import 'dart:html' as html;

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
