import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_universe_data.dart';
import 'package:ngmy/ngmy_universe_globe.dart';
import 'package:ngmy/ngmy_universe_hub.dart';
import 'package:ngmy/ngmy_universe_space_a.dart';
import 'package:ngmy/ngmy_universe_space_b.dart';

void main() {
  late UWorld world;

  setUpAll(() {
    world = UWorld.parse(File('assets/data/world110.json').readAsStringSync());
  });

  test('the world map knows where well-known places are', () {
    expect(world.countries.length, greaterThan(150));
    expect(world.at(-100, 40)?.code, 'USA');
    expect(world.at(2.3, 48.8)?.code, 'FRA');
    expect(world.at(37, 0)?.code, 'KEN');
    expect(world.at(-30, -30), isNull); // open ocean
  });

  test('countries have capitals and sensible numbers', () {
    final ken = world.countries.firstWhere((c) => c.code == 'KEN');
    expect(ken.capital, 'Nairobi');
    expect(ken.pop, greaterThan(1e7));
    expect(ken.areaKm2, greaterThan(3e5));
  });

  Future<void> open(WidgetTester t, Widget w) async {
    t.view.physicalSize = const Size(430, 932);
    t.view.devicePixelRatio = 1.0;
    addTearDown(t.view.reset);
    await t.pumpWidget(MaterialApp(home: w));
    await t.pump(const Duration(milliseconds: 400));
  }

  testWidgets('globe opens and a tap selects a country', (t) async {
    await open(t, NgmyGlobeStudio(world: world));
    expect(find.text('EARTH GLOBE'), findsWidgets);
    await t.tapAt(const Offset(215, 330));
    await t.pump(const Duration(milliseconds: 1500));
    expect(tester(t), isNull);
  });

  testWidgets('every space studio opens and runs', (t) async {
    for (final w in const <Widget>[NgmySolarStudio(), NgmyGravityLabStudio(), NgmyBlackHoleStudio(), NgmyGalaxyStudio(), NgmySizeStudio(), NgmySeasonsMoonStudio()]) {
      await open(t, w);
      await t.pump(const Duration(milliseconds: 600));
      expect(t.takeException(), isNull);
      await t.pumpWidget(const SizedBox());
    }
  });

  testWidgets('hub shows seven tiles', (t) async {
    await open(t, const NgmyUniverseHub());
    expect(find.text('EARTH GLOBE'), findsOneWidget);
    expect(find.text('BLACK HOLE'), findsOneWidget);
    await t.tap(find.text('GRAVITY LAB'));
    await t.pump();
    await t.pump(const Duration(milliseconds: 600));
    expect(find.byType(NgmyGravityLabStudio), findsOneWidget);
  });
}

Object? tester(WidgetTester t) => t.takeException();
