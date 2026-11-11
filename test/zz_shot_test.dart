import 'dart:io';
import 'dart:ui' as ui;
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_frame_drywall.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  testWidgets('shot', (t) async {
    NgmyTone.enabled = false;
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    final key = GlobalKey();
    await t.pumpWidget(MaterialApp(home: RepaintBoundary(key: key, child: const NgmyDrywallPage())));
    await t.pump(const Duration(milliseconds: 600));
    final st = t.state<NgmyDrywallPageState>(find.byType(NgmyDrywallPage));
    final cam = t.widget<Scene3DView>(find.byType(Scene3DView).first).cam;
    Future<void> shot(String n) async {
      await t.pump(const Duration(milliseconds: 700));
      await t.runAsync(() async {
        final b = key.currentContext!.findRenderObject() as RenderRepaintBoundary;
        final img = await b.toImage();
        final d = await img.toByteData(format: ui.ImageByteFormat.png);
        File('C:/Users/appbu/AppData/Local/Temp/claude/shot_$n.png').writeAsBytesSync(d!.buffer.asUint8List());
      });
    }
    await shot('d0');
    final d = st.d;
    // ceiling and some of the walls
    for (final s in kDSlots.where((s) => s.ceiling)) {
      if (s.needsCut) d.cut(s.id);
      d.hang(s.id);
      d.screw(s.id);
    }
    for (final s in kDSlots.where((s) => !s.ceiling && s.wall != 3)) {
      if (s.needsCut) d.cut(s.id);
      d.hang(s.id);
      d.screw(s.id);
    }
    for (final c in kDCuts) { d.saw(c.id); }
    d.bead(0); d.bead(1);
    st.setTool('look');
    cam.setView(target: const V3(0, 50, 0), dist: 120, yaw: 0.0, pitch: 0.1);
    await shot('d1');
    cam.setView(target: const V3(0, 50, 0), dist: 120, yaw: 1.3, pitch: 0.1);
    await shot('d2');
    // finish: taping stage on the panel wall, primed on the window wall
    for (final s in kDSlots.where((s) => s.wall == 3)) {
      if (s.needsCut) d.cut(s.id);
      d.hang(s.id); d.screw(s.id);
    }
    for (final s in kDSlots.where((s) => s.wall == 3)) {}
    for (var i = 0; i < 5; i++) {
      for (var k = 0; k < 1; k++) {
        d.mud(i, 0); d.tape(i, 0);
        d.surf[i].wetUntil = 0;
      }
    }
    d.mud(1, 100); d.surf[1].wetUntil = 0; d.mud(1, 200); d.surf[1].wetUntil = 0;
    d.mud(2, 100); d.surf[2].wetUntil = 0; d.mud(2, 200); d.surf[2].wetUntil = 0; d.mud(2, 300); d.surf[2].wetUntil = 0; d.sand(2, 400); d.paint(2);
    st.setTool('look');
    cam.setView(target: const V3(0, 50, 0), dist: 120, yaw: 0.0, pitch: 0.1);
    await shot('d3');
    cam.setView(target: const V3(0, 50, 0), dist: 120, yaw: 1.3, pitch: 0.2);
    await shot('d4');
    cam.setView(target: const V3(0, 40, 0), dist: 330, yaw: 0.6, pitch: 0.9);
    await shot('d5');
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 13));
  });
}
