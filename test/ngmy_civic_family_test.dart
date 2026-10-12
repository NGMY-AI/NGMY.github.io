import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_civic_family.dart';

void main() {
  final wife = {'relation': 'spouse', 'fullName': 'Jane Doe', 'gender': 'female', 'status': 'married'};
  final kid = {'relation': 'child', 'fullName': 'Tom Doe', 'gender': 'male', 'dob': '01/02/2015', 'status': 'single'};
  final marriedKid = {'relation': 'child', 'fullName': 'Ann Doe', 'gender': 'female', 'status': 'married'};

  test('counts only people still in the household', () {
    final c = ngmyCivicFamilyCounts('male', [wife, kid, marriedKid]);
    expect(c.total, 3);
    expect(c.males, 2);
    expect(c.females, 1);
    expect(c.allKnown, isTrue);
  });

  test('a child cannot be under more than two parents', () {
    final roster = [
      {'registryId': 'A1', 'relatives': [kid]},
      {'registryId': 'B1', 'relatives': [kid]},
    ];
    expect(ngmyCivicChildParentConflict(roster, [kid]), isNotNull);
    expect(ngmyCivicChildParentConflict(roster, [kid], excludeRegistryId: 'A1'), isNull);
  });

  testWidgets('+ Family opens the editor and adds a child', (tester) async {
    List<Map<String, dynamic>>? result;
    await tester.pumpWidget(MaterialApp(
      home: Scaffold(
        body: Builder(
          builder: (context) => NgmyCivicFamilyButton(
            relatives: const [],
            onTap: () async => result = await showNgmyCivicFamilyEditor(context, relatives: const [], headName: 'John Doe'),
          ),
        ),
      ),
    ));
    await tester.tap(find.text('Add family (spouse & children)'));
    await tester.pumpAndSettle();
    expect(find.text("John Doe's family"), findsOneWidget);
    await tester.tap(find.text('Add child'));
    await tester.pumpAndSettle();
    await tester.enterText(find.byType(TextField).first, 'Tom Doe');
    await tester.tap(find.text('Male').last);
    await tester.enterText(find.byType(TextField).at(2), '9');
    await tester.tap(find.text('Save'));
    await tester.pumpAndSettle();
    expect(find.text('Tom Doe'), findsOneWidget);
    await tester.tap(find.textContaining('Done'));
    await tester.pumpAndSettle();
    expect(result, hasLength(1));
    expect(result!.first['gender'], 'male');
    expect(result!.first['age'], 9);
  });
}
