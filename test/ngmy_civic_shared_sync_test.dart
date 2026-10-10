import 'dart:convert';

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_ai_client.dart';
import 'package:ngmy/ngmy_civic_registrar_application.dart';
import 'package:ngmy/ngmy_civic_state_wallet.dart';
import 'package:ngmy/ngmy_edge_invoke.dart';

void main() {
  test('shared contribution merge keeps more than the former 400-row cap', () {
    final rows = List<AppTransaction>.generate(
      1105,
      (i) => AppTransaction(
        id: 'contribution-$i',
        userEmail: 'member$i@example.com',
        amount: 1,
        type: TransactionType.contribution,
        method: PaymentMethod.system,
        status: TransactionStatus.approved,
        timestamp: DateTime.utc(2026, 9, 1).add(Duration(seconds: i)),
      ),
    );
    final all = <AppTransaction>[];

    ngmyMergeApprovedContributionsIntoAllTransactions(all, rows);

    expect(all, hasLength(1105));
    expect(all.map((e) => e.id).toSet(), hasLength(1105));
  });

  test('remote deactivation wins over stale active help-mode cache', () {
    final merged = ngmyMergeHelpModeByStateMaps(
      {
        'georgia': {
          'active': true,
          'campaignId': 'campaign-1',
          'updatedAt': '2026-09-02T10:00:00Z',
        },
      },
      {
        'georgia': {
          'active': false,
          'campaignId': 'campaign-1',
          'updatedAt': '2026-09-02T10:01:00Z',
        },
      },
    );

    expect((merged['georgia'] as Map)['active'], isFalse);
  });

  test('stale cloud deactivation cannot undo a fresh local activation', () {
    final merged = ngmyMergeHelpModeByStateMaps(
      {
        'georgia': {
          'active': true,
          'campaignId': 'campaign-1',
          'updatedAt': '2026-09-02T10:05:00Z',
        },
      },
      {
        'georgia': {
          'active': false,
          'campaignId': 'campaign-1',
          'updatedAt': '2026-09-02T10:01:00Z',
        },
      },
    );

    expect((merged['georgia'] as Map)['active'], isTrue);
  });

  test('deactivation still lands while a local write is deferred', () {
    final merged = ngmyMergeHelpModeByStateMaps(
      {
        'alabama': {
          'active': true,
          'campaignId': 'campaign-al',
          'cashApp': r'$alabama',
          'updatedAt': '2026-09-02T10:00:00Z',
        },
      },
      {
        'alabama': {
          'active': false,
          'campaignId': 'campaign-al',
          'updatedAt': '2026-09-02T10:01:00Z',
        },
      },
      remoteOffSignalsOnly: true,
    );

    expect((merged['alabama'] as Map)['active'], isFalse);
  });

  test('deferred merge keeps local campaigns the cloud has not caught up on', () {
    final merged = ngmyMergeHelpModeByStateMaps(
      {
        'georgia': {
          'active': true,
          'campaignId': 'campaign-new',
          'purpose': 'Roof repair',
          'updatedAt': '2026-09-02T10:05:00Z',
        },
      },
      {
        'georgia': {
          'active': false,
          'campaignId': 'campaign-old',
          'updatedAt': '2026-09-02T10:01:00Z',
        },
        // A state this device has never seen must not appear mid-defer.
        'alabama': {
          'active': true,
          'campaignId': 'campaign-al',
          'updatedAt': '2026-09-02T10:04:00Z',
        },
      },
      remoteOffSignalsOnly: true,
    );

    expect((merged['georgia'] as Map)['active'], isTrue);
    expect((merged['georgia'] as Map)['purpose'], 'Roof repair');
    expect(merged.containsKey('alabama'), isFalse);
  });

  test('closed local-only campaign cannot be resurrected', () {
    final merged = ngmyMergeHelpModeByStateMaps(
      {
        'georgia': {
          'active': true,
          'campaignId': 'campaign-closed',
          'updatedAt': '2026-09-02T10:00:00Z',
        },
      },
      const {},
      closures: [
        {'campaignId': 'campaign-closed', 'closedAt': '2026-09-02T10:01:00Z'},
      ],
    );

    expect((merged['georgia'] as Map)['active'], isFalse);
  });

  test(
    'closed campaign is inactive even when cached map still says active',
    () {
      final config = AppConfig(
        helpModeByState: {
          'Georgia': {'active': true, 'campaignId': 'closed-campaign'},
        },
        helpCampaignClosures: const [
          {'campaignId': 'closed-campaign'},
        ],
      );

      expect(config.helpActiveFor('georgia'), isFalse);
    },
  );

  test('deactivating a campaign stored under Georgia still turns it off', () {
    final config = AppConfig(
      helpModeByState: {
        'Georgia': {
          'active': true,
          'campaignId': 'campaign-ga',
          'purpose': 'ROOF',
        },
      },
    );
    config.deactivateHelpCampaign('GA');
    expect(config.helpActiveFor('Georgia'), isFalse);
    expect(config.helpActiveFor('georgia'), isFalse);
    expect(config.helpModeByState.containsKey('georgia'), isTrue);
    expect(config.helpModeByState.containsKey('Georgia'), isFalse);
  });

  test('closed legacy campaign cannot migrate back to active', () {
    final config = AppConfig(
      helpModeActive: true,
      helpState: 'Georgia',
      helpPurpose: 'Emergency',
      helpCampaignId: 'closed-legacy',
      helpCampaignClosures: const [
        {'campaignId': 'closed-legacy'},
      ],
    );

    expect(config.helpActiveFor('Georgia'), isFalse);
    expect((config.helpModeByState['georgia'] as Map)['active'], isFalse);
    expect(config.helpModeActive, isFalse);
  });

  test('stale cloud contribution cannot reduce cumulative amount', () {
    final at = DateTime.utc(2026, 9, 2, 10);
    final all = [
      AppTransaction(
        id: 'contrib-member-campaign',
        userEmail: 'member@example.com',
        amount: 100,
        type: TransactionType.contribution,
        method: PaymentMethod.system,
        status: TransactionStatus.approved,
        timestamp: at,
      ),
    ];

    ngmyMergeApprovedContributionsIntoAllTransactions(all, [
      AppTransaction(
        id: 'contrib-member-campaign',
        userEmail: 'member@example.com',
        amount: 40,
        type: TransactionType.contribution,
        method: PaymentMethod.system,
        status: TransactionStatus.approved,
        timestamp: at,
      ),
    ]);

    expect(all.single.amount, 100);
  });

  test('contribution receipts remain for 30 days after closure', () {
    final closedAt = DateTime.utc(2026, 9, 1, 12);

    expect(
      ngmyContributionReceiptExpired(
        closedAt: closedAt,
        now: closedAt.add(const Duration(days: 29, hours: 23)),
      ),
      isFalse,
    );
    expect(
      ngmyContributionReceiptExpired(
        closedAt: closedAt,
        now: closedAt.add(const Duration(days: 30)),
      ),
      isTrue,
    );
  });

  test(
    'state contribution case totals shared inflows and matching outflows',
    () {
      final snapshot = buildNgmyCivicWalletSnapshot(
        state: 'Georgia',
        contributionRows: [
          {'id': 'c1', 'amount': 80.0, 'at': '2026-09-02T10:00:00Z'},
          {'id': 'c2', 'amount': 20.0, 'at': '2026-09-02T11:00:00Z'},
        ],
        spendingRows: [
          {
            'id': 's1',
            'state': 'Georgia',
            'amount': 25.0,
            'description': 'Community supplies',
            'recordedAt': '2026-09-02T12:00:00Z',
          },
          {
            'id': 's2',
            'state': 'Alabama',
            'amount': 90.0,
            'description': 'Different state',
            'recordedAt': '2026-09-02T12:00:00Z',
          },
          {
            'id': 'legacy-no-state',
            'amount': 500.0,
            'description': 'Unstamped legacy row',
            'recordedAt': '2026-09-02T12:00:00Z',
          },
        ],
      );

      expect(snapshot.collected, 100);
      expect(snapshot.spent, 25);
      expect(snapshot.available, 75);
    },
  );

  test('state-case reset hides old money but accepts new contributions', () {
    final snapshot = buildNgmyCivicWalletSnapshot(
      state: 'Georgia',
      contributionRows: [
        {'id': 'old', 'amount': 100.0, 'at': '2026-09-02T10:00:00Z'},
        {'id': 'new', 'amount': 25.0, 'at': '2026-09-02T13:00:00Z'},
      ],
      spendingRows: [
        {
          'id': 'reset-georgia',
          'state': 'Georgia',
          'walletSoftReset': true,
          'permanent': true,
          'hideBudget': true,
          'hideSpendings': true,
          'hideTransactions': true,
          'recordedAt': '2026-09-02T12:00:00Z',
        },
      ],
    );

    expect(snapshot.collected, 25);
    expect(snapshot.available, 25);
    expect(snapshot.recent.map((e) => e.id), ['new']);
  });

  test('expense slices get unique colors and contribution names on spendings', () {
    final snapshot = buildNgmyCivicWalletSnapshot(
      state: 'Georgia',
      contributionRows: [
        {
          'id': 'c1',
          'amount': 200.0,
          'at': '2026-09-02T10:00:00Z',
          'title': 'Hospital bills',
          'campaignId': 'help_abc',
        },
      ],
      spendingRows: [
        {
          'id': 's1',
          'state': 'Georgia',
          'amount': 10.0,
          'description': 'Food',
          'recordedAt': '2026-09-02T12:00:00Z',
          'campaignId': 'help_abc',
        },
        {
          'id': 's2',
          'state': 'Georgia',
          'amount': 8.0,
          'description': 'Travel',
          'recordedAt': '2026-09-02T13:00:00Z',
          'campaignId': 'help_abc',
        },
        {
          'id': 's3',
          'state': 'Georgia',
          'amount': 6.0,
          'description': 'Rent',
          'recordedAt': '2026-09-02T14:00:00Z',
          'campaignId': 'wallet_georgia',
        },
        {
          'id': 's4',
          'state': 'Georgia',
          'amount': 4.0,
          'description': 'Clothes',
          'recordedAt': '2026-09-02T15:00:00Z',
          'campaignId': 'help_abc',
        },
        {
          'id': 's5',
          'state': 'Georgia',
          'amount': 3.0,
          'description': 'Medicine',
          'recordedAt': '2026-09-02T16:00:00Z',
          'campaignId': 'help_abc',
        },
        {
          'id': 's6',
          'state': 'Georgia',
          'amount': 2.0,
          'description': 'Utilities',
          'recordedAt': '2026-09-02T17:00:00Z',
          'campaignId': 'help_abc',
        },
        {
          'id': 's7',
          'state': 'Georgia',
          'amount': 1.0,
          'description': 'Other',
          'recordedAt': '2026-09-02T18:00:00Z',
          'campaignId': 'help_abc',
        },
      ],
    );

    final colors = snapshot.categories.map((c) => c.color).toSet();
    expect(snapshot.categories.length, 7);
    expect(colors.length, 7);

    final inCampaign = snapshot.spendings.where((s) => s.description == 'Food').single;
    expect(inCampaign.campaignTitle, 'Hospital bills');
    final outside = snapshot.spendings.where((s) => s.description == 'Rent').single;
    expect(outside.campaignTitle, isEmpty);
  });

  test('store spends within 10 minutes share one slice color and keep names', () {
    final snapshot = buildNgmyCivicWalletSnapshot(
      state: 'Georgia',
      contributionRows: [
        {'id': 'c1', 'amount': 100.0, 'at': '2026-09-02T10:00:00Z'},
      ],
      spendingRows: [
        {
          'id': 's1',
          'state': 'Georgia',
          'amount': 5.0,
          'description': 'Rice',
          'recordedAt': '2026-09-02T12:00:00Z',
        },
        {
          'id': 's2',
          'state': 'Georgia',
          'amount': 3.0,
          'description': 'Soap',
          'recordedAt': '2026-09-02T12:04:00Z',
        },
        {
          'id': 's3',
          'state': 'Georgia',
          'amount': 2.0,
          'description': 'Bags',
          'recordedAt': '2026-09-02T12:09:00Z',
        },
        {
          'id': 's4',
          'state': 'Georgia',
          'amount': 7.0,
          'description': 'Fuel',
          'recordedAt': '2026-09-02T13:00:00Z',
        },
      ],
    );

    expect(snapshot.categories.length, 2);
    expect(snapshot.legend.length, 4);
    final trip = snapshot.legend.where((e) => e.name != 'Fuel').toList();
    expect(trip.length, 3);
    expect(trip.map((e) => e.color).toSet(), hasLength(1));
    expect(trip.map((e) => e.name).toSet(), {'Rice', 'Soap', 'Bags'});
    expect(snapshot.legend.where((e) => e.name == 'Fuel').single.color, isNot(trip.first.color));
  });

  test('shared contribution mirror keeps the higher amount and drops deleted ids', () {
    final merged = ngmyMergeSharedContributionReceipts(
      [
        {
          'id': 'a',
          'amount': 10,
          'type': TransactionType.contribution.index,
          'status': TransactionStatus.approved.index,
          'timestamp': '2026-09-01T00:00:00Z',
          'userEmail': 'a@example.com',
        },
        {
          'id': 'a',
          'amount': 25,
          'type': TransactionType.contribution.index,
          'status': TransactionStatus.approved.index,
          'timestamp': '2026-09-02T00:00:00Z',
          'userEmail': 'a@example.com',
        },
        {
          'id': 'gone',
          'amount': 5,
          'type': TransactionType.contribution.index,
          'status': TransactionStatus.approved.index,
          'timestamp': '2026-09-03T00:00:00Z',
          'userEmail': 'b@example.com',
        },
        {
          'id': 'pending',
          'amount': 5,
          'type': TransactionType.contribution.index,
          'status': TransactionStatus.pending.index,
          'timestamp': '2026-09-03T00:00:00Z',
          'userEmail': 'c@example.com',
        },
      ],
      deletedIds: const ['gone'],
    );

    expect(merged, hasLength(1));
    expect(merged.single['id'], 'a');
    expect(merged.single['amount'], 25);
  });

  test('help mode cloud payload keeps the campaign when receipts are huge', () {
    final settings = {
      'helpModeByState': {
        'alabama': {'active': true, 'purpose': 'MJENGO WA KANISA', 'cashApp': 'NGMYpay'},
      },
    };
    final receipts = List<Map<String, dynamic>>.generate(
      40,
      (i) => {
        'id': 'contrib-$i',
        'amount': i + 1,
        'sourceDetails': 'x' * 20000,
      },
    );
    final payload = ngmyHelpModeCloudPayload(settings, receipts: receipts, maxBytes: 8000);
    final encoded = utf8.encode(jsonEncode(payload));
    expect(encoded.length, lessThanOrEqualTo(8000));
    expect((payload['helpModeByState'] as Map)['alabama'], isNotNull);
    final attached = payload['contributionReceipts'];
    if (attached is List && attached.isNotEmpty) {
      expect((attached.first['sourceDetails'] as String).length, lessThanOrEqualTo(400));
    }
  });

  test('help mode cloud payload includes receipts that fit', () {
    final payload = ngmyHelpModeCloudPayload(
      {'helpState': 'Alabama'},
      receipts: [
        {'id': 'contrib-1', 'amount': 20, 'sourceDetails': '{"kind":"contribution"}'},
      ],
    );
    expect(payload['helpState'], 'Alabama');
    expect(payload['contributionReceipts'], hasLength(1));
  });

  test('help mode toggle payload never carries receipts', () {
    final payload = ngmyHelpModeToggleCloudPayload({
      'helpModeByState': {
        'alabama': {'active': true, 'purpose': 'MJENGO WA KANISA', 'cashApp': 'NGMYpay'},
      },
      'contributionReceipts': [
        {'id': 'contrib-1', 'amount': 20, 'sourceDetails': 'x' * 5000},
      ],
      'helpCampaignSpendings': [
        {'id': 'spend-1'},
      ],
    });
    expect(payload.containsKey('contributionReceipts'), isFalse);
    expect(payload.containsKey('helpCampaignSpendings'), isFalse);
    expect((payload['helpModeByState'] as Map)['alabama'], isNotNull);
  });

  test('login keeps the account email even when a storage token exists', () {
    final wire = ngmyEdgeWirePayload(
      {
        'action': 'verifyPasswordLogin',
        'email': 'registrar@gmail.com',
        'passwordHash': 'abc123',
      },
      accessToken: 'anonymous-storage-jwt',
    );
    expect(wire['a'], 'a3');
    expect(wire['email'], 'registrar@gmail.com');
    expect(wire['passwordHash'], 'abc123');

    final settings = ngmyEdgeWirePayload(
      {
        'action': 'civicAdminSettingsPersist',
        'email': 'registrar@gmail.com',
        'kind': 'civicHelpModeSettings',
      },
      accessToken: 'real-user-jwt',
    );
    expect(settings.containsKey('email'), isFalse);
    expect(settings['kind'], 'civicHelpModeSettings');
  });

  test('session repair only retries on auth failures', () {
    expect(ngmyCloudErrorNeedsSessionRepair('Please sign in again.'), isTrue);
    expect(ngmyCloudErrorNeedsSessionRepair('Authentication required'), isTrue);
    expect(
      ngmyCloudErrorNeedsSessionRepair('new row violates row-level security policy'),
      isFalse,
    );
  });

  test('help mode sync failures are classified by their real cause', () {
    expect(
      ngmyClassifyCivicHelpModeSyncError('Please sign in again.'),
      NgmyCivicHelpModeSyncFailure.noSession,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('Authentication required'),
      NgmyCivicHelpModeSyncFailure.noSession,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('Not allowed: r***@gmail.com has no approved registrar or admin role on the server'),
      NgmyCivicHelpModeSyncFailure.notAllowed,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('new row violates row-level security policy for table "ngmy_settings"'),
      NgmyCivicHelpModeSyncFailure.notAllowed,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('Too many attempts. Try again later.'),
      NgmyCivicHelpModeSyncFailure.rateLimited,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('TimeoutException after 0:00:12.000000: Future not completed'),
      NgmyCivicHelpModeSyncFailure.timeout,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('no response'),
      NgmyCivicHelpModeSyncFailure.unreachable,
    );
    expect(
      ngmyClassifyCivicHelpModeSyncError('Server error (500). Try again.'),
      NgmyCivicHelpModeSyncFailure.serverError,
    );
  });

  test('orange bar names the cause and the report carries the attempt log', () {
    ngmyLastCivicHelpModeSyncReport = NgmyCivicHelpModeSyncReport(
      ok: false,
      failure: NgmyCivicHelpModeSyncFailure.notAllowed,
      reason: 'the server does not list r***@gmail.com as an Authorized Registrar or admin',
      advice: 'Ask the King/Admin to re-approve your registrar request.',
      lines: const ['Attempt 1 registrar save: failed — Not allowed [civicAdminSettingsPersist: /api/sync → HTTP 403 in 812ms]'],
      at: DateTime.utc(2026, 10, 8, 14),
    );
    final message = ngmyCivicHelpModeSyncFailureMessage(activated: true);
    expect(message, contains('not saved to cloud'));
    expect(message, contains('Authorized Registrar'));
    expect(message, contains('Details'));

    final text = ngmyLastCivicHelpModeSyncReport!.text;
    expect(text, contains('NOT saved'));
    expect(text, contains('Next step: Ask the King/Admin'));
    expect(text, contains('HTTP 403'));

    ngmyLastCivicHelpModeSyncReport = null;
    expect(
      ngmyCivicHelpModeSyncFailureMessage(activated: false),
      'Help mode is off here, but cloud sync failed. Reconnect and deactivate again.',
    );
  });

  test('a saved campaign the server hides from members says so in the report', () {
    final report = NgmyCivicHelpModeSyncReport(
      ok: true,
      failure: NgmyCivicHelpModeSyncFailure.none,
      reason: 'but regular members cannot see it yet (the server hides the shared Help Mode row from non-admin accounts)',
      advice: kNgmyCivicHelpModeMembersHiddenAdvice,
      lines: const ['Member visibility: HIDDEN — the server returned no row for a non-admin session'],
      at: DateTime.utc(2026, 10, 8, 16),
    );
    expect(report.text, contains('saved to cloud — but regular members cannot see it yet'));
    expect(report.text, contains('Next step: Members cannot see Help Mode until the admin updates the server'));
    expect(report.text, contains('civic_contributions_shared_visibility.sql'));

    final plain = NgmyCivicHelpModeSyncReport(
      ok: true,
      failure: NgmyCivicHelpModeSyncFailure.none,
      reason: '',
      advice: '',
      lines: const ['Member visibility: OK — readable with a signed-in member session'],
      at: DateTime.utc(2026, 10, 8, 16),
    );
    expect(plain.text, contains('Result: saved to cloud\n'));
    expect(plain.text, isNot(contains('Next step')));
  });

  test('session report masks emails', () {
    expect(ngmyMaskEmailForReport('Registrar@Gmail.com'), 'r***@gmail.com');
    expect(ngmyMaskEmailForReport(''), '(none)');
  });

  group('own registrar rows follow the server', () {
    const me = 'ar@example.com';
    Map<String, dynamic> row(String id, String status, {String state = 'Alabama', String? at}) => {
          'id': id,
          'userEmail': me,
          'fullName': 'Alabama Registrar',
          'state': state,
          'status': status,
          'createdAt': '2026-09-01T00:00:00Z',
          if (at != null) 'updatedAt': at,
        };
    final other = <String, dynamic>{
      'id': 'ga1',
      'userEmail': 'ga@example.com',
      'state': 'Georgia',
      'status': 'approved',
      'createdAt': '2026-08-01T00:00:00Z',
    };

    test('a deleted registrar is a plain member who can apply again', () {
      final rec = NgmyCivicRegistrarApplication.reconcileOwnRowsWithServer(
        list: [other, row('old', 'approved', at: '2026-09-02T00:00:00Z')],
        email: me,
        serverRows: [other],
        localBackup: row('old', 'approved', at: '2026-09-02T00:00:00Z'),
        now: '2026-10-08T15:00:00Z',
        reapplicationId: 'new1',
      );
      expect(rec.reappliedFromStaleApproval, isFalse);
      expect(rec.resubmit, isNull);
      expect(rec.own, isNull);
      expect(NgmyCivicRegistrarApplication.isApprovedForEmail(rec.list, me), isFalse);
      expect(NgmyCivicRegistrarApplication.isPendingForEmail(rec.list, me), isFalse);
      expect(NgmyCivicRegistrarApplication.canReapply(applications: rec.list, email: me), isTrue);
      expect(rec.list.where((a) => a['id'] == 'ga1').length, 1);
    });

    test('an old pending request the server deleted is not sent again', () {
      final rec = NgmyCivicRegistrarApplication.reconcileOwnRowsWithServer(
        list: [row('p1', 'pending')],
        email: me,
        serverRows: const [],
        localBackup: row('p1', 'pending'),
        now: '2026-10-08T15:00:00Z',
      );
      expect(rec.resubmit, isNull);
      expect(NgmyCivicRegistrarApplication.isPendingForEmail(rec.list, me), isFalse);
    });

    test('an old pending row behind a newer revoke is not pending', () {
      final rows = [
        row('p0', 'pending'),
        row('p1', 'revoked', at: '2026-09-09T00:00:00Z'),
      ];
      expect(NgmyCivicRegistrarApplication.isPendingForEmail(rows, me), isFalse);
      expect(NgmyCivicRegistrarApplication.canReapply(applications: rows, email: me), isTrue);
    });

    test('a server approval replaces whatever the phone held', () {
      final rec = NgmyCivicRegistrarApplication.reconcileOwnRowsWithServer(
        list: [row('p1', 'pending')],
        email: me,
        serverRows: [row('p1', 'approved', at: '2026-09-05T00:00:00Z')],
        localBackup: row('p1', 'pending'),
      );
      expect(rec.resubmit, isNull);
      expect(rec.reappliedFromStaleApproval, isFalse);
      expect(rec.own!['status'], 'approved');
      expect(NgmyCivicRegistrarApplication.isApprovedForEmail(rec.list, me), isTrue);
    });

    test('a server revoke wins over a stale local approval', () {
      final rec = NgmyCivicRegistrarApplication.reconcileOwnRowsWithServer(
        list: [row('p1', 'approved', at: '2026-09-02T00:00:00Z')],
        email: me,
        serverRows: [row('p1', 'revoked', at: '2026-09-09T00:00:00Z')],
        localBackup: row('p1', 'approved', at: '2026-09-02T00:00:00Z'),
      );
      expect(rec.resubmit, isNull);
      expect(rec.own!['status'], 'revoked');
      expect(NgmyCivicRegistrarApplication.isApprovedForEmail(rec.list, me), isFalse);
    });

    test('a pending request just made that the server never received is sent again', () {
      final rec = NgmyCivicRegistrarApplication.reconcileOwnRowsWithServer(
        list: const [],
        email: me,
        serverRows: const [],
        localBackup: row('p1', 'pending'),
        now: '2026-09-01T00:10:00Z',
      );
      expect(rec.resubmit!['id'], 'p1');
      expect(rec.resubmit!['status'], 'pending');
      expect(rec.reappliedFromStaleApproval, isFalse);
    });

    test('nothing anywhere leaves a plain member who can apply', () {
      final rec = NgmyCivicRegistrarApplication.reconcileOwnRowsWithServer(
        list: [other],
        email: me,
        serverRows: [other],
      );
      expect(rec.own, isNull);
      expect(rec.resubmit, isNull);
      expect(rec.list.length, 1);
    });

    test('the reviewer decision counts only once the server holds it', () {
      final approvedOnServer = [row('p1', 'approved', at: '2026-10-08T15:00:00Z')];
      expect(
        NgmyCivicRegistrarApplication.serverConfirmsDecision(approvedOnServer, email: me, status: 'approved', id: 'p1'),
        isTrue,
      );
      expect(
        NgmyCivicRegistrarApplication.serverConfirmsDecision([row('p1', 'pending')], email: me, status: 'approved', id: 'p1'),
        isFalse,
      );
      expect(
        NgmyCivicRegistrarApplication.serverConfirmsDecision(const [], email: me, status: 'approved', id: 'p1'),
        isFalse,
      );
      expect(
        NgmyCivicRegistrarApplication.serverConfirmsDecision(
          [row('p1', 'approved')..['revokeVotes'] = ['ga@example.com']],
          email: me,
          status: 'revoked',
          id: 'p1',
          pendingRevoke: true,
        ),
        isTrue,
      );
    });

    test('the 403 report says what the server holds and who fixes it', () {
      final pending = NgmyCivicRegistrarApplication.describeServerView(
        fetched: true,
        isRegistrar: false,
        isAdmin: false,
        ownRows: [row('p1', 'pending')],
        email: me,
      );
      expect(pending.summary, contains('Alabama registrar request is PENDING'));
      expect(pending.advice, contains('tap Approve'));

      final none = NgmyCivicRegistrarApplication.describeServerView(
        fetched: true,
        isRegistrar: false,
        isAdmin: false,
        ownRows: const [],
        email: me,
      );
      expect(none.summary, contains('no registrar application exists'));
      expect(none.advice, contains('sent to the King/Admin automatically'));

      final revoked = NgmyCivicRegistrarApplication.describeServerView(
        fetched: true,
        isRegistrar: false,
        isAdmin: false,
        ownRows: [row('p1', 'revoked', at: '2026-09-09T00:00:00Z')],
        email: me,
      );
      expect(revoked.summary, contains('REVOKED'));
      expect(revoked.advice, contains('Restore Access'));

      final offline = NgmyCivicRegistrarApplication.describeServerView(
        fetched: false,
        isRegistrar: false,
        isAdmin: false,
        ownRows: const [],
        email: me,
      );
      expect(offline.summary, contains('could not be fetched'));
    });
  });
}
