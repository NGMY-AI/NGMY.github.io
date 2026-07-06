import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:image/image.dart' as img;
import 'package:image_picker/image_picker.dart';

/// Banner aspect — wide header, no squeeze.
const double kNgmyBioBannerAspect = 16 / 9;

/// Center-crop image bytes to 16:9 (optional vertical focus 0=top … 1=bottom).
Uint8List ngmyBioCropBannerBytes(Uint8List raw, {double focusY = 0.5, int maxWidth = 1600}) {
  final decoded = img.decodeImage(raw);
  if (decoded == null) return raw;

  final w = decoded.width;
  final h = decoded.height;
  final srcAspect = w / h;

  int cropW;
  int cropH;
  if (srcAspect > kNgmyBioBannerAspect) {
    cropH = h;
    cropW = (h * kNgmyBioBannerAspect).round();
  } else {
    cropW = w;
    cropH = (w / kNgmyBioBannerAspect).round();
  }

  final maxX = (w - cropW).clamp(0, w);
  final maxY = (h - cropH).clamp(0, h);
  final x = (maxX * 0.5).round();
  final y = (maxY * focusY.clamp(0.0, 1.0)).round();

  var cropped = img.copyCrop(decoded, x: x, y: y, width: cropW, height: cropH);
  if (cropped.width > maxWidth) {
    cropped = img.copyResize(cropped, width: maxWidth);
  }
  return Uint8List.fromList(img.encodeJpg(cropped, quality: 88));
}

String ngmyBioBytesToDataUrl(Uint8List bytes) => 'data:image/jpeg;base64,${base64Encode(bytes)}';

/// Pick a banner, optionally let user adjust vertical crop, return data URL.
Future<String?> ngmyBioPickBannerImage(BuildContext context) async {
  try {
    final file = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 92);
    if (file == null) return null;
    final raw = await file.readAsBytes();
    if (!context.mounted) return null;
    final focusY = await showDialog<double>(
      context: context,
      builder: (ctx) => _NgmyBioBannerCropDialog(rawBytes: raw),
    );
    if (focusY == null) return null;
    final cropped = ngmyBioCropBannerBytes(raw, focusY: focusY);
    return ngmyBioBytesToDataUrl(cropped);
  } catch (_) {
    return null;
  }
}

class _NgmyBioBannerCropDialog extends StatefulWidget {
  const _NgmyBioBannerCropDialog({required this.rawBytes});

  final Uint8List rawBytes;

  @override
  State<_NgmyBioBannerCropDialog> createState() => _NgmyBioBannerCropDialogState();
}

class _NgmyBioBannerCropDialogState extends State<_NgmyBioBannerCropDialog> {
  double _focusY = 0.35;

  @override
  Widget build(BuildContext context) {
    final preview = ngmyBioCropBannerBytes(widget.rawBytes, focusY: _focusY, maxWidth: 900);

    return Dialog(
      insetPadding: const EdgeInsets.all(16),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 420),
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Text('Crop header banner', style: Theme.of(context).textTheme.titleMedium?.copyWith(fontWeight: FontWeight.w800)),
              const SizedBox(height: 6),
              Text('Drag to choose what shows in the wide banner.', style: TextStyle(color: Colors.grey.shade600, fontSize: 12)),
              const SizedBox(height: 14),
              ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: AspectRatio(
                  aspectRatio: kNgmyBioBannerAspect,
                  child: Image.memory(preview, fit: BoxFit.cover, alignment: Alignment.topCenter),
                ),
              ),
              const SizedBox(height: 12),
              Row(
                children: [
                  const Icon(Icons.swap_vert_rounded, size: 18, color: Color(0xFFB8860B)),
                  Expanded(
                    child: Slider(
                      value: _focusY,
                      min: 0,
                      max: 1,
                      activeColor: const Color(0xFFB8860B),
                      onChanged: (v) => setState(() => _focusY = v),
                    ),
                  ),
                ],
              ),
              Row(
                children: [
                  Expanded(child: OutlinedButton(onPressed: () => Navigator.pop(context), child: const Text('Cancel'))),
                  const SizedBox(width: 10),
                  Expanded(
                    flex: 2,
                    child: FilledButton(
                      onPressed: () => Navigator.pop(context, _focusY),
                      style: FilledButton.styleFrom(backgroundColor: const Color(0xFFB8860B)),
                      child: const Text('Use banner'),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
