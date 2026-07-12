bool ngmyPendingCivicSelfEnrollmentOpen = false;

String ngmyCivicSelfEnrollmentShareUrl() => 'https://ngmy.org/?civic=enroll';

bool ngmyPeekCivicEnrollLaunchIntent() => ngmyPendingCivicSelfEnrollmentOpen;

void ngmyCaptureCivicEnrollLaunchIntent() {}

bool ngmyTakePendingCivicSelfEnrollmentOpen() {
  final pending = ngmyPendingCivicSelfEnrollmentOpen;
  ngmyPendingCivicSelfEnrollmentOpen = false;
  return pending;
}
