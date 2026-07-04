import 'package:flutter/material.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_templates.dart';

class NgmyMenuNameStyleOption {
  const NgmyMenuNameStyleOption({required this.id, required this.label, required this.subtitle});

  final String id;
  final String label;
  final String subtitle;
}

const List<NgmyMenuNameStyleOption> kNgmyMenuNameStyleOptions = [
  NgmyMenuNameStyleOption(id: 'auto', label: 'Template', subtitle: 'Match menu design'),
  NgmyMenuNameStyleOption(id: 'classic', label: 'Classic', subtitle: 'Bold center'),
  NgmyMenuNameStyleOption(id: 'serif', label: 'Elegant', subtitle: 'Serif fine dining'),
  NgmyMenuNameStyleOption(id: 'minimal', label: 'Minimal', subtitle: 'Light & spaced'),
  NgmyMenuNameStyleOption(id: 'ornate', label: 'Luxury', subtitle: 'Gold accent'),
  NgmyMenuNameStyleOption(id: 'neon', label: 'Neon', subtitle: 'Glow sign'),
  NgmyMenuNameStyleOption(id: 'retro', label: 'Retro', subtitle: 'Diner italic'),
  NgmyMenuNameStyleOption(id: 'magazine', label: 'Editorial', subtitle: 'Magazine bold'),
  NgmyMenuNameStyleOption(id: 'industrial', label: 'Industrial', subtitle: 'Wide caps'),
  NgmyMenuNameStyleOption(id: 'stack', label: 'Wide', subtitle: 'Spaced caps'),
];

String ngmyMenuEffectiveNameStyle(NgmyMenuDocument doc, NgmyMenuTemplate template) {
  final id = doc.nameStyleId.trim();
  if (id.isEmpty || id == 'auto') return template.headerStyle;
  return id;
}

TextStyle ngmyMenuNameTextStyle({
  required String styleKey,
  required NgmyMenuTemplate template,
  required bool compact,
  required bool isPlaceholder,
}) {
  final t = template;
  TextStyle nameStyle = switch (styleKey) {
    'ornate' => TextStyle(
        color: t.accent,
        fontSize: compact ? 20 : 30,
        fontWeight: FontWeight.w900,
        letterSpacing: 1.6,
        height: 1.1,
      ),
    'serif' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 18 : 28,
        fontWeight: FontWeight.w700,
        fontFamily: 'Georgia',
        letterSpacing: 0.6,
      ),
    'minimal' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 16 : 24,
        fontWeight: FontWeight.w300,
        letterSpacing: compact ? 3 : 5,
      ),
    'neon' || 'jazz' => TextStyle(
        color: t.accent,
        fontSize: compact ? 20 : 32,
        fontWeight: FontWeight.w900,
        letterSpacing: 2,
        shadows: [Shadow(color: t.accent.withValues(alpha: 0.8), blurRadius: 12)],
      ),
    'industrial' => TextStyle(
        color: t.accent,
        fontSize: compact ? 18 : 28,
        fontWeight: FontWeight.w800,
        letterSpacing: 4,
      ),
    'retro' => TextStyle(
        color: t.accent,
        fontSize: compact ? 22 : 34,
        fontWeight: FontWeight.w900,
        fontStyle: FontStyle.italic,
        letterSpacing: 1,
      ),
    'magazine' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 22 : 34,
        fontWeight: FontWeight.w900,
        letterSpacing: -0.5,
        height: 1.05,
      ),
    'stack' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 18 : 26,
        fontWeight: FontWeight.w900,
        letterSpacing: 6,
      ),
    'classic' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 20 : 28,
        fontWeight: FontWeight.w900,
        letterSpacing: 0.8,
        height: 1.1,
      ),
    _ => TextStyle(color: t.textPrimary, fontSize: compact ? 18 : 26, fontWeight: FontWeight.w900, letterSpacing: 0.5),
  };

  if (isPlaceholder) {
    nameStyle = nameStyle.copyWith(color: t.textSecondary, fontStyle: FontStyle.italic, fontWeight: FontWeight.w600);
  }
  return nameStyle;
}

/// Mini preview tile for name style picker in Menu Studio.
class NgmyMenuNameStylePicker extends StatelessWidget {
  const NgmyMenuNameStylePicker({
    super.key,
    required this.selected,
    required this.template,
    required this.sampleName,
    required this.accent,
    required this.onSelected,
  });

  final String selected;
  final NgmyMenuTemplate template;
  final String sampleName;
  final Color accent;
  final ValueChanged<String> onSelected;

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 2, mainAxisSpacing: 8, crossAxisSpacing: 8, childAspectRatio: 2.4),
      itemCount: kNgmyMenuNameStyleOptions.length,
      itemBuilder: (_, i) {
        final opt = kNgmyMenuNameStyleOptions[i];
        final sel = selected == opt.id;
        final styleKey = opt.id == 'auto' ? template.headerStyle : opt.id;
        final previewStyle = ngmyMenuNameTextStyle(styleKey: styleKey, template: template, compact: true, isPlaceholder: false).copyWith(fontSize: 13);
        final name = sampleName.trim().isEmpty ? 'Café' : (sampleName.trim().length > 12 ? '${sampleName.trim().substring(0, 12)}…' : sampleName.trim());

        return Material(
          color: Colors.transparent,
          child: InkWell(
            onTap: () => onSelected(opt.id),
            borderRadius: BorderRadius.circular(12),
            child: Ink(
              padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(12),
                color: sel ? accent.withValues(alpha: 0.12) : Colors.white.withValues(alpha: 0.04),
                border: Border.all(color: sel ? accent : Colors.white24, width: sel ? 2 : 1),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(name, maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center, style: previewStyle),
                  const SizedBox(height: 4),
                  Text(opt.label, textAlign: TextAlign.center, style: TextStyle(fontSize: 10, fontWeight: FontWeight.w800, color: sel ? accent : Colors.white70)),
                ],
              ),
            ),
          ),
        );
      },
    );
  }
}
