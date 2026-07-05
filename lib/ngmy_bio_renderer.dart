import 'dart:convert';
import 'dart:ui';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_bio_models.dart';
import 'ngmy_bio_templates.dart';
import 'ngmy_menu_footer.dart';

/// Link-in-bio page preview (studio + guest).
class NgmyBioPreview extends StatelessWidget {
  const NgmyBioPreview({
    super.key,
    required this.document,
    this.compact = false,
    this.maxWidth = 420,
    this.interactive = true,
    this.lightweight = false,
  });

  final NgmyBioDocument document;
  final bool compact;
  final double maxWidth;
  final bool interactive;
  final bool lightweight;

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

    return Container(
      decoration: _pageDecoration(tpl, document),
      child: Align(
        alignment: Alignment.topCenter,
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: maxWidth),
          child: Stack(
            clipBehavior: Clip.none,
            children: [
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
              SingleChildScrollView(
                padding: EdgeInsets.only(bottom: pad + (document.socialLinks.hasAny ? 56 : 20)),
                child: _layoutBody(tpl, ring, avatarSize, pad, name, tagline, links),
              ),
              if (document.socialLinks.hasAny)
                Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: Center(
                    child: NgmyMenuGuestFooter(links: document.socialLinks, compact: compact),
                  ),
                ),
              Positioned(
                left: pad * 0.5,
                top: 0,
                bottom: 0,
                child: Container(width: 1, color: tpl.accent.withValues(alpha: 0.22)),
              ),
              Positioned(
                right: pad * 0.5,
                top: 0,
                bottom: 0,
                child: Container(width: 1, color: tpl.accent.withValues(alpha: 0.22)),
              ),
            ],
          ),
        ),
      ),
    );
  }

  BoxDecoration _pageDecoration(NgmyBioTemplate tpl, NgmyBioDocument doc) {
    if (doc.backgroundImageBase64.isNotEmpty && tpl.layout == NgmyBioLayoutStyle.photoImmersive) {
      return const BoxDecoration(color: Colors.black);
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
    List<NgmyBioLink> links,
  ) {
    switch (tpl.layout) {
      case NgmyBioLayoutStyle.curvedOverlap:
        return _curvedOverlap(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.waveHeader:
      case NgmyBioLayoutStyle.oceanWave:
        return _waveHeader(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.outlineMinimal:
        return _centeredStack(tpl, ring, avatarSize, pad, name, tagline, links, headerH: 0, panel: false);
      case NgmyBioLayoutStyle.goldLuxe:
        return _goldLuxe(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.pillStack:
        return _centeredStack(tpl, ring, avatarSize, pad, name, tagline, links, headerH: compact ? 60 : 80, roundedPanel: true);
      case NgmyBioLayoutStyle.darkNeon:
        return _neonLayout(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.marbleCream:
        return _marblePanel(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.splitGradient:
        return _curvedOverlap(tpl, ring, avatarSize, pad, name, tagline, links, accentBar: true);
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
        return _sunsetArc(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.forestOrganic:
        return _organicHeader(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.boldStripe:
        return _boldStripe(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.photoImmersive:
        return _photoImmersive(tpl, ring, avatarSize, pad, name, tagline, links);
      case NgmyBioLayoutStyle.diamondWhite:
        return _diamondWhite(tpl, ring, avatarSize, pad, name, tagline, links);
    }
  }

  // ── Layout builders ───────────────────────────────────────────────────────

  /// Same color from curve through the bottom — no contrasting panel block.
  Color _seamlessBody(NgmyBioTemplate tpl) => tpl.pageBgEnd ?? tpl.pageBg;

  Widget _curvedOverlap(
    NgmyBioTemplate tpl,
    NgmyBioRingStyle ring,
    double avatarSize,
    double pad,
    String name,
    String tagline,
    List<NgmyBioLink> links, {
    bool accentBar = false,
  }) {
    final bodyColor = _seamlessBody(tpl);
    final headerH = compact ? 140.0 : 180.0;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          height: headerH,
          width: double.infinity,
          child: Stack(
            fit: StackFit.expand,
            children: [
              _headerImageOrGradient(tpl, headerH),
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: CustomPaint(
                  size: Size(maxWidth, compact ? 44 : 56),
                  painter: ngmyBioCurvedPanelPainter(bodyColor),
                ),
              ),
              if (accentBar)
                Positioned(
                  bottom: compact ? 44 : 56,
                  left: 0,
                  right: 0,
                  child: Container(height: 3, color: tpl.accent.withValues(alpha: 0.85)),
                ),
            ],
          ),
        ),
        ColoredBox(
          color: bodyColor,
          child: Transform.translate(
            offset: Offset(0, -avatarSize * 0.45),
            child: Column(
              children: [
                _avatar(document.avatarImageBase64, avatarSize, ring),
                SizedBox(height: compact ? 10 : 14),
                _nameBlock(tpl, name, tagline),
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

  Widget _waveHeader(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final bodyColor = _seamlessBody(tpl);
    final headerH = compact ? 150.0 : 190.0;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          height: headerH,
          width: double.infinity,
          child: Stack(
            fit: StackFit.expand,
            children: [
              _headerImageOrGradient(tpl, headerH),
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: CustomPaint(
                  size: Size(maxWidth, compact ? 40 : 52),
                  painter: ngmyBioWavePanelPainter(bodyColor),
                ),
              ),
            ],
          ),
        ),
        ColoredBox(
          color: bodyColor,
          child: Transform.translate(
            offset: Offset(0, -avatarSize * 0.48),
            child: Column(
              children: [
                _avatar(document.avatarImageBase64, avatarSize, ring),
                SizedBox(height: compact ? 8 : 12),
                _nameBlock(tpl, name, tagline),
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
                border: softPanel ? Border.all(color: tpl.cardBorder.withValues(alpha: 0.5)) : null,
              ),
              child: Column(
                children: [
                  _nameBlock(tpl, name, tagline),
                  SizedBox(height: compact ? 12 : 16),
                  _linksColumn(links, tpl, 0),
                ],
              ),
            )
          else ...[
            _nameBlock(tpl, name, tagline),
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
              _nameBlock(tpl, name, tagline),
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
          border: Border.all(color: tpl.accent.withValues(alpha: 0.4), width: 1),
          boxShadow: [BoxShadow(color: tpl.accent.withValues(alpha: 0.15), blurRadius: 24, spreadRadius: 2)],
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
            _nameBlock(tpl, name, tagline),
            SizedBox(height: compact ? 14 : 18),
            _linksColumn(links, tpl, 0),
          ],
        ),
      ),
    );
  }

  Widget _marblePanel(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(height: compact ? 12 : 20),
        _avatar(document.avatarImageBase64, avatarSize, ring),
        SizedBox(height: compact ? 10 : 14),
        Container(width: 48, height: 2, color: tpl.accent, margin: EdgeInsets.only(bottom: compact ? 10 : 14)),
        _nameBlock(tpl, name, tagline),
        SizedBox(height: compact ? 12 : 16),
        _framedLinks(links, tpl, pad),
        SizedBox(height: pad),
      ],
    );
  }

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
              _nameBlock(tpl, name, tagline),
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
        border: Border.all(color: tpl.cardBorder),
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
          _nameBlock(tpl, name, tagline),
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
            : BackdropFilter(
                filter: ImageFilter.blur(sigmaX: 12, sigmaY: 12),
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
              _nameBlock(tpl, name, tagline),
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
          _nameBlock(tpl, name, tagline),
          SizedBox(height: compact ? 14 : 18),
          _linksColumn(links, tpl, 0),
        ],
      ),
    );
  }

  Widget _sunsetArc(NgmyBioTemplate tpl, NgmyBioRingStyle ring, double avatarSize, double pad, String name, String tagline, List<NgmyBioLink> links) {
    final bodyColor = _seamlessBody(tpl);
    final headerH = compact ? 140.0 : 180.0;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        SizedBox(
          height: headerH,
          width: double.infinity,
          child: Stack(
            fit: StackFit.expand,
            children: [
              _headerImageOrGradient(tpl, headerH),
              Positioned(
                left: 0,
                right: 0,
                bottom: 0,
                child: CustomPaint(
                  size: Size(maxWidth, compact ? 44 : 56),
                  painter: ngmyBioCurvedPanelPainter(bodyColor),
                ),
              ),
            ],
          ),
        ),
        ColoredBox(
          color: bodyColor,
          child: Transform.translate(
            offset: Offset(0, -avatarSize * 0.45),
            child: Column(
              children: [
                _avatar(document.avatarImageBase64, avatarSize, ring),
                SizedBox(height: compact ? 8 : 12),
                _nameBlock(tpl, name, tagline),
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
                _nameBlock(tpl, name, tagline),
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
        _nameBlock(tpl, name, tagline),
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
          SizedBox(height: compact ? 140 : 180, width: double.infinity, child: _bioImage(document.headerImageBase64, fit: BoxFit.cover))
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
                _nameBlock(tpl, name, tagline),
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
                  border: Border.all(color: tpl.accent.withValues(alpha: 0.4), width: 1),
                ),
              ),
              _avatar(document.avatarImageBase64, avatarSize, ring),
            ],
          ),
          SizedBox(height: compact ? 12 : 16),
          _nameBlock(tpl, name, tagline),
          SizedBox(height: compact ? 6 : 8),
          Container(width: 32, height: 1, color: tpl.subtitleColor.withValues(alpha: 0.4)),
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
      child: DecoratedBox(
        decoration: BoxDecoration(
          border: Border(
            left: BorderSide(color: tpl.accent.withValues(alpha: 0.45), width: 1.5),
            right: BorderSide(color: tpl.accent.withValues(alpha: 0.45), width: 1.5),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 10),
          child: _linksColumn(links, tpl, 0),
        ),
      ),
    );
  }

  Widget _headerImageOrGradient(NgmyBioTemplate tpl, double height) {
    if (document.headerImageBase64.isNotEmpty) {
      return SizedBox(
        height: height,
        width: double.infinity,
        child: _bioImage(document.headerImageBase64, fit: BoxFit.cover, height: height, alignment: Alignment.topCenter),
      );
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
      children: links.map((l) => _linkCard(l, tpl)).toList(),
    );
  }

  Widget _avatar(String ref, double size, NgmyBioRingStyle ring) {
    final pad = ring.id == 'none' ? 0.0 : (size > 100 ? 5.0 : 4.0);
    final inner = size - pad * 2;
    return Container(
      width: size,
      height: size,
      padding: pad > 0 ? EdgeInsets.all(pad) : null,
      decoration: ring.buildRing(size),
      child: ClipOval(
        child: ref.isNotEmpty
            ? _bioImage(ref, fit: BoxFit.cover, width: inner, height: inner)
            : Container(
                width: inner,
                height: inner,
                color: const Color(0xFFE5E7EB),
                child: Icon(Icons.person_rounded, size: inner * 0.5, color: const Color(0xFF9CA3AF)),
              ),
      ),
    );
  }

  Widget _linkCard(NgmyBioLink link, NgmyBioTemplate tpl) {
    final title = link.title.trim().isEmpty ? 'Link' : link.title.trim();
    final radius = tpl.linkStyle == NgmyBioLinkStyle.pill ? 999.0 : tpl.cardRadius;
    final compactPad = compact;

    Widget content = Row(
      children: [
        if (tpl.linkStyle != NgmyBioLinkStyle.minimalLine && tpl.linkStyle != NgmyBioLinkStyle.goldBar)
          ClipRRect(
            borderRadius: BorderRadius.circular(tpl.linkStyle == NgmyBioLinkStyle.pill ? 999 : 8),
            child: link.imageBase64.isNotEmpty
                ? _bioImage(link.imageBase64, width: compactPad ? 40 : 48, height: compactPad ? 40 : 48, fit: BoxFit.cover)
                : Container(
                    width: compactPad ? 40 : 48,
                    height: compactPad ? 40 : 48,
                    color: tpl.subtitleColor.withValues(alpha: 0.12),
                    child: Icon(Icons.link_rounded, color: tpl.subtitleColor, size: compactPad ? 20 : 22),
                  ),
          ),
        if (tpl.linkStyle != NgmyBioLinkStyle.minimalLine && tpl.linkStyle != NgmyBioLinkStyle.goldBar) SizedBox(width: compactPad ? 10 : 12),
        Expanded(
          child: Text(
            title,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: TextStyle(
              fontFamily: tpl.serifTitle ? 'Georgia' : null,
              fontSize: compactPad ? 14 : 16,
              fontWeight: FontWeight.w600,
              color: tpl.linkTextColor,
            ),
          ),
        ),
        if (tpl.linkStyle == NgmyBioLinkStyle.minimalLine)
          Icon(Icons.arrow_forward_ios_rounded, size: 14, color: tpl.subtitleColor),
      ],
    );

    if (tpl.linkStyle == NgmyBioLinkStyle.goldBar) {
      content = Row(
        children: [
          Container(width: 4, height: compactPad ? 36 : 44, color: tpl.accent),
          SizedBox(width: compactPad ? 10 : 12),
          Expanded(
            child: Text(title, style: TextStyle(fontWeight: FontWeight.w700, fontSize: compactPad ? 14 : 16, color: tpl.linkTextColor)),
          ),
        ],
      );
    }

    final decoration = _linkDecoration(tpl, radius);

    final child = Container(
      decoration: decoration,
      padding: EdgeInsets.symmetric(horizontal: compactPad ? 10 : 12, vertical: compactPad ? 10 : 12),
      child: content,
    );

    return Padding(
      padding: EdgeInsets.only(bottom: compactPad ? 8 : 10),
      child: interactive
          ? Material(
              color: Colors.transparent,
              child: InkWell(
                onTap: () => _openUrl(link.url),
                borderRadius: BorderRadius.circular(radius.clamp(4, 999)),
                child: Ink(decoration: decoration, padding: EdgeInsets.symmetric(horizontal: compactPad ? 10 : 12, vertical: compactPad ? 10 : 12), child: content),
              ),
            )
          : child,
    );
  }

  BoxDecoration _linkDecoration(NgmyBioTemplate tpl, double radius) {
    switch (tpl.linkStyle) {
      case NgmyBioLinkStyle.outline:
      case NgmyBioLinkStyle.neonOutline:
        return BoxDecoration(
          color: Colors.transparent,
          borderRadius: BorderRadius.circular(radius.clamp(4, 999)),
          border: Border.all(color: tpl.linkStyle == NgmyBioLinkStyle.neonOutline ? tpl.accent : tpl.cardBorder, width: 1.5),
          boxShadow: tpl.linkStyle == NgmyBioLinkStyle.neonOutline ? [BoxShadow(color: tpl.accent.withValues(alpha: 0.25), blurRadius: 8)] : null,
        );
      case NgmyBioLinkStyle.glass:
        return BoxDecoration(
          color: tpl.cardBg,
          borderRadius: BorderRadius.circular(radius.clamp(4, 999)),
          border: Border.all(color: tpl.cardBorder),
        );
      case NgmyBioLinkStyle.minimalLine:
        return BoxDecoration(
          border: Border(bottom: BorderSide(color: tpl.cardBorder)),
        );
      case NgmyBioLinkStyle.goldBar:
        return BoxDecoration(
          color: tpl.cardBg,
          borderRadius: BorderRadius.circular(radius.clamp(2, 999)),
          border: Border.all(color: tpl.cardBorder.withValues(alpha: 0.5)),
        );
      case NgmyBioLinkStyle.pill:
      case NgmyBioLinkStyle.rowIcon:
        return BoxDecoration(
          color: tpl.cardBg,
          borderRadius: BorderRadius.circular(radius.clamp(4, 999)),
          border: Border.all(color: tpl.cardBorder, width: tpl.cardBorder.a > 0 ? 1 : 0),
          boxShadow: tpl.cardShadow ? [BoxShadow(color: Colors.black.withValues(alpha: 0.06), blurRadius: 8, offset: const Offset(0, 2))] : null,
        );
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
