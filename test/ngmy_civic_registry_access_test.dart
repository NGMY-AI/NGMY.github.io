import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_access.dart';

void main() {
  test('removed members cannot log in', () {
    final status = NgmyCivicRegistryAccess.evaluate(removed: true, member: {'fullName': 'Ada'});
    expect(status.kind, NgmyCivicAccessKind.removed);
    expect(status.allowsLogin, isFalse);
    expect(status.message, contains('removed'));
  });

  test('active timed lock blocks login until it expires', () {
    final until = DateTime.now().toUtc().add(const Duration(hours: 2));
    final status = NgmyCivicRegistryAccess.evaluate(
      removed: false,
      member: {'accessLockedUntil': until.toIso8601String()},
    );
    expect(status.kind, NgmyCivicAccessKind.locked);
    expect(status.allowsLogin, isFalse);
    expect(status.message, contains('blocked'));
    expect(status.message, contains(formatAccessUntil(until.toLocal())));
  });

  test('expired lock does not block a new login', () {
    final until = DateTime.now().toUtc().subtract(const Duration(minutes: 1));
    final status = NgmyCivicRegistryAccess.evaluate(
      removed: false,
      member: {'accessLockedUntil': until.toIso8601String()},
    );
    expect(status.kind, NgmyCivicAccessKind.ok);
    expect(status.allowsLogin, isTrue);
  });

  test('registrar logout invalidates an older stored session but allows a new login', () {
    final epoch = DateTime.now().toUtc();
    final older = epoch.subtract(const Duration(minutes: 5));
    final kicked = NgmyCivicRegistryAccess.evaluate(
      removed: false,
      member: {'accessSessionEpoch': epoch.toIso8601String()},
      localUnlockAt: older,
    );
    expect(kicked.kind, NgmyCivicAccessKind.loggedOut);
    expect(kicked.allowsLogin, isTrue);
    expect(kicked.invalidatesStoredUnlock, isTrue);

    final fresh = NgmyCivicRegistryAccess.evaluate(
      removed: false,
      member: {'accessSessionEpoch': epoch.toIso8601String()},
    );
    expect(fresh.kind, NgmyCivicAccessKind.ok);
  });

  test('later registrar access action wins a merge', () {
    final older = {
      'accessControlAt': '2026-01-01T00:00:00.000Z',
      'accessLockedUntil': '2026-01-02T00:00:00.000Z',
      'accessSessionEpoch': '2026-01-01T00:00:00.000Z',
    };
    final newer = {
      'accessControlAt': '2026-02-01T00:00:00.000Z',
      'accessLockedUntil': '',
      'accessSessionEpoch': '2026-02-01T00:00:00.000Z',
      'accessLockedBy': 'ar@ngmy.org',
    };
    final next = Map<String, dynamic>.from(older);
    NgmyCivicRegistryAccess.mergeInto(next, newer);
    expect(next['accessLockedUntil'], '');
    expect(next['accessLockedBy'], 'ar@ngmy.org');
  });

  test('registrar can give access back before the lock expires', () {
    final locked = NgmyCivicRegistryAccess.apply(
      member: {'email': 'a@b.com', 'registryId': 'GA123'},
      action: NgmyCivicAccessAction.lock,
      lockFor: const Duration(hours: 6),
      lockedBy: 'ar@ngmy.org',
    );
    expect(NgmyCivicRegistryAccess.evaluate(removed: false, member: locked).kind, NgmyCivicAccessKind.locked);

    final restored = NgmyCivicRegistryAccess.apply(
      member: locked,
      action: NgmyCivicAccessAction.lift,
      lockedBy: 'ar@ngmy.org',
    );
    final status = NgmyCivicRegistryAccess.evaluate(removed: false, member: restored);
    expect(status.kind, NgmyCivicAccessKind.ok);
    expect(status.allowsLogin, isTrue);
    expect(NgmyCivicRegistryAccess.lockedUntilOf(restored), isNull);
  });

  test('lock also kicks the current session', () {
    final member = NgmyCivicRegistryAccess.apply(
      member: {'email': 'a@b.com', 'registryId': 'GA123'},
      action: NgmyCivicAccessAction.lock,
      lockFor: const Duration(hours: 6),
      lockedBy: 'ar@ngmy.org',
    );
    expect(NgmyCivicRegistryAccess.lockedUntilOf(member), isNotNull);
    expect(NgmyCivicRegistryAccess.sessionEpochOf(member), isNotNull);
    expect(member['accessLockHours'], 6);
  });
}
