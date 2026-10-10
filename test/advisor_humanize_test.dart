import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_communicate.dart';

void main() {
  test('long dashes are turned into natural punctuation', () {
    expect(ngmyHumanizeDashes("No — I'm in a relationship."), "No, I'm in a relationship.");
    expect(ngmyHumanizeDashes("I'm taken right now — I can't."), "I'm taken right now, I can't.");
    expect(ngmyHumanizeDashes('Sure — .'), 'Sure.');
    expect(ngmyHumanizeDashes('A well-known place'), 'A well-known place');
  });
  test('fallback taken replies have no long dashes', () {
    for (var i = 0; i < 20; i++) {
      expect(ngmyAdvisorTakenBoundaryReply(gender: i.isEven ? 'female' : 'male').contains('—'), isFalse);
    }
  });
}
