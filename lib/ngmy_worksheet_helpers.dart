import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

String ngmyFormatMoney(double amount) {
  final abs = amount.abs();
  final whole = abs.floor();
  final frac = ((abs - whole) * 100).round().clamp(0, 99);
  final sign = amount < 0 ? '-' : '';
  final wholeStr = whole.toString().replaceAllMapped(
        RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))'),
        (m) => '${m[1]},',
      );
  return '$sign\$$wholeStr.${frac.toString().padLeft(2, '0')}';
}

Future<String?> ngmyPickImageBase64({
  int imageQuality = 78,
  int maxWidth = 1920,
}) async {
  final img = await ImagePicker().pickImage(
    source: ImageSource.gallery,
    imageQuality: imageQuality,
    maxWidth: maxWidth.toDouble(),
  );
  if (img == null) return null;
  final bytes = await img.readAsBytes();
  return 'data:image/jpeg;base64,${base64Encode(bytes)}';
}

/// Shrinks a data-URL image for QR/file sharing while keeping enough quality for thumbnails.
Future<String?> ngmyWorksheetShareThumbnail(
  String? ref, {
  bool forQr = false,
}) async {
  final raw = ref?.trim();
  if (raw == null || raw.isEmpty) return null;
  if (!raw.startsWith('data:image')) return raw;

  final maxChars = forQr ? 1600 : 500000;
  if (raw.length <= maxChars) return raw;

  try {
    final payload = raw.contains(',') ? raw.split(',').last : raw;
    final bytes = base64Decode(payload);
  var targetWidth = forQr ? 420 : 960;
    while (targetWidth >= 96) {
      final codec = await ui.instantiateImageCodec(bytes, targetWidth: targetWidth);
      final frame = await codec.getNextFrame();
      final byteData = await frame.image.toByteData(format: ui.ImageByteFormat.png);
      frame.image.dispose();
      if (byteData == null) break;
      final out = 'data:image/png;base64,${base64Encode(byteData.buffer.asUint8List())}';
      if (out.length <= maxChars) return out;
      targetWidth = (targetWidth * 0.72).round();
    }
  } catch (e) {
    debugPrint('[worksheets] thumbnail shrink failed: $e');
  }
  return forQr ? null : raw;
}

ImageProvider? ngmyImageFromRef(String? ref) {
  if (ref == null || ref.trim().isEmpty) return null;
  if (ref.startsWith('data:image')) {
    try {
      return MemoryImage(base64Decode(ref.split(',').last));
    } catch (_) {
      return null;
    }
  }
  return null;
}

Widget ngmyImageOrPlaceholder({
  required String? imageRef,
  required double width,
  required double height,
  BoxFit fit = BoxFit.cover,
  IconData icon = Icons.image_outlined,
  Color? iconColor,
  BorderRadius? borderRadius,
}) {
  final provider = ngmyImageFromRef(imageRef);
  final radius = borderRadius ?? BorderRadius.circular(12);
  if (provider != null) {
    return ClipRRect(
      borderRadius: radius,
      child: Image(image: provider, width: width, height: height, fit: fit),
    );
  }
  return Container(
    width: width,
    height: height,
    decoration: BoxDecoration(
      color: Colors.grey.withValues(alpha: 0.15),
      borderRadius: radius,
    ),
    child: Icon(icon, color: iconColor ?? Colors.grey, size: 32),
  );
}

class WorksheetPalette {
  final bool isDark;

  const WorksheetPalette(this.isDark);

  static WorksheetPalette of(BuildContext context) =>
      WorksheetPalette(Theme.of(context).brightness == Brightness.dark);

  static const green = Color(0xFF10B981);
  static const greenDark = Color(0xFF059669);
  static const teal = Color(0xFF14B8A6);

  Color get pageBg => isDark ? const Color(0xFF0B1018) : const Color(0xFFF3F4F6);
  Color get cardBg => isDark ? const Color(0xFF151D2B) : Colors.white;
  Color get cardBorder => isDark ? const Color(0xFF334155) : const Color(0xFFE5E7EB);
  Color get primaryText => isDark ? const Color(0xFFF8FAFC) : const Color(0xFF111827);
  Color get secondaryText => isDark ? const Color(0xFF94A3B8) : const Color(0xFF6B7280);
  Color get mutedSurface => isDark ? const Color(0xFF1E293B) : const Color(0xFFF9FAFB);
  Color get shadow => Colors.black.withValues(alpha: isDark ? 0.35 : 0.08);
  Color get tabInactive => secondaryText;
}
