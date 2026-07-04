import 'package:flutter/material.dart';

import 'ngmy_menu_models.dart';
import 'ngmy_menu_templates.dart';

class NgmyMenuNameStyleOption {
  const NgmyMenuNameStyleOption({required this.id, required this.label, required this.subtitle});

  final String id;
  final String label;
  final String subtitle;
}

/// Premium name treatments only — templates already cover everyday styles.
const List<NgmyMenuNameStyleOption> kNgmyMenuLuxuryNameStyles = [
  NgmyMenuNameStyleOption(id: 'gilded', label: 'Gilded', subtitle: 'Gold gradient shine'),
  NgmyMenuNameStyleOption(id: 'couture', label: 'Couture', subtitle: 'Fine serif spacing'),
  NgmyMenuNameStyleOption(id: 'platinum', label: 'Platinum', subtitle: 'Silver refined'),
  NgmyMenuNameStyleOption(id: 'royal', label: 'Royal', subtitle: 'Regal lines & crest'),
  NgmyMenuNameStyleOption(id: 'signature', label: 'Signature', subtitle: 'Elegant script'),
  NgmyMenuNameStyleOption(id: 'haute', label: 'Haute', subtitle: 'Editorial uppercase'),
  NgmyMenuNameStyleOption(id: 'velvet', label: 'Velvet', subtitle: 'Rich depth shadow'),
  NgmyMenuNameStyleOption(id: 'luminous', label: 'Luminous', subtitle: 'Soft premium glow'),
];

String ngmyMenuEffectiveNameStyle(NgmyMenuDocument doc, NgmyMenuTemplate template) {
  final id = doc.nameStyleId.trim();
  if (id.isEmpty || id == 'auto') return template.headerStyle;
  return id;
}

bool ngmyMenuHasLuxuryNameStyle(NgmyMenuDocument doc) {
  final id = doc.nameStyleId.trim();
  return id.isNotEmpty && id != 'auto';
}

TextStyle ngmyMenuNameTextStyle({
  required String styleKey,
  required NgmyMenuTemplate template,
  required bool compact,
  required bool isPlaceholder,
}) {
  final t = template;
  TextStyle nameStyle = switch (styleKey) {
    'gilded' || 'ornate' => TextStyle(
        color: t.accent,
        fontSize: compact ? 20 : 30,
        fontWeight: FontWeight.w900,
        letterSpacing: 1.8,
        height: 1.05,
      ),
    'couture' || 'serif' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 17 : 26,
        fontWeight: FontWeight.w300,
        fontFamily: 'Georgia',
        letterSpacing: compact ? 2.8 : 4.2,
        height: 1.15,
      ),
    'platinum' => TextStyle(
        color: const Color(0xFF9CA3AF),
        fontSize: compact ? 18 : 27,
        fontWeight: FontWeight.w500,
        letterSpacing: compact ? 2.2 : 3.4,
        height: 1.1,
      ),
    'royal' => TextStyle(
        color: t.accent,
        fontSize: compact ? 19 : 29,
        fontWeight: FontWeight.w800,
        letterSpacing: 1.4,
        height: 1.08,
      ),
    'signature' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 22 : 34,
        fontWeight: FontWeight.w500,
        fontStyle: FontStyle.italic,
        fontFamily: 'Georgia',
        letterSpacing: 0.4,
        height: 1.05,
      ),
    'haute' || 'magazine' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 21 : 32,
        fontWeight: FontWeight.w900,
        letterSpacing: compact ? 1.2 : 2.4,
        height: 1.0,
      ),
    'velvet' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 19 : 28,
        fontWeight: FontWeight.w800,
        letterSpacing: 0.6,
        shadows: [
          Shadow(color: t.accent.withValues(alpha: 0.45), blurRadius: compact ? 8 : 14, offset: const Offset(0, 2)),
        ],
      ),
    'luminous' || 'neon' || 'jazz' => TextStyle(
        color: t.accent,
        fontSize: compact ? 20 : 31,
        fontWeight: FontWeight.w800,
        letterSpacing: 1.6,
        shadows: [
          Shadow(color: t.accent.withValues(alpha: 0.55), blurRadius: compact ? 10 : 18),
          Shadow(color: t.accent.withValues(alpha: 0.25), blurRadius: compact ? 18 : 28),
        ],
      ),
    'minimal' => TextStyle(
        color: t.textPrimary,
        fontSize: compact ? 16 : 24,
        fontWeight: FontWeight.w300,
        letterSpacing: compact ? 3 : 5,
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

/// Gilded gradient name — used when style is [gilded].
Widget ngmyMenuLuxuryNameText({
  required String name,
  required TextStyle style,
  required TextAlign align,
  required NgmyMenuTemplate template,
  required String styleKey,
}) {
  if (styleKey != 'gilded') {
    final display = styleKey == 'haute' ? name.toUpperCase() : name;
    return Text(display, textAlign: align, style: style);
  }

  return ShaderMask(
    shaderCallback: (bounds) => LinearGradient(
      colors: [
        template.accent,
        const Color(0xFFFFF8E7),
        template.accent.withValues(alpha: 0.85),
        const Color(0xFFD4AF37),
      ],
      stops: const [0.0, 0.35, 0.65, 1.0],
    ).createShader(bounds),
    child: Text(name, textAlign: align, style: style.copyWith(color: Colors.white)),
  );
}

/// Small icon — opens luxury name-style sheet (keeps Restaurant info compact).
class NgmyMenuNameStyleIconButton extends StatelessWidget {
  const NgmyMenuNameStyleIconButton({
    super.key,
    required this.doc,
    required this.template,
    required this.sampleName,
    required this.accent,
    required this.onChanged,
  });

  final NgmyMenuDocument doc;
  final NgmyMenuTemplate template;
  final String sampleName;
  final Color accent;
  final VoidCallback onChanged;

  @override
  Widget build(BuildContext context) {
    final active = ngmyMenuHasLuxuryNameStyle(doc);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () => _openSheet(context),
        borderRadius: BorderRadius.circular(10),
        child: Ink(
          width: 34,
          height: 34,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(10),
            color: active ? accent.withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.06),
            border: Border.all(color: active ? accent : Colors.white24),
          ),
          child: Icon(Icons.auto_awesome_rounded, size: 18, color: active ? accent : Colors.white70),
        ),
      ),
    );
  }

  Future<void> _openSheet(BuildContext context) async {
    await showModalBottomSheet<void>(
      context: context,
      backgroundColor: const Color(0xFF141820),
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(20))),
      builder: (ctx) {
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(16, 12, 16, 20),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Center(
                  child: Container(
                    width: 36,
                    height: 4,
                    decoration: BoxDecoration(color: Colors.white24, borderRadius: BorderRadius.circular(99)),
                  ),
                ),
                const SizedBox(height: 14),
                Text('Luxury name styles', style: TextStyle(color: Colors.white.withValues(alpha: 0.95), fontWeight: FontWeight.w900, fontSize: 16)),
                const SizedBox(height: 4),
                Text('Premium treatments for your restaurant name', style: TextStyle(color: Colors.white60, fontSize: 12)),
                const SizedBox(height: 14),
                Flexible(
                  child: SingleChildScrollView(
                    child: Column(
                      children: [
                        _sheetTile(
                          ctx,
                          id: 'auto',
                          label: 'Use menu template',
                          subtitle: 'Default from your design',
                          previewStyle: ngmyMenuNameTextStyle(styleKey: template.headerStyle, template: template, compact: true, isPlaceholder: false),
                        ),
                        const SizedBox(height: 8),
                        ...kNgmyMenuLuxuryNameStyles.map(
                          (opt) => Padding(
                            padding: const EdgeInsets.only(bottom: 8),
                            child: _sheetTile(
                              ctx,
                              id: opt.id,
                              label: opt.label,
                              subtitle: opt.subtitle,
                              previewStyle: ngmyMenuNameTextStyle(styleKey: opt.id, template: template, compact: true, isPlaceholder: false),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  Widget _sheetTile(
    BuildContext ctx, {
    required String id,
    required String label,
    required String subtitle,
    required TextStyle previewStyle,
  }) {
    final sel = doc.nameStyleId == id || (id == 'auto' && !ngmyMenuHasLuxuryNameStyle(doc));
    final name = sampleName.trim().isEmpty ? 'Your Restaurant' : sampleName.trim();
    final previewName = id == 'haute' ? name.toUpperCase() : (name.length > 18 ? '${name.substring(0, 18)}…' : name);

    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: () {
          doc.nameStyleId = id;
          onChanged();
          Navigator.pop(ctx);
        },
        borderRadius: BorderRadius.circular(14),
        child: Ink(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(14),
            color: sel ? accent.withValues(alpha: 0.12) : Colors.white.withValues(alpha: 0.04),
            border: Border.all(color: sel ? accent : Colors.white24, width: sel ? 2 : 1),
          ),
          child: Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(previewName, maxLines: 1, overflow: TextOverflow.ellipsis, style: previewStyle.copyWith(fontSize: 15)),
                    const SizedBox(height: 4),
                    Text(label, style: TextStyle(color: sel ? accent : Colors.white, fontWeight: FontWeight.w800, fontSize: 12)),
                    Text(subtitle, style: const TextStyle(color: Colors.white54, fontSize: 10)),
                  ],
                ),
              ),
              if (sel) Icon(Icons.check_circle_rounded, color: accent, size: 20),
            ],
          ),
        ),
      ),
    );
  }
}
