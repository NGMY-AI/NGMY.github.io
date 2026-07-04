import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_menu_models.dart';

/// Bottom row: social icons (left) · website (right). All optional.
class NgmyMenuGuestFooter extends StatelessWidget {
  const NgmyMenuGuestFooter({super.key, required this.links, this.compact = false});

  final NgmyMenuSocialLinks links;
  final bool compact;

  @override
  Widget build(BuildContext context) {
    if (!links.hasAny) return const SizedBox.shrink();

    final size = compact ? 28.0 : 32.0;
    final iconSize = compact ? 14.0 : 16.0;

    return Padding(
      padding: EdgeInsets.fromLTRB(compact ? 8 : 10, compact ? 6 : 8, compact ? 8 : 10, compact ? 2 : 4),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              if (links.instagram.trim().isNotEmpty)
                _SocialIconButton(
                  size: size,
                  iconSize: iconSize,
                  label: 'Instagram',
                  onTap: () => _open(links.instagram),
                  child: _InstagramGlyph(size: iconSize),
                ),
              if (links.facebook.trim().isNotEmpty)
                _SocialIconButton(
                  size: size,
                  iconSize: iconSize,
                  label: 'Facebook',
                  onTap: () => _open(links.facebook),
                  child: _FacebookGlyph(size: iconSize),
                ),
              if (links.youtube.trim().isNotEmpty)
                _SocialIconButton(
                  size: size,
                  iconSize: iconSize,
                  label: 'YouTube',
                  onTap: () => _open(links.youtube),
                  child: _YoutubeGlyph(size: iconSize),
                ),
            ],
          ),
          if (links.website.trim().isNotEmpty)
            _SocialIconButton(
              size: size,
              iconSize: iconSize,
              label: 'Website',
              onTap: () => _open(links.website),
              child: Icon(Icons.language_rounded, size: iconSize, color: const Color(0xFF334155)),
            )
          else
            const SizedBox(width: 8),
        ],
      ),
    );
  }

  static Future<void> _open(String raw) async {
    var url = raw.trim();
    if (url.isEmpty) return;
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'https://$url';
    }
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

/// Small glassy pill — page dots for multi-menu guest links.
class NgmyMenuPageDotsIndicator extends StatelessWidget {
  const NgmyMenuPageDotsIndicator({
    super.key,
    required this.count,
    required this.activeIndex,
    required this.pageBackgroundId,
  });

  final int count;
  final int activeIndex;
  final String pageBackgroundId;

  @override
  Widget build(BuildContext context) {
    if (count <= 1) return const SizedBox.shrink();

    final bg = ngmyMenuPageBackgroundColor(pageBackgroundId);
    final isLight = bg.computeLuminance() > 0.55;
    final frameFill = isLight ? Colors.white.withValues(alpha: 0.78) : const Color(0xFF1A1F2E).withValues(alpha: 0.72);
    final frameBorder = isLight ? Colors.black.withValues(alpha: 0.10) : Colors.white.withValues(alpha: 0.22);
    final dotActive = isLight ? const Color(0xFF334155) : const Color(0xFFF8FAFC);
    final dotIdle = isLight ? const Color(0xFF94A3B8).withValues(alpha: 0.55) : Colors.white.withValues(alpha: 0.35);

    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: frameFill,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: frameBorder, width: 1.2),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withValues(alpha: isLight ? 0.06 : 0.18),
            blurRadius: 10,
            offset: const Offset(0, 2),
          ),
          if (isLight)
            BoxShadow(
              color: Colors.white.withValues(alpha: 0.9),
              blurRadius: 4,
              offset: const Offset(0, -1),
            ),
        ],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: List.generate(count, (i) {
          final active = i == activeIndex.clamp(0, count - 1);
          return AnimatedContainer(
            duration: const Duration(milliseconds: 220),
            curve: Curves.easeOutCubic,
            margin: EdgeInsets.only(left: i == 0 ? 0 : 5),
            width: active ? 7 : 5,
            height: active ? 7 : 5,
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              color: active ? dotActive : dotIdle,
              boxShadow: active
                  ? [
                      BoxShadow(
                        color: dotActive.withValues(alpha: 0.35),
                        blurRadius: 4,
                      ),
                    ]
                  : null,
            ),
          );
        }),
      ),
    );
  }
}

class _SocialIconButton extends StatelessWidget {
  const _SocialIconButton({
    required this.size,
    required this.iconSize,
    required this.label,
    required this.onTap,
    required this.child,
  });

  final double size;
  final double iconSize;
  final String label;
  final VoidCallback onTap;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(right: 6),
      child: Material(
        color: Colors.white,
        elevation: 1,
        shadowColor: Colors.black12,
        shape: const CircleBorder(),
        child: InkWell(
          onTap: onTap,
          customBorder: const CircleBorder(),
          child: SizedBox(
            width: size,
            height: size,
            child: Semantics(label: label, button: true, child: Center(child: child)),
          ),
        ),
      ),
    );
  }
}

class _InstagramGlyph extends StatelessWidget {
  const _InstagramGlyph({required this.size});

  final double size;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size + 2,
      height: size + 2,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: const LinearGradient(
          begin: Alignment.bottomLeft,
          end: Alignment.topRight,
          colors: [Color(0xFFFEDA75), Color(0xFFFA7E1E), Color(0xFFD62976), Color(0xFF962FBF), Color(0xFF4F5BD5)],
        ),
      ),
      child: Center(
        child: Icon(Icons.camera_alt_outlined, size: size * 0.62, color: Colors.white),
      ),
    );
  }
}

class _FacebookGlyph extends StatelessWidget {
  const _FacebookGlyph({required this.size});

  final double size;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size + 2,
      height: size + 2,
      decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0xFF1877F2)),
      child: Center(
        child: Text(
          'f',
          style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: size * 0.85, height: 1),
        ),
      ),
    );
  }
}

class _YoutubeGlyph extends StatelessWidget {
  const _YoutubeGlyph({required this.size});

  final double size;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size + 2,
      height: size + 2,
      decoration: BoxDecoration(
        color: const Color(0xFFFF0000),
        borderRadius: BorderRadius.circular(6),
      ),
      child: Center(
        child: Icon(Icons.play_arrow_rounded, size: size * 0.78, color: Colors.white),
      ),
    );
  }
}
