import 'dart:convert';
import 'dart:io' show File;

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

Future<String?> _readPickedBackupText(PlatformFile file) async {
  if (file.bytes != null && file.bytes!.isNotEmpty) {
    return utf8.decode(file.bytes!);
  }
  if (!kIsWeb && file.path != null && file.path!.trim().isNotEmpty) {
    try {
      return await File(file.path!).readAsString();
    } catch (e) {
      debugPrint('[app bundle import] read path: $e');
    }
  }
  return null;
}

/// Result of a backup import attempt — clearer errors for the UI.
class NgmyAppBundleImportResult {
  final NgmyAppProject? project;
  final String? errorMessage;

  const NgmyAppBundleImportResult({this.project, this.errorMessage});

  bool get ok => project != null;
}

Future<NgmyAppBundleImportResult> ngmyPickAndImportAppBundleDetailed(String email) async {
  try {
    final result = await FilePicker.platform.pickFiles(
      type: kIsWeb ? FileType.custom : FileType.any,
      allowedExtensions: kIsWeb ? const ['json', 'ngmy'] : null,
      withData: kIsWeb,
      allowMultiple: false,
    );
    if (result == null || result.files.isEmpty) {
      return const NgmyAppBundleImportResult(errorMessage: 'No file selected.');
    }
    final file = result.files.first;
    final raw = await _readPickedBackupText(file);
    if (raw == null || raw.trim().isEmpty) {
      return const NgmyAppBundleImportResult(
        errorMessage: 'Could not read file. Try the .ngmy.json backup you downloaded from App Studio.',
      );
    }
    if (!NgmyAppBundle.looksLikeBundle(raw)) {
      return const NgmyAppBundleImportResult(
        errorMessage: 'Invalid backup — choose a .ngmy.json file exported from App Studio.',
      );
    }
    final imported = await ngmyImportAppBundleFromJson(email, raw);
    if (imported == null) {
      return const NgmyAppBundleImportResult(
        errorMessage: 'Invalid backup format. Re-download your app from App Studio and try again.',
      );
    }
    return NgmyAppBundleImportResult(project: imported);
  } catch (e) {
    debugPrint('[app bundle import] $e');
    return NgmyAppBundleImportResult(errorMessage: 'Import failed: $e');
  }
}

Future<NgmyAppProject?> ngmyPickAndImportAppBundle(String email) async {
  final result = await ngmyPickAndImportAppBundleDetailed(email);
  return result.project;
}
