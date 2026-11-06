import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_lab.dart';

void main() {
  testWidgets('pinching out then letting a finger go and putting it down again keeps the zoom where it is', (t) async {
    final cam = Cam3(dist: 200)
      ..maxDist = 2400
      ..minDist = 30;
    await t.pumpWidget(MaterialApp(home: SizedBox(width: 400, height: 800, child: Scene3DView(scene: const Scene3D([]), cam: cam, onDoubleTap: (_, __) {}))));
    await t.pump();
    const c = Offset(200, 400);
    final a = await t.startGesture(c + const Offset(-100, 0), pointer: 1);
    var b = await t.startGesture(c + const Offset(100, 0), pointer: 2);
    for (var i = 1; i <= 10; i++) {
      await a.moveTo(c + Offset(-100 + i * 8.0, 0));
      await b.moveTo(c + Offset(100 - i * 8.0, 0));
    }
    final far = cam.dist;
    expect(far, greaterThan(600), reason: 'fingers together zoom out');
    await b.up();
    b = await t.startGesture(c + const Offset(100, 0), pointer: 3);
    for (var i = 1; i <= 4; i++) {
      await a.moveTo(c + Offset(-20 + i * 1.0, 0));
    }
    expect(cam.dist, greaterThan(far * 0.85), reason: 'the zoom is not thrown back to where the gesture began');
    await a.up();
    await b.up();
    await t.pump(const Duration(seconds: 1));
  });

  testWidgets('the zoom out button answers the moment it is touched and keeps going while it is held', (t) async {
    final cam = Cam3(dist: 200)
      ..maxDist = 2400
      ..minDist = 30;
    await t.pumpWidget(MaterialApp(
        home: Scaffold(
            body: Stage3D(scene: const Scene3D([]), cam: cam, onPick: (_) {}, onHome: () {}))));
    await t.pump();
    final out = find.byTooltip('Zoom out');
    expect(out, findsOneWidget);
    final g = await t.startGesture(t.getCenter(out));
    await t.pump(const Duration(milliseconds: 20));
    expect(cam.dist, closeTo(290, 1), reason: 'one big step straight away');
    await t.pump(const Duration(milliseconds: 700));
    expect(cam.dist, greaterThan(400), reason: 'it keeps zooming while held');
    await g.up();
    final before = cam.dist;
    await t.pump(const Duration(milliseconds: 500));
    expect(cam.dist, before, reason: 'it stops when let go');
    await t.tap(find.byTooltip('Zoom in'));
    await t.pump(const Duration(milliseconds: 20));
    expect(cam.dist, lessThan(before));
  });
}
