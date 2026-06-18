import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:http/http.dart' as http;
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_studio_hub.dart';

const String kNgmyDocShareQrLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

/// Large, high-contrast NGMY Doc Share QR — circular finder eyes, circular logo, round modules.
class NgmyDocShareQrWidget extends StatefulWidget {
  const NgmyDocShareQrWidget({
    super.key,
    required this.data,
    this.captureKey,
    this.large = true,
  });

  final String data;
  final GlobalKey? captureKey;
  final bool large;

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

  static Future<ImageProvider?> _circularLogoProvider(String url, int px) async {
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
      paintImage(
        canvas: canvas,
        rect: rect,
        image: src,
        fit: BoxFit.cover,
      );
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
    if (NgmyDocShareQrPayload.showCenterLogo(widget.data)) {
      unawaited(_loadLogo());
    }
  }

  @override
  void didUpdateWidget(covariant NgmyDocShareQrWidget oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.data != widget.data) {
      _logo = null;
      if (NgmyDocShareQrPayload.showCenterLogo(widget.data)) {
        unawaited(_loadLogo());
      }
    }
  }

  Future<void> _loadLogo() async {
    final provider = await NgmyDocShareQrWidget._circularLogoProvider(kNgmyDocShareQrLogoUrl, 160);
    if (mounted) setState(() => _logo = provider);
  }

  @override
  Widget build(BuildContext context) {
    final side = widget.large ? NgmyDocShareQrPayload.qrSizeForData(widget.data) : 360.0;
    final showLogo = NgmyDocShareQrPayload.showCenterLogo(widget.data);
    final logoSide = showLogo ? (side * NgmyDocShareQrPayload.logoSizeFraction(widget.data)).clamp(44.0, 72.0) : 0.0;
    final ecLevel = NgmyDocShareQrPayload.errorLevelForData(widget.data);

    final qr = QrImageView(
      data: widget.data,
      size: side,
      padding: const EdgeInsets.all(8),
      backgroundColor: Colors.white,
      errorCorrectionLevel: ecLevel,
      gapless: true,
      eyeStyle: const QrEyeStyle(
        eyeShape: QrEyeShape.circle,
        color: NgmyDocShareQrWidget._ink,
      ),
      dataModuleStyle: const QrDataModuleStyle(
        dataModuleShape: QrDataModuleShape.circle,
        color: NgmyDocShareQrWidget._ink,
      ),
      embeddedImage: showLogo && _logo != null ? _logo : null,
      embeddedImageStyle: showLogo && _logo != null
          ? QrEmbeddedImageStyle(size: Size(logoSide, logoSide))
          : null,
    );

    return RepaintBoundary(
      key: widget.captureKey,
      child: Container(
        color: Colors.white,
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 16),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            showLogo && _logo != null
                ? Stack(
                    alignment: Alignment.center,
                    children: [
                      qr,
                      IgnorePointer(
                        child: Container(
                          width: logoSide + 8,
                          height: logoSide + 8,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            border: Border.all(color: kNgmyStudioHubAccent, width: 3),
                          ),
                        ),
                      ),
                    ],
                  )
                : qr,
            const SizedBox(height: 10),
            ShaderMask(
              shaderCallback: (bounds) => const LinearGradient(
                colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
              ).createShader(bounds),
              child: const Text(
                'NGMY',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  fontSize: 13,
                  letterSpacing: 2,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

void unawaited(Future<void> f) {}
