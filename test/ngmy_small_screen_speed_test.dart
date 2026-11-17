import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';
import 'package:ngmy/ngmy_electronics_tv.dart';

// The little screens on the lab board show the whole real ad. Its picture is made fifteen times a second and kept;
// the frames in between only show the kept picture, which is very quick, so a board with several screens stays smooth.
void main() {
  test('small board screens: the frames between new pictures are very quick', () {
    double ms(void Function(Canvas c, double t) draw) {
      // Make the picture for this moment once.
      final first = ui.PictureRecorder();
      draw(Canvas(first), 5.0);
      first.endRecording().dispose();
      // The frames that follow in the same fifteenth of a second only show it.
      final sw = Stopwatch()..start();
      for (var i = 0; i < 300; i++) {
        final rec = ui.PictureRecorder();
        draw(Canvas(rec), 5.0 + i * 0.0001);
        rec.endRecording().dispose();
      }
      return sw.elapsedMicroseconds / 1000 / 300;
    }

    final tv = ms((c, t) => paintNgmyTv(c, const Size(66, 38), 6, t));
    final phone = ms((c, t) => paintNgmyAd(c, const Size(24, 44), t));
    debugPrint('SMALL kept picture: tv ${tv.toStringAsFixed(3)} ms, phone ${phone.toStringAsFixed(3)} ms');
    expect(tv, lessThan(0.2));
    expect(phone, lessThan(0.2));
  });
}
