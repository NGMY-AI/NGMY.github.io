import 'dart:convert';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_download_io.dart' if (dart.library.html) 'ngmy_app_builder_download_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';

const int kNgmyAppBundleVersion = 1;
const String kNgmyAppBundleMarker = 'ngmyAppBundle';

/// Full app backup — project JSON + all runtime data (forms, settings, workouts).
class NgmyAppBundle {
  final NgmyAppProject project;
  final Map<String, dynamic> runtimeData;

  const NgmyAppBundle({required this.project, this.runtimeData = const {}});

  Map<String, dynamic> toMap() => {
        kNgmyAppBundleMarker: kNgmyAppBundleVersion,
        'exportedAt': DateTime.now().toUtc().toIso8601String(),
        'project': project.toMap(),
        'runtimeData': runtimeData,
      };

  String toPrettyJson() => const JsonEncoder.withIndent('  ').convert(toMap());

  static NgmyAppBundle? fromMap(Map<String, dynamic> map) {
    final marker = map[kNgmyAppBundleMarker];
    if (marker == null && map['project'] is! Map) return null;
    final projectRaw = map['project'];
    if (projectRaw is! Map) return null;
    final project = NgmyAppProject.fromMap(Map<String, dynamic>.from(projectRaw));
    final runtime = map['runtimeData'];
    return NgmyAppBundle(
      project: project,
      runtimeData: runtime is Map ? Map<String, dynamic>.from(runtime) : const {},
    );
  }

  static NgmyAppBundle? parseJson(String raw) {
    try {
      final decoded = jsonDecode(raw);
      if (decoded is! Map) return null;
      return fromMap(Map<String, dynamic>.from(decoded));
    } catch (e) {
      debugPrint('[app bundle parse] $e');
      return null;
    }
  }

  static bool looksLikeBundle(String raw) {
    final trimmed = raw.trim();
    if (!trimmed.startsWith('{')) return false;
    return trimmed.contains(kNgmyAppBundleMarker) || trimmed.contains('"project"');
  }
}

Future<NgmyAppBundle> ngmyBuildAppBundle(NgmyAppProject project) async {
  final store = NgmyAppDataStore.forApp(project.id);
  await store.ensureLoaded();
  final prefs = await NgmyAppDataStore.exportRawData(project.id);
  return NgmyAppBundle(project: project, runtimeData: prefs);
}

Future<String> ngmyDownloadAppBundle(NgmyAppProject project) async {
  final bundle = await ngmyBuildAppBundle(project);
  final slug = project.slug.trim().isNotEmpty ? project.slug : project.name;
  final safe = slug.replaceAll(RegExp(r'[^\w\-.]+'), '_').toLowerCase();
  final filename = '$safe.ngmy.json';
  return downloadNgmyAppBundleJson(bundle.toPrettyJson(), filename);
}

Future<NgmyAppProject?> ngmyImportAppBundleFromJson(String email, String raw) async {
  final bundle = NgmyAppBundle.parseJson(raw);
  if (bundle == null) return null;
  await NgmyAppDataStore.importRawData(bundle.project.id, bundle.runtimeData);
  final project = bundle.project.copyWith(
    ownerEmail: email.toLowerCase().trim(),
    updatedAt: DateTime.now().toUtc().toIso8601String(),
  );
  await ngmySaveUserAppProject(email, project);
  return project;
}

Future<NgmyAppProject?> ngmyPickAndImportAppBundle(String email) async {
  try {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: const ['json', 'ngmy'],
      withData: true,
    );
    if (result == null || result.files.isEmpty) return null;
    final file = result.files.first;
    final bytes = file.bytes;
    if (bytes == null || bytes.isEmpty) return null;
    final raw = utf8.decode(bytes);
    return ngmyImportAppBundleFromJson(email, raw);
  } catch (e) {
    debugPrint('[app bundle import] $e');
    return null;
  }
}
