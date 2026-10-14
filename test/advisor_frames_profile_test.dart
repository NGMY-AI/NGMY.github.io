import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_live_agent.dart';
import 'package:ngmy/ngmy_advisor_message_frames.dart';
import 'package:ngmy/ngmy_advisor_shared_profile.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('detail lines and questions get frames that fit', () {
    final parts = ngmySplitMessageIntoFrames(
      'Great pick! I just need a few things:\n• Legal name (first and last):\n• Email: kb@x.com\n• Home address:\n'
      'Which shift works best for you — mornings or nights?',
    );
    expect(parts.first.frame, isNull);
    expect(parts.where((p) => p.detail).map((p) => p.frame), ['name', 'email', 'address']);
    expect(parts.last.frame, 'time');
    expect(kNgmyMessageFrames.length, 20);
    expect(ngmySplitMessageIntoFrames('ok sounds good').every((p) => p.frame == null), isTrue);
  });

  testWidgets('framed message renders', (t) async {
    await t.pumpWidget(const MaterialApp(home: Scaffold(body: NgmyFramedMessageText('Hi!\n• Phone: 478-555-1234\nAre you eligible to work in the US?'))));
    expect(find.text('478-555-1234'), findsOneWidget);
    expect(find.text('Are you eligible to work in the US?'), findsOneWidget);
  });

  test('shared profile remembers and never needs re-asking', () async {
    SharedPreferences.setMockInitialValues({});
    expect(ngmyTextMayHoldPersonalDetails('Kevin Brown', askedBefore: "What's your legal first and last name?"), isTrue);
    expect(ngmyTextMayHoldPersonalDetails('haha that is funny', askedBefore: 'How was your day?'), isFalse);
    expect(ngmyTextMayHoldPersonalDetails('I live at 123 Pio Nono Ave Macon'), isTrue);
    final p = await NgmySharedProfileStore.merge('a@b.com', {'first_name': 'Kevin', 'last_name': 'Brown', 'age': '24', 'city': 'Macon'});
    expect(p.fullName, 'Kevin Brown');
    expect((await NgmySharedProfileStore.load('A@B.com'))['city'], 'Macon');
    expect(p.missing(), contains('email'));
    expect(p.detailsLine(accountPhone: '4785551234'), contains('not confirmed yet'));
  });

  test('details are read straight from the text', () {
    final a = ngmyQuickDetails('Macon Georgia my address is 2260 Shurling Dr, Macon GA 31211');
    expect(a['street'], '2260 Shurling Dr');
    expect(a['city'], 'Macon');
    expect(a['state'], 'GA');
    expect(a['zip'], '31211');
    expect(ngmyQuickDetails('Kevin Brown', askedBefore: 'What is your legal first and last name?'), {'first_name': 'Kevin', 'last_name': 'Brown'});
    expect(ngmyQuickDetails('478-555-1234', askedBefore: 'Best phone number?')['phone'], '478-555-1234');
    expect(ngmyQuickDetails("I'm 24 years old")['age'], '24');
    expect(ngmyQuickDetails('my mom lives at 12 Oak St'), isEmpty);
  });

  test('go-ahead messages and fake claims are caught', () {
    expect(ngmyUserSaysGo('open the live computer'), isTrue);
    expect(ngmyUserSaysGo('continue'), isTrue);
    expect(ngmyUserSaysGo('continue applying for a job a Kroger for me'), isTrue);
    expect(ngmyUserSaysGo('I love you'), isFalse);
    expect(ngmyAdvisorReplyClaimsBrowsing("That's all the info needed! I'll get that all put together for you."), isTrue);
    expect(ngmyAdvisorReplyClaimsBrowsing('Okay, my love, opening the live computer for you now.'), isTrue);
    expect(ngmyAdvisorReplyClaimsBrowsing('Now that the live computer is open, would you like to review?'), isTrue);
    expect(ngmyAdvisorAgentTaskIntent('open the live computer'), isNotNull);
  });
}
