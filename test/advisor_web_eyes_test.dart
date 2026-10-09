import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_advisor_web_eyes.dart';

void main() {
  test('advisor notices when asked to browse', () {
    expect(ngmyAdvisorBrowseIntent('open pocketoption.com for me')?.url, 'https://pocketoption.com');
    expect(ngmyAdvisorBrowseIntent('check this https://ngmy.org/menu.')?.url, 'https://ngmy.org/menu');
    expect(ngmyAdvisorBrowseIntent('look up the latest news on Congo'), isNotNull);
    expect(ngmyAdvisorBrowseIntent('what is the current price of bitcoin'), isNotNull);
    expect(ngmyAdvisorBrowseIntent('can you open the browser'), isNotNull);
  });
  test('normal chat does not trigger the browser', () {
    expect(ngmyAdvisorBrowseIntent('hey how are you'), isNull);
    expect(ngmyAdvisorBrowseIntent('I lost my google account password'), isNull);
    expect(ngmyAdvisorBrowseIntent('I want to open a business'), isNull);
    expect(ngmyAdvisorBrowseIntent('Demo again'), isNull);
  });
  test('prompt is honest when the page failed', () {
    final block = ngmyAdvisorBrowsePromptBlock((
      ok: false,
      summary: '',
      url: '',
      title: '',
      sources: const <({String url, String title})>[],
      screenshotB64: null,
      error: 'timeout',
    ));
    expect(block, contains('do NOT pretend'));
  });
}
