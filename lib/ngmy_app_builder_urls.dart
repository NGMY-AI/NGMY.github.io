import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';

/// Production domain for App Studio public links (custom domain).
const String kNgmyAppStudioCanonicalBaseUrl = 'https://ngmy.org/';

/// Every published app opens at /app/{unique-slug} on the live site.
const kNgmyGithubPagesAppPath = 'app';

String ngmyAppStudioCanonicalBaseUrl() => kNgmyAppStudioCanonicalBaseUrl;

bool ngmyIsLegacyAppStudioUrl(String url) {
  final u = url.toLowerCase();
  return u.contains('ngmy-ai.github.io') || u.contains('/ngmy.github.io');
}

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
  final base = ngmyAppStudioCanonicalBaseUrl();
  return '$base$kNgmyGithubPagesAppPath/$clean';
}

/// Always uses canonical ngmy.org URL when the app has a slug.
NgmyAppProject ngmyRefreshAppProjectPublicUrl(NgmyAppProject project) {
  final slug = project.slug.trim().toLowerCase();
  if (slug.isEmpty) return project;
  final hasLink = project.publicUrl.trim().isNotEmpty;
  if (!project.isPublished && !hasLink) return project;
  final canonical = ngmyAppPublicUrlForSlug(slug);
  if (project.publicUrl.trim() == canonical) return project;
  return project.copyWith(publicUrl: canonical);
}

String ngmyResolvedPublicUrl(NgmyAppProject project) =>
    ngmyRefreshAppProjectPublicUrl(project).publicUrl.trim();

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

Future<NgmyAppProject?> ngmyFindPublishedAppBySlugLocal(String slug) async {
  final target = slug.trim().toLowerCase();
  final apps = await ngmyLoadLocalPublishedApps();
  for (final p in apps) {
    if (p.slug.toLowerCase() == target || p.id == slug) return p;
  }
  return null;
}

Future<List<String>> ngmyAllPublishedAppSlugs() async {
  final apps = await ngmyLoadLocalPublishedApps();
  return apps.map((p) => p.slug).where((s) => s.trim().isNotEmpty).toList();
}
