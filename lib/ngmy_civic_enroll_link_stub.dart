bool ngmyPendingCivicSelfEnrollmentOpen = false;

String ngmyCivicSelfEnrollmentShareUrl({String? state, String? registrarEmail}) {
  final st = (state ?? '').trim();
  final reg = (registrarEmail ?? '').trim().toLowerCase();
  final params = <String>['civic=enroll'];
  if (st.isNotEmpty) params.add('state=${Uri.encodeQueryComponent(st)}');
  if (reg.isNotEmpty) params.add('registrar=${Uri.encodeQueryComponent(reg)}');
  return 'https://ngmy.org/?${params.join('&')}';
}

bool ngmyPeekCivicEnrollLaunchIntent() => ngmyPendingCivicSelfEnrollmentOpen;

void ngmyCaptureCivicEnrollLaunchIntent() {}

bool ngmyTakePendingCivicSelfEnrollmentOpen() {
  final pending = ngmyPendingCivicSelfEnrollmentOpen;
  ngmyPendingCivicSelfEnrollmentOpen = false;
  return pending;
}
