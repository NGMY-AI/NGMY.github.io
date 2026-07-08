import 'dart:ui';

import 'package:flutter/material.dart';

/// Shared guest “link gone” screen for Bio / Menu public URLs.
class NgmyGuestLinkMissingPage extends StatelessWidget {
  const NgmyGuestLinkMissingPage({
    super.key,
    required this.kind,
    required this.message,
    required this.onRetry,
  });

  /// `bio` or `menu`
  final String kind;
  final String message;
  final VoidCallback onRetry;

  bool get _isBio => kind.toLowerCase() == 'bio';

  @override
  Widget build(BuildContext context) {
    final accent = _isBio ? const Color(0xFF6366F1) : const Color(0xFFD4AF37);
    final accentDeep = _isBio ? const Color(0xFF4F46E5) : const Color(0xFFB8860B);
    final title = _isBio ? 'This Bio is gone' : 'This menu is gone';
    final icon = _isBio ? Icons.link_off_rounded : Icons.restaurant_menu_rounded;

    return Scaffold(
      body: Stack(
        fit: StackFit.expand,
        children: [
          DecoratedBox(
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topLeft,
                end: Alignment.bottomRight,
                colors: _isBio
                    ? const [Color(0xFF0B1020), Color(0xFF1E1B4B), Color(0xFF0F172A)]
                    : const [Color(0xFF12100A), Color(0xFF2A2112), Color(0xFF0F0E0C)],
              ),
            ),
          ),
          Positioned(
            top: -80,
            right: -40,
            child: _GlowOrb(color: accent.withValues(alpha: 0.35), size: 220),
          ),
          Positioned(
            bottom: -60,
            left: -50,
            child: _GlowOrb(color: accentDeep.withValues(alpha: 0.28), size: 260),
          ),
          SafeArea(
            child: Center(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(24, 24, 24, 32),
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 420),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(28),
                    child: BackdropFilter(
                      filter: ImageFilter.blur(sigmaX: 18, sigmaY: 18),
                      child: Container(
                        padding: const EdgeInsets.fromLTRB(24, 28, 24, 24),
                        decoration: BoxDecoration(
                          color: Colors.white.withValues(alpha: 0.08),
                          borderRadius: BorderRadius.circular(28),
                          border: Border.all(color: Colors.white.withValues(alpha: 0.14)),
                          boxShadow: [
                            BoxShadow(
                              color: accent.withValues(alpha: 0.18),
                              blurRadius: 40,
                              offset: const Offset(0, 18),
                            ),
                          ],
                        ),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Container(
                              width: 88,
                              height: 88,
                              decoration: BoxDecoration(
                                shape: BoxShape.circle,
                                gradient: LinearGradient(colors: [accent, accentDeep]),
                                boxShadow: [
                                  BoxShadow(color: accent.withValues(alpha: 0.45), blurRadius: 24, offset: const Offset(0, 10)),
                                ],
                              ),
                              child: Icon(icon, color: Colors.white, size: 40),
                            ),
                            const SizedBox(height: 22),
                            Text(
                              title,
                              textAlign: TextAlign.center,
                              style: const TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.w900,
                                fontSize: 26,
                                letterSpacing: -0.4,
                              ),
                            ),
                            const SizedBox(height: 10),
                            Text(
                              message,
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.72),
                                fontSize: 14,
                                height: 1.45,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            const SizedBox(height: 10),
                            Text(
                              'The owner may have deleted it or the link expired.',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.45),
                                fontSize: 12,
                                height: 1.4,
                              ),
                            ),
                            const SizedBox(height: 24),
                            SizedBox(
                              width: double.infinity,
                              child: FilledButton.icon(
                                onPressed: onRetry,
                                icon: const Icon(Icons.refresh_rounded),
                                label: const Text('Try again', style: TextStyle(fontWeight: FontWeight.w800)),
                                style: FilledButton.styleFrom(
                                  backgroundColor: accent,
                                  foregroundColor: Colors.white,
                                  padding: const EdgeInsets.symmetric(vertical: 14),
                                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                                ),
                              ),
                            ),
                            const SizedBox(height: 10),
                            TextButton(
                              onPressed: () {
                                // Guest shell — send people home if possible
                                final nav = Navigator.of(context);
                                if (nav.canPop()) {
                                  nav.pop();
                                }
                              },
                              child: Text(
                                'Close',
                                style: TextStyle(color: Colors.white.withValues(alpha: 0.55), fontWeight: FontWeight.w700),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _GlowOrb extends StatelessWidget {
  const _GlowOrb({required this.color, required this.size});
  final Color color;
  final double size;

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          gradient: RadialGradient(colors: [color, color.withValues(alpha: 0)]),
        ),
      ),
    );
  }
}
