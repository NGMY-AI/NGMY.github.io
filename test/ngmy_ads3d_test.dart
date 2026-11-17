import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ads3d.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';
import 'package:ngmy/ngmy_electronics_tv.dart';
import 'package:ngmy/ngmy_electronics_tv_ads.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

// The NGMY ads on the lab TVs: real looking commercials (a 3D phone in a studio, a 3D hero object, an end card) that
// can be tapped, swiped, picked by chapter and explained with Learn more.

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

Future<void> _save(ui.Image img, String name) async {
  final dir = Platform.environment['NGMY_SNAP_DIR'];
  if (dir == null) return;
  final png = await img.toByteData(format: ui.ImageByteFormat.png);
  File('$dir/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
}

void main() {
  setUp(() => NgmyTone.enabled = false);

  test('channel 6, Spark Adventure, draws at every size and moment', () {
    for (final s in [const Size(66, 38), const Size(320, 180), const Size(1280, 720), const Size(360, 640)]) {
      for (var t = 0.0; t < 20; t += 0.37) {
        final rec = ui.PictureRecorder();
        paintSparkAdventure(Canvas(rec), s, t);
        rec.endRecording().dispose();
      }
    }
  });

  test('every ad draws at every size and every moment without failing', () {
    final sizes = [const Size(24, 44), const Size(54, 38), const Size(66, 38), const Size(320, 180), const Size(1280, 720), const Size(360, 640), const Size(200, 200)];
    for (var i = 0; i < kNgmyAds3D.length; i++) {
      for (final s in sizes) {
        for (var t = 0.0; t < kNgmyAdLength; t += 0.45) {
          final rec = ui.PictureRecorder();
          paintNgmyAd3D(Canvas(rec), s, i, t, tap: t > 4 ? NgmyAdTap(const Offset(0.7, 0.5), t - 4) : null, ofCount: i.isEven);
          rec.endRecording().dispose();
        }
      }
    }
  });

  test('the ads cover NGMY only, each with where to find it, and the old ads count changed with them', () {
    expect(kNgmyAds3D.length, 14);
    expect(kNgmyAdCount, kNgmyAds3D.length);
    for (final a in kNgmyAds3D) {
      expect(a.find.isNotEmpty, isTrue, reason: a.brand);
      expect(a.bullets.length, 3, reason: a.brand);
      expect(a.rows.length, 3, reason: a.brand);
    }
    // Every channel that is an advert plays one of these ads.
    for (var ch = 0; ch < kNgmyTvChannels.length; ch++) {
      final ad = ngmyTvChannelAd(ch);
      if (ch == 0 || ch == 5) {
        expect(ad, isNull, reason: 'Tree Story and Spark Adventure are shows');
      } else {
        expect(ad, isNotNull);
      }
    }
  });

  testWidgets('pictures of the ads (only when asked)', (tester) async {
    if (Platform.environment['NGMY_SNAP_DIR'] == null) return;
    await _loadFonts();
    await tester.runAsync(() async {
      Future<void> shot(int ad, double t, Size s, String name) async {
        final rec = ui.PictureRecorder();
        paintNgmyAd3D(Canvas(rec), s, ad, t, ofCount: true);
        final img = await rec.endRecording().toImage(s.width.round(), s.height.round());
        await _save(img, name);
      }

      for (final ad in [0, 7, 9]) {
        for (final t in [1.6, 4.8, 7.6, 9.4]) {
          await shot(ad, t, const Size(960, 540), 'ad_${ad}_${(t * 10).round()}');
        }
      }
      await shot(5, 4.8, const Size(360, 640), 'ad_portrait_feature');
      await shot(13, 7.8, const Size(360, 640), 'ad_portrait_card');
      await shot(8, 7.6, const Size(960, 540), 'ad_8_coin');
      for (final t in [1.0, 2.0, 4.0, 6.5, 8.6]) {
        final rec = ui.PictureRecorder();
        paintSparkAdventure(Canvas(rec), const Size(960, 540), t);
        await _save(await rec.endRecording().toImage(960, 540), 'spark_${(t * 10).round()}');
      }
      // The little TV on the lab board (66 by 38) and a phone on the board (24 by 44), seen six times bigger.
      for (final (name, size, ch) in [('board_tv_game_center', const Size(66, 38), 6), ('board_tv_store', const Size(66, 38), 1)]) {
        final rec = ui.PictureRecorder();
        final c = Canvas(rec)..scale(6);
        paintNgmyTv(c, size, ch, 4.8);
        await _save(await rec.endRecording().toImage((size.width * 6).round(), (size.height * 6).round()), name);
      }
      {
        final rec = ui.PictureRecorder();
        final c = Canvas(rec)..scale(8);
        paintNgmyAd(c, const Size(24, 44), 24.8);
        await _save(await rec.endRecording().toImage(24 * 8, 44 * 8), 'board_phone');
      }
    });
  });

  Future<void> settle(WidgetTester tester) async {
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
  }

  Future<void> doubleTap(WidgetTester tester) async {
    await tester.tap(find.byKey(const Key('tv-picture')));
    await tester.pump(const Duration(milliseconds: 60));
    await tester.tap(find.byKey(const Key('tv-picture')));
    await settle(tester);
  }

  testWidgets('on the big TV: tap the picture, small Learn more in the name bar, swipe, full screen and double tap', (tester) async {
    tester.view.physicalSize = const Size(1200, 760);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await _loadFonts();
    await tester.pumpWidget(MaterialApp(theme: ThemeData(fontFamily: 'Roboto'), builder: (c, child) => RepaintBoundary(key: const Key('snap-all'), child: child), home: const NgmyTvScreen(channel: 2, showBoot: false, stayFor: Duration(minutes: 30))));
    await tester.pump(const Duration(milliseconds: 500));
    // The bottom box is as it was: no chapter strip.
    expect(find.byKey(const Key('tv-chapters')), findsNothing);
    // On a computer screen the X, the full screen button and the remote are above the picture (not over it), and they
    // stay in view (they do not fade away after a few seconds).
    await tester.pump(const Duration(seconds: 12));
    final picTop = tester.getRect(find.byKey(const Key('tv-picture'))).top;
    for (final f in [find.byKey(const Key('tv-fullscreen')), find.text('CH +'), find.text('ADS')]) {
      expect(f, findsOneWidget);
      expect(tester.getRect(f).bottom, lessThanOrEqualTo(picTop), reason: 'above the picture');
      final fade = tester.widgetList<AnimatedOpacity>(find.ancestor(of: f, matching: find.byType(AnimatedOpacity)));
      expect(fade.every((o) => o.opacity == 1), isTrue);
    }
    expect(tester.getRect(find.byKey(const Key('tv-info'))).top, greaterThanOrEqualTo(tester.getRect(find.byKey(const Key('tv-picture'))).bottom), reason: 'the name box is under the picture');
    // Learn more is small and sits in the name bar at the bottom of the picture (not in the middle of the ad).
    final pic = tester.getRect(find.byKey(const Key('tv-picture')));
    final lm = tester.getRect(find.byKey(const Key('tv-learn-more')));
    expect(lm.height, lessThanOrEqualTo(30));
    expect(lm.center.dy, greaterThan(pic.bottom - pic.height * 0.14));
    expect(lm.bottom, lessThanOrEqualTo(pic.bottom));
    expect(lm.right, lessThanOrEqualTo(pic.right));
    await _shotAll(tester, 'tv_big_screen');

    await tester.tap(find.byKey(const Key('tv-picture')));
    await tester.pump(const Duration(milliseconds: 300));
    expect(tester.takeException(), isNull);
    await tester.tap(find.byKey(const Key('tv-learn-more')));
    await settle(tester);
    expect(find.byKey(const Key('ad-info-sheet')), findsOneWidget);
    // After the wait the TV has moved on by itself: Learn more tells about the advert on now.
    final pill = find.byType(Text).evaluate().map((e) => (e.widget as Text).data ?? '').firstWhere((s) => s.contains('· CH '));
    final chNow = int.parse(pill.split('CH ').last.trim()) - 1;
    expect(find.text(kNgmyAds3D[ngmyTvChannelAd(chNow)!].find), findsOneWidget, reason: pill);
    await tester.tap(find.byKey(const Key('ad-info-replay')));
    await settle(tester);
    expect(find.byKey(const Key('ad-info-sheet')), findsNothing);

    // The ADS key opens the NGMY Ads app (ad 1 first); a swipe goes to the next ad.
    await tester.tap(find.text('ADS'));
    await tester.pump(const Duration(milliseconds: 400));
    await tester.fling(find.byKey(const Key('tv-picture')), const Offset(-300, 0), 1200);
    await tester.pump(const Duration(milliseconds: 400));
    await tester.tap(find.byKey(const Key('tv-learn-more')));
    await settle(tester);
    expect(find.text('NGMY Jobs and Help'), findsWidgets);
    await tester.tap(find.byKey(const Key('ad-info-ok')));
    await settle(tester);

    // Full screen: the picture fills the screen; a double tap hides every button, another brings them back.
    await tester.tap(find.byKey(const Key('tv-fullscreen')));
    await settle(tester);
    final full = tester.getRect(find.byKey(const Key('tv-picture')));
    expect(full.width, closeTo(1200, 1), reason: 'the picture is as wide as the screen');
    expect(find.text('CH +'), findsNothing, reason: 'no remote in full screen');
    expect(find.byKey(const Key('tv-fullscreen')), findsOneWidget, reason: 'the button to leave full screen is there');
    await _shotAll(tester, 'tv_full_screen');
    await doubleTap(tester);
    expect(find.byKey(const Key('tv-learn-more')), findsNothing, reason: 'buttons hidden');
    final hud = tester.widget<AnimatedOpacity>(find.ancestor(of: find.byKey(const Key('tv-fullscreen')), matching: find.byType(AnimatedOpacity)).first);
    expect(hud.opacity, 0);
    // They stay hidden (no timer brings them back) until the next double tap.
    await tester.pump(const Duration(seconds: 8));
    expect(find.byKey(const Key('tv-learn-more')), findsNothing);
    await doubleTap(tester);
    expect(find.byKey(const Key('tv-learn-more')), findsOneWidget);
    // And the buttons do not hide by themselves in full screen.
    await tester.pump(const Duration(seconds: 8));
    expect(find.byKey(const Key('tv-learn-more')), findsOneWidget);
    await tester.tap(find.byKey(const Key('tv-fullscreen')));
    await settle(tester);
    expect(tester.getRect(find.byKey(const Key('tv-picture'))).width, lessThan(1200));
    await tester.pumpWidget(const SizedBox());
    await tester.pump(const Duration(seconds: 1));
  });
}


Future<void> _shotAll(WidgetTester tester, String name) async {
  if (Platform.environment['NGMY_SNAP_DIR'] == null) return;
  final rb = tester.renderObject(find.byKey(const Key('snap-all'))) as RenderRepaintBoundary;
  await tester.runAsync(() async => _save(await rb.toImage(pixelRatio: 0.8), name));
}
