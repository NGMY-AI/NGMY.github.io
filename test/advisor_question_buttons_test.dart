import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_message_frames.dart';
import 'package:ngmy/ngmy_advisor_shared_profile.dart';

void main() {
  const p = NgmySharedProfile({'first_name': 'Kevin', 'last_name': 'Brown', 'city': 'Macon', 'state': 'GA', 'phone': '478-555-1234'});
  test('questions get tap-to-answer buttons', () {
    expect(ngmyInferReplyOptions('Got it! Would you like me to apply now?'), ['Yes', 'No']);
    expect(ngmyInferReplyOptions("What's the best phone number to reach you?", profile: p), ['Use 478-555-1234', 'A different number']);
    expect(ngmyInferReplyOptions('Which area should I look in?', profile: p), ['Macon, GA', 'Somewhere else']);
    expect(ngmyInferReplyOptions('Do you prefer mornings, afternoons or evenings?'), ['Mornings', 'Afternoons', 'Evenings']);
    expect(ngmyInferReplyOptions('Tell me about your day.'), isEmpty);
    expect(ngmyInferReplyOptions('What made you smile today?'), isEmpty);
    expect(ngmyDifferentOneRequest('A different number'), contains('number'));
    expect(ngmyConfirmsDetails('Yes, use these'), isTrue);
  });

  test('only the question is framed, even with an emoji after it', () {
    final parts = ngmySplitMessageIntoFrames('Okay, my love, opening it now. What would you like to do first? ❤️');
    expect(parts.length, 3); // lead-in, the question, the emoji
    expect(parts.first.frame, isNull);
    expect(parts[1].frame, isNotNull);
    expect(parts.last.frame, isNull);
    expect(ngmySplitMessageIntoFrames('Ready?').single.frame, isNotNull);
  });

  test('only the question itself is framed, not the lead-in', () {
    String framed(String t) => ngmySplitMessageIntoFrames(t).where((p) => p.frame != null).single.text;
    String plain(String t) => ngmySplitMessageIntoFrames(t).where((p) => p.frame == null).map((p) => p.text).join(' ');
    expect(framed('OK my love the application is asking have you ever done any crime?'), 'Have you ever done any crime?');
    expect(plain('OK my love the application is asking have you ever done any crime?'), 'OK my love the application is asking');
    expect(framed('OK my love this is what the application says have you ever done any drugs?'), 'Have you ever done any drugs?');
    expect(framed('Quick one from the application — Are you eligible to work in the US?'), 'Are you eligible to work in the US?');
    expect(framed('Okay babe, the form wants to know if you have a driver license?'), 'Do you have a driver license?');
    expect(framed('Okay, my love, opening it now. What would you like to do first? ❤️'), 'What would you like to do first?');
    expect(framed('Would you like me to apply now?'), 'Would you like me to apply now?');
  });
}
