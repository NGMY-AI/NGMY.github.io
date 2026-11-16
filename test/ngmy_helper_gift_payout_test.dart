import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_civic_helper_gift_ui.dart';
import 'package:ngmy/ngmy_civic_helper_gifts.dart';
import 'package:shared_preferences/shared_preferences.dart';

// A helper gift (3 first-helps in a row) can be given with Cash App or Zelle, with no NGMY store: the member gets the
// number to call or text, sees the gift every time the app opens, and it stops only when they tap Received.

NgmyHelperGift _payout({String method = 'cashapp', String created = '2020-01-01T00:00:00Z'}) => NgmyHelperGift(
      id: 'hgift_1',
      email: 'asende@login.com',
      fullName: 'Asende Mkombi',
      giftName: 'First Helper Reward',
      amount: 25,
      styleId: 'gold_envelope',
      storeAddress: '478-555-0101',
      storeSellerEmail: 'admin@ngmy.org',
      storeSellerName: 'Text me your Cash App name',
      storeListingId: '$kNgmyHelperGiftPayoutPrefix$method',
      qrPayload: 'NGMYHELPERGIFT1|HGTEST1',
      token: 'HGTEST1',
      createdAt: created,
      grantedBy: 'admin@ngmy.org',
    );

NgmyHelperGiftPending _pending() => NgmyHelperGiftPending(
      id: 'hgpend_1',
      email: 'asende@login.com',
      fullName: 'Asende Mkombi',
      registryId: 'GA77',
      phone: '4785550000',
      state: 'Georgia',
      city: 'Atlanta',
      streak: 3,
      createdAt: DateTime.now().toUtc().toIso8601String(),
    );

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  test('a Cash App / Zelle gift knows its method, contact number and note, and never runs out', () {
    final g = _payout(created: '2020-01-01T00:00:00Z');
    expect(g.isMoneyPayout, isTrue);
    expect(g.payoutMethodLabel, 'Cash App');
    expect(_payout(method: 'zelle').payoutMethodLabel, 'Zelle');
    expect(g.payoutContactPhone, '478-555-0101');
    expect(g.payoutNote, 'Text me your Cash App name');
    expect(g.isExpired, isFalse, reason: 'it stays until the member says they received it');
    expect(g.isActive, isTrue);
    // A store card still expires after a week.
    final store = NgmyHelperGift.fromMap({..._payout().toMap(), 'storeListingId': 'listing_1'});
    expect(store.isMoneyPayout, isFalse);
    expect(store.isExpired, isTrue);
  });

  test('the gift pops up every time until Received is tapped (closing it is not enough)', () async {
    final config = AppConfig();
    NgmyCivicHelperGifts.setInbox(config, [_payout(created: DateTime.now().toUtc().toIso8601String())]);
    expect(await NgmyCivicHelperGifts.giftsNeedingUserPopup(config, 'asende@login.com'), hasLength(1));
    await NgmyCivicHelperGifts.markGiftPopupSeen('HGTEST1');
    expect(await NgmyCivicHelperGifts.giftsNeedingUserPopup(config, 'asende@login.com'), hasLength(1), reason: 'seen is not received');
    await NgmyCivicHelperGifts.markGiftReceived('HGTEST1');
    expect(await NgmyCivicHelperGifts.giftsNeedingUserPopup(config, 'asende@login.com'), isEmpty, reason: 'Received stops it for good');
    expect(await NgmyCivicHelperGifts.giftsNeedingUserPopup(config, 'someone@else.com'), isEmpty);
  });

  testWidgets('the member card shows the amount, the method and the number, and Received closes it', (tester) async {
    await tester.binding.setSurfaceSize(const Size(430, 1000));
    var received = 0;
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Center(
          child: NgmyHelperGiftPayoutPanel(gift: _payout(), onReceived: () async => received++, onLater: () {}),
        ),
      ),
    ));
    expect(find.text('\$25.00'), findsOneWidget);
    expect(find.text('Kwa Cash App'), findsOneWidget);
    expect(find.text('478-555-0101'), findsOneWidget);
    expect(find.text('Text me your Cash App name'), findsOneWidget);
    await tester.tap(find.byKey(const Key('helper-gift-payout-received')));
    await tester.pump();
    expect(received, 1);
  });

  testWidgets('the admin can send a Cash App gift with no NGMY store at all', (tester) async {
    await tester.binding.setSurfaceSize(const Size(430, 2400));
    Map<String, Object?>? sent;
    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: TextButton(
              onPressed: () => showNgmyHelperGiftGrantSheet(
                context: context,
                pending: _pending(),
                storeListings: const [],
                onGrant: ({
                  required String giftName,
                  required double amount,
                  required String styleId,
                  required String storeAddress,
                  required String storeSellerEmail,
                  required String storeSellerName,
                  required String storeListingId,
                }) async {
                  sent = {'amount': amount, 'phone': storeAddress, 'note': storeSellerName, 'method': storeListingId, 'seller': storeSellerEmail};
                  return _payout();
                },
              ),
              child: const Text('open'),
            ),
          ),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    // The sheet first reads the store list (real async work), then opens.
    for (var i = 0; i < 120 && find.text('Present style').evaluate().isEmpty; i++) {
      await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 100)));
      await tester.pump(const Duration(milliseconds: 100));
    }
    await tester.pumpAndSettle();
    final sheetList = find.descendant(of: find.byKey(const Key('helper-gift-grant-list')), matching: find.byType(Scrollable)).first;
    await tester.scrollUntilVisible(find.byKey(const Key('helper-gift-method-cashapp')), 200, scrollable: sheetList);
    await tester.tap(find.byKey(const Key('helper-gift-method-cashapp')));
    await tester.pumpAndSettle();
    await tester.scrollUntilVisible(find.byKey(const Key('helper-gift-pay-note')), 200, scrollable: sheetList);
    await tester.enterText(find.byKey(const Key('helper-gift-pay-phone')), '478-555-0101');
    await tester.enterText(find.byKey(const Key('helper-gift-pay-note')), 'Text me first');
    await tester.scrollUntilVisible(find.byKey(const Key('helper-gift-send')), 200, scrollable: sheetList);
    await tester.tap(find.byKey(const Key('helper-gift-send')));
    await tester.pumpAndSettle();
    expect(sent, isNotNull, reason: 'no store needed');
    expect(sent!['method'], '${kNgmyHelperGiftPayoutPrefix}cashapp');
    expect(sent!['phone'], '478-555-0101');
    expect(sent!['note'], 'Text me first');
  });
}
