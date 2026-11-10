import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_avatar_glb.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_tour.dart';

void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  List<ResidentFigure> people(HRoom room) => [
        for (var i = 0; i < kResidents.length; i++) ResidentFigure(id: i, room: room.id, x: (i - 3) * 25.0, z: 40, yaw: 0, style: kResidents[i].style, label: kResidents[i].name),
      ];

  testWidgets('the people of the city are your own 3D characters (X Bot and Soldier), and a different person is never drawn in their place while they load', (t) async {
    expect(ngmyPlayerAvatar, 'xbot');
    expect(kResidents.map((r) => r.style.avatar).toSet(), {'xbot', 'soldier'});
    final home = HomeProject(seed: 4);
    final room = home.rooms.firstWhere((r) => r.kind == 'outside');
    // Not read yet: nobody stands there, rather than somebody else.
    late List<Poly> loading;
    await t.runAsync(() async => loading = homeDynamic(room, 1.0, residents: people(room)));
    expect(loading.where((p) => p.id >= idHResident), isEmpty);
    await t.runAsync(() => Future.wait([GlbAvatar.load('xbot'), GlbAvatar.load('soldier')]));
    final loaded = homeDynamic(room, 1.0, residents: people(room));
    expect(loaded.where((p) => p.id >= idHResident).length, greaterThan(5000));
    // The X Bot residents have a face put on (eyes with a dark middle) and are dressed: skin on the head, a shirt, trousers.
    final xbotFace = loaded.where((p) => p.id == idHResident && p.color == Colors.white).length;
    expect(xbotFace, greaterThanOrEqualTo(2));
  });

  testWidgets('only when a character file cannot be read at all, a plain person in the same colours stands in', (t) async {
    final home = HomeProject(seed: 4);
    final room = home.rooms.firstWhere((r) => r.kind == 'outside');
    GlbAvatar.enabled = false;
    addTearDown(() => GlbAvatar.enabled = true);
    final plain = homeDynamic(room, 1.0, residents: people(room));
    expect(plain.length, greaterThan(500));
  });

  testWidgets('a picture on a billboard is drawn on top of the board behind it, in the big town too', (t) async {
    // More than 1500 faces, so the scene is drawn in blocks, plus one board in a group with a picture in front of it.
    final polys = <Poly>[
      for (var i = 0; i < 1600; i++) Poly([V3(500.0 + i, 0, -900), V3(501.0 + i, 0, -900), V3(501.0 + i, 1, -900)], const V3(0, 0, 1), Colors.grey, 0),
      const Poly([V3(-20, -20, 0), V3(20, -20, 0), V3(20, 20, 0), V3(-20, 20, 0)], V3(0, 0, 1), Color(0xFFFF0000), 0, group: 77),
    ];
    final corners = [const V3(-15, 15, 0.4), const V3(15, 15, 0.4), const V3(15, -15, 0.4), const V3(-15, -15, 0.4)];
    final scene = Scene3D(polys, screens: [ScreenQuad(corners, 0, (c, s, tt) => c.drawRect(Offset.zero & s, Paint()..color = const Color(0xFF00FF00)), group: 77, order: 2)]);
    final rec = ui.PictureRecorder();
    Scene3DPainter(scene: scene, cam: Cam3(yaw: 0, pitch: 0, dist: 90, target: V3.zero), hits: HitCache(), clock: ValueNotifier(0)).paint(Canvas(rec), const Size(200, 200));
    final pic = rec.endRecording();
    late ByteData bytes;
    await t.runAsync(() async {
      final img = await pic.toImage(200, 200);
      bytes = (await img.toByteData(format: ui.ImageByteFormat.rawRgba))!;
    });
    final o = (100 * 200 + 100) * 4;
    expect(bytes.getUint8(o + 1), greaterThan(150), reason: 'the middle of the board shows the picture (green), not the red board');
    expect(bytes.getUint8(o), lessThan(100));
  });

  testWidgets('the big town is drawn in blocks: the faces that cannot be seen are skipped', (t) async {
    final home = HomeProject(seed: 4);
    final room = home.rooms.firstWhere((r) => r.kind == 'outside');
    final scene = buildHomeRoom(room);
    expect(scene.polys.length, greaterThan(1500));
    int drawn(Cam3 cam) {
      Scene3DPainter(scene: scene, cam: cam, hits: HitCache(), clock: ValueNotifier(0)).paint(Canvas(ui.PictureRecorder()), const Size(800, 600));
      return Scene3DPainter.lastDrawn;
    }

    final front = drawn(Cam3(yaw: 0, pitch: 0.3, dist: 60, target: const V3(110, 30, 140)));
    final back = drawn(Cam3(yaw: 3.14, pitch: 0.3, dist: 60, target: const V3(110, 30, 140)));
    expect(front, greaterThan(50));
    expect(back, greaterThan(50));
    expect(drawn(Cam3(yaw: 0, pitch: 0.3, dist: 60, target: const V3(110, 30, 140))), front);
  });
}
