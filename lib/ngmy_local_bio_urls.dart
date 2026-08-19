import 'ngmy_bio_urls.dart';

const String kNgmyLocalBioPublicBaseUrl = 'https://ngmy.org/local-bio/';

String ngmyLocalBioPublicUrlForSlug(String slug) {
  final s = ngmySanitizeBioSlug(slug);
  if (s.isEmpty) return '';
  return '$kNgmyLocalBioPublicBaseUrl$s';
}

String ngmyBuildUniqueLocalBioSlug(String base, List<String> existingSlugs) {
  return ngmyBuildUniqueBioSlug(base, existingSlugs);
}
