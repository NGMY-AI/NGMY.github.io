import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_state_wallet.dart';

Map<String, dynamic> contribution(String id, double amount) => {
      'id': id,
      'amount': amount,
      'title': 'Contribution',
      'at': DateTime.now().toUtc().toIso8601String(),
      'campaignId': '',
    };

// The same two rows main.dart writes when money moves Contribution Case → State Trust.
List<Map<String, dynamic>> transferToTrust(double amount, String linkId, {String state = 'Georgia'}) {
  final now = DateTime.now().toUtc().toIso8601String();
  return [
    {
      'id': 'xfer_out_contrib_$linkId',
      'campaignId': 'wallet_georgia',
      'amount': amount,
      'description': 'Transfer to State Trust',
      'recordedAt': now,
      'state': state,
      'fund': 'contribution',
      'kind': 'transfer_to_trust',
      'transferLinkId': linkId,
    },
    {
      'id': 'xfer_in_trust_$linkId',
      'campaignId': 'wallet_georgia',
      'amount': amount,
      'description': 'Transfer to State Trust',
      'recordedAt': now,
      'state': state,
      'fund': 'trust',
      'walletTrustDeposit': true,
      'kind': 'transfer_from_contribution',
      'transferLinkId': linkId,
    },
  ];
}

void main() {
  test('moving 1000 from a 2000 Contribution Case leaves 1000 there and 1000 in State Trust', () {
    final snap = buildNgmyCivicWalletSnapshot(
      state: 'Georgia',
      contributionRows: [contribution('c1', 2000)],
      spendingRows: transferToTrust(1000, '111'),
    );
    expect(snap.available, closeTo(1000, 0.01));
    expect(snap.trustBalance, closeTo(1000, 0.01));
  });
}
