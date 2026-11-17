import 'dart:async';
import 'dart:io';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_avatar_glb.dart';

// The characters (X Bot, Dancer, Soldier) are made ready beforehand and kept as small files of plain numbers, so opening
// a lesson or a job does not stop the phone for a second or more while their .glb files are worked out (unpacking the
// skin pictures and thinning the bodies). This checks the ready files are the same as working the .glb files out now.
// To make them again after changing how a character is read: NGMY_BAKE=1 flutter test test/ngmy_avatar_ready_files_test.dart

void main() {
  testWidgets('the ready made characters load without stopping the phone and match their .glb files', (tester) async {
    await tester.runAsync(() async {
      if (Platform.environment['NGMY_BAKE'] != null) {
        for (final k in kGlbFiles.keys) {
          File(GlbAvatar.kBakedFile(k)).writeAsBytesSync((await GlbAvatar.readGlb(k)).bake());
        }
      }
      // Reading the ready files (all three, as on opening a lesson): the longest stop of the phone is tiny.
      final loaded = <String, GlbAvatar>{};
      for (final k in kGlbFiles.keys) {
        expect(File(GlbAvatar.kBakedFile(k)).existsSync(), isTrue, reason: 'the ready file for $k is missing: make it with NGMY_BAKE=1');
        var last = DateTime.now();
        var worst = 0;
        final t = Timer.periodic(const Duration(milliseconds: 1), (_) {
          final now = DateTime.now();
          final gap = now.difference(last).inMilliseconds;
          if (gap > worst) worst = gap;
          last = now;
        });
        final sw = Stopwatch()..start();
        final a = await GlbAvatar.load(k);
        sw.stop();
        t.cancel();
        debugPrint('READY $k: ${File(GlbAvatar.kBakedFile(k)).lengthSync() ~/ 1024} KB, read in ${sw.elapsedMilliseconds} ms, longest stop $worst ms');
        expect(a, isNotNull);
        loaded[k] = a!;
        expect(worst, lessThan(40), reason: 'reading $k must not stop the phone');
      }

      for (final k in kGlbFiles.keys) {
        final fresh = await GlbAvatar.readGlb(k);
        expect(listEquals(File(GlbAvatar.kBakedFile(k)).readAsBytesSync(), fresh.bake()), isTrue, reason: 'the ready file for $k is out of date: make it again with NGMY_BAKE=1');
        final baked = loaded[k]!;
        // The same character in every way: the same faces, points and colours, walking, running and standing.
        for (final (walking, running, close) in [(false, false, true), (true, false, false), (true, true, true)]) {
          for (final time in [0.0, 0.7, 2.3]) {
            final a = fresh.polys(time: time, x: 3, z: 4, yaw: 0.6, walking: walking, running: running, close: close, walkedUnits: walking ? 30 : null);
            final b = baked.polys(time: time, x: 3, z: 4, yaw: 0.6, walking: walking, running: running, close: close, walkedUnits: walking ? 30 : null);
            expect(b.length, a.length);
            for (var i = 0; i < a.length; i += 7) {
              expect(b[i].color, a[i].color);
              for (var v = 0; v < a[i].pts.length; v++) {
                expect(b[i].pts[v].x, a[i].pts[v].x);
                expect(b[i].pts[v].y, a[i].pts[v].y);
                expect(b[i].pts[v].z, a[i].pts[v].z);
              }
            }
          }
        }
        final tinted = baked.polys(time: 1, x: 0, z: 0, yaw: 0, tint: Colors.red, skin: Colors.brown, pants: Colors.blue, close: false);
        expect(tinted.length, fresh.polys(time: 1, x: 0, z: 0, yaw: 0, tint: Colors.red, skin: Colors.brown, pants: Colors.blue, close: false).length);
      }
    });
  });
}
