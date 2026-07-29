import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_qr_templates.dart';

/// Shared layout context for all QR template designs.
class NgmyQrTemplateLayoutData {
  final NgmyQrTemplateDef template;
  final String subtitle;
  final String closing;
  final Map<String, String> fieldVars;
  final Widget qrWidget;
  final bool compact;
  final String field1;
  final String field2;

  const NgmyQrTemplateLayoutData({
    required this.template,
    required this.subtitle,
    required this.closing,
    required this.fieldVars,
    required this.qrWidget,
    required this.compact,
    required this.field1,
    required this.field2,
  });

  NgmyQrCategoryTheme get theme => template.theme;
  Color get accent => template.accent;
  Color get navy => template.accentDark;
}

Widget buildNgmyQrTemplateLayout(NgmyQrTemplateLayoutData data) {
  switch (data.template.layout) {
    case NgmyQrTemplateLayout.accessCard:
      return _AccessCardLayout(data: data);
    case NgmyQrTemplateLayout.topBanner:
      return _TopBannerLayout(data: data);
    case NgmyQrTemplateLayout.qrHero:
      return _QrHeroLayout(data: data);
    case NgmyQrTemplateLayout.splitPanel:
      return _SplitPanelLayout(data: data);
    case NgmyQrTemplateLayout.ticketStub:
      return _TicketStubLayout(data: data);
    case NgmyQrTemplateLayout.gradientBold:
      return _GradientBoldLayout(data: data);
    case NgmyQrTemplateLayout.sidebarRail:
      return _SidebarRailLayout(data: data);
    case NgmyQrTemplateLayout.posterFrame:
      return _PosterFrameLayout(data: data);
    case NgmyQrTemplateLayout.darkNeon:
      return _DarkNeonLayout(data: data);
    case NgmyQrTemplateLayout.ribbonTag:
      return _RibbonTagLayout(data: data);
  }
}

// ─── Shared pieces ───────────────────────────────────────────────────────────

Widget ngmyQrTemplateWatermark(NgmyQrTemplateLayoutData data) {
  return _NgmyAnimatedWatermark(accent: data.accent, navy: data.navy, compact: data.compact);
}

Widget _headline(NgmyQrTemplateLayoutData data, {Color? primary, Color? accent, double size = 22, bool onDark = false}) {
  final theme = data.theme;
  final p = primary ?? (onDark ? Colors.white : data.navy);
  final a = accent ?? (onDark ? Colors.white.withValues(alpha: 0.92) : data.accent);
  return RichText(
    textAlign: TextAlign.center,
    text: TextSpan(
      children: [
        TextSpan(text: '${theme.headlinePrimary} ', style: TextStyle(color: p, fontWeight: FontWeight.w900, fontSize: size)),
        TextSpan(text: theme.headlineAccent, style: TextStyle(color: a, fontWeight: FontWeight.w900, fontSize: size)),
      ],
    ),
  );
}

Widget _subtitleText(NgmyQrTemplateLayoutData data, {Color? color, double size = 12, bool center = true}) {
  return Text(
    data.subtitle,
    textAlign: center ? TextAlign.center : TextAlign.start,
    style: TextStyle(color: color ?? data.navy.withValues(alpha: 0.85), fontSize: size, fontWeight: FontWeight.w600, height: 1.25),
    maxLines: 2,
    overflow: TextOverflow.ellipsis,
  );
}

Widget _infoPill(NgmyQrTemplateLayoutData data, {required String label, required String value, required IconData icon, bool compact = false}) {
  final display = value.length > 32 ? '${value.substring(0, 29)}…' : value;
  return Stack(
    clipBehavior: Clip.none,
    alignment: Alignment.topCenter,
    children: [
      Container(
        width: double.infinity,
        margin: EdgeInsets.only(top: compact ? 7 : 9),
        padding: EdgeInsets.fromLTRB(12, compact ? 12 : 14, 12, compact ? 8 : 10),
        decoration: BoxDecoration(
          color: Colors.white.withValues(alpha: 0.95),
          borderRadius: BorderRadius.circular(10),
          border: Border.all(color: data.accent.withValues(alpha: 0.4)),
        ),
        child: Row(
          children: [
            Icon(icon, color: data.accent, size: compact ? 15 : 17),
            const SizedBox(width: 6),
            Expanded(child: Text(display, style: TextStyle(color: data.navy, fontWeight: FontWeight.w700, fontSize: compact ? 11 : 12), maxLines: 1, overflow: TextOverflow.ellipsis)),
          ],
        ),
      ),
      Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
        decoration: BoxDecoration(color: data.accent, borderRadius: BorderRadius.circular(99)),
        child: Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 8, letterSpacing: 1)),
      ),
    ],
  );
}

Widget _qrSlot(NgmyQrTemplateLayoutData data, {double maxSize = 188}) {
  return LayoutBuilder(
    builder: (context, constraints) {
      final slotH = constraints.maxHeight.isFinite ? constraints.maxHeight : maxSize;
      final slotW = constraints.maxWidth.isFinite ? constraints.maxWidth : maxSize;
      final side = math.min(slotH - 2, slotW - 8).clamp(88.0, maxSize);
      return Center(
        child: ConstrainedBox(
          constraints: BoxConstraints(maxWidth: side, maxHeight: side),
          child: FittedBox(fit: BoxFit.contain, child: data.qrWidget),
        ),
      );
    },
  );
}

Widget _stepsRow(NgmyQrTemplateLayoutData data, {bool onDark = false}) {
  final theme = data.theme;
  final navy = onDark ? Colors.white : data.navy;
  return Padding(
    padding: const EdgeInsets.fromLTRB(10, 2, 10, 0),
    child: Column(
      children: [
        Row(
          children: [
            Expanded(child: Container(height: 1, color: data.accent.withValues(alpha: onDark ? 0.5 : 0.35))),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 6),
              child: Text(theme.stepsTitle, style: TextStyle(color: navy, fontWeight: FontWeight.w900, fontSize: 8.5, letterSpacing: 1)),
            ),
            Expanded(child: Container(height: 1, color: data.accent.withValues(alpha: onDark ? 0.5 : 0.35))),
          ],
        ),
        const SizedBox(height: 6),
        Row(
          children: [
            for (var i = 0; i < theme.steps.length; i++) ...[
              if (i > 0) const SizedBox(width: 2),
              Expanded(child: _stepTile(data, theme.steps[i], i + 1, onDark: onDark)),
            ],
          ],
        ),
      ],
    ),
  );
}

Widget _stepTile(NgmyQrTemplateLayoutData data, NgmyQrStepDef step, int n, {bool onDark = false}) {
  return Column(
    children: [
      Container(
        width: 34,
        height: 34,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: data.accent.withValues(alpha: onDark ? 0.2 : 0.1),
          border: Border.all(color: data.accent.withValues(alpha: 0.35)),
        ),
        child: Icon(step.icon, size: 15, color: onDark ? Colors.white70 : data.navy.withValues(alpha: 0.7)),
      ),
      const SizedBox(height: 3),
      Text(step.text, textAlign: TextAlign.center, style: TextStyle(fontSize: 7, fontWeight: FontWeight.w600, color: onDark ? Colors.white70 : data.navy.withValues(alpha: 0.75)), maxLines: 2, overflow: TextOverflow.ellipsis),
    ],
  );
}

Widget _closing(NgmyQrTemplateLayoutData data, {bool onDark = false}) {
  return Padding(
    padding: const EdgeInsets.only(top: 6, bottom: 8),
    child: Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(Icons.favorite_rounded, color: onDark ? Colors.white : data.accent, size: 12),
        const SizedBox(width: 4),
        Flexible(child: Text(data.closing, textAlign: TextAlign.center, style: TextStyle(color: onDark ? Colors.white : data.accent, fontWeight: FontWeight.w800, fontSize: 10.5), maxLines: 2, overflow: TextOverflow.ellipsis)),
      ],
    ),
  );
}

// ─── Layout 1: Access Card (original) ───────────────────────────────────────

class _AccessCardLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _AccessCardLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return _whiteShell(
      data,
      child: Column(
        children: [
          _headerIcon(data),
          _headline(data),
          const SizedBox(height: 4),
          _subtitleText(data),
          const SizedBox(height: 8),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 20), child: _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon)),
          const SizedBox(height: 6),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 20), child: _infoPill(data, label: data.theme.field2Label, value: data.field2, icon: data.theme.field2Icon)),
          Expanded(child: _qrSlot(data)),
          _stepsRow(data),
          _closing(data),
        ],
      ),
    );
  }
}

// ─── Layout 2: Top Banner ────────────────────────────────────────────────────

class _TopBannerLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _TopBannerLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: data.accent.withValues(alpha: 0.45)),
      ),
      clipBehavior: Clip.hardEdge,
      child: Column(
        children: [
          Container(
            width: double.infinity,
            padding: const EdgeInsets.fromLTRB(16, 18, 16, 14),
            decoration: BoxDecoration(gradient: LinearGradient(colors: [data.accent, data.navy])),
            child: Column(
              children: [
                Icon(data.template.icon, color: Colors.white, size: 28),
                const SizedBox(height: 8),
                _headline(data, primary: Colors.white, accent: Colors.white.withValues(alpha: 0.85), size: 20),
                const SizedBox(height: 4),
                _subtitleText(data, color: Colors.white.withValues(alpha: 0.9), size: 11),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.fromLTRB(12, 10, 12, 0),
            child: Row(
              children: [
                Expanded(child: _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon, compact: true)),
                const SizedBox(width: 8),
                Expanded(child: _infoPill(data, label: data.theme.field2Label, value: data.field2, icon: data.theme.field2Icon, compact: true)),
              ],
            ),
          ),
          Expanded(child: _qrSlot(data, maxSize: 170)),
          _stepsRow(data),
          _closing(data),
        ],
      ),
    );
  }
}

// ─── Layout 3: QR Hero (QR first) ───────────────────────────────────────────

class _QrHeroLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _QrHeroLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return _whiteShell(
      data,
      child: Column(
        children: [
          const SizedBox(height: 8),
          Expanded(flex: 5, child: _qrSlot(data, maxSize: 200)),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              children: [
                _headline(data, size: 18),
                _subtitleText(data, size: 11),
                const SizedBox(height: 6),
                _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon, compact: true),
              ],
            ),
          ),
          _stepsRow(data),
          _closing(data),
        ],
      ),
    );
  }
}

// ─── Layout 4: Split Panel ───────────────────────────────────────────────────

class _SplitPanelLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _SplitPanelLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return _whiteShell(
      data,
      child: Row(
        children: [
          Expanded(
            flex: 11,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(10, 12, 4, 8),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Icon(data.template.icon, color: data.accent, size: 22),
                  const SizedBox(height: 6),
                  _headline(data, size: 14),
                  const SizedBox(height: 4),
                  _subtitleText(data, size: 9, center: false),
                  const SizedBox(height: 8),
                  _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon, compact: true),
                  const SizedBox(height: 6),
                  _infoPill(data, label: data.theme.field2Label, value: data.field2, icon: data.theme.field2Icon, compact: true),
                  const Spacer(),
                  _stepsRow(data),
                  _closing(data),
                ],
              ),
            ),
          ),
          Container(width: 1, color: data.accent.withValues(alpha: 0.25)),
          Expanded(flex: 10, child: _qrSlot(data, maxSize: 165)),
        ],
      ),
    );
  }
}

// ─── Layout 5: Ticket Stub ───────────────────────────────────────────────────

class _TicketStubLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _TicketStubLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFFBF5),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: data.accent.withValues(alpha: 0.35)),
      ),
      child: Column(
        children: [
          for (var i = 0; i < 5; i++)
            Container(height: 3, margin: EdgeInsets.only(top: i == 0 ? 0 : 1), color: i.isEven ? data.accent.withValues(alpha: 0.08) : Colors.transparent),
          Padding(
            padding: const EdgeInsets.fromLTRB(14, 8, 14, 0),
            child: Column(
              children: [
                Text('◆ ${data.theme.headlinePrimary} ${data.theme.headlineAccent} ◆', style: TextStyle(color: data.navy, fontWeight: FontWeight.w900, fontSize: 14, letterSpacing: 1)),
                const SizedBox(height: 4),
                _subtitleText(data, size: 10),
              ],
            ),
          ),
          Padding(padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6), child: _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon, compact: true)),
          Expanded(child: _qrSlot(data, maxSize: 160)),
          _dashedLine(data.accent),
          _stepsRow(data),
          _closing(data),
        ],
      ),
    );
  }

  Widget _dashedLine(Color c) => Padding(
        padding: const EdgeInsets.symmetric(horizontal: 12),
        child: Row(
          children: List.generate(18, (i) => Expanded(child: Container(height: 1, margin: const EdgeInsets.symmetric(horizontal: 1), color: i.isEven ? c.withValues(alpha: 0.35) : Colors.transparent))),
        ),
      );
}

// ─── Layout 6: Gradient Bold ─────────────────────────────────────────────────

class _GradientBoldLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _GradientBoldLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(16),
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [data.accent, data.navy]),
        boxShadow: [BoxShadow(color: data.accent.withValues(alpha: 0.3), blurRadius: 16, offset: const Offset(0, 6))],
      ),
      padding: const EdgeInsets.all(12),
      child: Column(
        children: [
          Icon(data.template.icon, color: Colors.white, size: 26),
          const SizedBox(height: 6),
          _headline(data, primary: Colors.white, accent: Colors.white.withValues(alpha: 0.85), size: 19),
          _subtitleText(data, color: Colors.white.withValues(alpha: 0.88), size: 10),
          const SizedBox(height: 8),
          Container(
            padding: const EdgeInsets.all(8),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.15), borderRadius: BorderRadius.circular(10)),
            child: Text('${data.field1} · ${data.field2}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 10), maxLines: 2, overflow: TextOverflow.ellipsis),
          ),
          Expanded(child: _qrSlot(data, maxSize: 165)),
          _stepsRow(data, onDark: true),
          _closing(data, onDark: true),
        ],
      ),
    );
  }
}

// ─── Layout 7: Sidebar Rail ──────────────────────────────────────────────────

class _SidebarRailLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _SidebarRailLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(14),
        border: Border.all(color: data.accent.withValues(alpha: 0.35)),
      ),
      clipBehavior: Clip.hardEdge,
      child: Row(
        children: [
          Container(
            width: 10,
            color: data.accent,
            child: RotatedBox(
              quarterTurns: 3,
              child: Center(
                child: Text('NGMY', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 8, letterSpacing: 2)),
              ),
            ),
          ),
          Expanded(
            child: Column(
              children: [
                const SizedBox(height: 10),
                _headline(data, size: 17),
                _subtitleText(data, size: 10),
                Padding(padding: const EdgeInsets.symmetric(horizontal: 12), child: _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon, compact: true)),
                Expanded(child: _qrSlot(data, maxSize: 158)),
                _stepsRow(data),
                _closing(data),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

// ─── Layout 8: Poster Frame ──────────────────────────────────────────────────

class _PosterFrameLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _PosterFrameLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(6),
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: data.accent, width: 2.5),
        borderRadius: BorderRadius.circular(4),
      ),
      child: Container(
        margin: const EdgeInsets.all(8),
        decoration: BoxDecoration(border: Border.all(color: data.accent.withValues(alpha: 0.35))),
        child: Column(
          children: [
            const SizedBox(height: 10),
            Text(data.theme.headlineAccent, style: TextStyle(color: data.accent, fontWeight: FontWeight.w900, fontSize: 11, letterSpacing: 4)),
            _headline(data, size: 16),
            _subtitleText(data, size: 10),
            Expanded(child: _qrSlot(data, maxSize: 168)),
            Padding(padding: const EdgeInsets.symmetric(horizontal: 14), child: Text('${data.field1}  ·  ${data.field2}', textAlign: TextAlign.center, style: TextStyle(color: data.navy, fontSize: 9, fontWeight: FontWeight.w600), maxLines: 2)),
            _stepsRow(data),
            _closing(data),
          ],
        ),
      ),
    );
  }
}

// ─── Layout 9: Dark Neon ─────────────────────────────────────────────────────

class _DarkNeonLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _DarkNeonLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF0B0E18),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: data.accent.withValues(alpha: 0.65), width: 1.5),
        boxShadow: [BoxShadow(color: data.accent.withValues(alpha: 0.25), blurRadius: 14)],
      ),
      child: Column(
        children: [
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(
              border: Border.all(color: data.accent.withValues(alpha: 0.5)),
              borderRadius: BorderRadius.circular(6),
            ),
            child: Text('◈ SCAN READY ◈', style: TextStyle(color: data.accent, fontWeight: FontWeight.w900, fontSize: 8, letterSpacing: 2)),
          ),
          const SizedBox(height: 8),
          _headline(data, primary: Colors.white, accent: data.accent, size: 18),
          _subtitleText(data, color: Colors.white70, size: 10),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
            child: Container(
              padding: const EdgeInsets.all(8),
              decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.06), borderRadius: BorderRadius.circular(8), border: Border.all(color: data.accent.withValues(alpha: 0.2))),
              child: Text('${data.field1}\n${data.field2}', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white70, fontSize: 9, fontWeight: FontWeight.w600, height: 1.4), maxLines: 2),
            ),
          ),
          Expanded(child: _qrSlot(data, maxSize: 162)),
          _stepsRow(data, onDark: true),
          _closing(data, onDark: true),
        ],
      ),
    );
  }
}

// ─── Layout 10: Ribbon Tag ───────────────────────────────────────────────────

class _RibbonTagLayout extends StatelessWidget {
  final NgmyQrTemplateLayoutData data;
  const _RibbonTagLayout({required this.data});

  @override
  Widget build(BuildContext context) {
    return Stack(
      clipBehavior: Clip.none,
      children: [
        _whiteShell(
          data,
          child: Column(
            children: [
              const SizedBox(height: 18),
              _headline(data, size: 18),
              _subtitleText(data, size: 10),
              const SizedBox(height: 8),
              Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: _infoPill(data, label: data.theme.field1Label, value: data.field1, icon: data.theme.field1Icon, compact: true)),
              const SizedBox(height: 4),
              Padding(padding: const EdgeInsets.symmetric(horizontal: 16), child: _infoPill(data, label: data.theme.field2Label, value: data.field2, icon: data.theme.field2Icon, compact: true)),
              Expanded(child: _qrSlot(data, maxSize: 155)),
              _stepsRow(data),
              _closing(data),
            ],
          ),
        ),
        Positioned(
          top: 8,
          left: -4,
          child: Transform.rotate(
            angle: -0.45,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 5),
              decoration: BoxDecoration(
                gradient: LinearGradient(colors: [data.accent, data.navy]),
                boxShadow: [BoxShadow(color: Colors.black26, blurRadius: 4, offset: const Offset(0, 2))],
              ),
              child: Text(data.theme.headlineAccent, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 9, letterSpacing: 1.5)),
            ),
          ),
        ),
      ],
    );
  }
}

Widget _whiteShell(NgmyQrTemplateLayoutData data, {required Widget child}) {
  return Container(
    decoration: BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(16),
      border: Border.all(color: data.accent.withValues(alpha: 0.5)),
      boxShadow: [BoxShadow(color: data.accent.withValues(alpha: 0.1), blurRadius: 12, offset: const Offset(0, 4))],
    ),
    clipBehavior: Clip.hardEdge,
    child: child,
  );
}

Widget _headerIcon(NgmyQrTemplateLayoutData data) {
  return Padding(
    padding: const EdgeInsets.only(top: 14),
    child: Container(
      width: 46,
      height: 46,
      decoration: BoxDecoration(shape: BoxShape.circle, color: data.accent, boxShadow: [BoxShadow(color: data.accent.withValues(alpha: 0.35), blurRadius: 10)]),
      child: Icon(data.template.icon, color: Colors.white, size: 24),
    ),
  );
}

// Watermark (moved from template_ui for layout file self-containment in card stack)
class _NgmyAnimatedWatermark extends StatefulWidget {
  final Color accent;
  final Color navy;
  final bool compact;
  const _NgmyAnimatedWatermark({required this.accent, required this.navy, this.compact = false});
  @override
  State<_NgmyAnimatedWatermark> createState() => _NgmyAnimatedWatermarkState();
}

class _NgmyAnimatedWatermarkState extends State<_NgmyAnimatedWatermark> with SingleTickerProviderStateMixin {
  late final AnimationController _ctrl;
  @override
  void initState() {
    super.initState();
    _ctrl = AnimationController(vsync: this, duration: const Duration(milliseconds: 3200))..repeat();
  }

  @override
  void dispose() {
    _ctrl.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final fontSize = widget.compact ? 14.0 : 22.0;
    return AnimatedBuilder(
      animation: _ctrl,
      builder: (_, __) {
        final shimmer = _ctrl.value * 2.4 - 0.8;
        return Container(
          padding: EdgeInsets.symmetric(horizontal: widget.compact ? 8 : 12, vertical: widget.compact ? 4 : 6),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(99),
            gradient: LinearGradient(colors: [widget.accent.withValues(alpha: 0.2), widget.navy.withValues(alpha: 0.12)]),
            border: Border.all(color: widget.accent.withValues(alpha: 0.5)),
          ),
          child: ShaderMask(
            shaderCallback: (b) => LinearGradient(begin: Alignment(shimmer - 1, 0), end: Alignment(shimmer, 0), colors: [widget.navy, widget.accent, Colors.white, widget.accent]).createShader(b),
            blendMode: BlendMode.srcIn,
            child: Text('NGMY', style: TextStyle(fontWeight: FontWeight.w900, fontSize: fontSize, letterSpacing: 3)),
          ),
        );
      },
    );
  }
}
