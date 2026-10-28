import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_tour.dart';

void main() {
  test('The X Bot is the one who walks the house to begin with, and the tour guide can be switched', () {
    expect(ngmyPlayerAvatar, 'xbot');
    expect(playerStyle.avatar, 'xbot');
    ngmyPlayerAvatar = 'soldier';
    expect(playerStyle.avatar, 'soldier');
    ngmyPlayerAvatar = 'xbot';
    expect(kAvatars.keys, containsAll(['xbot', 'michelle', 'soldier']));
  });

  test('Residents call on the phone and some of them walk out into the garden and back', () {
    final home = HomeProject(seed: 4);
    final c = Community(houseSeed: 4);
    expect(kResidents.where((r) => r.style.avatar != 'human'), isNotEmpty);
    var out = 0, inside = 0;
    for (var i = 0; i < 6; i++) {
      c.clock = i * 40.0;
      final garden = c.figuresIn(home, home.rooms.firstWhere((r) => !r.indoor).id);
      out += garden.length;
      for (final r in home.indoor) {
        inside += c.figuresIn(home, r.id).length;
      }
    }
    expect(out, greaterThan(0));
    expect(inside, greaterThan(0));
    c.calls.add(HelpCall(99, 0, 'power', 'No power', 3));
    c.clock = 0;
    final all = [for (final r in home.rooms) ...c.figuresIn(home, r.id)];
    expect(all.where((f) => f.calling && f.label.contains('📞')), isNotEmpty);
  });
}
