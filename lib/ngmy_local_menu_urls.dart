import 'ngmy_bio_urls.dart';

const String kNgmyLocalMenuPublicBaseUrl = 'https://ngmy.org/local-menu/';

String ngmyLocalMenuPublicUrlForSlug(String slug) {
  final s = ngmySanitizeBioSlug(slug);
  if (s.isEmpty) return '';
  return '$kNgmyLocalMenuPublicBaseUrl$s';
}

String ngmyBuildUniqueLocalMenuSlug(String base, List<String> existingSlugs) {
  return ngmyBuildUniqueBioSlug(base, existingSlugs, emptyFallback: 'local');
}
