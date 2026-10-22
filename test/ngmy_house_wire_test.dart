import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_edge_invoke.dart';

void main() {
  test('every House & Insurance action has a short wire code, so the server never mistakes it for a chat prompt', () {
    const actions = [
      'hwList', 'hwMe', 'hwApply', 'hwRequest', 'hwRespond', 'hwDone', 'hwRate', 'hwCancel',
      'hwAdminList', 'hwAdminDecide', 'hwPostJob', 'hwJobs', 'hwPickJob', 'hwPlanCashApp', 'hwBusy',
      'hwCare', 'hwCareSign', 'hwAdminCare', 'hwAdminPayList', 'hwAdminPay',
      'hwAdminCareRevoke', 'hwAdminCareRestore', 'hwAdminCarePayments', 'hwAdminCarePaymentDecide', 'hwAdminWorkerStats',
    ];
    final codes = <String>{};
    for (final a in actions) {
      final code = ngmyEdgeWirePayload({'action': a})['a'] as String;
      expect(code, isNot(a), reason: '$a has no wire code');
      expect(codes.add(code), isTrue, reason: '$a shares its code');
    }
  });
}
