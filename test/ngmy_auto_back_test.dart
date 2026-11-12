import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_lab.dart';
import 'package:ngmy/ngmy_frame_wiring.dart';
import 'package:ngmy/ngmy_studio_kit.dart';

void main() {
  setUp(() => NgmyTone.enabled = false);

  double opacityOfBack(WidgetTester t) {
    final icon = find.byIcon(Icons.arrow_back_ios_new_rounded);
    return t.widget<AnimatedOpacity>(find.ancestor(of: icon, matching: find.byType(AnimatedOpacity)).first).opacity;
  }

  for (final page in ['wiring a house', 'faucet lesson']) {
    testWidgets('the back button of the $page fades away after 3 seconds, and two quick taps where it was bring it back', (t) async {
      t.view.physicalSize = const Size(900, 1700);
      t.view.devicePixelRatio = 1.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: Builder(builder: (ctx) => Scaffold(body: Center(child: TextButton(onPressed: () => Navigator.of(ctx).push(MaterialPageRoute<void>(builder: (_) => page == 'faucet lesson' ? const FaucetLessonPage() : const NgmyWiringHousePage())), child: const Text('open')))))));
      await t.tap(find.text('open'));
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      expect(opacityOfBack(t), 1.0, reason: 'it is there when the page opens');
      await t.pump(const Duration(seconds: 2));
      expect(opacityOfBack(t), 1.0, reason: 'still there after 2 seconds');
      await t.pump(const Duration(seconds: 2));
      await t.pump(const Duration(milliseconds: 400));
      expect(opacityOfBack(t), 0.0, reason: 'gone after 3 seconds');
      // A single tap where it was does nothing: the page stays.
      final at = t.getCenter(find.byIcon(Icons.arrow_back_ios_new_rounded));
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 600));
      expect(find.byIcon(Icons.arrow_back_ios_new_rounded), findsOneWidget, reason: 'the page is still open');
      // Two quick taps bring it back.
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 80));
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 500));
      expect(opacityOfBack(t), 1.0, reason: 'back again');
      // And it goes away again after 3 seconds.
      await t.pump(const Duration(seconds: 3));
      await t.pump(const Duration(milliseconds: 400));
      expect(opacityOfBack(t), 0.0);
      // When it is there, a tap goes back to where the page was opened from.
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 80));
      await t.tapAt(at);
      await t.pump(const Duration(milliseconds: 500));
      await t.tap(find.byIcon(Icons.arrow_back_ios_new_rounded));
      await t.pump(const Duration(milliseconds: 600));
      await t.pump(const Duration(milliseconds: 600));
      expect(find.text('open'), findsOneWidget);
      await t.pump(const Duration(seconds: 16));
      await t.pumpWidget(const SizedBox());
      await t.pump(const Duration(seconds: 16));
    });
  }
}
