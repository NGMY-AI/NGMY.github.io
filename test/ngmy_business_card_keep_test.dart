import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:ngmy/ngmy_business_card_models.dart';
import 'package:ngmy/ngmy_business_card_storage.dart';
import 'package:ngmy/ngmy_card_nfc.dart';
import 'package:ngmy/ngmy_card_share.dart';
import 'package:ngmy/ngmy_home_glass_cards.dart';

NgmySpendingEntry _card(String id, String name) => NgmySpendingEntry(
      id: id,
      amount: 0,
      description: name,
      category: 'Business Card',
      date: DateTime(2025, 1, 1),
      businessCardJson: jsonEncode(NgmyBusinessCardDocument(id: id, fullName: name, jobTitle: 'Teacher', company: 'NGMY, Inc.', phone: '+255 700 111 222', email: 'a@b.co', website: 'https://ngmy.org', address: 'Plot 5; Dar es Salaam', tagline: 'Learn\nand grow').toJson()),
    );

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  group('the home cards stay saved', () {
    test('a change made in the background never wipes a card added a moment ago', () async {
      const email = 'k@x.y';
      await NgmyHomeLocalStore.saveSpending(email, [_card('1', 'Amani Juma')], syncCloud: false);
      // The background work started when only card 1 existed ...
      final stale = await NgmyHomeLocalStore.loadSpending(email);
      // ... meanwhile the person puts a second card on Home ...
      await NgmyHomeLocalStore.saveSpending(email, [_card('2', 'Zuri Kofi'), ...stale], syncCloud: false);
      // ... and then the background work finishes with an updated version of card 1.
      final changed = stale.first.copyWith(description: 'Amani J.');
      await NgmyHomeLocalStore.patchSpending(email, upsert: {'1': changed}, syncCloud: false);
      final now = await NgmyHomeLocalStore.loadSpending(email);
      expect(now.map((e) => e.id).toSet(), {'1', '2'}, reason: 'both cards are still there');
      expect(now.firstWhere((e) => e.id == '1').description, 'Amani J.');
    });

    test('a card can be removed by the background work without touching the others', () async {
      const email = 'k@x.y';
      await NgmyHomeLocalStore.saveSpending(email, [_card('1', 'A'), _card('2', 'B'), _card('3', 'C')], syncCloud: false);
      await NgmyHomeLocalStore.patchSpending(email, remove: {'2'}, syncCloud: false);
      expect((await NgmyHomeLocalStore.loadSpending(email)).map((e) => e.id), ['1', '3']);
    });

    test('a damaged or missing main copy is brought back from the second copy', () async {
      const email = 'k@x.y';
      await NgmyHomeLocalStore.saveSpending(email, [_card('1', 'A'), _card('2', 'B')], syncCloud: false);
      final prefs = await SharedPreferences.getInstance();
      // The main copy is cut short, like a write that never finished.
      await prefs.setString('ngmy_home_spending_v1_$email', '[{"id":"1","amo');
      var back = await NgmyHomeLocalStore.loadSpending(email);
      expect(back.length, 2);
      // And when it is gone altogether.
      await prefs.remove('ngmy_home_spending_v1_$email');
      back = await NgmyHomeLocalStore.loadSpending(email);
      expect(back.length, 2);
      expect(prefs.getString('ngmy_home_spending_v1_$email'), isNotNull, reason: 'the main copy is written again');
    });

    test('cards of studio saved by an older version are found under the new key', () async {
      const email = 'Old@User.com';
      final oldKey = '${kNgmyBusinessCardsKey}_${email.toLowerCase().trim().hashCode.abs()}';
      SharedPreferences.setMockInitialValues({
        oldKey: jsonEncode([
          {'id': 'x1', 'fullName': 'Old Card'}
        ]),
      });
      final cards = await loadNgmyBusinessCards(userEmail: email);
      expect(cards.single['fullName'], 'Old Card');
      final prefs = await SharedPreferences.getInstance();
      expect(prefs.getString('${kNgmyBusinessCardsKey}_u_old@user.com'), isNotNull);
      // A new card goes under the key made from the email, and is there next time.
      await saveNgmyBusinessCard({'id': 'x2', 'fullName': 'New Card'}, userEmail: email);
      expect((await loadNgmyBusinessCards(userEmail: email)).map((e) => e['id']).toSet(), {'x1', 'x2'});
    });
  });

  group('sharing a card with another phone', () {
    test('the contact file has every detail, and the special characters are protected', () {
      final d = NgmyBusinessCardDocument.fromJson(jsonDecode(_card('1', 'Amani Juma Mwangi').businessCardJson) as Map<String, dynamic>);
      final v = ngmyVCard(d);
      expect(v, startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n'));
      expect(v, contains('N:Mwangi;Amani Juma;;;'));
      expect(v, contains('FN:Amani Juma Mwangi'));
      expect(v, contains(r'ORG:NGMY\, Inc.'));
      expect(v, contains('TITLE:Teacher'));
      expect(v, contains('TEL;TYPE=CELL:+255 700 111 222'));
      expect(v, contains('EMAIL;TYPE=INTERNET:a@b.co'));
      expect(v, contains('URL:https://ngmy.org'));
      expect(v, contains(r'ADR;TYPE=WORK:;;Plot 5\; Dar es Salaam;;;;'));
      expect(v, contains(r'NOTE:Learn\nand grow'));
      expect(v, endsWith('END:VCARD\r\n'));
      expect(ngmyCardFileName(d), 'Amani_Juma_Mwangi.vcf');
    });

    test('a small logo goes in as the photo, a big one is left out, and long lines are folded', () {
      final small = NgmyBusinessCardDocument(id: 'a', fullName: 'A B', logoBase64: base64Encode(List.filled(3000, 7)));
      final big = NgmyBusinessCardDocument(id: 'b', fullName: 'A B', logoBase64: base64Encode(List.filled(60000, 7)));
      expect(ngmyVCard(small), contains('PHOTO;ENCODING=b;TYPE=JPEG:'));
      expect(ngmyVCard(big), isNot(contains('PHOTO')));
      expect(ngmyVCard(small, withPhoto: false), isNot(contains('PHOTO')));
      for (final line in ngmyVCard(small).split('\r\n')) {
        expect(line.length, lessThanOrEqualTo(75));
      }
      // Unfolded, the photo is whole again.
      final unfolded = ngmyVCard(small).replaceAll('\r\n ', '');
      expect(unfolded, contains(base64Encode(List.filled(3000, 7))));
    });

    test('a card with no name still makes a contact', () {
      final v = ngmyVCard(NgmyBusinessCardDocument(id: 'c', fullName: '', company: 'Maji Ltd'));
      expect(v, contains('FN:Maji Ltd'));
      expect(ngmyCardFileName(NgmyBusinessCardDocument(id: 'c', fullName: '')), 'ngmy_business_card.vcf');
      expect(ngmyCardFromJson('not json'), isNull);
    });

    testWidgets('the share sheet shows the QR code, AirDrop, NFC and copy, and says honestly when NFC is not available', (t) async {
      t.view.physicalSize = const Size(900, 2000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      t.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, (call) async => null);
      addTearDown(() => t.binding.defaultBinaryMessenger.setMockMethodCallHandler(SystemChannels.platform, null));
      await t.pumpWidget(MaterialApp(home: Builder(builder: (c) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyCardShareSheet(c, _card('1', 'Amani Juma').businessCardJson), child: const Text('open')))))));
      await t.tap(find.text('open'));
      await t.pump();
      await t.pump(const Duration(milliseconds: 500));
      expect(find.text('Share my business card'), findsOneWidget);
      expect(find.text('AirDrop or send'), findsOneWidget);
      expect(find.text('Tap to share with NFC'), findsOneWidget);
      expect(find.text('Copy contact text'), findsOneWidget);
      expect(ngmyNfcAvailable(), isFalse);
      expect(find.textContaining('Chrome on Android'), findsOneWidget);
      expect(find.text('Point any phone camera here to add me as a contact'), findsOneWidget);
      await t.ensureVisible(find.text('Copy contact text'));
      await t.tap(find.text('Copy contact text'));
      await t.pump(const Duration(milliseconds: 100));
      await t.pump();
      expect(find.textContaining('Copied'), findsOneWidget);
    });
  });
}
