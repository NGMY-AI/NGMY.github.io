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

  @override
  Widget build(BuildContext context) {
    if (style.displayMode == 'card') {
      return RepaintBoundary(
        key: captureKey,
        child: _MenuQrCard(
          data: data,
          style: style,
          restaurantName: restaurantName,
          tagline: tagline,
          large: large,
        ),
      );
    }
    return NgmyMenuQrWidget(data: data, style: style, large: large, captureKey: captureKey);
  }
}

class _MenuQrCard extends StatelessWidget {
  const _MenuQrCard({
    required this.data,
    required this.style,
    required this.restaurantName,
    required this.tagline,
    required this.large,
  });

  final String data;
  final NgmyMenuQrStyle style;
  final String restaurantName;
  final String tagline;
  final bool large;

  @override
  Widget build(BuildContext context) {
    final accent = Color(style.accent);
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final tpl = style.cardTemplate;
    final w = large ? 320.0 : 280.0;

    BoxDecoration shell;
    Widget header;
    switch (tpl) {
      case 'modern':
        shell = BoxDecoration(
          borderRadius: BorderRadius.circular(22),
          gradient: LinearGradient(colors: [accent, accent.withValues(alpha: 0.65)]),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 24, offset: const Offset(0, 10))],
        );
        header = Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Text('VIEW MENU', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22, letterSpacing: 2)),
              if (restaurantName.trim().isNotEmpty)
                Text(restaurantName, style: const TextStyle(color: Colors.white70, fontWeight: FontWeight.w700, fontSize: 14)),
            ],
          ),
        );
        break;
      case 'minimal':
        shell = BoxDecoration(
          color: isDark ? const Color(0xFF18181B) : Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: isDark ? Colors.white24 : const Color(0xFFE4E4E7)),
        );
        header = Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
          child: Text(
            restaurantName.trim().isEmpty ? 'Restaurant Menu' : restaurantName,
            style: TextStyle(color: isDark ? Colors.white : const Color(0xFF18181B), fontWeight: FontWeight.w300, fontSize: 20, letterSpacing: 1),
          ),
        );
        break;
      case 'classic':
        shell = BoxDecoration(
          color: isDark ? const Color(0xFF0F172A) : Colors.white,
          borderRadius: BorderRadius.circular(16),
          border: Border.all(color: accent, width: 2),
        );
        header = Padding(
          padding: const EdgeInsets.fromLTRB(18, 18, 18, 0),
          child: Row(
            children: [
              Icon(Icons.restaurant_menu_rounded, color: accent, size: 22),
              const SizedBox(width: 8),
              Expanded(
                child: Text(
                  restaurantName.trim().isEmpty ? 'Menu' : restaurantName,
                  style: TextStyle(color: isDark ? Colors.white : const Color(0xFF0F172A), fontWeight: FontWeight.w800, fontSize: 16),
                ),
              ),
            ],
          ),
        );
        break;
      default:
        shell = BoxDecoration(
          gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF0A0A0A), Color(0xFF1A1410)]),
          borderRadius: BorderRadius.circular(20),
          border: Border.all(color: accent.withValues(alpha: 0.55), width: 1.5),
          boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.25), blurRadius: 28, offset: const Offset(0, 12))],
        );
        header = Padding(
          padding: const EdgeInsets.fromLTRB(20, 22, 20, 0),
          child: Column(
            children: [
              Icon(Icons.diamond_outlined, color: accent, size: 22),
              const SizedBox(height: 8),
              Text(
                restaurantName.trim().isEmpty ? 'Your Restaurant' : restaurantName,
                textAlign: TextAlign.center,
                style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 18, letterSpacing: 1),
              ),
            ],
          ),
        );
    }

    final bodyColor = tpl == 'modern' ? (isDark ? const Color(0xFF1E293B) : Colors.white) : (tpl == 'minimal' ? (isDark ? const Color(0xFF18181B) : Colors.white) : (isDark ? const Color(0xFF0F172A) : Colors.white));

    return SizedBox(
      width: w,
      child: DecoratedBox(
        decoration: shell,
        child: ClipRRect(
          borderRadius: BorderRadius.circular(tpl == 'modern' ? 22 : (tpl == 'minimal' ? 18 : 16)),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              if (tpl == 'modern') ...[
                header,
                Container(
                  color: bodyColor,
                  padding: const EdgeInsets.all(18),
                  child: _cardBody(accent, isDark, tpl),
                ),
              ] else ...[
                if (tpl != 'modern') header,
                Container(
                  color: tpl == 'luxury' ? Colors.transparent : bodyColor,
                  padding: EdgeInsets.fromLTRB(18, tpl == 'luxury' ? 8 : 12, 18, 20),
                  child: _cardBody(accent, isDark, tpl),
                ),
              ],
            ],
          ),
        ),
      ),
    );
  }

  Widget _cardBody(Color accent, bool isDark, String tpl) {
    final subColor = tpl == 'luxury' ? const Color(0xFFC9B896) : (isDark ? Colors.white60 : Colors.black54);
    final titleColor = tpl == 'luxury' ? accent : (isDark ? Colors.white : const Color(0xFF0F172A));

    return Column(
      children: [
        if (tagline.trim().isNotEmpty && tpl != 'modern')
          Padding(
            padding: const EdgeInsets.only(bottom: 10),
            child: Text(tagline, textAlign: TextAlign.center, style: TextStyle(color: subColor, fontSize: 12, fontStyle: FontStyle.italic)),
          ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.qr_code_scanner_rounded, color: accent, size: 18),
            const SizedBox(width: 8),
            Text('Scan for menu', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 13, color: titleColor)),
          ],
        ),
        const SizedBox(height: 14),
        Center(
          child: NgmyMenuQrWidget(data: data, style: style, large: false),
        ),
        const SizedBox(height: 10),
        Text('No login required', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w600, color: accent.withValues(alpha: 0.85))),
      ],
    );
  }
}
