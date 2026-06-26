import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'main.dart';
import 'ngmy_account_snapshot.dart';
import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_local_growth_income.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_worksheet_helpers.dart';

/// Backup/restore for the local-only Growth Income copy. [user]/[transactions]
/// are that local copy's current state (not the live database account).
Future<void> showNgmyAccountSnapshotPage(
  BuildContext context, {
  required UserData user,
  required List<AppTransaction> transactions,
}) {
  return NgmyNavigator.push<void>(
    context,
    NgmyAccountSnapshotPage(user: user, transactions: transactions),
    fullscreenDialog: true,
  );
}

class NgmyAccountSnapshotPage extends StatefulWidget {
  const NgmyAccountSnapshotPage({super.key, required this.user, required this.transactions});

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
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Restore this snapshot?'),
        content: Text(
          'This replaces your local growth income data (balance, investment, clock-in, wallet history) '
          'with the saved snapshot from ${snapshot.exportedAt.month}/${snapshot.exportedAt.day}/${snapshot.exportedAt.year}.',
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Restore')),
        ],
      ),
    );
    if (ok != true) return;
    final restoredUser = snapshot.toUserData(widget.user.email);
    await NgmyLocalGrowthIncomeStore.replace(widget.user.email, restoredUser, snapshot.transactions);
    if (!mounted) return;
    _toast('Restored. Go back to see your local growth income updated.');
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
    final card = isDark ? const Color(0xFF151B28) : Colors.white;
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Scaffold(
      backgroundColor: bg,
      body: SafeArea(
        bottom: false,
        child: Stack(
          children: [
            ListView(
              padding: const EdgeInsets.fromLTRB(20, 10, 20, 32),
              children: [
                FloatingTitle(
                  title: 'BACKUP & RESTORE',
                  leading: InkWell(
                    onTap: () => Navigator.pop(context),
                    customBorder: const CircleBorder(),
                    child: Container(
                      width: 40,
                      height: 40,
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        color: WorksheetPalette.green.withValues(alpha: isDark ? 0.22 : 0.12),
                        shape: BoxShape.circle,
                      ),
                      child: Icon(Icons.arrow_back_ios_new_rounded, color: WorksheetPalette.green, size: 16),
                    ),
                  ),
                ),
                const SizedBox(height: 18),
                Container(
                  padding: const EdgeInsets.all(20),
                  decoration: BoxDecoration(
                    color: card,
                    borderRadius: BorderRadius.circular(24),
                    border: isDark ? null : Border.all(color: WorksheetPalette.green.withValues(alpha: 0.12)),
                    boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.08), blurRadius: 18, offset: const Offset(0, 8))],
                  ),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: 52,
                        height: 52,
                        decoration: BoxDecoration(
                          gradient: const LinearGradient(
                            colors: [WorksheetPalette.green, WorksheetPalette.greenDark],
                            begin: Alignment.topLeft,
                            end: Alignment.bottomRight,
                          ),
                          borderRadius: BorderRadius.circular(16),
                          boxShadow: [BoxShadow(color: WorksheetPalette.green.withValues(alpha: 0.35), blurRadius: 14, offset: const Offset(0, 6))],
                        ),
                        child: const Icon(Icons.shield_rounded, color: Colors.white, size: 26),
                      ),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('Your local copy, protected', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 15, color: titleColor)),
                            const SizedBox(height: 6),
                            Text(
                              'Save this device\'s growth income to a file or QR, or restore a saved copy. '
                              'Only affects the local copy behind the wifi icon — never your real account.',
                              style: TextStyle(fontSize: 12, height: 1.45, color: muted, fontWeight: FontWeight.w500),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 26),
                _SectionLabel(label: 'Save a copy', color: titleColor),
                const SizedBox(height: 12),
                _SnapshotActionTile(
                  icon: Icons.download_rounded,
                  label: 'Download snapshot file',
                  subtitle: 'Balance, investment, clock-in & wallet history',
                  card: card,
                  isDark: isDark,
                  onTap: _working ? null : _exportFile,
                ),
                const SizedBox(height: 10),
                _SnapshotActionTile(
                  icon: Icons.qr_code_2_rounded,
                  label: 'Show QR code',
                  subtitle: 'Scan with another device to restore there',
                  card: card,
                  isDark: isDark,
                  accent: true,
                  onTap: _working ? null : _showQr,
                ),
                const SizedBox(height: 26),
                _SectionLabel(label: 'Restore a saved copy', color: titleColor),
                const SizedBox(height: 12),
                _SnapshotActionTile(
                  icon: Icons.upload_file_rounded,
                  label: 'Upload backup file',
                  subtitle: 'Replace local data with a snapshot file',
                  card: card,
                  isDark: isDark,
                  onTap: _working ? null : _importFile,
                ),
                const SizedBox(height: 10),
                _SnapshotActionTile(
                  icon: Icons.qr_code_scanner_rounded,
                  label: 'Scan QR code',
                  subtitle: 'Restore a snapshot from another device',
                  card: card,
                  isDark: isDark,
                  onTap: _working ? null : _scanQr,
                ),
                const SizedBox(height: 20),
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  child: Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Icon(Icons.info_outline_rounded, size: 15, color: muted),
                      const SizedBox(width: 8),
                      Expanded(
                        child: Text(
                          'Restoring replaces your local growth income data on this device. It never touches your '
                          'real, database-backed account.',
                          style: TextStyle(fontSize: 11.5, height: 1.4, color: muted),
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
                  color: card,
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

class _SectionLabel extends StatelessWidget {
  const _SectionLabel({required this.label, required this.color});

  final String label;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(width: 4, height: 14, decoration: BoxDecoration(color: WorksheetPalette.green, borderRadius: BorderRadius.circular(2))),
        const SizedBox(width: 8),
        Text(label, style: TextStyle(fontWeight: FontWeight.w900, fontSize: 13.5, color: color, letterSpacing: 0.2)),
      ],
    );
  }
}

class _SnapshotActionTile extends StatelessWidget {
  const _SnapshotActionTile({
    required this.icon,
    required this.label,
    required this.subtitle,
    required this.card,
    required this.isDark,
    required this.onTap,
    this.accent = false,
  });

  final IconData icon;
  final String label;
  final String subtitle;
  final Color card;
  final bool isDark;
  final VoidCallback? onTap;
  final bool accent;

  static const Color _accent = WorksheetPalette.green;

  @override
  Widget build(BuildContext context) {
    final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
    final muted = isDark ? Colors.white60 : const Color(0xFF64748B);

    return Material(
      color: card,
      borderRadius: BorderRadius.circular(18),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: isDark ? 0.26 : 0.07), blurRadius: 14, offset: const Offset(0, 6))],
          ),
          child: Row(
            children: [
              Container(
                width: 46,
                height: 46,
                decoration: BoxDecoration(
                  gradient: accent
                      ? const LinearGradient(colors: [WorksheetPalette.green, WorksheetPalette.greenDark], begin: Alignment.topLeft, end: Alignment.bottomRight)
                      : null,
                  color: accent ? null : _accent.withValues(alpha: isDark ? 0.16 : 0.1),
                  borderRadius: BorderRadius.circular(14),
                  boxShadow: accent ? [BoxShadow(color: _accent.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 4))] : null,
                ),
                child: Icon(icon, color: accent ? Colors.white : _accent, size: 22),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(label, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 14.5, color: titleColor)),
                    const SizedBox(height: 2),
                    Text(subtitle, style: TextStyle(fontSize: 11.5, color: muted, height: 1.3)),
                  ],
                ),
              ),
              Container(
                width: 30,
                height: 30,
                decoration: BoxDecoration(color: muted.withValues(alpha: 0.12), shape: BoxShape.circle),
                child: Icon(Icons.chevron_right_rounded, color: muted, size: 18),
              ),
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
                    NgmyBrandedQrWidget(data: qrPayload, large: true),
                    const SizedBox(height: 18),
                    Text(
                      'Scan on another device to restore this local growth income there.',
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
