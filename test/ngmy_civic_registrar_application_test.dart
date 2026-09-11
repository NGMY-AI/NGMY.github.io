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
