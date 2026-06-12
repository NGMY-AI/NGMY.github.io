String? _ngmyPendingReferralCode;

String? ngmyPeekPendingReferralCode() => _ngmyPendingReferralCode;

void ngmyClearPendingReferralCode() {
  _ngmyPendingReferralCode = null;
}

String ngmyReferralInviteUrl(String referralCode) {
  final code = referralCode.trim().toUpperCase();
  if (code.isEmpty) return 'https://ngmy.org/';
  return 'https://ngmy.org/?ref=$code';
}

void ngmyCaptureReferralLaunchIntent() {}
