import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registry_members.dart';

/// Minimal stand-in for AppConfig — NgmyCivicRegistryMembers only touches
/// these three roster lists.
class _RosterConfig {
  List<Map<String, dynamic>> civicRegistryMembers = <Map<String, dynamic>>[];
  List<Map<String, dynamic>> civicRegistryRemoved = <Map<String, dynamic>>[];
  List<Map<String, dynamic>> civicRegistryDeceased = <Map<String, dynamic>>[];
}

Map<String, dynamic> _member({
  required String email,
  required String registryId,
  String fullName = 'Real Person',
  String state = 'Georgia',
  String phone = '4045551234',
  String enrolledAt = '2026-01-01T00:00:00.000Z',
}) =>
    {
      'email': email,
      'registryId': registryId,
      'fullName': fullName,
      'state': state,
      'phone': phone,
      'enrollmentSource': 'registrar',
      'enrolledAt': enrolledAt,
      'updatedAt': enrolledAt,
    };

void main() {
  test('cloud refresh never turns a redacted row into a new member', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      _member(email: 'real@example.com', registryId: 'GA1234567'),
    ]);

    NgmyCivicRegistryMembers.adoptCloudPayload(
      config,
      {
        'members': [
          _member(email: 'real@example.com', registryId: 'GA1234567'),
          // Masked directory row for somebody this device does not know.
          {
            'email': 'j***@example.com',
            'fullName': 'Jane Doe',
            'registryId': 'GA7654321',
            'state': 'Georgia',
          },
          // Nameless ghost row.
          {'email': 'ghost@example.com', 'registryId': 'GA1111111', 'state': 'Georgia'},
        ],
        'removed': const [],
        'deceased': const [],
      },
      scopeState: 'Georgia',
    );

    final roster = NgmyCivicRegistryMembers.listFrom(config);
    expect(roster, hasLength(1));
    expect(roster.single['email'], 'real@example.com');
    expect(
      roster.map(NgmyCivicRegistryMembers.resolvedDisplayName),
      isNot(contains('Member')),
    );
  });

  test('registrar hydrate ignores another state\'s roster rows', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      _member(email: 'ga@example.com', registryId: 'GA1234567'),
    ]);

    NgmyCivicRegistryMembers.adoptCloudPayload(
      config,
      {
        'members': [
          _member(email: 'ga@example.com', registryId: 'GA1234567'),
          _member(email: 'al@example.com', registryId: 'AL1234567', state: 'Alabama'),
        ],
        'removed': const [],
        'deceased': const [],
      },
      scopeState: 'Georgia',
    );

    final roster = NgmyCivicRegistryMembers.listFrom(config);
    expect(roster, hasLength(1));
    expect(roster.single['state'], 'Georgia');
  });

  test('deleted member stays deleted when cloud still returns them', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      _member(email: 'dupe@example.com', registryId: 'GA2222222'),
    ]);

    NgmyCivicRegistryMembers.permanentDeleteByRegistryId(config, 'GA2222222');
    expect(NgmyCivicRegistryMembers.listFrom(config), isEmpty);

    // Cloud has not caught up yet and still hands the row back on every refresh.
    for (var i = 0; i < 3; i++) {
      NgmyCivicRegistryMembers.adoptCloudPayload(
        config,
        {
          'members': [_member(email: 'dupe@example.com', registryId: 'GA2222222')],
          'removed': const [],
          'deceased': const [],
        },
        scopeState: 'Georgia',
      );
      expect(
        NgmyCivicRegistryMembers.listFrom(config),
        isEmpty,
        reason: 'delete must survive cloud refresh #${i + 1}',
      );
    }
  });

  test('re-enrolling a deleted member brings them back for good', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      _member(email: 'back@example.com', registryId: 'GA3333333'),
    ]);
    NgmyCivicRegistryMembers.permanentDeleteByRegistryId(config, 'GA3333333');
    expect(NgmyCivicRegistryMembers.listFrom(config), isEmpty);

    NgmyCivicRegistryMembers.upsert(
      config,
      _member(email: 'back@example.com', registryId: 'GA3333333'),
    );
    expect(NgmyCivicRegistryMembers.listFrom(config), hasLength(1));

    // A stale tombstone still in the cloud must not delete them again.
    NgmyCivicRegistryMembers.adoptCloudPayload(
      config,
      {
        'members': [_member(email: 'back@example.com', registryId: 'GA3333333')],
        'removed': [
          {
            'email': 'back@example.com',
            'registryId': 'GA3333333',
            'state': 'Georgia',
            'removedAt': '2026-01-02T00:00:00.000Z',
            'permanent': true,
            'softDelete': false,
          },
        ],
        'deceased': const [],
      },
      scopeState: 'Georgia',
    );

    expect(NgmyCivicRegistryMembers.listFrom(config), hasLength(1));
  });

  test('hydrate collapses duplicate rows for the same person', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      _member(email: 'twin@example.com', registryId: 'GA4444444'),
      _member(email: 'twin@example.com', registryId: 'GE4444444'),
    ]);

    NgmyCivicRegistryMembers.adoptCloudPayload(
      config,
      {'members': const [], 'removed': const [], 'deceased': const []},
      scopeState: 'Georgia',
    );

    expect(NgmyCivicRegistryMembers.listFrom(config), hasLength(1));
  });

  test('rows without a registry id are never kept or uploaded', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      _member(email: 'real@example.com', registryId: 'GA5555555'),
      {'email': 'noid@example.com', 'fullName': 'No Id', 'state': 'Georgia'},
    ]);

    final payload = NgmyCivicRegistryMembers.payloadForState(config, state: 'Georgia');
    final members = (payload['members'] as List).cast<Map<String, dynamic>>();

    expect(members, hasLength(1));
    expect(members.single['registryId'], 'GA5555555');
  });
}
