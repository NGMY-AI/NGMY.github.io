import 'dart:io';
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_bottom_nav_frame.dart';
import 'package:ngmy/ngmy_home_tech_frames.dart';
import 'package:ngmy/ngmy_hub_form_ui.dart';
import 'package:ngmy/ngmy_hud_tech_shell.dart';

// Light mode is calm: plain white cards, icon tiles, nothing glowing or moving.
// NGMY Advisors keep their own look (NgmyHudKeepLook). Dark mode is unchanged.

/// Real letters and icons in the saved pictures (only when pictures are asked for).
Future<void> _loadFonts() async {
  final dir = Platform.environment['NGMY_SNAP_DIR'];
  if (dir == null) return;
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
        backgroundColor: b == Brightness.light ? Colors.white : const Color(0xFF121212),
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
    expect(find.byKey(const Key('ngmy-calm-card')), findsNWidgets(4));
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
}
