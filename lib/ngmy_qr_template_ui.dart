import 'dart:math' as math;

import 'package:flutter/material.dart';

import 'ngmy_qr_templates.dart';

class NgmyQrTemplateCard extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Map<String, String> fieldVars;
  final Widget qrWidget;
  final bool compact;
  final GlobalKey? captureKey;

  const NgmyQrTemplateCard({
    super.key,
    required this.template,
    required this.title,
    required this.body,
    required this.footer,
    this.fieldVars = const {},
    required this.qrWidget,
    this.compact = false,
    this.captureKey,
  });

  static const _paperW = 340.0;
  static const _paperH = 520.0;

  @override
  Widget build(BuildContext context) {
    final content = SizedBox(
      width: _paperW,
      height: _paperH,
      child: _AccessCardLayout(
        template: template,
        subtitle: title.trim().isNotEmpty ? title : template.theme.subtitleTemplate,
        tagline: body.trim(),
        closing: footer.trim().isNotEmpty ? footer : template.theme.closingTemplate,
        fieldVars: fieldVars,
        qrWidget: qrWidget,
        compact: compact,
      ),
    );

    if (compact) {
      return FittedBox(
        fit: BoxFit.contain,
        alignment: Alignment.topCenter,
        child: content,
      );
    }

    return RepaintBoundary(
      key: captureKey,
      child: content,
    );
  }
}

class _AccessCardLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String subtitle;
  final String tagline;
  final String closing;
  final Map<String, String> fieldVars;
  final Widget qrWidget;
  final bool compact;

  const _AccessCardLayout({
    required this.template,
    required this.subtitle,
    required this.tagline,
    required this.closing,
    required this.fieldVars,
    required this.qrWidget,
    this.compact = false,
  });

  @override
  Widget build(BuildContext context) {
    final theme = template.theme;
    final accent = template.accent;
    final navy = template.accentDark;
    final vars = ngmyQrDefaultTemplateVars(template.categoryIndex, fieldVars);
    final field1 = ngmyQrApplyTemplateVars(theme.field1Template, vars);
    final field2 = ngmyQrApplyTemplateVars(theme.field2Template, vars);

    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: accent.withValues(alpha: 0.55), width: 1.5),
        boxShadow: [
          BoxShadow(color: accent.withValues(alpha: 0.12), blurRadius: 24, offset: const Offset(0, 10)),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(17),
      child: Stack(
        children: [
          Column(
            children: [
              _HeaderSection(template: template, subtitle: subtitle, navy: navy, accent: accent),
              _InfoField(label: theme.field1Label, value: field1, icon: theme.field1Icon, accent: accent),
              const SizedBox(height: 8),
              _InfoField(label: theme.field2Label, value: field2, icon: theme.field2Icon, accent: accent),
              const SizedBox(height: 4),
              Expanded(
                child: LayoutBuilder(
                  builder: (context, constraints) {
                    final slotH = constraints.maxHeight;
                    final slotW = constraints.maxWidth;
                    final maxSide = math.min(slotH - 2, slotW - 32).clamp(96.0, 188.0);
                    return Stack(
                      alignment: Alignment.center,
                      clipBehavior: Clip.hardEdge,
                      children: [
                        Positioned.fill(child: CustomPaint(painter: _WaveBgPainter(accent: accent))),
                        _SideChevron(left: true, color: accent),
                        _SideChevron(left: false, color: accent),
                        Center(
                          child: ConstrainedBox(
                            constraints: BoxConstraints(maxWidth: maxSide, maxHeight: maxSide),
                            child: FittedBox(
                              fit: BoxFit.contain,
                              child: qrWidget,
                            ),
                          ),
                        ),
                      ],
                    );
                  },
                ),
              ),
              _StepsSection(theme: theme, accent: accent, navy: navy),
              _ClosingFooter(text: closing, accent: accent),
              const SizedBox(height: 10),
            ],
          ),
          Positioned(
            bottom: 10,
            right: 10,
            child: _NgmyAnimatedWatermark(accent: accent, navy: navy, compact: compact),
          ),
        ],
      ),
      ),
    );
  }
}

class _NgmyAnimatedWatermark extends StatefulWidget {
  final Color accent;
  final Color navy;
  final bool compact;

  const _NgmyAnimatedWatermark({
    required this.accent,
    required this.navy,
    this.compact = false,
  });

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
    final fontSize = widget.compact ? 16.0 : 26.0;
    final hPad = widget.compact ? 10.0 : 16.0;
    final vPad = widget.compact ? 5.0 : 8.0;

    return AnimatedBuilder(
      animation: _ctrl,
      builder: (context, _) {
        final t = _ctrl.value * math.pi * 2;
        final breathe = 1.0 + math.sin(t) * 0.05;
        final glow = 0.22 + (math.sin(t) * 0.5 + 0.5) * 0.28;
        final shimmer = _ctrl.value * 2.4 - 0.8;
        final ringTurns = _ctrl.value;

        return Transform.scale(
          scale: breathe,
          child: Stack(
            clipBehavior: Clip.none,
            alignment: Alignment.center,
            children: [
              Container(
                padding: EdgeInsets.symmetric(horizontal: hPad + 6, vertical: vPad + 6),
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  boxShadow: [
                    BoxShadow(
                      color: widget.accent.withValues(alpha: glow),
                      blurRadius: 18,
                      spreadRadius: 2,
                    ),
                  ],
                ),
              ),
              Transform.rotate(
                angle: ringTurns * math.pi * 2,
                child: Container(
                  width: fontSize * 3.6,
                  height: fontSize * 1.55,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(99),
                    border: Border.all(color: widget.accent.withValues(alpha: 0.35), width: 1.5),
                  ),
                ),
              ),
              Container(
                padding: EdgeInsets.symmetric(horizontal: hPad, vertical: vPad),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(99),
                  gradient: LinearGradient(
                    begin: Alignment.topLeft,
                    end: Alignment.bottomRight,
                    colors: [
                      widget.accent.withValues(alpha: 0.22),
                      widget.navy.withValues(alpha: 0.14),
                      widget.accent.withValues(alpha: 0.18),
                    ],
                  ),
                  border: Border.all(color: widget.accent.withValues(alpha: 0.55), width: 1.5),
                  boxShadow: [
                    BoxShadow(color: widget.navy.withValues(alpha: 0.08), blurRadius: 8, offset: const Offset(0, 2)),
                  ],
                ),
                child: ShaderMask(
                  shaderCallback: (bounds) {
                    return LinearGradient(
                      begin: Alignment(shimmer - 1.2, -0.4),
                      end: Alignment(shimmer, 0.4),
                      colors: [
                        widget.navy,
                        widget.accent,
                        Colors.white,
                        widget.accent,
                        widget.navy,
                      ],
                      stops: const [0.0, 0.38, 0.5, 0.62, 1.0],
                    ).createShader(bounds);
                  },
                  blendMode: BlendMode.srcIn,
                  child: Text(
                    'NGMY',
                    style: TextStyle(
                      fontWeight: FontWeight.w900,
                      fontSize: fontSize,
                      letterSpacing: widget.compact ? 2.5 : 4,
                      height: 1,
                    ),
                  ),
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}

class _HeaderSection extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String subtitle;
  final Color navy;
  final Color accent;

  const _HeaderSection({
    required this.template,
    required this.subtitle,
    required this.navy,
    required this.accent,
  });

  @override
  Widget build(BuildContext context) {
    final theme = template.theme;
    return Padding(
      padding: const EdgeInsets.fromLTRB(16, 18, 16, 10),
      child: Column(
        children: [
          Container(
            width: 52,
            height: 52,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: accent,
              boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.35), blurRadius: 12, offset: const Offset(0, 4))],
            ),
            child: Icon(template.icon, color: Colors.white, size: 26),
          ),
          const SizedBox(height: 10),
          RichText(
            textAlign: TextAlign.center,
            text: TextSpan(
              style: const TextStyle(fontFamily: 'Roboto', height: 1.1),
              children: [
                TextSpan(
                  text: '${theme.headlinePrimary} ',
                  style: TextStyle(color: navy, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: 0.5),
                ),
                TextSpan(
                  text: theme.headlineAccent,
                  style: TextStyle(color: accent, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: 0.5),
                ),
              ],
            ),
          ),
          const SizedBox(height: 6),
          Text(
            subtitle,
            textAlign: TextAlign.center,
            style: TextStyle(color: navy.withValues(alpha: 0.85), fontSize: 13, fontWeight: FontWeight.w600, height: 1.3),
          ),
        ],
      ),
    );
  }
}

class _InfoField extends StatelessWidget {
  final String label;
  final String value;
  final IconData icon;
  final Color accent;

  const _InfoField({
    required this.label,
    required this.value,
    required this.icon,
    required this.accent,
  });

  @override
  Widget build(BuildContext context) {
    final display = value.length > 36 ? '${value.substring(0, 33)}…' : value;
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 22),
      child: Stack(
        clipBehavior: Clip.none,
        alignment: Alignment.topCenter,
        children: [
          Container(
            width: double.infinity,
            margin: const EdgeInsets.only(top: 9),
            padding: const EdgeInsets.fromLTRB(14, 16, 14, 10),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(12),
              border: Border.all(color: accent.withValues(alpha: 0.45), width: 1.5),
            ),
            child: Row(
              children: [
                Icon(icon, color: accent.withValues(alpha: 0.75), size: 18),
                const SizedBox(width: 8),
                Expanded(
                  child: Text(
                    display,
                    style: TextStyle(color: accent.withValues(alpha: 0.9), fontWeight: FontWeight.w700, fontSize: 13),
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            top: 0,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 3),
              decoration: BoxDecoration(
                color: accent,
                borderRadius: BorderRadius.circular(99),
              ),
              child: Text(
                label,
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w800, fontSize: 9, letterSpacing: 1.1),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _SideChevron extends StatelessWidget {
  final bool left;
  final Color color;

  const _SideChevron({required this.left, required this.color});

  @override
  Widget build(BuildContext context) {
    return Positioned(
      left: left ? 0 : null,
      right: left ? null : 0,
      top: 0,
      bottom: 0,
      child: Center(
        child: CustomPaint(
          size: const Size(18, 40),
          painter: _ChevronPainter(color: color, pointingRight: left),
        ),
      ),
    );
  }
}

class _StepsSection extends StatelessWidget {
  final NgmyQrCategoryTheme theme;
  final Color accent;
  final Color navy;

  const _StepsSection({required this.theme, required this.accent, required this.navy});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(12, 4, 12, 0),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(child: Container(height: 1, color: accent.withValues(alpha: 0.35))),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8),
                child: Text(
                  theme.stepsTitle,
                  style: TextStyle(color: navy, fontWeight: FontWeight.w900, fontSize: 9.5, letterSpacing: 1.2),
                ),
              ),
              Expanded(child: Container(height: 1, color: accent.withValues(alpha: 0.35))),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            children: [
              for (var i = 0; i < theme.steps.length; i++) ...[
                if (i > 0) const SizedBox(width: 2),
                Expanded(child: _StepTile(step: theme.steps[i], number: i + 1, accent: accent, navy: navy)),
              ],
            ],
          ),
        ],
      ),
    );
  }
}

class _StepTile extends StatelessWidget {
  final NgmyQrStepDef step;
  final int number;
  final Color accent;
  final Color navy;

  const _StepTile({required this.step, required this.number, required this.accent, required this.navy});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Stack(
          clipBehavior: Clip.none,
          children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: accent.withValues(alpha: 0.1),
                border: Border.all(color: accent.withValues(alpha: 0.25)),
              ),
              child: Icon(step.icon, color: navy.withValues(alpha: 0.7), size: 18),
            ),
            Positioned(
              top: -4,
              right: -2,
              child: Container(
                width: 16,
                height: 16,
                alignment: Alignment.center,
                decoration: BoxDecoration(shape: BoxShape.circle, color: accent),
                child: Text('$number', style: const TextStyle(color: Colors.white, fontSize: 9, fontWeight: FontWeight.w900)),
              ),
            ),
          ],
        ),
        const SizedBox(height: 4),
        Text(
          step.text,
          textAlign: TextAlign.center,
          style: TextStyle(color: navy.withValues(alpha: 0.75), fontSize: 7.5, fontWeight: FontWeight.w600, height: 1.2),
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
        ),
      ],
    );
  }
}

class _ClosingFooter extends StatelessWidget {
  final String text;
  final Color accent;

  const _ClosingFooter({required this.text, required this.accent});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 8),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Icon(Icons.favorite_rounded, color: accent, size: 14),
          const SizedBox(width: 5),
          Flexible(
            child: Text(
              text,
              textAlign: TextAlign.center,
              style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11.5),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ],
      ),
    );
  }
}

class _WaveBgPainter extends CustomPainter {
  final Color accent;

  _WaveBgPainter({required this.accent});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = accent.withValues(alpha: 0.07)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.2;

    for (var w = 0; w < 5; w++) {
      final path = Path();
      final yBase = size.height * (0.15 + w * 0.14);
      path.moveTo(0, yBase);
      for (var x = 0.0; x <= size.width; x += 8) {
        path.lineTo(x, yBase + math.sin((x / size.width) * math.pi * 3 + w) * 6);
      }
      canvas.drawPath(path, paint);
    }
  }

  @override
  bool shouldRepaint(covariant _WaveBgPainter oldDelegate) => oldDelegate.accent != accent;
}

class _ChevronPainter extends CustomPainter {
  final Color color;
  final bool pointingRight;

  _ChevronPainter({required this.color, required this.pointingRight});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()..color = color.withValues(alpha: 0.85);
    final path = Path();
    if (pointingRight) {
      path.moveTo(0, 0);
      path.lineTo(size.width, size.height / 2);
      path.lineTo(0, size.height);
    } else {
      path.moveTo(size.width, 0);
      path.lineTo(0, size.height / 2);
      path.lineTo(size.width, size.height);
    }
    path.close();
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant _ChevronPainter oldDelegate) =>
      oldDelegate.color != color || oldDelegate.pointingRight != pointingRight;
}

Future<void> showNgmyQrTemplateGallery({
  required BuildContext context,
  required int categoryIndex,
  required String categoryLabel,
  required Map<String, String> fieldVars,
  required Widget qrWidget,
  required void Function(NgmyQrTemplateDef template, String title, String body, String footer) onSelected,
}) {
  final templates = ngmyQrTemplatesForCategory(categoryIndex);
  const bg = Color(0xFF0B0E18);
  const accent = Color(0xFF06B6D4);

  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.transparent,
    builder: (ctx) {
      return DraggableScrollableSheet(
        initialChildSize: 0.88,
        minChildSize: 0.5,
        maxChildSize: 0.95,
        expand: false,
        builder: (_, scrollCtrl) {
          return Container(
            decoration: BoxDecoration(
              color: bg,
              borderRadius: const BorderRadius.vertical(top: Radius.circular(22)),
              border: Border.all(color: accent.withValues(alpha: 0.35)),
            ),
            child: Column(
              children: [
                const SizedBox(height: 10),
                Container(width: 40, height: 4, decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99))),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 16, 12, 8),
                  child: Row(
                    children: [
                      const Icon(Icons.dashboard_customize_rounded, color: accent, size: 24),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text('$categoryLabel Templates', style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 18)),
                            Text('10 premium designs · Pick a color · Edit your words', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
                          ],
                        ),
                      ),
                      IconButton(onPressed: () => Navigator.pop(ctx), icon: const Icon(Icons.close_rounded, color: Colors.white54)),
                    ],
                  ),
                ),
                Expanded(
                  child: GridView.builder(
                    controller: scrollCtrl,
                    padding: const EdgeInsets.fromLTRB(16, 4, 16, 24),
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 2,
                      crossAxisSpacing: 10,
                      mainAxisSpacing: 10,
                      childAspectRatio: 0.62,
                    ),
                    itemCount: templates.length,
                    itemBuilder: (_, i) {
                      final t = templates[i];
                      final vars = ngmyQrDefaultTemplateVars(categoryIndex, fieldVars);
                      final title = ngmyQrApplyTemplateVars(t.titleTemplate, vars);
                      final body = ngmyQrApplyTemplateVars(t.bodyTemplate, vars);
                      final footer = ngmyQrApplyTemplateVars(t.footerTemplate, vars);
                      return Material(
                        color: Colors.transparent,
                        child: InkWell(
                          onTap: () {
                            Navigator.pop(ctx);
                            onSelected(t, title, body, footer);
                          },
                          borderRadius: BorderRadius.circular(14),
                          child: Ink(
                            decoration: BoxDecoration(
                              color: const Color(0xFF12182A),
                              borderRadius: BorderRadius.circular(14),
                              border: Border.all(color: t.accent.withValues(alpha: 0.45)),
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Expanded(
                                  child: Padding(
                                    padding: const EdgeInsets.fromLTRB(6, 6, 6, 2),
                                    child: ClipRRect(
                                      borderRadius: BorderRadius.circular(10),
                                      child: NgmyQrTemplateCard(
                                        template: t,
                                        title: title,
                                        body: body,
                                        footer: footer,
                                        fieldVars: fieldVars,
                                        qrWidget: qrWidget,
                                        compact: true,
                                      ),
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.fromLTRB(8, 2, 8, 6),
                                  child: Text(t.name, style: TextStyle(color: t.accent, fontWeight: FontWeight.w800, fontSize: 11), maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center),
                                ),
                              ],
                            ),
                          ),
                        ),
                      );
                    },
                  ),
                ),
              ],
            ),
          );
        },
      );
    },
  );
}
