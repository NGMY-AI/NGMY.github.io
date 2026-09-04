import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/main.dart';
import 'package:ngmy/ngmy_civic_state_wallet.dart';

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
}
