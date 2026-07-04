import 'package:flutter/material.dart';

import 'ngmy_menu_models.dart';

const Color kNgmyMenuQrGold = Color(0xFFD4AF37);

class NgmyMenuQrCornerOption {
  const NgmyMenuQrCornerOption({required this.id, required this.icon});
  final String id;
  final IconData icon;
}

const List<NgmyMenuQrCornerOption> kNgmyMenuQrCornerOptions = [
  NgmyMenuQrCornerOption(id: 'ring', icon: Icons.radio_button_unchecked_rounded),
  NgmyMenuQrCornerOption(id: 'circle', icon: Icons.circle_outlined),
  NgmyMenuQrCornerOption(id: 'square', icon: Icons.crop_square_rounded),
  NgmyMenuQrCornerOption(id: 'dot', icon: Icons.fiber_manual_record_rounded),
  NgmyMenuQrCornerOption(id: 'diamond', icon: Icons.diamond_outlined),
  NgmyMenuQrCornerOption(id: 'bracket', icon: Icons.crop_free_rounded),
  NgmyMenuQrCornerOption(id: 'arc', icon: Icons.rounded_corner_rounded),
  NgmyMenuQrCornerOption(id: 'star', icon: Icons.star_outline_rounded),
  NgmyMenuQrCornerOption(id: 'cross', icon: Icons.add_rounded),
  NgmyMenuQrCornerOption(id: 'none', icon: Icons.block_rounded),
];

class NgmyMenuQrColorPreset {
  const NgmyMenuQrColorPreset({required this.id, required this.fg, required this.bg, required this.accent});
  final String id;
  final int fg;
  final int bg;
  final int accent;
}

const List<NgmyMenuQrColorPreset> kNgmyMenuQrColorPresets = [
  NgmyMenuQrColorPreset(id: 'gold', fg: 0xFF1A1410, bg: 0xFFFFFAF0, accent: 0xFFD4AF37),
  NgmyMenuQrColorPreset(id: 'midnight', fg: 0xFFF8FAFC, bg: 0xFF0F172A, accent: 0xFF38BDF8),
  NgmyMenuQrColorPreset(id: 'classic', fg: 0xFF0F172A, bg: 0xFFFFFFFF, accent: 0xFF2563EB),
  NgmyMenuQrColorPreset(id: 'neon', fg: 0xFF0F172A, bg: 0xFFECFEFF, accent: 0xFF06B6D4),
  NgmyMenuQrColorPreset(id: 'forest', fg: 0xFF14532D, bg: 0xFFF0FDF4, accent: 0xFF22C55E),
  NgmyMenuQrColorPreset(id: 'ruby', fg: 0xFF450A0A, bg: 0xFFFFF1F2, accent: 0xFFE11D48),
  NgmyMenuQrColorPreset(id: 'violet', fg: 0xFF3B0764, bg: 0xFFF5F3FF, accent: 0xFFA855F7),
  NgmyMenuQrColorPreset(id: 'sunset', fg: 0xFF431407, bg: 0xFFFFF7ED, accent: 0xFFEA580C),
  NgmyMenuQrColorPreset(id: 'ocean', fg: 0xFF042F2E, bg: 0xFFECFEFF, accent: 0xFF14B8A6),
  NgmyMenuQrColorPreset(id: 'rose', fg: 0xFF500724, bg: 0xFFFFF1F2, accent: 0xFFFB7185),
  NgmyMenuQrColorPreset(id: 'slate', fg: 0xFF0F172A, bg: 0xFFF1F5F9, accent: 0xFF64748B),
  NgmyMenuQrColorPreset(id: 'invert', fg: 0xFFFFFFFF, bg: 0xFF000000, accent: 0xFFFFFFFF),
];

class NgmyMenuQrEyeOption {
  const NgmyMenuQrEyeOption({required this.id, required this.icon});
  final String id;
  final IconData icon;
}

const List<NgmyMenuQrEyeOption> kNgmyMenuQrEyeOptions = [
  NgmyMenuQrEyeOption(id: 'circle', icon: Icons.lens_rounded),
  NgmyMenuQrEyeOption(id: 'square', icon: Icons.square_rounded),
];

const List<NgmyMenuQrEyeOption> kNgmyMenuQrModuleOptions = [
  NgmyMenuQrEyeOption(id: 'circle', icon: Icons.grain_rounded),
  NgmyMenuQrEyeOption(id: 'square', icon: Icons.grid_on_rounded),
];

class NgmyMenuQrCardTemplateOption {
  const NgmyMenuQrCardTemplateOption({
    required this.id,
    required this.name,
    required this.headerColor,
    required this.bodyColor,
    required this.accentColor,
    required this.icon,
  });

  final String id;
  final String name;
  final Color headerColor;
  final Color bodyColor;
  final Color accentColor;
  final IconData icon;
}

const List<NgmyMenuQrCardTemplateOption> kNgmyMenuQrCardTemplateOptions = [
  NgmyMenuQrCardTemplateOption(id: 'luxury_gold', name: 'Luxury Gold', headerColor: Color(0xFF0A0A0A), bodyColor: Color(0xFF14100A), accentColor: Color(0xFFD4AF37), icon: Icons.diamond_outlined),
  NgmyMenuQrCardTemplateOption(id: 'modern_gradient', name: 'Modern', headerColor: Color(0xFF2563EB), bodyColor: Color(0xFFFFFFFF), accentColor: Color(0xFF2563EB), icon: Icons.auto_awesome_rounded),
  NgmyMenuQrCardTemplateOption(id: 'classic_border', name: 'Classic', headerColor: Color(0xFFF8FAFC), bodyColor: Color(0xFFFFFFFF), accentColor: Color(0xFF0F172A), icon: Icons.receipt_long_rounded),
  NgmyMenuQrCardTemplateOption(id: 'minimal_clean', name: 'Minimal', headerColor: Color(0xFFFAFAFA), bodyColor: Color(0xFFFFFFFF), accentColor: Color(0xFF18181B), icon: Icons.horizontal_rule_rounded),
  NgmyMenuQrCardTemplateOption(id: 'bistro_warm', name: 'Bistro', headerColor: Color(0xFF3D2314), bodyColor: Color(0xFFFFF8F0), accentColor: Color(0xFFF4A460), icon: Icons.local_dining_rounded),
  NgmyMenuQrCardTemplateOption(id: 'neon_night', name: 'Neon', headerColor: Color(0xFF0B0F1A), bodyColor: Color(0xFF111827), accentColor: Color(0xFF22D3EE), icon: Icons.bolt_rounded),
  NgmyMenuQrCardTemplateOption(id: 'marble_cream', name: 'Marble', headerColor: Color(0xFFF5F0EB), bodyColor: Color(0xFFFFFBF7), accentColor: Color(0xFF8B7355), icon: Icons.texture_rounded),
  NgmyMenuQrCardTemplateOption(id: 'steakhouse', name: 'Steakhouse', headerColor: Color(0xFF1C1210), bodyColor: Color(0xFF241816), accentColor: Color(0xFFC9A227), icon: Icons.outdoor_grill_rounded),
  NgmyMenuQrCardTemplateOption(id: 'sakura_zen', name: 'Sakura', headerColor: Color(0xFF0F0E0E), bodyColor: Color(0xFF161414), accentColor: Color(0xFFDC2626), icon: Icons.filter_vintage_rounded),
  NgmyMenuQrCardTemplateOption(id: 'ocean_coast', name: 'Ocean', headerColor: Color(0xFF042F2E), bodyColor: Color(0xFF0A3D3C), accentColor: Color(0xFF5EEAD4), icon: Icons.waves_rounded),
  NgmyMenuQrCardTemplateOption(id: 'champagne', name: 'Champagne', headerColor: Color(0xFF1A1520), bodyColor: Color(0xFF221C2A), accentColor: Color(0xFFE8C4A0), icon: Icons.celebration_outlined),
  NgmyMenuQrCardTemplateOption(id: 'art_deco', name: 'Art Deco', headerColor: Color(0xFF0A0A0A), bodyColor: Color(0xFF171717), accentColor: Color(0xFFD4AF37), icon: Icons.architecture_rounded),
  NgmyMenuQrCardTemplateOption(id: 'rooftop', name: 'Rooftop', headerColor: Color(0xFF0F172A), bodyColor: Color(0xFF152238), accentColor: Color(0xFF38BDF8), icon: Icons.apartment_rounded),
  NgmyMenuQrCardTemplateOption(id: 'garden', name: 'Garden', headerColor: Color(0xFF14532D), bodyColor: Color(0xFF15803D), accentColor: Color(0xFFBBF7D0), icon: Icons.eco_rounded),
];

NgmyMenuQrCardTemplateOption ngmyMenuQrCardTemplateById(String id) {
  return kNgmyMenuQrCardTemplateOptions.firstWhere(
    (t) => t.id == id,
    orElse: () => kNgmyMenuQrCardTemplateOptions.first,
  );
}

class NgmyQrCornerIconPicker extends StatelessWidget {
  const NgmyQrCornerIconPicker({super.key, required this.selected, required this.accent, required this.onSelected});

  final String selected;
  final Color accent;
  final ValueChanged<String> onSelected;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: kNgmyMenuQrCornerOptions.map((o) {
        final sel = selected == o.id;
        return _IconTile(
          selected: sel,
          accent: accent,
          onTap: () => onSelected(o.id),
          child: Icon(o.icon, size: 22, color: sel ? accent : Colors.white70),
        );
      }).toList(),
    );
  }
}

class NgmyQrColorSwatchPicker extends StatelessWidget {
  const NgmyQrColorSwatchPicker({super.key, required this.style, required this.onSelected});

  final NgmyMenuQrStyle style;
  final ValueChanged<NgmyMenuQrColorPreset> onSelected;

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 10,
      runSpacing: 10,
      children: kNgmyMenuQrColorPresets.map((p) {
        final sel = style.foreground == p.fg && style.background == p.bg && style.accent == p.accent;
        return GestureDetector(
          onTap: () => onSelected(p),
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: [Color(p.bg), Color(p.accent)],
              ),
              border: Border.all(color: sel ? kNgmyMenuQrGold : Colors.white24, width: sel ? 3 : 1.5),
              boxShadow: sel ? [BoxShadow(color: Color(p.accent).withValues(alpha: 0.45), blurRadius: 10)] : null,
            ),
            child: Center(
              child: Container(
                width: 14,
                height: 14,
                decoration: BoxDecoration(shape: BoxShape.circle, color: Color(p.fg)),
              ),
            ),
          ),
        );
      }).toList(),
    );
  }
}

class NgmyQrEyeIconPicker extends StatelessWidget {
  const NgmyQrEyeIconPicker({super.key, required this.options, required this.selected, required this.accent, required this.onSelected});

  final List<NgmyMenuQrEyeOption> options;
  final String selected;
  final Color accent;
  final ValueChanged<String> onSelected;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: options.map((o) {
        final sel = selected == o.id;
        return Expanded(
          child: Padding(
            padding: const EdgeInsets.only(right: 8),
            child: _IconTile(
              selected: sel,
              accent: accent,
              onTap: () => onSelected(o.id),
              child: Icon(o.icon, size: 24, color: sel ? accent : Colors.white70),
            ),
          ),
        );
      }).toList(),
    );
  }
}

class NgmyQrCardTemplatePicker extends StatefulWidget {
  const NgmyQrCardTemplatePicker({
    super.key,
    required this.selected,
    required this.onSelected,
    this.visibleCount = 10,
  });

  final String selected;
  final ValueChanged<String> onSelected;
  final int visibleCount;

  @override
  State<NgmyQrCardTemplatePicker> createState() => _NgmyQrCardTemplatePickerState();
}

class _NgmyQrCardTemplatePickerState extends State<NgmyQrCardTemplatePicker> {
  bool _showAll = false;

  @override
  Widget build(BuildContext context) {
    final all = kNgmyMenuQrCardTemplateOptions;
    final visible = _showAll ? all : all.take(widget.visibleCount).toList();
    final hasMore = all.length > widget.visibleCount;

    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 5, mainAxisSpacing: 8, crossAxisSpacing: 8, childAspectRatio: 0.72),
          itemCount: visible.length,
          itemBuilder: (_, i) {
            final t = visible[i];
            final sel = widget.selected == t.id;
            return GestureDetector(
              onTap: () => widget.onSelected(t.id),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10),
                  border: Border.all(color: sel ? kNgmyMenuQrGold : Colors.white24, width: sel ? 2.5 : 1),
                  boxShadow: sel ? [BoxShadow(color: kNgmyMenuQrGold.withValues(alpha: 0.35), blurRadius: 8)] : null,
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(8),
                  child: Column(
                    children: [
                      Expanded(
                        flex: 2,
                        child: Container(
                          width: double.infinity,
                          color: t.headerColor,
                          child: Icon(t.icon, color: t.accentColor, size: 16),
                        ),
                      ),
                      Expanded(
                        flex: 3,
                        child: Container(
                          width: double.infinity,
                          color: t.bodyColor,
                          child: Center(
                            child: Container(
                              width: 18,
                              height: 18,
                              decoration: BoxDecoration(
                                color: t.accentColor.withValues(alpha: 0.2),
                                border: Border.all(color: t.accentColor),
                                borderRadius: BorderRadius.circular(3),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            );
          },
        ),
        if (hasMore)
          TextButton.icon(
            onPressed: () => setState(() => _showAll = !_showAll),
            icon: Icon(_showAll ? Icons.keyboard_arrow_up_rounded : Icons.keyboard_arrow_down_rounded),
            label: Text(_showAll ? 'Show less' : 'Show ${all.length - widget.visibleCount} more templates'),
            style: TextButton.styleFrom(foregroundColor: kNgmyMenuQrGold),
          ),
      ],
    );
  }
}

class _IconTile extends StatelessWidget {
  const _IconTile({required this.selected, required this.accent, required this.onTap, required this.child});

  final bool selected;
  final Color accent;
  final VoidCallback onTap;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Ink(
          width: 48,
          height: 48,
          decoration: BoxDecoration(
            color: selected ? accent.withValues(alpha: 0.18) : Colors.white.withValues(alpha: 0.06),
            borderRadius: BorderRadius.circular(12),
            border: Border.all(color: selected ? accent : Colors.white24, width: selected ? 2 : 1),
          ),
          child: Center(child: child),
        ),
      ),
    );
  }
}
