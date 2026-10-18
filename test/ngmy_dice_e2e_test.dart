import 'dart:math' as math;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_dice_config.dart';

/// Mirrors the server's dice rules (supabase/functions/ngmy-ai-chat): an admin reads and writes
/// everything, a player reads only their own rows and can only count their own rule down.
class _FakeServer {
  Map<String, dynamic> value = {};

  String _key(String e) {
    final k = e.toLowerCase().trim();
    return k.endsWith('+local.ngmy') ? k.substring(0, k.length - '+local.ngmy'.length) : k;
  }

  List<Map<String, dynamic>> _rows(dynamic v) =>
      v is List ? [for (final r in v) Map<String, dynamic>.from(r as Map)] : <Map<String, dynamic>>[];

  Map<String, dynamic>? read({required String who, required bool admin}) {
    if (value.isEmpty) return null;
    if (admin) return {...value, 'diceServer': 1};
    final me = _key(who);
    bool mine(Map<String, dynamic> r) => _key((r['email'] ?? '').toString()) == me;
    return {
      ...value,
      'diceServer': 1,
      'userGrants': _rows(value['userGrants']).where(mine).toList(),
      'userFaceRules': _rows(value['userFaceRules']).where(mine).toList(),
      'userOutcomeRules': _rows(value['userOutcomeRules']).where(mine).toList(),
      'playerState': _rows(value['playerState']).where(mine).toList(),
    };
  }

  void write({required String who, required bool admin, required Map<String, dynamic> incoming}) {
    if (admin) {
      value = Map<String, dynamic>.from(incoming);
      return;
    }
    final me = _key(who);
    bool mine(Map<String, dynamic> r) => _key((r['email'] ?? '').toString()) == me;
    final inRules = _rows(incoming['userOutcomeRules']);
    value = {
      ...value,
      'userOutcomeRules': [
        for (final row in _rows(value['userOutcomeRules']))
          if (!mine(row))
            row
          else
            () {
              final match = inRules.where((r) => mine(r) && '${r['updatedAt']}' == '${row['updatedAt']}');
              if (match.isEmpty) return row;
              final m = match.first;
              final next = Map<String, dynamic>.from(row);
              for (final f in ['winsLeft', 'losesLeft', 'plus3Left']) {
                next[f] = math.min((row[f] as num).toInt(), (m[f] as num).toInt());
              }
              return next;
            }(),
      ],
    };
  }
}

class _Phone {
  _Phone(this.server, this.email, this.admin);
  final _FakeServer server;
  final String email;
  final bool admin;
  NgmyDiceSettings cfg = NgmyDiceSettings();

  void wire() {
    NgmyDiceLive.fetchOverride = () async => server.read(who: email, admin: admin);
    NgmyDiceLive.upsertOverride = (v) async => server.write(who: email, admin: admin, incoming: v);
  }

  Future<int> roll(math.Random rng) async {
    wire();
    await NgmyDiceLive.pullForRoll(cfg);
    final o = ngmyPickDiceOutcome(cfg, email, rng);
    await NgmyDiceLive.push(cfg);
    return o;
  }

  Future<void> grant(String who, {required int wins, required int loses, int plus3 = 0}) async {
    wire();
    await NgmyDiceLive.pull(cfg);
    ngmySetUserOutcomeRule(cfg: cfg, email: who, wins: wins, loses: loses, plus3: plus3);
    expect(await NgmyDiceLive.push(cfg), isNull);
    final stamp = cfg.userOutcomeRules.first['updatedAt'] as String;
    expect(await NgmyDiceLive.verifyPlayerRule(who, stamp), isNull);
  }

  Future<Map<String, dynamic>> adminSees(String who) async {
    wire();
    await NgmyDiceLive.pull(cfg);
    return cfg.userOutcomeRules.firstWhere((g) => '${g['email']}'.startsWith(who.split('@').first));
  }
}

String _kind(int o) => o == 3 ? 'plus3' : (o > 0 ? 'win' : 'lose');

void main() {
  tearDown(() {
    NgmyDiceLive.fetchOverride = null;
    NgmyDiceLive.upsertOverride = null;
  });

  test('a granted player gets exactly the wins, loses and +3 the admin set, then normal play', () async {
    final server = _FakeServer();
    final admin = _Phone(server, 'boss@x.com', true);
    final leslie = _Phone(server, 'leslie@x.com+local.ngmy', false);
    final rng = math.Random(11);

    await admin.grant('Leslie@X.com+local.ngmy', wins: 3, loses: 2, plus3: 1);

    final played = <String>[];
    for (var i = 0; i < 6; i++) {
      played.add(_kind(await leslie.roll(rng)));
      final seen = await admin.adminSees('leslie@x.com');
      expect(
        (seen['winsLeft'] as int) + (seen['losesLeft'] as int) + (seen['plus3Left'] as int),
        5 - i,
        reason: 'admin sees each play right after it happens',
      );
    }
    expect(played.where((k) => k == 'win').length, 3);
    expect(played.where((k) => k == 'lose').length, 2);
    expect(played.where((k) => k == 'plus3').length, 1);
  });

  test('a new grant replaces the old one and the player follows only the new counts', () async {
    final server = _FakeServer();
    final admin = _Phone(server, 'boss@x.com', true);
    final leslie = _Phone(server, 'leslie@x.com', false);
    final rng = math.Random(5);

    await admin.grant('leslie@x.com', wins: 4, loses: 4);
    await leslie.roll(rng);
    await leslie.roll(rng);

    await admin.grant('leslie@x.com', wins: 1, loses: 0, plus3: 1);
    final next = <String>[await leslie.roll(rng).then(_kind), await leslie.roll(rng).then(_kind)];
    expect(next.toSet(), {'win', 'plus3'});
    expect((await admin.adminSees('leslie@x.com'))['winsLeft'], 0);
  });

  test('other players are never touched by a grant', () async {
    final server = _FakeServer();
    final admin = _Phone(server, 'boss@x.com', true);
    final tom = _Phone(server, 'tom@x.com', false);
    await admin.grant('leslie@x.com', wins: 0, loses: 5);

    tom.wire();
    await NgmyDiceLive.pull(tom.cfg);
    expect(tom.cfg.userOutcomeRules, isEmpty);
    final rng = math.Random(2);
    final plays = [for (var i = 0; i < 40; i++) await tom.roll(rng)];
    expect(plays.where((o) => o > 0), isNotEmpty);
  });
}
