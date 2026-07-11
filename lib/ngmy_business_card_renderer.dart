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
    this.onElementSelect,
    this.selectedElementId,
  });

  final NgmyBusinessCardDocument document;
  final double width;
  final bool interactive;
  final void Function(String elementId, Offset delta)? onElementDrag;
  final void Function(String elementId)? onElementSelect;
  final String? selectedElementId;

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
          border: document.borderColor != null ? Border.all(color: document.borderColor!, width: 2.5) : null,
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
          onElementSelect: onElementSelect,
          selectedElementId: selectedElementId,
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
    this.onElementSelect,
    this.selectedElementId,
  });

  final NgmyBusinessCardDocument document;
  final NgmyBusinessCardTemplate tpl;
  final double width;
  final double height;
  final bool interactive;
  final void Function(String elementId, Offset delta)? onElementDrag;
  final void Function(String elementId)? onElementSelect;
  final String? selectedElementId;

  @override
  Widget build(BuildContext context) {
    final ctx = _CardRenderCtx(
      doc: document,
      tpl: tpl,
      w: width,
      h: height,
      interactive: interactive,
      onDrag: onElementDrag,
      onSelect: onElementSelect,
      selectedElementId: selectedElementId,
    );
    final layout = switch (tpl.renderStyle) {
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
      'ngmy_matrix' => _layoutNgmyMatrix(ctx),
      'ngmy_recon' => _layoutNgmyRecon(ctx),
      'ngmy_circuit' => _layoutNgmyCircuit(ctx),
      'blueprint' => _layoutBlueprint(ctx),
      'depth_stack' => _layoutDepthStack(ctx),
      'ribbon' => _layoutRibbon(ctx),
      'mesh_dots' => _layoutMeshDots(ctx),
      'black_marble' => _layoutBlackMarble(ctx),
      'champagne_foil' => _layoutChampagneFoil(ctx),
      'velvet_night' => _layoutVelvetNight(ctx),
      'platinum_band' => _layoutPlatinumBand(ctx),
      'rose_gold_arc' => _layoutRoseGoldArc(ctx),
      'obsidian_gold' => _layoutObsidianGold(ctx),
      'silk_gradient' => _layoutSilkGradient(ctx),
      'art_deco' => _layoutArtDeco(ctx),
      'crystalline' => _layoutCrystalline(ctx),
      'executive_monogram' => _layoutExecutiveMonogram(ctx),
      'ghost_type' => _layoutGhostType(ctx),
      'shadow_kb' => _layoutShadowKb(ctx),
      'watermark_gold' => _layoutWatermarkGold(ctx),
      'type_halo' => _layoutTypeHalo(ctx),
      _ => _layoutVerticalSplit(ctx),
    };
    // Templates with their own logo placement (Orbit ring, hero strip, etc.).
    const stylesWithBuiltInLogo = {
      'glass_frost',
      'vertical_split',
      'orbit',
      'wave_curve',
      'hero_strip',
      'bubble_duotone',
      'mesh_dots',
      'champagne_foil',
      'rose_gold_arc',
      'crystalline',
    };
    final hasLogo = document.logoBytes != null;
    final needsLogoOverlay = hasLogo && !stylesWithBuiltInLogo.contains(tpl.renderStyle);
    return Stack(
      fit: StackFit.expand,
      children: [
        layout,
        if (needsLogoOverlay)
          ctx.slot(
            'logo',
            ctx.logo(height * 0.34, radius: BorderRadius.circular(999)),
            right: 12,
            top: 12,
          ),
        if (document.cardEmoji.trim().isNotEmpty)
          ctx.slot(
            'card_emoji',
            Text(
              document.cardEmoji,
              style: TextStyle(fontSize: height * 0.17 * document.fontScale * ngmyCardElementScale(document, 'card_emoji')),
            ),
            left: width * 0.68,
            top: height * 0.06,
          ),
      ],
    );
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
    this.onSelect,
    this.selectedElementId,
  });

  final NgmyBusinessCardDocument doc;
  final NgmyBusinessCardTemplate tpl;
  final double w;
  final double h;
  final bool interactive;
  final void Function(String elementId, Offset delta)? onDrag;
  final void Function(String elementId)? onSelect;
  final String? selectedElementId;

  Color get accent => doc.effectiveAccent;
  Color get text => doc.effectiveText;
  Color get sub => doc.effectiveSubtext;
  Color get bg1 => doc.backgroundColor ?? tpl.bgStart;
  Color get bg2 => doc.effectiveBgEnd;

  Widget slot(String id, Widget child, {double? left, double? top, double? right, double? bottom}) {
    if (!ngmyCardElementVisible(doc, id)) return const SizedBox.shrink();
    final o = ngmyCardElementOffset(doc, id);
    final scale = ngmyCardElementScale(doc, id);
    Widget content = scale == 1.0 ? child : Transform.scale(scale: scale, alignment: Alignment.topLeft, child: child);
    return Positioned(
      left: left != null ? left + o.dx : null,
      top: top != null ? top + o.dy : null,
      right: right != null ? right - o.dx : null,
      bottom: bottom != null ? bottom - o.dy : null,
      child: interactive && onDrag != null
          ? _DraggableCardElement(
              elementId: id,
              selected: selectedElementId == id,
              onSelect: onSelect,
              onDrag: (d) => onDrag!(id, Offset(o.dx + d.dx, o.dy + d.dy)),
              child: content,
            )
          : content,
    );
  }

  Widget txt(String s, {double? size, FontWeight? weight, Color? color, int maxLines = 2, double? letterSpacing}) {
    if (s.trim().isEmpty) return const SizedBox.shrink();
    final baseSize = (size ?? h * 0.058) * doc.fontScale;
    final wgt = weight ?? (doc.boldText ? FontWeight.w900 : FontWeight.w700);
    return Text(
      s,
      maxLines: maxLines,
      overflow: TextOverflow.ellipsis,
      style: TextStyle(
        color: color ?? text,
        fontWeight: wgt,
        fontSize: baseSize,
        height: 1.12,
        letterSpacing: letterSpacing,
      ),
    );
  }

  Widget logo(double size, {BorderRadius? radius}) {
    final bytes = doc.logoBytes;
    // Default to a true circle frame (not a rounded box).
    final r = radius ?? BorderRadius.circular(999);
    final ring = doc.logoRingStyle.trim().toLowerCase();
    final plate = Container(
      width: size,
      height: size,
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(
        borderRadius: r,
        gradient: bytes == null
            ? LinearGradient(colors: [accent.withValues(alpha: 0.35), accent.withValues(alpha: 0.08)])
            : null,
        border: bytes == null ? Border.all(color: accent.withValues(alpha: 0.35), width: 1) : null,
      ),
      child: bytes == null
          ? Icon(Icons.person_rounded, color: accent, size: size * 0.42)
          : Image.memory(
              bytes,
              key: ValueKey<String>('biz_logo_${bytes.length}_${Object.hashAll(bytes.take(64))}'),
              fit: BoxFit.cover,
              width: size,
              height: size,
              gaplessPlayback: true,
              filterQuality: FilterQuality.high,
              errorBuilder: (_, __, ___) => Icon(Icons.broken_image_outlined, color: accent, size: size * 0.42),
            ),
    );
    if (ring.isEmpty || ring == 'none') return plate;

    Color ringColor;
    double outerPad;
    double stroke;
    int rings;
    switch (ring) {
      case 'gold':
        ringColor = const Color(0xFFD4AF37);
        outerPad = size * 0.1;
        stroke = 2.2;
        rings = 1;
        break;
      case 'neon':
        ringColor = accent;
        outerPad = size * 0.12;
        stroke = 2.4;
        rings = 1;
        break;
      case 'double':
        ringColor = Colors.white.withValues(alpha: 0.85);
        outerPad = size * 0.14;
        stroke = 1.6;
        rings = 2;
        break;
      case 'soft':
        ringColor = accent.withValues(alpha: 0.55);
        outerPad = size * 0.1;
        stroke = 3;
        rings = 1;
        break;
      case 'thin':
      default:
        ringColor = Colors.white.withValues(alpha: 0.9);
        outerPad = size * 0.08;
        stroke = 1.4;
        rings = 1;
        break;
    }

    final total = size + outerPad * 2;
    return SizedBox(
      width: total,
      height: total,
      child: Stack(
        alignment: Alignment.center,
        children: [
          for (var i = 0; i < rings; i++)
            Container(
              width: total - i * (outerPad * 0.55),
              height: total - i * (outerPad * 0.55),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: ringColor.withValues(alpha: i == 0 ? 1 : 0.45), width: stroke),
                boxShadow: ring == 'neon'
                    ? [BoxShadow(color: accent.withValues(alpha: 0.45), blurRadius: 10, spreadRadius: 1)]
                    : null,
              ),
            ),
          plate,
        ],
      ),
    );
  }
}

List<String> _cardNameParts(String full) {
  final t = full.trim();
  if (t.isEmpty) return ['KB'];
  return t.split(RegExp(r'\s+'));
}

Widget _nameWatermark(_CardRenderCtx c, String text, {double sizeMul = 0.42, double opacity = 0.12, double left = -8, double top = -6}) {
  return Positioned(
    left: left,
    top: top,
    child: Text(
      text.toUpperCase(),
      style: TextStyle(
        fontSize: c.h * sizeMul,
        fontWeight: FontWeight.w900,
        color: c.accent.withValues(alpha: opacity),
        height: 0.85,
        letterSpacing: -1,
      ),
    ),
  );
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
      c.slot('logo', c.logo(c.h * 0.38, radius: BorderRadius.circular(999)), right: 14, top: 14),
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
          Expanded(
            flex: 38,
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [c.accent, c.accent.withValues(alpha: 0.72), c.bg2.withValues(alpha: 0.15)],
                ),
              ),
            ),
          ),
          Expanded(
            flex: 62,
            child: Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [c.bg2, c.bg1]),
              ),
            ),
          ),
        ],
      ),
      // Circular logo centered on the left panel (no box / full-bleed frame).
      Positioned(
        left: 0,
        top: 0,
        bottom: 0,
        width: c.w * 0.38,
        child: Center(child: c.logo(c.h * 0.42, radius: BorderRadius.circular(999))),
      ),
      Positioned(left: c.w * 0.36, top: 0, bottom: 0, width: 2, child: Container(color: Colors.white.withValues(alpha: 0.85))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.105, weight: FontWeight.w900, color: c.text), left: c.w * 0.42, top: 14),
      Positioned(left: c.w * 0.42, top: c.h * 0.28, child: Container(width: 32, height: 3, color: c.accent)),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.048), left: c.w * 0.42, top: c.h * 0.34),
      c.slot('company', c.txt(c.doc.company, weight: FontWeight.w800, color: c.accent, size: c.h * 0.046), left: c.w * 0.42, top: c.h * 0.46),
      c.slot('phone', c.txt('📞 ${c.doc.phone}', color: c.sub, size: c.h * 0.042), left: c.w * 0.42, bottom: 30),
      c.slot('email', c.txt('✉️ ${c.doc.email}', color: c.text, size: c.h * 0.04), left: c.w * 0.42, bottom: 14),
      c.slot('website', c.txt('🌐 ${c.doc.website}', color: c.sub, size: c.h * 0.038), right: 10, bottom: 14),
    ],
  );
}

// ─── Layout 3: Mega typography ──────────────────────────────────────────────
Widget _layoutMegaType(_CardRenderCtx c) {
  final parts = _cardNameParts(c.doc.fullName);
  final first = parts.first;
  final rest = parts.length > 1 ? parts.sublist(1).join(' ') : '';
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      _nameWatermark(c, first, sizeMul: 0.44, opacity: 0.14),
      c.slot('name', Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        c.txt(first, size: c.h * 0.18, weight: FontWeight.w900, letterSpacing: -0.5),
        if (rest.isNotEmpty) c.txt(rest, size: c.h * 0.11, weight: FontWeight.w300, letterSpacing: 1.5),
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
  final parts = _cardNameParts(c.doc.fullName);
  final wm = parts.first.toUpperCase();
  final gridTop = c.h * 0.34;
  final cellW = (c.w - 24) / 2;
  final cellH = (c.h - gridTop - 14) / 2 - 4;

  Widget bentoTile(String val, IconData icon, {Color? fill}) {
    if (val.trim().isEmpty) return const SizedBox.shrink();
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: fill ?? Colors.white.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: c.accent.withValues(alpha: 0.35), width: 1.2),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(icon, size: c.h * 0.055, color: c.accent),
          const SizedBox(height: 4),
          c.txt(val, size: c.h * 0.038, color: Colors.white, maxLines: 2),
        ],
      ),
    );
  }

  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.bg1, c.bg2]))),
      Positioned(right: -16, top: -24, child: Text(wm, style: TextStyle(fontSize: c.h * 0.62, fontWeight: FontWeight.w900, color: c.accent.withValues(alpha: 0.07)))),
      Positioned(
        left: 10,
        right: 10,
        top: 8,
        height: c.h * 0.24,
        child: Container(
          decoration: BoxDecoration(
            gradient: LinearGradient(colors: [c.accent.withValues(alpha: 0.28), c.accent.withValues(alpha: 0.08)]),
            borderRadius: BorderRadius.circular(14),
            border: Border.all(color: c.accent.withValues(alpha: 0.4)),
          ),
        ),
      ),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.09, weight: FontWeight.w900), left: 18, top: 14),
      c.slot('company', c.txt(c.doc.company, color: Colors.white.withValues(alpha: 0.75), size: c.h * 0.042, weight: FontWeight.w700), left: 18, top: c.h * 0.18),
      c.slot('phone', SizedBox(width: cellW, height: cellH, child: bentoTile(c.doc.phone, Icons.phone_rounded, fill: c.accent.withValues(alpha: 0.18))), left: 10, top: gridTop),
      c.slot('email', SizedBox(width: cellW, height: cellH, child: bentoTile(c.doc.email, Icons.email_rounded)), left: 10 + cellW + 4, top: gridTop),
      c.slot('website', SizedBox(width: cellW, height: cellH, child: bentoTile(c.doc.website, Icons.language_rounded)), left: 10, top: gridTop + cellH + 4),
      c.slot('address', SizedBox(width: cellW, height: cellH, child: bentoTile(c.doc.address, Icons.place_rounded, fill: c.accent.withValues(alpha: 0.12))), left: 10 + cellW + 4, top: gridTop + cellH + 4),
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
      c.slot('logo', c.logo(c.h * 0.3, radius: BorderRadius.circular(999)), left: 14, top: 12),
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
  Widget pill(String label, IconData icon) {
    if (label.trim().isEmpty) return const SizedBox.shrink();
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
      decoration: BoxDecoration(
        color: Colors.white.withValues(alpha: 0.95),
        borderRadius: BorderRadius.circular(24),
        border: Border.all(color: c.accent.withValues(alpha: 0.5), width: 1.4),
        boxShadow: [BoxShadow(color: c.accent.withValues(alpha: 0.18), blurRadius: 6, offset: const Offset(0, 2))],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icon, size: c.h * 0.038, color: c.accent),
          const SizedBox(width: 5),
          Text(label, style: TextStyle(color: c.text, fontSize: c.h * 0.04, fontWeight: FontWeight.w800), overflow: TextOverflow.ellipsis),
        ],
      ),
    );
  }

  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.bg1, c.bg2]))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900), left: 16, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.048), left: 16, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, color: c.accent, weight: FontWeight.w800, size: c.h * 0.046), left: 16, top: c.h * 0.44),
      c.slot('phone', pill(c.doc.phone, Icons.phone_rounded), left: 14, bottom: 38),
      c.slot('email', pill(c.doc.email, Icons.email_rounded), left: c.w * 0.38, bottom: 38),
      c.slot('website', pill(c.doc.website, Icons.language_rounded), left: 14, bottom: 10),
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
  final insetW = c.w * 0.9;
  final insetH = c.h * 0.86;
  final insetL = (c.w - insetW) / 2;
  final insetT = (c.h - insetH) / 2;
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(
        decoration: BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.bg1, c.bg2]),
        ),
      ),
      Positioned(
        left: insetL - 4,
        top: insetT - 4,
        width: insetW + 8,
        height: insetH + 8,
        child: DecoratedBox(
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20),
            gradient: LinearGradient(colors: [c.accent.withValues(alpha: 0.35), c.accent.withValues(alpha: 0.08)]),
          ),
        ),
      ),
      Positioned(
        left: insetL,
        top: insetT,
        width: insetW,
        height: insetH,
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: c.accent, width: 2.2),
            boxShadow: [
              BoxShadow(color: c.accent.withValues(alpha: 0.25), blurRadius: 18, offset: const Offset(0, 8)),
            ],
          ),
        ),
      ),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.105, weight: FontWeight.w900, color: const Color(0xFF0F172A)), left: insetL + 14, top: insetT + 12),
      c.slot('title', c.txt(c.doc.jobTitle, color: const Color(0xFF475569), size: c.h * 0.048, weight: FontWeight.w600), left: insetL + 14, top: insetT + c.h * 0.24),
      Positioned(left: insetL + 14, top: insetT + c.h * 0.36, child: Container(width: 44, height: 3, color: c.accent)),
      c.slot('company', c.txt(c.doc.company, color: c.accent, size: c.h * 0.044, weight: FontWeight.w800), left: insetL + 14, top: insetT + c.h * 0.42),
      c.slot('phone', c.txt('📞 ${c.doc.phone}', color: const Color(0xFF334155), size: c.h * 0.04, weight: FontWeight.w700), left: insetL + 14, bottom: c.h - insetT - insetH + 38),
      c.slot('email', c.txt('✉️ ${c.doc.email}', color: const Color(0xFF1E293B), size: c.h * 0.038, weight: FontWeight.w700), left: insetL + 14, bottom: c.h - insetT - insetH + 18),
      c.slot('website', c.txt('🌐 ${c.doc.website}', color: const Color(0xFF64748B), size: c.h * 0.036), right: insetL + 14, bottom: c.h - insetT - insetH + 18),
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
Widget _layoutNgmyMatrix(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(colors: [Color(0xFF000000), Color(0xFF001A00)]),
        ),
      ),
      CustomPaint(painter: _GridPainter(const Color(0xFF00FF41).withValues(alpha: 0.06), 8), size: Size.infinite),
      c.slot('name', c.txt(c.doc.fullName.toUpperCase(), size: c.h * 0.09, weight: FontWeight.w900, color: const Color(0xFF00FF41)), left: 12, top: 10),
      c.slot('title', c.txt('// ${c.doc.jobTitle}', color: const Color(0xFF6EE7B7), size: c.h * 0.04), left: 12, top: c.h * 0.32),
      c.slot('company', c.txt('NGMY::${c.doc.company}', color: Colors.white70, size: c.h * 0.038), left: 12, bottom: 28),
      c.slot('phone', c.txt('node:${c.doc.phone}', color: const Color(0xFF00FF41), size: c.h * 0.034), left: 12, bottom: 12),
      Positioned(right: 8, top: 8, child: Text('NGMY', style: TextStyle(color: const Color(0xFF00FF41).withValues(alpha: 0.35), fontSize: c.h * 0.05, fontWeight: FontWeight.w900))),
    ],
  );
}

Widget _layoutNgmyRecon(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: const Color(0xFF0F172A)),
      Positioned(left: 0, right: 0, top: 0, height: 3, child: Container(color: const Color(0xFFF97316))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900, color: Colors.white), left: 12, top: 14),
      c.slot('title', c.txt('RECON · ${c.doc.jobTitle}', color: const Color(0xFFF97316), size: c.h * 0.042, weight: FontWeight.w700), left: 12, top: c.h * 0.34),
      c.slot('company', c.txt(c.doc.company, color: const Color(0xFF94A3B8), size: c.h * 0.04), left: 12, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: Colors.white60, size: c.h * 0.036), left: 12, bottom: 10),
      Positioned(right: 10, bottom: 10, child: Icon(Icons.radar_rounded, color: const Color(0xFFF97316).withValues(alpha: 0.7), size: c.h * 0.14)),
    ],
  );
}

Widget _layoutNgmyCircuit(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFF090014), Color(0xFF1E0A3C)]),
        ),
      ),
      Positioned(right: -20, top: -20, child: Container(width: c.w * 0.45, height: c.w * 0.45, decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: const Color(0xFFA855F7).withValues(alpha: 0.35), width: 2)))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w800, color: Colors.white), left: 14, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: const Color(0xFFC4B5FD), size: c.h * 0.045), left: 14, top: c.h * 0.34),
      c.slot('company', c.txt(c.doc.company, color: const Color(0xFFA855F7), size: c.h * 0.042, weight: FontWeight.w700), left: 14, bottom: 28),
      c.slot('website', c.txt(c.doc.website, color: Colors.white54, size: c.h * 0.036), left: 14, bottom: 10),
    ],
  );
}

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
      c.slot('logo', c.logo(c.h * 0.28, radius: BorderRadius.circular(999)), right: 12, top: 12),
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

// ─── Layout 21–30: Luxury collection ─────────────────────────────────────────

Widget _layoutBlackMarble(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      CustomPaint(painter: _MarbleVeinPainter(c.accent.withValues(alpha: 0.35)), size: Size.infinite),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w300, color: c.accent, letterSpacing: 2), left: 18, top: 24),
      c.slot('title', c.txt(c.doc.jobTitle.toUpperCase(), color: Colors.white70, size: c.h * 0.04, letterSpacing: 1.2), left: 18, top: c.h * 0.42),
      c.slot('company', c.txt(c.doc.company, color: Colors.white54, size: c.h * 0.044), left: 18, bottom: 32),
      c.slot('phone', c.txt(c.doc.phone, color: c.accent.withValues(alpha: 0.85), size: c.h * 0.038), left: 18, bottom: 14),
      const Positioned(right: 16, top: 16, child: Icon(Icons.diamond_outlined, color: Color(0xFFD4AF37), size: 18)),
    ],
  );
}

Widget _layoutChampagneFoil(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      Positioned(left: 0, right: 0, top: 0, height: c.h * 0.22, child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.accent.withValues(alpha: 0.55), c.accent.withValues(alpha: 0.15)])))),
      c.slot('logo', c.logo(c.h * 0.26, radius: BorderRadius.circular(999)), left: 14, top: 12),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900, color: c.text), left: c.w * 0.32, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.046), left: c.w * 0.32, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, color: c.accent, weight: FontWeight.w800, size: c.h * 0.044), left: 14, top: c.h * 0.52),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.04), left: 14, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.sub, size: c.h * 0.038), left: 14, bottom: 10),
    ],
  );
}

Widget _layoutVelvetNight(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: RadialGradient(center: Alignment.topRight, radius: 1.4, colors: [c.accent.withValues(alpha: 0.12), c.bg1, c.bg2]))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900, color: c.accent), left: 16, top: 18),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white.withValues(alpha: 0.75), size: c.h * 0.048), left: 16, top: c.h * 0.34),
      Positioned(left: 16, right: 16, top: c.h * 0.48, child: Container(height: 1, color: c.accent.withValues(alpha: 0.4))),
      c.slot('company', c.txt(c.doc.company, color: Colors.white54, size: c.h * 0.044), left: 16, top: c.h * 0.54),
      c.slot('phone', c.txt(c.doc.phone, color: c.accent, size: c.h * 0.04), left: 16, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: Colors.white60, size: c.h * 0.038), left: 16, bottom: 10),
    ],
  );
}

Widget _layoutPlatinumBand(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Positioned(left: 0, right: 0, top: c.h * 0.38, height: c.h * 0.18, child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.accent.withValues(alpha: 0.15), c.accent, c.accent.withValues(alpha: 0.15)])))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: 16, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.046), left: 16, top: c.h * 0.26),
      c.slot('company', c.txt(c.doc.company.toUpperCase(), color: c.accent, size: c.h * 0.038, letterSpacing: 1.5, weight: FontWeight.w800), left: 16, top: c.h * 0.42),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.04), left: 16, bottom: 28),
      c.slot('website', c.txt(c.doc.website, color: c.accent, size: c.h * 0.038), left: 16, bottom: 10),
    ],
  );
}

Widget _layoutRoseGoldArc(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      CustomPaint(painter: _ArcPainter(c.accent.withValues(alpha: 0.85)), size: Size.infinite),
      c.slot('logo', c.logo(c.h * 0.3, radius: BorderRadius.circular(999)), right: 14, top: 14),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: 14, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.accent, size: c.h * 0.048), left: 14, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, color: Colors.white60, size: c.h * 0.044), left: 14, bottom: 32),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.04), left: 14, bottom: 12),
    ],
  );
}

Widget _layoutObsidianGold(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Positioned(right: 0, top: 0, child: CustomPaint(painter: _GoldCornerPainter(c.accent), size: Size(c.w * 0.35, c.h * 0.45))),
      Positioned(left: 0, bottom: 0, child: CustomPaint(painter: _GoldCornerPainter(c.accent, flip: true), size: Size(c.w * 0.28, c.h * 0.35))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900, color: c.accent), left: 16, top: 20),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white70, size: c.h * 0.046), left: 16, top: c.h * 0.36),
      c.slot('company', c.txt(c.doc.company, color: Colors.white54, size: c.h * 0.042), left: 16, bottom: 32),
      c.slot('email', c.txt(c.doc.email, color: c.accent.withValues(alpha: 0.9), size: c.h * 0.038), left: 16, bottom: 12),
    ],
  );
}

Widget _layoutSilkGradient(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.bg1, c.bg2, c.accent.withValues(alpha: 0.35)]))),
      CustomPaint(painter: _SilkPainter(Colors.white.withValues(alpha: 0.06)), size: Size.infinite),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w800), left: 16, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.accent, size: c.h * 0.05), left: 16, top: c.h * 0.34),
      c.slot('tagline', c.txt(c.doc.tagline, color: Colors.white60, size: c.h * 0.04), left: 16, top: c.h * 0.46),
      c.slot('phone', c.txt(c.doc.phone, color: Colors.white70, size: c.h * 0.04), left: 16, bottom: 28),
      c.slot('website', c.txt(c.doc.website, color: c.accent, size: c.h * 0.038), left: 16, bottom: 10),
    ],
  );
}

Widget _layoutArtDeco(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      CustomPaint(painter: _DecoFramePainter(c.accent), size: Size.infinite),
      c.slot('name', c.txt(c.doc.fullName.toUpperCase(), size: c.h * 0.08, weight: FontWeight.w900, color: c.accent, letterSpacing: 2), left: 20, top: 28),
      Positioned(left: 20, right: 20, top: c.h * 0.42, child: Row(children: [Expanded(child: Container(height: 1, color: c.accent)), Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: Icon(Icons.star, color: c.accent, size: 10)), Expanded(child: Container(height: 1, color: c.accent))])),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white70, size: c.h * 0.044), left: 20, top: c.h * 0.48),
      c.slot('company', c.txt(c.doc.company, color: Colors.white54, size: c.h * 0.04), left: 20, bottom: 32),
      c.slot('phone', c.txt(c.doc.phone, color: c.accent, size: c.h * 0.038), left: 20, bottom: 14),
    ],
  );
}

Widget _layoutCrystalline(_CardRenderCtx c) {
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      CustomPaint(painter: _CrystalPainter(c.accent.withValues(alpha: 0.25)), size: Size.infinite),
      c.slot('logo', c.logo(c.h * 0.28, radius: BorderRadius.circular(999)), left: 14, top: 12),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w900), left: c.w * 0.34, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.accent, size: c.h * 0.046), left: c.w * 0.34, top: c.h * 0.32),
      c.slot('company', c.txt(c.doc.company, color: c.sub, size: c.h * 0.042), left: 14, bottom: 32),
      c.slot('email', c.txt(c.doc.email, color: Colors.white70, size: c.h * 0.038), left: 14, bottom: 12),
    ],
  );
}

Widget _layoutExecutiveMonogram(_CardRenderCtx c) {
  final initial = c.doc.fullName.trim().isNotEmpty ? c.doc.fullName.trim()[0].toUpperCase() : 'N';
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Positioned(right: -c.w * 0.08, top: -c.h * 0.15, child: Text(initial, style: TextStyle(fontSize: c.h * 1.1, fontWeight: FontWeight.w900, color: c.accent.withValues(alpha: 0.08)))),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900, color: c.text), left: 16, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.048), left: 16, top: c.h * 0.34),
      Positioned(left: 16, top: c.h * 0.46, child: Container(width: 48, height: 3, color: c.accent)),
      c.slot('company', c.txt(c.doc.company, color: c.text, weight: FontWeight.w700, size: c.h * 0.044), left: 16, top: c.h * 0.52),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.04), left: 16, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.accent, size: c.h * 0.038), left: 16, bottom: 10),
    ],
  );
}

// ─── Mega-type family (ghost watermark layouts) ──────────────────────────────

Widget _layoutGhostType(_CardRenderCtx c) {
  final parts = _cardNameParts(c.doc.fullName);
  final first = parts.first;
  final rest = parts.length > 1 ? parts.sublist(1).join(' ') : '';
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      _nameWatermark(c, first, sizeMul: 0.48, opacity: 0.1, left: -12, top: -10),
      Positioned(right: -20, bottom: -20, child: Text(first.toUpperCase(), style: TextStyle(fontSize: c.h * 0.35, fontWeight: FontWeight.w900, color: c.accent.withValues(alpha: 0.05)))),
      c.slot('name', Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        c.txt(first, size: c.h * 0.16, weight: FontWeight.w900, color: Colors.white),
        if (rest.isNotEmpty) c.txt(rest, size: c.h * 0.09, weight: FontWeight.w300, color: c.sub, letterSpacing: 2),
      ]), left: 16, top: 16),
      c.slot('title', c.txt(c.doc.jobTitle.toUpperCase(), color: c.accent, size: c.h * 0.042, letterSpacing: 1.4), left: 16, top: c.h * 0.56),
      c.slot('phone', c.txt(c.doc.phone, color: c.sub, size: c.h * 0.038), left: 16, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.sub, size: c.h * 0.036), left: 16, bottom: 10),
    ],
  );
}

Widget _layoutShadowKb(_CardRenderCtx c) {
  final parts = _cardNameParts(c.doc.fullName);
  final kb = parts.isNotEmpty ? parts.first.toUpperCase() : 'KB';
  final rest = parts.length > 1 ? parts.sublist(1).join(' ') : '';
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      Positioned(left: -6, top: -18, child: Text(kb, style: TextStyle(fontSize: c.h * 0.72, fontWeight: FontWeight.w900, color: c.accent.withValues(alpha: 0.11), height: 0.8))),
      c.slot('name', Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        c.txt(kb, size: c.h * 0.2, weight: FontWeight.w900, color: c.accent),
        if (rest.isNotEmpty) c.txt(rest, size: c.h * 0.1, weight: FontWeight.w700, letterSpacing: 1.2),
      ]), left: 14, top: 14),
      c.slot('title', c.txt(c.doc.jobTitle, color: Colors.white70, size: c.h * 0.046), left: 14, top: c.h * 0.52),
      c.slot('company', c.txt(c.doc.company, color: c.sub, size: c.h * 0.042), left: 14, bottom: 28),
      c.slot('phone', c.txt(c.doc.phone, color: c.accent, size: c.h * 0.038), left: 14, bottom: 10),
    ],
  );
}

Widget _layoutWatermarkGold(_CardRenderCtx c) {
  final parts = _cardNameParts(c.doc.fullName);
  final wm = parts.first.toUpperCase();
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(decoration: BoxDecoration(gradient: LinearGradient(colors: [c.bg1, c.bg2]))),
      _nameWatermark(c, wm, sizeMul: 0.5, opacity: 0.16, left: -10, top: -8),
      c.slot('name', c.txt(c.doc.fullName, size: c.h * 0.1, weight: FontWeight.w300, color: c.accent, letterSpacing: 2), left: 18, top: 24),
      c.slot('title', c.txt(c.doc.jobTitle.toUpperCase(), color: Colors.white60, size: c.h * 0.04, letterSpacing: 1.2), left: 18, top: c.h * 0.42),
      c.slot('company', c.txt(c.doc.company, color: Colors.white54, size: c.h * 0.044), left: 18, bottom: 32),
      c.slot('phone', c.txt(c.doc.phone, color: c.accent.withValues(alpha: 0.9), size: c.h * 0.038), left: 18, bottom: 14),
    ],
  );
}

Widget _layoutTypeHalo(_CardRenderCtx c) {
  final parts = _cardNameParts(c.doc.fullName);
  final wm = parts.first.toUpperCase();
  return Stack(
    fit: StackFit.expand,
    children: [
      Container(color: c.bg1),
      Center(child: Text(wm, style: TextStyle(fontSize: c.h * 0.55, fontWeight: FontWeight.w900, color: c.accent.withValues(alpha: 0.08)))),
      c.slot('name', Center(child: c.txt(c.doc.fullName, size: c.h * 0.11, weight: FontWeight.w900)), left: 12, right: 12, top: c.h * 0.22),
      c.slot('title', Center(child: c.txt(c.doc.jobTitle, color: c.sub, size: c.h * 0.046)), left: 12, right: 12, top: c.h * 0.46),
      c.slot('phone', c.txt(c.doc.phone, color: c.accent, size: c.h * 0.04), left: 16, bottom: 28),
      c.slot('email', c.txt(c.doc.email, color: c.sub, size: c.h * 0.038), right: 16, bottom: 10),
    ],
  );
}

class _MarbleVeinPainter extends CustomPainter {
  _MarbleVeinPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 1.2..style = PaintingStyle.stroke;
    final path = Path()
      ..moveTo(0, size.height * 0.3)
      ..quadraticBezierTo(size.width * 0.4, size.height * 0.1, size.width, size.height * 0.45)
      ..moveTo(0, size.height * 0.7)
      ..quadraticBezierTo(size.width * 0.5, size.height * 0.55, size.width, size.height * 0.85);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _ArcPainter extends CustomPainter {
  _ArcPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawArc(Rect.fromLTWH(-size.width * 0.2, size.height * 0.55, size.width * 1.2, size.height), 0, 3.14, false, Paint()..color = color..strokeWidth = 3..style = PaintingStyle.stroke);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _GoldCornerPainter extends CustomPainter {
  _GoldCornerPainter(this.color, {this.flip = false});
  final Color color;
  final bool flip;

  @override
  void paint(Canvas canvas, Size size) {
    if (flip) {
      canvas.save();
      canvas.translate(size.width, size.height);
      canvas.scale(-1, -1);
    }
    final path = Path()
      ..moveTo(0, 0)
      ..lineTo(size.width, 0)
      ..lineTo(0, size.height)
      ..close();
    canvas.drawPath(path, Paint()..color = color.withValues(alpha: 0.35));
    canvas.drawLine(Offset(0, 0), Offset(size.width, 0), Paint()..color = color..strokeWidth = 2);
    if (flip) canvas.restore();
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _SilkPainter extends CustomPainter {
  _SilkPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 1;
    for (var i = 0.0; i < size.width + size.height; i += 18) {
      canvas.drawLine(Offset(i, 0), Offset(i - size.height, size.height), paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _DecoFramePainter extends CustomPainter {
  _DecoFramePainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..strokeWidth = 1.5..style = PaintingStyle.stroke;
    canvas.drawRect(Rect.fromLTWH(10, 10, size.width - 20, size.height - 20), paint);
    canvas.drawLine(const Offset(10, 10), const Offset(24, 24), paint);
    canvas.drawLine(Offset(size.width - 10, 10), Offset(size.width - 24, 24), paint);
    canvas.drawLine(Offset(10, size.height - 10), Offset(24, size.height - 24), paint);
    canvas.drawLine(Offset(size.width - 10, size.height - 10), Offset(size.width - 24, size.height - 24), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _CrystalPainter extends CustomPainter {
  _CrystalPainter(this.color);
  final Color color;

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color..style = PaintingStyle.fill;
    final cx = size.width * 0.78;
    final cy = size.height * 0.55;
    final path = Path()
      ..moveTo(cx, cy - 40)
      ..lineTo(cx + 35, cy)
      ..lineTo(cx, cy + 40)
      ..lineTo(cx - 35, cy)
      ..close();
    canvas.drawPath(path, paint);
    canvas.drawPath(path, Paint()..color = color.withValues(alpha: 0.5)..style = PaintingStyle.stroke..strokeWidth = 1);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

class _DraggableCardElement extends StatefulWidget {
  const _DraggableCardElement({
    required this.elementId,
    required this.child,
    required this.onDrag,
    this.onSelect,
    this.selected = false,
  });
  final String elementId;
  final Widget child;
  final ValueChanged<Offset> onDrag;
  final void Function(String elementId)? onSelect;
  final bool selected;

  @override
  State<_DraggableCardElement> createState() => _DraggableCardElementState();
}

class _DraggableCardElementState extends State<_DraggableCardElement> {
  Offset _drag = Offset.zero;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () => widget.onSelect?.call(widget.elementId),
      onPanDown: (_) => widget.onSelect?.call(widget.elementId),
      onPanUpdate: (d) => setState(() => _drag += d.delta),
      onPanEnd: (_) {
        widget.onDrag(_drag);
        setState(() => _drag = Offset.zero);
      },
      child: Transform.translate(
        offset: _drag,
        child: DecoratedBox(
          decoration: BoxDecoration(
            border: Border.all(
              color: widget.selected ? const Color(0xFF22C55E) : const Color(0xFF22C55E).withValues(alpha: 0.35),
              width: widget.selected ? 2 : 1,
            ),
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
