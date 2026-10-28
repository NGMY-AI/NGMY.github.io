import 'dart:math' as math;
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_avatar_glb.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_tour.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  for (final key in kGlbFiles.keys) {
    testWidgets('the real $key is read from its file, with its own animations, and moves', (t) async {
      final sw = Stopwatch()..start();
      final a = (await t.runAsync(() => GlbAvatar.load(key)))!;
      debugPrint('$key read in ${sw.elapsedMilliseconds} ms, clips ${a.clips.keys.toList()}');
      expect(a.clips, isNotEmpty);
      final tw = Stopwatch()..start();
      for (var i = 0; i < 20; i++) {
        a.polys(time: i * 0.05, x: 0, z: 0, yaw: 0);
      }
      debugPrint("$key one pose: ${tw.elapsedMicroseconds / 20000} ms");
      final f0 = a.polys(time: 0, x: 0, z: 0, yaw: 0);
      final f1 = a.polys(time: 0.4, x: 0, z: 0, yaw: 0);
      expect(f0.length, inInclusiveRange(800, 6000));
      var moved = 0.0;
      for (var i = 0; i < f0.length; i++) {
        moved += (f0[i].pts[0] - f1[i].pts[0]).len;
      }
      expect(moved, greaterThan(1));
      // Standing on the floor, about a person tall.
      var lo = 1e9, hi = -1e9;
      for (final p in f0) {
        for (final v in p.pts) {
          lo = math.min(lo, v.y);
          hi = math.max(hi, v.y);
        }
      }
      debugPrint('$key from $lo to $hi, ${f0.length} faces, resident ${a.polys(time: 0, x: 0, z: 0, yaw: 0, close: false).length}');
      expect(lo, closeTo(0, 2));
      expect(hi, inInclusiveRange(55, 90));
    });
  }

  testWidgets("the house draws the real characters once they are read, and plain figures before", (t) async {
    final home = HomeProject(seed: 4);
    final room = home.rooms[0];
    const pose = PersonPose(room: 0, x: 0, z: 40, yaw: 0);
    GlbAvatar.enabled = false;
    final plain = homeDynamic(room, 1.0, person: pose, personStyle: kAvatars["xbot"]).length;
    GlbAvatar.enabled = true;
    await t.runAsync(() => GlbAvatar.load("xbot"));
    final real = homeDynamic(room, 1.0, person: pose, personStyle: kAvatars["xbot"]).length;
    expect(real, greaterThan(plain + 3000));
    final other = homeDynamic(room, 1.0, person: pose, personStyle: kAvatars["human"]).length;
    expect(other, lessThan(real));
  });
}
