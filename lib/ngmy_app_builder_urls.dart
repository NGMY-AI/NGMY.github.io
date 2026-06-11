import 'ngmy_app_builder_launch_stub.dart' if (dart.library.html) 'ngmy_app_builder_launch_web.dart';
import 'ngmy_app_builder_models.dart';

/// GitHub Pages base — every user app lives under /app/{unique-slug}
const kNgmyGithubPagesAppPath = 'app';

String ngmyOwnerSlugPrefix(String ownerEmail) {
  final email = ownerEmail.toLowerCase().trim();
  if (email.isEmpty) return 'user';
  final user = email.split('@').first.replaceAll(RegExp(r'[^a-z0-9]'), '');
  final hash = email.hashCode.abs().toRadixString(36);
  final tail = hash.length > 5 ? hash.substring(0, 5) : hash;
  final name = user.isEmpty ? 'user' : user;
  return '$name-$tail';
}

String ngmyBuildUniqueAppSlug({
  required String ownerEmail,
  required String appName,
  required Iterable<String> takenSlugs,
}) {
  final prefix = ngmyOwnerSlugPrefix(ownerEmail);
  final appPart = ngmySlugifyAppName(appName);
  final base = '$prefix-$appPart';
  final used = takenSlugs.map((s) => s.toLowerCase()).toSet();
  if (!used.contains(base)) return base;
  for (var i = 2; i < 500; i++) {
    final candidate = '$base-$i';
    if (!used.contains(candidate)) return candidate;
  }
  return '${base}_${DateTime.now().millisecondsSinceEpoch}';
}

String ngmyAppPublicUrlForSlug(String slug) {
  final clean = slug.trim().toLowerCase();
  final base = ngmyAppBuilderBaseUrl();
  return '${base}$kNgmyGithubPagesAppPath/$clean';
}

NgmyAppProject ngmyAppProjectWithPublicUrl(
  NgmyAppProject project,
  Iterable<String> takenSlugs,
) {
  final slug = project.slug.trim().isNotEmpty
      ? project.slug.trim().toLowerCase()
      : ngmyBuildUniqueAppSlug(
          ownerEmail: project.ownerEmail,
          appName: project.name,
          takenSlugs: takenSlugs,
        );
  final seo = project.seoDescription.trim().isNotEmpty
      ? project.seoDescription.trim()
      : (project.tagline.trim().isNotEmpty
          ? project.tagline.trim()
          : '${project.name} — created with NGMY App Builder');
  return project.copyWith(
    slug: slug,
    publicUrl: ngmyAppPublicUrlForSlug(slug),
    seoDescription: seo,
  );
}

NgmyAppProject? ngmyFindPublishedAppBySlug(dynamic config, String slug) {
  final raw = config is Map ? config['appBuilderPublished'] : (config as dynamic).appBuilderPublished;
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
  final raw = config is Map ? config['appBuilderPublished'] : (config as dynamic).appBuilderPublished;
  if (raw is! List) return [];
  return raw
      .map((e) => e is Map ? NgmyAppProject.fromMap(Map<String, dynamic>.from(e)).slug : '')
      .where((s) => s.trim().isNotEmpty)
      .toList();
}
