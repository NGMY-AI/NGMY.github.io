import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_menu_models.dart';

/// Customizable menu QR — scannable code with logo, colors, and corner templates.
class NgmyMenuQrWidget extends StatelessWidget {
  const NgmyMenuQrWidget({
    super.key,
    required this.data,
    required this.style,
    this.large = false,
    this.captureKey,
  });

  final String data;
  final NgmyMenuQrStyle style;
  final bool large;
  final GlobalKey? captureKey;

  static Future<Uint8List?> capturePng(GlobalKey key, {double pixelRatio = 4}) async {
    final ctx = key.currentContext;
    if (ctx == null) return null;
    final boundary = ctx.findRenderObject();
    if (boundary is! RenderRepaintBoundary) return null;
    final image = await boundary.toImage(pixelRatio: pixelRatio);
    final bytes = await image.toByteData(format: ui.ImageByteFormat.png);
    return bytes?.buffer.asUint8List();
  }

  QrEyeShape get _eyeShape => style.eyeShape == 'square' ? QrEyeShape.square : QrEyeShape.circle;

  QrDataModuleShape get _moduleShape => style.moduleShape == 'square' ? QrDataModuleShape.square : QrDataModuleShape.circle;

  @override
  Widget build(BuildContext context) {
    final size = large ? 280.0 : 220.0;
    final logoSize = large ? 56.0 : 44.0;
    final ring = large ? 24.0 : 18.0;
    final outerPad = large ? 32.0 : 24.0;
    final fg = Color(style.foreground);
    final bg = Color(style.background);
    final accent = Color(style.accent);

    return RepaintBoundary(
      key: captureKey,
      child: SizedBox(
        width: size + outerPad,
        height: size + outerPad,
        child: Stack(
          alignment: Alignment.center,
          children: [
            if (style.cornerStyle != 'none') ...[
              Positioned(top: 0, left: 0, child: _cornerDecor(style.cornerStyle, ring, accent)),
              Positioned(top: 0, right: 0, child: _cornerDecor(style.cornerStyle, ring, accent)),
              Positioned(bottom: 0, left: 0, child: _cornerDecor(style.cornerStyle, ring, accent)),
              Positioned(bottom: 0, right: 0, child: _cornerDecor(style.cornerStyle, ring, accent)),
            ],
            Container(
              width: size,
              height: size,
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: bg,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: accent.withValues(alpha: 0.4), width: 2),
                boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.15), blurRadius: 16)],
              ),
              child: Stack(
                alignment: Alignment.center,
                children: [
                  QrImageView(
                    data: data,
                    size: size - 20,
                    padding: EdgeInsets.zero,
                    backgroundColor: bg,
                    errorCorrectionLevel: QrErrorCorrectLevel.H,
                    eyeStyle: QrEyeStyle(eyeShape: _eyeShape, color: fg),
                    dataModuleStyle: QrDataModuleStyle(dataModuleShape: _moduleShape, color: fg),
                  ),
                  if (style.showCenterLogo)
                    Container(
                      width: logoSize + 10,
                      height: logoSize + 10,
                      decoration: BoxDecoration(
                        color: bg,
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: accent.withValues(alpha: 0.45), width: 2),
                      ),
                      alignment: Alignment.center,
                      child: style.centerLabel.trim().isNotEmpty
                          ? Text(
                              style.centerLabel.trim().length > 3
                                  ? style.centerLabel.trim().substring(0, 3).toUpperCase()
                                  : style.centerLabel.trim().toUpperCase(),
                              style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: large ? 14 : 11),
                            )
                          : Icon(Icons.restaurant_rounded, color: accent, size: large ? 28 : 22),
                    ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _cornerDecor(String style, double size, Color accent) {
    switch (style) {
      case 'circle':
        return Container(
          width: size,
          height: size,
          decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: accent, width: 2.5)),
        );
      case 'square':
        return Container(
          width: size,
          height: size,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(4),
            border: Border.all(color: accent, width: 2.5),
          ),
        );
      case 'dot':
        return Container(
          width: size * 0.45,
          height: size * 0.45,
          decoration: BoxDecoration(shape: BoxShape.circle, color: accent),
        );
      case 'diamond':
        return Transform.rotate(
          angle: 0.785398,
          child: Container(
            width: size * 0.65,
            height: size * 0.65,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(3),
              border: Border.all(color: accent, width: 2),
            ),
          ),
        );
      default:
        return Container(
          width: size,
          height: size,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            border: Border.all(color: accent.withValues(alpha: 0.7), width: 2),
          ),
          child: Center(
            child: Container(
              width: size * 0.45,
              height: size * 0.45,
              decoration: BoxDecoration(shape: BoxShape.circle, color: accent.withValues(alpha: 0.25)),
            ),
          ),
        );
    }
  }
}

const List<Map<String, String>> kNgmyMenuQrCornerStyles = [
  {'id': 'ring', 'label': 'Rings'},
  {'id': 'circle', 'label': 'Circles'},
  {'id': 'square', 'label': 'Squares'},
  {'id': 'dot', 'label': 'Dots'},
  {'id': 'diamond', 'label': 'Diamonds'},
  {'id': 'none', 'label': 'None'},
];

const List<Map<String, String>> kNgmyMenuQrPresets = [
  {'id': 'gold', 'label': 'Gold Luxe', 'fg': '0xFF1A1410', 'bg': '0xFFFFFAF0', 'accent': '0xFFD4AF37'},
  {'id': 'classic', 'label': 'Classic', 'fg': '0xFF0F172A', 'bg': '0xFFFFFFFF', 'accent': '0xFF2563EB'},
  {'id': 'neon', 'label': 'Neon', 'fg': '0xFF0F172A', 'bg': '0xFFECFEFF', 'accent': '0xFF06B6D4'},
  {'id': 'forest', 'label': 'Forest', 'fg': '0xFF14532D', 'bg': '0xFFF0FDF4', 'accent': '0xFF22C55E'},
  {'id': 'ruby', 'label': 'Ruby', 'fg': '0xFF450A0A', 'bg': '0xFFFFF1F2', 'accent': '0xFFE11D48'},
];
