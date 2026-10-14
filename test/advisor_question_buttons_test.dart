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
    expect(parts.length, 2);
    expect(parts.first.frame, isNull);
    expect(parts.last.frame, isNotNull);
    expect(ngmySplitMessageIntoFrames('Ready?').single.frame, isNotNull);
  });
}
