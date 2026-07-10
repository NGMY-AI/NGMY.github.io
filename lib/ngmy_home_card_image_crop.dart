import 'dart:convert';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:image_picker/image_picker.dart';

/// Pick a photo, crop it to the home-card frame, return image base64 (no data: prefix).
Future<String?> ngmyPickAndCropHomeCardImage(BuildContext context) async {
  final picker = ImagePicker();
  final file = await picker.pickImage(source: ImageSource.gallery, maxWidth: 2200, imageQuality: 92);
  if (file == null) return null;
  final bytes = await file.readAsBytes();
  if (!context.mounted) return null;
  return Navigator.of(context).push<String>(
    MaterialPageRoute(
      fullscreenDialog: true,
      builder: (_) => _NgmyHomeCardCropPage(bytes: bytes),
    ),
  );
}

class _NgmyHomeCardCropPage extends StatefulWidget {
  const _NgmyHomeCardCropPage({required this.bytes});

  final Uint8List bytes;

  @override
  State<_NgmyHomeCardCropPage> createState() => _NgmyHomeCardCropPageState();
}

class _NgmyHomeCardCropPageState extends State<_NgmyHomeCardCropPage> {
  /// Matches the home frosted card proportions.
  static const _aspect = 1.55;
  final _boundaryKey = GlobalKey();
  bool _busy = false;

  Future<void> _save() async {
    if (_busy) return;
    setState(() => _busy = true);
    try {
      await Future<void>.delayed(const Duration(milliseconds: 20));
      final boundary = _boundaryKey.currentContext?.findRenderObject() as RenderRepaintBoundary?;
      if (boundary == null) {
        if (mounted) Navigator.pop(context);
        return;
      }
      final image = await boundary.toImage(pixelRatio: 2.4);
      final data = await image.toByteData(format: ui.ImageByteFormat.png);
      image.dispose();
      if (data == null) {
        if (mounted) Navigator.pop(context);
        return;
      }
      if (!mounted) return;
      Navigator.pop(context, base64Encode(data.buffer.asUint8List()));
    } catch (_) {
      if (mounted) Navigator.pop(context);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final pad = 24.0;

    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        backgroundColor: Colors.black,
        foregroundColor: Colors.white,
        title: const Text('Crop for card', style: TextStyle(fontWeight: FontWeight.w800)),
        actions: [
          TextButton(
            onPressed: _busy ? null : _save,
            child: _busy
                ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Use photo', style: TextStyle(fontWeight: FontWeight.w900, color: Color(0xFF67E8F9))),
          ),
        ],
      ),
      body: Column(
        children: [
          Expanded(
            child: Center(
              child: Padding(
                padding: EdgeInsets.symmetric(horizontal: pad),
                child: AspectRatio(
                  aspectRatio: _aspect,
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(28),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.85), width: 2),
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(26),
                      child: RepaintBoundary(
                        key: _boundaryKey,
                        child: InteractiveViewer(
                          minScale: 0.8,
                          maxScale: 5,
                          child: Image.memory(widget.bytes, fit: BoxFit.cover),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          Padding(
            padding: EdgeInsets.fromLTRB(24, 8, 24, 24 + MediaQuery.paddingOf(context).bottom),
            child: Text(
              'Pinch and drag so the photo fills the card frame, then tap Use photo.',
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontWeight: FontWeight.w600, height: 1.35),
            ),
          ),
        ],
      ),
    );
  }
}
