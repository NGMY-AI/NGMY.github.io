import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_loan_settings.dart';
import 'package:ngmy/ngmy_loans.dart';

void main() {
  tearDown(() => NgmyLoanSettings.current = NgmyLoanSettings());

  test('the interest, the biggest loan and the repayment period all come from the admin settings', () {
    NgmyLoanSettings.current = NgmyLoanSettings(interestPercent: 10, maxAmount: 800, repaymentMonths: 2);
    final b = NgmyLoanLogic.breakdown(400);
    expect(b.interest, 40);
    expect(b.total, 440);
    expect(b.weeks, 8);
    expect(b.weekly, closeTo(55, 0.001));
    expect(b.period, '2 months');
    NgmyLoanSettings.current = NgmyLoanSettings(interestPercent: 0, repaymentMonths: 3);
    final free = NgmyLoanLogic.breakdown(300);
    expect(free.interest, 0);
    expect(free.total, 300);
    expect(free.weeks, 12);
    final j = NgmyLoanSettings.fromJson(NgmyLoanSettings(interestPercent: 7.5, maxAmount: 1200, repaymentMonths: 4).toJson());
    expect((j.interestPercent, j.maxAmount, j.repaymentMonths), (7.5, 1200.0, 4));
  });

  test('a loan shows Pending, Approved, Paid Out, In Repayment, Overdue, Repaid or Declined', () {
    Map<String, dynamic> loan(String status, {List<Map<String, dynamic>>? pays, bool paidOut = false}) => {
          'status': status,
          'totalRepayment': 200.0,
          'paidOut': paidOut,
          'payments': pays ?? <Map<String, dynamic>>[],
        };
    final future = DateTime.now().add(const Duration(days: 5)).toUtc().toIso8601String();
    final past = DateTime.now().subtract(const Duration(days: 5)).toUtc().toIso8601String();
    expect(ngmyLoanStatusLabel(loan('pending')), 'Pending');
    expect(ngmyLoanStatusLabel(loan('rejected')), 'Declined');
    expect(ngmyLoanStatusLabel(loan('approved')), 'Approved');
    expect(ngmyLoanStatusLabel(loan('approved', paidOut: true)), 'Paid Out');
    expect(ngmyLoanStatusLabel(loan('approved', pays: [{'status': 'paid', 'paidAmount': 100.0, 'dueDate': past}, {'status': 'pending', 'amount': 100.0, 'dueDate': future}])), 'In Repayment');
    expect(ngmyLoanStatusLabel(loan('approved', pays: [{'status': 'pending', 'amount': 100.0, 'dueDate': past}])), 'Overdue');
    expect(ngmyLoanStatusLabel(loan('approved', pays: [{'status': 'paid', 'paidAmount': 200.0, 'dueDate': past}])), 'Repaid');
  });

  test('the reminder is gentle: coming up, late, or collateral released', () {
    final soon = DateTime.now().add(const Duration(days: 1)).toUtc().toIso8601String();
    final late = DateTime.now().subtract(const Duration(days: 2)).toUtc().toIso8601String();
    expect(ngmyLoanReminderLine({'payments': [{'status': 'pending', 'amount': 50.0, 'dueDate': soon}]}), contains('due'));
    expect(ngmyLoanReminderLine({'payments': [{'status': 'pending', 'amount': 50.0, 'dueDate': late}]}), contains('call us if you need more time'));
    expect(ngmyLoanReminderLine({'collateralReleased': true, 'payments': []}), contains('released back to you'));
  });

  testWidgets('the loan service is closed to everyone but the admin', (t) async {
    final config = AppConfig();
    await t.pumpWidget(MaterialApp(home: LoanServiceScreen(user: UserData(email: 'member@x.com'), config: config, onDataChanged: () {})));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('closed'), findsOneWidget);
    expect(find.text('Apply for a Loan'), findsNothing);
  });
  adminPageTests();
}

void adminPageTests() {
  testWidgets('the admin sees a kind loan page with no 36% and no harsh words, and an application with the cost laid out', (t) async {
    SharedPreferences.setMockInitialValues({});
    t.view.physicalSize = const Size(900, 3200);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final config = AppConfig();
    await t.pumpWidget(MaterialApp(home: LoanServiceScreen(user: UserData(email: 'boss@x.com', isAdmin: true), config: config, onDataChanged: () {})));
    await t.pump(const Duration(seconds: 1));
    expect(find.text('Loan Services'), findsWidgets);
    expect(find.textContaining('We help our community members when they need help'), findsOneWidget);
    expect(find.textContaining('collateral is released back to you'), findsWidgets);
    expect(find.textContaining('36%'), findsNothing);
    expect(find.textContaining('Up to 2 loans under'), findsOneWidget);
    expect(find.textContaining('Upon full repayment'), findsOneWidget);
    await t.tap(find.text('Apply for a Loan'));
    await t.pump(const Duration(seconds: 1));
    await t.pump(const Duration(seconds: 1));
    await t.enterText(find.byType(TextField).first, '400');
    await t.pump(const Duration(milliseconds: 400));
    expect(find.text('What you would repay'), findsOneWidget);
    expect(find.textContaining('36%'), findsNothing);
    expect(find.text('What do you need help with?'), findsOneWidget);
    expect(find.text('Funeral / Burial'), findsOneWidget);
    expect(find.text('Buy a car'), findsOneWidget);
    expect(find.textContaining('Family or guarantor'), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 60));
  });
}
