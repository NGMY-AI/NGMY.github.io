import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_local_growth_income.dart';

void main() {
  group('Growth Income and the app share one balance', () {
    test('a Growth Income deposit adds exactly its amount', () {
      expect(
        ngmyGrowthIncomeAppliedBalance(appBalance: 100, alignedBase: 100, growthIncomeBalance: 150, allowDecrease: false),
        150,
      );
    });

    test('money spent in the app meanwhile is not given back', () {
      // App: 100 → spent 30 on a game (70). Growth Income still thought 100, then +50 deposit.
      expect(
        ngmyGrowthIncomeAppliedBalance(appBalance: 70, alignedBase: 100, growthIncomeBalance: 150, allowDecrease: false),
        120,
      );
    });

    test('money earned in the app meanwhile is not wiped', () {
      // App: 100 → admin added 25 (125). Growth Income withdraws 40 from its 100.
      expect(
        ngmyGrowthIncomeAppliedBalance(appBalance: 125, alignedBase: 100, growthIncomeBalance: 60, allowDecrease: true),
        85,
      );
    });

    test('a credit never lowers the balance', () {
      expect(
        ngmyGrowthIncomeAppliedBalance(appBalance: 80, alignedBase: 100, growthIncomeBalance: 90, allowDecrease: false),
        80,
      );
    });

    test('never goes below zero', () {
      expect(
        ngmyGrowthIncomeAppliedBalance(appBalance: 10, alignedBase: 50, growthIncomeBalance: 0, allowDecrease: true),
        0,
      );
    });
  });
}
