import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_urls.dart';

String _userProjectsKey(String email) => 'ngmy_app_builder_projects_${email.toLowerCase().trim()}';

List<NgmyAppProject> ngmyAppBuilderProjectsFromConfigList(List<Map<String, dynamic>> raw) {
  return raw
      .map((e) => NgmyAppProject.fromMap(e))
      .where((p) => p.id.isNotEmpty && p.name.isNotEmpty)
      .toList();
}

List<NgmyAppProject> ngmyPublishedAppsFromConfig(dynamic config) {
  final raw = (config as dynamic).appBuilderPublished;
  if (raw is! List) return [];
  return ngmyAppBuilderProjectsFromConfigList(
    raw.map((e) => e is Map ? Map<String, dynamic>.from(e) : <String, dynamic>{}).toList(),
  );
}

List<NgmyAppProject> ngmyReviewQueueFromConfig(dynamic config) {
  final raw = (config as dynamic).appBuilderReviewQueue;
  if (raw is! List) return [];
  return ngmyAppBuilderProjectsFromConfigList(
    raw.map((e) => e is Map ? Map<String, dynamic>.from(e) : <String, dynamic>{}).toList(),
  );
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

void ngmyConfigSetPublishedApps(dynamic config, List<NgmyAppProject> apps) {
  (config as dynamic).appBuilderPublished = apps.map((p) => p.toMap()).toList();
}

void ngmyConfigSetReviewQueue(dynamic config, List<NgmyAppProject> apps) {
  (config as dynamic).appBuilderReviewQueue = apps.map((p) => p.toMap()).toList();
}

Future<void> ngmySubmitAppForReview(dynamic config, String email, NgmyAppProject project) async {
  final queue = ngmyReviewQueueFromConfig(config);
  final submitted = project.copyWith(
    status: NgmyAppBuilderStatus.submitted,
    updatedAt: DateTime.now().toUtc().toIso8601String(),
    reviewNote: null,
  );
  queue.removeWhere((p) => p.id == submitted.id);
  queue.insert(0, submitted);
  ngmyConfigSetReviewQueue(config, queue);
  await ngmySaveUserAppProject(email, submitted);
}

Future<NgmyAppProject> ngmyPublishAppProject(dynamic config, String email, NgmyAppProject project) async {
  final taken = ngmyAllPublishedAppSlugs(config);
  final withUrl = ngmyAppProjectWithPublicUrl(project, taken.where((s) => s != project.slug));
  final published = withUrl.copyWith(
    status: NgmyAppBuilderStatus.published,
    publishedAt: DateTime.now().toUtc().toIso8601String(),
    updatedAt: DateTime.now().toUtc().toIso8601String(),
    reviewNote: null,
  );
  final list = ngmyPublishedAppsFromConfig(config);
  list.removeWhere((p) => p.id == published.id);
  list.insert(0, published);
  ngmyConfigSetPublishedApps(config, list);

  final queue = ngmyReviewQueueFromConfig(config);
  queue.removeWhere((p) => p.id == published.id);
  ngmyConfigSetReviewQueue(config, queue);

  await ngmySaveUserAppProject(email, published);
  return published;
}

Future<void> ngmyRejectAppProject(dynamic config, String email, NgmyAppProject project, String note) async {
  final rejected = project.copyWith(
    status: NgmyAppBuilderStatus.rejected,
    reviewNote: note.trim(),
    updatedAt: DateTime.now().toUtc().toIso8601String(),
  );
  final queue = ngmyReviewQueueFromConfig(config);
  queue.removeWhere((p) => p.id == rejected.id);
  ngmyConfigSetReviewQueue(config, queue);
  await ngmySaveUserAppProject(email, rejected);
}

Future<void> ngmyUnpublishAppProject(dynamic config, String projectId) async {
  final list = ngmyPublishedAppsFromConfig(config);
  list.removeWhere((p) => p.id == projectId);
  ngmyConfigSetPublishedApps(config, list);
}
