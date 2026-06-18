import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_doc_share_qr_payload.dart';
import 'ngmy_studio_hub.dart';

const String kNgmyDocShareQrLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

/// NGMY-branded Doc Share QR — circular eyes, corner rings, center logo + watermark, high error correction.
class NgmyDocShareQrWidget extends StatelessWidget {
  const NgmyDocShareQrWidget({
    super.key,
    required this.data,
    this.large = true,
  });

  final String data;
  final bool large;

  static const _ink = Color(0xFF1E1035);

  static Future<ui.Image?> renderQrImage(String data, {double? size}) async {
    final side = size ?? NgmyDocShareQrPayload.qrSizeForData(data);
    final painter = QrPainter(
      data: data,
      version: QrVersions.auto,
      errorCorrectionLevel: QrErrorCorrectLevel.H,
      gapless: true,
      eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.circle, color: _ink),
      dataModuleStyle: const QrDataModuleStyle(dataModuleShape: QrDataModuleShape.square, color: _ink),
    );
    return painter.toImage(side);
  }

  @override
  Widget build(BuildContext context) {
    final qrSide = NgmyDocShareQrPayload.qrSizeForData(data);
    final size = large ? qrSide : (qrSide * 0.85).clamp(240.0, 320.0);
    final logoSize = large ? 72.0 : 58.0;
    final ring = large ? 30.0 : 24.0;
    final outerPad = large ? 38.0 : 30.0;

    return SizedBox(
      width: size + outerPad,
      height: size + outerPad,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(top: 0, left: 0, child: _NgmyQrCornerOrb(size: ring)),
          Positioned(top: 0, right: 0, child: _NgmyQrCornerOrb(size: ring)),
          Positioned(bottom: 0, left: 0, child: _NgmyQrCornerOrb(size: ring)),
          Positioned(bottom: 0, right: 0, child: _NgmyQrCornerOrb(size: ring)),
          Container(
            width: size,
            height: size,
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(22),
              border: Border.all(
                width: 2.5,
                color: kNgmyStudioHubAccent.withValues(alpha: 0.45),
              ),
              boxShadow: [
                BoxShadow(
                  color: kNgmyStudioHubAccent.withValues(alpha: 0.22),
                  blurRadius: 20,
                  spreadRadius: 1,
                ),
                BoxShadow(
                  color: kNgmyStudioHubAccent2.withValues(alpha: 0.12),
                  blurRadius: 10,
                ),
              ],
            ),
            child: Stack(
              alignment: Alignment.center,
              children: [
                QrImageView(
                  data: data,
                  size: size - 24,
                  padding: EdgeInsets.zero,
                  backgroundColor: Colors.white,
                  errorCorrectionLevel: QrErrorCorrectLevel.H,
                  gapless: true,
                  eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.circle, color: _ink),
                  dataModuleStyle: const QrDataModuleStyle(
                    dataModuleShape: QrDataModuleShape.square,
                    color: _ink,
                  ),
                ),
                _NgmyQrCenterBadge(logoSize: logoSize),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _NgmyQrCornerOrb extends StatelessWidget {
  const _NgmyQrCornerOrb({required this.size});

  final double size;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2],
        ),
        border: Border.all(color: Colors.white.withValues(alpha: 0.9), width: 2.5),
        boxShadow: [
          BoxShadow(color: kNgmyStudioHubAccent.withValues(alpha: 0.45), blurRadius: 8),
        ],
      ),
    );
  }
}

class _NgmyQrCenterBadge extends StatelessWidget {
  const _NgmyQrCenterBadge({required this.logoSize});

  final double logoSize;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: logoSize + 16,
      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: kNgmyStudioHubAccent.withValues(alpha: 0.4), width: 2),
        boxShadow: const [
          BoxShadow(color: Colors.black12, blurRadius: 8, offset: Offset(0, 2)),
        ],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(12),
            child: Image.network(
              kNgmyDocShareQrLogoUrl,
              width: logoSize,
              height: logoSize,
              fit: BoxFit.cover,
              errorBuilder: (_, __, ___) => Container(
                width: logoSize,
                height: logoSize,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  gradient: const LinearGradient(colors: [kNgmyStudioHubAccent, kNgmyStudioHubAccent2]),
                  borderRadius: BorderRadius.circular(12),
                ),
                child: const Text(
                  'N',
                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 28),
                ),
              ),
            ),
          ),
          const SizedBox(height: 3),
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
                letterSpacing: 1.4,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
