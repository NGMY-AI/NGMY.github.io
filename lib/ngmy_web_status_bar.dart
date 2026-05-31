import 'ngmy_web_status_bar_stub.dart'
    if (dart.library.html) 'ngmy_web_status_bar_web.dart' as platform;

/// iOS PWA: keep the system status bar light when the app is in light mode.
void ngmyApplyWebStatusBarStyle({required bool lightMode}) =>
    platform.ngmyApplyWebStatusBarStyle(lightMode: lightMode);

/// Web-only: fix cold-start tap offset by resetting scroll + forcing resize.
void ngmyInstallWebViewportSync() => platform.ngmyInstallWebViewportSync();
