import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_live_agent.dart';

void main() {
  test('tasks on a website start the live browser', () {
    expect(ngmyAdvisorAgentTaskIntent('go to pocketoption.com and click Demo')?.url, 'https://pocketoption.com');
    expect(ngmyAdvisorAgentTaskIntent('open my profile and check my balance', currentUrl: 'https://beebots.tech'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('scroll down and tell me how much they lost', currentUrl: 'https://beebots.tech'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('search for flights to Kinshasa on google.com')?.url, 'https://google.com');
  });
  test('applications and named websites start the live browser', () {
    expect(ngmyAdvisorAgentTaskIntent('help me apply for college at middle Georgia State University MGA'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('open the MGA website and help me apply'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('open the Zillow website'), isNotNull);
  });
  test('complaints that it stopped resume the task', () {
    expect(ngmyAdvisorAgentTaskIntent('you not continuing', hasLiveSession: true)?.continuing, isTrue);
    expect(ngmyAdvisorAgentTaskIntent("I don't see it in the screen", hasLiveSession: true)?.continuing, isTrue);
    expect(ngmyAdvisorAgentTaskIntent("I don't see it in the screen"), isNull);
  });
  test('VIN lookups and "open it live" start the live browser', () {
    expect(ngmyAdvisorAgentTaskIntent('this is my car Vin 1FBZX2ZM9GKA78607 and I need all the information about this car and the mileage'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('open it live so you can search it out'), isNotNull);
    expect(ngmyAdvisorAgentTaskIntent('refresh the page', hasLiveSession: true)?.continuing, isTrue);
    expect(ngmyAdvisorAgentTaskIntent('tell me everything about your day'), isNull);
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
