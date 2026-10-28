import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_3d.dart';
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

  test('Each character is drawn differently (the dancer, the soldier and the robot are not the same shape)', () {
    int count(String a) {
      final b = MeshBuilder()..grouped = true;
      final polys = homeDynamic(HomeProject(seed: 4).rooms[0], 1.0, person: const PersonPose(room: 0, x: 0, z: 40, yaw: 0), personStyle: kAvatars[a]);
      b.polys.addAll(polys);
      return b.polys.length;
    }

    final counts = {for (final a in kAvatars.keys) a: count(a)};
    expect(counts['xbot'], isNot(counts['human']));
    expect(counts['soldier'], isNot(counts['human']));
    expect(counts['michelle'], isNot(counts['human']));
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
