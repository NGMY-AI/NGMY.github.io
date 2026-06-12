import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_urls.dart';
import 'ngmy_app_studio_published_registry.dart';

String _userProjectsKey(String email) => 'ngmy_app_builder_projects_${email.toLowerCase().trim()}';
const _kLocalPublishedKey = 'ngmy_app_builder_published_local';
const _kLocalReviewQueueKey = 'ngmy_app_builder_review_queue_local';
const _kGuestAppCachePrefix = 'ngmy_guest_app_cache_';

List<NgmyAppProject> ngmyAppBuilderProjectsFromConfigList(List<Map<String, dynamic>> raw) {
  return raw
      .map((e) => NgmyAppProject.fromMap(e))
      .where((p) => p.id.isNotEmpty && p.name.isNotEmpty)
      .toList();
}

Future<List<NgmyAppProject>> _loadLocalList(String key) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(key);
    if (raw == null || raw.trim().isEmpty) return [];
    final decoded = jsonDecode(raw);
    if (decoded is! List) return [];
    return decoded
        .map((e) => e is Map ? NgmyAppProject.fromMap(Map<String, dynamic>.from(e)) : null)
        .whereType<NgmyAppProject>()
        .map(ngmyRefreshAppProjectPublicUrl)
        .toList();
  } catch (e) {
    debugPrint('[app builder] load $key: $e');
    return [];
  }
}

Future<void> _saveLocalList(String key, List<NgmyAppProject> list) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(key, jsonEncode(list.map((p) => p.toMap()).toList()));
  } catch (e) {
    debugPrint('[app builder] save $key: $e');
  }
}

/// Published apps — device local storage only (never Supabase).
Future<List<NgmyAppProject>> ngmyLoadLocalPublishedApps() => _loadLocalList(_kLocalPublishedKey);

Future<void> ngmySaveLocalPublishedApps(List<NgmyAppProject> apps) => _saveLocalList(_kLocalPublishedKey, apps);

/// Legacy name used by UI — reads local storage, not cloud config.
Future<List<NgmyAppProject>> ngmyPublishedAppsFromConfig(dynamic config) => ngmyLoadLocalPublishedApps();

Future<List<NgmyAppProject>> ngmyLoadLocalReviewQueue() => _loadLocalList(_kLocalReviewQueueKey);

Future<void> ngmySaveLocalReviewQueue(List<NgmyAppProject> apps) => _saveLocalList(_kLocalReviewQueueKey, apps);

Future<List<NgmyAppProject>> ngmyReviewQueueFromConfig(dynamic config) => ngmyLoadLocalReviewQueue();

Future<int> ngmyLocalReviewQueueCount() async {
  final q = await ngmyLoadLocalReviewQueue();
  return q.length;
}

Future<List<NgmyAppProject>> ngmyLoadUserAppProjects(String email) async {
  if (email.trim().isEmpty) return [];
  try {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(_userProjectsKey(email));
    if (raw == null || raw.trim().isEmpty) return [];
    final decoded = jsonDecode(raw);
    if (decoded is! List) return [];
    return decoded
        .map((e) => e is Map ? NgmyAppProject.fromMap(Map<String, dynamic>.from(e)) : null)
        .whereType<NgmyAppProject>()
        .map(ngmyRefreshAppProjectPublicUrl)
        .toList();
  } catch (e) {
    debugPrint('[app builder] load user projects: $e');
    return [];
  }
}

Future<void> ngmySaveUserAppProject(String email, NgmyAppProject project) async {
  if (email.trim().isEmpty) return;
  final list = await ngmyLoadUserAppProjects(email);
  final updated = project.copyWith(updatedAt: DateTime.now().toUtc().toIso8601String());
  final idx = list.indexWhere((p) => p.id == updated.id);
  if (idx >= 0) {
    list[idx] = updated;
  } else {
    list.insert(0, updated);
  }
  await _persistUserProjects(email, list);
}

Future<void> ngmyDeleteUserAppProject(String email, String projectId) async {
  final list = await ngmyLoadUserAppProjects(email);
  list.removeWhere((p) => p.id == projectId);
  await _persistUserProjects(email, list);
}

Future<void> _persistUserProjects(String email, List<NgmyAppProject> list) async {
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_userProjectsKey(email), jsonEncode(list.map((p) => p.toMap()).toList()));
  } catch (e) {
    debugPrint('[app builder] save user projects: $e');
  }
}

Future<void> ngmyCachePublishedAppLocally(NgmyAppProject project) async {
  if (project.slug.trim().isEmpty) return;
  final slug = project.slug.trim().toLowerCase();
  try {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('$_kGuestAppCachePrefix$slug', jsonEncode(project.toMap()));
  } catch (e) {
    debugPrint('[app builder] guest cache $slug: $e');
  }
}

Future<void> ngmySubmitAppForReview(dynamic config, String email, NgmyAppProject project) async {
  final queue = await ngmyLoadLocalReviewQueue();
  final submitted = project.copyWith(
    status: NgmyAppBuilderStatus.submitted,
    updatedAt: DateTime.now().toUtc().toIso8601String(),
    reviewNote: null,
  );
  queue.removeWhere((p) => p.id == submitted.id);
  queue.insert(0, submitted);
  await ngmySaveLocalReviewQueue(queue);
  await ngmySaveUserAppProject(email, submitted);
}

Future<({NgmyAppProject project, String? cloudWarning})> ngmyPublishAppProject(
  dynamic config,
  String email,
  NgmyAppProject project,
) async {
  final taken = await ngmyAllPublishedAppSlugs();
  final withUrl = ngmyAppProjectWithPublicUrl(project, taken.where((s) => s != project.slug));
  final published = withUrl.copyWith(
    status: NgmyAppBuilderStatus.published,
    publishedAt: DateTime.now().toUtc().toIso8601String(),
    updatedAt: DateTime.now().toUtc().toIso8601String(),
    reviewNote: null,
  );
  final list = await ngmyLoadLocalPublishedApps();
  list.removeWhere((p) => p.id == published.id);
  list.insert(0, published);
  await ngmySaveLocalPublishedApps(list);

  final queue = await ngmyLoadLocalReviewQueue();
  queue.removeWhere((p) => p.id == published.id);
  await ngmySaveLocalReviewQueue(queue);

  await ngmySaveUserAppProject(email, published);
  await ngmyCachePublishedAppLocally(published);
  final cloudErr = await NgmyAppStudioPublishedRegistry.publish(published);
  if (cloudErr != null) {
    debugPrint('[app builder] cloud publish ${published.slug}: $cloudErr');
  }
  return (project: published, cloudWarning: cloudErr);
}

Future<void> ngmyRejectAppProject(dynamic config, String email, NgmyAppProject project, String note) async {
  final rejected = project.copyWith(
    status: NgmyAppBuilderStatus.rejected,
    reviewNote: note.trim(),
    updatedAt: DateTime.now().toUtc().toIso8601String(),
  );
  final queue = await ngmyLoadLocalReviewQueue();
  queue.removeWhere((p) => p.id == rejected.id);
  await ngmySaveLocalReviewQueue(queue);
  await ngmySaveUserAppProject(email, rejected);
}

Future<void> ngmyUnpublishAppProject(dynamic config, String projectId) async {
  final list = await ngmyLoadLocalPublishedApps();
  final removed = list.where((p) => p.id == projectId).toList();
  list.removeWhere((p) => p.id == projectId);
  await ngmySaveLocalPublishedApps(list);
  for (final p in removed) {
    await NgmyAppStudioPublishedRegistry.unpublishSlug(p.slug);
  }
}
