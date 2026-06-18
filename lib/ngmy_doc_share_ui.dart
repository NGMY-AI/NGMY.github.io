import 'dart:async';
import 'dart:ui' as ui;

import 'package:file_picker/file_picker.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:flutter/services.dart';
import 'package:mobile_scanner/mobile_scanner.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_barcode_platform.dart' if (dart.library.html) 'ngmy_barcode_platform_web.dart' as barcode_platform;
import 'ngmy_communicate_sync_download_io.dart' if (dart.library.html) 'ngmy_communicate_sync_download_web.dart';
import 'ngmy_doc_share_models.dart';
import 'ngmy_doc_share_store.dart';
import 'ngmy_doc_share_sync.dart';
import 'ngmy_qr_download.dart';
import 'ngmy_studio_hub.dart';

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
        withData: true,
        type: FileType.any,
      );
      if (result == null || result.files.isEmpty) return;
      var added = 0;
      for (final file in result.files) {
        final item = await NgmyDocShareStore.addFromPlatformFile(email: widget.email, file: file);
        if (item != null) added++;
      }
      await _refresh();
      _toast(added == 0 ? 'Could not add files.' : 'Added $added file(s) to your library.');
    }, label: 'Uploading…');
  }

  Future<void> _importBackupFile() async {
    await _withWork(() async {
      String? text;
      try {
        final result = await FilePicker.platform.pickFiles(
          type: FileType.custom,
          allowedExtensions: const ['json', 'ngmy', 'ngmydoc'],
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
        _toast('No file selected.');
        return;
      }
      final imported = await NgmyDocShareSync.importBundleText(recipientEmail: widget.email, jsonText: text);
      if (imported == null || imported.isEmpty) {
        _toast('Could not import — use a valid NGMY Doc Share file or scan a QR.');
        return;
      }
      await _refresh();
      _toast('Imported ${imported.length} file(s).');
    }, label: 'Importing…');
  }

  Future<void> _showQrForSelection() async {
    final ids = _selected.isEmpty ? _items.map((e) => e.id).toSet() : _selected;
    final batch = _items.where((e) => ids.contains(e.id)).toList();
    if (batch.isEmpty) {
      _toast('Upload files first, then share.');
      return;
    }
    await _withWork(() async {
      final created = await NgmyDocShareSync.createQrForItems(ownerEmail: widget.email, items: batch);
      if (!mounted) return;
      if (created == null) {
        _toast('Could not create QR — check internet connection.');
        return;
      }
      await showDialog<void>(
        context: context,
        builder: (ctx) => _DocShareQrDialog(
          payload: created.qrPayload,
          fileCount: batch.length,
          usesRemaining: created.usesRemaining,
        ),
      );
    }, label: 'Creating QR…');
  }

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
      _toast('Use Import file on web, or open on your phone to scan QR codes.');
      return;
    }
    final token = await Navigator.of(context).push<String>(
      MaterialPageRoute(builder: (_) => const _DocShareScanPage()),
    );
    if (token == null || token.isEmpty) return;
    await _withWork(() async {
      final imported = await NgmyDocShareSync.importFromQrToken(recipientEmail: widget.email, token: token);
      if (imported == null || imported.isEmpty) {
        _toast('QR expired or files unavailable. Ask sender for a new code.');
        return;
      }
      await _refresh();
      _toast('Received ${imported.length} file(s) — saved on this device.');
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
          IconButton(tooltip: 'Scan QR', onPressed: _working ? null : _scanQr, icon: const Icon(Icons.qr_code_scanner_rounded)),
          IconButton(tooltip: 'Import file', onPressed: _working ? null : _importBackupFile, icon: const Icon(Icons.upload_file_rounded)),
        ],
      ),
      floatingActionButton: FloatingActionButton.extended(
        onPressed: _working ? null : _uploadFiles,
        backgroundColor: kNgmyStudioHubAccent2,
        icon: const Icon(Icons.add_rounded),
        label: const Text('Upload', style: TextStyle(fontWeight: FontWeight.w800)),
      ),
      body: Column(
        children: [
          if (_status != null)
            LinearProgressIndicator(
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
                'Files stay on your device. Share a QR so others can receive copies — videos, photos, PDFs, anything your phone can store.',
                style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 12, height: 1.4),
              ),
            ),
          ),
          if (_items.isNotEmpty)
            Padding(
              padding: const EdgeInsets.fromLTRB(12, 10, 12, 0),
              child: Row(
                children: [
                  TextButton.icon(
                    onPressed: _working ? null : _showQrForSelection,
                    icon: const Icon(Icons.qr_code_2_rounded, size: 18),
                    label: Text(_selected.isEmpty ? 'Share QR' : 'Share ${_selected.length} via QR'),
                  ),
                  const SizedBox(width: 8),
                  TextButton.icon(
                    onPressed: _working ? null : _exportBundle,
                    icon: const Icon(Icons.ios_share_rounded, size: 18),
                    label: const Text('Export file'),
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
                          onTap: () => setState(() {
                            if (checked) {
                              _selected.remove(item.id);
                            } else {
                              _selected.add(item.id);
                            }
                          }),
                          leading: Checkbox(
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
                          title: Text(item.name, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14), maxLines: 2, overflow: TextOverflow.ellipsis),
                          subtitle: Text(
                            '${item.sizeLabel}${item.fromSender != null ? ' · from ${item.fromSender}' : ''}',
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 11),
                          ),
                          trailing: PopupMenuButton<String>(
                            icon: const Icon(Icons.more_vert_rounded, color: Colors.white54),
                            onSelected: (v) {
                              if (v == 'save') unawaited(_saveItem(item));
                              if (v == 'delete') unawaited(_deleteItem(item));
                            },
                            itemBuilder: (_) => [
                              const PopupMenuItem(value: 'save', child: Text('Save to device')),
                              const PopupMenuItem(value: 'delete', child: Text('Delete')),
                            ],
                          ),
                          isThreeLine: item.fromSender != null,
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

class _DocShareQrDialog extends StatelessWidget {
  const _DocShareQrDialog({
    required this.payload,
    required this.fileCount,
    required this.usesRemaining,
  });

  final String payload;
  final int fileCount;
  final int usesRemaining;

  Future<void> _copy(BuildContext context) async {
    await Clipboard.setData(ClipboardData(text: payload));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('QR code copied — screenshot to share')));
    }
  }

  Future<void> _savePng(BuildContext context) async {
    try {
      final painter = QrPainter(
        data: payload,
        version: QrVersions.auto,
        eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.square, color: Color(0xFF0F172A)),
        dataModuleStyle: const QrDataModuleStyle(dataModuleShape: QrDataModuleShape.square, color: Color(0xFF0F172A)),
      );
      final image = await painter.toImage(512);
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
    return AlertDialog(
      backgroundColor: const Color(0xFF0F1419),
      title: const Text('Share via QR', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900)),
      content: SingleChildScrollView(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              '$fileCount file(s) · up to $usesRemaining scans',
              style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 12),
            ),
            const SizedBox(height: 14),
            Container(
              padding: const EdgeInsets.all(12),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
              ),
              child: QrImageView(data: payload, size: 220, backgroundColor: Colors.white),
            ),
            const SizedBox(height: 12),
            Text(
              'Other users open NGMY Studio → Doc Share → Scan QR. Screenshot this code to send it.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.65), fontSize: 11, height: 1.4),
            ),
          ],
        ),
      ),
      actions: [
        TextButton(onPressed: () => _copy(context), child: const Text('Copy code')),
        TextButton(onPressed: () => _savePng(context), child: const Text('Save QR image')),
        FilledButton(onPressed: () => Navigator.pop(context), child: const Text('Done')),
      ],
    );
  }
}

class _DocShareScanPage extends StatefulWidget {
  const _DocShareScanPage();

  @override
  State<_DocShareScanPage> createState() => _DocShareScanPageState();
}

class _DocShareScanPageState extends State<_DocShareScanPage> {
  final _controller = MobileScannerController();
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
      if (raw.isEmpty) continue;
      final token = NgmyDocShareSync.parseTokenFromScan(raw);
      if (token == null || token.isEmpty) continue;
      _handled = true;
      Navigator.pop(context, token);
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
      ),
      body: Stack(
        children: [
          MobileScanner(controller: _controller, onDetect: _onDetect),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 28,
            child: Center(
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: 24),
                child: Text(
                  'Point at a Doc Share QR code',
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
