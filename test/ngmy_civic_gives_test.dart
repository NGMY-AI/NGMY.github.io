import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_gives.dart';

void main() {
  final give = <String, dynamic>{
    'id': 'give_x',
    'status': 'accepted',
    'role': 'giver',
    'kind': 'money',
    'amount': 500,
    'title': 'Money',
    'givenAt': '2026-10-01T12:00:00Z',
    'dueAt': '2026-11-01T12:00:00Z',
    'receiptNo': 'NGMY-ABC123-WXYZ',
    'giver': {'rid': 'GA1234567', 'name': 'KB Pablo'},
    'recipient': {'rid': 'GA7654321', 'name': 'Jane Doe'},
    'signature': {'name': 'Jane Doe', 'at': '2026-10-01T13:00:00Z', 'image': ''},
  };

  testWidgets('receipt renders who, what and the dates', (tester) async {
    await tester.pumpWidget(MaterialApp(home: Scaffold(body: SingleChildScrollView(child: NgmyCivicGiveReceipt(give: give)))));
    await tester.pump();
    expect(find.text('\$500.00'), findsOneWidget);
    expect(find.text('LOAN RECEIPT'), findsOneWidget);
    expect(find.textContaining('Jane Doe'), findsWidgets);
    expect(find.text('ACTIVE'), findsOneWidget);
  });

  testWidgets('badge opens the unlock sheet asking for Registry ID and birthday', (tester) async {
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) => Center(
            child: NgmyCivicGiveBadge(isDark: false, onTap: () => showNgmyCivicGives(context, targetRid: 'GA1', targetName: 'Jane')),
          ),
        ),
      ),
    ));
    await tester.tap(find.byType(NgmyCivicGiveBadge));
    await tester.pumpAndSettle();
    expect(find.text('Your Registry ID'), findsOneWidget);
    expect(find.text('Your date of birth'), findsOneWidget);
    expect(find.text('Unlock'), findsOneWidget);
  });
}
