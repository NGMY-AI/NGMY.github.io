import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_registrar_application.dart';
import 'package:ngmy/ngmy_civic_registry_cloud.dart';

void main() {
  tearDown(NgmyCivicRegistrarSession.clear);

  test('authorized registrar emails skip Verify your membership on any device', () {
    expect(
      NgmyCivicRegistrarApplication.shouldSkipMembershipVerify(
        email: 'ar@georgia.org',
        isAuthorizedRegistrar: true,
      ),
      isTrue,
    );
    expect(
      NgmyCivicRegistrarApplication.shouldSkipMembershipVerify(
        email: 'member@georgia.org',
        isAuthorizedRegistrar: false,
      ),
      isFalse,
    );
  });

  test('an approved application skips verify even if the user-row flag is missing', () {
    expect(
      NgmyCivicRegistrarApplication.shouldSkipMembershipVerify(
        email: 'ar@georgia.org',
        isAuthorizedRegistrar: false,
        applications: [
          {
            'userEmail': 'ar@georgia.org',
            'status': 'approved',
            'state': 'Georgia',
          },
        ],
      ),
      isTrue,
    );
  });

  test('cloud registrar hint skips verify on a second phone with no local backup', () {
    NgmyCivicRegistrarSession.apply(
      'ar@georgia.org',
      const NgmyCivicRegistrarApplicationsFetch(
        isRegistrar: true,
        registrarState: 'Georgia',
      ),
    );
    expect(NgmyCivicRegistrarSession.isKnownRegistrar('ar@georgia.org'), isTrue);
    expect(
      NgmyCivicRegistrarApplication.shouldSkipMembershipVerify(
        email: 'ar@georgia.org',
        isAuthorizedRegistrar: false,
        cloudSaysRegistrar: NgmyCivicRegistrarSession.isKnownRegistrar('ar@georgia.org'),
      ),
      isTrue,
    );
    expect(NgmyCivicRegistrarSession.isKnownRegistrar('other@georgia.org'), isFalse);
  });

  test('revoked registrar applications do not skip verify', () {
    expect(
      NgmyCivicRegistrarApplication.shouldSkipMembershipVerify(
        email: 'ar@georgia.org',
        isAuthorizedRegistrar: true,
        applications: [
          {
            'userEmail': 'ar@georgia.org',
            'status': 'revoked',
            'state': 'Georgia',
          },
        ],
        cloudSaysRegistrar: true,
      ),
      isFalse,
    );
  });

  test('rejected applicants can apply again after the old row is replaced', () {
    final rejected = [
      {
        'id': 'app-1',
        'userEmail': 'member@georgia.org',
        'status': 'rejected',
        'state': 'Georgia',
      },
    ];
    expect(
      NgmyCivicRegistrarApplication.isRejectedForEmail(rejected, 'member@georgia.org'),
      isTrue,
    );
    expect(
      NgmyCivicRegistrarApplication.canReapply(
        applications: rejected,
        email: 'member@georgia.org',
      ),
      isTrue,
    );
    final reapplied = NgmyCivicRegistrarApplication.upsertInList(rejected, {
      'id': 'app-2',
      'userEmail': 'member@georgia.org',
      'status': 'pending',
      'state': 'Georgia',
    });
    expect(reapplied, hasLength(1));
    expect(reapplied.single['status'], 'pending');
    expect(
      NgmyCivicRegistrarApplication.isPendingForEmail(reapplied, 'member@georgia.org'),
      isTrue,
    );
    expect(
      NgmyCivicRegistrarApplication.isRejectedForEmail(reapplied, 'member@georgia.org'),
      isFalse,
    );
    expect(
      NgmyCivicRegistrarApplication.canReapply(
        applications: reapplied,
        email: 'member@georgia.org',
      ),
      isFalse,
    );
  });

  test('upsert by id drops a masked copy so approve attaches to the real email', () {
    final next = NgmyCivicRegistrarApplication.upsertInList(
      [
        {
          'id': 'app-1',
          'userEmail': 'm***@georgia.org',
          'status': 'pending',
          'state': 'Georgia',
        },
      ],
      {
        'id': 'app-1',
        'userEmail': 'member@georgia.org',
        'status': 'approved',
        'state': 'Georgia',
      },
    );
    expect(next, hasLength(1));
    expect(next.single['userEmail'], 'member@georgia.org');
    expect(next.single['status'], 'approved');
    expect(
      NgmyCivicRegistrarApplication.isApprovedForEmail(next, 'member@georgia.org'),
      isTrue,
    );
  });

  test('masked persist copies keep the real applicant email', () {
    final merged = NgmyCivicRegistrarApplication.preserveApplicantIdentity(
      incoming: {
        'id': 'app-1',
        'userEmail': 'm***@georgia.org',
        'fullName': '***',
        'status': 'approved',
        'state': 'Georgia',
      },
      existing: {
        'id': 'app-1',
        'userEmail': 'member@georgia.org',
        'fullName': 'Maya Member',
        'phone': '404-555-0100',
        'status': 'pending',
        'state': 'Georgia',
      },
    );
    expect(merged['userEmail'], 'member@georgia.org');
    expect(merged['fullName'], 'Maya Member');
    expect(merged['phone'], '404-555-0100');
    expect(merged['status'], 'approved');
  });

  test('own application rows keep the real email over masked network summaries', () {
    final combined = NgmyCivicRegistrarApplication.combineNetworkAndOwn(
      network: [
        {
          'id': 'app-1',
          'userEmail': 'a***@georgia.org',
          'status': 'approved',
          'state': 'Georgia',
        },
      ],
      own: [
        {
          'id': 'app-1',
          'userEmail': 'ar@georgia.org',
          'status': 'approved',
          'state': 'Georgia',
        },
      ],
    );
    expect(combined, hasLength(1));
    expect(combined.single['userEmail'], 'ar@georgia.org');
    expect(
      NgmyCivicRegistrarApplication.isApprovedForEmail(combined, 'ar@georgia.org'),
      isTrue,
    );
  });
}
