Uri? ngmyPaymentReturnUri() => null;

Map<String, dynamic>? ngmyConsumeStoredPaymentReturn() => null;

void ngmyCapturePaymentReturnInPage() {}

/// No-op on non-web. On web, fires when another tab writes the payment receipt.
void ngmyListenForCrossTabPaymentReturn(void Function() onMaybePaid) {}

/// No-op on non-web. On web, asks the engine to re-read the viewport size.
void ngmyForceWebViewportResettle() {}
