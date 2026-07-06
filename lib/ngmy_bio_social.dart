import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';

import 'ngmy_menu_models.dart';

/// Social icons row — centered under bio tagline (not page bottom).
class NgmyBioSocialRow extends StatelessWidget {
  const NgmyBioSocialRow({
    super.key,
    required this.links,
    this.compact = false,
    this.lightBackground = false,
  });

  final NgmyMenuSocialLinks links;
  final bool compact;
  final bool lightBackground;

  @override
  Widget build(BuildContext context) {
    if (!links.hasAny) return const SizedBox.shrink();

    final size = compact ? 34.0 : 38.0;
    final iconSize = compact ? 16.0 : 18.0;
    final websiteColor = lightBackground ? const Color(0xFF475569) : Colors.white;

    Widget? chip(String url, Widget glyph) {
      if (url.trim().isEmpty) return null;
      return _BioSocialCircle(
        size: size,
        lightBackground: lightBackground,
        onTap: () => _open(url),
        child: glyph,
      );
    }

    final items = <Widget>[
      if (links.instagram.trim().isNotEmpty)
        chip(
          links.instagram,
          ClipOval(
            child: Container(
              width: iconSize,
              height: iconSize,
              decoration: const BoxDecoration(
                gradient: LinearGradient(
                  colors: [Color(0xFFFEDA75), Color(0xFFFA7E1E), Color(0xFFD62976), Color(0xFF962FBF)],
                ),
              ),
              child: Icon(Icons.camera_alt_outlined, size: iconSize * 0.62, color: Colors.white),
            ),
          ),
        )!,
      if (links.facebook.trim().isNotEmpty)
        chip(
          links.facebook,
          ClipOval(
            child: Container(
              width: iconSize,
              height: iconSize,
              color: const Color(0xFF1877F2),
              alignment: Alignment.center,
              child: Text(
                'f',
                style: TextStyle(
                  color: Colors.white,
                  fontWeight: FontWeight.w900,
                  fontSize: iconSize * 0.85,
                  height: 1,
                ),
              ),
            ),
          ),
        )!,
      if (links.youtube.trim().isNotEmpty)
        chip(
          links.youtube,
          ClipOval(
            child: Container(
              width: iconSize,
              height: iconSize,
              color: const Color(0xFFFF0000),
              child: Icon(Icons.play_arrow_rounded, size: iconSize * 0.78, color: Colors.white),
            ),
          ),
        )!,
      if (links.website.trim().isNotEmpty)
        chip(
          links.website,
          Icon(Icons.language_rounded, size: iconSize, color: websiteColor),
        )!,
    ];

    return Padding(
      padding: EdgeInsets.only(top: compact ? 10 : 12),
      child: Wrap(
        alignment: WrapAlignment.center,
        spacing: 10,
        runSpacing: 8,
        children: items,
      ),
    );
  }

  static Future<void> _open(String raw) async {
    var url = raw.trim();
    if (url.isEmpty) return;
    if (!url.startsWith('http://') && !url.startsWith('https://')) url = 'https://$url';
    final uri = Uri.tryParse(url);
    if (uri == null) return;
    await launchUrl(uri, mode: LaunchMode.externalApplication);
  }
}

class _BioSocialCircle extends StatelessWidget {
  const _BioSocialCircle({
    required this.size,
    required this.onTap,
    required this.child,
    required this.lightBackground,
  });

  final double size;
  final VoidCallback onTap;
  final Widget child;
  final bool lightBackground;

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        onTap: onTap,
        customBorder: const CircleBorder(),
        child: Ink(
          width: size,
          height: size,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            color: lightBackground ? Colors.black.withValues(alpha: 0.05) : Colors.white.withValues(alpha: 0.14),
            border: Border.all(
              color: lightBackground ? Colors.black.withValues(alpha: 0.08) : Colors.white.withValues(alpha: 0.22),
            ),
            boxShadow: [
              BoxShadow(
                color: Colors.black.withValues(alpha: lightBackground ? 0.08 : 0.15),
                blurRadius: 8,
                offset: const Offset(0, 2),
              ),
            ],
          ),
          child: Center(child: child),
        ),
      ),
    );
  }
}
