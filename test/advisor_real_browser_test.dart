import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_browser_session.dart';

void main() {
  test('sign-in pages open in the real browser', () {
    expect(ngmyAdvisorNeedsRealBrowser('https://accounts.google.com/o/oauth2/auth?client_id=x'), isTrue);
    expect(ngmyAdvisorNeedsRealBrowser('https://pocketoption.com/en/login/'), isTrue);
    expect(ngmyAdvisorNeedsRealBrowser('https://m.pocketoption.com/en/sign-in'), isTrue);
    expect(ngmyAdvisorNeedsRealBrowser('https://example.com/register'), isTrue);
  });
  test('normal pages stay in the mini browser', () {
    expect(ngmyAdvisorNeedsRealBrowser('https://www.zillow.com/homes/3945-Napier-Ave_rb/'), isFalse);
    expect(ngmyAdvisorNeedsRealBrowser('https://bbc.com/news'), isFalse);
    expect(ngmyAdvisorNeedsRealBrowser('https://www.youtube.com/watch?v=abc'), isFalse);
  });
}
