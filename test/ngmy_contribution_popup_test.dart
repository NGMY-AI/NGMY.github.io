import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_contribution_popup.dart';
import 'package:ngmy/ngmy_contribution_popup_logic.dart';
import 'package:ngmy/ngmy_civic_registry_members.dart';

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
    final old = AppTransaction(
      id: 'old1',
      userEmail: 'mary@x.com',
      amount: 20,
      type: TransactionType.contribution,
      method: PaymentMethod.system,
      status: TransactionStatus.approved,
      timestamp: DateTime.now().subtract(const Duration(days: 30)),
      sourceDetails: jsonEncode({'campaignId': 'help_old', 'state': 'Georgia'}),
    );
    expect(ngmyMemberContributedToCampaign(config, u, [old], 'Georgia'), isFalse, reason: 'a gift to an earlier campaign does not count');
    // A gift written after this campaign began counts even when it carries another campaign number (the registrar phone was behind).
    expect(ngmyMemberContributedToCampaign(config, u, [_gift('mary@x.com', 'help_other')], 'Georgia'), isTrue);
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
    await t.pumpWidget(MaterialApp(home: Builder(builder: (context) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyContributionThanksPopup(context, state: 'Georgia', purpose: 'Funeral support', amount: 25.5, name: 'Asende Mkombi'), child: const Text('go')))))));
    await t.tap(find.text('go'));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.text('Hongera!'), findsOneWidget);
    expect(find.byKey(const Key('contribution-thanks-name')), findsOneWidget, reason: 'the name in its frame');
    expect(find.descendant(of: find.byKey(const Key('contribution-thanks-name')), matching: find.text('Asende Mkombi')), findsOneWidget);
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

  test('the thank-you can show twice a day: once before noon, once after noon', () {
    final morning = ngmyHalfDayKey(DateTime(2026, 11, 16, 9, 30));
    final lateMorning = ngmyHalfDayKey(DateTime(2026, 11, 16, 11, 59));
    final afternoon = ngmyHalfDayKey(DateTime(2026, 11, 16, 12, 0));
    final night = ngmyHalfDayKey(DateTime(2026, 11, 16, 23, 0));
    final nextMorning = ngmyHalfDayKey(DateTime(2026, 11, 17, 8, 0));
    expect(morning, lateMorning, reason: 'only once before noon');
    expect(afternoon, night, reason: 'only once after noon');
    expect(morning, isNot(afternoon));
    expect(nextMorning, isNot(morning));
  });

  group('a member marked as contributed never gets the ask, however their app account is linked to the registry', () {
    Map<String, dynamic> record({required String email, required String rid, String phone = '5550001111'}) =>
        NgmyCivicRegistryMembers.buildRecord(
          email: email,
          fullName: 'Asende Mkombi',
          dob: '01/02/1990',
          idType: 'DL',
          homeAddress: '1 Main',
          phone: phone,
          city: 'Atlanta',
          room: '',
          state: 'Georgia',
          registryId: rid,
        );
    AppTransaction byRegistrar(String recordEmail, String campaignId, {String rid = 'GA77', String appEmail = ''}) => AppTransaction(
          id: 'contrib_${recordEmail}_$campaignId',
          userEmail: recordEmail,
          amount: 25,
          type: TransactionType.contribution,
          method: PaymentMethod.system,
          status: TransactionStatus.approved,
          timestamp: DateTime.now(),
          sourceDetails: jsonEncode({
            'campaignId': campaignId,
            'state': 'Georgia',
            'memberEmail': recordEmail,
            'registryId': rid,
            if (appEmail.isNotEmpty) 'appEmail': appEmail,
          }),
        );

    test('registry record under another email, linked to the login (linked app email)', () {
      final config = campaign();
      final id = config.helpCampaignIdFor('Georgia');
      NgmyCivicRegistryMembers.upsert(config, {...record(email: 'asende.family@x.com', rid: 'GA77'), 'linkedAppEmail': 'asende@login.com'});
      final u = UserData(email: 'asende@login.com')..state = 'Georgia';
      expect(ngmyMemberContributedToCampaign(config, u, [byRegistrar('asende.family@x.com', id)], 'Georgia'), isTrue);
      expect(ngmyMemberCampaignTotal(config, u, [byRegistrar('asende.family@x.com', id)], 'Georgia'), 25);
    });

    test('registry record under another email, linked by a granted ID card with the same phone', () {
      final config = campaign();
      final id = config.helpCampaignIdFor('Georgia');
      NgmyCivicRegistryMembers.upsert(config, {...record(email: 'asende.family@x.com', rid: 'GA77', phone: '4785550000'), 'passportGranted': true});
      final u = UserData(email: 'asende@login.com', phone: '478-555-0000')..state = 'Georgia';
      expect(ngmyMemberContributedToCampaign(config, u, [byRegistrar('asende.family@x.com', id)], 'Georgia'), isTrue);
    });

    test('the registrar wrote the member login into the record (no registry list on this phone)', () {
      final config = campaign();
      final id = config.helpCampaignIdFor('Georgia');
      final u = UserData(email: 'asende@login.com')..state = 'Georgia';
      expect(ngmyMemberContributedToCampaign(config, u, [byRegistrar('asende.family@x.com', id, appEmail: 'asende@login.com')], 'Georgia'), isTrue);
    });

    test('the mark on the member record counts even before the money records arrive', () {
      final config = campaign();
      final id = config.helpCampaignIdFor('Georgia');
      NgmyCivicRegistryMembers.upsert(config, record(email: 'asende@login.com', rid: 'GA77'));
      ngmyStampMemberContribution(config, email: 'asende@login.com', registryId: 'GA77', campaignId: id, total: 40);
      final u = UserData(email: 'asende@login.com')..state = 'Georgia';
      final recs = ngmyRegistryRecordsForAccount(config, u);
      expect(recs, isNotEmpty);
      expect(recs.map((r) => ngmyRecordStampedContribution(r, id)).reduce((a, b) => a > b ? a : b), 40);
      expect(ngmyRecordStampedContribution(recs.first, 'help_other_campaign'), 0, reason: 'another campaign is not marked');
    });

    test('someone else is still asked', () {
      final config = campaign();
      final id = config.helpCampaignIdFor('Georgia');
      NgmyCivicRegistryMembers.upsert(config, {...record(email: 'asende.family@x.com', rid: 'GA77'), 'linkedAppEmail': 'asende@login.com'});
      final other = UserData(email: 'mary@x.com')..state = 'Georgia';
      expect(ngmyMemberContributedToCampaign(config, other, [byRegistrar('asende.family@x.com', id)], 'Georgia'), isFalse);
    });
  });
}
