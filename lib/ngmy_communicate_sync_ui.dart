import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_communicate.dart' show kNgmyAdvisorsHubAccent, kNgmyAdvisorsHubAccent2, ngmyWarmCommunicateAvatarsFromConfig;
import 'ngmy_communicate_payments.dart';
import 'ngmy_communicate_sync.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
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
        SchedulerBinding.instance.scheduleFrame();
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

  Future<void> _importRaw(String raw, {bool restoreHelper = false, bool helperOnly = false}) async {
    await _withWork(() async {
      try {
        final result = await NgmyCommunicateSyncService.importBundle(
          email: widget.email,
          config: widget.config,
          isAdmin: widget.isAdmin,
          raw: raw,
          restoreHelper: restoreHelper || helperOnly,
          helperOnly: helperOnly,
        );
        if (!mounted) return;
        if (result == null) {
          _toast(helperOnly
              ? 'No NGMY Helper messages found in that backup.'
              : 'No conversations found in that backup.');
          return;
        }
        widget.onRestored?.call();
        await ngmyWarmCommunicateAvatarsFromConfig(widget.config);
        if (mounted) setState(() {});
        String msg;
        if (helperOnly) {
          msg = result.helperMessages > 0
              ? 'Restored ${result.helperMessages} NGMY Helper message${result.helperMessages == 1 ? '' : 's'}.'
              : 'No NGMY Helper messages in that QR.';
        } else {
          msg = 'Restored ${result.messages} messages across ${result.threads} advisor${result.threads == 1 ? '' : 's'}. Profile photos included when available.';
          if (result.helperMessages > 0) {
            msg += ' NGMY Helper chat restored (${result.helperMessages} messages).';
          }
        }
        _toast(msg);
        await _refresh();
      } catch (e) {
        if (!mounted) return;
        _toast(e.toString().replaceFirst('StateError: ', ''));
      }
    }, busyLabel: helperOnly
        ? 'Restoring NGMY Helper…'
        : (restoreHelper ? 'Restoring chats + Helper…' : 'Restoring chats…'));
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
    final result = await Navigator.of(context).push<({String raw, bool restoreHelper, bool helperOnly})>(
      MaterialPageRoute<({String raw, bool restoreHelper, bool helperOnly})>(
        fullscreenDialog: true,
        builder: (_) => const _NgmyAdvisorSyncScanPage(),
      ),
    );
    if (result != null && result.raw.trim().isNotEmpty) {
      await _importRaw(
        result.raw,
        restoreHelper: result.restoreHelper,
        helperOnly: result.helperOnly,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final palette = _SyncPalette.of(isDark);

    final exportActions = <_SyncActionSpec>[
      if (_canExport)
        _SyncActionSpec(
          icon: Icons.cloud_download_rounded,
          label: 'Download all conversations',
          subtitle: 'Save every advisor chat as a file',
          accent: false,
          onTap: _working ? null : _exportAll,
        ),
      _SyncActionSpec(
        icon: Icons.folder_open_rounded,
        label: 'Upload backup file',
        subtitle: 'Restore chats from a saved file',
        accent: false,
        onTap: _working ? null : _importFile,
      ),
      if (_canExport)
        _SyncActionSpec(
          icon: Icons.qr_code_2_rounded,
          label: 'Show restore QR',
          subtitle: widget.isAdmin ? 'Share a scannable backup' : 'Works 2 times — any phone can scan',
          accent: true,
          onTap: _working ? null : _showQr,
        ),
      _SyncActionSpec(
        icon: Icons.qr_code_scanner_rounded,
        label: 'Scan QR to restore',
        subtitle: 'Import from another device — toggle Helper at bottom or Helper only at top',
        accent: !_canExport,
        onTap: _working ? null : _scanQr,
      ),
    ];

    return Scaffold(
      backgroundColor: palette.bg,
      appBar: AppBar(
        backgroundColor: palette.bg,
        elevation: 0,
        scrolledUnderElevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded, color: palette.title, size: 20),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          'Conversation sync',
          style: TextStyle(color: palette.title, fontWeight: FontWeight.w900, fontSize: 17),
        ),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          ListView(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 120),
            children: [
              _SyncHeroBanner(
                palette: palette,
                isAdmin: widget.isAdmin,
                canExport: _canExport,
              ),
              const SizedBox(height: 28),
              _SyncSectionHeader(
                title: 'Actions',
                subtitle: 'Move, restore, or share your advisor chats',
                palette: palette,
              ),
              const SizedBox(height: 14),
              _SyncActionGroup(
                palette: palette,
                actions: exportActions,
              ),
              if (_canExport && _threads.isNotEmpty) ...[
                const SizedBox(height: 28),
                _SyncSectionHeader(
                  title: 'One advisor',
                  subtitle: 'Download a single conversation thread',
                  palette: palette,
                ),
                const SizedBox(height: 14),
                _SyncAdvisorGroup(
                  palette: palette,
                  threads: _threads,
                  working: _working,
                  onExport: _exportOne,
                ),
              ],
            ],
          ),
          if (_working)
            Positioned(
              left: 20,
              right: 20,
              bottom: 24,
              child: SafeArea(
                top: false,
                child: _SyncWorkingPill(
                  palette: palette,
                  message: _statusMessage ?? 'Working…',
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _SyncActionSpec {
  const _SyncActionSpec({
    required this.icon,
    required this.label,
    required this.subtitle,
    required this.onTap,
    this.accent = false,
  });

  final IconData icon;
  final String label;
  final String subtitle;
  final VoidCallback? onTap;
  final bool accent;
}

class _SyncPalette {
  const _SyncPalette({
    required this.bg,
    required this.card,
    required this.cardElevated,
    required this.border,
    required this.title,
    required this.muted,
    required this.softFill,
  });

  final Color bg;
  final Color card;
  final Color cardElevated;
  final Color border;
  final Color title;
  final Color muted;
  final Color softFill;

  factory _SyncPalette.of(bool isDark) {
    return _SyncPalette(
      bg: isDark ? const Color(0xFF070A12) : const Color(0xFFF8FAFC),
      card: isDark ? const Color(0xFF121826) : Colors.white,
      cardElevated: isDark ? const Color(0xFF171F31) : const Color(0xFFFFFFFF),
      border: isDark ? Colors.white.withValues(alpha: 0.08) : const Color(0xFFE2E8F0),
      title: isDark ? Colors.white : const Color(0xFF0F172A),
      muted: isDark ? Colors.white.withValues(alpha: 0.58) : const Color(0xFF64748B),
      softFill: isDark ? Colors.white.withValues(alpha: 0.04) : const Color(0xFFF1F5F9),
    );
  }
}

class _SyncHeroBanner extends StatelessWidget {
  const _SyncHeroBanner({
    required this.palette,
    required this.isAdmin,
    required this.canExport,
  });

  final _SyncPalette palette;
  final bool isAdmin;
  final bool canExport;

  @override
  Widget build(BuildContext context) {
    final subtitle = isAdmin
        ? 'Backups stay on this device. Admin skips cloud codes.'
        : canExport
            ? 'Messages stay local. QR works 2 times while your pass is active.'
            : 'Scan a QR or upload a file to receive conversations — no pass needed to import.';

    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: const LinearGradient(
          colors: [kNgmyAdvisorsHubAccent, kNgmyAdvisorsHubAccent2],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        boxShadow: [
          BoxShadow(
            color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.28),
            blurRadius: 28,
            offset: const Offset(0, 14),
          ),
        ],
      ),
      child: Stack(
        children: [
          Positioned(
            right: -18,
            top: -18,
            child: Container(
              width: 120,
              height: 120,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white.withValues(alpha: 0.08),
              ),
            ),
          ),
          Positioned(
            left: -24,
            bottom: -30,
            child: Container(
              width: 96,
              height: 96,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: Colors.white.withValues(alpha: 0.06),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    color: Colors.white.withValues(alpha: 0.16),
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: Colors.white.withValues(alpha: 0.22)),
                  ),
                  child: const Icon(Icons.sync_rounded, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Move your advisor chats',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w900,
                          fontSize: 17,
                          height: 1.2,
                        ),
                      ),
                      const SizedBox(height: 8),
                      Text(
                        subtitle,
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.9),
                          fontSize: 13,
                          height: 1.45,
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
    );
  }
}

class _SyncSectionHeader extends StatelessWidget {
  const _SyncSectionHeader({
    required this.title,
    required this.subtitle,
    required this.palette,
  });

  final String title;
  final String subtitle;
  final _SyncPalette palette;

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: TextStyle(fontWeight: FontWeight.w900, fontSize: 16, color: palette.title),
        ),
        const SizedBox(height: 4),
        Text(
          subtitle,
          style: TextStyle(fontSize: 12, height: 1.35, color: palette.muted),
        ),
      ],
    );
  }
}

class _SyncActionGroup extends StatelessWidget {
  const _SyncActionGroup({
    required this.palette,
    required this.actions,
  });

  final _SyncPalette palette;
  final List<_SyncActionSpec> actions;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: palette.card,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: palette.border),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: Theme.of(context).brightness == Brightness.dark ? 0.22 : 0.05),
            blurRadius: 24,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: Column(
          children: [
            for (var i = 0; i < actions.length; i++) ...[
              _SyncActionTile(
                palette: palette,
                icon: actions[i].icon,
                label: actions[i].label,
                subtitle: actions[i].subtitle,
                accent: actions[i].accent,
                onTap: actions[i].onTap,
              ),
              if (i < actions.length - 1)
                Divider(height: 1, thickness: 1, color: palette.border),
            ],
          ],
        ),
      ),
    );
  }
}

class _SyncActionTile extends StatelessWidget {
  const _SyncActionTile({
    required this.palette,
    required this.icon,
    required this.label,
    required this.subtitle,
    required this.onTap,
    this.accent = false,
  });

  final _SyncPalette palette;
  final IconData icon;
  final String label;
  final String subtitle;
  final VoidCallback? onTap;
  final bool accent;

  @override
  Widget build(BuildContext context) {
    final disabled = onTap == null;
    final iconGradient = accent
        ? const LinearGradient(
            colors: [kNgmyAdvisorsHubAccent, kNgmyAdvisorsHubAccent2],
            begin: Alignment.topLeft,
            end: Alignment.bottomRight,
          )
        : null;

    return Material(
      color: accent ? kNgmyAdvisorsHubAccent.withValues(alpha: 0.05) : Colors.transparent,
      child: InkWell(
        onTap: onTap,
        child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 14, 14, 14),
            child: Row(
              children: [
                Container(
                  width: 46,
                  height: 46,
                  decoration: BoxDecoration(
                    gradient: iconGradient,
                    color: iconGradient == null ? palette.softFill : null,
                    borderRadius: BorderRadius.circular(14),
                    border: accent
                        ? null
                        : Border.all(color: palette.border),
                  ),
                  child: Icon(
                    icon,
                    color: disabled
                        ? palette.muted
                        : (accent ? Colors.white : kNgmyAdvisorsHubAccent),
                    size: 22,
                  ),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        label,
                        style: TextStyle(
                          fontWeight: FontWeight.w800,
                          fontSize: 15,
                          color: disabled ? palette.muted : palette.title,
                          height: 1.2,
                        ),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        subtitle,
                        style: TextStyle(fontSize: 12, height: 1.35, color: palette.muted),
                      ),
                    ],
                  ),
                ),
                const SizedBox(width: 8),
                Container(
                  width: 32,
                  height: 32,
                  decoration: BoxDecoration(
                    color: accent
                        ? kNgmyAdvisorsHubAccent.withValues(alpha: 0.12)
                        : palette.softFill,
                    shape: BoxShape.circle,
                  ),
                  child: Icon(
                    Icons.arrow_forward_ios_rounded,
                    size: 14,
                    color: accent ? kNgmyAdvisorsHubAccent : palette.muted,
                  ),
                ),
              ],
            ),
          ),
      ),
    );
  }
}

class _SyncAdvisorGroup extends StatelessWidget {
  const _SyncAdvisorGroup({
    required this.palette,
    required this.threads,
    required this.working,
    required this.onExport,
  });

  final _SyncPalette palette;
  final List<({String id, String name, int count})> threads;
  final bool working;
  final Future<void> Function(String profileId) onExport;

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: palette.card,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: palette.border),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: Theme.of(context).brightness == Brightness.dark ? 0.22 : 0.05),
            blurRadius: 24,
            offset: const Offset(0, 10),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(22),
        child: Column(
          children: [
            for (var i = 0; i < threads.length; i++) ...[
              _SyncAdvisorTile(
                palette: palette,
                name: threads[i].name,
                count: threads[i].count,
                onTap: working ? null : () => onExport(threads[i].id),
              ),
              if (i < threads.length - 1)
                Divider(height: 1, thickness: 1, color: palette.border),
            ],
          ],
        ),
      ),
    );
  }
}

class _SyncAdvisorTile extends StatelessWidget {
  const _SyncAdvisorTile({
    required this.palette,
    required this.name,
    required this.count,
    required this.onTap,
  });

  final _SyncPalette palette;
  final String name;
  final int count;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(16, 14, 14, 14),
          child: Row(
              children: [
                Container(
                  width: 46,
                  height: 46,
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      colors: [
                        kNgmyAdvisorsHubAccent.withValues(alpha: onTap == null ? 0.08 : 0.18),
                        kNgmyAdvisorsHubAccent2.withValues(alpha: onTap == null ? 0.06 : 0.12),
                      ],
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                    ),
                    borderRadius: BorderRadius.circular(14),
                  ),
                  child: Icon(Icons.support_agent_rounded, color: onTap == null ? palette.muted : kNgmyAdvisorsHubAccent, size: 22),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        name,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: onTap == null ? palette.muted : palette.title),
                      ),
                      const SizedBox(height: 4),
                      Text(
                        '$count message${count == 1 ? '' : 's'}',
                        style: TextStyle(fontSize: 12, color: palette.muted),
                      ),
                    ],
                  ),
                ),
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
                  decoration: BoxDecoration(
                    color: palette.softFill,
                    borderRadius: BorderRadius.circular(999),
                    border: Border.all(color: palette.border),
                  ),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.download_rounded, size: 14, color: kNgmyAdvisorsHubAccent),
                      const SizedBox(width: 4),
                      Text(
                        'Save',
                        style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w800,
                          color: kNgmyAdvisorsHubAccent,
                        ),
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
}

class _SyncWorkingPill extends StatelessWidget {
  const _SyncWorkingPill({
    required this.palette,
    required this.message,
  });

  final _SyncPalette palette;
  final String message;

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
      decoration: BoxDecoration(
        color: palette.cardElevated,
        borderRadius: BorderRadius.circular(999),
        border: Border.all(color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.35)),
        boxShadow: [
          BoxShadow(
            color: kNgmyAdvisorsHubAccent.withValues(alpha: 0.16),
            blurRadius: 24,
            offset: const Offset(0, 8),
          ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          const SizedBox(
            width: 20,
            height: 20,
            child: CircularProgressIndicator(strokeWidth: 2.5, color: kNgmyAdvisorsHubAccent),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              message,
              style: TextStyle(fontWeight: FontWeight.w800, color: palette.title, fontSize: 13),
            ),
          ),
        ],
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
                    const SizedBox(height: 8),
                    NgmyBrandedQrWidget(data: widget.qrPayload, large: true),
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
              'NGMY Helper chats are included when available. '
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
  bool _restoreHelper = false;
  bool _helperOnly = false;

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
        Navigator.pop(
          context,
          (
            raw: raw,
            restoreHelper: _helperOnly || _restoreHelper,
            helperOnly: _helperOnly,
          ),
        );
        return;
      }
    }
  }

  Widget _scanModeToggle({
    required String label,
    required bool value,
    required ValueChanged<bool>? onChanged,
    bool compact = false,
  }) {
    return Container(
      padding: EdgeInsets.only(
        left: compact ? 6 : 8,
        right: compact ? 2 : 4,
        top: 4,
        bottom: 4,
      ),
      decoration: BoxDecoration(
        color: value
            ? kNgmyAdvisorsHubAccent.withValues(alpha: 0.22)
            : Colors.white.withValues(alpha: 0.08),
        borderRadius: BorderRadius.circular(10),
        border: Border.all(
          color: value
              ? kNgmyAdvisorsHubAccent.withValues(alpha: 0.75)
              : Colors.white.withValues(alpha: 0.28),
          width: 1.5,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            label,
            style: TextStyle(
              color: value ? Colors.white : Colors.white70,
              fontSize: compact ? 10 : 11,
              fontWeight: FontWeight.w800,
            ),
          ),
          const SizedBox(width: 2),
          SizedBox(
            height: compact ? 24 : 28,
            width: compact ? 42 : 48,
            child: Transform.scale(
              scale: compact ? 0.78 : 0.85,
              child: CupertinoSwitch(
                value: value,
                onChanged: onChanged,
                activeTrackColor: kNgmyAdvisorsHubAccent,
              ),
            ),
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('Scan restore QR'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        leading: IconButton(
          icon: const Icon(Icons.close_rounded),
          onPressed: () => Navigator.pop(context),
        ),
        actions: [
          _scanModeToggle(
            label: 'Helper only',
            value: _helperOnly,
            compact: true,
            onChanged: _handled
                ? null
                : (v) => setState(() {
                      _helperOnly = v;
                      if (v) _restoreHelper = true;
                    }),
          ),
          const SizedBox(width: 8),
        ],
      ),
      body: Stack(
        fit: StackFit.expand,
        children: [
          MobileScanner(controller: _camera, onDetect: _onDetect),
          Positioned(
            left: 16,
            right: 16,
            bottom: 28,
            child: SafeArea(
              top: false,
              child: Container(
                padding: const EdgeInsets.fromLTRB(12, 10, 8, 10),
                decoration: BoxDecoration(
                  color: Colors.black.withValues(alpha: 0.85),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.18)),
                ),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Expanded(
                      child: Text(
                        _helperOnly
                            ? 'Helper-only mode — restores NGMY Helper chat only (no advisor threads).'
                            : 'Point at the NGMY Advisors restore QR code.',
                        style: TextStyle(
                          color: Colors.white.withValues(alpha: 0.95),
                          fontSize: 12,
                          fontWeight: FontWeight.w600,
                          height: 1.3,
                        ),
                      ),
                    ),
                    if (!_helperOnly) ...[
                      const SizedBox(width: 8),
                      _scanModeToggle(
                        label: 'Helper',
                        value: _restoreHelper,
                        onChanged: _handled ? null : (v) => setState(() => _restoreHelper = v),
                      ),
                    ],
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
