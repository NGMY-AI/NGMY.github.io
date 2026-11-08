import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:ngmy/ngmy_family_fireside.dart';
import 'package:ngmy/ngmy_family_fireside_art.dart';
import 'package:ngmy/ngmy_family_games_engine.dart';
import 'package:ngmy/ngmy_family_games_play.dart';
import 'package:ngmy/ngmy_family_games_scenes.dart';
import 'package:ngmy/ngmy_family_games_ui.dart';
import 'package:ngmy/ngmy_worksheets_storage.dart';

FamilyTree sampleTree({List<Map<String, dynamic>> games = const []}) => FamilyTree(
      id: 't1',
      name: 'MWANGI',
      code: 'MWANGI',
      createdAt: DateTime(2024),
      ownerEmail: 'owner@example.com',
      games: games,
      members: const [
        FamilyMember(id: '1', name: 'Babu Juma', gender: FamilyGender.male, birthDate: '1940-02-01', birthPlace: 'Nairobi', occupation: 'Farmer'),
        FamilyMember(id: '2', name: 'Bibi Amani', gender: FamilyGender.female, spouseId: '1', birthPlace: 'Mombasa'),
        FamilyMember(id: '3', name: 'Mama Zuri', gender: FamilyGender.female, parentId: '1', birthOrder: 1, occupation: 'Teacher', birthDate: '1968-05-05'),
        FamilyMember(id: '4', name: 'Baba Kofi', gender: FamilyGender.male, spouseId: '3', occupation: 'Driver'),
        FamilyMember(id: '5', name: 'Uncle Sefu', gender: FamilyGender.male, parentId: '1', birthOrder: 2, occupation: 'Builder'),
        FamilyMember(id: '6', name: 'Dada Imani', gender: FamilyGender.female, parentId: '3', birthOrder: 1, birthDate: '1995-01-01'),
        FamilyMember(id: '7', name: 'Kaka Baraka', gender: FamilyGender.male, parentId: '3', birthOrder: 2),
        FamilyMember(id: '8', name: 'Tendai', gender: FamilyGender.female, parentId: '3', birthOrder: 3),
      ],
    );

FamilyTree tinyTree() => FamilyTree(id: 't2', name: 'TINY', code: 'TINY', createdAt: DateTime(2024), members: const [
      FamilyMember(id: '1', name: 'Amani'),
      FamilyMember(id: '2', name: 'Zuri', parentId: '1'),
    ]);

void _check(FamilyQuestion q) {
  expect(q.text.trim(), isNotEmpty);
  expect(q.options.length, inInclusiveRange(2, 4), reason: q.text);
  expect(q.options.toSet().length, q.options.length, reason: 'no repeated answer: ${q.text}');
  expect(q.correct, inInclusiveRange(0, q.options.length - 1), reason: q.text);
  expect(q.explain, isNotEmpty);
}

Future<void> _settle(WidgetTester t, [int ms = 600]) async {
  await t.pump(const Duration(milliseconds: 100));
  await t.pump(Duration(milliseconds: ms));
}

void main() {
  setUp(() => SharedPreferences.setMockInitialValues({}));

  group('the games made from a tree', () {
    test('every question is complete, has one right answer, and most are about the people in the tree', () {
      final qs = generateFamilyQuestions(sampleTree(), count: 10, seed: 3);
      expect(qs.length, 10);
      qs.forEach(_check);
      expect(qs.where((q) => q.kind != 'culture').length, greaterThanOrEqualTo(7));
      expect(qs.map((q) => q.text).toSet().length, qs.length, reason: 'no question twice');
      // The right answers are really right.
      final mother = qs.where((q) => q.text.startsWith('Who is the mother of Dada Imani')).toList();
      for (final q in mother) {
        expect(q.options[q.correct], 'Mama Zuri');
      }
    });

    test('the same seed gives the same game and another seed another game', () {
      final a = generateFamilyQuestions(sampleTree(), seed: 5).map((q) => q.text).toList();
      final b = generateFamilyQuestions(sampleTree(), seed: 5).map((q) => q.text).toList();
      final c = generateFamilyQuestions(sampleTree(), seed: 6).map((q) => q.text).toList();
      expect(a, b);
      expect(a, isNot(c));
    });

    test('a very small tree still gets a full game, made of culture questions', () {
      final qs = generateFamilyQuestions(tinyTree(), count: 10, seed: 1);
      expect(qs.length, 10);
      qs.forEach(_check);
      expect(qs.where((q) => q.kind == 'culture').length, greaterThanOrEqualTo(7));
      expect(generateFamilyQuestions(FamilyTree(id: 'e', name: 'EMPTY', code: 'E', createdAt: DateTime(2024)), count: 6).length, 6);
    });

    test('a test also has true and false statements, and the false ones are false', () {
      final qs = generateFamilyQuestions(sampleTree(), count: 10, seed: 2, test: true);
      qs.forEach(_check);
      for (var s = 1; s < 30; s++) {
        for (final q in generateFamilyQuestions(sampleTree(), count: 10, seed: s, test: true).where((q) => q.kind == 'tf')) {
          expect(q.options, ['True', 'False']);
          if (q.text.contains('Uncle Sefu is the mother') || q.text.contains('Baba Kofi is the mother')) fail('a false statement marked true: ${q.text}');
        }
      }
    });

    test('elder order: children from the oldest, and generations when no parent has two children', () {
      final rounds = orderRounds(sampleTree(), seed: 1);
      expect(rounds, isNotEmpty);
      final kids = rounds.firstWhere((r) => r.title.contains('Mama Zuri'));
      expect(kids.names.toSet(), {'Dada Imani', 'Kaka Baraka', 'Tendai'});
      expect(orderRounds(tinyTree()).first.title, contains('generation'));
    });

    test('Family Stars: they add up, the badges follow, and a best score is kept', () async {
      expect(await FamilyStars.total('a@b.c'), 0);
      expect(await FamilyStars.add('a@b.c', 55), 55);
      expect(badgeFor(55).name, 'Young Listener');
      expect(nextBadge(55)!.from, 120);
      expect(await FamilyStars.saveBest('a@b.c', 't1', 'kahoot', 400), isFalse, reason: 'the first score is not a record to beat');
      expect(await FamilyStars.saveBest('a@b.c', 't1', 'kahoot', 900), isTrue);
      expect(await FamilyStars.best('a@b.c', 't1', 'kahoot'), 900);
      expect(starsForResult(right: 10, total: 10, streakBest: 10), 78);
      expect(kahootPoints(secsLeft: 20, secs: 20, streak: 0), 1000);
      expect(kahootPoints(secsLeft: 0, secs: 20, streak: 0), 500);
    });
  });

  group('the games the owner writes', () {
    test('the tree keeps them, and only two can be made, only by the owner', () {
      final g = CreatorGame(id: 'a', title: 'Who am I?', questions: [CreatorQuestion(text: 'Who is Babu?', answers: ['Grandfather', 'Cousin', '', ''], correct: 0, secs: 10)]);
      final tree = sampleTree(games: [g.toJson()]);
      final back = FamilyTree.fromJson(tree.toJson());
      expect(creatorGamesOf(back).single.title, 'Who am I?');
      expect(creatorGamesOf(back).single.toQuestions().single.options, ['Grandfather', 'Cousin']);
      expect(canMakeCreatorGame(tree, isOwner: true), isTrue);
      expect(canMakeCreatorGame(tree, isOwner: false), isFalse);
      final two = tree.copyWith(games: [g.toJson(), CreatorGame(id: 'b', title: 'Two').toJson()]);
      expect(canMakeCreatorGame(two, isOwner: true), isFalse, reason: 'two games at most');
      expect(FamilyTree.fromJson(sampleTree().toJson()).games, isEmpty);
    });
  });

  group('playing', () {
    testWidgets('the hub shows the games, and the owner can make two games at most', (t) async {
      t.view.physicalSize = const Size(900, 4200);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      var saved = <Map<String, dynamic>>[];
      await t.pumpWidget(MaterialApp(home: NgmyFamilyGamesPage(tree: sampleTree(), userEmail: 'owner@example.com', isOwner: true, onSaveGames: (g) async => saved = g)));
      await _settle(t);
      for (final name in ['Family Kahoot', 'Fireside Stories', 'Calabash Catch', 'Plant the Tree', 'Who Am I?', 'Safari Journey', 'Line Up', 'Village School']) {
        expect(find.text(name), findsOneWidget, reason: name);
      }
      expect(find.textContaining('Make your own game'), findsOneWidget);
      // Make a game.
      await t.ensureVisible(find.textContaining('Make your own game'));
      await t.tap(find.textContaining('Make your own game'));
      await _settle(t);
      await t.enterText(find.byType(TextField).first, 'Who am I in the family?');
      await t.enterText(find.byType(TextField).at(1), 'Who is Babu Juma?');
      await t.enterText(find.byType(TextField).at(2), 'Grandfather');
      await t.enterText(find.byType(TextField).at(3), 'Cousin');
      // One question is not enough: the game is not saved yet.
      await t.tap(find.text('SAVE'));
      await _settle(t);
      expect(saved, isEmpty);
      await t.ensureVisible(find.textContaining('Add a question'));
      await t.tap(find.textContaining('Add a question'));
      await _settle(t);
      await t.enterText(find.byType(TextField).at(6), 'Who is Mama Zuri?');
      await t.enterText(find.byType(TextField).at(7), 'Mother');
      await t.enterText(find.byType(TextField).at(8), 'Aunt');
      await t.tap(find.text('SAVE'));
      await _settle(t);
      expect(saved.length, 1);
      expect(find.text('Who am I in the family?'), findsOneWidget);
      expect(find.textContaining('1 of 2'), findsOneWidget);
      expect(find.textContaining('(1 left)'), findsOneWidget);
    });

    testWidgets('a person who did not make the tree cannot make games, but can play the ones that exist', (t) async {
      t.view.physicalSize = const Size(900, 4200);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      final g = CreatorGame(id: 'a', title: 'Grandma quiz', questions: [
        CreatorQuestion(text: 'Q1?', answers: ['A', 'B', '', ''], correct: 0),
        CreatorQuestion(text: 'Q2?', answers: ['C', 'D', '', ''], correct: 1),
      ]);
      await t.pumpWidget(MaterialApp(home: NgmyFamilyGamesPage(tree: sampleTree(games: [g.toJson()]), userEmail: 'cousin@example.com', isOwner: false, onSaveGames: (_) async {})));
      await _settle(t);
      expect(find.textContaining('Make your own game'), findsNothing);
      expect(find.text('Grandma quiz'), findsOneWidget);
      expect(find.byIcon(Icons.edit_rounded), findsNothing);
    });

    testWidgets('Family Kahoot: countdown, ten questions with points, a podium against the family, and stars', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      final tree = sampleTree();
      await t.pumpWidget(MaterialApp(home: FamilyKahootPage(title: 'Family Kahoot', questions: generateFamilyQuestions(tree, seed: 9), email: 'p@x.y', treeId: tree.id, gameId: 'kahoot', rivals: const ['Mama Zuri', 'Baba Kofi', 'Tendai'])));
      await _settle(t);
      await t.tap(find.text('Play'));
      await t.pump(const Duration(seconds: 1));
      await t.pump(const Duration(seconds: 1));
      await t.pump(const Duration(seconds: 1));
      final st = t.state(find.byType(FamilyKahootPage)) as FamilyKahootPageState;
      for (var i = 0; i < 10; i++) {
        expect(st.phase.name, 'ask', reason: 'question ${i + 1}');
        await t.pump(const Duration(seconds: 2));
        await t.tap(find.text(st.q.options[st.q.correct]).first);
        await t.pump(const Duration(milliseconds: 200));
        expect(st.phase.name, 'reveal');
        expect(st.lastPoints, greaterThan(600));
        await t.pump(const Duration(milliseconds: 3300));
      }
      await t.pump(const Duration(seconds: 1));
      expect(st.phase.name, 'end');
      expect(st.right, 10);
      expect(st.score, greaterThan(7000));
      expect(find.textContaining('10 of 10 right'), findsOneWidget);
      expect(find.text('You'), findsOneWidget);
      expect(await FamilyStars.total('p@x.y'), greaterThan(60));
      expect(await FamilyStars.best('p@x.y', tree.id, 'kahoot'), st.score);
    });

    testWidgets('Family Kahoot: a wrong answer and running out of time both score nothing and break the streak', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      final tree = sampleTree();
      await t.pumpWidget(MaterialApp(home: FamilyKahootPage(title: 'Quiz', questions: generateFamilyQuestions(tree, count: 3, seed: 2), email: 'w@x.y', treeId: tree.id, gameId: 'kahoot')));
      await _settle(t);
      await t.tap(find.text('Play'));
      await t.pump(const Duration(seconds: 3));
      final st = t.state(find.byType(FamilyKahootPage)) as FamilyKahootPageState;
      final wrong = (st.q.correct + 1) % st.q.options.length;
      await t.tap(find.text(st.q.options[wrong]).first);
      await t.pump(const Duration(milliseconds: 200));
      expect(st.lastPoints, 0);
      expect(st.streak, 0);
      await t.pump(const Duration(milliseconds: 3300));
      await t.pump(Duration(seconds: st.q.secs + 1));
      expect(st.phase.name, 'reveal', reason: 'time ran out on the second question');
      expect(st.picked, -1);
      expect(st.right, 0);
      await t.pump(const Duration(seconds: 4));
      await t.pump(const Duration(seconds: 25));
      await t.pump(const Duration(seconds: 4));
    });

    testWidgets('Fireside Stories: the elder is the oldest in the tree, teaches, asks, and the fire grows with right answers', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: FamilyFiresidePage(tree: sampleTree(), email: 'f@x.y', seed: 5)));
      await t.pump(const Duration(milliseconds: 300));
      final st = t.state(find.byType(FamilyFiresidePage)) as FamilyFiresidePageState;
      expect(st.elderName, 'Babu Juma');
      // The elder talks: the words come out a few at a time and the mouth moves while they do.
      expect(st.look.elderTalking, isTrue);
      expect(st.shown, lessThan(st.elderSays.length));
      await t.pump(const Duration(seconds: 3));
      expect(st.look.elderTalking, isFalse);
      expect(find.textContaining('Babu Juma'), findsWidgets);
      expect(st.look.elderIsWoman, isFalse);
      final fire0 = st.fire;
      await t.tap(find.text('Sit down by the fire'));
      await t.pump(const Duration(milliseconds: 200));
      for (var i = 0; i < kFiresideLessons; i++) {
        expect(find.text('Ask me, Elder'), findsOneWidget, reason: 'lesson ${i + 1}: the elder teaches first');
        await t.tap(find.text('Ask me, Elder'));
        await t.pump(const Duration(milliseconds: 200));
        await t.tap(find.text(st.q.options[st.q.correct]).last);
        await t.pump(const Duration(milliseconds: 200));
        await t.tap(find.text(i == kFiresideLessons - 1 ? 'Finish' : 'Next story'));
        await t.pump(const Duration(milliseconds: 300));
      }
      expect(st.fire, 1.0);
      expect(st.fire, greaterThan(fire0));
      expect(st.right, kFiresideLessons);
      expect(find.text('Back to the games'), findsOneWidget);
      expect(await FamilyStars.total('f@x.y'), greaterThan(30));
    });

    test('the painted village draws in every moment of the story without a problem, on a tall phone and a wide screen', () {
      final clock = ValueNotifier<double>(0);
      final state = FiresideState();
      final backdrop = FiresideBackdrop();
      for (final size in const [Size(450, 900), Size(900, 600), Size(360, 640)]) {
        for (var step = 0; step <= 4; step++) {
          for (final woman in [false, true]) {
            state
              ..step = step
              ..elderIsWoman = woman
              ..elderTalking = step.isEven
              ..correct = step == 3
              ..cheerUntil = step == 3 ? 99 : -1
              ..gaspUntil = step == 2 ? 99 : -1
              ..answerText = 'I say: 3'
              ..answerUntil = 99
              ..reaction = 'Wow...'
              ..reactionUntil = 99
              ..fire = step / 4;
            for (final tm in [0.0, 1.7, 6.3, 21.0]) {
              clock.value = tm;
              final rec = ui.PictureRecorder();
              FiresideArt(clock: clock, state: state, backdrop: backdrop).paint(Canvas(rec), size);
              rec.endRecording().dispose();
            }
          }
        }
      }
      backdrop.dispose();
    });
  });

  group('games played with the hands', () {
    testWidgets('the hub shows eight games, two in every row, none left alone at the bottom', (t) async {
      t.view.physicalSize = const Size(900, 2600);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: NgmyFamilyGamesPage(tree: sampleTree(), userEmail: 'owner@example.com', isOwner: true, onSaveGames: (_) async {})));
      await _settle(t);
      final grid = t.widget<GridView>(find.byType(GridView).first);
      final delegate = grid.gridDelegate as SliverGridDelegateWithFixedCrossAxisCount;
      expect(delegate.crossAxisCount, 2);
      final cards = (grid.childrenDelegate as SliverChildListDelegate).children.length;
      expect(cards, 8);
      expect(cards.isEven, isTrue, reason: 'two in a row all the way down');
      for (final name in ['Calabash Catch', 'Plant the Tree', 'Who Am I?']) {
        expect(find.text(name), findsOneWidget, reason: name);
      }
    });

    test('rounds for the new games come from the tree', () {
      final who = whoAmIRounds(sampleTree(), seed: 2);
      expect(who.length, greaterThanOrEqualTo(3));
      for (final r in who) {
        expect(r.clues.length, inInclusiveRange(3, 4));
        expect(r.options, contains(r.name));
        expect(r.options.toSet().length, r.options.length);
      }
      final plant = plantRounds(sampleTree(), seed: 2);
      expect(plant, isNotEmpty);
      for (final p in plant) {
        expect(p.children.length, greaterThanOrEqualTo(2));
        expect(p.others.any(p.children.contains), isFalse, reason: 'a tempting person is never a child of the parent');
      }
      expect(plant.any((p) => p.parent == 'Mama Zuri' && p.children.length == 3), isTrue);
      expect(whoAmIRounds(tinyTree()), isEmpty);
      expect(plantRounds(tinyTree()), isEmpty);
    });

    testWidgets('Calabash Catch: slide the basket under the right gourd to score, a wrong gourd costs a life', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: CalabashCatchPage(tree: sampleTree(), email: 'c@x.y', seed: 4)));
      await t.pump(const Duration(milliseconds: 300));
      await t.tap(find.text('Play'));
      await t.pump(const Duration(milliseconds: 100));
      final st = t.state(find.byType(CalabashCatchPage)) as CalabashCatchPageState;
      expect(st.gourds.length, st.q.options.length);
      // A wrong gourd: the basket goes under it, and a life is lost.
      final wrongGourd = st.gourds.firstWhere((g) => g.option != st.q.correct);
      st.basketX = st.targetX = wrongGourd.x;
      for (var i = 0; i < 400 && st.lives == 3; i++) {
        st.update(0.05);
      }
      expect(st.lives, 2);
      expect(st.score, 0);
      // Then the right ones: every time the basket slides under the right gourd.
      var guard = 0;
      while (!st.over && guard++ < 6000) {
        final g = st.gourds.firstWhere((g) => g.option == st.q.correct);
        st.basketX = st.targetX = g.x;
        st.update(0.05);
      }
      expect(st.over, isTrue);
      expect(st.right, st.questions.length - 1, reason: 'one question went to the wrong gourd');
      expect(st.score, greaterThan(700));
      await t.pump(const Duration(milliseconds: 300));
      expect(find.text('Back to the games'), findsOneWidget);
      expect(await FamilyStars.total('c@x.y'), greaterThan(30));
    });

    testWidgets('Calabash Catch: if the basket never catches the right gourd, the three lives run out', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: CalabashCatchPage(tree: sampleTree(), email: 'd@x.y', seed: 4)));
      await t.pump(const Duration(milliseconds: 300));
      await t.tap(find.text('Play'));
      await t.pump(const Duration(milliseconds: 100));
      final st = t.state(find.byType(CalabashCatchPage)) as CalabashCatchPageState;
      var guard = 0;
      while (!st.over && guard++ < 6000) {
        // The basket stays far off to the side, where no gourd is.
        st.basketX = st.targetX = -1;
        st.update(0.05);
      }
      expect(st.over, isTrue);
      expect(st.lives, 0);
      expect(st.right, 0);
    });

    testWidgets('Plant the Tree: a real drag of a child onto a branch plants it, a stranger bounces back, and the tree finishes', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: PlantTreePage(tree: sampleTree(), email: 'p@x.y', seed: 3)));
      await t.pump(const Duration(milliseconds: 400));
      final st = t.state(find.byType(PlantTreePage)) as PlantTreePageState;
      final p = st.rounds[0];
      int chipOf(bool child) => st.chips.indexWhere((c) => child ? c.childIndex >= 0 : c.childIndex < 0);
      // Drag a real child with a finger.
      final kid = chipOf(true);
      final from = t.getCenter(find.byKey(ValueKey('chip-$kid')));
      final to = t.getCenter(find.byKey(const ValueKey('slot-0')));
      await t.dragFrom(from, to - from);
      await t.pump(const Duration(milliseconds: 300));
      expect(st.slots[0], kid, reason: 'the child stays on the branch');
      expect(st.planted, 1);
      // A person who is not a child is refused.
      final stranger = chipOf(false);
      final from2 = t.getCenter(find.byKey(ValueKey('chip-$stranger')));
      final to2 = t.getCenter(find.byKey(const ValueKey('slot-1')));
      await t.dragFrom(from2, to2 - from2);
      await t.pump(const Duration(milliseconds: 300));
      expect(st.slots[1], -1);
      expect(st.mistakes, 1);
      expect(find.textContaining('is not a child of ${p.parent}'), findsOneWidget);
      await t.pump(const Duration(seconds: 1));
      // Plant the rest, round after round.
      while (!st.done) {
        for (var s = 0; s < st.slots.length; s++) {
          if (st.slots[s] != -1) continue;
          final c = st.chips.indexWhere((c) => c.childIndex >= 0 && !st.slots.contains(st.chips.indexOf(c)));
          st.drop(s, c);
        }
        await t.pump(const Duration(milliseconds: 1000));
        expect(st.roundDone, isTrue);
        await st.next();
        await t.pump(const Duration(milliseconds: 300));
      }
      expect(find.text('Back to the games'), findsOneWidget);
      expect(await FamilyStars.total('p@x.y'), greaterThan(10));
    });

    testWidgets('Who Am I: a new clue comes by itself, a wrong name is crossed out, the right name shows the face', (t) async {
      t.view.physicalSize = const Size(900, 2000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: WhoAmIPage(tree: sampleTree(), email: 'w@x.y', seed: 6)));
      await t.pump(const Duration(milliseconds: 400));
      final st = t.state(find.byType(WhoAmIPage)) as WhoAmIPageState;
      expect(st.shownClues, 1);
      await t.pump(const Duration(milliseconds: 3300));
      expect(st.shownClues, 2, reason: 'a new clue comes by itself');
      for (var round = 0; round < st.rounds.length; round++) {
        final r = st.r;
        if (round == 0) {
          final wrong = r.options.indexWhere((o) => o != r.name);
          st.guess(wrong);
          await t.pump(const Duration(milliseconds: 100));
          expect(st.wrong, contains(wrong));
          expect(st.revealed, isFalse);
        }
        st.guess(r.options.indexOf(r.name));
        await t.pump(const Duration(milliseconds: 1000));
        expect(st.revealed, isTrue);
        expect(find.text('It is ${r.name}!  +${st.earned}'), findsOneWidget);
        await st.next();
        await t.pump(const Duration(milliseconds: 300));
      }
      expect(st.done, isTrue);
      expect(st.rightCount, st.rounds.length);
      expect(find.text('Back to the games'), findsOneWidget);
      expect(await FamilyStars.total('w@x.y'), greaterThan(10));
    });

    testWidgets('Village School: the teacher writes each question on the board, you answer, the board is wiped, and the report card comes at the end', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: FamilySchoolPage(tree: sampleTree(), email: 's@x.y', seed: 4)));
      await t.pump(const Duration(milliseconds: 400));
      final st = t.state(find.byType(FamilySchoolPage)) as FamilySchoolPageState;
      expect(st.teacherName, 'Babu Juma');
      await t.tap(find.text('Start the test'));
      await t.pump(const Duration(milliseconds: 100));
      for (var i = 0; i < 10; i++) {
        if (i == 0) {
          expect(st.writing, isTrue, reason: 'the teacher is writing the first question');
          expect(find.text('The teacher is writing…'), findsOneWidget);
        }
        await t.pump(const Duration(seconds: 3));
        expect(st.writing, isFalse);
        // Every third answer is wrong.
        final q = st.q;
        final pick = i % 3 == 2 ? (q.correct + 1) % q.options.length : q.correct;
        await t.tap(find.text(q.options[pick]).last);
        await t.pump(const Duration(milliseconds: 1200));
      }
      await t.pump(const Duration(seconds: 1));
      expect(st.done, isTrue);
      expect(find.text('REPORT CARD'), findsOneWidget);
      expect(find.text('THE TEACHER EXPLAINS THESE'), findsOneWidget);
      expect(st.right, 7);
      expect(await FamilyStars.total('s@x.y'), greaterThan(20));
    });

    testWidgets('Line Up: tap two people to swap them, the right line makes everybody cheer, and a wrong line is explained', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: FamilyLineUpPage(tree: sampleTree(), email: 'l@x.y', seed: 5)));
      await t.pump(const Duration(milliseconds: 500));
      final st = t.state(find.byType(FamilyLineUpPage)) as FamilyLineUpPageState;
      expect(st.slots.length, greaterThanOrEqualTo(2));
      final before = [...st.slots];
      // A real tap on the screen where the first person stands picks them up, and a tap on another person swaps the two.
      final box = t.getRect(find.byType(CustomPaint).last);
      Offset at(int pos) {
        final u = (box.width / 450) < (box.height / 900) ? box.width / 450 : box.height / 900;
        final dx = box.left + (box.width - 450 * u) / 2, dy = box.top + (box.height - 900 * u) / 2;
        return Offset(dx + 450 * (pos + 0.5) / st.slots.length * u, dy + 560 * u);
      }
      await t.tapAt(at(0));
      await t.pump(const Duration(milliseconds: 100));
      expect(st.selected, before[0]);
      await t.tapAt(at(1));
      await t.pump(const Duration(milliseconds: 600));
      expect(st.slots[0], before[1]);
      expect(st.slots[1], before[0]);
      expect(st.selected, -1);
      for (var round = 0; round < st.rounds.length; round++) {
        final r = st.r;
        // Put the line right by swapping, one swap at a time.
        for (var k = 0; k < r.names.length; k++) {
          final want = [for (var p = 0; p < r.names.length; p++) p].firstWhere((p) => r.ranks[p] == k);
          if (st.slots[k] != want) {
            st.tapPerson(st.slots[k]);
            st.tapPerson(want);
          }
        }
        await t.pump(const Duration(milliseconds: 800));
        if (round == 1) {
          // A wrong line first: swap two, check, and the answer is shown.
          st.tapPerson(st.slots[0]);
          st.tapPerson(st.slots[1]);
          st.check();
          await t.pump(const Duration(milliseconds: 300));
          expect(st.correct, isFalse);
          expect(find.textContaining('The right line is'), findsOneWidget);
        } else {
          st.check();
          await t.pump(const Duration(milliseconds: 300));
          expect(st.correct, isTrue);
          expect(find.textContaining('right line'), findsOneWidget);
        }
        await st.next();
        await t.pump(const Duration(milliseconds: 300));
      }
      expect(st.done, isTrue);
      expect(st.rightRounds, st.rounds.length - 1);
      expect(find.text('Back to the games'), findsOneWidget);
      expect(await FamilyStars.total('l@x.y'), greaterThan(5));
    });

    testWidgets('Safari Journey: the bus drives to each stop, a villager asks, a wrong answer is a flat tyre, and Home is at the end', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: FamilyJourneyPage(tree: sampleTree(), email: 'j@x.y', seed: 6)));
      await t.pump(const Duration(milliseconds: 400));
      final st = t.state(find.byType(FamilyJourneyPage)) as FamilyJourneyPageState;
      expect(st.stage.name, 'intro');
      await t.tap(find.text('Start the journey'));
      await t.pump(const Duration(milliseconds: 200));
      expect(st.stage.name, 'driving');
      final start = st.scroll;
      for (var k = 0; k < 13; k++) {
        await t.pump(const Duration(milliseconds: 100));
      }
      expect(st.scroll, greaterThan(start), reason: 'the bus is moving');
      for (var i = 0; i < st.stops.length; i++) {
        // The bus drives in small steps, like real frames.
        for (var k = 0; k < 80 && st.stage.name == 'driving'; k++) {
          await t.pump(const Duration(milliseconds: 100));
        }
        expect(st.stage.name, 'asking', reason: 'stop ${i + 1}: the bus has arrived and a villager asks');
        expect(st.stop, i);
        await t.pump(const Duration(seconds: 3));
        final q = st.q;
        final wrong = i == 2;
        await t.tap(find.text(q.options[wrong ? (q.correct + 1) % q.options.length : q.correct]).last);
        await t.pump(const Duration(milliseconds: 300));
        expect(st.stage.name, 'reacting');
        expect(st.flat, wrong, reason: 'a wrong answer is a flat tyre');
        await t.pump(const Duration(seconds: 3));
        await t.tap(find.text(i + 1 >= st.stops.length ? 'Drive home' : 'Drive on'));
        await t.pump(const Duration(milliseconds: 100));
      }
      for (var k = 0; k < 80 && st.stage.name == 'driving'; k++) {
        await t.pump(const Duration(milliseconds: 100));
      }
      await t.pump(const Duration(milliseconds: 500));
      expect(st.stage.name, 'arrived');
      expect(st.right, st.stops.length - 1);
      expect(find.text('Back to the games'), findsOneWidget);
      expect(await FamilyStars.total('j@x.y'), greaterThan(20));
    });

    test('the people of the other games draw with every look, and every kind of portrait has a villager', () async {
      final rec = ui.PictureRecorder();
      final c = Canvas(rec);
      for (var look = 0; look < kFolkLooks; look++) {
        paintFolk(c, base: Offset(50.0 + look * 60, 150), scale: 1, look: look, t: 1.0, mouth: 0.6, smile: 0.8, handL: const Offset(-30, -90), handR: const Offset(30, -100), light: const Offset(0, 0));
      }
      rec.endRecording().dispose();
      expect(kFolkLooks, greaterThanOrEqualTo(8));
    });
  });
}
