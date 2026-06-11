import 'package:flutter/material.dart';

import 'ngmy_app_builder_models.dart';

/// App icon badge — emoji or uploaded image.
class NgmyAppProjectIcon extends StatelessWidget {
  const NgmyAppProjectIcon({
    super.key,
    required this.project,
    this.size = 48,
    this.fontSize = 24,
    this.borderRadius,
  });

  final NgmyAppProject project;
  final double size;
  final double fontSize;
  final double? borderRadius;

  @override
  Widget build(BuildContext context) {
    final bytes = project.uploadedIconBytes;
    final radius = borderRadius ?? size * 0.28;
    return Container(
      width: size,
      height: size,
      decoration: BoxDecoration(
        gradient: bytes == null
            ? LinearGradient(colors: [project.theme, project.theme.withValues(alpha: 0.72)])
            : null,
        color: bytes != null ? Colors.grey.shade100 : null,
        borderRadius: BorderRadius.circular(radius),
        boxShadow: [BoxShadow(color: project.theme.withValues(alpha: 0.28), blurRadius: 10, offset: const Offset(0, 3))],
      ),
      clipBehavior: Clip.antiAlias,
      alignment: Alignment.center,
      child: bytes != null
          ? Image.memory(bytes, fit: BoxFit.cover, width: size, height: size)
          : Text(project.displayIcon, style: TextStyle(fontSize: fontSize)),
    );
  }
}
