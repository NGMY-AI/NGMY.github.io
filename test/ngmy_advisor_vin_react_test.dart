import 'dart:math' as math;

import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_chat_extras.dart';
import 'package:ngmy/ngmy_advisor_live_agent.dart';
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

  test('thank-yous and chatting never open the browser; real tasks do', () {
    for (final m in ['thank you baby', 'thanks!', 'lol', 'I love you', 'ok', '🙏', 'good night', "you're the best"]) {
      expect(ngmyUserMessageIsChitChat(m), isTrue, reason: m);
    }
    for (final m in ['help me apply for a job at Burger King', 'check my balance on chase.com', 'find me a 2 bedroom in Atlanta']) {
      expect(ngmyUserMessageIsChitChat(m), isFalse, reason: m);
    }
    expect(ngmyAdvisorAgentTaskIntent('help me apply for a job at Burger King'), isNotNull);
    // A VIN is answered from the records in chat, not by opening the browser.
    expect(ngmyAdvisorAgentTaskIntent('1HGCM82633A004352'), isNull);
    expect(ngmyUserCancelsWebTask('never mind'), isTrue);
  });

  test('reactions feel human: big feelings often, thanks only sometimes, and they vary', () {
    expect(ngmyAdvisorPickReactionEmoji(userMessage: "I'm so frustrated with work", aiReply: ''), '🫂');
    expect(ngmyAdvisorReactionChance('😂'), greaterThan(ngmyAdvisorReactionChance('🙏')));
    expect(ngmyAdvisorReactionChance('🙏'), lessThan(0.5));
    final r = math.Random(3);
    final seen = {for (var i = 0; i < 30; i++) ngmyAdvisorVaryReaction('😂', r, dating: false)};
    expect(seen.length, greaterThan(1));
    expect(ngmyAdvisorVaryReaction('🙏', r, dating: false, avoid: '🙏'), isNot('🙏'));
  });

  test('choices in a reply become buttons and are removed from the text', () {
    final (text, options) = ngmyExtractAdvisorOptions(
      'Which position do you want?\n[[NGMY_OPTIONS]]Cashier|Crew Member| Shift Manager |Not sure[[/NGMY_OPTIONS]]',
    );
    expect(text, 'Which position do you want?');
    expect(options, ['Cashier', 'Crew Member', 'Shift Manager', 'Not sure']);
    final parsed = ngmyParseAdvisorAssistantReply('Pick a shift [[NGMY_OPTIONS]]Morning|Night[[/NGMY_OPTIONS]]', userMessage: 'ok');
    expect(parsed.options, ['Morning', 'Night']);
    expect(parsed.text.contains('NGMY_OPTIONS'), isFalse);
  });
}
