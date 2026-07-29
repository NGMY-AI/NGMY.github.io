import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

/// Bundled in pubspec — fallback text emoji on web when no Twemoji PNG exists.
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

/// Twemoji asset paths to try (bundled under [assets/twemoji/]).
List<String> ngmyTwemojiAssetCandidates(String emoji) {
  final trimmed = emoji.trim();
  if (trimmed.isEmpty) return const [];

  final runes = trimmed.runes.toList();
  final full = runes.map((r) => r.toRadixString(16)).join('-');
  final noVs = runes.where((r) => r != 0xFE0F).map((r) => r.toRadixString(16)).join('-');

  final out = <String>{};
  if (full.isNotEmpty) out.add('assets/twemoji/$full.png');
  if (noVs.isNotEmpty && noVs != full) out.add('assets/twemoji/$noVs.png');
  return out.toList();
}

/// Colorful emoji — Twemoji PNG on web (always offline-safe), system emoji elsewhere.
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
    if (kIsWeb) {
      final candidates = ngmyTwemojiAssetCandidates(emoji);
      if (candidates.isNotEmpty) {
        return _NgmyTwemojiImage(
          candidates: candidates,
          size: fontSize,
          fallback: _textEmoji(),
        );
      }
    }
    return _textEmoji();
  }

  Widget _textEmoji() {
    return Text(
      emoji,
      textAlign: textAlign,
      style: ngmyEmojiTextStyle(fontSize: fontSize, color: color, height: height),
    );
  }
}

class _NgmyTwemojiImage extends StatefulWidget {
  const _NgmyTwemojiImage({
    required this.candidates,
    required this.size,
    required this.fallback,
  });

  final List<String> candidates;
  final double size;
  final Widget fallback;

  @override
  State<_NgmyTwemojiImage> createState() => _NgmyTwemojiImageState();
}

class _NgmyTwemojiImageState extends State<_NgmyTwemojiImage> {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    if (_index >= widget.candidates.length) return widget.fallback;

    final side = widget.size * 1.12;
    return SizedBox(
      width: side,
      height: side,
      child: Image.asset(
        widget.candidates[_index],
        width: side,
        height: side,
        fit: BoxFit.contain,
        gaplessPlayback: true,
        errorBuilder: (_, __, ___) {
          WidgetsBinding.instance.addPostFrameCallback((_) {
            if (!mounted) return;
            if (_index + 1 < widget.candidates.length) {
              setState(() => _index += 1);
            } else if (_index != widget.candidates.length) {
              setState(() => _index = widget.candidates.length);
            }
          });
          return widget.fallback;
        },
      ),
    );
  }
}
