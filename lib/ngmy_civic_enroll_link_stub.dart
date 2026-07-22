import 'ngmy_civic_registry_id_card.dart';
import 'ngmy_civic_registry_members.dart';

bool ngmyPendingCivicSelfEnrollmentOpen = false;

/// Short link, no long names/emails: 2-letter state code + a compact
/// token derived from the registrar's email (see registrarLinkToken).
String ngmyCivicSelfEnrollmentShareUrl({String? state, String? registrarEmail}) {
  final st = (state ?? '').trim();
  final reg = (registrarEmail ?? '').trim();
  final params = <String>['civic=enroll'];
  if (st.isNotEmpty) params.add('s=${NgmyCivicRegistryIdCard.stateCode(st)}');
  if (reg.isNotEmpty) params.add('r=${NgmyCivicRegistryMembers.registrarLinkToken(reg)}');
  return 'https://ngmy.org/?${params.join('&')}';
}

bool ngmyPeekCivicEnrollLaunchIntent() => ngmyPendingCivicSelfEnrollmentOpen;

void ngmyCaptureCivicEnrollLaunchIntent() {}

bool ngmyTakePendingCivicSelfEnrollmentOpen() {
  final pending = ngmyPendingCivicSelfEnrollmentOpen;
  ngmyPendingCivicSelfEnrollmentOpen = false;
  return pending;
}
