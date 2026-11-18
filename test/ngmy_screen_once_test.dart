import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_screen_cache.dart';

// A TV in a room keeps its own picture of the ad. While that picture is made, a small screen's ad is drawn straight into
// it, not made into a second picture first and copied (that doubled the work and the screen thumped when tapping menus).
void main() {
  test('inside a room picture the ad is drawn straight in, once, and the flag is let go', () {
    var drawn = 0;
    ngmyMakingScreenPicture = true;
    final rec = ui.PictureRecorder();
    final c = Canvas(rec);
    ngmyDrawCachedScreen(c, 'once-test', const Size(160, 90), 1.0, (pc) => drawn++);
    ngmyDrawCachedScreen(c, 'once-test', const Size(160, 90), 1.0, (pc) => drawn++);
    ngmyMakingScreenPicture = false;
    rec.endRecording().dispose();
    expect(drawn, 2, reason: 'drawn straight in each time, no kept second picture');
  });
}
