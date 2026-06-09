import 'dart:math' as math;

import 'dart:ui' as ui;



import 'package:flutter/material.dart';

import 'ngmy_banner_text_style.dart';



/// Professional broadcast overlay styles — video background + inset editable graphics.

enum NgmyNewsBannerStyle {

  broadcastGradient,

  ngmyPrime,

  sunsetPulse,

  cyberNeon,

  royalBlue,

  fireAlert,

  emeraldWave,

  purpleHype,

  midnightGold,

  tropicalVibe,

  sportDynamic,

  podcastPro,

  newsFlash,

  cleanMinimal,

  luxuryDark,
  imperialGold,
  presidentialBlue,
  royalCrimson,
  diamondElite,
  marblePalace,
  velvetThrone,
  sovereignSilver,
  crownJewel,
  executiveBrief,
  gildedHerald,

}



extension NgmyNewsBannerStyleExt on NgmyNewsBannerStyle {

  String get label => switch (this) {

        NgmyNewsBannerStyle.broadcastGradient => 'Broadcast Gradient',

        NgmyNewsBannerStyle.ngmyPrime => 'NGMY Prime',

        NgmyNewsBannerStyle.sunsetPulse => 'Sunset Pulse',

        NgmyNewsBannerStyle.cyberNeon => 'Cyber Neon',

        NgmyNewsBannerStyle.royalBlue => 'Royal Blue',

        NgmyNewsBannerStyle.fireAlert => 'Fire Alert',

        NgmyNewsBannerStyle.emeraldWave => 'Emerald Wave',

        NgmyNewsBannerStyle.purpleHype => 'Purple Hype',

        NgmyNewsBannerStyle.midnightGold => 'Midnight Gold',

        NgmyNewsBannerStyle.tropicalVibe => 'Tropical Vibe',

        NgmyNewsBannerStyle.sportDynamic => 'Sport Dynamic',

        NgmyNewsBannerStyle.podcastPro => 'Podcast Pro',

        NgmyNewsBannerStyle.newsFlash => 'News Flash',

        NgmyNewsBannerStyle.cleanMinimal => 'Clean Minimal',

        NgmyNewsBannerStyle.luxuryDark => 'Luxury Dark',
        NgmyNewsBannerStyle.imperialGold => 'Imperial Gold',
        NgmyNewsBannerStyle.presidentialBlue => 'Presidential Blue',
        NgmyNewsBannerStyle.royalCrimson => 'Royal Crimson',
        NgmyNewsBannerStyle.diamondElite => 'Diamond Elite',
        NgmyNewsBannerStyle.marblePalace => 'Marble Palace',
        NgmyNewsBannerStyle.velvetThrone => 'Velvet Throne',
        NgmyNewsBannerStyle.sovereignSilver => 'Sovereign Silver',
        NgmyNewsBannerStyle.crownJewel => 'Crown Jewel',
        NgmyNewsBannerStyle.executiveBrief => 'Executive Brief',
        NgmyNewsBannerStyle.gildedHerald => 'Gilded Herald',

      };

}



class _BannerLayout {

  _BannerLayout(Size size, double scale) {

    final vertical = size.height > size.width * 1.05;

    final sc = scale.clamp(0.55, 1.6);

    final norm = vertical ? 0.62 : 1.0;



    if (vertical) {

      marginH = size.width * 0.082;

      marginTop = size.height * 0.056;

      marginBottom = size.height * 0.050;

      bannerH = size.height * 0.072 * sc * norm;

      footerH = size.height * 0.034 * sc * norm;

      brandW = size.width * 0.26;

      brandH = size.height * 0.054 * sc;

      gap = size.height * 0.014;

    } else {

      marginH = size.width * 0.032;

      marginTop = size.height * 0.038;

      marginBottom = size.height * 0.028;

      bannerH = size.height * 0.155 * sc;

      footerH = size.height * 0.048 * sc;

      brandW = size.width * 0.18;

      brandH = size.height * 0.11 * sc;

      gap = size.height * 0.01;

    }

    this.size = size;

    this.sc = sc;

  }



  late final Size size;

  late final double marginH;

  late final double marginTop;

  late final double marginBottom;

  late final double bannerH;

  late final double footerH;

  late final double brandW;

  late final double brandH;

  late final double gap;

  late final double sc;



  double get footerTop => size.height - marginBottom - footerH;

  double get bannerTop => footerTop - gap - bannerH;



  Rect get bannerRect => Rect.fromLTWH(marginH, bannerTop, size.width - marginH * 2, bannerH);

  Rect get footerRect => Rect.fromLTWH(marginH, footerTop, size.width - marginH * 2, footerH);

  Rect get brandRect => Rect.fromLTWH(size.width - marginH - brandW, marginTop, brandW, brandH);

}



class NgmyNewsBannerPainter extends CustomPainter {

  final NgmyNewsBannerStyle style;

  final String headline;

  final String title;

  final String subtitle;

  final String liveLabel;

  final bool topAccent;

  final double scale;

  final NgmyBannerTextStyle textStyle;



  NgmyNewsBannerPainter({

    required this.style,

    required this.headline,

    required this.title,

    required this.subtitle,

    required this.liveLabel,

    this.topAccent = false,

    this.scale = 1.0,

    this.textStyle = NgmyBannerTextStyle.broadcastClassic,

  });



  _BannerLayout _l(Size size) => _BannerLayout(size, scale);



  @override

  void paint(Canvas canvas, Size size) {

    if (topAccent) _topLiveStrip(canvas, size);

    switch (style) {

      case NgmyNewsBannerStyle.broadcastGradient:

        _broadcastGradient(canvas, size);

      case NgmyNewsBannerStyle.ngmyPrime:

        _ngmyPrime(canvas, size);

      case NgmyNewsBannerStyle.sunsetPulse:

        _sunsetPulse(canvas, size);

      case NgmyNewsBannerStyle.cyberNeon:

        _cyberNeon(canvas, size);

      case NgmyNewsBannerStyle.royalBlue:

        _royalBlue(canvas, size);

      case NgmyNewsBannerStyle.fireAlert:

        _fireAlert(canvas, size);

      case NgmyNewsBannerStyle.emeraldWave:

        _emeraldWave(canvas, size);

      case NgmyNewsBannerStyle.purpleHype:

        _purpleHype(canvas, size);

      case NgmyNewsBannerStyle.midnightGold:

        _midnightGold(canvas, size);

      case NgmyNewsBannerStyle.tropicalVibe:

        _tropicalVibe(canvas, size);

      case NgmyNewsBannerStyle.sportDynamic:

        _sportDynamic(canvas, size);

      case NgmyNewsBannerStyle.podcastPro:

        _podcastPro(canvas, size);

      case NgmyNewsBannerStyle.newsFlash:

        _newsFlash(canvas, size);

      case NgmyNewsBannerStyle.cleanMinimal:

        _cleanMinimal(canvas, size);

      case NgmyNewsBannerStyle.luxuryDark:

        _luxuryDark(canvas, size);

      case NgmyNewsBannerStyle.imperialGold:

        _imperialGold(canvas, size);

      case NgmyNewsBannerStyle.presidentialBlue:

        _presidentialBlue(canvas, size);

      case NgmyNewsBannerStyle.royalCrimson:

        _royalCrimson(canvas, size);

      case NgmyNewsBannerStyle.diamondElite:

        _diamondElite(canvas, size);

      case NgmyNewsBannerStyle.marblePalace:

        _marblePalace(canvas, size);

      case NgmyNewsBannerStyle.velvetThrone:

        _velvetThrone(canvas, size);

      case NgmyNewsBannerStyle.sovereignSilver:

        _sovereignSilver(canvas, size);

      case NgmyNewsBannerStyle.crownJewel:

        _crownJewelBanner(canvas, size);

      case NgmyNewsBannerStyle.executiveBrief:

        _executiveBrief(canvas, size);

      case NgmyNewsBannerStyle.gildedHerald:

        _gildedHerald(canvas, size);

    }

  }



  void _topLiveStrip(Canvas canvas, Size size) {

    final l = _l(size);

    final h = size.height * (size.height > size.width ? 0.032 : 0.038) * l.sc;

    final r = RRect.fromRectAndRadius(

      Rect.fromLTWH(l.marginH, l.marginTop * 0.35, size.width - l.marginH * 2, h),

      const Radius.circular(8),

    );

    canvas.drawRRect(r, Paint()..color = const Color(0xFFDC2626).withValues(alpha: 0.92));

    _txt(canvas, liveLabel.toUpperCase(), l.marginH + 10, l.marginTop * 0.35 + h * 0.22, h * 0.48, Colors.white, FontWeight.w900);

  }



  void _brandCorner(Canvas canvas, Size size, {required Color bg, required Color fg, bool glass = true}) {
    final l = _l(size);
    final r = l.brandRect;
    NgmyBannerTextRenderer.drawBrand(
      canvas,
      r,
      style: textStyle,
      title: title,
      subtitle: subtitle,
      bg: glass ? bg.withValues(alpha: 0.78) : bg,
      fg: fg,
    );
    if (textStyle == NgmyBannerTextStyle.broadcastClassic && glass) {
      canvas.drawRRect(
        RRect.fromRectAndRadius(r, const Radius.circular(10)),
        Paint()..color = Colors.white.withValues(alpha: 0.28)..style = PaintingStyle.stroke..strokeWidth = 1.2,
      );
    }
  }



  void _triangleAccents(Canvas canvas, Size size, Color color, {int count = 3}) {

    final l = _l(size);

    final baseY = l.bannerTop + l.bannerH * 0.15;

    for (var i = 0; i < count; i++) {

      final cx = l.bannerRect.left + l.bannerRect.width * (0.45 + i * 0.14);

      final h = l.bannerH * (0.55 + i * 0.12);

      final path = Path()

        ..moveTo(cx, baseY)

        ..lineTo(cx - h * 0.32, baseY + h)

        ..lineTo(cx + h * 0.32, baseY + h)

        ..close();

      canvas.drawPath(

        path,

        Paint()

          ..color = color.withValues(alpha: 0.5)

          ..style = PaintingStyle.stroke

          ..strokeWidth = 2,

      );

    }

  }



  void _socialFooter(Canvas canvas, Size size, {required Color bg, required Color accent, required Color text}) {

    final l = _l(size);

    final r = l.footerRect;

    final left = subtitle.trim().isNotEmpty ? subtitle : '@NGMY';

    final right = liveLabel.trim().isNotEmpty ? liveLabel : '@NGMYOfficial';

    NgmyBannerTextRenderer.drawFooter(
      canvas,
      r,
      style: textStyle,
      left: left,
      right: right,
      bg: bg,
      accent: accent,
      text: text,
    );
  }



  void _socialIcons(Canvas canvas, Offset at, double h, Color color) {

    final icons = [Icons.facebook, Icons.camera_alt_outlined, Icons.alternate_email, Icons.play_circle_outline, Icons.music_note];

    for (var i = 0; i < icons.length; i++) {

      _icon(canvas, icons[i], Offset(at.dx + i * (h * 1.1), at.dy), h * 0.65, color);

    }

  }



  void _icon(Canvas canvas, IconData icon, Offset at, double iconSize, Color color) {

    final tp = TextPainter(

      text: TextSpan(text: String.fromCharCode(icon.codePoint), style: TextStyle(fontSize: iconSize, fontFamily: icon.fontFamily, color: color)),

      textDirection: TextDirection.ltr,

    )..layout();

    tp.paint(canvas, at);

  }



  void _drawInsetBanner(Canvas canvas, Size size, List<Color> colors, {bool angledTop = false, bool triangles = false}) {

    final l = _l(size);

    final r = l.bannerRect;

    final path = Path();

    if (angledTop) {

      path

        ..moveTo(r.left, r.bottom)

        ..lineTo(r.left, r.top + r.height * 0.22)

        ..lineTo(r.right - r.width * 0.08, r.top)

        ..lineTo(r.right, r.top + r.height * 0.12)

        ..lineTo(r.right, r.bottom)

        ..close();

    } else {

      path.addRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)));

    }

    canvas.drawPath(

      path,

      Paint()

        ..shader = ui.Gradient.linear(Offset(r.left, r.top), Offset(r.right, r.top), colors)

        ..blendMode = BlendMode.srcOver,

    );

    canvas.drawPath(

      path,

      Paint()

        ..color = Colors.white.withValues(alpha: 0.22)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 1.2,

    );

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.28, r.height * 0.36, Colors.white, FontWeight.w900, maxW: r.width - 24);

    if (triangles) _triangleAccents(canvas, size, colors.last);

    _socialFooter(canvas, size, bg: const Color(0xFF0A0A0A), accent: colors.last, text: Colors.white70);

  }



  void _broadcastGradient(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF0F172A), fg: Colors.white);

    _drawInsetBanner(canvas, size, const [Color(0xFFF97316), Color(0xFF14B8A6), Color(0xFF0EA5E9)], triangles: true);

  }



  void _ngmyPrime(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF065F46), fg: Colors.white);

    _drawInsetBanner(canvas, size, const [Color(0xFF047857), Color(0xFF00B25A), Color(0xFF6EE7B7)]);

  }



  void _sunsetPulse(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF7C2D12), fg: const Color(0xFFFDE68A));

    _drawInsetBanner(canvas, size, const [Color(0xFFDC2626), Color(0xFFF97316), Color(0xFFFBBF24)], angledTop: true, triangles: true);

  }



  void _cyberNeon(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: Colors.black, fg: const Color(0xFF22D3EE));

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(12)), Paint()..color = const Color(0xFF0F172A).withValues(alpha: 0.85));

    canvas.drawLine(Offset(r.left, r.top), Offset(r.right, r.top), Paint()..color = const Color(0xFF22D3EE)..strokeWidth = 2.5);

    canvas.drawLine(Offset(r.left, r.bottom), Offset(r.right, r.bottom), Paint()..color = const Color(0xFFA855F7)..strokeWidth = 2.5);

    _txt(canvas, headline.toUpperCase(), r.left + 12, r.top + r.height * 0.30, r.height * 0.34, const Color(0xFF67E8F9), FontWeight.w900, maxW: r.width - 20);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFA855F7), text: const Color(0xFF67E8F9));

  }



  void _royalBlue(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF1E3A8A), fg: Colors.white);

    final r = l.bannerRect;

    final liveW = r.width * 0.22;

    canvas.drawRRect(
      RRect.fromRectAndCorners(
        Rect.fromLTWH(r.left, r.top, liveW, r.height),
        topLeft: const Radius.circular(12),
        bottomLeft: const Radius.circular(12),
      ),
      Paint()..color = const Color(0xFFDC2626),
    );

    _txt(canvas, 'LIVE', r.left + 10, r.top + r.height * 0.32, r.height * 0.30, Colors.white, FontWeight.w900);

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(r.left + liveW - 6, r.top, r.width - liveW + 6, r.height), const Radius.circular(12)),

      Paint()..color = const Color(0xFF1D4ED8).withValues(alpha: 0.92),

    );

    _txt(canvas, headline.toUpperCase(), r.left + liveW + 8, r.top + r.height * 0.28, r.height * 0.34, Colors.white, FontWeight.w900, maxW: r.width - liveW - 16);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFF3B82F6), text: Colors.white70);

  }



  void _fireAlert(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFFDC2626), fg: Colors.white);

    final r = l.bannerRect;

    final path = Path()

      ..moveTo(r.left, r.bottom)

      ..lineTo(r.left + r.width * 0.12, r.top)

      ..lineTo(r.right, r.top + r.height * 0.08)

      ..lineTo(r.right - r.width * 0.06, r.bottom)

      ..close();

    canvas.drawPath(path, Paint()..color = const Color(0xFFEF4444).withValues(alpha: 0.92));

    _txt(canvas, 'BREAKING', r.left + 12, r.top + r.height * 0.12, r.height * 0.26, Colors.white, FontWeight.w900);

    _txt(canvas, headline.toUpperCase(), r.left + 12, r.top + r.height * 0.44, r.height * 0.32, Colors.white, FontWeight.w900, maxW: r.width - 20);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFEF4444), text: Colors.white70);

  }



  void _emeraldWave(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF064E3B), fg: const Color(0xFF6EE7B7));

    _drawInsetBanner(canvas, size, const [Color(0xFF047857), Color(0xFF10B981), Color(0xFF6EE7B7)], angledTop: true);

  }



  void _purpleHype(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF4C1D95), fg: const Color(0xFFE9D5FF));

    _drawInsetBanner(canvas, size, const [Color(0xFF6D28D9), Color(0xFFA855F7), Color(0xFFF472B6)], triangles: true);

  }



  void _midnightGold(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF1C1917), fg: const Color(0xFFFBBF24));

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = const Color(0xFF1C1917).withValues(alpha: 0.9));

    canvas.drawRRect(

      RRect.fromRectAndRadius(r.deflate(1), const Radius.circular(13)),

      Paint()

        ..color = const Color(0xFFFBBF24)

        ..style = PaintingStyle.stroke

        ..strokeWidth = 2,

    );

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.28, r.height * 0.34, const Color(0xFFFBBF24), FontWeight.w900, maxW: r.width - 24);

    _socialFooter(canvas, size, bg: const Color(0xFF0C0A09), accent: const Color(0xFFFBBF24), text: const Color(0xFFFDE68A));

  }



  void _tropicalVibe(Canvas canvas, Size size) {

    _brandCorner(canvas, size, bg: const Color(0xFF0E7490), fg: Colors.white);

    _drawInsetBanner(canvas, size, const [Color(0xFF06B6D4), Color(0xFF2DD4BF), Color(0xFF34D399)], triangles: true);

  }



  void _sportDynamic(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF1E40AF), fg: Colors.white);

    final r = l.bannerRect;

    canvas.save();

    canvas.translate(r.center.dx, r.center.dy);

    canvas.rotate(-0.035);

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromCenter(center: Offset.zero, width: r.width, height: r.height), const Radius.circular(10)),

      Paint()..color = const Color(0xFF2563EB).withValues(alpha: 0.9),

    );

    canvas.restore();

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(r.left, r.top + r.height * 0.55, r.width * 0.38, r.height * 0.42), const Radius.circular(6)),

      Paint()..color = const Color(0xFFDC2626),

    );

    _txt(canvas, headline.toUpperCase(), r.left + 12, r.top + r.height * 0.22, r.height * 0.34, Colors.white, FontWeight.w900, maxW: r.width - 16);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFF38BDF8), text: Colors.white70);

  }



  void _podcastPro(Canvas canvas, Size size) {

    final l = _l(size);

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(18)), Paint()..color = const Color(0xFF18181B).withValues(alpha: 0.82));

    canvas.drawCircle(Offset(r.left + r.height * 0.42, r.center.dy), r.height * 0.28, Paint()..color = const Color(0xFF7C3AED));

    _txt(canvas, title.toUpperCase(), r.left + r.height * 0.78, r.top + r.height * 0.22, r.height * 0.22, const Color(0xFFA78BFA), FontWeight.w800);

    _txt(canvas, headline, r.left + r.height * 0.78, r.top + r.height * 0.50, r.height * 0.28, Colors.white, FontWeight.w700, maxW: r.width - r.height * 0.9);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFF7C3AED), text: Colors.white60);

  }



  void _newsFlash(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: Colors.white, fg: const Color(0xFFDC2626));

    final r = l.bannerRect;

    final badgeW = r.width * 0.24;

    canvas.drawRRect(
      RRect.fromRectAndCorners(
        Rect.fromLTWH(r.left, r.top, badgeW, r.height),
        topLeft: const Radius.circular(12),
        bottomLeft: const Radius.circular(12),
      ),
      Paint()..color = const Color(0xFFDC2626),
    );

    _txt(canvas, 'NEWS', r.left + 8, r.top + r.height * 0.30, r.height * 0.34, Colors.white, FontWeight.w900);

    canvas.drawRRect(

      RRect.fromRectAndRadius(Rect.fromLTWH(r.left + badgeW - 4, r.top, r.width - badgeW + 4, r.height), const Radius.circular(12)),

      Paint()..color = const Color(0xFF1E3A8A).withValues(alpha: 0.92),

    );

    _txt(canvas, headline.toUpperCase(), r.left + badgeW + 8, r.top + r.height * 0.28, r.height * 0.34, Colors.white, FontWeight.w900, maxW: r.width - badgeW - 14);

    _socialFooter(canvas, size, bg: const Color(0xFF0F172A), accent: const Color(0xFFDC2626), text: Colors.white70);

  }



  void _cleanMinimal(Canvas canvas, Size size) {

    final l = _l(size);

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(16)), Paint()..color = Colors.white.withValues(alpha: 0.9));

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.28, r.height * 0.40, Colors.black87, FontWeight.w800, maxW: r.width - 24);

    if (title.trim().isNotEmpty) {

      _txt(canvas, title, l.brandRect.left, l.brandRect.top + l.brandRect.height * 0.28, l.brandRect.height * 0.36, Colors.white, FontWeight.w700);

    }

    _socialFooter(canvas, size, bg: const Color(0xFF111827), accent: Colors.white54, text: Colors.white60);

  }



  void _luxuryDark(Canvas canvas, Size size) {

    final l = _l(size);

    _brandCorner(canvas, size, bg: const Color(0xFF27272A), fg: const Color(0xFFD4D4D8));

    final r = l.bannerRect;

    canvas.drawRRect(RRect.fromRectAndRadius(r, const Radius.circular(14)), Paint()..color = const Color(0xFF09090B).withValues(alpha: 0.82));

    for (var i = 0; i < 4; i++) {

      final x0 = r.left + r.width * i / 4;

      final x1 = r.left + r.width * (i + 1) / 4 - 6;

      canvas.drawLine(Offset(x0, r.top), Offset(x1, r.bottom), Paint()..color = const Color(0xFF52525B).withValues(alpha: 0.3)..strokeWidth = 1);

    }

    _txt(canvas, headline.toUpperCase(), r.left + 14, r.top + r.height * 0.30, r.height * 0.32, const Color(0xFFFAFAFA), FontWeight.w800, maxW: r.width - 24);

    _socialFooter(canvas, size, bg: Colors.black, accent: const Color(0xFFA1A1AA), text: const Color(0xFFD4D4D8));

  }



  void _luxuryBanner(
    Canvas canvas,
    Size size, {
    required List<Color> bannerColors,
    required Color brandBg,
    required Color brandFg,
    required Color footerBg,
    required Color accent,
    required Color textColor,
    String badge = 'EXCLUSIVE',
    bool crown = false,
    bool marble = false,
    bool crimsonVelvet = false,
  }) {
    final l = _l(size);
    _brandCorner(canvas, size, bg: brandBg, fg: brandFg);
    final r = l.bannerRect;
    final rr = RRect.fromRectAndRadius(r, const Radius.circular(16));
    if (marble) {
      canvas.drawRRect(
        rr,
        Paint()
          ..shader = LinearGradient(
            colors: const [Color(0xFFF5F5F4), Color(0xFFE7E5E4), Color(0xFFD6D3D1), Color(0xFFF5F5F4)],
          ).createShader(r),
      );
    } else if (crimsonVelvet) {
      canvas.drawRRect(rr, Paint()..color = const Color(0xFF7F1D1D).withValues(alpha: 0.92));
    } else {
      canvas.drawRRect(
        rr,
        Paint()
          ..shader = LinearGradient(colors: bannerColors, begin: Alignment.centerLeft, end: Alignment.centerRight).createShader(r),
      );
    }
    canvas.drawRRect(
      rr,
      Paint()
        ..color = const Color(0xFFFBBF24).withValues(alpha: 0.85)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.2,
    );
    final badgeW = r.width * 0.2;
    canvas.drawRRect(
      RRect.fromRectAndCorners(Rect.fromLTWH(r.left, r.top, badgeW, r.height), topLeft: const Radius.circular(16), bottomLeft: const Radius.circular(16)),
      Paint()..color = accent.withValues(alpha: 0.95),
    );
    _txt(canvas, badge, r.left + 8, r.top + r.height * 0.30, r.height * 0.30, Colors.white, FontWeight.w900);
    if (crown) _drawMiniCrown(canvas, Offset(r.center.dx, r.top - 4));
    _txt(canvas, headline.toUpperCase(), r.left + badgeW + 10, r.top + r.height * 0.28, r.height * 0.34, textColor, FontWeight.w900, maxW: r.width - badgeW - 18);
    _socialFooter(canvas, size, bg: footerBg, accent: accent, text: textColor.withValues(alpha: 0.82));
  }



  void _drawMiniCrown(Canvas canvas, Offset topCenter) {
    final cw = 28.0;
    final path = Path()
      ..moveTo(topCenter.dx - cw / 2, topCenter.dy + 10)
      ..lineTo(topCenter.dx - cw * 0.3, topCenter.dy)
      ..lineTo(topCenter.dx, topCenter.dy + 6)
      ..lineTo(topCenter.dx + cw * 0.3, topCenter.dy)
      ..lineTo(topCenter.dx + cw / 2, topCenter.dy + 10)
      ..close();
    canvas.drawPath(path, Paint()..color = const Color(0xFFFBBF24));
    canvas.drawCircle(topCenter.translate(0, 4), 3, Paint()..color = const Color(0xFFEF4444));
  }



  void _imperialGold(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFF78350F), Color(0xFFD97706), Color(0xFFFBBF24)],
        brandBg: const Color(0xFF451A03),
        brandFg: const Color(0xFFFDE68A),
        footerBg: const Color(0xFF1C1917),
        accent: const Color(0xFFB45309),
        textColor: const Color(0xFFFFFBEB),
        badge: 'ROYAL',
        crown: true,
      );



  void _presidentialBlue(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFF1E3A8A), Color(0xFF1D4ED8), Color(0xFF3B82F6)],
        brandBg: const Color(0xFF0F172A),
        brandFg: Colors.white,
        footerBg: const Color(0xFF020617),
        accent: const Color(0xFFDC2626),
        textColor: Colors.white,
        badge: 'STATE',
      );



  void _royalCrimson(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFF7F1D1D), Color(0xFFB91C1C)],
        brandBg: const Color(0xFF450A0A),
        brandFg: const Color(0xFFFECACA),
        footerBg: const Color(0xFF1C1917),
        accent: const Color(0xFFFBBF24),
        textColor: const Color(0xFFFFF1F2),
        badge: 'REGAL',
        crimsonVelvet: true,
        crown: true,
      );



  void _diamondElite(Canvas c, Size s) {
    _luxuryBanner(
      c,
      s,
      bannerColors: const [Color(0xFF0F172A), Color(0xFF1E293B), Color(0xFF334155)],
      brandBg: const Color(0xFF020617),
      brandFg: const Color(0xFFBAE6FD),
      footerBg: Colors.black,
      accent: const Color(0xFF38BDF8),
      textColor: const Color(0xFFE0F2FE),
      badge: 'ELITE',
    );
    final l = _l(s);
    final r = l.bannerRect;
    for (var i = 0; i < 5; i++) {
      final x = r.right - 18 - i * 10.0;
      c.drawPath(
        Path()
          ..moveTo(x, r.top + 8)
          ..lineTo(x + 5, r.top + 14)
          ..lineTo(x + 10, r.top + 8)
          ..lineTo(x + 5, r.top + 2)
          ..close(),
        Paint()..color = const Color(0xFF67E8F9).withValues(alpha: 0.65),
      );
    }
  }



  void _marblePalace(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFFE7E5E4), Color(0xFFD6D3D1)],
        brandBg: const Color(0xFF57534E),
        brandFg: const Color(0xFFFAFAF9),
        footerBg: const Color(0xFF292524),
        accent: const Color(0xFFA8A29E),
        textColor: const Color(0xFF1C1917),
        badge: 'PALACE',
        marble: true,
      );



  void _velvetThrone(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFF4C1D95), Color(0xFF6D28D9)],
        brandBg: const Color(0xFF2E1065),
        brandFg: const Color(0xFFEDE9FE),
        footerBg: const Color(0xFF1E1B4B),
        accent: const Color(0xFFFBBF24),
        textColor: const Color(0xFFF5F3FF),
        badge: 'THRONE',
        crimsonVelvet: false,
        crown: true,
      );



  void _sovereignSilver(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFF374151), Color(0xFF6B7280), Color(0xFF9CA3AF)],
        brandBg: const Color(0xFF111827),
        brandFg: const Color(0xFFF3F4F6),
        footerBg: const Color(0xFF030712),
        accent: const Color(0xFFE5E7EB),
        textColor: const Color(0xFFF9FAFB),
        badge: 'SILVER',
      );



  void _crownJewelBanner(Canvas c, Size s) {
    _luxuryBanner(
      c,
      s,
      bannerColors: const [Color(0xFF312E81), Color(0xFF4C1D95), Color(0xFF7C3AED)],
      brandBg: const Color(0xFF1E1B4B),
      brandFg: const Color(0xFFFDE68A),
      footerBg: const Color(0xFF0F0A1E),
      accent: const Color(0xFFFBBF24),
      textColor: const Color(0xFFFFF7ED),
      badge: 'JEWEL',
      crown: true,
    );
    final l = _l(s);
    _drawMiniCrown(c, Offset(l.bannerRect.center.dx, l.bannerRect.top - 6));
  }



  void _executiveBrief(Canvas c, Size s) => _luxuryBanner(
        c,
        s,
        bannerColors: const [Color(0xFF0F172A), Color(0xFF1E293B)],
        brandBg: const Color(0xFF020617),
        brandFg: Colors.white,
        footerBg: Colors.black,
        accent: const Color(0xFF22C55E),
        textColor: Colors.white,
        badge: 'EXEC',
      );



  void _gildedHerald(Canvas c, Size s) {
    _luxuryBanner(
      c,
      s,
      bannerColors: const [Color(0xFF854D0E), Color(0xFFCA8A04), Color(0xFFFACC15)],
      brandBg: const Color(0xFF422006),
      brandFg: const Color(0xFFFEF9C3),
      footerBg: const Color(0xFF1C1917),
      accent: const Color(0xFFEA580C),
      textColor: const Color(0xFFFFFBEB),
      badge: 'HERALD',
      crown: true,
    );
    final l = _l(s);
    final r = l.bannerRect;
    c.drawLine(Offset(r.left, r.top), Offset(r.left + r.width * 0.35, r.top), Paint()..color = const Color(0xFFFEF08A)..strokeWidth = 3);
    c.drawLine(Offset(r.right, r.top), Offset(r.right - r.width * 0.35, r.top), Paint()..color = const Color(0xFFFEF08A)..strokeWidth = 3);
  }



  void _txt(

    Canvas c,

    String t,

    double x,

    double y,

    double fs,

    Color col,

    FontWeight w, {

    double maxW = double.infinity,

    TextAlign align = TextAlign.left,

  }) {

    if (t.trim().isEmpty) return;

    final tp = TextPainter(

      text: TextSpan(text: t, style: TextStyle(color: col, fontSize: fs, fontWeight: w, letterSpacing: 0.4)),

      textDirection: TextDirection.ltr,

      textAlign: align,

      maxLines: 3,

      ellipsis: '…',

    )..layout(maxWidth: maxW);

    var dx = x;

    if (align == TextAlign.right) dx = x - tp.width;

    if (align == TextAlign.center) dx = x - tp.width / 2;

    tp.paint(c, Offset(dx, y));

  }



  @override

  bool shouldRepaint(covariant NgmyNewsBannerPainter old) => true;

}


