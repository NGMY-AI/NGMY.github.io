import 'dart:convert';
import 'dart:math' as math;
import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'ngmy_platform_graphics.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_bio_effects.dart';
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
                _bioImage(document.backgroundImageBase64, fit: BoxFit.cover, alignment: Alignment.topCenter),
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

  double _ringClearance(double avatarSize) => avatarSize * 0.2 + (compact ? 16.0 : 22.0);

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
    final avatarCenterY = headerH - curveDepth * 0.5;
    final avatarTop = avatarCenterY - avatarSize * 0.5;
    final contentTop = avatarCenterY + avatarSize * 0.5 + _ringClearance(avatarSize);
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
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight, nameGap: compact ? 8 : 12),
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
    final gap = nameGap ?? (compact ? 14.0 : 18.0);
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
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight, nameGap: compact ? 12 : 16),
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
    final avatarCenterY = headerH - curveDepth * 0.5;
    final avatarTop = avatarCenterY - avatarSize * 0.5;
    final contentTop = avatarCenterY + avatarSize * 0.5 + _ringClearance(avatarSize);
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
      belowAvatar: () => _belowAvatarLinks(tpl, name, tagline, links, pad, minPageHeight: minPageHeight, nameGap: compact ? 8 : 12),
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
                filterQuality: FilterQuality.medium,
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
    final inner = ClipOval(
      child: ref.isNotEmpty
          ? _bioImage(ref, fit: BoxFit.cover, width: size, height: size)
          : Container(
              width: size,
              height: size,
              color: const Color(0xFFE5E7EB),
              child: Icon(Icons.person_rounded, size: size * 0.5, color: const Color(0xFF9CA3AF)),
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
    final usePill = bioSite || isGlass || tpl.linkStyle == NgmyBioLinkStyle.outline || tpl.linkStyle == NgmyBioLinkStyle.goldBar;
    final radius = bioSite ? 14.0 : (usePill ? 999.0 : tpl.cardRadius.clamp(8.0, 28.0));
    final compactPad = compact;
    final thumbSize = compactPad ? 36.0 : 42.0;
    final displayTitle = isGlass && isDark ? rawTitle.toUpperCase() : rawTitle;

    Widget thumb = ClipOval(
      child: link.imageBase64.isNotEmpty
          ? _bioImage(link.imageBase64, width: thumbSize, height: thumbSize, fit: BoxFit.cover)
          : Container(
              width: thumbSize,
              height: thumbSize,
              color: isDark ? Colors.white.withValues(alpha: 0.12) : tpl.subtitleColor.withValues(alpha: 0.15),
              child: Icon(Icons.link_rounded, color: tpl.subtitleColor, size: compactPad ? 20 : 22),
            ),
    );

    final content = Row(
      children: [
        thumb,
        SizedBox(width: compactPad ? 12 : 14),
        Expanded(
          child: Text(
            displayTitle,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            textAlign: bioSite ? TextAlign.left : TextAlign.center,
            style: TextStyle(
              fontFamily: bioSite ? 'Georgia' : (tpl.serifTitle ? 'Georgia' : null),
              fontSize: compactPad ? 12 : 14,
              fontWeight: FontWeight.w700,
              letterSpacing: isGlass && isDark ? 0.6 : (bioSite ? 0.15 : 0),
              height: 1.2,
              color: tpl.linkTextColor,
            ),
          ),
        ),
        if (!bioSite) SizedBox(width: thumbSize),
      ],
    );

    final decoration = _linkDecoration(tpl, radius);
    final borderRadius = BorderRadius.circular(radius.clamp(8, 999));
    final padded = Padding(
      padding: EdgeInsets.symmetric(horizontal: compactPad ? 10 : 12, vertical: compactPad ? 8 : 10),
      child: content,
    );

    Widget card;
    if (tpl.linkStyle == NgmyBioLinkStyle.glass && !lightweight) {
      card = ClipRRect(
        borderRadius: borderRadius,
        child: ngmyClipBackdrop(
              borderRadius: BorderRadius.zero,
              sigma: 16,
              child: DecoratedBox(decoration: decoration, child: padded),
        ),
      );
    } else {
      card = DecoratedBox(decoration: decoration, child: padded);
    }

    return Padding(
      padding: EdgeInsets.only(bottom: compactPad ? 10 : 12),
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
        borderRadius: BorderRadius.circular(radius.clamp(8.0, 20.0)),
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

  Widget _bioImage(String ref, {double? width, double? height, BoxFit fit = BoxFit.contain, Alignment alignment = Alignment.center}) {
    try {
      if (!ref.startsWith('data:image')) return const SizedBox.shrink();
      final bytes = base64Decode(ref.split(',').last);
      int? cacheW;
      int? cacheH;
      if (lightweight) {
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
        filterQuality: FilterQuality.medium,
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
