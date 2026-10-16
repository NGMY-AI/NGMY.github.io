import 'dart:math' as math;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_dice_config.dart';

List<int> _play(NgmyDiceSettings cfg, String email, int times, {int seed = 7}) {
  final rng = math.Random(seed);
  return [for (var i = 0; i < times; i++) ngmyPickDiceOutcome(cfg, email, rng)];
}

void main() {
  test('one user: next plays win and lose exactly as set, then normal play', () {
    final cfg = NgmyDiceSettings();
    ngmySetUserOutcomeRule(cfg: cfg, email: 'Ana@Example.com', wins: 2, loses: 3);

    final outcomes = _play(cfg, 'ana@example.com', 5);
    expect(outcomes.where((o) => o > 0).length, 2);
    expect(outcomes.where((o) => o < 0).length, 3);

    final rule = cfg.userOutcomeRules.single;
    expect(rule['winsLeft'], 0);
    expect(rule['losesLeft'], 0);
  });

  test('one user: remaining counts drop one play at a time', () {
    final cfg = NgmyDiceSettings();
    ngmySetUserOutcomeRule(cfg: cfg, email: 'ben@example.com', wins: 3, loses: 0);
    final rng = math.Random(3);
    final left = <int>[];
    for (var i = 0; i < 3; i++) {
      final o = ngmyPickDiceOutcome(cfg, 'ben@example.com', rng);
      expect(o, greaterThan(0));
      left.add(cfg.userOutcomeRules.single['winsLeft'] as int);
    }
    expect(left, [2, 1, 0]);
  });

  test('one user rule does not touch other players', () {
    final cfg = NgmyDiceSettings();
    ngmySetUserOutcomeRule(cfg: cfg, email: 'ben@example.com', wins: 0, loses: 4);
    _play(cfg, 'cara@example.com', 10);
    expect(cfg.userOutcomeRules.single['losesLeft'], 4);
  });

  test('everyone: each player wins and loses the set amount per day, then normal', () {
    final cfg = NgmyDiceSettings();
    ngmySetCrowdRule(cfg: cfg, period: 'day', wins: 2, loses: 1);

    for (final email in ['a@example.com', 'b@example.com']) {
      final firstThree = _play(cfg, email, 3);
      expect(firstThree.where((o) => o > 0).length, 2, reason: email);
      expect(firstThree.where((o) => o < 0).length, 1, reason: email);
      final left = ngmyCrowdRemaining(cfg, email);
      expect(left.wins, 0);
      expect(left.loses, 0);
    }
  });

  test('everyone: saving again starts a fresh count', () async {
    final cfg = NgmyDiceSettings();
    ngmySetCrowdRule(cfg: cfg, period: 'day', wins: 1, loses: 0);
    expect(_play(cfg, 'a@example.com', 1).single, greaterThan(0));
    expect(ngmyCrowdRemaining(cfg, 'a@example.com').wins, 0);

    await Future<void>.delayed(const Duration(milliseconds: 5));
    ngmySetCrowdRule(cfg: cfg, period: 'day', wins: 2, loses: 0);
    expect(ngmyCrowdRemaining(cfg, 'a@example.com').wins, 2);
    final next = _play(cfg, 'a@example.com', 2);
    expect(next.every((o) => o > 0), isTrue);
  });

  test('everyone: turning it off returns to normal play', () {
    final cfg = NgmyDiceSettings();
    ngmySetCrowdRule(cfg: cfg, period: 'week', wins: 0, loses: 0);
    final rng = math.Random(5);
    final outcomes = [for (var i = 0; i < 40; i++) ngmyPickDiceOutcome(cfg, 'a@example.com', rng)];
    expect(outcomes.any((o) => o > 0), isTrue);
    expect(outcomes.any((o) => o < 0), isTrue);
  });

  test('personal rule beats the everyone rule', () {
    final cfg = NgmyDiceSettings();
    ngmySetCrowdRule(cfg: cfg, period: 'day', wins: 5, loses: 0);
    ngmySetUserOutcomeRule(cfg: cfg, email: 'x@example.com', wins: 0, loses: 2);
    final outcomes = _play(cfg, 'x@example.com', 2);
    expect(outcomes.every((o) => o < 0), isTrue);
    expect(_play(cfg, 'x@example.com', 1).single, greaterThan(0));
  });

  test('settings survive a save and load', () {
    final cfg = NgmyDiceSettings();
    ngmySetCrowdRule(cfg: cfg, period: 'week', wins: 4, loses: 2);
    ngmySetUserOutcomeRule(cfg: cfg, email: 'y@example.com', name: 'Yara', wins: 1, loses: 1);
    final back = NgmyDiceSettings.fromJson(cfg.toJson());
    expect(back.crowdRule['wins'], 4);
    expect(back.crowdRule['period'], 'week');
    expect(back.userOutcomeRules.single['name'], 'Yara');
    expect(back.userOutcomeRules.single['winsLeft'], 1);
  });

  test('merge: a player counting down never undoes a newer admin rule', () async {
    final admin = NgmyDiceSettings();
    ngmySetUserOutcomeRule(cfg: admin, email: 'z@example.com', wins: 3, loses: 0);
    final player = NgmyDiceSettings.fromJson(admin.toJson());
    _play(player, 'z@example.com', 2);
    expect(player.userOutcomeRules.single['winsLeft'], 1);

    ngmyMergeDiceRules(admin, player);
    expect(admin.userOutcomeRules.single['winsLeft'], 1);

    await Future<void>.delayed(const Duration(milliseconds: 5));
    ngmySetUserOutcomeRule(cfg: admin, email: 'z@example.com', wins: 5, loses: 0);
    ngmyMergeDiceRules(admin, player);
    expect(admin.userOutcomeRules.single['winsLeft'], 5);
  });

  test('merge: stopping a rule stays stopped when a stale copy arrives', () async {
    final admin = NgmyDiceSettings();
    ngmySetUserOutcomeRule(cfg: admin, email: 'z@example.com', wins: 3, loses: 3);
    final stale = NgmyDiceSettings.fromJson(admin.toJson());

    await Future<void>.delayed(const Duration(milliseconds: 5));
    ngmyClearUserDiceRules(admin, 'z@example.com');
    ngmyMergeDiceRules(admin, stale);

    final rule = admin.userOutcomeRules.single;
    expect(rule['winsLeft'], 0);
    expect(rule['losesLeft'], 0);
    expect(_play(admin, 'z@example.com', 1).length, 1);
  });

  test('merge: crowd counters from another phone never go backwards', () {
    final a = NgmyDiceSettings();
    ngmySetCrowdRule(cfg: a, period: 'day', wins: 3, loses: 0);
    final b = NgmyDiceSettings.fromJson(a.toJson());
    _play(b, 'p@example.com', 2);
    ngmyMergeDiceRules(a, b);
    expect(ngmyCrowdRemaining(a, 'p@example.com').wins, 1);
  });
}
