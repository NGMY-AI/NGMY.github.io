import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_admin_sheets.dart';

void main() {
  testWidgets('the money sheet previews the new balance and returns the amount', (t) async {
    double? got;
    await t.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: Center(
            child: TextButton(
              onPressed: () async => got = await ngmyAdminMoneySheet(context, isDark: true, title: 'Add money', subtitle: 'x', icon: Icons.add, color: Colors.teal, confirmLabel: 'Add it', balance: 20),
              child: const Text('open'),
            ),
          ),
        ),
      ),
    ));
    await t.tap(find.text('open'));
    await t.pumpAndSettle();
    expect(find.text('Add money'), findsOneWidget);
    await t.tap(find.text('\$25'));
    await t.pumpAndSettle();
    expect(find.text('\$45.00'), findsOneWidget);
    await t.tap(find.text('Add it'));
    await t.pumpAndSettle();
    expect(got, 25);
  });

  testWidgets('the confirm sheet says the registry is kept and answers yes or no', (t) async {
    bool? got;
    await t.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: TextButton(
            onPressed: () async => got = await ngmyAdminConfirmSheet(context, isDark: false, title: 'Delete this account?', message: 'm', icon: Icons.delete, color: Colors.red, confirmLabel: 'Delete account', notes: const ['Their Civic Registry record is kept exactly as it is.']),
            child: const Text('open'),
          ),
        ),
      ),
    ));
    await t.tap(find.text('open'));
    await t.pumpAndSettle();
    expect(find.textContaining('Civic Registry record is kept'), findsOneWidget);
    await t.tap(find.text('Cancel'));
    await t.pumpAndSettle();
    expect(got, false);
  });
}
