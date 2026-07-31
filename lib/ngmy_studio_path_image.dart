import 'dart:io';

import 'package:flutter/material.dart';

Widget? ngmyStudioImageFromPath(String? path) {
  if (path == null || path.isEmpty) return null;
  return Image.file(
    File(path),
    fit: BoxFit.contain,
    gaplessPlayback: true,
    filterQuality: FilterQuality.high,
    errorBuilder: (_, __, ___) => const Icon(Icons.broken_image_outlined, color: Colors.white54),
  );
}
