import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_admin_slides_vault_sheet.dart';
import 'package:ngmy/ngmy_slides_models.dart';

void main() {
  testWidgets('the admin database sheet lists presentations, picks them and switches to Saved', (tester) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1.0;
    addTearDown(tester.view.reset);
    final decks = [
      NgmySlideDeck(id: 'a', name: 'Class deck', slides: [NgmySlidesTemplates.blankSlide()]),
      NgmySlideDeck(id: 'b', name: 'AI deck', slides: [NgmySlidesTemplates.blankSlide(), NgmySlidesTemplates.blankSlide()]),
    ];
    await tester.pumpWidget(MaterialApp(
      home: Builder(
        builder: (context) => Scaffold(
          body: Center(child: ElevatedButton(onPressed: () => showNgmyAdminSlidesVault(
          context,
          decks: decks,
          onRestore: (_) async {},
          listLoader: () async => [
            {'id': 'z', 'name': 'Saved earlier', 'slides': 3, 'savedAt': '2026-10-01T10:00:00Z'},
          ],
        ), child: const Text('open'))),
        ),
      ),
    ));
    await tester.tap(find.text('open'));
    await tester.pump(const Duration(milliseconds: 500));
    await tester.pump(const Duration(milliseconds: 500));
    expect(find.text('Slides database'), findsOneWidget);
    expect(find.text('Pick presentations to save'), findsOneWidget);
    await tester.tap(find.text('Class deck'));
    await tester.pump();
    expect(find.text('Save 1 to the database'), findsOneWidget);
    await tester.tap(find.text('Pick all'));
    await tester.pump();
    expect(find.text('Save 2 to the database'), findsOneWidget);
    await tester.tap(find.text('Saved'));
    await tester.pump(const Duration(milliseconds: 300));
    expect(find.text('Saved earlier'), findsOneWidget);
    expect(find.textContaining('3 slides'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
