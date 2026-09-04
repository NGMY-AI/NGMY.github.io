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

int _helpsOf(_RosterConfig config, String email) =>
    (NgmyCivicRegistryMembers.findByEmail(config, email)?['helps'] as num?)
        ?.toInt() ??
    -1;

void _setHelps(_RosterConfig config, Map<String, dynamic> member, int helps) {
  NgmyCivicRegistryMembers.syncFromFields(
    config,
    email: (member['email'] ?? '').toString(),
    fullName: (member['fullName'] ?? '').toString(),
    dob: '',
    idType: '',
    homeAddress: '',
    phone: (member['phone'] ?? '').toString(),
    city: '',
    room: '',
    state: (member['state'] ?? '').toString(),
    registryId: (member['registryId'] ?? '').toString(),
    helps: helps,
    missed: 0,
  );
}

void main() {
  test('removing a help survives a cloud refresh that still has the old count', () {
    final config = _RosterConfig();
    final member = _member(email: 'helper@example.com', registryId: 'GA9999999');
    NgmyCivicRegistryMembers.setList(config, [
      {...member, 'helps': 2},
    ]);

    _setHelps(config, member, 1);
    expect(_helpsOf(config, 'helper@example.com'), 1);

    // Cloud has not caught up: still 2 helps, and its row even looks newer.
    for (var i = 0; i < 3; i++) {
      NgmyCivicRegistryMembers.adoptCloudPayload(
        config,
        {
          'members': [
            {
              ...member,
              'helps': 2,
              'updatedAt': '2027-01-01T00:00:00.000Z',
            },
          ],
          'removed': const [],
          'deceased': const [],
        },
        scopeState: 'Georgia',
      );
      expect(
        _helpsOf(config, 'helper@example.com'),
        1,
        reason: 'removed help must survive cloud refresh #${i + 1}',
      );
    }
  });

  test('the most recent help change wins, even when it is the smaller number', () {
    final config = _RosterConfig();
    final member = _member(email: 'helper@example.com', registryId: 'GA9999999');
    NgmyCivicRegistryMembers.setList(config, [
      {...member, 'helps': 5, 'activityAt': '2026-02-01T00:00:00.000Z'},
    ]);

    // Another registrar removed helps after this device last touched them.
    NgmyCivicRegistryMembers.adoptCloudPayload(
      config,
      {
        'members': [
          {...member, 'helps': 1, 'activityAt': '2026-03-01T00:00:00.000Z'},
        ],
        'removed': const [],
        'deceased': const [],
      },
      scopeState: 'Georgia',
    );

    expect(_helpsOf(config, 'helper@example.com'), 1);
  });

  test('a help recorded elsewhere still lands when this device never set one', () {
    final config = _RosterConfig();
    final member = _member(email: 'helper@example.com', registryId: 'GA9999999');
    NgmyCivicRegistryMembers.setList(config, [
      {...member, 'helps': 0},
    ]);

    NgmyCivicRegistryMembers.adoptCloudPayload(
      config,
      {
        'members': [
          {...member, 'helps': 3, 'activityAt': '2026-03-01T00:00:00.000Z'},
        ],
        'removed': const [],
        'deceased': const [],
      },
      scopeState: 'Georgia',
    );

    expect(_helpsOf(config, 'helper@example.com'), 3);
  });

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

  test('nationwide members and families count only registered US Civic Registry rows', () {
    final config = _RosterConfig();
    NgmyCivicRegistryMembers.setList(config, [
      {
        ..._member(email: 'ga@example.com', registryId: 'GA1111111', state: 'Georgia'),
        'familyMembers': 4,
      },
      {
        ..._member(email: 'tx@example.com', registryId: 'TX2222222', state: 'Texas', fullName: 'Texas Head'),
        'familyMembers': 3,
      },
      {
        ..._member(email: 'dup@example.com', registryId: 'GA1111111', state: 'Georgia'),
        'familyMembers': 9,
      },
      {
        'email': 'ghost@example.com',
        'fullName': 'Ghost',
        'state': 'Georgia',
        'enrollmentSource': 'registrar',
      },
      {
        ..._member(email: 'ontario@example.com', registryId: 'ON9999999', state: 'Ontario'),
        'familyMembers': 8,
      },
    ]);
    NgmyCivicRegistryMembers.setRemoved(config, [
      {
        'email': 'gone@example.com',
        'registryId': 'GA3333333',
        'removedAt': '2026-03-01T00:00:00.000Z',
      },
    ]);
    NgmyCivicRegistryMembers.setList(config, [
      ...NgmyCivicRegistryMembers.listFrom(config),
      {
        ..._member(email: 'gone@example.com', registryId: 'GA3333333'),
        'familyMembers': 5,
      },
      {
        ..._member(email: 'late@example.com', registryId: 'FL4444444', state: 'Florida', fullName: 'Florida Head'),
        'familyMembers': 2,
      },
    ]);
    NgmyCivicRegistryMembers.setDeceased(config, [
      {'email': 'late@example.com', 'registryId': 'FL4444444', 'deceasedAt': '2026-04-01T00:00:00.000Z'},
    ]);

    expect(NgmyCivicRegistryMembers.nationwideMemberCount(config), 2);
    expect(NgmyCivicRegistryMembers.nationwideFamilyTotal(config), 7);
  });
}
