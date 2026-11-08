import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:ngmy/ngmy_universe_data.dart';
import 'package:ngmy/ngmy_universe_globe.dart';

void main() {
  setUp(() => NgmyTone.enabled = false);

  testWidgets('with no internet and the map not saved yet, the globe says so and Try again works once the map is there', (t) async {
    t.view.physicalSize = const Size(900, 1800);
    t.view.devicePixelRatio = 2.0;
    addTearDown(t.view.reset);
    final real = Uint8List.fromList(utf8.encode(File('assets/data/world110.json').readAsStringSync()));
    var online = false;
    t.binding.defaultBinaryMessenger.setMockMessageHandler('flutter/assets', (ByteData? message) async {
      if (!online) return null;
      return ByteData.view(real.buffer);
    });
    addTearDown(() => t.binding.defaultBinaryMessenger.setMockMessageHandler('flutter/assets', null));
    await t.pumpWidget(const MaterialApp(home: NgmyGlobeStudio()));
    await t.pump(const Duration(milliseconds: 500));
    expect(find.textContaining('not saved on this phone yet'), findsOneWidget);
    expect(find.byType(CircularProgressIndicator), findsNothing, reason: 'no spinner that never ends');
    expect(find.text('Try again'), findsOneWidget);
    // The phone gets the map (online once). The same tap now works, because a failed load is not remembered.
    online = true;
    await t.tap(find.text('Try again'));
    // A big file is read on another thread, which needs real time.
    await t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 800)));
    await t.pump(const Duration(milliseconds: 300));
    expect(find.textContaining('not saved on this phone yet'), findsNothing);
    expect(find.text('Try again'), findsNothing);
    final w = await t.runAsync(() => UWorld.load());
    expect(w!.countries.length, greaterThan(100));
  });

  test('the map of the world is on the list the service worker saves for offline, and on the list the page warms', () {
    final sw = File('web/ngmy_service_worker.js').readAsStringSync();
    final index = File('web/index.html').readAsStringSync();
    expect(sw, contains('./assets/assets/data/world110.json'));
    expect(index, contains('assets/assets/data/world110.json'));
    expect(File('assets/data/world110.json').existsSync(), isTrue);
  });
}
