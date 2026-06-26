import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'main.dart';
import 'ngmy_account_snapshot.dart';
import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_local_growth_income.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';

/// Backup/restore for the Growth Income copy behind the wifi icon.
/// [user]/[transactions] are that copy's current state (not the live
/// database account); [realEmail] is the signed-in account's real email,
/// used only to locate the right local storage slot.
Future<void> showNgmyAccountSnapshotPage(
  BuildContext context, {
  required String realEmail,
  required UserData user,
  required List<AppTransaction> transactions,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyAccountSnapshotPage(realEmail: realEmail, user: user, transactions: transactions),
    fullscreenDialog: true,
  );
}

class NgmyAccountSnapshotPage extends StatefulWidget {
  const NgmyAccountSnapshotPage({super.key, required this.realEmail, required this.user, required this.transactions});

  final String realEmail;
  final UserData user;
  final List<AppTransaction> transactions;

  @override
  State<NgmyAccountSnapshotPage> createState() => _NgmyAccountSnapshotPageState();
}

class _NgmyAccountSnapshotPageState extends State<NgmyAccountSnapshotPage> {
  static const Color _accent = WorksheetPalette.green;
  bool _working = false;
  String? _statusMessage;

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

  Future<void> _exportFile() async {
    await _withWork(() async {
      final msg = await NgmyAccountSnapshot.exportToFile(widget.user, widget.transactions);
      _toast(msg);
    }, busyLabel: 'Preparing download…');
  }

  Future<void> _showQr() async {
    final snapshot = NgmyAccountSnapshot.fromUser(widget.user, widget.transactions);
    await Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        fullscreenDialog: true,
        builder: (_) => _NgmyAccountSnapshotQrPage(qrPayload: snapshot.toQrPayload()),
      ),
    );
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
    } catch (_) {}
    return ngmyPickBackupJsonViaBrowser();
  }

  Future<void> _confirmRestore(NgmyAccountSnapshot snapshot) async {
    // QR codes don't carry wallet history (kept out so the QR stays scannable —
    // see NgmyAccountSnapshot.toQrPayload). Keep the existing history in that case.
    final keepsHistory = snapshot.transactions.isEmpty;
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Restore this snapshot?'),
        content: Text(
          'This replaces your balance, investment, and clock-in data '
          '${keepsHistory ? '(your wallet history stays as-is)' : 'and wallet history'} '
          'with the saved snapshot from ${snapshot.exportedAt.month}/${snapshot.exportedAt.day}/${snapshot.exportedAt.year}.',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Restore')),
        ],
      ),
    );
    if (ok != true) return;
    final restoredUser = snapshot.toUserData(widget.realEmail);
    final transactions = keepsHistory ? widget.transactions : snapshot.transactions;
    await NgmyLocalGrowthIncomeStore.replace(widget.realEmail, restoredUser, transactions);
    if (!mounted) return;
    _toast('Restored. Go back to see it updated.');
  }

  Future<void> _importFile() async {
    await _withWork(() async {
      final raw = await _pickBackupText();
      if (raw == null || raw.trim().isEmpty) return;
      final snapshot = NgmyAccountSnapshot.parse(raw);
      if (snapshot == null) {
        _toast('Could not read that backup file.');
        return;
      }
      await _confirmRestore(snapshot);
    }, busyLabel: 'Reading file…');
  }

  Future<void> _scanQr() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      _toast('Use a phone camera to scan, or upload the backup file instead.');
      return;
    }
    final raw = await Navigator.of(context).push<String>(
      MaterialPageRoute<String>(
        fullscreenDialog: true,
        builder: (_) => const _NgmyAccountSnapshotScanPage(),
      ),
    );
    if (raw == null || raw.trim().isEmpty) return;
    final snapshot = NgmyAccountSnapshot.parse(raw);
    if (snapshot == null) {
      _toast('Could not read that QR code.');
      return;
    }
    await _confirmRestore(snapshot);
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        bottom: false,
        child: Stack(
          children: [
            ListView(
              padding: const EdgeInsets.fromLTRB(20, 8, 20, 32),
              children: [
                Row(
                  children: [
                    InkWell(
                      onTap: () => Navigator.pop(context),
                      customBorder: const CircleBorder(),
                      child: Container(
                        width: 38,
                        height: 38,
                        alignment: Alignment.center,
                        decoration: BoxDecoration(color: isDark ? Colors.white12 : Colors.black.withValues(alpha: 0.06), shape: BoxShape.circle),
                        child: Icon(Icons.arrow_back_ios_new_rounded, color: titleColor, size: 16),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Text('Backup & Restore', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 28, color: titleColor, letterSpacing: -0.5)),
                const SizedBox(height: 8),
                Text(
                  'Keep a copy of this growth income on your device, or bring one back.',
                  style: TextStyle(fontSize: 13.5, height: 1.4, color: muted, fontWeight: FontWeight.w500),
                ),
                const SizedBox(height: 28),
                Row(
                  children: [
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.file_download_rounded,
                        label: 'Download',
                        colors: const [Color(0xFF22C55E), Color(0xFF15803D)],
                        onTap: _working ? null : _exportFile,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.qr_code_2_rounded,
                        label: 'Show QR',
                        colors: const [Color(0xFF6366F1), Color(0xFF4338CA)],
                        onTap: _working ? null : _showQr,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 14),
                Row(
                  children: [
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.file_upload_rounded,
                        label: 'Upload',
                        colors: const [Color(0xFFF59E0B), Color(0xFFB45309)],
                        onTap: _working ? null : _importFile,
                      ),
                    ),
                    const SizedBox(width: 14),
                    Expanded(
                      child: _SnapshotGridCard(
                        icon: Icons.qr_code_scanner_rounded,
                        label: 'Scan QR',
                        colors: const [Color(0xFF06B6D4), Color(0xFF0E7490)],
                        onTap: _working ? null : _scanQr,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 28),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                  decoration: BoxDecoration(
                    color: isDark ? Colors.white.withValues(alpha: 0.06) : WorksheetPalette.green.withValues(alpha: 0.08),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(Icons.bolt_rounded, size: 18, color: WorksheetPalette.green),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          'Download or scan a QR to save where you are now. Upload or scan one later to bring it back — '
                          'on this device or another. Never touches your real, database-backed account.',
                          style: TextStyle(fontSize: 12, height: 1.45, color: muted, fontWeight: FontWeight.w600),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            if (_working)
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: Material(
                  elevation: 8,
                  color: isDark ? const Color(0xFF151B28) : Colors.white,
                  child: Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                    child: Row(
                      children: [
                        const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: _accent)),
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
      ),
    );
  }
}

class _SnapshotGridCard extends StatelessWidget {
  const _SnapshotGridCard({required this.icon, required this.label, required this.colors, required this.onTap});

  final IconData icon;
  final String label;
  final List<Color> colors;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      borderRadius: BorderRadius.circular(22),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(22),
        child: Container(
          height: 140,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: colors, begin: Alignment.topLeft, end: Alignment.bottomRight),
            borderRadius: BorderRadius.circular(22),
            boxShadow: [BoxShadow(color: colors.last.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 8))],
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.22), shape: BoxShape.circle),
                child: Icon(icon, color: Colors.white, size: 30),
              ),
              const SizedBox(height: 12),
              Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 16)),
            ],
          ),
        ),
      ),
    );
  }
}

class _NgmyAccountSnapshotQrPage extends StatelessWidget {
  const _NgmyAccountSnapshotQrPage({required this.qrPayload});

  final String qrPayload;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB);
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final screenW = MediaQuery.of(context).size.width;
    final qrSize = (screenW - 116).clamp(220.0, 380.0);

    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        elevation: 0,
        title: const Text('Snapshot QR', style: TextStyle(fontWeight: FontWeight.w900)),
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
                    NgmyBrandedQrWidget(
                      data: qrPayload,
                      large: true,
                      sizeOverride: qrSize,
                      errorCorrectionLevel: QrErrorCorrectLevel.M,
                    ),
                    const SizedBox(height: 18),
                    Text(
                      'Scan on another device to restore this growth income there.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B), height: 1.4),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 16),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: () => Navigator.pop(context),
                style: FilledButton.styleFrom(backgroundColor: WorksheetPalette.green, minimumSize: const Size(double.infinity, 48)),
                child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _NgmyAccountSnapshotScanPage extends StatefulWidget {
  const _NgmyAccountSnapshotScanPage();

  @override
  State<_NgmyAccountSnapshotScanPage> createState() => _NgmyAccountSnapshotScanPageState();
}

class _NgmyAccountSnapshotScanPageState extends State<_NgmyAccountSnapshotScanPage> {
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
        title: const Text('Scan snapshot QR', style: TextStyle(fontWeight: FontWeight.w900)),
        centerTitle: true,
      ),
      body: MobileScanner(
        controller: _controller,
        onDetect: (capture) {
          if (_handled) return;
          for (final barcode in capture.barcodes) {
            final raw = barcode.rawValue?.trim();
            if (raw == null || raw.isEmpty) continue;
            if (!raw.startsWith(kNgmySnapshotQrPrefix)) continue;
            _handled = true;
            Navigator.pop(context, raw);
            return;
          }
        },
      ),
    );
  }
}
