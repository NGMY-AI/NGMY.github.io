import 'dart:html' as html;

String? _slugFromPath(String path) {
  final segments = path.split('/').where((s) => s.isNotEmpty).toList();
  for (var i = 0; i < segments.length - 1; i++) {
    if (segments[i].toLowerCase() == 'app') {
      final slug = segments[i + 1].trim().toLowerCase();
      if (slug.isNotEmpty && slug != 'index.html') return slug;
    }
  }
  return null;
}

String? ngmyReadAppSlugFromLaunchUrl() {
  final uri = Uri.parse(html.window.location.href);

  final fromPath = _slugFromPath(uri.path);
  if (fromPath != null && fromPath.isNotEmpty) return fromPath;

  final slug = uri.queryParameters['ngmy_app']?.trim();
  if (slug != null && slug.isNotEmpty) return slug.toLowerCase();

  final hash = uri.fragment.trim();
  if (hash.startsWith('app/')) {
    final fromHash = hash.substring(4).trim();
    if (fromHash.isNotEmpty) return fromHash.toLowerCase();
  }
  return null;
}

String ngmyAppBuilderBaseUrl() {
  const fallback = 'https://ngmy-ai.github.io/NGMY.github.io/';
  try {
    final origin = html.window.location.origin;
    final path = html.window.location.pathname ?? '/';
    if (origin.isEmpty) return fallback;
    var basePath = path;
    if (basePath.contains('/app/')) {
      basePath = basePath.substring(0, basePath.indexOf('/app/'));
    }
    if (!basePath.endsWith('/')) basePath = '$basePath/';
    if (basePath == '/') return '$origin/NGMY.github.io/';
    return '$origin$basePath';
  } catch (_) {
    return fallback;
  }
}
