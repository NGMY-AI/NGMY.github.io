import 'package:flutter_test/flutter_test.dart';
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

  test('gift QR accepts only the helper-gift prefix or token', () {
    expect(
      NgmyCivicHelperGifts.parseTokenFromPayload('NGMYHELPERGIFT1|HG23456789'),
      'HG23456789',
    );
    expect(NgmyCivicHelperGifts.parseTokenFromPayload('HG23456789'), 'HG23456789');
    expect(NgmyCivicHelperGifts.parseTokenFromPayload('random QR'), isNull);
  });
}
