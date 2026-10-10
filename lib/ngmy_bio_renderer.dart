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
