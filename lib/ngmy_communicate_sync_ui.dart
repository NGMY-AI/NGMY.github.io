import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_communicate.dart' show kNgmyAdvisorsHubAccent;
import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_sync.dart';
import 'ngmy_nav.dart';
import 'ngmy_sync_qr_saved.dart';

Future<void> showNgmyCommunicateSyncSheet(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required bool isAdmin,
  VoidCallback? onRestored,
}) {
  final email = ((user as dynamic).email as String?) ?? '';
  if (email.isEmpty) return Future.value();

  return NgmyNavigator.push<void>(
    context,
    NgmyCommunicateSyncPage(
      email: email,
      config: config,
      isAdmin: isAdmin,
      onRestored: onRestored,
    ),
    fullscreenDialog: true,
  );
}

class NgmyCommunicateSyncPage extends StatefulWidget {
  const NgmyCommunicateSyncPage({
    super.key,
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
  State<NgmyCommunicateSyncPage> createState() => _NgmyCommunicateSyncPageState();
}

class _NgmyCommunicateSyncPageState extends State<NgmyCommunicateSyncPage> {
  List<({String id, String name, int count})> _threads = [];
  String? _statusMessage;
  bool _working = false;

  bool get _canExport =>
      widget.isAdmin || NgmyCommunicatePayments.hasActivePass(widget.config, widget.email);

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    final threads = await NgmyCommunicateSyncService.threadsSummary(widget.email, widget.config);
    if (!mounted) return;
    setState(() {
      _threads = threads;
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
      final msg = await NgmyCommunicateSyncService.exportToFile(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
      );
      if (!mounted) return;
      if (msg == null) {
        _toast('No saved conversations to export yet.');
        return;
      }
      _toast(msg);
      await _refresh();
    }, busyLabel: 'Preparing download…');
  }

  Future<void> _exportOne(String profileId) async {
    await _withWork(() async {
      final msg = await NgmyCommunicateSyncService.exportToFile(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
        onlyProfileId: profileId,
      );
      if (!mounted) return;
      if (msg == null) {
        _toast('Could not export this advisor.');
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
      debugPrint('[advisor sync pick] file_picker: $e');
    }
    return ngmyPickBackupJsonViaBrowser();
  }

  Future<void> _importRaw(String raw) async {
    await _withWork(() async {
      try {
        final result = await NgmyCommunicateSyncService.importBundle(
          email: widget.email,
          config: widget.config,
          isAdmin: widget.isAdmin,
          raw: raw,
        );
        if (!mounted) return;
        if (result == null) {
          _toast('No conversations found in that backup.');
          return;
        }
        widget.onRestored?.call();
        _toast('Restored ${result.messages} messages across ${result.threads} advisor${result.threads == 1 ? '' : 's'}.');
        await _refresh();
      } catch (e) {
        if (!mounted) return;
        _toast(e.toString().replaceFirst('StateError: ', ''));
      }
    }, busyLabel: 'Restoring chats…');
  }

  Future<void> _importFile() async {
    final raw = await _pickBackupText();
    if (raw == null || raw.trim().isEmpty) return;
    await _importRaw(raw);
  }

  Future<void> _showQr() async {
    await _withWork(() async {
      final qr = await NgmyCommunicateSyncService.createQrRestorePayload(
        email: widget.email,
        config: widget.config,
        isAdmin: widget.isAdmin,
      );
      if (!mounted) return;
      if (qr == null) {
        _toast('No conversations to share yet, or cloud is unavailable.');
        return;
      }
      await Navigator.of(context).push<void>(
        MaterialPageRoute<void>(
          fullscreenDialog: true,
          builder: (_) => _NgmyAdvisorQrDisplayPage(
            email: widget.email,
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
        builder: (_) => const _NgmyAdvisorSyncScanPage(),
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
          'Conversation sync',
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
                    colors: [Color(0xFF6366F1), Color(0xFF8B5CF6)],
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
                      ),
                      child: const Icon(Icons.sync_rounded, color: Colors.white, size: 28),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Move your advisor chats',
                            style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 16),
                          ),
                          const SizedBox(height: 4),
                          Text(
                            widget.isAdmin
                                ? 'Backups stay on this device. Admin skips cloud codes.'
                                : _canExport
                                    ? 'Messages stay local. QR works 2 times while your pass is active.'
                                    : 'Scan a QR or upload a file to receive conversations — no pass needed to import.',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.88), fontSize: 12, height: 1.35),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              Text('Actions', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
              const SizedBox(height: 10),
              if (_canExport) ...[
                _SyncActionTile(
                  icon: Icons.download_rounded,
                  label: 'Download all conversations',
                  subtitle: 'Save every advisor chat as a file',
                  card: card,
                  border: border,
                  onTap: _working ? null : _exportAll,
                ),
                const SizedBox(height: 8),
              ],
              _SyncActionTile(
                icon: Icons.upload_file_rounded,
                label: 'Upload backup file',
                subtitle: 'Restore chats from a saved file',
                card: card,
                border: border,
                onTap: _working ? null : _importFile,
              ),
              if (_canExport) ...[
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
              ],
              const SizedBox(height: 8),
              _SyncActionTile(
                icon: Icons.qr_code_scanner_rounded,
                label: 'Scan QR to restore',
                subtitle: 'Import from another device — no advisor pass required',
                card: card,
                border: border,
                accent: !_canExport,
                onTap: _working ? null : _scanQr,
              ),
              if (_canExport && _threads.isNotEmpty) ...[
                const SizedBox(height: 22),
                Text('One advisor', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
                const SizedBox(height: 8),
                ..._threads.map(
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
                                backgroundColor: kNgmyAdvisorsHubAccent.withValues(alpha: 0.15),
                                child: const Icon(Icons.support_agent_rounded, color: kNgmyAdvisorsHubAccent, size: 18),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    Text(t.name, style: TextStyle(fontWeight: FontWeight.w800, color: titleColor)),
                                    Text('${t.count} messages', style: TextStyle(fontSize: 11, color: muted)),
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
                        child: CircularProgressIndicator(strokeWidth: 2.5, color: kNgmyAdvisorsHubAccent),
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

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);
    final iconBg = accent ? kNgmyAdvisorsHubAccent : kNgmyAdvisorsHubAccent.withValues(alpha: 0.12);
    final iconFg = accent ? Colors.white : kNgmyAdvisorsHubAccent;

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
            border: Border.all(color: accent ? kNgmyAdvisorsHubAccent.withValues(alpha: 0.45) : border),
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

class _NgmyAdvisorQrDisplayPage extends StatefulWidget {
  const _NgmyAdvisorQrDisplayPage({
    required this.email,
    required this.qrPayload,
    required this.backupCode,
    required this.usesRemaining,
  });

  final String email;
  final String qrPayload;
  final String backupCode;
  final int usesRemaining;

  @override
  State<_NgmyAdvisorQrDisplayPage> createState() => _NgmyAdvisorQrDisplayPageState();
}

class _NgmyAdvisorQrDisplayPageState extends State<_NgmyAdvisorQrDisplayPage> {
  bool _saving = false;
  bool? _alreadySaved;

  @override
  void initState() {
    super.initState();
    unawaited(_checkSaved());
  }

  Future<void> _checkSaved() async {
    final saved = await NgmySyncQrSavedStore.hasSaved(widget.email, NgmySyncQrSource.advisor);
    if (mounted) setState(() => _alreadySaved = saved);
  }

  Future<void> _saveToHub() async {
    if (_saving) return;
    setState(() => _saving = true);
    try {
      final token = NgmySyncQrSavedStore.extractStashToken(widget.qrPayload, NgmySyncQrSource.advisor);
      if (token == null) throw StateError('Could not read this QR code.');
      await NgmySyncQrSavedStore.save(
        email: widget.email,
        source: NgmySyncQrSource.advisor,
        qrPayload: widget.qrPayload,
        stashToken: token,
        backupCode: widget.backupCode,
        usesRemaining: widget.usesRemaining,
      );
      if (!mounted) return;
      setState(() => _alreadySaved = true);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Saved to QR Code Generator → Saved (NGMY Advisors).')),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e.toString().replaceFirst('StateError: ', ''))),
      );
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final usesLabel = widget.usesRemaining >= 999 ? 'Unlimited (admin)' : '${widget.usesRemaining} scans left';

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Restore QR', style: TextStyle(fontWeight: FontWeight.w900)),
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
                  border: Border.all(color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.35)),
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
                        data: widget.qrPayload,
                        size: 240,
                        backgroundColor: Colors.white,
                        errorCorrectionLevel: QrErrorCorrectLevel.M,
                      ),
                    ),
                    const SizedBox(height: 18),
                    Text('Code: ${widget.backupCode}', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: isDark ? Colors.white : Colors.black87)),
                    const SizedBox(height: 8),
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                      decoration: BoxDecoration(
                        color: const Color(0xFF6366F1).withValues(alpha: 0.12),
                        borderRadius: BorderRadius.circular(20),
                      ),
                      child: Text(
                        usesLabel,
                        style: const TextStyle(color: kNgmyAdvisorsHubAccent, fontWeight: FontWeight.w800, fontSize: 12),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            Text(
              'Scan this QR on another phone to restore all advisor conversations. '
              'Each QR works only $kNgmyAdvisorSyncQrMaxUses times total.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 12, height: 1.45, color: isDark ? Colors.white60 : const Color(0xFF64748B)),
            ),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton.icon(
                onPressed: (_saving || _alreadySaved == true) ? null : _saveToHub,
                icon: _saving
                    ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2))
                    : Icon(_alreadySaved == true ? Icons.check_rounded : Icons.bookmark_add_outlined),
                label: Text(
                  _alreadySaved == true
                      ? 'Saved in QR Generator'
                      : 'Save to QR Generator',
                  style: const TextStyle(fontWeight: FontWeight.w800),
                ),
                style: OutlinedButton.styleFrom(
                  foregroundColor: kNgmyAdvisorsHubAccent,
                  side: BorderSide(color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.55)),
                  minimumSize: const Size(double.infinity, 48),
                ),
              ),
            ),
            if (_alreadySaved == true)
              Padding(
                padding: const EdgeInsets.only(top: 6),
                child: Text(
                  'Labeled “NGMY Advisors” in Hub → QR Code Generator → Saved. Delete it there to save a new one.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 11, height: 1.35, color: isDark ? Colors.white54 : const Color(0xFF64748B)),
                ),
              ),
            const SizedBox(height: 10),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => Navigator.pop(context),
                style: FilledButton.styleFrom(
                  backgroundColor: kNgmyAdvisorsHubAccent,
                  minimumSize: const Size(double.infinity, 48),
                ),
                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _NgmyAdvisorSyncScanPage extends StatefulWidget {
  const _NgmyAdvisorSyncScanPage();

  @override
  State<_NgmyAdvisorSyncScanPage> createState() => _NgmyAdvisorSyncScanPageState();
}

class _NgmyAdvisorSyncScanPageState extends State<_NgmyAdvisorSyncScanPage> {
  final MobileScannerController _camera = MobileScannerController(
    detectionSpeed: DetectionSpeed.normal,
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
      if (raw.startsWith(kNgmyAdvisorSyncQrPrefixV2) || raw.startsWith(kNgmyAdvisorSyncQrPrefix)) {
        _handled = true;
        Navigator.pop(context, raw);
        return;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('Scan restore QR'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          MobileScanner(controller: _camera, onDetect: _onDetect),
          Positioned(
            left: 24,
            right: 24,
            bottom: 36,
            child: Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: Colors.black.withValues(alpha: 0.72),
                borderRadius: BorderRadius.circular(14),
              ),
              child: const Text(
                'Point at the NGMY Advisors restore QR code.',
                textAlign: TextAlign.center,
                style: TextStyle(color: Colors.white, fontSize: 13, fontWeight: FontWeight.w600),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
