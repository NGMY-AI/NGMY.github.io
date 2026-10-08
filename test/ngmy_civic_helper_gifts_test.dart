import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_helper_gift_ui.dart';
import 'package:ngmy/ngmy_civic_helper_gifts.dart';

class _GiftConfig {
  List<Map<String, dynamic>> civicRegistryMembers = [];
  List<Map<String, dynamic>> civicHelperGiftPending = [];
  List<Map<String, dynamic>> civicHelperGiftInbox = [];
}

Map<String, dynamic> _member(String email, {int streak = 0}) => {
      'email': email,
      'fullName': email.split('@').first,
      'registryId': 'GA-${email.hashCode.abs()}',
      'state': 'Georgia',
      'city': 'Atlanta',
      'firstHelperStreak': streak,
    };

void main() {
  test('third consecutive first-helper campaign creates one admin alert', () {
    final config = _GiftConfig();
    final member = _member('helper@example.com');
    config.civicRegistryMembers = [member];

    expect(
      NgmyCivicHelperGifts.recordFirstHelperContribution(
        config: config,
        memberRecord: member,
        campaignId: 'campaign-1',
        isFirstInCampaign: true,
      ),
      isNull,
    );
    expect(
      NgmyCivicHelperGifts.recordFirstHelperContribution(
        config: config,
        memberRecord: member,
        campaignId: 'campaign-2',
        isFirstInCampaign: true,
      ),
      isNull,
    );
    final pending = NgmyCivicHelperGifts.recordFirstHelperContribution(
      config: config,
      memberRecord: member,
      campaignId: 'campaign-3',
      isFirstInCampaign: true,
    );

    expect(pending, isNotNull);
    expect(pending!.email, 'helper@example.com');
    expect(pending.streak, 3);
    expect(NgmyCivicHelperGifts.openPendingCount(config), 1);

    // Saving/updating the same campaign cannot create a duplicate alert.
    expect(
      NgmyCivicHelperGifts.recordFirstHelperContribution(
        config: config,
        memberRecord: member,
        campaignId: 'campaign-3',
        isFirstInCampaign: true,
      ),
      isNull,
    );
    expect(NgmyCivicHelperGifts.openPendingCount(config), 1);
  });

  test('a different first helper breaks the previous helper streak', () {
    final config = _GiftConfig()
      ..civicRegistryMembers = [
        _member('first@example.com', streak: 2),
        _member('next@example.com'),
      ];

    NgmyCivicHelperGifts.resetOtherFirstHelperStreaks(
      config: config,
      winnerEmail: 'next@example.com',
    );

    expect(config.civicRegistryMembers.first['firstHelperStreak'], 0);
    expect(config.civicRegistryMembers.last['firstHelperStreak'], 0);
  });

  test('roster streak 3 creates a pending alert for the admin', () {
    final config = _GiftConfig()
      ..civicRegistryMembers = [
        _member('helper@example.com', streak: 3),
      ];

    expect(NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(config), 1);
    expect(NgmyCivicHelperGifts.openPendingCount(config), 1);
    expect(NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(config), 0);
  });

  test('store picker lists stores not product titles', () {
    final stores = ngmyHelperGiftStoreOptions([
      {
        'title': 'Blue Sneakers',
        'sellerEmail': 'shop@example.com',
        'sellerName': 'Downtown NGMY',
        'storeName': 'Downtown NGMY',
        'address': '100 Main St',
      },
      {
        'title': 'Red Hat',
        'sellerEmail': 'shop@example.com',
        'sellerName': 'Downtown NGMY',
        'storeName': 'Downtown NGMY',
      },
      {
        'title': 'Other Item',
        'sellerEmail': 'other@example.com',
        'storeName': 'Westside Market',
      },
    ]);
    expect(stores.length, 2);
    expect(stores.any((s) => s['title'] == 'Downtown NGMY'), isTrue);
    expect(stores.any((s) => s['title'] == 'Westside Market'), isTrue);
    expect(stores.any((s) => s['title'] == 'Blue Sneakers'), isFalse);
  });

  test('gift QR accepts only the helper-gift prefix or token', () {
    expect(
      NgmyCivicHelperGifts.parseTokenFromPayload('NGMYHELPERGIFT1|HG23456789'),
      'HG23456789',
    );
    expect(NgmyCivicHelperGifts.parseTokenFromPayload('HG23456789'), 'HG23456789');
    expect(NgmyCivicHelperGifts.parseTokenFromPayload('random QR'), isNull);
  });
}
