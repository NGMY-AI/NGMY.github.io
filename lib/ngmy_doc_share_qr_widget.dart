import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:http/http.dart' as http;
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_studio_hub.dart';

const String kNgmyDocShareQrLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

/// Thick-module NGMY QR — white circle, chunky squares, center logo (reference style).
class NgmyDocShareQrWidget extends StatefulWidget {
  const NgmyDocShareQrWidget({
    super.key,
    required this.data,
    this.captureKey,
    this.large = true,
    this.maxSide,
  });

  final String data;
  final GlobalKey? captureKey;
  final bool large;
  final double? maxSide;

  static const _ink = Color(0xFF0A0A12);

  static Future<Uint8List?> capturePng(GlobalKey key, {double pixelRatio = 5}) async {
    final ctx = key.currentContext;
    if (ctx == null) return null;
    final boundary = ctx.findRenderObject();
    if (boundary is! RenderRepaintBoundary) return null;
    final image = await boundary.toImage(pixelRatio: pixelRatio);
    final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
    return bytes?.buffer.asUint8List();
  }

  static Future<ImageProvider?> circularLogoProvider(String url, int px) async {
    try {
      final response = await http.get(Uri.parse(url));
      if (response.statusCode != 200 || response.bodyBytes.isEmpty) return null;

      final codec = await ui.instantiateImageCodec(response.bodyBytes);
      final frame = await codec.getNextFrame();
      final src = frame.image;

      final recorder = ui.PictureRecorder();
      final canvas = Canvas(recorder);
      final rect = Rect.fromLTWH(0, 0, px.toDouble(), px.toDouble());
      canvas.drawRect(rect, Paint()..color = Colors.white);
      canvas.save();
      canvas.clipPath(Path()..addOval(rect));
      paintImage(canvas: canvas, rect: rect, image: src, fit: BoxFit.cover);
      canvas.restore();

      final picture = recorder.endRecording();
      final out = await picture.toImage(px, px);
      final byteData = await out.toByteData(format: ui.ImageByteFormat.png);
      if (byteData == null) return null;
      return MemoryImage(byteData.buffer.asUint8List());
    } catch (_) {
      return null;
    }
  }

  @override
  State<NgmyDocShareQrWidget> createState() => _NgmyDocShareQrWidgetState();
}

class _NgmyDocShareQrWidgetState extends State<NgmyDocShareQrWidget> {
  ImageProvider? _logo;

  @override
  void initState() {
    super.initState();
    unawaited(_loadLogo());
  }

  @override
  void didUpdateWidget(covariant NgmyDocShareQrWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.data != widget.data) unawaited(_loadLogo());
  }

  Future<void> _loadLogo() async {
    final provider = await NgmyDocShareQrWidget.circularLogoProvider(kNgmyDocShareQrLogoUrl, 200);
    if (mounted) setState(() => _logo = provider);
  }

  @override
  Widget build(BuildContext context) {
    final cap = widget.maxSide ?? (widget.large ? 256.0 : 228.0);
    final qrSide = NgmyDocShareQrPayload.qrSizeForData(widget.data, maxSide: cap);
    final disc = qrSide + 32;
    final showLogo = NgmyDocShareQrPayload.showCenterLogo(widget.data);
    final logoSide = showLogo ? (qrSide * NgmyDocShareQrPayload.logoSizeFraction(widget.data)).clamp(46.0, 62.0) : 0.0;
    final ecLevel = NgmyDocShareQrPayload.errorLevelForData(widget.data);
    final embedLogo = showLogo && _logo != null;

    return RepaintBoundary(
      key: widget.captureKey,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: disc,
            height: disc,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: Colors.white,
              boxShadow: const [
                BoxShadow(color: Color(0x33000000), blurRadius: 18, offset: Offset(0, 6)),
                BoxShadow(color: Color(0x1A000000), blurRadius: 4, offset: Offset(0, 1)),
              ],
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                CustomPaint(
                  size: Size(disc, disc),
                  painter: _CornerBracketPainter(
                    color: kNgmyStudioHubAccent.withValues(alpha: 0.85),
                    stroke: 4.5,
                    arm: disc * 0.11,
                    inset: disc * 0.07,
                  ),
                ),
                SizedBox(
                  width: qrSide,
                  height: qrSide,
                  child: QrImageView(
                    data: widget.data,
                    size: qrSide,
                    version: QrVersions.auto,
                    padding: EdgeInsets.zero,
                    backgroundColor: Colors.white,
                    errorCorrectionLevel: ecLevel,
                    gapless: true,
                    eyeStyle: const QrEyeStyle(
                      eyeShape: QrEyeShape.square,
                      color: NgmyDocShareQrWidget._ink,
                    ),
                    dataModuleStyle: const QrDataModuleStyle(
                      dataModuleShape: QrDataModuleShape.square,
                      color: NgmyDocShareQrWidget._ink,
                    ),
                    embeddedImage: embedLogo ? _logo : null,
                    embeddedImageStyle: embedLogo
                        ? QrEmbeddedImageStyle(size: Size(logoSide, logoSide))
                        : null,
                  ),
                ),
                if (showLogo) _CenterLogoBadge(logo: _logo, size: logoSide),
              ],
            ),
          ),
          const SizedBox(height: 8),
          ShaderMask(
            shaderCallback: (bounds) => const LinearGradient(
              colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
            ).createShader(bounds),
            child: const Text(
              'NGMY',
              style: TextStyle(
                color: Colors.white,
                fontWeight: FontWeight.w900,
                fontSize: 11,
                letterSpacing: 2.2,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _CenterLogoBadge extends StatelessWidget {
  const _CenterLogoBadge({required this.logo, required this.size});

  final ImageProvider? logo;
  final double size;

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Container(
        width: size + 12,
        height: size + 12,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: Colors.white,
          border: Border.all(color: kNgmyStudioHubAccent, width: 2.5),
          boxShadow: const [
            BoxShadow(color: Color(0x22000000), blurRadius: 4, offset: Offset(0, 1)),
          ],
        ),
        padding: const EdgeInsets.all(3),
        child: ClipOval(
          child: logo != null
              ? Image(image: logo!, fit: BoxFit.cover, width: size, height: size)
              : ColoredBox(
                  color: Colors.white,
                  child: Center(
                    child: Text(
                      'NGMY',
                      style: TextStyle(
                        fontWeight: FontWeight.w900,
                        fontSize: size * 0.22,
                        color: kNgmyStudioHubAccent,
                      ),
                    ),
                  ),
                ),
        ),
      ),
    );
  }
}

class _CornerBracketPainter extends CustomPainter {
  const _CornerBracketPainter({
    required this.color,
    required this.stroke,
    required this.arm,
    required this.inset,
  });

  final Color color;
  final double stroke;
  final double arm;
  final double inset;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..strokeWidth = stroke
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.square
      ..strokeJoin = StrokeJoin.miter;

    void corner(double x, double y, {required bool flipX, required bool flipY}) {
      final dx = flipX ? -1.0 : 1.0;
      final dy = flipY ? -1.0 : 1.0;
      final path = Path()
        ..moveTo(x, y + dy * arm)
        ..lineTo(x, y)
        ..lineTo(x + dx * arm, y);
      canvas.drawPath(path, paint);
    }

    corner(inset, inset, flipX: false, flipY: false);
    corner(size.width - inset, inset, flipX: true, flipY: false);
    corner(inset, size.height - inset, flipX: false, flipY: true);
    corner(size.width - inset, size.height - inset, flipX: true, flipY: true);
  }

  @override
  bool shouldRepaint(covariant _CornerBracketPainter oldDelegate) =>
      color != oldDelegate.color || stroke != oldDelegate.stroke;
}

void unawaited(Future<void> f) {}
