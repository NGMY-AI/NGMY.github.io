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

  test('Residents are out in the city, and those with a call for help are shown calling', () {
    final home = HomeProject(seed: 4);
    final c = Community(houseSeed: 4);
    expect(kResidents.where((r) => r.style.avatar != 'human'), isNotEmpty);
    expect(c.figuresIn(home, 11).length, 7);
    for (final r in home.indoor) {
      expect(c.figuresIn(home, r.id), isEmpty);
    }
    c.calls.add(HelpCall(99, 0, 'power', 'No power', 3));
    final all = c.figuresIn(home, 11);
    final caller = all.firstWhere((f) => f.id == 0);
    expect(caller.calling && caller.label.contains('📞'), isTrue);
    expect(caller.wander, 0, reason: 'someone on the phone stands still');
    expect(buildHomeRoom(home.rooms[11], residents: all).labels.any((l) => l.text.contains('Help')), isTrue);
  });
}
