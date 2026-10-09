import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_dating.dart';

void main() {
  test('dating requests and breakups are recognised', () {
    expect(ngmyUserAsksToDate('will you be my girlfriend?'), isTrue);
    expect(ngmyUserAsksToDate('can we date'), isTrue);
    expect(ngmyUserAsksToDate('help me with my business plan'), isFalse);
    expect(ngmyUserEndsRelationship("I think we should break up"), isTrue);
    expect(ngmyUserEndsRelationship('my car broke down'), isFalse);
  });
  test('pet names are removed only when used to address someone', () {
    expect(ngmyStripPetNames('Okay, love. I can help with that.'), 'Okay. I can help with that.');
    expect(ngmyStripPetNames('Love, I already typed it in.'), 'I already typed it in.');
    expect(ngmyStripPetNames('Hi honey, how are you?'), 'Hi, how are you?');
    expect(ngmyStripPetNames('I love that idea ❤️'), 'I love that idea');
    expect(ngmyStripPetNames('Your plan is beautiful work.'), 'Your plan is beautiful work.');
  });
}
