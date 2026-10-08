import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_chat_extras.dart';

void main() {
  test('parses reaction tag and open_url browser card', () {
    const raw = '''
On it — opening that for you now.

[[NGMY_REACT_USER]]👍[[/NGMY_REACT_USER]]
[[NGMY_PHONE_ACTIONS]]
[{"type":"open_url","url":"https://example.com","label":"Viewing account area"}]
[[/NGMY_PHONE_ACTIONS]]
''';
    final parsed = ngmyParseAdvisorAssistantReply(raw, userMessage: 'Demo again');
    expect(parsed.text.contains('NGMY'), isFalse);
    expect(parsed.reactionEmoji, '👍');
    expect(parsed.browserUrl, 'https://example.com');
    expect(parsed.browserLabel, 'Viewing account area');
    expect(parsed.actions.length, 1);
  });

  test('heuristic reaction for thank you', () {
    expect(
      ngmyAdvisorPickReactionEmoji(userMessage: 'Thank you so much', aiReply: 'Anytime'),
      '🙏',
    );
  });
}
