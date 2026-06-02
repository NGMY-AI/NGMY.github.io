import 'package:flutter/material.dart';

/// Emoji-first icon — always visible offline (no Material Icons font required).
class NgmyResilientIcon extends StatelessWidget {
  final String emoji;
  final IconData? icon;
  final double size;
  final Color? color;
  final bool showMaterialIcon;

  const NgmyResilientIcon({
    super.key,
    required this.emoji,
    this.icon,
    this.size = 24,
    this.color,
    this.showMaterialIcon = true,
  });

  @override
  Widget build(BuildContext context) {
    final iconData = icon;
    return SizedBox(
      width: size,
      height: size,
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            emoji,
            style: TextStyle(fontSize: size * 0.82, height: 1.05),
            textAlign: TextAlign.center,
          ),
          if (showMaterialIcon && iconData != null) ...[
            const SizedBox(height: 1),
            Icon(iconData, size: size * 0.38, color: color ?? Colors.white70),
          ],
        ],
      ),
    );
  }
}

/// Large game-tile graphic: emoji always shown; optional Material icon accent.
class NgmyGameTileIcon extends StatelessWidget {
  final String emoji;
  final IconData? icon;
  final double size;

  const NgmyGameTileIcon({
    super.key,
    required this.emoji,
    this.icon,
    this.size = 56,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: size + 8,
      height: size + 8,
      child: Stack(
        alignment: Alignment.center,
        children: [
          Text(emoji, style: TextStyle(fontSize: size * 0.92, height: 1)),
          if (icon != null)
            Positioned(
              right: 0,
              bottom: 0,
              child: Icon(icon, size: size * 0.28, color: Colors.white.withValues(alpha: 0.85)),
            ),
        ],
      ),
    );
  }
}
