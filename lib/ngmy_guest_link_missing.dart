import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

/// Shared guest “link gone” screen for Bio / Menu public URLs — light mode.
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
    final accent = _isBio ? const Color(0xFF4F46E5) : const Color(0xFFB8860B);
    final accentSoft = _isBio ? const Color(0xFFEEF2FF) : const Color(0xFFFFF8E8);
    final title = _isBio ? 'This Bio is gone' : 'This menu is gone';
    final icon = _isBio ? Icons.link_off_rounded : Icons.restaurant_menu_rounded;
    const scaffold = Color(0xFFF8FAFC);
    const ink = Color(0xFF0F172A);
    const muted = Color(0xFF64748B);

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: const SystemUiOverlayStyle(
        statusBarColor: Colors.transparent,
        statusBarIconBrightness: Brightness.dark,
        statusBarBrightness: Brightness.light,
        systemNavigationBarColor: scaffold,
        systemNavigationBarIconBrightness: Brightness.dark,
      ),
      child: Scaffold(
        backgroundColor: scaffold,
        body: Stack(
          fit: StackFit.expand,
          children: [
            Positioned(
              top: -120,
              left: -80,
              child: _SoftBlob(color: accent.withValues(alpha: 0.10), size: 280),
            ),
            Positioned(
              bottom: -100,
              right: -60,
              child: _SoftBlob(color: accent.withValues(alpha: 0.08), size: 300),
            ),
            SafeArea(
              child: Center(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(24, 28, 24, 36),
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 420),
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Container(
                          width: 96,
                          height: 96,
                          decoration: BoxDecoration(
                            color: accentSoft,
                            shape: BoxShape.circle,
                            border: Border.all(color: accent.withValues(alpha: 0.22), width: 1.5),
                            boxShadow: [
                              BoxShadow(
                                color: accent.withValues(alpha: 0.12),
                                blurRadius: 28,
                                offset: const Offset(0, 12),
                              ),
                            ],
                          ),
                          child: Icon(icon, color: accent, size: 40),
                        ),
                        const SizedBox(height: 28),
                        Text(
                          title,
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            color: ink,
                            fontWeight: FontWeight.w900,
                            fontSize: 28,
                            letterSpacing: -0.5,
                            height: 1.15,
                          ),
                        ),
                        const SizedBox(height: 12),
                        Text(
                          message,
                          textAlign: TextAlign.center,
                          style: const TextStyle(
                            color: muted,
                            fontSize: 15,
                            height: 1.5,
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        const SizedBox(height: 8),
                        Text(
                          'The owner may have deleted it, or this link expired.',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: muted.withValues(alpha: 0.85),
                            fontSize: 13,
                            height: 1.4,
                          ),
                        ),
                        const SizedBox(height: 28),
                        Container(
                          width: double.infinity,
                          padding: const EdgeInsets.fromLTRB(18, 16, 18, 16),
                          decoration: BoxDecoration(
                            color: Colors.white,
                            borderRadius: BorderRadius.circular(20),
                            border: Border.all(color: const Color(0xFFE2E8F0)),
                            boxShadow: [
                              BoxShadow(
                                color: Colors.black.withValues(alpha: 0.04),
                                blurRadius: 18,
                                offset: const Offset(0, 8),
                              ),
                            ],
                          ),
                          child: Row(
                            children: [
                              Container(
                                padding: const EdgeInsets.all(10),
                                decoration: BoxDecoration(
                                  color: accentSoft,
                                  borderRadius: BorderRadius.circular(12),
                                ),
                                child: Icon(Icons.info_outline_rounded, color: accent, size: 20),
                              ),
                              const SizedBox(width: 12),
                              const Expanded(
                                child: Text(
                                  'Ask the owner to publish again and share a fresh link.',
                                  style: TextStyle(
                                    color: Color(0xFF334155),
                                    fontSize: 13,
                                    height: 1.4,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                            ],
                          ),
                        ),
                        const SizedBox(height: 22),
                        SizedBox(
                          width: double.infinity,
                          child: FilledButton.icon(
                            onPressed: onRetry,
                            icon: const Icon(Icons.refresh_rounded),
                            label: const Text('Try again', style: TextStyle(fontWeight: FontWeight.w800, fontSize: 15)),
                            style: FilledButton.styleFrom(
                              backgroundColor: accent,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(vertical: 15),
                              elevation: 0,
                              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _SoftBlob extends StatelessWidget {
  const _SoftBlob({required this.color, required this.size});
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
