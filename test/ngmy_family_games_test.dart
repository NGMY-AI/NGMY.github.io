import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'package:ngmy/ngmy_family_fireside.dart';
import 'package:ngmy/ngmy_family_games_engine.dart';
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

    test('memory pairs: each person has one clue and no clue is used twice', () {
      final pairs = memoryPairs(sampleTree(), seed: 4);
      expect(pairs.length, greaterThanOrEqualTo(3));
      expect(pairs.map((p) => p.clue).toSet().length, pairs.length);
      expect(pairs.map((p) => p.id).toSet().length, pairs.length);
      expect(memoryPairs(tinyTree()).length, lessThan(3));
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
      t.view.physicalSize = const Size(900, 2200);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      var saved = <Map<String, dynamic>>[];
      await t.pumpWidget(MaterialApp(home: NgmyFamilyGamesPage(tree: sampleTree(), userEmail: 'owner@example.com', isOwner: true, onSaveGames: (g) async => saved = g)));
      await _settle(t);
      for (final name in ['Family Kahoot', 'Fireside Stories', 'Memory Drums', 'Elder Order', 'Family Test']) {
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
      t.view.physicalSize = const Size(900, 2200);
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

    testWidgets('Family Test: ten questions, a grade and a certificate, and the mistakes are explained', (t) async {
      t.view.physicalSize = const Size(900, 2000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: FamilyTestPage(tree: sampleTree(), email: 'test@x.y', seed: 4)));
      await _settle(t);
      final st = t.state(find.byType(FamilyTestPage)) as FamilyTestPageState;
      for (var i = 0; i < 10; i++) {
        final q = st.qs[i];
        // Get every third answer wrong.
        final pick = i % 3 == 2 ? (q.correct + 1) % q.options.length : q.correct;
        await t.tap(find.text(q.options[pick]).first);
        await t.pump();
        await t.tap(find.text(i == 9 ? 'Hand in the test' : 'Next question'));
        await t.pump(const Duration(milliseconds: 100));
      }
      await t.pump(const Duration(milliseconds: 300));
      expect(st.done, isTrue);
      expect(find.text('CERTIFICATE'), findsOneWidget);
      expect(find.text('LET US LEARN FROM THESE'), findsOneWidget);
      expect(await FamilyStars.total('test@x.y'), greaterThan(0));
    });

    testWidgets('Memory Drums: flipping two that do not match turns them back, matching all of them wins', (t) async {
      t.view.physicalSize = const Size(900, 2000);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: MemoryDrumsPage(tree: sampleTree(), email: 'm@x.y', seed: 3)));
      await _settle(t);
      final st = t.state(find.byType(MemoryDrumsPage)) as MemoryDrumsPageState;
      // A wrong pair first: two cards that are not each other's partner.
      final a = 0;
      final b = [for (var i = 1; i < st.cards.length; i++) i].firstWhere((i) => st.cards[i].pairId != st.cards[a].pairId);
      st.flip(a);
      st.flip(b);
      await t.pump();
      expect(st.cards[a].up && st.cards[b].up, isTrue);
      await t.pump(const Duration(milliseconds: 400));
      expect(find.text(st.cards[a].text), findsOneWidget, reason: 'a drum that is flipped shows its words');
      await t.pump(const Duration(seconds: 1));
      expect(st.cards[a].up || st.cards[b].up, isFalse, reason: 'they turn back');
      // Now match everything.
      for (final p in st.pairs) {
        final i = st.cards.indexWhere((c) => c.pairId == p.id && c.isName);
        final j = st.cards.indexWhere((c) => c.pairId == p.id && !c.isName);
        st.flip(i);
        st.flip(j);
        await t.pump(const Duration(milliseconds: 50));
      }
      await t.pump(const Duration(seconds: 1));
      expect(st.done, isTrue);
      expect(find.text('Every drum is matched!'), findsOneWidget);
      expect(await FamilyStars.total('m@x.y'), greaterThanOrEqualTo(st.pairs.length * 5));
    });

    testWidgets('Elder Order: the right order wins, a wrong one is explained', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: ElderOrderPage(tree: sampleTree(), email: 'o@x.y', seed: 2)));
      await _settle(t);
      final st = t.state(find.byType(ElderOrderPage)) as ElderOrderPageState;
      for (var r = 0; r < st.rounds.length; r++) {
        final round = st.rounds[r];
        final wrongRound = r == 1;
        final order = [for (var k = 0; k < round.names.length; k++) k]..sort((a, b) => round.ranks[a].compareTo(round.ranks[b]));
        final tapOrder = wrongRound ? order.reversed.toList() : order;
        for (final i in tapOrder) {
          st.tap(i);
        }
        await t.pump();
        expect(st.correct, !wrongRound, reason: 'round ${r + 1}');
        expect(st.checked, isTrue);
        await st.next();
        await t.pump();
      }
      expect(st.done, isTrue);
      expect(st.rightRounds, st.rounds.length - 1);
    });

    testWidgets('Fireside Stories: the elder is the oldest in the tree, teaches, asks, and the fire grows with right answers', (t) async {
      t.view.physicalSize = const Size(900, 1800);
      t.view.devicePixelRatio = 2.0;
      addTearDown(t.view.reset);
      await t.pumpWidget(MaterialApp(home: FamilyFiresidePage(tree: sampleTree(), email: 'f@x.y', seed: 5)));
      await t.pump(const Duration(milliseconds: 300));
      final st = t.state(find.byType(FamilyFiresidePage)) as FamilyFiresidePageState;
      expect(st.elderName, 'Babu Juma');
      expect(find.textContaining('Babu Juma'), findsWidgets);
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

    test('the village scene builds: huts, a baobab, stars and the people round the fire', () {
      final s = buildVillageScene();
      expect(s.polys.length, greaterThan(400));
    });
  });
}
