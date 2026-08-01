import 'package:flutter/material.dart';

/// Close control that stays visible offline — no Material Icons font required.
class NgmyOfflineCloseButton extends StatelessWidget {
  const NgmyOfflineCloseButton({
    super.key,
    required this.onPressed,
    this.color,
    this.size = 40,
    this.tooltip = 'Close',
  });

  final VoidCallback onPressed;
  final Color? color;
  final double size;
  final String tooltip;

  @override
  Widget build(BuildContext context) {
    final fg = color ?? Colors.white70;
    return Tooltip(
      message: tooltip,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          onTap: onPressed,
          customBorder: const CircleBorder(),
          child: SizedBox(
            width: size,
            height: size,
            child: Center(
              child: Text(
                'X',
                style: TextStyle(
                  color: fg,
                  fontSize: size * 0.42,
                  fontWeight: FontWeight.w800,
                  height: 1,
                  letterSpacing: -0.5,
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
