import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_chat_extras.dart';
import 'package:ngmy/ngmy_ai_app_bridge.dart';
import 'package:ngmy/ngmy_phone_integrations.dart';

void main() {
  testWidgets('advisor places survive a chat screen registering its own tools', (tester) async {
    await tester.pumpWidget(const MaterialApp(home: SizedBox()));
    final ctx = tester.element(find.byType(SizedBox));
    Map<String, String>? seenArgs;
    NgmyAiAppBridge.registerAppWide(
      context: () => ctx,
      places: {
        'civic_member': NgmyAiPlace(
          description: 'Open a member',
          args: 'query',
          open: (c, args) async {
            seenArgs = args;
            return 'Opened member.';
          },
        ),
      },
      lookups: {
        'civic_member': (
          description: 'Member details',
          run: (args) async => NgmyAiLookupResult('Found ${args['query']}', goTo: [
            {'tool': 'civic_member', 'query': 'NGMY-1'},
          ]),
        ),
      },
    );
    NgmyAiAppBridge.register(context: () => ctx, tools: {'qr_generator': (c) async => 'Opened QR.'});
    NgmyAiAppBridge.clear();

    final msg = await ngmyRunPhoneAction(
      const NgmyPhoneAction(type: 'open_tool', fields: {'tool': 'civic_member', 'query': 'Jane Doe', 'label': 'Open Jane'}),
      skipConfirmation: true,
    );
    expect(msg, 'Opened member.');
    expect(seenArgs, {'query': 'Jane Doe', 'label': 'Open Jane'});

    final found = await NgmyAiAppBridge.lookup('civic_member', {'query': 'Jane Doe'});
    expect(found.text, 'Found Jane Doe');
    expect(found.goTo.single['query'], 'NGMY-1');
    expect(NgmyAiAppBridge.catalogForPrompt(), contains('civic_member'));
    expect(ngmyAdvisorAppNavigatorContext(), contains('app_lookup'));
  });

  test('advisor replies carry lookups and go-now places', () {
    const reply = 'Let me check Civic Registry for Jane.\n'
        '[[NGMY_PHONE_ACTIONS]]\n'
        '[{"type":"app_lookup","kind":"civic_member","query":"Jane Doe"},'
        '{"type":"open_tool","tool":"civic_registry","go":true,"label":"Open Civic Registry"}]\n'
        '[[/NGMY_PHONE_ACTIONS]]';
    final parsed = ngmyParseAdvisorAssistantReply(reply, userMessage: 'find Jane Doe');
    expect(parsed.text, 'Let me check Civic Registry for Jane.');
    expect(parsed.actions.where((a) => a.type == 'app_lookup').single.fields['query'], 'Jane Doe');
    expect(parsed.actions.where(ngmyAdvisorActionGoesNow).single.fields['tool'], 'civic_registry');
    final chips = ngmyAdvisorPhoneActionsForChips(parsed.actions);
    expect(chips.map((a) => a.type), ['open_tool']);
    expect(chips.single.summary, 'Open Civic Registry');
  });
}
