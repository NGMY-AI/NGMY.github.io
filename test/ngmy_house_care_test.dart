import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_home_glass_cards.dart';
import 'package:ngmy/ngmy_house_care_card.dart';

void main() {
  test('the House Care card remembers the membership and saves with the other cards', () {
    final care = {
      'status': 'active',
      'nextDue': '2026-11-20T00:00:00.000Z',
      'termYears': 2,
      'termEnds': '2028-10-20T00:00:00.000Z',
      'price': 50,
    };
    final snap = ngmyHouseCareSnapshot(care, 'Ayo Kim');
    final entry = NgmySpendingEntry(
      id: kNgmyHouseCareCardId,
      amount: 0,
      description: 'House Care',
      category: 'House Care',
      date: DateTime(2026, 10, 20),
      houseCareJson: snap,
    );
    expect(entry.hasHouseCare, isTrue);
    expect(entry.showsCreditFace, isFalse, reason: 'it is not a money card');
    expect(entry.hideModePill, isTrue);
    final back = NgmySpendingEntry.fromJson(jsonDecode(jsonEncode(entry.toJson())) as Map<String, dynamic>);
    expect(back.houseCareJson, snap);
    expect(back.hasHouseCare, isTrue);
    expect(jsonDecode(snap)['termYears'], 2);
  });

  testWidgets('the House Care card shows the next payment date and the status', (tester) async {
    tester.view.physicalSize = const Size(780, 520);
    tester.view.devicePixelRatio = 2.0;
    addTearDown(tester.view.reset);
    final soon = DateTime.now().add(const Duration(days: 9));
    for (final status in ['active', 'lapsed', 'pending']) {
      final snap = ngmyHouseCareSnapshot({'status': status, 'nextDue': soon.toUtc().toIso8601String(), 'termYears': 1, 'price': 50}, 'Ayo Kim');
      await tester.pumpWidget(MaterialApp(home: SizedBox(width: 390, height: 252, child: NgmyHouseCareCardFace(json: snap))));
      await tester.pump();
      expect(tester.takeException(), isNull, reason: status);
      expect(find.text('NEXT PAYMENT DUE'), findsOneWidget);
      expect(find.text('NGMY HOUSE CARE'), findsOneWidget);
      if (status == 'active') {
        expect(find.text('ACTIVE'), findsOneWidget);
        expect(find.text('In 9 days'), findsOneWidget);
      }
      if (status == 'lapsed') expect(find.text('PAYMENT DUE'), findsOneWidget);
      if (status == 'pending') expect(find.text('FIRST PAYMENT NEEDED'), findsOneWidget);
    }
  });
}
