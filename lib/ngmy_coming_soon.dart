import 'package:flutter/material.dart';

/// Theme-aware Coming Soon placeholder with a framed card layout.
class NgmyComingSoonScreen extends StatelessWidget {
  const NgmyComingSoonScreen({
    super.key,
    required this.title,
    required this.icon,
    this.message,
    this.transparentBackground = false,
    this.floatingTitle,
    this.bottomPadding = 0,
    this.appBar,
  });

  final String title;
  final IconData icon;
  final String? message;
  final bool transparentBackground;
  final String? floatingTitle;
  final double bottomPadding;
  final PreferredSizeWidget? appBar;

  @override
  Widget build(BuildContext context) {
    final isDark = Theme.of(context).brightness == Brightness.dark;
    final bg = transparentBackground
        ? Colors.transparent
        : (isDark ? const Color(0xFF080B16) : const Color(0xFFF3F7FF));

    return Scaffold(
      backgroundColor: bg,
      appBar: appBar,
      body: SafeArea(
        bottom: false,
        child: SingleChildScrollView(
          padding: EdgeInsets.fromLTRB(20, 10, 20, bottomPadding),
          child: Column(
            children: [
              if (floatingTitle != null) ...[
                _NgmyFloatingTitleStub(title: floatingTitle!),
                const SizedBox(height: 28),
              ],
              Center(child: ngmyComingSoonFrame(
                context: context,
                title: title,
                icon: icon,
                message: message,
              )),
            ],
          ),
        ),
      ),
    );
  }
}

/// Decorative framed Coming Soon card — use inside any scaffold body.
Widget ngmyComingSoonFrame({
  required BuildContext context,
  required String title,
  required IconData icon,
  String? message,
}) {
  final isDark = Theme.of(context).brightness == Brightness.dark;
  final subtitle = message ?? 'We are rebuilding this section. Check back soon.';
  final frameGradient = isDark
      ? const [Color(0xFF00B25A), Color(0xFF7C3AED), Color(0xFF22D3EE), Color(0xFF00B25A)]
      : const [Color(0xFF00B25A), Color(0xFF34D399), Color(0xFF60A5FA), Color(0xFF00B25A)];
  final innerBg = isDark ? const Color(0xFF111731) : Colors.white;
  final titleColor = isDark ? Colors.white : const Color(0xFF0F172A);
  final subColor = isDark ? Colors.white60 : const Color(0xFF64748B);

  return Container(
    constraints: const BoxConstraints(maxWidth: 420),
    margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 12),
    padding: const EdgeInsets.all(3),
    decoration: BoxDecoration(
      borderRadius: BorderRadius.circular(30),
      gradient: LinearGradient(
        colors: frameGradient,
        begin: Alignment.topLeft,
        end: Alignment.bottomRight,
      ),
      boxShadow: [
        BoxShadow(
          color: const Color(0xFF00B25A).withOpacity(isDark ? 0.28 : 0.18),
          blurRadius: 28,
          offset: const Offset(0, 14),
        ),
        BoxShadow(
          color: Colors.black.withOpacity(isDark ? 0.35 : 0.08),
          blurRadius: 18,
          offset: const Offset(0, 8),
        ),
      ],
    ),
    child: Container(
      padding: const EdgeInsets.fromLTRB(28, 36, 28, 32),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(27),
        color: innerBg,
        border: Border.all(color: isDark ? Colors.white.withOpacity(0.08) : const Color(0xFFE2E8F0)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: 88,
            height: 88,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              gradient: LinearGradient(
                colors: isDark
                    ? [const Color(0xFF00B25A).withOpacity(0.35), const Color(0xFF7C3AED).withOpacity(0.25)]
                    : [const Color(0xFF00B25A).withOpacity(0.16), const Color(0xFF34D399).withOpacity(0.12)],
              ),
              border: Border.all(color: const Color(0xFF00B25A).withOpacity(0.45), width: 1.5),
            ),
            child: Icon(icon, size: 42, color: const Color(0xFF00B25A)),
          ),
          const SizedBox(height: 22),
          Text(
            title,
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 24, fontWeight: FontWeight.w900, letterSpacing: 0.3, color: titleColor),
          ),
          const SizedBox(height: 14),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 8),
            decoration: BoxDecoration(
              gradient: const LinearGradient(colors: [Color(0xFF00B25A), Color(0xFF059669)]),
              borderRadius: BorderRadius.circular(999),
              boxShadow: [BoxShadow(color: const Color(0xFF00B25A).withOpacity(0.35), blurRadius: 12, offset: const Offset(0, 4))],
            ),
            child: const Text(
              'COMING SOON',
              style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 13, letterSpacing: 1.6),
            ),
          ),
          const SizedBox(height: 16),
          Text(
            subtitle,
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 14, height: 1.45, fontWeight: FontWeight.w500, color: subColor),
          ),
        ],
      ),
    ),
  );
}

/// Lightweight title bar matching main.dart FloatingTitle styling.
class _NgmyFloatingTitleStub extends StatelessWidget {
  const _NgmyFloatingTitleStub({required this.title});
  final String title;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 60,
      padding: const EdgeInsets.symmetric(horizontal: 10),
      decoration: BoxDecoration(
        color: Theme.of(context).cardColor,
        borderRadius: BorderRadius.circular(30),
        boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 15, offset: const Offset(0, 5))],
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          const SizedBox(width: 40),
          Expanded(
            child: Center(
              child: Text(
                title,
                style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15, letterSpacing: 1),
              ),
            ),
          ),
          const SizedBox(width: 40),
        ],
      ),
    );
  }
}
