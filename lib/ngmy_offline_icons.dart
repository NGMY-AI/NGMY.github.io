import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Bundled in pubspec — same colorful emoji as online CanvasKit, works offline on web.
const kNgmyEmojiFontFamily = 'Noto Color Emoji';

/// Emoji [TextStyle]: bundled Noto Color Emoji on web; system emoji on mobile/desktop.
TextStyle ngmyEmojiTextStyle({
  required double fontSize,
  Color? color,
  double? height,
  FontWeight? fontWeight,
}) {
  return TextStyle(
    fontSize: fontSize,
    height: height ?? 1.0,
    color: color,
    fontWeight: fontWeight,
    fontFamily: kIsWeb ? kNgmyEmojiFontFamily : null,
    fontFamilyFallback: kIsWeb ? const [kNgmyEmojiFontFamily] : null,
  );
}

/// Colorful emoji text — original look, visible offline (web uses bundled font).
class NgmyOfflineEmoji extends StatelessWidget {
  const NgmyOfflineEmoji(
    this.emoji, {
    super.key,
    this.fontSize = 22,
    this.color,
    this.height,
    this.textAlign,
  });

  final String emoji;
  final double fontSize;
  final Color? color;
  final double? height;
  final TextAlign? textAlign;

  @override
  Widget build(BuildContext context) {
    return Text(
      emoji,
      textAlign: textAlign,
      style: ngmyEmojiTextStyle(fontSize: fontSize, color: color, height: height),
    );
  }
}
