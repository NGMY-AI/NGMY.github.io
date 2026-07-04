import 'dart:convert';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:qr_flutter/qr_flutter.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_qr_cards.dart';

export 'ngmy_menu_qr_options.dart';

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
                  if (style.showCenterLogo) _centerBadge(style, accent, bg, logoSize, large),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _centerBadge(NgmyMenuQrStyle style, Color accent, Color bg, double logoSize, bool large) {
    Widget inner;
    if (style.logoBase64.trim().isNotEmpty) {
      try {
        final bytes = base64Decode(style.logoBase64);
        inner = ClipRRect(
          borderRadius: BorderRadius.circular(10),
          child: Image.memory(bytes, width: logoSize, height: logoSize, fit: BoxFit.cover),
        );
      } catch (_) {
        inner = _centerLabelOrIcon(style, accent, large);
      }
    } else {
      inner = _centerLabelOrIcon(style, accent, large);
    }
    return Container(
      width: logoSize + 10,
      height: logoSize + 10,
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: accent.withValues(alpha: 0.45), width: 2),
      ),
      alignment: Alignment.center,
      clipBehavior: Clip.antiAlias,
      child: inner,
    );
  }

  Widget _centerLabelOrIcon(NgmyMenuQrStyle style, Color accent, bool large) {
    if (style.centerLabel.trim().isNotEmpty) {
      final t = style.centerLabel.trim();
      return Text(
        t.length > 3 ? t.substring(0, 3).toUpperCase() : t.toUpperCase(),
        style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: large ? 14 : 11),
      );
    }
    return Icon(Icons.restaurant_rounded, color: accent, size: large ? 28 : 22);
  }

  Widget _cornerDecor(String cornerId, double size, Color accent) {
    switch (cornerId) {
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
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(4), border: Border.all(color: accent, width: 2.5)),
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
            decoration: BoxDecoration(borderRadius: BorderRadius.circular(3), border: Border.all(color: accent, width: 2)),
          ),
        );
      case 'bracket':
        return SizedBox(
          width: size,
          height: size,
          child: CustomPaint(painter: _BracketCornerPainter(accent)),
        );
      case 'arc':
        return SizedBox(
          width: size,
          height: size,
          child: CustomPaint(painter: _ArcCornerPainter(accent)),
        );
      case 'star':
        return Icon(Icons.star_rounded, color: accent, size: size * 0.55);
      case 'cross':
        return Icon(Icons.add_rounded, color: accent, size: size * 0.5);
      case 'none':
        return const SizedBox.shrink();
      default:
        return Container(
          width: size,
          height: size,
          decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: accent.withValues(alpha: 0.7), width: 2)),
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

class _BracketCornerPainter extends CustomPainter {
  _BracketCornerPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 2.5
      ..style = PaintingStyle.stroke;
    canvas.drawLine(Offset.zero, Offset(size.width, 0), p);
    canvas.drawLine(Offset.zero, Offset(0, size.height), p);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _ArcCornerPainter extends CustomPainter {
  _ArcCornerPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 2.5
      ..style = PaintingStyle.stroke;
    canvas.drawArc(Rect.fromLTWH(0, 0, size.width, size.height), 3.14, 1.57, false, p);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Plain QR or invoice-style card with restaurant info + embedded QR.
class NgmyMenuQrDisplay extends StatelessWidget {
  const NgmyMenuQrDisplay({
    super.key,
    required this.data,
    required this.style,
    this.restaurantName = '',
    this.tagline = '',
    this.large = false,
    this.captureKey,
  });

  final String data;
  final NgmyMenuQrStyle style;
  final String restaurantName;
  final String tagline;
  final bool large;
  final GlobalKey? captureKey;

  static String _normalizeCardTemplate(String id) {
    return switch (id) {
      'luxury' => 'luxury_gold',
      'modern' => 'modern_gradient',
      'classic' => 'classic_border',
      'minimal' => 'minimal_clean',
      _ => id,
    };
  }

  @override
  Widget build(BuildContext context) {
    if (style.displayMode == 'card') {
      final tpl = _normalizeCardTemplate(style.cardTemplate);
      final cardStyle = tpl == style.cardTemplate ? style : style.copyWith(cardTemplate: tpl);
      return RepaintBoundary(
        key: captureKey,
        child: NgmyMenuQrCardWidget(
          data: data,
          info: NgmyMenuQrCardInfo(restaurantName: restaurantName, tagline: tagline, style: cardStyle),
          qrStyle: cardStyle,
          large: large,
        ),
      );
    }
    return NgmyMenuQrWidget(data: data, style: style, large: large, captureKey: captureKey);
  }
}

// Legacy exports for older saved data.
const List<Map<String, String>> kNgmyMenuQrCornerStyles = [
  {'id': 'ring', 'label': 'Rings'},
  {'id': 'circle', 'label': 'Circles'},
  {'id': 'square', 'label': 'Squares'},
  {'id': 'dot', 'label': 'Dots'},
  {'id': 'diamond', 'label': 'Diamonds'},
  {'id': 'none', 'label': 'None'},
];

const List<Map<String, String>> kNgmyMenuQrPresets = [
  {'id': 'gold', 'label': 'Gold', 'fg': '0xFF1A1410', 'bg': '0xFFFFFAF0', 'accent': '0xFFD4AF37'},
  {'id': 'classic', 'label': 'Classic', 'fg': '0xFF0F172A', 'bg': '0xFFFFFFFF', 'accent': '0xFF2563EB'},
];
