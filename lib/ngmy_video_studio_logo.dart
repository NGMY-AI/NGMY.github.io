import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_studio_path_image.dart' if (dart.library.html) 'ngmy_studio_path_image_stub.dart' as path_image;

/// News-style pop-up animation for logo / graphic on the side monitor.
class NgmyStudioLogoAnim extends StatefulWidget {
  final Uint8List? imageBytes;
  final String? filePath;
  final String? networkUrl;

  const NgmyStudioLogoAnim({super.key, this.imageBytes, this.filePath, this.networkUrl});

  @override
  State<NgmyStudioLogoAnim> createState() => _NgmyStudioLogoAnimState();
}

class _NgmyStudioLogoAnimState extends State<NgmyStudioLogoAnim> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;

  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    Widget? img;
    if (widget.imageBytes != null && widget.imageBytes!.isNotEmpty) {
      img = Image.memory(widget.imageBytes!, fit: BoxFit.contain, gaplessPlayback: true);
    } else {
      img = path_image.ngmyStudioImageFromPath(widget.filePath);
    }
    if (img == null && widget.networkUrl != null && widget.networkUrl!.startsWith('http')) {
      img = Image.network(widget.networkUrl!, fit: BoxFit.contain);
    }

    return Container(
      color: Colors.black,
      alignment: Alignment.center,
      child: img == null
          ? Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.animation_outlined, color: Colors.white.withOpacity(0.45), size: 32),
                const SizedBox(height: 6),
                Text(
                  'Upload logo\n(animated pop-up)',
                  textAlign: TextAlign.center,
                  style: TextStyle(color: Colors.white.withOpacity(0.5), fontSize: 10, height: 1.2),
                ),
              ],
            )
          : AnimatedBuilder(
              animation: _ctrl,
              builder: (_, child) {
                final t = _ctrl.value;
                final scale = 0.88 + t * 0.14;
                final dy = (t - 0.5) * 8;
                final glow = 0.35 + t * 0.45;
                return Transform.translate(
                  offset: Offset(0, dy),
                  child: Transform.scale(
                    scale: scale,
                    child: DecoratedBox(
                      decoration: BoxDecoration(
                        boxShadow: [
                          BoxShadow(
                            color: const Color(0xFF00D4FF).withOpacity(glow),
                            blurRadius: 18 + t * 12,
                            spreadRadius: 2,
                          ),
                        ],
                      ),
                      child: child,
                    ),
                  ),
                );
              },
              child: img,
            ),
    );
  }
}

String? ngmyLogoBytesToDataUrl(Uint8List bytes, {String mime = 'image/png'}) {
  if (bytes.isEmpty) return null;
  return 'data:$mime;base64,${base64Encode(bytes)}';
}
