import 'package:flutter/material.dart';

/// Lower-third news banner styles (from user reference sheet).
enum NgmyNewsBannerStyle {
  breakingCyan,
  hotOrange,
  fakeExclusive,
  worldGlobe,
  latestGlobe,
  fakeRounded,
  news24Breaking,
  news24Split,
  news24World,
  sportAngled,
  livePointed,
  morningAngled,
  breakingOnline,
  loremMessage,
  weatherBox,
}

extension NgmyNewsBannerStyleExt on NgmyNewsBannerStyle {
  String get label => switch (this) {
        NgmyNewsBannerStyle.breakingCyan => 'Breaking News',
        NgmyNewsBannerStyle.hotOrange => 'Hot News',
        NgmyNewsBannerStyle.fakeExclusive => 'Exclusive Fake',
        NgmyNewsBannerStyle.worldGlobe => 'World News',
        NgmyNewsBannerStyle.latestGlobe => 'Latest News',
        NgmyNewsBannerStyle.fakeRounded => 'Fake News Round',
        NgmyNewsBannerStyle.news24Breaking => '24 Breaking',
        NgmyNewsBannerStyle.news24Split => '24 Split News',
        NgmyNewsBannerStyle.news24World => '24 World',
        NgmyNewsBannerStyle.sportAngled => 'Sport News',
        NgmyNewsBannerStyle.livePointed => 'Live News',
        NgmyNewsBannerStyle.morningAngled => 'Morning News',
        NgmyNewsBannerStyle.breakingOnline => 'Breaking Online',
        NgmyNewsBannerStyle.loremMessage => 'Last Message',
        NgmyNewsBannerStyle.weatherBox => 'Weather Online',
      };
}

class NgmyNewsBannerPainter extends CustomPainter {
  final NgmyNewsBannerStyle style;
  final String headline;
  final String title;
  final String subtitle;
  final String liveLabel;
  final bool topAccent;
  final double scale;

  NgmyNewsBannerPainter({
    required this.style,
    required this.headline,
    required this.title,
    required this.subtitle,
    required this.liveLabel,
    this.topAccent = false,
    this.scale = 1.0,
  });

  @override
  void paint(Canvas canvas, Size size) {
    if (topAccent) _paintTopAccent(canvas, size);
    switch (style) {
      case NgmyNewsBannerStyle.breakingCyan:
        _breakingCyan(canvas, size);
        break;
      case NgmyNewsBannerStyle.hotOrange:
        _hotOrange(canvas, size);
        break;
      case NgmyNewsBannerStyle.fakeExclusive:
        _fakeExclusive(canvas, size);
        break;
      case NgmyNewsBannerStyle.worldGlobe:
        _worldGlobe(canvas, size);
        break;
      case NgmyNewsBannerStyle.latestGlobe:
        _latestGlobe(canvas, size);
        break;
      case NgmyNewsBannerStyle.fakeRounded:
        _fakeRounded(canvas, size);
        break;
      case NgmyNewsBannerStyle.news24Breaking:
        _news24Breaking(canvas, size);
        break;
      case NgmyNewsBannerStyle.news24Split:
        _news24Split(canvas, size);
        break;
      case NgmyNewsBannerStyle.news24World:
        _news24World(canvas, size);
        break;
      case NgmyNewsBannerStyle.sportAngled:
        _sportAngled(canvas, size);
        break;
      case NgmyNewsBannerStyle.livePointed:
        _livePointed(canvas, size);
        break;
      case NgmyNewsBannerStyle.morningAngled:
        _morningAngled(canvas, size);
        break;
      case NgmyNewsBannerStyle.breakingOnline:
        _breakingOnline(canvas, size);
        break;
      case NgmyNewsBannerStyle.loremMessage:
        _loremMessage(canvas, size);
        break;
      case NgmyNewsBannerStyle.weatherBox:
        _weatherBox(canvas, size);
        break;
    }
  }

  void _paintTopAccent(Canvas canvas, Size size) {
    final h = size.height * 0.06 * scale;
    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, h), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, liveLabel.toUpperCase(), size.width * 0.04, h * 0.15, h * 0.55, Colors.white, FontWeight.w900);
  }

  double get _barH => 0.14;

  void _breakingCyan(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh * 1.35;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.22, bh * 0.35), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, liveLabel.toUpperCase(), w * 0.02, top + bh * 0.05, bh * 0.22, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.32, w, bh * 0.55), Paint()..color = const Color(0xFF67E8F9));
    _txt(canvas, title.toUpperCase(), w * 0.03, top + bh * 0.42, bh * 0.38, Colors.black, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.88, w, bh * 0.45), Paint()..color = const Color(0xFF1E3A8A));
    _txt(canvas, headline, w * 0.03, top + bh * 0.95, bh * 0.28, Colors.white, FontWeight.w600, maxW: w * 0.92);
  }

  void _hotOrange(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(w * 0.08, top, w * 0.88, bh * 0.65), Paint()..color = const Color(0xFFF97316));
    _txt(canvas, title.toUpperCase(), w * 0.12, top + bh * 0.12, bh * 0.42, Colors.black, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.55, w * 0.18, bh * 0.45), Paint()..color = const Color(0xFFDC2626));
    canvas.drawRect(Rect.fromLTWH(w * 0.14, top + bh * 0.62, w * 0.08, bh * 0.3), Paint()..color = const Color(0xFFEAB308));
  }

  void _fakeExclusive(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh * 1.2;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.35, bh * 0.28), Paint()..color = const Color(0xFFEAB308));
    _txt(canvas, subtitle.toUpperCase(), w * 0.03, top + bh * 0.05, bh * 0.2, Colors.black, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.25, w, bh * 0.55), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, title.toUpperCase(), w * 0.04, top + bh * 0.38, bh * 0.4, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.82, w, bh * 0.35), Paint()..color = const Color(0xFF38BDF8));
    _txt(canvas, headline, w * 0.04, top + bh * 0.9, bh * 0.24, Colors.black, FontWeight.w600);
  }

  void _worldGlobe(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh * 1.15;
    canvas.drawCircle(Offset(w * 0.08, top + bh * 0.55), bh * 0.38, Paint()..color = const Color(0xFF1D4ED8));
    _txt(canvas, 'NEWS', w * 0.055, top + bh * 0.48, bh * 0.14, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.16, top + bh * 0.15, w * 0.82, bh * 0.55), Paint()..color = const Color(0xFF1E40AF));
    _txt(canvas, title.toUpperCase(), w * 0.2, top + bh * 0.32, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.16, top + bh * 0.72, w * 0.82, bh * 0.38), Paint()..color = const Color(0xFF67E8F9));
    _txt(canvas, headline, w * 0.2, top + bh * 0.8, bh * 0.24, Colors.black, FontWeight.w600);
  }

  void _latestGlobe(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawCircle(Offset(w * 0.08, top + bh * 0.45), bh * 0.32, Paint()..color = Colors.black);
    canvas.drawRect(Rect.fromLTWH(w * 0.15, top, w * 0.82, bh * 0.55), Paint()..color = const Color(0xFF2563EB));
    _txt(canvas, title.toUpperCase(), w * 0.18, top + bh * 0.12, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.15, top + bh * 0.58, w * 0.82, bh * 0.4), Paint()..color = const Color(0xFF93C5FD));
    _txt(canvas, headline, w * 0.18, top + bh * 0.66, bh * 0.26, Colors.black, FontWeight.w600);
  }

  void _fakeRounded(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRRect(
      RRect.fromRectAndRadius(Rect.fromLTWH(0, top, w * 0.55, bh * 0.55), const Radius.circular(28)),
      Paint()..color = const Color(0xFFDC2626),
    );
    _txt(canvas, title.toUpperCase(), w * 0.06, top + bh * 0.12, bh * 0.38, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.5, top + bh * 0.45, w * 0.48, bh * 0.5), Paint()..color = const Color(0xFFEAB308));
    _txt(canvas, headline, w * 0.54, top + bh * 0.58, bh * 0.28, Colors.black, FontWeight.w700);
  }

  void _news24Breaking(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.2, bh), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, '24', w * 0.04, top + bh * 0.15, bh * 0.35, Colors.white, FontWeight.w900);
    _txt(canvas, 'LIVE', w * 0.04, top + bh * 0.52, bh * 0.22, Colors.white, FontWeight.w700);
    canvas.drawRect(Rect.fromLTWH(w * 0.2, top + bh * 0.08, w * 0.78, bh * 0.45), Paint()..color = Colors.black87);
    _txt(canvas, title.toUpperCase(), w * 0.24, top + bh * 0.18, bh * 0.32, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.2, top + bh * 0.55, w * 0.78, bh * 0.42), Paint()..color = const Color(0xFFEAB308));
    _txt(canvas, headline, w * 0.24, top + bh * 0.65, bh * 0.26, Colors.black, FontWeight.w700);
  }

  void _news24Split(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.18, bh), Paint()..color = Colors.white);
    _txt(canvas, '24', w * 0.03, top + bh * 0.2, bh * 0.3, Colors.black, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.18, top, w * 0.82, bh * 0.48), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, subtitle.toUpperCase(), w * 0.22, top + bh * 0.1, bh * 0.28, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.18, top + bh * 0.48, w * 0.82, bh * 0.52), Paint()..color = const Color(0xFF1E3A8A));
    _txt(canvas, title.toUpperCase(), w * 0.22, top + bh * 0.58, bh * 0.35, Colors.white, FontWeight.w900);
  }

  void _news24World(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.2, bh), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, '24 LIVE', w * 0.02, top + bh * 0.28, bh * 0.28, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.2, top, w * 0.8, bh * 0.55), Paint()..color = const Color(0xFF1E40AF));
    _txt(canvas, title.toUpperCase(), w * 0.24, top + bh * 0.12, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(w * 0.2, top + bh * 0.58, w * 0.8, bh * 0.4), Paint()..color = const Color(0xFFEAB308));
    _txt(canvas, headline, w * 0.24, top + bh * 0.68, bh * 0.26, Colors.black, FontWeight.w700);
  }

  void _sportAngled(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh * 1.1;
    final path = Path()
      ..moveTo(0, top + bh)
      ..lineTo(w, top + bh * 0.35)
      ..lineTo(w, top)
      ..lineTo(0, top)
      ..close();
    canvas.drawPath(path, Paint()..color = const Color(0xFF2563EB));
    _txt(canvas, title.toUpperCase(), w * 0.05, top + bh * 0.15, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.55, w, bh * 0.48), Paint()..color = const Color(0xFF0F172A));
    _txt(canvas, headline, w * 0.04, top + bh * 0.65, bh * 0.28, Colors.white, FontWeight.w600);
  }

  void _livePointed(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.75, bh * 0.55), Paint()..color = const Color(0xFF1E3A8A));
    _txt(canvas, title.toUpperCase(), w * 0.04, top + bh * 0.12, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.58, w, bh * 0.4), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, headline, w * 0.04, top + bh * 0.68, bh * 0.26, Colors.white, FontWeight.w600);
  }

  void _morningAngled(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.7, bh * 0.55), Paint()..color = const Color(0xFF1E40AF));
    _txt(canvas, title.toUpperCase(), w * 0.04, top + bh * 0.12, bh * 0.32, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.58, w * 0.55, bh * 0.4), Paint()..color = const Color(0xFF67E8F9));
    _txt(canvas, liveLabel, w * 0.04, top + bh * 0.68, bh * 0.24, Colors.black, FontWeight.w800);
  }

  void _breakingOnline(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh * 1.15;
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.05, w * 0.28, bh * 0.25), Paint()..color = const Color(0xFF06B6D4));
    _txt(canvas, 'ONLINE', w * 0.03, top + bh * 0.1, bh * 0.18, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.28, w, bh * 0.5), Paint()..color = const Color(0xFF1E3A8A));
    _txt(canvas, title.toUpperCase(), w * 0.04, top + bh * 0.38, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.8, w, bh * 0.32), Paint()..color = const Color(0xFF38BDF8));
    _txt(canvas, headline, w * 0.04, top + bh * 0.88, bh * 0.22, Colors.black, FontWeight.w600);
  }

  void _loremMessage(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.62, bh * 0.55), Paint()..color = const Color(0xFFDC2626));
    _txt(canvas, title.toUpperCase(), w * 0.04, top + bh * 0.12, bh * 0.35, Colors.white, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.58, w, bh * 0.4), Paint()..color = const Color(0xFFEAB308));
    _txt(canvas, subtitle.toUpperCase(), w * 0.04, top + bh * 0.68, bh * 0.24, Colors.black, FontWeight.w800);
  }

  void _weatherBox(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;
    final bh = h * _barH * scale;
    final top = h - bh;
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.45, bh * 0.55), Paint()..color = Colors.white);
    canvas.drawRect(Rect.fromLTWH(0, top, w * 0.45, bh * 0.55), Paint()..style = PaintingStyle.stroke..strokeWidth = 3..color = Colors.black);
    _txt(canvas, title.toUpperCase(), w * 0.04, top + bh * 0.12, bh * 0.38, Colors.black, FontWeight.w900);
    canvas.drawRect(Rect.fromLTWH(0, top + bh * 0.58, w, bh * 0.4), Paint()..color = Colors.black);
    _txt(canvas, 'ONLINE', w * 0.04, top + bh * 0.68, bh * 0.26, Colors.white, FontWeight.w900);
  }

  void _txt(Canvas c, String t, double x, double y, double fs, Color col, FontWeight w, {double maxW = double.infinity}) {
    if (t.trim().isEmpty) return;
    final tp = TextPainter(
      text: TextSpan(text: t, style: TextStyle(color: col, fontSize: fs, fontWeight: w)),
      textDirection: TextDirection.ltr,
      maxLines: 2,
      ellipsis: '…',
    )..layout(maxWidth: maxW);
    tp.paint(c, Offset(x, y));
  }

  @override
  bool shouldRepaint(covariant NgmyNewsBannerPainter old) => true;
}
