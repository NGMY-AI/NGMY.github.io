import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_communicate_sync_download_io.dart'
    if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheets_storage.dart';

const _kWorksheetProjectBundleType = 'ngmy_worksheet_project_v1';

Map<String, dynamic> ngmyWorksheetProjectShareBundle({
  required String ownerEmail,
  required WorksheetProject project,
  bool includeThumbnail = true,
}) {
  final projectJson = project.toJson();
  if (!includeThumbnail) {
    projectJson.remove('thumbnailPath');
  }
  return {
    'type': _kWorksheetProjectBundleType,
    'ownerEmail': ownerEmail.trim(),
    'exportedAt': DateTime.now().toUtc().toIso8601String(),
    'project': projectJson,
  };
}

String ngmyWorksheetProjectShareJson({
  required String ownerEmail,
  required WorksheetProject project,
  bool includeThumbnail = true,
}) {
  return jsonEncode(
    ngmyWorksheetProjectShareBundle(
      ownerEmail: ownerEmail,
      project: project,
      includeThumbnail: includeThumbnail,
    ),
  );
}

String ngmyWorksheetProjectQrPayload({
  required String ownerEmail,
  required WorksheetProject project,
}) {
  final json = ngmyWorksheetProjectShareJson(
    ownerEmail: ownerEmail,
    project: project,
    includeThumbnail: false,
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

Future<void> showNgmyWorksheetProjectShareSheet(
  BuildContext context, {
  required String ownerEmail,
  required WorksheetProject project,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyWorksheetProjectShareSheet(
      ownerEmail: ownerEmail,
      project: project,
    ),
  );
}

class _NgmyWorksheetProjectShareSheet extends StatelessWidget {
  const _NgmyWorksheetProjectShareSheet({
    required this.ownerEmail,
    required this.project,
  });

  final String ownerEmail;
  final WorksheetProject project;

  Future<void> _copyJson(BuildContext context) async {
    final json = ngmyWorksheetProjectShareJson(
      ownerEmail: ownerEmail,
      project: project,
      includeThumbnail: true,
    );
    await Clipboard.setData(ClipboardData(text: json));
    if (!context.mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Project backup copied — paste in Import shared project')),
    );
  }

  Future<void> _download(BuildContext context) async {
    final json = ngmyWorksheetProjectShareJson(
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
    final payload = ngmyWorksheetProjectQrPayload(ownerEmail: ownerEmail, project: project);
    NgmyNavigator.push<void>(
      context,
      _NgmyWorksheetProjectQrPage(projectName: project.name, payload: payload),
      routeName: 'NgmyWorksheetProjectQr',
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
                subtitle: 'Budget items sync — thumbnail not in QR',
                onTap: () => _showQr(context),
                accent: true,
              ),
              const SizedBox(height: 8),
              _shareTile(
                context,
                p,
                icon: Icons.download_rounded,
                label: 'Download backup file',
                subtitle: 'Includes thumbnail when available',
                onTap: () => _download(context),
              ),
              const SizedBox(height: 8),
              _shareTile(
                context,
                p,
                icon: Icons.copy_rounded,
                label: 'Copy backup text',
                subtitle: 'Send via text or email',
                onTap: () => _copyJson(context),
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

class _NgmyWorksheetProjectQrPage extends StatelessWidget {
  const _NgmyWorksheetProjectQrPage({
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
                    QrImageView(
                      data: payload,
                      version: QrVersions.auto,
                      size: 240,
                      backgroundColor: Colors.white,
                      eyeStyle: const QrEyeStyle(
                        eyeShape: QrEyeShape.square,
                        color: WorksheetPalette.greenDark,
                      ),
                      dataModuleStyle: const QrDataModuleStyle(
                        dataModuleShape: QrDataModuleShape.square,
                        color: Color(0xFF0F172A),
                      ),
                    ),
                    const SizedBox(height: 14),
                    Text(
                      'Scan in Worksheets → Import shared project',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 12, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: FilledButton.icon(
                onPressed: () async {
                  await Clipboard.setData(ClipboardData(text: payload));
                  if (!context.mounted) return;
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('QR payload copied')),
                  );
                },
                style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green),
                icon: const Icon(Icons.copy_rounded),
                label: const Text('Copy QR payload'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
