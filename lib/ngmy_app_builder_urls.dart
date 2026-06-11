import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';

String ngmyAppPublicUrlForSlug(String slug) {
  final clean = slug.trim().toLowerCase();
  final base = ngmyAppBuilderBaseUrl();
  final sep = base.contains('?') ? '&' : '?';
  return '$base${sep}ngmy_app=$clean';
}

NgmyAppProject ngmyAppProjectWithPublicUrl(NgmyAppProject project, Iterable<String> takenSlugs) {
  final slug = project.slug.trim().isNotEmpty
      ? project.slug.trim().toLowerCase()
      : ngmyEnsureUniqueAppSlug(project.name, takenSlugs);
  final seo = project.seoDescription.trim().isNotEmpty
      ? project.seoDescription.trim()
      : (project.tagline.trim().isNotEmpty ? project.tagline.trim() : '${project.name} — built with NGMY App Builder');
  return project.copyWith(
    slug: slug,
    publicUrl: ngmyAppPublicUrlForSlug(slug),
    seoDescription: seo,
  );
}

NgmyAppProject? ngmyFindPublishedAppBySlug(dynamic config, String slug) {
  final raw = (config as dynamic).appBuilderPublished;
  if (raw is! List) return null;
  final target = slug.trim().toLowerCase();
  for (final item in raw) {
    if (item is! Map) continue;
    final p = NgmyAppProject.fromMap(Map<String, dynamic>.from(item));
    if (p.slug.toLowerCase() == target || p.id == slug) return p;
  }
  return null;
}

List<String> ngmyAllPublishedAppSlugs(dynamic config) {
  final raw = (config as dynamic).appBuilderPublished;
  if (raw is! List) return [];
  return raw
      .map((e) => e is Map ? NgmyAppProject.fromMap(Map<String, dynamic>.from(e)).slug : '')
      .where((s) => s.trim().isNotEmpty)
      .toList();
}
