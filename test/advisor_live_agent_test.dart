import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_live_agent.dart';

void main() {
  test('tasks on a website start the live browser', () {
    expect(ngmyAdvisorAgentTaskIntent('go to pocketoption.com and click Demo')?.url, 'https://pocketoption.com');
    expect(ngmyAdvisorAgentTaskIntent('open my profile and check my balance', currentUrl: 'https://beebots.tech'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('scroll down and tell me how much they lost', currentUrl: 'https://beebots.tech'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('search for flights to Kinshasa on google.com')?.url, 'https://google.com');
  });
  test('continue after logging in', () {
    final c = ngmyAdvisorAgentTaskIntent('ok I logged in', hasLiveSession: true);
    expect(c?.continuing, isTrue);
    expect(ngmyAdvisorAgentTaskIntent('continue', hasLiveSession: false), isNull);
  });
  test('normal chat does not start the browser', () {
    expect(ngmyAdvisorAgentTaskIntent('how are you today'), isNull);
    expect(ngmyAdvisorAgentTaskIntent('I want to find a wife'), isNull);
    expect(ngmyAdvisorAgentTaskIntent('thank you so much'), isNull);
    expect(ngmyAdvisorAgentTaskIntent('I want to find a wife', currentUrl: 'https://beebots.tech'), isNull);
  });
}
