import 'ngmy_menu_models.dart';

const String kNgmyLocalMenuPublicBaseUrl = 'https://ngmy.org/local-menu/';

String ngmyLocalMenuPublicUrlForSlug(String slug) {
  final s = slug.trim().toLowerCase();
  if (s.isEmpty) return '';
  return '$kNgmyLocalMenuPublicBaseUrl$s';
}

String ngmyBuildUniqueLocalMenuSlug(String base, List<String> existingSlugs) {
  var slug = ngmyMenuSlugify(base);
  if (slug.isEmpty) slug = 'local-menu';
  final taken = existingSlugs.map((e) => e.toLowerCase()).toSet();
  if (!taken.contains(slug)) return slug;
  for (var i = 2; i < 1000; i++) {
    final candidate = '$slug-$i';
    if (!taken.contains(candidate)) return candidate;
  }
  return '${slug}_${DateTime.now().millisecondsSinceEpoch}';
}
