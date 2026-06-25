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
        title: Text('Backup & restore', style: TextStyle(color: titleColor, fontWeight: FontWeight.w900, fontSize: 17)),
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
                child: const Row(
                  children: [
                    Icon(Icons.shield_outlined, color: Colors.white, size: 28),
                    SizedBox(width: 14),
                    Expanded(
                      child: Text(
                        'Save this local growth income to a file or QR code, or restore a saved copy on this or '
                        'another device. This only affects the local copy behind the wifi icon, not your real account.',
                        style: TextStyle(color: Colors.white, fontSize: 12.5, height: 1.4, fontWeight: FontWeight.w600),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 18),
              Text('Save a copy', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
              const SizedBox(height: 10),
              _SnapshotActionTile(
                icon: Icons.download_rounded,
                label: 'Download snapshot file',
                subtitle: 'Saves balance, investment, clock-in & wallet history to a file',
                card: card,
                border: border,
                onTap: _working ? null : _exportFile,
              ),
              const SizedBox(height: 8),
              _SnapshotActionTile(
                icon: Icons.qr_code_2_rounded,
                label: 'Show QR code',
                subtitle: 'Scan with another device to restore there',
                card: card,
                border: border,
                accent: true,
                onTap: _working ? null : _showQr,
              ),
              const SizedBox(height: 22),
              Text('Restore a saved copy', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: titleColor)),
              const SizedBox(height: 10),
              _SnapshotActionTile(
                icon: Icons.upload_file_rounded,
                label: 'Upload backup file',
                subtitle: 'Replace local data with a snapshot file',
                card: card,
                border: border,
                onTap: _working ? null : _importFile,
              ),
              const SizedBox(height: 8),
              _SnapshotActionTile(
                icon: Icons.qr_code_scanner_rounded,
                label: 'Scan QR code',
                subtitle: 'Replace local data with a snapshot from another device',
                card: card,
                border: border,
                onTap: _working ? null : _scanQr,
              ),
              const SizedBox(height: 18),
              Text(
                'Restoring replaces your local growth income data on this device. It never touches your real, '
                'database-backed account.',
                style: TextStyle(fontSize: 11.5, height: 1.4, color: muted),
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
    );
  }
}

class _SnapshotActionTile extends StatelessWidget {
  const _SnapshotActionTile({
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
                decoration: BoxDecoration(color: iconBg, borderRadius: BorderRadius.circular(12)),
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
