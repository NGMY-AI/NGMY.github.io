import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';
import 'package:ngmy/ngmy_construction_lab.dart';

void main() {
  testWidgets('on the bench the view turns as far as the back of the device, to the left or the right, but not all the way round; the wall leaves once it is behind', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: ElectricalLessonPage(id: 'outlet')));
    await t.pump(const Duration(milliseconds: 600));
    Scene3DView view() => t.widget<Scene3DView>(find.byType(Scene3DView).first);
    final cam = view().cam;
    bool wall() => view().scene.polys.any((p) => p.id == idWall);
    expect(wall(), isTrue, reason: 'in front of the wall the wall shows');
    cam.orbit(-9, 0);
    await t.pump(const Duration(milliseconds: 100));
    expect(cam.yaw, lessThan(-2.5), reason: 'far enough to see the back, to the left');
    expect(cam.yaw, greaterThan(-3.1), reason: 'but not all the way round');
    expect(wall(), isFalse, reason: 'behind the wall the wall is left out so the back of the device shows');
    cam.orbit(18, 0);
    await t.pump(const Duration(milliseconds: 100));
    expect(cam.yaw, greaterThan(2.5), reason: 'and the same to the right');
    expect(cam.yaw, lessThan(3.1));
    cam.orbit(-3.5, 0);
    await t.pump(const Duration(milliseconds: 100));
    expect(wall(), isTrue, reason: 'back in front: the wall is back');
    await t.pump(const Duration(seconds: 12));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 12));
  });
}
