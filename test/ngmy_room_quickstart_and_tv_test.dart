import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_project.dart';
import 'package:ngmy/ngmy_construction_projectpage.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';
import 'package:ngmy/ngmy_electronics_tv.dart';
import 'package:ngmy/ngmy_electronics_tv_brands.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUp(() => NgmyTone.enabled = false);

  test('skipping ahead leaves a finished wall, so the wiring can start at once', () {
    for (var seed = 1; seed <= 20; seed++) {
      final p = RoomProject(seed: seed);
      p.fastForward();
      expect(p.roughDone, isTrue);
      expect(p.drywallDone, isTrue);
      for (final o in p.orders) {
        expect(p.installDevice(o.slot, o.device).ok, isTrue, reason: '${o.device} seed $seed');
      }
    }
  });

  testWidgets('the quick start page opens on the devices tab and the skip button does the same', (t) async {
    t.view.physicalSize = const Size(900, 1500);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyRoomProjectPage(seed: 3, quick: true)));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.text('Outlet'), findsWidgets);
    expect(find.textContaining('Skip to the wiring'), findsNothing);
    await t.pump(const Duration(seconds: 12));
    await t.pumpWidget(const SizedBox());
    await t.pumpWidget(const MaterialApp(home: NgmyRoomProjectPage(seed: 3)));
    await t.pump(const Duration(milliseconds: 700));
    expect(find.textContaining('Skip to the wiring'), findsOneWidget);
    await t.tap(find.textContaining('Skip to the wiring'));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.text('Outlet'), findsWidgets);
    await t.pump(const Duration(seconds: 12));
  });

  testWidgets('each TV brand has its own apps screen', (t) async {
    t.view.physicalSize = const Size(900, 500);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    final seen = <String>{};
    for (final kind in ['tv', 'lgtv', 'sonytv', 'appletv', 'bangtv']) {
      seen.add(tvBrandOf(kind));
      var opened = -1;
      await t.pumpWidget(MaterialApp(home: Scaffold(body: SizedBox(width: 480, height: 270, child: NgmyTvHome(kind: kind, onOpen: (a) => opened = a, onClose: () {})))));
      await t.pump();
      expect(t.takeException(), isNull, reason: kind);
      expect(find.byType(NgmyTvHome), findsOneWidget);
      expect(kNgmyApps.isNotEmpty, isTrue);
      expect(opened, -1);
    }
    expect(seen.length, 5);
  });

  testWidgets('the TV big screen shows the brand apps when the apps button is pressed', (t) async {
    t.view.physicalSize = const Size(900, 600);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(const MaterialApp(home: NgmyTvScreen(kind: 'appletv', title: 'Apple TV 4K', showBoot: false)));
    await t.pump(const Duration(milliseconds: 300));
    await t.tap(find.text('APPS'));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.byType(NgmyTvHome), findsOneWidget);
    await t.pumpWidget(const SizedBox());
    await t.pump(const Duration(seconds: 1));
  });
}
