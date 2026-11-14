import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_contribution_popup.dart';
import 'package:ngmy/ngmy_contribution_popup_logic.dart';

AppTransaction _gift(String email, String campaignId, {String id = 'c1'}) => AppTransaction(
      id: id,
      userEmail: email,
      amount: 20,
      type: TransactionType.contribution,
      method: PaymentMethod.system,
      status: TransactionStatus.approved,
      timestamp: DateTime.now(),
      sourceDetails: jsonEncode({'campaignId': campaignId, 'state': 'Georgia'}),
    );

void main() {
  AppConfig campaign({String scope = 'all', String value = ''}) {
    final c = AppConfig();
    c.setHelpCampaign('Georgia', purpose: 'Funeral support', cashApp: r'$NgmyGeorgia', zelle: 'help@ga.org', phone: '5551234567', scopeType: scope, scopeValue: value, startNewCampaignId: true);
    return c;
  }

  test('a member of the state who has not contributed is asked; one who has contributed to this campaign is not; an old campaign does not count', () {
    final config = campaign();
    final u = UserData(email: 'mary@x.com')..state = 'Georgia';
    expect(ngmyMemberStateForContribution(config, u), 'Georgia');
    expect(ngmyMemberInHelpScope(config, u, 'Georgia'), isTrue);
    final id = config.helpCampaignIdFor('Georgia');
    expect(id, isNotEmpty);
    expect(ngmyMemberContributedToCampaign(config, u, const [], 'Georgia'), isFalse, reason: 'nothing given yet: the pop-up comes');
    expect(ngmyMemberContributedToCampaign(config, u, [_gift('mary@x.com', id)], 'Georgia'), isTrue, reason: 'given to this campaign: no pop-up');
    expect(ngmyMemberContributedToCampaign(config, u, [_gift('mary@x.com', 'help_old')], 'Georgia'), isFalse, reason: 'a gift to an earlier campaign does not count');
    expect(ngmyMemberContributedToCampaign(config, u, [_gift('someone@x.com', id)], 'Georgia'), isFalse, reason: 'somebody else gave');
    // A pending gift does not count yet.
    final pending = _gift('mary@x.com', id)..status = TransactionStatus.pending;
    expect(ngmyMemberContributedToCampaign(config, u, [pending], 'Georgia'), isFalse);
  });

  test('a registrar record is found whichever way it names the member (record email, member email inside it, registry number), and the amount is added up once', () {
    final config = campaign();
    final id = config.helpCampaignIdFor('Georgia');
    final u = UserData(email: 'mary@x.com')
      ..state = 'Georgia'
      ..registryId = 'GA-123';
    AppTransaction rec(String rid, String email, String meta, double amount) => AppTransaction(
          id: rid,
          userEmail: email,
          amount: amount,
          type: TransactionType.contribution,
          method: PaymentMethod.system,
          status: TransactionStatus.approved,
          timestamp: DateTime.now(),
          sourceDetails: meta,
        );
    // Written under the registrar's email, but with the member inside.
    final byMember = rec('r1', 'registrar@x.com', jsonEncode({'campaignId': id, 'memberEmail': 'mary@x.com'}), 15);
    expect(ngmyMemberContributedToCampaign(config, u, [byMember], 'Georgia'), isTrue);
    final byNumber = rec('r2', 'registrar@x.com', jsonEncode({'campaignId': id, 'registryId': 'ga-123'}), 5);
    expect(ngmyMemberContributedToCampaign(config, u, [byNumber], 'Georgia'), isTrue);
    // The same record arriving from three places counts once.
    expect(ngmyMemberCampaignTotal(config, u, [byMember, byMember, byNumber], 'Georgia'), 20);
    expect(ngmyMemberCampaignTotal(config, u, const [], 'Georgia'), 0);
    expect(ngmyTodayKey(DateTime(2026, 3, 9, 23, 59)), '2026-03-09');
  });

  testWidgets('the thank-you shows the congratulation and the amount, and closes', (t) async {
    await t.pumpWidget(MaterialApp(home: Builder(builder: (context) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyContributionThanksPopup(context, state: 'Georgia', purpose: 'Funeral support', amount: 25.5), child: const Text('go')))))));
    await t.tap(find.text('go'));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.text('Hongera!'), findsOneWidget);
    expect(find.text(r'$25.50'), findsOneWidget);
    expect(find.byKey(const Key('contribution-popup')), findsNothing, reason: 'it is not the ask');
    await t.tap(find.byKey(const Key('contribution-thanks-close')));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byKey(const Key('contribution-thanks')), findsNothing);
  });

  test('a campaign for one city only asks the members of that city, and nobody is asked when it is off', () {
    final config = campaign(scope: 'city', value: 'Atlanta');
    final atl = UserData(email: 'a@x.com')..state = 'Georgia'..city = 'Atlanta';
    final other = UserData(email: 'b@x.com')..state = 'Georgia'..city = 'Macon';
    expect(ngmyMemberInHelpScope(config, atl, 'Georgia'), isTrue);
    expect(ngmyMemberInHelpScope(config, other, 'Georgia'), isFalse);
    expect(ngmyMemberInHelpScope(AppConfig(), atl, 'Georgia'), isFalse, reason: 'no campaign: no pop-up');
  });

  testWidgets('the pop-up is in the middle with space at both sides, has the Civic Registry and Close buttons at the top, and shows where to send', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    var opened = 0;
    await t.pumpWidget(MaterialApp(home: Builder(builder: (context) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyContributionPopup(context, state: 'Georgia', purpose: 'Funeral support', scopeLabel: 'Wanachama wote', cashApp: r'$NgmyGeorgia', zelle: 'help@ga.org', phone: '(555) 123-4567', onOpenRegistry: () => opened++), child: const Text('go')))))));
    await t.tap(find.text('go'));
    await t.pump(const Duration(milliseconds: 700));
    final card = t.getRect(find.byKey(const Key('contribution-popup')));
    expect(card.left, greaterThan(18), reason: 'not touching the left side');
    expect(450 - card.right, greaterThan(18), reason: 'not touching the right side');
    expect((card.center.dx - 225).abs(), lessThan(3), reason: 'in the middle sideways');
    expect((card.center.dy - 425).abs(), lessThan(40), reason: 'in the middle up and down');
    expect(find.text('Mchango umefunguliwa katika Georgia'), findsOneWidget);
    expect(find.text('Funeral support'), findsOneWidget);
    expect(find.text(r'$NgmyGeorgia'), findsOneWidget);
    expect(find.text('help@ga.org'), findsOneWidget);
    // The two buttons are at the top of the card.
    final open = t.getRect(find.byKey(const Key('contribution-open-registry'))), close = t.getRect(find.byKey(const Key('contribution-close')));
    expect(open.top, lessThan(card.top + 40));
    expect(close.top, lessThan(card.top + 40));
    await t.tap(find.byKey(const Key('contribution-open-registry')));
    await t.pump(const Duration(milliseconds: 600));
    expect(opened, 1);
    expect(find.byKey(const Key('contribution-popup')), findsNothing, reason: 'it closed');
    // Open again and close with the X.
    await t.tap(find.text('go'));
    await t.pump(const Duration(milliseconds: 700));
    await t.tap(find.byKey(const Key('contribution-close')));
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byKey(const Key('contribution-popup')), findsNothing);
    expect(opened, 1);
  });
}
