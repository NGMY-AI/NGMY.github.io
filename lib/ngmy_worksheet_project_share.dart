import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_communicate_sync_download_io.dart'
    if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheet_project_qr_stash.dart';
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

/// Lite inline QR (offline fallback) — no thumbnail, small enough to scan.
String ngmyWorksheetProjectQrPayloadLite({
  required String ownerEmail,
  required WorksheetProject project,
}) {
  final json = jsonEncode(
    ngmyWorksheetProjectShareBundle(
      ownerEmail: ownerEmail,
      project: project,
      thumbnailOverride: null,
    ),
  );
  return 'NGMY_WS:${base64Url.encode(utf8.encode(json))}';
}

/// Preferred QR: tiny token in cloud (full project + thumbnail). Falls back to lite inline QR.
Future<String> ngmyWorksheetProjectQrPayloadForDisplay({
  required String ownerEmail,
  required WorksheetProject project,
}) async {
  final shareJson = await ngmyWorksheetProjectShareJson(
    ownerEmail: ownerEmail,
    project: project,
    includeThumbnail: true,
  );
  final stash = await NgmyWorksheetProjectQrStash.createFromShareJson(
    shareJson,
    ownerEmail: ownerEmail,
    projectId: project.id,
  );
  if (stash != null) return stash.qrPayload;
  return ngmyWorksheetProjectQrPayloadLite(ownerEmail: ownerEmail, project: project);
}

@Deprecated('Use ngmyWorksheetProjectQrPayloadLite')
String ngmyWorksheetProjectQrPayload({
  required String ownerEmail,
  required WorksheetProject project,
}) =>
    ngmyWorksheetProjectQrPayloadLite(ownerEmail: ownerEmail, project: project);

String? _barcodeScanText(Barcode barcode) {
  final raw = barcode.rawValue?.trim();
  if (raw != null && raw.isNotEmpty) return raw;
  final display = barcode.displayValue?.trim();
  if (display != null && display.isNotEmpty) return display;
  return null;
}

/// True when camera text looks like a worksheet project share payload.
bool ngmyWorksheetScanAcceptsPayload(String raw) {
  final t = raw.trim();
  if (t.isEmpty) return false;
  if (t.startsWith('$kNgmyWorksheetProjectQrPrefixV2|')) return true;
  if (t.startsWith('NGMY_WS:')) return true;
  if (t.contains('ngmy_worksheet_project_v1')) return true;
  if (t.startsWith('{')) {
    try {
      final map = jsonDecode(t);
      if (map is Map && (map['type'] ?? '').toString() == _kWorksheetProjectBundleType) return true;
    } catch (_) {}
  }
  return false;
}

String? ngmyWorksheetScanPayloadFromBarcode(Barcode barcode) {
  final text = _barcodeScanText(barcode);
  if (text == null) return null;
  if (ngmyWorksheetScanAcceptsPayload(text)) return text;
  final v2 = text.indexOf('$kNgmyWorksheetProjectQrPrefixV2|');
  if (v2 >= 0) {
    final slice = text.substring(v2).trim();
    if (ngmyWorksheetScanAcceptsPayload(slice)) return slice;
  }
  final idx = text.indexOf('NGMY_WS:');
  if (idx >= 0) {
    final slice = text.substring(idx).trim();
    if (ngmyWorksheetScanAcceptsPayload(slice)) return slice;
  }
  return null;
}

WorksheetProject? ngmyWorksheetProjectFromShareRaw(String raw) {
  final trimmed = raw.trim();
  if (trimmed.isEmpty) return null;
  if (trimmed.startsWith('$kNgmyWorksheetProjectQrPrefixV2|')) return null;
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

Future<WorksheetProject?> ngmyWorksheetProjectFromShareRawAsync(String raw) async {
  final trimmed = raw.trim();
  if (trimmed.startsWith('$kNgmyWorksheetProjectQrPrefixV2|')) {
    final parts = trimmed.split('|');
    if (parts.length >= 2) {
      final json = await NgmyWorksheetProjectQrStash.consumeToken(parts[1]);
      if (json != null && json.trim().isNotEmpty) {
        return ngmyWorksheetProjectFromShareRaw(json);
      }
    }
    return null;
  }
  return ngmyWorksheetProjectFromShareRaw(trimmed);
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
    NgmyNavigator.push<void>(
      context,
      NgmyWorksheetProjectQrPage(
        ownerEmail: ownerEmail,
        project: project,
      ),
      routeName: 'NgmyWorksheetProjectQr',
    );
  }

  Future<void> _scan(BuildContext context) async {
    Navigator.pop(context);
    final raw = await ngmyScanWorksheetProjectQrPayload(context);
    if (raw == null || raw.trim().isEmpty) return;
    final imported = await ngmyWorksheetProjectFromShareRawAsync(raw);
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
    final itemCount = project.items.length;

    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(14, 0, 14, 14),
        child: Container(
          decoration: BoxDecoration(
            color: p.cardBg,
            borderRadius: BorderRadius.circular(28),
            boxShadow: [
              BoxShadow(color: p.shadow, blurRadius: 36, offset: const Offset(0, 14)),
            ],
          ),
          clipBehavior: Clip.antiAlias,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              _shareSheetHeader(context, p, itemCount),
              Padding(
                padding: const EdgeInsets.fromLTRB(18, 20, 18, 22),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _sectionLabel(p, 'Send project'),
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        _actionTile(
                          p,
                          icon: Icons.qr_code_2_rounded,
                          title: 'QR code',
                          subtitle: 'Instant scan',
                          iconColor: const Color(0xFF38BDF8),
                          iconBg: const Color(0xFF38BDF8),
                          featured: true,
                          onTap: () => _showQr(context),
                        ),
                        const SizedBox(width: 10),
                        _actionTile(
                          p,
                          icon: Icons.download_rounded,
                          title: 'Backup file',
                          subtitle: 'Full copy',
                          iconColor: WorksheetPalette.teal,
                          iconBg: WorksheetPalette.green,
                          onTap: () => _download(context),
                        ),
                      ],
                    ),
                    const SizedBox(height: 20),
                    _sectionLabel(p, 'Import project'),
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        _actionTile(
                          p,
                          icon: Icons.qr_code_scanner_rounded,
                          title: 'Scan QR',
                          subtitle: 'From camera',
                          iconColor: const Color(0xFFA78BFA),
                          iconBg: const Color(0xFF8B5CF6),
                          onTap: () => _scan(context),
                        ),
                        const SizedBox(width: 10),
                        _actionTile(
                          p,
                          icon: Icons.upload_file_rounded,
                          title: 'Upload file',
                          subtitle: '.json backup',
                          iconColor: const Color(0xFFFBBF24),
                          iconBg: const Color(0xFFF59E0B),
                          onTap: () => _upload(context),
                        ),
                      ],
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _shareSheetHeader(BuildContext context, WorksheetPalette p, int itemCount) {
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: p.isDark
              ? [const Color(0xFF064E3B), const Color(0xFF0F766E), const Color(0xFF047857)]
              : [const Color(0xFF059669), const Color(0xFF10B981), const Color(0xFF14B8A6)],
        ),
      ),
      child: Stack(
        children: [
          Positioned(
            right: -20,
            top: -10,
            child: Icon(Icons.sync_alt_rounded, size: 110, color: Colors.white.withValues(alpha: 0.07)),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 10, 12, 20),
            child: Column(
              children: [
                Center(
                  child: Container(
                    width: 36,
                    height: 4,
                    margin: const EdgeInsets.only(bottom: 14),
                    decoration: BoxDecoration(
                      color: Colors.white.withValues(alpha: 0.35),
                      borderRadius: BorderRadius.circular(4),
                    ),
                  ),
                ),
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Container(
                      width: 64,
                      height: 64,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 1.5),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: 0.2),
                            blurRadius: 12,
                            offset: const Offset(0, 4),
                          ),
                        ],
                      ),
                      clipBehavior: Clip.antiAlias,
                      child: ngmyImageOrPlaceholder(
                        imageRef: project.thumbnailPath,
                        width: 64,
                        height: 64,
                        icon: Icons.folder_special_outlined,
                        borderRadius: BorderRadius.circular(13),
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Share project',
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.78),
                              fontSize: 11,
                              fontWeight: FontWeight.w800,
                              letterSpacing: 1.1,
                            ),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            project.name,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              color: Colors.white,
                              fontSize: 17,
                              fontWeight: FontWeight.w900,
                              height: 1.2,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Row(
                            children: [
                              ngmyWorksheetMoneyText(project.totalSpending, large: false),
                              const SizedBox(width: 8),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.16),
                                  borderRadius: BorderRadius.circular(20),
                                  border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
                                ),
                                child: Text(
                                  '$itemCount ${itemCount == 1 ? 'item' : 'items'}',
                                  style: TextStyle(
                                    color: Colors.white.withValues(alpha: 0.9),
                                    fontSize: 10,
                                    fontWeight: FontWeight.w800,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.pop(context),
                      icon: Icon(Icons.close_rounded, color: Colors.white.withValues(alpha: 0.85)),
                      style: IconButton.styleFrom(
                        backgroundColor: Colors.white.withValues(alpha: 0.12),
                        minimumSize: const Size(36, 36),
                      ),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _sectionLabel(WorksheetPalette p, String text) {
    return Row(
      children: [
        Container(
          width: 3,
          height: 14,
          decoration: BoxDecoration(
            color: WorksheetPalette.green,
            borderRadius: BorderRadius.circular(2),
          ),
        ),
        const SizedBox(width: 8),
        Text(
          text.toUpperCase(),
          style: TextStyle(
            color: p.secondaryText,
            fontSize: 11,
            fontWeight: FontWeight.w800,
            letterSpacing: 0.9,
          ),
        ),
      ],
    );
  }

  Widget _actionTile(
    WorksheetPalette p, {
    required IconData icon,
    required String title,
    required String subtitle,
    required Color iconColor,
    required Color iconBg,
    required VoidCallback onTap,
    bool featured = false,
  }) {
    return Expanded(
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onTap,
          borderRadius: BorderRadius.circular(18),
          child: Ink(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(18),
              color: p.isDark ? const Color(0xFF1A2433) : const Color(0xFFF8FAFC),
              border: Border.all(
                color: featured
                    ? const Color(0xFF38BDF8).withValues(alpha: p.isDark ? 0.45 : 0.35)
                    : p.cardBorder.withValues(alpha: p.isDark ? 0.8 : 1),
                width: featured ? 1.5 : 1,
              ),
              boxShadow: featured
                  ? [
                      BoxShadow(
                        color: const Color(0xFF38BDF8).withValues(alpha: 0.12),
                        blurRadius: 14,
                        offset: const Offset(0, 4),
                      ),
                    ]
                  : null,
            ),
            child: Padding(
              padding: const EdgeInsets.fromLTRB(14, 14, 12, 14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(9),
                    decoration: BoxDecoration(
                      color: iconBg.withValues(alpha: p.isDark ? 0.22 : 0.14),
                      borderRadius: BorderRadius.circular(12),
                      border: Border.all(color: iconColor.withValues(alpha: 0.35)),
                    ),
                    child: Icon(icon, color: iconColor, size: 22),
                  ),
                  const SizedBox(height: 12),
                  Text(
                    title,
                    style: TextStyle(
                      fontWeight: FontWeight.w900,
                      fontSize: 14,
                      color: p.primaryText,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    subtitle,
                    style: TextStyle(
                      fontSize: 11,
                      color: p.secondaryText,
                      fontWeight: FontWeight.w500,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class NgmyWorksheetProjectQrPage extends StatefulWidget {
  const NgmyWorksheetProjectQrPage({
    super.key,
    required this.ownerEmail,
    required this.project,
  });

  final String ownerEmail;
  final WorksheetProject project;

  @override
  State<NgmyWorksheetProjectQrPage> createState() => _NgmyWorksheetProjectQrPageState();
}

class _NgmyWorksheetProjectQrPageState extends State<NgmyWorksheetProjectQrPage> {
  String? _payload;
  String? _error;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final payload = await ngmyWorksheetProjectQrPayloadForDisplay(
        ownerEmail: widget.ownerEmail,
        project: widget.project,
      );
      if (!mounted) return;
      setState(() => _payload = payload);
    } catch (e) {
      if (!mounted) return;
      setState(() => _error = 'Could not create QR. Check your connection and try again.');
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B1018) : const Color(0xFFF3F4F6);
    final isCloud = _payload?.startsWith('$kNgmyWorksheetProjectQrPrefixV2|') ?? false;
    final itemCount = widget.project.items.length;

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(8, 4, 12, 0),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => Navigator.pop(context),
                    icon: Icon(Icons.arrow_back_ios_new_rounded, size: 18, color: isDark ? Colors.white70 : const Color(0xFF64748B)),
                  ),
                  Expanded(
                    child: Text(
                      'Project QR',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontWeight: FontWeight.w900,
                        fontSize: 17,
                        color: isDark ? Colors.white : const Color(0xFF0F172A),
                      ),
                    ),
                  ),
                  const SizedBox(width: 48),
                ],
              ),
            ),
            Expanded(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(20, 8, 20, 24),
                child: Column(
                  children: [
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.fromLTRB(20, 22, 20, 24),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(24),
                        gradient: LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: isDark
                              ? [const Color(0xFF064E3B), const Color(0xFF0F766E), const Color(0xFF047857)]
                              : [const Color(0xFF059669), const Color(0xFF10B981), const Color(0xFF14B8A6)],
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: WorksheetPalette.green.withValues(alpha: isDark ? 0.4 : 0.3),
                            blurRadius: 24,
                            offset: const Offset(0, 10),
                          ),
                        ],
                      ),
                      child: Column(
                        children: [
                          Text(
                            widget.project.name,
                            textAlign: TextAlign.center,
                            style: const TextStyle(
                              fontWeight: FontWeight.w900,
                              fontSize: 18,
                              color: Colors.white,
                            ),
                          ),
                          const SizedBox(height: 6),
                          Row(
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: [
                              ngmyWorksheetMoneyText(widget.project.totalSpending, large: false),
                              const SizedBox(width: 8),
                              Container(
                                padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                                decoration: BoxDecoration(
                                  color: Colors.white.withValues(alpha: 0.16),
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: Text(
                                  '$itemCount ${itemCount == 1 ? 'item' : 'items'}',
                                  style: TextStyle(
                                    color: Colors.white.withValues(alpha: 0.9),
                                    fontSize: 10,
                                    fontWeight: FontWeight.w800,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ],
                      ),
                    ),
                    const SizedBox(height: 16),
                    Container(
                      width: double.infinity,
                      padding: const EdgeInsets.all(22),
                      decoration: BoxDecoration(
                        color: isDark ? const Color(0xFF151D2B) : Colors.white,
                        borderRadius: BorderRadius.circular(24),
                        border: Border.all(
                          color: isCloud
                              ? const Color(0xFF38BDF8).withValues(alpha: 0.4)
                              : WorksheetPalette.green.withValues(alpha: 0.3),
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withValues(alpha: isDark ? 0.25 : 0.06),
                            blurRadius: 20,
                            offset: const Offset(0, 8),
                          ),
                        ],
                      ),
                      child: Column(
                        children: [
                          if (_error != null)
                            Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.redAccent))
                          else if (_payload == null)
                            const Padding(
                              padding: EdgeInsets.symmetric(vertical: 48),
                              child: CircularProgressIndicator(color: WorksheetPalette.green),
                            )
                          else
                            Container(
                              padding: const EdgeInsets.all(16),
                              decoration: BoxDecoration(
                                color: Colors.white,
                                borderRadius: BorderRadius.circular(20),
                                border: Border.all(color: const Color(0xFFE2E8F0)),
                              ),
                              child: NgmyBrandedQrWidget(data: _payload!, large: true),
                            ),
                          const SizedBox(height: 16),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                            decoration: BoxDecoration(
                              color: (isCloud ? const Color(0xFF38BDF8) : WorksheetPalette.green)
                                  .withValues(alpha: isDark ? 0.15 : 0.1),
                              borderRadius: BorderRadius.circular(12),
                              border: Border.all(
                                color: (isCloud ? const Color(0xFF38BDF8) : WorksheetPalette.green)
                                    .withValues(alpha: 0.35),
                              ),
                            ),
                            child: Row(
                              children: [
                                Icon(
                                  isCloud ? Icons.cloud_done_rounded : Icons.wifi_off_rounded,
                                  size: 18,
                                  color: isCloud ? const Color(0xFF38BDF8) : WorksheetPalette.green,
                                ),
                                const SizedBox(width: 10),
                                Expanded(
                                  child: Text(
                                    isCloud
                                        ? 'Cloud QR — includes thumbnail and all budget items.'
                                        : 'Offline QR — use backup file for the full project copy.',
                                    style: TextStyle(
                                      fontSize: 12,
                                      fontWeight: FontWeight.w600,
                                      height: 1.35,
                                      color: isDark ? Colors.white70 : const Color(0xFF64748B),
                                    ),
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
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
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.unrestricted,
    facing: CameraFacing.back,
  );
  bool _handled = false;
  bool _torchOn = false;

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  void _acceptPayload(String raw) {
    if (_handled || !mounted) return;
    _handled = true;
    NgmyNavigator.pop(context, raw);
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final barcode in capture.barcodes) {
      final payload = ngmyWorksheetScanPayloadFromBarcode(barcode);
      if (payload != null) {
        _acceptPayload(payload);
        return;
      }
      // Accept compact cloud token even if helper missed it.
      final text = _barcodeScanText(barcode);
      if (text != null && text.contains('$kNgmyWorksheetProjectQrPrefixV2|')) {
        final idx = text.indexOf('$kNgmyWorksheetProjectQrPrefixV2|');
        _acceptPayload(text.substring(idx).trim());
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan project QR'),
        backgroundColor: const Color(0xFF0B1018),
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: Icon(_torchOn ? Icons.flash_on_rounded : Icons.flash_off_rounded),
            onPressed: () async {
              await _camera.toggleTorch();
              if (mounted) setState(() => _torchOn = !_torchOn);
            },
          ),
        ],
      ),
      backgroundColor: Colors.black,
      body: Stack(
        fit: StackFit.expand,
        children: [
          MobileScanner(controller: _camera, onDetect: _onDetect),
          Center(
            child: Container(
              width: 260,
              height: 260,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(28),
                border: Border.all(color: WorksheetPalette.green, width: 3),
                boxShadow: [
                  BoxShadow(
                    color: WorksheetPalette.green.withValues(alpha: 0.35),
                    blurRadius: 24,
                    spreadRadius: 2,
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            left: 20,
            right: 20,
            bottom: 32,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: 0.72),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.45)),
              ),
              child: const Text(
                'Hold steady — worksheet QR scans instantly when in frame.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600, height: 1.35),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
