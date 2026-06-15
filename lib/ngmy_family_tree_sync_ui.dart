import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_family_tree_sync.dart';
import 'ngmy_nav.dart';
import 'ngmy_worksheet_helpers.dart';

Future<void> showNgmyFamilyTreeSyncPage(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required bool isAdmin,
  String? onlyTreeId,
  VoidCallback? onRestored,
}) {
  final email = ((user as dynamic).email as String?) ?? '';
  if (email.isEmpty) return Future.value();

  return NgmyNavigator.push<void>(
    context,
    NgmyFamilyTreeSyncPage(
      email: email,
      config: config,
      isAdmin: isAdmin,
      onlyTreeId: onlyTreeId,
      onRestored: onRestored,
    ),
    fullscreenDialog: true,
  );
}

class NgmyFamilyTreeSyncPage extends StatefulWidget {
  const NgmyFamilyTreeSyncPage({
    super.key,
    required this.email,
    required this.config,
    required this.isAdmin,
    this.onlyTreeId,
    this.onRestored,
  });

  final String email;
  final dynamic config;
  final bool isAdmin;
  final String? onlyTreeId;
  final VoidCallback? onRestored;

  @override
  State<NgmyFamilyTreeSyncPage> createState() => _NgmyFamilyTreeSyncPageState();
}

class _NgmyFamilyTreeSyncPageState extends State<NgmyFamilyTreeSyncPage> {
  String? _activeCode;
  List<({String id, String name, int count})> _trees = [];
  String? _statusMessage;
  bool _working = false;

  static const Color _accent = WorksheetPalette.green;

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    if (!widget.isAdmin) {
      _activeCode = await NgmyFamilyTreeBackupCodes.codeForEmail(widget.email);
    }
    final trees = await NgmyFamilyTreeSyncService.treesSummary(widget.email);
    if (!mounted) return;
    setState(() {
      _trees = trees;
    });
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _withWork(Future<void> Function() action, {String? busyLabel}) async {
    if (_working) return;
    setState(() {
      _working = true;
      _statusMessage = busyLabel;
    });
    try {
      await action();
    } finally {
      if (mounted) {
        setState(() {
          _working = false;
          _statusMessage = null;
        });
      }
    }
  }

  Future<void> _exportAll() async {
    await _withWork(() async {
      final msg = await NgmyFamilyTreeSyncService.exportToFile(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
        onlyTreeId: widget.onlyTreeId,
      );
      if (!mounted) return;
      if (msg == null) {
        _toast('No family trees to export yet.');
        return;
      }
      _toast(msg);
      await _refresh();
    }, busyLabel: 'Preparing download…');
  }

  Future<void> _exportOne(String treeId) async {
    await _withWork(() async {
      final msg = await NgmyFamilyTreeSyncService.exportToFile(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
        onlyTreeId: treeId,
      );
      if (!mounted) return;
      if (msg == null) {
        _toast('Could not export this tree.');
        return;
      }
      _toast(msg);
    }, busyLabel: 'Preparing file…');
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
      debugPrint('[family tree sync pick] file_picker: $e');
    }
    return ngmyPickBackupJsonViaBrowser();
  }

  Future<void> _importRaw(String raw) async {
    await _withWork(() async {
      try {
        final result = await NgmyFamilyTreeSyncService.importBundle(
          email: widget.email,
          config: widget.config,
          isAdmin: widget.isAdmin,
          raw: raw,
        );
        if (!mounted) return;
        if (result == null) {
          _toast('No family trees found in that backup.');
          return;
        }
        widget.onRestored?.call();
        _toast('Restored ${result.members} members across ${result.trees} tree${result.trees == 1 ? '' : 's'}.');
        await _refresh();
      } catch (e) {
        if (!mounted) return;
        _toast(e.toString().replaceFirst('StateError: ', ''));
      }
    }, busyLabel: 'Restoring family trees…');
  }

  Future<void> _importFile() async {
    final raw = await _pickBackupText();
    if (raw == null || raw.trim().isEmpty) return;
    await _importRaw(raw);
  }

  Future<void> _showQr() async {
    await _withWork(() async {
      final qr = await NgmyFamilyTreeSyncService.createQrRestorePayload(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
        onlyTreeId: widget.onlyTreeId,
      );
      if (!mounted) return;
      if (qr == null) {
        _toast('No family trees to share yet, or cloud is unavailable.');
        return;
      }
      await Navigator.of(context).push<void>(
        MaterialPageRoute<void>(
          fullscreenDialog: true,
          builder: (_) => _NgmyFamilyTreeQrDisplayPage(
            qrPayload: qr.qrPayload,
            backupCode: qr.code,
            usesRemaining: qr.usesRemaining,
          ),
        ),
      );
    }, busyLabel: 'Creating QR code…');
  }

  Future<void> _scanQr() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      _toast('Use a phone camera to scan, or upload the backup file on desktop.');
      return;
    }
    final raw = await Navigator.of(context).push<String>(
      MaterialPageRoute<String>(
        fullscreenDialog: true,
        builder: (_) => const _NgmyFamilyTreeSyncScanPage(),
      ),
    );
    if (raw != null && raw.trim().isNotEmpty) {
      await _importRaw(raw);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final border = isDark ? Colors.white12 : const Color(0xFFE2E8F0);
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        scrolledUnderElevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded, color: titleColor, size: 20),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          'Family tree sync',
          style: TextStyle(color: titleColor, fontWeight: FontWeight.w900, fontSize: 17),
        ),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          ListView(
            padding: const EdgeInsets.fromLTRB(18, 4, 18, 32),
            children: [
              Container(
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  gradient: const LinearGradient(
                    colors: [WorksheetPalette.green, WorksheetPalette.greenDark],
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                  ),
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Row(
                  children: [
                    Container(
                      width: 52,
                      height: 52,
                      decoration: BoxDecoration(
                        color: Colors.white.withValues(alpha: 0.18),
                        borderRadius: BorderRadius.circular(14),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 2),
                      ),
                      child: const Icon(Icons.park_rounded, color: Colors.white, size: 28),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Move your family trees',
                            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            widget.isAdmin
                                ? 'Photos and family books stay on this device. Admin skips cloud codes.'
                                : 'Full trees stay local. QR works 2 times — names & dates sync to cloud only.',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 12, height: 1.35),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              if (!widget.isAdmin && _activeCode != null) ...[
                const SizedBox(height: 14),
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(color: card, borderRadius: BorderRadius.circular(16), border: Border.all(color: border)),
                  child: Row(
                    children: [
                      const Icon(Icons.vpn_key_rounded, color: _accent, size: 22),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Backup code', style: TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: muted)),
                            Text(_activeCode!, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 17, color: titleColor, letterSpacing: 0.6)),
                          ],
                        ),
                      ),
                      IconButton(
                        tooltip: 'Copy',
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: _activeCode!));
                          _toast('Backup code copied.');
                        },
                        icon: const Icon(Icons.copy_rounded, color: _accent),
                      ),
                    ],
                  ),
                ),
              ],
              const SizedBox(height: 18),
              Text('Actions', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
              const SizedBox(height: 10),
              _SyncActionTile(
                icon: Icons.download_rounded,
                label: 'Download all family trees',
                subtitle: 'Photos, books & notes included in file',
                card: card,
                border: border,
                onTap: _working ? null : _exportAll,
              ),
              const SizedBox(height: 8),
              _SyncActionTile(
                icon: Icons.upload_file_rounded,
                label: 'Upload backup file',
                subtitle: 'Restore trees from a saved file',
                card: card,
                border: border,
                onTap: _working ? null : _importFile,
              ),
              const SizedBox(height: 8),
              _SyncActionTile(
                icon: Icons.qr_code_2_rounded,
                label: 'Show restore QR',
                subtitle: widget.isAdmin ? 'Share a scannable backup' : 'Works 2 times — any phone can scan',
                card: card,
                border: border,
                accent: true,
                onTap: _working ? null : _showQr,
              ),
              const SizedBox(height: 8),
              _SyncActionTile(
                icon: Icons.qr_code_scanner_rounded,
                label: 'Scan QR to restore',
                subtitle: 'Import from another device',
                card: card,
                border: border,
                onTap: _working ? null : _scanQr,
              ),
              if (_trees.length > 1 && widget.onlyTreeId == null) ...[
                const SizedBox(height: 22),
                Text('One tree', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
                const SizedBox(height: 8),
                ..._trees.map(
                  (t) => Padding(
                    padding: const EdgeInsets.only(bottom: 8),
                    child: Material(
                      color: card,
                      borderRadius: BorderRadius.circular(14),
                      child: InkWell(
                        onTap: _working ? null : () => _exportOne(t.id),
                        borderRadius: BorderRadius.circular(14),
                        child: Container(
                          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(14),
                            border: Border.all(color: border),
                          ),
                          child: Row(
                            children: [
                              CircleAvatar(
                                radius: 18,
                                backgroundColor: _accent.withValues(alpha: 0.15),
                                child: const Icon(Icons.park_outlined, color: _accent, size: 18),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(t.name, style: TextStyle(fontWeight: FontWeight.w800, color: titleColor)),
                                    Text('${t.count} members', style: TextStyle(fontSize: 11, color: muted)),
                                  ],
                                ),
                              ),
                              Icon(Icons.download_outlined, color: muted, size: 20),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            ],
          ),
          if (_working)
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              child: Material(
                elevation: 8,
                color: card,
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                  child: Row(
                    children: [
                      const SizedBox(
                        width: 22,
                        height: 22,
                        child: CircularProgressIndicator(strokeWidth: 2.5, color: _accent),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Text(
                          _statusMessage ?? 'Working…',
                          style: TextStyle(fontWeight: FontWeight.w700, color: titleColor, fontSize: 13),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _SyncActionTile extends StatelessWidget {
  const _SyncActionTile({
    required this.icon,
    required this.label,
    required this.subtitle,
    required this.card,
    required this.border,
    required this.onTap,
    this.accent = false,
  });

  final IconData icon;
  final String label;
  final String subtitle;
  final Color card;
  final Color border;
  final VoidCallback? onTap;
  final bool accent;

  static const Color _accent = WorksheetPalette.green;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final iconBg = accent ? _accent : _accent.withValues(alpha: 0.12);
    final iconFg = accent ? Colors.white : _accent;

    return Material(
      color: card,
      borderRadius: BorderRadius.circular(16),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(16),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 13),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: accent ? _accent.withValues(alpha: 0.45) : border),
          ),
          child: Row(
            children: [
              Container(
                width: 42,
                height: 42,
                decoration: BoxDecoration(
                  color: iconBg,
                  borderRadius: BorderRadius.circular(12),
                ),
                child: Icon(icon, color: iconFg, size: 22),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(label, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14, color: titleColor)),
                    Text(subtitle, style: TextStyle(fontSize: 11, color: muted, height: 1.3)),
                  ],
                ),
              ),
              Icon(Icons.chevron_right_rounded, color: muted),
            ],
          ),
        ),
      ),
    );
  }
}

class _NgmyFamilyTreeQrDisplayPage extends StatelessWidget {
  const _NgmyFamilyTreeQrDisplayPage({
    required this.qrPayload,
    required this.backupCode,
    required this.usesRemaining,
  });

  final String qrPayload;
  final String backupCode;
  final int usesRemaining;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final usesLabel = usesRemaining >= 999 ? 'Unlimited (admin)' : '$usesRemaining scans left';

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Family tree QR', style: TextStyle(fontWeight: FontWeight.w900)),
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
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                        boxShadow: [
                          BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 12, offset: const Offset(0, 4)),
                        ],
                      ),
                      child: QrImageView(
                        data: qrPayload,
                        version: QrVersions.auto,
                        size: 220,
                        backgroundColor: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 18),
                    Text(usesLabel, style: TextStyle(fontWeight: FontWeight.w800, color: WorksheetPalette.green)),
                    const SizedBox(height: 8),
                    Text(
                      'Scan on another phone to restore photos, family book, and all tree details.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B), height: 1.4),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12),
            Text('Code: $backupCode', style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF475569))),
          ],
        ),
      ),
    );
  }
}

class _NgmyFamilyTreeSyncScanPage extends StatefulWidget {
  const _NgmyFamilyTreeSyncScanPage();

  @override
  State<_NgmyFamilyTreeSyncScanPage> createState() => _NgmyFamilyTreeSyncScanPageState();
}

class _NgmyFamilyTreeSyncScanPageState extends State<_NgmyFamilyTreeSyncScanPage> {
  final MobileScannerController _controller = MobileScannerController();
  bool _handled = false;

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        title: const Text('Scan family tree QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: MobileScanner(
        controller: _controller,
        onDetect: (capture) {
          if (_handled) return;
          for (final barcode in capture.barcodes) {
            final raw = barcode.rawValue?.trim();
            if (raw == null || raw.isEmpty) continue;
            if (!raw.startsWith(kNgmyFamilyTreeSyncQrPrefixV2) && !raw.contains(kNgmyFamilyTreeSyncMarker)) continue;
            _handled = true;
            Navigator.pop(context, raw);
            return;
          }
        },
      ),
    );
  }
}
