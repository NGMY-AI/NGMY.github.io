import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_helper_gifts.dart';

class _Cfg {
  List<dynamic> civicHelperGiftPending = [];
  List<dynamic> civicHelperGiftInbox = [];
  List<dynamic> civicRegistryMembers = [];
}

Map<String, dynamic> _member(String email, int streak, String lastCampaign) => {
      'email': email,
      'fullName': 'Tester',
      'firstHelperStreak': streak,
      'lastFirstHelperCampaignId': lastCampaign,
    };

NgmyHelperGift _gift(String email, {String milestone = '', int forStreak = 0, bool redeemed = false, DateTime? sent}) =>
    NgmyHelperGift(
      id: 'g1', email: email, fullName: 'Tester', giftName: 'Gift', amount: 20, styleId: 'gold_envelope',
      storeAddress: '', storeSellerEmail: 'store@x.com', storeSellerName: 'Store', storeListingId: '',
      qrPayload: 'NGMYHELPERGIFT1|t', token: 't', createdAt: (sent ?? DateTime.now()).toUtc().toIso8601String(),
      grantedBy: 'admin', redeemed: redeemed, milestoneKey: milestone, forStreak: forStreak,
    );

void main() {
  test('3 first-helper wins create one admin alert', () {
    final c = _Cfg()..civicRegistryMembers = [_member('a@x.com', 3, 'camp3')];
    NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(c);
    expect(NgmyCivicHelperGifts.openPendingNeedingAdminGrant(c).length, 1);
  });

  test('after the card is sent AND used, the same 3 wins never pop up again', () {
    final key = NgmyCivicHelperGifts.milestoneKeyFor('a@x.com', 'camp3', 3);
    final c = _Cfg()
      ..civicRegistryMembers = [_member('a@x.com', 3, 'camp3')]
      ..civicHelperGiftInbox = [_gift('a@x.com', milestone: key, forStreak: 3, redeemed: true).toMap()];
    NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(c);
    expect(NgmyCivicHelperGifts.openPendingNeedingAdminGrant(c), isEmpty);
  });

  test('old cards (sent before this fix) also stop the pop-up', () {
    final c = _Cfg()
      ..civicRegistryMembers = [_member('a@x.com', 3, 'camp3')]
      ..civicHelperGiftInbox = [_gift('a@x.com', redeemed: true).toMap()];
    NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(c);
    expect(NgmyCivicHelperGifts.openPendingNeedingAdminGrant(c), isEmpty);
  });

  test('the NEXT 3 wins earn a new card', () {
    final key3 = NgmyCivicHelperGifts.milestoneKeyFor('a@x.com', 'camp3', 3);
    final c = _Cfg()
      ..civicRegistryMembers = [_member('a@x.com', 6, 'camp6')]
      ..civicHelperGiftInbox = [_gift('a@x.com', milestone: key3, forStreak: 3, redeemed: true, sent: DateTime.now().subtract(const Duration(days: 10))).toMap()];
    NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(c);
    expect(NgmyCivicHelperGifts.openPendingNeedingAdminGrant(c).length, 1);
  });

  test('cards expire after one week and stop popping up for the member', () async {
    final old = _gift('a@x.com', sent: DateTime.now().subtract(const Duration(days: 8)));
    final fresh = _gift('a@x.com', sent: DateTime.now().subtract(const Duration(days: 2)));
    expect(old.isExpired, isTrue);
    expect(old.isActive, isFalse);
    expect(fresh.isActive, isTrue);
  });
}
