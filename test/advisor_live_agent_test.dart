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
  test('"open it live" starts the live browser; a VIN is answered in chat from the records', () {
    expect(ngmyAdvisorAgentTaskIntent('this is my car Vin 1FBZX2ZM9GKA78607 and I need all the information about this car'), isNull);
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

  test('a page that would not load is retried on another connection', () {
    expect(ngmyAgentTextShowsNetworkBlock('This site can’t be reached ERR_TUNNEL_CONNECTION_FAILED'), isTrue);
    expect(ngmyAgentTextShowsNetworkBlock('notes: NETWORK_BLOCKED'), isTrue);
    expect(ngmyAgentTextShowsNetworkBlock("The official McDonald's job site wouldn't load for me"), isTrue);
    expect(ngmyAgentTextShowsNetworkBlock('Found 3 cashier jobs in Macon'), isFalse);
  });

  test('job and lookup requests go to the browser planner; chatting does not', () {
    expect(ngmyMessageMightBeWebTask('find me a job at KFC'), isTrue);
    expect(ngmyMessageMightBeWebTask('I want to work at Walmart in Macon GA'), isTrue);
    expect(ngmyMessageMightBeWebTask('thank you baby'), isFalse);
    expect(ngmyMessageMightBeWebTask('how was your day'), isFalse);
  });

  test('a reply that only pretends to search is caught', () {
    expect(ngmyAdvisorReplyClaimsBrowsing("I'm searching for that now on their careers site. Keep an eye on the browser."), isTrue);
    expect(ngmyAdvisorReplyClaimsBrowsing("Got it, Macon, GA! I'm putting that into the KFC search now"), isTrue);
    expect(ngmyAdvisorReplyClaimsBrowsing('That sounds like a great plan, I am proud of you'), isFalse);
  });

  test('form question buttons fit the question', () {
    expect(ngmyFormQuestionOptions('Are you eligible to work in the United States?', const []), ['Yes', 'No']);
    expect(ngmyFormQuestionOptions('What is your phone number?', const ['Yes', 'No'], accountPhone: '4785551234'),
        ['Use 4785551234', 'Use a different number']);
    expect(ngmyFormQuestionOptions('Email address', const [], accountEmail: 'a@b.com'), ['Use a@b.com', 'Use a different email']);
    expect(ngmyFormQuestionOptions('What is your home address?', const ['Yes', 'No']), isEmpty);
    expect(ngmyFormQuestionOptions('Which shift do you prefer?', const ['Morning', 'Night']), ['Morning', 'Night']);
  });

  test('several form questions at once are typed, not Yes/No', () {
    const q = '1. Are you eligible to work in the United States?\n2. Have you ever been convicted of a felony?';
    expect(ngmyFormQuestionCount(q), 2);
    expect(ngmyFormQuestionOptions(q, const ['Yes', 'No']), isEmpty);
    expect(ngmyFormQuestionOptions('Are you 18 or older?', const []), ['Yes', 'No']);
  });
}
