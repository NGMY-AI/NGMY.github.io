import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

/// Theme-aware colors for Market Hub, Business Essentials, and related tools.
class NgmyHubTheme {
  NgmyHubTheme._(this.context);

  factory NgmyHubTheme.of(BuildContext context) => NgmyHubTheme._(context);

  final BuildContext context;

  bool get isDark => Theme.of(context).brightness == Brightness.dark;

  Color get scaffold => isDark ? const Color(0xFF0B1020) : const Color(0xFFF1F5F9);
  Color get surface => isDark ? const Color(0xFF0B1220) : Colors.white;
  Color get surfaceElevated => isDark ? const Color(0xFF111827) : const Color(0xFFF8FAFC);
  Color get panel => isDark ? const Color(0xFF0B1020) : const Color(0xFFF8FAFC);
  Color get title => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get subtitle => isDark ? Colors.white.withValues(alpha: 0.55) : const Color(0xFF64748B);
  Color get muted => isDark ? Colors.white.withValues(alpha: 0.48) : const Color(0xFF94A3B8);
  Color get iconButtonBg => isDark ? Colors.white.withValues(alpha: 0.08) : Colors.black.withValues(alpha: 0.05);
  Color get iconButtonIcon => isDark ? Colors.white70 : const Color(0xFF475569);
  Color get border => isDark ? Colors.white.withValues(alpha: 0.12) : const Color(0xFFE2E8F0);
  Color get inputFill => isDark ? Colors.white.withValues(alpha: 0.07) : Colors.white;
  Color get inputBorder => isDark ? Colors.white.withValues(alpha: 0.08) : const Color(0xFFE2E8F0);
  Color get fieldFill => isDark ? Colors.black.withValues(alpha: 0.26) : const Color(0xFFF1F5F9);
  Color get barrier => isDark ? Colors.black.withValues(alpha: 0.88) : Colors.black.withValues(alpha: 0.45);
  Color get chipOffLabel => isDark ? Colors.white70 : const Color(0xFF475569);
  Color get chipOffBg => isDark ? const Color(0xFF0B1020) : const Color(0xFFE2E8F0);
  Color get chipOffBorder => isDark ? Colors.white24 : const Color(0xFFCBD5E1);
  Color get overlayDark => isDark ? Colors.black.withValues(alpha: 0.82) : Colors.black.withValues(alpha: 0.35);

  Color categoryCardBg(Color accent) => isDark ? accent.withValues(alpha: 0.1) : accent.withValues(alpha: 0.08);
  Color categoryCardBorder(Color accent) => isDark ? accent.withValues(alpha: 0.35) : accent.withValues(alpha: 0.42);
  Color categoryIconBg(Color accent) => isDark ? accent.withValues(alpha: 0.18) : accent.withValues(alpha: 0.14);

  List<Color> frameGradient(List<Color> dark, List<Color> light) => isDark ? dark : light;

  List<Color> dialogGradient(Color accent) => isDark
      ? [const Color(0xFF05070C), const Color(0xFF0B1020), const Color(0xFF0F172A)]
      : [const Color(0xFFF8FAFC), const Color(0xFFF1F5F9), accent.withValues(alpha: 0.08)];

  Color get heroGradientEnd => isDark ? const Color(0xFF030712) : const Color(0xFFF8FAFC);

  Color get listItemBg => isDark ? Colors.white.withValues(alpha: 0.05) : Colors.white;

  Color get dialogBg => isDark ? const Color(0xFF0C1220) : Colors.white;

  Color get chipIdleBg => isDark ? Colors.white.withValues(alpha: 0.06) : const Color(0xFFF1F5F9);

  TextStyle get sectionLabel => TextStyle(color: subtitle, fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1);
}

/// Modern full-screen editor shell for hub tools — gradient hero, glass fields, pill chips.
class NgmyModernEditorPage extends StatelessWidget {
  const NgmyModernEditorPage({
    super.key,
    required this.title,
    required this.subtitle,
    required this.accent,
    required this.icon,
    required this.onClose,
    required this.onSave,
    required this.saveLabel,
    required this.child,
  });

  final String title;
  final String subtitle;
  final Color accent;
  final IconData icon;
  final VoidCallback onClose;
  final VoidCallback onSave;
  final String saveLabel;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Material(
      color: t.scaffold,
      child: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            right: 0,
            height: 220,
            child: DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topLeft,
                  end: Alignment.bottomRight,
                  colors: [
                    accent.withValues(alpha: t.isDark ? 0.45 : 0.22),
                    t.heroGradientEnd,
                  ],
                ),
              ),
            ),
          ),
          SafeArea(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(4, 4, 4, 0),
                  child: Row(
                    children: [
                      IconButton(
                        onPressed: onClose,
                        icon: Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: t.iconButtonBg,
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(color: t.border),
                          ),
                          child: Icon(Icons.arrow_back_ios_new_rounded, color: t.iconButtonIcon, size: 18),
                        ),
                      ),
                      const Spacer(),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        decoration: BoxDecoration(
                          color: accent.withValues(alpha: t.isDark ? 0.18 : 0.12),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: accent.withValues(alpha: t.isDark ? 0.45 : 0.35)),
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(icon, color: accent, size: 16),
                            const SizedBox(width: 6),
                            Text('Editor', style: TextStyle(color: accent, fontWeight: FontWeight.w800, fontSize: 11)),
                          ],
                        ),
                      ),
                      const SizedBox(width: 8),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(20, 8, 20, 0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(title, style: TextStyle(color: t.title, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: -0.5)),
                      const SizedBox(height: 6),
                      Text(subtitle, style: TextStyle(color: t.subtitle, fontSize: 13, height: 1.35)),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: Container(
                    margin: const EdgeInsets.fromLTRB(12, 0, 12, 0),
                    decoration: BoxDecoration(
                      color: t.surface.withValues(alpha: t.isDark ? 0.92 : 1),
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
                      border: Border.all(color: t.border),
                      boxShadow: [BoxShadow(color: accent.withValues(alpha: t.isDark ? 0.12 : 0.08), blurRadius: 40, offset: const Offset(0, -8))],
                    ),
                    child: ClipRRect(
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
                      child: SingleChildScrollView(
                        padding: EdgeInsets.fromLTRB(18, 20, 18, 100 + bottom),
                        child: child,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 16,
            right: 16,
            bottom: 16 + bottom,
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(16),
                boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.45), blurRadius: 24, offset: const Offset(0, 8))],
              ),
              child: FilledButton(
                onPressed: onSave,
                style: FilledButton.styleFrom(
                  backgroundColor: accent,
                  foregroundColor: Colors.black,
                  minimumSize: const Size.fromHeight(54),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                ),
                child: Text(saveLabel, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 16)),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class NgmyModernField extends StatelessWidget {
  const NgmyModernField({
    super.key,
    required this.controller,
    required this.label,
    required this.hint,
    required this.icon,
    required this.accent,
    this.keyboard,
    this.maxLines = 1,
  });

  final TextEditingController controller;
  final String label;
  final String hint;
  final IconData icon;
  final Color accent;
  final TextInputType? keyboard;
  final int maxLines;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(), style: TextStyle(color: t.subtitle, fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 6),
          TextField(
            controller: controller,
            keyboardType: keyboard,
            maxLines: maxLines,
            style: TextStyle(color: t.title, fontSize: 15, fontWeight: FontWeight.w600),
            decoration: InputDecoration(
              hintText: hint,
              hintStyle: TextStyle(color: t.muted, fontWeight: FontWeight.w500),
              prefixIcon: Icon(icon, color: accent, size: 20),
              filled: true,
              fillColor: t.fieldFill,
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: t.inputBorder)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: t.inputBorder)),
              focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: accent, width: 1.5)),
              contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
            ),
          ),
        ],
      ),
    );
  }
}

class NgmyModernChipRow extends StatelessWidget {
  const NgmyModernChipRow({
    super.key,
    required this.options,
    required this.selected,
    required this.accent,
    required this.onSelected,
  });

  final List<String> options;
  final String selected;
  final Color accent;
  final ValueChanged<String> onSelected;

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Wrap(
        spacing: 8,
        runSpacing: 8,
        children: options.map((opt) {
          final sel = opt == selected;
          return Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: () => onSelected(opt),
              borderRadius: BorderRadius.circular(24),
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 180),
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
                decoration: BoxDecoration(
                  gradient: sel
                      ? LinearGradient(colors: [accent.withValues(alpha: 0.35), accent.withValues(alpha: 0.15)])
                      : null,
                  color: sel ? null : (t.isDark ? Colors.white.withValues(alpha: 0.04) : const Color(0xFFF1F5F9)),
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: sel ? accent : t.border),
                ),
                child: Text(opt, style: TextStyle(color: sel ? accent : t.chipOffLabel, fontWeight: FontWeight.w700, fontSize: 12)),
              ),
            ),
          );
        }).toList(),
      ),
    );
  }
}

Future<T?> showNgmyModernEditorPage<T>(BuildContext context, Widget page) {
  return Navigator.of(context).push<T>(
    PageRouteBuilder(
      opaque: true,
      fullscreenDialog: true,
      pageBuilder: (_, __, ___) => page,
      transitionsBuilder: (_, anim, __, child) {
        final slide = Tween<Offset>(begin: const Offset(0, 0.04), end: Offset.zero).animate(CurvedAnimation(parent: anim, curve: Curves.easeOutCubic));
        return FadeTransition(opacity: anim, child: SlideTransition(position: slide, child: child));
      },
    ),
  );
}

/// Professional date picker row with underline divider.
class NgmyModernDateField extends StatelessWidget {
  const NgmyModernDateField({
    super.key,
    required this.label,
    required this.value,
    required this.onChanged,
    required this.accent,
    this.hint = 'Select date',
  });

  final String label;
  final DateTime? value;
  final ValueChanged<DateTime?> onChanged;
  final Color accent;
  final String hint;

  static final _fmt = DateFormat('MMM d, yyyy');

  @override
  Widget build(BuildContext context) {
    final t = NgmyHubTheme.of(context);
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(), style: t.sectionLabel),
          const SizedBox(height: 6),
          Material(
            color: Colors.transparent,
            child: InkWell(
              onTap: () async {
                final now = DateTime.now();
                final picked = await showDatePicker(
                  context: context,
                  initialDate: value ?? now,
                  firstDate: DateTime(now.year - 10),
                  lastDate: DateTime(now.year + 10),
                  builder: (ctx, child) {
                    final dark = Theme.of(ctx).brightness == Brightness.dark;
                    return Theme(
                      data: Theme.of(ctx).copyWith(
                        colorScheme: dark
                            ? ColorScheme.dark(primary: accent, surface: const Color(0xFF111827))
                            : ColorScheme.light(primary: accent, surface: Colors.white),
                      ),
                      child: child!,
                    );
                  },
                );
                if (picked != null) onChanged(picked);
              },
              borderRadius: BorderRadius.circular(14),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                decoration: BoxDecoration(
                  color: t.fieldFill,
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: t.inputBorder),
                ),
                child: Row(
                  children: [
                    Icon(Icons.calendar_today_rounded, color: accent, size: 18),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        value != null ? _fmt.format(value!) : hint,
                        style: TextStyle(color: value != null ? t.title : t.muted, fontWeight: FontWeight.w600, fontSize: 15),
                      ),
                    ),
                    if (value != null)
                      IconButton(
                        visualDensity: VisualDensity.compact,
                        onPressed: () => onChanged(null),
                        icon: Icon(Icons.close_rounded, size: 16, color: t.muted),
                      ),
                  ],
                ),
              ),
            ),
          ),
          const SizedBox(height: 6),
          Container(height: 1, color: accent.withValues(alpha: 0.35)),
        ],
      ),
    );
  }
}
