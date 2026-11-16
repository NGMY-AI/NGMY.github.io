import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bottom_nav_frame.dart';
import 'package:ngmy/ngmy_core_protocol_sims.dart';
import 'package:ngmy/ngmy_studio_kit.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:ngmy/ngmy_deferred.dart';
import 'package:ngmy/ngmy_home_tech_frames.dart';
import 'package:ngmy/ngmy_iron_triangle_panel.dart';
import 'package:ngmy/ngmy_market_hub_screen.dart';
import 'package:ngmy/ngmy_hub_form_ui.dart';
import 'package:ngmy/ngmy_hud_tech_shell.dart';

// Light mode is calm: plain white cards, icon tiles, nothing glowing or moving.
// NGMY Advisors keep their own look (NgmyHudKeepLook). Dark mode is unchanged.

/// Real letters and icons only when pictures are asked for (NGMY_SNAP_DIR). The checks run on the plain test
/// font, which measures the same on every computer (the real font made one check fail on the build server).
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

Widget _app(Brightness b, Widget child) => MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(brightness: b, useMaterial3: true, fontFamily: 'Roboto'),
      home: Scaffold(
        backgroundColor: b == Brightness.light ? NgmyCalmLight.page : const Color(0xFF121212),
        body: SingleChildScrollView(padding: const EdgeInsets.all(16), child: child),
      ),
    );

Widget _hubGrid() => NgmyHudMotion(
      builder: (context, pulse, scan, orbit) => Column(
        children: [
          const NgmyFramedTitle(title: 'CORE PROTOCOL', subtitle: 'Piano, drums, labs'),
          const SizedBox(height: 14),
          NgmyToolkitGlassPillFrame(
            child: NgmyToolkitAliveHeader(
              title: 'CREATOR TOOLKIT',
              subtitle: 'Live studio',
              colors: const [Color(0xFF22C55E), Color(0xFF8B5CF6)],
              pulse: pulse,
              orbit: orbit,
              icon: Icons.dashboard_rounded,
            ),
          ),
          const SizedBox(height: 14),
          GridView.count(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            crossAxisCount: 2,
            mainAxisSpacing: 12,
            crossAxisSpacing: 12,
            childAspectRatio: 1.4,
            children: [
              for (final c in const [
                [Color(0xFF6366F1), Color(0xFF8B5CF6)],
                [Color(0xFFEC4899), Color(0xFFA855F7)],
                [Color(0xFFBE185D), Color(0xFF7E22CE)],
                [Color(0xFF0F766E), Color(0xFF0D9488)],
              ])
                NgmyHudTechFrame(
                  colors: c,
                  pulse: pulse,
                  scan: scan,
                  orbit: orbit,
                  onTap: () {},
                  child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                    NgmyHudMiniOrb(colors: c, pulse: pulse, orbit: orbit, size: 44, icon: Icons.shield_outlined),
                    const SizedBox(height: 8),
                    Text('Civic Registry', style: TextStyle(fontWeight: FontWeight.w900, fontSize: 12.5, color: NgmyHudInk.title(context))),
                  ]),
                ),
            ],
          ),
          const SizedBox(height: 14),
          const NgmyHomeTechFramesPanel(),
          const SizedBox(height: 18),
          NgmySculptedBottomNavFrame(
            child: Stack(children: [
              const Positioned(left: 11, top: 11, width: 46, height: 46, child: NgmyNavSelectionOrb()),
              Row(children: [
                for (final (i, ic) in const [Icons.home_rounded, Icons.dashboard_rounded, Icons.menu_book_rounded, Icons.circle, Icons.support_agent_rounded, Icons.apps_rounded, Icons.person_rounded].indexed)
                  Expanded(
                    child: Center(
                      child: Icon(ic, size: 28, color: Theme.of(context).brightness == Brightness.light ? (i == 0 ? Colors.white : const Color(0xFF6B7280)) : Colors.white70),
                    ),
                  ),
              ]),
            ]),
          ),
          const SizedBox(height: 20),
        ],
      ),
    );

Future<void> _snap(WidgetTester tester, String name) async {
  final dir = Platform.environment['NGMY_SNAP_DIR'];
  if (dir == null) return;
  final ro = tester.firstRenderObject<RenderRepaintBoundary>(find.byType(RepaintBoundary).first);
  await tester.runAsync(() async {
    final img = await ro.toImage(pixelRatio: 1.5);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    File('$dir/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
}

void main() {
  testWidgets('light mode: plain cards and icon tiles, no glowing painters, nothing moving', (tester) async {
    await _loadFonts();
    await tester.binding.setSurfaceSize(const Size(420, 1400));
    await tester.pumpWidget(_app(Brightness.light, _hubGrid()));
    await tester.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('ngmy-calm-colour-frame')), findsNWidgets(4), reason: 'only the four home frames are filled with colour');
    expect(find.byKey(const Key('ngmy-calm-card')), findsNWidgets(4), reason: 'hub and toolkit tiles: white cards with a thin purple edge');
    expect(find.byKey(const Key('ngmy-calm-pill')), findsOneWidget);
    expect(find.byKey(const Key('ngmy-calm-icon')), findsWidgets);
    expect(find.byKey(const Key('home-tech-calm-neural')), findsOneWidget);
    expect(find.byKey(const Key('home-tech-calm-vault')), findsOneWidget);
    expect(find.byWidgetPredicate((w) => w is CustomPaint && (w.painter is NgmyHudFramePainter || w.painter is NgmyHudMiniOrbPainter)), findsNothing);
    // Nothing is animating: no frames are scheduled once the page has settled.
    await tester.pumpAndSettle(const Duration(milliseconds: 100), EnginePhase.sendSemanticsUpdate, const Duration(seconds: 3));
    await _snap(tester, 'calm_light');
  });

  testWidgets('dark mode keeps the futuristic look', (tester) async {
    await _loadFonts();
    await tester.binding.setSurfaceSize(const Size(420, 1400));
    await tester.pumpWidget(_app(Brightness.dark, _hubGrid()));
    await tester.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('ngmy-calm-card')), findsNothing);
    expect(find.byWidgetPredicate((w) => w is CustomPaint && w.painter is NgmyHudFramePainter), findsWidgets);
    await _snap(tester, 'dark_unchanged');
    await tester.pumpWidget(const SizedBox());
  });

  testWidgets('NGMY Advisors keep their look in light mode', (tester) async {
    await _loadFonts();
    await tester.binding.setSurfaceSize(const Size(420, 1400));
    await tester.pumpWidget(_app(Brightness.light, NgmyHudKeepLook(child: _hubGrid())));
    await tester.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('ngmy-calm-card')), findsNothing);
    expect(find.byWidgetPredicate((w) => w is CustomPaint && w.painter is NgmyHudFramePainter), findsWidgets);
    await tester.pumpWidget(const SizedBox());
  });

  test('light mode frames: thick white cards with a wide soft shadow all round (the chosen reference look)', () {
    final d = NgmyCalmLight.cardDecoration();
    expect(d.color, Colors.white);
    expect(d.boxShadow, isNotEmpty);
    // No negative spread: that drew a dark ledge with corners under the cards.
    expect(d.boxShadow!.every((s) => s.spreadRadius >= 0 && s.blurRadius >= 4), isTrue);
    expect(d.boxShadow!.first.blurRadius, greaterThanOrEqualTo(24));
    final edge = (d.border as Border).top;
    expect(edge.color, NgmyCalmLight.brandEdge);
    expect(edge.width, lessThanOrEqualTo(2), reason: 'a thin edge, never thick');
    expect((d.borderRadius as BorderRadius).topLeft.x, greaterThanOrEqualTo(22), reason: 'round, thick-looking cards');
    expect(NgmyCalmLight.page, Colors.white, reason: 'pure white page');
  });

  testWidgets('Core Protocol is white in light mode', (tester) async {
    SharedPreferences.setMockInitialValues({});
    NgmyTone.enabled = false;
    await _loadFonts();
    await tester.binding.setSurfaceSize(const Size(430, 932));
    await tester.pumpWidget(MaterialApp(
      theme: ThemeData(brightness: Brightness.light, fontFamily: 'Roboto'),
      home: const NgmyCoreProtocolSimsScreen(),
    ));
    await tester.pump(const Duration(milliseconds: 300));
    final scaffold = tester.widget<Scaffold>(find.byType(Scaffold).first);
    expect(scaffold.backgroundColor, NgmyCalmLight.page);
    expect(find.byKey(const Key('ngmy-calm-icon')), findsWidgets);
    await _snap(tester, 'core_light');
    await tester.pumpWidget(const SizedBox());
    await tester.pump(const Duration(seconds: 5));
  });

  testWidgets('Tool Hub in light mode: no dark fade at the bottom, strong coloured sample cards', (tester) async {
    SharedPreferences.setMockInitialValues({});
    await _loadFonts();
    await tester.binding.setSurfaceSize(const Size(430, 1300));
    await tester.pumpWidget(MaterialApp(
      theme: ThemeData(brightness: Brightness.light, fontFamily: 'Roboto'),
      home: const NgmyMarketHubScreen(userEmail: 'test@example.com'),
    ));
    await tester.pump(const Duration(milliseconds: 500));
    // No black fade drawn over the cards.
    final fades = find.byWidgetPredicate((w) =>
        w is Container &&
        w.decoration is BoxDecoration &&
        ((w.decoration as BoxDecoration).gradient?.colors.any((c) => c.r < 0.05 && c.g < 0.05 && c.b < 0.05 && c.a > 0.5) ?? false));
    expect(fades, findsNothing);
    expect(find.byKey(const Key('ngmy-calm-colour-frame')), findsNWidgets(3));
    await _snap(tester, 'toolhub_light');
    await tester.pumpWidget(const SizedBox());
    await tester.pump(const Duration(seconds: 2));
  });

  testWidgets('a page that is still loading is light in light mode (not dark)', (tester) async {
    await tester.pumpWidget(MaterialApp(
      theme: ThemeData(brightness: Brightness.light),
      home: NgmyDeferred(load: () => Future<void>.delayed(const Duration(seconds: 1)), build: () => const SizedBox()),
    ));
    await tester.pump(const Duration(milliseconds: 50));
    final s = tester.widget<Scaffold>(find.byType(Scaffold).first);
    expect(s.backgroundColor!.computeLuminance(), greaterThan(0.85));
    await tester.pump(const Duration(seconds: 2));
  });

  testWidgets('light mode icon tiles all use the one NGMY purple (no frame in its own colour)', (tester) async {
    await tester.pumpWidget(_app(Brightness.light, _hubGrid()));
    await tester.pump(const Duration(milliseconds: 300));
    final tiles = tester.widgetList<NgmyCalmIconTile>(find.byType(NgmyCalmIconTile)).toList();
    expect(tiles, isNotEmpty);
    expect(tiles.every((t) => t.accent == NgmyCalmLight.brand), isTrue);
    await tester.pumpWidget(const SizedBox());
  });

  test('light tiles use only two colours, a whole row at a time (one row blue, the next purple)', () {
    final tones = [for (var i = 0; i < 6; i++) NgmyCalmLight.checkerTone(i)];
    expect(tones.toSet(), {NgmyCalmLight.toneA, NgmyCalmLight.toneB});
    expect(tones[0], tones[1], reason: 'tiles in the same row have the same colour');
    expect(tones[0], isNot(tones[2]), reason: 'the next row has the other colour');
    expect(NgmyCalmLight.page, Colors.white, reason: 'the page is pure white, not greyish');
  });

  test('iron triangle: the one that turns off is not always the same next one in a line', () {
    final r = math.Random(1);
    final seen = <String>{};
    for (var i = 0; i < 40; i++) {
      seen.add(ngmyIronTrianglePickDrop({'cheap', 'good'}, random: r));
    }
    expect(seen, {'cheap', 'good'}, reason: 'either of the other two can turn off');
    expect(ngmyIronTrianglePickDrop({'fast'}), 'fast');
  });

  testWidgets('a button drawn with Ink inside a light frame shows (not hidden behind the white card)', (tester) async {
    await tester.binding.setSurfaceSize(const Size(300, 200));
    final key = GlobalKey();
    await tester.pumpWidget(MaterialApp(
      theme: ThemeData(brightness: Brightness.light),
      home: Scaffold(
        body: Center(
          child: RepaintBoundary(
            key: key,
            child: SizedBox(
              width: 240,
              height: 100,
              child: NgmyToolkitAliveSection(
                colors: const [Color(0xFF2563EB), Color(0xFF1D4ED8)],
                pulse: 0,
                scan: 0,
                orbit: 0,
                padding: EdgeInsets.zero,
                onTap: () {},
                child: Ink(color: const Color(0xFF2563EB), child: const SizedBox.expand()),
              ),
            ),
          ),
        ),
      ),
    ));
    await tester.pump();
    final ro = key.currentContext!.findRenderObject()! as RenderRepaintBoundary;
    late ByteData bytes;
    await tester.runAsync(() async {
      final img = await ro.toImage();
      bytes = (await img.toByteData(format: ui.ImageByteFormat.rawRgba))!;
    });
    final i = (50 * 240 + 120) * 4; // the middle
    final r = bytes.getUint8(i), g = bytes.getUint8(i + 1), b = bytes.getUint8(i + 2);
    expect(b > 180 && r < 90 && g < 140, isTrue, reason: 'the middle is blue (the button), not white: rgb($r,$g,$b)');
  });
}
