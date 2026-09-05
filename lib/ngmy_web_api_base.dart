/// Same-origin prefix for `/api/sync` and `/api/rest/v1`.
///
/// Flutter's [Uri.base] is the **current page**, so a guest on
/// `https://ngmy.org/bio/kbpablo` has path `/bio/kbpablo`. Using that as the
/// API root POSTs to `/bio/kbpablo/api/sync`, which GitHub Pages 404s — and
/// the Bio guest screen then says the link is gone. Always strip those
/// deep-link segments (and keep only a real project-pages base).
String ngmyWebApiBasePath(String documentPath) {
  var p = documentPath.trim();
  if (p.isEmpty || p == '/') return '';

  const project = '/NGMY.github.io';
  final onProject = p == project || p.startsWith('$project/');
  if (onProject) {
    final rest = _stripPublicDeepLink(p.substring(project.length));
    return rest.isEmpty ? project : '$project$rest';
  }
  return _stripPublicDeepLink(p);
}

String _stripPublicDeepLink(String path) {
  var p = path.trim();
  if (p.isEmpty || p == '/') return '';
  if (!p.startsWith('/')) p = '/$p';
  p = p.replaceFirst(RegExp(r'/index\.html$', caseSensitive: false), '');
  p = p.replaceFirst(
    RegExp(
      r'/(?:bio|menu|local-bio|local-menu|invoice|app|enroll|civic)(?:/[^/?#]*)*/?$',
      caseSensitive: false,
    ),
    '',
  );
  if (p.endsWith('/')) p = p.substring(0, p.length - 1);
  if (p.isEmpty || p == '/') return '';
  return p;
}
