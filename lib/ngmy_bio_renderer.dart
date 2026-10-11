import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_bio_effects.dart';
import 'ngmy_bio_link_icons.dart';
import 'ngmy_bio_models.dart';
import 'ngmy_bio_ring_frames.dart';
import 'ngmy_bio_social.dart';
import 'ngmy_bio_templates.dart';

/// Link-in-bio page preview (studio + guest).
class NgmyBioPreview extends StatelessWidget {
  const NgmyBioPreview({
    super.key,
    required this.document,
    this.compact = false,
    this.maxWidth = 420,
    this.interactive = true,
    this.lightweight = false,
    this.fullBleed = false,
  });

  final NgmyBioDocument document;
  final bool compact;
  final double maxWidth;
  final bool interactive;
  final bool lightweight;
  final bool fullBleed;

  @override
  Widget build(BuildContext context) {
    final tpl = ngmyBioTemplateById(document.templateId);
    final ring = ngmyBioRingById(document.ringStyleId);
    final scale = document.profileScale.clamp(0.65, 1.6);
    final avatarSize = (compact ? 72.0 : 96.0) * scale;
    final pad = compact ? 12.0 : 16.0;
    final name = document.displayName.trim().isEmpty ? 'Your Name' : document.displayName.trim();
    final tagline = document.tagline.trim();
    final links = document.activeLinks;
    final viewportH = MediaQuery.sizeOf(context).height;
    final minPageHeight = (!compact && fullBleed) ? viewportH : 0.0;
    final sceneBackdrop = _usesSceneBackdrop(tpl);

    final layoutChild = minPageHeight > 0
        ? SizedBox(
            height: minPageHeight,
            width: double.infinity,
            child: _layoutBody(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight),
          )
        : SingleChildScrollView(
            clipBehavior: Clip.none,
            padding: EdgeInsets.only(bottom: pad + 20),
            child: _layoutBody(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: 0),
          );

    Widget pageStack = Stack(
      clipBehavior: Clip.none,
      children: [
        if (!sceneBackdrop && document.backgroundImageBase64.isEmpty)
          Positioned.fill(child: DecoratedBox(decoration: _pageDecoration(tpl, document), child: const SizedBox.shrink())),
        if (document.backgroundImageBase64.isNotEmpty)
          Positioned.fill(
            child: Stack(
              fit: StackFit.expand,
              children: [
                _bioImage(
                  document.backgroundImageBase64,
                  fit: BoxFit.cover,
                  alignment: Alignment.topCenter,
                  downsample: lightweight,
                ),
                Container(color: Colors.black.withValues(alpha: tpl.layout == NgmyBioLayoutStyle.photoImmersive ? 0.25 : 0.4)),
              ],
            ),
          ),
        layoutChild,
      ],
    );

    if (fullBleed) {
      final bottomInset = MediaQuery.paddingOf(context).bottom;
      return SizedBox.expand(
        child: Stack(
          fit: StackFit.expand,
          clipBehavior: Clip.none,
          children: [
            if (sceneBackdrop)
              Positioned(
                top: 0,
                left: 0,
                right: 0,
                height: viewportH,
                child: _sceneBackdrop(tpl, document),
              ),
            pageStack,
            Positioned(
              left: 0,
              right: 0,
              bottom: bottomInset + (compact ? 10 : 14),
              child: Center(child: _madeByNgmyWatermark(tpl)),
            ),
          ],
        ),
      );
    }

    return LayoutBuilder(
      builder: (context, constraints) {
        final backdropH = constraints.maxHeight.isFinite && constraints.maxHeight > 100 ? constraints.maxHeight : viewportH * 0.9;
        return Align(
          alignment: Alignment.topCenter,
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: maxWidth),
            child: Container(
              decoration: sceneBackdrop ? null : _pageDecoration(tpl, document),
              child: Stack(
                clipBehavior: Clip.none,
                children: [
                  if (sceneBackdrop)
                    Positioned(
                      top: 0,
                      left: 0,
                      right: 0,
                      height: backdropH,
                      child: _sceneBackdrop(tpl, document),
                    ),
                  pageStack,
                ],
              ),
            ),
          ),
        );
      },
    );
  }

  bool _usesSceneBackdrop(NgmyBioTemplate tpl) =>
      tpl.sceneEffect != NgmyBioSceneEffect.none && document.backgroundImageBase64.isEmpty;

  Widget _sceneBackdrop(NgmyBioTemplate tpl, NgmyBioDocument doc) {
    return Stack(
      fit: StackFit.expand,
      children: [
        DecoratedBox(decoration: _pageDecoration(tpl, doc), child: const SizedBox.expand()),
        NgmyBioSceneLayer(
          effect: tpl.sceneEffect,
          accent: tpl.accent,
          animate: !lightweight,
        ),
      ],
    );
  }

  double _avatarWidgetSize(NgmyBioRingStyle ring, double avatarSize) =>
      ngmyBioRingFrameOuterSize(ring.id, avatarSize);

  Color _layoutBodyFill(NgmyBioTemplate tpl) {
    if (_usesSceneBackdrop(tpl)) return Colors.transparent;
    final base = tpl.pageBgEnd ?? tpl.pageBg;
    if (tpl.layout == NgmyBioLayoutStyle.bioSiteClassic) {
      return base.withValues(alpha: 0.94);
    }
    return base;
  }

  BoxDecoration _pageDecoration(NgmyBioTemplate tpl, NgmyBioDocument doc) {
    if (doc.backgroundImageBase64.isNotEmpty && tpl.layout == NgmyBioLayoutStyle.photoImmersive) {
      return const BoxDecoration(color: Colors.black);
    }
    if (tpl.layout == NgmyBioLayoutStyle.bioSiteClassic) {
      return BoxDecoration(color: tpl.pageBgEnd ?? tpl.pageBg);
    }
    if (tpl.pageBgEnd != null) {
      return BoxDecoration(
        gradient: LinearGradient(
          begin: tpl.layout == NgmyBioLayoutStyle.splitGradient ? Alignment.topLeft : Alignment.topCenter,
          end: tpl.layout == NgmyBioLayoutStyle.splitGradient ? Alignment.bottomRight : Alignment.bottomCenter,
          colors: [tpl.pageBg, tpl.pageBgEnd!],
        ),
      );
    }
    return BoxDecoration(color: tpl.pageBg);
  }

  Widget _layoutBody(
    NgmyBioTemplate tpl,
    NgmyBioRingStyle ring,
    double avatarSize,
    double pad,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    double minPageHeight = 0,
  }) {
    switch (tpl.layout) {
      case NgmyBioLayoutStyle.curvedOverlap:
        return _curvedOverlap(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.waveHeader:
      case NgmyBioLayoutStyle.oceanWave:
        return _waveHeader(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.outlineMinimal:
        return _centeredStack(tpl, ring, avatarSize, pad, name, tagline, links, headerH: 0, panel: false);
      case NgmyBioLayoutStyle.goldLuxe:
        return _goldLuxe(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.pillStack:
        return _pillGlassLayout(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.darkNeon:
        return _neonLayout(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.marbleCream:
        return _marblePanel(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.splitGradient:
        return _curvedOverlap(tpl, ring, avatarSize, pad, name, tagline, links, accentBar: true, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.angularHero:
        return _angularHero(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.glassFloat:
        return _glassFloat(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.editorialLeft:
        return _editorialLeft(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.royalVelvet:
        return _velvetLayout(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.roseQuartz:
        return _centeredStack(tpl, ring, avatarSize, pad, name, tagline, links, headerH: 0, softPanel: true);
      case NgmyBioLayoutStyle.midnightGlow:
        return _glowLayout(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.sunsetArc:
        return _sunsetArc(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.forestOrganic:
        return _organicHeader(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.boldStripe:
        return _boldStripe(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.photoImmersive:
        return _photoImmersive(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.diamondWhite:
        return _diamondWhite(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.proRobotHud:
        return _proRobotHud(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proOrbit:
        return _proOrbit(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proPolaroid:
        return _proPolaroid(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proMagazine:
        return _proMagazine(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proLiquid:
        return _proLiquid(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proArcade:
        return _proArcade(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proBoardingPass:
        return _proBoardingPass(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proHoloId:
        return _proHoloId(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proNeonSign:
        return _proNeonSign(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proVinyl:
        return _proVinyl(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proFilmStrip:
        return _proFilmStrip(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proGlassStack:
        return _proGlassStack(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proCrown:
        return _proCrown(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proConstellation:
        return _proConstellation(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proSunburst:
        return _proSunburst(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proEqualizer:
        return _proEqualizer(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proBubbles:
        return _proBubbles(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proTerminal:
        return _proTerminal(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proGallery:
        return _proGallery(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proPulse:
        return _proPulse(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proPostcard:
        return _proPostcard(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proDiagonal:
        return _proDiagonal(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proTheater:
        return _proTheater(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proJungle:
        return _proJungle(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proJackpot:
        return _proJackpot(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proWatch:
        return _proWatch(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proDiamond:
        return _proDiamond(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proAuroraPeak:
        return _proAuroraPeak(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proWaxSeal:
        return _proWaxSeal(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proInvitation:
        return _proInvitation(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proRainWindow:
        return _proRainWindow(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proPrismBeam:
        return _proPrismBeam(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proImmersive:
        return _proImmersive(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proNewspaper:
        return _proNewspaper(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proMoonPhase:
        return _proMoonPhase(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proSpeedometer:
        return _proSpeedometer(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proComic:
        return _proComic(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proSynthGrid:
        return _proSynthGrid(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proVoltage:
        return _proVoltage(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proCyberSkyline:
        return _proCyberSkyline(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proKaleido:
        return _proKaleido(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proFireflies:
        return _proFireflies(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.proRoseBloom:
        return _proRoseBloom(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
      case NgmyBioLayoutStyle.bioSiteClassic:
        return _bioSiteClassic(tpl, ring, avatarSize, pad, name, tagline, links, minPageHeight: minPageHeight);
    }
  }

  // ── Layout builders ───────────────────────────────────────────────────────

  /// Same color from curve through the bottom — no contrasting panel block.
  Color _seamlessBody(NgmyBioTemplate tpl) => tpl.pageBgEnd ?? tpl.pageBg;

  Widget _headerBanner(NgmyBioTemplate tpl, double headerH, {bool curved = true, double curveDepth = 48}) {
    Widget image = _headerImageOrGradient(tpl, headerH);
    if (curved) {
      image = ClipPath(
        clipper: _BioSiteHeaderBottomClipper(curveDepth: curveDepth),
        child: image,
      );
    }
    return SizedBox(
      height: headerH,
      width: double.infinity,
      child: Stack(
        fit: StackFit.expand,
        children: [
          image,
          Positioned.fill(child: _headerEffectOverlay(tpl)),
        ],
      ),
    );
  }

  Widget _headerEffectOverlay(NgmyBioTemplate tpl) {
    final royal = tpl.accent == const Color(0xFFD4AF37) || tpl.name.toLowerCase().contains('royal') || tpl.name.toLowerCase().contains('imperial');
    return IgnorePointer(
      child: Stack(
        fit: StackFit.expand,
        children: [
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.black.withValues(alpha: royal ? 0.08 : 0.04),
                  Colors.transparent,
                  (tpl.pageBgEnd ?? tpl.pageBg).withValues(alpha: 0),
                ],
                stops: const [0.0, 0.55, 1.0],
              ),
            ),
          ),
          if (royal)
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    const Color(0xFFD4AF37).withValues(alpha: 0.06),
                    Colors.transparent,
                    const Color(0xFFD4AF37).withValues(alpha: 0.04),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }

  Widget _overlapHeaderSection({
    required NgmyBioTemplate tpl,
    required NgmyBioRingStyle ring,
    required double avatarSize,
    required double pad,
    required double headerH,
    required double curveH,
    required CustomPainter Function(Color bodyColor) curvePainter,
    required Widget Function() belowAvatar,
    bool accentBar = false,
    double minPageHeight = 0,
  }) {
    final curveDepth = curveH;
    final avatarSpan = _avatarWidgetSize(ring, avatarSize);
    final avatarCenterY = headerH - curveDepth * 0.5;
    final avatarTop = avatarCenterY - avatarSpan * 0.5;
    final contentTop = avatarCenterY + avatarSize * 0.5 + (compact ? 18.0 : 22.0);
    final bodyTop = headerH - curveDepth;
    final bodyColor = _layoutBodyFill(tpl);
    final bodyHeight = minPageHeight > 0 ? math.max(minPageHeight - bodyTop, 400.0) : 1400.0;

    final stack = Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(
          top: bodyTop,
          left: 0,
          right: 0,
          child: ClipPath(
            clipper: _BioSiteBodyTopClipper(curveDepth: curveDepth),
            child: ColoredBox(
              color: bodyColor,
              child: SizedBox(width: double.infinity, height: bodyHeight),
            ),
          ),
        ),
        _headerBanner(tpl, headerH, curveDepth: curveDepth),
        if (accentBar)
          Positioned(
            top: headerH - curveDepth,
            left: 0,
            right: 0,
            child: Container(height: 1, color: tpl.accent.withValues(alpha: 0.2)),
          ),
        Positioned(
          top: avatarTop,
          left: 0,
          right: 0,
          child: Center(child: _avatar(document.avatarImageBase64, avatarSize, ring)),
        ),
        Positioned(
          top: contentTop,
          left: pad,
          right: pad,
          bottom: pad,
          child: belowAvatar(),
        ),
      ],
    );

    if (minPageHeight <= 0) return stack;
    return SizedBox(height: minPageHeight, width: double.infinity, child: stack);
  }

  Widget _curvedOverlap(
    NgmyBioTemplate tpl,
    NgmyBioRingStyle ring,
    double avatarSize,
    double pad,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    bool accentBar = false,
    double minPageHeight = 0,
  }) {
    final headerH = compact ? 140.0 : 180.0;
    final curveH = compact ? 44.0 : 56.0;
    return _overlapHeaderSection(
      tpl: tpl,
      ring: ring,
      avatarSize: avatarSize,
      pad: pad,
      headerH: headerH,
      curveH: curveH,
      curvePainter: ngmyBioCurvedPanelPainter,
      accentBar: accentBar,
      minPageHeight: minPageHeight,
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight),
    );
  }

  Widget _waveHeader(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final headerH = compact ? 150.0 : 190.0;
    final curveH = compact ? 40.0 : 52.0;
    return _overlapHeaderSection(
      tpl: tpl,
      ring: ring,
      avatarSize: avatarSize,
      pad: pad,
      headerH: headerH,
      curveH: curveH,
      curvePainter: ngmyBioWavePanelPainter,
      minPageHeight: minPageHeight,
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight, nameGap: compact ? 6 : 8),
    );
  }

  Widget _belowAvatarLinks(
    NgmyBioTemplate tpl,
    String name,
    String tagline,
    List<NgmyBioLink> links,
    double pad, {
    double minPageHeight = 0,
    double? nameGap,
  }) {
    final gap = nameGap ?? (compact ? 8.0 : 10.0);
    final intro = Column(
      children: [
        _belowName(tpl, name, tagline),
        SizedBox(height: gap),
      ],
    );
    if (minPageHeight <= 0) {
      return Column(
        children: [
          intro,
          _framedLinks(links, tpl, pad),
          SizedBox(height: pad),
        ],
      );
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        intro,
        Expanded(
          child: SingleChildScrollView(
            clipBehavior: Clip.none,
            physics: const BouncingScrollPhysics(),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _framedLinks(links, tpl, pad),
                SizedBox(height: math.max(120.0, minPageHeight * 0.15)),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _pillGlassLayout(
    NgmyBioTemplate tpl,
    NgmyBioRingStyle ring,
    double avatarSize,
    double pad,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    double minPageHeight = 0,
  }) {
    final top = Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(height: compact ? 28 : 40),
        Center(child: _avatar(document.avatarImageBase64, avatarSize, ring)),
        SizedBox(height: compact ? 14 : 18),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 18 : 24),
      ],
    );
    if (minPageHeight <= 0) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          top,
          _framedLinks(links, tpl, pad),
          SizedBox(height: pad + 8),
        ],
      );
    }
    return SizedBox(
      height: minPageHeight,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          top,
          Expanded(
            child: SingleChildScrollView(
              clipBehavior: Clip.none,
              physics: const BouncingScrollPhysics(),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  _framedLinks(links, tpl, pad),
                  SizedBox(height: math.max(120.0, minPageHeight * 0.15)),
                ],
              ),
            ),
          ),
          SizedBox(height: pad),
        ],
      ),
    );
  }

  Widget _centeredStack(
    NgmyBioTemplate tpl,
    NgmyBioRingStyle ring,
    double avatarSize,
    double pad,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    double headerH = 100,
    bool panel = true,
    bool roundedPanel = false,
    bool softPanel = false,
  }) {
    return Padding(
      padding: EdgeInsets.all(pad),
      child: Column(
        children: [
          if (headerH > 0)
            ClipRRect(
              borderRadius: BorderRadius.circular(roundedPanel ? 20 : 0),
              child: SizedBox(height: headerH, width: double.infinity, child: _headerImageOrGradient(tpl, headerH)),
            ),
          if (headerH > 0) SizedBox(height: compact ? 16 : 20),
          _avatar(document.avatarImageBase64, avatarSize, ring),
          SizedBox(height: compact ? 10 : 14),
          if (panel || softPanel)
            Container(
              width: double.infinity,
              padding: EdgeInsets.all(pad),
              decoration: BoxDecoration(
                color: softPanel ? tpl.panelBg.withValues(alpha: 0.95) : tpl.panelBg,
                borderRadius: BorderRadius.circular(roundedPanel ? 24 : (softPanel ? 20 : 0)),
                border: null,
              ),
              child: Column(
                children: [
                  _belowName(tpl, name, tagline),
                  SizedBox(height: compact ? 12 : 16),
                  _linksColumn(links, tpl, 0),
                ],
              ),
            )
          else ...[
            _belowName(tpl, name, tagline),
            SizedBox(height: compact ? 14 : 18),
            _linksColumn(links, tpl, 0),
          ],
        ],
      ),
    );
  }

  Widget _goldLuxe(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (tpl.headerGradient != null)
          SizedBox(
            height: compact ? 120.0 : 160.0,
            width: double.infinity,
            child: _headerImageOrGradient(tpl, compact ? 120.0 : 160.0),
          )
        else
          Container(
            height: compact ? 6 : 8,
            color: tpl.accent,
          ),
        Transform.translate(
          offset: Offset(0, tpl.headerGradient != null ? -avatarSize * 0.4 : 0),
          child: Column(
            children: [
              _avatar(document.avatarImageBase64, avatarSize, ring),
              SizedBox(height: compact ? 10 : 14),
              _belowName(tpl, name, tagline),
              SizedBox(height: compact ? 12 : 16),
              _framedLinks(links, tpl, pad),
              SizedBox(height: pad),
            ],
          ),
        ),
      ],
    );
  }

  Widget _neonLayout(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Padding(
      padding: EdgeInsets.all(pad),
      child: Container(
        padding: EdgeInsets.all(pad),
        decoration: BoxDecoration(
          color: tpl.panelBg,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.2), blurRadius: 20, offset: const Offset(0, 6), spreadRadius: -4)],
        ),
        child: Column(
          children: [
            if (tpl.headerGradient != null)
              Container(
                height: compact ? 60 : 80,
                width: double.infinity,
                margin: EdgeInsets.only(bottom: compact ? 16 : 20),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  gradient: LinearGradient(colors: tpl.headerGradient!),
                ),
              ),
            _avatar(document.avatarImageBase64, avatarSize, ring),
            SizedBox(height: compact ? 10 : 14),
            _belowName(tpl, name, tagline),
            SizedBox(height: compact ? 14 : 18),
            _linksColumn(links, tpl, 0),
          ],
        ),
      ),
    );
  }

  Widget _marblePanel(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final headerH = compact ? 150.0 : 190.0;
    final curveH = compact ? 44.0 : 56.0;
    return _overlapHeaderSection(
      tpl: tpl,
      ring: ring,
      avatarSize: avatarSize,
      pad: pad,
      headerH: headerH,
      curveH: curveH,
      curvePainter: ngmyBioCurvedPanelPainter,
      minPageHeight: minPageHeight,
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight, nameGap: compact ? 8 : 10),
    );
  }

  /// bio.site reference — upward curve through avatar center, white body, left-aligned links.
  Widget _bioSiteClassic(
    NgmyBioTemplate tpl,
    NgmyBioRingStyle ring,
    double avatarSize,
    double pad,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    double minPageHeight = 0,
  }) {
    final headerH = compact ? 172.0 : 228.0;
    final curveDepth = compact ? 52.0 : 68.0;
    final bodyColor = _layoutBodyFill(tpl);
    final avatarSpan = _avatarWidgetSize(ring, avatarSize);
    final avatarCenterY = headerH - curveDepth * 0.5;
    final avatarTop = avatarCenterY - avatarSpan * 0.5;
    final contentTop = avatarCenterY + avatarSize * 0.5 + (compact ? 18.0 : 22.0);
    final bodyTop = headerH - curveDepth;
    final bodyHeight = minPageHeight > 0 ? math.max(minPageHeight - bodyTop, 400.0) : 1400.0;

    final stack = Stack(
      clipBehavior: Clip.none,
      children: [
        Positioned(
          top: bodyTop,
          left: 0,
          right: 0,
          child: ClipPath(
            clipper: _BioSiteBodyTopClipper(curveDepth: curveDepth),
            child: ColoredBox(
              color: bodyColor,
              child: SizedBox(width: double.infinity, height: bodyHeight),
            ),
          ),
        ),
        SizedBox(
          height: headerH,
          width: double.infinity,
          child: ClipPath(
            clipper: _BioSiteHeaderBottomClipper(curveDepth: curveDepth),
            child: Stack(
              fit: StackFit.expand,
              children: [
                _headerImageOrGradient(tpl, headerH),
                _headerEffectOverlay(tpl),
              ],
            ),
          ),
        ),
        Positioned(
          top: avatarTop,
          left: 0,
          right: 0,
          child: Center(child: _avatar(document.avatarImageBase64, avatarSize, ring)),
        ),
        Positioned(
          top: contentTop,
          left: pad,
          right: pad,
          bottom: minPageHeight > 0 ? pad : null,
          child: _bioSiteBelowAvatar(tpl, name, tagline, links, pad, minPageHeight: minPageHeight),
        ),
      ],
    );

    if (minPageHeight <= 0) return stack;
    return SizedBox(height: minPageHeight, width: double.infinity, child: stack);
  }

  Widget _bioSiteBelowAvatar(
    NgmyBioTemplate tpl,
    String name,
    String tagline,
    List<NgmyBioLink> links,
    double pad, {
    double minPageHeight = 0,
  }) {
    final intro = Column(
      children: [
        _bioSiteNameBlock(tpl, name, tagline),
        SizedBox(height: compact ? 16 : 22),
      ],
    );
    if (minPageHeight <= 0) {
      return Column(
        children: [
          intro,
          _framedLinks(links, tpl, pad),
          SizedBox(height: pad),
        ],
      );
    }
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        intro,
        Expanded(
          child: SingleChildScrollView(
            clipBehavior: Clip.none,
            physics: const BouncingScrollPhysics(),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                _framedLinks(links, tpl, pad),
                SizedBox(height: math.max(120.0, minPageHeight * 0.15)),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _bioSiteNameBlock(NgmyBioTemplate tpl, String name, String tagline) {
    return Column(
      children: [
        Text(
          name,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize: compact ? 22 : 28,
            fontWeight: FontWeight.w800,
            color: tpl.titleColor,
            letterSpacing: -0.3,
            height: 1.1,
          ),
        ),
        if (tagline.isNotEmpty) ...[
          SizedBox(height: compact ? 6 : 8),
          Text(
            tagline.toUpperCase(),
            textAlign: TextAlign.center,
            style: TextStyle(
              fontFamily: 'Georgia',
              fontSize: compact ? 11 : 12,
              fontWeight: FontWeight.w500,
              letterSpacing: 1.4,
              color: tpl.subtitleColor,
            ),
          ),
        ],
        if (document.socialLinks.hasAny) ...[
          SizedBox(height: compact ? 10 : 12),
          NgmyBioSocialRow(
            links: document.socialLinks,
            compact: compact,
            lightBackground: true,
          ),
        ],
      ],
    );
  }

  bool _isBioSiteLayout(NgmyBioTemplate tpl) => tpl.layout == NgmyBioLayoutStyle.bioSiteClassic;

  Widget _angularHero(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final headerH = compact ? 100.0 : 130.0;
    return Column(
      children: [
        ClipPath(
          clipper: _AngularClipper(),
          child: SizedBox(height: headerH, width: double.infinity, child: _headerImageOrGradient(tpl, headerH)),
        ),
        Transform.translate(
          offset: Offset(0, -avatarSize * 0.35),
          child: Column(
            children: [
              _avatar(document.avatarImageBase64, avatarSize, ring),
              SizedBox(height: compact ? 8 : 12),
              _belowName(tpl, name, tagline),
              SizedBox(height: compact ? 14 : 18),
              Padding(padding: EdgeInsets.symmetric(horizontal: pad), child: _linksColumn(links, tpl, 0)),
            ],
          ),
        ),
        SizedBox(height: avatarSize * 0.1),
      ],
    );
  }

  Widget _glassFloat(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final panel = Container(
      padding: EdgeInsets.all(pad + 4),
      decoration: BoxDecoration(
        color: lightweight || kIsWeb ? tpl.panelBg.withValues(alpha: 0.92) : tpl.panelBg,
        borderRadius: BorderRadius.circular(20),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.15), blurRadius: 18, offset: const Offset(0, 4), spreadRadius: -2)],
      ),
      child: Column(
        children: [
          if (tpl.headerGradient != null)
            Container(
              height: compact ? 70 : 90,
              width: double.infinity,
              margin: EdgeInsets.only(bottom: compact ? 14 : 18),
              decoration: BoxDecoration(borderRadius: BorderRadius.circular(14), gradient: LinearGradient(colors: tpl.headerGradient!)),
            ),
          _avatar(document.avatarImageBase64, avatarSize, ring),
          SizedBox(height: compact ? 10 : 14),
              _belowName(tpl, name, tagline),
          SizedBox(height: compact ? 14 : 18),
          _linksColumn(links, tpl, 0),
        ],
      ),
    );

    return Padding(
      padding: EdgeInsets.all(pad),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: lightweight || kIsWeb
            ? panel
            : ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 12,
              child: panel,
              ),
      ),
    );
  }

  Widget _editorialLeft(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final smallAvatar = avatarSize * 0.85;
    return Padding(
      padding: EdgeInsets.all(pad),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              _avatar(document.avatarImageBase64, smallAvatar, ring),
              SizedBox(width: pad),
              Expanded(child: _nameBlock(tpl, name, tagline, align: TextAlign.left)),
            ],
          ),
          NgmyBioSocialRow(
            links: document.socialLinks,
            compact: compact,
            lightBackground: !_isDarkBg(tpl.pageBg),
          ),
          SizedBox(height: compact ? 16 : 24),
          Container(width: 48, height: 2, color: tpl.accent),
          SizedBox(height: compact ? 12 : 16),
          _linksColumn(links, tpl, 0),
        ],
      ),
    );
  }

  Widget _velvetLayout(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Column(
      children: [
        Container(
          height: compact ? 90 : 120,
          width: double.infinity,
          decoration: BoxDecoration(gradient: LinearGradient(colors: tpl.headerGradient ?? [tpl.pageBg, tpl.panelBg])),
          child: Center(child: Icon(Icons.auto_awesome, color: tpl.accent.withValues(alpha: 0.3), size: compact ? 40 : 56)),
        ),
        Transform.translate(
          offset: Offset(0, -avatarSize * 0.4),
          child: Column(
            children: [
              _avatar(document.avatarImageBase64, avatarSize, ring),
              SizedBox(height: compact ? 8 : 12),
              _belowName(tpl, name, tagline),
              SizedBox(height: compact ? 14 : 18),
              Padding(padding: EdgeInsets.symmetric(horizontal: pad), child: _linksColumn(links, tpl, 0)),
            ],
          ),
        ),
        SizedBox(height: avatarSize * 0.1),
      ],
    );
  }

  Widget _glowLayout(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Padding(
      padding: EdgeInsets.all(pad),
      child: Column(
        children: [
          Container(
            padding: EdgeInsets.all(pad),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.35), blurRadius: 32, spreadRadius: 4)],
            ),
            child: _avatar(document.avatarImageBase64, avatarSize, ring),
          ),
          SizedBox(height: compact ? 14 : 18),
              _belowName(tpl, name, tagline),
          SizedBox(height: compact ? 14 : 18),
          _linksColumn(links, tpl, 0),
        ],
      ),
    );
  }

  Widget _sunsetArc(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final headerH = compact ? 140.0 : 180.0;
    final curveH = compact ? 44.0 : 56.0;
    return _overlapHeaderSection(
      tpl: tpl,
      ring: ring,
      avatarSize: avatarSize,
      pad: pad,
      headerH: headerH,
      curveH: curveH,
      curvePainter: ngmyBioCurvedPanelPainter,
      minPageHeight: minPageHeight,
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight, nameGap: compact ? 6 : 8),
    );
  }

  Widget _organicHeader(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final bodyColor = _seamlessBody(tpl);
    final headerH = compact ? 130.0 : 170.0;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        ClipPath(
          clipper: _OrganicClipper(),
          child: SizedBox(height: headerH, width: double.infinity, child: _headerImageOrGradient(tpl, headerH)),
        ),
        ColoredBox(
          color: bodyColor,
          child: Transform.translate(
            offset: Offset(0, -avatarSize * 0.4),
            child: Column(
              children: [
                _avatar(document.avatarImageBase64, avatarSize, ring),
                SizedBox(height: compact ? 8 : 12),
                _belowName(tpl, name, tagline),
                SizedBox(height: compact ? 14 : 18),
                _framedLinks(links, tpl, pad),
                SizedBox(height: pad),
              ],
            ),
          ),
        ),
      ],
    );
  }

  Widget _boldStripe(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          height: compact ? 6 : 8,
          width: double.infinity,
          color: tpl.accent,
        ),
        SizedBox(height: compact ? 20 : 28),
        _avatar(document.avatarImageBase64, avatarSize, ring),
        SizedBox(height: compact ? 10 : 14),
              _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 14 : 18),
        _framedLinks(links, tpl, pad),
        SizedBox(height: pad),
      ],
    );
  }

  Widget _photoImmersive(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final hasHeader = document.headerImageBase64.isNotEmpty;
    return Column(
      children: [
        if (hasHeader)
          SizedBox(height: compact ? 140 : 180, width: double.infinity, child: _headerImageOrGradient(tpl, compact ? 140 : 180))
        else
          SizedBox(height: compact ? 60 : 80),
        Transform.translate(
          offset: Offset(0, hasHeader ? -avatarSize * 0.45 : 0),
          child: Container(
            width: double.infinity,
            margin: EdgeInsets.symmetric(horizontal: pad),
            padding: EdgeInsets.all(pad),
            decoration: BoxDecoration(
              color: tpl.panelBg,
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              children: [
                if (!hasHeader) _avatar(document.avatarImageBase64, avatarSize, ring),
                if (!hasHeader) SizedBox(height: compact ? 10 : 14),
                if (hasHeader)
                  Center(child: _avatar(document.avatarImageBase64, avatarSize, ring))
                else
                  const SizedBox.shrink(),
                if (hasHeader) SizedBox(height: compact ? 10 : 14),
                _belowName(tpl, name, tagline),
                SizedBox(height: compact ? 12 : 16),
                _linksColumn(links, tpl, 0),
              ],
            ),
          ),
        ),
        SizedBox(height: pad),
      ],
    );
  }

  Widget _diamondWhite(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Padding(
      padding: EdgeInsets.all(pad),
      child: Column(
        children: [
          SizedBox(height: compact ? 12 : 20),
          Stack(
            alignment: Alignment.center,
            children: [
              Container(
                width: avatarSize + 24,
                height: avatarSize + 24,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.12), blurRadius: 12, spreadRadius: 2)],
                ),
              ),
              _avatar(document.avatarImageBase64, avatarSize, ring),
            ],
          ),
          SizedBox(height: compact ? 12 : 16),
              _belowName(tpl, name, tagline),
          SizedBox(height: compact ? 6 : 8),
          Container(width: 32, height: 1, color: tpl.subtitleColor.withValues(alpha: 0.2)),
          SizedBox(height: compact ? 14 : 18),
          _linksColumn(links, tpl, 0),
        ],
      ),
    );
  }


  // ══════════════════════════════════════════════════════════════════════════
  // Pro bio layouts (2026-10). Each has its own structure and decorations.
  // ══════════════════════════════════════════════════════════════════════════

  /// Published full-height pages give layouts a fixed box; scroll inside it.
  Widget _proScroll(Widget child, double minPageHeight) {
    if (minPageHeight <= 0) return child;
    return SingleChildScrollView(clipBehavior: Clip.none, child: ConstrainedBox(constraints: BoxConstraints(minHeight: minPageHeight), child: child));
  }

  TextStyle _mono(Color color, double size, {FontWeight weight = FontWeight.w700}) =>
      TextStyle(fontFamily: 'monospace', color: color, fontSize: size, fontWeight: weight, letterSpacing: 0.6);

  // ── Robot HUD ─────────────────────────────────────────────────────────────
  Widget _proRobotHud(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final ringSize = avatarSize + (compact ? 44 : 60);
    return _proScroll(
      Padding(
        padding: EdgeInsets.fromLTRB(pad, pad, pad, pad),
        child: Column(
          children: [
            // Status bar.
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 6),
              decoration: BoxDecoration(border: Border.all(color: a.withValues(alpha: 0.5)), color: a.withValues(alpha: 0.06)),
              child: Row(
                children: [
                  _ProBlinkDot(color: a, animate: !lightweight),
                  const SizedBox(width: 6),
                  Text('SYS://ONLINE', style: _mono(a, 10)),
                  const Spacer(),
                  Text('ID ${name.hashCode.abs().toRadixString(16).toUpperCase().padLeft(6, '0').substring(0, 6)}', style: _mono(a.withValues(alpha: 0.7), 10)),
                ],
              ),
            ),
            SizedBox(height: compact ? 18 : 26),
            SizedBox(
              width: ringSize,
              height: ringSize,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  _ProSpin(
                    animate: !lightweight,
                    seconds: 9,
                    child: CustomPaint(size: Size.square(ringSize), painter: _ProTargetPainter(a)),
                  ),
                  _ProSpin(
                    animate: !lightweight,
                    seconds: 5,
                    reverse: true,
                    child: CustomPaint(size: Size.square(ringSize - 18), painter: _ProDashRingPainter(a.withValues(alpha: 0.5))),
                  ),
                  _avatar(document.avatarImageBase64, avatarSize, ring),
                ],
              ),
            ),
            SizedBox(height: compact ? 12 : 16),
            Text(
              name.toUpperCase(),
              textAlign: TextAlign.center,
              style: _mono(tpl.titleColor, compact ? 18 : 22, weight: FontWeight.w900).copyWith(
                letterSpacing: 2,
                shadows: [Shadow(color: a, blurRadius: 14)],
              ),
            ),
            if (tagline.isNotEmpty) ...[
              const SizedBox(height: 6),
              Text('> $tagline _', textAlign: TextAlign.center, style: _mono(a, compact ? 10.5 : 12)),
            ],
            NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: false),
            SizedBox(height: compact ? 14 : 18),
            for (var i = 0; i < links.length; i++)
              Row(
                crossAxisAlignment: CrossAxisAlignment.center,
                children: [
                  Container(
                    width: compact ? 30 : 36,
                    margin: const EdgeInsets.only(right: 8, bottom: 10),
                    padding: const EdgeInsets.symmetric(vertical: 4),
                    decoration: BoxDecoration(border: Border.all(color: a.withValues(alpha: 0.6))),
                    child: Text((i + 1).toString().padLeft(2, '0'), textAlign: TextAlign.center, style: _mono(a, 10)),
                  ),
                  Expanded(child: _linkCard(links[i], tpl)),
                ],
              ),
            SizedBox(height: compact ? 8 : 12),
            Text('// END OF TRANSMISSION', style: _mono(a.withValues(alpha: 0.6), 9.5)),
            if (!fullBleed) ...[
              const SizedBox(height: 14),
              _madeByNgmyWatermark(tpl),
            ],
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // ── Orbit (planet with satellites) ────────────────────────────────────────
  Widget _proOrbit(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final size = avatarSize + (compact ? 90 : 120);
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            SizedBox(height: compact ? 10 : 18),
            SizedBox(
              width: size,
              height: size,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Container(
                    width: size * 0.92,
                    height: size * 0.92,
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: RadialGradient(colors: [tpl.accent.withValues(alpha: 0.35), Colors.transparent]),
                    ),
                  ),
                  _ProSpin(
                    animate: !lightweight,
                    seconds: 14,
                    child: CustomPaint(size: Size.square(size), painter: _ProOrbitPainter(tpl.accent, moons: 3)),
                  ),
                  _ProSpin(
                    animate: !lightweight,
                    seconds: 8,
                    reverse: true,
                    child: CustomPaint(size: Size.square(size * 0.74), painter: _ProOrbitPainter(tpl.subtitleColor, moons: 2)),
                  ),
                  _avatar(document.avatarImageBase64, avatarSize, ring),
                ],
              ),
            ),
            SizedBox(height: compact ? 8 : 12),
            _belowName(tpl, name, tagline),
            SizedBox(height: compact ? 14 : 18),
            _linksColumn(links, tpl, 0),
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // ── Polaroid ──────────────────────────────────────────────────────────────
  Widget _proPolaroid(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final photo = avatarSize * 1.55;
    Widget polaroid(double angle, {bool front = false}) => Transform.rotate(
          angle: angle,
          child: Container(
            padding: EdgeInsets.fromLTRB(8, 8, 8, front ? 30 : 26),
            decoration: BoxDecoration(
              color: Colors.white,
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.25), blurRadius: 10, offset: const Offset(2, 6))],
            ),
            child: SizedBox(
              width: photo,
              height: photo,
              child: front
                  ? (document.avatarImageBase64.isNotEmpty
                      ? _bioImage(document.avatarImageBase64, fit: BoxFit.cover, width: photo, height: photo)
                      : Container(color: tpl.accent.withValues(alpha: 0.3), child: Icon(Icons.person_rounded, size: photo * 0.5, color: Colors.white)))
                  : Container(color: tpl.accent.withValues(alpha: front ? 0.3 : 0.18)),
            ),
          ),
        );
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            SizedBox(height: compact ? 14 : 22),
            SizedBox(
              height: photo + 70,
              child: Stack(
                alignment: Alignment.center,
                clipBehavior: Clip.none,
                children: [
                  Positioned(left: null, child: Transform.translate(offset: const Offset(-36, 6), child: polaroid(-0.16))),
                  Transform.translate(offset: const Offset(34, 2), child: polaroid(0.13)),
                  polaroid(-0.03, front: true),
                  // Tape.
                  Positioned(
                    top: 0,
                    child: Transform.rotate(
                      angle: 0.05,
                      child: Container(width: 64, height: 18, color: const Color(0xCCFDE68A)),
                    ),
                  ),
                ],
              ),
            ),
            Text(
              name,
              textAlign: TextAlign.center,
              style: TextStyle(fontFamily: 'Georgia', fontStyle: FontStyle.italic, fontSize: compact ? 24 : 30, fontWeight: FontWeight.w700, color: tpl.titleColor),
            ),
            if (tagline.isNotEmpty)
              Text(tagline, textAlign: TextAlign.center, style: TextStyle(color: tpl.subtitleColor, fontSize: compact ? 12 : 13, fontWeight: FontWeight.w600)),
            NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: !_isDarkBg(tpl.pageBg)),
            SizedBox(height: compact ? 14 : 18),
            for (var i = 0; i < links.length; i++)
              Transform.rotate(angle: i.isEven ? -0.012 : 0.012, child: _linkCard(links[i], tpl)),
            if (!fullBleed) ...[
              const SizedBox(height: 14),
              _madeByNgmyWatermark(tpl),
            ],
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // ── Magazine cover ────────────────────────────────────────────────────────
  Widget _proMagazine(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final parts = name.trim().split(RegExp(r'\s+'));
    final coverH = compact ? 300.0 : 380.0;
    return _proScroll(
      Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SizedBox(
            height: coverH,
            child: Stack(
              fit: StackFit.expand,
              children: [
                if (document.headerImageBase64.isNotEmpty || document.avatarImageBase64.isNotEmpty)
                  _bioImage(
                    document.headerImageBase64.isNotEmpty ? document.headerImageBase64 : document.avatarImageBase64,
                    fit: BoxFit.cover,
                    alignment: Alignment.topCenter,
                  )
                else
                  DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: tpl.headerGradient ?? [tpl.accent, tpl.pageBg]))),
                DecoratedBox(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.topCenter,
                      end: Alignment.bottomCenter,
                      colors: [Colors.black.withValues(alpha: 0.35), Colors.transparent, Colors.black.withValues(alpha: 0.75)],
                    ),
                  ),
                ),
                Positioned(
                  top: pad,
                  left: pad,
                  right: pad,
                  child: FittedBox(
                    fit: BoxFit.scaleDown,
                    alignment: Alignment.topLeft,
                    child: Text(
                      parts.first.toUpperCase(),
                      style: TextStyle(fontFamily: 'Georgia', fontSize: compact ? 64 : 84, fontWeight: FontWeight.w900, color: tpl.accent, height: 0.9, letterSpacing: -2),
                    ),
                  ),
                ),
                Positioned(
                  top: pad + (compact ? 62 : 80),
                  left: pad,
                  child: Text('ISSUE Nº ${DateTime.now().month.toString().padLeft(2, '0')}  ·  ${DateTime.now().year}', style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 2)),
                ),
                Positioned(
                  left: pad,
                  right: pad,
                  bottom: pad,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        color: tpl.accent,
                        child: const Text('EXCLUSIVE', style: TextStyle(color: Colors.black, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.6)),
                      ),
                      const SizedBox(height: 6),
                      Text(name, style: TextStyle(color: Colors.white, fontSize: compact ? 22 : 28, fontWeight: FontWeight.w900, height: 1)),
                      if (tagline.isNotEmpty)
                        Text(tagline, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: compact ? 12 : 13, fontWeight: FontWeight.w600)),
                    ],
                  ),
                ),
                Positioned(
                  right: pad,
                  bottom: pad,
                  child: Container(
                    padding: const EdgeInsets.all(4),
                    color: Colors.white,
                    child: Row(
                      children: [
                        for (var i = 0; i < 18; i++)
                          Container(width: i % 3 == 0 ? 2.2 : 1.1, height: 22, margin: const EdgeInsets.only(right: 1.2), color: Colors.black),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.fromLTRB(pad, pad * 0.8, pad, 0),
            child: Column(
              children: [
                Text('INSIDE THIS ISSUE', style: TextStyle(color: tpl.accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 2)),
                NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: !_isDarkBg(tpl.pageBg)),
                SizedBox(height: compact ? 10 : 14),
                _linksColumn(links, tpl, 0),
              ],
            ),
          ),
        ],
      ),
      minPageHeight,
    );
  }

  // ── Liquid blob ───────────────────────────────────────────────────────────
  Widget _proLiquid(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final blob = avatarSize + (compact ? 80 : 110);
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            SizedBox(height: compact ? 8 : 14),
            SizedBox(
              width: blob,
              height: blob,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  _ProBlob(colors: tpl.headerGradient ?? [tpl.accent, tpl.subtitleColor], size: blob, animate: !lightweight),
                  _avatar(document.avatarImageBase64, avatarSize, ring),
                ],
              ),
            ),
            SizedBox(height: compact ? 8 : 12),
            _belowName(tpl, name, tagline),
            SizedBox(height: compact ? 14 : 18),
            _linksColumn(links, tpl, 0),
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // ── Arcade (8-bit) ────────────────────────────────────────────────────────
  Widget _proArcade(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final score = (name.codeUnits.fold<int>(0, (s, c) => s + c) * 37 % 99999).toString().padLeft(6, '0');
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            Row(
              children: [
                Text('1UP', style: _mono(const Color(0xFFEF4444), 12, weight: FontWeight.w900)),
                const SizedBox(width: 8),
                Text(score, style: _mono(Colors.white, 12, weight: FontWeight.w900)),
                const Spacer(),
                Text('HI-SCORE', style: _mono(a, 12, weight: FontWeight.w900)),
              ],
            ),
            SizedBox(height: compact ? 16 : 24),
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(border: Border.all(color: a, width: 4)),
              child: Container(
                padding: const EdgeInsets.all(4),
                decoration: BoxDecoration(border: Border.all(color: Colors.white, width: 2)),
                child: SizedBox(
                  width: avatarSize,
                  height: avatarSize,
                  child: document.avatarImageBase64.isNotEmpty
                      ? _bioImage(document.avatarImageBase64, fit: BoxFit.cover, width: avatarSize, height: avatarSize)
                      : Icon(Icons.videogame_asset_rounded, color: a, size: avatarSize * 0.6),
                ),
              ),
            ),
            SizedBox(height: compact ? 12 : 16),
            Text('PLAYER 1', style: _mono(const Color(0xFFFACC15), 11, weight: FontWeight.w900).copyWith(letterSpacing: 3)),
            const SizedBox(height: 4),
            Text(name.toUpperCase(), textAlign: TextAlign.center, style: _mono(tpl.titleColor, compact ? 18 : 22, weight: FontWeight.w900).copyWith(letterSpacing: 2)),
            if (tagline.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 4),
                child: Text(tagline.toUpperCase(), textAlign: TextAlign.center, style: _mono(tpl.subtitleColor, 10.5)),
              ),
            NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: false),
            SizedBox(height: compact ? 12 : 16),
            for (var i = 0; i < links.length; i++) ...[
              Align(
                alignment: Alignment.centerLeft,
                child: Text('LEVEL ${i + 1}', style: _mono(a, 9.5, weight: FontWeight.w900)),
              ),
              const SizedBox(height: 2),
              _linkCard(links[i], tpl),
            ],
            SizedBox(height: compact ? 8 : 12),
            _ProBlinkText(text: 'INSERT COIN', style: _mono(const Color(0xFFFACC15), 11, weight: FontWeight.w900), animate: !lightweight),
            if (!fullBleed) ...[
              const SizedBox(height: 14),
              _madeByNgmyWatermark(tpl),
            ],
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // ── Boarding pass ─────────────────────────────────────────────────────────
  Widget _proBoardingPass(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final small = avatarSize * 0.72;
    Widget field(String label, String value) => Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(label, style: TextStyle(color: const Color(0xFF64748B), fontSize: 9, fontWeight: FontWeight.w800, letterSpacing: 1.2)),
            Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Color(0xFF0F172A), fontSize: 15, fontWeight: FontWeight.w900)),
          ],
        );
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            SizedBox(height: compact ? 8 : 14),
            Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(18),
                boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 18, offset: const Offset(0, 8))],
              ),
              child: Column(
                children: [
                  Container(
                    padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
                    decoration: BoxDecoration(
                      color: a,
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(18)),
                    ),
                    child: Row(
                      children: [
                        const Icon(Icons.flight_takeoff_rounded, color: Colors.white),
                        const SizedBox(width: 8),
                        const Flexible(child: Text('BOARDING PASS', maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 2, fontSize: 12))),
                        const SizedBox(width: 8),
                        Text('FIRST CLASS', style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontWeight: FontWeight.w800, fontSize: 10)),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 14, 16, 10),
                    child: Row(
                      children: [
                        _avatar(document.avatarImageBase64, small, ring),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              field('PASSENGER', name),
                              if (tagline.isNotEmpty) Text(tagline, maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: a, fontSize: 11, fontWeight: FontWeight.w700)),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    child: Row(
                      children: [
                        Expanded(child: field('FROM', 'HERE')),
                        Icon(Icons.arrow_forward_rounded, color: a),
                        Expanded(child: Align(alignment: Alignment.centerRight, child: field('TO', 'MY LINKS'))),
                      ],
                    ),
                  ),
                  const SizedBox(height: 10),
                  // Perforation.
                  Row(
                    children: [
                      Container(width: 12, height: 24, decoration: BoxDecoration(color: tpl.pageBg, borderRadius: const BorderRadius.horizontal(right: Radius.circular(12)))),
                      Expanded(child: CustomPaint(painter: _ProDashLinePainter(const Color(0xFFCBD5E1)), child: const SizedBox(height: 2))),
                      Container(width: 12, height: 24, decoration: BoxDecoration(color: tpl.pageBg, borderRadius: const BorderRadius.horizontal(left: Radius.circular(12)))),
                    ],
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(16, 8, 16, 14),
                    child: Row(
                      children: [
                        Expanded(
                          child: Row(
                            children: [
                              for (var i = 0; i < 30; i++)
                                Container(width: i % 4 == 0 ? 2.6 : 1.2, height: 30, margin: const EdgeInsets.only(right: 1.6), color: const Color(0xFF0F172A)),
                            ],
                          ),
                        ),
                        field('GATE', '${links.length.clamp(1, 99)}'),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            SizedBox(height: compact ? 14 : 18),
            for (var i = 0; i < links.length; i++)
              Row(
                children: [
                  Container(
                    margin: const EdgeInsets.only(right: 8, bottom: 10),
                    padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 4),
                    decoration: BoxDecoration(color: a, borderRadius: BorderRadius.circular(6)),
                    child: Text('G${i + 1}', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10)),
                  ),
                  Expanded(child: _linkCard(links[i], tpl)),
                ],
              ),
            if (!fullBleed) ...[
              const SizedBox(height: 10),
              _madeByNgmyWatermark(tpl),
            ],
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // ── Holographic ID card ───────────────────────────────────────────────────
  Widget _proHoloId(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            SizedBox(height: compact ? 10 : 16),
            AspectRatio(
              aspectRatio: 1.586,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(18),
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    _ProHoloSheen(animate: !lightweight, base: tpl.headerGradient ?? [tpl.accent, tpl.pageBg]),
                    Positioned.fill(
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(18),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 1.2),
                        ),
                      ),
                    ),
                    Positioned(
                      left: 16,
                      top: 16,
                      child: Container(
                        width: 38,
                        height: 28,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(5),
                          gradient: const LinearGradient(colors: [Color(0xFFFDE68A), Color(0xFFD4AF37), Color(0xFFB8860B)]),
                        ),
                        child: CustomPaint(painter: _ProChipPainter()),
                      ),
                    ),
                    Positioned(right: 16, top: 14, child: Icon(Icons.contactless_rounded, color: Colors.white.withValues(alpha: 0.85), size: 26)),
                    Positioned(right: 16, bottom: 16, child: _avatar(document.avatarImageBase64, avatarSize * 0.78, ring)),
                    Positioned(
                      left: 16,
                      right: avatarSize * 0.78 + 28,
                      bottom: 16,
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('NGMY • MEMBER', style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 9.5, fontWeight: FontWeight.w800, letterSpacing: 1.8)),
                          const SizedBox(height: 4),
                          Text(name.toUpperCase(), maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.w900, letterSpacing: 1.2, shadows: [Shadow(color: Colors.black38, blurRadius: 6)])),
                          if (tagline.isNotEmpty)
                            Text(tagline, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 11, fontWeight: FontWeight.w600)),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: !_isDarkBg(tpl.pageBg)),
            SizedBox(height: compact ? 14 : 18),
            _linksColumn(links, tpl, 0),
          ],
        ),
      ),
      minPageHeight,
    );
  }


  // ── Pro bio layouts, set 2 (2026-10) ──────────────────────────────────────

  /// Shared column: decoration on top, then name, socials and links.
  Widget _proStack(
    NgmyBioTemplate tpl,
    double pad,
    Widget hero,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    double minPageHeight = 0,
    Widget? nameOverride,
    Widget Function(int i, Widget card)? wrapLink,
    double topGap = 14,
  }) {
    return _proScroll(
      Padding(
        padding: EdgeInsets.all(pad),
        child: Column(
          children: [
            SizedBox(height: compact ? topGap * 0.6 : topGap),
            hero,
            SizedBox(height: compact ? 8 : 12),
            nameOverride ?? _belowName(tpl, name, tagline),
            if (nameOverride != null)
              NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: !_isDarkBg(tpl.pageBg)),
            SizedBox(height: compact ? 14 : 18),
            if (wrapLink == null)
              _linksColumn(links, tpl, 0)
            else ...[
              for (var i = 0; i < links.length; i++) wrapLink(i, _linkCard(links[i], tpl)),
              if (!fullBleed) ...[
                SizedBox(height: compact ? 12 : 16),
                _madeByNgmyWatermark(tpl),
              ],
            ],
          ],
        ),
      ),
      minPageHeight,
    );
  }

  // Neon sign on a brick wall.
  Widget _proNeonSign(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final b = tpl.subtitleColor;
    return Stack(
      children: [
        Positioned.fill(child: CustomPaint(painter: _ProBrickPainter(Colors.white.withValues(alpha: 0.05)))),
        _proStack(
          tpl,
          pad,
          _ProFlicker(
            animate: !lightweight,
            child: Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(avatarSize),
                border: Border.all(color: a, width: 3),
                boxShadow: [
                  BoxShadow(color: a.withValues(alpha: 0.8), blurRadius: 18, spreadRadius: 1),
                  BoxShadow(color: a.withValues(alpha: 0.4), blurRadius: 40, spreadRadius: 4),
                ],
              ),
              child: _avatar(document.avatarImageBase64, avatarSize, ring),
            ),
          ),
          name,
          tagline,
          links,
          minPageHeight: minPageHeight,
          topGap: 26,
          nameOverride: Column(
            children: [
              _ProFlicker(
                animate: !lightweight,
                child: Text(
                  name,
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontFamily: 'Georgia',
                    fontStyle: FontStyle.italic,
                    fontSize: compact ? 26 : 32,
                    fontWeight: FontWeight.w700,
                    color: Colors.white,
                    shadows: [Shadow(color: a, blurRadius: 8), Shadow(color: a, blurRadius: 22)],
                  ),
                ),
              ),
              if (tagline.isNotEmpty)
                Text(
                  tagline.toUpperCase(),
                  textAlign: TextAlign.center,
                  style: TextStyle(color: b, letterSpacing: 3, fontSize: 11, fontWeight: FontWeight.w800, shadows: [Shadow(color: b, blurRadius: 10)]),
                ),
            ],
          ),
        ),
      ],
    );
  }

  // Spinning vinyl record.
  Widget _proVinyl(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final disc = avatarSize * 2.1;
    return _proStack(
      tpl,
      pad,
      SizedBox(
        width: disc + 40,
        height: disc,
        child: Stack(
          children: [
            Positioned(
              left: 0,
              top: 0,
              child: _ProSpin(
                animate: !lightweight,
                seconds: 4,
                child: SizedBox(
                  width: disc,
                  height: disc,
                  child: Stack(
                    alignment: Alignment.center,
                    children: [
                      CustomPaint(size: Size.square(disc), painter: _ProVinylPainter(tpl.accent)),
                      ClipOval(
                        child: SizedBox(
                          width: avatarSize * 0.9,
                          height: avatarSize * 0.9,
                          child: document.avatarImageBase64.isNotEmpty
                              ? _bioImage(document.avatarImageBase64, fit: BoxFit.cover, width: avatarSize * 0.9, height: avatarSize * 0.9)
                              : ColoredBox(color: tpl.accent, child: Icon(Icons.music_note_rounded, color: Colors.white, size: avatarSize * 0.4)),
                        ),
                      ),
                      Container(width: 8, height: 8, decoration: const BoxDecoration(color: Colors.black, shape: BoxShape.circle)),
                    ],
                  ),
                ),
              ),
            ),
            Positioned(right: 0, top: 6, child: CustomPaint(size: Size(54, disc * 0.62), painter: _ProTonearmPainter(tpl.subtitleColor))),
          ],
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
      wrapLink: (i, card) => Row(
        children: [
          SizedBox(
            width: compact ? 28 : 34,
            child: Text('A${i + 1}', style: TextStyle(color: tpl.accent, fontWeight: FontWeight.w900, fontSize: 12)),
          ),
          Expanded(child: card),
        ],
      ),
    );
  }

  // Film strip borders.
  Widget _proFilmStrip(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final frame = avatarSize * 1.6;
    return Stack(
      children: [
        Positioned(left: 0, top: 0, bottom: 0, width: 22, child: CustomPaint(painter: _ProSprocketPainter(tpl.accent))),
        Positioned(right: 0, top: 0, bottom: 0, width: 22, child: CustomPaint(painter: _ProSprocketPainter(tpl.accent))),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 22),
          child: _proStack(
            tpl,
            pad,
            Column(
              children: [
                Container(
                  padding: const EdgeInsets.all(6),
                  decoration: BoxDecoration(color: Colors.black, border: Border.all(color: tpl.accent.withValues(alpha: 0.6))),
                  child: SizedBox(
                    width: frame * 1.3,
                    height: frame,
                    child: document.headerImageBase64.isNotEmpty || document.avatarImageBase64.isNotEmpty
                        ? _bioImage(document.headerImageBase64.isNotEmpty ? document.headerImageBase64 : document.avatarImageBase64, fit: BoxFit.cover, width: frame * 1.3, height: frame)
                        : DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: tpl.headerGradient ?? [tpl.accent, tpl.pageBg]))),
                  ),
                ),
                const SizedBox(height: 4),
                Text('▶ SCENE 01 · TAKE 1', style: _mono(tpl.accent, 9.5)),
              ],
            ),
            name,
            tagline,
            links,
            minPageHeight: minPageHeight,
            wrapLink: (i, card) => Row(
              children: [
                Text('${(i + 1) * 12}A', style: _mono(tpl.accent.withValues(alpha: 0.8), 9)),
                const SizedBox(width: 6),
                Expanded(child: card),
              ],
            ),
          ),
        ),
      ],
    );
  }

  // Floating 3D glass panels.
  Widget _proGlassStack(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final size = avatarSize * 2;
    Widget panel(double rot, double dx, double dy, Color c) => Transform(
          alignment: Alignment.center,
          transform: Matrix4.identity()
            ..setEntry(3, 2, 0.0012)
            ..rotateY(rot)
            ..rotateZ(rot * 0.3),
          child: Transform.translate(
            offset: Offset(dx, dy),
            child: Container(
              width: size * 0.78,
              height: size * 0.92,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(22),
                gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [c.withValues(alpha: 0.55), c.withValues(alpha: 0.12)]),
                border: Border.all(color: Colors.white.withValues(alpha: 0.45)),
              ),
            ),
          ),
        );
    final cols = tpl.headerGradient ?? [tpl.accent, tpl.subtitleColor];
    return _proStack(
      tpl,
      pad,
      _ProBob(
        animate: !lightweight,
        child: SizedBox(
          width: size + 40,
          height: size,
          child: Stack(
            alignment: Alignment.center,
            children: [
              panel(-0.55, -size * 0.32, 6, cols.first),
              panel(0.55, size * 0.32, 6, cols.last),
              _avatar(document.avatarImageBase64, avatarSize, ring),
            ],
          ),
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
    );
  }

  // Crown and sparkling gold rings.
  Widget _proCrown(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final outer = avatarSize + 40;
    return _proStack(
      tpl,
      pad,
      Column(
        children: [
          _ProBob(animate: !lightweight, amplitude: 3, child: Icon(Icons.workspace_premium_rounded, size: compact ? 36 : 44, color: a, shadows: [Shadow(color: a, blurRadius: 14)])),
          const SizedBox(height: 4),
          SizedBox(
            width: outer + 30,
            height: outer + 30,
            child: Stack(
              alignment: Alignment.center,
              children: [
                _ProSpin(animate: !lightweight, seconds: 16, child: CustomPaint(size: Size.square(outer + 30), painter: _ProSparkleRingPainter(a))),
                Container(
                  width: outer,
                  height: outer,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    border: Border.all(color: a, width: 2),
                    gradient: RadialGradient(colors: [a.withValues(alpha: 0.18), Colors.transparent]),
                  ),
                ),
                _avatar(document.avatarImageBase64, avatarSize, ring),
              ],
            ),
          ),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.eco_rounded, size: 18, color: a),
              const SizedBox(width: 6),
              Container(width: 60, height: 1, color: a),
              const SizedBox(width: 6),
              Transform.flip(flipX: true, child: Icon(Icons.eco_rounded, size: 18, color: a)),
            ],
          ),
        ],
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
    );
  }

  // Constellation of twinkling stars around the photo.
  Widget _proConstellation(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final size = avatarSize * 2.4;
    return _proStack(
      tpl,
      pad,
      SizedBox(
        width: size,
        height: size * 0.9,
        child: Stack(
          alignment: Alignment.center,
          children: [
            _ProTicker(animate: !lightweight, seconds: 4, builder: (t) => CustomPaint(size: Size(size, size * 0.9), painter: _ProConstellationPainter(tpl.accent, t))),
            _avatar(document.avatarImageBase64, avatarSize, ring),
          ],
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
    );
  }

  // Rotating sun rays.
  Widget _proSunburst(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final size = avatarSize * 2.3;
    return _proStack(
      tpl,
      pad,
      SizedBox(
        width: size,
        height: size,
        child: Stack(
          alignment: Alignment.center,
          children: [
            _ProSpin(animate: !lightweight, seconds: 24, child: CustomPaint(size: Size.square(size), painter: _ProRaysPainter(tpl.accent))),
            Container(
              width: avatarSize + 26,
              height: avatarSize + 26,
              decoration: BoxDecoration(shape: BoxShape.circle, boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.7), blurRadius: 30, spreadRadius: 4)]),
            ),
            _avatar(document.avatarImageBase64, avatarSize, ring),
          ],
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
      topGap: 4,
    );
  }

  // Bouncing audio equalizer.
  Widget _proEqualizer(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    return _proStack(
      tpl,
      pad,
      Column(
        children: [
          _avatar(document.avatarImageBase64, avatarSize, ring),
          const SizedBox(height: 14),
          _ProTicker(
            animate: !lightweight,
            seconds: 2,
            builder: (t) => CustomPaint(size: Size(compact ? 200 : 240, 40), painter: _ProEqualizerPainter(tpl.headerGradient ?? [tpl.accent, tpl.subtitleColor], t)),
          ),
        ],
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
      topGap: 26,
      wrapLink: (i, card) => Row(
        children: [
          Icon(Icons.play_circle_fill_rounded, color: tpl.accent, size: compact ? 22 : 26),
          const SizedBox(width: 8),
          Expanded(child: card),
        ],
      ),
    );
  }

  // Rising bubbles.
  Widget _proBubbles(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    return Stack(
      children: [
        Positioned.fill(child: IgnorePointer(child: _ProTicker(animate: !lightweight, seconds: 9, builder: (t) => CustomPaint(painter: _ProBubblePainter(tpl.accent, t))))),
        _proStack(
          tpl,
          pad,
          Container(
            padding: const EdgeInsets.all(10),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: RadialGradient(center: const Alignment(-0.4, -0.5), colors: [Colors.white.withValues(alpha: 0.45), tpl.accent.withValues(alpha: 0.12)]),
              border: Border.all(color: Colors.white.withValues(alpha: 0.6), width: 1.5),
            ),
            child: _avatar(document.avatarImageBase64, avatarSize, ring),
          ),
          name,
          tagline,
          links,
          minPageHeight: minPageHeight,
          topGap: 26,
        ),
      ],
    );
  }

  // Code editor window.
  Widget _proTerminal(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final keyword = const Color(0xFFC084FC);
    final str = const Color(0xFFFDE68A);
    Widget line(int n, List<TextSpan> parts) => Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(width: 22, child: Text('$n', style: _mono(Colors.white.withValues(alpha: 0.3), 10.5))),
            Expanded(child: Text.rich(TextSpan(children: parts), style: _mono(Colors.white, 11.5))),
          ],
        );
    return _proStack(
      tpl,
      pad,
      Container(
        decoration: BoxDecoration(
          color: const Color(0xFF0D1117),
          borderRadius: BorderRadius.circular(12),
          border: Border.all(color: Colors.white.withValues(alpha: 0.12)),
          boxShadow: [BoxShadow(color: a.withValues(alpha: 0.25), blurRadius: 24)],
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.05), borderRadius: const BorderRadius.vertical(top: Radius.circular(12))),
              child: Row(
                children: [
                  for (final c in const [Color(0xFFEF4444), Color(0xFFF59E0B), Color(0xFF22C55E)])
                    Container(width: 10, height: 10, margin: const EdgeInsets.only(right: 6), decoration: BoxDecoration(color: c, shape: BoxShape.circle)),
                  const SizedBox(width: 6),
                  Text('profile.dart', style: _mono(Colors.white.withValues(alpha: 0.6), 10.5)),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(12),
              child: Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _avatar(document.avatarImageBase64, avatarSize * 0.7, ring),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        line(1, [TextSpan(text: 'final ', style: TextStyle(color: keyword)), const TextSpan(text: 'me = Person(')]),
                        line(2, [TextSpan(text: "  name: ", style: TextStyle(color: a)), TextSpan(text: "'$name',", style: TextStyle(color: str))]),
                        if (tagline.isNotEmpty) line(3, [TextSpan(text: '  role: ', style: TextStyle(color: a)), TextSpan(text: "'$tagline',", style: TextStyle(color: str))]),
                        line(tagline.isNotEmpty ? 4 : 3, [const TextSpan(text: ');')]),
                        Row(children: [
                          SizedBox(width: 22, child: Text('${tagline.isNotEmpty ? 5 : 4}', style: _mono(Colors.white.withValues(alpha: 0.3), 10.5))),
                          _ProBlinkText(text: '▌', style: _mono(a, 12), animate: !lightweight),
                        ]),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
      nameOverride: const SizedBox.shrink(),
      wrapLink: (i, card) => Row(
        children: [
          Text('\$ ', style: _mono(a, 13, weight: FontWeight.w900)),
          Expanded(child: card),
        ],
      ),
    );
  }

  // Museum frame with a plaque.
  Widget _proGallery(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final w = avatarSize * 1.7;
    return _proStack(
      tpl,
      pad,
      Column(
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color.lerp(a, Colors.white, 0.4)!, a, Color.lerp(a, Colors.black, 0.45)!, a]),
              boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 18, offset: const Offset(0, 10))],
            ),
            child: Container(
              padding: const EdgeInsets.all(10),
              color: const Color(0xFFF5F0E6),
              child: SizedBox(
                width: w,
                height: w * 1.2,
                child: document.avatarImageBase64.isNotEmpty
                    ? _bioImage(document.avatarImageBase64, fit: BoxFit.cover, width: w, height: w * 1.2)
                    : ColoredBox(color: tpl.pageBg, child: Icon(Icons.person_rounded, size: w * 0.5, color: a)),
              ),
            ),
          ),
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
            decoration: BoxDecoration(
              gradient: LinearGradient(colors: [Color.lerp(a, Colors.white, 0.3)!, a]),
              borderRadius: BorderRadius.circular(3),
            ),
            child: Column(
              children: [
                Text(name, style: const TextStyle(fontFamily: 'Georgia', color: Color(0xFF1C1917), fontWeight: FontWeight.w700, fontSize: 16)),
                if (tagline.isNotEmpty) Text(tagline, style: const TextStyle(color: Color(0xFF44403C), fontSize: 10.5, fontStyle: FontStyle.italic)),
              ],
            ),
          ),
        ],
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
      nameOverride: const SizedBox.shrink(),
    );
  }

  // Moving heartbeat line.
  Widget _proPulse(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    return _proStack(
      tpl,
      pad,
      SizedBox(
        height: avatarSize + 30,
        child: Stack(
          alignment: Alignment.center,
          children: [
            Positioned.fill(
              child: _ProTicker(animate: !lightweight, seconds: 3, builder: (t) => CustomPaint(painter: _ProEcgPainter(tpl.accent, t))),
            ),
            _ProPulseScale(
              animate: !lightweight,
              child: Container(
                decoration: BoxDecoration(shape: BoxShape.circle, boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.6), blurRadius: 24)]),
                child: _avatar(document.avatarImageBase64, avatarSize, ring),
              ),
            ),
          ],
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
    );
  }

  // Postcard with stamp and postmark.
  Widget _proPostcard(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    return _proStack(
      tpl,
      pad,
      Transform.rotate(
        angle: -0.02,
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: const Color(0xFFFFFCF5),
            borderRadius: BorderRadius.circular(6),
            boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.2), blurRadius: 14, offset: const Offset(0, 8))],
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Greetings from', style: TextStyle(color: a, fontFamily: 'Georgia', fontStyle: FontStyle.italic, fontSize: 12)),
                    Text(name, style: const TextStyle(color: Color(0xFF1C1917), fontFamily: 'Georgia', fontWeight: FontWeight.w700, fontSize: 20, height: 1.1)),
                    const SizedBox(height: 6),
                    if (tagline.isNotEmpty) Text(tagline, style: const TextStyle(color: Color(0xFF57534E), fontSize: 11.5)),
                    const SizedBox(height: 10),
                    for (var i = 0; i < 3; i++) Container(height: 1, margin: const EdgeInsets.only(bottom: 9), color: const Color(0xFFD6D3D1)),
                  ],
                ),
              ),
              const SizedBox(width: 10),
              Column(
                children: [
                  Container(
                    padding: const EdgeInsets.all(3),
                    decoration: BoxDecoration(border: Border.all(color: a, width: 1.5)),
                    child: SizedBox(
                      width: avatarSize * 0.72,
                      height: avatarSize * 0.86,
                      child: document.avatarImageBase64.isNotEmpty
                          ? _bioImage(document.avatarImageBase64, fit: BoxFit.cover, width: avatarSize * 0.72, height: avatarSize * 0.86)
                          : ColoredBox(color: a.withValues(alpha: 0.25), child: Icon(Icons.person_rounded, color: a)),
                    ),
                  ),
                  const SizedBox(height: 6),
                  Transform.rotate(
                    angle: -0.3,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 3),
                      decoration: BoxDecoration(border: Border.all(color: a.withValues(alpha: 0.7), width: 1.5), borderRadius: BorderRadius.circular(20)),
                      child: Text('NGMY · ${DateTime.now().year}', style: TextStyle(color: a.withValues(alpha: 0.8), fontSize: 8.5, fontWeight: FontWeight.w900)),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
      name,
      tagline,
      links,
      minPageHeight: minPageHeight,
      nameOverride: const SizedBox.shrink(),
    );
  }

  // Bold diagonal split with sideways lettering.
  Widget _proDiagonal(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final first = name.trim().split(RegExp(r'\s+')).first.toUpperCase();
    final heroH = avatarSize * 2.2;
    return _proScroll(
      Column(
        children: [
          SizedBox(
            height: heroH,
            child: Stack(
              fit: StackFit.expand,
              children: [
                ClipPath(
                  clipper: _ProDiagonalClipper(),
                  child: DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(colors: tpl.headerGradient ?? [tpl.accent, tpl.subtitleColor]))),
                ),
                Positioned(
                  left: 6,
                  top: 0,
                  bottom: 0,
                  child: RotatedBox(
                    quarterTurns: 3,
                    child: Center(
                      child: Text(first, style: TextStyle(fontSize: compact ? 40 : 54, fontWeight: FontWeight.w900, color: Colors.white.withValues(alpha: 0.22), letterSpacing: 4)),
                    ),
                  ),
                ),
                Positioned(right: pad + 4, top: heroH * 0.18, child: _avatar(document.avatarImageBase64, avatarSize * 1.05, ring)),
              ],
            ),
          ),
          Padding(
            padding: EdgeInsets.fromLTRB(pad, 4, pad, pad),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: TextStyle(color: tpl.titleColor, fontSize: compact ? 26 : 32, fontWeight: FontWeight.w900, height: 1, letterSpacing: -0.8)),
                if (tagline.isNotEmpty) ...[
                  const SizedBox(height: 6),
                  Container(height: 3, width: 48, color: tpl.accent),
                  const SizedBox(height: 6),
                  Text(tagline, style: TextStyle(color: tpl.subtitleColor, fontSize: 12.5, fontWeight: FontWeight.w700)),
                ],
                NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: !_isDarkBg(tpl.pageBg)),
                SizedBox(height: compact ? 12 : 16),
                _linksColumn(links, tpl, 0),
              ],
            ),
          ),
        ],
      ),
      minPageHeight,
    );
  }

  // ── Set 3: one-of-a-kind layouts (each template owns its own design) ─────

  String _lt(NgmyBioLink l) => l.title.trim().isEmpty ? 'Link' : l.title.trim();

  Widget _linkThumb(NgmyBioLink link, NgmyBioTemplate tpl, double size, {Color? bg, Color? fg, double radius = -1}) {
    final brandAsset = link.hasGalleryImage ? null : ngmyBioBrandAssetForLink(iconCodePoint: link.iconCodePoint, iconAsset: link.iconAsset);
    final icon = link.hasGalleryImage || brandAsset != null ? null : ngmyBioLinkIconFromCodePoint(link.iconCodePoint);
    final Widget core = link.imageBase64.isNotEmpty
        ? _bioImage(link.imageBase64, width: size, height: size, fit: BoxFit.cover)
        : brandAsset != null
            ? ngmyBioCircularBrandIcon(brandAsset, size: size)
            : ColoredBox(
                color: bg ?? tpl.accent.withValues(alpha: 0.18),
                child: Icon(icon ?? Icons.link_rounded, color: fg ?? tpl.accent, size: size * 0.52),
              );
    return SizedBox(
      width: size,
      height: size,
      child: radius < 0 ? ClipOval(child: core) : ClipRRect(borderRadius: BorderRadius.circular(radius), child: core),
    );
  }

  Widget _tapLink(NgmyBioLink link, Widget card, {double radius = 12, double gap = 12}) {
    return Padding(
      padding: EdgeInsets.only(bottom: compact ? gap * 0.75 : gap),
      child: interactive ? _BioLinkTap(onTap: () => _openUrl(link.url), borderRadius: BorderRadius.circular(radius), child: card) : card,
    );
  }

  Widget _social(NgmyBioTemplate tpl, {bool? light}) =>
      NgmyBioSocialRow(links: document.socialLinks, compact: compact, lightBackground: light ?? !_isDarkBg(tpl.pageBg));

  Widget _rawAvatar(double w, [double? h]) {
    final ref = document.avatarImageBase64;
    final hh = h ?? w;
    return SizedBox(
      width: w,
      height: hh,
      child: ref.isNotEmpty
          ? _bioImage(ref, fit: BoxFit.cover, width: w, height: hh)
          : ColoredBox(color: const Color(0xFFE5E7EB), child: Icon(Icons.person_rounded, size: math.min(w, hh) * 0.5, color: const Color(0xFF9CA3AF))),
    );
  }

  Widget _proPage(
    NgmyBioTemplate tpl,
    double pad,
    List<Widget> children,
    double minPageHeight, {
    Widget? background,
    Widget? header,
  }) {
    final body = _proScroll(
      Column(
        children: [
          if (header != null) header,
          Padding(
            padding: EdgeInsets.fromLTRB(pad, header == null ? pad + (compact ? 6 : 12) : 6, pad, pad),
            child: Column(
              children: [
                ...children,
                if (!fullBleed) ...[
                  SizedBox(height: compact ? 10 : 16),
                  Center(child: _madeByNgmyWatermark(tpl)),
                  SizedBox(height: compact ? 6 : 8),
                ],
              ],
            ),
          ),
        ],
      ),
      minPageHeight,
    );
    if (background == null) return body;
    return Stack(children: [Positioned.fill(child: IgnorePointer(child: background)), body]);
  }

  TextStyle _serif(Color c, double size, {bool italic = false, FontWeight weight = FontWeight.w700, double spacing = 0}) =>
      TextStyle(fontFamily: 'Georgia', color: c, fontSize: size, fontStyle: italic ? FontStyle.italic : FontStyle.normal, fontWeight: weight, letterSpacing: spacing);

  // Velvet theater: curtains, spotlight, ticket-stub links.
  Widget _proTheater(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    const gold = Color(0xFFD4AF37);
    final paper = tpl.subtitleColor;
    final ink = tpl.pageBg;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          height: avatarSize * 2.3,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 6,
            builder: (t) => Stack(
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProTheaterPainter(tpl.accent, gold, t))),
                Align(
                  alignment: const Alignment(0, 0.45),
                  child: Container(
                    decoration: BoxDecoration(shape: BoxShape.circle, boxShadow: [BoxShadow(color: gold.withValues(alpha: 0.3 + 0.2 * math.sin(t * math.pi * 2).abs()), blurRadius: 34, spreadRadius: 4)]),
                    child: _avatar(document.avatarImageBase64, avatarSize, ring),
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 12),
        const Text('NOW SHOWING', style: TextStyle(color: gold, fontSize: 10, fontWeight: FontWeight.w900, letterSpacing: 4)),
        const SizedBox(height: 4),
        Text(name, textAlign: TextAlign.center, style: _serif(tpl.titleColor, compact ? 24 : 30).copyWith(shadows: [Shadow(color: gold.withValues(alpha: 0.5), blurRadius: 12)])),
        if (tagline.isNotEmpty) Text(tagline, textAlign: TextAlign.center, style: _serif(tpl.subtitleColor, 13, italic: true, weight: FontWeight.w400)),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (var i = 0; i < links.length; i++)
          _tapLink(
            links[i],
            ClipPath(
              clipper: const _ProTicketClipper(stub: 58),
              child: Container(
                height: compact ? 54 : 62,
                color: paper,
                child: Row(
                  children: [
                    SizedBox(
                      width: 58,
                      child: Center(
                        child: RotatedBox(quarterTurns: 3, child: Text('ADMIT ONE', style: TextStyle(color: ink.withValues(alpha: 0.75), fontSize: 8, fontWeight: FontWeight.w900, letterSpacing: 1.4))),
                      ),
                    ),
                    CustomPaint(size: const Size(1, 40), painter: _ProPerfPainter(ink.withValues(alpha: 0.4))),
                    const SizedBox(width: 12),
                    _linkThumb(links[i], tpl, 32, bg: ink.withValues(alpha: 0.12), fg: ink),
                    const SizedBox(width: 10),
                    Expanded(child: Text(_lt(links[i]), maxLines: 2, overflow: TextOverflow.ellipsis, style: _serif(ink, 14.5))),
                    Text('No.${(i + 1).toString().padLeft(3, '0')}', style: _mono(ink.withValues(alpha: 0.6), 9)),
                    const SizedBox(width: 12),
                  ],
                ),
              ),
            ),
            radius: 8,
          ),
      ],
      minPageHeight,
    );
  }

  // Jungle: swaying leaves, leaf-shaped photo, links on a vine.
  Widget _proJungle(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final s = avatarSize * 1.3;
    final leaf = BorderRadius.only(topLeft: Radius.circular(s * 0.7), bottomRight: Radius.circular(s * 0.7), topRight: const Radius.circular(10), bottomLeft: const Radius.circular(10));
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          height: avatarSize * 2.2,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 7,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProLeavesPainter(a, t))),
                Container(
                  decoration: BoxDecoration(borderRadius: leaf, border: Border.all(color: a, width: 3), boxShadow: [BoxShadow(color: a.withValues(alpha: 0.35), blurRadius: 20)]),
                  child: ClipRRect(borderRadius: leaf, child: _rawAvatar(s)),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        Stack(
          children: [
            Positioned(left: 10, top: 6, bottom: 18, child: Container(width: 2, decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [a, a.withValues(alpha: 0.1)])))),
            Column(
              children: [
                for (final l in links)
                  _tapLink(
                    l,
                    Row(
                      children: [
                        SizedBox(
                          width: 22,
                          child: Center(
                            child: Transform.rotate(
                              angle: math.pi / 4,
                              child: Container(width: 11, height: 11, decoration: BoxDecoration(color: a, borderRadius: const BorderRadius.only(topLeft: Radius.circular(11), bottomRight: Radius.circular(11)))),
                            ),
                          ),
                        ),
                        const SizedBox(width: 6),
                        Expanded(
                          child: Container(
                            height: compact ? 52 : 58,
                            padding: const EdgeInsets.symmetric(horizontal: 12),
                            decoration: BoxDecoration(
                              color: Colors.white.withValues(alpha: 0.10),
                              borderRadius: const BorderRadius.only(topLeft: Radius.circular(26), bottomRight: Radius.circular(26), topRight: Radius.circular(6), bottomLeft: Radius.circular(6)),
                              border: Border.all(color: a.withValues(alpha: 0.45)),
                            ),
                            child: Row(
                              children: [
                                _linkThumb(l, tpl, 32),
                                const SizedBox(width: 10),
                                Expanded(child: Text(_lt(l), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w700, fontSize: 14))),
                                Icon(Icons.eco_rounded, color: a, size: 18),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                    radius: 20,
                  ),
              ],
            ),
          ],
        ),
      ],
      minPageHeight,
    );
  }

  // Jackpot: slot machine cabinet with spinning reels, gold-coin links.
  Widget _proJackpot(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final gold = tpl.accent;
    final reelH = avatarSize * 1.05;
    Widget reel(List<String> sym, double speed, double t) => Container(
          width: avatarSize * 0.62,
          height: reelH,
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(8), border: Border.all(color: gold, width: 2)),
          child: ClipRRect(borderRadius: BorderRadius.circular(6), child: CustomPaint(painter: _ProReelPainter(sym, t * speed, tpl.pageBg))),
        );
    return _proPage(
      tpl,
      pad,
      [
        _ProTicker(
          animate: !lightweight,
          seconds: 3,
          builder: (t) => Container(
            padding: const EdgeInsets.fromLTRB(12, 10, 12, 14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(22),
              gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(gold, Colors.white, 0.3)!, gold, Color.lerp(gold, Colors.black, 0.45)!]),
              boxShadow: [BoxShadow(color: gold.withValues(alpha: 0.35), blurRadius: 24)],
            ),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    for (var i = 0; i < 5; i++) _bulb(((t * 6).floor() + i).isEven),
                    const SizedBox(width: 6),
                    Text('JACKPOT', style: TextStyle(color: tpl.pageBg, fontWeight: FontWeight.w900, fontSize: 15, letterSpacing: 3)),
                    const SizedBox(width: 6),
                    for (var i = 0; i < 5; i++) _bulb(((t * 6).floor() + i).isOdd),
                  ],
                ),
                const SizedBox(height: 8),
                Container(
                  padding: const EdgeInsets.all(8),
                  decoration: BoxDecoration(color: tpl.pageBg, borderRadius: BorderRadius.circular(12)),
                  child: Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      reel(const ['7', '\$', '★', 'BAR', '♦'], 3, t),
                      const SizedBox(width: 6),
                      Container(
                        decoration: BoxDecoration(borderRadius: BorderRadius.circular(8), border: Border.all(color: gold, width: 2)),
                        child: ClipRRect(borderRadius: BorderRadius.circular(6), child: _rawAvatar(avatarSize * 0.95, reelH - 4)),
                      ),
                      const SizedBox(width: 6),
                      reel(const ['\$', '♦', '7', '★', 'BAR'], 4, t),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            Container(
              height: compact ? 54 : 60,
              padding: const EdgeInsets.symmetric(horizontal: 10),
              decoration: BoxDecoration(color: tpl.panelBg, borderRadius: BorderRadius.circular(12), border: Border.all(color: gold, width: 1.2)),
              child: Row(
                children: [
                  Container(
                    width: 42,
                    height: 42,
                    padding: const EdgeInsets.all(4),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      gradient: const LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [Color(0xFFFDE68A), Color(0xFFD4AF37), Color(0xFFA16207)]),
                      border: Border.all(color: const Color(0xFFFEF3C7), width: 1.5),
                    ),
                    child: _linkThumb(l, tpl, 32, bg: tpl.pageBg, fg: gold),
                  ),
                  const SizedBox(width: 12),
                  Expanded(child: Text(_lt(l), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w800, fontSize: 14))),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                    decoration: BoxDecoration(color: gold, borderRadius: BorderRadius.circular(99)),
                    child: Text('WIN ›', style: TextStyle(color: tpl.pageBg, fontWeight: FontWeight.w900, fontSize: 10)),
                  ),
                ],
              ),
            ),
          ),
      ],
      minPageHeight,
    );
  }

  Widget _bulb(bool on) => Container(
        width: 7,
        height: 7,
        margin: const EdgeInsets.symmetric(horizontal: 2),
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: on ? const Color(0xFFFFFBEB) : const Color(0xFF92400E),
          boxShadow: on ? const [BoxShadow(color: Color(0xFFFDE68A), blurRadius: 6)] : null,
        ),
      );

  // Luxury watch: gold bezel with a sweeping seconds marker, engraved plate links.
  Widget _proWatch(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final gold = tpl.accent;
    final d = avatarSize * 2.05;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          width: d + 16,
          height: d,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 12,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                CustomPaint(size: Size(d + 16, d), painter: _ProWatchPainter(gold, t)),
                ClipOval(child: _rawAvatar(avatarSize * 1.18)),
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        Text(name.toUpperCase(), textAlign: TextAlign.center, style: _serif(tpl.titleColor, compact ? 19 : 23, spacing: 3.5)),
        const SizedBox(height: 6),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Container(width: 28, height: 1, color: gold),
            const SizedBox(width: 8),
            Flexible(child: Text(tagline.isEmpty ? 'EST. 2026' : tagline.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: gold, fontSize: 10.5, fontWeight: FontWeight.w700, letterSpacing: 2.4))),
            const SizedBox(width: 8),
            Container(width: 28, height: 1, color: gold),
          ],
        ),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            Container(
              height: compact ? 52 : 58,
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(3),
                gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF292524), Color(0xFF0C0A09)]),
                border: Border.all(color: gold.withValues(alpha: 0.8)),
              ),
              child: Stack(
                children: [
                  Positioned.fill(child: Container(margin: const EdgeInsets.all(4), decoration: BoxDecoration(border: Border.all(color: gold.withValues(alpha: 0.35), width: 0.6)))),
                  for (final al in const [Alignment.topLeft, Alignment.topRight, Alignment.bottomLeft, Alignment.bottomRight])
                    Align(alignment: al, child: Padding(padding: const EdgeInsets.all(8), child: Container(width: 4, height: 4, decoration: BoxDecoration(shape: BoxShape.circle, color: gold)))),
                  Center(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 22),
                      child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          _linkThumb(l, tpl, 26, bg: gold.withValues(alpha: 0.15), fg: gold),
                          const SizedBox(width: 10),
                          Flexible(child: Text(_lt(l).toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: _serif(tpl.linkTextColor, 12.5, spacing: 2.2))),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
            ),
            radius: 3,
          ),
      ],
      minPageHeight,
    );
  }

  // Diamond: hexagon-cut photo, twinkling glints, bevel-cut links.
  Widget _proDiamond(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final s = avatarSize * 1.45;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          height: avatarSize * 2.1,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 5,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProGlintPainter(tpl.accent, t))),
                SizedBox(
                  width: s,
                  height: s,
                  child: Stack(
                    children: [
                      Positioned.fill(child: CustomPaint(painter: _ProHexBorderPainter(t))),
                      Padding(padding: const EdgeInsets.all(6), child: ClipPath(clipper: const _ProHexClipper(), child: _rawAvatar(s - 12))),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 8),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            Container(
              height: compact ? 52 : 58,
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: ShapeDecoration(
                gradient: const LinearGradient(colors: [Color(0xFFFFFFFF), Color(0xFFF1F5F9), Color(0xFFFFFFFF)]),
                shape: BeveledRectangleBorder(borderRadius: BorderRadius.circular(14), side: BorderSide(color: tpl.cardBorder, width: 1.4)),
                shadows: [BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 12, offset: const Offset(0, 4))],
              ),
              child: Row(
                children: [
                  ClipPath(clipper: const _ProDiamondClipper(), child: _linkThumb(l, tpl, 34, radius: 0, bg: const Color(0xFFE2E8F0), fg: const Color(0xFF475569))),
                  const SizedBox(width: 12),
                  Expanded(child: Text(_lt(l), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w700, fontSize: 14, letterSpacing: 0.3))),
                  Icon(Icons.diamond_outlined, color: tpl.accent, size: 18),
                ],
              ),
            ),
            radius: 6,
          ),
      ],
      minPageHeight,
    );
  }

  // Aurora over the peaks: full-width night scene, moon photo, glowing list rows.
  Widget _proAuroraPeak(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final h = avatarSize * 2.7;
    return _proPage(
      tpl,
      pad,
      [
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 8 : 12),
        for (var i = 0; i < links.length; i++) ...[
          if (i > 0) Container(height: 1, decoration: BoxDecoration(gradient: LinearGradient(colors: [Colors.transparent, a.withValues(alpha: 0.5), Colors.transparent]))),
          _tapLink(
            links[i],
            Padding(
              padding: EdgeInsets.symmetric(vertical: compact ? 10 : 14, horizontal: 6),
              child: Row(
                children: [
                  Container(width: 9, height: 9, decoration: BoxDecoration(shape: BoxShape.circle, color: a, boxShadow: [BoxShadow(color: a, blurRadius: 10, spreadRadius: 1)])),
                  const SizedBox(width: 14),
                  _linkThumb(links[i], tpl, 30),
                  const SizedBox(width: 12),
                  Expanded(child: Text(_lt(links[i]), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w600, fontSize: 15))),
                  Text('→', style: TextStyle(color: a, fontSize: 18, fontWeight: FontWeight.w700)),
                ],
              ),
            ),
            gap: 0,
          ),
        ],
      ],
      minPageHeight,
      header: SizedBox(
        height: h,
        child: _ProTicker(
          animate: !lightweight,
          seconds: 10,
          builder: (t) => Stack(
            children: [
              Positioned.fill(child: CustomPaint(painter: _ProAuroraPainter(a, tpl.subtitleColor, tpl.pageBg, t))),
              Align(
                alignment: const Alignment(0, -0.35),
                child: Container(
                  decoration: BoxDecoration(shape: BoxShape.circle, boxShadow: [BoxShadow(color: Colors.white.withValues(alpha: 0.35), blurRadius: 36, spreadRadius: 6)]),
                  child: _avatar(document.avatarImageBase64, avatarSize * 0.95, ring),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  // Royal wax seal with ribbon tails, ribbon-banner links.
  Widget _proWaxSeal(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final deep = Color.lerp(tpl.panelBg, const Color(0xFF7C3AED), 0.55)!;
    final w = avatarSize * 1.9;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          width: w,
          height: avatarSize * 2.25,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 6,
            builder: (t) => Stack(
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProWaxSealPainter(deep, tpl.accent, t))),
                Positioned(
                  left: (w - avatarSize * 1.05) / 2,
                  top: avatarSize * 0.95 - avatarSize * 0.525,
                  child: Container(
                    decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: tpl.accent, width: 2)),
                    child: ClipOval(child: _rawAvatar(avatarSize * 1.05)),
                  ),
                ),
              ],
            ),
          ),
        ),
        Text(name, textAlign: TextAlign.center, style: _serif(tpl.titleColor, compact ? 24 : 29)),
        if (tagline.isNotEmpty) Text('— ${tagline.toUpperCase()} —', textAlign: TextAlign.center, style: TextStyle(color: tpl.subtitleColor, fontSize: 10.5, fontWeight: FontWeight.w700, letterSpacing: 2.2)),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            ClipPath(
              clipper: const _ProRibbonClipper(),
              child: Container(
                height: compact ? 50 : 56,
                padding: const EdgeInsets.symmetric(horizontal: 26),
                decoration: BoxDecoration(
                  gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color.lerp(deep, Colors.white, 0.15)!, deep, Color.lerp(deep, Colors.black, 0.3)!]),
                ),
                child: Row(
                  children: [
                    _linkThumb(l, tpl, 28, bg: Colors.white.withValues(alpha: 0.15), fg: Colors.white),
                    const SizedBox(width: 10),
                    Expanded(child: Text(_lt(l).toUpperCase(), textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: _serif(Colors.white, 13, spacing: 1.8))),
                    const SizedBox(width: 38),
                  ],
                ),
              ),
            ),
            radius: 4,
          ),
      ],
      minPageHeight,
    );
  }

  // Invitation card with gold flourishes, RSVP-line links.
  Widget _proInvitation(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final gold = tpl.cardBorder;
    final ink = tpl.titleColor;
    return _proPage(
      tpl,
      pad,
      [
        Container(
          padding: const EdgeInsets.all(5),
          decoration: BoxDecoration(color: tpl.cardBg, border: Border.all(color: gold, width: 1.4), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.10), blurRadius: 20, offset: const Offset(0, 8))]),
          child: Container(
            decoration: BoxDecoration(border: Border.all(color: gold.withValues(alpha: 0.6), width: 0.8)),
            child: Stack(
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProFlourishPainter(tpl.accent))),
                Padding(
                  padding: const EdgeInsets.fromLTRB(18, 22, 18, 20),
                  child: Column(
                    children: [
                      Text('YOU ARE INVITED', style: TextStyle(color: tpl.accent, fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 4)),
                      const SizedBox(height: 14),
                      _ProTicker(
                        animate: !lightweight,
                        seconds: 4,
                        builder: (t) => Stack(
                          clipBehavior: Clip.none,
                          alignment: Alignment.center,
                          children: [
                            Container(
                              padding: const EdgeInsets.all(3),
                              decoration: ShapeDecoration(shape: OvalBorder(side: BorderSide(color: tpl.accent, width: 1.5))),
                              child: ClipOval(child: _rawAvatar(avatarSize * 0.95, avatarSize * 1.2)),
                            ),
                            Positioned.fill(child: CustomPaint(painter: _ProGlintPainter(tpl.accent, t, count: 6))),
                          ],
                        ),
                      ),
                      const SizedBox(height: 14),
                      Text(name, textAlign: TextAlign.center, style: _serif(ink, compact ? 24 : 30, italic: true, weight: FontWeight.w600)),
                      if (tagline.isNotEmpty) ...[
                        const SizedBox(height: 4),
                        Text(tagline, textAlign: TextAlign.center, style: _serif(tpl.subtitleColor, 13, weight: FontWeight.w400)),
                      ],
                      const SizedBox(height: 8),
                      Text('— ✦ —', style: TextStyle(color: tpl.accent, fontSize: 13)),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        _social(tpl),
        SizedBox(height: compact ? 10 : 14),
        for (final l in links)
          _tapLink(
            l,
            Container(
              padding: EdgeInsets.symmetric(vertical: compact ? 11 : 14),
              decoration: BoxDecoration(border: Border(top: BorderSide(color: gold.withValues(alpha: 0.7), width: 0.8), bottom: BorderSide(color: gold.withValues(alpha: 0.7), width: 0.8))),
              child: Row(
                children: [
                  Expanded(child: Container(height: 0.8, color: gold)),
                  const SizedBox(width: 10),
                  _linkThumb(l, tpl, 24),
                  const SizedBox(width: 8),
                  Flexible(flex: 4, child: Text(_lt(l), textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: _serif(ink, 15.5, italic: true, weight: FontWeight.w600))),
                  const SizedBox(width: 10),
                  Expanded(child: Container(height: 0.8, color: gold)),
                ],
              ),
            ),
            gap: 8,
            radius: 2,
          ),
      ],
      minPageHeight,
    );
  }

  // Rainy window: arched pane with trickling drops, teardrop link icons.
  Widget _proRainWindow(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final frame = Color.lerp(tpl.panelBg, Colors.black, 0.35)!;
    final w = avatarSize * 2.2;
    final h = avatarSize * 2.3;
    final arch = BorderRadius.vertical(top: Radius.circular(w / 2), bottom: const Radius.circular(6));
    return _proPage(
      tpl,
      pad,
      [
        Container(
          width: w,
          height: h,
          decoration: BoxDecoration(color: frame, borderRadius: arch, border: Border.all(color: tpl.accent.withValues(alpha: 0.45), width: 1.5), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.4), blurRadius: 24, offset: const Offset(0, 10))]),
          padding: const EdgeInsets.all(8),
          child: ClipRRect(
            borderRadius: BorderRadius.vertical(top: Radius.circular(w / 2 - 8), bottom: const Radius.circular(3)),
            child: _ProTicker(
              animate: !lightweight,
              seconds: 6,
              builder: (t) => Stack(
                fit: StackFit.expand,
                children: [
                  DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [tpl.headerGradient?.first ?? tpl.accent, tpl.pageBg]))),
                  Align(alignment: const Alignment(0, 0.45), child: ClipOval(child: _rawAvatar(avatarSize * 1.05))),
                  ColoredBox(color: Colors.white.withValues(alpha: 0.07)),
                  CustomPaint(painter: _ProRainPanePainter(t)),
                  Align(alignment: const Alignment(0, -0.42), child: Container(height: 6, color: frame)),
                  Align(alignment: const Alignment(0, -1), child: FractionallySizedBox(heightFactor: 0.29, child: Container(width: 6, color: frame))),
                ],
              ),
            ),
          ),
        ),
        Container(width: w + 20, height: 8, decoration: BoxDecoration(color: frame, borderRadius: BorderRadius.circular(3))),
        const SizedBox(height: 14),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            Container(
              height: compact ? 52 : 58,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.08), borderRadius: BorderRadius.circular(10), border: Border.all(color: Colors.white.withValues(alpha: 0.18))),
              child: Row(
                children: [
                  Transform.rotate(
                    angle: math.pi / 4,
                    child: ClipRRect(
                      borderRadius: const BorderRadius.only(topRight: Radius.circular(17), bottomLeft: Radius.circular(17), bottomRight: Radius.circular(17)),
                      child: SizedBox(width: 30, height: 30, child: Transform.rotate(angle: -math.pi / 4, child: OverflowBox(maxWidth: 40, maxHeight: 40, child: _linkThumb(l, tpl, 40, radius: 0)))),
                    ),
                  ),
                  const SizedBox(width: 14),
                  Expanded(child: Text(_lt(l), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w600, fontSize: 14.5))),
                  Icon(Icons.water_drop_outlined, color: tpl.accent, size: 18),
                ],
              ),
            ),
            radius: 10,
          ),
      ],
      minPageHeight,
    );
  }

  // Prism: white beam enters a triangular photo, spectrum fans out; rainbow-coded links.
  Widget _proPrismBeam(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    const spectrum = [Color(0xFFEF4444), Color(0xFFF97316), Color(0xFFEAB308), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFF8B5CF6)];
    final s = avatarSize * 1.6;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          height: avatarSize * 1.95,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 4,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProPrismBeamPainter(t, s))),
                SizedBox(
                  width: s,
                  height: s * 0.9,
                  child: Stack(
                    children: [
                      ClipPath(clipper: const _ProTriangleClipper(), child: _rawAvatar(s, s * 0.9)),
                      Positioned.fill(child: CustomPaint(painter: _ProTriangleBorderPainter(tpl.accent))),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
        const SizedBox(height: 6),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        for (var i = 0; i < links.length; i++)
          _tapLink(
            links[i],
            Container(
              height: compact ? 52 : 58,
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10), border: Border.all(color: tpl.cardBorder), boxShadow: [BoxShadow(color: spectrum[i % 6].withValues(alpha: 0.18), blurRadius: 14, offset: const Offset(0, 4))]),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: Row(
                  children: [
                    Container(width: 6, color: spectrum[i % 6]),
                    const SizedBox(width: 12),
                    _linkThumb(links[i], tpl, 32, bg: spectrum[i % 6].withValues(alpha: 0.14), fg: spectrum[i % 6]),
                    const SizedBox(width: 12),
                    Expanded(child: Text(_lt(links[i]), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w700, fontSize: 14))),
                    Icon(Icons.arrow_forward_rounded, color: spectrum[i % 6], size: 18),
                    const SizedBox(width: 12),
                  ],
                ),
              ),
            ),
            radius: 10,
          ),
      ],
      minPageHeight,
    );
  }

  // Immersive: full-bleed photo with a slow Ken Burns zoom and a bottom sheet of links.
  Widget _proImmersive(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final photo = document.headerImageBase64.isNotEmpty ? document.headerImageBase64 : document.avatarImageBase64;
    final h = avatarSize * 4.1;
    final initials = name.trim().split(RegExp(r'\s+')).where((w) => w.isNotEmpty).take(2).map((w) => w[0].toUpperCase()).join();
    return _proScroll(
      Column(
        children: [
          SizedBox(
            height: h,
            child: Stack(
              fit: StackFit.expand,
              children: [
                ClipRect(
                  child: _ProTicker(
                    animate: !lightweight,
                    seconds: 14,
                    builder: (t) => Transform.scale(
                      scale: 1.0 + 0.08 * math.sin(t * math.pi),
                      child: photo.isNotEmpty
                          ? _bioImage(photo, fit: BoxFit.cover)
                          : DecoratedBox(
                              decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: tpl.headerGradient ?? [tpl.accent, tpl.pageBg])),
                              child: Center(child: Text(initials, style: TextStyle(color: Colors.white.withValues(alpha: 0.25), fontSize: avatarSize * 1.4, fontWeight: FontWeight.w900))),
                            ),
                    ),
                  ),
                ),
                DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.transparent, tpl.pageBg.withValues(alpha: 0.2), tpl.pageBg], stops: const [0.35, 0.6, 1]))),
                Positioned(
                  left: pad + 4,
                  right: pad + 4,
                  bottom: 44,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                        decoration: BoxDecoration(color: tpl.accent, borderRadius: BorderRadius.circular(4)),
                        child: Text('FEATURED', style: TextStyle(color: tpl.pageBg, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 1.6)),
                      ),
                      const SizedBox(height: 8),
                      Text(name, style: TextStyle(color: Colors.white, fontSize: compact ? 28 : 36, fontWeight: FontWeight.w900, height: 1, letterSpacing: -0.6)),
                      if (tagline.isNotEmpty) ...[
                        const SizedBox(height: 6),
                        Text(tagline, style: TextStyle(color: tpl.subtitleColor, fontSize: 13, fontWeight: FontWeight.w600)),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          ),
          Transform.translate(
            offset: const Offset(0, -24),
            child: Container(
              width: double.infinity,
              padding: EdgeInsets.fromLTRB(pad, 10, pad, pad),
              decoration: BoxDecoration(color: tpl.panelBg, borderRadius: const BorderRadius.vertical(top: Radius.circular(26)), border: Border(top: BorderSide(color: tpl.accent.withValues(alpha: 0.35)))),
              child: Column(
                children: [
                  Container(width: 38, height: 4, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.3), borderRadius: BorderRadius.circular(9))),
                  _social(tpl),
                  const SizedBox(height: 4),
                  for (var i = 0; i < links.length; i++) ...[
                    if (i > 0) Divider(height: 1, color: Colors.white.withValues(alpha: 0.08)),
                    _tapLink(
                      links[i],
                      Padding(
                        padding: EdgeInsets.symmetric(vertical: compact ? 10 : 12),
                        child: Row(
                          children: [
                            _linkThumb(links[i], tpl, 42, radius: 10),
                            const SizedBox(width: 14),
                            Expanded(child: Text(_lt(links[i]), maxLines: 2, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w700, fontSize: 15))),
                            Icon(Icons.chevron_right_rounded, color: tpl.accent),
                          ],
                        ),
                      ),
                      gap: 0,
                    ),
                  ],
                  if (!fullBleed) ...[
                    SizedBox(height: compact ? 12 : 18),
                    _madeByNgmyWatermark(tpl),
                  ],
                ],
              ),
            ),
          ),
        ],
      ),
      minPageHeight,
    );
  }

  // Newspaper front page with a breaking-news ticker and headline links.
  Widget _proNewspaper(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    const paper = Color(0xFFF5F0E6);
    const ink = Color(0xFF1C1917);
    final red = tpl.accent;
    final first = name.trim().split(RegExp(r'\s+')).first.toUpperCase();
    Widget rule([double h = 1]) => Container(height: h, color: ink, margin: const EdgeInsets.symmetric(vertical: 4));
    return _proPage(
      tpl,
      pad,
      [
        Container(
          padding: const EdgeInsets.fromLTRB(14, 12, 14, 14),
          decoration: BoxDecoration(color: paper, boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.45), blurRadius: 22, offset: const Offset(0, 10))]),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(children: [Text('VOL. I · No. 1', style: _mono(ink, 8.5)), const Spacer(), Text('NGMY EDITION', style: _mono(ink, 8.5))]),
              rule(2),
              FittedBox(fit: BoxFit.scaleDown, child: Text('THE $first TIMES', style: _serif(ink, compact ? 26 : 32, weight: FontWeight.w900, spacing: -0.5))),
              rule(),
              rule(2),
              Container(
                height: 20,
                color: ink,
                child: ClipRect(
                  child: _ProTicker(
                    animate: !lightweight,
                    seconds: 12,
                    builder: (t) => Stack(
                      children: [
                        Positioned(
                          left: -t * 380,
                          top: 3,
                          child: Text(
                            List.filled(4, 'BREAKING · ${tagline.isEmpty ? name : tagline} · ').join().toUpperCase(),
                            maxLines: 1,
                            softWrap: false,
                            style: const TextStyle(color: paper, fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.2),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              Row(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.all(3),
                    decoration: BoxDecoration(border: Border.all(color: ink)),
                    child: ColorFiltered(
                      colorFilter: const ColorFilter.matrix([0.3, 0.59, 0.11, 0, 0, 0.3, 0.59, 0.11, 0, 0, 0.3, 0.59, 0.11, 0, 0, 0, 0, 0, 1, 0]),
                      child: _rawAvatar(avatarSize * 1.05, avatarSize * 1.3),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('EXCLUSIVE', style: TextStyle(color: red, fontSize: 9.5, fontWeight: FontWeight.w900, letterSpacing: 2)),
                        const SizedBox(height: 4),
                        Text(name, style: _serif(ink, compact ? 20 : 24, weight: FontWeight.w900).copyWith(height: 1.05)),
                        if (tagline.isNotEmpty) ...[
                          const SizedBox(height: 6),
                          Text(tagline, style: _serif(const Color(0xFF57534E), 12.5, italic: true, weight: FontWeight.w400)),
                        ],
                        const SizedBox(height: 6),
                        Text('By NGMY Staff', style: _mono(const Color(0xFF78716C), 8.5)),
                      ],
                    ),
                  ),
                ],
              ),
              _social(tpl, light: true),
              rule(),
              for (var i = 0; i < links.length; i++) ...[
                _tapLink(
                  links[i],
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 8),
                    child: Row(
                      children: [
                        Text('${i + 1}', style: _serif(red, 28, weight: FontWeight.w900)),
                        const SizedBox(width: 12),
                        Expanded(
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              Text(_lt(links[i]), maxLines: 2, overflow: TextOverflow.ellipsis, style: _serif(ink, 16, weight: FontWeight.w800)),
                              const SizedBox(height: 2),
                              Text('Read more →', style: TextStyle(color: red, fontSize: 10.5, fontWeight: FontWeight.w700)),
                            ],
                          ),
                        ),
                        _linkThumb(links[i], tpl, 36, radius: 2, bg: const Color(0xFFE7E0D2), fg: ink),
                      ],
                    ),
                  ),
                  gap: 0,
                  radius: 2,
                ),
                Container(height: 0.6, color: ink.withValues(alpha: 0.5)),
              ],
            ],
          ),
        ),
      ],
      minPageHeight,
    );
  }

  // Moon phase: a shadow glides across the photo, phase strip, starry list.
  Widget _proMoonPhase(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final s = avatarSize * 1.25;
    return _ProTicker(
      animate: !lightweight,
      seconds: 14,
      builder: (t) => _proPage(
        tpl,
        pad,
        [
          SizedBox(
            height: avatarSize * 1.9,
            child: Center(
              child: Container(
                decoration: BoxDecoration(shape: BoxShape.circle, boxShadow: [BoxShadow(color: a.withValues(alpha: 0.45), blurRadius: 40, spreadRadius: 6)]),
                child: ClipOval(
                  child: SizedBox(
                    width: s,
                    height: s,
                    child: Stack(
                      children: [
                        _rawAvatar(s),
                        Transform.translate(
                          offset: Offset(s * (-1.15 + 2.3 * t), 0),
                          child: Container(width: s, height: s, decoration: BoxDecoration(shape: BoxShape.circle, color: tpl.pageBg.withValues(alpha: 0.72))),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (var i = 0; i < 7; i++)
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 4),
                  child: CustomPaint(size: const Size.square(13), painter: _ProMoonIconPainter(i / 6, a, (t * 7).floor() % 7 == i)),
                ),
            ],
          ),
          const SizedBox(height: 12),
          _belowName(tpl, name, tagline),
          SizedBox(height: compact ? 8 : 12),
          for (var i = 0; i < links.length; i++)
            _tapLink(
              links[i],
              Padding(
                padding: EdgeInsets.symmetric(vertical: compact ? 8 : 11, horizontal: 4),
                child: Row(
                  children: [
                    Opacity(
                      opacity: 0.35 + 0.65 * (0.5 + 0.5 * math.sin(t * math.pi * 2 * 6 + i * 1.7)),
                      child: CustomPaint(size: const Size.square(16), painter: _ProStarPainter(a)),
                    ),
                    const SizedBox(width: 12),
                    _linkThumb(links[i], tpl, 30),
                    const SizedBox(width: 12),
                    Flexible(child: Text(_lt(links[i]), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w600, fontSize: 15))),
                    const SizedBox(width: 8),
                    Expanded(child: CustomPaint(size: const Size(10, 2), painter: _ProDottedLinePainter(a.withValues(alpha: 0.5)))),
                    const SizedBox(width: 8),
                    Icon(Icons.nightlight_round, color: a, size: 16),
                  ],
                ),
              ),
              gap: 4,
            ),
        ],
        minPageHeight,
        background: CustomPaint(painter: _ProStarFieldPainter(t)),
      ),
    );
  }

  // Speedometer: needle sweeps around the photo; racing number-plate links.
  Widget _proSpeedometer(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final w = avatarSize * 2.5;
    final h = avatarSize * 1.95;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          width: w,
          height: h,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 4,
            builder: (t) => Stack(
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProGaugePainter(a, 0.2 + 0.7 * (0.5 + 0.5 * math.sin(t * math.pi * 2)), (180 * (0.2 + 0.7 * (0.5 + 0.5 * math.sin(t * math.pi * 2)))).round()))),
                Positioned(
                  left: (w - avatarSize * 0.9) / 2,
                  top: h * 0.6 - avatarSize * 0.45,
                  child: Container(
                    decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: a, width: 3)),
                    child: ClipOval(child: _rawAvatar(avatarSize * 0.9)),
                  ),
                ),
              ],
            ),
          ),
        ),
        Text(name.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: tpl.titleColor, fontSize: compact ? 22 : 27, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, letterSpacing: 1)),
        if (tagline.isNotEmpty) Text(tagline.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: tpl.subtitleColor, fontSize: 11, fontWeight: FontWeight.w800, fontStyle: FontStyle.italic, letterSpacing: 2)),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (var i = 0; i < links.length; i++)
          _tapLink(
            links[i],
            ClipRRect(
              borderRadius: BorderRadius.circular(6),
              child: Container(
                height: compact ? 52 : 58,
                color: Colors.white.withValues(alpha: 0.07),
                child: Row(
                  children: [
                    Transform(
                      transform: Matrix4.skewX(-0.25),
                      alignment: Alignment.center,
                      child: Container(
                        width: 54,
                        color: a,
                        alignment: Alignment.center,
                        child: Text((i + 1).toString().padLeft(2, '0'), style: const TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic)),
                      ),
                    ),
                    const SizedBox(width: 12),
                    _linkThumb(links[i], tpl, 30),
                    const SizedBox(width: 10),
                    Expanded(child: Text(_lt(links[i]).toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, fontSize: 13.5, letterSpacing: 0.6))),
                    SizedBox(width: 24, height: double.infinity, child: CustomPaint(painter: _ProCheckerPainter())),
                  ],
                ),
              ),
            ),
            radius: 6,
          ),
      ],
      minPageHeight,
      background: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(width: 26, color: a.withValues(alpha: 0.10)),
          const SizedBox(width: 12),
          Container(width: 26, color: a.withValues(alpha: 0.10)),
        ],
      ),
    );
  }

  // Comic book: halftone page, POW starburst, speech bubble, tilted panel links.
  Widget _proComic(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    const black = Color(0xFF0A0A0A);
    final panels = [tpl.accent, const Color(0xFFFACC15), Colors.white, tpl.subtitleColor];
    final stroke = [for (final o in const [Offset(2, 2), Offset(-2, 2), Offset(2, -2), Offset(-2, -2), Offset(3, 3)]) Shadow(color: black, offset: o)];
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          height: avatarSize * 2.1,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 2,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                Transform.rotate(angle: math.sin(t * math.pi * 2) * 0.06, child: Transform.scale(scale: 1 + 0.04 * math.sin(t * math.pi * 2), child: CustomPaint(size: Size.square(avatarSize * 2), painter: _ProStarburstPainter(const Color(0xFFFACC15), black)))),
                Container(decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: black, width: 4)), child: ClipOval(child: _rawAvatar(avatarSize * 1.05))),
                Align(
                  alignment: const Alignment(0.95, -0.85),
                  child: Transform.rotate(angle: -0.2, child: Text('POW!', style: TextStyle(color: tpl.accent, fontSize: 30, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, shadows: stroke))),
                ),
              ],
            ),
          ),
        ),
        Text(name.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontSize: compact ? 26 : 32, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, shadows: stroke)),
        if (tagline.isNotEmpty) ...[
          const SizedBox(height: 10),
          CustomPaint(
            painter: _ProSpeechTailPainter(black),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: black, width: 2.5)),
              child: Text(tagline, textAlign: TextAlign.center, style: const TextStyle(color: black, fontWeight: FontWeight.w800, fontSize: 13)),
            ),
          ),
        ],
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (var i = 0; i < links.length; i++)
          _tapLink(
            links[i],
            Transform.rotate(
              angle: i.isEven ? -0.018 : 0.018,
              child: Container(
                height: compact ? 52 : 58,
                margin: const EdgeInsets.only(right: 6),
                padding: const EdgeInsets.symmetric(horizontal: 12),
                decoration: BoxDecoration(color: panels[i % panels.length], border: Border.all(color: black, width: 3), boxShadow: const [BoxShadow(color: black, offset: Offset(5, 5))]),
                child: Row(
                  children: [
                    Container(decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: black, width: 2)), child: _linkThumb(links[i], tpl, 30, bg: Colors.white, fg: black)),
                    const SizedBox(width: 12),
                    Expanded(child: Text(_lt(links[i]).toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(color: black, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, fontSize: 14))),
                    const Text('!', style: TextStyle(color: black, fontWeight: FontWeight.w900, fontSize: 20)),
                  ],
                ),
              ),
            ),
            radius: 0,
            gap: 16,
          ),
      ],
      minPageHeight,
      background: CustomPaint(painter: _ProHalftonePainter(tpl.accent.withValues(alpha: 0.16))),
    );
  }

  // Synthwave sunset: striped sun, moving perspective grid, chrome name.
  Widget _proSynthGrid(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final pink = tpl.accent;
    const cyan = Color(0xFF22D3EE);
    final h = avatarSize * 2.7;
    return _proPage(
      tpl,
      pad,
      [
        ShaderMask(
          shaderCallback: (r) => const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white, Color(0xFFA5F3FC), Color(0xFFF0ABFC), Colors.white], stops: [0, 0.45, 0.55, 1]).createShader(r),
          child: Text(name.toUpperCase(), textAlign: TextAlign.center, style: TextStyle(color: Colors.white, fontSize: compact ? 26 : 32, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, letterSpacing: 2, shadows: [Shadow(color: pink, blurRadius: 14)])),
        ),
        if (tagline.isNotEmpty) Text(tagline.toUpperCase(), textAlign: TextAlign.center, style: const TextStyle(color: cyan, fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 3)),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (var i = 0; i < links.length; i++)
          _tapLink(
            links[i],
            Transform(
              transform: Matrix4.skewX(-0.12),
              alignment: Alignment.center,
              child: Container(
                height: compact ? 50 : 56,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                decoration: BoxDecoration(
                  color: Colors.black.withValues(alpha: 0.35),
                  border: Border(bottom: BorderSide(color: pink, width: 2.5), left: const BorderSide(color: cyan, width: 2.5)),
                ),
                child: Row(
                  children: [
                    Text('>>', style: TextStyle(color: pink, fontWeight: FontWeight.w900, fontSize: 13)),
                    const SizedBox(width: 10),
                    _linkThumb(links[i], tpl, 28, bg: pink.withValues(alpha: 0.2), fg: cyan),
                    const SizedBox(width: 10),
                    Expanded(child: Text(_lt(links[i]).toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontStyle: FontStyle.italic, fontSize: 13.5, letterSpacing: 1.2, shadows: [Shadow(color: pink, blurRadius: 8)]))),
                  ],
                ),
              ),
            ),
            radius: 0,
          ),
      ],
      minPageHeight,
      header: SizedBox(
        height: h,
        child: _ProTicker(
          animate: !lightweight,
          seconds: 3,
          builder: (t) => Stack(
            children: [
              Positioned.fill(child: CustomPaint(painter: _ProSynthPainter(pink, cyan, tpl.pageBg, t))),
              Align(alignment: const Alignment(0, -0.18), child: Container(decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2.5)), child: ClipOval(child: _rawAvatar(avatarSize * 0.95)))),
            ],
          ),
        ),
      ),
    );
  }

  // Voltage: hazard-stripe ring, charging battery, power-cell links.
  Widget _proVoltage(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final a = tpl.accent;
    final d = avatarSize * 1.6;
    return _ProTicker(
      animate: !lightweight,
      seconds: 6,
      builder: (t) {
        final level = ((t * 12).floor() % 11);
        return _proPage(
          tpl,
          pad,
          [
            SizedBox(
              width: d,
              height: d,
              child: Stack(
                alignment: Alignment.center,
                children: [
                  Transform.rotate(angle: t * math.pi * 2, child: CustomPaint(size: Size.square(d), painter: _ProHazardRingPainter(a))),
                  ClipOval(child: _rawAvatar(avatarSize * 1.08)),
                ],
              ),
            ),
            const SizedBox(height: 14),
            Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                CustomPaint(size: const Size(16, 24), painter: _ProBoltPainter(a)),
                const SizedBox(width: 8),
                Container(
                  width: 170,
                  height: 30,
                  padding: const EdgeInsets.all(3),
                  decoration: BoxDecoration(border: Border.all(color: a, width: 2.5), borderRadius: BorderRadius.circular(6)),
                  child: Row(
                    children: [
                      for (var i = 0; i < 10; i++)
                        Expanded(child: Container(margin: const EdgeInsets.symmetric(horizontal: 1.2), decoration: BoxDecoration(color: i < level ? a : a.withValues(alpha: 0.1), borderRadius: BorderRadius.circular(2)))),
                    ],
                  ),
                ),
                Container(width: 5, height: 14, decoration: BoxDecoration(color: a, borderRadius: const BorderRadius.horizontal(right: Radius.circular(2)))),
              ],
            ),
            const SizedBox(height: 4),
            Text('${level * 10}% CHARGED', style: _mono(a, 10)),
            const SizedBox(height: 10),
            Text(name.toUpperCase(), textAlign: TextAlign.center, style: _mono(tpl.titleColor, compact ? 20 : 24, weight: FontWeight.w900)),
            if (tagline.isNotEmpty) Text(tagline, textAlign: TextAlign.center, style: _mono(tpl.subtitleColor, 11, weight: FontWeight.w500)),
            _social(tpl),
            SizedBox(height: compact ? 12 : 16),
            for (var i = 0; i < links.length; i++)
              _tapLink(
                links[i],
                Container(
                  height: compact ? 52 : 58,
                  decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.45), borderRadius: BorderRadius.circular(4), border: Border.all(color: a.withValues(alpha: 0.55))),
                  child: Row(
                    children: [
                      Container(width: 44, decoration: BoxDecoration(color: a, borderRadius: const BorderRadius.horizontal(left: Radius.circular(3))), child: Center(child: CustomPaint(size: const Size(14, 22), painter: _ProBoltPainter(Colors.black)))),
                      const SizedBox(width: 12),
                      _linkThumb(links[i], tpl, 28),
                      const SizedBox(width: 10),
                      Expanded(child: Text(_lt(links[i]).toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: _mono(tpl.linkTextColor, 12.5, weight: FontWeight.w800))),
                      for (var k = 0; k < 4; k++)
                        Container(width: 5, height: 8.0 + k * 4, margin: const EdgeInsets.only(right: 3), decoration: BoxDecoration(color: k < 4 - (i % 4) ? a : a.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(1))),
                      const SizedBox(width: 10),
                    ],
                  ),
                ),
                radius: 4,
              ),
          ],
          minPageHeight,
        );
      },
    );
  }

  // Cyber skyline: neon city, flying-car streaks, glitching billboard photo.
  Widget _proCyberSkyline(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final pink = tpl.accent;
    final cyan = tpl.subtitleColor;
    final h = avatarSize * 2.7;
    return _proPage(
      tpl,
      pad,
      [
        Text(name.toUpperCase(), textAlign: TextAlign.center, style: _mono(Colors.white, compact ? 20 : 25, weight: FontWeight.w900).copyWith(shadows: [Shadow(color: pink, blurRadius: 12), Shadow(color: cyan, offset: const Offset(2, 0))])),
        if (tagline.isNotEmpty) Text('// $tagline', textAlign: TextAlign.center, style: _mono(cyan, 11, weight: FontWeight.w600)),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (var i = 0; i < links.length; i++)
          _tapLink(
            links[i],
            Container(
              height: compact ? 50 : 56,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              decoration: ShapeDecoration(
                gradient: LinearGradient(colors: [pink.withValues(alpha: 0.22), Colors.transparent]),
                shape: BeveledRectangleBorder(borderRadius: const BorderRadius.only(topRight: Radius.circular(16), bottomLeft: Radius.circular(16)), side: BorderSide(color: i.isEven ? pink : cyan, width: 1.4)),
              ),
              child: Row(
                children: [
                  Text('${(i + 1).toString().padLeft(2, '0')}//', style: _mono(i.isEven ? pink : cyan, 11)),
                  const SizedBox(width: 10),
                  _linkThumb(links[i], tpl, 28, radius: 4),
                  const SizedBox(width: 10),
                  Expanded(child: Text(_lt(links[i]).toUpperCase(), maxLines: 1, overflow: TextOverflow.ellipsis, style: _mono(Colors.white, 12.5))),
                  Text('[>]', style: _mono(cyan, 11)),
                ],
              ),
            ),
            radius: 4,
          ),
      ],
      minPageHeight,
      header: SizedBox(
        height: h,
        child: _ProTicker(
          animate: !lightweight,
          seconds: 6,
          builder: (t) {
            final glitch = (t * 4) % 1 < 0.06 ? 4.0 : 0.0;
            return Stack(
              children: [
                Positioned.fill(child: CustomPaint(painter: _ProSkylinePainter(pink, cyan, t))),
                Align(
                  alignment: const Alignment(0, -0.45),
                  child: Container(
                    padding: const EdgeInsets.all(5),
                    decoration: BoxDecoration(color: Colors.black.withValues(alpha: 0.55), border: Border.all(color: cyan, width: 2), boxShadow: [BoxShadow(color: cyan.withValues(alpha: 0.6), blurRadius: 18)]),
                    child: Stack(
                      children: [
                        Transform.translate(offset: Offset(glitch, 0), child: Opacity(opacity: glitch > 0 ? 0.8 : 0, child: ColorFiltered(colorFilter: ColorFilter.mode(pink, BlendMode.modulate), child: _rawAvatar(avatarSize * 1.05)))),
                        Transform.translate(offset: Offset(-glitch / 2, 0), child: _rawAvatar(avatarSize * 1.05)),
                      ],
                    ),
                  ),
                ),
              ],
            );
          },
        ),
      ),
    );
  }

  // Kaleidoscope: mirrored wedges spinning behind the photo, gradient-ring pills.
  Widget _proKaleido(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final colors = tpl.headerGradient ?? [tpl.accent, tpl.subtitleColor, tpl.cardBorder];
    final d = avatarSize * 2.15;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          width: d,
          height: d,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 18,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                ClipOval(child: Transform.rotate(angle: t * math.pi * 2, child: CustomPaint(size: Size.square(d), painter: _ProKaleidoPainter(colors, t)))),
                Container(decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 4), boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 16)]), child: ClipOval(child: _rawAvatar(avatarSize * 1.0))),
              ],
            ),
          ),
        ),
        const SizedBox(height: 14),
        _belowName(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            Container(
              padding: const EdgeInsets.all(1.8),
              decoration: BoxDecoration(gradient: LinearGradient(colors: colors), borderRadius: BorderRadius.circular(99)),
              child: Container(
                height: compact ? 48 : 54,
                padding: const EdgeInsets.symmetric(horizontal: 8),
                decoration: BoxDecoration(color: tpl.pageBg.withValues(alpha: 0.92), borderRadius: BorderRadius.circular(99)),
                child: Row(
                  children: [
                    _linkThumb(l, tpl, 36),
                    Expanded(child: Text(_lt(l), textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: tpl.linkTextColor, fontWeight: FontWeight.w700, fontSize: 14.5))),
                    const SizedBox(width: 36),
                  ],
                ),
              ),
            ),
            radius: 99,
          ),
      ],
      minPageHeight,
    );
  }

  // Firefly forest: pines, glowing fireflies, tree-ring frame, wooden signpost links.
  Widget _proFireflies(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    const cream = Color(0xFFF5E6C8);
    final d = avatarSize * 1.55;
    return _ProTicker(
      animate: !lightweight,
      seconds: 12,
      builder: (t) => _proPage(
        tpl,
        pad,
        [
          SizedBox(
            height: avatarSize * 2.1,
            child: Stack(
              alignment: Alignment.center,
              children: [
                Positioned(left: -pad, right: -pad, bottom: 0, height: avatarSize * 1.1, child: CustomPaint(painter: _ProPinesPainter(Color.lerp(tpl.pageBg, Colors.black, 0.4)!))),
                Align(
                  alignment: const Alignment(0, -0.3),
                  child: SizedBox(
                    width: d,
                    height: d,
                    child: Stack(
                      alignment: Alignment.center,
                      children: [
                        CustomPaint(size: Size.square(d), painter: _ProTreeRingPainter()),
                        ClipOval(child: _rawAvatar(avatarSize * 1.05)),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Text(name, textAlign: TextAlign.center, style: _serif(tpl.titleColor, compact ? 23 : 28)),
          if (tagline.isNotEmpty) Text(tagline, textAlign: TextAlign.center, style: _serif(tpl.subtitleColor, 13, italic: true, weight: FontWeight.w400)),
          _social(tpl),
          SizedBox(height: compact ? 12 : 16),
          for (var i = 0; i < links.length; i++)
            _tapLink(
              links[i],
              Padding(
                padding: EdgeInsets.only(left: i.isOdd ? 0 : 0, right: 0),
                child: ClipPath(
                  clipper: _ProArrowSignClipper(pointRight: i.isEven),
                  child: Container(
                    height: compact ? 50 : 56,
                    decoration: const BoxDecoration(gradient: LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF8B5A2B), Color(0xFF6B4423), Color(0xFF5B3415)])),
                    child: Stack(
                      children: [
                        Positioned.fill(child: CustomPaint(painter: _ProWoodGrainPainter(i))),
                        Padding(
                          padding: EdgeInsets.only(left: i.isEven ? 14 : 34, right: i.isEven ? 34 : 14),
                          child: Row(
                            children: [
                              Container(width: 6, height: 6, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF2B1A0C))),
                              const SizedBox(width: 10),
                              _linkThumb(links[i], tpl, 28, bg: cream.withValues(alpha: 0.2), fg: cream),
                              const SizedBox(width: 10),
                              Expanded(child: Text(_lt(links[i]), maxLines: 1, overflow: TextOverflow.ellipsis, style: _serif(cream, 14.5).copyWith(shadows: const [Shadow(color: Colors.black54, offset: Offset(0, 1), blurRadius: 1)]))),
                              Container(width: 6, height: 6, decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF2B1A0C))),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
              radius: 4,
            ),
        ],
        minPageHeight,
        background: CustomPaint(painter: _ProFireflyPainter(const Color(0xFFFDE68A), t)),
      ),
    );
  }

  // Rose bloom: petals open around the photo, flower-tipped pills.
  Widget _proRoseBloom(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links, {double minPageHeight = 0}) {
    final d = avatarSize * 2.25;
    return _proPage(
      tpl,
      pad,
      [
        SizedBox(
          width: d,
          height: d,
          child: _ProTicker(
            animate: !lightweight,
            seconds: 16,
            builder: (t) => Stack(
              alignment: Alignment.center,
              children: [
                CustomPaint(size: Size.square(d), painter: _ProRosePainter(tpl.accent, t)),
                Container(decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 4), boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.3), blurRadius: 18)]), child: ClipOval(child: _rawAvatar(avatarSize * 0.98))),
              ],
            ),
          ),
        ),
        const SizedBox(height: 10),
        Text(name, textAlign: TextAlign.center, style: _serif(tpl.titleColor, compact ? 24 : 30, italic: true, weight: FontWeight.w600)),
        if (tagline.isNotEmpty) Text(tagline, textAlign: TextAlign.center, style: TextStyle(color: tpl.subtitleColor, fontSize: 12, fontWeight: FontWeight.w600, letterSpacing: 1)),
        _social(tpl),
        SizedBox(height: compact ? 12 : 16),
        for (final l in links)
          _tapLink(
            l,
            Container(
              height: compact ? 50 : 56,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              decoration: BoxDecoration(
                gradient: const LinearGradient(colors: [Color(0xFFFFE4E6), Color(0xFFFBCFE8)]),
                borderRadius: BorderRadius.circular(99),
                border: Border.all(color: Colors.white, width: 1.5),
                boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.18), blurRadius: 14, offset: const Offset(0, 5))],
              ),
              child: Row(
                children: [
                  CustomPaint(size: const Size.square(24), painter: _ProFlowerPainter(tpl.accent)),
                  Expanded(child: Text(_lt(l), textAlign: TextAlign.center, maxLines: 1, overflow: TextOverflow.ellipsis, style: _serif(tpl.linkTextColor, 15, italic: true, weight: FontWeight.w600))),
                  _linkThumb(l, tpl, 32, bg: Colors.white, fg: tpl.accent),
                ],
              ),
            ),
            radius: 99,
          ),
      ],
      minPageHeight,
    );
  }

  // ── Shared pieces ─────────────────────────────────────────────────────────

  Widget _framedLinks(List<NgmyBioLink> links, NgmyBioTemplate tpl, double pad) {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: pad),
      child: _linksColumn(links, tpl, 0),
    );
  }

  bool _isDarkBg(Color c) => c.computeLuminance() < 0.45;

  bool _isLightTemplate(NgmyBioTemplate tpl) => !_isDarkBg(tpl.pageBgEnd ?? tpl.pageBg);

  /// Soft glass lift — no hard outline borders.
  BoxDecoration _glassyLinkDecoration(NgmyBioTemplate tpl, double radius, {bool glow = false, bool frosted = false}) {
    final r = radius.clamp(4.0, 999.0);
    final dark = !_isLightTemplate(tpl);
    if (frosted) {
      if (!dark) {
        return BoxDecoration(
          color: const Color(0xFFFFFFFF),
          borderRadius: BorderRadius.circular(r),
          border: Border.all(color: const Color(0xFFCBD5E1), width: 1),
          boxShadow: [
            BoxShadow(color: Colors.black.withValues(alpha: 0.1), blurRadius: 12, offset: const Offset(0, 3)),
            BoxShadow(color: Colors.black.withValues(alpha: 0.04), blurRadius: 2, offset: const Offset(0, 1)),
          ],
        );
      }
      return BoxDecoration(
        color: Colors.white.withValues(alpha: dark ? 0.16 : 0.14),
        borderRadius: BorderRadius.circular(r),
        border: Border.all(color: Colors.white.withValues(alpha: dark ? 0.42 : 0.18), width: dark ? 1.2 : 0.5),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.35), blurRadius: 16, offset: const Offset(0, 4), spreadRadius: -2),
          BoxShadow(color: tpl.accent.withValues(alpha: 0.12), blurRadius: 12, spreadRadius: -4),
          if (glow) BoxShadow(color: tpl.accent.withValues(alpha: 0.15), blurRadius: 16, spreadRadius: -4),
        ],
      );
    }
    final fill = Color.alphaBlend(
      (dark ? Colors.white : Colors.black).withValues(alpha: dark ? 0.09 : 0.04),
      tpl.cardBg,
    );
    return BoxDecoration(
      color: fill,
      borderRadius: BorderRadius.circular(r),
      boxShadow: [
        BoxShadow(
          color: Colors.black.withValues(alpha: dark ? 0.28 : 0.1),
          blurRadius: 16,
          offset: const Offset(0, 5),
          spreadRadius: -2,
        ),
        BoxShadow(
          color: Colors.white.withValues(alpha: dark ? 0.05 : 0.2),
          blurRadius: 2,
          offset: const Offset(0, -1),
        ),
        if (glow) BoxShadow(color: tpl.accent.withValues(alpha: 0.12), blurRadius: 18, spreadRadius: -4),
      ],
    );
  }

  Widget _headerImageOrGradient(NgmyBioTemplate tpl, double height) {
    if (document.headerImageBase64.isNotEmpty) {
      try {
        if (document.headerImageBase64.startsWith('data:image')) {
          final bytes = base64Decode(document.headerImageBase64.split(',').last);
          return RepaintBoundary(
            child: SizedBox(
              height: height,
              width: double.infinity,
              child: Image.memory(
                bytes,
                key: ValueKey('bio_hdr_${bytes.length}_${bytes.isNotEmpty ? bytes[0] : 0}'),
                fit: BoxFit.cover,
                alignment: Alignment.topCenter,
                gaplessPlayback: true,
                filterQuality: FilterQuality.high,
                cacheWidth: lightweight ? 900 : null,
              ),
            ),
          );
        }
      } catch (_) {}
    }
    if (tpl.headerGradient != null) {
      return Container(
        height: height,
        decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: tpl.headerGradient!)),
      );
    }
    return Container(
      height: height,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [tpl.accent.withValues(alpha: 0.35), tpl.pageBg.withValues(alpha: 0.1)],
        ),
      ),
    );
  }

  Widget _belowName(NgmyBioTemplate tpl, String name, String tagline, {TextAlign align = TextAlign.center}) {
    return Column(
      children: [
        _nameBlock(tpl, name, tagline, align: align),
        NgmyBioSocialRow(
          links: document.socialLinks,
          compact: compact,
          lightBackground: !_isDarkBg(tpl.pageBg),
        ),
      ],
    );
  }

  Widget _nameBlock(NgmyBioTemplate tpl, String name, String tagline, {TextAlign align = TextAlign.center}) {
    return Column(
      children: [
        Text(
          name,
          textAlign: align,
          style: TextStyle(
            fontFamily: tpl.serifTitle ? 'Georgia' : null,
            fontSize: compact ? 20 : 24,
            fontWeight: FontWeight.w700,
            color: tpl.titleColor,
            letterSpacing: tpl.serifTitle ? 0.2 : 0,
          ),
        ),
        if (tagline.isNotEmpty) ...[
          SizedBox(height: compact ? 4 : 6),
          Text(
            tagline.toUpperCase(),
            textAlign: align,
            style: TextStyle(
              fontSize: compact ? 10 : 11,
              fontWeight: FontWeight.w600,
              letterSpacing: 1.2,
              color: tpl.subtitleColor,
            ),
          ),
        ],
      ],
    );
  }

  Widget _linksColumn(List<NgmyBioLink> links, NgmyBioTemplate tpl, double pad) {
    return Column(
      children: [
        ...links.map((l) => _linkCard(l, tpl)),
        if (!fullBleed) ...[
          SizedBox(height: compact ? 14 : 18),
          Center(child: _madeByNgmyWatermark(tpl)),
          SizedBox(height: compact ? 6 : 8),
        ],
      ],
    );
  }

  Widget _madeByNgmyWatermark(NgmyBioTemplate tpl) {
    final dark = _isDarkBg(tpl.pageBgEnd ?? tpl.pageBg);
    final badge = Container(
      padding: EdgeInsets.symmetric(horizontal: compact ? 12 : 14, vertical: compact ? 6 : 7),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(999),
        color: dark ? Colors.white.withValues(alpha: 0.1) : Colors.black.withValues(alpha: 0.05),
        border: Border.all(
          color: dark ? Colors.white.withValues(alpha: 0.22) : Colors.black.withValues(alpha: 0.08),
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: dark ? 0.28 : 0.08),
            blurRadius: 10,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Text(
        'MADE BY NGMY',
        style: TextStyle(
          fontSize: compact ? 9 : 10,
          fontWeight: FontWeight.w800,
          letterSpacing: 1.5,
          color: dark ? Colors.white.withValues(alpha: 0.78) : const Color(0xFF4B5563),
        ),
      ),
    );

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () async {
          final uri = Uri.parse('https://ngmy.org');
          if (await canLaunchUrl(uri)) {
            await launchUrl(uri, mode: LaunchMode.externalApplication);
          }
        },
        borderRadius: BorderRadius.circular(999),
        child: badge,
      ),
    );
  }

  Widget _avatar(String ref, double size, NgmyBioRingStyle ring) {
    final inner = SizedBox(
      width: size,
      height: size,
      child: DecoratedBox(
        decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFFE5E7EB)),
        child: ClipOval(
          child: ref.isNotEmpty
              ? _bioImage(ref, fit: BoxFit.cover, width: size, height: size)
              : Icon(Icons.person_rounded, size: size * 0.5, color: const Color(0xFF9CA3AF)),
        ),
      ),
    );
    return NgmyBioRingFrame(
      ringId: ring.id,
      size: size,
      accent: ring.auraColor ?? const Color(0xFFD4AF37),
      child: SizedBox(width: size, height: size, child: inner),
    );
  }

  Widget _linkCard(NgmyBioLink link, NgmyBioTemplate tpl) {
    final rawTitle = link.title.trim().isEmpty ? 'Link' : link.title.trim();
    final isDark = _isDarkBg(tpl.pageBg);
    final bioSite = _isBioSiteLayout(tpl);
    final isGlass = !bioSite && (tpl.linkStyle == NgmyBioLinkStyle.glass || tpl.linkStyle == NgmyBioLinkStyle.pill || tpl.linkStyle == NgmyBioLinkStyle.neonOutline);
    final compactPad = compact;
    final hasRing = link.ringStyleId.trim().isNotEmpty && link.ringStyleId != 'none';
    final thumbSize = hasRing ? (compactPad ? 26.0 : 30.0) : (compactPad ? 36.0 : 42.0);
    final displayTitle = isGlass && isDark ? rawTitle.toUpperCase() : rawTitle;

    final brandAsset = link.hasGalleryImage
        ? null
        : ngmyBioBrandAssetForLink(
            iconCodePoint: link.iconCodePoint,
            iconAsset: link.iconAsset,
          );
    final linkIcon = link.hasGalleryImage || brandAsset != null
        ? null
        : ngmyBioLinkIconFromCodePoint(link.iconCodePoint);
    final linkRing = ngmyBioRingById(link.ringStyleId);
    Widget thumbCore = link.imageBase64.isNotEmpty
        ? _bioImage(link.imageBase64, width: thumbSize, height: thumbSize, fit: BoxFit.cover)
        : brandAsset != null
            ? ngmyBioCircularBrandIcon(brandAsset, size: thumbSize)
            : ColoredBox(
                color: isDark ? Colors.white.withValues(alpha: 0.12) : tpl.subtitleColor.withValues(alpha: 0.15),
                child: Icon(
                  linkIcon ?? Icons.link_rounded,
                  color: tpl.subtitleColor,
                  size: compactPad ? 16 : 18,
                ),
              );
    thumbCore = SizedBox(
      width: thumbSize,
      height: thumbSize,
      child: DecoratedBox(
        decoration: const BoxDecoration(shape: BoxShape.circle),
        child: ClipOval(child: thumbCore),
      ),
    );
    final thumb = NgmyBioRingFrame(
      ringId: linkRing.id,
      size: thumbSize,
      accent: linkRing.auraColor ?? tpl.accent,
      child: thumbCore,
    );
    final ringOuter = ngmyBioRingFrameOuterSize(linkRing.id, thumbSize);

    final titleStyle = TextStyle(
      fontFamily: bioSite ? 'Georgia' : (tpl.serifTitle ? 'Georgia' : null),
      fontSize: compactPad ? 12 : 14,
      fontWeight: FontWeight.w700,
      letterSpacing: isGlass && isDark ? 0.6 : (bioSite ? 0.15 : 0),
      height: 1.2,
      color: tpl.linkTextColor,
    );
    final title = Text(
      displayTitle,
      maxLines: 2,
      overflow: TextOverflow.ellipsis,
      textAlign: TextAlign.left,
      style: titleStyle,
    );

    final barH = math.max(ringOuter + 6, compactPad ? 56.0 : 68.0);
    final pillR = barH / 2;
    final baseDeco = _linkDecoration(tpl, pillR);
    final borderSide = baseDeco.border?.top;
    final decoration = ShapeDecoration(
      color: baseDeco.color,
      gradient: baseDeco.gradient,
      shadows: baseDeco.boxShadow,
      shape: StadiumBorder(
        side: borderSide == null
            ? BorderSide.none
            : BorderSide(color: borderSide.color, width: borderSide.width),
      ),
    );
    final borderRadius = BorderRadius.circular(pillR);

    final leftInset = hasRing ? (compactPad ? 4.0 : 6.0) : (compactPad ? 14.0 : 18.0);
    final titleLeft = leftInset + ringOuter + (compactPad ? 8 : 10);

    // Ring sits on top of the bar — never inside a ClipRRect/backdrop (that boxes it on the public web page).
    final card = SizedBox(
      height: barH,
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.centerLeft,
        children: [
          Positioned.fill(
            child: DecoratedBox(decoration: decoration),
          ),
          Padding(
            padding: EdgeInsets.only(left: titleLeft, right: compactPad ? 12 : 16),
            child: Align(alignment: Alignment.centerLeft, child: title),
          ),
          Padding(
            padding: EdgeInsets.only(left: leftInset),
            child: thumb,
          ),
        ],
      ),
    );

    return Padding(
      padding: EdgeInsets.only(bottom: compactPad ? 10 : 14),
      child: interactive
          ? _BioLinkTap(
              onTap: () => _openUrl(link.url),
              borderRadius: borderRadius,
              child: card,
            )
          : card,
    );
  }

  BoxDecoration _linkDecoration(NgmyBioTemplate tpl, double radius) {
    if (_isBioSiteLayout(tpl)) {
      return BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(radius),
        border: Border.all(color: const Color(0xFFE8ECF1), width: 1),
        boxShadow: [
          BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 14, offset: const Offset(0, 4)),
          BoxShadow(color: Colors.black.withValues(alpha: 0.03), blurRadius: 2, offset: const Offset(0, 1)),
        ],
      );
    }
    switch (tpl.linkStyle) {
      case NgmyBioLinkStyle.glass:
      case NgmyBioLinkStyle.pill:
      case NgmyBioLinkStyle.neonOutline:
        return _glassyLinkDecoration(tpl, radius, frosted: true);
      case NgmyBioLinkStyle.outline:
      case NgmyBioLinkStyle.rowIcon:
      case NgmyBioLinkStyle.goldBar:
        return _glassyLinkDecoration(tpl, radius, frosted: _isDarkBg(tpl.pageBg));
      case NgmyBioLinkStyle.minimalLine:
        return _glassyLinkDecoration(tpl, radius.clamp(8.0, 28.0), frosted: false);
    }
  }

  Widget _bioImage(
    String ref, {
    double? width,
    double? height,
    BoxFit fit = BoxFit.contain,
    Alignment alignment = Alignment.center,
    bool downsample = false,
  }) {
    try {
      if (!ref.startsWith('data:image')) return const SizedBox.shrink();
      final bytes = base64Decode(ref.split(',').last);
      int? cacheW;
      int? cacheH;
      if (downsample) {
        cacheW = width != null ? (width * 2).round().clamp(80, 720) : 640;
        cacheH = height != null ? (height * 2).round().clamp(80, 720) : null;
      }
      return Image.memory(
        bytes,
        key: ValueKey('bio_img_${bytes.length}_${bytes.isNotEmpty ? bytes[0] : 0}'),
        width: width,
        height: height,
        fit: fit,
        alignment: alignment,
        cacheWidth: cacheW,
        cacheHeight: cacheH,
        gaplessPlayback: true,
        filterQuality: FilterQuality.high,
        isAntiAlias: true,
        errorBuilder: (_, _, _) => const Icon(Icons.broken_image_outlined),
      );
    } catch (_) {
      return const Icon(Icons.broken_image_outlined);
    }
  }

  static Future<void> _openUrl(String raw) async {
    var url = raw.trim();
    if (url.isEmpty) return;
    if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://$url';
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

class _BioLinkTap extends StatefulWidget {
  const _BioLinkTap({required this.onTap, required this.borderRadius, required this.child});

  final VoidCallback onTap;
  final BorderRadius borderRadius;
  final Widget child;

  @override
  State<_BioLinkTap> createState() => _BioLinkTapState();
}

class _BioLinkTapState extends State<_BioLinkTap> {
  bool _pressed = false;

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTapDown: (_) => setState(() => _pressed = true),
      onTapUp: (_) => setState(() => _pressed = false),
      onTapCancel: () => setState(() => _pressed = false),
      onTap: widget.onTap,
      child: AnimatedScale(
        scale: _pressed ? 0.97 : 1.0,
        duration: const Duration(milliseconds: 110),
        curve: Curves.easeOut,
        child: widget.child,
      ),
    );
  }
}

class _BioSiteHeaderBottomClipper extends CustomClipper<Path> {
  _BioSiteHeaderBottomClipper({this.curveDepth = 64});

  final double curveDepth;

  @override
  Path getClip(Size size) {
    final sideY = size.height;
    final peakY = size.height - curveDepth;
    return Path()
      ..moveTo(0, 0)
      ..lineTo(size.width, 0)
      ..lineTo(size.width, sideY)
      ..quadraticBezierTo(size.width * 0.5, peakY, 0, sideY)
      ..close();
  }

  @override
  bool shouldReclip(covariant _BioSiteHeaderBottomClipper old) => old.curveDepth != curveDepth;
}

class _BioSiteBodyTopClipper extends CustomClipper<Path> {
  _BioSiteBodyTopClipper({this.curveDepth = 64});

  final double curveDepth;

  @override
  Path getClip(Size size) {
    return Path()
      ..moveTo(0, curveDepth)
      ..quadraticBezierTo(size.width * 0.5, 0, size.width, curveDepth)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
  }

  @override
  bool shouldReclip(covariant _BioSiteBodyTopClipper old) => old.curveDepth != curveDepth;
}

class _AngularClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    return Path()
      ..lineTo(0, size.height * 0.85)
      ..lineTo(size.width, size.height)
      ..lineTo(size.width, 0)
      ..close();
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

class _OrganicClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    return Path()
      ..lineTo(0, size.height * 0.75)
      ..quadraticBezierTo(size.width * 0.3, size.height, size.width * 0.5, size.height * 0.88)
      ..quadraticBezierTo(size.width * 0.75, size.height * 0.72, size.width, size.height * 0.82)
      ..lineTo(size.width, 0)
      ..close();
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

// ── Animated pieces for the pro bio layouts (static when animate is false) ──

class _ProSpin extends StatefulWidget {
  const _ProSpin({required this.child, required this.animate, this.seconds = 8, this.reverse = false});
  final Widget child;
  final bool animate;
  final int seconds;
  final bool reverse;

  @override
  State<_ProSpin> createState() => _ProSpinState();
}

class _ProSpinState extends State<_ProSpin> with SingleTickerProviderStateMixin {
  late final AnimationController _c;

  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: Duration(seconds: widget.seconds));
    if (widget.animate) _c.repeat();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (!widget.animate) return widget.child;
    return AnimatedBuilder(
      animation: _c,
      child: widget.child,
      builder: (_, child) => Transform.rotate(angle: (widget.reverse ? -1 : 1) * _c.value * 2 * math.pi, child: child),
    );
  }
}

class _ProBlinkDot extends StatefulWidget {
  const _ProBlinkDot({required this.color, required this.animate});
  final Color color;
  final bool animate;
  @override
  State<_ProBlinkDot> createState() => _ProBlinkDotState();
}

class _ProBlinkDotState extends State<_ProBlinkDot> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  static const _d = Duration(milliseconds: 900);
  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: _d);
    if (widget.animate) _c.repeat(reverse: true);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => FadeTransition(
        opacity: widget.animate ? Tween<double>(begin: 0.3, end: 1).animate(_c) : const AlwaysStoppedAnimation(1),
        child: Container(
          width: 8,
          height: 8,
          decoration: BoxDecoration(color: widget.color, shape: BoxShape.circle, boxShadow: [BoxShadow(color: widget.color, blurRadius: 6)]),
        ),
      );
}

class _ProBlinkText extends StatefulWidget {
  const _ProBlinkText({required this.text, required this.style, required this.animate});
  final String text;
  final TextStyle style;
  final bool animate;
  @override
  State<_ProBlinkText> createState() => _ProBlinkTextState();
}

class _ProBlinkTextState extends State<_ProBlinkText> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  static const _d = Duration(milliseconds: 700);
  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: _d);
    if (widget.animate) _c.repeat(reverse: true);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => FadeTransition(
        opacity: widget.animate ? _c : const AlwaysStoppedAnimation(1),
        child: Text(widget.text, style: widget.style),
      );
}

/// A soft blob whose outline slowly changes shape.
class _ProBlob extends StatefulWidget {
  const _ProBlob({required this.colors, required this.size, required this.animate});
  final List<Color> colors;
  final double size;
  final bool animate;
  @override
  State<_ProBlob> createState() => _ProBlobState();
}

class _ProBlobState extends State<_ProBlob> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  static const _d = Duration(seconds: 7);
  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: _d);
    if (widget.animate) _c.repeat();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnimatedBuilder(
        animation: _c,
        builder: (_, __) => CustomPaint(size: Size.square(widget.size), painter: _ProBlobPainter(widget.colors, _c.value)),
      );
}

class _ProBlobPainter extends CustomPainter {
  _ProBlobPainter(this.colors, this.t);
  final List<Color> colors;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width * 0.42;
    final path = Path();
    const n = 64;
    for (var i = 0; i <= n; i++) {
      final a = i / n * math.pi * 2;
      final wobble = 1 + 0.09 * math.sin(a * 3 + t * math.pi * 2) + 0.06 * math.cos(a * 5 - t * math.pi * 4);
      final p = c + Offset(math.cos(a), math.sin(a)) * r * wobble;
      i == 0 ? path.moveTo(p.dx, p.dy) : path.lineTo(p.dx, p.dy);
    }
    path.close();
    canvas.drawShadow(path, colors.first, 18, false);
    canvas.drawPath(
      path,
      Paint()
        ..shader = SweepGradient(
          transform: GradientRotation(t * math.pi * 2),
          colors: [...colors, colors.first],
        ).createShader(Rect.fromCircle(center: c, radius: r * 1.2)),
    );
  }

  @override
  bool shouldRepaint(covariant _ProBlobPainter old) => old.t != t;
}

/// Moving rainbow sheen for the holographic card.
class _ProHoloSheen extends StatefulWidget {
  const _ProHoloSheen({required this.animate, required this.base});
  final bool animate;
  final List<Color> base;
  @override
  State<_ProHoloSheen> createState() => _ProHoloSheenState();
}

class _ProHoloSheenState extends State<_ProHoloSheen> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  static const _d = Duration(seconds: 5);
  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: _d);
    if (widget.animate) _c.repeat();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnimatedBuilder(
        animation: _c,
        builder: (_, __) => Stack(
          fit: StackFit.expand,
          children: [
            DecoratedBox(decoration: BoxDecoration(gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: widget.base))),
            DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment(-1 + _c.value * 2, -1),
                  end: Alignment(_c.value * 2, 1),
                  colors: const [Color(0x00FFFFFF), Color(0x55F0ABFC), Color(0x5567E8F9), Color(0x55FDE68A), Color(0x00FFFFFF)],
                ),
              ),
            ),
          ],
        ),
      );
}

class _ProTargetPainter extends CustomPainter {
  _ProTargetPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 2;
    final p = Paint()
      ..color = color
      ..strokeWidth = 3
      ..style = PaintingStyle.stroke
      ..strokeCap = StrokeCap.round;
    for (var i = 0; i < 4; i++) {
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), i * math.pi / 2 + 0.3, math.pi / 2 - 0.6, false, p);
    }
    for (var i = 0; i < 4; i++) {
      final a = i * math.pi / 2;
      canvas.drawLine(c + Offset(math.cos(a), math.sin(a)) * (r - 10), c + Offset(math.cos(a), math.sin(a)) * (r + 2), p..strokeWidth = 2);
    }
  }

  @override
  bool shouldRepaint(covariant _ProTargetPainter old) => old.color != color;
}

class _ProDashRingPainter extends CustomPainter {
  _ProDashRingPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 2;
    final p = Paint()
      ..color = color
      ..strokeWidth = 1.5
      ..style = PaintingStyle.stroke;
    const n = 36;
    for (var i = 0; i < n; i++) {
      final a0 = i / n * math.pi * 2;
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), a0, math.pi / n, false, p);
    }
  }

  @override
  bool shouldRepaint(covariant _ProDashRingPainter old) => old.color != color;
}

class _ProOrbitPainter extends CustomPainter {
  _ProOrbitPainter(this.color, {required this.moons});
  final Color color;
  final int moons;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 6;
    canvas.drawOval(
      Rect.fromCircle(center: c, radius: r),
      Paint()
        ..color = color.withValues(alpha: 0.35)
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1,
    );
    for (var i = 0; i < moons; i++) {
      final a = i / moons * math.pi * 2;
      final p = c + Offset(math.cos(a), math.sin(a)) * r;
      canvas.drawCircle(p, 9, Paint()..color = color.withValues(alpha: 0.25));
      canvas.drawCircle(p, 5, Paint()..color = color);
    }
  }

  @override
  bool shouldRepaint(covariant _ProOrbitPainter old) => old.color != color || old.moons != moons;
}

class _ProDashLinePainter extends CustomPainter {
  _ProDashLinePainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 2;
    for (var x = 4.0; x < s.width; x += 10) {
      canvas.drawLine(Offset(x, s.height / 2), Offset(x + 5, s.height / 2), p);
    }
  }

  @override
  bool shouldRepaint(covariant _ProDashLinePainter old) => old.color != color;
}

class _ProChipPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = const Color(0x99785A00)
      ..strokeWidth = 1
      ..style = PaintingStyle.stroke;
    canvas.drawLine(Offset(s.width / 3, 0), Offset(s.width / 3, s.height), p);
    canvas.drawLine(Offset(s.width * 2 / 3, 0), Offset(s.width * 2 / 3, s.height), p);
    canvas.drawLine(Offset(0, s.height / 2), Offset(s.width, s.height / 2), p);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(s.width / 3, s.height * 0.25, s.width / 3, s.height / 2), const Radius.circular(2)), p);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

// ── Set 2 animation helpers (all static when animate is false) ─────────────

/// Rebuilds [builder] with a 0→1 value that loops every [seconds].
class _ProTicker extends StatefulWidget {
  const _ProTicker({required this.builder, required this.animate, this.seconds = 4});
  final Widget Function(double t) builder;
  final bool animate;
  final int seconds;
  @override
  State<_ProTicker> createState() => _ProTickerState();
}

class _ProTickerState extends State<_ProTicker> with SingleTickerProviderStateMixin {
  late final AnimationController _c;
  @override
  void initState() {
    super.initState();
    _c = AnimationController(vsync: this, duration: Duration(seconds: widget.seconds));
    if (widget.animate) _c.repeat();
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (!widget.animate) return widget.builder(0.3);
    return AnimatedBuilder(animation: _c, builder: (_, __) => widget.builder(_c.value));
  }
}

/// Neon flicker: mostly on, with short random-looking dips.
class _ProFlicker extends StatelessWidget {
  const _ProFlicker({required this.child, required this.animate});
  final Widget child;
  final bool animate;
  @override
  Widget build(BuildContext context) {
    if (!animate) return child;
    return _ProTicker(
      animate: true,
      seconds: 5,
      builder: (t) {
        final dip = (t > 0.31 && t < 0.33) || (t > 0.35 && t < 0.36) || (t > 0.78 && t < 0.795);
        return Opacity(opacity: dip ? 0.35 : 1, child: child);
      },
    );
  }
}

/// Gentle up-and-down float.
class _ProBob extends StatelessWidget {
  const _ProBob({required this.child, required this.animate, this.amplitude = 6});
  final Widget child;
  final bool animate;
  final double amplitude;
  @override
  Widget build(BuildContext context) {
    if (!animate) return child;
    return _ProTicker(
      animate: true,
      seconds: 4,
      builder: (t) => Transform.translate(offset: Offset(0, math.sin(t * math.pi * 2) * amplitude), child: child),
    );
  }
}

/// Heartbeat scale.
class _ProPulseScale extends StatelessWidget {
  const _ProPulseScale({required this.child, required this.animate});
  final Widget child;
  final bool animate;
  @override
  Widget build(BuildContext context) {
    if (!animate) return child;
    return _ProTicker(
      animate: true,
      seconds: 1,
      builder: (t) {
        final beat = t < 0.12 ? math.sin(t / 0.12 * math.pi) : (t > 0.22 && t < 0.34 ? 0.6 * math.sin((t - 0.22) / 0.12 * math.pi) : 0.0);
        return Transform.scale(scale: 1 + beat * 0.05, child: child);
      },
    );
  }
}

class _ProBrickPainter extends CustomPainter {
  _ProBrickPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 1;
    const bh = 22.0;
    const bw = 52.0;
    for (var row = 0; row * bh < s.height; row++) {
      final y = row * bh;
      canvas.drawLine(Offset(0, y), Offset(s.width, y), p);
      final off = row.isEven ? 0.0 : bw / 2;
      for (var x = off; x < s.width; x += bw) {
        canvas.drawLine(Offset(x, y), Offset(x, y + bh), p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _ProBrickPainter old) => old.color != color;
}

class _ProVinylPainter extends CustomPainter {
  _ProVinylPainter(this.accent);
  final Color accent;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFF0A0A0A));
    final groove = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.8
      ..color = Colors.white.withValues(alpha: 0.07);
    for (var rr = r * 0.48; rr < r - 3; rr += 3.2) {
      canvas.drawCircle(c, rr, groove);
    }
    // Light reflection.
    canvas.drawArc(
      Rect.fromCircle(center: c, radius: r * 0.8),
      -2.4,
      0.9,
      false,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = r * 0.3
        ..color = Colors.white.withValues(alpha: 0.05),
    );
    canvas.drawCircle(c, r * 0.47, Paint()..color = accent);
  }

  @override
  bool shouldRepaint(covariant _ProVinylPainter old) => old.accent != accent;
}

class _ProTonearmPainter extends CustomPainter {
  _ProTonearmPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final pivot = Offset(s.width - 12, 12);
    canvas.drawCircle(pivot, 10, Paint()..color = color.withValues(alpha: 0.9));
    final arm = Paint()
      ..color = color
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round;
    final end = Offset(10, s.height - 8);
    canvas.drawLine(pivot, end, arm);
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: end, width: 14, height: 20), const Radius.circular(3)), Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant _ProTonearmPainter old) => old.color != color;
}

class _ProSprocketPainter extends CustomPainter {
  _ProSprocketPainter(this.accent);
  final Color accent;
  @override
  void paint(Canvas canvas, Size s) {
    canvas.drawRect(Offset.zero & s, Paint()..color = const Color(0xFF0A0A0A));
    final hole = Paint()..color = accent.withValues(alpha: 0.35);
    for (var y = 8.0; y < s.height; y += 22) {
      canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromLTWH(s.width * 0.25, y, s.width * 0.5, 12), const Radius.circular(2)), hole);
    }
  }

  @override
  bool shouldRepaint(covariant _ProSprocketPainter old) => old.accent != accent;
}

class _ProSparkleRingPainter extends CustomPainter {
  _ProSparkleRingPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 6;
    for (var i = 0; i < 12; i++) {
      final a = i / 12 * math.pi * 2;
      final p = c + Offset(math.cos(a), math.sin(a)) * r;
      final big = i % 3 == 0;
      final len = big ? 6.0 : 3.0;
      final paint = Paint()
        ..color = color.withValues(alpha: big ? 1 : 0.6)
        ..strokeWidth = big ? 1.8 : 1.2
        ..strokeCap = StrokeCap.round;
      canvas.drawLine(p - Offset(len, 0), p + Offset(len, 0), paint);
      canvas.drawLine(p - Offset(0, len), p + Offset(0, len), paint);
    }
  }

  @override
  bool shouldRepaint(covariant _ProSparkleRingPainter old) => old.color != color;
}

class _ProConstellationPainter extends CustomPainter {
  _ProConstellationPainter(this.color, this.t);
  final Color color;
  final double t;
  static const _pts = [
    Offset(0.08, 0.2), Offset(0.22, 0.08), Offset(0.36, 0.18), Offset(0.12, 0.62),
    Offset(0.26, 0.86), Offset(0.74, 0.12), Offset(0.9, 0.3), Offset(0.84, 0.66),
    Offset(0.68, 0.9), Offset(0.95, 0.85),
  ];
  static const _links = [[0, 1], [1, 2], [0, 3], [3, 4], [5, 6], [6, 7], [7, 8], [7, 9]];
  @override
  void paint(Canvas canvas, Size s) {
    final pts = [for (final p in _pts) Offset(p.dx * s.width, p.dy * s.height)];
    final line = Paint()
      ..color = color.withValues(alpha: 0.35)
      ..strokeWidth = 1;
    for (final l in _links) {
      canvas.drawLine(pts[l[0]], pts[l[1]], line);
    }
    for (var i = 0; i < pts.length; i++) {
      final tw = 0.5 + 0.5 * math.sin((t + i * 0.13) * math.pi * 2);
      canvas.drawCircle(pts[i], 2 + tw * 2.5, Paint()..color = Colors.white.withValues(alpha: 0.5 + tw * 0.5));
      canvas.drawCircle(pts[i], 7 + tw * 4, Paint()..color = color.withValues(alpha: 0.15 * tw));
    }
  }

  @override
  bool shouldRepaint(covariant _ProConstellationPainter old) => old.t != t || old.color != color;
}

class _ProRaysPainter extends CustomPainter {
  _ProRaysPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    const n = 18;
    for (var i = 0; i < n; i++) {
      final a = i / n * math.pi * 2;
      final path = Path()
        ..moveTo(c.dx, c.dy)
        ..lineTo(c.dx + math.cos(a - 0.08) * r, c.dy + math.sin(a - 0.08) * r)
        ..lineTo(c.dx + math.cos(a + 0.08) * r, c.dy + math.sin(a + 0.08) * r)
        ..close();
      canvas.drawPath(
        path,
        Paint()
          ..shader = RadialGradient(colors: [color.withValues(alpha: 0.55), color.withValues(alpha: 0)]).createShader(Rect.fromCircle(center: c, radius: r)),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _ProRaysPainter old) => old.color != color;
}

class _ProEqualizerPainter extends CustomPainter {
  _ProEqualizerPainter(this.colors, this.t);
  final List<Color> colors;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    const n = 21;
    final w = s.width / n;
    for (var i = 0; i < n; i++) {
      final v = 0.25 + 0.75 * (0.5 + 0.5 * math.sin(t * math.pi * 2 * (1 + (i % 4) * 0.5) + i * 0.9)).abs();
      final h = s.height * v;
      final col = Color.lerp(colors.first, colors.last, i / (n - 1))!;
      canvas.drawRRect(
        RRect.fromRectAndRadius(Rect.fromLTWH(i * w + w * 0.18, (s.height - h) / 2, w * 0.64, h), const Radius.circular(3)),
        Paint()..color = col,
      );
    }
  }

  @override
  bool shouldRepaint(covariant _ProEqualizerPainter old) => old.t != t;
}

class _ProBubblePainter extends CustomPainter {
  _ProBubblePainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 0; i < 18; i++) {
      final seed = (i * 7907 % 991) / 991.0;
      final r = 6 + seed * 18;
      final sx = (i * 3571 % 997) / 997.0;
      final phase = (i * 0.6180339) % 1.0;
      final x = sx * s.width + math.sin((t + phase) * math.pi * 2) * 14;
      final y = s.height - ((t * (0.5 + seed) + phase) % 1) * (s.height + r * 2) + r;
      final c = Offset(x, y);
      canvas.drawCircle(
        c,
        r,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 1.2
          ..color = Colors.white.withValues(alpha: 0.35),
      );
      canvas.drawCircle(c, r, Paint()..color = color.withValues(alpha: 0.08));
      canvas.drawCircle(c + Offset(-r * 0.35, -r * 0.35), r * 0.18, Paint()..color = Colors.white.withValues(alpha: 0.6));
    }
  }

  @override
  bool shouldRepaint(covariant _ProBubblePainter old) => old.t != t;
}

class _ProEcgPainter extends CustomPainter {
  _ProEcgPainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final y = s.height / 2;
    final path = Path()..moveTo(0, y);
    const period = 140.0;
    final shift = t * period;
    for (var x = 0.0; x <= s.width; x += 2) {
      final u = ((x + shift) % period) / period;
      double dy = 0;
      if (u > 0.40 && u < 0.44) dy = -(u - 0.40) / 0.04 * s.height * 0.35;
      if (u >= 0.44 && u < 0.48) dy = -s.height * 0.35 + (u - 0.44) / 0.04 * s.height * 0.7;
      if (u >= 0.48 && u < 0.52) dy = s.height * 0.35 - (u - 0.48) / 0.04 * s.height * 0.35;
      path.lineTo(x, y + dy);
    }
    canvas.drawPath(
      path,
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2
        ..color = color.withValues(alpha: 0.75)
        ..strokeJoin = StrokeJoin.round,
    );
  }

  @override
  bool shouldRepaint(covariant _ProEcgPainter old) => old.t != t || old.color != color;
}

class _ProDiagonalClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size s) => Path()
    ..lineTo(s.width, 0)
    ..lineTo(s.width, s.height * 0.62)
    ..lineTo(0, s.height)
    ..close();

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

// ── Set 3 painters & clippers ───────────────────────────────────────────────

double _p3Seed(int i, int salt) => ((i * 7919 + salt * 104729) % 997) / 997.0;

class _ProTicketClipper extends CustomClipper<Path> {
  const _ProTicketClipper({this.stub = 58});
  final double stub;
  @override
  Path getClip(Size s) {
    final body = Path()..addRRect(RRect.fromRectAndRadius(Offset.zero & s, const Radius.circular(8)));
    final holes = Path()
      ..addOval(Rect.fromCircle(center: Offset(stub, 0), radius: 8))
      ..addOval(Rect.fromCircle(center: Offset(stub, s.height), radius: 8))
      ..addOval(Rect.fromCircle(center: Offset(0, s.height / 2), radius: 6))
      ..addOval(Rect.fromCircle(center: Offset(s.width, s.height / 2), radius: 6));
    return Path.combine(PathOperation.difference, body, holes);
  }

  @override
  bool shouldReclip(covariant _ProTicketClipper old) => old.stub != stub;
}

class _ProPerfPainter extends CustomPainter {
  _ProPerfPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = color
      ..strokeWidth = 1.2;
    for (var y = 0.0; y < s.height; y += 6) {
      canvas.drawLine(Offset(0, y), Offset(0, y + 3), p);
    }
  }

  @override
  bool shouldRepaint(covariant _ProPerfPainter old) => old.color != color;
}

class _ProTheaterPainter extends CustomPainter {
  _ProTheaterPainter(this.curtain, this.gold, this.t);
  final Color curtain;
  final Color gold;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    // Spotlight cone.
    final cone = Path()
      ..moveTo(s.width * 0.46, 0)
      ..lineTo(s.width * 0.54, 0)
      ..lineTo(s.width * 0.80, s.height)
      ..lineTo(s.width * 0.20, s.height)
      ..close();
    canvas.drawPath(cone, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0.28), gold.withValues(alpha: 0.05)]).createShader(Offset.zero & s));
    canvas.drawOval(Rect.fromCenter(center: Offset(s.width / 2, s.height * 0.97), width: s.width * 0.62, height: 22), Paint()..color = gold.withValues(alpha: 0.25));
    // Draped curtains, tied back and swaying.
    final sway = math.sin(t * math.pi * 2) * 5;
    for (final left in [true, false]) {
      final edge = left ? s.width * 0.26 + sway : s.width * 0.74 - sway;
      final x0 = left ? 0.0 : s.width;
      final path = Path()
        ..moveTo(x0, 0)
        ..lineTo(edge, 0)
        ..quadraticBezierTo(left ? edge - 30 : edge + 30, s.height * 0.55, left ? s.width * 0.06 : s.width * 0.94, s.height * 0.62)
        ..quadraticBezierTo(left ? s.width * 0.12 : s.width * 0.88, s.height * 0.8, left ? s.width * 0.16 : s.width * 0.84, s.height)
        ..lineTo(x0, s.height)
        ..close();
      canvas.drawPath(
        path,
        Paint()
          ..shader = LinearGradient(
            colors: [Color.lerp(curtain, Colors.black, 0.45)!, curtain, Color.lerp(curtain, Colors.white, 0.12)!, curtain],
            stops: const [0, 0.35, 0.55, 1],
            tileMode: TileMode.repeated,
          ).createShader(Rect.fromLTWH(left ? 0 : s.width - 16, 0, 16, s.height)),
      );
      // Gold tie-back.
      canvas.drawCircle(Offset(left ? s.width * 0.07 : s.width * 0.93, s.height * 0.62), 5, Paint()..color = gold);
    }
    // Valance with gold fringe.
    canvas.drawRect(Rect.fromLTWH(0, 0, s.width, 16), Paint()..color = Color.lerp(curtain, Colors.black, 0.25)!);
    final fringe = Paint()..color = gold;
    for (var x = 0.0; x < s.width; x += 18) {
      canvas.drawArc(Rect.fromLTWH(x, 6, 18, 20), 0, math.pi, true, Paint()..color = Color.lerp(curtain, Colors.black, 0.25)!);
      canvas.drawCircle(Offset(x + 9, 26), 2.2, fringe);
    }
    canvas.drawRect(Rect.fromLTWH(0, 14, s.width, 2), fringe);
  }

  @override
  bool shouldRepaint(covariant _ProTheaterPainter old) => old.t != t;
}

class _ProLeavesPainter extends CustomPainter {
  _ProLeavesPainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    const anchors = [Offset(0.02, 0.15), Offset(0.98, 0.1), Offset(0.0, 0.85), Offset(1.0, 0.8), Offset(0.18, 1.0), Offset(0.82, 1.02)];
    const angles = [0.6, 2.5, -0.5, -2.6, -1.2, -1.9];
    for (var i = 0; i < anchors.length; i++) {
      final a = anchors[i];
      canvas.save();
      canvas.translate(a.dx * s.width, a.dy * s.height);
      canvas.rotate(angles[i] + math.sin(t * math.pi * 2 + i) * 0.08);
      final len = s.height * (0.42 + 0.08 * (i % 3));
      final w = len * 0.42;
      final leaf = Path()
        ..moveTo(0, 0)
        ..quadraticBezierTo(len * 0.5, -w, len, 0)
        ..quadraticBezierTo(len * 0.5, w, 0, 0)
        ..close();
      canvas.drawPath(leaf, Paint()..shader = LinearGradient(colors: [Color.lerp(color, Colors.black, 0.45)!, color.withValues(alpha: 0.85)]).createShader(Rect.fromLTWH(0, -w, len, w * 2)));
      final vein = Paint()
        ..color = Colors.white.withValues(alpha: 0.25)
        ..strokeWidth = 1.2
        ..style = PaintingStyle.stroke;
      canvas.drawLine(Offset.zero, Offset(len * 0.95, 0), vein);
      for (var k = 1; k < 6; k++) {
        final x = len * k / 6.5;
        canvas.drawLine(Offset(x, 0), Offset(x + len * 0.1, -w * 0.45), vein);
        canvas.drawLine(Offset(x, 0), Offset(x + len * 0.1, w * 0.45), vein);
      }
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(covariant _ProLeavesPainter old) => old.t != t;
}

class _ProReelPainter extends CustomPainter {
  _ProReelPainter(this.symbols, this.t, this.ink);
  final List<String> symbols;
  final double t;
  final Color ink;
  @override
  void paint(Canvas canvas, Size s) {
    final itemH = s.height / 2;
    final total = itemH * symbols.length;
    final offset = (t % 1) * total;
    for (var k = -1; k <= symbols.length + 1; k++) {
      final idx = ((k % symbols.length) + symbols.length) % symbols.length;
      final y = k * itemH - offset % total + itemH / 2;
      if (y < -itemH || y > s.height + itemH) continue;
      final sym = symbols[idx];
      final tp = TextPainter(
        text: TextSpan(text: sym, style: TextStyle(color: sym == '7' ? const Color(0xFFDC2626) : ink, fontSize: sym.length > 1 ? 12 : 24, fontWeight: FontWeight.w900)),
        textDirection: TextDirection.ltr,
      )..layout();
      tp.paint(canvas, Offset((s.width - tp.width) / 2, y));
    }
    final shade = Rect.fromLTWH(0, 0, s.width, s.height);
    canvas.drawRect(shade, Paint()..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.black.withValues(alpha: 0.35), Colors.transparent, Colors.black.withValues(alpha: 0.35)]).createShader(shade));
  }

  @override
  bool shouldRepaint(covariant _ProReelPainter old) => old.t != t;
}

class _ProWatchPainter extends CustomPainter {
  _ProWatchPainter(this.gold, this.t);
  final Color gold;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width / 2 - 8, s.height / 2);
    final r = s.height / 2 - 4;
    // Crown on the right.
    canvas.drawRRect(RRect.fromRectAndRadius(Rect.fromCenter(center: Offset(c.dx + r + 6, c.dy), width: 12, height: 18), const Radius.circular(3)), Paint()..color = gold);
    canvas.drawCircle(c, r, Paint()..shader = SweepGradient(colors: [Color.lerp(gold, Colors.white, 0.4)!, gold, Color.lerp(gold, Colors.black, 0.4)!, gold, Color.lerp(gold, Colors.white, 0.4)!]).createShader(Rect.fromCircle(center: c, radius: r)));
    canvas.drawCircle(c, r - 9, Paint()..color = const Color(0xFF0C0A09));
    final tick = Paint()..color = gold;
    for (var i = 0; i < 60; i++) {
      final a = i / 60 * math.pi * 2 - math.pi / 2;
      final hour = i % 5 == 0;
      final r1 = r - 12;
      final r2 = hour ? r - 22 : r - 16;
      canvas.drawLine(c + Offset(math.cos(a), math.sin(a)) * r1, c + Offset(math.cos(a), math.sin(a)) * r2, tick..strokeWidth = hour ? 2.6 : 1);
    }
    // Sweeping seconds marker with a fading tail.
    final a = t * math.pi * 2 - math.pi / 2;
    canvas.drawArc(Rect.fromCircle(center: c, radius: r - 4.5), a - 0.9, 0.9, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3
      ..shader = SweepGradient(startAngle: a - 0.9, endAngle: a, colors: [gold.withValues(alpha: 0), Colors.white]).createShader(Rect.fromCircle(center: c, radius: r)));
    canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * (r - 4.5), 3.5, Paint()..color = Colors.white);
  }

  @override
  bool shouldRepaint(covariant _ProWatchPainter old) => old.t != t;
}

class _ProGlintPainter extends CustomPainter {
  _ProGlintPainter(this.color, this.t, {this.count = 10});
  final Color color;
  final double t;
  final int count;
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 0; i < count; i++) {
      final p = Offset(_p3Seed(i, 21) * s.width, _p3Seed(i, 33) * s.height);
      final tw = math.max(0.0, math.sin(t * math.pi * 2 + i * 1.9));
      final r = (4 + _p3Seed(i, 5) * 7) * tw;
      if (r < 0.5) continue;
      final path = Path()
        ..moveTo(p.dx, p.dy - r)
        ..quadraticBezierTo(p.dx, p.dy, p.dx + r, p.dy)
        ..quadraticBezierTo(p.dx, p.dy, p.dx, p.dy + r)
        ..quadraticBezierTo(p.dx, p.dy, p.dx - r, p.dy)
        ..quadraticBezierTo(p.dx, p.dy, p.dx, p.dy - r)
        ..close();
      canvas.drawPath(path, Paint()..color = Color.lerp(color, Colors.white, 0.5)!.withValues(alpha: 0.9));
    }
  }

  @override
  bool shouldRepaint(covariant _ProGlintPainter old) => old.t != t;
}

Path _p3Hex(Size s) {
  final c = s.center(Offset.zero);
  final r = s.width / 2;
  final p = Path();
  for (var i = 0; i < 6; i++) {
    final a = i * math.pi / 3 - math.pi / 2;
    final pt = c + Offset(math.cos(a), math.sin(a)) * r;
    if (i == 0) {
      p.moveTo(pt.dx, pt.dy);
    } else {
      p.lineTo(pt.dx, pt.dy);
    }
  }
  return p..close();
}

class _ProHexClipper extends CustomClipper<Path> {
  const _ProHexClipper();
  @override
  Path getClip(Size s) => _p3Hex(s);
  @override
  bool shouldReclip(covariant CustomClipper<Path> old) => false;
}

class _ProHexBorderPainter extends CustomPainter {
  _ProHexBorderPainter(this.t);
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    canvas.drawPath(
      _p3Hex(s),
      Paint()
        ..shader = SweepGradient(
          transform: GradientRotation(t * math.pi * 2),
          colors: const [Color(0xFFE2E8F0), Color(0xFF94A3B8), Color(0xFFFFFFFF), Color(0xFFBAE6FD), Color(0xFFE2E8F0)],
        ).createShader(Offset.zero & s),
    );
  }

  @override
  bool shouldRepaint(covariant _ProHexBorderPainter old) => old.t != t;
}

class _ProDiamondClipper extends CustomClipper<Path> {
  const _ProDiamondClipper();
  @override
  Path getClip(Size s) => Path()
    ..moveTo(s.width / 2, 0)
    ..lineTo(s.width, s.height / 2)
    ..lineTo(s.width / 2, s.height)
    ..lineTo(0, s.height / 2)
    ..close();
  @override
  bool shouldReclip(covariant CustomClipper<Path> old) => false;
}

class _ProAuroraPainter extends CustomPainter {
  _ProAuroraPainter(this.a, this.b, this.bg, this.t);
  final Color a;
  final Color b;
  final Color bg;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final tau = math.pi * 2;
    for (var i = 0; i < 60; i++) {
      final sx = _p3Seed(i, 2) * s.width;
      final sy = _p3Seed(i, 3) * s.height * 0.6;
      canvas.drawCircle(Offset(sx, sy), 0.8, Paint()..color = Colors.white.withValues(alpha: 0.3 + 0.5 * (0.5 + 0.5 * math.sin(t * tau * 3 + i))));
    }
    for (var band = 0; band < 3; band++) {
      final col = band == 1 ? b : a;
      for (var x = 0.0; x <= s.width; x += 3) {
        final y = s.height * (0.18 + band * 0.1) + math.sin(x / 50 + t * tau + band * 1.4) * 18 + math.sin(x / 23 - t * tau * 2) * 6;
        final hgt = 40 + 26 * (0.5 + 0.5 * math.sin(x / 31 + t * tau * 1.5 + band));
        canvas.drawLine(
          Offset(x, y),
          Offset(x, y + hgt),
          Paint()
            ..strokeWidth = 3
            ..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [col.withValues(alpha: 0), col.withValues(alpha: 0.35), col.withValues(alpha: 0)]).createShader(Rect.fromLTWH(x, y, 3, hgt)),
        );
      }
    }
    // Mountains and their reflection in the lake.
    final horizon = s.height * 0.78;
    final far = Path()..moveTo(0, horizon);
    final near = Path()..moveTo(0, horizon);
    for (var x = 0.0; x <= s.width; x += 12) {
      far.lineTo(x, horizon - 40 - 34 * (0.5 + 0.5 * math.sin(x / 37)) - 20 * math.sin(x / 13).abs());
      near.lineTo(x, horizon - 14 - 22 * (0.5 + 0.5 * math.sin(x / 29 + 2)));
    }
    far
      ..lineTo(s.width, horizon)
      ..close();
    near
      ..lineTo(s.width, horizon)
      ..close();
    canvas.drawPath(far, Paint()..color = Color.lerp(bg, Colors.black, 0.2)!);
    canvas.drawPath(near, Paint()..color = Color.lerp(bg, Colors.black, 0.5)!);
    canvas.drawRect(Rect.fromLTWH(0, horizon, s.width, s.height - horizon), Paint()..color = Color.lerp(bg, Colors.black, 0.35)!);
    for (var k = 0; k < 8; k++) {
      final y = horizon + 6 + k * 5.0;
      final w = s.width * (0.15 + 0.1 * _p3Seed(k, 4));
      final x = (s.width - w) / 2 + math.sin(t * tau + k) * 10;
      canvas.drawLine(Offset(x, y), Offset(x + w, y), Paint()
        ..strokeWidth = 1.2
        ..color = Colors.white.withValues(alpha: 0.25 - k * 0.025));
    }
  }

  @override
  bool shouldRepaint(covariant _ProAuroraPainter old) => old.t != t;
}

class _ProWaxSealPainter extends CustomPainter {
  _ProWaxSealPainter(this.wax, this.trim, this.t);
  final Color wax;
  final Color trim;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width / 2, s.width * 0.5);
    final r = s.width * 0.44;
    // Ribbon tails swaying under the seal.
    for (final dir in [-1.0, 1.0]) {
      final sway = math.sin(t * math.pi * 2 + dir) * 6;
      final top = c + Offset(dir * r * 0.35, r * 0.4);
      final bottom = Offset(c.dx + dir * r * 0.75 + sway, s.height - 4);
      final w = r * 0.32;
      final path = Path()
        ..moveTo(top.dx - w / 2, top.dy)
        ..lineTo(top.dx + w / 2, top.dy)
        ..lineTo(bottom.dx + w / 2, bottom.dy)
        ..lineTo(bottom.dx, bottom.dy - w * 0.5)
        ..lineTo(bottom.dx - w / 2, bottom.dy)
        ..close();
      canvas.drawPath(path, Paint()..shader = LinearGradient(colors: [Color.lerp(wax, Colors.black, 0.3)!, wax, Color.lerp(wax, Colors.black, 0.3)!]).createShader(path.getBounds()));
    }
    // Wavy wax edge.
    final edge = Path();
    for (var k = 0; k <= 72; k++) {
      final th = k / 72 * math.pi * 2;
      final rr = r * (1 + 0.05 * math.sin(th * 9 + t * math.pi * 2) + 0.03 * math.sin(th * 5));
      final p = c + Offset(math.cos(th), math.sin(th)) * rr;
      if (k == 0) {
        edge.moveTo(p.dx, p.dy);
      } else {
        edge.lineTo(p.dx, p.dy);
      }
    }
    edge.close();
    canvas.drawPath(edge, Paint()
      ..color = Colors.black.withValues(alpha: 0.35)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 10));
    canvas.drawPath(edge, Paint()..shader = RadialGradient(center: const Alignment(-0.3, -0.35), colors: [Color.lerp(wax, Colors.white, 0.35)!, wax, Color.lerp(wax, Colors.black, 0.4)!]).createShader(Rect.fromCircle(center: c, radius: r)));
    canvas.drawCircle(c, r * 0.8, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2
      ..color = trim.withValues(alpha: 0.6));
    // Little stars on the embossed ring.
    for (var i = 0; i < 12; i++) {
      final a = i / 12 * math.pi * 2 + t * math.pi * 2 / 6;
      canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * r * 0.9, 1.8, Paint()..color = trim);
    }
  }

  @override
  bool shouldRepaint(covariant _ProWaxSealPainter old) => old.t != t;
}

class _ProRibbonClipper extends CustomClipper<Path> {
  const _ProRibbonClipper();
  @override
  Path getClip(Size s) {
    const n = 16.0;
    return Path()
      ..moveTo(0, 0)
      ..lineTo(s.width, 0)
      ..lineTo(s.width - n, s.height / 2)
      ..lineTo(s.width, s.height)
      ..lineTo(0, s.height)
      ..lineTo(n, s.height / 2)
      ..close();
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> old) => false;
}

class _ProFlourishPainter extends CustomPainter {
  _ProFlourishPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;
    for (final corner in [Offset.zero, Offset(s.width, 0), Offset(0, s.height), Offset(s.width, s.height)]) {
      final sx = corner.dx == 0 ? 1.0 : -1.0;
      final sy = corner.dy == 0 ? 1.0 : -1.0;
      canvas.save();
      canvas.translate(corner.dx, corner.dy);
      canvas.scale(sx, sy);
      final path = Path()
        ..moveTo(6, 30)
        ..quadraticBezierTo(6, 6, 30, 6)
        ..moveTo(10, 22)
        ..quadraticBezierTo(14, 14, 22, 10)
        ..moveTo(30, 6)
        ..quadraticBezierTo(38, 10, 34, 16)
        ..moveTo(6, 30)
        ..quadraticBezierTo(10, 38, 16, 34);
      canvas.drawPath(path, p);
      canvas.drawCircle(const Offset(12, 12), 2, Paint()..color = color);
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(covariant _ProFlourishPainter old) => old.color != color;
}

class _ProRainPanePainter extends CustomPainter {
  _ProRainPanePainter(this.t);
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    // Static beads of water on the glass.
    for (var i = 0; i < 40; i++) {
      final p = Offset(_p3Seed(i, 9) * s.width, _p3Seed(i, 15) * s.height);
      final r = 1 + _p3Seed(i, 6) * 2.2;
      canvas.drawCircle(p, r, Paint()..color = Colors.white.withValues(alpha: 0.28));
      canvas.drawCircle(p + Offset(-r * 0.3, -r * 0.3), r * 0.35, Paint()..color = Colors.white.withValues(alpha: 0.6));
    }
    // Drops sliding down with wet trails.
    for (var i = 0; i < 9; i++) {
      final x = _p3Seed(i, 40) * s.width;
      final speed = 0.6 + _p3Seed(i, 41);
      final y = ((t * speed + _p3Seed(i, 42)) % 1) * (s.height + 40) - 20;
      final wob = math.sin(y / 14 + i) * 1.5;
      canvas.drawLine(Offset(x + wob, y - 40), Offset(x + wob, y), Paint()
        ..strokeWidth = 1.6
        ..shader = LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Colors.white.withValues(alpha: 0), Colors.white.withValues(alpha: 0.35)]).createShader(Rect.fromLTWH(x - 1, y - 40, 2, 40)));
      canvas.drawCircle(Offset(x + wob, y + 2), 3, Paint()..color = Colors.white.withValues(alpha: 0.55));
    }
  }

  @override
  bool shouldRepaint(covariant _ProRainPanePainter old) => old.t != t;
}

class _ProPrismBeamPainter extends CustomPainter {
  _ProPrismBeamPainter(this.t, this.tri);
  final double t;
  final double tri;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final entry = Offset(c.dx - tri * 0.25, c.dy + tri * 0.05);
    final exit = Offset(c.dx + tri * 0.25, c.dy + tri * 0.05);
    canvas.drawLine(Offset(0, c.dy - tri * 0.3), entry, Paint()
      ..strokeWidth = 5
      ..color = const Color(0xFF94A3B8).withValues(alpha: 0.6));
    canvas.drawLine(Offset(0, c.dy - tri * 0.3), entry, Paint()
      ..strokeWidth = 2
      ..color = Colors.white);
    const spectrum = [Color(0xFFEF4444), Color(0xFFF97316), Color(0xFFEAB308), Color(0xFF22C55E), Color(0xFF3B82F6), Color(0xFF8B5CF6)];
    for (var i = 0; i < spectrum.length; i++) {
      final spread = (i - 2.5) * 9.0;
      final end = Offset(s.width, c.dy + tri * 0.25 + spread * 2.2);
      final shimmer = 0.55 + 0.35 * math.sin(t * math.pi * 2 + i * 0.8);
      canvas.drawPath(
        Path()
          ..moveTo(exit.dx, exit.dy)
          ..lineTo(end.dx, end.dy - 6)
          ..lineTo(end.dx, end.dy + 6)
          ..close(),
        Paint()..color = spectrum[i].withValues(alpha: shimmer),
      );
    }
  }

  @override
  bool shouldRepaint(covariant _ProPrismBeamPainter old) => old.t != t;
}

class _ProTriangleClipper extends CustomClipper<Path> {
  const _ProTriangleClipper();
  @override
  Path getClip(Size s) => Path()
    ..moveTo(s.width / 2, 0)
    ..lineTo(s.width, s.height)
    ..lineTo(0, s.height)
    ..close();
  @override
  bool shouldReclip(covariant CustomClipper<Path> old) => false;
}

class _ProTriangleBorderPainter extends CustomPainter {
  _ProTriangleBorderPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final path = const _ProTriangleClipper().getClip(s);
    canvas.drawPath(path, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 4
      ..strokeJoin = StrokeJoin.round
      ..shader = LinearGradient(colors: [Colors.white, color, Colors.white]).createShader(Offset.zero & s));
  }

  @override
  bool shouldRepaint(covariant _ProTriangleBorderPainter old) => old.color != color;
}

class _ProStarFieldPainter extends CustomPainter {
  _ProStarFieldPainter(this.t);
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    for (var i = 0; i < 90; i++) {
      final p = Offset(_p3Seed(i, 71) * s.width, _p3Seed(i, 72) * s.height);
      final tw = 0.5 + 0.5 * math.sin(t * math.pi * 2 * 5 + i * 2.3);
      canvas.drawCircle(p, 0.6 + _p3Seed(i, 73) * 1.2, Paint()..color = Colors.white.withValues(alpha: 0.15 + 0.6 * tw));
    }
  }

  @override
  bool shouldRepaint(covariant _ProStarFieldPainter old) => old.t != t;
}

class _ProMoonIconPainter extends CustomPainter {
  _ProMoonIconPainter(this.phase, this.color, this.active);
  final double phase;
  final Color color;
  final bool active;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    canvas.saveLayer(Offset.zero & s, Paint());
    canvas.drawCircle(c, r, Paint()..color = active ? Colors.white : color.withValues(alpha: 0.75));
    canvas.drawCircle(c + Offset(r * 2 * (phase * 2 - 1), 0), r, Paint()..blendMode = BlendMode.dstOut);
    canvas.restore();
    canvas.drawCircle(c, r, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.8
      ..color = color.withValues(alpha: 0.5));
  }

  @override
  bool shouldRepaint(covariant _ProMoonIconPainter old) => old.phase != phase || old.active != active;
}

class _ProStarPainter extends CustomPainter {
  _ProStarPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    final path = Path();
    for (var i = 0; i < 10; i++) {
      final a = i * math.pi / 5 - math.pi / 2;
      final rr = i.isEven ? r : r * 0.42;
      final p = c + Offset(math.cos(a), math.sin(a)) * rr;
      if (i == 0) {
        path.moveTo(p.dx, p.dy);
      } else {
        path.lineTo(p.dx, p.dy);
      }
    }
    path.close();
    canvas.drawPath(path, Paint()
      ..color = color
      ..maskFilter = const MaskFilter.blur(BlurStyle.solid, 2));
  }

  @override
  bool shouldRepaint(covariant _ProStarPainter old) => old.color != color;
}

class _ProDottedLinePainter extends CustomPainter {
  _ProDottedLinePainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()..color = color;
    for (var x = 0.0; x < s.width; x += 6) {
      canvas.drawCircle(Offset(x, s.height / 2), 1, p);
    }
  }

  @override
  bool shouldRepaint(covariant _ProDottedLinePainter old) => old.color != color;
}

class _ProGaugePainter extends CustomPainter {
  _ProGaugePainter(this.color, this.value, this.speed);
  final Color color;
  final double value;
  final int speed;
  @override
  void paint(Canvas canvas, Size s) {
    final c = Offset(s.width / 2, s.height * 0.6);
    final r = s.width * 0.46;
    const start = math.pi * 0.75;
    const sweep = math.pi * 1.5;
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), start, sweep, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10
      ..color = Colors.white.withValues(alpha: 0.08));
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), start + sweep * 0.8, sweep * 0.2, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 10
      ..color = const Color(0xFFDC2626));
    canvas.drawArc(Rect.fromCircle(center: c, radius: r), start, sweep * value, false, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round
      ..color = color);
    for (var i = 0; i <= 40; i++) {
      final a = start + sweep * i / 40;
      final major = i % 5 == 0;
      canvas.drawLine(c + Offset(math.cos(a), math.sin(a)) * (r - 10), c + Offset(math.cos(a), math.sin(a)) * (r - (major ? 22 : 15)), Paint()
        ..strokeWidth = major ? 2.2 : 1
        ..color = Colors.white.withValues(alpha: major ? 0.85 : 0.4));
      if (major) {
        final tp = TextPainter(text: TextSpan(text: '${i ~/ 5}', style: TextStyle(color: Colors.white.withValues(alpha: 0.7), fontSize: 10, fontWeight: FontWeight.w800)), textDirection: TextDirection.ltr)..layout();
        final lp = c + Offset(math.cos(a), math.sin(a)) * (r - 32);
        tp.paint(canvas, lp - Offset(tp.width / 2, tp.height / 2));
      }
    }
    final na = start + sweep * value;
    canvas.drawLine(c, c + Offset(math.cos(na), math.sin(na)) * (r - 6), Paint()
      ..strokeWidth = 3.5
      ..strokeCap = StrokeCap.round
      ..color = color);
    final tp = TextPainter(text: TextSpan(text: '$speed MPH', style: TextStyle(color: color, fontSize: 11, fontWeight: FontWeight.w900, fontStyle: FontStyle.italic, letterSpacing: 1)), textDirection: TextDirection.ltr)..layout();
    tp.paint(canvas, Offset(c.dx - tp.width / 2, s.height - tp.height));
  }

  @override
  bool shouldRepaint(covariant _ProGaugePainter old) => old.value != value;
}

class _ProCheckerPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    const cell = 6.0;
    for (var y = 0; y * cell < s.height; y++) {
      for (var x = 0; x * cell < s.width; x++) {
        canvas.drawRect(Rect.fromLTWH(x * cell, y * cell, cell, cell), Paint()..color = (x + y).isEven ? Colors.white : Colors.black);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _ProCheckerPainter old) => false;
}

class _ProHalftonePainter extends CustomPainter {
  _ProHalftonePainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()..color = color;
    for (var y = 0.0; y < s.height; y += 10) {
      for (var x = (y ~/ 10).isEven ? 0.0 : 5.0; x < s.width; x += 10) {
        final r = 1 + 2.2 * (1 - y / s.height).clamp(0.0, 1.0);
        canvas.drawCircle(Offset(x, y), r, p);
      }
    }
  }

  @override
  bool shouldRepaint(covariant _ProHalftonePainter old) => old.color != color;
}

class _ProStarburstPainter extends CustomPainter {
  _ProStarburstPainter(this.fill, this.stroke);
  final Color fill;
  final Color stroke;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    final path = Path();
    const n = 16;
    for (var i = 0; i < n * 2; i++) {
      final a = i * math.pi / n;
      final rr = i.isEven ? r : r * (0.68 + 0.08 * (i % 3));
      final p = c + Offset(math.cos(a), math.sin(a)) * rr;
      if (i == 0) {
        path.moveTo(p.dx, p.dy);
      } else {
        path.lineTo(p.dx, p.dy);
      }
    }
    path.close();
    canvas.drawPath(path.shift(const Offset(5, 5)), Paint()..color = stroke);
    canvas.drawPath(path, Paint()..color = fill);
    canvas.drawPath(path, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 3
      ..strokeJoin = StrokeJoin.round
      ..color = stroke);
  }

  @override
  bool shouldRepaint(covariant _ProStarburstPainter old) => false;
}

class _ProSpeechTailPainter extends CustomPainter {
  _ProSpeechTailPainter(this.stroke);
  final Color stroke;
  @override
  void paint(Canvas canvas, Size s) {
    final x = s.width * 0.3;
    final path = Path()
      ..moveTo(x - 8, 2)
      ..lineTo(x - 2, -14)
      ..lineTo(x + 10, 2)
      ..close();
    canvas.drawPath(path, Paint()..color = Colors.white);
    canvas.drawPath(
      Path()
        ..moveTo(x - 8, 1)
        ..lineTo(x - 2, -14)
        ..lineTo(x + 10, 1),
      Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 2.5
        ..strokeJoin = StrokeJoin.round
        ..color = stroke,
    );
  }

  @override
  bool shouldRepaint(covariant _ProSpeechTailPainter old) => false;
}

class _ProSynthPainter extends CustomPainter {
  _ProSynthPainter(this.pink, this.cyan, this.bg, this.t);
  final Color pink;
  final Color cyan;
  final Color bg;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final horizon = s.height * 0.66;
    final sc = Offset(s.width / 2, s.height * 0.41);
    final sr = s.height * 0.36;
    // Sun with retro cut bars.
    canvas.save();
    canvas.clipRect(Rect.fromLTWH(0, 0, s.width, horizon));
    canvas.drawCircle(sc, sr + 18, Paint()
      ..color = pink.withValues(alpha: 0.35)
      ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 22));
    canvas.drawCircle(sc, sr, Paint()..shader = const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFFFDE68A), Color(0xFFFB923C), Color(0xFFEC4899)]).createShader(Rect.fromCircle(center: sc, radius: sr)));
    for (var k = 0; k < 6; k++) {
      final y = sc.dy + sr * 0.15 + k * sr * 0.15 + (t * sr * 0.15);
      canvas.drawRect(Rect.fromLTWH(0, y, s.width, 2 + k * 1.3), Paint()..color = bg);
    }
    canvas.restore();
    // Wireframe mountains.
    final m = Path()..moveTo(0, horizon);
    const peaks = [0.0, 0.08, 0.16, 0.24, 0.3, 0.7, 0.78, 0.86, 0.93, 1.0];
    for (var i = 0; i < peaks.length; i++) {
      m.lineTo(peaks[i] * s.width, horizon - (i.isOdd ? 34.0 + 10 * (i % 3) : 6.0));
    }
    canvas.drawPath(m, Paint()..color = bg);
    canvas.drawPath(m, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.4
      ..color = cyan.withValues(alpha: 0.7));
    // Floor grid rushing toward the viewer.
    canvas.drawRect(Rect.fromLTWH(0, horizon, s.width, s.height - horizon), Paint()..color = Color.lerp(bg, Colors.black, 0.3)!);
    final grid = Paint()
      ..strokeWidth = 1.2
      ..color = pink.withValues(alpha: 0.8);
    canvas.drawLine(Offset(0, horizon), Offset(s.width, horizon), grid..strokeWidth = 2);
    grid.strokeWidth = 1.1;
    for (var k = 0; k < 8; k++) {
      final z = ((k + t) / 8);
      final y = horizon + (s.height - horizon) * z * z;
      canvas.drawLine(Offset(0, y), Offset(s.width, y), grid);
    }
    for (var k = -8; k <= 8; k++) {
      canvas.drawLine(Offset(s.width / 2 + k * 10, horizon), Offset(s.width / 2 + k * s.width * 0.14, s.height), grid);
    }
  }

  @override
  bool shouldRepaint(covariant _ProSynthPainter old) => old.t != t;
}

class _ProHazardRingPainter extends CustomPainter {
  _ProHazardRingPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2 - 2;
    const n = 24;
    for (var i = 0; i < n; i++) {
      final a = i / n * math.pi * 2;
      canvas.drawArc(Rect.fromCircle(center: c, radius: r - 7), a, math.pi * 2 / n, false, Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 14
        ..color = i.isEven ? color : const Color(0xFF0A0A0A));
    }
    canvas.drawCircle(c, r, Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5
      ..color = color);
  }

  @override
  bool shouldRepaint(covariant _ProHazardRingPainter old) => old.color != color;
}

class _ProBoltPainter extends CustomPainter {
  _ProBoltPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final w = s.width;
    final h = s.height;
    final path = Path()
      ..moveTo(w * 0.62, 0)
      ..lineTo(0, h * 0.56)
      ..lineTo(w * 0.45, h * 0.56)
      ..lineTo(w * 0.35, h)
      ..lineTo(w, h * 0.4)
      ..lineTo(w * 0.55, h * 0.4)
      ..close();
    canvas.drawPath(path, Paint()..color = color);
  }

  @override
  bool shouldRepaint(covariant _ProBoltPainter old) => old.color != color;
}

class _ProSkylinePainter extends CustomPainter {
  _ProSkylinePainter(this.pink, this.cyan, this.t);
  final Color pink;
  final Color cyan;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final ground = s.height;
    for (var layer = 0; layer < 2; layer++) {
      var x = -6.0;
      var i = layer * 50;
      while (x < s.width) {
        final w = 22 + _p3Seed(i, 3 + layer) * 30;
        final h = s.height * (layer == 0 ? 0.35 + 0.35 * _p3Seed(i, 7) : 0.18 + 0.25 * _p3Seed(i, 11));
        final rect = Rect.fromLTWH(x, ground - h, w, h);
        canvas.drawRect(rect, Paint()..color = layer == 0 ? const Color(0xFF1E0B3A) : const Color(0xFF0A0118));
        canvas.drawLine(rect.topLeft, rect.topRight, Paint()
          ..strokeWidth = 1.5
          ..color = (i.isEven ? pink : cyan).withValues(alpha: layer == 0 ? 0.4 : 0.8));
        if (layer == 1) {
          for (var wy = rect.top + 6; wy < ground - 4; wy += 7) {
            for (var wx = rect.left + 4; wx < rect.right - 3; wx += 6) {
              if (_p3Seed((wx * 7 + wy).round(), (t * 4).floor() + i) > 0.6) {
                canvas.drawRect(Rect.fromLTWH(wx, wy, 2.5, 3), Paint()..color = (_p3Seed(wx.round(), 2) > 0.5 ? pink : cyan).withValues(alpha: 0.75));
              }
            }
          }
        }
        x += w + 2;
        i++;
      }
    }
    // Flying-car light streaks.
    for (var k = 0; k < 4; k++) {
      final y = s.height * (0.18 + k * 0.1);
      final dir = k.isEven ? 1.0 : -1.0;
      final p = ((t * (1 + k * 0.4) + k * 0.3) % 1);
      final x = dir > 0 ? p * (s.width + 80) - 40 : s.width + 40 - p * (s.width + 80);
      final col = k.isEven ? pink : cyan;
      canvas.drawLine(Offset(x, y), Offset(x - dir * 40, y), Paint()
        ..strokeWidth = 2
        ..strokeCap = StrokeCap.round
        ..shader = LinearGradient(colors: dir > 0 ? [col.withValues(alpha: 0), col] : [col, col.withValues(alpha: 0)]).createShader(Rect.fromLTWH(math.min(x, x - dir * 40), y - 1, 40, 2)));
      canvas.drawCircle(Offset(x, y), 2.4, Paint()..color = Colors.white);
    }
  }

  @override
  bool shouldRepaint(covariant _ProSkylinePainter old) => old.t != t;
}

class _ProKaleidoPainter extends CustomPainter {
  _ProKaleidoPainter(this.colors, this.t);
  final List<Color> colors;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFF0B0B1A));
    const wedges = 12;
    for (var w = 0; w < wedges; w++) {
      canvas.save();
      canvas.translate(c.dx, c.dy);
      canvas.rotate(w * math.pi * 2 / wedges);
      if (w.isOdd) canvas.scale(1, -1);
      for (var k = 0; k < 5; k++) {
        final d = r * (0.3 + k * 0.15);
        final off = math.sin(t * math.pi * 4 + k) * 0.12;
        final col = colors[k % colors.length].withValues(alpha: 0.85);
        final pos = Offset(d, d * (0.14 + off));
        if (k.isEven) {
          canvas.drawCircle(pos, r * 0.06 + k * 1.5, Paint()..color = col);
        } else {
          canvas.drawPath(
            Path()
              ..moveTo(pos.dx - 6, pos.dy - 5)
              ..lineTo(pos.dx + 8, pos.dy)
              ..lineTo(pos.dx - 6, pos.dy + 5)
              ..close(),
            Paint()..color = col,
          );
        }
      }
      canvas.drawLine(Offset.zero, Offset(r, 0), Paint()
        ..strokeWidth = 0.8
        ..color = Colors.white.withValues(alpha: 0.25));
      canvas.restore();
    }
  }

  @override
  bool shouldRepaint(covariant _ProKaleidoPainter old) => old.t != t;
}

class _ProFireflyPainter extends CustomPainter {
  _ProFireflyPainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final tau = math.pi * 2;
    for (var i = 0; i < 26; i++) {
      final bx = _p3Seed(i, 61) * s.width;
      final by = _p3Seed(i, 62) * s.height;
      final p = Offset(bx + math.sin(t * tau * (1 + _p3Seed(i, 63)) + i) * 26, by + math.cos(t * tau * (0.7 + _p3Seed(i, 64)) + i) * 18);
      final glow = math.max(0.0, math.sin(t * tau * 4 + i * 2.1));
      if (glow < 0.05) continue;
      canvas.drawCircle(p, 7 * glow, Paint()
        ..color = color.withValues(alpha: 0.35 * glow)
        ..maskFilter = const MaskFilter.blur(BlurStyle.normal, 6));
      canvas.drawCircle(p, 1.8, Paint()..color = Color.lerp(color, Colors.white, 0.5)!.withValues(alpha: glow));
    }
  }

  @override
  bool shouldRepaint(covariant _ProFireflyPainter old) => old.t != t;
}

class _ProPinesPainter extends CustomPainter {
  _ProPinesPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()..color = color;
    var x = -10.0;
    var i = 0;
    while (x < s.width + 20) {
      final h = s.height * (0.55 + 0.45 * _p3Seed(i, 81));
      final w = h * 0.42;
      final tree = Path()
        ..moveTo(x, s.height - h)
        ..lineTo(x + w * 0.3, s.height - h * 0.66)
        ..lineTo(x + w * 0.15, s.height - h * 0.66)
        ..lineTo(x + w * 0.45, s.height - h * 0.33)
        ..lineTo(x + w * 0.25, s.height - h * 0.33)
        ..lineTo(x + w * 0.55, s.height)
        ..lineTo(x - w * 0.55, s.height)
        ..lineTo(x - w * 0.25, s.height - h * 0.33)
        ..lineTo(x - w * 0.45, s.height - h * 0.33)
        ..lineTo(x - w * 0.15, s.height - h * 0.66)
        ..lineTo(x - w * 0.3, s.height - h * 0.66)
        ..close();
      canvas.drawPath(tree, p);
      x += w * 0.8 + 6;
      i++;
    }
  }

  @override
  bool shouldRepaint(covariant _ProPinesPainter old) => old.color != color;
}

class _ProTreeRingPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    canvas.drawCircle(c, r, Paint()..color = const Color(0xFF6B4423));
    for (var k = 0; k < 7; k++) {
      final rr = r - 3 - k * 3.2;
      final path = Path();
      for (var i = 0; i <= 60; i++) {
        final a = i / 60 * math.pi * 2;
        final wob = rr + math.sin(a * 5 + k) * 1.4;
        final p = c + Offset(math.cos(a), math.sin(a)) * wob;
        if (i == 0) {
          path.moveTo(p.dx, p.dy);
        } else {
          path.lineTo(p.dx, p.dy);
        }
      }
      canvas.drawPath(path..close(), Paint()
        ..style = PaintingStyle.stroke
        ..strokeWidth = 1.2
        ..color = k.isEven ? const Color(0xFFD9A066) : const Color(0xFF3B2412));
    }
  }

  @override
  bool shouldRepaint(covariant _ProTreeRingPainter old) => false;
}

class _ProArrowSignClipper extends CustomClipper<Path> {
  const _ProArrowSignClipper({required this.pointRight});
  final bool pointRight;
  @override
  Path getClip(Size s) {
    const tip = 24.0;
    if (pointRight) {
      return Path()
        ..moveTo(0, 0)
        ..lineTo(s.width - tip, 0)
        ..lineTo(s.width, s.height / 2)
        ..lineTo(s.width - tip, s.height)
        ..lineTo(0, s.height)
        ..close();
    }
    return Path()
      ..moveTo(tip, 0)
      ..lineTo(s.width, 0)
      ..lineTo(s.width, s.height)
      ..lineTo(tip, s.height)
      ..lineTo(0, s.height / 2)
      ..close();
  }

  @override
  bool shouldReclip(covariant _ProArrowSignClipper old) => old.pointRight != pointRight;
}

class _ProWoodGrainPainter extends CustomPainter {
  _ProWoodGrainPainter(this.seed);
  final int seed;
  @override
  void paint(Canvas canvas, Size s) {
    final p = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = 0.9
      ..color = const Color(0xFF3B2412).withValues(alpha: 0.45);
    for (var k = 0; k < 6; k++) {
      final y0 = s.height * (0.12 + k * 0.16);
      final path = Path()..moveTo(0, y0);
      for (var x = 0.0; x <= s.width; x += 8) {
        path.lineTo(x, y0 + math.sin(x / (18 + k * 3) + seed + k) * 1.8);
      }
      canvas.drawPath(path, p);
    }
    canvas.drawRect(Rect.fromLTWH(0, 0, s.width, 2), Paint()..color = Colors.white.withValues(alpha: 0.15));
  }

  @override
  bool shouldRepaint(covariant _ProWoodGrainPainter old) => old.seed != seed;
}

class _ProRosePainter extends CustomPainter {
  _ProRosePainter(this.color, this.t);
  final Color color;
  final double t;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    const layers = [(8, 1.0, 0.0), (8, 0.82, 0.39), (6, 0.66, 0.2)];
    for (var li = 0; li < layers.length; li++) {
      final (n, scale, phase) = layers[li];
      final dir = li.isEven ? 1.0 : -1.0;
      final open = 0.92 + 0.08 * math.sin(t * math.pi * 2 + li);
      for (var i = 0; i < n; i++) {
        final a = i / n * math.pi * 2 + phase + dir * t * math.pi * 2 / 4;
        canvas.save();
        canvas.translate(c.dx, c.dy);
        canvas.rotate(a);
        final len = r * scale * open;
        final w = len * 0.38;
        final petal = Path()
          ..moveTo(len * 0.25, 0)
          ..cubicTo(len * 0.45, -w, len, -w * 0.8, len, 0)
          ..cubicTo(len, w * 0.8, len * 0.45, w, len * 0.25, 0)
          ..close();
        final shade = Color.lerp(color, Colors.white, 0.25 + li * 0.2)!;
        canvas.drawPath(petal, Paint()..shader = RadialGradient(center: Alignment.centerLeft, radius: 1.2, colors: [shade, Color.lerp(color, Colors.white, 0.75)!]).createShader(Rect.fromLTWH(0, -w, len, w * 2)));
        canvas.drawPath(petal, Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 0.8
          ..color = color.withValues(alpha: 0.35));
        canvas.restore();
      }
    }
  }

  @override
  bool shouldRepaint(covariant _ProRosePainter old) => old.t != t;
}

class _ProFlowerPainter extends CustomPainter {
  _ProFlowerPainter(this.color);
  final Color color;
  @override
  void paint(Canvas canvas, Size s) {
    final c = s.center(Offset.zero);
    final r = s.width / 2;
    for (var i = 0; i < 5; i++) {
      final a = i / 5 * math.pi * 2 - math.pi / 2;
      canvas.drawCircle(c + Offset(math.cos(a), math.sin(a)) * r * 0.5, r * 0.42, Paint()..color = color.withValues(alpha: 0.75));
    }
    canvas.drawCircle(c, r * 0.3, Paint()..color = const Color(0xFFFDE68A));
  }

  @override
  bool shouldRepaint(covariant _ProFlowerPainter old) => old.color != color;
}
