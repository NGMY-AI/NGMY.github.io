import 'dart:async';

import 'package:file_picker/file_picker.dart';
import 'package:flutter/material.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import 'package:flutter/scheduler.dart';

import 'ngmy_backup_file_picker_stub.dart' if (dart.library.html) 'ngmy_backup_file_picker_web.dart';
import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_family_tree_sync.dart';
import 'ngmy_nav.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_sync_qr_saved.dart';
import 'ngmy_worksheet_helpers.dart';
import 'ngmy_worksheets_storage.dart';

Future<void> showNgmyFamilyTreeSyncPage(
  BuildContext context, {
  required dynamic user,
  required dynamic config,
  required bool isAdmin,
  String? onlyTreeId,
  bool importOnly = false,
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
      importOnly: importOnly,
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
    this.importOnly = false,
    this.onRestored,
  });

  final String email;
  final dynamic config;
  final bool isAdmin;
  final String? onlyTreeId;
  final bool importOnly;
  final VoidCallback? onRestored;

  @override
  State<NgmyFamilyTreeSyncPage> createState() => _NgmyFamilyTreeSyncPageState();
}

class _NgmyFamilyTreeSyncPageState extends State<NgmyFamilyTreeSyncPage> {
  List<({String id, String name, int count})> _trees = [];
  bool _canExport = false;
  String? _statusMessage;
  bool _working = false;

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    final trees = await NgmyFamilyTreeSyncService.treesSummary(widget.email);
    final local = await loadFamilyTreesLocalOnly(widget.email);
    final canExport = !widget.importOnly &&
        (widget.isAdmin || local.any((t) => familyTreeCanEdit(t, widget.email)));
    if (!mounted) return;
    setState(() {
      _trees = trees;
      _canExport = canExport;
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
        if (result.viewOnly) {
          _toast('Restored ${result.members} members on this phone (view only). Creator cloud data was not duplicated.');
        } else {
          _toast('Restored ${result.members} members across ${result.trees} tree${result.trees == 1 ? '' : 's'}.');
        }
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
    final palette = _FamilyTreePalette.of(isDark);
    final titleColor = palette.title;

    return Scaffold(
      backgroundColor: palette.bg,
      appBar: AppBar(
        backgroundColor: palette.bg,
        elevation: 0,
        scrolledUnderElevation: 0,
        leading: IconButton(
          icon: Icon(Icons.arrow_back_ios_new_rounded, color: titleColor, size: 20),
          onPressed: () => Navigator.pop(context),
        ),
        title: Text(
          widget.importOnly ? 'Restore family tree' : 'Family tree sync',
          style: TextStyle(color: titleColor, fontWeight: FontWeight.w900, fontSize: 17),
        ),
        centerTitle: true,
      ),
      body: Stack(
        children: [
          ListView(
            padding: const EdgeInsets.fromLTRB(20, 8, 20, 120),
            children: [
              _FamilyTreeHeroBanner(
                palette: palette,
                importOnly: widget.importOnly,
                isAdmin: widget.isAdmin,
              ),
              const SizedBox(height: 28),
              _FamilyTreeSectionLabel(palette, 'QR restore'),
              const SizedBox(height: 10),
              Row(
                children: [
                  if (_canExport) ...[
                    Expanded(
                      child: _FamilyTreeActionTile(
                        palette: palette,
                        icon: Icons.qr_code_2_rounded,
                        title: 'Show restore QR',
                        subtitle: widget.isAdmin ? 'Scannable backup' : '2 scans max',
                        iconColor: const Color(0xFF38BDF8),
                        iconBg: const Color(0xFF38BDF8),
                        featured: true,
                        onTap: _working ? null : _showQr,
                      ),
                    ),
                    const SizedBox(width: 10),
                  ],
                  Expanded(
                    child: _FamilyTreeActionTile(
                      palette: palette,
                      icon: Icons.qr_code_scanner_rounded,
                      title: 'Scan QR to restore',
                      subtitle: 'From another phone',
                      iconColor: const Color(0xFFA78BFA),
                      iconBg: const Color(0xFF8B5CF6),
                      featured: !_canExport,
                      onTap: _working ? null : _scanQr,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 20),
              _FamilyTreeSectionLabel(palette, 'Backup files'),
              const SizedBox(height: 10),
              Row(
                children: [
                  if (_canExport) ...[
                    Expanded(
                      child: _FamilyTreeActionTile(
                        palette: palette,
                        icon: Icons.download_rounded,
                        title: 'Download all trees',
                        subtitle: 'Photos & books included',
                        iconColor: WorksheetPalette.teal,
                        iconBg: WorksheetPalette.green,
                        onTap: _working ? null : _exportAll,
                      ),
                    ),
                    const SizedBox(width: 10),
                  ],
                  Expanded(
                    child: _FamilyTreeActionTile(
                      palette: palette,
                      icon: Icons.upload_file_rounded,
                      title: 'Upload backup file',
                      subtitle: widget.importOnly ? 'Restore shared file' : 'From saved file',
                      iconColor: const Color(0xFFFBBF24),
                      iconBg: const Color(0xFFF59E0B),
                      onTap: _working ? null : _importFile,
                    ),
                  ),
                ],
              ),
              if (_canExport && _trees.length > 1 && widget.onlyTreeId == null) ...[
                const SizedBox(height: 28),
                _FamilyTreeSectionLabel(palette, 'One tree'),
                const SizedBox(height: 10),
                ..._trees.map(
                  (t) => Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: _FamilyTreeSingleTreeTile(
                      palette: palette,
                      name: t.name,
                      count: t.count,
                      onTap: _working ? null : () => _exportOne(t.id),
                    ),
                  ),
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
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                  decoration: BoxDecoration(
                    color: palette.card,
                    borderRadius: BorderRadius.circular(18),
                    border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black.withValues(alpha: isDark ? 0.3 : 0.1),
                        blurRadius: 20,
                        offset: const Offset(0, 8),
                      ),
                    ],
                  ),
                  child: Row(
                    children: [
                      const SizedBox(
                        width: 22,
                        height: 22,
                        child: CircularProgressIndicator(strokeWidth: 2.5, color: WorksheetPalette.green),
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

class _FamilyTreePalette {
  const _FamilyTreePalette({
    required this.bg,
    required this.card,
    required this.border,
    required this.title,
    required this.muted,
  });

  final Color bg;
  final Color card;
  final Color border;
  final Color title;
  final Color muted;

  factory _FamilyTreePalette.of(bool isDark) {
    return _FamilyTreePalette(
      bg: isDark ? const Color(0xFF0B1018) : const Color(0xFFF3F4F6),
      card: isDark ? const Color(0xFF1A2433) : const Color(0xFFF8FAFC),
      border: isDark ? const Color(0xFF334155) : const Color(0xFFE5E7EB),
      title: isDark ? const Color(0xFFF8FAFC) : const Color(0xFF111827),
      muted: isDark ? const Color(0xFF94A3B8) : const Color(0xFF6B7280),
    );
  }
}

class _FamilyTreeHeroBanner extends StatelessWidget {
  const _FamilyTreeHeroBanner({
    required this.palette,
    required this.importOnly,
    required this.isAdmin,
  });

  final _FamilyTreePalette palette;
  final bool importOnly;
  final bool isAdmin;

  @override
  Widget build(BuildContext context) {
    final subtitle = importOnly
        ? 'Upload a file or scan a QR from someone who shared their tree. View only until you create your own tree.'
        : isAdmin
            ? 'Photos and family books stay on this device. Admin skips cloud codes.'
            : 'Full trees stay local. QR works 2 times — names & dates sync to cloud only.';

    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(24),
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF059669), Color(0xFF10B981), Color(0xFF14B8A6)],
        ),
        boxShadow: [
          BoxShadow(
            color: WorksheetPalette.green.withValues(alpha: 0.32),
            blurRadius: 28,
            offset: const Offset(0, 14),
          ),
        ],
      ),
      child: Stack(
        children: [
          Positioned(
            right: -20,
            top: -10,
            child: Icon(Icons.sync_alt_rounded, size: 110, color: Colors.white.withValues(alpha: 0.07)),
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
                    border: Border.all(color: Colors.white.withValues(alpha: 0.35), width: 1.5),
                  ),
                  child: const Icon(Icons.park_rounded, color: Colors.white, size: 28),
                ),
                const SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Move your family trees',
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

class _FamilyTreeSectionLabel extends StatelessWidget {
  const _FamilyTreeSectionLabel(this.palette, this.text);

  final _FamilyTreePalette palette;
  final String text;

  @override
  Widget build(BuildContext context) {
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
            color: palette.muted,
            fontSize: 11,
            fontWeight: FontWeight.w800,
            letterSpacing: 0.9,
          ),
        ),
      ],
    );
  }
}

class _FamilyTreeActionTile extends StatelessWidget {
  const _FamilyTreeActionTile({
    required this.palette,
    required this.icon,
    required this.title,
    required this.subtitle,
    required this.iconColor,
    required this.iconBg,
    required this.onTap,
    this.featured = false,
  });

  final _FamilyTreePalette palette;
  final IconData icon;
  final String title;
  final String subtitle;
  final Color iconColor;
  final Color iconBg;
  final VoidCallback? onTap;
  final bool featured;

  @override
  Widget build(BuildContext context) {
    final disabled = onTap == null;
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            color: palette.card,
            border: Border.all(
              color: featured
                  ? const Color(0xFF38BDF8).withValues(alpha: 0.4)
                  : palette.border,
              width: featured ? 1.5 : 1,
            ),
            boxShadow: featured
                ? [
                    BoxShadow(
                      color: const Color(0xFF38BDF8).withValues(alpha: 0.1),
                      blurRadius: 12,
                      offset: const Offset(0, 4),
                    ),
                  ]
                : null,
          ),
          child: Opacity(
            opacity: disabled ? 0.45 : 1,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(14, 14, 12, 14),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(9),
                    decoration: BoxDecoration(
                      color: iconBg.withValues(alpha: 0.14),
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
                      fontSize: 13,
                      color: palette.title,
                      height: 1.2,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    subtitle,
                    style: TextStyle(
                      fontSize: 11,
                      color: palette.muted,
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

class _FamilyTreeSingleTreeTile extends StatelessWidget {
  const _FamilyTreeSingleTreeTile({
    required this.palette,
    required this.name,
    required this.count,
    required this.onTap,
  });

  final _FamilyTreePalette palette;
  final String name;
  final int count;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            color: palette.card,
            border: Border.all(color: palette.border),
          ),
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            child: Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(9),
                  decoration: BoxDecoration(
                    color: WorksheetPalette.green.withValues(alpha: 0.14),
                    borderRadius: BorderRadius.circular(12),
                    border: Border.all(color: WorksheetPalette.green.withValues(alpha: 0.35)),
                  ),
                  child: const Icon(Icons.park_outlined, color: WorksheetPalette.green, size: 20),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(name, style: TextStyle(fontWeight: FontWeight.w800, color: palette.title)),
                      Text('$count members', style: TextStyle(fontSize: 11, color: palette.muted)),
                    ],
                  ),
                ),
                Icon(Icons.download_rounded, color: palette.muted, size: 20),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _NgmyFamilyTreeQrDisplayPage extends StatefulWidget {
  const _NgmyFamilyTreeQrDisplayPage({
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
  State<_NgmyFamilyTreeQrDisplayPage> createState() => _NgmyFamilyTreeQrDisplayPageState();
}

class _NgmyFamilyTreeQrDisplayPageState extends State<_NgmyFamilyTreeQrDisplayPage> {
  bool _saving = false;
  bool? _alreadySaved;

  @override
  void initState() {
    super.initState();
    unawaited(_checkSaved());
  }

  Future<void> _checkSaved() async {
    final saved = await NgmySyncQrSavedStore.hasSaved(widget.email, NgmySyncQrSource.familyTree);
    if (mounted) setState(() => _alreadySaved = saved);
  }

  Future<void> _saveToHub() async {
    if (_saving) return;
    setState(() => _saving = true);
    try {
      final token = NgmySyncQrSavedStore.extractStashToken(widget.qrPayload, NgmySyncQrSource.familyTree);
      if (token == null) throw StateError('Could not read this QR code.');
      await NgmySyncQrSavedStore.save(
        email: widget.email,
        source: NgmySyncQrSource.familyTree,
        qrPayload: widget.qrPayload,
        stashToken: token,
        backupCode: widget.backupCode,
        usesRemaining: widget.usesRemaining,
      );
      if (!mounted) return;
      setState(() => _alreadySaved = true);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Saved to QR Code Generator → Saved (NGMY Family Tree).')),
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
                    const SizedBox(height: 8),
                    NgmyBrandedQrWidget(data: widget.qrPayload, large: true),
                    const SizedBox(height: 18),
                    Text(usesLabel, style: TextStyle(fontWeight: FontWeight.w800, color: WorksheetPalette.green)),
                    const SizedBox(height: 8),
                    Text(
                      'Scan on another phone to restore photos, family book, and all tree details. '
                      'Works only $kNgmyFamilyTreeSyncQrMaxUses times total.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: 13, color: isDark ? Colors.white60 : const Color(0xFF64748B), height: 1.4),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 12),
            Text('Code: ${widget.backupCode}', style: TextStyle(fontWeight: FontWeight.w700, color: isDark ? Colors.white70 : const Color(0xFF475569))),
            const SizedBox(height: 12),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton.icon(
                onPressed: (_saving || _alreadySaved == true) ? null : _saveToHub,
                icon: _saving
                    ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2))
                    : Icon(_alreadySaved == true ? Icons.check_rounded : Icons.bookmark_add_outlined),
                label: Text(
                  _alreadySaved == true ? 'Saved in QR Generator' : 'Save to QR Generator',
                  style: const TextStyle(fontWeight: FontWeight.w800),
                ),
                style: OutlinedButton.styleFrom(
                  foregroundColor: WorksheetPalette.green,
                  side: BorderSide(color: WorksheetPalette.green.withValues(alpha: 0.55)),
                  minimumSize: const Size(double.infinity, 48),
                ),
              ),
            ),
            if (_alreadySaved == true)
              Padding(
                padding: const EdgeInsets.only(top: 6),
                child: Text(
                  'Labeled “NGMY Family Tree” in Hub → QR Code Generator → Saved. Delete it there to save a new one.',
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
                  backgroundColor: WorksheetPalette.green,
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
