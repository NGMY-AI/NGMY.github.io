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

  testWidgets('the people of the city look the same with no internet: they never depend on a character file', (t) async {
    final home = HomeProject(seed: 4);
    final room = home.rooms.firstWhere((r) => r.kind == 'outside');
    GlbAvatar.enabled = false;
    final offline = homeDynamic(room, 1.0, residents: people(room));
    GlbAvatar.enabled = true;
    await t.runAsync(() => GlbAvatar.load('michelle'));
    final online = homeDynamic(room, 1.0, residents: people(room));
    expect(online.length, offline.length, reason: 'the residents are drawn by the same code whether or not a .glb was read');
    for (var i = 0; i < online.length; i++) {
      expect(online[i].color, offline[i].color);
    }
  });

  testWidgets('a person has a face with eyes, a nose and lips, hair, ears and fingers, and the ones near you have more detail than the far ones', (t) async {
    final home = HomeProject(seed: 4);
    final room = home.rooms.firstWhere((r) => r.kind == 'outside');
    final base = homeDynamic(room, 1.0, person: PersonPose(room: room.id, x: 0, z: 0, yaw: 0)).length;
    int count(double x) => homeDynamic(room, 1.0, person: PersonPose(room: room.id, x: 0, z: 0, yaw: 0), residents: [ResidentFigure(id: 1, room: room.id, x: x, z: 0, yaw: 0, style: kResidents[0].style, label: '')]).length - base;
    final near = count(10), far = count(400);
    expect(near, greaterThan(far + 300));
    expect(far, lessThan(700), reason: 'far people stay light so the town is quick');
    // The parts are in the skin colour of the person: face, neck, ears, hands and fingers.
    final skin = kResidents[0].style.skin;
    final polys = homeDynamic(room, 1.0, residents: [ResidentFigure(id: 1, room: room.id, x: 10, z: 0, yaw: 0, style: kResidents[0].style, label: '')], person: PersonPose(room: room.id, x: 0, z: 0, yaw: 0));
    final skinFaces = polys.where((p) => p.color == skin).length;
    expect(skinFaces, greaterThan(150));
  });

  testWidgets('the player is an ordinary person to begin with and walks the same on every visit', (t) async {
    expect(ngmyPlayerAvatar, 'human');
    final home = HomeProject(seed: 4);
    final room = home.rooms.firstWhere((r) => r.kind == 'outside');
    final a = homeDynamic(room, 1.0, person: PersonPose(room: room.id, x: 0, z: 0, yaw: 0, walking: true, phase: 0.3), personStyle: playerStyle).length;
    final b = homeDynamic(room, 2.0, person: PersonPose(room: room.id, x: 5, z: 3, yaw: 1, walking: true, phase: 0.3), personStyle: playerStyle).length;
    expect(a, b);
  });

  testWidgets('the big town is drawn in blocks: the faces that cannot be seen are skipped, and the picture is the same as before', (t) async {
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
    final high = drawn(Cam3(yaw: 0, pitch: 1.2, dist: 160, target: const V3(110, 30, 140)));
    expect(front, greaterThan(50));
    expect(back, greaterThan(50));
    expect(high, greaterThan(front ~/ 4));
    // The same view twice gives the same number.
    expect(drawn(Cam3(yaw: 0, pitch: 0.3, dist: 60, target: const V3(110, 30, 140))), front);
  });
}

