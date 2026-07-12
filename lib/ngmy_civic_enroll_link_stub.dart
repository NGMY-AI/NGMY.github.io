bool ngmyPendingCivicSelfEnrollmentOpen = false;

String ngmyCivicSelfEnrollmentShareUrl({String? state}) {
  final st = (state ?? '').trim();
  if (st.isNotEmpty) {
    return 'https://ngmy.org/?civic=enroll&state=${Uri.encodeQueryComponent(st)}';
  }
  return 'https://ngmy.org/?civic=enroll';
}

bool ngmyPeekCivicEnrollLaunchIntent() => ngmyPendingCivicSelfEnrollmentOpen;

void ngmyCaptureCivicEnrollLaunchIntent() {}

bool ngmyTakePendingCivicSelfEnrollmentOpen() {
  final pending = ngmyPendingCivicSelfEnrollmentOpen;
  ngmyPendingCivicSelfEnrollmentOpen = false;
  return pending;
}
