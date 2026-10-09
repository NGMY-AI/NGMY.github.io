import 'dart:async';

import 'package:flutter/material.dart';
import 'ngmy_civic_helper_gifts.dart';
import 'ngmy_civic_helper_gift_ui.dart';
import 'ngmy_overlay_guard.dart';
import 'ngmy_nav.dart';

bool _helperGiftAdminPopupOpen = false;

bool get ngmyHelperGiftAdminPopupIsOpen => _helperGiftAdminPopupOpen;

/// After the admin dismisses a helper-gift alert (X, Not now, or timer), do
/// not show another until the app is fully closed and opened again.
class NgmyHelperGiftAdminPopupSession {
  static bool _dismissedUntilNextAppOpen = false;

  static bool get isDismissedForAppSession => _dismissedUntilNextAppOpen;

  static void markDismissedForAppSession() {
    _dismissedUntilNextAppOpen = true;
  }
}

Future<BuildContext?> _waitForHelperGiftPopupContext({
  BuildContext? preferred,
  Duration timeout = const Duration(seconds: 20),
}) async {
  final deadline = DateTime.now().add(timeout);
  while (DateTime.now().isBefore(deadline)) {
    if (_helperGiftAdminPopupOpen) return null;
    final ctx = preferred ?? ngmyRootNavigatorKey.currentContext;
    if (ctx != null && ctx.mounted && ngmyShouldAllowHelperGiftAdminPopup()) {
      return ctx;
    }
    await Future.delayed(const Duration(milliseconds: 200));
  }
  final ctx = preferred ?? ngmyRootNavigatorKey.currentContext;
  if (ctx != null && ctx.mounted) return ctx;
  return null;
}

typedef NgmyHelperGiftGrantCallback = Future<NgmyHelperGift?> Function(
  NgmyHelperGiftPending pending, {
  required String giftName,
  required double amount,
  required String styleId,
  required String storeAddress,
  required String storeSellerEmail,
  required String storeSellerName,
  required String storeListingId,
});

/// Medicine-style popups for admins when helpers earn a 3-in-a-row first-helper streak.
Future<void> ngmyCheckAdminHelperGiftPopupsNow({
  BuildContext? context,
  required dynamic config,
  required String adminEmail,
  required List<Map<String, dynamic>> storeListings,
  required NgmyHelperGiftGrantCallback onGrant,
  VoidCallback? onDataChanged,
}) async {
  if (_helperGiftAdminPopupOpen) return;
  if (NgmyHelperGiftAdminPopupSession.isDismissedForAppSession) return;
  if (!await NgmyHelperGiftAdminPopupSettings.isEnabled()) return;

  await NgmyCivicHelperGifts.hydrateFromCloud(config);
  NgmyCivicHelperGifts.syncOpenPendingFromMemberStreaks(config);
  NgmyCivicHelperGifts.reconcilePendingWithInbox(config);

  final pending = NgmyCivicHelperGifts.openPendingNeedingAdminGrant(config);
  if (pending.isEmpty) return;

  final ctx = await _waitForHelperGiftPopupContext(preferred: context);
  if (ctx == null || !ctx.mounted) return;

  _helperGiftAdminPopupOpen = true;
  try {
    final queue = List<NgmyHelperGiftPending>.from(pending)
      ..sort((a, b) {
        final sc = a.state.trim().compareTo(b.state.trim());
        if (sc != 0) return sc;
        return b.createdAt.compareTo(a.createdAt);
      });

    if (NgmyHelperGiftAdminPopupSession.isDismissedForAppSession) return;

    final stillOpen = NgmyCivicHelperGifts.openPendingNeedingAdminGrant(config);
    if (stillOpen.isEmpty) return;
    final item = stillOpen.first;

    final granted = await showNgmyHelperGiftAdminCelebrationPopup(
      ctx,
      pending: item,
      storeListings: storeListings,
      onGrant: onGrant,
    );
    if (granted == true) {
      NgmyCivicHelperGifts.markAllPendingGrantedForRecipient(config, item.email);
      NgmyCivicHelperGifts.reconcilePendingWithInbox(config);
      unawaited(NgmyCivicHelperGifts.persistPendingLocal(config));
      unawaited(NgmyCivicHelperGifts.persistCloud(config));
      onDataChanged?.call();
    } else {
      NgmyHelperGiftAdminPopupSession.markDismissedForAppSession();
    }
  } finally {
    _helperGiftAdminPopupOpen = false;
  }
}

/// One full-screen card (~10s) per pending helper; returns true if a gift was granted.
Future<bool?> showNgmyHelperGiftAdminCelebrationPopup(
  BuildContext context, {
  required NgmyHelperGiftPending pending,
  required List<Map<String, dynamic>> storeListings,
  required NgmyHelperGiftGrantCallback onGrant,
}) {
  return showGeneralDialog<bool>(
    context: context,
    useRootNavigator: true,
    barrierDismissible: false,
    barrierColor: Colors.black.withValues(alpha: 0.38),
    transitionDuration: const Duration(milliseconds: 420),
    pageBuilder: (ctx, _, __) => _HelperGiftAdminPopupOverlay(
      pending: pending,
      storeListings: storeListings,
      onGrant: onGrant,
    ),
    transitionBuilder: (ctx, anim, _, child) {
      final curved = CurvedAnimation(
        parent: anim,
        curve: Curves.easeOutCubic,
        reverseCurve: Curves.easeInCubic,
      );
      return FadeTransition(
        opacity: anim,
        child: SlideTransition(
          position: Tween<Offset>(begin: const Offset(0, 0.2), end: Offset.zero).animate(curved),
          child: ScaleTransition(
            scale: Tween<double>(begin: 0.94, end: 1).animate(curved),
            child: child,
          ),
        ),
      );
    },
  );
}

class _HelperGiftAdminPopupOverlay extends StatefulWidget {
  const _HelperGiftAdminPopupOverlay({
    required this.pending,
    required this.storeListings,
    required this.onGrant,
  });

  final NgmyHelperGiftPending pending;
  final List<Map<String, dynamic>> storeListings;
  final NgmyHelperGiftGrantCallback onGrant;

  @override
  State<_HelperGiftAdminPopupOverlay> createState() => _HelperGiftAdminPopupOverlayState();
}

class _HelperGiftAdminPopupOverlayState extends State<_HelperGiftAdminPopupOverlay> {
  static const _autoSeconds = 10;
  var _secondsLeft = _autoSeconds;
  Timer? _timer;
  var _closing = false;

  List<Color> get _gradient => ngmyHelperGiftStateGradient(widget.pending.state);

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (t) {
      if (!mounted) return;
      if (_secondsLeft <= 1) {
        t.cancel();
        unawaited(_close(false));
        return;
      }
      setState(() => _secondsLeft--);
    });
  }

  Future<void> _close(bool granted) async {
    if (_closing) return;
    _closing = true;
    _timer?.cancel();
    if (mounted) Navigator.of(context, rootNavigator: true).pop(granted);
  }

  Future<void> _openGrant() async {
    _timer?.cancel();
    if (!mounted) return;
    final gift = await showNgmyHelperGiftGrantSheet(
      context: context,
      pending: widget.pending,
      storeListings: widget.storeListings,
      onGrant: ({
        required String giftName,
        required double amount,
        required String styleId,
        required String storeAddress,
        required String storeSellerEmail,
        required String storeSellerName,
        required String storeListingId,
      }) =>
          widget.onGrant(
        widget.pending,
        giftName: giftName,
        amount: amount,
        styleId: styleId,
        storeAddress: storeAddress,
        storeSellerEmail: storeSellerEmail,
        storeSellerName: storeSellerName,
        storeListingId: storeListingId,
      ),
    );
    if (gift != null) {
      await _close(true);
    } else if (mounted) {
      setState(() => _secondsLeft = _autoSeconds);
      _timer = Timer.periodic(const Duration(seconds: 1), (t) {
        if (!mounted) return;
        if (_secondsLeft <= 1) {
          t.cancel();
          unawaited(_close(false));
          return;
        }
        setState(() => _secondsLeft--);
      });
    }
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final stateLabel = widget.pending.state.trim().isEmpty ? 'Civic Registry' : widget.pending.state.trim();
    return PopScope(
      canPop: true,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) unawaited(_close(false));
      },
      child: Stack(
        children: [
          Positioned.fill(child: ColoredBox(color: Colors.black.withValues(alpha: 0.42))),
          Material(
            color: Colors.transparent,
            child: SafeArea(
              child: Center(
                child: SingleChildScrollView(
                  padding: const EdgeInsets.symmetric(vertical: 28, horizontal: 18),
                  child: ConstrainedBox(
                    constraints: const BoxConstraints(maxWidth: 400),
                    child: Container(
                      padding: const EdgeInsets.fromLTRB(22, 14, 22, 20),
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(32),
                        gradient: LinearGradient(
                          begin: Alignment.topLeft,
                          end: Alignment.bottomRight,
                          colors: _gradient,
                        ),
                        border: Border.all(color: Colors.white.withValues(alpha: 0.28), width: 1.4),
                        boxShadow: [
                          BoxShadow(
                            color: _gradient.first.withValues(alpha: 0.45),
                            blurRadius: 48,
                            offset: const Offset(0, 18),
                          ),
                        ],
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Center(
                            child: Container(
                              width: 44,
                              height: 4,
                              margin: const EdgeInsets.only(bottom: 16),
                              decoration: BoxDecoration(
                                color: Colors.white.withValues(alpha: 0.3),
                                borderRadius: BorderRadius.circular(2),
                              ),
                            ),
                          ),
                          Align(
                            alignment: Alignment.topRight,
                            child: IconButton(
                              onPressed: () => unawaited(_close(false)),
                              icon: const Icon(Icons.close_rounded, color: Colors.white),
                              tooltip: 'Close',
                            ),
                          ),
                          Container(
                            width: 82,
                            height: 82,
                            decoration: BoxDecoration(
                              shape: BoxShape.circle,
                              color: Colors.white.withValues(alpha: 0.18),
                              border: Border.all(color: Colors.white.withValues(alpha: 0.45), width: 2),
                            ),
                            child: const Center(child: Text('🎁', style: TextStyle(fontSize: 42))),
                          ),
                          const SizedBox(height: 14),
                          Text(
                            'HELPER REWARD · $stateLabel'.toUpperCase(),
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.88),
                              fontWeight: FontWeight.w900,
                              fontSize: 11,
                              letterSpacing: 1.3,
                            ),
                          ),
                          const SizedBox(height: 10),
                          const Text(
                            '3 first-helps in a row!',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w900,
                              fontSize: 26,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            widget.pending.fullName,
                            textAlign: TextAlign.center,
                            style: const TextStyle(
                              color: Colors.white,
                              fontWeight: FontWeight.w800,
                              fontSize: 20,
                            ),
                          ),
                          const SizedBox(height: 6),
                          Text(
                            [
                              if (widget.pending.registryId.isNotEmpty) 'ID ${widget.pending.registryId}',
                              if (widget.pending.city.isNotEmpty) widget.pending.city,
                            ].join(' · '),
                            textAlign: TextAlign.center,
                            style: TextStyle(color: Colors.white.withValues(alpha: 0.85), fontSize: 13),
                          ),
                          const SizedBox(height: 18),
                          Container(
                            width: double.infinity,
                            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
                            decoration: BoxDecoration(
                              color: Colors.black.withValues(alpha: 0.18),
                              borderRadius: BorderRadius.circular(14),
                            ),
                            child: Text(
                              'Next alert in $_secondsLeft s · Grant a money card or close to see the next state.',
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.92),
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                height: 1.35,
                              ),
                            ),
                          ),
                          const SizedBox(height: 18),
                          SizedBox(
                            width: double.infinity,
                            child: FilledButton.icon(
                              onPressed: () => unawaited(_openGrant()),
                              style: FilledButton.styleFrom(
                                backgroundColor: Colors.white,
                                foregroundColor: _gradient.first,
                                padding: const EdgeInsets.symmetric(vertical: 14),
                                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                              ),
                              icon: const Icon(Icons.card_giftcard_rounded),
                              label: const Text('Grant present', style: TextStyle(fontWeight: FontWeight.w900)),
                            ),
                          ),
                          TextButton(
                            onPressed: () => unawaited(_close(false)),
                            child: Text(
                              'Not now',
                              style: TextStyle(
                                color: Colors.white.withValues(alpha: 0.92),
                                fontWeight: FontWeight.w700,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
