import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_construction_electrical.dart';

void main() {
  bool isSilver((dynamic, dynamic) c) => c.$1 == kNickel;
  bool isBrass((dynamic, dynamic) c) => c.$1 == kBrass;

  test('every screw a hot wire goes on is brass or dark, and every neutral screw is silver', () {
    for (final l in kElectricalLessons) {
      final look = lessonScrewLook(l);
      if (look == null) continue;
      for (final h in l.hookups) {
        final c = look[h.id];
        if (c == null) continue;
        if (h.role == 'neutral') {
          expect(isSilver(c), isTrue, reason: '${l.id}: neutral screw ${h.name} must be silver');
        } else {
          expect(isSilver(c), isFalse, reason: '${l.id}: hot screw ${h.name} must not be silver');
        }
      }
      if (!l.hookups.any((h) => h.role == 'neutral') && !{'outlet', 'gfci', 'nema520'}.contains(l.look)) {
        expect(look.values.any(isSilver), isFalse, reason: '${l.id}: no neutral, so no silver screw');
      }
    }
  });

  test('four-way: brass IN pair on top, dark OUT pair at the bottom, black and red travelers, no white', () {
    final l = electricalLesson('switch4');
    final look = lessonScrewLook(l)!;
    expect(isBrass(look[idSilverTop]!) && isBrass(look[idBrassTop]!), isTrue);
    expect(look[idSilverBottom]!.$1, kDarkScrew);
    expect(look[idBrassBottom]!.$1, kDarkScrew);
    expect(l.chips.where((c) => c.role == 'neutral'), isEmpty);
    expect(l.chips.any((c) => c.label.startsWith('White')), isFalse);
  });

  test('three-way has three screws: a dark common and two brass travelers', () {
    final look = lessonScrewLook(electricalLesson('switch3'))!;
    expect(look.length, 3);
    expect(look[idSilverTop]!.$1, kDarkScrew);
  });

  test('double switch: feed on one side, the two lights on the other side', () {
    final l = electricalLesson('switchcombo');
    expect(l.solution[idBrassTop], 'feed');
    expect({l.solution[idSilverTop], l.solution[idSilverBottom]}, {'loadA', 'loadB'});
    expect(lessonScrewLook(l)!.values.every(isBrass), isTrue);
  });
}
