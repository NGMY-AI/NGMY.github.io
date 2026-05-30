import 'package:flutter/material.dart';
import 'dart:ui' as ui;
import 'models.dart';
import 'utils.dart';

const String kNgmyDefaultLogoUrl = 'https://i.ibb.co/LhbMvz9/ngmy-logo.png';

Widget ngmyLogoImage(String? logoUrl, {double? width, double? height, BoxFit fit = BoxFit.cover}) {
  final primary = (logoUrl ?? '').trim().isNotEmpty ? logoUrl!.trim() : kNgmyDefaultLogoUrl;
  return Image.network(
    primary,
    width: width,
    height: height,
    fit: fit,
    gaplessPlayback: true,
    errorBuilder: (_, __, ___) => Image.network(
      kNgmyDefaultLogoUrl,
      width: width,
      height: height,
      fit: fit,
      errorBuilder: (_, __, ___) => Container(
        width: width,
        height: height,
        color: const Color(0xFF00B25A),
        alignment: Alignment.center,
        child: const Text('NGMY', style: TextStyle(color: Colors.white, fontWeight: FontWeight.w900, fontSize: 10)),
      ),
    ),
  );
}

Widget ngmyLogoCircle(String? logoUrl, {double size = 48}) {
  return SizedBox(
    width: size,
    height: size,
    child: ClipOval(child: ngmyLogoImage(logoUrl, width: size, height: size)),
  );
}

Widget ngmyGlassComposerBar({required bool isDark, required Widget child, BorderRadius? borderRadius}) {
  final radius = borderRadius ?? const BorderRadius.vertical(top: Radius.circular(26));
  return ClipRRect(
    borderRadius: radius,
    child: BackdropFilter(
      filter: ui.ImageFilter.blur(sigmaX: 14, sigmaY: 14),
      child: Container(
        decoration: BoxDecoration(
          color: (isDark ? const Color(0xFF121726) : Colors.white).withOpacity(0.55),
          borderRadius: radius,
          border: Border.all(color: isDark ? Colors.white.withOpacity(0.16) : Colors.black.withOpacity(0.07)),
        ),
        child: child,
      ),
    ),
  );
}

class FloatingTitle extends StatelessWidget {
  final String title; final Widget? leading; final Widget? trailing; final VoidCallback? onTap;
  const FloatingTitle({super.key, required this.title, this.leading, this.trailing, this.onTap});
  @override Widget build(BuildContext context) { return GestureDetector(onTap: onTap, child: Container(height: 60, padding: const EdgeInsets.symmetric(horizontal: 10), decoration: BoxDecoration(color: Theme.of(context).cardColor, borderRadius: BorderRadius.circular(30), boxShadow: [BoxShadow(color: Colors.black.withOpacity(0.08), blurRadius: 15, offset: const Offset(0, 5))]), child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [leading ?? const SizedBox(width: 40), Expanded(child: Center(child: Text(title, style: const TextStyle(fontWeight: FontWeight.w900, fontSize: 15, letterSpacing: 1)))), trailing ?? const SizedBox(width: 40)]))); }
}
