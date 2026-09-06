import 'ngmy_bio_urls.dart';

const String kNgmyMenuPublicBaseUrl = 'https://ngmy.org/menu/';

String ngmyMenuPublicUrlForSlug(String slug) {
  final s = ngmySanitizeBioSlug(slug);
  if (s.isEmpty) return '';
  return 'https://ngmy.org/?m=$s';
}

String ngmyBuildUniqueMenuSlug(String base, List<String> existingSlugs) {
  return ngmyBuildUniqueBioSlug(base, existingSlugs, emptyFallback: 'menu');
}
