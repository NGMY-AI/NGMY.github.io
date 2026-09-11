import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_admin.dart';
import 'package:ngmy/ngmy_civic_registry_stats.dart';

NgmyCivicRegistryUserRow _user({
  required String email,
  String state = 'Georgia',
  bool registrar = true,
  bool admin = false,
  bool king = false,
}) {
  return NgmyCivicRegistryUserRow(
    email: email,
    username: email.split('@').first,
    state: state,
    isAuthorizedRegistrar: registrar,
    isCivicRegistryKing: king,
    isCivicRegistryAdmin: admin,
    stateSwitchesUsed: 0,
    anchorState: state,
  );
}

Map<String, dynamic> _app({
  required String email,
  required String status,
  String state = 'Georgia',
  String? id,
}) {
  return {
    'id': id ?? email,
    'userEmail': email,
    'status': status,
    'state': state,
  };
}

void main() {
  test('counts approved applications even when the user list is empty', () {
    final apps = [
      _app(email: 'one@georgia.org', status: 'approved'),
      _app(email: 'two@georgia.org', status: 'approved'),
      _app(email: 'three@georgia.org', status: 'pending'),
      _app(email: 'four@georgia.org', status: 'rejected'),
      _app(email: 'five@georgia.org', status: 'revoked'),
    ];
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'Georgia',
        applications: apps,
        users: const [],
      ),
      2,
    );
  });

  test('Georgia and GA count as the same state', () {
    final apps = [
      _app(email: 'one@georgia.org', status: 'approved', state: 'Georgia'),
      _app(email: 'two@georgia.org', status: 'approved', state: 'GA'),
    ];
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'GA',
        applications: apps,
        users: const [],
      ),
      2,
    );
  });

  test('the same person is not counted twice from an application and a user flag', () {
    final apps = [_app(email: 'ar@georgia.org', status: 'approved')];
    final users = [_user(email: 'ar@georgia.org')];
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'Georgia',
        applications: apps,
        users: users,
      ),
      1,
    );
  });

  test('a state cannot approve a sixth authorized registrar', () {
    final apps = [
      for (var i = 1; i <= 5; i++)
        _app(email: 'ar$i@georgia.org', status: 'approved'),
    ];
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'Georgia',
        applications: apps,
        users: const [],
      ),
      5,
    );
    expect(
      NgmyCivicRegistryStats.slotsRemaining(
        state: 'Georgia',
        applications: apps,
        users: const [],
      ),
      0,
    );
    expect(
      NgmyCivicRegistryStats.canApproveRegistrarForState(
        state: 'Georgia',
        applications: apps,
        users: const [],
      ),
      isFalse,
    );
  });

  test('Civic Registry Admin and King do not consume one of the five slots', () {
    final apps = [
      _app(email: 'ar@georgia.org', status: 'approved'),
      _app(email: 'admin@georgia.org', status: 'approved'),
      _app(email: 'king@georgia.org', status: 'approved'),
    ];
    final users = [
      _user(email: 'ar@georgia.org'),
      _user(email: 'admin@georgia.org', admin: true),
      _user(email: 'king@georgia.org', king: true),
    ];
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'Georgia',
        applications: apps,
        users: users,
      ),
      1,
    );
  });

  test('pending applications do not occupy a registrar slot', () {
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'Georgia',
        applications: [
          _app(email: 'waiting@georgia.org', status: 'pending'),
        ],
        users: [_user(email: 'waiting@georgia.org', registrar: false)],
      ),
      0,
    );
  });

  test('masked approved rows still count toward the five-person cap', () {
    final apps = [
      for (var i = 1; i <= 5; i++)
        _app(email: 'a$i***@georgia.org', status: 'approved', id: 'app-$i'),
    ];
    expect(
      NgmyCivicRegistryStats.activeRegistrarsInState(
        state: 'Georgia',
        applications: apps,
        users: const [],
      ),
      5,
    );
    expect(
      NgmyCivicRegistryStats.canApproveRegistrarForState(
        state: 'Florida',
        applications: apps,
        users: const [],
      ),
      isTrue,
    );
  });
}
