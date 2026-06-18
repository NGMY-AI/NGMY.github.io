import 'dart:async';
import 'dart:ui' as ui;

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:video_player/video_player.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_playback.dart';
import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_doc_share_qr_widget.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_sync.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_studio_hub.dart';
import 'ngmy_studio_slot_video_io.dart' if (dart.library.html) 'ngmy_studio_slot_video_stub.dart' as studio_video;

class NgmyDocSharePage extends StatefulWidget {
  const NgmyDocSharePage({super.key, required this.email});

  final String email;

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

  Future<void> _uploadFiles() async {
    await _withWork(() async {
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
        } else {
          skipped++;
        }
      }
      await _refresh();
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
      _toast('On web, select multiple files at once. Folder pick works in the phone app.');
      return;
    }
    await _withWork(() async {
      final path = await FilePicker.platform.getDirectoryPath();
      if (path == null || path.isEmpty) return;
      final count = await NgmyDocShareStore.addFromDirectory(email: widget.email, dirPath: path);
      await _refresh();
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
    final choice = await showModalBottomSheet<String>(
      context: context,
      backgroundColor: const Color(0xFF0F1419),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Icons.upload_file_rounded, color: Colors.white),
              title: const Text('Upload files', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
              subtitle: Text('Photos, videos, documents', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
              onTap: () => Navigator.pop(ctx, 'files'),
            ),
            ListTile(
              leading: const Icon(Icons.folder_open_rounded, color: Colors.white),
              title: const Text('Upload folder', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700)),
              subtitle: Text('Entire folder of pictures or videos', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
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
      final imported = await NgmyDocShareSync.importFromScan(recipientEmail: widget.email, raw: text);
      if (imported == null || imported.isEmpty) {
        _toast('Could not import — use a Doc Share file or scan a QR code.');
        return;
      }
      await _refresh();
      _toast('Imported ${imported.length} file(s).');
    }, label: 'Importing…');
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
      final created = await NgmyDocShareSync.createQrForItems(ownerEmail: widget.email, items: batch);
      if (!mounted) return;
      if (created == null) {
        _toast('Turn on Wi‑Fi and try again. Both phones must be on the same network.');
        return;
      }
      await showModalBottomSheet<void>(
        context: context,
        isScrollControlled: true,
        backgroundColor: Colors.transparent,
        isDismissible: created.mode != NgmyDocShareQrMode.lanDirect,
        builder: (ctx) => _DocShareQrSheet(
          payload: created.qrPayload,
          fileCount: created.fileCount,
          mode: created.mode,
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

  Future<void> _scanQr() async {
    if (!barcode_platform.ngmyBarcodeUseCamera) {
      _toast('Use Import on web, or open on your phone to scan QR codes.');
      return;
    }
    final raw = await Navigator.of(context).push<String>(
      MaterialPageRoute(builder: (_) => const _DocShareScanPage()),
    );
    if (raw == null || raw.isEmpty) return;

    if ((raw.startsWith('NGMYDOCSYNC3|') || raw.startsWith('NGMYDOCSYNC3|z|')) && kIsWeb) {
      await _withWork(() async {
        final session = await NgmyDocShareSync.beginWebRtcReceive(
          raw: raw,
          recipientEmail: widget.email,
          onProgress: (r, t) {
            if (mounted) setState(() => _status = 'Receiving $r of $t…');
          },
        );
        if (!mounted || session == null) {
          _toast('Could not start receive. Try again.');
          return;
        }
        await showDialog<void>(
          context: context,
          barrierDismissible: false,
          builder: (ctx) => _DocShareAnswerQrDialog(answerPayload: session.answerQr),
        );
        final imported = await session.transfer;
        if (!mounted) return;
        if (imported.isEmpty) {
          _toast('Transfer incomplete. Ask sender to scan your answer QR.');
          return;
        }
        await _refresh();
        _toast('Restored ${imported.length} file(s) to this phone.');
      }, label: 'Connecting…');
      return;
    }

    await _withWork(() async {
      final imported = await NgmyDocShareSync.importFromScan(
        recipientEmail: widget.email,
        raw: raw,
        onProgress: (r, t) {
          if (mounted) setState(() => _status = 'Receiving $r of $t…');
        },
      );
      if (imported == null || imported.isEmpty) {
        _toast('Could not receive. Same Wi‑Fi as sender — keep their QR screen open.');
        return;
      }
      await _refresh();
      _toast('Restored ${imported.length} file(s) to this phone.');
    }, label: 'Receiving…');
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
    const bg = Color(0xFF06080F);
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: Colors.white,
        title: const Text('Doc Share', style: TextStyle(fontWeight: FontWeight.w900)),
        leading: IconButton(icon: const Icon(Icons.arrow_back_ios_new_rounded), onPressed: () => Navigator.pop(context)),
        actions: [
          if (_items.isNotEmpty)
            IconButton(
              tooltip: 'Select all',
              onPressed: _working ? null : _selectAll,
              icon: Icon(_selected.length == _items.length ? Icons.deselect_rounded : Icons.select_all_rounded),
            ),
          IconButton(tooltip: 'Scan QR', onPressed: _working ? null : _scanQr, icon: const Icon(Icons.qr_code_scanner_rounded)),
          IconButton(tooltip: 'Import file', onPressed: _working ? null : _importBackupFile, icon: const Icon(Icons.upload_file_rounded)),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _working ? null : _pickUpload,
        backgroundColor: kNgmyStudioHubAccent2,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Add', style: TextStyle(fontWeight: FontWeight.w800)),
      ),
      body: Column(
        children: [
          if (_status != null)
            const LinearProgressIndicator(
              minHeight: 3,
              backgroundColor: Colors.white10,
              color: kNgmyStudioHubAccent,
            ),
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 0),
            child: Container(
              width: double.infinity,
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: const Color(0xFF0F1419),
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: kNgmyStudioHubAccent2.withValues(alpha: 0.3)),
              ),
              child: Text(
                'Share anything via QR — videos, photos, folders. No cloud. Receiver scans to restore files on their phone.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, height: 1.4),
              ),
            ),
          ),
          if (_items.isNotEmpty)
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 10, 12, 0),
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
                      style: OutlinedButton.styleFrom(foregroundColor: Colors.white70),
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
                        'No files yet.\nTap Upload to add videos, photos, or documents.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.5), height: 1.5),
                      ),
                    ),
                  )
                : ListView.builder(
                    padding: const EdgeInsets.fromLTRB(14, 8, 14, 90),
                    itemCount: _items.length,
                    itemBuilder: (_, i) {
                      final item = _items[i];
                      final checked = _selected.contains(item.id);
                      return Card(
                        color: const Color(0xFF0F1419),
                        margin: const EdgeInsets.only(bottom: 10),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                          side: BorderSide(color: checked ? kNgmyStudioHubAccent : Colors.white10),
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
                            style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                          subtitle: Text(
                            '${item.sizeLabel}${item.isVideo ? ' · Tap to play' : ''}${item.fromSender != null ? ' · from ${item.fromSender}' : ''}',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11),
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
                                icon: const Icon(Icons.more_vert_rounded, color: Colors.white54),
                                onSelected: (v) {
                                  if (v == 'qr') unawaited(_showQrForOne(item));
                                  if (v == 'save') unawaited(_saveItem(item));
                                  if (v == 'delete') unawaited(_deleteItem(item));
                                  if (v == 'play' && item.isVideo) unawaited(_openItem(item));
                                },
                                itemBuilder: (_) => [
                                  const PopupMenuItem(value: 'qr', child: Text('Share via QR')),
                                  if (item.isVideo) const PopupMenuItem(value: 'play', child: Text('Play video')),
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
    const bg = Color(0xFF06080F);
    return Scaffold(
      backgroundColor: bg,
      appBar: AppBar(
        backgroundColor: bg,
        foregroundColor: Colors.white,
        title: Text(widget.item.name, style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
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
                    child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70)),
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

class _DocShareQrSheet extends StatefulWidget {
  const _DocShareQrSheet({
    required this.payload,
    required this.fileCount,
    required this.mode,
  });

  final String payload;
  final int fileCount;
  final NgmyDocShareQrMode mode;

  @override
  State<_DocShareQrSheet> createState() => _DocShareQrSheetState();
}

class _DocShareQrSheetState extends State<_DocShareQrSheet> {
  String get _modeLabel {
    switch (widget.mode) {
      case NgmyDocShareQrMode.inlineInstant:
        return 'Instant restore';
      case NgmyDocShareQrMode.lanDirect:
        return 'Direct transfer — any size';
      case NgmyDocShareQrMode.webrtcLink:
        return 'QR link — any size';
    }
  }

  String get _hint {
    switch (widget.mode) {
      case NgmyDocShareQrMode.inlineInstant:
        return 'Receiver scans once — files restore instantly on their phone.';
      case NgmyDocShareQrMode.lanDirect:
        return 'Keep this open. Receiver scans on same Wi‑Fi — videos & folders copy straight to their phone.';
      case NgmyDocShareQrMode.webrtcLink:
        return 'Receiver scans this QR, then shows a short answer QR — tap Scan answer below when they do.';
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

  Future<void> _copy(BuildContext context) async {
    await Clipboard.setData(ClipboardData(text: widget.payload));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Code copied')));
    }
  }

  Future<void> _savePng(BuildContext context) async {
    try {
      final side = NgmyDocShareQrPayload.qrSizeForData(widget.payload);
      final image = await NgmyDocShareQrWidget.renderQrImage(widget.payload, size: side);
      if (image == null) return;
      final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
      if (bytes == null) return;
      final msg = await downloadNgmyQrImage(bytes.buffer.asUint8List(), 'ngmy_doc_share_qr.png');
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
      }
    } catch (e) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Could not save QR: $e')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.paddingOf(context).bottom;
    return Container(
      margin: const EdgeInsets.fromLTRB(12, 0, 12, 12),
      decoration: BoxDecoration(
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Color(0xFF1E1035), Color(0xFF0F1419)],
        ),
        borderRadius: BorderRadius.circular(28),
        border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.4)),
        boxShadow: [
          BoxShadow(
            color: kNgmyStudioHubAccent.withValues(alpha: 0.25),
            blurRadius: 24,
            offset: const Offset(0, -4),
          ),
        ],
      ),
      child: Padding(
        padding: EdgeInsets.fromLTRB(22, 22, 22, 18 + bottom),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(
                color: Colors.white24,
                borderRadius: BorderRadius.circular(4),
              ),
            ),
            const SizedBox(height: 18),
            Row(
              children: [
                Container(
                  padding: const EdgeInsets.all(10),
                  decoration: BoxDecoration(
                    gradient: const LinearGradient(colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2]),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: const Icon(Icons.qr_code_2_rounded, color: Colors.white, size: 22),
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('Share via QR', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                      Text(
                        '${widget.fileCount} file(s) · $_modeLabel',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 12),
                      ),
                    ],
                  ),
                ),
              ],
            ),
            const SizedBox(height: 20),
            Center(
              child: NgmyDocShareQrWidget(data: widget.payload, large: true),
            ),
            const SizedBox(height: 10),
            Text(
              _hint,
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 12, height: 1.45),
            ),
            Text(
              'Hold steady · fill the frame · good light helps scanning',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11),
            ),
            if (widget.mode == NgmyDocShareQrMode.lanDirect) ...[
              const SizedBox(height: 10),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
                decoration: BoxDecoration(
                  color: kNgmyStudioHubAccent2.withValues(alpha: 0.15),
                  borderRadius: BorderRadius.circular(12),
                  border: Border.all(color: kNgmyStudioHubAccent2.withValues(alpha: 0.35)),
                ),
                child: Row(
                  children: [
                    Icon(Icons.wifi_rounded, size: 18, color: kNgmyStudioHubAccent2.withValues(alpha: 0.9)),
                    const SizedBox(width: 8),
                    Expanded(
                      child: Text(
                        'Do not close until receiver finishes',
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 11, fontWeight: FontWeight.w700),
                      ),
                    ),
                  ],
                ),
              ),
            ],
            if (widget.mode == NgmyDocShareQrMode.webrtcLink) ...[
              const SizedBox(height: 12),
              FilledButton.icon(
                onPressed: _scanAnswer,
                style: FilledButton.styleFrom(backgroundColor: kNgmyStudioHubAccent),
                icon: const Icon(Icons.qr_code_scanner_rounded, size: 18),
                label: const Text('Scan receiver answer QR'),
              ),
            ],
            const SizedBox(height: 18),
            Row(
              children: [
                Expanded(
                  child: OutlinedButton.icon(
                    onPressed: () => _copy(context),
                    style: OutlinedButton.styleFrom(foregroundColor: Colors.white70),
                    icon: const Icon(Icons.copy_rounded, size: 18),
                    label: const Text('Copy'),
                  ),
                ),
                const SizedBox(width: 10),
                Expanded(
                  child: FilledButton.icon(
                    onPressed: () => _savePng(context),
                    style: FilledButton.styleFrom(backgroundColor: kNgmyStudioHubAccent2),
                    icon: const Icon(Icons.download_rounded, size: 18),
                    label: const Text('Save QR'),
                  ),
                ),
              ],
            ),
            TextButton(
              onPressed: () async {
                await NgmyDocShareSync.stopLanShare();
                if (context.mounted) Navigator.pop(context);
              },
              child: const Text('Done', style: TextStyle(color: Colors.white60)),
            ),
          ],
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
              child: NgmyDocShareQrWidget(data: answerPayload, large: false),
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
    detectionSpeed: DetectionSpeed.noDuplicates,
    facing: CameraFacing.back,
    formats: const [BarcodeFormat.qrCode],
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
    detectionSpeed: DetectionSpeed.noDuplicates,
    facing: CameraFacing.back,
    formats: const [BarcodeFormat.qrCode],
  );
  bool _handled = false;
  bool _torch = false;

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _onDetect(BarcodeCapture capture) {
    if (_handled) return;
    for (final b in capture.barcodes) {
      final raw = b.rawValue?.trim() ?? '';
      if (raw.isEmpty) continue;
      if (raw.contains('NGMYDOCSYNC') ||
          raw.startsWith('http://') ||
          raw.startsWith('https://') ||
          raw.contains(kNgmyDocShareBundleMarker)) {
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
        title: const Text('Scan Doc Share QR'),
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        actions: [
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
              width: 260,
              height: 260,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(24),
                border: Border.all(color: kNgmyStudioHubAccent2, width: 3),
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
                  'Center the NGMY QR in the frame',
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
