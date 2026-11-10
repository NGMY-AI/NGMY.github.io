import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_community.dart';
import 'package:ngmy/ngmy_construction_home.dart';
import 'package:ngmy/ngmy_construction_homescene.dart';
import 'package:ngmy/ngmy_construction_tour.dart';

void main() {
  test('An ordinary person walks the house to begin with, and the tour guide can be switched', () {
    expect(ngmyPlayerAvatar, 'human');
    expect(playerStyle.avatar, 'human');
    ngmyPlayerAvatar = 'soldier';
    expect(playerStyle.avatar, 'soldier');
    ngmyPlayerAvatar = 'human';
    expect(kAvatars.keys, containsAll(['xbot', 'michelle', 'soldier']));
  });

  test('Residents are out in the city, and those with a call for help are shown calling', () {
    final home = HomeProject(seed: 4);
    final c = Community(houseSeed: 4);
    // Every resident is a real-looking person (never a robot or a soldier cut down to blobs), and they differ from each other.
    expect(kResidents.every((r) => r.style.avatar == 'human'), isTrue);
    expect(kResidents.map((r) => r.style.hairStyle).toSet().length, greaterThanOrEqualTo(4));
    expect(kResidents.where((r) => r.style.female), isNotEmpty);
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
