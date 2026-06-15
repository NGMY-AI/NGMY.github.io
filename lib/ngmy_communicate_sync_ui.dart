import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_communicate.dart';
import 'ngmy_communicate_sync.dart';
import 'ngmy_nav.dart';

Future<void> showNgmyCommunicateSyncSheet(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required bool isAdmin,
  VoidCallback? onRestored,
}) async {
  final email = ((user as dynamic).email as String?) ?? '';
  if (email.isEmpty) return;

  await showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) => _NgmyCommunicateSyncSheet(
      email: email,
      config: config,
      isAdmin: isAdmin,
      onRestored: onRestored,
    ),
  );
}

class _NgmyCommunicateSyncSheet extends StatefulWidget {
  const _NgmyCommunicateSyncSheet({
    required this.email,
    required this.config,
    required this.isAdmin,
    this.onRestored,
  });

  final String email;
  final dynamic config;
  final bool isAdmin;
  final VoidCallback? onRestored;

  @override
  State<_NgmyCommunicateSyncSheet> createState() => _NgmyCommunicateSyncSheetState();
}

class _NgmyCommunicateSyncSheetState extends State<_NgmyCommunicateSyncSheet> {
  bool _busy = false;
  String? _activeCode;
  List<({String id, String name, int count})> _threads = [];

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    if (!widget.isAdmin) {
      _activeCode = await NgmyCommunicateBackupCodes.codeForEmail(widget.email);
    }
    final threads = await NgmyCommunicateSyncService.threadsSummary(widget.email, widget.config);
    if (!mounted) return;
    setState(() {
      _threads = threads;
    });
  }

  Future<void> _run(Future<void> Function() action) async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await action();
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _exportAll() async {
    await _run(() async {
      final msg = await NgmyCommunicateSyncService.exportToFile(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
      );
      if (!mounted) return;
      if (msg == null) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('No saved conversations to export yet.')),
        );
        return;
      }
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
      await _refresh();
    });
  }

  Future<void> _exportOne(String profileId) async {
    await _run(() async {
      final msg = await NgmyCommunicateSyncService.exportToFile(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
        onlyProfileId: profileId,
      );
      if (!mounted) return;
      if (msg == null) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Could not export this advisor.')));
        return;
      }
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
      await _refresh();
    });
  }

  Future<String?> _pickBackupText() async {
    try {
      final result = await FilePicker.platform.pickFiles(
        type: FileType.custom,
        allowedExtensions: const ['json', 'ngmy'],
        withData: true,
      );
      final file = result?.files.first;
      if (file == null) return null;
      if (file.bytes != null && file.bytes!.isNotEmpty) {
        return String.fromCharCodes(file.bytes!);
      }
    } catch (e) {
      debugPrint('[advisor sync pick] file_picker: $e');
    }
    return ngmyPickBackupJsonViaBrowser();
  }

  Future<void> _importRaw(String raw) async {
    await _run(() async {
      try {
        final result = await NgmyCommunicateSyncService.importBundle(
          email: widget.email,
          config: widget.config,
          isAdmin: widget.isAdmin,
          raw: raw,
        );
        if (!mounted) return;
        if (result == null) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(content: Text('No conversations found in that file.')),
          );
          return;
        }
        widget.onRestored?.call();
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              'Restored ${result.messages} messages across ${result.threads} advisor${result.threads == 1 ? '' : 's'}.',
            ),
          ),
        );
        await _refresh();
      } catch (e) {
        if (!mounted) return;
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.toString().replaceFirst('StateError: ', ''))));
      }
    });
  }

  Future<void> _importFile() async {
    final raw = await _pickBackupText();
    if (raw == null || raw.trim().isEmpty) return;
    await _importRaw(raw);
  }

  Future<void> _showQr() async {
    final bundle = await NgmyCommunicateSyncService.buildExportBundle(
      email: widget.email,
      config: widget.config,
      isAdmin: widget.isAdmin,
    );
    if (!mounted) return;
    if (bundle == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('No conversations to share yet.')),
      );
      return;
    }
    final payload = bundle.buildQrPayload();
    if (payload == null) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Too many messages for one QR — download the file instead.')),
      );
      return;
    }
    if (!mounted) return;
    await showDialog<void>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Scan to restore'),
        content: SizedBox(
          width: 260,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              QrImageView(data: payload, size: 220, backgroundColor: Colors.white),
              const SizedBox(height: 10),
              Text('Code: ${bundle.code}', style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 12)),
              const SizedBox(height: 6),
              const Text(
                'Another phone can scan this to restore every advisor in this backup.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 11, height: 1.35),
              ),
            ],
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Close')),
        ],
      ),
    );
  }

  Future<void> _scanQr() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Use a phone camera to scan, or upload the backup file on desktop.')),
      );
      return;
    }
    if (!mounted) return;
    final raw = await NgmyNavigator.push<String?>(
      context,
      _NgmyAdvisorSyncScanPage(),
    );
    if (raw != null && raw.trim().isNotEmpty) {
      await _importRaw(raw);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final surface = isDark ? const Color(0xFF121726) : Colors.white;
    final muted = isDark ? Colors.white54 : Colors.black54;

    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.viewInsetsOf(context).bottom),
      child: Container(
        margin: const EdgeInsets.fromLTRB(12, 0, 12, 16),
        padding: const EdgeInsets.fromLTRB(20, 18, 20, 22),
        decoration: BoxDecoration(
          color: surface,
          borderRadius: BorderRadius.circular(22),
          border: Border.all(color: isDark ? Colors.white12 : const Color(0xFFE2E8F0)),
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisSize: MainAxisSize.min,
            children: [
              Row(
                children: [
                  const Icon(Icons.sync_rounded, color: kNgmyAdvisorsHubAccent),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Text(
                      'Conversation sync',
                      style: TextStyle(fontWeight: FontWeight.w900, fontSize: 18, color: isDark ? Colors.white : Colors.black87),
                    ),
                  ),
                  IconButton(onPressed: () => Navigator.pop(context), icon: Icon(Icons.close_rounded, color: muted)),
                ],
              ),
              Text(
                widget.isAdmin
                    ? 'Download or upload advisor chats on this device. Admin backups work without a cloud code.'
                    : 'Chats stay on your phone. Your backup code keeps files working while your advisor pass is active.',
                style: TextStyle(fontSize: 12, color: muted, height: 1.4),
              ),
              if (!widget.isAdmin && _activeCode != null) ...[
                const SizedBox(height: 12),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
                  decoration: BoxDecoration(
                    color: kNgmyAdvisorsHubAccent.withValues(alpha: isDark ? 0.18 : 0.08),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.35)),
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Your backup code', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: muted)),
                            Text(_activeCode!, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: isDark ? Colors.white : Colors.black87)),
                          ],
                        ),
                      ),
                      IconButton(
                        tooltip: 'Copy code',
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: _activeCode!));
                          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Backup code copied.')));
                        },
                        icon: const Icon(Icons.copy_rounded, color: kNgmyAdvisorsHubAccent, size: 20),
                      ),
                    ],
                  ),
                ),
              ],
              const SizedBox(height: 14),
              if (_busy) const LinearProgressIndicator(minHeight: 2, color: kNgmyAdvisorsHubAccent),
              _actionBtn(Icons.download_rounded, 'Download all conversations', _exportAll, isDark),
              const SizedBox(height: 8),
              _actionBtn(Icons.upload_file_rounded, 'Upload backup file', _importFile, isDark),
              const SizedBox(height: 8),
              _actionBtn(Icons.qr_code_rounded, 'Show restore QR', _showQr, isDark),
              const SizedBox(height: 8),
              _actionBtn(Icons.qr_code_scanner_rounded, 'Scan QR to restore', _scanQr, isDark),
              if (_threads.isNotEmpty) ...[
                const SizedBox(height: 16),
                Text('Download one advisor', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: isDark ? Colors.white : Colors.black87)),
                const SizedBox(height: 8),
                ..._threads.map(
                  (t) => Padding(
                    padding: const EdgeInsets.only(bottom: 6),
                    child: OutlinedButton(
                      onPressed: _busy ? null : () => _exportOne(t.id),
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: Text('${t.name} (${t.count} messages)', style: const TextStyle(fontWeight: FontWeight.w700)),
                      ),
                    ),
                  ),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }

  Widget _actionBtn(IconData icon, String label, Future<void> Function() onTap, bool isDark) {
    return FilledButton.icon(
      onPressed: _busy ? null : onTap,
      style: FilledButton.styleFrom(
        backgroundColor: kNgmyAdvisorsHubAccent,
        minimumSize: const Size(double.infinity, 46),
      ),
      icon: Icon(icon, size: 20),
      label: Text(label, style: const TextStyle(fontWeight: FontWeight.w800)),
    );
  }
}

class _NgmyAdvisorSyncScanPage extends StatefulWidget {
  @override
  State<_NgmyAdvisorSyncScanPage> createState() => _NgmyAdvisorSyncScanPageState();
}

class _NgmyAdvisorSyncScanPageState extends State<_NgmyAdvisorSyncScanPage> {
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.unrestricted,
    facing: CameraFacing.back,
  );
  bool _handled = false;

  @override
  void dispose() {
    _camera.dispose();
    super.dispose();
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final b in capture.barcodes) {
      final raw = b.rawValue?.trim() ?? '';
      if (!raw.startsWith(kNgmyAdvisorSyncQrPrefix)) continue;
      _handled = true;
      NgmyNavigator.pop(context, raw);
      return;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Scan advisor backup'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
      ),
      backgroundColor: Colors.black,
      body: MobileScanner(controller: _camera, onDetect: _onDetect),
    );
  }
}
