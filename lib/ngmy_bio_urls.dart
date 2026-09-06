const String kNgmyBioPublicOrigin = 'https://ngmy.org';

/// Legacy pretty path — Safari/Chrome still open it. Instagram's in-app
/// browser treats GitHub Pages' 404.html fallback as a broken link.
const String kNgmyBioPublicBaseUrl = 'https://ngmy.org/bio/';

/// Letters in the public path after /bio/ — keep links short.
const int kNgmyBioSlugMaxLetters = 10;

/// Optional 1–2 digits in front of the letters, e.g. 12kbpabloq
const int kNgmyBioSlugMaxDigitPrefix = 2;

String ngmyBioPublicUrlForSlug(String slug) {
  final s = ngmySanitizeBioSlug(slug);
  if (s.isEmpty) return '';
  // Query on the real homepage returns HTTP 200. Instagram, TikTok, and
  // Facebook in-app browsers refuse /bio/{slug} because GitHub Pages
  // serves that path as 404.html.
  return '$kNgmyBioPublicOrigin/?b=$s';
}

/// Turns a typed value or pasted URL into a short public slug:
/// optional 1–2 digits + up to 10 letters. Never a full Instagram/web URL.
String ngmySanitizeBioSlug(String raw) {
  var s = raw.trim().toLowerCase();
  if (s.isEmpty) return '';

  final asUri = Uri.tryParse(s.contains('://') ? s : 'https://$s');
  if (asUri != null) {
    final fromQuery = (asUri.queryParameters['b'] ??
            asUri.queryParameters['ngmy_bio'] ??
            asUri.queryParameters['m'] ??
            asUri.queryParameters['ngmy_menu'] ??
            '')
        .trim();
    if (fromQuery.isNotEmpty) s = fromQuery;
  }

  s = s.replaceAll(RegExp(r'^https?://'), '');
  s = s.split(RegExp(r'[?#]')).first;
  if (s.contains('/')) {
    final parts = s.split('/').where((p) {
      final t = p.trim();
      if (t.isEmpty) return false;
      if (t == 'bio' || t == 'www' || t == 'index.html') return false;
      if (t.contains('.')) return false;
      return true;
    }).toList();
    if (parts.isNotEmpty) s = parts.last;
  }

  final digits = StringBuffer();
  final letters = StringBuffer();
  for (final unit in s.codeUnits) {
    final ch = String.fromCharCode(unit);
    if (ch.compareTo('0') >= 0 && ch.compareTo('9') <= 0) {
      if (letters.isEmpty && digits.length < kNgmyBioSlugMaxDigitPrefix) {
        digits.write(ch);
      }
    } else if (ch.compareTo('a') >= 0 && ch.compareTo('z') <= 0) {
      if (letters.length < kNgmyBioSlugMaxLetters) letters.write(ch);
    }
  }
  var out = '${digits.toString()}${letters.toString()}';
  if (out.isNotEmpty && !RegExp(r'[a-z]').hasMatch(out)) {
    out = ngmySanitizeBioSlug('${out}bio');
  }
  return out;
}

String ngmyBuildUniqueBioSlug(
  String base,
  List<String> existingSlugs, {
  String emptyFallback = 'bio',
}) {
  var slug = ngmySanitizeBioSlug(base);
  if (slug.isEmpty) slug = ngmySanitizeBioSlug(emptyFallback);
  if (slug.isEmpty) slug = emptyFallback.replaceAll(RegExp(r'[^a-z]'), '');
  if (slug.isEmpty) slug = 'bio';
  final taken = <String>{
    for (final e in existingSlugs) ngmySanitizeBioSlug(e),
  }..removeWhere((e) => e.isEmpty);
  if (!taken.contains(slug)) return slug;

  final letters = slug.replaceFirst(RegExp(r'^[0-9]+'), '');
  final core = letters.isEmpty ? slug : letters;
  for (var n = 1; n <= 99; n++) {
    final candidate = ngmySanitizeBioSlug('$n$core');
    if (candidate.isNotEmpty && !taken.contains(candidate)) return candidate;
  }
  return ngmySanitizeBioSlug('z$core');
}
