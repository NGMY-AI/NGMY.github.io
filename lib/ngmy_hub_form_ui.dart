import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

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
    final bottom = MediaQuery.viewInsetsOf(context).bottom;
    return Material(
      color: const Color(0xFF030712),
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
                    accent.withValues(alpha: 0.45),
                    const Color(0xFF030712),
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
                            color: Colors.white.withValues(alpha: 0.08),
                            borderRadius: BorderRadius.circular(12),
                            border: Border.all(color: Colors.white.withValues(alpha: 0.1)),
                          ),
                          child: const Icon(Icons.arrow_back_ios_new_rounded, color: Colors.white, size: 18),
                        ),
                      ),
                      const Spacer(),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                        decoration: BoxDecoration(
                          color: accent.withValues(alpha: 0.18),
                          borderRadius: BorderRadius.circular(20),
                          border: Border.all(color: accent.withValues(alpha: 0.45)),
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
                      Text(title, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 26, letterSpacing: -0.5)),
                      const SizedBox(height: 6),
                      Text(subtitle, style: TextStyle(color: Colors.white.withValues(alpha: 0.58), fontSize: 13, height: 1.35)),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Expanded(
                  child: Container(
                    margin: const EdgeInsets.fromLTRB(12, 0, 12, 0),
                    decoration: BoxDecoration(
                      color: const Color(0xFF0B1220).withValues(alpha: 0.92),
                      borderRadius: const BorderRadius.vertical(top: Radius.circular(24)),
                      border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                      boxShadow: [BoxShadow(color: accent.withValues(alpha: 0.12), blurRadius: 40, offset: const Offset(0, -8))],
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
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(), style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
          const SizedBox(height: 6),
          TextField(
            controller: controller,
            keyboardType: keyboard,
            maxLines: maxLines,
            style: const TextStyle(color: Colors.white, fontSize: 15, fontWeight: FontWeight.w600),
            decoration: InputDecoration(
              hintText: hint,
              hintStyle: TextStyle(color: Colors.white.withValues(alpha: 0.28), fontWeight: FontWeight.w500),
              prefixIcon: Icon(icon, color: accent, size: 20),
              filled: true,
              fillColor: Colors.white.withValues(alpha: 0.05),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.08))),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: Colors.white.withValues(alpha: 0.08))),
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
                  color: sel ? null : Colors.white.withValues(alpha: 0.04),
                  borderRadius: BorderRadius.circular(24),
                  border: Border.all(color: sel ? accent : Colors.white.withValues(alpha: 0.12)),
                ),
                child: Text(opt, style: TextStyle(color: sel ? accent : Colors.white70, fontWeight: FontWeight.w700, fontSize: 12)),
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
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label.toUpperCase(), style: TextStyle(color: Colors.white.withValues(alpha: 0.45), fontSize: 10, fontWeight: FontWeight.w800, letterSpacing: 1.1)),
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
                  builder: (ctx, child) => Theme(
                    data: Theme.of(ctx).copyWith(colorScheme: ColorScheme.dark(primary: accent, surface: const Color(0xFF111827))),
                    child: child!,
                  ),
                );
                if (picked != null) onChanged(picked);
              },
              borderRadius: BorderRadius.circular(14),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
                decoration: BoxDecoration(
                  color: Colors.white.withValues(alpha: 0.05),
                  borderRadius: BorderRadius.circular(14),
                  border: Border.all(color: Colors.white.withValues(alpha: 0.08)),
                ),
                child: Row(
                  children: [
                    Icon(Icons.calendar_today_rounded, color: accent, size: 18),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Text(
                        value != null ? _fmt.format(value!) : hint,
                        style: TextStyle(color: value != null ? Colors.white : Colors.white.withValues(alpha: 0.28), fontWeight: FontWeight.w600, fontSize: 15),
                      ),
                    ),
                    if (value != null)
                      IconButton(
                        visualDensity: VisualDensity.compact,
                        onPressed: () => onChanged(null),
                        icon: Icon(Icons.close_rounded, size: 16, color: Colors.white.withValues(alpha: 0.4)),
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
