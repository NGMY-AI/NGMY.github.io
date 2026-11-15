import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_home_tech_frames.dart';
import 'package:ngmy/ngmy_hud_tech_shell.dart';

// Light mode is calm: plain white cards, icon tiles, nothing glowing or moving.
// NGMY Advisors keep their own look (NgmyHudKeepLook). Dark mode is unchanged.

Widget _app(Brightness b, Widget child) => MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(brightness: b, useMaterial3: true),
      home: Scaffold(
        backgroundColor: b == Brightness.light ? Colors.white : const Color(0xFF121212),
        body: SingleChildScrollView(padding: const EdgeInsets.all(16), child: child),
      ),
    );

Widget _hubGrid() => NgmyHudMotion(
      builder: (context, pulse, scan, orbit) => Column(
        children: [
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
                  child: Center(child: NgmyHudMiniOrb(colors: c, pulse: pulse, orbit: orbit, size: 44, icon: Icons.shield_outlined)),
                ),
            ],
          ),
          const SizedBox(height: 14),
          const NgmyHomeTechFramesPanel(),
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
    await tester.binding.setSurfaceSize(const Size(420, 1200));
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
    await tester.binding.setSurfaceSize(const Size(420, 1200));
    await tester.pumpWidget(_app(Brightness.dark, _hubGrid()));
    await tester.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('ngmy-calm-card')), findsNothing);
    expect(find.byWidgetPredicate((w) => w is CustomPaint && w.painter is NgmyHudFramePainter), findsWidgets);
    await _snap(tester, 'dark_unchanged');
    await tester.pumpWidget(const SizedBox());
  });

  testWidgets('NGMY Advisors keep their look in light mode', (tester) async {
    await tester.binding.setSurfaceSize(const Size(420, 1200));
    await tester.pumpWidget(_app(Brightness.light, NgmyHudKeepLook(child: _hubGrid())));
    await tester.pump(const Duration(milliseconds: 300));
    expect(find.byKey(const Key('ngmy-calm-card')), findsNothing);
    expect(find.byWidgetPredicate((w) => w is CustomPaint && w.painter is NgmyHudFramePainter), findsWidgets);
    await tester.pumpWidget(const SizedBox());
  });
}
