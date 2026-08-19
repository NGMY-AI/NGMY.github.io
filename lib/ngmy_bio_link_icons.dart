import 'package:flutter/material.dart';

/// Built-in icons users can pick for Bio link cards (instead of gallery photos).
class NgmyBioLinkIconChoice {
  const NgmyBioLinkIconChoice(this.label, this.icon);
  final String label;
  final IconData icon;
  int get codePoint => icon.codePoint;
}

/// Large set of Material icons for social apps, messaging, commerce, and general links.
const List<NgmyBioLinkIconChoice> kNgmyBioLinkIcons = [
  NgmyBioLinkIconChoice('Messenger', Icons.messenger_outline_rounded),
  NgmyBioLinkIconChoice('WhatsApp', Icons.chat_rounded),
  NgmyBioLinkIconChoice('Telegram', Icons.send_rounded),
  NgmyBioLinkIconChoice('X / Twitter', Icons.alternate_email_rounded),
  NgmyBioLinkIconChoice('LinkedIn', Icons.work_rounded),
  NgmyBioLinkIconChoice('Discord', Icons.headset_mic_rounded),
  NgmyBioLinkIconChoice('Snapchat', Icons.flash_on_rounded),
  NgmyBioLinkIconChoice('Pinterest', Icons.push_pin_rounded),
  NgmyBioLinkIconChoice('Reddit', Icons.forum_rounded),
  NgmyBioLinkIconChoice('Twitch', Icons.videogame_asset_rounded),
  NgmyBioLinkIconChoice('Spotify', Icons.library_music_rounded),
  NgmyBioLinkIconChoice('Apple Music', Icons.apple),
  NgmyBioLinkIconChoice('SoundCloud', Icons.graphic_eq_rounded),
  NgmyBioLinkIconChoice('Email', Icons.email_rounded),
  NgmyBioLinkIconChoice('Phone', Icons.phone_rounded),
  NgmyBioLinkIconChoice('SMS', Icons.sms_rounded),
  NgmyBioLinkIconChoice('Website', Icons.language_rounded),
  NgmyBioLinkIconChoice('Link', Icons.link_rounded),
  NgmyBioLinkIconChoice('Shop', Icons.storefront_rounded),
  NgmyBioLinkIconChoice('Cart', Icons.shopping_cart_rounded),
  NgmyBioLinkIconChoice('Bag', Icons.local_offer_rounded),
  NgmyBioLinkIconChoice('Payment', Icons.payments_rounded),
  NgmyBioLinkIconChoice('Wallet', Icons.account_balance_wallet_rounded),
  NgmyBioLinkIconChoice('Bank', Icons.account_balance_rounded),
  NgmyBioLinkIconChoice('Crypto', Icons.currency_bitcoin),
  NgmyBioLinkIconChoice('Donate', Icons.volunteer_activism_rounded),
  NgmyBioLinkIconChoice('Calendar', Icons.event_rounded),
  NgmyBioLinkIconChoice('Ticket', Icons.confirmation_number_rounded),
  NgmyBioLinkIconChoice('Map', Icons.map_rounded),
  NgmyBioLinkIconChoice('Location', Icons.place_rounded),
  NgmyBioLinkIconChoice('Home', Icons.home_rounded),
  NgmyBioLinkIconChoice('Person', Icons.person_rounded),
  NgmyBioLinkIconChoice('Group', Icons.groups_rounded),
  NgmyBioLinkIconChoice('Heart', Icons.favorite_rounded),
  NgmyBioLinkIconChoice('Star', Icons.star_rounded),
  NgmyBioLinkIconChoice('Fire', Icons.local_fire_department_rounded),
  NgmyBioLinkIconChoice('Camera', Icons.photo_camera_rounded),
  NgmyBioLinkIconChoice('Video', Icons.videocam_rounded),
  NgmyBioLinkIconChoice('Podcast', Icons.mic_rounded),
  NgmyBioLinkIconChoice('Book', Icons.menu_book_rounded),
  NgmyBioLinkIconChoice('School', Icons.school_rounded),
  NgmyBioLinkIconChoice('News', Icons.newspaper_rounded),
  NgmyBioLinkIconChoice('Blog', Icons.article_rounded),
  NgmyBioLinkIconChoice('Portfolio', Icons.dashboard_customize_rounded),
  NgmyBioLinkIconChoice('Resume', Icons.description_rounded),
  NgmyBioLinkIconChoice('Download', Icons.download_rounded),
  NgmyBioLinkIconChoice('Cloud', Icons.cloud_rounded),
  NgmyBioLinkIconChoice('Drive', Icons.folder_rounded),
  NgmyBioLinkIconChoice('GitHub', Icons.code_rounded),
  NgmyBioLinkIconChoice('Support', Icons.support_agent_rounded),
  NgmyBioLinkIconChoice('Help', Icons.help_rounded),
  NgmyBioLinkIconChoice('Info', Icons.info_rounded),
  NgmyBioLinkIconChoice('Settings', Icons.settings_rounded),
  NgmyBioLinkIconChoice('Lock', Icons.lock_rounded),
  NgmyBioLinkIconChoice('Key', Icons.vpn_key_rounded),
  NgmyBioLinkIconChoice('Gift', Icons.card_giftcard_rounded),
  NgmyBioLinkIconChoice('Food', Icons.restaurant_rounded),
  NgmyBioLinkIconChoice('Coffee', Icons.coffee_rounded),
  NgmyBioLinkIconChoice('Travel', Icons.flight_rounded),
  NgmyBioLinkIconChoice('Car', Icons.directions_car_rounded),
  NgmyBioLinkIconChoice('Bike', Icons.directions_bike_rounded),
  NgmyBioLinkIconChoice('Gym', Icons.fitness_center_rounded),
  NgmyBioLinkIconChoice('Health', Icons.health_and_safety_rounded),
  NgmyBioLinkIconChoice('Pet', Icons.pets_rounded),
  NgmyBioLinkIconChoice('Game', Icons.sports_esports_rounded),
  NgmyBioLinkIconChoice('Sports', Icons.sports_soccer_rounded),
  NgmyBioLinkIconChoice('Art', Icons.palette_rounded),
  NgmyBioLinkIconChoice('Design', Icons.brush_rounded),
  NgmyBioLinkIconChoice('Photo', Icons.image_rounded),
  NgmyBioLinkIconChoice('Gallery', Icons.collections_rounded),
  NgmyBioLinkIconChoice('Live', Icons.live_tv_rounded),
  NgmyBioLinkIconChoice('Stream', Icons.cast_rounded),
  NgmyBioLinkIconChoice('Chat', Icons.chat_bubble_rounded),
  NgmyBioLinkIconChoice('Call', Icons.call_rounded),
  NgmyBioLinkIconChoice('Video Call', Icons.video_call_rounded),
  NgmyBioLinkIconChoice('Globe', Icons.public_rounded),
  NgmyBioLinkIconChoice('RSS', Icons.rss_feed_rounded),
  NgmyBioLinkIconChoice('QR', Icons.qr_code_2_rounded),
  NgmyBioLinkIconChoice('Share', Icons.share_rounded),
  NgmyBioLinkIconChoice('Add', Icons.add_circle_rounded),
  NgmyBioLinkIconChoice('Check', Icons.check_circle_rounded),
  NgmyBioLinkIconChoice('Bolt', Icons.bolt_rounded),
  NgmyBioLinkIconChoice('Crown', Icons.workspace_premium_rounded),
  NgmyBioLinkIconChoice('Trophy', Icons.emoji_events_rounded),
  NgmyBioLinkIconChoice('Rocket', Icons.rocket_launch_rounded),
];

IconData? ngmyBioLinkIconFromCodePoint(int codePoint) {
  if (codePoint == 0) return null;
  for (final choice in kNgmyBioLinkIcons) {
    if (choice.codePoint == codePoint) return choice.icon;
  }
  return Icons.link_rounded;
}

/// Picture icons shown at the bottom of the link-icon picker. These are free
/// and do not count toward the 2 gallery-photo limit.
class NgmyBioBrandLinkIcon {
  const NgmyBioBrandLinkIcon({required this.id, required this.label, required this.asset});
  final String id;
  final String label;
  final String asset;
}

const List<NgmyBioBrandLinkIcon> kNgmyBioBrandLinkIcons = [
  NgmyBioBrandLinkIcon(id: 'instagram', label: 'Instagram', asset: 'assets/bio_link_icons/instagram.png'),
  NgmyBioBrandLinkIcon(id: 'youtube', label: 'YouTube', asset: 'assets/bio_link_icons/youtube.png'),
  NgmyBioBrandLinkIcon(id: 'tiktok', label: 'TikTok', asset: 'assets/bio_link_icons/tiktok.png'),
  NgmyBioBrandLinkIcon(id: 'facebook', label: 'Facebook', asset: 'assets/bio_link_icons/facebook.png'),
];

String? ngmyBioBrandLinkAsset(String id) {
  final clean = id.trim().toLowerCase();
  if (clean.isEmpty) return null;
  for (final brand in kNgmyBioBrandLinkIcons) {
    if (brand.id == clean) return brand.asset;
  }
  return null;
}

String? ngmyBioBrandAssetForLink({
  required int iconCodePoint,
  required String iconAsset,
}) {
  return ngmyBioBrandLinkAsset(iconAsset) ??
      ngmyBioBrandLinkAsset(ngmyBioBrandIdFromLegacyCodePoint(iconCodePoint));
}

/// Old Material icons for these brands become the new picture icons.
String ngmyBioBrandIdFromLegacyCodePoint(int codePoint) {
  if (codePoint == Icons.facebook.codePoint) return 'facebook';
  if (codePoint == Icons.camera_alt_rounded.codePoint) return 'instagram';
  if (codePoint == Icons.music_note_rounded.codePoint) return 'tiktok';
  if (codePoint == Icons.play_circle_filled_rounded.codePoint) return 'youtube';
  return '';
}

Widget ngmyBioCircularBrandIcon(String asset, {required double size}) {
  return SizedBox(
    width: size,
    height: size,
    child: ClipOval(
      child: Image.asset(
        asset,
        width: size,
        height: size,
        fit: BoxFit.cover,
        filterQuality: FilterQuality.high,
        errorBuilder: (_, _, _) => Icon(Icons.link_rounded, size: size * 0.5),
      ),
    ),
  );
}

const int kNgmyBioMaxLinkGalleryPhotos = 2;
