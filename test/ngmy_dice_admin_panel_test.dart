import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_dice_admin.dart';
import 'package:ngmy/ngmy_dice_config.dart';

void main() {
  testWidgets('admin finds a player by typing, then sets wins and loses', (tester) async {
    tester.view.physicalSize = const Size(900, 3000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);

    final settings = NgmyDiceSettings();
    var saves = 0;

    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: ListView(
          children: [
            NgmyDiceControlPanel(
              settings: settings,
              livePoll: false,
              onChanged: () async {
                saves++;
                return null;
              },
              users: const [
                NgmyDiceUserOption(email: 'maria@example.com', name: 'Maria Lopez'),
                NgmyDiceUserOption(email: 'mark@example.com', name: 'Mark'),
                NgmyDiceUserOption(email: 'zed@example.com', name: 'Zed'),
              ],
            ),
          ],
        ),
      ),
    ));

    await tester.enterText(find.byType(TextField).first, 'mar');
    await tester.pump();
    expect(find.text('maria@example.com'), findsOneWidget);
    expect(find.text('mark@example.com'), findsOneWidget);
    expect(find.text('zed@example.com'), findsNothing);

    await tester.tap(find.text('maria@example.com'));
    await tester.pump();
    expect(find.text('Set dice for Maria Lopez'), findsOneWidget);

    final winTop = tester.getTopLeft(find.text('WIN').last).dy;
    expect(tester.getTopLeft(find.text('LOSE').last).dy, winTop);
    expect(tester.getTopLeft(find.text('+3').first).dy, winTop);

    final plus = find.byIcon(Icons.add_rounded);
    await tester.tap(plus.at(4));
    await tester.pump();
    await tester.tap(plus.at(4));
    await tester.pump();

    await tester.ensureVisible(find.text('Set dice for Maria Lopez'));
    await tester.tap(find.text('Set dice for Maria Lopez'));
    await tester.pump();

    expect(saves, 1);
    final rule = settings.userOutcomeRules.single;
    expect(rule['email'], 'maria@example.com');
    expect(rule['winsLeft'], 1);
    expect(rule['losesLeft'], 0);
    expect(rule['plus3Left'], 2);
    expect(find.text('3 of 3 left'), findsOneWidget);

    await tester.pumpWidget(const SizedBox());
  });

  testWidgets('a player disappears from the live count once every play is used', (tester) async {
    tester.view.physicalSize = const Size(900, 3000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);

    final settings = NgmyDiceSettings();
    ngmySetUserOutcomeRule(cfg: settings, email: 'a@example.com', name: 'Ann', wins: 1, loses: 1, plus3: 1);
    ngmySetUserOutcomeRule(cfg: settings, email: 'b@example.com', name: 'Bob', wins: 3, loses: 0);

    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: ListView(children: [
          NgmyDiceControlPanel(settings: settings, livePoll: false, onChanged: () async => null, users: const []),
        ]),
      ),
    ));
    expect(find.text('Ann'), findsOneWidget);
    expect(find.text('Bob'), findsOneWidget);

    for (final r in settings.userOutcomeRules) {
      if (r['email'] == 'b@example.com') r['winsLeft'] = 0;
    }
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: ListView(children: [
          NgmyDiceControlPanel(settings: settings, livePoll: false, onChanged: () async => null, users: const []),
        ]),
      ),
    ));
    expect(find.text('Ann'), findsOneWidget);
    expect(find.text('Bob'), findsNothing);

    for (final r in settings.userOutcomeRules) {
      r['winsLeft'] = 0;
      r['losesLeft'] = 0;
      r['plus3Left'] = 0;
    }
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: ListView(children: [
          NgmyDiceControlPanel(settings: settings, livePoll: false, onChanged: () async => null, users: const []),
        ]),
      ),
    ));
    expect(find.text('Ann'), findsNothing);
    expect(find.text('Nothing left to count. Every player is back to normal play.'), findsOneWidget);

    await tester.pumpWidget(const SizedBox());
  });

  testWidgets('admin saves a win and lose count for everyone', (tester) async {
    tester.view.physicalSize = const Size(900, 3000);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.reset);

    final settings = NgmyDiceSettings();
    var saves = 0;

    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: ListView(
          children: [
            NgmyDiceControlPanel(
              settings: settings,
              livePoll: false,
              onChanged: () async {
                saves++;
                return null;
              },
              users: const [],
            ),
          ],
        ),
      ),
    ));

    final plusButtons = find.byIcon(Icons.add_rounded);
    await tester.tap(plusButtons.at(0));
    await tester.pump();
    await tester.tap(plusButtons.at(0));
    await tester.pump();
    await tester.tap(plusButtons.at(1));
    await tester.pump();

    await tester.tap(find.text('Per week'));
    await tester.pump();
    await tester.tap(find.text('Save for everyone'));
    await tester.pump();

    expect(saves, 1);
    expect(settings.crowdRule['wins'], 2);
    expect(settings.crowdRule['loses'], 1);
    expect(settings.crowdRule['period'], 'week');

    await tester.pumpWidget(const SizedBox());
  });
}
