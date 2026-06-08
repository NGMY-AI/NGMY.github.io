import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

const String kNgmyProductQrLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

/// Store product QR — corner rings, NGMY logo + large price badge in center.
class NgmyStoreProductQrWidget extends StatelessWidget {
  const NgmyStoreProductQrWidget({
    super.key,
    required this.data,
    required this.price,
    this.large = false,
  });

  final String data;
  final double price;
  final bool large;

  static const _gold = Color(0xFFFFD54F);
  static const _goldDark = Color(0xFFB8860B);
  static const _billGreen = Color(0xFF1B5E20);
  static const _ink = Color(0xFF0F172A);

  @override
  Widget build(BuildContext context) {
    final size = large ? 280.0 : 220.0;
    final ring = large ? 28.0 : 22.0;
    final outerPad = large ? 34.0 : 26.0;
    final centerSize = large ? 96.0 : 78.0;
    final priceText = price > 0 ? '\$${price.toStringAsFixed(2)}' : '—';

    return SizedBox(
      width: size + outerPad,
      height: size + outerPad,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Positioned(top: 0, left: 0, child: _QrCornerDot(size: ring, color: _gold)),
          Positioned(top: 0, right: 0, child: _QrCornerDot(size: ring, color: _gold)),
          Positioned(bottom: 0, left: 0, child: _QrCornerDot(size: ring, color: _gold)),
          Positioned(bottom: 0, right: 0, child: _QrCornerDot(size: ring, color: _gold)),
          Container(
            width: size,
            height: size,
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: _goldDark, width: 2.5),
              boxShadow: [
                BoxShadow(color: _billGreen.withOpacity(0.35), blurRadius: 18, spreadRadius: 1),
                BoxShadow(color: _gold.withOpacity(0.25), blurRadius: 8),
              ],
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
                  width: centerSize,
                  height: centerSize,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    gradient: const LinearGradient(
                      begin: Alignment.topLeft,
                      end: Alignment.bottomRight,
                      colors: [Color(0xFF2E7D32), Color(0xFF1B5E20), Color(0xFF14532D)],
                    ),
                    border: Border.all(color: _gold, width: 3),
                    boxShadow: [
                      BoxShadow(color: Colors.black.withOpacity(0.35), blurRadius: 10, offset: const Offset(0, 4)),
                      BoxShadow(color: _gold.withOpacity(0.4), blurRadius: 6),
                    ],
                  ),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      FittedBox(
                        fit: BoxFit.scaleDown,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 6),
                          child: Text(
                            priceText,
                            style: TextStyle(
                              color: _gold,
                              fontWeight: FontWeight.w900,
                              fontSize: large ? 22 : 18,
                              height: 1,
                              shadows: const [Shadow(color: Colors.black54, blurRadius: 2, offset: Offset(0, 1))],
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 4),
                      Container(
                        width: large ? 32 : 26,
                        height: large ? 32 : 26,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                          border: Border.all(color: _gold.withOpacity(0.7), width: 1.5),
                        ),
                        padding: const EdgeInsets.all(3),
                        child: ClipOval(
                          child: Image.network(
                            kNgmyProductQrLogoUrl,
                            fit: BoxFit.cover,
                            errorBuilder: (_, __, ___) => const Center(
                              child: Text('N', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 10, color: _billGreen)),
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
        ],
      ),
    );
  }
}

class _QrCornerDot extends StatelessWidget {
  const _QrCornerDot({required this.size, required this.color});

  final double size;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: RadialGradient(colors: [color, color.withOpacity(0.45)]),
        border: Border.all(color: Colors.white.withOpacity(0.85), width: 2),
        boxShadow: [BoxShadow(color: color.withOpacity(0.5), blurRadius: 6)],
      ),
    );
  }
}
