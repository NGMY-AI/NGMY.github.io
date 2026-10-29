import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_communicate_payments.dart';

class _Cfg {
  _Cfg(this.communicateMinutesPerPayment);
  final int communicateMinutesPerPayment;
}

void main() {
  test('the advisors are free for 10 minutes before they ask for a pass (the old saved 30 counts as the new 10)', () {
    expect(NgmyCommunicatePayments.defaultMinutesPerPayment, 10);
    expect(NgmyCommunicatePayments.minutesPerPaymentFromConfig(_Cfg(30)), 10);
    expect(NgmyCommunicatePayments.minutesPerPaymentFromConfig(_Cfg(10)), 10);
    expect(NgmyCommunicatePayments.minutesPerPaymentFromConfig(_Cfg(20)), 20, reason: 'an admin choice is kept');
    expect(NgmyCommunicatePayments.thresholdSeconds(_Cfg(30)), 600);
  });
}
