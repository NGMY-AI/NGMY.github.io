import 'package:flutter/material.dart';

/// Bundled language flag — never depends on network emoji fonts.
class NgmyLangFlagBadge extends StatelessWidget {
  const NgmyLangFlagBadge({super.key, required this.langCode, this.height = 22});

  final String langCode;
  final double height;

  @override
  Widget build(BuildContext context) {
    final w = height * 1.36;
    return ClipRRect(
      borderRadius: BorderRadius.circular(height * 0.12),
      child: CustomPaint(
        size: Size(w, height),
        painter: langCode == 'sw' ? const _TzFlagPainter() : const _UsFlagPainter(),
      ),
    );
  }
}

class _UsFlagPainter extends CustomPainter {
  const _UsFlagPainter();

  @override
  void paint(Canvas canvas, Size size) {
    const red = Color(0xFFB22234);
    const white = Color(0xFFFFFFFF);
    const blue = Color(0xFF3C3B6E);

    final stripeH = size.height / 13;
    for (var i = 0; i < 13; i++) {
      canvas.drawRect(
        Rect.fromLTWH(0, i * stripeH, size.width, stripeH),
        Paint()..color = i.isEven ? red : white,
      );
    }

    final cantonW = size.width * 0.42;
    final cantonH = stripeH * 7;
    canvas.drawRect(Rect.fromLTWH(0, 0, cantonW, cantonH), Paint()..color = blue);

    final starPaint = Paint()..color = white;
    final starR = size.height * 0.045;
    for (var row = 0; row < 5; row++) {
      for (var col = 0; col < 6; col++) {
        final cx = cantonW * 0.12 + col * cantonW * 0.15 + (row.isOdd ? cantonW * 0.075 : 0);
        final cy = stripeH * 0.55 + row * stripeH * 0.95;
        if (cx < cantonW - starR && cy < cantonH - starR) {
          canvas.drawCircle(Offset(cx, cy), starR, starPaint);
        }
      }
    }
  }

  @override
  bool shouldRepaint(covariant _UsFlagPainter oldDelegate) => false;
}

class _TzFlagPainter extends CustomPainter {
  const _TzFlagPainter();

  @override
  void paint(Canvas canvas, Size size) {
    const green = Color(0xFF1EB53A);
    const blue = Color(0xFF00A3DD);
    const black = Color(0xFF000000);
    const gold = Color(0xFFFCD116);

    canvas.drawRect(Rect.fromLTWH(0, 0, size.width, size.height), Paint()..color = green);
    final pathBlue = Path()
      ..moveTo(0, size.height)
      ..lineTo(size.width, 0)
      ..lineTo(size.width, size.height)
      ..close();
    canvas.drawPath(pathBlue, Paint()..color = blue);

    final band = size.height * 0.18;
    final diag = Path()
      ..moveTo(-size.width * 0.08, size.height * 0.62)
      ..lineTo(size.width * 1.08, size.height * 0.38)
      ..lineTo(size.width * 1.08, size.height * 0.38 + band)
      ..lineTo(-size.width * 0.08, size.height * 0.62 + band)
      ..close();
    canvas.drawPath(diag, Paint()..color = gold);

    final inner = Path()
      ..moveTo(-size.width * 0.06, size.height * 0.625)
      ..lineTo(size.width * 1.06, size.height * 0.395)
      ..lineTo(size.width * 1.06, size.height * 0.395 + band * 0.55)
      ..lineTo(-size.width * 0.06, size.height * 0.625 + band * 0.55)
      ..close();
    canvas.drawPath(inner, Paint()..color = black);
  }

  @override
  bool shouldRepaint(covariant _TzFlagPainter oldDelegate) => false;
}

const _noteEmojiIcons = <String, IconData>{
  '📝': Icons.sticky_note_2_rounded,
  '📋': Icons.checklist_rounded,
  '📅': Icons.calendar_month_rounded,
  '🚀': Icons.rocket_launch_rounded,
  '💡': Icons.lightbulb_rounded,
  '✅': Icons.task_alt_rounded,
  '📊': Icons.bar_chart_rounded,
  '🤝': Icons.handshake_rounded,
  '✨': Icons.auto_awesome_rounded,
  '✈️': Icons.flight_rounded,
  '🍳': Icons.restaurant_rounded,
  '📚': Icons.menu_book_rounded,
  '💰': Icons.savings_rounded,
  '💪': Icons.fitness_center_rounded,
  '🎯': Icons.track_changes_rounded,
  '🎓': Icons.school_rounded,
  '🔍': Icons.search_rounded,
  '👤': Icons.person_rounded,
  '🎉': Icons.celebration_rounded,
  '🔬': Icons.science_rounded,
  '😀': Icons.sentiment_very_satisfied_rounded,
  '😊': Icons.sentiment_satisfied_rounded,
  '🙂': Icons.sentiment_neutral_rounded,
  '😎': Icons.wb_sunny_rounded,
  '🤩': Icons.star_rounded,
  '🥳': Icons.celebration_rounded,
  '😍': Icons.favorite_rounded,
  '🤔': Icons.psychology_rounded,
  '😴': Icons.bedtime_rounded,
  '👍': Icons.thumb_up_rounded,
  '👏': Icons.emoji_events_rounded,
  '🙌': Icons.volunteer_activism_rounded,
  '🔥': Icons.local_fire_department_rounded,
  '⭐': Icons.star_rounded,
  '📈': Icons.trending_up_rounded,
  '💼': Icons.business_center_rounded,
  '📌': Icons.push_pin_rounded,
  '🗂️': Icons.folder_copy_rounded,
  '📎': Icons.attach_file_rounded,
  '⏰': Icons.schedule_rounded,
  '📞': Icons.phone_rounded,
  '✉️': Icons.mail_rounded,
  '🏢': Icons.apartment_rounded,
  '❤️': Icons.favorite_rounded,
  '🏠': Icons.home_rounded,
  '🛒': Icons.shopping_cart_rounded,
  '🎵': Icons.music_note_rounded,
  '🎮': Icons.sports_esports_rounded,
  '☕': Icons.coffee_rounded,
  '🌿': Icons.eco_rounded,
  '🌞': Icons.wb_sunny_rounded,
  '🌙': Icons.nightlight_round_rounded,
  '🎁': Icons.card_giftcard_rounded,
  '•': Icons.circle,
  '→': Icons.arrow_forward_rounded,
  '←': Icons.arrow_back_rounded,
  '↑': Icons.arrow_upward_rounded,
  '↓': Icons.arrow_downward_rounded,
  '★': Icons.star_rounded,
  '☆': Icons.star_outline_rounded,
  '♥': Icons.favorite_rounded,
  '♦': Icons.diamond_rounded,
  '♣': Icons.grass_rounded,
  '♠': Icons.spa_rounded,
  '✓': Icons.check_rounded,
  '✗': Icons.close_rounded,
  '⚡': Icons.bolt_rounded,
  '⚠️': Icons.warning_amber_rounded,
  'ℹ️': Icons.info_outline_rounded,
};

IconData ngmyNoteEmojiIcon(String emoji) {
  final e = emoji.trim();
  if (e.isEmpty) return Icons.sticky_note_2_rounded;
  return _noteEmojiIcons[e] ?? Icons.sticky_note_2_rounded;
}

/// Note cover icon — bundled Material icon, always visible offline.
class NgmyNoteCoverIcon extends StatelessWidget {
  const NgmyNoteCoverIcon({
    super.key,
    required this.emoji,
    this.size = 22,
    this.color,
  });

  final String emoji;
  final double size;
  final Color? color;

  @override
  Widget build(BuildContext context) {
    return Icon(
      ngmyNoteEmojiIcon(emoji),
      size: size,
      color: color,
    );
  }
}
