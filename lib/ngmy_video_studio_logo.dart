import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';

import 'ngmy_studio_logo_frame.dart';
import 'ngmy_studio_path_image.dart' if (dart.library.html) 'ngmy_studio_path_image_stub.dart' as path_image;
import 'ngmy_video_studio_models.dart';

/// Brand logo slot — optional frame, circle/rect shape, pop-up animation.
class NgmyStudioLogoAnim extends StatefulWidget {
  final Uint8List? imageBytes;
  final String? filePath;
  final String? networkUrl;
  final NgmyVideoSlotShape shape;
  final NgmyLogoFrameStyle frameStyle;

  const NgmyStudioLogoAnim({
    super.key,
    this.imageBytes,
    this.filePath,
    this.networkUrl,
    this.shape = NgmyVideoSlotShape.rect,
    this.frameStyle = NgmyLogoFrameStyle.goldRing,
  });

  @override
  State<NgmyStudioLogoAnim> createState() => _NgmyStudioLogoAnimState();
}

class _NgmyStudioLogoAnimState extends State<NgmyStudioLogoAnim> with SingleTickerProviderStateMixin {
  AnimationController? _ctrl;

  bool get _hasImage {
    if (widget.imageBytes != null && widget.imageBytes!.isNotEmpty) return true;
    if (widget.filePath != null && widget.filePath!.isNotEmpty) return true;
    if (widget.networkUrl != null && widget.networkUrl!.startsWith('http')) return true;
    return false;
  }

  @override
  void initState() {
    super.initState();
    _startAnimIfNeeded();
  }

  @override
  void didUpdateWidget(covariant NgmyStudioLogoAnim oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.imageBytes != widget.imageBytes ||
        oldWidget.filePath != widget.filePath ||
        oldWidget.networkUrl != widget.networkUrl ||
        oldWidget.frameStyle != widget.frameStyle) {
      _startAnimIfNeeded();
    }
  }

  void _startAnimIfNeeded() {
    if (!_hasImage) {
      _ctrl?.dispose();
      _ctrl = null;
      return;
    }
    _ctrl ??= AnimationController(vsync: this, duration: const Duration(milliseconds: 2200))..repeat(reverse: true);
  }

  @override
  void dispose() {
    _ctrl?.dispose();
    super.dispose();
  }

  Widget? _imageWidget() {
    if (widget.imageBytes != null && widget.imageBytes!.isNotEmpty) {
      return Image.memory(widget.imageBytes!, fit: BoxFit.cover, gaplessPlayback: true);
    }
    final fromPath = path_image.ngmyStudioImageFromPath(widget.filePath);
    if (fromPath != null) return fromPath;
    if (widget.networkUrl != null && widget.networkUrl!.startsWith('http')) {
      return Image.network(widget.networkUrl!, fit: BoxFit.cover);
    }
    return null;
  }

  @override
  Widget build(BuildContext context) {
    final img = _imageWidget();
    final inset = widget.frameStyle == NgmyLogoFrameStyle.none ? 0.0 : 8.0;

    return LayoutBuilder(
      builder: (context, constraints) {
        final box = Size(constraints.maxWidth, constraints.maxHeight);
        return CustomPaint(
          painter: _LogoFrameOverlayPainter(
            shape: widget.shape,
            frameStyle: widget.frameStyle,
            animT: _ctrl?.value ?? 0,
          ),
          child: img == null
              ? Container(
                  color: Colors.black.withValues(alpha: 0.55),
                  alignment: Alignment.center,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.account_circle_outlined, color: Colors.white.withValues(alpha: 0.45), size: 32),
                      const SizedBox(height: 6),
                      Text(
                        'Upload brand logo\nor hide in settings',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: Colors.white.withValues(alpha: 0.5), fontSize: 10, height: 1.2),
                      ),
                    ],
                  ),
                )
              : AnimatedBuilder(
                  animation: _ctrl!,
                  builder: (_, child) {
                    final t = _ctrl!.value;
                    final scale = 0.9 + t * 0.08;
                    final dy = (t - 0.5) * 4;
                    return Transform.translate(
                      offset: Offset(0, dy),
                      child: Transform.scale(
                        scale: scale,
                        child: Padding(
                          padding: EdgeInsets.all(inset),
                          child: ClipPath(
                            clipper: _LogoShapeClipper(widget.shape),
                            child: child,
                          ),
                        ),
                      ),
                    );
                  },
                  child: SizedBox(width: box.width, height: box.height, child: img),
                ),
        );
      },
    );
  }
}

class _LogoFrameOverlayPainter extends CustomPainter {
  final NgmyVideoSlotShape shape;
  final NgmyLogoFrameStyle frameStyle;
  final double animT;

  _LogoFrameOverlayPainter({required this.shape, required this.frameStyle, required this.animT});

  @override
  void paint(Canvas canvas, Size size) {
    NgmyLogoFramePainter.paint(
      canvas,
      Offset.zero & size,
      shape: shape,
      frame: frameStyle,
      animT: animT,
    );
  }

  @override
  bool shouldRepaint(covariant _LogoFrameOverlayPainter old) =>
      old.frameStyle != frameStyle || old.shape != shape || old.animT != animT;
}

class _LogoShapeClipper extends CustomClipper<Path> {
  final NgmyVideoSlotShape shape;
  const _LogoShapeClipper(this.shape);

  @override
  Path getClip(Size size) {
    final r = Offset.zero & size;
    if (shape == NgmyVideoSlotShape.circle) {
      return Path()..addOval(Rect.fromCircle(center: r.center, radius: r.shortestSide / 2));
    }
    return Path()..addRRect(RRect.fromRectAndRadius(r, const Radius.circular(10)));
  }

  @override
  bool shouldReclip(covariant _LogoShapeClipper old) => old.shape != shape;
}

String? ngmyLogoBytesToDataUrl(Uint8List bytes, {String mime = 'image/png'}) {
  if (bytes.isEmpty) return null;
  return 'data:$mime;base64,${base64Encode(bytes)}';
}
