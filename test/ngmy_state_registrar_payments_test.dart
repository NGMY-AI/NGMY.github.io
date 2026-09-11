import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_state_registrar_payments.dart';

void main() {
  test('Georgia and GA stay permanently free', () {
    expect(NgmyStateRegistrarPayments.isGeorgiaExempt('Georgia'), isTrue);
    expect(NgmyStateRegistrarPayments.isGeorgiaExempt('GA'), isTrue);
    expect(NgmyStateRegistrarPayments.isGeorgiaExempt('Alabama'), isFalse);
    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Alabama',
        root: const {},
        now: DateTime.utc(2026, 9, 11),
      ),
      isFalse,
    );
    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Georgia',
        root: const {},
        now: DateTime.utc(2026, 9, 11),
      ),
      isTrue,
    );
  });

  test('two-month trial uses calendar months and clamps the day', () {
    final start = DateTime.utc(2026, 1, 31, 15, 4, 5);
    final until = NgmyStateRegistrarPayments.trialUntilFrom(start);
    expect(until, DateTime.utc(2026, 3, 31, 15, 4, 5));
    expect(
      NgmyStateRegistrarPayments.addUtcMonths(DateTime.utc(2026, 3, 31), 1),
      DateTime.utc(2026, 4, 30),
    );
  });

  test('every non-Georgia state is free during the shared two-month offer', () {
    final root = NgmyStateRegistrarPayments.ensureGlobalOffer(
      {},
      DateTime.utc(2026, 9, 11, 12),
    );
    expect(root['offerMonths'], 2);
    expect(
      DateTime.parse(root['offerUntil'] as String),
      DateTime.utc(2026, 11, 11, 12),
    );

    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Florida',
        root: root,
        now: DateTime.utc(2026, 9, 11, 12),
      ),
      isTrue,
    );
    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Texas',
        root: root,
        now: DateTime.utc(2026, 11, 11, 11, 59),
      ),
      isTrue,
    );
    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Texas',
        root: root,
        now: DateTime.utc(2026, 11, 11, 12, 0, 1),
      ),
      isFalse,
    );
  });

  test('does not restart the shared offer once it has begun', () {
    final first = NgmyStateRegistrarPayments.ensureGlobalOffer(
      {},
      DateTime.utc(2026, 9, 11),
    );
    final later = NgmyStateRegistrarPayments.ensureGlobalOffer(
      first,
      DateTime.utc(2026, 10, 1),
    );
    expect(later['offerStartedAt'], first['offerStartedAt']);
    expect(later['offerUntil'], first['offerUntil']);
  });

  test('paid sponsorship outlives the free trial', () {
    final root = {
      'offerStartedAt': '2026-01-01T00:00:00.000Z',
      'offerUntil': '2026-03-01T00:00:00.000Z',
      'byState': {
        'ohio': {
          'accessUntil': '2026-12-01T00:00:00.000Z',
        },
      },
    };
    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Ohio',
        root: root,
        now: DateTime.utc(2026, 8, 1),
      ),
      isTrue,
    );
    expect(
      NgmyStateRegistrarPayments.civicAccessFromSnapshot(
        state: 'Ohio',
        root: root,
        now: DateTime.utc(2026, 12, 2),
      ),
      isFalse,
    );
  });

  test('trial banner is only shown while the free window is open', () {
    final root = NgmyStateRegistrarPayments.ensureGlobalOffer(
      {},
      DateTime.utc(2026, 9, 11),
    );
    expect(
      NgmyStateRegistrarPayments.trialBanner(
        state: 'Georgia',
        root: root,
        now: DateTime.utc(2026, 9, 12),
      ),
      isEmpty,
    );
    expect(
      NgmyStateRegistrarPayments.trialBanner(
        state: 'Alabama',
        root: root,
        now: DateTime.utc(2026, 9, 12),
      ),
      contains('free until'),
    );
    expect(
      NgmyStateRegistrarPayments.trialBanner(
        state: 'Alabama',
        root: root,
        now: DateTime.utc(2026, 11, 12),
      ),
      isEmpty,
    );
  });
}
