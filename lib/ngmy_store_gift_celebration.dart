import 'package:flutter/material.dart';

import 'ngmy_popups.dart';

/// Celebration popup when a buyer receives a seller bonus gift with a purchase.
Future<void> showNgmyStoreGiftCelebration(
  BuildContext context, {
  required String productTitle,
  required String giftTitle,
}) {
  final gift = giftTitle.trim();
  final product = productTitle.trim();
  if (gift.isEmpty) return Future<void>.value();

  return Ngmy3DFloatingPopup.show(
    context,
    config: {
      'enabled': true,
      'themeId': 'gold',
      'title': 'YOU WON A GIFT!',
      'subtitle': 'Bonus: $gift\nWith your purchase: $product',
      'orbitWords': ['GIFT', 'WINNER', 'NGMY', 'STORE', 'CONGRATS', gift.toUpperCase()],
      'durationMs': 8500,
      'sizeScale': 1.18,
      'subtitleMaxLines': 4,
    },
  );
}
