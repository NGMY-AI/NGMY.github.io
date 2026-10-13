import 'package:flutter/material.dart';

/// Building blocks for the admin console: one palette, a header, the section
/// tabs (side menu on computers), stat cards, tool tiles and action buttons —
/// so every admin screen reads like one real dashboard.

class NgmyAdminPalette {
  const NgmyAdminPalette._(this.isDark);
  factory NgmyAdminPalette.of(bool isDark) => NgmyAdminPalette._(isDark);
  final bool isDark;

  static const accent = Color(0xFF00B25A);
  static const indigo = Color(0xFF6366F1);

  Color get bg => isDark ? const Color(0xFF0B0F19) : const Color(0xFFF3F5FA);
  Color get panel => isDark ? const Color(0xFF131A2A) : Colors.white;
  Color get panelAlt => isDark ? const Color(0xFF182136) : const Color(0xFFF8FAFD);
  Color get border => isDark ? const Color(0xFF223049) : const Color(0xFFE3E8F1);
  Color get ink => isDark ? Colors.white : const Color(0xFF0F172A);
  Color get muted => isDark ? const Color(0xFF8C9AB5) : const Color(0xFF64748B);

  BoxDecoration card({double radius = 18, Color? borderColor}) => BoxDecoration(
        color: panel,
        borderRadius: BorderRadius.circular(radius),
        border: Border.all(color: borderColor ?? border),
        boxShadow: isDark ? null : [BoxShadow(color: const Color(0xFF0F172A).withValues(alpha: 0.05), blurRadius: 14, offset: const Offset(0, 6))],
      );
}

/// One section in the console's navigation.
class NgmyAdminNavItem {
  const NgmyAdminNavItem(this.icon, this.label, {this.badge = 0});
  final IconData icon;
  final String label;
  final int badge;
}

/// Top bar: back, "Admin console" + the section name, refresh.
class NgmyAdminHeader extends StatelessWidget {
  const NgmyAdminHeader({
    super.key,
    required this.isDark,
    required this.section,
    required this.onBack,
    this.onRefresh,
    this.refreshing = false,
    this.showBack = true,
  });
  final bool isDark;
  final String section;
  final VoidCallback onBack;
  final VoidCallback? onRefresh;
  final bool refreshing;
  final bool showBack;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return Padding(
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
      child: Row(
        children: [
          if (showBack) ...[
            _SquareIconButton(icon: Icons.arrow_back_ios_new_rounded, onTap: onBack, isDark: isDark),
            const SizedBox(width: 12),
          ],
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('ADMIN CONSOLE', style: TextStyle(color: p.muted, fontWeight: FontWeight.w800, fontSize: 10.5, letterSpacing: 1.6)),
                const SizedBox(height: 1),
                Text(section, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.ink, fontWeight: FontWeight.w900, fontSize: 20, letterSpacing: -0.3)),
              ],
            ),
          ),
          if (onRefresh != null)
            _SquareIconButton(
              icon: Icons.sync_rounded,
              onTap: refreshing ? null : onRefresh,
              isDark: isDark,
              spinning: refreshing,
              tooltip: 'Refresh from cloud',
            ),
        ],
      ),
    );
  }
}

class _SquareIconButton extends StatelessWidget {
  const _SquareIconButton({required this.icon, required this.onTap, required this.isDark, this.spinning = false, this.tooltip});
  final IconData icon;
  final VoidCallback? onTap;
  final bool isDark;
  final bool spinning;
  final String? tooltip;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    final btn = Material(
      color: p.panel,
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          width: 40,
          height: 40,
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), border: Border.all(color: p.border)),
          child: spinning
              ? const Padding(padding: EdgeInsets.all(11), child: CircularProgressIndicator(strokeWidth: 2))
              : Icon(icon, size: 18, color: p.ink),
        ),
      ),
    );
    return tooltip == null ? btn : Tooltip(message: tooltip!, child: btn);
  }
}

/// Phone / tablet: a segmented bar of the sections.
class NgmyAdminTabBar extends StatelessWidget {
  const NgmyAdminTabBar({super.key, required this.isDark, required this.items, required this.selected, required this.onSelect});
  final bool isDark;
  final List<NgmyAdminNavItem> items;
  final int selected;
  final ValueChanged<int> onSelect;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return Container(
      margin: const EdgeInsets.fromLTRB(14, 0, 14, 10),
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(color: p.panel, borderRadius: BorderRadius.circular(16), border: Border.all(color: p.border)),
      child: Row(
        children: [
          for (var i = 0; i < items.length; i++)
            Expanded(
              child: GestureDetector(
                onTap: () => onSelect(i),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 180),
                  padding: const EdgeInsets.symmetric(vertical: 8),
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(12),
                    color: i == selected ? NgmyAdminPalette.accent.withValues(alpha: isDark ? 0.18 : 0.12) : Colors.transparent,
                  ),
                  child: Stack(
                    clipBehavior: Clip.none,
                    alignment: Alignment.center,
                    children: [
                      Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(items[i].icon, size: 20, color: i == selected ? NgmyAdminPalette.accent : p.muted),
                          const SizedBox(height: 2),
                          Text(
                            items[i].label,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 11,
                              fontWeight: i == selected ? FontWeight.w900 : FontWeight.w600,
                              color: i == selected ? p.ink : p.muted,
                            ),
                          ),
                        ],
                      ),
                      if (items[i].badge > 0) Positioned(top: -4, right: 6, child: NgmyAdminBadge(count: items[i].badge)),
                    ],
                  ),
                ),
              ),
            ),
        ],
      ),
    );
  }
}

/// Computer: a side menu with the sections.
class NgmyAdminSideNav extends StatelessWidget {
  const NgmyAdminSideNav({
    super.key,
    required this.isDark,
    required this.items,
    required this.selected,
    required this.onSelect,
    required this.onBack,
    this.adminName = '',
  });
  final bool isDark;
  final List<NgmyAdminNavItem> items;
  final int selected;
  final ValueChanged<int> onSelect;
  final VoidCallback onBack;
  final String adminName;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return Container(
      width: 236,
      decoration: BoxDecoration(color: p.panel, border: Border(right: BorderSide(color: p.border))),
      child: SafeArea(
        right: false,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(18, 18, 18, 20),
              child: Row(
                children: [
                  Container(
                    width: 38,
                    height: 38,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(11),
                      gradient: const LinearGradient(colors: [NgmyAdminPalette.accent, Color(0xFF047857)]),
                    ),
                    child: const Icon(Icons.admin_panel_settings_rounded, color: Colors.white, size: 21),
                  ),
                  const SizedBox(width: 10),
                  Expanded(
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text('NGMY Admin', style: TextStyle(color: p.ink, fontWeight: FontWeight.w900, fontSize: 15)),
                        Text(adminName.isEmpty ? 'Console' : adminName, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontSize: 11.5)),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            for (var i = 0; i < items.length; i++)
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
                child: Material(
                  color: i == selected ? NgmyAdminPalette.accent.withValues(alpha: isDark ? 0.16 : 0.10) : Colors.transparent,
                  borderRadius: BorderRadius.circular(12),
                  child: InkWell(
                    borderRadius: BorderRadius.circular(12),
                    onTap: () => onSelect(i),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 11),
                      child: Row(
                        children: [
                          Icon(items[i].icon, size: 20, color: i == selected ? NgmyAdminPalette.accent : p.muted),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Text(
                              items[i].label,
                              style: TextStyle(color: i == selected ? p.ink : p.muted, fontWeight: i == selected ? FontWeight.w900 : FontWeight.w600, fontSize: 13.5),
                            ),
                          ),
                          if (items[i].badge > 0) NgmyAdminBadge(count: items[i].badge),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            const Spacer(),
            Padding(
              padding: const EdgeInsets.all(12),
              child: OutlinedButton.icon(
                onPressed: onBack,
                icon: const Icon(Icons.logout_rounded, size: 18),
                label: const Text('Leave admin', style: TextStyle(fontWeight: FontWeight.w800)),
                style: OutlinedButton.styleFrom(
                  foregroundColor: p.muted,
                  side: BorderSide(color: p.border),
                  minimumSize: const Size(0, 44),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class NgmyAdminBadge extends StatelessWidget {
  const NgmyAdminBadge({super.key, required this.count});
  final int count;
  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
        constraints: const BoxConstraints(minWidth: 18),
        decoration: BoxDecoration(color: const Color(0xFFEF4444), borderRadius: BorderRadius.circular(99)),
        child: Text(count > 99 ? '99+' : '$count', textAlign: TextAlign.center, style: const TextStyle(color: Colors.white, fontSize: 10, fontWeight: FontWeight.w900)),
      );
}

/// A number on the overview: icon, value, label.
class NgmyAdminStatCard extends StatelessWidget {
  const NgmyAdminStatCard({super.key, required this.isDark, required this.icon, required this.color, required this.label, required this.value, this.hint, this.onTap});
  final bool isDark;
  final IconData icon;
  final Color color;
  final String label;
  final String value;
  final String? hint;
  final VoidCallback? onTap;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          padding: const EdgeInsets.all(14),
          decoration: p.card(),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  Container(
                    width: 34,
                    height: 34,
                    decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(10)),
                    child: Icon(icon, size: 18, color: color),
                  ),
                  const Spacer(),
                  if (onTap != null) Icon(Icons.arrow_outward_rounded, size: 16, color: p.muted),
                ],
              ),
              const SizedBox(height: 12),
              FittedBox(
                fit: BoxFit.scaleDown,
                alignment: Alignment.centerLeft,
                child: Text(value, style: TextStyle(color: p.ink, fontWeight: FontWeight.w900, fontSize: 24, letterSpacing: -0.5)),
              ),
              const SizedBox(height: 2),
              Text(label, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: p.muted, fontWeight: FontWeight.w700, fontSize: 12)),
              if (hint != null) Text(hint!, maxLines: 1, overflow: TextOverflow.ellipsis, style: TextStyle(color: color, fontWeight: FontWeight.w800, fontSize: 11)),
            ],
          ),
        ),
      ),
    );
  }
}

/// A titled panel.
class NgmyAdminSection extends StatelessWidget {
  const NgmyAdminSection({super.key, required this.isDark, required this.title, required this.child, this.subtitle, this.trailing, this.padding = const EdgeInsets.all(16)});
  final bool isDark;
  final String title;
  final String? subtitle;
  final Widget? trailing;
  final Widget child;
  final EdgeInsets padding;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return Container(
      decoration: p.card(),
      padding: padding,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(title, style: TextStyle(color: p.ink, fontWeight: FontWeight.w900, fontSize: 15)),
                    if (subtitle != null) Text(subtitle!, style: TextStyle(color: p.muted, fontSize: 12, height: 1.3)),
                  ],
                ),
              ),
              if (trailing != null) trailing!,
            ],
          ),
          const SizedBox(height: 12),
          child,
        ],
      ),
    );
  }
}

/// "Needs attention" line: icon, what, how many, tap to open.
class NgmyAdminAttentionRow extends StatelessWidget {
  const NgmyAdminAttentionRow({super.key, required this.isDark, required this.icon, required this.color, required this.label, required this.count, required this.onTap});
  final bool isDark;
  final IconData icon;
  final Color color;
  final String label;
  final int count;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(12),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 9, horizontal: 4),
        child: Row(
          children: [
            Container(
              width: 32,
              height: 32,
              decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(9)),
              child: Icon(icon, size: 17, color: color),
            ),
            const SizedBox(width: 12),
            Expanded(child: Text(label, style: TextStyle(color: p.ink, fontWeight: FontWeight.w700, fontSize: 13.5))),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
              decoration: BoxDecoration(color: color.withValues(alpha: 0.14), borderRadius: BorderRadius.circular(99)),
              child: Text('$count', style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 12)),
            ),
            const SizedBox(width: 4),
            Icon(Icons.chevron_right_rounded, color: p.muted, size: 20),
          ],
        ),
      ),
    );
  }
}

/// A management tool: tinted icon, name, optional count.
class NgmyAdminToolTile extends StatelessWidget {
  const NgmyAdminToolTile({super.key, required this.isDark, required this.title, required this.icon, required this.color, required this.onTap, this.badge = 0});
  final bool isDark;
  final String title;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;
  final int badge;

  @override
  Widget build(BuildContext context) {
    final p = NgmyAdminPalette.of(isDark);
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(18),
        child: Ink(
          decoration: p.card(),
          child: Stack(
            children: [
              Padding(
                padding: const EdgeInsets.all(12),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      width: 46,
                      height: 46,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(14),
                        gradient: LinearGradient(begin: Alignment.topLeft, end: Alignment.bottomRight, colors: [color, Color.lerp(color, Colors.black, 0.25)!]),
                        boxShadow: [BoxShadow(color: color.withValues(alpha: 0.35), blurRadius: 10, offset: const Offset(0, 4))],
                      ),
                      child: Icon(icon, color: Colors.white, size: 23),
                    ),
                    const SizedBox(height: 10),
                    Text(
                      title,
                      textAlign: TextAlign.center,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: p.ink, fontWeight: FontWeight.w800, fontSize: 12.5, height: 1.15),
                    ),
                  ],
                ),
              ),
              if (badge > 0) Positioned(top: 8, right: 8, child: NgmyAdminBadge(count: badge)),
            ],
          ),
        ),
      ),
    );
  }
}

/// A readable action button for an account (icon + label, tinted).
class NgmyAdminActionButton extends StatelessWidget {
  const NgmyAdminActionButton({super.key, required this.label, required this.icon, required this.color, required this.onTap, this.isDark = true});
  final String label;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;
  final bool isDark;

  @override
  Widget build(BuildContext context) {
    // Very dark colours (greys) would vanish on the dark panel — lift them.
    final color = isDark && this.color.computeLuminance() < 0.08 ? Color.lerp(this.color, Colors.white, 0.55)! : this.color;
    return Material(
      color: color.withValues(alpha: isDark ? 0.16 : 0.10),
      borderRadius: BorderRadius.circular(12),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(12),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
          decoration: BoxDecoration(borderRadius: BorderRadius.circular(12), border: Border.all(color: color.withValues(alpha: 0.35))),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Icon(icon, size: 17, color: color),
              const SizedBox(width: 6),
              Flexible(
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  child: Text(
                    label,
                    maxLines: 1,
                    style: TextStyle(color: color, fontWeight: FontWeight.w900, fontSize: 12.5),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
