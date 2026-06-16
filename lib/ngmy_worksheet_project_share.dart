import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_communicate_sync_download_io.dart'
    if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheets_storage.dart';

const _kWorksheetProjectBundleType = 'ngmy_worksheet_project_v1';

Map<String, dynamic> ngmyWorksheetProjectShareBundle({
  required String ownerEmail,
  required WorksheetProject project,
  String? thumbnailOverride,
}) {
  final projectJson = project.toJson();
  if (thumbnailOverride != null && thumbnailOverride.isNotEmpty) {
    projectJson['thumbnailPath'] = thumbnailOverride;
  } else {
    projectJson.remove('thumbnailPath');
  }
  return {
    'type': _kWorksheetProjectBundleType,
    'ownerEmail': ownerEmail.trim(),
    'exportedAt': DateTime.now().toUtc().toIso8601String(),
    'project': projectJson,
  };
}

Future<Map<String, dynamic>> ngmyWorksheetProjectShareBundleAsync({
  required String ownerEmail,
  required WorksheetProject project,
  bool includeThumbnail = true,
  bool compressForQr = false,
}) async {
  String? thumb;
  if (includeThumbnail) {
    thumb = await ngmyWorksheetShareThumbnail(
      project.thumbnailPath,
      forQr: compressForQr,
    );
  }
  return ngmyWorksheetProjectShareBundle(
    ownerEmail: ownerEmail,
    project: project,
    thumbnailOverride: thumb,
  );
}

Future<String> ngmyWorksheetProjectShareJson({
  required String ownerEmail,
  required WorksheetProject project,
  bool includeThumbnail = true,
  bool compressForQr = false,
}) async {
  if (!includeThumbnail || !compressForQr) {
    return jsonEncode(
      ngmyWorksheetProjectShareBundle(
        ownerEmail: ownerEmail,
        project: project,
        thumbnailOverride: includeThumbnail ? project.thumbnailPath : null,
      ),
    );
  }
  return jsonEncode(
    await ngmyWorksheetProjectShareBundleAsync(
      ownerEmail: ownerEmail,
      project: project,
      includeThumbnail: includeThumbnail,
      compressForQr: compressForQr,
    ),
  );
}

/// Builds a QR payload immediately — no image processing (avoids web hang).
String ngmyWorksheetProjectQrPayload({
  required String ownerEmail,
  required WorksheetProject project,
}) {
  final thumb = project.thumbnailPath?.trim();
  String? includedThumb;
  if (thumb != null && thumb.isNotEmpty && thumb.length <= 2000) {
    includedThumb = thumb;
  }
  final json = jsonEncode(
    ngmyWorksheetProjectShareBundle(
      ownerEmail: ownerEmail,
      project: project,
      thumbnailOverride: includedThumb,
    ),
  );
  return 'NGMY_WS:${base64Url.encode(utf8.encode(json))}';
}

WorksheetProject? ngmyWorksheetProjectFromShareRaw(String raw) {
  final trimmed = raw.trim();
  if (trimmed.isEmpty) return null;
  try {
    Map<String, dynamic> map;
    if (trimmed.startsWith('NGMY_WS:')) {
      final decoded = utf8.decode(base64Url.decode(trimmed.substring(8)));
      map = jsonDecode(decoded) as Map<String, dynamic>;
    } else {
      map = jsonDecode(trimmed) as Map<String, dynamic>;
    }
    if ((map['type'] ?? '').toString() != _kWorksheetProjectBundleType) return null;
    final projectRaw = map['project'];
    if (projectRaw is! Map) return null;
    return WorksheetProject.fromJson(Map<String, dynamic>.from(projectRaw));
  } catch (_) {
    return null;
  }
}

WorksheetProject ngmyWorksheetProjectCopyForImport(WorksheetProject imported) {
  return WorksheetProject(
    id: DateTime.now().microsecondsSinceEpoch.toString(),
    name: imported.name.trim().isEmpty ? 'Shared project' : imported.name,
    thumbnailPath: imported.thumbnailPath,
    items: imported.items,
    createdAt: DateTime.now(),
  );
}

Future<WorksheetProject?> ngmyPickAndParseWorksheetProjectBackup() async {
  final raw = await ngmyPickBackupJsonViaBrowser();
  if (raw == null || raw.trim().isEmpty) return null;
  return ngmyWorksheetProjectFromShareRaw(raw);
}

Future<String?> ngmyScanWorksheetProjectQrPayload(BuildContext context) {
  return NgmyNavigator.push<String>(
    context,
    const NgmyWorksheetProjectScanPage(),
    routeName: 'NgmyWorksheetProjectScan',
    fullscreenDialog: true,
  );
}

Future<void> showNgmyWorksheetProjectShareSheet(
  BuildContext context, {
  required String ownerEmail,
  required WorksheetProject project,
  Future<void> Function(WorksheetProject imported)? onImported,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyWorksheetProjectShareSheet(
      ownerEmail: ownerEmail,
      project: project,
      onImported: onImported,
    ),
  );
}

class _NgmyWorksheetProjectShareSheet extends StatelessWidget {
  const _NgmyWorksheetProjectShareSheet({
    required this.ownerEmail,
    required this.project,
    this.onImported,
  });

  final String ownerEmail;
  final WorksheetProject project;
  final Future<void> Function(WorksheetProject imported)? onImported;

  Future<void> _download(BuildContext context) async {
    Navigator.pop(context);
    await Future<void>.delayed(const Duration(milliseconds: 80));
    final json = await ngmyWorksheetProjectShareJson(
      ownerEmail: ownerEmail,
      project: project,
      includeThumbnail: true,
    );
    final safeName = project.name.replaceAll(RegExp(r'[^\w\-.]+'), '_');
    final msg = await downloadNgmyAdvisorSyncJson(json, 'ngmy_project_$safeName');
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  void _showQr(BuildContext context) {
    Navigator.pop(context);
    final payload = ngmyWorksheetProjectQrPayload(ownerEmail: ownerEmail, project: project);
    NgmyNavigator.push<void>(
      context,
      NgmyWorksheetProjectQrPage(projectName: project.name, payload: payload),
      routeName: 'NgmyWorksheetProjectQr',
    );
  }

  Future<void> _scan(BuildContext context) async {
    Navigator.pop(context);
    final raw = await ngmyScanWorksheetProjectQrPayload(context);
    if (raw == null || raw.trim().isEmpty) return;
    final imported = ngmyWorksheetProjectFromShareRaw(raw);
    if (imported == null) {
      if (!context.mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Could not read that project QR.')),
      );
      return;
    }
    final copy = ngmyWorksheetProjectCopyForImport(imported);
    await onImported?.call(copy);
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Imported "${copy.name}" from QR')),
    );
  }

  Future<void> _upload(BuildContext context) async {
    Navigator.pop(context);
    final imported = await ngmyPickAndParseWorksheetProjectBackup();
    if (imported == null) return;
    final copy = ngmyWorksheetProjectCopyForImport(imported);
    await onImported?.call(copy);
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Imported "${copy.name}" from file')),
    );
  }

  @override
  Widget build(BuildContext context) {
    final p = WorksheetPalette.of(context);
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 0, 16, 16),
        child: Container(
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
          decoration: BoxDecoration(
            color: p.cardBg,
            borderRadius: BorderRadius.circular(20),
            border: Border.all(color: p.cardBorder),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(
                    color: p.secondaryText.withValues(alpha: 0.35),
                    borderRadius: BorderRadius.circular(4),
                  ),
                ),
              ),
              const SizedBox(height: 14),
              Text(
                'Share project',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w900, color: p.primaryText),
              ),
              const SizedBox(height: 4),
              Text(
                '"${project.name}" — ${ngmyFormatMoney(project.totalSpending)}',
                style: TextStyle(fontSize: 13, color: p.secondaryText),
              ),
              const SizedBox(height: 16),
              _shareTile(
                context,
                p,
                icon: Icons.qr_code_2_rounded,
                label: 'Show QR code',
                subtitle: 'Includes thumbnail · NGMY logo · scan to import',
                onTap: () => _showQr(context),
                accent: true,
              ),
              const SizedBox(height: 8),
              _shareTile(
                context,
                p,
                icon: Icons.download_rounded,
                label: 'Download backup file',
                subtitle: 'Full project with thumbnail — upload on another phone',
                onTap: () => _download(context),
              ),
              const SizedBox(height: 8),
              _shareTile(
                context,
                p,
                icon: Icons.qr_code_scanner_rounded,
                label: 'Scan QR',
                subtitle: 'Import a project someone shared',
                onTap: () => _scan(context),
              ),
              const SizedBox(height: 8),
              _shareTile(
                context,
                p,
                icon: Icons.upload_file_rounded,
                label: 'Upload backup file',
                subtitle: 'Import a downloaded .json project file',
                onTap: () => _upload(context),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _shareTile(
    BuildContext context,
    WorksheetPalette p, {
    required IconData icon,
    required String label,
    required String subtitle,
    required VoidCallback onTap,
    bool accent = false,
  }) {
    return Material(
      color: accent ? WorksheetPalette.green.withValues(alpha: 0.12) : p.mutedSurface,
      borderRadius: BorderRadius.circular(14),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(14),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            border: Border.all(
              color: accent ? WorksheetPalette.green.withValues(alpha: 0.45) : p.cardBorder,
            ),
          ),
          child: Row(
            children: [
              Icon(icon, color: accent ? WorksheetPalette.green : p.primaryText),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(label, style: TextStyle(fontWeight: FontWeight.w800, color: p.primaryText)),
                    Text(subtitle, style: TextStyle(fontSize: 11, color: p.secondaryText, height: 1.3)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: p.secondaryText),
            ],
          ),
        ),
      ),
    );
  }
}

class NgmyWorksheetProjectQrPage extends StatelessWidget {
  const NgmyWorksheetProjectQrPage({
    super.key,
    required this.projectName,
    required this.payload,
  });

  final String projectName;
  final String payload;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Project QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(
          children: [
            Expanded(
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(20),
                decoration: BoxDecoration(
                  color: card,
                  borderRadius: BorderRadius.circular(20),
                  border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      projectName,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontWeight: FontWeight.w900,
                        fontSize: 16,
                        color: isDark ? Colors.white : const Color(0xFF0F172A),
                      ),
                    ),
                    const SizedBox(height: 16),
                    NgmyBrandedQrWidget(data: payload, large: true),
                    const SizedBox(height: 14),
                    Text(
                      'Scan with Worksheets → Share → Scan QR',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class NgmyWorksheetProjectScanPage extends StatefulWidget {
  const NgmyWorksheetProjectScanPage({super.key});

  @override
  State<NgmyWorksheetProjectScanPage> createState() => _NgmyWorksheetProjectScanPageState();
}

class _NgmyWorksheetProjectScanPageState extends State<NgmyWorksheetProjectScanPage> {
  bool _handled = false;

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    final barcodes = capture.barcodes;
    if (barcodes.isEmpty) return;
    final raw = barcodes.first.rawValue?.trim();
    if (raw == null || raw.isEmpty) return;
    if (!raw.startsWith('NGMY_WS:') && !raw.contains('"ngmy_worksheet_project_v1"')) return;
    _handled = true;
    NgmyNavigator.pop(context, raw);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan project QR'),
        backgroundColor: const Color(0xFF0B1018),
        foregroundColor: Colors.white,
      ),
      backgroundColor: Colors.black,
      body: MobileScanner(onDetect: _onDetect),
    );
  }
}
