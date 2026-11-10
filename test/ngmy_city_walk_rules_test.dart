import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homepage.dart';
import 'package:shared_preferences/shared_preferences.dart';

Future<dynamic> _open(WidgetTester t) async {
  SharedPreferences.setMockInitialValues({});
  HomeProject.session = HomeProject(seed: 31)..current = 11;
  await t.pumpWidget(const MaterialApp(home: NgmyHousePage(focus: 'city')));
  await t.pump(const Duration(milliseconds: 600));
  return t.state(find.byType(NgmyHousePage));
}

(double, double) _doorOf(Furn f) {
  final k = kFurnKinds[f.kind]!;
  final dv = rotY(V3(0, 0, k.d / 2 + 10), f.rot * 3.141592653589793 / 2);
  return (f.x + dv.x, f.z + dv.z);
}

void main() {
  testWidgets('walking up to a door does not open it: a button appears, and pressing it opens the door; the zoom and angle stay as set', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    NgmyHousePageStateAccess.reset();
    final st = await _open(t);
    final city = HomeProject.session!.rooms[11];
    final shop = city.furn.firstWhere((f) => f.kind == 'shop');
    final door = _doorOf(shop);
    final cam = t.widget<Scene3DView>(find.byType(Scene3DView).first).cam;
    cam.setView(target: cam.target, dist: 300, yaw: 0.6, pitch: 0.5);
    st.standAtForTest(door.$1, door.$2);
    await t.pump(const Duration(milliseconds: 400));
    expect(st.inner, isNull, reason: 'standing at a door does not take you in');
    expect(st.actLabelForTest, contains('Open the door'));
    // Far from every door there is no button.
    st.standAtForTest(door.$1 + 400, door.$2 + 400);
    await t.pump(const Duration(milliseconds: 100));
    expect(st.actLabelForTest, isNull);
    st.standAtForTest(door.$1, door.$2);
    await t.pump(const Duration(milliseconds: 100));
    st.pressActForTest();
    await t.pump(const Duration(milliseconds: 100));
    for (var i = 0; i < 12; i++) {
      await t.pump(const Duration(milliseconds: 300));
    }
    expect(st.inner, isNotNull);
    expect(cam.yaw, closeTo(0.6, 0.05), reason: 'the angle is the one they had');
    st.leaveForTest();
    for (var i = 0; i < 14; i++) {
      await t.pump(const Duration(milliseconds: 300));
    }
    expect(st.inner, isNull);
    expect(cam.yaw, closeTo(0.6, 0.05), reason: 'and it is the same when they come out');
    expect(cam.dist, closeTo(300, 25), reason: 'the zoom is where they set it');
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('coming back to the city puts the person where they were, inside the building if they were in one', (t) async {
    t.view.physicalSize = const Size(900, 1700);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    NgmyHousePageStateAccess.reset();
    var st = await _open(t);
    final city = HomeProject.session!.rooms[11];
    final shop = city.furn.firstWhere((f) => f.kind == 'shop');
    final door = _doorOf(shop);
    st.standAtForTest(door.$1, door.$2);
    await t.pump(const Duration(milliseconds: 300));
    st.pressActForTest();
    for (var i = 0; i < 6; i++) {
      await t.pump(const Duration(milliseconds: 300));
    }
    expect(st.inner, isNotNull);
    // Leave the page, and come back.
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 12));
    HomeProject.session!.current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage(focus: 'city')));
    for (var i = 0; i < 8; i++) {
      await t.pump(const Duration(milliseconds: 300));
    }
    st = t.state(find.byType(NgmyHousePage));
    expect(st.inner, isNotNull, reason: 'back inside the shop, not back at the house');
    expect((st.inner as dynamic).door.id, shop.id);
    // And a person who stood in the street comes back to the same spot.
    st.leaveForTest();
    await t.pump(const Duration(milliseconds: 300));
    st.standAtForTest(-400.0, 300.0);
    await t.pump(const Duration(milliseconds: 600));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 12));
    HomeProject.session!.current = 11;
    await t.pumpWidget(const MaterialApp(home: NgmyHousePage(focus: 'city')));
    for (var i = 0; i < 8; i++) {
      await t.pump(const Duration(milliseconds: 300));
    }
    st = t.state(find.byType(NgmyHousePage));
    expect((st.walker as dynamic).x, closeTo(-400, 5));
    expect((st.walker as dynamic).z, closeTo(300, 5));
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 12));
  });
}

/// Makes each test start with nothing remembered.
class NgmyHousePageStateAccess {
  static void reset() => NgmyHousePage.forgetWhereForTest();
}
