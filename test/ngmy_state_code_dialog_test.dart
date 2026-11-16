import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_state_code_dialog.dart';

// The Authorized Registrar changing state: the pop-up asking for that state's code. Wrong code shows the error and
// stays open; the right code closes it with true; Cancel closes it with false.

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

Future<bool?> _open(WidgetTester tester, Brightness b) async {
  await _loadFonts();
  await tester.binding.setSurfaceSize(const Size(400, 860));
  bool? result;
  await tester.pumpWidget(MaterialApp(
    debugShowCheckedModeBanner: false,
    theme: ThemeData(brightness: b, useMaterial3: true, fontFamily: 'Roboto'),
    builder: (c, child) => RepaintBoundary(key: const Key('snap-all'), child: child),
    home: Builder(
      builder: (c) => Scaffold(
        body: Center(
          child: TextButton(
            onPressed: () async {
              result = await showNgmyStateCodeDialog(c, fromState: 'Texas', toState: 'California', verify: (code) async => code == '1234' ? null : 'Incorrect state code.');
            },
            child: const Text('go'),
          ),
        ),
      ),
    ),
  ));
  await tester.tap(find.text('go'));
  for (var i = 0; i < 5; i++) {
    await tester.pump(const Duration(milliseconds: 200));
  }
  return result;
}

void main() {
  for (final b in Brightness.values) {
    testWidgets('state code pop-up (${b.name}): wrong code shows the error, right code opens the state', (tester) async {
      await _open(tester, b);
      expect(find.byKey(const Key('state-code-dialog')), findsOneWidget);
      expect(find.text('Texas'), findsOneWidget);
      expect(find.text('California'), findsOneWidget);
      await _snap(tester, 'statecode_${b.name}');

      await tester.tap(find.byKey(const Key('state-code-verify')));
      await tester.pump();
      expect(find.text('Enter the state code.'), findsOneWidget);

      await tester.enterText(find.byKey(const Key('state-code-field')), '9999');
      await tester.tap(find.byKey(const Key('state-code-verify')));
      await tester.pump();
      await tester.pump();
      expect(find.byKey(const Key('state-code-error')), findsOneWidget);
      expect(find.text('Incorrect state code.'), findsOneWidget);
      await _snap(tester, 'statecode_${b.name}_wrong');

      await tester.enterText(find.byKey(const Key('state-code-field')), '1234');
      await tester.tap(find.byKey(const Key('state-code-verify')));
      await tester.pumpAndSettle();
      expect(find.byKey(const Key('state-code-dialog')), findsNothing, reason: 'the right code closes it');
      await tester.binding.setSurfaceSize(null);
    });
  }

  testWidgets('state code pop-up: Cancel closes it without changing state', (tester) async {
    await _open(tester, Brightness.dark);
    await tester.tap(find.byKey(const Key('state-code-cancel')));
    await tester.pumpAndSettle();
    expect(find.byKey(const Key('state-code-dialog')), findsNothing);
    await tester.binding.setSurfaceSize(null);
  });
}
