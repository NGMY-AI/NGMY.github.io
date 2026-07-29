import 'package:flutter/material.dart';

import 'ngmy_qr_template_layouts.dart';
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

  NgmyQrTemplateLayoutData _layoutData() {
    final theme = template.theme;
    final vars = ngmyQrDefaultTemplateVars(template.categoryIndex, fieldVars);
    return NgmyQrTemplateLayoutData(
      template: template,
      subtitle: title.trim().isNotEmpty ? title : theme.subtitleTemplate,
      closing: footer.trim().isNotEmpty ? footer : theme.closingTemplate,
      fieldVars: fieldVars,
      qrWidget: qrWidget,
      compact: compact,
      field1: ngmyQrApplyTemplateVars(theme.field1Template, vars),
      field2: ngmyQrApplyTemplateVars(theme.field2Template, vars),
    );
  }

  @override
  Widget build(BuildContext context) {
    final data = _layoutData();
    final content = SizedBox(
      width: _paperW,
      height: _paperH,
      child: Stack(
        clipBehavior: Clip.none,
        children: [
          buildNgmyQrTemplateLayout(data),
          Positioned(
            top: 10,
            right: 10,
            child: ngmyQrTemplateWatermark(data),
          ),
        ],
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

Future<void> showNgmyQrTemplateFullscreen({
  required BuildContext context,
  required NgmyQrTemplateDef template,
  required String title,
  required String body,
  required String footer,
  required Map<String, String> fieldVars,
  required Widget qrWidget,
}) {
  return showDialog<void>(
    context: context,
    barrierColor: Colors.black.withValues(alpha: 0.88),
    builder: (ctx) {
      return Dialog.fullscreen(
        backgroundColor: const Color(0xFF0B0E18),
        child: SafeArea(
          child: Column(
            children: [
              Padding(
                padding: const EdgeInsets.fromLTRB(8, 4, 8, 0),
                child: Row(
                  children: [
                    Expanded(
                      child: Text(
                        '${template.name} · Full preview',
                        style: TextStyle(color: template.accent, fontWeight: FontWeight.w800, fontSize: 14),
                      ),
                    ),
                    IconButton(
                      onPressed: () => Navigator.pop(ctx),
                      icon: const Icon(Icons.close_rounded, color: Colors.white70),
                    ),
                  ],
                ),
              ),
              Expanded(
                child: Center(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.all(16),
                    child: NgmyQrTemplateCard(
                      template: template,
                      title: title,
                      body: body,
                      footer: footer,
                      fieldVars: fieldVars,
                      qrWidget: qrWidget,
                    ),
                  ),
                ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Text('Pinch or scroll if needed · Tap ✕ to close', style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 11)),
              ),
            ],
          ),
        ),
      );
    },
  );
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
                            Text('10 unique designs · Different layouts per style', style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontSize: 12)),
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
