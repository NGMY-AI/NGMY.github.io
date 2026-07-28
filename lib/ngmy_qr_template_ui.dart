import 'package:flutter/material.dart';

import 'ngmy_qr_templates.dart';

class NgmyQrTemplateCard extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  final bool compact;
  final GlobalKey? captureKey;

  const NgmyQrTemplateCard({
    super.key,
    required this.template,
    required this.title,
    required this.body,
    required this.footer,
    required this.qrWidget,
    this.compact = false,
    this.captureKey,
  });

  static const _paperW = 340.0;
  static const _paperH = 480.0;

  @override
  Widget build(BuildContext context) {
    final scale = compact ? 0.42 : 1.0;
    return RepaintBoundary(
      key: captureKey,
      child: Transform.scale(
        scale: scale,
        alignment: Alignment.topCenter,
        child: SizedBox(
          width: _paperW,
          height: _paperH,
          child: _buildStyledCard(),
        ),
      ),
    );
  }

  Widget _buildStyledCard() {
    switch (template.style) {
      case NgmyQrTemplateStyle.classicInvoice:
        return _ClassicInvoiceLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.modernMinimal:
        return _ModernMinimalLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.boldGradient:
        return _BoldGradientLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.thermalReceipt:
        return _ThermalReceiptLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.elegantDark:
        return _ElegantDarkLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.ngmyCyan:
        return _NgmyCyanLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.letterhead:
        return _LetterheadLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.framedCard:
        return _FramedCardLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.neonHud:
        return _NeonHudLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
      case NgmyQrTemplateStyle.premiumGold:
        return _PremiumGoldLayout(template: template, title: title, body: body, footer: footer, qrWidget: qrWidget);
    }
  }
}

class _QrTemplateBottom extends StatelessWidget {
  final String footer;
  final Widget qrWidget;
  final Color accent;
  final Color dividerColor;
  final Color footerColor;

  const _QrTemplateBottom({
    required this.footer,
    required this.qrWidget,
    required this.accent,
    required this.dividerColor,
    required this.footerColor,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(height: 1, color: dividerColor),
        const SizedBox(height: 10),
        Text(
          footer,
          textAlign: TextAlign.center,
          style: TextStyle(color: footerColor, fontSize: 11, fontWeight: FontWeight.w800, letterSpacing: 0.6),
        ),
        const SizedBox(height: 12),
        Center(child: qrWidget),
        const SizedBox(height: 8),
        Text(
          'Powered by NGMY',
          style: TextStyle(color: footerColor.withValues(alpha: 0.65), fontSize: 9, fontWeight: FontWeight.w700, letterSpacing: 0.8),
        ),
      ],
    );
  }
}

class _ClassicInvoiceLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _ClassicInvoiceLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(12),
        border: Border.all(color: const Color(0xFFE2E8F0)),
        boxShadow: [BoxShadow(color: Colors.black.withValues(alpha: 0.08), blurRadius: 16, offset: const Offset(0, 6))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 16),
            decoration: BoxDecoration(color: template.accent, borderRadius: const BorderRadius.vertical(top: Radius.circular(11))),
            child: Row(
              children: [
                Icon(template.icon, color: template.onAccent, size: 22),
                const SizedBox(width: 10),
                Expanded(child: Text('INVOICE', style: TextStyle(color: template.onAccent, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 2))),
                Icon(Icons.qr_code_2_rounded, color: template.onAccent.withValues(alpha: 0.85), size: 20),
              ],
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(22, 20, 22, 12),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: TextStyle(color: template.accent, fontWeight: FontWeight.w900, fontSize: 22, height: 1.2)),
                  const SizedBox(height: 12),
                  Text(body, style: const TextStyle(color: Color(0xFF334155), fontSize: 13.5, height: 1.55, fontWeight: FontWeight.w500)),
                  const Spacer(),
                  _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: const Color(0xFFE2E8F0), footerColor: const Color(0xFF64748B)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ModernMinimalLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _ModernMinimalLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(color: const Color(0xFFFAFAFA), borderRadius: BorderRadius.circular(16), border: Border.all(color: const Color(0xFFE5E7EB))),
      padding: const EdgeInsets.fromLTRB(24, 28, 24, 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(color: template.accent.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(10)),
                child: Icon(template.icon, color: template.accent, size: 20),
              ),
              const Spacer(),
              Container(width: 48, height: 3, decoration: BoxDecoration(color: template.accent, borderRadius: BorderRadius.circular(99))),
            ],
          ),
          const SizedBox(height: 22),
          Text(title, style: const TextStyle(color: Color(0xFF0F172A), fontWeight: FontWeight.w900, fontSize: 24, height: 1.15)),
          const SizedBox(height: 14),
          Text(body, style: const TextStyle(color: Color(0xFF475569), fontSize: 14, height: 1.6)),
          const Spacer(),
          _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: const Color(0xFFE5E7EB), footerColor: const Color(0xFF94A3B8)),
        ],
      ),
    );
  }
}

class _BoldGradientLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _BoldGradientLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: template.gradient),
        borderRadius: BorderRadius.circular(18),
        boxShadow: [BoxShadow(color: template.accent.withValues(alpha: 0.35), blurRadius: 20, offset: const Offset(0, 8))],
      ),
      padding: const EdgeInsets.fromLTRB(22, 24, 22, 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Icon(template.icon, color: Colors.white.withValues(alpha: 0.9), size: 28),
          const SizedBox(height: 16),
          Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26, height: 1.1)),
          const SizedBox(height: 12),
          Text(body, style: TextStyle(color: Colors.white.withValues(alpha: 0.92), fontSize: 14, height: 1.55, fontWeight: FontWeight.w500)),
          const Spacer(),
          _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: Colors.white, dividerColor: Colors.white24, footerColor: Colors.white70),
        ],
      ),
    );
  }
}

class _ThermalReceiptLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _ThermalReceiptLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(color: const Color(0xFFFFFDF7), borderRadius: BorderRadius.circular(4), border: Border.all(color: const Color(0xFFD6D3D1))),
      child: Column(
        children: [
          for (var i = 0; i < 6; i++)
            Container(height: 5, margin: EdgeInsets.only(top: i == 0 ? 0 : 2), color: i.isEven ? const Color(0xFFE7E5E4) : Colors.transparent),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(18, 8, 18, 16),
              child: Column(
                children: [
                  Text('— — — — — — — —', style: TextStyle(color: template.accent, fontWeight: FontWeight.w700, letterSpacing: 2)),
                  const SizedBox(height: 10),
                  Text(title.toUpperCase(), textAlign: TextAlign.center, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16, letterSpacing: 1)),
                  const SizedBox(height: 10),
                  Text(body, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12.5, height: 1.5, color: Color(0xFF44403C))),
                  const Spacer(),
                  _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: const Color(0xFFD6D3D1), footerColor: const Color(0xFF78716C)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _ElegantDarkLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _ElegantDarkLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF0F172A),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: template.accent.withValues(alpha: 0.45)),
      ),
      padding: const EdgeInsets.fromLTRB(22, 26, 22, 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [Icon(template.icon, color: template.accent, size: 22), const SizedBox(width: 8), Text('NGMY', style: TextStyle(color: template.accent, fontWeight: FontWeight.w900, letterSpacing: 2))]),
          const SizedBox(height: 20),
          Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
          const SizedBox(height: 12),
          Text(body, style: TextStyle(color: Colors.white.withValues(alpha: 0.78), fontSize: 13.5, height: 1.55)),
          const Spacer(),
          _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: Colors.white12, footerColor: Colors.white60),
        ],
      ),
    );
  }
}

class _NgmyCyanLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _NgmyCyanLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(colors: [Color(0xFF0B0E18), Color(0xFF12182A)]),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: const Color(0xFF06B6D4).withValues(alpha: 0.5)),
      ),
      padding: const EdgeInsets.all(20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(
              color: const Color(0xFF06B6D4).withValues(alpha: 0.15),
              borderRadius: BorderRadius.circular(8),
              border: Border.all(color: const Color(0xFF06B6D4).withValues(alpha: 0.4)),
            ),
            child: Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(template.icon, color: const Color(0xFF06B6D4), size: 16),
                const SizedBox(width: 6),
                const Text('NGMY QR', style: TextStyle(color: Color(0xFF06B6D4), fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 1.2)),
              ],
            ),
          ),
          const SizedBox(height: 18),
          Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 22)),
          const SizedBox(height: 10),
          Text(body, style: TextStyle(color: Colors.white.withValues(alpha: 0.75), fontSize: 13, height: 1.55)),
          const Spacer(),
          _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: const Color(0xFF06B6D4), dividerColor: const Color(0xFF06B6D4).withValues(alpha: 0.25), footerColor: const Color(0xFF06B6D4)),
        ],
      ),
    );
  }
}

class _LetterheadLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _LetterheadLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.white,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(height: 6, color: template.accent),
          Padding(
            padding: const EdgeInsets.fromLTRB(24, 20, 24, 0),
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Icon(template.icon, color: template.accent, size: 32),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: TextStyle(color: template.accent, fontWeight: FontWeight.w900, fontSize: 20)),
                      Container(margin: const EdgeInsets.only(top: 6), height: 2, width: 64, color: template.accent.withValues(alpha: 0.5)),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(24, 18, 24, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(body, style: const TextStyle(color: Color(0xFF334155), fontSize: 14, height: 1.65)),
                  const Spacer(),
                  _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: const Color(0xFFE2E8F0), footerColor: const Color(0xFF64748B)),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _FramedCardLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _FramedCardLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(gradient: LinearGradient(colors: [template.accent.withValues(alpha: 0.08), Colors.white]), borderRadius: BorderRadius.circular(20)),
      padding: const EdgeInsets.all(14),
      child: Container(
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(14), border: Border.all(color: template.accent, width: 2)),
        padding: const EdgeInsets.fromLTRB(18, 20, 18, 16),
        child: Column(
          children: [
            Icon(template.icon, color: template.accent, size: 36),
            const SizedBox(height: 14),
            Text(title, textAlign: TextAlign.center, style: TextStyle(color: template.accent, fontWeight: FontWeight.w900, fontSize: 21)),
            const SizedBox(height: 12),
            Text(body, textAlign: TextAlign.center, style: const TextStyle(color: Color(0xFF475569), fontSize: 13, height: 1.55)),
            const Spacer(),
            _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: template.accent.withValues(alpha: 0.2), footerColor: const Color(0xFF64748B)),
          ],
        ),
      ),
    );
  }
}

class _NeonHudLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _NeonHudLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF0B0E18),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: template.accent.withValues(alpha: 0.45)),
      ),
      padding: const EdgeInsets.fromLTRB(20, 22, 20, 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(width: 8, height: 8, decoration: BoxDecoration(shape: BoxShape.circle, color: template.accent, boxShadow: [BoxShadow(color: template.accent, blurRadius: 8)])),
              const SizedBox(width: 8),
              Text('SCAN READY', style: TextStyle(color: template.accent, fontWeight: FontWeight.w900, fontSize: 10, letterSpacing: 2)),
            ],
          ),
          const SizedBox(height: 16),
          Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 23)),
          const SizedBox(height: 10),
          Text(body, style: TextStyle(color: Colors.white.withValues(alpha: 0.8), fontSize: 13, height: 1.5)),
          const Spacer(),
          _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: template.accent, dividerColor: template.accent.withValues(alpha: 0.3), footerColor: template.accent),
        ],
      ),
    );
  }
}

class _PremiumGoldLayout extends StatelessWidget {
  final NgmyQrTemplateDef template;
  final String title;
  final String body;
  final String footer;
  final Widget qrWidget;
  const _PremiumGoldLayout({required this.template, required this.title, required this.body, required this.footer, required this.qrWidget});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: const LinearGradient(begin: Alignment.topCenter, end: Alignment.bottomCenter, colors: [Color(0xFF1C1917), Color(0xFF0C0A09), Color(0xFF1C1917)]),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: const Color(0xFFD97706), width: 1.5),
      ),
      padding: const EdgeInsets.fromLTRB(22, 24, 22, 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(children: [Icon(template.icon, color: const Color(0xFFFBBF24), size: 24), const Spacer(), const Icon(Icons.star_rounded, color: Color(0xFFFBBF24), size: 14)]),
          const SizedBox(height: 18),
          ShaderMask(
            shaderCallback: (r) => const LinearGradient(colors: [Color(0xFFFDE68A), Color(0xFFD97706)]).createShader(r),
            child: Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 24)),
          ),
          const SizedBox(height: 12),
          Text(body, style: TextStyle(color: Colors.white.withValues(alpha: 0.82), fontSize: 13.5, height: 1.55)),
          const Spacer(),
          _QrTemplateBottom(footer: footer, qrWidget: qrWidget, accent: const Color(0xFFD97706), dividerColor: const Color(0xFFD97706).withValues(alpha: 0.35), footerColor: const Color(0xFFFBBF24)),
        ],
      ),
    );
  }
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
                            Text('10 designs · QR at bottom · Edit words after you pick', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
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
                      crossAxisSpacing: 12,
                      mainAxisSpacing: 12,
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
                              border: Border.all(color: t.accent.withValues(alpha: 0.35)),
                            ),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Expanded(
                                  child: ClipRRect(
                                    borderRadius: const BorderRadius.vertical(top: Radius.circular(13)),
                                    child: OverflowBox(
                                      alignment: Alignment.topCenter,
                                      maxHeight: 220,
                                      child: NgmyQrTemplateCard(
                                        template: t,
                                        title: title,
                                        body: body,
                                        footer: footer,
                                        qrWidget: qrWidget,
                                        compact: true,
                                      ),
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
                                  child: Text(t.name, style: TextStyle(color: t.accent, fontWeight: FontWeight.w800, fontSize: 12), maxLines: 1, overflow: TextOverflow.ellipsis),
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
