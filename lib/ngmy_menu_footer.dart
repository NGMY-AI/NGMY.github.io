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

    final size = compact ? 36.0 : 42.0;
    final iconSize = compact ? 18.0 : 20.0;

    return Padding(
      padding: EdgeInsets.fromLTRB(compact ? 8 : 12, compact ? 8 : 12, compact ? 8 : 12, compact ? 4 : 8),
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
      padding: const EdgeInsets.only(right: 8),
      child: Material(
        color: Colors.white,
        elevation: 2,
        shadowColor: Colors.black26,
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
