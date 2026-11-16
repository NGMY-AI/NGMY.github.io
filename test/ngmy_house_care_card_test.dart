import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_house_care_card.dart';

// The House Care card: "$25/month · 1-year agreement" is always whole (never cut), and the Help Center shows the
// same card with a download button.

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

Future<void> _snap(WidgetTester tester, String name) async {
  final dir = Platform.environment['NGMY_SNAP_DIR'];
  if (dir == null) return;
  await tester.pump();
  final rb = tester.renderObject(find.byKey(const Key('snap-all'))) as RenderRepaintBoundary;
  await tester.runAsync(() async {
    final img = await rb.toImage(pixelRatio: 1.5);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    File('$dir/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
}

String _json() => ngmyHouseCareSnapshot({
      'status': 'active',
      'nextDue': DateTime.now().add(const Duration(days: 12)).toIso8601String(),
      'termYears': 1,
      'price': 25,
    }, 'Christopher Alexander Montgomery');

void main() {
  for (final width in [320.0, 360.0, 400.0]) {
    testWidgets('house care card at $width wide: the whole "1-year agreement" shows, and it can be downloaded', (tester) async {
      await _loadFonts();
      await tester.binding.setSurfaceSize(Size(width + 32, 700));
      await tester.pumpWidget(MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(useMaterial3: true, fontFamily: 'Roboto'),
        builder: (c, child) => RepaintBoundary(key: const Key('snap-all'), child: child),
        home: Scaffold(
          backgroundColor: const Color(0xFF0B1220),
          body: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(children: [
              NgmyHouseCareCardDownloadable(json: _json()),
            ]),
          ),
        ),
      ));
      expect(tester.takeException(), isNull);
      // The terms line fits its card: shrunk if needed, never cut off.
      final terms = find.byKey(const Key('house-care-terms'));
      expect(terms, findsOneWidget);
      expect(find.text('\$25/month · 1-year agreement'), findsOneWidget);
      final text = tester.renderObject<RenderParagraph>(find.descendant(of: terms, matching: find.byType(RichText)));
      expect(text.didExceedMaxLines, isFalse);
      expect(find.byKey(const Key('house-care-download')), findsOneWidget);
      if (width == 360) await _snap(tester, 'house_care_card');
      await tester.binding.setSurfaceSize(null);
    });
  }
}
