import 'dart:ui' as ui;

import 'package:flutter/material.dart';

import 'ngmy_business_card_models.dart';

/// Renders business cards with distinct modern layouts (not color-only variants).
class NgmyBusinessCardPreview extends StatelessWidget {
  const NgmyBusinessCardPreview({
    super.key,
    required this.document,
    this.width = 350,
    this.interactive = false,
    this.onElementDrag,
  });

  final NgmyBusinessCardDocument document;
  final double width;
  final bool interactive;
  final void Function(String elementId, Offset delta)? onElementDrag;

  @override
  Widget build(BuildContext context) {
    final h = width / kNgmyBusinessCardAspect;
    final tpl = document.template;
    return Material(
      color: Colors.transparent,
      child: Container(
        width: width,
        height: h,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(14),
          boxShadow: [
            BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 20, offset: const Offset(0, 10)),
          ],
        ),
        clipBehavior: Clip.antiAlias,
        child: _NgmyCardRenderBody(
          document: document,
          tpl: tpl,
          width: width,
          height: h,
          interactive: interactive,
          onElementDrag: onElementDrag,
        ),
      ),
    );
  }
}

class _NgmyCardRenderBody extends StatelessWidget {
  const _NgmyCardRenderBody({
    required this.document,
    required this.tpl,
    required this.width,
    required this.height,
    required this.interactive,
    this.onElementDrag,
  });

  final NgmyBusinessCardDocument document;
  final NgmyBusinessCardTemplate tpl;
  final double width;
  final double height;
  final bool interactive;
  final void Function(String elementId, Offset delta)? onElementDrag;

  @override
  Widget build(BuildContext context) {
    final ctx = _CardRenderCtx(
      doc: document,
      tpl: tpl,
      w: width,
      h: height,
      interactive: interactive,
      onDrag: onElementDrag,
    );
    return switch (tpl.renderStyle) {
      'glass_frost' => _layoutGlassFrost(ctx),
      'vertical_split' => _layoutVerticalSplit(ctx),
      'mega_type' => _layoutMegaType(ctx),
      'orbit' => _layoutOrbit(ctx),
      'metro_bento' => _layoutMetroBento(ctx),
      'wave_curve' => _layoutWaveCurve(ctx),
      'neon_frame' => _layoutNeonFrame(ctx),
      'editorial' => _layoutEditorial(ctx),
      'hero_strip' => _layoutHeroStrip(ctx),
      'pill_row' => _layoutPillRow(ctx),
      'fold_corner' => _layoutFoldCorner(ctx),
      'bubble_duotone' => _layoutBubbleDuotone(ctx),
      'ultra_minimal' => _layoutUltraMinimal(ctx),
      'gold_luxe' => _layoutGoldLuxe(ctx),
      'pastel_inset' => _layoutPastelInset(ctx),
      'terminal' => _layoutTerminal(ctx),
      'blueprint' => _layoutBlueprint(ctx),
      'depth_stack' => _layoutDepthStack(ctx),
      'ribbon' => _layoutRibbon(ctx),
      'mesh_dots' => _layoutMeshDots(ctx),
      _ => _layoutVerticalSplit(ctx),
    };
  }
}

class _CardRenderCtx {
  _CardRenderCtx({
    required this.doc,
    required this.tpl,
    required this.w,
    required this.h,
    required this.interactive,
    this.onDrag,
  });

  final NgmyBusinessCardDocument doc;
  final NgmyBusinessCardTemplate tpl;
  final double w;
  final double h;
  final bool interactive;
  final void Function(String elementId, Offset delta)? onDrag;

  Color get accent => doc.effectiveAccent;
  Color get text => doc.effectiveText;
  Color get sub => doc.effectiveSubtext;
  Color get bg1 => doc.backgroundColor ?? tpl.bgStart;
  Color get bg2 => doc.backgroundColor ?? tpl.bgEnd;

  Widget slot(String id, Widget child, {double? left, double? top, double? right, double? bottom}) {
    if (!ngmyCardElementVisible(doc, id)) return const SizedBox.shrink();
    final o = ngmyCardElementOffset(doc, id);
    return Positioned(
      left: left != null ? left + o.dx : null,
      top: top != null ? top + o.dy : null,
      right: right,
      bottom: bottom,
      child: interactive && onDrag != null
          ? _DraggableCardElement(
              onDrag: (d) => onDrag!(id, Offset(o.dx + d.dx, o.dy + d.dy)),
              child: child,
            )
          : child,
    );
  }

  Widget txt(String s, {double? size, FontWeight? weight, Color? color, int maxLines = 2, double? letterSpacing}) {
    if (s.trim().isEmpty) return const SizedBox.shrink();
    return Text(
      s,
      maxLines: maxLines,
      overflow: TextOverflow.ellipsis,
      style: TextStyle(
        color: color ?? text,
        fontWeight: weight ?? FontWeight.w700,
        fontSize: size ?? h * 0.058,
        height: 1.12,
        letterSpacing: letterSpacing,
      ),
    );
  }

  Widget logo(double size, {BorderRadius? radius}) {
    final bytes = doc.logoBytes;
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        borderRadius: radius ?? BorderRadius.circular(size * 0.22),
        gradient: bytes == null ? LinearGradient(colors: [accent.withValues(alpha: 0.35), accent.withValues(alpha: 0.08)]) : null,
        image: bytes != null ? DecorationImage(image: MemoryImage(bytes), fit: BoxFit.cover) : null,
        border: Border.all(color: accent.withValues(alpha: 0.45), width: 1.2),
      ),
      child: bytes == null ? Icon(Icons.person_rounded, color: accent, size: size * 0.42) : null,
    );
  }
}

// ─── Layout 1: Glass frost ───────────────────────────────────────────────────
Widget _layoutGlassFrost(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      Positioned(right: -c.w * 0.15, top: -c.h * 0.2, child: CircleAvatar(radius: c.h * 0.55, backgroundColor: c.accent.withValues(alpha: 0.22))),
      Positioned(left: -c.w * 0.1, bottom: -c.h * 0.25, child: CircleAvatar(radius: c.h * 0.45, backgroundColor: Colors.white.withValues(alpha: 0.08))),
      ClipRRect(
        child: BackdropFilter(
          filter: ui.ImageFilter.blur(sigmaX: 8, sigmaY: 8),
          child: Container(color: Colors.white.withValues(alpha: 0.06)),
        ),
      ),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.12, weight: FontWeight.w900), left: 16, top: 18),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.055), left: 16, top: c.h * 0.34),
      c.slot('company', c.txt(c.doc.company, weight: FontWeight.w800, color: c.accent, size: c.h * 0.052), left: 16, top: c.h * 0.46),
      c.slot('phone', c.txt('📞 ${c.doc.phone}', color: c.sub, size: c.h * 0.048), left: 16, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.sub, size: c.h * 0.046), left: 16, bottom: 12),
      c.slot('logo', c.logo(c.h * 0.38), right: 14, top: 14),
    ],
  );
}

// ─── Layout 2: Vertical split ───────────────────────────────────────────────
Widget _layoutVerticalSplit(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Row(
        children: [
          Container(width: c.w * 0.36, color: c.accent),
          Expanded(child: Container(color: c.bg2)),
        ],
      ),
      Positioned(left: 12, top: 0, bottom: 0, width: c.w * 0.32, child: Center(child: c.logo(c.h * 0.42, radius: BorderRadius.circular(999)))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900, color: c.bg1.computeLuminance() > 0.5 ? c.text : Colors.white), left: c.w * 0.4, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.05), left: c.w * 0.4, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, weight: FontWeight.w800, size: c.h * 0.048), left: c.w * 0.4, top: c.h * 0.44),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.044), left: c.w * 0.4, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.accent, size: c.h * 0.042), left: c.w * 0.4, bottom: 12),
      c.slot('website', c.txt(c.doc.website, color: c.sub, size: c.h * 0.04), right: 10, bottom: 12),
    ],
  );
}

// ─── Layout 3: Mega typography ──────────────────────────────────────────────
Widget _layoutMegaType(_CardRenderCtx c) {
  final first = c.doc.fullName.split(' ').first;
  final last = c.doc.fullName.split(' ').length > 1 ? c.doc.fullName.split(' ').sublist(1).join(' ') : '';
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Positioned(left: -8, top: -6, child: Text(first.toUpperCase(), style: TextStyle(fontSize: c.h * 0.42, fontWeight: FontWeight.w900, color: c.accent.withValues(alpha: 0.12), height: 0.85))),
      c.slot('name', Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        c.txt(first, size: c.h * 0.18, weight: FontWeight.w900, letterSpacing: -0.5),
        if (last.isNotEmpty) c.txt(last, size: c.h * 0.12, weight: FontWeight.w300, letterSpacing: 2),
      ]), left: 14, top: 12),
      c.slot('title', c.txt(c.doc.jobTitle.toUpperCase(), color: c.accent, size: c.h * 0.045, letterSpacing: 1.2), left: 14, top: c.h * 0.58),
      c.slot('phone', c.txt(c.doc.phone, size: c.h * 0.04, color: c.sub), left: 14, bottom: 28),
      c.slot('email', c.txt(c.doc.email, size: c.h * 0.04, color: c.sub), right: 14, bottom: 12),
    ],
  );
}

// ─── Layout 4: Orbit ──────────────────────────────────────────────────────────
Widget _layoutOrbit(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: RadialGradient(center: Alignment.topCenter, radius: 1.2, colors: [c.accent.withValues(alpha: 0.35), c.bg1, c.bg2]))),
      Center(child: Container(width: c.h * 0.52, height: c.h * 0.52, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: c.accent.withValues(alpha: 0.35), width: 2)))),
      c.slot('logo', c.logo(c.h * 0.38, radius: BorderRadius.circular(999)), left: c.w * 0.5 - c.h * 0.19, top: c.h * 0.08),
      c.slot('name', Center(child: c.txt(c.doc.fullName, size: c.h * 0.09, weight: FontWeight.w900)), left: 12, right: 12, top: c.h * 0.52),
      c.slot('title', Center(child: c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.048)), left: 12, right: 12, top: c.h * 0.66),
      c.slot('phone', Center(child: c.txt(c.doc.phone, color: c.accent, size: c.h * 0.042)), left: 12, right: 12, bottom: 10),
    ],
  );
}

// ─── Layout 5: Metro bento ───────────────────────────────────────────────────
Widget _layoutMetroBento(_CardRenderCtx c) {
  Widget cell(String id, String val, {Color? bg}) {
    return c.slot(
      id,
      Container(
        padding: const EdgeInsets.all(6),
        decoration: BoxDecoration(color: bg ?? Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(8)),
        child: c.txt(val, size: c.h * 0.038, maxLines: 1),
      ),
      left: 0,
      top: 0,
    );
  }

  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Padding(
        padding: const EdgeInsets.all(10),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900), left: 0, top: 0),
            c.slot('company', c.txt(c.doc.company, color: c.accent, size: c.h * 0.05), left: 0, top: 0),
            const SizedBox(height: 8),
            Expanded(
              child: Row(
                children: [
                  Expanded(child: Column(children: [
                    Expanded(child: cell('phone', c.doc.phone, bg: c.accent.withValues(alpha: 0.2))),
                    const SizedBox(height: 4),
                    Expanded(child: cell('email', c.doc.email)),
                  ])),
                  const SizedBox(width: 4),
                  Expanded(child: Column(children: [
                    Expanded(child: cell('website', c.doc.website)),
                    const SizedBox(height: 4),
                    Expanded(child: cell('address', c.doc.address, bg: c.accent.withValues(alpha: 0.12))),
                  ])),
                ],
              ),
            ),
          ],
        ),
      ),
    ],
  );
}

// ─── Layout 6: Wave curve ───────────────────────────────────────────────────
Widget _layoutWaveCurve(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      CustomPaint(painter: _WavePainter(c.accent.withValues(alpha: 0.92)), size: Size.infinite),
      c.slot('logo', c.logo(c.h * 0.3), left: 14, top: 12),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: 14, top: c.h * 0.08),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white.withValues(alpha: 0.85), size: c.h * 0.05), left: 14, top: c.h * 0.28),
      c.slot('company', c.txt(c.doc.company, color: c.sub, size: c.h * 0.048), left: 14, bottom: 36),
      c.slot('phone', c.txt(c.doc.phone, color: c.text, size: c.h * 0.042), left: 14, bottom: 20),
      c.slot('email', c.txt(c.doc.email, color: c.sub, size: c.h * 0.04), left: 14, bottom: 6),
    ],
  );
}

class _WavePainter extends CustomPainter {
  _WavePainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(0, size.height * 0.55)
      ..quadraticBezierTo(size.width * 0.25, size.height * 0.38, size.width * 0.5, size.height * 0.52)
      ..quadraticBezierTo(size.width * 0.78, size.height * 0.68, size.width, size.height * 0.48)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(path, Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ─── Layout 7: Neon frame ─────────────────────────────────────────────────────
Widget _layoutNeonFrame(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: const Color(0xFF020617)),
      Container(margin: const EdgeInsets.all(8), decoration: BoxDecoration(border: Border.all(color: c.accent, width: 1.5), borderRadius: BorderRadius.circular(10))),
      Container(margin: const EdgeInsets.all(12), decoration: BoxDecoration(border: Border.all(color: c.accent.withValues(alpha: 0.35), width: 1), borderRadius: BorderRadius.circular(8))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900, color: c.accent), left: 20, top: 20),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white70, size: c.h * 0.05), left: 20, top: c.h * 0.36),
      c.slot('tagline', c.txt(c.doc.tagline, color: c.accent.withValues(alpha: 0.7), size: c.h * 0.042, letterSpacing: 0.8), left: 20, top: c.h * 0.48),
      c.slot('phone', c.txt('T ${c.doc.phone}', color: Colors.white60, size: c.h * 0.04), left: 20, bottom: 28),
      c.slot('email', c.txt('E ${c.doc.email}', color: Colors.white60, size: c.h * 0.038), left: 20, bottom: 12),
    ],
  );
}

// ─── Layout 8: Editorial ──────────────────────────────────────────────────────
Widget _layoutEditorial(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Center(child: Container(width: c.w * 0.55, height: 1, color: c.accent.withValues(alpha: 0.5))),
      c.slot('name', Center(child: c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w300, letterSpacing: 3)), left: 12, right: 12, top: c.h * 0.22),
      c.slot('title', Center(child: c.txt(c.doc.jobTitle.toUpperCase(), color: c.accent, size: c.h * 0.042, letterSpacing: 2)), left: 12, right: 12, top: c.h * 0.48),
      c.slot('company', Center(child: c.txt(c.doc.company, color: c.sub, size: c.h * 0.045)), left: 12, right: 12, bottom: 28),
      c.slot('website', Center(child: c.txt(c.doc.website, color: c.sub, size: c.h * 0.038)), left: 12, right: 12, bottom: 10),
    ],
  );
}

// ─── Layout 9: Hero strip ─────────────────────────────────────────────────────
Widget _layoutHeroStrip(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Column(children: [
        Container(height: c.h * 0.38, width: double.infinity, decoration: BoxDecoration(gradient: LinearGradient(colors: [c.accent, c.accent.withValues(alpha: 0.65)]))),
        Expanded(child: Container(color: c.bg2)),
      ]),
      c.slot('logo', c.logo(c.h * 0.32, radius: BorderRadius.circular(999)), left: 14, top: c.h * 0.2),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900, color: Colors.white), left: c.w * 0.32, top: c.h * 0.1),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white.withValues(alpha: 0.88), size: c.h * 0.048), left: c.w * 0.32, top: c.h * 0.24),
      c.slot('company', c.txt(c.doc.company, weight: FontWeight.w800, size: c.h * 0.052), left: 14, top: c.h * 0.44),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.044), left: 14, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.sub, size: c.h * 0.042), left: 14, bottom: 12),
    ],
  );
}

// ─── Layout 10: Pill row ──────────────────────────────────────────────────────
Widget _layoutPillRow(_CardRenderCtx c) {
  Widget pill(String id, String label) {
    if (label.trim().isEmpty) return const SizedBox.shrink();
    return c.slot(
      id,
      Container(
        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
        decoration: BoxDecoration(color: c.accent.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(20), border: Border.all(color: c.accent.withValues(alpha: 0.35))),
        child: Text(label, style: TextStyle(color: c.text, fontSize: c.h * 0.034, fontWeight: FontWeight.w700), overflow: TextOverflow.ellipsis),
      ),
      left: 0,
      top: 0,
    );
  }

  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.bg1, c.bg2]))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.12, weight: FontWeight.w900), left: 16, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.05), left: 16, top: c.h * 0.34),
      c.slot('company', c.txt(c.doc.company, color: c.accent, weight: FontWeight.w800, size: c.h * 0.048), left: 16, top: c.h * 0.46),
      Positioned(
        left: 12,
        right: 12,
        bottom: 10,
        child: Wrap(spacing: 4, runSpacing: 4, children: [
          pill('phone', c.doc.phone),
          pill('email', c.doc.email),
          pill('website', c.doc.website),
        ]),
      ),
    ],
  );
}

// ─── Layout 11: Fold corner ───────────────────────────────────────────────────
Widget _layoutFoldCorner(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      CustomPaint(painter: _FoldPainter(c.accent), size: Size.infinite),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: 14, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.05), left: 14, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, weight: FontWeight.w800, size: c.h * 0.048), left: 14, top: c.h * 0.44),
      c.slot('address', c.txt(c.doc.address, color: c.sub, size: c.h * 0.04), left: 14, bottom: 12),
      c.slot('phone', c.txt(c.doc.phone, color: Colors.white, size: c.h * 0.038), right: 18, top: 18),
    ],
  );
}

class _FoldPainter extends CustomPainter {
  _FoldPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(size.width, 0)
      ..lineTo(size.width, size.height * 0.32)
      ..lineTo(size.width * 0.68, 0)
      ..close();
    canvas.drawPath(path, Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ─── Layout 12: Bubble duotone ────────────────────────────────────────────────
Widget _layoutBubbleDuotone(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Positioned(right: -c.w * 0.12, top: -c.h * 0.15, child: CircleAvatar(radius: c.h * 0.5, backgroundColor: c.accent.withValues(alpha: 0.25))),
      Positioned(left: -c.w * 0.08, bottom: -c.h * 0.2, child: CircleAvatar(radius: c.h * 0.38, backgroundColor: c.bg2.withValues(alpha: 0.9))),
      c.slot('logo', c.logo(c.h * 0.34, radius: BorderRadius.circular(999)), left: 14, top: 14),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: 14, top: c.h * 0.52),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.048), left: 14, top: c.h * 0.68),
      c.slot('email', c.txt(c.doc.email, color: c.accent, size: c.h * 0.042), right: 14, bottom: 12),
    ],
  );
}

// ─── Layout 13: Ultra minimal ───────────────────────────────────────────────
Widget _layoutUltraMinimal(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: Colors.white),
      Positioned(left: 18, top: 0, bottom: 0, child: Container(width: 2, color: c.accent)),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900, color: const Color(0xFF0F172A)), left: 28, top: 20),
      c.slot('title', c.txt(c.doc.jobTitle, color: const Color(0xFF64748B), size: c.h * 0.048), left: 28, top: c.h * 0.36),
      c.slot('phone', c.txt(c.doc.phone, color: const Color(0xFF334155), size: c.h * 0.04), left: 28, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: const Color(0xFF334155), size: c.h * 0.038), left: 28, bottom: 12),
    ],
  );
}

// ─── Layout 14: Gold luxe ─────────────────────────────────────────────────────
Widget _layoutGoldLuxe(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: const BoxDecoration(gradient: LinearGradient(colors: [Color(0xFF0A0A0A), Color(0xFF171717)]))),
      Positioned(left: 14, right: 14, top: 14, child: Container(height: 1, color: const Color(0xFFD4AF37))),
      Positioned(left: 14, right: 14, bottom: 14, child: Container(height: 1, color: const Color(0xFFD4AF37).withValues(alpha: 0.45))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w300, color: const Color(0xFFFAFAF9), letterSpacing: 2), left: 20, top: 28),
      c.slot('title', c.txt(c.doc.jobTitle.toUpperCase(), color: const Color(0xFFD4AF37), size: c.h * 0.042, letterSpacing: 1.5), left: 20, top: c.h * 0.42),
      c.slot('company', c.txt(c.doc.company, color: Colors.white54, size: c.h * 0.045), left: 20, bottom: 36),
      c.slot('phone', c.txt(c.doc.phone, color: Colors.white38, size: c.h * 0.038), left: 20, bottom: 18),
      const Positioned(right: 18, top: 22, child: Icon(Icons.diamond_outlined, color: Color(0xFFD4AF37), size: 16)),
    ],
  );
}

// ─── Layout 15: Pastel inset ──────────────────────────────────────────────────
Widget _layoutPastelInset(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      Center(
        child: Container(
          width: c.w * 0.88,
          height: c.h * 0.78,
          decoration: BoxDecoration(
            color: Colors.white.withValues(alpha: 0.72),
            borderRadius: BorderRadius.circular(16),
            boxShadow: [BoxShadow(color: c.accent.withValues(alpha: 0.15), blurRadius: 12, offset: const Offset(0, 6))],
          ),
          padding: const EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.09, weight: FontWeight.w900, color: const Color(0xFF1E293B)), left: 0, top: 0),
              c.slot('title', c.txt(c.doc.jobTitle, color: const Color(0xFF64748B), size: c.h * 0.045), left: 0, top: 0),
              const Spacer(),
              c.slot('phone', c.txt(c.doc.phone, color: const Color(0xFF475569), size: c.h * 0.038), left: 0, top: 0),
              c.slot('email', c.txt(c.doc.email, color: c.accent, size: c.h * 0.036), left: 0, top: 0),
            ],
          ),
        ),
      ),
    ],
  );
}

// ─── Layout 16: Terminal HUD ──────────────────────────────────────────────────
Widget _layoutTerminal(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: const Color(0xFF0D1117)),
      CustomPaint(painter: _GridPainter(Colors.green.withValues(alpha: 0.04), 12), size: Size.infinite),
      c.slot('name', c.txt('> ${c.doc.fullName}', size: c.h * 0.08, weight: FontWeight.w700, color: const Color(0xFF3FB950)), left: 12, top: 12),
      c.slot('title', c.txt('[role] ${c.doc.jobTitle}', color: const Color(0xFF8B949E), size: c.h * 0.042), left: 12, top: c.h * 0.28),
      c.slot('company', c.txt('[org] ${c.doc.company}', color: const Color(0xFF58A6FF), size: c.h * 0.04), left: 12, top: c.h * 0.4),
      c.slot('phone', c.txt('tel:${c.doc.phone}', color: const Color(0xFF3FB950), size: c.h * 0.036), left: 12, bottom: 28),
      c.slot('email', c.txt('mail:${c.doc.email}', color: const Color(0xFF8B949E), size: c.h * 0.034), left: 12, bottom: 12),
      Positioned(right: 10, bottom: 10, child: Container(width: 8, height: 14, color: const Color(0xFF3FB950).withValues(alpha: 0.8))),
    ],
  );
}

// ─── Layout 17: Blueprint ─────────────────────────────────────────────────────
Widget _layoutBlueprint(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: const Color(0xFF1E3A8A)),
      CustomPaint(painter: _GridPainter(Colors.white.withValues(alpha: 0.08), 10), size: Size.infinite),
      CustomPaint(painter: _CrosshairPainter(Colors.white.withValues(alpha: 0.12)), size: Size.infinite),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900, color: Colors.white), left: 14, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white70, size: c.h * 0.048), left: 14, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, color: const Color(0xFF93C5FD), size: c.h * 0.045), left: 14, bottom: 28),
      c.slot('website', c.txt(c.doc.website, color: Colors.white60, size: c.h * 0.038), left: 14, bottom: 10),
    ],
  );
}

class _GridPainter extends CustomPainter {
  _GridPainter(this.color, this.step);
  final Color color;
  final double step;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 0.5;
    for (var x = 0.0; x < size.width; x += step) {
      canvas.drawLine(Offset(x, 0), Offset(x, size.height), paint);
    }
    for (var y = 0.0; y < size.height; y += step) {
      canvas.drawLine(Offset(0, y), Offset(size.width, y), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _CrosshairPainter extends CustomPainter {
  _CrosshairPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 1;
    canvas.drawLine(Offset(size.width * 0.72, 0), Offset(size.width * 0.72, size.height), paint);
    canvas.drawLine(Offset(0, size.height * 0.55), Offset(size.width, size.height * 0.55), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ─── Layout 18: Depth stack ─────────────────────────────────────────────────────
Widget _layoutDepthStack(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(margin: const EdgeInsets.only(left: 10, top: 10), decoration: BoxDecoration(color: c.accent.withValues(alpha: 0.25), borderRadius: BorderRadius.circular(12))),
      Container(margin: const EdgeInsets.only(left: 5, top: 5), decoration: BoxDecoration(color: c.accent.withValues(alpha: 0.45), borderRadius: BorderRadius.circular(12))),
      Container(decoration: BoxDecoration(color: c.bg1, borderRadius: BorderRadius.circular(12), border: Border.all(color: c.accent.withValues(alpha: 0.3)))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: 16, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.05), left: 16, top: c.h * 0.34),
      c.slot('company', c.txt(c.doc.company, color: c.accent, weight: FontWeight.w800, size: c.h * 0.048), left: 16, top: c.h * 0.46),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.042), left: 16, bottom: 12),
    ],
  );
}

// ─── Layout 19: Ribbon ────────────────────────────────────────────────────────
Widget _layoutRibbon(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      CustomPaint(painter: _RibbonPainter(c.accent), size: Size.infinite),
      c.slot('company', c.txt(c.doc.company.toUpperCase(), color: Colors.white, size: c.h * 0.038, weight: FontWeight.w900, letterSpacing: 1), left: c.w * 0.08, top: c.h * 0.06),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900), left: 14, top: c.h * 0.38),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.048), left: 14, top: c.h * 0.56),
      c.slot('email', c.txt(c.doc.email, color: c.accent, size: c.h * 0.042), left: 14, bottom: 12),
    ],
  );
}

class _RibbonPainter extends CustomPainter {
  _RibbonPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()
      ..moveTo(0, 0)
      ..lineTo(size.width * 0.55, 0)
      ..lineTo(size.width * 0.42, size.height * 0.28)
      ..lineTo(0, size.height * 0.28)
      ..close();
    canvas.drawPath(path, Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ─── Layout 20: Mesh dots ─────────────────────────────────────────────────────
Widget _layoutMeshDots(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      CustomPaint(painter: _DotMeshPainter(c.accent.withValues(alpha: 0.18)), size: Size.infinite),
      c.slot('logo', c.logo(c.h * 0.28), right: 12, top: 12),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900), left: 14, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.05), left: 14, top: c.h * 0.32),
      c.slot('tagline', c.txt(c.doc.tagline, color: c.accent, size: c.h * 0.042), left: 14, top: c.h * 0.44),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.04), left: 14, bottom: 28),
      c.slot('website', c.txt(c.doc.website, color: c.sub, size: c.h * 0.038), left: 14, bottom: 10),
    ],
  );
}

class _DotMeshPainter extends CustomPainter {
  _DotMeshPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color;
    const step = 14.0;
    for (var x = 0.0; x < size.width; x += step) {
      for (var y = 0.0; y < size.height; y += step) {
        canvas.drawCircle(Offset(x, y), 1.2, paint);
      }
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _DraggableCardElement extends StatefulWidget {
  const _DraggableCardElement({required this.child, required this.onDrag});
  final Widget child;
  final ValueChanged<Offset> onDrag;

  @override
  State<_DraggableCardElement> createState() => _DraggableCardElementState();
}

class _DraggableCardElementState extends State<_DraggableCardElement> {
  Offset _drag = Offset.zero;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onPanUpdate: (d) => setState(() => _drag += d.delta),
      onPanEnd: (_) {
        widget.onDrag(_drag);
        setState(() => _drag = Offset.zero);
      },
      child: Transform.translate(
        offset: _drag,
        child: DecoratedBox(
          decoration: BoxDecoration(
            border: Border.all(color: const Color(0xFF22C55E).withValues(alpha: 0.4)),
            borderRadius: BorderRadius.circular(4),
          ),
          child: widget.child,
        ),
      ),
    );
  }
}

/// Mini thumbnail for template picker.
Widget ngmyBusinessCardTemplateThumb(NgmyBusinessCardTemplate tpl, {double width = 118}) {
  final doc = NgmyBusinessCardDocument(templateId: tpl.id);
  return ClipRRect(
    borderRadius: BorderRadius.circular(10),
    child: SizedBox(
      width: width,
      height: width / kNgmyBusinessCardAspect,
      child: NgmyBusinessCardPreview(document: doc, width: width, interactive: false),
    ),
  );
}
