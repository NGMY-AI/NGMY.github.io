import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'widgets.dart';

/// Bio page QR — plain code with the NGMY logo centered (not the menu card layout).
class NgmyBioQrWidget extends StatelessWidget {
  const NgmyBioQrWidget({
    super.key,
    required this.data,
    this.large = false,
    this.captureKey,
  });

  final String data;
  final bool large;
  final GlobalKey? captureKey;

  static const _gold = Color(0xFFB8860B);
  static const _ink = Color(0xFF1A1410);

  @override
  Widget build(BuildContext context) {
    final size = large ? 260.0 : 200.0;
    final ring = large ? 26.0 : 20.0;
    final outerPad = large ? 32.0 : 24.0;
    final logoSize = large ? 44.0 : 36.0;

    return RepaintBoundary(
      key: captureKey,
      child: SizedBox(
        width: size + outerPad,
        height: size + outerPad,
        child: Stack(
          alignment: Alignment.center,
          children: [
            Positioned(top: 0, left: 0, child: _cornerRing(ring)),
            Positioned(top: 0, right: 0, child: _cornerRing(ring)),
            Positioned(bottom: 0, left: 0, child: _cornerRing(ring)),
            Positioned(bottom: 0, right: 0, child: _cornerRing(ring)),
            Container(
              width: size,
              height: size,
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(18),
                border: Border.all(color: _gold.withValues(alpha: 0.55), width: 2),
                boxShadow: [BoxShadow(color: _gold.withValues(alpha: 0.18), blurRadius: 16)],
              ),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  QrImageView(
                    data: data,
                    size: size - 20,
                    padding: EdgeInsets.zero,
                    backgroundColor: Colors.white,
                    errorCorrectionLevel: QrErrorCorrectLevel.H,
                    eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.circle, color: _ink),
                    dataModuleStyle: const QrDataModuleStyle(dataModuleShape: QrDataModuleShape.circle, color: _ink),
                  ),
                  Container(
                    width: logoSize + 8,
                    height: logoSize + 8,
                    decoration: BoxDecoration(
                      color: Colors.white,
                      shape: BoxShape.circle,
                      border: Border.all(color: _gold.withValues(alpha: 0.5), width: 2),
                      boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.12), blurRadius: 8)],
                    ),
                    padding: const EdgeInsets.all(4),
                    child: ClipOval(
                      child: Image.network(
                        kNgmyDefaultLogoUrl,
                        fit: BoxFit.cover,
                        errorBuilder: (_, __, ___) => const Center(
                          child: Text('NGMY', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 8, color: _gold)),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _cornerRing(double size) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        border: Border.all(color: _gold.withValues(alpha: 0.7), width: 2.5),
      ),
    );
  }
}
