import 'ngmy_menu_models.dart';

const String kNgmyBioPublicBaseUrl = 'https://ngmy.org/bio/';

String ngmyBioPublicUrlForSlug(String slug) {
  final s = slug.trim().toLowerCase();
  if (s.isEmpty) return '';
  return '$kNgmyBioPublicBaseUrl$s';
}

String ngmyBuildUniqueBioSlug(String base, List<String> existingSlugs) {
  var slug = ngmyMenuSlugify(base);
  if (slug.isEmpty) slug = 'bio';
  final taken = existingSlugs.map((e) => e.toLowerCase()).toSet();
  if (!taken.contains(slug)) return slug;
  for (var i = 2; i < 1000; i++) {
    final candidate = '$slug-$i';
    if (!taken.contains(candidate)) return candidate;
  }
  return '${slug}_${DateTime.now().millisecondsSinceEpoch}';
}
