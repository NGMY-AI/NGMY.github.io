import 'dart:async';

import 'package:audioplayers/audioplayers.dart';
import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_doc_share_folder.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_gate_ui.dart';
import 'ngmy_doc_share_org_settings.dart';
import 'ngmy_doc_share_payments.dart';
import 'ngmy_doc_share_playback.dart';
import 'ngmy_doc_share_school.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_short_code.dart';
import 'ngmy_doc_share_sync.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_qr_generator.dart';
import 'ngmy_studio_hub.dart';
import 'ngmy_studio_slot_video_io.dart' if (dart.library.html) 'ngmy_studio_slot_video_stub.dart' as studio_video;

({Color bg, Color card, Color fg, Color muted, Color border}) _docShareColors(BuildContext context) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  return (
    bg: isDark ? const Color(0xFF0B0F18) : const Color(0xFFF4F6FB),
    card: isDark ? const Color(0xFF151B28) : Colors.white,
    fg: isDark ? Colors.white : const Color(0xFF0F172A),
    muted: isDark ? Colors.white60 : const Color(0xFF64748B),
    border: isDark ? Colors.white12 : const Color(0xFFE2E8F0),
  );
}

class NgmyDocSharePage extends StatefulWidget {
  const NgmyDocSharePage({
    super.key,
    required this.email,
    this.user,
    this.config,
    this.isAdmin = false,
    this.schoolMode = false,
    this.orgOwnerMode = false,
    this.onCharge,
    this.onDataChanged,
    this.onPersistConfig,
  });

  final String email;
  final dynamic user;
  final dynamic config;
  final bool isAdmin;
  final bool schoolMode;
  final bool orgOwnerMode;
  final Future<bool> Function(double amount, String description)? onCharge;
  final VoidCallback? onDataChanged;
  final Future<bool> Function()? onPersistConfig;

  @override
  State<NgmyDocSharePage> createState() => _NgmyDocSharePageState();
}

class _NgmyDocSharePageState extends State<NgmyDocSharePage> {
  List<NgmyDocShareItem> _items = [];
  bool _working = false;
  String? _status;
  final Set<String> _selected = {};

  @override
  void initState() {
    super.initState();
    unawaited(_refresh());
  }

  Future<void> _refresh() async {
    final items = await NgmyDocShareStore.list(widget.email);
    if (!mounted) return;
    setState(() => _items = items.reversed.toList());
    unawaited(_backfillShareMetadata(_items));
  }

  Future<void> _backfillShareMetadata(List<NgmyDocShareItem> items) async {
    for (final item in items) {
      if ((item.shortCode ?? '').trim().isEmpty) {
        final code = await NgmyDocShareSync.ensureLocalShortCodeForItem(ownerEmail: widget.email, item: item);
        if (!mounted) return;
        setState(() {
          final idx = _items.indexWhere((e) => e.id == item.id);
          if (idx >= 0) _items[idx] = _items[idx].copyWith(shortCode: code);
        });
      }
      if (!item.isVideo && (item.stashToken ?? '').trim().isEmpty) {
        unawaited(NgmyDocShareSync.ensureCloudShareForItem(ownerEmail: widget.email, item: item));
      }
    }
  }

  Future<void> _scheduleCloudShareForItem(NgmyDocShareItem item) async {
    if (item.isVideo) return;
    await NgmyDocShareSync.ensureCloudShareForItem(ownerEmail: widget.email, item: item);
    if (!mounted) return;
    final fresh = await NgmyDocShareStore.list(widget.email);
    NgmyDocShareItem? updated;
    for (final e in fresh) {
      if (e.id == item.id) {
        updated = e;
        break;
      }
    }
    if (updated == null) return;
    final saved = updated;
    setState(() {
      final idx = _items.indexWhere((e) => e.id == item.id);
      if (idx >= 0) _items[idx] = saved;
    });
  }

  Future<void> _copyShortCode(NgmyDocShareItem item) async {
    final code = (item.shortCode ?? '').trim();
    if (code.isEmpty) {
      final assigned = await NgmyDocShareSync.ensureLocalShortCodeForItem(ownerEmail: widget.email, item: item);
      if (!mounted) return;
      setState(() {
        final idx = _items.indexWhere((e) => e.id == item.id);
        if (idx >= 0) _items[idx] = _items[idx].copyWith(shortCode: assigned);
      });
      await Clipboard.setData(ClipboardData(text: assigned));
      _toast('Code $assigned copied');
      return;
    }
    await Clipboard.setData(ClipboardData(text: code.toUpperCase()));
    _toast('Code ${code.toUpperCase()} copied');
  }

  void _toast(String msg) {
    if (!mounted) return;
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  Future<void> _withWork(Future<void> Function() fn, {String? label}) async {
    if (_working) return;
    setState(() {
      _working = true;
      _status = label;
    });
    try {
      await fn();
    } finally {
      if (mounted) {
        setState(() {
          _working = false;
          _status = null;
        });
        SchedulerBinding.instance.scheduleFrame();
      }
    }
  }

  bool get _hasUnlimitedAccess => widget.isAdmin || widget.schoolMode || widget.orgOwnerMode;

  Future<bool> _ensureCanCreate() async {
    if (widget.isAdmin || widget.config == null) return true;
    if (_hasUnlimitedAccess) return true;
    final ok = await NgmyDocSharePayments.ensureIndividualAccess(
      context: context,
      user: widget.user ?? _GuestUser(widget.email),
      config: widget.config!,
      onCharge: widget.onCharge ?? (_, __) async => false,
      onDataChanged: widget.onDataChanged ?? () {},
      onPersistConfig: widget.onPersistConfig ?? () async => false,
    );
    if (!ok && mounted) {
      _toast('Free uploads used up. Choose Team Member or Organization Owner.');
      await ngmyDocShareReturnToRoleGate(context, email: widget.email);
      if (!mounted) return false;
      await openNgmyDocShare(
        context: context,
        user: widget.user ?? _GuestUser(widget.email),
        config: widget.config!,
        onCharge: widget.onCharge ?? (_, __) async => false,
        onDataChanged: widget.onDataChanged ?? () {},
        onPersistConfig: widget.onPersistConfig ?? () async => false,
      );
    }
    return ok;
  }

  Future<void> _openOrgSettings() async {
    final portal = await NgmyDocShareSchool.ownerPortal(widget.email);
    if (!mounted) return;
    if (portal == null) {
      _toast('No organization portal found.');
      return;
    }
    final code = (portal['loginCode'] ?? '').toString();
    final name = (portal['schoolName'] ?? portal['organizationName'] ?? 'Organization').toString();
    await Navigator.of(context).push<void>(
      MaterialPageRoute<void>(
        builder: (_) => NgmyDocShareOrgSettingsPage(
          ownerEmail: widget.email,
          initialLoginCode: code,
          initialOrgName: name,
        ),
      ),
    );
  }

  Future<void> _recordCreationIfNeeded({int count = 1}) async {
    if (_hasUnlimitedAccess) return;
    for (var i = 0; i < count; i++) {
      await NgmyDocSharePayments.recordCreation(widget.email);
    }
  }

  Future<void> _uploadFiles() async {
    await _withWork(() async {
      if (!await _ensureCanCreate()) return;
      final result = await FilePicker.platform.pickFiles(
        allowMultiple: true,
        withData: kIsWeb,
        type: FileType.any,
      );
      if (result == null || result.files.isEmpty) return;
      var added = 0;
      var skipped = 0;
      for (final file in result.files) {
        final item = await NgmyDocShareStore.addFromPlatformFile(email: widget.email, file: file);
        if (item != null) {
          added++;
          unawaited(_scheduleCloudShareForItem(item));
        } else {
          skipped++;
        }
      }
      await _refresh();
      if (added > 0) await _recordCreationIfNeeded(count: added);
      if (added == 0) {
        _toast(skipped > 0 ? 'Could not read selected file(s). Try again.' : 'No files selected.');
      } else if (skipped > 0) {
        _toast('Added $added file(s). $skipped could not be read.');
      } else {
        _toast('Added $added file(s) to your library.');
      }
    }, label: 'Uploading…');
  }

  Future<void> _uploadFolder() async {
    if (kIsWeb) {
      await _withWork(() async {
        if (!await _ensureCanCreate()) return;
        final picked = await pickWebFolderFiles();
        if (picked.isEmpty) {
          _toast('No folder selected.');
          return;
        }
        final count = await NgmyDocShareStore.addWebFolderFiles(email: widget.email, files: picked);
        await _refresh();
        if (count > 0) await _recordCreationIfNeeded(count: count);
        _toast(count == 0 ? 'No files found in that folder.' : 'Added $count file(s) from folder.');
      }, label: 'Reading folder…');
      return;
    }
    await _withWork(() async {
      if (!await _ensureCanCreate()) return;
      final path = await FilePicker.platform.getDirectoryPath();
      if (path == null || path.isEmpty) return;
      final count = await NgmyDocShareStore.addFromDirectory(email: widget.email, dirPath: path);
      await _refresh();
      if (count > 0) await _recordCreationIfNeeded(count: count);
      _toast(count == 0 ? 'No files found in that folder.' : 'Added $count file(s) from folder.');
    }, label: 'Reading folder…');
  }

  void _selectAll() {
    setState(() {
      if (_selected.length == _items.length) {
        _selected.clear();
      } else {
        _selected.addAll(_items.map((e) => e.id));
      }
    });
  }

  Future<void> _pickUpload() async {
    final c = _docShareColors(context);
    final choice = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: c.card,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: Icon(Icons.upload_file_rounded, color: c.fg),
              title: Text('Upload files', style: TextStyle(color: c.fg, fontWeight: FontWeight.w700)),
              subtitle: Text('Photos, videos, documents', style: TextStyle(color: c.muted, fontSize: 12)),
              onTap: () => Navigator.pop(ctx, 'files'),
            ),
            ListTile(
              leading: Icon(Icons.folder_open_rounded, color: c.fg),
              title: Text('Upload folder', style: TextStyle(color: c.fg, fontWeight: FontWeight.w700)),
              subtitle: Text('Entire folder of pictures or videos', style: TextStyle(color: c.muted, fontSize: 12)),
              onTap: () => Navigator.pop(ctx, 'folder'),
            ),
          ],
        ),
      ),
    );
    if (choice == 'files') {
      await _uploadFiles();
    } else if (choice == 'folder') {
      await _uploadFolder();
    }
  }

  @override
  void dispose() {
    unawaited(NgmyDocShareSync.stopLanShare());
    super.dispose();
  }

  Future<void> _importBackupFile() async {
    await _withWork(() async {
      String? text;
      try {
        final result = await FilePicker.platform.pickFiles(
          type: FileType.any,
          withData: true,
        );
        final file = result?.files.first;
        if (file?.bytes != null && file!.bytes!.isNotEmpty) {
          text = String.fromCharCodes(file.bytes!);
        }
      } catch (e) {
        debugPrint('[doc share import] $e');
      }
      if (text == null || text.trim().isEmpty) {
        _toast('Could not read file.');
        return;
      }
      final trimmed = text.trim();
      if (!trimmed.contains(kNgmyDocShareBundleMarker) &&
          !trimmed.startsWith('NGMYDOCSYNC') &&
          !trimmed.startsWith('{')) {
        _toast('That is a regular file. Tap + Add to upload photos, videos, or documents.');
        return;
      }
      final imported = await NgmyDocShareSync.importFromScan(recipientEmail: widget.email, raw: trimmed);
      if (imported == null || imported.isEmpty) {
        _toast('Could not import — use a Doc Share file or scan a QR code.');
        return;
      }
      await _refresh();
      _toast('Imported ${imported.length} file(s).');
    }, label: 'Importing…');
  }

  Future<void> _viewItem(NgmyDocShareItem item) async {
    if (item.isVideo) {
      await Navigator.of(context).push(
        MaterialPageRoute<void>(
          builder: (_) => _DocShareVideoPage(email: widget.email, item: item),
        ),
      );
      return;
    }
    if (item.isImage) {
      await Navigator.of(context).push(
        MaterialPageRoute<void>(
          builder: (_) => _DocShareImagePage(email: widget.email, item: item),
        ),
      );
      return;
    }
    if (_isAudio(item)) {
      await Navigator.of(context).push(
        MaterialPageRoute<void>(
          builder: (_) => _DocShareAudioPage(email: widget.email, item: item),
        ),
      );
      return;
    }
    _toast('Preview not available for this file type. Try Download / save.');
  }

  bool _isAudio(NgmyDocShareItem item) {
    if (item.mime.startsWith('audio/')) return true;
    final dot = item.name.lastIndexOf('.');
    if (dot < 0 || dot >= item.name.length - 1) return false;
    const exts = ['mp3', 'wav', 'm4a', 'aac', 'ogg', 'flac', 'opus', 'wma', 'weba'];
    return exts.contains(item.name.substring(dot + 1).toLowerCase());
  }

  Future<void> _openItem(NgmyDocShareItem item) async {
    if (item.isVideo) {
      await Navigator.of(context).push(
        MaterialPageRoute<void>(
          builder: (_) => _DocShareVideoPage(email: widget.email, item: item),
        ),
      );
      return;
    }
    setState(() {
      if (_selected.contains(item.id)) {
        _selected.remove(item.id);
      } else {
        _selected.add(item.id);
      }
    });
  }

  Future<void> _showQrForItems(List<NgmyDocShareItem> batch) async {
    if (batch.isEmpty) {
      _toast('Nothing selected to share.');
      return;
    }
    await _withWork(() async {
      if (!await _ensureCanCreate()) return;
      final created = await NgmyDocShareSync.createQrForItems(ownerEmail: widget.email, items: batch);
      if (!mounted) return;
      if (created == null) {
        _toast('Could not create share QR. Check your connection and try again.');
        return;
      }
      await _recordCreationIfNeeded();
      await _refresh();
      final shortCodes = batch
          .map((b) {
            final idx = _items.indexWhere((e) => e.id == b.id);
            return (idx >= 0 ? _items[idx].shortCode : b.shortCode) ?? '';
          })
          .map((c) => c.trim().toUpperCase())
          .where((c) => c.isNotEmpty)
          .toList();
      await Navigator.of(context).push<void>(
        MaterialPageRoute<void>(
          fullscreenDialog: true,
          builder: (_) => _DocShareQrDisplayPage(
            payload: created.qrPayload,
            fileCount: created.fileCount,
            mode: created.mode,
            shortCodes: shortCodes,
          ),
        ),
      );
      await NgmyDocShareSync.stopLanShare();
    }, label: 'Preparing QR…');
  }

  Future<void> _showQrForSelection() async {
    final ids = _selected.isEmpty ? _items.map((e) => e.id).toSet() : _selected;
    final batch = _items.where((e) => ids.contains(e.id)).toList();
    if (batch.isEmpty) {
      _toast('Add files first, then share via QR.');
      return;
    }
    await _showQrForItems(batch);
  }

  Future<void> _showQrForOne(NgmyDocShareItem item) => _showQrForItems([item]);

  Future<void> _exportBundle() async {
    final ids = _selected.isEmpty ? _items.map((e) => e.id).toSet() : _selected;
    final batch = _items.where((e) => ids.contains(e.id)).toList();
    if (batch.isEmpty) {
      _toast('Nothing to export.');
      return;
    }
    await _withWork(() async {
      final jsonText = await NgmyDocShareSync.exportBundleFile(ownerEmail: widget.email, items: batch);
      final msg = await downloadNgmyAdvisorSyncJson(jsonText, 'ngmy_doc_share_${DateTime.now().millisecondsSinceEpoch}.ngmydoc');
      _toast(msg);
    }, label: 'Preparing file…');
  }

  Future<String?> _promptEnterShortCode(BuildContext context) async {
    final controller = TextEditingController();
    final result = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Enter share code'),
        content: TextField(
          controller: controller,
          maxLength: 6,
          textCapitalization: TextCapitalization.characters,
          decoration: const InputDecoration(
            labelText: '6-digit code',
            hintText: 'A3K9P2',
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, controller.text.trim()), child: const Text('Receive')),
        ],
      ),
    );
    controller.dispose();
    final code = NgmyDocShareShortCode.normalizeInput(result ?? '');
    if (code == null && (result ?? '').trim().isNotEmpty) {
      _toast('Enter a valid 5–6 character code.');
    }
    return code;
  }

  Future<void> _importScanPayload(String scan) async {
    if (scan.startsWith('NGMYDOCSYNC3|') || scan.startsWith('NGMYDOCSYNC3|z|')) {
      await _withWork(() async {
        final session = await NgmyDocShareSync.beginWebRtcReceive(
          raw: scan,
          recipientEmail: widget.email,
          onProgress: (r, t) {
            if (mounted) setState(() => _status = 'Receiving video $r of $t…');
          },
        );
        if (!mounted || session == null) {
          _toast('Could not connect. Keep sender screen open and try again.');
          return;
        }

        final autoConnect = session.answerQr.contains('|WR');
        if (!autoConnect) {
          await showDialog<void>(
            context: context,
            barrierDismissible: false,
            builder: (ctx) => _DocShareAnswerQrDialog(answerPayload: session.answerQr),
          );
        } else if (mounted) {
          setState(() => _status = 'Receiving video… keep both screens open');
        }

        final imported = await session.transfer.timeout(
          const Duration(hours: 6),
          onTimeout: () => <NgmyDocShareItem>[],
        );
        if (!mounted) return;
        if (imported.isEmpty) {
          _toast('Video transfer incomplete. Sender must keep their QR screen open.');
          return;
        }
        await _refresh();
        _toast('Received ${imported.length} video(s) to this phone.');
      }, label: 'Receiving video…');
      return;
    }

    await _withWork(() async {
      final imported = await NgmyDocShareSync.importFromScan(
        recipientEmail: widget.email,
        raw: scan,
        onProgress: (r, t) {
          if (mounted) setState(() => _status = 'Receiving $r of $t…');
        },
      );
      if (imported == null || imported.isEmpty) {
        String hint;
        if (NgmyDocShareShortCode.looksLikeShortCode(scan)) {
          hint = 'Code not ready yet. Wait a few seconds after upload, then try again.';
        } else if (scan.startsWith('N2|') || scan.contains('http://')) {
          hint = 'File did not arrive. Same Wi‑Fi or hotspot, keep sender screen open, then try again.';
        } else {
          hint = 'Could not restore files. Check connection and try again.';
        }
        _toast(hint);
        return;
      }
      await _refresh();
      final videos = imported.where((e) => e.isVideo).length;
      _toast(videos > 0 ? 'Received $videos video(s).' : 'Restored ${imported.length} file(s).');
    }, label: 'Receiving…');
  }

  Future<void> _scanQr() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      final code = await _promptEnterShortCode(context);
      if (code == null || code.isEmpty) return;
      await _importScanPayload(code);
      return;
    }
    final raw = await Navigator.of(context).push<String>(
      MaterialPageRoute(builder: (_) => const _DocShareScanPage()),
    );
    if (raw == null || raw.isEmpty) return;
    await _importScanPayload(raw.trim());
  }

  Future<void> _saveItem(NgmyDocShareItem item) async {
    await _withWork(() async {
      final msg = await NgmyDocShareStore.saveToDevice(widget.email, item);
      _toast(msg);
    }, label: 'Saving…');
  }

  Future<void> _deleteItem(NgmyDocShareItem item) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Delete file?'),
        content: Text('Remove "${item.name}" from this device?'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Delete')),
        ],
      ),
    );
    if (ok != true) return;
    await NgmyDocShareStore.delete(widget.email, item.id);
    _selected.remove(item.id);
    await _refresh();
  }

  IconData _iconFor(NgmyDocShareItem item) {
    if (item.isVideo) return Icons.videocam_rounded;
    if (item.isImage) return Icons.image_rounded;
    if (item.mime.contains('pdf')) return Icons.picture_as_pdf_rounded;
    return Icons.insert_drive_file_rounded;
  }

  @override
  Widget build(BuildContext context) {
    final c = _docShareColors(context);
    return Scaffold(
      backgroundColor: c.bg,
      appBar: AppBar(
        backgroundColor: c.bg,
        foregroundColor: c.fg,
        elevation: 0,
        title: Text('Doc Share', style: TextStyle(fontWeight: FontWeight.w900, color: c.fg)),
        leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded), onPressed: () => Navigator.pop(context)),
        actions: [
          if (widget.orgOwnerMode)
            IconButton(
              tooltip: 'Organization settings',
              onPressed: _working ? null : _openOrgSettings,
              icon: const Icon(Icons.settings_rounded),
            ),
          if (_items.isNotEmpty)
            IconButton(
              tooltip: 'Select all',
              onPressed: _working ? null : _selectAll,
              icon: Icon(_selected.length == _items.length ? Icons.deselect_rounded : Icons.select_all_rounded),
            ),
          IconButton(tooltip: 'Scan QR', onPressed: _working ? null : _scanQr, icon: const Icon(Icons.qr_code_scanner_rounded)),
          IconButton(tooltip: 'Upload files', onPressed: _working ? null : _pickUpload, icon: const Icon(Icons.add_rounded)),
          PopupMenuButton<String>(
            tooltip: 'More',
            icon: const Icon(Icons.more_vert_rounded),
            onSelected: (v) {
              if (v == 'import') unawaited(_importBackupFile());
            },
            itemBuilder: (_) => [
              const PopupMenuItem(
                value: 'import',
                child: Text('Import backup (.ngmydoc)'),
              ),
            ],
          ),
        ],
      ),
      floatingActionButton: null,
      body: Column(
        children: [
          if (_status != null)
            LinearProgressIndicator(
              minHeight: 3,
              backgroundColor: c.border,
              color: kNgmyStudioHubAccent,
            ),
          if (_items.isNotEmpty)
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 12, 12, 0),
              child: Row(
                children: [
                  Expanded(
                    child: FilledButton.tonalIcon(
                      onPressed: _working ? null : _showQrForSelection,
                      icon: const Icon(Icons.qr_code_2_rounded, size: 18),
                      label: Text(_selected.isEmpty ? 'Share QR' : 'QR (${_selected.length})'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: _working ? null : _exportBundle,
                      icon: const Icon(Icons.ios_share_rounded, size: 18),
                      label: const Text('Export'),
                    ),
                  ),
                ],
              ),
            ),
          Expanded(
            child: _items.isEmpty
                ? Center(
                    child: Padding(
                      padding: const EdgeInsets.all(28),
                      child: Text(
                        'No files yet.\nTap + at the top to add videos, photos, or documents.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: c.muted, height: 1.5),
                      ),
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.fromLTRB(14, 8, 14, 24),
                    itemCount: _items.length,
                    itemBuilder: (_, i) {
                      final item = _items[i];
                      final checked = _selected.contains(item.id);
                      return Card(
                        color: c.card,
                        margin: const EdgeInsets.only(bottom: 10),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                          side: BorderSide(color: checked ? kNgmyStudioHubAccent : c.border),
                        ),
                        child: ListTile(
                          onTap: () => unawaited(_openItem(item)),
                          onLongPress: () => setState(() {
                            if (checked) {
                              _selected.remove(item.id);
                            } else {
                              _selected.add(item.id);
                            }
                          }),
                          leading: Container(
                            width: 44,
                            height: 44,
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                colors: item.isVideo
                                    ? [const Color(0xFF6D28D9), const Color(0xFF9333EA)]
                                    : [kNgmyStudioHubAccent2.withValues(alpha: 0.8), kNgmyStudioHubAccent.withValues(alpha: 0.6)],
                              ),
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Icon(_iconFor(item), color: Colors.white, size: 22),
                          ),
                          title: Text(
                            item.name,
                            style: TextStyle(color: c.fg, fontWeight: FontWeight.w700, fontSize: 14),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                          subtitle: Row(
                            children: [
                              Expanded(
                                child: Text(
                                  '${item.sizeLabel}${(item.shortCode ?? '').trim().isNotEmpty ? ' · Code ${item.shortCode!.trim().toUpperCase()}' : ''}${item.isVideo ? ' · Tap to play' : ''}${item.fromSender != null ? ' · from ${item.fromSender}' : ''}',
                                  style: TextStyle(color: c.muted, fontSize: 11),
                                ),
                              ),
                              if ((item.shortCode ?? '').trim().isNotEmpty)
                                IconButton(
                                  visualDensity: VisualDensity.compact,
                                  padding: EdgeInsets.zero,
                                  constraints: const BoxConstraints(minWidth: 32, minHeight: 32),
                                  tooltip: 'Copy 6-digit code',
                                  icon: Icon(Icons.copy_rounded, size: 16, color: c.muted),
                                  onPressed: () => unawaited(_copyShortCode(item)),
                                ),
                            ],
                          ),
                          trailing: Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              if (!item.isVideo)
                                Checkbox(
                                  value: checked,
                                  activeColor: kNgmyStudioHubAccent,
                                  onChanged: (v) => setState(() {
                                    if (v == true) {
                                      _selected.add(item.id);
                                    } else {
                                      _selected.remove(item.id);
                                    }
                                  }),
                                ),
                              PopupMenuButton<String>(
                                icon: Icon(Icons.more_vert_rounded, color: c.muted),
                                onSelected: (v) {
                                  if (v == 'view') unawaited(_viewItem(item));
                                  if (v == 'qr') unawaited(_showQrForOne(item));
                                  if (v == 'save') unawaited(_saveItem(item));
                                  if (v == 'delete') unawaited(_deleteItem(item));
                                },
                                itemBuilder: (_) => [
                                  const PopupMenuItem(value: 'view', child: Text('View')),
                                  const PopupMenuItem(value: 'qr', child: Text('Share via QR')),
                                  const PopupMenuItem(value: 'save', child: Text('Download / save')),
                                  const PopupMenuItem(value: 'delete', child: Text('Delete')),
                                ],
                              ),
                            ],
                          ),
                          isThreeLine: item.fromSender != null || item.isVideo,
                        ),
                      );
                    },
                  ),
          ),
        ],
      ),
    );
  }
}

class _DocShareImagePage extends StatefulWidget {
  const _DocShareImagePage({required this.email, required this.item});

  final String email;
  final NgmyDocShareItem item;

  @override
  State<_DocShareImagePage> createState() => _DocShareImagePageState();
}

class _DocShareImagePageState extends State<_DocShareImagePage> {
  Uint8List? _bytes;
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    unawaited(_load());
  }

  Future<void> _load() async {
    try {
      final bytes = await NgmyDocShareStore.readBytes(widget.email, widget.item);
      if (!mounted) return;
      if (bytes == null || bytes.isEmpty) {
        setState(() {
          _loading = false;
          _error = 'Could not load image.';
        });
        return;
      }
      setState(() {
        _bytes = bytes;
        _loading = false;
      });
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Could not load image: $e';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _docShareColors(context);
    return Scaffold(
      backgroundColor: c.bg,
      appBar: AppBar(
        backgroundColor: c.bg,
        foregroundColor: c.fg,
        elevation: 0,
        title: Text(widget.item.name, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: c.fg)),
      ),
      body: Center(
        child: _loading
            ? const CircularProgressIndicator(color: kNgmyStudioHubAccent)
            : _error != null
                ? Padding(
                    padding: const EdgeInsets.all(24),
                    child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)),
                  )
                : _bytes != null
                    ? InteractiveViewer(
                        minScale: 0.5,
                        maxScale: 4,
                        child: Image.memory(_bytes!, fit: BoxFit.contain),
                      )
                    : const SizedBox.shrink(),
      ),
    );
  }
}

class _DocShareAudioPage extends StatefulWidget {
  const _DocShareAudioPage({required this.email, required this.item});

  final String email;
  final NgmyDocShareItem item;

  @override
  State<_DocShareAudioPage> createState() => _DocShareAudioPageState();
}

class _DocShareAudioPageState extends State<_DocShareAudioPage> {
  final _player = AudioPlayer();
  bool _loading = true;
  bool _playing = false;
  String? _error;
  Duration _position = Duration.zero;
  Duration _duration = Duration.zero;

  @override
  void initState() {
    super.initState();
    _player.onPlayerStateChanged.listen((state) {
      if (!mounted) return;
      setState(() => _playing = state == PlayerState.playing);
    });
    _player.onDurationChanged.listen((d) {
      if (!mounted) return;
      setState(() => _duration = d);
    });
    _player.onPositionChanged.listen((p) {
      if (!mounted) return;
      setState(() => _position = p);
    });
    unawaited(_load());
  }

  Future<void> _load() async {
    try {
      final bytes = await NgmyDocShareStore.readBytes(widget.email, widget.item);
      if (!mounted) return;
      if (bytes == null || bytes.isEmpty) {
        setState(() {
          _loading = false;
          _error = 'Could not load audio.';
        });
        return;
      }
      await _player.play(BytesSource(bytes, mimeType: widget.item.mime));
      if (!mounted) return;
      setState(() => _loading = false);
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Could not play audio: $e';
      });
    }
  }

  Future<void> _togglePlay() async {
    if (_playing) {
      await _player.pause();
    } else {
      await _player.resume();
    }
  }

  String _fmt(Duration d) {
    final m = d.inMinutes.remainder(60).toString().padLeft(2, '0');
    final s = d.inSeconds.remainder(60).toString().padLeft(2, '0');
    return '$m:$s';
  }

  @override
  void dispose() {
    unawaited(_player.dispose());
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final c = _docShareColors(context);
    final maxMs = _duration.inMilliseconds > 0 ? _duration.inMilliseconds : 1;
    return Scaffold(
      backgroundColor: c.bg,
      appBar: AppBar(
        backgroundColor: c.bg,
        foregroundColor: c.fg,
        elevation: 0,
        title: Text(widget.item.name, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: c.fg)),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(28),
          child: _loading
              ? const CircularProgressIndicator(color: kNgmyStudioHubAccent)
              : _error != null
                  ? Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted))
                  : Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 88,
                          height: 88,
                          decoration: BoxDecoration(
                            gradient: const LinearGradient(
                              colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
                            ),
                            borderRadius: BorderRadius.circular(24),
                          ),
                          child: const Icon(Icons.audiotrack_rounded, color: Colors.white, size: 44),
                        ),
                        const SizedBox(height: 28),
                        Slider(
                          value: _position.inMilliseconds.clamp(0, maxMs).toDouble(),
                          max: maxMs.toDouble(),
                          activeColor: kNgmyStudioHubAccent,
                          onChanged: (v) => _player.seek(Duration(milliseconds: v.round())),
                        ),
                        Text(
                          '${_fmt(_position)} / ${_fmt(_duration)}',
                          style: TextStyle(color: c.muted, fontWeight: FontWeight.w600),
                        ),
                        const SizedBox(height: 20),
                        FilledButton.icon(
                          onPressed: _togglePlay,
                          style: FilledButton.styleFrom(
                            backgroundColor: kNgmyStudioHubAccent,
                            minimumSize: const Size(160, 48),
                          ),
                          icon: Icon(_playing ? Icons.pause_rounded : Icons.play_arrow_rounded),
                          label: Text(_playing ? 'Pause' : 'Play'),
                        ),
                      ],
                    ),
        ),
      ),
    );
  }
}

class _DocShareVideoPage extends StatefulWidget {
  const _DocShareVideoPage({required this.email, required this.item});

  final String email;
  final NgmyDocShareItem item;

  @override
  State<_DocShareVideoPage> createState() => _DocShareVideoPageState();
}

class _DocShareVideoPageState extends State<_DocShareVideoPage> {
  VideoPlayerController? _controller;
  String? _uri;
  bool _loading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    unawaited(_init());
  }

  Future<void> _init() async {
    try {
      final uri = await NgmyDocSharePlayback.videoUri(
        email: widget.email,
        item: widget.item,
        readBytes: () => NgmyDocShareStore.readBytes(widget.email, widget.item),
      );
      if (uri == null || uri.isEmpty) {
        setState(() {
          _loading = false;
          _error = 'Could not load video.';
        });
        return;
      }
      _uri = uri;
      final c = studio_video.createStudioVideoController(uri);
      if (c == null) {
        setState(() {
          _loading = false;
          _error = 'Video playback not supported on this device.';
        });
        return;
      }
      _controller = c;
      c.addListener(_onVideoTick);
      await c.initialize().timeout(const Duration(seconds: 60));
      if (!mounted) return;
      setState(() => _loading = false);
      await c.play();
      c.setLooping(true);
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _loading = false;
        _error = 'Could not play video: $e';
      });
    }
  }

  void _onVideoTick() {
    if (!mounted || _controller == null) return;
    if (_controller!.value.hasError && _error == null) {
      setState(() => _error = 'Video playback error.');
    }
  }

  @override
  void dispose() {
    _controller?.removeListener(_onVideoTick);
    _controller?.dispose();
    NgmyDocSharePlayback.revokeUri(_uri);
    super.dispose();
  }

  Future<void> _download() async {
    final msg = await NgmyDocShareStore.saveToDevice(widget.email, widget.item);
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = _docShareColors(context);
    return Scaffold(
      backgroundColor: c.bg,
      appBar: AppBar(
        backgroundColor: c.bg,
        foregroundColor: c.fg,
        elevation: 0,
        iconTheme: IconThemeData(color: c.fg),
        title: Text(widget.item.name, style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15, color: c.fg)),
        actions: [
          IconButton(
            tooltip: 'Download',
            onPressed: _download,
            icon: const Icon(Icons.download_rounded),
          ),
        ],
      ),
      body: Center(
        child: _loading
            ? const CircularProgressIndicator(color: kNgmyStudioHubAccent)
            : _error != null
                ? Padding(
                    padding: const EdgeInsets.all(24),
                    child: Text(_error!, textAlign: TextAlign.center, style: TextStyle(color: c.muted)),
                  )
                : _controller != null && _controller!.value.isInitialized
                    ? AspectRatio(
                        aspectRatio: _controller!.value.aspectRatio,
                        child: Stack(
                          alignment: Alignment.center,
                          children: [
                            VideoPlayer(_controller!),
                            GestureDetector(
                              onTap: () {
                                setState(() {
                                  if (_controller!.value.isPlaying) {
                                    _controller!.pause();
                                  } else {
                                    _controller!.play();
                                  }
                                });
                              },
                              child: AnimatedOpacity(
                                opacity: _controller!.value.isPlaying ? 0 : 0.85,
                                duration: const Duration(milliseconds: 200),
                                child: Container(
                                  padding: const EdgeInsets.all(16),
                                  decoration: BoxDecoration(
                                    color: Colors.black54,
                                    borderRadius: BorderRadius.circular(50),
                                  ),
                                  child: Icon(
                                    _controller!.value.isPlaying ? Icons.pause_rounded : Icons.play_arrow_rounded,
                                    color: Colors.white,
                                    size: 48,
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      )
                    : const SizedBox.shrink(),
      ),
    );
  }
}

class _DocShareQrDisplayPage extends StatefulWidget {
  const _DocShareQrDisplayPage({
    required this.payload,
    required this.fileCount,
    required this.mode,
    this.shortCodes = const [],
  });

  final String payload;
  final int fileCount;
  final NgmyDocShareQrMode mode;
  final List<String> shortCodes;

  @override
  State<_DocShareQrDisplayPage> createState() => _DocShareQrDisplayPageState();
}

class _DocShareQrDisplayPageState extends State<_DocShareQrDisplayPage> {
  final _qrCaptureKey = GlobalKey();
  Timer? _answerPoll;
  Timer? _uploadPoll;
  bool _webrtcConnected = false;
  bool _videoCloudReady = false;
  double _videoUploadProgress = 0;

  String? get _webrtcOfferToken {
    if (widget.mode != NgmyDocShareQrMode.webrtcLink) return null;
    final p = widget.payload.trim();
    const head = 'NGMYDOCSYNC3|';
    if (!p.startsWith(head)) return null;
    final body = p.substring(head.length).trim();
    if (body.startsWith('WR')) return body;
    return null;
  }

  String? get _videoCloudToken {
    if (widget.mode != NgmyDocShareQrMode.videoCloud) return null;
    final p = widget.payload.trim();
    const head = 'NGMYDOCSYNC4|';
    if (!p.startsWith(head)) return null;
    final body = p.substring(head.length).trim();
    if (body.startsWith('VT')) return body;
    return null;
  }

  @override
  void initState() {
    super.initState();
    final token = _webrtcOfferToken;
    if (token != null) {
      _pollWebRtcAnswer(token);
      _answerPoll = Timer.periodic(const Duration(milliseconds: 800), (_) => _pollWebRtcAnswer(token));
    }
    final videoToken = _videoCloudToken;
    if (videoToken != null) {
      _pollVideoCloudUpload(videoToken);
      _uploadPoll = Timer.periodic(const Duration(seconds: 1), (_) => _pollVideoCloudUpload(videoToken));
    }
  }

  @override
  void dispose() {
    _answerPoll?.cancel();
    _uploadPoll?.cancel();
    super.dispose();
  }

  Future<void> _pollVideoCloudUpload(String token) async {
    if (!mounted) return;
    final ready = await NgmyDocShareSync.isVideoCloudReady(token);
    final progress = await NgmyDocShareSync.videoCloudUploadProgress(token);
    if (!mounted) return;
    setState(() {
      _videoCloudReady = ready;
      _videoUploadProgress = progress ?? (ready ? 1.0 : _videoUploadProgress);
    });
  }

  Future<void> _pollWebRtcAnswer(String offerToken) async {
    if (_webrtcConnected || !mounted) return;
    final answerQr = await NgmyDocShareSync.pollWebRtcAnswer(offerToken);
    if (answerQr == null || !mounted) return;
    await NgmyDocShareSync.applyWebRtcAnswer(answerQr);
    if (!mounted) return;
    setState(() => _webrtcConnected = true);
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Connected — sending files now…')),
    );
  }

  String get _modeLabel {
    switch (widget.mode) {
      case NgmyDocShareQrMode.cloudStash:
        return 'Share QR';
      case NgmyDocShareQrMode.inlineInstant:
        return 'Instant restore';
      case NgmyDocShareQrMode.lanDirect:
        return 'Direct transfer';
      case NgmyDocShareQrMode.webrtcLink:
        return 'Direct link';
      case NgmyDocShareQrMode.videoCloud:
        return 'Video share';
    }
  }

  String get _hint {
    switch (widget.mode) {
      case NgmyDocShareQrMode.cloudStash:
        return 'Receiver scans once — files restore to their Doc Share library.';
      case NgmyDocShareQrMode.inlineInstant:
        return 'Receiver scans once — files restore instantly.';
      case NgmyDocShareQrMode.lanDirect:
        return 'Keep this screen open until the other phone finishes. They scan with Doc Share → Scan QR.';
      case NgmyDocShareQrMode.webrtcLink:
        return 'Receiver scans this QR. Connection completes automatically when they accept.';
      case NgmyDocShareQrMode.videoCloud:
        return _videoCloudReady
            ? 'Video is ready. Receiver scans with Doc Share → Scan QR.'
            : 'Uploading video to cloud… keep this screen open until ready.';
    }
  }

  Future<void> _scanAnswer() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Use the phone app camera to scan the answer QR.')),
        );
      }
      return;
    }
    final raw = await Navigator.of(context).push<String>(
      MaterialPageRoute(builder: (_) => const _DocShareAnswerScanPage()),
    );
    if (raw == null || raw.isEmpty) return;
    await NgmyDocShareSync.applyWebRtcAnswer(raw);
    if (mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Connected — sending files now…')),
      );
    }
  }

  Future<void> _copyShortCodes(BuildContext context) async {
    if (widget.shortCodes.isEmpty) return;
    await Clipboard.setData(ClipboardData(text: widget.shortCodes.join(', ')));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Type-in code${widget.shortCodes.length > 1 ? 's' : ''} copied')),
      );
    }
  }

  Future<void> _copy(BuildContext context) async {
    await Clipboard.setData(ClipboardData(text: widget.payload));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Share code copied')));
    }
  }

  Future<void> _savePng(BuildContext context) async {
    try {
      final bytes = await NgmyBrandedQrWidget.capturePng(_qrCaptureKey, pixelRatio: 4);
      if (bytes == null || bytes.isEmpty) return;
      final msg = await downloadNgmyQrImage(bytes, 'ngmy_doc_share_qr.png');
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not save QR: $e')));
      }
    }
  }

  String? get _lanUrl {
    if (widget.mode != NgmyDocShareQrMode.lanDirect) return null;
    final p = widget.payload.trim();
    if (p.startsWith('N2|')) return p.substring(3).trim();
    if (p.startsWith('http://') || p.startsWith('https://')) return p;
    const legacy = 'NGMYDOCSYNC2|';
    if (p.startsWith(legacy)) return p.substring(legacy.length).trim();
    return null;
  }

  Future<void> _copyLanLink(BuildContext context) async {
    final url = _lanUrl;
    if (url == null) return;
    final text = url.startsWith('http') ? url : 'N2|$url';
    await Clipboard.setData(ClipboardData(text: text));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copied')));
    }
  }

  Future<void> _done() async {
    await NgmyDocShareSync.stopLanShare();
    if (mounted) Navigator.pop(context);
  }

  @override
  Widget build(BuildContext context) {
    final c = _docShareColors(context);
    final shareCode = widget.payload.length > 48 ? '${widget.payload.substring(0, 44)}…' : widget.payload;

    return PopScope(
      canPop: widget.mode != NgmyDocShareQrMode.lanDirect &&
          widget.mode != NgmyDocShareQrMode.webrtcLink &&
          widget.mode != NgmyDocShareQrMode.videoCloud,
      onPopInvokedWithResult: (didPop, _) {
        if (didPop) unawaited(NgmyDocShareSync.stopLanShare());
      },
      child: Scaffold(
        backgroundColor: c.bg,
        appBar: AppBar(
          backgroundColor: c.bg,
          foregroundColor: c.fg,
          elevation: 0,
          title: Text('Share via QR', style: TextStyle(fontWeight: FontWeight.w900, color: c.fg)),
          centerTitle: true,
          leading: widget.mode == NgmyDocShareQrMode.lanDirect ||
                  widget.mode == NgmyDocShareQrMode.webrtcLink ||
                  widget.mode == NgmyDocShareQrMode.videoCloud
              ? null
              : IconButton(
                  icon: const Icon(Icons.close_rounded),
                  onPressed: _done,
                ),
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
                    color: c.card,
                    borderRadius: BorderRadius.circular(24),
                    border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.35)),
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const SizedBox(height: 8),
                      NgmyBrandedQrWidget(data: widget.payload, large: true, captureKey: _qrCaptureKey),
                      const SizedBox(height: 18),
                      Text(
                        '${widget.fileCount} file(s) · $_modeLabel',
                        style: TextStyle(fontWeight: FontWeight.w900, fontSize: 14, color: c.fg),
                      ),
                      if (widget.mode == NgmyDocShareQrMode.lanDirect) ...[
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: kNgmyStudioHubAccent.withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Text(
                            'Keep screen open',
                            style: TextStyle(color: kNgmyStudioHubAccent, fontWeight: FontWeight.w800, fontSize: 12),
                          ),
                        ),
                      ],
                      const SizedBox(height: 16),
                      Text(
                        _hint,
                        textAlign: TextAlign.center,
                        style: TextStyle(color: c.muted, fontSize: 12, height: 1.45),
                      ),
                      if (widget.shortCodes.isNotEmpty) ...[
                        const SizedBox(height: 10),
                        Text(
                          widget.shortCodes.length == 1
                              ? 'Type-in code: ${widget.shortCodes.first}'
                              : 'Type-in codes: ${widget.shortCodes.join(', ')}',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: c.muted, fontSize: 11, fontWeight: FontWeight.w700),
                        ),
                        TextButton.icon(
                          onPressed: () => _copyShortCodes(context),
                          icon: const Icon(Icons.pin_rounded, size: 16),
                          label: const Text('Copy 6-digit code'),
                        ),
                      ],
                      if (widget.mode == NgmyDocShareQrMode.lanDirect && _lanUrl != null) ...[
                        const SizedBox(height: 10),
                        Text(
                          'Code: $shareCode',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: c.muted, fontSize: 11, fontWeight: FontWeight.w600),
                        ),
                        TextButton.icon(
                          onPressed: () => _copyLanLink(context),
                          icon: const Icon(Icons.link_rounded, size: 16),
                          label: const Text('Copy link for Paste'),
                        ),
                      ],
                      if (widget.mode == NgmyDocShareQrMode.videoCloud) ...[
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: (_videoCloudReady ? Colors.green : kNgmyStudioHubAccent).withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Text(
                            _videoCloudReady
                                ? 'Ready to receive'
                                : 'Uploading ${(_videoUploadProgress * 100).clamp(0, 99).toStringAsFixed(0)}%',
                            style: TextStyle(
                              color: _videoCloudReady ? Colors.green.shade700 : kNgmyStudioHubAccent,
                              fontWeight: FontWeight.w800,
                              fontSize: 12,
                            ),
                          ),
                        ),
                      ],
                      if (widget.mode == NgmyDocShareQrMode.webrtcLink) ...[
                        const SizedBox(height: 8),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                          decoration: BoxDecoration(
                            color: (_webrtcConnected ? Colors.green : kNgmyStudioHubAccent).withValues(alpha: 0.12),
                            borderRadius: BorderRadius.circular(20),
                          ),
                          child: Text(
                            _webrtcConnected ? 'Connected — sending…' : 'Keep screen open',
                            style: TextStyle(
                              color: _webrtcConnected ? Colors.green.shade700 : kNgmyStudioHubAccent,
                              fontWeight: FontWeight.w800,
                              fontSize: 12,
                            ),
                          ),
                        ),
                        const SizedBox(height: 12),
                        FilledButton.icon(
                          onPressed: _scanAnswer,
                          style: FilledButton.styleFrom(backgroundColor: kNgmyStudioHubAccent),
                          icon: const Icon(Icons.qr_code_scanner_rounded, size: 18),
                          label: const Text('Scan receiver answer QR'),
                        ),
                      ],
                    ],
                  ),
                ),
              ),
              const SizedBox(height: 12),
              Row(
                children: [
                  Expanded(
                    child: OutlinedButton.icon(
                      onPressed: () => _copy(context),
                      icon: const Icon(Icons.copy_rounded, size: 18),
                      label: const Text('Copy code'),
                    ),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: FilledButton.icon(
                      onPressed: () => _savePng(context),
                      style: FilledButton.styleFrom(backgroundColor: kNgmyStudioHubAccent),
                      icon: const Icon(Icons.download_rounded, size: 18),
                      label: const Text('Save QR'),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 8),
              SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: _done,
                  style: FilledButton.styleFrom(
                    backgroundColor: kNgmyStudioHubAccent2,
                    minimumSize: const Size(double.infinity, 48),
                  ),
                  child: const Text('Done', style: TextStyle(fontWeight: FontWeight.w800)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _DocShareAnswerQrDialog extends StatelessWidget {
  const _DocShareAnswerQrDialog({required this.answerPayload});

  final String answerPayload;

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      backgroundColor: const Color(0xFF0F1419),
      title: const Text('Show this to sender', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              'Sender taps "Scan receiver answer QR" and points at this code.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 12, height: 1.4),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
              child: NgmyBrandedQrWidget(data: answerPayload, large: true),
            ),
          ],
        ),
      ),
      actions: [
        FilledButton(
          onPressed: () => Navigator.pop(context),
          child: const Text('Done'),
        ),
      ],
    );
  }
}

class _DocShareAnswerScanPage extends StatefulWidget {
  const _DocShareAnswerScanPage();

  @override
  State<_DocShareAnswerScanPage> createState() => _DocShareAnswerScanPageState();
}

class _DocShareAnswerScanPageState extends State<_DocShareAnswerScanPage> {
  final _controller = MobileScannerController(
    detectionSpeed: DetectionSpeed.normal,
    facing: CameraFacing.back,
  );
  bool _handled = false;

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final b in capture.barcodes) {
      final raw = b.rawValue?.trim() ?? '';
      if (raw.startsWith('NGMYDOCSYNC3A|')) {
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
        title: const Text('Scan answer QR'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
      ),
      body: MobileScanner(controller: _controller, onDetect: _onDetect),
    );
  }
}

class _DocShareScanPage extends StatefulWidget {
  const _DocShareScanPage();

  @override
  State<_DocShareScanPage> createState() => _DocShareScanPageState();
}

class _DocShareScanPageState extends State<_DocShareScanPage> {
  final _controller = MobileScannerController(
    detectionSpeed: DetectionSpeed.normal,
    facing: CameraFacing.back,
  );
  bool _handled = false;
  bool _torch = false;

  bool _isDocSharePayload(String raw) {
    final t = raw.trim();
    if (t.isEmpty) return false;
    return t.startsWith('NGMYDOCSYNC') ||
        t.startsWith('N2|') ||
        t.startsWith('http://') ||
        t.contains(kNgmyDocShareBundleMarker);
  }

  Future<void> _pasteLink() async {
    final clip = await Clipboard.getData(Clipboard.kTextPlain);
    final text = clip?.text?.trim() ?? '';
    if (text.isEmpty) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Copy the share code or Wi‑Fi link from sender first.')),
        );
      }
      return;
    }
    if (mounted) Navigator.pop(context, text);
  }

  Future<void> _enterShortCode() async {
    final controller = TextEditingController();
    final result = await showDialog<String>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: const Text('Enter share code'),
        content: TextField(
          controller: controller,
          maxLength: 6,
          textCapitalization: TextCapitalization.characters,
          decoration: const InputDecoration(
            labelText: '6-digit code',
            hintText: 'A3K9P2',
          ),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancel')),
          FilledButton(onPressed: () => Navigator.pop(ctx, controller.text.trim()), child: const Text('Receive')),
        ],
      ),
    );
    controller.dispose();
    final code = NgmyDocShareShortCode.normalizeInput(result ?? '');
    if (code == null) {
      if (mounted && (result ?? '').trim().isNotEmpty) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Enter a valid 5–6 character code.')),
        );
      }
      return;
    }
    if (mounted) Navigator.pop(context, code);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final b in capture.barcodes) {
      final raw = b.rawValue?.trim() ?? '';
      if (!_isDocSharePayload(raw)) continue;
      _handled = true;
      Navigator.pop(context, raw);
      return;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: const Text('Scan Doc Share QR'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        actions: [
          IconButton(
            icon: const Icon(Icons.pin_rounded),
            tooltip: 'Enter 6-digit code',
            onPressed: _enterShortCode,
          ),
          IconButton(
            icon: const Icon(Icons.content_paste_rounded),
            tooltip: 'Paste Wi‑Fi link',
            onPressed: _pasteLink,
          ),
          IconButton(
            icon: Icon(_torch ? Icons.flash_on_rounded : Icons.flash_off_rounded),
            onPressed: () async {
              await _controller.toggleTorch();
              setState(() => _torch = !_torch);
            },
          ),
        ],
      ),
      body: Stack(
        children: [
          MobileScanner(controller: _controller, onDetect: _onDetect),
          Center(
            child: Container(
              width: 300,
              height: 300,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(20),
                border: Border.all(color: kNgmyStudioHubAccent2, width: 4),
              ),
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 28,
            child: Center(
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 24),
                child: Text(
                  'Fill the frame · bright screen · Paste link or tap # to type code',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700, shadows: [Shadow(blurRadius: 8)]),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _GuestUser {
  const _GuestUser(this.email);
  final String email;
  bool get isAdmin => false;
}
