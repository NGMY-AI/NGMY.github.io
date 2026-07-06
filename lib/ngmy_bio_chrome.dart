import 'package:flutter/services.dart';

import 'ngmy_bio_chrome_stub.dart' if (dart.library.html) 'ngmy_bio_chrome_web.dart' as platform;
import 'ngmy_bio_templates.dart';

Color ngmyBioPageChromeColor(NgmyBioTemplate tpl) => tpl.pageBgEnd ?? tpl.pageBg;

bool ngmyBioIsLightChrome(Color color) => color.computeLuminance() > 0.45;

void ngmyApplyBioPageChrome(Color color) => platform.ngmyApplyBioPageChrome(color);

SystemUiOverlayStyle ngmyBioSystemUiOverlay(Color color) {
  final light = ngmyBioIsLightChrome(color);
  final iconBrightness = light ? Brightness.dark : Brightness.light;
  return SystemUiOverlayStyle(
    statusBarColor: color,
    statusBarIconBrightness: iconBrightness,
    statusBarBrightness: light ? Brightness.light : Brightness.dark,
    systemNavigationBarColor: color,
    systemNavigationBarIconBrightness: iconBrightness,
  );
}
