import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_state_wallet.dart';

// State case and nationwide totals must agree: every contribution counts in
// its state's Contribution Case, spending comes out of it, and moving money
// to or from the State Trust shifts it between the two without losing any.
void main() {
  Map<String, dynamic> contrib(String id, double amount, String state) => {
        'id': id,
        'amount': amount,
        'state': state,
        'at': '2026-10-01T12:00:00Z',
        'title': 'MKUTANO',
        'campaignId': 'help_1',
      };

  Map<String, dynamic> spend(String id, double amount, String state, Map<String, dynamic> extra) => {
        'id': id,
        'amount': amount,
        'state': state,
        'recordedAt': '2026-10-02T12:00:00Z',
        'description': 'row $id',
        ...extra,
      };

  final contributions = [
    contrib('a', 1000, 'Alabama'),
    contrib('b', 720, 'Alabama'),
    contrib('c', 300, 'Georgia'),
  ];

  final spendings = [
    spend('s1', 20, 'Alabama', {'fund': 'contribution', 'campaignId': 'help_1'}),
    // Move 100 from Contribution Case to State Trust.
    spend('xfer_out_contrib_L1', 100, 'Alabama', {'fund': 'contribution', 'kind': 'transfer_to_trust'}),
    spend('xfer_in_trust_L1', 100, 'Alabama', {
      'fund': 'trust',
      'walletTrustDeposit': true,
      'kind': 'transfer_from_contribution',
    }),
    // Move 30 back from State Trust to Contribution Case.
    spend('xfer_out_trust_L2', 30, 'Alabama', {'fund': 'trust', 'kind': 'transfer_to_contribution'}),
    spend('xfer_in_contrib_L2', 30, 'Alabama', {
      'fund': 'contribution',
      'kind': 'transfer_from_trust',
      'contributionTransferCredit': true,
    }),
  ];

  test('state case counts its contributions, spending and trust moves', () {
    final al = buildNgmyCivicWalletSnapshot(
      state: 'Alabama',
      contributionRows: contributions.where((r) => r['state'] == 'Alabama').toList(),
      spendingRows: spendings,
    );
    expect(al.collected, 1720);
    expect(al.available, 1720 - 20 - 100 + 30);
    expect(al.trustBalance, 100 - 30);
    // Nothing is lost when money moves between the two funds.
    expect(al.totalTracked, 1720 - 20);
  });

  test('another state is not affected by Alabama rows', () {
    final ga = buildNgmyCivicWalletSnapshot(
      state: 'Georgia',
      contributionRows: contributions.where((r) => r['state'] == 'Georgia').toList(),
      spendingRows: spendings,
    );
    expect(ga.collected, 300);
    expect(ga.available, 300);
    expect(ga.trustBalance, 0);
  });

  test('nationwide contribution money is the sum of every state case', () {
    final stats = buildNgmyCivicNationwideStats(
      registeredMembers: 0,
      totalFamilyMembers: 0,
      countedContributionRows: contributions,
      allContributionRows: contributions,
      allSpendingRows: spendings,
    );
    expect(stats.contributionsKept, (1720 - 20 - 100 + 30) + 300);
    expect(stats.totalContributions, 1);
  });
}
