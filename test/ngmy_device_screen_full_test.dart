import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';

// The big screen of the lab computers (iMac, MacBook, monitors) and phones: the X, the full screen button and the
// remote above the device (always in view, on a computer too); full screen fills the window with no remote, and a
// double tap hides the buttons.

bool _fontsLoaded = false;
Future<void> _loadFonts() async {
  if (_fontsLoaded || Platform.environment['NGMY_SNAP_DIR'] == null) return;
  _fontsLoaded = true;
  Future<void> load(String family, List<String> files) async {
    final l = FontLoader(family);
    for (final f in files) {
      final bytes = File(f).readAsBytesSync();
      l.addFont(Future.value(ByteData.view(bytes.buffer)));
    }
    await l.load();
  }

  await load('Roboto', ['assets/fonts/Roboto-Regular.ttf', 'assets/fonts/Roboto-Medium.ttf', 'assets/fonts/Roboto-Bold.ttf']);
  final icons = Platform.environment['NGMY_ICON_FONT'];
  if (icons != null) await load('MaterialIcons', [icons]);
}

Future<void> _shot(WidgetTester tester, String name) async {
  final dir = Platform.environment['NGMY_SNAP_DIR'];
  if (dir == null) return;
  final rb = tester.renderObject(find.byKey(const Key('snap-all'))) as RenderRepaintBoundary;
  await tester.runAsync(() async {
    final img = await rb.toImage(pixelRatio: 0.7);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    File('$dir/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
}

Future<void> _settle(WidgetTester tester) async {
  for (var i = 0; i < 8; i++) {
    await tester.pump(const Duration(milliseconds: 100));
  }
}

Widget _app(String kind) => MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(fontFamily: 'Roboto'),
      builder: (c, child) => RepaintBoundary(key: const Key('snap-all'), child: child),
      home: NgmyDeviceScreen(kind: kind),
    );

void main() {
  testWidgets('iMac on a computer screen: X, full screen and remote in view; full screen fills the window with no remote; double tap hides the buttons', (tester) async {
    tester.view.physicalSize = const Size(1366, 700);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await _loadFonts();
    await tester.pumpWidget(_app('imac'));
    await _settle(tester);
    // Open the NGMY Ads with the remote; then the next ad.
    await tester.tap(find.text('ADS'));
    await _settle(tester);
    await tester.tap(find.text('AD +'));
    await _settle(tester);
    await tester.pump(const Duration(seconds: 12));
    final pic = tester.getRect(find.byKey(const Key('device-picture')));
    for (final f in [find.byKey(const Key('device-fullscreen')), find.text('AD −'), find.text('AD +'), find.text('HOME'), find.text('ADS')]) {
      expect(f, findsOneWidget);
      expect(tester.getRect(f).bottom, lessThanOrEqualTo(pic.top), reason: 'above the screen, not over it');
    }
    expect(find.byKey(const Key('device-learn-more')), findsOneWidget);
    await _shot(tester, 'imac_normal');
    await tester.tap(find.byKey(const Key('device-learn-more')));
    await _settle(tester);
    expect(find.byKey(const Key('ad-info-sheet')), findsOneWidget);
    await tester.tap(find.byKey(const Key('ad-info-ok')));
    await _settle(tester);

    // Full screen.
    await tester.tap(find.byKey(const Key('device-fullscreen')));
    await _settle(tester);
    expect(find.text('AD +'), findsNothing, reason: 'no remote in full screen');
    expect(find.byKey(const Key('device-fullscreen')), findsOneWidget);
    final full = tester.getRect(find.byKey(const Key('device-picture')));
    expect(full.width, greaterThan(pic.width), reason: 'the screen is bigger in full screen');
    await _shot(tester, 'imac_full');
    // Double tap: every button hides, and stays hidden; another double tap brings them back.
    await tester.tap(find.byKey(const Key('device-picture')));
    await tester.pump(const Duration(milliseconds: 60));
    await tester.tap(find.byKey(const Key('device-picture')));
    await _settle(tester);
    expect(find.byKey(const Key('device-learn-more')), findsNothing);
    final fade = tester.widget<AnimatedOpacity>(find.ancestor(of: find.byKey(const Key('device-fullscreen')), matching: find.byType(AnimatedOpacity)).first);
    expect(fade.opacity, 0);
    await tester.pump(const Duration(seconds: 3));
    await tester.tap(find.byKey(const Key('device-picture')));
    await tester.pump(const Duration(milliseconds: 60));
    await tester.tap(find.byKey(const Key('device-picture')));
    await _settle(tester);
    expect(find.byKey(const Key('device-learn-more')), findsOneWidget);
    await tester.tap(find.byKey(const Key('device-fullscreen')));
    await _settle(tester);
    expect(find.text('AD +'), findsOneWidget, reason: 'the remote is back');
    expect(tester.takeException(), isNull);
    await tester.pumpWidget(const SizedBox());
  });

  testWidgets('every device with a screen (not the TVs) has the full screen button and the remote, at computer and phone sizes', (tester) async {
    addTearDown(tester.view.reset);
    tester.view.devicePixelRatio = 1.0;
    final kinds = kScreenDevices.keys.where((k) => !isTvKind(k)).toList();
    expect(kinds, containsAll(['phone', 'tablet', 'laptop', 'imac', 'monitor', 'projector', 'carscreen', 'vision', 'ereader', 'smartwatch']));
    for (final size in [const Size(1366, 700), const Size(400, 860)]) {
      tester.view.physicalSize = size;
      for (final k in kinds) {
        await tester.pumpWidget(_app(k));
        await _settle(tester);
        expect(find.byKey(const Key('device-fullscreen')), findsOneWidget, reason: k);
        expect(find.byKey(const Key('device-remote')), findsOneWidget, reason: k);
        await tester.tap(find.text('ADS'));
        await _settle(tester);
        expect(find.byKey(const Key('device-learn-more')), findsOneWidget, reason: k);
        await tester.tap(find.byKey(const Key('device-fullscreen')));
        await _settle(tester);
        expect(find.byKey(const Key('device-remote')), findsNothing, reason: k);
        expect(tester.takeException(), isNull, reason: '$k at $size');
        await tester.pumpWidget(const SizedBox());
      }
    }
  });

  testWidgets('phone screen: the remote and the full screen button show too, and nothing overflows', (tester) async {
    tester.view.physicalSize = const Size(400, 860);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await _loadFonts();
    await tester.pumpWidget(_app('phone'));
    await _settle(tester);
    expect(find.byKey(const Key('device-remote')), findsOneWidget);
    expect(find.byKey(const Key('device-fullscreen')), findsOneWidget);
    await tester.tap(find.text('ADS'));
    await _settle(tester);
    expect(find.byKey(const Key('device-learn-more')), findsOneWidget);
    await _shot(tester, 'phone_normal');
    await tester.tap(find.byKey(const Key('device-fullscreen')));
    await _settle(tester);
    expect(find.byKey(const Key('device-remote')), findsNothing);
    expect(tester.takeException(), isNull);
    await tester.pumpWidget(const SizedBox());
  });
}
