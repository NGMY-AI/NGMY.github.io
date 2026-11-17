import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ads3d.dart';
import 'package:ngmy/ngmy_electronics_screens.dart';
import 'package:ngmy/ngmy_electronics_tv.dart';
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
    });
  });

  testWidgets('on the big TV: tap the picture, pick an ad chapter, and Learn more says where to find it', (tester) async {
    tester.view.physicalSize = const Size(1200, 760);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    await _loadFonts();
    await tester.pumpWidget(MaterialApp(theme: ThemeData(fontFamily: 'Roboto'), builder: (c, child) => RepaintBoundary(key: const Key('snap-all'), child: child), home: const NgmyTvScreen(channel: 2, showBoot: false, stayFor: Duration(minutes: 30))));
    await tester.pump(const Duration(milliseconds: 500));
    // Channel 3 is the Construction Lab advert: the chapters list every channel, and Learn more is there.
    expect(find.byKey(const Key('tv-chapters')), findsOneWidget);
    expect(find.byKey(const Key('tv-learn-more')), findsOneWidget);
    await tester.tap(find.byKey(const Key('tv-picture')));
    await tester.pump(const Duration(milliseconds: 300));
    expect(tester.takeException(), isNull);
    await tester.tap(find.byKey(const Key('tv-learn-more')));
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    expect(find.byKey(const Key('ad-info-sheet')), findsOneWidget);
    expect(find.text('Home tab, then Core Protocol, then Construction Lab'), findsOneWidget);
    await tester.tap(find.byKey(const Key('ad-info-replay')));
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    expect(find.byKey(const Key('ad-info-sheet')), findsNothing);

    // The ADS key opens the NGMY Ads app; its chapters are the ads, and picking one plays it.
    await tester.tap(find.text('ADS'));
    await tester.pump(const Duration(milliseconds: 400));
    await tester.dragUntilVisible(find.byKey(const Key('tv-chapter-7')), find.byKey(const Key('tv-chapters')), const Offset(-150, 0));
    await tester.pump(const Duration(milliseconds: 300));
    await tester.tap(find.byKey(const Key('tv-chapter-7')));
    await tester.pump(const Duration(milliseconds: 400));
    await _shotAll(tester, 'tv_big_screen');
    await tester.tap(find.byKey(const Key('tv-learn-more')));
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    expect(find.text('NGMY Wallet'), findsWidgets, reason: 'chapter 8 is the Wallet ad');
    await tester.tap(find.byKey(const Key('ad-info-ok')));
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    // A swipe goes to the next ad.
    await tester.fling(find.byKey(const Key('tv-picture')), const Offset(-300, 0), 1200);
    await tester.pump(const Duration(milliseconds: 400));
    await tester.tap(find.byKey(const Key('tv-learn-more')));
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    expect(find.text('NGMY Game Center'), findsWidgets);
    await tester.tap(find.byKey(const Key('ad-info-ok')));
    for (var i = 0; i < 8; i++) {
      await tester.pump(const Duration(milliseconds: 100));
    }
    await tester.pumpWidget(const SizedBox());
    await tester.pump(const Duration(seconds: 1));
  });
}

Future<void> _shotAll(WidgetTester tester, String name) async {
  if (Platform.environment['NGMY_SNAP_DIR'] == null) return;
  final rb = tester.renderObject(find.byKey(const Key('snap-all'))) as RenderRepaintBoundary;
  await tester.runAsync(() async => _save(await rb.toImage(pixelRatio: 0.8), name));
}
