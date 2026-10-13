import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_chat_extras.dart';
import 'package:ngmy/ngmy_vin_lookup.dart';

void main() {
  test('finds a VIN pasted in a message', () {
    expect(ngmyFindVin('can you check 1hgcm82633a004352 for me'), '1HGCM82633A004352');
    expect(ngmyFindVin('my number is 12345678901234567'), isNull);
    expect(ngmyFindVin('hello there'), isNull);
    expect(ngmyVinCheckDigitOk('1HGCM82633A004352'), isTrue);
    expect(ngmyVinCheckDigitOk('1HGCM82643A004352'), isFalse);
  });

  test('advisor reacts with an emoji that fits the message', () {
    String r(String m) => ngmyAdvisorPickReactionEmoji(userMessage: m, aiReply: '');
    expect(r('ok sounds good'), '👍');
    expect(r("let's do it tomorrow"), '👍');
    expect(r('lol you are funny'), '😂');
    expect(r('I love you'), '❤️');
    expect(r('my dad passed away last night'), '😢');
    expect(r('thank you so much'), '🙏');
    expect(r('I got the job!!'), '🎉');
    expect(r('wow no way'), '😮');
    expect(r('what should I put on my resume?'), '');
  });
}
