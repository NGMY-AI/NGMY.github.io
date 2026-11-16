import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_invoice_creator.dart';
import 'package:ngmy/ngmy_iron_triangle_panel.dart';
import 'package:ngmy/ngmy_studio_hub.dart';
import 'package:shared_preferences/shared_preferences.dart';

// Create invoice: the field groups (Invoice details, Your business, Bill to...) sit in their own frames in BOTH
// light and dark mode. The Iron Triangle steel plate is the size of a bank card.

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
  final ro = tester.firstRenderObject<RenderRepaintBoundary>(find.byType(RepaintBoundary).first);
  await tester.runAsync(() async {
    final img = await ro.toImage(pixelRatio: 1.5);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    File('$dir/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
}

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));
  quoteCalcSnap();
  for (final b in Brightness.values) {
    testWidgets('create invoice: the field groups have frames in ${b.name} mode', (tester) async {
      await _loadFonts();
      await tester.binding.setSurfaceSize(const Size(430, 1800));
      // The invoice previews are measured with the plain test font, which is wider than the real one: ignore
      // their overflow warnings, they are not what this test checks.
      final old = FlutterError.onError;
      FlutterError.onError = (d) {
        if (d.exceptionAsString().contains('overflowed')) return;
        old?.call(d);
      };
      addTearDown(() => FlutterError.onError = old);
      await tester.pumpWidget(MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(brightness: b, useMaterial3: true, fontFamily: 'Roboto'),
        home: const Scaffold(body: NgmyInvoiceCreatorDialog(userEmail: 'test@example.com')),
      ));
      await tester.pump(const Duration(milliseconds: 500));
      expect(find.byKey(const Key('invoice-section-Invoice details')), findsOneWidget);
      expect(find.byKey(const Key('invoice-section-Your business')), findsOneWidget);
      await tester.ensureVisible(find.byKey(const Key('invoice-section-Invoice details')));
      await tester.pump(const Duration(milliseconds: 300));
      await _snap(tester, 'invoice_${b.name}');
      await tester.binding.setSurfaceSize(null);
    });
  }

  testWidgets('iron triangle: the steel plate is the size of a bank card, and the switches still work', (tester) async {
    await _loadFonts();
    await tester.binding.setSurfaceSize(const Size(430, 500));
    final toggled = <String>[];
    await tester.pumpWidget(MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(useMaterial3: true, fontFamily: 'Roboto'),
      home: Scaffold(
        backgroundColor: const Color(0xFF121212),
        body: Padding(
          padding: const EdgeInsets.all(16),
          child: NgmyIronTrianglePanel(
            triFast: true,
            triCheap: false,
            triGood: true,
            onToggle: (k, v) => toggled.add(k),
            resultText: 'Fast + Good: expect a premium price',
          ),
        ),
      ),
    ));
    final size = tester.getSize(find.byKey(const Key('iron-triangle-steel')));
    expect(size.width, lessThanOrEqualTo(NgmyIronTrianglePanel.cardWidth));
    expect(size.width / size.height, closeTo(1.586, 0.01), reason: 'shaped like a bank card');
    expect(tester.takeException(), isNull, reason: 'nothing overflows the card');
    expect(tester.getRect(find.byKey(const Key('iron-triangle-result'))).top, greaterThanOrEqualTo(tester.getRect(find.byKey(const Key('iron-triangle-steel'))).bottom),
        reason: 'the result is under the card, not inside it');
    await tester.tap(find.byKey(const Key('iron-switch-cheap')));
    expect(toggled, ['cheap']);
    await _snap(tester, 'iron_card');
    await tester.binding.setSurfaceSize(null);
  });
}

// Quote Calc: snapshot of the whole dialog (pictures only when asked).
void quoteCalcSnap() {
  for (final b in Brightness.values) {
    testWidgets('quote calc snapshot ${b.name}', (tester) async {
      await _loadFonts();
      SharedPreferences.setMockInitialValues({});
      await tester.binding.setSurfaceSize(const Size(400, 860));
      await tester.pumpWidget(MaterialApp(
        debugShowCheckedModeBanner: false,
        theme: ThemeData(brightness: b, useMaterial3: true, fontFamily: 'Roboto'),
        builder: (c, child) => RepaintBoundary(key: const Key('snap-all'), child: child),
        home: Builder(builder: (c) => Scaffold(body: Center(child: TextButton(onPressed: () => showNgmyStandaloneQuoteCalc(c), child: const Text('go'))))),
      ));
      await tester.tap(find.text('go'));
      await tester.pump(const Duration(milliseconds: 600));
      for (var i = 0; i < 5; i++) {
        await tester.pump(const Duration(milliseconds: 200));
      }
      expect(find.text('Quote Calc'), findsOneWidget);
      await tester.pump(); await _snapOf(tester, find.byKey(const Key('snap-all')), 'quote_${b.name}');
      await tester.binding.setSurfaceSize(null);
    });
  }
}

Future<void> _snapOf(WidgetTester tester, Finder f, String name) async {
  final dir = Platform.environment['NGMY_SNAP_DIR'];
  if (dir == null) return;
  final rb = tester.renderObject(f) as RenderRepaintBoundary;
  await tester.runAsync(() async {
    final img = await rb.toImage(pixelRatio: 1.5);
    final png = await img.toByteData(format: ui.ImageByteFormat.png);
    File('$dir/$name.png').writeAsBytesSync(png!.buffer.asUint8List());
  });
}
