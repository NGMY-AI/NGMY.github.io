import 'package:flutter_test/flutter_test.dart';
import 'package:ngmy/ngmy_ui_lang.dart';
import 'package:shared_preferences/shared_preferences.dart';

void main() {
  test('the chosen language is saved and comes back after the app is reopened', () async {
    SharedPreferences.setMockInitialValues({});
    final first = NgmyLangStore('test_lang_a');
    await first.load();
    expect(first.isSw, isFalse);
    await first.set('sw');
    expect(first.t('Rankings', 'Viwango'), 'Viwango');

    // A fresh start of the app: a new store reads what was saved.
    final reopened = NgmyLangStore('test_lang_a');
    await reopened.load();
    expect(reopened.isSw, isTrue);

    await reopened.toggle();
    final again = NgmyLangStore('test_lang_a');
    await again.load();
    expect(again.isSw, isFalse);
  });

  test('Post work keeps its own language and starts in English', () async {
    SharedPreferences.setMockInitialValues({'ngmy_ui_lang_v1': 'sw'});
    final civic = NgmyLangStore('ngmy_ui_lang_v1');
    final post = NgmyLangStore('ngmy_post_work_lang_v1');
    await civic.load();
    await post.load();
    expect(civic.isSw, isTrue);
    expect(post.isSw, isFalse);
  });
}
