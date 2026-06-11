import 'dart:convert';
import 'dart:io' show File;

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';

import 'ngmy_app_builder_data.dart';
import 'ngmy_app_builder_download_io.dart' if (dart.library.html) 'ngmy_app_builder_download_web.dart';
import 'ngmy_app_builder_models.dart';
import 'ngmy_app_builder_storage.dart';
import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';

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
    final projectRaw = map['project'];
    if (projectRaw is Map) {
      try {
        final project = NgmyAppProject.fromMap(Map<String, dynamic>.from(projectRaw));
        final runtime = map['runtimeData'];
        return NgmyAppBundle(
          project: project,
          runtimeData: runtime is Map ? Map<String, dynamic>.from(runtime) : const {},
        );
      } catch (e) {
        debugPrint('[app bundle fromMap project] $e');
      }
    }
    if (map['screens'] is List && map['name'] != null) {
      try {
        return NgmyAppBundle(project: NgmyAppProject.fromMap(map));
      } catch (e) {
        debugPrint('[app bundle fromMap flat] $e');
      }
    }
    return null;
  }

  static NgmyAppBundle? parseJson(String raw) {
    try {
      var text = raw.trim();
      if (text.startsWith('\uFEFF')) text = text.substring(1);
      final decoded = jsonDecode(text);
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
    final lower = trimmed.toLowerCase();
    return lower.contains(kNgmyAppBundleMarker.toLowerCase()) ||
        trimmed.contains('"project"') ||
        (lower.contains('"screens"') && lower.contains('"name"'));
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
  try {
    await NgmyAppDataStore.importRawData(bundle.project.id, bundle.runtimeData);
  } catch (e) {
    debugPrint('[app bundle import runtime] $e');
  }
  final owner = email.toLowerCase().trim();
  final effectiveOwner = owner.isNotEmpty ? owner : bundle.project.ownerEmail.toLowerCase().trim();
  if (effectiveOwner.isEmpty) return null;
  final project = bundle.project.copyWith(
    ownerEmail: effectiveOwner,
    updatedAt: DateTime.now().toUtc().toIso8601String(),
  );
  await ngmySaveUserAppProject(effectiveOwner, project);
  return project;
}

Future<String?> _readPickedBackupText(PlatformFile file) async {
  if (file.bytes != null && file.bytes!.isNotEmpty) {
    return utf8.decode(file.bytes!, allowMalformed: true);
  }
  if (!kIsWeb && file.path != null && file.path!.trim().isNotEmpty) {
    try {
      return await File(file.path!).readAsString();
    } catch (e) {
      debugPrint('[app bundle import] read path: $e');
    }
  }
  final stream = file.readStream;
  if (stream != null) {
    try {
      final chunks = <int>[];
      await for (final chunk in stream) {
        chunks.addAll(chunk);
      }
      if (chunks.isNotEmpty) {
        return utf8.decode(chunks, allowMalformed: true);
      }
    } catch (e) {
      debugPrint('[app bundle import] read stream: $e');
    }
  }
  return null;
}

Future<String?> _pickBackupJsonText() async {
  try {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.custom,
      allowedExtensions: const ['json'],
      withData: true,
      allowMultiple: false,
    );
    if (result != null && result.files.isNotEmpty) {
      final raw = await _readPickedBackupText(result.files.first);
      if (raw != null && raw.trim().isNotEmpty) return raw;
    }
  } catch (e) {
    debugPrint('[app bundle import] file_picker custom: $e');
  }

  if (kIsWeb) {
    try {
      final browser = await ngmyPickBackupJsonViaBrowser();
      if (browser != null && browser.trim().isNotEmpty) return browser;
    } catch (e) {
      debugPrint('[app bundle import] browser picker: $e');
    }
  }

  try {
    final result = await FilePicker.platform.pickFiles(
      type: FileType.any,
      withData: true,
      allowMultiple: false,
    );
    if (result == null || result.files.isEmpty) return null;
    return _readPickedBackupText(result.files.first);
  } catch (e) {
    debugPrint('[app bundle import] file_picker any: $e');
    if (kIsWeb) {
      return ngmyPickBackupJsonViaBrowser();
    }
    rethrow;
  }
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
    final raw = await _pickBackupJsonText();
    if (raw == null || raw.trim().isEmpty) {
      return const NgmyAppBundleImportResult(errorMessage: 'No file selected.');
    }
    if (!NgmyAppBundle.looksLikeBundle(raw)) {
      return const NgmyAppBundleImportResult(
        errorMessage: 'Invalid backup — choose a .ngmy.json file exported from App Studio.',
      );
    }
    final imported = await ngmyImportAppBundleFromJson(email, raw);
    if (imported == null) {
      return const NgmyAppBundleImportResult(
        errorMessage: 'Invalid backup format. Export again from App Studio → menu → Download backup.',
      );
    }
    return NgmyAppBundleImportResult(project: imported);
  } catch (e) {
    final isLateInit = e.toString().contains('LateInitializationError');
    if (!isLateInit) {
      debugPrint('[app bundle import] $e');
      return NgmyAppBundleImportResult(errorMessage: 'Import failed: $e');
    }
    debugPrint('[app bundle import] LateInit: $e');
    if (kIsWeb) {
      try {
        final raw = await ngmyPickBackupJsonViaBrowser();
        if (raw != null && raw.trim().isNotEmpty && NgmyAppBundle.looksLikeBundle(raw)) {
          final imported = await ngmyImportAppBundleFromJson(email, raw);
          if (imported != null) return NgmyAppBundleImportResult(project: imported);
        }
      } catch (_) {}
    }
    return const NgmyAppBundleImportResult(
      errorMessage: 'Could not open file picker. Try again or use Chrome/Safari private tab after updating the app.',
    );
  }
}

Future<NgmyAppProject?> ngmyPickAndImportAppBundle(String email) async {
  final result = await ngmyPickAndImportAppBundleDetailed(email);
  return result.project;
}
