import 'dart:ui' as ui;

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_text_cache.dart';

// Rooms with TVs stay smooth: going up close to a TV, behind it or round it must not make each picture slow to draw.
// The TV pictures are made a few times a second and reused (up close, the patches of a screen share one picture),
// and their words are laid out once and reused.

void main() {
  test('a lesson room with a TV: the ads are not painted again every frame, from close up, behind the TV or across the room', () {
    final h = HomeProject.lesson('gfci');
    final base = buildHomeRoom(h.room, closed: true);
    expect(base.screens, isNotEmpty, reason: 'the room has a TV');
    var paints = 0;
    final screens = [
      for (final s in base.screens)
        ScreenQuad(s.corners, s.id, (c, size, t) {
          paints++;
          s.paint(c, size, t);
        }, width: s.width, height: s.height, bias: s.bias, order: s.order, group: s.group, twoSided: s.twoSided),
    ];
    final scene = Scene3D(base.polys, info: base.info, labels: base.labels, screens: screens, shell: base.shell, farMin: base.farMin, closedShell: base.closedShell);
    final tv = screens.reduce((a, b) => (a.corners[0] - a.corners[2]).len > (b.corners[0] - b.corners[2]).len ? a : b);
    final mid = V3((tv.corners[0].x + tv.corners[2].x) / 2, (tv.corners[0].y + tv.corners[2].y) / 2, (tv.corners[0].z + tv.corners[2].z) / 2);
    final report = <String>[];
    for (final (name, cam) in [
      ('close up', Cam3(yaw: 0.0, pitch: 0.05, dist: 6, target: mid)),
      ('right up against it', Cam3(yaw: 0.9, pitch: 0.05, dist: 2, target: mid)),
      ('nose on the glass', Cam3(yaw: 0.35, pitch: 0.02, dist: 1.2, target: mid)),
      ('nose on the glass, other side', Cam3(yaw: -0.5, pitch: 0.0, dist: 0.6, target: mid)),
      ('from the side, behind', Cam3(yaw: 1.5, pitch: 0.1, dist: 8, target: mid)),
      ('across the room', Cam3(yaw: 0.4, pitch: 0.2, dist: 60, target: mid)),
    ]) {
      final clock = ValueNotifier<double>(0);
      final painter = Scene3DPainter(scene: scene, cam: cam, hits: HitCache(), clock: clock);
      const size = Size(430, 760);
      paints = 0;
      const frames = 60;
      final sw = Stopwatch()..start();
      for (var i = 0; i < frames; i++) {
        clock.value = 100 + i / 60;
        final rec = ui.PictureRecorder();
        painter.paint(Canvas(rec), size);
        rec.endRecording().dispose();
      }
      sw.stop();
      final perFrame = paints / frames;
      report.add('$name: ${perFrame.toStringAsFixed(2)} ad paints a frame, ${(sw.elapsedMicroseconds / 1000 / frames).toStringAsFixed(2)} ms');
      // One second of frames: the TVs are painted about twenty times (not sixty times each).
      expect(perFrame, lessThanOrEqualTo(screens.length * 0.5), reason: name);
    }
    debugPrint('SPEED ${report.join(' | ')} | words kept: $ngmyTextCacheSize');
  });

  test('a big screen seen from right beside it (part of it behind the camera) shares one picture between its patches', () {
    var paints = 0;
    final quad = ScreenQuad([const V3(-100, 50, 0), const V3(100, 50, 0), const V3(100, -50, 0), const V3(-100, -50, 0)], 1, (c, size, t) {
      paints++;
      c.drawRect(Offset.zero & size, Paint()..color = Colors.blue);
    }, width: 320, height: 160);
    final scene = Scene3D(const [], screens: [quad]);
    final cam = Cam3(yaw: 1.25, pitch: 0.0, dist: 30, target: const V3(60, 0, 0));
    final clock = ValueNotifier<double>(0);
    final painter = Scene3DPainter(scene: scene, cam: cam, hits: HitCache(), clock: clock);
    for (var i = 0; i < 60; i++) {
      clock.value = 200 + i / 60;
      final rec = ui.PictureRecorder();
      painter.paint(Canvas(rec), const Size(430, 760));
      rec.endRecording().dispose();
    }
    debugPrint('SPEED beside a big screen: ${(paints / 60).toStringAsFixed(2)} paints a frame');
    expect(paints, greaterThan(0), reason: 'the screen is in view');
    expect(paints / 60, lessThanOrEqualTo(0.5), reason: 'about twenty pictures a second, not one for every frame and patch');
  });

  test('opening a room: while the camera glides in, the TV pictures are not made again at a new size every frame', () {
    final h = HomeProject.lesson('outlet');
    final base = buildHomeRoom(h.room, closed: true);
    var paints = 0;
    final screens = [
      for (final s in base.screens)
        ScreenQuad(s.corners, s.id, (c, size, t) {
          paints++;
          s.paint(c, size, t);
        }, width: s.width, height: s.height, bias: s.bias, order: s.order, group: s.group, twoSided: s.twoSided),
    ];
    final scene = Scene3D(base.polys, info: base.info, labels: base.labels, screens: screens, shell: base.shell, farMin: base.farMin, closedShell: base.closedShell);
    final tv = screens.reduce((a, b) => (a.corners[0] - a.corners[2]).len > (b.corners[0] - b.corners[2]).len ? a : b);
    final mid = V3((tv.corners[0].x + tv.corners[2].x) / 2, (tv.corners[0].y + tv.corners[2].y) / 2, (tv.corners[0].z + tv.corners[2].z) / 2);
    final clock = ValueNotifier<double>(0);
    final cam = Cam3(yaw: 0.2, pitch: 0.1, dist: 160, target: mid);
    final painter = Scene3DPainter(scene: scene, cam: cam, hits: HitCache(), clock: clock);
    const frames = 90;
    for (var i = 0; i < frames; i++) {
      // A second and a half of gliding from across the room up to the TV.
      final u = i / (frames - 1);
      cam.dist = 160 + (14 - 160) * u;
      cam.yaw = 0.2 - 0.25 * u;
      clock.value = 300 + i / 60;
      final rec = ui.PictureRecorder();
      painter.paint(Canvas(rec), const Size(430, 760));
      rec.endRecording().dispose();
    }
    debugPrint('SPEED glide in: ${(paints / frames).toStringAsFixed(2)} pictures a frame for ${screens.length} screens');
    // About twenty a second for the TV (and fewer for the others), not one for every screen in every frame.
    expect(paints / frames, lessThanOrEqualTo(0.6));
  });
}
